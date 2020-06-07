import _ from 'highland'
import inventory from '../effects-docker/inventory.mjs'

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
    const lines = inventory().map(JSON.stringify)
    const acceptable = req.accepts(TYPES)

    if (acceptable === TYPE_NDJSON) {
      return lines.intersperse('\n').pipe(res.type(TYPE_NDJSON))
    }

    if (acceptable === TYPE_JSON) {
      return _(['[\n'])
        .concat(lines.intersperse(',\n'))
        .concat(['\n]'])
        .pipe(res.type(TYPE_JSON))
    }

    res.sendStatus(406)
  },
})
