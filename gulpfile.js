var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
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