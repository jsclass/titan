var gulp = require('gulp');
var browserSync = require('browser-sync');
// var nodemon = require('gulp-nodemon');
var shell = require('shelljs');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('express', ['build'], function(done){
  // return nodemon({
  //   script: 'server.js',
  //   ignore: ['./src/**/*.js', './src/**/*.html', './src/**/*.styl']
  // }).on('start', function(){
  //   // done();
  // });
  shell.exec('node server.js');
  done();
});

gulp.task('serve', ['express'], function(done) {
  browserSync({
    open: false,
    // port: 9000,
    proxy: {
      target: "localhost:4500",
      reqHeaders: function (config) {
        return {
            "host":            config.urlObj.host,
            "accept-encoding": "identity",
            "agent":           false
        };
      }
    }
    // server: {
    //   baseDir: ['dist'],
    //   middleware: function (req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    //   }
    // }
  }, done);
});
