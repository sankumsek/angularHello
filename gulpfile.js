var gulp = require('gulp');
    connect = require('gulp-connect'),
    karma = require('karma').server,
    livereload = require('gulp-livereload');


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 3000
  });
  livereload.listen(['index.html']);
});

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + 'config.js',
    singleRun: true
  }, done);
});

gulp.task('default', ['connect']);