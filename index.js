const colors = require('colors');

exports.printMsg = function(color) {
  if (!color) color = 'red';
  console.log('This message is from the npm-demo-pkg module.'[color]);
}
