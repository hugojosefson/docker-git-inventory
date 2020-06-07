const serviceName = ({ stack, prefix = stack + '_', serviceNameLong }) =>
  serviceNameLong.startsWith(prefix)
    ? serviceNameLong.substring(prefix.length)
    : serviceNameLong

export default ({ stack, serviceNameLong, ...rest }) => ({
  stack,
  serviceNameLong,
  ...rest,
  serviceName: serviceName({ stack, serviceNameLong }),
})
