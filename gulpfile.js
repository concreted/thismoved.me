var gulp = require('gulp');
    nodemon = require('gulp-nodemon');
    jshint = require('gulp-jshint');
    bs = require('browser-sync');
    reload = bs.reload;

gulp.task('lint', function() {
  return gulp.src('client/**/*.js')
  .pipe(jshint());
});

gulp.task('serve', function() {
  nodemon({script: 'server/server.js'});
});

gulp.task('start', ['serve'], function() {
  bs({
    notify: true,
    injectChanges: true,
    // files to watch.
    files: ['client/**'],
    // proxy must match server port in your 'serve' task.
    // this is the port to be proxied.
    proxy: 'localhost:3000',
    // the server port is proxied to the port below.
    // this is where your browser-synced content is accessible.
    port: 8080
  });
});

// need to make lint blockingan
gulp.task('default', ['lint', 'start'], function() {
});
