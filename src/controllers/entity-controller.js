const { entityOutput } = require('../repositories/entity-output-repository');

exports.entityOutput = (req, res, next) => {
  res.json(entityOutput(req.params.entityId));
};
