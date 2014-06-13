var dir = './lib/';
if (process.env.LOGDRIVER_COVERAGE){
  dir = './lib-cov/';
}

module.exports = require(dir + 'index');

