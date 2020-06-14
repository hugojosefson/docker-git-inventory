import _ from 'highland'
import requireAndSetAcceptable from './require-and-set-acceptable.mjs'

export const TYPE_NDJSON = 'application/x-ndjson'
export const TYPE_JSON = 'json'
export const TYPES = [TYPE_NDJSON, TYPE_JSON]

export default outputDataStreamGetter => [
  requireAndSetAcceptable(TYPES),

  (req, res) => {
    const outputDataStream = outputDataStreamGetter(req)
    const lines = outputDataStream.map(JSON.stringify)

    if (req.acceptable === TYPE_NDJSON) {
      return lines.intersperse('\n').pipe(res.type(TYPE_NDJSON))
    }

    if (req.acceptable === TYPE_JSON) {
      return _(['[\n'])
        .concat(lines.intersperse(',\n'))
        .concat(['\n]'])
        .pipe(res.type(TYPE_JSON))
    }
  },
]
