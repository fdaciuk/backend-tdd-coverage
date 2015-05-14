'use strict';
require( 'should' );
var sum = require( '../src/sum' );

describe( '#SUM', function() {
  it( 'Should sum two numbers', function() {
    sum( 1, 2 ).should.be.equal( 3 );
  });
});