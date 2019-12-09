'use strict';

const assert = require('assert'); // nyc bug here

/**
 * Force assert to output the stack
 */
const assertFn = (condition, message) => {
  try
  {
    assert(condition, message);  // Fails in here on mocha
  }
  catch (e)
  {
    const err = (e instanceof Error) ? e : new Error(e);
    console.error(err.stack);
    throw e;
  }
};

module.exports = assertFn;
