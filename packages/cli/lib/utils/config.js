'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Config = void 0;
var conf_1 = __importDefault(require('conf'));
var Config = /** @class */ (function () {
  function Config() {
    this.config = Config.getConfig();
  }
  Config.schema = function () {
    return {
      host: {
        type: 'string',
        format: 'uri',
        default: 'http://0.0.0.0',
      },
      port: {
        type: 'number',
        minimum: 1024,
        maximum: 65535,
        default: 8545,
      },
    };
  };
  Config.options = function () {
    return {
      schema: Config.schema(),
    };
  };
  Config.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    // eslint-disable-next-line no-console
    console.log.apply(console, args);
  };
  Config.getConfig = function () {
    return new conf_1.default(Config.options());
  };
  Config.current = function () {
    var config = Config.getConfig();
    var host = config.get('host');
    var port = config.get('port');
    return { host: host, port: port };
  };
  Config.set = function (key, value) {
    var config = Config.getConfig();
    config.set(key, value);
  };
  Config.get = function (key) {
    var config = Config.getConfig();
    return config.get(key);
  };
  Config.prototype.set = function (key, value) {
    this.config.set(key, value);
  };
  Config.prototype.get = function (key) {
    return this.config.get(key);
  };
  Config.prototype.current = function () {
    var host = this.config.get('host');
    var port = this.config.get('port');
    return { host: host, port: port };
  };
  return Config;
})();
exports.Config = Config;
//# sourceMappingURL=config.js.map
