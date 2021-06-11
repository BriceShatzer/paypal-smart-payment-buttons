!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("spbNativePopup", [], factory) : "object" == typeof exports ? exports.spbNativePopup = factory() : root.spbNativePopup = factory();
}("undefined" != typeof self ? self : this, (function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return {}.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 2);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1);
        module.exports.default = module.exports;
    }, function(module, exports, __webpack_require__) {
        "undefined" != typeof self && self, module.exports = function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: !1,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = !0;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports, name, getter) {
                __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                    enumerable: !0,
                    get: getter
                });
            };
            __webpack_require__.r = function(exports) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
            };
            __webpack_require__.t = function(value, mode) {
                1 & mode && (value = __webpack_require__(value));
                if (8 & mode) return value;
                if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, "default", {
                    enumerable: !0,
                    value: value
                });
                if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function() {
                    return module.default;
                } : function() {
                    return module;
                };
                __webpack_require__.d(getter, "a", getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return {}.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
        }([ function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "Promise", (function() {
                return promise_ZalgoPromise;
            }));
            __webpack_require__.d(__webpack_exports__, "TYPES", (function() {
                return src_types_TYPES_0;
            }));
            __webpack_require__.d(__webpack_exports__, "ProxyWindow", (function() {
                return window_ProxyWindow;
            }));
            __webpack_require__.d(__webpack_exports__, "setup", (function() {
                return setup;
            }));
            __webpack_require__.d(__webpack_exports__, "destroy", (function() {
                return destroy;
            }));
            __webpack_require__.d(__webpack_exports__, "serializeMessage", (function() {
                return setup_serializeMessage;
            }));
            __webpack_require__.d(__webpack_exports__, "deserializeMessage", (function() {
                return setup_deserializeMessage;
            }));
            __webpack_require__.d(__webpack_exports__, "createProxyWindow", (function() {
                return createProxyWindow;
            }));
            __webpack_require__.d(__webpack_exports__, "toProxyWindow", (function() {
                return setup_toProxyWindow;
            }));
            __webpack_require__.d(__webpack_exports__, "on", (function() {
                return on_on;
            }));
            __webpack_require__.d(__webpack_exports__, "once", (function() {
                return on_once;
            }));
            __webpack_require__.d(__webpack_exports__, "send", (function() {
                return send_send;
            }));
            __webpack_require__.d(__webpack_exports__, "markWindowKnown", (function() {
                return markWindowKnown;
            }));
            __webpack_require__.d(__webpack_exports__, "cleanUpWindow", (function() {
                return cleanUpWindow;
            }));
            __webpack_require__.d(__webpack_exports__, "bridge", (function() {}));
            function isRegex(item) {
                return "[object RegExp]" === {}.toString.call(item);
            }
            var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isAboutProtocol(win) {
                void 0 === win && (win = window);
                return "about:" === win.location.protocol;
            }
            function getParent(win) {
                void 0 === win && (win = window);
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }
            function getOpener(win) {
                void 0 === win && (win = window);
                if (win && !getParent(win)) try {
                    return win.opener;
                } catch (err) {}
            }
            function canReadFromWindow(win) {
                try {
                    return !0;
                } catch (err) {}
                return !1;
            }
            function getActualDomain(win) {
                void 0 === win && (win = window);
                var location = win.location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if ("file:" === protocol) return "file://";
                if ("about:" === protocol) {
                    var parent = getParent(win);
                    return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                void 0 === win && (win = window);
                var domain = getActualDomain(win);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
            }
            function isSameDomain(win) {
                if (!function(win) {
                    try {
                        if (win === window) return !0;
                    } catch (err) {}
                    try {
                        var desc = Object.getOwnPropertyDescriptor(win, "location");
                        if (desc && !1 === desc.enumerable) return !1;
                    } catch (err) {}
                    try {
                        if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    } catch (err) {}
                    try {
                        if (getActualDomain(win) === getActualDomain(window)) return !0;
                    } catch (err) {}
                    return !1;
                }(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }
            function assertSameDomain(win) {
                if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                return win;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) return !1;
                var childParent = getParent(child);
                return childParent ? childParent === parent : -1 !== function(win) {
                    var result = [];
                    try {
                        for (;win.parent !== win; ) {
                            result.push(win.parent);
                            win = win.parent;
                        }
                    } catch (err) {}
                    return result;
                }(child).indexOf(parent);
            }
            function getFrames(win) {
                var result = [];
                var frames;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len;
                try {
                    len = frames.length;
                } catch (err) {}
                if (0 === len) return result;
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i = 0; _i < 100; _i++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) return result;
                    result.push(_frame);
                }
                return result;
            }
            var iframeWindows = [];
            var iframeFrames = [];
            function isWindowClosed(win, allowMock) {
                void 0 === allowMock && (allowMock = !0);
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err) {
                    return !err || err.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && isSameDomain(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err) {}
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err) {}
                var iframeIndex = function(collection, item) {
                    for (var i = 0; i < collection.length; i++) try {
                        if (collection[i] === item) return i;
                    } catch (err) {}
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame = iframeFrames[iframeIndex];
                    if (frame && function(frame) {
                        if (!frame.contentWindow) return !0;
                        if (!frame.parentNode) return !0;
                        var doc = frame.ownerDocument;
                        if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                            var parent = frame;
                            for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                            if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                        }
                        return !1;
                    }(frame)) return !0;
                }
                return !1;
            }
            function getAncestor(win) {
                void 0 === win && (win = window);
                return getOpener(win = win || window) || getParent(win) || void 0;
            }
            function matchDomain(pattern, origin) {
                if ("string" == typeof pattern) {
                    if ("string" == typeof origin) return "*" === pattern || origin === pattern;
                    if (isRegex(origin)) return !1;
                    if (Array.isArray(origin)) return !1;
                }
                return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some((function(subpattern) {
                    return matchDomain(subpattern, origin);
                })));
            }
            function isWindow(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === {}.toString.call(obj)) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
                } catch (err) {}
                return !1;
            }
            function closeWindow(win) {
                try {
                    win.close();
                } catch (err) {}
            }
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            var dispatchedErrors = [];
            var possiblyUnhandledPromiseHandlers = [];
            var activeCount = 0;
            var flushPromise;
            function flushActive() {
                if (!activeCount && flushPromise) {
                    var promise = flushPromise;
                    flushPromise = null;
                    promise.resolve();
                }
            }
            function startActive() {
                activeCount += 1;
            }
            function endActive() {
                activeCount -= 1;
                flushActive();
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    this.resolved = void 0;
                    this.rejected = void 0;
                    this.errorHandled = void 0;
                    this.value = void 0;
                    this.error = void 0;
                    this.handlers = void 0;
                    this.dispatching = void 0;
                    this.stack = void 0;
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result;
                        var _error;
                        var resolved = !1;
                        var rejected = !1;
                        var isAsync = !1;
                        startActive();
                        try {
                            handler((function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }), (function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            }));
                        } catch (err) {
                            endActive();
                            this.reject(err);
                            return;
                        }
                        endActive();
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                var _proto = ZalgoPromise.prototype;
                _proto.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                _proto.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout((function() {
                        _this2.errorHandled || function(err, promise) {
                            if (-1 === dispatchedErrors.indexOf(err)) {
                                dispatchedErrors.push(err);
                                setTimeout((function() {
                                    throw err;
                                }), 1);
                                for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        }(error, _this2);
                    }), 1);
                    this.dispatch();
                    return this;
                };
                _proto.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                    return this;
                };
                _proto.dispatch = function() {
                    var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!this.dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        startActive();
                        var chain = function(firstPromise, secondPromise) {
                            return firstPromise.then((function(res) {
                                secondPromise.resolve(res);
                            }), (function(err) {
                                secondPromise.reject(err);
                            }));
                        };
                        for (var i = 0; i < handlers.length; i++) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                            var _result2 = void 0;
                            if (resolved) try {
                                _result2 = onSuccess ? onSuccess(this.value) : this.value;
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(this.error);
                                    continue;
                                }
                                try {
                                    _result2 = onError(this.error);
                                } catch (err) {
                                    promise.reject(err);
                                    continue;
                                }
                            }
                            if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                                _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error);
                                _result2.errorHandled = !0;
                            } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                        }
                        handlers.length = 0;
                        this.dispatching = !1;
                        endActive();
                    }
                };
                _proto.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise;
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                _proto.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                _proto.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then((function(result) {
                        return ZalgoPromise.try(onFinally).then((function() {
                            return result;
                        }));
                    }), (function(err) {
                        return ZalgoPromise.try(onFinally).then((function() {
                            throw err;
                        }));
                    }));
                };
                _proto.timeout = function(time, err) {
                    var _this3 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout((function() {
                        _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }), time);
                    return this.then((function(result) {
                        clearTimeout(timeout);
                        return result;
                    }));
                };
                _proto.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                        return value.then(resolve, reject);
                    })) : (new ZalgoPromise).resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return (new ZalgoPromise).reject(error);
                };
                ZalgoPromise.asyncReject = function(error) {
                    return (new ZalgoPromise).asyncReject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise;
                    var count = promises.length;
                    var results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    var chain = function(i, firstPromise, secondPromise) {
                        return firstPromise.then((function(res) {
                            results[i] = res;
                            0 == (count -= 1) && promise.resolve(results);
                        }), (function(err) {
                            secondPromise.reject(err);
                        }));
                    };
                    for (var i = 0; i < promises.length; i++) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                continue;
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            continue;
                        }
                        chain(i, ZalgoPromise.resolve(prom), promise);
                    }
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    var awaitPromises = [];
                    var _loop = function(key) {
                        if (promises.hasOwnProperty(key)) {
                            var value = promises[key];
                            utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                                result[key] = res;
                            }))) : result[key] = value;
                        }
                    };
                    for (var key in promises) _loop(key);
                    return ZalgoPromise.all(awaitPromises).then((function() {
                        return result;
                    }));
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return function(handler) {
                        possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result;
                    startActive();
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        endActive();
                        return ZalgoPromise.reject(err);
                    }
                    endActive();
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise((function(resolve) {
                        setTimeout(resolve, _delay);
                    }));
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    return function(Zalgo) {
                        var promise = flushPromise = flushPromise || new Zalgo;
                        flushActive();
                        return promise;
                    }(ZalgoPromise);
                };
                return ZalgoPromise;
            }();
            function util_safeIndexOf(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }
            var weakmap_CrossDomainSafeWeakMap = function() {
                function CrossDomainSafeWeakMap() {
                    this.name = void 0;
                    this.weakmap = void 0;
                    this.keys = void 0;
                    this.values = void 0;
                    this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                    if (function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var testWeakMap = new WeakMap;
                            var testKey = {};
                            Object.freeze(testKey);
                            testWeakMap.set(testKey, "__testvalue__");
                            return "__testvalue__" === testWeakMap.get(testKey);
                        } catch (err) {
                            return !1;
                        }
                    }()) try {
                        this.weakmap = new WeakMap;
                    } catch (err) {}
                    this.keys = [];
                    this.values = [];
                }
                var _proto = CrossDomainSafeWeakMap.prototype;
                _proto._cleanupClosedWindows = function() {
                    var weakmap = this.weakmap;
                    var keys = this.keys;
                    for (var i = 0; i < keys.length; i++) {
                        var value = keys[i];
                        if (isWindow(value) && isWindowClosed(value)) {
                            if (weakmap) try {
                                weakmap.delete(value);
                            } catch (err) {}
                            keys.splice(i, 1);
                            this.values.splice(i, 1);
                            i -= 1;
                        }
                    }
                };
                _proto.isSafeToReadWrite = function(key) {
                    return !isWindow(key);
                };
                _proto.set = function(key, value) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.set(key, value);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var name = this.name;
                        var entry = key[name];
                        entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                            value: [ key, value ],
                            writable: !0
                        });
                        return;
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var keys = this.keys;
                    var values = this.values;
                    var index = util_safeIndexOf(keys, key);
                    if (-1 === index) {
                        keys.push(key);
                        values.push(value);
                    } else values[index] = value;
                };
                _proto.get = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return weakmap.get(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return entry && entry[0] === key ? entry[1] : void 0;
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var index = util_safeIndexOf(this.keys, key);
                    if (-1 !== index) return this.values[index];
                };
                _proto.delete = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.delete(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var keys = this.keys;
                    var index = util_safeIndexOf(keys, key);
                    if (-1 !== index) {
                        keys.splice(index, 1);
                        this.values.splice(index, 1);
                    }
                };
                _proto.has = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return !0;
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return !(!entry || entry[0] !== key);
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    return -1 !== util_safeIndexOf(this.keys, key);
                };
                _proto.getOrSet = function(key, getter) {
                    if (this.has(key)) return this.get(key);
                    var value = getter();
                    this.set(key, value);
                    return value;
                };
                return CrossDomainSafeWeakMap;
            }();
            function getFunctionName(fn) {
                return fn.name || fn.__name__ || fn.displayName || "anonymous";
            }
            function setFunctionName(fn, name) {
                try {
                    delete fn.name;
                    fn.name = name;
                } catch (err) {}
                fn.__name__ = fn.displayName = name;
                return fn;
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, (function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                })) + "_" + function(str) {
                    if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    })));
                    if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
                    throw new Error("Can not find window.btoa or Buffer");
                }((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            }
            var objectIDs;
            function serializeArgs(args) {
                try {
                    return JSON.stringify([].slice.call(args), (function(subkey, val) {
                        return "function" == typeof val ? "memoize[" + function(obj) {
                            objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                            if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                            var uid = objectIDs.get(obj);
                            if (!uid) {
                                uid = typeof obj + ":" + uniqueID();
                                objectIDs.set(obj, uid);
                            }
                            return uid;
                        }(val) + "]" : val;
                    }));
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
            function getEmptyObject() {
                return {};
            }
            var memoizeGlobalIndex = 0;
            var memoizeGlobalIndexValidFrom = 0;
            function memoize(method, options) {
                void 0 === options && (options = {});
                var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
                var simpleCache;
                var thisCache;
                var memoizeIndex = memoizeGlobalIndex;
                memoizeGlobalIndex += 1;
                var memoizedFunction = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                        simpleCache = null;
                        thisCache = null;
                        memoizeIndex = memoizeGlobalIndex;
                        memoizeGlobalIndex += 1;
                    }
                    var cache;
                    cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                    var cacheKey = serializeArgs(args);
                    var cacheResult = cache[cacheKey];
                    if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                        delete cache[cacheKey];
                        cacheResult = null;
                    }
                    if (cacheResult) return cacheResult.value;
                    var time = Date.now();
                    var value = method.apply(this, arguments);
                    cache[cacheKey] = {
                        time: time,
                        value: value
                    };
                    return value;
                };
                memoizedFunction.reset = function() {
                    simpleCache = null;
                    thisCache = null;
                };
                return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
            }
            memoize.clear = function() {
                memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
            };
            function memoizePromise(method) {
                var cache = {};
                function memoizedPromiseFunction() {
                    var _arguments = arguments, _this = this;
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    var key = serializeArgs(args);
                    if (cache.hasOwnProperty(key)) return cache[key];
                    cache[key] = promise_ZalgoPromise.try((function() {
                        return method.apply(_this, _arguments);
                    })).finally((function() {
                        delete cache[key];
                    }));
                    return cache[key];
                }
                memoizedPromiseFunction.reset = function() {
                    cache = {};
                };
                return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
            }
            function src_util_noop() {}
            function stringifyError(err, level) {
                void 0 === level && (level = 1);
                if (level >= 3) return "stringifyError stack overflow";
                try {
                    if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                    if ("string" == typeof err) return err;
                    if (err instanceof Error) {
                        var stack = err && err.stack;
                        var message = err && err.message;
                        if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                        if (stack) return stack;
                        if (message) return message;
                    }
                    return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
                } catch (newErr) {
                    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                }
            }
            function stringify(item) {
                return "string" == typeof item ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item);
            }
            memoize((function(obj) {
                if (Object.values) return Object.values(obj);
                var result = [];
                for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
                return result;
            }));
            function util_isRegex(item) {
                return "[object RegExp]" === {}.toString.call(item);
            }
            function util_getOrSet(obj, key, getter) {
                if (obj.hasOwnProperty(key)) return obj[key];
                var val = getter();
                obj[key] = val;
                return val;
            }
            Error;
            function isDocumentReady() {
                return Boolean(document.body) && "complete" === document.readyState;
            }
            function isDocumentInteractive() {
                return Boolean(document.body) && "interactive" === document.readyState;
            }
            memoize((function() {
                return new promise_ZalgoPromise((function(resolve) {
                    if (isDocumentReady() || isDocumentInteractive()) return resolve();
                    var interval = setInterval((function() {
                        if (isDocumentReady() || isDocumentInteractive()) {
                            clearInterval(interval);
                            return resolve();
                        }
                    }), 10);
                }));
            }));
            var currentScript = "undefined" != typeof document ? document.currentScript : null;
            var getCurrentScript = memoize((function() {
                if (currentScript) return currentScript;
                if (currentScript = function() {
                    try {
                        var stack = function() {
                            try {
                                throw new Error("_");
                            } catch (err) {
                                return err.stack || "";
                            }
                        }();
                        var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                        var scriptLocation = stackDetails && stackDetails[1];
                        if (!scriptLocation) return;
                        for (var _i20 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i20 < _Array$prototype$slic2.length; _i20++) {
                            var script = _Array$prototype$slic2[_i20];
                            if (script.src && script.src === scriptLocation) return script;
                        }
                    } catch (err) {}
                }()) return currentScript;
                throw new Error("Can not determine current script");
            }));
            var currentUID = uniqueID();
            memoize((function() {
                var script;
                try {
                    script = getCurrentScript();
                } catch (err) {
                    return currentUID;
                }
                var uid = script.getAttribute("data-uid");
                if (uid && "string" == typeof uid) return uid;
                if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
                uid = uniqueID();
                script.setAttribute("data-uid-auto", uid);
                return uid;
            }));
            function global_getGlobal(win) {
                void 0 === win && (win = window);
                var globalKey = "__post_robot_10_0_42__";
                return win !== window ? win[globalKey] : win[globalKey] = win[globalKey] || {};
            }
            var getObj = function() {
                return {};
            };
            function globalStore(key, defStore) {
                void 0 === key && (key = "store");
                void 0 === defStore && (defStore = getObj);
                return util_getOrSet(global_getGlobal(), key, (function() {
                    var store = defStore();
                    return {
                        has: function(storeKey) {
                            return store.hasOwnProperty(storeKey);
                        },
                        get: function(storeKey, defVal) {
                            return store.hasOwnProperty(storeKey) ? store[storeKey] : defVal;
                        },
                        set: function(storeKey, val) {
                            store[storeKey] = val;
                            return val;
                        },
                        del: function(storeKey) {
                            delete store[storeKey];
                        },
                        getOrSet: function(storeKey, getter) {
                            return util_getOrSet(store, storeKey, getter);
                        },
                        reset: function() {
                            store = defStore();
                        },
                        keys: function() {
                            return Object.keys(store);
                        }
                    };
                }));
            }
            var WildCard = function() {};
            function getWildcard() {
                var global = global_getGlobal();
                global.WINDOW_WILDCARD = global.WINDOW_WILDCARD || new WildCard;
                return global.WINDOW_WILDCARD;
            }
            function windowStore(key, defStore) {
                void 0 === key && (key = "store");
                void 0 === defStore && (defStore = getObj);
                return globalStore("windowStore").getOrSet(key, (function() {
                    var winStore = new weakmap_CrossDomainSafeWeakMap;
                    var getStore = function(win) {
                        return winStore.getOrSet(win, defStore);
                    };
                    return {
                        has: function(win) {
                            return getStore(win).hasOwnProperty(key);
                        },
                        get: function(win, defVal) {
                            var store = getStore(win);
                            return store.hasOwnProperty(key) ? store[key] : defVal;
                        },
                        set: function(win, val) {
                            getStore(win)[key] = val;
                            return val;
                        },
                        del: function(win) {
                            delete getStore(win)[key];
                        },
                        getOrSet: function(win, getter) {
                            return util_getOrSet(getStore(win), key, getter);
                        }
                    };
                }));
            }
            function getInstanceID() {
                return globalStore("instance").getOrSet("instanceID", uniqueID);
            }
            function resolveHelloPromise(win, _ref) {
                var domain = _ref.domain;
                var helloPromises = windowStore("helloPromises");
                var existingPromise = helloPromises.get(win);
                existingPromise && existingPromise.resolve({
                    domain: domain
                });
                var newPromise = promise_ZalgoPromise.resolve({
                    domain: domain
                });
                helloPromises.set(win, newPromise);
                return newPromise;
            }
            function sayHello(win, _ref4) {
                return (0, _ref4.send)(win, "postrobot_hello", {
                    instanceID: getInstanceID()
                }, {
                    domain: "*",
                    timeout: -1
                }).then((function(_ref5) {
                    var origin = _ref5.origin, instanceID = _ref5.data.instanceID;
                    resolveHelloPromise(win, {
                        domain: origin
                    });
                    return {
                        win: win,
                        domain: origin,
                        instanceID: instanceID
                    };
                }));
            }
            function getWindowInstanceID(win, _ref6) {
                var send = _ref6.send;
                return windowStore("windowInstanceIDPromises").getOrSet(win, (function() {
                    return sayHello(win, {
                        send: send
                    }).then((function(_ref7) {
                        return _ref7.instanceID;
                    }));
                }));
            }
            function markWindowKnown(win) {
                windowStore("knownWindows").set(win, !0);
            }
            function isSerializedType(item) {
                return "object" == typeof item && null !== item && "string" == typeof item.__type__;
            }
            function determineType(val) {
                return void 0 === val ? "undefined" : null === val ? "null" : Array.isArray(val) ? "array" : "function" == typeof val ? "function" : "object" == typeof val ? val instanceof Error ? "error" : "function" == typeof val.then ? "promise" : "[object RegExp]" === {}.toString.call(val) ? "regex" : "[object Date]" === {}.toString.call(val) ? "date" : "object" : "string" == typeof val ? "string" : "number" == typeof val ? "number" : "boolean" == typeof val ? "boolean" : void 0;
            }
            function serializeType(type, val) {
                return {
                    __type__: type,
                    __val__: val
                };
            }
            var _SERIALIZER;
            var SERIALIZER = ((_SERIALIZER = {}).function = function() {}, _SERIALIZER.error = function(_ref) {
                return serializeType("error", {
                    message: _ref.message,
                    stack: _ref.stack,
                    code: _ref.code,
                    data: _ref.data
                });
            }, _SERIALIZER.promise = function() {}, _SERIALIZER.regex = function(val) {
                return serializeType("regex", val.source);
            }, _SERIALIZER.date = function(val) {
                return serializeType("date", val.toJSON());
            }, _SERIALIZER.array = function(val) {
                return val;
            }, _SERIALIZER.object = function(val) {
                return val;
            }, _SERIALIZER.string = function(val) {
                return val;
            }, _SERIALIZER.number = function(val) {
                return val;
            }, _SERIALIZER.boolean = function(val) {
                return val;
            }, _SERIALIZER.null = function(val) {
                return val;
            }, _SERIALIZER);
            var defaultSerializers = {};
            var _DESERIALIZER;
            var DESERIALIZER = ((_DESERIALIZER = {}).function = function() {
                throw new Error("Function serialization is not implemented; nothing to deserialize");
            }, _DESERIALIZER.error = function(_ref2) {
                var stack = _ref2.stack, code = _ref2.code, data = _ref2.data;
                var error = new Error(_ref2.message);
                error.code = code;
                data && (error.data = data);
                error.stack = stack + "\n\n" + error.stack;
                return error;
            }, _DESERIALIZER.promise = function() {
                throw new Error("Promise serialization is not implemented; nothing to deserialize");
            }, _DESERIALIZER.regex = function(val) {
                return new RegExp(val);
            }, _DESERIALIZER.date = function(val) {
                return new Date(val);
            }, _DESERIALIZER.array = function(val) {
                return val;
            }, _DESERIALIZER.object = function(val) {
                return val;
            }, _DESERIALIZER.string = function(val) {
                return val;
            }, _DESERIALIZER.number = function(val) {
                return val;
            }, _DESERIALIZER.boolean = function(val) {
                return val;
            }, _DESERIALIZER.null = function(val) {
                return val;
            }, _DESERIALIZER);
            var defaultDeserializers = {};
            new promise_ZalgoPromise((function(resolve) {
                if (window.document && window.document.body) return resolve(window.document.body);
                var interval = setInterval((function() {
                    if (window.document && window.document.body) {
                        clearInterval(interval);
                        return resolve(window.document.body);
                    }
                }), 10);
            }));
            function cleanupProxyWindows() {
                var idToProxyWindow = globalStore("idToProxyWindow");
                for (var _i2 = 0, _idToProxyWindow$keys2 = idToProxyWindow.keys(); _i2 < _idToProxyWindow$keys2.length; _i2++) {
                    var id = _idToProxyWindow$keys2[_i2];
                    idToProxyWindow.get(id).shouldClean() && idToProxyWindow.del(id);
                }
            }
            function getSerializedWindow(winPromise, _ref) {
                var send = _ref.send, _ref$id = _ref.id, id = void 0 === _ref$id ? uniqueID() : _ref$id;
                var windowNamePromise = winPromise.then((function(win) {
                    if (isSameDomain(win)) return assertSameDomain(win).name;
                }));
                var windowTypePromise = winPromise.then((function(window) {
                    if (isWindowClosed(window)) throw new Error("Window is closed, can not determine type");
                    return getOpener(window) ? "popup" : "iframe";
                }));
                windowNamePromise.catch(src_util_noop);
                windowTypePromise.catch(src_util_noop);
                return {
                    id: id,
                    getType: function() {
                        return windowTypePromise;
                    },
                    getInstanceID: memoizePromise((function() {
                        return winPromise.then((function(win) {
                            return getWindowInstanceID(win, {
                                send: send
                            });
                        }));
                    })),
                    close: function() {
                        return winPromise.then(closeWindow);
                    },
                    getName: function() {
                        return winPromise.then((function(win) {
                            if (!isWindowClosed(win)) return isSameDomain(win) ? assertSameDomain(win).name : windowNamePromise;
                        }));
                    },
                    focus: function() {
                        return winPromise.then((function(win) {
                            win.focus();
                        }));
                    },
                    isClosed: function() {
                        return winPromise.then((function(win) {
                            return isWindowClosed(win);
                        }));
                    },
                    setLocation: function(href) {
                        return winPromise.then((function(win) {
                            var domain = window.location.protocol + "//" + window.location.host;
                            if (0 === href.indexOf("/")) href = "" + domain + href; else if (!href.match(/^https?:\/\//) && 0 !== href.indexOf(domain)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(href));
                            if (isSameDomain(win)) try {
                                if (win.location && "function" == typeof win.location.replace) {
                                    win.location.replace(href);
                                    return;
                                }
                            } catch (err) {}
                            win.location = href;
                        }));
                    },
                    setName: function(name) {
                        return winPromise.then((function(win) {
                            var sameDomain = isSameDomain(win);
                            var frame = function(win) {
                                if (isSameDomain(win)) return assertSameDomain(win).frameElement;
                                for (var _i21 = 0, _document$querySelect2 = document.querySelectorAll("iframe"); _i21 < _document$querySelect2.length; _i21++) {
                                    var frame = _document$querySelect2[_i21];
                                    if (frame && frame.contentWindow && frame.contentWindow === win) return frame;
                                }
                            }(win);
                            if (!sameDomain) throw new Error("Can not set name for cross-domain window: " + name);
                            assertSameDomain(win).name = name;
                            frame && frame.setAttribute("name", name);
                            windowNamePromise = promise_ZalgoPromise.resolve(name);
                        }));
                    }
                };
            }
            var window_ProxyWindow = function() {
                function ProxyWindow(_ref2) {
                    var send = _ref2.send, win = _ref2.win, serializedWindow = _ref2.serializedWindow;
                    this.id = void 0;
                    this.isProxyWindow = !0;
                    this.serializedWindow = void 0;
                    this.actualWindow = void 0;
                    this.actualWindowPromise = void 0;
                    this.send = void 0;
                    this.name = void 0;
                    this.actualWindowPromise = new promise_ZalgoPromise;
                    this.serializedWindow = serializedWindow || getSerializedWindow(this.actualWindowPromise, {
                        send: send
                    });
                    globalStore("idToProxyWindow").set(this.getID(), this);
                    win && this.setWindow(win, {
                        send: send
                    });
                }
                var _proto = ProxyWindow.prototype;
                _proto.getID = function() {
                    return this.serializedWindow.id;
                };
                _proto.getType = function() {
                    return this.serializedWindow.getType();
                };
                _proto.isPopup = function() {
                    return this.getType().then((function(type) {
                        return "popup" === type;
                    }));
                };
                _proto.setLocation = function(href) {
                    var _this = this;
                    return this.serializedWindow.setLocation(href).then((function() {
                        return _this;
                    }));
                };
                _proto.getName = function() {
                    return this.serializedWindow.getName();
                };
                _proto.setName = function(name) {
                    var _this2 = this;
                    return this.serializedWindow.setName(name).then((function() {
                        return _this2;
                    }));
                };
                _proto.close = function() {
                    var _this3 = this;
                    return this.serializedWindow.close().then((function() {
                        return _this3;
                    }));
                };
                _proto.focus = function() {
                    var _this4 = this;
                    var isPopupPromise = this.isPopup();
                    var getNamePromise = this.getName();
                    var reopenPromise = promise_ZalgoPromise.hash({
                        isPopup: isPopupPromise,
                        name: getNamePromise
                    }).then((function(_ref3) {
                        var name = _ref3.name;
                        _ref3.isPopup && name && window.open("", name);
                    }));
                    var focusPromise = this.serializedWindow.focus();
                    return promise_ZalgoPromise.all([ reopenPromise, focusPromise ]).then((function() {
                        return _this4;
                    }));
                };
                _proto.isClosed = function() {
                    return this.serializedWindow.isClosed();
                };
                _proto.getWindow = function() {
                    return this.actualWindow;
                };
                _proto.setWindow = function(win, _ref4) {
                    var send = _ref4.send;
                    this.actualWindow = win;
                    this.actualWindowPromise.resolve(this.actualWindow);
                    this.serializedWindow = getSerializedWindow(this.actualWindowPromise, {
                        send: send,
                        id: this.getID()
                    });
                    windowStore("winToProxyWindow").set(win, this);
                };
                _proto.awaitWindow = function() {
                    return this.actualWindowPromise;
                };
                _proto.matchWindow = function(win, _ref5) {
                    var _this5 = this;
                    var send = _ref5.send;
                    return promise_ZalgoPromise.try((function() {
                        return _this5.actualWindow ? win === _this5.actualWindow : promise_ZalgoPromise.hash({
                            proxyInstanceID: _this5.getInstanceID(),
                            knownWindowInstanceID: getWindowInstanceID(win, {
                                send: send
                            })
                        }).then((function(_ref6) {
                            var match = _ref6.proxyInstanceID === _ref6.knownWindowInstanceID;
                            match && _this5.setWindow(win, {
                                send: send
                            });
                            return match;
                        }));
                    }));
                };
                _proto.unwrap = function() {
                    return this.actualWindow || this;
                };
                _proto.getInstanceID = function() {
                    return this.serializedWindow.getInstanceID();
                };
                _proto.shouldClean = function() {
                    return Boolean(this.actualWindow && isWindowClosed(this.actualWindow));
                };
                _proto.serialize = function() {
                    return this.serializedWindow;
                };
                ProxyWindow.unwrap = function(win) {
                    return ProxyWindow.isProxyWindow(win) ? win.unwrap() : win;
                };
                ProxyWindow.serialize = function(win, _ref7) {
                    var send = _ref7.send;
                    cleanupProxyWindows();
                    return ProxyWindow.toProxyWindow(win, {
                        send: send
                    }).serialize();
                };
                ProxyWindow.deserialize = function(serializedWindow, _ref8) {
                    var send = _ref8.send;
                    cleanupProxyWindows();
                    return globalStore("idToProxyWindow").get(serializedWindow.id) || new ProxyWindow({
                        serializedWindow: serializedWindow,
                        send: send
                    });
                };
                ProxyWindow.isProxyWindow = function(obj) {
                    return Boolean(obj && !isWindow(obj) && obj.isProxyWindow);
                };
                ProxyWindow.toProxyWindow = function(win, _ref9) {
                    var send = _ref9.send;
                    cleanupProxyWindows();
                    if (ProxyWindow.isProxyWindow(win)) return win;
                    var actualWindow = win;
                    return windowStore("winToProxyWindow").get(actualWindow) || new ProxyWindow({
                        win: actualWindow,
                        send: send
                    });
                };
                return ProxyWindow;
            }();
            function addMethod(id, val, name, source, domain) {
                var methodStore = windowStore("methodStore");
                var proxyWindowMethods = globalStore("proxyWindowMethods");
                if (window_ProxyWindow.isProxyWindow(source)) proxyWindowMethods.set(id, {
                    val: val,
                    name: name,
                    domain: domain,
                    source: source
                }); else {
                    proxyWindowMethods.del(id);
                    methodStore.getOrSet(source, (function() {
                        return {};
                    }))[id] = {
                        domain: domain,
                        name: name,
                        val: val,
                        source: source
                    };
                }
            }
            function lookupMethod(source, id) {
                var methodStore = windowStore("methodStore");
                var proxyWindowMethods = globalStore("proxyWindowMethods");
                return methodStore.getOrSet(source, (function() {
                    return {};
                }))[id] || proxyWindowMethods.get(id);
            }
            function function_serializeFunction(destination, domain, val, key, _ref3) {
                on = (_ref = {
                    on: _ref3.on,
                    send: _ref3.send
                }).on, send = _ref.send, globalStore("builtinListeners").getOrSet("functionCalls", (function() {
                    return on("postrobot_method", {
                        domain: "*"
                    }, (function(_ref2) {
                        var source = _ref2.source, origin = _ref2.origin, data = _ref2.data;
                        var id = data.id, name = data.name;
                        var meth = lookupMethod(source, id);
                        if (!meth) throw new Error("Could not find method '" + name + "' with id: " + data.id + " in " + getDomain(window));
                        var methodSource = meth.source, domain = meth.domain, val = meth.val;
                        return promise_ZalgoPromise.try((function() {
                            if (!matchDomain(domain, origin)) throw new Error("Method '" + data.name + "' domain " + JSON.stringify(util_isRegex(meth.domain) ? meth.domain.source : meth.domain) + " does not match origin " + origin + " in " + getDomain(window));
                            if (window_ProxyWindow.isProxyWindow(methodSource)) return methodSource.matchWindow(source, {
                                send: send
                            }).then((function(match) {
                                if (!match) throw new Error("Method call '" + data.name + "' failed - proxy window does not match source in " + getDomain(window));
                            }));
                        })).then((function() {
                            return val.apply({
                                source: source,
                                origin: origin
                            }, data.args);
                        }), (function(err) {
                            return promise_ZalgoPromise.try((function() {
                                if (val.onError) return val.onError(err);
                            })).then((function() {
                                err.stack && (err.stack = "Remote call to " + name + "(" + function(args) {
                                    void 0 === args && (args = []);
                                    return (item = args, [].slice.call(item)).map((function(arg) {
                                        return "string" == typeof arg ? "'" + arg + "'" : void 0 === arg ? "undefined" : null === arg ? "null" : "boolean" == typeof arg ? arg.toString() : Array.isArray(arg) ? "[ ... ]" : "object" == typeof arg ? "{ ... }" : "function" == typeof arg ? "() => { ... }" : "<" + typeof arg + ">";
                                    })).join(", ");
                                    var item;
                                }(data.args) + ") failed\n\n" + err.stack);
                                throw err;
                            }));
                        })).then((function(result) {
                            return {
                                result: result,
                                id: id,
                                name: name
                            };
                        }));
                    }));
                }));
                var _ref, on, send;
                var id = val.__id__ || uniqueID();
                destination = window_ProxyWindow.unwrap(destination);
                var name = val.__name__ || val.name || key;
                "string" == typeof name && "function" == typeof name.indexOf && 0 === name.indexOf("anonymous::") && (name = name.replace("anonymous::", key + "::"));
                if (window_ProxyWindow.isProxyWindow(destination)) {
                    addMethod(id, val, name, destination, domain);
                    destination.awaitWindow().then((function(win) {
                        addMethod(id, val, name, win, domain);
                    }));
                } else addMethod(id, val, name, destination, domain);
                return serializeType("cross_domain_function", {
                    id: id,
                    name: name
                });
            }
            function serializeMessage(destination, domain, obj, _ref) {
                var _serialize;
                var on = _ref.on, send = _ref.send;
                return function(obj, serializers) {
                    void 0 === serializers && (serializers = defaultSerializers);
                    var result = JSON.stringify(obj, (function(key) {
                        var val = this[key];
                        if (isSerializedType(this)) return val;
                        var type = determineType(val);
                        if (!type) return val;
                        var serializer = serializers[type] || SERIALIZER[type];
                        return serializer ? serializer(val, key) : val;
                    }));
                    return void 0 === result ? "undefined" : result;
                }(obj, ((_serialize = {}).promise = function(val, key) {
                    return function(destination, domain, val, key, _ref) {
                        return serializeType("cross_domain_zalgo_promise", {
                            then: function_serializeFunction(destination, domain, (function(resolve, reject) {
                                return val.then(resolve, reject);
                            }), key, {
                                on: _ref.on,
                                send: _ref.send
                            })
                        });
                    }(destination, domain, val, key, {
                        on: on,
                        send: send
                    });
                }, _serialize.function = function(val, key) {
                    return function_serializeFunction(destination, domain, val, key, {
                        on: on,
                        send: send
                    });
                }, _serialize.object = function(val) {
                    return isWindow(val) || window_ProxyWindow.isProxyWindow(val) ? serializeType("cross_domain_window", window_ProxyWindow.serialize(val, {
                        send: send
                    })) : val;
                }, _serialize));
            }
            function deserializeMessage(source, origin, message, _ref2) {
                var _deserialize;
                var send = _ref2.send;
                return function(str, deserializers) {
                    void 0 === deserializers && (deserializers = defaultDeserializers);
                    if ("undefined" !== str) return JSON.parse(str, (function(key, val) {
                        if (isSerializedType(this)) return val;
                        var type;
                        var value;
                        if (isSerializedType(val)) {
                            type = val.__type__;
                            value = val.__val__;
                        } else {
                            type = determineType(val);
                            value = val;
                        }
                        if (!type) return value;
                        var deserializer = deserializers[type] || DESERIALIZER[type];
                        return deserializer ? deserializer(value, key) : value;
                    }));
                }(message, ((_deserialize = {}).cross_domain_zalgo_promise = function(serializedPromise) {
                    return function(source, origin, _ref2) {
                        return new promise_ZalgoPromise(_ref2.then);
                    }(0, 0, serializedPromise);
                }, _deserialize.cross_domain_function = function(serializedFunction) {
                    return function(source, origin, _ref4, _ref5) {
                        var id = _ref4.id, name = _ref4.name;
                        var send = _ref5.send;
                        var getDeserializedFunction = function(opts) {
                            void 0 === opts && (opts = {});
                            function crossDomainFunctionWrapper() {
                                var _arguments = arguments;
                                return window_ProxyWindow.toProxyWindow(source, {
                                    send: send
                                }).awaitWindow().then((function(win) {
                                    var meth = lookupMethod(win, id);
                                    if (meth && meth.val !== crossDomainFunctionWrapper) return meth.val.apply({
                                        source: window,
                                        origin: getDomain()
                                    }, _arguments);
                                    var _args = [].slice.call(_arguments);
                                    return opts.fireAndForget ? send(win, "postrobot_method", {
                                        id: id,
                                        name: name,
                                        args: _args
                                    }, {
                                        domain: origin,
                                        fireAndForget: !0
                                    }) : send(win, "postrobot_method", {
                                        id: id,
                                        name: name,
                                        args: _args
                                    }, {
                                        domain: origin,
                                        fireAndForget: !1
                                    }).then((function(res) {
                                        return res.data.result;
                                    }));
                                })).catch((function(err) {
                                    throw err;
                                }));
                            }
                            crossDomainFunctionWrapper.__name__ = name;
                            crossDomainFunctionWrapper.__origin__ = origin;
                            crossDomainFunctionWrapper.__source__ = source;
                            crossDomainFunctionWrapper.__id__ = id;
                            crossDomainFunctionWrapper.origin = origin;
                            return crossDomainFunctionWrapper;
                        };
                        var crossDomainFunctionWrapper = getDeserializedFunction();
                        crossDomainFunctionWrapper.fireAndForget = getDeserializedFunction({
                            fireAndForget: !0
                        });
                        return crossDomainFunctionWrapper;
                    }(source, origin, serializedFunction, {
                        send: send
                    });
                }, _deserialize.cross_domain_window = function(serializedWindow) {
                    return window_ProxyWindow.deserialize(serializedWindow, {
                        send: send
                    });
                }, _deserialize));
            }
            var SEND_MESSAGE_STRATEGIES = {};
            SEND_MESSAGE_STRATEGIES.postrobot_post_message = function(win, serializedMessage, domain) {
                0 === domain.indexOf("file:") && (domain = "*");
                win.postMessage(serializedMessage, domain);
            };
            function send_sendMessage(win, domain, message, _ref2) {
                var on = _ref2.on, send = _ref2.send;
                return promise_ZalgoPromise.try((function() {
                    var domainBuffer = windowStore().getOrSet(win, (function() {
                        return {};
                    }));
                    domainBuffer.buffer = domainBuffer.buffer || [];
                    domainBuffer.buffer.push(message);
                    domainBuffer.flush = domainBuffer.flush || promise_ZalgoPromise.flush().then((function() {
                        if (isWindowClosed(win)) throw new Error("Window is closed");
                        var serializedMessage = serializeMessage(win, domain, ((_ref = {}).__post_robot_10_0_42__ = domainBuffer.buffer || [], 
                        _ref), {
                            on: on,
                            send: send
                        });
                        var _ref;
                        delete domainBuffer.buffer;
                        var strategies = Object.keys(SEND_MESSAGE_STRATEGIES);
                        var errors = [];
                        for (var _i2 = 0; _i2 < strategies.length; _i2++) {
                            var strategyName = strategies[_i2];
                            try {
                                SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                            } catch (err) {
                                errors.push(err);
                            }
                        }
                        if (errors.length === strategies.length) throw new Error("All post-robot messaging strategies failed:\n\n" + errors.map((function(err, i) {
                            return i + ". " + stringifyError(err);
                        })).join("\n\n"));
                    }));
                    return domainBuffer.flush.then((function() {
                        delete domainBuffer.flush;
                    }));
                })).then(src_util_noop);
            }
            function getResponseListener(hash) {
                return globalStore("responseListeners").get(hash);
            }
            function deleteResponseListener(hash) {
                globalStore("responseListeners").del(hash);
            }
            function isResponseListenerErrored(hash) {
                return globalStore("erroredResponseListeners").has(hash);
            }
            function getRequestListener(_ref) {
                var name = _ref.name, win = _ref.win, domain = _ref.domain;
                var requestListeners = windowStore("requestListeners");
                "*" === win && (win = null);
                "*" === domain && (domain = null);
                if (!name) throw new Error("Name required to get request listener");
                for (var _i4 = 0, _ref3 = [ win, getWildcard() ]; _i4 < _ref3.length; _i4++) {
                    var winQualifier = _ref3[_i4];
                    if (winQualifier) {
                        var nameListeners = requestListeners.get(winQualifier);
                        if (nameListeners) {
                            var domainListeners = nameListeners[name];
                            if (domainListeners) {
                                if (domain && "string" == typeof domain) {
                                    if (domainListeners[domain]) return domainListeners[domain];
                                    if (domainListeners.__domain_regex__) for (var _i6 = 0, _domainListeners$__DO2 = domainListeners.__domain_regex__; _i6 < _domainListeners$__DO2.length; _i6++) {
                                        var _domainListeners$__DO3 = _domainListeners$__DO2[_i6], listener = _domainListeners$__DO3.listener;
                                        if (matchDomain(_domainListeners$__DO3.regex, domain)) return listener;
                                    }
                                }
                                if (domainListeners["*"]) return domainListeners["*"];
                            }
                        }
                    }
                }
            }
            function handleRequest(source, origin, message, _ref) {
                var on = _ref.on, send = _ref.send;
                var options = getRequestListener({
                    name: message.name,
                    win: source,
                    domain: origin
                });
                var logName = "postrobot_method" === message.name && message.data && "string" == typeof message.data.name ? message.data.name + "()" : message.name;
                function sendResponse(ack, data, error) {
                    return promise_ZalgoPromise.flush().then((function() {
                        if (!message.fireAndForget && !isWindowClosed(source)) try {
                            return send_sendMessage(source, origin, {
                                id: uniqueID(),
                                origin: getDomain(window),
                                type: "postrobot_message_response",
                                hash: message.hash,
                                name: message.name,
                                ack: ack,
                                data: data,
                                error: error
                            }, {
                                on: on,
                                send: send
                            });
                        } catch (err) {
                            throw new Error("Send response message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                        }
                    }));
                }
                return promise_ZalgoPromise.all([ promise_ZalgoPromise.flush().then((function() {
                    if (!message.fireAndForget && !isWindowClosed(source)) try {
                        return send_sendMessage(source, origin, {
                            id: uniqueID(),
                            origin: getDomain(window),
                            type: "postrobot_message_ack",
                            hash: message.hash,
                            name: message.name
                        }, {
                            on: on,
                            send: send
                        });
                    } catch (err) {
                        throw new Error("Send ack message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                    }
                })), promise_ZalgoPromise.try((function() {
                    if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!matchDomain(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
                    return options.handler({
                        source: source,
                        origin: origin,
                        data: message.data
                    });
                })).then((function(data) {
                    return sendResponse("success", data);
                }), (function(error) {
                    return sendResponse("error", null, error);
                })) ]).then(src_util_noop).catch((function(err) {
                    if (options && options.handleError) return options.handleError(err);
                    throw err;
                }));
            }
            function handleAck(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    try {
                        if (!matchDomain(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
                        if (source !== options.win) throw new Error("Ack source does not match registered window");
                    } catch (err) {
                        options.promise.reject(err);
                    }
                    options.ack = !0;
                }
            }
            function handleResponse(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!matchDomain(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + (pattern = options.domain, 
                    Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString()));
                    var pattern;
                    if (source !== options.win) throw new Error("Response source does not match registered window");
                    deleteResponseListener(message.hash);
                    "error" === message.ack ? options.promise.reject(message.error) : "success" === message.ack && options.promise.resolve({
                        source: source,
                        origin: origin,
                        data: message.data
                    });
                }
            }
            function receive_receiveMessage(event, _ref2) {
                var on = _ref2.on, send = _ref2.send;
                var receivedMessages = globalStore("receivedMessages");
                try {
                    if (!window || window.closed || !event.source) return;
                } catch (err) {
                    return;
                }
                var source = event.source, origin = event.origin;
                var messages = function(message, source, origin, _ref) {
                    var on = _ref.on, send = _ref.send;
                    var parsedMessage;
                    try {
                        parsedMessage = deserializeMessage(source, origin, message, {
                            on: on,
                            send: send
                        });
                    } catch (err) {
                        return;
                    }
                    if (parsedMessage && "object" == typeof parsedMessage && null !== parsedMessage) {
                        var parseMessages = parsedMessage.__post_robot_10_0_42__;
                        if (Array.isArray(parseMessages)) return parseMessages;
                    }
                }(event.data, source, origin, {
                    on: on,
                    send: send
                });
                if (messages) {
                    markWindowKnown(source);
                    for (var _i2 = 0; _i2 < messages.length; _i2++) {
                        var message = messages[_i2];
                        if (receivedMessages.has(message.id)) return;
                        receivedMessages.set(message.id, !0);
                        if (isWindowClosed(source) && !message.fireAndForget) return;
                        0 === message.origin.indexOf("file:") && (origin = "file://");
                        try {
                            "postrobot_message_request" === message.type ? handleRequest(source, origin, message, {
                                on: on,
                                send: send
                            }) : "postrobot_message_response" === message.type ? handleResponse(source, origin, message) : "postrobot_message_ack" === message.type && handleAck(source, origin, message);
                        } catch (err) {
                            setTimeout((function() {
                                throw err;
                            }), 0);
                        }
                    }
                }
            }
            function on_on(name, options, handler) {
                if (!name) throw new Error("Expected name");
                if ("function" == typeof (options = options || {})) {
                    handler = options;
                    options = {};
                }
                if (!handler) throw new Error("Expected handler");
                (options = options || {}).name = name;
                options.handler = handler || options.handler;
                var win = options.window;
                var domain = options.domain;
                var requestListener = function addRequestListener(_ref4, listener) {
                    var name = _ref4.name, win = _ref4.win, domain = _ref4.domain;
                    var requestListeners = windowStore("requestListeners");
                    if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
                    if (Array.isArray(win)) {
                        var listenersCollection = [];
                        for (var _i8 = 0, _win2 = win; _i8 < _win2.length; _i8++) listenersCollection.push(addRequestListener({
                            name: name,
                            domain: domain,
                            win: _win2[_i8]
                        }, listener));
                        return {
                            cancel: function() {
                                for (var _i10 = 0; _i10 < listenersCollection.length; _i10++) listenersCollection[_i10].cancel();
                            }
                        };
                    }
                    if (Array.isArray(domain)) {
                        var _listenersCollection = [];
                        for (var _i12 = 0, _domain2 = domain; _i12 < _domain2.length; _i12++) _listenersCollection.push(addRequestListener({
                            name: name,
                            win: win,
                            domain: _domain2[_i12]
                        }, listener));
                        return {
                            cancel: function() {
                                for (var _i14 = 0; _i14 < _listenersCollection.length; _i14++) _listenersCollection[_i14].cancel();
                            }
                        };
                    }
                    var existingListener = getRequestListener({
                        name: name,
                        win: win,
                        domain: domain
                    });
                    win && "*" !== win || (win = getWildcard());
                    domain = domain || "*";
                    if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
                    var nameListeners = requestListeners.getOrSet(win, (function() {
                        return {};
                    }));
                    var domainListeners = util_getOrSet(nameListeners, name, (function() {
                        return {};
                    }));
                    var strDomain = domain.toString();
                    var regexListeners;
                    var regexListener;
                    util_isRegex(domain) ? (regexListeners = util_getOrSet(domainListeners, "__domain_regex__", (function() {
                        return [];
                    }))).push(regexListener = {
                        regex: domain,
                        listener: listener
                    }) : domainListeners[strDomain] = listener;
                    return {
                        cancel: function() {
                            delete domainListeners[strDomain];
                            if (regexListener) {
                                regexListeners.splice(regexListeners.indexOf(regexListener, 1));
                                regexListeners.length || delete domainListeners.__domain_regex__;
                            }
                            Object.keys(domainListeners).length || delete nameListeners[name];
                            win && !Object.keys(nameListeners).length && requestListeners.del(win);
                        }
                    };
                }({
                    name: name,
                    win: win,
                    domain: domain
                }, {
                    handler: options.handler,
                    handleError: options.errorHandler || function(err) {
                        throw err;
                    },
                    window: win,
                    domain: domain || "*",
                    name: name
                });
                return {
                    cancel: function() {
                        requestListener.cancel();
                    }
                };
            }
            function on_once(name, options, handler) {
                if ("function" == typeof (options = options || {})) {
                    handler = options;
                    options = {};
                }
                var promise = new promise_ZalgoPromise;
                var listener;
                options.errorHandler = function(err) {
                    listener.cancel();
                    promise.reject(err);
                };
                listener = on_on(name, options, (function(event) {
                    listener.cancel();
                    promise.resolve(event);
                    if (handler) return handler(event);
                }));
                promise.cancel = listener.cancel;
                return promise;
            }
            var send_send = function send(win, name, data, options) {
                var domainMatcher = (options = options || {}).domain || "*";
                var responseTimeout = options.timeout || -1;
                var childTimeout = options.timeout || 5e3;
                var fireAndForget = options.fireAndForget || !1;
                return promise_ZalgoPromise.try((function() {
                    !function(name, win, domain) {
                        if (!name) throw new Error("Expected name");
                        if (domain && "string" != typeof domain && !Array.isArray(domain) && !util_isRegex(domain)) throw new TypeError("Can not send " + name + ". Expected domain " + JSON.stringify(domain) + " to be a string, array, or regex");
                        if (isWindowClosed(win)) throw new Error("Can not send " + name + ". Target window is closed");
                    }(name, win, domainMatcher);
                    if (function(parent, child) {
                        var actualParent = getAncestor(child);
                        if (actualParent) return actualParent === parent;
                        if (child === parent) return !1;
                        if (function(win) {
                            void 0 === win && (win = window);
                            try {
                                if (win.top) return win.top;
                            } catch (err) {}
                            if (getParent(win) === win) return win;
                            try {
                                if (isAncestorParent(window, win) && window.top) return window.top;
                            } catch (err) {}
                            try {
                                if (isAncestorParent(win, window) && window.top) return window.top;
                            } catch (err) {}
                            for (var _i7 = 0, _getAllChildFrames4 = function getAllChildFrames(win) {
                                var result = [];
                                for (var _i3 = 0, _getFrames2 = getFrames(win); _i3 < _getFrames2.length; _i3++) {
                                    var frame = _getFrames2[_i3];
                                    result.push(frame);
                                    for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame); _i5 < _getAllChildFrames2.length; _i5++) result.push(_getAllChildFrames2[_i5]);
                                }
                                return result;
                            }(win); _i7 < _getAllChildFrames4.length; _i7++) {
                                var frame = _getAllChildFrames4[_i7];
                                try {
                                    if (frame.top) return frame.top;
                                } catch (err) {}
                                if (getParent(frame) === frame) return frame;
                            }
                        }(child) === child) return !1;
                        for (var _i15 = 0, _getFrames8 = getFrames(parent); _i15 < _getFrames8.length; _i15++) if (_getFrames8[_i15] === child) return !0;
                        return !1;
                    }(window, win)) return function(win, timeout, name) {
                        void 0 === timeout && (timeout = 5e3);
                        void 0 === name && (name = "Window");
                        var promise = function(win) {
                            return windowStore("helloPromises").getOrSet(win, (function() {
                                return new promise_ZalgoPromise;
                            }));
                        }(win);
                        -1 !== timeout && (promise = promise.timeout(timeout, new Error(name + " did not load after " + timeout + "ms")));
                        return promise;
                    }(win, childTimeout);
                })).then((function(_temp) {
                    return function(win, targetDomain, actualDomain, _ref) {
                        var send = _ref.send;
                        return promise_ZalgoPromise.try((function() {
                            return "string" == typeof targetDomain ? targetDomain : promise_ZalgoPromise.try((function() {
                                return actualDomain || sayHello(win, {
                                    send: send
                                }).then((function(_ref2) {
                                    return _ref2.domain;
                                }));
                            })).then((function(normalizedDomain) {
                                if (!matchDomain(targetDomain, targetDomain)) throw new Error("Domain " + stringify(targetDomain) + " does not match " + stringify(targetDomain));
                                return normalizedDomain;
                            }));
                        }));
                    }(win, domainMatcher, (void 0 === _temp ? {} : _temp).domain, {
                        send: send
                    });
                })).then((function(targetDomain) {
                    var domain = targetDomain;
                    var logName = "postrobot_method" === name && data && "string" == typeof data.name ? data.name + "()" : name;
                    var promise = new promise_ZalgoPromise;
                    var hash = name + "_" + uniqueID();
                    if (!fireAndForget) {
                        var responseListener = {
                            name: name,
                            win: win,
                            domain: domain,
                            promise: promise
                        };
                        !function(hash, listener) {
                            globalStore("responseListeners").set(hash, listener);
                        }(hash, responseListener);
                        var reqPromises = windowStore("requestPromises").getOrSet(win, (function() {
                            return [];
                        }));
                        reqPromises.push(promise);
                        promise.catch((function() {
                            !function(hash) {
                                globalStore("erroredResponseListeners").set(hash, !0);
                            }(hash);
                            deleteResponseListener(hash);
                        }));
                        var totalAckTimeout = function(win) {
                            return windowStore("knownWindows").get(win, !1);
                        }(win) ? 1e4 : 2e3;
                        var totalResTimeout = responseTimeout;
                        var ackTimeout = totalAckTimeout;
                        var resTimeout = totalResTimeout;
                        var interval = function(method, time) {
                            var timeout;
                            !function loop() {
                                timeout = setTimeout((function() {
                                    !function() {
                                        if (isWindowClosed(win)) return promise.reject(new Error("Window closed for " + name + " before " + (responseListener.ack ? "response" : "ack")));
                                        if (responseListener.cancelled) return promise.reject(new Error("Response listener was cancelled for " + name));
                                        ackTimeout = Math.max(ackTimeout - 500, 0);
                                        -1 !== resTimeout && (resTimeout = Math.max(resTimeout - 500, 0));
                                        responseListener.ack || 0 !== ackTimeout ? 0 === resTimeout && promise.reject(new Error("No response for postMessage " + logName + " in " + getDomain() + " in " + totalResTimeout + "ms")) : promise.reject(new Error("No ack for postMessage " + logName + " in " + getDomain() + " in " + totalAckTimeout + "ms"));
                                    }();
                                    loop();
                                }), 500);
                            }();
                            return {
                                cancel: function() {
                                    clearTimeout(timeout);
                                }
                            };
                        }();
                        promise.finally((function() {
                            interval.cancel();
                            reqPromises.splice(reqPromises.indexOf(promise, 1));
                        })).catch(src_util_noop);
                    }
                    return send_sendMessage(win, domain, {
                        id: uniqueID(),
                        origin: getDomain(window),
                        type: "postrobot_message_request",
                        hash: hash,
                        name: name,
                        data: data,
                        fireAndForget: fireAndForget
                    }, {
                        on: on_on,
                        send: send
                    }).then((function() {
                        return fireAndForget ? promise.resolve() : promise;
                    }), (function(err) {
                        throw new Error("Send request message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                    }));
                }));
            };
            function setup_serializeMessage(destination, domain, obj) {
                return serializeMessage(destination, domain, obj, {
                    on: on_on,
                    send: send_send
                });
            }
            function setup_deserializeMessage(source, origin, message) {
                return deserializeMessage(source, origin, message, {
                    on: on_on,
                    send: send_send
                });
            }
            function createProxyWindow(win) {
                return new window_ProxyWindow({
                    send: send_send,
                    win: win
                });
            }
            function setup_toProxyWindow(win) {
                return window_ProxyWindow.toProxyWindow(win, {
                    send: send_send
                });
            }
            function setup() {
                if (!global_getGlobal().initialized) {
                    global_getGlobal().initialized = !0;
                    on = (_ref3 = {
                        on: on_on,
                        send: send_send
                    }).on, send = _ref3.send, (global = global_getGlobal()).receiveMessage = global.receiveMessage || function(message) {
                        return receive_receiveMessage(message, {
                            on: on,
                            send: send
                        });
                    };
                    !function(_ref5) {
                        var on = _ref5.on, send = _ref5.send;
                        globalStore().getOrSet("postMessageListener", (function() {
                            return function(obj, event, handler) {
                                obj.addEventListener("message", handler);
                                return {
                                    cancel: function() {
                                        obj.removeEventListener("message", handler);
                                    }
                                };
                            }(window, 0, (function(event) {
                                !function(event, _ref4) {
                                    var on = _ref4.on, send = _ref4.send;
                                    promise_ZalgoPromise.try((function() {
                                        var source = event.source || event.sourceElement;
                                        var origin = event.origin || event.originalEvent && event.originalEvent.origin;
                                        var data = event.data;
                                        "null" === origin && (origin = "file://");
                                        if (source) {
                                            if (!origin) throw new Error("Post message did not have origin domain");
                                            receive_receiveMessage({
                                                source: source,
                                                origin: origin,
                                                data: data
                                            }, {
                                                on: on,
                                                send: send
                                            });
                                        }
                                    }));
                                }(event, {
                                    on: on,
                                    send: send
                                });
                            }));
                        }));
                    }({
                        on: on_on,
                        send: send_send
                    });
                    !function(_ref8) {
                        var on = _ref8.on, send = _ref8.send;
                        globalStore("builtinListeners").getOrSet("helloListener", (function() {
                            var listener = on("postrobot_hello", {
                                domain: "*"
                            }, (function(_ref3) {
                                resolveHelloPromise(_ref3.source, {
                                    domain: _ref3.origin
                                });
                                return {
                                    instanceID: getInstanceID()
                                };
                            }));
                            var parent = getAncestor();
                            parent && sayHello(parent, {
                                send: send
                            }).catch((function(err) {}));
                            return listener;
                        }));
                    }({
                        on: on_on,
                        send: send_send
                    });
                }
                var _ref3, on, send, global;
            }
            function destroy() {
                !function() {
                    var responseListeners = globalStore("responseListeners");
                    for (var _i2 = 0, _responseListeners$ke2 = responseListeners.keys(); _i2 < _responseListeners$ke2.length; _i2++) {
                        var hash = _responseListeners$ke2[_i2];
                        var listener = responseListeners.get(hash);
                        listener && (listener.cancelled = !0);
                        responseListeners.del(hash);
                    }
                }();
                (listener = globalStore().get("postMessageListener")) && listener.cancel();
                var listener;
                delete window.__post_robot_10_0_42__;
            }
            var src_types_TYPES_0 = !0;
            function cleanUpWindow(win) {
                for (var _i2 = 0, _requestPromises$get2 = windowStore("requestPromises").get(win, []); _i2 < _requestPromises$get2.length; _i2++) _requestPromises$get2[_i2].reject(new Error("Window " + (isWindowClosed(win) ? "closed" : "cleaned up") + " before response")).catch(src_util_noop);
            }
            setup();
        } ]);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "setupNativePopup", (function() {
            return setupNativePopup;
        }));
        __webpack_require__.d(__webpack_exports__, "NativePopup", (function() {
            return NativePopup;
        }));
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var iPhoneScreenHeightMatrix = {
            926: {
                device: "iPhone 12 Pro Max",
                textSizeHeights: [ 752, 748, 744, 738 ],
                zoomHeight: {
                    1.15: [ 752, 747, 744, 738 ],
                    1.25: [ 753, 748, 744, 738 ],
                    1.5: [ 752, 749, 744, 738 ],
                    1.75: [ 753, 747, 744, 739 ],
                    2: [ 752, 748, 744 ],
                    2.5: [ 753, 748 ],
                    3: [ 753, 744 ]
                },
                maybeSafari: {
                    2: [ 738 ],
                    2.5: [ 745, 738 ],
                    3: [ 747, 738 ]
                }
            },
            896: {
                device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
                textSizeHeights: [ 721, 717, 713, 707 ],
                zoomHeight: {
                    1.15: [ 721, 716, 713, 707 ],
                    1.25: [ 721, 718, 713, 708 ],
                    1.5: [ 722, 717, 713 ],
                    1.75: [ 721, 718, 712, 707 ],
                    2: [ 722, 718, 714, 708 ],
                    2.5: [ 720, 718, 713, 708 ],
                    3: [ 720, 717, 708 ]
                },
                maybeSafari: {
                    1.5: [ 707 ],
                    3: [ 714 ]
                }
            },
            844: {
                device: "iPhone 12, iPhone 12 Pro",
                textSizeHeights: [ 670, 666, 662, 656 ],
                zoomHeight: {
                    1.15: [ 670, 666, 662 ],
                    1.25: [ 670, 666, 663, 656 ],
                    1.5: [ 671, 666, 662 ],
                    1.75: [ 670, 667, 662, 656 ],
                    2: [ 670, 666, 662 ],
                    2.5: [ 670, 663 ],
                    3: [ 669, 666, 663, 657 ]
                },
                maybeSafari: {
                    1.15: [ 656 ],
                    1.5: [ 656 ],
                    2: [ 656 ],
                    2.5: [ 665, 655 ],
                    3: [ 663 ]
                }
            },
            812: {
                device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
                textSizeHeights: [ 641, 637, 633, 627 ],
                zoomHeight: {
                    1.15: [ 641, 637, 633, 627 ],
                    1.25: [ 641, 638, 633, 628 ],
                    1.5: [ 641, 638, 633, 627 ],
                    1.75: [ 641, 637, 634 ],
                    2: [ 642, 638, 634, 628 ],
                    2.5: [ 640, 638, 633, 628 ],
                    3: [ 642, 633 ]
                },
                maybeSafari: {
                    1.75: [ 627 ],
                    3: [ 636, 627 ]
                }
            },
            736: {
                device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
                textSizeHeights: [ 628, 624, 620, 614 ],
                zoomHeight: {
                    1.15: [ 628, 624, 620, 614 ],
                    1.25: [ 628, 624, 620, 614 ],
                    1.5: [ 629, 624, 620 ],
                    1.75: [ 628, 625, 620, 614 ],
                    2: [ 628, 624, 620 ],
                    2.5: [ 628, 625, 620, 615 ],
                    3: [ 627, 624, 615 ]
                },
                maybeSafari: {
                    1.5: [ 614 ],
                    2: [ 614 ],
                    3: [ 621 ]
                }
            },
            667: {
                device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
                textSizeHeights: [ 559, 555, 551, 545 ],
                zoomHeight: {
                    1.15: [ 559, 555, 551, 545 ],
                    1.25: [ 559, 555, 551, 545 ],
                    1.5: [ 560, 555, 551 ],
                    1.75: [ 558, 555, 551 ],
                    2: [ 560, 556, 552, 546 ],
                    2.5: [ 560, 555, 550 ],
                    3: [ 558, 555, 546 ]
                },
                maybeSafari: {
                    1.5: [ 545 ],
                    1.75: [ 544 ],
                    2.5: [ 545 ],
                    3: [ 552 ]
                }
            }
        };
        function getUserAgent() {
            return window.navigator.mockUserAgent || window.navigator.userAgent;
        }
        function isAndroid(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Android/.test(ua);
        }
        function isIos(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /iPhone|iPod|iPad/.test(ua);
        }
        function isSFVC(ua) {
            void 0 === ua && (ua = getUserAgent());
            if (isIos(ua)) {
                var device = iPhoneScreenHeightMatrix[window.outerHeight];
                if (!device) return !1;
                var height = window.innerHeight;
                var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                var computedHeight = Math.round(height * scale);
                return scale > 1 && device.zoomHeight[scale] ? -1 !== device.zoomHeight[scale].indexOf(computedHeight) : -1 !== device.textSizeHeights.indexOf(computedHeight);
            }
            return !1;
        }
        function isChrome(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Chrome|Chromium|CriOS/.test(ua);
        }
        function utils_isPromise(item) {
            try {
                if (!item) return !1;
                if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                var _toString = {}.toString;
                if (_toString) {
                    var name = _toString.call(item);
                    if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                }
                if ("function" == typeof item.then) return !0;
            } catch (err) {
                return !1;
            }
            return !1;
        }
        var dispatchedErrors = [];
        var possiblyUnhandledPromiseHandlers = [];
        var activeCount = 0;
        var flushPromise;
        function flushActive() {
            if (!activeCount && flushPromise) {
                var promise = flushPromise;
                flushPromise = null;
                promise.resolve();
            }
        }
        function startActive() {
            activeCount += 1;
        }
        function endActive() {
            activeCount -= 1;
            flushActive();
        }
        var promise_ZalgoPromise = function() {
            function ZalgoPromise(handler) {
                var _this = this;
                this.resolved = void 0;
                this.rejected = void 0;
                this.errorHandled = void 0;
                this.value = void 0;
                this.error = void 0;
                this.handlers = void 0;
                this.dispatching = void 0;
                this.stack = void 0;
                this.resolved = !1;
                this.rejected = !1;
                this.errorHandled = !1;
                this.handlers = [];
                if (handler) {
                    var _result;
                    var _error;
                    var resolved = !1;
                    var rejected = !1;
                    var isAsync = !1;
                    startActive();
                    try {
                        handler((function(res) {
                            if (isAsync) _this.resolve(res); else {
                                resolved = !0;
                                _result = res;
                            }
                        }), (function(err) {
                            if (isAsync) _this.reject(err); else {
                                rejected = !0;
                                _error = err;
                            }
                        }));
                    } catch (err) {
                        endActive();
                        this.reject(err);
                        return;
                    }
                    endActive();
                    isAsync = !0;
                    resolved ? this.resolve(_result) : rejected && this.reject(_error);
                }
            }
            var _proto = ZalgoPromise.prototype;
            _proto.resolve = function(result) {
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                this.resolved = !0;
                this.value = result;
                this.dispatch();
                return this;
            };
            _proto.reject = function(error) {
                var _this2 = this;
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                if (!error) {
                    var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                    error = new Error("Expected reject to be called with Error, got " + _err);
                }
                this.rejected = !0;
                this.error = error;
                this.errorHandled || setTimeout((function() {
                    _this2.errorHandled || function(err, promise) {
                        if (-1 === dispatchedErrors.indexOf(err)) {
                            dispatchedErrors.push(err);
                            setTimeout((function() {
                                throw err;
                            }), 1);
                            for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                        }
                    }(error, _this2);
                }), 1);
                this.dispatch();
                return this;
            };
            _proto.asyncReject = function(error) {
                this.errorHandled = !0;
                this.reject(error);
                return this;
            };
            _proto.dispatch = function() {
                var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                if (!this.dispatching && (resolved || rejected)) {
                    this.dispatching = !0;
                    startActive();
                    var chain = function(firstPromise, secondPromise) {
                        return firstPromise.then((function(res) {
                            secondPromise.resolve(res);
                        }), (function(err) {
                            secondPromise.reject(err);
                        }));
                    };
                    for (var i = 0; i < handlers.length; i++) {
                        var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                        var _result2 = void 0;
                        if (resolved) try {
                            _result2 = onSuccess ? onSuccess(this.value) : this.value;
                        } catch (err) {
                            promise.reject(err);
                            continue;
                        } else if (rejected) {
                            if (!onError) {
                                promise.reject(this.error);
                                continue;
                            }
                            try {
                                _result2 = onError(this.error);
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            }
                        }
                        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                            _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error);
                            _result2.errorHandled = !0;
                        } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                    }
                    handlers.length = 0;
                    this.dispatching = !1;
                    endActive();
                }
            };
            _proto.then = function(onSuccess, onError) {
                if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                var promise = new ZalgoPromise;
                this.handlers.push({
                    promise: promise,
                    onSuccess: onSuccess,
                    onError: onError
                });
                this.errorHandled = !0;
                this.dispatch();
                return promise;
            };
            _proto.catch = function(onError) {
                return this.then(void 0, onError);
            };
            _proto.finally = function(onFinally) {
                if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                return this.then((function(result) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        return result;
                    }));
                }), (function(err) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        throw err;
                    }));
                }));
            };
            _proto.timeout = function(time, err) {
                var _this3 = this;
                if (this.resolved || this.rejected) return this;
                var timeout = setTimeout((function() {
                    _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                }), time);
                return this.then((function(result) {
                    clearTimeout(timeout);
                    return result;
                }));
            };
            _proto.toPromise = function() {
                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                return Promise.resolve(this);
            };
            ZalgoPromise.resolve = function(value) {
                return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                    return value.then(resolve, reject);
                })) : (new ZalgoPromise).resolve(value);
            };
            ZalgoPromise.reject = function(error) {
                return (new ZalgoPromise).reject(error);
            };
            ZalgoPromise.asyncReject = function(error) {
                return (new ZalgoPromise).asyncReject(error);
            };
            ZalgoPromise.all = function(promises) {
                var promise = new ZalgoPromise;
                var count = promises.length;
                var results = [];
                if (!count) {
                    promise.resolve(results);
                    return promise;
                }
                var chain = function(i, firstPromise, secondPromise) {
                    return firstPromise.then((function(res) {
                        results[i] = res;
                        0 == (count -= 1) && promise.resolve(results);
                    }), (function(err) {
                        secondPromise.reject(err);
                    }));
                };
                for (var i = 0; i < promises.length; i++) {
                    var prom = promises[i];
                    if (prom instanceof ZalgoPromise) {
                        if (prom.resolved) {
                            results[i] = prom.value;
                            count -= 1;
                            continue;
                        }
                    } else if (!utils_isPromise(prom)) {
                        results[i] = prom;
                        count -= 1;
                        continue;
                    }
                    chain(i, ZalgoPromise.resolve(prom), promise);
                }
                0 === count && promise.resolve(results);
                return promise;
            };
            ZalgoPromise.hash = function(promises) {
                var result = {};
                var awaitPromises = [];
                var _loop = function(key) {
                    if (promises.hasOwnProperty(key)) {
                        var value = promises[key];
                        utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                            result[key] = res;
                        }))) : result[key] = value;
                    }
                };
                for (var key in promises) _loop(key);
                return ZalgoPromise.all(awaitPromises).then((function() {
                    return result;
                }));
            };
            ZalgoPromise.map = function(items, method) {
                return ZalgoPromise.all(items.map(method));
            };
            ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                return function(handler) {
                    possiblyUnhandledPromiseHandlers.push(handler);
                    return {
                        cancel: function() {
                            possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                        }
                    };
                }(handler);
            };
            ZalgoPromise.try = function(method, context, args) {
                if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                var result;
                startActive();
                try {
                    result = method.apply(context, args || []);
                } catch (err) {
                    endActive();
                    return ZalgoPromise.reject(err);
                }
                endActive();
                return ZalgoPromise.resolve(result);
            };
            ZalgoPromise.delay = function(_delay) {
                return new ZalgoPromise((function(resolve) {
                    setTimeout(resolve, _delay);
                }));
            };
            ZalgoPromise.isPromise = function(value) {
                return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
            };
            ZalgoPromise.flush = function() {
                return function(Zalgo) {
                    var promise = flushPromise = flushPromise || new Zalgo;
                    flushActive();
                    return promise;
                }(ZalgoPromise);
            };
            return ZalgoPromise;
        }();
        var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
        function isAboutProtocol(win) {
            void 0 === win && (win = window);
            return "about:" === win.location.protocol;
        }
        function canReadFromWindow(win) {
            try {
                return !0;
            } catch (err) {}
            return !1;
        }
        function getActualDomain(win) {
            void 0 === win && (win = window);
            var location = win.location;
            if (!location) throw new Error("Can not read window location");
            var protocol = location.protocol;
            if (!protocol) throw new Error("Can not read window protocol");
            if ("file:" === protocol) return "file://";
            if ("about:" === protocol) {
                var parent = function(win) {
                    void 0 === win && (win = window);
                    if (win) try {
                        if (win.parent && win.parent !== win) return win.parent;
                    } catch (err) {}
                }(win);
                return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
            }
            var host = location.host;
            if (!host) throw new Error("Can not read window host");
            return protocol + "//" + host;
        }
        function getDomain(win) {
            void 0 === win && (win = window);
            var domain = getActualDomain(win);
            return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
        }
        var iframeWindows = [];
        var iframeFrames = [];
        function isWindowClosed(win, allowMock) {
            void 0 === allowMock && (allowMock = !0);
            try {
                if (win === window) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if (!win) return !0;
            } catch (err) {
                return !0;
            }
            try {
                if (win.closed) return !0;
            } catch (err) {
                return !err || err.message !== IE_WIN_ACCESS_ERROR;
            }
            if (allowMock && function(win) {
                if (!function(win) {
                    try {
                        if (win === window) return !0;
                    } catch (err) {}
                    try {
                        var desc = Object.getOwnPropertyDescriptor(win, "location");
                        if (desc && !1 === desc.enumerable) return !1;
                    } catch (err) {}
                    try {
                        if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    } catch (err) {}
                    try {
                        if (getActualDomain(win) === getActualDomain(window)) return !0;
                    } catch (err) {}
                    return !1;
                }(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }(win)) try {
                if (win.mockclosed) return !0;
            } catch (err) {}
            try {
                if (!win.parent || !win.top) return !0;
            } catch (err) {}
            var iframeIndex = function(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }(iframeWindows, win);
            if (-1 !== iframeIndex) {
                var frame = iframeFrames[iframeIndex];
                if (frame && function(frame) {
                    if (!frame.contentWindow) return !0;
                    if (!frame.parentNode) return !0;
                    var doc = frame.ownerDocument;
                    if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                        var parent = frame;
                        for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                        if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                    }
                    return !1;
                }(frame)) return !0;
            }
            return !1;
        }
        function isWindow(obj) {
            try {
                if (obj === window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if ("[object Window]" === {}.toString.call(obj)) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (window.Window && obj instanceof window.Window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.self === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.parent === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.top === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
            } catch (err) {}
            return !1;
        }
        function util_safeIndexOf(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }
        var weakmap_CrossDomainSafeWeakMap = function() {
            function CrossDomainSafeWeakMap() {
                this.name = void 0;
                this.weakmap = void 0;
                this.keys = void 0;
                this.values = void 0;
                this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                if (function() {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                        var testWeakMap = new WeakMap;
                        var testKey = {};
                        Object.freeze(testKey);
                        testWeakMap.set(testKey, "__testvalue__");
                        return "__testvalue__" === testWeakMap.get(testKey);
                    } catch (err) {
                        return !1;
                    }
                }()) try {
                    this.weakmap = new WeakMap;
                } catch (err) {}
                this.keys = [];
                this.values = [];
            }
            var _proto = CrossDomainSafeWeakMap.prototype;
            _proto._cleanupClosedWindows = function() {
                var weakmap = this.weakmap;
                var keys = this.keys;
                for (var i = 0; i < keys.length; i++) {
                    var value = keys[i];
                    if (isWindow(value) && isWindowClosed(value)) {
                        if (weakmap) try {
                            weakmap.delete(value);
                        } catch (err) {}
                        keys.splice(i, 1);
                        this.values.splice(i, 1);
                        i -= 1;
                    }
                }
            };
            _proto.isSafeToReadWrite = function(key) {
                return !isWindow(key);
            };
            _proto.set = function(key, value) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.set(key, value);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var name = this.name;
                    var entry = key[name];
                    entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                        value: [ key, value ],
                        writable: !0
                    });
                    return;
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var values = this.values;
                var index = util_safeIndexOf(keys, key);
                if (-1 === index) {
                    keys.push(key);
                    values.push(value);
                } else values[index] = value;
            };
            _proto.get = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return weakmap.get(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return entry && entry[0] === key ? entry[1] : void 0;
                } catch (err) {}
                this._cleanupClosedWindows();
                var index = util_safeIndexOf(this.keys, key);
                if (-1 !== index) return this.values[index];
            };
            _proto.delete = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.delete(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var index = util_safeIndexOf(keys, key);
                if (-1 !== index) {
                    keys.splice(index, 1);
                    this.values.splice(index, 1);
                }
            };
            _proto.has = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return !0;
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return !(!entry || entry[0] !== key);
                } catch (err) {}
                this._cleanupClosedWindows();
                return -1 !== util_safeIndexOf(this.keys, key);
            };
            _proto.getOrSet = function(key, getter) {
                if (this.has(key)) return this.get(key);
                var value = getter();
                this.set(key, value);
                return value;
            };
            return CrossDomainSafeWeakMap;
        }();
        function getFunctionName(fn) {
            return fn.name || fn.__name__ || fn.displayName || "anonymous";
        }
        function setFunctionName(fn, name) {
            try {
                delete fn.name;
                fn.name = name;
            } catch (err) {}
            fn.__name__ = fn.displayName = name;
            return fn;
        }
        function base64encode(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
            throw new Error("Can not find window.btoa or Buffer");
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        function getGlobal() {
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("No global found");
        }
        var objectIDs;
        function serializeArgs(args) {
            try {
                return JSON.stringify([].slice.call(args), (function(subkey, val) {
                    return "function" == typeof val ? "memoize[" + function(obj) {
                        objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                        if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                        var uid = objectIDs.get(obj);
                        if (!uid) {
                            uid = typeof obj + ":" + uniqueID();
                            objectIDs.set(obj, uid);
                        }
                        return uid;
                    }(val) + "]" : val;
                }));
            } catch (err) {
                throw new Error("Arguments not serializable -- can not be used to memoize");
            }
        }
        function getEmptyObject() {
            return {};
        }
        var memoizeGlobalIndex = 0;
        var memoizeGlobalIndexValidFrom = 0;
        function memoize(method, options) {
            void 0 === options && (options = {});
            var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
            var simpleCache;
            var thisCache;
            var memoizeIndex = memoizeGlobalIndex;
            memoizeGlobalIndex += 1;
            var memoizedFunction = function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                    simpleCache = null;
                    thisCache = null;
                    memoizeIndex = memoizeGlobalIndex;
                    memoizeGlobalIndex += 1;
                }
                var cache;
                cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                var cacheKey = serializeArgs(args);
                var cacheResult = cache[cacheKey];
                if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                    delete cache[cacheKey];
                    cacheResult = null;
                }
                if (cacheResult) return cacheResult.value;
                var time = Date.now();
                var value = method.apply(this, arguments);
                cache[cacheKey] = {
                    time: time,
                    value: value
                };
                return value;
            };
            memoizedFunction.reset = function() {
                simpleCache = null;
                thisCache = null;
            };
            return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
        }
        memoize.clear = function() {
            memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
        };
        function inlineMemoize(method, logic, args) {
            void 0 === args && (args = []);
            var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
            var key = serializeArgs(args);
            return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
        }
        function src_util_noop() {}
        function stringifyError(err, level) {
            void 0 === level && (level = 1);
            if (level >= 3) return "stringifyError stack overflow";
            try {
                if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                if ("string" == typeof err) return err;
                if (err instanceof Error) {
                    var stack = err && err.stack;
                    var message = err && err.message;
                    if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                    if (stack) return stack;
                    if (message) return message;
                }
                return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
            } catch (newErr) {
                return "Error while stringifying error: " + stringifyError(newErr, level + 1);
            }
        }
        function stringifyErrorMessage(err) {
            var defaultMessage = "<unknown error: " + {}.toString.call(err) + ">";
            return err ? err instanceof Error ? err.message || defaultMessage : "string" == typeof err.message && err.message || defaultMessage : defaultMessage;
        }
        memoize((function(obj) {
            if (Object.values) return Object.values(obj);
            var result = [];
            for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
            return result;
        }));
        function objFilter(obj, filter) {
            void 0 === filter && (filter = Boolean);
            var result = {};
            for (var key in obj) obj.hasOwnProperty(key) && filter(obj[key], key) && (result[key] = obj[key]);
            return result;
        }
        Error;
        function isDocumentReady() {
            return Boolean(document.body) && "complete" === document.readyState;
        }
        function isDocumentInteractive() {
            return Boolean(document.body) && "interactive" === document.readyState;
        }
        var waitForDocumentReady = memoize((function() {
            return new promise_ZalgoPromise((function(resolve) {
                if (isDocumentReady() || isDocumentInteractive()) return resolve();
                var interval = setInterval((function() {
                    if (isDocumentReady() || isDocumentInteractive()) {
                        clearInterval(interval);
                        return resolve();
                    }
                }), 10);
            }));
        }));
        function parseQuery(queryString) {
            return inlineMemoize(parseQuery, (function() {
                var params = {};
                if (!queryString) return params;
                if (-1 === queryString.indexOf("=")) return params;
                for (var _i2 = 0, _queryString$split2 = queryString.split("&"); _i2 < _queryString$split2.length; _i2++) {
                    var pair = _queryString$split2[_i2];
                    (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                }
                return params;
            }), [ queryString ]);
        }
        function getPerformance() {
            return inlineMemoize(getPerformance, (function() {
                var performance = window.performance;
                if (performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0) return performance;
            }));
        }
        function dom_isBrowser() {
            return "undefined" != typeof window && void 0 !== window.location;
        }
        function isLocalStorageEnabled() {
            return inlineMemoize(isLocalStorageEnabled, (function() {
                try {
                    if ("undefined" == typeof window) return !1;
                    if (window.localStorage) {
                        var value = Math.random().toString();
                        window.localStorage.setItem("__test__localStorage__", value);
                        var result = window.localStorage.getItem("__test__localStorage__");
                        window.localStorage.removeItem("__test__localStorage__");
                        if (value === result) return !0;
                    }
                } catch (err) {}
                return !1;
            }));
        }
        var currentScript = "undefined" != typeof document ? document.currentScript : null;
        var getCurrentScript = memoize((function() {
            if (currentScript) return currentScript;
            if (currentScript = function() {
                try {
                    var stack = function() {
                        try {
                            throw new Error("_");
                        } catch (err) {
                            return err.stack || "";
                        }
                    }();
                    var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                    var scriptLocation = stackDetails && stackDetails[1];
                    if (!scriptLocation) return;
                    for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
                        var script = _Array$prototype$slic2[_i22];
                        if (script.src && script.src === scriptLocation) return script;
                    }
                } catch (err) {}
            }()) return currentScript;
            throw new Error("Can not determine current script");
        }));
        var currentUID = uniqueID();
        memoize((function() {
            var script;
            try {
                script = getCurrentScript();
            } catch (err) {
                return currentUID;
            }
            var uid = script.getAttribute("data-uid");
            if (uid && "string" == typeof uid) return uid;
            if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
            if (script.src) {
                var hashedString = function(str) {
                    var hash = "";
                    for (var i = 0; i < str.length; i++) {
                        var total = str[i].charCodeAt(0) * i;
                        str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                        hash += String.fromCharCode(97 + Math.abs(total) % 26);
                    }
                    return hash;
                }(JSON.stringify({
                    src: script.src,
                    dataset: script.dataset
                }));
                uid = "uid_" + hashedString.slice(hashedString.length - 30);
            } else uid = uniqueID();
            script.setAttribute("data-uid-auto", uid);
            return uid;
        }));
        function getStorage(_ref) {
            var name = _ref.name, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? 12e5 : _ref$lifetime;
            return inlineMemoize(getStorage, (function() {
                var STORAGE_KEY = "__" + name + "_storage__";
                var newStateID = uniqueID();
                var accessedStorage;
                function getState(handler) {
                    var localStorageEnabled = isLocalStorageEnabled();
                    var storage;
                    accessedStorage && (storage = accessedStorage);
                    if (!storage && localStorageEnabled) {
                        var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                        rawStorage && (storage = JSON.parse(rawStorage));
                    }
                    storage || (storage = getGlobal()[STORAGE_KEY]);
                    storage || (storage = {
                        id: newStateID
                    });
                    storage.id || (storage.id = newStateID);
                    accessedStorage = storage;
                    var result = handler(storage);
                    localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : getGlobal()[STORAGE_KEY] = storage;
                    accessedStorage = null;
                    return result;
                }
                function getID() {
                    return getState((function(storage) {
                        return storage.id;
                    }));
                }
                function getSession(handler) {
                    return getState((function(storage) {
                        var session = storage.__session__;
                        var now = Date.now();
                        session && now - session.created > lifetime && (session = null);
                        session || (session = {
                            guid: uniqueID(),
                            created: now
                        });
                        storage.__session__ = session;
                        return handler(session);
                    }));
                }
                return {
                    getState: getState,
                    getID: getID,
                    isStateFresh: function() {
                        return getID() === newStateID;
                    },
                    getSessionState: function(handler) {
                        return getSession((function(session) {
                            session.state = session.state || {};
                            return handler(session.state);
                        }));
                    },
                    getSessionID: function() {
                        return getSession((function(session) {
                            return session.guid;
                        }));
                    }
                };
            }), [ {
                name: name,
                lifetime: lifetime
            } ]);
        }
        var http_headerBuilders = [];
        var AUTO_FLUSH_LEVEL = [ "warn", "error" ];
        var LOG_LEVEL_PRIORITY = [ "error", "warn", "info", "debug" ];
        function httpTransport(_ref) {
            var url = _ref.url, method = _ref.method, headers = _ref.headers, json = _ref.json, _ref$enableSendBeacon = _ref.enableSendBeacon, enableSendBeacon = void 0 !== _ref$enableSendBeacon && _ref$enableSendBeacon;
            return promise_ZalgoPromise.try((function() {
                var hasHeaders = headers && Object.keys(headers).length;
                if (window && window.navigator.sendBeacon && !hasHeaders && enableSendBeacon && window.Blob) try {
                    var blob = new Blob([ JSON.stringify(json) ], {
                        type: "application/json"
                    });
                    return window.navigator.sendBeacon(url, blob);
                } catch (e) {}
                return function(_ref) {
                    var url = _ref.url, _ref$method = _ref.method, method = void 0 === _ref$method ? "get" : _ref$method, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {} : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = void 0 === _ref$win ? window : _ref$win, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 0 : _ref$timeout;
                    return new promise_ZalgoPromise((function(resolve, reject) {
                        if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
                        var normalizedHeaders = {};
                        for (var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++) {
                            var _key2 = _Object$keys2[_i4];
                            normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
                        }
                        json ? normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/json" : (data || body) && (normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/x-www-form-urlencoded; charset=utf-8");
                        normalizedHeaders.accept = normalizedHeaders.accept || "application/json";
                        for (var _i6 = 0; _i6 < http_headerBuilders.length; _i6++) {
                            var builtHeaders = (0, http_headerBuilders[_i6])();
                            for (var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++) {
                                var _key3 = _Object$keys4[_i8];
                                normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                            }
                        }
                        var xhr = new win.XMLHttpRequest;
                        xhr.addEventListener("load", (function() {
                            var responseHeaders = function(rawHeaders) {
                                void 0 === rawHeaders && (rawHeaders = "");
                                var result = {};
                                for (var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split("\n"); _i2 < _rawHeaders$trim$spli2.length; _i2++) {
                                    var _line$split = _rawHeaders$trim$spli2[_i2].split(":"), _key = _line$split[0], values = _line$split.slice(1);
                                    result[_key.toLowerCase()] = values.join(":").trim();
                                }
                                return result;
                            }(this.getAllResponseHeaders());
                            if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                            var contentType = responseHeaders["content-type"];
                            var isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json"));
                            var responseBody = this.responseText;
                            try {
                                responseBody = JSON.parse(responseBody);
                            } catch (err) {
                                if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                            }
                            return resolve({
                                status: this.status,
                                headers: responseHeaders,
                                body: responseBody
                            });
                        }), !1);
                        xhr.addEventListener("error", (function(evt) {
                            reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
                        }), !1);
                        xhr.open(method, url, !0);
                        for (var _key4 in normalizedHeaders) normalizedHeaders.hasOwnProperty(_key4) && xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
                        json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map((function(key) {
                            return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                        })).join("&"));
                        xhr.timeout = timeout;
                        xhr.ontimeout = function() {
                            reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
                        };
                        xhr.send(body);
                    }));
                }({
                    url: url,
                    method: method,
                    headers: headers,
                    json: json
                });
            })).then(src_util_noop);
        }
        function extendIfDefined(target, source) {
            for (var key in source) source.hasOwnProperty(key) && source[key] && !target[key] && (target[key] = source[key]);
        }
        var _FUNDING_SKIP_LOGIN, _AMPLITUDE_API_KEY;
        (_FUNDING_SKIP_LOGIN = {}).paylater = "paypal", _FUNDING_SKIP_LOGIN.credit = "paypal";
        (_AMPLITUDE_API_KEY = {}).test = "a23fb4dfae56daf7c3212303b53a8527", _AMPLITUDE_API_KEY.local = "a23fb4dfae56daf7c3212303b53a8527", 
        _AMPLITUDE_API_KEY.stage = "a23fb4dfae56daf7c3212303b53a8527", _AMPLITUDE_API_KEY.sandbox = "a23fb4dfae56daf7c3212303b53a8527", 
        _AMPLITUDE_API_KEY.production = "ce423f79daba95faeb0694186170605c";
        function getLogger() {
            return inlineMemoize(getLogger, (function() {
                return function(_ref2) {
                    var url = _ref2.url, prefix = _ref2.prefix, _ref2$logLevel = _ref2.logLevel, logLevel = void 0 === _ref2$logLevel ? "warn" : _ref2$logLevel, _ref2$transport = _ref2.transport, transport = void 0 === _ref2$transport ? httpTransport : _ref2$transport, amplitudeApiKey = _ref2.amplitudeApiKey, _ref2$flushInterval = _ref2.flushInterval, flushInterval = void 0 === _ref2$flushInterval ? 6e4 : _ref2$flushInterval, _ref2$enableSendBeaco = _ref2.enableSendBeacon, enableSendBeacon = void 0 !== _ref2$enableSendBeaco && _ref2$enableSendBeaco;
                    var events = [];
                    var tracking = [];
                    var payloadBuilders = [];
                    var metaBuilders = [];
                    var trackingBuilders = [];
                    var headerBuilders = [];
                    function print(level, event, payload) {
                        if (dom_isBrowser() && window.console && window.console.log && !(LOG_LEVEL_PRIORITY.indexOf(level) > LOG_LEVEL_PRIORITY.indexOf(logLevel))) {
                            var args = [ event ];
                            args.push(payload);
                            (payload.error || payload.warning) && args.push("\n\n", payload.error || payload.warning);
                            try {
                                window.console[level] && window.console[level].apply ? window.console[level].apply(window.console, args) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, args);
                            } catch (err) {}
                        }
                    }
                    function immediateFlush() {
                        return promise_ZalgoPromise.try((function() {
                            if (dom_isBrowser() && "file:" !== window.location.protocol && (events.length || tracking.length)) {
                                var meta = {};
                                for (var _i2 = 0; _i2 < metaBuilders.length; _i2++) extendIfDefined(meta, (0, metaBuilders[_i2])(meta));
                                var headers = {};
                                for (var _i4 = 0; _i4 < headerBuilders.length; _i4++) extendIfDefined(headers, (0, 
                                headerBuilders[_i4])(headers));
                                var res;
                                url && (res = transport({
                                    method: "POST",
                                    url: url,
                                    headers: headers,
                                    json: {
                                        events: events,
                                        meta: meta,
                                        tracking: tracking
                                    },
                                    enableSendBeacon: enableSendBeacon
                                }).catch(src_util_noop));
                                amplitudeApiKey && transport({
                                    method: "POST",
                                    url: "https://api2.amplitude.com/2/httpapi",
                                    headers: {
                                        "content-type": "application/json"
                                    },
                                    json: {
                                        api_key: amplitudeApiKey,
                                        events: tracking.map((function(payload) {
                                            return _extends({
                                                event_type: payload.transition_name || "event",
                                                event_properties: payload
                                            }, payload);
                                        }))
                                    }
                                }).catch(src_util_noop);
                                events = [];
                                tracking = [];
                                return promise_ZalgoPromise.resolve(res).then(src_util_noop);
                            }
                        }));
                    }
                    var flush = function(method, delay) {
                        void 0 === delay && (delay = 50);
                        var promise;
                        var timeout;
                        return setFunctionName((function() {
                            timeout && clearTimeout(timeout);
                            var localPromise = promise = promise || new promise_ZalgoPromise;
                            timeout = setTimeout((function() {
                                promise = null;
                                timeout = null;
                                promise_ZalgoPromise.try(method).then((function(result) {
                                    localPromise.resolve(result);
                                }), (function(err) {
                                    localPromise.reject(err);
                                }));
                            }), delay);
                            return localPromise;
                        }), getFunctionName(method) + "::promiseDebounced");
                    }(immediateFlush);
                    function log(level, event, payload) {
                        void 0 === payload && (payload = {});
                        if (!dom_isBrowser()) return logger;
                        prefix && (event = prefix + "_" + event);
                        var logPayload = _extends({}, objFilter(payload), {
                            timestamp: Date.now().toString()
                        });
                        for (var _i6 = 0; _i6 < payloadBuilders.length; _i6++) extendIfDefined(logPayload, (0, 
                        payloadBuilders[_i6])(logPayload));
                        !function(level, event, payload) {
                            events.push({
                                level: level,
                                event: event,
                                payload: payload
                            });
                            -1 !== AUTO_FLUSH_LEVEL.indexOf(level) && flush();
                        }(level, event, logPayload);
                        print(level, event, logPayload);
                        return logger;
                    }
                    function addBuilder(builders, builder) {
                        builders.push(builder);
                        return logger;
                    }
                    dom_isBrowser() && (method = flush, time = flushInterval, function loop() {
                        setTimeout((function() {
                            method();
                            loop();
                        }), time);
                    }());
                    var method, time;
                    if ("object" == typeof window) {
                        window.addEventListener("beforeunload", (function() {
                            immediateFlush();
                        }));
                        window.addEventListener("unload", (function() {
                            immediateFlush();
                        }));
                    }
                    var logger = {
                        debug: function(event, payload) {
                            return log("debug", event, payload);
                        },
                        info: function(event, payload) {
                            return log("info", event, payload);
                        },
                        warn: function(event, payload) {
                            return log("warn", event, payload);
                        },
                        error: function(event, payload) {
                            return log("error", event, payload);
                        },
                        track: function(payload) {
                            void 0 === payload && (payload = {});
                            if (!dom_isBrowser()) return logger;
                            var trackingPayload = objFilter(payload);
                            for (var _i8 = 0; _i8 < trackingBuilders.length; _i8++) extendIfDefined(trackingPayload, (0, 
                            trackingBuilders[_i8])(trackingPayload));
                            print("debug", "track", trackingPayload);
                            tracking.push(trackingPayload);
                            return logger;
                        },
                        flush: flush,
                        immediateFlush: immediateFlush,
                        addPayloadBuilder: function(builder) {
                            return addBuilder(payloadBuilders, builder);
                        },
                        addMetaBuilder: function(builder) {
                            return addBuilder(metaBuilders, builder);
                        },
                        addTrackingBuilder: function(builder) {
                            return addBuilder(trackingBuilders, builder);
                        },
                        addHeaderBuilder: function(builder) {
                            return addBuilder(headerBuilders, builder);
                        },
                        setTransport: function(newTransport) {
                            transport = newTransport;
                            return logger;
                        },
                        configure: function(opts) {
                            opts.url && (url = opts.url);
                            opts.prefix && (prefix = opts.prefix);
                            opts.logLevel && (logLevel = opts.logLevel);
                            opts.transport && (transport = opts.transport);
                            opts.amplitudeApiKey && (amplitudeApiKey = opts.amplitudeApiKey);
                            opts.flushInterval && (flushInterval = opts.flushInterval);
                            opts.enableSendBeacon && (enableSendBeacon = opts.enableSendBeacon);
                            return logger;
                        }
                    };
                    return logger;
                }({
                    url: "/xoplatform/logger/api/logger",
                    enableSendBeacon: !0
                });
            }));
        }
        function isIOSSafari() {
            return isIos() && function(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /Safari/.test(ua) && !isChrome(ua);
            }();
        }
        __webpack_require__(0);
        function sdk_getPayPal() {
            if (!window.paypal) throw new Error("paypal not found");
            return window.paypal;
        }
        function isAndroidAppInstalled(appId) {
            return window.navigator && window.navigator.getInstalledRelatedApps ? window.navigator.getInstalledRelatedApps().then((function(result) {
                if (result && result.length) {
                    var apps = result.filter((function(app) {
                        return app.id === appId;
                    }));
                    return promise_ZalgoPromise.resolve(apps && apps.length ? {
                        id: apps[0].id,
                        installed: !0,
                        version: apps[0].version
                    } : {
                        installed: !1
                    });
                }
                return promise_ZalgoPromise.resolve({
                    installed: !0
                });
            })) : promise_ZalgoPromise.resolve({
                installed: !0
            });
        }
        function setupNativePopup(_ref) {
            var _logger$info$track;
            var parentDomain = _ref.parentDomain, env = _ref.env, sessionID = _ref.sessionID, buttonSessionID = _ref.buttonSessionID, sdkCorrelationID = _ref.sdkCorrelationID, clientID = _ref.clientID, fundingSource = _ref.fundingSource, locale = _ref.locale, buyerCountry = _ref.buyerCountry;
            var appInstalledPromise = promise_ZalgoPromise.resolve({
                installed: !0
            });
            var logger = function(_ref) {
                var env = _ref.env, sessionID = _ref.sessionID, buttonSessionID = _ref.buttonSessionID, sdkCorrelationID = _ref.sdkCorrelationID, clientID = _ref.clientID, fundingSource = _ref.fundingSource, sdkVersion = _ref.sdkVersion, locale = _ref.locale, buyerCountry = _ref.buyerCountry;
                var logger = getLogger();
                !function(_ref2) {
                    var env = _ref2.env, sessionID = _ref2.sessionID, clientID = _ref2.clientID, sdkCorrelationID = _ref2.sdkCorrelationID, buyerCountry = _ref2.buyerCountry, locale = _ref2.locale, sdkVersion = _ref2.sdkVersion;
                    var logger = getLogger();
                    logger.addPayloadBuilder((function() {
                        return {
                            referer: window.location.host,
                            sdkCorrelationID: sdkCorrelationID,
                            sessionID: sessionID,
                            clientID: clientID,
                            env: env
                        };
                    }));
                    logger.addTrackingBuilder((function() {
                        var _ref3;
                        var lang = locale.lang, country = locale.country;
                        return (_ref3 = {}).feed_name = "payments_sdk", _ref3.serverside_data_source = "checkout", 
                        _ref3.client_id = clientID, _ref3.page_session_id = sessionID, _ref3.referer_url = window.location.host, 
                        _ref3.buyer_cntry = buyerCountry, _ref3.locale = lang + "_" + country, _ref3.integration_identifier = clientID, 
                        _ref3.sdk_environment = isIos() ? "ios" : isAndroid() ? "android" : null, _ref3.sdk_name = "payments_sdk", 
                        _ref3.sdk_version = sdkVersion, _ref3.user_agent = window.navigator && window.navigator.userAgent, 
                        _ref3.context_correlation_id = sdkCorrelationID, _ref3.t = Date.now().toString(), 
                        _ref3;
                    }));
                    promise_ZalgoPromise.onPossiblyUnhandledException((function(err) {
                        var _logger$track;
                        logger.track(((_logger$track = {}).ext_error_code = "payments_sdk_error", _logger$track.ext_error_desc = stringifyErrorMessage(err), 
                        _logger$track));
                        logger.error("unhandled_error", {
                            err: stringifyError(err)
                        });
                        logger.flush().catch(src_util_noop);
                    }));
                }({
                    env: env,
                    sessionID: sessionID,
                    clientID: clientID,
                    sdkCorrelationID: sdkCorrelationID,
                    locale: locale,
                    sdkVersion: sdkVersion,
                    buyerCountry: buyerCountry
                });
                logger.addMetaBuilder((function() {
                    return {
                        amplitude: !0
                    };
                }));
                logger.addPayloadBuilder((function() {
                    var _ref2;
                    return (_ref2 = {
                        buttonSessionID: buttonSessionID
                    }).user_id = buttonSessionID, _ref2;
                }));
                logger.addTrackingBuilder((function() {
                    var _ref3;
                    return (_ref3 = {}).state_name = "smart_button", _ref3.context_type = "button_session_id", 
                    _ref3.context_id = buttonSessionID, _ref3.button_session_id = buttonSessionID, _ref3.button_version = "5.0.36", 
                    _ref3.user_id = buttonSessionID, _ref3;
                }));
                (function() {
                    if (window.document.documentMode) try {
                        var status = window.status;
                        window.status = "testIntranetMode";
                        if ("testIntranetMode" === window.status) {
                            window.status = status;
                            return !0;
                        }
                        return !1;
                    } catch (err) {
                        return !1;
                    }
                    return !1;
                })() && logger.warn("button_child_intranet_mode");
                promise_ZalgoPromise.hash({
                    pageRenderTime: waitForDocumentReady().then((function() {
                        var performance = getPerformance();
                        if (performance) {
                            var timing = performance.timing;
                            return timing.connectEnd && timing.domInteractive ? timing.domInteractive - timing.connectEnd : void 0;
                        }
                    }))
                }).then((function(_ref4) {
                    var _logger$track;
                    var pageRenderTime = _ref4.pageRenderTime;
                    logger.track(((_logger$track = {}).transition_name = "process_button_load", _logger$track.merchant_selected_funding_source = fundingSource, 
                    _logger$track.page_load_time = pageRenderTime ? pageRenderTime.toString() : "", 
                    _logger$track));
                    logger.flush();
                }));
                return logger;
            }({
                env: env,
                sessionID: sessionID,
                buttonSessionID: buttonSessionID,
                sdkCorrelationID: sdkCorrelationID,
                clientID: clientID,
                fundingSource: fundingSource,
                sdkVersion: sdk_getPayPal().version,
                locale: locale,
                buyerCountry: buyerCountry
            });
            logger.info("native_popup_init", {
                buttonSessionID: buttonSessionID,
                href: base64encode(window.location.href)
            }).track((_logger$info$track = {}, _logger$info$track.transition_name = "native_popup_init", 
            _logger$info$track.info_msg = base64encode(window.location.href), _logger$info$track)).flush();
            var sfvc = isSFVC();
            var sfvcOrSafari = !sfvc && function(ua) {
                void 0 === ua && (ua = getUserAgent());
                if (isIos(ua)) {
                    var sfvc = isSFVC(ua);
                    var device = iPhoneScreenHeightMatrix[window.outerHeight];
                    if (!device) return !1;
                    var height = window.innerHeight;
                    var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                    var computedHeight = Math.round(height * scale);
                    var possibleSafariSizes = device.maybeSafari;
                    var maybeSafari = !1;
                    scale > 1 && possibleSafariSizes[scale] && -1 !== possibleSafariSizes[scale].indexOf(computedHeight) && (maybeSafari = !0);
                    return sfvc || maybeSafari;
                }
                return !1;
            }();
            var logMessage = sfvc ? "sfvc" : sfvcOrSafari ? "sfvcOrSafari" : "browser";
            if (isIOSSafari()) {
                var _logger$info$track2;
                var height = window.innerHeight;
                var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                var computedHeight = Math.round(height * scale);
                var log = "native_popup_init_" + logMessage;
                logger.info(log).track((_logger$info$track2 = {}, _logger$info$track2.transition_name = log, 
                _logger$info$track2.info_msg = "computed height: " + computedHeight + ", height: " + window.outerHeight + ", width: " + window.outerWidth + ", innerHeight: " + height + ", scale: " + scale, 
                _logger$info$track2)).flush();
            }
            window.addEventListener("beforeunload", (function() {
                var _logger$info$track3;
                logger.info("native_popup_beforeunload").track((_logger$info$track3 = {}, _logger$info$track3.transition_name = "native_popup_beforeunload", 
                _logger$info$track3)).flush();
            }));
            window.addEventListener("unload", (function() {
                var _logger$info$track4;
                logger.info("native_popup_unload").track((_logger$info$track4 = {}, _logger$info$track4.transition_name = "native_popup_unload", 
                _logger$info$track4)).flush();
            }));
            window.addEventListener("pagehide", (function() {
                var _logger$info$track5;
                logger.info("native_popup_pagehide").track((_logger$info$track5 = {}, _logger$info$track5.transition_name = "native_popup_pagehide", 
                _logger$info$track5)).flush();
            }));
            isAndroid() && isChrome() && ("paypal" === fundingSource ? appInstalledPromise = isAndroidAppInstalled("com.paypal.android.p2pmobile").then((function(app) {
                return _extends({}, app);
            })).catch((function(err) {
                var _logger$info$track6;
                logger.info("native_popup_android_paypal_app_installed_error").track((_logger$info$track6 = {}, 
                _logger$info$track6.transition_name = "native_popup_android_paypal_app_installed_error", 
                _logger$info$track6.int_error_desc = "Error: " + stringifyErrorMessage(err), _logger$info$track6)).flush();
                return {
                    installed: !0
                };
            })) : "venmo" === fundingSource && (appInstalledPromise = isAndroidAppInstalled("com.venmo").then((function(app) {
                return _extends({}, app);
            })).catch((function(err) {
                var _logger$info$track7;
                logger.info("native_popup_android_venmo_app_installed_error").track((_logger$info$track7 = {}, 
                _logger$info$track7.transition_name = "native_popup_android_venmo_app_installed_error", 
                _logger$info$track7.int_error_desc = "Error: " + stringifyErrorMessage(err), _logger$info$track7)).flush();
                return {
                    installed: !0
                };
            }))));
            var closeWindow = function() {
                window.close();
                window.location.hash = "closed";
            };
            var getRawHash = function() {
                return (window.location.hash || "none").replace(/^#/, "").replace(/\?.+/, "");
            };
            var opener = window.opener;
            if (!opener) {
                var _logger$info$info$tra;
                if (isIOSSafari()) {
                    var _logger$info$track8;
                    var _log = "popup_no_opener_hash_" + getRawHash() + "_" + logMessage;
                    logger.info(_log).track((_logger$info$track8 = {}, _logger$info$track8.transition_name = _log, 
                    _logger$info$track8)).flush();
                }
                logger.info("native_popup_no_opener", {
                    buttonSessionID: buttonSessionID,
                    href: base64encode(window.location.href)
                }).info("native_popup_no_opener_hash_" + getRawHash()).track((_logger$info$info$tra = {}, 
                _logger$info$info$tra.transition_name = "popup_no_opener_hash_" + getRawHash(), 
                _logger$info$info$tra.info_msg = "location: " + base64encode(window.location.href), 
                _logger$info$info$tra)).flush().then(closeWindow);
                throw new Error("Expected window to have opener");
            }
            !function(win, callback, delay, maxtime) {
                void 0 === delay && (delay = 1e3);
                void 0 === maxtime && (maxtime = 1 / 0);
                var timeout;
                !function check() {
                    if (isWindowClosed(win)) {
                        timeout && clearTimeout(timeout);
                        logger.info("native_popup_opener_detect_close").track((_logger$info$track9 = {}, 
                        _logger$info$track9.transition_name = "native_popup_opener_detect_close", _logger$info$track9)).flush().then(closeWindow);
                    } else {
                        var _logger$info$track9;
                        if (maxtime <= 0) clearTimeout(timeout); else {
                            maxtime -= delay;
                            timeout = setTimeout(check, delay);
                        }
                    }
                }();
            }(window.opener, 0, 500);
            var clean = (tasks = [], cleaned = !1, {
                set: function(name, item) {
                    if (!cleaned) {
                        (void 0)[name] = item;
                        this.register((function() {
                            delete (void 0)[name];
                        }));
                    }
                    return item;
                },
                register: function(method) {
                    cleaned ? method(cleanErr) : tasks.push(function(method) {
                        var called = !1;
                        return setFunctionName((function() {
                            if (!called) {
                                called = !0;
                                return method.apply(this, arguments);
                            }
                        }), getFunctionName(method) + "::once");
                    }((function() {
                        return method(cleanErr);
                    })));
                },
                all: function(err) {
                    cleanErr = err;
                    var results = [];
                    cleaned = !0;
                    for (;tasks.length; ) {
                        var task = tasks.shift();
                        results.push(task());
                    }
                    return promise_ZalgoPromise.all(results).then(src_util_noop);
                }
            });
            var tasks, cleaned, cleanErr;
            var postRobot = function() {
                var paypal = sdk_getPayPal();
                if (!paypal.postRobot) throw new Error("paypal.postRobot not found");
                return paypal.postRobot;
            }();
            var sendToParent = function(event, payload) {
                void 0 === payload && (payload = {});
                return postRobot.send(opener, event, payload, {
                    domain: parentDomain
                }).then((function(_ref2) {
                    return _ref2.data;
                }));
            };
            var handleHash = function() {
                var _logger$info$track10;
                if (window.location.hash && "#" !== window.location.hash) {
                    var _hashString$split = (window.location.hash && window.location.hash.slice(1)).split("?"), hash = _hashString$split[0], queryString = _hashString$split[1];
                    var _parseQuery = parseQuery(queryString), appVersion = _parseQuery.appVersion, bundleIdentifier = _parseQuery.bundleIdentifier;
                    logger.info("native_popup_hashchange", {
                        hash: hash,
                        queryString: queryString
                    }).track((_logger$info$track10 = {}, _logger$info$track10.transition_name = "popup_hashchange", 
                    _logger$info$track10.mobile_app_version = appVersion, _logger$info$track10.mapv = bundleIdentifier, 
                    _logger$info$track10.info_msg = "" + window.location.href, _logger$info$track10)).flush();
                    switch (hash) {
                      case "init":
                      case "loaded":
                      case "appswitch":
                      case "webswitch":
                      case "closed":
                        break;

                      case "onApprove":
                        var _parseQuery2 = parseQuery(queryString);
                        sendToParent("onApprove", {
                            payerID: _parseQuery2.payerID,
                            paymentID: _parseQuery2.paymentID,
                            billingToken: _parseQuery2.billingToken
                        }).finally(closeWindow);
                        break;

                      case "onCancel":
                        sendToParent("onCancel").finally(closeWindow);
                        break;

                      case "fallback":
                        sendToParent("onFallback");
                        break;

                      case "onError":
                        var _parseQuery3 = parseQuery(queryString);
                        sendToParent("onError", {
                            message: _parseQuery3.message
                        }).finally(closeWindow);
                        break;

                      case "close":
                        sendToParent("onComplete").finally(closeWindow);
                        break;

                      case "test":
                        break;

                      default:
                        sendToParent("onError", {
                            message: "Invalid event sent from native, " + hash + ", from URL, " + window.location.href
                        }).finally(closeWindow);
                    }
                }
            };
            window.addEventListener("hashchange", handleHash);
            clean.register((function() {
                return window.removeEventListener("hashchange", handleHash);
            }));
            window.location.hash = "loaded";
            handleHash();
            var stickinessID = getStorage({
                name: "smart_payment_buttons"
            }).getID();
            var pageUrl = window.location.href.split("#")[0] + "#close";
            appInstalledPromise.then((function(app) {
                sendToParent("awaitRedirect", {
                    app: app,
                    pageUrl: pageUrl,
                    sfvc: sfvc,
                    stickinessID: stickinessID
                }).then((function(_ref3) {
                    var _ref3$redirect = _ref3.redirect, redirectUrl = _ref3.redirectUrl, _ref3$appSwitch = _ref3.appSwitch, appSwitch = void 0 === _ref3$appSwitch || _ref3$appSwitch;
                    if (void 0 === _ref3$redirect || _ref3$redirect) {
                        window.location.hash = appSwitch ? "appswitch" : "webswitch";
                        window.location.replace(redirectUrl);
                        var didRedirect = !1;
                        var markRedirect = function() {
                            didRedirect = !0;
                        };
                        window.addEventListener("beforeunload", markRedirect);
                        clean.register((function() {
                            return window.removeEventListener("beforeunload", markRedirect);
                        }));
                        window.addEventListener("unload", markRedirect);
                        clean.register((function() {
                            return window.removeEventListener("unload", markRedirect);
                        }));
                        window.addEventListener("pagehide", markRedirect);
                        clean.register((function() {
                            return window.removeEventListener("pagehide", markRedirect);
                        }));
                        if (appSwitch) {
                            var timer = setTimeout((function() {
                                didRedirect || sendToParent("detectAppSwitch");
                            }), 1500);
                            clean.register((function() {
                                return clearTimeout(timer);
                            }));
                        }
                    }
                }));
            }));
            return {
                destroy: function() {
                    return clean.all();
                }
            };
        }
        function _renderChildren(children, renderer) {
            var result = [];
            for (var _i2 = 0; _i2 < children.length; _i2++) {
                var renderedChild = children[_i2].render(renderer);
                if (renderedChild) if (Array.isArray(renderedChild)) for (var _i4 = 0; _i4 < renderedChild.length; _i4++) {
                    var subchild = renderedChild[_i4];
                    subchild && result.push(subchild);
                } else result.push(renderedChild);
            }
            return result;
        }
        var node_ElementNode = function() {
            function ElementNode(name, props, children) {
                this.type = "element";
                this.name = void 0;
                this.props = void 0;
                this.children = void 0;
                this.onRender = void 0;
                this.name = name;
                this.props = props || {};
                this.children = children;
                var onRender = this.props.onRender;
                if ("function" == typeof onRender) {
                    this.onRender = onRender;
                    delete props.onRender;
                }
            }
            var _proto = ElementNode.prototype;
            _proto.render = function(renderer) {
                var el = renderer(this);
                this.onRender && this.onRender(el);
                return el;
            };
            _proto.renderChildren = function(renderer) {
                return _renderChildren(this.children, renderer);
            };
            return ElementNode;
        }();
        var node_FragmentNode = function() {
            function FragmentNode(children) {
                this.type = "fragment";
                this.children = void 0;
                this.children = children;
            }
            FragmentNode.prototype.render = function(renderer) {
                return _renderChildren(this.children, renderer);
            };
            return FragmentNode;
        }();
        var node_TextNode = function() {
            function TextNode(text) {
                this.type = "text";
                this.text = void 0;
                this.text = text;
            }
            TextNode.prototype.render = function(renderer) {
                return renderer(this);
            };
            return TextNode;
        }();
        var node_ComponentNode = function() {
            function ComponentNode(component, props, children) {
                this.type = "component";
                this.component = void 0;
                this.props = void 0;
                this.children = void 0;
                this.component = component;
                this.props = props || {};
                this.children = children;
                this.props.children = children;
            }
            var _proto4 = ComponentNode.prototype;
            _proto4.renderComponent = function(renderer) {
                var child = function(child) {
                    var children = normalizeChildren(Array.isArray(child) ? child : [ child ]);
                    return 1 === children.length ? children[0] : children.length > 1 ? new node_FragmentNode(children) : void 0;
                }(this.component(this.props, this.children));
                if (child) return child.render(renderer);
            };
            _proto4.render = function(renderer) {
                return renderer(this);
            };
            _proto4.renderChildren = function(renderer) {
                return _renderChildren(this.children, renderer);
            };
            return ComponentNode;
        }();
        function normalizeChildren(children) {
            var result = [];
            for (var _i6 = 0; _i6 < children.length; _i6++) {
                var child = children[_i6];
                if (child) if ("string" == typeof child || "number" == typeof child) result.push(new node_TextNode(child.toString())); else {
                    if ("boolean" == typeof child) continue;
                    if (Array.isArray(child)) for (var _i8 = 0, _normalizeChildren2 = normalizeChildren(child); _i8 < _normalizeChildren2.length; _i8++) result.push(_normalizeChildren2[_i8]); else {
                        if (!child || "element" !== child.type && "text" !== child.type && "component" !== child.type) throw new TypeError("Unrecognized node type: " + typeof child);
                        result.push(child);
                    }
                }
            }
            return result;
        }
        var node_node = function(element, props) {
            for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
            children = normalizeChildren(children);
            if ("string" == typeof element) return new node_ElementNode(element, props, children);
            if ("function" == typeof element) return new node_ComponentNode(element, props, children);
            throw new TypeError("Expected jsx element to be a string or a function");
        };
        var Fragment = function(props, children) {
            return children;
        };
        var _ADD_CHILDREN;
        var ADD_CHILDREN = ((_ADD_CHILDREN = {}).iframe = function(el, node) {
            var firstChild = node.children[0];
            if (1 !== node.children.length || !firstChild || "element" !== firstChild.type || "html" !== firstChild.name) throw new Error("Expected only single html element node as child of iframe element");
            el.addEventListener("load", (function() {
                var win = el.contentWindow;
                if (!win) throw new Error("Expected frame to have contentWindow");
                var doc = win.document;
                var docElement = doc.documentElement;
                for (;docElement.children && docElement.children.length; ) docElement.removeChild(docElement.children[0]);
                var child = firstChild.render(function(opts) {
                    void 0 === opts && (opts = {});
                    var _opts$doc = opts.doc, doc = void 0 === _opts$doc ? document : _opts$doc;
                    return function domRenderer(node) {
                        if ("component" === node.type) return node.renderComponent(domRenderer);
                        if ("text" === node.type) return function(doc, node) {
                            return doc.createTextNode(node.text);
                        }(doc, node);
                        if ("element" === node.type) {
                            var el = function(doc, node) {
                                return node.props.el ? node.props.el : doc.createElement(node.name);
                            }(doc, node);
                            !function(el, node) {
                                var props = node.props;
                                for (var _i4 = 0, _Object$keys2 = Object.keys(props); _i4 < _Object$keys2.length; _i4++) {
                                    var prop = _Object$keys2[_i4];
                                    var val = props[prop];
                                    null != val && "el" !== prop && "innerHTML" !== prop && (prop.match(/^on[A-Z][a-z]/) && "function" == typeof val ? el.addEventListener(prop.slice(2).toLowerCase(), val) : "string" == typeof val || "number" == typeof val ? el.setAttribute(prop, val.toString()) : "boolean" == typeof val && !0 === val && el.setAttribute(prop, ""));
                                }
                                "iframe" !== el.tagName.toLowerCase() || props.id || el.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                                    return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length));
                                })));
                            }(el, node);
                            !function(el, node, doc, renderer) {
                                if (node.props.hasOwnProperty("innerHTML")) {
                                    if (node.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                                    var html = node.props.innerHTML;
                                    if ("string" != typeof html) throw new TypeError("innerHTML prop must be string");
                                    if ("script" === node.name) el.text = html; else {
                                        el.innerHTML = html;
                                        !function(el, doc) {
                                            void 0 === doc && (doc = window.document);
                                            for (var _i2 = 0, _el$querySelectorAll2 = el.querySelectorAll("script"); _i2 < _el$querySelectorAll2.length; _i2++) {
                                                var script = _el$querySelectorAll2[_i2];
                                                var parentNode = script.parentNode;
                                                if (parentNode) {
                                                    var newScript = doc.createElement("script");
                                                    newScript.text = script.textContent;
                                                    parentNode.replaceChild(newScript, script);
                                                }
                                            }
                                        }(el, doc);
                                    }
                                } else (ADD_CHILDREN[node.name] || ADD_CHILDREN.default)(el, node, renderer);
                            }(el, node, doc, domRenderer);
                            return el;
                        }
                        throw new TypeError("Unhandleable node");
                    };
                }({
                    doc: doc
                }));
                for (;child.children.length; ) docElement.appendChild(child.children[0]);
            }));
        }, _ADD_CHILDREN.script = function(el, node) {
            var firstChild = node.children[0];
            if (1 !== node.children.length || !firstChild || "text" !== firstChild.type) throw new Error("Expected only single text node as child of script element");
            el.text = firstChild.text;
        }, _ADD_CHILDREN.default = function(el, node, renderer) {
            for (var _i6 = 0, _node$renderChildren2 = node.renderChildren(renderer); _i6 < _node$renderChildren2.length; _i6++) el.appendChild(_node$renderChildren2[_i6]);
        }, _ADD_CHILDREN);
        function Spinner(_ref) {
            return node_node("div", {
                class: "preloader spinner"
            }, node_node("style", {
                nonce: _ref.nonce,
                innerHTML: "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n"
            }), node_node("div", {
                class: "spinWrap"
            }, node_node("p", {
                class: "spinnerImage"
            }), node_node("p", {
                class: "loader"
            })));
        }
        function VenmoSpinner(_ref) {
            return node_node(Fragment, null, node_node("style", {
                nonce: _ref.nonce,
                innerHTML: '\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n    .spinner {\n        color: official;\n        display: inline-block;\n        width: 80px;\n        height: 80px;\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n    }\n    .spinner div {\n        transform-origin: 40px 40px;\n        animation: spinner 1.2s linear infinite;\n    }\n    .spinner div:after {\n        content: " ";\n        display: block;\n        position: absolute;\n        top: 20px;\n        left: 37px;\n        width: 3px;\n        height: 10px;\n        border-radius: 30%;\n        background: #808080;\n    }\n    .spinner div:nth-child(1) {\n        transform: rotate(0deg);\n        animation-delay: -1.1s;\n    }\n    .spinner div:nth-child(2) {\n        transform: rotate(30deg);\n        animation-delay: -1s;\n    }\n    .spinner div:nth-child(3) {\n        transform: rotate(60deg);\n        animation-delay: -0.9s;\n    }\n    .spinner div:nth-child(4) {\n        transform: rotate(90deg);\n        animation-delay: -0.8s;\n    }\n    .spinner div:nth-child(5) {\n        transform: rotate(120deg);\n        animation-delay: -0.7s;\n    }\n    .spinner div:nth-child(6) {\n        transform: rotate(150deg);\n        animation-delay: -0.6s;\n    }\n    .spinner div:nth-child(7) {\n        transform: rotate(180deg);\n        animation-delay: -0.5s;\n    }\n    .spinner div:nth-child(8) {\n        transform: rotate(210deg);\n        animation-delay: -0.4s;\n    }\n    .spinner div:nth-child(9) {\n        transform: rotate(240deg);\n        animation-delay: -0.3s;\n    }\n    .spinner div:nth-child(10) {\n        transform: rotate(270deg);\n        animation-delay: -0.2s;\n    }\n    .spinner div:nth-child(11) {\n        transform: rotate(300deg);\n        animation-delay: -0.1s;\n    }\n    .spinner div:nth-child(12) {\n        transform: rotate(330deg);\n        animation-delay: 0s;\n    }\n    @keyframes spinner {\n        0% {\n            opacity: 1;\n        }\n        100% {\n            opacity: 0;\n        }\n    }\n'
            }), node_node("div", {
                class: "spinner"
            }, node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null), node_node("div", null)));
        }
        function NativePopup(_ref) {
            return node_node("venmo" === _ref.fundingSource ? VenmoSpinner : Spinner, {
                nonce: _ref.cspNonce
            });
        }
    } ]);
}));