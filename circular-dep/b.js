exports.loaded = false;
const a = require('./a');
console.log('a', a)
module.exports = {
  aWasLoaded: a.loaded,
  loaded: true
};
