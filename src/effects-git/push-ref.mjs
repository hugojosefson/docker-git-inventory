import git from 'isomorphic-git/index.js'
import clone from './clone.mjs'

/**
 * Pushes a git commit to its repo, with a specific remoteRef.
 *
 * @param {object} options
 * @param {string} options.username username for git authentication
 * @param {string} options.password password for authentication
 * @param {string} options.url git repo url
 * @param {string} options.ref the commit to push
 * @param {string} options.remoteRef name of the remote ref, for example refs/deployed/stage
 * @returns {Promise<void>} resolves when done
 */
export default async ({ username, password, url, ref, remoteRef }) => {
  const gitOptions = await clone({ username, password, url })
  await git.fetch({ ...gitOptions, ref })
  await git.push({ ...gitOptions, ref, remoteRef, force: true })
}
