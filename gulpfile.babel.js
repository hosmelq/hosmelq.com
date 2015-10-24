import elixir, { config } from 'laravel-elixir';
import './elixir-extensions';

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

    mix.uncss('main.css', null, 'css', {
        html: ['index.html']
    });
});