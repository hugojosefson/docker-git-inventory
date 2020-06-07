import docker from '../effects/docker.mjs'
import noop from '../fn/noop.mjs'

export default ({ image, ...rest }) =>
  docker(['pull', '-q', image])
    .errors(noop)
    .flatMap(() =>
      docker(['inspect', image, '--format', '{{json .Config.Labels}}'])
    )
    .map(labels => ({ image, ...rest, labels }))
