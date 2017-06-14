'use strict';

let fp = module.exports = {};

//MAP

fp.map = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.map.call(list, ...args);
  throw new Error('invalid input');
};

//FILTER

fp.filter = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.map.call(list, ...args);
  throw new Error('invalid input');
};

//REDUCE

fp.reduce = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.map.apply(list, args);
  throw new Error('invalid input');
};

//CONCAT

fp.concat = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.concat.apply(list, args);
  throw new Error('invalid input');
};

//SPLICE

fp.splice = (list, ...args) => {
  if (typeof list === 'object')
    return Array.prototype.splice.call(list, ...args);
  throw new Error('invalid input');
};
