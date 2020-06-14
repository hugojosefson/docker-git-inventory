import { basename } from 'path'
import debugLogAndReturn from '../effects/debug-log-and-return.mjs'

/**
 * Reasonable calculation of remoteRef, based on milieu, serviceName and git url.
 * @param {string} prefix prefix for the remoteRef
 * @return {function({milieu,serviceName,url}): string|undefined} function for calculating a reasonable remoteRef
 */
export default (prefix = 'refs/deployed/') =>
  /**
   * Reasonable calculation of remoteRef, based on milieu, serviceName and git url.
   *
   * @param service
   * @param service.milieu name of the deployment milieu. Will be used as base of the remoteRef.
   * @param service.serviceName name of the service. Will be used together with url for calculating any alternative suffix.
   * @param service.url git url. Will be used together with serviceName for calculating any alternative suffix.
   * @return {string|undefined} a reasonable remoteRef, or undefined if not enough arguments available, so you can filter it out.
   */
  (service = {}) => {
    const { milieu, serviceName, url } = service
    if (!milieu) {
      return debugLogAndReturn(
        `Ignoring service because no milieu:`,
        service
      )(undefined)
    }
    if (!url) {
      return debugLogAndReturn(
        `Ignoring service because no url:`,
        service
      )(undefined)
    }
    if (!serviceName) {
      return debugLogAndReturn(
        `Ignoring service because no serviceName:`,
        service
      )(undefined)
    }

    const repoName = basename(url, '.git')
    if (serviceName.startsWith(repoName)) {
      const suffix = serviceName.substring(repoName.length)
      return `${prefix}${milieu}${suffix}`
    } else {
      return `${prefix}${milieu}`
    }
  }
