#!/bin/sh

php artisan env:decrypt --env="$APP_ENV" --force
