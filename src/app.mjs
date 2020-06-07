import _ from 'highland'
import express from 'express'
import inventory from './inventory.mjs'
import RegisterPath from './effects/register-path.mjs'

const TYPE_NDJSON = 'application/x-ndjson'
const TYPE_JSON = 'json'
const TYPES = [TYPE_NDJSON, TYPE_JSON]

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
      const acceptable = req.accepts(TYPES)
      if (acceptable) {
        res.type(acceptable).send()
      } else {
        res.sendStatus(406)
      }
    },

    get: (req, res) => {
      const lines = inventory().map(JSON.stringify)
      const acceptable = req.accepts(TYPES)

      if (acceptable === TYPE_NDJSON) {
        return lines.intersperse('\n').pipe(res.type(TYPE_NDJSON))
      }

      if (acceptable === TYPE_JSON) {
        return _(['[\n'])
          .concat(lines.intersperse(',\n'))
          .concat(['\n]'])
          .pipe(res.type(TYPE_JSON))
      }

      res.sendStatus(406)
    },
  })
  registerPath('/', {
    get: (req, res) => res.json(getDocumentation()),
  })

  return app
}
