import docker from '../effects/docker.mjs'

export default stack =>
  docker([
    'stack',
    'ps',
    stack,
    '--format',
    '{"taskId": {{json .ID}}}',
    '--filter',
    'desired-state=running',
  ]).map(response => ({ stack, ...response }))
