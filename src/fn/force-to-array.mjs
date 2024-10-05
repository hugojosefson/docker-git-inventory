import { is } from 'ramda'

const isArray = is(Array)

export default a => (isArray(a) ? a : [a])
