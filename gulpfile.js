var gulp            = require('gulp'),
    htmlmin         = require('gulp-htmlmin'),
    browserSync     = require('browser-sync').create(),
    uglify          = require('gulp-uglify'),
    less            = require('gulp-less'),
    LessAutoprefix  = require('less-plugin-autoprefix'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true}),
    autoprefix      = new LessAutoprefix({ browsers: ['last 2 versions'] });
    path        = {
      js : "./src/js/*.js",
      img : "./src/img/*",
      less : "./src/less/*.less",
      html : "./src/*.html",
      js_min : "./build/js/",
      img_min : "./build/img/",
      css : "./build/css/",
      html_min : "./build/",
      server : "./build/",
      watch_build : "./build/**/*"
    };

gulp.task('less', function () {
  return gulp.src(path.less)
  .pipe(less({
    plugins: [autoprefix, cleanCSSPlugin]
  }))
  .pipe(gulp.dest(path.css));
});

gulp.task('js', function () {
 return gulp.src(path.js)
  .pipe(uglify())
  .pipe(gulp.dest(path.js_min));
});

gulp.task('img', function () {
 return gulp.src(path.img)
  .pipe(gulp.dest(path.img_min));
});

gulp.task('html', function() {
  return gulp.src(path.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(path.html_min))
});

gulp.task('serve', function() {
    browserSync.init({
        server: path.server
    });

    gulp.watch(path.watch_build).on('change', browserSync.reload);
});

gulp.task('watch', function () {
  gulp.watch(path.js, ['js']);
  gulp.watch(path.img, ['img']);
  gulp.watch(path.less, ['less']);
  gulp.watch(path.html, ['html']);
});

gulp.task('default',['js','img','less','html','watch'], function() {
  gulp.run(['serve']);
});
