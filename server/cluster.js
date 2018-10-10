var cluster = require('cluster');
require('newrelic');

if (cluster.isMaster) {
  // Count the machine's CPUs
  // var cpuCount = require('os').cpus().length;
  let cpuCount = 8;
  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', function () {
    cluster.fork();
  });
} else {
  require('./index.js');
}