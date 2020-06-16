import _ from 'highland'
import ndjson from 'ndjson'

export default input => _(input.pipe(ndjson.parse()))
