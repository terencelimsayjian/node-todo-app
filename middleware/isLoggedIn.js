module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  req.flash('error', 'Please log in to access that feature')
  res.redirect('/auth/login')
}
