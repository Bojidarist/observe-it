const { Router } = require('express');
const { dashboardIndex } = require('../controllers/dashboard-controller');

const router = Router();
router.get('/', dashboardIndex);

exports.dashboardRoute = {
  routeName: '/',
  router: router,
};
