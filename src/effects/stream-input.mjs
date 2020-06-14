import _ from 'highland'

export default input => _(input).split().map(JSON.parse)
