/* eslint-env mocha */

import assert from 'assert'
import { server } from '../src/index.mjs'

describe('server', () => {
  it('should reject with an Error when called without argument', () => {
    assert.rejects(() => server(), Error)
  })

  it('should return a Promise when called with argument', () => {
    assert.ok(typeof server({ whom: 'World' }).then === 'function')
  })
})
