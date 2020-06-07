import camelcase from 'camelcase'
import ramda from 'ramda'

const { is } = ramda

export default (config, exitCode = 1) => {
  return ([key, requiredType]) => {
    const isRequiredType = is(requiredType)
    if (isRequiredType(config[key])) return
    if (isRequiredType(config[camelcase(key)])) return

    console.error(
      `ERROR: ${key} as a ${requiredType.name}, is a required environment variable.`
    )
    if (is(Number, exitCode)) {
      process.exit(exitCode)
    }
  }
}
