FROM serversideup/php:8.5-frankenphp-v4.4.1 AS base

USER root

# Install additional PHP extensions
RUN install-php-extensions excimer exif gd intl

# Composer dependencies stage
FROM base AS composer-dependencies

RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

COPY composer.json composer.lock ./

RUN composer install --no-autoloader --no-dev --no-interaction --no-scripts --prefer-dist

# Nub tooling stage
FROM base AS nub-runtime

COPY .node-version ./

# Ensure Nub is available on PATH for subsequent layers
ENV PATH="/usr/local/.nub/bin:${PATH}"

# Install Nub into a shared location that remains executable after switching to www-data
RUN curl -fsSL https://nubjs.com/install.sh | HOME=/usr/local bash -s -- \
    && HOME=/usr/local nub node install \
    && ln -sf "$(HOME=/usr/local nub node which)" /usr/local/bin/node

# JS dependencies stage
FROM nub-runtime AS js-dependencies

RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

# Copy only manifest files before installing dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install js dependencies
RUN nub ci

# Asset build stage
FROM js-dependencies AS frontend-build

ARG RAILWAY_GIT_COMMIT_SHA
ARG SENTRY_AUTH_TOKEN

# Copy files and dependencies for Wayfinder route generation
COPY . .
COPY --from=composer-dependencies $APP_BASE_DIR/vendor ./vendor

RUN composer install --no-dev --no-interaction --optimize-autoloader --prefer-dist

# Build frontend assets
RUN nub run build

# Release stage
FROM base AS final

# ServerSideUp environment settings - https://serversideup.net/open-source/docker-php/docs/reference/environment-variable-specification
ENV AUTORUN_ENABLED=true \
    AUTORUN_LARAVEL_MIGRATION_ISOLATION=true \
    AUTORUN_LARAVEL_STORAGE_LINK=false \
    HEALTHCHECK_PATH="/up" \
    PHP_OPCACHE_ENABLE=1

# Custom startup scripts for Laravel environment setup
COPY --chmod=755 ./infrastructure/docker/common/etc/entrypoint.d/ /etc/entrypoint.d/

# APP files + pre-built vendor folder from cache layer
COPY --chown=www-data:www-data . .
COPY --chown=www-data:www-data --from=composer-dependencies $APP_BASE_DIR/vendor ./vendor
COPY --chown=www-data:www-data --from=frontend-build $APP_BASE_DIR/public/build ./public/build
COPY --chown=www-data:www-data --from=frontend-build $APP_BASE_DIR/bootstrap/ssr ./bootstrap/ssr

# Regenerate optimized autoloader
RUN composer install --no-dev --no-interaction --optimize-autoloader --prefer-dist

CMD ["php", "/var/www/html/artisan", "octane:start", "--host=0.0.0.0", "--port=8080", "--server=frankenphp"]

# Native ServerSideUp healthcheck for Octane.
HEALTHCHECK --start-period=10s CMD ["healthcheck-octane"]

# Switch back to www-data
USER www-data
