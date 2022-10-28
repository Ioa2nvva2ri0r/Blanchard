/* eslint-disable no-undef */
const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist']);
};

const fonts = () => {
  return src('src/fonts/**/*.{woff,woff2}').pipe(dest('dist/fonts'));
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        minifyCSS: true,
      })
    )
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
};

const sassMinify = () => {
  return src('src/style/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', notify.onError()))
    .pipe(concat('main.min.css'))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest('dist/style'))
    .pipe(browserSync.stream());
};

const scriptsMinify = () => {
  return src(['src/js/module/**/*js', 'src/js/main.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify().on('eroor', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
};

const scriptsConstant = () => {
  return src(['src/js/min/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('libraries.min.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
};

const php = () => {
  return src(['src/php/**/*.php'])
    .pipe(dest('dist/php'))
    .pipe(browserSync.stream());
};

const imgRest = () => {
  return src(['src/img/**/*.{png,svg,webp,ico,webmanifest,xml}'])
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });

  watch('src/**/*.html', htmlMinify);
  watch('src/style/**/*.scss', sassMinify);
  watch('src/js/*.js', scriptsMinify);
  watch('src/js/min/*.js', scriptsConstant);
  watch('src/php/*.php', php);
  watch('src/img/**', imgRest);
};

const build = series(
  clean,
  fonts,
  htmlMinify,
  sassMinify,
  imgRest,
  scriptsConstant,
  scriptsMinify,
  php
);

const dev = {
  clean,
  fonts,
  htmlMinify,
  sassMinify,
  imgRest,
  scriptsConstant,
  scriptsMinify,
  php,
  watchFiles,
};

exports.dev = dev;
exports.build = build;
// exports.default = dev;