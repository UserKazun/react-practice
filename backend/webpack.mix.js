const mix = require("laravel-mix");
mix.ts("resources/ts/App.tsx", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .version();
