const exampleController = require('../../controllers/grpc/exampleController');

function get() {
  return new Promise((resolve, reject) => {
    return resolve(exampleController.callServer2());
  })
}

module.exports = {
  get,
};