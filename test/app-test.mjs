/* eslint-env mocha */

import assert from 'assert'
import { app } from '../src/index.mjs'

describe('app', () => {
  it('is a function', () => {
    assert.deepStrictEqual(typeof app, 'function')
  })
  describe('when called without arguments', () => {
    it('returns fn', () => {
      assert.strictEqual(typeof app(), 'function')
    })
    it('returns fn, with fn property listen', () => {
      assert.strictEqual(typeof app().listen, 'function')
    })
  })
})
