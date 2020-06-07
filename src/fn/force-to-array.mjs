import ramda from 'ramda'

const { is } = ramda
const isArray = is(Array)

export default a => (isArray(a) ? a : [a])
