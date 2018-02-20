var gulp = require('gulp'),
    gutil = require('gulp-util');
gulp.task('log' , function() {
  gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));
});
