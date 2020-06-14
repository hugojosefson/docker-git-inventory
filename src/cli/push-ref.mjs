#!/usr/bin/env node

import git from 'isomorphic-git'
import clone from '../effects-git/clone.mjs'
import config from '../config.mjs'
import noop from '../fn/noop.mjs'

const main = async () => {
  const { username, password, url, ref, remoteRef } = config()
  const gitOptions = await clone({ username, password, url })
  await git.fetch({ ...gitOptions, ref, depth: Number.MAX_SAFE_INTEGER })
  await git.push({ ...gitOptions, ref, remoteRef, force: true })
}

const handleError = err => {
  console.error('push-ref: Caught error:', err.stack)
  process.exit(1)
}

main().then(noop, handleError)
