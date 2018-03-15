exports.loaded = false;
const b = require('./b');
console.log('b', b)
module.exports = {
  bWasLoaded: b.loaded,
  loaded: true
};
