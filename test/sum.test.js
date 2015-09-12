'use strict';
import { expect } from 'chai';
import sum from '../src/sum';

describe('#SUM', () => {
  it('Should sum two numbers', () => {
    expect(sum(1, 2)).to.be.equal(3);
  });
});
