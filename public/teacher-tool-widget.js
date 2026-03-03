function ku(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Qc = { exports: {} }, bt = {};
var Jm;
function Gb() {
  if (Jm) return bt;
  Jm = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
  function x(z) {
    return z === null || typeof z != "object" ? null : (z = S && z[S] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, L = {};
  function _(z, Y, k) {
    this.props = z, this.context = Y, this.refs = L, this.updater = k || A;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(z, Y) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, Y, "setState");
  }, _.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = _.prototype;
  function H(z, Y, k) {
    this.props = z, this.context = Y, this.refs = L, this.updater = k || A;
  }
  var lt = H.prototype = new Z();
  lt.constructor = H, R(lt, _.prototype), lt.isPureReactComponent = !0;
  var ot = Array.isArray;
  function B() {
  }
  var P = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function mt(z, Y, k) {
    var $ = k.ref;
    return {
      $$typeof: n,
      type: z,
      key: Y,
      ref: $ !== void 0 ? $ : null,
      props: k
    };
  }
  function U(z, Y) {
    return mt(z.type, Y, z.props);
  }
  function et(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n;
  }
  function tt(z) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(k) {
      return Y[k];
    });
  }
  var Et = /\/+/g;
  function it(z, Y) {
    return typeof z == "object" && z !== null && z.key != null ? tt("" + z.key) : Y.toString(36);
  }
  function I(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(B, B) : (z.status = "pending", z.then(
          function(Y) {
            z.status === "pending" && (z.status = "fulfilled", z.value = Y);
          },
          function(Y) {
            z.status === "pending" && (z.status = "rejected", z.reason = Y);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function M(z, Y, k, $, ft) {
    var st = typeof z;
    (st === "undefined" || st === "boolean") && (z = null);
    var ht = !1;
    if (z === null) ht = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case n:
            case r:
              ht = !0;
              break;
            case b:
              return ht = z._init, M(
                ht(z._payload),
                Y,
                k,
                $,
                ft
              );
          }
      }
    if (ht)
      return ft = ft(z), ht = $ === "" ? "." + it(z, 0) : $, ot(ft) ? (k = "", ht != null && (k = ht.replace(Et, "$&/") + "/"), M(ft, Y, k, "", function(he) {
        return he;
      })) : ft != null && (et(ft) && (ft = U(
        ft,
        k + (ft.key == null || z && z.key === ft.key ? "" : ("" + ft.key).replace(
          Et,
          "$&/"
        ) + "/") + ht
      )), Y.push(ft)), 1;
    ht = 0;
    var Gt = $ === "" ? "." : $ + ":";
    if (ot(z))
      for (var Rt = 0; Rt < z.length; Rt++)
        $ = z[Rt], st = Gt + it($, Rt), ht += M(
          $,
          Y,
          k,
          st,
          ft
        );
    else if (Rt = x(z), typeof Rt == "function")
      for (z = Rt.call(z), Rt = 0; !($ = z.next()).done; )
        $ = $.value, st = Gt + it($, Rt++), ht += M(
          $,
          Y,
          k,
          st,
          ft
        );
    else if (st === "object") {
      if (typeof z.then == "function")
        return M(
          I(z),
          Y,
          k,
          $,
          ft
        );
      throw Y = String(z), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ht;
  }
  function K(z, Y, k) {
    if (z == null) return z;
    var $ = [], ft = 0;
    return M(z, $, "", "", function(st) {
      return Y.call(k, st, ft++);
    }), $;
  }
  function Q(z) {
    if (z._status === -1) {
      var Y = z._result;
      Y = Y(), Y.then(
        function(k) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = k);
        },
        function(k) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = k);
        }
      ), z._status === -1 && (z._status = 0, z._result = Y);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var xt = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, E = {
    map: K,
    forEach: function(z, Y, k) {
      K(
        z,
        function() {
          Y.apply(this, arguments);
        },
        k
      );
    },
    count: function(z) {
      var Y = 0;
      return K(z, function() {
        Y++;
      }), Y;
    },
    toArray: function(z) {
      return K(z, function(Y) {
        return Y;
      }) || [];
    },
    only: function(z) {
      if (!et(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return bt.Activity = y, bt.Children = E, bt.Component = _, bt.Fragment = a, bt.Profiler = s, bt.PureComponent = H, bt.StrictMode = u, bt.Suspense = p, bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, bt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return P.H.useMemoCache(z);
    }
  }, bt.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, bt.cacheSignal = function() {
    return null;
  }, bt.cloneElement = function(z, Y, k) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var $ = R({}, z.props), ft = z.key;
    if (Y != null)
      for (st in Y.key !== void 0 && (ft = "" + Y.key), Y)
        !J.call(Y, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && Y.ref === void 0 || ($[st] = Y[st]);
    var st = arguments.length - 2;
    if (st === 1) $.children = k;
    else if (1 < st) {
      for (var ht = Array(st), Gt = 0; Gt < st; Gt++)
        ht[Gt] = arguments[Gt + 2];
      $.children = ht;
    }
    return mt(z.type, ft, $);
  }, bt.createContext = function(z) {
    return z = {
      $$typeof: f,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: h,
      _context: z
    }, z;
  }, bt.createElement = function(z, Y, k) {
    var $, ft = {}, st = null;
    if (Y != null)
      for ($ in Y.key !== void 0 && (st = "" + Y.key), Y)
        J.call(Y, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ft[$] = Y[$]);
    var ht = arguments.length - 2;
    if (ht === 1) ft.children = k;
    else if (1 < ht) {
      for (var Gt = Array(ht), Rt = 0; Rt < ht; Rt++)
        Gt[Rt] = arguments[Rt + 2];
      ft.children = Gt;
    }
    if (z && z.defaultProps)
      for ($ in ht = z.defaultProps, ht)
        ft[$] === void 0 && (ft[$] = ht[$]);
    return mt(z, st, ft);
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(z) {
    return { $$typeof: m, render: z };
  }, bt.isValidElement = et, bt.lazy = function(z) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: z },
      _init: Q
    };
  }, bt.memo = function(z, Y) {
    return {
      $$typeof: d,
      type: z,
      compare: Y === void 0 ? null : Y
    };
  }, bt.startTransition = function(z) {
    var Y = P.T, k = {};
    P.T = k;
    try {
      var $ = z(), ft = P.S;
      ft !== null && ft(k, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(B, xt);
    } catch (st) {
      xt(st);
    } finally {
      Y !== null && k.types !== null && (Y.types = k.types), P.T = Y;
    }
  }, bt.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, bt.use = function(z) {
    return P.H.use(z);
  }, bt.useActionState = function(z, Y, k) {
    return P.H.useActionState(z, Y, k);
  }, bt.useCallback = function(z, Y) {
    return P.H.useCallback(z, Y);
  }, bt.useContext = function(z) {
    return P.H.useContext(z);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(z, Y) {
    return P.H.useDeferredValue(z, Y);
  }, bt.useEffect = function(z, Y) {
    return P.H.useEffect(z, Y);
  }, bt.useEffectEvent = function(z) {
    return P.H.useEffectEvent(z);
  }, bt.useId = function() {
    return P.H.useId();
  }, bt.useImperativeHandle = function(z, Y, k) {
    return P.H.useImperativeHandle(z, Y, k);
  }, bt.useInsertionEffect = function(z, Y) {
    return P.H.useInsertionEffect(z, Y);
  }, bt.useLayoutEffect = function(z, Y) {
    return P.H.useLayoutEffect(z, Y);
  }, bt.useMemo = function(z, Y) {
    return P.H.useMemo(z, Y);
  }, bt.useOptimistic = function(z, Y) {
    return P.H.useOptimistic(z, Y);
  }, bt.useReducer = function(z, Y, k) {
    return P.H.useReducer(z, Y, k);
  }, bt.useRef = function(z) {
    return P.H.useRef(z);
  }, bt.useState = function(z) {
    return P.H.useState(z);
  }, bt.useSyncExternalStore = function(z, Y, k) {
    return P.H.useSyncExternalStore(
      z,
      Y,
      k
    );
  }, bt.useTransition = function() {
    return P.H.useTransition();
  }, bt.version = "19.2.3", bt;
}
var Im;
function Ms() {
  return Im || (Im = 1, Qc.exports = Gb()), Qc.exports;
}
var $t = Ms();
const ig = /* @__PURE__ */ ku($t);
var Zc = { exports: {} }, za = {}, Kc = { exports: {} }, Fc = {};
var $m;
function Xb() {
  return $m || ($m = 1, (function(n) {
    function r(M, K) {
      var Q = M.length;
      M.push(K);
      t: for (; 0 < Q; ) {
        var xt = Q - 1 >>> 1, E = M[xt];
        if (0 < s(E, K))
          M[xt] = K, M[Q] = E, Q = xt;
        else break t;
      }
    }
    function a(M) {
      return M.length === 0 ? null : M[0];
    }
    function u(M) {
      if (M.length === 0) return null;
      var K = M[0], Q = M.pop();
      if (Q !== K) {
        M[0] = Q;
        t: for (var xt = 0, E = M.length, z = E >>> 1; xt < z; ) {
          var Y = 2 * (xt + 1) - 1, k = M[Y], $ = Y + 1, ft = M[$];
          if (0 > s(k, Q))
            $ < E && 0 > s(ft, k) ? (M[xt] = ft, M[$] = Q, xt = $) : (M[xt] = k, M[Y] = Q, xt = Y);
          else if ($ < E && 0 > s(ft, Q))
            M[xt] = ft, M[$] = Q, xt = $;
          else break t;
        }
      }
      return K;
    }
    function s(M, K) {
      var Q = M.sortIndex - K.sortIndex;
      return Q !== 0 ? Q : M.id - K.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      n.unstable_now = function() {
        return h.now();
      };
    } else {
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], d = [], b = 1, y = null, S = 3, x = !1, A = !1, R = !1, L = !1, _ = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function lt(M) {
      for (var K = a(d); K !== null; ) {
        if (K.callback === null) u(d);
        else if (K.startTime <= M)
          u(d), K.sortIndex = K.expirationTime, r(p, K);
        else break;
        K = a(d);
      }
    }
    function ot(M) {
      if (R = !1, lt(M), !A)
        if (a(p) !== null)
          A = !0, B || (B = !0, tt());
        else {
          var K = a(d);
          K !== null && I(ot, K.startTime - M);
        }
    }
    var B = !1, P = -1, J = 5, mt = -1;
    function U() {
      return L ? !0 : !(n.unstable_now() - mt < J);
    }
    function et() {
      if (L = !1, B) {
        var M = n.unstable_now();
        mt = M;
        var K = !0;
        try {
          t: {
            A = !1, R && (R = !1, Z(P), P = -1), x = !0;
            var Q = S;
            try {
              e: {
                for (lt(M), y = a(p); y !== null && !(y.expirationTime > M && U()); ) {
                  var xt = y.callback;
                  if (typeof xt == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var E = xt(
                      y.expirationTime <= M
                    );
                    if (M = n.unstable_now(), typeof E == "function") {
                      y.callback = E, lt(M), K = !0;
                      break e;
                    }
                    y === a(p) && u(p), lt(M);
                  } else u(p);
                  y = a(p);
                }
                if (y !== null) K = !0;
                else {
                  var z = a(d);
                  z !== null && I(
                    ot,
                    z.startTime - M
                  ), K = !1;
                }
              }
              break t;
            } finally {
              y = null, S = Q, x = !1;
            }
            K = void 0;
          }
        } finally {
          K ? tt() : B = !1;
        }
      }
    }
    var tt;
    if (typeof H == "function")
      tt = function() {
        H(et);
      };
    else if (typeof MessageChannel < "u") {
      var Et = new MessageChannel(), it = Et.port2;
      Et.port1.onmessage = et, tt = function() {
        it.postMessage(null);
      };
    } else
      tt = function() {
        _(et, 0);
      };
    function I(M, K) {
      P = _(function() {
        M(n.unstable_now());
      }, K);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, n.unstable_next = function(M) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = S;
      }
      var Q = S;
      S = K;
      try {
        return M();
      } finally {
        S = Q;
      }
    }, n.unstable_requestPaint = function() {
      L = !0;
    }, n.unstable_runWithPriority = function(M, K) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Q = S;
      S = M;
      try {
        return K();
      } finally {
        S = Q;
      }
    }, n.unstable_scheduleCallback = function(M, K, Q) {
      var xt = n.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? xt + Q : xt) : Q = xt, M) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = Q + E, M = {
        id: b++,
        callback: K,
        priorityLevel: M,
        startTime: Q,
        expirationTime: E,
        sortIndex: -1
      }, Q > xt ? (M.sortIndex = Q, r(d, M), a(p) === null && M === a(d) && (R ? (Z(P), P = -1) : R = !0, I(ot, Q - xt))) : (M.sortIndex = E, r(p, M), A || x || (A = !0, B || (B = !0, tt()))), M;
    }, n.unstable_shouldYield = U, n.unstable_wrapCallback = function(M) {
      var K = S;
      return function() {
        var Q = S;
        S = K;
        try {
          return M.apply(this, arguments);
        } finally {
          S = Q;
        }
      };
    };
  })(Fc)), Fc;
}
var Wm;
function Qb() {
  return Wm || (Wm = 1, Kc.exports = Xb()), Kc.exports;
}
var Jc = { exports: {} }, be = {};
var Pm;
function Zb() {
  if (Pm) return be;
  Pm = 1;
  var n = Ms();
  function r(p) {
    var d = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        d += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var u = {
    d: {
      f: a,
      r: function() {
        throw Error(r(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function h(p, d, b) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: p,
      containerInfo: d,
      implementation: b
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, d) {
    if (p === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, be.createPortal = function(p, d) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(r(299));
    return h(p, d, null, b);
  }, be.flushSync = function(p) {
    var d = f.T, b = u.p;
    try {
      if (f.T = null, u.p = 2, p) return p();
    } finally {
      f.T = d, u.p = b, u.d.f();
    }
  }, be.preconnect = function(p, d) {
    typeof p == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, u.d.C(p, d));
  }, be.prefetchDNS = function(p) {
    typeof p == "string" && u.d.D(p);
  }, be.preinit = function(p, d) {
    if (typeof p == "string" && d && typeof d.as == "string") {
      var b = d.as, y = m(b, d.crossOrigin), S = typeof d.integrity == "string" ? d.integrity : void 0, x = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      b === "style" ? u.d.S(
        p,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: y,
          integrity: S,
          fetchPriority: x
        }
      ) : b === "script" && u.d.X(p, {
        crossOrigin: y,
        integrity: S,
        fetchPriority: x,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, be.preinitModule = function(p, d) {
    if (typeof p == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var b = m(
            d.as,
            d.crossOrigin
          );
          u.d.M(p, {
            crossOrigin: b,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0
          });
        }
      } else d == null && u.d.M(p);
  }, be.preload = function(p, d) {
    if (typeof p == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var b = d.as, y = m(b, d.crossOrigin);
      u.d.L(p, b, {
        crossOrigin: y,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, be.preloadModule = function(p, d) {
    if (typeof p == "string")
      if (d) {
        var b = m(d.as, d.crossOrigin);
        u.d.m(p, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: b,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else u.d.m(p);
  }, be.requestFormReset = function(p) {
    u.d.r(p);
  }, be.unstable_batchedUpdates = function(p, d) {
    return p(d);
  }, be.useFormState = function(p, d, b) {
    return f.H.useFormState(p, d, b);
  }, be.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, be.version = "19.2.3", be;
}
var tp;
function Kb() {
  if (tp) return Jc.exports;
  tp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Jc.exports = Zb(), Jc.exports;
}
var ep;
function Fb() {
  if (ep) return za;
  ep = 1;
  var n = Qb(), r = Ms(), a = Kb();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (h(t) !== t)
      throw Error(u(188));
  }
  function d(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var l = t, i = e; ; ) {
      var o = l.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (i = o.return, i !== null) {
          l = i;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === l) return p(o), t;
          if (c === i) return p(o), e;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== i.return) l = o, i = c;
      else {
        for (var g = !1, v = o.child; v; ) {
          if (v === l) {
            g = !0, l = o, i = c;
            break;
          }
          if (v === i) {
            g = !0, i = o, l = c;
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = c.child; v; ) {
            if (v === l) {
              g = !0, l = c, i = o;
              break;
            }
            if (v === i) {
              g = !0, i = c, l = o;
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(u(189));
        }
      }
      if (l.alternate !== i) throw Error(u(190));
    }
    if (l.tag !== 3) throw Error(u(188));
    return l.stateNode.current === l ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = b(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), ot = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), mt = /* @__PURE__ */ Symbol.for("react.activity"), U = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), et = Symbol.iterator;
  function tt(t) {
    return t === null || typeof t != "object" ? null : (t = et && t[et] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Et = /* @__PURE__ */ Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Et ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case _:
        return "Profiler";
      case L:
        return "StrictMode";
      case ot:
        return "Suspense";
      case B:
        return "SuspenseList";
      case mt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case A:
          return "Portal";
        case H:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case lt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case P:
          return e = t.displayName || null, e !== null ? e : it(t.type) || "Memo";
        case J:
          e = t._payload, t = t._init;
          try {
            return it(t(e));
          } catch {
          }
      }
    return null;
  }
  var I = Array.isArray, M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xt = [], E = -1;
  function z(t) {
    return { current: t };
  }
  function Y(t) {
    0 > E || (t.current = xt[E], xt[E] = null, E--);
  }
  function k(t, e) {
    E++, xt[E] = t.current, t.current = e;
  }
  var $ = z(null), ft = z(null), st = z(null), ht = z(null);
  function Gt(t, e) {
    switch (k(st, e), k(ft, t), k($, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? bm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = bm(e), t = vm(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Y($), k($, t);
  }
  function Rt() {
    Y($), Y(ft), Y(st);
  }
  function he(t) {
    t.memoizedState !== null && k(ht, t);
    var e = $.current, l = vm(e, t.type);
    e !== l && (k(ft, t), k($, l));
  }
  function Le(t) {
    ft.current === t && (Y($), Y(ft)), ht.current === t && (Y(ht), ka._currentValue = Q);
  }
  var sn, Ga;
  function yn(t) {
    if (sn === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        sn = e && e[1] || "", Ga = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + sn + t + Ga;
  }
  var Ul = !1;
  function jl(t, e) {
    if (!t || Ul) return "";
    Ul = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (j) {
                  var N = j;
                }
                Reflect.construct(t, [], X);
              } else {
                try {
                  X.call();
                } catch (j) {
                  N = j;
                }
                t.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                N = j;
              }
              (X = t()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (j) {
            if (j && N && typeof j.stack == "string")
              return [j.stack, N.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = i.DetermineComponentFrameRoot(), g = c[0], v = c[1];
      if (g && v) {
        var w = g.split(`
`), D = v.split(`
`);
        for (o = i = 0; i < w.length && !w[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < D.length && !D[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === w.length || o === D.length)
          for (i = w.length - 1, o = D.length - 1; 1 <= i && 0 <= o && w[i] !== D[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (w[i] !== D[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || w[i] !== D[o]) {
                  var q = `
` + w[i].replace(" at new ", " at ");
                  return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), q;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      Ul = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? yn(l) : "";
  }
  function Xa(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return yn(t.type);
      case 16:
        return yn("Lazy");
      case 13:
        return t.child !== e && e !== null ? yn("Suspense Fallback") : yn("Suspense");
      case 19:
        return yn("SuspenseList");
      case 0:
      case 15:
        return jl(t.type, !1);
      case 11:
        return jl(t.type.render, !1);
      case 1:
        return jl(t.type, !0);
      case 31:
        return yn("Activity");
      default:
        return "";
    }
  }
  function Qa(t) {
    try {
      var e = "", l = null;
      do
        e += Xa(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Bl = Object.prototype.hasOwnProperty, Hl = n.unstable_scheduleCallback, Ni = n.unstable_cancelCallback, _u = n.unstable_shouldYield, Mu = n.unstable_requestPaint, Se = n.unstable_now, Ou = n.unstable_getCurrentPriorityLevel, V = n.unstable_ImmediatePriority, W = n.unstable_UserBlockingPriority, yt = n.unstable_NormalPriority, At = n.unstable_LowPriority, jt = n.unstable_IdlePriority, Ue = n.log, bn = n.unstable_setDisableYieldValue, ke = null, ue = null;
  function Ae(t) {
    if (typeof Ue == "function" && bn(t), ue && typeof ue.setStrictMode == "function")
      try {
        ue.setStrictMode(ke, t);
      } catch {
      }
  }
  var Xt = Math.clz32 ? Math.clz32 : _y, Hn = Math.log, an = Math.LN2;
  function _y(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Hn(t) / an | 0) | 0;
  }
  var Za = 256, Ka = 262144, Fa = 4194304;
  function dl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ja(t, e, l) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var o = 0, c = t.suspendedLanes, g = t.pingedLanes;
    t = t.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~c, i !== 0 ? o = dl(i) : (g &= v, g !== 0 ? o = dl(g) : l || (l = v & ~t, l !== 0 && (o = dl(l))))) : (v = i & ~c, v !== 0 ? o = dl(v) : g !== 0 ? o = dl(g) : l || (l = i & ~t, l !== 0 && (o = dl(l)))), o === 0 ? 0 : e !== 0 && e !== o && (e & c) === 0 && (c = o & -o, l = e & -e, c >= l || c === 32 && (l & 4194048) !== 0) ? e : o;
  }
  function Li(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function My(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ws() {
    var t = Fa;
    return Fa <<= 1, (Fa & 62914560) === 0 && (Fa = 4194304), t;
  }
  function Du(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ui(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Oy(t, e, l, i, o, c) {
    var g = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var v = t.entanglements, w = t.expirationTimes, D = t.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var q = 31 - Xt(l), X = 1 << q;
      v[q] = 0, w[q] = -1;
      var N = D[q];
      if (N !== null)
        for (D[q] = null, q = 0; q < N.length; q++) {
          var j = N[q];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~X;
    }
    i !== 0 && Ps(t, i, 0), c !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(g & ~e));
  }
  function Ps(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - Xt(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | l & 261930;
  }
  function tf(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var i = 31 - Xt(l), o = 1 << i;
      o & e | t[i] & e && (t[i] |= e), l &= ~o;
    }
  }
  function ef(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Ru(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Ru(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Nu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function nf() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Vm(t.type));
  }
  function lf(t, e) {
    var l = K.p;
    try {
      return K.p = t, e();
    } finally {
      K.p = l;
    }
  }
  var qn = Math.random().toString(36).slice(2), de = "__reactFiber$" + qn, ze = "__reactProps$" + qn, ql = "__reactContainer$" + qn, Lu = "__reactEvents$" + qn, Dy = "__reactListeners$" + qn, Ry = "__reactHandles$" + qn, af = "__reactResources$" + qn, ji = "__reactMarker$" + qn;
  function Uu(t) {
    delete t[de], delete t[ze], delete t[Lu], delete t[Dy], delete t[Ry];
  }
  function Yl(t) {
    var e = t[de];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ql] || l[de]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = zm(t); t !== null; ) {
            if (l = t[de]) return l;
            t = zm(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Vl(t) {
    if (t = t[de] || t[ql]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Bi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Gl(t) {
    var e = t[af];
    return e || (e = t[af] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function se(t) {
    t[ji] = !0;
  }
  var rf = /* @__PURE__ */ new Set(), uf = {};
  function ml(t, e) {
    Xl(t, e), Xl(t + "Capture", e);
  }
  function Xl(t, e) {
    for (uf[t] = e, t = 0; t < e.length; t++)
      rf.add(e[t]);
  }
  var Ny = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), of = {}, cf = {};
  function Ly(t) {
    return Bl.call(cf, t) ? !0 : Bl.call(of, t) ? !1 : Ny.test(t) ? cf[t] = !0 : (of[t] = !0, !1);
  }
  function Ia(t, e, l) {
    if (Ly(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function $a(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function vn(t, e, l, i) {
    if (i === null) t.removeAttribute(l);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + i);
    }
  }
  function Ke(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function sf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Uy(t, e, l) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, c = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(g) {
          l = "" + g, c.call(this, g);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(g) {
          l = "" + g;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function ju(t) {
    if (!t._valueTracker) {
      var e = sf(t) ? "checked" : "value";
      t._valueTracker = Uy(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ff(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), i = "";
    return t && (i = sf(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Wa(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var jy = /[\n"\\]/g;
  function Fe(t) {
    return t.replace(
      jy,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(t, e, l, i, o, c, g, v) {
    t.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"), e != null ? g === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ke(e)) : t.value !== "" + Ke(e) && (t.value = "" + Ke(e)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"), e != null ? Hu(t, g, Ke(e)) : l != null ? Hu(t, g, Ke(l)) : i != null && t.removeAttribute("value"), o == null && c != null && (t.defaultChecked = !!c), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Ke(v) : t.removeAttribute("name");
  }
  function hf(t, e, l, i, o, c, g, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        ju(t);
        return;
      }
      l = l != null ? "" + Ke(l) : "", e = e != null ? "" + Ke(e) : l, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = v ? t.checked : !!i, t.defaultChecked = !!i, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g), ju(t);
  }
  function Hu(t, e, l) {
    e === "number" && Wa(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Ql(t, e, l, i) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < l.length; o++)
        e["$" + l[o]] = !0;
      for (l = 0; l < t.length; l++)
        o = e.hasOwnProperty("$" + t[l].value), t[l].selected !== o && (t[l].selected = o), o && i && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Ke(l), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === l) {
          t[o].selected = !0, i && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function df(t, e, l) {
    if (e != null && (e = "" + Ke(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ke(l) : "";
  }
  function mf(t, e, l, i) {
    if (e == null) {
      if (i != null) {
        if (l != null) throw Error(u(92));
        if (I(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        l = i;
      }
      l == null && (l = ""), e = l;
    }
    l = Ke(e), t.defaultValue = l, i = t.textContent, i === l && i !== "" && i !== null && (t.value = i), ju(t);
  }
  function Zl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var By = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pf(t, e, l) {
    var i = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, l) : typeof l != "number" || l === 0 || By.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function gf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(u(62));
    if (t = t.style, l != null) {
      for (var i in l)
        !l.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
      for (var o in e)
        i = e[o], e.hasOwnProperty(o) && l[o] !== i && pf(t, o, i);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && pf(t, c, e[c]);
  }
  function qu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Hy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), qy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pa(t) {
    return qy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function xn() {
  }
  var Yu = null;
  function Vu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Kl = null, Fl = null;
  function yf(t) {
    var e = Vl(t);
    if (e && (t = e.stateNode)) {
      var l = t[ze] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Bu(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Fe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var i = l[e];
              if (i !== t && i.form === t.form) {
                var o = i[ze] || null;
                if (!o) throw Error(u(90));
                Bu(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              i = l[e], i.form === t.form && ff(i);
          }
          break t;
        case "textarea":
          df(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Ql(t, !!l.multiple, e, !1);
      }
    }
  }
  var Gu = !1;
  function bf(t, e, l) {
    if (Gu) return t(e, l);
    Gu = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Gu = !1, (Kl !== null || Fl !== null) && (qr(), Kl && (e = Kl, t = Fl, Fl = Kl = null, yf(e), t)))
        for (e = 0; e < t.length; e++) yf(t[e]);
    }
  }
  function Hi(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var i = l[ze] || null;
    if (i === null) return null;
    l = i[e];
    t: switch (e) {
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
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        u(231, e, typeof l)
      );
    return l;
  }
  var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (Sn)
    try {
      var qi = {};
      Object.defineProperty(qi, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", qi, qi), window.removeEventListener("test", qi, qi);
    } catch {
      Xu = !1;
    }
  var Yn = null, Qu = null, tr = null;
  function vf() {
    if (tr) return tr;
    var t, e = Qu, l = e.length, i, o = "value" in Yn ? Yn.value : Yn.textContent, c = o.length;
    for (t = 0; t < l && e[t] === o[t]; t++) ;
    var g = l - t;
    for (i = 1; i <= g && e[l - i] === o[c - i]; i++) ;
    return tr = o.slice(t, 1 < i ? 1 - i : void 0);
  }
  function er(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function nr() {
    return !0;
  }
  function xf() {
    return !1;
  }
  function Te(t) {
    function e(l, i, o, c, g) {
      this._reactName = l, this._targetInst = o, this.type = i, this.nativeEvent = c, this.target = g, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (l = t[v], this[v] = l ? l(c) : c[v]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? nr : xf, this.isPropagationStopped = xf, this;
    }
    return y(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = nr);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = nr);
      },
      persist: function() {
      },
      isPersistent: nr
    }), e;
  }
  var pl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, lr = Te(pl), Yi = y({}, pl, { view: 0, detail: 0 }), Yy = Te(Yi), Zu, Ku, Vi, ir = y({}, Yi, {
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
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Vi && (Vi && t.type === "mousemove" ? (Zu = t.screenX - Vi.screenX, Ku = t.screenY - Vi.screenY) : Ku = Zu = 0, Vi = t), Zu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ku;
    }
  }), Sf = Te(ir), Vy = y({}, ir, { dataTransfer: 0 }), Gy = Te(Vy), Xy = y({}, Yi, { relatedTarget: 0 }), Fu = Te(Xy), Qy = y({}, pl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zy = Te(Qy), Ky = y({}, pl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Fy = Te(Ky), Jy = y({}, pl, { data: 0 }), kf = Te(Jy), Iy = {
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
    MozPrintableKey: "Unidentified"
  }, $y = {
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
    224: "Meta"
  }, Wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Py(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Wy[t]) ? !!e[t] : !1;
  }
  function Ju() {
    return Py;
  }
  var t0 = y({}, Yi, {
    key: function(t) {
      if (t.key) {
        var e = Iy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = er(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? $y[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function(t) {
      return t.type === "keypress" ? er(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? er(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), e0 = Te(t0), n0 = y({}, ir, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ef = Te(n0), l0 = y({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  }), i0 = Te(l0), a0 = y({}, pl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), r0 = Te(a0), u0 = y({}, ir, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), o0 = Te(u0), c0 = y({}, pl, {
    newState: 0,
    oldState: 0
  }), s0 = Te(c0), f0 = [9, 13, 27, 32], Iu = Sn && "CompositionEvent" in window, Gi = null;
  Sn && "documentMode" in document && (Gi = document.documentMode);
  var h0 = Sn && "TextEvent" in window && !Gi, wf = Sn && (!Iu || Gi && 8 < Gi && 11 >= Gi), Af = " ", zf = !1;
  function Tf(t, e) {
    switch (t) {
      case "keyup":
        return f0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Jl = !1;
  function d0(t, e) {
    switch (t) {
      case "compositionend":
        return Cf(e);
      case "keypress":
        return e.which !== 32 ? null : (zf = !0, Af);
      case "textInput":
        return t = e.data, t === Af && zf ? null : t;
      default:
        return null;
    }
  }
  function m0(t, e) {
    if (Jl)
      return t === "compositionend" || !Iu && Tf(t, e) ? (t = vf(), tr = Qu = Yn = null, Jl = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return wf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var p0 = {
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
    week: !0
  };
  function _f(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!p0[t.type] : e === "textarea";
  }
  function Mf(t, e, l, i) {
    Kl ? Fl ? Fl.push(i) : Fl = [i] : Kl = i, e = Kr(e, "onChange"), 0 < e.length && (l = new lr(
      "onChange",
      "change",
      null,
      l,
      i
    ), t.push({ event: l, listeners: e }));
  }
  var Xi = null, Qi = null;
  function g0(t) {
    hm(t, 0);
  }
  function ar(t) {
    var e = Bi(t);
    if (ff(e)) return t;
  }
  function Of(t, e) {
    if (t === "change") return e;
  }
  var Df = !1;
  if (Sn) {
    var $u;
    if (Sn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var Rf = document.createElement("div");
        Rf.setAttribute("oninput", "return;"), Wu = typeof Rf.oninput == "function";
      }
      $u = Wu;
    } else $u = !1;
    Df = $u && (!document.documentMode || 9 < document.documentMode);
  }
  function Nf() {
    Xi && (Xi.detachEvent("onpropertychange", Lf), Qi = Xi = null);
  }
  function Lf(t) {
    if (t.propertyName === "value" && ar(Qi)) {
      var e = [];
      Mf(
        e,
        Qi,
        t,
        Vu(t)
      ), bf(g0, e);
    }
  }
  function y0(t, e, l) {
    t === "focusin" ? (Nf(), Xi = e, Qi = l, Xi.attachEvent("onpropertychange", Lf)) : t === "focusout" && Nf();
  }
  function b0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ar(Qi);
  }
  function v0(t, e) {
    if (t === "click") return ar(e);
  }
  function x0(t, e) {
    if (t === "input" || t === "change")
      return ar(e);
  }
  function S0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var je = typeof Object.is == "function" ? Object.is : S0;
  function Zi(t, e) {
    if (je(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), i = Object.keys(e);
    if (l.length !== i.length) return !1;
    for (i = 0; i < l.length; i++) {
      var o = l[i];
      if (!Bl.call(e, o) || !je(t[o], e[o]))
        return !1;
    }
    return !0;
  }
  function Uf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function jf(t, e) {
    var l = Uf(t);
    t = 0;
    for (var i; l; ) {
      if (l.nodeType === 3) {
        if (i = t + l.textContent.length, t <= e && i >= e)
          return { node: l, offset: e - t };
        t = i;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Uf(l);
    }
  }
  function Bf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Hf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Wa(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Wa(t.document);
    }
    return e;
  }
  function Pu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var k0 = Sn && "documentMode" in document && 11 >= document.documentMode, Il = null, to = null, Ki = null, eo = !1;
  function qf(t, e, l) {
    var i = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    eo || Il == null || Il !== Wa(i) || (i = Il, "selectionStart" in i && Pu(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ki && Zi(Ki, i) || (Ki = i, i = Kr(to, "onSelect"), 0 < i.length && (e = new lr(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: i }), e.target = Il)));
  }
  function gl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var $l = {
    animationend: gl("Animation", "AnimationEnd"),
    animationiteration: gl("Animation", "AnimationIteration"),
    animationstart: gl("Animation", "AnimationStart"),
    transitionrun: gl("Transition", "TransitionRun"),
    transitionstart: gl("Transition", "TransitionStart"),
    transitioncancel: gl("Transition", "TransitionCancel"),
    transitionend: gl("Transition", "TransitionEnd")
  }, no = {}, Yf = {};
  Sn && (Yf = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function yl(t) {
    if (no[t]) return no[t];
    if (!$l[t]) return t;
    var e = $l[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Yf)
        return no[t] = e[l];
    return t;
  }
  var Vf = yl("animationend"), Gf = yl("animationiteration"), Xf = yl("animationstart"), E0 = yl("transitionrun"), w0 = yl("transitionstart"), A0 = yl("transitioncancel"), Qf = yl("transitionend"), Zf = /* @__PURE__ */ new Map(), lo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lo.push("scrollEnd");
  function rn(t, e) {
    Zf.set(t, e), ml(e, [t]);
  }
  var rr = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Je = [], Wl = 0, io = 0;
  function ur() {
    for (var t = Wl, e = io = Wl = 0; e < t; ) {
      var l = Je[e];
      Je[e++] = null;
      var i = Je[e];
      Je[e++] = null;
      var o = Je[e];
      Je[e++] = null;
      var c = Je[e];
      if (Je[e++] = null, i !== null && o !== null) {
        var g = i.pending;
        g === null ? o.next = o : (o.next = g.next, g.next = o), i.pending = o;
      }
      c !== 0 && Kf(l, o, c);
    }
  }
  function or(t, e, l, i) {
    Je[Wl++] = t, Je[Wl++] = e, Je[Wl++] = l, Je[Wl++] = i, io |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function ao(t, e, l, i) {
    return or(t, e, l, i), cr(t);
  }
  function bl(t, e) {
    return or(t, null, null, e), cr(t);
  }
  function Kf(t, e, l) {
    t.lanes |= l;
    var i = t.alternate;
    i !== null && (i.lanes |= l);
    for (var o = !1, c = t.return; c !== null; )
      c.childLanes |= l, i = c.alternate, i !== null && (i.childLanes |= l), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (o = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, o && e !== null && (o = 31 - Xt(l), t = c.hiddenUpdates, i = t[o], i === null ? t[o] = [e] : i.push(e), e.lane = l | 536870912), c) : null;
  }
  function cr(t) {
    if (50 < pa)
      throw pa = 0, pc = null, Error(u(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Pl = {};
  function z0(t, e, l, i) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(t, e, l, i) {
    return new z0(t, e, l, i);
  }
  function ro(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function kn(t, e) {
    var l = t.alternate;
    return l === null ? (l = Be(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Ff(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function sr(t, e, l, i, o, c) {
    var g = 0;
    if (i = t, typeof t == "function") ro(t) && (g = 1);
    else if (typeof t == "string")
      g = Ob(
        t,
        l,
        $.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case mt:
          return t = Be(31, l, e, o), t.elementType = mt, t.lanes = c, t;
        case R:
          return vl(l.children, o, c, e);
        case L:
          g = 8, o |= 24;
          break;
        case _:
          return t = Be(12, l, e, o | 2), t.elementType = _, t.lanes = c, t;
        case ot:
          return t = Be(13, l, e, o), t.elementType = ot, t.lanes = c, t;
        case B:
          return t = Be(19, l, e, o), t.elementType = B, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
                g = 10;
                break t;
              case Z:
                g = 9;
                break t;
              case lt:
                g = 11;
                break t;
              case P:
                g = 14;
                break t;
              case J:
                g = 16, i = null;
                break t;
            }
          g = 29, l = Error(
            u(130, t === null ? "null" : typeof t, "")
          ), i = null;
      }
    return e = Be(g, l, e, o), e.elementType = t, e.type = i, e.lanes = c, e;
  }
  function vl(t, e, l, i) {
    return t = Be(7, t, i, e), t.lanes = l, t;
  }
  function uo(t, e, l) {
    return t = Be(6, t, null, e), t.lanes = l, t;
  }
  function Jf(t) {
    var e = Be(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function oo(t, e, l) {
    return e = Be(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var If = /* @__PURE__ */ new WeakMap();
  function Ie(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = If.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Qa(e)
      }, If.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Qa(e)
    };
  }
  var ti = [], ei = 0, fr = null, Fi = 0, $e = [], We = 0, Vn = null, fn = 1, hn = "";
  function En(t, e) {
    ti[ei++] = Fi, ti[ei++] = fr, fr = t, Fi = e;
  }
  function $f(t, e, l) {
    $e[We++] = fn, $e[We++] = hn, $e[We++] = Vn, Vn = t;
    var i = fn;
    t = hn;
    var o = 32 - Xt(i) - 1;
    i &= ~(1 << o), l += 1;
    var c = 32 - Xt(e) + o;
    if (30 < c) {
      var g = o - o % 5;
      c = (i & (1 << g) - 1).toString(32), i >>= g, o -= g, fn = 1 << 32 - Xt(e) + o | l << o | i, hn = c + t;
    } else
      fn = 1 << c | l << o | i, hn = t;
  }
  function co(t) {
    t.return !== null && (En(t, 1), $f(t, 1, 0));
  }
  function so(t) {
    for (; t === fr; )
      fr = ti[--ei], ti[ei] = null, Fi = ti[--ei], ti[ei] = null;
    for (; t === Vn; )
      Vn = $e[--We], $e[We] = null, hn = $e[--We], $e[We] = null, fn = $e[--We], $e[We] = null;
  }
  function Wf(t, e) {
    $e[We++] = fn, $e[We++] = hn, $e[We++] = Vn, fn = e.id, hn = e.overflow, Vn = t;
  }
  var me = null, Ft = null, Ot = !1, Gn = null, Pe = !1, fo = Error(u(519));
  function Xn(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ji(Ie(e, t)), fo;
  }
  function Pf(t) {
    var e = t.stateNode, l = t.type, i = t.memoizedProps;
    switch (e[de] = t, e[ze] = i, l) {
      case "dialog":
        Tt("cancel", e), Tt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ya.length; l++)
          Tt(ya[l], e);
        break;
      case "source":
        Tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", e), Tt("load", e);
        break;
      case "details":
        Tt("toggle", e);
        break;
      case "input":
        Tt("invalid", e), hf(
          e,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        Tt("invalid", e);
        break;
      case "textarea":
        Tt("invalid", e), mf(e, i.value, i.defaultValue, i.children);
    }
    l = i.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || i.suppressHydrationWarning === !0 || gm(e.textContent, l) ? (i.popover != null && (Tt("beforetoggle", e), Tt("toggle", e)), i.onScroll != null && Tt("scroll", e), i.onScrollEnd != null && Tt("scrollend", e), i.onClick != null && (e.onclick = xn), e = !0) : e = !1, e || Xn(t, !0);
  }
  function th(t) {
    for (me = t.return; me; )
      switch (me.tag) {
        case 5:
        case 31:
        case 13:
          Pe = !1;
          return;
        case 27:
        case 3:
          Pe = !0;
          return;
        default:
          me = me.return;
      }
  }
  function ni(t) {
    if (t !== me) return !1;
    if (!Ot) return th(t), Ot = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Mc(t.type, t.memoizedProps)), l = !l), l && Ft && Xn(t), th(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ft = Am(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ft = Am(t);
    } else
      e === 27 ? (e = Ft, il(t.type) ? (t = Lc, Lc = null, Ft = t) : Ft = e) : Ft = me ? en(t.stateNode.nextSibling) : null;
    return !0;
  }
  function xl() {
    Ft = me = null, Ot = !1;
  }
  function ho() {
    var t = Gn;
    return t !== null && (Oe === null ? Oe = t : Oe.push.apply(
      Oe,
      t
    ), Gn = null), t;
  }
  function Ji(t) {
    Gn === null ? Gn = [t] : Gn.push(t);
  }
  var mo = z(null), Sl = null, wn = null;
  function Qn(t, e, l) {
    k(mo, e._currentValue), e._currentValue = l;
  }
  function An(t) {
    t._currentValue = mo.current, Y(mo);
  }
  function po(t, e, l) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function go(t, e, l, i) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var g = o.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = o;
          for (var w = 0; w < e.length; w++)
            if (v.context === e[w]) {
              c.lanes |= l, v = c.alternate, v !== null && (v.lanes |= l), po(
                c.return,
                l,
                t
              ), i || (g = null);
              break t;
            }
          c = v.next;
        }
      } else if (o.tag === 18) {
        if (g = o.return, g === null) throw Error(u(341));
        g.lanes |= l, c = g.alternate, c !== null && (c.lanes |= l), po(g, l, t), g = null;
      } else g = o.child;
      if (g !== null) g.return = o;
      else
        for (g = o; g !== null; ) {
          if (g === t) {
            g = null;
            break;
          }
          if (o = g.sibling, o !== null) {
            o.return = g.return, g = o;
            break;
          }
          g = g.return;
        }
      o = g;
    }
  }
  function li(t, e, l, i) {
    t = null;
    for (var o = e, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(u(387));
        if (g = g.memoizedProps, g !== null) {
          var v = o.type;
          je(o.pendingProps.value, g.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (o === ht.current) {
        if (g = o.alternate, g === null) throw Error(u(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ka) : t = [ka]);
      }
      o = o.return;
    }
    t !== null && go(
      e,
      t,
      l,
      i
    ), e.flags |= 262144;
  }
  function hr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!je(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function kl(t) {
    Sl = t, wn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function pe(t) {
    return eh(Sl, t);
  }
  function dr(t, e) {
    return Sl === null && kl(t), eh(t, e);
  }
  function eh(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, wn === null) {
      if (t === null) throw Error(u(308));
      wn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else wn = wn.next = e;
    return l;
  }
  var T0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, C0 = n.unstable_scheduleCallback, _0 = n.unstable_NormalPriority, ne = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yo() {
    return {
      controller: new T0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ii(t) {
    t.refCount--, t.refCount === 0 && C0(_0, function() {
      t.controller.abort();
    });
  }
  var $i = null, bo = 0, ii = 0, ai = null;
  function M0(t, e) {
    if ($i === null) {
      var l = $i = [];
      bo = 0, ii = Sc(), ai = {
        status: "pending",
        value: void 0,
        then: function(i) {
          l.push(i);
        }
      };
    }
    return bo++, e.then(nh, nh), e;
  }
  function nh() {
    if (--bo === 0 && $i !== null) {
      ai !== null && (ai.status = "fulfilled");
      var t = $i;
      $i = null, ii = 0, ai = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function O0(t, e) {
    var l = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        l.push(o);
      }
    };
    return t.then(
      function() {
        i.status = "fulfilled", i.value = e;
        for (var o = 0; o < l.length; o++) (0, l[o])(e);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < l.length; o++)
          (0, l[o])(void 0);
      }
    ), i;
  }
  var lh = M.S;
  M.S = function(t, e) {
    qd = Se(), typeof e == "object" && e !== null && typeof e.then == "function" && M0(t, e), lh !== null && lh(t, e);
  };
  var El = z(null);
  function vo() {
    var t = El.current;
    return t !== null ? t : Qt.pooledCache;
  }
  function mr(t, e) {
    e === null ? k(El, El.current) : k(El, e.pool);
  }
  function ih() {
    var t = vo();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var ri = Error(u(460)), xo = Error(u(474)), pr = Error(u(542)), gr = { then: function() {
  } };
  function ah(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function rh(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(xn, xn), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, oh(t), t;
      default:
        if (typeof e.status == "string") e.then(xn, xn);
        else {
          if (t = Qt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(u(482));
          t = e, t.status = "pending", t.then(
            function(i) {
              if (e.status === "pending") {
                var o = e;
                o.status = "fulfilled", o.value = i;
              }
            },
            function(i) {
              if (e.status === "pending") {
                var o = e;
                o.status = "rejected", o.reason = i;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, oh(t), t;
        }
        throw Al = e, ri;
    }
  }
  function wl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Al = l, ri) : l;
    }
  }
  var Al = null;
  function uh() {
    if (Al === null) throw Error(u(459));
    var t = Al;
    return Al = null, t;
  }
  function oh(t) {
    if (t === ri || t === pr)
      throw Error(u(483));
  }
  var ui = null, Wi = 0;
  function yr(t) {
    var e = Wi;
    return Wi += 1, ui === null && (ui = []), rh(ui, t, e);
  }
  function Pi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function br(t, e) {
    throw e.$$typeof === S ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(
      u(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function ch(t) {
    function e(C, T) {
      if (t) {
        var O = C.deletions;
        O === null ? (C.deletions = [T], C.flags |= 16) : O.push(T);
      }
    }
    function l(C, T) {
      if (!t) return null;
      for (; T !== null; )
        e(C, T), T = T.sibling;
      return null;
    }
    function i(C) {
      for (var T = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), C = C.sibling;
      return T;
    }
    function o(C, T) {
      return C = kn(C, T), C.index = 0, C.sibling = null, C;
    }
    function c(C, T, O) {
      return C.index = O, t ? (O = C.alternate, O !== null ? (O = O.index, O < T ? (C.flags |= 67108866, T) : O) : (C.flags |= 67108866, T)) : (C.flags |= 1048576, T);
    }
    function g(C) {
      return t && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, T, O, G) {
      return T === null || T.tag !== 6 ? (T = uo(O, C.mode, G), T.return = C, T) : (T = o(T, O), T.return = C, T);
    }
    function w(C, T, O, G) {
      var dt = O.type;
      return dt === R ? q(
        C,
        T,
        O.props.children,
        G,
        O.key
      ) : T !== null && (T.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === J && wl(dt) === T.type) ? (T = o(T, O.props), Pi(T, O), T.return = C, T) : (T = sr(
        O.type,
        O.key,
        O.props,
        null,
        C.mode,
        G
      ), Pi(T, O), T.return = C, T);
    }
    function D(C, T, O, G) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = oo(O, C.mode, G), T.return = C, T) : (T = o(T, O.children || []), T.return = C, T);
    }
    function q(C, T, O, G, dt) {
      return T === null || T.tag !== 7 ? (T = vl(
        O,
        C.mode,
        G,
        dt
      ), T.return = C, T) : (T = o(T, O), T.return = C, T);
    }
    function X(C, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = uo(
          "" + T,
          C.mode,
          O
        ), T.return = C, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case x:
            return O = sr(
              T.type,
              T.key,
              T.props,
              null,
              C.mode,
              O
            ), Pi(O, T), O.return = C, O;
          case A:
            return T = oo(
              T,
              C.mode,
              O
            ), T.return = C, T;
          case J:
            return T = wl(T), X(C, T, O);
        }
        if (I(T) || tt(T))
          return T = vl(
            T,
            C.mode,
            O,
            null
          ), T.return = C, T;
        if (typeof T.then == "function")
          return X(C, yr(T), O);
        if (T.$$typeof === H)
          return X(
            C,
            dr(C, T),
            O
          );
        br(C, T);
      }
      return null;
    }
    function N(C, T, O, G) {
      var dt = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return dt !== null ? null : v(C, T, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return O.key === dt ? w(C, T, O, G) : null;
          case A:
            return O.key === dt ? D(C, T, O, G) : null;
          case J:
            return O = wl(O), N(C, T, O, G);
        }
        if (I(O) || tt(O))
          return dt !== null ? null : q(C, T, O, G, null);
        if (typeof O.then == "function")
          return N(
            C,
            T,
            yr(O),
            G
          );
        if (O.$$typeof === H)
          return N(
            C,
            T,
            dr(C, O),
            G
          );
        br(C, O);
      }
      return null;
    }
    function j(C, T, O, G, dt) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return C = C.get(O) || null, v(T, C, "" + G, dt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case x:
            return C = C.get(
              G.key === null ? O : G.key
            ) || null, w(T, C, G, dt);
          case A:
            return C = C.get(
              G.key === null ? O : G.key
            ) || null, D(T, C, G, dt);
          case J:
            return G = wl(G), j(
              C,
              T,
              O,
              G,
              dt
            );
        }
        if (I(G) || tt(G))
          return C = C.get(O) || null, q(T, C, G, dt, null);
        if (typeof G.then == "function")
          return j(
            C,
            T,
            O,
            yr(G),
            dt
          );
        if (G.$$typeof === H)
          return j(
            C,
            T,
            O,
            dr(T, G),
            dt
          );
        br(T, G);
      }
      return null;
    }
    function at(C, T, O, G) {
      for (var dt = null, Nt = null, ct = T, St = T = 0, Mt = null; ct !== null && St < O.length; St++) {
        ct.index > St ? (Mt = ct, ct = null) : Mt = ct.sibling;
        var Lt = N(
          C,
          ct,
          O[St],
          G
        );
        if (Lt === null) {
          ct === null && (ct = Mt);
          break;
        }
        t && ct && Lt.alternate === null && e(C, ct), T = c(Lt, T, St), Nt === null ? dt = Lt : Nt.sibling = Lt, Nt = Lt, ct = Mt;
      }
      if (St === O.length)
        return l(C, ct), Ot && En(C, St), dt;
      if (ct === null) {
        for (; St < O.length; St++)
          ct = X(C, O[St], G), ct !== null && (T = c(
            ct,
            T,
            St
          ), Nt === null ? dt = ct : Nt.sibling = ct, Nt = ct);
        return Ot && En(C, St), dt;
      }
      for (ct = i(ct); St < O.length; St++)
        Mt = j(
          ct,
          C,
          St,
          O[St],
          G
        ), Mt !== null && (t && Mt.alternate !== null && ct.delete(
          Mt.key === null ? St : Mt.key
        ), T = c(
          Mt,
          T,
          St
        ), Nt === null ? dt = Mt : Nt.sibling = Mt, Nt = Mt);
      return t && ct.forEach(function(cl) {
        return e(C, cl);
      }), Ot && En(C, St), dt;
    }
    function gt(C, T, O, G) {
      if (O == null) throw Error(u(151));
      for (var dt = null, Nt = null, ct = T, St = T = 0, Mt = null, Lt = O.next(); ct !== null && !Lt.done; St++, Lt = O.next()) {
        ct.index > St ? (Mt = ct, ct = null) : Mt = ct.sibling;
        var cl = N(C, ct, Lt.value, G);
        if (cl === null) {
          ct === null && (ct = Mt);
          break;
        }
        t && ct && cl.alternate === null && e(C, ct), T = c(cl, T, St), Nt === null ? dt = cl : Nt.sibling = cl, Nt = cl, ct = Mt;
      }
      if (Lt.done)
        return l(C, ct), Ot && En(C, St), dt;
      if (ct === null) {
        for (; !Lt.done; St++, Lt = O.next())
          Lt = X(C, Lt.value, G), Lt !== null && (T = c(Lt, T, St), Nt === null ? dt = Lt : Nt.sibling = Lt, Nt = Lt);
        return Ot && En(C, St), dt;
      }
      for (ct = i(ct); !Lt.done; St++, Lt = O.next())
        Lt = j(ct, C, St, Lt.value, G), Lt !== null && (t && Lt.alternate !== null && ct.delete(Lt.key === null ? St : Lt.key), T = c(Lt, T, St), Nt === null ? dt = Lt : Nt.sibling = Lt, Nt = Lt);
      return t && ct.forEach(function(Vb) {
        return e(C, Vb);
      }), Ot && En(C, St), dt;
    }
    function Vt(C, T, O, G) {
      if (typeof O == "object" && O !== null && O.type === R && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            t: {
              for (var dt = O.key; T !== null; ) {
                if (T.key === dt) {
                  if (dt = O.type, dt === R) {
                    if (T.tag === 7) {
                      l(
                        C,
                        T.sibling
                      ), G = o(
                        T,
                        O.props.children
                      ), G.return = C, C = G;
                      break t;
                    }
                  } else if (T.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === J && wl(dt) === T.type) {
                    l(
                      C,
                      T.sibling
                    ), G = o(T, O.props), Pi(G, O), G.return = C, C = G;
                    break t;
                  }
                  l(C, T);
                  break;
                } else e(C, T);
                T = T.sibling;
              }
              O.type === R ? (G = vl(
                O.props.children,
                C.mode,
                G,
                O.key
              ), G.return = C, C = G) : (G = sr(
                O.type,
                O.key,
                O.props,
                null,
                C.mode,
                G
              ), Pi(G, O), G.return = C, C = G);
            }
            return g(C);
          case A:
            t: {
              for (dt = O.key; T !== null; ) {
                if (T.key === dt)
                  if (T.tag === 4 && T.stateNode.containerInfo === O.containerInfo && T.stateNode.implementation === O.implementation) {
                    l(
                      C,
                      T.sibling
                    ), G = o(T, O.children || []), G.return = C, C = G;
                    break t;
                  } else {
                    l(C, T);
                    break;
                  }
                else e(C, T);
                T = T.sibling;
              }
              G = oo(O, C.mode, G), G.return = C, C = G;
            }
            return g(C);
          case J:
            return O = wl(O), Vt(
              C,
              T,
              O,
              G
            );
        }
        if (I(O))
          return at(
            C,
            T,
            O,
            G
          );
        if (tt(O)) {
          if (dt = tt(O), typeof dt != "function") throw Error(u(150));
          return O = dt.call(O), gt(
            C,
            T,
            O,
            G
          );
        }
        if (typeof O.then == "function")
          return Vt(
            C,
            T,
            yr(O),
            G
          );
        if (O.$$typeof === H)
          return Vt(
            C,
            T,
            dr(C, O),
            G
          );
        br(C, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (l(C, T.sibling), G = o(T, O), G.return = C, C = G) : (l(C, T), G = uo(O, C.mode, G), G.return = C, C = G), g(C)) : l(C, T);
    }
    return function(C, T, O, G) {
      try {
        Wi = 0;
        var dt = Vt(
          C,
          T,
          O,
          G
        );
        return ui = null, dt;
      } catch (ct) {
        if (ct === ri || ct === pr) throw ct;
        var Nt = Be(29, ct, null, C.mode);
        return Nt.lanes = G, Nt.return = C, Nt;
      }
    };
  }
  var zl = ch(!0), sh = ch(!1), Zn = !1;
  function So(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ko(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Kn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Fn(t, e, l) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ut & 2) !== 0) {
      var o = i.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), i.pending = e, e = cr(t), Kf(t, null, l), e;
    }
    return or(t, i, e, l), cr(t);
  }
  function ta(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, l |= i, e.lanes = l, tf(t, l);
    }
  }
  function Eo(t, e) {
    var l = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, l === i)) {
      var o = null, c = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          c === null ? o = c = g : c = c.next = g, l = l.next;
        } while (l !== null);
        c === null ? o = c = e : c = c.next = e;
      } else o = c = e;
      l = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var wo = !1;
  function ea() {
    if (wo) {
      var t = ai;
      if (t !== null) throw t;
    }
  }
  function na(t, e, l, i) {
    wo = !1;
    var o = t.updateQueue;
    Zn = !1;
    var c = o.firstBaseUpdate, g = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var w = v, D = w.next;
      w.next = null, g === null ? c = D : g.next = D, g = w;
      var q = t.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== g && (v === null ? q.firstBaseUpdate = D : v.next = D, q.lastBaseUpdate = w));
    }
    if (c !== null) {
      var X = o.baseState;
      g = 0, q = D = w = null, v = c;
      do {
        var N = v.lane & -536870913, j = N !== v.lane;
        if (j ? (_t & N) === N : (i & N) === N) {
          N !== 0 && N === ii && (wo = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var at = t, gt = v;
            N = e;
            var Vt = l;
            switch (gt.tag) {
              case 1:
                if (at = gt.payload, typeof at == "function") {
                  X = at.call(Vt, X, N);
                  break t;
                }
                X = at;
                break t;
              case 3:
                at.flags = at.flags & -65537 | 128;
              case 0:
                if (at = gt.payload, N = typeof at == "function" ? at.call(Vt, X, N) : at, N == null) break t;
                X = y({}, X, N);
                break t;
              case 2:
                Zn = !0;
            }
          }
          N = v.callback, N !== null && (t.flags |= 64, j && (t.flags |= 8192), j = o.callbacks, j === null ? o.callbacks = [N] : j.push(N));
        } else
          j = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, q === null ? (D = q = j, w = X) : q = q.next = j, g |= N;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          j = v, v = j.next, j.next = null, o.lastBaseUpdate = j, o.shared.pending = null;
        }
      } while (!0);
      q === null && (w = X), o.baseState = w, o.firstBaseUpdate = D, o.lastBaseUpdate = q, c === null && (o.shared.lanes = 0), Pn |= g, t.lanes = g, t.memoizedState = X;
    }
  }
  function fh(t, e) {
    if (typeof t != "function")
      throw Error(u(191, t));
    t.call(e);
  }
  function hh(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        fh(l[t], e);
  }
  var oi = z(null), vr = z(0);
  function dh(t, e) {
    t = Nn, k(vr, t), k(oi, e), Nn = t | e.baseLanes;
  }
  function Ao() {
    k(vr, Nn), k(oi, oi.current);
  }
  function zo() {
    Nn = vr.current, Y(oi), Y(vr);
  }
  var He = z(null), tn = null;
  function Jn(t) {
    var e = t.alternate;
    k(te, te.current & 1), k(He, t), tn === null && (e === null || oi.current !== null || e.memoizedState !== null) && (tn = t);
  }
  function To(t) {
    k(te, te.current), k(He, t), tn === null && (tn = t);
  }
  function mh(t) {
    t.tag === 22 ? (k(te, te.current), k(He, t), tn === null && (tn = t)) : In();
  }
  function In() {
    k(te, te.current), k(He, He.current);
  }
  function qe(t) {
    Y(He), tn === t && (tn = null), Y(te);
  }
  var te = z(0);
  function xr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Rc(l) || Nc(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var zn = 0, vt = null, qt = null, le = null, Sr = !1, ci = !1, Tl = !1, kr = 0, la = 0, si = null, D0 = 0;
  function Wt() {
    throw Error(u(321));
  }
  function Co(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!je(t[l], e[l])) return !1;
    return !0;
  }
  function _o(t, e, l, i, o, c) {
    return zn = c, vt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? $h : Xo, Tl = !1, c = l(i, o), Tl = !1, ci && (c = gh(
      e,
      l,
      i,
      o
    )), ph(t), c;
  }
  function ph(t) {
    M.H = ra;
    var e = qt !== null && qt.next !== null;
    if (zn = 0, le = qt = vt = null, Sr = !1, la = 0, si = null, e) throw Error(u(300));
    t === null || ie || (t = t.dependencies, t !== null && hr(t) && (ie = !0));
  }
  function gh(t, e, l, i) {
    vt = t;
    var o = 0;
    do {
      if (ci && (si = null), la = 0, ci = !1, 25 <= o) throw Error(u(301));
      if (o += 1, le = qt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      M.H = Wh, c = e(l, i);
    } while (ci);
    return c;
  }
  function R0() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ia(e) : e, t = t.useState()[0], (qt !== null ? qt.memoizedState : null) !== t && (vt.flags |= 1024), e;
  }
  function Mo() {
    var t = kr !== 0;
    return kr = 0, t;
  }
  function Oo(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Do(t) {
    if (Sr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Sr = !1;
    }
    zn = 0, le = qt = vt = null, ci = !1, la = kr = 0, si = null;
  }
  function Ee() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return le === null ? vt.memoizedState = le = t : le = le.next = t, le;
  }
  function ee() {
    if (qt === null) {
      var t = vt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = qt.next;
    var e = le === null ? vt.memoizedState : le.next;
    if (e !== null)
      le = e, qt = t;
    else {
      if (t === null)
        throw vt.alternate === null ? Error(u(467)) : Error(u(310));
      qt = t, t = {
        memoizedState: qt.memoizedState,
        baseState: qt.baseState,
        baseQueue: qt.baseQueue,
        queue: qt.queue,
        next: null
      }, le === null ? vt.memoizedState = le = t : le = le.next = t;
    }
    return le;
  }
  function Er() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ia(t) {
    var e = la;
    return la += 1, si === null && (si = []), t = rh(si, t, e), e = vt, (le === null ? e.memoizedState : le.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? $h : Xo), t;
  }
  function wr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ia(t);
      if (t.$$typeof === H) return pe(t);
    }
    throw Error(u(438, String(t)));
  }
  function Ro(t) {
    var e = null, l = vt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var i = vt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Er(), vt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), i = 0; i < t; i++)
        l[i] = U;
    return e.index++, l;
  }
  function Tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ar(t) {
    var e = ee();
    return No(e, qt, t);
  }
  function No(t, e, l) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = l;
    var o = t.baseQueue, c = i.pending;
    if (c !== null) {
      if (o !== null) {
        var g = o.next;
        o.next = c.next, c.next = g;
      }
      e.baseQueue = o = c, i.pending = null;
    }
    if (c = t.baseState, o === null) t.memoizedState = c;
    else {
      e = o.next;
      var v = g = null, w = null, D = e, q = !1;
      do {
        var X = D.lane & -536870913;
        if (X !== D.lane ? (_t & X) === X : (zn & X) === X) {
          var N = D.revertLane;
          if (N === 0)
            w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), X === ii && (q = !0);
          else if ((zn & N) === N) {
            D = D.next, N === ii && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, w === null ? (v = w = X, g = c) : w = w.next = X, vt.lanes |= N, Pn |= N;
          X = D.action, Tl && l(c, X), c = D.hasEagerState ? D.eagerState : l(c, X);
        } else
          N = {
            lane: X,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, w === null ? (v = w = N, g = c) : w = w.next = N, vt.lanes |= X, Pn |= X;
        D = D.next;
      } while (D !== null && D !== e);
      if (w === null ? g = c : w.next = v, !je(c, t.memoizedState) && (ie = !0, q && (l = ai, l !== null)))
        throw l;
      t.memoizedState = c, t.baseState = g, t.baseQueue = w, i.lastRenderedState = c;
    }
    return o === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Lo(t) {
    var e = ee(), l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = t;
    var i = l.dispatch, o = l.pending, c = e.memoizedState;
    if (o !== null) {
      l.pending = null;
      var g = o = o.next;
      do
        c = t(c, g.action), g = g.next;
      while (g !== o);
      je(c, e.memoizedState) || (ie = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), l.lastRenderedState = c;
    }
    return [c, i];
  }
  function yh(t, e, l) {
    var i = vt, o = ee(), c = Ot;
    if (c) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = e();
    var g = !je(
      (qt || o).memoizedState,
      l
    );
    if (g && (o.memoizedState = l, ie = !0), o = o.queue, Bo(xh.bind(null, i, o, t), [
      t
    ]), o.getSnapshot !== e || g || le !== null && le.memoizedState.tag & 1) {
      if (i.flags |= 2048, fi(
        9,
        { destroy: void 0 },
        vh.bind(
          null,
          i,
          o,
          l,
          e
        ),
        null
      ), Qt === null) throw Error(u(349));
      c || (zn & 127) !== 0 || bh(i, e, l);
    }
    return l;
  }
  function bh(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = vt.updateQueue, e === null ? (e = Er(), vt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function vh(t, e, l, i) {
    e.value = l, e.getSnapshot = i, Sh(e) && kh(t);
  }
  function xh(t, e, l) {
    return l(function() {
      Sh(e) && kh(t);
    });
  }
  function Sh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !je(t, l);
    } catch {
      return !0;
    }
  }
  function kh(t) {
    var e = bl(t, 2);
    e !== null && De(e, t, 2);
  }
  function Uo(t) {
    var e = Ee();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Tl) {
        Ae(!0);
        try {
          l();
        } finally {
          Ae(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tn,
      lastRenderedState: t
    }, e;
  }
  function Eh(t, e, l, i) {
    return t.baseState = l, No(
      t,
      qt,
      typeof i == "function" ? i : Tn
    );
  }
  function N0(t, e, l, i, o) {
    if (Cr(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(g) {
          c.listeners.push(g);
        }
      };
      M.T !== null ? l(!0) : c.isTransition = !1, i(c), l = e.pending, l === null ? (c.next = e.pending = c, wh(e, c)) : (c.next = l.next, e.pending = l.next = c);
    }
  }
  function wh(t, e) {
    var l = e.action, i = e.payload, o = t.state;
    if (e.isTransition) {
      var c = M.T, g = {};
      M.T = g;
      try {
        var v = l(o, i), w = M.S;
        w !== null && w(g, v), Ah(t, e, v);
      } catch (D) {
        jo(t, e, D);
      } finally {
        c !== null && g.types !== null && (c.types = g.types), M.T = c;
      }
    } else
      try {
        c = l(o, i), Ah(t, e, c);
      } catch (D) {
        jo(t, e, D);
      }
  }
  function Ah(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(i) {
        zh(t, e, i);
      },
      function(i) {
        return jo(t, e, i);
      }
    ) : zh(t, e, l);
  }
  function zh(t, e, l) {
    e.status = "fulfilled", e.value = l, Th(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, wh(t, l)));
  }
  function jo(t, e, l) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = l, Th(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function Th(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ch(t, e) {
    return e;
  }
  function _h(t, e) {
    if (Ot) {
      var l = Qt.formState;
      if (l !== null) {
        t: {
          var i = vt;
          if (Ot) {
            if (Ft) {
              e: {
                for (var o = Ft, c = Pe; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break e;
                  }
                  if (o = en(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break e;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                Ft = en(
                  o.nextSibling
                ), i = o.data === "F!";
                break t;
              }
            }
            Xn(i);
          }
          i = !1;
        }
        i && (e = l[0]);
      }
    }
    return l = Ee(), l.memoizedState = l.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ch,
      lastRenderedState: e
    }, l.queue = i, l = Fh.bind(
      null,
      vt,
      i
    ), i.dispatch = l, i = Uo(!1), c = Go.bind(
      null,
      vt,
      !1,
      i.queue
    ), i = Ee(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = o, l = N0.bind(
      null,
      vt,
      o,
      c,
      l
    ), o.dispatch = l, i.memoizedState = t, [e, l, !1];
  }
  function Mh(t) {
    var e = ee();
    return Oh(e, qt, t);
  }
  function Oh(t, e, l) {
    if (e = No(
      t,
      e,
      Ch
    )[0], t = Ar(Tn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = ia(e);
      } catch (g) {
        throw g === ri ? pr : g;
      }
    else i = e;
    e = ee();
    var o = e.queue, c = o.dispatch;
    return l !== e.memoizedState && (vt.flags |= 2048, fi(
      9,
      { destroy: void 0 },
      L0.bind(null, o, l),
      null
    )), [i, c, t];
  }
  function L0(t, e) {
    t.action = e;
  }
  function Dh(t) {
    var e = ee(), l = qt;
    if (l !== null)
      return Oh(e, l, t);
    ee(), e = e.memoizedState, l = ee();
    var i = l.queue.dispatch;
    return l.memoizedState = t, [e, i, !1];
  }
  function fi(t, e, l, i) {
    return t = { tag: t, create: l, deps: i, inst: e, next: null }, e = vt.updateQueue, e === null && (e = Er(), vt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (i = l.next, l.next = t, t.next = i, e.lastEffect = t), t;
  }
  function Rh() {
    return ee().memoizedState;
  }
  function zr(t, e, l, i) {
    var o = Ee();
    vt.flags |= t, o.memoizedState = fi(
      1 | e,
      { destroy: void 0 },
      l,
      i === void 0 ? null : i
    );
  }
  function Tr(t, e, l, i) {
    var o = ee();
    i = i === void 0 ? null : i;
    var c = o.memoizedState.inst;
    qt !== null && i !== null && Co(i, qt.memoizedState.deps) ? o.memoizedState = fi(e, c, l, i) : (vt.flags |= t, o.memoizedState = fi(
      1 | e,
      c,
      l,
      i
    ));
  }
  function Nh(t, e) {
    zr(8390656, 8, t, e);
  }
  function Bo(t, e) {
    Tr(2048, 8, t, e);
  }
  function U0(t) {
    vt.flags |= 4;
    var e = vt.updateQueue;
    if (e === null)
      e = Er(), vt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Lh(t) {
    var e = ee().memoizedState;
    return U0({ ref: e, nextImpl: t }), function() {
      if ((Ut & 2) !== 0) throw Error(u(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Uh(t, e) {
    return Tr(4, 2, t, e);
  }
  function jh(t, e) {
    return Tr(4, 4, t, e);
  }
  function Bh(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Hh(t, e, l) {
    l = l != null ? l.concat([t]) : null, Tr(4, 4, Bh.bind(null, e, t), l);
  }
  function Ho() {
  }
  function qh(t, e) {
    var l = ee();
    e = e === void 0 ? null : e;
    var i = l.memoizedState;
    return e !== null && Co(e, i[1]) ? i[0] : (l.memoizedState = [t, e], t);
  }
  function Yh(t, e) {
    var l = ee();
    e = e === void 0 ? null : e;
    var i = l.memoizedState;
    if (e !== null && Co(e, i[1]))
      return i[0];
    if (i = t(), Tl) {
      Ae(!0);
      try {
        t();
      } finally {
        Ae(!1);
      }
    }
    return l.memoizedState = [i, e], i;
  }
  function qo(t, e, l) {
    return l === void 0 || (zn & 1073741824) !== 0 && (_t & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Vd(), vt.lanes |= t, Pn |= t, l);
  }
  function Vh(t, e, l, i) {
    return je(l, e) ? l : oi.current !== null ? (t = qo(t, l, i), je(t, e) || (ie = !0), t) : (zn & 42) === 0 || (zn & 1073741824) !== 0 && (_t & 261930) === 0 ? (ie = !0, t.memoizedState = l) : (t = Vd(), vt.lanes |= t, Pn |= t, e);
  }
  function Gh(t, e, l, i, o) {
    var c = K.p;
    K.p = c !== 0 && 8 > c ? c : 8;
    var g = M.T, v = {};
    M.T = v, Go(t, !1, e, l);
    try {
      var w = o(), D = M.S;
      if (D !== null && D(v, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var q = O0(
          w,
          i
        );
        aa(
          t,
          e,
          q,
          Ge(t)
        );
      } else
        aa(
          t,
          e,
          i,
          Ge(t)
        );
    } catch (X) {
      aa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: X },
        Ge()
      );
    } finally {
      K.p = c, g !== null && v.types !== null && (g.types = v.types), M.T = g;
    }
  }
  function j0() {
  }
  function Yo(t, e, l, i) {
    if (t.tag !== 5) throw Error(u(476));
    var o = Xh(t).queue;
    Gh(
      t,
      o,
      e,
      Q,
      l === null ? j0 : function() {
        return Qh(t), l(i);
      }
    );
  }
  function Xh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: Q
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Qh(t) {
    var e = Xh(t);
    e.next === null && (e = t.alternate.memoizedState), aa(
      t,
      e.next.queue,
      {},
      Ge()
    );
  }
  function Vo() {
    return pe(ka);
  }
  function Zh() {
    return ee().memoizedState;
  }
  function Kh() {
    return ee().memoizedState;
  }
  function B0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ge();
          t = Kn(l);
          var i = Fn(e, t, l);
          i !== null && (De(i, e, l), ta(i, e, l)), e = { cache: yo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function H0(t, e, l) {
    var i = Ge();
    l = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(t) ? Jh(e, l) : (l = ao(t, e, l, i), l !== null && (De(l, t, i), Ih(l, e, i)));
  }
  function Fh(t, e, l) {
    var i = Ge();
    aa(t, e, l, i);
  }
  function aa(t, e, l, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cr(t)) Jh(e, o);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var g = e.lastRenderedState, v = c(g, l);
          if (o.hasEagerState = !0, o.eagerState = v, je(v, g))
            return or(t, e, o, 0), Qt === null && ur(), !1;
        } catch {
        }
      if (l = ao(t, e, o, i), l !== null)
        return De(l, t, i), Ih(l, e, i), !0;
    }
    return !1;
  }
  function Go(t, e, l, i) {
    if (i = {
      lane: 2,
      revertLane: Sc(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(t)) {
      if (e) throw Error(u(479));
    } else
      e = ao(
        t,
        l,
        i,
        2
      ), e !== null && De(e, t, 2);
  }
  function Cr(t) {
    var e = t.alternate;
    return t === vt || e !== null && e === vt;
  }
  function Jh(t, e) {
    ci = Sr = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Ih(t, e, l) {
    if ((l & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, l |= i, e.lanes = l, tf(t, l);
    }
  }
  var ra = {
    readContext: pe,
    use: wr,
    useCallback: Wt,
    useContext: Wt,
    useEffect: Wt,
    useImperativeHandle: Wt,
    useLayoutEffect: Wt,
    useInsertionEffect: Wt,
    useMemo: Wt,
    useReducer: Wt,
    useRef: Wt,
    useState: Wt,
    useDebugValue: Wt,
    useDeferredValue: Wt,
    useTransition: Wt,
    useSyncExternalStore: Wt,
    useId: Wt,
    useHostTransitionStatus: Wt,
    useFormState: Wt,
    useActionState: Wt,
    useOptimistic: Wt,
    useMemoCache: Wt,
    useCacheRefresh: Wt
  };
  ra.useEffectEvent = Wt;
  var $h = {
    readContext: pe,
    use: wr,
    useCallback: function(t, e) {
      return Ee().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: pe,
    useEffect: Nh,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, zr(
        4194308,
        4,
        Bh.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return zr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      zr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Ee();
      e = e === void 0 ? null : e;
      var i = t();
      if (Tl) {
        Ae(!0);
        try {
          t();
        } finally {
          Ae(!1);
        }
      }
      return l.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, l) {
      var i = Ee();
      if (l !== void 0) {
        var o = l(e);
        if (Tl) {
          Ae(!0);
          try {
            l(e);
          } finally {
            Ae(!1);
          }
        }
      } else o = e;
      return i.memoizedState = i.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, i.queue = t, t = t.dispatch = H0.bind(
        null,
        vt,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ee();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Uo(t);
      var e = t.queue, l = Fh.bind(null, vt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Ho,
    useDeferredValue: function(t, e) {
      var l = Ee();
      return qo(l, t, e);
    },
    useTransition: function() {
      var t = Uo(!1);
      return t = Gh.bind(
        null,
        vt,
        t.queue,
        !0,
        !1
      ), Ee().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var i = vt, o = Ee();
      if (Ot) {
        if (l === void 0)
          throw Error(u(407));
        l = l();
      } else {
        if (l = e(), Qt === null)
          throw Error(u(349));
        (_t & 127) !== 0 || bh(i, e, l);
      }
      o.memoizedState = l;
      var c = { value: l, getSnapshot: e };
      return o.queue = c, Nh(xh.bind(null, i, c, t), [
        t
      ]), i.flags |= 2048, fi(
        9,
        { destroy: void 0 },
        vh.bind(
          null,
          i,
          c,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = Ee(), e = Qt.identifierPrefix;
      if (Ot) {
        var l = hn, i = fn;
        l = (i & ~(1 << 32 - Xt(i) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = kr++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = D0++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Vo,
    useFormState: _h,
    useActionState: _h,
    useOptimistic: function(t) {
      var e = Ee();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Go.bind(
        null,
        vt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Ro,
    useCacheRefresh: function() {
      return Ee().memoizedState = B0.bind(
        null,
        vt
      );
    },
    useEffectEvent: function(t) {
      var e = Ee(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Ut & 2) !== 0)
          throw Error(u(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Xo = {
    readContext: pe,
    use: wr,
    useCallback: qh,
    useContext: pe,
    useEffect: Bo,
    useImperativeHandle: Hh,
    useInsertionEffect: Uh,
    useLayoutEffect: jh,
    useMemo: Yh,
    useReducer: Ar,
    useRef: Rh,
    useState: function() {
      return Ar(Tn);
    },
    useDebugValue: Ho,
    useDeferredValue: function(t, e) {
      var l = ee();
      return Vh(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ar(Tn)[0], e = ee().memoizedState;
      return [
        typeof t == "boolean" ? t : ia(t),
        e
      ];
    },
    useSyncExternalStore: yh,
    useId: Zh,
    useHostTransitionStatus: Vo,
    useFormState: Mh,
    useActionState: Mh,
    useOptimistic: function(t, e) {
      var l = ee();
      return Eh(l, qt, t, e);
    },
    useMemoCache: Ro,
    useCacheRefresh: Kh
  };
  Xo.useEffectEvent = Lh;
  var Wh = {
    readContext: pe,
    use: wr,
    useCallback: qh,
    useContext: pe,
    useEffect: Bo,
    useImperativeHandle: Hh,
    useInsertionEffect: Uh,
    useLayoutEffect: jh,
    useMemo: Yh,
    useReducer: Lo,
    useRef: Rh,
    useState: function() {
      return Lo(Tn);
    },
    useDebugValue: Ho,
    useDeferredValue: function(t, e) {
      var l = ee();
      return qt === null ? qo(l, t, e) : Vh(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Lo(Tn)[0], e = ee().memoizedState;
      return [
        typeof t == "boolean" ? t : ia(t),
        e
      ];
    },
    useSyncExternalStore: yh,
    useId: Zh,
    useHostTransitionStatus: Vo,
    useFormState: Dh,
    useActionState: Dh,
    useOptimistic: function(t, e) {
      var l = ee();
      return qt !== null ? Eh(l, qt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Ro,
    useCacheRefresh: Kh
  };
  Wh.useEffectEvent = Lh;
  function Qo(t, e, l, i) {
    e = t.memoizedState, l = l(i, e), l = l == null ? e : y({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Zo = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var i = Ge(), o = Kn(i);
      o.payload = e, l != null && (o.callback = l), e = Fn(t, o, i), e !== null && (De(e, t, i), ta(e, t, i));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var i = Ge(), o = Kn(i);
      o.tag = 1, o.payload = e, l != null && (o.callback = l), e = Fn(t, o, i), e !== null && (De(e, t, i), ta(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ge(), i = Kn(l);
      i.tag = 2, e != null && (i.callback = e), e = Fn(t, i, l), e !== null && (De(e, t, l), ta(e, t, l));
    }
  };
  function Ph(t, e, l, i, o, c, g) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, c, g) : e.prototype && e.prototype.isPureReactComponent ? !Zi(l, i) || !Zi(o, c) : !0;
  }
  function td(t, e, l, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, i), e.state !== t && Zo.enqueueReplaceState(e, e.state, null);
  }
  function Cl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var i in e)
        i !== "ref" && (l[i] = e[i]);
    }
    if (t = t.defaultProps) {
      l === e && (l = y({}, l));
      for (var o in t)
        l[o] === void 0 && (l[o] = t[o]);
    }
    return l;
  }
  function ed(t) {
    rr(t);
  }
  function nd(t) {
    console.error(t);
  }
  function ld(t) {
    rr(t);
  }
  function _r(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function id(t, e, l) {
    try {
      var i = t.onCaughtError;
      i(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Ko(t, e, l) {
    return l = Kn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      _r(t, e);
    }, l;
  }
  function ad(t) {
    return t = Kn(t), t.tag = 3, t;
  }
  function rd(t, e, l, i) {
    var o = l.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = i.value;
      t.payload = function() {
        return o(c);
      }, t.callback = function() {
        id(e, l, i);
      };
    }
    var g = l.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
      id(e, l, i), typeof o != "function" && (tl === null ? tl = /* @__PURE__ */ new Set([this]) : tl.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function q0(t, e, l, i, o) {
    if (l.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = l.alternate, e !== null && li(
        e,
        l,
        o,
        !0
      ), l = He.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return tn === null ? Yr() : l.alternate === null && Pt === 0 && (Pt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, i === gr ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), bc(t, i, o)), !1;
          case 22:
            return l.flags |= 65536, i === gr ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : l.add(i)), bc(t, i, o)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return bc(t, i, o), Yr(), !1;
    }
    if (Ot)
      return e = He.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, i !== fo && (t = Error(u(422), { cause: i }), Ji(Ie(t, l)))) : (i !== fo && (e = Error(u(423), {
        cause: i
      }), Ji(
        Ie(e, l)
      )), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, i = Ie(i, l), o = Ko(
        t.stateNode,
        i,
        o
      ), Eo(t, o), Pt !== 4 && (Pt = 2)), !1;
    var c = Error(u(520), { cause: i });
    if (c = Ie(c, l), ma === null ? ma = [c] : ma.push(c), Pt !== 4 && (Pt = 2), e === null) return !0;
    i = Ie(i, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = o & -o, l.lanes |= t, t = Ko(l.stateNode, i, t), Eo(l, t), !1;
        case 1:
          if (e = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (tl === null || !tl.has(c))))
            return l.flags |= 65536, o &= -o, l.lanes |= o, o = ad(o), rd(
              o,
              t,
              l,
              i
            ), Eo(l, o), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Fo = Error(u(461)), ie = !1;
  function ge(t, e, l, i) {
    e.child = t === null ? sh(e, null, l, i) : zl(
      e,
      t.child,
      l,
      i
    );
  }
  function ud(t, e, l, i, o) {
    l = l.render;
    var c = e.ref;
    if ("ref" in i) {
      var g = {};
      for (var v in i)
        v !== "ref" && (g[v] = i[v]);
    } else g = i;
    return kl(e), i = _o(
      t,
      e,
      l,
      g,
      c,
      o
    ), v = Mo(), t !== null && !ie ? (Oo(t, e, o), Cn(t, e, o)) : (Ot && v && co(e), e.flags |= 1, ge(t, e, i, o), e.child);
  }
  function od(t, e, l, i, o) {
    if (t === null) {
      var c = l.type;
      return typeof c == "function" && !ro(c) && c.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = c, cd(
        t,
        e,
        c,
        i,
        o
      )) : (t = sr(
        l.type,
        null,
        i,
        e,
        e.mode,
        o
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !nc(t, o)) {
      var g = c.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zi, l(g, i) && t.ref === e.ref)
        return Cn(t, e, o);
    }
    return e.flags |= 1, t = kn(c, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function cd(t, e, l, i, o) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Zi(c, i) && t.ref === e.ref)
        if (ie = !1, e.pendingProps = i = c, nc(t, o))
          (t.flags & 131072) !== 0 && (ie = !0);
        else
          return e.lanes = t.lanes, Cn(t, e, o);
    }
    return Jo(
      t,
      e,
      l,
      i,
      o
    );
  }
  function sd(t, e, l, i) {
    var o = i.children, c = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | l : l, t !== null) {
          for (i = e.child = t.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~c;
        } else i = 0, e.child = null;
        return fd(
          t,
          e,
          c,
          l,
          i
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && mr(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? dh(e, c) : Ao(), mh(e);
      else
        return i = e.lanes = 536870912, fd(
          t,
          e,
          c !== null ? c.baseLanes | l : l,
          l,
          i
        );
    } else
      c !== null ? (mr(e, c.cachePool), dh(e, c), In(), e.memoizedState = null) : (t !== null && mr(e, null), Ao(), In());
    return ge(t, e, o, l), e.child;
  }
  function ua(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function fd(t, e, l, i, o) {
    var c = vo();
    return c = c === null ? null : { parent: ne._currentValue, pool: c }, e.memoizedState = {
      baseLanes: l,
      cachePool: c
    }, t !== null && mr(e, null), Ao(), mh(e), t !== null && li(t, e, i, !0), e.childLanes = o, null;
  }
  function Mr(t, e) {
    return e = Dr(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function hd(t, e, l) {
    return zl(e, t.child, null, l), t = Mr(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function Y0(t, e, l) {
    var i = e.pendingProps, o = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Ot) {
        if (i.mode === "hidden")
          return t = Mr(e, i), e.lanes = 536870912, ua(null, t);
        if (To(e), (t = Ft) ? (t = wm(
          t,
          Pe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Vn !== null ? { id: fn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Jf(t), l.return = e, e.child = l, me = e, Ft = null)) : t = null, t === null) throw Xn(e);
        return e.lanes = 536870912, null;
      }
      return Mr(e, i);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var g = c.dehydrated;
      if (To(e), o)
        if (e.flags & 256)
          e.flags &= -257, e = hd(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
      else if (ie || li(t, e, l, !1), o = (l & t.childLanes) !== 0, ie || o) {
        if (i = Qt, i !== null && (g = ef(i, l), g !== 0 && g !== c.retryLane))
          throw c.retryLane = g, bl(t, g), De(i, t, g), Fo;
        Yr(), e = hd(
          t,
          e,
          l
        );
      } else
        t = c.treeContext, Ft = en(g.nextSibling), me = e, Ot = !0, Gn = null, Pe = !1, t !== null && Wf(e, t), e = Mr(e, i), e.flags |= 4096;
      return e;
    }
    return t = kn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Or(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(u(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Jo(t, e, l, i, o) {
    return kl(e), l = _o(
      t,
      e,
      l,
      i,
      void 0,
      o
    ), i = Mo(), t !== null && !ie ? (Oo(t, e, o), Cn(t, e, o)) : (Ot && i && co(e), e.flags |= 1, ge(t, e, l, o), e.child);
  }
  function dd(t, e, l, i, o, c) {
    return kl(e), e.updateQueue = null, l = gh(
      e,
      i,
      l,
      o
    ), ph(t), i = Mo(), t !== null && !ie ? (Oo(t, e, c), Cn(t, e, c)) : (Ot && i && co(e), e.flags |= 1, ge(t, e, l, c), e.child);
  }
  function md(t, e, l, i, o) {
    if (kl(e), e.stateNode === null) {
      var c = Pl, g = l.contextType;
      typeof g == "object" && g !== null && (c = pe(g)), c = new l(i, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Zo, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = i, c.state = e.memoizedState, c.refs = {}, So(e), g = l.contextType, c.context = typeof g == "object" && g !== null ? pe(g) : Pl, c.state = e.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (Qo(
        e,
        l,
        g,
        i
      ), c.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), g !== c.state && Zo.enqueueReplaceState(c, c.state, null), na(e, i, c, o), ea(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps, w = Cl(l, v);
      c.props = w;
      var D = c.context, q = l.contextType;
      g = Pl, typeof q == "object" && q !== null && (g = pe(q));
      var X = l.getDerivedStateFromProps;
      q = typeof X == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || D !== g) && td(
        e,
        c,
        i,
        g
      ), Zn = !1;
      var N = e.memoizedState;
      c.state = N, na(e, i, c, o), ea(), D = e.memoizedState, v || N !== D || Zn ? (typeof X == "function" && (Qo(
        e,
        l,
        X,
        i
      ), D = e.memoizedState), (w = Zn || Ph(
        e,
        l,
        w,
        i,
        N,
        D,
        g
      )) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = D), c.props = i, c.state = D, c.context = g, i = w) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      c = e.stateNode, ko(t, e), g = e.memoizedProps, q = Cl(l, g), c.props = q, X = e.pendingProps, N = c.context, D = l.contextType, w = Pl, typeof D == "object" && D !== null && (w = pe(D)), v = l.getDerivedStateFromProps, (D = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== X || N !== w) && td(
        e,
        c,
        i,
        w
      ), Zn = !1, N = e.memoizedState, c.state = N, na(e, i, c, o), ea();
      var j = e.memoizedState;
      g !== X || N !== j || Zn || t !== null && t.dependencies !== null && hr(t.dependencies) ? (typeof v == "function" && (Qo(
        e,
        l,
        v,
        i
      ), j = e.memoizedState), (q = Zn || Ph(
        e,
        l,
        q,
        i,
        N,
        j,
        w
      ) || t !== null && t.dependencies !== null && hr(t.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, j, w), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        i,
        j,
        w
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = j), c.props = i, c.state = j, c.context = w, i = q) : (typeof c.componentDidUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return c = i, Or(t, e), i = (e.flags & 128) !== 0, c || i ? (c = e.stateNode, l = i && typeof l.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && i ? (e.child = zl(
      e,
      t.child,
      null,
      o
    ), e.child = zl(
      e,
      null,
      l,
      o
    )) : ge(t, e, l, o), e.memoizedState = c.state, t = e.child) : t = Cn(
      t,
      e,
      o
    ), t;
  }
  function pd(t, e, l, i) {
    return xl(), e.flags |= 256, ge(t, e, l, i), e.child;
  }
  var Io = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $o(t) {
    return { baseLanes: t, cachePool: ih() };
  }
  function Wo(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ve), t;
  }
  function gd(t, e, l) {
    var i = e.pendingProps, o = !1, c = (e.flags & 128) !== 0, g;
    if ((g = c) || (g = t !== null && t.memoizedState === null ? !1 : (te.current & 2) !== 0), g && (o = !0, e.flags &= -129), g = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ot) {
        if (o ? Jn(e) : In(), (t = Ft) ? (t = wm(
          t,
          Pe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Vn !== null ? { id: fn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Jf(t), l.return = e, e.child = l, me = e, Ft = null)) : t = null, t === null) throw Xn(e);
        return Nc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, o ? (In(), o = e.mode, v = Dr(
        { mode: "hidden", children: v },
        o
      ), i = vl(
        i,
        o,
        l,
        null
      ), v.return = e, i.return = e, v.sibling = i, e.child = v, i = e.child, i.memoizedState = $o(l), i.childLanes = Wo(
        t,
        g,
        l
      ), e.memoizedState = Io, ua(null, i)) : (Jn(e), Po(e, v));
    }
    var w = t.memoizedState;
    if (w !== null && (v = w.dehydrated, v !== null)) {
      if (c)
        e.flags & 256 ? (Jn(e), e.flags &= -257, e = tc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (In(), e.child = t.child, e.flags |= 128, e = null) : (In(), v = i.fallback, o = e.mode, i = Dr(
          { mode: "visible", children: i.children },
          o
        ), v = vl(
          v,
          o,
          l,
          null
        ), v.flags |= 2, i.return = e, v.return = e, i.sibling = v, e.child = i, zl(
          e,
          t.child,
          null,
          l
        ), i = e.child, i.memoizedState = $o(l), i.childLanes = Wo(
          t,
          g,
          l
        ), e.memoizedState = Io, e = ua(null, i));
      else if (Jn(e), Nc(v)) {
        if (g = v.nextSibling && v.nextSibling.dataset, g) var D = g.dgst;
        g = D, i = Error(u(419)), i.stack = "", i.digest = g, Ji({ value: i, source: null, stack: null }), e = tc(
          t,
          e,
          l
        );
      } else if (ie || li(t, e, l, !1), g = (l & t.childLanes) !== 0, ie || g) {
        if (g = Qt, g !== null && (i = ef(g, l), i !== 0 && i !== w.retryLane))
          throw w.retryLane = i, bl(t, i), De(g, t, i), Fo;
        Rc(v) || Yr(), e = tc(
          t,
          e,
          l
        );
      } else
        Rc(v) ? (e.flags |= 192, e.child = t.child, e = null) : (t = w.treeContext, Ft = en(
          v.nextSibling
        ), me = e, Ot = !0, Gn = null, Pe = !1, t !== null && Wf(e, t), e = Po(
          e,
          i.children
        ), e.flags |= 4096);
      return e;
    }
    return o ? (In(), v = i.fallback, o = e.mode, w = t.child, D = w.sibling, i = kn(w, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = w.subtreeFlags & 65011712, D !== null ? v = kn(
      D,
      v
    ) : (v = vl(
      v,
      o,
      l,
      null
    ), v.flags |= 2), v.return = e, i.return = e, i.sibling = v, e.child = i, ua(null, i), i = e.child, v = t.child.memoizedState, v === null ? v = $o(l) : (o = v.cachePool, o !== null ? (w = ne._currentValue, o = o.parent !== w ? { parent: w, pool: w } : o) : o = ih(), v = {
      baseLanes: v.baseLanes | l,
      cachePool: o
    }), i.memoizedState = v, i.childLanes = Wo(
      t,
      g,
      l
    ), e.memoizedState = Io, ua(t.child, i)) : (Jn(e), l = t.child, t = l.sibling, l = kn(l, {
      mode: "visible",
      children: i.children
    }), l.return = e, l.sibling = null, t !== null && (g = e.deletions, g === null ? (e.deletions = [t], e.flags |= 16) : g.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Po(t, e) {
    return e = Dr(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Dr(t, e) {
    return t = Be(22, t, null, e), t.lanes = 0, t;
  }
  function tc(t, e, l) {
    return zl(e, t.child, null, l), t = Po(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function yd(t, e, l) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), po(t.return, e, l);
  }
  function ec(t, e, l, i, o, c) {
    var g = t.memoizedState;
    g === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: l,
      tailMode: o,
      treeForkCount: c
    } : (g.isBackwards = e, g.rendering = null, g.renderingStartTime = 0, g.last = i, g.tail = l, g.tailMode = o, g.treeForkCount = c);
  }
  function bd(t, e, l) {
    var i = e.pendingProps, o = i.revealOrder, c = i.tail;
    i = i.children;
    var g = te.current, v = (g & 2) !== 0;
    if (v ? (g = g & 1 | 2, e.flags |= 128) : g &= 1, k(te, g), ge(t, e, i, l), i = Ot ? Fi : 0, !v && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && yd(t, l, e);
        else if (t.tag === 19)
          yd(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (o) {
      case "forwards":
        for (l = e.child, o = null; l !== null; )
          t = l.alternate, t !== null && xr(t) === null && (o = l), l = l.sibling;
        l = o, l === null ? (o = e.child, e.child = null) : (o = l.sibling, l.sibling = null), ec(
          e,
          !1,
          o,
          l,
          c,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, o = e.child, e.child = null; o !== null; ) {
          if (t = o.alternate, t !== null && xr(t) === null) {
            e.child = o;
            break;
          }
          t = o.sibling, o.sibling = l, l = o, o = t;
        }
        ec(
          e,
          !0,
          l,
          null,
          c,
          i
        );
        break;
      case "together":
        ec(
          e,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Cn(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Pn |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (li(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, l = kn(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = kn(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function nc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && hr(t)));
  }
  function V0(t, e, l) {
    switch (e.tag) {
      case 3:
        Gt(e, e.stateNode.containerInfo), Qn(e, ne, t.memoizedState.cache), xl();
        break;
      case 27:
      case 5:
        he(e);
        break;
      case 4:
        Gt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Qn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, To(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Jn(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? gd(t, e, l) : (Jn(e), t = Cn(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Jn(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (i = (l & e.childLanes) !== 0, i || (li(
          t,
          e,
          l,
          !1
        ), i = (l & e.childLanes) !== 0), o) {
          if (i)
            return bd(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), k(te, te.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, sd(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Qn(e, ne, t.memoizedState.cache);
    }
    return Cn(t, e, l);
  }
  function vd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ie = !0;
      else {
        if (!nc(t, l) && (e.flags & 128) === 0)
          return ie = !1, V0(
            t,
            e,
            l
          );
        ie = (t.flags & 131072) !== 0;
      }
    else
      ie = !1, Ot && (e.flags & 1048576) !== 0 && $f(e, Fi, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = wl(e.elementType), e.type = t, typeof t == "function")
            ro(t) ? (i = Cl(t, i), e.tag = 1, e = md(
              null,
              e,
              t,
              i,
              l
            )) : (e.tag = 0, e = Jo(
              null,
              e,
              t,
              i,
              l
            ));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === lt) {
                e.tag = 11, e = ud(
                  null,
                  e,
                  t,
                  i,
                  l
                );
                break t;
              } else if (o === P) {
                e.tag = 14, e = od(
                  null,
                  e,
                  t,
                  i,
                  l
                );
                break t;
              }
            }
            throw e = it(t) || t, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Jo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return i = e.type, o = Cl(
          i,
          e.pendingProps
        ), md(
          t,
          e,
          i,
          o,
          l
        );
      case 3:
        t: {
          if (Gt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(u(387));
          i = e.pendingProps;
          var c = e.memoizedState;
          o = c.element, ko(t, e), na(e, i, null, l);
          var g = e.memoizedState;
          if (i = g.cache, Qn(e, ne, i), i !== c.cache && go(
            e,
            [ne],
            l,
            !0
          ), ea(), i = g.element, c.isDehydrated)
            if (c = {
              element: i,
              isDehydrated: !1,
              cache: g.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = pd(
                t,
                e,
                i,
                l
              );
              break t;
            } else if (i !== o) {
              o = Ie(
                Error(u(424)),
                e
              ), Ji(o), e = pd(
                t,
                e,
                i,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ft = en(t.firstChild), me = e, Ot = !0, Gn = null, Pe = !0, l = sh(
                e,
                null,
                i,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (xl(), i === o) {
              e = Cn(
                t,
                e,
                l
              );
              break t;
            }
            ge(t, e, i, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Or(t, e), t === null ? (l = Mm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : Ot || (l = e.type, t = e.pendingProps, i = Fr(
          st.current
        ).createElement(l), i[de] = e, i[ze] = t, ye(i, l, t), se(i), e.stateNode = i) : e.memoizedState = Mm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return he(e), t === null && Ot && (i = e.stateNode = Tm(
          e.type,
          e.pendingProps,
          st.current
        ), me = e, Pe = !0, o = Ft, il(e.type) ? (Lc = o, Ft = en(i.firstChild)) : Ft = o), ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), Or(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Ot && ((o = i = Ft) && (i = bb(
          i,
          e.type,
          e.pendingProps,
          Pe
        ), i !== null ? (e.stateNode = i, me = e, Ft = en(i.firstChild), Pe = !1, o = !0) : o = !1), o || Xn(e)), he(e), o = e.type, c = e.pendingProps, g = t !== null ? t.memoizedProps : null, i = c.children, Mc(o, c) ? i = null : g !== null && Mc(o, g) && (e.flags |= 32), e.memoizedState !== null && (o = _o(
          t,
          e,
          R0,
          null,
          null,
          l
        ), ka._currentValue = o), Or(t, e), ge(t, e, i, l), e.child;
      case 6:
        return t === null && Ot && ((t = l = Ft) && (l = vb(
          l,
          e.pendingProps,
          Pe
        ), l !== null ? (e.stateNode = l, me = e, Ft = null, t = !0) : t = !1), t || Xn(e)), null;
      case 13:
        return gd(t, e, l);
      case 4:
        return Gt(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = zl(
          e,
          null,
          i,
          l
        ) : ge(t, e, i, l), e.child;
      case 11:
        return ud(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return ge(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return i = e.pendingProps, Qn(e, e.type, i.value), ge(t, e, i.children, l), e.child;
      case 9:
        return o = e.type._context, i = e.pendingProps.children, kl(e), o = pe(o), i = i(o), e.flags |= 1, ge(t, e, i, l), e.child;
      case 14:
        return od(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return cd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return bd(t, e, l);
      case 31:
        return Y0(t, e, l);
      case 22:
        return sd(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return kl(e), i = pe(ne), t === null ? (o = vo(), o === null && (o = Qt, c = yo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= l), o = c), e.memoizedState = { parent: i, cache: o }, So(e), Qn(e, ne, o)) : ((t.lanes & l) !== 0 && (ko(t, e), na(e, null, null, l), ea()), o = t.memoizedState, c = e.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Qn(e, ne, i)) : (i = c.cache, Qn(e, ne, i), i !== o.cache && go(
          e,
          [ne],
          l,
          !0
        ))), ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function _n(t) {
    t.flags |= 4;
  }
  function lc(t, e, l, i, o) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (o & 335544128) === o)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Zd()) t.flags |= 8192;
        else
          throw Al = gr, xo;
    } else t.flags &= -16777217;
  }
  function xd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Lm(e))
      if (Zd()) t.flags |= 8192;
      else
        throw Al = gr, xo;
  }
  function Rr(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ws() : 536870912, t.lanes |= e, pi |= e);
  }
  function oa(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var i = null; l !== null; )
            l.alternate !== null && (i = l), l = l.sibling;
          i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
      }
  }
  function Jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, i = 0;
    if (e)
      for (var o = t.child; o !== null; )
        l |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = t, o = o.sibling;
    else
      for (o = t.child; o !== null; )
        l |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= i, t.childLanes = l, e;
  }
  function G0(t, e, l) {
    var i = e.pendingProps;
    switch (so(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jt(e), null;
      case 1:
        return Jt(e), null;
      case 3:
        return l = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), An(ne), Rt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ni(e) ? _n(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ho())), Jt(e), null;
      case 26:
        var o = e.type, c = e.memoizedState;
        return t === null ? (_n(e), c !== null ? (Jt(e), xd(e, c)) : (Jt(e), lc(
          e,
          o,
          null,
          i,
          l
        ))) : c ? c !== t.memoizedState ? (_n(e), Jt(e), xd(e, c)) : (Jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && _n(e), Jt(e), lc(
          e,
          o,
          t,
          i,
          l
        )), null;
      case 27:
        if (Le(e), l = st.current, o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && _n(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return Jt(e), null;
          }
          t = $.current, ni(e) ? Pf(e) : (t = Tm(o, i, l), e.stateNode = t, _n(e));
        }
        return Jt(e), null;
      case 5:
        if (Le(e), o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && _n(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return Jt(e), null;
          }
          if (c = $.current, ni(e))
            Pf(e);
          else {
            var g = Fr(
              st.current
            );
            switch (c) {
              case 1:
                c = g.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                c = g.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    c = g.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    c = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    c = g.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof i.is == "string" ? g.createElement("select", {
                      is: i.is
                    }) : g.createElement("select"), i.multiple ? c.multiple = !0 : i.size && (c.size = i.size);
                    break;
                  default:
                    c = typeof i.is == "string" ? g.createElement(o, { is: i.is }) : g.createElement(o);
                }
            }
            c[de] = e, c[ze] = i;
            t: for (g = e.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6)
                c.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === e) break t;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === e)
                  break t;
                g = g.return;
              }
              g.sibling.return = g.return, g = g.sibling;
            }
            e.stateNode = c;
            t: switch (ye(c, o, i), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && _n(e);
          }
        }
        return Jt(e), lc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && _n(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(u(166));
          if (t = st.current, ni(e)) {
            if (t = e.stateNode, l = e.memoizedProps, i = null, o = me, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            t[de] = e, t = !!(t.nodeValue === l || i !== null && i.suppressHydrationWarning === !0 || gm(t.nodeValue, l)), t || Xn(e, !0);
          } else
            t = Fr(t).createTextNode(
              i
            ), t[de] = e, e.stateNode = t;
        }
        return Jt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = ni(e), l !== null) {
            if (t === null) {
              if (!i) throw Error(u(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[de] = e;
            } else
              xl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), t = !1;
          } else
            l = ho(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Jt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = ni(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(u(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[de] = e;
            } else
              xl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), o = !1;
          } else
            o = ho(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = i !== null, t = t !== null && t.memoizedState !== null, l && (i = e.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), c = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool), c !== o && (i.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Rr(e, e.updateQueue), Jt(e), null);
      case 4:
        return Rt(), t === null && Ac(e.stateNode.containerInfo), Jt(e), null;
      case 10:
        return An(e.type), Jt(e), null;
      case 19:
        if (Y(te), i = e.memoizedState, i === null) return Jt(e), null;
        if (o = (e.flags & 128) !== 0, c = i.rendering, c === null)
          if (o) oa(i, !1);
          else {
            if (Pt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = xr(t), c !== null) {
                  for (e.flags |= 128, oa(i, !1), t = c.updateQueue, e.updateQueue = t, Rr(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Ff(l, t), l = l.sibling;
                  return k(
                    te,
                    te.current & 1 | 2
                  ), Ot && En(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && Se() > Br && (e.flags |= 128, o = !0, oa(i, !1), e.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = xr(c), t !== null) {
              if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Rr(e, t), oa(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !Ot)
                return Jt(e), null;
            } else
              2 * Se() - i.renderingStartTime > Br && l !== 536870912 && (e.flags |= 128, o = !0, oa(i, !1), e.lanes = 4194304);
          i.isBackwards ? (c.sibling = e.child, e.child = c) : (t = i.last, t !== null ? t.sibling = c : e.child = c, i.last = c);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Se(), t.sibling = null, l = te.current, k(
          te,
          o ? l & 1 | 2 : l & 1
        ), Ot && En(e, i.treeForkCount), t) : (Jt(e), null);
      case 22:
      case 23:
        return qe(e), zo(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Jt(e), l = e.updateQueue, l !== null && Rr(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== l && (e.flags |= 2048), t !== null && Y(El), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), An(ne), Jt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function X0(t, e) {
    switch (so(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return An(ne), Rt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Le(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (qe(e), e.alternate === null)
            throw Error(u(340));
          xl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(u(340));
          xl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Y(te), null;
      case 4:
        return Rt(), null;
      case 10:
        return An(e.type), null;
      case 22:
      case 23:
        return qe(e), zo(), t !== null && Y(El), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return An(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sd(t, e) {
    switch (so(e), e.tag) {
      case 3:
        An(ne), Rt();
        break;
      case 26:
      case 27:
      case 5:
        Le(e);
        break;
      case 4:
        Rt();
        break;
      case 31:
        e.memoizedState !== null && qe(e);
        break;
      case 13:
        qe(e);
        break;
      case 19:
        Y(te);
        break;
      case 10:
        An(e.type);
        break;
      case 22:
      case 23:
        qe(e), zo(), t !== null && Y(El);
        break;
      case 24:
        An(ne);
    }
  }
  function ca(t, e) {
    try {
      var l = e.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            i = void 0;
            var c = l.create, g = l.inst;
            i = c(), g.destroy = i;
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (v) {
      Ht(e, e.return, v);
    }
  }
  function $n(t, e, l) {
    try {
      var i = e.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        i = c;
        do {
          if ((i.tag & t) === t) {
            var g = i.inst, v = g.destroy;
            if (v !== void 0) {
              g.destroy = void 0, o = e;
              var w = l, D = v;
              try {
                D();
              } catch (q) {
                Ht(
                  o,
                  w,
                  q
                );
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (q) {
      Ht(e, e.return, q);
    }
  }
  function kd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        hh(e, l);
      } catch (i) {
        Ht(t, t.return, i);
      }
    }
  }
  function Ed(t, e, l) {
    l.props = Cl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (i) {
      Ht(t, e, i);
    }
  }
  function sa(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(i) : l.current = i;
      }
    } catch (o) {
      Ht(t, e, o);
    }
  }
  function dn(t, e) {
    var l = t.ref, i = t.refCleanup;
    if (l !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Ht(t, e, o);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Ht(t, e, o);
        }
      else l.current = null;
  }
  function wd(t) {
    var e = t.type, l = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && i.focus();
          break t;
        case "img":
          l.src ? i.src = l.src : l.srcSet && (i.srcset = l.srcSet);
      }
    } catch (o) {
      Ht(t, t.return, o);
    }
  }
  function ic(t, e, l) {
    try {
      var i = t.stateNode;
      hb(i, t.type, l, e), i[ze] = e;
    } catch (o) {
      Ht(t, t.return, o);
    }
  }
  function Ad(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && il(t.type) || t.tag === 4;
  }
  function ac(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ad(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && il(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function rc(t, e, l) {
    var i = t.tag;
    if (i === 5 || i === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = xn));
    else if (i !== 4 && (i === 27 && il(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (rc(t, e, l), t = t.sibling; t !== null; )
        rc(t, e, l), t = t.sibling;
  }
  function Nr(t, e, l) {
    var i = t.tag;
    if (i === 5 || i === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (i !== 4 && (i === 27 && il(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Nr(t, e, l), t = t.sibling; t !== null; )
        Nr(t, e, l), t = t.sibling;
  }
  function zd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var i = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      ye(e, i, l), e[de] = t, e[ze] = l;
    } catch (c) {
      Ht(t, t.return, c);
    }
  }
  var Mn = !1, ae = !1, uc = !1, Td = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function Q0(t, e) {
    if (t = t.containerInfo, Cc = eu, t = Hf(t), Pu(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var i = l.getSelection && l.getSelection();
          if (i && i.rangeCount !== 0) {
            l = i.anchorNode;
            var o = i.anchorOffset, c = i.focusNode;
            i = i.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break t;
            }
            var g = 0, v = -1, w = -1, D = 0, q = 0, X = t, N = null;
            e: for (; ; ) {
              for (var j; X !== l || o !== 0 && X.nodeType !== 3 || (v = g + o), X !== c || i !== 0 && X.nodeType !== 3 || (w = g + i), X.nodeType === 3 && (g += X.nodeValue.length), (j = X.firstChild) !== null; )
                N = X, X = j;
              for (; ; ) {
                if (X === t) break e;
                if (N === l && ++D === o && (v = g), N === c && ++q === i && (w = g), (j = X.nextSibling) !== null) break;
                X = N, N = X.parentNode;
              }
              X = j;
            }
            l = v === -1 || w === -1 ? null : { start: v, end: w };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_c = { focusedElem: t, selectionRange: l }, eu = !1, fe = e; fe !== null; )
      if (e = fe, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, fe = t;
      else
        for (; fe !== null; ) {
          switch (e = fe, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  o = t[l], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                t = void 0, l = e, o = c.memoizedProps, c = c.memoizedState, i = l.stateNode;
                try {
                  var at = Cl(
                    l.type,
                    o
                  );
                  t = i.getSnapshotBeforeUpdate(
                    at,
                    c
                  ), i.__reactInternalSnapshotBeforeUpdate = t;
                } catch (gt) {
                  Ht(
                    l,
                    l.return,
                    gt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Dc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Dc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, fe = t;
            break;
          }
          fe = e.return;
        }
  }
  function Cd(t, e, l) {
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Dn(t, l), i & 4 && ca(5, l);
        break;
      case 1:
        if (Dn(t, l), i & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (g) {
              Ht(l, l.return, g);
            }
          else {
            var o = Cl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                o,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (g) {
              Ht(
                l,
                l.return,
                g
              );
            }
          }
        i & 64 && kd(l), i & 512 && sa(l, l.return);
        break;
      case 3:
        if (Dn(t, l), i & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            hh(t, e);
          } catch (g) {
            Ht(l, l.return, g);
          }
        }
        break;
      case 27:
        e === null && i & 4 && zd(l);
      case 26:
      case 5:
        Dn(t, l), e === null && i & 4 && wd(l), i & 512 && sa(l, l.return);
        break;
      case 12:
        Dn(t, l);
        break;
      case 31:
        Dn(t, l), i & 4 && Od(t, l);
        break;
      case 13:
        Dn(t, l), i & 4 && Dd(t, l), i & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = tb.bind(
          null,
          l
        ), xb(t, l))));
        break;
      case 22:
        if (i = l.memoizedState !== null || Mn, !i) {
          e = e !== null && e.memoizedState !== null || ae, o = Mn;
          var c = ae;
          Mn = i, (ae = e) && !c ? Rn(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Dn(t, l), Mn = o, ae = c;
        }
        break;
      case 30:
        break;
      default:
        Dn(t, l);
    }
  }
  function _d(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _d(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Uu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var It = null, Ce = !1;
  function On(t, e, l) {
    for (l = l.child; l !== null; )
      Md(t, e, l), l = l.sibling;
  }
  function Md(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == "function")
      try {
        ue.onCommitFiberUnmount(ke, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        ae || dn(l, e), On(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        ae || dn(l, e);
        var i = It, o = Ce;
        il(l.type) && (It = l.stateNode, Ce = !1), On(
          t,
          e,
          l
        ), va(l.stateNode), It = i, Ce = o;
        break;
      case 5:
        ae || dn(l, e);
      case 6:
        if (i = It, o = Ce, It = null, On(
          t,
          e,
          l
        ), It = i, Ce = o, It !== null)
          if (Ce)
            try {
              (It.nodeType === 9 ? It.body : It.nodeName === "HTML" ? It.ownerDocument.body : It).removeChild(l.stateNode);
            } catch (c) {
              Ht(
                l,
                e,
                c
              );
            }
          else
            try {
              It.removeChild(l.stateNode);
            } catch (c) {
              Ht(
                l,
                e,
                c
              );
            }
        break;
      case 18:
        It !== null && (Ce ? (t = It, km(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ei(t)) : km(It, l.stateNode));
        break;
      case 4:
        i = It, o = Ce, It = l.stateNode.containerInfo, Ce = !0, On(
          t,
          e,
          l
        ), It = i, Ce = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $n(2, l, e), ae || $n(4, l, e), On(
          t,
          e,
          l
        );
        break;
      case 1:
        ae || (dn(l, e), i = l.stateNode, typeof i.componentWillUnmount == "function" && Ed(
          l,
          e,
          i
        )), On(
          t,
          e,
          l
        );
        break;
      case 21:
        On(
          t,
          e,
          l
        );
        break;
      case 22:
        ae = (i = ae) || l.memoizedState !== null, On(
          t,
          e,
          l
        ), ae = i;
        break;
      default:
        On(
          t,
          e,
          l
        );
    }
  }
  function Od(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ei(t);
      } catch (l) {
        Ht(e, e.return, l);
      }
    }
  }
  function Dd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ei(t);
      } catch (l) {
        Ht(e, e.return, l);
      }
  }
  function Z0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Td()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Td()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Lr(t, e) {
    var l = Z0(t);
    e.forEach(function(i) {
      if (!l.has(i)) {
        l.add(i);
        var o = eb.bind(null, t, i);
        i.then(o, o);
      }
    });
  }
  function _e(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var i = 0; i < l.length; i++) {
        var o = l[i], c = t, g = e, v = g;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (il(v.type)) {
                It = v.stateNode, Ce = !1;
                break t;
              }
              break;
            case 5:
              It = v.stateNode, Ce = !1;
              break t;
            case 3:
            case 4:
              It = v.stateNode.containerInfo, Ce = !0;
              break t;
          }
          v = v.return;
        }
        if (It === null) throw Error(u(160));
        Md(c, g, o), It = null, Ce = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Rd(e, t), e = e.sibling;
  }
  var un = null;
  function Rd(t, e) {
    var l = t.alternate, i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _e(e, t), Me(t), i & 4 && ($n(3, t, t.return), ca(3, t), $n(5, t, t.return));
        break;
      case 1:
        _e(e, t), Me(t), i & 512 && (ae || l === null || dn(l, l.return)), i & 64 && Mn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? i : l.concat(i))));
        break;
      case 26:
        var o = un;
        if (_e(e, t), Me(t), i & 512 && (ae || l === null || dn(l, l.return)), i & 4) {
          var c = l !== null ? l.memoizedState : null;
          if (i = t.memoizedState, l === null)
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  i = t.type, l = t.memoizedProps, o = o.ownerDocument || o;
                  e: switch (i) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[ji] || c[de] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(i), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), ye(c, i, l), c[de] = t, se(c), i = c;
                      break t;
                    case "link":
                      var g = Rm(
                        "link",
                        "href",
                        o
                      ).get(i + (l.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (c = g[v], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      c = o.createElement(i), ye(c, i, l), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (g = Rm(
                        "meta",
                        "content",
                        o
                      ).get(i + (l.content || ""))) {
                        for (v = 0; v < g.length; v++)
                          if (c = g[v], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      c = o.createElement(i), ye(c, i, l), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  c[de] = t, se(c), i = c;
                }
                t.stateNode = i;
              } else
                Nm(
                  o,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Dm(
                o,
                i,
                t.memoizedProps
              );
          else
            c !== i ? (c === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : c.count--, i === null ? Nm(
              o,
              t.type,
              t.stateNode
            ) : Dm(
              o,
              i,
              t.memoizedProps
            )) : i === null && t.stateNode !== null && ic(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        _e(e, t), Me(t), i & 512 && (ae || l === null || dn(l, l.return)), l !== null && i & 4 && ic(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (_e(e, t), Me(t), i & 512 && (ae || l === null || dn(l, l.return)), t.flags & 32) {
          o = t.stateNode;
          try {
            Zl(o, "");
          } catch (at) {
            Ht(t, t.return, at);
          }
        }
        i & 4 && t.stateNode != null && (o = t.memoizedProps, ic(
          t,
          o,
          l !== null ? l.memoizedProps : o
        )), i & 1024 && (uc = !0);
        break;
      case 6:
        if (_e(e, t), Me(t), i & 4) {
          if (t.stateNode === null)
            throw Error(u(162));
          i = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = i;
          } catch (at) {
            Ht(t, t.return, at);
          }
        }
        break;
      case 3:
        if ($r = null, o = un, un = Jr(e.containerInfo), _e(e, t), un = o, Me(t), i & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ei(e.containerInfo);
          } catch (at) {
            Ht(t, t.return, at);
          }
        uc && (uc = !1, Nd(t));
        break;
      case 4:
        i = un, un = Jr(
          t.stateNode.containerInfo
        ), _e(e, t), Me(t), un = i;
        break;
      case 12:
        _e(e, t), Me(t);
        break;
      case 31:
        _e(e, t), Me(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Lr(t, i)));
        break;
      case 13:
        _e(e, t), Me(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (jr = Se()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Lr(t, i)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var w = l !== null && l.memoizedState !== null, D = Mn, q = ae;
        if (Mn = D || o, ae = q || w, _e(e, t), ae = q, Mn = D, Me(t), i & 8192)
          t: for (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, o && (l === null || w || Mn || ae || _l(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                w = l = e;
                try {
                  if (c = w.stateNode, o)
                    g = c.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    v = w.stateNode;
                    var X = w.memoizedProps.style, N = X != null && X.hasOwnProperty("display") ? X.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (at) {
                  Ht(w, w.return, at);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                w = e;
                try {
                  w.stateNode.nodeValue = o ? "" : w.memoizedProps;
                } catch (at) {
                  Ht(w, w.return, at);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                w = e;
                try {
                  var j = w.stateNode;
                  o ? Em(j, !0) : Em(w.stateNode, !1);
                } catch (at) {
                  Ht(w, w.return, at);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        i & 4 && (i = t.updateQueue, i !== null && (l = i.retryQueue, l !== null && (i.retryQueue = null, Lr(t, l))));
        break;
      case 19:
        _e(e, t), Me(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Lr(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        _e(e, t), Me(t);
    }
  }
  function Me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, i = t.return; i !== null; ) {
          if (Ad(i)) {
            l = i;
            break;
          }
          i = i.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var o = l.stateNode, c = ac(t);
            Nr(t, c, o);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && (Zl(g, ""), l.flags &= -33);
            var v = ac(t);
            Nr(t, v, g);
            break;
          case 3:
          case 4:
            var w = l.stateNode.containerInfo, D = ac(t);
            rc(
              t,
              D,
              w
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        Ht(t, t.return, q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Nd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Nd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Dn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Cd(t, e.alternate, e), e = e.sibling;
  }
  function _l(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $n(4, e, e.return), _l(e);
          break;
        case 1:
          dn(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Ed(
            e,
            e.return,
            l
          ), _l(e);
          break;
        case 27:
          va(e.stateNode);
        case 26:
        case 5:
          dn(e, e.return), _l(e);
          break;
        case 22:
          e.memoizedState === null && _l(e);
          break;
        case 30:
          _l(e);
          break;
        default:
          _l(e);
      }
      t = t.sibling;
    }
  }
  function Rn(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate, o = t, c = e, g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Rn(
            o,
            c,
            l
          ), ca(4, c);
          break;
        case 1:
          if (Rn(
            o,
            c,
            l
          ), i = c, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (D) {
              Ht(i, i.return, D);
            }
          if (i = c, o = i.updateQueue, o !== null) {
            var v = i.stateNode;
            try {
              var w = o.shared.hiddenCallbacks;
              if (w !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < w.length; o++)
                  fh(w[o], v);
            } catch (D) {
              Ht(i, i.return, D);
            }
          }
          l && g & 64 && kd(c), sa(c, c.return);
          break;
        case 27:
          zd(c);
        case 26:
        case 5:
          Rn(
            o,
            c,
            l
          ), l && i === null && g & 4 && wd(c), sa(c, c.return);
          break;
        case 12:
          Rn(
            o,
            c,
            l
          );
          break;
        case 31:
          Rn(
            o,
            c,
            l
          ), l && g & 4 && Od(o, c);
          break;
        case 13:
          Rn(
            o,
            c,
            l
          ), l && g & 4 && Dd(o, c);
          break;
        case 22:
          c.memoizedState === null && Rn(
            o,
            c,
            l
          ), sa(c, c.return);
          break;
        case 30:
          break;
        default:
          Rn(
            o,
            c,
            l
          );
      }
      e = e.sibling;
    }
  }
  function oc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ii(l));
  }
  function cc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ii(t));
  }
  function on(t, e, l, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ld(
          t,
          e,
          l,
          i
        ), e = e.sibling;
  }
  function Ld(t, e, l, i) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        on(
          t,
          e,
          l,
          i
        ), o & 2048 && ca(9, e);
        break;
      case 1:
        on(
          t,
          e,
          l,
          i
        );
        break;
      case 3:
        on(
          t,
          e,
          l,
          i
        ), o & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ii(t)));
        break;
      case 12:
        if (o & 2048) {
          on(
            t,
            e,
            l,
            i
          ), t = e.stateNode;
          try {
            var c = e.memoizedProps, g = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              g,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (w) {
            Ht(e, e.return, w);
          }
        } else
          on(
            t,
            e,
            l,
            i
          );
        break;
      case 31:
        on(
          t,
          e,
          l,
          i
        );
        break;
      case 13:
        on(
          t,
          e,
          l,
          i
        );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, g = e.alternate, e.memoizedState !== null ? c._visibility & 2 ? on(
          t,
          e,
          l,
          i
        ) : fa(t, e) : c._visibility & 2 ? on(
          t,
          e,
          l,
          i
        ) : (c._visibility |= 2, hi(
          t,
          e,
          l,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && oc(g, e);
        break;
      case 24:
        on(
          t,
          e,
          l,
          i
        ), o & 2048 && cc(e.alternate, e);
        break;
      default:
        on(
          t,
          e,
          l,
          i
        );
    }
  }
  function hi(t, e, l, i, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, g = e, v = l, w = i, D = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            c,
            g,
            v,
            w,
            o
          ), ca(8, g);
          break;
        case 23:
          break;
        case 22:
          var q = g.stateNode;
          g.memoizedState !== null ? q._visibility & 2 ? hi(
            c,
            g,
            v,
            w,
            o
          ) : fa(
            c,
            g
          ) : (q._visibility |= 2, hi(
            c,
            g,
            v,
            w,
            o
          )), o && D & 2048 && oc(
            g.alternate,
            g
          );
          break;
        case 24:
          hi(
            c,
            g,
            v,
            w,
            o
          ), o && D & 2048 && cc(g.alternate, g);
          break;
        default:
          hi(
            c,
            g,
            v,
            w,
            o
          );
      }
      e = e.sibling;
    }
  }
  function fa(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, i = e, o = i.flags;
        switch (i.tag) {
          case 22:
            fa(l, i), o & 2048 && oc(
              i.alternate,
              i
            );
            break;
          case 24:
            fa(l, i), o & 2048 && cc(i.alternate, i);
            break;
          default:
            fa(l, i);
        }
        e = e.sibling;
      }
  }
  var ha = 8192;
  function di(t, e, l) {
    if (t.subtreeFlags & ha)
      for (t = t.child; t !== null; )
        Ud(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Ud(t, e, l) {
    switch (t.tag) {
      case 26:
        di(
          t,
          e,
          l
        ), t.flags & ha && t.memoizedState !== null && Db(
          l,
          un,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        di(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var i = un;
        un = Jr(t.stateNode.containerInfo), di(
          t,
          e,
          l
        ), un = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = ha, ha = 16777216, di(
          t,
          e,
          l
        ), ha = i) : di(
          t,
          e,
          l
        ));
        break;
      default:
        di(
          t,
          e,
          l
        );
    }
  }
  function jd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function da(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var i = e[l];
          fe = i, Hd(
            i,
            t
          );
        }
      jd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bd(t), t = t.sibling;
  }
  function Bd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        da(t), t.flags & 2048 && $n(9, t, t.return);
        break;
      case 3:
        da(t);
        break;
      case 12:
        da(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ur(t)) : da(t);
        break;
      default:
        da(t);
    }
  }
  function Ur(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var i = e[l];
          fe = i, Hd(
            i,
            t
          );
        }
      jd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, e, e.return), Ur(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Ur(e));
          break;
        default:
          Ur(e);
      }
      t = t.sibling;
    }
  }
  function Hd(t, e) {
    for (; fe !== null; ) {
      var l = fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var i = l.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ii(l.memoizedState.cache);
      }
      if (i = l.child, i !== null) i.return = l, fe = i;
      else
        t: for (l = t; fe !== null; ) {
          i = fe;
          var o = i.sibling, c = i.return;
          if (_d(i), i === l) {
            fe = null;
            break t;
          }
          if (o !== null) {
            o.return = c, fe = o;
            break t;
          }
          fe = c;
        }
    }
  }
  var K0 = {
    getCacheForType: function(t) {
      var e = pe(ne), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return pe(ne).controller.signal;
    }
  }, F0 = typeof WeakMap == "function" ? WeakMap : Map, Ut = 0, Qt = null, zt = null, _t = 0, Bt = 0, Ye = null, Wn = !1, mi = !1, sc = !1, Nn = 0, Pt = 0, Pn = 0, Ml = 0, fc = 0, Ve = 0, pi = 0, ma = null, Oe = null, hc = !1, jr = 0, qd = 0, Br = 1 / 0, Hr = null, tl = null, oe = 0, el = null, gi = null, Ln = 0, dc = 0, mc = null, Yd = null, pa = 0, pc = null;
  function Ge() {
    return (Ut & 2) !== 0 && _t !== 0 ? _t & -_t : M.T !== null ? Sc() : nf();
  }
  function Vd() {
    if (Ve === 0)
      if ((_t & 536870912) === 0 || Ot) {
        var t = Ka;
        Ka <<= 1, (Ka & 3932160) === 0 && (Ka = 262144), Ve = t;
      } else Ve = 536870912;
    return t = He.current, t !== null && (t.flags |= 32), Ve;
  }
  function De(t, e, l) {
    (t === Qt && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) && (yi(t, 0), nl(
      t,
      _t,
      Ve,
      !1
    )), Ui(t, l), ((Ut & 2) === 0 || t !== Qt) && (t === Qt && ((Ut & 2) === 0 && (Ml |= l), Pt === 4 && nl(
      t,
      _t,
      Ve,
      !1
    )), mn(t));
  }
  function Gd(t, e, l) {
    if ((Ut & 6) !== 0) throw Error(u(327));
    var i = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Li(t, e), o = i ? $0(t, e) : yc(t, e, !0), c = i;
    do {
      if (o === 0) {
        mi && !i && nl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, c && !J0(l)) {
          o = yc(t, e, !1), c = !1;
          continue;
        }
        if (o === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var g = 0;
          else
            g = t.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            e = g;
            t: {
              var v = t;
              o = ma;
              var w = v.current.memoizedState.isDehydrated;
              if (w && (yi(v, g).flags |= 256), g = yc(
                v,
                g,
                !1
              ), g !== 2) {
                if (sc && !w) {
                  v.errorRecoveryDisabledLanes |= c, Ml |= c, o = 4;
                  break t;
                }
                c = Oe, Oe = o, c !== null && (Oe === null ? Oe = c : Oe.push.apply(
                  Oe,
                  c
                ));
              }
              o = g;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          yi(t, 0), nl(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, c = o, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              nl(
                i,
                e,
                Ve,
                !Wn
              );
              break t;
            case 2:
              Oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (o = jr + 300 - Se(), 10 < o)) {
            if (nl(
              i,
              e,
              Ve,
              !Wn
            ), Ja(i, 0, !0) !== 0) break t;
            Ln = e, i.timeoutHandle = xm(
              Xd.bind(
                null,
                i,
                l,
                Oe,
                Hr,
                hc,
                e,
                Ve,
                Ml,
                pi,
                Wn,
                c,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break t;
          }
          Xd(
            i,
            l,
            Oe,
            Hr,
            hc,
            e,
            Ve,
            Ml,
            pi,
            Wn,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mn(t);
  }
  function Xd(t, e, l, i, o, c, g, v, w, D, q, X, N, j) {
    if (t.timeoutHandle = -1, X = e.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xn
      }, Ud(
        e,
        c,
        X
      );
      var at = (c & 62914560) === c ? jr - Se() : (c & 4194048) === c ? qd - Se() : 0;
      if (at = Rb(
        X,
        at
      ), at !== null) {
        Ln = c, t.cancelPendingCommit = at(
          Wd.bind(
            null,
            t,
            e,
            c,
            l,
            i,
            o,
            g,
            v,
            w,
            q,
            X,
            null,
            N,
            j
          )
        ), nl(t, c, g, !D);
        return;
      }
    }
    Wd(
      t,
      e,
      c,
      l,
      i,
      o,
      g,
      v,
      w
    );
  }
  function J0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var i = 0; i < l.length; i++) {
          var o = l[i], c = o.getSnapshot;
          o = o.value;
          try {
            if (!je(c(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function nl(t, e, l, i) {
    e &= ~fc, e &= ~Ml, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var c = 31 - Xt(o), g = 1 << c;
      i[c] = -1, o &= ~g;
    }
    l !== 0 && Ps(t, l, e);
  }
  function qr() {
    return (Ut & 6) === 0 ? (ga(0), !1) : !0;
  }
  function gc() {
    if (zt !== null) {
      if (Bt === 0)
        var t = zt.return;
      else
        t = zt, wn = Sl = null, Do(t), ui = null, Wi = 0, t = zt;
      for (; t !== null; )
        Sd(t.alternate, t), t = t.return;
      zt = null;
    }
  }
  function yi(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, pb(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ln = 0, gc(), Qt = t, zt = l = kn(t.current, null), _t = e, Bt = 0, Ye = null, Wn = !1, mi = Li(t, e), sc = !1, pi = Ve = fc = Ml = Pn = Pt = 0, Oe = ma = null, hc = !1, (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var o = 31 - Xt(i), c = 1 << o;
        e |= t[o], i &= ~c;
      }
    return Nn = e, ur(), l;
  }
  function Qd(t, e) {
    vt = null, M.H = ra, e === ri || e === pr ? (e = uh(), Bt = 3) : e === xo ? (e = uh(), Bt = 4) : Bt = e === Fo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ye = e, zt === null && (Pt = 1, _r(
      t,
      Ie(e, t.current)
    ));
  }
  function Zd() {
    var t = He.current;
    return t === null ? !0 : (_t & 4194048) === _t ? tn === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? t === tn : !1;
  }
  function Kd() {
    var t = M.H;
    return M.H = ra, t === null ? ra : t;
  }
  function Fd() {
    var t = M.A;
    return M.A = K0, t;
  }
  function Yr() {
    Pt = 4, Wn || (_t & 4194048) !== _t && He.current !== null || (mi = !0), (Pn & 134217727) === 0 && (Ml & 134217727) === 0 || Qt === null || nl(
      Qt,
      _t,
      Ve,
      !1
    );
  }
  function yc(t, e, l) {
    var i = Ut;
    Ut |= 2;
    var o = Kd(), c = Fd();
    (Qt !== t || _t !== e) && (Hr = null, yi(t, e)), e = !1;
    var g = Pt;
    t: do
      try {
        if (Bt !== 0 && zt !== null) {
          var v = zt, w = Ye;
          switch (Bt) {
            case 8:
              gc(), g = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              He.current === null && (e = !0);
              var D = Bt;
              if (Bt = 0, Ye = null, bi(t, v, w, D), l && mi) {
                g = 0;
                break t;
              }
              break;
            default:
              D = Bt, Bt = 0, Ye = null, bi(t, v, w, D);
          }
        }
        I0(), g = Pt;
        break;
      } catch (q) {
        Qd(t, q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, wn = Sl = null, Ut = i, M.H = o, M.A = c, zt === null && (Qt = null, _t = 0, ur()), g;
  }
  function I0() {
    for (; zt !== null; ) Jd(zt);
  }
  function $0(t, e) {
    var l = Ut;
    Ut |= 2;
    var i = Kd(), o = Fd();
    Qt !== t || _t !== e ? (Hr = null, Br = Se() + 500, yi(t, e)) : mi = Li(
      t,
      e
    );
    t: do
      try {
        if (Bt !== 0 && zt !== null) {
          e = zt;
          var c = Ye;
          e: switch (Bt) {
            case 1:
              Bt = 0, Ye = null, bi(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (ah(c)) {
                Bt = 0, Ye = null, Id(e);
                break;
              }
              e = function() {
                Bt !== 2 && Bt !== 9 || Qt !== t || (Bt = 7), mn(t);
              }, c.then(e, e);
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              ah(c) ? (Bt = 0, Ye = null, Id(e)) : (Bt = 0, Ye = null, bi(t, e, c, 7));
              break;
            case 5:
              var g = null;
              switch (zt.tag) {
                case 26:
                  g = zt.memoizedState;
                case 5:
                case 27:
                  var v = zt;
                  if (g ? Lm(g) : v.stateNode.complete) {
                    Bt = 0, Ye = null;
                    var w = v.sibling;
                    if (w !== null) zt = w;
                    else {
                      var D = v.return;
                      D !== null ? (zt = D, Vr(D)) : zt = null;
                    }
                    break e;
                  }
              }
              Bt = 0, Ye = null, bi(t, e, c, 5);
              break;
            case 6:
              Bt = 0, Ye = null, bi(t, e, c, 6);
              break;
            case 8:
              gc(), Pt = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        W0();
        break;
      } catch (q) {
        Qd(t, q);
      }
    while (!0);
    return wn = Sl = null, M.H = i, M.A = o, Ut = l, zt !== null ? 0 : (Qt = null, _t = 0, ur(), Pt);
  }
  function W0() {
    for (; zt !== null && !_u(); )
      Jd(zt);
  }
  function Jd(t) {
    var e = vd(t.alternate, t, Nn);
    t.memoizedProps = t.pendingProps, e === null ? Vr(t) : zt = e;
  }
  function Id(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = dd(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          _t
        );
        break;
      case 11:
        e = dd(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          _t
        );
        break;
      case 5:
        Do(e);
      default:
        Sd(l, e), e = zt = Ff(e, Nn), e = vd(l, e, Nn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Vr(t) : zt = e;
  }
  function bi(t, e, l, i) {
    wn = Sl = null, Do(e), ui = null, Wi = 0;
    var o = e.return;
    try {
      if (q0(
        t,
        o,
        e,
        l,
        _t
      )) {
        Pt = 1, _r(
          t,
          Ie(l, t.current)
        ), zt = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw zt = o, c;
      Pt = 1, _r(
        t,
        Ie(l, t.current)
      ), zt = null;
      return;
    }
    e.flags & 32768 ? (Ot || i === 1 ? t = !0 : mi || (_t & 536870912) !== 0 ? t = !1 : (Wn = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = He.current, i !== null && i.tag === 13 && (i.flags |= 16384))), $d(e, t)) : Vr(e);
  }
  function Vr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        $d(
          e,
          Wn
        );
        return;
      }
      t = e.return;
      var l = G0(
        e.alternate,
        e,
        Nn
      );
      if (l !== null) {
        zt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        zt = e;
        return;
      }
      zt = e = t;
    } while (e !== null);
    Pt === 0 && (Pt = 5);
  }
  function $d(t, e) {
    do {
      var l = X0(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, zt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        zt = t;
        return;
      }
      zt = t = l;
    } while (t !== null);
    Pt = 6, zt = null;
  }
  function Wd(t, e, l, i, o, c, g, v, w) {
    t.cancelPendingCommit = null;
    do
      Gr();
    while (oe !== 0);
    if ((Ut & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (c = e.lanes | e.childLanes, c |= io, Oy(
        t,
        l,
        c,
        g,
        v,
        w
      ), t === Qt && (zt = Qt = null, _t = 0), gi = e, el = t, Ln = l, dc = c, mc = o, Yd = i, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, nb(yt, function() {
        return lm(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
        i = M.T, M.T = null, o = K.p, K.p = 2, g = Ut, Ut |= 4;
        try {
          Q0(t, e, l);
        } finally {
          Ut = g, K.p = o, M.T = i;
        }
      }
      oe = 1, Pd(), tm(), em();
    }
  }
  function Pd() {
    if (oe === 1) {
      oe = 0;
      var t = el, e = gi, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var i = K.p;
        K.p = 2;
        var o = Ut;
        Ut |= 4;
        try {
          Rd(e, t);
          var c = _c, g = Hf(t.containerInfo), v = c.focusedElem, w = c.selectionRange;
          if (g !== v && v && v.ownerDocument && Bf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (w !== null && Pu(v)) {
              var D = w.start, q = w.end;
              if (q === void 0 && (q = D), "selectionStart" in v)
                v.selectionStart = D, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var X = v.ownerDocument || document, N = X && X.defaultView || window;
                if (N.getSelection) {
                  var j = N.getSelection(), at = v.textContent.length, gt = Math.min(w.start, at), Vt = w.end === void 0 ? gt : Math.min(w.end, at);
                  !j.extend && gt > Vt && (g = Vt, Vt = gt, gt = g);
                  var C = jf(
                    v,
                    gt
                  ), T = jf(
                    v,
                    Vt
                  );
                  if (C && T && (j.rangeCount !== 1 || j.anchorNode !== C.node || j.anchorOffset !== C.offset || j.focusNode !== T.node || j.focusOffset !== T.offset)) {
                    var O = X.createRange();
                    O.setStart(C.node, C.offset), j.removeAllRanges(), gt > Vt ? (j.addRange(O), j.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), j.addRange(O));
                  }
                }
              }
            }
            for (X = [], j = v; j = j.parentNode; )
              j.nodeType === 1 && X.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < X.length; v++) {
              var G = X[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          eu = !!Cc, _c = Cc = null;
        } finally {
          Ut = o, K.p = i, M.T = l;
        }
      }
      t.current = e, oe = 2;
    }
  }
  function tm() {
    if (oe === 2) {
      oe = 0;
      var t = el, e = gi, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var i = K.p;
        K.p = 2;
        var o = Ut;
        Ut |= 4;
        try {
          Cd(t, e.alternate, e);
        } finally {
          Ut = o, K.p = i, M.T = l;
        }
      }
      oe = 3;
    }
  }
  function em() {
    if (oe === 4 || oe === 3) {
      oe = 0, Mu();
      var t = el, e = gi, l = Ln, i = Yd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? oe = 5 : (oe = 0, gi = el = null, nm(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (o === 0 && (tl = null), Nu(l), e = e.stateNode, ue && typeof ue.onCommitFiberRoot == "function")
        try {
          ue.onCommitFiberRoot(
            ke,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        e = M.T, o = K.p, K.p = 2, M.T = null;
        try {
          for (var c = t.onRecoverableError, g = 0; g < i.length; g++) {
            var v = i[g];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          M.T = e, K.p = o;
        }
      }
      (Ln & 3) !== 0 && Gr(), mn(t), o = t.pendingLanes, (l & 261930) !== 0 && (o & 42) !== 0 ? t === pc ? pa++ : (pa = 0, pc = t) : pa = 0, ga(0);
    }
  }
  function nm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ii(e)));
  }
  function Gr() {
    return Pd(), tm(), em(), lm();
  }
  function lm() {
    if (oe !== 5) return !1;
    var t = el, e = dc;
    dc = 0;
    var l = Nu(Ln), i = M.T, o = K.p;
    try {
      K.p = 32 > l ? 32 : l, M.T = null, l = mc, mc = null;
      var c = el, g = Ln;
      if (oe = 0, gi = el = null, Ln = 0, (Ut & 6) !== 0) throw Error(u(331));
      var v = Ut;
      if (Ut |= 4, Bd(c.current), Ld(
        c,
        c.current,
        g,
        l
      ), Ut = v, ga(0, !1), ue && typeof ue.onPostCommitFiberRoot == "function")
        try {
          ue.onPostCommitFiberRoot(ke, c);
        } catch {
        }
      return !0;
    } finally {
      K.p = o, M.T = i, nm(t, e);
    }
  }
  function im(t, e, l) {
    e = Ie(l, e), e = Ko(t.stateNode, e, 2), t = Fn(t, e, 2), t !== null && (Ui(t, 2), mn(t));
  }
  function Ht(t, e, l) {
    if (t.tag === 3)
      im(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          im(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (tl === null || !tl.has(i))) {
            t = Ie(l, t), l = ad(2), i = Fn(e, l, 2), i !== null && (rd(
              l,
              i,
              e,
              t
            ), Ui(i, 2), mn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function bc(t, e, l) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new F0();
      var o = /* @__PURE__ */ new Set();
      i.set(e, o);
    } else
      o = i.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o));
    o.has(l) || (sc = !0, o.add(l), t = P0.bind(null, t, e, l), e.then(t, t));
  }
  function P0(t, e, l) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Qt === t && (_t & l) === l && (Pt === 4 || Pt === 3 && (_t & 62914560) === _t && 300 > Se() - jr ? (Ut & 2) === 0 && yi(t, 0) : fc |= l, pi === _t && (pi = 0)), mn(t);
  }
  function am(t, e) {
    e === 0 && (e = Ws()), t = bl(t, e), t !== null && (Ui(t, e), mn(t));
  }
  function tb(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), am(t, l);
  }
  function eb(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, o = t.memoizedState;
        o !== null && (l = o.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(e), am(t, l);
  }
  function nb(t, e) {
    return Hl(t, e);
  }
  var Xr = null, vi = null, vc = !1, Qr = !1, xc = !1, ll = 0;
  function mn(t) {
    t !== vi && t.next === null && (vi === null ? Xr = vi = t : vi = vi.next = t), Qr = !0, vc || (vc = !0, ib());
  }
  function ga(t, e) {
    if (!xc && Qr) {
      xc = !0;
      do
        for (var l = !1, i = Xr; i !== null; ) {
          if (t !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var g = i.suspendedLanes, v = i.pingedLanes;
              c = (1 << 31 - Xt(42 | t) + 1) - 1, c &= o & ~(g & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = !0, cm(i, c));
          } else
            c = _t, c = Ja(
              i,
              i === Qt ? c : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (c & 3) === 0 || Li(i, c) || (l = !0, cm(i, c));
          i = i.next;
        }
      while (l);
      xc = !1;
    }
  }
  function lb() {
    rm();
  }
  function rm() {
    Qr = vc = !1;
    var t = 0;
    ll !== 0 && mb() && (t = ll);
    for (var e = Se(), l = null, i = Xr; i !== null; ) {
      var o = i.next, c = um(i, e);
      c === 0 ? (i.next = null, l === null ? Xr = o : l.next = o, o === null && (vi = l)) : (l = i, (t !== 0 || (c & 3) !== 0) && (Qr = !0)), i = o;
    }
    oe !== 0 && oe !== 5 || ga(t), ll !== 0 && (ll = 0);
  }
  function um(t, e) {
    for (var l = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var g = 31 - Xt(c), v = 1 << g, w = o[g];
      w === -1 ? ((v & l) === 0 || (v & i) !== 0) && (o[g] = My(v, e)) : w <= e && (t.expiredLanes |= v), c &= ~v;
    }
    if (e = Qt, l = _t, l = Ja(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, l === 0 || t === e && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Ni(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Li(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (i !== null && Ni(i), Nu(l)) {
        case 2:
        case 8:
          l = W;
          break;
        case 32:
          l = yt;
          break;
        case 268435456:
          l = jt;
          break;
        default:
          l = yt;
      }
      return i = om.bind(null, t), l = Hl(l, i), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return i !== null && i !== null && Ni(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function om(t, e) {
    if (oe !== 0 && oe !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Gr() && t.callbackNode !== l)
      return null;
    var i = _t;
    return i = Ja(
      t,
      t === Qt ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (Gd(t, i, e), um(t, Se()), t.callbackNode != null && t.callbackNode === l ? om.bind(null, t) : null);
  }
  function cm(t, e) {
    if (Gr()) return null;
    Gd(t, e, !0);
  }
  function ib() {
    gb(function() {
      (Ut & 6) !== 0 ? Hl(
        V,
        lb
      ) : rm();
    });
  }
  function Sc() {
    if (ll === 0) {
      var t = ii;
      t === 0 && (t = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), ll = t;
    }
    return ll;
  }
  function sm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Pa("" + t);
  }
  function fm(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function ab(t, e, l, i, o) {
    if (e === "submit" && l && l.stateNode === o) {
      var c = sm(
        (o[ze] || null).action
      ), g = i.submitter;
      g && (e = (e = g[ze] || null) ? sm(e.formAction) : g.getAttribute("formAction"), e !== null && (c = e, g = null));
      var v = new lr(
        "action",
        "action",
        null,
        i,
        o
      );
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (ll !== 0) {
                  var w = g ? fm(o, g) : new FormData(o);
                  Yo(
                    l,
                    {
                      pending: !0,
                      data: w,
                      method: o.method,
                      action: c
                    },
                    null,
                    w
                  );
                }
              } else
                typeof c == "function" && (v.preventDefault(), w = g ? fm(o, g) : new FormData(o), Yo(
                  l,
                  {
                    pending: !0,
                    data: w,
                    method: o.method,
                    action: c
                  },
                  c,
                  w
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var kc = 0; kc < lo.length; kc++) {
    var Ec = lo[kc], rb = Ec.toLowerCase(), ub = Ec[0].toUpperCase() + Ec.slice(1);
    rn(
      rb,
      "on" + ub
    );
  }
  rn(Vf, "onAnimationEnd"), rn(Gf, "onAnimationIteration"), rn(Xf, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(E0, "onTransitionRun"), rn(w0, "onTransitionStart"), rn(A0, "onTransitionCancel"), rn(Qf, "onTransitionEnd"), Xl("onMouseEnter", ["mouseout", "mouseover"]), Xl("onMouseLeave", ["mouseout", "mouseover"]), Xl("onPointerEnter", ["pointerout", "pointerover"]), Xl("onPointerLeave", ["pointerout", "pointerover"]), ml(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ml(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ml("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ml(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ml(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ml(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ya = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ob = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya)
  );
  function hm(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var i = t[l], o = i.event;
      i = i.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var g = i.length - 1; 0 <= g; g--) {
            var v = i[g], w = v.instance, D = v.currentTarget;
            if (v = v.listener, w !== c && o.isPropagationStopped())
              break t;
            c = v, o.currentTarget = D;
            try {
              c(o);
            } catch (q) {
              rr(q);
            }
            o.currentTarget = null, c = w;
          }
        else
          for (g = 0; g < i.length; g++) {
            if (v = i[g], w = v.instance, D = v.currentTarget, v = v.listener, w !== c && o.isPropagationStopped())
              break t;
            c = v, o.currentTarget = D;
            try {
              c(o);
            } catch (q) {
              rr(q);
            }
            o.currentTarget = null, c = w;
          }
      }
    }
  }
  function Tt(t, e) {
    var l = e[Lu];
    l === void 0 && (l = e[Lu] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    l.has(i) || (dm(e, t, 2, !1), l.add(i));
  }
  function wc(t, e, l) {
    var i = 0;
    e && (i |= 4), dm(
      l,
      t,
      i,
      e
    );
  }
  var Zr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ac(t) {
    if (!t[Zr]) {
      t[Zr] = !0, rf.forEach(function(l) {
        l !== "selectionchange" && (ob.has(l) || wc(l, !1, t), wc(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Zr] || (e[Zr] = !0, wc("selectionchange", !1, e));
    }
  }
  function dm(t, e, l, i) {
    switch (Vm(e)) {
      case 2:
        var o = Ub;
        break;
      case 8:
        o = jb;
        break;
      default:
        o = qc;
    }
    l = o.bind(
      null,
      e,
      l,
      t
    ), o = void 0, !Xu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), i ? o !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: o
    }) : t.addEventListener(e, l, !0) : o !== void 0 ? t.addEventListener(e, l, {
      passive: o
    }) : t.addEventListener(e, l, !1);
  }
  function zc(t, e, l, i, o) {
    var c = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var v = i.stateNode.containerInfo;
          if (v === o) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var w = g.tag;
              if ((w === 3 || w === 4) && g.stateNode.containerInfo === o)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (g = Yl(v), g === null) return;
            if (w = g.tag, w === 5 || w === 6 || w === 26 || w === 27) {
              i = c = g;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    bf(function() {
      var D = c, q = Vu(l), X = [];
      t: {
        var N = Zf.get(t);
        if (N !== void 0) {
          var j = lr, at = t;
          switch (t) {
            case "keypress":
              if (er(l) === 0) break t;
            case "keydown":
            case "keyup":
              j = e0;
              break;
            case "focusin":
              at = "focus", j = Fu;
              break;
            case "focusout":
              at = "blur", j = Fu;
              break;
            case "beforeblur":
            case "afterblur":
              j = Fu;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = Sf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Gy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = i0;
              break;
            case Vf:
            case Gf:
            case Xf:
              j = Zy;
              break;
            case Qf:
              j = r0;
              break;
            case "scroll":
            case "scrollend":
              j = Yy;
              break;
            case "wheel":
              j = o0;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Fy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Ef;
              break;
            case "toggle":
            case "beforetoggle":
              j = s0;
          }
          var gt = (e & 4) !== 0, Vt = !gt && (t === "scroll" || t === "scrollend"), C = gt ? N !== null ? N + "Capture" : null : N;
          gt = [];
          for (var T = D, O; T !== null; ) {
            var G = T;
            if (O = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || O === null || C === null || (G = Hi(T, C), G != null && gt.push(
              ba(T, G, O)
            )), Vt) break;
            T = T.return;
          }
          0 < gt.length && (N = new j(
            N,
            at,
            null,
            l,
            q
          ), X.push({ event: N, listeners: gt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", j = t === "mouseout" || t === "pointerout", N && l !== Yu && (at = l.relatedTarget || l.fromElement) && (Yl(at) || at[ql]))
            break t;
          if ((j || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, j ? (at = l.relatedTarget || l.toElement, j = D, at = at ? Yl(at) : null, at !== null && (Vt = h(at), gt = at.tag, at !== Vt || gt !== 5 && gt !== 27 && gt !== 6) && (at = null)) : (j = null, at = D), j !== at)) {
            if (gt = Sf, G = "onMouseLeave", C = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (gt = Ef, G = "onPointerLeave", C = "onPointerEnter", T = "pointer"), Vt = j == null ? N : Bi(j), O = at == null ? N : Bi(at), N = new gt(
              G,
              T + "leave",
              j,
              l,
              q
            ), N.target = Vt, N.relatedTarget = O, G = null, Yl(q) === D && (gt = new gt(
              C,
              T + "enter",
              at,
              l,
              q
            ), gt.target = O, gt.relatedTarget = Vt, G = gt), Vt = G, j && at)
              e: {
                for (gt = cb, C = j, T = at, O = 0, G = C; G; G = gt(G))
                  O++;
                G = 0;
                for (var dt = T; dt; dt = gt(dt))
                  G++;
                for (; 0 < O - G; )
                  C = gt(C), O--;
                for (; 0 < G - O; )
                  T = gt(T), G--;
                for (; O--; ) {
                  if (C === T || T !== null && C === T.alternate) {
                    gt = C;
                    break e;
                  }
                  C = gt(C), T = gt(T);
                }
                gt = null;
              }
            else gt = null;
            j !== null && mm(
              X,
              N,
              j,
              gt,
              !1
            ), at !== null && Vt !== null && mm(
              X,
              Vt,
              at,
              gt,
              !0
            );
          }
        }
        t: {
          if (N = D ? Bi(D) : window, j = N.nodeName && N.nodeName.toLowerCase(), j === "select" || j === "input" && N.type === "file")
            var Nt = Of;
          else if (_f(N))
            if (Df)
              Nt = x0;
            else {
              Nt = b0;
              var ct = y0;
            }
          else
            j = N.nodeName, !j || j.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? D && qu(D.elementType) && (Nt = Of) : Nt = v0;
          if (Nt && (Nt = Nt(t, D))) {
            Mf(
              X,
              Nt,
              l,
              q
            );
            break t;
          }
          ct && ct(t, N, D), t === "focusout" && D && N.type === "number" && D.memoizedProps.value != null && Hu(N, "number", N.value);
        }
        switch (ct = D ? Bi(D) : window, t) {
          case "focusin":
            (_f(ct) || ct.contentEditable === "true") && (Il = ct, to = D, Ki = null);
            break;
          case "focusout":
            Ki = to = Il = null;
            break;
          case "mousedown":
            eo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            eo = !1, qf(X, l, q);
            break;
          case "selectionchange":
            if (k0) break;
          case "keydown":
          case "keyup":
            qf(X, l, q);
        }
        var St;
        if (Iu)
          t: {
            switch (t) {
              case "compositionstart":
                var Mt = "onCompositionStart";
                break t;
              case "compositionend":
                Mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Mt = "onCompositionUpdate";
                break t;
            }
            Mt = void 0;
          }
        else
          Jl ? Tf(t, l) && (Mt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (Mt = "onCompositionStart");
        Mt && (wf && l.locale !== "ko" && (Jl || Mt !== "onCompositionStart" ? Mt === "onCompositionEnd" && Jl && (St = vf()) : (Yn = q, Qu = "value" in Yn ? Yn.value : Yn.textContent, Jl = !0)), ct = Kr(D, Mt), 0 < ct.length && (Mt = new kf(
          Mt,
          t,
          null,
          l,
          q
        ), X.push({ event: Mt, listeners: ct }), St ? Mt.data = St : (St = Cf(l), St !== null && (Mt.data = St)))), (St = h0 ? d0(t, l) : m0(t, l)) && (Mt = Kr(D, "onBeforeInput"), 0 < Mt.length && (ct = new kf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          q
        ), X.push({
          event: ct,
          listeners: Mt
        }), ct.data = St)), ab(
          X,
          t,
          D,
          l,
          q
        );
      }
      hm(X, e);
    });
  }
  function ba(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Kr(t, e) {
    for (var l = e + "Capture", i = []; t !== null; ) {
      var o = t, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Hi(t, l), o != null && i.unshift(
        ba(t, o, c)
      ), o = Hi(t, e), o != null && i.push(
        ba(t, o, c)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function cb(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function mm(t, e, l, i, o) {
    for (var c = e._reactName, g = []; l !== null && l !== i; ) {
      var v = l, w = v.alternate, D = v.stateNode;
      if (v = v.tag, w !== null && w === i) break;
      v !== 5 && v !== 26 && v !== 27 || D === null || (w = D, o ? (D = Hi(l, c), D != null && g.unshift(
        ba(l, D, w)
      )) : o || (D = Hi(l, c), D != null && g.push(
        ba(l, D, w)
      ))), l = l.return;
    }
    g.length !== 0 && t.push({ event: e, listeners: g });
  }
  var sb = /\r\n?/g, fb = /\u0000|\uFFFD/g;
  function pm(t) {
    return (typeof t == "string" ? t : "" + t).replace(sb, `
`).replace(fb, "");
  }
  function gm(t, e) {
    return e = pm(e), pm(t) === e;
  }
  function Yt(t, e, l, i, o, c) {
    switch (l) {
      case "children":
        typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Zl(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Zl(t, "" + i);
        break;
      case "className":
        $a(t, "class", i);
        break;
      case "tabIndex":
        $a(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $a(t, l, i);
        break;
      case "style":
        gf(t, i, c);
        break;
      case "data":
        if (e !== "object") {
          $a(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(l);
          break;
        }
        i = Pa("" + i), t.setAttribute(l, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (l === "formAction" ? (e !== "input" && Yt(t, e, "name", o.name, o, null), Yt(
            t,
            e,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Yt(
            t,
            e,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Yt(
            t,
            e,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Yt(t, e, "encType", o.encType, o, null), Yt(t, e, "method", o.method, o, null), Yt(t, e, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(l);
          break;
        }
        i = Pa("" + i), t.setAttribute(l, i);
        break;
      case "onClick":
        i != null && (t.onclick = xn);
        break;
      case "onScroll":
        i != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (l = i.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Pa("" + i), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(l, "" + i) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        i === !0 ? t.setAttribute(l, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(l, i) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(l, i) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(l) : t.setAttribute(l, i);
        break;
      case "popover":
        Tt("beforetoggle", t), Tt("toggle", t), Ia(t, "popover", i);
        break;
      case "xlinkActuate":
        vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        vn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        vn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        vn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Ia(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Hy.get(l) || l, Ia(t, l, i));
    }
  }
  function Tc(t, e, l, i, o, c) {
    switch (l) {
      case "style":
        gf(t, i, c);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (l = i.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Zl(t, i) : (typeof i == "number" || typeof i == "bigint") && Zl(t, "" + i);
        break;
      case "onScroll":
        i != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Tt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = xn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!uf.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), e = l.slice(2, o ? l.length - 7 : void 0), c = t[ze] || null, c = c != null ? c[l] : null, typeof c == "function" && t.removeEventListener(e, c, o), typeof i == "function")) {
              typeof c != "function" && c !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, i, o);
              break t;
            }
            l in t ? t[l] = i : i === !0 ? t.setAttribute(l, "") : Ia(t, l, i);
          }
    }
  }
  function ye(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Tt("error", t), Tt("load", t);
        var i = !1, o = !1, c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var g = l[c];
            if (g != null)
              switch (c) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Yt(t, e, c, g, l, null);
              }
          }
        o && Yt(t, e, "srcSet", l.srcSet, l, null), i && Yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        Tt("invalid", t);
        var v = c = g = o = null, w = null, D = null;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var q = l[i];
            if (q != null)
              switch (i) {
                case "name":
                  o = q;
                  break;
                case "type":
                  g = q;
                  break;
                case "checked":
                  w = q;
                  break;
                case "defaultChecked":
                  D = q;
                  break;
                case "value":
                  c = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(u(137, e));
                  break;
                default:
                  Yt(t, e, i, q, l, null);
              }
          }
        hf(
          t,
          c,
          v,
          w,
          D,
          g,
          o,
          !1
        );
        return;
      case "select":
        Tt("invalid", t), i = g = c = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (v = l[o], v != null))
            switch (o) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                i = v;
              default:
                Yt(t, e, o, v, l, null);
            }
        e = c, l = g, t.multiple = !!i, e != null ? Ql(t, !!i, e, !1) : l != null && Ql(t, !!i, l, !0);
        return;
      case "textarea":
        Tt("invalid", t), c = o = i = null;
        for (g in l)
          if (l.hasOwnProperty(g) && (v = l[g], v != null))
            switch (g) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                Yt(t, e, g, v, l, null);
            }
        mf(t, i, o, c);
        return;
      case "option":
        for (w in l)
          l.hasOwnProperty(w) && (i = l[w], i != null) && (w === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : Yt(t, e, w, i, l, null));
        return;
      case "dialog":
        Tt("beforetoggle", t), Tt("toggle", t), Tt("cancel", t), Tt("close", t);
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ya.length; i++)
          Tt(ya[i], t);
        break;
      case "image":
        Tt("error", t), Tt("load", t);
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Tt("error", t), Tt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in l)
          if (l.hasOwnProperty(D) && (i = l[D], i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Yt(t, e, D, i, l, null);
            }
        return;
      default:
        if (qu(e)) {
          for (q in l)
            l.hasOwnProperty(q) && (i = l[q], i !== void 0 && Tc(
              t,
              e,
              q,
              i,
              l,
              void 0
            ));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && (i = l[v], i != null && Yt(t, e, v, i, l, null));
  }
  function hb(t, e, l, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, c = null, g = null, v = null, w = null, D = null, q = null;
        for (j in l) {
          var X = l[j];
          if (l.hasOwnProperty(j) && X != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = X;
              default:
                i.hasOwnProperty(j) || Yt(t, e, j, null, i, X);
            }
        }
        for (var N in i) {
          var j = i[N];
          if (X = l[N], i.hasOwnProperty(N) && (j != null || X != null))
            switch (N) {
              case "type":
                c = j;
                break;
              case "name":
                o = j;
                break;
              case "checked":
                D = j;
                break;
              case "defaultChecked":
                q = j;
                break;
              case "value":
                g = j;
                break;
              case "defaultValue":
                v = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(u(137, e));
                break;
              default:
                j !== X && Yt(
                  t,
                  e,
                  N,
                  j,
                  i,
                  X
                );
            }
        }
        Bu(
          t,
          g,
          v,
          w,
          D,
          q,
          c,
          o
        );
        return;
      case "select":
        j = g = v = N = null;
        for (c in l)
          if (w = l[c], l.hasOwnProperty(c) && w != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                j = w;
              default:
                i.hasOwnProperty(c) || Yt(
                  t,
                  e,
                  c,
                  null,
                  i,
                  w
                );
            }
        for (o in i)
          if (c = i[o], w = l[o], i.hasOwnProperty(o) && (c != null || w != null))
            switch (o) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                g = c;
              default:
                c !== w && Yt(
                  t,
                  e,
                  o,
                  c,
                  i,
                  w
                );
            }
        e = v, l = g, i = j, N != null ? Ql(t, !!l, N, !1) : !!i != !!l && (e != null ? Ql(t, !!l, e, !0) : Ql(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        j = N = null;
        for (v in l)
          if (o = l[v], l.hasOwnProperty(v) && o != null && !i.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(t, e, v, null, i, o);
            }
        for (g in i)
          if (o = i[g], c = l[g], i.hasOwnProperty(g) && (o != null || c != null))
            switch (g) {
              case "value":
                N = o;
                break;
              case "defaultValue":
                j = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== c && Yt(t, e, g, o, i, c);
            }
        df(t, N, j);
        return;
      case "option":
        for (var at in l)
          N = l[at], l.hasOwnProperty(at) && N != null && !i.hasOwnProperty(at) && (at === "selected" ? t.selected = !1 : Yt(
            t,
            e,
            at,
            null,
            i,
            N
          ));
        for (w in i)
          N = i[w], j = l[w], i.hasOwnProperty(w) && N !== j && (N != null || j != null) && (w === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : Yt(
            t,
            e,
            w,
            N,
            i,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var gt in l)
          N = l[gt], l.hasOwnProperty(gt) && N != null && !i.hasOwnProperty(gt) && Yt(t, e, gt, null, i, N);
        for (D in i)
          if (N = i[D], j = l[D], i.hasOwnProperty(D) && N !== j && (N != null || j != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(u(137, e));
                break;
              default:
                Yt(
                  t,
                  e,
                  D,
                  N,
                  i,
                  j
                );
            }
        return;
      default:
        if (qu(e)) {
          for (var Vt in l)
            N = l[Vt], l.hasOwnProperty(Vt) && N !== void 0 && !i.hasOwnProperty(Vt) && Tc(
              t,
              e,
              Vt,
              void 0,
              i,
              N
            );
          for (q in i)
            N = i[q], j = l[q], !i.hasOwnProperty(q) || N === j || N === void 0 && j === void 0 || Tc(
              t,
              e,
              q,
              N,
              i,
              j
            );
          return;
        }
    }
    for (var C in l)
      N = l[C], l.hasOwnProperty(C) && N != null && !i.hasOwnProperty(C) && Yt(t, e, C, null, i, N);
    for (X in i)
      N = i[X], j = l[X], !i.hasOwnProperty(X) || N === j || N == null && j == null || Yt(t, e, X, N, i, j);
  }
  function ym(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function db() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), i = 0; i < l.length; i++) {
        var o = l[i], c = o.transferSize, g = o.initiatorType, v = o.duration;
        if (c && v && ym(g)) {
          for (g = 0, v = o.responseEnd, i += 1; i < l.length; i++) {
            var w = l[i], D = w.startTime;
            if (D > v) break;
            var q = w.transferSize, X = w.initiatorType;
            q && ym(X) && (w = w.responseEnd, g += q * (w < v ? 1 : (v - D) / (w - D)));
          }
          if (--i, e += 8 * (c + g) / (o.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Cc = null, _c = null;
  function Fr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function bm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Mc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Oc = null;
  function mb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Oc ? !1 : (Oc = t, !0) : (Oc = null, !1);
  }
  var xm = typeof setTimeout == "function" ? setTimeout : void 0, pb = typeof clearTimeout == "function" ? clearTimeout : void 0, Sm = typeof Promise == "function" ? Promise : void 0, gb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sm < "u" ? function(t) {
    return Sm.resolve(null).then(t).catch(yb);
  } : xm;
  function yb(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function il(t) {
    return t === "head";
  }
  function km(t, e) {
    var l = e, i = 0;
    do {
      var o = l.nextSibling;
      if (t.removeChild(l), o && o.nodeType === 8)
        if (l = o.data, l === "/$" || l === "/&") {
          if (i === 0) {
            t.removeChild(o), Ei(e);
            return;
          }
          i--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          i++;
        else if (l === "html")
          va(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, va(l);
          for (var c = l.firstChild; c; ) {
            var g = c.nextSibling, v = c.nodeName;
            c[ji] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = g;
          }
        } else
          l === "body" && va(t.ownerDocument.body);
      l = o;
    } while (l);
    Ei(e);
  }
  function Em(t, e) {
    var l = t;
    t = 0;
    do {
      var i = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), i && i.nodeType === 8)
        if (l = i.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = i;
    } while (l);
  }
  function Dc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Dc(l), Uu(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function bb(t, e, l, i) {
    for (; t.nodeType === 1; ) {
      var o = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[ji])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = en(t.nextSibling), t === null) break;
    }
    return null;
  }
  function vb(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = en(t.nextSibling), t === null)) return null;
    return t;
  }
  function wm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = en(t.nextSibling), t === null)) return null;
    return t;
  }
  function Rc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Nc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function xb(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var i = function() {
        e(), l.removeEventListener("DOMContentLoaded", i);
      };
      l.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function en(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Lc = null;
  function Am(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return en(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function zm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Tm(t, e, l) {
    switch (e = Fr(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function va(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Uu(t);
  }
  var nn = /* @__PURE__ */ new Map(), Cm = /* @__PURE__ */ new Set();
  function Jr(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Un = K.d;
  K.d = {
    f: Sb,
    r: kb,
    D: Eb,
    C: wb,
    L: Ab,
    m: zb,
    X: Cb,
    S: Tb,
    M: _b
  };
  function Sb() {
    var t = Un.f(), e = qr();
    return t || e;
  }
  function kb(t) {
    var e = Vl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Qh(e) : Un.r(t);
  }
  var xi = typeof document > "u" ? null : document;
  function _m(t, e, l) {
    var i = xi;
    if (i && typeof e == "string" && e) {
      var o = Fe(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), Cm.has(o) || (Cm.add(o), t = { rel: t, crossOrigin: l, href: e }, i.querySelector(o) === null && (e = i.createElement("link"), ye(e, "link", t), se(e), i.head.appendChild(e)));
    }
  }
  function Eb(t) {
    Un.D(t), _m("dns-prefetch", t, null);
  }
  function wb(t, e) {
    Un.C(t, e), _m("preconnect", t, e);
  }
  function Ab(t, e, l) {
    Un.L(t, e, l);
    var i = xi;
    if (i && t && e) {
      var o = 'link[rel="preload"][as="' + Fe(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + Fe(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + Fe(
        l.imageSizes
      ) + '"]')) : o += '[href="' + Fe(t) + '"]';
      var c = o;
      switch (e) {
        case "style":
          c = Si(t);
          break;
        case "script":
          c = ki(t);
      }
      nn.has(c) || (t = y(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), nn.set(c, t), i.querySelector(o) !== null || e === "style" && i.querySelector(xa(c)) || e === "script" && i.querySelector(Sa(c)) || (e = i.createElement("link"), ye(e, "link", t), se(e), i.head.appendChild(e)));
    }
  }
  function zb(t, e) {
    Un.m(t, e);
    var l = xi;
    if (l && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Fe(i) + '"][href="' + Fe(t) + '"]', c = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ki(t);
      }
      if (!nn.has(c) && (t = y({ rel: "modulepreload", href: t }, e), nn.set(c, t), l.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Sa(c)))
              return;
        }
        i = l.createElement("link"), ye(i, "link", t), se(i), l.head.appendChild(i);
      }
    }
  }
  function Tb(t, e, l) {
    Un.S(t, e, l);
    var i = xi;
    if (i && t) {
      var o = Gl(i).hoistableStyles, c = Si(t);
      e = e || "default";
      var g = o.get(c);
      if (!g) {
        var v = { loading: 0, preload: null };
        if (g = i.querySelector(
          xa(c)
        ))
          v.loading = 5;
        else {
          t = y(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = nn.get(c)) && Uc(t, l);
          var w = g = i.createElement("link");
          se(w), ye(w, "link", t), w._p = new Promise(function(D, q) {
            w.onload = D, w.onerror = q;
          }), w.addEventListener("load", function() {
            v.loading |= 1;
          }), w.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ir(g, e, i);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: v
        }, o.set(c, g);
      }
    }
  }
  function Cb(t, e) {
    Un.X(t, e);
    var l = xi;
    if (l && t) {
      var i = Gl(l).hoistableScripts, o = ki(t), c = i.get(o);
      c || (c = l.querySelector(Sa(o)), c || (t = y({ src: t, async: !0 }, e), (e = nn.get(o)) && jc(t, e), c = l.createElement("script"), se(c), ye(c, "link", t), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(o, c));
    }
  }
  function _b(t, e) {
    Un.M(t, e);
    var l = xi;
    if (l && t) {
      var i = Gl(l).hoistableScripts, o = ki(t), c = i.get(o);
      c || (c = l.querySelector(Sa(o)), c || (t = y({ src: t, async: !0, type: "module" }, e), (e = nn.get(o)) && jc(t, e), c = l.createElement("script"), se(c), ye(c, "link", t), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(o, c));
    }
  }
  function Mm(t, e, l, i) {
    var o = (o = st.current) ? Jr(o) : null;
    if (!o) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Si(l.href), l = Gl(
          o
        ).hoistableStyles, i = l.get(e), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Si(l.href);
          var c = Gl(
            o
          ).hoistableStyles, g = c.get(t);
          if (g || (o = o.ownerDocument || o, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, g), (c = o.querySelector(
            xa(t)
          )) && !c._p && (g.instance = c, g.state.loading = 5), nn.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, nn.set(t, l), c || Mb(
            o,
            t,
            l,
            g.state
          ))), e && i === null)
            throw Error(u(528, ""));
          return g;
        }
        if (e && i !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ki(l), l = Gl(
          o
        ).hoistableScripts, i = l.get(e), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function Si(t) {
    return 'href="' + Fe(t) + '"';
  }
  function xa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Om(t) {
    return y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Mb(t, e, l, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    }), ye(e, "link", l), se(e), t.head.appendChild(e));
  }
  function ki(t) {
    return '[src="' + Fe(t) + '"]';
  }
  function Sa(t) {
    return "script[async]" + t;
  }
  function Dm(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Fe(l.href) + '"]'
          );
          if (i)
            return e.instance = i, se(i), i;
          var o = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), se(i), ye(i, "style", o), Ir(i, l.precedence, t), e.instance = i;
        case "stylesheet":
          o = Si(l.href);
          var c = t.querySelector(
            xa(o)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, se(c), c;
          i = Om(l), (o = nn.get(o)) && Uc(i, o), c = (t.ownerDocument || t).createElement("link"), se(c);
          var g = c;
          return g._p = new Promise(function(v, w) {
            g.onload = v, g.onerror = w;
          }), ye(c, "link", i), e.state.loading |= 4, Ir(c, l.precedence, t), e.instance = c;
        case "script":
          return c = ki(l.src), (o = t.querySelector(
            Sa(c)
          )) ? (e.instance = o, se(o), o) : (i = l, (o = nn.get(c)) && (i = y({}, l), jc(i, o)), t = t.ownerDocument || t, o = t.createElement("script"), se(o), ye(o, "link", i), t.head.appendChild(o), e.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Ir(i, l.precedence, t));
    return e.instance;
  }
  function Ir(t, e, l) {
    for (var i = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, c = o, g = 0; g < i.length; g++) {
      var v = i[g];
      if (v.dataset.precedence === e) c = v;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Uc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function jc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var $r = null;
  function Rm(t, e, l) {
    if ($r === null) {
      var i = /* @__PURE__ */ new Map(), o = $r = /* @__PURE__ */ new Map();
      o.set(l, i);
    } else
      o = $r, i = o.get(l), i || (i = /* @__PURE__ */ new Map(), o.set(l, i));
    if (i.has(t)) return i;
    for (i.set(t, null), l = l.getElementsByTagName(t), o = 0; o < l.length; o++) {
      var c = l[o];
      if (!(c[ji] || c[de] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = c.getAttribute(e) || "";
        g = t + g;
        var v = i.get(g);
        v ? v.push(c) : i.set(g, [c]);
      }
    }
    return i;
  }
  function Nm(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Ob(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Lm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Db(t, e, l, i) {
    if (l.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var o = Si(i.href), c = e.querySelector(
          xa(o)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Wr.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = c, se(c);
          return;
        }
        c = e.ownerDocument || e, i = Om(i), (o = nn.get(o)) && Uc(i, o), c = c.createElement("link"), se(c);
        var g = c;
        g._p = new Promise(function(v, w) {
          g.onload = v, g.onerror = w;
        }), ye(c, "link", i), l.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Wr.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Bc = 0;
  function Rb(t, e) {
    return t.stylesheets && t.count === 0 && tu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var i = setTimeout(function() {
        if (t.stylesheets && tu(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Bc === 0 && (Bc = 62500 * db());
      var o = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tu(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > Bc ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function Wr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) tu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Pr = null;
  function tu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Pr = /* @__PURE__ */ new Map(), e.forEach(Nb, t), Pr = null, Wr.call(t));
  }
  function Nb(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Pr.get(t);
      if (l) var i = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Pr.set(t, l);
        for (var o = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var g = o[c];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (l.set(g.dataset.precedence, g), i = g);
        }
        i && l.set(null, i);
      }
      o = e.instance, g = o.getAttribute("data-precedence"), c = l.get(g) || i, c === i && l.set(null, o), l.set(g, o), this.count++, i = Wr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), c ? c.parentNode.insertBefore(o, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ka = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function Lb(t, e, l, i, o, c, g, v, w) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Um(t, e, l, i, o, c, g, v, w, D, q, X) {
    return t = new Lb(
      t,
      e,
      l,
      g,
      w,
      D,
      q,
      X,
      v
    ), e = 1, c === !0 && (e |= 24), c = Be(3, null, null, e), t.current = c, c.stateNode = t, e = yo(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: i,
      isDehydrated: l,
      cache: e
    }, So(c), t;
  }
  function jm(t) {
    return t ? (t = Pl, t) : Pl;
  }
  function Bm(t, e, l, i, o, c) {
    o = jm(o), i.context === null ? i.context = o : i.pendingContext = o, i = Kn(e), i.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (i.callback = c), l = Fn(t, i, e), l !== null && (De(l, t, e), ta(l, t, e));
  }
  function Hm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Hc(t, e) {
    Hm(t, e), (t = t.alternate) && Hm(t, e);
  }
  function qm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = bl(t, 67108864);
      e !== null && De(e, t, 67108864), Hc(t, 67108864);
    }
  }
  function Ym(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ge();
      e = Ru(e);
      var l = bl(t, e);
      l !== null && De(l, t, e), Hc(t, e);
    }
  }
  var eu = !0;
  function Ub(t, e, l, i) {
    var o = M.T;
    M.T = null;
    var c = K.p;
    try {
      K.p = 2, qc(t, e, l, i);
    } finally {
      K.p = c, M.T = o;
    }
  }
  function jb(t, e, l, i) {
    var o = M.T;
    M.T = null;
    var c = K.p;
    try {
      K.p = 8, qc(t, e, l, i);
    } finally {
      K.p = c, M.T = o;
    }
  }
  function qc(t, e, l, i) {
    if (eu) {
      var o = Yc(i);
      if (o === null)
        zc(
          t,
          e,
          i,
          nu,
          l
        ), Gm(t, i);
      else if (Hb(
        o,
        t,
        e,
        l,
        i
      ))
        i.stopPropagation();
      else if (Gm(t, i), e & 4 && -1 < Bb.indexOf(t)) {
        for (; o !== null; ) {
          var c = Vl(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var g = dl(c.pendingLanes);
                  if (g !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var w = 1 << 31 - Xt(g);
                      v.entanglements[1] |= w, g &= ~w;
                    }
                    mn(c), (Ut & 6) === 0 && (Br = Se() + 500, ga(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = bl(c, 2), v !== null && De(v, c, 2), qr(), Hc(c, 2);
            }
          if (c = Yc(i), c === null && zc(
            t,
            e,
            i,
            nu,
            l
          ), c === o) break;
          o = c;
        }
        o !== null && i.stopPropagation();
      } else
        zc(
          t,
          e,
          i,
          null,
          l
        );
    }
  }
  function Yc(t) {
    return t = Vu(t), Vc(t);
  }
  var nu = null;
  function Vc(t) {
    if (nu = null, t = Yl(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = f(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return nu = t, null;
  }
  function Vm(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ou()) {
          case V:
            return 2;
          case W:
            return 8;
          case yt:
          case At:
            return 32;
          case jt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gc = !1, al = null, rl = null, ul = null, Ea = /* @__PURE__ */ new Map(), wa = /* @__PURE__ */ new Map(), ol = [], Bb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Gm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        al = null;
        break;
      case "dragenter":
      case "dragleave":
        rl = null;
        break;
      case "mouseover":
      case "mouseout":
        ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Ea.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wa.delete(e.pointerId);
    }
  }
  function Aa(t, e, l, i, o, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: i,
      nativeEvent: c,
      targetContainers: [o]
    }, e !== null && (e = Vl(e), e !== null && qm(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function Hb(t, e, l, i, o) {
    switch (e) {
      case "focusin":
        return al = Aa(
          al,
          t,
          e,
          l,
          i,
          o
        ), !0;
      case "dragenter":
        return rl = Aa(
          rl,
          t,
          e,
          l,
          i,
          o
        ), !0;
      case "mouseover":
        return ul = Aa(
          ul,
          t,
          e,
          l,
          i,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return Ea.set(
          c,
          Aa(
            Ea.get(c) || null,
            t,
            e,
            l,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, wa.set(
          c,
          Aa(
            wa.get(c) || null,
            t,
            e,
            l,
            i,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Xm(t) {
    var e = Yl(t.target);
    if (e !== null) {
      var l = h(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = f(l), e !== null) {
            t.blockedOn = e, lf(t.priority, function() {
              Ym(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(l), e !== null) {
            t.blockedOn = e, lf(t.priority, function() {
              Ym(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function lu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Yc(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var i = new l.constructor(
          l.type,
          l
        );
        Yu = i, l.target.dispatchEvent(i), Yu = null;
      } else
        return e = Vl(l), e !== null && qm(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Qm(t, e, l) {
    lu(t) && l.delete(e);
  }
  function qb() {
    Gc = !1, al !== null && lu(al) && (al = null), rl !== null && lu(rl) && (rl = null), ul !== null && lu(ul) && (ul = null), Ea.forEach(Qm), wa.forEach(Qm);
  }
  function iu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Gc || (Gc = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      qb
    )));
  }
  var au = null;
  function Zm(t) {
    au !== t && (au = t, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        au === t && (au = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], i = t[e + 1], o = t[e + 2];
          if (typeof i != "function") {
            if (Vc(i || l) === null)
              continue;
            break;
          }
          var c = Vl(l);
          c !== null && (t.splice(e, 3), e -= 3, Yo(
            c,
            {
              pending: !0,
              data: o,
              method: l.method,
              action: i
            },
            i,
            o
          ));
        }
      }
    ));
  }
  function Ei(t) {
    function e(w) {
      return iu(w, t);
    }
    al !== null && iu(al, t), rl !== null && iu(rl, t), ul !== null && iu(ul, t), Ea.forEach(e), wa.forEach(e);
    for (var l = 0; l < ol.length; l++) {
      var i = ol[l];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < ol.length && (l = ol[0], l.blockedOn === null); )
      Xm(l), l.blockedOn === null && ol.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (i = 0; i < l.length; i += 3) {
        var o = l[i], c = l[i + 1], g = o[ze] || null;
        if (typeof c == "function")
          g || Zm(l);
        else if (g) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, g = c[ze] || null)
              v = g.formAction;
            else if (Vc(o) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? l[i + 1] = v : (l.splice(i, 3), i -= 3), Zm(l);
        }
      }
  }
  function Km() {
    function t(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(g) {
            return o = g;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      o !== null && (o(), o = null), i || setTimeout(l, 20);
    }
    function l() {
      if (!i && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, o = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), o !== null && (o(), o = null);
      };
    }
  }
  function Xc(t) {
    this._internalRoot = t;
  }
  ru.prototype.render = Xc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var l = e.current, i = Ge();
    Bm(l, i, t, e, null, null);
  }, ru.prototype.unmount = Xc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Bm(t.current, 2, null, t, null, null), qr(), e[ql] = null;
    }
  };
  function ru(t) {
    this._internalRoot = t;
  }
  ru.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = nf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < ol.length && e !== 0 && e < ol[l].priority; l++) ;
      ol.splice(l, 0, t), l === 0 && Xm(t);
    }
  };
  var Fm = r.version;
  if (Fm !== "19.2.3")
    throw Error(
      u(
        527,
        Fm,
        "19.2.3"
      )
    );
  K.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = d(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Yb = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber)
      try {
        ke = uu.inject(
          Yb
        ), ue = uu;
      } catch {
      }
  }
  return za.createRoot = function(t, e) {
    if (!s(t)) throw Error(u(299));
    var l = !1, i = "", o = ed, c = nd, g = ld;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (g = e.onRecoverableError)), e = Um(
      t,
      1,
      !1,
      null,
      null,
      l,
      i,
      null,
      o,
      c,
      g,
      Km
    ), t[ql] = e.current, Ac(t), new Xc(e);
  }, za.hydrateRoot = function(t, e, l) {
    if (!s(t)) throw Error(u(299));
    var i = !1, o = "", c = ed, g = nd, v = ld, w = null;
    return l != null && (l.unstable_strictMode === !0 && (i = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (g = l.onCaughtError), l.onRecoverableError !== void 0 && (v = l.onRecoverableError), l.formState !== void 0 && (w = l.formState)), e = Um(
      t,
      1,
      !0,
      e,
      l ?? null,
      i,
      o,
      w,
      c,
      g,
      v,
      Km
    ), e.context = jm(null), l = e.current, i = Ge(), i = Ru(i), o = Kn(i), o.callback = null, Fn(l, o, i), l = i, e.current.lanes = l, Ui(e, l), mn(e), t[ql] = e.current, Ac(t), new ru(e);
  }, za.version = "19.2.3", za;
}
var np;
function Jb() {
  if (np) return Zc.exports;
  np = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Zc.exports = Fb(), Zc.exports;
}
var Ib = Jb(), $b = Object.defineProperty, Wb = (n, r, a) => r in n ? $b(n, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[r] = a, ou = (n, r, a) => Wb(n, typeof r != "symbol" ? r + "" : r, a);
const Pb = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, t1 = {
  stringify: (n) => n.name,
  parse: (n, r, a) => {
    const u = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof u == "function" ? u.bind(a) : void 0;
  }
}, e1 = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
};
function n1(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (r, a, u) => `${a}-${u.toLowerCase()}`
  );
}
function ag(n) {
  return n.replace(/[-:]([a-z])/g, (r, a) => `${a.toUpperCase()}`);
}
const l1 = {
  stringify: (n) => n.name,
  parse: (n, r, a) => {
    const u = (() => {
      const s = ag(r);
      if (typeof a < "u" && s in a.container)
        return a.container[s];
    })();
    return typeof u == "function" ? u.bind(a) : void 0;
  }
}, i1 = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, a1 = {
  stringify: (n) => n,
  parse: (n) => n
}, Ic = {
  string: a1,
  number: i1,
  boolean: Pb,
  function: t1,
  method: l1,
  json: e1
}, Ta = /* @__PURE__ */ Symbol.for("r2wc.render"), cu = /* @__PURE__ */ Symbol.for("r2wc.connected"), Ol = /* @__PURE__ */ Symbol.for("r2wc.context"), Xe = /* @__PURE__ */ Symbol.for("r2wc.props");
function r1(n, r, a) {
  var u, s, h;
  r.props || (r.props = n.propTypes ? Object.keys(n.propTypes) : []), r.events || (r.events = []);
  const f = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), m = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), p = {}, d = {}, b = {}, y = {};
  for (const x of f) {
    p[x] = Array.isArray(r.props) ? "string" : r.props[x];
    const A = n1(x);
    b[x] = A, y[A] = x;
  }
  for (const x of m)
    d[x] = Array.isArray(r.events) ? {} : r.events[x];
  class S extends HTMLElement {
    constructor() {
      super(), ou(this, h, !0), ou(this, s), ou(this, u, {}), ou(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[Xe].container = this.container;
      for (const A of f) {
        const R = b[A], L = this.getAttribute(R), _ = p[A], Z = _ ? Ic[_] : null;
        if (_ === "method") {
          const H = ag(R);
          Object.defineProperty(this[Xe].container, H, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Xe][H];
            },
            set(lt) {
              this[Xe][H] = lt, this[Ta]();
            }
          }), this[Xe][A] = Z.parse(L, R, this);
        }
        Z != null && Z.parse && L && (this[Xe][A] = Z.parse(L, R, this));
      }
      for (const A of m)
        this[Xe][A] = (R) => {
          const L = A.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(L, { detail: R, ...d[A] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(y);
    }
    connectedCallback() {
      this[cu] = !0, this[Ta]();
    }
    disconnectedCallback() {
      this[cu] = !1, this[Ol] && a.unmount(this[Ol]), delete this[Ol];
    }
    attributeChangedCallback(A, R, L) {
      const _ = y[A], Z = p[_], H = Z ? Ic[Z] : null;
      _ in p && H != null && H.parse && L && (this[Xe][_] = H.parse(L, A, this), this[Ta]());
    }
    [(h = cu, s = Ol, u = Xe, Ta)]() {
      this[cu] && (this[Ol] ? a.update(this[Ol], this[Xe]) : this[Ol] = a.mount(
        this.container,
        n,
        this[Xe]
      ));
    }
  }
  for (const x of f) {
    const A = b[x], R = p[x];
    Object.defineProperty(S.prototype, x, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Xe][x];
      },
      set(L) {
        this[Xe][x] = L;
        const _ = R ? Ic[R] : null;
        if (_ != null && _.stringify) {
          const Z = _.stringify(L, A, this);
          this.getAttribute(A) !== Z && this.setAttribute(A, Z);
        } else
          this[Ta]();
      }
    });
  }
  return S;
}
function u1(n, r, a) {
  const u = Ib.createRoot(n), s = ig.createElement(r, a);
  return u.render(s), {
    root: u,
    ReactComponent: r
  };
}
function o1({ root: n, ReactComponent: r }, a) {
  const u = ig.createElement(r, a);
  n.render(u);
}
function c1({ root: n }) {
  n.unmount();
}
function s1(n, r = {}) {
  return r1(n, r, { mount: u1, update: o1, unmount: c1 });
}
var $c = { exports: {} }, Ca = {};
var lp;
function f1() {
  if (lp) return Ca;
  lp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(u, s, h) {
    var f = null;
    if (h !== void 0 && (f = "" + h), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      h = {};
      for (var m in s)
        m !== "key" && (h[m] = s[m]);
    } else h = s;
    return s = h.ref, {
      $$typeof: n,
      type: u,
      key: f,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  return Ca.Fragment = r, Ca.jsx = a, Ca.jsxs = a, Ca;
}
var ip;
function h1() {
  return ip || (ip = 1, $c.exports = f1()), $c.exports;
}
var nt = h1();
async function d1() {
  const n = /* @__PURE__ */ new Date(), r = new Date(n);
  r.setDate(r.getDate() - 1);
  const a = ap(n), u = ap(r), s = await rp(a), h = await rp(u), f = new Uint8Array(s.length);
  for (let m = 0; m < s.length; m++)
    f[m] = s[m] ^ h[m];
  return m1(f).substring(0, 64);
}
function ap(n) {
  const r = n.getFullYear(), a = String(n.getMonth() + 1).padStart(2, "0"), u = String(n.getDate()).padStart(2, "0");
  return `${r}-${a}-${u}`;
}
async function rp(n) {
  const r = new TextEncoder().encode(n), a = await crypto.subtle.digest("SHA-256", r);
  return new Uint8Array(a);
}
function m1(n) {
  return Array.from(n).map((r) => r.toString(16).padStart(2, "0")).join("");
}
const p1 = async (n, r, a, u) => {
  const s = await fetch("/api/chat", {
    method: "POST",
    credentials: "include",
    headers: await rg(),
    // body: JSON.stringify(payload),
    body: JSON.stringify({
      pageContent: a,
      url: u,
      assistantId: r,
      conversationHistory: [{ message: n }]
    })
  }), h = await s.json();
  if (!s.ok || "error" in h && h.error)
    throw new Error(
      "error" in h && h.error ? h.error : `Response status: ${s.status}`
    );
  return h;
};
async function rg(n) {
  const r = new Headers();
  r.set("Content-Type", "application/json; charset=utf-8");
  const a = await d1();
  r.set("X-API-Key", a);
  const u = localStorage.getItem("lruRagChatToken");
  return u && r.set("X-Chat-Token", u), r;
}
async function g1(n = void 0, r = void 0) {
  if (r && n)
    try {
      const a = await fetch(`/api/chat/init?assistantId=${r}`, {
        method: "GET",
        credentials: "include",
        headers: await rg()
      });
      if (!a.ok)
        throw new Error(`Response status: ${a.status}`);
      if (!a.body)
        throw new Error("Response body missing");
      return await a.json();
    } catch (a) {
      console.log("Chat GET init failed: ", a);
    }
}
const y1 = $t.createContext(
  void 0
);
function Eu() {
  const n = $t.useContext(y1);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function b1({ title: n }) {
  const { language: r, setLanguage: a, t: u } = Eu();
  return /* @__PURE__ */ nt.jsx("div", { className: "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-8 py-4", children: /* @__PURE__ */ nt.jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ nt.jsxs("div", { children: [
      /* @__PURE__ */ nt.jsx("h1", { className: "text-2xl font-bold rainbow-text", children: n }),
      /* @__PURE__ */ nt.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: u.header.subtitle })
    ] }),
    /* @__PURE__ */ nt.jsxs(
      "button",
      {
        onClick: () => a(r === "en" ? "da" : "en"),
        className: "relative inline-flex h-10 w-20 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        "aria-label": "Toggle language",
        children: [
          /* @__PURE__ */ nt.jsx(
            "span",
            {
              className: `absolute text-xl opacity-60 ${r === "en" ? "right-2.5" : "left-2.5"}`,
              children: r === "en" ? "🇩🇰" : "🇬🇧"
            }
          ),
          /* @__PURE__ */ nt.jsx(
            "span",
            {
              className: `inline-flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform ${r === "en" ? "translate-x-1" : "translate-x-11"}`,
              children: /* @__PURE__ */ nt.jsx("span", { className: "text-xl", children: r === "en" ? "🇬🇧" : "🇩🇰" })
            }
          )
        ]
      }
    )
  ] }) });
}
function ug(n) {
  var r, a, u = "";
  if (typeof n == "string" || typeof n == "number") u += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (r = 0; r < s; r++) n[r] && (a = ug(n[r])) && (u && (u += " "), u += a);
  } else for (a in n) n[a] && (u && (u += " "), u += a);
  return u;
}
function og() {
  for (var n, r, a = 0, u = "", s = arguments.length; a < s; a++) (n = arguments[a]) && (r = ug(n)) && (u && (u += " "), u += r);
  return u;
}
const up = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, op = og, cg = (n, r) => (a) => {
  var u;
  if (r?.variants == null) return op(n, a?.class, a?.className);
  const { variants: s, defaultVariants: h } = r, f = Object.keys(s).map((d) => {
    const b = a?.[d], y = h?.[d];
    if (b === null) return null;
    const S = up(b) || up(y);
    return s[d][S];
  }), m = a && Object.entries(a).reduce((d, b) => {
    let [y, S] = b;
    return S === void 0 || (d[y] = S), d;
  }, {}), p = r == null || (u = r.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((d, b) => {
    let { class: y, className: S, ...x } = b;
    return Object.entries(x).every((A) => {
      let [R, L] = A;
      return Array.isArray(L) ? L.includes({
        ...h,
        ...m
      }[R]) : {
        ...h,
        ...m
      }[R] === L;
    }) ? [
      ...d,
      y,
      S
    ] : d;
  }, []);
  return op(n, f, p, a?.class, a?.className);
}, v1 = (n, r) => {
  const a = new Array(n.length + r.length);
  for (let u = 0; u < n.length; u++)
    a[u] = n[u];
  for (let u = 0; u < r.length; u++)
    a[n.length + u] = r[u];
  return a;
}, x1 = (n, r) => ({
  classGroupId: n,
  validator: r
}), sg = (n = /* @__PURE__ */ new Map(), r = null, a) => ({
  nextPart: n,
  validators: r,
  classGroupId: a
}), yu = "-", cp = [], S1 = "arbitrary..", k1 = (n) => {
  const r = w1(n), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: u
  } = n;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return E1(f);
      const m = f.split(yu), p = m[0] === "" && m.length > 1 ? 1 : 0;
      return fg(m, p, r);
    },
    getConflictingClassGroupIds: (f, m) => {
      if (m) {
        const p = u[f], d = a[f];
        return p ? d ? v1(d, p) : p : d || cp;
      }
      return a[f] || cp;
    }
  };
}, fg = (n, r, a) => {
  if (n.length - r === 0)
    return a.classGroupId;
  const s = n[r], h = a.nextPart.get(s);
  if (h) {
    const d = fg(n, r + 1, h);
    if (d) return d;
  }
  const f = a.validators;
  if (f === null)
    return;
  const m = r === 0 ? n.join(yu) : n.slice(r).join(yu), p = f.length;
  for (let d = 0; d < p; d++) {
    const b = f[d];
    if (b.validator(m))
      return b.classGroupId;
  }
}, E1 = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = n.slice(1, -1), a = r.indexOf(":"), u = r.slice(0, a);
  return u ? S1 + u : void 0;
})(), w1 = (n) => {
  const {
    theme: r,
    classGroups: a
  } = n;
  return A1(a, r);
}, A1 = (n, r) => {
  const a = sg();
  for (const u in n) {
    const s = n[u];
    Os(s, a, u, r);
  }
  return a;
}, Os = (n, r, a, u) => {
  const s = n.length;
  for (let h = 0; h < s; h++) {
    const f = n[h];
    z1(f, r, a, u);
  }
}, z1 = (n, r, a, u) => {
  if (typeof n == "string") {
    T1(n, r, a);
    return;
  }
  if (typeof n == "function") {
    C1(n, r, a, u);
    return;
  }
  _1(n, r, a, u);
}, T1 = (n, r, a) => {
  const u = n === "" ? r : hg(r, n);
  u.classGroupId = a;
}, C1 = (n, r, a, u) => {
  if (M1(n)) {
    Os(n(u), r, a, u);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(x1(a, n));
}, _1 = (n, r, a, u) => {
  const s = Object.entries(n), h = s.length;
  for (let f = 0; f < h; f++) {
    const [m, p] = s[f];
    Os(p, hg(r, m), a, u);
  }
}, hg = (n, r) => {
  let a = n;
  const u = r.split(yu), s = u.length;
  for (let h = 0; h < s; h++) {
    const f = u[h];
    let m = a.nextPart.get(f);
    m || (m = sg(), a.nextPart.set(f, m)), a = m;
  }
  return a;
}, M1 = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, O1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
  const s = (h, f) => {
    a[h] = f, r++, r > n && (r = 0, u = a, a = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(h) {
      let f = a[h];
      if (f !== void 0)
        return f;
      if ((f = u[h]) !== void 0)
        return s(h, f), f;
    },
    set(h, f) {
      h in a ? a[h] = f : s(h, f);
    }
  };
}, bs = "!", sp = ":", D1 = [], fp = (n, r, a, u, s) => ({
  modifiers: n,
  hasImportantModifier: r,
  baseClassName: a,
  maybePostfixModifierPosition: u,
  isExternal: s
}), R1 = (n) => {
  const {
    prefix: r,
    experimentalParseClassName: a
  } = n;
  let u = (s) => {
    const h = [];
    let f = 0, m = 0, p = 0, d;
    const b = s.length;
    for (let R = 0; R < b; R++) {
      const L = s[R];
      if (f === 0 && m === 0) {
        if (L === sp) {
          h.push(s.slice(p, R)), p = R + 1;
          continue;
        }
        if (L === "/") {
          d = R;
          continue;
        }
      }
      L === "[" ? f++ : L === "]" ? f-- : L === "(" ? m++ : L === ")" && m--;
    }
    const y = h.length === 0 ? s : s.slice(p);
    let S = y, x = !1;
    y.endsWith(bs) ? (S = y.slice(0, -1), x = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(bs) && (S = y.slice(1), x = !0)
    );
    const A = d && d > p ? d - p : void 0;
    return fp(h, x, S, A);
  };
  if (r) {
    const s = r + sp, h = u;
    u = (f) => f.startsWith(s) ? h(f.slice(s.length)) : fp(D1, !1, f, void 0, !0);
  }
  if (a) {
    const s = u;
    u = (h) => a({
      className: h,
      parseClassName: s
    });
  }
  return u;
}, N1 = (n) => {
  const r = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((a, u) => {
    r.set(a, 1e6 + u);
  }), (a) => {
    const u = [];
    let s = [];
    for (let h = 0; h < a.length; h++) {
      const f = a[h], m = f[0] === "[", p = r.has(f);
      m || p ? (s.length > 0 && (s.sort(), u.push(...s), s = []), u.push(f)) : s.push(f);
    }
    return s.length > 0 && (s.sort(), u.push(...s)), u;
  };
}, L1 = (n) => ({
  cache: O1(n.cacheSize),
  parseClassName: R1(n),
  sortModifiers: N1(n),
  ...k1(n)
}), U1 = /\s+/, j1 = (n, r) => {
  const {
    parseClassName: a,
    getClassGroupId: u,
    getConflictingClassGroupIds: s,
    sortModifiers: h
  } = r, f = [], m = n.trim().split(U1);
  let p = "";
  for (let d = m.length - 1; d >= 0; d -= 1) {
    const b = m[d], {
      isExternal: y,
      modifiers: S,
      hasImportantModifier: x,
      baseClassName: A,
      maybePostfixModifierPosition: R
    } = a(b);
    if (y) {
      p = b + (p.length > 0 ? " " + p : p);
      continue;
    }
    let L = !!R, _ = u(L ? A.substring(0, R) : A);
    if (!_) {
      if (!L) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (_ = u(A), !_) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      L = !1;
    }
    const Z = S.length === 0 ? "" : S.length === 1 ? S[0] : h(S).join(":"), H = x ? Z + bs : Z, lt = H + _;
    if (f.indexOf(lt) > -1)
      continue;
    f.push(lt);
    const ot = s(_, L);
    for (let B = 0; B < ot.length; ++B) {
      const P = ot[B];
      f.push(H + P);
    }
    p = b + (p.length > 0 ? " " + p : p);
  }
  return p;
}, B1 = (...n) => {
  let r = 0, a, u, s = "";
  for (; r < n.length; )
    (a = n[r++]) && (u = dg(a)) && (s && (s += " "), s += u);
  return s;
}, dg = (n) => {
  if (typeof n == "string")
    return n;
  let r, a = "";
  for (let u = 0; u < n.length; u++)
    n[u] && (r = dg(n[u])) && (a && (a += " "), a += r);
  return a;
}, H1 = (n, ...r) => {
  let a, u, s, h;
  const f = (p) => {
    const d = r.reduce((b, y) => y(b), n());
    return a = L1(d), u = a.cache.get, s = a.cache.set, h = m, m(p);
  }, m = (p) => {
    const d = u(p);
    if (d)
      return d;
    const b = j1(p, a);
    return s(p, b), b;
  };
  return h = f, (...p) => h(B1(...p));
}, q1 = [], ce = (n) => {
  const r = (a) => a[n] || q1;
  return r.isThemeGetter = !0, r;
}, mg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Y1 = /^\d+\/\d+$/, V1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, G1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, X1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Q1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Z1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wi = (n) => Y1.test(n), wt = (n) => !!n && !Number.isNaN(Number(n)), sl = (n) => !!n && Number.isInteger(Number(n)), Wc = (n) => n.endsWith("%") && wt(n.slice(0, -1)), jn = (n) => V1.test(n), K1 = () => !0, F1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  G1.test(n) && !X1.test(n)
), gg = () => !1, J1 = (n) => Q1.test(n), I1 = (n) => Z1.test(n), $1 = (n) => !rt(n) && !ut(n), W1 = (n) => Mi(n, vg, gg), rt = (n) => mg.test(n), Dl = (n) => Mi(n, xg, F1), Pc = (n) => Mi(n, lv, wt), hp = (n) => Mi(n, yg, gg), P1 = (n) => Mi(n, bg, I1), su = (n) => Mi(n, Sg, J1), ut = (n) => pg.test(n), _a = (n) => Oi(n, xg), tv = (n) => Oi(n, iv), dp = (n) => Oi(n, yg), ev = (n) => Oi(n, vg), nv = (n) => Oi(n, bg), fu = (n) => Oi(n, Sg, !0), Mi = (n, r, a) => {
  const u = mg.exec(n);
  return u ? u[1] ? r(u[1]) : a(u[2]) : !1;
}, Oi = (n, r, a = !1) => {
  const u = pg.exec(n);
  return u ? u[1] ? r(u[1]) : a : !1;
}, yg = (n) => n === "position" || n === "percentage", bg = (n) => n === "image" || n === "url", vg = (n) => n === "length" || n === "size" || n === "bg-size", xg = (n) => n === "length", lv = (n) => n === "number", iv = (n) => n === "family-name", Sg = (n) => n === "shadow", av = () => {
  const n = ce("color"), r = ce("font"), a = ce("text"), u = ce("font-weight"), s = ce("tracking"), h = ce("leading"), f = ce("breakpoint"), m = ce("container"), p = ce("spacing"), d = ce("radius"), b = ce("shadow"), y = ce("inset-shadow"), S = ce("text-shadow"), x = ce("drop-shadow"), A = ce("blur"), R = ce("perspective"), L = ce("aspect"), _ = ce("ease"), Z = ce("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], lt = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], ot = () => [...lt(), ut, rt], B = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], J = () => [ut, rt, p], mt = () => [wi, "full", "auto", ...J()], U = () => [sl, "none", "subgrid", ut, rt], et = () => ["auto", {
    span: ["full", sl, ut, rt]
  }, sl, ut, rt], tt = () => [sl, "auto", ut, rt], Et = () => ["auto", "min", "max", "fr", ut, rt], it = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...J()], K = () => [wi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...J()], Q = () => [n, ut, rt], xt = () => [...lt(), dp, hp, {
    position: [ut, rt]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", ev, W1, {
    size: [ut, rt]
  }], Y = () => [Wc, _a, Dl], k = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ut,
    rt
  ], $ = () => ["", wt, _a, Dl], ft = () => ["solid", "dashed", "dotted", "double"], st = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ht = () => [wt, Wc, dp, hp], Gt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    ut,
    rt
  ], Rt = () => ["none", wt, ut, rt], he = () => ["none", wt, ut, rt], Le = () => [wt, ut, rt], sn = () => [wi, "full", ...J()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [K1],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [$1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", wt],
      text: [jn],
      "text-shadow": [jn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", wi, rt, ut, L]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [wt, rt, ut, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: ot()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: mt()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": mt()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": mt()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: mt()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: mt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: mt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: mt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: mt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: mt()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [sl, "auto", ut, rt]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [wi, "full", "auto", m, ...J()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [wt, wi, "auto", "initial", "none", rt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", wt, ut, rt]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", wt, ut, rt]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [sl, "first", "last", "none", ut, rt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": U()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: et()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": tt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": tt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": U()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: et()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": tt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": tt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Et()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Et()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: J()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": J()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": J()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...it(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...it()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": it()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: J()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: J()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: J()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: J()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: J()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: J()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: J()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: J()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: J()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": J()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": J()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: K()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...K()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...K()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...K()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...K()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...K()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...K()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, _a, Dl]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [u, ut, Pc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wc, rt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tv, rt, r]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, ut, rt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [wt, "none", ut, Pc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          h,
          ...J()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ut, rt]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ut, rt]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: Q()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Q()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ft(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [wt, "from-font", "auto", ut, Dl]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Q()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [wt, "auto", ut, rt]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: J()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ut, rt]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ut, rt]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: xt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: E()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, sl, ut, rt],
          radial: ["", ut, rt],
          conic: [sl, ut, rt]
        }, nv, P1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Q()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Q()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Q()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Q()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: k()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": k()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": k()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": k()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": k()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": k()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": k()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": k()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": k()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": k()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": k()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": k()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": k()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": k()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": k()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": $()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ft(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ft(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: Q()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Q()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Q()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Q()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Q()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Q()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Q()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Q()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Q()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ft(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [wt, ut, rt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", wt, _a, Dl]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Q()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          b,
          fu,
          su
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Q()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, fu, su]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Q()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: Q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [wt, Dl]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Q()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": Q()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", S, fu, su]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Q()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [wt, ut, rt]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...st(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": st()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [wt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ht()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ht()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ht()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ht()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ht()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ht()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ht()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ht()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ht()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ht()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ht()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ht()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ht()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ht()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Q()
      }],
      "mask-image-radial": [{
        "mask-radial": [ut, rt]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ht()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ht()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": lt()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [wt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ht()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ht()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Q()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: xt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: E()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: z()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ut, rt]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ut,
          rt
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Gt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [wt, ut, rt]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [wt, ut, rt]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          fu,
          su
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", wt, ut, rt]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [wt, ut, rt]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", wt, ut, rt]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [wt, ut, rt]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", wt, ut, rt]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ut,
          rt
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Gt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [wt, ut, rt]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [wt, ut, rt]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", wt, ut, rt]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [wt, ut, rt]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", wt, ut, rt]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [wt, ut, rt]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [wt, ut, rt]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", wt, ut, rt]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": J()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": J()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": J()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ut, rt]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [wt, "initial", ut, rt]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, ut, rt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [wt, ut, rt]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Z, ut, rt]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [R, ut, rt]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ot()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Rt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Rt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Rt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Rt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: he()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": he()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": he()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": he()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ut, rt, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ot()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: sn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": sn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": sn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": sn()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: Q()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: Q()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ut, rt]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": J()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": J()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": J()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": J()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": J()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": J()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": J()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": J()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": J()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": J()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": J()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": J()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": J()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": J()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": J()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": J()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": J()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": J()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ut, rt]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...Q()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [wt, _a, Dl, Pc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Q()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, rv = /* @__PURE__ */ H1(av);
function kg(...n) {
  return rv(og(n));
}
const uv = cg(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-green-500 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-700 shadow-sm hover:shadow-md disabled:bg-gray-300 dark:disabled:bg-gray-700 focus-visible:ring-green-500",
        secondary: "bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 shadow-sm hover:shadow-md disabled:bg-gray-300 dark:disabled:bg-gray-800 focus-visible:ring-gray-500",
        outline: "bg-white dark:bg-gray-900 border-2 border-green-500 dark:border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 disabled:opacity-50 focus-visible:ring-green-500",
        ghost: "hover:bg-gray-200 dark:hover:bg-gray-800 disabled:opacity-50 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-base",
        icon: "p-2"
      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), ja = $t.forwardRef(
  ({ className: n, variant: r, size: a, fullWidth: u, ...s }, h) => /* @__PURE__ */ nt.jsx(
    "button",
    {
      className: kg(uv({ variant: r, size: a, fullWidth: u }), n),
      ref: h,
      ...s
    }
  )
);
ja.displayName = "Button";
function ov({
  loading: n,
  onSuggestionClick: r
}) {
  const { t: a } = Eu(), u = [
    {
      label: a.quickActions.summarize,
      prompt: a.suggestions.summarize
    },
    {
      label: a.quickActions.createPodcast,
      prompt: a.suggestions.createPodcast
    },
    {
      label: a.quickActions.generateQuestions,
      prompt: a.suggestions.generateQuestions
    },
    {
      label: a.quickActions.studyGuide,
      prompt: a.suggestions.studyGuide
    },
    {
      label: a.quickActions.quiz,
      prompt: a.suggestions.quiz
    }
  ];
  return /* @__PURE__ */ nt.jsx("div", { className: "flex flex-wrap gap-2", children: u.map((s, h) => /* @__PURE__ */ nt.jsx(
    ja,
    {
      onClick: () => r(s.prompt),
      disabled: n,
      variant: "outline",
      size: "sm",
      className: "rounded-full",
      children: s.label
    },
    h
  )) });
}
function cv(n, r) {
  const a = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const sv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, fv = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, hv = {};
function mp(n, r) {
  return (hv.jsx ? fv : sv).test(n);
}
const dv = /[ \t\n\f\r]/g;
function mv(n) {
  return typeof n == "object" ? n.type === "text" ? pp(n.value) : !1 : pp(n);
}
function pp(n) {
  return n.replace(dv, "") === "";
}
class qa {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(r, a, u) {
    this.normal = a, this.property = r, u && (this.space = u);
  }
}
qa.prototype.normal = {};
qa.prototype.property = {};
qa.prototype.space = void 0;
function Eg(n, r) {
  const a = {}, u = {};
  for (const s of n)
    Object.assign(a, s.property), Object.assign(u, s.normal);
  return new qa(a, u, r);
}
function vs(n) {
  return n.toLowerCase();
}
class Ne {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(r, a) {
    this.attribute = a, this.property = r;
  }
}
Ne.prototype.attribute = "";
Ne.prototype.booleanish = !1;
Ne.prototype.boolean = !1;
Ne.prototype.commaOrSpaceSeparated = !1;
Ne.prototype.commaSeparated = !1;
Ne.prototype.defined = !1;
Ne.prototype.mustUseProperty = !1;
Ne.prototype.number = !1;
Ne.prototype.overloadedBoolean = !1;
Ne.prototype.property = "";
Ne.prototype.spaceSeparated = !1;
Ne.prototype.space = void 0;
let pv = 0;
const kt = Ll(), re = Ll(), xs = Ll(), F = Ll(), Kt = Ll(), Ci = Ll(), Qe = Ll();
function Ll() {
  return 2 ** ++pv;
}
const Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: kt,
  booleanish: re,
  commaOrSpaceSeparated: Qe,
  commaSeparated: Ci,
  number: F,
  overloadedBoolean: xs,
  spaceSeparated: Kt
}, Symbol.toStringTag, { value: "Module" })), ts = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Ss)
);
class Ds extends Ne {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(r, a, u, s) {
    let h = -1;
    if (super(r, a), gp(this, "space", s), typeof u == "number")
      for (; ++h < ts.length; ) {
        const f = ts[h];
        gp(this, ts[h], (u & Ss[f]) === Ss[f]);
      }
  }
}
Ds.prototype.defined = !0;
function gp(n, r, a) {
  a && (n[r] = a);
}
function Di(n) {
  const r = {}, a = {};
  for (const [u, s] of Object.entries(n.properties)) {
    const h = new Ds(
      u,
      n.transform(n.attributes || {}, u),
      s,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(u) && (h.mustUseProperty = !0), r[u] = h, a[vs(u)] = u, a[vs(h.attribute)] = u;
  }
  return new qa(r, a, n.space);
}
const wg = Di({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: re,
    ariaAutoComplete: null,
    ariaBusy: re,
    ariaChecked: re,
    ariaColCount: F,
    ariaColIndex: F,
    ariaColSpan: F,
    ariaControls: Kt,
    ariaCurrent: null,
    ariaDescribedBy: Kt,
    ariaDetails: null,
    ariaDisabled: re,
    ariaDropEffect: Kt,
    ariaErrorMessage: null,
    ariaExpanded: re,
    ariaFlowTo: Kt,
    ariaGrabbed: re,
    ariaHasPopup: null,
    ariaHidden: re,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Kt,
    ariaLevel: F,
    ariaLive: null,
    ariaModal: re,
    ariaMultiLine: re,
    ariaMultiSelectable: re,
    ariaOrientation: null,
    ariaOwns: Kt,
    ariaPlaceholder: null,
    ariaPosInSet: F,
    ariaPressed: re,
    ariaReadOnly: re,
    ariaRelevant: null,
    ariaRequired: re,
    ariaRoleDescription: Kt,
    ariaRowCount: F,
    ariaRowIndex: F,
    ariaRowSpan: F,
    ariaSelected: re,
    ariaSetSize: F,
    ariaSort: null,
    ariaValueMax: F,
    ariaValueMin: F,
    ariaValueNow: F,
    ariaValueText: null,
    role: null
  },
  transform(n, r) {
    return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
  }
});
function Ag(n, r) {
  return r in n ? n[r] : r;
}
function zg(n, r) {
  return Ag(n, r.toLowerCase());
}
const gv = Di({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ci,
    acceptCharset: Kt,
    accessKey: Kt,
    action: null,
    allow: null,
    allowFullScreen: kt,
    allowPaymentRequest: kt,
    allowUserMedia: kt,
    alt: null,
    as: null,
    async: kt,
    autoCapitalize: null,
    autoComplete: Kt,
    autoFocus: kt,
    autoPlay: kt,
    blocking: Kt,
    capture: null,
    charSet: null,
    checked: kt,
    cite: null,
    className: Kt,
    cols: F,
    colSpan: null,
    content: null,
    contentEditable: re,
    controls: kt,
    controlsList: Kt,
    coords: F | Ci,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: kt,
    defer: kt,
    dir: null,
    dirName: null,
    disabled: kt,
    download: xs,
    draggable: re,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: kt,
    formTarget: null,
    headers: Kt,
    height: F,
    hidden: xs,
    high: F,
    href: null,
    hrefLang: null,
    htmlFor: Kt,
    httpEquiv: Kt,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: kt,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: kt,
    itemId: null,
    itemProp: Kt,
    itemRef: Kt,
    itemScope: kt,
    itemType: Kt,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: kt,
    low: F,
    manifest: null,
    max: null,
    maxLength: F,
    media: null,
    method: null,
    min: null,
    minLength: F,
    multiple: kt,
    muted: kt,
    name: null,
    nonce: null,
    noModule: kt,
    noValidate: kt,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: kt,
    optimum: F,
    pattern: null,
    ping: Kt,
    placeholder: null,
    playsInline: kt,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: kt,
    referrerPolicy: null,
    rel: Kt,
    required: kt,
    reversed: kt,
    rows: F,
    rowSpan: F,
    sandbox: Kt,
    scope: null,
    scoped: kt,
    seamless: kt,
    selected: kt,
    shadowRootClonable: kt,
    shadowRootDelegatesFocus: kt,
    shadowRootMode: null,
    shape: null,
    size: F,
    sizes: null,
    slot: null,
    span: F,
    spellCheck: re,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: F,
    step: null,
    style: null,
    tabIndex: F,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: kt,
    useMap: null,
    value: re,
    width: F,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Kt,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: F,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: F,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: kt,
    // Lists. Use CSS to reduce space between items instead
    declare: kt,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: F,
    // `<img>` and `<object>`
    leftMargin: F,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: F,
    // `<body>`
    marginWidth: F,
    // `<body>`
    noResize: kt,
    // `<frame>`
    noHref: kt,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: kt,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: kt,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: F,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: re,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: F,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: F,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: kt,
    disableRemotePlayback: kt,
    prefix: null,
    property: null,
    results: F,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: zg
}), yv = Di({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Qe,
    accentHeight: F,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: F,
    amplitude: F,
    arabicForm: null,
    ascent: F,
    attributeName: null,
    attributeType: null,
    azimuth: F,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: F,
    by: null,
    calcMode: null,
    capHeight: F,
    className: Kt,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: F,
    diffuseConstant: F,
    direction: null,
    display: null,
    dur: null,
    divisor: F,
    dominantBaseline: null,
    download: kt,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: F,
    enableBackground: null,
    end: null,
    event: null,
    exponent: F,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: F,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ci,
    g2: Ci,
    glyphName: Ci,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: F,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: F,
    horizOriginX: F,
    horizOriginY: F,
    id: null,
    ideographic: F,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: F,
    k: F,
    k1: F,
    k2: F,
    k3: F,
    k4: F,
    kernelMatrix: Qe,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: F,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: F,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: F,
    overlineThickness: F,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: F,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Kt,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: F,
    pointsAtY: F,
    pointsAtZ: F,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Qe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Qe,
    rev: Qe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Qe,
    requiredFeatures: Qe,
    requiredFonts: Qe,
    requiredFormats: Qe,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: F,
    specularExponent: F,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: F,
    strikethroughThickness: F,
    string: null,
    stroke: null,
    strokeDashArray: Qe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: F,
    strokeOpacity: F,
    strokeWidth: null,
    style: null,
    surfaceScale: F,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Qe,
    tabIndex: F,
    tableValues: null,
    target: null,
    targetX: F,
    targetY: F,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Qe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: F,
    underlineThickness: F,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: F,
    values: null,
    vAlphabetic: F,
    vMathematical: F,
    vectorEffect: null,
    vHanging: F,
    vIdeographic: F,
    version: null,
    vertAdvY: F,
    vertOriginX: F,
    vertOriginY: F,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: F,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ag
}), Tg = Di({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(n, r) {
    return "xlink:" + r.slice(5).toLowerCase();
  }
}), Cg = Di({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: zg
}), _g = Di({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, r) {
    return "xml:" + r.slice(3).toLowerCase();
  }
}), bv = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, vv = /[A-Z]/g, yp = /-[a-z]/g, xv = /^data[-\w.:]+$/i;
function Sv(n, r) {
  const a = vs(r);
  let u = r, s = Ne;
  if (a in n.normal)
    return n.property[n.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && xv.test(r)) {
    if (r.charAt(4) === "-") {
      const h = r.slice(5).replace(yp, Ev);
      u = "data" + h.charAt(0).toUpperCase() + h.slice(1);
    } else {
      const h = r.slice(4);
      if (!yp.test(h)) {
        let f = h.replace(vv, kv);
        f.charAt(0) !== "-" && (f = "-" + f), r = "data" + f;
      }
    }
    s = Ds;
  }
  return new s(u, r);
}
function kv(n) {
  return "-" + n.toLowerCase();
}
function Ev(n) {
  return n.charAt(1).toUpperCase();
}
const wv = Eg([wg, gv, Tg, Cg, _g], "html"), Rs = Eg([wg, yv, Tg, Cg, _g], "svg");
function Av(n) {
  return n.join(" ").trim();
}
var Ai = {}, es, bp;
function zv() {
  if (bp) return es;
  bp = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, a = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, h = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, f = /^[;\s]*/, m = /^\s+|\s+$/g, p = `
`, d = "/", b = "*", y = "", S = "comment", x = "declaration";
  function A(L, _) {
    if (typeof L != "string")
      throw new TypeError("First argument must be a string");
    if (!L) return [];
    _ = _ || {};
    var Z = 1, H = 1;
    function lt(it) {
      var I = it.match(r);
      I && (Z += I.length);
      var M = it.lastIndexOf(p);
      H = ~M ? it.length - M : H + it.length;
    }
    function ot() {
      var it = { line: Z, column: H };
      return function(I) {
        return I.position = new B(it), mt(), I;
      };
    }
    function B(it) {
      this.start = it, this.end = { line: Z, column: H }, this.source = _.source;
    }
    B.prototype.content = L;
    function P(it) {
      var I = new Error(
        _.source + ":" + Z + ":" + H + ": " + it
      );
      if (I.reason = it, I.filename = _.source, I.line = Z, I.column = H, I.source = L, !_.silent) throw I;
    }
    function J(it) {
      var I = it.exec(L);
      if (I) {
        var M = I[0];
        return lt(M), L = L.slice(M.length), I;
      }
    }
    function mt() {
      J(a);
    }
    function U(it) {
      var I;
      for (it = it || []; I = et(); )
        I !== !1 && it.push(I);
      return it;
    }
    function et() {
      var it = ot();
      if (!(d != L.charAt(0) || b != L.charAt(1))) {
        for (var I = 2; y != L.charAt(I) && (b != L.charAt(I) || d != L.charAt(I + 1)); )
          ++I;
        if (I += 2, y === L.charAt(I - 1))
          return P("End of comment missing");
        var M = L.slice(2, I - 2);
        return H += 2, lt(M), L = L.slice(I), H += 2, it({
          type: S,
          comment: M
        });
      }
    }
    function tt() {
      var it = ot(), I = J(u);
      if (I) {
        if (et(), !J(s)) return P("property missing ':'");
        var M = J(h), K = it({
          type: x,
          property: R(I[0].replace(n, y)),
          value: M ? R(M[0].replace(n, y)) : y
        });
        return J(f), K;
      }
    }
    function Et() {
      var it = [];
      U(it);
      for (var I; I = tt(); )
        I !== !1 && (it.push(I), U(it));
      return it;
    }
    return mt(), Et();
  }
  function R(L) {
    return L ? L.replace(m, y) : y;
  }
  return es = A, es;
}
var vp;
function Tv() {
  if (vp) return Ai;
  vp = 1;
  var n = Ai && Ai.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.default = a;
  const r = n(zv());
  function a(u, s) {
    let h = null;
    if (!u || typeof u != "string")
      return h;
    const f = (0, r.default)(u), m = typeof s == "function";
    return f.forEach((p) => {
      if (p.type !== "declaration")
        return;
      const { property: d, value: b } = p;
      m ? s(d, b, p) : b && (h = h || {}, h[d] = b);
    }), h;
  }
  return Ai;
}
var Ma = {}, xp;
function Cv() {
  if (xp) return Ma;
  xp = 1, Object.defineProperty(Ma, "__esModule", { value: !0 }), Ma.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, a = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, h = function(d) {
    return !d || a.test(d) || n.test(d);
  }, f = function(d, b) {
    return b.toUpperCase();
  }, m = function(d, b) {
    return "".concat(b, "-");
  }, p = function(d, b) {
    return b === void 0 && (b = {}), h(d) ? d : (d = d.toLowerCase(), b.reactCompat ? d = d.replace(s, m) : d = d.replace(u, m), d.replace(r, f));
  };
  return Ma.camelCase = p, Ma;
}
var Oa, Sp;
function _v() {
  if (Sp) return Oa;
  Sp = 1;
  var n = Oa && Oa.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, r = n(Tv()), a = Cv();
  function u(s, h) {
    var f = {};
    return !s || typeof s != "string" || (0, r.default)(s, function(m, p) {
      m && p && (f[(0, a.camelCase)(m, h)] = p);
    }), f;
  }
  return u.default = u, Oa = u, Oa;
}
var Mv = _v();
const Ov = /* @__PURE__ */ ku(Mv), Mg = Og("end"), Ns = Og("start");
function Og(n) {
  return r;
  function r(a) {
    const u = a && a.position && a.position[n] || {};
    if (typeof u.line == "number" && u.line > 0 && typeof u.column == "number" && u.column > 0)
      return {
        line: u.line,
        column: u.column,
        offset: typeof u.offset == "number" && u.offset > -1 ? u.offset : void 0
      };
  }
}
function Dv(n) {
  const r = Ns(n), a = Mg(n);
  if (r && a)
    return { start: r, end: a };
}
function Na(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? kp(n.position) : "start" in n || "end" in n ? kp(n) : "line" in n || "column" in n ? ks(n) : "";
}
function ks(n) {
  return Ep(n && n.line) + ":" + Ep(n && n.column);
}
function kp(n) {
  return ks(n && n.start) + "-" + ks(n && n.end);
}
function Ep(n) {
  return n && typeof n == "number" ? n : 1;
}
class xe extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(r, a, u) {
    super(), typeof a == "string" && (u = a, a = void 0);
    let s = "", h = {}, f = !1;
    if (a && ("line" in a && "column" in a ? h = { place: a } : "start" in a && "end" in a ? h = { place: a } : "type" in a ? h = {
      ancestors: [a],
      place: a.position
    } : h = { ...a }), typeof r == "string" ? s = r : !h.cause && r && (f = !0, s = r.message, h.cause = r), !h.ruleId && !h.source && typeof u == "string") {
      const p = u.indexOf(":");
      p === -1 ? h.ruleId = u : (h.source = u.slice(0, p), h.ruleId = u.slice(p + 1));
    }
    if (!h.place && h.ancestors && h.ancestors) {
      const p = h.ancestors[h.ancestors.length - 1];
      p && (h.place = p.position);
    }
    const m = h.place && "start" in h.place ? h.place.start : h.place;
    this.ancestors = h.ancestors || void 0, this.cause = h.cause || void 0, this.column = m ? m.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = m ? m.line : void 0, this.name = Na(h.place) || "1:1", this.place = h.place || void 0, this.reason = this.message, this.ruleId = h.ruleId || void 0, this.source = h.source || void 0, this.stack = f && h.cause && typeof h.cause.stack == "string" ? h.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
xe.prototype.file = "";
xe.prototype.name = "";
xe.prototype.reason = "";
xe.prototype.message = "";
xe.prototype.stack = "";
xe.prototype.column = void 0;
xe.prototype.line = void 0;
xe.prototype.ancestors = void 0;
xe.prototype.cause = void 0;
xe.prototype.fatal = void 0;
xe.prototype.place = void 0;
xe.prototype.ruleId = void 0;
xe.prototype.source = void 0;
const Ls = {}.hasOwnProperty, Rv = /* @__PURE__ */ new Map(), Nv = /[A-Z]/g, Lv = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Uv = /* @__PURE__ */ new Set(["td", "th"]), Dg = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function jv(n, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = r.filePath || void 0;
  let u;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = Qv(a, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = Xv(a, r.jsx, r.jsxs);
  }
  const s = {
    Fragment: r.Fragment,
    ancestors: [],
    components: r.components || {},
    create: u,
    elementAttributeNameCase: r.elementAttributeNameCase || "react",
    evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
    filePath: a,
    ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
    passKeys: r.passKeys !== !1,
    passNode: r.passNode || !1,
    schema: r.space === "svg" ? Rs : wv,
    stylePropertyNameCase: r.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: r.tableCellAlignToStyle !== !1
  }, h = Rg(s, n, void 0);
  return h && typeof h != "string" ? h : s.create(
    n,
    s.Fragment,
    { children: h || void 0 },
    void 0
  );
}
function Rg(n, r, a) {
  if (r.type === "element")
    return Bv(n, r, a);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return Hv(n, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return Yv(n, r, a);
  if (r.type === "mdxjsEsm")
    return qv(n, r);
  if (r.type === "root")
    return Vv(n, r, a);
  if (r.type === "text")
    return Gv(n, r);
}
function Bv(n, r, a) {
  const u = n.schema;
  let s = u;
  r.tagName.toLowerCase() === "svg" && u.space === "html" && (s = Rs, n.schema = s), n.ancestors.push(r);
  const h = Lg(n, r.tagName, !1), f = Zv(n, r);
  let m = js(n, r);
  return Lv.has(r.tagName) && (m = m.filter(function(p) {
    return typeof p == "string" ? !mv(p) : !0;
  })), Ng(n, f, h, r), Us(f, m), n.ancestors.pop(), n.schema = u, n.create(r, h, f, a);
}
function Hv(n, r) {
  if (r.data && r.data.estree && n.evaluater) {
    const u = r.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(u.expression);
  }
  Ba(n, r.position);
}
function qv(n, r) {
  if (r.data && r.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(r.data.estree)
    );
  Ba(n, r.position);
}
function Yv(n, r, a) {
  const u = n.schema;
  let s = u;
  r.name === "svg" && u.space === "html" && (s = Rs, n.schema = s), n.ancestors.push(r);
  const h = r.name === null ? n.Fragment : Lg(n, r.name, !0), f = Kv(n, r), m = js(n, r);
  return Ng(n, f, h, r), Us(f, m), n.ancestors.pop(), n.schema = u, n.create(r, h, f, a);
}
function Vv(n, r, a) {
  const u = {};
  return Us(u, js(n, r)), n.create(r, n.Fragment, u, a);
}
function Gv(n, r) {
  return r.value;
}
function Ng(n, r, a, u) {
  typeof a != "string" && a !== n.Fragment && n.passNode && (r.node = u);
}
function Us(n, r) {
  if (r.length > 0) {
    const a = r.length > 1 ? r : r[0];
    a && (n.children = a);
  }
}
function Xv(n, r, a) {
  return u;
  function u(s, h, f, m) {
    const d = Array.isArray(f.children) ? a : r;
    return m ? d(h, f, m) : d(h, f);
  }
}
function Qv(n, r) {
  return a;
  function a(u, s, h, f) {
    const m = Array.isArray(h.children), p = Ns(u);
    return r(
      s,
      h,
      f,
      m,
      {
        columnNumber: p ? p.column - 1 : void 0,
        fileName: n,
        lineNumber: p ? p.line : void 0
      },
      void 0
    );
  }
}
function Zv(n, r) {
  const a = {};
  let u, s;
  for (s in r.properties)
    if (s !== "children" && Ls.call(r.properties, s)) {
      const h = Fv(n, s, r.properties[s]);
      if (h) {
        const [f, m] = h;
        n.tableCellAlignToStyle && f === "align" && typeof m == "string" && Uv.has(r.tagName) ? u = m : a[f] = m;
      }
    }
  if (u) {
    const h = (
      /** @type {Style} */
      a.style || (a.style = {})
    );
    h[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return a;
}
function Kv(n, r) {
  const a = {};
  for (const u of r.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && n.evaluater) {
        const h = u.data.estree.body[0];
        h.type;
        const f = h.expression;
        f.type;
        const m = f.properties[0];
        m.type, Object.assign(
          a,
          n.evaluater.evaluateExpression(m.argument)
        );
      } else
        Ba(n, r.position);
    else {
      const s = u.name;
      let h;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && n.evaluater) {
          const m = u.value.data.estree.body[0];
          m.type, h = n.evaluater.evaluateExpression(m.expression);
        } else
          Ba(n, r.position);
      else
        h = u.value === null ? !0 : u.value;
      a[s] = /** @type {Props[keyof Props]} */
      h;
    }
  return a;
}
function js(n, r) {
  const a = [];
  let u = -1;
  const s = n.passKeys ? /* @__PURE__ */ new Map() : Rv;
  for (; ++u < r.children.length; ) {
    const h = r.children[u];
    let f;
    if (n.passKeys) {
      const p = h.type === "element" ? h.tagName : h.type === "mdxJsxFlowElement" || h.type === "mdxJsxTextElement" ? h.name : void 0;
      if (p) {
        const d = s.get(p) || 0;
        f = p + "-" + d, s.set(p, d + 1);
      }
    }
    const m = Rg(n, h, f);
    m !== void 0 && a.push(m);
  }
  return a;
}
function Fv(n, r, a) {
  const u = Sv(n.schema, r);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = u.commaSeparated ? cv(a) : Av(a)), u.property === "style") {
      let s = typeof a == "object" ? a : Jv(n, String(a));
      return n.stylePropertyNameCase === "css" && (s = Iv(s)), ["style", s];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space ? bv[u.property] || u.property : u.attribute,
      a
    ];
  }
}
function Jv(n, r) {
  try {
    return Ov(r, { reactCompat: !0 });
  } catch (a) {
    if (n.ignoreInvalidStyle)
      return {};
    const u = (
      /** @type {Error} */
      a
    ), s = new xe("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: u,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = n.filePath || void 0, s.url = Dg + "#cannot-parse-style-attribute", s;
  }
}
function Lg(n, r, a) {
  let u;
  if (!a)
    u = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const s = r.split(".");
    let h = -1, f;
    for (; ++h < s.length; ) {
      const m = mp(s[h]) ? { type: "Identifier", name: s[h] } : { type: "Literal", value: s[h] };
      f = f ? {
        type: "MemberExpression",
        object: f,
        property: m,
        computed: !!(h && m.type === "Literal"),
        optional: !1
      } : m;
    }
    u = f;
  } else
    u = mp(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
  if (u.type === "Literal") {
    const s = (
      /** @type {string | number} */
      u.value
    );
    return Ls.call(n.components, s) ? n.components[s] : s;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(u);
  Ba(n);
}
function Ba(n, r) {
  const a = new xe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw a.file = n.filePath || void 0, a.url = Dg + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function Iv(n) {
  const r = {};
  let a;
  for (a in n)
    Ls.call(n, a) && (r[$v(a)] = n[a]);
  return r;
}
function $v(n) {
  let r = n.replace(Nv, Wv);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function Wv(n) {
  return "-" + n.toLowerCase();
}
const ns = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Pv = {};
function Bs(n, r) {
  const a = Pv, u = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, s = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return Ug(n, u, s);
}
function Ug(n, r, a) {
  if (tx(n)) {
    if ("value" in n)
      return n.type === "html" && !a ? "" : n.value;
    if (r && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return wp(n.children, r, a);
  }
  return Array.isArray(n) ? wp(n, r, a) : "";
}
function wp(n, r, a) {
  const u = [];
  let s = -1;
  for (; ++s < n.length; )
    u[s] = Ug(n[s], r, a);
  return u.join("");
}
function tx(n) {
  return !!(n && typeof n == "object");
}
const Ap = document.createElement("i");
function Hs(n) {
  const r = "&" + n + ";";
  Ap.innerHTML = r;
  const a = Ap.textContent;
  return a.charCodeAt(a.length - 1) === 59 && n !== "semi" || a === r ? !1 : a;
}
function Ze(n, r, a, u) {
  const s = n.length;
  let h = 0, f;
  if (r < 0 ? r = -r > s ? 0 : s + r : r = r > s ? s : r, a = a > 0 ? a : 0, u.length < 1e4)
    f = Array.from(u), f.unshift(r, a), n.splice(...f);
  else
    for (a && n.splice(r, a); h < u.length; )
      f = u.slice(h, h + 1e4), f.unshift(r, 0), n.splice(...f), h += 1e4, r += 1e4;
}
function ln(n, r) {
  return n.length > 0 ? (Ze(n, n.length, 0, r), n) : r;
}
const zp = {}.hasOwnProperty;
function jg(n) {
  const r = {};
  let a = -1;
  for (; ++a < n.length; )
    ex(r, n[a]);
  return r;
}
function ex(n, r) {
  let a;
  for (a in r) {
    const s = (zp.call(n, a) ? n[a] : void 0) || (n[a] = {}), h = r[a];
    let f;
    if (h)
      for (f in h) {
        zp.call(s, f) || (s[f] = []);
        const m = h[f];
        nx(
          // @ts-expect-error Looks like a list.
          s[f],
          Array.isArray(m) ? m : m ? [m] : []
        );
      }
  }
}
function nx(n, r) {
  let a = -1;
  const u = [];
  for (; ++a < r.length; )
    (r[a].add === "after" ? n : u).push(r[a]);
  Ze(n, 0, 0, u);
}
function Bg(n, r) {
  const a = Number.parseInt(n, r);
  return (
    // C0 except for HT, LF, FF, CR, space.
    a < 9 || a === 11 || a > 13 && a < 32 || // Control character (DEL) of C0, and C1 controls.
    a > 126 && a < 160 || // Lone high surrogates and low surrogates.
    a > 55295 && a < 57344 || // Noncharacters.
    a > 64975 && a < 65008 || /* eslint-disable no-bitwise */
    (a & 65535) === 65535 || (a & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    a > 1114111 ? "�" : String.fromCodePoint(a)
  );
}
function cn(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const we = hl(/[A-Za-z]/), ve = hl(/[\dA-Za-z]/), lx = hl(/[#-'*+\--9=?A-Z^-~]/);
function bu(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const Es = hl(/\d/), ix = hl(/[\dA-Fa-f]/), ax = hl(/[!-/:-@[-`{-~]/);
function pt(n) {
  return n !== null && n < -2;
}
function Zt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Ct(n) {
  return n === -2 || n === -1 || n === 32;
}
const wu = hl(new RegExp("\\p{P}|\\p{S}", "u")), Nl = hl(/\s/);
function hl(n) {
  return r;
  function r(a) {
    return a !== null && a > -1 && n.test(String.fromCharCode(a));
  }
}
function Ri(n) {
  const r = [];
  let a = -1, u = 0, s = 0;
  for (; ++a < n.length; ) {
    const h = n.charCodeAt(a);
    let f = "";
    if (h === 37 && ve(n.charCodeAt(a + 1)) && ve(n.charCodeAt(a + 2)))
      s = 2;
    else if (h < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(h)) || (f = String.fromCharCode(h));
    else if (h > 55295 && h < 57344) {
      const m = n.charCodeAt(a + 1);
      h < 56320 && m > 56319 && m < 57344 ? (f = String.fromCharCode(h, m), s = 1) : f = "�";
    } else
      f = String.fromCharCode(h);
    f && (r.push(n.slice(u, a), encodeURIComponent(f)), u = a + s + 1, f = ""), s && (a += s, s = 0);
  }
  return r.join("") + n.slice(u);
}
function Dt(n, r, a, u) {
  const s = u ? u - 1 : Number.POSITIVE_INFINITY;
  let h = 0;
  return f;
  function f(p) {
    return Ct(p) ? (n.enter(a), m(p)) : r(p);
  }
  function m(p) {
    return Ct(p) && h++ < s ? (n.consume(p), m) : (n.exit(a), r(p));
  }
}
const rx = {
  tokenize: ux
};
function ux(n) {
  const r = n.attempt(this.parser.constructs.contentInitial, u, s);
  let a;
  return r;
  function u(m) {
    if (m === null) {
      n.consume(m);
      return;
    }
    return n.enter("lineEnding"), n.consume(m), n.exit("lineEnding"), Dt(n, r, "linePrefix");
  }
  function s(m) {
    return n.enter("paragraph"), h(m);
  }
  function h(m) {
    const p = n.enter("chunkText", {
      contentType: "text",
      previous: a
    });
    return a && (a.next = p), a = p, f(m);
  }
  function f(m) {
    if (m === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(m);
      return;
    }
    return pt(m) ? (n.consume(m), n.exit("chunkText"), h) : (n.consume(m), f);
  }
}
const ox = {
  tokenize: cx
}, Tp = {
  tokenize: sx
};
function cx(n) {
  const r = this, a = [];
  let u = 0, s, h, f;
  return m;
  function m(H) {
    if (u < a.length) {
      const lt = a[u];
      return r.containerState = lt[1], n.attempt(lt[0].continuation, p, d)(H);
    }
    return d(H);
  }
  function p(H) {
    if (u++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, s && Z();
      const lt = r.events.length;
      let ot = lt, B;
      for (; ot--; )
        if (r.events[ot][0] === "exit" && r.events[ot][1].type === "chunkFlow") {
          B = r.events[ot][1].end;
          break;
        }
      _(u);
      let P = lt;
      for (; P < r.events.length; )
        r.events[P][1].end = {
          ...B
        }, P++;
      return Ze(r.events, ot + 1, 0, r.events.slice(lt)), r.events.length = P, d(H);
    }
    return m(H);
  }
  function d(H) {
    if (u === a.length) {
      if (!s)
        return S(H);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return A(H);
      r.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, n.check(Tp, b, y)(H);
  }
  function b(H) {
    return s && Z(), _(u), S(H);
  }
  function y(H) {
    return r.parser.lazy[r.now().line] = u !== a.length, f = r.now().offset, A(H);
  }
  function S(H) {
    return r.containerState = {}, n.attempt(Tp, x, A)(H);
  }
  function x(H) {
    return u++, a.push([r.currentConstruct, r.containerState]), S(H);
  }
  function A(H) {
    if (H === null) {
      s && Z(), _(0), n.consume(H);
      return;
    }
    return s = s || r.parser.flow(r.now()), n.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: h
    }), R(H);
  }
  function R(H) {
    if (H === null) {
      L(n.exit("chunkFlow"), !0), _(0), n.consume(H);
      return;
    }
    return pt(H) ? (n.consume(H), L(n.exit("chunkFlow")), u = 0, r.interrupt = void 0, m) : (n.consume(H), R);
  }
  function L(H, lt) {
    const ot = r.sliceStream(H);
    if (lt && ot.push(null), H.previous = h, h && (h.next = H), h = H, s.defineSkip(H.start), s.write(ot), r.parser.lazy[H.start.line]) {
      let B = s.events.length;
      for (; B--; )
        if (
          // The token starts before the line ending…
          s.events[B][1].start.offset < f && // …and either is not ended yet…
          (!s.events[B][1].end || // …or ends after it.
          s.events[B][1].end.offset > f)
        )
          return;
      const P = r.events.length;
      let J = P, mt, U;
      for (; J--; )
        if (r.events[J][0] === "exit" && r.events[J][1].type === "chunkFlow") {
          if (mt) {
            U = r.events[J][1].end;
            break;
          }
          mt = !0;
        }
      for (_(u), B = P; B < r.events.length; )
        r.events[B][1].end = {
          ...U
        }, B++;
      Ze(r.events, J + 1, 0, r.events.slice(P)), r.events.length = B;
    }
  }
  function _(H) {
    let lt = a.length;
    for (; lt-- > H; ) {
      const ot = a[lt];
      r.containerState = ot[1], ot[0].exit.call(r, n);
    }
    a.length = H;
  }
  function Z() {
    s.write([null]), h = void 0, s = void 0, r.containerState._closeFlow = void 0;
  }
}
function sx(n, r, a) {
  return Dt(n, n.attempt(this.parser.constructs.document, r, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function _i(n) {
  if (n === null || Zt(n) || Nl(n))
    return 1;
  if (wu(n))
    return 2;
}
function Au(n, r, a) {
  const u = [];
  let s = -1;
  for (; ++s < n.length; ) {
    const h = n[s].resolveAll;
    h && !u.includes(h) && (r = h(r, a), u.push(h));
  }
  return r;
}
const ws = {
  name: "attention",
  resolveAll: fx,
  tokenize: hx
};
function fx(n, r) {
  let a = -1, u, s, h, f, m, p, d, b;
  for (; ++a < n.length; )
    if (n[a][0] === "enter" && n[a][1].type === "attentionSequence" && n[a][1]._close) {
      for (u = a; u--; )
        if (n[u][0] === "exit" && n[u][1].type === "attentionSequence" && n[u][1]._open && // If the markers are the same:
        r.sliceSerialize(n[u][1]).charCodeAt(0) === r.sliceSerialize(n[a][1]).charCodeAt(0)) {
          if ((n[u][1]._close || n[a][1]._open) && (n[a][1].end.offset - n[a][1].start.offset) % 3 && !((n[u][1].end.offset - n[u][1].start.offset + n[a][1].end.offset - n[a][1].start.offset) % 3))
            continue;
          p = n[u][1].end.offset - n[u][1].start.offset > 1 && n[a][1].end.offset - n[a][1].start.offset > 1 ? 2 : 1;
          const y = {
            ...n[u][1].end
          }, S = {
            ...n[a][1].start
          };
          Cp(y, -p), Cp(S, p), f = {
            type: p > 1 ? "strongSequence" : "emphasisSequence",
            start: y,
            end: {
              ...n[u][1].end
            }
          }, m = {
            type: p > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[a][1].start
            },
            end: S
          }, h = {
            type: p > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[u][1].end
            },
            end: {
              ...n[a][1].start
            }
          }, s = {
            type: p > 1 ? "strong" : "emphasis",
            start: {
              ...f.start
            },
            end: {
              ...m.end
            }
          }, n[u][1].end = {
            ...f.start
          }, n[a][1].start = {
            ...m.end
          }, d = [], n[u][1].end.offset - n[u][1].start.offset && (d = ln(d, [["enter", n[u][1], r], ["exit", n[u][1], r]])), d = ln(d, [["enter", s, r], ["enter", f, r], ["exit", f, r], ["enter", h, r]]), d = ln(d, Au(r.parser.constructs.insideSpan.null, n.slice(u + 1, a), r)), d = ln(d, [["exit", h, r], ["enter", m, r], ["exit", m, r], ["exit", s, r]]), n[a][1].end.offset - n[a][1].start.offset ? (b = 2, d = ln(d, [["enter", n[a][1], r], ["exit", n[a][1], r]])) : b = 0, Ze(n, u - 1, a - u + 3, d), a = u + d.length - b - 2;
          break;
        }
    }
  for (a = -1; ++a < n.length; )
    n[a][1].type === "attentionSequence" && (n[a][1].type = "data");
  return n;
}
function hx(n, r) {
  const a = this.parser.constructs.attentionMarkers.null, u = this.previous, s = _i(u);
  let h;
  return f;
  function f(p) {
    return h = p, n.enter("attentionSequence"), m(p);
  }
  function m(p) {
    if (p === h)
      return n.consume(p), m;
    const d = n.exit("attentionSequence"), b = _i(p), y = !b || b === 2 && s || a.includes(p), S = !s || s === 2 && b || a.includes(u);
    return d._open = !!(h === 42 ? y : y && (s || !S)), d._close = !!(h === 42 ? S : S && (b || !y)), r(p);
  }
}
function Cp(n, r) {
  n.column += r, n.offset += r, n._bufferIndex += r;
}
const dx = {
  name: "autolink",
  tokenize: mx
};
function mx(n, r, a) {
  let u = 0;
  return s;
  function s(x) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), h;
  }
  function h(x) {
    return we(x) ? (n.consume(x), f) : x === 64 ? a(x) : d(x);
  }
  function f(x) {
    return x === 43 || x === 45 || x === 46 || ve(x) ? (u = 1, m(x)) : d(x);
  }
  function m(x) {
    return x === 58 ? (n.consume(x), u = 0, p) : (x === 43 || x === 45 || x === 46 || ve(x)) && u++ < 32 ? (n.consume(x), m) : (u = 0, d(x));
  }
  function p(x) {
    return x === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), r) : x === null || x === 32 || x === 60 || bu(x) ? a(x) : (n.consume(x), p);
  }
  function d(x) {
    return x === 64 ? (n.consume(x), b) : lx(x) ? (n.consume(x), d) : a(x);
  }
  function b(x) {
    return ve(x) ? y(x) : a(x);
  }
  function y(x) {
    return x === 46 ? (n.consume(x), u = 0, b) : x === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), r) : S(x);
  }
  function S(x) {
    if ((x === 45 || ve(x)) && u++ < 63) {
      const A = x === 45 ? S : y;
      return n.consume(x), A;
    }
    return a(x);
  }
}
const Ya = {
  partial: !0,
  tokenize: px
};
function px(n, r, a) {
  return u;
  function u(h) {
    return Ct(h) ? Dt(n, s, "linePrefix")(h) : s(h);
  }
  function s(h) {
    return h === null || pt(h) ? r(h) : a(h);
  }
}
const Hg = {
  continuation: {
    tokenize: yx
  },
  exit: bx,
  name: "blockQuote",
  tokenize: gx
};
function gx(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    if (f === 62) {
      const m = u.containerState;
      return m.open || (n.enter("blockQuote", {
        _container: !0
      }), m.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(f), n.exit("blockQuoteMarker"), h;
    }
    return a(f);
  }
  function h(f) {
    return Ct(f) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(f), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), r) : (n.exit("blockQuotePrefix"), r(f));
  }
}
function yx(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return Ct(f) ? Dt(n, h, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : h(f);
  }
  function h(f) {
    return n.attempt(Hg, r, a)(f);
  }
}
function bx(n) {
  n.exit("blockQuote");
}
const qg = {
  name: "characterEscape",
  tokenize: vx
};
function vx(n, r, a) {
  return u;
  function u(h) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(h), n.exit("escapeMarker"), s;
  }
  function s(h) {
    return ax(h) ? (n.enter("characterEscapeValue"), n.consume(h), n.exit("characterEscapeValue"), n.exit("characterEscape"), r) : a(h);
  }
}
const Yg = {
  name: "characterReference",
  tokenize: xx
};
function xx(n, r, a) {
  const u = this;
  let s = 0, h, f;
  return m;
  function m(y) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), p;
  }
  function p(y) {
    return y === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(y), n.exit("characterReferenceMarkerNumeric"), d) : (n.enter("characterReferenceValue"), h = 31, f = ve, b(y));
  }
  function d(y) {
    return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(y), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), h = 6, f = ix, b) : (n.enter("characterReferenceValue"), h = 7, f = Es, b(y));
  }
  function b(y) {
    if (y === 59 && s) {
      const S = n.exit("characterReferenceValue");
      return f === ve && !Hs(u.sliceSerialize(S)) ? a(y) : (n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), n.exit("characterReference"), r);
    }
    return f(y) && s++ < h ? (n.consume(y), b) : a(y);
  }
}
const _p = {
  partial: !0,
  tokenize: kx
}, Mp = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Sx
};
function Sx(n, r, a) {
  const u = this, s = {
    partial: !0,
    tokenize: ot
  };
  let h = 0, f = 0, m;
  return p;
  function p(B) {
    return d(B);
  }
  function d(B) {
    const P = u.events[u.events.length - 1];
    return h = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0, m = B, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), b(B);
  }
  function b(B) {
    return B === m ? (f++, n.consume(B), b) : f < 3 ? a(B) : (n.exit("codeFencedFenceSequence"), Ct(B) ? Dt(n, y, "whitespace")(B) : y(B));
  }
  function y(B) {
    return B === null || pt(B) ? (n.exit("codeFencedFence"), u.interrupt ? r(B) : n.check(_p, R, lt)(B)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), S(B));
  }
  function S(B) {
    return B === null || pt(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(B)) : Ct(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Dt(n, x, "whitespace")(B)) : B === 96 && B === m ? a(B) : (n.consume(B), S);
  }
  function x(B) {
    return B === null || pt(B) ? y(B) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), A(B));
  }
  function A(B) {
    return B === null || pt(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), y(B)) : B === 96 && B === m ? a(B) : (n.consume(B), A);
  }
  function R(B) {
    return n.attempt(s, lt, L)(B);
  }
  function L(B) {
    return n.enter("lineEnding"), n.consume(B), n.exit("lineEnding"), _;
  }
  function _(B) {
    return h > 0 && Ct(B) ? Dt(n, Z, "linePrefix", h + 1)(B) : Z(B);
  }
  function Z(B) {
    return B === null || pt(B) ? n.check(_p, R, lt)(B) : (n.enter("codeFlowValue"), H(B));
  }
  function H(B) {
    return B === null || pt(B) ? (n.exit("codeFlowValue"), Z(B)) : (n.consume(B), H);
  }
  function lt(B) {
    return n.exit("codeFenced"), r(B);
  }
  function ot(B, P, J) {
    let mt = 0;
    return U;
    function U(I) {
      return B.enter("lineEnding"), B.consume(I), B.exit("lineEnding"), et;
    }
    function et(I) {
      return B.enter("codeFencedFence"), Ct(I) ? Dt(B, tt, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(I) : tt(I);
    }
    function tt(I) {
      return I === m ? (B.enter("codeFencedFenceSequence"), Et(I)) : J(I);
    }
    function Et(I) {
      return I === m ? (mt++, B.consume(I), Et) : mt >= f ? (B.exit("codeFencedFenceSequence"), Ct(I) ? Dt(B, it, "whitespace")(I) : it(I)) : J(I);
    }
    function it(I) {
      return I === null || pt(I) ? (B.exit("codeFencedFence"), P(I)) : J(I);
    }
  }
}
function kx(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return f === null ? a(f) : (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), h);
  }
  function h(f) {
    return u.parser.lazy[u.now().line] ? a(f) : r(f);
  }
}
const ls = {
  name: "codeIndented",
  tokenize: wx
}, Ex = {
  partial: !0,
  tokenize: Ax
};
function wx(n, r, a) {
  const u = this;
  return s;
  function s(d) {
    return n.enter("codeIndented"), Dt(n, h, "linePrefix", 5)(d);
  }
  function h(d) {
    const b = u.events[u.events.length - 1];
    return b && b[1].type === "linePrefix" && b[2].sliceSerialize(b[1], !0).length >= 4 ? f(d) : a(d);
  }
  function f(d) {
    return d === null ? p(d) : pt(d) ? n.attempt(Ex, f, p)(d) : (n.enter("codeFlowValue"), m(d));
  }
  function m(d) {
    return d === null || pt(d) ? (n.exit("codeFlowValue"), f(d)) : (n.consume(d), m);
  }
  function p(d) {
    return n.exit("codeIndented"), r(d);
  }
}
function Ax(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return u.parser.lazy[u.now().line] ? a(f) : pt(f) ? (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), s) : Dt(n, h, "linePrefix", 5)(f);
  }
  function h(f) {
    const m = u.events[u.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? r(f) : pt(f) ? s(f) : a(f);
  }
}
const zx = {
  name: "codeText",
  previous: Cx,
  resolve: Tx,
  tokenize: _x
};
function Tx(n) {
  let r = n.length - 4, a = 3, u, s;
  if ((n[a][1].type === "lineEnding" || n[a][1].type === "space") && (n[r][1].type === "lineEnding" || n[r][1].type === "space")) {
    for (u = a; ++u < r; )
      if (n[u][1].type === "codeTextData") {
        n[a][1].type = "codeTextPadding", n[r][1].type = "codeTextPadding", a += 2, r -= 2;
        break;
      }
  }
  for (u = a - 1, r++; ++u <= r; )
    s === void 0 ? u !== r && n[u][1].type !== "lineEnding" && (s = u) : (u === r || n[u][1].type === "lineEnding") && (n[s][1].type = "codeTextData", u !== s + 2 && (n[s][1].end = n[u - 1][1].end, n.splice(s + 2, u - s - 2), r -= u - s - 2, u = s + 2), s = void 0);
  return n;
}
function Cx(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function _x(n, r, a) {
  let u = 0, s, h;
  return f;
  function f(y) {
    return n.enter("codeText"), n.enter("codeTextSequence"), m(y);
  }
  function m(y) {
    return y === 96 ? (n.consume(y), u++, m) : (n.exit("codeTextSequence"), p(y));
  }
  function p(y) {
    return y === null ? a(y) : y === 32 ? (n.enter("space"), n.consume(y), n.exit("space"), p) : y === 96 ? (h = n.enter("codeTextSequence"), s = 0, b(y)) : pt(y) ? (n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), p) : (n.enter("codeTextData"), d(y));
  }
  function d(y) {
    return y === null || y === 32 || y === 96 || pt(y) ? (n.exit("codeTextData"), p(y)) : (n.consume(y), d);
  }
  function b(y) {
    return y === 96 ? (n.consume(y), s++, b) : s === u ? (n.exit("codeTextSequence"), n.exit("codeText"), r(y)) : (h.type = "codeTextData", d(y));
  }
}
class Mx {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(r) {
    this.left = r ? [...r] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(r) {
    if (r < 0 || r >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + r + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return r < this.left.length ? this.left[r] : this.right[this.right.length - r + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(r, a) {
    const u = a ?? Number.POSITIVE_INFINITY;
    return u < this.left.length ? this.left.slice(r, u) : r > this.left.length ? this.right.slice(this.right.length - u + this.left.length, this.right.length - r + this.left.length).reverse() : this.left.slice(r).concat(this.right.slice(this.right.length - u + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(r, a, u) {
    const s = a || 0;
    this.setCursor(Math.trunc(r));
    const h = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return u && Da(this.left, u), h.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(r) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(r) {
    this.setCursor(Number.POSITIVE_INFINITY), Da(this.left, r);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(r) {
    this.setCursor(0), this.right.push(r);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(r) {
    this.setCursor(0), Da(this.right, r.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(r) {
    if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0))
      if (r < this.left.length) {
        const a = this.left.splice(r, Number.POSITIVE_INFINITY);
        Da(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        Da(this.left, a.reverse());
      }
  }
}
function Da(n, r) {
  let a = 0;
  if (r.length < 1e4)
    n.push(...r);
  else
    for (; a < r.length; )
      n.push(...r.slice(a, a + 1e4)), a += 1e4;
}
function Vg(n) {
  const r = {};
  let a = -1, u, s, h, f, m, p, d;
  const b = new Mx(n);
  for (; ++a < b.length; ) {
    for (; a in r; )
      a = r[a];
    if (u = b.get(a), a && u[1].type === "chunkFlow" && b.get(a - 1)[1].type === "listItemPrefix" && (p = u[1]._tokenizer.events, h = 0, h < p.length && p[h][1].type === "lineEndingBlank" && (h += 2), h < p.length && p[h][1].type === "content"))
      for (; ++h < p.length && p[h][1].type !== "content"; )
        p[h][1].type === "chunkText" && (p[h][1]._isInFirstContentOfListItem = !0, h++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(r, Ox(b, a)), a = r[a], d = !0);
    else if (u[1]._container) {
      for (h = a, s = void 0; h--; )
        if (f = b.get(h), f[1].type === "lineEnding" || f[1].type === "lineEndingBlank")
          f[0] === "enter" && (s && (b.get(s)[1].type = "lineEndingBlank"), f[1].type = "lineEnding", s = h);
        else if (!(f[1].type === "linePrefix" || f[1].type === "listItemIndent")) break;
      s && (u[1].end = {
        ...b.get(s)[1].start
      }, m = b.slice(s, a), m.unshift(u), b.splice(s, a - s + 1, m));
    }
  }
  return Ze(n, 0, Number.POSITIVE_INFINITY, b.slice(0)), !d;
}
function Ox(n, r) {
  const a = n.get(r)[1], u = n.get(r)[2];
  let s = r - 1;
  const h = [];
  let f = a._tokenizer;
  f || (f = u.parser[a.contentType](a.start), a._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const m = f.events, p = [], d = {};
  let b, y, S = -1, x = a, A = 0, R = 0;
  const L = [R];
  for (; x; ) {
    for (; n.get(++s)[1] !== x; )
      ;
    h.push(s), x._tokenizer || (b = u.sliceStream(x), x.next || b.push(null), y && f.defineSkip(x.start), x._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0), f.write(b), x._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)), y = x, x = x.next;
  }
  for (x = a; ++S < m.length; )
    // Find a void token that includes a break.
    m[S][0] === "exit" && m[S - 1][0] === "enter" && m[S][1].type === m[S - 1][1].type && m[S][1].start.line !== m[S][1].end.line && (R = S + 1, L.push(R), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (f.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : L.pop(), S = L.length; S--; ) {
    const _ = m.slice(L[S], L[S + 1]), Z = h.pop();
    p.push([Z, Z + _.length - 1]), n.splice(Z, 2, _);
  }
  for (p.reverse(), S = -1; ++S < p.length; )
    d[A + p[S][0]] = A + p[S][1], A += p[S][1] - p[S][0] - 1;
  return d;
}
const Dx = {
  resolve: Nx,
  tokenize: Lx
}, Rx = {
  partial: !0,
  tokenize: Ux
};
function Nx(n) {
  return Vg(n), n;
}
function Lx(n, r) {
  let a;
  return u;
  function u(m) {
    return n.enter("content"), a = n.enter("chunkContent", {
      contentType: "content"
    }), s(m);
  }
  function s(m) {
    return m === null ? h(m) : pt(m) ? n.check(Rx, f, h)(m) : (n.consume(m), s);
  }
  function h(m) {
    return n.exit("chunkContent"), n.exit("content"), r(m);
  }
  function f(m) {
    return n.consume(m), n.exit("chunkContent"), a.next = n.enter("chunkContent", {
      contentType: "content",
      previous: a
    }), a = a.next, s;
  }
}
function Ux(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), Dt(n, h, "linePrefix");
  }
  function h(f) {
    if (f === null || pt(f))
      return a(f);
    const m = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? r(f) : n.interrupt(u.parser.constructs.flow, a, r)(f);
  }
}
function Gg(n, r, a, u, s, h, f, m, p) {
  const d = p || Number.POSITIVE_INFINITY;
  let b = 0;
  return y;
  function y(_) {
    return _ === 60 ? (n.enter(u), n.enter(s), n.enter(h), n.consume(_), n.exit(h), S) : _ === null || _ === 32 || _ === 41 || bu(_) ? a(_) : (n.enter(u), n.enter(f), n.enter(m), n.enter("chunkString", {
      contentType: "string"
    }), R(_));
  }
  function S(_) {
    return _ === 62 ? (n.enter(h), n.consume(_), n.exit(h), n.exit(s), n.exit(u), r) : (n.enter(m), n.enter("chunkString", {
      contentType: "string"
    }), x(_));
  }
  function x(_) {
    return _ === 62 ? (n.exit("chunkString"), n.exit(m), S(_)) : _ === null || _ === 60 || pt(_) ? a(_) : (n.consume(_), _ === 92 ? A : x);
  }
  function A(_) {
    return _ === 60 || _ === 62 || _ === 92 ? (n.consume(_), x) : x(_);
  }
  function R(_) {
    return !b && (_ === null || _ === 41 || Zt(_)) ? (n.exit("chunkString"), n.exit(m), n.exit(f), n.exit(u), r(_)) : b < d && _ === 40 ? (n.consume(_), b++, R) : _ === 41 ? (n.consume(_), b--, R) : _ === null || _ === 32 || _ === 40 || bu(_) ? a(_) : (n.consume(_), _ === 92 ? L : R);
  }
  function L(_) {
    return _ === 40 || _ === 41 || _ === 92 ? (n.consume(_), R) : R(_);
  }
}
function Xg(n, r, a, u, s, h) {
  const f = this;
  let m = 0, p;
  return d;
  function d(x) {
    return n.enter(u), n.enter(s), n.consume(x), n.exit(s), n.enter(h), b;
  }
  function b(x) {
    return m > 999 || x === null || x === 91 || x === 93 && !p || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !m && "_hiddenFootnoteSupport" in f.parser.constructs ? a(x) : x === 93 ? (n.exit(h), n.enter(s), n.consume(x), n.exit(s), n.exit(u), r) : pt(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), b) : (n.enter("chunkString", {
      contentType: "string"
    }), y(x));
  }
  function y(x) {
    return x === null || x === 91 || x === 93 || pt(x) || m++ > 999 ? (n.exit("chunkString"), b(x)) : (n.consume(x), p || (p = !Ct(x)), x === 92 ? S : y);
  }
  function S(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), m++, y) : y(x);
  }
}
function Qg(n, r, a, u, s, h) {
  let f;
  return m;
  function m(S) {
    return S === 34 || S === 39 || S === 40 ? (n.enter(u), n.enter(s), n.consume(S), n.exit(s), f = S === 40 ? 41 : S, p) : a(S);
  }
  function p(S) {
    return S === f ? (n.enter(s), n.consume(S), n.exit(s), n.exit(u), r) : (n.enter(h), d(S));
  }
  function d(S) {
    return S === f ? (n.exit(h), p(f)) : S === null ? a(S) : pt(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), Dt(n, d, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), b(S));
  }
  function b(S) {
    return S === f || S === null || pt(S) ? (n.exit("chunkString"), d(S)) : (n.consume(S), S === 92 ? y : b);
  }
  function y(S) {
    return S === f || S === 92 ? (n.consume(S), b) : b(S);
  }
}
function La(n, r) {
  let a;
  return u;
  function u(s) {
    return pt(s) ? (n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), a = !0, u) : Ct(s) ? Dt(n, u, a ? "linePrefix" : "lineSuffix")(s) : r(s);
  }
}
const jx = {
  name: "definition",
  tokenize: Hx
}, Bx = {
  partial: !0,
  tokenize: qx
};
function Hx(n, r, a) {
  const u = this;
  let s;
  return h;
  function h(x) {
    return n.enter("definition"), f(x);
  }
  function f(x) {
    return Xg.call(
      u,
      n,
      m,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(x);
  }
  function m(x) {
    return s = cn(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), x === 58 ? (n.enter("definitionMarker"), n.consume(x), n.exit("definitionMarker"), p) : a(x);
  }
  function p(x) {
    return Zt(x) ? La(n, d)(x) : d(x);
  }
  function d(x) {
    return Gg(
      n,
      b,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(x);
  }
  function b(x) {
    return n.attempt(Bx, y, y)(x);
  }
  function y(x) {
    return Ct(x) ? Dt(n, S, "whitespace")(x) : S(x);
  }
  function S(x) {
    return x === null || pt(x) ? (n.exit("definition"), u.parser.defined.push(s), r(x)) : a(x);
  }
}
function qx(n, r, a) {
  return u;
  function u(m) {
    return Zt(m) ? La(n, s)(m) : a(m);
  }
  function s(m) {
    return Qg(n, h, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(m);
  }
  function h(m) {
    return Ct(m) ? Dt(n, f, "whitespace")(m) : f(m);
  }
  function f(m) {
    return m === null || pt(m) ? r(m) : a(m);
  }
}
const Yx = {
  name: "hardBreakEscape",
  tokenize: Vx
};
function Vx(n, r, a) {
  return u;
  function u(h) {
    return n.enter("hardBreakEscape"), n.consume(h), s;
  }
  function s(h) {
    return pt(h) ? (n.exit("hardBreakEscape"), r(h)) : a(h);
  }
}
const Gx = {
  name: "headingAtx",
  resolve: Xx,
  tokenize: Qx
};
function Xx(n, r) {
  let a = n.length - 2, u = 3, s, h;
  return n[u][1].type === "whitespace" && (u += 2), a - 2 > u && n[a][1].type === "whitespace" && (a -= 2), n[a][1].type === "atxHeadingSequence" && (u === a - 1 || a - 4 > u && n[a - 2][1].type === "whitespace") && (a -= u + 1 === a ? 2 : 4), a > u && (s = {
    type: "atxHeadingText",
    start: n[u][1].start,
    end: n[a][1].end
  }, h = {
    type: "chunkText",
    start: n[u][1].start,
    end: n[a][1].end,
    contentType: "text"
  }, Ze(n, u, a - u + 1, [["enter", s, r], ["enter", h, r], ["exit", h, r], ["exit", s, r]])), n;
}
function Qx(n, r, a) {
  let u = 0;
  return s;
  function s(b) {
    return n.enter("atxHeading"), h(b);
  }
  function h(b) {
    return n.enter("atxHeadingSequence"), f(b);
  }
  function f(b) {
    return b === 35 && u++ < 6 ? (n.consume(b), f) : b === null || Zt(b) ? (n.exit("atxHeadingSequence"), m(b)) : a(b);
  }
  function m(b) {
    return b === 35 ? (n.enter("atxHeadingSequence"), p(b)) : b === null || pt(b) ? (n.exit("atxHeading"), r(b)) : Ct(b) ? Dt(n, m, "whitespace")(b) : (n.enter("atxHeadingText"), d(b));
  }
  function p(b) {
    return b === 35 ? (n.consume(b), p) : (n.exit("atxHeadingSequence"), m(b));
  }
  function d(b) {
    return b === null || b === 35 || Zt(b) ? (n.exit("atxHeadingText"), m(b)) : (n.consume(b), d);
  }
}
const Zx = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Op = ["pre", "script", "style", "textarea"], Kx = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Ix,
  tokenize: $x
}, Fx = {
  partial: !0,
  tokenize: Px
}, Jx = {
  partial: !0,
  tokenize: Wx
};
function Ix(n) {
  let r = n.length;
  for (; r-- && !(n[r][0] === "enter" && n[r][1].type === "htmlFlow"); )
    ;
  return r > 1 && n[r - 2][1].type === "linePrefix" && (n[r][1].start = n[r - 2][1].start, n[r + 1][1].start = n[r - 2][1].start, n.splice(r - 2, 2)), n;
}
function $x(n, r, a) {
  const u = this;
  let s, h, f, m, p;
  return d;
  function d(k) {
    return b(k);
  }
  function b(k) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(k), y;
  }
  function y(k) {
    return k === 33 ? (n.consume(k), S) : k === 47 ? (n.consume(k), h = !0, R) : k === 63 ? (n.consume(k), s = 3, u.interrupt ? r : E) : we(k) ? (n.consume(k), f = String.fromCharCode(k), L) : a(k);
  }
  function S(k) {
    return k === 45 ? (n.consume(k), s = 2, x) : k === 91 ? (n.consume(k), s = 5, m = 0, A) : we(k) ? (n.consume(k), s = 4, u.interrupt ? r : E) : a(k);
  }
  function x(k) {
    return k === 45 ? (n.consume(k), u.interrupt ? r : E) : a(k);
  }
  function A(k) {
    const $ = "CDATA[";
    return k === $.charCodeAt(m++) ? (n.consume(k), m === $.length ? u.interrupt ? r : tt : A) : a(k);
  }
  function R(k) {
    return we(k) ? (n.consume(k), f = String.fromCharCode(k), L) : a(k);
  }
  function L(k) {
    if (k === null || k === 47 || k === 62 || Zt(k)) {
      const $ = k === 47, ft = f.toLowerCase();
      return !$ && !h && Op.includes(ft) ? (s = 1, u.interrupt ? r(k) : tt(k)) : Zx.includes(f.toLowerCase()) ? (s = 6, $ ? (n.consume(k), _) : u.interrupt ? r(k) : tt(k)) : (s = 7, u.interrupt && !u.parser.lazy[u.now().line] ? a(k) : h ? Z(k) : H(k));
    }
    return k === 45 || ve(k) ? (n.consume(k), f += String.fromCharCode(k), L) : a(k);
  }
  function _(k) {
    return k === 62 ? (n.consume(k), u.interrupt ? r : tt) : a(k);
  }
  function Z(k) {
    return Ct(k) ? (n.consume(k), Z) : U(k);
  }
  function H(k) {
    return k === 47 ? (n.consume(k), U) : k === 58 || k === 95 || we(k) ? (n.consume(k), lt) : Ct(k) ? (n.consume(k), H) : U(k);
  }
  function lt(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ve(k) ? (n.consume(k), lt) : ot(k);
  }
  function ot(k) {
    return k === 61 ? (n.consume(k), B) : Ct(k) ? (n.consume(k), ot) : H(k);
  }
  function B(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? a(k) : k === 34 || k === 39 ? (n.consume(k), p = k, P) : Ct(k) ? (n.consume(k), B) : J(k);
  }
  function P(k) {
    return k === p ? (n.consume(k), p = null, mt) : k === null || pt(k) ? a(k) : (n.consume(k), P);
  }
  function J(k) {
    return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || Zt(k) ? ot(k) : (n.consume(k), J);
  }
  function mt(k) {
    return k === 47 || k === 62 || Ct(k) ? H(k) : a(k);
  }
  function U(k) {
    return k === 62 ? (n.consume(k), et) : a(k);
  }
  function et(k) {
    return k === null || pt(k) ? tt(k) : Ct(k) ? (n.consume(k), et) : a(k);
  }
  function tt(k) {
    return k === 45 && s === 2 ? (n.consume(k), M) : k === 60 && s === 1 ? (n.consume(k), K) : k === 62 && s === 4 ? (n.consume(k), z) : k === 63 && s === 3 ? (n.consume(k), E) : k === 93 && s === 5 ? (n.consume(k), xt) : pt(k) && (s === 6 || s === 7) ? (n.exit("htmlFlowData"), n.check(Fx, Y, Et)(k)) : k === null || pt(k) ? (n.exit("htmlFlowData"), Et(k)) : (n.consume(k), tt);
  }
  function Et(k) {
    return n.check(Jx, it, Y)(k);
  }
  function it(k) {
    return n.enter("lineEnding"), n.consume(k), n.exit("lineEnding"), I;
  }
  function I(k) {
    return k === null || pt(k) ? Et(k) : (n.enter("htmlFlowData"), tt(k));
  }
  function M(k) {
    return k === 45 ? (n.consume(k), E) : tt(k);
  }
  function K(k) {
    return k === 47 ? (n.consume(k), f = "", Q) : tt(k);
  }
  function Q(k) {
    if (k === 62) {
      const $ = f.toLowerCase();
      return Op.includes($) ? (n.consume(k), z) : tt(k);
    }
    return we(k) && f.length < 8 ? (n.consume(k), f += String.fromCharCode(k), Q) : tt(k);
  }
  function xt(k) {
    return k === 93 ? (n.consume(k), E) : tt(k);
  }
  function E(k) {
    return k === 62 ? (n.consume(k), z) : k === 45 && s === 2 ? (n.consume(k), E) : tt(k);
  }
  function z(k) {
    return k === null || pt(k) ? (n.exit("htmlFlowData"), Y(k)) : (n.consume(k), z);
  }
  function Y(k) {
    return n.exit("htmlFlow"), r(k);
  }
}
function Wx(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return pt(f) ? (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), h) : a(f);
  }
  function h(f) {
    return u.parser.lazy[u.now().line] ? a(f) : r(f);
  }
}
function Px(n, r, a) {
  return u;
  function u(s) {
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), n.attempt(Ya, r, a);
  }
}
const tS = {
  name: "htmlText",
  tokenize: eS
};
function eS(n, r, a) {
  const u = this;
  let s, h, f;
  return m;
  function m(E) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(E), p;
  }
  function p(E) {
    return E === 33 ? (n.consume(E), d) : E === 47 ? (n.consume(E), ot) : E === 63 ? (n.consume(E), H) : we(E) ? (n.consume(E), J) : a(E);
  }
  function d(E) {
    return E === 45 ? (n.consume(E), b) : E === 91 ? (n.consume(E), h = 0, A) : we(E) ? (n.consume(E), Z) : a(E);
  }
  function b(E) {
    return E === 45 ? (n.consume(E), x) : a(E);
  }
  function y(E) {
    return E === null ? a(E) : E === 45 ? (n.consume(E), S) : pt(E) ? (f = y, K(E)) : (n.consume(E), y);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), x) : y(E);
  }
  function x(E) {
    return E === 62 ? M(E) : E === 45 ? S(E) : y(E);
  }
  function A(E) {
    const z = "CDATA[";
    return E === z.charCodeAt(h++) ? (n.consume(E), h === z.length ? R : A) : a(E);
  }
  function R(E) {
    return E === null ? a(E) : E === 93 ? (n.consume(E), L) : pt(E) ? (f = R, K(E)) : (n.consume(E), R);
  }
  function L(E) {
    return E === 93 ? (n.consume(E), _) : R(E);
  }
  function _(E) {
    return E === 62 ? M(E) : E === 93 ? (n.consume(E), _) : R(E);
  }
  function Z(E) {
    return E === null || E === 62 ? M(E) : pt(E) ? (f = Z, K(E)) : (n.consume(E), Z);
  }
  function H(E) {
    return E === null ? a(E) : E === 63 ? (n.consume(E), lt) : pt(E) ? (f = H, K(E)) : (n.consume(E), H);
  }
  function lt(E) {
    return E === 62 ? M(E) : H(E);
  }
  function ot(E) {
    return we(E) ? (n.consume(E), B) : a(E);
  }
  function B(E) {
    return E === 45 || ve(E) ? (n.consume(E), B) : P(E);
  }
  function P(E) {
    return pt(E) ? (f = P, K(E)) : Ct(E) ? (n.consume(E), P) : M(E);
  }
  function J(E) {
    return E === 45 || ve(E) ? (n.consume(E), J) : E === 47 || E === 62 || Zt(E) ? mt(E) : a(E);
  }
  function mt(E) {
    return E === 47 ? (n.consume(E), M) : E === 58 || E === 95 || we(E) ? (n.consume(E), U) : pt(E) ? (f = mt, K(E)) : Ct(E) ? (n.consume(E), mt) : M(E);
  }
  function U(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || ve(E) ? (n.consume(E), U) : et(E);
  }
  function et(E) {
    return E === 61 ? (n.consume(E), tt) : pt(E) ? (f = et, K(E)) : Ct(E) ? (n.consume(E), et) : mt(E);
  }
  function tt(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? a(E) : E === 34 || E === 39 ? (n.consume(E), s = E, Et) : pt(E) ? (f = tt, K(E)) : Ct(E) ? (n.consume(E), tt) : (n.consume(E), it);
  }
  function Et(E) {
    return E === s ? (n.consume(E), s = void 0, I) : E === null ? a(E) : pt(E) ? (f = Et, K(E)) : (n.consume(E), Et);
  }
  function it(E) {
    return E === null || E === 34 || E === 39 || E === 60 || E === 61 || E === 96 ? a(E) : E === 47 || E === 62 || Zt(E) ? mt(E) : (n.consume(E), it);
  }
  function I(E) {
    return E === 47 || E === 62 || Zt(E) ? mt(E) : a(E);
  }
  function M(E) {
    return E === 62 ? (n.consume(E), n.exit("htmlTextData"), n.exit("htmlText"), r) : a(E);
  }
  function K(E) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), Q;
  }
  function Q(E) {
    return Ct(E) ? Dt(n, xt, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(E) : xt(E);
  }
  function xt(E) {
    return n.enter("htmlTextData"), f(E);
  }
}
const qs = {
  name: "labelEnd",
  resolveAll: aS,
  resolveTo: rS,
  tokenize: uS
}, nS = {
  tokenize: oS
}, lS = {
  tokenize: cS
}, iS = {
  tokenize: sS
};
function aS(n) {
  let r = -1;
  const a = [];
  for (; ++r < n.length; ) {
    const u = n[r][1];
    if (a.push(n[r]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const s = u.type === "labelImage" ? 4 : 2;
      u.type = "data", r += s;
    }
  }
  return n.length !== a.length && Ze(n, 0, n.length, a), n;
}
function rS(n, r) {
  let a = n.length, u = 0, s, h, f, m;
  for (; a--; )
    if (s = n[a][1], h) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      n[a][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (f) {
      if (n[a][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (h = a, s.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else s.type === "labelEnd" && (f = a);
  const p = {
    type: n[h][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[h][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, d = {
    type: "label",
    start: {
      ...n[h][1].start
    },
    end: {
      ...n[f][1].end
    }
  }, b = {
    type: "labelText",
    start: {
      ...n[h + u + 2][1].end
    },
    end: {
      ...n[f - 2][1].start
    }
  };
  return m = [["enter", p, r], ["enter", d, r]], m = ln(m, n.slice(h + 1, h + u + 3)), m = ln(m, [["enter", b, r]]), m = ln(m, Au(r.parser.constructs.insideSpan.null, n.slice(h + u + 4, f - 3), r)), m = ln(m, [["exit", b, r], n[f - 2], n[f - 1], ["exit", d, r]]), m = ln(m, n.slice(f + 1)), m = ln(m, [["exit", p, r]]), Ze(n, h, n.length, m), n;
}
function uS(n, r, a) {
  const u = this;
  let s = u.events.length, h, f;
  for (; s--; )
    if ((u.events[s][1].type === "labelImage" || u.events[s][1].type === "labelLink") && !u.events[s][1]._balanced) {
      h = u.events[s][1];
      break;
    }
  return m;
  function m(S) {
    return h ? h._inactive ? y(S) : (f = u.parser.defined.includes(cn(u.sliceSerialize({
      start: h.end,
      end: u.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(S), n.exit("labelMarker"), n.exit("labelEnd"), p) : a(S);
  }
  function p(S) {
    return S === 40 ? n.attempt(nS, b, f ? b : y)(S) : S === 91 ? n.attempt(lS, b, f ? d : y)(S) : f ? b(S) : y(S);
  }
  function d(S) {
    return n.attempt(iS, b, y)(S);
  }
  function b(S) {
    return r(S);
  }
  function y(S) {
    return h._balanced = !0, a(S);
  }
}
function oS(n, r, a) {
  return u;
  function u(y) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), s;
  }
  function s(y) {
    return Zt(y) ? La(n, h)(y) : h(y);
  }
  function h(y) {
    return y === 41 ? b(y) : Gg(n, f, m, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function f(y) {
    return Zt(y) ? La(n, p)(y) : b(y);
  }
  function m(y) {
    return a(y);
  }
  function p(y) {
    return y === 34 || y === 39 || y === 40 ? Qg(n, d, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : b(y);
  }
  function d(y) {
    return Zt(y) ? La(n, b)(y) : b(y);
  }
  function b(y) {
    return y === 41 ? (n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), n.exit("resource"), r) : a(y);
  }
}
function cS(n, r, a) {
  const u = this;
  return s;
  function s(m) {
    return Xg.call(u, n, h, f, "reference", "referenceMarker", "referenceString")(m);
  }
  function h(m) {
    return u.parser.defined.includes(cn(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? r(m) : a(m);
  }
  function f(m) {
    return a(m);
  }
}
function sS(n, r, a) {
  return u;
  function u(h) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(h), n.exit("referenceMarker"), s;
  }
  function s(h) {
    return h === 93 ? (n.enter("referenceMarker"), n.consume(h), n.exit("referenceMarker"), n.exit("reference"), r) : a(h);
  }
}
const fS = {
  name: "labelStartImage",
  resolveAll: qs.resolveAll,
  tokenize: hS
};
function hS(n, r, a) {
  const u = this;
  return s;
  function s(m) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(m), n.exit("labelImageMarker"), h;
  }
  function h(m) {
    return m === 91 ? (n.enter("labelMarker"), n.consume(m), n.exit("labelMarker"), n.exit("labelImage"), f) : a(m);
  }
  function f(m) {
    return m === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? a(m) : r(m);
  }
}
const dS = {
  name: "labelStartLink",
  resolveAll: qs.resolveAll,
  tokenize: mS
};
function mS(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(f), n.exit("labelMarker"), n.exit("labelLink"), h;
  }
  function h(f) {
    return f === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? a(f) : r(f);
  }
}
const is = {
  name: "lineEnding",
  tokenize: pS
};
function pS(n, r) {
  return a;
  function a(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), Dt(n, r, "linePrefix");
  }
}
const gu = {
  name: "thematicBreak",
  tokenize: gS
};
function gS(n, r, a) {
  let u = 0, s;
  return h;
  function h(d) {
    return n.enter("thematicBreak"), f(d);
  }
  function f(d) {
    return s = d, m(d);
  }
  function m(d) {
    return d === s ? (n.enter("thematicBreakSequence"), p(d)) : u >= 3 && (d === null || pt(d)) ? (n.exit("thematicBreak"), r(d)) : a(d);
  }
  function p(d) {
    return d === s ? (n.consume(d), u++, p) : (n.exit("thematicBreakSequence"), Ct(d) ? Dt(n, m, "whitespace")(d) : m(d));
  }
}
const Re = {
  continuation: {
    tokenize: xS
  },
  exit: kS,
  name: "list",
  tokenize: vS
}, yS = {
  partial: !0,
  tokenize: ES
}, bS = {
  partial: !0,
  tokenize: SS
};
function vS(n, r, a) {
  const u = this, s = u.events[u.events.length - 1];
  let h = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, f = 0;
  return m;
  function m(x) {
    const A = u.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (A === "listUnordered" ? !u.containerState.marker || x === u.containerState.marker : Es(x)) {
      if (u.containerState.type || (u.containerState.type = A, n.enter(A, {
        _container: !0
      })), A === "listUnordered")
        return n.enter("listItemPrefix"), x === 42 || x === 45 ? n.check(gu, a, d)(x) : d(x);
      if (!u.interrupt || x === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), p(x);
    }
    return a(x);
  }
  function p(x) {
    return Es(x) && ++f < 10 ? (n.consume(x), p) : (!u.interrupt || f < 2) && (u.containerState.marker ? x === u.containerState.marker : x === 41 || x === 46) ? (n.exit("listItemValue"), d(x)) : a(x);
  }
  function d(x) {
    return n.enter("listItemMarker"), n.consume(x), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || x, n.check(
      Ya,
      // Can’t be empty when interrupting.
      u.interrupt ? a : b,
      n.attempt(yS, S, y)
    );
  }
  function b(x) {
    return u.containerState.initialBlankLine = !0, h++, S(x);
  }
  function y(x) {
    return Ct(x) ? (n.enter("listItemPrefixWhitespace"), n.consume(x), n.exit("listItemPrefixWhitespace"), S) : a(x);
  }
  function S(x) {
    return u.containerState.size = h + u.sliceSerialize(n.exit("listItemPrefix"), !0).length, r(x);
  }
}
function xS(n, r, a) {
  const u = this;
  return u.containerState._closeFlow = void 0, n.check(Ya, s, h);
  function s(m) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, Dt(n, r, "listItemIndent", u.containerState.size + 1)(m);
  }
  function h(m) {
    return u.containerState.furtherBlankLines || !Ct(m) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, f(m)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(bS, r, f)(m));
  }
  function f(m) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, Dt(n, n.attempt(Re, r, a), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
  }
}
function SS(n, r, a) {
  const u = this;
  return Dt(n, s, "listItemIndent", u.containerState.size + 1);
  function s(h) {
    const f = u.events[u.events.length - 1];
    return f && f[1].type === "listItemIndent" && f[2].sliceSerialize(f[1], !0).length === u.containerState.size ? r(h) : a(h);
  }
}
function kS(n) {
  n.exit(this.containerState.type);
}
function ES(n, r, a) {
  const u = this;
  return Dt(n, s, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(h) {
    const f = u.events[u.events.length - 1];
    return !Ct(h) && f && f[1].type === "listItemPrefixWhitespace" ? r(h) : a(h);
  }
}
const Dp = {
  name: "setextUnderline",
  resolveTo: wS,
  tokenize: AS
};
function wS(n, r) {
  let a = n.length, u, s, h;
  for (; a--; )
    if (n[a][0] === "enter") {
      if (n[a][1].type === "content") {
        u = a;
        break;
      }
      n[a][1].type === "paragraph" && (s = a);
    } else
      n[a][1].type === "content" && n.splice(a, 1), !h && n[a][1].type === "definition" && (h = a);
  const f = {
    type: "setextHeading",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[s][1].type = "setextHeadingText", h ? (n.splice(s, 0, ["enter", f, r]), n.splice(h + 1, 0, ["exit", n[u][1], r]), n[u][1].end = {
    ...n[h][1].end
  }) : n[u][1] = f, n.push(["exit", f, r]), n;
}
function AS(n, r, a) {
  const u = this;
  let s;
  return h;
  function h(d) {
    let b = u.events.length, y;
    for (; b--; )
      if (u.events[b][1].type !== "lineEnding" && u.events[b][1].type !== "linePrefix" && u.events[b][1].type !== "content") {
        y = u.events[b][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || y) ? (n.enter("setextHeadingLine"), s = d, f(d)) : a(d);
  }
  function f(d) {
    return n.enter("setextHeadingLineSequence"), m(d);
  }
  function m(d) {
    return d === s ? (n.consume(d), m) : (n.exit("setextHeadingLineSequence"), Ct(d) ? Dt(n, p, "lineSuffix")(d) : p(d));
  }
  function p(d) {
    return d === null || pt(d) ? (n.exit("setextHeadingLine"), r(d)) : a(d);
  }
}
const zS = {
  tokenize: TS
};
function TS(n) {
  const r = this, a = n.attempt(
    // Try to parse a blank line.
    Ya,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, s, Dt(n, n.attempt(this.parser.constructs.flow, s, n.attempt(Dx, s)), "linePrefix"))
  );
  return a;
  function u(h) {
    if (h === null) {
      n.consume(h);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(h), n.exit("lineEndingBlank"), r.currentConstruct = void 0, a;
  }
  function s(h) {
    if (h === null) {
      n.consume(h);
      return;
    }
    return n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), r.currentConstruct = void 0, a;
  }
}
const CS = {
  resolveAll: Kg()
}, _S = Zg("string"), MS = Zg("text");
function Zg(n) {
  return {
    resolveAll: Kg(n === "text" ? OS : void 0),
    tokenize: r
  };
  function r(a) {
    const u = this, s = this.parser.constructs[n], h = a.attempt(s, f, m);
    return f;
    function f(b) {
      return d(b) ? h(b) : m(b);
    }
    function m(b) {
      if (b === null) {
        a.consume(b);
        return;
      }
      return a.enter("data"), a.consume(b), p;
    }
    function p(b) {
      return d(b) ? (a.exit("data"), h(b)) : (a.consume(b), p);
    }
    function d(b) {
      if (b === null)
        return !0;
      const y = s[b];
      let S = -1;
      if (y)
        for (; ++S < y.length; ) {
          const x = y[S];
          if (!x.previous || x.previous.call(u, u.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Kg(n) {
  return r;
  function r(a, u) {
    let s = -1, h;
    for (; ++s <= a.length; )
      h === void 0 ? a[s] && a[s][1].type === "data" && (h = s, s++) : (!a[s] || a[s][1].type !== "data") && (s !== h + 2 && (a[h][1].end = a[s - 1][1].end, a.splice(h + 2, s - h - 2), s = h + 2), h = void 0);
    return n ? n(a, u) : a;
  }
}
function OS(n, r) {
  let a = 0;
  for (; ++a <= n.length; )
    if ((a === n.length || n[a][1].type === "lineEnding") && n[a - 1][1].type === "data") {
      const u = n[a - 1][1], s = r.sliceStream(u);
      let h = s.length, f = -1, m = 0, p;
      for (; h--; ) {
        const d = s[h];
        if (typeof d == "string") {
          for (f = d.length; d.charCodeAt(f - 1) === 32; )
            m++, f--;
          if (f) break;
          f = -1;
        } else if (d === -2)
          p = !0, m++;
        else if (d !== -1) {
          h++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && a === n.length && (m = 0), m) {
        const d = {
          type: a === n.length || p || m < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: h ? f : u.start._bufferIndex + f,
            _index: u.start._index + h,
            line: u.end.line,
            column: u.end.column - m,
            offset: u.end.offset - m
          },
          end: {
            ...u.end
          }
        };
        u.end = {
          ...d.start
        }, u.start.offset === u.end.offset ? Object.assign(u, d) : (n.splice(a, 0, ["enter", d, r], ["exit", d, r]), a += 2);
      }
      a++;
    }
  return n;
}
const DS = {
  42: Re,
  43: Re,
  45: Re,
  48: Re,
  49: Re,
  50: Re,
  51: Re,
  52: Re,
  53: Re,
  54: Re,
  55: Re,
  56: Re,
  57: Re,
  62: Hg
}, RS = {
  91: jx
}, NS = {
  [-2]: ls,
  [-1]: ls,
  32: ls
}, LS = {
  35: Gx,
  42: gu,
  45: [Dp, gu],
  60: Kx,
  61: Dp,
  95: gu,
  96: Mp,
  126: Mp
}, US = {
  38: Yg,
  92: qg
}, jS = {
  [-5]: is,
  [-4]: is,
  [-3]: is,
  33: fS,
  38: Yg,
  42: ws,
  60: [dx, tS],
  91: dS,
  92: [Yx, qg],
  93: qs,
  95: ws,
  96: zx
}, BS = {
  null: [ws, CS]
}, HS = {
  null: [42, 95]
}, qS = {
  null: []
}, YS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: HS,
  contentInitial: RS,
  disable: qS,
  document: DS,
  flow: LS,
  flowInitial: NS,
  insideSpan: BS,
  string: US,
  text: jS
}, Symbol.toStringTag, { value: "Module" }));
function VS(n, r, a) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: a && a.line || 1,
    column: a && a.column || 1,
    offset: a && a.offset || 0
  };
  const s = {}, h = [];
  let f = [], m = [];
  const p = {
    attempt: P(ot),
    check: P(B),
    consume: Z,
    enter: H,
    exit: lt,
    interrupt: P(B, {
      interrupt: !0
    })
  }, d = {
    code: null,
    containerState: {},
    defineSkip: R,
    events: [],
    now: A,
    parser: n,
    previous: null,
    sliceSerialize: S,
    sliceStream: x,
    write: y
  };
  let b = r.tokenize.call(d, p);
  return r.resolveAll && h.push(r), d;
  function y(et) {
    return f = ln(f, et), L(), f[f.length - 1] !== null ? [] : (J(r, 0), d.events = Au(h, d.events, d), d.events);
  }
  function S(et, tt) {
    return XS(x(et), tt);
  }
  function x(et) {
    return GS(f, et);
  }
  function A() {
    const {
      _bufferIndex: et,
      _index: tt,
      line: Et,
      column: it,
      offset: I
    } = u;
    return {
      _bufferIndex: et,
      _index: tt,
      line: Et,
      column: it,
      offset: I
    };
  }
  function R(et) {
    s[et.line] = et.column, U();
  }
  function L() {
    let et;
    for (; u._index < f.length; ) {
      const tt = f[u._index];
      if (typeof tt == "string")
        for (et = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === et && u._bufferIndex < tt.length; )
          _(tt.charCodeAt(u._bufferIndex));
      else
        _(tt);
    }
  }
  function _(et) {
    b = b(et);
  }
  function Z(et) {
    pt(et) ? (u.line++, u.column = 1, u.offset += et === -3 ? 2 : 1, U()) : et !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    f[u._index].length && (u._bufferIndex = -1, u._index++)), d.previous = et;
  }
  function H(et, tt) {
    const Et = tt || {};
    return Et.type = et, Et.start = A(), d.events.push(["enter", Et, d]), m.push(Et), Et;
  }
  function lt(et) {
    const tt = m.pop();
    return tt.end = A(), d.events.push(["exit", tt, d]), tt;
  }
  function ot(et, tt) {
    J(et, tt.from);
  }
  function B(et, tt) {
    tt.restore();
  }
  function P(et, tt) {
    return Et;
    function Et(it, I, M) {
      let K, Q, xt, E;
      return Array.isArray(it) ? (
        /* c8 ignore next 1 */
        Y(it)
      ) : "tokenize" in it ? (
        // Looks like a construct.
        Y([
          /** @type {Construct} */
          it
        ])
      ) : z(it);
      function z(st) {
        return ht;
        function ht(Gt) {
          const Rt = Gt !== null && st[Gt], he = Gt !== null && st.null, Le = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Rt) ? Rt : Rt ? [Rt] : [],
            ...Array.isArray(he) ? he : he ? [he] : []
          ];
          return Y(Le)(Gt);
        }
      }
      function Y(st) {
        return K = st, Q = 0, st.length === 0 ? M : k(st[Q]);
      }
      function k(st) {
        return ht;
        function ht(Gt) {
          return E = mt(), xt = st, st.partial || (d.currentConstruct = st), st.name && d.parser.constructs.disable.null.includes(st.name) ? ft() : st.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            tt ? Object.assign(Object.create(d), tt) : d,
            p,
            $,
            ft
          )(Gt);
        }
      }
      function $(st) {
        return et(xt, E), I;
      }
      function ft(st) {
        return E.restore(), ++Q < K.length ? k(K[Q]) : M;
      }
    }
  }
  function J(et, tt) {
    et.resolveAll && !h.includes(et) && h.push(et), et.resolve && Ze(d.events, tt, d.events.length - tt, et.resolve(d.events.slice(tt), d)), et.resolveTo && (d.events = et.resolveTo(d.events, d));
  }
  function mt() {
    const et = A(), tt = d.previous, Et = d.currentConstruct, it = d.events.length, I = Array.from(m);
    return {
      from: it,
      restore: M
    };
    function M() {
      u = et, d.previous = tt, d.currentConstruct = Et, d.events.length = it, m = I, U();
    }
  }
  function U() {
    u.line in s && u.column < 2 && (u.column = s[u.line], u.offset += s[u.line] - 1);
  }
}
function GS(n, r) {
  const a = r.start._index, u = r.start._bufferIndex, s = r.end._index, h = r.end._bufferIndex;
  let f;
  if (a === s)
    f = [n[a].slice(u, h)];
  else {
    if (f = n.slice(a, s), u > -1) {
      const m = f[0];
      typeof m == "string" ? f[0] = m.slice(u) : f.shift();
    }
    h > 0 && f.push(n[s].slice(0, h));
  }
  return f;
}
function XS(n, r) {
  let a = -1;
  const u = [];
  let s;
  for (; ++a < n.length; ) {
    const h = n[a];
    let f;
    if (typeof h == "string")
      f = h;
    else switch (h) {
      case -5: {
        f = "\r";
        break;
      }
      case -4: {
        f = `
`;
        break;
      }
      case -3: {
        f = `\r
`;
        break;
      }
      case -2: {
        f = r ? " " : "	";
        break;
      }
      case -1: {
        if (!r && s) continue;
        f = " ";
        break;
      }
      default:
        f = String.fromCharCode(h);
    }
    s = h === -2, u.push(f);
  }
  return u.join("");
}
function QS(n) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      jg([YS, ...(n || {}).extensions || []])
    ),
    content: s(rx),
    defined: [],
    document: s(ox),
    flow: s(zS),
    lazy: {},
    string: s(_S),
    text: s(MS)
  };
  return u;
  function s(h) {
    return f;
    function f(m) {
      return VS(u, h, m);
    }
  }
}
function ZS(n) {
  for (; !Vg(n); )
    ;
  return n;
}
const Rp = /[\0\t\n\r]/g;
function KS() {
  let n = 1, r = "", a = !0, u;
  return s;
  function s(h, f, m) {
    const p = [];
    let d, b, y, S, x;
    for (h = r + (typeof h == "string" ? h.toString() : new TextDecoder(f || void 0).decode(h)), y = 0, r = "", a && (h.charCodeAt(0) === 65279 && y++, a = void 0); y < h.length; ) {
      if (Rp.lastIndex = y, d = Rp.exec(h), S = d && d.index !== void 0 ? d.index : h.length, x = h.charCodeAt(S), !d) {
        r = h.slice(y);
        break;
      }
      if (x === 10 && y === S && u)
        p.push(-3), u = void 0;
      else
        switch (u && (p.push(-5), u = void 0), y < S && (p.push(h.slice(y, S)), n += S - y), x) {
          case 0: {
            p.push(65533), n++;
            break;
          }
          case 9: {
            for (b = Math.ceil(n / 4) * 4, p.push(-2); n++ < b; ) p.push(-1);
            break;
          }
          case 10: {
            p.push(-4), n = 1;
            break;
          }
          default:
            u = !0, n = 1;
        }
      y = S + 1;
    }
    return m && (u && p.push(-5), r && p.push(r), p.push(null)), p;
  }
}
const FS = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function JS(n) {
  return n.replace(FS, IS);
}
function IS(n, r, a) {
  if (r)
    return r;
  if (a.charCodeAt(0) === 35) {
    const s = a.charCodeAt(1), h = s === 120 || s === 88;
    return Bg(a.slice(h ? 2 : 1), h ? 16 : 10);
  }
  return Hs(a) || n;
}
const Fg = {}.hasOwnProperty;
function $S(n, r, a) {
  return r && typeof r == "object" && (a = r, r = void 0), WS(a)(ZS(QS(a).document().write(KS()(n, r, !0))));
}
function WS(n) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: h(Bl),
      autolinkProtocol: mt,
      autolinkEmail: mt,
      atxHeading: h(Ul),
      blockQuote: h(he),
      characterEscape: mt,
      characterReference: mt,
      codeFenced: h(Le),
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: f,
      codeIndented: h(Le, f),
      codeText: h(sn, f),
      codeTextData: mt,
      data: mt,
      codeFlowValue: mt,
      definition: h(Ga),
      definitionDestinationString: f,
      definitionLabelString: f,
      definitionTitleString: f,
      emphasis: h(yn),
      hardBreakEscape: h(jl),
      hardBreakTrailing: h(jl),
      htmlFlow: h(Xa, f),
      htmlFlowData: mt,
      htmlText: h(Xa, f),
      htmlTextData: mt,
      image: h(Qa),
      label: f,
      link: h(Bl),
      listItem: h(Ni),
      listItemValue: S,
      listOrdered: h(Hl, y),
      listUnordered: h(Hl),
      paragraph: h(_u),
      reference: k,
      referenceString: f,
      resourceDestinationString: f,
      resourceTitleString: f,
      setextHeading: h(Ul),
      strong: h(Mu),
      thematicBreak: h(Ou)
    },
    exit: {
      atxHeading: p(),
      atxHeadingSequence: ot,
      autolink: p(),
      autolinkEmail: Rt,
      autolinkProtocol: Gt,
      blockQuote: p(),
      characterEscapeValue: U,
      characterReferenceMarkerHexadecimal: ft,
      characterReferenceMarkerNumeric: ft,
      characterReferenceValue: st,
      characterReference: ht,
      codeFenced: p(L),
      codeFencedFence: R,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: A,
      codeFlowValue: U,
      codeIndented: p(_),
      codeText: p(I),
      codeTextData: U,
      data: U,
      definition: p(),
      definitionDestinationString: lt,
      definitionLabelString: Z,
      definitionTitleString: H,
      emphasis: p(),
      hardBreakEscape: p(tt),
      hardBreakTrailing: p(tt),
      htmlFlow: p(Et),
      htmlFlowData: U,
      htmlText: p(it),
      htmlTextData: U,
      image: p(K),
      label: xt,
      labelText: Q,
      lineEnding: et,
      link: p(M),
      listItem: p(),
      listOrdered: p(),
      listUnordered: p(),
      paragraph: p(),
      referenceString: $,
      resourceDestinationString: E,
      resourceTitleString: z,
      resource: Y,
      setextHeading: p(J),
      setextHeadingLineSequence: P,
      setextHeadingText: B,
      strong: p(),
      thematicBreak: p()
    }
  };
  Jg(r, (n || {}).mdastExtensions || []);
  const a = {};
  return u;
  function u(V) {
    let W = {
      type: "root",
      children: []
    };
    const yt = {
      stack: [W],
      tokenStack: [],
      config: r,
      enter: m,
      exit: d,
      buffer: f,
      resume: b,
      data: a
    }, At = [];
    let jt = -1;
    for (; ++jt < V.length; )
      if (V[jt][1].type === "listOrdered" || V[jt][1].type === "listUnordered")
        if (V[jt][0] === "enter")
          At.push(jt);
        else {
          const Ue = At.pop();
          jt = s(V, Ue, jt);
        }
    for (jt = -1; ++jt < V.length; ) {
      const Ue = r[V[jt][0]];
      Fg.call(Ue, V[jt][1].type) && Ue[V[jt][1].type].call(Object.assign({
        sliceSerialize: V[jt][2].sliceSerialize
      }, yt), V[jt][1]);
    }
    if (yt.tokenStack.length > 0) {
      const Ue = yt.tokenStack[yt.tokenStack.length - 1];
      (Ue[1] || Np).call(yt, void 0, Ue[0]);
    }
    for (W.position = {
      start: fl(V.length > 0 ? V[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: fl(V.length > 0 ? V[V.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, jt = -1; ++jt < r.transforms.length; )
      W = r.transforms[jt](W) || W;
    return W;
  }
  function s(V, W, yt) {
    let At = W - 1, jt = -1, Ue = !1, bn, ke, ue, Ae;
    for (; ++At <= yt; ) {
      const Xt = V[At];
      switch (Xt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Xt[0] === "enter" ? jt++ : jt--, Ae = void 0;
          break;
        }
        case "lineEndingBlank": {
          Xt[0] === "enter" && (bn && !Ae && !jt && !ue && (ue = At), Ae = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ae = void 0;
      }
      if (!jt && Xt[0] === "enter" && Xt[1].type === "listItemPrefix" || jt === -1 && Xt[0] === "exit" && (Xt[1].type === "listUnordered" || Xt[1].type === "listOrdered")) {
        if (bn) {
          let Hn = At;
          for (ke = void 0; Hn--; ) {
            const an = V[Hn];
            if (an[1].type === "lineEnding" || an[1].type === "lineEndingBlank") {
              if (an[0] === "exit") continue;
              ke && (V[ke][1].type = "lineEndingBlank", Ue = !0), an[1].type = "lineEnding", ke = Hn;
            } else if (!(an[1].type === "linePrefix" || an[1].type === "blockQuotePrefix" || an[1].type === "blockQuotePrefixWhitespace" || an[1].type === "blockQuoteMarker" || an[1].type === "listItemIndent")) break;
          }
          ue && (!ke || ue < ke) && (bn._spread = !0), bn.end = Object.assign({}, ke ? V[ke][1].start : Xt[1].end), V.splice(ke || At, 0, ["exit", bn, Xt[2]]), At++, yt++;
        }
        if (Xt[1].type === "listItemPrefix") {
          const Hn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Xt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          bn = Hn, V.splice(At, 0, ["enter", Hn, Xt[2]]), At++, yt++, ue = void 0, Ae = !0;
        }
      }
    }
    return V[W][1]._spread = Ue, yt;
  }
  function h(V, W) {
    return yt;
    function yt(At) {
      m.call(this, V(At), At), W && W.call(this, At);
    }
  }
  function f() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(V, W, yt) {
    this.stack[this.stack.length - 1].children.push(V), this.stack.push(V), this.tokenStack.push([W, yt || void 0]), V.position = {
      start: fl(W.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function p(V) {
    return W;
    function W(yt) {
      V && V.call(this, yt), d.call(this, yt);
    }
  }
  function d(V, W) {
    const yt = this.stack.pop(), At = this.tokenStack.pop();
    if (At)
      At[0].type !== V.type && (W ? W.call(this, V, At[0]) : (At[1] || Np).call(this, V, At[0]));
    else throw new Error("Cannot close `" + V.type + "` (" + Na({
      start: V.start,
      end: V.end
    }) + "): it’s not open");
    yt.position.end = fl(V.end);
  }
  function b() {
    return Bs(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function S(V) {
    if (this.data.expectingFirstListItemValue) {
      const W = this.stack[this.stack.length - 2];
      W.start = Number.parseInt(this.sliceSerialize(V), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.lang = V;
  }
  function A() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.meta = V;
  }
  function R() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function L() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function _() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = V.replace(/(\r?\n|\r)$/g, "");
  }
  function Z(V) {
    const W = this.resume(), yt = this.stack[this.stack.length - 1];
    yt.label = W, yt.identifier = cn(this.sliceSerialize(V)).toLowerCase();
  }
  function H() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.title = V;
  }
  function lt() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.url = V;
  }
  function ot(V) {
    const W = this.stack[this.stack.length - 1];
    if (!W.depth) {
      const yt = this.sliceSerialize(V).length;
      W.depth = yt;
    }
  }
  function B() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function P(V) {
    const W = this.stack[this.stack.length - 1];
    W.depth = this.sliceSerialize(V).codePointAt(0) === 61 ? 1 : 2;
  }
  function J() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function mt(V) {
    const yt = this.stack[this.stack.length - 1].children;
    let At = yt[yt.length - 1];
    (!At || At.type !== "text") && (At = Se(), At.position = {
      start: fl(V.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, yt.push(At)), this.stack.push(At);
  }
  function U(V) {
    const W = this.stack.pop();
    W.value += this.sliceSerialize(V), W.position.end = fl(V.end);
  }
  function et(V) {
    const W = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const yt = W.children[W.children.length - 1];
      yt.position.end = fl(V.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(W.type) && (mt.call(this, V), U.call(this, V));
  }
  function tt() {
    this.data.atHardBreak = !0;
  }
  function Et() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = V;
  }
  function it() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = V;
  }
  function I() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = V;
  }
  function M() {
    const V = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const W = this.data.referenceType || "shortcut";
      V.type += "Reference", V.referenceType = W, delete V.url, delete V.title;
    } else
      delete V.identifier, delete V.label;
    this.data.referenceType = void 0;
  }
  function K() {
    const V = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const W = this.data.referenceType || "shortcut";
      V.type += "Reference", V.referenceType = W, delete V.url, delete V.title;
    } else
      delete V.identifier, delete V.label;
    this.data.referenceType = void 0;
  }
  function Q(V) {
    const W = this.sliceSerialize(V), yt = this.stack[this.stack.length - 2];
    yt.label = JS(W), yt.identifier = cn(W).toLowerCase();
  }
  function xt() {
    const V = this.stack[this.stack.length - 1], W = this.resume(), yt = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, yt.type === "link") {
      const At = V.children;
      yt.children = At;
    } else
      yt.alt = W;
  }
  function E() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.url = V;
  }
  function z() {
    const V = this.resume(), W = this.stack[this.stack.length - 1];
    W.title = V;
  }
  function Y() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = "collapsed";
  }
  function $(V) {
    const W = this.resume(), yt = this.stack[this.stack.length - 1];
    yt.label = W, yt.identifier = cn(this.sliceSerialize(V)).toLowerCase(), this.data.referenceType = "full";
  }
  function ft(V) {
    this.data.characterReferenceType = V.type;
  }
  function st(V) {
    const W = this.sliceSerialize(V), yt = this.data.characterReferenceType;
    let At;
    yt ? (At = Bg(W, yt === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : At = Hs(W);
    const jt = this.stack[this.stack.length - 1];
    jt.value += At;
  }
  function ht(V) {
    const W = this.stack.pop();
    W.position.end = fl(V.end);
  }
  function Gt(V) {
    U.call(this, V);
    const W = this.stack[this.stack.length - 1];
    W.url = this.sliceSerialize(V);
  }
  function Rt(V) {
    U.call(this, V);
    const W = this.stack[this.stack.length - 1];
    W.url = "mailto:" + this.sliceSerialize(V);
  }
  function he() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Le() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function sn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ga() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function yn() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Ul() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function jl() {
    return {
      type: "break"
    };
  }
  function Xa() {
    return {
      type: "html",
      value: ""
    };
  }
  function Qa() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Bl() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Hl(V) {
    return {
      type: "list",
      ordered: V.type === "listOrdered",
      start: null,
      spread: V._spread,
      children: []
    };
  }
  function Ni(V) {
    return {
      type: "listItem",
      spread: V._spread,
      checked: null,
      children: []
    };
  }
  function _u() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Mu() {
    return {
      type: "strong",
      children: []
    };
  }
  function Se() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ou() {
    return {
      type: "thematicBreak"
    };
  }
}
function fl(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function Jg(n, r) {
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    Array.isArray(u) ? Jg(n, u) : PS(n, u);
  }
}
function PS(n, r) {
  let a;
  for (a in r)
    if (Fg.call(r, a))
      switch (a) {
        case "canContainEols": {
          const u = r[a];
          u && n[a].push(...u);
          break;
        }
        case "transforms": {
          const u = r[a];
          u && n[a].push(...u);
          break;
        }
        case "enter":
        case "exit": {
          const u = r[a];
          u && Object.assign(n[a], u);
          break;
        }
      }
}
function Np(n, r) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + Na({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + r.type + "`, " + Na({
    start: r.start,
    end: r.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + Na({
    start: r.start,
    end: r.end
  }) + ") is still open");
}
function tk(n) {
  const r = this;
  r.parser = a;
  function a(u) {
    return $S(u, {
      ...r.data("settings"),
      ...n,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: r.data("micromarkExtensions") || [],
      mdastExtensions: r.data("fromMarkdownExtensions") || []
    });
  }
}
function ek(n, r) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(r), !0)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function nk(n, r) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(r, a), [n.applyData(r, a), { type: "text", value: `
` }];
}
function lk(n, r) {
  const a = r.value ? r.value + `
` : "", u = {}, s = r.lang ? r.lang.split(/\s+/) : [];
  s.length > 0 && (u.className = ["language-" + s[0]]);
  let h = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: a }]
  };
  return r.meta && (h.data = { meta: r.meta }), n.patch(r, h), h = n.applyData(r, h), h = { type: "element", tagName: "pre", properties: {}, children: [h] }, n.patch(r, h), h;
}
function ik(n, r) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function ak(n, r) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function rk(n, r) {
  const a = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", u = String(r.identifier).toUpperCase(), s = Ri(u.toLowerCase()), h = n.footnoteOrder.indexOf(u);
  let f, m = n.footnoteCounts.get(u);
  m === void 0 ? (m = 0, n.footnoteOrder.push(u), f = n.footnoteOrder.length) : f = h + 1, m += 1, n.footnoteCounts.set(u, m);
  const p = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + s,
      id: a + "fnref-" + s + (m > 1 ? "-" + m : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(f) }]
  };
  n.patch(r, p);
  const d = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [p]
  };
  return n.patch(r, d), n.applyData(r, d);
}
function uk(n, r) {
  const a = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function ok(n, r) {
  if (n.options.allowDangerousHtml) {
    const a = { type: "raw", value: r.value };
    return n.patch(r, a), n.applyData(r, a);
  }
}
function Ig(n, r) {
  const a = r.referenceType;
  let u = "]";
  if (a === "collapsed" ? u += "[]" : a === "full" && (u += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference")
    return [{ type: "text", value: "![" + r.alt + u }];
  const s = n.all(r), h = s[0];
  h && h.type === "text" ? h.value = "[" + h.value : s.unshift({ type: "text", value: "[" });
  const f = s[s.length - 1];
  return f && f.type === "text" ? f.value += u : s.push({ type: "text", value: u }), s;
}
function ck(n, r) {
  const a = String(r.identifier).toUpperCase(), u = n.definitionById.get(a);
  if (!u)
    return Ig(n, r);
  const s = { src: Ri(u.url || ""), alt: r.alt };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const h = { type: "element", tagName: "img", properties: s, children: [] };
  return n.patch(r, h), n.applyData(r, h);
}
function sk(n, r) {
  const a = { src: Ri(r.url) };
  r.alt !== null && r.alt !== void 0 && (a.alt = r.alt), r.title !== null && r.title !== void 0 && (a.title = r.title);
  const u = { type: "element", tagName: "img", properties: a, children: [] };
  return n.patch(r, u), n.applyData(r, u);
}
function fk(n, r) {
  const a = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
  n.patch(r, a);
  const u = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [a]
  };
  return n.patch(r, u), n.applyData(r, u);
}
function hk(n, r) {
  const a = String(r.identifier).toUpperCase(), u = n.definitionById.get(a);
  if (!u)
    return Ig(n, r);
  const s = { href: Ri(u.url || "") };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const h = {
    type: "element",
    tagName: "a",
    properties: s,
    children: n.all(r)
  };
  return n.patch(r, h), n.applyData(r, h);
}
function dk(n, r) {
  const a = { href: Ri(r.url) };
  r.title !== null && r.title !== void 0 && (a.title = r.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: a,
    children: n.all(r)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function mk(n, r, a) {
  const u = n.all(r), s = a ? pk(a) : $g(r), h = {}, f = [];
  if (typeof r.checked == "boolean") {
    const b = u[0];
    let y;
    b && b.type === "element" && b.tagName === "p" ? y = b : (y = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: r.checked, disabled: !0 },
      children: []
    }), h.className = ["task-list-item"];
  }
  let m = -1;
  for (; ++m < u.length; ) {
    const b = u[m];
    (s || m !== 0 || b.type !== "element" || b.tagName !== "p") && f.push({ type: "text", value: `
` }), b.type === "element" && b.tagName === "p" && !s ? f.push(...b.children) : f.push(b);
  }
  const p = u[u.length - 1];
  p && (s || p.type !== "element" || p.tagName !== "p") && f.push({ type: "text", value: `
` });
  const d = { type: "element", tagName: "li", properties: h, children: f };
  return n.patch(r, d), n.applyData(r, d);
}
function pk(n) {
  let r = !1;
  if (n.type === "list") {
    r = n.spread || !1;
    const a = n.children;
    let u = -1;
    for (; !r && ++u < a.length; )
      r = $g(a[u]);
  }
  return r;
}
function $g(n) {
  const r = n.spread;
  return r ?? n.children.length > 1;
}
function gk(n, r) {
  const a = {}, u = n.all(r);
  let s = -1;
  for (typeof r.start == "number" && r.start !== 1 && (a.start = r.start); ++s < u.length; ) {
    const f = u[s];
    if (f.type === "element" && f.tagName === "li" && f.properties && Array.isArray(f.properties.className) && f.properties.className.includes("task-list-item")) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const h = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: a,
    children: n.wrap(u, !0)
  };
  return n.patch(r, h), n.applyData(r, h);
}
function yk(n, r) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function bk(n, r) {
  const a = { type: "root", children: n.wrap(n.all(r)) };
  return n.patch(r, a), n.applyData(r, a);
}
function vk(n, r) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function xk(n, r) {
  const a = n.all(r), u = a.shift(), s = [];
  if (u) {
    const f = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([u], !0)
    };
    n.patch(r.children[0], f), s.push(f);
  }
  if (a.length > 0) {
    const f = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(a, !0)
    }, m = Ns(r.children[1]), p = Mg(r.children[r.children.length - 1]);
    m && p && (f.position = { start: m, end: p }), s.push(f);
  }
  const h = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(s, !0)
  };
  return n.patch(r, h), n.applyData(r, h);
}
function Sk(n, r, a) {
  const u = a ? a.children : void 0, h = (u ? u.indexOf(r) : 1) === 0 ? "th" : "td", f = a && a.type === "table" ? a.align : void 0, m = f ? f.length : r.children.length;
  let p = -1;
  const d = [];
  for (; ++p < m; ) {
    const y = r.children[p], S = {}, x = f ? f[p] : void 0;
    x && (S.align = x);
    let A = { type: "element", tagName: h, properties: S, children: [] };
    y && (A.children = n.all(y), n.patch(y, A), A = n.applyData(y, A)), d.push(A);
  }
  const b = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(d, !0)
  };
  return n.patch(r, b), n.applyData(r, b);
}
function kk(n, r) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
const Lp = 9, Up = 32;
function Ek(n) {
  const r = String(n), a = /\r?\n|\r/g;
  let u = a.exec(r), s = 0;
  const h = [];
  for (; u; )
    h.push(
      jp(r.slice(s, u.index), s > 0, !0),
      u[0]
    ), s = u.index + u[0].length, u = a.exec(r);
  return h.push(jp(r.slice(s), s > 0, !1)), h.join("");
}
function jp(n, r, a) {
  let u = 0, s = n.length;
  if (r) {
    let h = n.codePointAt(u);
    for (; h === Lp || h === Up; )
      u++, h = n.codePointAt(u);
  }
  if (a) {
    let h = n.codePointAt(s - 1);
    for (; h === Lp || h === Up; )
      s--, h = n.codePointAt(s - 1);
  }
  return s > u ? n.slice(u, s) : "";
}
function wk(n, r) {
  const a = { type: "text", value: Ek(String(r.value)) };
  return n.patch(r, a), n.applyData(r, a);
}
function Ak(n, r) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(r, a), n.applyData(r, a);
}
const zk = {
  blockquote: ek,
  break: nk,
  code: lk,
  delete: ik,
  emphasis: ak,
  footnoteReference: rk,
  heading: uk,
  html: ok,
  imageReference: ck,
  image: sk,
  inlineCode: fk,
  linkReference: hk,
  link: dk,
  listItem: mk,
  list: gk,
  paragraph: yk,
  // @ts-expect-error: root is different, but hard to type.
  root: bk,
  strong: vk,
  table: xk,
  tableCell: kk,
  tableRow: Sk,
  text: wk,
  thematicBreak: Ak,
  toml: hu,
  yaml: hu,
  definition: hu,
  footnoteDefinition: hu
};
function hu() {
}
const Wg = -1, zu = 0, Ua = 1, vu = 2, Ys = 3, Vs = 4, Gs = 5, Xs = 6, Pg = 7, ty = 8, Bp = typeof self == "object" ? self : globalThis, Tk = (n, r) => {
  const a = (s, h) => (n.set(h, s), s), u = (s) => {
    if (n.has(s))
      return n.get(s);
    const [h, f] = r[s];
    switch (h) {
      case zu:
      case Wg:
        return a(f, s);
      case Ua: {
        const m = a([], s);
        for (const p of f)
          m.push(u(p));
        return m;
      }
      case vu: {
        const m = a({}, s);
        for (const [p, d] of f)
          m[u(p)] = u(d);
        return m;
      }
      case Ys:
        return a(new Date(f), s);
      case Vs: {
        const { source: m, flags: p } = f;
        return a(new RegExp(m, p), s);
      }
      case Gs: {
        const m = a(/* @__PURE__ */ new Map(), s);
        for (const [p, d] of f)
          m.set(u(p), u(d));
        return m;
      }
      case Xs: {
        const m = a(/* @__PURE__ */ new Set(), s);
        for (const p of f)
          m.add(u(p));
        return m;
      }
      case Pg: {
        const { name: m, message: p } = f;
        return a(new Bp[m](p), s);
      }
      case ty:
        return a(BigInt(f), s);
      case "BigInt":
        return a(Object(BigInt(f)), s);
      case "ArrayBuffer":
        return a(new Uint8Array(f).buffer, f);
      case "DataView": {
        const { buffer: m } = new Uint8Array(f);
        return a(new DataView(m), f);
      }
    }
    return a(new Bp[h](f), s);
  };
  return u;
}, Hp = (n) => Tk(/* @__PURE__ */ new Map(), n)(0), zi = "", { toString: Ck } = {}, { keys: _k } = Object, Ra = (n) => {
  const r = typeof n;
  if (r !== "object" || !n)
    return [zu, r];
  const a = Ck.call(n).slice(8, -1);
  switch (a) {
    case "Array":
      return [Ua, zi];
    case "Object":
      return [vu, zi];
    case "Date":
      return [Ys, zi];
    case "RegExp":
      return [Vs, zi];
    case "Map":
      return [Gs, zi];
    case "Set":
      return [Xs, zi];
    case "DataView":
      return [Ua, a];
  }
  return a.includes("Array") ? [Ua, a] : a.includes("Error") ? [Pg, a] : [vu, a];
}, du = ([n, r]) => n === zu && (r === "function" || r === "symbol"), Mk = (n, r, a, u) => {
  const s = (f, m) => {
    const p = u.push(f) - 1;
    return a.set(m, p), p;
  }, h = (f) => {
    if (a.has(f))
      return a.get(f);
    let [m, p] = Ra(f);
    switch (m) {
      case zu: {
        let b = f;
        switch (p) {
          case "bigint":
            m = ty, b = f.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + p);
            b = null;
            break;
          case "undefined":
            return s([Wg], f);
        }
        return s([m, b], f);
      }
      case Ua: {
        if (p) {
          let S = f;
          return p === "DataView" ? S = new Uint8Array(f.buffer) : p === "ArrayBuffer" && (S = new Uint8Array(f)), s([p, [...S]], f);
        }
        const b = [], y = s([m, b], f);
        for (const S of f)
          b.push(h(S));
        return y;
      }
      case vu: {
        if (p)
          switch (p) {
            case "BigInt":
              return s([p, f.toString()], f);
            case "Boolean":
            case "Number":
            case "String":
              return s([p, f.valueOf()], f);
          }
        if (r && "toJSON" in f)
          return h(f.toJSON());
        const b = [], y = s([m, b], f);
        for (const S of _k(f))
          (n || !du(Ra(f[S]))) && b.push([h(S), h(f[S])]);
        return y;
      }
      case Ys:
        return s([m, f.toISOString()], f);
      case Vs: {
        const { source: b, flags: y } = f;
        return s([m, { source: b, flags: y }], f);
      }
      case Gs: {
        const b = [], y = s([m, b], f);
        for (const [S, x] of f)
          (n || !(du(Ra(S)) || du(Ra(x)))) && b.push([h(S), h(x)]);
        return y;
      }
      case Xs: {
        const b = [], y = s([m, b], f);
        for (const S of f)
          (n || !du(Ra(S))) && b.push(h(S));
        return y;
      }
    }
    const { message: d } = f;
    return s([m, { name: p, message: d }], f);
  };
  return h;
}, qp = (n, { json: r, lossy: a } = {}) => {
  const u = [];
  return Mk(!(r || a), !!r, /* @__PURE__ */ new Map(), u)(n), u;
}, xu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, r) => r && ("json" in r || "lossy" in r) ? Hp(qp(n, r)) : structuredClone(n)
) : (n, r) => Hp(qp(n, r));
function Ok(n, r) {
  const a = [{ type: "text", value: "↩" }];
  return r > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(r) }]
  }), a;
}
function Dk(n, r) {
  return "Back to reference " + (n + 1) + (r > 1 ? "-" + r : "");
}
function Rk(n) {
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", a = n.options.footnoteBackContent || Ok, u = n.options.footnoteBackLabel || Dk, s = n.options.footnoteLabel || "Footnotes", h = n.options.footnoteLabelTagName || "h2", f = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, m = [];
  let p = -1;
  for (; ++p < n.footnoteOrder.length; ) {
    const d = n.footnoteById.get(
      n.footnoteOrder[p]
    );
    if (!d)
      continue;
    const b = n.all(d), y = String(d.identifier).toUpperCase(), S = Ri(y.toLowerCase());
    let x = 0;
    const A = [], R = n.footnoteCounts.get(y);
    for (; R !== void 0 && ++x <= R; ) {
      A.length > 0 && A.push({ type: "text", value: " " });
      let Z = typeof a == "string" ? a : a(p, x);
      typeof Z == "string" && (Z = { type: "text", value: Z }), A.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + r + "fnref-" + S + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(p, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(Z) ? Z : [Z]
      });
    }
    const L = b[b.length - 1];
    if (L && L.type === "element" && L.tagName === "p") {
      const Z = L.children[L.children.length - 1];
      Z && Z.type === "text" ? Z.value += " " : L.children.push({ type: "text", value: " " }), L.children.push(...A);
    } else
      b.push(...A);
    const _ = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + S },
      children: n.wrap(b, !0)
    };
    n.patch(d, _), m.push(_);
  }
  if (m.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: h,
          properties: {
            ...xu(f),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: n.wrap(m, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Tu = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(n) {
    if (n == null)
      return jk;
    if (typeof n == "function")
      return Cu(n);
    if (typeof n == "object")
      return Array.isArray(n) ? Nk(n) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Lk(
          /** @type {Props} */
          n
        )
      );
    if (typeof n == "string")
      return Uk(n);
    throw new Error("Expected function, string, or object as test");
  })
);
function Nk(n) {
  const r = [];
  let a = -1;
  for (; ++a < n.length; )
    r[a] = Tu(n[a]);
  return Cu(u);
  function u(...s) {
    let h = -1;
    for (; ++h < r.length; )
      if (r[h].apply(this, s)) return !0;
    return !1;
  }
}
function Lk(n) {
  const r = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Cu(a);
  function a(u) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let h;
    for (h in n)
      if (s[h] !== r[h]) return !1;
    return !0;
  }
}
function Uk(n) {
  return Cu(r);
  function r(a) {
    return a && a.type === n;
  }
}
function Cu(n) {
  return r;
  function r(a, u, s) {
    return !!(Bk(a) && n.call(
      this,
      a,
      typeof u == "number" ? u : void 0,
      s || void 0
    ));
  }
}
function jk() {
  return !0;
}
function Bk(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const ey = [], Hk = !0, As = !1, qk = "skip";
function ny(n, r, a, u) {
  let s;
  typeof r == "function" && typeof a != "function" ? (u = a, a = r) : s = r;
  const h = Tu(s), f = u ? -1 : 1;
  m(n, void 0, [])();
  function m(p, d, b) {
    const y = (
      /** @type {Record<string, unknown>} */
      p && typeof p == "object" ? p : {}
    );
    if (typeof y.type == "string") {
      const x = (
        // `hast`
        typeof y.tagName == "string" ? y.tagName : (
          // `xast`
          typeof y.name == "string" ? y.name : void 0
        )
      );
      Object.defineProperty(S, "name", {
        value: "node (" + (p.type + (x ? "<" + x + ">" : "")) + ")"
      });
    }
    return S;
    function S() {
      let x = ey, A, R, L;
      if ((!r || h(p, d, b[b.length - 1] || void 0)) && (x = Yk(a(p, b)), x[0] === As))
        return x;
      if ("children" in p && p.children) {
        const _ = (
          /** @type {UnistParent} */
          p
        );
        if (_.children && x[0] !== qk)
          for (R = (u ? _.children.length : -1) + f, L = b.concat(_); R > -1 && R < _.children.length; ) {
            const Z = _.children[R];
            if (A = m(Z, R, L)(), A[0] === As)
              return A;
            R = typeof A[1] == "number" ? A[1] : R + f;
          }
      }
      return x;
    }
  }
}
function Yk(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [Hk, n] : n == null ? ey : [n];
}
function Qs(n, r, a, u) {
  let s, h, f;
  typeof r == "function" && typeof a != "function" ? (h = void 0, f = r, s = a) : (h = r, f = a, s = u), ny(n, h, m, s);
  function m(p, d) {
    const b = d[d.length - 1], y = b ? b.children.indexOf(p) : void 0;
    return f(p, y, b);
  }
}
const zs = {}.hasOwnProperty, Vk = {};
function Gk(n, r) {
  const a = r || Vk, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), f = { ...zk, ...a.handlers }, m = {
    all: d,
    applyData: Qk,
    definitionById: u,
    footnoteById: s,
    footnoteCounts: h,
    footnoteOrder: [],
    handlers: f,
    one: p,
    options: a,
    patch: Xk,
    wrap: Kk
  };
  return Qs(n, function(b) {
    if (b.type === "definition" || b.type === "footnoteDefinition") {
      const y = b.type === "definition" ? u : s, S = String(b.identifier).toUpperCase();
      y.has(S) || y.set(S, b);
    }
  }), m;
  function p(b, y) {
    const S = b.type, x = m.handlers[S];
    if (zs.call(m.handlers, S) && x)
      return x(m, b, y);
    if (m.options.passThrough && m.options.passThrough.includes(S)) {
      if ("children" in b) {
        const { children: R, ...L } = b, _ = xu(L);
        return _.children = m.all(b), _;
      }
      return xu(b);
    }
    return (m.options.unknownHandler || Zk)(m, b, y);
  }
  function d(b) {
    const y = [];
    if ("children" in b) {
      const S = b.children;
      let x = -1;
      for (; ++x < S.length; ) {
        const A = m.one(S[x], b);
        if (A) {
          if (x && S[x - 1].type === "break" && (!Array.isArray(A) && A.type === "text" && (A.value = Yp(A.value)), !Array.isArray(A) && A.type === "element")) {
            const R = A.children[0];
            R && R.type === "text" && (R.value = Yp(R.value));
          }
          Array.isArray(A) ? y.push(...A) : y.push(A);
        }
      }
    }
    return y;
  }
}
function Xk(n, r) {
  n.position && (r.position = Dv(n));
}
function Qk(n, r) {
  let a = r;
  if (n && n.data) {
    const u = n.data.hName, s = n.data.hChildren, h = n.data.hProperties;
    if (typeof u == "string")
      if (a.type === "element")
        a.tagName = u;
      else {
        const f = "children" in a ? a.children : [a];
        a = { type: "element", tagName: u, properties: {}, children: f };
      }
    a.type === "element" && h && Object.assign(a.properties, xu(h)), "children" in a && a.children && s !== null && s !== void 0 && (a.children = s);
  }
  return a;
}
function Zk(n, r) {
  const a = r.data || {}, u = "value" in r && !(zs.call(a, "hProperties") || zs.call(a, "hChildren")) ? { type: "text", value: r.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function Kk(n, r) {
  const a = [];
  let u = -1;
  for (r && a.push({ type: "text", value: `
` }); ++u < n.length; )
    u && a.push({ type: "text", value: `
` }), a.push(n[u]);
  return r && n.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Yp(n) {
  let r = 0, a = n.charCodeAt(r);
  for (; a === 9 || a === 32; )
    r++, a = n.charCodeAt(r);
  return n.slice(r);
}
function Vp(n, r) {
  const a = Gk(n, r), u = a.one(n, void 0), s = Rk(a), h = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return s && h.children.push({ type: "text", value: `
` }, s), h;
}
function Fk(n, r) {
  return n && "run" in n ? async function(a, u) {
    const s = (
      /** @type {HastRoot} */
      Vp(a, { file: u, ...r })
    );
    await n.run(s, u);
  } : function(a, u) {
    return (
      /** @type {HastRoot} */
      Vp(a, { file: u, ...n || r })
    );
  };
}
function Gp(n) {
  if (n)
    throw n;
}
var as, Xp;
function Jk() {
  if (Xp) return as;
  Xp = 1;
  var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, a = Object.defineProperty, u = Object.getOwnPropertyDescriptor, s = function(d) {
    return typeof Array.isArray == "function" ? Array.isArray(d) : r.call(d) === "[object Array]";
  }, h = function(d) {
    if (!d || r.call(d) !== "[object Object]")
      return !1;
    var b = n.call(d, "constructor"), y = d.constructor && d.constructor.prototype && n.call(d.constructor.prototype, "isPrototypeOf");
    if (d.constructor && !b && !y)
      return !1;
    var S;
    for (S in d)
      ;
    return typeof S > "u" || n.call(d, S);
  }, f = function(d, b) {
    a && b.name === "__proto__" ? a(d, b.name, {
      enumerable: !0,
      configurable: !0,
      value: b.newValue,
      writable: !0
    }) : d[b.name] = b.newValue;
  }, m = function(d, b) {
    if (b === "__proto__")
      if (n.call(d, b)) {
        if (u)
          return u(d, b).value;
      } else return;
    return d[b];
  };
  return as = function p() {
    var d, b, y, S, x, A, R = arguments[0], L = 1, _ = arguments.length, Z = !1;
    for (typeof R == "boolean" && (Z = R, R = arguments[1] || {}, L = 2), (R == null || typeof R != "object" && typeof R != "function") && (R = {}); L < _; ++L)
      if (d = arguments[L], d != null)
        for (b in d)
          y = m(R, b), S = m(d, b), R !== S && (Z && S && (h(S) || (x = s(S))) ? (x ? (x = !1, A = y && s(y) ? y : []) : A = y && h(y) ? y : {}, f(R, { name: b, newValue: p(Z, A, S) })) : typeof S < "u" && f(R, { name: b, newValue: S }));
    return R;
  }, as;
}
var Ik = Jk();
const rs = /* @__PURE__ */ ku(Ik);
function Ts(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function $k() {
  const n = [], r = { run: a, use: u };
  return r;
  function a(...s) {
    let h = -1;
    const f = s.pop();
    if (typeof f != "function")
      throw new TypeError("Expected function as last argument, not " + f);
    m(null, ...s);
    function m(p, ...d) {
      const b = n[++h];
      let y = -1;
      if (p) {
        f(p);
        return;
      }
      for (; ++y < s.length; )
        (d[y] === null || d[y] === void 0) && (d[y] = s[y]);
      s = d, b ? Wk(b, m)(...d) : f(null, ...d);
    }
  }
  function u(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return n.push(s), r;
  }
}
function Wk(n, r) {
  let a;
  return u;
  function u(...f) {
    const m = n.length > f.length;
    let p;
    m && f.push(s);
    try {
      p = n.apply(this, f);
    } catch (d) {
      const b = (
        /** @type {Error} */
        d
      );
      if (m && a)
        throw b;
      return s(b);
    }
    m || (p && p.then && typeof p.then == "function" ? p.then(h, s) : p instanceof Error ? s(p) : h(p));
  }
  function s(f, ...m) {
    a || (a = !0, r(f, ...m));
  }
  function h(f) {
    s(null, f);
  }
}
const pn = { basename: Pk, dirname: t2, extname: e2, join: n2, sep: "/" };
function Pk(n, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Va(n);
  let a = 0, u = -1, s = n.length, h;
  if (r === void 0 || r.length === 0 || r.length > n.length) {
    for (; s--; )
      if (n.codePointAt(s) === 47) {
        if (h) {
          a = s + 1;
          break;
        }
      } else u < 0 && (h = !0, u = s + 1);
    return u < 0 ? "" : n.slice(a, u);
  }
  if (r === n)
    return "";
  let f = -1, m = r.length - 1;
  for (; s--; )
    if (n.codePointAt(s) === 47) {
      if (h) {
        a = s + 1;
        break;
      }
    } else
      f < 0 && (h = !0, f = s + 1), m > -1 && (n.codePointAt(s) === r.codePointAt(m--) ? m < 0 && (u = s) : (m = -1, u = f));
  return a === u ? u = f : u < 0 && (u = n.length), n.slice(a, u);
}
function t2(n) {
  if (Va(n), n.length === 0)
    return ".";
  let r = -1, a = n.length, u;
  for (; --a; )
    if (n.codePointAt(a) === 47) {
      if (u) {
        r = a;
        break;
      }
    } else u || (u = !0);
  return r < 0 ? n.codePointAt(0) === 47 ? "/" : "." : r === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, r);
}
function e2(n) {
  Va(n);
  let r = n.length, a = -1, u = 0, s = -1, h = 0, f;
  for (; r--; ) {
    const m = n.codePointAt(r);
    if (m === 47) {
      if (f) {
        u = r + 1;
        break;
      }
      continue;
    }
    a < 0 && (f = !0, a = r + 1), m === 46 ? s < 0 ? s = r : h !== 1 && (h = 1) : s > -1 && (h = -1);
  }
  return s < 0 || a < 0 || // We saw a non-dot character immediately before the dot.
  h === 0 || // The (right-most) trimmed path component is exactly `..`.
  h === 1 && s === a - 1 && s === u + 1 ? "" : n.slice(s, a);
}
function n2(...n) {
  let r = -1, a;
  for (; ++r < n.length; )
    Va(n[r]), n[r] && (a = a === void 0 ? n[r] : a + "/" + n[r]);
  return a === void 0 ? "." : l2(a);
}
function l2(n) {
  Va(n);
  const r = n.codePointAt(0) === 47;
  let a = i2(n, !r);
  return a.length === 0 && !r && (a = "."), a.length > 0 && n.codePointAt(n.length - 1) === 47 && (a += "/"), r ? "/" + a : a;
}
function i2(n, r) {
  let a = "", u = 0, s = -1, h = 0, f = -1, m, p;
  for (; ++f <= n.length; ) {
    if (f < n.length)
      m = n.codePointAt(f);
    else {
      if (m === 47)
        break;
      m = 47;
    }
    if (m === 47) {
      if (!(s === f - 1 || h === 1)) if (s !== f - 1 && h === 2) {
        if (a.length < 2 || u !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
          if (a.length > 2) {
            if (p = a.lastIndexOf("/"), p !== a.length - 1) {
              p < 0 ? (a = "", u = 0) : (a = a.slice(0, p), u = a.length - 1 - a.lastIndexOf("/")), s = f, h = 0;
              continue;
            }
          } else if (a.length > 0) {
            a = "", u = 0, s = f, h = 0;
            continue;
          }
        }
        r && (a = a.length > 0 ? a + "/.." : "..", u = 2);
      } else
        a.length > 0 ? a += "/" + n.slice(s + 1, f) : a = n.slice(s + 1, f), u = f - s - 1;
      s = f, h = 0;
    } else m === 46 && h > -1 ? h++ : h = -1;
  }
  return a;
}
function Va(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const a2 = { cwd: r2 };
function r2() {
  return "/";
}
function Cs(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function u2(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!Cs(n)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw r.code = "ERR_INVALID_ARG_TYPE", r;
  }
  if (n.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw r.code = "ERR_INVALID_URL_SCHEME", r;
  }
  return o2(n);
}
function o2(n) {
  if (n.hostname !== "") {
    const u = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw u.code = "ERR_INVALID_FILE_URL_HOST", u;
  }
  const r = n.pathname;
  let a = -1;
  for (; ++a < r.length; )
    if (r.codePointAt(a) === 37 && r.codePointAt(a + 1) === 50) {
      const u = r.codePointAt(a + 2);
      if (u === 70 || u === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(r);
}
const us = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class ly {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(r) {
    let a;
    r ? Cs(r) ? a = { path: r } : typeof r == "string" || c2(r) ? a = { value: r } : a = r : a = {}, this.cwd = "cwd" in a ? "" : a2.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < us.length; ) {
      const h = us[u];
      h in a && a[h] !== void 0 && a[h] !== null && (this[h] = h === "history" ? [...a[h]] : a[h]);
    }
    let s;
    for (s in a)
      us.includes(s) || (this[s] = a[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? pn.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(r) {
    cs(r, "basename"), os(r, "basename"), this.path = pn.join(this.dirname || "", r);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? pn.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(r) {
    Qp(this.basename, "dirname"), this.path = pn.join(r || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? pn.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(r) {
    if (os(r, "extname"), Qp(this.dirname, "extname"), r) {
      if (r.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = pn.join(this.dirname, this.stem + (r || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(r) {
    Cs(r) && (r = u2(r)), cs(r, "path"), this.path !== r && this.history.push(r);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? pn.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(r) {
    cs(r, "stem"), os(r, "stem"), this.path = pn.join(this.dirname || "", r + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(r, a, u) {
    const s = this.message(r, a, u);
    throw s.fatal = !0, s;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(r, a, u) {
    const s = this.message(r, a, u);
    return s.fatal = void 0, s;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(r, a, u) {
    const s = new xe(
      // @ts-expect-error: the overloads are fine.
      r,
      a,
      u
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(r) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
  }
}
function os(n, r) {
  if (n && n.includes(pn.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + pn.sep + "`"
    );
}
function cs(n, r) {
  if (!n)
    throw new Error("`" + r + "` cannot be empty");
}
function Qp(n, r) {
  if (!n)
    throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function c2(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const s2 = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(n) {
    const u = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = u[n], h = function() {
      return s.apply(h, arguments);
    };
    return Object.setPrototypeOf(h, u), h;
  })
), f2 = {}.hasOwnProperty;
class Zs extends s2 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = $k();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const r = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Zs()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const u = this.attachers[a];
      r.use(...u);
    }
    return r.data(rs(!0, {}, this.namespace)), r;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(r, a) {
    return typeof r == "string" ? arguments.length === 2 ? (hs("data", this.frozen), this.namespace[r] = a, this) : f2.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (hs("data", this.frozen), this.namespace = r, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const r = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [a, ...u] = this.attachers[this.freezeIndex];
      if (u[0] === !1)
        continue;
      u[0] === !0 && (u[0] = void 0);
      const s = a.call(r, ...u);
      typeof s == "function" && this.transformers.use(s);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(r) {
    this.freeze();
    const a = mu(r), u = this.parser || this.Parser;
    return ss("parse", u), u(String(a), a);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(r, a) {
    const u = this;
    return this.freeze(), ss("process", this.parser || this.Parser), fs("process", this.compiler || this.Compiler), a ? s(void 0, a) : new Promise(s);
    function s(h, f) {
      const m = mu(r), p = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(m)
      );
      u.run(p, m, function(b, y, S) {
        if (b || !y || !S)
          return d(b);
        const x = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          y
        ), A = u.stringify(x, S);
        m2(A) ? S.value = A : S.result = A, d(
          b,
          /** @type {VFileWithOutput<CompileResult>} */
          S
        );
      });
      function d(b, y) {
        b || !y ? f(b) : h ? h(y) : a(void 0, y);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(r) {
    let a = !1, u;
    return this.freeze(), ss("processSync", this.parser || this.Parser), fs("processSync", this.compiler || this.Compiler), this.process(r, s), Kp("processSync", "process", a), u;
    function s(h, f) {
      a = !0, Gp(h), u = f;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(r, a, u) {
    Zp(r), this.freeze();
    const s = this.transformers;
    return !u && typeof a == "function" && (u = a, a = void 0), u ? h(void 0, u) : new Promise(h);
    function h(f, m) {
      const p = mu(a);
      s.run(r, p, d);
      function d(b, y, S) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || r
        );
        b ? m(b) : f ? f(x) : u(void 0, x, S);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(r, a) {
    let u = !1, s;
    return this.run(r, a, h), Kp("runSync", "run", u), s;
    function h(f, m) {
      Gp(f), s = m, u = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(r, a) {
    this.freeze();
    const u = mu(a), s = this.compiler || this.Compiler;
    return fs("stringify", s), Zp(r), s(r, u);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(r, ...a) {
    const u = this.attachers, s = this.namespace;
    if (hs("use", this.frozen), r != null) if (typeof r == "function")
      p(r, a);
    else if (typeof r == "object")
      Array.isArray(r) ? m(r) : f(r);
    else
      throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function h(d) {
      if (typeof d == "function")
        p(d, []);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [b, ...y] = (
            /** @type {PluginTuple<Array<unknown>>} */
            d
          );
          p(b, y);
        } else
          f(d);
      else
        throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function f(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      m(d.plugins), d.settings && (s.settings = rs(!0, s.settings, d.settings));
    }
    function m(d) {
      let b = -1;
      if (d != null) if (Array.isArray(d))
        for (; ++b < d.length; ) {
          const y = d[b];
          h(y);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function p(d, b) {
      let y = -1, S = -1;
      for (; ++y < u.length; )
        if (u[y][0] === d) {
          S = y;
          break;
        }
      if (S === -1)
        u.push([d, ...b]);
      else if (b.length > 0) {
        let [x, ...A] = b;
        const R = u[S][1];
        Ts(R) && Ts(x) && (x = rs(!0, R, x)), u[S] = [d, x, ...A];
      }
    }
  }
}
const h2 = new Zs().freeze();
function ss(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function fs(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function hs(n, r) {
  if (r)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Zp(n) {
  if (!Ts(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function Kp(n, r, a) {
  if (!a)
    throw new Error(
      "`" + n + "` finished async. Use `" + r + "` instead"
    );
}
function mu(n) {
  return d2(n) ? n : new ly(n);
}
function d2(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function m2(n) {
  return typeof n == "string" || p2(n);
}
function p2(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const g2 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Fp = [], Jp = { allowDangerousHtml: !0 }, y2 = /^(https?|ircs?|mailto|xmpp)$/i, b2 = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Ks(n) {
  const r = v2(n), a = x2(n);
  return S2(r.runSync(r.parse(a), a), n);
}
function v2(n) {
  const r = n.rehypePlugins || Fp, a = n.remarkPlugins || Fp, u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Jp } : Jp;
  return h2().use(tk).use(a).use(Fk, u).use(r);
}
function x2(n) {
  const r = n.children || "", a = new ly();
  return typeof r == "string" && (a.value = r), a;
}
function S2(n, r) {
  const a = r.allowedElements, u = r.allowElement, s = r.components, h = r.disallowedElements, f = r.skipHtml, m = r.unwrapDisallowed, p = r.urlTransform || k2;
  for (const b of b2)
    Object.hasOwn(r, b.from) && ("" + b.from + (b.to ? "use `" + b.to + "` instead" : "remove it") + g2 + b.id, void 0);
  return Qs(n, d), jv(n, {
    Fragment: nt.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: nt.jsx,
    jsxs: nt.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function d(b, y, S) {
    if (b.type === "raw" && S && typeof y == "number")
      return f ? S.children.splice(y, 1) : S.children[y] = { type: "text", value: b.value }, y;
    if (b.type === "element") {
      let x;
      for (x in ns)
        if (Object.hasOwn(ns, x) && Object.hasOwn(b.properties, x)) {
          const A = b.properties[x], R = ns[x];
          (R === null || R.includes(b.tagName)) && (b.properties[x] = p(String(A || ""), x, b));
        }
    }
    if (b.type === "element") {
      let x = a ? !a.includes(b.tagName) : h ? h.includes(b.tagName) : !1;
      if (!x && u && typeof y == "number" && (x = !u(b, y, S)), x && S && typeof y == "number")
        return m && b.children ? S.children.splice(y, 1, ...b.children) : S.children.splice(y, 1), y;
    }
  }
}
function k2(n) {
  const r = n.indexOf(":"), a = n.indexOf("?"), u = n.indexOf("#"), s = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && r > s || a !== -1 && r > a || u !== -1 && r > u || // It is a protocol, it should be allowed.
    y2.test(n.slice(0, r)) ? n : ""
  );
}
function Ip(n, r) {
  const a = String(n);
  if (typeof r != "string")
    throw new TypeError("Expected character");
  let u = 0, s = a.indexOf(r);
  for (; s !== -1; )
    u++, s = a.indexOf(r, s + r.length);
  return u;
}
function E2(n) {
  if (typeof n != "string")
    throw new TypeError("Expected a string");
  return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function w2(n, r, a) {
  const s = Tu((a || {}).ignore || []), h = A2(r);
  let f = -1;
  for (; ++f < h.length; )
    ny(n, "text", m);
  function m(d, b) {
    let y = -1, S;
    for (; ++y < b.length; ) {
      const x = b[y], A = S ? S.children : void 0;
      if (s(
        x,
        A ? A.indexOf(x) : void 0,
        S
      ))
        return;
      S = x;
    }
    if (S)
      return p(d, b);
  }
  function p(d, b) {
    const y = b[b.length - 1], S = h[f][0], x = h[f][1];
    let A = 0;
    const L = y.children.indexOf(d);
    let _ = !1, Z = [];
    S.lastIndex = 0;
    let H = S.exec(d.value);
    for (; H; ) {
      const lt = H.index, ot = {
        index: H.index,
        input: H.input,
        stack: [...b, d]
      };
      let B = x(...H, ot);
      if (typeof B == "string" && (B = B.length > 0 ? { type: "text", value: B } : void 0), B === !1 ? S.lastIndex = lt + 1 : (A !== lt && Z.push({
        type: "text",
        value: d.value.slice(A, lt)
      }), Array.isArray(B) ? Z.push(...B) : B && Z.push(B), A = lt + H[0].length, _ = !0), !S.global)
        break;
      H = S.exec(d.value);
    }
    return _ ? (A < d.value.length && Z.push({ type: "text", value: d.value.slice(A) }), y.children.splice(L, 1, ...Z)) : Z = [d], L + Z.length;
  }
}
function A2(n) {
  const r = [];
  if (!Array.isArray(n))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const a = !n[0] || Array.isArray(n[0]) ? n : [n];
  let u = -1;
  for (; ++u < a.length; ) {
    const s = a[u];
    r.push([z2(s[0]), T2(s[1])]);
  }
  return r;
}
function z2(n) {
  return typeof n == "string" ? new RegExp(E2(n), "g") : n;
}
function T2(n) {
  return typeof n == "function" ? n : function() {
    return n;
  };
}
const ds = "phrasing", ms = ["autolink", "link", "image", "label"];
function C2() {
  return {
    transforms: [L2],
    enter: {
      literalAutolink: M2,
      literalAutolinkEmail: ps,
      literalAutolinkHttp: ps,
      literalAutolinkWww: ps
    },
    exit: {
      literalAutolink: N2,
      literalAutolinkEmail: R2,
      literalAutolinkHttp: O2,
      literalAutolinkWww: D2
    }
  };
}
function _2() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: ds,
        notInConstruct: ms
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: ds,
        notInConstruct: ms
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: ds,
        notInConstruct: ms
      }
    ]
  };
}
function M2(n) {
  this.enter({ type: "link", title: null, url: "", children: [] }, n);
}
function ps(n) {
  this.config.enter.autolinkProtocol.call(this, n);
}
function O2(n) {
  this.config.exit.autolinkProtocol.call(this, n);
}
function D2(n) {
  this.config.exit.data.call(this, n);
  const r = this.stack[this.stack.length - 1];
  r.type, r.url = "http://" + this.sliceSerialize(n);
}
function R2(n) {
  this.config.exit.autolinkEmail.call(this, n);
}
function N2(n) {
  this.exit(n);
}
function L2(n) {
  w2(
    n,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, U2],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), j2]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function U2(n, r, a, u, s) {
  let h = "";
  if (!iy(s) || (/^w/i.test(r) && (a = r + a, r = "", h = "http://"), !B2(a)))
    return !1;
  const f = H2(a + u);
  if (!f[0]) return !1;
  const m = {
    type: "link",
    title: null,
    url: h + r + f[0],
    children: [{ type: "text", value: r + f[0] }]
  };
  return f[1] ? [m, { type: "text", value: f[1] }] : m;
}
function j2(n, r, a, u) {
  return (
    // Not an expected previous character.
    !iy(u, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + r + "@" + a,
      children: [{ type: "text", value: r + "@" + a }]
    }
  );
}
function B2(n) {
  const r = n.split(".");
  return !(r.length < 2 || r[r.length - 1] && (/_/.test(r[r.length - 1]) || !/[a-zA-Z\d]/.test(r[r.length - 1])) || r[r.length - 2] && (/_/.test(r[r.length - 2]) || !/[a-zA-Z\d]/.test(r[r.length - 2])));
}
function H2(n) {
  const r = /[!"&'),.:;<>?\]}]+$/.exec(n);
  if (!r)
    return [n, void 0];
  n = n.slice(0, r.index);
  let a = r[0], u = a.indexOf(")");
  const s = Ip(n, "(");
  let h = Ip(n, ")");
  for (; u !== -1 && s > h; )
    n += a.slice(0, u + 1), a = a.slice(u + 1), u = a.indexOf(")"), h++;
  return [n, a];
}
function iy(n, r) {
  const a = n.input.charCodeAt(n.index - 1);
  return (n.index === 0 || Nl(a) || wu(a)) && // If it’s an email, the previous character should not be a slash.
  (!r || a !== 47);
}
ay.peek = F2;
function q2() {
  this.buffer();
}
function Y2(n) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, n);
}
function V2() {
  this.buffer();
}
function G2(n) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    n
  );
}
function X2(n) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = cn(
    this.sliceSerialize(n)
  ).toLowerCase(), a.label = r;
}
function Q2(n) {
  this.exit(n);
}
function Z2(n) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = cn(
    this.sliceSerialize(n)
  ).toLowerCase(), a.label = r;
}
function K2(n) {
  this.exit(n);
}
function F2() {
  return "[";
}
function ay(n, r, a, u) {
  const s = a.createTracker(u);
  let h = s.move("[^");
  const f = a.enter("footnoteReference"), m = a.enter("reference");
  return h += s.move(
    a.safe(a.associationId(n), { after: "]", before: h })
  ), m(), f(), h += s.move("]"), h;
}
function J2() {
  return {
    enter: {
      gfmFootnoteCallString: q2,
      gfmFootnoteCall: Y2,
      gfmFootnoteDefinitionLabelString: V2,
      gfmFootnoteDefinition: G2
    },
    exit: {
      gfmFootnoteCallString: X2,
      gfmFootnoteCall: Q2,
      gfmFootnoteDefinitionLabelString: Z2,
      gfmFootnoteDefinition: K2
    }
  };
}
function I2(n) {
  let r = !1;
  return n && n.firstLineBlank && (r = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: ay },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(u, s, h, f) {
    const m = h.createTracker(f);
    let p = m.move("[^");
    const d = h.enter("footnoteDefinition"), b = h.enter("label");
    return p += m.move(
      h.safe(h.associationId(u), { before: p, after: "]" })
    ), b(), p += m.move("]:"), u.children && u.children.length > 0 && (m.shift(4), p += m.move(
      (r ? `
` : " ") + h.indentLines(
        h.containerFlow(u, m.current()),
        r ? ry : $2
      )
    )), d(), p;
  }
}
function $2(n, r, a) {
  return r === 0 ? n : ry(n, r, a);
}
function ry(n, r, a) {
  return (a ? "" : "    ") + n;
}
const W2 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
uy.peek = lE;
function P2() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: eE },
    exit: { strikethrough: nE }
  };
}
function tE() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: W2
      }
    ],
    handlers: { delete: uy }
  };
}
function eE(n) {
  this.enter({ type: "delete", children: [] }, n);
}
function nE(n) {
  this.exit(n);
}
function uy(n, r, a, u) {
  const s = a.createTracker(u), h = a.enter("strikethrough");
  let f = s.move("~~");
  return f += a.containerPhrasing(n, {
    ...s.current(),
    before: f,
    after: "~"
  }), f += s.move("~~"), h(), f;
}
function lE() {
  return "~";
}
function iE(n) {
  return n.length;
}
function aE(n, r) {
  const a = r || {}, u = (a.align || []).concat(), s = a.stringLength || iE, h = [], f = [], m = [], p = [];
  let d = 0, b = -1;
  for (; ++b < n.length; ) {
    const R = [], L = [];
    let _ = -1;
    for (n[b].length > d && (d = n[b].length); ++_ < n[b].length; ) {
      const Z = rE(n[b][_]);
      if (a.alignDelimiters !== !1) {
        const H = s(Z);
        L[_] = H, (p[_] === void 0 || H > p[_]) && (p[_] = H);
      }
      R.push(Z);
    }
    f[b] = R, m[b] = L;
  }
  let y = -1;
  if (typeof u == "object" && "length" in u)
    for (; ++y < d; )
      h[y] = $p(u[y]);
  else {
    const R = $p(u);
    for (; ++y < d; )
      h[y] = R;
  }
  y = -1;
  const S = [], x = [];
  for (; ++y < d; ) {
    const R = h[y];
    let L = "", _ = "";
    R === 99 ? (L = ":", _ = ":") : R === 108 ? L = ":" : R === 114 && (_ = ":");
    let Z = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      p[y] - L.length - _.length
    );
    const H = L + "-".repeat(Z) + _;
    a.alignDelimiters !== !1 && (Z = L.length + Z + _.length, Z > p[y] && (p[y] = Z), x[y] = Z), S[y] = H;
  }
  f.splice(1, 0, S), m.splice(1, 0, x), b = -1;
  const A = [];
  for (; ++b < f.length; ) {
    const R = f[b], L = m[b];
    y = -1;
    const _ = [];
    for (; ++y < d; ) {
      const Z = R[y] || "";
      let H = "", lt = "";
      if (a.alignDelimiters !== !1) {
        const ot = p[y] - (L[y] || 0), B = h[y];
        B === 114 ? H = " ".repeat(ot) : B === 99 ? ot % 2 ? (H = " ".repeat(ot / 2 + 0.5), lt = " ".repeat(ot / 2 - 0.5)) : (H = " ".repeat(ot / 2), lt = H) : lt = " ".repeat(ot);
      }
      a.delimiterStart !== !1 && !y && _.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && Z === "") && (a.delimiterStart !== !1 || y) && _.push(" "), a.alignDelimiters !== !1 && _.push(H), _.push(Z), a.alignDelimiters !== !1 && _.push(lt), a.padding !== !1 && _.push(" "), (a.delimiterEnd !== !1 || y !== d - 1) && _.push("|");
    }
    A.push(
      a.delimiterEnd === !1 ? _.join("").replace(/ +$/, "") : _.join("")
    );
  }
  return A.join(`
`);
}
function rE(n) {
  return n == null ? "" : String(n);
}
function $p(n) {
  const r = typeof n == "string" ? n.codePointAt(0) : 0;
  return r === 67 || r === 99 ? 99 : r === 76 || r === 108 ? 108 : r === 82 || r === 114 ? 114 : 0;
}
function uE(n, r, a, u) {
  const s = a.enter("blockquote"), h = a.createTracker(u);
  h.move("> "), h.shift(2);
  const f = a.indentLines(
    a.containerFlow(n, h.current()),
    oE
  );
  return s(), f;
}
function oE(n, r, a) {
  return ">" + (a ? "" : " ") + n;
}
function cE(n, r) {
  return Wp(n, r.inConstruct, !0) && !Wp(n, r.notInConstruct, !1);
}
function Wp(n, r, a) {
  if (typeof r == "string" && (r = [r]), !r || r.length === 0)
    return a;
  let u = -1;
  for (; ++u < r.length; )
    if (n.includes(r[u]))
      return !0;
  return !1;
}
function Pp(n, r, a, u) {
  let s = -1;
  for (; ++s < a.unsafe.length; )
    if (a.unsafe[s].character === `
` && cE(a.stack, a.unsafe[s]))
      return /[ \t]/.test(u.before) ? "" : " ";
  return `\\
`;
}
function sE(n, r) {
  const a = String(n);
  let u = a.indexOf(r), s = u, h = 0, f = 0;
  if (typeof r != "string")
    throw new TypeError("Expected substring");
  for (; u !== -1; )
    u === s ? ++h > f && (f = h) : h = 1, s = u + r.length, u = a.indexOf(r, s);
  return f;
}
function fE(n, r) {
  return !!(r.options.fences === !1 && n.value && // If there’s no info…
  !n.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(n.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value));
}
function hE(n) {
  const r = n.options.fence || "`";
  if (r !== "`" && r !== "~")
    throw new Error(
      "Cannot serialize code with `" + r + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return r;
}
function dE(n, r, a, u) {
  const s = hE(a), h = n.value || "", f = s === "`" ? "GraveAccent" : "Tilde";
  if (fE(n, a)) {
    const y = a.enter("codeIndented"), S = a.indentLines(h, mE);
    return y(), S;
  }
  const m = a.createTracker(u), p = s.repeat(Math.max(sE(h, s) + 1, 3)), d = a.enter("codeFenced");
  let b = m.move(p);
  if (n.lang) {
    const y = a.enter(`codeFencedLang${f}`);
    b += m.move(
      a.safe(n.lang, {
        before: b,
        after: " ",
        encode: ["`"],
        ...m.current()
      })
    ), y();
  }
  if (n.lang && n.meta) {
    const y = a.enter(`codeFencedMeta${f}`);
    b += m.move(" "), b += m.move(
      a.safe(n.meta, {
        before: b,
        after: `
`,
        encode: ["`"],
        ...m.current()
      })
    ), y();
  }
  return b += m.move(`
`), h && (b += m.move(h + `
`)), b += m.move(p), d(), b;
}
function mE(n, r, a) {
  return (a ? "" : "    ") + n;
}
function Fs(n) {
  const r = n.options.quote || '"';
  if (r !== '"' && r !== "'")
    throw new Error(
      "Cannot serialize title with `" + r + "` for `options.quote`, expected `\"`, or `'`"
    );
  return r;
}
function pE(n, r, a, u) {
  const s = Fs(a), h = s === '"' ? "Quote" : "Apostrophe", f = a.enter("definition");
  let m = a.enter("label");
  const p = a.createTracker(u);
  let d = p.move("[");
  return d += p.move(
    a.safe(a.associationId(n), {
      before: d,
      after: "]",
      ...p.current()
    })
  ), d += p.move("]: "), m(), // If there’s no url, or…
  !n.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (m = a.enter("destinationLiteral"), d += p.move("<"), d += p.move(
    a.safe(n.url, { before: d, after: ">", ...p.current() })
  ), d += p.move(">")) : (m = a.enter("destinationRaw"), d += p.move(
    a.safe(n.url, {
      before: d,
      after: n.title ? " " : `
`,
      ...p.current()
    })
  )), m(), n.title && (m = a.enter(`title${h}`), d += p.move(" " + s), d += p.move(
    a.safe(n.title, {
      before: d,
      after: s,
      ...p.current()
    })
  ), d += p.move(s), m()), f(), d;
}
function gE(n) {
  const r = n.options.emphasis || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + r + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return r;
}
function Ha(n) {
  return "&#x" + n.toString(16).toUpperCase() + ";";
}
function Su(n, r, a) {
  const u = _i(n), s = _i(r);
  return u === void 0 ? s === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    a === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : u === 1 ? s === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : s === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
oy.peek = yE;
function oy(n, r, a, u) {
  const s = gE(a), h = a.enter("emphasis"), f = a.createTracker(u), m = f.move(s);
  let p = f.move(
    a.containerPhrasing(n, {
      after: s,
      before: m,
      ...f.current()
    })
  );
  const d = p.charCodeAt(0), b = Su(
    u.before.charCodeAt(u.before.length - 1),
    d,
    s
  );
  b.inside && (p = Ha(d) + p.slice(1));
  const y = p.charCodeAt(p.length - 1), S = Su(u.after.charCodeAt(0), y, s);
  S.inside && (p = p.slice(0, -1) + Ha(y));
  const x = f.move(s);
  return h(), a.attentionEncodeSurroundingInfo = {
    after: S.outside,
    before: b.outside
  }, m + p + x;
}
function yE(n, r, a) {
  return a.options.emphasis || "*";
}
function bE(n, r) {
  let a = !1;
  return Qs(n, function(u) {
    if ("value" in u && /\r?\n|\r/.test(u.value) || u.type === "break")
      return a = !0, As;
  }), !!((!n.depth || n.depth < 3) && Bs(n) && (r.options.setext || a));
}
function vE(n, r, a, u) {
  const s = Math.max(Math.min(6, n.depth || 1), 1), h = a.createTracker(u);
  if (bE(n, a)) {
    const b = a.enter("headingSetext"), y = a.enter("phrasing"), S = a.containerPhrasing(n, {
      ...h.current(),
      before: `
`,
      after: `
`
    });
    return y(), b(), S + `
` + (s === 1 ? "=" : "-").repeat(
      // The whole size…
      S.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(S.lastIndexOf("\r"), S.lastIndexOf(`
`)) + 1)
    );
  }
  const f = "#".repeat(s), m = a.enter("headingAtx"), p = a.enter("phrasing");
  h.move(f + " ");
  let d = a.containerPhrasing(n, {
    before: "# ",
    after: `
`,
    ...h.current()
  });
  return /^[\t ]/.test(d) && (d = Ha(d.charCodeAt(0)) + d.slice(1)), d = d ? f + " " + d : f, a.options.closeAtx && (d += " " + f), p(), m(), d;
}
cy.peek = xE;
function cy(n) {
  return n.value || "";
}
function xE() {
  return "<";
}
sy.peek = SE;
function sy(n, r, a, u) {
  const s = Fs(a), h = s === '"' ? "Quote" : "Apostrophe", f = a.enter("image");
  let m = a.enter("label");
  const p = a.createTracker(u);
  let d = p.move("![");
  return d += p.move(
    a.safe(n.alt, { before: d, after: "]", ...p.current() })
  ), d += p.move("]("), m(), // If there’s no url but there is a title…
  !n.url && n.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (m = a.enter("destinationLiteral"), d += p.move("<"), d += p.move(
    a.safe(n.url, { before: d, after: ">", ...p.current() })
  ), d += p.move(">")) : (m = a.enter("destinationRaw"), d += p.move(
    a.safe(n.url, {
      before: d,
      after: n.title ? " " : ")",
      ...p.current()
    })
  )), m(), n.title && (m = a.enter(`title${h}`), d += p.move(" " + s), d += p.move(
    a.safe(n.title, {
      before: d,
      after: s,
      ...p.current()
    })
  ), d += p.move(s), m()), d += p.move(")"), f(), d;
}
function SE() {
  return "!";
}
fy.peek = kE;
function fy(n, r, a, u) {
  const s = n.referenceType, h = a.enter("imageReference");
  let f = a.enter("label");
  const m = a.createTracker(u);
  let p = m.move("![");
  const d = a.safe(n.alt, {
    before: p,
    after: "]",
    ...m.current()
  });
  p += m.move(d + "]["), f();
  const b = a.stack;
  a.stack = [], f = a.enter("reference");
  const y = a.safe(a.associationId(n), {
    before: p,
    after: "]",
    ...m.current()
  });
  return f(), a.stack = b, h(), s === "full" || !d || d !== y ? p += m.move(y + "]") : s === "shortcut" ? p = p.slice(0, -1) : p += m.move("]"), p;
}
function kE() {
  return "!";
}
hy.peek = EE;
function hy(n, r, a) {
  let u = n.value || "", s = "`", h = -1;
  for (; new RegExp("(^|[^`])" + s + "([^`]|$)").test(u); )
    s += "`";
  for (/[^ \r\n]/.test(u) && (/^[ \r\n]/.test(u) && /[ \r\n]$/.test(u) || /^`|`$/.test(u)) && (u = " " + u + " "); ++h < a.unsafe.length; ) {
    const f = a.unsafe[h], m = a.compilePattern(f);
    let p;
    if (f.atBreak)
      for (; p = m.exec(u); ) {
        let d = p.index;
        u.charCodeAt(d) === 10 && u.charCodeAt(d - 1) === 13 && d--, u = u.slice(0, d) + " " + u.slice(p.index + 1);
      }
  }
  return s + u + s;
}
function EE() {
  return "`";
}
function dy(n, r) {
  const a = Bs(n);
  return !!(!r.options.resourceLink && // If there’s a url…
  n.url && // And there’s a no title…
  !n.title && // And the content of `node` is a single text node…
  n.children && n.children.length === 1 && n.children[0].type === "text" && // And if the url is the same as the content…
  (a === n.url || "mailto:" + a === n.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(n.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(n.url));
}
my.peek = wE;
function my(n, r, a, u) {
  const s = Fs(a), h = s === '"' ? "Quote" : "Apostrophe", f = a.createTracker(u);
  let m, p;
  if (dy(n, a)) {
    const b = a.stack;
    a.stack = [], m = a.enter("autolink");
    let y = f.move("<");
    return y += f.move(
      a.containerPhrasing(n, {
        before: y,
        after: ">",
        ...f.current()
      })
    ), y += f.move(">"), m(), a.stack = b, y;
  }
  m = a.enter("link"), p = a.enter("label");
  let d = f.move("[");
  return d += f.move(
    a.containerPhrasing(n, {
      before: d,
      after: "](",
      ...f.current()
    })
  ), d += f.move("]("), p(), // If there’s no url but there is a title…
  !n.url && n.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (p = a.enter("destinationLiteral"), d += f.move("<"), d += f.move(
    a.safe(n.url, { before: d, after: ">", ...f.current() })
  ), d += f.move(">")) : (p = a.enter("destinationRaw"), d += f.move(
    a.safe(n.url, {
      before: d,
      after: n.title ? " " : ")",
      ...f.current()
    })
  )), p(), n.title && (p = a.enter(`title${h}`), d += f.move(" " + s), d += f.move(
    a.safe(n.title, {
      before: d,
      after: s,
      ...f.current()
    })
  ), d += f.move(s), p()), d += f.move(")"), m(), d;
}
function wE(n, r, a) {
  return dy(n, a) ? "<" : "[";
}
py.peek = AE;
function py(n, r, a, u) {
  const s = n.referenceType, h = a.enter("linkReference");
  let f = a.enter("label");
  const m = a.createTracker(u);
  let p = m.move("[");
  const d = a.containerPhrasing(n, {
    before: p,
    after: "]",
    ...m.current()
  });
  p += m.move(d + "]["), f();
  const b = a.stack;
  a.stack = [], f = a.enter("reference");
  const y = a.safe(a.associationId(n), {
    before: p,
    after: "]",
    ...m.current()
  });
  return f(), a.stack = b, h(), s === "full" || !d || d !== y ? p += m.move(y + "]") : s === "shortcut" ? p = p.slice(0, -1) : p += m.move("]"), p;
}
function AE() {
  return "[";
}
function Js(n) {
  const r = n.options.bullet || "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return r;
}
function zE(n) {
  const r = Js(n), a = n.options.bulletOther;
  if (!a)
    return r === "*" ? "-" : "*";
  if (a !== "*" && a !== "+" && a !== "-")
    throw new Error(
      "Cannot serialize items with `" + a + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (a === r)
    throw new Error(
      "Expected `bullet` (`" + r + "`) and `bulletOther` (`" + a + "`) to be different"
    );
  return a;
}
function TE(n) {
  const r = n.options.bulletOrdered || ".";
  if (r !== "." && r !== ")")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return r;
}
function gy(n) {
  const r = n.options.rule || "*";
  if (r !== "*" && r !== "-" && r !== "_")
    throw new Error(
      "Cannot serialize rules with `" + r + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return r;
}
function CE(n, r, a, u) {
  const s = a.enter("list"), h = a.bulletCurrent;
  let f = n.ordered ? TE(a) : Js(a);
  const m = n.ordered ? f === "." ? ")" : "." : zE(a);
  let p = r && a.bulletLastUsed ? f === a.bulletLastUsed : !1;
  if (!n.ordered) {
    const b = n.children ? n.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (f === "*" || f === "-") && // Empty first list item:
      b && (!b.children || !b.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (p = !0), gy(a) === f && b
    ) {
      let y = -1;
      for (; ++y < n.children.length; ) {
        const S = n.children[y];
        if (S && S.type === "listItem" && S.children && S.children[0] && S.children[0].type === "thematicBreak") {
          p = !0;
          break;
        }
      }
    }
  }
  p && (f = m), a.bulletCurrent = f;
  const d = a.containerFlow(n, u);
  return a.bulletLastUsed = f, a.bulletCurrent = h, s(), d;
}
function _E(n) {
  const r = n.options.listItemIndent || "one";
  if (r !== "tab" && r !== "one" && r !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return r;
}
function ME(n, r, a, u) {
  const s = _E(a);
  let h = a.bulletCurrent || Js(a);
  r && r.type === "list" && r.ordered && (h = (typeof r.start == "number" && r.start > -1 ? r.start : 1) + (a.options.incrementListMarker === !1 ? 0 : r.children.indexOf(n)) + h);
  let f = h.length + 1;
  (s === "tab" || s === "mixed" && (r && r.type === "list" && r.spread || n.spread)) && (f = Math.ceil(f / 4) * 4);
  const m = a.createTracker(u);
  m.move(h + " ".repeat(f - h.length)), m.shift(f);
  const p = a.enter("listItem"), d = a.indentLines(
    a.containerFlow(n, m.current()),
    b
  );
  return p(), d;
  function b(y, S, x) {
    return S ? (x ? "" : " ".repeat(f)) + y : (x ? h : h + " ".repeat(f - h.length)) + y;
  }
}
function OE(n, r, a, u) {
  const s = a.enter("paragraph"), h = a.enter("phrasing"), f = a.containerPhrasing(n, u);
  return h(), s(), f;
}
const DE = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Tu([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function RE(n, r, a, u) {
  return (n.children.some(function(f) {
    return DE(f);
  }) ? a.containerPhrasing : a.containerFlow).call(a, n, u);
}
function NE(n) {
  const r = n.options.strong || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize strong with `" + r + "` for `options.strong`, expected `*`, or `_`"
    );
  return r;
}
yy.peek = LE;
function yy(n, r, a, u) {
  const s = NE(a), h = a.enter("strong"), f = a.createTracker(u), m = f.move(s + s);
  let p = f.move(
    a.containerPhrasing(n, {
      after: s,
      before: m,
      ...f.current()
    })
  );
  const d = p.charCodeAt(0), b = Su(
    u.before.charCodeAt(u.before.length - 1),
    d,
    s
  );
  b.inside && (p = Ha(d) + p.slice(1));
  const y = p.charCodeAt(p.length - 1), S = Su(u.after.charCodeAt(0), y, s);
  S.inside && (p = p.slice(0, -1) + Ha(y));
  const x = f.move(s + s);
  return h(), a.attentionEncodeSurroundingInfo = {
    after: S.outside,
    before: b.outside
  }, m + p + x;
}
function LE(n, r, a) {
  return a.options.strong || "*";
}
function UE(n, r, a, u) {
  return a.safe(n.value, u);
}
function jE(n) {
  const r = n.options.ruleRepetition || 3;
  if (r < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + r + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return r;
}
function BE(n, r, a) {
  const u = (gy(a) + (a.options.ruleSpaces ? " " : "")).repeat(jE(a));
  return a.options.ruleSpaces ? u.slice(0, -1) : u;
}
const by = {
  blockquote: uE,
  break: Pp,
  code: dE,
  definition: pE,
  emphasis: oy,
  hardBreak: Pp,
  heading: vE,
  html: cy,
  image: sy,
  imageReference: fy,
  inlineCode: hy,
  link: my,
  linkReference: py,
  list: CE,
  listItem: ME,
  paragraph: OE,
  root: RE,
  strong: yy,
  text: UE,
  thematicBreak: BE
};
function HE() {
  return {
    enter: {
      table: qE,
      tableData: tg,
      tableHeader: tg,
      tableRow: VE
    },
    exit: {
      codeText: GE,
      table: YE,
      tableData: gs,
      tableHeader: gs,
      tableRow: gs
    }
  };
}
function qE(n) {
  const r = n._align;
  this.enter(
    {
      type: "table",
      align: r.map(function(a) {
        return a === "none" ? null : a;
      }),
      children: []
    },
    n
  ), this.data.inTable = !0;
}
function YE(n) {
  this.exit(n), this.data.inTable = void 0;
}
function VE(n) {
  this.enter({ type: "tableRow", children: [] }, n);
}
function gs(n) {
  this.exit(n);
}
function tg(n) {
  this.enter({ type: "tableCell", children: [] }, n);
}
function GE(n) {
  let r = this.resume();
  this.data.inTable && (r = r.replace(/\\([\\|])/g, XE));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = r, this.exit(n);
}
function XE(n, r) {
  return r === "|" ? r : n;
}
function QE(n) {
  const r = n || {}, a = r.tableCellPadding, u = r.tablePipeAlign, s = r.stringLength, h = a ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: S,
      table: f,
      tableCell: p,
      tableRow: m
    }
  };
  function f(x, A, R, L) {
    return d(b(x, R, L), x.align);
  }
  function m(x, A, R, L) {
    const _ = y(x, R, L), Z = d([_]);
    return Z.slice(0, Z.indexOf(`
`));
  }
  function p(x, A, R, L) {
    const _ = R.enter("tableCell"), Z = R.enter("phrasing"), H = R.containerPhrasing(x, {
      ...L,
      before: h,
      after: h
    });
    return Z(), _(), H;
  }
  function d(x, A) {
    return aE(x, {
      align: A,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: u,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: s
    });
  }
  function b(x, A, R) {
    const L = x.children;
    let _ = -1;
    const Z = [], H = A.enter("table");
    for (; ++_ < L.length; )
      Z[_] = y(L[_], A, R);
    return H(), Z;
  }
  function y(x, A, R) {
    const L = x.children;
    let _ = -1;
    const Z = [], H = A.enter("tableRow");
    for (; ++_ < L.length; )
      Z[_] = p(L[_], x, A, R);
    return H(), Z;
  }
  function S(x, A, R) {
    let L = by.inlineCode(x, A, R);
    return R.stack.includes("tableCell") && (L = L.replace(/\|/g, "\\$&")), L;
  }
}
function ZE() {
  return {
    exit: {
      taskListCheckValueChecked: eg,
      taskListCheckValueUnchecked: eg,
      paragraph: FE
    }
  };
}
function KE() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: JE }
  };
}
function eg(n) {
  const r = this.stack[this.stack.length - 2];
  r.type, r.checked = n.type === "taskListCheckValueChecked";
}
function FE(n) {
  const r = this.stack[this.stack.length - 2];
  if (r && r.type === "listItem" && typeof r.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const u = a.children[0];
    if (u && u.type === "text") {
      const s = r.children;
      let h = -1, f;
      for (; ++h < s.length; ) {
        const m = s[h];
        if (m.type === "paragraph") {
          f = m;
          break;
        }
      }
      f === a && (u.value = u.value.slice(1), u.value.length === 0 ? a.children.shift() : a.position && u.position && typeof u.position.start.offset == "number" && (u.position.start.column++, u.position.start.offset++, a.position.start = Object.assign({}, u.position.start)));
    }
  }
  this.exit(n);
}
function JE(n, r, a, u) {
  const s = n.children[0], h = typeof n.checked == "boolean" && s && s.type === "paragraph", f = "[" + (n.checked ? "x" : " ") + "] ", m = a.createTracker(u);
  h && m.move(f);
  let p = by.listItem(n, r, a, {
    ...u,
    ...m.current()
  });
  return h && (p = p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, d)), p;
  function d(b) {
    return b + f;
  }
}
function IE() {
  return [
    C2(),
    J2(),
    P2(),
    HE(),
    ZE()
  ];
}
function $E(n) {
  return {
    extensions: [
      _2(),
      I2(n),
      tE(),
      QE(n),
      KE()
    ]
  };
}
const WE = {
  tokenize: iw,
  partial: !0
}, vy = {
  tokenize: aw,
  partial: !0
}, xy = {
  tokenize: rw,
  partial: !0
}, Sy = {
  tokenize: uw,
  partial: !0
}, PE = {
  tokenize: ow,
  partial: !0
}, ky = {
  name: "wwwAutolink",
  tokenize: nw,
  previous: wy
}, Ey = {
  name: "protocolAutolink",
  tokenize: lw,
  previous: Ay
}, Bn = {
  name: "emailAutolink",
  tokenize: ew,
  previous: zy
}, gn = {};
function tw() {
  return {
    text: gn
  };
}
let Rl = 48;
for (; Rl < 123; )
  gn[Rl] = Bn, Rl++, Rl === 58 ? Rl = 65 : Rl === 91 && (Rl = 97);
gn[43] = Bn;
gn[45] = Bn;
gn[46] = Bn;
gn[95] = Bn;
gn[72] = [Bn, Ey];
gn[104] = [Bn, Ey];
gn[87] = [Bn, ky];
gn[119] = [Bn, ky];
function ew(n, r, a) {
  const u = this;
  let s, h;
  return f;
  function f(y) {
    return !_s(y) || !zy.call(u, u.previous) || Is(u.events) ? a(y) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), m(y));
  }
  function m(y) {
    return _s(y) ? (n.consume(y), m) : y === 64 ? (n.consume(y), p) : a(y);
  }
  function p(y) {
    return y === 46 ? n.check(PE, b, d)(y) : y === 45 || y === 95 || ve(y) ? (h = !0, n.consume(y), p) : b(y);
  }
  function d(y) {
    return n.consume(y), s = !0, p;
  }
  function b(y) {
    return h && s && we(u.previous) ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), r(y)) : a(y);
  }
}
function nw(n, r, a) {
  const u = this;
  return s;
  function s(f) {
    return f !== 87 && f !== 119 || !wy.call(u, u.previous) || Is(u.events) ? a(f) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(WE, n.attempt(vy, n.attempt(xy, h), a), a)(f));
  }
  function h(f) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), r(f);
  }
}
function lw(n, r, a) {
  const u = this;
  let s = "", h = !1;
  return f;
  function f(y) {
    return (y === 72 || y === 104) && Ay.call(u, u.previous) && !Is(u.events) ? (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), s += String.fromCodePoint(y), n.consume(y), m) : a(y);
  }
  function m(y) {
    if (we(y) && s.length < 5)
      return s += String.fromCodePoint(y), n.consume(y), m;
    if (y === 58) {
      const S = s.toLowerCase();
      if (S === "http" || S === "https")
        return n.consume(y), p;
    }
    return a(y);
  }
  function p(y) {
    return y === 47 ? (n.consume(y), h ? d : (h = !0, p)) : a(y);
  }
  function d(y) {
    return y === null || bu(y) || Zt(y) || Nl(y) || wu(y) ? a(y) : n.attempt(vy, n.attempt(xy, b), a)(y);
  }
  function b(y) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), r(y);
  }
}
function iw(n, r, a) {
  let u = 0;
  return s;
  function s(f) {
    return (f === 87 || f === 119) && u < 3 ? (u++, n.consume(f), s) : f === 46 && u === 3 ? (n.consume(f), h) : a(f);
  }
  function h(f) {
    return f === null ? a(f) : r(f);
  }
}
function aw(n, r, a) {
  let u, s, h;
  return f;
  function f(d) {
    return d === 46 || d === 95 ? n.check(Sy, p, m)(d) : d === null || Zt(d) || Nl(d) || d !== 45 && wu(d) ? p(d) : (h = !0, n.consume(d), f);
  }
  function m(d) {
    return d === 95 ? u = !0 : (s = u, u = void 0), n.consume(d), f;
  }
  function p(d) {
    return s || u || !h ? a(d) : r(d);
  }
}
function rw(n, r) {
  let a = 0, u = 0;
  return s;
  function s(f) {
    return f === 40 ? (a++, n.consume(f), s) : f === 41 && u < a ? h(f) : f === 33 || f === 34 || f === 38 || f === 39 || f === 41 || f === 42 || f === 44 || f === 46 || f === 58 || f === 59 || f === 60 || f === 63 || f === 93 || f === 95 || f === 126 ? n.check(Sy, r, h)(f) : f === null || Zt(f) || Nl(f) ? r(f) : (n.consume(f), s);
  }
  function h(f) {
    return f === 41 && u++, n.consume(f), s;
  }
}
function uw(n, r, a) {
  return u;
  function u(m) {
    return m === 33 || m === 34 || m === 39 || m === 41 || m === 42 || m === 44 || m === 46 || m === 58 || m === 59 || m === 63 || m === 95 || m === 126 ? (n.consume(m), u) : m === 38 ? (n.consume(m), h) : m === 93 ? (n.consume(m), s) : (
      // `<` is an end.
      m === 60 || // So is whitespace.
      m === null || Zt(m) || Nl(m) ? r(m) : a(m)
    );
  }
  function s(m) {
    return m === null || m === 40 || m === 91 || Zt(m) || Nl(m) ? r(m) : u(m);
  }
  function h(m) {
    return we(m) ? f(m) : a(m);
  }
  function f(m) {
    return m === 59 ? (n.consume(m), u) : we(m) ? (n.consume(m), f) : a(m);
  }
}
function ow(n, r, a) {
  return u;
  function u(h) {
    return n.consume(h), s;
  }
  function s(h) {
    return ve(h) ? a(h) : r(h);
  }
}
function wy(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 91 || n === 93 || n === 126 || Zt(n);
}
function Ay(n) {
  return !we(n);
}
function zy(n) {
  return !(n === 47 || _s(n));
}
function _s(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || ve(n);
}
function Is(n) {
  let r = n.length, a = !1;
  for (; r--; ) {
    const u = n[r][1];
    if ((u.type === "labelLink" || u.type === "labelImage") && !u._balanced) {
      a = !0;
      break;
    }
    if (u._gfmAutolinkLiteralWalkedInto) {
      a = !1;
      break;
    }
  }
  return n.length > 0 && !a && (n[n.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), a;
}
const cw = {
  tokenize: yw,
  partial: !0
};
function sw() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: mw,
        continuation: {
          tokenize: pw
        },
        exit: gw
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: dw
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: fw,
        resolveTo: hw
      }
    }
  };
}
function fw(n, r, a) {
  const u = this;
  let s = u.events.length;
  const h = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let f;
  for (; s--; ) {
    const p = u.events[s][1];
    if (p.type === "labelImage") {
      f = p;
      break;
    }
    if (p.type === "gfmFootnoteCall" || p.type === "labelLink" || p.type === "label" || p.type === "image" || p.type === "link")
      break;
  }
  return m;
  function m(p) {
    if (!f || !f._balanced)
      return a(p);
    const d = cn(u.sliceSerialize({
      start: f.end,
      end: u.now()
    }));
    return d.codePointAt(0) !== 94 || !h.includes(d.slice(1)) ? a(p) : (n.enter("gfmFootnoteCallLabelMarker"), n.consume(p), n.exit("gfmFootnoteCallLabelMarker"), r(p));
  }
}
function hw(n, r) {
  let a = n.length;
  for (; a--; )
    if (n[a][1].type === "labelImage" && n[a][0] === "enter") {
      n[a][1];
      break;
    }
  n[a + 1][1].type = "data", n[a + 3][1].type = "gfmFootnoteCallLabelMarker";
  const u = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, n[a + 3][1].start),
    end: Object.assign({}, n[n.length - 1][1].end)
  }, s = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, n[a + 3][1].end),
    end: Object.assign({}, n[a + 3][1].end)
  };
  s.end.column++, s.end.offset++, s.end._bufferIndex++;
  const h = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, s.end),
    end: Object.assign({}, n[n.length - 1][1].start)
  }, f = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, h.start),
    end: Object.assign({}, h.end)
  }, m = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    n[a + 1],
    n[a + 2],
    ["enter", u, r],
    // The `[`
    n[a + 3],
    n[a + 4],
    // The `^`.
    ["enter", s, r],
    ["exit", s, r],
    // Everything in between.
    ["enter", h, r],
    ["enter", f, r],
    ["exit", f, r],
    ["exit", h, r],
    // The ending (`]`, properly parsed and labelled).
    n[n.length - 2],
    n[n.length - 1],
    ["exit", u, r]
  ];
  return n.splice(a, n.length - a + 1, ...m), n;
}
function dw(n, r, a) {
  const u = this, s = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let h = 0, f;
  return m;
  function m(y) {
    return n.enter("gfmFootnoteCall"), n.enter("gfmFootnoteCallLabelMarker"), n.consume(y), n.exit("gfmFootnoteCallLabelMarker"), p;
  }
  function p(y) {
    return y !== 94 ? a(y) : (n.enter("gfmFootnoteCallMarker"), n.consume(y), n.exit("gfmFootnoteCallMarker"), n.enter("gfmFootnoteCallString"), n.enter("chunkString").contentType = "string", d);
  }
  function d(y) {
    if (
      // Too long.
      h > 999 || // Closing brace with nothing.
      y === 93 && !f || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || Zt(y)
    )
      return a(y);
    if (y === 93) {
      n.exit("chunkString");
      const S = n.exit("gfmFootnoteCallString");
      return s.includes(cn(u.sliceSerialize(S))) ? (n.enter("gfmFootnoteCallLabelMarker"), n.consume(y), n.exit("gfmFootnoteCallLabelMarker"), n.exit("gfmFootnoteCall"), r) : a(y);
    }
    return Zt(y) || (f = !0), h++, n.consume(y), y === 92 ? b : d;
  }
  function b(y) {
    return y === 91 || y === 92 || y === 93 ? (n.consume(y), h++, d) : d(y);
  }
}
function mw(n, r, a) {
  const u = this, s = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let h, f = 0, m;
  return p;
  function p(A) {
    return n.enter("gfmFootnoteDefinition")._container = !0, n.enter("gfmFootnoteDefinitionLabel"), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(A), n.exit("gfmFootnoteDefinitionLabelMarker"), d;
  }
  function d(A) {
    return A === 94 ? (n.enter("gfmFootnoteDefinitionMarker"), n.consume(A), n.exit("gfmFootnoteDefinitionMarker"), n.enter("gfmFootnoteDefinitionLabelString"), n.enter("chunkString").contentType = "string", b) : a(A);
  }
  function b(A) {
    if (
      // Too long.
      f > 999 || // Closing brace with nothing.
      A === 93 && !m || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      A === null || A === 91 || Zt(A)
    )
      return a(A);
    if (A === 93) {
      n.exit("chunkString");
      const R = n.exit("gfmFootnoteDefinitionLabelString");
      return h = cn(u.sliceSerialize(R)), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(A), n.exit("gfmFootnoteDefinitionLabelMarker"), n.exit("gfmFootnoteDefinitionLabel"), S;
    }
    return Zt(A) || (m = !0), f++, n.consume(A), A === 92 ? y : b;
  }
  function y(A) {
    return A === 91 || A === 92 || A === 93 ? (n.consume(A), f++, b) : b(A);
  }
  function S(A) {
    return A === 58 ? (n.enter("definitionMarker"), n.consume(A), n.exit("definitionMarker"), s.includes(h) || s.push(h), Dt(n, x, "gfmFootnoteDefinitionWhitespace")) : a(A);
  }
  function x(A) {
    return r(A);
  }
}
function pw(n, r, a) {
  return n.check(Ya, r, n.attempt(cw, r, a));
}
function gw(n) {
  n.exit("gfmFootnoteDefinition");
}
function yw(n, r, a) {
  const u = this;
  return Dt(n, s, "gfmFootnoteDefinitionIndent", 5);
  function s(h) {
    const f = u.events[u.events.length - 1];
    return f && f[1].type === "gfmFootnoteDefinitionIndent" && f[2].sliceSerialize(f[1], !0).length === 4 ? r(h) : a(h);
  }
}
function bw(n) {
  let a = (n || {}).singleTilde;
  const u = {
    name: "strikethrough",
    tokenize: h,
    resolveAll: s
  };
  return a == null && (a = !0), {
    text: {
      126: u
    },
    insideSpan: {
      null: [u]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function s(f, m) {
    let p = -1;
    for (; ++p < f.length; )
      if (f[p][0] === "enter" && f[p][1].type === "strikethroughSequenceTemporary" && f[p][1]._close) {
        let d = p;
        for (; d--; )
          if (f[d][0] === "exit" && f[d][1].type === "strikethroughSequenceTemporary" && f[d][1]._open && // If the sizes are the same:
          f[p][1].end.offset - f[p][1].start.offset === f[d][1].end.offset - f[d][1].start.offset) {
            f[p][1].type = "strikethroughSequence", f[d][1].type = "strikethroughSequence";
            const b = {
              type: "strikethrough",
              start: Object.assign({}, f[d][1].start),
              end: Object.assign({}, f[p][1].end)
            }, y = {
              type: "strikethroughText",
              start: Object.assign({}, f[d][1].end),
              end: Object.assign({}, f[p][1].start)
            }, S = [["enter", b, m], ["enter", f[d][1], m], ["exit", f[d][1], m], ["enter", y, m]], x = m.parser.constructs.insideSpan.null;
            x && Ze(S, S.length, 0, Au(x, f.slice(d + 1, p), m)), Ze(S, S.length, 0, [["exit", y, m], ["enter", f[p][1], m], ["exit", f[p][1], m], ["exit", b, m]]), Ze(f, d - 1, p - d + 3, S), p = d + S.length - 2;
            break;
          }
      }
    for (p = -1; ++p < f.length; )
      f[p][1].type === "strikethroughSequenceTemporary" && (f[p][1].type = "data");
    return f;
  }
  function h(f, m, p) {
    const d = this.previous, b = this.events;
    let y = 0;
    return S;
    function S(A) {
      return d === 126 && b[b.length - 1][1].type !== "characterEscape" ? p(A) : (f.enter("strikethroughSequenceTemporary"), x(A));
    }
    function x(A) {
      const R = _i(d);
      if (A === 126)
        return y > 1 ? p(A) : (f.consume(A), y++, x);
      if (y < 2 && !a) return p(A);
      const L = f.exit("strikethroughSequenceTemporary"), _ = _i(A);
      return L._open = !_ || _ === 2 && !!R, L._close = !R || R === 2 && !!_, m(A);
    }
  }
}
class vw {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(r, a, u) {
    xw(this, r, a, u);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(r) {
    if (this.map.sort(function(h, f) {
      return h[0] - f[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const u = [];
    for (; a > 0; )
      a -= 1, u.push(r.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), r.length = this.map[a][0];
    u.push(r.slice()), r.length = 0;
    let s = u.pop();
    for (; s; ) {
      for (const h of s)
        r.push(h);
      s = u.pop();
    }
    this.map.length = 0;
  }
}
function xw(n, r, a, u) {
  let s = 0;
  if (!(a === 0 && u.length === 0)) {
    for (; s < n.map.length; ) {
      if (n.map[s][0] === r) {
        n.map[s][1] += a, n.map[s][2].push(...u);
        return;
      }
      s += 1;
    }
    n.map.push([r, a, u]);
  }
}
function Sw(n, r) {
  let a = !1;
  const u = [];
  for (; r < n.length; ) {
    const s = n[r];
    if (a) {
      if (s[0] === "enter")
        s[1].type === "tableContent" && u.push(n[r + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (s[1].type === "tableContent") {
        if (n[r - 1][1].type === "tableDelimiterMarker") {
          const h = u.length - 1;
          u[h] = u[h] === "left" ? "center" : "right";
        }
      } else if (s[1].type === "tableDelimiterRow")
        break;
    } else s[0] === "enter" && s[1].type === "tableDelimiterRow" && (a = !0);
    r += 1;
  }
  return u;
}
function kw() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Ew,
        resolveAll: ww
      }
    }
  };
}
function Ew(n, r, a) {
  const u = this;
  let s = 0, h = 0, f;
  return m;
  function m(U) {
    let et = u.events.length - 1;
    for (; et > -1; ) {
      const it = u.events[et][1].type;
      if (it === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      it === "linePrefix") et--;
      else break;
    }
    const tt = et > -1 ? u.events[et][1].type : null, Et = tt === "tableHead" || tt === "tableRow" ? B : p;
    return Et === B && u.parser.lazy[u.now().line] ? a(U) : Et(U);
  }
  function p(U) {
    return n.enter("tableHead"), n.enter("tableRow"), d(U);
  }
  function d(U) {
    return U === 124 || (f = !0, h += 1), b(U);
  }
  function b(U) {
    return U === null ? a(U) : pt(U) ? h > 1 ? (h = 0, u.interrupt = !0, n.exit("tableRow"), n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), x) : a(U) : Ct(U) ? Dt(n, b, "whitespace")(U) : (h += 1, f && (f = !1, s += 1), U === 124 ? (n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), f = !0, b) : (n.enter("data"), y(U)));
  }
  function y(U) {
    return U === null || U === 124 || Zt(U) ? (n.exit("data"), b(U)) : (n.consume(U), U === 92 ? S : y);
  }
  function S(U) {
    return U === 92 || U === 124 ? (n.consume(U), y) : y(U);
  }
  function x(U) {
    return u.interrupt = !1, u.parser.lazy[u.now().line] ? a(U) : (n.enter("tableDelimiterRow"), f = !1, Ct(U) ? Dt(n, A, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : A(U));
  }
  function A(U) {
    return U === 45 || U === 58 ? L(U) : U === 124 ? (f = !0, n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), R) : ot(U);
  }
  function R(U) {
    return Ct(U) ? Dt(n, L, "whitespace")(U) : L(U);
  }
  function L(U) {
    return U === 58 ? (h += 1, f = !0, n.enter("tableDelimiterMarker"), n.consume(U), n.exit("tableDelimiterMarker"), _) : U === 45 ? (h += 1, _(U)) : U === null || pt(U) ? lt(U) : ot(U);
  }
  function _(U) {
    return U === 45 ? (n.enter("tableDelimiterFiller"), Z(U)) : ot(U);
  }
  function Z(U) {
    return U === 45 ? (n.consume(U), Z) : U === 58 ? (f = !0, n.exit("tableDelimiterFiller"), n.enter("tableDelimiterMarker"), n.consume(U), n.exit("tableDelimiterMarker"), H) : (n.exit("tableDelimiterFiller"), H(U));
  }
  function H(U) {
    return Ct(U) ? Dt(n, lt, "whitespace")(U) : lt(U);
  }
  function lt(U) {
    return U === 124 ? A(U) : U === null || pt(U) ? !f || s !== h ? ot(U) : (n.exit("tableDelimiterRow"), n.exit("tableHead"), r(U)) : ot(U);
  }
  function ot(U) {
    return a(U);
  }
  function B(U) {
    return n.enter("tableRow"), P(U);
  }
  function P(U) {
    return U === 124 ? (n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), P) : U === null || pt(U) ? (n.exit("tableRow"), r(U)) : Ct(U) ? Dt(n, P, "whitespace")(U) : (n.enter("data"), J(U));
  }
  function J(U) {
    return U === null || U === 124 || Zt(U) ? (n.exit("data"), P(U)) : (n.consume(U), U === 92 ? mt : J);
  }
  function mt(U) {
    return U === 92 || U === 124 ? (n.consume(U), J) : J(U);
  }
}
function ww(n, r) {
  let a = -1, u = !0, s = 0, h = [0, 0, 0, 0], f = [0, 0, 0, 0], m = !1, p = 0, d, b, y;
  const S = new vw();
  for (; ++a < n.length; ) {
    const x = n[a], A = x[1];
    x[0] === "enter" ? A.type === "tableHead" ? (m = !1, p !== 0 && (ng(S, r, p, d, b), b = void 0, p = 0), d = {
      type: "table",
      start: Object.assign({}, A.start),
      // Note: correct end is set later.
      end: Object.assign({}, A.end)
    }, S.add(a, 0, [["enter", d, r]])) : A.type === "tableRow" || A.type === "tableDelimiterRow" ? (u = !0, y = void 0, h = [0, 0, 0, 0], f = [0, a + 1, 0, 0], m && (m = !1, b = {
      type: "tableBody",
      start: Object.assign({}, A.start),
      // Note: correct end is set later.
      end: Object.assign({}, A.end)
    }, S.add(a, 0, [["enter", b, r]])), s = A.type === "tableDelimiterRow" ? 2 : b ? 3 : 1) : s && (A.type === "data" || A.type === "tableDelimiterMarker" || A.type === "tableDelimiterFiller") ? (u = !1, f[2] === 0 && (h[1] !== 0 && (f[0] = f[1], y = pu(S, r, h, s, void 0, y), h = [0, 0, 0, 0]), f[2] = a)) : A.type === "tableCellDivider" && (u ? u = !1 : (h[1] !== 0 && (f[0] = f[1], y = pu(S, r, h, s, void 0, y)), h = f, f = [h[1], a, 0, 0])) : A.type === "tableHead" ? (m = !0, p = a) : A.type === "tableRow" || A.type === "tableDelimiterRow" ? (p = a, h[1] !== 0 ? (f[0] = f[1], y = pu(S, r, h, s, a, y)) : f[1] !== 0 && (y = pu(S, r, f, s, a, y)), s = 0) : s && (A.type === "data" || A.type === "tableDelimiterMarker" || A.type === "tableDelimiterFiller") && (f[3] = a);
  }
  for (p !== 0 && ng(S, r, p, d, b), S.consume(r.events), a = -1; ++a < r.events.length; ) {
    const x = r.events[a];
    x[0] === "enter" && x[1].type === "table" && (x[1]._align = Sw(r.events, a));
  }
  return n;
}
function pu(n, r, a, u, s, h) {
  const f = u === 1 ? "tableHeader" : u === 2 ? "tableDelimiter" : "tableData", m = "tableContent";
  a[0] !== 0 && (h.end = Object.assign({}, Ti(r.events, a[0])), n.add(a[0], 0, [["exit", h, r]]));
  const p = Ti(r.events, a[1]);
  if (h = {
    type: f,
    start: Object.assign({}, p),
    // Note: correct end is set later.
    end: Object.assign({}, p)
  }, n.add(a[1], 0, [["enter", h, r]]), a[2] !== 0) {
    const d = Ti(r.events, a[2]), b = Ti(r.events, a[3]), y = {
      type: m,
      start: Object.assign({}, d),
      end: Object.assign({}, b)
    };
    if (n.add(a[2], 0, [["enter", y, r]]), u !== 2) {
      const S = r.events[a[2]], x = r.events[a[3]];
      if (S[1].end = Object.assign({}, x[1].end), S[1].type = "chunkText", S[1].contentType = "text", a[3] > a[2] + 1) {
        const A = a[2] + 1, R = a[3] - a[2] - 1;
        n.add(A, R, []);
      }
    }
    n.add(a[3] + 1, 0, [["exit", y, r]]);
  }
  return s !== void 0 && (h.end = Object.assign({}, Ti(r.events, s)), n.add(s, 0, [["exit", h, r]]), h = void 0), h;
}
function ng(n, r, a, u, s) {
  const h = [], f = Ti(r.events, a);
  s && (s.end = Object.assign({}, f), h.push(["exit", s, r])), u.end = Object.assign({}, f), h.push(["exit", u, r]), n.add(a + 1, 0, h);
}
function Ti(n, r) {
  const a = n[r], u = a[0] === "enter" ? "start" : "end";
  return a[1][u];
}
const Aw = {
  name: "tasklistCheck",
  tokenize: Tw
};
function zw() {
  return {
    text: {
      91: Aw
    }
  };
}
function Tw(n, r, a) {
  const u = this;
  return s;
  function s(p) {
    return (
      // Exit if there’s stuff before.
      u.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !u._gfmTasklistFirstContentOfListItem ? a(p) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(p), n.exit("taskListCheckMarker"), h)
    );
  }
  function h(p) {
    return Zt(p) ? (n.enter("taskListCheckValueUnchecked"), n.consume(p), n.exit("taskListCheckValueUnchecked"), f) : p === 88 || p === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(p), n.exit("taskListCheckValueChecked"), f) : a(p);
  }
  function f(p) {
    return p === 93 ? (n.enter("taskListCheckMarker"), n.consume(p), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), m) : a(p);
  }
  function m(p) {
    return pt(p) ? r(p) : Ct(p) ? n.check({
      tokenize: Cw
    }, r, a)(p) : a(p);
  }
}
function Cw(n, r, a) {
  return Dt(n, u, "whitespace");
  function u(s) {
    return s === null ? a(s) : r(s);
  }
}
function _w(n) {
  return jg([
    tw(),
    sw(),
    bw(n),
    kw(),
    zw()
  ]);
}
const Mw = {};
function $s(n) {
  const r = (
    /** @type {Processor<Root>} */
    this
  ), a = n || Mw, u = r.data(), s = u.micromarkExtensions || (u.micromarkExtensions = []), h = u.fromMarkdownExtensions || (u.fromMarkdownExtensions = []), f = u.toMarkdownExtensions || (u.toMarkdownExtensions = []);
  s.push(_w(a)), h.push(IE()), f.push($E(a));
}
const Ow = ({ messages: n }) => {
  const r = $t.useRef(null);
  return $t.useEffect(() => {
    r.current?.scrollIntoView({ behavior: "smooth" }), console.log(n);
  }, [n]), /* @__PURE__ */ nt.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ nt.jsx("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ nt.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ nt.jsx(Ks, { remarkPlugins: [$s], children: n.message }) }) }) });
}, Dw = (n, r, a) => {
  const u = new SpeechSynthesisUtterance(n);
  r && (u.onend = r), window.speechSynthesis.speak(u);
}, Rw = () => {
  window.speechSynthesis.cancel();
}, Nw = async (n) => {
  await navigator.clipboard.writeText(n);
}, Ty = (n) => {
  const r = n.split(`
`).filter((s) => s.trim());
  let a = "";
  const u = [];
  console.log("Raw RAG response lines:", n);
  for (const s of r)
    try {
      const h = JSON.parse(s);
      h.type === "ChatCompletion" && h.content && (a += h.content), h.type === "QuestionSuggestion" && h.content && u.push(h.content);
    } catch {
      console.warn("Failed to parse RAG response line:", s);
    }
  return console.log("Formatted RAG response:", a), console.log("Question suggestions:", u), {
    content: a,
    suggestions: u
  };
};
function Lw({ className: n }) {
  return /* @__PURE__ */ nt.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ nt.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M5 13l4 4L19 7"
        }
      )
    }
  );
}
function Uw({ className: n }) {
  return /* @__PURE__ */ nt.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ nt.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        }
      )
    }
  );
}
function jw({ className: n }) {
  return /* @__PURE__ */ nt.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ nt.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
        }
      )
    }
  );
}
function Bw({ className: n }) {
  return /* @__PURE__ */ nt.jsx(
    "svg",
    {
      className: n,
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ nt.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
          clipRule: "evenodd"
        }
      )
    }
  );
}
const Hw = ({
  messages: n,
  index: r,
  onSuggestionClick: a
}) => {
  const { t: u } = Eu(), [s, h] = $t.useState(null), [f, m] = $t.useState(null), p = $t.useRef(null);
  let d = "";
  const [b, y] = $t.useState("");
  $t.useEffect(() => {
    p.current?.scrollIntoView({ behavior: "smooth" }), d += Ty(n.message).content, console.log("Formatted RAG response:::: ", d), y(d);
  }, [n]);
  const S = (A, R) => {
    if (s !== null && (Rw(), s === R)) {
      h(null);
      return;
    }
    Dw(A, () => h(null)), h(R);
  }, x = async (A, R) => {
    try {
      await Nw(A), m(R), setTimeout(() => m(null), 2e3);
    } catch (L) {
      console.error("Failed to copy text:", L);
    }
  };
  return /* @__PURE__ */ nt.jsx(
    "div",
    {
      className: "flex justify-start",
      children: /* @__PURE__ */ nt.jsxs("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white", children: [
        /* @__PURE__ */ nt.jsxs("div", { className: "flex flex-col items-start gap-3", children: [
          /* @__PURE__ */ nt.jsx(Ks, { remarkPlugins: [$s], children: n.message }),
          /* @__PURE__ */ nt.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ nt.jsx(
              ja,
              {
                onClick: () => x(n.message, r),
                variant: "ghost",
                size: "icon",
                className: "rounded-lg",
                title: f === r ? u.chat.copiedTooltip : u.chat.copyTooltip,
                children: f === r ? /* @__PURE__ */ nt.jsx(Lw, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ nt.jsx(Uw, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ nt.jsx(
              ja,
              {
                onClick: () => S(n.message, r),
                variant: "ghost",
                size: "icon",
                className: "rounded-lg",
                title: s === r ? u.chat.stopReadingTooltip : u.chat.readAloudTooltip,
                children: s === r ? /* @__PURE__ */ nt.jsx(jw, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ nt.jsx(Bw, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ nt.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ nt.jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2", children: "Suggested follow-up questions:" }),
          /* @__PURE__ */ nt.jsx("div", { className: "space-y-2", children: n.type === "QuestionSuggestion" && /* @__PURE__ */ nt.jsx(
            "button",
            {
              onClick: () => a?.(n.message),
              className: "block w-full text-left text-sm px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300",
              children: n.message
            }
          ) })
        ] })
      ] })
    },
    r
  );
}, qw = ({ welcomeMessage: n }) => /* @__PURE__ */ nt.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ nt.jsx("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white", children: /* @__PURE__ */ nt.jsx("div", { className: "flex flex-col items-start gap-3", children: /* @__PURE__ */ nt.jsx(Ks, { remarkPlugins: [$s], children: n }) }) }) });
function Yw({
  messages: n,
  chatbotInitData: r,
  loading: a,
  onSuggestionClick: u
}) {
  const s = $t.useRef(null);
  let h = "";
  const [f, m] = $t.useState("");
  return $t.useEffect(() => {
    s.current?.scrollIntoView({ behavior: "smooth" }), n.forEach((p) => {
      h += Ty(p.message);
    }), console.log("Formatted RAG response:::: ", h), m(h);
  }, [n]), $t.useEffect(() => {
    s.current?.scrollIntoView({ behavior: "smooth" }), console.log(n);
  }, [n]), /* @__PURE__ */ nt.jsxs("div", { className: "flex-1 overflow-y-auto space-y-4 mb-6 min-h-0", children: [
    r?.welcomeMessage && /* @__PURE__ */ nt.jsx(qw, { welcomeMessage: r.welcomeMessage }),
    n.map((p, d) => p.isChatbot ? /* @__PURE__ */ nt.jsx(
      Hw,
      {
        messages: p,
        index: d,
        onSuggestionClick: u
      },
      d
    ) : /* @__PURE__ */ nt.jsx(
      Ow,
      {
        index: d,
        messages: p
      },
      d
    )),
    a && /* @__PURE__ */ nt.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ nt.jsx("div", { className: "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-2xl", children: /* @__PURE__ */ nt.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ nt.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ nt.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-100" }),
      /* @__PURE__ */ nt.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-200" })
    ] }) }) }),
    /* @__PURE__ */ nt.jsx("div", { ref: s })
  ] });
}
const Vw = cg(
  "w-full border rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 dark:border-gray-700 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500",
        ghost: "border-transparent bg-transparent focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
      },
      inputSize: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-4 py-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md"
    }
  }
), Cy = $t.forwardRef(
  ({ className: n, variant: r, inputSize: a, ...u }, s) => /* @__PURE__ */ nt.jsx(
    "input",
    {
      className: kg(Vw({ variant: r, inputSize: a }), n),
      ref: s,
      ...u
    }
  )
);
Cy.displayName = "Input";
function Gw({
  input: n,
  loading: r,
  pageContent: a,
  onInputChange: u,
  onSendMessage: s
}) {
  const { t: h } = Eu();
  return /* @__PURE__ */ nt.jsx("div", { className: "sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-4 pb-2", children: /* @__PURE__ */ nt.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ nt.jsx(
      Cy,
      {
        type: "text",
        value: n,
        onChange: (f) => u(f.target.value),
        onKeyDown: (f) => f.key === "Enter" && s(),
        placeholder: a ? h.chat.inputPlaceholder : h.chat.inputPlaceholderEmpty,
        disabled: r,
        inputSize: "md",
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ nt.jsx(
      ja,
      {
        onClick: s,
        disabled: r || !n.trim(),
        variant: "secondary",
        size: "lg",
        children: h.chat.sendButton
      }
    )
  ] }) });
}
const Xw = async (n, r, a) => {
  const u = await g1(n, r);
  if (a(u), !n) {
    console.warn("Missing chat-api. Stop.");
    return;
  }
  if (!r) {
    console.warn(
      "Missing chat-assistant-id. At least one of them should be provided. Stop."
    );
    return;
  }
};
var ys = { exports: {} };
var lg;
function Qw() {
  return lg || (lg = 1, (function(n) {
    (function() {
      var r = {}.hasOwnProperty;
      function a() {
        for (var h = "", f = 0; f < arguments.length; f++) {
          var m = arguments[f];
          m && (h = s(h, u(m)));
        }
        return h;
      }
      function u(h) {
        if (typeof h == "string" || typeof h == "number")
          return h;
        if (typeof h != "object")
          return "";
        if (Array.isArray(h))
          return a.apply(null, h);
        if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]"))
          return h.toString();
        var f = "";
        for (var m in h)
          r.call(h, m) && h[m] && (f = s(f, m));
        return f;
      }
      function s(h, f) {
        return f ? h ? h + " " + f : h + f : h;
      }
      n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
    })();
  })(ys)), ys.exports;
}
var Zw = Qw();
const Kw = /* @__PURE__ */ ku(Zw);
function Fw({ chatApi: n, chatAssistantId: r, open: a = !0, size: u = "large" }) {
  const [s, h] = $t.useState(
    void 0
  ), [f, m] = $t.useState(""), [p, d] = $t.useState([]), [b, y] = $t.useState(""), [S, x] = $t.useState(!1);
  $t.useRef(null), $t.useEffect(() => {
    n && r && Xw(n, r, h);
  }, []);
  const A = async (L) => {
    if (!L.trim()) return;
    const _ = { isChatbot: !1, message: L, id: void 0, type: "UserInput" }, Z = [...p, _];
    d(Z), y(""), x(!0);
    try {
      const lt = {
        isChatbot: !0,
        message: (await p1(
          L,
          r,
          f
        )).response,
        id: void 0,
        type: "ChatCompletion"
      };
      d((ot) => [...ot, lt]);
    } catch (H) {
      console.error("Error sending message:", H), H instanceof Error && H.message;
    } finally {
      x(!1);
    }
  }, R = (L) => {
    A(L);
  };
  return /* @__PURE__ */ nt.jsxs("div", { className: Kw({ block: a, hidden: !a, "w-1/2": u === "medium", "w-screen": u === "large" }, "min-h-screen bg-white dark:bg-gray-950 flex flex-col z-1000"), children: [
    /* @__PURE__ */ nt.jsx(
      b1,
      {
        title: s?.name
      }
    ),
    /* @__PURE__ */ nt.jsxs("div", { className: "flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6", children: [
      /* @__PURE__ */ nt.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ nt.jsx(
          ov,
          {
            loading: S,
            onSuggestionClick: R
          }
        ),
        /* @__PURE__ */ nt.jsx("div", { className: "flex-1" })
      ] }),
      /* @__PURE__ */ nt.jsx(
        Yw,
        {
          messages: p,
          loading: S,
          chatbotInitData: s,
          onSuggestionClick: A
        }
      ),
      /* @__PURE__ */ nt.jsx(
        Gw,
        {
          input: b,
          loading: S,
          pageContent: f,
          onInputChange: y,
          onSendMessage: () => A(b)
        }
      )
    ] })
  ] });
}
const Jw = s1(Fw, {
  props: {
    chatApi: "string",
    chatAssistantId: "string"
  },
  shadow: "open"
});
customElements.define("teacher-tool-widget", Jw);
