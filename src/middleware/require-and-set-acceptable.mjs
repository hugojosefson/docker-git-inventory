export default types => (req, res, next) => {
  const acceptable = req.accepts(types)
  if (acceptable) {
    req.acceptable = acceptable
    res.type(acceptable)
    next()
  } else {
    res.sendStatus(406)
  }
}
