'use strict';

exports.keys = 'my super cool keys';

exports.middleware = [
  'hello',
];

exports.hello = {
  text: 'Hello World 123',
};

exports.tracer = {
  Class: require('./my_tracer.js'),
};
