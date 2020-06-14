import onlyAt from 'middleware-only-at-path'
import allowMethods from 'allow-methods'
import ramda from 'ramda'
import forceToArray from '../fn/force-to-array.mjs'

const { mapObjIndexed } = ramda

/**
 * Creates a helper function `registerPath` for registering request handlers on a path, and at the same time limiting requests to the http methods supplied (plus OPTIONS).
 * Also creates a linked function `getDocumentation`, from which you can get an object describing which paths support which methods.
 * @param {Express|Application|IRouter} app Express.js Application instance or Router on which to apply paths
 */
export default app => {
  const documentation = {}

  /**
   * Helper function for registering request handlers on a path, and at the same time limiting requests to the http methods supplied (plus OPTIONS).
   * @param {PathParams} path the path to register handlers for
   * @param {{get: RequestHandler | ArrayLike<RequestHandler> | undefined, head: RequestHandler | ArrayLike<RequestHandler> | undefined, options: RequestHandler | ArrayLike<RequestHandler> | undefined, post: RequestHandler | ArrayLike<RequestHandler> | undefined, put: RequestHandler | ArrayLike<RequestHandler> | undefined, delete: RequestHandler | ArrayLike<RequestHandler> | undefined, patch: RequestHandler | ArrayLike<RequestHandler> | undefined}} handlers an object where the keys are http methods in lowercase ('get', 'post' etc) and the values are Express.js RequestHandler functions, or arrays of them.
   */
  const registerPath = (path, handlers) => {
    const methods = Object.keys(handlers)
    const shouldAllowHeadToo = !!handlers.get && !handlers.head
    const allowedMethods = [
      'options',
      ...methods,
      ...(shouldAllowHeadToo ? ['head'] : []),
    ]
      .map(method => method.toUpperCase())
      .sort()

    app.use(onlyAt(path, allowMethods(allowedMethods)))
    documentation[path] = allowedMethods

    Object.entries(handlers)
      .map(([method, requestHandlers]) => [
        method,
        forceToArray(requestHandlers),
      ])
      .forEach(([method, requestHandlers]) => {
        app[method](path, ...requestHandlers)
      })
  }

  const getDocumentation = () =>
    mapObjIndexed((index, key, obj) => obj[key].join(','), documentation)

  return { registerPath, getDocumentation }
}
