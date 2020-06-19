'use strict';

const assert = require('assert');

const Tracer = require('egg-tracer');

let counter = 1;
class MyTracer extends Tracer {
  get traceId() {
    return `${counter++}-${Date.now()}-${process.pid}`;
  }
}

module.exports = (options, app) => {
  return async function (ctx, next) {

    const customTracer = new MyTracer(ctx);
    ctx.tracer = customTracer;

    assert.deepEqual(options, app.config.hello);
    console.log('ctx', ctx);
    console.log('app', app);
    ctx.logger.info('some request data');
    ctx.body = options.text;
    ctx.body = `ctx: ${JSON.stringify(ctx)} \r\n app: ${JSON.stringify(app)}`;
    await next();
  };
};
