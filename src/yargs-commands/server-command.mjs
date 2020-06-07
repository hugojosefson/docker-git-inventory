import App from '../app.mjs'
import shutdownOnSignal from '../effects/shutdown-on-signal.mjs'

export default () => ({
  command: 'server',
  description: 'Serve an HTTP API for docker-git-inventory.',

  builder: argv =>
    argv
      .env()
      .strict(false)
      .demandOption(['port'])
      .option('p', {
        alias: 'port',
        type: 'integer',
        description: 'Port for server to listen on.',
      })
      .option('n', {
        alias: 'dry-run',
        type: 'boolean',
        description: "Don't actually serve.",
      }),

  handler: async ({ dryRun, port }) => {
    try {
      console.info(
        'server: ' + (dryRun ? 'Not starting up...' : 'Starting up...')
      )
      const app = await App()
      if (dryRun) {
        return
      }

      const server = await new Promise((resolve, reject) => {
        const server = app.listen(port, () => resolve(server))
        server.on('error', reject)
      })
      console.info(`server: Listening to ${JSON.stringify(server.address())}`)
      process.on('SIGINT', shutdownOnSignal('SIGINT', server))
      return server
    } catch (err) {
      console.error('server: Caught error:', err.stack)
      process.exit(1)
    }
  },
})
