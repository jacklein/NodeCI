const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next(); // let route handler go first

  clearHash(req.user.id);
};