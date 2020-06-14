import { defaultRemoteRef } from '../index.mjs'

/**
 * Reasonable conversion from service (via inventory), to arguments to pushRef.
 *
 * @param {{username: (string | undefined), password: (string | undefined), url: (string | undefined), ref: (string | undefined), remoteRef: (string | undefined)}} defaultArgs for example {username, password}
 * @return {function({serviceName: string, labels: {GIT_URL:(string|undefined),GIT_COMMIT:(string|undefined),milieu:(string|undefined)}}=): {ref: (string|undefined), url: (string|undefined), remoteRef: (string|undefined)}}
 */
export default (defaultArgs = {}) => (
  { serviceName, labels } = { labels: {} }
) => ({
  ...defaultArgs,
  url: labels.GIT_URL || defaultArgs.url,
  ref: labels.GIT_COMMIT || defaultArgs.ref,
  remoteRef:
    defaultRemoteRef()({
      milieu: labels.milieu,
      url: labels.GIT_URL,
      serviceName,
    }) || defaultArgs.remoteRef,
})
