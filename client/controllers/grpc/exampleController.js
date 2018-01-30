const services = require('../../infrastructure/grpc/factories/clientFactory');

function callServer1(client) {
  return services.example1.exampleSimple()
  .sendMessage({value: 1})
  .then(res => {
    console.log('Example1 CLIENT received simple message : ', res)
    return res;
  })
  .catch(err => console.error(err));
}

function callServer2(client) {
  console.log(client);
  return services.example2.exampleSimple()
  .sendMessage({})
  .then(res => {
    console.log('Example1 CLIENT received simple message : ', res)
    return res;
  })
  .catch(err => console.error(err));
}

module.exports = {
  callServer1,
  callServer2,
};