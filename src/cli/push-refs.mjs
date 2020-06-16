#!/usr/bin/env node

import _ from 'highland'
import config from '../config.mjs'
import pushRef from '../effects-git/push-ref.mjs'
import { defaultServiceToPush, inventoryToPushes } from '../index.mjs'
import streamInput from '../effects/stream-input.mjs'

let exitCode = 0

const handleError = nameOfStep => err => {
  console.error(`push-refs: ${nameOfStep}: Caught error:`, err.stack)
  exitCode = 1
}

const inventory = streamInput(process.stdin).errors(
  handleError('reading input')
)

const serviceToPush = defaultServiceToPush(config())
const pushes = inventoryToPushes(serviceToPush)(inventory).errors(
  handleError('converting to push')
)

pushes
  .map(pushRef)
  .flatMap(_)
  .errors(handleError('pushing'))
  .done(() => {
    process.exit(exitCode)
  })
