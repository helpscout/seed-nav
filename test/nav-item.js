// Test :: Nav Item
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: nav-item component', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a box-sizing reset', function() {
    var $o = output.$('.c-nav__item');

    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

});
