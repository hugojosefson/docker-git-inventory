import { isArray } from './is.mjs'

export default a => (isArray(a) ? a : [a])
