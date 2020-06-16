import memfs from 'memfs'
import git from 'isomorphic-git/index.js'
import http from 'isomorphic-git/http/node/index.js'

const defaultOptions = {
  http,
  dir: '/tree',
  gitDir: '/git',
  noTags: true,
  noCheckout: true,
}

export default async ({ url, username, password }) => {
  const vol = new memfs.Volume()
  const fs = memfs.createFsFromVolume(vol)
  const gitOptions = {
    ...defaultOptions,
    fs,
    url,
    username,
    password,
    onAuth: () => ({ username, password }),
  }
  await git.clone(gitOptions)
  return gitOptions
}
