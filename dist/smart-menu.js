window.spb = function(modules) {
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
    __webpack_require__.d(__webpack_exports__, "setupMenu", (function() {
        return setupMenu;
    }));
    var n, preact_module_u, preact_module_i, preact_module_t, preact_module_r = {}, f = [], e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function c(n, l) {
        for (var u in l) n[u] = l[u];
        return n;
    }
    function s(n) {
        var l = n.parentNode;
        l && l.removeChild(n);
    }
    function preact_module_a(n, l, u) {
        var i, t, o, r = arguments, f = {};
        for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];
        if (arguments.length > 3) for (u = [ u ], o = 3; o < arguments.length; o++) u.push(r[o]);
        if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
        return v(n, f, i, t, null);
    }
    function v(l, u, i, t, o) {
        var r = {
            type: l,
            props: u,
            key: i,
            ref: t,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++n.__v : o
        };
        return null != n.vnode && n.vnode(r), r;
    }
    function y(n) {
        return n.children;
    }
    function p(n, l) {
        this.props = n, this.context = l;
    }
    function d(n, l) {
        if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;
        for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
        return "function" == typeof n.type ? d(n) : null;
    }
    function _(n) {
        var l, u;
        if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
                n.__e = n.__c.base = u.__e;
                break;
            }
            return _(n);
        }
    }
    function k(l) {
        (!l.__d && (l.__d = !0) && preact_module_u.push(l) && !b.__r++ || preact_module_t !== n.debounceRendering) && ((preact_module_t = n.debounceRendering) || preact_module_i)(b);
    }
    function b() {
        for (var n; b.__r = preact_module_u.length; ) n = preact_module_u.sort((function(n, l) {
            return n.__v.__b - l.__v.__b;
        })), preact_module_u = [], n.some((function(n) {
            var l, u, i, t, o, r;
            n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, 
            I(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [ o ] : null, u, null == o ? d(t) : o, t.__h), 
            T(u, t), t.__e != o && _(t)));
        }));
    }
    function m(n, l, u, i, t, o, e, c, s, a) {
        var h, p, _, k, b, m, w, A = i && i.__k || f, P = A.length;
        for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
            children: k
        }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
            if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0; else for (p = 0; p < P; p++) {
                if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
                    A[p] = void 0;
                    break;
                }
                _ = null;
            }
            I(n, k, _ = _ || preact_module_r, t, o, e, c, s, a), b = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), 
            _.ref && w.push(_.ref, null, k), w.push(p, k.__c || b, k)), null != b ? (null == m && (m = b), 
            "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, b, s), 
            a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
        }
        for (u.__e = m, h = P; h--; ) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), 
        L(A[h], A[h]));
        if (w) for (h = 0; h < w.length; h++) z(w[h], w[++h], w[++h]);
    }
    function g(n, l, u) {
        var i, t;
        for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));
        return l;
    }
    function x(n, l, u, i, t, o) {
        var r, f, e;
        if (void 0 !== l.__d) r = l.__d, l.__d = void 0; else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), 
        r = null; else {
            for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;
            n.insertBefore(t, o), r = o;
        }
        return void 0 !== r ? r : t.nextSibling;
    }
    function P(n, l, u) {
        "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
    }
    function C(n, l, u, i, t) {
        var o;
        n: if ("style" === l) if ("string" == typeof u) n.style.cssText = u; else {
            if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
            if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
        } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), 
        l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), 
        n.l[l + o] = u, u ? i || n.addEventListener(l, o ? H : $, o) : n.removeEventListener(l, o ? H : $, o); else if ("dangerouslySetInnerHTML" !== l) {
            if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
                n[l] = null == u ? "" : u;
                break n;
            } catch (n) {}
            "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
        }
    }
    function $(l) {
        this.l[l.type + !1](n.event ? n.event(l) : l);
    }
    function H(l) {
        this.l[l.type + !0](n.event ? n.event(l) : l);
    }
    function I(l, u, i, t, o, r, f, e, s) {
        var a, v, h, d, _, k, b, g, w, x, A, P = u.type;
        if (void 0 !== u.constructor) return null;
        null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, r = [ e ]), (a = n.__b) && a(u);
        try {
            n: if ("function" == typeof P) {
                if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, 
                i.__c ? b = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), 
                v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), 
                v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), 
                null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), 
                c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), 
                null != v.componentDidMount && v.__h.push(v.componentDidMount); else {
                    if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), 
                    !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
                        v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, 
                        u.__k = i.__k, u.__k.forEach((function(n) {
                            n && (n.__ = u);
                        })), v.__h.length && f.push(v);
                        break n;
                    }
                    null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push((function() {
                        v.componentDidUpdate(d, _, k);
                    }));
                }
                v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, 
                v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), 
                h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), 
                A = null != a && a.type === y && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [ A ], u, i, t, o, r, f, e, s), 
                v.base = u.__e, u.__h = null, v.__h.length && f.push(v), b && (v.__E = v.__ = null), 
                v.__e = !1;
            } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, o, r, f, s);
            (a = n.diffed) && a(u);
        } catch (l) {
            u.__v = null, (s || null != r) && (u.__e = e, u.__h = !!s, r[r.indexOf(e)] = null), 
            n.__e(l, u, i);
        }
    }
    function T(l, u) {
        n.__c && n.__c(u, l), l.some((function(u) {
            try {
                l = u.__h, u.__h = [], l.some((function(n) {
                    n.call(u);
                }));
            } catch (l) {
                n.__e(l, u.__v);
            }
        }));
    }
    function j(n, l, u, i, t, o, e, c) {
        var a, v, h, y, p = u.props, d = l.props, _ = l.type, k = 0;
        if ("svg" === _ && (t = !0), null != o) for (;k < o.length; k++) if ((a = o[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
            n = a, o[k] = null;
            break;
        }
        if (null == n) {
            if (null === _) return document.createTextNode(d);
            n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), 
            o = null, c = !1;
        }
        if (null === _) p === d || c && n.data === d || (n.data = d); else {
            if (o = o && f.slice.call(n.childNodes), v = (p = u.props || preact_module_r).dangerouslySetInnerHTML, 
            h = d.dangerouslySetInnerHTML, !c) {
                if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
                (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
            }
            if (function(n, l, u, i, t) {
                var o;
                for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);
                for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
            }(n, d, p, t, c), h) l.__k = []; else if (k = l.props.children, m(n, Array.isArray(k) ? k : [ k ], l, u, i, t && "foreignObject" !== _, o, e, n.firstChild, c), 
            null != o) for (k = o.length; k--; ) null != o[k] && s(o[k]);
            c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), 
            "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
        }
        return n;
    }
    function z(l, u, i) {
        try {
            "function" == typeof l ? l(u) : l.current = u;
        } catch (l) {
            n.__e(l, i);
        }
    }
    function L(l, u, i) {
        var t, o, r;
        if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || z(t, null, u)), 
        i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, 
        null != (t = l.__c)) {
            if (t.componentWillUnmount) try {
                t.componentWillUnmount();
            } catch (l) {
                n.__e(l, u);
            }
            t.base = t.__P = null;
        }
        if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
        null != o && s(o);
    }
    function M(n, l, u) {
        return this.constructor(n, u);
    }
    n = {
        __e: function(n, l) {
            for (var u, i, t; l = l.__; ) if ((u = l.__c) && !u.__) try {
                if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), 
                t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), 
                t) return u.__E = u;
            } catch (l) {
                n = l;
            }
            throw n;
        },
        __v: 0
    }, p.prototype.setState = function(n, l) {
        var u;
        u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), 
        "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), 
        k(this));
    }, p.prototype.forceUpdate = function(n) {
        this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
    }, p.prototype.render = y, preact_module_u = [], preact_module_i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
    b.__r = 0;
    var hooks_module_t, hooks_module_u, hooks_module_r, hooks_module_o = 0, hooks_module_i = [], hooks_module_c = n.__b, hooks_module_f = n.__r, hooks_module_e = n.diffed, hooks_module_a = n.__c, hooks_module_v = n.unmount;
    function hooks_module_m(t, r) {
        n.__h && n.__h(hooks_module_u, t, hooks_module_o || r), hooks_module_o = 0;
        var i = hooks_module_u.__H || (hooks_module_u.__H = {
            __: [],
            __h: []
        });
        return t >= i.__.length && i.__.push({}), i.__[t];
    }
    function hooks_module_l(n) {
        return hooks_module_o = 1, function(n, r, o) {
            var i = hooks_module_m(hooks_module_t++, 2);
            return i.t = n, i.__c || (i.__ = [ hooks_module_w(void 0, r), function(n) {
                var t = i.t(i.__[0], n);
                i.__[0] !== t && (i.__ = [ t, i.__[1] ], i.__c.setState({}));
            } ], i.__c = hooks_module_u), i.__;
        }(hooks_module_w, n);
    }
    function hooks_module_y(r, o) {
        var i = hooks_module_m(hooks_module_t++, 3);
        !n.__s && hooks_module_k(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__H.__h.push(i));
    }
    function hooks_module_x() {
        hooks_module_i.forEach((function(t) {
            if (t.__P) try {
                t.__H.__h.forEach(hooks_module_g), t.__H.__h.forEach(hooks_module_j), t.__H.__h = [];
            } catch (u) {
                t.__H.__h = [], n.__e(u, t.__v);
            }
        })), hooks_module_i = [];
    }
    n.__b = function(n) {
        hooks_module_u = null, hooks_module_c && hooks_module_c(n);
    }, n.__r = function(n) {
        hooks_module_f && hooks_module_f(n), hooks_module_t = 0;
        var r = (hooks_module_u = n.__c).__H;
        r && (r.__h.forEach(hooks_module_g), r.__h.forEach(hooks_module_j), r.__h = []);
    }, n.diffed = function(t) {
        hooks_module_e && hooks_module_e(t);
        var o = t.__c;
        o && o.__H && o.__H.__h.length && (1 !== hooks_module_i.push(o) && hooks_module_r === n.requestAnimationFrame || ((hooks_module_r = n.requestAnimationFrame) || function(n) {
            var t, u = function() {
                clearTimeout(r), hooks_module_b && cancelAnimationFrame(t), setTimeout(n);
            }, r = setTimeout(u, 100);
            hooks_module_b && (t = requestAnimationFrame(u));
        })(hooks_module_x)), hooks_module_u = void 0;
    }, n.__c = function(t, u) {
        u.some((function(t) {
            try {
                t.__h.forEach(hooks_module_g), t.__h = t.__h.filter((function(n) {
                    return !n.__ || hooks_module_j(n);
                }));
            } catch (r) {
                u.some((function(n) {
                    n.__h && (n.__h = []);
                })), u = [], n.__e(r, t.__v);
            }
        })), hooks_module_a && hooks_module_a(t, u);
    }, n.unmount = function(t) {
        hooks_module_v && hooks_module_v(t);
        var u = t.__c;
        if (u && u.__H) try {
            u.__H.__.forEach(hooks_module_g);
        } catch (t) {
            n.__e(t, u.__v);
        }
    };
    var hooks_module_b = "function" == typeof requestAnimationFrame;
    function hooks_module_g(n) {
        var t = hooks_module_u;
        "function" == typeof n.__c && n.__c(), hooks_module_u = t;
    }
    function hooks_module_j(n) {
        var t = hooks_module_u;
        n.__c = n.__(), hooks_module_u = t;
    }
    function hooks_module_k(n, t) {
        return !n || n.length !== t.length || t.some((function(t, u) {
            return t !== n[u];
        }));
    }
    function hooks_module_w(n, t) {
        return "function" == typeof t ? t(n) : t;
    }
    function _setPrototypeOf(o, p) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
            o.__proto__ = p;
            return o;
        })(o, p);
    }
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
    }
    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }).apply(this, arguments);
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
    function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        })(o);
    }
    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
            return !0;
        } catch (e) {
            return !1;
        }
    }
    function construct_construct(Parent, args, Class) {
        return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
            var a = [ null ];
            a.push.apply(a, args);
            var instance = new (Function.bind.apply(Parent, a));
            Class && _setPrototypeOf(instance, Class.prototype);
            return instance;
        }).apply(null, arguments);
    }
    function wrapNativeSuper_wrapNativeSuper(Class) {
        var _cache = "function" == typeof Map ? new Map : void 0;
        return (wrapNativeSuper_wrapNativeSuper = function(Class) {
            if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
            var fn;
            if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== _cache) {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        })(Class);
    }
    function uniqueID() {
        var chars = "0123456789abcdef";
        return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
            return chars.charAt(Math.floor(Math.random() * chars.length));
        })) + "_" + function(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
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
        return function(fn, name) {
            try {
                delete fn.name;
                fn.name = name;
            } catch (err) {}
            fn.__name__ = fn.displayName = name;
            return fn;
        }(memoizedFunction, (options.name || (fn = method).name || fn.__name__ || fn.displayName || "anonymous") + "::memoized");
        var fn;
    }
    memoize.clear = function() {
        memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
    };
    function src_util_noop() {}
    memoize((function(obj) {
        if (Object.values) return Object.values(obj);
        var result = [];
        for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
        return result;
    }));
    function arrayFrom(item) {
        return [].slice.call(item);
    }
    var util_ExtendableError = function(_Error) {
        _inheritsLoose(ExtendableError, _Error);
        function ExtendableError(message) {
            var _this6;
            (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
            "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
            return _this6;
        }
        return ExtendableError;
    }(wrapNativeSuper_wrapNativeSuper(Error));
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
    var dom_PopupOpenError = function(_ExtendableError) {
        _inheritsLoose(PopupOpenError, _ExtendableError);
        function PopupOpenError() {
            return _ExtendableError.apply(this, arguments) || this;
        }
        return PopupOpenError;
    }(util_ExtendableError);
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
    var _FUNDING_SKIP_LOGIN, _AMPLITUDE_API_KEY;
    (_FUNDING_SKIP_LOGIN = {}).paylater = "paypal", _FUNDING_SKIP_LOGIN.credit = "paypal";
    (_AMPLITUDE_API_KEY = {}).test = "a23fb4dfae56daf7c3212303b53a8527", _AMPLITUDE_API_KEY.local = "a23fb4dfae56daf7c3212303b53a8527", 
    _AMPLITUDE_API_KEY.stage = "a23fb4dfae56daf7c3212303b53a8527", _AMPLITUDE_API_KEY.sandbox = "a23fb4dfae56daf7c3212303b53a8527", 
    _AMPLITUDE_API_KEY.production = "ce423f79daba95faeb0694186170605c";
    function getNonce() {
        var nonce = "";
        document.body && (nonce = document.body.getAttribute("data-nonce") || "");
        return nonce;
    }
    __webpack_require__(0);
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
            var child = firstChild.render(dom({
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
    function dom(opts) {
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
    }
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
    function SpinnerPage(_ref2, children) {
        var nonce = _ref2.nonce;
        return node_node("html", null, node_node("head", null, node_node("title", null, "PayPal"), node_node("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        })), node_node("body", null, node_node(Spinner, {
            nonce: nonce
        }), children));
    }
    function Menu(_ref) {
        var choices = _ref.choices, onBlur = _ref.onBlur, cspNonce = _ref.cspNonce, verticalOffset = _ref.verticalOffset;
        var autoFocus = function(_temp) {
            var _ref = void 0 === _temp ? {} : _temp, _ref$onFocus = _ref.onFocus, onFocus = void 0 === _ref$onFocus ? src_util_noop : _ref$onFocus, _ref$onFocusFail = _ref.onFocusFail, onFocusFail = void 0 === _ref$onFocusFail ? src_util_noop : _ref$onFocusFail;
            var ref = (hooks_module_o = 5, function(n, u) {
                var r = hooks_module_m(hooks_module_t++, 7);
                return hooks_module_k(r.__H, u) && (r.__ = {
                    current: void 0
                }, r.__H = u, r.__h = n), r.__;
            }((function() {
                return {
                    current: void 0
                };
            }), []));
            hooks_module_y((function() {
                if (ref.current) {
                    ref.current.focus();
                    document.activeElement === ref.current ? onFocus() : onFocusFail();
                }
            }));
            return ref;
        }({
            onFocus: _ref.onFocus,
            onFocusFail: _ref.onFocusFail
        });
        return preact_module_a(y, null, preact_module_a("style", {
            nonce: cspNonce
        }, '\n                    .menu {\n                        width: 100%;\n                        z-index: 5000;\n                        background: white;\n                        border-radius: 0 0 3px 3px;\n                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n                        letter-spacing: 0.5px;\n                        box-shadow: 0px 0px 3px 1px rgba(222,222,222,1);\n                        outline-style: none;\n                        user-select: none;\n                        text-align: center;\n                        margin-top: ' + verticalOffset + "px;\n                        overflow: hidden;\n                    }\n                    \n                    .menu-item {\n                        border-top: 2px solid rgba(230, 230, 230, 0.5);;\n                        color: #0070ba;\n                        cursor: pointer;\n                    }\n                    \n                    .menu-item:first-child {\n                        border-top: none;\n                    }\n                    \n                    .menu-item:hover {\n                        background: #fcfcfc;\n                        text-decoration: underline;\n                    }\n\n                    @media screen and (min-width: 0px) {\n                        .menu-item {\n                            font-size: 11px;\n                            line-height: 14px;\n                            padding: 8px;\n                        }\n                    }\n\n                    @media screen and (min-width: 300px) {\n                        .menu-item {\n                            font-size: 14px;\n                            line-height: 18px;\n                            padding: 14px;\n                        }\n                    }\n\n                    @media screen and (min-width: 500px) {\n                        .menu-item {\n                            font-size: 18px;\n                            line-height: 21px;\n                            padding: 17px;\n                        }\n                    }\n                "), preact_module_a("div", {
            class: "menu",
            tabIndex: "0",
            onBlur: onBlur,
            ref: autoFocus
        }, choices.map((function(choice) {
            return preact_module_a("div", {
                class: "menu-item",
                onClick: function() {
                    return function(choice) {
                        var win;
                        choice.popup && (win = function(_ref) {
                            var win = function(win) {
                                if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                                return win;
                            }(function(url, options) {
                                var width = (options = options || {}).width, height = options.height;
                                var top = 0;
                                var left = 0;
                                width && (window.outerWidth ? left = Math.round((window.outerWidth - width) / 2) + window.screenX : window.screen.width && (left = Math.round((window.screen.width - width) / 2)));
                                height && (window.outerHeight ? top = Math.round((window.outerHeight - height) / 2) + window.screenY : window.screen.height && (top = Math.round((window.screen.height - height) / 2)));
                                width && height && (options = _extends({
                                    top: top,
                                    left: left,
                                    width: width,
                                    height: height,
                                    status: 1,
                                    toolbar: 0,
                                    menubar: 0,
                                    resizable: 1,
                                    scrollbars: 1
                                }, options));
                                var name = options.name || "";
                                delete options.name;
                                var params = Object.keys(options).map((function(key) {
                                    if (null != options[key]) return key + "=" + ("string" == typeof (item = options[key]) ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item));
                                    var item;
                                })).filter(Boolean).join(",");
                                var win;
                                try {
                                    win = window.open("", name, params);
                                } catch (err) {
                                    throw new dom_PopupOpenError("Can not open popup window - " + (err.stack || err.message));
                                }
                                if (isWindowClosed(win)) {
                                    var err;
                                    throw new dom_PopupOpenError("Can not open popup window - blocked");
                                }
                                window.addEventListener("unload", (function() {
                                    return win.close();
                                }));
                                return win;
                            }(0, {
                                width: _ref.width,
                                height: _ref.height
                            }));
                            var doc = win.document;
                            !function(win, el) {
                                var tag = el.tagName.toLowerCase();
                                if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                                var documentElement = win.document.documentElement;
                                for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) documentElement.removeChild(_arrayFrom2[_i6]);
                                for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) documentElement.appendChild(_arrayFrom4[_i8]);
                            }(win, node_node(SpinnerPage, {
                                nonce: getNonce()
                            }).render(dom({
                                doc: doc
                            })));
                            return win;
                        }({
                            width: choice.popup.width,
                            height: choice.popup.height
                        }));
                        return choice.onSelect({
                            win: win
                        });
                    }(choice);
                }
            }, choice.label);
        }))));
    }
    function Page(_ref) {
        var cspNonce = _ref.cspNonce;
        var _useXProps = function() {
            var _useState = hooks_module_l(window.xprops), xprops = _useState[0], setXProps = _useState[1];
            hooks_module_y((function() {
                return xprops.onProps((function(newProps) {
                    setXProps(_extends({}, newProps));
                }));
            }), []);
            return _extends({}, xprops);
        }(), choices = _useXProps.choices, onChoose = _useXProps.onChoose, verticalOffset = _useXProps.verticalOffset, hide = _useXProps.hide, _useXProps$onBlur = _useXProps.onBlur, onBlur = void 0 === _useXProps$onBlur ? src_util_noop : _useXProps$onBlur, _useXProps$onFocus = _useXProps.onFocus, onFocus = void 0 === _useXProps$onFocus ? src_util_noop : _useXProps$onFocus, _useXProps$onFocusFai = _useXProps.onFocusFail, onFocusFail = void 0 === _useXProps$onFocusFai ? src_util_noop : _useXProps$onFocusFai;
        var _useState = hooks_module_l(!1), opaque = _useState[0], setOpaque = _useState[1];
        var _useState2 = hooks_module_l(!1), visible = _useState2[0], setVisible = _useState2[1];
        hooks_module_y((function() {
            var hasChoices = Boolean(choices && choices.length);
            setOpaque(hasChoices);
            setVisible(hasChoices);
        }), [ choices ]);
        return preact_module_a(y, null, preact_module_a("style", {
            nonce: cspNonce
        }, "\n                    * {\n                        box-sizing: border-box;\n                    }\n\n                    html, body {\n                        margin: 0;\n                        padding: 0;\n                        opacity: " + (opaque ? "1" : "0") + ";\n                        transition: opacity " + .15.toFixed(2) + 's ease-in-out;\n                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n                    }\n\n                    body {\n                        padding: 5px 20px;\n                        display: inline-block;\n                        width: 100%;\n                    }\n                '), choices && visible ? preact_module_a(Menu, {
            choices: choices,
            onChoose: function(_ref2) {
                var id = _ref2.id, win = _ref2.win;
                setVisible(!1);
                return onChoose({
                    id: id,
                    win: win
                });
            },
            onBlur: function() {
                setOpaque(!1);
                return promise_ZalgoPromise.delay(150).then((function() {
                    setVisible(!1);
                    return promise_ZalgoPromise.all([ onBlur(), hide() ]);
                }));
            },
            onFocus: onFocus,
            onFocusFail: onFocusFail,
            cspNonce: cspNonce,
            verticalOffset: verticalOffset
        }) : null);
    }
    function setupMenu(_ref3) {
        !function(l, u, i) {
            var o, e;
            n.__ && n.__(l, u), o = !1 ? null : u.__k, e = [], I(u, l = u.__k = preact_module_a(y, null, [ l ]), o || preact_module_r, preact_module_r, void 0 !== u.ownerSVGElement, o ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, o ? o.__e : u.firstChild, !1), 
            T(e, l);
        }(preact_module_a(Page, {
            cspNonce: _ref3.cspNonce
        }), function() {
            var body = document.body;
            if (!body) throw new Error("Document body not found");
            return body;
        }());
    }
} ]);