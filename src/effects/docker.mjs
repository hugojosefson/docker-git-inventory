import exec from './exec.mjs'

/**
 * Executes a docker command with `execa`, returning a Highland stream of JSON-parsed lines from stdout of the command.
 * @param {string[]} args Arguments to pass to `docker`.
 * @param {execa.Options} options Options object for `execa`.
 * @returns {Highland.Stream<any|string>}
 */
export default (args, options = {}) => exec('docker', args, options)
