'use strict';

//MAP

var mapCall = function(list, callback){
  return Array.prototype.map.call(list, callback);
};
var mapApply = function(list, callback){
  return Array.prototype.map.apply(list, [callback]);
};

var nums = [1,2,3,4];

mapCall(nums, n => n * 2);
mapApply(nums, n => n * 2);


//FILTER
