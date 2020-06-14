import envConfig from '@hugojosefson/env-config'
import ramda from 'ramda'
import ra from 'ramda-adjunct'
import camelcase from 'camelcase'

const { always, memoizeWith } = ramda
const { renameKeysWith } = ra

const transformer = renameKeysWith(camelcase)
const memoizeConstant = memoizeWith(always('a'))

export default memoizeConstant(() => envConfig({ transformer }))
