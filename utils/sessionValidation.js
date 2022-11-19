export const checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/users/login");
};

export const checkNotAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
};

export const isAdmin = async function (req, res, next) {
  res.locals.isAdmin = req.user.role;
  next();
};
