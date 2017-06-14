'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing greet', () => {
  it('should return Hello, world!', () => {
    let result = greet('world!');
    expect(result).toEqual('Hello, world!');
  });
  it('should return null for non-string values', () => {
    let result = greet(1);
    expect(result).toEqual(null);
  });
});
