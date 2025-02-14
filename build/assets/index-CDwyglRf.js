function xd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var pa =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Zl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function ar(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var g0 = { exports: {} },
  eu = {},
  y0 = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ts = Symbol.for('react.element'),
  Dx = Symbol.for('react.portal'),
  Fx = Symbol.for('react.fragment'),
  Bx = Symbol.for('react.strict_mode'),
  Ux = Symbol.for('react.profiler'),
  Hx = Symbol.for('react.provider'),
  Vx = Symbol.for('react.context'),
  Wx = Symbol.for('react.forward_ref'),
  Kx = Symbol.for('react.suspense'),
  Xx = Symbol.for('react.memo'),
  Gx = Symbol.for('react.lazy'),
  dh = Symbol.iterator;
function Yx(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (dh && e[dh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var v0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  x0 = Object.assign,
  w0 = {};
function Ro(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = w0),
    (this.updater = n || v0);
}
Ro.prototype.isReactComponent = {};
Ro.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ro.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function S0() {}
S0.prototype = Ro.prototype;
function wd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = w0),
    (this.updater = n || v0);
}
var Sd = (wd.prototype = new S0());
Sd.constructor = wd;
x0(Sd, Ro.prototype);
Sd.isPureReactComponent = !0;
var ph = Array.isArray,
  b0 = Object.prototype.hasOwnProperty,
  bd = { current: null },
  k0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function C0(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      b0.call(t, r) && !k0.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: ts,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: bd.current,
  };
}
function qx(e, t) {
  return {
    $$typeof: ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function kd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ts;
}
function Qx(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hh = /\/+/g;
function cc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Qx('' + e.key)
    : t.toString(36);
}
function Us(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ts:
          case Dx:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + cc(a, 0) : r),
      ph(i)
        ? ((n = ''),
          e != null && (n = e.replace(hh, '$&/') + '/'),
          Us(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (kd(i) &&
            (i = qx(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(hh, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), ph(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var l = r + cc(o, s);
      a += Us(o, t, n, l, i);
    }
  else if (((l = Yx(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + cc(o, s++)), (a += Us(o, t, n, l, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function ys(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Us(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Jx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pt = { current: null },
  Hs = { transition: null },
  Zx = {
    ReactCurrentDispatcher: Pt,
    ReactCurrentBatchConfig: Hs,
    ReactCurrentOwner: bd,
  };
function E0() {
  throw Error('act(...) is not supported in production builds of React.');
}
le.Children = {
  map: ys,
  forEach: function (e, t, n) {
    ys(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ys(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ys(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
le.Component = Ro;
le.Fragment = Fx;
le.Profiler = Ux;
le.PureComponent = wd;
le.StrictMode = Bx;
le.Suspense = Kx;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zx;
le.act = E0;
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = x0({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = bd.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      b0.call(t, l) &&
        !k0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ts, type: e.type, key: i, ref: o, props: r, _owner: a };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hx, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = C0;
le.createFactory = function (e) {
  var t = C0.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: Wx, render: e };
};
le.isValidElement = kd;
le.lazy = function (e) {
  return { $$typeof: Gx, _payload: { _status: -1, _result: e }, _init: Jx };
};
le.memo = function (e, t) {
  return { $$typeof: Xx, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = Hs.transition;
  Hs.transition = {};
  try {
    e();
  } finally {
    Hs.transition = t;
  }
};
le.unstable_act = E0;
le.useCallback = function (e, t) {
  return Pt.current.useCallback(e, t);
};
le.useContext = function (e) {
  return Pt.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return Pt.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return Pt.current.useEffect(e, t);
};
le.useId = function () {
  return Pt.current.useId();
};
le.useImperativeHandle = function (e, t, n) {
  return Pt.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function (e, t) {
  return Pt.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return Pt.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return Pt.current.useMemo(e, t);
};
le.useReducer = function (e, t, n) {
  return Pt.current.useReducer(e, t, n);
};
le.useRef = function (e) {
  return Pt.current.useRef(e);
};
le.useState = function (e) {
  return Pt.current.useState(e);
};
le.useSyncExternalStore = function (e, t, n) {
  return Pt.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function () {
  return Pt.current.useTransition();
};
le.version = '18.3.1';
y0.exports = le;
var w = y0.exports;
const ht = Zl(w),
  dl = xd({ __proto__: null, default: ht }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ew = w,
  tw = Symbol.for('react.element'),
  nw = Symbol.for('react.fragment'),
  rw = Object.prototype.hasOwnProperty,
  iw = ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ow = { key: !0, ref: !0, __self: !0, __source: !0 };
function P0(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) rw.call(t, r) && !ow.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: tw,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: iw.current,
  };
}
eu.Fragment = nw;
eu.jsx = P0;
eu.jsxs = P0;
g0.exports = eu;
var _ = g0.exports,
  Jc = {},
  _0 = { exports: {} },
  Yt = {},
  R0 = { exports: {} },
  $0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, M) {
    var j = O.length;
    O.push(M);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        re = O[q];
      if (0 < i(re, M)) (O[q] = M), (O[j] = re), (j = q);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var M = O[0],
      j = O.pop();
    if (j !== M) {
      O[0] = j;
      e: for (var q = 0, re = O.length, ye = re >>> 1; q < ye; ) {
        var se = 2 * (q + 1) - 1,
          Me = O[se],
          ce = se + 1,
          yt = O[ce];
        if (0 > i(Me, j))
          ce < re && 0 > i(yt, Me)
            ? ((O[q] = yt), (O[ce] = j), (q = ce))
            : ((O[q] = Me), (O[se] = j), (q = se));
        else if (ce < re && 0 > i(yt, j)) (O[q] = yt), (O[ce] = j), (q = ce);
        else break e;
      }
    }
    return M;
  }
  function i(O, M) {
    var j = O.sortIndex - M.sortIndex;
    return j !== 0 ? j : O.id - M.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    f = 1,
    d = null,
    c = 3,
    y = !1,
    m = !1,
    h = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(O) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= O)
        r(u), (M.sortIndex = M.expirationTime), t(l, M);
      else break;
      M = n(u);
    }
  }
  function S(O) {
    if (((h = !1), x(O), !m))
      if (n(l) !== null) (m = !0), z(E);
      else {
        var M = n(u);
        M !== null && F(S, M.startTime - O);
      }
  }
  function E(O, M) {
    (m = !1), h && ((h = !1), g(N), (N = -1)), (y = !0);
    var j = c;
    try {
      for (
        x(M), d = n(l);
        d !== null && (!(d.expirationTime > M) || (O && !H()));

      ) {
        var q = d.callback;
        if (typeof q == 'function') {
          (d.callback = null), (c = d.priorityLevel);
          var re = q(d.expirationTime <= M);
          (M = e.unstable_now()),
            typeof re == 'function' ? (d.callback = re) : d === n(l) && r(l),
            x(M);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var ye = !0;
      else {
        var se = n(u);
        se !== null && F(S, se.startTime - M), (ye = !1);
      }
      return ye;
    } finally {
      (d = null), (c = j), (y = !1);
    }
  }
  var v = !1,
    b = null,
    N = -1,
    L = 5,
    A = -1;
  function H() {
    return !(e.unstable_now() - A < L);
  }
  function G() {
    if (b !== null) {
      var O = e.unstable_now();
      A = O;
      var M = !0;
      try {
        M = b(!0, O);
      } finally {
        M ? Y() : ((v = !1), (b = null));
      }
    } else v = !1;
  }
  var Y;
  if (typeof p == 'function')
    Y = function () {
      p(G);
    };
  else if (typeof MessageChannel < 'u') {
    var K = new MessageChannel(),
      R = K.port2;
    (K.port1.onmessage = G),
      (Y = function () {
        R.postMessage(null);
      });
  } else
    Y = function () {
      C(G, 0);
    };
  function z(O) {
    (b = O), v || ((v = !0), Y());
  }
  function F(O, M) {
    N = C(function () {
      O(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (L = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = c;
      }
      var j = c;
      c = M;
      try {
        return O();
      } finally {
        c = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, M) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var j = c;
      c = O;
      try {
        return M();
      } finally {
        c = j;
      }
    }),
    (e.unstable_scheduleCallback = function (O, M, j) {
      var q = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? q + j : q))
          : (j = q),
        O)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = j + re),
        (O = {
          id: f++,
          callback: M,
          priorityLevel: O,
          startTime: j,
          expirationTime: re,
          sortIndex: -1,
        }),
        j > q
          ? ((O.sortIndex = j),
            t(u, O),
            n(l) === null &&
              O === n(u) &&
              (h ? (g(N), (N = -1)) : (h = !0), F(S, j - q)))
          : ((O.sortIndex = re), t(l, O), m || y || ((m = !0), z(E))),
        O
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (O) {
      var M = c;
      return function () {
        var j = c;
        c = M;
        try {
          return O.apply(this, arguments);
        } finally {
          c = j;
        }
      };
    });
})($0);
R0.exports = $0;
var aw = R0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sw = w,
  Gt = aw;
function I(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var O0 = new Set(),
  _a = {};
function vi(e, t) {
  po(e, t), po(e + 'Capture', t);
}
function po(e, t) {
  for (_a[e] = t, e = 0; e < t.length; e++) O0.add(t[e]);
}
var tr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zc = Object.prototype.hasOwnProperty,
  lw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mh = {},
  gh = {};
function uw(e) {
  return Zc.call(gh, e)
    ? !0
    : Zc.call(mh, e)
    ? !1
    : lw.test(e)
    ? (gh[e] = !0)
    : ((mh[e] = !0), !1);
}
function cw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function fw(e, t, n, r) {
  if (t === null || typeof t > 'u' || cw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _t(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var gt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    gt[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  gt[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  gt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  gt[e] = new _t(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    gt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  gt[e] = new _t(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  gt[e] = new _t(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  gt[e] = new _t(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  gt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cd = /[\-:]([a-z])/g;
function Ed(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Cd, Ed);
    gt[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Cd, Ed);
    gt[t] = new _t(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Cd, Ed);
  gt[t] = new _t(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  gt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
gt.xlinkHref = new _t(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  gt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pd(e, t, n, r) {
  var i = gt.hasOwnProperty(t) ? gt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (fw(t, n, i, r) && (n = null),
    r || i === null
      ? uw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var sr = sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vs = Symbol.for('react.element'),
  Vi = Symbol.for('react.portal'),
  Wi = Symbol.for('react.fragment'),
  _d = Symbol.for('react.strict_mode'),
  ef = Symbol.for('react.profiler'),
  z0 = Symbol.for('react.provider'),
  T0 = Symbol.for('react.context'),
  Rd = Symbol.for('react.forward_ref'),
  tf = Symbol.for('react.suspense'),
  nf = Symbol.for('react.suspense_list'),
  $d = Symbol.for('react.memo'),
  Sr = Symbol.for('react.lazy'),
  N0 = Symbol.for('react.offscreen'),
  yh = Symbol.iterator;
function Bo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yh && e[yh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Fe = Object.assign,
  fc;
function oa(e) {
  if (fc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fc = (t && t[1]) || '';
    }
  return (
    `
` +
    fc +
    e
  );
}
var dc = !1;
function pc(e, t) {
  if (!e || dc) return '';
  dc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (dc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? oa(e) : '';
}
function dw(e) {
  switch (e.tag) {
    case 5:
      return oa(e.type);
    case 16:
      return oa('Lazy');
    case 13:
      return oa('Suspense');
    case 19:
      return oa('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = pc(e.type, !1)), e;
    case 11:
      return (e = pc(e.type.render, !1)), e;
    case 1:
      return (e = pc(e.type, !0)), e;
    default:
      return '';
  }
}
function rf(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Wi:
      return 'Fragment';
    case Vi:
      return 'Portal';
    case ef:
      return 'Profiler';
    case _d:
      return 'StrictMode';
    case tf:
      return 'Suspense';
    case nf:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case T0:
        return (e.displayName || 'Context') + '.Consumer';
      case z0:
        return (e._context.displayName || 'Context') + '.Provider';
      case Rd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case $d:
        return (
          (t = e.displayName || null), t !== null ? t : rf(e.type) || 'Memo'
        );
      case Sr:
        (t = e._payload), (e = e._init);
        try {
          return rf(e(t));
        } catch {}
    }
  return null;
}
function pw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return rf(t);
    case 8:
      return t === _d ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Ir(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function L0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function hw(e) {
  var t = L0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = '' + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xs(e) {
  e._valueTracker || (e._valueTracker = hw(e));
}
function j0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = L0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function pl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function of(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vh(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function M0(e, t) {
  (t = t.checked), t != null && Pd(e, 'checked', t, !1);
}
function af(e, t) {
  M0(e, t);
  var n = Ir(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? sf(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && sf(e, t.type, Ir(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xh(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function sf(e, t, n) {
  (t !== 'number' || pl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var aa = Array.isArray;
function io(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Ir(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function lf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function wh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (aa(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Ir(n) };
}
function I0(e, t) {
  var n = Ir(t.value),
    r = Ir(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Sh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function A0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function uf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? A0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ws,
  D0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ws = ws || document.createElement('div'),
          ws.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ws.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ra(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ha = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  mw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ha).forEach(function (e) {
  mw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ha[t] = ha[e]);
  });
});
function F0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ha.hasOwnProperty(e) && ha[e])
    ? ('' + t).trim()
    : t + 'px';
}
function B0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = F0(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var gw = Fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function cf(e, t) {
  if (t) {
    if (gw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(I(62));
  }
}
function ff(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var df = null;
function Od(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pf = null,
  oo = null,
  ao = null;
function bh(e) {
  if ((e = is(e))) {
    if (typeof pf != 'function') throw Error(I(280));
    var t = e.stateNode;
    t && ((t = ou(t)), pf(e.stateNode, e.type, t));
  }
}
function U0(e) {
  oo ? (ao ? ao.push(e) : (ao = [e])) : (oo = e);
}
function H0() {
  if (oo) {
    var e = oo,
      t = ao;
    if (((ao = oo = null), bh(e), t)) for (e = 0; e < t.length; e++) bh(t[e]);
  }
}
function V0(e, t) {
  return e(t);
}
function W0() {}
var hc = !1;
function K0(e, t, n) {
  if (hc) return e(t, n);
  hc = !0;
  try {
    return V0(e, t, n);
  } finally {
    (hc = !1), (oo !== null || ao !== null) && (W0(), H0());
  }
}
function $a(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ou(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(I(231, t, typeof n));
  return n;
}
var hf = !1;
if (tr)
  try {
    var Uo = {};
    Object.defineProperty(Uo, 'passive', {
      get: function () {
        hf = !0;
      },
    }),
      window.addEventListener('test', Uo, Uo),
      window.removeEventListener('test', Uo, Uo);
  } catch {
    hf = !1;
  }
function yw(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var ma = !1,
  hl = null,
  ml = !1,
  mf = null,
  vw = {
    onError: function (e) {
      (ma = !0), (hl = e);
    },
  };
function xw(e, t, n, r, i, o, a, s, l) {
  (ma = !1), (hl = null), yw.apply(vw, arguments);
}
function ww(e, t, n, r, i, o, a, s, l) {
  if ((xw.apply(this, arguments), ma)) {
    if (ma) {
      var u = hl;
      (ma = !1), (hl = null);
    } else throw Error(I(198));
    ml || ((ml = !0), (mf = u));
  }
}
function xi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function X0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kh(e) {
  if (xi(e) !== e) throw Error(I(188));
}
function Sw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xi(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return kh(i), e;
        if (o === r) return kh(i), t;
        o = o.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function G0(e) {
  return (e = Sw(e)), e !== null ? Y0(e) : null;
}
function Y0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Y0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var q0 = Gt.unstable_scheduleCallback,
  Ch = Gt.unstable_cancelCallback,
  bw = Gt.unstable_shouldYield,
  kw = Gt.unstable_requestPaint,
  Ke = Gt.unstable_now,
  Cw = Gt.unstable_getCurrentPriorityLevel,
  zd = Gt.unstable_ImmediatePriority,
  Q0 = Gt.unstable_UserBlockingPriority,
  gl = Gt.unstable_NormalPriority,
  Ew = Gt.unstable_LowPriority,
  J0 = Gt.unstable_IdlePriority,
  tu = null,
  Fn = null;
function Pw(e) {
  if (Fn && typeof Fn.onCommitFiberRoot == 'function')
    try {
      Fn.onCommitFiberRoot(tu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Cn = Math.clz32 ? Math.clz32 : $w,
  _w = Math.log,
  Rw = Math.LN2;
function $w(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_w(e) / Rw) | 0)) | 0;
}
var Ss = 64,
  bs = 4194304;
function sa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (r = sa(s)) : ((o &= a), o !== 0 && (r = sa(o)));
  } else (a = n & ~i), a !== 0 ? (r = sa(a)) : o !== 0 && (r = sa(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Cn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ow(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function zw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Cn(o),
      s = 1 << a,
      l = i[a];
    l === -1
      ? (!(s & n) || s & r) && (i[a] = Ow(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function gf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Z0() {
  var e = Ss;
  return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
}
function mc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ns(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Cn(t)),
    (e[t] = n);
}
function Tw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Cn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Td(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Cn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Se = 0;
function ey(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ty,
  Nd,
  ny,
  ry,
  iy,
  yf = !1,
  ks = [],
  $r = null,
  Or = null,
  zr = null,
  Oa = new Map(),
  za = new Map(),
  kr = [],
  Nw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Eh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      $r = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Or = null;
      break;
    case 'mouseover':
    case 'mouseout':
      zr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Oa.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      za.delete(t.pointerId);
  }
}
function Ho(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = is(t)), t !== null && Nd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Lw(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return ($r = Ho($r, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Or = Ho(Or, e, t, n, r, i)), !0;
    case 'mouseover':
      return (zr = Ho(zr, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Oa.set(o, Ho(Oa.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), za.set(o, Ho(za.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function oy(e) {
  var t = ei(e.target);
  if (t !== null) {
    var n = xi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = X0(n)), t !== null)) {
          (e.blockedOn = t),
            iy(e.priority, function () {
              ny(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (df = r), n.target.dispatchEvent(r), (df = null);
    } else return (t = is(n)), t !== null && Nd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ph(e, t, n) {
  Vs(e) && n.delete(t);
}
function jw() {
  (yf = !1),
    $r !== null && Vs($r) && ($r = null),
    Or !== null && Vs(Or) && (Or = null),
    zr !== null && Vs(zr) && (zr = null),
    Oa.forEach(Ph),
    za.forEach(Ph);
}
function Vo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yf ||
      ((yf = !0),
      Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority, jw)));
}
function Ta(e) {
  function t(i) {
    return Vo(i, e);
  }
  if (0 < ks.length) {
    Vo(ks[0], e);
    for (var n = 1; n < ks.length; n++) {
      var r = ks[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $r !== null && Vo($r, e),
      Or !== null && Vo(Or, e),
      zr !== null && Vo(zr, e),
      Oa.forEach(t),
      za.forEach(t),
      n = 0;
    n < kr.length;
    n++
  )
    (r = kr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kr.length && ((n = kr[0]), n.blockedOn === null); )
    oy(n), n.blockedOn === null && kr.shift();
}
var so = sr.ReactCurrentBatchConfig,
  vl = !0;
function Mw(e, t, n, r) {
  var i = Se,
    o = so.transition;
  so.transition = null;
  try {
    (Se = 1), Ld(e, t, n, r);
  } finally {
    (Se = i), (so.transition = o);
  }
}
function Iw(e, t, n, r) {
  var i = Se,
    o = so.transition;
  so.transition = null;
  try {
    (Se = 4), Ld(e, t, n, r);
  } finally {
    (Se = i), (so.transition = o);
  }
}
function Ld(e, t, n, r) {
  if (vl) {
    var i = vf(e, t, n, r);
    if (i === null) Ec(e, t, r, xl, n), Eh(e, r);
    else if (Lw(i, e, t, n, r)) r.stopPropagation();
    else if ((Eh(e, r), t & 4 && -1 < Nw.indexOf(e))) {
      for (; i !== null; ) {
        var o = is(i);
        if (
          (o !== null && ty(o),
          (o = vf(e, t, n, r)),
          o === null && Ec(e, t, r, xl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ec(e, t, r, null, n);
  }
}
var xl = null;
function vf(e, t, n, r) {
  if (((xl = null), (e = Od(r)), (e = ei(e)), e !== null))
    if (((t = xi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = X0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xl = e), null;
}
function ay(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Cw()) {
        case zd:
          return 1;
        case Q0:
          return 4;
        case gl:
        case Ew:
          return 16;
        case J0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pr = null,
  jd = null,
  Ws = null;
function sy() {
  if (Ws) return Ws;
  var e,
    t = jd,
    n = t.length,
    r,
    i = 'value' in Pr ? Pr.value : Pr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Ws = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ks(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cs() {
  return !0;
}
function _h() {
  return !1;
}
function qt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cs
        : _h),
      (this.isPropagationStopped = _h),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Cs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cs));
      },
      persist: function () {},
      isPersistent: Cs,
    }),
    t
  );
}
var $o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Md = qt($o),
  rs = Fe({}, $o, { view: 0, detail: 0 }),
  Aw = qt(rs),
  gc,
  yc,
  Wo,
  nu = Fe({}, rs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Id,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Wo &&
            (Wo && e.type === 'mousemove'
              ? ((gc = e.screenX - Wo.screenX), (yc = e.screenY - Wo.screenY))
              : (yc = gc = 0),
            (Wo = e)),
          gc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : yc;
    },
  }),
  Rh = qt(nu),
  Dw = Fe({}, nu, { dataTransfer: 0 }),
  Fw = qt(Dw),
  Bw = Fe({}, rs, { relatedTarget: 0 }),
  vc = qt(Bw),
  Uw = Fe({}, $o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hw = qt(Uw),
  Vw = Fe({}, $o, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ww = qt(Vw),
  Kw = Fe({}, $o, { data: 0 }),
  $h = qt(Kw),
  Xw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Gw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Yw = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function qw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yw[e]) ? !!t[e] : !1;
}
function Id() {
  return qw;
}
var Qw = Fe({}, rs, {
    key: function (e) {
      if (e.key) {
        var t = Xw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ks(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Gw[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Id,
    charCode: function (e) {
      return e.type === 'keypress' ? Ks(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ks(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Jw = qt(Qw),
  Zw = Fe({}, nu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Oh = qt(Zw),
  eS = Fe({}, rs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Id,
  }),
  tS = qt(eS),
  nS = Fe({}, $o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rS = qt(nS),
  iS = Fe({}, nu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  oS = qt(iS),
  aS = [9, 13, 27, 32],
  Ad = tr && 'CompositionEvent' in window,
  ga = null;
tr && 'documentMode' in document && (ga = document.documentMode);
var sS = tr && 'TextEvent' in window && !ga,
  ly = tr && (!Ad || (ga && 8 < ga && 11 >= ga)),
  zh = ' ',
  Th = !1;
function uy(e, t) {
  switch (e) {
    case 'keyup':
      return aS.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function cy(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Ki = !1;
function lS(e, t) {
  switch (e) {
    case 'compositionend':
      return cy(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Th = !0), zh);
    case 'textInput':
      return (e = t.data), e === zh && Th ? null : e;
    default:
      return null;
  }
}
function uS(e, t) {
  if (Ki)
    return e === 'compositionend' || (!Ad && uy(e, t))
      ? ((e = sy()), (Ws = jd = Pr = null), (Ki = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ly && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var cS = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!cS[e.type] : t === 'textarea';
}
function fy(e, t, n, r) {
  U0(r),
    (t = wl(t, 'onChange')),
    0 < t.length &&
      ((n = new Md('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ya = null,
  Na = null;
function fS(e) {
  by(e, 0);
}
function ru(e) {
  var t = Yi(e);
  if (j0(t)) return e;
}
function dS(e, t) {
  if (e === 'change') return t;
}
var dy = !1;
if (tr) {
  var xc;
  if (tr) {
    var wc = 'oninput' in document;
    if (!wc) {
      var Lh = document.createElement('div');
      Lh.setAttribute('oninput', 'return;'),
        (wc = typeof Lh.oninput == 'function');
    }
    xc = wc;
  } else xc = !1;
  dy = xc && (!document.documentMode || 9 < document.documentMode);
}
function jh() {
  ya && (ya.detachEvent('onpropertychange', py), (Na = ya = null));
}
function py(e) {
  if (e.propertyName === 'value' && ru(Na)) {
    var t = [];
    fy(t, Na, e, Od(e)), K0(fS, t);
  }
}
function pS(e, t, n) {
  e === 'focusin'
    ? (jh(), (ya = t), (Na = n), ya.attachEvent('onpropertychange', py))
    : e === 'focusout' && jh();
}
function hS(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ru(Na);
}
function mS(e, t) {
  if (e === 'click') return ru(t);
}
function gS(e, t) {
  if (e === 'input' || e === 'change') return ru(t);
}
function yS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _n = typeof Object.is == 'function' ? Object.is : yS;
function La(e, t) {
  if (_n(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Zc.call(t, i) || !_n(e[i], t[i])) return !1;
  }
  return !0;
}
function Mh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ih(e, t) {
  var n = Mh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mh(n);
  }
}
function hy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function my() {
  for (var e = window, t = pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pl(e.document);
  }
  return t;
}
function Dd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function vS(e) {
  var t = my(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Dd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ih(n, o));
        var a = Ih(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var xS = tr && 'documentMode' in document && 11 >= document.documentMode,
  Xi = null,
  xf = null,
  va = null,
  wf = !1;
function Ah(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wf ||
    Xi == null ||
    Xi !== pl(r) ||
    ((r = Xi),
    'selectionStart' in r && Dd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (va && La(va, r)) ||
      ((va = r),
      (r = wl(xf, 'onSelect')),
      0 < r.length &&
        ((t = new Md('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xi))));
}
function Es(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Gi = {
    animationend: Es('Animation', 'AnimationEnd'),
    animationiteration: Es('Animation', 'AnimationIteration'),
    animationstart: Es('Animation', 'AnimationStart'),
    transitionend: Es('Transition', 'TransitionEnd'),
  },
  Sc = {},
  gy = {};
tr &&
  ((gy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Gi.animationend.animation,
    delete Gi.animationiteration.animation,
    delete Gi.animationstart.animation),
  'TransitionEvent' in window || delete Gi.transitionend.transition);
function iu(e) {
  if (Sc[e]) return Sc[e];
  if (!Gi[e]) return e;
  var t = Gi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gy) return (Sc[e] = t[n]);
  return e;
}
var yy = iu('animationend'),
  vy = iu('animationiteration'),
  xy = iu('animationstart'),
  wy = iu('transitionend'),
  Sy = new Map(),
  Dh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Dr(e, t) {
  Sy.set(e, t), vi(t, [e]);
}
for (var bc = 0; bc < Dh.length; bc++) {
  var kc = Dh[bc],
    wS = kc.toLowerCase(),
    SS = kc[0].toUpperCase() + kc.slice(1);
  Dr(wS, 'on' + SS);
}
Dr(yy, 'onAnimationEnd');
Dr(vy, 'onAnimationIteration');
Dr(xy, 'onAnimationStart');
Dr('dblclick', 'onDoubleClick');
Dr('focusin', 'onFocus');
Dr('focusout', 'onBlur');
Dr(wy, 'onTransitionEnd');
po('onMouseEnter', ['mouseout', 'mouseover']);
po('onMouseLeave', ['mouseout', 'mouseover']);
po('onPointerEnter', ['pointerout', 'pointerover']);
po('onPointerLeave', ['pointerout', 'pointerover']);
vi(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
vi(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
vi('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
vi(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
vi(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
vi(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var la =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  bS = new Set('cancel close invalid load scroll toggle'.split(' ').concat(la));
function Fh(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), ww(r, t, void 0, e), (e.currentTarget = null);
}
function by(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e;
          Fh(i, s, u), (o = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Fh(i, s, u), (o = l);
        }
    }
  }
  if (ml) throw ((e = mf), (ml = !1), (mf = null), e);
}
function Oe(e, t) {
  var n = t[Ef];
  n === void 0 && (n = t[Ef] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ky(t, e, 2, !1), n.add(r));
}
function Cc(e, t, n) {
  var r = 0;
  t && (r |= 4), ky(n, e, r, t);
}
var Ps = '_reactListening' + Math.random().toString(36).slice(2);
function ja(e) {
  if (!e[Ps]) {
    (e[Ps] = !0),
      O0.forEach(function (n) {
        n !== 'selectionchange' && (bS.has(n) || Cc(n, !1, e), Cc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ps] || ((t[Ps] = !0), Cc('selectionchange', !1, t));
  }
}
function ky(e, t, n, r) {
  switch (ay(t)) {
    case 1:
      var i = Mw;
      break;
    case 4:
      i = Iw;
      break;
    default:
      i = Ld;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !hf ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ec(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = ei(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  K0(function () {
    var u = o,
      f = Od(n),
      d = [];
    e: {
      var c = Sy.get(e);
      if (c !== void 0) {
        var y = Md,
          m = e;
        switch (e) {
          case 'keypress':
            if (Ks(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            y = Jw;
            break;
          case 'focusin':
            (m = 'focus'), (y = vc);
            break;
          case 'focusout':
            (m = 'blur'), (y = vc);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = vc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = Rh;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Fw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = tS;
            break;
          case yy:
          case vy:
          case xy:
            y = Hw;
            break;
          case wy:
            y = rS;
            break;
          case 'scroll':
            y = Aw;
            break;
          case 'wheel':
            y = oS;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = Ww;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = Oh;
        }
        var h = (t & 4) !== 0,
          C = !h && e === 'scroll',
          g = h ? (c !== null ? c + 'Capture' : null) : c;
        h = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              g !== null && ((S = $a(p, g)), S != null && h.push(Ma(p, S, x)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < h.length &&
          ((c = new y(c, m, null, n, f)), d.push({ event: c, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          c &&
            n !== df &&
            (m = n.relatedTarget || n.fromElement) &&
            (ei(m) || m[nr]))
        )
          break e;
        if (
          (y || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = u),
              (m = m ? ei(m) : null),
              m !== null &&
                ((C = xi(m)), m !== C || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((y = null), (m = u)),
          y !== m)
        ) {
          if (
            ((h = Rh),
            (S = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((h = Oh),
              (S = 'onPointerLeave'),
              (g = 'onPointerEnter'),
              (p = 'pointer')),
            (C = y == null ? c : Yi(y)),
            (x = m == null ? c : Yi(m)),
            (c = new h(S, p + 'leave', y, n, f)),
            (c.target = C),
            (c.relatedTarget = x),
            (S = null),
            ei(f) === u &&
              ((h = new h(g, p + 'enter', m, n, f)),
              (h.target = x),
              (h.relatedTarget = C),
              (S = h)),
            (C = S),
            y && m)
          )
            t: {
              for (h = y, g = m, p = 0, x = h; x; x = Oi(x)) p++;
              for (x = 0, S = g; S; S = Oi(S)) x++;
              for (; 0 < p - x; ) (h = Oi(h)), p--;
              for (; 0 < x - p; ) (g = Oi(g)), x--;
              for (; p--; ) {
                if (h === g || (g !== null && h === g.alternate)) break t;
                (h = Oi(h)), (g = Oi(g));
              }
              h = null;
            }
          else h = null;
          y !== null && Bh(d, c, y, h, !1),
            m !== null && C !== null && Bh(d, C, m, h, !0);
        }
      }
      e: {
        if (
          ((c = u ? Yi(u) : window),
          (y = c.nodeName && c.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && c.type === 'file'))
        )
          var E = dS;
        else if (Nh(c))
          if (dy) E = gS;
          else {
            E = hS;
            var v = pS;
          }
        else
          (y = c.nodeName) &&
            y.toLowerCase() === 'input' &&
            (c.type === 'checkbox' || c.type === 'radio') &&
            (E = mS);
        if (E && (E = E(e, u))) {
          fy(d, E, n, f);
          break e;
        }
        v && v(e, c, u),
          e === 'focusout' &&
            (v = c._wrapperState) &&
            v.controlled &&
            c.type === 'number' &&
            sf(c, 'number', c.value);
      }
      switch (((v = u ? Yi(u) : window), e)) {
        case 'focusin':
          (Nh(v) || v.contentEditable === 'true') &&
            ((Xi = v), (xf = u), (va = null));
          break;
        case 'focusout':
          va = xf = Xi = null;
          break;
        case 'mousedown':
          wf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (wf = !1), Ah(d, n, f);
          break;
        case 'selectionchange':
          if (xS) break;
        case 'keydown':
        case 'keyup':
          Ah(d, n, f);
      }
      var b;
      if (Ad)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        Ki
          ? uy(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (ly &&
          n.locale !== 'ko' &&
          (Ki || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && Ki && (b = sy())
            : ((Pr = f),
              (jd = 'value' in Pr ? Pr.value : Pr.textContent),
              (Ki = !0))),
        (v = wl(u, N)),
        0 < v.length &&
          ((N = new $h(N, e, null, n, f)),
          d.push({ event: N, listeners: v }),
          b ? (N.data = b) : ((b = cy(n)), b !== null && (N.data = b)))),
        (b = sS ? lS(e, n) : uS(e, n)) &&
          ((u = wl(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new $h('onBeforeInput', 'beforeinput', null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = b)));
    }
    by(d, t);
  });
}
function Ma(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = $a(e, n)),
      o != null && r.unshift(Ma(e, o, i)),
      (o = $a(e, t)),
      o != null && r.push(Ma(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Oi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bh(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = $a(n, o)), l != null && a.unshift(Ma(n, l, s)))
        : i || ((l = $a(n, o)), l != null && a.push(Ma(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var kS = /\r\n?/g,
  CS = /\u0000|\uFFFD/g;
function Uh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      kS,
      `
`
    )
    .replace(CS, '');
}
function _s(e, t, n) {
  if (((t = Uh(t)), Uh(e) !== t && n)) throw Error(I(425));
}
function Sl() {}
var Sf = null,
  bf = null;
function kf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Cf = typeof setTimeout == 'function' ? setTimeout : void 0,
  ES = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hh = typeof Promise == 'function' ? Promise : void 0,
  PS =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hh < 'u'
      ? function (e) {
          return Hh.resolve(null).then(e).catch(_S);
        }
      : Cf;
function _S(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ta(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Ta(t);
}
function Tr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Vh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Oo = Math.random().toString(36).slice(2),
  An = '__reactFiber$' + Oo,
  Ia = '__reactProps$' + Oo,
  nr = '__reactContainer$' + Oo,
  Ef = '__reactEvents$' + Oo,
  RS = '__reactListeners$' + Oo,
  $S = '__reactHandles$' + Oo;
function ei(e) {
  var t = e[An];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nr] || n[An])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vh(e); e !== null; ) {
          if ((n = e[An])) return n;
          e = Vh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function is(e) {
  return (
    (e = e[An] || e[nr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function ou(e) {
  return e[Ia] || null;
}
var Pf = [],
  qi = -1;
function Fr(e) {
  return { current: e };
}
function Ne(e) {
  0 > qi || ((e.current = Pf[qi]), (Pf[qi] = null), qi--);
}
function Re(e, t) {
  qi++, (Pf[qi] = e.current), (e.current = t);
}
var Ar = {},
  bt = Fr(Ar),
  Nt = Fr(!1),
  fi = Ar;
function ho(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Lt(e) {
  return (e = e.childContextTypes), e != null;
}
function bl() {
  Ne(Nt), Ne(bt);
}
function Wh(e, t, n) {
  if (bt.current !== Ar) throw Error(I(168));
  Re(bt, t), Re(Nt, n);
}
function Cy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, pw(e) || 'Unknown', i));
  return Fe({}, n, r);
}
function kl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ar),
    (fi = bt.current),
    Re(bt, e),
    Re(Nt, Nt.current),
    !0
  );
}
function Kh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = Cy(e, t, fi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ne(Nt),
      Ne(bt),
      Re(bt, e))
    : Ne(Nt),
    Re(Nt, n);
}
var Yn = null,
  au = !1,
  _c = !1;
function Ey(e) {
  Yn === null ? (Yn = [e]) : Yn.push(e);
}
function OS(e) {
  (au = !0), Ey(e);
}
function Br() {
  if (!_c && Yn !== null) {
    _c = !0;
    var e = 0,
      t = Se;
    try {
      var n = Yn;
      for (Se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Yn = null), (au = !1);
    } catch (i) {
      throw (Yn !== null && (Yn = Yn.slice(e + 1)), q0(zd, Br), i);
    } finally {
      (Se = t), (_c = !1);
    }
  }
  return null;
}
var Qi = [],
  Ji = 0,
  Cl = null,
  El = 0,
  rn = [],
  on = 0,
  di = null,
  qn = 1,
  Qn = '';
function Yr(e, t) {
  (Qi[Ji++] = El), (Qi[Ji++] = Cl), (Cl = e), (El = t);
}
function Py(e, t, n) {
  (rn[on++] = qn), (rn[on++] = Qn), (rn[on++] = di), (di = e);
  var r = qn;
  e = Qn;
  var i = 32 - Cn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Cn(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (qn = (1 << (32 - Cn(t) + i)) | (n << i) | r),
      (Qn = o + e);
  } else (qn = (1 << o) | (n << i) | r), (Qn = e);
}
function Fd(e) {
  e.return !== null && (Yr(e, 1), Py(e, 1, 0));
}
function Bd(e) {
  for (; e === Cl; )
    (Cl = Qi[--Ji]), (Qi[Ji] = null), (El = Qi[--Ji]), (Qi[Ji] = null);
  for (; e === di; )
    (di = rn[--on]),
      (rn[on] = null),
      (Qn = rn[--on]),
      (rn[on] = null),
      (qn = rn[--on]),
      (rn[on] = null);
}
var Kt = null,
  Wt = null,
  je = !1,
  kn = null;
function _y(e, t) {
  var n = sn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Kt = e), (Wt = Tr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Kt = e), (Wt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = di !== null ? { id: qn, overflow: Qn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = sn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Kt = e),
            (Wt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _f(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Rf(e) {
  if (je) {
    var t = Wt;
    if (t) {
      var n = t;
      if (!Xh(e, t)) {
        if (_f(e)) throw Error(I(418));
        t = Tr(n.nextSibling);
        var r = Kt;
        t && Xh(e, t)
          ? _y(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (je = !1), (Kt = e));
      }
    } else {
      if (_f(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (je = !1), (Kt = e);
    }
  }
}
function Gh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Kt = e;
}
function Rs(e) {
  if (e !== Kt) return !1;
  if (!je) return Gh(e), (je = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !kf(e.type, e.memoizedProps))),
    t && (t = Wt))
  ) {
    if (_f(e)) throw (Ry(), Error(I(418)));
    for (; t; ) _y(e, t), (t = Tr(t.nextSibling));
  }
  if ((Gh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Wt = Tr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Wt = null;
    }
  } else Wt = Kt ? Tr(e.stateNode.nextSibling) : null;
  return !0;
}
function Ry() {
  for (var e = Wt; e; ) e = Tr(e.nextSibling);
}
function mo() {
  (Wt = Kt = null), (je = !1);
}
function Ud(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
var zS = sr.ReactCurrentBatchConfig;
function Ko(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function $s(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Yh(e) {
  var t = e._init;
  return t(e._payload);
}
function $y(e) {
  function t(g, p) {
    if (e) {
      var x = g.deletions;
      x === null ? ((g.deletions = [p]), (g.flags |= 16)) : x.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function i(g, p) {
    return (g = Mr(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, p, x) {
    return (
      (g.index = x),
      e
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((g.flags |= 2), p) : x)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, p, x, S) {
    return p === null || p.tag !== 6
      ? ((p = Lc(x, g.mode, S)), (p.return = g), p)
      : ((p = i(p, x)), (p.return = g), p);
  }
  function l(g, p, x, S) {
    var E = x.type;
    return E === Wi
      ? f(g, p, x.props.children, S, x.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === Sr &&
            Yh(E) === p.type))
      ? ((S = i(p, x.props)), (S.ref = Ko(g, p, x)), (S.return = g), S)
      : ((S = Zs(x.type, x.key, x.props, null, g.mode, S)),
        (S.ref = Ko(g, p, x)),
        (S.return = g),
        S);
  }
  function u(g, p, x, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = jc(x, g.mode, S)), (p.return = g), p)
      : ((p = i(p, x.children || [])), (p.return = g), p);
  }
  function f(g, p, x, S, E) {
    return p === null || p.tag !== 7
      ? ((p = li(x, g.mode, S, E)), (p.return = g), p)
      : ((p = i(p, x)), (p.return = g), p);
  }
  function d(g, p, x) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Lc('' + p, g.mode, x)), (p.return = g), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case vs:
          return (
            (x = Zs(p.type, p.key, p.props, null, g.mode, x)),
            (x.ref = Ko(g, null, p)),
            (x.return = g),
            x
          );
        case Vi:
          return (p = jc(p, g.mode, x)), (p.return = g), p;
        case Sr:
          var S = p._init;
          return d(g, S(p._payload), x);
      }
      if (aa(p) || Bo(p))
        return (p = li(p, g.mode, x, null)), (p.return = g), p;
      $s(g, p);
    }
    return null;
  }
  function c(g, p, x, S) {
    var E = p !== null ? p.key : null;
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return E !== null ? null : s(g, p, '' + x, S);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case vs:
          return x.key === E ? l(g, p, x, S) : null;
        case Vi:
          return x.key === E ? u(g, p, x, S) : null;
        case Sr:
          return (E = x._init), c(g, p, E(x._payload), S);
      }
      if (aa(x) || Bo(x)) return E !== null ? null : f(g, p, x, S, null);
      $s(g, x);
    }
    return null;
  }
  function y(g, p, x, S, E) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (g = g.get(x) || null), s(p, g, '' + S, E);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case vs:
          return (g = g.get(S.key === null ? x : S.key) || null), l(p, g, S, E);
        case Vi:
          return (g = g.get(S.key === null ? x : S.key) || null), u(p, g, S, E);
        case Sr:
          var v = S._init;
          return y(g, p, x, v(S._payload), E);
      }
      if (aa(S) || Bo(S)) return (g = g.get(x) || null), f(p, g, S, E, null);
      $s(p, S);
    }
    return null;
  }
  function m(g, p, x, S) {
    for (
      var E = null, v = null, b = p, N = (p = 0), L = null;
      b !== null && N < x.length;
      N++
    ) {
      b.index > N ? ((L = b), (b = null)) : (L = b.sibling);
      var A = c(g, b, x[N], S);
      if (A === null) {
        b === null && (b = L);
        break;
      }
      e && b && A.alternate === null && t(g, b),
        (p = o(A, p, N)),
        v === null ? (E = A) : (v.sibling = A),
        (v = A),
        (b = L);
    }
    if (N === x.length) return n(g, b), je && Yr(g, N), E;
    if (b === null) {
      for (; N < x.length; N++)
        (b = d(g, x[N], S)),
          b !== null &&
            ((p = o(b, p, N)), v === null ? (E = b) : (v.sibling = b), (v = b));
      return je && Yr(g, N), E;
    }
    for (b = r(g, b); N < x.length; N++)
      (L = y(b, g, N, x[N], S)),
        L !== null &&
          (e && L.alternate !== null && b.delete(L.key === null ? N : L.key),
          (p = o(L, p, N)),
          v === null ? (E = L) : (v.sibling = L),
          (v = L));
    return (
      e &&
        b.forEach(function (H) {
          return t(g, H);
        }),
      je && Yr(g, N),
      E
    );
  }
  function h(g, p, x, S) {
    var E = Bo(x);
    if (typeof E != 'function') throw Error(I(150));
    if (((x = E.call(x)), x == null)) throw Error(I(151));
    for (
      var v = (E = null), b = p, N = (p = 0), L = null, A = x.next();
      b !== null && !A.done;
      N++, A = x.next()
    ) {
      b.index > N ? ((L = b), (b = null)) : (L = b.sibling);
      var H = c(g, b, A.value, S);
      if (H === null) {
        b === null && (b = L);
        break;
      }
      e && b && H.alternate === null && t(g, b),
        (p = o(H, p, N)),
        v === null ? (E = H) : (v.sibling = H),
        (v = H),
        (b = L);
    }
    if (A.done) return n(g, b), je && Yr(g, N), E;
    if (b === null) {
      for (; !A.done; N++, A = x.next())
        (A = d(g, A.value, S)),
          A !== null &&
            ((p = o(A, p, N)), v === null ? (E = A) : (v.sibling = A), (v = A));
      return je && Yr(g, N), E;
    }
    for (b = r(g, b); !A.done; N++, A = x.next())
      (A = y(b, g, N, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && b.delete(A.key === null ? N : A.key),
          (p = o(A, p, N)),
          v === null ? (E = A) : (v.sibling = A),
          (v = A));
    return (
      e &&
        b.forEach(function (G) {
          return t(g, G);
        }),
      je && Yr(g, N),
      E
    );
  }
  function C(g, p, x, S) {
    if (
      (typeof x == 'object' &&
        x !== null &&
        x.type === Wi &&
        x.key === null &&
        (x = x.props.children),
      typeof x == 'object' && x !== null)
    ) {
      switch (x.$$typeof) {
        case vs:
          e: {
            for (var E = x.key, v = p; v !== null; ) {
              if (v.key === E) {
                if (((E = x.type), E === Wi)) {
                  if (v.tag === 7) {
                    n(g, v.sibling),
                      (p = i(v, x.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  v.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Sr &&
                    Yh(E) === v.type)
                ) {
                  n(g, v.sibling),
                    (p = i(v, x.props)),
                    (p.ref = Ko(g, v, x)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, v);
                break;
              } else t(g, v);
              v = v.sibling;
            }
            x.type === Wi
              ? ((p = li(x.props.children, g.mode, S, x.key)),
                (p.return = g),
                (g = p))
              : ((S = Zs(x.type, x.key, x.props, null, g.mode, S)),
                (S.ref = Ko(g, p, x)),
                (S.return = g),
                (g = S));
          }
          return a(g);
        case Vi:
          e: {
            for (v = x.key; p !== null; ) {
              if (p.key === v)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  n(g, p.sibling),
                    (p = i(p, x.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = jc(x, g.mode, S)), (p.return = g), (g = p);
          }
          return a(g);
        case Sr:
          return (v = x._init), C(g, p, v(x._payload), S);
      }
      if (aa(x)) return m(g, p, x, S);
      if (Bo(x)) return h(g, p, x, S);
      $s(g, x);
    }
    return (typeof x == 'string' && x !== '') || typeof x == 'number'
      ? ((x = '' + x),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = i(p, x)), (p.return = g), (g = p))
          : (n(g, p), (p = Lc(x, g.mode, S)), (p.return = g), (g = p)),
        a(g))
      : n(g, p);
  }
  return C;
}
var go = $y(!0),
  Oy = $y(!1),
  Pl = Fr(null),
  _l = null,
  Zi = null,
  Hd = null;
function Vd() {
  Hd = Zi = _l = null;
}
function Wd(e) {
  var t = Pl.current;
  Ne(Pl), (e._currentValue = t);
}
function $f(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function lo(e, t) {
  (_l = e),
    (Hd = Zi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (zt = !0), (e.firstContext = null));
}
function un(e) {
  var t = e._currentValue;
  if (Hd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zi === null)) {
      if (_l === null) throw Error(I(308));
      (Zi = e), (_l.dependencies = { lanes: 0, firstContext: e });
    } else Zi = Zi.next = e;
  return t;
}
var ti = null;
function Kd(e) {
  ti === null ? (ti = [e]) : ti.push(e);
}
function zy(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Kd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rr(e, r)
  );
}
function rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var br = !1;
function Xd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ty(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Jn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), fe & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Kd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rr(e, n)
  );
}
function Xs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Td(e, n);
  }
}
function qh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Rl(e, t, n, r) {
  var i = e.updateQueue;
  br = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (o = u) : (a.next = u), (a = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== a &&
        (s === null ? (f.firstBaseUpdate = u) : (s.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (f = u = l = null), (s = o);
    do {
      var c = s.lane,
        y = s.eventTime;
      if ((r & c) === c) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            h = s;
          switch (((c = t), (y = n), h.tag)) {
            case 1:
              if (((m = h.payload), typeof m == 'function')) {
                d = m.call(y, d, c);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = h.payload),
                (c = typeof m == 'function' ? m.call(y, d, c) : m),
                c == null)
              )
                break e;
              d = Fe({}, d, c);
              break e;
            case 2:
              br = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (c = i.effects),
          c === null ? (i.effects = [s]) : c.push(s));
      } else
        (y = {
          eventTime: y,
          lane: c,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (l = d)) : (f = f.next = y),
          (a |= c);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (c = s),
          (s = c.next),
          (c.next = null),
          (i.lastBaseUpdate = c),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (hi |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Qh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var os = {},
  Bn = Fr(os),
  Aa = Fr(os),
  Da = Fr(os);
function ni(e) {
  if (e === os) throw Error(I(174));
  return e;
}
function Gd(e, t) {
  switch ((Re(Da, t), Re(Aa, e), Re(Bn, os), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uf(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = uf(t, e));
  }
  Ne(Bn), Re(Bn, t);
}
function yo() {
  Ne(Bn), Ne(Aa), Ne(Da);
}
function Ny(e) {
  ni(Da.current);
  var t = ni(Bn.current),
    n = uf(t, e.type);
  t !== n && (Re(Aa, e), Re(Bn, n));
}
function Yd(e) {
  Aa.current === e && (Ne(Bn), Ne(Aa));
}
var Ae = Fr(0);
function $l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Rc = [];
function qd() {
  for (var e = 0; e < Rc.length; e++)
    Rc[e]._workInProgressVersionPrimary = null;
  Rc.length = 0;
}
var Gs = sr.ReactCurrentDispatcher,
  $c = sr.ReactCurrentBatchConfig,
  pi = 0,
  De = null,
  nt = null,
  ot = null,
  Ol = !1,
  xa = !1,
  Fa = 0,
  TS = 0;
function vt() {
  throw Error(I(321));
}
function Qd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_n(e[n], t[n])) return !1;
  return !0;
}
function Jd(e, t, n, r, i, o) {
  if (
    ((pi = o),
    (De = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gs.current = e === null || e.memoizedState === null ? MS : IS),
    (e = n(r, i)),
    xa)
  ) {
    o = 0;
    do {
      if (((xa = !1), (Fa = 0), 25 <= o)) throw Error(I(301));
      (o += 1),
        (ot = nt = null),
        (t.updateQueue = null),
        (Gs.current = AS),
        (e = n(r, i));
    } while (xa);
  }
  if (
    ((Gs.current = zl),
    (t = nt !== null && nt.next !== null),
    (pi = 0),
    (ot = nt = De = null),
    (Ol = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Zd() {
  var e = Fa !== 0;
  return (Fa = 0), e;
}
function Ln() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ot === null ? (De.memoizedState = ot = e) : (ot = ot.next = e), ot;
}
function cn() {
  if (nt === null) {
    var e = De.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = nt.next;
  var t = ot === null ? De.memoizedState : ot.next;
  if (t !== null) (ot = t), (nt = e);
  else {
    if (e === null) throw Error(I(310));
    (nt = e),
      (e = {
        memoizedState: nt.memoizedState,
        baseState: nt.baseState,
        baseQueue: nt.baseQueue,
        queue: nt.queue,
        next: null,
      }),
      ot === null ? (De.memoizedState = ot = e) : (ot = ot.next = e);
  }
  return ot;
}
function Ba(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Oc(e) {
  var t = cn(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = nt,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = o;
    do {
      var f = u.lane;
      if ((pi & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (De.lanes |= f),
          (hi |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (a = r) : (l.next = s),
      _n(r, t.memoizedState) || (zt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (De.lanes |= o), (hi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zc(e) {
  var t = cn(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    _n(o, t.memoizedState) || (zt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ly() {}
function jy(e, t) {
  var n = De,
    r = cn(),
    i = t(),
    o = !_n(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (zt = !0)),
    (r = r.queue),
    ep(Ay.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ot !== null && ot.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ua(9, Iy.bind(null, n, r, i, t), void 0, null),
      st === null)
    )
      throw Error(I(349));
    pi & 30 || My(n, t, i);
  }
  return i;
}
function My(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Iy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dy(t) && Fy(e);
}
function Ay(e, t, n) {
  return n(function () {
    Dy(t) && Fy(e);
  });
}
function Dy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_n(e, n);
  } catch {
    return !0;
  }
}
function Fy(e) {
  var t = rr(e, 1);
  t !== null && En(t, e, 1, -1);
}
function Jh(e) {
  var t = Ln();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ba,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jS.bind(null, De, e)),
    [t.memoizedState, e]
  );
}
function Ua(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function By() {
  return cn().memoizedState;
}
function Ys(e, t, n, r) {
  var i = Ln();
  (De.flags |= e),
    (i.memoizedState = Ua(1 | t, n, void 0, r === void 0 ? null : r));
}
function su(e, t, n, r) {
  var i = cn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (nt !== null) {
    var a = nt.memoizedState;
    if (((o = a.destroy), r !== null && Qd(r, a.deps))) {
      i.memoizedState = Ua(t, n, o, r);
      return;
    }
  }
  (De.flags |= e), (i.memoizedState = Ua(1 | t, n, o, r));
}
function Zh(e, t) {
  return Ys(8390656, 8, e, t);
}
function ep(e, t) {
  return su(2048, 8, e, t);
}
function Uy(e, t) {
  return su(4, 2, e, t);
}
function Hy(e, t) {
  return su(4, 4, e, t);
}
function Vy(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Wy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), su(4, 4, Vy.bind(null, t, e), n)
  );
}
function tp() {}
function Ky(e, t) {
  var n = cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xy(e, t) {
  var n = cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gy(e, t, n) {
  return pi & 21
    ? (_n(n, t) || ((n = Z0()), (De.lanes |= n), (hi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (zt = !0)), (e.memoizedState = n));
}
function NS(e, t) {
  var n = Se;
  (Se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $c.transition;
  $c.transition = {};
  try {
    e(!1), t();
  } finally {
    (Se = n), ($c.transition = r);
  }
}
function Yy() {
  return cn().memoizedState;
}
function LS(e, t, n) {
  var r = jr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qy(e))
  )
    Qy(t, n);
  else if (((n = zy(e, t, n, r)), n !== null)) {
    var i = Et();
    En(n, e, r, i), Jy(n, t, r);
  }
}
function jS(e, t, n) {
  var r = jr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qy(e)) Qy(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), _n(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Kd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = zy(e, t, i, r)),
      n !== null && ((i = Et()), En(n, e, r, i), Jy(n, t, r));
  }
}
function qy(e) {
  var t = e.alternate;
  return e === De || (t !== null && t === De);
}
function Qy(e, t) {
  xa = Ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Td(e, n);
  }
}
var zl = {
    readContext: un,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useInsertionEffect: vt,
    useLayoutEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useMutableSource: vt,
    useSyncExternalStore: vt,
    useId: vt,
    unstable_isNewReconciler: !1,
  },
  MS = {
    readContext: un,
    useCallback: function (e, t) {
      return (Ln().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: un,
    useEffect: Zh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ys(4194308, 4, Vy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ys(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ys(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ln();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ln();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = LS.bind(null, De, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ln();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jh,
    useDebugValue: tp,
    useDeferredValue: function (e) {
      return (Ln().memoizedState = e);
    },
    useTransition: function () {
      var e = Jh(!1),
        t = e[0];
      return (e = NS.bind(null, e[1])), (Ln().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = De,
        i = Ln();
      if (je) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), st === null)) throw Error(I(349));
        pi & 30 || My(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Zh(Ay.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ua(9, Iy.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ln(),
        t = st.identifierPrefix;
      if (je) {
        var n = Qn,
          r = qn;
        (n = (r & ~(1 << (32 - Cn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Fa++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = TS++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  IS = {
    readContext: un,
    useCallback: Ky,
    useContext: un,
    useEffect: ep,
    useImperativeHandle: Wy,
    useInsertionEffect: Uy,
    useLayoutEffect: Hy,
    useMemo: Xy,
    useReducer: Oc,
    useRef: By,
    useState: function () {
      return Oc(Ba);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = cn();
      return Gy(t, nt.memoizedState, e);
    },
    useTransition: function () {
      var e = Oc(Ba)[0],
        t = cn().memoizedState;
      return [e, t];
    },
    useMutableSource: Ly,
    useSyncExternalStore: jy,
    useId: Yy,
    unstable_isNewReconciler: !1,
  },
  AS = {
    readContext: un,
    useCallback: Ky,
    useContext: un,
    useEffect: ep,
    useImperativeHandle: Wy,
    useInsertionEffect: Uy,
    useLayoutEffect: Hy,
    useMemo: Xy,
    useReducer: zc,
    useRef: By,
    useState: function () {
      return zc(Ba);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = cn();
      return nt === null ? (t.memoizedState = e) : Gy(t, nt.memoizedState, e);
    },
    useTransition: function () {
      var e = zc(Ba)[0],
        t = cn().memoizedState;
      return [e, t];
    },
    useMutableSource: Ly,
    useSyncExternalStore: jy,
    useId: Yy,
    unstable_isNewReconciler: !1,
  };
function wn(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Of(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Et(),
      i = jr(e),
      o = Jn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Nr(e, o, i)),
      t !== null && (En(t, e, i, r), Xs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Et(),
      i = jr(e),
      o = Jn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nr(e, o, i)),
      t !== null && (En(t, e, i, r), Xs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Et(),
      r = jr(e),
      i = Jn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Nr(e, i, r)),
      t !== null && (En(t, e, r, n), Xs(t, e, r));
  },
};
function em(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !La(n, r) || !La(i, o)
      : !0
  );
}
function Zy(e, t, n) {
  var r = !1,
    i = Ar,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = un(o))
      : ((i = Lt(t) ? fi : bt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ho(e, i) : Ar)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = lu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function tm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && lu.enqueueReplaceState(t, t.state, null);
}
function zf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Xd(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = un(o))
    : ((o = Lt(t) ? fi : bt.current), (i.context = ho(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Of(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && lu.enqueueReplaceState(i, i.state, null),
      Rl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function vo(e, t) {
  try {
    var n = '',
      r = t;
    do (n += dw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Tc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var DS = typeof WeakMap == 'function' ? WeakMap : Map;
function ev(e, t, n) {
  (n = Jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Nl || ((Nl = !0), (Uf = r)), Tf(e, t);
    }),
    n
  );
}
function tv(e, t, n) {
  (n = Jn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Tf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Tf(e, t),
          typeof r != 'function' &&
            (Lr === null ? (Lr = new Set([this])) : Lr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function nm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new DS();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ZS.bind(null, e, t, n)), t.then(e, e));
}
function rm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function im(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Jn(-1, 1)), (t.tag = 2), Nr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var FS = sr.ReactCurrentOwner,
  zt = !1;
function Ct(e, t, n, r) {
  t.child = e === null ? Oy(t, null, n, r) : go(t, e.child, n, r);
}
function om(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    lo(t, i),
    (r = Jd(e, t, n, r, o, i)),
    (n = Zd()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ir(e, t, i))
      : (je && n && Fd(t), (t.flags |= 1), Ct(e, t, r, i), t.child)
  );
}
function am(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !up(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), nv(e, t, o, r, i))
      : ((e = Zs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : La), n(a, r) && e.ref === t.ref)
    )
      return ir(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Mr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nv(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (La(o, r) && e.ref === t.ref)
      if (((zt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (zt = !0);
      else return (t.lanes = e.lanes), ir(e, t, i);
  }
  return Nf(e, t, n, r, i);
}
function rv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(to, Ut),
        (Ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(to, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Re(to, Ut),
        (Ut |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Re(to, Ut),
      (Ut |= r);
  return Ct(e, t, i, n), t.child;
}
function iv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nf(e, t, n, r, i) {
  var o = Lt(n) ? fi : bt.current;
  return (
    (o = ho(t, o)),
    lo(t, i),
    (n = Jd(e, t, n, r, o, i)),
    (r = Zd()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ir(e, t, i))
      : (je && r && Fd(t), (t.flags |= 1), Ct(e, t, n, i), t.child)
  );
}
function sm(e, t, n, r, i) {
  if (Lt(n)) {
    var o = !0;
    kl(t);
  } else o = !1;
  if ((lo(t, i), t.stateNode === null))
    qs(e, t), Zy(t, n, r), zf(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = un(u))
      : ((u = Lt(n) ? fi : bt.current), (u = ho(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && tm(t, a, r, u)),
      (br = !1);
    var c = t.memoizedState;
    (a.state = c),
      Rl(t, r, a, i),
      (l = t.memoizedState),
      s !== r || c !== l || Nt.current || br
        ? (typeof f == 'function' && (Of(t, n, f, r), (l = t.memoizedState)),
          (s = br || em(t, n, s, r, c, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ty(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : wn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (c = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = un(l))
        : ((l = Lt(n) ? fi : bt.current), (l = ho(t, l)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || c !== l) && tm(t, a, r, l)),
      (br = !1),
      (c = t.memoizedState),
      (a.state = c),
      Rl(t, r, a, i);
    var m = t.memoizedState;
    s !== d || c !== m || Nt.current || br
      ? (typeof y == 'function' && (Of(t, n, y, r), (m = t.memoizedState)),
        (u = br || em(t, n, u, r, c, m, l) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, m, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, m, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (a.props = r),
        (a.state = m),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Lf(e, t, n, r, o, i);
}
function Lf(e, t, n, r, i, o) {
  iv(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Kh(t, n, !1), ir(e, t, o);
  (r = t.stateNode), (FS.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = go(t, e.child, null, o)), (t.child = go(t, null, s, o)))
      : Ct(e, t, s, o),
    (t.memoizedState = r.state),
    i && Kh(t, n, !0),
    t.child
  );
}
function ov(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wh(e, t.context, !1),
    Gd(e, t.containerInfo);
}
function lm(e, t, n, r, i) {
  return mo(), Ud(i), (t.flags |= 256), Ct(e, t, n, r), t.child;
}
var jf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function av(e, t, n) {
  var r = t.pendingProps,
    i = Ae.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Re(Ae, i & 1),
    e === null)
  )
    return (
      Rf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = fu(a, r, 0, null)),
              (e = li(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Mf(n)),
              (t.memoizedState = jf),
              e)
            : np(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return BS(e, t, a, r, s, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Mr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Mr(s, o)) : ((o = li(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Mf(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = jf),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Mr(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function np(e, t) {
  return (
    (t = fu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Os(e, t, n, r) {
  return (
    r !== null && Ud(r),
    go(t, e.child, null, n),
    (e = np(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function BS(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Tc(Error(I(422)))), Os(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = fu({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = li(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && go(t, e.child, null, a),
        (t.child.memoizedState = Mf(a)),
        (t.memoizedState = jf),
        o);
  if (!(t.mode & 1)) return Os(e, t, a, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(I(419))), (r = Tc(o, r, void 0)), Os(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), zt || s)) {
    if (((r = st), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), rr(e, i), En(r, e, i, -1));
    }
    return lp(), (r = Tc(Error(I(421)))), Os(e, t, a, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = eb.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Wt = Tr(i.nextSibling)),
      (Kt = t),
      (je = !0),
      (kn = null),
      e !== null &&
        ((rn[on++] = qn),
        (rn[on++] = Qn),
        (rn[on++] = di),
        (qn = e.id),
        (Qn = e.overflow),
        (di = t)),
      (t = np(t, r.children)),
      (t.flags |= 4096),
      t);
}
function um(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $f(e.return, t, n);
}
function Nc(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function sv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ct(e, t, r.children, n), (r = Ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && um(e, n, t);
        else if (e.tag === 19) um(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Re(Ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && $l(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Nc(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && $l(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Nc(t, !0, n, null, o);
        break;
      case 'together':
        Nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ir(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function US(e, t, n) {
  switch (t.tag) {
    case 3:
      ov(t), mo();
      break;
    case 5:
      Ny(t);
      break;
    case 1:
      Lt(t.type) && kl(t);
      break;
    case 4:
      Gd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Re(Pl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Re(Ae, Ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? av(e, t, n)
          : (Re(Ae, Ae.current & 1),
            (e = ir(e, t, n)),
            e !== null ? e.sibling : null);
      Re(Ae, Ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Re(Ae, Ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rv(e, t, n);
  }
  return ir(e, t, n);
}
var lv, If, uv, cv;
lv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
If = function () {};
uv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ni(Bn.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = of(e, i)), (r = of(e, r)), (o = []);
        break;
      case 'select':
        (i = Fe({}, i, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = lf(e, i)), (r = lf(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Sl);
    }
    cf(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (_a.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (o = o || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (_a.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && Oe('scroll', e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
cv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xo(e, t) {
  if (!je)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function HS(e, t, n) {
  var r = t.pendingProps;
  switch ((Bd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return xt(t), null;
    case 1:
      return Lt(t.type) && bl(), xt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yo(),
        Ne(Nt),
        Ne(bt),
        qd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kn !== null && (Wf(kn), (kn = null)))),
        If(e, t),
        xt(t),
        null
      );
    case 5:
      Yd(t);
      var i = ni(Da.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        uv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return xt(t), null;
        }
        if (((e = ni(Bn.current)), Rs(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[An] = t), (r[Ia] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Oe('cancel', r), Oe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Oe('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < la.length; i++) Oe(la[i], r);
              break;
            case 'source':
              Oe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Oe('error', r), Oe('load', r);
              break;
            case 'details':
              Oe('toggle', r);
              break;
            case 'input':
              vh(r, o), Oe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Oe('invalid', r);
              break;
            case 'textarea':
              wh(r, o), Oe('invalid', r);
          }
          cf(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      _s(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      _s(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : _a.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  Oe('scroll', r);
            }
          switch (n) {
            case 'input':
              xs(r), xh(r, o, !0);
              break;
            case 'textarea':
              xs(r), Sh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Sl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = A0(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[An] = t),
            (e[Ia] = r),
            lv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = ff(n, r)), n)) {
              case 'dialog':
                Oe('cancel', e), Oe('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Oe('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < la.length; i++) Oe(la[i], e);
                i = r;
                break;
              case 'source':
                Oe('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Oe('error', e), Oe('load', e), (i = r);
                break;
              case 'details':
                Oe('toggle', e), (i = r);
                break;
              case 'input':
                vh(e, r), (i = of(e, r)), Oe('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Fe({}, r, { value: void 0 })),
                  Oe('invalid', e);
                break;
              case 'textarea':
                wh(e, r), (i = lf(e, r)), Oe('invalid', e);
                break;
              default:
                i = r;
            }
            cf(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o];
                o === 'style'
                  ? B0(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && D0(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Ra(e, l)
                    : typeof l == 'number' && Ra(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (_a.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && Oe('scroll', e)
                      : l != null && Pd(e, o, l, a));
              }
            switch (n) {
              case 'input':
                xs(e), xh(e, r, !1);
                break;
              case 'textarea':
                xs(e), Sh(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Ir(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? io(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      io(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Sl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return xt(t), null;
    case 6:
      if (e && t.stateNode != null) cv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(I(166));
        if (((n = ni(Da.current)), ni(Bn.current), Rs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[An] = t),
            (o = r.nodeValue !== n) && ((e = Kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                _s(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _s(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[An] = t),
            (t.stateNode = r);
      }
      return xt(t), null;
    case 13:
      if (
        (Ne(Ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (je && Wt !== null && t.mode & 1 && !(t.flags & 128))
          Ry(), mo(), (t.flags |= 98560), (o = !1);
        else if (((o = Rs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(I(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(I(317));
            o[An] = t;
          } else
            mo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xt(t), (o = !1);
        } else kn !== null && (Wf(kn), (kn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ae.current & 1 ? rt === 0 && (rt = 3) : lp())),
          t.updateQueue !== null && (t.flags |= 4),
          xt(t),
          null);
    case 4:
      return (
        yo(), If(e, t), e === null && ja(t.stateNode.containerInfo), xt(t), null
      );
    case 10:
      return Wd(t.type._context), xt(t), null;
    case 17:
      return Lt(t.type) && bl(), xt(t), null;
    case 19:
      if ((Ne(Ae), (o = t.memoizedState), o === null)) return xt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Xo(o, !1);
        else {
          if (rt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = $l(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Xo(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Re(Ae, (Ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ke() > xo &&
            ((t.flags |= 128), (r = !0), Xo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $l(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !je)
            )
              return xt(t), null;
          } else
            2 * Ke() - o.renderingStartTime > xo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ke()),
          (t.sibling = null),
          (n = Ae.current),
          Re(Ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (xt(t), null);
    case 22:
    case 23:
      return (
        sp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ut & 1073741824 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function VS(e, t) {
  switch ((Bd(t), t.tag)) {
    case 1:
      return (
        Lt(t.type) && bl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yo(),
        Ne(Nt),
        Ne(bt),
        qd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yd(t), null;
    case 13:
      if (
        (Ne(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        mo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ne(Ae), null;
    case 4:
      return yo(), null;
    case 10:
      return Wd(t.type._context), null;
    case 22:
    case 23:
      return sp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zs = !1,
  St = !1,
  WS = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function eo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ve(e, t, r);
      }
    else n.current = null;
}
function Af(e, t, n) {
  try {
    n();
  } catch (r) {
    Ve(e, t, r);
  }
}
var cm = !1;
function KS(e, t) {
  if (((Sf = vl), (e = my()), Dd(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            f = 0,
            d = e,
            c = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = a + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (c = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (c === n && ++u === i && (s = a),
                c === o && ++f === r && (l = a),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = c), (c = d.parentNode);
            }
            d = y;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bf = { focusedElem: e, selectionRange: n }, vl = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var h = m.memoizedProps,
                    C = m.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : wn(t.type, h),
                      C
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = '')
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (S) {
          Ve(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (m = cm), (cm = !1), m;
}
function wa(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Af(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function uu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Df(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function fv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[An], delete t[Ia], delete t[Ef], delete t[RS], delete t[$S])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ff(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Sl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ff(e, t, n), e = e.sibling; e !== null; ) Ff(e, t, n), (e = e.sibling);
}
function Bf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bf(e, t, n), e = e.sibling; e !== null; ) Bf(e, t, n), (e = e.sibling);
}
var dt = null,
  Sn = !1;
function gr(e, t, n) {
  for (n = n.child; n !== null; ) pv(e, t, n), (n = n.sibling);
}
function pv(e, t, n) {
  if (Fn && typeof Fn.onCommitFiberUnmount == 'function')
    try {
      Fn.onCommitFiberUnmount(tu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      St || eo(n, t);
    case 6:
      var r = dt,
        i = Sn;
      (dt = null),
        gr(e, t, n),
        (dt = r),
        (Sn = i),
        dt !== null &&
          (Sn
            ? ((e = dt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null &&
        (Sn
          ? ((e = dt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pc(e.parentNode, n)
              : e.nodeType === 1 && Pc(e, n),
            Ta(e))
          : Pc(dt, n.stateNode));
      break;
    case 4:
      (r = dt),
        (i = Sn),
        (dt = n.stateNode.containerInfo),
        (Sn = !0),
        gr(e, t, n),
        (dt = r),
        (Sn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !St &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Af(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      gr(e, t, n);
      break;
    case 1:
      if (
        !St &&
        (eo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ve(n, t, s);
        }
      gr(e, t, n);
      break;
    case 21:
      gr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((St = (r = St) || n.memoizedState !== null), gr(e, t, n), (St = r))
        : gr(e, t, n);
      break;
    default:
      gr(e, t, n);
  }
}
function dm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new WS()),
      t.forEach(function (r) {
        var i = tb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function xn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (dt = s.stateNode), (Sn = !1);
              break e;
            case 3:
              (dt = s.stateNode.containerInfo), (Sn = !0);
              break e;
            case 4:
              (dt = s.stateNode.containerInfo), (Sn = !0);
              break e;
          }
          s = s.return;
        }
        if (dt === null) throw Error(I(160));
        pv(o, a, i), (dt = null), (Sn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ve(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hv(t, e), (t = t.sibling);
}
function hv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xn(t, e), Nn(e), r & 4)) {
        try {
          wa(3, e, e.return), uu(3, e);
        } catch (h) {
          Ve(e, e.return, h);
        }
        try {
          wa(5, e, e.return);
        } catch (h) {
          Ve(e, e.return, h);
        }
      }
      break;
    case 1:
      xn(t, e), Nn(e), r & 512 && n !== null && eo(n, n.return);
      break;
    case 5:
      if (
        (xn(t, e),
        Nn(e),
        r & 512 && n !== null && eo(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ra(i, '');
        } catch (h) {
          Ve(e, e.return, h);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && M0(i, o),
              ff(s, a);
            var u = ff(s, o);
            for (a = 0; a < l.length; a += 2) {
              var f = l[a],
                d = l[a + 1];
              f === 'style'
                ? B0(i, d)
                : f === 'dangerouslySetInnerHTML'
                ? D0(i, d)
                : f === 'children'
                ? Ra(i, d)
                : Pd(i, f, d, u);
            }
            switch (s) {
              case 'input':
                af(i, o);
                break;
              case 'textarea':
                I0(i, o);
                break;
              case 'select':
                var c = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? io(i, !!o.multiple, y, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? io(i, !!o.multiple, o.defaultValue, !0)
                      : io(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Ia] = o;
          } catch (h) {
            Ve(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((xn(t, e), Nn(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (h) {
          Ve(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (xn(t, e), Nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ta(t.containerInfo);
        } catch (h) {
          Ve(e, e.return, h);
        }
      break;
    case 4:
      xn(t, e), Nn(e);
      break;
    case 13:
      xn(t, e),
        Nn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (op = Ke())),
        r & 4 && dm(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((St = (u = St) || f), xn(t, e), (St = u)) : xn(t, e),
        Nn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (V = e, f = e.child; f !== null; ) {
            for (d = V = f; V !== null; ) {
              switch (((c = V), (y = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wa(4, c, c.return);
                  break;
                case 1:
                  eo(c, c.return);
                  var m = c.stateNode;
                  if (typeof m.componentWillUnmount == 'function') {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (h) {
                      Ve(r, n, h);
                    }
                  }
                  break;
                case 5:
                  eo(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    hm(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = c), (V = y)) : hm(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = F0('display', a)));
              } catch (h) {
                Ve(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (h) {
                Ve(e, e.return, h);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      xn(t, e), Nn(e), r & 4 && dm(e);
      break;
    case 21:
      break;
    default:
      xn(t, e), Nn(e);
  }
}
function Nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ra(i, ''), (r.flags &= -33));
          var o = fm(e);
          Bf(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = fm(e);
          Ff(e, s, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function XS(e, t, n) {
  (V = e), mv(e);
}
function mv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || zs;
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || St;
        s = zs;
        var u = St;
        if (((zs = a), (St = l) && !u))
          for (V = i; V !== null; )
            (a = V),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? mm(i)
                : l !== null
                ? ((l.return = a), (V = l))
                : mm(i);
        for (; o !== null; ) (V = o), mv(o), (o = o.sibling);
        (V = i), (zs = s), (St = u);
      }
      pm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : pm(e);
  }
}
function pm(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || uu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Qh(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qh(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Ta(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        St || (t.flags & 512 && Df(t));
      } catch (c) {
        Ve(t, t.return, c);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function hm(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function mm(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uu(4, t);
          } catch (l) {
            Ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(t, i, l);
            }
          }
          var o = t.return;
          try {
            Df(t);
          } catch (l) {
            Ve(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Df(t);
          } catch (l) {
            Ve(t, a, l);
          }
      }
    } catch (l) {
      Ve(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (V = s);
      break;
    }
    V = t.return;
  }
}
var GS = Math.ceil,
  Tl = sr.ReactCurrentDispatcher,
  rp = sr.ReactCurrentOwner,
  ln = sr.ReactCurrentBatchConfig,
  fe = 0,
  st = null,
  et = null,
  mt = 0,
  Ut = 0,
  to = Fr(0),
  rt = 0,
  Ha = null,
  hi = 0,
  cu = 0,
  ip = 0,
  Sa = null,
  Ot = null,
  op = 0,
  xo = 1 / 0,
  Kn = null,
  Nl = !1,
  Uf = null,
  Lr = null,
  Ts = !1,
  _r = null,
  Ll = 0,
  ba = 0,
  Hf = null,
  Qs = -1,
  Js = 0;
function Et() {
  return fe & 6 ? Ke() : Qs !== -1 ? Qs : (Qs = Ke());
}
function jr(e) {
  return e.mode & 1
    ? fe & 2 && mt !== 0
      ? mt & -mt
      : zS.transition !== null
      ? (Js === 0 && (Js = Z0()), Js)
      : ((e = Se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ay(e.type))),
        e)
    : 1;
}
function En(e, t, n, r) {
  if (50 < ba) throw ((ba = 0), (Hf = null), Error(I(185)));
  ns(e, n, r),
    (!(fe & 2) || e !== st) &&
      (e === st && (!(fe & 2) && (cu |= n), rt === 4 && Cr(e, mt)),
      jt(e, r),
      n === 1 && fe === 0 && !(t.mode & 1) && ((xo = Ke() + 500), au && Br()));
}
function jt(e, t) {
  var n = e.callbackNode;
  zw(e, t);
  var r = yl(e, e === st ? mt : 0);
  if (r === 0)
    n !== null && Ch(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ch(n), t === 1))
      e.tag === 0 ? OS(gm.bind(null, e)) : Ey(gm.bind(null, e)),
        PS(function () {
          !(fe & 6) && Br();
        }),
        (n = null);
    else {
      switch (ey(r)) {
        case 1:
          n = zd;
          break;
        case 4:
          n = Q0;
          break;
        case 16:
          n = gl;
          break;
        case 536870912:
          n = J0;
          break;
        default:
          n = gl;
      }
      n = kv(n, gv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gv(e, t) {
  if (((Qs = -1), (Js = 0), fe & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (uo() && e.callbackNode !== n) return null;
  var r = yl(e, e === st ? mt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jl(e, r);
  else {
    t = r;
    var i = fe;
    fe |= 2;
    var o = vv();
    (st !== e || mt !== t) && ((Kn = null), (xo = Ke() + 500), si(e, t));
    do
      try {
        QS();
        break;
      } catch (s) {
        yv(e, s);
      }
    while (!0);
    Vd(),
      (Tl.current = o),
      (fe = i),
      et !== null ? (t = 0) : ((st = null), (mt = 0), (t = rt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = gf(e)), i !== 0 && ((r = i), (t = Vf(e, i)))), t === 1)
    )
      throw ((n = Ha), si(e, 0), Cr(e, r), jt(e, Ke()), n);
    if (t === 6) Cr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !YS(i) &&
          ((t = jl(e, r)),
          t === 2 && ((o = gf(e)), o !== 0 && ((r = o), (t = Vf(e, o)))),
          t === 1))
      )
        throw ((n = Ha), si(e, 0), Cr(e, r), jt(e, Ke()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          qr(e, Ot, Kn);
          break;
        case 3:
          if (
            (Cr(e, r), (r & 130023424) === r && ((t = op + 500 - Ke()), 10 < t))
          ) {
            if (yl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Cf(qr.bind(null, e, Ot, Kn), t);
            break;
          }
          qr(e, Ot, Kn);
          break;
        case 4:
          if ((Cr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Cn(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * GS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cf(qr.bind(null, e, Ot, Kn), r);
            break;
          }
          qr(e, Ot, Kn);
          break;
        case 5:
          qr(e, Ot, Kn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return jt(e, Ke()), e.callbackNode === n ? gv.bind(null, e) : null;
}
function Vf(e, t) {
  var n = Sa;
  return (
    e.current.memoizedState.isDehydrated && (si(e, t).flags |= 256),
    (e = jl(e, t)),
    e !== 2 && ((t = Ot), (Ot = n), t !== null && Wf(t)),
    e
  );
}
function Wf(e) {
  Ot === null ? (Ot = e) : Ot.push.apply(Ot, e);
}
function YS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!_n(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cr(e, t) {
  for (
    t &= ~ip,
      t &= ~cu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Cn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gm(e) {
  if (fe & 6) throw Error(I(327));
  uo();
  var t = yl(e, 0);
  if (!(t & 1)) return jt(e, Ke()), null;
  var n = jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gf(e);
    r !== 0 && ((t = r), (n = Vf(e, r)));
  }
  if (n === 1) throw ((n = Ha), si(e, 0), Cr(e, t), jt(e, Ke()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qr(e, Ot, Kn),
    jt(e, Ke()),
    null
  );
}
function ap(e, t) {
  var n = fe;
  fe |= 1;
  try {
    return e(t);
  } finally {
    (fe = n), fe === 0 && ((xo = Ke() + 500), au && Br());
  }
}
function mi(e) {
  _r !== null && _r.tag === 0 && !(fe & 6) && uo();
  var t = fe;
  fe |= 1;
  var n = ln.transition,
    r = Se;
  try {
    if (((ln.transition = null), (Se = 1), e)) return e();
  } finally {
    (Se = r), (ln.transition = n), (fe = t), !(fe & 6) && Br();
  }
}
function sp() {
  (Ut = to.current), Ne(to);
}
function si(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ES(n)), et !== null))
    for (n = et.return; n !== null; ) {
      var r = n;
      switch ((Bd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && bl();
          break;
        case 3:
          yo(), Ne(Nt), Ne(bt), qd();
          break;
        case 5:
          Yd(r);
          break;
        case 4:
          yo();
          break;
        case 13:
          Ne(Ae);
          break;
        case 19:
          Ne(Ae);
          break;
        case 10:
          Wd(r.type._context);
          break;
        case 22:
        case 23:
          sp();
      }
      n = n.return;
    }
  if (
    ((st = e),
    (et = e = Mr(e.current, null)),
    (mt = Ut = t),
    (rt = 0),
    (Ha = null),
    (ip = cu = hi = 0),
    (Ot = Sa = null),
    ti !== null)
  ) {
    for (t = 0; t < ti.length; t++)
      if (((n = ti[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    ti = null;
  }
  return e;
}
function yv(e, t) {
  do {
    var n = et;
    try {
      if ((Vd(), (Gs.current = zl), Ol)) {
        for (var r = De.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ol = !1;
      }
      if (
        ((pi = 0),
        (ot = nt = De = null),
        (xa = !1),
        (Fa = 0),
        (rp.current = null),
        n === null || n.return === null)
      ) {
        (rt = 1), (Ha = t), (et = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = mt),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = rm(a);
          if (y !== null) {
            (y.flags &= -257),
              im(y, a, s, o, t),
              y.mode & 1 && nm(o, u, t),
              (t = y),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var h = new Set();
              h.add(l), (t.updateQueue = h);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              nm(o, u, t), lp();
              break e;
            }
            l = Error(I(426));
          }
        } else if (je && s.mode & 1) {
          var C = rm(a);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              im(C, a, s, o, t),
              Ud(vo(l, s));
            break e;
          }
        }
        (o = l = vo(l, s)),
          rt !== 4 && (rt = 2),
          Sa === null ? (Sa = [o]) : Sa.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = ev(o, l, t);
              qh(o, g);
              break e;
            case 1:
              s = l;
              var p = o.type,
                x = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (x !== null &&
                    typeof x.componentDidCatch == 'function' &&
                    (Lr === null || !Lr.has(x))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = tv(o, s, t);
                qh(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wv(n);
    } catch (E) {
      (t = E), et === n && n !== null && (et = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vv() {
  var e = Tl.current;
  return (Tl.current = zl), e === null ? zl : e;
}
function lp() {
  (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
    st === null || (!(hi & 268435455) && !(cu & 268435455)) || Cr(st, mt);
}
function jl(e, t) {
  var n = fe;
  fe |= 2;
  var r = vv();
  (st !== e || mt !== t) && ((Kn = null), si(e, t));
  do
    try {
      qS();
      break;
    } catch (i) {
      yv(e, i);
    }
  while (!0);
  if ((Vd(), (fe = n), (Tl.current = r), et !== null)) throw Error(I(261));
  return (st = null), (mt = 0), rt;
}
function qS() {
  for (; et !== null; ) xv(et);
}
function QS() {
  for (; et !== null && !bw(); ) xv(et);
}
function xv(e) {
  var t = bv(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? wv(e) : (et = t),
    (rp.current = null);
}
function wv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = VS(n, t)), n !== null)) {
        (n.flags &= 32767), (et = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (rt = 6), (et = null);
        return;
      }
    } else if (((n = HS(n, t, Ut)), n !== null)) {
      et = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      et = t;
      return;
    }
    et = t = e;
  } while (t !== null);
  rt === 0 && (rt = 5);
}
function qr(e, t, n) {
  var r = Se,
    i = ln.transition;
  try {
    (ln.transition = null), (Se = 1), JS(e, t, n, r);
  } finally {
    (ln.transition = i), (Se = r);
  }
  return null;
}
function JS(e, t, n, r) {
  do uo();
  while (_r !== null);
  if (fe & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Tw(e, o),
    e === st && ((et = st = null), (mt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ts ||
      ((Ts = !0),
      kv(gl, function () {
        return uo(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ln.transition), (ln.transition = null);
    var a = Se;
    Se = 1;
    var s = fe;
    (fe |= 4),
      (rp.current = null),
      KS(e, n),
      hv(n, e),
      vS(bf),
      (vl = !!Sf),
      (bf = Sf = null),
      (e.current = n),
      XS(n),
      kw(),
      (fe = s),
      (Se = a),
      (ln.transition = o);
  } else e.current = n;
  if (
    (Ts && ((Ts = !1), (_r = e), (Ll = i)),
    (o = e.pendingLanes),
    o === 0 && (Lr = null),
    Pw(n.stateNode),
    jt(e, Ke()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Nl) throw ((Nl = !1), (e = Uf), (Uf = null), e);
  return (
    Ll & 1 && e.tag !== 0 && uo(),
    (o = e.pendingLanes),
    o & 1 ? (e === Hf ? ba++ : ((ba = 0), (Hf = e))) : (ba = 0),
    Br(),
    null
  );
}
function uo() {
  if (_r !== null) {
    var e = ey(Ll),
      t = ln.transition,
      n = Se;
    try {
      if (((ln.transition = null), (Se = 16 > e ? 16 : e), _r === null))
        var r = !1;
      else {
        if (((e = _r), (_r = null), (Ll = 0), fe & 6)) throw Error(I(331));
        var i = fe;
        for (fe |= 4, V = e.current; V !== null; ) {
          var o = V,
            a = o.child;
          if (V.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (V = u; V !== null; ) {
                  var f = V;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (V = d);
                  else
                    for (; V !== null; ) {
                      f = V;
                      var c = f.sibling,
                        y = f.return;
                      if ((fv(f), f === u)) {
                        V = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = y), (V = c);
                        break;
                      }
                      V = y;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var C = h.sibling;
                    (h.sibling = null), (h = C);
                  } while (h !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (V = a);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wa(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (V = g);
                break e;
              }
              V = o.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          a = V;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (V = x);
          else
            e: for (a = p; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uu(9, s);
                  }
                } catch (E) {
                  Ve(s, s.return, E);
                }
              if (s === a) {
                V = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (V = S);
                break e;
              }
              V = s.return;
            }
        }
        if (
          ((fe = i), Br(), Fn && typeof Fn.onPostCommitFiberRoot == 'function')
        )
          try {
            Fn.onPostCommitFiberRoot(tu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Se = n), (ln.transition = t);
    }
  }
  return !1;
}
function ym(e, t, n) {
  (t = vo(n, t)),
    (t = ev(e, t, 1)),
    (e = Nr(e, t, 1)),
    (t = Et()),
    e !== null && (ns(e, 1, t), jt(e, t));
}
function Ve(e, t, n) {
  if (e.tag === 3) ym(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ym(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Lr === null || !Lr.has(r)))
        ) {
          (e = vo(n, e)),
            (e = tv(t, e, 1)),
            (t = Nr(t, e, 1)),
            (e = Et()),
            t !== null && (ns(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ZS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    st === e &&
      (mt & n) === n &&
      (rt === 4 || (rt === 3 && (mt & 130023424) === mt && 500 > Ke() - op)
        ? si(e, 0)
        : (ip |= n)),
    jt(e, t);
}
function Sv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bs), (bs <<= 1), !(bs & 130023424) && (bs = 4194304))
      : (t = 1));
  var n = Et();
  (e = rr(e, t)), e !== null && (ns(e, t, n), jt(e, n));
}
function eb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sv(e, n);
}
function tb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Sv(e, n);
}
var bv;
bv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Nt.current) zt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (zt = !1), US(e, t, n);
      zt = !!(e.flags & 131072);
    }
  else (zt = !1), je && t.flags & 1048576 && Py(t, El, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qs(e, t), (e = t.pendingProps);
      var i = ho(t, bt.current);
      lo(t, n), (i = Jd(null, t, r, e, i, n));
      var o = Zd();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Lt(r) ? ((o = !0), kl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Xd(t),
            (i.updater = lu),
            (t.stateNode = i),
            (i._reactInternals = t),
            zf(t, r, e, n),
            (t = Lf(null, t, r, !0, o, n)))
          : ((t.tag = 0), je && o && Fd(t), Ct(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = rb(r)),
          (e = wn(r, e)),
          i)
        ) {
          case 0:
            t = Nf(null, t, r, e, n);
            break e;
          case 1:
            t = sm(null, t, r, e, n);
            break e;
          case 11:
            t = om(null, t, r, e, n);
            break e;
          case 14:
            t = am(null, t, r, wn(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        Nf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        sm(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ov(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ty(e, t),
          Rl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = vo(Error(I(423)), t)), (t = lm(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = vo(Error(I(424)), t)), (t = lm(e, t, r, n, i));
            break e;
          } else
            for (
              Wt = Tr(t.stateNode.containerInfo.firstChild),
                Kt = t,
                je = !0,
                kn = null,
                n = Oy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mo(), r === i)) {
            t = ir(e, t, n);
            break e;
          }
          Ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ny(t),
        e === null && Rf(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        kf(r, i) ? (a = null) : o !== null && kf(r, o) && (t.flags |= 32),
        iv(e, t),
        Ct(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Rf(t), null;
    case 13:
      return av(e, t, n);
    case 4:
      return (
        Gd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = go(t, null, r, n)) : Ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        om(e, t, r, i, n)
      );
    case 7:
      return Ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          Re(Pl, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (_n(o.value, a)) {
            if (o.children === i.children && !Nt.current) {
              t = ir(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Jn(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      $f(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(I(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  $f(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Ct(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        lo(t, n),
        (i = un(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = wn(r, t.pendingProps)),
        (i = wn(r.type, i)),
        am(e, t, r, i, n)
      );
    case 15:
      return nv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        qs(e, t),
        (t.tag = 1),
        Lt(r) ? ((e = !0), kl(t)) : (e = !1),
        lo(t, n),
        Zy(t, r, i),
        zf(t, r, i, n),
        Lf(null, t, r, !0, e, n)
      );
    case 19:
      return sv(e, t, n);
    case 22:
      return rv(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function kv(e, t) {
  return q0(e, t);
}
function nb(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function sn(e, t, n, r) {
  return new nb(e, t, n, r);
}
function up(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rb(e) {
  if (typeof e == 'function') return up(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Rd)) return 11;
    if (e === $d) return 14;
  }
  return 2;
}
function Mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = sn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zs(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == 'function')) up(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case Wi:
        return li(n.children, i, o, t);
      case _d:
        (a = 8), (i |= 8);
        break;
      case ef:
        return (
          (e = sn(12, n, t, i | 2)), (e.elementType = ef), (e.lanes = o), e
        );
      case tf:
        return (e = sn(13, n, t, i)), (e.elementType = tf), (e.lanes = o), e;
      case nf:
        return (e = sn(19, n, t, i)), (e.elementType = nf), (e.lanes = o), e;
      case N0:
        return fu(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case z0:
              a = 10;
              break e;
            case T0:
              a = 9;
              break e;
            case Rd:
              a = 11;
              break e;
            case $d:
              a = 14;
              break e;
            case Sr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = sn(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function li(e, t, n, r) {
  return (e = sn(7, e, r, t)), (e.lanes = n), e;
}
function fu(e, t, n, r) {
  return (
    (e = sn(22, e, r, t)),
    (e.elementType = N0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Lc(e, t, n) {
  return (e = sn(6, e, null, t)), (e.lanes = n), e;
}
function jc(e, t, n) {
  return (
    (t = sn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ib(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mc(0)),
    (this.expirationTimes = mc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cp(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new ib(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = sn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xd(o),
    e
  );
}
function ob(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vi,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cv(e) {
  if (!e) return Ar;
  e = e._reactInternals;
  e: {
    if (xi(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Lt(n)) return Cy(e, n, t);
  }
  return t;
}
function Ev(e, t, n, r, i, o, a, s, l) {
  return (
    (e = cp(n, r, !0, e, i, o, a, s, l)),
    (e.context = Cv(null)),
    (n = e.current),
    (r = Et()),
    (i = jr(n)),
    (o = Jn(r, i)),
    (o.callback = t ?? null),
    Nr(n, o, i),
    (e.current.lanes = i),
    ns(e, i, r),
    jt(e, r),
    e
  );
}
function du(e, t, n, r) {
  var i = t.current,
    o = Et(),
    a = jr(i);
  return (
    (n = Cv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Jn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nr(i, t, a)),
    e !== null && (En(e, i, a, o), Xs(e, i, a)),
    a
  );
}
function Ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fp(e, t) {
  vm(e, t), (e = e.alternate) && vm(e, t);
}
function ab() {
  return null;
}
var Pv =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function dp(e) {
  this._internalRoot = e;
}
pu.prototype.render = dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  du(e, t, null, null);
};
pu.prototype.unmount = dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mi(function () {
      du(null, e, null, null);
    }),
      (t[nr] = null);
  }
};
function pu(e) {
  this._internalRoot = e;
}
pu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ry();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kr.length && t !== 0 && t < kr[n].priority; n++);
    kr.splice(n, 0, e), n === 0 && oy(e);
  }
};
function pp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function xm() {}
function sb(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = Ml(a);
        o.call(u);
      };
    }
    var a = Ev(t, r, e, 0, null, !1, !1, '', xm);
    return (
      (e._reactRootContainer = a),
      (e[nr] = a.current),
      ja(e.nodeType === 8 ? e.parentNode : e),
      mi(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = Ml(l);
      s.call(u);
    };
  }
  var l = cp(e, 0, !1, null, null, !1, !1, '', xm);
  return (
    (e._reactRootContainer = l),
    (e[nr] = l.current),
    ja(e.nodeType === 8 ? e.parentNode : e),
    mi(function () {
      du(t, l, n, r);
    }),
    l
  );
}
function mu(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == 'function') {
      var s = i;
      i = function () {
        var l = Ml(a);
        s.call(l);
      };
    }
    du(t, a, e, i);
  } else a = sb(n, t, e, i, r);
  return Ml(a);
}
ty = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = sa(t.pendingLanes);
        n !== 0 &&
          (Td(t, n | 1), jt(t, Ke()), !(fe & 6) && ((xo = Ke() + 500), Br()));
      }
      break;
    case 13:
      mi(function () {
        var r = rr(e, 1);
        if (r !== null) {
          var i = Et();
          En(r, e, 1, i);
        }
      }),
        fp(e, 1);
  }
};
Nd = function (e) {
  if (e.tag === 13) {
    var t = rr(e, 134217728);
    if (t !== null) {
      var n = Et();
      En(t, e, 134217728, n);
    }
    fp(e, 134217728);
  }
};
ny = function (e) {
  if (e.tag === 13) {
    var t = jr(e),
      n = rr(e, t);
    if (n !== null) {
      var r = Et();
      En(n, e, t, r);
    }
    fp(e, t);
  }
};
ry = function () {
  return Se;
};
iy = function (e, t) {
  var n = Se;
  try {
    return (Se = e), t();
  } finally {
    Se = n;
  }
};
pf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((af(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ou(r);
            if (!i) throw Error(I(90));
            j0(r), af(r, i);
          }
        }
      }
      break;
    case 'textarea':
      I0(e, n);
      break;
    case 'select':
      (t = n.value), t != null && io(e, !!n.multiple, t, !1);
  }
};
V0 = ap;
W0 = mi;
var lb = { usingClientEntryPoint: !1, Events: [is, Yi, ou, U0, H0, ap] },
  Go = {
    findFiberByHostInstance: ei,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  ub = {
    bundleType: Go.bundleType,
    version: Go.version,
    rendererPackageName: Go.rendererPackageName,
    rendererConfig: Go.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = G0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Go.findFiberByHostInstance || ab,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ns.isDisabled && Ns.supportsFiber)
    try {
      (tu = Ns.inject(ub)), (Fn = Ns);
    } catch {}
}
Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lb;
Yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pp(t)) throw Error(I(200));
  return ob(e, t, null, n);
};
Yt.createRoot = function (e, t) {
  if (!pp(e)) throw Error(I(299));
  var n = !1,
    r = '',
    i = Pv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cp(e, 1, !1, null, null, n, !1, r, i)),
    (e[nr] = t.current),
    ja(e.nodeType === 8 ? e.parentNode : e),
    new dp(t)
  );
};
Yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(I(188))
      : ((e = Object.keys(e).join(',')), Error(I(268, e)));
  return (e = G0(t)), (e = e === null ? null : e.stateNode), e;
};
Yt.flushSync = function (e) {
  return mi(e);
};
Yt.hydrate = function (e, t, n) {
  if (!hu(t)) throw Error(I(200));
  return mu(null, e, t, !0, n);
};
Yt.hydrateRoot = function (e, t, n) {
  if (!pp(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = Pv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Ev(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[nr] = t.current),
    ja(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new pu(t);
};
Yt.render = function (e, t, n) {
  if (!hu(t)) throw Error(I(200));
  return mu(null, e, t, !1, n);
};
Yt.unmountComponentAtNode = function (e) {
  if (!hu(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (mi(function () {
        mu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nr] = null);
        });
      }),
      !0)
    : !1;
};
Yt.unstable_batchedUpdates = ap;
Yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hu(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return mu(e, t, n, !1, r);
};
Yt.version = '18.3.1-next-f1338f8080-20240426';
function _v() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v);
    } catch (e) {
      console.error(e);
    }
}
_v(), (_0.exports = Yt);
var hp = _0.exports;
const ua = Zl(hp),
  cb = xd({ __proto__: null, default: ua }, [hp]);
var wm = hp;
(Jc.createRoot = wm.createRoot), (Jc.hydrateRoot = wm.hydrateRoot);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ie() {
  return (
    (Ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ie.apply(this, arguments)
  );
}
var Qe;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Qe || (Qe = {}));
const Sm = 'popstate';
function fb(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: s } = r.location;
    return Va(
      '',
      { pathname: o, search: a, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : gi(i);
  }
  return pb(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function wo(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function db() {
  return Math.random().toString(36).substr(2, 8);
}
function bm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Va(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ie(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ur(t) : t,
      { state: n, key: (t && t.key) || r || db() }
    )
  );
}
function gi(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Ur(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function pb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    s = Qe.Pop,
    l = null,
    u = f();
  u == null && ((u = 0), a.replaceState(Ie({}, a.state, { idx: u }), ''));
  function f() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = Qe.Pop;
    let C = f(),
      g = C == null ? null : C - u;
    (u = C), l && l({ action: s, location: h.location, delta: g });
  }
  function c(C, g) {
    s = Qe.Push;
    let p = Va(h.location, C, g);
    u = f() + 1;
    let x = bm(p, u),
      S = h.createHref(p);
    try {
      a.pushState(x, '', S);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      i.location.assign(S);
    }
    o && l && l({ action: s, location: h.location, delta: 1 });
  }
  function y(C, g) {
    s = Qe.Replace;
    let p = Va(h.location, C, g);
    u = f();
    let x = bm(p, u),
      S = h.createHref(p);
    a.replaceState(x, '', S),
      o && l && l({ action: s, location: h.location, delta: 0 });
  }
  function m(C) {
    let g = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      p = typeof C == 'string' ? C : gi(C);
    return (
      (p = p.replace(/ $/, '%20')),
      ae(
        g,
        'No window.location.(origin|href) available to create URL for href: ' +
          p
      ),
      new URL(p, g)
    );
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, a);
    },
    listen(C) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(Sm, d),
        (l = C),
        () => {
          i.removeEventListener(Sm, d), (l = null);
        }
      );
    },
    createHref(C) {
      return t(i, C);
    },
    createURL: m,
    encodeLocation(C) {
      let g = m(C);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: c,
    replace: y,
    go(C) {
      return a.go(C);
    },
  };
  return h;
}
var _e;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(_e || (_e = {}));
const hb = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function mb(e) {
  return e.index === !0;
}
function Wa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, String(o)],
        s = typeof i.id == 'string' ? i.id : a.join('-');
      if (
        (ae(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route'
        ),
        ae(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        mb(i))
      ) {
        let l = Ie({}, i, t(i), { id: s });
        return (r[s] = l), l;
      } else {
        let l = Ie({}, i, t(i), { id: s, children: void 0 });
        return (
          (r[s] = l), i.children && (l.children = Wa(i.children, t, a, r)), l
        );
      }
    })
  );
}
function Zr(e, t, n) {
  return n === void 0 && (n = '/'), el(e, t, n, !1);
}
function el(e, t, n, r) {
  let i = typeof t == 'string' ? Ur(t) : t,
    o = zo(i.pathname || '/', n);
  if (o == null) return null;
  let a = Rv(e);
  yb(a);
  let s = null;
  for (let l = 0; s == null && l < a.length; ++l) {
    let u = Rb(o);
    s = Pb(a[l], u, r);
  }
  return s;
}
function gb(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Rv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (o, a, s) => {
    let l = {
      relativePath: s === void 0 ? o.path || '' : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    l.relativePath.startsWith('/') &&
      (ae(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Zn([r, l.relativePath]),
      f = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (ae(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Rv(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Cb(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, a) => {
      var s;
      if (o.path === '' || !((s = o.path) != null && s.includes('?'))) i(o, a);
      else for (let l of $v(o.path)) i(o, a, l);
    }),
    t
  );
}
function $v(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let a = $v(r.join('/')),
    s = [];
  return (
    s.push(...a.map((l) => (l === '' ? o : [o, l].join('/')))),
    i && s.push(...a),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function yb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Eb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vb = /^:[\w-]+$/,
  xb = 3,
  wb = 2,
  Sb = 1,
  bb = 10,
  kb = -2,
  km = (e) => e === '*';
function Cb(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(km) && (r += kb),
    t && (r += wb),
    n
      .filter((i) => !km(i))
      .reduce((i, o) => i + (vb.test(o) ? xb : o === '' ? Sb : bb), r)
  );
}
function Eb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Pb(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = '/',
    a = [];
  for (let s = 0; s < r.length; ++s) {
    let l = r[s],
      u = s === r.length - 1,
      f = o === '/' ? t : t.slice(o.length) || '/',
      d = Cm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        f
      ),
      c = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Cm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          f
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      a.push({
        params: i,
        pathname: Zn([o, d.pathname]),
        pathnameBase: zb(Zn([o, d.pathnameBase])),
        route: c,
      }),
      d.pathnameBase !== '/' && (o = Zn([o, d.pathnameBase]));
  }
  return a;
}
function Cm(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _b(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    s = i.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: c, isOptional: y } = f;
      if (c === '*') {
        let h = s[d] || '';
        a = o.slice(0, o.length - h.length).replace(/(.)\/+$/, '$1');
      }
      const m = s[d];
      return (
        y && !m ? (u[c] = void 0) : (u[c] = (m || '').replace(/%2F/g, '/')), u
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function _b(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    wo(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function Rb(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      wo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function zo(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function $b(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? Ur(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Ob(n, t)) : t,
    search: Tb(r),
    hash: Nb(i),
  };
}
function Ob(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Mc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ov(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function mp(e, t) {
  let n = Ov(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function gp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = Ur(e))
    : ((i = Ie({}, e)),
      ae(
        !i.pathname || !i.pathname.includes('?'),
        Mc('?', 'pathname', 'search', i)
      ),
      ae(
        !i.pathname || !i.pathname.includes('#'),
        Mc('#', 'pathname', 'hash', i)
      ),
      ae(!i.search || !i.search.includes('#'), Mc('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    a = o ? '/' : i.pathname,
    s;
  if (a == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith('..')) {
      let c = a.split('/');
      for (; c[0] === '..'; ) c.shift(), (d -= 1);
      i.pathname = c.join('/');
    }
    s = d >= 0 ? t[d] : '/';
  }
  let l = $b(i, s),
    u = a && a !== '/' && a.endsWith('/'),
    f = (o || a === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || f) && (l.pathname += '/'), l;
}
const Zn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  zb = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Tb = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Nb = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class yp {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function gu(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const zv = ['post', 'put', 'patch', 'delete'],
  Lb = new Set(zv),
  jb = ['get', ...zv],
  Mb = new Set(jb),
  Ib = new Set([301, 302, 303, 307, 308]),
  Ab = new Set([307, 308]),
  Ic = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Db = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Yo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  vp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fb = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Tv = 'remix-router-transitions';
function Bb(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  ae(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let k = e.detectErrorBoundary;
    i = (P) => ({ hasErrorBoundary: k(P) });
  } else i = Fb;
  let o = {},
    a = Wa(e.routes, i, void 0, o),
    s,
    l = e.basename || '/',
    u = e.unstable_dataStrategy || Kb,
    f = e.unstable_patchRoutesOnMiss,
    d = Ie(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    c = null,
    y = new Set(),
    m = null,
    h = null,
    C = null,
    g = e.hydrationData != null,
    p = Zr(a, e.history.location, l),
    x = null;
  if (p == null && !f) {
    let k = kt(404, { pathname: e.history.location.pathname }),
      { matches: P, route: $ } = Lm(a);
    (p = P), (x = { [$.id]: k });
  }
  p && f && uc(p, a, e.history.location.pathname).active && (p = null);
  let S;
  if (!p) (S = !1), (p = []);
  else if (p.some((k) => k.route.lazy)) S = !1;
  else if (!p.some((k) => k.route.loader)) S = !0;
  else if (d.v7_partialHydration) {
    let k = e.hydrationData ? e.hydrationData.loaderData : null,
      P = e.hydrationData ? e.hydrationData.errors : null,
      $ = (T) =>
        T.route.loader
          ? typeof T.route.loader == 'function' && T.route.loader.hydrate === !0
            ? !1
            : (k && k[T.route.id] !== void 0) || (P && P[T.route.id] !== void 0)
          : !0;
    if (P) {
      let T = p.findIndex((U) => P[U.route.id] !== void 0);
      S = p.slice(0, T + 1).every($);
    } else S = p.every($);
  } else S = e.hydrationData != null;
  let E,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: S,
      navigation: Ic,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || x,
      fetchers: new Map(),
      blockers: new Map(),
    },
    b = Qe.Pop,
    N = !1,
    L,
    A = !1,
    H = new Map(),
    G = null,
    Y = !1,
    K = !1,
    R = [],
    z = [],
    F = new Map(),
    O = 0,
    M = -1,
    j = new Map(),
    q = new Set(),
    re = new Map(),
    ye = new Map(),
    se = new Set(),
    Me = new Map(),
    ce = new Map(),
    yt = new Map(),
    Rt = !1;
  function We() {
    if (
      ((c = e.history.listen((k) => {
        let { action: P, location: $, delta: T } = k;
        if (Rt) {
          Rt = !1;
          return;
        }
        wo(
          ce.size === 0 || T != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let U = it({
          currentLocation: v.location,
          nextLocation: $,
          historyAction: P,
        });
        if (U && T != null) {
          (Rt = !0),
            e.history.go(T * -1),
            $e(U, {
              state: 'blocked',
              location: $,
              proceed() {
                $e(U, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: $,
                }),
                  e.history.go(T);
              },
              reset() {
                let X = new Map(v.blockers);
                X.set(U, Yo), we({ blockers: X });
              },
            });
          return;
        }
        return Jt(P, $);
      })),
      n)
    ) {
      ok(t, H);
      let k = () => ak(t, H);
      t.addEventListener('pagehide', k),
        (G = () => t.removeEventListener('pagehide', k));
    }
    return v.initialized || Jt(Qe.Pop, v.location, { initialHydration: !0 }), E;
  }
  function Rn() {
    c && c(),
      G && G(),
      y.clear(),
      L && L.abort(),
      v.fetchers.forEach((k, P) => yn(P)),
      v.blockers.forEach((k, P) => ue(P));
  }
  function $n(k) {
    return y.add(k), () => y.delete(k);
  }
  function we(k, P) {
    P === void 0 && (P = {}), (v = Ie({}, v, k));
    let $ = [],
      T = [];
    d.v7_fetcherPersist &&
      v.fetchers.forEach((U, X) => {
        U.state === 'idle' && (se.has(X) ? T.push(X) : $.push(X));
      }),
      [...y].forEach((U) =>
        U(v, {
          deletedFetchers: T,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        ($.forEach((U) => v.fetchers.delete(U)), T.forEach((U) => yn(U)));
  }
  function On(k, P, $) {
    var T, U;
    let { flushSync: X } = $ === void 0 ? {} : $,
      te =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        bn(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((T = k.state) == null ? void 0 : T._isRedirect) !== !0,
      B;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (B = P.actionData)
        : (B = null)
      : te
      ? (B = v.actionData)
      : (B = null);
    let ne = P.loaderData
        ? Tm(v.loaderData, P.loaderData, P.matches || [], P.errors)
        : v.loaderData,
      Z = v.blockers;
    Z.size > 0 && ((Z = new Map(Z)), Z.forEach((pe, Ee) => Z.set(Ee, Yo)));
    let ee =
      N === !0 ||
      (v.navigation.formMethod != null &&
        bn(v.navigation.formMethod) &&
        ((U = k.state) == null ? void 0 : U._isRedirect) !== !0);
    s && ((a = s), (s = void 0)),
      Y ||
        b === Qe.Pop ||
        (b === Qe.Push
          ? e.history.push(k, k.state)
          : b === Qe.Replace && e.history.replace(k, k.state));
    let Ce;
    if (b === Qe.Pop) {
      let pe = H.get(v.location.pathname);
      pe && pe.has(k.pathname)
        ? (Ce = { currentLocation: v.location, nextLocation: k })
        : H.has(k.pathname) &&
          (Ce = { currentLocation: k, nextLocation: v.location });
    } else if (A) {
      let pe = H.get(v.location.pathname);
      pe
        ? pe.add(k.pathname)
        : ((pe = new Set([k.pathname])), H.set(v.location.pathname, pe)),
        (Ce = { currentLocation: v.location, nextLocation: k });
    }
    we(
      Ie({}, P, {
        actionData: B,
        loaderData: ne,
        historyAction: b,
        location: k,
        initialized: !0,
        navigation: Ic,
        revalidation: 'idle',
        restoreScrollPosition: ch(k, P.matches || v.matches),
        preventScrollReset: ee,
        blockers: Z,
      }),
      { viewTransitionOpts: Ce, flushSync: X === !0 }
    ),
      (b = Qe.Pop),
      (N = !1),
      (A = !1),
      (Y = !1),
      (K = !1),
      (R = []),
      (z = []);
  }
  async function Kr(k, P) {
    if (typeof k == 'number') {
      e.history.go(k);
      return;
    }
    let $ = Kf(
        v.location,
        v.matches,
        l,
        d.v7_prependBasename,
        k,
        d.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: T,
        submission: U,
        error: X,
      } = Em(d.v7_normalizeFormMethod, !1, $, P),
      te = v.location,
      B = Va(v.location, T, P && P.state);
    B = Ie({}, B, e.history.encodeLocation(B));
    let ne = P && P.replace != null ? P.replace : void 0,
      Z = Qe.Push;
    ne === !0
      ? (Z = Qe.Replace)
      : ne === !1 ||
        (U != null &&
          bn(U.formMethod) &&
          U.formAction === v.location.pathname + v.location.search &&
          (Z = Qe.Replace));
    let ee =
        P && 'preventScrollReset' in P ? P.preventScrollReset === !0 : void 0,
      Ce = (P && P.unstable_flushSync) === !0,
      pe = it({ currentLocation: te, nextLocation: B, historyAction: Z });
    if (pe) {
      $e(pe, {
        state: 'blocked',
        location: B,
        proceed() {
          $e(pe, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: B,
          }),
            Kr(k, P);
        },
        reset() {
          let Ee = new Map(v.blockers);
          Ee.set(pe, Yo), we({ blockers: Ee });
        },
      });
      return;
    }
    return await Jt(Z, B, {
      submission: U,
      pendingError: X,
      preventScrollReset: ee,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: Ce,
    });
  }
  function Ao() {
    if (
      (pr(),
      we({ revalidation: 'loading' }),
      v.navigation.state !== 'submitting')
    ) {
      if (v.navigation.state === 'idle') {
        Jt(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Jt(b || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function Jt(k, P, $) {
    L && L.abort(),
      (L = null),
      (b = k),
      (Y = ($ && $.startUninterruptedRevalidation) === !0),
      jx(v.location, v.matches),
      (N = ($ && $.preventScrollReset) === !0),
      (A = ($ && $.enableViewTransition) === !0);
    let T = s || a,
      U = $ && $.overrideNavigation,
      X = Zr(T, P, l),
      te = ($ && $.flushSync) === !0,
      B = uc(X, T, P.pathname);
    if ((B.active && B.matches && (X = B.matches), !X)) {
      let { error: ve, notFoundMatches: ft, route: qe } = $t(P.pathname);
      On(
        P,
        { matches: ft, loaderData: {}, errors: { [qe.id]: ve } },
        { flushSync: te }
      );
      return;
    }
    if (
      v.initialized &&
      !K &&
      Jb(v.location, P) &&
      !($ && $.submission && bn($.submission.formMethod))
    ) {
      On(P, { matches: X }, { flushSync: te });
      return;
    }
    L = new AbortController();
    let ne = zi(e.history, P, L.signal, $ && $.submission),
      Z;
    if ($ && $.pendingError)
      Z = [ka(X).route.id, { type: _e.error, error: $.pendingError }];
    else if ($ && $.submission && bn($.submission.formMethod)) {
      let ve = await It(ne, P, $.submission, X, B.active, {
        replace: $.replace,
        flushSync: te,
      });
      if (ve.shortCircuited) return;
      if (ve.pendingActionResult) {
        let [ft, qe] = ve.pendingActionResult;
        if (Ht(qe) && gu(qe.error) && qe.error.status === 404) {
          (L = null),
            On(P, {
              matches: ve.matches,
              loaderData: {},
              errors: { [ft]: qe.error },
            });
          return;
        }
      }
      (X = ve.matches || X),
        (Z = ve.pendingActionResult),
        (U = Ac(P, $.submission)),
        (te = !1),
        (B.active = !1),
        (ne = zi(e.history, ne.url, ne.signal));
    }
    let {
      shortCircuited: ee,
      matches: Ce,
      loaderData: pe,
      errors: Ee,
    } = await mn(
      ne,
      P,
      X,
      B.active,
      U,
      $ && $.submission,
      $ && $.fetcherSubmission,
      $ && $.replace,
      $ && $.initialHydration === !0,
      te,
      Z
    );
    ee ||
      ((L = null),
      On(P, Ie({ matches: Ce || X }, Nm(Z), { loaderData: pe, errors: Ee })));
  }
  async function It(k, P, $, T, U, X) {
    X === void 0 && (X = {}), pr();
    let te = rk(P, $);
    if ((we({ navigation: te }, { flushSync: X.flushSync === !0 }), U)) {
      let Z = await ps(T, P.pathname, k.signal);
      if (Z.type === 'aborted') return { shortCircuited: !0 };
      if (Z.type === 'error') {
        let { error: ee, notFoundMatches: Ce, route: pe } = zn(P.pathname, Z);
        return {
          matches: Ce,
          pendingActionResult: [pe.id, { type: _e.error, error: ee }],
        };
      } else if (Z.matches) T = Z.matches;
      else {
        let { notFoundMatches: ee, error: Ce, route: pe } = $t(P.pathname);
        return {
          matches: ee,
          pendingActionResult: [pe.id, { type: _e.error, error: Ce }],
        };
      }
    }
    let B,
      ne = ca(T, P);
    if (!ne.route.action && !ne.route.lazy)
      B = {
        type: _e.error,
        error: kt(405, {
          method: k.method,
          pathname: P.pathname,
          routeId: ne.route.id,
        }),
      };
    else if (((B = (await At('action', k, [ne], T))[0]), k.signal.aborted))
      return { shortCircuited: !0 };
    if (ii(B)) {
      let Z;
      return (
        X && X.replace != null
          ? (Z = X.replace)
          : (Z =
              $m(B.response.headers.get('Location'), new URL(k.url), l) ===
              v.location.pathname + v.location.search),
        await Zt(k, B, { submission: $, replace: Z }),
        { shortCircuited: !0 }
      );
    }
    if (ri(B)) throw kt(400, { type: 'defer-action' });
    if (Ht(B)) {
      let Z = ka(T, ne.route.id);
      return (
        (X && X.replace) !== !0 && (b = Qe.Push),
        { matches: T, pendingActionResult: [Z.route.id, B] }
      );
    }
    return { matches: T, pendingActionResult: [ne.route.id, B] };
  }
  async function mn(k, P, $, T, U, X, te, B, ne, Z, ee) {
    let Ce = U || Ac(P, X),
      pe = X || te || Im(Ce),
      Ee = !Y && (!d.v7_partialHydration || !ne);
    if (T) {
      if (Ee) {
        let Be = Xr(ee);
        we(Ie({ navigation: Ce }, Be !== void 0 ? { actionData: Be } : {}), {
          flushSync: Z,
        });
      }
      let oe = await ps($, P.pathname, k.signal);
      if (oe.type === 'aborted') return { shortCircuited: !0 };
      if (oe.type === 'error') {
        let { error: Be, notFoundMatches: Ft, route: Pe } = zn(P.pathname, oe);
        return { matches: Ft, loaderData: {}, errors: { [Pe.id]: Be } };
      } else if (oe.matches) $ = oe.matches;
      else {
        let { error: Be, notFoundMatches: Ft, route: Pe } = $t(P.pathname);
        return { matches: Ft, loaderData: {}, errors: { [Pe.id]: Be } };
      }
    }
    let ve = s || a,
      [ft, qe] = Pm(
        e.history,
        v,
        $,
        pe,
        P,
        d.v7_partialHydration && ne === !0,
        d.unstable_skipActionErrorRevalidation,
        K,
        R,
        z,
        se,
        re,
        q,
        ve,
        l,
        ee
      );
    if (
      (en(
        (oe) =>
          !($ && $.some((Be) => Be.route.id === oe)) ||
          (ft && ft.some((Be) => Be.route.id === oe))
      ),
      (M = ++O),
      ft.length === 0 && qe.length === 0)
    ) {
      let oe = W();
      return (
        On(
          P,
          Ie(
            {
              matches: $,
              loaderData: {},
              errors: ee && Ht(ee[1]) ? { [ee[0]]: ee[1].error } : null,
            },
            Nm(ee),
            oe ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: Z }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ee) {
      let oe = {};
      if (!T) {
        oe.navigation = Ce;
        let Be = Xr(ee);
        Be !== void 0 && (oe.actionData = Be);
      }
      qe.length > 0 && (oe.fetchers = gn(qe)), we(oe, { flushSync: Z });
    }
    qe.forEach((oe) => {
      F.has(oe.key) && vn(oe.key),
        oe.controller && F.set(oe.key, oe.controller);
    });
    let Fo = () => qe.forEach((oe) => vn(oe.key));
    L && L.signal.addEventListener('abort', Fo);
    let { loaderResults: mr, fetcherResults: _i } = await Ci(
      v.matches,
      $,
      ft,
      qe,
      k
    );
    if (k.signal.aborted) return { shortCircuited: !0 };
    L && L.signal.removeEventListener('abort', Fo),
      qe.forEach((oe) => F.delete(oe.key));
    let Ri = jm([...mr, ..._i]);
    if (Ri) {
      if (Ri.idx >= ft.length) {
        let oe = qe[Ri.idx - ft.length].key;
        q.add(oe);
      }
      return await Zt(k, Ri.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: $i, errors: Tn } = zm(v, $, ft, mr, ee, qe, _i, Me);
    Me.forEach((oe, Be) => {
      oe.subscribe((Ft) => {
        (Ft || oe.done) && Me.delete(Be);
      });
    }),
      d.v7_partialHydration &&
        ne &&
        v.errors &&
        Object.entries(v.errors)
          .filter((oe) => {
            let [Be] = oe;
            return !ft.some((Ft) => Ft.route.id === Be);
          })
          .forEach((oe) => {
            let [Be, Ft] = oe;
            Tn = Object.assign(Tn || {}, { [Be]: Ft });
          });
    let hs = W(),
      ms = J(M),
      gs = hs || ms || qe.length > 0;
    return Ie(
      { matches: $, loaderData: $i, errors: Tn },
      gs ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function Xr(k) {
    if (k && !Ht(k[1])) return { [k[0]]: k[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function gn(k) {
    return (
      k.forEach((P) => {
        let $ = v.fetchers.get(P.key),
          T = qo(void 0, $ ? $.data : void 0);
        v.fetchers.set(P.key, T);
      }),
      new Map(v.fetchers)
    );
  }
  function Vn(k, P, $, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    F.has(k) && vn(k);
    let U = (T && T.unstable_flushSync) === !0,
      X = s || a,
      te = Kf(
        v.location,
        v.matches,
        l,
        d.v7_prependBasename,
        $,
        d.v7_relativeSplatPath,
        P,
        T == null ? void 0 : T.relative
      ),
      B = Zr(X, te, l),
      ne = uc(B, X, te);
    if ((ne.active && ne.matches && (B = ne.matches), !B)) {
      Q(k, P, kt(404, { pathname: te }), { flushSync: U });
      return;
    }
    let {
      path: Z,
      submission: ee,
      error: Ce,
    } = Em(d.v7_normalizeFormMethod, !0, te, T);
    if (Ce) {
      Q(k, P, Ce, { flushSync: U });
      return;
    }
    let pe = ca(B, Z);
    if (((N = (T && T.preventScrollReset) === !0), ee && bn(ee.formMethod))) {
      bi(k, P, Z, pe, B, ne.active, U, ee);
      return;
    }
    re.set(k, { routeId: P, path: Z }), ki(k, P, Z, pe, B, ne.active, U, ee);
  }
  async function bi(k, P, $, T, U, X, te, B) {
    pr(), re.delete(k);
    function ne(Pe) {
      if (!Pe.route.action && !Pe.route.lazy) {
        let Wn = kt(405, { method: B.formMethod, pathname: $, routeId: P });
        return Q(k, P, Wn, { flushSync: te }), !0;
      }
      return !1;
    }
    if (!X && ne(T)) return;
    let Z = v.fetchers.get(k);
    Dt(k, ik(B, Z), { flushSync: te });
    let ee = new AbortController(),
      Ce = zi(e.history, $, ee.signal, B);
    if (X) {
      let Pe = await ps(U, $, Ce.signal);
      if (Pe.type === 'aborted') return;
      if (Pe.type === 'error') {
        let { error: Wn } = zn($, Pe);
        Q(k, P, Wn, { flushSync: te });
        return;
      } else if (Pe.matches) {
        if (((U = Pe.matches), (T = ca(U, $)), ne(T))) return;
      } else {
        Q(k, P, kt(404, { pathname: $ }), { flushSync: te });
        return;
      }
    }
    F.set(k, ee);
    let pe = O,
      ve = (await At('action', Ce, [T], U))[0];
    if (Ce.signal.aborted) {
      F.get(k) === ee && F.delete(k);
      return;
    }
    if (d.v7_fetcherPersist && se.has(k)) {
      if (ii(ve) || Ht(ve)) {
        Dt(k, xr(void 0));
        return;
      }
    } else {
      if (ii(ve))
        if ((F.delete(k), M > pe)) {
          Dt(k, xr(void 0));
          return;
        } else
          return q.add(k), Dt(k, qo(B)), Zt(Ce, ve, { fetcherSubmission: B });
      if (Ht(ve)) {
        Q(k, P, ve.error);
        return;
      }
    }
    if (ri(ve)) throw kt(400, { type: 'defer-action' });
    let ft = v.navigation.location || v.location,
      qe = zi(e.history, ft, ee.signal),
      Fo = s || a,
      mr =
        v.navigation.state !== 'idle'
          ? Zr(Fo, v.navigation.location, l)
          : v.matches;
    ae(mr, "Didn't find any matches after fetcher action");
    let _i = ++O;
    j.set(k, _i);
    let Ri = qo(B, ve.data);
    v.fetchers.set(k, Ri);
    let [$i, Tn] = Pm(
      e.history,
      v,
      mr,
      B,
      ft,
      !1,
      d.unstable_skipActionErrorRevalidation,
      K,
      R,
      z,
      se,
      re,
      q,
      Fo,
      l,
      [T.route.id, ve]
    );
    Tn.filter((Pe) => Pe.key !== k).forEach((Pe) => {
      let Wn = Pe.key,
        fh = v.fetchers.get(Wn),
        Ax = qo(void 0, fh ? fh.data : void 0);
      v.fetchers.set(Wn, Ax),
        F.has(Wn) && vn(Wn),
        Pe.controller && F.set(Wn, Pe.controller);
    }),
      we({ fetchers: new Map(v.fetchers) });
    let hs = () => Tn.forEach((Pe) => vn(Pe.key));
    ee.signal.addEventListener('abort', hs);
    let { loaderResults: ms, fetcherResults: gs } = await Ci(
      v.matches,
      mr,
      $i,
      Tn,
      qe
    );
    if (ee.signal.aborted) return;
    ee.signal.removeEventListener('abort', hs),
      j.delete(k),
      F.delete(k),
      Tn.forEach((Pe) => F.delete(Pe.key));
    let oe = jm([...ms, ...gs]);
    if (oe) {
      if (oe.idx >= $i.length) {
        let Pe = Tn[oe.idx - $i.length].key;
        q.add(Pe);
      }
      return Zt(qe, oe.result);
    }
    let { loaderData: Be, errors: Ft } = zm(
      v,
      v.matches,
      $i,
      ms,
      void 0,
      Tn,
      gs,
      Me
    );
    if (v.fetchers.has(k)) {
      let Pe = xr(ve.data);
      v.fetchers.set(k, Pe);
    }
    J(_i),
      v.navigation.state === 'loading' && _i > M
        ? (ae(b, 'Expected pending action'),
          L && L.abort(),
          On(v.navigation.location, {
            matches: mr,
            loaderData: Be,
            errors: Ft,
            fetchers: new Map(v.fetchers),
          }))
        : (we({
            errors: Ft,
            loaderData: Tm(v.loaderData, Be, mr, Ft),
            fetchers: new Map(v.fetchers),
          }),
          (K = !1));
  }
  async function ki(k, P, $, T, U, X, te, B) {
    let ne = v.fetchers.get(k);
    Dt(k, qo(B, ne ? ne.data : void 0), { flushSync: te });
    let Z = new AbortController(),
      ee = zi(e.history, $, Z.signal);
    if (X) {
      let ve = await ps(U, $, ee.signal);
      if (ve.type === 'aborted') return;
      if (ve.type === 'error') {
        let { error: ft } = zn($, ve);
        Q(k, P, ft, { flushSync: te });
        return;
      } else if (ve.matches) (U = ve.matches), (T = ca(U, $));
      else {
        Q(k, P, kt(404, { pathname: $ }), { flushSync: te });
        return;
      }
    }
    F.set(k, Z);
    let Ce = O,
      Ee = (await At('loader', ee, [T], U))[0];
    if (
      (ri(Ee) && (Ee = (await Iv(Ee, ee.signal, !0)) || Ee),
      F.get(k) === Z && F.delete(k),
      !ee.signal.aborted)
    ) {
      if (se.has(k)) {
        Dt(k, xr(void 0));
        return;
      }
      if (ii(Ee))
        if (M > Ce) {
          Dt(k, xr(void 0));
          return;
        } else {
          q.add(k), await Zt(ee, Ee);
          return;
        }
      if (Ht(Ee)) {
        Q(k, P, Ee.error);
        return;
      }
      ae(!ri(Ee), 'Unhandled fetcher deferred data'), Dt(k, xr(Ee.data));
    }
  }
  async function Zt(k, P, $) {
    let {
      submission: T,
      fetcherSubmission: U,
      replace: X,
    } = $ === void 0 ? {} : $;
    P.response.headers.has('X-Remix-Revalidate') && (K = !0);
    let te = P.response.headers.get('Location');
    ae(te, 'Expected a Location header on the redirect Response'),
      (te = $m(te, new URL(k.url), l));
    let B = Va(v.location, te, { _isRedirect: !0 });
    if (n) {
      let Ee = !1;
      if (P.response.headers.has('X-Remix-Reload-Document')) Ee = !0;
      else if (vp.test(te)) {
        const ve = e.history.createURL(te);
        Ee = ve.origin !== t.location.origin || zo(ve.pathname, l) == null;
      }
      if (Ee) {
        X ? t.location.replace(te) : t.location.assign(te);
        return;
      }
    }
    L = null;
    let ne = X === !0 ? Qe.Replace : Qe.Push,
      { formMethod: Z, formAction: ee, formEncType: Ce } = v.navigation;
    !T && !U && Z && ee && Ce && (T = Im(v.navigation));
    let pe = T || U;
    if (Ab.has(P.response.status) && pe && bn(pe.formMethod))
      await Jt(ne, B, {
        submission: Ie({}, pe, { formAction: te }),
        preventScrollReset: N,
      });
    else {
      let Ee = Ac(B, T);
      await Jt(ne, B, {
        overrideNavigation: Ee,
        fetcherSubmission: U,
        preventScrollReset: N,
      });
    }
  }
  async function At(k, P, $, T) {
    try {
      let U = await Xb(u, k, P, $, T, o, i);
      return await Promise.all(
        U.map((X, te) => {
          if (ek(X)) {
            let B = X.result;
            return {
              type: _e.redirect,
              response: qb(B, P, $[te].route.id, T, l, d.v7_relativeSplatPath),
            };
          }
          return Yb(X);
        })
      );
    } catch (U) {
      return $.map(() => ({ type: _e.error, error: U }));
    }
  }
  async function Ci(k, P, $, T, U) {
    let [X, ...te] = await Promise.all([
      $.length ? At('loader', U, $, P) : [],
      ...T.map((B) => {
        if (B.matches && B.match && B.controller) {
          let ne = zi(e.history, B.path, B.controller.signal);
          return At('loader', ne, [B.match], B.matches).then((Z) => Z[0]);
        } else
          return Promise.resolve({
            type: _e.error,
            error: kt(404, { pathname: B.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Mm(
          k,
          $,
          X,
          X.map(() => U.signal),
          !1,
          v.loaderData
        ),
        Mm(
          k,
          T.map((B) => B.match),
          te,
          T.map((B) => (B.controller ? B.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: X, fetcherResults: te }
    );
  }
  function pr() {
    (K = !0),
      R.push(...en()),
      re.forEach((k, P) => {
        F.has(P) && (z.push(P), vn(P));
      });
  }
  function Dt(k, P, $) {
    $ === void 0 && ($ = {}),
      v.fetchers.set(k, P),
      we(
        { fetchers: new Map(v.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 }
      );
  }
  function Q(k, P, $, T) {
    T === void 0 && (T = {});
    let U = ka(v.matches, P);
    yn(k),
      we(
        { errors: { [U.route.id]: $ }, fetchers: new Map(v.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function hr(k) {
    return (
      d.v7_fetcherPersist &&
        (ye.set(k, (ye.get(k) || 0) + 1), se.has(k) && se.delete(k)),
      v.fetchers.get(k) || Db
    );
  }
  function yn(k) {
    let P = v.fetchers.get(k);
    F.has(k) && !(P && P.state === 'loading' && j.has(k)) && vn(k),
      re.delete(k),
      j.delete(k),
      q.delete(k),
      se.delete(k),
      v.fetchers.delete(k);
  }
  function Ei(k) {
    if (d.v7_fetcherPersist) {
      let P = (ye.get(k) || 0) - 1;
      P <= 0 ? (ye.delete(k), se.add(k)) : ye.set(k, P);
    } else yn(k);
    we({ fetchers: new Map(v.fetchers) });
  }
  function vn(k) {
    let P = F.get(k);
    ae(P, 'Expected fetch controller: ' + k), P.abort(), F.delete(k);
  }
  function Pi(k) {
    for (let P of k) {
      let $ = hr(P),
        T = xr($.data);
      v.fetchers.set(P, T);
    }
  }
  function W() {
    let k = [],
      P = !1;
    for (let $ of q) {
      let T = v.fetchers.get($);
      ae(T, 'Expected fetcher: ' + $),
        T.state === 'loading' && (q.delete($), k.push($), (P = !0));
    }
    return Pi(k), P;
  }
  function J(k) {
    let P = [];
    for (let [$, T] of j)
      if (T < k) {
        let U = v.fetchers.get($);
        ae(U, 'Expected fetcher: ' + $),
          U.state === 'loading' && (vn($), j.delete($), P.push($));
      }
    return Pi(P), P.length > 0;
  }
  function de(k, P) {
    let $ = v.blockers.get(k) || Yo;
    return ce.get(k) !== P && ce.set(k, P), $;
  }
  function ue(k) {
    v.blockers.delete(k), ce.delete(k);
  }
  function $e(k, P) {
    let $ = v.blockers.get(k) || Yo;
    ae(
      ($.state === 'unblocked' && P.state === 'blocked') ||
        ($.state === 'blocked' && P.state === 'blocked') ||
        ($.state === 'blocked' && P.state === 'proceeding') ||
        ($.state === 'blocked' && P.state === 'unblocked') ||
        ($.state === 'proceeding' && P.state === 'unblocked'),
      'Invalid blocker state transition: ' + $.state + ' -> ' + P.state
    );
    let T = new Map(v.blockers);
    T.set(k, P), we({ blockers: T });
  }
  function it(k) {
    let { currentLocation: P, nextLocation: $, historyAction: T } = k;
    if (ce.size === 0) return;
    ce.size > 1 && wo(!1, 'A router only supports one blocker at a time');
    let U = Array.from(ce.entries()),
      [X, te] = U[U.length - 1],
      B = v.blockers.get(X);
    if (
      !(B && B.state === 'proceeding') &&
      te({ currentLocation: P, nextLocation: $, historyAction: T })
    )
      return X;
  }
  function $t(k) {
    let P = kt(404, { pathname: k }),
      $ = s || a,
      { matches: T, route: U } = Lm($);
    return en(), { notFoundMatches: T, route: U, error: P };
  }
  function zn(k, P) {
    let $ = P.partialMatches,
      T = $[$.length - 1].route,
      U = kt(400, {
        type: 'route-discovery',
        routeId: T.id,
        pathname: k,
        message:
          P.error != null && 'message' in P.error ? P.error : String(P.error),
      });
    return { notFoundMatches: $, route: T, error: U };
  }
  function en(k) {
    let P = [];
    return (
      Me.forEach(($, T) => {
        (!k || k(T)) && ($.cancel(), P.push(T), Me.delete(T));
      }),
      P
    );
  }
  function Do(k, P, $) {
    if (((m = k), (C = P), (h = $ || null), !g && v.navigation === Ic)) {
      g = !0;
      let T = ch(v.location, v.matches);
      T != null && we({ restoreScrollPosition: T });
    }
    return () => {
      (m = null), (C = null), (h = null);
    };
  }
  function uh(k, P) {
    return (
      (h &&
        h(
          k,
          P.map((T) => gb(T, v.loaderData))
        )) ||
      k.key
    );
  }
  function jx(k, P) {
    if (m && C) {
      let $ = uh(k, P);
      m[$] = C();
    }
  }
  function ch(k, P) {
    if (m) {
      let $ = uh(k, P),
        T = m[$];
      if (typeof T == 'number') return T;
    }
    return null;
  }
  function uc(k, P, $) {
    if (f)
      if (k) {
        let T = k[k.length - 1].route;
        if (T.path && (T.path === '*' || T.path.endsWith('/*')))
          return { active: !0, matches: el(P, $, l, !0) };
      } else return { active: !0, matches: el(P, $, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ps(k, P, $) {
    let T = k,
      U = T.length > 0 ? T[T.length - 1].route : null;
    for (;;) {
      let X = s == null,
        te = s || a;
      try {
        await Wb(f, P, T, te, o, i, yt, $);
      } catch (ee) {
        return { type: 'error', error: ee, partialMatches: T };
      } finally {
        X && (a = [...a]);
      }
      if ($.aborted) return { type: 'aborted' };
      let B = Zr(te, P, l),
        ne = !1;
      if (B) {
        let ee = B[B.length - 1].route;
        if (ee.index) return { type: 'success', matches: B };
        if (ee.path && ee.path.length > 0)
          if (ee.path === '*') ne = !0;
          else return { type: 'success', matches: B };
      }
      let Z = el(te, P, l, !0);
      if (
        !Z ||
        T.map((ee) => ee.route.id).join('-') ===
          Z.map((ee) => ee.route.id).join('-')
      )
        return { type: 'success', matches: ne ? B : null };
      if (((T = Z), (U = T[T.length - 1].route), U.path === '*'))
        return { type: 'success', matches: T };
    }
  }
  function Mx(k) {
    (o = {}), (s = Wa(k, i, void 0, o));
  }
  function Ix(k, P) {
    let $ = s == null;
    Lv(k, P, s || a, o, i), $ && ((a = [...a]), we({}));
  }
  return (
    (E = {
      get basename() {
        return l;
      },
      get future() {
        return d;
      },
      get state() {
        return v;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: We,
      subscribe: $n,
      enableScrollRestoration: Do,
      navigate: Kr,
      fetch: Vn,
      revalidate: Ao,
      createHref: (k) => e.history.createHref(k),
      encodeLocation: (k) => e.history.encodeLocation(k),
      getFetcher: hr,
      deleteFetcher: Ei,
      dispose: Rn,
      getBlocker: de,
      deleteBlocker: ue,
      patchRoutes: Ix,
      _internalFetchControllers: F,
      _internalActiveDeferreds: Me,
      _internalSetRoutes: Mx,
    }),
    E
  );
}
function Ub(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Kf(e, t, n, r, i, o, a, s) {
  let l, u;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let f = gp(i || '.', mp(l, o), zo(e.pathname, n) || e.pathname, s === 'path');
  return (
    i == null && ((f.search = e.search), (f.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      u &&
      u.route.index &&
      !xp(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (f.pathname = f.pathname === '/' ? n : Zn([n, f.pathname])),
    gi(f)
  );
}
function Em(e, t, n, r) {
  if (!r || !Ub(r)) return { path: n };
  if (r.formMethod && !nk(r.formMethod))
    return { path: n, error: kt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: kt(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    a = e ? o.toUpperCase() : o.toLowerCase(),
    s = jv(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!bn(a)) return i();
      let c =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((y, m) => {
              let [h, C] = m;
              return (
                '' +
                y +
                h +
                '=' +
                C +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: c,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!bn(a)) return i();
      try {
        let c = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: c,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ae(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let l, u;
  if (r.formData) (l = Xf(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = Xf(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = Om(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = Om(l));
    } catch {
      return i();
    }
  let f = {
    formMethod: a,
    formAction: s,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (bn(f.formMethod)) return { path: n, submission: f };
  let d = Ur(n);
  return (
    t && d.search && xp(d.search) && l.append('index', ''),
    (d.search = '?' + l),
    { path: gi(d), submission: f }
  );
}
function Hb(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Pm(e, t, n, r, i, o, a, s, l, u, f, d, c, y, m, h) {
  let C = h ? (Ht(h[1]) ? h[1].error : h[1].data) : void 0,
    g = e.createURL(t.location),
    p = e.createURL(i),
    x = h && Ht(h[1]) ? h[0] : void 0,
    S = x ? Hb(n, x) : n,
    E = h ? h[1].statusCode : void 0,
    v = a && E && E >= 400,
    b = S.filter((L, A) => {
      let { route: H } = L;
      if (H.lazy) return !0;
      if (H.loader == null) return !1;
      if (o)
        return typeof H.loader != 'function' || H.loader.hydrate
          ? !0
          : t.loaderData[H.id] === void 0 &&
              (!t.errors || t.errors[H.id] === void 0);
      if (Vb(t.loaderData, t.matches[A], L) || l.some((K) => K === L.route.id))
        return !0;
      let G = t.matches[A],
        Y = L;
      return _m(
        L,
        Ie(
          {
            currentUrl: g,
            currentParams: G.params,
            nextUrl: p,
            nextParams: Y.params,
          },
          r,
          {
            actionResult: C,
            unstable_actionStatus: E,
            defaultShouldRevalidate: v
              ? !1
              : s ||
                g.pathname + g.search === p.pathname + p.search ||
                g.search !== p.search ||
                Nv(G, Y),
          }
        )
      );
    }),
    N = [];
  return (
    d.forEach((L, A) => {
      if (o || !n.some((R) => R.route.id === L.routeId) || f.has(A)) return;
      let H = Zr(y, L.path, m);
      if (!H) {
        N.push({
          key: A,
          routeId: L.routeId,
          path: L.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let G = t.fetchers.get(A),
        Y = ca(H, L.path),
        K = !1;
      c.has(A)
        ? (K = !1)
        : u.includes(A)
        ? (K = !0)
        : G && G.state !== 'idle' && G.data === void 0
        ? (K = s)
        : (K = _m(
            Y,
            Ie(
              {
                currentUrl: g,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: p,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: C,
                unstable_actionStatus: E,
                defaultShouldRevalidate: v ? !1 : s,
              }
            )
          )),
        K &&
          N.push({
            key: A,
            routeId: L.routeId,
            path: L.path,
            matches: H,
            match: Y,
            controller: new AbortController(),
          });
    }),
    [b, N]
  );
}
function Vb(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Nv(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function _m(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Wb(e, t, n, r, i, o, a, s) {
  let l = [t, ...n.map((u) => u.route.id)].join('-');
  try {
    let u = a.get(l);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (f, d) => {
          s.aborted || Lv(f, d, r, i, o);
        },
      })),
      a.set(l, u)),
      u && Zb(u) && (await u);
  } finally {
    a.delete(l);
  }
}
function Lv(e, t, n, r, i) {
  if (e) {
    var o;
    let a = r[e];
    ae(a, 'No route found to patch children into: routeId = ' + e);
    let s = Wa(
      t,
      i,
      [
        e,
        'patch',
        String(((o = a.children) == null ? void 0 : o.length) || '0'),
      ],
      r
    );
    a.children ? a.children.push(...s) : (a.children = s);
  } else {
    let a = Wa(t, i, ['patch', String(n.length || '0')], r);
    n.push(...a);
  }
}
async function Rm(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ae(i, 'No route found in manifest');
  let o = {};
  for (let a in r) {
    let l = i[a] !== void 0 && a !== 'hasErrorBoundary';
    wo(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !hb.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, Ie({}, t(i), { lazy: void 0 }));
}
function Kb(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Xb(e, t, n, r, i, o, a, s) {
  let l = r.reduce((d, c) => d.add(c.route.id), new Set()),
    u = new Set(),
    f = await e({
      matches: i.map((d) => {
        let c = l.has(d.route.id);
        return Ie({}, d, {
          shouldLoad: c,
          resolve: (m) => (
            u.add(d.route.id),
            c
              ? Gb(t, n, d, o, a, m, s)
              : Promise.resolve({ type: _e.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: s,
    });
  return (
    i.forEach((d) =>
      ae(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((d, c) => l.has(i[c].route.id))
  );
}
async function Gb(e, t, n, r, i, o, a) {
  let s,
    l,
    u = (f) => {
      let d,
        c = new Promise((h, C) => (d = C));
      (l = () => d()), t.signal.addEventListener('abort', l);
      let y = (h) =>
          typeof f != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']')
                )
              )
            : f(
                { request: t, params: n.params, context: a },
                ...(h !== void 0 ? [h] : [])
              ),
        m;
      return (
        o
          ? (m = o((h) => y(h)))
          : (m = (async () => {
              try {
                return { type: 'data', result: await y() };
              } catch (h) {
                return { type: 'error', result: h };
              }
            })()),
        Promise.race([m, c])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let d,
          [c] = await Promise.all([
            u(f).catch((y) => {
              d = y;
            }),
            Rm(n.route, i, r),
          ]);
        if (d !== void 0) throw d;
        s = c;
      } else if ((await Rm(n.route, i, r), (f = n.route[e]), f)) s = await u(f);
      else if (e === 'action') {
        let d = new URL(t.url),
          c = d.pathname + d.search;
        throw kt(405, { method: t.method, pathname: c, routeId: n.route.id });
      } else return { type: _e.data, result: void 0 };
    else if (f) s = await u(f);
    else {
      let d = new URL(t.url),
        c = d.pathname + d.search;
      throw kt(404, { pathname: c });
    }
    ae(
      s.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (f) {
    return { type: _e.error, result: f };
  } finally {
    l && t.signal.removeEventListener('abort', l);
  }
  return s;
}
async function Yb(e) {
  let { result: t, type: n, status: r } = e;
  if (Mv(t)) {
    let a;
    try {
      let s = t.headers.get('Content-Type');
      s && /\bapplication\/json\b/.test(s)
        ? t.body == null
          ? (a = null)
          : (a = await t.json())
        : (a = await t.text());
    } catch (s) {
      return { type: _e.error, error: s };
    }
    return n === _e.error
      ? {
          type: _e.error,
          error: new yp(t.status, t.statusText, a),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: _e.data, data: a, statusCode: t.status, headers: t.headers };
  }
  if (n === _e.error)
    return { type: _e.error, error: t, statusCode: gu(t) ? t.status : r };
  if (tk(t)) {
    var i, o;
    return {
      type: _e.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: _e.data, data: t, statusCode: r };
}
function qb(e, t, n, r, i, o) {
  let a = e.headers.get('Location');
  if (
    (ae(
      a,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !vp.test(a))
  ) {
    let s = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (a = Kf(new URL(t.url), s, i, !0, a, o)), e.headers.set('Location', a);
  }
  return e;
}
function $m(e, t, n) {
  if (vp.test(e)) {
    let r = e,
      i = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      o = zo(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function zi(e, t, n, r) {
  let i = e.createURL(jv(t)).toString(),
    o = { signal: n };
  if (r && bn(r.formMethod)) {
    let { formMethod: a, formEncType: s } = r;
    (o.method = a.toUpperCase()),
      s === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': s })),
          (o.body = JSON.stringify(r.json)))
        : s === 'text/plain'
        ? (o.body = r.text)
        : s === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = Xf(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Xf(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Om(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Qb(e, t, n, r, i, o) {
  let a = {},
    s = null,
    l,
    u = !1,
    f = {},
    d = r && Ht(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((c, y) => {
      let m = t[y].route.id;
      if (
        (ae(!ii(c), 'Cannot handle redirect results in processLoaderData'),
        Ht(c))
      ) {
        let h = c.error;
        d !== void 0 && ((h = d), (d = void 0)), (s = s || {});
        {
          let C = ka(e, m);
          s[C.route.id] == null && (s[C.route.id] = h);
        }
        (a[m] = void 0),
          u || ((u = !0), (l = gu(c.error) ? c.error.status : 500)),
          c.headers && (f[m] = c.headers);
      } else
        ri(c)
          ? (i.set(m, c.deferredData),
            (a[m] = c.deferredData.data),
            c.statusCode != null &&
              c.statusCode !== 200 &&
              !u &&
              (l = c.statusCode),
            c.headers && (f[m] = c.headers))
          : ((a[m] = c.data),
            c.statusCode && c.statusCode !== 200 && !u && (l = c.statusCode),
            c.headers && (f[m] = c.headers));
    }),
    d !== void 0 && r && ((s = { [r[0]]: d }), (a[r[0]] = void 0)),
    { loaderData: a, errors: s, statusCode: l || 200, loaderHeaders: f }
  );
}
function zm(e, t, n, r, i, o, a, s) {
  let { loaderData: l, errors: u } = Qb(t, n, r, i, s);
  for (let f = 0; f < o.length; f++) {
    let { key: d, match: c, controller: y } = o[f];
    ae(
      a !== void 0 && a[f] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let m = a[f];
    if (!(y && y.signal.aborted))
      if (Ht(m)) {
        let h = ka(e.matches, c == null ? void 0 : c.route.id);
        (u && u[h.route.id]) || (u = Ie({}, u, { [h.route.id]: m.error })),
          e.fetchers.delete(d);
      } else if (ii(m)) ae(!1, 'Unhandled fetcher revalidation redirect');
      else if (ri(m)) ae(!1, 'Unhandled fetcher deferred data');
      else {
        let h = xr(m.data);
        e.fetchers.set(d, h);
      }
  }
  return { loaderData: l, errors: u };
}
function Tm(e, t, n, r) {
  let i = Ie({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function Nm(e) {
  return e
    ? Ht(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ka(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Lm(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function kt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: o,
      message: a,
    } = t === void 0 ? {} : t,
    s = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((s = 'Bad Request'),
        o === 'route-discovery'
          ? (l =
              'Unable to match URL "' +
              n +
              '" - the `children()` function for ' +
              ('route `' + r + '` threw the following error:\n' + a))
          : i && n && r
          ? (l =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (l = 'defer() is not supported in actions')
          : o === 'invalid-body' && (l = 'Unable to encode submission body'))
      : e === 403
      ? ((s = 'Forbidden'),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((s = 'Not Found'), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((s = 'Method Not Allowed'),
        i && n && r
          ? (l =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new yp(e || 500, s, new Error(l), !0)
  );
}
function jm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ii(n)) return { result: n, idx: t };
  }
}
function jv(e) {
  let t = typeof e == 'string' ? Ur(e) : e;
  return gi(Ie({}, t, { hash: '' }));
}
function Jb(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function Zb(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function ek(e) {
  return Mv(e.result) && Ib.has(e.result.status);
}
function ri(e) {
  return e.type === _e.deferred;
}
function Ht(e) {
  return e.type === _e.error;
}
function ii(e) {
  return (e && e.type) === _e.redirect;
}
function tk(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Mv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function nk(e) {
  return Mb.has(e.toLowerCase());
}
function bn(e) {
  return Lb.has(e.toLowerCase());
}
async function Mm(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      l = t[a];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      f = u != null && !Nv(u, l) && (o && o[l.route.id]) !== void 0;
    if (ri(s) && (i || f)) {
      let d = r[a];
      ae(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Iv(s, d, i).then((c) => {
          c && (n[a] = c || n[a]);
        });
    }
  }
}
async function Iv(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: _e.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: _e.error, error: i };
      }
    return { type: _e.data, data: e.deferredData.data };
  }
}
function xp(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function ca(e, t) {
  let n = typeof t == 'string' ? Ur(t).search : t.search;
  if (e[e.length - 1].route.index && xp(n || '')) return e[e.length - 1];
  let r = Ov(e);
  return r[r.length - 1];
}
function Im(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function Ac(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function rk(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function qo(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function ik(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function xr(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function ok(e, t) {
  try {
    let n = e.sessionStorage.getItem(Tv);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function ak(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Tv, JSON.stringify(n));
    } catch (r) {
      wo(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Il.apply(this, arguments)
  );
}
const yu = w.createContext(null),
  Av = w.createContext(null),
  wi = w.createContext(null),
  wp = w.createContext(null),
  Hr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Dv = w.createContext(null);
function sk(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  as() || ae(!1);
  let { basename: r, navigator: i } = w.useContext(wi),
    { hash: o, pathname: a, search: s } = Uv(e, { relative: n }),
    l = a;
  return (
    r !== '/' && (l = a === '/' ? r : Zn([r, a])),
    i.createHref({ pathname: l, search: s, hash: o })
  );
}
function as() {
  return w.useContext(wp) != null;
}
function Si() {
  return as() || ae(!1), w.useContext(wp).location;
}
function Fv(e) {
  w.useContext(wi).static || w.useLayoutEffect(e);
}
function Bv() {
  let { isDataRoute: e } = w.useContext(Hr);
  return e ? Sk() : lk();
}
function lk() {
  as() || ae(!1);
  let e = w.useContext(yu),
    { basename: t, future: n, navigator: r } = w.useContext(wi),
    { matches: i } = w.useContext(Hr),
    { pathname: o } = Si(),
    a = JSON.stringify(mp(i, n.v7_relativeSplatPath)),
    s = w.useRef(!1);
  return (
    Fv(() => {
      s.current = !0;
    }),
    w.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !s.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let d = gp(u, JSON.parse(a), o, f.relative === 'path');
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Zn([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, a, o, e]
    )
  );
}
const uk = w.createContext(null);
function ck(e) {
  let t = w.useContext(Hr).outlet;
  return t && w.createElement(uk.Provider, { value: e }, t);
}
function Uv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(wi),
    { matches: i } = w.useContext(Hr),
    { pathname: o } = Si(),
    a = JSON.stringify(mp(i, r.v7_relativeSplatPath));
  return w.useMemo(() => gp(e, JSON.parse(a), o, n === 'path'), [e, a, o, n]);
}
function fk(e, t, n, r) {
  as() || ae(!1);
  let { navigator: i } = w.useContext(wi),
    { matches: o } = w.useContext(Hr),
    a = o[o.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : '/';
  a && a.route;
  let u = Si(),
    f;
  f = u;
  let d = f.pathname || '/',
    c = d;
  if (l !== '/') {
    let h = l.replace(/^\//, '').split('/');
    c = '/' + d.replace(/^\//, '').split('/').slice(h.length).join('/');
  }
  let y = Zr(e, { pathname: c });
  return gk(
    y &&
      y.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, s, h.params),
          pathname: Zn([
            l,
            i.encodeLocation
              ? i.encodeLocation(h.pathname).pathname
              : h.pathname,
          ]),
          pathnameBase:
            h.pathnameBase === '/'
              ? l
              : Zn([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(h.pathnameBase).pathname
                    : h.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function dk() {
  let e = wk(),
    t = gu(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement('h2', null, 'Unexpected Application Error!'),
    w.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? w.createElement('pre', { style: i }, n) : null,
    null
  );
}
const pk = w.createElement(dk, null);
class hk extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Hr.Provider,
          { value: this.props.routeContext },
          w.createElement(Dv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function mk(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(yu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Hr.Provider, { value: t }, r)
  );
}
function gk(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let f = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0
    );
    f >= 0 || ae(!1), (a = a.slice(0, Math.min(a.length, f + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < a.length; f++) {
      let d = a[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: c, errors: y } = n,
          m =
            d.route.loader &&
            c[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((f, d, c) => {
    let y,
      m = !1,
      h = null,
      C = null;
    n &&
      ((y = s && d.route.id ? s[d.route.id] : void 0),
      (h = d.route.errorElement || pk),
      l &&
        (u < 0 && c === 0
          ? (bk('route-fallback'), (m = !0), (C = null))
          : u === c &&
            ((m = !0), (C = d.route.hydrateFallbackElement || null))));
    let g = t.concat(a.slice(0, c + 1)),
      p = () => {
        let x;
        return (
          y
            ? (x = h)
            : m
            ? (x = C)
            : d.route.Component
            ? (x = w.createElement(d.route.Component, null))
            : d.route.element
            ? (x = d.route.element)
            : (x = f),
          w.createElement(mk, {
            match: d,
            routeContext: { outlet: f, matches: g, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || c === 0)
      ? w.createElement(hk, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Hv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Hv || {}),
  Al = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Al || {});
function yk(e) {
  let t = w.useContext(yu);
  return t || ae(!1), t;
}
function vk(e) {
  let t = w.useContext(Av);
  return t || ae(!1), t;
}
function xk(e) {
  let t = w.useContext(Hr);
  return t || ae(!1), t;
}
function Vv(e) {
  let t = xk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ae(!1), n.route.id;
}
function wk() {
  var e;
  let t = w.useContext(Dv),
    n = vk(Al.UseRouteError),
    r = Vv(Al.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Sk() {
  let { router: e } = yk(Hv.UseNavigateStable),
    t = Vv(Al.UseNavigateStable),
    n = w.useRef(!1);
  return (
    Fv(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Il({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Am = {};
function bk(e, t, n) {
  Am[e] || (Am[e] = !0);
}
function kk(e) {
  return ck(e.context);
}
function Ck(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = Qe.Pop,
    navigator: o,
    static: a = !1,
    future: s,
  } = e;
  as() && ae(!1);
  let l = t.replace(/^\/*/, '/'),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: a,
        future: Il({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, o, a]
    );
  typeof r == 'string' && (r = Ur(r));
  let {
      pathname: f = '/',
      search: d = '',
      hash: c = '',
      state: y = null,
      key: m = 'default',
    } = r,
    h = w.useMemo(() => {
      let C = zo(f, l);
      return C == null
        ? null
        : {
            location: { pathname: C, search: d, hash: c, state: y, key: m },
            navigationType: i,
          };
    }, [l, f, d, c, y, m, i]);
  return h == null
    ? null
    : w.createElement(
        wi.Provider,
        { value: u },
        w.createElement(wp.Provider, { children: n, value: h })
      );
}
new Promise(() => {});
function Ek(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: w.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ka() {
  return (
    (Ka = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ka.apply(this, arguments)
  );
}
function Pk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function _k(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Rk(e, t) {
  return e.button === 0 && (!t || t === '_self') && !_k(e);
}
const $k = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Ok = '6';
try {
  window.__reactRouterVersion = Ok;
} catch {}
function zk(e, t) {
  return Bb({
    basename: void 0,
    future: Ka({}, void 0, { v7_prependBasename: !0 }),
    history: fb({ window: void 0 }),
    hydrationData: Tk(),
    routes: e,
    mapRouteProperties: Ek,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnMiss: void 0,
    window: void 0,
  }).initialize();
}
function Tk() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ka({}, t, { errors: Nk(t.errors) })), t;
}
function Nk(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new yp(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == 'function')
          try {
            let a = new o(i.message);
            (a.stack = ''), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const Lk = w.createContext({ isTransitioning: !1 }),
  jk = w.createContext(new Map()),
  Mk = 'startTransition',
  Dm = dl[Mk],
  Ik = 'flushSync',
  Fm = cb[Ik];
function Ak(e) {
  Dm ? Dm(e) : e();
}
function Qo(e) {
  Fm ? Fm(e) : e();
}
class Dk {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function Fk(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = w.useState(n.state),
    [a, s] = w.useState(),
    [l, u] = w.useState({ isTransitioning: !1 }),
    [f, d] = w.useState(),
    [c, y] = w.useState(),
    [m, h] = w.useState(),
    C = w.useRef(new Map()),
    { v7_startTransition: g } = r || {},
    p = w.useCallback(
      (b) => {
        g ? Ak(b) : b();
      },
      [g]
    ),
    x = w.useCallback(
      (b, N) => {
        let {
          deletedFetchers: L,
          unstable_flushSync: A,
          unstable_viewTransitionOpts: H,
        } = N;
        L.forEach((Y) => C.current.delete(Y)),
          b.fetchers.forEach((Y, K) => {
            Y.data !== void 0 && C.current.set(K, Y.data);
          });
        let G =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!H || G) {
          A ? Qo(() => o(b)) : p(() => o(b));
          return;
        }
        if (A) {
          Qo(() => {
            c && (f && f.resolve(), c.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: H.currentLocation,
                nextLocation: H.nextLocation,
              });
          });
          let Y = n.window.document.startViewTransition(() => {
            Qo(() => o(b));
          });
          Y.finished.finally(() => {
            Qo(() => {
              d(void 0), y(void 0), s(void 0), u({ isTransitioning: !1 });
            });
          }),
            Qo(() => y(Y));
          return;
        }
        c
          ? (f && f.resolve(),
            c.skipTransition(),
            h({
              state: b,
              currentLocation: H.currentLocation,
              nextLocation: H.nextLocation,
            }))
          : (s(b),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: H.currentLocation,
              nextLocation: H.nextLocation,
            }));
      },
      [n.window, c, f, C, p]
    );
  w.useLayoutEffect(() => n.subscribe(x), [n, x]),
    w.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new Dk());
    }, [l]),
    w.useEffect(() => {
      if (f && a && n.window) {
        let b = a,
          N = f.promise,
          L = n.window.document.startViewTransition(async () => {
            p(() => o(b)), await N;
          });
        L.finished.finally(() => {
          d(void 0), y(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          y(L);
      }
    }, [p, a, f, n.window]),
    w.useEffect(() => {
      f && a && i.location.key === a.location.key && f.resolve();
    }, [f, c, i.location, a]),
    w.useEffect(() => {
      !l.isTransitioning &&
        m &&
        (s(m.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: m.currentLocation,
          nextLocation: m.nextLocation,
        }),
        h(void 0));
    }, [l.isTransitioning, m]),
    w.useEffect(() => {}, []);
  let S = w.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (b) => n.navigate(b),
        push: (b, N, L) =>
          n.navigate(b, {
            state: N,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
        replace: (b, N, L) =>
          n.navigate(b, {
            replace: !0,
            state: N,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || '/',
    v = w.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: E }),
      [n, S, E]
    );
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      yu.Provider,
      { value: v },
      w.createElement(
        Av.Provider,
        { value: i },
        w.createElement(
          jk.Provider,
          { value: C.current },
          w.createElement(
            Lk.Provider,
            { value: l },
            w.createElement(
              Ck,
              {
                basename: E,
                location: i.location,
                navigationType: i.historyAction,
                navigator: S,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? w.createElement(Bk, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Bk(e) {
  let { routes: t, future: n, state: r } = e;
  return fk(t, void 0, r, n);
}
const Uk =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Hk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wv = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      c = Pk(t, $k),
      { basename: y } = w.useContext(wi),
      m,
      h = !1;
    if (typeof u == 'string' && Hk.test(u) && ((m = u), Uk))
      try {
        let x = new URL(window.location.href),
          S = u.startsWith('//') ? new URL(x.protocol + u) : new URL(u),
          E = zo(S.pathname, y);
        S.origin === x.origin && E != null
          ? (u = E + S.search + S.hash)
          : (h = !0);
      } catch {}
    let C = sk(u, { relative: i }),
      g = Vk(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(x) {
      r && r(x), x.defaultPrevented || g(x);
    }
    return w.createElement(
      'a',
      Ka({}, c, { href: m || C, onClick: h || o ? r : p, ref: n, target: l })
    );
  });
var Bm;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Bm || (Bm = {}));
var Um;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Um || (Um = {}));
function Vk(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = Bv(),
    u = Si(),
    f = Uv(e, { relative: a });
  return w.useCallback(
    (d) => {
      if (Rk(d, n)) {
        d.preventDefault();
        let c = r !== void 0 ? r : gi(u) === gi(f);
        l(e, {
          replace: c,
          state: i,
          preventScrollReset: o,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [u, l, f, r, i, n, e, o, a, s]
  );
}
const Wk = {
  type: 'logger',
  log(e) {
    this.output('log', e);
  },
  warn(e) {
    this.output('warn', e);
  },
  error(e) {
    this.output('error', e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  },
};
class Dl {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || Wk),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t));
  }
  create(t) {
    return new Dl(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Dl(this.logger, t)
    );
  }
}
var Dn = new Dl();
class vu {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((a) => {
        let [s, l] = a;
        for (let u = 0; u < l; u++) s(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((a) => {
          let [s, l] = a;
          for (let u = 0; u < l; u++) s.apply(s, [t, ...r]);
        });
  }
}
function Jo() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function Hm(e) {
  return e == null ? '' : '' + e;
}
function Kk(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const Xk = /###/g;
function Ca(e, t, n) {
  function r(s) {
    return s && s.indexOf('###') > -1 ? s.replace(Xk, '.') : s;
  }
  function i() {
    return !e || typeof e == 'string';
  }
  const o = typeof t != 'string' ? t : t.split('.');
  let a = 0;
  for (; a < o.length - 1; ) {
    if (i()) return {};
    const s = r(o[a]);
    !e[s] && n && (e[s] = new n()),
      Object.prototype.hasOwnProperty.call(e, s) ? (e = e[s]) : (e = {}),
      ++a;
  }
  return i() ? {} : { obj: e, k: r(o[a]) };
}
function Vm(e, t, n) {
  const { obj: r, k: i } = Ca(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1],
    a = t.slice(0, t.length - 1),
    s = Ca(e, a, Object);
  for (; s.obj === void 0 && a.length; )
    (o = `${a[a.length - 1]}.${o}`),
      (a = a.slice(0, a.length - 1)),
      (s = Ca(e, a, Object)),
      s && s.obj && typeof s.obj[`${s.k}.${o}`] < 'u' && (s.obj = void 0);
  s.obj[`${s.k}.${o}`] = n;
}
function Gk(e, t, n, r) {
  const { obj: i, k: o } = Ca(e, t, Object);
  (i[o] = i[o] || []), i[o].push(n);
}
function Fl(e, t) {
  const { obj: n, k: r } = Ca(e, t);
  if (n) return n[r];
}
function Yk(e, t, n) {
  const r = Fl(e, n);
  return r !== void 0 ? r : Fl(t, n);
}
function Kv(e, t, n) {
  for (const r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' ||
          e[r] instanceof String ||
          typeof t[r] == 'string' ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : Kv(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function Ti(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var qk = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
function Qk(e) {
  return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => qk[t]) : e;
}
class Jk {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const Zk = [' ', ',', '?', '!', ';'],
  eC = new Jk(20);
function tC(e, t, n) {
  (t = t || ''), (n = n || '');
  const r = Zk.filter((a) => t.indexOf(a) < 0 && n.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const i = eC.getRegExp(
    `(${r.map((a) => (a === '?' ? '\\?' : a)).join('|')})`
  );
  let o = !i.test(e);
  if (!o) {
    const a = e.indexOf(n);
    a > 0 && !i.test(e.substring(0, a)) && (o = !0);
  }
  return o;
}
function Gf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != 'object') return;
    let a,
      s = '';
    for (let l = o; l < r.length; ++l)
      if ((l !== o && (s += n), (s += r[l]), (a = i[s]), a !== void 0)) {
        if (
          ['string', 'number', 'boolean'].indexOf(typeof a) > -1 &&
          l < r.length - 1
        )
          continue;
        o += l - o + 1;
        break;
      }
    i = a;
  }
  return i;
}
function Bl(e) {
  return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e;
}
class Wm extends vu {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      a =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let s;
    t.indexOf('.') > -1
      ? (s = t.split('.'))
      : ((s = [t, n]),
        r &&
          (Array.isArray(r)
            ? s.push(...r)
            : typeof r == 'string' && o
            ? s.push(...r.split(o))
            : s.push(r)));
    const l = Fl(this.data, s);
    return (
      !l &&
        !n &&
        !r &&
        t.indexOf('.') > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join('.'))),
      l || !a || typeof r != 'string'
        ? l
        : Gf(this.data && this.data[t] && this.data[t][n], r, o)
    );
  }
  addResource(t, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const a =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(a ? r.split(a) : r)),
      t.indexOf('.') > -1 && ((s = t.split('.')), (i = n), (n = s[1])),
      this.addNamespaces(n),
      Vm(this.data, s, i),
      o.silent || this.emit('added', t, n, r, i);
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in r)
      (typeof r[o] == 'string' || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    i.silent || this.emit('added', t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let a =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [t, n];
    t.indexOf('.') > -1 && ((s = t.split('.')), (i = r), (r = n), (n = s[1])),
      this.addNamespaces(n);
    let l = Fl(this.data, s) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? Kv(l, r, o) : (l = { ...l, ...r }),
      Vm(this.data, s, l),
      a.silent || this.emit('added', t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var Xv = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, i));
      }),
      t
    );
  },
};
const Km = {};
class Ul extends vu {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Kk(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Dn.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ':');
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const a = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !tC(t, r, i);
    if (a && !s) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: o };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i));
    }
    return typeof o == 'string' && (o = [o]), { key: t, namespaces: o };
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: a, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      l = s[s.length - 1],
      u = n.lng || this.language,
      f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === 'cimode') {
      if (f) {
        const S = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${S}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${S}${a}`;
      }
      return i
        ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : a;
    }
    const d = this.resolve(t, n);
    let c = d && d.res;
    const y = (d && d.usedKey) || a,
      m = (d && d.exactUsedKey) || a,
      h = Object.prototype.toString.apply(c),
      C = ['[object Number]', '[object Function]', '[object RegExp]'],
      g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
      c &&
      typeof c != 'string' &&
      typeof c != 'boolean' &&
      typeof c != 'number' &&
      C.indexOf(h) < 0 &&
      !(typeof g == 'string' && Array.isArray(c))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          );
        const S = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(y, c, { ...n, ns: s })
          : `key '${a} (${this.language})' returned an object instead of string.`;
        return i
          ? ((d.res = S), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : S;
      }
      if (o) {
        const S = Array.isArray(c),
          E = S ? [] : {},
          v = S ? m : y;
        for (const b in c)
          if (Object.prototype.hasOwnProperty.call(c, b)) {
            const N = `${v}${o}${b}`;
            (E[b] = this.translate(N, { ...n, joinArrays: !1, ns: s })),
              E[b] === N && (E[b] = c[b]);
          }
        c = E;
      }
    } else if (p && typeof g == 'string' && Array.isArray(c))
      (c = c.join(g)), c && (c = this.extendTranslation(c, t, n, r));
    else {
      let S = !1,
        E = !1;
      const v = n.count !== void 0 && typeof n.count != 'string',
        b = Ul.hasDefaultValue(n),
        N = v ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        L =
          n.ordinal && v
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : '',
        A =
          v &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        H =
          (A && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${N}`] ||
          n[`defaultValue${L}`] ||
          n.defaultValue;
      !this.isValidLookup(c) && b && ((S = !0), (c = H)),
        this.isValidLookup(c) || ((E = !0), (c = a));
      const Y =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          E
            ? void 0
            : c,
        K = b && H !== c && this.options.updateMissing;
      if (E || S || K) {
        if (
          (this.logger.log(K ? 'updateKey' : 'missingKey', u, l, a, K ? H : c),
          o)
        ) {
          const O = this.resolve(a, { ...n, keySeparator: !1 });
          O &&
            O.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let R = [];
        const z = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && z && z[0])
          for (let O = 0; O < z.length; O++) R.push(z[O]);
        else
          this.options.saveMissingTo === 'all'
            ? (R = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : R.push(n.lng || this.language);
        const F = (O, M, j) => {
          const q = b && j !== c ? j : Y;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(O, l, M, q, K, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(O, l, M, q, K, n),
            this.emit('missingKey', O, l, M, c);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && v
            ? R.forEach((O) => {
                const M = this.pluralResolver.getSuffixes(O, n);
                A &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  M.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  M.push(`${this.options.pluralSeparator}zero`),
                  M.forEach((j) => {
                    F([O], a + j, n[`defaultValue${j}`] || H);
                  });
              })
            : F(R, a, H));
      }
      (c = this.extendTranslation(c, t, n, d, r)),
        E &&
          c === a &&
          this.options.appendNamespaceToMissingKey &&
          (c = `${l}:${a}`),
        (E || S) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (c = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a,
                S ? c : void 0
              ))
            : (c = this.options.parseMissingKeyHandler(c)));
    }
    return i
      ? ((d.res = c), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : c;
  }
  extendTranslation(t, n, r, i, o) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let f;
      if (u) {
        const c = t.match(this.interpolator.nestingRegexp);
        f = c && c.length;
      }
      let d = r.replace && typeof r.replace != 'string' ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (t = this.interpolator.interpolate(t, d, r.lng || this.language, r)),
        u)
      ) {
        const c = t.match(this.interpolator.nestingRegexp),
          y = c && c.length;
        f < y && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        i &&
        i.res &&
        (r.lng = i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var c = arguments.length, y = new Array(c), m = 0;
                m < c;
                m++
              )
                y[m] = arguments[m];
              return o && o[0] === y[0] && !r.context
                ? (a.logger.warn(
                    `It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`
                  ),
                  null)
                : a.translate(...y, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess,
      l = typeof s == 'string' ? [s] : s;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = Xv.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      a,
      s;
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          f = u.key;
        i = f;
        let d = u.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const c = n.count !== void 0 && typeof n.count != 'string',
          y =
            c &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          m =
            n.context !== void 0 &&
            (typeof n.context == 'string' || typeof n.context == 'number') &&
            n.context !== '',
          h = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        d.forEach((C) => {
          this.isValidLookup(r) ||
            ((s = C),
            !Km[`${h[0]}-${C}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((Km[`${h[0]}-${C}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${h.join(
                  ', '
                )}" won't get resolved as namespace "${s}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            h.forEach((g) => {
              if (this.isValidLookup(r)) return;
              a = g;
              const p = [f];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, f, g, C, n);
              else {
                let S;
                c && (S = this.pluralResolver.getSuffix(g, n.count, n));
                const E = `${this.options.pluralSeparator}zero`,
                  v = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (c &&
                    (p.push(f + S),
                    n.ordinal &&
                      S.indexOf(v) === 0 &&
                      p.push(f + S.replace(v, this.options.pluralSeparator)),
                    y && p.push(f + E)),
                  m)
                ) {
                  const b = `${f}${this.options.contextSeparator}${n.context}`;
                  p.push(b),
                    c &&
                      (p.push(b + S),
                      n.ordinal &&
                        S.indexOf(v) === 0 &&
                        p.push(b + S.replace(v, this.options.pluralSeparator)),
                      y && p.push(b + E));
                }
              }
              let x;
              for (; (x = p.pop()); )
                this.isValidLookup(r) ||
                  ((o = x), (r = this.getResource(g, C, x, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: a, usedNS: s }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && typeof t.replace != 'string';
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < 'u' && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const o of n) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue';
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
function Dc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Xm {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Dn.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = Bl(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = Bl(t)), !t || t.indexOf('-') < 0)) return t;
    const n = t.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let r = t.split('-');
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Dc(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Dc(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Dc(r[2].toLowerCase()))),
        r.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o;
            if (
              !(o.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((o.indexOf('-') > 0 &&
                i.indexOf('-') < 0 &&
                o.substring(0, o.indexOf('-')) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == 'function' && (t = t(n)),
      typeof t == 'string' && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      o = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? i.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`
              ));
      };
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            o(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            o(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && o(this.formatLanguageCode(t)),
      r.forEach((a) => {
        i.indexOf(a) < 0 && o(this.formatLanguageCode(a));
      }),
      i
    );
  }
}
let nC = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  rC = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (e) {
      return e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11
        ? 0
        : e == 2 || e == 12
        ? 1
        : e > 2 && e < 20
        ? 2
        : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const iC = ['v1', 'v2', 'v3'],
  oC = ['v4'],
  Gm = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function aC() {
  const e = {};
  return (
    nC.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: rC[t.fc] };
      });
    }),
    e
  );
}
class sC {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Dn.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        oC.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = aC());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Bl(t === 'dev' ? 'en' : t), {
          type: n.ordinal ? 'ordinal' : 'cardinal',
        });
      } catch {
        return;
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => Gm[i] - Gm[o])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ''
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '');
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = 'plural') : i === 1 && (i = ''));
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === 'v1'
      ? i === 1
        ? ''
        : typeof i == 'number'
        ? `_plural_${i.toString()}`
        : o()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? o()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !iC.includes(this.options.compatibilityJSON);
  }
}
function Ym(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    o = Yk(e, t, n);
  return (
    !o &&
      i &&
      typeof n == 'string' &&
      ((o = Gf(e, n, r)), o === void 0 && (o = Gf(t, n, r))),
    o
  );
}
class lC {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Dn.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: a,
      suffix: s,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: f,
      unescapePrefix: d,
      nestingPrefix: c,
      nestingPrefixEscaped: y,
      nestingSuffix: m,
      nestingSuffixEscaped: h,
      nestingOptionsSeparator: C,
      maxReplaces: g,
      alwaysFormat: p,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : Qk),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? Ti(o) : a || '{{'),
      (this.suffix = s ? Ti(s) : l || '}}'),
      (this.formatSeparator = u || ','),
      (this.unescapePrefix = f ? '' : d || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : f || ''),
      (this.nestingPrefix = c ? Ti(c) : y || Ti('$t(')),
      (this.nestingSuffix = m ? Ti(m) : h || Ti(')')),
      (this.nestingOptionsSeparator = C || ','),
      (this.maxReplaces = g || 1e3),
      (this.alwaysFormat = p !== void 0 ? p : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g');
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, i) {
    let o, a, s;
    const l =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function u(m) {
      return m.replace(/\$/g, '$$$$');
    }
    const f = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const p = Ym(
          n,
          l,
          m,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(p, void 0, r, { ...i, ...n, interpolationkey: m })
          : p;
      }
      const h = m.split(this.formatSeparator),
        C = h.shift().trim(),
        g = h.join(this.formatSeparator).trim();
      return this.format(
        Ym(
          n,
          l,
          C,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        g,
        r,
        { ...i, ...n, interpolationkey: C }
      );
    };
    this.resetRegExp();
    const d =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      c =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (m) => u(m) },
        {
          regex: this.regexp,
          safeValue: (m) => (this.escapeValue ? u(this.escape(m)) : u(m)),
        },
      ].forEach((m) => {
        for (s = 0; (o = m.regex.exec(t)); ) {
          const h = o[1].trim();
          if (((a = f(h)), a === void 0))
            if (typeof d == 'function') {
              const g = d(t, o, i);
              a = typeof g == 'string' ? g : '';
            } else if (i && Object.prototype.hasOwnProperty.call(i, h)) a = '';
            else if (c) {
              a = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${h} for interpolating ${t}`
              ),
                (a = '');
          else typeof a != 'string' && !this.useRawValueToEscape && (a = Hm(a));
          const C = m.safeValue(a);
          if (
            ((t = t.replace(o[0], C)),
            c
              ? ((m.regex.lastIndex += a.length),
                (m.regex.lastIndex -= o[0].length))
              : (m.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      a;
    function s(l, u) {
      const f = this.nestingOptionsSeparator;
      if (l.indexOf(f) < 0) return l;
      const d = l.split(new RegExp(`${f}[ ]*{`));
      let c = `{${d[1]}`;
      (l = d[0]), (c = this.interpolate(c, a));
      const y = c.match(/'/g),
        m = c.match(/"/g);
      ((y && y.length % 2 === 0 && !m) || m.length % 2 !== 0) &&
        (c = c.replace(/'/g, '"'));
      try {
        (a = JSON.parse(c)), u && (a = { ...u, ...a });
      } catch (h) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            h
          ),
          `${l}${f}${c}`
        );
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        l
      );
    }
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (a = { ...r }),
        (a = a.replace && typeof a.replace != 'string' ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const f = i[1].split(this.formatSeparator).map((d) => d.trim());
        (i[1] = f.shift()), (l = f), (u = !0);
      }
      if (
        ((o = n(s.call(this, i[1].trim(), a), a)),
        o && i[0] === t && typeof o != 'string')
      )
        return o;
      typeof o != 'string' && (o = Hm(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = '')),
        u &&
          (o = l.reduce(
            (f, d) =>
              this.format(f, d, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function uC(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf('(') > -1) {
    const r = e.split('(');
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === 'currency' && i.indexOf(':') < 0
      ? n.currency || (n.currency = i.trim())
      : t === 'relativetime' && i.indexOf(':') < 0
      ? n.range || (n.range = i.trim())
      : i.split(';').forEach((a) => {
          if (a) {
            const [s, ...l] = a.split(':'),
              u = l
                .join(':')
                .trim()
                .replace(/^'+|'+$/g, ''),
              f = s.trim();
            n[f] || (n[f] = u),
              u === 'false' && (n[f] = !1),
              u === 'true' && (n[f] = !0),
              isNaN(u) || (n[f] = parseInt(u, 10));
          }
        });
  }
  return { formatName: t, formatOptions: n };
}
function Ni(e) {
  const t = {};
  return function (r, i, o) {
    const a = i + JSON.stringify(o);
    let s = t[a];
    return s || ((s = e(Bl(i), o)), (t[a] = s)), s(r);
  };
}
class cC {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Dn.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Ni((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        currency: Ni((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return (o) => i.format(o);
        }),
        datetime: Ni((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        relativetime: Ni((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (o) => i.format(o, r.range || 'day');
        }),
        list: Ni((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (o) => i.format(o);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ',';
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Ni(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((s, l) => {
      const { formatName: u, formatOptions: f } = uC(l);
      if (this.formats[u]) {
        let d = s;
        try {
          const c =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            y = c.locale || c.lng || i.locale || i.lng || r;
          d = this.formats[u](s, y, { ...f, ...i, ...c });
        } catch (c) {
          this.logger.warn(c);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
function fC(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class dC extends vu {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = Dn.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {},
      a = {},
      s = {},
      l = {};
    return (
      t.forEach((u) => {
        let f = !0;
        n.forEach((d) => {
          const c = `${u}|${d}`;
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[c] = 2)
            : this.state[c] < 0 ||
              (this.state[c] === 1
                ? a[c] === void 0 && (a[c] = !0)
                : ((this.state[c] = 1),
                  (f = !1),
                  a[c] === void 0 && (a[c] = !0),
                  o[c] === void 0 && (o[c] = !0),
                  l[d] === void 0 && (l[d] = !0)));
        }),
          f || (s[u] = !0);
      }),
      (Object.keys(o).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split('|'),
      o = i[0],
      a = i[1];
    n && this.emit('failedLoading', o, a, n),
      r &&
        this.store.addResourceBundle(o, a, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2);
    const s = {};
    this.queue.forEach((l) => {
      Gk(l.loaded, [o], a),
        fC(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const f = l.loaded[u];
            f.length &&
              f.forEach((d) => {
                s[u][d] === void 0 && (s[u][d] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit('loaded', s),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      a = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: a,
      });
      return;
    }
    this.readingCalls++;
    const s = (u, f) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (u && f && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, a);
          }, o);
          return;
        }
        a(u, f);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == 'function'
          ? u.then((f) => s(null, f)).catch(s)
          : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return l(t, n, s);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        i && i()
      );
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == 'string' && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length) return o.pending.length || i(), null;
    o.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const r = t.split('|'),
      i = r[0],
      o = r[1];
    this.read(i, o, 'read', void 0, void 0, (a, s) => {
      a &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          a
        ),
        !a &&
          s &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, s),
        this.loaded(t, a, s);
    });
  }
  saveMissing(t, n, r, i, o) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...a, isUpdate: o },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let f;
            u.length === 5 ? (f = u(t, n, r, i, l)) : (f = u(t, n, r, i)),
              f && typeof f.then == 'function'
                ? f.then((d) => s(null, d)).catch(s)
                : s(null, f);
          } catch (f) {
            s(f);
          }
        else u(t, n, r, i, s, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function qm() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == 'object' && (n = t[1]),
        typeof t[1] == 'string' && (n.defaultValue = t[1]),
        typeof t[2] == 'string' && (n.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function Qm(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  );
}
function Ls() {}
function pC(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e));
  });
}
class Xa extends vu {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Qm(t)),
      (this.services = {}),
      (this.logger = Dn),
      (this.modules = { external: [] }),
      pC(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string'
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const i = qm();
    (this.options = { ...i, ...this.options, ...Qm(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(f) {
      return f ? (typeof f == 'function' ? new f() : f) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? Dn.init(o(this.modules.logger), this.options)
        : Dn.init(null, this.options);
      let f;
      this.modules.formatter
        ? (f = this.modules.formatter)
        : typeof Intl < 'u' && (f = cC);
      const d = new Xm(this.options);
      this.store = new Wm(this.options.resources, this.options);
      const c = this.services;
      (c.logger = Dn),
        (c.resourceStore = this.store),
        (c.languageUtils = d),
        (c.pluralResolver = new sC(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        f &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((c.formatter = o(f)),
          c.formatter.init(c, this.options),
          (this.options.interpolation.format = c.formatter.format.bind(
            c.formatter
          ))),
        (c.interpolator = new lC(this.options)),
        (c.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (c.backendConnector = new dC(
          o(this.modules.backend),
          c.resourceStore,
          c,
          this.options
        )),
        c.backendConnector.on('*', function (y) {
          for (
            var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), C = 1;
            C < m;
            C++
          )
            h[C - 1] = arguments[C];
          t.emit(y, ...h);
        }),
        this.modules.languageDetector &&
          ((c.languageDetector = o(this.modules.languageDetector)),
          c.languageDetector.init &&
            c.languageDetector.init(c, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((c.i18nFormat = o(this.modules.i18nFormat)),
          c.i18nFormat.init && c.i18nFormat.init(this)),
        (this.translator = new Ul(this.services, this.options)),
        this.translator.on('*', function (y) {
          for (
            var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), C = 1;
            C < m;
            C++
          )
            h[C - 1] = arguments[C];
          t.emit(y, ...h);
        }),
        this.modules.external.forEach((y) => {
          y.init && y.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ls),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const f = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      f.length > 0 && f[0] !== 'dev' && (this.options.lng = f[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((f) => {
        this[f] = function () {
          return t.store[f](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((f) => {
        this[f] = function () {
          return t.store[f](...arguments), t;
        };
      });
    const l = Jo(),
      u = () => {
        const f = (d, c) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(c),
            r(d, c);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return f(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, f);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ls;
    const i = typeof t == 'string' ? t : this.language;
    if (
      (typeof t == 'function' && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const o = [],
        a = (s) => {
          if (!s || s === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
            u !== 'cimode' && o.indexOf(u) < 0 && o.push(u);
          });
        };
      i
        ? a(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => a(l)),
        this.options.preload && this.options.preload.forEach((s) => a(s)),
        this.services.backendConnector.load(o, this.options.ns, (s) => {
          !s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(s);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = Jo();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Ls),
      this.services.backendConnector.reload(t, n, (o) => {
        i.resolve(), r(o);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && Xv.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = Jo();
    this.emit('languageChanging', t);
    const o = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      a = (l, u) => {
        u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      s = (l) => {
        !t && !l && this.services.languageDetector && (l = []);
        const u =
          typeof l == 'string'
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (f) => {
            a(f, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(s)
          : this.services.languageDetector.detect(s)
        : s(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function (a, s) {
      let l;
      if (typeof s != 'object') {
        for (
          var u = arguments.length, f = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          f[d - 2] = arguments[d];
        l = i.options.overloadTranslationOptionHandler([a, s].concat(f));
      } else l = { ...s };
      (l.lng = l.lng || o.lng),
        (l.lngs = l.lngs || o.lngs),
        (l.ns = l.ns || o.ns),
        (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const c = i.options.keySeparator || '.';
      let y;
      return (
        l.keyPrefix && Array.isArray(a)
          ? (y = a.map((m) => `${l.keyPrefix}${c}${m}`))
          : (y = l.keyPrefix ? `${l.keyPrefix}${c}${a}` : a),
        i.t(y, l)
      );
    };
    return (
      typeof t == 'string' ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const a = (s, l) => {
      const u = this.services.backendConnector.state[`${s}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, a);
      if (s !== void 0) return s;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(r, t) && (!i || a(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Jo();
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Jo();
    typeof t == 'string' && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter(
        (a) =>
          i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a)
      );
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((a) => {
          r.resolve(), n && n(a);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl';
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new Xm(qm());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Xa(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ls;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new Xa(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ['store', 'services', 'language'].forEach((s) => {
        o[s] = this[s];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new Wm(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Ul(o.services, i)),
      o.translator.on('*', function (s) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), f = 1;
          f < l;
          f++
        )
          u[f - 1] = arguments[f];
        o.emit(s, ...u);
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const lt = Xa.createInstance();
lt.createInstance = Xa.createInstance;
lt.createInstance;
lt.dir;
lt.init;
lt.loadResources;
lt.reloadResources;
lt.use;
lt.changeLanguage;
lt.getFixedT;
const Zo = lt.t;
lt.exists;
lt.setDefaultNamespace;
lt.hasLoadedNamespace;
lt.loadNamespaces;
lt.loadLanguages;
function hC() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`),
      console.warn(...t);
  }
}
const Jm = {};
function Yf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (typeof t[0] == 'string' && Jm[t[0]]) ||
    (typeof t[0] == 'string' && (Jm[t[0]] = new Date()), hC(...t));
}
const Gv = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off('initialized', n);
      }, 0),
        t();
    };
    e.on('initialized', n);
  }
};
function Zm(e, t, n) {
  e.loadNamespaces(t, Gv(e, n));
}
function eg(e, t, n, r) {
  typeof n == 'string' && (n = [n]),
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
    e.loadLanguages(t, Gv(e, r));
}
function mC(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    i = t.options ? t.options.fallbackLng : !1,
    o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === 'cimode') return !0;
  const a = (s, l) => {
    const u = t.services.backendConnector.state[`${s}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !a(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (a(r, e) && (!i || a(o, e)))
      );
}
function gC(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (Yf('i18n.languages were undefined or empty', t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
    ? t.hasLoadedNamespace(e, {
        lng: n.lng,
        precheck: (i, o) => {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf('languageChanging') > -1 &&
            i.services.backendConnector.backend &&
            i.isLanguageChangingTo &&
            !o(i.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : mC(e, t, n);
}
const yC =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  vC = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  xC = (e) => vC[e],
  wC = (e) => e.replace(yC, xC);
let qf = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: wC,
};
function SC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  qf = { ...qf, ...e };
}
function bC() {
  return qf;
}
let Yv;
function kC(e) {
  Yv = e;
}
function CC() {
  return Yv;
}
const EC = {
    type: '3rdParty',
    init(e) {
      SC(e.options.react), kC(e);
    },
  },
  PC = w.createContext();
class _C {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const RC = (e, t) => {
  const n = w.useRef();
  return (
    w.useEffect(() => {
      n.current = e;
    }, [e, t]),
    n.current
  );
};
function qv(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function $C(e, t, n, r) {
  return w.useCallback(qv(e, t, n, r), [e, t, n, r]);
}
function lr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: i } = w.useContext(PC) || {},
    o = n || r || CC();
  if ((o && !o.reportNamespaces && (o.reportNamespaces = new _C()), !o)) {
    Yf(
      'You will need to pass in an i18next instance by using initReactI18next'
    );
    const S = (v, b) =>
        typeof b == 'string'
          ? b
          : b && typeof b == 'object' && typeof b.defaultValue == 'string'
          ? b.defaultValue
          : Array.isArray(v)
          ? v[v.length - 1]
          : v,
      E = [S, {}, !1];
    return (E.t = S), (E.i18n = {}), (E.ready = !1), E;
  }
  o.options.react &&
    o.options.react.wait !== void 0 &&
    Yf(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
    );
  const a = { ...bC(), ...o.options.react, ...t },
    { useSuspense: s, keyPrefix: l } = a;
  let u = i || (o.options && o.options.defaultNS);
  (u = typeof u == 'string' ? [u] : u || ['translation']),
    o.reportNamespaces.addUsedNamespaces &&
      o.reportNamespaces.addUsedNamespaces(u);
  const f =
      (o.isInitialized || o.initializedStoreOnce) &&
      u.every((S) => gC(S, o, a)),
    d = $C(o, t.lng || null, a.nsMode === 'fallback' ? u : u[0], l),
    c = () => d,
    y = () => qv(o, t.lng || null, a.nsMode === 'fallback' ? u : u[0], l),
    [m, h] = w.useState(c);
  let C = u.join();
  t.lng && (C = `${t.lng}${C}`);
  const g = RC(C),
    p = w.useRef(!0);
  w.useEffect(() => {
    const { bindI18n: S, bindI18nStore: E } = a;
    (p.current = !0),
      !f &&
        !s &&
        (t.lng
          ? eg(o, t.lng, u, () => {
              p.current && h(y);
            })
          : Zm(o, u, () => {
              p.current && h(y);
            })),
      f && g && g !== C && p.current && h(y);
    function v() {
      p.current && h(y);
    }
    return (
      S && o && o.on(S, v),
      E && o && o.store.on(E, v),
      () => {
        (p.current = !1),
          S && o && S.split(' ').forEach((b) => o.off(b, v)),
          E && o && E.split(' ').forEach((b) => o.store.off(b, v));
      }
    );
  }, [o, C]),
    w.useEffect(() => {
      p.current && f && h(c);
    }, [o, l, f]);
  const x = [m, o, f];
  if (((x.t = m), (x.i18n = o), (x.ready = f), f || (!f && !s))) return x;
  throw new Promise((S) => {
    t.lng ? eg(o, t.lng, u, () => S()) : Zm(o, u, () => S());
  });
}
function Qf(e) {
  '@babel/helpers - typeof';
  return (
    (Qf =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Qf(e)
  );
}
function Qv() {
  return (
    typeof XMLHttpRequest == 'function' ||
    (typeof XMLHttpRequest > 'u' ? 'undefined' : Qf(XMLHttpRequest)) ===
      'object'
  );
}
function OC(e) {
  return !!e && typeof e.then == 'function';
}
function zC(e) {
  return OC(e) ? e : Promise.resolve(e);
}
function TC(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Jf = { exports: {} },
  js = { exports: {} },
  tg;
function NC() {
  return (
    tg ||
      ((tg = 1),
      (function (e, t) {
        var n =
            (typeof globalThis < 'u' && globalThis) ||
            (typeof self < 'u' && self) ||
            (typeof pa < 'u' && pa),
          r = (function () {
            function o() {
              (this.fetch = !1), (this.DOMException = n.DOMException);
            }
            return (o.prototype = n), new o();
          })();
        (function (o) {
          (function (a) {
            var s =
                (typeof o < 'u' && o) ||
                (typeof self < 'u' && self) ||
                (typeof s < 'u' && s),
              l = {
                searchParams: 'URLSearchParams' in s,
                iterable: 'Symbol' in s && 'iterator' in Symbol,
                blob:
                  'FileReader' in s &&
                  'Blob' in s &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch {
                      return !1;
                    }
                  })(),
                formData: 'FormData' in s,
                arrayBuffer: 'ArrayBuffer' in s,
              };
            function u(R) {
              return R && DataView.prototype.isPrototypeOf(R);
            }
            if (l.arrayBuffer)
              var f = [
                  '[object Int8Array]',
                  '[object Uint8Array]',
                  '[object Uint8ClampedArray]',
                  '[object Int16Array]',
                  '[object Uint16Array]',
                  '[object Int32Array]',
                  '[object Uint32Array]',
                  '[object Float32Array]',
                  '[object Float64Array]',
                ],
                d =
                  ArrayBuffer.isView ||
                  function (R) {
                    return (
                      R && f.indexOf(Object.prototype.toString.call(R)) > -1
                    );
                  };
            function c(R) {
              if (
                (typeof R != 'string' && (R = String(R)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(R) || R === '')
              )
                throw new TypeError(
                  'Invalid character in header field name: "' + R + '"'
                );
              return R.toLowerCase();
            }
            function y(R) {
              return typeof R != 'string' && (R = String(R)), R;
            }
            function m(R) {
              var z = {
                next: function () {
                  var F = R.shift();
                  return { done: F === void 0, value: F };
                },
              };
              return (
                l.iterable &&
                  (z[Symbol.iterator] = function () {
                    return z;
                  }),
                z
              );
            }
            function h(R) {
              (this.map = {}),
                R instanceof h
                  ? R.forEach(function (z, F) {
                      this.append(F, z);
                    }, this)
                  : Array.isArray(R)
                  ? R.forEach(function (z) {
                      this.append(z[0], z[1]);
                    }, this)
                  : R &&
                    Object.getOwnPropertyNames(R).forEach(function (z) {
                      this.append(z, R[z]);
                    }, this);
            }
            (h.prototype.append = function (R, z) {
              (R = c(R)), (z = y(z));
              var F = this.map[R];
              this.map[R] = F ? F + ', ' + z : z;
            }),
              (h.prototype.delete = function (R) {
                delete this.map[c(R)];
              }),
              (h.prototype.get = function (R) {
                return (R = c(R)), this.has(R) ? this.map[R] : null;
              }),
              (h.prototype.has = function (R) {
                return this.map.hasOwnProperty(c(R));
              }),
              (h.prototype.set = function (R, z) {
                this.map[c(R)] = y(z);
              }),
              (h.prototype.forEach = function (R, z) {
                for (var F in this.map)
                  this.map.hasOwnProperty(F) && R.call(z, this.map[F], F, this);
              }),
              (h.prototype.keys = function () {
                var R = [];
                return (
                  this.forEach(function (z, F) {
                    R.push(F);
                  }),
                  m(R)
                );
              }),
              (h.prototype.values = function () {
                var R = [];
                return (
                  this.forEach(function (z) {
                    R.push(z);
                  }),
                  m(R)
                );
              }),
              (h.prototype.entries = function () {
                var R = [];
                return (
                  this.forEach(function (z, F) {
                    R.push([F, z]);
                  }),
                  m(R)
                );
              }),
              l.iterable &&
                (h.prototype[Symbol.iterator] = h.prototype.entries);
            function C(R) {
              if (R.bodyUsed)
                return Promise.reject(new TypeError('Already read'));
              R.bodyUsed = !0;
            }
            function g(R) {
              return new Promise(function (z, F) {
                (R.onload = function () {
                  z(R.result);
                }),
                  (R.onerror = function () {
                    F(R.error);
                  });
              });
            }
            function p(R) {
              var z = new FileReader(),
                F = g(z);
              return z.readAsArrayBuffer(R), F;
            }
            function x(R) {
              var z = new FileReader(),
                F = g(z);
              return z.readAsText(R), F;
            }
            function S(R) {
              for (
                var z = new Uint8Array(R), F = new Array(z.length), O = 0;
                O < z.length;
                O++
              )
                F[O] = String.fromCharCode(z[O]);
              return F.join('');
            }
            function E(R) {
              if (R.slice) return R.slice(0);
              var z = new Uint8Array(R.byteLength);
              return z.set(new Uint8Array(R)), z.buffer;
            }
            function v() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (R) {
                  (this.bodyUsed = this.bodyUsed),
                    (this._bodyInit = R),
                    R
                      ? typeof R == 'string'
                        ? (this._bodyText = R)
                        : l.blob && Blob.prototype.isPrototypeOf(R)
                        ? (this._bodyBlob = R)
                        : l.formData && FormData.prototype.isPrototypeOf(R)
                        ? (this._bodyFormData = R)
                        : l.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(R)
                        ? (this._bodyText = R.toString())
                        : l.arrayBuffer && l.blob && u(R)
                        ? ((this._bodyArrayBuffer = E(R.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : l.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(R) || d(R))
                        ? (this._bodyArrayBuffer = E(R))
                        : (this._bodyText = R =
                            Object.prototype.toString.call(R))
                      : (this._bodyText = ''),
                    this.headers.get('content-type') ||
                      (typeof R == 'string'
                        ? this.headers.set(
                            'content-type',
                            'text/plain;charset=UTF-8'
                          )
                        : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set('content-type', this._bodyBlob.type)
                        : l.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(R) &&
                          this.headers.set(
                            'content-type',
                            'application/x-www-form-urlencoded;charset=UTF-8'
                          ));
                }),
                l.blob &&
                  ((this.blob = function () {
                    var R = C(this);
                    if (R) return R;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                      throw new Error('could not read FormData body as blob');
                    return Promise.resolve(new Blob([this._bodyText]));
                  }),
                  (this.arrayBuffer = function () {
                    if (this._bodyArrayBuffer) {
                      var R = C(this);
                      return (
                        R ||
                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                          ? Promise.resolve(
                              this._bodyArrayBuffer.buffer.slice(
                                this._bodyArrayBuffer.byteOffset,
                                this._bodyArrayBuffer.byteOffset +
                                  this._bodyArrayBuffer.byteLength
                              )
                            )
                          : Promise.resolve(this._bodyArrayBuffer))
                      );
                    } else return this.blob().then(p);
                  })),
                (this.text = function () {
                  var R = C(this);
                  if (R) return R;
                  if (this._bodyBlob) return x(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(S(this._bodyArrayBuffer));
                  if (this._bodyFormData)
                    throw new Error('could not read FormData body as text');
                  return Promise.resolve(this._bodyText);
                }),
                l.formData &&
                  (this.formData = function () {
                    return this.text().then(A);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            var b = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
            function N(R) {
              var z = R.toUpperCase();
              return b.indexOf(z) > -1 ? z : R;
            }
            function L(R, z) {
              if (!(this instanceof L))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                );
              z = z || {};
              var F = z.body;
              if (R instanceof L) {
                if (R.bodyUsed) throw new TypeError('Already read');
                (this.url = R.url),
                  (this.credentials = R.credentials),
                  z.headers || (this.headers = new h(R.headers)),
                  (this.method = R.method),
                  (this.mode = R.mode),
                  (this.signal = R.signal),
                  !F &&
                    R._bodyInit != null &&
                    ((F = R._bodyInit), (R.bodyUsed = !0));
              } else this.url = String(R);
              if (
                ((this.credentials =
                  z.credentials || this.credentials || 'same-origin'),
                (z.headers || !this.headers) &&
                  (this.headers = new h(z.headers)),
                (this.method = N(z.method || this.method || 'GET')),
                (this.mode = z.mode || this.mode || null),
                (this.signal = z.signal || this.signal),
                (this.referrer = null),
                (this.method === 'GET' || this.method === 'HEAD') && F)
              )
                throw new TypeError(
                  'Body not allowed for GET or HEAD requests'
                );
              if (
                (this._initBody(F),
                (this.method === 'GET' || this.method === 'HEAD') &&
                  (z.cache === 'no-store' || z.cache === 'no-cache'))
              ) {
                var O = /([?&])_=[^&]*/;
                if (O.test(this.url))
                  this.url = this.url.replace(O, '$1_=' + new Date().getTime());
                else {
                  var M = /\?/;
                  this.url +=
                    (M.test(this.url) ? '&' : '?') +
                    '_=' +
                    new Date().getTime();
                }
              }
            }
            L.prototype.clone = function () {
              return new L(this, { body: this._bodyInit });
            };
            function A(R) {
              var z = new FormData();
              return (
                R.trim()
                  .split('&')
                  .forEach(function (F) {
                    if (F) {
                      var O = F.split('='),
                        M = O.shift().replace(/\+/g, ' '),
                        j = O.join('=').replace(/\+/g, ' ');
                      z.append(decodeURIComponent(M), decodeURIComponent(j));
                    }
                  }),
                z
              );
            }
            function H(R) {
              var z = new h(),
                F = R.replace(/\r?\n[\t ]+/g, ' ');
              return (
                F.split('\r')
                  .map(function (O) {
                    return O.indexOf(`
`) === 0
                      ? O.substr(1, O.length)
                      : O;
                  })
                  .forEach(function (O) {
                    var M = O.split(':'),
                      j = M.shift().trim();
                    if (j) {
                      var q = M.join(':').trim();
                      z.append(j, q);
                    }
                  }),
                z
              );
            }
            v.call(L.prototype);
            function G(R, z) {
              if (!(this instanceof G))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                );
              z || (z = {}),
                (this.type = 'default'),
                (this.status = z.status === void 0 ? 200 : z.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText =
                  z.statusText === void 0 ? '' : '' + z.statusText),
                (this.headers = new h(z.headers)),
                (this.url = z.url || ''),
                this._initBody(R);
            }
            v.call(G.prototype),
              (G.prototype.clone = function () {
                return new G(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new h(this.headers),
                  url: this.url,
                });
              }),
              (G.error = function () {
                var R = new G(null, { status: 0, statusText: '' });
                return (R.type = 'error'), R;
              });
            var Y = [301, 302, 303, 307, 308];
            (G.redirect = function (R, z) {
              if (Y.indexOf(z) === -1)
                throw new RangeError('Invalid status code');
              return new G(null, { status: z, headers: { location: R } });
            }),
              (a.DOMException = s.DOMException);
            try {
              new a.DOMException();
            } catch {
              (a.DOMException = function (z, F) {
                (this.message = z), (this.name = F);
                var O = Error(z);
                this.stack = O.stack;
              }),
                (a.DOMException.prototype = Object.create(Error.prototype)),
                (a.DOMException.prototype.constructor = a.DOMException);
            }
            function K(R, z) {
              return new Promise(function (F, O) {
                var M = new L(R, z);
                if (M.signal && M.signal.aborted)
                  return O(new a.DOMException('Aborted', 'AbortError'));
                var j = new XMLHttpRequest();
                function q() {
                  j.abort();
                }
                (j.onload = function () {
                  var ye = {
                    status: j.status,
                    statusText: j.statusText,
                    headers: H(j.getAllResponseHeaders() || ''),
                  };
                  ye.url =
                    'responseURL' in j
                      ? j.responseURL
                      : ye.headers.get('X-Request-URL');
                  var se = 'response' in j ? j.response : j.responseText;
                  setTimeout(function () {
                    F(new G(se, ye));
                  }, 0);
                }),
                  (j.onerror = function () {
                    setTimeout(function () {
                      O(new TypeError('Network request failed'));
                    }, 0);
                  }),
                  (j.ontimeout = function () {
                    setTimeout(function () {
                      O(new TypeError('Network request failed'));
                    }, 0);
                  }),
                  (j.onabort = function () {
                    setTimeout(function () {
                      O(new a.DOMException('Aborted', 'AbortError'));
                    }, 0);
                  });
                function re(ye) {
                  try {
                    return ye === '' && s.location.href ? s.location.href : ye;
                  } catch {
                    return ye;
                  }
                }
                j.open(M.method, re(M.url), !0),
                  M.credentials === 'include'
                    ? (j.withCredentials = !0)
                    : M.credentials === 'omit' && (j.withCredentials = !1),
                  'responseType' in j &&
                    (l.blob
                      ? (j.responseType = 'blob')
                      : l.arrayBuffer &&
                        M.headers.get('Content-Type') &&
                        M.headers
                          .get('Content-Type')
                          .indexOf('application/octet-stream') !== -1 &&
                        (j.responseType = 'arraybuffer')),
                  z && typeof z.headers == 'object' && !(z.headers instanceof h)
                    ? Object.getOwnPropertyNames(z.headers).forEach(function (
                        ye
                      ) {
                        j.setRequestHeader(ye, y(z.headers[ye]));
                      })
                    : M.headers.forEach(function (ye, se) {
                        j.setRequestHeader(se, ye);
                      }),
                  M.signal &&
                    (M.signal.addEventListener('abort', q),
                    (j.onreadystatechange = function () {
                      j.readyState === 4 &&
                        M.signal.removeEventListener('abort', q);
                    })),
                  j.send(typeof M._bodyInit > 'u' ? null : M._bodyInit);
              });
            }
            return (
              (K.polyfill = !0),
              s.fetch ||
                ((s.fetch = K),
                (s.Headers = h),
                (s.Request = L),
                (s.Response = G)),
              (a.Headers = h),
              (a.Request = L),
              (a.Response = G),
              (a.fetch = K),
              a
            );
          })({});
        })(r),
          (r.fetch.ponyfill = !0),
          delete r.fetch.polyfill;
        var i = n.fetch ? n : r;
        (t = i.fetch),
          (t.default = i.fetch),
          (t.fetch = i.fetch),
          (t.Headers = i.Headers),
          (t.Request = i.Request),
          (t.Response = i.Response),
          (e.exports = t);
      })(js, js.exports)),
    js.exports
  );
}
(function (e, t) {
  var n;
  if (
    (typeof fetch == 'function' &&
      (typeof pa < 'u' && pa.fetch
        ? (n = pa.fetch)
        : typeof window < 'u' && window.fetch
        ? (n = window.fetch)
        : (n = fetch)),
    typeof TC < 'u' && typeof window > 'u')
  ) {
    var r = n || NC();
    r.default && (r = r.default), (t.default = r), (e.exports = t.default);
  }
})(Jf, Jf.exports);
var Jv = Jf.exports;
const Zv = Zl(Jv),
  ng = xd({ __proto__: null, default: Zv }, [Jv]);
function rg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ig(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rg(Object(n), !0).forEach(function (r) {
          LC(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function LC(e, t, n) {
  return (
    (t = jC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jC(e) {
  var t = MC(e, 'string');
  return yi(t) == 'symbol' ? t : t + '';
}
function MC(e, t) {
  if (yi(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (yi(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function yi(e) {
  '@babel/helpers - typeof';
  return (
    (yi =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    yi(e)
  );
}
var er;
typeof fetch == 'function' &&
  (typeof global < 'u' && global.fetch
    ? (er = global.fetch)
    : typeof window < 'u' && window.fetch
    ? (er = window.fetch)
    : (er = fetch));
var Ga;
Qv() &&
  (typeof global < 'u' && global.XMLHttpRequest
    ? (Ga = global.XMLHttpRequest)
    : typeof window < 'u' &&
      window.XMLHttpRequest &&
      (Ga = window.XMLHttpRequest));
var Hl;
typeof ActiveXObject == 'function' &&
  (typeof global < 'u' && global.ActiveXObject
    ? (Hl = global.ActiveXObject)
    : typeof window < 'u' &&
      window.ActiveXObject &&
      (Hl = window.ActiveXObject));
!er && ng && !Ga && !Hl && (er = Zv || ng);
typeof er != 'function' && (er = void 0);
var Zf = function (t, n) {
    if (n && yi(n) === 'object') {
      var r = '';
      for (var i in n)
        r += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(n[i]);
      if (!r) return t;
      t = t + (t.indexOf('?') !== -1 ? '&' : '?') + r.slice(1);
    }
    return t;
  },
  og = function (t, n, r, i) {
    var o = function (l) {
      if (!l.ok) return r(l.statusText || 'Error', { status: l.status });
      l.text()
        .then(function (u) {
          r(null, { status: l.status, data: u });
        })
        .catch(r);
    };
    if (i) {
      var a = i(t, n);
      if (a instanceof Promise) {
        a.then(o).catch(r);
        return;
      }
    }
    typeof fetch == 'function'
      ? fetch(t, n).then(o).catch(r)
      : er(t, n).then(o).catch(r);
  },
  ag = !1,
  IC = function (t, n, r, i) {
    t.queryStringParams && (n = Zf(n, t.queryStringParams));
    var o = ig(
      {},
      typeof t.customHeaders == 'function' ? t.customHeaders() : t.customHeaders
    );
    typeof window > 'u' &&
      typeof global < 'u' &&
      typeof global.process < 'u' &&
      global.process.versions &&
      global.process.versions.node &&
      (o['User-Agent'] = 'i18next-http-backend (node/'
        .concat(global.process.version, '; ')
        .concat(global.process.platform, ' ')
        .concat(global.process.arch, ')')),
      r && (o['Content-Type'] = 'application/json');
    var a =
        typeof t.requestOptions == 'function'
          ? t.requestOptions(r)
          : t.requestOptions,
      s = ig(
        {
          method: r ? 'POST' : 'GET',
          body: r ? t.stringify(r) : void 0,
          headers: o,
        },
        ag ? {} : a
      ),
      l =
        typeof t.alternateFetch == 'function' && t.alternateFetch.length >= 1
          ? t.alternateFetch
          : void 0;
    try {
      og(n, s, i, l);
    } catch (u) {
      if (
        !a ||
        Object.keys(a).length === 0 ||
        !u.message ||
        u.message.indexOf('not implemented') < 0
      )
        return i(u);
      try {
        Object.keys(a).forEach(function (f) {
          delete s[f];
        }),
          og(n, s, i, l),
          (ag = !0);
      } catch (f) {
        i(f);
      }
    }
  },
  AC = function (t, n, r, i) {
    r && yi(r) === 'object' && (r = Zf('', r).slice(1)),
      t.queryStringParams && (n = Zf(n, t.queryStringParams));
    try {
      var o;
      Ga ? (o = new Ga()) : (o = new Hl('MSXML2.XMLHTTP.3.0')),
        o.open(r ? 'POST' : 'GET', n, 1),
        t.crossDomain ||
          o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
        (o.withCredentials = !!t.withCredentials),
        r &&
          o.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          ),
        o.overrideMimeType && o.overrideMimeType('application/json');
      var a = t.customHeaders;
      if (((a = typeof a == 'function' ? a() : a), a))
        for (var s in a) o.setRequestHeader(s, a[s]);
      (o.onreadystatechange = function () {
        o.readyState > 3 &&
          i(o.status >= 400 ? o.statusText : null, {
            status: o.status,
            data: o.responseText,
          });
      }),
        o.send(r);
    } catch (l) {
      console && console.log(l);
    }
  },
  DC = function (t, n, r, i) {
    if (
      (typeof r == 'function' && ((i = r), (r = void 0)),
      (i = i || function () {}),
      er && n.indexOf('file:') !== 0)
    )
      return IC(t, n, r, i);
    if (Qv() || typeof ActiveXObject == 'function') return AC(t, n, r, i);
    i(new Error('No fetch and no xhr implementation found!'));
  };
function So(e) {
  '@babel/helpers - typeof';
  return (
    (So =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    So(e)
  );
}
function sg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sg(Object(n), !0).forEach(function (r) {
          e1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : sg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function FC(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function BC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, t1(r.key), r);
  }
}
function UC(e, t, n) {
  return (
    t && BC(e.prototype, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function e1(e, t, n) {
  return (
    (t = t1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function t1(e) {
  var t = HC(e, 'string');
  return So(t) == 'symbol' ? t : t + '';
}
function HC(e, t) {
  if (So(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (So(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var VC = function () {
    return {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
      parse: function (n) {
        return JSON.parse(n);
      },
      stringify: JSON.stringify,
      parsePayload: function (n, r, i) {
        return e1({}, r, i || '');
      },
      parseLoadPayload: function (n, r) {},
      request: DC,
      reloadInterval: typeof window < 'u' ? !1 : 60 * 60 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default',
      },
    };
  },
  n1 = (function () {
    function e(t) {
      var n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      FC(this, e),
        (this.services = t),
        (this.options = n),
        (this.allOptions = r),
        (this.type = 'backend'),
        this.init(t, n, r);
    }
    return UC(e, [
      {
        key: 'init',
        value: function (n) {
          var r = this,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          if (
            ((this.services = n),
            (this.options = Fc(Fc(Fc({}, VC()), this.options || {}), i)),
            (this.allOptions = o),
            this.services && this.options.reloadInterval)
          ) {
            var a = setInterval(function () {
              return r.reload();
            }, this.options.reloadInterval);
            So(a) === 'object' && typeof a.unref == 'function' && a.unref();
          }
        },
      },
      {
        key: 'readMulti',
        value: function (n, r, i) {
          this._readAny(n, n, r, r, i);
        },
      },
      {
        key: 'read',
        value: function (n, r, i) {
          this._readAny([n], n, [r], r, i);
        },
      },
      {
        key: '_readAny',
        value: function (n, r, i, o, a) {
          var s = this,
            l = this.options.loadPath;
          typeof this.options.loadPath == 'function' &&
            (l = this.options.loadPath(n, i)),
            (l = zC(l)),
            l.then(function (u) {
              if (!u) return a(null, {});
              var f = s.services.interpolator.interpolate(u, {
                lng: n.join('+'),
                ns: i.join('+'),
              });
              s.loadUrl(f, a, r, o);
            });
        },
      },
      {
        key: 'loadUrl',
        value: function (n, r, i, o) {
          var a = this,
            s = typeof i == 'string' ? [i] : i,
            l = typeof o == 'string' ? [o] : o,
            u = this.options.parseLoadPayload(s, l);
          this.options.request(this.options, n, u, function (f, d) {
            if (d && ((d.status >= 500 && d.status < 600) || !d.status))
              return r(
                'failed loading ' + n + '; status code: ' + d.status,
                !0
              );
            if (d && d.status >= 400 && d.status < 500)
              return r(
                'failed loading ' + n + '; status code: ' + d.status,
                !1
              );
            if (
              !d &&
              f &&
              f.message &&
              f.message.indexOf('Failed to fetch') > -1
            )
              return r('failed loading ' + n + ': ' + f.message, !0);
            if (f) return r(f, !1);
            var c, y;
            try {
              typeof d.data == 'string'
                ? (c = a.options.parse(d.data, i, o))
                : (c = d.data);
            } catch {
              y = 'failed parsing ' + n + ' to json';
            }
            if (y) return r(y, !1);
            r(null, c);
          });
        },
      },
      {
        key: 'create',
        value: function (n, r, i, o, a) {
          var s = this;
          if (this.options.addPath) {
            typeof n == 'string' && (n = [n]);
            var l = this.options.parsePayload(r, i, o),
              u = 0,
              f = [],
              d = [];
            n.forEach(function (c) {
              var y = s.options.addPath;
              typeof s.options.addPath == 'function' &&
                (y = s.options.addPath(c, r));
              var m = s.services.interpolator.interpolate(y, { lng: c, ns: r });
              s.options.request(s.options, m, l, function (h, C) {
                (u += 1),
                  f.push(h),
                  d.push(C),
                  u === n.length && typeof a == 'function' && a(f, d);
              });
            });
          }
        },
      },
      {
        key: 'reload',
        value: function () {
          var n = this,
            r = this.services,
            i = r.backendConnector,
            o = r.languageUtils,
            a = r.logger,
            s = i.language;
          if (!(s && s.toLowerCase() === 'cimode')) {
            var l = [],
              u = function (d) {
                var c = o.toResolveHierarchy(d);
                c.forEach(function (y) {
                  l.indexOf(y) < 0 && l.push(y);
                });
              };
            u(s),
              this.allOptions.preload &&
                this.allOptions.preload.forEach(function (f) {
                  return u(f);
                }),
              l.forEach(function (f) {
                n.allOptions.ns.forEach(function (d) {
                  i.read(f, d, 'read', null, null, function (c, y) {
                    c &&
                      a.warn(
                        'loading namespace '
                          .concat(d, ' for language ')
                          .concat(f, ' failed'),
                        c
                      ),
                      !c &&
                        y &&
                        a.log(
                          'loaded namespace '
                            .concat(d, ' for language ')
                            .concat(f),
                          y
                        ),
                      i.loaded(''.concat(f, '|').concat(d), c, y);
                  });
                });
              });
          }
        },
      },
    ]);
  })();
n1.type = 'backend';
const { slice: WC, forEach: KC } = [];
function XC(e) {
  return (
    KC.call(WC.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
const lg = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  GC = (e, t, n) => {
    const r = n || {};
    r.path = r.path || '/';
    const i = encodeURIComponent(t);
    let o = `${e}=${i}`;
    if (r.maxAge > 0) {
      const a = r.maxAge - 0;
      if (Number.isNaN(a)) throw new Error('maxAge should be a Number');
      o += `; Max-Age=${Math.floor(a)}`;
    }
    if (r.domain) {
      if (!lg.test(r.domain)) throw new TypeError('option domain is invalid');
      o += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!lg.test(r.path)) throw new TypeError('option path is invalid');
      o += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      o += `; Expires=${r.expires.toUTCString()}`;
    }
    if (
      (r.httpOnly && (o += '; HttpOnly'),
      r.secure && (o += '; Secure'),
      r.sameSite)
    )
      switch (
        typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
          o += '; SameSite=Strict';
          break;
        case 'lax':
          o += '; SameSite=Lax';
          break;
        case 'strict':
          o += '; SameSite=Strict';
          break;
        case 'none':
          o += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    return o;
  },
  ug = {
    create(e, t, n, r) {
      let i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      n &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)),
        r && (i.domain = r),
        (document.cookie = GC(e, encodeURIComponent(t), i));
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(';');
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        for (; i.charAt(0) === ' '; ) i = i.substring(1, i.length);
        if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
      }
      return null;
    },
    remove(e) {
      this.create(e, '', -1);
    },
  };
var YC = {
    name: 'cookie',
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < 'u') return ug.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: i,
        cookieOptions: o,
      } = t;
      n && typeof document < 'u' && ug.create(n, e, r, i, o);
    },
  },
  qC = {
    name: 'querystring',
    lookup(e) {
      var r;
      let { lookupQuerystring: t } = e,
        n;
      if (typeof window < 'u') {
        let { search: i } = window.location;
        !window.location.search &&
          ((r = window.location.hash) == null ? void 0 : r.indexOf('?')) > -1 &&
          (i = window.location.hash.substring(
            window.location.hash.indexOf('?')
          ));
        const a = i.substring(1).split('&');
        for (let s = 0; s < a.length; s++) {
          const l = a[s].indexOf('=');
          l > 0 && a[s].substring(0, l) === t && (n = a[s].substring(l + 1));
        }
      }
      return n;
    },
  };
let ea = null;
const cg = () => {
  if (ea !== null) return ea;
  try {
    ea = window !== 'undefined' && window.localStorage !== null;
    const e = 'i18next.translate.boo';
    window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e);
  } catch {
    ea = !1;
  }
  return ea;
};
var QC = {
  name: 'localStorage',
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && cg()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t;
    n && cg() && window.localStorage.setItem(n, e);
  },
};
let ta = null;
const fg = () => {
  if (ta !== null) return ta;
  try {
    ta = window !== 'undefined' && window.sessionStorage !== null;
    const e = 'i18next.translate.boo';
    window.sessionStorage.setItem(e, 'foo'),
      window.sessionStorage.removeItem(e);
  } catch {
    ta = !1;
  }
  return ta;
};
var JC = {
    name: 'sessionStorage',
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && fg()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && fg() && window.sessionStorage.setItem(n, e);
    },
  },
  ZC = {
    name: 'navigator',
    lookup(e) {
      const t = [];
      if (typeof navigator < 'u') {
        const { languages: n, userLanguage: r, language: i } = navigator;
        if (n) for (let o = 0; o < n.length; o++) t.push(n[o]);
        r && t.push(r), i && t.push(i);
      }
      return t.length > 0 ? t : void 0;
    },
  },
  eE = {
    name: 'htmlTag',
    lookup(e) {
      let { htmlTag: t } = e,
        n;
      const r = t || (typeof document < 'u' ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == 'function' &&
          (n = r.getAttribute('lang')),
        n
      );
    },
  },
  tE = {
    name: 'path',
    lookup(e) {
      var i;
      let { lookupFromPathIndex: t } = e;
      if (typeof window > 'u') return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n)
        ? (i = n[typeof t == 'number' ? t : 0]) == null
          ? void 0
          : i.replace('/', '')
        : void 0;
    },
  },
  nE = {
    name: 'subdomain',
    lookup(e) {
      var i, o;
      let { lookupFromSubdomainIndex: t } = e;
      const n = typeof t == 'number' ? t + 1 : 1,
        r =
          typeof window < 'u' &&
          ((o = (i = window.location) == null ? void 0 : i.hostname) == null
            ? void 0
            : o.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
              ));
      if (r) return r[n];
    },
  };
function rE() {
  return {
    order: [
      'querystring',
      'cookie',
      'localStorage',
      'sessionStorage',
      'navigator',
      'htmlTag',
    ],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    convertDetectedLanguage: (e) => e,
  };
}
class r1 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = 'languageDetector'), (this.detectors = {}), this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = t || { languageUtils: {} }),
      (this.options = XC(n, this.options || {}, rE())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (i) => i.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(YC),
      this.addDetector(qC),
      this.addDetector(QC),
      this.addDetector(JC),
      this.addDetector(ZC),
      this.addDetector(eE),
      this.addDetector(tE),
      this.addDetector(nE);
  }
  addDetector(t) {
    return (this.detectors[t.name] = t), this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return (
      t.forEach((r) => {
        if (this.detectors[r]) {
          let i = this.detectors[r].lookup(this.options);
          i && typeof i == 'string' && (i = [i]), i && (n = n.concat(i));
        }
      }),
      (n = n.map((r) => this.options.convertDetectedLanguage(r))),
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
        ? n[0]
        : null
    );
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches),
      n &&
        ((this.options.excludeCacheFor &&
          this.options.excludeCacheFor.indexOf(t) > -1) ||
          n.forEach((r) => {
            this.detectors[r] &&
              this.detectors[r].cacheUserLanguage(t, this.options);
          }));
  }
}
r1.type = 'languageDetector';
lt.use(n1)
  .use(r1)
  .use(EC)
  .init({
    fallbackLng: 'rs',
    debug: !0,
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    detection: {
      order: [
        'querystring',
        'localStorage',
        'cookie',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      lookupQuerystring: 'language',
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
      caches: ['localStorage', 'cookie'],
    },
    returnEmptyString: !1,
    ns: 'translation',
    defaultNS: 'translation',
    interpolation: { escapeValue: !1 },
  });
localStorage.getItem('i18nextLng') || lt.language;
localStorage.getItem('i18nextLng') ||
  (localStorage.setItem('i18nextLng', 'rs'), lt.changeLanguage('rs'));
var Tt = function () {
  return (
    (Tt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Tt.apply(this, arguments)
  );
};
function Vl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function i1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var iE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  oE = i1(function (e) {
    return (
      iE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  ze = '-ms-',
  Ea = '-moz-',
  xe = '-webkit-',
  o1 = 'comm',
  xu = 'rule',
  Sp = 'decl',
  aE = '@import',
  a1 = '@keyframes',
  sE = '@layer',
  s1 = Math.abs,
  bp = String.fromCharCode,
  ed = Object.assign;
function lE(e, t) {
  return at(e, 0) ^ 45
    ? (((((((t << 2) ^ at(e, 0)) << 2) ^ at(e, 1)) << 2) ^ at(e, 2)) << 2) ^
        at(e, 3)
    : 0;
}
function l1(e) {
  return e.trim();
}
function Xn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function tl(e, t, n) {
  return e.indexOf(t, n);
}
function at(e, t) {
  return e.charCodeAt(t) | 0;
}
function bo(e, t, n) {
  return e.slice(t, n);
}
function jn(e) {
  return e.length;
}
function u1(e) {
  return e.length;
}
function fa(e, t) {
  return t.push(e), e;
}
function uE(e, t) {
  return e.map(t).join('');
}
function dg(e, t) {
  return e.filter(function (n) {
    return !Xn(n, t);
  });
}
var wu = 1,
  ko = 1,
  c1 = 0,
  fn = 0,
  Je = 0,
  To = '';
function Su(e, t, n, r, i, o, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: wu,
    column: ko,
    length: a,
    return: '',
    siblings: s,
  };
}
function wr(e, t) {
  return ed(
    Su('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Li(e) {
  for (; e.root; ) e = wr(e.root, { children: [e] });
  fa(e, e.siblings);
}
function cE() {
  return Je;
}
function fE() {
  return (
    (Je = fn > 0 ? at(To, --fn) : 0), ko--, Je === 10 && ((ko = 1), wu--), Je
  );
}
function Pn() {
  return (
    (Je = fn < c1 ? at(To, fn++) : 0), ko++, Je === 10 && ((ko = 1), wu++), Je
  );
}
function ui() {
  return at(To, fn);
}
function nl() {
  return fn;
}
function bu(e, t) {
  return bo(To, e, t);
}
function td(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function dE(e) {
  return (wu = ko = 1), (c1 = jn((To = e))), (fn = 0), [];
}
function pE(e) {
  return (To = ''), e;
}
function Bc(e) {
  return l1(bu(fn - 1, nd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hE(e) {
  for (; (Je = ui()) && Je < 33; ) Pn();
  return td(e) > 2 || td(Je) > 3 ? '' : ' ';
}
function mE(e, t) {
  for (
    ;
    --t &&
    Pn() &&
    !(Je < 48 || Je > 102 || (Je > 57 && Je < 65) || (Je > 70 && Je < 97));

  );
  return bu(e, nl() + (t < 6 && ui() == 32 && Pn() == 32));
}
function nd(e) {
  for (; Pn(); )
    switch (Je) {
      case e:
        return fn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nd(Je);
        break;
      case 40:
        e === 41 && nd(e);
        break;
      case 92:
        Pn();
        break;
    }
  return fn;
}
function gE(e, t) {
  for (; Pn() && e + Je !== 57; ) if (e + Je === 84 && ui() === 47) break;
  return '/*' + bu(t, fn - 1) + '*' + bp(e === 47 ? e : Pn());
}
function yE(e) {
  for (; !td(ui()); ) Pn();
  return bu(e, fn);
}
function vE(e) {
  return pE(rl('', null, null, null, [''], (e = dE(e)), 0, [0], e));
}
function rl(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      f = 0,
      d = a,
      c = 0,
      y = 0,
      m = 0,
      h = 1,
      C = 1,
      g = 1,
      p = 0,
      x = '',
      S = i,
      E = o,
      v = r,
      b = x;
    C;

  )
    switch (((m = p), (p = Pn()))) {
      case 40:
        if (m != 108 && at(b, d - 1) == 58) {
          tl((b += ie(Bc(p), '&', '&\f')), '&\f', s1(u ? s[u - 1] : 0)) != -1 &&
            (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += Bc(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += hE(m);
        break;
      case 92:
        b += mE(nl() - 1, 7);
        continue;
      case 47:
        switch (ui()) {
          case 42:
          case 47:
            fa(xE(gE(Pn(), nl()), t, n, l), l);
            break;
          default:
            b += '/';
        }
        break;
      case 123 * h:
        s[u++] = jn(b) * g;
      case 125 * h:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + f:
            g == -1 && (b = ie(b, /\f/g, '')),
              y > 0 &&
                jn(b) - d &&
                fa(
                  y > 32
                    ? hg(b + ';', r, n, d - 1, l)
                    : hg(ie(b, ' ', '') + ';', r, n, d - 2, l),
                  l
                );
            break;
          case 59:
            b += ';';
          default:
            if (
              (fa(
                (v = pg(b, t, n, u, f, i, s, x, (S = []), (E = []), d, o)),
                o
              ),
              p === 123)
            )
              if (f === 0) rl(b, t, v, v, S, o, d, s, E);
              else
                switch (c === 99 && at(b, 3) === 110 ? 100 : c) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rl(
                      e,
                      v,
                      v,
                      r && fa(pg(e, v, v, 0, 0, i, s, x, i, (S = []), d, E), E),
                      i,
                      E,
                      d,
                      s,
                      r ? S : E
                    );
                    break;
                  default:
                    rl(b, v, v, v, [''], E, 0, s, E);
                }
        }
        (u = f = y = 0), (h = g = 1), (x = b = ''), (d = a);
        break;
      case 58:
        (d = 1 + jn(b)), (y = m);
      default:
        if (h < 1) {
          if (p == 123) --h;
          else if (p == 125 && h++ == 0 && fE() == 125) continue;
        }
        switch (((b += bp(p)), p * h)) {
          case 38:
            g = f > 0 ? 1 : ((b += '\f'), -1);
            break;
          case 44:
            (s[u++] = (jn(b) - 1) * g), (g = 1);
            break;
          case 64:
            ui() === 45 && (b += Bc(Pn())),
              (c = ui()),
              (f = d = jn((x = b += yE(nl())))),
              p++;
            break;
          case 45:
            m === 45 && jn(b) == 2 && (h = 0);
        }
    }
  return o;
}
function pg(e, t, n, r, i, o, a, s, l, u, f, d) {
  for (
    var c = i - 1, y = i === 0 ? o : [''], m = u1(y), h = 0, C = 0, g = 0;
    h < r;
    ++h
  )
    for (var p = 0, x = bo(e, c + 1, (c = s1((C = a[h])))), S = e; p < m; ++p)
      (S = l1(C > 0 ? y[p] + ' ' + x : ie(x, /&\f/g, y[p]))) && (l[g++] = S);
  return Su(e, t, n, i === 0 ? xu : s, l, u, f, d);
}
function xE(e, t, n, r) {
  return Su(e, t, n, o1, bp(cE()), bo(e, 2, -2), 0, r);
}
function hg(e, t, n, r, i) {
  return Su(e, t, n, Sp, bo(e, 0, r), bo(e, r + 1, -1), r, i);
}
function f1(e, t, n) {
  switch (lE(e, t)) {
    case 5103:
      return xe + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return xe + e + e;
    case 4789:
      return Ea + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + Ea + e + ze + e + e;
    case 5936:
      switch (at(e, t + 11)) {
        case 114:
          return xe + e + ze + ie(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return xe + e + ze + ie(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return xe + e + ze + ie(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return xe + e + ze + e + e;
    case 6165:
      return xe + e + ze + 'flex-' + e + e;
    case 5187:
      return (
        xe + e + ie(e, /(\w+).+(:[^]+)/, xe + 'box-$1$2' + ze + 'flex-$1$2') + e
      );
    case 5443:
      return (
        xe +
        e +
        ze +
        'flex-item-' +
        ie(e, /flex-|-self/g, '') +
        (Xn(e, /flex-|baseline/)
          ? ''
          : ze + 'grid-row-' + ie(e, /flex-|-self/g, '')) +
        e
      );
    case 4675:
      return (
        xe +
        e +
        ze +
        'flex-line-pack' +
        ie(e, /align-content|flex-|-self/g, '') +
        e
      );
    case 5548:
      return xe + e + ze + ie(e, 'shrink', 'negative') + e;
    case 5292:
      return xe + e + ze + ie(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        xe +
        'box-' +
        ie(e, '-grow', '') +
        xe +
        e +
        ze +
        ie(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return xe + ie(e, /([^-])(transform)/g, '$1' + xe + '$2') + e;
    case 6187:
      return (
        ie(
          ie(ie(e, /(zoom-|grab)/, xe + '$1'), /(image-set)/, xe + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, xe + '$1$`$1');
    case 4968:
      return (
        ie(
          ie(e, /(.+:)(flex-)?(.*)/, xe + 'box-pack:$3' + ze + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        xe +
        e +
        e
      );
    case 4200:
      if (!Xn(e, /flex-|baseline/))
        return ze + 'grid-column-align' + bo(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ze + ie(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Xn(r.props, /grid-\w+-end/);
        })
        ? ~tl(e + (n = n[t].value), 'span', 0)
          ? e
          : ze +
            ie(e, '-start', '') +
            e +
            ze +
            'grid-row-span:' +
            (~tl(n, 'span', 0) ? Xn(n, /\d+/) : +Xn(n, /\d+/) - +Xn(e, /\d+/)) +
            ';'
        : ze + ie(e, '-start', '') + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Xn(r.props, /grid-\w+-start/);
        })
        ? e
        : ze + ie(ie(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, xe + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (jn(e) - 1 - t > 6)
        switch (at(e, t + 1)) {
          case 109:
            if (at(e, t + 4) !== 45) break;
          case 102:
            return (
              ie(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  xe +
                  '$2-$3$1' +
                  Ea +
                  (at(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~tl(e, 'stretch', 0)
              ? f1(ie(e, 'stretch', 'fill-available'), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return ie(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, a, s, l, u) {
          return (
            ze +
            i +
            ':' +
            o +
            u +
            (a ? ze + i + '-span:' + (s ? l : +l - +o) + u : '') +
            e
          );
        }
      );
    case 4949:
      if (at(e, t + 6) === 121) return ie(e, ':', ':' + xe) + e;
      break;
    case 6444:
      switch (at(e, at(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ie(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                xe +
                (at(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                xe +
                '$2$3$1' +
                ze +
                '$2box$3'
            ) + e
          );
        case 100:
          return ie(e, ':', ':' + ze) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ie(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}
function Wl(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function wE(e, t, n, r) {
  switch (e.type) {
    case sE:
      if (e.children.length) break;
    case aE:
    case Sp:
      return (e.return = e.return || e.value);
    case o1:
      return '';
    case a1:
      return (e.return = e.value + '{' + Wl(e.children, r) + '}');
    case xu:
      if (!jn((e.value = e.props.join(',')))) return '';
  }
  return jn((n = Wl(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function SE(e) {
  var t = u1(e);
  return function (n, r, i, o) {
    for (var a = '', s = 0; s < t; s++) a += e[s](n, r, i, o) || '';
    return a;
  };
}
function bE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function kE(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Sp:
        e.return = f1(e.value, e.length, n);
        return;
      case a1:
        return Wl([wr(e, { value: ie(e.value, '@', '@' + xe) })], r);
      case xu:
        if (e.length)
          return uE((n = e.props), function (i) {
            switch (Xn(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                Li(wr(e, { props: [ie(i, /:(read-\w+)/, ':' + Ea + '$1')] })),
                  Li(wr(e, { props: [i] })),
                  ed(e, { props: dg(n, r) });
                break;
              case '::placeholder':
                Li(
                  wr(e, { props: [ie(i, /:(plac\w+)/, ':' + xe + 'input-$1')] })
                ),
                  Li(wr(e, { props: [ie(i, /:(plac\w+)/, ':' + Ea + '$1')] })),
                  Li(wr(e, { props: [ie(i, /:(plac\w+)/, ze + 'input-$1')] })),
                  Li(wr(e, { props: [i] })),
                  ed(e, { props: dg(n, r) });
                break;
            }
            return '';
          });
    }
}
var d1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Bt = {},
  Co =
    (typeof process < 'u' &&
      Bt !== void 0 &&
      (Bt.REACT_APP_SC_ATTR || Bt.SC_ATTR)) ||
    'data-styled',
  p1 = 'active',
  h1 = 'data-styled-version',
  ku = '6.1.11',
  kp = `/*!sc*/
`,
  Cp = typeof window < 'u' && 'HTMLElement' in window,
  CE = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      Bt !== void 0 &&
      Bt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Bt.REACT_APP_SC_DISABLE_SPEEDY !== ''
    ? Bt.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
      Bt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      Bt !== void 0 &&
      Bt.SC_DISABLE_SPEEDY !== void 0 &&
      Bt.SC_DISABLE_SPEEDY !== '' &&
      Bt.SC_DISABLE_SPEEDY !== 'false' &&
      Bt.SC_DISABLE_SPEEDY),
  Cu = Object.freeze([]),
  Eo = Object.freeze({});
function EE(e, t, n) {
  return (
    n === void 0 && (n = Eo), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var m1 = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  PE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  _E = /(^-|-$)/g;
function mg(e) {
  return e.replace(PE, '-').replace(_E, '');
}
var RE = /(a)(d)/gi,
  Ms = 52,
  gg = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function rd(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > Ms; t = (t / Ms) | 0) n = gg(t % Ms) + n;
  return (gg(t % Ms) + n).replace(RE, '$1-$2');
}
var Uc,
  g1 = 5381,
  no = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  y1 = function (e) {
    return no(g1, e);
  };
function $E(e) {
  return rd(y1(e) >>> 0);
}
function OE(e) {
  return e.displayName || e.name || 'Component';
}
function Hc(e) {
  return typeof e == 'string' && !0;
}
var v1 = typeof Symbol == 'function' && Symbol.for,
  x1 = v1 ? Symbol.for('react.memo') : 60115,
  zE = v1 ? Symbol.for('react.forward_ref') : 60112,
  TE = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  NE = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  w1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  LE =
    (((Uc = {})[zE] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Uc[x1] = w1),
    Uc);
function yg(e) {
  return ('type' in (t = e) && t.type.$$typeof) === x1
    ? w1
    : '$$typeof' in e
    ? LE[e.$$typeof]
    : TE;
  var t;
}
var jE = Object.defineProperty,
  ME = Object.getOwnPropertyNames,
  vg = Object.getOwnPropertySymbols,
  IE = Object.getOwnPropertyDescriptor,
  AE = Object.getPrototypeOf,
  xg = Object.prototype;
function S1(e, t, n) {
  if (typeof t != 'string') {
    if (xg) {
      var r = AE(t);
      r && r !== xg && S1(e, r, n);
    }
    var i = ME(t);
    vg && (i = i.concat(vg(t)));
    for (var o = yg(e), a = yg(t), s = 0; s < i.length; ++s) {
      var l = i[s];
      if (!(l in NE || (n && n[l]) || (a && l in a) || (o && l in o))) {
        var u = IE(t, l);
        try {
          jE(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Po(e) {
  return typeof e == 'function';
}
function Ep(e) {
  return typeof e == 'object' && 'styledComponentId' in e;
}
function oi(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}
function wg(e, t) {
  if (e.length === 0) return '';
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ya(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  );
}
function id(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Ya(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = id(e[r], t[r]);
  else if (Ya(t)) for (var r in t) e[r] = id(e[r], t[r]);
  return e;
}
function Pp(e, t) {
  Object.defineProperty(e, 'toString', { value: t });
}
function ss(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
      .concat(e, ' for more information.')
      .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
  );
}
var DE = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw ss(16, ''.concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var a = i; a < o; a++) this.groupSizes[a] = 0;
        }
        for (
          var s = this.indexOfGroup(t + 1), l = ((a = 0), n.length);
          a < l;
          a++
        )
          this.tag.insertRule(s, n[a]) && (this.groupSizes[t]++, s++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = '';
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            a = i;
          a < o;
          a++
        )
          n += ''.concat(this.tag.getRule(a)).concat(kp);
        return n;
      }),
      e
    );
  })(),
  il = new Map(),
  Kl = new Map(),
  ol = 1,
  Is = function (e) {
    if (il.has(e)) return il.get(e);
    for (; Kl.has(ol); ) ol++;
    var t = ol++;
    return il.set(e, t), Kl.set(t, e), t;
  },
  FE = function (e, t) {
    (ol = t + 1), il.set(e, t), Kl.set(t, e);
  },
  BE = 'style['.concat(Co, '][').concat(h1, '="').concat(ku, '"]'),
  UE = new RegExp(
    '^'.concat(Co, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  HE = function (e, t, n) {
    for (var r, i = n.split(','), o = 0, a = i.length; o < a; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  VE = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : '').split(kp),
        i = [],
        o = 0,
        a = r.length;
      o < a;
      o++
    ) {
      var s = r[o].trim();
      if (s) {
        var l = s.match(UE);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            f = l[2];
          u !== 0 && (FE(f, u), HE(e, f, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(s);
      }
    }
  };
function WE() {
  return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
}
var b1 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      i = (function (s) {
        var l = Array.from(s.querySelectorAll('style['.concat(Co, ']')));
        return l[l.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Co, p1), r.setAttribute(h1, ku);
    var a = WE();
    return a && r.setAttribute('nonce', a), n.insertBefore(r, o), r;
  },
  KE = (function () {
    function e(t) {
      (this.element = b1(t)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var a = r[i];
            if (a.ownerNode === n) return a;
          }
          throw ss(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : '';
      }),
      e
    );
  })(),
  XE = (function () {
    function e(t) {
      (this.element = b1(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : '';
      }),
      e
    );
  })(),
  GE = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : '';
      }),
      e
    );
  })(),
  Sg = Cp,
  YE = { isServer: !Cp, useCSSOMInjection: !CE },
  k1 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Eo), n === void 0 && (n = {});
      var i = this;
      (this.options = Tt(Tt({}, YE), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Cp &&
          Sg &&
          ((Sg = !1),
          (function (o) {
            for (
              var a = document.querySelectorAll(BE), s = 0, l = a.length;
              s < l;
              s++
            ) {
              var u = a[s];
              u &&
                u.getAttribute(Co) !== p1 &&
                (VE(o, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Pp(this, function () {
          return (function (o) {
            for (
              var a = o.getTag(),
                s = a.length,
                l = '',
                u = function (d) {
                  var c = (function (g) {
                    return Kl.get(g);
                  })(d);
                  if (c === void 0) return 'continue';
                  var y = o.names.get(c),
                    m = a.getGroup(d);
                  if (y === void 0 || m.length === 0) return 'continue';
                  var h = ''
                      .concat(Co, '.g')
                      .concat(d, '[id="')
                      .concat(c, '"]'),
                    C = '';
                  y !== void 0 &&
                    y.forEach(function (g) {
                      g.length > 0 && (C += ''.concat(g, ','));
                    }),
                    (l += ''
                      .concat(m)
                      .concat(h, '{content:"')
                      .concat(C, '"}')
                      .concat(kp));
                },
                f = 0;
              f < s;
              f++
            )
              u(f);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return Is(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Tt(Tt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new GE(i) : r ? new KE(i) : new XE(i);
            })(this.options)),
            new DE(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Is(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Is(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Is(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  qE = /&/g,
  QE = /^\s*\/\/.*$/gm;
function C1(e, t) {
  return e.map(function (n) {
    return (
      n.type === 'rule' &&
        ((n.value = ''.concat(t, ' ').concat(n.value)),
        (n.value = n.value.replaceAll(',', ','.concat(t, ' '))),
        (n.props = n.props.map(function (r) {
          return ''.concat(t, ' ').concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== '@keyframes' &&
        (n.children = C1(n.children, t)),
      n
    );
  });
}
function JE(e) {
  var t,
    n,
    r,
    i = Eo,
    o = i.options,
    a = o === void 0 ? Eo : o,
    s = i.plugins,
    l = s === void 0 ? Cu : s,
    u = function (c, y, m) {
      return m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, '').length > 0
        ? '.'.concat(t)
        : c;
    },
    f = l.slice();
  f.push(function (c) {
    c.type === xu &&
      c.value.includes('&') &&
      (c.props[0] = c.props[0].replace(qE, n).replace(r, u));
  }),
    a.prefix && f.push(kE),
    f.push(wE);
  var d = function (c, y, m, h) {
    y === void 0 && (y = ''),
      m === void 0 && (m = ''),
      h === void 0 && (h = '&'),
      (t = h),
      (n = y),
      (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
    var C = c.replace(QE, ''),
      g = vE(m || y ? ''.concat(m, ' ').concat(y, ' { ').concat(C, ' }') : C);
    a.namespace && (g = C1(g, a.namespace));
    var p = [];
    return (
      Wl(
        g,
        SE(
          f.concat(
            bE(function (x) {
              return p.push(x);
            })
          )
        )
      ),
      p
    );
  };
  return (
    (d.hash = l.length
      ? l
          .reduce(function (c, y) {
            return y.name || ss(15), no(c, y.name);
          }, g1)
          .toString()
      : ''),
    d
  );
}
var ZE = new k1(),
  od = JE(),
  E1 = ht.createContext({
    shouldForwardProp: void 0,
    styleSheet: ZE,
    stylis: od,
  });
E1.Consumer;
ht.createContext(void 0);
function bg() {
  return w.useContext(E1);
}
var e2 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = od);
        var a = r.name + o.hash;
        i.hasNameForId(r.id, a) ||
          i.insertRules(r.id, a, o(r.rules, a, '@keyframes'));
      }),
        (this.name = t),
        (this.id = 'sc-keyframes-'.concat(t)),
        (this.rules = n),
        Pp(this, function () {
          throw ss(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = od), this.name + t.hash;
      }),
      e
    );
  })(),
  t2 = function (e) {
    return e >= 'A' && e <= 'Z';
  };
function kg(e) {
  for (var t = '', n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === '-' && e[0] === '-') return e;
    t2(r) ? (t += '-' + r.toLowerCase()) : (t += r);
  }
  return t.startsWith('ms-') ? '-' + t : t;
}
var P1 = function (e) {
    return e == null || e === !1 || e === '';
  },
  _1 = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !P1(o) &&
        ((Array.isArray(o) && o.isCss) || Po(o)
          ? r.push(''.concat(kg(i), ':'), o, ';')
          : Ya(o)
          ? r.push.apply(r, Vl(Vl([''.concat(i, ' {')], _1(o), !1), ['}'], !1))
          : r.push(
              ''
                .concat(kg(i), ': ')
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == 'boolean' || n === ''
                    ? ''
                    : typeof n != 'number' ||
                      n === 0 ||
                      t in d1 ||
                      t.startsWith('--')
                    ? String(n).trim()
                    : ''.concat(n, 'px')),
                  ';'
                )
            ));
    }
    return r;
  };
function ci(e, t, n, r) {
  if (P1(e)) return [];
  if (Ep(e)) return ['.'.concat(e.styledComponentId)];
  if (Po(e)) {
    if (!Po((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return ci(i, t, n, r);
  }
  var o;
  return e instanceof e2
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Ya(e)
    ? _1(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Cu,
        e.map(function (a) {
          return ci(a, t, n, r);
        })
      )
    : [e.toString()];
}
function n2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Po(n) && !Ep(n)) return !1;
  }
  return !0;
}
var r2 = y1(ku),
  i2 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && n2(t)),
        (this.componentId = n),
        (this.baseHash = no(r2, n)),
        (this.baseStyle = r),
        k1.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : '';
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = oi(i, this.staticRulesId);
          else {
            var o = wg(ci(this.rules, t, n, r)),
              a = rd(no(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, a)) {
              var s = r(o, '.'.concat(a), void 0, this.componentId);
              n.insertRules(this.componentId, a, s);
            }
            (i = oi(i, a)), (this.staticRulesId = a);
          }
        else {
          for (
            var l = no(this.baseHash, r.hash), u = '', f = 0;
            f < this.rules.length;
            f++
          ) {
            var d = this.rules[f];
            if (typeof d == 'string') u += d;
            else if (d) {
              var c = wg(ci(d, t, n, r));
              (l = no(l, c + f)), (u += c);
            }
          }
          if (u) {
            var y = rd(l >>> 0);
            n.hasNameForId(this.componentId, y) ||
              n.insertRules(
                this.componentId,
                y,
                r(u, '.'.concat(y), void 0, this.componentId)
              ),
              (i = oi(i, y));
          }
        }
        return i;
      }),
      e
    );
  })(),
  R1 = ht.createContext(void 0);
R1.Consumer;
var Vc = {};
function o2(e, t, n) {
  var r = Ep(e),
    i = e,
    o = !Hc(e),
    a = t.attrs,
    s = a === void 0 ? Cu : a,
    l = t.componentId,
    u =
      l === void 0
        ? (function (S, E) {
            var v = typeof S != 'string' ? 'sc' : mg(S);
            Vc[v] = (Vc[v] || 0) + 1;
            var b = ''.concat(v, '-').concat($E(ku + v + Vc[v]));
            return E ? ''.concat(E, '-').concat(b) : b;
          })(t.displayName, t.parentComponentId)
        : l,
    f = t.displayName,
    d =
      f === void 0
        ? (function (S) {
            return Hc(S) ? 'styled.'.concat(S) : 'Styled('.concat(OE(S), ')');
          })(e)
        : f,
    c =
      t.displayName && t.componentId
        ? ''.concat(mg(t.displayName), '-').concat(t.componentId)
        : t.componentId || u,
    y = r && i.attrs ? i.attrs.concat(s).filter(Boolean) : s,
    m = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var h = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      m = function (S, E) {
        return h(S, E) && C(S, E);
      };
    } else m = h;
  }
  var g = new i2(n, c, r ? i.componentStyle : void 0);
  function p(S, E) {
    return (function (v, b, N) {
      var L = v.attrs,
        A = v.componentStyle,
        H = v.defaultProps,
        G = v.foldedComponentIds,
        Y = v.styledComponentId,
        K = v.target,
        R = ht.useContext(R1),
        z = bg(),
        F = v.shouldForwardProp || z.shouldForwardProp,
        O = EE(b, R, H) || Eo,
        M = (function (Me, ce, yt) {
          for (
            var Rt,
              We = Tt(Tt({}, ce), { className: void 0, theme: yt }),
              Rn = 0;
            Rn < Me.length;
            Rn += 1
          ) {
            var $n = Po((Rt = Me[Rn])) ? Rt(We) : Rt;
            for (var we in $n)
              We[we] =
                we === 'className'
                  ? oi(We[we], $n[we])
                  : we === 'style'
                  ? Tt(Tt({}, We[we]), $n[we])
                  : $n[we];
          }
          return (
            ce.className && (We.className = oi(We.className, ce.className)), We
          );
        })(L, b, O),
        j = M.as || K,
        q = {};
      for (var re in M)
        M[re] === void 0 ||
          re[0] === '$' ||
          re === 'as' ||
          (re === 'theme' && M.theme === O) ||
          (re === 'forwardedAs'
            ? (q.as = M.forwardedAs)
            : (F && !F(re, j)) || (q[re] = M[re]));
      var ye = (function (Me, ce) {
          var yt = bg(),
            Rt = Me.generateAndInjectStyles(ce, yt.styleSheet, yt.stylis);
          return Rt;
        })(A, M),
        se = oi(G, Y);
      return (
        ye && (se += ' ' + ye),
        M.className && (se += ' ' + M.className),
        (q[Hc(j) && !m1.has(j) ? 'class' : 'className'] = se),
        (q.ref = N),
        w.createElement(j, q)
      );
    })(x, S, E);
  }
  p.displayName = d;
  var x = ht.forwardRef(p);
  return (
    (x.attrs = y),
    (x.componentStyle = g),
    (x.displayName = d),
    (x.shouldForwardProp = m),
    (x.foldedComponentIds = r
      ? oi(i.foldedComponentIds, i.styledComponentId)
      : ''),
    (x.styledComponentId = c),
    (x.target = r ? i.target : e),
    Object.defineProperty(x, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (S) {
        this._foldedDefaultProps = r
          ? (function (E) {
              for (var v = [], b = 1; b < arguments.length; b++)
                v[b - 1] = arguments[b];
              for (var N = 0, L = v; N < L.length; N++) id(E, L[N], !0);
              return E;
            })({}, i.defaultProps, S)
          : S;
      },
    }),
    Pp(x, function () {
      return '.'.concat(x.styledComponentId);
    }),
    o &&
      S1(x, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    x
  );
}
function Cg(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Eg = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function _p(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Po(e) || Ya(e)) return Eg(ci(Cg(Cu, Vl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == 'string'
    ? ci(r)
    : Eg(ci(Cg(r, t)));
}
function ad(e, t, n) {
  if ((n === void 0 && (n = Eo), !t)) throw ss(1, t);
  var r = function (i) {
    for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
    return e(t, n, _p.apply(void 0, Vl([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return ad(
        e,
        t,
        Tt(Tt({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return ad(e, t, Tt(Tt({}, n), i));
    }),
    r
  );
}
var $1 = function (e) {
    return ad(o2, e);
  },
  ut = $1;
m1.forEach(function (e) {
  ut[e] = $1(e);
});
const a2 = ut.header`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: var(--color-background-2);

  height: 75px;

  .brut-logo {
    position: absolute;
    top: 10px;
    display: flex;
  }
`,
  s2 = ut.div`
  width: 100%;
  background-color: var(--color-background-1);

  .hamburger-menu {
    &__button {
      position: absolute;
      right: 10px;
      top: 10px;
      margin: 0;
    }

    &__content {
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      overflow: hidden;
      max-height: 0;
      opacity: 0;

      &--hidden {
        max-height: 0;
        opacity: 0;
      }
      &--visible {
        max-height: 400px;
        opacity: 1;
      }

      &__list {
        list-style-type: none;
        padding: 0;
        padding-top: 75px;
        margin: 0;
        margin-bottom: 8px;

        li {
          width: 100%;
          color: white;
          border-bottom: 1px solid #57081d;
          padding-top: 8px;
          padding-bottom: 8px;
        }

        &__item {
          &--selected {
            background-color: var(--color-green);
          }

          &--link {
            display: flex;
            justify-content: center;
            width: 100%;
            text-decoration: none;
            font-size: 18px;
            line-height: 25px;
            color: var(--color-white);
            background: linear-gradient(
              60deg,
              var(--color-green),
              var(--color-white),
              var(--color-red)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
        }

        &__item--languages {
          display: flex;
          justify-content: space-evenly;
          .flag {
            &--selected {
              position: relative;
              display: inline-block;
              padding: 1px;
              border: 2px solid var(--color-green);
            }
          }
        }
      }
    }
  }

  .MuiSvgIcon-root {
    color: white;
  }
`,
  qa = { black: '#000', white: '#fff' },
  ji = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Mi = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Ii = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Ai = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  Di = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  na = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  l2 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  };
function Qa(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const u2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Qa },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Rp = '$$material';
function D() {
  return (
    (D = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    D.apply(null, arguments)
  );
}
function Xe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function c2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function f2(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var d2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(f2(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = c2(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  wt = '-ms-',
  Xl = '-moz-',
  he = '-webkit-',
  O1 = 'comm',
  $p = 'rule',
  Op = 'decl',
  p2 = '@import',
  z1 = '@keyframes',
  h2 = '@layer',
  m2 = Math.abs,
  Eu = String.fromCharCode,
  g2 = Object.assign;
function y2(e, t) {
  return pt(e, 0) ^ 45
    ? (((((((t << 2) ^ pt(e, 0)) << 2) ^ pt(e, 1)) << 2) ^ pt(e, 2)) << 2) ^
        pt(e, 3)
    : 0;
}
function T1(e) {
  return e.trim();
}
function v2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, n) {
  return e.replace(t, n);
}
function sd(e, t) {
  return e.indexOf(t);
}
function pt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ja(e, t, n) {
  return e.slice(t, n);
}
function Mn(e) {
  return e.length;
}
function zp(e) {
  return e.length;
}
function As(e, t) {
  return t.push(e), e;
}
function x2(e, t) {
  return e.map(t).join('');
}
var Pu = 1,
  _o = 1,
  N1 = 0,
  Mt = 0,
  Ze = 0,
  No = '';
function _u(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Pu,
    column: _o,
    length: a,
    return: '',
  };
}
function ra(e, t) {
  return g2(_u('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function w2() {
  return Ze;
}
function S2() {
  return (
    (Ze = Mt > 0 ? pt(No, --Mt) : 0), _o--, Ze === 10 && ((_o = 1), Pu--), Ze
  );
}
function Xt() {
  return (
    (Ze = Mt < N1 ? pt(No, Mt++) : 0), _o++, Ze === 10 && ((_o = 1), Pu++), Ze
  );
}
function Un() {
  return pt(No, Mt);
}
function al() {
  return Mt;
}
function ls(e, t) {
  return Ja(No, e, t);
}
function Za(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function L1(e) {
  return (Pu = _o = 1), (N1 = Mn((No = e))), (Mt = 0), [];
}
function j1(e) {
  return (No = ''), e;
}
function sl(e) {
  return T1(ls(Mt - 1, ld(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function b2(e) {
  for (; (Ze = Un()) && Ze < 33; ) Xt();
  return Za(e) > 2 || Za(Ze) > 3 ? '' : ' ';
}
function k2(e, t) {
  for (
    ;
    --t &&
    Xt() &&
    !(Ze < 48 || Ze > 102 || (Ze > 57 && Ze < 65) || (Ze > 70 && Ze < 97));

  );
  return ls(e, al() + (t < 6 && Un() == 32 && Xt() == 32));
}
function ld(e) {
  for (; Xt(); )
    switch (Ze) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ld(Ze);
        break;
      case 40:
        e === 41 && ld(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Mt;
}
function C2(e, t) {
  for (; Xt() && e + Ze !== 57; ) if (e + Ze === 84 && Un() === 47) break;
  return '/*' + ls(t, Mt - 1) + '*' + Eu(e === 47 ? e : Xt());
}
function E2(e) {
  for (; !Za(Un()); ) Xt();
  return ls(e, Mt);
}
function P2(e) {
  return j1(ll('', null, null, null, [''], (e = L1(e)), 0, [0], e));
}
function ll(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      f = 0,
      d = a,
      c = 0,
      y = 0,
      m = 0,
      h = 1,
      C = 1,
      g = 1,
      p = 0,
      x = '',
      S = i,
      E = o,
      v = r,
      b = x;
    C;

  )
    switch (((m = p), (p = Xt()))) {
      case 40:
        if (m != 108 && pt(b, d - 1) == 58) {
          sd((b += me(sl(p), '&', '&\f')), '&\f') != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += sl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += b2(m);
        break;
      case 92:
        b += k2(al() - 1, 7);
        continue;
      case 47:
        switch (Un()) {
          case 42:
          case 47:
            As(_2(C2(Xt(), al()), t, n), l);
            break;
          default:
            b += '/';
        }
        break;
      case 123 * h:
        s[u++] = Mn(b) * g;
      case 125 * h:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + f:
            g == -1 && (b = me(b, /\f/g, '')),
              y > 0 &&
                Mn(b) - d &&
                As(
                  y > 32
                    ? _g(b + ';', r, n, d - 1)
                    : _g(me(b, ' ', '') + ';', r, n, d - 2),
                  l
                );
            break;
          case 59:
            b += ';';
          default:
            if (
              (As((v = Pg(b, t, n, u, f, i, s, x, (S = []), (E = []), d)), o),
              p === 123)
            )
              if (f === 0) ll(b, t, v, v, S, o, d, s, E);
              else
                switch (c === 99 && pt(b, 3) === 110 ? 100 : c) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ll(
                      e,
                      v,
                      v,
                      r && As(Pg(e, v, v, 0, 0, i, s, x, i, (S = []), d), E),
                      i,
                      E,
                      d,
                      s,
                      r ? S : E
                    );
                    break;
                  default:
                    ll(b, v, v, v, [''], E, 0, s, E);
                }
        }
        (u = f = y = 0), (h = g = 1), (x = b = ''), (d = a);
        break;
      case 58:
        (d = 1 + Mn(b)), (y = m);
      default:
        if (h < 1) {
          if (p == 123) --h;
          else if (p == 125 && h++ == 0 && S2() == 125) continue;
        }
        switch (((b += Eu(p)), p * h)) {
          case 38:
            g = f > 0 ? 1 : ((b += '\f'), -1);
            break;
          case 44:
            (s[u++] = (Mn(b) - 1) * g), (g = 1);
            break;
          case 64:
            Un() === 45 && (b += sl(Xt())),
              (c = Un()),
              (f = d = Mn((x = b += E2(al())))),
              p++;
            break;
          case 45:
            m === 45 && Mn(b) == 2 && (h = 0);
        }
    }
  return o;
}
function Pg(e, t, n, r, i, o, a, s, l, u, f) {
  for (
    var d = i - 1, c = i === 0 ? o : [''], y = zp(c), m = 0, h = 0, C = 0;
    m < r;
    ++m
  )
    for (var g = 0, p = Ja(e, d + 1, (d = m2((h = a[m])))), x = e; g < y; ++g)
      (x = T1(h > 0 ? c[g] + ' ' + p : me(p, /&\f/g, c[g]))) && (l[C++] = x);
  return _u(e, t, n, i === 0 ? $p : s, l, u, f);
}
function _2(e, t, n) {
  return _u(e, t, n, O1, Eu(w2()), Ja(e, 2, -2), 0);
}
function _g(e, t, n, r) {
  return _u(e, t, n, Op, Ja(e, 0, r), Ja(e, r + 1, -1), r);
}
function co(e, t) {
  for (var n = '', r = zp(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || '';
  return n;
}
function R2(e, t, n, r) {
  switch (e.type) {
    case h2:
      if (e.children.length) break;
    case p2:
    case Op:
      return (e.return = e.return || e.value);
    case O1:
      return '';
    case z1:
      return (e.return = e.value + '{' + co(e.children, r) + '}');
    case $p:
      e.value = e.props.join(',');
  }
  return Mn((n = co(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function $2(e) {
  var t = zp(e);
  return function (n, r, i, o) {
    for (var a = '', s = 0; s < t; s++) a += e[s](n, r, i, o) || '';
    return a;
  };
}
function O2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var z2 = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = Un()), i === 38 && o === 12 && (n[r] = 1), !Za(o);

    )
      Xt();
    return ls(t, Mt);
  },
  T2 = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (Za(i)) {
        case 0:
          i === 38 && Un() === 12 && (n[r] = 1), (t[r] += z2(Mt - 1, n, r));
          break;
        case 2:
          t[r] += sl(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = Un() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Eu(i);
      }
    while ((i = Xt()));
    return t;
  },
  N2 = function (t, n) {
    return j1(T2(L1(t), n));
  },
  Rg = new WeakMap(),
  L2 = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Rg.get(r)) &&
        !i
      ) {
        Rg.set(t, !0);
        for (
          var o = [], a = N2(n, o), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var f = 0; f < s.length; f++, u++)
            t.props[u] = o[l] ? a[l].replace(/&\f/g, s[f]) : s[f] + ' ' + a[l];
      }
    }
  },
  j2 = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function M1(e, t) {
  switch (y2(e, t)) {
    case 5103:
      return he + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Xl + e + wt + e + e;
    case 6828:
    case 4268:
      return he + e + wt + e + e;
    case 6165:
      return he + e + wt + 'flex-' + e + e;
    case 5187:
      return (
        he + e + me(e, /(\w+).+(:[^]+)/, he + 'box-$1$2' + wt + 'flex-$1$2') + e
      );
    case 5443:
      return he + e + wt + 'flex-item-' + me(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        he +
        e +
        wt +
        'flex-line-pack' +
        me(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return he + e + wt + me(e, 'shrink', 'negative') + e;
    case 5292:
      return he + e + wt + me(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        he +
        'box-' +
        me(e, '-grow', '') +
        he +
        e +
        wt +
        me(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return he + me(e, /([^-])(transform)/g, '$1' + he + '$2') + e;
    case 6187:
      return (
        me(
          me(me(e, /(zoom-|grab)/, he + '$1'), /(image-set)/, he + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, he + '$1$`$1');
    case 4968:
      return (
        me(
          me(e, /(.+:)(flex-)?(.*)/, he + 'box-pack:$3' + wt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        he +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, he + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Mn(e) - 1 - t > 6)
        switch (pt(e, t + 1)) {
          case 109:
            if (pt(e, t + 4) !== 45) break;
          case 102:
            return (
              me(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  he +
                  '$2-$3$1' +
                  Xl +
                  (pt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~sd(e, 'stretch')
              ? M1(me(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (pt(e, t + 1) !== 115) break;
    case 6444:
      switch (pt(e, Mn(e) - 3 - (~sd(e, '!important') && 10))) {
        case 107:
          return me(e, ':', ':' + he) + e;
        case 101:
          return (
            me(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                he +
                (pt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                he +
                '$2$3$1' +
                wt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (pt(e, t + 11)) {
        case 114:
          return he + e + wt + me(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return he + e + wt + me(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return he + e + wt + me(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return he + e + wt + e + e;
  }
  return e;
}
var M2 = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Op:
          t.return = M1(t.value, t.length);
          break;
        case z1:
          return co([ra(t, { value: me(t.value, '@', '@' + he) })], i);
        case $p:
          if (t.length)
            return x2(t.props, function (o) {
              switch (v2(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return co(
                    [ra(t, { props: [me(o, /:(read-\w+)/, ':' + Xl + '$1')] })],
                    i
                  );
                case '::placeholder':
                  return co(
                    [
                      ra(t, {
                        props: [me(o, /:(plac\w+)/, ':' + he + 'input-$1')],
                      }),
                      ra(t, { props: [me(o, /:(plac\w+)/, ':' + Xl + '$1')] }),
                      ra(t, { props: [me(o, /:(plac\w+)/, wt + 'input-$1')] }),
                    ],
                    i
                  );
              }
              return '';
            });
      }
  },
  I2 = [M2],
  I1 = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (h) {
        var C = h.getAttribute('data-emotion');
        C.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var i = t.stylisPlugins || I2,
      o = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (h) {
          for (
            var C = h.getAttribute('data-emotion').split(' '), g = 1;
            g < C.length;
            g++
          )
            o[C[g]] = !0;
          s.push(h);
        }
      );
    var l,
      u = [L2, j2];
    {
      var f,
        d = [
          R2,
          O2(function (h) {
            f.insert(h);
          }),
        ],
        c = $2(u.concat(i, d)),
        y = function (C) {
          return co(P2(C), c);
        };
      l = function (C, g, p, x) {
        (f = p),
          y(C ? C + '{' + g.styles + '}' : g.styles),
          x && (m.inserted[g.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new d2({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(s), m;
  },
  A1 = { exports: {} },
  be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ct = typeof Symbol == 'function' && Symbol.for,
  Tp = ct ? Symbol.for('react.element') : 60103,
  Np = ct ? Symbol.for('react.portal') : 60106,
  Ru = ct ? Symbol.for('react.fragment') : 60107,
  $u = ct ? Symbol.for('react.strict_mode') : 60108,
  Ou = ct ? Symbol.for('react.profiler') : 60114,
  zu = ct ? Symbol.for('react.provider') : 60109,
  Tu = ct ? Symbol.for('react.context') : 60110,
  Lp = ct ? Symbol.for('react.async_mode') : 60111,
  Nu = ct ? Symbol.for('react.concurrent_mode') : 60111,
  Lu = ct ? Symbol.for('react.forward_ref') : 60112,
  ju = ct ? Symbol.for('react.suspense') : 60113,
  A2 = ct ? Symbol.for('react.suspense_list') : 60120,
  Mu = ct ? Symbol.for('react.memo') : 60115,
  Iu = ct ? Symbol.for('react.lazy') : 60116,
  D2 = ct ? Symbol.for('react.block') : 60121,
  F2 = ct ? Symbol.for('react.fundamental') : 60117,
  B2 = ct ? Symbol.for('react.responder') : 60118,
  U2 = ct ? Symbol.for('react.scope') : 60119;
function Qt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Tp:
        switch (((e = e.type), e)) {
          case Lp:
          case Nu:
          case Ru:
          case Ou:
          case $u:
          case ju:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Tu:
              case Lu:
              case Iu:
              case Mu:
              case zu:
                return e;
              default:
                return t;
            }
        }
      case Np:
        return t;
    }
  }
}
function D1(e) {
  return Qt(e) === Nu;
}
be.AsyncMode = Lp;
be.ConcurrentMode = Nu;
be.ContextConsumer = Tu;
be.ContextProvider = zu;
be.Element = Tp;
be.ForwardRef = Lu;
be.Fragment = Ru;
be.Lazy = Iu;
be.Memo = Mu;
be.Portal = Np;
be.Profiler = Ou;
be.StrictMode = $u;
be.Suspense = ju;
be.isAsyncMode = function (e) {
  return D1(e) || Qt(e) === Lp;
};
be.isConcurrentMode = D1;
be.isContextConsumer = function (e) {
  return Qt(e) === Tu;
};
be.isContextProvider = function (e) {
  return Qt(e) === zu;
};
be.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tp;
};
be.isForwardRef = function (e) {
  return Qt(e) === Lu;
};
be.isFragment = function (e) {
  return Qt(e) === Ru;
};
be.isLazy = function (e) {
  return Qt(e) === Iu;
};
be.isMemo = function (e) {
  return Qt(e) === Mu;
};
be.isPortal = function (e) {
  return Qt(e) === Np;
};
be.isProfiler = function (e) {
  return Qt(e) === Ou;
};
be.isStrictMode = function (e) {
  return Qt(e) === $u;
};
be.isSuspense = function (e) {
  return Qt(e) === ju;
};
be.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ru ||
    e === Nu ||
    e === Ou ||
    e === $u ||
    e === ju ||
    e === A2 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Iu ||
        e.$$typeof === Mu ||
        e.$$typeof === zu ||
        e.$$typeof === Tu ||
        e.$$typeof === Lu ||
        e.$$typeof === F2 ||
        e.$$typeof === B2 ||
        e.$$typeof === U2 ||
        e.$$typeof === D2))
  );
};
be.typeOf = Qt;
A1.exports = be;
var H2 = A1.exports,
  F1 = H2,
  V2 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  W2 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  B1 = {};
B1[F1.ForwardRef] = V2;
B1[F1.Memo] = W2;
var K2 = !0;
function X2(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (r += i + ' ');
    }),
    r
  );
}
var U1 = function (t, n, r) {
    var i = t.key + '-' + n.name;
    (r === !1 || K2 === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  H1 = function (t, n, r) {
    U1(t, n, r);
    var i = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? '.' + i : '', o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function G2(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Y2 = /[A-Z]|^ms/g,
  q2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  V1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  $g = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Wc = i1(function (e) {
    return V1(e) ? e : e.replace(Y2, '-$&').toLowerCase();
  }),
  Og = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(q2, function (r, i, o) {
            return (In = { name: i, styles: o, next: In }), i;
          });
    }
    return d1[t] !== 1 && !V1(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  };
function es(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (In = { name: n.name, styles: n.styles, next: In }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (In = { name: r.name, styles: r.styles, next: In }), (r = r.next);
        var i = n.styles + ';';
        return i;
      }
      return Q2(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var o = In,
          a = n(e);
        return (In = o), es(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Q2(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += es(e, t, n[i]) + ';';
  else
    for (var o in n) {
      var a = n[o];
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (r += o + '{' + t[a] + '}')
          : $g(a) && (r += Wc(o) + ':' + Og(o, a) + ';');
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          $g(a[s]) && (r += Wc(o) + ':' + Og(o, a[s]) + ';');
      else {
        var l = es(e, t, a);
        switch (o) {
          case 'animation':
          case 'animationName': {
            r += Wc(o) + ':' + l + ';';
            break;
          }
          default:
            r += o + '{' + l + '}';
        }
      }
    }
  return r;
}
var zg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  In,
  jp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = '';
    In = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += es(r, n, a)))
      : (o += a[0]);
    for (var s = 1; s < t.length; s++) (o += es(r, n, t[s])), i && (o += a[s]);
    zg.lastIndex = 0;
    for (var l = '', u; (u = zg.exec(o)) !== null; ) l += '-' + u[1];
    var f = G2(o) + l;
    return { name: f, styles: o, next: In };
  },
  J2 = function (t) {
    return t();
  },
  W1 = dl.useInsertionEffect ? dl.useInsertionEffect : !1,
  Z2 = W1 || J2,
  Tg = W1 || w.useLayoutEffect,
  K1 = w.createContext(typeof HTMLElement < 'u' ? I1({ key: 'css' }) : null),
  eP = K1.Provider,
  X1 = function (t) {
    return w.forwardRef(function (n, r) {
      var i = w.useContext(K1);
      return t(n, i, r);
    });
  },
  Au = w.createContext({}),
  Kc = { exports: {} },
  Ng;
function G1() {
  return (
    Ng ||
      ((Ng = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r];
                      for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (n[o] = i[o]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Kc)),
    Kc.exports
  );
}
G1();
var tP = X1(function (e, t) {
  var n = e.styles,
    r = jp([n], void 0, w.useContext(Au)),
    i = w.useRef();
  return (
    Tg(
      function () {
        var o = t.key + '-global',
          a = new t.sheet.constructor({
            key: o,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          s = !1,
          l = document.querySelector(
            'style[data-emotion="' + o + ' ' + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (a.before = t.sheet.tags[0]),
          l !== null &&
            ((s = !0), l.setAttribute('data-emotion', o), a.hydrate([l])),
          (i.current = [a, s]),
          function () {
            a.flush();
          }
        );
      },
      [t]
    ),
    Tg(
      function () {
        var o = i.current,
          a = o[0],
          s = o[1];
        if (s) {
          o[1] = !1;
          return;
        }
        if ((r.next !== void 0 && H1(t, r.next, !0), a.tags.length)) {
          var l = a.tags[a.tags.length - 1].nextElementSibling;
          (a.before = l), a.flush();
        }
        t.insert('', r, a, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Du() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return jp(t);
}
var Lo = function () {
    var t = Du.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  nP = oE,
  rP = function (t) {
    return t !== 'theme';
  },
  Lg = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? nP : rP;
  },
  jg = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof i != 'function' && r && (i = t.__emotion_forwardProp), i;
  },
  iP = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      U1(n, r, i),
      Z2(function () {
        return H1(n, r, i);
      }),
      null
    );
  },
  oP = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      a;
    n !== void 0 && ((o = n.label), (a = n.target));
    var s = jg(t, n, r),
      l = s || Lg(i),
      u = !l('as');
    return function () {
      var f = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && d.push('label:' + o + ';'),
        f[0] == null || f[0].raw === void 0)
      )
        d.push.apply(d, f);
      else {
        d.push(f[0][0]);
        for (var c = f.length, y = 1; y < c; y++) d.push(f[y], f[0][y]);
      }
      var m = X1(function (h, C, g) {
        var p = (u && h.as) || i,
          x = '',
          S = [],
          E = h;
        if (h.theme == null) {
          E = {};
          for (var v in h) E[v] = h[v];
          E.theme = w.useContext(Au);
        }
        typeof h.className == 'string'
          ? (x = X2(C.registered, S, h.className))
          : h.className != null && (x = h.className + ' ');
        var b = jp(d.concat(S), C.registered, E);
        (x += C.key + '-' + b.name), a !== void 0 && (x += ' ' + a);
        var N = u && s === void 0 ? Lg(p) : l,
          L = {};
        for (var A in h) (u && A === 'as') || (N(A) && (L[A] = h[A]));
        return (
          (L.className = x),
          (L.ref = g),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(iP, {
              cache: C,
              serialized: b,
              isStringTag: typeof p == 'string',
            }),
            w.createElement(p, L)
          )
        );
      });
      return (
        (m.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof i == 'string'
                ? i
                : i.displayName || i.name || 'Component') +
              ')'),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = i),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = s),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return '.' + a;
          },
        }),
        (m.withComponent = function (h, C) {
          return e(h, D({}, n, C, { shouldForwardProp: jg(m, C, !0) })).apply(
            void 0,
            d
          );
        }),
        m
      );
    };
  },
  aP = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  ud = oP.bind();
aP.forEach(function (e) {
  ud[e] = ud(e);
});
let cd;
typeof document == 'object' && (cd = I1({ key: 'css', prepend: !0 }));
function sP(e) {
  const { injectFirst: t, children: n } = e;
  return t && cd ? _.jsx(eP, { value: cd, children: n }) : n;
}
function lP(e) {
  return e == null || Object.keys(e).length === 0;
}
function uP(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (i) => t(lP(i) ? n : i) : t;
  return _.jsx(tP, { styles: r });
}
function cP(e, t) {
  return ud(e, t);
}
const fP = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  dP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: uP,
        StyledEngineProvider: sP,
        ThemeContext: Au,
        css: Du,
        default: cP,
        internal_processStyles: fP,
        keyframes: Lo,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Er(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Y1(e) {
  if (!Er(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Y1(e[n]);
    }),
    t
  );
}
function Hn(e, t, n = { clone: !0 }) {
  const r = n.clone ? D({}, e) : e;
  return (
    Er(e) &&
      Er(t) &&
      Object.keys(t).forEach((i) => {
        Er(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && Er(e[i])
          ? (r[i] = Hn(e[i], t[i], n))
          : n.clone
          ? (r[i] = Er(t[i]) ? Y1(t[i]) : t[i])
          : (r[i] = t[i]);
      }),
    r
  );
}
const pP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hn, isPlainObject: Er },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  hP = ['values', 'unit', 'step'],
  mP = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => D({}, n, { [r.key]: r.val }), {})
    );
  };
function q1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    i = Xe(e, hP),
    o = mP(t),
    a = Object.keys(o);
  function s(c) {
    return `@media (min-width:${typeof t[c] == 'number' ? t[c] : c}${n})`;
  }
  function l(c) {
    return `@media (max-width:${
      (typeof t[c] == 'number' ? t[c] : c) - r / 100
    }${n})`;
  }
  function u(c, y) {
    const m = a.indexOf(y);
    return `@media (min-width:${
      typeof t[c] == 'number' ? t[c] : c
    }${n}) and (max-width:${
      (m !== -1 && typeof t[a[m]] == 'number' ? t[a[m]] : y) - r / 100
    }${n})`;
  }
  function f(c) {
    return a.indexOf(c) + 1 < a.length ? u(c, a[a.indexOf(c) + 1]) : s(c);
  }
  function d(c) {
    const y = a.indexOf(c);
    return y === 0
      ? s(a[1])
      : y === a.length - 1
      ? l(a[y])
      : u(c, a[a.indexOf(c) + 1]).replace('@media', '@media not all and');
  }
  return D(
    {
      keys: a,
      values: o,
      up: s,
      down: l,
      between: u,
      only: f,
      not: d,
      unit: n,
    },
    i
  );
}
const gP = { borderRadius: 4 };
function Pa(e, t) {
  return t ? Hn(e, t, { clone: !1 }) : e;
}
const Mp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Mg = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Mp[e]}px)`,
  };
function or(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Mg;
    return t.reduce((a, s, l) => ((a[o.up(o.keys[l])] = n(t[l])), a), {});
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || Mg;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(o.values || Mp).indexOf(s) !== -1) {
        const l = o.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function yP(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function vP(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function ge(e) {
  if (typeof e != 'string') throw new Error(Qa(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const xP = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ge }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function Fu(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function Gl(e, t, n, r = n) {
  let i;
  return (
    typeof e == 'function'
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Fu(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function Ge(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        l = a.theme,
        u = Fu(l, r) || {};
      return or(a, s, (d) => {
        let c = Gl(u, i, d);
        return (
          d === c &&
            typeof d == 'string' &&
            (c = Gl(u, i, `${t}${d === 'default' ? '' : ge(d)}`, d)),
          n === !1 ? c : { [n]: c }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function wP(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const SP = { m: 'margin', p: 'padding' },
  bP = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  Ig = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  kP = wP((e) => {
    if (e.length > 2)
      if (Ig[e]) e = Ig[e];
      else return [e];
    const [t, n] = e.split(''),
      r = SP[t],
      i = bP[n] || '';
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  Ip = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Ap = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Ip, ...Ap];
function us(e, t, n, r) {
  var i;
  const o = (i = Fu(e, t, !1)) != null ? i : n;
  return typeof o == 'number'
    ? (a) => (typeof a == 'string' ? a : o * a)
    : Array.isArray(o)
    ? (a) => (typeof a == 'string' ? a : o[a])
    : typeof o == 'function'
    ? o
    : () => {};
}
function Q1(e) {
  return us(e, 'spacing', 8);
}
function cs(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function CP(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = cs(t, n)), r), {});
}
function EP(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const i = kP(n),
    o = CP(i, r),
    a = e[n];
  return or(e, a, o);
}
function J1(e, t) {
  const n = Q1(e.theme);
  return Object.keys(e)
    .map((r) => EP(e, t, r, n))
    .reduce(Pa, {});
}
function Ue(e) {
  return J1(e, Ip);
}
Ue.propTypes = {};
Ue.filterProps = Ip;
function He(e) {
  return J1(e, Ap);
}
He.propTypes = {};
He.filterProps = Ap;
function PP(e = 8) {
  if (e.mui) return e;
  const t = Q1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const a = t(o);
          return typeof a == 'number' ? `${a}px` : a;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function Bu(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? Pa(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function an(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function pn(e, t) {
  return Ge({ prop: e, themeKey: 'borders', transform: t });
}
const _P = pn('border', an),
  RP = pn('borderTop', an),
  $P = pn('borderRight', an),
  OP = pn('borderBottom', an),
  zP = pn('borderLeft', an),
  TP = pn('borderColor'),
  NP = pn('borderTopColor'),
  LP = pn('borderRightColor'),
  jP = pn('borderBottomColor'),
  MP = pn('borderLeftColor'),
  IP = pn('outline', an),
  AP = pn('outlineColor'),
  Uu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = us(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: cs(t, r) });
      return or(e, e.borderRadius, n);
    }
    return null;
  };
Uu.propTypes = {};
Uu.filterProps = ['borderRadius'];
Bu(_P, RP, $P, OP, zP, TP, NP, LP, jP, MP, Uu, IP, AP);
const Hu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = us(e.theme, 'spacing', 8),
      n = (r) => ({ gap: cs(t, r) });
    return or(e, e.gap, n);
  }
  return null;
};
Hu.propTypes = {};
Hu.filterProps = ['gap'];
const Vu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = us(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: cs(t, r) });
    return or(e, e.columnGap, n);
  }
  return null;
};
Vu.propTypes = {};
Vu.filterProps = ['columnGap'];
const Wu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = us(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: cs(t, r) });
    return or(e, e.rowGap, n);
  }
  return null;
};
Wu.propTypes = {};
Wu.filterProps = ['rowGap'];
const DP = Ge({ prop: 'gridColumn' }),
  FP = Ge({ prop: 'gridRow' }),
  BP = Ge({ prop: 'gridAutoFlow' }),
  UP = Ge({ prop: 'gridAutoColumns' }),
  HP = Ge({ prop: 'gridAutoRows' }),
  VP = Ge({ prop: 'gridTemplateColumns' }),
  WP = Ge({ prop: 'gridTemplateRows' }),
  KP = Ge({ prop: 'gridTemplateAreas' }),
  XP = Ge({ prop: 'gridArea' });
Bu(Hu, Vu, Wu, DP, FP, BP, UP, HP, VP, WP, KP, XP);
function fo(e, t) {
  return t === 'grey' ? t : e;
}
const GP = Ge({ prop: 'color', themeKey: 'palette', transform: fo }),
  YP = Ge({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: fo,
  }),
  qP = Ge({ prop: 'backgroundColor', themeKey: 'palette', transform: fo });
Bu(GP, YP, qP);
function Vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const QP = Ge({ prop: 'width', transform: Vt }),
  Dp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, i;
        const o =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Mp[n];
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null
              ? void 0
              : i.unit) !== 'px'
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: Vt(n) };
      };
      return or(e, e.maxWidth, t);
    }
    return null;
  };
Dp.filterProps = ['maxWidth'];
const JP = Ge({ prop: 'minWidth', transform: Vt }),
  ZP = Ge({ prop: 'height', transform: Vt }),
  e_ = Ge({ prop: 'maxHeight', transform: Vt }),
  t_ = Ge({ prop: 'minHeight', transform: Vt });
Ge({ prop: 'size', cssProperty: 'width', transform: Vt });
Ge({ prop: 'size', cssProperty: 'height', transform: Vt });
const n_ = Ge({ prop: 'boxSizing' });
Bu(QP, Dp, JP, ZP, e_, t_, n_);
const fs = {
  border: { themeKey: 'borders', transform: an },
  borderTop: { themeKey: 'borders', transform: an },
  borderRight: { themeKey: 'borders', transform: an },
  borderBottom: { themeKey: 'borders', transform: an },
  borderLeft: { themeKey: 'borders', transform: an },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: an },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Uu },
  color: { themeKey: 'palette', transform: fo },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: fo,
  },
  backgroundColor: { themeKey: 'palette', transform: fo },
  p: { style: He },
  pt: { style: He },
  pr: { style: He },
  pb: { style: He },
  pl: { style: He },
  px: { style: He },
  py: { style: He },
  padding: { style: He },
  paddingTop: { style: He },
  paddingRight: { style: He },
  paddingBottom: { style: He },
  paddingLeft: { style: He },
  paddingX: { style: He },
  paddingY: { style: He },
  paddingInline: { style: He },
  paddingInlineStart: { style: He },
  paddingInlineEnd: { style: He },
  paddingBlock: { style: He },
  paddingBlockStart: { style: He },
  paddingBlockEnd: { style: He },
  m: { style: Ue },
  mt: { style: Ue },
  mr: { style: Ue },
  mb: { style: Ue },
  ml: { style: Ue },
  mx: { style: Ue },
  my: { style: Ue },
  margin: { style: Ue },
  marginTop: { style: Ue },
  marginRight: { style: Ue },
  marginBottom: { style: Ue },
  marginLeft: { style: Ue },
  marginX: { style: Ue },
  marginY: { style: Ue },
  marginInline: { style: Ue },
  marginInlineStart: { style: Ue },
  marginInlineEnd: { style: Ue },
  marginBlock: { style: Ue },
  marginBlockStart: { style: Ue },
  marginBlockEnd: { style: Ue },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ '@media print': { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Hu },
  rowGap: { style: Wu },
  columnGap: { style: Vu },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Vt },
  maxWidth: { style: Dp },
  minWidth: { transform: Vt },
  height: { transform: Vt },
  maxHeight: { transform: Vt },
  minHeight: { transform: Vt },
  boxSizing: {},
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function r_(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function i_(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Z1() {
  function e(n, r, i, o) {
    const a = { [n]: r, theme: i },
      s = o[n];
    if (!s) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: f, style: d } = s;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const c = Fu(i, u) || {};
    return d
      ? d(a)
      : or(a, r, (m) => {
          let h = Gl(c, f, m);
          return (
            m === h &&
              typeof m == 'string' &&
              (h = Gl(c, f, `${n}${m === 'default' ? '' : ge(m)}`, m)),
            l === !1 ? h : { [l]: h }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: i, theme: o = {} } = n || {};
    if (!i) return null;
    const a = (r = o.unstable_sxConfig) != null ? r : fs;
    function s(l) {
      let u = l;
      if (typeof l == 'function') u = l(o);
      else if (typeof l != 'object') return l;
      if (!u) return null;
      const f = yP(o.breakpoints),
        d = Object.keys(f);
      let c = f;
      return (
        Object.keys(u).forEach((y) => {
          const m = i_(u[y], o);
          if (m != null)
            if (typeof m == 'object')
              if (a[y]) c = Pa(c, e(y, m, o, a));
              else {
                const h = or({ theme: o }, m, (C) => ({ [y]: C }));
                r_(h, m) ? (c[y] = t({ sx: m, theme: o })) : (c = Pa(c, h));
              }
            else c = Pa(c, e(y, m, o, a));
        }),
        vP(d, c)
      );
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Ku = Z1();
Ku.filterProps = ['sx'];
function ex(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const o_ = ['breakpoints', 'palette', 'spacing', 'shape'];
function Fp(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    a = Xe(e, o_),
    s = q1(n),
    l = PP(i);
  let u = Hn(
    {
      breakpoints: s,
      direction: 'ltr',
      components: {},
      palette: D({ mode: 'light' }, r),
      spacing: l,
      shape: D({}, gP, o),
    },
    a
  );
  return (
    (u.applyStyles = ex),
    (u = t.reduce((f, d) => Hn(f, d), u)),
    (u.unstable_sxConfig = D({}, fs, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Ku({ sx: d, theme: this });
    }),
    u
  );
}
const a_ = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Fp,
      private_createBreakpoints: q1,
      unstable_applyStyles: ex,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function s_(e) {
  return Object.keys(e).length === 0;
}
function l_(e = null) {
  const t = w.useContext(Au);
  return !t || s_(t) ? e : t;
}
const u_ = Fp();
function tx(e = u_) {
  return l_(e);
}
const c_ = ['sx'],
  f_ = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : fs;
    return (
      Object.keys(e).forEach((o) => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o]);
      }),
      r
    );
  };
function d_(e) {
  const { sx: t } = e,
    n = Xe(e, c_),
    { systemProps: r, otherProps: i } = f_(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == 'function'
      ? (o = (...a) => {
          const s = t(...a);
          return Er(s) ? D({}, r, s) : r;
        })
      : (o = D({}, r, t)),
    D({}, i, { sx: o })
  );
}
const p_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ku,
        extendSxProp: d_,
        unstable_createStyleFunctionSx: Z1,
        unstable_defaultSxConfig: fs,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ag = (e) => e,
  h_ = () => {
    let e = Ag;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ag;
      },
    };
  },
  nx = h_();
function rx(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = rx(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function Te() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = rx(e)) && (r && (r += ' '), (r += t));
  return r;
}
const m_ = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function ur(e, t, n = 'Mui') {
  const r = m_[t];
  return r ? `${n}-${r}` : `${nx.generate(e)}-${t}`;
}
function cr(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = ur(e, i, n);
    }),
    r
  );
}
var ix = { exports: {} },
  ke = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp = Symbol.for('react.element'),
  Up = Symbol.for('react.portal'),
  Xu = Symbol.for('react.fragment'),
  Gu = Symbol.for('react.strict_mode'),
  Yu = Symbol.for('react.profiler'),
  qu = Symbol.for('react.provider'),
  Qu = Symbol.for('react.context'),
  g_ = Symbol.for('react.server_context'),
  Ju = Symbol.for('react.forward_ref'),
  Zu = Symbol.for('react.suspense'),
  ec = Symbol.for('react.suspense_list'),
  tc = Symbol.for('react.memo'),
  nc = Symbol.for('react.lazy'),
  y_ = Symbol.for('react.offscreen'),
  ox;
ox = Symbol.for('react.module.reference');
function hn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Bp:
        switch (((e = e.type), e)) {
          case Xu:
          case Yu:
          case Gu:
          case Zu:
          case ec:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case g_:
              case Qu:
              case Ju:
              case nc:
              case tc:
              case qu:
                return e;
              default:
                return t;
            }
        }
      case Up:
        return t;
    }
  }
}
ke.ContextConsumer = Qu;
ke.ContextProvider = qu;
ke.Element = Bp;
ke.ForwardRef = Ju;
ke.Fragment = Xu;
ke.Lazy = nc;
ke.Memo = tc;
ke.Portal = Up;
ke.Profiler = Yu;
ke.StrictMode = Gu;
ke.Suspense = Zu;
ke.SuspenseList = ec;
ke.isAsyncMode = function () {
  return !1;
};
ke.isConcurrentMode = function () {
  return !1;
};
ke.isContextConsumer = function (e) {
  return hn(e) === Qu;
};
ke.isContextProvider = function (e) {
  return hn(e) === qu;
};
ke.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Bp;
};
ke.isForwardRef = function (e) {
  return hn(e) === Ju;
};
ke.isFragment = function (e) {
  return hn(e) === Xu;
};
ke.isLazy = function (e) {
  return hn(e) === nc;
};
ke.isMemo = function (e) {
  return hn(e) === tc;
};
ke.isPortal = function (e) {
  return hn(e) === Up;
};
ke.isProfiler = function (e) {
  return hn(e) === Yu;
};
ke.isStrictMode = function (e) {
  return hn(e) === Gu;
};
ke.isSuspense = function (e) {
  return hn(e) === Zu;
};
ke.isSuspenseList = function (e) {
  return hn(e) === ec;
};
ke.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Xu ||
    e === Yu ||
    e === Gu ||
    e === Zu ||
    e === ec ||
    e === y_ ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === nc ||
        e.$$typeof === tc ||
        e.$$typeof === qu ||
        e.$$typeof === Qu ||
        e.$$typeof === Ju ||
        e.$$typeof === ox ||
        e.getModuleId !== void 0))
  );
};
ke.typeOf = hn;
ix.exports = ke;
var Dg = ix.exports;
const v_ = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ax(e) {
  const t = `${e}`.match(v_);
  return (t && t[1]) || '';
}
function sx(e, t = '') {
  return e.displayName || e.name || ax(e) || t;
}
function Fg(e, t, n) {
  const r = sx(t);
  return e.displayName || (r !== '' ? `${n}(${r})` : n);
}
function x_(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return sx(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Dg.ForwardRef:
          return Fg(e, e.render, 'ForwardRef');
        case Dg.Memo:
          return Fg(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const w_ = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: x_, getFunctionName: ax },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function Hp(e, t) {
  const n = D({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = D({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[r] || {},
          o = t[r];
        (n[r] = {}),
          !o || !Object.keys(o)
            ? (n[r] = i)
            : !i || !Object.keys(i)
            ? (n[r] = o)
            : ((n[r] = D({}, o)),
              Object.keys(i).forEach((a) => {
                n[r][a] = Hp(i[a], o[a]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function S_(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Hp(t.components[n].defaultProps, r);
}
function b_({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = tx(n);
  return r && (i = i[r] || i), S_({ theme: i, name: t, props: e });
}
const Vp = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function k_(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const C_ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: k_ }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function E_(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...i) {
            t.apply(this, i), n.apply(this, i);
          },
    () => {}
  );
}
function Wp(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), (n = setTimeout(o, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function P_(e, t) {
  return () => null;
}
function __(e, t) {
  var n, r;
  return (
    w.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function Kp(e) {
  return (e && e.ownerDocument) || document;
}
function Xp(e) {
  return Kp(e).defaultView || window;
}
function R_(e, t) {
  return () => null;
}
function lx(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
let Bg = 0;
function $_(e) {
  const [t, n] = w.useState(e),
    r = e || t;
  return (
    w.useEffect(() => {
      t == null && ((Bg += 1), n(`mui-${Bg}`));
    }, [t]),
    r
  );
}
const Ug = dl.useId;
function O_(e) {
  if (Ug !== void 0) {
    const t = Ug();
    return e ?? t;
  }
  return $_(e);
}
function z_(e, t, n, r, i) {
  return null;
}
function T_({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: i } = w.useRef(e !== void 0),
    [o, a] = w.useState(t),
    s = i ? e : o,
    l = w.useCallback((u) => {
      i || a(u);
    }, []);
  return [s, l];
}
function Rr(e) {
  const t = w.useRef(e);
  return (
    Vp(() => {
      t.current = e;
    }),
    w.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Yl(...e) {
  return w.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              lx(n, t);
            });
          },
    e
  );
}
const Hg = {};
function N_(e, t) {
  const n = w.useRef(Hg);
  return n.current === Hg && (n.current = e(t)), n;
}
const L_ = [];
function j_(e) {
  w.useEffect(e, L_);
}
class rc {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new rc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function M_() {
  const e = N_(rc.create).current;
  return j_(e.disposeEffect), e;
}
let ic = !0,
  fd = !1;
const I_ = new rc(),
  A_ = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    'datetime-local': !0,
  };
function D_(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && A_[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function F_(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ic = !0);
}
function Xc() {
  ic = !1;
}
function B_() {
  this.visibilityState === 'hidden' && fd && (ic = !0);
}
function U_(e) {
  e.addEventListener('keydown', F_, !0),
    e.addEventListener('mousedown', Xc, !0),
    e.addEventListener('pointerdown', Xc, !0),
    e.addEventListener('touchstart', Xc, !0),
    e.addEventListener('visibilitychange', B_, !0);
}
function H_(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return ic || D_(t);
}
function ux() {
  const e = w.useCallback((i) => {
      i != null && U_(i.ownerDocument);
    }, []),
    t = w.useRef(!1);
  function n() {
    return t.current
      ? ((fd = !0),
        I_.start(100, () => {
          fd = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(i) {
    return H_(i) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
let Fi;
function cx() {
  if (Fi) return Fi;
  const e = document.createElement('div'),
    t = document.createElement('div');
  return (
    (t.style.width = '10px'),
    (t.style.height = '1px'),
    e.appendChild(t),
    (e.dir = 'rtl'),
    (e.style.fontSize = '14px'),
    (e.style.width = '4px'),
    (e.style.height = '1px'),
    (e.style.position = 'absolute'),
    (e.style.top = '-1000px'),
    (e.style.overflow = 'scroll'),
    document.body.appendChild(e),
    (Fi = 'reverse'),
    e.scrollLeft > 0
      ? (Fi = 'default')
      : ((e.scrollLeft = 1), e.scrollLeft === 0 && (Fi = 'negative')),
    document.body.removeChild(e),
    Fi
  );
}
function V_(e, t) {
  const n = e.scrollLeft;
  if (t !== 'rtl') return n;
  switch (cx()) {
    case 'negative':
      return e.scrollWidth - e.clientWidth + n;
    case 'reverse':
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
function Vr(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((i) => {
      r[i] = e[i]
        .reduce((o, a) => {
          if (a) {
            const s = t(a);
            s !== '' && o.push(s), n && n[a] && o.push(n[a]);
          }
          return o;
        }, [])
        .join(' ');
    }),
    r
  );
}
const W_ = w.createContext(),
  fx = () => {
    const e = w.useContext(W_);
    return e ?? !1;
  };
function K_(e, t) {
  return D(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
var Ye = {},
  dx = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(dx);
var Wr = dx.exports;
const X_ = ar(u2),
  G_ = ar(C_);
var px = Wr;
Object.defineProperty(Ye, '__esModule', { value: !0 });
var ro = (Ye.alpha = yx);
Ye.blend = sR;
Ye.colorChannel = void 0;
var Y_ = (Ye.darken = Yp);
Ye.decomposeColor = dn;
Ye.emphasize = vx;
var q_ = (Ye.getContrastRatio = nR);
Ye.getLuminance = ql;
Ye.hexToRgb = hx;
Ye.hslToRgb = gx;
var Q_ = (Ye.lighten = qp);
Ye.private_safeAlpha = rR;
Ye.private_safeColorChannel = void 0;
Ye.private_safeDarken = iR;
Ye.private_safeEmphasize = aR;
Ye.private_safeLighten = oR;
Ye.recomposeColor = jo;
Ye.rgbToHex = tR;
var Vg = px(X_),
  J_ = px(G_);
function Gp(e, t = 0, n = 1) {
  return (0, J_.default)(e, t, n);
}
function hx(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, i) =>
            i < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  );
}
function Z_(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function dn(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return dn(hx(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error((0, Vg.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        i
      ) === -1)
    )
      throw new Error((0, Vg.default)(10, i));
  } else r = r.split(',');
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
const mx = (e) => {
  const t = dn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ');
};
Ye.colorChannel = mx;
const eR = (e, t) => {
  try {
    return mx(e);
  } catch {
    return e;
  }
};
Ye.private_safeColorChannel = eR;
function jo(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function tR(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = dn(e);
  return `#${t.map((n, r) => Z_(r === 3 ? Math.round(255 * n) : n)).join('')}`;
}
function gx(e) {
  e = dn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    a = (u, f = (u + n / 30) % 12) =>
      i - o * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = 'rgb';
  const l = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((s += 'a'), l.push(t[3])), jo({ type: s, values: l })
  );
}
function ql(e) {
  e = dn(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? dn(gx(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function nR(e, t) {
  const n = ql(e),
    r = ql(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function yx(e, t) {
  return (
    (e = dn(e)),
    (t = Gp(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    jo(e)
  );
}
function rR(e, t, n) {
  try {
    return yx(e, t);
  } catch {
    return e;
  }
}
function Yp(e, t) {
  if (((e = dn(e)), (t = Gp(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return jo(e);
}
function iR(e, t, n) {
  try {
    return Yp(e, t);
  } catch {
    return e;
  }
}
function qp(e, t) {
  if (((e = dn(e)), (t = Gp(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return jo(e);
}
function oR(e, t, n) {
  try {
    return qp(e, t);
  } catch {
    return e;
  }
}
function vx(e, t = 0.15) {
  return ql(e) > 0.5 ? Yp(e, t) : qp(e, t);
}
function aR(e, t, n) {
  try {
    return vx(e, t);
  } catch {
    return e;
  }
}
function sR(e, t, n, r = 1) {
  const i = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    o = dn(e),
    a = dn(t),
    s = [
      i(o.values[0], a.values[0]),
      i(o.values[1], a.values[1]),
      i(o.values[2], a.values[2]),
    ];
  return jo({ type: 'rgb', values: s });
}
const lR = ['mode', 'contrastThreshold', 'tonalOffset'],
  Wg = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: qa.white, default: qa.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Gc = {
    text: {
      primary: qa.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: qa.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Kg(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = Q_(e.main, i))
      : t === 'dark' && (e.dark = Y_(e.main, o)));
}
function uR(e = 'light') {
  return e === 'dark'
    ? { main: Ii[200], light: Ii[50], dark: Ii[400] }
    : { main: Ii[700], light: Ii[400], dark: Ii[800] };
}
function cR(e = 'light') {
  return e === 'dark'
    ? { main: Mi[200], light: Mi[50], dark: Mi[400] }
    : { main: Mi[500], light: Mi[300], dark: Mi[700] };
}
function fR(e = 'light') {
  return e === 'dark'
    ? { main: ji[500], light: ji[300], dark: ji[700] }
    : { main: ji[700], light: ji[400], dark: ji[800] };
}
function dR(e = 'light') {
  return e === 'dark'
    ? { main: Ai[400], light: Ai[300], dark: Ai[700] }
    : { main: Ai[700], light: Ai[500], dark: Ai[900] };
}
function pR(e = 'light') {
  return e === 'dark'
    ? { main: Di[400], light: Di[300], dark: Di[700] }
    : { main: Di[800], light: Di[500], dark: Di[900] };
}
function hR(e = 'light') {
  return e === 'dark'
    ? { main: na[400], light: na[300], dark: na[700] }
    : { main: '#ed6c02', light: na[500], dark: na[900] };
}
function mR(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    i = Xe(e, lR),
    o = e.primary || uR(t),
    a = e.secondary || cR(t),
    s = e.error || fR(t),
    l = e.info || dR(t),
    u = e.success || pR(t),
    f = e.warning || hR(t);
  function d(h) {
    return q_(h, Gc.text.primary) >= n ? Gc.text.primary : Wg.text.primary;
  }
  const c = ({
      color: h,
      name: C,
      mainShade: g = 500,
      lightShade: p = 300,
      darkShade: x = 700,
    }) => {
      if (
        ((h = D({}, h)),
        !h.main && h[g] && (h.main = h[g]),
        !h.hasOwnProperty('main'))
      )
        throw new Error(Qa(11, C ? ` (${C})` : '', g));
      if (typeof h.main != 'string')
        throw new Error(Qa(12, C ? ` (${C})` : '', JSON.stringify(h.main)));
      return (
        Kg(h, 'light', p, r),
        Kg(h, 'dark', x, r),
        h.contrastText || (h.contrastText = d(h.main)),
        h
      );
    },
    y = { dark: Gc, light: Wg };
  return Hn(
    D(
      {
        common: D({}, qa),
        mode: t,
        primary: c({ color: o, name: 'primary' }),
        secondary: c({
          color: a,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: c({ color: s, name: 'error' }),
        warning: c({ color: f, name: 'warning' }),
        info: c({ color: l, name: 'info' }),
        success: c({ color: u, name: 'success' }),
        grey: l2,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: c,
        tonalOffset: r,
      },
      y[t]
    ),
    i
  );
}
const gR = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function yR(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xg = { textTransform: 'uppercase' },
  Gg = '"Roboto", "Helvetica", "Arial", sans-serif';
function vR(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Gg,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: f,
      pxToRem: d,
    } = n,
    c = Xe(n, gR),
    y = i / 14,
    m = d || ((g) => `${(g / u) * y}rem`),
    h = (g, p, x, S, E) =>
      D(
        { fontFamily: r, fontWeight: g, fontSize: m(p), lineHeight: x },
        r === Gg ? { letterSpacing: `${yR(S / p)}em` } : {},
        E,
        f
      ),
    C = {
      h1: h(o, 96, 1.167, -1.5),
      h2: h(o, 60, 1.2, -0.5),
      h3: h(a, 48, 1.167, 0),
      h4: h(a, 34, 1.235, 0.25),
      h5: h(a, 24, 1.334, 0),
      h6: h(s, 20, 1.6, 0.15),
      subtitle1: h(a, 16, 1.75, 0.15),
      subtitle2: h(s, 14, 1.57, 0.1),
      body1: h(a, 16, 1.5, 0.15),
      body2: h(a, 14, 1.43, 0.15),
      button: h(s, 14, 1.75, 0.4, Xg),
      caption: h(a, 12, 1.66, 0.4),
      overline: h(a, 12, 2.66, 1, Xg),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Hn(
    D(
      {
        htmlFontSize: u,
        pxToRem: m,
        fontFamily: r,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: l,
      },
      C
    ),
    c,
    { clone: !1 }
  );
}
const xR = 0.2,
  wR = 0.14,
  SR = 0.12;
function Le(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${xR})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wR})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${SR})`,
  ].join(',');
}
const bR = [
    'none',
    Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  kR = ['duration', 'easing', 'delay'],
  CR = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  ER = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Yg(e) {
  return `${Math.round(e)}ms`;
}
function PR(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function _R(e) {
  const t = D({}, CR, e.easing),
    n = D({}, ER, e.duration);
  return D(
    {
      getAutoHeightDuration: PR,
      create: (i = ['all'], o = {}) => {
        const {
          duration: a = n.standard,
          easing: s = t.easeInOut,
          delay: l = 0,
        } = o;
        return (
          Xe(o, kR),
          (Array.isArray(i) ? i : [i])
            .map(
              (u) =>
                `${u} ${typeof a == 'string' ? a : Yg(a)} ${s} ${
                  typeof l == 'string' ? l : Yg(l)
                }`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const RR = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  $R = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function OR(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    a = Xe(e, $R);
  if (e.vars) throw new Error(Qa(18));
  const s = mR(r),
    l = Fp(e);
  let u = Hn(l, {
    mixins: K_(l.breakpoints, n),
    palette: s,
    shadows: bR.slice(),
    typography: vR(s, o),
    transitions: _R(i),
    zIndex: D({}, RR),
  });
  return (
    (u = Hn(u, a)),
    (u = t.reduce((f, d) => Hn(f, d), u)),
    (u.unstable_sxConfig = D({}, fs, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Ku({ sx: d, theme: this });
    }),
    u
  );
}
const Qp = OR();
function zR() {
  const e = tx(Qp);
  return e[Rp] || e;
}
function fr({ props: e, name: t }) {
  return b_({ props: e, name: t, defaultTheme: Qp, themeId: Rp });
}
var ds = {},
  Yc = { exports: {} },
  qg;
function TR() {
  return (
    qg ||
      ((qg = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var i = {};
          for (var o in n)
            if ({}.hasOwnProperty.call(n, o)) {
              if (r.indexOf(o) >= 0) continue;
              i[o] = n[o];
            }
          return i;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Yc)),
    Yc.exports
  );
}
const NR = ar(dP),
  LR = ar(pP),
  jR = ar(xP),
  MR = ar(w_),
  IR = ar(a_),
  AR = ar(p_);
var Mo = Wr;
Object.defineProperty(ds, '__esModule', { value: !0 });
var DR = (ds.default = JR);
ds.shouldForwardProp = ul;
ds.systemDefaultTheme = void 0;
var tn = Mo(G1()),
  dd = Mo(TR()),
  Qg = KR(NR),
  FR = LR;
Mo(jR);
Mo(MR);
var BR = Mo(IR),
  UR = Mo(AR);
const HR = ['ownerState'],
  VR = ['variants'],
  WR = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function xx(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (xx = function (r) {
    return r ? n : t;
  })(e);
}
function KR(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var n = xx(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function XR(e) {
  return Object.keys(e).length === 0;
}
function GR(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function ul(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const YR = (ds.systemDefaultTheme = (0, BR.default)()),
  qR = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ds({ defaultTheme: e, theme: t, themeId: n }) {
  return XR(t) ? e : t[n] || t;
}
function QR(e) {
  return e ? (t, n) => n[e] : null;
}
function cl(e, t) {
  let { ownerState: n } = t,
    r = (0, dd.default)(t, HR);
  const i =
    typeof e == 'function' ? e((0, tn.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((o) => cl(o, (0, tn.default)({ ownerState: n }, r)));
  if (i && typeof i == 'object' && Array.isArray(i.variants)) {
    const { variants: o = [] } = i;
    let s = (0, dd.default)(i, VR);
    return (
      o.forEach((l) => {
        let u = !0;
        typeof l.props == 'function'
          ? (u = l.props((0, tn.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((f) => {
              (n == null ? void 0 : n[f]) !== l.props[f] &&
                r[f] !== l.props[f] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof l.style == 'function'
                ? l.style((0, tn.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      s
    );
  }
  return i;
}
function JR(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = YR,
      rootShouldForwardProp: r = ul,
      slotShouldForwardProp: i = ul,
    } = e,
    o = (a) =>
      (0, UR.default)(
        (0, tn.default)({}, a, {
          theme: Ds((0, tn.default)({}, a, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (o.__mui_systemSx = !0),
    (a, s = {}) => {
      (0, Qg.internal_processStyles)(a, (E) =>
        E.filter((v) => !(v != null && v.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: f,
          skipSx: d,
          overridesResolver: c = QR(qR(u)),
        } = s,
        y = (0, dd.default)(s, WR),
        m = f !== void 0 ? f : (u && u !== 'Root' && u !== 'root') || !1,
        h = d || !1;
      let C,
        g = ul;
      u === 'Root' || u === 'root'
        ? (g = r)
        : u
        ? (g = i)
        : GR(a) && (g = void 0);
      const p = (0, Qg.default)(
          a,
          (0, tn.default)({ shouldForwardProp: g, label: C }, y)
        ),
        x = (E) =>
          (typeof E == 'function' && E.__emotion_real !== E) ||
          (0, FR.isPlainObject)(E)
            ? (v) =>
                cl(
                  E,
                  (0, tn.default)({}, v, {
                    theme: Ds({ theme: v.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : E,
        S = (E, ...v) => {
          let b = x(E);
          const N = v ? v.map(x) : [];
          l &&
            c &&
            N.push((H) => {
              const G = Ds(
                (0, tn.default)({}, H, { defaultTheme: n, themeId: t })
              );
              if (
                !G.components ||
                !G.components[l] ||
                !G.components[l].styleOverrides
              )
                return null;
              const Y = G.components[l].styleOverrides,
                K = {};
              return (
                Object.entries(Y).forEach(([R, z]) => {
                  K[R] = cl(z, (0, tn.default)({}, H, { theme: G }));
                }),
                c(H, K)
              );
            }),
            l &&
              !m &&
              N.push((H) => {
                var G;
                const Y = Ds(
                    (0, tn.default)({}, H, { defaultTheme: n, themeId: t })
                  ),
                  K =
                    Y == null ||
                    (G = Y.components) == null ||
                    (G = G[l]) == null
                      ? void 0
                      : G.variants;
                return cl(
                  { variants: K },
                  (0, tn.default)({}, H, { theme: Y })
                );
              }),
            h || N.push(o);
          const L = N.length - v.length;
          if (Array.isArray(E) && L > 0) {
            const H = new Array(L).fill('');
            (b = [...E, ...H]), (b.raw = [...E.raw, ...H]);
          }
          const A = p(b, ...N);
          return a.muiName && (A.muiName = a.muiName), A;
        };
      return p.withConfig && (S.withConfig = p.withConfig), S;
    }
  );
}
function ZR(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const wx = (e) => ZR(e) && e !== 'classes',
  tt = DR({ themeId: Rp, defaultTheme: Qp, rootShouldForwardProp: wx });
function e$(e) {
  return ur('MuiSvgIcon', e);
}
cr('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const t$ = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox',
  ],
  n$ = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      i = {
        root: ['root', t !== 'inherit' && `color${ge(t)}`, `fontSize${ge(n)}`],
      };
    return Vr(i, e$, r);
  },
  r$ = tt('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'inherit' && t[`color${ge(n.color)}`],
        t[`fontSize${ge(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, i, o, a, s, l, u, f, d, c, y, m;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: t.hasSvgAsChild ? void 0 : 'currentColor',
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, 'fill', {
              duration:
                (i = e.transitions) == null || (i = i.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((o = e.typography) == null || (a = o.pxToRem) == null
            ? void 0
            : a.call(o, 20)) || '1.25rem',
        medium:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 24)) || '1.5rem',
        large:
          ((u = e.typography) == null || (f = u.pxToRem) == null
            ? void 0
            : f.call(u, 35)) || '2.1875rem',
      }[t.fontSize],
      color:
        (d =
          (c = (e.vars || e).palette) == null || (c = c[t.color]) == null
            ? void 0
            : c.main) != null
          ? d
          : {
              action:
                (y = (e.vars || e).palette) == null || (y = y.action) == null
                  ? void 0
                  : y.active,
              disabled:
                (m = (e.vars || e).palette) == null || (m = m.action) == null
                  ? void 0
                  : m.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  pd = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiSvgIcon' }),
      {
        children: i,
        className: o,
        color: a = 'inherit',
        component: s = 'svg',
        fontSize: l = 'medium',
        htmlColor: u,
        inheritViewBox: f = !1,
        titleAccess: d,
        viewBox: c = '0 0 24 24',
      } = r,
      y = Xe(r, t$),
      m = w.isValidElement(i) && i.type === 'svg',
      h = D({}, r, {
        color: a,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: f,
        viewBox: c,
        hasSvgAsChild: m,
      }),
      C = {};
    f || (C.viewBox = c);
    const g = n$(h);
    return _.jsxs(
      r$,
      D(
        {
          as: s,
          className: Te(g.root, o),
          focusable: 'false',
          color: u,
          'aria-hidden': d ? void 0 : !0,
          role: d ? 'img' : void 0,
          ref: n,
        },
        C,
        y,
        m && i.props,
        {
          ownerState: h,
          children: [
            m ? i.props.children : i,
            d ? _.jsx('title', { children: d }) : null,
          ],
        }
      )
    );
  });
pd.muiName = 'SvgIcon';
function Jp(e, t) {
  function n(r, i) {
    return _.jsx(
      pd,
      D({ 'data-testid': `${t}Icon`, ref: i }, r, { children: e })
    );
  }
  return (n.muiName = pd.muiName), w.memo(w.forwardRef(n));
}
const i$ = {
    configure: (e) => {
      nx.configure(e);
    },
  },
  o$ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: ge,
        createChainedFunction: E_,
        createSvgIcon: Jp,
        debounce: Wp,
        deprecatedPropType: P_,
        isMuiElement: __,
        ownerDocument: Kp,
        ownerWindow: Xp,
        requirePropFactory: R_,
        setRef: lx,
        unstable_ClassNameGenerator: i$,
        unstable_useEnhancedEffect: Vp,
        unstable_useId: O_,
        unsupportedProp: z_,
        useControlled: T_,
        useEventCallback: Rr,
        useForkRef: Yl,
        useIsFocusVisible: ux,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function hd(e, t) {
  return (
    (hd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    hd(e, t)
  );
}
function Zp(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    hd(e, t);
}
function a$(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' '
      ) !== -1;
}
function s$(e, t) {
  e.classList
    ? e.classList.add(t)
    : a$(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t
          ));
}
function Jg(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function l$(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
    ? (e.className = Jg(e.className, t))
    : e.setAttribute(
        'class',
        Jg((e.className && e.className.baseVal) || '', t)
      );
}
const Zg = { disabled: !1 },
  Ql = ht.createContext(null);
var Sx = function (t) {
    return t.scrollTop;
  },
  da = 'unmounted',
  Qr = 'exited',
  Jr = 'entering',
  Ui = 'entered',
  md = 'exiting',
  dr = (function (e) {
    Zp(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var a = i,
        s = a && !a.isMounting ? r.enter : r.appear,
        l;
      return (
        (o.appearStatus = null),
        r.in
          ? s
            ? ((l = Qr), (o.appearStatus = Jr))
            : (l = Ui)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = da)
          : (l = Qr),
        (o.state = { status: l }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var a = i.in;
      return a && o.status === da ? { status: Qr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== Jr && a !== Ui && (o = Jr)
            : (a === Jr || a === Ui) && (o = md);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          a,
          s;
        return (
          (o = a = s = i),
          i != null &&
            typeof i != 'number' &&
            ((o = i.exit),
            (a = i.enter),
            (s = i.appear !== void 0 ? i.appear : a)),
          { exit: o, enter: a, appear: s }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === Jr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : ua.findDOMNode(this);
              a && Sx(a);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Qr &&
            this.setState({ status: da });
      }),
      (n.performEnter = function (i) {
        var o = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : i,
          l = this.props.nodeRef ? [s] : [ua.findDOMNode(this), s],
          u = l[0],
          f = l[1],
          d = this.getTimeouts(),
          c = s ? d.appear : d.enter;
        if ((!i && !a) || Zg.disabled) {
          this.safeSetState({ status: Ui }, function () {
            o.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, f),
          this.safeSetState({ status: Jr }, function () {
            o.props.onEntering(u, f),
              o.onTransitionEnd(c, function () {
                o.safeSetState({ status: Ui }, function () {
                  o.props.onEntered(u, f);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : ua.findDOMNode(this);
        if (!o || Zg.disabled) {
          this.safeSetState({ status: Qr }, function () {
            i.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: md }, function () {
            i.props.onExiting(s),
              i.onTransitionEnd(a.exit, function () {
                i.safeSetState({ status: Qr }, function () {
                  i.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        (o = this.setNextCallback(o)), this.setState(i, o);
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (o.nextCallback = null), i(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : ua.findDOMNode(this),
          s = i == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = l[0],
            f = l[1];
          this.props.addEndListener(u, f);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === da) return null;
        var o = this.props,
          a = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var s = Xe(o, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return ht.createElement(
          Ql.Provider,
          { value: null },
          typeof a == 'function'
            ? a(i, s)
            : ht.cloneElement(ht.Children.only(a), s)
        );
      }),
      t
    );
  })(ht.Component);
dr.contextType = Ql;
dr.propTypes = {};
function Bi() {}
dr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Bi,
  onEntering: Bi,
  onEntered: Bi,
  onExit: Bi,
  onExiting: Bi,
  onExited: Bi,
};
dr.UNMOUNTED = da;
dr.EXITED = Qr;
dr.ENTERING = Jr;
dr.ENTERED = Ui;
dr.EXITING = md;
var u$ = function (t, n) {
    return (
      t &&
      n &&
      n.split(' ').forEach(function (r) {
        return s$(t, r);
      })
    );
  },
  qc = function (t, n) {
    return (
      t &&
      n &&
      n.split(' ').forEach(function (r) {
        return l$(t, r);
      })
    );
  },
  eh = (function (e) {
    Zp(t, e);
    function t() {
      for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return (
        (r = e.call.apply(e, [this].concat(o)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (s, l) {
          var u = r.resolveArguments(s, l),
            f = u[0],
            d = u[1];
          r.removeClasses(f, 'exit'),
            r.addClass(f, d ? 'appear' : 'enter', 'base'),
            r.props.onEnter && r.props.onEnter(s, l);
        }),
        (r.onEntering = function (s, l) {
          var u = r.resolveArguments(s, l),
            f = u[0],
            d = u[1],
            c = d ? 'appear' : 'enter';
          r.addClass(f, c, 'active'),
            r.props.onEntering && r.props.onEntering(s, l);
        }),
        (r.onEntered = function (s, l) {
          var u = r.resolveArguments(s, l),
            f = u[0],
            d = u[1],
            c = d ? 'appear' : 'enter';
          r.removeClasses(f, c),
            r.addClass(f, c, 'done'),
            r.props.onEntered && r.props.onEntered(s, l);
        }),
        (r.onExit = function (s) {
          var l = r.resolveArguments(s),
            u = l[0];
          r.removeClasses(u, 'appear'),
            r.removeClasses(u, 'enter'),
            r.addClass(u, 'exit', 'base'),
            r.props.onExit && r.props.onExit(s);
        }),
        (r.onExiting = function (s) {
          var l = r.resolveArguments(s),
            u = l[0];
          r.addClass(u, 'exit', 'active'),
            r.props.onExiting && r.props.onExiting(s);
        }),
        (r.onExited = function (s) {
          var l = r.resolveArguments(s),
            u = l[0];
          r.removeClasses(u, 'exit'),
            r.addClass(u, 'exit', 'done'),
            r.props.onExited && r.props.onExited(s);
        }),
        (r.resolveArguments = function (s, l) {
          return r.props.nodeRef ? [r.props.nodeRef.current, s] : [s, l];
        }),
        (r.getClassNames = function (s) {
          var l = r.props.classNames,
            u = typeof l == 'string',
            f = u && l ? l + '-' : '',
            d = u ? '' + f + s : l[s],
            c = u ? d + '-active' : l[s + 'Active'],
            y = u ? d + '-done' : l[s + 'Done'];
          return { baseClassName: d, activeClassName: c, doneClassName: y };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (i, o, a) {
        var s = this.getClassNames(o)[a + 'ClassName'],
          l = this.getClassNames('enter'),
          u = l.doneClassName;
        o === 'appear' && a === 'done' && u && (s += ' ' + u),
          a === 'active' && i && Sx(i),
          s && ((this.appliedClasses[o][a] = s), u$(i, s));
      }),
      (n.removeClasses = function (i, o) {
        var a = this.appliedClasses[o],
          s = a.base,
          l = a.active,
          u = a.done;
        (this.appliedClasses[o] = {}),
          s && qc(i, s),
          l && qc(i, l),
          u && qc(i, u);
      }),
      (n.render = function () {
        var i = this.props;
        i.classNames;
        var o = Xe(i, ['classNames']);
        return ht.createElement(
          dr,
          D({}, o, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        );
      }),
      t
    );
  })(ht.Component);
eh.defaultProps = { classNames: '' };
eh.propTypes = {};
function c$(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function th(e, t) {
  var n = function (o) {
      return t && w.isValidElement(o) ? t(o) : o;
    },
    r = Object.create(null);
  return (
    e &&
      w.Children.map(e, function (i) {
        return i;
      }).forEach(function (i) {
        r[i.key] = n(i);
      }),
    r
  );
}
function f$(e, t) {
  (e = e || {}), (t = t || {});
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var r = Object.create(null),
    i = [];
  for (var o in e) o in t ? i.length && ((r[o] = i), (i = [])) : i.push(o);
  var a,
    s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var u = r[l][a];
        s[r[l][a]] = n(u);
      }
    s[l] = n(l);
  }
  for (a = 0; a < i.length; a++) s[i[a]] = n(i[a]);
  return s;
}
function ai(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function d$(e, t) {
  return th(e.children, function (n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ai(n, 'appear', e),
      enter: ai(n, 'enter', e),
      exit: ai(n, 'exit', e),
    });
  });
}
function p$(e, t, n) {
  var r = th(e.children),
    i = f$(t, r);
  return (
    Object.keys(i).forEach(function (o) {
      var a = i[o];
      if (w.isValidElement(a)) {
        var s = o in t,
          l = o in r,
          u = t[o],
          f = w.isValidElement(u) && !u.props.in;
        l && (!s || f)
          ? (i[o] = w.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: ai(a, 'exit', e),
              enter: ai(a, 'enter', e),
            }))
          : !l && s && !f
          ? (i[o] = w.cloneElement(a, { in: !1 }))
          : l &&
            s &&
            w.isValidElement(u) &&
            (i[o] = w.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: ai(a, 'exit', e),
              enter: ai(a, 'enter', e),
            }));
      }
    }),
    i
  );
}
var h$ =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  m$ = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  oc = (function (e) {
    Zp(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var a = o.handleExited.bind(c$(o));
      return (
        (o.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (i, o) {
        var a = o.children,
          s = o.handleExited,
          l = o.firstRender;
        return { children: l ? d$(i, s) : p$(i, a, s), firstRender: !1 };
      }),
      (n.handleExited = function (i, o) {
        var a = th(this.props.children);
        i.key in a ||
          (i.props.onExited && i.props.onExited(o),
          this.mounted &&
            this.setState(function (s) {
              var l = D({}, s.children);
              return delete l[i.key], { children: l };
            }));
      }),
      (n.render = function () {
        var i = this.props,
          o = i.component,
          a = i.childFactory,
          s = Xe(i, ['component', 'childFactory']),
          l = this.state.contextValue,
          u = h$(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          o === null
            ? ht.createElement(Ql.Provider, { value: l }, u)
            : ht.createElement(
                Ql.Provider,
                { value: l },
                ht.createElement(o, s, u)
              )
        );
      }),
      t
    );
  })(ht.Component);
oc.propTypes = {};
oc.defaultProps = m$;
function g$(e) {
  return typeof e == 'string';
}
function y$(e, t, n) {
  return e === void 0 || g$(e)
    ? t
    : D({}, t, { ownerState: D({}, t.ownerState, n) });
}
function v$(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function x$(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e;
}
function e0(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function w$(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const y = Te(
        n == null ? void 0 : n.className,
        o,
        i == null ? void 0 : i.className,
        r == null ? void 0 : r.className
      ),
      m = D(
        {},
        n == null ? void 0 : n.style,
        i == null ? void 0 : i.style,
        r == null ? void 0 : r.style
      ),
      h = D({}, n, i, r);
    return (
      y.length > 0 && (h.className = y),
      Object.keys(m).length > 0 && (h.style = m),
      { props: h, internalRef: void 0 }
    );
  }
  const a = v$(D({}, i, r)),
    s = e0(r),
    l = e0(i),
    u = t(a),
    f = Te(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      o,
      i == null ? void 0 : i.className,
      r == null ? void 0 : r.className
    ),
    d = D(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      i == null ? void 0 : i.style,
      r == null ? void 0 : r.style
    ),
    c = D({}, u, n, l, s);
  return (
    f.length > 0 && (c.className = f),
    Object.keys(d).length > 0 && (c.style = d),
    { props: c, internalRef: u.ref }
  );
}
const S$ = [
  'elementType',
  'externalSlotProps',
  'ownerState',
  'skipResolvingSlotProps',
];
function Jl(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: i,
      skipResolvingSlotProps: o = !1,
    } = e,
    a = Xe(e, S$),
    s = o ? {} : x$(r, i),
    { props: l, internalRef: u } = w$(D({}, a, { externalSlotProps: s })),
    f = Yl(
      u,
      s == null ? void 0 : s.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return y$(n, D({}, l, { ref: f }), i);
}
function b$(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: i,
      rippleY: o,
      rippleSize: a,
      in: s,
      onExited: l,
      timeout: u,
    } = e,
    [f, d] = w.useState(!1),
    c = Te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: a, height: a, top: -(a / 2) + o, left: -(a / 2) + i },
    m = Te(n.child, f && n.childLeaving, r && n.childPulsate);
  return (
    !s && !f && d(!0),
    w.useEffect(() => {
      if (!s && l != null) {
        const h = setTimeout(l, u);
        return () => {
          clearTimeout(h);
        };
      }
    }, [l, s, u]),
    _.jsx('span', {
      className: c,
      style: y,
      children: _.jsx('span', { className: m }),
    })
  );
}
const nn = cr('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  k$ = ['center', 'classes', 'className'];
let ac = (e) => e,
  t0,
  n0,
  r0,
  i0;
const gd = 550,
  C$ = 80,
  E$ = Lo(
    t0 ||
      (t0 = ac`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  P$ = Lo(
    n0 ||
      (n0 = ac`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  _$ = Lo(
    r0 ||
      (r0 = ac`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  R$ = tt('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  $$ = tt(b$, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    i0 ||
      (i0 = ac`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    nn.rippleVisible,
    E$,
    gd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    nn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    nn.child,
    nn.childLeaving,
    P$,
    gd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    nn.childPulsate,
    _$,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  O$ = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiTouchRipple' }),
      { center: i = !1, classes: o = {}, className: a } = r,
      s = Xe(r, k$),
      [l, u] = w.useState([]),
      f = w.useRef(0),
      d = w.useRef(null);
    w.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const c = w.useRef(!1),
      y = M_(),
      m = w.useRef(null),
      h = w.useRef(null),
      C = w.useCallback(
        (S) => {
          const {
            pulsate: E,
            rippleX: v,
            rippleY: b,
            rippleSize: N,
            cb: L,
          } = S;
          u((A) => [
            ...A,
            _.jsx(
              $$,
              {
                classes: {
                  ripple: Te(o.ripple, nn.ripple),
                  rippleVisible: Te(o.rippleVisible, nn.rippleVisible),
                  ripplePulsate: Te(o.ripplePulsate, nn.ripplePulsate),
                  child: Te(o.child, nn.child),
                  childLeaving: Te(o.childLeaving, nn.childLeaving),
                  childPulsate: Te(o.childPulsate, nn.childPulsate),
                },
                timeout: gd,
                pulsate: E,
                rippleX: v,
                rippleY: b,
                rippleSize: N,
              },
              f.current
            ),
          ]),
            (f.current += 1),
            (d.current = L);
        },
        [o]
      ),
      g = w.useCallback(
        (S = {}, E = {}, v = () => {}) => {
          const {
            pulsate: b = !1,
            center: N = i || E.pulsate,
            fakeElement: L = !1,
          } = E;
          if ((S == null ? void 0 : S.type) === 'mousedown' && c.current) {
            c.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === 'touchstart' && (c.current = !0);
          const A = L ? null : h.current,
            H = A
              ? A.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let G, Y, K;
          if (
            N ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (G = Math.round(H.width / 2)), (Y = Math.round(H.height / 2));
          else {
            const { clientX: R, clientY: z } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (G = Math.round(R - H.left)), (Y = Math.round(z - H.top));
          }
          if (N)
            (K = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3)),
              K % 2 === 0 && (K += 1);
          else {
            const R =
                Math.max(Math.abs((A ? A.clientWidth : 0) - G), G) * 2 + 2,
              z = Math.max(Math.abs((A ? A.clientHeight : 0) - Y), Y) * 2 + 2;
            K = Math.sqrt(R ** 2 + z ** 2);
          }
          S != null && S.touches
            ? m.current === null &&
              ((m.current = () => {
                C({ pulsate: b, rippleX: G, rippleY: Y, rippleSize: K, cb: v });
              }),
              y.start(C$, () => {
                m.current && (m.current(), (m.current = null));
              }))
            : C({ pulsate: b, rippleX: G, rippleY: Y, rippleSize: K, cb: v });
        },
        [i, C, y]
      ),
      p = w.useCallback(() => {
        g({}, { pulsate: !0 });
      }, [g]),
      x = w.useCallback(
        (S, E) => {
          if (
            (y.clear(),
            (S == null ? void 0 : S.type) === 'touchend' && m.current)
          ) {
            m.current(),
              (m.current = null),
              y.start(0, () => {
                x(S, E);
              });
            return;
          }
          (m.current = null),
            u((v) => (v.length > 0 ? v.slice(1) : v)),
            (d.current = E);
        },
        [y]
      );
    return (
      w.useImperativeHandle(n, () => ({ pulsate: p, start: g, stop: x }), [
        p,
        g,
        x,
      ]),
      _.jsx(
        R$,
        D({ className: Te(nn.root, o.root, a), ref: h }, s, {
          children: _.jsx(oc, { component: null, exit: !0, children: l }),
        })
      )
    );
  });
function z$(e) {
  return ur('MuiButtonBase', e);
}
const T$ = cr('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  N$ = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  L$ = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: i,
      } = e,
      a = Vr({ root: ['root', t && 'disabled', n && 'focusVisible'] }, z$, i);
    return n && r && (a.root += ` ${r}`), a;
  },
  j$ = tt('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${T$.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  sc = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiButtonBase' }),
      {
        action: i,
        centerRipple: o = !1,
        children: a,
        className: s,
        component: l = 'button',
        disabled: u = !1,
        disableRipple: f = !1,
        disableTouchRipple: d = !1,
        focusRipple: c = !1,
        LinkComponent: y = 'a',
        onBlur: m,
        onClick: h,
        onContextMenu: C,
        onDragLeave: g,
        onFocus: p,
        onFocusVisible: x,
        onKeyDown: S,
        onKeyUp: E,
        onMouseDown: v,
        onMouseLeave: b,
        onMouseUp: N,
        onTouchEnd: L,
        onTouchMove: A,
        onTouchStart: H,
        tabIndex: G = 0,
        TouchRippleProps: Y,
        touchRippleRef: K,
        type: R,
      } = r,
      z = Xe(r, N$),
      F = w.useRef(null),
      O = w.useRef(null),
      M = Yl(O, K),
      { isFocusVisibleRef: j, onFocus: q, onBlur: re, ref: ye } = ux(),
      [se, Me] = w.useState(!1);
    u && se && Me(!1),
      w.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            Me(!0), F.current.focus();
          },
        }),
        []
      );
    const [ce, yt] = w.useState(!1);
    w.useEffect(() => {
      yt(!0);
    }, []);
    const Rt = ce && !f && !u;
    w.useEffect(() => {
      se && c && !f && ce && O.current.pulsate();
    }, [f, c, se, ce]);
    function We(Q, hr, yn = d) {
      return Rr(
        (Ei) => (hr && hr(Ei), !yn && O.current && O.current[Q](Ei), !0)
      );
    }
    const Rn = We('start', v),
      $n = We('stop', C),
      we = We('stop', g),
      On = We('stop', N),
      Kr = We('stop', (Q) => {
        se && Q.preventDefault(), b && b(Q);
      }),
      Ao = We('start', H),
      Jt = We('stop', L),
      It = We('stop', A),
      mn = We(
        'stop',
        (Q) => {
          re(Q), j.current === !1 && Me(!1), m && m(Q);
        },
        !1
      ),
      Xr = Rr((Q) => {
        F.current || (F.current = Q.currentTarget),
          q(Q),
          j.current === !0 && (Me(!0), x && x(Q)),
          p && p(Q);
      }),
      gn = () => {
        const Q = F.current;
        return l && l !== 'button' && !(Q.tagName === 'A' && Q.href);
      },
      Vn = w.useRef(!1),
      bi = Rr((Q) => {
        c &&
          !Vn.current &&
          se &&
          O.current &&
          Q.key === ' ' &&
          ((Vn.current = !0),
          O.current.stop(Q, () => {
            O.current.start(Q);
          })),
          Q.target === Q.currentTarget &&
            gn() &&
            Q.key === ' ' &&
            Q.preventDefault(),
          S && S(Q),
          Q.target === Q.currentTarget &&
            gn() &&
            Q.key === 'Enter' &&
            !u &&
            (Q.preventDefault(), h && h(Q));
      }),
      ki = Rr((Q) => {
        c &&
          Q.key === ' ' &&
          O.current &&
          se &&
          !Q.defaultPrevented &&
          ((Vn.current = !1),
          O.current.stop(Q, () => {
            O.current.pulsate(Q);
          })),
          E && E(Q),
          h &&
            Q.target === Q.currentTarget &&
            gn() &&
            Q.key === ' ' &&
            !Q.defaultPrevented &&
            h(Q);
      });
    let Zt = l;
    Zt === 'button' && (z.href || z.to) && (Zt = y);
    const At = {};
    Zt === 'button'
      ? ((At.type = R === void 0 ? 'button' : R), (At.disabled = u))
      : (!z.href && !z.to && (At.role = 'button'),
        u && (At['aria-disabled'] = u));
    const Ci = Yl(n, ye, F),
      pr = D({}, r, {
        centerRipple: o,
        component: l,
        disabled: u,
        disableRipple: f,
        disableTouchRipple: d,
        focusRipple: c,
        tabIndex: G,
        focusVisible: se,
      }),
      Dt = L$(pr);
    return _.jsxs(
      j$,
      D(
        {
          as: Zt,
          className: Te(Dt.root, s),
          ownerState: pr,
          onBlur: mn,
          onClick: h,
          onContextMenu: $n,
          onFocus: Xr,
          onKeyDown: bi,
          onKeyUp: ki,
          onMouseDown: Rn,
          onMouseLeave: Kr,
          onMouseUp: On,
          onDragLeave: we,
          onTouchEnd: Jt,
          onTouchMove: It,
          onTouchStart: Ao,
          ref: Ci,
          tabIndex: u ? -1 : G,
          type: R,
        },
        At,
        z,
        { children: [a, Rt ? _.jsx(O$, D({ ref: M, center: o }, Y)) : null] }
      )
    );
  });
function M$(e) {
  return ur('MuiIconButton', e);
}
const I$ = cr('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
  ]),
  A$ = [
    'edge',
    'children',
    'className',
    'color',
    'disabled',
    'disableFocusRipple',
    'size',
  ],
  D$ = (e) => {
    const { classes: t, disabled: n, color: r, edge: i, size: o } = e,
      a = {
        root: [
          'root',
          n && 'disabled',
          r !== 'default' && `color${ge(r)}`,
          i && `edge${ge(i)}`,
          `size${ge(o)}`,
        ],
      };
    return Vr(a, M$, t);
  },
  F$ = tt(sc, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'default' && t[`color${ge(n.color)}`],
        n.edge && t[`edge${ge(n.edge)}`],
        t[`size${ge(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      D(
        {
          textAlign: 'center',
          flex: '0 0 auto',
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: '50%',
          overflow: 'visible',
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : ro(e.palette.action.active, e.palette.action.hoverOpacity),
            '@media (hover: none)': { backgroundColor: 'transparent' },
          },
        },
        t.edge === 'start' && { marginLeft: t.size === 'small' ? -3 : -12 },
        t.edge === 'end' && { marginRight: t.size === 'small' ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return D(
        {},
        t.color === 'inherit' && { color: 'inherit' },
        t.color !== 'inherit' &&
          t.color !== 'default' &&
          D(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              '&:hover': D(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : ro(r.main, e.palette.action.hoverOpacity),
                },
                { '@media (hover: none)': { backgroundColor: 'transparent' } }
              ),
            }
          ),
        t.size === 'small' && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === 'large' && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${I$.disabled}`]: {
            backgroundColor: 'transparent',
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  yd = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiIconButton' }),
      {
        edge: i = !1,
        children: o,
        className: a,
        color: s = 'default',
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: f = 'medium',
      } = r,
      d = Xe(r, A$),
      c = D({}, r, {
        edge: i,
        color: s,
        disabled: l,
        disableFocusRipple: u,
        size: f,
      }),
      y = D$(c);
    return _.jsx(
      F$,
      D(
        {
          className: Te(y.root, a),
          centerRipple: !0,
          focusRipple: !u,
          disabled: l,
          ref: n,
        },
        d,
        { ownerState: c, children: o }
      )
    );
  });
function B$(e) {
  return ur('MuiButton', e);
}
const Fs = cr('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  U$ = w.createContext({}),
  H$ = w.createContext(void 0),
  V$ = [
    'children',
    'color',
    'component',
    'className',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'endIcon',
    'focusVisibleClassName',
    'fullWidth',
    'size',
    'startIcon',
    'type',
    'variant',
  ],
  W$ = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: i,
        variant: o,
        classes: a,
      } = e,
      s = {
        root: [
          'root',
          o,
          `${o}${ge(t)}`,
          `size${ge(i)}`,
          `${o}Size${ge(i)}`,
          `color${ge(t)}`,
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['icon', 'startIcon', `iconSize${ge(i)}`],
        endIcon: ['icon', 'endIcon', `iconSize${ge(i)}`],
      },
      l = Vr(s, B$, a);
    return D({}, a, l);
  },
  bx = (e) =>
    D(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  K$ = tt(sc, {
    shouldForwardProp: (e) => wx(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ge(n.color)}`],
        t[`size${ge(n.size)}`],
        t[`${n.variant}Size${ge(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const i =
          e.palette.mode === 'light'
            ? e.palette.grey[300]
            : e.palette.grey[800],
        o =
          e.palette.mode === 'light'
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return D(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'color'],
            { duration: e.transitions.duration.short }
          ),
          '&:hover': D(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : ro(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ro(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ro(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'contained' && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : o,
              boxShadow: (e.vars || e).shadows[4],
              '@media (hover: none)': {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === 'contained' &&
              t.color !== 'inherit' && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                '@media (hover: none)': {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          '&:active': D(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Fs.focusVisible}`]: D(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Fs.disabled}`]: D(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === 'outlined' && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === 'contained' && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === 'text' && { padding: '6px 8px' },
        t.variant === 'text' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === 'outlined' && {
          padding: '5px 15px',
          border: '1px solid currentColor',
        },
        t.variant === 'outlined' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${ro(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === 'contained' && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : i,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === 'contained' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === 'inherit' && {
          color: 'inherit',
          borderColor: 'currentColor',
        },
        t.size === 'small' &&
          t.variant === 'text' && {
            padding: '4px 5px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'text' && {
            padding: '8px 11px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'outlined' && {
            padding: '3px 9px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'outlined' && {
            padding: '7px 21px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'contained' && {
            padding: '4px 10px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'contained' && {
            padding: '8px 22px',
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: '100%' }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        [`&.${Fs.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Fs.disabled}`]: { boxShadow: 'none' },
      }
  ),
  X$ = tt('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${ge(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    D(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      bx(e)
    )
  ),
  G$ = tt('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${ge(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    D(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      bx(e)
    )
  ),
  Y$ = w.forwardRef(function (t, n) {
    const r = w.useContext(U$),
      i = w.useContext(H$),
      o = Hp(r, t),
      a = fr({ props: o, name: 'MuiButton' }),
      {
        children: s,
        color: l = 'primary',
        component: u = 'button',
        className: f,
        disabled: d = !1,
        disableElevation: c = !1,
        disableFocusRipple: y = !1,
        endIcon: m,
        focusVisibleClassName: h,
        fullWidth: C = !1,
        size: g = 'medium',
        startIcon: p,
        type: x,
        variant: S = 'text',
      } = a,
      E = Xe(a, V$),
      v = D({}, a, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: c,
        disableFocusRipple: y,
        fullWidth: C,
        size: g,
        type: x,
        variant: S,
      }),
      b = W$(v),
      N =
        p && _.jsx(X$, { className: b.startIcon, ownerState: v, children: p }),
      L = m && _.jsx(G$, { className: b.endIcon, ownerState: v, children: m }),
      A = i || '';
    return _.jsxs(
      K$,
      D(
        {
          ownerState: v,
          className: Te(r.className, b.root, f, A),
          component: u,
          disabled: d,
          focusRipple: !y,
          focusVisibleClassName: Te(b.focusVisible, h),
          ref: n,
          type: x,
        },
        E,
        { classes: b, children: [N, s, L] }
      )
    );
  });
function q$(e) {
  return ur('MuiCircularProgress', e);
}
cr('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const Q$ = [
  'className',
  'color',
  'disableShrink',
  'size',
  'style',
  'thickness',
  'value',
  'variant',
];
let lc = (e) => e,
  o0,
  a0,
  s0,
  l0;
const yr = 44,
  J$ = Lo(
    o0 ||
      (o0 = lc`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  Z$ = Lo(
    a0 ||
      (a0 = lc`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  eO = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: i } = e,
      o = {
        root: ['root', n, `color${ge(r)}`],
        svg: ['svg'],
        circle: ['circle', `circle${ge(n)}`, i && 'circleDisableShrink'],
      };
    return Vr(o, q$, t);
  },
  tO = tt('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${ge(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      D(
        { display: 'inline-block' },
        e.variant === 'determinate' && {
          transition: t.transitions.create('transform'),
        },
        e.color !== 'inherit' && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === 'indeterminate' &&
      Du(
        s0 ||
          (s0 = lc`
      animation: ${0} 1.4s linear infinite;
    `),
        J$
      )
  ),
  nO = tt('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, t) => t.svg,
  })({ display: 'block' }),
  rO = tt('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${ge(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      D(
        { stroke: 'currentColor' },
        e.variant === 'determinate' && {
          transition: t.transitions.create('stroke-dashoffset'),
        },
        e.variant === 'indeterminate' && {
          strokeDasharray: '80px, 200px',
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === 'indeterminate' &&
      !e.disableShrink &&
      Du(
        l0 ||
          (l0 = lc`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        Z$
      )
  ),
  iO = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiCircularProgress' }),
      {
        className: i,
        color: o = 'primary',
        disableShrink: a = !1,
        size: s = 40,
        style: l,
        thickness: u = 3.6,
        value: f = 0,
        variant: d = 'indeterminate',
      } = r,
      c = Xe(r, Q$),
      y = D({}, r, {
        color: o,
        disableShrink: a,
        size: s,
        thickness: u,
        value: f,
        variant: d,
      }),
      m = eO(y),
      h = {},
      C = {},
      g = {};
    if (d === 'determinate') {
      const p = 2 * Math.PI * ((yr - u) / 2);
      (h.strokeDasharray = p.toFixed(3)),
        (g['aria-valuenow'] = Math.round(f)),
        (h.strokeDashoffset = `${(((100 - f) / 100) * p).toFixed(3)}px`),
        (C.transform = 'rotate(-90deg)');
    }
    return _.jsx(
      tO,
      D(
        {
          className: Te(m.root, i),
          style: D({ width: s, height: s }, C, l),
          ownerState: y,
          ref: n,
          role: 'progressbar',
        },
        g,
        c,
        {
          children: _.jsx(nO, {
            className: m.svg,
            ownerState: y,
            viewBox: `${yr / 2} ${yr / 2} ${yr} ${yr}`,
            children: _.jsx(rO, {
              className: m.circle,
              style: h,
              ownerState: y,
              cx: yr,
              cy: yr,
              r: (yr - u) / 2,
              fill: 'none',
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  });
function oO(e) {
  return ur('MuiTab', e);
}
const vr = cr('MuiTab', [
    'root',
    'labelIcon',
    'textColorInherit',
    'textColorPrimary',
    'textColorSecondary',
    'selected',
    'disabled',
    'fullWidth',
    'wrapped',
    'iconWrapper',
  ]),
  aO = [
    'className',
    'disabled',
    'disableFocusRipple',
    'fullWidth',
    'icon',
    'iconPosition',
    'indicator',
    'label',
    'onChange',
    'onClick',
    'onFocus',
    'selected',
    'selectionFollowsFocus',
    'textColor',
    'value',
    'wrapped',
  ],
  sO = (e) => {
    const {
        classes: t,
        textColor: n,
        fullWidth: r,
        wrapped: i,
        icon: o,
        label: a,
        selected: s,
        disabled: l,
      } = e,
      u = {
        root: [
          'root',
          o && a && 'labelIcon',
          `textColor${ge(n)}`,
          r && 'fullWidth',
          i && 'wrapped',
          s && 'selected',
          l && 'disabled',
        ],
        iconWrapper: ['iconWrapper'],
      };
    return Vr(u, oO, t);
  },
  lO = tt(sc, {
    name: 'MuiTab',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.label && n.icon && t.labelIcon,
        t[`textColor${ge(n.textColor)}`],
        n.fullWidth && t.fullWidth,
        n.wrapped && t.wrapped,
        { [`& .${vr.iconWrapper}`]: t.iconWrapper },
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    D(
      {},
      e.typography.button,
      {
        maxWidth: 360,
        minWidth: 90,
        position: 'relative',
        minHeight: 48,
        flexShrink: 0,
        padding: '12px 16px',
        overflow: 'hidden',
        whiteSpace: 'normal',
        textAlign: 'center',
      },
      t.label && {
        flexDirection:
          t.iconPosition === 'top' || t.iconPosition === 'bottom'
            ? 'column'
            : 'row',
      },
      { lineHeight: 1.25 },
      t.icon &&
        t.label && {
          minHeight: 72,
          paddingTop: 9,
          paddingBottom: 9,
          [`& > .${vr.iconWrapper}`]: D(
            {},
            t.iconPosition === 'top' && { marginBottom: 6 },
            t.iconPosition === 'bottom' && { marginTop: 6 },
            t.iconPosition === 'start' && { marginRight: e.spacing(1) },
            t.iconPosition === 'end' && { marginLeft: e.spacing(1) }
          ),
        },
      t.textColor === 'inherit' && {
        color: 'inherit',
        opacity: 0.6,
        [`&.${vr.selected}`]: { opacity: 1 },
        [`&.${vr.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.textColor === 'primary' && {
        color: (e.vars || e).palette.text.secondary,
        [`&.${vr.selected}`]: { color: (e.vars || e).palette.primary.main },
        [`&.${vr.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      },
      t.textColor === 'secondary' && {
        color: (e.vars || e).palette.text.secondary,
        [`&.${vr.selected}`]: { color: (e.vars || e).palette.secondary.main },
        [`&.${vr.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      },
      t.fullWidth && {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: 'none',
      },
      t.wrapped && { fontSize: e.typography.pxToRem(12) }
    )
  ),
  uO = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiTab' }),
      {
        className: i,
        disabled: o = !1,
        disableFocusRipple: a = !1,
        fullWidth: s,
        icon: l,
        iconPosition: u = 'top',
        indicator: f,
        label: d,
        onChange: c,
        onClick: y,
        onFocus: m,
        selected: h,
        selectionFollowsFocus: C,
        textColor: g = 'inherit',
        value: p,
        wrapped: x = !1,
      } = r,
      S = Xe(r, aO),
      E = D({}, r, {
        disabled: o,
        disableFocusRipple: a,
        selected: h,
        icon: !!l,
        iconPosition: u,
        label: !!d,
        fullWidth: s,
        textColor: g,
        wrapped: x,
      }),
      v = sO(E),
      b =
        l && d && w.isValidElement(l)
          ? w.cloneElement(l, {
              className: Te(v.iconWrapper, l.props.className),
            })
          : l,
      N = (A) => {
        !h && c && c(A, p), y && y(A);
      },
      L = (A) => {
        C && !h && c && c(A, p), m && m(A);
      };
    return _.jsxs(
      lO,
      D(
        {
          focusRipple: !a,
          className: Te(v.root, i),
          ref: n,
          role: 'tab',
          'aria-selected': h,
          disabled: o,
          onClick: N,
          onFocus: L,
          ownerState: E,
          tabIndex: h ? 0 : -1,
        },
        S,
        {
          children: [
            u === 'top' || u === 'start'
              ? _.jsxs(w.Fragment, { children: [b, d] })
              : _.jsxs(w.Fragment, { children: [d, b] }),
            f,
          ],
        }
      )
    );
  }),
  cO = Jp(
    _.jsx('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' }),
    'KeyboardArrowLeft'
  ),
  fO = Jp(
    _.jsx('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }),
    'KeyboardArrowRight'
  );
function dO(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function pO(e, t, n, r = {}, i = () => {}) {
  const { ease: o = dO, duration: a = 300 } = r;
  let s = null;
  const l = t[e];
  let u = !1;
  const f = () => {
      u = !0;
    },
    d = (c) => {
      if (u) {
        i(new Error('Animation cancelled'));
        return;
      }
      s === null && (s = c);
      const y = Math.min(1, (c - s) / a);
      if (((t[e] = o(y) * (n - l) + l), y >= 1)) {
        requestAnimationFrame(() => {
          i(null);
        });
        return;
      }
      requestAnimationFrame(d);
    };
  return l === n
    ? (i(new Error('Element already at target position')), f)
    : (requestAnimationFrame(d), f);
}
const hO = ['onChange'],
  mO = {
    width: 99,
    height: 99,
    position: 'absolute',
    top: -9999,
    overflow: 'scroll',
  };
function gO(e) {
  const { onChange: t } = e,
    n = Xe(e, hO),
    r = w.useRef(),
    i = w.useRef(null),
    o = () => {
      r.current = i.current.offsetHeight - i.current.clientHeight;
    };
  return (
    Vp(() => {
      const a = Wp(() => {
          const l = r.current;
          o(), l !== r.current && t(r.current);
        }),
        s = Xp(i.current);
      return (
        s.addEventListener('resize', a),
        () => {
          a.clear(), s.removeEventListener('resize', a);
        }
      );
    }, [t]),
    w.useEffect(() => {
      o(), t(r.current);
    }, [t]),
    _.jsx('div', D({ style: mO, ref: i }, n))
  );
}
function yO(e) {
  return ur('MuiTabScrollButton', e);
}
const vO = cr('MuiTabScrollButton', [
    'root',
    'vertical',
    'horizontal',
    'disabled',
  ]),
  xO = [
    'className',
    'slots',
    'slotProps',
    'direction',
    'orientation',
    'disabled',
  ],
  wO = (e) => {
    const { classes: t, orientation: n, disabled: r } = e;
    return Vr({ root: ['root', n, r && 'disabled'] }, yO, t);
  },
  SO = tt(sc, {
    name: 'MuiTabScrollButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.orientation && t[n.orientation]];
    },
  })(({ ownerState: e }) =>
    D(
      {
        width: 40,
        flexShrink: 0,
        opacity: 0.8,
        [`&.${vO.disabled}`]: { opacity: 0 },
      },
      e.orientation === 'vertical' && {
        width: '100%',
        height: 40,
        '& svg': { transform: `rotate(${e.isRtl ? -90 : 90}deg)` },
      }
    )
  ),
  bO = w.forwardRef(function (t, n) {
    var r, i;
    const o = fr({ props: t, name: 'MuiTabScrollButton' }),
      { className: a, slots: s = {}, slotProps: l = {}, direction: u } = o,
      f = Xe(o, xO),
      d = fx(),
      c = D({ isRtl: d }, o),
      y = wO(c),
      m = (r = s.StartScrollButtonIcon) != null ? r : cO,
      h = (i = s.EndScrollButtonIcon) != null ? i : fO,
      C = Jl({
        elementType: m,
        externalSlotProps: l.startScrollButtonIcon,
        additionalProps: { fontSize: 'small' },
        ownerState: c,
      }),
      g = Jl({
        elementType: h,
        externalSlotProps: l.endScrollButtonIcon,
        additionalProps: { fontSize: 'small' },
        ownerState: c,
      });
    return _.jsx(
      SO,
      D(
        {
          component: 'div',
          className: Te(y.root, a),
          ref: n,
          role: null,
          ownerState: c,
          tabIndex: null,
        },
        f,
        { children: u === 'left' ? _.jsx(m, D({}, C)) : _.jsx(h, D({}, g)) }
      )
    );
  });
function kO(e) {
  return ur('MuiTabs', e);
}
const fl = cr('MuiTabs', [
    'root',
    'vertical',
    'flexContainer',
    'flexContainerVertical',
    'centered',
    'scroller',
    'fixed',
    'scrollableX',
    'scrollableY',
    'hideScrollbar',
    'scrollButtons',
    'scrollButtonsHideMobile',
    'indicator',
  ]),
  CO = [
    'aria-label',
    'aria-labelledby',
    'action',
    'centered',
    'children',
    'className',
    'component',
    'allowScrollButtonsMobile',
    'indicatorColor',
    'onChange',
    'orientation',
    'ScrollButtonComponent',
    'scrollButtons',
    'selectionFollowsFocus',
    'slots',
    'slotProps',
    'TabIndicatorProps',
    'TabScrollButtonProps',
    'textColor',
    'value',
    'variant',
    'visibleScrollbar',
  ],
  u0 = (e, t) =>
    e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : e.firstChild,
  c0 = (e, t) =>
    e === t
      ? e.lastChild
      : t && t.previousElementSibling
      ? t.previousElementSibling
      : e.lastChild,
  Bs = (e, t, n) => {
    let r = !1,
      i = n(e, t);
    for (; i; ) {
      if (i === e.firstChild) {
        if (r) return;
        r = !0;
      }
      const o = i.disabled || i.getAttribute('aria-disabled') === 'true';
      if (!i.hasAttribute('tabindex') || o) i = n(e, i);
      else {
        i.focus();
        return;
      }
    }
  },
  EO = (e) => {
    const {
      vertical: t,
      fixed: n,
      hideScrollbar: r,
      scrollableX: i,
      scrollableY: o,
      centered: a,
      scrollButtonsHideMobile: s,
      classes: l,
    } = e;
    return Vr(
      {
        root: ['root', t && 'vertical'],
        scroller: [
          'scroller',
          n && 'fixed',
          r && 'hideScrollbar',
          i && 'scrollableX',
          o && 'scrollableY',
        ],
        flexContainer: [
          'flexContainer',
          t && 'flexContainerVertical',
          a && 'centered',
        ],
        indicator: ['indicator'],
        scrollButtons: ['scrollButtons', s && 'scrollButtonsHideMobile'],
        scrollableX: [i && 'scrollableX'],
        hideScrollbar: [r && 'hideScrollbar'],
      },
      kO,
      l
    );
  },
  PO = tt('div', {
    name: 'MuiTabs',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${fl.scrollButtons}`]: t.scrollButtons },
        {
          [`& .${fl.scrollButtons}`]:
            n.scrollButtonsHideMobile && t.scrollButtonsHideMobile,
        },
        t.root,
        n.vertical && t.vertical,
      ];
    },
  })(({ ownerState: e, theme: t }) =>
    D(
      {
        overflow: 'hidden',
        minHeight: 48,
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
      },
      e.vertical && { flexDirection: 'column' },
      e.scrollButtonsHideMobile && {
        [`& .${fl.scrollButtons}`]: {
          [t.breakpoints.down('sm')]: { display: 'none' },
        },
      }
    )
  ),
  _O = tt('div', {
    name: 'MuiTabs',
    slot: 'Scroller',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.scroller,
        n.fixed && t.fixed,
        n.hideScrollbar && t.hideScrollbar,
        n.scrollableX && t.scrollableX,
        n.scrollableY && t.scrollableY,
      ];
    },
  })(({ ownerState: e }) =>
    D(
      {
        position: 'relative',
        display: 'inline-block',
        flex: '1 1 auto',
        whiteSpace: 'nowrap',
      },
      e.fixed && { overflowX: 'hidden', width: '100%' },
      e.hideScrollbar && {
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      },
      e.scrollableX && { overflowX: 'auto', overflowY: 'hidden' },
      e.scrollableY && { overflowY: 'auto', overflowX: 'hidden' }
    )
  ),
  RO = tt('div', {
    name: 'MuiTabs',
    slot: 'FlexContainer',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.flexContainer,
        n.vertical && t.flexContainerVertical,
        n.centered && t.centered,
      ];
    },
  })(({ ownerState: e }) =>
    D(
      { display: 'flex' },
      e.vertical && { flexDirection: 'column' },
      e.centered && { justifyContent: 'center' }
    )
  ),
  $O = tt('span', {
    name: 'MuiTabs',
    slot: 'Indicator',
    overridesResolver: (e, t) => t.indicator,
  })(({ ownerState: e, theme: t }) =>
    D(
      {
        position: 'absolute',
        height: 2,
        bottom: 0,
        width: '100%',
        transition: t.transitions.create(),
      },
      e.indicatorColor === 'primary' && {
        backgroundColor: (t.vars || t).palette.primary.main,
      },
      e.indicatorColor === 'secondary' && {
        backgroundColor: (t.vars || t).palette.secondary.main,
      },
      e.vertical && { height: '100%', width: 2, right: 0 }
    )
  ),
  OO = tt(gO)({
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
  }),
  f0 = {},
  zO = w.forwardRef(function (t, n) {
    const r = fr({ props: t, name: 'MuiTabs' }),
      i = zR(),
      o = fx(),
      {
        'aria-label': a,
        'aria-labelledby': s,
        action: l,
        centered: u = !1,
        children: f,
        className: d,
        component: c = 'div',
        allowScrollButtonsMobile: y = !1,
        indicatorColor: m = 'primary',
        onChange: h,
        orientation: C = 'horizontal',
        ScrollButtonComponent: g = bO,
        scrollButtons: p = 'auto',
        selectionFollowsFocus: x,
        slots: S = {},
        slotProps: E = {},
        TabIndicatorProps: v = {},
        TabScrollButtonProps: b = {},
        textColor: N = 'primary',
        value: L,
        variant: A = 'standard',
        visibleScrollbar: H = !1,
      } = r,
      G = Xe(r, CO),
      Y = A === 'scrollable',
      K = C === 'vertical',
      R = K ? 'scrollTop' : 'scrollLeft',
      z = K ? 'top' : 'left',
      F = K ? 'bottom' : 'right',
      O = K ? 'clientHeight' : 'clientWidth',
      M = K ? 'height' : 'width',
      j = D({}, r, {
        component: c,
        allowScrollButtonsMobile: y,
        indicatorColor: m,
        orientation: C,
        vertical: K,
        scrollButtons: p,
        textColor: N,
        variant: A,
        visibleScrollbar: H,
        fixed: !Y,
        hideScrollbar: Y && !H,
        scrollableX: Y && !K,
        scrollableY: Y && K,
        centered: u && !Y,
        scrollButtonsHideMobile: !y,
      }),
      q = EO(j),
      re = Jl({
        elementType: S.StartScrollButtonIcon,
        externalSlotProps: E.startScrollButtonIcon,
        ownerState: j,
      }),
      ye = Jl({
        elementType: S.EndScrollButtonIcon,
        externalSlotProps: E.endScrollButtonIcon,
        ownerState: j,
      }),
      [se, Me] = w.useState(!1),
      [ce, yt] = w.useState(f0),
      [Rt, We] = w.useState(!1),
      [Rn, $n] = w.useState(!1),
      [we, On] = w.useState(!1),
      [Kr, Ao] = w.useState({ overflow: 'hidden', scrollbarWidth: 0 }),
      Jt = new Map(),
      It = w.useRef(null),
      mn = w.useRef(null),
      Xr = () => {
        const W = It.current;
        let J;
        if (W) {
          const ue = W.getBoundingClientRect();
          J = {
            clientWidth: W.clientWidth,
            scrollLeft: W.scrollLeft,
            scrollTop: W.scrollTop,
            scrollLeftNormalized: V_(W, o ? 'rtl' : 'ltr'),
            scrollWidth: W.scrollWidth,
            top: ue.top,
            bottom: ue.bottom,
            left: ue.left,
            right: ue.right,
          };
        }
        let de;
        if (W && L !== !1) {
          const ue = mn.current.children;
          if (ue.length > 0) {
            const $e = ue[Jt.get(L)];
            de = $e ? $e.getBoundingClientRect() : null;
          }
        }
        return { tabsMeta: J, tabMeta: de };
      },
      gn = Rr(() => {
        const { tabsMeta: W, tabMeta: J } = Xr();
        let de = 0,
          ue;
        if (K) (ue = 'top'), J && W && (de = J.top - W.top + W.scrollTop);
        else if (((ue = o ? 'right' : 'left'), J && W)) {
          const it = o
            ? W.scrollLeftNormalized + W.clientWidth - W.scrollWidth
            : W.scrollLeft;
          de = (o ? -1 : 1) * (J[ue] - W[ue] + it);
        }
        const $e = { [ue]: de, [M]: J ? J[M] : 0 };
        if (isNaN(ce[ue]) || isNaN(ce[M])) yt($e);
        else {
          const it = Math.abs(ce[ue] - $e[ue]),
            $t = Math.abs(ce[M] - $e[M]);
          (it >= 1 || $t >= 1) && yt($e);
        }
      }),
      Vn = (W, { animation: J = !0 } = {}) => {
        J
          ? pO(R, It.current, W, { duration: i.transitions.duration.standard })
          : (It.current[R] = W);
      },
      bi = (W) => {
        let J = It.current[R];
        K
          ? (J += W)
          : ((J += W * (o ? -1 : 1)), (J *= o && cx() === 'reverse' ? -1 : 1)),
          Vn(J);
      },
      ki = () => {
        const W = It.current[O];
        let J = 0;
        const de = Array.from(mn.current.children);
        for (let ue = 0; ue < de.length; ue += 1) {
          const $e = de[ue];
          if (J + $e[O] > W) {
            ue === 0 && (J = W);
            break;
          }
          J += $e[O];
        }
        return J;
      },
      Zt = () => {
        bi(-1 * ki());
      },
      At = () => {
        bi(ki());
      },
      Ci = w.useCallback((W) => {
        Ao({ overflow: null, scrollbarWidth: W });
      }, []),
      pr = () => {
        const W = {};
        W.scrollbarSizeListener = Y
          ? _.jsx(OO, {
              onChange: Ci,
              className: Te(q.scrollableX, q.hideScrollbar),
            })
          : null;
        const de = Y && ((p === 'auto' && (Rt || Rn)) || p === !0);
        return (
          (W.scrollButtonStart = de
            ? _.jsx(
                g,
                D(
                  {
                    slots: { StartScrollButtonIcon: S.StartScrollButtonIcon },
                    slotProps: { startScrollButtonIcon: re },
                    orientation: C,
                    direction: o ? 'right' : 'left',
                    onClick: Zt,
                    disabled: !Rt,
                  },
                  b,
                  { className: Te(q.scrollButtons, b.className) }
                )
              )
            : null),
          (W.scrollButtonEnd = de
            ? _.jsx(
                g,
                D(
                  {
                    slots: { EndScrollButtonIcon: S.EndScrollButtonIcon },
                    slotProps: { endScrollButtonIcon: ye },
                    orientation: C,
                    direction: o ? 'left' : 'right',
                    onClick: At,
                    disabled: !Rn,
                  },
                  b,
                  { className: Te(q.scrollButtons, b.className) }
                )
              )
            : null),
          W
        );
      },
      Dt = Rr((W) => {
        const { tabsMeta: J, tabMeta: de } = Xr();
        if (!(!de || !J)) {
          if (de[z] < J[z]) {
            const ue = J[R] + (de[z] - J[z]);
            Vn(ue, { animation: W });
          } else if (de[F] > J[F]) {
            const ue = J[R] + (de[F] - J[F]);
            Vn(ue, { animation: W });
          }
        }
      }),
      Q = Rr(() => {
        Y && p !== !1 && On(!we);
      });
    w.useEffect(() => {
      const W = Wp(() => {
        It.current && gn();
      });
      let J;
      const de = (it) => {
          it.forEach(($t) => {
            $t.removedNodes.forEach((zn) => {
              var en;
              (en = J) == null || en.unobserve(zn);
            }),
              $t.addedNodes.forEach((zn) => {
                var en;
                (en = J) == null || en.observe(zn);
              });
          }),
            W(),
            Q();
        },
        ue = Xp(It.current);
      ue.addEventListener('resize', W);
      let $e;
      return (
        typeof ResizeObserver < 'u' &&
          ((J = new ResizeObserver(W)),
          Array.from(mn.current.children).forEach((it) => {
            J.observe(it);
          })),
        typeof MutationObserver < 'u' &&
          (($e = new MutationObserver(de)),
          $e.observe(mn.current, { childList: !0 })),
        () => {
          var it, $t;
          W.clear(),
            ue.removeEventListener('resize', W),
            (it = $e) == null || it.disconnect(),
            ($t = J) == null || $t.disconnect();
        }
      );
    }, [gn, Q]),
      w.useEffect(() => {
        const W = Array.from(mn.current.children),
          J = W.length;
        if (typeof IntersectionObserver < 'u' && J > 0 && Y && p !== !1) {
          const de = W[0],
            ue = W[J - 1],
            $e = { root: It.current, threshold: 0.99 },
            it = (Do) => {
              We(!Do[0].isIntersecting);
            },
            $t = new IntersectionObserver(it, $e);
          $t.observe(de);
          const zn = (Do) => {
              $n(!Do[0].isIntersecting);
            },
            en = new IntersectionObserver(zn, $e);
          return (
            en.observe(ue),
            () => {
              $t.disconnect(), en.disconnect();
            }
          );
        }
      }, [Y, p, we, f == null ? void 0 : f.length]),
      w.useEffect(() => {
        Me(!0);
      }, []),
      w.useEffect(() => {
        gn();
      }),
      w.useEffect(() => {
        Dt(f0 !== ce);
      }, [Dt, ce]),
      w.useImperativeHandle(
        l,
        () => ({ updateIndicator: gn, updateScrollButtons: Q }),
        [gn, Q]
      );
    const hr = _.jsx(
      $O,
      D({}, v, {
        className: Te(q.indicator, v.className),
        ownerState: j,
        style: D({}, ce, v.style),
      })
    );
    let yn = 0;
    const Ei = w.Children.map(f, (W) => {
        if (!w.isValidElement(W)) return null;
        const J = W.props.value === void 0 ? yn : W.props.value;
        Jt.set(J, yn);
        const de = J === L;
        return (
          (yn += 1),
          w.cloneElement(
            W,
            D(
              {
                fullWidth: A === 'fullWidth',
                indicator: de && !se && hr,
                selected: de,
                selectionFollowsFocus: x,
                onChange: h,
                textColor: N,
                value: J,
              },
              yn === 1 && L === !1 && !W.props.tabIndex ? { tabIndex: 0 } : {}
            )
          )
        );
      }),
      vn = (W) => {
        const J = mn.current,
          de = Kp(J).activeElement;
        if (de.getAttribute('role') !== 'tab') return;
        let $e = C === 'horizontal' ? 'ArrowLeft' : 'ArrowUp',
          it = C === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
        switch (
          (C === 'horizontal' && o && (($e = 'ArrowRight'), (it = 'ArrowLeft')),
          W.key)
        ) {
          case $e:
            W.preventDefault(), Bs(J, de, c0);
            break;
          case it:
            W.preventDefault(), Bs(J, de, u0);
            break;
          case 'Home':
            W.preventDefault(), Bs(J, null, u0);
            break;
          case 'End':
            W.preventDefault(), Bs(J, null, c0);
            break;
        }
      },
      Pi = pr();
    return _.jsxs(
      PO,
      D({ className: Te(q.root, d), ownerState: j, ref: n, as: c }, G, {
        children: [
          Pi.scrollButtonStart,
          Pi.scrollbarSizeListener,
          _.jsxs(_O, {
            className: q.scroller,
            ownerState: j,
            style: {
              overflow: Kr.overflow,
              [K ? `margin${o ? 'Left' : 'Right'}` : 'marginBottom']: H
                ? void 0
                : -Kr.scrollbarWidth,
            },
            ref: It,
            children: [
              _.jsx(RO, {
                'aria-label': a,
                'aria-labelledby': s,
                'aria-orientation': C === 'vertical' ? 'vertical' : null,
                className: q.flexContainer,
                ownerState: j,
                onKeyDown: vn,
                ref: mn,
                role: 'tablist',
                children: Ei,
              }),
              se && hr,
            ],
          }),
          Pi.scrollButtonEnd,
        ],
      })
    );
  });
var nh = {},
  Qc = {};
const TO = ar(o$);
var d0;
function Io() {
  return (
    d0 ||
      ((d0 = 1),
      (function (e) {
        'use client';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = TO;
      })(Qc)),
    Qc
  );
}
var NO = Wr;
Object.defineProperty(nh, '__esModule', { value: !0 });
var kx = (nh.default = void 0),
  LO = NO(Io()),
  jO = _;
kx = nh.default = (0, LO.default)(
  (0, jO.jsx)('path', { d: 'M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' }),
  'Menu'
);
var rh = {},
  MO = Wr;
Object.defineProperty(rh, '__esModule', { value: !0 });
var Cx = (rh.default = void 0),
  IO = MO(Io()),
  AO = _;
Cx = rh.default = (0, IO.default)(
  (0, AO.jsx)('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'Close'
);
var Ex = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = '', a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (o = i(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == 'string' || typeof o == 'number') return o;
      if (typeof o != 'object') return '';
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes('[native code]')
      )
        return o.toString();
      var a = '';
      for (var s in o) t.call(o, s) && o[s] && (a = i(a, s));
      return a;
    }
    function i(o, a) {
      return a ? (o ? o + ' ' + a : o + a) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Ex);
var DO = Ex.exports;
const Hi = Zl(DO),
  FO = () => {
    const { i18n: e } = lr(),
      t = w.useMemo(
        () => e.language || window.localStorage.i18nextLng,
        [e.language]
      ),
      n = w.useCallback(
        (r) => {
          e.changeLanguage(r);
        },
        [e]
      );
    return { selectedLanguage: t, changeLanguage: n };
  },
  Px = (e, t, n = !0) => {
    const r = w.useCallback(
      (i) => {
        n &&
          i.target &&
          e.current &&
          !i.composedPath().includes(e.current) &&
          t();
      },
      [t, e, n]
    );
    w.useEffect(
      () => (
        window.addEventListener('click', r),
        () => {
          window.removeEventListener('click', r);
        }
      ),
      [r]
    );
  },
  BO = () => {
    const { t: e } = lr(),
      { pathname: t } = Si(),
      n = Bv(),
      r = w.useRef(null),
      [i, o] = w.useState(!1),
      { changeLanguage: a, selectedLanguage: s } = FO();
    Px(r, () => o(!1), i);
    const l = w.useMemo(
      () => [
        { to: Gn.HOME, title: e('home'), isSelected: Gn.HOME === t },
        { to: Gn.MENU, title: e('menu'), isSelected: Gn.MENU === t },
        { to: Gn.ABOUT, title: e('about'), isSelected: Gn.ABOUT === t },
      ],
      [t, e]
    );
    return _.jsxs('div', {
      style: { display: 'flex', flexDirection: 'column' },
      children: [
        _.jsx(a2, {
          children: _.jsx('img', {
            className: 'brut-logo',
            src: 'https://brutpizza.imgix.net/brut-logo.svg',
            alt: 'brut-logo',
            loading: 'lazy',
            onClick: () => n(Gn.HOME),
          }),
        }),
        _.jsxs(s2, {
          className: 'hamburger-menu',
          ref: r,
          children: [
            _.jsx(yd, {
              size: 'large',
              'aria-label': 'menu',
              className: 'hamburger-menu__button',
              onClick: () => o((u) => !u),
              children: i ? _.jsx(Cx, {}) : _.jsx(kx, {}),
            }),
            _.jsx('div', {
              className: Hi('hamburger-menu__content', {
                'hamburger-menu__content--hidden': !i,
                'hamburger-menu__content--visible': i,
              }),
              children: _.jsxs('ul', {
                className: 'hamburger-menu__content__list',
                children: [
                  l.map((u, f) =>
                    _.jsx(
                      'li',
                      {
                        className: Hi('hamburger-menu__content__list__item', {
                          'hamburger-menu__content__list__item--selected':
                            u.isSelected,
                        }),
                        children: _.jsx(Wv, {
                          to: u.to,
                          className:
                            'hamburger-menu__content__list__item--link',
                          onClick: () => o(!1),
                          children: u.title,
                        }),
                      },
                      f
                    )
                  ),
                  _.jsxs('li', {
                    className: 'hamburger-menu__content__list__item--languages',
                    children: [
                      _.jsxs('div', {
                        onClick: () => a('en'),
                        children: [
                          _.jsx('img', {
                            className: Hi('flag', {
                              'flag--selected': s === 'en',
                            }),
                            src: '/en.png',
                            alt: 'english',
                          }),
                          _.jsx('p', { children: 'english' }),
                        ],
                      }),
                      _.jsxs('div', {
                        onClick: () => a('rs'),
                        children: [
                          _.jsx('img', {
                            className: Hi('flag', {
                              'flag--selected': s === 'rs',
                            }),
                            src: '/rs.png',
                            alt: 'serbian',
                          }),
                          _.jsx('p', { children: 'ћирилица' }),
                        ],
                      }),
                      _.jsxs('div', {
                        onClick: () => a('rs_lt'),
                        children: [
                          _.jsx('img', {
                            className: Hi('flag', {
                              'flag--selected': s === 'rs_lt',
                            }),
                            src: '/rs.png',
                            alt: 'english',
                          }),
                          _.jsx('p', { children: 'latinica' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
function UO() {
  const { pathname: e } = Si();
  return (
    w.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
const HO = ut.footer`
  position: relative;
  width: 100%;
  padding-bottom: 16px;
  background-color: var(--color-background-1);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 8px;
  }

  /* .contact-phone {
    display: flex;
    align-items: center;
    background-color: var(--color-red);
    border-radius: 5px;
    padding: 8px;
    gap: 8px;

    a {
      text-decoration: none;
      color: var(--color-white);
    }
  } */
`;
var ih = {},
  VO = Wr;
Object.defineProperty(ih, '__esModule', { value: !0 });
var _x = (ih.default = void 0),
  WO = VO(Io()),
  KO = _;
_x = ih.default = (0, WO.default)(
  (0, KO.jsx)('path', {
    d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z',
  }),
  'Phone'
);
const XO = ut.div`
  display: flex;
  align-items: center;
  background-color: var(--color-red);
  border-radius: 5px;
  padding: 8px;
  gap: 8px;

  .phone-link {
    display: flex;
    gap: 4px;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }
`,
  Rx = ({ withNumber: e = !1 }) => {
    const { t } = lr();
    return _.jsxs(XO, {
      children: [
        _.jsx(_x, {}),
        _.jsxs('a', {
          href: 'tel:+381652776607',
          className: 'phone-link',
          children: [
            t('delivery'),
            e && _.jsx('p', { children: '+381652776607' }),
          ],
        }),
      ],
    });
  },
  GO = () => {
    const { t: e } = lr();
    return _.jsxs(HO, {
      children: [
        _.jsx('p', { children: '+381652776607' }),
        _.jsx(Rx, {}),
        _.jsx('p', { children: e('address-novi_sad') }),
      ],
    });
  };
var oh = {},
  YO = Wr;
Object.defineProperty(oh, '__esModule', { value: !0 });
var $x = (oh.default = void 0),
  qO = YO(Io()),
  QO = _;
$x = oh.default = (0, qO.default)(
  (0, QO.jsx)('path', {
    d: 'm4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z',
  }),
  'ArrowUpward'
);
const JO = ut.div`
  position: fixed;
  display: flex;
  background-color: var(--color-white);
  color: var(--color-green);
  border-radius: 50%;
  padding: 8px;
  z-index: 1000;
  right: 30px;
  bottom: 50px;

  animation: up 1.5s infinite;
  -webkit-animation: up 1.5s infinite;

  @keyframes up {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(-15px);
    }
    40% {
      transform: translate(0);
    }
  }

  @-webkit-keyframes up {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(-15px);
    }
    40% {
      transform: translate(0);
    }
  }
`,
  ZO = () => {
    const [e, t] = w.useState(!1);
    return (
      w.useEffect(() => {
        const n = () => {
          window.scrollY > 300 ? t(!0) : t(!1);
        };
        return (
          window.addEventListener('scroll', n),
          () => window.removeEventListener('scroll', n)
        );
      }, []),
      e
        ? _.jsx(JO, {
            onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
            children: _.jsx($x, {}),
          })
        : null
    );
  },
  ez = () =>
    _.jsxs('div', {
      children: [
        _.jsx(UO, {}),
        _.jsx(BO, {}),
        _.jsx(kk, {}),
        _.jsx(ZO, {}),
        _.jsx(GO, {}),
      ],
    });
var ah = {},
  tz = Wr;
Object.defineProperty(ah, '__esModule', { value: !0 });
var Ox = (ah.default = void 0);
iz(w);
var nz = tz(Io()),
  rz = _;
function zx(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (zx = function (r) {
    return r ? n : t;
  })(e);
}
function iz(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var n = zx(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
Ox = ah.default = (0, nz.default)(
  (0, rz.jsx)('path', {
    d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
  }),
  'Instagram'
);
var sh = {},
  oz = Wr;
Object.defineProperty(sh, '__esModule', { value: !0 });
var Tx = (sh.default = void 0),
  az = oz(Io()),
  sz = _;
Tx = sh.default = (0, az.default)(
  (0, sz.jsx)('path', {
    d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
  }),
  'LocationOn'
);
const lz = ut.div`
  padding-top: 75px;
  background-color: var(--color-background-2);
  color: var(--color-white);

  .page-content {
    height: 100%;
    padding: 16px;
    background-color: var(--color-background-2);

    display: flex;
    flex-direction: column;
    color: var(--color-white);

    .address {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .address-label {
        font-size: 22px;
      }
      .address-name {
        font-size: 18px;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
      margin-bottom: 32px;
      gap: 16px;

      .look-on-map {
        width: 100%;
        display: flex;
        text-align: left;
        align-items: center;
        color: #1976d2;

        &__button {
          font-size: 16px;
          padding: 0;
          gap: 8px;
        }
      }

      .instagram-button {
        text-align: left;
        justify-content: left;
        padding: 0;
        color: #1976d2;
        p {
          margin: 0;
          margin-left: 8px;
          font-size: 16px;
        }
      }
    }

    .business-hours {
      margin-top: 32px;
      margin-bottom: 32px;
      .business-hours-row {
        display: grid;
        grid-template-columns: min-content 1fr;
        margin-bottom: 8px;
        text-align: left;
      }

      .business-hours-day {
        font-weight: bold;
      }

      .business-hours-time {
        text-align: right;
      }
    }
  }
`,
  uz = ut.div`
  position: relative;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--color-green) 0%,
    var(--color-green) 33%,
    var(--color-white) 33%,
    var(--color-white) 66%,
    var(--color-red) 66%,
    var(--color-red) 100%
  );
`,
  lh = ({ className: e }) => _.jsx(uz, { className: e }),
  cz = ut.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/flag.jpg');
  background-size: cover;
  font-size: 18px;
  color: var(--color-background-2);

  h1 {
    font-weight: 700;
  }
`,
  Nx = ({ title: e }) => {
    const { t } = lr();
    return _.jsx(cz, { children: _.jsx('h1', { children: t(e) }) });
  },
  fz = () => {
    const { t: e } = lr(),
      t = w.useMemo(
        () => ({
          monday: '09:00 - 22:00',
          tuesday: '09:00 - 22:00',
          wednesday: '09:00 - 22:00',
          thursday: '09:00 - 22:00',
          friday: '09:00 - 23:00',
          saturday: '09:00 - 23:00',
          sunday: e('closed'),
        }),
        [e]
      );
    return _.jsxs(lz, {
      children: [
        _.jsx(Nx, { title: 'about' }),
        _.jsxs('div', {
          className: 'page-content',
          children: [
            _.jsxs('div', {
              className: 'contact',
              children: [
                _.jsx('div', {
                  className: 'look-on-map',
                  children: _.jsxs(yd, {
                    size: 'large',
                    'aria-label': 'look-on-map',
                    className: 'look-on-map__button',
                    color: 'primary',
                    onClick: () =>
                      window.open(
                        'https://maps.app.goo.gl/GLLzMQmBWjZJHjUX6',
                        '_blank'
                      ),
                    children: [_.jsx(Tx, {}), e('address-novi_sad')],
                  }),
                }),
                _.jsxs(yd, {
                  className: 'instagram-button',
                  onClick: () =>
                    window.open(
                      'https://www.instagram.com/brutpizzeria?igsh=Zmp1c3ozaG4yZnAy',
                      '_blank'
                    ),
                  children: [
                    _.jsx(Ox, {}),
                    _.jsx('p', { children: e('instagram') }),
                  ],
                }),
                _.jsx(Rx, { withNumber: !0 }),
              ],
            }),
            _.jsx(lh, {}),
            _.jsx('div', {
              className: 'business-hours',
              children: Object.entries(t).map(([n, r]) =>
                _.jsxs(
                  'div',
                  {
                    className: 'business-hours-row',
                    children: [
                      _.jsx('div', {
                        className: 'business-hours-day',
                        children: e(n),
                      }),
                      _.jsx('div', {
                        className: 'business-hours-time',
                        children: r,
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Lx = _p`
  width: 100%;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  position: absolute;
  border: 1px solid black;
  top: 0;
  left: 0;
  transition: transform 0.6s;
  border-radius: 25px;
`,
  dz = ut.div`
  width: 100%;
  min-height: 250px;
  perspective: 1000px;
  position: relative;
`,
  pz = ut.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $flipped: e }) =>
    e === 'true' ? 'rotateY(180deg)' : 'rotateY(0)'};
`,
  hz = ut.div`
  ${Lx}
  background-color: var(--color-background-1);
  color: var(--color-white);
  img {
    width: 300px;
    border-radius: 20px;
  }
`,
  mz = ut.div`
  ${Lx}
  background-color: var(--color-background-1);
  color: var(--color-white);
  transform: rotateY(180deg);
`,
  gz = ({ front: e, back: t }) => {
    const [n, r] = w.useState(!1),
      i = w.useRef(null),
      o = w.useCallback(() => {
        r((a) => !a);
      }, []);
    return (
      Px(i, () => r(!1), n),
      _.jsx(dz, {
        ref: i,
        onClick: o,
        children: _.jsxs(pz, {
          $flipped: n.toString(),
          children: [_.jsx(hz, { children: e }), _.jsx(mz, { children: t })],
        }),
      })
    );
  },
  yz = ut.div`
  h2 {
    font-size: 32px;
    font-weight: 600;
    color: var(--color-white);
    letter-spacing: 2px;
    margin: 20px 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    white-space: pre-wrap;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 18px;
      font-weight: 400;
      color: var(--e-global-color-text);
      text-transform: none;
      letter-spacing: normal;
    }
  }

  .menu-categories {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-wrap: wrap;
      padding-top: 115px;
    }

    img {
      max-width: 300px;
      max-height: 200px;
      display: block;
    }

    .front-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 8px;

      .title {
        font-size: 22px;
      }
    }

    .check-offer-btn {
      font-size: 16px;
      color: var(--color-white);
      border-color: var(--color-white);

      font-family: 'Alegreya', serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
    }
  }
`;
function vz() {
  const [e, t] = w.useState(!1),
    n = w.useRef(null);
  return (
    w.useEffect(() => {
      const r = n.current,
        i = new IntersectionObserver(
          (o) => {
            const [a] = o;
            a.intersectionRatio > 0.15
              ? t(!0)
              : a.intersectionRatio < 0.1 && t(!1);
          },
          { threshold: [0.1, 0.15] }
        );
      return (
        r && i.observe(r),
        () => {
          r && i.unobserve(r);
        }
      );
    }, []),
    [n, e]
  );
}
const vd = ({ children: e }) => {
    const [t, n] = vz();
    return _.jsx('div', {
      ref: t,
      className: `scroll-item ${n ? 'visible' : 'hidden'}`,
      children: e,
    });
  },
  xz = () => {
    const { t: e } = lr(),
      t = w.useMemo(
        () => [
          {
            title: 'actions',
            imageSrc: 'https://brutpizza.imgix.net/discount.png',
            to: '/menu#actions',
            aria: 'aria-label.actions',
          },
          {
            title: 'pizza',
            imageSrc: 'https://brutpizza.imgix.net/pizza/Mala_Vojvodjanka.png',
            to: '/menu#pizza',
            aria: 'aria-label.pizza',
          },
          {
            title: 'sandwiches',
            imageSrc: 'https://brutpizza.imgix.net/sandwiches/prsuta.png',
            to: '/menu#sandwiches',
            aria: 'aria-label.sandwiches',
          },
          {
            title: 'pancakes',
            imageSrc: 'https://brutpizza.imgix.net/nutela.png',
            to: '/menu#pancakes',
            aria: 'aria-label.pancakes',
          },
          {
            title: 'drinks',
            imageSrc: 'https://brutpizza.imgix.net/pepsi.png',
            to: '/menu#drinks',
            aria: 'aria-label.drinks',
          },
        ],
        []
      );
    return _.jsx(_.Fragment, {
      children: _.jsxs(yz, {
        children: [
          _.jsx('h2', { children: e('menu-categories-title') }),
          _.jsx('div', {
            className: 'menu-categories',
            children: t.map((n, r) =>
              _.jsx(
                vd,
                {
                  children: _.jsx(gz, {
                    front: _.jsxs('div', {
                      className: 'front-inner',
                      children: [
                        _.jsx('img', {
                          src: n.imageSrc,
                          alt: `${e(n.title)} ${e('alt.menu-category')}`,
                        }),
                        _.jsx('p', {
                          className: 'title',
                          children: e(n.title).toUpperCase(),
                        }),
                      ],
                    }),
                    back: _.jsx('div', {
                      children: _.jsx(Wv, {
                        to: n.to,
                        children: _.jsx(Y$, {
                          variant: 'outlined',
                          className: 'check-offer-btn',
                          'aria-label': e(n.aria),
                          children: e('check-offer'),
                        }),
                      }),
                    }),
                  }),
                },
                r
              )
            ),
          }),
        ],
      }),
    });
  },
  wz = ut.div`
  height: 100%;
  background-color: var(--color-background-2);
  color: var(--color-white);
  padding: 75px 16px 50px 16px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 767px) {
    padding-top: 115px;
  }
`,
  Sz = () => _.jsx(wz, { children: _.jsx(xz, {}) }),
  bz = [
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Brut.png',
      name: 'menu-pizza-brut-name',
      price: '850 / 1300 / 1850',
      ingredients: 'menu-pizza-brut-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Funghi.png',
      name: 'menu-pizza-funghi-name',
      price: '550 / 900 / 1400',
      ingredients: 'menu-pizza-funghi-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Corizo.png',
      name: 'menu-pizza-corizo-name',
      price: '950 / 1500 / 2100',
      ingredients: 'menu-pizza-corizo-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Madjarica.png',
      name: 'menu-pizza-madjarica-name',
      price: '750 / 1200 / 1750',
      ingredients: 'menu-pizza-madjarica-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Prosciutto.png',
      name: 'menu-pizza-prsuto-name',
      price: '850 / 1400 / 1950',
      ingredients: 'menu-pizza-prsuto-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Vojvodjanka.png',
      name: 'menu-pizza-vojvodjanka-name',
      price: '750 / 1200 / 1800',
      ingredients: 'menu-pizza-vojvodjanka-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Quattro Stragoni.png',
      name: 'menu-pizza-quattro_stagioni-name',
      price: '750 / 1200 / 1700',
      ingredients: 'menu-pizza-quattro_stagioni-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Kapricoza.png',
      name: 'menu-pizza-kapricoza-name',
      price: '600 / 1000 / 1600',
      ingredients: 'menu-pizza-kapricoza-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Carbonara.png',
      name: 'menu-pizza-karbonara-name',
      price: '700 / 1000 / 1600',
      ingredients: 'menu-pizza-karbonara-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Provolone.png',
      name: 'menu-pizza-provolone-name',
      price: '800 / 1200 / 1800',
      ingredients: 'menu-pizza-provolone-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Quattro Formaggi.png',
      name: 'menu-pizza-quattro_formaggi-name',
      price: '750 / 1150 / 1700',
      ingredients: 'menu-pizza-quattro_formaggi-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Margarita.png',
      name: 'menu-pizza-margarita-name',
      price: '550 / 800 / 1300',
      ingredients: 'menu-pizza-margarita-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Vegeterijana.png',
      name: 'menu-pizza-vegetarijana-name',
      price: '600 / 1000 / 1600',
      ingredients: 'menu-pizza-vegetarijana-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/pizza/Mala_Tuna.png',
      name: 'menu-pizza-tuna-name',
      price: '700 / 1100 / 1700',
      ingredients: 'menu-pizza-tuna-ingredients',
    },
    {
      imgSrc: '',
      name: 'menu-pizza-parce-name',
      price: '270',
      ingredients: '',
    },
  ],
  kz = [
    { name: 'menu-pizza_additions-pavlaka', price: '60' },
    { name: 'menu-pizza_additions-majonez', price: '60' },
    { name: 'menu-pizza_additions-kajmak', price: '100' },
    { name: 'menu-pizza_additions-jaje', price: '50' },
    { name: 'menu-pizza_additions-masline', price: '50' },
    { name: 'menu-pizza_additions-sampinjoni', price: '50' },
    { name: 'menu-pizza_additions-feferoni', price: '60' },
    { name: 'menu-pizza_additions-gauda', price: '80' },
    { name: 'menu-pizza_additions-mocarela', price: '150' },
    { name: 'menu-pizza_additions-feta', price: '80' },
    { name: 'menu-pizza_additions-provolone', price: '250' },
    { name: 'menu-pizza_additions-parmezan', price: '100' },
    { name: 'menu-pizza_additions-gorgonzola', price: '230' },
    { name: 'menu-pizza_additions-cedar', price: '230' },
    { name: 'menu-pizza_additions-prsuta', price: '160' },
    { name: 'menu-pizza_additions-pecenica', price: '140' },
    { name: 'menu-pizza_additions-suvi_vrat', price: '80' },
    { name: 'menu-pizza_additions-panceta', price: '150' },
    { name: 'menu-pizza_additions-kulen', price: '120' },
    { name: 'menu-pizza_additions-sunka', price: '70' },
    { name: 'menu-pizza_additions-pileca_prsa', price: '70' },
    { name: 'menu-pizza_additions-tuna', price: '200' },
  ],
  Cz = [
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/kulen.png',
      name: 'menu-sandwiches-kulen-name',
      price: '590',
      ingredients: 'menu-sandwiches-kulen-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/Pecenica.png',
      name: 'menu-sandwiches-pecenica-name',
      price: '590',
      ingredients: 'menu-sandwiches-pecenica-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/pileca_prsa.png',
      name: 'menu-sandwiches-pileca_prsa-name',
      price: '540',
      ingredients: 'menu-sandwiches-pileca_prsa-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/sunka.png',
      name: 'menu-sandwiches-sunka-name',
      price: '540',
      ingredients: 'menu-sandwiches-sunka-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/prsuta.png',
      name: 'menu-sandwiches-prsuta-name',
      price: '690',
      ingredients: 'menu-sandwiches-prsuta-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/suvi_vrat.png',
      name: 'menu-sandwiches-suvi_vrat-name',
      price: '590',
      ingredients: 'menu-sandwiches-suvi_vrat-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/Brut.png',
      name: 'menu-sandwiches-brut-name',
      price: '690',
      ingredients: 'menu-sandwiches-brut-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/madjarica.png',
      name: 'menu-sandwiches-madjarica-name',
      price: '590',
      ingredients: 'menu-sandwiches-madjarica-ingredients',
    },
    {
      imgSrc: 'https://brutpizza.imgix.net/sandwiches/tuna.png',
      name: 'menu-sandwiches-tuna-name',
      price: '570',
      ingredients: 'menu-sandwiches-tuna-ingredients',
    },
  ],
  Ez = [
    {
      imgSrc: '',
      name: 'menu-pancakes-eurokrem-name',
      price: '290',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-eurokrem_plazma-name',
      price: '300',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-eurokrem_plazma_mleko-name',
      price: '360',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-nutela-name',
      price: '300',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-nutela_plazma-name',
      price: '310',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-nutela_plazma_mleko-name',
      price: '370',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-eurokrem_plazma_banana-name',
      price: '370',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-nutela_plazma_banana-name',
      price: '370',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-svarcvald-name',
      price: '380',
      ingredients: 'menu-pancakes-svarcvald-ingredients',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-snikers-name',
      price: '380',
      ingredients: 'menu-pancakes-snikers-ingredients',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-ferero-name',
      price: '380',
      ingredients: 'menu-pancakes-ferero-ingredients',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-med_orasi-name',
      price: '270',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-pancakes-marmelada-name',
      price: '250',
      ingredients: '',
    },
  ],
  Pz = [
    { name: 'menu-pizza_additions-eurokrem', price: '80' },
    { name: 'menu-pizza_additions-nutela', price: '90' },
    { name: 'menu-pizza_additions-plazma', price: '60' },
    { name: 'menu-pizza_additions-plazma_mleko', price: '100' },
    { name: 'menu-pizza_additions-orasi', price: '60' },
    { name: 'menu-pizza_additions-lesnik', price: '60' },
    { name: 'menu-pizza_additions-kikiriki', price: '60' },
    { name: 'menu-pizza_additions-visnja', price: '60' },
    { name: 'menu-pizza_additions-banana', price: '60' },
  ],
  _z = [
    {
      imgSrc: '',
      name: 'menu-drinks-pepsi-name',
      price: '130',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-pepsi_max-name',
      price: '130',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-mirinda-name',
      price: '130',
      ingredients: '',
    },
    { imgSrc: '', name: 'menu-drinks-7up-name', price: '130', ingredients: '' },
    {
      imgSrc: '',
      name: 'menu-drinks-heineken-name',
      price: '250',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-apple-name',
      price: '150',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-orange-name',
      price: '150',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-peach-name',
      price: '150',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-knjaz_milos-name',
      price: '100',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-knjaz_milos_limun-name',
      price: '120',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-aqua_viva-name',
      price: '100',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-guarana-name',
      price: '130',
      ingredients: '',
    },
    {
      imgSrc: '',
      name: 'menu-drinks-guarana_joker-name',
      price: '150',
      ingredients: '',
    },
  ],
  Rz = [
    {
      imgSrc: '',
      name: 'menu-actions-carbonara',
      price: '1700',
      oldPrice: '1860',
      ingredients: '',
      isAction: 'true',
    },
    {
      imgSrc: '',
      name: 'menu-actions-vojvodjanka',
      price: '1900',
      oldPrice: '2060',
      ingredients: '',
      isAction: 'true',
    },
    {
      imgSrc: '',
      name: 'menu-actions-kapricoza',
      price: '1700',
      oldPrice: '1860',
      ingredients: '',
      isAction: 'true',
    },
    {
      imgSrc: '',
      name: 'menu-actions-parce',
      price: '340',
      oldPrice: '400',
      ingredients: '',
      isAction: 'true',
    },
  ],
  Gr = {
    pizza: bz,
    pizza_additions: kz,
    sandwiches: Cz,
    pancakes: Ez,
    pancakes_additions: Pz,
    drinks: _z,
    actions: Rz,
  },
  $z = tt(zO)`
  .MuiTabs-flexContainer {
    justify-content: space-between;
  }
`,
  ia = tt(uO)`
  text-transform: initial;
  min-width: 0;
  letter-spacing: 0.5px;
  padding: 0;
  overflow: unset;

  font-family: 'Alegreya', serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;

  &:hover::before {
    background-color: rgba(41, 40, 40, 0.04);
  }

  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    right: -1rem;
    height: 100%;
  }

  ${({ theme: e }) => e.breakpoints.up('md')} {
    min-width: 0;
  }

  &.actions-tab {
    color: var(--color-green);
  }
  &.pizza-tab {
    color: var(--color-blue);
  }
  &.sandwiches-tab {
    color: var(--color-white);
  }
  &.pancakes-tab {
    color: var(--color-blue);
  }
  &.drinks-tab {
    color: var(--color-red);
  }
`,
  Oz = ({ activeTab: e, setActiveTab: t }) =>
    _.jsxs($z, {
      value: e,
      onChange: (n, r) => {
        t(r);
      },
      className: 'tabs',
      sx: {
        [`& .${fl.indicator}`]: {
          height: 3,
          borderTopLeftRadius: '3px',
          borderTopRightRadius: '3px',
          backgroundColor: 'var(--color-green)',
        },
      },
      children: [
        _.jsx(ia, {
          disableRipple: !0,
          label: Zo('actions'),
          className: 'actions-tab',
        }),
        _.jsx(ia, {
          disableRipple: !0,
          label: Zo('pizza'),
          className: 'pizza-tab',
        }),
        _.jsx(ia, {
          disableRipple: !0,
          label: Zo('sandwiches'),
          className: 'sandwiches-tab',
        }),
        _.jsx(ia, {
          disableRipple: !0,
          label: Zo('pancakes'),
          className: 'pancakes-tab',
        }),
        _.jsx(ia, {
          disableRipple: !0,
          label: Zo('drinks'),
          className: 'drinks-tab',
        }),
      ],
    }),
  p0 = _p`
  .name {
    text-align: left;
    width: fit-content;
    max-width: 80%;
    font-size: 18px;
    color: var(--color-green);
  }
`,
  h0 = ut.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;

  img {
    border-radius: 15%;
  }

  &.action {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    ${p0};
    .name {
      width: 100%;
      font-size: 28px;
      text-align: center;
      max-width: unset;
      word-break: auto-phraze;
    }
    .old-price {
      text-decoration: line-through;
      margin-right: 8px;
      color: var(--color-red);
    }
    .price {
      font-size: 32px;
    }
    .action-divider {
      margin-top: 32px;
    }
  }
  .name-and-price {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    ${p0};

    .separator {
      border-bottom-style: dashed;
      border-bottom-width: 2px;
      border-bottom-color: var(--color-white);
      margin-left: 16px;
      margin-right: 16px;
      flex-grow: 1;
      height: 0;
    }

    .price {
      text-align: right;
      font-size: 16px;
      white-space: nowrap;
      color: var(--color-red);
    }
  }

  .ingredients {
    font-size: 12px;
    color: var(--color-white);
    text-align: left;
    white-space: pre-wrap;
  }
`,
  zz = '/placeholder.png',
  m0 = ({
    imgSrc: e,
    name: t,
    price: n,
    oldPrice: r,
    isAction: i = !1,
    ingredients: o,
    className: a,
  }) => {
    const { t: s } = lr();
    return i
      ? _.jsxs(h0, {
          className: Hi('action', a),
          children: [
            _.jsx('span', { className: 'name', children: s(t) }),
            _.jsx('span', { className: 'separator' }),
            _.jsx('span', { className: 'old-price', children: r }),
            _.jsxs('span', {
              className: 'price',
              children: [n, ' ', s('dinars')],
            }),
            _.jsx(lh, { className: 'action-divider' }),
          ],
        })
      : _.jsxs(h0, {
          className: a,
          children: [
            e &&
              _.jsx('img', {
                src: e,
                onError: ({ currentTarget: l }) => {
                  (l.onerror = null), (l.src = zz);
                },
                loading: 'lazy',
              }),
            _.jsxs('div', {
              className: 'name-and-price',
              children: [
                _.jsx('span', { className: 'name', children: s(t) }),
                _.jsx('span', { className: 'separator' }),
                _.jsxs('span', {
                  className: 'price',
                  children: [n, ' ', s('dinars')],
                }),
              ],
            }),
            o && _.jsx('p', { className: 'ingredients', children: s(o) }),
          ],
        });
  },
  Tz = ut.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 300px;
  color: var(--color-white);

  .section-items {
    display: flex;
    flex-direction: column;
    gap: 32px;
    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
    @media (min-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .section-title {
    font-size: 32px;
    color: var(--color-white);
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--color-white);
  }

  .section-additions-item {
    gap: unset;
  }
`,
  Nz = ({
    sectionId: e,
    className: t,
    heading: n,
    subtitle: r,
    items: i,
    additions: o,
  }) =>
    _.jsxs(Tz, {
      id: e,
      className: t,
      children: [
        n,
        _.jsx('div', {
          className: 'section-items',
          children:
            i == null
              ? void 0
              : i.map((a, s) =>
                  _.jsx(vd, { children: _.jsx(m0, { ...a }) }, s)
                ),
        }),
        !!o &&
          _.jsxs(_.Fragment, {
            children: [
              _.jsx('h2', { className: 'section-subtitle', children: r }),
              _.jsx('div', {
                className: 'section-additions',
                children: _.jsx(vd, {
                  children:
                    o == null
                      ? void 0
                      : o.map((a, s) =>
                          _.jsx(
                            m0,
                            { className: 'section-additions-item', ...a },
                            s
                          )
                        ),
                }),
              }),
            ],
          }),
      ],
    }),
  Lz = ut.div`
  padding-top: 75px;
  height: 100%;
  background-color: var(--color-background-2);

  .sizes {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    div {
      flex: 1;
    }
  }

  .page-content {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 16px;

    .divider {
      background: var(--color-white);
      position: relative;
      height: 1px;
      background: linear-gradient(
        90deg,
        var(--color-green) 0%,
        var(--color-green) 33%,
        var(--color-white) 33%,
        var(--color-white) 66%,
        var(--color-red) 66%,
        var(--color-red) 100%
      );
    }

    .slide-enter {
      transform: ${({ direction: e }) =>
        e === 'to-right' ? ' translateX(-100%)' : ' translateX(100%)'};
    }

    .slide-enter-active {
      transform: translateX(0%);
      transition: transform 300ms ease-in-out;
    }
  }
`,
  jz = () => {
    const { t: e } = lr(),
      { hash: t } = Si(),
      n = w.useRef(null),
      r = w.useMemo(
        () =>
          _.jsxs('div', {
            className: 'sizes',
            children: [
              _.jsxs('div', {
                className: 'small',
                children: [
                  _.jsx('p', { className: 'label', children: e('small') }),
                  _.jsxs('p', { children: ['26', e('cm')] }),
                ],
              }),
              _.jsxs('div', {
                className: 'large',
                children: [
                  _.jsx('p', { className: 'label', children: e('large') }),
                  _.jsxs('p', { children: ['32', e('cm')] }),
                ],
              }),
              _.jsxs('div', {
                className: 'xlarge',
                children: [
                  _.jsx('p', { className: 'label', children: e('xlarge') }),
                  _.jsxs('p', { children: ['50', e('cm')] }),
                ],
              }),
            ],
          }),
        [e]
      ),
      i = w.useMemo(
        () => [
          {
            sectionId: 'actions',
            className: 'actions',
            title: e('actions'),
            items: Gr.actions,
          },
          {
            sectionId: 'pizza',
            className: 'pizza',
            title: e('pizza'),
            items: Gr.pizza,
            subtitle: e('additions'),
            additions: Gr.pizza_additions,
            heading: r,
          },
          {
            sectionId: 'sandwiches',
            className: 'sandwiches',
            title: e('sandwiches'),
            items: Gr.sandwiches,
          },
          {
            sectionId: 'pancakes',
            className: 'pancakes',
            title: e('pancakes'),
            items: Gr.pancakes,
            subtitle: e('additions'),
            additions: Gr.pancakes_additions,
          },
          {
            sectionId: 'drinks',
            className: 'drinks',
            title: e('drinks'),
            items: Gr.drinks,
          },
        ],
        [r, e]
      ),
      o = w.useMemo(() => {
        const f = i.findIndex((d) => d.sectionId === t.substring(1));
        return f !== -1 ? f : 0;
      }, [i, t]),
      [a, s] = w.useState(o),
      [l, u] = w.useState('to-left');
    return _.jsxs(Lz, {
      direction: l,
      children: [
        _.jsx(Nx, { title: 'menu' }),
        _.jsxs('div', {
          className: 'page-content',
          children: [
            _.jsx(Oz, {
              activeTab: a,
              setActiveTab: (f) => {
                u(f > a ? 'to-left' : 'to-right'), s(f);
              },
            }),
            _.jsx(lh, {}),
            _.jsx(oc, {
              children: _.jsx(
                eh,
                {
                  timeout: 300,
                  classNames: 'slide',
                  nodeRef: n,
                  children: _.jsx('div', {
                    ref: n,
                    children: _.jsx(Nz, { ...i[a] }),
                  }),
                },
                a
              ),
            }),
          ],
        }),
      ],
    });
  },
  Gn = { HOME: '/', MENU: '/menu', ABOUT: '/about' },
  Mz = [
    {
      path: '/',
      element: _.jsx(ez, {}),
      children: [
        { path: '/', element: _.jsx(Sz, {}) },
        { path: Gn.MENU, element: _.jsx(jz, {}) },
        { path: Gn.ABOUT, element: _.jsx(fz, {}) },
      ],
    },
  ],
  Iz = zk(Mz);
Jc.createRoot(document.getElementById('root')).render(
  _.jsx(w.Suspense, {
    fallback: _.jsx('div', {
      className: 'spinner-wrapper',
      children: _.jsx(iO, {}),
    }),
    children: _.jsx(Fk, { router: Iz }),
  })
);
