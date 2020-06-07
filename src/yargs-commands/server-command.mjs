import server from '../server.mjs'

const noop = () => {}

export default () => ({
  command: 'server <whom>',

  description: 'This command serves the person or entity <whom>.',

  builder: argv =>
    argv.option('n', {
      alias: 'dry-run',
      description: "Don't actually serve.",
      type: 'boolean',
    }),

  handler: ({ dryRun }) =>
    server()
      .then(dryRun ? noop : console.log)
      .catch(err => {
        console.error('Caught error:', err.stack)
        process.exit(1)
      }),
})
