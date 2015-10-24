import gulp from 'gulp';
import Elixir, { Plugins as $, config, GulpPaths, Task } from 'laravel-elixir';
import uncss from 'gulp-uncss';

Elixir.extend('uncss', (styles, output, baseDir, options) => {
    var paths = prepCssGulpPaths(styles, baseDir, output);

    new Task('uncss', () => {
        return gulp.src(paths.src.path)
            .pipe(uncss(options || config.css.uncss.pluginOptions))
            .pipe($.if(config.production, $.minifyCss()))
            .pipe(gulp.dest(paths.output.baseDir));
    });
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepCssGulpPaths = (src, baseDir, output) => {
    return new GulpPaths()
        .src(src, baseDir || config.get('assets.css.folder'))
        .output(output || config.get('public.css.outputFolder'), 'all.css');
};