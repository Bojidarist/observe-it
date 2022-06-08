const express = require('express');
const { entityOutput } = require('../controllers/entity-controller');

const router = express.Router();
router.get('/:entityId', entityOutput);

exports.entityRoute = {
  routeName: '/entity',
  router: router,
};
