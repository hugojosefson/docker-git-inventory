import docker from '../effects/docker.mjs'

export default ({ serviceId, labels = {}, ...rest }) =>
  docker(['inspect', serviceId, '--format', '{{json .Spec.Labels}}']).map(
    moreLabels => ({
      serviceId,
      ...rest,
      labels: { ...labels, ...moreLabels },
    })
  )
// TODO: search all of the inspection json output for Labels, in all inspections
