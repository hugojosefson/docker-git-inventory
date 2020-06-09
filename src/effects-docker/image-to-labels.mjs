import docker from '../effects/docker.mjs'
import noop from '../fn/noop.mjs'

export default ({ image, labels = {}, ...rest }) =>
  docker(['pull', '-q', image])
    .errors(noop)
    .flatMap(() =>
      docker(['inspect', image, '--format', '{{json .ContainerConfig.Labels}}'])
    )
    .map(moreLabels => ({
      image,
      ...rest,
      labels: { ...labels, ...moreLabels },
    }))
