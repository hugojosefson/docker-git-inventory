import config from '../config.mjs'

export default (...logArgs) => {
  if (config().debug) {
    return a => {
      console.error(...logArgs)
      return a
    }
  } else {
    return a => a
  }
}
