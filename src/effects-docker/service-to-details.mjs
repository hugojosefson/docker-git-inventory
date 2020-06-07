import docker from '../effects/docker.mjs'

export default ({ serviceId, ...rest }) =>
  docker([
    'inspect',
    serviceId,
    '--format',
    '{"serviceNameLong": {{json .Spec.Name}}}',
  ]).map(response => ({ serviceId, ...rest, ...response }))
