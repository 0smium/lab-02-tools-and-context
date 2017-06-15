'use strict';

let fp = module.exports = {};

//MAP

fp.map = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.map.call(list, ...args);
  return 'invalid input';
};

//FILTER

fp.filter = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.filter.call(list, ...args);
  return 'invalid input';
};

//REDUCE

fp.reduce = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.reduce.apply(list, args);
  return 'invalid input';
};

//CONCAT

fp.concat = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.concat.apply(list, args);
  return 'invalid input';
};

//SPLICE

fp.splice = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.splice.call(list, ...args);
  return 'invalid input';
};
