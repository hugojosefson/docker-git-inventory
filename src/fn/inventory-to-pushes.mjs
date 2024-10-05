import _ from 'highland'
import { is } from 'ramda'
import hasRequiredStringProps from './has-required-string-props.mjs'

const isArray = is(Array)
const isObject = is(Object)
const isPromise = is(Promise)

/**
 * Converts a Highland stream of inventory objects, into a stream of argument objects for pushRef.
 * @param {function({stack, taskId, image, serviceId, serviceName, serviceNameLong, labels}): Highland.Stream<{username, password, url, ref, remoteRef}> | Promise<{username, password, url, ref, remoteRef}> | Array<{username, password, url, ref, remoteRef}> | {username, password, url, ref, remoteRef}} serviceToPush
 * @return {function(Highland.Stream<{stack, taskId, image, serviceId, serviceName, serviceNameLong, labels}>): Highland.Stream<{username, password, url, ref, remoteRef}>}
 */
export default serviceToPush => inventory =>
  inventory
    .map(serviceToPush)
    .filter(Boolean)
    .map(a => {
      if (_.isStream(a)) return a
      if (isPromise(a)) return _(a)
      if (isArray(a)) return a
      return [a]
    })
    .flatten()
    .filter(isObject)
    .filter(hasRequiredStringProps(['url', 'ref', 'remoteRef']))
