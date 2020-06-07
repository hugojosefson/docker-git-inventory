import docker from '../effects/docker.mjs'

export default ({ taskId, ...rest }) =>
  docker([
    'inspect',
    taskId,
    '--format',
    '{"image": {{json .Spec.ContainerSpec.Image}}, "serviceId": {{json .ServiceID}}}',
  ]).map(response => ({ taskId, ...rest, ...response }))
