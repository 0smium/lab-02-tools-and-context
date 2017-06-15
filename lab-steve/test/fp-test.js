'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing map', () => {
  it('should return [2,4,6,8]', () => {
    let result = fp.map([1,2,3,4], n => n * 2);
    expect(result).toEqual([2,4,6,8]);
    // expect(result).toThrow(Error, 'invalid input');
  });
  it('should return \'invalid input\' for non-object values', () => {
    let result = fp.map(7, n => n * 2);
    expect(result).toBe('invalid input');
  });
});

describe('testing filter', () => {
  it('should return only even numbers ([2,4])', () => {
    let result = fp.filter([1,2,3,4], n => n % 2 == 0);
    expect(result).toEqual([2,4]);
  });
  it('should return \'invalid input\' for non-object values', () => {
    let result = fp.filter(7, n => n % 2 == 0);
    expect(result).toBe('invalid input');
  });
});

describe('testing reduce', () => {
  it('should return 10', () => {
    let result = fp.reduce([1,2,3,4], (prev, curr) => prev + curr);
    expect(result).toBe(10);
  });
  it('should return \'invalid input\' for non-object values', () => {
    let result = fp.reduce(10, (prev, curr) => prev + curr);
    expect(result).toBe('invalid input');
  });
});

describe('testing concat', () => {
  it('should return [\'a\',\'b\',\'c\',1,2,3]', () => {
    let result = fp.concat(['a','b','c'], [1,2,3]);
    expect(result).toEqual(['a','b','c',1,2,3]);
  });
  it('should return \'invalid input\' for non-object values', () => {
    let result = fp.concat('a,b,c', [1,2,3]);
    expect(result).toBe('invalid input');
  });
});

describe('testing splice', () => {
  it('should return [6,7,8]', () => {
    let result = fp.splice([1,2,3,4,5,6,7,8], 5);
    expect(result).toEqual([6,7,8]);
  });
  it('should return \'invalid input\' for non-object values', () => {
    let result = fp.concat('1,2,3,4,5,6,7,8', 5);
    expect(result).toBe('invalid input');
  });
});
