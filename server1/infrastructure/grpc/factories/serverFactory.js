const config = require('config');
const grpc = require('grpc');

function init() {
  const server = config.server;
  const protoPath = __dirname + '/../../../../framework/grpc/proto/' + server.protoPath;
  const proto = grpc.load(protoPath)[server.protoName];
  
  createServer(server, proto);
}

function createServer(serverData, proto) {
  const server = new grpc.Server();
  const controller = require(`../../../controllers/grpc/${serverData.name}Controller.js`)

  server.addService(proto.Example1.service, controller);
  server.bind(`${serverData.ip}:${serverData.port}`, grpc.ServerCredentials.createInsecure());

  console.log(`Example : SERVER1 listen to : (${serverData.ip}:${serverData.port})`);

  server.start();
}

module.exports = {
  init,
};