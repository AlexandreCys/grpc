const config = {
  server: {
      name: 'example',
      ip:'127.0.0.1',
      port: '6060',
      protoName: 'example2',
      protoPath: 'example2.proto',
  },
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