'use strict';

const assert = require('assert');
const myAssert = require('../lib/assert');

const NodeVersionMajor = /^v(\d+)\.(\d+)\.(\d+)/.exec(process.version)[1];
const errRegEx = (NodeVersionMajor < 10)
  ? /false == true/
  : /evaluated to a falsy value/;

const failAssert = () => { myAssert(false, 'OK: explicitly throwing'); };

console.log(`Test running on node v${NodeVersionMajor}`)

describe('assert', function() {
  it('check existing assert behaviour', function(done) {
    myAssert(true);

    try
    {
      assert.throws(failAssert, errRegEx);
      done();
    }
    catch(ex) {
      done(new Error('Unexpected exception: ' + ex));
    }
  });
});
