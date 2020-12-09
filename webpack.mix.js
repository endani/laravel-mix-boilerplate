let mix = require('laravel-mix');

mix.sass('resources/scss/app.scss', 'public/css');

mix.combine([
  'resources/js/custom.js',
  'resources/js/jquery.min.js'
], 'public/js/app.js'); 