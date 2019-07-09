'use strict';

const assert = require('assert');

/**
 * Force assert to output the stack
 */
const assertFn = function(condition) {
  try
  {
    assert(condition);
  }
  catch (e)
  {
    const err = (e instanceof Error) ? e : new Error(e);
    console.error(err.stack);
    throw e;
  }
}

module.exports = assertFn;
