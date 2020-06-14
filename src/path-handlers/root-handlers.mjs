export default ({ getDocumentation }) => ({
  get: (req, res) =>
    res.type('json').send(JSON.stringify(getDocumentation(), null, 2)),
})
