import { Q as QSpinnerDots } from "./QSpinnerDots.50d98fd7.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { m as mangaCard } from "./mangaCard.d2350d59.js";
import { _ as _export_sfc, d as defineComponent, r as ref, a7 as debounce, f as openBlock, j as createBlock, k as withCtx, s as resolveComponent, u as createBaseVNode, v as createElementBlock, x as renderList, F as Fragment, m as createVNode, n as createCommentVNode, t as toDisplayString, a6 as normalizeStyle } from "./index.0b61810d.js";
import { u as useInBar } from "./Filters.d6e3deb1.js";
import "./QSpinner.0d412098.js";
import "./QInnerLoading.b3499eb2.js";
import "./use-dark.bc291eea.js";
import "./use-transition.65db8379.js";
import "./QBadge.da9a9ffd.js";
import "./usefull.0f9a3edc.js";
import "./axios.a87bcd6c.js";
import "./StoreStuff.f5900537.js";
import "./QCard.85acad91.js";
import "./QIntersection.6a6cf41f.js";
import "./Intersection.9c3ca45b.js";
import "./Ripple.ce29675d.js";
import "./dom.fd94eb85.js";
var eventemitter3 = { exports: {} };
(function(module) {
  var has = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__)
      prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt])
      emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn)
      emitter._events[evt].push(listener);
    else
      emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0)
      emitter._events = new Events();
    else
      delete emitter._events[evt];
  }
  function EventEmitter2() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter2.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0)
      return names;
    for (name in events = this._events) {
      if (has.call(events, name))
        names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter2.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers)
      return [];
    if (handlers.fn)
      return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter2.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners)
      return 0;
    if (listeners.fn)
      return 1;
    return listeners.length;
  };
  EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length, j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter2.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter2.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }
      if (events.length)
        this._events[evt] = events.length === 1 ? events[0] : events;
      else
        clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt])
        clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
  EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
  EventEmitter2.prefixed = prefix;
  EventEmitter2.EventEmitter = EventEmitter2;
  {
    module.exports = EventEmitter2;
  }
})(eventemitter3);
var EventEmitter = eventemitter3.exports;
class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
}
class AbortError$1 extends Error {
  constructor(message) {
    super();
    this.name = "AbortError";
    this.message = message;
  }
}
const getDOMException = (errorMessage) => globalThis.DOMException === void 0 ? new AbortError$1(errorMessage) : new DOMException(errorMessage);
const getAbortedReason = (signal) => {
  const reason = signal.reason === void 0 ? getDOMException("This operation was aborted.") : signal.reason;
  return reason instanceof Error ? reason : getDOMException(reason);
};
function pTimeout(promise, milliseconds, fallback, options) {
  let timer;
  const cancelablePromise = new Promise((resolve, reject) => {
    if (typeof milliseconds !== "number" || Math.sign(milliseconds) !== 1) {
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
    }
    if (milliseconds === Number.POSITIVE_INFINITY) {
      resolve(promise);
      return;
    }
    options = {
      customTimers: { setTimeout, clearTimeout },
      ...options
    };
    if (options.signal) {
      const { signal } = options;
      if (signal.aborted) {
        reject(getAbortedReason(signal));
      }
      signal.addEventListener("abort", () => {
        reject(getAbortedReason(signal));
      });
    }
    timer = options.customTimers.setTimeout.call(void 0, () => {
      if (typeof fallback === "function") {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }
        return;
      }
      const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
      const timeoutError2 = fallback instanceof Error ? fallback : new TimeoutError(message);
      if (typeof promise.cancel === "function") {
        promise.cancel();
      }
      reject(timeoutError2);
    }, milliseconds);
    (async () => {
      try {
        resolve(await promise);
      } catch (error) {
        reject(error);
      } finally {
        options.customTimers.clearTimeout.call(void 0, timer);
      }
    })();
  });
  cancelablePromise.clear = () => {
    clearTimeout(timer);
    timer = void 0;
  };
  return cancelablePromise;
}
function lowerBound(array, value, comparator) {
  let first = 0;
  let count = array.length;
  while (count > 0) {
    const step = Math.trunc(count / 2);
    let it = first + step;
    if (comparator(array[it], value) <= 0) {
      first = ++it;
      count -= step + 1;
    } else {
      count = step;
    }
  }
  return first;
}
var __classPrivateFieldGet$1 = globalThis && globalThis.__classPrivateFieldGet || function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PriorityQueue_queue;
class PriorityQueue {
  constructor() {
    _PriorityQueue_queue.set(this, []);
  }
  enqueue(run, options) {
    options = {
      priority: 0,
      ...options
    };
    const element = {
      priority: options.priority,
      run
    };
    if (this.size && __classPrivateFieldGet$1(this, _PriorityQueue_queue, "f")[this.size - 1].priority >= options.priority) {
      __classPrivateFieldGet$1(this, _PriorityQueue_queue, "f").push(element);
      return;
    }
    const index = lowerBound(__classPrivateFieldGet$1(this, _PriorityQueue_queue, "f"), element, (a, b) => b.priority - a.priority);
    __classPrivateFieldGet$1(this, _PriorityQueue_queue, "f").splice(index, 0, element);
  }
  dequeue() {
    const item = __classPrivateFieldGet$1(this, _PriorityQueue_queue, "f").shift();
    return item === null || item === void 0 ? void 0 : item.run;
  }
  filter(options) {
    return __classPrivateFieldGet$1(this, _PriorityQueue_queue, "f").filter((element) => element.priority === options.priority).map((element) => element.run);
  }
  get size() {
    return __classPrivateFieldGet$1(this, _PriorityQueue_queue, "f").length;
  }
}
_PriorityQueue_queue = /* @__PURE__ */ new WeakMap();
var __classPrivateFieldSet = globalThis && globalThis.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = globalThis && globalThis.__classPrivateFieldGet || function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PQueue_instances, _PQueue_carryoverConcurrencyCount, _PQueue_isIntervalIgnored, _PQueue_intervalCount, _PQueue_intervalCap, _PQueue_interval, _PQueue_intervalEnd, _PQueue_intervalId, _PQueue_timeoutId, _PQueue_queue, _PQueue_queueClass, _PQueue_pendingCount, _PQueue_concurrency, _PQueue_isPaused, _PQueue_throwOnTimeout, _PQueue_doesIntervalAllowAnother_get, _PQueue_doesConcurrentAllowAnother_get, _PQueue_next, _PQueue_emitEvents, _PQueue_onResumeInterval, _PQueue_isIntervalPaused_get, _PQueue_tryToStartAnother, _PQueue_initializeIntervalIfNeeded, _PQueue_onInterval, _PQueue_processQueue, _PQueue_onEvent;
const timeoutError = new TimeoutError();
class AbortError extends Error {
}
class PQueue extends EventEmitter {
  constructor(options) {
    var _a, _b, _c, _d;
    super();
    _PQueue_instances.add(this);
    _PQueue_carryoverConcurrencyCount.set(this, void 0);
    _PQueue_isIntervalIgnored.set(this, void 0);
    _PQueue_intervalCount.set(this, 0);
    _PQueue_intervalCap.set(this, void 0);
    _PQueue_interval.set(this, void 0);
    _PQueue_intervalEnd.set(this, 0);
    _PQueue_intervalId.set(this, void 0);
    _PQueue_timeoutId.set(this, void 0);
    _PQueue_queue.set(this, void 0);
    _PQueue_queueClass.set(this, void 0);
    _PQueue_pendingCount.set(this, 0);
    _PQueue_concurrency.set(this, void 0);
    _PQueue_isPaused.set(this, void 0);
    _PQueue_throwOnTimeout.set(this, void 0);
    Object.defineProperty(this, "timeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    options = {
      carryoverConcurrencyCount: false,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: true,
      queueClass: PriorityQueue,
      ...options
    };
    if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
    }
    if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
    }
    __classPrivateFieldSet(this, _PQueue_carryoverConcurrencyCount, options.carryoverConcurrencyCount, "f");
    __classPrivateFieldSet(this, _PQueue_isIntervalIgnored, options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0, "f");
    __classPrivateFieldSet(this, _PQueue_intervalCap, options.intervalCap, "f");
    __classPrivateFieldSet(this, _PQueue_interval, options.interval, "f");
    __classPrivateFieldSet(this, _PQueue_queue, new options.queueClass(), "f");
    __classPrivateFieldSet(this, _PQueue_queueClass, options.queueClass, "f");
    this.concurrency = options.concurrency;
    this.timeout = options.timeout;
    __classPrivateFieldSet(this, _PQueue_throwOnTimeout, options.throwOnTimeout === true, "f");
    __classPrivateFieldSet(this, _PQueue_isPaused, options.autoStart === false, "f");
  }
  get concurrency() {
    return __classPrivateFieldGet(this, _PQueue_concurrency, "f");
  }
  set concurrency(newConcurrency) {
    if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
    }
    __classPrivateFieldSet(this, _PQueue_concurrency, newConcurrency, "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
  }
  async add(fn, options = {}) {
    return new Promise((resolve, reject) => {
      const run = async () => {
        var _a;
        var _b, _c;
        __classPrivateFieldSet(this, _PQueue_pendingCount, (_b = __classPrivateFieldGet(this, _PQueue_pendingCount, "f"), _b++, _b), "f");
        __classPrivateFieldSet(this, _PQueue_intervalCount, (_c = __classPrivateFieldGet(this, _PQueue_intervalCount, "f"), _c++, _c), "f");
        try {
          if ((_a = options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
            reject(new AbortError("The task was aborted."));
            return;
          }
          const operation = this.timeout === void 0 && options.timeout === void 0 ? fn({ signal: options.signal }) : pTimeout(Promise.resolve(fn({ signal: options.signal })), options.timeout === void 0 ? this.timeout : options.timeout, () => {
            if (options.throwOnTimeout === void 0 ? __classPrivateFieldGet(this, _PQueue_throwOnTimeout, "f") : options.throwOnTimeout) {
              reject(timeoutError);
            }
            return void 0;
          });
          const result = await operation;
          resolve(result);
          this.emit("completed", result);
        } catch (error) {
          reject(error);
          this.emit("error", error);
        }
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_next).call(this);
      };
      __classPrivateFieldGet(this, _PQueue_queue, "f").enqueue(run, options);
      __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
      this.emit("add");
    });
  }
  async addAll(functions, options) {
    return Promise.all(functions.map(async (function_) => this.add(function_, options)));
  }
  start() {
    if (!__classPrivateFieldGet(this, _PQueue_isPaused, "f")) {
      return this;
    }
    __classPrivateFieldSet(this, _PQueue_isPaused, false, "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
    return this;
  }
  pause() {
    __classPrivateFieldSet(this, _PQueue_isPaused, true, "f");
  }
  clear() {
    __classPrivateFieldSet(this, _PQueue_queue, new (__classPrivateFieldGet(this, _PQueue_queueClass, "f"))(), "f");
  }
  async onEmpty() {
    if (__classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
      return;
    }
    await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "empty");
  }
  async onSizeLessThan(limit) {
    if (__classPrivateFieldGet(this, _PQueue_queue, "f").size < limit) {
      return;
    }
    await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "next", () => __classPrivateFieldGet(this, _PQueue_queue, "f").size < limit);
  }
  async onIdle() {
    if (__classPrivateFieldGet(this, _PQueue_pendingCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
      return;
    }
    await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "idle");
  }
  get size() {
    return __classPrivateFieldGet(this, _PQueue_queue, "f").size;
  }
  sizeBy(options) {
    return __classPrivateFieldGet(this, _PQueue_queue, "f").filter(options).length;
  }
  get pending() {
    return __classPrivateFieldGet(this, _PQueue_pendingCount, "f");
  }
  get isPaused() {
    return __classPrivateFieldGet(this, _PQueue_isPaused, "f");
  }
}
_PQueue_carryoverConcurrencyCount = /* @__PURE__ */ new WeakMap(), _PQueue_isIntervalIgnored = /* @__PURE__ */ new WeakMap(), _PQueue_intervalCount = /* @__PURE__ */ new WeakMap(), _PQueue_intervalCap = /* @__PURE__ */ new WeakMap(), _PQueue_interval = /* @__PURE__ */ new WeakMap(), _PQueue_intervalEnd = /* @__PURE__ */ new WeakMap(), _PQueue_intervalId = /* @__PURE__ */ new WeakMap(), _PQueue_timeoutId = /* @__PURE__ */ new WeakMap(), _PQueue_queue = /* @__PURE__ */ new WeakMap(), _PQueue_queueClass = /* @__PURE__ */ new WeakMap(), _PQueue_pendingCount = /* @__PURE__ */ new WeakMap(), _PQueue_concurrency = /* @__PURE__ */ new WeakMap(), _PQueue_isPaused = /* @__PURE__ */ new WeakMap(), _PQueue_throwOnTimeout = /* @__PURE__ */ new WeakMap(), _PQueue_instances = /* @__PURE__ */ new WeakSet(), _PQueue_doesIntervalAllowAnother_get = function _PQueue_doesIntervalAllowAnother_get2() {
  return __classPrivateFieldGet(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet(this, _PQueue_intervalCount, "f") < __classPrivateFieldGet(this, _PQueue_intervalCap, "f");
}, _PQueue_doesConcurrentAllowAnother_get = function _PQueue_doesConcurrentAllowAnother_get2() {
  return __classPrivateFieldGet(this, _PQueue_pendingCount, "f") < __classPrivateFieldGet(this, _PQueue_concurrency, "f");
}, _PQueue_next = function _PQueue_next2() {
  var _a;
  __classPrivateFieldSet(this, _PQueue_pendingCount, (_a = __classPrivateFieldGet(this, _PQueue_pendingCount, "f"), _a--, _a), "f");
  __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
  this.emit("next");
}, _PQueue_emitEvents = function _PQueue_emitEvents2() {
  this.emit("empty");
  if (__classPrivateFieldGet(this, _PQueue_pendingCount, "f") === 0) {
    this.emit("idle");
  }
}, _PQueue_onResumeInterval = function _PQueue_onResumeInterval2() {
  __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
  __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
  __classPrivateFieldSet(this, _PQueue_timeoutId, void 0, "f");
}, _PQueue_isIntervalPaused_get = function _PQueue_isIntervalPaused_get2() {
  const now = Date.now();
  if (__classPrivateFieldGet(this, _PQueue_intervalId, "f") === void 0) {
    const delay = __classPrivateFieldGet(this, _PQueue_intervalEnd, "f") - now;
    if (delay < 0) {
      __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet(this, _PQueue_pendingCount, "f") : 0, "f");
    } else {
      if (__classPrivateFieldGet(this, _PQueue_timeoutId, "f") === void 0) {
        __classPrivateFieldSet(this, _PQueue_timeoutId, setTimeout(() => {
          __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onResumeInterval).call(this);
        }, delay), "f");
      }
      return true;
    }
  }
  return false;
}, _PQueue_tryToStartAnother = function _PQueue_tryToStartAnother2() {
  if (__classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
    if (__classPrivateFieldGet(this, _PQueue_intervalId, "f")) {
      clearInterval(__classPrivateFieldGet(this, _PQueue_intervalId, "f"));
    }
    __classPrivateFieldSet(this, _PQueue_intervalId, void 0, "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_emitEvents).call(this);
    return false;
  }
  if (!__classPrivateFieldGet(this, _PQueue_isPaused, "f")) {
    const canInitializeInterval = !__classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_isIntervalPaused_get);
    if (__classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_doesIntervalAllowAnother_get) && __classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_doesConcurrentAllowAnother_get)) {
      const job = __classPrivateFieldGet(this, _PQueue_queue, "f").dequeue();
      if (!job) {
        return false;
      }
      this.emit("active");
      job();
      if (canInitializeInterval) {
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
      }
      return true;
    }
  }
  return false;
}, _PQueue_initializeIntervalIfNeeded = function _PQueue_initializeIntervalIfNeeded2() {
  if (__classPrivateFieldGet(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet(this, _PQueue_intervalId, "f") !== void 0) {
    return;
  }
  __classPrivateFieldSet(this, _PQueue_intervalId, setInterval(() => {
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
  }, __classPrivateFieldGet(this, _PQueue_interval, "f")), "f");
  __classPrivateFieldSet(this, _PQueue_intervalEnd, Date.now() + __classPrivateFieldGet(this, _PQueue_interval, "f"), "f");
}, _PQueue_onInterval = function _PQueue_onInterval2() {
  if (__classPrivateFieldGet(this, _PQueue_intervalCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_pendingCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_intervalId, "f")) {
    clearInterval(__classPrivateFieldGet(this, _PQueue_intervalId, "f"));
    __classPrivateFieldSet(this, _PQueue_intervalId, void 0, "f");
  }
  __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet(this, _PQueue_pendingCount, "f") : 0, "f");
  __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
}, _PQueue_processQueue = function _PQueue_processQueue2() {
  while (__classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this)) {
  }
}, _PQueue_onEvent = async function _PQueue_onEvent2(event, filter) {
  return new Promise((resolve) => {
    const listener = () => {
      if (filter && !filter()) {
        return;
      }
      this.off(event, listener);
      resolve();
    };
    this.on(event, listener);
  });
};
const _sfc_main = defineComponent({
  components: { mangaCard },
  setup() {
    const queue = new PQueue({ concurrency: 5 });
    const controller = ref(new AbortController());
    const searchResults = ref([]);
    const sources = ref([]);
    return {
      searchResults,
      queue,
      controller,
      sources,
      display: ref(useInBar()),
      devider: ref(0)
    };
  },
  computed: {
    Displ() {
      if (this.display.Display == null) {
        return "compact";
      } else if (this.display.Display) {
        return "comfort";
      }
      return "compact";
    },
    widt() {
      return `width: calc(100% / ${this.devider}); aspect-ratio: 225/350;transition: width 0.5s ease-out;height: fit-content;`;
    }
  },
  watch: {
    "$route.query.q"() {
      this.doSearch();
    }
  },
  created: function() {
    this.calcWidth = debounce(this.calcWidth, 500);
    this.$api.get("/api/v1/source/list").then(({ data: sources }) => {
      this.sources = sources;
      this.doSearch();
    });
    this.queue.on(
      "completed",
      (result) => {
        if (result != void 0) {
          this.searchResults = this.searchResults.concat(result).sort((a, b) => {
            if (a.mangas.length == 0) {
              return 1;
            }
            if (b.mangas.length == 0) {
              return -1;
            }
            return 0;
          });
        }
      }
    );
  },
  mounted: function() {
    this.calcWidth();
    this.$nextTick(() => {
      window.addEventListener("resize", this.calcWidth);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calcWidth);
  },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    calcWidth() {
      const grid = this.$refs["infiniteScrol"];
      const ideal = this.$q.localStorage.getItem("MitemW");
      if (grid.clientWidth == void 0)
        return;
      this.devider = Math.round(grid.clientWidth / ideal);
    },
    doSearch() {
      if (this.$route.query["q"]) {
        this.queue.clear();
        if (this.queue.pending) {
          this.controller.abort();
          this.controller = new AbortController();
        }
        this.searchResults = [];
        this.sources.forEach((source2) => {
          this.queue.add(
            async ({ signal }) => {
              if (signal) {
                const request = this.$api.get(
                  `/api/v1/source/${source2.id}/search?searchTerm=${this.$route.query["q"] || ""}&pageNum=1`,
                  {
                    signal
                  }
                );
                try {
                  return {
                    source: source2,
                    mangas: (await request).data.mangaList
                  };
                } catch (error) {
                  if (!(error instanceof DOMException)) {
                    return { source: source2, mangas: [] };
                  } else {
                    console.error(error);
                  }
                }
              }
              return { source: source2, mangas: [] };
            },
            {
              signal: this.controller.signal
            }
          );
        });
      }
    }
  }
});
const _hoisted_1 = { ref: "infiniteScrol" };
const _hoisted_2 = { class: "text-h6 q-ma-md" };
const _hoisted_3 = { style: { "white-space": "nowrap", "overflow-x": "auto" } };
const _hoisted_4 = {
  key: 0,
  class: "text-subtitle1 q-ma-md"
};
const _hoisted_5 = {
  key: 0,
  class: "row justify-center q-my-md"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mangaCard = resolveComponent("mangaCard");
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.searchResults, ({ source: source2, mangas }, index) => {
          return openBlock(), createElementBlock("div", { key: index }, [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_2, toDisplayString(source2.displayName), 1),
              createBaseVNode("div", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(mangas, (manga2) => {
                  return openBlock(), createElementBlock("div", {
                    key: manga2.id,
                    style: normalizeStyle([_ctx.widt, { "display": "inline-block" }])
                  }, [
                    createVNode(_component_mangaCard, {
                      manga: manga2,
                      display: _ctx.Displ
                    }, null, 8, ["manga", "display"])
                  ], 4);
                }), 128)),
                !mangas.length ? (openBlock(), createElementBlock("div", _hoisted_4, " No Manga ")) : createCommentVNode("", true)
              ])
            ])
          ]);
        }), 128))
      ], 512),
      _ctx.queue.pending ? (openBlock(), createElementBlock("div", _hoisted_5, [
        createVNode(QSpinnerDots, {
          color: "primary",
          size: "40px"
        })
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var SSearchAll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SSearchAll.vue"]]);
export { SSearchAll as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1NlYXJjaEFsbC41OWMwOGUzNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcC10aW1lb3V0L2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3AtcXVldWUvZGlzdC9sb3dlci1ib3VuZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wLXF1ZXVlL2Rpc3QvcHJpb3JpdHktcXVldWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcC1xdWV1ZS9kaXN0L2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL1NTZWFyY2hBbGwudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsImV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLm5hbWUgPSAnVGltZW91dEVycm9yJztcblx0fVxufVxuXG4vKipcbkFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZSByZXF1ZXN0IGlzIGFib3J0ZWQgYnkgQWJvcnRDb250cm9sbGVyLlxuRE9NRXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkIG9mIHRoaXMgRXJyb3Igd2hlbiBET01FeGNlcHRpb24gaXMgYXZhaWxhYmxlLlxuKi9cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSAnQWJvcnRFcnJvcic7XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxufVxuXG4vKipcblRPRE86IFJlbW92ZSBBYm9ydEVycm9yIGFuZCBqdXN0IHRocm93IERPTUV4Y2VwdGlvbiB3aGVuIHRhcmdldGluZyBOb2RlIDE4LlxuKi9cbmNvbnN0IGdldERPTUV4Y2VwdGlvbiA9IGVycm9yTWVzc2FnZSA9PiBnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbiA9PT0gdW5kZWZpbmVkID9cblx0bmV3IEFib3J0RXJyb3IoZXJyb3JNZXNzYWdlKSA6XG5cdG5ldyBET01FeGNlcHRpb24oZXJyb3JNZXNzYWdlKTtcblxuLyoqXG5UT0RPOiBSZW1vdmUgYmVsb3cgZnVuY3Rpb24gYW5kIGp1c3QgJ3JlamVjdChzaWduYWwucmVhc29uKScgd2hlbiB0YXJnZXRpbmcgTm9kZSAxOC5cbiovXG5jb25zdCBnZXRBYm9ydGVkUmVhc29uID0gc2lnbmFsID0+IHtcblx0Y29uc3QgcmVhc29uID0gc2lnbmFsLnJlYXNvbiA9PT0gdW5kZWZpbmVkID9cblx0XHRnZXRET01FeGNlcHRpb24oJ1RoaXMgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLicpIDpcblx0XHRzaWduYWwucmVhc29uO1xuXG5cdHJldHVybiByZWFzb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlYXNvbiA6IGdldERPTUV4Y2VwdGlvbihyZWFzb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcFRpbWVvdXQocHJvbWlzZSwgbWlsbGlzZWNvbmRzLCBmYWxsYmFjaywgb3B0aW9ucykge1xuXHRsZXQgdGltZXI7XG5cblx0Y29uc3QgY2FuY2VsYWJsZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBtaWxsaXNlY29uZHMgIT09ICdudW1iZXInIHx8IE1hdGguc2lnbihtaWxsaXNlY29uZHMpICE9PSAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBtaWxsaXNlY29uZHNcXGAgdG8gYmUgYSBwb3NpdGl2ZSBudW1iZXIsIGdvdCBcXGAke21pbGxpc2Vjb25kc31cXGBgKTtcblx0XHR9XG5cblx0XHRpZiAobWlsbGlzZWNvbmRzID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcblx0XHRcdHJlc29sdmUocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdGN1c3RvbVRpbWVyczoge3NldFRpbWVvdXQsIGNsZWFyVGltZW91dH0sXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fTtcblxuXHRcdGlmIChvcHRpb25zLnNpZ25hbCkge1xuXHRcdFx0Y29uc3Qge3NpZ25hbH0gPSBvcHRpb25zO1xuXHRcdFx0aWYgKHNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHRcdHJlamVjdChnZXRBYm9ydGVkUmVhc29uKHNpZ25hbCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG5cdFx0XHRcdHJlamVjdChnZXRBYm9ydGVkUmVhc29uKHNpZ25hbCkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGltZXIgPSBvcHRpb25zLmN1c3RvbVRpbWVycy5zZXRUaW1lb3V0LmNhbGwodW5kZWZpbmVkLCAoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGZhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShmYWxsYmFjaygpKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtZXNzYWdlID0gdHlwZW9mIGZhbGxiYWNrID09PSAnc3RyaW5nJyA/IGZhbGxiYWNrIDogYFByb21pc2UgdGltZWQgb3V0IGFmdGVyICR7bWlsbGlzZWNvbmRzfSBtaWxsaXNlY29uZHNgO1xuXHRcdFx0Y29uc3QgdGltZW91dEVycm9yID0gZmFsbGJhY2sgaW5zdGFuY2VvZiBFcnJvciA/IGZhbGxiYWNrIDogbmV3IFRpbWVvdXRFcnJvcihtZXNzYWdlKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9taXNlLmNhbmNlbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRwcm9taXNlLmNhbmNlbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QodGltZW91dEVycm9yKTtcblx0XHR9LCBtaWxsaXNlY29uZHMpO1xuXG5cdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc29sdmUoYXdhaXQgcHJvbWlzZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0b3B0aW9ucy5jdXN0b21UaW1lcnMuY2xlYXJUaW1lb3V0LmNhbGwodW5kZWZpbmVkLCB0aW1lcik7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblx0fSk7XG5cblx0Y2FuY2VsYWJsZVByb21pc2UuY2xlYXIgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHR0aW1lciA9IHVuZGVmaW5lZDtcblx0fTtcblxuXHRyZXR1cm4gY2FuY2VsYWJsZVByb21pc2U7XG59XG4iLCIvLyBQb3J0IG9mIGxvd2VyX2JvdW5kIGZyb20gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2FsZ29yaXRobS9sb3dlcl9ib3VuZFxuLy8gVXNlZCB0byBjb21wdXRlIGluc2VydGlvbiBpbmRleCB0byBrZWVwIHF1ZXVlIHNvcnRlZCBhZnRlciBpbnNlcnRpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvd2VyQm91bmQoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gICAgbGV0IGZpcnN0ID0gMDtcbiAgICBsZXQgY291bnQgPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICBjb25zdCBzdGVwID0gTWF0aC50cnVuYyhjb3VudCAvIDIpO1xuICAgICAgICBsZXQgaXQgPSBmaXJzdCArIHN0ZXA7XG4gICAgICAgIGlmIChjb21wYXJhdG9yKGFycmF5W2l0XSwgdmFsdWUpIDw9IDApIHtcbiAgICAgICAgICAgIGZpcnN0ID0gKytpdDtcbiAgICAgICAgICAgIGNvdW50IC09IHN0ZXAgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY291bnQgPSBzdGVwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaXJzdDtcbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Qcmlvcml0eVF1ZXVlX3F1ZXVlO1xuaW1wb3J0IGxvd2VyQm91bmQgZnJvbSAnLi9sb3dlci1ib3VuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmlvcml0eVF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX1ByaW9yaXR5UXVldWVfcXVldWUuc2V0KHRoaXMsIFtdKTtcbiAgICB9XG4gICAgZW5xdWV1ZShydW4sIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHByaW9yaXR5OiAwLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHtcbiAgICAgICAgICAgIHByaW9yaXR5OiBvcHRpb25zLnByaW9yaXR5LFxuICAgICAgICAgICAgcnVuLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zaXplICYmIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKVt0aGlzLnNpemUgLSAxXS5wcmlvcml0eSA+PSBvcHRpb25zLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcmlvcml0eVF1ZXVlX3F1ZXVlLCBcImZcIikucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IGxvd2VyQm91bmQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJpb3JpdHlRdWV1ZV9xdWV1ZSwgXCJmXCIpLCBlbGVtZW50LCAoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcmlvcml0eVF1ZXVlX3F1ZXVlLCBcImZcIikuc3BsaWNlKGluZGV4LCAwLCBlbGVtZW50KTtcbiAgICB9XG4gICAgZGVxdWV1ZSgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKS5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLnJ1bjtcbiAgICB9XG4gICAgZmlsdGVyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQucHJpb3JpdHkgPT09IG9wdGlvbnMucHJpb3JpdHkpLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC5ydW4pO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ByaW9yaXR5UXVldWVfcXVldWUsIFwiZlwiKS5sZW5ndGg7XG4gICAgfVxufVxuX1ByaW9yaXR5UXVldWVfcXVldWUgPSBuZXcgV2Vha01hcCgpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9QUXVldWVfaW5zdGFuY2VzLCBfUFF1ZXVlX2NhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQsIF9QUXVldWVfaXNJbnRlcnZhbElnbm9yZWQsIF9QUXVldWVfaW50ZXJ2YWxDb3VudCwgX1BRdWV1ZV9pbnRlcnZhbENhcCwgX1BRdWV1ZV9pbnRlcnZhbCwgX1BRdWV1ZV9pbnRlcnZhbEVuZCwgX1BRdWV1ZV9pbnRlcnZhbElkLCBfUFF1ZXVlX3RpbWVvdXRJZCwgX1BRdWV1ZV9xdWV1ZSwgX1BRdWV1ZV9xdWV1ZUNsYXNzLCBfUFF1ZXVlX3BlbmRpbmdDb3VudCwgX1BRdWV1ZV9jb25jdXJyZW5jeSwgX1BRdWV1ZV9pc1BhdXNlZCwgX1BRdWV1ZV90aHJvd09uVGltZW91dCwgX1BRdWV1ZV9kb2VzSW50ZXJ2YWxBbGxvd0Fub3RoZXJfZ2V0LCBfUFF1ZXVlX2RvZXNDb25jdXJyZW50QWxsb3dBbm90aGVyX2dldCwgX1BRdWV1ZV9uZXh0LCBfUFF1ZXVlX2VtaXRFdmVudHMsIF9QUXVldWVfb25SZXN1bWVJbnRlcnZhbCwgX1BRdWV1ZV9pc0ludGVydmFsUGF1c2VkX2dldCwgX1BRdWV1ZV90cnlUb1N0YXJ0QW5vdGhlciwgX1BRdWV1ZV9pbml0aWFsaXplSW50ZXJ2YWxJZk5lZWRlZCwgX1BRdWV1ZV9vbkludGVydmFsLCBfUFF1ZXVlX3Byb2Nlc3NRdWV1ZSwgX1BRdWV1ZV9vbkV2ZW50O1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCBwVGltZW91dCwgeyBUaW1lb3V0RXJyb3IgfSBmcm9tICdwLXRpbWVvdXQnO1xuaW1wb3J0IFByaW9yaXR5UXVldWUgZnJvbSAnLi9wcmlvcml0eS1xdWV1ZS5qcyc7XG5jb25zdCB0aW1lb3V0RXJyb3IgPSBuZXcgVGltZW91dEVycm9yKCk7XG4vKipcblRoZSBlcnJvciB0aHJvd24gYnkgYHF1ZXVlLmFkZCgpYCB3aGVuIGEgam9iIGlzIGFib3J0ZWQgYmVmb3JlIGl0IGlzIHJ1bi4gU2VlIGBzaWduYWxgLlxuKi9cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuLyoqXG5Qcm9taXNlIHF1ZXVlIHdpdGggY29uY3VycmVuY3kgY29udHJvbC5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQUXVldWUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfUFF1ZXVlX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9QUXVldWVfY2FycnlvdmVyQ29uY3VycmVuY3lDb3VudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pc0ludGVydmFsSWdub3JlZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbENvdW50LnNldCh0aGlzLCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbENhcC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pbnRlcnZhbEVuZC5zZXQodGhpcywgMCk7XG4gICAgICAgIF9QUXVldWVfaW50ZXJ2YWxJZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV90aW1lb3V0SWQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9QUXVldWVfcXVldWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9QUXVldWVfcXVldWVDbGFzcy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9wZW5kaW5nQ291bnQuc2V0KHRoaXMsIDApO1xuICAgICAgICAvLyBUaGUgYCFgIGlzIG5lZWRlZCBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzIxOTRcbiAgICAgICAgX1BRdWV1ZV9jb25jdXJyZW5jeS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV9pc1BhdXNlZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1BRdWV1ZV90aHJvd09uVGltZW91dC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgIFBlci1vcGVyYXRpb24gdGltZW91dCBpbiBtaWxsaXNlY29uZHMuIE9wZXJhdGlvbnMgZnVsZmlsbCBvbmNlIGB0aW1lb3V0YCBlbGFwc2VzIGlmIHRoZXkgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIFxuICAgICAgICBBcHBsaWVzIHRvIGVhY2ggZnV0dXJlIG9wZXJhdGlvbi5cbiAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidGltZW91dFwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1hc3NlcnRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjYXJyeW92ZXJDb25jdXJyZW5jeUNvdW50OiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsQ2FwOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5OiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICBxdWV1ZUNsYXNzOiBQcmlvcml0eVF1ZXVlLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCEodHlwZW9mIG9wdGlvbnMuaW50ZXJ2YWxDYXAgPT09ICdudW1iZXInICYmIG9wdGlvbnMuaW50ZXJ2YWxDYXAgPj0gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGludGVydmFsQ2FwXFxgIHRvIGJlIGEgbnVtYmVyIGZyb20gMSBhbmQgdXAsIGdvdCBcXGAkeyhfYiA9IChfYSA9IG9wdGlvbnMuaW50ZXJ2YWxDYXApID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJ31cXGAgKCR7dHlwZW9mIG9wdGlvbnMuaW50ZXJ2YWxDYXB9KWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludGVydmFsID09PSB1bmRlZmluZWQgfHwgIShOdW1iZXIuaXNGaW5pdGUob3B0aW9ucy5pbnRlcnZhbCkgJiYgb3B0aW9ucy5pbnRlcnZhbCA+PSAwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW50ZXJ2YWxcXGAgdG8gYmUgYSBmaW5pdGUgbnVtYmVyID49IDAsIGdvdCBcXGAkeyhfZCA9IChfYyA9IG9wdGlvbnMuaW50ZXJ2YWwpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJ31cXGAgKCR7dHlwZW9mIG9wdGlvbnMuaW50ZXJ2YWx9KWApO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9jYXJyeW92ZXJDb25jdXJyZW5jeUNvdW50LCBvcHRpb25zLmNhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2lzSW50ZXJ2YWxJZ25vcmVkLCBvcHRpb25zLmludGVydmFsQ2FwID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfHwgb3B0aW9ucy5pbnRlcnZhbCA9PT0gMCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxDYXAsIG9wdGlvbnMuaW50ZXJ2YWxDYXAsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsLCBvcHRpb25zLmludGVydmFsLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgbmV3IG9wdGlvbnMucXVldWVDbGFzcygpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9xdWV1ZUNsYXNzLCBvcHRpb25zLnF1ZXVlQ2xhc3MsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5jb25jdXJyZW5jeSA9IG9wdGlvbnMuY29uY3VycmVuY3k7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX3Rocm93T25UaW1lb3V0LCBvcHRpb25zLnRocm93T25UaW1lb3V0ID09PSB0cnVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9pc1BhdXNlZCwgb3B0aW9ucy5hdXRvU3RhcnQgPT09IGZhbHNlLCBcImZcIik7XG4gICAgfVxuICAgIGdldCBjb25jdXJyZW5jeSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9jb25jdXJyZW5jeSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgY29uY3VycmVuY3kobmV3Q29uY3VycmVuY3kpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIG5ld0NvbmN1cnJlbmN5ID09PSAnbnVtYmVyJyAmJiBuZXdDb25jdXJyZW5jeSA+PSAxKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgY29uY3VycmVuY3lcXGAgdG8gYmUgYSBudW1iZXIgZnJvbSAxIGFuZCB1cCwgZ290IFxcYCR7bmV3Q29uY3VycmVuY3l9XFxgICgke3R5cGVvZiBuZXdDb25jdXJyZW5jeX0pYCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2NvbmN1cnJlbmN5LCBuZXdDb25jdXJyZW5jeSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9wcm9jZXNzUXVldWUpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgIEFkZHMgYSBzeW5jIG9yIGFzeW5jIHRhc2sgdG8gdGhlIHF1ZXVlLiBBbHdheXMgcmV0dXJucyBhIHByb21pc2UuXG4gICAgKi9cbiAgICBhc3luYyBhZGQoZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICB2YXIgX2IsIF9jO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIChfYiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSwgX2IrKywgX2IpLCBcImZcIik7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsQ291bnQsIChfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbENvdW50LCBcImZcIiksIF9jKyssIF9jKSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoX2EgPSBvcHRpb25zLnNpZ25hbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFVzZSBBQk9SVF9FUlIgY29kZSB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDE2IChodHRwczovL25vZGVqcy5vcmcvZG9jcy9sYXRlc3QtdjE2LngvYXBpL2Vycm9ycy5odG1sI2Fib3J0X2VycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcignVGhlIHRhc2sgd2FzIGFib3J0ZWQuJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9ICh0aGlzLnRpbWVvdXQgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnRpbWVvdXQgPT09IHVuZGVmaW5lZCkgPyBmbih7IHNpZ25hbDogb3B0aW9ucy5zaWduYWwgfSkgOiBwVGltZW91dChQcm9taXNlLnJlc29sdmUoZm4oeyBzaWduYWw6IG9wdGlvbnMuc2lnbmFsIH0pKSwgKG9wdGlvbnMudGltZW91dCA9PT0gdW5kZWZpbmVkID8gdGhpcy50aW1lb3V0IDogb3B0aW9ucy50aW1lb3V0KSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGhyb3dPblRpbWVvdXQgPT09IHVuZGVmaW5lZCA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV90aHJvd09uVGltZW91dCwgXCJmXCIpIDogb3B0aW9ucy50aHJvd09uVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9uZXh0KS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgXCJmXCIpLmVucXVldWUocnVuLCBvcHRpb25zKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX3RyeVRvU3RhcnRBbm90aGVyKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdhZGQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgIFNhbWUgYXMgYC5hZGQoKWAsIGJ1dCBhY2NlcHRzIGFuIGFycmF5IG9mIHN5bmMgb3IgYXN5bmMgZnVuY3Rpb25zLlxuXG4gICAgQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgZnVuY3Rpb25zIGFyZSByZXNvbHZlZC5cbiAgICAqL1xuICAgIGFzeW5jIGFkZEFsbChmdW5jdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZ1bmN0aW9ucy5tYXAoYXN5bmMgKGZ1bmN0aW9uXykgPT4gdGhpcy5hZGQoZnVuY3Rpb25fLCBvcHRpb25zKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICBTdGFydCAob3IgcmVzdW1lKSBleGVjdXRpbmcgZW5xdWV1ZWQgdGFza3Mgd2l0aGluIGNvbmN1cnJlbmN5IGxpbWl0LiBObyBuZWVkIHRvIGNhbGwgdGhpcyBpZiBxdWV1ZSBpcyBub3QgcGF1c2VkICh2aWEgYG9wdGlvbnMuYXV0b1N0YXJ0ID0gZmFsc2VgIG9yIGJ5IGAucGF1c2UoKWAgbWV0aG9kLilcbiAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pc1BhdXNlZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaXNQYXVzZWQsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX3Byb2Nlc3NRdWV1ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgIFB1dCBxdWV1ZSBleGVjdXRpb24gb24gaG9sZC5cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaXNQYXVzZWQsIHRydWUsIFwiZlwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgQ2xlYXIgdGhlIHF1ZXVlLlxuICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgbmV3IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWVDbGFzcywgXCJmXCIpKSgpLCBcImZcIik7XG4gICAgfVxuICAgIC8qKlxuICAgIENhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuIFVzZWZ1bCBpZiB5b3UgZm9yIGV4YW1wbGUgYWRkIGFkZGl0aW9uYWwgaXRlbXMgYXQgYSBsYXRlciB0aW1lLlxuXG4gICAgQHJldHVybnMgQSBwcm9taXNlIHRoYXQgc2V0dGxlcyB3aGVuIHRoZSBxdWV1ZSBiZWNvbWVzIGVtcHR5LlxuICAgICovXG4gICAgYXN5bmMgb25FbXB0eSgpIHtcbiAgICAgICAgLy8gSW5zdGFudGx5IHJlc29sdmUgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfb25FdmVudCkuY2FsbCh0aGlzLCAnZW1wdHknKTtcbiAgICB9XG4gICAgLyoqXG4gICAgQHJldHVybnMgQSBwcm9taXNlIHRoYXQgc2V0dGxlcyB3aGVuIHRoZSBxdWV1ZSBzaXplIGlzIGxlc3MgdGhhbiB0aGUgZ2l2ZW4gbGltaXQ6IGBxdWV1ZS5zaXplIDwgbGltaXRgLlxuXG4gICAgSWYgeW91IHdhbnQgdG8gYXZvaWQgaGF2aW5nIHRoZSBxdWV1ZSBncm93IGJleW9uZCBhIGNlcnRhaW4gc2l6ZSB5b3UgY2FuIGBhd2FpdCBxdWV1ZS5vblNpemVMZXNzVGhhbigpYCBiZWZvcmUgYWRkaW5nIGEgbmV3IGl0ZW0uXG5cbiAgICBOb3RlIHRoYXQgdGhpcyBvbmx5IGxpbWl0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHdhaXRpbmcgdG8gc3RhcnQuIFRoZXJlIGNvdWxkIHN0aWxsIGJlIHVwIHRvIGBjb25jdXJyZW5jeWAgam9icyBhbHJlYWR5IHJ1bm5pbmcgdGhhdCB0aGlzIGNhbGwgZG9lcyBub3QgaW5jbHVkZSBpbiBpdHMgY2FsY3VsYXRpb24uXG4gICAgKi9cbiAgICBhc3luYyBvblNpemVMZXNzVGhhbihsaW1pdCkge1xuICAgICAgICAvLyBJbnN0YW50bHkgcmVzb2x2ZSBpZiB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5zaXplIDwgbGltaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9vbkV2ZW50KS5jYWxsKHRoaXMsICduZXh0JywgKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3F1ZXVlLCBcImZcIikuc2l6ZSA8IGxpbWl0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgVGhlIGRpZmZlcmVuY2Ugd2l0aCBgLm9uRW1wdHlgIGlzIHRoYXQgYC5vbklkbGVgIGd1YXJhbnRlZXMgdGhhdCBhbGwgd29yayBmcm9tIHRoZSBxdWV1ZSBoYXMgZmluaXNoZWQuIGAub25FbXB0eWAgbWVyZWx5IHNpZ25hbHMgdGhhdCB0aGUgcXVldWUgaXMgZW1wdHksIGJ1dCBpdCBjb3VsZCBtZWFuIHRoYXQgc29tZSBwcm9taXNlcyBoYXZlbid0IGNvbXBsZXRlZCB5ZXQuXG5cbiAgICBAcmV0dXJucyBBIHByb21pc2UgdGhhdCBzZXR0bGVzIHdoZW4gdGhlIHF1ZXVlIGJlY29tZXMgZW1wdHksIGFuZCBhbGwgcHJvbWlzZXMgaGF2ZSBjb21wbGV0ZWQ7IGBxdWV1ZS5zaXplID09PSAwICYmIHF1ZXVlLnBlbmRpbmcgPT09IDBgLlxuICAgICovXG4gICAgYXN5bmMgb25JZGxlKCkge1xuICAgICAgICAvLyBJbnN0YW50bHkgcmVzb2x2ZSBpZiBub25lIHBlbmRpbmcgYW5kIGlmIG5vdGhpbmcgZWxzZSBpcyBxdWV1ZWRcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSA9PT0gMCAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfb25FdmVudCkuY2FsbCh0aGlzLCAnaWRsZScpO1xuICAgIH1cbiAgICAvKipcbiAgICBTaXplIG9mIHRoZSBxdWV1ZSwgdGhlIG51bWJlciBvZiBxdWV1ZWQgaXRlbXMgd2FpdGluZyB0byBydW4uXG4gICAgKi9cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9xdWV1ZSwgXCJmXCIpLnNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgIFNpemUgb2YgdGhlIHF1ZXVlLCBmaWx0ZXJlZCBieSB0aGUgZ2l2ZW4gb3B0aW9ucy5cblxuICAgIEZvciBleGFtcGxlLCB0aGlzIGNhbiBiZSB1c2VkIHRvIGZpbmQgdGhlIG51bWJlciBvZiBpdGVtcyByZW1haW5pbmcgaW4gdGhlIHF1ZXVlIHdpdGggYSBzcGVjaWZpYyBwcmlvcml0eSBsZXZlbC5cbiAgICAqL1xuICAgIHNpemVCeShvcHRpb25zKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWFycmF5LWNhbGxiYWNrLXJlZmVyZW5jZVxuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3F1ZXVlLCBcImZcIikuZmlsdGVyKG9wdGlvbnMpLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgTnVtYmVyIG9mIHJ1bm5pbmcgaXRlbXMgKG5vIGxvbmdlciBpbiB0aGUgcXVldWUpLlxuICAgICovXG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcGVuZGluZ0NvdW50LCBcImZcIik7XG4gICAgfVxuICAgIC8qKlxuICAgIFdoZXRoZXIgdGhlIHF1ZXVlIGlzIGN1cnJlbnRseSBwYXVzZWQuXG4gICAgKi9cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaXNQYXVzZWQsIFwiZlwiKTtcbiAgICB9XG59XG5fUFF1ZXVlX2NhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2lzSW50ZXJ2YWxJZ25vcmVkID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pbnRlcnZhbENvdW50ID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pbnRlcnZhbENhcCA9IG5ldyBXZWFrTWFwKCksIF9QUXVldWVfaW50ZXJ2YWwgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2ludGVydmFsRW5kID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pbnRlcnZhbElkID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV90aW1lb3V0SWQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX3F1ZXVlID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9xdWV1ZUNsYXNzID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9wZW5kaW5nQ291bnQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2NvbmN1cnJlbmN5ID0gbmV3IFdlYWtNYXAoKSwgX1BRdWV1ZV9pc1BhdXNlZCA9IG5ldyBXZWFrTWFwKCksIF9QUXVldWVfdGhyb3dPblRpbWVvdXQgPSBuZXcgV2Vha01hcCgpLCBfUFF1ZXVlX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9QUXVldWVfZG9lc0ludGVydmFsQWxsb3dBbm90aGVyX2dldCA9IGZ1bmN0aW9uIF9QUXVldWVfZG9lc0ludGVydmFsQWxsb3dBbm90aGVyX2dldCgpIHtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2lzSW50ZXJ2YWxJZ25vcmVkLCBcImZcIikgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsQ291bnQsIFwiZlwiKSA8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbENhcCwgXCJmXCIpO1xufSwgX1BRdWV1ZV9kb2VzQ29uY3VycmVudEFsbG93QW5vdGhlcl9nZXQgPSBmdW5jdGlvbiBfUFF1ZXVlX2RvZXNDb25jdXJyZW50QWxsb3dBbm90aGVyX2dldCgpIHtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3BlbmRpbmdDb3VudCwgXCJmXCIpIDwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2NvbmN1cnJlbmN5LCBcImZcIik7XG59LCBfUFF1ZXVlX25leHQgPSBmdW5jdGlvbiBfUFF1ZXVlX25leHQoKSB7XG4gICAgdmFyIF9hO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSwgX2EtLSwgX2EpLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfdHJ5VG9TdGFydEFub3RoZXIpLmNhbGwodGhpcyk7XG4gICAgdGhpcy5lbWl0KCduZXh0Jyk7XG59LCBfUFF1ZXVlX2VtaXRFdmVudHMgPSBmdW5jdGlvbiBfUFF1ZXVlX2VtaXRFdmVudHMoKSB7XG4gICAgdGhpcy5lbWl0KCdlbXB0eScpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcGVuZGluZ0NvdW50LCBcImZcIikgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbWl0KCdpZGxlJyk7XG4gICAgfVxufSwgX1BRdWV1ZV9vblJlc3VtZUludGVydmFsID0gZnVuY3Rpb24gX1BRdWV1ZV9vblJlc3VtZUludGVydmFsKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX29uSW50ZXJ2YWwpLmNhbGwodGhpcyk7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfaW5pdGlhbGl6ZUludGVydmFsSWZOZWVkZWQpLmNhbGwodGhpcyk7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX3RpbWVvdXRJZCwgdW5kZWZpbmVkLCBcImZcIik7XG59LCBfUFF1ZXVlX2lzSW50ZXJ2YWxQYXVzZWRfZ2V0ID0gZnVuY3Rpb24gX1BRdWV1ZV9pc0ludGVydmFsUGF1c2VkX2dldCgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxFbmQsIFwiZlwiKSAtIG5vdztcbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICAgICAgLy8gQWN0IGFzIHRoZSBpbnRlcnZhbCB3YXMgZG9uZVxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byByZXN1bWUgaXQgaGVyZSBiZWNhdXNlIGl0IHdpbGwgYmUgcmVzdW1lZCBvbiBsaW5lIDE2MFxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsQ291bnQsIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfY2FycnlvdmVyQ29uY3VycmVuY3lDb3VudCwgXCJmXCIpKSA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSA6IDAsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFjdCBhcyB0aGUgaW50ZXJ2YWwgaXMgcGVuZGluZ1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV90aW1lb3V0SWQsIFwiZlwiKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX3RpbWVvdXRJZCwgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnN0YW5jZXMsIFwibVwiLCBfUFF1ZXVlX29uUmVzdW1lSW50ZXJ2YWwpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpLCBcImZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59LCBfUFF1ZXVlX3RyeVRvU3RhcnRBbm90aGVyID0gZnVuY3Rpb24gX1BRdWV1ZV90cnlUb1N0YXJ0QW5vdGhlcigpIHtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3F1ZXVlLCBcImZcIikuc2l6ZSA9PT0gMCkge1xuICAgICAgICAvLyBXZSBjYW4gY2xlYXIgdGhlIGludGVydmFsIChcInBhdXNlXCIpXG4gICAgICAgIC8vIEJlY2F1c2Ugd2UgY2FuIHJlZG8gaXQgbGF0ZXIgKFwicmVzdW1lXCIpXG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbElkLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbElkLCB1bmRlZmluZWQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2luc3RhbmNlcywgXCJtXCIsIF9QUXVldWVfZW1pdEV2ZW50cykuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pc1BhdXNlZCwgXCJmXCIpKSB7XG4gICAgICAgIGNvbnN0IGNhbkluaXRpYWxpemVJbnRlcnZhbCA9ICFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcImFcIiwgX1BRdWV1ZV9pc0ludGVydmFsUGF1c2VkX2dldCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcImFcIiwgX1BRdWV1ZV9kb2VzSW50ZXJ2YWxBbGxvd0Fub3RoZXJfZ2V0KSAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcImFcIiwgX1BRdWV1ZV9kb2VzQ29uY3VycmVudEFsbG93QW5vdGhlcl9nZXQpKSB7XG4gICAgICAgICAgICBjb25zdCBqb2IgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfcXVldWUsIFwiZlwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICBpZiAoIWpvYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBqb2IoKTtcbiAgICAgICAgICAgIGlmIChjYW5Jbml0aWFsaXplSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9pbml0aWFsaXplSW50ZXJ2YWxJZk5lZWRlZCkuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0sIF9QUXVldWVfaW5pdGlhbGl6ZUludGVydmFsSWZOZWVkZWQgPSBmdW5jdGlvbiBfUFF1ZXVlX2luaXRpYWxpemVJbnRlcnZhbElmTmVlZGVkKCkge1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaXNJbnRlcnZhbElnbm9yZWQsIFwiZlwiKSB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9vbkludGVydmFsKS5jYWxsKHRoaXMpO1xuICAgIH0sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbCwgXCJmXCIpKSwgXCJmXCIpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbEVuZCwgRGF0ZS5ub3coKSArIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbCwgXCJmXCIpLCBcImZcIik7XG59LCBfUFF1ZXVlX29uSW50ZXJ2YWwgPSBmdW5jdGlvbiBfUFF1ZXVlX29uSW50ZXJ2YWwoKSB7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbENvdW50LCBcImZcIikgPT09IDAgJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX3BlbmRpbmdDb3VudCwgXCJmXCIpID09PSAwICYmIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9pbnRlcnZhbElkLCBcImZcIikpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxJZCwgXCJmXCIpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUFF1ZXVlX2ludGVydmFsSWQsIHVuZGVmaW5lZCwgXCJmXCIpO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QUXVldWVfaW50ZXJ2YWxDb3VudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUFF1ZXVlX2NhcnJ5b3ZlckNvbmN1cnJlbmN5Q291bnQsIFwiZlwiKSA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BRdWV1ZV9wZW5kaW5nQ291bnQsIFwiZlwiKSA6IDAsIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV9wcm9jZXNzUXVldWUpLmNhbGwodGhpcyk7XG59LCBfUFF1ZXVlX3Byb2Nlc3NRdWV1ZSA9IGZ1bmN0aW9uIF9QUXVldWVfcHJvY2Vzc1F1ZXVlKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIHdoaWxlIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9QUXVldWVfaW5zdGFuY2VzLCBcIm1cIiwgX1BRdWV1ZV90cnlUb1N0YXJ0QW5vdGhlcikuY2FsbCh0aGlzKSkgeyB9XG59LCBfUFF1ZXVlX29uRXZlbnQgPSBhc3luYyBmdW5jdGlvbiBfUFF1ZXVlX29uRXZlbnQoZXZlbnQsIGZpbHRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyICYmICFmaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbn07XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPGRpdiByZWY9XCJpbmZpbml0ZVNjcm9sXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiKHsgc291cmNlLCBtYW5nYXMgfSwgaW5kZXgpIGluIHNlYXJjaFJlc3VsdHNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNiBxLW1hLW1kXCI+e3sgc291cmNlLmRpc3BsYXlOYW1lIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXg6IGF1dG9cIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgdi1mb3I9XCJtYW5nYSBpbiBtYW5nYXNcIlxuICAgICAgICAgICAgICA6a2V5PVwibWFuZ2EuaWRcIlxuICAgICAgICAgICAgICA6c3R5bGU9XCJ3aWR0XCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWFuZ2FDYXJkIDptYW5nYT1cIm1hbmdhXCIgOmRpc3BsYXk9XCJEaXNwbFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFtYW5nYXMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSBxLW1hLW1kXCI+XG4gICAgICAgICAgICAgIE5vIE1hbmdhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJxdWV1ZS5wZW5kaW5nXCIgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgcS1teS1tZFwiPlxuICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgbWFuZ2EsIHNvdXJjZSwgc291cmNlcGFnZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IFBRdWV1ZSBmcm9tICdwLXF1ZXVlJztcbmltcG9ydCBtYW5nYUNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL21hbmdhQ2FyZC52dWUnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IERpc3BsYXkgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9GaWx0ZXJzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIGNvbXBvbmVudHM6IHsgbWFuZ2FDYXJkIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHF1ZXVlID0gbmV3IFBRdWV1ZSh7IGNvbmN1cnJlbmN5OiA1IH0pO1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSByZWYobmV3IEFib3J0Q29udHJvbGxlcigpKTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVmKDx7IHNvdXJjZTogc291cmNlOyBtYW5nYXM6IG1hbmdhW10gfVtdPltdKTtcbiAgICBjb25zdCBzb3VyY2VzID0gcmVmKDxzb3VyY2VbXT5bXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaFJlc3VsdHMsXG4gICAgICBxdWV1ZSxcbiAgICAgIGNvbnRyb2xsZXIsXG4gICAgICBzb3VyY2VzLFxuICAgICAgZGlzcGxheTogcmVmKERpc3BsYXkoKSksXG4gICAgICBkZXZpZGVyOiByZWY8bnVtYmVyPigwKSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIERpc3BsKCkge1xuICAgICAgaWYgKHRoaXMuZGlzcGxheS5EaXNwbGF5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdjb21wYWN0JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXNwbGF5LkRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuICdjb21mb3J0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnY29tcGFjdCc7XG4gICAgfSxcbiAgICB3aWR0KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gYHdpZHRoOiBjYWxjKDEwMCUgLyAke3RoaXMuZGV2aWRlcn0pOyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7dHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLW91dDtoZWlnaHQ6IGZpdC1jb250ZW50O2A7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlLnF1ZXJ5LnEnKCkge1xuICAgICAgdGhpcy5kb1NlYXJjaCgpO1xuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCA9IGRlYm91bmNlKHRoaXMuY2FsY1dpZHRoLCA1MDApO1xuICAgIHRoaXMuJGFwaVxuICAgICAgLmdldCgnL2FwaS92MS9zb3VyY2UvbGlzdCcpXG4gICAgICAudGhlbigoeyBkYXRhOiBzb3VyY2VzIH06IEF4aW9zUmVzcG9uc2U8c291cmNlW10+KSA9PiB7XG4gICAgICAgIHRoaXMuc291cmNlcyA9IHNvdXJjZXM7XG4gICAgICAgIHRoaXMuZG9TZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIHRoaXMucXVldWUub24oXG4gICAgICAnY29tcGxldGVkJyxcbiAgICAgIChyZXN1bHQ6IHsgc291cmNlOiBzb3VyY2U7IG1hbmdhczogbWFuZ2FbXSB9IHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5zZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAuY29uY2F0KHJlc3VsdClcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhLm1hbmdhcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChiLm1hbmdhcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FsY1dpZHRoKCk7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1dpZHRoKTtcbiAgICB9KTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjV2lkdGgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGNhbGNXaWR0aCgpIHtcbiAgICAgIGNvbnN0IGdyaWQgPSA8RWxlbWVudD50aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ107XG4gICAgICBjb25zdCBpZGVhbCA9IDxudW1iZXI+dGhpcy4kcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWl0ZW1XJyk7XG4gICAgICBpZiAoZ3JpZC5jbGllbnRXaWR0aCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHRoaXMuZGV2aWRlciA9IE1hdGgucm91bmQoZ3JpZC5jbGllbnRXaWR0aCAvIGlkZWFsKTtcbiAgICB9LFxuICAgIGRvU2VhcmNoKCkge1xuICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5WydxJ10pIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuICAgICAgICBpZiAodGhpcy5xdWV1ZS5wZW5kaW5nKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5xdWV1ZS5hZGQoXG4gICAgICAgICAgICBhc3luYyAoeyBzaWduYWwgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IDxQcm9taXNlPEF4aW9zUmVzcG9uc2U8c291cmNlcGFnZT4+PihcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGFwaS5nZXQoXG4gICAgICAgICAgICAgICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3NvdXJjZS5pZH0vc2VhcmNoP3NlYXJjaFRlcm09JHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZS5xdWVyeVsncSddIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0mcGFnZU51bT0xYCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIG1hbmdhczogKGF3YWl0IHJlcXVlc3QpLmRhdGEubWFuZ2FMaXN0LFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNvdXJjZTogc291cmNlLCBtYW5nYXM6IFtdIH07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHsgc291cmNlOiBzb3VyY2UsIG1hbmdhczogW10gfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5jb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJBYm9ydEVycm9yIiwidGltZW91dEVycm9yIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInRoaXMiLCJfUFF1ZXVlX2RvZXNJbnRlcnZhbEFsbG93QW5vdGhlcl9nZXQiLCJfUFF1ZXVlX2RvZXNDb25jdXJyZW50QWxsb3dBbm90aGVyX2dldCIsIl9QUXVldWVfbmV4dCIsIl9QUXVldWVfZW1pdEV2ZW50cyIsIl9QUXVldWVfb25SZXN1bWVJbnRlcnZhbCIsIl9QUXVldWVfaXNJbnRlcnZhbFBhdXNlZF9nZXQiLCJfUFF1ZXVlX3RyeVRvU3RhcnRBbm90aGVyIiwiX1BRdWV1ZV9pbml0aWFsaXplSW50ZXJ2YWxJZk5lZWRlZCIsIl9QUXVldWVfb25JbnRlcnZhbCIsIl9QUXVldWVfcHJvY2Vzc1F1ZXVlIiwiX1BRdWV1ZV9vbkV2ZW50IiwiRGlzcGxheSIsInNvdXJjZSIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfdG9EaXNwbGF5U3RyaW5nIiwibWFuZ2EiLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQUksTUFBTSxPQUFPLFVBQVUsZ0JBQ3ZCLFNBQVM7QUFTYixXQUFTLFNBQVM7QUFBQSxFQUFFO0FBU3BCLE1BQUksT0FBTyxRQUFRO0FBQ2pCLFdBQU8sWUFBWSx1QkFBTyxPQUFPLElBQUk7QUFNckMsUUFBSSxDQUFDLElBQUksT0FBTSxFQUFHO0FBQVcsZUFBUztBQUFBLEVBQ3hDO0FBV0EsV0FBUyxHQUFHLElBQUksU0FBUyxNQUFNO0FBQzdCLFNBQUssS0FBSztBQUNWLFNBQUssVUFBVTtBQUNmLFNBQUssT0FBTyxRQUFRO0FBQUEsRUFDdEI7QUFhQSxXQUFTLFlBQVksU0FBUyxPQUFPLElBQUksU0FBUyxNQUFNO0FBQ3RELFFBQUksT0FBTyxPQUFPLFlBQVk7QUFDNUIsWUFBTSxJQUFJLFVBQVUsaUNBQWlDO0FBQUEsSUFDdEQ7QUFFRCxRQUFJLFdBQVcsSUFBSSxHQUFHLElBQUksV0FBVyxTQUFTLElBQUksR0FDOUMsTUFBTSxTQUFTLFNBQVMsUUFBUTtBQUVwQyxRQUFJLENBQUMsUUFBUSxRQUFRO0FBQU0sY0FBUSxRQUFRLE9BQU8sVUFBVSxRQUFRO0FBQUEsYUFDM0QsQ0FBQyxRQUFRLFFBQVEsS0FBSztBQUFJLGNBQVEsUUFBUSxLQUFLLEtBQUssUUFBUTtBQUFBO0FBQ2hFLGNBQVEsUUFBUSxPQUFPLENBQUMsUUFBUSxRQUFRLE1BQU0sUUFBUTtBQUUz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
