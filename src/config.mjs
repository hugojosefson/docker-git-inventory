import envConfig from '@hugojosefson/env-config'
import ramda from 'ramda'
import ra from 'ramda-adjunct'
import camelcase from 'camelcase'

const { always, memoizeWith } = ramda
const { renameKeysWith } = ra

const transformer = renameKeysWith(camelcase)

export default memoizeWith(always('a'), () => {
  const { gitAuthentication, debug, port } = envConfig({
    transformer,
  })

  return { gitAuthentication, debug, port }
})
