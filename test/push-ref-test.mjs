/* eslint-env mocha */

import assert from 'assert'
import { pushRef } from '../src/index.mjs'

describe('push-ref', () => {
  it('is a function', () => {
    assert.deepStrictEqual(typeof pushRef, 'function')
  })
})
