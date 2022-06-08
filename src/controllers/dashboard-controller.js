const { logError } = require('../core/log');
const {
  getAllCollectionsByUser,
} = require('../repositories/collection-repository');

exports.dashboardIndex = (req, res, next) => {
  getAllCollectionsByUser('test')
    .then((collections) => {
      res.render('dashboard', { title: 'Dashboard', collections });
    })
    .catch((error) => {
      logError(error);
      res.redirect(301, '/');
    });
};
