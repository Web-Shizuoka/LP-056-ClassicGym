var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var webpackStream = require("webpack-stream");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var AUTOPREFIXER_BROWSERS = [
  "last 2 version",
  "ie >= 9",
  "iOS >= 7",
  "Android >= 4.2",
];

var src = {
  scss: ["src/scss/style.scss"],
  scssWatch: "src/**/*.scss",
  js: ["src/**/*.js"],
};

var dest = {
  css: "htdocs/assets/css/",
  js: "htdocs/assets/",
};

//webpackによるバンドル
gulp.task("bundle", function () {
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest(dest.js));
});

//Sassのコンパイル
gulp.task("sass", function () {
  return gulp
    .src(src.scss)
    .pipe(sass({ outputStyle: "compressed" }))
    .on("error", sass.logError)
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(dest.css));
});
gulp.task("js", function () {
  return gulp
    .src(src.js)
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(gulp.dest(dest.js));
});

//watchタスク
gulp.task("watch", function () {
  gulp.watch(src.scssWatch, gulp.task("sass"));
  gulp.watch(src.js, gulp.task("bundle"));
});

//defaultタスク
gulp.task("default", gulp.series("bundle", "sass", "watch"));
