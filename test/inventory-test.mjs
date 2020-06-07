/* eslint-env mocha */

import assert from 'assert'
import { inventory } from '../src/index.mjs'

describe('inventory', () => {
  it('is a function', () => {
    assert.deepStrictEqual(typeof inventory, 'function')
  })
})
