import inventory from '../effects-docker/inventory.mjs'
import { defaultServiceToPush, inventoryToPushes } from '../index.mjs'
import requireAndSetAcceptable from '../middleware/require-and-set-acceptable.mjs'
import streamOutput, { TYPES } from '../middleware/stream-output.mjs'
import streamInput from '../effects/stream-input.mjs'

export default () => ({
  head: requireAndSetAcceptable(TYPES),

  get: streamOutput(req =>
    inventoryToPushes(defaultServiceToPush(req.query))(inventory())
  ),

  post: streamOutput(req =>
    inventoryToPushes(defaultServiceToPush(req.query))(streamInput(req))
  ),
})
