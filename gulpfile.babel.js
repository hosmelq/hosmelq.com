import elixir, { config } from 'laravel-elixir';
import 'laravel-elixir-uncss';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('main.sass');

    mix.uncss('main.css', {
        html: ['index.html']
    }, null, 'css');
});