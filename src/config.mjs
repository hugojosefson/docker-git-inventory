import envConfig from '@hugojosefson/env-config'
import { always, memoizeWith } from 'ramda'
import { renameKeysWith } from 'ramda-adjunct'
import camelcase from 'camelcase'

const transformer = renameKeysWith(camelcase)
const memoizeConstant = memoizeWith(always('a'))

export default memoizeConstant(() => envConfig({ transformer }))
