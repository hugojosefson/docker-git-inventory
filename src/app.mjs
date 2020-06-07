import express from 'express'
import inventory from './inventory.mjs'
import RegisterPath from './effects/register-path.mjs'
import append from './fn/append.mjs'

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
  registerPath('/inventory', {
    head: (req, res) => {
      res.type('application/x-ndjson').send()
    },

    get: (req, res) => {
      inventory()
        .map(JSON.stringify)
        .map(append('\n'))
        .pipe(res.type('application/x-ndjson'))
    },
  })
  registerPath('/', {
    get: (req, res) => res.json(getDocumentation()),
  })

  return app
}
