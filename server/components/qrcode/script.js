"use strict";

exports.__esModule = true;
exports.compileLocalSmartQRCodeClientScript = compileLocalSmartQRCodeClientScript;
exports.getSmartQRCodeClientScript = getSmartQRCodeClientScript;

var _path = require("path");

var _sdkConstants = require("@paypal/sdk-constants");

var _config = require("../../config");

var _lib = require("../../lib");

var _watchers = require("../../watchers");

const ROOT = (0, _path.join)(__dirname, '../../..');

async function compileLocalSmartQRCodeClientScript() {
  const webpackScriptPath = (0, _lib.resolveScript)((0, _path.join)(ROOT, _config.WEBPACK_CONFIG));

  if (webpackScriptPath && (0, _lib.isLocalOrTest)()) {
    const {
      WEBPACK_CONFIG_QRCODE_DEBUG
    } = (0, _lib.babelRequire)(webpackScriptPath);
    const script = await (0, _lib.compileWebpack)(WEBPACK_CONFIG_QRCODE_DEBUG, ROOT);
    return {
      script,
      version: _sdkConstants.ENV.LOCAL
    };
  }

  const distScriptPath = (0, _lib.resolveScript)((0, _path.join)(_config.SMART_BUTTONS_MODULE, _config.QRCODE_CLIENT_JS));

  if (distScriptPath) {
    const script = (0, _lib.dynamicRequire)(distScriptPath);
    return {
      script,
      version: _sdkConstants.ENV.LOCAL
    };
  }
}

async function getSmartQRCodeClientScript({
  logBuffer,
  cache,
  debug = false,
  useLocal = (0, _lib.isLocalOrTest)()
} = {}) {
  if (useLocal) {
    const script = await compileLocalSmartQRCodeClientScript();

    if (script) {
      return script;
    }
  }

  const watcher = (0, _watchers.getPayPalSmartPaymentButtonsWatcher)({
    logBuffer,
    cache
  });
  const {
    version
  } = await watcher.get(_config.ACTIVE_TAG);
  const script = await watcher.read(debug ? _config.QRCODE_CLIENT_JS : _config.QRCODE_CLIENT_MIN_JS, _config.ACTIVE_TAG);
  return {
    script,
    version
  };
}