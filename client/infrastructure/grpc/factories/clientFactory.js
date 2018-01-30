const config = require('config');
const grpc = require('grpc');
const grpc_promise = require('grpc-promise');

function init() {
  config.servers.forEach((server) => {
    const protoPath = __dirname + '/../../../../framework/grpc/proto/' + server.protoPath;
    const proto = grpc.load(protoPath)[server.protoName];
    
    createClient(server, proto);
  });
}

function createClient(serverData, proto) {
  const serviceName = serverData.protoName.charAt(0).toUpperCase() + serverData.protoName.slice(1);
  const serviceInstance = proto[serviceName];
  const client = new serviceInstance(`${serverData.ip}:${serverData.port}`,grpc.credentials.createInsecure());

  grpc_promise.promisifyAll(client);

  console.log(`Example : CLIENT connected to : ${serverData.name}(${serverData.ip}:${serverData.port})`);

  exports[serverData.name] = client;
}

module.exports = exports = {
  init,
};