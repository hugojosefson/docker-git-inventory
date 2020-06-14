#!/usr/bin/env node

import config from '../config.mjs'
import pushRef from '../effects-git/push-ref.mjs'
import noop from '../fn/noop.mjs'

const handleError = err => {
  console.error('push-ref: Caught error:', err.stack)
  process.exit(1)
}

pushRef(config()).then(noop, handleError)
