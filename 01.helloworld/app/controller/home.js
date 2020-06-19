'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;

    console.log('process.pid', process.pid);

    ctx.logger.info('some request data');

    ctx.body = 'Hello World';
  }
}

module.exports = HomeController;
