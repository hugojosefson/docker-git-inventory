/* eslint-env mocha */

import assert from 'assert'
import { defaultServiceToPush, inventoryToPushes } from '../src/index.mjs'
import inventory from './inventory-fixture.mjs'

describe('inventory-to-pushes', () => {
  it('is a function', () => {
    assert.deepStrictEqual(typeof inventoryToPushes, 'function')
  })

  it('converts to pushes', () =>
    inventoryToPushes(
      defaultServiceToPush({ username: 'myname', password: 'secret' })
    )(inventory())
      .collect()
      .toPromise(Promise)
      .then(actual =>
        assert.deepStrictEqual(actual, [
          {
            username: 'myname',
            password: 'secret',
            url: 'https://github.com/mygithubaccount/someservice.git',
            ref: 'a1937ff9195ecb7d225847a75e0a2c31f513bc15',
            remoteRef: 'refs/deployed/local',
          },
          {
            username: 'myname',
            password: 'secret',
            url: 'https://github.com/mygithubaccount/otherservice.git',
            ref: 'f3905fb519d1f304eca156ae7caf0e12575a108f',
            remoteRef: 'refs/deployed/local-somealternative',
          },
          {
            username: 'myname',
            password: 'secret',
            url: 'https://github.com/mygithubaccount/otherasdservice.git',
            ref: 'f3905fb519d1f304eca156ae7caf0e12575a108f',
            remoteRef: 'refs/deployed/local',
          },
          {
            username: 'myname',
            password: 'secret',
            url: 'https://github.com/mygithubaccount/codename-backend.git',
            ref: '9ce168a43e17809a8a01e5fe821bda677d96f5cd',
            remoteRef: 'refs/deployed/local',
          },
        ])
      ))
})
