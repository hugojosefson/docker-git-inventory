/**
 * Serves a person or entity.
 * @param {object} options
 * @param {string} options.whom Who the service is for.
 * @returns {Promise<string>} A `Promise` for the server.
 */
export default async ({ whom }) => {
  if (typeof whom === 'undefined') {
    throw new Error('You must specify who the server is for.')
  }

  return `server for ${whom}`
}
