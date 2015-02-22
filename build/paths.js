var path = require('path');

var appRoot = 'src/';

module.exports = {
  root: appRoot,
  source: path.join(appRoot, '**/*.js'),
  html: path.join(appRoot, '**/*.html'),
  jspm: ['jspm_packages/**/*.**', 'config.js'],
  style: [path.join(appRoot, '**/*.styl'), path.join(appRoot, 'style/defaults/**/*.styl')],
  stylus: path.join(appRoot, 'style/main.styl'),
  output: 'dist/'
};
