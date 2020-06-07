import inventory from '../effects-docker/inventory.mjs'

export default () => ({
  command: 'inventory',
  description: 'This command lists what you have in Docker.',
  handler: () => inventory().each(console.log),
})
