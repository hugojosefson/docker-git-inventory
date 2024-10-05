export default (signal, server = {}) =>
  () => {
    console.log(`Received ${signal}, will shut down...`)
    if (typeof server.close === 'function') {
      server.close(() => {
        console.log('HTTP Server has shut down and is not listening. Exiting.')
        process.exit(0)
      })
    } else {
      console.log('Exiting.')
      process.exit(0)
    }
  }
