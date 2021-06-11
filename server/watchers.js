"use strict";

exports.__esModule = true;
exports.getPayPalSDKWatcher = getPayPalSDKWatcher;
exports.getPayPalSmartPaymentButtonsWatcher = getPayPalSmartPaymentButtonsWatcher;
exports.startWatchers = startWatchers;
exports.cancelWatchers = cancelWatchers;

var _grabthar = require("grabthar");

var _config = require("./config");

let paypalSDKWatcher;
let paypalSmartButtonsWatcher;

function getPayPalSDKWatcher({
  logBuffer,
  cache
}) {
  if (!cache || !logBuffer) {
    throw new Error(`Cache and logBuffer required`);
  }

  paypalSDKWatcher = paypalSDKWatcher || (0, _grabthar.poll)({
    cdnRegistry: _config.SDK_CDN_NAMESPACE,
    name: _config.SDK_RELEASE_MODULE,
    tags: [_config.LATEST_TAG, _config.ACTIVE_TAG],
    period: _config.MODULE_POLL_INTERVAL,
    childModules: [_config.CHECKOUT_COMPONENTS_MODULE],
    flat: true,
    dependencies: true,
    logger: logBuffer,
    cache
  });
  return paypalSDKWatcher;
}

function getPayPalSmartPaymentButtonsWatcher({
  logBuffer,
  cache
}) {
  if (!cache || !logBuffer) {
    throw new Error(`Cache and logBuffer required`);
  }

  paypalSmartButtonsWatcher = paypalSmartButtonsWatcher || (0, _grabthar.poll)({
    cdnRegistry: _config.SMART_BUTTONS_CDN_NAMESPACE,
    name: _config.SMART_BUTTONS_MODULE,
    tags: [_config.LATEST_TAG, _config.ACTIVE_TAG],
    period: _config.MODULE_POLL_INTERVAL,
    flat: true,
    dependencies: false,
    logger: logBuffer,
    cache
  });
  return paypalSmartButtonsWatcher;
}

function startWatchers({
  logBuffer,
  cache
} = {}) {
  getPayPalSDKWatcher({
    logBuffer,
    cache
  });
  getPayPalSmartPaymentButtonsWatcher({
    logBuffer,
    cache
  });
}

function cancelWatchers() {
  if (paypalSDKWatcher) {
    paypalSDKWatcher.cancel();
    paypalSDKWatcher = null;
  }

  if (paypalSmartButtonsWatcher) {
    paypalSmartButtonsWatcher.cancel();
    paypalSmartButtonsWatcher = null;
  }
}