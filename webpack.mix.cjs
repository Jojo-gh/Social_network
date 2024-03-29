const mix = require('laravel-mix');

mix.browserSync({
    proxy: 'social_network.test',
    files: [
        'app/**/*.php',
        'resources/views/**/*.php',
        'public/js/**/*.js',
        'public/css/**/*.css'
    ]
});