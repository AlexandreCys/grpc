const config = {
  port: 8080,
  servers: [
    {
      name: 'example1',
      ip:'0.0.0.0',
      port: '5050',
      protoName: 'example1',
      protoPath: 'example1.proto',
    },
    {
      name: 'example2',
      ip:'sandbox-pgp.qover.com',
      port: '9111',
      protoName: 'pgp',
      protoPath: 'example2.proto',
    },
  ],
  database: {},
  loggers: {
    level: process.env.LOGS_LEVEL,
    loggly: {
      use: process.env.LOGS_LOGGLY !== 'false',
      subdomain: process.env.LOGS_LOGGLY_SUBDOMAIN,
      token: process.env.LOGS_LOGGLY_TOKEN,
      tag: process.env.LOGS_LOGGLY_TAG,
    },
  },
  files: {
    tmpLocation: '/tmp/',
  },
};

module.exports = config;