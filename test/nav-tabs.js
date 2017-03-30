// Test :: Nav Tabs
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: nav-tabs modifier', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a nav-tabs modifier', function() {
    var $o = output.$('.c-nav--tabs');

    assert.isOk($o.exists());
  });

  it('should have a bottom-border', function() {
    var $o = output.$('.c-nav--tabs');

    assert.isOk($o.getProp('border-bottom'));
  });
});
