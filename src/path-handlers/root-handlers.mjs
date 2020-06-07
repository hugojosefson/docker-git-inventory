export default ({ getDocumentation }) => ({
  get: (req, res) => res.json(getDocumentation()),
})
