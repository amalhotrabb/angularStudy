// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('app/**/*.js')
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(src + 'js/*.js', ['scripts']);
  //  // Watch .scss files
  // gulp.watch(src + 'scss/*.scss', ['sass']);
  //  // Watch image files
  // gulp.watch(src + 'images/**/*', ['images']);
 });
 // Default Task
gulp.task('default', ['scripts','watch']);
