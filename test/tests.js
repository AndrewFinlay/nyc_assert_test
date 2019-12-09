'use strict';

// Run against npm target 'cover_no_instrument' under node v10+ to see the issue.

const assert = require('assert');
const myAssert = require('../lib/assert');
const myInstrumentedAssert = require('../lib/instrumented_assert');
const myUglyInstrumentedAssert = require('../lib/ugly_instrumented_assert');

const NodeVersionMajor = /^v(\d+)\.(\d+)\.(\d+)/.exec(process.version)[1];
console.log(`Test running on node v${NodeVersionMajor}`);

const errRegEx = (NodeVersionMajor < 10)
  ? /false == true/
  : /evaluated to a falsy value/;
const errMsg = (NodeVersionMajor < 10)
  ? "false == true"
  : "evaluated to a falsy value";

describe('Assert', function() {
  it(`assert responds with "${errMsg}"`, function() {
    const failAssert = () => myAssert(false);

    try
    {
      assert.throws(failAssert, errRegEx);
    }
    catch(ex) {
      throw new Error('Unexpected exception: ' + ex);
    }
  });
});

describe('Ugly Pre-instrumented Assert', function() {
    it(`assert responds with "${errMsg}"`, function() {
        const failAssert = () => myUglyInstrumentedAssert(false);

        try
        {
            assert.throws(failAssert, errRegEx);
        }
        catch(ex) {
            throw new Error('Unexpected exception: ' + ex);
        }
    });
});

// This code has been run through Atom beautify
describe('Pre-instrumented Assert', function() {
  it(`assert responds with "${errMsg}"`, function() {
    const failAssert = () => myInstrumentedAssert(false);

    try
    {
      assert.throws(failAssert, errRegEx);
    }
    catch(ex) {
      throw new Error('Unexpected exception: ' + ex);
    }
  });
});

