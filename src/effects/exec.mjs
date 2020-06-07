import execa from 'execa'
import _ from 'highland'
import jsonParse from '../fn/json-parse-if-possible.mjs'
import splitIntoLines from '../fn/split-into-lines.mjs'
import config from '../config.mjs'

const { debug } = config()

/**
 * Executes a command with `execa`, returning a Highland stream of JSON-parsed lines from stdout of the command.
 * @param {string} file The program/script to execute.
 * @param {string[]} args Arguments to pass to file on execution.
 * @param {execa.Options} options Options object for `execa`.
 * @returns {Highland.Stream<any|string>}
 */
export default (file, args, options = {}) => {
  if (debug) {
    console.log([file, ...args].map(a => JSON.stringify(a)).join(' '))
  }

  return _(execa(file, args, options))
    .pluck('stdout')
    .flatMap(splitIntoLines)
    .map(jsonParse)
}
