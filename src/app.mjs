import express from 'express'
import RegisterPath from './effects/register-path.mjs'
import inventoryHandlers from './path-handlers/inventory-handlers.mjs'
import pushRefsHandlers from './path-handlers/push-refs-handlers.mjs'
import rootHandlers from './path-handlers/root-handlers.mjs'

/**
 * HTTP API for working with `docker-inventory-git`.
 * @param {object} options
 * @param {Express|Application|IRouter} options.app Express.js Application instance or Router on which to apply paths.
 * @returns {Express|Application|IRouter} app, mutated.
 */
export default ({ app = express() } = {}) => {
  const { registerPath, getDocumentation } = RegisterPath(app)

  registerPath('/inventory', inventoryHandlers())
  registerPath('/push-refs', pushRefsHandlers())
  registerPath('/', rootHandlers({ getDocumentation }))

  return app
}
