'use strict';

require('chai').should();

var tax = require('../index.js');

describe('tax', function () {

  it('should return the correct amount', function () {
    tax(20).should.equal(4);

  });


});
