// eslint-disable-next-line strict
const Tracer = require('egg-tracer');

const counter = 0;

class MyTracer extends Tracer {
  get traceId() {
    return `${counter++}-${Date.now()}-${process.pid}`;
  }
}

module.exports = MyTracer;
