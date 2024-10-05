import { is, isEmpty } from 'ramda'

const isString = is(String)

export default props => a =>
  props.reduce(
    (result, prop) => result && isString(a[prop]) && !isEmpty(a[prop]),
    true
  )
