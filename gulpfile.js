var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions', 'iOS 8']
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('build', function() {
    return gulp.src('./style.css')
      .pipe(csscomb())
      .pipe(cleanCSS())
      .pipe(gulp.dest('./'))
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    proxy: {
      target: 'http://2018.poznan.wordcamp.test/'
    },
    ghostMode: false,
    online: true
  });

  gulp.watch('src/scss/**/*.scss', ['sass']);
});


gulp.task('default', ['serve']);