#!/usr/bin/env node

import config from '../config.mjs'
import App from '../app.mjs'
import shutdownOnSignal from '../effects/shutdown-on-signal.mjs'
import requireEnv from '../effects/require-env.mjs'
;(async () => {
  ;[['PORT', Number]].forEach(requireEnv(config()))
  const { port } = config()

  try {
    console.info('server: Starting up...')
    const app = await App()
    const server = await new Promise((resolve, reject) => {
      const server = app.listen(port, () => resolve(server))
      server.on('error', reject)
    })
    console.info(`server: Listening to ${JSON.stringify(server.address())}`)
    process.on('SIGINT', shutdownOnSignal('SIGINT', server))
  } catch (err) {
    console.error('server: Caught error:', err.stack)
    process.exit(1)
  }
})()
