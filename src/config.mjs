import envConfig from '@hugojosefson/env-config'
import camelcase from 'camelcase'
import ra from 'ramda-adjunct'

const transformer = ra.renameKeysWith(camelcase)

export default () => {
  const { gitAuthentication } = envConfig({
    transformer,
  })

  return { gitAuthentication }
}
