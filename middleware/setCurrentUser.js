module.exports = (req, res, next) => {
  res.locals.currentUser = req.user
  res.locals.alerts = req.flash()
  next()
}
