import docker from '../effects/docker.mjs'

export default () => docker(['stack', 'ls', '--format', '{{json .Name}}'])
