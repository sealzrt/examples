const Logger = require('egg-logger').Logger;
const CoustomTransport = require('./CoustomTransport.js');
const logger = new Logger();
logger.set('file', new CoustomTransport({
  level: 'INFO',
  file: 'app.log',
}));

module.exports = logger;
