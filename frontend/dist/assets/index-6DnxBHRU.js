function Jf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(r, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get ? l : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = n(s);
    fetch(s.href, l);
  }
})();
function Xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ec = { exports: {} },
  ll = {},
  tc = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = Symbol.for("react.element"),
  Gf = Symbol.for("react.portal"),
  Yf = Symbol.for("react.fragment"),
  Zf = Symbol.for("react.strict_mode"),
  em = Symbol.for("react.profiler"),
  tm = Symbol.for("react.provider"),
  nm = Symbol.for("react.context"),
  rm = Symbol.for("react.forward_ref"),
  sm = Symbol.for("react.suspense"),
  lm = Symbol.for("react.memo"),
  om = Symbol.for("react.lazy"),
  ha = Symbol.iterator;
function im(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ha && e[ha]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rc = Object.assign,
  sc = {};
function Jn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = sc),
    (this.updater = n || nc));
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = Jn.prototype;
function ai(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = sc),
    (this.updater = n || nc));
}
var ui = (ai.prototype = new lc());
ui.constructor = ai;
rc(ui, Jn.prototype);
ui.isPureReactComponent = !0;
var xa = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  ci = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    s = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      oc.call(t, r) && !ic.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Hr,
    type: e,
    key: l,
    ref: i,
    props: s,
    _owner: ci.current,
  };
}
function am(e, t) {
  return {
    $$typeof: Hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function di(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function um(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ga = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? um("" + e.key)
    : t.toString(36);
}
function vs(e, t, n, r, s) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hr:
          case Gf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + Pl(i, 0) : r),
      xa(s)
        ? ((n = ""),
          e != null && (n = e.replace(ga, "$&/") + "/"),
          vs(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (di(s) &&
            (s = am(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(ga, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), xa(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var u = r + Pl(l, a);
      i += vs(l, t, n, u, s);
    }
  else if (((u = im(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(l = e.next()).done; )
      ((l = l.value), (u = r + Pl(l, a++)), (i += vs(l, t, n, u, s)));
  else if (l === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function es(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    vs(e, r, "", "", function (l) {
      return t.call(n, l, s++);
    }),
    r
  );
}
function cm(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  ys = { transition: null },
  dm = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: ys,
    ReactCurrentOwner: ci,
  };
function uc() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: es,
  forEach: function (e, t, n) {
    es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!di(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
U.Component = Jn;
U.Fragment = Yf;
U.Profiler = em;
U.PureComponent = ai;
U.StrictMode = Zf;
U.Suspense = sm;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
U.act = uc;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = rc({}, e.props),
    s = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = ci.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      oc.call(t, u) &&
        !ic.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Hr, type: e.type, key: s, ref: l, props: r, _owner: i };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: nm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tm, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = ac;
U.createFactory = function (e) {
  var t = ac.bind(null, e);
  return ((t.type = e), t);
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: rm, render: e };
};
U.isValidElement = di;
U.lazy = function (e) {
  return { $$typeof: om, _payload: { _status: -1, _result: e }, _init: cm };
};
U.memo = function (e, t) {
  return { $$typeof: lm, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = ys.transition;
  ys.transition = {};
  try {
    e();
  } finally {
    ys.transition = t;
  }
};
U.unstable_act = uc;
U.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Pe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
U.useId = function () {
  return Pe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Pe.current.useRef(e);
};
U.useState = function (e) {
  return Pe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Pe.current.useTransition();
};
U.version = "18.3.1";
tc.exports = U;
var N = tc.exports;
const fi = Xf(N),
  fm = Jf({ __proto__: null, default: fi }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mm = N,
  pm = Symbol.for("react.element"),
  hm = Symbol.for("react.fragment"),
  xm = Object.prototype.hasOwnProperty,
  gm = mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r,
    s = {},
    l = null,
    i = null;
  (n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) xm.call(t, r) && !vm.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: pm,
    type: e,
    key: l,
    ref: i,
    props: s,
    _owner: gm.current,
  };
}
ll.Fragment = hm;
ll.jsx = cc;
ll.jsxs = cc;
ec.exports = ll;
var o = ec.exports,
  oo = {},
  dc = { exports: {} },
  $e = {},
  fc = { exports: {} },
  mc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, D) {
    var z = P.length;
    P.push(D);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        J = P[B];
      if (0 < s(J, D)) ((P[B] = D), (P[z] = J), (z = B));
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var D = P[0],
      z = P.pop();
    if (z !== D) {
      P[0] = z;
      e: for (var B = 0, J = P.length, pt = J >>> 1; B < pt; ) {
        var V = 2 * (B + 1) - 1,
          be = P[V],
          et = V + 1,
          ht = P[et];
        if (0 > s(be, z))
          et < J && 0 > s(ht, be)
            ? ((P[B] = ht), (P[et] = z), (B = et))
            : ((P[B] = be), (P[V] = z), (B = V));
        else if (et < J && 0 > s(ht, z)) ((P[B] = ht), (P[et] = z), (B = et));
        else break e;
      }
    }
    return D;
  }
  function s(P, D) {
    var z = P.sortIndex - D.sortIndex;
    return z !== 0 ? z : P.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    m = 3,
    g = !1,
    w = !1,
    y = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(P) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= P)
        (r(c), (D.sortIndex = D.expirationTime), t(u, D));
      else break;
      D = n(c);
    }
  }
  function S(P) {
    if (((y = !1), x(P), !w))
      if (n(u) !== null) ((w = !0), ce(E));
      else {
        var D = n(c);
        D !== null && _t(S, D.startTime - P);
      }
  }
  function E(P, D) {
    ((w = !1), y && ((y = !1), h(_), (_ = -1)), (g = !0));
    var z = m;
    try {
      for (
        x(D), f = n(u);
        f !== null && (!(f.expirationTime > D) || (P && !X()));
      ) {
        var B = f.callback;
        if (typeof B == "function") {
          ((f.callback = null), (m = f.priorityLevel));
          var J = B(f.expirationTime <= D);
          ((D = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(u) && r(u),
            x(D));
        } else r(u);
        f = n(u);
      }
      if (f !== null) var pt = !0;
      else {
        var V = n(c);
        (V !== null && _t(S, V.startTime - D), (pt = !1));
      }
      return pt;
    } finally {
      ((f = null), (m = z), (g = !1));
    }
  }
  var R = !1,
    L = null,
    _ = -1,
    $ = 5,
    F = -1;
  function X() {
    return !(e.unstable_now() - F < $);
  }
  function H() {
    if (L !== null) {
      var P = e.unstable_now();
      F = P;
      var D = !0;
      try {
        D = L(!0, P);
      } finally {
        D ? C() : ((R = !1), (L = null));
      }
    } else R = !1;
  }
  var C;
  if (typeof p == "function")
    C = function () {
      p(H);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      K = I.port2;
    ((I.port1.onmessage = H),
      (C = function () {
        K.postMessage(null);
      }));
  } else
    C = function () {
      j(H, 0);
    };
  function ce(P) {
    ((L = P), R || ((R = !0), C()));
  }
  function _t(P, D) {
    _ = j(function () {
      P(e.unstable_now());
    }, D);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), ce(E));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = m;
      }
      var z = m;
      m = D;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, D) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = m;
      m = P;
      try {
        return D();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, D, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        P)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (P = {
          id: d++,
          callback: D,
          priorityLevel: P,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > B
          ? ((P.sortIndex = z),
            t(c, P),
            n(u) === null &&
              P === n(c) &&
              (y ? (h(_), (_ = -1)) : (y = !0), _t(S, z - B)))
          : ((P.sortIndex = J), t(u, P), w || g || ((w = !0), ce(E))),
        P
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (P) {
      var D = m;
      return function () {
        var z = m;
        m = D;
        try {
          return P.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    }));
})(mc);
fc.exports = mc;
var ym = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wm = N,
  Be = ym;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  kr = {};
function hn(e, t) {
  (Bn(e, t), Bn(e + "Capture", t));
}
function Bn(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  io = Object.prototype.hasOwnProperty,
  jm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  va = {},
  ya = {};
function Nm(e) {
  return io.call(ya, e)
    ? !0
    : io.call(va, e)
      ? !1
      : jm.test(e)
        ? (ya[e] = !0)
        : ((va[e] = !0), !1);
}
function Sm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function km(e, t, n, r) {
  if (t === null || typeof t > "u" || Sm(e, t, n, r)) return !0;
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
function Re(e, t, n, r, s, l, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i));
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Re(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mi = /[\-:]([a-z])/g;
function pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mi, pi);
    we[t] = new Re(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mi, pi);
    we[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(mi, pi);
  we[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Re(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hi(e, t, n, r) {
  var s = we.hasOwnProperty(t) ? we[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (km(t, n, s, r) && (n = null),
    r || s === null
      ? Nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for("react.element"),
  Sn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  xi = Symbol.for("react.strict_mode"),
  ao = Symbol.for("react.profiler"),
  hc = Symbol.for("react.provider"),
  xc = Symbol.for("react.context"),
  gi = Symbol.for("react.forward_ref"),
  uo = Symbol.for("react.suspense"),
  co = Symbol.for("react.suspense_list"),
  vi = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  gc = Symbol.for("react.offscreen"),
  wa = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wa && e[wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Rl;
function dr(e) {
  if (Rl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Rl = (t && t[1]) || "";
    }
  return (
    `
` +
    Rl +
    e
  );
}
var Ll = !1;
function Tl(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          l = r.stack.split(`
`),
          i = s.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && s[i] !== l[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (s[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || s[i] !== l[a])) {
                var u =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ll = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function bm(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Tl(e.type, !1)), e);
    case 11:
      return ((e = Tl(e.type.render, !1)), e);
    case 1:
      return ((e = Tl(e.type, !0)), e);
    default:
      return "";
  }
}
function fo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Sn:
      return "Portal";
    case ao:
      return "Profiler";
    case xi:
      return "StrictMode";
    case uo:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xc:
        return (e.displayName || "Context") + ".Consumer";
      case hc:
        return (e._context.displayName || "Context") + ".Provider";
      case gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vi:
        return (
          (t = e.displayName || null),
          t !== null ? t : fo(e.type) || "Memo"
        );
      case Rt:
        ((t = e._payload), (e = e._init));
        try {
          return fo(e(t));
        } catch {}
    }
  return null;
}
function Em(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fo(t);
    case 8:
      return t === xi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cm(e) {
  var t = vc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (i) {
          ((r = "" + i), l.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ns(e) {
  e._valueTracker || (e._valueTracker = Cm(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Os(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mo(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ja(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function wc(e, t) {
  ((t = t.checked), t != null && hi(e, "checked", t, !1));
}
function po(e, t) {
  wc(e, t);
  var n = Qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ho(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ho(e, t.type, Qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Na(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ho(e, t, n) {
  (t !== "number" || Os(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Qt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function xo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Qt(n) };
}
function jc(e, t) {
  var n = Qt(t.value),
    r = Qt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ka(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Nc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var rs,
  Sc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        rs = rs || document.createElement("div"),
          rs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = rs.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
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
  _m = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function (e) {
  _m.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hr[t] = hr[e]));
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hr.hasOwnProperty(e) && hr[e])
      ? ("" + t).trim()
      : t + "px";
}
function bc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = kc(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var Pm = se(
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
  },
);
function vo(e, t) {
  if (t) {
    if (Pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function yo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wo = null;
function yi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jo = null,
  zn = null,
  Fn = null;
function ba(e) {
  if ((e = Qr(e))) {
    if (typeof jo != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = cl(t)), jo(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  zn ? (Fn ? Fn.push(e) : (Fn = [e])) : (zn = e);
}
function Cc() {
  if (zn) {
    var e = zn,
      t = Fn;
    if (((Fn = zn = null), ba(e), t)) for (e = 0; e < t.length; e++) ba(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function Pc() {}
var Ol = !1;
function Rc(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return _c(e, t, n);
  } finally {
    ((Ol = !1), (zn !== null || Fn !== null) && (Pc(), Cc()));
  }
}
function Er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var No = !1;
if (Nt)
  try {
    var rr = {};
    (Object.defineProperty(rr, "passive", {
      get: function () {
        No = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr));
  } catch {
    No = !1;
  }
function Rm(e, t, n, r, s, l, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var xr = !1,
  As = null,
  Ds = !1,
  So = null,
  Lm = {
    onError: function (e) {
      ((xr = !0), (As = e));
    },
  };
function Tm(e, t, n, r, s, l, i, a, u) {
  ((xr = !1), (As = null), Rm.apply(Lm, arguments));
}
function Om(e, t, n, r, s, l, i, a, u) {
  if ((Tm.apply(this, arguments), xr)) {
    if (xr) {
      var c = As;
      ((xr = !1), (As = null));
    } else throw Error(b(198));
    Ds || ((Ds = !0), (So = c));
  }
}
function xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lc(e) {
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
function Ea(e) {
  if (xn(e) !== e) throw Error(b(188));
}
function Am(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xn(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var l = s.alternate;
    if (l === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === l.child) {
      for (l = s.child; l; ) {
        if (l === n) return (Ea(s), e);
        if (l === r) return (Ea(s), t);
        l = l.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) ((n = s), (r = l));
    else {
      for (var i = !1, a = s.child; a; ) {
        if (a === n) {
          ((i = !0), (n = s), (r = l));
          break;
        }
        if (a === r) {
          ((i = !0), (r = s), (n = l));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            ((i = !0), (n = l), (r = s));
            break;
          }
          if (a === r) {
            ((i = !0), (r = l), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Tc(e) {
  return ((e = Am(e)), e !== null ? Oc(e) : null);
}
function Oc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ac = Be.unstable_scheduleCallback,
  Ca = Be.unstable_cancelCallback,
  Dm = Be.unstable_shouldYield,
  zm = Be.unstable_requestPaint,
  oe = Be.unstable_now,
  Fm = Be.unstable_getCurrentPriorityLevel,
  wi = Be.unstable_ImmediatePriority,
  Dc = Be.unstable_UserBlockingPriority,
  zs = Be.unstable_NormalPriority,
  Im = Be.unstable_LowPriority,
  zc = Be.unstable_IdlePriority,
  ol = null,
  ft = null;
function Mm(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : $m,
  Um = Math.log,
  Bm = Math.LN2;
function $m(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Um(e) / Bm) | 0)) | 0);
}
var ss = 64,
  ls = 4194304;
function mr(e) {
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
function Fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? (r = mr(a)) : ((l &= i), l !== 0 && (r = mr(l)));
  } else ((i = n & ~s), i !== 0 ? (r = mr(i)) : l !== 0 && (r = mr(l)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (l = t & -t), s >= l || (s === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - lt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Hm(e, t) {
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
function Vm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;
  ) {
    var i = 31 - lt(l),
      a = 1 << i,
      u = s[i];
    (u === -1
      ? (!(a & n) || a & r) && (s[i] = Hm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (l &= ~a));
  }
}
function ko(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fc() {
  var e = ss;
  return ((ss <<= 1), !(ss & 4194240) && (ss = 64), e);
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n));
}
function Wm(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - lt(n),
      l = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~l));
  }
}
function ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var q = 0;
function Ic(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Mc,
  Ni,
  Uc,
  Bc,
  $c,
  bo = !1,
  os = [],
  Ft = null,
  It = null,
  Mt = null,
  Cr = new Map(),
  _r = new Map(),
  Tt = [],
  Qm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function _a(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function sr(e, t, n, r, s, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [s],
      }),
      t !== null && ((t = Qr(t)), t !== null && Ni(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function qm(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((Ft = sr(Ft, e, t, n, r, s)), !0);
    case "dragenter":
      return ((It = sr(It, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Mt = sr(Mt, e, t, n, r, s)), !0);
    case "pointerover":
      var l = s.pointerId;
      return (Cr.set(l, sr(Cr.get(l) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (l = s.pointerId),
        _r.set(l, sr(_r.get(l) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lc(n)), t !== null)) {
          ((e.blockedOn = t),
            $c(e.priority, function () {
              Uc(n);
            }));
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
function ws(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((wo = r), n.target.dispatchEvent(r), (wo = null));
    } else return ((t = Qr(n)), t !== null && Ni(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Pa(e, t, n) {
  ws(e) && n.delete(t);
}
function Km() {
  ((bo = !1),
    Ft !== null && ws(Ft) && (Ft = null),
    It !== null && ws(It) && (It = null),
    Mt !== null && ws(Mt) && (Mt = null),
    Cr.forEach(Pa),
    _r.forEach(Pa));
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bo ||
      ((bo = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Km)));
}
function Pr(e) {
  function t(s) {
    return lr(s, e);
  }
  if (0 < os.length) {
    lr(os[0], e);
    for (var n = 1; n < os.length; n++) {
      var r = os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && lr(Ft, e),
      It !== null && lr(It, e),
      Mt !== null && lr(Mt, e),
      Cr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    (Hc(n), n.blockedOn === null && Tt.shift());
}
var In = Et.ReactCurrentBatchConfig,
  Is = !0;
function Jm(e, t, n, r) {
  var s = q,
    l = In.transition;
  In.transition = null;
  try {
    ((q = 1), Si(e, t, n, r));
  } finally {
    ((q = s), (In.transition = l));
  }
}
function Xm(e, t, n, r) {
  var s = q,
    l = In.transition;
  In.transition = null;
  try {
    ((q = 4), Si(e, t, n, r));
  } finally {
    ((q = s), (In.transition = l));
  }
}
function Si(e, t, n, r) {
  if (Is) {
    var s = Eo(e, t, n, r);
    if (s === null) (Vl(e, t, r, Ms, n), _a(e, r));
    else if (qm(s, e, t, n, r)) r.stopPropagation();
    else if ((_a(e, r), t & 4 && -1 < Qm.indexOf(e))) {
      for (; s !== null; ) {
        var l = Qr(s);
        if (
          (l !== null && Mc(l),
          (l = Eo(e, t, n, r)),
          l === null && Vl(e, t, r, Ms, n),
          l === s)
        )
          break;
        s = l;
      }
      s !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Ms = null;
function Eo(e, t, n, r) {
  if (((Ms = null), (e = yi(r)), (e = en(e)), e !== null))
    if (((t = xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ms = e), null);
}
function Vc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fm()) {
        case wi:
          return 1;
        case Dc:
          return 4;
        case zs:
        case Im:
          return 16;
        case zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  ki = null,
  js = null;
function Wc() {
  if (js) return js;
  var e,
    t = ki,
    n = t.length,
    r,
    s = "value" in At ? At.value : At.textContent,
    l = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[l - r]; r++);
  return (js = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Ns(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function is() {
  return !0;
}
function Ra() {
  return !1;
}
function He(e) {
  function t(n, r, s, l, i) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? is
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = is));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = is));
      },
      persist: function () {},
      isPersistent: is,
    }),
    t
  );
}
var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bi = He(Xn),
  Wr = se({}, Xn, { view: 0, detail: 0 }),
  Gm = He(Wr),
  Dl,
  zl,
  or,
  il = se({}, Wr, {
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
    getModifierState: Ei,
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
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((Dl = e.screenX - or.screenX), (zl = e.screenY - or.screenY))
              : (zl = Dl = 0),
            (or = e)),
          Dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  La = He(il),
  Ym = se({}, il, { dataTransfer: 0 }),
  Zm = He(Ym),
  ep = se({}, Wr, { relatedTarget: 0 }),
  Fl = He(ep),
  tp = se({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  np = He(tp),
  rp = se({}, Xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sp = He(rp),
  lp = se({}, Xn, { data: 0 }),
  Ta = He(lp),
  op = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ap[e]) ? !!t[e] : !1;
}
function Ei() {
  return up;
}
var cp = se({}, Wr, {
    key: function (e) {
      if (e.key) {
        var t = op[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ns(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? ip[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ei,
    charCode: function (e) {
      return e.type === "keypress" ? Ns(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ns(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  dp = He(cp),
  fp = se({}, il, {
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
  Oa = He(fp),
  mp = se({}, Wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ei,
  }),
  pp = He(mp),
  hp = se({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xp = He(hp),
  gp = se({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vp = He(gp),
  yp = [9, 13, 27, 32],
  Ci = Nt && "CompositionEvent" in window,
  gr = null;
Nt && "documentMode" in document && (gr = document.documentMode);
var wp = Nt && "TextEvent" in window && !gr,
  Qc = Nt && (!Ci || (gr && 8 < gr && 11 >= gr)),
  Aa = " ",
  Da = !1;
function qc(e, t) {
  switch (e) {
    case "keyup":
      return yp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kc(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var bn = !1;
function jp(e, t) {
  switch (e) {
    case "compositionend":
      return Kc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Da = !0), Aa);
    case "textInput":
      return ((e = t.data), e === Aa && Da ? null : e);
    default:
      return null;
  }
}
function Np(e, t) {
  if (bn)
    return e === "compositionend" || (!Ci && qc(e, t))
      ? ((e = Wc()), (js = ki = At = null), (bn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sp[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  (Ec(r),
    (t = Us(t, "onChange")),
    0 < t.length &&
      ((n = new bi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var vr = null,
  Rr = null;
function kp(e) {
  od(e, 0);
}
function al(e) {
  var t = _n(e);
  if (yc(t)) return e;
}
function bp(e, t) {
  if (e === "change") return t;
}
var Xc = !1;
if (Nt) {
  var Il;
  if (Nt) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var Fa = document.createElement("div");
      (Fa.setAttribute("oninput", "return;"),
        (Ml = typeof Fa.oninput == "function"));
    }
    Il = Ml;
  } else Il = !1;
  Xc = Il && (!document.documentMode || 9 < document.documentMode);
}
function Ia() {
  vr && (vr.detachEvent("onpropertychange", Gc), (Rr = vr = null));
}
function Gc(e) {
  if (e.propertyName === "value" && al(Rr)) {
    var t = [];
    (Jc(t, Rr, e, yi(e)), Rc(kp, t));
  }
}
function Ep(e, t, n) {
  e === "focusin"
    ? (Ia(), (vr = t), (Rr = n), vr.attachEvent("onpropertychange", Gc))
    : e === "focusout" && Ia();
}
function Cp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Rr);
}
function _p(e, t) {
  if (e === "click") return al(t);
}
function Pp(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Rp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : Rp;
function Lr(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!io.call(t, s) || !it(e[s], t[s])) return !1;
  }
  return !0;
}
function Ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ua(e, t) {
  var n = Ma(e);
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
    n = Ma(n);
  }
}
function Yc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Yc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zc() {
  for (var e = window, t = Os(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Os(e.document);
  }
  return t;
}
function _i(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Lp(e) {
  var t = Zc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Yc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _i(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          l = Math.min(r.start, s);
        ((r = r.end === void 0 ? l : Math.min(r.end, s)),
          !e.extend && l > r && ((s = r), (r = l), (l = s)),
          (s = Ua(n, l)));
        var i = Ua(n, r);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Tp = Nt && "documentMode" in document && 11 >= document.documentMode,
  En = null,
  Co = null,
  yr = null,
  _o = !1;
function Ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    En == null ||
    En !== Os(r) ||
    ((r = En),
    "selectionStart" in r && _i(r)
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
    (yr && Lr(yr, r)) ||
      ((yr = r),
      (r = Us(Co, "onSelect")),
      0 < r.length &&
        ((t = new bi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function as(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: as("Animation", "AnimationEnd"),
    animationiteration: as("Animation", "AnimationIteration"),
    animationstart: as("Animation", "AnimationStart"),
    transitionend: as("Transition", "TransitionEnd"),
  },
  Ul = {},
  ed = {};
Nt &&
  ((ed = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function ul(e) {
  if (Ul[e]) return Ul[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ed) return (Ul[e] = t[n]);
  return e;
}
var td = ul("animationend"),
  nd = ul("animationiteration"),
  rd = ul("animationstart"),
  sd = ul("transitionend"),
  ld = new Map(),
  $a =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Kt(e, t) {
  (ld.set(e, t), hn(t, [e]));
}
for (var Bl = 0; Bl < $a.length; Bl++) {
  var $l = $a[Bl],
    Op = $l.toLowerCase(),
    Ap = $l[0].toUpperCase() + $l.slice(1);
  Kt(Op, "on" + Ap);
}
Kt(td, "onAnimationEnd");
Kt(nd, "onAnimationIteration");
Kt(rd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(sd, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Om(r, t, void 0, e), (e.currentTarget = null));
}
function od(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== l && s.isPropagationStopped())) break e;
          (Ha(s, a, c), (l = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== l && s.isPropagationStopped())
          )
            break e;
          (Ha(s, a, c), (l = u));
        }
    }
  }
  if (Ds) throw ((e = So), (Ds = !1), (So = null), e);
}
function Z(e, t) {
  var n = t[Oo];
  n === void 0 && (n = t[Oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (id(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  (t && (r |= 4), id(n, e, r, t));
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[us]) {
    ((e[us] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Dp.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[us] || ((t[us] = !0), Hl("selectionchange", !1, t));
  }
}
function id(e, t, n, r) {
  switch (Vc(t)) {
    case 1:
      var s = Jm;
      break;
    case 4:
      s = Xm;
      break;
    default:
      s = Si;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !No ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function Vl(e, t, n, r, s) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = en(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Rc(function () {
    var c = l,
      d = yi(n),
      f = [];
    e: {
      var m = ld.get(e);
      if (m !== void 0) {
        var g = bi,
          w = e;
        switch (e) {
          case "keypress":
            if (Ns(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = dp;
            break;
          case "focusin":
            ((w = "focus"), (g = Fl));
            break;
          case "focusout":
            ((w = "blur"), (g = Fl));
            break;
          case "beforeblur":
          case "afterblur":
            g = Fl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = La;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Zm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = pp;
            break;
          case td:
          case nd:
          case rd:
            g = np;
            break;
          case sd:
            g = xp;
            break;
          case "scroll":
            g = Gm;
            break;
          case "wheel":
            g = vp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = sp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Oa;
        }
        var y = (t & 4) !== 0,
          j = !y && e === "scroll",
          h = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var p = c, x; p !== null; ) {
          x = p;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              h !== null && ((S = Er(p, h)), S != null && y.push(Or(p, S, x)))),
            j)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((m = new g(m, w, null, n, d)), f.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== wo &&
            (w = n.relatedTarget || n.fromElement) &&
            (en(w) || w[St]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? en(w) : null),
              w !== null &&
                ((j = xn(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((y = La),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Oa),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (j = g == null ? m : _n(g)),
            (x = w == null ? m : _n(w)),
            (m = new y(S, p + "leave", g, n, d)),
            (m.target = j),
            (m.relatedTarget = x),
            (S = null),
            en(d) === c &&
              ((y = new y(h, p + "enter", w, n, d)),
              (y.target = x),
              (y.relatedTarget = j),
              (S = y)),
            (j = S),
            g && w)
          )
            t: {
              for (y = g, h = w, p = 0, x = y; x; x = wn(x)) p++;
              for (x = 0, S = h; S; S = wn(S)) x++;
              for (; 0 < p - x; ) ((y = wn(y)), p--);
              for (; 0 < x - p; ) ((h = wn(h)), x--);
              for (; p--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                ((y = wn(y)), (h = wn(h)));
              }
              y = null;
            }
          else y = null;
          (g !== null && Va(f, m, g, y, !1),
            w !== null && j !== null && Va(f, j, w, y, !0));
        }
      }
      e: {
        if (
          ((m = c ? _n(c) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var E = bp;
        else if (za(m))
          if (Xc) E = Pp;
          else {
            E = Cp;
            var R = Ep;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = _p);
        if (E && (E = E(e, c))) {
          Jc(f, E, n, d);
          break e;
        }
        (R && R(e, m, c),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            ho(m, "number", m.value));
      }
      switch (((R = c ? _n(c) : window), e)) {
        case "focusin":
          (za(R) || R.contentEditable === "true") &&
            ((En = R), (Co = c), (yr = null));
          break;
        case "focusout":
          yr = Co = En = null;
          break;
        case "mousedown":
          _o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((_o = !1), Ba(f, n, d));
          break;
        case "selectionchange":
          if (Tp) break;
        case "keydown":
        case "keyup":
          Ba(f, n, d);
      }
      var L;
      if (Ci)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        bn
          ? qc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      (_ &&
        (Qc &&
          n.locale !== "ko" &&
          (bn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && bn && (L = Wc())
            : ((At = d),
              (ki = "value" in At ? At.value : At.textContent),
              (bn = !0))),
        (R = Us(c, _)),
        0 < R.length &&
          ((_ = new Ta(_, e, null, n, d)),
          f.push({ event: _, listeners: R }),
          L ? (_.data = L) : ((L = Kc(n)), L !== null && (_.data = L)))),
        (L = wp ? jp(e, n) : Np(e, n)) &&
          ((c = Us(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Ta("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = L))));
    }
    od(f, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      l = s.stateNode;
    (s.tag === 5 &&
      l !== null &&
      ((s = l),
      (l = Er(e, n)),
      l != null && r.unshift(Or(e, l, s)),
      (l = Er(e, t)),
      l != null && r.push(Or(e, l, s))),
      (e = e.return));
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Va(e, t, n, r, s) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = Er(n, l)), u != null && i.unshift(Or(n, u, a)))
        : s || ((u = Er(n, l)), u != null && i.push(Or(n, u, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var zp = /\r\n?/g,
  Fp = /\u0000|\uFFFD/g;
function Wa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zp,
      `
`,
    )
    .replace(Fp, "");
}
function cs(e, t, n) {
  if (((t = Wa(t)), Wa(e) !== t && n)) throw Error(b(425));
}
function Bs() {}
var Po = null,
  Ro = null;
function Lo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  Ip = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qa = typeof Promise == "function" ? Promise : void 0,
  Mp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qa < "u"
        ? function (e) {
            return Qa.resolve(null).then(e).catch(Up);
          }
        : To;
function Up(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Pr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Pr(t);
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + Gn,
  Ar = "__reactProps$" + Gn,
  St = "__reactContainer$" + Gn,
  Oo = "__reactEvents$" + Gn,
  Bp = "__reactListeners$" + Gn,
  $p = "__reactHandles$" + Gn;
function en(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qa(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = qa(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Qr(e) {
  return (
    (e = e[dt] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function cl(e) {
  return e[Ar] || null;
}
var Ao = [],
  Pn = -1;
function Jt(e) {
  return { current: e };
}
function ee(e) {
  0 > Pn || ((e.current = Ao[Pn]), (Ao[Pn] = null), Pn--);
}
function Y(e, t) {
  (Pn++, (Ao[Pn] = e.current), (e.current = t));
}
var qt = {},
  ke = Jt(qt),
  Ae = Jt(!1),
  an = qt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    l;
  for (l in n) s[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function De(e) {
  return ((e = e.childContextTypes), e != null);
}
function $s() {
  (ee(Ae), ee(ke));
}
function Ka(e, t, n) {
  if (ke.current !== qt) throw Error(b(168));
  (Y(ke, t), Y(Ae, n));
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(b(108, Em(e) || "Unknown", s));
  return se({}, n, r);
}
function Hs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qt),
    (an = ke.current),
    Y(ke, e),
    Y(Ae, Ae.current),
    !0
  );
}
function Ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  (n
    ? ((e = ad(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Ae),
      ee(ke),
      Y(ke, e))
    : ee(Ae),
    Y(Ae, n));
}
var gt = null,
  dl = !1,
  Ql = !1;
function ud(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function Hp(e) {
  ((dl = !0), ud(e));
}
function Xt() {
  if (!Ql && gt !== null) {
    Ql = !0;
    var e = 0,
      t = q;
    try {
      var n = gt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((gt = null), (dl = !1));
    } catch (s) {
      throw (gt !== null && (gt = gt.slice(e + 1)), Ac(wi, Xt), s);
    } finally {
      ((q = t), (Ql = !1));
    }
  }
  return null;
}
var Rn = [],
  Ln = 0,
  Vs = null,
  Ws = 0,
  qe = [],
  Ke = 0,
  un = null,
  vt = 1,
  yt = "";
function Yt(e, t) {
  ((Rn[Ln++] = Ws), (Rn[Ln++] = Vs), (Vs = e), (Ws = t));
}
function cd(e, t, n) {
  ((qe[Ke++] = vt), (qe[Ke++] = yt), (qe[Ke++] = un), (un = e));
  var r = vt;
  e = yt;
  var s = 32 - lt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var l = 32 - lt(t) + s;
  if (30 < l) {
    var i = s - (s % 5);
    ((l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (vt = (1 << (32 - lt(t) + s)) | (n << s) | r),
      (yt = l + e));
  } else ((vt = (1 << l) | (n << s) | r), (yt = e));
}
function Pi(e) {
  e.return !== null && (Yt(e, 1), cd(e, 1, 0));
}
function Ri(e) {
  for (; e === Vs; )
    ((Vs = Rn[--Ln]), (Rn[Ln] = null), (Ws = Rn[--Ln]), (Rn[Ln] = null));
  for (; e === un; )
    ((un = qe[--Ke]),
      (qe[Ke] = null),
      (yt = qe[--Ke]),
      (qe[Ke] = null),
      (vt = qe[--Ke]),
      (qe[Ke] = null));
}
var Ue = null,
  Me = null,
  te = !1,
  st = null;
function dd(e, t) {
  var n = Je(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Xa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (Me = Ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: vt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (te) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Xa(e, t)) {
        if (Do(e)) throw Error(b(418));
        t = Ut(n.nextSibling);
        var r = Ue;
        t && Xa(e, t)
          ? dd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ue = e));
      }
    } else {
      if (Do(e)) throw Error(b(418));
      ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ue = e));
    }
  }
}
function Ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function ds(e) {
  if (e !== Ue) return !1;
  if (!te) return (Ga(e), (te = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Lo(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (Do(e)) throw (fd(), Error(b(418)));
    for (; t; ) (dd(e, t), (t = Ut(t.nextSibling)));
  }
  if ((Ga(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ue ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function fd() {
  for (var e = Me; e; ) e = Ut(e.nextSibling);
}
function Hn() {
  ((Me = Ue = null), (te = !1));
}
function Li(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Vp = Et.ReactCurrentBatchConfig;
function ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var s = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = s.refs;
            i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function fs(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ya(e) {
  var t = e._init;
  return t(e._payload);
}
function md(e) {
  function t(h, p) {
    if (e) {
      var x = h.deletions;
      x === null ? ((h.deletions = [p]), (h.flags |= 16)) : x.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) (t(h, p), (p = p.sibling));
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      (p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling));
    return h;
  }
  function s(h, p) {
    return ((h = Vt(h, p)), (h.index = 0), (h.sibling = null), h);
  }
  function l(h, p, x) {
    return (
      (h.index = x),
      e
        ? ((x = h.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((h.flags |= 2), p) : x)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function i(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function a(h, p, x, S) {
    return p === null || p.tag !== 6
      ? ((p = Zl(x, h.mode, S)), (p.return = h), p)
      : ((p = s(p, x)), (p.return = h), p);
  }
  function u(h, p, x, S) {
    var E = x.type;
    return E === kn
      ? d(h, p, x.props.children, S, x.key)
      : p !== null &&
          (p.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Rt &&
              Ya(E) === p.type))
        ? ((S = s(p, x.props)), (S.ref = ir(h, p, x)), (S.return = h), S)
        : ((S = Ps(x.type, x.key, x.props, null, h.mode, S)),
          (S.ref = ir(h, p, x)),
          (S.return = h),
          S);
  }
  function c(h, p, x, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = eo(x, h.mode, S)), (p.return = h), p)
      : ((p = s(p, x.children || [])), (p.return = h), p);
  }
  function d(h, p, x, S, E) {
    return p === null || p.tag !== 7
      ? ((p = ln(x, h.mode, S, E)), (p.return = h), p)
      : ((p = s(p, x)), (p.return = h), p);
  }
  function f(h, p, x) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Zl("" + p, h.mode, x)), (p.return = h), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ts:
          return (
            (x = Ps(p.type, p.key, p.props, null, h.mode, x)),
            (x.ref = ir(h, null, p)),
            (x.return = h),
            x
          );
        case Sn:
          return ((p = eo(p, h.mode, x)), (p.return = h), p);
        case Rt:
          var S = p._init;
          return f(h, S(p._payload), x);
      }
      if (fr(p) || nr(p))
        return ((p = ln(p, h.mode, x, null)), (p.return = h), p);
      fs(h, p);
    }
    return null;
  }
  function m(h, p, x, S) {
    var E = p !== null ? p.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : a(h, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ts:
          return x.key === E ? u(h, p, x, S) : null;
        case Sn:
          return x.key === E ? c(h, p, x, S) : null;
        case Rt:
          return ((E = x._init), m(h, p, E(x._payload), S));
      }
      if (fr(x) || nr(x)) return E !== null ? null : d(h, p, x, S, null);
      fs(h, x);
    }
    return null;
  }
  function g(h, p, x, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((h = h.get(x) || null), a(p, h, "" + S, E));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ts:
          return (
            (h = h.get(S.key === null ? x : S.key) || null),
            u(p, h, S, E)
          );
        case Sn:
          return (
            (h = h.get(S.key === null ? x : S.key) || null),
            c(p, h, S, E)
          );
        case Rt:
          var R = S._init;
          return g(h, p, x, R(S._payload), E);
      }
      if (fr(S) || nr(S)) return ((h = h.get(x) || null), d(p, h, S, E, null));
      fs(p, S);
    }
    return null;
  }
  function w(h, p, x, S) {
    for (
      var E = null, R = null, L = p, _ = (p = 0), $ = null;
      L !== null && _ < x.length;
      _++
    ) {
      L.index > _ ? (($ = L), (L = null)) : ($ = L.sibling);
      var F = m(h, L, x[_], S);
      if (F === null) {
        L === null && (L = $);
        break;
      }
      (e && L && F.alternate === null && t(h, L),
        (p = l(F, p, _)),
        R === null ? (E = F) : (R.sibling = F),
        (R = F),
        (L = $));
    }
    if (_ === x.length) return (n(h, L), te && Yt(h, _), E);
    if (L === null) {
      for (; _ < x.length; _++)
        ((L = f(h, x[_], S)),
          L !== null &&
            ((p = l(L, p, _)),
            R === null ? (E = L) : (R.sibling = L),
            (R = L)));
      return (te && Yt(h, _), E);
    }
    for (L = r(h, L); _ < x.length; _++)
      (($ = g(L, h, _, x[_], S)),
        $ !== null &&
          (e && $.alternate !== null && L.delete($.key === null ? _ : $.key),
          (p = l($, p, _)),
          R === null ? (E = $) : (R.sibling = $),
          (R = $)));
    return (
      e &&
        L.forEach(function (X) {
          return t(h, X);
        }),
      te && Yt(h, _),
      E
    );
  }
  function y(h, p, x, S) {
    var E = nr(x);
    if (typeof E != "function") throw Error(b(150));
    if (((x = E.call(x)), x == null)) throw Error(b(151));
    for (
      var R = (E = null), L = p, _ = (p = 0), $ = null, F = x.next();
      L !== null && !F.done;
      _++, F = x.next()
    ) {
      L.index > _ ? (($ = L), (L = null)) : ($ = L.sibling);
      var X = m(h, L, F.value, S);
      if (X === null) {
        L === null && (L = $);
        break;
      }
      (e && L && X.alternate === null && t(h, L),
        (p = l(X, p, _)),
        R === null ? (E = X) : (R.sibling = X),
        (R = X),
        (L = $));
    }
    if (F.done) return (n(h, L), te && Yt(h, _), E);
    if (L === null) {
      for (; !F.done; _++, F = x.next())
        ((F = f(h, F.value, S)),
          F !== null &&
            ((p = l(F, p, _)),
            R === null ? (E = F) : (R.sibling = F),
            (R = F)));
      return (te && Yt(h, _), E);
    }
    for (L = r(h, L); !F.done; _++, F = x.next())
      ((F = g(L, h, _, F.value, S)),
        F !== null &&
          (e && F.alternate !== null && L.delete(F.key === null ? _ : F.key),
          (p = l(F, p, _)),
          R === null ? (E = F) : (R.sibling = F),
          (R = F)));
    return (
      e &&
        L.forEach(function (H) {
          return t(h, H);
        }),
      te && Yt(h, _),
      E
    );
  }
  function j(h, p, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === kn &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ts:
          e: {
            for (var E = x.key, R = p; R !== null; ) {
              if (R.key === E) {
                if (((E = x.type), E === kn)) {
                  if (R.tag === 7) {
                    (n(h, R.sibling),
                      (p = s(R, x.props.children)),
                      (p.return = h),
                      (h = p));
                    break e;
                  }
                } else if (
                  R.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Rt &&
                    Ya(E) === R.type)
                ) {
                  (n(h, R.sibling),
                    (p = s(R, x.props)),
                    (p.ref = ir(h, R, x)),
                    (p.return = h),
                    (h = p));
                  break e;
                }
                n(h, R);
                break;
              } else t(h, R);
              R = R.sibling;
            }
            x.type === kn
              ? ((p = ln(x.props.children, h.mode, S, x.key)),
                (p.return = h),
                (h = p))
              : ((S = Ps(x.type, x.key, x.props, null, h.mode, S)),
                (S.ref = ir(h, p, x)),
                (S.return = h),
                (h = S));
          }
          return i(h);
        case Sn:
          e: {
            for (R = x.key; p !== null; ) {
              if (p.key === R)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  (n(h, p.sibling),
                    (p = s(p, x.children || [])),
                    (p.return = h),
                    (h = p));
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            ((p = eo(x, h.mode, S)), (p.return = h), (h = p));
          }
          return i(h);
        case Rt:
          return ((R = x._init), j(h, p, R(x._payload), S));
      }
      if (fr(x)) return w(h, p, x, S);
      if (nr(x)) return y(h, p, x, S);
      fs(h, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = s(p, x)), (p.return = h), (h = p))
          : (n(h, p), (p = Zl(x, h.mode, S)), (p.return = h), (h = p)),
        i(h))
      : n(h, p);
  }
  return j;
}
var Vn = md(!0),
  pd = md(!1),
  Qs = Jt(null),
  qs = null,
  Tn = null,
  Ti = null;
function Oi() {
  Ti = Tn = qs = null;
}
function Ai(e) {
  var t = Qs.current;
  (ee(Qs), (e._currentValue = t));
}
function Fo(e, t, n) {
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
function Mn(e, t) {
  ((qs = e),
    (Ti = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null)));
}
function Ge(e) {
  var t = e._currentValue;
  if (Ti !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (qs === null) throw Error(b(308));
      ((Tn = e), (qs.dependencies = { lanes: 0, firstContext: e }));
    } else Tn = Tn.next = e;
  return t;
}
var tn = null;
function Di(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function hd(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Di(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    kt(e, r)
  );
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function zi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xd(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      kt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Di(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    kt(e, n)
  );
}
function Ss(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n));
  }
}
function Za(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (l === null ? (s = l = i) : (l = l.next = i), (n = n.next));
      } while (n !== null);
      l === null ? (s = l = t) : (l = l.next = t);
    } else s = l = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ks(e, t, n, r) {
  var s = e.updateQueue;
  Lt = !1;
  var l = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), i === null ? (l = c) : (i.next = c), (i = u));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var f = s.baseState;
    ((i = 0), (d = c = u = null), (a = l));
    do {
      var m = a.lane,
        g = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((m = t), (g = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                f = w.call(g, f, m);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (m = typeof w == "function" ? w.call(g, f, m) : w),
                m == null)
              )
                break e;
              f = se({}, f, m);
              break e;
            case 2:
              Lt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = s.effects),
          m === null ? (s.effects = [a]) : m.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = g), (u = f)) : (d = d.next = g),
          (i |= m));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((m = a),
          (a = m.next),
          (m.next = null),
          (s.lastBaseUpdate = m),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (s.baseState = u),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((i |= s.lane), (s = s.next));
      while (s !== t);
    } else l === null && (s.shared.lanes = 0);
    ((dn |= i), (e.lanes = i), (e.memoizedState = f));
  }
}
function eu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(b(191, s));
        s.call(r);
      }
    }
}
var qr = {},
  mt = Jt(qr),
  Dr = Jt(qr),
  zr = Jt(qr);
function nn(e) {
  if (e === qr) throw Error(b(174));
  return e;
}
function Fi(e, t) {
  switch ((Y(zr, t), Y(Dr, e), Y(mt, qr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : go(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = go(t, e)));
  }
  (ee(mt), Y(mt, t));
}
function Wn() {
  (ee(mt), ee(Dr), ee(zr));
}
function gd(e) {
  nn(zr.current);
  var t = nn(mt.current),
    n = go(t, e.type);
  t !== n && (Y(Dr, e), Y(mt, n));
}
function Ii(e) {
  Dr.current === e && (ee(mt), ee(Dr));
}
var ne = Jt(0);
function Js(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ql = [];
function Mi() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var ks = Et.ReactCurrentDispatcher,
  Kl = Et.ReactCurrentBatchConfig,
  cn = 0,
  re = null,
  de = null,
  he = null,
  Xs = !1,
  wr = !1,
  Fr = 0,
  Wp = 0;
function je() {
  throw Error(b(321));
}
function Ui(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function Bi(e, t, n, r, s, l) {
  if (
    ((cn = l),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ks.current = e === null || e.memoizedState === null ? Jp : Xp),
    (e = n(r, s)),
    wr)
  ) {
    l = 0;
    do {
      if (((wr = !1), (Fr = 0), 25 <= l)) throw Error(b(301));
      ((l += 1),
        (he = de = null),
        (t.updateQueue = null),
        (ks.current = Gp),
        (e = n(r, s)));
    } while (wr);
  }
  if (
    ((ks.current = Gs),
    (t = de !== null && de.next !== null),
    (cn = 0),
    (he = de = re = null),
    (Xs = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function $i() {
  var e = Fr !== 0;
  return ((Fr = 0), e);
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (he === null ? (re.memoizedState = he = e) : (he = he.next = e), he);
}
function Ye() {
  if (de === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? re.memoizedState : he.next;
  if (t !== null) ((he = t), (de = e));
  else {
    if (e === null) throw Error(b(310));
    ((de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      he === null ? (re.memoizedState = he = e) : (he = he.next = e));
  }
  return he;
}
function Ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = de,
    s = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (s !== null) {
      var i = s.next;
      ((s.next = l.next), (l.next = i));
    }
    ((r.baseQueue = s = l), (n.pending = null));
  }
  if (s !== null) {
    ((l = s.next), (r = r.baseState));
    var a = (i = null),
      u = null,
      c = l;
    do {
      var d = c.lane;
      if ((cn & d) === d)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = f), (i = r)) : (u = u.next = f),
          (re.lanes |= d),
          (dn |= d));
      }
      c = c.next;
    } while (c !== null && c !== l);
    (u === null ? (i = r) : (u.next = a),
      it(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((l = s.lane), (re.lanes |= l), (dn |= l), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    l = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do ((l = e(l, i.action)), (i = i.next));
    while (i !== s);
    (it(l, t.memoizedState) || (Oe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, r];
}
function vd() {}
function yd(e, t) {
  var n = re,
    r = Ye(),
    s = t(),
    l = !it(r.memoizedState, s);
  if (
    (l && ((r.memoizedState = s), (Oe = !0)),
    (r = r.queue),
    Hi(Nd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Mr(9, jd.bind(null, n, r, s, t), void 0, null),
      xe === null)
    )
      throw Error(b(349));
    cn & 30 || wd(n, t, s);
  }
  return s;
}
function wd(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function jd(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Sd(t) && kd(e));
}
function Nd(e, t, n) {
  return n(function () {
    Sd(t) && kd(e);
  });
}
function Sd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function kd(e) {
  var t = kt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function tu(e) {
  var t = ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kp.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bd() {
  return Ye().memoizedState;
}
function bs(e, t, n, r) {
  var s = ct();
  ((re.flags |= e),
    (s.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function fl(e, t, n, r) {
  var s = Ye();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (((l = i.destroy), r !== null && Ui(r, i.deps))) {
      s.memoizedState = Mr(t, n, l, r);
      return;
    }
  }
  ((re.flags |= e), (s.memoizedState = Mr(1 | t, n, l, r)));
}
function nu(e, t) {
  return bs(8390656, 8, e, t);
}
function Hi(e, t) {
  return fl(2048, 8, e, t);
}
function Ed(e, t) {
  return fl(4, 2, e, t);
}
function Cd(e, t) {
  return fl(4, 4, e, t);
}
function _d(e, t) {
  if (typeof t == "function")
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
function Pd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    fl(4, 4, _d.bind(null, t, e), n)
  );
}
function Vi() {}
function Rd(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ui(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ld(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ui(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Td(e, t, n) {
  return cn & 21
    ? (it(n, t) || ((n = Fc()), (re.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Qp(e, t) {
  var n = q;
  ((q = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Kl.transition;
  Kl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((q = n), (Kl.transition = r));
  }
}
function Od() {
  return Ye().memoizedState;
}
function qp(e, t, n) {
  var r = Ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ad(e))
  )
    Dd(t, n);
  else if (((n = hd(e, t, n, r)), n !== null)) {
    var s = Ce();
    (ot(n, e, r, s), zd(n, t, r));
  }
}
function Kp(e, t, n) {
  var r = Ht(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ad(e)) Dd(t, s);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), it(a, i))) {
          var u = t.interleaved;
          (u === null
            ? ((s.next = s), Di(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = hd(e, t, s, r)),
      n !== null && ((s = Ce()), ot(n, e, r, s), zd(n, t, r)));
  }
}
function Ad(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function Dd(e, t) {
  wr = Xs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n));
  }
}
var Gs = {
    readContext: Ge,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: Ge,
    useCallback: function (e, t) {
      return ((ct().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ge,
    useEffect: nu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bs(4194308, 4, _d.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ct();
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
        (e = e.dispatch = qp.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: tu,
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = tu(!1),
        t = e[0];
      return ((e = Qp.bind(null, e[1])), (ct().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        s = ct();
      if (te) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(b(349));
        cn & 30 || wd(r, t, n);
      }
      s.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (s.queue = l),
        nu(Nd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Mr(9, jd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = xe.identifierPrefix;
      if (te) {
        var n = yt,
          r = vt;
        ((n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Wp++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xp = {
    readContext: Ge,
    useCallback: Rd,
    useContext: Ge,
    useEffect: Hi,
    useImperativeHandle: Pd,
    useInsertionEffect: Ed,
    useLayoutEffect: Cd,
    useMemo: Ld,
    useReducer: Jl,
    useRef: bd,
    useState: function () {
      return Jl(Ir);
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      var t = Ye();
      return Td(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(Ir)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: vd,
    useSyncExternalStore: yd,
    useId: Od,
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: Ge,
    useCallback: Rd,
    useContext: Ge,
    useEffect: Hi,
    useImperativeHandle: Pd,
    useInsertionEffect: Ed,
    useLayoutEffect: Cd,
    useMemo: Ld,
    useReducer: Xl,
    useRef: bd,
    useState: function () {
      return Xl(Ir);
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
      var t = Ye();
      return de === null ? (t.memoizedState = e) : Td(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(Ir)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: vd,
    useSyncExternalStore: yd,
    useId: Od,
    unstable_isNewReconciler: !1,
  };
function nt(e, t) {
  if (e && e.defaultProps) {
    ((t = se({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Io(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      s = Ht(e),
      l = wt(r, s);
    ((l.payload = t),
      n != null && (l.callback = n),
      (t = Bt(e, l, s)),
      t !== null && (ot(t, e, s, r), Ss(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      s = Ht(e),
      l = wt(r, s);
    ((l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Bt(e, l, s)),
      t !== null && (ot(t, e, s, r), Ss(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = Ht(e),
      s = wt(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Bt(e, s, r)),
      t !== null && (ot(t, e, r, n), Ss(t, e, r)));
  },
};
function ru(e, t, n, r, s, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Lr(n, r) || !Lr(s, l)
        : !0
  );
}
function Fd(e, t, n) {
  var r = !1,
    s = qt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ge(l))
      : ((s = De(t) ? an : ke.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? $n(e, s) : qt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function su(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null));
}
function Mo(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), zi(e));
  var l = t.contextType;
  (typeof l == "object" && l !== null
    ? (s.context = Ge(l))
    : ((l = De(t) ? an : ke.current), (s.context = $n(e, l))),
    (s.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Io(e, t, l, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && ml.enqueueReplaceState(s, s.state, null),
      Ks(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Qn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += bm(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (l) {
    s =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yp = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  ((n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Zs || ((Zs = !0), (Xo = r)), Uo(e, t));
    }),
    n
  );
}
function Md(e, t, n) {
  ((n = wt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Uo(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (Uo(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function lu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yp();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = fh.bind(null, e, t, n)), t.then(e, e));
}
function ou(e) {
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
function iu(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zp = Et.ReactCurrentOwner,
  Oe = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? pd(t, null, n, r) : Vn(t, e.child, n, r);
}
function au(e, t, n, r, s) {
  n = n.render;
  var l = t.ref;
  return (
    Mn(t, s),
    (r = Bi(e, t, n, r, l, s)),
    (n = $i()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        bt(e, t, s))
      : (te && n && Pi(t), (t.flags |= 1), Ee(e, t, r, s), t.child)
  );
}
function uu(e, t, n, r, s) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Yi(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Ud(e, t, l, r, s))
      : ((e = Ps(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & s))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lr), n(i, r) && e.ref === t.ref)
    )
      return bt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Vt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ud(e, t, n, r, s) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Lr(l, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = l), (e.lanes & s) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return ((t.lanes = e.lanes), bt(e, t, s));
  }
  return Bo(e, t, n, r, s);
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(An, Ie),
        (Ie |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(An, Ie),
          (Ie |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        Y(An, Ie),
        (Ie |= r));
    }
  else
    (l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(An, Ie),
      (Ie |= r));
  return (Ee(e, t, s, n), t.child);
}
function $d(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bo(e, t, n, r, s) {
  var l = De(n) ? an : ke.current;
  return (
    (l = $n(t, l)),
    Mn(t, s),
    (n = Bi(e, t, n, r, l, s)),
    (r = $i()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        bt(e, t, s))
      : (te && r && Pi(t), (t.flags |= 1), Ee(e, t, n, s), t.child)
  );
}
function cu(e, t, n, r, s) {
  if (De(n)) {
    var l = !0;
    Hs(t);
  } else l = !1;
  if ((Mn(t, s), t.stateNode === null))
    (Es(e, t), Fd(t, n, r), Mo(t, n, r, s), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ge(c))
      : ((c = De(n) ? an : ke.current), (c = $n(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && su(t, i, r, c)),
      (Lt = !1));
    var m = t.memoizedState;
    ((i.state = m),
      Ks(t, r, i, s),
      (u = t.memoizedState),
      a !== r || m !== u || Ae.current || Lt
        ? (typeof d == "function" && (Io(t, n, d, r), (u = t.memoizedState)),
          (a = Lt || ru(t, n, a, r, m, u, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      xd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : nt(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((u = De(n) ? an : ke.current), (u = $n(t, u))));
    var g = n.getDerivedStateFromProps;
    ((d =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || m !== u) && su(t, i, r, u)),
      (Lt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Ks(t, r, i, s));
    var w = t.memoizedState;
    a !== f || m !== w || Ae.current || Lt
      ? (typeof g == "function" && (Io(t, n, g, r), (w = t.memoizedState)),
        (c = Lt || ru(t, n, c, r, m, w, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $o(e, t, n, r, l, s);
}
function $o(e, t, n, r, s, l) {
  $d(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (s && Ja(t, n, !1), bt(e, t, l));
  ((r = t.stateNode), (Zp.current = t));
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Vn(t, e.child, null, l)), (t.child = Vn(t, null, a, l)))
      : Ee(e, t, a, l),
    (t.memoizedState = r.state),
    s && Ja(t, n, !0),
    t.child
  );
}
function Hd(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ka(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ka(e, t.context, !1),
    Fi(e, t.containerInfo));
}
function du(e, t, n, r, s) {
  return (Hn(), Li(s), (t.flags |= 256), Ee(e, t, n, r), t.child);
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vd(e, t, n) {
  var r = t.pendingProps,
    s = ne.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    Y(ne, s & 1),
    e === null)
  )
    return (
      zo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = xl(i, r, 0, null)),
              (e = ln(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Vo(n)),
              (t.memoizedState = Ho),
              e)
            : Wi(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return eh(e, t, i, r, a, s, n);
  if (l) {
    ((l = r.fallback), (i = t.mode), (s = e.child), (a = s.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Vt(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (l = Vt(a, l)) : ((l = ln(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Vo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ho),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Vt(l, { mode: "visible", children: r.children })),
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
function Wi(e, t) {
  return (
    (t = xl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ms(e, t, n, r) {
  return (
    r !== null && Li(r),
    Vn(t, e.child, null, n),
    (e = Wi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function eh(e, t, n, r, s, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error(b(422)))), ms(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (s = t.mode),
          (r = xl({ mode: "visible", children: r.children }, s, 0, null)),
          (l = ln(l, s, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Vn(t, e.child, null, i),
          (t.child.memoizedState = Vo(i)),
          (t.memoizedState = Ho),
          l);
  if (!(t.mode & 1)) return ms(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (l = Error(b(419))),
      (r = Gl(l, r, void 0)),
      ms(e, t, i, r)
    );
  }
  if (((a = (i & e.childLanes) !== 0), Oe || a)) {
    if (((r = xe), r !== null)) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== l.retryLane &&
          ((l.retryLane = s), kt(e, s), ot(r, e, s, -1)));
    }
    return (Gi(), (r = Gl(Error(b(421)))), ms(e, t, i, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mh.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Me = Ut(s.nextSibling)),
      (Ue = t),
      (te = !0),
      (st = null),
      e !== null &&
        ((qe[Ke++] = vt),
        (qe[Ke++] = yt),
        (qe[Ke++] = un),
        (vt = e.id),
        (yt = e.overflow),
        (un = t)),
      (t = Wi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Fo(e.return, t, n));
}
function Yl(e, t, n, r, s) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = s));
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    l = r.tail;
  if ((Ee(e, t, r.children, n), (r = ne.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fu(e, n, t);
        else if (e.tag === 19) fu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((Y(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && Js(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Yl(t, !1, s, n, l));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Js(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        Yl(t, !0, n, null, l);
        break;
      case "together":
        Yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Es(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Vt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function th(e, t, n) {
  switch (t.tag) {
    case 3:
      (Hd(t), Hn());
      break;
    case 5:
      gd(t);
      break;
    case 1:
      De(t.type) && Hs(t);
      break;
    case 4:
      Fi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (Y(Qs, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Vd(e, t, n)
            : (Y(ne, ne.current & 1),
              (e = bt(e, t, n)),
              e !== null ? e.sibling : null);
      Y(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        Y(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Bd(e, t, n));
  }
  return bt(e, t, n);
}
var Qd, Wo, qd, Kd;
Qd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Wo = function () {};
qd = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), nn(mt.current));
    var l = null;
    switch (n) {
      case "input":
        ((s = mo(e, s)), (r = mo(e, r)), (l = []));
        break;
      case "select":
        ((s = se({}, s, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((s = xo(e, s)), (r = xo(e, r)), (l = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bs);
    }
    vo(n, r);
    var i;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (kr.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (l || (l = []), l.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (l = l || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (l = l || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (kr.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && Z("scroll", e),
                    l || a === u || (l = []))
                  : (l = l || []).push(c, u));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Kd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function nh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ri(t), t.tag)) {
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
      return (Ne(t), null);
    case 1:
      return (De(t.type) && $s(), Ne(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        ee(Ae),
        ee(ke),
        Mi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Zo(st), (st = null)))),
        Wo(e, t),
        Ne(t),
        null
      );
    case 5:
      Ii(t);
      var s = nn(zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (qd(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return (Ne(t), null);
        }
        if (((e = nn(mt.current)), ds(t))) {
          ((r = t.stateNode), (n = t.type));
          var l = t.memoizedProps;
          switch (((r[dt] = t), (r[Ar] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Z("cancel", r), Z("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < pr.length; s++) Z(pr[s], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Z("error", r), Z("load", r));
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              (ja(r, l), Z("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!l.multiple }),
                Z("invalid", r));
              break;
            case "textarea":
              (Sa(r, l), Z("invalid", r));
          }
          (vo(n, l), (s = null));
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : kr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              (ns(r), Na(r, l, !0));
              break;
            case "textarea":
              (ns(r), ka(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Bs);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Nc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[dt] = t),
            (e[Ar] = r),
            Qd(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = yo(n, r)), n)) {
              case "dialog":
                (Z("cancel", e), Z("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Z("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < pr.length; s++) Z(pr[s], e);
                s = r;
                break;
              case "source":
                (Z("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (Z("error", e), Z("load", e), (s = r));
                break;
              case "details":
                (Z("toggle", e), (s = r));
                break;
              case "input":
                (ja(e, r), (s = mo(e, r)), Z("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = se({}, r, { value: void 0 })),
                  Z("invalid", e));
                break;
              case "textarea":
                (Sa(e, r), (s = xo(e, r)), Z("invalid", e));
                break;
              default:
                s = r;
            }
            (vo(n, s), (a = s));
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var u = a[l];
                l === "style"
                  ? bc(e, u)
                  : l === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Sc(e, u))
                    : l === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && br(e, u)
                        : typeof u == "number" && br(e, "" + u)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (kr.hasOwnProperty(l)
                          ? u != null && l === "onScroll" && Z("scroll", e)
                          : u != null && hi(e, l, u, i));
              }
            switch (n) {
              case "input":
                (ns(e), Na(e, r, !1));
                break;
              case "textarea":
                (ns(e), ka(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Dn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Bs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
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
      return (Ne(t), null);
    case 6:
      if (e && t.stateNode != null) Kd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = nn(zr.current)), nn(mt.current), ds(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (l = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r));
      }
      return (Ne(t), null);
    case 13:
      if (
        (ee(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Me !== null && t.mode & 1 && !(t.flags & 128))
          (fd(), Hn(), (t.flags |= 98560), (l = !1));
        else if (((l = ds(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(b(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(b(317));
            l[dt] = t;
          } else
            (Hn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ne(t), (l = !1));
        } else (st !== null && (Zo(st), (st = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : Gi())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Wn(),
        Wo(e, t),
        e === null && Tr(t.stateNode.containerInfo),
        Ne(t),
        null
      );
    case 10:
      return (Ai(t.type._context), Ne(t), null);
    case 17:
      return (De(t.type) && $s(), Ne(t), null);
    case 19:
      if ((ee(ne), (l = t.memoizedState), l === null)) return (Ne(t), null);
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) ar(l, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Js(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ar(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (Y(ne, (ne.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            oe() > qn &&
            ((t.flags |= 128), (r = !0), ar(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Js(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !te)
            )
              return (Ne(t), null);
          } else
            2 * oe() - l.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = oe()),
          (t.sibling = null),
          (n = ne.current),
          Y(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Xi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function rh(e, t) {
  switch ((Ri(t), t.tag)) {
    case 1:
      return (
        De(t.type) && $s(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        ee(Ae),
        ee(ke),
        Mi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ii(t), null);
    case 13:
      if (
        (ee(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(b(340));
        Hn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ee(ne), null);
    case 4:
      return (Wn(), null);
    case 10:
      return (Ai(t.type._context), null);
    case 22:
    case 23:
      return (Xi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ps = !1,
  Se = !1,
  sh = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var mu = !1;
function lh(e, t) {
  if (((Po = Is), (e = Zc()), _i(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, l.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = i + s),
                f !== l || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (g = f.firstChild) !== null;
            )
              ((m = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++c === s && (a = i),
                m === l && ++d === r && (u = i),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = m), (m = f.parentNode));
            }
            f = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, Is = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (O = e));
    else
      for (; O !== null; ) {
        t = O;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    j = w.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : nt(t.type, y),
                      j,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
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
                throw Error(b(163));
            }
        } catch (S) {
          le(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (O = e));
          break;
        }
        O = t.return;
      }
  return ((w = mu), (mu = !1), w);
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var l = s.destroy;
        ((s.destroy = void 0), l !== void 0 && Qo(t, n, l));
      }
      s = s.next;
    } while (s !== r);
  }
}
function pl(e, t) {
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
function qo(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jd(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Jd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Ar], delete t[Oo], delete t[Bp], delete t[$p])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ko(e, t, n), e = e.sibling; e !== null; )
      (Ko(e, t, n), (e = e.sibling));
}
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; )
      (Jo(e, t, n), (e = e.sibling));
}
var ge = null,
  rt = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) (Gd(e, t, n), (n = n.sibling));
}
function Gd(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || On(n, t);
    case 6:
      var r = ge,
        s = rt;
      ((ge = null),
        Pt(e, t, n),
        (ge = r),
        (rt = s),
        ge !== null &&
          (rt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode)));
      break;
    case 18:
      ge !== null &&
        (rt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            Pr(e))
          : Wl(ge, n.stateNode));
      break;
    case 4:
      ((r = ge),
        (s = rt),
        (ge = n.stateNode.containerInfo),
        (rt = !0),
        Pt(e, t, n),
        (ge = r),
        (rt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var l = s,
            i = l.destroy;
          ((l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Qo(n, t, i),
            (s = s.next));
        } while (s !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          le(n, t, a);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), Pt(e, t, n), (Se = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function hu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new sh()),
      t.forEach(function (r) {
        var s = ph.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ge = a.stateNode), (rt = !1));
              break e;
            case 3:
              ((ge = a.stateNode.containerInfo), (rt = !0));
              break e;
            case 4:
              ((ge = a.stateNode.containerInfo), (rt = !0));
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(b(160));
        (Gd(l, i, s), (ge = null), (rt = !1));
        var u = s.alternate;
        (u !== null && (u.return = null), (s.return = null));
      } catch (c) {
        le(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Yd(t, e), (t = t.sibling));
}
function Yd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), ut(e), r & 4)) {
        try {
          (jr(3, e, e.return), pl(3, e));
        } catch (y) {
          le(e, e.return, y);
        }
        try {
          jr(5, e, e.return);
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 1:
      (tt(t, e), ut(e), r & 512 && n !== null && On(n, n.return));
      break;
    case 5:
      if (
        (tt(t, e),
        ut(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          br(s, "");
        } catch (y) {
          le(e, e.return, y);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && l.type === "radio" && l.name != null && wc(s, l),
              yo(a, i));
            var c = yo(a, l);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                f = u[i + 1];
              d === "style"
                ? bc(s, f)
                : d === "dangerouslySetInnerHTML"
                  ? Sc(s, f)
                  : d === "children"
                    ? br(s, f)
                    : hi(s, d, f, c);
            }
            switch (a) {
              case "input":
                po(s, l);
                break;
              case "textarea":
                jc(s, l);
                break;
              case "select":
                var m = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? Dn(s, !!l.multiple, g, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Dn(s, !!l.multiple, l.defaultValue, !0)
                      : Dn(s, !!l.multiple, l.multiple ? [] : "", !1));
            }
            s[Ar] = l;
          } catch (y) {
            le(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((tt(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        ((s = e.stateNode), (l = e.memoizedProps));
        try {
          s.nodeValue = l;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (tt(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pr(t.containerInfo);
        } catch (y) {
          le(e, e.return, y);
        }
      break;
    case 4:
      (tt(t, e), ut(e));
      break;
    case 13:
      (tt(t, e),
        ut(e),
        (s = e.child),
        s.flags & 8192 &&
          ((l = s.memoizedState !== null),
          (s.stateNode.isHidden = l),
          !l ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Ki = oe())),
        r & 4 && hu(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (c = Se) || d), tt(t, e), (Se = c)) : tt(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (f = O = d; O !== null; ) {
              switch (((m = O), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jr(4, m, m.return);
                  break;
                case 1:
                  On(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (y) {
                      le(r, n, y);
                    }
                  }
                  break;
                case 5:
                  On(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    gu(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (O = g)) : gu(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((s = f.stateNode),
                  c
                    ? ((l = s.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = kc("display", i))));
              } catch (y) {
                le(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (y) {
                le(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (tt(t, e), ut(e), r & 4 && hu(e));
      break;
    case 21:
      break;
    default:
      (tt(t, e), ut(e));
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (br(s, ""), (r.flags &= -33));
          var l = pu(e);
          Jo(e, l, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = pu(e);
          Ko(e, a, i);
          break;
        default:
          throw Error(b(161));
      }
    } catch (u) {
      le(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function oh(e, t, n) {
  ((O = e), Zd(e));
}
function Zd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var s = O,
      l = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || ps;
      if (!i) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || Se;
        a = ps;
        var c = Se;
        if (((ps = i), (Se = u) && !c))
          for (O = s; O !== null; )
            ((i = O),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? vu(s)
                : u !== null
                  ? ((u.return = i), (O = u))
                  : vu(s));
        for (; l !== null; ) ((O = l), Zd(l), (l = l.sibling));
        ((O = s), (ps = a), (Se = c));
      }
      xu(e);
    } else
      s.subtreeFlags & 8772 && l !== null ? ((l.return = s), (O = l)) : xu(e);
  }
}
function xu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && eu(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                eu(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Pr(f);
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
              throw Error(b(163));
          }
        Se || (t.flags & 512 && qo(t));
      } catch (m) {
        le(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function gu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function vu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (u) {
            le(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              le(t, s, u);
            }
          }
          var l = t.return;
          try {
            qo(t);
          } catch (u) {
            le(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qo(t);
          } catch (u) {
            le(t, i, u);
          }
      }
    } catch (u) {
      le(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (O = a));
      break;
    }
    O = t.return;
  }
}
var ih = Math.ceil,
  Ys = Et.ReactCurrentDispatcher,
  Qi = Et.ReactCurrentOwner,
  Xe = Et.ReactCurrentBatchConfig,
  Q = 0,
  xe = null,
  ue = null,
  ye = 0,
  Ie = 0,
  An = Jt(0),
  fe = 0,
  Ur = null,
  dn = 0,
  hl = 0,
  qi = 0,
  Nr = null,
  Te = null,
  Ki = 0,
  qn = 1 / 0,
  xt = null,
  Zs = !1,
  Xo = null,
  $t = null,
  hs = !1,
  Dt = null,
  el = 0,
  Sr = 0,
  Go = null,
  Cs = -1,
  _s = 0;
function Ce() {
  return Q & 6 ? oe() : Cs !== -1 ? Cs : (Cs = oe());
}
function Ht(e) {
  return e.mode & 1
    ? Q & 2 && ye !== 0
      ? ye & -ye
      : Vp.transition !== null
        ? (_s === 0 && (_s = Fc()), _s)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vc(e.type))),
          e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < Sr) throw ((Sr = 0), (Go = null), Error(b(185)));
  (Vr(e, n, r),
    (!(Q & 2) || e !== xe) &&
      (e === xe && (!(Q & 2) && (hl |= n), fe === 4 && Ot(e, ye)),
      ze(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((qn = oe() + 500), dl && Xt())));
}
function ze(e, t) {
  var n = e.callbackNode;
  Vm(e, t);
  var r = Fs(e, e === xe ? ye : 0);
  if (r === 0)
    (n !== null && Ca(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ca(n), t === 1))
      (e.tag === 0 ? Hp(yu.bind(null, e)) : ud(yu.bind(null, e)),
        Mp(function () {
          !(Q & 6) && Xt();
        }),
        (n = null));
    else {
      switch (Ic(r)) {
        case 1:
          n = wi;
          break;
        case 4:
          n = Dc;
          break;
        case 16:
          n = zs;
          break;
        case 536870912:
          n = zc;
          break;
        default:
          n = zs;
      }
      n = af(n, ef.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ef(e, t) {
  if (((Cs = -1), (_s = 0), Q & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Fs(e, e === xe ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var s = Q;
    Q |= 2;
    var l = nf();
    (xe !== e || ye !== t) && ((xt = null), (qn = oe() + 500), sn(e, t));
    do
      try {
        ch();
        break;
      } catch (a) {
        tf(e, a);
      }
    while (!0);
    (Oi(),
      (Ys.current = l),
      (Q = s),
      ue !== null ? (t = 0) : ((xe = null), (ye = 0), (t = fe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = ko(e)), s !== 0 && ((r = s), (t = Yo(e, s)))), t === 1)
    )
      throw ((n = Ur), sn(e, 0), Ot(e, r), ze(e, oe()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !ah(s) &&
          ((t = tl(e, r)),
          t === 2 && ((l = ko(e)), l !== 0 && ((r = l), (t = Yo(e, l)))),
          t === 1))
      )
        throw ((n = Ur), sn(e, 0), Ot(e, r), ze(e, oe()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          Zt(e, Te, xt);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = Ki + 500 - oe()), 10 < t))
          ) {
            if (Fs(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Ce(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = To(Zt.bind(null, e, Te, xt), t);
            break;
          }
          Zt(e, Te, xt);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - lt(r);
            ((l = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~l));
          }
          if (
            ((r = s),
            (r = oe() - r),
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
                          : 1960 * ih(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(Zt.bind(null, e, Te, xt), r);
            break;
          }
          Zt(e, Te, xt);
          break;
        case 5:
          Zt(e, Te, xt);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return (ze(e, oe()), e.callbackNode === n ? ef.bind(null, e) : null);
}
function Yo(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && Zo(t)),
    e
  );
}
function Zo(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function ah(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            l = s.getSnapshot;
          s = s.value;
          try {
            if (!it(l(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~qi,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function yu(e) {
  if (Q & 6) throw Error(b(327));
  Un();
  var t = Fs(e, 0);
  if (!(t & 1)) return (ze(e, oe()), null);
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && ((t = r), (n = Yo(e, r)));
  }
  if (n === 1) throw ((n = Ur), sn(e, 0), Ot(e, t), ze(e, oe()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, Te, xt),
    ze(e, oe()),
    null
  );
}
function Ji(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    ((Q = n), Q === 0 && ((qn = oe() + 500), dl && Xt()));
  }
}
function fn(e) {
  Dt !== null && Dt.tag === 0 && !(Q & 6) && Un();
  var t = Q;
  Q |= 1;
  var n = Xe.transition,
    r = q;
  try {
    if (((Xe.transition = null), (q = 1), e)) return e();
  } finally {
    ((q = r), (Xe.transition = n), (Q = t), !(Q & 6) && Xt());
  }
}
function Xi() {
  ((Ie = An.current), ee(An));
}
function sn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ip(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Ri(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && $s());
          break;
        case 3:
          (Wn(), ee(Ae), ee(ke), Mi());
          break;
        case 5:
          Ii(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          ee(ne);
          break;
        case 19:
          ee(ne);
          break;
        case 10:
          Ai(r.type._context);
          break;
        case 22:
        case 23:
          Xi();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (ue = e = Vt(e.current, null)),
    (ye = Ie = t),
    (fe = 0),
    (Ur = null),
    (qi = hl = dn = 0),
    (Te = Nr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          ((l.next = s), (r.next = i));
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function tf(e, t) {
  do {
    var n = ue;
    try {
      if ((Oi(), (ks.current = Gs), Xs)) {
        for (var r = re.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Xs = !1;
      }
      if (
        ((cn = 0),
        (he = de = re = null),
        (wr = !1),
        (Fr = 0),
        (Qi.current = null),
        n === null || n.return === null)
      ) {
        ((fe = 1), (Ur = t), (ue = null));
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ye),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = ou(i);
          if (g !== null) {
            ((g.flags &= -257),
              iu(g, i, a, l, t),
              g.mode & 1 && lu(l, c, t),
              (t = g),
              (u = c));
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              (y.add(u), (t.updateQueue = y));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (lu(l, c, t), Gi());
              break e;
            }
            u = Error(b(426));
          }
        } else if (te && a.mode & 1) {
          var j = ou(i);
          if (j !== null) {
            (!(j.flags & 65536) && (j.flags |= 256),
              iu(j, i, a, l, t),
              Li(Qn(u, a)));
            break e;
          }
        }
        ((l = u = Qn(u, a)),
          fe !== 4 && (fe = 2),
          Nr === null ? (Nr = [l]) : Nr.push(l),
          (l = i));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var h = Id(l, u, t);
              Za(l, h);
              break e;
            case 1:
              a = u;
              var p = l.type,
                x = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    ($t === null || !$t.has(x))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var S = Md(l, a, t);
                Za(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      sf(n);
    } catch (E) {
      ((t = E), ue === n && n !== null && (ue = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function nf() {
  var e = Ys.current;
  return ((Ys.current = Gs), e === null ? Gs : e);
}
function Gi() {
  ((fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    xe === null || (!(dn & 268435455) && !(hl & 268435455)) || Ot(xe, ye));
}
function tl(e, t) {
  var n = Q;
  Q |= 2;
  var r = nf();
  (xe !== e || ye !== t) && ((xt = null), sn(e, t));
  do
    try {
      uh();
      break;
    } catch (s) {
      tf(e, s);
    }
  while (!0);
  if ((Oi(), (Q = n), (Ys.current = r), ue !== null)) throw Error(b(261));
  return ((xe = null), (ye = 0), fe);
}
function uh() {
  for (; ue !== null; ) rf(ue);
}
function ch() {
  for (; ue !== null && !Dm(); ) rf(ue);
}
function rf(e) {
  var t = of(e.alternate, e, Ie);
  ((e.memoizedProps = e.pendingProps),
    t === null ? sf(e) : (ue = t),
    (Qi.current = null));
}
function sf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rh(n, t)), n !== null)) {
        ((n.flags &= 32767), (ue = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((fe = 6), (ue = null));
        return;
      }
    } else if (((n = nh(n, t, Ie)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Zt(e, t, n) {
  var r = q,
    s = Xe.transition;
  try {
    ((Xe.transition = null), (q = 1), dh(e, t, n, r));
  } finally {
    ((Xe.transition = s), (q = r));
  }
  return null;
}
function dh(e, t, n, r) {
  do Un();
  while (Dt !== null);
  if (Q & 6) throw Error(b(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (Wm(e, l),
    e === xe && ((ue = xe = null), (ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      hs ||
      ((hs = !0),
      af(zs, function () {
        return (Un(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = Xe.transition), (Xe.transition = null));
    var i = q;
    q = 1;
    var a = Q;
    ((Q |= 4),
      (Qi.current = null),
      lh(e, n),
      Yd(n, e),
      Lp(Ro),
      (Is = !!Po),
      (Ro = Po = null),
      (e.current = n),
      oh(n),
      zm(),
      (Q = a),
      (q = i),
      (Xe.transition = l));
  } else e.current = n;
  if (
    (hs && ((hs = !1), (Dt = e), (el = s)),
    (l = e.pendingLanes),
    l === 0 && ($t = null),
    Mm(n.stateNode),
    ze(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Zs) throw ((Zs = !1), (e = Xo), (Xo = null), e);
  return (
    el & 1 && e.tag !== 0 && Un(),
    (l = e.pendingLanes),
    l & 1 ? (e === Go ? Sr++ : ((Sr = 0), (Go = e))) : (Sr = 0),
    Xt(),
    null
  );
}
function Un() {
  if (Dt !== null) {
    var e = Ic(el),
      t = Xe.transition,
      n = q;
    try {
      if (((Xe.transition = null), (q = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (el = 0), Q & 6)) throw Error(b(331));
        var s = Q;
        for (Q |= 4, O = e.current; O !== null; ) {
          var l = O,
            i = l.child;
          if (O.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (O = c; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, d, l);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (O = f));
                  else
                    for (; O !== null; ) {
                      d = O;
                      var m = d.sibling,
                        g = d.return;
                      if ((Jd(d), d === c)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = g), (O = m));
                        break;
                      }
                      O = g;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var j = y.sibling;
                    ((y.sibling = null), (y = j));
                  } while (y !== null);
                }
              }
              O = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) ((i.return = l), (O = i));
          else
            e: for (; O !== null; ) {
              if (((l = O), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jr(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                ((h.return = l.return), (O = h));
                break e;
              }
              O = l.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          i = O;
          var x = i.child;
          if (i.subtreeFlags & 2064 && x !== null) ((x.return = i), (O = x));
          else
            e: for (i = p; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, a);
                  }
                } catch (E) {
                  le(a, a.return, E);
                }
              if (a === i) {
                O = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (O = S));
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Q = s), Xt(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((q = n), (Xe.transition = t));
    }
  }
  return !1;
}
function wu(e, t, n) {
  ((t = Qn(n, t)),
    (t = Id(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Ce()),
    e !== null && (Vr(e, 1, t), ze(e, t)));
}
function le(e, t, n) {
  if (e.tag === 3) wu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          ((e = Qn(n, e)),
            (e = Md(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Ce()),
            t !== null && (Vr(t, 1, e), ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function fh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (ye & n) === n &&
      (fe === 4 || (fe === 3 && (ye & 130023424) === ye && 500 > oe() - Ki)
        ? sn(e, 0)
        : (qi |= n)),
    ze(e, t));
}
function lf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ls), (ls <<= 1), !(ls & 130023424) && (ls = 4194304))
      : (t = 1));
  var n = Ce();
  ((e = kt(e, t)), e !== null && (Vr(e, t, n), ze(e, n)));
}
function mh(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), lf(e, n));
}
function ph(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  (r !== null && r.delete(t), lf(e, n));
}
var of;
of = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Oe = !1), th(e, t, n));
      Oe = !!(e.flags & 131072);
    }
  else ((Oe = !1), te && t.flags & 1048576 && cd(t, Ws, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Es(e, t), (e = t.pendingProps));
      var s = $n(t, ke.current);
      (Mn(t, n), (s = Bi(null, t, r, e, s, n)));
      var l = $i();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(r) ? ((l = !0), Hs(t)) : (l = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            zi(t),
            (s.updater = ml),
            (t.stateNode = s),
            (s._reactInternals = t),
            Mo(t, r, e, n),
            (t = $o(null, t, r, !0, l, n)))
          : ((t.tag = 0), te && l && Pi(t), Ee(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Es(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = xh(r)),
          (e = nt(r, e)),
          s)
        ) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = cu(null, t, r, e, n);
            break e;
          case 11:
            t = au(null, t, r, e, n);
            break e;
          case 14:
            t = uu(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : nt(r, s)),
        Bo(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : nt(r, s)),
        cu(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Hd(t), e === null)) throw Error(b(387));
        ((r = t.pendingProps),
          (l = t.memoizedState),
          (s = l.element),
          xd(e, t),
          Ks(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ((s = Qn(Error(b(423)), t)), (t = du(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Qn(Error(b(424)), t)), (t = du(e, t, r, n, s)));
            break e;
          } else
            for (
              Me = Ut(t.stateNode.containerInfo.firstChild),
                Ue = t,
                te = !0,
                st = null,
                n = pd(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Hn(), r === s)) {
            t = bt(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gd(t),
        e === null && zo(t),
        (r = t.type),
        (s = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = s.children),
        Lo(r, s) ? (i = null) : l !== null && Lo(r, l) && (t.flags |= 32),
        $d(e, t),
        Ee(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && zo(t), null);
    case 13:
      return Vd(e, t, n);
    case 4:
      return (
        Fi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : nt(r, s)),
        au(e, t, r, s, n)
      );
    case 7:
      return (Ee(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ee(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ee(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (l = t.memoizedProps),
          (i = s.value),
          Y(Qs, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (it(l.value, i)) {
            if (l.children === s.children && !Ae.current) {
              t = bt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      ((u = wt(-1, n & -n)), (u.tag = 2));
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Fo(l.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(b(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Fo(i, n, t),
                  (i = l.sibling));
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    ((l.return = i.return), (i = l));
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        (Ee(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Mn(t, n),
        (s = Ge(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = nt(r, t.pendingProps)),
        (s = nt(r.type, s)),
        uu(e, t, r, s, n)
      );
    case 15:
      return Ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : nt(r, s)),
        Es(e, t),
        (t.tag = 1),
        De(r) ? ((e = !0), Hs(t)) : (e = !1),
        Mn(t, n),
        Fd(t, r, s),
        Mo(t, r, s, n),
        $o(null, t, r, !0, e, n)
      );
    case 19:
      return Wd(e, t, n);
    case 22:
      return Bd(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function af(e, t) {
  return Ac(e, t);
}
function hh(e, t, n, r) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function Je(e, t, n, r) {
  return new hh(e, t, n, r);
}
function Yi(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function xh(e) {
  if (typeof e == "function") return Yi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gi)) return 11;
    if (e === vi) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
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
function Ps(e, t, n, r, s, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Yi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case kn:
        return ln(n.children, s, l, t);
      case xi:
        ((i = 8), (s |= 8));
        break;
      case ao:
        return (
          (e = Je(12, n, t, s | 2)),
          (e.elementType = ao),
          (e.lanes = l),
          e
        );
      case uo:
        return ((e = Je(13, n, t, s)), (e.elementType = uo), (e.lanes = l), e);
      case co:
        return ((e = Je(19, n, t, s)), (e.elementType = co), (e.lanes = l), e);
      case gc:
        return xl(n, s, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hc:
              i = 10;
              break e;
            case xc:
              i = 9;
              break e;
            case gi:
              i = 11;
              break e;
            case vi:
              i = 14;
              break e;
            case Rt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(i, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = l),
    t
  );
}
function ln(e, t, n, r) {
  return ((e = Je(7, e, r, t)), (e.lanes = n), e);
}
function xl(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = gc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return ((e = Je(6, e, null, t)), (e.lanes = n), e);
}
function eo(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gh(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Zi(e, t, n, r, s, l, i, a, u) {
  return (
    (e = new gh(e, t, n, a, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zi(l),
    e
  );
}
function vh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function uf(e) {
  if (!e) return qt;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return ad(e, n, t);
  }
  return t;
}
function cf(e, t, n, r, s, l, i, a, u) {
  return (
    (e = Zi(n, r, !0, e, s, l, i, a, u)),
    (e.context = uf(null)),
    (n = e.current),
    (r = Ce()),
    (s = Ht(n)),
    (l = wt(r, s)),
    (l.callback = t ?? null),
    Bt(n, l, s),
    (e.current.lanes = s),
    Vr(e, s, r),
    ze(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var s = t.current,
    l = Ce(),
    i = Ht(s);
  return (
    (n = uf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(s, t, i)),
    e !== null && (ot(e, s, i, l), Ss(e, s, i)),
    i
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ea(e, t) {
  (ju(e, t), (e = e.alternate) && ju(e, t));
}
function yh() {
  return null;
}
var df =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ta(e) {
  this._internalRoot = e;
}
vl.prototype.render = ta.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  gl(e, t, null, null);
};
vl.prototype.unmount = ta.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (fn(function () {
      gl(null, e, null, null);
    }),
      (t[St] = null));
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    (Tt.splice(n, 0, e), n === 0 && Hc(e));
  }
};
function na(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nu() {}
function wh(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = nl(i);
        l.call(c);
      };
    }
    var i = cf(t, r, e, 0, null, !1, !1, "", Nu);
    return (
      (e._reactRootContainer = i),
      (e[St] = i.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = nl(u);
      a.call(c);
    };
  }
  var u = Zi(e, 0, !1, null, null, !1, !1, "", Nu);
  return (
    (e._reactRootContainer = u),
    (e[St] = u.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      gl(t, u, n, r);
    }),
    u
  );
}
function wl(e, t, n, r, s) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = nl(i);
        a.call(u);
      };
    }
    gl(t, i, e, s);
  } else i = wh(n, t, e, s, r);
  return nl(i);
}
Mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (ji(t, n | 1), ze(t, oe()), !(Q & 6) && ((qn = oe() + 500), Xt()));
      }
      break;
    case 13:
      (fn(function () {
        var r = kt(e, 1);
        if (r !== null) {
          var s = Ce();
          ot(r, e, 1, s);
        }
      }),
        ea(e, 1));
  }
};
Ni = function (e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Ce();
      ot(t, e, 134217728, n);
    }
    ea(e, 134217728);
  }
};
Uc = function (e) {
  if (e.tag === 13) {
    var t = Ht(e),
      n = kt(e, t);
    if (n !== null) {
      var r = Ce();
      ot(n, e, t, r);
    }
    ea(e, t);
  }
};
Bc = function () {
  return q;
};
$c = function (e, t) {
  var n = q;
  try {
    return ((q = e), t());
  } finally {
    q = n;
  }
};
jo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = cl(r);
            if (!s) throw Error(b(90));
            (yc(r), po(r, s));
          }
        }
      }
      break;
    case "textarea":
      jc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Dn(e, !!n.multiple, t, !1));
  }
};
_c = Ji;
Pc = fn;
var jh = { usingClientEntryPoint: !1, Events: [Qr, _n, cl, Ec, Cc, Ji] },
  ur = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Nh = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Tc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || yh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xs.isDisabled && xs.supportsFiber)
    try {
      ((ol = xs.inject(Nh)), (ft = xs));
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jh;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!na(t)) throw Error(b(200));
  return vh(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!na(e)) throw Error(b(299));
  var n = !1,
    r = "",
    s = df;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Zi(e, 1, !1, null, null, n, !1, r, s)),
    (e[St] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new ta(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return ((e = Tc(t)), (e = e === null ? null : e.stateNode), e);
};
$e.flushSync = function (e) {
  return fn(e);
};
$e.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(b(200));
  return wl(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!na(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    l = "",
    i = df;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cf(t, null, e, 1, n ?? null, s, !1, l, i)),
    (e[St] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new vl(t);
};
$e.render = function (e, t, n) {
  if (!yl(t)) throw Error(b(200));
  return wl(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (fn(function () {
        wl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[St] = null));
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = Ji;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return wl(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function ff() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff);
    } catch (e) {
      console.error(e);
    }
}
(ff(), (dc.exports = $e));
var Sh = dc.exports,
  Su = Sh;
((oo.createRoot = Su.createRoot), (oo.hydrateRoot = Su.hydrateRoot));
/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Br() {
  return (
    (Br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Br.apply(null, arguments)
  );
}
var zt;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(zt || (zt = {}));
const ku = "popstate";
function kh(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: l, search: i, hash: a } = r.location;
    return ei(
      "",
      { pathname: l, search: i, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : rl(s);
  }
  return Eh(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ra(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function bh() {
  return Math.random().toString(36).substr(2, 8);
}
function bu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ei(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Br(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yn(t) : t,
      { state: n, key: (t && t.key) || r || bh() },
    )
  );
}
function rl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Eh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: l = !1 } = r,
    i = s.history,
    a = zt.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), i.replaceState(Br({}, i.state, { idx: c }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = zt.Pop;
    let j = d(),
      h = j == null ? null : j - c;
    ((c = j), u && u({ action: a, location: y.location, delta: h }));
  }
  function m(j, h) {
    a = zt.Push;
    let p = ei(y.location, j, h);
    c = d() + 1;
    let x = bu(p, c),
      S = y.createHref(p);
    try {
      i.pushState(x, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      s.location.assign(S);
    }
    l && u && u({ action: a, location: y.location, delta: 1 });
  }
  function g(j, h) {
    a = zt.Replace;
    let p = ei(y.location, j, h);
    c = d();
    let x = bu(p, c),
      S = y.createHref(p);
    (i.replaceState(x, "", S),
      l && u && u({ action: a, location: y.location, delta: 0 }));
  }
  function w(j) {
    let h = s.location.origin !== "null" ? s.location.origin : s.location.href,
      p = typeof j == "string" ? j : rl(j);
    return (
      (p = p.replace(/ $/, "%20")),
      ie(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, h)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(s, i);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(ku, f),
        (u = j),
        () => {
          (s.removeEventListener(ku, f), (u = null));
        }
      );
    },
    createHref(j) {
      return t(s, j);
    },
    createURL: w,
    encodeLocation(j) {
      let h = w(j);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: g,
    go(j) {
      return i.go(j);
    },
  };
  return y;
}
var Eu;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Eu || (Eu = {}));
function Ch(e, t, n) {
  return (n === void 0 && (n = "/"), _h(e, t, n));
}
function _h(e, t, n, r) {
  let s = typeof t == "string" ? Yn(t) : t,
    l = sa(s.pathname || "/", n);
  if (l == null) return null;
  let i = mf(e);
  Ph(i);
  let a = null,
    u = Bh(l);
  for (let c = 0; a == null && c < i.length; ++c) a = Ih(i[c], u);
  return a;
}
function mf(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (l, i, a) => {
    let u = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (ie(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Wt([r, u.relativePath]),
      d = n.concat(u);
    (l.children &&
      l.children.length > 0 &&
      (ie(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      mf(l.children, t, d, c)),
      !(l.path == null && !l.index) &&
        t.push({ path: c, score: zh(c, l.index), routesMeta: d }));
  };
  return (
    e.forEach((l, i) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) s(l, i);
      else for (let u of pf(l.path)) s(l, i, u);
    }),
    t
  );
}
function pf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [l, ""] : [l];
  let i = pf(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? l : [l, u].join("/")))),
    s && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Ph(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Rh = /^:[\w-]+$/,
  Lh = 3,
  Th = 2,
  Oh = 1,
  Ah = 10,
  Dh = -2,
  Cu = (e) => e === "*";
function zh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cu) && (r += Dh),
    t && (r += Th),
    n
      .filter((s) => !Cu(s))
      .reduce((s, l) => s + (Rh.test(l) ? Lh : l === "" ? Oh : Ah), r)
  );
}
function Fh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ih(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    l = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = l === "/" ? t : t.slice(l.length) || "/",
      f = Mh(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d,
      ),
      m = u.route;
    if (!f) return null;
    (Object.assign(s, f.params),
      i.push({
        params: s,
        pathname: Wt([l, f.pathname]),
        pathnameBase: Qh(Wt([l, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (l = Wt([l, f.pathnameBase])));
  }
  return i;
}
function Mh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Uh(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let l = s[0],
    i = l.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: m, isOptional: g } = d;
      if (m === "*") {
        let y = a[f] || "";
        i = l.slice(0, l.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[f];
      return (
        g && !w ? (c[m] = void 0) : (c[m] = (w || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Uh(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ra(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function Bh(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ra(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function sa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const $h = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hh = (e) => $h.test(e);
function Vh(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? Yn(e) : e,
    l;
  if (n)
    if (Hh(n)) l = n;
    else {
      if (n.includes("//")) {
        let i = n;
        ((n = hf(n)),
          ra(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (i + " -> " + n),
          ));
      }
      n.startsWith("/") ? (l = _u(n.substring(1), "/")) : (l = _u(n, t));
    }
  else l = t;
  return { pathname: l, search: qh(r), hash: Kh(s) };
}
function _u(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function to(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function la(e, t) {
  let n = Wh(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function oa(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Yn(e))
    : ((s = Br({}, e)),
      ie(
        !s.pathname || !s.pathname.includes("?"),
        to("?", "pathname", "search", s),
      ),
      ie(
        !s.pathname || !s.pathname.includes("#"),
        to("#", "pathname", "hash", s),
      ),
      ie(!s.search || !s.search.includes("#"), to("#", "search", "hash", s)));
  let l = e === "" || s.pathname === "",
    i = l ? "/" : s.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) (m.shift(), (f -= 1));
      s.pathname = m.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = Vh(s, a),
    c = i && i !== "/" && i.endsWith("/"),
    d = (l || i === ".") && n.endsWith("/");
  return (!u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u);
}
const hf = (e) => e.replace(/\/\/+/g, "/"),
  Wt = (e) => hf(e.join("/")),
  Qh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Kh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Jh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const xf = ["post", "put", "patch", "delete"];
new Set(xf);
const Xh = ["get", ...xf];
new Set(Xh);
/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $r() {
  return (
    ($r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $r.apply(null, arguments)
  );
}
const ia = N.createContext(null),
  Gh = N.createContext(null),
  Gt = N.createContext(null),
  jl = N.createContext(null),
  Ct = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gf = N.createContext(null);
function Yh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zn() || ie(!1);
  let { basename: r, navigator: s } = N.useContext(Gt),
    { hash: l, pathname: i, search: a } = yf(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Wt([r, i])),
    s.createHref({ pathname: u, search: a, hash: l })
  );
}
function Zn() {
  return N.useContext(jl) != null;
}
function Kr() {
  return (Zn() || ie(!1), N.useContext(jl).location);
}
function vf(e) {
  N.useContext(Gt).static || N.useLayoutEffect(e);
}
function Ve() {
  let { isDataRoute: e } = N.useContext(Ct);
  return e ? d0() : Zh();
}
function Zh() {
  Zn() || ie(!1);
  let e = N.useContext(ia),
    { basename: t, future: n, navigator: r } = N.useContext(Gt),
    { matches: s } = N.useContext(Ct),
    { pathname: l } = Kr(),
    i = JSON.stringify(la(s, n.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    vf(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = oa(c, JSON.parse(i), l, d.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Wt([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d));
      },
      [t, r, i, l, e],
    )
  );
}
function aa() {
  let { matches: e } = N.useContext(Ct),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function yf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(Gt),
    { matches: s } = N.useContext(Ct),
    { pathname: l } = Kr(),
    i = JSON.stringify(la(s, r.v7_relativeSplatPath));
  return N.useMemo(() => oa(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function e0(e, t) {
  return t0(e, t);
}
function t0(e, t, n, r) {
  Zn() || ie(!1);
  let { navigator: s } = N.useContext(Gt),
    { matches: l } = N.useContext(Ct),
    i = l[l.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let c = Kr(),
    d;
  if (t) {
    var f;
    let j = typeof t == "string" ? Yn(t) : t;
    (u === "/" || ((f = j.pathname) != null && f.startsWith(u)) || ie(!1),
      (d = j));
  } else d = c;
  let m = d.pathname || "/",
    g = m;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let w = Ch(e, { pathname: g }),
    y = o0(
      w &&
        w.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: Wt([
              u,
              s.encodeLocation
                ? s.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : Wt([
                    u,
                    s.encodeLocation
                      ? s.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
      r,
    );
  return t && y
    ? N.createElement(
        jl.Provider,
        {
          value: {
            location: $r(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: zt.Pop,
          },
        },
        y,
      )
    : y;
}
function n0() {
  let e = c0(),
    t = Jh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const r0 = N.createElement(n0, null);
class s0 extends N.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Ct.Provider,
          { value: this.props.routeContext },
          N.createElement(gf.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function l0(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = N.useContext(ia);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Ct.Provider, { value: t }, r)
  );
}
function o0(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let d = i.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (d >= 0 || ie(!1), (i = i.slice(0, Math.min(i.length, d + 1))));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          w =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || w) {
          ((u = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((d, f, m) => {
    let g,
      w = !1,
      y = null,
      j = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || r0),
      u &&
        (c < 0 && m === 0
          ? (f0("route-fallback"), (w = !0), (j = null))
          : c === m &&
            ((w = !0), (j = f.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, m + 1)),
      p = () => {
        let x;
        return (
          g
            ? (x = y)
            : w
              ? (x = j)
              : f.route.Component
                ? (x = N.createElement(f.route.Component, null))
                : f.route.element
                  ? (x = f.route.element)
                  : (x = d),
          N.createElement(l0, {
            match: f,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? N.createElement(s0, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var wf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(wf || {}),
  jf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(jf || {});
function i0(e) {
  let t = N.useContext(ia);
  return (t || ie(!1), t);
}
function a0(e) {
  let t = N.useContext(Gh);
  return (t || ie(!1), t);
}
function u0(e) {
  let t = N.useContext(Ct);
  return (t || ie(!1), t);
}
function Nf(e) {
  let t = u0(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ie(!1), n.route.id);
}
function c0() {
  var e;
  let t = N.useContext(gf),
    n = a0(),
    r = Nf();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function d0() {
  let { router: e } = i0(wf.UseNavigateStable),
    t = Nf(jf.UseNavigateStable),
    n = N.useRef(!1);
  return (
    vf(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (s, l) {
        (l === void 0 && (l = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, $r({ fromRouteId: t }, l))));
      },
      [e, t],
    )
  );
}
const Pu = {};
function f0(e, t, n) {
  Pu[e] || (Pu[e] = !0);
}
function m0(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Nn(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Zn() || ie(!1);
  let { future: l, static: i } = N.useContext(Gt),
    { matches: a } = N.useContext(Ct),
    { pathname: u } = Kr(),
    c = Ve(),
    d = oa(t, la(a, l.v7_relativeSplatPath), u, s === "path"),
    f = JSON.stringify(d);
  return (
    N.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: s }),
      [c, f, s, n, r],
    ),
    null
  );
}
function pe(e) {
  ie(!1);
}
function p0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = zt.Pop,
    navigator: l,
    static: i = !1,
    future: a,
  } = e;
  Zn() && ie(!1);
  let u = t.replace(/^\/*/, "/"),
    c = N.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: i,
        future: $r({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, l, i],
    );
  typeof r == "string" && (r = Yn(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: g = null,
      key: w = "default",
    } = r,
    y = N.useMemo(() => {
      let j = sa(d, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: f, hash: m, state: g, key: w },
            navigationType: s,
          };
    }, [u, d, f, m, g, w, s]);
  return y == null
    ? null
    : N.createElement(
        Gt.Provider,
        { value: c },
        N.createElement(jl.Provider, { children: n, value: y }),
      );
}
function h0(e) {
  let { children: t, location: n } = e;
  return e0(ti(t), n);
}
new Promise(() => {});
function ti(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, s) => {
      if (!N.isValidElement(r)) return;
      let l = [...t, s];
      if (r.type === N.Fragment) {
        n.push.apply(n, ti(r.props.children, l));
        return;
      }
      (r.type !== pe && ie(!1), !r.props.index || !r.props.children || ie(!1));
      let i = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (i.children = ti(r.props.children, l)), n.push(i));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ni.apply(null, arguments)
  );
}
function x0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function g0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function v0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !g0(e);
}
const y0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  w0 = "6";
try {
  window.__reactRouterVersion = w0;
} catch {}
const j0 = "startTransition",
  Ru = fm[j0];
function N0(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    l = N.useRef();
  l.current == null && (l.current = kh({ window: s, v5Compat: !0 }));
  let i = l.current,
    [a, u] = N.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    d = N.useCallback(
      (f) => {
        c && Ru ? Ru(() => u(f)) : u(f);
      },
      [u, c],
    );
  return (
    N.useLayoutEffect(() => i.listen(d), [i, d]),
    N.useEffect(() => m0(r), [r]),
    N.createElement(p0, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const S0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  k0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  G = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: l,
        replace: i,
        state: a,
        target: u,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      m = x0(t, y0),
      { basename: g } = N.useContext(Gt),
      w,
      y = !1;
    if (typeof c == "string" && k0.test(c) && ((w = c), S0))
      try {
        let x = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(x.protocol + c) : new URL(c),
          E = sa(S.pathname, g);
        S.origin === x.origin && E != null
          ? (c = E + S.search + S.hash)
          : (y = !0);
      } catch {}
    let j = Yh(c, { relative: s }),
      h = b0(c, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: s,
        viewTransition: f,
      });
    function p(x) {
      (r && r(x), x.defaultPrevented || h(x));
    }
    return N.createElement(
      "a",
      ni({}, m, { href: w || j, onClick: y || l ? r : p, ref: n, target: u }),
    );
  });
var Lu;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Lu || (Lu = {}));
var Tu;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Tu || (Tu = {}));
function b0(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: l,
      relative: i,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Ve(),
    c = Kr(),
    d = yf(e, { relative: i });
  return N.useCallback(
    (f) => {
      if (v0(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : rl(c) === rl(d);
        u(e, {
          replace: m,
          state: s,
          preventScrollReset: l,
          relative: i,
          viewTransition: a,
        });
      }
    },
    [c, u, d, r, s, n, e, l, i, a],
  );
}
function Sf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: E0 } = Object.prototype,
  { getPrototypeOf: Nl } = Object,
  { iterator: Sl, toStringTag: kf } = Symbol,
  kl = ((e) => (t) => {
    const n = E0.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  at = (e) => ((e = e.toLowerCase()), (t) => kl(t) === e),
  bl = (e) => (t) => typeof t === e,
  { isArray: mn } = Array,
  Kn = bl("undefined");
function er(e) {
  return (
    e !== null &&
    !Kn(e) &&
    e.constructor !== null &&
    !Kn(e.constructor) &&
    Fe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const bf = at("ArrayBuffer");
function C0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && bf(e.buffer)),
    t
  );
}
const _0 = bl("string"),
  Fe = bl("function"),
  Ef = bl("number"),
  Jr = (e) => e !== null && typeof e == "object",
  P0 = (e) => e === !0 || e === !1,
  Rs = (e) => {
    if (kl(e) !== "object") return !1;
    const t = Nl(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(kf in e) &&
      !(Sl in e)
    );
  },
  R0 = (e) => {
    if (!Jr(e) || er(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  L0 = at("Date"),
  T0 = at("File"),
  O0 = (e) => !!(e && typeof e.uri < "u"),
  A0 = (e) => e && typeof e.getParts < "u",
  D0 = at("Blob"),
  z0 = at("FileList"),
  F0 = (e) => Jr(e) && Fe(e.pipe);
function I0() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const Ou = I0(),
  Au = typeof Ou.FormData < "u" ? Ou.FormData : void 0,
  M0 = (e) => {
    if (!e) return !1;
    if (Au && e instanceof Au) return !0;
    const t = Nl(e);
    if (!t || t === Object.prototype || !Fe(e.append)) return !1;
    const n = kl(e);
    return (
      n === "formdata" ||
      (n === "object" && Fe(e.toString) && e.toString() === "[object FormData]")
    );
  },
  U0 = at("URLSearchParams"),
  [B0, $0, H0, V0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    at,
  ),
  W0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), mn(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (er(e)) return;
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let a;
    for (r = 0; r < i; r++) ((a = l[r]), t.call(null, e[a], a, e));
  }
}
function Cf(e, t) {
  if (er(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const rn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  _f = (e) => !Kn(e) && e !== rn;
function ri(...e) {
  const { caseless: t, skipUndefined: n } = (_f(this) && this) || {},
    r = {},
    s = (l, i) => {
      if (i === "__proto__" || i === "constructor" || i === "prototype") return;
      const a = (t && typeof i == "string" && Cf(r, i)) || i,
        u = si(r, a) ? r[a] : void 0;
      Rs(u) && Rs(l)
        ? (r[a] = ri(u, l))
        : Rs(l)
          ? (r[a] = ri({}, l))
          : mn(l)
            ? (r[a] = l.slice())
            : (!n || !Kn(l)) && (r[a] = l);
    };
  for (let l = 0, i = e.length; l < i; l++) {
    const a = e[l];
    if (!a || er(a) || (Xr(a, s), typeof a != "object" || mn(a))) continue;
    const u = Object.getOwnPropertySymbols(a);
    for (let c = 0; c < u.length; c++) {
      const d = u[c];
      rx.call(a, d) && s(a[d], d);
    }
  }
  return r;
}
const Q0 = (e, t, n, { allOwnKeys: r } = {}) => (
    Xr(
      t,
      (s, l) => {
        n && Fe(s)
          ? Object.defineProperty(e, l, {
              __proto__: null,
              value: Sf(s, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, l, {
              __proto__: null,
              value: s,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  q0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  K0 = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  J0 = (e, t, n, r) => {
    let s, l, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), l = s.length; l-- > 0; )
        ((i = s[l]),
          (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0)));
      e = n !== !1 && Nl(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  X0 = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  G0 = (e) => {
    if (!e) return null;
    if (mn(e)) return e;
    let t = e.length;
    if (!Ef(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Y0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Nl(Uint8Array)),
  Z0 = (e, t) => {
    const r = (e && e[Sl]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const l = s.value;
      t.call(e, l[0], l[1]);
    }
  },
  ex = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  tx = at("HTMLFormElement"),
  nx = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  si = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  { propertyIsEnumerable: rx } = Object.prototype,
  sx = at("RegExp"),
  Pf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (Xr(n, (s, l) => {
      let i;
      (i = t(s, l, e)) !== !1 && (r[l] = i || s);
    }),
      Object.defineProperties(e, r));
  },
  lx = (e) => {
    Pf(e, (t, n) => {
      if (Fe(e) && ["arguments", "caller", "callee"].includes(n)) return !1;
      const r = e[n];
      if (Fe(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ox = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((l) => {
          n[l] = !0;
        });
      };
    return (mn(e) ? r(e) : r(String(e).split(t)), n);
  },
  ix = () => {},
  ax = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function ux(e) {
  return !!(e && Fe(e.append) && e[kf] === "FormData" && e[Sl]);
}
const cx = (e) => {
    const t = new WeakSet(),
      n = (r) => {
        if (Jr(r)) {
          if (t.has(r)) return;
          if (er(r)) return r;
          if (!("toJSON" in r)) {
            t.add(r);
            const s = mn(r) ? [] : {};
            return (
              Xr(r, (l, i) => {
                const a = n(l);
                !Kn(a) && (s[i] = a);
              }),
              t.delete(r),
              s
            );
          }
        }
        return r;
      };
    return n(e);
  },
  dx = at("AsyncFunction"),
  fx = (e) => e && (Jr(e) || Fe(e)) && Fe(e.then) && Fe(e.catch),
  Rf = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            rn.addEventListener(
              "message",
              ({ source: s, data: l }) => {
                s === rn && l === n && r.length && r.shift()();
              },
              !1,
            ),
            (s) => {
              (r.push(s), rn.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Fe(rn.postMessage),
  ),
  mx =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(rn)
      : (typeof process < "u" && process.nextTick) || Rf,
  px = (e) => e != null && Fe(e[Sl]),
  v = {
    isArray: mn,
    isArrayBuffer: bf,
    isBuffer: er,
    isFormData: M0,
    isArrayBufferView: C0,
    isString: _0,
    isNumber: Ef,
    isBoolean: P0,
    isObject: Jr,
    isPlainObject: Rs,
    isEmptyObject: R0,
    isReadableStream: B0,
    isRequest: $0,
    isResponse: H0,
    isHeaders: V0,
    isUndefined: Kn,
    isDate: L0,
    isFile: T0,
    isReactNativeBlob: O0,
    isReactNative: A0,
    isBlob: D0,
    isRegExp: sx,
    isFunction: Fe,
    isStream: F0,
    isURLSearchParams: U0,
    isTypedArray: Y0,
    isFileList: z0,
    forEach: Xr,
    merge: ri,
    extend: Q0,
    trim: W0,
    stripBOM: q0,
    inherits: K0,
    toFlatObject: J0,
    kindOf: kl,
    kindOfTest: at,
    endsWith: X0,
    toArray: G0,
    forEachEntry: Z0,
    matchAll: ex,
    isHTMLForm: tx,
    hasOwnProperty: si,
    hasOwnProp: si,
    reduceDescriptors: Pf,
    freezeMethods: lx,
    toObjectSet: ox,
    toCamelCase: nx,
    noop: ix,
    toFiniteNumber: ax,
    findKey: Cf,
    global: rn,
    isContextDefined: _f,
    isSpecCompliantForm: ux,
    toJSONObject: cx,
    isAsyncFn: dx,
    isThenable: fx,
    setImmediate: Rf,
    asap: mx,
    isIterable: px,
  },
  hx = v.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  xx = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            ((s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && hx[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  };
function gx(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32) break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const vx = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"),
  yx = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function ua(e, t) {
  return v.isArray(e) ? e.map((n) => ua(n, t)) : gx(String(e).replace(t, ""));
}
const wx = (e) => ua(e, vx),
  jx = (e) => ua(e, yx);
function Lf(e) {
  const t = Object.create(null);
  return (
    v.forEach(e.toJSON(), (n, r) => {
      t[r] = jx(n);
    }),
    t
  );
}
const Du = Symbol("internals");
function cr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ls(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(Ls) : wx(String(e));
}
function Nx(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Sx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function no(e, t, n, r, s) {
  if (v.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!v.isString(t))) {
    if (v.isString(r)) return t.indexOf(r) !== -1;
    if (v.isRegExp(r)) return r.test(t);
  }
}
function kx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function bx(e, t) {
  const n = v.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (s, l, i) {
        return this[r].call(this, t, s, l, i);
      },
      configurable: !0,
    });
  });
}
let _e = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function l(a, u, c) {
      const d = cr(u);
      if (!d) return;
      const f = v.findKey(s, d);
      (!f || s[f] === void 0 || c === !0 || (c === void 0 && s[f] !== !1)) &&
        (s[f || u] = Ls(a));
    }
    const i = (a, u) => v.forEach(a, (c, d) => l(c, d, u));
    if (v.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (v.isString(t) && (t = t.trim()) && !Sx(t)) i(xx(t), n);
    else if (v.isObject(t) && v.isIterable(t)) {
      let a = {},
        u,
        c;
      for (const d of t) {
        if (!v.isArray(d))
          throw new TypeError("Object iterator must return a key-value pair");
        a[(c = d[0])] = (u = a[c])
          ? v.isArray(u)
            ? [...u, d[1]]
            : [u, d[1]]
          : d[1];
      }
      i(a, n);
    } else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = cr(t)), t)) {
      const r = v.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Nx(s);
        if (v.isFunction(n)) return n.call(this, s, r);
        if (v.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = cr(t)), t)) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || no(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function l(i) {
      if (((i = cr(i)), i)) {
        const a = v.findKey(r, i);
        a && (!n || no(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return (v.isArray(t) ? t.forEach(l) : l(t), s);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || no(this, this[l], l, t, !0)) && (delete this[l], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      v.forEach(this, (s, l) => {
        const i = v.findKey(r, l);
        if (i) {
          ((n[i] = Ls(s)), delete n[l]);
          return;
        }
        const a = t ? kx(l) : String(l).trim();
        (a !== l && delete n[l], (n[a] = Ls(s)), (r[a] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      v.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && v.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((s) => r.set(s)), r);
  }
  static accessor(t) {
    const r = (this[Du] = this[Du] = { accessors: {} }).accessors,
      s = this.prototype;
    function l(i) {
      const a = cr(i);
      r[a] || (bx(s, i), (r[a] = !0));
    }
    return (v.isArray(t) ? t.forEach(l) : l(t), this);
  }
};
_e.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
v.reduceDescriptors(_e.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
v.freezeMethods(_e);
const Ex = "[REDACTED ****]";
function Cx(e) {
  if (v.hasOwnProp(e, "toJSON")) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (v.hasOwnProp(t, "toJSON")) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function _x(e, t) {
  const n = new Set(t.map((l) => String(l).toLowerCase())),
    r = [],
    s = (l) => {
      if (l === null || typeof l != "object" || v.isBuffer(l)) return l;
      if (r.indexOf(l) !== -1) return;
      (l instanceof _e && (l = l.toJSON()), r.push(l));
      let i;
      if (v.isArray(l))
        ((i = []),
          l.forEach((a, u) => {
            const c = s(a);
            v.isUndefined(c) || (i[u] = c);
          }));
      else {
        if (!v.isPlainObject(l) && Cx(l)) return (r.pop(), l);
        i = Object.create(null);
        for (const [a, u] of Object.entries(l)) {
          const c = n.has(a.toLowerCase()) ? Ex : s(u);
          v.isUndefined(c) || (i[a] = c);
        }
      }
      return (r.pop(), i);
    };
  return s(e);
}
let A = class Tf extends Error {
  static from(t, n, r, s, l, i) {
    const a = new Tf(t.message, n || t.code, r, s, l);
    return (
      (a.cause = t),
      (a.name = t.name),
      t.status != null && a.status == null && (a.status = t.status),
      i && Object.assign(a, i),
      a
    );
  }
  constructor(t, n, r, s, l) {
    (super(t),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      s && (this.request = s),
      l && ((this.response = l), (this.status = l.status)));
  }
  toJSON() {
    const t = this.config,
      n = t && v.hasOwnProp(t, "redact") ? t.redact : void 0,
      r = v.isArray(n) && n.length > 0 ? _x(t, n) : v.toJSONObject(t);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: r,
      code: this.code,
      status: this.status,
    };
  }
};
A.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
A.ERR_BAD_OPTION = "ERR_BAD_OPTION";
A.ECONNABORTED = "ECONNABORTED";
A.ETIMEDOUT = "ETIMEDOUT";
A.ECONNREFUSED = "ECONNREFUSED";
A.ERR_NETWORK = "ERR_NETWORK";
A.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
A.ERR_DEPRECATED = "ERR_DEPRECATED";
A.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
A.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
A.ERR_CANCELED = "ERR_CANCELED";
A.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
A.ERR_INVALID_URL = "ERR_INVALID_URL";
A.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Px = null;
function li(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Of(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ro(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, l) {
          return ((s = Of(s)), !n && l ? "[" + s + "]" : s);
        })
        .join(n ? "." : "")
    : t;
}
function Rx(e) {
  return v.isArray(e) && !e.some(li);
}
const Lx = v.toFlatObject(v, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function El(e, t, n) {
  if (!v.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = v.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (j, h) {
        return !v.isUndefined(h[j]);
      },
    )));
  const r = n.metaTokens,
    s = n.visitor || f,
    l = n.dots,
    i = n.indexes,
    a = n.Blob || (typeof Blob < "u" && Blob),
    u = n.maxDepth === void 0 ? 100 : n.maxDepth,
    c = a && v.isSpecCompliantForm(t);
  if (!v.isFunction(s)) throw new TypeError("visitor must be a function");
  function d(y) {
    if (y === null) return "";
    if (v.isDate(y)) return y.toISOString();
    if (v.isBoolean(y)) return y.toString();
    if (!c && v.isBlob(y))
      throw new A("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(y) || v.isTypedArray(y)
      ? c && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, j, h) {
    let p = y;
    if (v.isReactNative(t) && v.isReactNativeBlob(y))
      return (t.append(ro(h, j, l), d(y)), !1);
    if (y && !h && typeof y == "object") {
      if (v.endsWith(j, "{}"))
        ((j = r ? j : j.slice(0, -2)), (y = JSON.stringify(y)));
      else if (
        (v.isArray(y) && Rx(y)) ||
        ((v.isFileList(y) || v.endsWith(j, "[]")) && (p = v.toArray(y)))
      )
        return (
          (j = Of(j)),
          p.forEach(function (S, E) {
            !(v.isUndefined(S) || S === null) &&
              t.append(
                i === !0 ? ro([j], E, l) : i === null ? j : j + "[]",
                d(S),
              );
          }),
          !1
        );
    }
    return li(y) ? !0 : (t.append(ro(h, j, l), d(y)), !1);
  }
  const m = [],
    g = Object.assign(Lx, {
      defaultVisitor: f,
      convertValue: d,
      isVisitable: li,
    });
  function w(y, j, h = 0) {
    if (!v.isUndefined(y)) {
      if (h > u)
        throw new A(
          "Object is too deeply nested (" + h + " levels). Max depth: " + u,
          A.ERR_FORM_DATA_DEPTH_EXCEEDED,
        );
      if (m.indexOf(y) !== -1)
        throw new Error("Circular reference detected in " + j.join("."));
      (m.push(y),
        v.forEach(y, function (x, S) {
          (!(v.isUndefined(x) || x === null) &&
            s.call(t, x, v.isString(S) ? S.trim() : S, j, g)) === !0 &&
            w(x, j ? j.concat(S) : [S], h + 1);
        }),
        m.pop());
    }
  }
  if (!v.isObject(e)) throw new TypeError("data must be an object");
  return (w(e), t);
}
function zu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (r) {
    return t[r];
  });
}
function ca(e, t) {
  ((this._pairs = []), e && El(e, this, t));
}
const Af = ca.prototype;
Af.append = function (t, n) {
  this._pairs.push([t, n]);
};
Af.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, zu);
      }
    : zu;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Tx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function Df(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Tx,
    s = v.isFunction(n) ? { serialize: n } : n,
    l = s && s.serialize;
  let i;
  if (
    (l
      ? (i = l(t, s))
      : (i = v.isURLSearchParams(t) ? t.toString() : new ca(t, s).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    (a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i));
  }
  return e;
}
class Fu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    v.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const da = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
  },
  Ox = typeof URLSearchParams < "u" ? URLSearchParams : ca,
  Ax = typeof FormData < "u" ? FormData : null,
  Dx = typeof Blob < "u" ? Blob : null,
  zx = {
    isBrowser: !0,
    classes: { URLSearchParams: Ox, FormData: Ax, Blob: Dx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  fa = typeof window < "u" && typeof document < "u",
  oi = (typeof navigator == "object" && navigator) || void 0,
  Fx =
    fa &&
    (!oi || ["ReactNative", "NativeScript", "NS"].indexOf(oi.product) < 0),
  Ix =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Mx = (fa && window.location.href) || "http://localhost",
  Ux = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: fa,
        hasStandardBrowserEnv: Fx,
        hasStandardBrowserWebWorkerEnv: Ix,
        navigator: oi,
        origin: Mx,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ve = { ...Ux, ...zx };
function Bx(e, t) {
  return El(e, new ve.classes.URLSearchParams(), {
    visitor: function (n, r, s, l) {
      return ve.isNode && v.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : l.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function $x(e) {
  return v
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Hx(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let l;
  for (r = 0; r < s; r++) ((l = n[r]), (t[l] = e[l]));
  return t;
}
function zf(e) {
  function t(n, r, s, l) {
    let i = n[l++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      u = l >= n.length;
    return (
      (i = !i && v.isArray(s) ? s.length : i),
      u
        ? (v.hasOwnProp(s, i)
            ? (s[i] = v.isArray(s[i]) ? s[i].concat(r) : [s[i], r])
            : (s[i] = r),
          !a)
        : ((!v.hasOwnProp(s, i) || !v.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], l) && v.isArray(s[i]) && (s[i] = Hx(s[i])),
          !a)
    );
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return (
      v.forEachEntry(e, (r, s) => {
        t($x(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
const jn = (e, t) => (e != null && v.hasOwnProp(e, t) ? e[t] : void 0);
function Vx(e, t, n) {
  if (v.isString(e))
    try {
      return ((t || JSON.parse)(e), v.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Gr = {
  transitional: da,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        l = v.isObject(t);
      if ((l && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t)))
        return s ? JSON.stringify(zf(t)) : t;
      if (
        v.isArrayBuffer(t) ||
        v.isBuffer(t) ||
        v.isStream(t) ||
        v.isFile(t) ||
        v.isBlob(t) ||
        v.isReadableStream(t)
      )
        return t;
      if (v.isArrayBufferView(t)) return t.buffer;
      if (v.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (l) {
        const u = jn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Bx(t, u).toString();
        if ((a = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = jn(this, "env"),
            d = c && c.FormData;
          return El(a ? { "files[]": t } : t, d && new d(), u);
        }
      }
      return l || s ? (n.setContentType("application/json", !1), Vx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = jn(this, "transitional") || Gr.transitional,
        r = n && n.forcedJSONParsing,
        s = jn(this, "responseType"),
        l = s === "json";
      if (v.isResponse(t) || v.isReadableStream(t)) return t;
      if (t && v.isString(t) && ((r && !s) || l)) {
        const a = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t, jn(this, "parseReviver"));
        } catch (u) {
          if (a)
            throw u.name === "SyntaxError"
              ? A.from(u, A.ERR_BAD_RESPONSE, this, null, jn(this, "response"))
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ve.classes.FormData, Blob: ve.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
v.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Gr.headers[e] = {};
});
function so(e, t) {
  const n = this || Gr,
    r = t || n,
    s = _e.from(r.headers);
  let l = r.data;
  return (
    v.forEach(e, function (a) {
      l = a.call(n, l, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    l
  );
}
function Ff(e) {
  return !!(e && e.__CANCEL__);
}
let Yr = class extends A {
  constructor(t, n, r) {
    (super(t ?? "canceled", A.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function If(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new A(
          "Request failed with status code " + n.status,
          n.status >= 400 && n.status < 500
            ? A.ERR_BAD_REQUEST
            : A.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function Wx(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || "";
}
function Qx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    l = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        d = r[l];
      (i || (i = c), (n[s] = u), (r[s] = c));
      let f = l,
        m = 0;
      for (; f !== s; ) ((m += n[f++]), (f = f % e));
      if (((s = (s + 1) % e), s === l && (l = (l + 1) % e), c - i < t)) return;
      const g = d && c - d;
      return g ? Math.round((m * 1e3) / g) : void 0;
    }
  );
}
function qx(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    l;
  const i = (c, d = Date.now()) => {
    ((n = d), (s = null), l && (clearTimeout(l), (l = null)), e(...c));
  };
  return [
    (...c) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? i(c, d)
        : ((s = c),
          l ||
            (l = setTimeout(() => {
              ((l = null), i(s));
            }, r - f)));
    },
    () => s && i(s),
  ];
}
const sl = (e, t, n = 3) => {
    let r = 0;
    const s = Qx(50, 250);
    return qx((l) => {
      if (!l || typeof l.loaded != "number") return;
      const i = l.loaded,
        a = l.lengthComputable ? l.total : void 0,
        u = a != null ? Math.min(i, a) : i,
        c = Math.max(0, u - r),
        d = s(c);
      r = Math.max(r, u);
      const f = {
        loaded: u,
        total: a,
        progress: a ? u / a : void 0,
        bytes: c,
        rate: d || void 0,
        estimated: d && a ? (a - u) / d : void 0,
        event: l,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Iu = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Mu =
    (e) =>
    (...t) =>
      v.asap(() => e(...t)),
  Kx = ve.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ve.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ve.origin),
        ve.navigator && /(msie|trident)/i.test(ve.navigator.userAgent),
      )
    : () => !0,
  Jx = ve.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, l, i) {
          if (typeof document > "u") return;
          const a = [`${e}=${encodeURIComponent(t)}`];
          (v.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`),
            v.isString(r) && a.push(`path=${r}`),
            v.isString(s) && a.push(`domain=${s}`),
            l === !0 && a.push("secure"),
            v.isString(i) && a.push(`SameSite=${i}`),
            (document.cookie = a.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.split(";");
          for (let n = 0; n < t.length; n++) {
            const r = t[n].replace(/^\s+/, ""),
              s = r.indexOf("=");
            if (s !== -1 && r.slice(0, s) === e)
              return decodeURIComponent(r.slice(s + 1));
          }
          return null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Xx(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Gx(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mf(e, t, n) {
  let r = !Xx(t);
  return e && (r || n === !1) ? Gx(e, t) : t;
}
const Uu = (e) => (e instanceof _e ? { ...e } : e);
function pn(e, t) {
  t = t || {};
  const n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(c, d, f, m) {
    return v.isPlainObject(c) && v.isPlainObject(d)
      ? v.merge.call({ caseless: m }, c, d)
      : v.isPlainObject(d)
        ? v.merge({}, d)
        : v.isArray(d)
          ? d.slice()
          : d;
  }
  function s(c, d, f, m) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(c)) return r(void 0, c, f, m);
    } else return r(c, d, f, m);
  }
  function l(c, d) {
    if (!v.isUndefined(d)) return r(void 0, d);
  }
  function i(c, d) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function a(c, d, f) {
    if (v.hasOwnProp(t, f)) return r(c, d);
    if (v.hasOwnProp(e, f)) return r(void 0, c);
  }
  const u = {
    url: l,
    method: l,
    data: l,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, d, f) => s(Uu(c), Uu(d), f, !0),
  };
  return (
    v.forEach(Object.keys({ ...e, ...t }), function (d) {
      if (d === "__proto__" || d === "constructor" || d === "prototype") return;
      const f = v.hasOwnProp(u, d) ? u[d] : s,
        m = v.hasOwnProp(e, d) ? e[d] : void 0,
        g = v.hasOwnProp(t, d) ? t[d] : void 0,
        w = f(m, g, d);
      (v.isUndefined(w) && f !== a) || (n[d] = w);
    }),
    n
  );
}
const Yx = ["content-type", "content-length"];
function Zx(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, s]) => {
    Yx.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const eg = (e) =>
  encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
    String.fromCharCode(parseInt(n, 16)),
  );
function Uf(e) {
  const t = pn({}, e),
    n = (m) => (v.hasOwnProp(t, m) ? t[m] : void 0),
    r = n("data");
  let s = n("withXSRFToken");
  const l = n("xsrfHeaderName"),
    i = n("xsrfCookieName");
  let a = n("headers");
  const u = n("auth"),
    c = n("baseURL"),
    d = n("allowAbsoluteUrls"),
    f = n("url");
  if (
    ((t.headers = a = _e.from(a)),
    (t.url = Df(Mf(c, f, d), n("params"), n("paramsSerializer"))),
    u &&
      a.set(
        "Authorization",
        "Basic " +
          btoa((u.username || "") + ":" + (u.password ? eg(u.password) : "")),
      ),
    v.isFormData(r) &&
      (ve.hasStandardBrowserEnv ||
      ve.hasStandardBrowserWebWorkerEnv ||
      v.isReactNative(r)
        ? a.setContentType(void 0)
        : v.isFunction(r.getHeaders) &&
          Zx(a, r.getHeaders(), n("formDataHeaderPolicy"))),
    ve.hasStandardBrowserEnv &&
      (v.isFunction(s) && (s = s(t)), s === !0 || (s == null && Kx(t.url))))
  ) {
    const g = l && i && Jx.read(i);
    g && a.set(l, g);
  }
  return t;
}
const tg = typeof XMLHttpRequest < "u",
  ng =
    tg &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Uf(e);
        let l = s.data;
        const i = _e.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = s,
          d,
          f,
          m,
          g,
          w;
        function y() {
          (g && g(),
            w && w(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d));
        }
        let j = new XMLHttpRequest();
        (j.open(s.method.toUpperCase(), s.url, !0), (j.timeout = s.timeout));
        function h() {
          if (!j) return;
          const x = _e.from(
              "getAllResponseHeaders" in j && j.getAllResponseHeaders(),
            ),
            E = {
              data:
                !a || a === "text" || a === "json"
                  ? j.responseText
                  : j.response,
              status: j.status,
              statusText: j.statusText,
              headers: x,
              config: e,
              request: j,
            };
          (If(
            function (L) {
              (n(L), y());
            },
            function (L) {
              (r(L), y());
            },
            E,
          ),
            (j = null));
        }
        ("onloadend" in j
          ? (j.onloadend = h)
          : (j.onreadystatechange = function () {
              !j ||
                j.readyState !== 4 ||
                (j.status === 0 &&
                  !(j.responseURL && j.responseURL.startsWith("file:"))) ||
                setTimeout(h);
            }),
          (j.onabort = function () {
            j &&
              (r(new A("Request aborted", A.ECONNABORTED, e, j)),
              y(),
              (j = null));
          }),
          (j.onerror = function (S) {
            const E = S && S.message ? S.message : "Network Error",
              R = new A(E, A.ERR_NETWORK, e, j);
            ((R.event = S || null), r(R), y(), (j = null));
          }),
          (j.ontimeout = function () {
            let S = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = s.transitional || da;
            (s.timeoutErrorMessage && (S = s.timeoutErrorMessage),
              r(
                new A(
                  S,
                  E.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
                  e,
                  j,
                ),
              ),
              y(),
              (j = null));
          }),
          l === void 0 && i.setContentType(null),
          "setRequestHeader" in j &&
            v.forEach(Lf(i), function (S, E) {
              j.setRequestHeader(E, S);
            }),
          v.isUndefined(s.withCredentials) ||
            (j.withCredentials = !!s.withCredentials),
          a && a !== "json" && (j.responseType = s.responseType),
          c && (([m, w] = sl(c, !0)), j.addEventListener("progress", m)),
          u &&
            j.upload &&
            (([f, g] = sl(u)),
            j.upload.addEventListener("progress", f),
            j.upload.addEventListener("loadend", g)),
          (s.cancelToken || s.signal) &&
            ((d = (x) => {
              j &&
                (r(!x || x.type ? new Yr(null, e, j) : x),
                j.abort(),
                y(),
                (j = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted
                ? d()
                : s.signal.addEventListener("abort", d))));
        const p = Wx(s.url);
        if (p && !ve.protocols.includes(p)) {
          r(new A("Unsupported protocol " + p + ":", A.ERR_BAD_REQUEST, e));
          return;
        }
        j.send(l || null);
      });
    },
  rg = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    const n = new AbortController();
    let r = !1;
    const s = function (u) {
      if (!r) {
        ((r = !0), i());
        const c = u instanceof Error ? u : this.reason;
        n.abort(
          c instanceof A ? c : new Yr(c instanceof Error ? c.message : c),
        );
      }
    };
    let l =
      t &&
      setTimeout(() => {
        ((l = null), s(new A(`timeout of ${t}ms exceeded`, A.ETIMEDOUT)));
      }, t);
    const i = () => {
      e &&
        (l && clearTimeout(l),
        (l = null),
        e.forEach((u) => {
          u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
        }),
        (e = null));
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: a } = n;
    return ((a.unsubscribe = () => v.asap(i)), a);
  },
  sg = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) ((s = r + t), yield e.slice(r, s), (r = s));
  },
  lg = async function* (e, t) {
    for await (const n of og(e)) yield* sg(n, t);
  },
  og = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Bu = (e, t, n, r) => {
    const s = lg(e, t);
    let l = 0,
      i,
      a = (u) => {
        i || ((i = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: c, value: d } = await s.next();
            if (c) {
              (a(), u.close());
              return;
            }
            let f = d.byteLength;
            if (n) {
              let m = (l += f);
              n(m);
            }
            u.enqueue(new Uint8Array(d));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(u) {
          return (a(u), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  };
function ig(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const a = r.length;
    for (let g = 0; g < a; g++)
      if (r.charCodeAt(g) === 37 && g + 2 < a) {
        const w = r.charCodeAt(g + 1),
          y = r.charCodeAt(g + 2);
        ((w >= 48 && w <= 57) ||
          (w >= 65 && w <= 70) ||
          (w >= 97 && w <= 102)) &&
          ((y >= 48 && y <= 57) ||
            (y >= 65 && y <= 70) ||
            (y >= 97 && y <= 102)) &&
          ((i -= 2), (g += 2));
      }
    let u = 0,
      c = a - 1;
    const d = (g) =>
      g >= 2 &&
      r.charCodeAt(g - 2) === 37 &&
      r.charCodeAt(g - 1) === 51 &&
      (r.charCodeAt(g) === 68 || r.charCodeAt(g) === 100);
    (c >= 0 && (r.charCodeAt(c) === 61 ? (u++, c--) : d(c) && (u++, (c -= 3))),
      u === 1 && c >= 0 && (r.charCodeAt(c) === 61 || d(c)) && u++);
    const m = Math.floor(i / 4) * 3 - (u || 0);
    return m > 0 ? m : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(r, "utf8");
  let l = 0;
  for (let i = 0, a = r.length; i < a; i++) {
    const u = r.charCodeAt(i);
    if (u < 128) l += 1;
    else if (u < 2048) l += 2;
    else if (u >= 55296 && u <= 56319 && i + 1 < a) {
      const c = r.charCodeAt(i + 1);
      c >= 56320 && c <= 57343 ? ((l += 4), i++) : (l += 3);
    } else l += 3;
  }
  return l;
}
const ma = "1.17.0",
  $u = 64 * 1024,
  { isFunction: gs } = v,
  ag = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
      String.fromCharCode(parseInt(n, 16)),
    ),
  Hu = (e) => {
    if (!v.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  },
  Vu = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ug = (e) => {
    const t = e.indexOf("://");
    let n = e;
    return (
      t !== -1 && (n = n.slice(t + 3)),
      n.includes("@") || n.includes(":")
    );
  },
  cg = (e) => {
    const t = v.global !== void 0 && v.global !== null ? v.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = v.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    const { fetch: s, Request: l, Response: i } = e,
      a = s ? gs(s) : typeof fetch == "function",
      u = gs(l),
      c = gs(i);
    if (!a) return !1;
    const d = a && gs(n),
      f =
        a &&
        (typeof r == "function"
          ? (
              (h) => (p) =>
                h.encode(p)
            )(new r())
          : async (h) => new Uint8Array(await new l(h).arrayBuffer())),
      m =
        u &&
        d &&
        Vu(() => {
          let h = !1;
          const p = new l(ve.origin, {
              body: new n(),
              method: "POST",
              get duplex() {
                return ((h = !0), "half");
              },
            }),
            x = p.headers.has("Content-Type");
          return (p.body != null && p.body.cancel(), h && !x);
        }),
      g = c && d && Vu(() => v.isReadableStream(new i("").body)),
      w = { stream: g && ((h) => h.body) };
    a &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
        !w[h] &&
          (w[h] = (p, x) => {
            let S = p && p[h];
            if (S) return S.call(p);
            throw new A(
              `Response type '${h}' is not supported`,
              A.ERR_NOT_SUPPORT,
              x,
            );
          });
      });
    const y = async (h) => {
        if (h == null) return 0;
        if (v.isBlob(h)) return h.size;
        if (v.isSpecCompliantForm(h))
          return (
            await new l(ve.origin, { method: "POST", body: h }).arrayBuffer()
          ).byteLength;
        if (v.isArrayBufferView(h) || v.isArrayBuffer(h)) return h.byteLength;
        if ((v.isURLSearchParams(h) && (h = h + ""), v.isString(h)))
          return (await f(h)).byteLength;
      },
      j = async (h, p) => {
        const x = v.toFiniteNumber(h.getContentLength());
        return x ?? y(p);
      };
    return async (h) => {
      let {
        url: p,
        method: x,
        data: S,
        signal: E,
        cancelToken: R,
        timeout: L,
        onDownloadProgress: _,
        onUploadProgress: $,
        responseType: F,
        headers: X,
        withCredentials: H = "same-origin",
        fetchOptions: C,
        maxContentLength: I,
        maxBodyLength: K,
      } = Uf(h);
      const ce = v.isNumber(I) && I > -1,
        _t = v.isNumber(K) && K > -1,
        P = (V) => (v.hasOwnProp(h, V) ? h[V] : void 0);
      let D = s || fetch;
      F = F ? (F + "").toLowerCase() : "text";
      let z = rg([E, R && R.toAbortSignal()], L),
        B = null;
      const J =
        z &&
        z.unsubscribe &&
        (() => {
          z.unsubscribe();
        });
      let pt;
      try {
        let V;
        const be = P("auth");
        if (be) {
          const T = be.username || "",
            W = be.password || "";
          V = { username: T, password: W };
        }
        if (ug(p)) {
          const T = new URL(p, ve.origin);
          if (!V && (T.username || T.password)) {
            const W = Hu(T.username),
              me = Hu(T.password);
            V = { username: W, password: me };
          }
          (T.username || T.password) &&
            ((T.username = ""), (T.password = ""), (p = T.href));
        }
        if (
          (V &&
            (X.delete("authorization"),
            X.set(
              "Authorization",
              "Basic " +
                btoa(ag((V.username || "") + ":" + (V.password || ""))),
            )),
          ce && typeof p == "string" && p.startsWith("data:") && ig(p) > I)
        )
          throw new A(
            "maxContentLength size of " + I + " exceeded",
            A.ERR_BAD_RESPONSE,
            h,
            B,
          );
        if (_t && x !== "get" && x !== "head") {
          const T = await j(X, S);
          if (typeof T == "number" && isFinite(T) && T > K)
            throw new A(
              "Request body larger than maxBodyLength limit",
              A.ERR_BAD_REQUEST,
              h,
              B,
            );
        }
        if (
          $ &&
          m &&
          x !== "get" &&
          x !== "head" &&
          (pt = await j(X, S)) !== 0
        ) {
          let T = new l(p, { method: "POST", body: S, duplex: "half" }),
            W;
          if (
            (v.isFormData(S) &&
              (W = T.headers.get("content-type")) &&
              X.setContentType(W),
            T.body)
          ) {
            const [me, yn] = Iu(pt, sl(Mu($)));
            S = Bu(T.body, $u, me, yn);
          }
        }
        v.isString(H) || (H = H ? "include" : "omit");
        const et = u && "credentials" in l.prototype;
        if (v.isFormData(S)) {
          const T = X.getContentType();
          T &&
            /^multipart\/form-data/i.test(T) &&
            !/boundary=/i.test(T) &&
            X.delete("content-type");
        }
        X.set("User-Agent", "axios/" + ma, !1);
        const ht = {
          ...C,
          signal: z,
          method: x.toUpperCase(),
          headers: Lf(X.normalize()),
          body: S,
          duplex: "half",
          credentials: et ? H : void 0,
        };
        B = u && new l(p, ht);
        let We = await (u ? D(B, C) : D(p, ht));
        if (ce) {
          const T = v.toFiniteNumber(We.headers.get("content-length"));
          if (T != null && T > I)
            throw new A(
              "maxContentLength size of " + I + " exceeded",
              A.ERR_BAD_RESPONSE,
              h,
              B,
            );
        }
        const vn = g && (F === "stream" || F === "response");
        if (g && We.body && (_ || ce || (vn && J))) {
          const T = {};
          ["status", "statusText", "headers"].forEach((tr) => {
            T[tr] = We[tr];
          });
          const W = v.toFiniteNumber(We.headers.get("content-length")),
            [me, yn] = (_ && Iu(W, sl(Mu(_), !0))) || [];
          let Zr = 0;
          const Kf = (tr) => {
            if (ce && ((Zr = tr), Zr > I))
              throw new A(
                "maxContentLength size of " + I + " exceeded",
                A.ERR_BAD_RESPONSE,
                h,
                B,
              );
            me && me(tr);
          };
          We = new i(
            Bu(We.body, $u, Kf, () => {
              (yn && yn(), J && J());
            }),
            T,
          );
        }
        F = F || "text";
        let k = await w[v.findKey(w, F) || "text"](We, h);
        if (ce && !g && !vn) {
          let T;
          if (
            (k != null &&
              (typeof k.byteLength == "number"
                ? (T = k.byteLength)
                : typeof k.size == "number"
                  ? (T = k.size)
                  : typeof k == "string" &&
                    (T =
                      typeof r == "function"
                        ? new r().encode(k).byteLength
                        : k.length)),
            typeof T == "number" && T > I)
          )
            throw new A(
              "maxContentLength size of " + I + " exceeded",
              A.ERR_BAD_RESPONSE,
              h,
              B,
            );
        }
        return (
          !vn && J && J(),
          await new Promise((T, W) => {
            If(T, W, {
              data: k,
              headers: _e.from(We.headers),
              status: We.status,
              statusText: We.statusText,
              config: h,
              request: B,
            });
          })
        );
      } catch (V) {
        if ((J && J(), z && z.aborted && z.reason instanceof A)) {
          const be = z.reason;
          throw (
            (be.config = h),
            B && (be.request = B),
            V !== be && (be.cause = V),
            be
          );
        }
        throw V &&
          V.name === "TypeError" &&
          /Load failed|fetch/i.test(V.message)
          ? Object.assign(
              new A("Network Error", A.ERR_NETWORK, h, B, V && V.response),
              { cause: V.cause || V },
            )
          : A.from(V, V && V.code, h, B, V && V.response);
      }
    };
  },
  dg = new Map(),
  Bf = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: s } = t,
      l = [r, s, n];
    let i = l.length,
      a = i,
      u,
      c,
      d = dg;
    for (; a--; )
      ((u = l[a]),
        (c = d.get(u)),
        c === void 0 && d.set(u, (c = a ? new Map() : cg(t))),
        (d = c));
    return c;
  };
Bf();
const pa = { http: Px, xhr: ng, fetch: { get: Bf } };
v.forEach(pa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Wu = (e) => `- ${e}`,
  fg = (e) => v.isFunction(e) || e === null || e === !1;
function mg(e, t) {
  e = v.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const l = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (
      ((s = r),
      !fg(r) && ((s = pa[(a = String(r)).toLowerCase()]), s === void 0))
    )
      throw new A(`Unknown adapter '${a}'`);
    if (s && (v.isFunction(s) || (s = s.get(t)))) break;
    l[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(l).map(
      ([u, c]) =>
        `adapter ${u} ` +
        (c === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let a = n
      ? i.length > 1
        ? `since :
` +
          i.map(Wu).join(`
`)
        : " " + Wu(i[0])
      : "as no adapter specified";
    throw new A(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT",
    );
  }
  return s;
}
const $f = { getAdapter: mg, adapters: pa };
function lo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Yr(null, e);
}
function Qu(e) {
  return (
    lo(e),
    (e.headers = _e.from(e.headers)),
    (e.data = so.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $f
      .getAdapter(
        e.adapter || Gr.adapter,
        e,
      )(e)
      .then(
        function (r) {
          (lo(e), (e.response = r));
          try {
            r.data = so.call(e, e.transformResponse, r);
          } finally {
            delete e.response;
          }
          return ((r.headers = _e.from(r.headers)), r);
        },
        function (r) {
          if (!Ff(r) && (lo(e), r && r.response)) {
            e.response = r.response;
            try {
              r.response.data = so.call(e, e.transformResponse, r.response);
            } finally {
              delete e.response;
            }
            r.response.headers = _e.from(r.response.headers);
          }
          return Promise.reject(r);
        },
      )
  );
}
const Cl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Cl[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const qu = {};
Cl.transitional = function (t, n, r) {
  function s(l, i) {
    return (
      "[Axios v" +
      ma +
      "] Transitional option '" +
      l +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (l, i, a) => {
    if (t === !1)
      throw new A(
        s(i, " has been removed" + (n ? " in " + n : "")),
        A.ERR_DEPRECATED,
      );
    return (
      n &&
        !qu[i] &&
        ((qu[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(l, i, a) : !0
    );
  };
};
Cl.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function pg(e, t, n) {
  if (typeof e != "object")
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const l = r[s],
      i = Object.prototype.hasOwnProperty.call(t, l) ? t[l] : void 0;
    if (i) {
      const a = e[l],
        u = a === void 0 || i(a, l, e);
      if (u !== !0)
        throw new A("option " + l + " must be " + u, A.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new A("Unknown option " + l, A.ERR_BAD_OPTION);
  }
}
const Ts = { assertOptions: pg, validators: Cl },
  Le = Ts.validators;
let on = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new Fu(), response: new Fu() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const l = (() => {
          if (!s.stack) return "";
          const i = s.stack.indexOf(`
`);
          return i === -1 ? "" : s.stack.slice(i + 1);
        })();
        try {
          if (!r.stack) r.stack = l;
          else if (l) {
            const i = l.indexOf(`
`),
              a =
                i === -1
                  ? -1
                  : l.indexOf(
                      `
`,
                      i + 1,
                    ),
              u = a === -1 ? "" : l.slice(a + 1);
            String(r.stack).endsWith(u) ||
              (r.stack +=
                `
` + l);
          }
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = pn(this.defaults, n)));
    const { transitional: r, paramsSerializer: s, headers: l } = n;
    (r !== void 0 &&
      Ts.assertOptions(
        r,
        {
          silentJSONParsing: Le.transitional(Le.boolean),
          forcedJSONParsing: Le.transitional(Le.boolean),
          clarifyTimeoutError: Le.transitional(Le.boolean),
          legacyInterceptorReqResOrdering: Le.transitional(Le.boolean),
          advertiseZstdAcceptEncoding: Le.transitional(Le.boolean),
        },
        !1,
      ),
      s != null &&
        (v.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Ts.assertOptions(
              s,
              { encode: Le.function, serialize: Le.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Ts.assertOptions(
        n,
        {
          baseUrl: Le.spelling("baseURL"),
          withXsrfToken: Le.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let i = l && v.merge(l.common, l[n.method]);
    (l &&
      v.forEach(
        ["delete", "get", "head", "post", "put", "patch", "query", "common"],
        (w) => {
          delete l[w];
        },
      ),
      (n.headers = _e.concat(i, l)));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (y) {
      if (typeof y.runWhen == "function" && y.runWhen(n) === !1) return;
      u = u && y.synchronous;
      const j = n.transitional || da;
      j && j.legacyInterceptorReqResOrdering
        ? a.unshift(y.fulfilled, y.rejected)
        : a.push(y.fulfilled, y.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function (y) {
      c.push(y.fulfilled, y.rejected);
    });
    let d,
      f = 0,
      m;
    if (!u) {
      const w = [Qu.bind(this), void 0];
      for (
        w.unshift(...a), w.push(...c), m = w.length, d = Promise.resolve(n);
        f < m;
      )
        d = d.then(w[f++], w[f++]);
      return d;
    }
    m = a.length;
    let g = n;
    for (; f < m; ) {
      const w = a[f++],
        y = a[f++];
      try {
        g = w(g);
      } catch (j) {
        y.call(this, j);
        break;
      }
    }
    try {
      d = Qu.call(this, g);
    } catch (w) {
      return Promise.reject(w);
    }
    for (f = 0, m = c.length; f < m; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = Mf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Df(n, t.params, t.paramsSerializer);
  }
};
v.forEach(["delete", "get", "head", "options"], function (t) {
  on.prototype[t] = function (n, r) {
    return this.request(
      pn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
v.forEach(["post", "put", "patch", "query"], function (t) {
  function n(r) {
    return function (l, i, a) {
      return this.request(
        pn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: i,
        }),
      );
    };
  }
  ((on.prototype[t] = n()),
    t !== "query" && (on.prototype[t + "Form"] = n(!0)));
});
let hg = class Hf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    (this.promise.then((s) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let l;
        const i = new Promise((a) => {
          (r.subscribe(a), (l = a));
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(l);
          }),
          i
        );
      }),
      t(function (l, i, a) {
        r.reason || ((r.reason = new Yr(l, i, a)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Hf(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function xg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function gg(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const ii = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(ii).forEach(([e, t]) => {
  ii[t] = e;
});
function Vf(e) {
  const t = new on(e),
    n = Sf(on.prototype.request, t);
  return (
    v.extend(n, on.prototype, t, { allOwnKeys: !0 }),
    v.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Vf(pn(e, s));
    }),
    n
  );
}
const ae = Vf(Gr);
ae.Axios = on;
ae.CanceledError = Yr;
ae.CancelToken = hg;
ae.isCancel = Ff;
ae.VERSION = ma;
ae.toFormData = El;
ae.AxiosError = A;
ae.Cancel = ae.CanceledError;
ae.all = function (t) {
  return Promise.all(t);
};
ae.spread = xg;
ae.isAxiosError = gg;
ae.mergeConfig = pn;
ae.AxiosHeaders = _e;
ae.formToJSON = (e) => zf(v.isHTMLForm(e) ? new FormData(e) : e);
ae.getAdapter = $f.getAdapter;
ae.HttpStatusCode = ii;
ae.default = ae;
const {
    Axios: Jg,
    AxiosError: Xg,
    CanceledError: Gg,
    isCancel: Yg,
    CancelToken: Zg,
    VERSION: ev,
    all: tv,
    Cancel: nv,
    isAxiosError: rv,
    spread: sv,
    toFormData: lv,
    AxiosHeaders: ov,
    HttpStatusCode: iv,
    formToJSON: av,
    getAdapter: uv,
    mergeConfig: cv,
    create: dv,
  } = ae,
  M = ae.create({ baseURL: "/api" });
M.interceptors.request.use((e) => {
  const t = localStorage.getItem("token");
  return (t && (e.headers.Authorization = `Bearer ${t}`), e);
});
M.interceptors.response.use(
  (e) => e,
  (e) => {
    var t;
    return (
      ((t = e.response) == null ? void 0 : t.status) === 401 &&
        (localStorage.removeItem("token"),
        localStorage.removeItem("user"),
        window.location.pathname !== "/login" &&
          window.location.pathname !== "/register" &&
          (window.location.href = "/login")),
      Promise.reject(e)
    );
  },
);
const Wf = N.createContext(null),
  Ze = () => {
    const e = N.useContext(Wf);
    if (!e) throw new Error("useAuth deve ser usado dentro de AuthProvider");
    return e;
  },
  vg = ({ children: e }) => {
    const [t, n] = N.useState(null),
      [r, s] = N.useState(null),
      [l, i] = N.useState(!0);
    N.useEffect(() => {
      const m = localStorage.getItem("token"),
        g = localStorage.getItem("user");
      if (m && g) {
        s(m);
        try {
          n(JSON.parse(g));
        } catch {
          (localStorage.removeItem("user"), localStorage.removeItem("token"));
        }
      }
      i(!1);
    }, []);
    const a = async (m, g) => {
        const w = await M.post("/login", { email: m, senha: g }),
          { token: y, user: j } = w.data;
        return (
          localStorage.setItem("token", y),
          localStorage.setItem("user", JSON.stringify(j)),
          s(y),
          n(j),
          j
        );
      },
      u = (m) => {
        const g = { ...t, ...m };
        (localStorage.setItem("user", JSON.stringify(g)), n(g));
      },
      c = () => {
        (localStorage.removeItem("token"),
          localStorage.removeItem("user"),
          s(null),
          n(null));
      },
      d = !!r,
      f = (t == null ? void 0 : t.tipo) || null;
    return o.jsx(Wf.Provider, {
      value: {
        user: t,
        token: r,
        loading: l,
        login: a,
        logout: c,
        updateUser: u,
        isAuthenticated: d,
        userRole: f,
      },
      children: e,
    });
  },
  yg = "/assets/home-uzD3nidv.png",
  gn = "/assets/cap-BcNi9rC3.png",
  wg = () => {
    const { isAuthenticated: e, userRole: t } = Ze(),
      n = Ve(),
      r = (s) => {
        if ((s.preventDefault(), !e)) {
          n("/login");
          return;
        }
        n(
          t === "participante"
            ? "/participante/eventos"
            : t === "administrador"
              ? "/admin"
              : "/organizador/eventos",
        );
      };
    return o.jsxs("div", {
      className:
        "min-h-screen flex flex-col font-sans bg-cover bg-center bg-[#F5F5FD] transition-all",
      children: [
        o.jsxs("header", {
          className:
            "bg-[#3662A4] text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-md px-6 space-y-4 md:space-y-0 z-20",
          children: [
            o.jsxs("div", {
              className: "flex items-center",
              children: [
                o.jsx("img", {
                  src: gn,
                  alt: "Logo",
                  className: "w-8 h-8 mr-3 brightness-0 invert",
                }),
                o.jsx("h1", {
                  className: "text-xl font-medium text-center md:text-left",
                  children: "Plataforma Acadêmica de Eventos (PAE)",
                }),
              ],
            }),
            o.jsxs("div", {
              className:
                "flex items-center space-x-3 w-full md:w-auto justify-center",
              children: [
                o.jsx("button", {
                  onClick: r,
                  className:
                    "text-white hover:text-white/80 transition-colors text-xs md:text-sm font-medium mr-2 md:mr-4",
                  children: "PERFIL PARTICIPANTE",
                }),
                o.jsx(G, {
                  to: "/login",
                  className:
                    "border border-white/50 text-white px-4 md:px-5 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-white hover:text-[#3662A4] transition-colors",
                  children: "Entrar",
                }),
                o.jsx(G, {
                  to: "/register",
                  className:
                    "bg-[#3FB65F] text-white px-4 md:px-5 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-green-700 transition-colors shadow",
                  children: "Cadastre-se",
                }),
              ],
            }),
          ],
        }),
        o.jsx("main", {
          className: "flex-grow flex items-center z-0",
          children: o.jsxs("div", {
            className:
              "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center w-full",
            children: [
              o.jsx("div", {
                className: "p-8 md:p-16 space-y-6 text-center md:text-left",
                children: o.jsx("h2", {
                  className:
                    "text-2xl md:text-4xl font-bold text-[#0D3B66] leading-tight max-w-lg mx-auto md:mx-0",
                  children:
                    "Gerencie seus Eventos Acadêmicos e seus Certificados com Facilidade",
                }),
              }),
              o.jsx("div", {
                className:
                  "w-full h-full flex items-center justify-center p-4 md:p-0",
                children: o.jsx("img", {
                  src: yg,
                  alt: "Home PAE",
                  className: "w-full max-w-2xl h-auto object-contain",
                }),
              }),
            ],
          }),
        }),
        o.jsx("footer", {
          className:
            "bg-white/80 backdrop-blur-sm p-6 py-10 md:py-12 border-t border-gray-100 mt-auto",
          children: o.jsxs("div", {
            className:
              "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-6",
            children: [
              o.jsxs("div", {
                className: "flex flex-col items-center text-center group",
                children: [
                  o.jsx("div", {
                    className:
                      "w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors",
                    children: o.jsx("svg", {
                      className: "w-6 h-6 md:w-8 md:h-8",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: o.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
                      }),
                    }),
                  }),
                  o.jsx("p", {
                    className: "text-xs md:text-sm font-medium text-[#0D3B66]",
                    children: "Crie e Gerencie Eventos",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex flex-col items-center text-center group",
                children: [
                  o.jsx("div", {
                    className:
                      "w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors",
                    children: o.jsx("svg", {
                      className: "w-6 h-6 md:w-8 md:h-8",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: o.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                      }),
                    }),
                  }),
                  o.jsx("p", {
                    className: "text-xs md:text-sm font-medium text-[#0D3B66]",
                    children: "Se Inscreva nos Eventos",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex flex-col items-center text-center group",
                children: [
                  o.jsx("div", {
                    className:
                      "w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors",
                    children: o.jsxs("svg", {
                      className: "w-6 h-6 md:w-8 md:h-8",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                        }),
                        o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("p", {
                    className: "text-xs md:text-sm font-medium text-[#0D3B66]",
                    children: "Faça Check-In nos Eventos",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex flex-col items-center text-center group",
                children: [
                  o.jsx("div", {
                    className:
                      "w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors",
                    children: o.jsx("svg", {
                      className: "w-6 h-6 md:w-8 md:h-8",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: o.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438z",
                      }),
                    }),
                  }),
                  o.jsx("p", {
                    className:
                      "text-xs md:text-sm font-medium text-[#0D3B66] group-hover:text-blue-600 transition-colors",
                    children: "Emita seu Certificado",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Qf = "/assets/background-D66lQK_X.png",
  jg = () => {
    const e = Ve(),
      { login: t } = Ze(),
      [n, r] = N.useState(""),
      [s, l] = N.useState(!1),
      i = async (a) => {
        var d, f;
        (a.preventDefault(), r(""), l(!0));
        const u = a.target.email.value,
          c = a.target.password.value;
        try {
          const m = await t(u, c);
          m.tipo === "coordenador" || m.tipo === "administrador"
            ? e("/organizador/eventos")
            : e("/participante/eventos");
        } catch (m) {
          r(
            ((f = (d = m.response) == null ? void 0 : d.data) == null
              ? void 0
              : f.error) || "Erro ao fazer login. Verifique suas credenciais.",
          );
        } finally {
          l(!1);
        }
      };
    return o.jsxs("div", {
      className:
        "min-h-screen flex flex-col font-sans bg-cover bg-center bg-no-repeat transition-all",
      style: {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Qf})`,
      },
      children: [
        o.jsx("header", {
          className:
            "bg-[#3662A4] text-white p-4 flex items-center shadow-md z-10",
          children: o.jsxs(G, {
            to: "/",
            className: "flex items-center text-white",
            children: [
              o.jsx("img", {
                src: gn,
                alt: "Logo",
                className: "w-8 h-8 mr-3 brightness-0 invert",
              }),
              o.jsx("h1", {
                className: "text-xl font-medium",
                children: "Plataforma Acadêmica de Eventos (PAE)",
              }),
            ],
          }),
        }),
        o.jsxs("main", {
          className:
            "flex-grow flex items-center justify-center p-4 md:p-6 relative overflow-hidden z-0",
          children: [
            o.jsxs("div", {
              className:
                "absolute inset-0 opacity-10 flex items-center justify-between px-4 md:px-20 pointer-events-none",
              children: [
                o.jsxs("div", {
                  className: "flex flex-col space-y-8 items-center",
                  children: [
                    o.jsx("div", {
                      className:
                        "w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full flex items-center justify-center",
                      children: o.jsx("svg", {
                        className: "w-8 h-8 md:w-10 md:h-10 text-blue-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                        }),
                      }),
                    }),
                    o.jsx("div", {
                      className:
                        "w-12 h-12 md:w-16 md:h-16 bg-green-200 rounded-md shadow-inner flex items-center justify-center transform rotate-12",
                      children: o.jsx("svg", {
                        className: "w-6 h-6 md:w-8 md:h-8 text-green-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M5 13l4 4L19 7",
                        }),
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "flex flex-col space-y-8 items-center hidden sm:flex",
                  children: [
                    o.jsx("div", {
                      className:
                        "w-12 h-12 md:w-16 md:h-16 bg-yellow-200 rounded-full flex items-center justify-center transform -rotate-12",
                      children: o.jsx("svg", {
                        className: "w-6 h-6 md:w-8 md:h-8 text-yellow-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z",
                        }),
                      }),
                    }),
                    o.jsx("div", {
                      className:
                        "w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full flex items-center justify-center",
                      children: o.jsx("svg", {
                        className: "w-8 h-8 md:w-10 md:h-10 text-blue-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.404 2.404 0 01.382-2.244l4.083-4.85a1.76 1.76 0 011.099-.588zM15.118 19.24a1.76 1.76 0 01-3.417-.592V5.882a1.76 1.76 0 011.099.588l4.083 4.85a2.404 2.404 0 01.382 2.244l-2.147 6.167z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className:
                "bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md relative z-10 mx-auto border border-white/50",
              children: [
                o.jsx("h2", {
                  className:
                    "text-2xl md:text-3xl font-semibold text-[#00707D] text-center mb-8 md:mb-12",
                  children: "Login",
                }),
                n &&
                  o.jsx("div", {
                    className:
                      "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg",
                    children: n,
                  }),
                o.jsxs("form", {
                  className: "space-y-6 md:space-y-8",
                  onSubmit: i,
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1.5",
                          children: "E-Mail",
                        }),
                        o.jsx("input", {
                          type: "email",
                          id: "email",
                          name: "email",
                          required: !0,
                          placeholder: "digite seu e-mail aqui",
                          className:
                            "w-full px-5 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "password",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1.5",
                          children: "Senha",
                        }),
                        o.jsx("input", {
                          type: "password",
                          id: "password",
                          name: "password",
                          required: !0,
                          placeholder: "digite sua senha aqui",
                          className:
                            "w-full px-5 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "flex items-center justify-start",
                      children: o.jsxs("label", {
                        className: "inline-flex items-center text-xs",
                        children: [
                          o.jsx("input", {
                            type: "checkbox",
                            name: "rememberMe",
                            className:
                              "form-checkbox h-3 w-3 text-green-600 border-gray-300 rounded focus:ring-green-500",
                          }),
                          o.jsx("span", {
                            className: "ml-2 text-gray-600",
                            children: "Manter-me logado",
                          }),
                        ],
                      }),
                    }),
                    o.jsx("div", {
                      children: o.jsx("button", {
                        type: "submit",
                        disabled: s,
                        className:
                          "w-full bg-[#3FB65F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-150 shadow-md text-lg disabled:opacity-50",
                        children: s ? "Entrando..." : "Entrar",
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "mt-10 text-center text-xs text-gray-600",
                  children: [
                    "Ainda não tem conta?",
                    " ",
                    o.jsx(G, {
                      to: "/register",
                      className: "font-medium text-[#00707D] hover:underline",
                      children: "Cadastre-se",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ng = () => {
    const e = Ve(),
      [t, n] = N.useState(""),
      [r, s] = N.useState(!1),
      l = async (i) => {
        var m, g;
        (i.preventDefault(), n(""));
        const a = i.target.name.value,
          u = i.target.email.value,
          c = i.target.password.value,
          d = i.target.confirmPassword.value,
          f = i.target.userType.value;
        if (c !== d) {
          n("As senhas não coincidem.");
          return;
        }
        s(!0);
        try {
          const y = (await M.post("/usuarios", { nome: a, email: u, senha: c }))
            .data.id;
          (f === "participant"
            ? await M.post("/participantes", {
                usuario_id: y,
                categoria: "aluno",
              })
            : await M.post("/coordenadores", { usuario_id: y }),
            e("/login"));
        } catch (w) {
          n(
            ((g = (m = w.response) == null ? void 0 : m.data) == null
              ? void 0
              : g.error) || "Erro ao cadastrar. Tente novamente.",
          );
        } finally {
          s(!1);
        }
      };
    return o.jsxs("div", {
      className:
        "min-h-screen flex flex-col font-sans bg-cover bg-center bg-no-repeat transition-all",
      style: {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Qf})`,
      },
      children: [
        o.jsx("header", {
          className:
            "bg-[#3662A4] text-white p-4 flex items-center shadow-md z-10",
          children: o.jsxs(G, {
            to: "/",
            className: "flex items-center text-white",
            children: [
              o.jsx("img", {
                src: gn,
                alt: "Logo",
                className: "w-8 h-8 mr-3 brightness-0 invert",
              }),
              o.jsx("h1", {
                className: "text-xl font-medium",
                children: "Plataforma Acadêmica de Eventos (PAE)",
              }),
            ],
          }),
        }),
        o.jsxs("main", {
          className:
            "flex-grow flex items-center justify-center p-4 md:p-6 relative overflow-hidden z-0",
          children: [
            o.jsxs("div", {
              className:
                "absolute inset-0 opacity-10 flex items-center justify-between px-4 md:px-20 pointer-events-none",
              children: [
                o.jsx("div", {
                  className: "flex flex-col space-y-8 items-center",
                  children: o.jsx("div", {
                    className:
                      "w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full flex items-center justify-center",
                    children: o.jsx("svg", {
                      className: "w-8 h-8 md:w-10 md:h-10 text-blue-600",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: o.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      }),
                    }),
                  }),
                }),
                o.jsxs("div", {
                  className:
                    "flex flex-col space-y-8 items-center hidden sm:flex",
                  children: [
                    o.jsx("div", {
                      className:
                        "w-12 h-12 md:w-16 md:h-16 bg-yellow-200 rounded-full flex items-center justify-center transform -rotate-12",
                      children: o.jsx("svg", {
                        className: "w-6 h-6 md:w-8 md:h-8 text-yellow-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z",
                        }),
                      }),
                    }),
                    o.jsx("div", {
                      className:
                        "w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full flex items-center justify-center",
                      children: o.jsx("svg", {
                        className: "w-8 h-8 md:w-10 md:h-10 text-blue-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.404 2.404 0 01.382-2.244l4.083-4.85a1.76 1.76 0 011.099-.588zM15.118 19.24a1.76 1.76 0 01-3.417-.592V5.882a1.76 1.76 0 011.099.588l4.083 4.85a2.404 2.404 0 01.382 2.244l-2.147 6.167z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className:
                "bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md relative z-10 mx-auto border border-white/50",
              children: [
                o.jsx("h2", {
                  className:
                    "text-2xl md:text-3xl font-semibold text-[#00707D] text-center mb-6 md:mb-10",
                  children: "Cadastro",
                }),
                t &&
                  o.jsx("div", {
                    className:
                      "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg",
                    children: t,
                  }),
                o.jsxs("form", {
                  className: "space-y-4 md:space-y-6",
                  onSubmit: l,
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "name",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Nome completo",
                        }),
                        o.jsx("input", {
                          type: "text",
                          id: "name",
                          name: "name",
                          required: !0,
                          placeholder: "nome completo",
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "E-Mail",
                        }),
                        o.jsx("input", {
                          type: "email",
                          id: "email",
                          name: "email",
                          required: !0,
                          placeholder: "Email",
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx("label", {
                              htmlFor: "password",
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: "Senha",
                            }),
                            o.jsx("input", {
                              type: "password",
                              id: "password",
                              name: "password",
                              required: !0,
                              minLength: 4,
                              placeholder: "**********",
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsx("label", {
                              htmlFor: "confirmPassword",
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: "Confirme a Senha",
                            }),
                            o.jsx("input", {
                              type: "password",
                              id: "confirmPassword",
                              name: "confirmPassword",
                              required: !0,
                              minLength: 4,
                              placeholder: "**********",
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("span", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Tipo de Usuário:",
                        }),
                        o.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            o.jsxs("label", {
                              className: "inline-flex items-center text-sm",
                              children: [
                                o.jsx("input", {
                                  type: "radio",
                                  name: "userType",
                                  value: "organizer",
                                  defaultChecked: !0,
                                  className:
                                    "form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500",
                                }),
                                o.jsx("span", {
                                  className: "ml-2 text-gray-800",
                                  children: "Organizador",
                                }),
                              ],
                            }),
                            o.jsxs("label", {
                              className: "inline-flex items-center text-sm",
                              children: [
                                o.jsx("input", {
                                  type: "radio",
                                  name: "userType",
                                  value: "participant",
                                  className:
                                    "form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500",
                                }),
                                o.jsx("span", {
                                  className: "ml-2 text-gray-800",
                                  children: "Participante",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      children: o.jsx("button", {
                        type: "submit",
                        disabled: r,
                        className:
                          "w-full bg-[#3FB65F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-150 shadow-md text-lg disabled:opacity-50",
                        children: r ? "Cadastrando..." : "Cadastrar",
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "mt-8 text-center text-xs text-gray-600",
                  children: [
                    "Ja tem uma conta?",
                    " ",
                    o.jsx(G, {
                      to: "/login",
                      className: "font-medium text-[#00707D] hover:underline",
                      children: "Entre",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Sg = () =>
    o.jsx("img", {
      src: gn,
      alt: "Logo",
      className: "w-8 h-8 mr-3 brightness-0 invert",
    }),
  kg = () =>
    o.jsx("svg", {
      className: "w-5 h-5 mr-3",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 4v16m8-8H4",
      }),
    }),
  bg = () =>
    o.jsx("svg", {
      className: "w-5 h-5 mr-3",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      }),
    }),
  Ku = () =>
    o.jsx("svg", {
      className: "w-4 h-4 ml-1",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 9l-7 7-7-7",
      }),
    }),
  Eg = () =>
    o.jsx("svg", {
      className: "w-5 h-5 mr-3",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      }),
    }),
  jt = ({ children: e, activePage: t, activeDropdownPage: n }) => {
    const [r, s] = N.useState(!!n),
      { user: l, logout: i } = Ze(),
      a = Ve(),
      u = () => {
        (i(), a("/"));
      },
      c = [
        ...((l == null ? void 0 : l.tipo) === "administrador"
          ? [{ id: "admin", label: "Painel Admin", icon: Eg, link: "/admin" }]
          : []),
        {
          id: "create",
          label: "Criar Eventos",
          icon: kg,
          link: "/organizador/criar-evento",
        },
        {
          id: "events",
          label: "Eventos",
          icon: bg,
          dropdown: [
            {
              id: "active",
              label: "Eventos Ocorrendo",
              link: "/organizador/eventos",
            },
            {
              id: "completed",
              label: "Eventos Concluídos",
              link: "/organizador/eventos-concluidos",
            },
          ],
        },
      ],
      d = (m) =>
        t === m
          ? "flex items-center px-6 py-3 bg-white/10 text-white font-medium"
          : "flex items-center px-6 py-3 hover:bg-white/10 text-white/90",
      f = (m) =>
        n === m
          ? "block px-12 py-2 text-sm bg-white/20 text-white font-medium"
          : "block px-12 py-2 text-sm text-white/90 hover:bg-white/10";
    return o.jsxs("div", {
      className:
        "min-h-screen bg-slate-100 flex flex-col font-sans text-gray-800",
      children: [
        o.jsxs("header", {
          className:
            "bg-[#3662A4] text-white p-4 flex items-center justify-between shadow-md px-4 md:px-6 z-20",
          children: [
            o.jsxs(G, {
              to: "/",
              className: "flex items-center text-white shrink-0",
              children: [
                o.jsx(Sg, {}),
                o.jsx("h1", {
                  className: "text-xl font-medium hidden sm:block",
                  children: "Plataforma Acadêmica de Eventos (PAE)",
                }),
                o.jsx("h1", {
                  className: "text-lg font-medium sm:hidden",
                  children: "PAE",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center space-x-2 text-white/90",
              children: [
                o.jsx(G, {
                  to: "/organizador/configuracoes",
                  className:
                    "w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold border-2 border-white/50 overflow-hidden hover:opacity-80 transition-opacity text-sm",
                  children:
                    l != null && l.nome ? l.nome.charAt(0).toUpperCase() : "O",
                }),
                o.jsxs(G, {
                  to: "/organizador/configuracoes",
                  className:
                    "flex items-center text-xs md:text-sm font-medium hover:text-white transition-colors",
                  children: [
                    o.jsx("span", {
                      className: "hidden xs:inline",
                      children: (l == null ? void 0 : l.nome) || "Organizador",
                    }),
                    " ",
                    o.jsx(Ku, {}),
                  ],
                }),
                o.jsx("button", {
                  onClick: u,
                  className:
                    "ml-2 text-xs text-white/70 hover:text-white transition-colors",
                  title: "Sair",
                  children: o.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: o.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "flex flex-grow overflow-hidden flex-col md:flex-row",
          children: [
            o.jsx("aside", {
              className:
                "w-full md:w-64 bg-[#3662A4] text-white flex flex-col md:pt-10 shadow-inner z-10 overflow-x-auto md:overflow-y-auto",
              children: o.jsx("nav", {
                className:
                  "flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 p-2 md:p-0",
                children: c.map((m) =>
                  m.dropdown
                    ? o.jsxs(
                        "div",
                        {
                          className:
                            "relative group flex-shrink-0 md:flex-shrink-1",
                          children: [
                            o.jsxs("button", {
                              onClick: () => s(!r),
                              className:
                                "flex w-full items-center justify-between px-4 md:px-6 py-3 hover:bg-white/10 text-white/90",
                              children: [
                                o.jsxs("div", {
                                  className:
                                    "flex items-center whitespace-nowrap",
                                  children: [
                                    o.jsx(m.icon, {}),
                                    " ",
                                    o.jsx("span", {
                                      className: "text-xs md:text-sm",
                                      children: m.label,
                                    }),
                                  ],
                                }),
                                o.jsx(Ku, {}),
                              ],
                            }),
                            r &&
                              o.jsx("div", {
                                className:
                                  "bg-[#3053C3] md:static absolute left-0 top-full w-full z-30 shadow-lg md:shadow-none",
                                children: m.dropdown.map((g) =>
                                  o.jsx(
                                    G,
                                    {
                                      to: g.link,
                                      className: f(g.id),
                                      children: o.jsx("span", {
                                        className: "text-xs md:text-sm",
                                        children: g.label,
                                      }),
                                    },
                                    g.id,
                                  ),
                                ),
                              }),
                          ],
                        },
                        m.id,
                      )
                    : o.jsxs(
                        G,
                        {
                          to: m.link,
                          className: `${d(m.id)} whitespace-nowrap md:whitespace-normal flex-shrink-0`,
                          children: [
                            o.jsx(m.icon, {}),
                            " ",
                            o.jsx("span", {
                              className: "text-xs md:text-sm",
                              children: m.label,
                            }),
                          ],
                        },
                        m.id,
                      ),
                ),
              }),
            }),
            o.jsx("main", {
              className: "flex-grow bg-slate-50 p-4 md:p-10 overflow-y-auto",
              children: e,
            }),
          ],
        }),
      ],
    });
  },
  qf = ({
    id: e,
    title: t,
    location: n,
    date: r,
    hours: s,
    status: l,
    editable: i,
  }) =>
    o.jsxs("div", {
      className:
        "bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-between mb-6 transform transition hover:scale-[1.01]",
      children: [
        o.jsxs("div", {
          className: "space-y-1.5 flex-grow pr-6",
          children: [
            o.jsx("h3", {
              className: "text-2xl font-semibold text-[#00707D]",
              children: t,
            }),
            o.jsxs("p", {
              className: "text-sm text-gray-600 flex items-center",
              children: [n, n && r ? " | " : "", r, r && s ? " | " : "", s],
            }),
          ],
        }),
        i
          ? o.jsx(G, {
              to: `/organizador/evento/${e}`,
              className:
                "border-2 border-gray-200 text-gray-700 px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm",
              children: "Editar",
            })
          : o.jsx("button", {
              className:
                "bg-[#F94D4D] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md",
              children: l || "Encerrado",
            }),
      ],
    }),
  Ju = (e) =>
    e
      ? new Date(e + "T00:00:00").toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
  Cg = () => {
    const [e, t] = N.useState([]),
      [n, r] = N.useState(!0);
    N.useEffect(() => {
      (async () => {
        try {
          const a = (await M.get("/eventos")).data.filter(
            (u) => u.status === "ativo" || u.status === "pendente",
          );
          t(a);
        } catch {
          t([]);
        } finally {
          r(!1);
        }
      })();
    }, []);
    const s = e.map((l) => ({
      id: l.id,
      title: l.nome,
      location: l.instituicao || l.modalidade || "",
      date: `${Ju(l.dataInicio)} - ${Ju(l.dataFim)}`,
      hours: "",
      editable: !0,
    }));
    return o.jsx(jt, {
      activePage: "events",
      activeDropdownPage: "active",
      children: o.jsxs("div", {
        className: "space-y-10 max-w-7xl mx-auto",
        children: [
          o.jsx("h2", {
            className: "text-3xl font-semibold text-[#00707D]",
            children: "Eventos Criados",
          }),
          n
            ? o.jsx("p", {
                className: "text-gray-500",
                children: "Carregando...",
              })
            : s.length === 0
              ? o.jsx("p", {
                  className: "text-gray-500",
                  children: "Nenhum evento ativo encontrado.",
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: s.map((l) => o.jsx(qf, { ...l }, l.id)),
                }),
        ],
      }),
    });
  },
  Xu = (e) =>
    e
      ? new Date(e + "T00:00:00").toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
  _g = () => {
    const [e, t] = N.useState([]),
      [n, r] = N.useState(!0);
    N.useEffect(() => {
      (async () => {
        try {
          const a = (await M.get("/eventos")).data.filter(
            (u) => u.status === "concluido" || u.status === "encerrado",
          );
          t(a);
        } catch {
          t([]);
        } finally {
          r(!1);
        }
      })();
    }, []);
    const s = e.map((l) => ({
      id: l.id,
      title: l.nome,
      location: l.instituicao || l.modalidade || "",
      date: `${Xu(l.dataInicio)} - ${Xu(l.dataFim)}`,
      hours: "",
      editable: !1,
    }));
    return o.jsx(jt, {
      activePage: "events",
      activeDropdownPage: "completed",
      children: o.jsxs("div", {
        className: "space-y-10 max-w-7xl mx-auto",
        children: [
          o.jsx("h2", {
            className: "text-3xl font-semibold text-[#00707D]",
            children: "Eventos Concluídos",
          }),
          n
            ? o.jsx("p", {
                className: "text-gray-500",
                children: "Carregando...",
              })
            : s.length === 0
              ? o.jsx("p", {
                  className: "text-gray-500",
                  children: "Nenhum evento concluído encontrado.",
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: s.map((l) => o.jsx(qf, { ...l }, l.id)),
                }),
        ],
      }),
    });
  },
  Pg = () => {
    const e = Ve(),
      [t, n] = N.useState(""),
      [r, s] = N.useState(!1),
      l = async (i) => {
        var m, g;
        (i.preventDefault(), n(""), s(!0));
        const a = i.target.eventName.value,
          u = i.target.eventLocation.value,
          c = i.target.eventModality.value,
          d = i.target.eventDate.value,
          f = i.target.eventEndDate.value || d;
        try {
          (await M.post("/eventos", {
            nome: a,
            instituicao: u,
            modalidade: c,
            dataInicio: d,
            dataFim: f,
            status: "pendente",
          }),
            e("/organizador/eventos"));
        } catch (w) {
          n(
            ((g = (m = w.response) == null ? void 0 : m.data) == null
              ? void 0
              : g.error) || "Erro ao criar evento.",
          );
        } finally {
          s(!1);
        }
      };
    return o.jsx(jt, {
      activePage: "create",
      children: o.jsx("div", {
        className: "max-w-7xl mx-auto flex justify-center pt-6",
        children: o.jsxs("div", {
          className:
            "bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-100",
          children: [
            o.jsx("h2", {
              className: "text-3xl font-semibold text-[#00707D] mb-10",
              children: "Criar Evento",
            }),
            t &&
              o.jsx("div", {
                className:
                  "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg",
                children: t,
              }),
            o.jsxs("form", {
              className: "space-y-6",
              onSubmit: l,
              children: [
                o.jsxs("div", {
                  children: [
                    o.jsxs("label", {
                      htmlFor: "eventName",
                      className:
                        "block text-sm font-medium text-gray-700 mb-1.5 flex items-center",
                      children: [
                        "Nome do Evento ",
                        o.jsx("span", {
                          className: "text-red-500 ml-1",
                          children: "*",
                        }),
                      ],
                    }),
                    o.jsx("input", {
                      type: "text",
                      id: "eventName",
                      name: "eventName",
                      required: !0,
                      className:
                        "w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsxs("label", {
                          htmlFor: "eventDate",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1.5 flex items-center",
                          children: [
                            "Data de Início ",
                            o.jsx("span", {
                              className: "text-red-500 ml-1",
                              children: "*",
                            }),
                          ],
                        }),
                        o.jsx("input", {
                          type: "date",
                          id: "eventDate",
                          name: "eventDate",
                          required: !0,
                          className:
                            "w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "eventEndDate",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1.5",
                          children: "Data de Fim",
                        }),
                        o.jsx("input", {
                          type: "date",
                          id: "eventEndDate",
                          name: "eventEndDate",
                          className:
                            "w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsxs("label", {
                          htmlFor: "eventLocation",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1.5 flex items-center",
                          children: [
                            "Local / Instituição ",
                            o.jsx("span", {
                              className: "text-red-500 ml-1",
                              children: "*",
                            }),
                          ],
                        }),
                        o.jsx("input", {
                          type: "text",
                          id: "eventLocation",
                          name: "eventLocation",
                          required: !0,
                          className:
                            "w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsxs("label", {
                          htmlFor: "eventModality",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1.5 flex items-center",
                          children: [
                            "Modalidade ",
                            o.jsx("span", {
                              className: "text-red-500 ml-1",
                              children: "*",
                            }),
                          ],
                        }),
                        o.jsxs("select", {
                          id: "eventModality",
                          name: "eventModality",
                          required: !0,
                          className:
                            "w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm bg-white",
                          children: [
                            o.jsx("option", {
                              value: "presencial",
                              children: "Presencial",
                            }),
                            o.jsx("option", {
                              value: "online",
                              children: "Online",
                            }),
                            o.jsx("option", {
                              value: "hibrido",
                              children: "Híbrido",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "pt-8",
                  children: o.jsx("button", {
                    type: "submit",
                    disabled: r,
                    className:
                      "w-full bg-[#3FB65F] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-150 shadow-md text-xl disabled:opacity-50",
                    children: r ? "Cadastrando..." : "Cadastrar",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Rg = () => {
    const e = Ve(),
      { id: t } = aa(),
      [n, r] = N.useState(""),
      [s, l] = N.useState(!1),
      [i, a] = N.useState("");
    fi.useEffect(() => {
      M.get(`/eventos/${t}`)
        .then((c) => a(c.data.nome))
        .catch(() => {});
    }, [t]);
    const u = async (c) => {
      var d, f;
      (c.preventDefault(), r(""), l(!0));
      try {
        (await M.post("/atividades", {
          titulo: c.target.activityName.value,
          tipo: c.target.activityType.value,
          cargaHoraria: Number(c.target.activityHours.value) || 0,
          vagas: Number(c.target.activitySlots.value) || null,
          local: c.target.activityLocation.value || "",
          horario_inicio: c.target.startTime.value || null,
          horario_fim: c.target.endTime.value || null,
          responsavel: c.target.responsible.value || "",
          evento_id: Number(t),
        }),
          e(`/organizador/evento/${t}`));
      } catch (m) {
        r(
          ((f = (d = m.response) == null ? void 0 : d.data) == null
            ? void 0
            : f.error) || "Erro ao adicionar atividade.",
        );
      } finally {
        l(!1);
      }
    };
    return o.jsx(jt, {
      activePage: "events",
      activeDropdownPage: "active",
      children: o.jsxs("div", {
        className: "space-y-6",
        children: [
          o.jsxs("div", {
            className: "space-y-1",
            children: [
              o.jsxs(G, {
                to: "/organizador/eventos",
                className:
                  "text-xs text-gray-500 hover:text-pae-blue-header transition-colors",
                children: [
                  "<",
                  " Voltar para Eventos ",
                  "<",
                  " ",
                  o.jsx("span", {
                    className: "font-semibold text-pae-blue-header",
                    children: i || "Evento",
                  }),
                ],
              }),
              o.jsx("h2", {
                className: "text-3xl font-extrabold text-pae-text-blue",
                children: "Adicionar Atividade",
              }),
            ],
          }),
          n &&
            o.jsx("div", {
              className:
                "p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg",
              children: n,
            }),
          o.jsx("div", {
            className:
              "bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-2xl mx-auto space-y-6 relative",
            children: o.jsxs("form", {
              className: "space-y-4",
              onSubmit: u,
              children: [
                o.jsxs("div", {
                  children: [
                    o.jsx("label", {
                      htmlFor: "activityName",
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Nome da Atividade",
                    }),
                    o.jsx("input", {
                      id: "activityName",
                      name: "activityName",
                      type: "text",
                      required: !0,
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "mb-4",
                  children: [
                    o.jsx("label", {
                      htmlFor: "activityType",
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Tipo",
                    }),
                    o.jsxs("select", {
                      id: "activityType",
                      name: "activityType",
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                      required: !0,
                      children: [
                        o.jsx("option", {
                          value: "",
                          disabled: !0,
                          selected: !0,
                          children: "Selecione",
                        }),
                        o.jsx("option", {
                          value: "palestra",
                          children: "Palestra",
                        }),
                        o.jsx("option", {
                          value: "workshop",
                          children: "Workshop",
                        }),
                        o.jsx("option", {
                          value: "mesa_redonda",
                          children: "Mesa Redonda",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "activityHours",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Carga Horária (h)",
                        }),
                        o.jsx("input", {
                          id: "activityHours",
                          name: "activityHours",
                          type: "number",
                          min: "0",
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "activitySlots",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Vagas",
                        }),
                        o.jsx("input", {
                          id: "activitySlots",
                          name: "activitySlots",
                          type: "number",
                          min: "0",
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("label", {
                      htmlFor: "activityLocation",
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Local",
                    }),
                    o.jsx("input", {
                      id: "activityLocation",
                      name: "activityLocation",
                      type: "text",
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "startTime",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Horário de Início",
                        }),
                        o.jsx("div", {
                          className: "relative",
                          children: o.jsx("input", {
                            id: "startTime",
                            name: "startTime",
                            type: "time",
                            required: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                          }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "endTime",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Horário de Fim",
                        }),
                        o.jsx("div", {
                          className: "relative",
                          children: o.jsx("input", {
                            id: "endTime",
                            name: "endTime",
                            type: "time",
                            required: !0,
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("label", {
                      htmlFor: "responsible",
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Responsável",
                    }),
                    o.jsx("input", {
                      id: "responsible",
                      name: "responsible",
                      type: "text",
                      required: !0,
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white",
                    }),
                  ],
                }),
                o.jsx("button", {
                  type: "submit",
                  disabled: s,
                  className:
                    "w-full bg-pae-green-button text-white py-3 px-4 rounded-md font-semibold hover:bg-pae-green-hover transition text-lg disabled:opacity-50",
                  children: s ? "Adicionando..." : "Adicionar Atividade",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Gu = (e) =>
    e
      ? new Date(e + "T00:00:00").toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
  Lg = () => {
    var vn;
    const { id: e } = aa();
    Ve();
    const { user: t } = Ze(),
      [n, r] = N.useState("activities"),
      [s, l] = N.useState(null),
      [i, a] = N.useState([]),
      [u, c] = N.useState([]),
      [d, f] = N.useState(!0),
      [m, g] = N.useState(""),
      [w, y] = N.useState(""),
      [j, h] = N.useState(!1),
      [p, x] = N.useState(null),
      [S, E] = N.useState(""),
      [R, L] = N.useState(!1),
      [_, $] = N.useState({
        nome: "",
        instituicao: "",
        modalidade: "presencial",
        dataInicio: "",
        dataFim: "",
        status: "",
      }),
      [F, X] = N.useState(!1),
      [H, C] = N.useState(null),
      [I, K] = N.useState(!1),
      [ce, _t] = N.useState(!1),
      P = async () => {
        try {
          const [k, T, W] = await Promise.all([
            M.get(`/eventos/${e}`),
            M.get(`/atividades/evento/${e}`),
            M.get(`/inscricoes/evento/${e}`).catch(() => ({ data: [] })),
          ]);
          (l(k.data), a(T.data), c(W.data));
        } catch {
          l(null);
        } finally {
          f(!1);
        }
      };
    N.useEffect(() => {
      P();
    }, [e]);
    const D = (k, T = "success") => {
        (g(k),
          y(T),
          setTimeout(() => {
            (g(""), y(""));
          }, 4e3));
      },
      z = () => {
        ($({
          nome: s.nome,
          instituicao: s.instituicao || "",
          modalidade: s.modalidade || "presencial",
          dataInicio: s.dataInicio ? s.dataInicio.split("T")[0] : "",
          dataFim: s.dataFim ? s.dataFim.split("T")[0] : "",
          status: s.status || "pendente",
        }),
          L(!0));
      },
      B = async (k) => {
        var T, W;
        k.preventDefault();
        try {
          (await M.put(`/eventos/${e}`, _),
            L(!1),
            D("Evento atualizado com sucesso!"),
            P());
        } catch (me) {
          D(
            ((W = (T = me.response) == null ? void 0 : T.data) == null
              ? void 0
              : W.error) || "Erro ao atualizar evento.",
            "error",
          );
        }
      },
      J = async (k) => {
        var T, W;
        if (window.confirm("Tem certeza que deseja excluir esta atividade?"))
          try {
            (await M.delete(`/atividades/${k}`),
              D("Atividade excluída com sucesso!"),
              P());
          } catch (me) {
            D(
              ((W = (T = me.response) == null ? void 0 : T.data) == null
                ? void 0
                : W.error) || "Erro ao excluir atividade.",
              "error",
            );
          }
      },
      pt = (k) => {
        (C({
          id: k.id,
          titulo: k.titulo,
          tipo: k.tipo || "",
          cargaHoraria: k.cargaHoraria || "",
          vagas: k.vagas || "",
          local: k.local || "",
          horario_inicio: k.horario_inicio || "",
          horario_fim: k.horario_fim || "",
          responsavel: k.responsavel || "",
          evento_id: k.evento_id,
        }),
          X(!0));
      },
      V = async (k) => {
        var T, W;
        k.preventDefault();
        try {
          (await M.put(`/atividades/${H.id}`, {
            ...H,
            cargaHoraria: Number(H.cargaHoraria) || null,
            vagas: Number(H.vagas) || null,
          }),
            X(!1),
            D("Atividade atualizada com sucesso!"),
            P());
        } catch (me) {
          D(
            ((W = (T = me.response) == null ? void 0 : T.data) == null
              ? void 0
              : W.error) || "Erro ao atualizar atividade.",
            "error",
          );
        }
      },
      be = async () => {
        var k, T;
        if (!(!S || !p))
          try {
            (await M.post("/presencas", {
              participante_id: Number(S),
              atividade_id: p,
              checkIn: new Date().toISOString(),
            }),
              h(!1),
              E(""),
              x(null),
              D("Check-in registrado com sucesso!"));
          } catch (W) {
            D(
              ((T = (k = W.response) == null ? void 0 : k.data) == null
                ? void 0
                : T.error) || "Erro ao registrar check-in.",
              "error",
            );
          }
      },
      et = async (k) => {
        var T, W;
        if (window.confirm("Tem certeza que deseja cancelar esta inscrição?"))
          try {
            (await M.put(`/inscricoes/${k}`, { status: "cancelada" }),
              D("Inscrição cancelada com sucesso!"),
              P());
          } catch (me) {
            D(
              ((W = (T = me.response) == null ? void 0 : T.data) == null
                ? void 0
                : W.error) || "Erro ao cancelar inscrição.",
              "error",
            );
          }
      },
      ht = async (k) => {
        var T, W;
        try {
          (await M.put(`/inscricoes/${k}`, { status: "confirmada" }),
            D("Inscrição confirmada com sucesso!"),
            P());
        } catch (me) {
          D(
            ((W = (T = me.response) == null ? void 0 : T.data) == null
              ? void 0
              : W.error) || "Erro ao confirmar inscrição.",
            "error",
          );
        }
      },
      We = async () => {
        _t(!0);
        try {
          const k = u.filter((W) => W.status === "confirmada");
          let T = 0;
          for (const W of k)
            try {
              const me = `CERT-${new Date().getFullYear()}-${String(T + 1).padStart(4, "0")}`;
              (await M.post("/certificados", {
                codigo: me,
                cargaHoraria: i.reduce(
                  (yn, Zr) => yn + (Zr.cargaHoraria || 0),
                  0,
                ),
                status: "emitido",
                participante_id: W.participante_id,
                evento_id: Number(e),
              }),
                T++);
            } catch {}
          (K(!1), D(`${T} certificado(s) emitido(s) com sucesso!`));
        } catch {
          D("Erro ao emitir certificados.", "error");
        } finally {
          _t(!1);
        }
      };
    return d
      ? o.jsx(jt, {
          activePage: "events",
          activeDropdownPage: "active",
          children: o.jsx("div", {
            className: "text-gray-500",
            children: "Carregando...",
          }),
        })
      : s
        ? o.jsxs(jt, {
            activePage: "events",
            activeDropdownPage: "active",
            children: [
              o.jsxs("div", {
                className: "space-y-6 max-w-7xl mx-auto",
                children: [
                  m &&
                    o.jsx("div", {
                      className: `p-3 rounded-lg text-sm ${w === "error" ? "bg-red-50 border border-red-200 text-red-700" : "bg-green-50 border border-green-200 text-green-700"}`,
                      children: m,
                    }),
                  o.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100",
                    children: [
                      o.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          o.jsxs(G, {
                            to: "/organizador/eventos",
                            className:
                              "text-xs text-gray-500 hover:text-pae-blue-header transition-colors flex items-center gap-1",
                            children: [
                              o.jsx("svg", {
                                className: "w-3 h-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: o.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 19l-7-7 7-7",
                                }),
                              }),
                              "Voltar para Eventos",
                            ],
                          }),
                          o.jsx("h2", {
                            className:
                              "text-2xl md:text-3xl font-extrabold text-pae-text-blue",
                            children: s.nome,
                          }),
                          o.jsxs("p", {
                            className: "text-xs md:text-sm text-gray-500",
                            children: [
                              s.instituicao || "",
                              " ",
                              s.instituicao && s.dataInicio ? "| " : "",
                              Gu(s.dataInicio),
                              " - ",
                              Gu(s.dataFim),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: z,
                        className:
                          "bg-pae-green-button text-white px-8 py-2.5 rounded-xl font-semibold hover:bg-pae-green-hover transition shadow-md w-full md:w-auto",
                        children: "Editar Evento",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className:
                      "bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto",
                    children: o.jsxs("nav", {
                      className: "flex space-x-2 md:space-x-4 min-w-max",
                      children: [
                        o.jsx("button", {
                          onClick: () => r("activities"),
                          className: `px-6 py-2 rounded-xl text-sm font-bold transition-all ${n === "activities" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`,
                          children: "Atividades",
                        }),
                        o.jsx("button", {
                          onClick: () => r("participants"),
                          className: `px-6 py-2 rounded-xl text-sm font-bold transition-all ${n === "participants" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`,
                          children: "Participantes",
                        }),
                        o.jsx("button", {
                          onClick: () => r("presencas"),
                          className: `px-6 py-2 rounded-xl text-sm font-bold transition-all ${n === "presencas" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`,
                          children: "Presenças",
                        }),
                        o.jsx("button", {
                          onClick: () => r("certificates"),
                          className: `px-6 py-2 rounded-xl text-sm font-bold transition-all ${n === "certificates" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`,
                          children: "Certificados",
                        }),
                      ],
                    }),
                  }),
                  o.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      n === "activities" &&
                        o.jsxs("div", {
                          className:
                            "bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6",
                          children: [
                            o.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row items-center justify-between gap-4",
                              children: [
                                o.jsx("h3", {
                                  className:
                                    "text-xl md:text-2xl font-extrabold text-pae-text-blue",
                                  children: "Lista de Atividades",
                                }),
                                o.jsxs(G, {
                                  to: `/organizador/evento/${e}/adicionar-atividade`,
                                  className:
                                    "bg-pae-green-button text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-pae-green-hover transition flex items-center space-x-1 shadow-sm w-full sm:w-auto justify-center",
                                  children: [
                                    o.jsx("span", { children: "+" }),
                                    o.jsx("span", {
                                      children: "Adicionar Atividade",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.length === 0
                              ? o.jsx("p", {
                                  className: "text-gray-500 text-sm",
                                  children: "Nenhuma atividade cadastrada.",
                                })
                              : o.jsx("div", {
                                  className: "overflow-x-auto -mx-6",
                                  children: o.jsxs("table", {
                                    className:
                                      "w-full text-left table-auto min-w-[800px]",
                                    children: [
                                      o.jsx("thead", {
                                        className:
                                          "bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: o.jsxs("tr", {
                                          children: [
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Nome",
                                            }),
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Tipo",
                                            }),
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Carga H.",
                                            }),
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Horário",
                                            }),
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Responsável",
                                            }),
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Local",
                                            }),
                                            o.jsx("th", {
                                              className: "px-4 py-4",
                                              children: "Ações",
                                            }),
                                          ],
                                        }),
                                      }),
                                      o.jsx("tbody", {
                                        className: "divide-y divide-gray-100",
                                        children: i.map((k) =>
                                          o.jsxs(
                                            "tr",
                                            {
                                              className:
                                                "hover:bg-gray-50 transition-colors",
                                              children: [
                                                o.jsx("td", {
                                                  className:
                                                    "px-4 py-4 text-sm font-semibold text-pae-blue-header",
                                                  children: k.titulo,
                                                }),
                                                o.jsx("td", {
                                                  className:
                                                    "px-4 py-4 text-sm text-gray-600",
                                                  children: k.tipo || "-",
                                                }),
                                                o.jsx("td", {
                                                  className:
                                                    "px-4 py-4 text-sm text-gray-600",
                                                  children: k.cargaHoraria
                                                    ? `${k.cargaHoraria}h`
                                                    : "-",
                                                }),
                                                o.jsx("td", {
                                                  className:
                                                    "px-4 py-4 text-sm text-gray-600",
                                                  children:
                                                    k.horario_inicio &&
                                                    k.horario_fim
                                                      ? `${k.horario_inicio} - ${k.horario_fim}`
                                                      : "-",
                                                }),
                                                o.jsx("td", {
                                                  className:
                                                    "px-4 py-4 text-sm text-gray-600",
                                                  children:
                                                    k.responsavel || "-",
                                                }),
                                                o.jsx("td", {
                                                  className:
                                                    "px-4 py-4 text-sm text-gray-600",
                                                  children: k.local || "-",
                                                }),
                                                o.jsxs("td", {
                                                  className:
                                                    "px-4 py-4 text-sm space-x-2",
                                                  children: [
                                                    o.jsx("button", {
                                                      onClick: () => pt(k),
                                                      className:
                                                        "text-blue-600 hover:text-blue-800 font-medium",
                                                      children: "Editar",
                                                    }),
                                                    o.jsx("button", {
                                                      onClick: () => J(k.id),
                                                      className:
                                                        "text-red-600 hover:text-red-800 font-medium",
                                                      children: "Excluir",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            k.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                          ],
                        }),
                      n === "participants" &&
                        o.jsxs("div", {
                          className:
                            "bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6",
                          children: [
                            o.jsx("h3", {
                              className:
                                "text-xl md:text-2xl font-extrabold text-pae-text-blue",
                              children: "Participantes Inscritos",
                            }),
                            u.length === 0
                              ? o.jsx("p", {
                                  className: "text-gray-500 text-sm",
                                  children: "Nenhuma inscrição encontrada.",
                                })
                              : o.jsx("div", {
                                  className: "overflow-x-auto -mx-6",
                                  children: o.jsxs("table", {
                                    className:
                                      "w-full text-left table-auto min-w-[600px]",
                                    children: [
                                      o.jsx("thead", {
                                        className:
                                          "bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: o.jsxs("tr", {
                                          children: [
                                            o.jsx("th", {
                                              className: "px-6 py-4",
                                              children: "Participante",
                                            }),
                                            o.jsx("th", {
                                              className: "px-6 py-4",
                                              children: "Data",
                                            }),
                                            o.jsx("th", {
                                              className: "px-6 py-4",
                                              children: "Status",
                                            }),
                                            o.jsx("th", {
                                              className: "px-6 py-4",
                                              children: "Ações",
                                            }),
                                          ],
                                        }),
                                      }),
                                      o.jsx("tbody", {
                                        className: "divide-y divide-gray-100",
                                        children: u.map((k) =>
                                          o.jsxs(
                                            "tr",
                                            {
                                              className:
                                                "hover:bg-gray-50 transition-colors",
                                              children: [
                                                o.jsx("td", {
                                                  className:
                                                    "px-6 py-4 text-sm font-semibold text-pae-blue-header",
                                                  children:
                                                    k.participante_nome ||
                                                    `#${k.participante_id}`,
                                                }),
                                                o.jsx("td", {
                                                  className:
                                                    "px-6 py-4 text-sm text-gray-600",
                                                  children: k.data
                                                    ? new Date(
                                                        k.data,
                                                      ).toLocaleDateString(
                                                        "pt-BR",
                                                      )
                                                    : "-",
                                                }),
                                                o.jsx("td", {
                                                  className: "px-6 py-4",
                                                  children: o.jsx("span", {
                                                    className: `px-2 py-1 rounded-full text-xs font-semibold ${k.status === "confirmada" ? "bg-green-100 text-green-700" : k.status === "cancelada" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`,
                                                    children: k.status,
                                                  }),
                                                }),
                                                o.jsxs("td", {
                                                  className:
                                                    "px-6 py-4 text-sm space-x-2",
                                                  children: [
                                                    k.status === "pendente" &&
                                                      o.jsx("button", {
                                                        onClick: () => ht(k.id),
                                                        className:
                                                          "text-green-600 hover:text-green-800 font-medium",
                                                        children: "Confirmar",
                                                      }),
                                                    k.status !== "cancelada" &&
                                                      o.jsx("button", {
                                                        onClick: () => et(k.id),
                                                        className:
                                                          "text-red-600 hover:text-red-800 font-medium",
                                                        children: "Cancelar",
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            k.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                          ],
                        }),
                      n === "presencas" &&
                        o.jsxs("div", {
                          className:
                            "bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6",
                          children: [
                            o.jsx("h3", {
                              className:
                                "text-xl md:text-2xl font-extrabold text-pae-text-blue",
                              children: "Registro de Presenças",
                            }),
                            o.jsx("p", {
                              className: "text-sm text-gray-500",
                              children:
                                "Selecione uma atividade para registrar o check-in de um participante.",
                            }),
                            i.length === 0
                              ? o.jsx("p", {
                                  className: "text-gray-500 text-sm",
                                  children:
                                    "Nenhuma atividade cadastrada. Adicione atividades primeiro.",
                                })
                              : o.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: i.map((k) =>
                                    o.jsxs(
                                      "div",
                                      {
                                        className:
                                          "border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3",
                                        children: [
                                          o.jsxs("div", {
                                            children: [
                                              o.jsx("h4", {
                                                className:
                                                  "text-sm font-bold text-gray-800",
                                                children: k.titulo,
                                              }),
                                              o.jsxs("p", {
                                                className:
                                                  "text-xs text-gray-500",
                                                children: [
                                                  k.tipo || "",
                                                  " ",
                                                  k.horario_inicio
                                                    ? `| ${k.horario_inicio} - ${k.horario_fim}`
                                                    : "",
                                                ],
                                              }),
                                            ],
                                          }),
                                          o.jsx("button", {
                                            onClick: () => {
                                              (x(k.id), h(!0));
                                            },
                                            className:
                                              "bg-[#3662A4] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition shadow-sm",
                                            children: "Check-in",
                                          }),
                                        ],
                                      },
                                      k.id,
                                    ),
                                  ),
                                }),
                          ],
                        }),
                      n === "certificates" &&
                        o.jsx("div", {
                          className:
                            "bg-white p-8 rounded-3xl shadow-lg border border-gray-100 animate-in fade-in duration-300",
                          children: o.jsxs("div", {
                            className:
                              "flex flex-col items-center text-center space-y-6",
                            children: [
                              o.jsx("div", {
                                className:
                                  "w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500",
                                children: o.jsx("svg", {
                                  className: "w-10 h-10",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438z",
                                  }),
                                }),
                              }),
                              o.jsxs("div", {
                                className: "max-w-md",
                                children: [
                                  o.jsx("h3", {
                                    className:
                                      "text-2xl font-extrabold text-pae-text-blue mb-2",
                                    children: "Geração de Certificados",
                                  }),
                                  o.jsxs("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                      "Libere os certificados para todos os participantes com inscrição confirmada. Carga horária total: ",
                                      i.reduce(
                                        (k, T) => k + (T.cargaHoraria || 0),
                                        0,
                                      ),
                                      "h",
                                    ],
                                  }),
                                ],
                              }),
                              o.jsx("button", {
                                onClick: () => K(!0),
                                className:
                                  "bg-pae-green-button text-white px-10 py-4 rounded-xl font-bold hover:bg-pae-green-hover transition shadow-md",
                                children: "Liberar Certificados",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              R &&
                o.jsx("div", {
                  className:
                    "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                  children: o.jsxs("div", {
                    className:
                      "bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4",
                    children: [
                      o.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Editar Evento",
                      }),
                      o.jsxs("form", {
                        onSubmit: B,
                        className: "space-y-4",
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Nome",
                              }),
                              o.jsx("input", {
                                type: "text",
                                value: _.nome,
                                onChange: (k) =>
                                  $({ ..._, nome: k.target.value }),
                                required: !0,
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Instituição / Local",
                              }),
                              o.jsx("input", {
                                type: "text",
                                value: _.instituicao,
                                onChange: (k) =>
                                  $({ ..._, instituicao: k.target.value }),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Modalidade",
                                  }),
                                  o.jsxs("select", {
                                    value: _.modalidade,
                                    onChange: (k) =>
                                      $({ ..._, modalidade: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white",
                                    children: [
                                      o.jsx("option", {
                                        value: "presencial",
                                        children: "Presencial",
                                      }),
                                      o.jsx("option", {
                                        value: "online",
                                        children: "Online",
                                      }),
                                      o.jsx("option", {
                                        value: "hibrido",
                                        children: "Híbrido",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Status",
                                  }),
                                  o.jsxs("select", {
                                    value: _.status,
                                    onChange: (k) =>
                                      $({ ..._, status: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white",
                                    children: [
                                      o.jsx("option", {
                                        value: "pendente",
                                        children: "Pendente",
                                      }),
                                      o.jsx("option", {
                                        value: "ativo",
                                        children: "Ativo",
                                      }),
                                      o.jsx("option", {
                                        value: "concluido",
                                        children: "Concluído",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Data Início",
                                  }),
                                  o.jsx("input", {
                                    type: "date",
                                    value: _.dataInicio,
                                    onChange: (k) =>
                                      $({ ..._, dataInicio: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Data Fim",
                                  }),
                                  o.jsx("input", {
                                    type: "date",
                                    value: _.dataFim,
                                    onChange: (k) =>
                                      $({ ..._, dataFim: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "flex gap-3 pt-2",
                            children: [
                              o.jsx("button", {
                                type: "submit",
                                className:
                                  "bg-[#3FB65F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition",
                                children: "Salvar",
                              }),
                              o.jsx("button", {
                                type: "button",
                                onClick: () => L(!1),
                                className:
                                  "border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition",
                                children: "Cancelar",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              F &&
                H &&
                o.jsx("div", {
                  className:
                    "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                  children: o.jsxs("div", {
                    className:
                      "bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4",
                    children: [
                      o.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Editar Atividade",
                      }),
                      o.jsxs("form", {
                        onSubmit: V,
                        className: "space-y-4",
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Título",
                              }),
                              o.jsx("input", {
                                type: "text",
                                value: H.titulo,
                                onChange: (k) =>
                                  C({ ...H, titulo: k.target.value }),
                                required: !0,
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Tipo",
                                  }),
                                  o.jsxs("select", {
                                    value: H.tipo,
                                    onChange: (k) =>
                                      C({ ...H, tipo: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white",
                                    children: [
                                      o.jsx("option", {
                                        value: "palestra",
                                        children: "Palestra",
                                      }),
                                      o.jsx("option", {
                                        value: "workshop",
                                        children: "Workshop",
                                      }),
                                      o.jsx("option", {
                                        value: "mesa_redonda",
                                        children: "Mesa Redonda",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Carga Horária (h)",
                                  }),
                                  o.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: H.cargaHoraria,
                                    onChange: (k) =>
                                      C({ ...H, cargaHoraria: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Vagas",
                                  }),
                                  o.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: H.vagas,
                                    onChange: (k) =>
                                      C({ ...H, vagas: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Local",
                                  }),
                                  o.jsx("input", {
                                    type: "text",
                                    value: H.local,
                                    onChange: (k) =>
                                      C({ ...H, local: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Horário Início",
                                  }),
                                  o.jsx("input", {
                                    type: "time",
                                    value: H.horario_inicio,
                                    onChange: (k) =>
                                      C({
                                        ...H,
                                        horario_inicio: k.target.value,
                                      }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Horário Fim",
                                  }),
                                  o.jsx("input", {
                                    type: "time",
                                    value: H.horario_fim,
                                    onChange: (k) =>
                                      C({ ...H, horario_fim: k.target.value }),
                                    className:
                                      "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Responsável",
                              }),
                              o.jsx("input", {
                                type: "text",
                                value: H.responsavel,
                                onChange: (k) =>
                                  C({ ...H, responsavel: k.target.value }),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "flex gap-3 pt-2",
                            children: [
                              o.jsx("button", {
                                type: "submit",
                                className:
                                  "bg-[#3FB65F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition",
                                children: "Salvar",
                              }),
                              o.jsx("button", {
                                type: "button",
                                onClick: () => X(!1),
                                className:
                                  "border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition",
                                children: "Cancelar",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              j &&
                o.jsx("div", {
                  className:
                    "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                  children: o.jsxs("div", {
                    className:
                      "bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4",
                    children: [
                      o.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Registrar Check-in",
                      }),
                      o.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: [
                          "Atividade: ",
                          o.jsx("strong", {
                            children:
                              (vn = i.find((k) => k.id === p)) == null
                                ? void 0
                                : vn.titulo,
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "ID do Participante",
                          }),
                          o.jsx("input", {
                            type: "number",
                            value: S,
                            onChange: (k) => E(k.target.value),
                            placeholder: "Ex: 1",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                          }),
                          o.jsx("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children:
                              "Informe o ID do participante (mesmo que o usuario_id)",
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex gap-3 pt-2",
                        children: [
                          o.jsx("button", {
                            onClick: be,
                            disabled: !S,
                            className:
                              "bg-[#3662A4] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition disabled:opacity-50",
                            children: "Registrar",
                          }),
                          o.jsx("button", {
                            onClick: () => {
                              (h(!1), E(""));
                            },
                            className:
                              "border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition",
                            children: "Cancelar",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              I &&
                o.jsx("div", {
                  className:
                    "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                  children: o.jsxs("div", {
                    className:
                      "bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4 text-center",
                    children: [
                      o.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Confirmar Emissão",
                      }),
                      o.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: [
                          "Serão emitidos certificados para ",
                          o.jsx("strong", {
                            children: u.filter((k) => k.status === "confirmada")
                              .length,
                          }),
                          " participante(s) com inscrição confirmada. Carga horária total: ",
                          o.jsxs("strong", {
                            children: [
                              i.reduce((k, T) => k + (T.cargaHoraria || 0), 0),
                              "h",
                            ],
                          }),
                          ".",
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex gap-3 pt-2 justify-center",
                        children: [
                          o.jsx("button", {
                            onClick: We,
                            disabled: ce,
                            className:
                              "bg-[#3FB65F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition disabled:opacity-50",
                            children: ce ? "Emitindo..." : "Confirmar",
                          }),
                          o.jsx("button", {
                            onClick: () => K(!1),
                            disabled: ce,
                            className:
                              "border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition",
                            children: "Cancelar",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        : o.jsx(jt, {
            activePage: "events",
            activeDropdownPage: "active",
            children: o.jsx("div", {
              className: "text-gray-500",
              children: "Evento não encontrado.",
            }),
          });
  },
  Tg = () => {
    const { id: e } = aa(),
      [t, n] = N.useState([]),
      [r, s] = N.useState(""),
      [l, i] = N.useState(!0),
      [a, u] = N.useState("");
    N.useEffect(() => {
      (async () => {
        try {
          const [f, m] = await Promise.all([
            M.get(`/inscricoes/evento/${e}`),
            M.get(`/eventos/${e}`).catch(() => ({ data: { nome: "Evento" } })),
          ]);
          (n(f.data), s(m.data.nome));
        } catch {
          n([]);
        } finally {
          i(!1);
        }
      })();
    }, [e]);
    const c = t.filter((d) => {
      var f, m;
      return (
        ((f = d.participante_nome) == null
          ? void 0
          : f.toLowerCase().includes(a.toLowerCase())) ||
        ((m = d.participante_id) == null ? void 0 : m.toString().includes(a))
      );
    });
    return o.jsx(jt, {
      activePage: "events",
      activeDropdownPage: "active",
      children: o.jsxs("div", {
        className: "space-y-6 max-w-7xl mx-auto",
        children: [
          o.jsxs("div", {
            className:
              "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100",
            children: [
              o.jsxs("div", {
                className: "space-y-1",
                children: [
                  o.jsxs(G, {
                    to: `/organizador/evento/${e}`,
                    className:
                      "text-xs text-gray-500 hover:text-pae-blue-header transition-colors flex items-center gap-1",
                    children: [
                      o.jsx("svg", {
                        className: "w-3 h-3",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 19l-7-7 7-7",
                        }),
                      }),
                      "Voltar para ",
                      r,
                    ],
                  }),
                  o.jsx("h2", {
                    className:
                      "text-2xl md:text-3xl font-extrabold text-pae-text-blue",
                    children: "Participantes",
                  }),
                  o.jsx("p", {
                    className: "text-xs md:text-sm text-gray-500",
                    children:
                      "Gerencie a lista de inscritos e presenças do evento.",
                  }),
                ],
              }),
              o.jsx("div", {
                className: "flex gap-2",
                children: o.jsxs("button", {
                  className:
                    "bg-pae-blue-header text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition shadow-md text-sm flex items-center gap-2",
                  children: [
                    o.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: o.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12",
                      }),
                    }),
                    "Exportar CSV",
                  ],
                }),
              }),
            ],
          }),
          o.jsxs("div", {
            className:
              "bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6",
            children: [
              o.jsx("div", {
                className: "flex items-center justify-between",
                children: o.jsxs("div", {
                  className: "relative w-full max-w-md",
                  children: [
                    o.jsx("input", {
                      type: "text",
                      placeholder: "Buscar participante...",
                      value: a,
                      onChange: (d) => u(d.target.value),
                      className:
                        "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                    }),
                    o.jsx("svg", {
                      className:
                        "w-5 h-5 text-gray-400 absolute left-3 top-2.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: o.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                      }),
                    }),
                  ],
                }),
              }),
              l
                ? o.jsx("p", {
                    className: "text-gray-500",
                    children: "Carregando...",
                  })
                : c.length === 0
                  ? o.jsx("p", {
                      className: "text-gray-500",
                      children: "Nenhum participante inscrito.",
                    })
                  : o.jsx("div", {
                      className: "overflow-x-auto -mx-6",
                      children: o.jsxs("table", {
                        className: "w-full text-left table-auto min-w-[700px]",
                        children: [
                          o.jsx("thead", {
                            className:
                              "bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className: "px-6 py-4",
                                  children: "Participante ID",
                                }),
                                o.jsx("th", {
                                  className: "px-6 py-4",
                                  children: "Status",
                                }),
                                o.jsx("th", {
                                  className: "px-6 py-4",
                                  children: "Data",
                                }),
                              ],
                            }),
                          }),
                          o.jsx("tbody", {
                            className: "divide-y divide-gray-100",
                            children: c.map((d, f) =>
                              o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className:
                                        "px-6 py-4 text-sm font-semibold text-pae-blue-header",
                                      children:
                                        d.participante_nome ||
                                        `Participante #${d.participante_id}`,
                                    }),
                                    o.jsx("td", {
                                      className: "px-6 py-4 text-sm",
                                      children: o.jsx("span", {
                                        className: `px-3 py-1 rounded-full text-xs font-medium ${d.status === "confirmada" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`,
                                        children: d.status || "pendente",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-6 py-4 text-sm text-gray-600",
                                      children: d.data
                                        ? new Date(d.data).toLocaleDateString(
                                            "pt-BR",
                                          )
                                        : "-",
                                    }),
                                  ],
                                },
                                f,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
            ],
          }),
        ],
      }),
    });
  },
  Og = () => {
    const e = Ve(),
      { user: t, logout: n, updateUser: r } = Ze(),
      [s, l] = N.useState({ nome: "", email: "" }),
      [i, a] = N.useState(!1),
      [u, c] = N.useState("");
    N.useEffect(() => {
      const m = async () => {
        try {
          const g = await M.get(`/usuarios/${t.id}`);
          l({ nome: g.data.nome || "", email: g.data.email || "" });
        } catch {}
      };
      t != null && t.id && m();
    }, [t]);
    const d = () => {
        (n(), e("/"));
      },
      f = async (m) => {
        (m.preventDefault(), a(!0), c(""));
        try {
          const g = await M.put(`/usuarios/${t.id}`, s);
          (r({ nome: g.data.nome, email: g.data.email }),
            c("Perfil atualizado com sucesso!"));
        } catch {
          c("Erro ao atualizar perfil.");
        } finally {
          a(!1);
        }
      };
    return o.jsx(jt, {
      activePage: "settings",
      children: o.jsxs("div", {
        className: "max-w-4xl mx-auto space-y-10",
        children: [
          o.jsx("h2", {
            className: "text-3xl font-semibold text-[#00707D]",
            children: "Perfil do Organizador",
          }),
          o.jsxs("div", {
            className:
              "bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10",
            children: [
              o.jsxs("div", {
                className: "flex flex-col items-center space-y-6 md:w-1/3",
                children: [
                  o.jsx("div", {
                    className: "relative group",
                    children: o.jsx("div", {
                      className:
                        "w-40 h-40 rounded-full border-4 border-blue-100 shadow-md bg-blue-50 flex items-center justify-center text-blue-600 text-4xl font-bold",
                      children: s.nome ? s.nome.charAt(0).toUpperCase() : "?",
                    }),
                  }),
                  o.jsxs("div", {
                    className: "text-center",
                    children: [
                      o.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: s.nome || "Organizador",
                      }),
                      o.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: s.email,
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    onClick: d,
                    className:
                      "w-full bg-[#F94D4D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2",
                    children: [
                      o.jsx("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                        }),
                      }),
                      "Sair da Conta",
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "md:w-2/3",
                children: [
                  u &&
                    o.jsx("div", {
                      className: `mb-4 p-3 rounded-lg text-sm ${u.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`,
                      children: u,
                    }),
                  o.jsxs("form", {
                    className: "space-y-6",
                    onSubmit: f,
                    children: [
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1.5",
                            children: "Nome",
                          }),
                          o.jsx("input", {
                            type: "text",
                            value: s.nome,
                            onChange: (m) => l({ ...s, nome: m.target.value }),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm",
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1.5",
                            children: "E-mail para Contato",
                          }),
                          o.jsx("input", {
                            type: "email",
                            value: s.email,
                            onChange: (m) => l({ ...s, email: m.target.value }),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm",
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1.5",
                            children: "Nova Senha",
                          }),
                          o.jsx("input", {
                            type: "password",
                            placeholder: "Deixe em branco para manter a atual",
                            onChange: (m) =>
                              l({ ...s, senha: m.target.value || void 0 }),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "pt-4",
                        children: o.jsx("button", {
                          type: "submit",
                          disabled: i,
                          className:
                            "bg-pae-blue-header text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-md text-sm disabled:opacity-50",
                          children: i ? "Atualizando..." : "Atualizar Perfil",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  _l = ({ children: e, activePage: t }) => {
    const { user: n, logout: r } = Ze(),
      s = Ve(),
      l = () => {
        (r(), s("/"));
      },
      i = [
        {
          id: "eventos",
          label: "Eventos",
          icon: o.jsx("svg", {
            className: "w-5 h-5 mr-3",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: o.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
            }),
          }),
          link: "/participante/eventos",
        },
        {
          id: "meus-eventos",
          label: "Meus Eventos",
          icon: o.jsx("svg", {
            className: "w-5 h-5 mr-3",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: o.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
            }),
          }),
          link: "/participante/meus-eventos",
        },
        {
          id: "certificados",
          label: "Certificados",
          icon: o.jsx("svg", {
            className: "w-5 h-5 mr-3",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: o.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            }),
          }),
          link: "/participante/certificados",
        },
        {
          id: "validar-certificado",
          label: "Validar Certificado",
          icon: o.jsx("svg", {
            className: "w-5 h-5 mr-3",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: o.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            }),
          }),
          link: "/participante/validar-certificado",
        },
      ],
      a = (u) =>
        t === u
          ? "flex items-center px-6 py-3 bg-white/10 text-white font-medium"
          : "flex items-center px-6 py-3 hover:bg-white/10 text-white/90";
    return o.jsxs("div", {
      className:
        "min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800",
      children: [
        o.jsxs("header", {
          className:
            "bg-[#3662A4] text-white p-4 flex items-center justify-between shadow-md px-4 md:px-6 z-20",
          children: [
            o.jsxs(G, {
              to: "/",
              className: "flex items-center text-white shrink-0",
              children: [
                o.jsx("img", {
                  src: gn,
                  alt: "Logo",
                  className: "w-8 h-8 mr-2 md:mr-3 brightness-0 invert",
                }),
                o.jsx("h1", {
                  className: "text-xl font-medium hidden sm:block",
                  children: "Plataforma Acadêmica de Eventos (PAE)",
                }),
                o.jsx("h1", {
                  className: "text-lg font-medium sm:hidden",
                  children: "PAE",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center space-x-2 text-white/90",
              children: [
                o.jsx(G, {
                  to: "/participante/configuracoes",
                  className:
                    "w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-200 flex items-center justify-center text-xl overflow-hidden border-2 border-white/50 hover:opacity-80 transition-opacity text-orange-700 font-bold text-sm",
                  children:
                    n != null && n.nome ? n.nome.charAt(0).toUpperCase() : "P",
                }),
                o.jsxs(G, {
                  to: "/participante/configuracoes",
                  className:
                    "flex items-center text-xs md:text-sm font-medium hover:text-white transition-colors",
                  children: [
                    o.jsx("span", {
                      className: "hidden xs:inline",
                      children: (n == null ? void 0 : n.nome) || "Participante",
                    }),
                    " ",
                    o.jsx("span", {
                      className: "ml-1 text-[10px] md:text-xs",
                      children: "▼",
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: l,
                  className:
                    "ml-2 text-xs text-white/70 hover:text-white transition-colors",
                  title: "Sair",
                  children: o.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: o.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "flex flex-grow overflow-hidden flex-col md:flex-row",
          children: [
            o.jsx("aside", {
              className:
                "w-full md:w-64 bg-[#3662A4] text-white flex flex-col md:pt-10 shadow-inner z-10 overflow-x-auto md:overflow-y-auto",
              children: o.jsx("nav", {
                className:
                  "flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 p-2 md:p-0",
                children: i.map((u) =>
                  o.jsxs(
                    G,
                    {
                      to: u.link,
                      className: `${a(u.id)} whitespace-nowrap md:whitespace-normal flex-shrink-0`,
                      children: [
                        u.icon,
                        " ",
                        o.jsx("span", {
                          className: "text-xs md:text-sm",
                          children: u.label,
                        }),
                      ],
                    },
                    u.id,
                  ),
                ),
              }),
            }),
            o.jsx("main", {
              className: "flex-grow bg-slate-50 p-4 md:p-10 overflow-y-auto",
              children: e,
            }),
          ],
        }),
      ],
    });
  },
  Ag = () => {
    const { user: e } = Ze(),
      [t, n] = N.useState([]),
      [r, s] = N.useState(!0),
      [l, i] = N.useState(!1),
      [a, u] = N.useState("todos");
    N.useEffect(() => {
      const g = async () => {
        try {
          const w = await M.get(`/inscricoes/participante/${e.perfil_id}`);
          n(w.data);
        } catch {
          n([]);
        } finally {
          s(!1);
        }
      };
      e != null && e.id && g();
    }, [e]);
    const [c, d] = N.useState(""),
      f = async (g) => {
        var w, y;
        if (window.confirm("Tem certeza que deseja cancelar esta inscrição?"))
          try {
            (await M.put(`/inscricoes/${g}`, { status: "cancelada" }),
              d("Inscrição cancelada com sucesso!"));
            const j = await M.get(`/inscricoes/participante/${e.perfil_id}`);
            n(j.data);
          } catch (j) {
            d(
              ((y = (w = j.response) == null ? void 0 : w.data) == null
                ? void 0
                : y.error) || "Erro ao cancelar inscrição.",
            );
          }
      },
      m = t.filter((g) => (a === "todos" ? !0 : g.status === a));
    return o.jsx(_l, {
      activePage: "meus-eventos",
      children: o.jsxs("div", {
        className: "max-w-5xl space-y-6 md:space-y-10 relative",
        children: [
          o.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
            children: [
              o.jsx("h2", {
                className: "text-2xl md:text-3xl font-semibold text-[#00707D]",
                children: "Meus Eventos",
              }),
              c &&
                o.jsx("div", {
                  className: `p-3 rounded-lg text-sm ${c.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`,
                  children: c,
                }),
              o.jsxs("div", {
                className: "relative w-full md:w-auto",
                children: [
                  o.jsxs("button", {
                    onClick: () => i(!l),
                    className:
                      "w-full md:w-auto border border-gray-300 bg-white text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-between gap-2",
                    children: [
                      o.jsx("span", {
                        children:
                          a === "todos"
                            ? "Ver Todos"
                            : a === "confirmada"
                              ? "Confirmadas"
                              : a === "pendente"
                                ? "Pendentes"
                                : "Canceladas",
                      }),
                      o.jsx("svg", {
                        className: `w-4 h-4 transition-transform ${l ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M19 9l-7 7-7-7",
                        }),
                      }),
                    ],
                  }),
                  l &&
                    o.jsx("div", {
                      className:
                        "absolute right-0 mt-2 w-full md:w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10",
                      children: o.jsxs("ul", {
                        className: "py-1 text-sm text-gray-700 text-center",
                        children: [
                          o.jsx("li", {
                            onClick: () => {
                              (u("todos"), i(!1));
                            },
                            className:
                              "hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100",
                            children: "Ver Todos",
                          }),
                          o.jsx("li", {
                            onClick: () => {
                              (u("confirmada"), i(!1));
                            },
                            className:
                              "hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100 text-blue-600",
                            children: "Confirmadas",
                          }),
                          o.jsx("li", {
                            onClick: () => {
                              (u("pendente"), i(!1));
                            },
                            className:
                              "hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100 text-gray-500",
                            children: "Pendentes",
                          }),
                          o.jsx("li", {
                            onClick: () => {
                              (u("cancelada"), i(!1));
                            },
                            className:
                              "hover:bg-gray-100 cursor-pointer py-2 text-gray-500",
                            children: "Canceladas",
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          }),
          r
            ? o.jsx("p", {
                className: "text-gray-500",
                children: "Carregando...",
              })
            : m.length === 0
              ? o.jsx("p", {
                  className: "text-gray-500",
                  children: "Nenhuma inscrição encontrada.",
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: m.map((g, w) =>
                    o.jsxs(
                      "div",
                      {
                        className:
                          "bg-white p-4 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                          o.jsxs("div", {
                            className:
                              "flex items-center space-x-4 w-full md:w-auto",
                            children: [
                              o.jsx("div", {
                                className:
                                  "w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner",
                                children: o.jsx("svg", {
                                  className: "w-8 h-8 md:w-10 md:h-10",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                  }),
                                }),
                              }),
                              o.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  o.jsx("h3", {
                                    className:
                                      "text-xl md:text-2xl font-semibold text-[#00707D] leading-tight",
                                    children:
                                      g.evento_nome || `Evento #${g.evento_id}`,
                                  }),
                                  o.jsx("p", {
                                    className:
                                      "text-xs md:text-sm text-gray-600",
                                    children: g.data
                                      ? new Date(g.data).toLocaleDateString(
                                          "pt-BR",
                                        )
                                      : "-",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className:
                              "flex flex-col sm:flex-row gap-2 w-full md:w-auto",
                            children: [
                              o.jsx("button", {
                                className: `w-full md:w-40 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors ${g.status === "cancelada" ? "bg-[#F94D4D] text-white hover:bg-red-700" : g.status === "confirmada" ? "bg-green-500 text-white hover:bg-green-700" : "border border-gray-300 text-gray-500 bg-transparent hover:bg-gray-50"}`,
                                children:
                                  g.status === "confirmada"
                                    ? "Confirmada"
                                    : g.status === "cancelada"
                                      ? "Cancelada"
                                      : "Pendente",
                              }),
                              g.status !== "cancelada" &&
                                o.jsx("button", {
                                  onClick: () => f(g.id),
                                  className:
                                    "text-red-500 hover:text-red-700 text-xs font-medium underline",
                                  children: "Cancelar inscrição",
                                }),
                            ],
                          }),
                        ],
                      },
                      w,
                    ),
                  ),
                }),
        ],
      }),
    });
  },
  Yu = (e) =>
    e
      ? new Date(e + "T00:00:00").toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
  Dg = () => {
    const { user: e } = Ze(),
      [t, n] = N.useState([]),
      [r, s] = N.useState([]),
      [l, i] = N.useState(!0),
      [a, u] = N.useState("");
    N.useEffect(() => {
      (async () => {
        try {
          const [m, g] = await Promise.all([
            M.get("/eventos"),
            M.get(`/inscricoes/participante/${e.perfil_id}`),
          ]);
          (n(
            m.data.filter(
              (w) => w.status === "ativo" || w.status === "pendente",
            ),
          ),
            s(g.data));
        } catch {
          n([]);
        } finally {
          i(!1);
        }
      })();
    }, [e.perfil_id]);
    const c = (f) =>
        r.some((m) => m.evento_id === f && m.status !== "cancelada"),
      d = async (f) => {
        var m, g;
        u("");
        try {
          (await M.post("/inscricoes", {
            participante_id: e.perfil_id,
            evento_id: f,
            status: "pendente",
          }),
            u("Inscrição realizada com sucesso!"));
          const w = await M.get(`/inscricoes/participante/${e.perfil_id}`);
          s(w.data);
        } catch (w) {
          u(
            ((g = (m = w.response) == null ? void 0 : m.data) == null
              ? void 0
              : g.error) || "Erro ao se inscrever.",
          );
        }
      };
    return o.jsx(_l, {
      activePage: "eventos",
      children: o.jsxs("div", {
        className: "max-w-5xl space-y-6 md:space-y-10",
        children: [
          o.jsx("h2", {
            className: "text-2xl md:text-3xl font-semibold text-[#00707D]",
            children: "Eventos Disponíveis",
          }),
          a &&
            o.jsx("div", {
              className: `p-3 rounded-lg text-sm ${a.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`,
              children: a,
            }),
          l
            ? o.jsx("p", {
                className: "text-gray-500",
                children: "Carregando...",
              })
            : t.length === 0
              ? o.jsx("p", {
                  className: "text-gray-500",
                  children: "Nenhum evento disponível no momento.",
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: t.map((f) => {
                    const m = c(f.id),
                      g = r.find(
                        (w) => w.evento_id === f.id && w.status !== "cancelada",
                      );
                    return o.jsxs(
                      "div",
                      {
                        className:
                          "bg-white p-4 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                          o.jsxs("div", {
                            className:
                              "flex items-center space-x-4 w-full md:w-auto",
                            children: [
                              o.jsx("div", {
                                className:
                                  "w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner",
                                children: o.jsx("svg", {
                                  className: "w-8 h-8 md:w-10 md:h-10",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                  }),
                                }),
                              }),
                              o.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  o.jsx("h3", {
                                    className:
                                      "text-xl md:text-2xl font-semibold text-[#00707D] leading-tight",
                                    children: f.nome,
                                  }),
                                  o.jsxs("p", {
                                    className:
                                      "text-xs md:text-sm text-gray-600",
                                    children: [
                                      f.instituicao || "",
                                      f.instituicao && f.dataInicio
                                        ? " | "
                                        : "",
                                      Yu(f.dataInicio),
                                      " - ",
                                      Yu(f.dataFim),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m
                            ? o.jsx("span", {
                                className: `w-full md:w-auto text-center px-8 py-2.5 rounded-lg text-sm font-medium shadow-sm ${(g == null ? void 0 : g.status) === "confirmada" ? "bg-green-100 text-green-700 border border-green-200" : (g == null ? void 0 : g.status) === "cancelada" ? "bg-red-100 text-red-700 border border-red-200" : "bg-yellow-100 text-yellow-700 border border-yellow-200"}`,
                                children:
                                  (g == null ? void 0 : g.status) ===
                                  "confirmada"
                                    ? "Inscrito (Confirmado)"
                                    : (g == null ? void 0 : g.status) ===
                                        "cancelada"
                                      ? "Cancelada"
                                      : "Inscrito (Pendente)",
                              })
                            : o.jsx("button", {
                                onClick: () => d(f.id),
                                className:
                                  "w-full md:w-auto text-center border border-gray-300 text-gray-600 px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm",
                                children: "Inscreva-se",
                              }),
                        ],
                      },
                      f.id,
                    );
                  }),
                }),
        ],
      }),
    });
  },
  zg = () => {
    const { user: e } = Ze(),
      [t, n] = N.useState([]),
      [r, s] = N.useState(!0);
    N.useEffect(() => {
      const i = async () => {
        try {
          const a = await M.get(`/certificados/participante/${e.perfil_id}`);
          n(a.data);
        } catch {
          n([]);
        } finally {
          s(!1);
        }
      };
      e != null && e.id && i();
    }, [e]);
    const l = (i) => {
      alert(`Download do certificado: ${i}`);
    };
    return o.jsx(_l, {
      activePage: "certificados",
      children: o.jsxs("div", {
        className: "max-w-5xl space-y-6 md:space-y-10",
        children: [
          o.jsx("h2", {
            className: "text-2xl md:text-3xl font-semibold text-[#00707D]",
            children: "Certificados",
          }),
          r
            ? o.jsx("p", {
                className: "text-gray-500",
                children: "Carregando...",
              })
            : t.length === 0
              ? o.jsx("p", {
                  className: "text-gray-500",
                  children: "Nenhum certificado disponível.",
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: t.map((i, a) =>
                    o.jsxs(
                      "div",
                      {
                        className:
                          "bg-white p-4 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                          o.jsxs("div", {
                            className:
                              "flex items-center space-x-4 w-full md:w-auto",
                            children: [
                              o.jsx("div", {
                                className:
                                  "w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner",
                                children: o.jsx("svg", {
                                  className: "w-8 h-8 md:w-10 md:h-10",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                  }),
                                }),
                              }),
                              o.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  o.jsx("h3", {
                                    className:
                                      "text-xl md:text-2xl font-semibold text-[#00707D] leading-tight",
                                    children:
                                      i.evento_nome || `Evento #${i.evento_id}`,
                                  }),
                                  o.jsxs("p", {
                                    className:
                                      "text-xs md:text-sm text-gray-600",
                                    children: [
                                      "Código: ",
                                      i.codigo,
                                      i.cargaHoraria
                                        ? ` | ${i.cargaHoraria}h`
                                        : "",
                                      i.status ? ` | ${i.status}` : "",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("button", {
                            onClick: () => l(i.codigo),
                            className:
                              "w-full md:w-auto bg-[#3FB65F] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2",
                            children: [
                              o.jsx("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: o.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                                }),
                              }),
                              "Baixar",
                            ],
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
        ],
      }),
    });
  },
  Fg = () => {
    const [e, t] = N.useState(""),
      [n, r] = N.useState(null),
      [s, l] = N.useState(null),
      [i, a] = N.useState(!1),
      u = async (c) => {
        if (c.key === "Enter" || c.type === "click") {
          if (!e) return;
          (a(!0), r(null), l(null));
          try {
            const d = await M.get(`/certificados/${e}`);
            (l(d.data), r("valido"));
          } catch {
            r("invalido");
          } finally {
            a(!1);
          }
        }
      };
    return o.jsxs("div", {
      className:
        "min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800",
      children: [
        o.jsxs("header", {
          className:
            "bg-[#3662A4] text-white p-4 flex items-center justify-between shadow-md px-6 z-20",
          children: [
            o.jsxs(G, {
              to: "/",
              className: "flex items-center text-white shrink-0",
              children: [
                o.jsx("img", {
                  src: gn,
                  alt: "Logo",
                  className: "w-8 h-8 mr-3 brightness-0 invert",
                }),
                o.jsx("h1", {
                  className: "text-xl font-medium hidden sm:block",
                  children: "Plataforma Acadêmica de Eventos (PAE)",
                }),
                o.jsx("h1", {
                  className: "text-lg font-medium sm:hidden",
                  children: "PAE",
                }),
              ],
            }),
            o.jsx(G, {
              to: "/login",
              className:
                "border border-white/50 text-white px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-white hover:text-[#3662A4] transition-colors",
              children: "Entrar",
            }),
          ],
        }),
        o.jsx("main", {
          className: "flex-grow p-4 md:p-10",
          children: o.jsxs("div", {
            className: "max-w-4xl mx-auto space-y-6 md:space-y-10",
            children: [
              o.jsx("h2", {
                className: "text-2xl md:text-3xl font-semibold text-[#00707D]",
                children: "Validar Certificados",
              }),
              o.jsxs("div", {
                className: "space-y-4",
                children: [
                  o.jsx("label", {
                    htmlFor: "codigo",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Inserir código do certificado",
                  }),
                  o.jsxs("div", {
                    className: "flex flex-col md:flex-row gap-3",
                    children: [
                      o.jsx("input", {
                        type: "text",
                        id: "codigo",
                        placeholder: "Ex: CERT-2026-0001",
                        value: e,
                        onChange: (c) => t(c.target.value),
                        onKeyDown: u,
                        className:
                          "w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-sm",
                      }),
                      o.jsx("button", {
                        onClick: u,
                        disabled: i,
                        className:
                          "bg-[#3662A4] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md md:w-auto w-full disabled:opacity-50",
                        children: i ? "Validando..." : "Validar",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-8 pt-8 items-center sm:items-start",
                children: [
                  n === "valido" &&
                    o.jsxs("div", {
                      className:
                        "bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center w-full sm:w-80 h-auto text-center transform animate-in fade-in zoom-in duration-300",
                      children: [
                        o.jsx("div", {
                          className:
                            "w-16 h-16 md:w-20 md:h-20 bg-[#28A745] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 font-bold shadow-md",
                          children: o.jsx("svg", {
                            className: "w-10 h-10",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: o.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 3,
                              d: "M5 13l4 4L19 7",
                            }),
                          }),
                        }),
                        o.jsxs("h3", {
                          className: "text-xl font-bold text-[#00707D]",
                          children: ["Certificado", o.jsx("br", {}), "Válido"],
                        }),
                        s &&
                          o.jsxs("div", {
                            className: "text-xs text-gray-500 mt-2 space-y-1",
                            children: [
                              o.jsxs("p", {
                                children: [
                                  "Evento: ",
                                  s.evento_nome || `#${s.evento_id}`,
                                ],
                              }),
                              s.cargaHoraria &&
                                o.jsxs("p", {
                                  children: [
                                    "Carga Horária: ",
                                    s.cargaHoraria,
                                    "h",
                                  ],
                                }),
                              o.jsxs("p", { children: ["Status: ", s.status] }),
                            ],
                          }),
                      ],
                    }),
                  n === "invalido" &&
                    o.jsxs("div", {
                      className:
                        "bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center w-full sm:w-64 h-64 text-center transform animate-in fade-in zoom-in duration-300",
                      children: [
                        o.jsx("div", {
                          className:
                            "w-16 h-16 md:w-20 md:h-20 bg-[#DC3545] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 font-bold shadow-md",
                          children: o.jsx("svg", {
                            className: "w-10 h-10",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: o.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 3,
                              d: "M6 18L18 6M6 6l12 12",
                            }),
                          }),
                        }),
                        o.jsxs("h3", {
                          className: "text-xl font-bold text-[#00707D]",
                          children: [
                            "Certificado",
                            o.jsx("br", {}),
                            "Inválido",
                          ],
                        }),
                        o.jsx("p", {
                          className: "text-xs text-gray-500 mt-2",
                          children: "Código não encontrado",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ig = () => {
    const e = Ve(),
      { user: t, logout: n, updateUser: r } = Ze(),
      [s, l] = N.useState({ nome: "", email: "" }),
      [i, a] = N.useState(!1),
      [u, c] = N.useState("");
    N.useEffect(() => {
      const m = async () => {
        try {
          const g = await M.get(`/usuarios/${t.id}`);
          l({ nome: g.data.nome || "", email: g.data.email || "" });
        } catch {}
      };
      t != null && t.id && m();
    }, [t]);
    const d = () => {
        (n(), e("/"));
      },
      f = async (m) => {
        (m.preventDefault(), a(!0), c(""));
        try {
          const g = await M.put(`/usuarios/${t.id}`, s);
          (r({ nome: g.data.nome, email: g.data.email }),
            c("Configurações salvas com sucesso!"));
        } catch {
          c("Erro ao salvar configurações.");
        } finally {
          a(!1);
        }
      };
    return o.jsx(_l, {
      activePage: "configuracoes",
      children: o.jsxs("div", {
        className: "max-w-4xl mx-auto space-y-10",
        children: [
          o.jsx("h2", {
            className: "text-3xl font-semibold text-[#00707D]",
            children: "Configurações e Perfil",
          }),
          o.jsxs("div", {
            className:
              "bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10",
            children: [
              o.jsxs("div", {
                className: "flex flex-col items-center space-y-6 md:w-1/3",
                children: [
                  o.jsx("div", {
                    className: "relative group",
                    children: o.jsx("div", {
                      className:
                        "w-40 h-40 rounded-full border-4 border-blue-100 shadow-md bg-blue-50 flex items-center justify-center text-blue-600 text-4xl font-bold",
                      children: s.nome ? s.nome.charAt(0).toUpperCase() : "?",
                    }),
                  }),
                  o.jsxs("div", {
                    className: "text-center",
                    children: [
                      o.jsx("h3", {
                        className: "text-xl font-bold text-gray-800",
                        children: s.nome || "Usuário",
                      }),
                      o.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: s.email,
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    onClick: d,
                    className:
                      "w-full bg-[#F94D4D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2",
                    children: [
                      o.jsx("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: o.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                        }),
                      }),
                      "Sair da Conta",
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "md:w-2/3",
                children: [
                  u &&
                    o.jsx("div", {
                      className: `mb-4 p-3 rounded-lg text-sm ${u.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`,
                      children: u,
                    }),
                  o.jsxs("form", {
                    className: "space-y-6",
                    onSubmit: f,
                    children: [
                      o.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1.5",
                                children: "Nome",
                              }),
                              o.jsx("input", {
                                type: "text",
                                value: s.nome,
                                onChange: (m) =>
                                  l({ ...s, nome: m.target.value }),
                                className:
                                  "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1.5",
                                children: "E-mail",
                              }),
                              o.jsx("input", {
                                type: "email",
                                value: s.email,
                                onChange: (m) =>
                                  l({ ...s, email: m.target.value }),
                                className:
                                  "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1.5",
                            children: "Nova Senha",
                          }),
                          o.jsx("input", {
                            type: "password",
                            placeholder: "Deixe em branco para manter a atual",
                            onChange: (m) =>
                              l({ ...s, senha: m.target.value || void 0 }),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "pt-4",
                        children: o.jsx("button", {
                          type: "submit",
                          disabled: i,
                          className:
                            "bg-[#3FB65F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md text-sm disabled:opacity-50",
                          children: i ? "Salvando..." : "Salvar Alterações",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Mg = () =>
    o.jsx("img", {
      src: gn,
      alt: "Logo",
      className: "w-8 h-8 mr-3 brightness-0 invert",
    }),
  Ug = () =>
    o.jsx("svg", {
      className: "w-5 h-5 mr-3",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      }),
    }),
  Bg = () =>
    o.jsx("svg", {
      className: "w-5 h-5 mr-3",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 4v16m8-8H4",
      }),
    }),
  Zu = () =>
    o.jsx("svg", {
      className: "w-4 h-4 ml-1",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 9l-7 7-7-7",
      }),
    }),
  $g = () =>
    o.jsx("svg", {
      className: "w-5 h-5 mr-3",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: o.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      }),
    }),
  Hg = ({ children: e, activePage: t, activeDropdownPage: n }) => {
    const [r, s] = N.useState(!!n),
      { user: l, logout: i } = Ze(),
      a = Ve(),
      u = () => {
        (i(), a("/"));
      },
      c = [
        { id: "admin", label: "Painel Admin", icon: $g, link: "/admin" },
        {
          id: "create",
          label: "Criar Eventos",
          icon: Bg,
          link: "/organizador/criar-evento",
        },
        {
          id: "events",
          label: "Eventos",
          icon: Ug,
          dropdown: [
            {
              id: "active",
              label: "Eventos Ocorrendo",
              link: "/organizador/eventos",
            },
            {
              id: "completed",
              label: "Eventos Concluídos",
              link: "/organizador/eventos-concluidos",
            },
          ],
        },
      ],
      d = (m) =>
        t === m
          ? "flex items-center px-6 py-3 bg-white/10 text-white font-medium"
          : "flex items-center px-6 py-3 hover:bg-white/10 text-white/90",
      f = (m) =>
        n === m
          ? "block px-12 py-2 text-sm bg-white/20 text-white font-medium"
          : "block px-12 py-2 text-sm text-white/90 hover:bg-white/10";
    return o.jsxs("div", {
      className:
        "min-h-screen bg-slate-100 flex flex-col font-sans text-gray-800",
      children: [
        o.jsxs("header", {
          className:
            "bg-[#2C3E50] text-white p-4 flex items-center justify-between shadow-md px-4 md:px-6 z-20",
          children: [
            o.jsxs(G, {
              to: "/",
              className: "flex items-center text-white shrink-0",
              children: [
                o.jsx(Mg, {}),
                o.jsx("h1", {
                  className: "text-xl font-medium hidden sm:block",
                  children: "Plataforma Acadêmica de Eventos (PAE)",
                }),
                o.jsx("h1", {
                  className: "text-lg font-medium sm:hidden",
                  children: "PAE",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center space-x-2 text-white/90",
              children: [
                o.jsx(G, {
                  to: "/organizador/configuracoes",
                  className:
                    "w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold border-2 border-white/50 overflow-hidden hover:opacity-80 transition-opacity text-sm",
                  children:
                    l != null && l.nome ? l.nome.charAt(0).toUpperCase() : "A",
                }),
                o.jsxs(G, {
                  to: "/organizador/configuracoes",
                  className:
                    "flex items-center text-xs md:text-sm font-medium hover:text-white transition-colors",
                  children: [
                    o.jsx("span", {
                      className: "hidden xs:inline",
                      children:
                        (l == null ? void 0 : l.nome) || "Administrador",
                    }),
                    " ",
                    o.jsx(Zu, {}),
                  ],
                }),
                o.jsx("button", {
                  onClick: u,
                  className:
                    "ml-2 text-xs text-white/70 hover:text-white transition-colors",
                  title: "Sair",
                  children: o.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: o.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "flex flex-grow overflow-hidden flex-col md:flex-row",
          children: [
            o.jsx("aside", {
              className:
                "w-full md:w-64 bg-[#2C3E50] text-white flex flex-col md:pt-10 shadow-inner z-10 overflow-x-auto md:overflow-y-auto",
              children: o.jsx("nav", {
                className:
                  "flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 p-2 md:p-0",
                children: c.map((m) =>
                  m.dropdown
                    ? o.jsxs(
                        "div",
                        {
                          className:
                            "relative group flex-shrink-0 md:flex-shrink-1",
                          children: [
                            o.jsxs("button", {
                              onClick: () => s(!r),
                              className:
                                "flex w-full items-center justify-between px-4 md:px-6 py-3 hover:bg-white/10 text-white/90",
                              children: [
                                o.jsxs("div", {
                                  className:
                                    "flex items-center whitespace-nowrap",
                                  children: [
                                    o.jsx(m.icon, {}),
                                    " ",
                                    o.jsx("span", {
                                      className: "text-xs md:text-sm",
                                      children: m.label,
                                    }),
                                  ],
                                }),
                                o.jsx(Zu, {}),
                              ],
                            }),
                            r &&
                              o.jsx("div", {
                                className:
                                  "bg-[#1a252f] md:static absolute left-0 top-full w-full z-30 shadow-lg md:shadow-none",
                                children: m.dropdown.map((g) =>
                                  o.jsx(
                                    G,
                                    {
                                      to: g.link,
                                      className: f(g.id),
                                      children: o.jsx("span", {
                                        className: "text-xs md:text-sm",
                                        children: g.label,
                                      }),
                                    },
                                    g.id,
                                  ),
                                ),
                              }),
                          ],
                        },
                        m.id,
                      )
                    : o.jsxs(
                        G,
                        {
                          to: m.link,
                          className: `${d(m.id)} whitespace-nowrap md:whitespace-normal flex-shrink-0`,
                          children: [
                            o.jsx(m.icon, {}),
                            " ",
                            o.jsx("span", {
                              className: "text-xs md:text-sm",
                              children: m.label,
                            }),
                          ],
                        },
                        m.id,
                      ),
                ),
              }),
            }),
            o.jsx("main", {
              className: "flex-grow bg-slate-50 p-4 md:p-10 overflow-y-auto",
              children: e,
            }),
          ],
        }),
      ],
    });
  },
  Vg = () => {
    const [e, t] = N.useState("usuarios"),
      [n, r] = N.useState([]),
      [s, l] = N.useState([]),
      [i, a] = N.useState([]),
      [u, c] = N.useState(!0),
      [d, f] = N.useState(""),
      [m, g] = N.useState(!1),
      [w, y] = N.useState(""),
      [j, h] = N.useState({ usuario_id: "", nome: "", email: "", senha: "" }),
      p = async () => {
        c(!0);
        try {
          const [C, I, K] = await Promise.all([
            M.get("/usuarios"),
            M.get("/coordenadores"),
            M.get("/administradores"),
          ]);
          (r(C.data), l(I.data), a(K.data));
        } catch {
          f("Erro ao carregar dados.");
        }
        c(!1);
      };
    N.useEffect(() => {
      p();
    }, []);
    const x = (C) => {
        (y(C),
          h({ usuario_id: "", nome: "", email: "", senha: "" }),
          g(!0),
          f(""));
      },
      S = async () => {
        var C, I;
        try {
          (await M.post("/coordenadores", { usuario_id: Number(j.usuario_id) }),
            f("Coordenador adicionado com sucesso!"),
            g(!1),
            p());
        } catch (K) {
          f(
            ((I = (C = K.response) == null ? void 0 : C.data) == null
              ? void 0
              : I.error) || "Erro ao adicionar coordenador.",
          );
        }
      },
      E = async () => {
        var C, I;
        try {
          (await M.post("/administradores", {
            usuario_id: Number(j.usuario_id),
          }),
            f("Administrador adicionado com sucesso!"),
            g(!1),
            p());
        } catch (K) {
          f(
            ((I = (C = K.response) == null ? void 0 : C.data) == null
              ? void 0
              : I.error) || "Erro ao adicionar administrador.",
          );
        }
      },
      R = async () => {
        var C, I;
        try {
          (await M.post("/usuarios", {
            nome: j.nome,
            email: j.email,
            senha: j.senha,
          }),
            f("Usuário criado com sucesso!"),
            g(!1),
            p());
        } catch (K) {
          f(
            ((I = (C = K.response) == null ? void 0 : C.data) == null
              ? void 0
              : I.error) || "Erro ao criar usuário.",
          );
        }
      },
      L = async (C) => {
        var I, K;
        if (window.confirm("Tem certeza que deseja excluir este usuário?"))
          try {
            (await M.delete(`/usuarios/${C}`),
              f("Usuário excluído com sucesso!"),
              p());
          } catch (ce) {
            f(
              ((K = (I = ce.response) == null ? void 0 : I.data) == null
                ? void 0
                : K.error) || "Erro ao excluir usuário.",
            );
          }
      },
      _ = async (C) => {
        var I, K;
        if (window.confirm("Remover este coordenador?"))
          try {
            (await M.delete(`/coordenadores/${C}`),
              f("Coordenador removido com sucesso!"),
              p());
          } catch (ce) {
            f(
              ((K = (I = ce.response) == null ? void 0 : I.data) == null
                ? void 0
                : K.error) || "Erro ao remover coordenador.",
            );
          }
      },
      $ = async (C) => {
        var I, K;
        if (window.confirm("Remover este administrador?"))
          try {
            (await M.delete(`/administradores/${C}`),
              f("Administrador removido com sucesso!"),
              p());
          } catch (ce) {
            f(
              ((K = (I = ce.response) == null ? void 0 : I.data) == null
                ? void 0
                : K.error) || "Erro ao remover administrador.",
            );
          }
      },
      F = () => {
        if (w === "coordenador") return S();
        if (w === "administrador") return E();
        if (w === "usuario") return R();
      },
      X = (C) => {
        const I = {
            administrador: "bg-red-100 text-red-700",
            coordenador: "bg-blue-100 text-blue-700",
            participante: "bg-green-100 text-green-700",
            sem_perfil: "bg-gray-100 text-gray-500",
          },
          K = {
            administrador: "Administrador",
            coordenador: "Coordenador",
            participante: "Participante",
            sem_perfil: "Sem Perfil",
          };
        return o.jsx("span", {
          className: `px-2 py-0.5 rounded-full text-xs font-medium ${I[C] || I.sem_perfil}`,
          children: K[C] || C,
        });
      },
      H = [
        { id: "usuarios", label: "Usuários" },
        { id: "coordenadores", label: "Coordenadores" },
        { id: "administradores", label: "Administradores" },
      ];
    return o.jsx(Hg, {
      activePage: "admin",
      children: o.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          o.jsx("h2", {
            className: "text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-6",
            children: "Painel de Administração",
          }),
          d &&
            o.jsx("div", {
              className: `mb-4 p-3 rounded-lg text-sm ${d.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`,
              children: d,
            }),
          o.jsx("div", {
            className: "flex gap-2 mb-6 border-b border-gray-200",
            children: H.map((C) =>
              o.jsx(
                "button",
                {
                  onClick: () => {
                    (t(C.id), f(""));
                  },
                  className: `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${e === C.id ? "border-[#2C3E50] text-[#2C3E50]" : "border-transparent text-gray-500 hover:text-gray-700"}`,
                  children: C.label,
                },
                C.id,
              ),
            ),
          }),
          u
            ? o.jsx("p", {
                className: "text-gray-500",
                children: "Carregando...",
              })
            : o.jsxs(o.Fragment, {
                children: [
                  e === "usuarios" &&
                    o.jsxs("div", {
                      children: [
                        o.jsxs("div", {
                          className: "flex justify-between items-center mb-4",
                          children: [
                            o.jsx("h3", {
                              className: "text-lg font-semibold text-gray-700",
                              children: "Todos os Usuários",
                            }),
                            o.jsx("button", {
                              onClick: () => x("usuario"),
                              className:
                                "bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a252f] transition-colors",
                              children: "+ Novo Usuário",
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className:
                            "bg-white rounded-xl shadow-sm overflow-hidden",
                          children: o.jsxs("table", {
                            className: "w-full text-sm",
                            children: [
                              o.jsx("thead", {
                                className: "bg-gray-50 text-gray-600",
                                children: o.jsxs("tr", {
                                  children: [
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "ID",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Nome",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Email",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Tipo",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Ações",
                                    }),
                                  ],
                                }),
                              }),
                              o.jsxs("tbody", {
                                className: "divide-y divide-gray-100",
                                children: [
                                  n.map((C) =>
                                    o.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-gray-500",
                                            children: C.id,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3 font-medium",
                                            children: C.nome,
                                          }),
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-gray-600",
                                            children: C.email,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3",
                                            children: X(C.tipo),
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3",
                                            children: o.jsx("button", {
                                              onClick: () => L(C.id),
                                              className:
                                                "text-red-500 hover:text-red-700 text-xs font-medium",
                                              children: "Excluir",
                                            }),
                                          }),
                                        ],
                                      },
                                      C.id,
                                    ),
                                  ),
                                  n.length === 0 &&
                                    o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 5,
                                        className:
                                          "px-4 py-8 text-center text-gray-400",
                                        children: "Nenhum usuário encontrado.",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  e === "coordenadores" &&
                    o.jsxs("div", {
                      children: [
                        o.jsxs("div", {
                          className: "flex justify-between items-center mb-4",
                          children: [
                            o.jsx("h3", {
                              className: "text-lg font-semibold text-gray-700",
                              children: "Coordenadores",
                            }),
                            o.jsx("button", {
                              onClick: () => x("coordenador"),
                              className:
                                "bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a252f] transition-colors",
                              children: "+ Adicionar Coordenador",
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className:
                            "bg-white rounded-xl shadow-sm overflow-hidden",
                          children: o.jsxs("table", {
                            className: "w-full text-sm",
                            children: [
                              o.jsx("thead", {
                                className: "bg-gray-50 text-gray-600",
                                children: o.jsxs("tr", {
                                  children: [
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Usuário ID",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Nome",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Email",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Ações",
                                    }),
                                  ],
                                }),
                              }),
                              o.jsxs("tbody", {
                                className: "divide-y divide-gray-100",
                                children: [
                                  s.map((C) =>
                                    o.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-gray-500",
                                            children: C.usuario_id,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3 font-medium",
                                            children: C.nome,
                                          }),
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-gray-600",
                                            children: C.email,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3",
                                            children: o.jsx("button", {
                                              onClick: () => _(C.usuario_id),
                                              className:
                                                "text-red-500 hover:text-red-700 text-xs font-medium",
                                              children: "Remover",
                                            }),
                                          }),
                                        ],
                                      },
                                      C.usuario_id,
                                    ),
                                  ),
                                  s.length === 0 &&
                                    o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 4,
                                        className:
                                          "px-4 py-8 text-center text-gray-400",
                                        children:
                                          "Nenhum coordenador encontrado.",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  e === "administradores" &&
                    o.jsxs("div", {
                      children: [
                        o.jsxs("div", {
                          className: "flex justify-between items-center mb-4",
                          children: [
                            o.jsx("h3", {
                              className: "text-lg font-semibold text-gray-700",
                              children: "Administradores",
                            }),
                            o.jsx("button", {
                              onClick: () => x("administrador"),
                              className:
                                "bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a252f] transition-colors",
                              children: "+ Adicionar Administrador",
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className:
                            "bg-white rounded-xl shadow-sm overflow-hidden",
                          children: o.jsxs("table", {
                            className: "w-full text-sm",
                            children: [
                              o.jsx("thead", {
                                className: "bg-gray-50 text-gray-600",
                                children: o.jsxs("tr", {
                                  children: [
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Usuário ID",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Nome",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Email",
                                    }),
                                    o.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left font-medium",
                                      children: "Ações",
                                    }),
                                  ],
                                }),
                              }),
                              o.jsxs("tbody", {
                                className: "divide-y divide-gray-100",
                                children: [
                                  i.map((C) =>
                                    o.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-gray-500",
                                            children: C.usuario_id,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3 font-medium",
                                            children: C.nome,
                                          }),
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-gray-600",
                                            children: C.email,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3",
                                            children: o.jsx("button", {
                                              onClick: () => $(C.usuario_id),
                                              className:
                                                "text-red-500 hover:text-red-700 text-xs font-medium",
                                              children: "Remover",
                                            }),
                                          }),
                                        ],
                                      },
                                      C.usuario_id,
                                    ),
                                  ),
                                  i.length === 0 &&
                                    o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 4,
                                        className:
                                          "px-4 py-8 text-center text-gray-400",
                                        children:
                                          "Nenhum administrador encontrado.",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
          m &&
            o.jsx("div", {
              className:
                "fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4",
              children: o.jsxs("div", {
                className: "bg-white rounded-xl shadow-xl max-w-md w-full p-6",
                children: [
                  o.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800 mb-4",
                    children:
                      w === "usuario"
                        ? "Novo Usuário"
                        : w === "coordenador"
                          ? "Adicionar Coordenador"
                          : "Adicionar Administrador",
                  }),
                  w === "usuario"
                    ? o.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Nome",
                              }),
                              o.jsx("input", {
                                type: "text",
                                value: j.nome,
                                onChange: (C) =>
                                  h((I) => ({ ...I, nome: C.target.value })),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email",
                              }),
                              o.jsx("input", {
                                type: "email",
                                value: j.email,
                                onChange: (C) =>
                                  h((I) => ({ ...I, email: C.target.value })),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-1",
                                children: "Senha",
                              }),
                              o.jsx("input", {
                                type: "password",
                                value: j.senha,
                                onChange: (C) =>
                                  h((I) => ({ ...I, senha: C.target.value })),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]",
                              }),
                            ],
                          }),
                        ],
                      })
                    : o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "ID do Usuário",
                          }),
                          o.jsxs("select", {
                            value: j.usuario_id,
                            onChange: (C) =>
                              h((I) => ({ ...I, usuario_id: C.target.value })),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]",
                            children: [
                              o.jsx("option", {
                                value: "",
                                children: "Selecione um usuário",
                              }),
                              n
                                .filter((C) =>
                                  w === "coordenador"
                                    ? C.tipo !== "coordenador" &&
                                      C.tipo !== "administrador"
                                    : w === "administrador"
                                      ? C.tipo !== "administrador"
                                      : !0,
                                )
                                .map((C) =>
                                  o.jsxs(
                                    "option",
                                    {
                                      value: C.id,
                                      children: [
                                        C.id,
                                        " — ",
                                        C.nome,
                                        " (",
                                        C.email,
                                        ") [",
                                        C.tipo,
                                        "]",
                                      ],
                                    },
                                    C.id,
                                  ),
                                ),
                            ],
                          }),
                        ],
                      }),
                  o.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      o.jsx("button", {
                        onClick: F,
                        className:
                          "flex-1 bg-[#2C3E50] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#1a252f] transition-colors",
                        children: w === "usuario" ? "Criar" : "Adicionar",
                      }),
                      o.jsx("button", {
                        onClick: () => g(!1),
                        className:
                          "flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors",
                        children: "Cancelar",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  Qe = ({ children: e, allowedRoles: t }) => {
    const { isAuthenticated: n, userRole: r, loading: s } = Ze();
    return s
      ? o.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-slate-50",
          children: o.jsx("div", {
            className: "text-gray-500 text-lg",
            children: "Carregando...",
          }),
        })
      : n
        ? t && !t.includes(r)
          ? r === "participante"
            ? o.jsx(Nn, { to: "/participante/eventos", replace: !0 })
            : r === "coordenador"
              ? o.jsx(Nn, { to: "/organizador/eventos", replace: !0 })
              : r === "administrador"
                ? o.jsx(Nn, { to: "/organizador/eventos", replace: !0 })
                : o.jsx(Nn, { to: "/login", replace: !0 })
          : e
        : o.jsx(Nn, { to: "/login", replace: !0 });
  };
function Wg() {
  return o.jsx(vg, {
    children: o.jsx(N0, {
      children: o.jsxs(h0, {
        children: [
          o.jsx(pe, { path: "/", element: o.jsx(wg, {}) }),
          o.jsx(pe, { path: "/login", element: o.jsx(jg, {}) }),
          o.jsx(pe, { path: "/register", element: o.jsx(Ng, {}) }),
          o.jsx(pe, {
            path: "/organizador/eventos",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(Cg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/organizador/eventos-concluidos",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(_g, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/organizador/criar-evento",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(Pg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/organizador/evento/:id",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(Lg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/organizador/evento/:id/adicionar-atividade",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(Rg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/organizador/evento/:id/participantes",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(Tg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/organizador/configuracoes",
            element: o.jsx(Qe, {
              allowedRoles: ["coordenador", "administrador"],
              children: o.jsx(Og, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/admin",
            element: o.jsx(Qe, {
              allowedRoles: ["administrador"],
              children: o.jsx(Vg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/participante/eventos",
            element: o.jsx(Qe, {
              allowedRoles: ["participante"],
              children: o.jsx(Dg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/participante/meus-eventos",
            element: o.jsx(Qe, {
              allowedRoles: ["participante"],
              children: o.jsx(Ag, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/participante/certificados",
            element: o.jsx(Qe, {
              allowedRoles: ["participante"],
              children: o.jsx(zg, {}),
            }),
          }),
          o.jsx(pe, {
            path: "/participante/validar-certificado",
            element: o.jsx(Fg, {}),
          }),
          o.jsx(pe, {
            path: "/participante/configuracoes",
            element: o.jsx(Qe, {
              allowedRoles: ["participante"],
              children: o.jsx(Ig, {}),
            }),
          }),
          o.jsx(pe, {
            path: "*",
            element: o.jsx(Nn, { to: "/", replace: !0 }),
          }),
        ],
      }),
    }),
  });
}
oo.createRoot(document.getElementById("root")).render(
  o.jsx(fi.StrictMode, { children: o.jsx(Wg, {}) }),
);
