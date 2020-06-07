import inventory from '../inventory.mjs'

export default () => ({
  command: 'inventory',
  description: 'This command lists what you have in Docker.',
  handler: () => inventory().each(console.log),
})
