const is = constructor => value =>
  (value != null && value.constructor === constructor) ||
  value instanceof constructor

export default is
export const isArray = is(Array)
export const isString = is(String)
