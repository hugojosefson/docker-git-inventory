import docker from '../effects/docker.mjs'

export default ({ serviceId, ...rest }) =>
  docker([
    'inspect',
    serviceId,
    '--format',
    '{{json .Spec.Labels}}',
  ]).map(labels => ({ serviceId, ...rest, labels }))
