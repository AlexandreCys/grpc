const express = require('express');
const services = require('../../../services');

const router = express.Router();

router.get('/1',
  (req, res, next) =>
    services.examplesServices.examplesService1.get()
  .then((result) => {
    res.json(result);
  })
  .catch(err => next(err))
);

router.get('/2',
(req, res, next) =>
  services.examplesServices.examplesService2.get()
.then((result) => {
  res.json(result);
})
.catch(err => next(err))
);

module.exports = router;