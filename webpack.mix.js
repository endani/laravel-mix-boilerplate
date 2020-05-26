let mix = require('laravel-mix');

mix.sass('resources/scss/app.scss', 'public/css'); // Compile main SASS File

mix.combine(['resources/js/*'], 'public/js/app.js'); // Combine all JS in one
// mix.combine(['resources/scss/*'], 'public/css/app.css');

// Combine specific files

// mix.combine([
//   'resources/scss/bootstrap.min.css',
//   'resources/scss/portfolio.css',
//   'resources/scss/shortcodes.css',
//   'resources/scss/assets.css',
//   'resources/scss/font-awesome.min.css',
//   'resources/scss/style.css',
// ], 'public/css/app.css').version();
