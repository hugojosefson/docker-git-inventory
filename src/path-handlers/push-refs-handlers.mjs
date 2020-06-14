import _ from 'highland'
import inventory from '../effects-docker/inventory.mjs'
import { defaultServiceToPush, inventoryToPushes } from '../index.mjs'

const TYPE_NDJSON = 'application/x-ndjson'
const TYPE_JSON = 'json'
const TYPES = [TYPE_NDJSON, TYPE_JSON]

export default () => ({
  head: (req, res) => {
    const acceptable = req.accepts(TYPES)
    if (acceptable) {
      res.type(acceptable).send()
    } else {
      res.sendStatus(406)
    }
  },

  get: (req, res) => {
    const acceptable = req.accepts(TYPES)
    if (!acceptable) {
      return res.sendStatus(406)
    }

    const serviceToPush = defaultServiceToPush(req.query)
    const pushes = inventoryToPushes(serviceToPush)(inventory())
    const lines = pushes.map(JSON.stringify)

    if (acceptable === TYPE_NDJSON) {
      return lines.intersperse('\n').pipe(res.type(TYPE_NDJSON))
    }

    if (acceptable === TYPE_JSON) {
      return _(['[\n'])
        .concat(lines.intersperse(',\n'))
        .concat(['\n]'])
        .pipe(res.type(TYPE_JSON))
    }
  },
})
