const helpers = require('../helpers/auth-helpers')

const authenticated = (req, res, next) => {
  // console.log(req)
  if (helpers.ensureAuthenticated(req)) {
    // console.log(ensureAuthenticated(req))
    // console.log('沒盡到這邊')
    return next()
  }
  // console.log('現在就是進到這邊了')
  res.redirect('/signin')
}
const authenticatedAdmin = (req, res, next) => {
  // if (req.isAuthenticated)
  if (helpers.ensureAuthenticated(req)) {
    if (helpers.getUser(req).isAdmin) return next()
    res.redirect('/')
  } else {
    res.redirect('/signin')
  }
}
module.exports = {
  authenticated,
  authenticatedAdmin
}
