import express from 'express'
import RegisterPath from './effects/register-path.mjs'
import inventoryHandlers from './path-handlers/inventory-handlers.mjs'
import rootHandlers from './path-handlers/root-handlers.mjs'

/**
 * HTTP API for working with `docker-inventory-git`.
 * @param {object} options
 * @param {Express|Application|IRouter} options.app Express.js Application instance or Router on which to apply paths.
 * @param {GitAuth} options.gitAuthentication Response for our `AuthCallback` to `onAuth`. If `undefined`, `onAuth` will not be used.
 * @param {AuthCallback} options.onAuth `onAuth` implementation.
 * @returns {Express|Application|IRouter} app, mutated.
 */
export default ({
  app = express(),
  gitAuthentication = undefined,
  onAuth = gitAuthentication ? () => gitAuthentication : undefined,
} = {}) => {
  const { registerPath, getDocumentation } = RegisterPath(app)

  registerPath('/inventory', inventoryHandlers())
  registerPath('/', rootHandlers({ getDocumentation }))

  return app
}
