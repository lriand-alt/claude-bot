function Su(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Zs = { exports: {} }, Aa = {};
var Ip;
function X0() {
  if (Ip) return Aa;
  Ip = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(u, c, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      d = {};
      for (var p in c)
        p !== "key" && (d[p] = c[p]);
    } else d = c;
    return c = d.ref, {
      $$typeof: n,
      type: u,
      key: f,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return Aa.Fragment = r, Aa.jsx = a, Aa.jsxs = a, Aa;
}
var $p;
function Z0() {
  return $p || ($p = 1, Zs.exports = X0()), Zs.exports;
}
var et = Z0(), Fs = { exports: {} }, bt = {};
var Wp;
function F0() {
  if (Wp) return bt;
  Wp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object" ? null : (A = w && A[w] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var E = {
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
  function D(A, Y, k) {
    this.props = A, this.context = Y, this.refs = L, this.updater = k || E;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(A, Y) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, Y, "setState");
  }, D.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = D.prototype;
  function H(A, Y, k) {
    this.props = A, this.context = Y, this.refs = L, this.updater = k || E;
  }
  var lt = H.prototype = new Z();
  lt.constructor = H, R(lt, D.prototype), lt.isPureReactComponent = !0;
  var ot = Array.isArray;
  function B() {
  }
  var P = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function pt(A, Y, k) {
    var $ = k.ref;
    return {
      $$typeof: n,
      type: A,
      key: Y,
      ref: $ !== void 0 ? $ : null,
      props: k
    };
  }
  function U(A, Y) {
    return pt(A.type, Y, A.props);
  }
  function nt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function tt(A) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(k) {
      return Y[k];
    });
  }
  var St = /\/+/g;
  function it(A, Y) {
    return typeof A == "object" && A !== null && A.key != null ? tt("" + A.key) : Y.toString(36);
  }
  function I(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(B, B) : (A.status = "pending", A.then(
          function(Y) {
            A.status === "pending" && (A.status = "fulfilled", A.value = Y);
          },
          function(Y) {
            A.status === "pending" && (A.status = "rejected", A.reason = Y);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function _(A, Y, k, $, ft) {
    var ct = typeof A;
    (ct === "undefined" || ct === "boolean") && (A = null);
    var dt = !1;
    if (A === null) dt = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case r:
              dt = !0;
              break;
            case b:
              return dt = A._init, _(
                dt(A._payload),
                Y,
                k,
                $,
                ft
              );
          }
      }
    if (dt)
      return ft = ft(A), dt = $ === "" ? "." + it(A, 0) : $, ot(ft) ? (k = "", dt != null && (k = dt.replace(St, "$&/") + "/"), _(ft, Y, k, "", function(de) {
        return de;
      })) : ft != null && (nt(ft) && (ft = U(
        ft,
        k + (ft.key == null || A && A.key === ft.key ? "" : ("" + ft.key).replace(
          St,
          "$&/"
        ) + "/") + dt
      )), Y.push(ft)), 1;
    dt = 0;
    var Vt = $ === "" ? "." : $ + ":";
    if (ot(A))
      for (var Rt = 0; Rt < A.length; Rt++)
        $ = A[Rt], ct = Vt + it($, Rt), dt += _(
          $,
          Y,
          k,
          ct,
          ft
        );
    else if (Rt = x(A), typeof Rt == "function")
      for (A = Rt.call(A), Rt = 0; !($ = A.next()).done; )
        $ = $.value, ct = Vt + it($, Rt++), dt += _(
          $,
          Y,
          k,
          ct,
          ft
        );
    else if (ct === "object") {
      if (typeof A.then == "function")
        return _(
          I(A),
          Y,
          k,
          $,
          ft
        );
      throw Y = String(A), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return dt;
  }
  function F(A, Y, k) {
    if (A == null) return A;
    var $ = [], ft = 0;
    return _(A, $, "", "", function(ct) {
      return Y.call(k, ct, ft++);
    }), $;
  }
  function X(A) {
    if (A._status === -1) {
      var Y = A._result;
      Y = Y(), Y.then(
        function(k) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = k);
        },
        function(k) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = k);
        }
      ), A._status === -1 && (A._status = 0, A._result = Y);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var xt = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  }, S = {
    map: F,
    forEach: function(A, Y, k) {
      F(
        A,
        function() {
          Y.apply(this, arguments);
        },
        k
      );
    },
    count: function(A) {
      var Y = 0;
      return F(A, function() {
        Y++;
      }), Y;
    },
    toArray: function(A) {
      return F(A, function(Y) {
        return Y;
      }) || [];
    },
    only: function(A) {
      if (!nt(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return bt.Activity = y, bt.Children = S, bt.Component = D, bt.Fragment = a, bt.Profiler = c, bt.PureComponent = H, bt.StrictMode = u, bt.Suspense = m, bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, bt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return P.H.useMemoCache(A);
    }
  }, bt.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, bt.cacheSignal = function() {
    return null;
  }, bt.cloneElement = function(A, Y, k) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var $ = R({}, A.props), ft = A.key;
    if (Y != null)
      for (ct in Y.key !== void 0 && (ft = "" + Y.key), Y)
        !J.call(Y, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && Y.ref === void 0 || ($[ct] = Y[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) $.children = k;
    else if (1 < ct) {
      for (var dt = Array(ct), Vt = 0; Vt < ct; Vt++)
        dt[Vt] = arguments[Vt + 2];
      $.children = dt;
    }
    return pt(A.type, ft, $);
  }, bt.createContext = function(A) {
    return A = {
      $$typeof: f,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: d,
      _context: A
    }, A;
  }, bt.createElement = function(A, Y, k) {
    var $, ft = {}, ct = null;
    if (Y != null)
      for ($ in Y.key !== void 0 && (ct = "" + Y.key), Y)
        J.call(Y, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ft[$] = Y[$]);
    var dt = arguments.length - 2;
    if (dt === 1) ft.children = k;
    else if (1 < dt) {
      for (var Vt = Array(dt), Rt = 0; Rt < dt; Rt++)
        Vt[Rt] = arguments[Rt + 2];
      ft.children = Vt;
    }
    if (A && A.defaultProps)
      for ($ in dt = A.defaultProps, dt)
        ft[$] === void 0 && (ft[$] = dt[$]);
    return pt(A, ct, ft);
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(A) {
    return { $$typeof: p, render: A };
  }, bt.isValidElement = nt, bt.lazy = function(A) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: A },
      _init: X
    };
  }, bt.memo = function(A, Y) {
    return {
      $$typeof: h,
      type: A,
      compare: Y === void 0 ? null : Y
    };
  }, bt.startTransition = function(A) {
    var Y = P.T, k = {};
    P.T = k;
    try {
      var $ = A(), ft = P.S;
      ft !== null && ft(k, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(B, xt);
    } catch (ct) {
      xt(ct);
    } finally {
      Y !== null && k.types !== null && (Y.types = k.types), P.T = Y;
    }
  }, bt.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, bt.use = function(A) {
    return P.H.use(A);
  }, bt.useActionState = function(A, Y, k) {
    return P.H.useActionState(A, Y, k);
  }, bt.useCallback = function(A, Y) {
    return P.H.useCallback(A, Y);
  }, bt.useContext = function(A) {
    return P.H.useContext(A);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(A, Y) {
    return P.H.useDeferredValue(A, Y);
  }, bt.useEffect = function(A, Y) {
    return P.H.useEffect(A, Y);
  }, bt.useEffectEvent = function(A) {
    return P.H.useEffectEvent(A);
  }, bt.useId = function() {
    return P.H.useId();
  }, bt.useImperativeHandle = function(A, Y, k) {
    return P.H.useImperativeHandle(A, Y, k);
  }, bt.useInsertionEffect = function(A, Y) {
    return P.H.useInsertionEffect(A, Y);
  }, bt.useLayoutEffect = function(A, Y) {
    return P.H.useLayoutEffect(A, Y);
  }, bt.useMemo = function(A, Y) {
    return P.H.useMemo(A, Y);
  }, bt.useOptimistic = function(A, Y) {
    return P.H.useOptimistic(A, Y);
  }, bt.useReducer = function(A, Y, k) {
    return P.H.useReducer(A, Y, k);
  }, bt.useRef = function(A) {
    return P.H.useRef(A);
  }, bt.useState = function(A) {
    return P.H.useState(A);
  }, bt.useSyncExternalStore = function(A, Y, k) {
    return P.H.useSyncExternalStore(
      A,
      Y,
      k
    );
  }, bt.useTransition = function() {
    return P.H.useTransition();
  }, bt.version = "19.2.3", bt;
}
var Pp;
function Mc() {
  return Pp || (Pp = 1, Fs.exports = F0()), Fs.exports;
}
var Zt = Mc();
const ag = /* @__PURE__ */ Su(Zt);
var Ks = { exports: {} }, Ta = {}, Js = { exports: {} }, Is = {};
var tm;
function K0() {
  return tm || (tm = 1, (function(n) {
    function r(_, F) {
      var X = _.length;
      _.push(F);
      t: for (; 0 < X; ) {
        var xt = X - 1 >>> 1, S = _[xt];
        if (0 < c(S, F))
          _[xt] = F, _[X] = S, X = xt;
        else break t;
      }
    }
    function a(_) {
      return _.length === 0 ? null : _[0];
    }
    function u(_) {
      if (_.length === 0) return null;
      var F = _[0], X = _.pop();
      if (X !== F) {
        _[0] = X;
        t: for (var xt = 0, S = _.length, A = S >>> 1; xt < A; ) {
          var Y = 2 * (xt + 1) - 1, k = _[Y], $ = Y + 1, ft = _[$];
          if (0 > c(k, X))
            $ < S && 0 > c(ft, k) ? (_[xt] = ft, _[$] = X, xt = $) : (_[xt] = k, _[Y] = X, xt = Y);
          else if ($ < S && 0 > c(ft, X))
            _[xt] = ft, _[$] = X, xt = $;
          else break t;
        }
      }
      return F;
    }
    function c(_, F) {
      var X = _.sortIndex - F.sortIndex;
      return X !== 0 ? X : _.id - F.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      n.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, p = f.now();
      n.unstable_now = function() {
        return f.now() - p;
      };
    }
    var m = [], h = [], b = 1, y = null, w = 3, x = !1, E = !1, R = !1, L = !1, D = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function lt(_) {
      for (var F = a(h); F !== null; ) {
        if (F.callback === null) u(h);
        else if (F.startTime <= _)
          u(h), F.sortIndex = F.expirationTime, r(m, F);
        else break;
        F = a(h);
      }
    }
    function ot(_) {
      if (R = !1, lt(_), !E)
        if (a(m) !== null)
          E = !0, B || (B = !0, tt());
        else {
          var F = a(h);
          F !== null && I(ot, F.startTime - _);
        }
    }
    var B = !1, P = -1, J = 5, pt = -1;
    function U() {
      return L ? !0 : !(n.unstable_now() - pt < J);
    }
    function nt() {
      if (L = !1, B) {
        var _ = n.unstable_now();
        pt = _;
        var F = !0;
        try {
          t: {
            E = !1, R && (R = !1, Z(P), P = -1), x = !0;
            var X = w;
            try {
              e: {
                for (lt(_), y = a(m); y !== null && !(y.expirationTime > _ && U()); ) {
                  var xt = y.callback;
                  if (typeof xt == "function") {
                    y.callback = null, w = y.priorityLevel;
                    var S = xt(
                      y.expirationTime <= _
                    );
                    if (_ = n.unstable_now(), typeof S == "function") {
                      y.callback = S, lt(_), F = !0;
                      break e;
                    }
                    y === a(m) && u(m), lt(_);
                  } else u(m);
                  y = a(m);
                }
                if (y !== null) F = !0;
                else {
                  var A = a(h);
                  A !== null && I(
                    ot,
                    A.startTime - _
                  ), F = !1;
                }
              }
              break t;
            } finally {
              y = null, w = X, x = !1;
            }
            F = void 0;
          }
        } finally {
          F ? tt() : B = !1;
        }
      }
    }
    var tt;
    if (typeof H == "function")
      tt = function() {
        H(nt);
      };
    else if (typeof MessageChannel < "u") {
      var St = new MessageChannel(), it = St.port2;
      St.port1.onmessage = nt, tt = function() {
        it.postMessage(null);
      };
    } else
      tt = function() {
        D(nt, 0);
      };
    function I(_, F) {
      P = D(function() {
        _(n.unstable_now());
      }, F);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, n.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(_) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = w;
      }
      var X = w;
      w = F;
      try {
        return _();
      } finally {
        w = X;
      }
    }, n.unstable_requestPaint = function() {
      L = !0;
    }, n.unstable_runWithPriority = function(_, F) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var X = w;
      w = _;
      try {
        return F();
      } finally {
        w = X;
      }
    }, n.unstable_scheduleCallback = function(_, F, X) {
      var xt = n.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? xt + X : xt) : X = xt, _) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return S = X + S, _ = {
        id: b++,
        callback: F,
        priorityLevel: _,
        startTime: X,
        expirationTime: S,
        sortIndex: -1
      }, X > xt ? (_.sortIndex = X, r(h, _), a(m) === null && _ === a(h) && (R ? (Z(P), P = -1) : R = !0, I(ot, X - xt))) : (_.sortIndex = S, r(m, _), E || x || (E = !0, B || (B = !0, tt()))), _;
    }, n.unstable_shouldYield = U, n.unstable_wrapCallback = function(_) {
      var F = w;
      return function() {
        var X = w;
        w = F;
        try {
          return _.apply(this, arguments);
        } finally {
          w = X;
        }
      };
    };
  })(Is)), Is;
}
var em;
function J0() {
  return em || (em = 1, Js.exports = K0()), Js.exports;
}
var $s = { exports: {} }, be = {};
var nm;
function I0() {
  if (nm) return be;
  nm = 1;
  var n = Mc();
  function r(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        h += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(m, h, b) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: m,
      containerInfo: h,
      implementation: b
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, h) {
    if (m === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, be.createPortal = function(m, h) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(r(299));
    return d(m, h, null, b);
  }, be.flushSync = function(m) {
    var h = f.T, b = u.p;
    try {
      if (f.T = null, u.p = 2, m) return m();
    } finally {
      f.T = h, u.p = b, u.d.f();
    }
  }, be.preconnect = function(m, h) {
    typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(m, h));
  }, be.prefetchDNS = function(m) {
    typeof m == "string" && u.d.D(m);
  }, be.preinit = function(m, h) {
    if (typeof m == "string" && h && typeof h.as == "string") {
      var b = h.as, y = p(b, h.crossOrigin), w = typeof h.integrity == "string" ? h.integrity : void 0, x = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      b === "style" ? u.d.S(
        m,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: y,
          integrity: w,
          fetchPriority: x
        }
      ) : b === "script" && u.d.X(m, {
        crossOrigin: y,
        integrity: w,
        fetchPriority: x,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, be.preinitModule = function(m, h) {
    if (typeof m == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var b = p(
            h.as,
            h.crossOrigin
          );
          u.d.M(m, {
            crossOrigin: b,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && u.d.M(m);
  }, be.preload = function(m, h) {
    if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var b = h.as, y = p(b, h.crossOrigin);
      u.d.L(m, b, {
        crossOrigin: y,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, be.preloadModule = function(m, h) {
    if (typeof m == "string")
      if (h) {
        var b = p(h.as, h.crossOrigin);
        u.d.m(m, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: b,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else u.d.m(m);
  }, be.requestFormReset = function(m) {
    u.d.r(m);
  }, be.unstable_batchedUpdates = function(m, h) {
    return m(h);
  }, be.useFormState = function(m, h, b) {
    return f.H.useFormState(m, h, b);
  }, be.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, be.version = "19.2.3", be;
}
var lm;
function $0() {
  if (lm) return $s.exports;
  lm = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), $s.exports = I0(), $s.exports;
}
var im;
function W0() {
  if (im) return Ta;
  im = 1;
  var n = J0(), r = Mc(), a = $0();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
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
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (d(t) !== t)
      throw Error(u(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var l = t, i = e; ; ) {
      var o = l.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (i = o.return, i !== null) {
          l = i;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === l) return m(o), t;
          if (s === i) return m(o), e;
          s = s.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== i.return) l = o, i = s;
      else {
        for (var g = !1, v = o.child; v; ) {
          if (v === l) {
            g = !0, l = o, i = s;
            break;
          }
          if (v === i) {
            g = !0, i = o, l = s;
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = s.child; v; ) {
            if (v === l) {
              g = !0, l = s, i = o;
              break;
            }
            if (v === i) {
              g = !0, i = s, l = o;
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
  var y = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), ot = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), pt = /* @__PURE__ */ Symbol.for("react.activity"), U = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), nt = Symbol.iterator;
  function tt(t) {
    return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var St = /* @__PURE__ */ Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === St ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case D:
        return "Profiler";
      case L:
        return "StrictMode";
      case ot:
        return "Suspense";
      case B:
        return "SuspenseList";
      case pt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
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
  var I = Array.isArray, _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xt = [], S = -1;
  function A(t) {
    return { current: t };
  }
  function Y(t) {
    0 > S || (t.current = xt[S], xt[S] = null, S--);
  }
  function k(t, e) {
    S++, xt[S] = t.current, t.current = e;
  }
  var $ = A(null), ft = A(null), ct = A(null), dt = A(null);
  function Vt(t, e) {
    switch (k(ct, e), k(ft, t), k($, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? vp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = vp(e), t = xp(e, t);
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
    Y($), Y(ft), Y(ct);
  }
  function de(t) {
    t.memoizedState !== null && k(dt, t);
    var e = $.current, l = xp(e, t.type);
    e !== l && (k(ft, t), k($, l));
  }
  function Le(t) {
    ft.current === t && (Y($), Y(ft)), dt.current === t && (Y(dt), ka._currentValue = X);
  }
  var cn, Va;
  function yn(t) {
    if (cn === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        cn = e && e[1] || "", Va = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + cn + t + Va;
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
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (j) {
                  var N = j;
                }
                Reflect.construct(t, [], Q);
              } else {
                try {
                  Q.call();
                } catch (j) {
                  N = j;
                }
                t.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                N = j;
              }
              (Q = t()) && typeof Q.catch == "function" && Q.catch(function() {
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
      var s = i.DetermineComponentFrameRoot(), g = s[0], v = s[1];
      if (g && v) {
        var z = g.split(`
`), O = v.split(`
`);
        for (o = i = 0; i < z.length && !z[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < O.length && !O[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === z.length || o === O.length)
          for (i = z.length - 1, o = O.length - 1; 1 <= i && 0 <= o && z[i] !== O[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (z[i] !== O[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || z[i] !== O[o]) {
                  var q = `
` + z[i].replace(" at new ", " at ");
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
  function Qa(t, e) {
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
  function Xa(t) {
    try {
      var e = "", l = null;
      do
        e += Qa(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Bl = Object.prototype.hasOwnProperty, Hl = n.unstable_scheduleCallback, Ni = n.unstable_cancelCallback, _u = n.unstable_shouldYield, Mu = n.unstable_requestPaint, we = n.unstable_now, Ou = n.unstable_getCurrentPriorityLevel, G = n.unstable_ImmediatePriority, W = n.unstable_UserBlockingPriority, yt = n.unstable_NormalPriority, Et = n.unstable_LowPriority, jt = n.unstable_IdlePriority, Ue = n.log, bn = n.unstable_setDisableYieldValue, ke = null, ue = null;
  function Ee(t) {
    if (typeof Ue == "function" && bn(t), ue && typeof ue.setStrictMode == "function")
      try {
        ue.setStrictMode(ke, t);
      } catch {
      }
  }
  var Qt = Math.clz32 ? Math.clz32 : My, Hn = Math.log, an = Math.LN2;
  function My(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Hn(t) / an | 0) | 0;
  }
  var Za = 256, Fa = 262144, Ka = 4194304;
  function hl(t) {
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
    var o = 0, s = t.suspendedLanes, g = t.pingedLanes;
    t = t.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~s, i !== 0 ? o = hl(i) : (g &= v, g !== 0 ? o = hl(g) : l || (l = v & ~t, l !== 0 && (o = hl(l))))) : (v = i & ~s, v !== 0 ? o = hl(v) : g !== 0 ? o = hl(g) : l || (l = i & ~t, l !== 0 && (o = hl(l)))), o === 0 ? 0 : e !== 0 && e !== o && (e & s) === 0 && (s = o & -o, l = e & -e, s >= l || s === 32 && (l & 4194048) !== 0) ? e : o;
  }
  function Li(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Oy(t, e) {
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
  function Pc() {
    var t = Ka;
    return Ka <<= 1, (Ka & 62914560) === 0 && (Ka = 4194304), t;
  }
  function Ru(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ui(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ry(t, e, l, i, o, s) {
    var g = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var v = t.entanglements, z = t.expirationTimes, O = t.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var q = 31 - Qt(l), Q = 1 << q;
      v[q] = 0, z[q] = -1;
      var N = O[q];
      if (N !== null)
        for (O[q] = null, q = 0; q < N.length; q++) {
          var j = N[q];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~Q;
    }
    i !== 0 && tf(t, i, 0), s !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(g & ~e));
  }
  function tf(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - Qt(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | l & 261930;
  }
  function ef(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var i = 31 - Qt(l), o = 1 << i;
      o & e | t[i] & e && (t[i] |= e), l &= ~o;
    }
  }
  function nf(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Nu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Nu(t) {
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
  function Lu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function lf() {
    var t = F.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Vp(t.type));
  }
  function af(t, e) {
    var l = F.p;
    try {
      return F.p = t, e();
    } finally {
      F.p = l;
    }
  }
  var qn = Math.random().toString(36).slice(2), he = "__reactFiber$" + qn, Ae = "__reactProps$" + qn, ql = "__reactContainer$" + qn, Uu = "__reactEvents$" + qn, Ny = "__reactListeners$" + qn, Ly = "__reactHandles$" + qn, rf = "__reactResources$" + qn, ji = "__reactMarker$" + qn;
  function ju(t) {
    delete t[he], delete t[Ae], delete t[Uu], delete t[Ny], delete t[Ly];
  }
  function Yl(t) {
    var e = t[he];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ql] || l[he]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Tp(t); t !== null; ) {
            if (l = t[he]) return l;
            t = Tp(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Gl(t) {
    if (t = t[he] || t[ql]) {
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
  function Vl(t) {
    var e = t[rf];
    return e || (e = t[rf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ce(t) {
    t[ji] = !0;
  }
  var uf = /* @__PURE__ */ new Set(), of = {};
  function pl(t, e) {
    Ql(t, e), Ql(t + "Capture", e);
  }
  function Ql(t, e) {
    for (of[t] = e, t = 0; t < e.length; t++)
      uf.add(e[t]);
  }
  var Uy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), sf = {}, cf = {};
  function jy(t) {
    return Bl.call(cf, t) ? !0 : Bl.call(sf, t) ? !1 : Uy.test(t) ? cf[t] = !0 : (sf[t] = !0, !1);
  }
  function Ia(t, e, l) {
    if (jy(e))
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
  function Fe(t) {
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
  function ff(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function By(t, e, l) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, s = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(g) {
          l = "" + g, s.call(this, g);
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
  function Bu(t) {
    if (!t._valueTracker) {
      var e = ff(t) ? "checked" : "value";
      t._valueTracker = By(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function df(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), i = "";
    return t && (i = ff(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Wa(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Hy = /[\n"\\]/g;
  function Ke(t) {
    return t.replace(
      Hy,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hu(t, e, l, i, o, s, g, v) {
    t.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"), e != null ? g === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Fe(e)) : t.value !== "" + Fe(e) && (t.value = "" + Fe(e)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"), e != null ? qu(t, g, Fe(e)) : l != null ? qu(t, g, Fe(l)) : i != null && t.removeAttribute("value"), o == null && s != null && (t.defaultChecked = !!s), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Fe(v) : t.removeAttribute("name");
  }
  function hf(t, e, l, i, o, s, g, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || l != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        Bu(t);
        return;
      }
      l = l != null ? "" + Fe(l) : "", e = e != null ? "" + Fe(e) : l, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = v ? t.checked : !!i, t.defaultChecked = !!i, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g), Bu(t);
  }
  function qu(t, e, l) {
    e === "number" && Wa(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Xl(t, e, l, i) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < l.length; o++)
        e["$" + l[o]] = !0;
      for (l = 0; l < t.length; l++)
        o = e.hasOwnProperty("$" + t[l].value), t[l].selected !== o && (t[l].selected = o), o && i && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Fe(l), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === l) {
          t[o].selected = !0, i && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function pf(t, e, l) {
    if (e != null && (e = "" + Fe(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Fe(l) : "";
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
    l = Fe(e), t.defaultValue = l, i = t.textContent, i === l && i !== "" && i !== null && (t.value = i), Bu(t);
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
  var qy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gf(t, e, l) {
    var i = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, l) : typeof l != "number" || l === 0 || qy.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function yf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(u(62));
    if (t = t.style, l != null) {
      for (var i in l)
        !l.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
      for (var o in e)
        i = e[o], e.hasOwnProperty(o) && l[o] !== i && gf(t, o, i);
    } else
      for (var s in e)
        e.hasOwnProperty(s) && gf(t, s, e[s]);
  }
  function Yu(t) {
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
  var Yy = /* @__PURE__ */ new Map([
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
  ]), Gy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pa(t) {
    return Gy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function xn() {
  }
  var Gu = null;
  function Vu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Fl = null, Kl = null;
  function bf(t) {
    var e = Gl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Hu(
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
              'input[name="' + Ke(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var i = l[e];
              if (i !== t && i.form === t.form) {
                var o = i[Ae] || null;
                if (!o) throw Error(u(90));
                Hu(
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
              i = l[e], i.form === t.form && df(i);
          }
          break t;
        case "textarea":
          pf(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Xl(t, !!l.multiple, e, !1);
      }
    }
  }
  var Qu = !1;
  function vf(t, e, l) {
    if (Qu) return t(e, l);
    Qu = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Qu = !1, (Fl !== null || Kl !== null) && (qr(), Fl && (e = Fl, t = Kl, Kl = Fl = null, bf(e), t)))
        for (e = 0; e < t.length; e++) bf(t[e]);
    }
  }
  function Hi(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var i = l[Ae] || null;
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
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (wn)
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
  var Yn = null, Zu = null, tr = null;
  function xf() {
    if (tr) return tr;
    var t, e = Zu, l = e.length, i, o = "value" in Yn ? Yn.value : Yn.textContent, s = o.length;
    for (t = 0; t < l && e[t] === o[t]; t++) ;
    var g = l - t;
    for (i = 1; i <= g && e[l - i] === o[s - i]; i++) ;
    return tr = o.slice(t, 1 < i ? 1 - i : void 0);
  }
  function er(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function nr() {
    return !0;
  }
  function wf() {
    return !1;
  }
  function Te(t) {
    function e(l, i, o, s, g) {
      this._reactName = l, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = g, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (l = t[v], this[v] = l ? l(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? nr : wf, this.isPropagationStopped = wf, this;
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
  var ml = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, lr = Te(ml), Yi = y({}, ml, { view: 0, detail: 0 }), Vy = Te(Yi), Fu, Ku, Gi, ir = y({}, Yi, {
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
    getModifierState: Iu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Gi && (Gi && t.type === "mousemove" ? (Fu = t.screenX - Gi.screenX, Ku = t.screenY - Gi.screenY) : Ku = Fu = 0, Gi = t), Fu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ku;
    }
  }), kf = Te(ir), Qy = y({}, ir, { dataTransfer: 0 }), Xy = Te(Qy), Zy = y({}, Yi, { relatedTarget: 0 }), Ju = Te(Zy), Fy = y({}, ml, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ky = Te(Fy), Jy = y({}, ml, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Iy = Te(Jy), $y = y({}, ml, { data: 0 }), Sf = Te($y), Wy = {
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
  }, Py = {
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
  }, tb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eb(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = tb[t]) ? !!e[t] : !1;
  }
  function Iu() {
    return eb;
  }
  var nb = y({}, Yi, {
    key: function(t) {
      if (t.key) {
        var e = Wy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = er(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Py[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Iu,
    charCode: function(t) {
      return t.type === "keypress" ? er(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? er(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), lb = Te(nb), ib = y({}, ir, {
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
  }), zf = Te(ib), ab = y({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu
  }), rb = Te(ab), ub = y({}, ml, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = Te(ub), sb = y({}, ir, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cb = Te(sb), fb = y({}, ml, {
    newState: 0,
    oldState: 0
  }), db = Te(fb), hb = [9, 13, 27, 32], $u = wn && "CompositionEvent" in window, Vi = null;
  wn && "documentMode" in document && (Vi = document.documentMode);
  var pb = wn && "TextEvent" in window && !Vi, Ef = wn && (!$u || Vi && 8 < Vi && 11 >= Vi), Af = " ", Tf = !1;
  function Cf(t, e) {
    switch (t) {
      case "keyup":
        return hb.indexOf(e.keyCode) !== -1;
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
  function Df(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Jl = !1;
  function mb(t, e) {
    switch (t) {
      case "compositionend":
        return Df(e);
      case "keypress":
        return e.which !== 32 ? null : (Tf = !0, Af);
      case "textInput":
        return t = e.data, t === Af && Tf ? null : t;
      default:
        return null;
    }
  }
  function gb(t, e) {
    if (Jl)
      return t === "compositionend" || !$u && Cf(t, e) ? (t = xf(), tr = Zu = Yn = null, Jl = !1, t) : null;
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
        return Ef && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var yb = {
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
    return e === "input" ? !!yb[t.type] : e === "textarea";
  }
  function Mf(t, e, l, i) {
    Fl ? Kl ? Kl.push(i) : Kl = [i] : Fl = i, e = Fr(e, "onChange"), 0 < e.length && (l = new lr(
      "onChange",
      "change",
      null,
      l,
      i
    ), t.push({ event: l, listeners: e }));
  }
  var Qi = null, Xi = null;
  function bb(t) {
    hp(t, 0);
  }
  function ar(t) {
    var e = Bi(t);
    if (df(e)) return t;
  }
  function Of(t, e) {
    if (t === "change") return e;
  }
  var Rf = !1;
  if (wn) {
    var Wu;
    if (wn) {
      var Pu = "oninput" in document;
      if (!Pu) {
        var Nf = document.createElement("div");
        Nf.setAttribute("oninput", "return;"), Pu = typeof Nf.oninput == "function";
      }
      Wu = Pu;
    } else Wu = !1;
    Rf = Wu && (!document.documentMode || 9 < document.documentMode);
  }
  function Lf() {
    Qi && (Qi.detachEvent("onpropertychange", Uf), Xi = Qi = null);
  }
  function Uf(t) {
    if (t.propertyName === "value" && ar(Xi)) {
      var e = [];
      Mf(
        e,
        Xi,
        t,
        Vu(t)
      ), vf(bb, e);
    }
  }
  function vb(t, e, l) {
    t === "focusin" ? (Lf(), Qi = e, Xi = l, Qi.attachEvent("onpropertychange", Uf)) : t === "focusout" && Lf();
  }
  function xb(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ar(Xi);
  }
  function wb(t, e) {
    if (t === "click") return ar(e);
  }
  function kb(t, e) {
    if (t === "input" || t === "change")
      return ar(e);
  }
  function Sb(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var je = typeof Object.is == "function" ? Object.is : Sb;
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
  function jf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Bf(t, e) {
    var l = jf(t);
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
      l = jf(l);
    }
  }
  function Hf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function qf(t) {
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
  function to(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var zb = wn && "documentMode" in document && 11 >= document.documentMode, Il = null, eo = null, Fi = null, no = !1;
  function Yf(t, e, l) {
    var i = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    no || Il == null || Il !== Wa(i) || (i = Il, "selectionStart" in i && to(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Fi && Zi(Fi, i) || (Fi = i, i = Fr(eo, "onSelect"), 0 < i.length && (e = new lr(
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
  }, lo = {}, Gf = {};
  wn && (Gf = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function yl(t) {
    if (lo[t]) return lo[t];
    if (!$l[t]) return t;
    var e = $l[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Gf)
        return lo[t] = e[l];
    return t;
  }
  var Vf = yl("animationend"), Qf = yl("animationiteration"), Xf = yl("animationstart"), Eb = yl("transitionrun"), Ab = yl("transitionstart"), Tb = yl("transitioncancel"), Zf = yl("transitionend"), Ff = /* @__PURE__ */ new Map(), io = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  io.push("scrollEnd");
  function rn(t, e) {
    Ff.set(t, e), pl(e, [t]);
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
  }, Je = [], Wl = 0, ao = 0;
  function ur() {
    for (var t = Wl, e = ao = Wl = 0; e < t; ) {
      var l = Je[e];
      Je[e++] = null;
      var i = Je[e];
      Je[e++] = null;
      var o = Je[e];
      Je[e++] = null;
      var s = Je[e];
      if (Je[e++] = null, i !== null && o !== null) {
        var g = i.pending;
        g === null ? o.next = o : (o.next = g.next, g.next = o), i.pending = o;
      }
      s !== 0 && Kf(l, o, s);
    }
  }
  function or(t, e, l, i) {
    Je[Wl++] = t, Je[Wl++] = e, Je[Wl++] = l, Je[Wl++] = i, ao |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function ro(t, e, l, i) {
    return or(t, e, l, i), sr(t);
  }
  function bl(t, e) {
    return or(t, null, null, e), sr(t);
  }
  function Kf(t, e, l) {
    t.lanes |= l;
    var i = t.alternate;
    i !== null && (i.lanes |= l);
    for (var o = !1, s = t.return; s !== null; )
      s.childLanes |= l, i = s.alternate, i !== null && (i.childLanes |= l), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (o = !0)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, o && e !== null && (o = 31 - Qt(l), t = s.hiddenUpdates, i = t[o], i === null ? t[o] = [e] : i.push(e), e.lane = l | 536870912), s) : null;
  }
  function sr(t) {
    if (50 < ma)
      throw ma = 0, gs = null, Error(u(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Pl = {};
  function Cb(t, e, l, i) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(t, e, l, i) {
    return new Cb(t, e, l, i);
  }
  function uo(t) {
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
  function Jf(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function cr(t, e, l, i, o, s) {
    var g = 0;
    if (i = t, typeof t == "function") uo(t) && (g = 1);
    else if (typeof t == "string")
      g = R0(
        t,
        l,
        $.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case pt:
          return t = Be(31, l, e, o), t.elementType = pt, t.lanes = s, t;
        case R:
          return vl(l.children, o, s, e);
        case L:
          g = 8, o |= 24;
          break;
        case D:
          return t = Be(12, l, e, o | 2), t.elementType = D, t.lanes = s, t;
        case ot:
          return t = Be(13, l, e, o), t.elementType = ot, t.lanes = s, t;
        case B:
          return t = Be(19, l, e, o), t.elementType = B, t.lanes = s, t;
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
    return e = Be(g, l, e, o), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function vl(t, e, l, i) {
    return t = Be(7, t, i, e), t.lanes = l, t;
  }
  function oo(t, e, l) {
    return t = Be(6, t, null, e), t.lanes = l, t;
  }
  function If(t) {
    var e = Be(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function so(t, e, l) {
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
  var $f = /* @__PURE__ */ new WeakMap();
  function Ie(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = $f.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Xa(e)
      }, $f.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Xa(e)
    };
  }
  var ti = [], ei = 0, fr = null, Ki = 0, $e = [], We = 0, Gn = null, fn = 1, dn = "";
  function Sn(t, e) {
    ti[ei++] = Ki, ti[ei++] = fr, fr = t, Ki = e;
  }
  function Wf(t, e, l) {
    $e[We++] = fn, $e[We++] = dn, $e[We++] = Gn, Gn = t;
    var i = fn;
    t = dn;
    var o = 32 - Qt(i) - 1;
    i &= ~(1 << o), l += 1;
    var s = 32 - Qt(e) + o;
    if (30 < s) {
      var g = o - o % 5;
      s = (i & (1 << g) - 1).toString(32), i >>= g, o -= g, fn = 1 << 32 - Qt(e) + o | l << o | i, dn = s + t;
    } else
      fn = 1 << s | l << o | i, dn = t;
  }
  function co(t) {
    t.return !== null && (Sn(t, 1), Wf(t, 1, 0));
  }
  function fo(t) {
    for (; t === fr; )
      fr = ti[--ei], ti[ei] = null, Ki = ti[--ei], ti[ei] = null;
    for (; t === Gn; )
      Gn = $e[--We], $e[We] = null, dn = $e[--We], $e[We] = null, fn = $e[--We], $e[We] = null;
  }
  function Pf(t, e) {
    $e[We++] = fn, $e[We++] = dn, $e[We++] = Gn, fn = e.id, dn = e.overflow, Gn = t;
  }
  var pe = null, Jt = null, Mt = !1, Vn = null, Pe = !1, ho = Error(u(519));
  function Qn(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ji(Ie(e, t)), ho;
  }
  function td(t) {
    var e = t.stateNode, l = t.type, i = t.memoizedProps;
    switch (e[he] = t, e[Ae] = i, l) {
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
    l = i.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || i.suppressHydrationWarning === !0 || yp(e.textContent, l) ? (i.popover != null && (Tt("beforetoggle", e), Tt("toggle", e)), i.onScroll != null && Tt("scroll", e), i.onScrollEnd != null && Tt("scrollend", e), i.onClick != null && (e.onclick = xn), e = !0) : e = !1, e || Qn(t, !0);
  }
  function ed(t) {
    for (pe = t.return; pe; )
      switch (pe.tag) {
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
          pe = pe.return;
      }
  }
  function ni(t) {
    if (t !== pe) return !1;
    if (!Mt) return ed(t), Mt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Ms(t.type, t.memoizedProps)), l = !l), l && Jt && Qn(t), ed(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Jt = Ap(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Jt = Ap(t);
    } else
      e === 27 ? (e = Jt, il(t.type) ? (t = Us, Us = null, Jt = t) : Jt = e) : Jt = pe ? en(t.stateNode.nextSibling) : null;
    return !0;
  }
  function xl() {
    Jt = pe = null, Mt = !1;
  }
  function po() {
    var t = Vn;
    return t !== null && (Me === null ? Me = t : Me.push.apply(
      Me,
      t
    ), Vn = null), t;
  }
  function Ji(t) {
    Vn === null ? Vn = [t] : Vn.push(t);
  }
  var mo = A(null), wl = null, zn = null;
  function Xn(t, e, l) {
    k(mo, e._currentValue), e._currentValue = l;
  }
  function En(t) {
    t._currentValue = mo.current, Y(mo);
  }
  function go(t, e, l) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function yo(t, e, l, i) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var s = o.dependencies;
      if (s !== null) {
        var g = o.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var v = s;
          s = o;
          for (var z = 0; z < e.length; z++)
            if (v.context === e[z]) {
              s.lanes |= l, v = s.alternate, v !== null && (v.lanes |= l), go(
                s.return,
                l,
                t
              ), i || (g = null);
              break t;
            }
          s = v.next;
        }
      } else if (o.tag === 18) {
        if (g = o.return, g === null) throw Error(u(341));
        g.lanes |= l, s = g.alternate, s !== null && (s.lanes |= l), go(g, l, t), g = null;
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
    for (var o = e, s = !1; o !== null; ) {
      if (!s) {
        if ((o.flags & 524288) !== 0) s = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(u(387));
        if (g = g.memoizedProps, g !== null) {
          var v = o.type;
          je(o.pendingProps.value, g.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (o === dt.current) {
        if (g = o.alternate, g === null) throw Error(u(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ka) : t = [ka]);
      }
      o = o.return;
    }
    t !== null && yo(
      e,
      t,
      l,
      i
    ), e.flags |= 262144;
  }
  function dr(t) {
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
    wl = t, zn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function me(t) {
    return nd(wl, t);
  }
  function hr(t, e) {
    return wl === null && kl(t), nd(t, e);
  }
  function nd(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, zn === null) {
      if (t === null) throw Error(u(308));
      zn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else zn = zn.next = e;
    return l;
  }
  var Db = typeof AbortController < "u" ? AbortController : function() {
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
  }, _b = n.unstable_scheduleCallback, Mb = n.unstable_NormalPriority, ne = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bo() {
    return {
      controller: new Db(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ii(t) {
    t.refCount--, t.refCount === 0 && _b(Mb, function() {
      t.controller.abort();
    });
  }
  var $i = null, vo = 0, ii = 0, ai = null;
  function Ob(t, e) {
    if ($i === null) {
      var l = $i = [];
      vo = 0, ii = ks(), ai = {
        status: "pending",
        value: void 0,
        then: function(i) {
          l.push(i);
        }
      };
    }
    return vo++, e.then(ld, ld), e;
  }
  function ld() {
    if (--vo === 0 && $i !== null) {
      ai !== null && (ai.status = "fulfilled");
      var t = $i;
      $i = null, ii = 0, ai = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Rb(t, e) {
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
  var id = _.S;
  _.S = function(t, e) {
    Yh = we(), typeof e == "object" && e !== null && typeof e.then == "function" && Ob(t, e), id !== null && id(t, e);
  };
  var Sl = A(null);
  function xo() {
    var t = Sl.current;
    return t !== null ? t : Xt.pooledCache;
  }
  function pr(t, e) {
    e === null ? k(Sl, Sl.current) : k(Sl, e.pool);
  }
  function ad() {
    var t = xo();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var ri = Error(u(460)), wo = Error(u(474)), mr = Error(u(542)), gr = { then: function() {
  } };
  function rd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ud(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(xn, xn), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, sd(t), t;
      default:
        if (typeof e.status == "string") e.then(xn, xn);
        else {
          if (t = Xt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, sd(t), t;
        }
        throw El = e, ri;
    }
  }
  function zl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (El = l, ri) : l;
    }
  }
  var El = null;
  function od() {
    if (El === null) throw Error(u(459));
    var t = El;
    return El = null, t;
  }
  function sd(t) {
    if (t === ri || t === mr)
      throw Error(u(483));
  }
  var ui = null, Wi = 0;
  function yr(t) {
    var e = Wi;
    return Wi += 1, ui === null && (ui = []), ud(ui, t, e);
  }
  function Pi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function br(t, e) {
    throw e.$$typeof === w ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(
      u(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function cd(t) {
    function e(C, T) {
      if (t) {
        var M = C.deletions;
        M === null ? (C.deletions = [T], C.flags |= 16) : M.push(T);
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
    function s(C, T, M) {
      return C.index = M, t ? (M = C.alternate, M !== null ? (M = M.index, M < T ? (C.flags |= 67108866, T) : M) : (C.flags |= 67108866, T)) : (C.flags |= 1048576, T);
    }
    function g(C) {
      return t && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, T, M, V) {
      return T === null || T.tag !== 6 ? (T = oo(M, C.mode, V), T.return = C, T) : (T = o(T, M), T.return = C, T);
    }
    function z(C, T, M, V) {
      var ht = M.type;
      return ht === R ? q(
        C,
        T,
        M.props.children,
        V,
        M.key
      ) : T !== null && (T.elementType === ht || typeof ht == "object" && ht !== null && ht.$$typeof === J && zl(ht) === T.type) ? (T = o(T, M.props), Pi(T, M), T.return = C, T) : (T = cr(
        M.type,
        M.key,
        M.props,
        null,
        C.mode,
        V
      ), Pi(T, M), T.return = C, T);
    }
    function O(C, T, M, V) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== M.containerInfo || T.stateNode.implementation !== M.implementation ? (T = so(M, C.mode, V), T.return = C, T) : (T = o(T, M.children || []), T.return = C, T);
    }
    function q(C, T, M, V, ht) {
      return T === null || T.tag !== 7 ? (T = vl(
        M,
        C.mode,
        V,
        ht
      ), T.return = C, T) : (T = o(T, M), T.return = C, T);
    }
    function Q(C, T, M) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = oo(
          "" + T,
          C.mode,
          M
        ), T.return = C, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case x:
            return M = cr(
              T.type,
              T.key,
              T.props,
              null,
              C.mode,
              M
            ), Pi(M, T), M.return = C, M;
          case E:
            return T = so(
              T,
              C.mode,
              M
            ), T.return = C, T;
          case J:
            return T = zl(T), Q(C, T, M);
        }
        if (I(T) || tt(T))
          return T = vl(
            T,
            C.mode,
            M,
            null
          ), T.return = C, T;
        if (typeof T.then == "function")
          return Q(C, yr(T), M);
        if (T.$$typeof === H)
          return Q(
            C,
            hr(C, T),
            M
          );
        br(C, T);
      }
      return null;
    }
    function N(C, T, M, V) {
      var ht = T !== null ? T.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return ht !== null ? null : v(C, T, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            return M.key === ht ? z(C, T, M, V) : null;
          case E:
            return M.key === ht ? O(C, T, M, V) : null;
          case J:
            return M = zl(M), N(C, T, M, V);
        }
        if (I(M) || tt(M))
          return ht !== null ? null : q(C, T, M, V, null);
        if (typeof M.then == "function")
          return N(
            C,
            T,
            yr(M),
            V
          );
        if (M.$$typeof === H)
          return N(
            C,
            T,
            hr(C, M),
            V
          );
        br(C, M);
      }
      return null;
    }
    function j(C, T, M, V, ht) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return C = C.get(M) || null, v(T, C, "" + V, ht);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case x:
            return C = C.get(
              V.key === null ? M : V.key
            ) || null, z(T, C, V, ht);
          case E:
            return C = C.get(
              V.key === null ? M : V.key
            ) || null, O(T, C, V, ht);
          case J:
            return V = zl(V), j(
              C,
              T,
              M,
              V,
              ht
            );
        }
        if (I(V) || tt(V))
          return C = C.get(M) || null, q(T, C, V, ht, null);
        if (typeof V.then == "function")
          return j(
            C,
            T,
            M,
            yr(V),
            ht
          );
        if (V.$$typeof === H)
          return j(
            C,
            T,
            M,
            hr(T, V),
            ht
          );
        br(T, V);
      }
      return null;
    }
    function at(C, T, M, V) {
      for (var ht = null, Nt = null, st = T, wt = T = 0, _t = null; st !== null && wt < M.length; wt++) {
        st.index > wt ? (_t = st, st = null) : _t = st.sibling;
        var Lt = N(
          C,
          st,
          M[wt],
          V
        );
        if (Lt === null) {
          st === null && (st = _t);
          break;
        }
        t && st && Lt.alternate === null && e(C, st), T = s(Lt, T, wt), Nt === null ? ht = Lt : Nt.sibling = Lt, Nt = Lt, st = _t;
      }
      if (wt === M.length)
        return l(C, st), Mt && Sn(C, wt), ht;
      if (st === null) {
        for (; wt < M.length; wt++)
          st = Q(C, M[wt], V), st !== null && (T = s(
            st,
            T,
            wt
          ), Nt === null ? ht = st : Nt.sibling = st, Nt = st);
        return Mt && Sn(C, wt), ht;
      }
      for (st = i(st); wt < M.length; wt++)
        _t = j(
          st,
          C,
          wt,
          M[wt],
          V
        ), _t !== null && (t && _t.alternate !== null && st.delete(
          _t.key === null ? wt : _t.key
        ), T = s(
          _t,
          T,
          wt
        ), Nt === null ? ht = _t : Nt.sibling = _t, Nt = _t);
      return t && st.forEach(function(sl) {
        return e(C, sl);
      }), Mt && Sn(C, wt), ht;
    }
    function gt(C, T, M, V) {
      if (M == null) throw Error(u(151));
      for (var ht = null, Nt = null, st = T, wt = T = 0, _t = null, Lt = M.next(); st !== null && !Lt.done; wt++, Lt = M.next()) {
        st.index > wt ? (_t = st, st = null) : _t = st.sibling;
        var sl = N(C, st, Lt.value, V);
        if (sl === null) {
          st === null && (st = _t);
          break;
        }
        t && st && sl.alternate === null && e(C, st), T = s(sl, T, wt), Nt === null ? ht = sl : Nt.sibling = sl, Nt = sl, st = _t;
      }
      if (Lt.done)
        return l(C, st), Mt && Sn(C, wt), ht;
      if (st === null) {
        for (; !Lt.done; wt++, Lt = M.next())
          Lt = Q(C, Lt.value, V), Lt !== null && (T = s(Lt, T, wt), Nt === null ? ht = Lt : Nt.sibling = Lt, Nt = Lt);
        return Mt && Sn(C, wt), ht;
      }
      for (st = i(st); !Lt.done; wt++, Lt = M.next())
        Lt = j(st, C, wt, Lt.value, V), Lt !== null && (t && Lt.alternate !== null && st.delete(Lt.key === null ? wt : Lt.key), T = s(Lt, T, wt), Nt === null ? ht = Lt : Nt.sibling = Lt, Nt = Lt);
      return t && st.forEach(function(Q0) {
        return e(C, Q0);
      }), Mt && Sn(C, wt), ht;
    }
    function Gt(C, T, M, V) {
      if (typeof M == "object" && M !== null && M.type === R && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            t: {
              for (var ht = M.key; T !== null; ) {
                if (T.key === ht) {
                  if (ht = M.type, ht === R) {
                    if (T.tag === 7) {
                      l(
                        C,
                        T.sibling
                      ), V = o(
                        T,
                        M.props.children
                      ), V.return = C, C = V;
                      break t;
                    }
                  } else if (T.elementType === ht || typeof ht == "object" && ht !== null && ht.$$typeof === J && zl(ht) === T.type) {
                    l(
                      C,
                      T.sibling
                    ), V = o(T, M.props), Pi(V, M), V.return = C, C = V;
                    break t;
                  }
                  l(C, T);
                  break;
                } else e(C, T);
                T = T.sibling;
              }
              M.type === R ? (V = vl(
                M.props.children,
                C.mode,
                V,
                M.key
              ), V.return = C, C = V) : (V = cr(
                M.type,
                M.key,
                M.props,
                null,
                C.mode,
                V
              ), Pi(V, M), V.return = C, C = V);
            }
            return g(C);
          case E:
            t: {
              for (ht = M.key; T !== null; ) {
                if (T.key === ht)
                  if (T.tag === 4 && T.stateNode.containerInfo === M.containerInfo && T.stateNode.implementation === M.implementation) {
                    l(
                      C,
                      T.sibling
                    ), V = o(T, M.children || []), V.return = C, C = V;
                    break t;
                  } else {
                    l(C, T);
                    break;
                  }
                else e(C, T);
                T = T.sibling;
              }
              V = so(M, C.mode, V), V.return = C, C = V;
            }
            return g(C);
          case J:
            return M = zl(M), Gt(
              C,
              T,
              M,
              V
            );
        }
        if (I(M))
          return at(
            C,
            T,
            M,
            V
          );
        if (tt(M)) {
          if (ht = tt(M), typeof ht != "function") throw Error(u(150));
          return M = ht.call(M), gt(
            C,
            T,
            M,
            V
          );
        }
        if (typeof M.then == "function")
          return Gt(
            C,
            T,
            yr(M),
            V
          );
        if (M.$$typeof === H)
          return Gt(
            C,
            T,
            hr(C, M),
            V
          );
        br(C, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, T !== null && T.tag === 6 ? (l(C, T.sibling), V = o(T, M), V.return = C, C = V) : (l(C, T), V = oo(M, C.mode, V), V.return = C, C = V), g(C)) : l(C, T);
    }
    return function(C, T, M, V) {
      try {
        Wi = 0;
        var ht = Gt(
          C,
          T,
          M,
          V
        );
        return ui = null, ht;
      } catch (st) {
        if (st === ri || st === mr) throw st;
        var Nt = Be(29, st, null, C.mode);
        return Nt.lanes = V, Nt.return = C, Nt;
      }
    };
  }
  var Al = cd(!0), fd = cd(!1), Zn = !1;
  function ko(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function So(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Fn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(t, e, l) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ut & 2) !== 0) {
      var o = i.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), i.pending = e, e = sr(t), Kf(t, null, l), e;
    }
    return or(t, i, e, l), sr(t);
  }
  function ta(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, l |= i, e.lanes = l, ef(t, l);
    }
  }
  function zo(t, e) {
    var l = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, l === i)) {
      var o = null, s = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          s === null ? o = s = g : s = s.next = g, l = l.next;
        } while (l !== null);
        s === null ? o = s = e : s = s.next = e;
      } else o = s = e;
      l = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Eo = !1;
  function ea() {
    if (Eo) {
      var t = ai;
      if (t !== null) throw t;
    }
  }
  function na(t, e, l, i) {
    Eo = !1;
    var o = t.updateQueue;
    Zn = !1;
    var s = o.firstBaseUpdate, g = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var z = v, O = z.next;
      z.next = null, g === null ? s = O : g.next = O, g = z;
      var q = t.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== g && (v === null ? q.firstBaseUpdate = O : v.next = O, q.lastBaseUpdate = z));
    }
    if (s !== null) {
      var Q = o.baseState;
      g = 0, q = O = z = null, v = s;
      do {
        var N = v.lane & -536870913, j = N !== v.lane;
        if (j ? (Dt & N) === N : (i & N) === N) {
          N !== 0 && N === ii && (Eo = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var at = t, gt = v;
            N = e;
            var Gt = l;
            switch (gt.tag) {
              case 1:
                if (at = gt.payload, typeof at == "function") {
                  Q = at.call(Gt, Q, N);
                  break t;
                }
                Q = at;
                break t;
              case 3:
                at.flags = at.flags & -65537 | 128;
              case 0:
                if (at = gt.payload, N = typeof at == "function" ? at.call(Gt, Q, N) : at, N == null) break t;
                Q = y({}, Q, N);
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
          }, q === null ? (O = q = j, z = Q) : q = q.next = j, g |= N;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          j = v, v = j.next, j.next = null, o.lastBaseUpdate = j, o.shared.pending = null;
        }
      } while (!0);
      q === null && (z = Q), o.baseState = z, o.firstBaseUpdate = O, o.lastBaseUpdate = q, s === null && (o.shared.lanes = 0), Pn |= g, t.lanes = g, t.memoizedState = Q;
    }
  }
  function dd(t, e) {
    if (typeof t != "function")
      throw Error(u(191, t));
    t.call(e);
  }
  function hd(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        dd(l[t], e);
  }
  var oi = A(null), vr = A(0);
  function pd(t, e) {
    t = Nn, k(vr, t), k(oi, e), Nn = t | e.baseLanes;
  }
  function Ao() {
    k(vr, Nn), k(oi, oi.current);
  }
  function To() {
    Nn = vr.current, Y(oi), Y(vr);
  }
  var He = A(null), tn = null;
  function Jn(t) {
    var e = t.alternate;
    k(te, te.current & 1), k(He, t), tn === null && (e === null || oi.current !== null || e.memoizedState !== null) && (tn = t);
  }
  function Co(t) {
    k(te, te.current), k(He, t), tn === null && (tn = t);
  }
  function md(t) {
    t.tag === 22 ? (k(te, te.current), k(He, t), tn === null && (tn = t)) : In();
  }
  function In() {
    k(te, te.current), k(He, He.current);
  }
  function qe(t) {
    Y(He), tn === t && (tn = null), Y(te);
  }
  var te = A(0);
  function xr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ns(l) || Ls(l)))
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
  var An = 0, vt = null, qt = null, le = null, wr = !1, si = !1, Tl = !1, kr = 0, la = 0, ci = null, Nb = 0;
  function Wt() {
    throw Error(u(321));
  }
  function Do(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!je(t[l], e[l])) return !1;
    return !0;
  }
  function _o(t, e, l, i, o, s) {
    return An = s, vt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _.H = t === null || t.memoizedState === null ? Wd : Xo, Tl = !1, s = l(i, o), Tl = !1, si && (s = yd(
      e,
      l,
      i,
      o
    )), gd(t), s;
  }
  function gd(t) {
    _.H = ra;
    var e = qt !== null && qt.next !== null;
    if (An = 0, le = qt = vt = null, wr = !1, la = 0, ci = null, e) throw Error(u(300));
    t === null || ie || (t = t.dependencies, t !== null && dr(t) && (ie = !0));
  }
  function yd(t, e, l, i) {
    vt = t;
    var o = 0;
    do {
      if (si && (ci = null), la = 0, si = !1, 25 <= o) throw Error(u(301));
      if (o += 1, le = qt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      _.H = Pd, s = e(l, i);
    } while (si);
    return s;
  }
  function Lb() {
    var t = _.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ia(e) : e, t = t.useState()[0], (qt !== null ? qt.memoizedState : null) !== t && (vt.flags |= 1024), e;
  }
  function Mo() {
    var t = kr !== 0;
    return kr = 0, t;
  }
  function Oo(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Ro(t) {
    if (wr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      wr = !1;
    }
    An = 0, le = qt = vt = null, si = !1, la = kr = 0, ci = null;
  }
  function Se() {
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
  function Sr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ia(t) {
    var e = la;
    return la += 1, ci === null && (ci = []), t = ud(ci, t, e), e = vt, (le === null ? e.memoizedState : le.next) === null && (e = e.alternate, _.H = e === null || e.memoizedState === null ? Wd : Xo), t;
  }
  function zr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ia(t);
      if (t.$$typeof === H) return me(t);
    }
    throw Error(u(438, String(t)));
  }
  function No(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Sr(), vt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), i = 0; i < t; i++)
        l[i] = U;
    return e.index++, l;
  }
  function Tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Er(t) {
    var e = ee();
    return Lo(e, qt, t);
  }
  function Lo(t, e, l) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = l;
    var o = t.baseQueue, s = i.pending;
    if (s !== null) {
      if (o !== null) {
        var g = o.next;
        o.next = s.next, s.next = g;
      }
      e.baseQueue = o = s, i.pending = null;
    }
    if (s = t.baseState, o === null) t.memoizedState = s;
    else {
      e = o.next;
      var v = g = null, z = null, O = e, q = !1;
      do {
        var Q = O.lane & -536870913;
        if (Q !== O.lane ? (Dt & Q) === Q : (An & Q) === Q) {
          var N = O.revertLane;
          if (N === 0)
            z !== null && (z = z.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), Q === ii && (q = !0);
          else if ((An & N) === N) {
            O = O.next, N === ii && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, z === null ? (v = z = Q, g = s) : z = z.next = Q, vt.lanes |= N, Pn |= N;
          Q = O.action, Tl && l(s, Q), s = O.hasEagerState ? O.eagerState : l(s, Q);
        } else
          N = {
            lane: Q,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, z === null ? (v = z = N, g = s) : z = z.next = N, vt.lanes |= Q, Pn |= Q;
        O = O.next;
      } while (O !== null && O !== e);
      if (z === null ? g = s : z.next = v, !je(s, t.memoizedState) && (ie = !0, q && (l = ai, l !== null)))
        throw l;
      t.memoizedState = s, t.baseState = g, t.baseQueue = z, i.lastRenderedState = s;
    }
    return o === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Uo(t) {
    var e = ee(), l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = t;
    var i = l.dispatch, o = l.pending, s = e.memoizedState;
    if (o !== null) {
      l.pending = null;
      var g = o = o.next;
      do
        s = t(s, g.action), g = g.next;
      while (g !== o);
      je(s, e.memoizedState) || (ie = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), l.lastRenderedState = s;
    }
    return [s, i];
  }
  function bd(t, e, l) {
    var i = vt, o = ee(), s = Mt;
    if (s) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = e();
    var g = !je(
      (qt || o).memoizedState,
      l
    );
    if (g && (o.memoizedState = l, ie = !0), o = o.queue, Ho(wd.bind(null, i, o, t), [
      t
    ]), o.getSnapshot !== e || g || le !== null && le.memoizedState.tag & 1) {
      if (i.flags |= 2048, fi(
        9,
        { destroy: void 0 },
        xd.bind(
          null,
          i,
          o,
          l,
          e
        ),
        null
      ), Xt === null) throw Error(u(349));
      s || (An & 127) !== 0 || vd(i, e, l);
    }
    return l;
  }
  function vd(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = vt.updateQueue, e === null ? (e = Sr(), vt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function xd(t, e, l, i) {
    e.value = l, e.getSnapshot = i, kd(e) && Sd(t);
  }
  function wd(t, e, l) {
    return l(function() {
      kd(e) && Sd(t);
    });
  }
  function kd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !je(t, l);
    } catch {
      return !0;
    }
  }
  function Sd(t) {
    var e = bl(t, 2);
    e !== null && Oe(e, t, 2);
  }
  function jo(t) {
    var e = Se();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Tl) {
        Ee(!0);
        try {
          l();
        } finally {
          Ee(!1);
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
  function zd(t, e, l, i) {
    return t.baseState = l, Lo(
      t,
      qt,
      typeof i == "function" ? i : Tn
    );
  }
  function Ub(t, e, l, i, o) {
    if (Cr(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(g) {
          s.listeners.push(g);
        }
      };
      _.T !== null ? l(!0) : s.isTransition = !1, i(s), l = e.pending, l === null ? (s.next = e.pending = s, Ed(e, s)) : (s.next = l.next, e.pending = l.next = s);
    }
  }
  function Ed(t, e) {
    var l = e.action, i = e.payload, o = t.state;
    if (e.isTransition) {
      var s = _.T, g = {};
      _.T = g;
      try {
        var v = l(o, i), z = _.S;
        z !== null && z(g, v), Ad(t, e, v);
      } catch (O) {
        Bo(t, e, O);
      } finally {
        s !== null && g.types !== null && (s.types = g.types), _.T = s;
      }
    } else
      try {
        s = l(o, i), Ad(t, e, s);
      } catch (O) {
        Bo(t, e, O);
      }
  }
  function Ad(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(i) {
        Td(t, e, i);
      },
      function(i) {
        return Bo(t, e, i);
      }
    ) : Td(t, e, l);
  }
  function Td(t, e, l) {
    e.status = "fulfilled", e.value = l, Cd(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Ed(t, l)));
  }
  function Bo(t, e, l) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = l, Cd(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function Cd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Dd(t, e) {
    return e;
  }
  function _d(t, e) {
    if (Mt) {
      var l = Xt.formState;
      if (l !== null) {
        t: {
          var i = vt;
          if (Mt) {
            if (Jt) {
              e: {
                for (var o = Jt, s = Pe; o.nodeType !== 8; ) {
                  if (!s) {
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
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Jt = en(
                  o.nextSibling
                ), i = o.data === "F!";
                break t;
              }
            }
            Qn(i);
          }
          i = !1;
        }
        i && (e = l[0]);
      }
    }
    return l = Se(), l.memoizedState = l.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dd,
      lastRenderedState: e
    }, l.queue = i, l = Jd.bind(
      null,
      vt,
      i
    ), i.dispatch = l, i = jo(!1), s = Qo.bind(
      null,
      vt,
      !1,
      i.queue
    ), i = Se(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = o, l = Ub.bind(
      null,
      vt,
      o,
      s,
      l
    ), o.dispatch = l, i.memoizedState = t, [e, l, !1];
  }
  function Md(t) {
    var e = ee();
    return Od(e, qt, t);
  }
  function Od(t, e, l) {
    if (e = Lo(
      t,
      e,
      Dd
    )[0], t = Er(Tn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = ia(e);
      } catch (g) {
        throw g === ri ? mr : g;
      }
    else i = e;
    e = ee();
    var o = e.queue, s = o.dispatch;
    return l !== e.memoizedState && (vt.flags |= 2048, fi(
      9,
      { destroy: void 0 },
      jb.bind(null, o, l),
      null
    )), [i, s, t];
  }
  function jb(t, e) {
    t.action = e;
  }
  function Rd(t) {
    var e = ee(), l = qt;
    if (l !== null)
      return Od(e, l, t);
    ee(), e = e.memoizedState, l = ee();
    var i = l.queue.dispatch;
    return l.memoizedState = t, [e, i, !1];
  }
  function fi(t, e, l, i) {
    return t = { tag: t, create: l, deps: i, inst: e, next: null }, e = vt.updateQueue, e === null && (e = Sr(), vt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (i = l.next, l.next = t, t.next = i, e.lastEffect = t), t;
  }
  function Nd() {
    return ee().memoizedState;
  }
  function Ar(t, e, l, i) {
    var o = Se();
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
    var s = o.memoizedState.inst;
    qt !== null && i !== null && Do(i, qt.memoizedState.deps) ? o.memoizedState = fi(e, s, l, i) : (vt.flags |= t, o.memoizedState = fi(
      1 | e,
      s,
      l,
      i
    ));
  }
  function Ld(t, e) {
    Ar(8390656, 8, t, e);
  }
  function Ho(t, e) {
    Tr(2048, 8, t, e);
  }
  function Bb(t) {
    vt.flags |= 4;
    var e = vt.updateQueue;
    if (e === null)
      e = Sr(), vt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Ud(t) {
    var e = ee().memoizedState;
    return Bb({ ref: e, nextImpl: t }), function() {
      if ((Ut & 2) !== 0) throw Error(u(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function jd(t, e) {
    return Tr(4, 2, t, e);
  }
  function Bd(t, e) {
    return Tr(4, 4, t, e);
  }
  function Hd(t, e) {
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
  function qd(t, e, l) {
    l = l != null ? l.concat([t]) : null, Tr(4, 4, Hd.bind(null, e, t), l);
  }
  function qo() {
  }
  function Yd(t, e) {
    var l = ee();
    e = e === void 0 ? null : e;
    var i = l.memoizedState;
    return e !== null && Do(e, i[1]) ? i[0] : (l.memoizedState = [t, e], t);
  }
  function Gd(t, e) {
    var l = ee();
    e = e === void 0 ? null : e;
    var i = l.memoizedState;
    if (e !== null && Do(e, i[1]))
      return i[0];
    if (i = t(), Tl) {
      Ee(!0);
      try {
        t();
      } finally {
        Ee(!1);
      }
    }
    return l.memoizedState = [i, e], i;
  }
  function Yo(t, e, l) {
    return l === void 0 || (An & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Vh(), vt.lanes |= t, Pn |= t, l);
  }
  function Vd(t, e, l, i) {
    return je(l, e) ? l : oi.current !== null ? (t = Yo(t, l, i), je(t, e) || (ie = !0), t) : (An & 42) === 0 || (An & 1073741824) !== 0 && (Dt & 261930) === 0 ? (ie = !0, t.memoizedState = l) : (t = Vh(), vt.lanes |= t, Pn |= t, e);
  }
  function Qd(t, e, l, i, o) {
    var s = F.p;
    F.p = s !== 0 && 8 > s ? s : 8;
    var g = _.T, v = {};
    _.T = v, Qo(t, !1, e, l);
    try {
      var z = o(), O = _.S;
      if (O !== null && O(v, z), z !== null && typeof z == "object" && typeof z.then == "function") {
        var q = Rb(
          z,
          i
        );
        aa(
          t,
          e,
          q,
          Ve(t)
        );
      } else
        aa(
          t,
          e,
          i,
          Ve(t)
        );
    } catch (Q) {
      aa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Q },
        Ve()
      );
    } finally {
      F.p = s, g !== null && v.types !== null && (g.types = v.types), _.T = g;
    }
  }
  function Hb() {
  }
  function Go(t, e, l, i) {
    if (t.tag !== 5) throw Error(u(476));
    var o = Xd(t).queue;
    Qd(
      t,
      o,
      e,
      X,
      l === null ? Hb : function() {
        return Zd(t), l(i);
      }
    );
  }
  function Xd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: X
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
  function Zd(t) {
    var e = Xd(t);
    e.next === null && (e = t.alternate.memoizedState), aa(
      t,
      e.next.queue,
      {},
      Ve()
    );
  }
  function Vo() {
    return me(ka);
  }
  function Fd() {
    return ee().memoizedState;
  }
  function Kd() {
    return ee().memoizedState;
  }
  function qb(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ve();
          t = Fn(l);
          var i = Kn(e, t, l);
          i !== null && (Oe(i, e, l), ta(i, e, l)), e = { cache: bo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Yb(t, e, l) {
    var i = Ve();
    l = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(t) ? Id(e, l) : (l = ro(t, e, l, i), l !== null && (Oe(l, t, i), $d(l, e, i)));
  }
  function Jd(t, e, l) {
    var i = Ve();
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
    if (Cr(t)) Id(e, o);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null))
        try {
          var g = e.lastRenderedState, v = s(g, l);
          if (o.hasEagerState = !0, o.eagerState = v, je(v, g))
            return or(t, e, o, 0), Xt === null && ur(), !1;
        } catch {
        }
      if (l = ro(t, e, o, i), l !== null)
        return Oe(l, t, i), $d(l, e, i), !0;
    }
    return !1;
  }
  function Qo(t, e, l, i) {
    if (i = {
      lane: 2,
      revertLane: ks(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(t)) {
      if (e) throw Error(u(479));
    } else
      e = ro(
        t,
        l,
        i,
        2
      ), e !== null && Oe(e, t, 2);
  }
  function Cr(t) {
    var e = t.alternate;
    return t === vt || e !== null && e === vt;
  }
  function Id(t, e) {
    si = wr = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function $d(t, e, l) {
    if ((l & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, l |= i, e.lanes = l, ef(t, l);
    }
  }
  var ra = {
    readContext: me,
    use: zr,
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
  var Wd = {
    readContext: me,
    use: zr,
    useCallback: function(t, e) {
      return Se().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: me,
    useEffect: Ld,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Ar(
        4194308,
        4,
        Hd.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Ar(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ar(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Se();
      e = e === void 0 ? null : e;
      var i = t();
      if (Tl) {
        Ee(!0);
        try {
          t();
        } finally {
          Ee(!1);
        }
      }
      return l.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, l) {
      var i = Se();
      if (l !== void 0) {
        var o = l(e);
        if (Tl) {
          Ee(!0);
          try {
            l(e);
          } finally {
            Ee(!1);
          }
        }
      } else o = e;
      return i.memoizedState = i.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, i.queue = t, t = t.dispatch = Yb.bind(
        null,
        vt,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = Se();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = jo(t);
      var e = t.queue, l = Jd.bind(null, vt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: qo,
    useDeferredValue: function(t, e) {
      var l = Se();
      return Yo(l, t, e);
    },
    useTransition: function() {
      var t = jo(!1);
      return t = Qd.bind(
        null,
        vt,
        t.queue,
        !0,
        !1
      ), Se().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var i = vt, o = Se();
      if (Mt) {
        if (l === void 0)
          throw Error(u(407));
        l = l();
      } else {
        if (l = e(), Xt === null)
          throw Error(u(349));
        (Dt & 127) !== 0 || vd(i, e, l);
      }
      o.memoizedState = l;
      var s = { value: l, getSnapshot: e };
      return o.queue = s, Ld(wd.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, fi(
        9,
        { destroy: void 0 },
        xd.bind(
          null,
          i,
          s,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = Se(), e = Xt.identifierPrefix;
      if (Mt) {
        var l = dn, i = fn;
        l = (i & ~(1 << 32 - Qt(i) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = kr++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Nb++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Vo,
    useFormState: _d,
    useActionState: _d,
    useOptimistic: function(t) {
      var e = Se();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Qo.bind(
        null,
        vt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: No,
    useCacheRefresh: function() {
      return Se().memoizedState = qb.bind(
        null,
        vt
      );
    },
    useEffectEvent: function(t) {
      var e = Se(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Ut & 2) !== 0)
          throw Error(u(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Xo = {
    readContext: me,
    use: zr,
    useCallback: Yd,
    useContext: me,
    useEffect: Ho,
    useImperativeHandle: qd,
    useInsertionEffect: jd,
    useLayoutEffect: Bd,
    useMemo: Gd,
    useReducer: Er,
    useRef: Nd,
    useState: function() {
      return Er(Tn);
    },
    useDebugValue: qo,
    useDeferredValue: function(t, e) {
      var l = ee();
      return Vd(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Er(Tn)[0], e = ee().memoizedState;
      return [
        typeof t == "boolean" ? t : ia(t),
        e
      ];
    },
    useSyncExternalStore: bd,
    useId: Fd,
    useHostTransitionStatus: Vo,
    useFormState: Md,
    useActionState: Md,
    useOptimistic: function(t, e) {
      var l = ee();
      return zd(l, qt, t, e);
    },
    useMemoCache: No,
    useCacheRefresh: Kd
  };
  Xo.useEffectEvent = Ud;
  var Pd = {
    readContext: me,
    use: zr,
    useCallback: Yd,
    useContext: me,
    useEffect: Ho,
    useImperativeHandle: qd,
    useInsertionEffect: jd,
    useLayoutEffect: Bd,
    useMemo: Gd,
    useReducer: Uo,
    useRef: Nd,
    useState: function() {
      return Uo(Tn);
    },
    useDebugValue: qo,
    useDeferredValue: function(t, e) {
      var l = ee();
      return qt === null ? Yo(l, t, e) : Vd(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Uo(Tn)[0], e = ee().memoizedState;
      return [
        typeof t == "boolean" ? t : ia(t),
        e
      ];
    },
    useSyncExternalStore: bd,
    useId: Fd,
    useHostTransitionStatus: Vo,
    useFormState: Rd,
    useActionState: Rd,
    useOptimistic: function(t, e) {
      var l = ee();
      return qt !== null ? zd(l, qt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: No,
    useCacheRefresh: Kd
  };
  Pd.useEffectEvent = Ud;
  function Zo(t, e, l, i) {
    e = t.memoizedState, l = l(i, e), l = l == null ? e : y({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Fo = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var i = Ve(), o = Fn(i);
      o.payload = e, l != null && (o.callback = l), e = Kn(t, o, i), e !== null && (Oe(e, t, i), ta(e, t, i));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var i = Ve(), o = Fn(i);
      o.tag = 1, o.payload = e, l != null && (o.callback = l), e = Kn(t, o, i), e !== null && (Oe(e, t, i), ta(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ve(), i = Fn(l);
      i.tag = 2, e != null && (i.callback = e), e = Kn(t, i, l), e !== null && (Oe(e, t, l), ta(e, t, l));
    }
  };
  function th(t, e, l, i, o, s, g) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, g) : e.prototype && e.prototype.isPureReactComponent ? !Zi(l, i) || !Zi(o, s) : !0;
  }
  function eh(t, e, l, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, i), e.state !== t && Fo.enqueueReplaceState(e, e.state, null);
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
  function nh(t) {
    rr(t);
  }
  function lh(t) {
    console.error(t);
  }
  function ih(t) {
    rr(t);
  }
  function Dr(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function ah(t, e, l) {
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
    return l = Fn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Dr(t, e);
    }, l;
  }
  function rh(t) {
    return t = Fn(t), t.tag = 3, t;
  }
  function uh(t, e, l, i) {
    var o = l.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = i.value;
      t.payload = function() {
        return o(s);
      }, t.callback = function() {
        ah(e, l, i);
      };
    }
    var g = l.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
      ah(e, l, i), typeof o != "function" && (tl === null ? tl = /* @__PURE__ */ new Set([this]) : tl.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Gb(t, e, l, i, o) {
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
            return tn === null ? Yr() : l.alternate === null && Pt === 0 && (Pt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, i === gr ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), vs(t, i, o)), !1;
          case 22:
            return l.flags |= 65536, i === gr ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : l.add(i)), vs(t, i, o)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return vs(t, i, o), Yr(), !1;
    }
    if (Mt)
      return e = He.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, i !== ho && (t = Error(u(422), { cause: i }), Ji(Ie(t, l)))) : (i !== ho && (e = Error(u(423), {
        cause: i
      }), Ji(
        Ie(e, l)
      )), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, i = Ie(i, l), o = Ko(
        t.stateNode,
        i,
        o
      ), zo(t, o), Pt !== 4 && (Pt = 2)), !1;
    var s = Error(u(520), { cause: i });
    if (s = Ie(s, l), pa === null ? pa = [s] : pa.push(s), Pt !== 4 && (Pt = 2), e === null) return !0;
    i = Ie(i, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = o & -o, l.lanes |= t, t = Ko(l.stateNode, i, t), zo(l, t), !1;
        case 1:
          if (e = l.type, s = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (tl === null || !tl.has(s))))
            return l.flags |= 65536, o &= -o, l.lanes |= o, o = rh(o), uh(
              o,
              t,
              l,
              i
            ), zo(l, o), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Jo = Error(u(461)), ie = !1;
  function ge(t, e, l, i) {
    e.child = t === null ? fd(e, null, l, i) : Al(
      e,
      t.child,
      l,
      i
    );
  }
  function oh(t, e, l, i, o) {
    l = l.render;
    var s = e.ref;
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
      s,
      o
    ), v = Mo(), t !== null && !ie ? (Oo(t, e, o), Cn(t, e, o)) : (Mt && v && co(e), e.flags |= 1, ge(t, e, i, o), e.child);
  }
  function sh(t, e, l, i, o) {
    if (t === null) {
      var s = l.type;
      return typeof s == "function" && !uo(s) && s.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = s, ch(
        t,
        e,
        s,
        i,
        o
      )) : (t = cr(
        l.type,
        null,
        i,
        e,
        e.mode,
        o
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !ls(t, o)) {
      var g = s.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zi, l(g, i) && t.ref === e.ref)
        return Cn(t, e, o);
    }
    return e.flags |= 1, t = kn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ch(t, e, l, i, o) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Zi(s, i) && t.ref === e.ref)
        if (ie = !1, e.pendingProps = i = s, ls(t, o))
          (t.flags & 131072) !== 0 && (ie = !0);
        else
          return e.lanes = t.lanes, Cn(t, e, o);
    }
    return Io(
      t,
      e,
      l,
      i,
      o
    );
  }
  function fh(t, e, l, i) {
    var o = i.children, s = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | l : l, t !== null) {
          for (i = e.child = t.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~s;
        } else i = 0, e.child = null;
        return dh(
          t,
          e,
          s,
          l,
          i
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && pr(
          e,
          s !== null ? s.cachePool : null
        ), s !== null ? pd(e, s) : Ao(), md(e);
      else
        return i = e.lanes = 536870912, dh(
          t,
          e,
          s !== null ? s.baseLanes | l : l,
          l,
          i
        );
    } else
      s !== null ? (pr(e, s.cachePool), pd(e, s), In(), e.memoizedState = null) : (t !== null && pr(e, null), Ao(), In());
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
  function dh(t, e, l, i, o) {
    var s = xo();
    return s = s === null ? null : { parent: ne._currentValue, pool: s }, e.memoizedState = {
      baseLanes: l,
      cachePool: s
    }, t !== null && pr(e, null), Ao(), md(e), t !== null && li(t, e, i, !0), e.childLanes = o, null;
  }
  function _r(t, e) {
    return e = Or(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function hh(t, e, l) {
    return Al(e, t.child, null, l), t = _r(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function Vb(t, e, l) {
    var i = e.pendingProps, o = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Mt) {
        if (i.mode === "hidden")
          return t = _r(e, i), e.lanes = 536870912, ua(null, t);
        if (Co(e), (t = Jt) ? (t = Ep(
          t,
          Pe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gn !== null ? { id: fn, overflow: dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = If(t), l.return = e, e.child = l, pe = e, Jt = null)) : t = null, t === null) throw Qn(e);
        return e.lanes = 536870912, null;
      }
      return _r(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var g = s.dehydrated;
      if (Co(e), o)
        if (e.flags & 256)
          e.flags &= -257, e = hh(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
      else if (ie || li(t, e, l, !1), o = (l & t.childLanes) !== 0, ie || o) {
        if (i = Xt, i !== null && (g = nf(i, l), g !== 0 && g !== s.retryLane))
          throw s.retryLane = g, bl(t, g), Oe(i, t, g), Jo;
        Yr(), e = hh(
          t,
          e,
          l
        );
      } else
        t = s.treeContext, Jt = en(g.nextSibling), pe = e, Mt = !0, Vn = null, Pe = !1, t !== null && Pf(e, t), e = _r(e, i), e.flags |= 4096;
      return e;
    }
    return t = kn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Mr(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(u(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Io(t, e, l, i, o) {
    return kl(e), l = _o(
      t,
      e,
      l,
      i,
      void 0,
      o
    ), i = Mo(), t !== null && !ie ? (Oo(t, e, o), Cn(t, e, o)) : (Mt && i && co(e), e.flags |= 1, ge(t, e, l, o), e.child);
  }
  function ph(t, e, l, i, o, s) {
    return kl(e), e.updateQueue = null, l = yd(
      e,
      i,
      l,
      o
    ), gd(t), i = Mo(), t !== null && !ie ? (Oo(t, e, s), Cn(t, e, s)) : (Mt && i && co(e), e.flags |= 1, ge(t, e, l, s), e.child);
  }
  function mh(t, e, l, i, o) {
    if (kl(e), e.stateNode === null) {
      var s = Pl, g = l.contextType;
      typeof g == "object" && g !== null && (s = me(g)), s = new l(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Fo, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, ko(e), g = l.contextType, s.context = typeof g == "object" && g !== null ? me(g) : Pl, s.state = e.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (Zo(
        e,
        l,
        g,
        i
      ), s.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (g = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), g !== s.state && Fo.enqueueReplaceState(s, s.state, null), na(e, i, s, o), ea(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      s = e.stateNode;
      var v = e.memoizedProps, z = Cl(l, v);
      s.props = z;
      var O = s.context, q = l.contextType;
      g = Pl, typeof q == "object" && q !== null && (g = me(q));
      var Q = l.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, q || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || O !== g) && eh(
        e,
        s,
        i,
        g
      ), Zn = !1;
      var N = e.memoizedState;
      s.state = N, na(e, i, s, o), ea(), O = e.memoizedState, v || N !== O || Zn ? (typeof Q == "function" && (Zo(
        e,
        l,
        Q,
        i
      ), O = e.memoizedState), (z = Zn || th(
        e,
        l,
        z,
        i,
        N,
        O,
        g
      )) ? (q || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = O), s.props = i, s.state = O, s.context = g, i = z) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      s = e.stateNode, So(t, e), g = e.memoizedProps, q = Cl(l, g), s.props = q, Q = e.pendingProps, N = s.context, O = l.contextType, z = Pl, typeof O == "object" && O !== null && (z = me(O)), v = l.getDerivedStateFromProps, (O = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== Q || N !== z) && eh(
        e,
        s,
        i,
        z
      ), Zn = !1, N = e.memoizedState, s.state = N, na(e, i, s, o), ea();
      var j = e.memoizedState;
      g !== Q || N !== j || Zn || t !== null && t.dependencies !== null && dr(t.dependencies) ? (typeof v == "function" && (Zo(
        e,
        l,
        v,
        i
      ), j = e.memoizedState), (q = Zn || th(
        e,
        l,
        q,
        i,
        N,
        j,
        z
      ) || t !== null && t.dependencies !== null && dr(t.dependencies)) ? (O || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, j, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        i,
        j,
        z
      )), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = j), s.props = i, s.state = j, s.context = z, i = q) : (typeof s.componentDidUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return s = i, Mr(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, l = i && typeof l.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Al(
      e,
      t.child,
      null,
      o
    ), e.child = Al(
      e,
      null,
      l,
      o
    )) : ge(t, e, l, o), e.memoizedState = s.state, t = e.child) : t = Cn(
      t,
      e,
      o
    ), t;
  }
  function gh(t, e, l, i) {
    return xl(), e.flags |= 256, ge(t, e, l, i), e.child;
  }
  var $o = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wo(t) {
    return { baseLanes: t, cachePool: ad() };
  }
  function Po(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ge), t;
  }
  function yh(t, e, l) {
    var i = e.pendingProps, o = !1, s = (e.flags & 128) !== 0, g;
    if ((g = s) || (g = t !== null && t.memoizedState === null ? !1 : (te.current & 2) !== 0), g && (o = !0, e.flags &= -129), g = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Mt) {
        if (o ? Jn(e) : In(), (t = Jt) ? (t = Ep(
          t,
          Pe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gn !== null ? { id: fn, overflow: dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = If(t), l.return = e, e.child = l, pe = e, Jt = null)) : t = null, t === null) throw Qn(e);
        return Ls(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, o ? (In(), o = e.mode, v = Or(
        { mode: "hidden", children: v },
        o
      ), i = vl(
        i,
        o,
        l,
        null
      ), v.return = e, i.return = e, v.sibling = i, e.child = v, i = e.child, i.memoizedState = Wo(l), i.childLanes = Po(
        t,
        g,
        l
      ), e.memoizedState = $o, ua(null, i)) : (Jn(e), ts(e, v));
    }
    var z = t.memoizedState;
    if (z !== null && (v = z.dehydrated, v !== null)) {
      if (s)
        e.flags & 256 ? (Jn(e), e.flags &= -257, e = es(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (In(), e.child = t.child, e.flags |= 128, e = null) : (In(), v = i.fallback, o = e.mode, i = Or(
          { mode: "visible", children: i.children },
          o
        ), v = vl(
          v,
          o,
          l,
          null
        ), v.flags |= 2, i.return = e, v.return = e, i.sibling = v, e.child = i, Al(
          e,
          t.child,
          null,
          l
        ), i = e.child, i.memoizedState = Wo(l), i.childLanes = Po(
          t,
          g,
          l
        ), e.memoizedState = $o, e = ua(null, i));
      else if (Jn(e), Ls(v)) {
        if (g = v.nextSibling && v.nextSibling.dataset, g) var O = g.dgst;
        g = O, i = Error(u(419)), i.stack = "", i.digest = g, Ji({ value: i, source: null, stack: null }), e = es(
          t,
          e,
          l
        );
      } else if (ie || li(t, e, l, !1), g = (l & t.childLanes) !== 0, ie || g) {
        if (g = Xt, g !== null && (i = nf(g, l), i !== 0 && i !== z.retryLane))
          throw z.retryLane = i, bl(t, i), Oe(g, t, i), Jo;
        Ns(v) || Yr(), e = es(
          t,
          e,
          l
        );
      } else
        Ns(v) ? (e.flags |= 192, e.child = t.child, e = null) : (t = z.treeContext, Jt = en(
          v.nextSibling
        ), pe = e, Mt = !0, Vn = null, Pe = !1, t !== null && Pf(e, t), e = ts(
          e,
          i.children
        ), e.flags |= 4096);
      return e;
    }
    return o ? (In(), v = i.fallback, o = e.mode, z = t.child, O = z.sibling, i = kn(z, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = z.subtreeFlags & 65011712, O !== null ? v = kn(
      O,
      v
    ) : (v = vl(
      v,
      o,
      l,
      null
    ), v.flags |= 2), v.return = e, i.return = e, i.sibling = v, e.child = i, ua(null, i), i = e.child, v = t.child.memoizedState, v === null ? v = Wo(l) : (o = v.cachePool, o !== null ? (z = ne._currentValue, o = o.parent !== z ? { parent: z, pool: z } : o) : o = ad(), v = {
      baseLanes: v.baseLanes | l,
      cachePool: o
    }), i.memoizedState = v, i.childLanes = Po(
      t,
      g,
      l
    ), e.memoizedState = $o, ua(t.child, i)) : (Jn(e), l = t.child, t = l.sibling, l = kn(l, {
      mode: "visible",
      children: i.children
    }), l.return = e, l.sibling = null, t !== null && (g = e.deletions, g === null ? (e.deletions = [t], e.flags |= 16) : g.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function ts(t, e) {
    return e = Or(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Or(t, e) {
    return t = Be(22, t, null, e), t.lanes = 0, t;
  }
  function es(t, e, l) {
    return Al(e, t.child, null, l), t = ts(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function bh(t, e, l) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), go(t.return, e, l);
  }
  function ns(t, e, l, i, o, s) {
    var g = t.memoizedState;
    g === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: l,
      tailMode: o,
      treeForkCount: s
    } : (g.isBackwards = e, g.rendering = null, g.renderingStartTime = 0, g.last = i, g.tail = l, g.tailMode = o, g.treeForkCount = s);
  }
  function vh(t, e, l) {
    var i = e.pendingProps, o = i.revealOrder, s = i.tail;
    i = i.children;
    var g = te.current, v = (g & 2) !== 0;
    if (v ? (g = g & 1 | 2, e.flags |= 128) : g &= 1, k(te, g), ge(t, e, i, l), i = Mt ? Ki : 0, !v && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && bh(t, l, e);
        else if (t.tag === 19)
          bh(t, l, e);
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
        l = o, l === null ? (o = e.child, e.child = null) : (o = l.sibling, l.sibling = null), ns(
          e,
          !1,
          o,
          l,
          s,
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
        ns(
          e,
          !0,
          l,
          null,
          s,
          i
        );
        break;
      case "together":
        ns(
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
  function ls(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && dr(t)));
  }
  function Qb(t, e, l) {
    switch (e.tag) {
      case 3:
        Vt(e, e.stateNode.containerInfo), Xn(e, ne, t.memoizedState.cache), xl();
        break;
      case 27:
      case 5:
        de(e);
        break;
      case 4:
        Vt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Xn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Co(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Jn(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? yh(t, e, l) : (Jn(e), t = Cn(
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
            return vh(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), k(te, te.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, fh(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Xn(e, ne, t.memoizedState.cache);
    }
    return Cn(t, e, l);
  }
  function xh(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ie = !0;
      else {
        if (!ls(t, l) && (e.flags & 128) === 0)
          return ie = !1, Qb(
            t,
            e,
            l
          );
        ie = (t.flags & 131072) !== 0;
      }
    else
      ie = !1, Mt && (e.flags & 1048576) !== 0 && Wf(e, Ki, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = zl(e.elementType), e.type = t, typeof t == "function")
            uo(t) ? (i = Cl(t, i), e.tag = 1, e = mh(
              null,
              e,
              t,
              i,
              l
            )) : (e.tag = 0, e = Io(
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
                e.tag = 11, e = oh(
                  null,
                  e,
                  t,
                  i,
                  l
                );
                break t;
              } else if (o === P) {
                e.tag = 14, e = sh(
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
        return Io(
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
        ), mh(
          t,
          e,
          i,
          o,
          l
        );
      case 3:
        t: {
          if (Vt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(u(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          o = s.element, So(t, e), na(e, i, null, l);
          var g = e.memoizedState;
          if (i = g.cache, Xn(e, ne, i), i !== s.cache && yo(
            e,
            [ne],
            l,
            !0
          ), ea(), i = g.element, s.isDehydrated)
            if (s = {
              element: i,
              isDehydrated: !1,
              cache: g.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
              e = gh(
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
              ), Ji(o), e = gh(
                t,
                e,
                i,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Jt = en(t.firstChild), pe = e, Mt = !0, Vn = null, Pe = !0, l = fd(
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
        return Mr(t, e), t === null ? (l = Mp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : Mt || (l = e.type, t = e.pendingProps, i = Kr(
          ct.current
        ).createElement(l), i[he] = e, i[Ae] = t, ye(i, l, t), ce(i), e.stateNode = i) : e.memoizedState = Mp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return de(e), t === null && Mt && (i = e.stateNode = Cp(
          e.type,
          e.pendingProps,
          ct.current
        ), pe = e, Pe = !0, o = Jt, il(e.type) ? (Us = o, Jt = en(i.firstChild)) : Jt = o), ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), Mr(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Mt && ((o = i = Jt) && (i = x0(
          i,
          e.type,
          e.pendingProps,
          Pe
        ), i !== null ? (e.stateNode = i, pe = e, Jt = en(i.firstChild), Pe = !1, o = !0) : o = !1), o || Qn(e)), de(e), o = e.type, s = e.pendingProps, g = t !== null ? t.memoizedProps : null, i = s.children, Ms(o, s) ? i = null : g !== null && Ms(o, g) && (e.flags |= 32), e.memoizedState !== null && (o = _o(
          t,
          e,
          Lb,
          null,
          null,
          l
        ), ka._currentValue = o), Mr(t, e), ge(t, e, i, l), e.child;
      case 6:
        return t === null && Mt && ((t = l = Jt) && (l = w0(
          l,
          e.pendingProps,
          Pe
        ), l !== null ? (e.stateNode = l, pe = e, Jt = null, t = !0) : t = !1), t || Qn(e)), null;
      case 13:
        return yh(t, e, l);
      case 4:
        return Vt(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = Al(
          e,
          null,
          i,
          l
        ) : ge(t, e, i, l), e.child;
      case 11:
        return oh(
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
        return i = e.pendingProps, Xn(e, e.type, i.value), ge(t, e, i.children, l), e.child;
      case 9:
        return o = e.type._context, i = e.pendingProps.children, kl(e), o = me(o), i = i(o), e.flags |= 1, ge(t, e, i, l), e.child;
      case 14:
        return sh(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return ch(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return vh(t, e, l);
      case 31:
        return Vb(t, e, l);
      case 22:
        return fh(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return kl(e), i = me(ne), t === null ? (o = xo(), o === null && (o = Xt, s = bo(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= l), o = s), e.memoizedState = { parent: i, cache: o }, ko(e), Xn(e, ne, o)) : ((t.lanes & l) !== 0 && (So(t, e), na(e, null, null, l), ea()), o = t.memoizedState, s = e.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Xn(e, ne, i)) : (i = s.cache, Xn(e, ne, i), i !== o.cache && yo(
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
  function Dn(t) {
    t.flags |= 4;
  }
  function is(t, e, l, i, o) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (o & 335544128) === o)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fh()) t.flags |= 8192;
        else
          throw El = gr, wo;
    } else t.flags &= -16777217;
  }
  function wh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Up(e))
      if (Fh()) t.flags |= 8192;
      else
        throw El = gr, wo;
  }
  function Rr(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Pc() : 536870912, t.lanes |= e, mi |= e);
  }
  function oa(t, e) {
    if (!Mt)
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
  function It(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, i = 0;
    if (e)
      for (var o = t.child; o !== null; )
        l |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = t, o = o.sibling;
    else
      for (o = t.child; o !== null; )
        l |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= i, t.childLanes = l, e;
  }
  function Xb(t, e, l) {
    var i = e.pendingProps;
    switch (fo(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return It(e), null;
      case 1:
        return It(e), null;
      case 3:
        return l = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), En(ne), Rt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ni(e) ? Dn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, po())), It(e), null;
      case 26:
        var o = e.type, s = e.memoizedState;
        return t === null ? (Dn(e), s !== null ? (It(e), wh(e, s)) : (It(e), is(
          e,
          o,
          null,
          i,
          l
        ))) : s ? s !== t.memoizedState ? (Dn(e), It(e), wh(e, s)) : (It(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && Dn(e), It(e), is(
          e,
          o,
          t,
          i,
          l
        )), null;
      case 27:
        if (Le(e), l = ct.current, o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Dn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return It(e), null;
          }
          t = $.current, ni(e) ? td(e) : (t = Cp(o, i, l), e.stateNode = t, Dn(e));
        }
        return It(e), null;
      case 5:
        if (Le(e), o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Dn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return It(e), null;
          }
          if (s = $.current, ni(e))
            td(e);
          else {
            var g = Kr(
              ct.current
            );
            switch (s) {
              case 1:
                s = g.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                s = g.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    s = g.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    s = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    s = g.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof i.is == "string" ? g.createElement("select", {
                      is: i.is
                    }) : g.createElement("select"), i.multiple ? s.multiple = !0 : i.size && (s.size = i.size);
                    break;
                  default:
                    s = typeof i.is == "string" ? g.createElement(o, { is: i.is }) : g.createElement(o);
                }
            }
            s[he] = e, s[Ae] = i;
            t: for (g = e.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6)
                s.appendChild(g.stateNode);
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
            e.stateNode = s;
            t: switch (ye(s, o, i), o) {
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
            i && Dn(e);
          }
        }
        return It(e), is(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && Dn(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(u(166));
          if (t = ct.current, ni(e)) {
            if (t = e.stateNode, l = e.memoizedProps, i = null, o = pe, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            t[he] = e, t = !!(t.nodeValue === l || i !== null && i.suppressHydrationWarning === !0 || yp(t.nodeValue, l)), t || Qn(e, !0);
          } else
            t = Kr(t).createTextNode(
              i
            ), t[he] = e, e.stateNode = t;
        }
        return It(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = ni(e), l !== null) {
            if (t === null) {
              if (!i) throw Error(u(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[he] = e;
            } else
              xl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            It(e), t = !1;
          } else
            l = po(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(u(558));
        }
        return It(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = ni(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(u(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[he] = e;
            } else
              xl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            It(e), o = !1;
          } else
            o = po(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = i !== null, t = t !== null && t.memoizedState !== null, l && (i = e.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== o && (i.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Rr(e, e.updateQueue), It(e), null);
      case 4:
        return Rt(), t === null && As(e.stateNode.containerInfo), It(e), null;
      case 10:
        return En(e.type), It(e), null;
      case 19:
        if (Y(te), i = e.memoizedState, i === null) return It(e), null;
        if (o = (e.flags & 128) !== 0, s = i.rendering, s === null)
          if (o) oa(i, !1);
          else {
            if (Pt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (s = xr(t), s !== null) {
                  for (e.flags |= 128, oa(i, !1), t = s.updateQueue, e.updateQueue = t, Rr(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Jf(l, t), l = l.sibling;
                  return k(
                    te,
                    te.current & 1 | 2
                  ), Mt && Sn(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && we() > Br && (e.flags |= 128, o = !0, oa(i, !1), e.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = xr(s), t !== null) {
              if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Rr(e, t), oa(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Mt)
                return It(e), null;
            } else
              2 * we() - i.renderingStartTime > Br && l !== 536870912 && (e.flags |= 128, o = !0, oa(i, !1), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = we(), t.sibling = null, l = te.current, k(
          te,
          o ? l & 1 | 2 : l & 1
        ), Mt && Sn(e, i.treeForkCount), t) : (It(e), null);
      case 22:
      case 23:
        return qe(e), To(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (It(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : It(e), l = e.updateQueue, l !== null && Rr(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== l && (e.flags |= 2048), t !== null && Y(Sl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), En(ne), It(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Zb(t, e) {
    switch (fo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return En(ne), Rt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
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
        return En(e.type), null;
      case 22:
      case 23:
        return qe(e), To(), t !== null && Y(Sl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return En(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kh(t, e) {
    switch (fo(e), e.tag) {
      case 3:
        En(ne), Rt();
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
        En(e.type);
        break;
      case 22:
      case 23:
        qe(e), To(), t !== null && Y(Sl);
        break;
      case 24:
        En(ne);
    }
  }
  function sa(t, e) {
    try {
      var l = e.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            i = void 0;
            var s = l.create, g = l.inst;
            i = s(), g.destroy = i;
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
        var s = o.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            var g = i.inst, v = g.destroy;
            if (v !== void 0) {
              g.destroy = void 0, o = e;
              var z = l, O = v;
              try {
                O();
              } catch (q) {
                Ht(
                  o,
                  z,
                  q
                );
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (q) {
      Ht(e, e.return, q);
    }
  }
  function Sh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        hd(e, l);
      } catch (i) {
        Ht(t, t.return, i);
      }
    }
  }
  function zh(t, e, l) {
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
  function ca(t, e) {
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
  function hn(t, e) {
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
  function Eh(t) {
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
  function as(t, e, l) {
    try {
      var i = t.stateNode;
      p0(i, t.type, l, e), i[Ae] = e;
    } catch (o) {
      Ht(t, t.return, o);
    }
  }
  function Ah(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && il(t.type) || t.tag === 4;
  }
  function rs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ah(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && il(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function us(t, e, l) {
    var i = t.tag;
    if (i === 5 || i === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = xn));
    else if (i !== 4 && (i === 27 && il(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (us(t, e, l), t = t.sibling; t !== null; )
        us(t, e, l), t = t.sibling;
  }
  function Nr(t, e, l) {
    var i = t.tag;
    if (i === 5 || i === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (i !== 4 && (i === 27 && il(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Nr(t, e, l), t = t.sibling; t !== null; )
        Nr(t, e, l), t = t.sibling;
  }
  function Th(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var i = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      ye(e, i, l), e[he] = t, e[Ae] = l;
    } catch (s) {
      Ht(t, t.return, s);
    }
  }
  var _n = !1, ae = !1, os = !1, Ch = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function Fb(t, e) {
    if (t = t.containerInfo, Ds = eu, t = qf(t), to(t)) {
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
            var o = i.anchorOffset, s = i.focusNode;
            i = i.focusOffset;
            try {
              l.nodeType, s.nodeType;
            } catch {
              l = null;
              break t;
            }
            var g = 0, v = -1, z = -1, O = 0, q = 0, Q = t, N = null;
            e: for (; ; ) {
              for (var j; Q !== l || o !== 0 && Q.nodeType !== 3 || (v = g + o), Q !== s || i !== 0 && Q.nodeType !== 3 || (z = g + i), Q.nodeType === 3 && (g += Q.nodeValue.length), (j = Q.firstChild) !== null; )
                N = Q, Q = j;
              for (; ; ) {
                if (Q === t) break e;
                if (N === l && ++O === o && (v = g), N === s && ++q === i && (z = g), (j = Q.nextSibling) !== null) break;
                Q = N, N = Q.parentNode;
              }
              Q = j;
            }
            l = v === -1 || z === -1 ? null : { start: v, end: z };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_s = { focusedElem: t, selectionRange: l }, eu = !1, fe = e; fe !== null; )
      if (e = fe, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, fe = t;
      else
        for (; fe !== null; ) {
          switch (e = fe, s = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  o = t[l], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                t = void 0, l = e, o = s.memoizedProps, s = s.memoizedState, i = l.stateNode;
                try {
                  var at = Cl(
                    l.type,
                    o
                  );
                  t = i.getSnapshotBeforeUpdate(
                    at,
                    s
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
                  Rs(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rs(t);
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
  function Dh(t, e, l) {
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        On(t, l), i & 4 && sa(5, l);
        break;
      case 1:
        if (On(t, l), i & 4)
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
        i & 64 && Sh(l), i & 512 && ca(l, l.return);
        break;
      case 3:
        if (On(t, l), i & 64 && (t = l.updateQueue, t !== null)) {
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
            hd(t, e);
          } catch (g) {
            Ht(l, l.return, g);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Th(l);
      case 26:
      case 5:
        On(t, l), e === null && i & 4 && Eh(l), i & 512 && ca(l, l.return);
        break;
      case 12:
        On(t, l);
        break;
      case 31:
        On(t, l), i & 4 && Oh(t, l);
        break;
      case 13:
        On(t, l), i & 4 && Rh(t, l), i & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = n0.bind(
          null,
          l
        ), k0(t, l))));
        break;
      case 22:
        if (i = l.memoizedState !== null || _n, !i) {
          e = e !== null && e.memoizedState !== null || ae, o = _n;
          var s = ae;
          _n = i, (ae = e) && !s ? Rn(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : On(t, l), _n = o, ae = s;
        }
        break;
      case 30:
        break;
      default:
        On(t, l);
    }
  }
  function _h(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _h(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ju(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var $t = null, Ce = !1;
  function Mn(t, e, l) {
    for (l = l.child; l !== null; )
      Mh(t, e, l), l = l.sibling;
  }
  function Mh(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == "function")
      try {
        ue.onCommitFiberUnmount(ke, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        ae || hn(l, e), Mn(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        ae || hn(l, e);
        var i = $t, o = Ce;
        il(l.type) && ($t = l.stateNode, Ce = !1), Mn(
          t,
          e,
          l
        ), va(l.stateNode), $t = i, Ce = o;
        break;
      case 5:
        ae || hn(l, e);
      case 6:
        if (i = $t, o = Ce, $t = null, Mn(
          t,
          e,
          l
        ), $t = i, Ce = o, $t !== null)
          if (Ce)
            try {
              ($t.nodeType === 9 ? $t.body : $t.nodeName === "HTML" ? $t.ownerDocument.body : $t).removeChild(l.stateNode);
            } catch (s) {
              Ht(
                l,
                e,
                s
              );
            }
          else
            try {
              $t.removeChild(l.stateNode);
            } catch (s) {
              Ht(
                l,
                e,
                s
              );
            }
        break;
      case 18:
        $t !== null && (Ce ? (t = $t, Sp(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Si(t)) : Sp($t, l.stateNode));
        break;
      case 4:
        i = $t, o = Ce, $t = l.stateNode.containerInfo, Ce = !0, Mn(
          t,
          e,
          l
        ), $t = i, Ce = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $n(2, l, e), ae || $n(4, l, e), Mn(
          t,
          e,
          l
        );
        break;
      case 1:
        ae || (hn(l, e), i = l.stateNode, typeof i.componentWillUnmount == "function" && zh(
          l,
          e,
          i
        )), Mn(
          t,
          e,
          l
        );
        break;
      case 21:
        Mn(
          t,
          e,
          l
        );
        break;
      case 22:
        ae = (i = ae) || l.memoizedState !== null, Mn(
          t,
          e,
          l
        ), ae = i;
        break;
      default:
        Mn(
          t,
          e,
          l
        );
    }
  }
  function Oh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Si(t);
      } catch (l) {
        Ht(e, e.return, l);
      }
    }
  }
  function Rh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Si(t);
      } catch (l) {
        Ht(e, e.return, l);
      }
  }
  function Kb(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ch()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ch()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Lr(t, e) {
    var l = Kb(t);
    e.forEach(function(i) {
      if (!l.has(i)) {
        l.add(i);
        var o = l0.bind(null, t, i);
        i.then(o, o);
      }
    });
  }
  function De(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var i = 0; i < l.length; i++) {
        var o = l[i], s = t, g = e, v = g;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (il(v.type)) {
                $t = v.stateNode, Ce = !1;
                break t;
              }
              break;
            case 5:
              $t = v.stateNode, Ce = !1;
              break t;
            case 3:
            case 4:
              $t = v.stateNode.containerInfo, Ce = !0;
              break t;
          }
          v = v.return;
        }
        if ($t === null) throw Error(u(160));
        Mh(s, g, o), $t = null, Ce = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Nh(e, t), e = e.sibling;
  }
  var un = null;
  function Nh(t, e) {
    var l = t.alternate, i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        De(e, t), _e(t), i & 4 && ($n(3, t, t.return), sa(3, t), $n(5, t, t.return));
        break;
      case 1:
        De(e, t), _e(t), i & 512 && (ae || l === null || hn(l, l.return)), i & 64 && _n && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? i : l.concat(i))));
        break;
      case 26:
        var o = un;
        if (De(e, t), _e(t), i & 512 && (ae || l === null || hn(l, l.return)), i & 4) {
          var s = l !== null ? l.memoizedState : null;
          if (i = t.memoizedState, l === null)
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  i = t.type, l = t.memoizedProps, o = o.ownerDocument || o;
                  e: switch (i) {
                    case "title":
                      s = o.getElementsByTagName("title")[0], (!s || s[ji] || s[he] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(i), o.head.insertBefore(
                        s,
                        o.querySelector("head > title")
                      )), ye(s, i, l), s[he] = t, ce(s), i = s;
                      break t;
                    case "link":
                      var g = Np(
                        "link",
                        "href",
                        o
                      ).get(i + (l.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (s = g[v], s.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && s.getAttribute("rel") === (l.rel == null ? null : l.rel) && s.getAttribute("title") === (l.title == null ? null : l.title) && s.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      s = o.createElement(i), ye(s, i, l), o.head.appendChild(s);
                      break;
                    case "meta":
                      if (g = Np(
                        "meta",
                        "content",
                        o
                      ).get(i + (l.content || ""))) {
                        for (v = 0; v < g.length; v++)
                          if (s = g[v], s.getAttribute("content") === (l.content == null ? null : "" + l.content) && s.getAttribute("name") === (l.name == null ? null : l.name) && s.getAttribute("property") === (l.property == null ? null : l.property) && s.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && s.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      s = o.createElement(i), ye(s, i, l), o.head.appendChild(s);
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  s[he] = t, ce(s), i = s;
                }
                t.stateNode = i;
              } else
                Lp(
                  o,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Rp(
                o,
                i,
                t.memoizedProps
              );
          else
            s !== i ? (s === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : s.count--, i === null ? Lp(
              o,
              t.type,
              t.stateNode
            ) : Rp(
              o,
              i,
              t.memoizedProps
            )) : i === null && t.stateNode !== null && as(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        De(e, t), _e(t), i & 512 && (ae || l === null || hn(l, l.return)), l !== null && i & 4 && as(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (De(e, t), _e(t), i & 512 && (ae || l === null || hn(l, l.return)), t.flags & 32) {
          o = t.stateNode;
          try {
            Zl(o, "");
          } catch (at) {
            Ht(t, t.return, at);
          }
        }
        i & 4 && t.stateNode != null && (o = t.memoizedProps, as(
          t,
          o,
          l !== null ? l.memoizedProps : o
        )), i & 1024 && (os = !0);
        break;
      case 6:
        if (De(e, t), _e(t), i & 4) {
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
        if ($r = null, o = un, un = Jr(e.containerInfo), De(e, t), un = o, _e(t), i & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Si(e.containerInfo);
          } catch (at) {
            Ht(t, t.return, at);
          }
        os && (os = !1, Lh(t));
        break;
      case 4:
        i = un, un = Jr(
          t.stateNode.containerInfo
        ), De(e, t), _e(t), un = i;
        break;
      case 12:
        De(e, t), _e(t);
        break;
      case 31:
        De(e, t), _e(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Lr(t, i)));
        break;
      case 13:
        De(e, t), _e(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (jr = we()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Lr(t, i)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var z = l !== null && l.memoizedState !== null, O = _n, q = ae;
        if (_n = O || o, ae = q || z, De(e, t), ae = q, _n = O, _e(t), i & 8192)
          t: for (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, o && (l === null || z || _n || ae || Dl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                z = l = e;
                try {
                  if (s = z.stateNode, o)
                    g = s.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    v = z.stateNode;
                    var Q = z.memoizedProps.style, N = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (at) {
                  Ht(z, z.return, at);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                z = e;
                try {
                  z.stateNode.nodeValue = o ? "" : z.memoizedProps;
                } catch (at) {
                  Ht(z, z.return, at);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                z = e;
                try {
                  var j = z.stateNode;
                  o ? zp(j, !0) : zp(z.stateNode, !1);
                } catch (at) {
                  Ht(z, z.return, at);
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
        De(e, t), _e(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, Lr(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        De(e, t), _e(t);
    }
  }
  function _e(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, i = t.return; i !== null; ) {
          if (Ah(i)) {
            l = i;
            break;
          }
          i = i.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var o = l.stateNode, s = rs(t);
            Nr(t, s, o);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && (Zl(g, ""), l.flags &= -33);
            var v = rs(t);
            Nr(t, v, g);
            break;
          case 3:
          case 4:
            var z = l.stateNode.containerInfo, O = rs(t);
            us(
              t,
              O,
              z
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
  function Lh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Lh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function On(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Dh(t, e.alternate, e), e = e.sibling;
  }
  function Dl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $n(4, e, e.return), Dl(e);
          break;
        case 1:
          hn(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && zh(
            e,
            e.return,
            l
          ), Dl(e);
          break;
        case 27:
          va(e.stateNode);
        case 26:
        case 5:
          hn(e, e.return), Dl(e);
          break;
        case 22:
          e.memoizedState === null && Dl(e);
          break;
        case 30:
          Dl(e);
          break;
        default:
          Dl(e);
      }
      t = t.sibling;
    }
  }
  function Rn(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate, o = t, s = e, g = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Rn(
            o,
            s,
            l
          ), sa(4, s);
          break;
        case 1:
          if (Rn(
            o,
            s,
            l
          ), i = s, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (O) {
              Ht(i, i.return, O);
            }
          if (i = s, o = i.updateQueue, o !== null) {
            var v = i.stateNode;
            try {
              var z = o.shared.hiddenCallbacks;
              if (z !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < z.length; o++)
                  dd(z[o], v);
            } catch (O) {
              Ht(i, i.return, O);
            }
          }
          l && g & 64 && Sh(s), ca(s, s.return);
          break;
        case 27:
          Th(s);
        case 26:
        case 5:
          Rn(
            o,
            s,
            l
          ), l && i === null && g & 4 && Eh(s), ca(s, s.return);
          break;
        case 12:
          Rn(
            o,
            s,
            l
          );
          break;
        case 31:
          Rn(
            o,
            s,
            l
          ), l && g & 4 && Oh(o, s);
          break;
        case 13:
          Rn(
            o,
            s,
            l
          ), l && g & 4 && Rh(o, s);
          break;
        case 22:
          s.memoizedState === null && Rn(
            o,
            s,
            l
          ), ca(s, s.return);
          break;
        case 30:
          break;
        default:
          Rn(
            o,
            s,
            l
          );
      }
      e = e.sibling;
    }
  }
  function ss(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ii(l));
  }
  function cs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ii(t));
  }
  function on(t, e, l, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Uh(
          t,
          e,
          l,
          i
        ), e = e.sibling;
  }
  function Uh(t, e, l, i) {
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
        ), o & 2048 && sa(9, e);
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
            var s = e.memoizedProps, g = s.id, v = s.onPostCommit;
            typeof v == "function" && v(
              g,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (z) {
            Ht(e, e.return, z);
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
        s = e.stateNode, g = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? on(
          t,
          e,
          l,
          i
        ) : fa(t, e) : s._visibility & 2 ? on(
          t,
          e,
          l,
          i
        ) : (s._visibility |= 2, di(
          t,
          e,
          l,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && ss(g, e);
        break;
      case 24:
        on(
          t,
          e,
          l,
          i
        ), o & 2048 && cs(e.alternate, e);
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
  function di(t, e, l, i, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t, g = e, v = l, z = i, O = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          di(
            s,
            g,
            v,
            z,
            o
          ), sa(8, g);
          break;
        case 23:
          break;
        case 22:
          var q = g.stateNode;
          g.memoizedState !== null ? q._visibility & 2 ? di(
            s,
            g,
            v,
            z,
            o
          ) : fa(
            s,
            g
          ) : (q._visibility |= 2, di(
            s,
            g,
            v,
            z,
            o
          )), o && O & 2048 && ss(
            g.alternate,
            g
          );
          break;
        case 24:
          di(
            s,
            g,
            v,
            z,
            o
          ), o && O & 2048 && cs(g.alternate, g);
          break;
        default:
          di(
            s,
            g,
            v,
            z,
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
            fa(l, i), o & 2048 && ss(
              i.alternate,
              i
            );
            break;
          case 24:
            fa(l, i), o & 2048 && cs(i.alternate, i);
            break;
          default:
            fa(l, i);
        }
        e = e.sibling;
      }
  }
  var da = 8192;
  function hi(t, e, l) {
    if (t.subtreeFlags & da)
      for (t = t.child; t !== null; )
        jh(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function jh(t, e, l) {
    switch (t.tag) {
      case 26:
        hi(
          t,
          e,
          l
        ), t.flags & da && t.memoizedState !== null && N0(
          l,
          un,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        hi(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var i = un;
        un = Jr(t.stateNode.containerInfo), hi(
          t,
          e,
          l
        ), un = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = da, da = 16777216, hi(
          t,
          e,
          l
        ), da = i) : hi(
          t,
          e,
          l
        ));
        break;
      default:
        hi(
          t,
          e,
          l
        );
    }
  }
  function Bh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ha(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var i = e[l];
          fe = i, qh(
            i,
            t
          );
        }
      Bh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Hh(t), t = t.sibling;
  }
  function Hh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ha(t), t.flags & 2048 && $n(9, t, t.return);
        break;
      case 3:
        ha(t);
        break;
      case 12:
        ha(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ur(t)) : ha(t);
        break;
      default:
        ha(t);
    }
  }
  function Ur(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var i = e[l];
          fe = i, qh(
            i,
            t
          );
        }
      Bh(t);
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
  function qh(t, e) {
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
          var o = i.sibling, s = i.return;
          if (_h(i), i === l) {
            fe = null;
            break t;
          }
          if (o !== null) {
            o.return = s, fe = o;
            break t;
          }
          fe = s;
        }
    }
  }
  var Jb = {
    getCacheForType: function(t) {
      var e = me(ne), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return me(ne).controller.signal;
    }
  }, Ib = typeof WeakMap == "function" ? WeakMap : Map, Ut = 0, Xt = null, At = null, Dt = 0, Bt = 0, Ye = null, Wn = !1, pi = !1, fs = !1, Nn = 0, Pt = 0, Pn = 0, _l = 0, ds = 0, Ge = 0, mi = 0, pa = null, Me = null, hs = !1, jr = 0, Yh = 0, Br = 1 / 0, Hr = null, tl = null, oe = 0, el = null, gi = null, Ln = 0, ps = 0, ms = null, Gh = null, ma = 0, gs = null;
  function Ve() {
    return (Ut & 2) !== 0 && Dt !== 0 ? Dt & -Dt : _.T !== null ? ks() : lf();
  }
  function Vh() {
    if (Ge === 0)
      if ((Dt & 536870912) === 0 || Mt) {
        var t = Fa;
        Fa <<= 1, (Fa & 3932160) === 0 && (Fa = 262144), Ge = t;
      } else Ge = 536870912;
    return t = He.current, t !== null && (t.flags |= 32), Ge;
  }
  function Oe(t, e, l) {
    (t === Xt && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) && (yi(t, 0), nl(
      t,
      Dt,
      Ge,
      !1
    )), Ui(t, l), ((Ut & 2) === 0 || t !== Xt) && (t === Xt && ((Ut & 2) === 0 && (_l |= l), Pt === 4 && nl(
      t,
      Dt,
      Ge,
      !1
    )), pn(t));
  }
  function Qh(t, e, l) {
    if ((Ut & 6) !== 0) throw Error(u(327));
    var i = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Li(t, e), o = i ? Pb(t, e) : bs(t, e, !0), s = i;
    do {
      if (o === 0) {
        pi && !i && nl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, s && !$b(l)) {
          o = bs(t, e, !1), s = !1;
          continue;
        }
        if (o === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s)
            var g = 0;
          else
            g = t.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            e = g;
            t: {
              var v = t;
              o = pa;
              var z = v.current.memoizedState.isDehydrated;
              if (z && (yi(v, g).flags |= 256), g = bs(
                v,
                g,
                !1
              ), g !== 2) {
                if (fs && !z) {
                  v.errorRecoveryDisabledLanes |= s, _l |= s, o = 4;
                  break t;
                }
                s = Me, Me = o, s !== null && (Me === null ? Me = s : Me.push.apply(
                  Me,
                  s
                ));
              }
              o = g;
            }
            if (s = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          yi(t, 0), nl(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, s = o, s) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              nl(
                i,
                e,
                Ge,
                !Wn
              );
              break t;
            case 2:
              Me = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (o = jr + 300 - we(), 10 < o)) {
            if (nl(
              i,
              e,
              Ge,
              !Wn
            ), Ja(i, 0, !0) !== 0) break t;
            Ln = e, i.timeoutHandle = wp(
              Xh.bind(
                null,
                i,
                l,
                Me,
                Hr,
                hs,
                e,
                Ge,
                _l,
                mi,
                Wn,
                s,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break t;
          }
          Xh(
            i,
            l,
            Me,
            Hr,
            hs,
            e,
            Ge,
            _l,
            mi,
            Wn,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    pn(t);
  }
  function Xh(t, e, l, i, o, s, g, v, z, O, q, Q, N, j) {
    if (t.timeoutHandle = -1, Q = e.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xn
      }, jh(
        e,
        s,
        Q
      );
      var at = (s & 62914560) === s ? jr - we() : (s & 4194048) === s ? Yh - we() : 0;
      if (at = L0(
        Q,
        at
      ), at !== null) {
        Ln = s, t.cancelPendingCommit = at(
          Ph.bind(
            null,
            t,
            e,
            s,
            l,
            i,
            o,
            g,
            v,
            z,
            q,
            Q,
            null,
            N,
            j
          )
        ), nl(t, s, g, !O);
        return;
      }
    }
    Ph(
      t,
      e,
      s,
      l,
      i,
      o,
      g,
      v,
      z
    );
  }
  function $b(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var i = 0; i < l.length; i++) {
          var o = l[i], s = o.getSnapshot;
          o = o.value;
          try {
            if (!je(s(), o)) return !1;
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
    e &= ~ds, e &= ~_l, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var s = 31 - Qt(o), g = 1 << s;
      i[s] = -1, o &= ~g;
    }
    l !== 0 && tf(t, l, e);
  }
  function qr() {
    return (Ut & 6) === 0 ? (ga(0), !1) : !0;
  }
  function ys() {
    if (At !== null) {
      if (Bt === 0)
        var t = At.return;
      else
        t = At, zn = wl = null, Ro(t), ui = null, Wi = 0, t = At;
      for (; t !== null; )
        kh(t.alternate, t), t = t.return;
      At = null;
    }
  }
  function yi(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, y0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ln = 0, ys(), Xt = t, At = l = kn(t.current, null), Dt = e, Bt = 0, Ye = null, Wn = !1, pi = Li(t, e), fs = !1, mi = Ge = ds = _l = Pn = Pt = 0, Me = pa = null, hs = !1, (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var o = 31 - Qt(i), s = 1 << o;
        e |= t[o], i &= ~s;
      }
    return Nn = e, ur(), l;
  }
  function Zh(t, e) {
    vt = null, _.H = ra, e === ri || e === mr ? (e = od(), Bt = 3) : e === wo ? (e = od(), Bt = 4) : Bt = e === Jo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ye = e, At === null && (Pt = 1, Dr(
      t,
      Ie(e, t.current)
    ));
  }
  function Fh() {
    var t = He.current;
    return t === null ? !0 : (Dt & 4194048) === Dt ? tn === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === tn : !1;
  }
  function Kh() {
    var t = _.H;
    return _.H = ra, t === null ? ra : t;
  }
  function Jh() {
    var t = _.A;
    return _.A = Jb, t;
  }
  function Yr() {
    Pt = 4, Wn || (Dt & 4194048) !== Dt && He.current !== null || (pi = !0), (Pn & 134217727) === 0 && (_l & 134217727) === 0 || Xt === null || nl(
      Xt,
      Dt,
      Ge,
      !1
    );
  }
  function bs(t, e, l) {
    var i = Ut;
    Ut |= 2;
    var o = Kh(), s = Jh();
    (Xt !== t || Dt !== e) && (Hr = null, yi(t, e)), e = !1;
    var g = Pt;
    t: do
      try {
        if (Bt !== 0 && At !== null) {
          var v = At, z = Ye;
          switch (Bt) {
            case 8:
              ys(), g = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              He.current === null && (e = !0);
              var O = Bt;
              if (Bt = 0, Ye = null, bi(t, v, z, O), l && pi) {
                g = 0;
                break t;
              }
              break;
            default:
              O = Bt, Bt = 0, Ye = null, bi(t, v, z, O);
          }
        }
        Wb(), g = Pt;
        break;
      } catch (q) {
        Zh(t, q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, zn = wl = null, Ut = i, _.H = o, _.A = s, At === null && (Xt = null, Dt = 0, ur()), g;
  }
  function Wb() {
    for (; At !== null; ) Ih(At);
  }
  function Pb(t, e) {
    var l = Ut;
    Ut |= 2;
    var i = Kh(), o = Jh();
    Xt !== t || Dt !== e ? (Hr = null, Br = we() + 500, yi(t, e)) : pi = Li(
      t,
      e
    );
    t: do
      try {
        if (Bt !== 0 && At !== null) {
          e = At;
          var s = Ye;
          e: switch (Bt) {
            case 1:
              Bt = 0, Ye = null, bi(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (rd(s)) {
                Bt = 0, Ye = null, $h(e);
                break;
              }
              e = function() {
                Bt !== 2 && Bt !== 9 || Xt !== t || (Bt = 7), pn(t);
              }, s.then(e, e);
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              rd(s) ? (Bt = 0, Ye = null, $h(e)) : (Bt = 0, Ye = null, bi(t, e, s, 7));
              break;
            case 5:
              var g = null;
              switch (At.tag) {
                case 26:
                  g = At.memoizedState;
                case 5:
                case 27:
                  var v = At;
                  if (g ? Up(g) : v.stateNode.complete) {
                    Bt = 0, Ye = null;
                    var z = v.sibling;
                    if (z !== null) At = z;
                    else {
                      var O = v.return;
                      O !== null ? (At = O, Gr(O)) : At = null;
                    }
                    break e;
                  }
              }
              Bt = 0, Ye = null, bi(t, e, s, 5);
              break;
            case 6:
              Bt = 0, Ye = null, bi(t, e, s, 6);
              break;
            case 8:
              ys(), Pt = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        t0();
        break;
      } catch (q) {
        Zh(t, q);
      }
    while (!0);
    return zn = wl = null, _.H = i, _.A = o, Ut = l, At !== null ? 0 : (Xt = null, Dt = 0, ur(), Pt);
  }
  function t0() {
    for (; At !== null && !_u(); )
      Ih(At);
  }
  function Ih(t) {
    var e = xh(t.alternate, t, Nn);
    t.memoizedProps = t.pendingProps, e === null ? Gr(t) : At = e;
  }
  function $h(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ph(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Dt
        );
        break;
      case 11:
        e = ph(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Dt
        );
        break;
      case 5:
        Ro(e);
      default:
        kh(l, e), e = At = Jf(e, Nn), e = xh(l, e, Nn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Gr(t) : At = e;
  }
  function bi(t, e, l, i) {
    zn = wl = null, Ro(e), ui = null, Wi = 0;
    var o = e.return;
    try {
      if (Gb(
        t,
        o,
        e,
        l,
        Dt
      )) {
        Pt = 1, Dr(
          t,
          Ie(l, t.current)
        ), At = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw At = o, s;
      Pt = 1, Dr(
        t,
        Ie(l, t.current)
      ), At = null;
      return;
    }
    e.flags & 32768 ? (Mt || i === 1 ? t = !0 : pi || (Dt & 536870912) !== 0 ? t = !1 : (Wn = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = He.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Wh(e, t)) : Gr(e);
  }
  function Gr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Wh(
          e,
          Wn
        );
        return;
      }
      t = e.return;
      var l = Xb(
        e.alternate,
        e,
        Nn
      );
      if (l !== null) {
        At = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        At = e;
        return;
      }
      At = e = t;
    } while (e !== null);
    Pt === 0 && (Pt = 5);
  }
  function Wh(t, e) {
    do {
      var l = Zb(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, At = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        At = t;
        return;
      }
      At = t = l;
    } while (t !== null);
    Pt = 6, At = null;
  }
  function Ph(t, e, l, i, o, s, g, v, z) {
    t.cancelPendingCommit = null;
    do
      Vr();
    while (oe !== 0);
    if ((Ut & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (s = e.lanes | e.childLanes, s |= ao, Ry(
        t,
        l,
        s,
        g,
        v,
        z
      ), t === Xt && (At = Xt = null, Dt = 0), gi = e, el = t, Ln = l, ps = s, ms = o, Gh = i, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, i0(yt, function() {
        return ip(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
        i = _.T, _.T = null, o = F.p, F.p = 2, g = Ut, Ut |= 4;
        try {
          Fb(t, e, l);
        } finally {
          Ut = g, F.p = o, _.T = i;
        }
      }
      oe = 1, tp(), ep(), np();
    }
  }
  function tp() {
    if (oe === 1) {
      oe = 0;
      var t = el, e = gi, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var i = F.p;
        F.p = 2;
        var o = Ut;
        Ut |= 4;
        try {
          Nh(e, t);
          var s = _s, g = qf(t.containerInfo), v = s.focusedElem, z = s.selectionRange;
          if (g !== v && v && v.ownerDocument && Hf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (z !== null && to(v)) {
              var O = z.start, q = z.end;
              if (q === void 0 && (q = O), "selectionStart" in v)
                v.selectionStart = O, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var Q = v.ownerDocument || document, N = Q && Q.defaultView || window;
                if (N.getSelection) {
                  var j = N.getSelection(), at = v.textContent.length, gt = Math.min(z.start, at), Gt = z.end === void 0 ? gt : Math.min(z.end, at);
                  !j.extend && gt > Gt && (g = Gt, Gt = gt, gt = g);
                  var C = Bf(
                    v,
                    gt
                  ), T = Bf(
                    v,
                    Gt
                  );
                  if (C && T && (j.rangeCount !== 1 || j.anchorNode !== C.node || j.anchorOffset !== C.offset || j.focusNode !== T.node || j.focusOffset !== T.offset)) {
                    var M = Q.createRange();
                    M.setStart(C.node, C.offset), j.removeAllRanges(), gt > Gt ? (j.addRange(M), j.extend(T.node, T.offset)) : (M.setEnd(T.node, T.offset), j.addRange(M));
                  }
                }
              }
            }
            for (Q = [], j = v; j = j.parentNode; )
              j.nodeType === 1 && Q.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Q.length; v++) {
              var V = Q[v];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          eu = !!Ds, _s = Ds = null;
        } finally {
          Ut = o, F.p = i, _.T = l;
        }
      }
      t.current = e, oe = 2;
    }
  }
  function ep() {
    if (oe === 2) {
      oe = 0;
      var t = el, e = gi, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var i = F.p;
        F.p = 2;
        var o = Ut;
        Ut |= 4;
        try {
          Dh(t, e.alternate, e);
        } finally {
          Ut = o, F.p = i, _.T = l;
        }
      }
      oe = 3;
    }
  }
  function np() {
    if (oe === 4 || oe === 3) {
      oe = 0, Mu();
      var t = el, e = gi, l = Ln, i = Gh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? oe = 5 : (oe = 0, gi = el = null, lp(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (o === 0 && (tl = null), Lu(l), e = e.stateNode, ue && typeof ue.onCommitFiberRoot == "function")
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
        e = _.T, o = F.p, F.p = 2, _.T = null;
        try {
          for (var s = t.onRecoverableError, g = 0; g < i.length; g++) {
            var v = i[g];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          _.T = e, F.p = o;
        }
      }
      (Ln & 3) !== 0 && Vr(), pn(t), o = t.pendingLanes, (l & 261930) !== 0 && (o & 42) !== 0 ? t === gs ? ma++ : (ma = 0, gs = t) : ma = 0, ga(0);
    }
  }
  function lp(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ii(e)));
  }
  function Vr() {
    return tp(), ep(), np(), ip();
  }
  function ip() {
    if (oe !== 5) return !1;
    var t = el, e = ps;
    ps = 0;
    var l = Lu(Ln), i = _.T, o = F.p;
    try {
      F.p = 32 > l ? 32 : l, _.T = null, l = ms, ms = null;
      var s = el, g = Ln;
      if (oe = 0, gi = el = null, Ln = 0, (Ut & 6) !== 0) throw Error(u(331));
      var v = Ut;
      if (Ut |= 4, Hh(s.current), Uh(
        s,
        s.current,
        g,
        l
      ), Ut = v, ga(0, !1), ue && typeof ue.onPostCommitFiberRoot == "function")
        try {
          ue.onPostCommitFiberRoot(ke, s);
        } catch {
        }
      return !0;
    } finally {
      F.p = o, _.T = i, lp(t, e);
    }
  }
  function ap(t, e, l) {
    e = Ie(l, e), e = Ko(t.stateNode, e, 2), t = Kn(t, e, 2), t !== null && (Ui(t, 2), pn(t));
  }
  function Ht(t, e, l) {
    if (t.tag === 3)
      ap(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ap(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (tl === null || !tl.has(i))) {
            t = Ie(l, t), l = rh(2), i = Kn(e, l, 2), i !== null && (uh(
              l,
              i,
              e,
              t
            ), Ui(i, 2), pn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function vs(t, e, l) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Ib();
      var o = /* @__PURE__ */ new Set();
      i.set(e, o);
    } else
      o = i.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o));
    o.has(l) || (fs = !0, o.add(l), t = e0.bind(null, t, e, l), e.then(t, t));
  }
  function e0(t, e, l) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Xt === t && (Dt & l) === l && (Pt === 4 || Pt === 3 && (Dt & 62914560) === Dt && 300 > we() - jr ? (Ut & 2) === 0 && yi(t, 0) : ds |= l, mi === Dt && (mi = 0)), pn(t);
  }
  function rp(t, e) {
    e === 0 && (e = Pc()), t = bl(t, e), t !== null && (Ui(t, e), pn(t));
  }
  function n0(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), rp(t, l);
  }
  function l0(t, e) {
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
    i !== null && i.delete(e), rp(t, l);
  }
  function i0(t, e) {
    return Hl(t, e);
  }
  var Qr = null, vi = null, xs = !1, Xr = !1, ws = !1, ll = 0;
  function pn(t) {
    t !== vi && t.next === null && (vi === null ? Qr = vi = t : vi = vi.next = t), Xr = !0, xs || (xs = !0, r0());
  }
  function ga(t, e) {
    if (!ws && Xr) {
      ws = !0;
      do
        for (var l = !1, i = Qr; i !== null; ) {
          if (t !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var g = i.suspendedLanes, v = i.pingedLanes;
              s = (1 << 31 - Qt(42 | t) + 1) - 1, s &= o & ~(g & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (l = !0, cp(i, s));
          } else
            s = Dt, s = Ja(
              i,
              i === Xt ? s : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (s & 3) === 0 || Li(i, s) || (l = !0, cp(i, s));
          i = i.next;
        }
      while (l);
      ws = !1;
    }
  }
  function a0() {
    up();
  }
  function up() {
    Xr = xs = !1;
    var t = 0;
    ll !== 0 && g0() && (t = ll);
    for (var e = we(), l = null, i = Qr; i !== null; ) {
      var o = i.next, s = op(i, e);
      s === 0 ? (i.next = null, l === null ? Qr = o : l.next = o, o === null && (vi = l)) : (l = i, (t !== 0 || (s & 3) !== 0) && (Xr = !0)), i = o;
    }
    oe !== 0 && oe !== 5 || ga(t), ll !== 0 && (ll = 0);
  }
  function op(t, e) {
    for (var l = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var g = 31 - Qt(s), v = 1 << g, z = o[g];
      z === -1 ? ((v & l) === 0 || (v & i) !== 0) && (o[g] = Oy(v, e)) : z <= e && (t.expiredLanes |= v), s &= ~v;
    }
    if (e = Xt, l = Dt, l = Ja(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, l === 0 || t === e && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Ni(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Li(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (i !== null && Ni(i), Lu(l)) {
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
      return i = sp.bind(null, t), l = Hl(l, i), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return i !== null && i !== null && Ni(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function sp(t, e) {
    if (oe !== 0 && oe !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Vr() && t.callbackNode !== l)
      return null;
    var i = Dt;
    return i = Ja(
      t,
      t === Xt ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (Qh(t, i, e), op(t, we()), t.callbackNode != null && t.callbackNode === l ? sp.bind(null, t) : null);
  }
  function cp(t, e) {
    if (Vr()) return null;
    Qh(t, e, !0);
  }
  function r0() {
    b0(function() {
      (Ut & 6) !== 0 ? Hl(
        G,
        a0
      ) : up();
    });
  }
  function ks() {
    if (ll === 0) {
      var t = ii;
      t === 0 && (t = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), ll = t;
    }
    return ll;
  }
  function fp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Pa("" + t);
  }
  function dp(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function u0(t, e, l, i, o) {
    if (e === "submit" && l && l.stateNode === o) {
      var s = fp(
        (o[Ae] || null).action
      ), g = i.submitter;
      g && (e = (e = g[Ae] || null) ? fp(e.formAction) : g.getAttribute("formAction"), e !== null && (s = e, g = null));
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
                  var z = g ? dp(o, g) : new FormData(o);
                  Go(
                    l,
                    {
                      pending: !0,
                      data: z,
                      method: o.method,
                      action: s
                    },
                    null,
                    z
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), z = g ? dp(o, g) : new FormData(o), Go(
                  l,
                  {
                    pending: !0,
                    data: z,
                    method: o.method,
                    action: s
                  },
                  s,
                  z
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Ss = 0; Ss < io.length; Ss++) {
    var zs = io[Ss], o0 = zs.toLowerCase(), s0 = zs[0].toUpperCase() + zs.slice(1);
    rn(
      o0,
      "on" + s0
    );
  }
  rn(Vf, "onAnimationEnd"), rn(Qf, "onAnimationIteration"), rn(Xf, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(Eb, "onTransitionRun"), rn(Ab, "onTransitionStart"), rn(Tb, "onTransitionCancel"), rn(Zf, "onTransitionEnd"), Ql("onMouseEnter", ["mouseout", "mouseover"]), Ql("onMouseLeave", ["mouseout", "mouseover"]), Ql("onPointerEnter", ["pointerout", "pointerover"]), Ql("onPointerLeave", ["pointerout", "pointerover"]), pl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ya = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), c0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya)
  );
  function hp(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var i = t[l], o = i.event;
      i = i.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var g = i.length - 1; 0 <= g; g--) {
            var v = i[g], z = v.instance, O = v.currentTarget;
            if (v = v.listener, z !== s && o.isPropagationStopped())
              break t;
            s = v, o.currentTarget = O;
            try {
              s(o);
            } catch (q) {
              rr(q);
            }
            o.currentTarget = null, s = z;
          }
        else
          for (g = 0; g < i.length; g++) {
            if (v = i[g], z = v.instance, O = v.currentTarget, v = v.listener, z !== s && o.isPropagationStopped())
              break t;
            s = v, o.currentTarget = O;
            try {
              s(o);
            } catch (q) {
              rr(q);
            }
            o.currentTarget = null, s = z;
          }
      }
    }
  }
  function Tt(t, e) {
    var l = e[Uu];
    l === void 0 && (l = e[Uu] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    l.has(i) || (pp(e, t, 2, !1), l.add(i));
  }
  function Es(t, e, l) {
    var i = 0;
    e && (i |= 4), pp(
      l,
      t,
      i,
      e
    );
  }
  var Zr = "_reactListening" + Math.random().toString(36).slice(2);
  function As(t) {
    if (!t[Zr]) {
      t[Zr] = !0, uf.forEach(function(l) {
        l !== "selectionchange" && (c0.has(l) || Es(l, !1, t), Es(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Zr] || (e[Zr] = !0, Es("selectionchange", !1, e));
    }
  }
  function pp(t, e, l, i) {
    switch (Vp(e)) {
      case 2:
        var o = B0;
        break;
      case 8:
        o = H0;
        break;
      default:
        o = Ys;
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
  function Ts(t, e, l, i, o) {
    var s = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var v = i.stateNode.containerInfo;
          if (v === o) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var z = g.tag;
              if ((z === 3 || z === 4) && g.stateNode.containerInfo === o)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (g = Yl(v), g === null) return;
            if (z = g.tag, z === 5 || z === 6 || z === 26 || z === 27) {
              i = s = g;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    vf(function() {
      var O = s, q = Vu(l), Q = [];
      t: {
        var N = Ff.get(t);
        if (N !== void 0) {
          var j = lr, at = t;
          switch (t) {
            case "keypress":
              if (er(l) === 0) break t;
            case "keydown":
            case "keyup":
              j = lb;
              break;
            case "focusin":
              at = "focus", j = Ju;
              break;
            case "focusout":
              at = "blur", j = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ju;
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
              j = kf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Xy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = rb;
              break;
            case Vf:
            case Qf:
            case Xf:
              j = Ky;
              break;
            case Zf:
              j = ob;
              break;
            case "scroll":
            case "scrollend":
              j = Vy;
              break;
            case "wheel":
              j = cb;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Iy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = zf;
              break;
            case "toggle":
            case "beforetoggle":
              j = db;
          }
          var gt = (e & 4) !== 0, Gt = !gt && (t === "scroll" || t === "scrollend"), C = gt ? N !== null ? N + "Capture" : null : N;
          gt = [];
          for (var T = O, M; T !== null; ) {
            var V = T;
            if (M = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || M === null || C === null || (V = Hi(T, C), V != null && gt.push(
              ba(T, V, M)
            )), Gt) break;
            T = T.return;
          }
          0 < gt.length && (N = new j(
            N,
            at,
            null,
            l,
            q
          ), Q.push({ event: N, listeners: gt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", j = t === "mouseout" || t === "pointerout", N && l !== Gu && (at = l.relatedTarget || l.fromElement) && (Yl(at) || at[ql]))
            break t;
          if ((j || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, j ? (at = l.relatedTarget || l.toElement, j = O, at = at ? Yl(at) : null, at !== null && (Gt = d(at), gt = at.tag, at !== Gt || gt !== 5 && gt !== 27 && gt !== 6) && (at = null)) : (j = null, at = O), j !== at)) {
            if (gt = kf, V = "onMouseLeave", C = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (gt = zf, V = "onPointerLeave", C = "onPointerEnter", T = "pointer"), Gt = j == null ? N : Bi(j), M = at == null ? N : Bi(at), N = new gt(
              V,
              T + "leave",
              j,
              l,
              q
            ), N.target = Gt, N.relatedTarget = M, V = null, Yl(q) === O && (gt = new gt(
              C,
              T + "enter",
              at,
              l,
              q
            ), gt.target = M, gt.relatedTarget = Gt, V = gt), Gt = V, j && at)
              e: {
                for (gt = f0, C = j, T = at, M = 0, V = C; V; V = gt(V))
                  M++;
                V = 0;
                for (var ht = T; ht; ht = gt(ht))
                  V++;
                for (; 0 < M - V; )
                  C = gt(C), M--;
                for (; 0 < V - M; )
                  T = gt(T), V--;
                for (; M--; ) {
                  if (C === T || T !== null && C === T.alternate) {
                    gt = C;
                    break e;
                  }
                  C = gt(C), T = gt(T);
                }
                gt = null;
              }
            else gt = null;
            j !== null && mp(
              Q,
              N,
              j,
              gt,
              !1
            ), at !== null && Gt !== null && mp(
              Q,
              Gt,
              at,
              gt,
              !0
            );
          }
        }
        t: {
          if (N = O ? Bi(O) : window, j = N.nodeName && N.nodeName.toLowerCase(), j === "select" || j === "input" && N.type === "file")
            var Nt = Of;
          else if (_f(N))
            if (Rf)
              Nt = kb;
            else {
              Nt = xb;
              var st = vb;
            }
          else
            j = N.nodeName, !j || j.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? O && Yu(O.elementType) && (Nt = Of) : Nt = wb;
          if (Nt && (Nt = Nt(t, O))) {
            Mf(
              Q,
              Nt,
              l,
              q
            );
            break t;
          }
          st && st(t, N, O), t === "focusout" && O && N.type === "number" && O.memoizedProps.value != null && qu(N, "number", N.value);
        }
        switch (st = O ? Bi(O) : window, t) {
          case "focusin":
            (_f(st) || st.contentEditable === "true") && (Il = st, eo = O, Fi = null);
            break;
          case "focusout":
            Fi = eo = Il = null;
            break;
          case "mousedown":
            no = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            no = !1, Yf(Q, l, q);
            break;
          case "selectionchange":
            if (zb) break;
          case "keydown":
          case "keyup":
            Yf(Q, l, q);
        }
        var wt;
        if ($u)
          t: {
            switch (t) {
              case "compositionstart":
                var _t = "onCompositionStart";
                break t;
              case "compositionend":
                _t = "onCompositionEnd";
                break t;
              case "compositionupdate":
                _t = "onCompositionUpdate";
                break t;
            }
            _t = void 0;
          }
        else
          Jl ? Cf(t, l) && (_t = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (_t = "onCompositionStart");
        _t && (Ef && l.locale !== "ko" && (Jl || _t !== "onCompositionStart" ? _t === "onCompositionEnd" && Jl && (wt = xf()) : (Yn = q, Zu = "value" in Yn ? Yn.value : Yn.textContent, Jl = !0)), st = Fr(O, _t), 0 < st.length && (_t = new Sf(
          _t,
          t,
          null,
          l,
          q
        ), Q.push({ event: _t, listeners: st }), wt ? _t.data = wt : (wt = Df(l), wt !== null && (_t.data = wt)))), (wt = pb ? mb(t, l) : gb(t, l)) && (_t = Fr(O, "onBeforeInput"), 0 < _t.length && (st = new Sf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          q
        ), Q.push({
          event: st,
          listeners: _t
        }), st.data = wt)), u0(
          Q,
          t,
          O,
          l,
          q
        );
      }
      hp(Q, e);
    });
  }
  function ba(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Fr(t, e) {
    for (var l = e + "Capture", i = []; t !== null; ) {
      var o = t, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = Hi(t, l), o != null && i.unshift(
        ba(t, o, s)
      ), o = Hi(t, e), o != null && i.push(
        ba(t, o, s)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function f0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function mp(t, e, l, i, o) {
    for (var s = e._reactName, g = []; l !== null && l !== i; ) {
      var v = l, z = v.alternate, O = v.stateNode;
      if (v = v.tag, z !== null && z === i) break;
      v !== 5 && v !== 26 && v !== 27 || O === null || (z = O, o ? (O = Hi(l, s), O != null && g.unshift(
        ba(l, O, z)
      )) : o || (O = Hi(l, s), O != null && g.push(
        ba(l, O, z)
      ))), l = l.return;
    }
    g.length !== 0 && t.push({ event: e, listeners: g });
  }
  var d0 = /\r\n?/g, h0 = /\u0000|\uFFFD/g;
  function gp(t) {
    return (typeof t == "string" ? t : "" + t).replace(d0, `
`).replace(h0, "");
  }
  function yp(t, e) {
    return e = gp(e), gp(t) === e;
  }
  function Yt(t, e, l, i, o, s) {
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
        yf(t, i, s);
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
          typeof s == "function" && (l === "formAction" ? (e !== "input" && Yt(t, e, "name", o.name, o, null), Yt(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Yy.get(l) || l, Ia(t, l, i));
    }
  }
  function Cs(t, e, l, i, o, s) {
    switch (l) {
      case "style":
        yf(t, i, s);
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
        if (!of.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), e = l.slice(2, o ? l.length - 7 : void 0), s = t[Ae] || null, s = s != null ? s[l] : null, typeof s == "function" && t.removeEventListener(e, s, o), typeof i == "function")) {
              typeof s != "function" && s !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, i, o);
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
        var i = !1, o = !1, s;
        for (s in l)
          if (l.hasOwnProperty(s)) {
            var g = l[s];
            if (g != null)
              switch (s) {
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
                  Yt(t, e, s, g, l, null);
              }
          }
        o && Yt(t, e, "srcSet", l.srcSet, l, null), i && Yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        Tt("invalid", t);
        var v = s = g = o = null, z = null, O = null;
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
                  z = q;
                  break;
                case "defaultChecked":
                  O = q;
                  break;
                case "value":
                  s = q;
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
          s,
          v,
          z,
          O,
          g,
          o,
          !1
        );
        return;
      case "select":
        Tt("invalid", t), i = g = s = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (v = l[o], v != null))
            switch (o) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                i = v;
              default:
                Yt(t, e, o, v, l, null);
            }
        e = s, l = g, t.multiple = !!i, e != null ? Xl(t, !!i, e, !1) : l != null && Xl(t, !!i, l, !0);
        return;
      case "textarea":
        Tt("invalid", t), s = o = i = null;
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
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                Yt(t, e, g, v, l, null);
            }
        mf(t, i, o, s);
        return;
      case "option":
        for (z in l)
          l.hasOwnProperty(z) && (i = l[z], i != null) && (z === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : Yt(t, e, z, i, l, null));
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
        for (O in l)
          if (l.hasOwnProperty(O) && (i = l[O], i != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Yt(t, e, O, i, l, null);
            }
        return;
      default:
        if (Yu(e)) {
          for (q in l)
            l.hasOwnProperty(q) && (i = l[q], i !== void 0 && Cs(
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
  function p0(t, e, l, i) {
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
        var o = null, s = null, g = null, v = null, z = null, O = null, q = null;
        for (j in l) {
          var Q = l[j];
          if (l.hasOwnProperty(j) && Q != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = Q;
              default:
                i.hasOwnProperty(j) || Yt(t, e, j, null, i, Q);
            }
        }
        for (var N in i) {
          var j = i[N];
          if (Q = l[N], i.hasOwnProperty(N) && (j != null || Q != null))
            switch (N) {
              case "type":
                s = j;
                break;
              case "name":
                o = j;
                break;
              case "checked":
                O = j;
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
                j !== Q && Yt(
                  t,
                  e,
                  N,
                  j,
                  i,
                  Q
                );
            }
        }
        Hu(
          t,
          g,
          v,
          z,
          O,
          q,
          s,
          o
        );
        return;
      case "select":
        j = g = v = N = null;
        for (s in l)
          if (z = l[s], l.hasOwnProperty(s) && z != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                j = z;
              default:
                i.hasOwnProperty(s) || Yt(
                  t,
                  e,
                  s,
                  null,
                  i,
                  z
                );
            }
        for (o in i)
          if (s = i[o], z = l[o], i.hasOwnProperty(o) && (s != null || z != null))
            switch (o) {
              case "value":
                N = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                g = s;
              default:
                s !== z && Yt(
                  t,
                  e,
                  o,
                  s,
                  i,
                  z
                );
            }
        e = v, l = g, i = j, N != null ? Xl(t, !!l, N, !1) : !!i != !!l && (e != null ? Xl(t, !!l, e, !0) : Xl(t, !!l, l ? [] : "", !1));
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
          if (o = i[g], s = l[g], i.hasOwnProperty(g) && (o != null || s != null))
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
                o !== s && Yt(t, e, g, o, i, s);
            }
        pf(t, N, j);
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
        for (z in i)
          N = i[z], j = l[z], i.hasOwnProperty(z) && N !== j && (N != null || j != null) && (z === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : Yt(
            t,
            e,
            z,
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
        for (O in i)
          if (N = i[O], j = l[O], i.hasOwnProperty(O) && N !== j && (N != null || j != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(u(137, e));
                break;
              default:
                Yt(
                  t,
                  e,
                  O,
                  N,
                  i,
                  j
                );
            }
        return;
      default:
        if (Yu(e)) {
          for (var Gt in l)
            N = l[Gt], l.hasOwnProperty(Gt) && N !== void 0 && !i.hasOwnProperty(Gt) && Cs(
              t,
              e,
              Gt,
              void 0,
              i,
              N
            );
          for (q in i)
            N = i[q], j = l[q], !i.hasOwnProperty(q) || N === j || N === void 0 && j === void 0 || Cs(
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
    for (Q in i)
      N = i[Q], j = l[Q], !i.hasOwnProperty(Q) || N === j || N == null && j == null || Yt(t, e, Q, N, i, j);
  }
  function bp(t) {
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
  function m0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), i = 0; i < l.length; i++) {
        var o = l[i], s = o.transferSize, g = o.initiatorType, v = o.duration;
        if (s && v && bp(g)) {
          for (g = 0, v = o.responseEnd, i += 1; i < l.length; i++) {
            var z = l[i], O = z.startTime;
            if (O > v) break;
            var q = z.transferSize, Q = z.initiatorType;
            q && bp(Q) && (z = z.responseEnd, g += q * (z < v ? 1 : (v - O) / (z - O)));
          }
          if (--i, e += 8 * (s + g) / (o.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ds = null, _s = null;
  function Kr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function vp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xp(t, e) {
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
  function Ms(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Os = null;
  function g0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Os ? !1 : (Os = t, !0) : (Os = null, !1);
  }
  var wp = typeof setTimeout == "function" ? setTimeout : void 0, y0 = typeof clearTimeout == "function" ? clearTimeout : void 0, kp = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof kp < "u" ? function(t) {
    return kp.resolve(null).then(t).catch(v0);
  } : wp;
  function v0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function il(t) {
    return t === "head";
  }
  function Sp(t, e) {
    var l = e, i = 0;
    do {
      var o = l.nextSibling;
      if (t.removeChild(l), o && o.nodeType === 8)
        if (l = o.data, l === "/$" || l === "/&") {
          if (i === 0) {
            t.removeChild(o), Si(e);
            return;
          }
          i--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          i++;
        else if (l === "html")
          va(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, va(l);
          for (var s = l.firstChild; s; ) {
            var g = s.nextSibling, v = s.nodeName;
            s[ji] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = g;
          }
        } else
          l === "body" && va(t.ownerDocument.body);
      l = o;
    } while (l);
    Si(e);
  }
  function zp(t, e) {
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
  function Rs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rs(l), ju(l);
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
  function x0(t, e, l, i) {
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
              if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (s !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (s = t.getAttribute("src"), (s !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === s)
          return t;
      } else return t;
      if (t = en(t.nextSibling), t === null) break;
    }
    return null;
  }
  function w0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = en(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ep(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = en(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ns(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ls(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function k0(t, e) {
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
  var Us = null;
  function Ap(t) {
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
  function Tp(t) {
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
  function Cp(t, e, l) {
    switch (e = Kr(l), t) {
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
    ju(t);
  }
  var nn = /* @__PURE__ */ new Map(), Dp = /* @__PURE__ */ new Set();
  function Jr(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Un = F.d;
  F.d = {
    f: S0,
    r: z0,
    D: E0,
    C: A0,
    L: T0,
    m: C0,
    X: _0,
    S: D0,
    M: M0
  };
  function S0() {
    var t = Un.f(), e = qr();
    return t || e;
  }
  function z0(t) {
    var e = Gl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Zd(e) : Un.r(t);
  }
  var xi = typeof document > "u" ? null : document;
  function _p(t, e, l) {
    var i = xi;
    if (i && typeof e == "string" && e) {
      var o = Ke(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), Dp.has(o) || (Dp.add(o), t = { rel: t, crossOrigin: l, href: e }, i.querySelector(o) === null && (e = i.createElement("link"), ye(e, "link", t), ce(e), i.head.appendChild(e)));
    }
  }
  function E0(t) {
    Un.D(t), _p("dns-prefetch", t, null);
  }
  function A0(t, e) {
    Un.C(t, e), _p("preconnect", t, e);
  }
  function T0(t, e, l) {
    Un.L(t, e, l);
    var i = xi;
    if (i && t && e) {
      var o = 'link[rel="preload"][as="' + Ke(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + Ke(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + Ke(
        l.imageSizes
      ) + '"]')) : o += '[href="' + Ke(t) + '"]';
      var s = o;
      switch (e) {
        case "style":
          s = wi(t);
          break;
        case "script":
          s = ki(t);
      }
      nn.has(s) || (t = y(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), nn.set(s, t), i.querySelector(o) !== null || e === "style" && i.querySelector(xa(s)) || e === "script" && i.querySelector(wa(s)) || (e = i.createElement("link"), ye(e, "link", t), ce(e), i.head.appendChild(e)));
    }
  }
  function C0(t, e) {
    Un.m(t, e);
    var l = xi;
    if (l && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Ke(i) + '"][href="' + Ke(t) + '"]', s = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ki(t);
      }
      if (!nn.has(s) && (t = y({ rel: "modulepreload", href: t }, e), nn.set(s, t), l.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(wa(s)))
              return;
        }
        i = l.createElement("link"), ye(i, "link", t), ce(i), l.head.appendChild(i);
      }
    }
  }
  function D0(t, e, l) {
    Un.S(t, e, l);
    var i = xi;
    if (i && t) {
      var o = Vl(i).hoistableStyles, s = wi(t);
      e = e || "default";
      var g = o.get(s);
      if (!g) {
        var v = { loading: 0, preload: null };
        if (g = i.querySelector(
          xa(s)
        ))
          v.loading = 5;
        else {
          t = y(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = nn.get(s)) && js(t, l);
          var z = g = i.createElement("link");
          ce(z), ye(z, "link", t), z._p = new Promise(function(O, q) {
            z.onload = O, z.onerror = q;
          }), z.addEventListener("load", function() {
            v.loading |= 1;
          }), z.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ir(g, e, i);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: v
        }, o.set(s, g);
      }
    }
  }
  function _0(t, e) {
    Un.X(t, e);
    var l = xi;
    if (l && t) {
      var i = Vl(l).hoistableScripts, o = ki(t), s = i.get(o);
      s || (s = l.querySelector(wa(o)), s || (t = y({ src: t, async: !0 }, e), (e = nn.get(o)) && Bs(t, e), s = l.createElement("script"), ce(s), ye(s, "link", t), l.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function M0(t, e) {
    Un.M(t, e);
    var l = xi;
    if (l && t) {
      var i = Vl(l).hoistableScripts, o = ki(t), s = i.get(o);
      s || (s = l.querySelector(wa(o)), s || (t = y({ src: t, async: !0, type: "module" }, e), (e = nn.get(o)) && Bs(t, e), s = l.createElement("script"), ce(s), ye(s, "link", t), l.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function Mp(t, e, l, i) {
    var o = (o = ct.current) ? Jr(o) : null;
    if (!o) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = wi(l.href), l = Vl(
          o
        ).hoistableStyles, i = l.get(e), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = wi(l.href);
          var s = Vl(
            o
          ).hoistableStyles, g = s.get(t);
          if (g || (o = o.ownerDocument || o, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(t, g), (s = o.querySelector(
            xa(t)
          )) && !s._p && (g.instance = s, g.state.loading = 5), nn.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, nn.set(t, l), s || O0(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ki(l), l = Vl(
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
  function wi(t) {
    return 'href="' + Ke(t) + '"';
  }
  function xa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Op(t) {
    return y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function O0(t, e, l, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    }), ye(e, "link", l), ce(e), t.head.appendChild(e));
  }
  function ki(t) {
    return '[src="' + Ke(t) + '"]';
  }
  function wa(t) {
    return "script[async]" + t;
  }
  function Rp(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Ke(l.href) + '"]'
          );
          if (i)
            return e.instance = i, ce(i), i;
          var o = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), ce(i), ye(i, "style", o), Ir(i, l.precedence, t), e.instance = i;
        case "stylesheet":
          o = wi(l.href);
          var s = t.querySelector(
            xa(o)
          );
          if (s)
            return e.state.loading |= 4, e.instance = s, ce(s), s;
          i = Op(l), (o = nn.get(o)) && js(i, o), s = (t.ownerDocument || t).createElement("link"), ce(s);
          var g = s;
          return g._p = new Promise(function(v, z) {
            g.onload = v, g.onerror = z;
          }), ye(s, "link", i), e.state.loading |= 4, Ir(s, l.precedence, t), e.instance = s;
        case "script":
          return s = ki(l.src), (o = t.querySelector(
            wa(s)
          )) ? (e.instance = o, ce(o), o) : (i = l, (o = nn.get(s)) && (i = y({}, l), Bs(i, o)), t = t.ownerDocument || t, o = t.createElement("script"), ce(o), ye(o, "link", i), t.head.appendChild(o), e.instance = o);
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
    ), o = i.length ? i[i.length - 1] : null, s = o, g = 0; g < i.length; g++) {
      var v = i[g];
      if (v.dataset.precedence === e) s = v;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function js(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Bs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var $r = null;
  function Np(t, e, l) {
    if ($r === null) {
      var i = /* @__PURE__ */ new Map(), o = $r = /* @__PURE__ */ new Map();
      o.set(l, i);
    } else
      o = $r, i = o.get(l), i || (i = /* @__PURE__ */ new Map(), o.set(l, i));
    if (i.has(t)) return i;
    for (i.set(t, null), l = l.getElementsByTagName(t), o = 0; o < l.length; o++) {
      var s = l[o];
      if (!(s[ji] || s[he] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = s.getAttribute(e) || "";
        g = t + g;
        var v = i.get(g);
        v ? v.push(s) : i.set(g, [s]);
      }
    }
    return i;
  }
  function Lp(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function R0(t, e, l) {
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
  function Up(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function N0(t, e, l, i) {
    if (l.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var o = wi(i.href), s = e.querySelector(
          xa(o)
        );
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Wr.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = s, ce(s);
          return;
        }
        s = e.ownerDocument || e, i = Op(i), (o = nn.get(o)) && js(i, o), s = s.createElement("link"), ce(s);
        var g = s;
        g._p = new Promise(function(v, z) {
          g.onload = v, g.onerror = z;
        }), ye(s, "link", i), l.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Wr.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Hs = 0;
  function L0(t, e) {
    return t.stylesheets && t.count === 0 && tu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var i = setTimeout(function() {
        if (t.stylesheets && tu(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Hs === 0 && (Hs = 62500 * m0());
      var o = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tu(t, t.stylesheets), t.unsuspend)) {
            var s = t.unsuspend;
            t.unsuspend = null, s();
          }
        },
        (t.imgBytes > Hs ? 50 : 800) + e
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Pr = /* @__PURE__ */ new Map(), e.forEach(U0, t), Pr = null, Wr.call(t));
  }
  function U0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Pr.get(t);
      if (l) var i = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Pr.set(t, l);
        for (var o = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var g = o[s];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (l.set(g.dataset.precedence, g), i = g);
        }
        i && l.set(null, i);
      }
      o = e.instance, g = o.getAttribute("data-precedence"), s = l.get(g) || i, s === i && l.set(null, o), l.set(g, o), this.count++, i = Wr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), s ? s.parentNode.insertBefore(o, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ka = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function j0(t, e, l, i, o, s, g, v, z) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ru(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ru(0), this.hiddenUpdates = Ru(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jp(t, e, l, i, o, s, g, v, z, O, q, Q) {
    return t = new j0(
      t,
      e,
      l,
      g,
      z,
      O,
      q,
      Q,
      v
    ), e = 1, s === !0 && (e |= 24), s = Be(3, null, null, e), t.current = s, s.stateNode = t, e = bo(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: l,
      cache: e
    }, ko(s), t;
  }
  function Bp(t) {
    return t ? (t = Pl, t) : Pl;
  }
  function Hp(t, e, l, i, o, s) {
    o = Bp(o), i.context === null ? i.context = o : i.pendingContext = o, i = Fn(e), i.payload = { element: l }, s = s === void 0 ? null : s, s !== null && (i.callback = s), l = Kn(t, i, e), l !== null && (Oe(l, t, e), ta(l, t, e));
  }
  function qp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function qs(t, e) {
    qp(t, e), (t = t.alternate) && qp(t, e);
  }
  function Yp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = bl(t, 67108864);
      e !== null && Oe(e, t, 67108864), qs(t, 67108864);
    }
  }
  function Gp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ve();
      e = Nu(e);
      var l = bl(t, e);
      l !== null && Oe(l, t, e), qs(t, e);
    }
  }
  var eu = !0;
  function B0(t, e, l, i) {
    var o = _.T;
    _.T = null;
    var s = F.p;
    try {
      F.p = 2, Ys(t, e, l, i);
    } finally {
      F.p = s, _.T = o;
    }
  }
  function H0(t, e, l, i) {
    var o = _.T;
    _.T = null;
    var s = F.p;
    try {
      F.p = 8, Ys(t, e, l, i);
    } finally {
      F.p = s, _.T = o;
    }
  }
  function Ys(t, e, l, i) {
    if (eu) {
      var o = Gs(i);
      if (o === null)
        Ts(
          t,
          e,
          i,
          nu,
          l
        ), Qp(t, i);
      else if (Y0(
        o,
        t,
        e,
        l,
        i
      ))
        i.stopPropagation();
      else if (Qp(t, i), e & 4 && -1 < q0.indexOf(t)) {
        for (; o !== null; ) {
          var s = Gl(o);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var g = hl(s.pendingLanes);
                  if (g !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var z = 1 << 31 - Qt(g);
                      v.entanglements[1] |= z, g &= ~z;
                    }
                    pn(s), (Ut & 6) === 0 && (Br = we() + 500, ga(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = bl(s, 2), v !== null && Oe(v, s, 2), qr(), qs(s, 2);
            }
          if (s = Gs(i), s === null && Ts(
            t,
            e,
            i,
            nu,
            l
          ), s === o) break;
          o = s;
        }
        o !== null && i.stopPropagation();
      } else
        Ts(
          t,
          e,
          i,
          null,
          l
        );
    }
  }
  function Gs(t) {
    return t = Vu(t), Vs(t);
  }
  var nu = null;
  function Vs(t) {
    if (nu = null, t = Yl(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = f(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = p(e), t !== null) return t;
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
  function Vp(t) {
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
          case G:
            return 2;
          case W:
            return 8;
          case yt:
          case Et:
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
  var Qs = !1, al = null, rl = null, ul = null, Sa = /* @__PURE__ */ new Map(), za = /* @__PURE__ */ new Map(), ol = [], q0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Qp(t, e) {
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
        Sa.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        za.delete(e.pointerId);
    }
  }
  function Ea(t, e, l, i, o, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [o]
    }, e !== null && (e = Gl(e), e !== null && Yp(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function Y0(t, e, l, i, o) {
    switch (e) {
      case "focusin":
        return al = Ea(
          al,
          t,
          e,
          l,
          i,
          o
        ), !0;
      case "dragenter":
        return rl = Ea(
          rl,
          t,
          e,
          l,
          i,
          o
        ), !0;
      case "mouseover":
        return ul = Ea(
          ul,
          t,
          e,
          l,
          i,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return Sa.set(
          s,
          Ea(
            Sa.get(s) || null,
            t,
            e,
            l,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, za.set(
          s,
          Ea(
            za.get(s) || null,
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
  function Xp(t) {
    var e = Yl(t.target);
    if (e !== null) {
      var l = d(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = f(l), e !== null) {
            t.blockedOn = e, af(t.priority, function() {
              Gp(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(l), e !== null) {
            t.blockedOn = e, af(t.priority, function() {
              Gp(l);
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
      var l = Gs(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var i = new l.constructor(
          l.type,
          l
        );
        Gu = i, l.target.dispatchEvent(i), Gu = null;
      } else
        return e = Gl(l), e !== null && Yp(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Zp(t, e, l) {
    lu(t) && l.delete(e);
  }
  function G0() {
    Qs = !1, al !== null && lu(al) && (al = null), rl !== null && lu(rl) && (rl = null), ul !== null && lu(ul) && (ul = null), Sa.forEach(Zp), za.forEach(Zp);
  }
  function iu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Qs || (Qs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      G0
    )));
  }
  var au = null;
  function Fp(t) {
    au !== t && (au = t, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        au === t && (au = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], i = t[e + 1], o = t[e + 2];
          if (typeof i != "function") {
            if (Vs(i || l) === null)
              continue;
            break;
          }
          var s = Gl(l);
          s !== null && (t.splice(e, 3), e -= 3, Go(
            s,
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
  function Si(t) {
    function e(z) {
      return iu(z, t);
    }
    al !== null && iu(al, t), rl !== null && iu(rl, t), ul !== null && iu(ul, t), Sa.forEach(e), za.forEach(e);
    for (var l = 0; l < ol.length; l++) {
      var i = ol[l];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < ol.length && (l = ol[0], l.blockedOn === null); )
      Xp(l), l.blockedOn === null && ol.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (i = 0; i < l.length; i += 3) {
        var o = l[i], s = l[i + 1], g = o[Ae] || null;
        if (typeof s == "function")
          g || Fp(l);
        else if (g) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, g = s[Ae] || null)
              v = g.formAction;
            else if (Vs(o) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? l[i + 1] = v : (l.splice(i, 3), i -= 3), Fp(l);
        }
      }
  }
  function Kp() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
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
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
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
  function Xs(t) {
    this._internalRoot = t;
  }
  ru.prototype.render = Xs.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var l = e.current, i = Ve();
    Hp(l, i, t, e, null, null);
  }, ru.prototype.unmount = Xs.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Hp(t.current, 2, null, t, null, null), qr(), e[ql] = null;
    }
  };
  function ru(t) {
    this._internalRoot = t;
  }
  ru.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = lf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < ol.length && e !== 0 && e < ol[l].priority; l++) ;
      ol.splice(l, 0, t), l === 0 && Xp(t);
    }
  };
  var Jp = r.version;
  if (Jp !== "19.2.3")
    throw Error(
      u(
        527,
        Jp,
        "19.2.3"
      )
    );
  F.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = h(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var V0 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber)
      try {
        ke = uu.inject(
          V0
        ), ue = uu;
      } catch {
      }
  }
  return Ta.createRoot = function(t, e) {
    if (!c(t)) throw Error(u(299));
    var l = !1, i = "", o = nh, s = lh, g = ih;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (g = e.onRecoverableError)), e = jp(
      t,
      1,
      !1,
      null,
      null,
      l,
      i,
      null,
      o,
      s,
      g,
      Kp
    ), t[ql] = e.current, As(t), new Xs(e);
  }, Ta.hydrateRoot = function(t, e, l) {
    if (!c(t)) throw Error(u(299));
    var i = !1, o = "", s = nh, g = lh, v = ih, z = null;
    return l != null && (l.unstable_strictMode === !0 && (i = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (s = l.onUncaughtError), l.onCaughtError !== void 0 && (g = l.onCaughtError), l.onRecoverableError !== void 0 && (v = l.onRecoverableError), l.formState !== void 0 && (z = l.formState)), e = jp(
      t,
      1,
      !0,
      e,
      l ?? null,
      i,
      o,
      z,
      s,
      g,
      v,
      Kp
    ), e.context = Bp(null), l = e.current, i = Ve(), i = Nu(i), o = Fn(i), o.callback = null, Kn(l, o, i), l = i, e.current.lanes = l, Ui(e, l), pn(e), t[ql] = e.current, As(t), new ru(e);
  }, Ta.version = "19.2.3", Ta;
}
var am;
function P0() {
  if (am) return Ks.exports;
  am = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Ks.exports = W0(), Ks.exports;
}
var tv = P0(), ev = Object.defineProperty, nv = (n, r, a) => r in n ? ev(n, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[r] = a, ou = (n, r, a) => nv(n, typeof r != "symbol" ? r + "" : r, a);
const lv = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, iv = {
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
}, av = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
};
function rv(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (r, a, u) => `${a}-${u.toLowerCase()}`
  );
}
function rg(n) {
  return n.replace(/[-:]([a-z])/g, (r, a) => `${a.toUpperCase()}`);
}
const uv = {
  stringify: (n) => n.name,
  parse: (n, r, a) => {
    const u = (() => {
      const c = rg(r);
      if (typeof a < "u" && c in a.container)
        return a.container[c];
    })();
    return typeof u == "function" ? u.bind(a) : void 0;
  }
}, ov = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, sv = {
  stringify: (n) => n,
  parse: (n) => n
}, Ws = {
  string: sv,
  number: ov,
  boolean: lv,
  function: iv,
  method: uv,
  json: av
}, Ca = /* @__PURE__ */ Symbol.for("r2wc.render"), su = /* @__PURE__ */ Symbol.for("r2wc.connected"), Ml = /* @__PURE__ */ Symbol.for("r2wc.context"), Qe = /* @__PURE__ */ Symbol.for("r2wc.props");
function cv(n, r, a) {
  var u, c, d;
  r.props || (r.props = n.propTypes ? Object.keys(n.propTypes) : []), r.events || (r.events = []);
  const f = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), p = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), m = {}, h = {}, b = {}, y = {};
  for (const x of f) {
    m[x] = Array.isArray(r.props) ? "string" : r.props[x];
    const E = rv(x);
    b[x] = E, y[E] = x;
  }
  for (const x of p)
    h[x] = Array.isArray(r.events) ? {} : r.events[x];
  class w extends HTMLElement {
    constructor() {
      super(), ou(this, d, !0), ou(this, c), ou(this, u, {}), ou(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[Qe].container = this.container;
      for (const E of f) {
        const R = b[E], L = this.getAttribute(R), D = m[E], Z = D ? Ws[D] : null;
        if (D === "method") {
          const H = rg(R);
          Object.defineProperty(this[Qe].container, H, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Qe][H];
            },
            set(lt) {
              this[Qe][H] = lt, this[Ca]();
            }
          }), this[Qe][E] = Z.parse(L, R, this);
        }
        Z != null && Z.parse && L && (this[Qe][E] = Z.parse(L, R, this));
      }
      for (const E of p)
        this[Qe][E] = (R) => {
          const L = E.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(L, { detail: R, ...h[E] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(y);
    }
    connectedCallback() {
      this[su] = !0, this[Ca]();
    }
    disconnectedCallback() {
      this[su] = !1, this[Ml] && a.unmount(this[Ml]), delete this[Ml];
    }
    attributeChangedCallback(E, R, L) {
      const D = y[E], Z = m[D], H = Z ? Ws[Z] : null;
      D in m && H != null && H.parse && L && (this[Qe][D] = H.parse(L, E, this), this[Ca]());
    }
    [(d = su, c = Ml, u = Qe, Ca)]() {
      this[su] && (this[Ml] ? a.update(this[Ml], this[Qe]) : this[Ml] = a.mount(
        this.container,
        n,
        this[Qe]
      ));
    }
  }
  for (const x of f) {
    const E = b[x], R = m[x];
    Object.defineProperty(w.prototype, x, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Qe][x];
      },
      set(L) {
        this[Qe][x] = L;
        const D = R ? Ws[R] : null;
        if (D != null && D.stringify) {
          const Z = D.stringify(L, E, this);
          this.getAttribute(E) !== Z && this.setAttribute(E, Z);
        } else
          this[Ca]();
      }
    });
  }
  return w;
}
function fv(n, r, a) {
  const u = tv.createRoot(n), c = ag.createElement(r, a);
  return u.render(c), {
    root: u,
    ReactComponent: r
  };
}
function dv({ root: n, ReactComponent: r }, a) {
  const u = ag.createElement(r, a);
  n.render(u);
}
function hv({ root: n }) {
  n.unmount();
}
function pv(n, r = {}) {
  return cv(n, r, { mount: fv, update: dv, unmount: hv });
}
async function mv() {
  const n = /* @__PURE__ */ new Date(), r = new Date(n);
  r.setDate(r.getDate() - 1);
  const a = rm(n), u = rm(r), c = await um(a), d = await um(u), f = new Uint8Array(c.length);
  for (let p = 0; p < c.length; p++)
    f[p] = c[p] ^ d[p];
  return gv(f).substring(0, 64);
}
function rm(n) {
  const r = n.getFullYear(), a = String(n.getMonth() + 1).padStart(2, "0"), u = String(n.getDate()).padStart(2, "0");
  return `${r}-${a}-${u}`;
}
async function um(n) {
  const r = new TextEncoder().encode(n), a = await crypto.subtle.digest("SHA-256", r);
  return new Uint8Array(a);
}
function gv(n) {
  return Array.from(n).map((r) => r.toString(16).padStart(2, "0")).join("");
}
const yv = async (n, r, a, u, c, d) => {
  if (r && n)
    try {
      const f = {
        assistantId: a,
        message: r,
        sourceFilter: u,
        userValues: c,
        chatId: d
      }, p = await fetch(n, {
        method: "POST",
        credentials: "include",
        headers: await ug(),
        body: JSON.stringify(f)
      });
      if (!p.ok)
        throw new Error(`Response status: ${p.status}`);
      if (!p.body)
        return;
      const m = p.body.pipeThrough(new TextDecoderStream()).getReader();
      return console.log("Reader::: ", m), {
        reader: m,
        xChatId: p.headers.has("X-Chat-Id") && p.headers.get("X-Chat-Id") !== null ? p.headers.get("X-Chat-Id") : void 0,
        xChatToken: p.headers.has("X-Chat-Token") && p.headers.get("X-Chat-Token") !== null ? p.headers.get("X-Chat-Token") : void 0
      };
    } catch (f) {
      console.log("Chat POST message failed: ", f);
    }
};
async function ug(n) {
  const r = new Headers();
  r.set("Content-Type", "application/json; charset=utf-8");
  const a = await mv();
  r.set("X-API-Key", a);
  const u = localStorage.getItem("lruRagChatToken");
  return u && r.set("X-Chat-Token", u), r;
}
async function bv(n = void 0, r = void 0) {
  if (r && n)
    try {
      const a = await fetch(`${n}/${r}`, {
        method: "GET",
        credentials: "include",
        headers: await ug()
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
const vv = { header: { title: "🎓 Lærerens Indholdsassistent", subtitle: "Omdan webindhold til undervisningsmaterialer" }, contentSource: { chooseLabel: "Hvordan vil du indlæse indhold?", loadFromUrl: "🌐 Indlæs fra URL", uploadPdf: "📄 Upload PDF", urlLabel: "Indlæs fra URL", uploadPdfLabel: "Upload PDF", urlPlaceholder: "https://eksempel.dk/artikel", loadUrlButton: "Indlæs URL", loading: "Indlæser...", uploadPdfButton: "📄 Upload PDF", contentLoadedFrom: "✓ Indhold indlæst fra:", pdfLoaded: "✓ PDF indlæst:", startFresh: "🔄 Start forfra", waitingForFile: "Venter på filvalg..." }, quickActions: { title: "Hurtige handlinger:", summarize: "📝 Opsummer", createPodcast: "🎙️ Lav Podcast", generateQuestions: "❓ Generer spørgsmål", studyGuide: "📚 Studievejledning", quiz: "🧪 Quiz" }, suggestions: { summarize: "Lav en kortfattet opsummering af hovedpunkterne fra dette indhold.", createPodcast: "Lav et podcast-manuskript baseret på dette indhold, herunder introduktion, diskussionspunkter og konklusion.", generateQuestions: "Lav 10 forståelsesspørgsmål om dette indhold, der egner sig til elever.", studyGuide: "Lav en detaljeret studievejledning med nøglebegreber, hovedkoncepter og vigtige pointer.", quiz: "Lav en quiz med 5 multiple choice-spørgsmål baseret på dette indhold med svarforklaringer." }, chat: { emptyStateTitle: "👆 Indtast en URL eller upload en PDF for at komme i gang", emptyStateSubtitle: "Indlæs indhold, og jeg hjælper dig med at lave undervisningsmaterialer fra det", inputPlaceholder: "Bed mig om at gøre noget med dette indhold...", inputPlaceholderEmpty: "Spørg mig om noget eller indlæs indhold for at analysere...", sendButton: "Send", pdfLoadedMessage: "Jeg har indlæst PDF-indholdet ({pages} sider). Du kan nu bede mig om at opsummere det, lave et podcast-manuskript, generere spørgsmål eller noget andet, du gerne vil have mig til at gøre med dette indhold.", urlLoadedMessage: "Jeg har indlæst indholdet fra {url}. Du kan nu bede mig om at opsummere det, lave et podcast-manuskript, generere spørgsmål eller noget andet, du gerne vil have mig til at gøre med dette indhold.", copyTooltip: "Kopier til udklipsholder", copiedTooltip: "Kopieret!", readAloudTooltip: "Læs højt", stopReadingTooltip: "Stop læsning" }, providers: { claude: "Claude", openai: "OpenAI", rag: "RAG" }, errors: { pdfUploadFailed: "Kunne ikke uploade PDF-filen", urlFetchFailed: "Kunne ikke hente websidens indhold. Sørg for, at URL'en er gyldig.", pdfNotValid: "Upload venligst en PDF-fil", fetchContentLength: "Hentet indhold længde:", apiError: `❌ Fejl: {error}

Tjek venligst:
1. Din API-nøgle er konfigureret i .env.local
2. API-nøglen er gyldig
3. Du har tilstrækkelige kreditter

Tjek browserkonsollen for flere detaljer.` } }, xv = { header: { title: "🎓 Teacher's Content Assistant", subtitle: "Transform web content into educational materials" }, contentSource: { chooseLabel: "How would you like to load content?", loadFromUrl: "🌐 Load from URL", uploadPdf: "📄 Upload PDF", urlLabel: "Load from URL", uploadPdfLabel: "Upload PDF", urlPlaceholder: "https://example.com/article", loadUrlButton: "Load URL", loading: "Loading...", uploadPdfButton: "📄 Upload PDF", contentLoadedFrom: "✓ Content loaded from:", pdfLoaded: "✓ PDF loaded:", startFresh: "🔄 Start Fresh", waitingForFile: "Waiting for file selection..." }, quickActions: { title: "Quick Actions:", summarize: "📝 Summarize", createPodcast: "🎙️ Create Podcast", generateQuestions: "❓ Generate Questions", studyGuide: "📚 Study Guide", quiz: "🧪 Quiz" }, suggestions: { summarize: "Create a concise summary of the main points from this content.", createPodcast: "Create a podcast script based on this content, including an introduction, key discussion points, and conclusion.", generateQuestions: "Create 10 comprehension questions about this content suitable for students.", studyGuide: "Create a detailed study guide with key terms, main concepts, and important takeaways.", quiz: "Create a 5-question multiple choice quiz based on this content with answer explanations." }, chat: { emptyStateTitle: "👆 Enter a URL or upload a PDF to get started", emptyStateSubtitle: "Load content and I'll help you create educational materials from it", inputPlaceholder: "Ask me to do something with this content...", inputPlaceholderEmpty: "Ask me anything or load content to analyze...", sendButton: "Send", pdfLoadedMessage: "I've loaded the PDF content ({pages} pages). You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.", urlLoadedMessage: "I've loaded the content from {url}. You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.", copyTooltip: "Copy to clipboard", copiedTooltip: "Copied!", readAloudTooltip: "Read aloud", stopReadingTooltip: "Stop reading" }, providers: { claude: "Claude", openai: "OpenAI", rag: "RAG" }, errors: { pdfUploadFailed: "Failed to upload PDF file", urlFetchFailed: "Failed to fetch the webpage content. Please make sure the URL is valid.", pdfNotValid: "Please upload a PDF file", fetchContentLength: "Fetched content length:", apiError: `❌ Error: {error}

Please check:
1. Your API key is configured in .env.local
2. The API key is valid
3. You have sufficient credits

Check the browser console for more details.` } }, wv = {
  da: vv,
  en: xv
}, og = Zt.createContext(
  void 0
);
function kv({ children: n }) {
  const [r, a] = Zt.useState("da");
  Zt.useEffect(() => {
    const d = localStorage.getItem("language");
    d && (d === "da" || d === "en") && a(d);
  }, []);
  const u = (d) => {
    a(d), localStorage.setItem("language", d);
  }, c = wv[r];
  return /* @__PURE__ */ et.jsx(
    og.Provider,
    {
      value: { language: r, setLanguage: u, t: c },
      children: n
    }
  );
}
function zu() {
  const n = Zt.useContext(og);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function Sv({ title: n }) {
  const { language: r, setLanguage: a, t: u } = zu();
  return /* @__PURE__ */ et.jsx("div", { className: "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-8 py-4", children: /* @__PURE__ */ et.jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ et.jsxs("div", { children: [
      /* @__PURE__ */ et.jsx("h1", { className: "text-2xl font-bold rainbow-text", children: n }),
      /* @__PURE__ */ et.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: u.header.subtitle })
    ] }),
    /* @__PURE__ */ et.jsxs(
      "button",
      {
        onClick: () => a(r === "en" ? "da" : "en"),
        className: "relative inline-flex h-10 w-20 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        "aria-label": "Toggle language",
        children: [
          /* @__PURE__ */ et.jsx(
            "span",
            {
              className: `absolute text-xl opacity-60 ${r === "en" ? "right-2.5" : "left-2.5"}`,
              children: r === "en" ? "🇩🇰" : "🇬🇧"
            }
          ),
          /* @__PURE__ */ et.jsx(
            "span",
            {
              className: `inline-flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform ${r === "en" ? "translate-x-1" : "translate-x-11"}`,
              children: /* @__PURE__ */ et.jsx("span", { className: "text-xl", children: r === "en" ? "🇬🇧" : "🇩🇰" })
            }
          )
        ]
      }
    )
  ] }) });
}
function sg(n) {
  var r, a, u = "";
  if (typeof n == "string" || typeof n == "number") u += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var c = n.length;
    for (r = 0; r < c; r++) n[r] && (a = sg(n[r])) && (u && (u += " "), u += a);
  } else for (a in n) n[a] && (u && (u += " "), u += a);
  return u;
}
function cg() {
  for (var n, r, a = 0, u = "", c = arguments.length; a < c; a++) (n = arguments[a]) && (r = sg(n)) && (u && (u += " "), u += r);
  return u;
}
const om = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, sm = cg, fg = (n, r) => (a) => {
  var u;
  if (r?.variants == null) return sm(n, a?.class, a?.className);
  const { variants: c, defaultVariants: d } = r, f = Object.keys(c).map((h) => {
    const b = a?.[h], y = d?.[h];
    if (b === null) return null;
    const w = om(b) || om(y);
    return c[h][w];
  }), p = a && Object.entries(a).reduce((h, b) => {
    let [y, w] = b;
    return w === void 0 || (h[y] = w), h;
  }, {}), m = r == null || (u = r.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((h, b) => {
    let { class: y, className: w, ...x } = b;
    return Object.entries(x).every((E) => {
      let [R, L] = E;
      return Array.isArray(L) ? L.includes({
        ...d,
        ...p
      }[R]) : {
        ...d,
        ...p
      }[R] === L;
    }) ? [
      ...h,
      y,
      w
    ] : h;
  }, []);
  return sm(n, f, m, a?.class, a?.className);
}, zv = (n, r) => {
  const a = new Array(n.length + r.length);
  for (let u = 0; u < n.length; u++)
    a[u] = n[u];
  for (let u = 0; u < r.length; u++)
    a[n.length + u] = r[u];
  return a;
}, Ev = (n, r) => ({
  classGroupId: n,
  validator: r
}), dg = (n = /* @__PURE__ */ new Map(), r = null, a) => ({
  nextPart: n,
  validators: r,
  classGroupId: a
}), bu = "-", cm = [], Av = "arbitrary..", Tv = (n) => {
  const r = Dv(n), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: u
  } = n;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return Cv(f);
      const p = f.split(bu), m = p[0] === "" && p.length > 1 ? 1 : 0;
      return hg(p, m, r);
    },
    getConflictingClassGroupIds: (f, p) => {
      if (p) {
        const m = u[f], h = a[f];
        return m ? h ? zv(h, m) : m : h || cm;
      }
      return a[f] || cm;
    }
  };
}, hg = (n, r, a) => {
  if (n.length - r === 0)
    return a.classGroupId;
  const c = n[r], d = a.nextPart.get(c);
  if (d) {
    const h = hg(n, r + 1, d);
    if (h) return h;
  }
  const f = a.validators;
  if (f === null)
    return;
  const p = r === 0 ? n.join(bu) : n.slice(r).join(bu), m = f.length;
  for (let h = 0; h < m; h++) {
    const b = f[h];
    if (b.validator(p))
      return b.classGroupId;
  }
}, Cv = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = n.slice(1, -1), a = r.indexOf(":"), u = r.slice(0, a);
  return u ? Av + u : void 0;
})(), Dv = (n) => {
  const {
    theme: r,
    classGroups: a
  } = n;
  return _v(a, r);
}, _v = (n, r) => {
  const a = dg();
  for (const u in n) {
    const c = n[u];
    Oc(c, a, u, r);
  }
  return a;
}, Oc = (n, r, a, u) => {
  const c = n.length;
  for (let d = 0; d < c; d++) {
    const f = n[d];
    Mv(f, r, a, u);
  }
}, Mv = (n, r, a, u) => {
  if (typeof n == "string") {
    Ov(n, r, a);
    return;
  }
  if (typeof n == "function") {
    Rv(n, r, a, u);
    return;
  }
  Nv(n, r, a, u);
}, Ov = (n, r, a) => {
  const u = n === "" ? r : pg(r, n);
  u.classGroupId = a;
}, Rv = (n, r, a, u) => {
  if (Lv(n)) {
    Oc(n(u), r, a, u);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(Ev(a, n));
}, Nv = (n, r, a, u) => {
  const c = Object.entries(n), d = c.length;
  for (let f = 0; f < d; f++) {
    const [p, m] = c[f];
    Oc(m, pg(r, p), a, u);
  }
}, pg = (n, r) => {
  let a = n;
  const u = r.split(bu), c = u.length;
  for (let d = 0; d < c; d++) {
    const f = u[d];
    let p = a.nextPart.get(f);
    p || (p = dg(), a.nextPart.set(f, p)), a = p;
  }
  return a;
}, Lv = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, Uv = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
  const c = (d, f) => {
    a[d] = f, r++, r > n && (r = 0, u = a, a = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(d) {
      let f = a[d];
      if (f !== void 0)
        return f;
      if ((f = u[d]) !== void 0)
        return c(d, f), f;
    },
    set(d, f) {
      d in a ? a[d] = f : c(d, f);
    }
  };
}, vc = "!", fm = ":", jv = [], dm = (n, r, a, u, c) => ({
  modifiers: n,
  hasImportantModifier: r,
  baseClassName: a,
  maybePostfixModifierPosition: u,
  isExternal: c
}), Bv = (n) => {
  const {
    prefix: r,
    experimentalParseClassName: a
  } = n;
  let u = (c) => {
    const d = [];
    let f = 0, p = 0, m = 0, h;
    const b = c.length;
    for (let R = 0; R < b; R++) {
      const L = c[R];
      if (f === 0 && p === 0) {
        if (L === fm) {
          d.push(c.slice(m, R)), m = R + 1;
          continue;
        }
        if (L === "/") {
          h = R;
          continue;
        }
      }
      L === "[" ? f++ : L === "]" ? f-- : L === "(" ? p++ : L === ")" && p--;
    }
    const y = d.length === 0 ? c : c.slice(m);
    let w = y, x = !1;
    y.endsWith(vc) ? (w = y.slice(0, -1), x = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(vc) && (w = y.slice(1), x = !0)
    );
    const E = h && h > m ? h - m : void 0;
    return dm(d, x, w, E);
  };
  if (r) {
    const c = r + fm, d = u;
    u = (f) => f.startsWith(c) ? d(f.slice(c.length)) : dm(jv, !1, f, void 0, !0);
  }
  if (a) {
    const c = u;
    u = (d) => a({
      className: d,
      parseClassName: c
    });
  }
  return u;
}, Hv = (n) => {
  const r = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((a, u) => {
    r.set(a, 1e6 + u);
  }), (a) => {
    const u = [];
    let c = [];
    for (let d = 0; d < a.length; d++) {
      const f = a[d], p = f[0] === "[", m = r.has(f);
      p || m ? (c.length > 0 && (c.sort(), u.push(...c), c = []), u.push(f)) : c.push(f);
    }
    return c.length > 0 && (c.sort(), u.push(...c)), u;
  };
}, qv = (n) => ({
  cache: Uv(n.cacheSize),
  parseClassName: Bv(n),
  sortModifiers: Hv(n),
  ...Tv(n)
}), Yv = /\s+/, Gv = (n, r) => {
  const {
    parseClassName: a,
    getClassGroupId: u,
    getConflictingClassGroupIds: c,
    sortModifiers: d
  } = r, f = [], p = n.trim().split(Yv);
  let m = "";
  for (let h = p.length - 1; h >= 0; h -= 1) {
    const b = p[h], {
      isExternal: y,
      modifiers: w,
      hasImportantModifier: x,
      baseClassName: E,
      maybePostfixModifierPosition: R
    } = a(b);
    if (y) {
      m = b + (m.length > 0 ? " " + m : m);
      continue;
    }
    let L = !!R, D = u(L ? E.substring(0, R) : E);
    if (!D) {
      if (!L) {
        m = b + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (D = u(E), !D) {
        m = b + (m.length > 0 ? " " + m : m);
        continue;
      }
      L = !1;
    }
    const Z = w.length === 0 ? "" : w.length === 1 ? w[0] : d(w).join(":"), H = x ? Z + vc : Z, lt = H + D;
    if (f.indexOf(lt) > -1)
      continue;
    f.push(lt);
    const ot = c(D, L);
    for (let B = 0; B < ot.length; ++B) {
      const P = ot[B];
      f.push(H + P);
    }
    m = b + (m.length > 0 ? " " + m : m);
  }
  return m;
}, Vv = (...n) => {
  let r = 0, a, u, c = "";
  for (; r < n.length; )
    (a = n[r++]) && (u = mg(a)) && (c && (c += " "), c += u);
  return c;
}, mg = (n) => {
  if (typeof n == "string")
    return n;
  let r, a = "";
  for (let u = 0; u < n.length; u++)
    n[u] && (r = mg(n[u])) && (a && (a += " "), a += r);
  return a;
}, Qv = (n, ...r) => {
  let a, u, c, d;
  const f = (m) => {
    const h = r.reduce((b, y) => y(b), n());
    return a = qv(h), u = a.cache.get, c = a.cache.set, d = p, p(m);
  }, p = (m) => {
    const h = u(m);
    if (h)
      return h;
    const b = Gv(m, a);
    return c(m, b), b;
  };
  return d = f, (...m) => d(Vv(...m));
}, Xv = [], se = (n) => {
  const r = (a) => a[n] || Xv;
  return r.isThemeGetter = !0, r;
}, gg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, yg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Zv = /^\d+\/\d+$/, Fv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Iv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $v = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, zi = (n) => Zv.test(n), zt = (n) => !!n && !Number.isNaN(Number(n)), cl = (n) => !!n && Number.isInteger(Number(n)), Ps = (n) => n.endsWith("%") && zt(n.slice(0, -1)), jn = (n) => Fv.test(n), Wv = () => !0, Pv = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kv.test(n) && !Jv.test(n)
), bg = () => !1, t1 = (n) => Iv.test(n), e1 = (n) => $v.test(n), n1 = (n) => !rt(n) && !ut(n), l1 = (n) => _i(n, wg, bg), rt = (n) => gg.test(n), Ol = (n) => _i(n, kg, Pv), tc = (n) => _i(n, o1, zt), hm = (n) => _i(n, vg, bg), i1 = (n) => _i(n, xg, e1), cu = (n) => _i(n, Sg, t1), ut = (n) => yg.test(n), Da = (n) => Mi(n, kg), a1 = (n) => Mi(n, s1), pm = (n) => Mi(n, vg), r1 = (n) => Mi(n, wg), u1 = (n) => Mi(n, xg), fu = (n) => Mi(n, Sg, !0), _i = (n, r, a) => {
  const u = gg.exec(n);
  return u ? u[1] ? r(u[1]) : a(u[2]) : !1;
}, Mi = (n, r, a = !1) => {
  const u = yg.exec(n);
  return u ? u[1] ? r(u[1]) : a : !1;
}, vg = (n) => n === "position" || n === "percentage", xg = (n) => n === "image" || n === "url", wg = (n) => n === "length" || n === "size" || n === "bg-size", kg = (n) => n === "length", o1 = (n) => n === "number", s1 = (n) => n === "family-name", Sg = (n) => n === "shadow", c1 = () => {
  const n = se("color"), r = se("font"), a = se("text"), u = se("font-weight"), c = se("tracking"), d = se("leading"), f = se("breakpoint"), p = se("container"), m = se("spacing"), h = se("radius"), b = se("shadow"), y = se("inset-shadow"), w = se("text-shadow"), x = se("drop-shadow"), E = se("blur"), R = se("perspective"), L = se("aspect"), D = se("ease"), Z = se("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], lt = () => [
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
  ], ot = () => [...lt(), ut, rt], B = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], J = () => [ut, rt, m], pt = () => [zi, "full", "auto", ...J()], U = () => [cl, "none", "subgrid", ut, rt], nt = () => ["auto", {
    span: ["full", cl, ut, rt]
  }, cl, ut, rt], tt = () => [cl, "auto", ut, rt], St = () => ["auto", "min", "max", "fr", ut, rt], it = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...J()], F = () => [zi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...J()], X = () => [n, ut, rt], xt = () => [...lt(), pm, hm, {
    position: [ut, rt]
  }], S = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", r1, l1, {
    size: [ut, rt]
  }], Y = () => [Ps, Da, Ol], k = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    ut,
    rt
  ], $ = () => ["", zt, Da, Ol], ft = () => ["solid", "dashed", "dotted", "double"], ct = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], dt = () => [zt, Ps, pm, hm], Vt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    ut,
    rt
  ], Rt = () => ["none", zt, ut, rt], de = () => ["none", zt, ut, rt], Le = () => [zt, ut, rt], cn = () => [zi, "full", ...J()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [Wv],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [n1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", zt],
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
        aspect: ["auto", "square", zi, rt, ut, L]
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
        columns: [zt, rt, ut, p]
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
        inset: pt()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": pt()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": pt()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: pt()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: pt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: pt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: pt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: pt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: pt()
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
        z: [cl, "auto", ut, rt]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [zi, "full", "auto", p, ...J()]
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
        flex: [zt, zi, "auto", "initial", "none", rt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", zt, ut, rt]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", zt, ut, rt]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [cl, "first", "last", "none", ut, rt]
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
        col: nt()
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
        row: nt()
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
        "auto-cols": St()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": St()
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
        m: _()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: _()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: _()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: _()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: _()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: _()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: _()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: _()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: _()
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
        size: F()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...F()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...F()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [f]
          },
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, Da, Ol]
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
        font: [u, ut, tc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ps, rt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [a1, rt, r]
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
        tracking: [c, ut, rt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [zt, "none", ut, tc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          d,
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
        placeholder: X()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: X()
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
        decoration: [zt, "from-font", "auto", ut, Ol]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: X()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [zt, "auto", ut, rt]
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
        bg: S()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: A()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, cl, ut, rt],
          radial: ["", ut, rt],
          conic: [cl, ut, rt]
        }, u1, i1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: X()
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
        from: X()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: X()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: X()
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
        border: X()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": X()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": X()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": X()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": X()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": X()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": X()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": X()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": X()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: X()
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
        "outline-offset": [zt, ut, rt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", zt, Da, Ol]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: X()
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
          cu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: X()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, fu, cu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": X()
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
        ring: X()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [zt, Ol]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": X()
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
        "inset-ring": X()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, fu, cu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": X()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [zt, ut, rt]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ct(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ct()
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
        "mask-linear": [zt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": dt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": dt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": X()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": dt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": dt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": X()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": dt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": dt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": X()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": dt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": dt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": X()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": dt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": dt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": X()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": dt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": dt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": X()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": dt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": dt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": X()
      }],
      "mask-image-radial": [{
        "mask-radial": [ut, rt]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": dt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": dt()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": X()
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
        "mask-conic": [zt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": dt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": dt()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": X()
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
        mask: S()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: A()
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
        blur: Vt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [zt, ut, rt]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [zt, ut, rt]
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
          cu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": X()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", zt, ut, rt]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [zt, ut, rt]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", zt, ut, rt]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [zt, ut, rt]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", zt, ut, rt]
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
        "backdrop-blur": Vt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [zt, ut, rt]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [zt, ut, rt]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", zt, ut, rt]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [zt, ut, rt]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", zt, ut, rt]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [zt, ut, rt]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [zt, ut, rt]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", zt, ut, rt]
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
        duration: [zt, "initial", ut, rt]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, ut, rt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [zt, ut, rt]
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
        scale: de()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": de()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": de()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": de()
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
        translate: cn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": cn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": cn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": cn()
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
        accent: X()
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
        caret: X()
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
        fill: ["none", ...X()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [zt, Da, Ol, tc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...X()]
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
}, f1 = /* @__PURE__ */ Qv(c1);
function zg(...n) {
  return f1(cg(n));
}
const d1 = fg(
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
), ja = Zt.forwardRef(
  ({ className: n, variant: r, size: a, fullWidth: u, ...c }, d) => /* @__PURE__ */ et.jsx(
    "button",
    {
      className: zg(d1({ variant: r, size: a, fullWidth: u }), n),
      ref: d,
      ...c
    }
  )
);
ja.displayName = "Button";
function h1({
  loading: n,
  onSuggestionClick: r
}) {
  const { t: a } = zu(), u = [
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
  return /* @__PURE__ */ et.jsx("div", { className: "flex flex-wrap gap-2", children: u.map((c, d) => /* @__PURE__ */ et.jsx(
    ja,
    {
      onClick: () => r(c.prompt),
      disabled: n,
      variant: "outline",
      size: "sm",
      className: "rounded-full",
      children: c.label
    },
    d
  )) });
}
function p1(n, r) {
  const a = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const m1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, g1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, y1 = {};
function mm(n, r) {
  return (y1.jsx ? g1 : m1).test(n);
}
const b1 = /[ \t\n\f\r]/g;
function v1(n) {
  return typeof n == "object" ? n.type === "text" ? gm(n.value) : !1 : gm(n);
}
function gm(n) {
  return n.replace(b1, "") === "";
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
  for (const c of n)
    Object.assign(a, c.property), Object.assign(u, c.normal);
  return new qa(a, u, r);
}
function xc(n) {
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
let x1 = 0;
const kt = Ll(), re = Ll(), wc = Ll(), K = Ll(), Kt = Ll(), Ci = Ll(), Xe = Ll();
function Ll() {
  return 2 ** ++x1;
}
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: kt,
  booleanish: re,
  commaOrSpaceSeparated: Xe,
  commaSeparated: Ci,
  number: K,
  overloadedBoolean: wc,
  spaceSeparated: Kt
}, Symbol.toStringTag, { value: "Module" })), ec = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(kc)
);
class Rc extends Ne {
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
  constructor(r, a, u, c) {
    let d = -1;
    if (super(r, a), ym(this, "space", c), typeof u == "number")
      for (; ++d < ec.length; ) {
        const f = ec[d];
        ym(this, ec[d], (u & kc[f]) === kc[f]);
      }
  }
}
Rc.prototype.defined = !0;
function ym(n, r, a) {
  a && (n[r] = a);
}
function Oi(n) {
  const r = {}, a = {};
  for (const [u, c] of Object.entries(n.properties)) {
    const d = new Rc(
      u,
      n.transform(n.attributes || {}, u),
      c,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(u) && (d.mustUseProperty = !0), r[u] = d, a[xc(u)] = u, a[xc(d.attribute)] = u;
  }
  return new qa(r, a, n.space);
}
const Ag = Oi({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: re,
    ariaAutoComplete: null,
    ariaBusy: re,
    ariaChecked: re,
    ariaColCount: K,
    ariaColIndex: K,
    ariaColSpan: K,
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
    ariaLevel: K,
    ariaLive: null,
    ariaModal: re,
    ariaMultiLine: re,
    ariaMultiSelectable: re,
    ariaOrientation: null,
    ariaOwns: Kt,
    ariaPlaceholder: null,
    ariaPosInSet: K,
    ariaPressed: re,
    ariaReadOnly: re,
    ariaRelevant: null,
    ariaRequired: re,
    ariaRoleDescription: Kt,
    ariaRowCount: K,
    ariaRowIndex: K,
    ariaRowSpan: K,
    ariaSelected: re,
    ariaSetSize: K,
    ariaSort: null,
    ariaValueMax: K,
    ariaValueMin: K,
    ariaValueNow: K,
    ariaValueText: null,
    role: null
  },
  transform(n, r) {
    return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
  }
});
function Tg(n, r) {
  return r in n ? n[r] : r;
}
function Cg(n, r) {
  return Tg(n, r.toLowerCase());
}
const w1 = Oi({
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
    cols: K,
    colSpan: null,
    content: null,
    contentEditable: re,
    controls: kt,
    controlsList: Kt,
    coords: K | Ci,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: kt,
    defer: kt,
    dir: null,
    dirName: null,
    disabled: kt,
    download: wc,
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
    height: K,
    hidden: wc,
    high: K,
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
    low: K,
    manifest: null,
    max: null,
    maxLength: K,
    media: null,
    method: null,
    min: null,
    minLength: K,
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
    optimum: K,
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
    rows: K,
    rowSpan: K,
    sandbox: Kt,
    scope: null,
    scoped: kt,
    seamless: kt,
    selected: kt,
    shadowRootClonable: kt,
    shadowRootDelegatesFocus: kt,
    shadowRootMode: null,
    shape: null,
    size: K,
    sizes: null,
    slot: null,
    span: K,
    spellCheck: re,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: K,
    step: null,
    style: null,
    tabIndex: K,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: kt,
    useMap: null,
    value: re,
    width: K,
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
    border: K,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: K,
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
    hSpace: K,
    // `<img>` and `<object>`
    leftMargin: K,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: K,
    // `<body>`
    marginWidth: K,
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
    rightMargin: K,
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
    topMargin: K,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: K,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: kt,
    disableRemotePlayback: kt,
    prefix: null,
    property: null,
    results: K,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Cg
}), k1 = Oi({
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
    about: Xe,
    accentHeight: K,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: K,
    amplitude: K,
    arabicForm: null,
    ascent: K,
    attributeName: null,
    attributeType: null,
    azimuth: K,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: K,
    by: null,
    calcMode: null,
    capHeight: K,
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
    descent: K,
    diffuseConstant: K,
    direction: null,
    display: null,
    dur: null,
    divisor: K,
    dominantBaseline: null,
    download: kt,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: K,
    enableBackground: null,
    end: null,
    event: null,
    exponent: K,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: K,
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
    hanging: K,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: K,
    horizOriginX: K,
    horizOriginY: K,
    id: null,
    ideographic: K,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: K,
    k: K,
    k1: K,
    k2: K,
    k3: K,
    k4: K,
    kernelMatrix: Xe,
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
    limitingConeAngle: K,
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
    mediaSize: K,
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
    overlinePosition: K,
    overlineThickness: K,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: K,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Kt,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: K,
    pointsAtY: K,
    pointsAtZ: K,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Xe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Xe,
    rev: Xe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Xe,
    requiredFeatures: Xe,
    requiredFonts: Xe,
    requiredFormats: Xe,
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
    specularConstant: K,
    specularExponent: K,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: K,
    strikethroughThickness: K,
    string: null,
    stroke: null,
    strokeDashArray: Xe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: K,
    strokeOpacity: K,
    strokeWidth: null,
    style: null,
    surfaceScale: K,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Xe,
    tabIndex: K,
    tableValues: null,
    target: null,
    targetX: K,
    targetY: K,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Xe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: K,
    underlineThickness: K,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: K,
    values: null,
    vAlphabetic: K,
    vMathematical: K,
    vectorEffect: null,
    vHanging: K,
    vIdeographic: K,
    version: null,
    vertAdvY: K,
    vertOriginX: K,
    vertOriginY: K,
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
    xHeight: K,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Tg
}), Dg = Oi({
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
}), _g = Oi({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Cg
}), Mg = Oi({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, r) {
    return "xml:" + r.slice(3).toLowerCase();
  }
}), S1 = {
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
}, z1 = /[A-Z]/g, bm = /-[a-z]/g, E1 = /^data[-\w.:]+$/i;
function A1(n, r) {
  const a = xc(r);
  let u = r, c = Ne;
  if (a in n.normal)
    return n.property[n.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && E1.test(r)) {
    if (r.charAt(4) === "-") {
      const d = r.slice(5).replace(bm, C1);
      u = "data" + d.charAt(0).toUpperCase() + d.slice(1);
    } else {
      const d = r.slice(4);
      if (!bm.test(d)) {
        let f = d.replace(z1, T1);
        f.charAt(0) !== "-" && (f = "-" + f), r = "data" + f;
      }
    }
    c = Rc;
  }
  return new c(u, r);
}
function T1(n) {
  return "-" + n.toLowerCase();
}
function C1(n) {
  return n.charAt(1).toUpperCase();
}
const D1 = Eg([Ag, w1, Dg, _g, Mg], "html"), Nc = Eg([Ag, k1, Dg, _g, Mg], "svg");
function _1(n) {
  return n.join(" ").trim();
}
var Ei = {}, nc, vm;
function M1() {
  if (vm) return nc;
  vm = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, a = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, c = /^:\s*/, d = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, f = /^[;\s]*/, p = /^\s+|\s+$/g, m = `
`, h = "/", b = "*", y = "", w = "comment", x = "declaration";
  function E(L, D) {
    if (typeof L != "string")
      throw new TypeError("First argument must be a string");
    if (!L) return [];
    D = D || {};
    var Z = 1, H = 1;
    function lt(it) {
      var I = it.match(r);
      I && (Z += I.length);
      var _ = it.lastIndexOf(m);
      H = ~_ ? it.length - _ : H + it.length;
    }
    function ot() {
      var it = { line: Z, column: H };
      return function(I) {
        return I.position = new B(it), pt(), I;
      };
    }
    function B(it) {
      this.start = it, this.end = { line: Z, column: H }, this.source = D.source;
    }
    B.prototype.content = L;
    function P(it) {
      var I = new Error(
        D.source + ":" + Z + ":" + H + ": " + it
      );
      if (I.reason = it, I.filename = D.source, I.line = Z, I.column = H, I.source = L, !D.silent) throw I;
    }
    function J(it) {
      var I = it.exec(L);
      if (I) {
        var _ = I[0];
        return lt(_), L = L.slice(_.length), I;
      }
    }
    function pt() {
      J(a);
    }
    function U(it) {
      var I;
      for (it = it || []; I = nt(); )
        I !== !1 && it.push(I);
      return it;
    }
    function nt() {
      var it = ot();
      if (!(h != L.charAt(0) || b != L.charAt(1))) {
        for (var I = 2; y != L.charAt(I) && (b != L.charAt(I) || h != L.charAt(I + 1)); )
          ++I;
        if (I += 2, y === L.charAt(I - 1))
          return P("End of comment missing");
        var _ = L.slice(2, I - 2);
        return H += 2, lt(_), L = L.slice(I), H += 2, it({
          type: w,
          comment: _
        });
      }
    }
    function tt() {
      var it = ot(), I = J(u);
      if (I) {
        if (nt(), !J(c)) return P("property missing ':'");
        var _ = J(d), F = it({
          type: x,
          property: R(I[0].replace(n, y)),
          value: _ ? R(_[0].replace(n, y)) : y
        });
        return J(f), F;
      }
    }
    function St() {
      var it = [];
      U(it);
      for (var I; I = tt(); )
        I !== !1 && (it.push(I), U(it));
      return it;
    }
    return pt(), St();
  }
  function R(L) {
    return L ? L.replace(p, y) : y;
  }
  return nc = E, nc;
}
var xm;
function O1() {
  if (xm) return Ei;
  xm = 1;
  var n = Ei && Ei.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.default = a;
  const r = n(M1());
  function a(u, c) {
    let d = null;
    if (!u || typeof u != "string")
      return d;
    const f = (0, r.default)(u), p = typeof c == "function";
    return f.forEach((m) => {
      if (m.type !== "declaration")
        return;
      const { property: h, value: b } = m;
      p ? c(h, b, m) : b && (d = d || {}, d[h] = b);
    }), d;
  }
  return Ei;
}
var _a = {}, wm;
function R1() {
  if (wm) return _a;
  wm = 1, Object.defineProperty(_a, "__esModule", { value: !0 }), _a.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, a = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, c = /^-(ms)-/, d = function(h) {
    return !h || a.test(h) || n.test(h);
  }, f = function(h, b) {
    return b.toUpperCase();
  }, p = function(h, b) {
    return "".concat(b, "-");
  }, m = function(h, b) {
    return b === void 0 && (b = {}), d(h) ? h : (h = h.toLowerCase(), b.reactCompat ? h = h.replace(c, p) : h = h.replace(u, p), h.replace(r, f));
  };
  return _a.camelCase = m, _a;
}
var Ma, km;
function N1() {
  if (km) return Ma;
  km = 1;
  var n = Ma && Ma.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  }, r = n(O1()), a = R1();
  function u(c, d) {
    var f = {};
    return !c || typeof c != "string" || (0, r.default)(c, function(p, m) {
      p && m && (f[(0, a.camelCase)(p, d)] = m);
    }), f;
  }
  return u.default = u, Ma = u, Ma;
}
var L1 = N1();
const U1 = /* @__PURE__ */ Su(L1), Og = Rg("end"), Lc = Rg("start");
function Rg(n) {
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
function j1(n) {
  const r = Lc(n), a = Og(n);
  if (r && a)
    return { start: r, end: a };
}
function Na(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Sm(n.position) : "start" in n || "end" in n ? Sm(n) : "line" in n || "column" in n ? Sc(n) : "";
}
function Sc(n) {
  return zm(n && n.line) + ":" + zm(n && n.column);
}
function Sm(n) {
  return Sc(n && n.start) + "-" + Sc(n && n.end);
}
function zm(n) {
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
    let c = "", d = {}, f = !1;
    if (a && ("line" in a && "column" in a ? d = { place: a } : "start" in a && "end" in a ? d = { place: a } : "type" in a ? d = {
      ancestors: [a],
      place: a.position
    } : d = { ...a }), typeof r == "string" ? c = r : !d.cause && r && (f = !0, c = r.message, d.cause = r), !d.ruleId && !d.source && typeof u == "string") {
      const m = u.indexOf(":");
      m === -1 ? d.ruleId = u : (d.source = u.slice(0, m), d.ruleId = u.slice(m + 1));
    }
    if (!d.place && d.ancestors && d.ancestors) {
      const m = d.ancestors[d.ancestors.length - 1];
      m && (d.place = m.position);
    }
    const p = d.place && "start" in d.place ? d.place.start : d.place;
    this.ancestors = d.ancestors || void 0, this.cause = d.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file = "", this.message = c, this.line = p ? p.line : void 0, this.name = Na(d.place) || "1:1", this.place = d.place || void 0, this.reason = this.message, this.ruleId = d.ruleId || void 0, this.source = d.source || void 0, this.stack = f && d.cause && typeof d.cause.stack == "string" ? d.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
const Uc = {}.hasOwnProperty, B1 = /* @__PURE__ */ new Map(), H1 = /[A-Z]/g, q1 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Y1 = /* @__PURE__ */ new Set(["td", "th"]), Ng = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function G1(n, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = r.filePath || void 0;
  let u;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = I1(a, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = J1(a, r.jsx, r.jsxs);
  }
  const c = {
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
    schema: r.space === "svg" ? Nc : D1,
    stylePropertyNameCase: r.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: r.tableCellAlignToStyle !== !1
  }, d = Lg(c, n, void 0);
  return d && typeof d != "string" ? d : c.create(
    n,
    c.Fragment,
    { children: d || void 0 },
    void 0
  );
}
function Lg(n, r, a) {
  if (r.type === "element")
    return V1(n, r, a);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return Q1(n, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return Z1(n, r, a);
  if (r.type === "mdxjsEsm")
    return X1(n, r);
  if (r.type === "root")
    return F1(n, r, a);
  if (r.type === "text")
    return K1(n, r);
}
function V1(n, r, a) {
  const u = n.schema;
  let c = u;
  r.tagName.toLowerCase() === "svg" && u.space === "html" && (c = Nc, n.schema = c), n.ancestors.push(r);
  const d = jg(n, r.tagName, !1), f = $1(n, r);
  let p = Bc(n, r);
  return q1.has(r.tagName) && (p = p.filter(function(m) {
    return typeof m == "string" ? !v1(m) : !0;
  })), Ug(n, f, d, r), jc(f, p), n.ancestors.pop(), n.schema = u, n.create(r, d, f, a);
}
function Q1(n, r) {
  if (r.data && r.data.estree && n.evaluater) {
    const u = r.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(u.expression);
  }
  Ba(n, r.position);
}
function X1(n, r) {
  if (r.data && r.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(r.data.estree)
    );
  Ba(n, r.position);
}
function Z1(n, r, a) {
  const u = n.schema;
  let c = u;
  r.name === "svg" && u.space === "html" && (c = Nc, n.schema = c), n.ancestors.push(r);
  const d = r.name === null ? n.Fragment : jg(n, r.name, !0), f = W1(n, r), p = Bc(n, r);
  return Ug(n, f, d, r), jc(f, p), n.ancestors.pop(), n.schema = u, n.create(r, d, f, a);
}
function F1(n, r, a) {
  const u = {};
  return jc(u, Bc(n, r)), n.create(r, n.Fragment, u, a);
}
function K1(n, r) {
  return r.value;
}
function Ug(n, r, a, u) {
  typeof a != "string" && a !== n.Fragment && n.passNode && (r.node = u);
}
function jc(n, r) {
  if (r.length > 0) {
    const a = r.length > 1 ? r : r[0];
    a && (n.children = a);
  }
}
function J1(n, r, a) {
  return u;
  function u(c, d, f, p) {
    const h = Array.isArray(f.children) ? a : r;
    return p ? h(d, f, p) : h(d, f);
  }
}
function I1(n, r) {
  return a;
  function a(u, c, d, f) {
    const p = Array.isArray(d.children), m = Lc(u);
    return r(
      c,
      d,
      f,
      p,
      {
        columnNumber: m ? m.column - 1 : void 0,
        fileName: n,
        lineNumber: m ? m.line : void 0
      },
      void 0
    );
  }
}
function $1(n, r) {
  const a = {};
  let u, c;
  for (c in r.properties)
    if (c !== "children" && Uc.call(r.properties, c)) {
      const d = P1(n, c, r.properties[c]);
      if (d) {
        const [f, p] = d;
        n.tableCellAlignToStyle && f === "align" && typeof p == "string" && Y1.has(r.tagName) ? u = p : a[f] = p;
      }
    }
  if (u) {
    const d = (
      /** @type {Style} */
      a.style || (a.style = {})
    );
    d[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return a;
}
function W1(n, r) {
  const a = {};
  for (const u of r.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && n.evaluater) {
        const d = u.data.estree.body[0];
        d.type;
        const f = d.expression;
        f.type;
        const p = f.properties[0];
        p.type, Object.assign(
          a,
          n.evaluater.evaluateExpression(p.argument)
        );
      } else
        Ba(n, r.position);
    else {
      const c = u.name;
      let d;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && n.evaluater) {
          const p = u.value.data.estree.body[0];
          p.type, d = n.evaluater.evaluateExpression(p.expression);
        } else
          Ba(n, r.position);
      else
        d = u.value === null ? !0 : u.value;
      a[c] = /** @type {Props[keyof Props]} */
      d;
    }
  return a;
}
function Bc(n, r) {
  const a = [];
  let u = -1;
  const c = n.passKeys ? /* @__PURE__ */ new Map() : B1;
  for (; ++u < r.children.length; ) {
    const d = r.children[u];
    let f;
    if (n.passKeys) {
      const m = d.type === "element" ? d.tagName : d.type === "mdxJsxFlowElement" || d.type === "mdxJsxTextElement" ? d.name : void 0;
      if (m) {
        const h = c.get(m) || 0;
        f = m + "-" + h, c.set(m, h + 1);
      }
    }
    const p = Lg(n, d, f);
    p !== void 0 && a.push(p);
  }
  return a;
}
function P1(n, r, a) {
  const u = A1(n.schema, r);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = u.commaSeparated ? p1(a) : _1(a)), u.property === "style") {
      let c = typeof a == "object" ? a : tx(n, String(a));
      return n.stylePropertyNameCase === "css" && (c = ex(c)), ["style", c];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space ? S1[u.property] || u.property : u.attribute,
      a
    ];
  }
}
function tx(n, r) {
  try {
    return U1(r, { reactCompat: !0 });
  } catch (a) {
    if (n.ignoreInvalidStyle)
      return {};
    const u = (
      /** @type {Error} */
      a
    ), c = new xe("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: u,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw c.file = n.filePath || void 0, c.url = Ng + "#cannot-parse-style-attribute", c;
  }
}
function jg(n, r, a) {
  let u;
  if (!a)
    u = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const c = r.split(".");
    let d = -1, f;
    for (; ++d < c.length; ) {
      const p = mm(c[d]) ? { type: "Identifier", name: c[d] } : { type: "Literal", value: c[d] };
      f = f ? {
        type: "MemberExpression",
        object: f,
        property: p,
        computed: !!(d && p.type === "Literal"),
        optional: !1
      } : p;
    }
    u = f;
  } else
    u = mm(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
  if (u.type === "Literal") {
    const c = (
      /** @type {string | number} */
      u.value
    );
    return Uc.call(n.components, c) ? n.components[c] : c;
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
  throw a.file = n.filePath || void 0, a.url = Ng + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function ex(n) {
  const r = {};
  let a;
  for (a in n)
    Uc.call(n, a) && (r[nx(a)] = n[a]);
  return r;
}
function nx(n) {
  let r = n.replace(H1, lx);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function lx(n) {
  return "-" + n.toLowerCase();
}
const lc = {
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
}, ix = {};
function Hc(n, r) {
  const a = ix, u = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, c = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return Bg(n, u, c);
}
function Bg(n, r, a) {
  if (ax(n)) {
    if ("value" in n)
      return n.type === "html" && !a ? "" : n.value;
    if (r && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Em(n.children, r, a);
  }
  return Array.isArray(n) ? Em(n, r, a) : "";
}
function Em(n, r, a) {
  const u = [];
  let c = -1;
  for (; ++c < n.length; )
    u[c] = Bg(n[c], r, a);
  return u.join("");
}
function ax(n) {
  return !!(n && typeof n == "object");
}
const Am = document.createElement("i");
function qc(n) {
  const r = "&" + n + ";";
  Am.innerHTML = r;
  const a = Am.textContent;
  return a.charCodeAt(a.length - 1) === 59 && n !== "semi" || a === r ? !1 : a;
}
function Ze(n, r, a, u) {
  const c = n.length;
  let d = 0, f;
  if (r < 0 ? r = -r > c ? 0 : c + r : r = r > c ? c : r, a = a > 0 ? a : 0, u.length < 1e4)
    f = Array.from(u), f.unshift(r, a), n.splice(...f);
  else
    for (a && n.splice(r, a); d < u.length; )
      f = u.slice(d, d + 1e4), f.unshift(r, 0), n.splice(...f), d += 1e4, r += 1e4;
}
function ln(n, r) {
  return n.length > 0 ? (Ze(n, n.length, 0, r), n) : r;
}
const Tm = {}.hasOwnProperty;
function Hg(n) {
  const r = {};
  let a = -1;
  for (; ++a < n.length; )
    rx(r, n[a]);
  return r;
}
function rx(n, r) {
  let a;
  for (a in r) {
    const c = (Tm.call(n, a) ? n[a] : void 0) || (n[a] = {}), d = r[a];
    let f;
    if (d)
      for (f in d) {
        Tm.call(c, f) || (c[f] = []);
        const p = d[f];
        ux(
          // @ts-expect-error Looks like a list.
          c[f],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function ux(n, r) {
  let a = -1;
  const u = [];
  for (; ++a < r.length; )
    (r[a].add === "after" ? n : u).push(r[a]);
  Ze(n, 0, 0, u);
}
function qg(n, r) {
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
function sn(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ze = dl(/[A-Za-z]/), ve = dl(/[\dA-Za-z]/), ox = dl(/[#-'*+\--9=?A-Z^-~]/);
function vu(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const zc = dl(/\d/), sx = dl(/[\dA-Fa-f]/), cx = dl(/[!-/:-@[-`{-~]/);
function mt(n) {
  return n !== null && n < -2;
}
function Ft(n) {
  return n !== null && (n < 0 || n === 32);
}
function Ct(n) {
  return n === -2 || n === -1 || n === 32;
}
const Eu = dl(new RegExp("\\p{P}|\\p{S}", "u")), Nl = dl(/\s/);
function dl(n) {
  return r;
  function r(a) {
    return a !== null && a > -1 && n.test(String.fromCharCode(a));
  }
}
function Ri(n) {
  const r = [];
  let a = -1, u = 0, c = 0;
  for (; ++a < n.length; ) {
    const d = n.charCodeAt(a);
    let f = "";
    if (d === 37 && ve(n.charCodeAt(a + 1)) && ve(n.charCodeAt(a + 2)))
      c = 2;
    else if (d < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(d)) || (f = String.fromCharCode(d));
    else if (d > 55295 && d < 57344) {
      const p = n.charCodeAt(a + 1);
      d < 56320 && p > 56319 && p < 57344 ? (f = String.fromCharCode(d, p), c = 1) : f = "�";
    } else
      f = String.fromCharCode(d);
    f && (r.push(n.slice(u, a), encodeURIComponent(f)), u = a + c + 1, f = ""), c && (a += c, c = 0);
  }
  return r.join("") + n.slice(u);
}
function Ot(n, r, a, u) {
  const c = u ? u - 1 : Number.POSITIVE_INFINITY;
  let d = 0;
  return f;
  function f(m) {
    return Ct(m) ? (n.enter(a), p(m)) : r(m);
  }
  function p(m) {
    return Ct(m) && d++ < c ? (n.consume(m), p) : (n.exit(a), r(m));
  }
}
const fx = {
  tokenize: dx
};
function dx(n) {
  const r = n.attempt(this.parser.constructs.contentInitial, u, c);
  let a;
  return r;
  function u(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return n.enter("lineEnding"), n.consume(p), n.exit("lineEnding"), Ot(n, r, "linePrefix");
  }
  function c(p) {
    return n.enter("paragraph"), d(p);
  }
  function d(p) {
    const m = n.enter("chunkText", {
      contentType: "text",
      previous: a
    });
    return a && (a.next = m), a = m, f(p);
  }
  function f(p) {
    if (p === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(p);
      return;
    }
    return mt(p) ? (n.consume(p), n.exit("chunkText"), d) : (n.consume(p), f);
  }
}
const hx = {
  tokenize: px
}, Cm = {
  tokenize: mx
};
function px(n) {
  const r = this, a = [];
  let u = 0, c, d, f;
  return p;
  function p(H) {
    if (u < a.length) {
      const lt = a[u];
      return r.containerState = lt[1], n.attempt(lt[0].continuation, m, h)(H);
    }
    return h(H);
  }
  function m(H) {
    if (u++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, c && Z();
      const lt = r.events.length;
      let ot = lt, B;
      for (; ot--; )
        if (r.events[ot][0] === "exit" && r.events[ot][1].type === "chunkFlow") {
          B = r.events[ot][1].end;
          break;
        }
      D(u);
      let P = lt;
      for (; P < r.events.length; )
        r.events[P][1].end = {
          ...B
        }, P++;
      return Ze(r.events, ot + 1, 0, r.events.slice(lt)), r.events.length = P, h(H);
    }
    return p(H);
  }
  function h(H) {
    if (u === a.length) {
      if (!c)
        return w(H);
      if (c.currentConstruct && c.currentConstruct.concrete)
        return E(H);
      r.interrupt = !!(c.currentConstruct && !c._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, n.check(Cm, b, y)(H);
  }
  function b(H) {
    return c && Z(), D(u), w(H);
  }
  function y(H) {
    return r.parser.lazy[r.now().line] = u !== a.length, f = r.now().offset, E(H);
  }
  function w(H) {
    return r.containerState = {}, n.attempt(Cm, x, E)(H);
  }
  function x(H) {
    return u++, a.push([r.currentConstruct, r.containerState]), w(H);
  }
  function E(H) {
    if (H === null) {
      c && Z(), D(0), n.consume(H);
      return;
    }
    return c = c || r.parser.flow(r.now()), n.enter("chunkFlow", {
      _tokenizer: c,
      contentType: "flow",
      previous: d
    }), R(H);
  }
  function R(H) {
    if (H === null) {
      L(n.exit("chunkFlow"), !0), D(0), n.consume(H);
      return;
    }
    return mt(H) ? (n.consume(H), L(n.exit("chunkFlow")), u = 0, r.interrupt = void 0, p) : (n.consume(H), R);
  }
  function L(H, lt) {
    const ot = r.sliceStream(H);
    if (lt && ot.push(null), H.previous = d, d && (d.next = H), d = H, c.defineSkip(H.start), c.write(ot), r.parser.lazy[H.start.line]) {
      let B = c.events.length;
      for (; B--; )
        if (
          // The token starts before the line ending…
          c.events[B][1].start.offset < f && // …and either is not ended yet…
          (!c.events[B][1].end || // …or ends after it.
          c.events[B][1].end.offset > f)
        )
          return;
      const P = r.events.length;
      let J = P, pt, U;
      for (; J--; )
        if (r.events[J][0] === "exit" && r.events[J][1].type === "chunkFlow") {
          if (pt) {
            U = r.events[J][1].end;
            break;
          }
          pt = !0;
        }
      for (D(u), B = P; B < r.events.length; )
        r.events[B][1].end = {
          ...U
        }, B++;
      Ze(r.events, J + 1, 0, r.events.slice(P)), r.events.length = B;
    }
  }
  function D(H) {
    let lt = a.length;
    for (; lt-- > H; ) {
      const ot = a[lt];
      r.containerState = ot[1], ot[0].exit.call(r, n);
    }
    a.length = H;
  }
  function Z() {
    c.write([null]), d = void 0, c = void 0, r.containerState._closeFlow = void 0;
  }
}
function mx(n, r, a) {
  return Ot(n, n.attempt(this.parser.constructs.document, r, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Di(n) {
  if (n === null || Ft(n) || Nl(n))
    return 1;
  if (Eu(n))
    return 2;
}
function Au(n, r, a) {
  const u = [];
  let c = -1;
  for (; ++c < n.length; ) {
    const d = n[c].resolveAll;
    d && !u.includes(d) && (r = d(r, a), u.push(d));
  }
  return r;
}
const Ec = {
  name: "attention",
  resolveAll: gx,
  tokenize: yx
};
function gx(n, r) {
  let a = -1, u, c, d, f, p, m, h, b;
  for (; ++a < n.length; )
    if (n[a][0] === "enter" && n[a][1].type === "attentionSequence" && n[a][1]._close) {
      for (u = a; u--; )
        if (n[u][0] === "exit" && n[u][1].type === "attentionSequence" && n[u][1]._open && // If the markers are the same:
        r.sliceSerialize(n[u][1]).charCodeAt(0) === r.sliceSerialize(n[a][1]).charCodeAt(0)) {
          if ((n[u][1]._close || n[a][1]._open) && (n[a][1].end.offset - n[a][1].start.offset) % 3 && !((n[u][1].end.offset - n[u][1].start.offset + n[a][1].end.offset - n[a][1].start.offset) % 3))
            continue;
          m = n[u][1].end.offset - n[u][1].start.offset > 1 && n[a][1].end.offset - n[a][1].start.offset > 1 ? 2 : 1;
          const y = {
            ...n[u][1].end
          }, w = {
            ...n[a][1].start
          };
          Dm(y, -m), Dm(w, m), f = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: y,
            end: {
              ...n[u][1].end
            }
          }, p = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[a][1].start
            },
            end: w
          }, d = {
            type: m > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[u][1].end
            },
            end: {
              ...n[a][1].start
            }
          }, c = {
            type: m > 1 ? "strong" : "emphasis",
            start: {
              ...f.start
            },
            end: {
              ...p.end
            }
          }, n[u][1].end = {
            ...f.start
          }, n[a][1].start = {
            ...p.end
          }, h = [], n[u][1].end.offset - n[u][1].start.offset && (h = ln(h, [["enter", n[u][1], r], ["exit", n[u][1], r]])), h = ln(h, [["enter", c, r], ["enter", f, r], ["exit", f, r], ["enter", d, r]]), h = ln(h, Au(r.parser.constructs.insideSpan.null, n.slice(u + 1, a), r)), h = ln(h, [["exit", d, r], ["enter", p, r], ["exit", p, r], ["exit", c, r]]), n[a][1].end.offset - n[a][1].start.offset ? (b = 2, h = ln(h, [["enter", n[a][1], r], ["exit", n[a][1], r]])) : b = 0, Ze(n, u - 1, a - u + 3, h), a = u + h.length - b - 2;
          break;
        }
    }
  for (a = -1; ++a < n.length; )
    n[a][1].type === "attentionSequence" && (n[a][1].type = "data");
  return n;
}
function yx(n, r) {
  const a = this.parser.constructs.attentionMarkers.null, u = this.previous, c = Di(u);
  let d;
  return f;
  function f(m) {
    return d = m, n.enter("attentionSequence"), p(m);
  }
  function p(m) {
    if (m === d)
      return n.consume(m), p;
    const h = n.exit("attentionSequence"), b = Di(m), y = !b || b === 2 && c || a.includes(m), w = !c || c === 2 && b || a.includes(u);
    return h._open = !!(d === 42 ? y : y && (c || !w)), h._close = !!(d === 42 ? w : w && (b || !y)), r(m);
  }
}
function Dm(n, r) {
  n.column += r, n.offset += r, n._bufferIndex += r;
}
const bx = {
  name: "autolink",
  tokenize: vx
};
function vx(n, r, a) {
  let u = 0;
  return c;
  function c(x) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), d;
  }
  function d(x) {
    return ze(x) ? (n.consume(x), f) : x === 64 ? a(x) : h(x);
  }
  function f(x) {
    return x === 43 || x === 45 || x === 46 || ve(x) ? (u = 1, p(x)) : h(x);
  }
  function p(x) {
    return x === 58 ? (n.consume(x), u = 0, m) : (x === 43 || x === 45 || x === 46 || ve(x)) && u++ < 32 ? (n.consume(x), p) : (u = 0, h(x));
  }
  function m(x) {
    return x === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), r) : x === null || x === 32 || x === 60 || vu(x) ? a(x) : (n.consume(x), m);
  }
  function h(x) {
    return x === 64 ? (n.consume(x), b) : ox(x) ? (n.consume(x), h) : a(x);
  }
  function b(x) {
    return ve(x) ? y(x) : a(x);
  }
  function y(x) {
    return x === 46 ? (n.consume(x), u = 0, b) : x === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), r) : w(x);
  }
  function w(x) {
    if ((x === 45 || ve(x)) && u++ < 63) {
      const E = x === 45 ? w : y;
      return n.consume(x), E;
    }
    return a(x);
  }
}
const Ya = {
  partial: !0,
  tokenize: xx
};
function xx(n, r, a) {
  return u;
  function u(d) {
    return Ct(d) ? Ot(n, c, "linePrefix")(d) : c(d);
  }
  function c(d) {
    return d === null || mt(d) ? r(d) : a(d);
  }
}
const Yg = {
  continuation: {
    tokenize: kx
  },
  exit: Sx,
  name: "blockQuote",
  tokenize: wx
};
function wx(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    if (f === 62) {
      const p = u.containerState;
      return p.open || (n.enter("blockQuote", {
        _container: !0
      }), p.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(f), n.exit("blockQuoteMarker"), d;
    }
    return a(f);
  }
  function d(f) {
    return Ct(f) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(f), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), r) : (n.exit("blockQuotePrefix"), r(f));
  }
}
function kx(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return Ct(f) ? Ot(n, d, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : d(f);
  }
  function d(f) {
    return n.attempt(Yg, r, a)(f);
  }
}
function Sx(n) {
  n.exit("blockQuote");
}
const Gg = {
  name: "characterEscape",
  tokenize: zx
};
function zx(n, r, a) {
  return u;
  function u(d) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(d), n.exit("escapeMarker"), c;
  }
  function c(d) {
    return cx(d) ? (n.enter("characterEscapeValue"), n.consume(d), n.exit("characterEscapeValue"), n.exit("characterEscape"), r) : a(d);
  }
}
const Vg = {
  name: "characterReference",
  tokenize: Ex
};
function Ex(n, r, a) {
  const u = this;
  let c = 0, d, f;
  return p;
  function p(y) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), m;
  }
  function m(y) {
    return y === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(y), n.exit("characterReferenceMarkerNumeric"), h) : (n.enter("characterReferenceValue"), d = 31, f = ve, b(y));
  }
  function h(y) {
    return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(y), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), d = 6, f = sx, b) : (n.enter("characterReferenceValue"), d = 7, f = zc, b(y));
  }
  function b(y) {
    if (y === 59 && c) {
      const w = n.exit("characterReferenceValue");
      return f === ve && !qc(u.sliceSerialize(w)) ? a(y) : (n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), n.exit("characterReference"), r);
    }
    return f(y) && c++ < d ? (n.consume(y), b) : a(y);
  }
}
const _m = {
  partial: !0,
  tokenize: Tx
}, Mm = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Ax
};
function Ax(n, r, a) {
  const u = this, c = {
    partial: !0,
    tokenize: ot
  };
  let d = 0, f = 0, p;
  return m;
  function m(B) {
    return h(B);
  }
  function h(B) {
    const P = u.events[u.events.length - 1];
    return d = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0, p = B, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), b(B);
  }
  function b(B) {
    return B === p ? (f++, n.consume(B), b) : f < 3 ? a(B) : (n.exit("codeFencedFenceSequence"), Ct(B) ? Ot(n, y, "whitespace")(B) : y(B));
  }
  function y(B) {
    return B === null || mt(B) ? (n.exit("codeFencedFence"), u.interrupt ? r(B) : n.check(_m, R, lt)(B)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), w(B));
  }
  function w(B) {
    return B === null || mt(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(B)) : Ct(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Ot(n, x, "whitespace")(B)) : B === 96 && B === p ? a(B) : (n.consume(B), w);
  }
  function x(B) {
    return B === null || mt(B) ? y(B) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), E(B));
  }
  function E(B) {
    return B === null || mt(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), y(B)) : B === 96 && B === p ? a(B) : (n.consume(B), E);
  }
  function R(B) {
    return n.attempt(c, lt, L)(B);
  }
  function L(B) {
    return n.enter("lineEnding"), n.consume(B), n.exit("lineEnding"), D;
  }
  function D(B) {
    return d > 0 && Ct(B) ? Ot(n, Z, "linePrefix", d + 1)(B) : Z(B);
  }
  function Z(B) {
    return B === null || mt(B) ? n.check(_m, R, lt)(B) : (n.enter("codeFlowValue"), H(B));
  }
  function H(B) {
    return B === null || mt(B) ? (n.exit("codeFlowValue"), Z(B)) : (n.consume(B), H);
  }
  function lt(B) {
    return n.exit("codeFenced"), r(B);
  }
  function ot(B, P, J) {
    let pt = 0;
    return U;
    function U(I) {
      return B.enter("lineEnding"), B.consume(I), B.exit("lineEnding"), nt;
    }
    function nt(I) {
      return B.enter("codeFencedFence"), Ct(I) ? Ot(B, tt, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(I) : tt(I);
    }
    function tt(I) {
      return I === p ? (B.enter("codeFencedFenceSequence"), St(I)) : J(I);
    }
    function St(I) {
      return I === p ? (pt++, B.consume(I), St) : pt >= f ? (B.exit("codeFencedFenceSequence"), Ct(I) ? Ot(B, it, "whitespace")(I) : it(I)) : J(I);
    }
    function it(I) {
      return I === null || mt(I) ? (B.exit("codeFencedFence"), P(I)) : J(I);
    }
  }
}
function Tx(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return f === null ? a(f) : (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), d);
  }
  function d(f) {
    return u.parser.lazy[u.now().line] ? a(f) : r(f);
  }
}
const ic = {
  name: "codeIndented",
  tokenize: Dx
}, Cx = {
  partial: !0,
  tokenize: _x
};
function Dx(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return n.enter("codeIndented"), Ot(n, d, "linePrefix", 5)(h);
  }
  function d(h) {
    const b = u.events[u.events.length - 1];
    return b && b[1].type === "linePrefix" && b[2].sliceSerialize(b[1], !0).length >= 4 ? f(h) : a(h);
  }
  function f(h) {
    return h === null ? m(h) : mt(h) ? n.attempt(Cx, f, m)(h) : (n.enter("codeFlowValue"), p(h));
  }
  function p(h) {
    return h === null || mt(h) ? (n.exit("codeFlowValue"), f(h)) : (n.consume(h), p);
  }
  function m(h) {
    return n.exit("codeIndented"), r(h);
  }
}
function _x(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return u.parser.lazy[u.now().line] ? a(f) : mt(f) ? (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), c) : Ot(n, d, "linePrefix", 5)(f);
  }
  function d(f) {
    const p = u.events[u.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? r(f) : mt(f) ? c(f) : a(f);
  }
}
const Mx = {
  name: "codeText",
  previous: Rx,
  resolve: Ox,
  tokenize: Nx
};
function Ox(n) {
  let r = n.length - 4, a = 3, u, c;
  if ((n[a][1].type === "lineEnding" || n[a][1].type === "space") && (n[r][1].type === "lineEnding" || n[r][1].type === "space")) {
    for (u = a; ++u < r; )
      if (n[u][1].type === "codeTextData") {
        n[a][1].type = "codeTextPadding", n[r][1].type = "codeTextPadding", a += 2, r -= 2;
        break;
      }
  }
  for (u = a - 1, r++; ++u <= r; )
    c === void 0 ? u !== r && n[u][1].type !== "lineEnding" && (c = u) : (u === r || n[u][1].type === "lineEnding") && (n[c][1].type = "codeTextData", u !== c + 2 && (n[c][1].end = n[u - 1][1].end, n.splice(c + 2, u - c - 2), r -= u - c - 2, u = c + 2), c = void 0);
  return n;
}
function Rx(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Nx(n, r, a) {
  let u = 0, c, d;
  return f;
  function f(y) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(y);
  }
  function p(y) {
    return y === 96 ? (n.consume(y), u++, p) : (n.exit("codeTextSequence"), m(y));
  }
  function m(y) {
    return y === null ? a(y) : y === 32 ? (n.enter("space"), n.consume(y), n.exit("space"), m) : y === 96 ? (d = n.enter("codeTextSequence"), c = 0, b(y)) : mt(y) ? (n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), m) : (n.enter("codeTextData"), h(y));
  }
  function h(y) {
    return y === null || y === 32 || y === 96 || mt(y) ? (n.exit("codeTextData"), m(y)) : (n.consume(y), h);
  }
  function b(y) {
    return y === 96 ? (n.consume(y), c++, b) : c === u ? (n.exit("codeTextSequence"), n.exit("codeText"), r(y)) : (d.type = "codeTextData", h(y));
  }
}
class Lx {
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
    const c = a || 0;
    this.setCursor(Math.trunc(r));
    const d = this.right.splice(this.right.length - c, Number.POSITIVE_INFINITY);
    return u && Oa(this.left, u), d.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Oa(this.left, r);
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
    this.setCursor(0), Oa(this.right, r.reverse());
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
        Oa(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        Oa(this.left, a.reverse());
      }
  }
}
function Oa(n, r) {
  let a = 0;
  if (r.length < 1e4)
    n.push(...r);
  else
    for (; a < r.length; )
      n.push(...r.slice(a, a + 1e4)), a += 1e4;
}
function Qg(n) {
  const r = {};
  let a = -1, u, c, d, f, p, m, h;
  const b = new Lx(n);
  for (; ++a < b.length; ) {
    for (; a in r; )
      a = r[a];
    if (u = b.get(a), a && u[1].type === "chunkFlow" && b.get(a - 1)[1].type === "listItemPrefix" && (m = u[1]._tokenizer.events, d = 0, d < m.length && m[d][1].type === "lineEndingBlank" && (d += 2), d < m.length && m[d][1].type === "content"))
      for (; ++d < m.length && m[d][1].type !== "content"; )
        m[d][1].type === "chunkText" && (m[d][1]._isInFirstContentOfListItem = !0, d++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(r, Ux(b, a)), a = r[a], h = !0);
    else if (u[1]._container) {
      for (d = a, c = void 0; d--; )
        if (f = b.get(d), f[1].type === "lineEnding" || f[1].type === "lineEndingBlank")
          f[0] === "enter" && (c && (b.get(c)[1].type = "lineEndingBlank"), f[1].type = "lineEnding", c = d);
        else if (!(f[1].type === "linePrefix" || f[1].type === "listItemIndent")) break;
      c && (u[1].end = {
        ...b.get(c)[1].start
      }, p = b.slice(c, a), p.unshift(u), b.splice(c, a - c + 1, p));
    }
  }
  return Ze(n, 0, Number.POSITIVE_INFINITY, b.slice(0)), !h;
}
function Ux(n, r) {
  const a = n.get(r)[1], u = n.get(r)[2];
  let c = r - 1;
  const d = [];
  let f = a._tokenizer;
  f || (f = u.parser[a.contentType](a.start), a._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events, m = [], h = {};
  let b, y, w = -1, x = a, E = 0, R = 0;
  const L = [R];
  for (; x; ) {
    for (; n.get(++c)[1] !== x; )
      ;
    d.push(c), x._tokenizer || (b = u.sliceStream(x), x.next || b.push(null), y && f.defineSkip(x.start), x._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0), f.write(b), x._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)), y = x, x = x.next;
  }
  for (x = a; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (R = w + 1, L.push(R), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (f.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : L.pop(), w = L.length; w--; ) {
    const D = p.slice(L[w], L[w + 1]), Z = d.pop();
    m.push([Z, Z + D.length - 1]), n.splice(Z, 2, D);
  }
  for (m.reverse(), w = -1; ++w < m.length; )
    h[E + m[w][0]] = E + m[w][1], E += m[w][1] - m[w][0] - 1;
  return h;
}
const jx = {
  resolve: Hx,
  tokenize: qx
}, Bx = {
  partial: !0,
  tokenize: Yx
};
function Hx(n) {
  return Qg(n), n;
}
function qx(n, r) {
  let a;
  return u;
  function u(p) {
    return n.enter("content"), a = n.enter("chunkContent", {
      contentType: "content"
    }), c(p);
  }
  function c(p) {
    return p === null ? d(p) : mt(p) ? n.check(Bx, f, d)(p) : (n.consume(p), c);
  }
  function d(p) {
    return n.exit("chunkContent"), n.exit("content"), r(p);
  }
  function f(p) {
    return n.consume(p), n.exit("chunkContent"), a.next = n.enter("chunkContent", {
      contentType: "content",
      previous: a
    }), a = a.next, c;
  }
}
function Yx(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), Ot(n, d, "linePrefix");
  }
  function d(f) {
    if (f === null || mt(f))
      return a(f);
    const p = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? r(f) : n.interrupt(u.parser.constructs.flow, a, r)(f);
  }
}
function Xg(n, r, a, u, c, d, f, p, m) {
  const h = m || Number.POSITIVE_INFINITY;
  let b = 0;
  return y;
  function y(D) {
    return D === 60 ? (n.enter(u), n.enter(c), n.enter(d), n.consume(D), n.exit(d), w) : D === null || D === 32 || D === 41 || vu(D) ? a(D) : (n.enter(u), n.enter(f), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), R(D));
  }
  function w(D) {
    return D === 62 ? (n.enter(d), n.consume(D), n.exit(d), n.exit(c), n.exit(u), r) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), x(D));
  }
  function x(D) {
    return D === 62 ? (n.exit("chunkString"), n.exit(p), w(D)) : D === null || D === 60 || mt(D) ? a(D) : (n.consume(D), D === 92 ? E : x);
  }
  function E(D) {
    return D === 60 || D === 62 || D === 92 ? (n.consume(D), x) : x(D);
  }
  function R(D) {
    return !b && (D === null || D === 41 || Ft(D)) ? (n.exit("chunkString"), n.exit(p), n.exit(f), n.exit(u), r(D)) : b < h && D === 40 ? (n.consume(D), b++, R) : D === 41 ? (n.consume(D), b--, R) : D === null || D === 32 || D === 40 || vu(D) ? a(D) : (n.consume(D), D === 92 ? L : R);
  }
  function L(D) {
    return D === 40 || D === 41 || D === 92 ? (n.consume(D), R) : R(D);
  }
}
function Zg(n, r, a, u, c, d) {
  const f = this;
  let p = 0, m;
  return h;
  function h(x) {
    return n.enter(u), n.enter(c), n.consume(x), n.exit(c), n.enter(d), b;
  }
  function b(x) {
    return p > 999 || x === null || x === 91 || x === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !p && "_hiddenFootnoteSupport" in f.parser.constructs ? a(x) : x === 93 ? (n.exit(d), n.enter(c), n.consume(x), n.exit(c), n.exit(u), r) : mt(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), b) : (n.enter("chunkString", {
      contentType: "string"
    }), y(x));
  }
  function y(x) {
    return x === null || x === 91 || x === 93 || mt(x) || p++ > 999 ? (n.exit("chunkString"), b(x)) : (n.consume(x), m || (m = !Ct(x)), x === 92 ? w : y);
  }
  function w(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), p++, y) : y(x);
  }
}
function Fg(n, r, a, u, c, d) {
  let f;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (n.enter(u), n.enter(c), n.consume(w), n.exit(c), f = w === 40 ? 41 : w, m) : a(w);
  }
  function m(w) {
    return w === f ? (n.enter(c), n.consume(w), n.exit(c), n.exit(u), r) : (n.enter(d), h(w));
  }
  function h(w) {
    return w === f ? (n.exit(d), m(f)) : w === null ? a(w) : mt(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), Ot(n, h, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), b(w));
  }
  function b(w) {
    return w === f || w === null || mt(w) ? (n.exit("chunkString"), h(w)) : (n.consume(w), w === 92 ? y : b);
  }
  function y(w) {
    return w === f || w === 92 ? (n.consume(w), b) : b(w);
  }
}
function La(n, r) {
  let a;
  return u;
  function u(c) {
    return mt(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), a = !0, u) : Ct(c) ? Ot(n, u, a ? "linePrefix" : "lineSuffix")(c) : r(c);
  }
}
const Gx = {
  name: "definition",
  tokenize: Qx
}, Vx = {
  partial: !0,
  tokenize: Xx
};
function Qx(n, r, a) {
  const u = this;
  let c;
  return d;
  function d(x) {
    return n.enter("definition"), f(x);
  }
  function f(x) {
    return Zg.call(
      u,
      n,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(x);
  }
  function p(x) {
    return c = sn(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), x === 58 ? (n.enter("definitionMarker"), n.consume(x), n.exit("definitionMarker"), m) : a(x);
  }
  function m(x) {
    return Ft(x) ? La(n, h)(x) : h(x);
  }
  function h(x) {
    return Xg(
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
    return n.attempt(Vx, y, y)(x);
  }
  function y(x) {
    return Ct(x) ? Ot(n, w, "whitespace")(x) : w(x);
  }
  function w(x) {
    return x === null || mt(x) ? (n.exit("definition"), u.parser.defined.push(c), r(x)) : a(x);
  }
}
function Xx(n, r, a) {
  return u;
  function u(p) {
    return Ft(p) ? La(n, c)(p) : a(p);
  }
  function c(p) {
    return Fg(n, d, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function d(p) {
    return Ct(p) ? Ot(n, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || mt(p) ? r(p) : a(p);
  }
}
const Zx = {
  name: "hardBreakEscape",
  tokenize: Fx
};
function Fx(n, r, a) {
  return u;
  function u(d) {
    return n.enter("hardBreakEscape"), n.consume(d), c;
  }
  function c(d) {
    return mt(d) ? (n.exit("hardBreakEscape"), r(d)) : a(d);
  }
}
const Kx = {
  name: "headingAtx",
  resolve: Jx,
  tokenize: Ix
};
function Jx(n, r) {
  let a = n.length - 2, u = 3, c, d;
  return n[u][1].type === "whitespace" && (u += 2), a - 2 > u && n[a][1].type === "whitespace" && (a -= 2), n[a][1].type === "atxHeadingSequence" && (u === a - 1 || a - 4 > u && n[a - 2][1].type === "whitespace") && (a -= u + 1 === a ? 2 : 4), a > u && (c = {
    type: "atxHeadingText",
    start: n[u][1].start,
    end: n[a][1].end
  }, d = {
    type: "chunkText",
    start: n[u][1].start,
    end: n[a][1].end,
    contentType: "text"
  }, Ze(n, u, a - u + 1, [["enter", c, r], ["enter", d, r], ["exit", d, r], ["exit", c, r]])), n;
}
function Ix(n, r, a) {
  let u = 0;
  return c;
  function c(b) {
    return n.enter("atxHeading"), d(b);
  }
  function d(b) {
    return n.enter("atxHeadingSequence"), f(b);
  }
  function f(b) {
    return b === 35 && u++ < 6 ? (n.consume(b), f) : b === null || Ft(b) ? (n.exit("atxHeadingSequence"), p(b)) : a(b);
  }
  function p(b) {
    return b === 35 ? (n.enter("atxHeadingSequence"), m(b)) : b === null || mt(b) ? (n.exit("atxHeading"), r(b)) : Ct(b) ? Ot(n, p, "whitespace")(b) : (n.enter("atxHeadingText"), h(b));
  }
  function m(b) {
    return b === 35 ? (n.consume(b), m) : (n.exit("atxHeadingSequence"), p(b));
  }
  function h(b) {
    return b === null || b === 35 || Ft(b) ? (n.exit("atxHeadingText"), p(b)) : (n.consume(b), h);
  }
}
const $x = [
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
], Om = ["pre", "script", "style", "textarea"], Wx = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ew,
  tokenize: nw
}, Px = {
  partial: !0,
  tokenize: iw
}, tw = {
  partial: !0,
  tokenize: lw
};
function ew(n) {
  let r = n.length;
  for (; r-- && !(n[r][0] === "enter" && n[r][1].type === "htmlFlow"); )
    ;
  return r > 1 && n[r - 2][1].type === "linePrefix" && (n[r][1].start = n[r - 2][1].start, n[r + 1][1].start = n[r - 2][1].start, n.splice(r - 2, 2)), n;
}
function nw(n, r, a) {
  const u = this;
  let c, d, f, p, m;
  return h;
  function h(k) {
    return b(k);
  }
  function b(k) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(k), y;
  }
  function y(k) {
    return k === 33 ? (n.consume(k), w) : k === 47 ? (n.consume(k), d = !0, R) : k === 63 ? (n.consume(k), c = 3, u.interrupt ? r : S) : ze(k) ? (n.consume(k), f = String.fromCharCode(k), L) : a(k);
  }
  function w(k) {
    return k === 45 ? (n.consume(k), c = 2, x) : k === 91 ? (n.consume(k), c = 5, p = 0, E) : ze(k) ? (n.consume(k), c = 4, u.interrupt ? r : S) : a(k);
  }
  function x(k) {
    return k === 45 ? (n.consume(k), u.interrupt ? r : S) : a(k);
  }
  function E(k) {
    const $ = "CDATA[";
    return k === $.charCodeAt(p++) ? (n.consume(k), p === $.length ? u.interrupt ? r : tt : E) : a(k);
  }
  function R(k) {
    return ze(k) ? (n.consume(k), f = String.fromCharCode(k), L) : a(k);
  }
  function L(k) {
    if (k === null || k === 47 || k === 62 || Ft(k)) {
      const $ = k === 47, ft = f.toLowerCase();
      return !$ && !d && Om.includes(ft) ? (c = 1, u.interrupt ? r(k) : tt(k)) : $x.includes(f.toLowerCase()) ? (c = 6, $ ? (n.consume(k), D) : u.interrupt ? r(k) : tt(k)) : (c = 7, u.interrupt && !u.parser.lazy[u.now().line] ? a(k) : d ? Z(k) : H(k));
    }
    return k === 45 || ve(k) ? (n.consume(k), f += String.fromCharCode(k), L) : a(k);
  }
  function D(k) {
    return k === 62 ? (n.consume(k), u.interrupt ? r : tt) : a(k);
  }
  function Z(k) {
    return Ct(k) ? (n.consume(k), Z) : U(k);
  }
  function H(k) {
    return k === 47 ? (n.consume(k), U) : k === 58 || k === 95 || ze(k) ? (n.consume(k), lt) : Ct(k) ? (n.consume(k), H) : U(k);
  }
  function lt(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || ve(k) ? (n.consume(k), lt) : ot(k);
  }
  function ot(k) {
    return k === 61 ? (n.consume(k), B) : Ct(k) ? (n.consume(k), ot) : H(k);
  }
  function B(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? a(k) : k === 34 || k === 39 ? (n.consume(k), m = k, P) : Ct(k) ? (n.consume(k), B) : J(k);
  }
  function P(k) {
    return k === m ? (n.consume(k), m = null, pt) : k === null || mt(k) ? a(k) : (n.consume(k), P);
  }
  function J(k) {
    return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || Ft(k) ? ot(k) : (n.consume(k), J);
  }
  function pt(k) {
    return k === 47 || k === 62 || Ct(k) ? H(k) : a(k);
  }
  function U(k) {
    return k === 62 ? (n.consume(k), nt) : a(k);
  }
  function nt(k) {
    return k === null || mt(k) ? tt(k) : Ct(k) ? (n.consume(k), nt) : a(k);
  }
  function tt(k) {
    return k === 45 && c === 2 ? (n.consume(k), _) : k === 60 && c === 1 ? (n.consume(k), F) : k === 62 && c === 4 ? (n.consume(k), A) : k === 63 && c === 3 ? (n.consume(k), S) : k === 93 && c === 5 ? (n.consume(k), xt) : mt(k) && (c === 6 || c === 7) ? (n.exit("htmlFlowData"), n.check(Px, Y, St)(k)) : k === null || mt(k) ? (n.exit("htmlFlowData"), St(k)) : (n.consume(k), tt);
  }
  function St(k) {
    return n.check(tw, it, Y)(k);
  }
  function it(k) {
    return n.enter("lineEnding"), n.consume(k), n.exit("lineEnding"), I;
  }
  function I(k) {
    return k === null || mt(k) ? St(k) : (n.enter("htmlFlowData"), tt(k));
  }
  function _(k) {
    return k === 45 ? (n.consume(k), S) : tt(k);
  }
  function F(k) {
    return k === 47 ? (n.consume(k), f = "", X) : tt(k);
  }
  function X(k) {
    if (k === 62) {
      const $ = f.toLowerCase();
      return Om.includes($) ? (n.consume(k), A) : tt(k);
    }
    return ze(k) && f.length < 8 ? (n.consume(k), f += String.fromCharCode(k), X) : tt(k);
  }
  function xt(k) {
    return k === 93 ? (n.consume(k), S) : tt(k);
  }
  function S(k) {
    return k === 62 ? (n.consume(k), A) : k === 45 && c === 2 ? (n.consume(k), S) : tt(k);
  }
  function A(k) {
    return k === null || mt(k) ? (n.exit("htmlFlowData"), Y(k)) : (n.consume(k), A);
  }
  function Y(k) {
    return n.exit("htmlFlow"), r(k);
  }
}
function lw(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return mt(f) ? (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), d) : a(f);
  }
  function d(f) {
    return u.parser.lazy[u.now().line] ? a(f) : r(f);
  }
}
function iw(n, r, a) {
  return u;
  function u(c) {
    return n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), n.attempt(Ya, r, a);
  }
}
const aw = {
  name: "htmlText",
  tokenize: rw
};
function rw(n, r, a) {
  const u = this;
  let c, d, f;
  return p;
  function p(S) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(S), m;
  }
  function m(S) {
    return S === 33 ? (n.consume(S), h) : S === 47 ? (n.consume(S), ot) : S === 63 ? (n.consume(S), H) : ze(S) ? (n.consume(S), J) : a(S);
  }
  function h(S) {
    return S === 45 ? (n.consume(S), b) : S === 91 ? (n.consume(S), d = 0, E) : ze(S) ? (n.consume(S), Z) : a(S);
  }
  function b(S) {
    return S === 45 ? (n.consume(S), x) : a(S);
  }
  function y(S) {
    return S === null ? a(S) : S === 45 ? (n.consume(S), w) : mt(S) ? (f = y, F(S)) : (n.consume(S), y);
  }
  function w(S) {
    return S === 45 ? (n.consume(S), x) : y(S);
  }
  function x(S) {
    return S === 62 ? _(S) : S === 45 ? w(S) : y(S);
  }
  function E(S) {
    const A = "CDATA[";
    return S === A.charCodeAt(d++) ? (n.consume(S), d === A.length ? R : E) : a(S);
  }
  function R(S) {
    return S === null ? a(S) : S === 93 ? (n.consume(S), L) : mt(S) ? (f = R, F(S)) : (n.consume(S), R);
  }
  function L(S) {
    return S === 93 ? (n.consume(S), D) : R(S);
  }
  function D(S) {
    return S === 62 ? _(S) : S === 93 ? (n.consume(S), D) : R(S);
  }
  function Z(S) {
    return S === null || S === 62 ? _(S) : mt(S) ? (f = Z, F(S)) : (n.consume(S), Z);
  }
  function H(S) {
    return S === null ? a(S) : S === 63 ? (n.consume(S), lt) : mt(S) ? (f = H, F(S)) : (n.consume(S), H);
  }
  function lt(S) {
    return S === 62 ? _(S) : H(S);
  }
  function ot(S) {
    return ze(S) ? (n.consume(S), B) : a(S);
  }
  function B(S) {
    return S === 45 || ve(S) ? (n.consume(S), B) : P(S);
  }
  function P(S) {
    return mt(S) ? (f = P, F(S)) : Ct(S) ? (n.consume(S), P) : _(S);
  }
  function J(S) {
    return S === 45 || ve(S) ? (n.consume(S), J) : S === 47 || S === 62 || Ft(S) ? pt(S) : a(S);
  }
  function pt(S) {
    return S === 47 ? (n.consume(S), _) : S === 58 || S === 95 || ze(S) ? (n.consume(S), U) : mt(S) ? (f = pt, F(S)) : Ct(S) ? (n.consume(S), pt) : _(S);
  }
  function U(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || ve(S) ? (n.consume(S), U) : nt(S);
  }
  function nt(S) {
    return S === 61 ? (n.consume(S), tt) : mt(S) ? (f = nt, F(S)) : Ct(S) ? (n.consume(S), nt) : pt(S);
  }
  function tt(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? a(S) : S === 34 || S === 39 ? (n.consume(S), c = S, St) : mt(S) ? (f = tt, F(S)) : Ct(S) ? (n.consume(S), tt) : (n.consume(S), it);
  }
  function St(S) {
    return S === c ? (n.consume(S), c = void 0, I) : S === null ? a(S) : mt(S) ? (f = St, F(S)) : (n.consume(S), St);
  }
  function it(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96 ? a(S) : S === 47 || S === 62 || Ft(S) ? pt(S) : (n.consume(S), it);
  }
  function I(S) {
    return S === 47 || S === 62 || Ft(S) ? pt(S) : a(S);
  }
  function _(S) {
    return S === 62 ? (n.consume(S), n.exit("htmlTextData"), n.exit("htmlText"), r) : a(S);
  }
  function F(S) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), X;
  }
  function X(S) {
    return Ct(S) ? Ot(n, xt, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : xt(S);
  }
  function xt(S) {
    return n.enter("htmlTextData"), f(S);
  }
}
const Yc = {
  name: "labelEnd",
  resolveAll: cw,
  resolveTo: fw,
  tokenize: dw
}, uw = {
  tokenize: hw
}, ow = {
  tokenize: pw
}, sw = {
  tokenize: mw
};
function cw(n) {
  let r = -1;
  const a = [];
  for (; ++r < n.length; ) {
    const u = n[r][1];
    if (a.push(n[r]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const c = u.type === "labelImage" ? 4 : 2;
      u.type = "data", r += c;
    }
  }
  return n.length !== a.length && Ze(n, 0, n.length, a), n;
}
function fw(n, r) {
  let a = n.length, u = 0, c, d, f, p;
  for (; a--; )
    if (c = n[a][1], d) {
      if (c.type === "link" || c.type === "labelLink" && c._inactive)
        break;
      n[a][0] === "enter" && c.type === "labelLink" && (c._inactive = !0);
    } else if (f) {
      if (n[a][0] === "enter" && (c.type === "labelImage" || c.type === "labelLink") && !c._balanced && (d = a, c.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else c.type === "labelEnd" && (f = a);
  const m = {
    type: n[d][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[d][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, h = {
    type: "label",
    start: {
      ...n[d][1].start
    },
    end: {
      ...n[f][1].end
    }
  }, b = {
    type: "labelText",
    start: {
      ...n[d + u + 2][1].end
    },
    end: {
      ...n[f - 2][1].start
    }
  };
  return p = [["enter", m, r], ["enter", h, r]], p = ln(p, n.slice(d + 1, d + u + 3)), p = ln(p, [["enter", b, r]]), p = ln(p, Au(r.parser.constructs.insideSpan.null, n.slice(d + u + 4, f - 3), r)), p = ln(p, [["exit", b, r], n[f - 2], n[f - 1], ["exit", h, r]]), p = ln(p, n.slice(f + 1)), p = ln(p, [["exit", m, r]]), Ze(n, d, n.length, p), n;
}
function dw(n, r, a) {
  const u = this;
  let c = u.events.length, d, f;
  for (; c--; )
    if ((u.events[c][1].type === "labelImage" || u.events[c][1].type === "labelLink") && !u.events[c][1]._balanced) {
      d = u.events[c][1];
      break;
    }
  return p;
  function p(w) {
    return d ? d._inactive ? y(w) : (f = u.parser.defined.includes(sn(u.sliceSerialize({
      start: d.end,
      end: u.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelEnd"), m) : a(w);
  }
  function m(w) {
    return w === 40 ? n.attempt(uw, b, f ? b : y)(w) : w === 91 ? n.attempt(ow, b, f ? h : y)(w) : f ? b(w) : y(w);
  }
  function h(w) {
    return n.attempt(sw, b, y)(w);
  }
  function b(w) {
    return r(w);
  }
  function y(w) {
    return d._balanced = !0, a(w);
  }
}
function hw(n, r, a) {
  return u;
  function u(y) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), c;
  }
  function c(y) {
    return Ft(y) ? La(n, d)(y) : d(y);
  }
  function d(y) {
    return y === 41 ? b(y) : Xg(n, f, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function f(y) {
    return Ft(y) ? La(n, m)(y) : b(y);
  }
  function p(y) {
    return a(y);
  }
  function m(y) {
    return y === 34 || y === 39 || y === 40 ? Fg(n, h, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : b(y);
  }
  function h(y) {
    return Ft(y) ? La(n, b)(y) : b(y);
  }
  function b(y) {
    return y === 41 ? (n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), n.exit("resource"), r) : a(y);
  }
}
function pw(n, r, a) {
  const u = this;
  return c;
  function c(p) {
    return Zg.call(u, n, d, f, "reference", "referenceMarker", "referenceString")(p);
  }
  function d(p) {
    return u.parser.defined.includes(sn(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? r(p) : a(p);
  }
  function f(p) {
    return a(p);
  }
}
function mw(n, r, a) {
  return u;
  function u(d) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(d), n.exit("referenceMarker"), c;
  }
  function c(d) {
    return d === 93 ? (n.enter("referenceMarker"), n.consume(d), n.exit("referenceMarker"), n.exit("reference"), r) : a(d);
  }
}
const gw = {
  name: "labelStartImage",
  resolveAll: Yc.resolveAll,
  tokenize: yw
};
function yw(n, r, a) {
  const u = this;
  return c;
  function c(p) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(p), n.exit("labelImageMarker"), d;
  }
  function d(p) {
    return p === 91 ? (n.enter("labelMarker"), n.consume(p), n.exit("labelMarker"), n.exit("labelImage"), f) : a(p);
  }
  function f(p) {
    return p === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? a(p) : r(p);
  }
}
const bw = {
  name: "labelStartLink",
  resolveAll: Yc.resolveAll,
  tokenize: vw
};
function vw(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(f), n.exit("labelMarker"), n.exit("labelLink"), d;
  }
  function d(f) {
    return f === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? a(f) : r(f);
  }
}
const ac = {
  name: "lineEnding",
  tokenize: xw
};
function xw(n, r) {
  return a;
  function a(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), Ot(n, r, "linePrefix");
  }
}
const yu = {
  name: "thematicBreak",
  tokenize: ww
};
function ww(n, r, a) {
  let u = 0, c;
  return d;
  function d(h) {
    return n.enter("thematicBreak"), f(h);
  }
  function f(h) {
    return c = h, p(h);
  }
  function p(h) {
    return h === c ? (n.enter("thematicBreakSequence"), m(h)) : u >= 3 && (h === null || mt(h)) ? (n.exit("thematicBreak"), r(h)) : a(h);
  }
  function m(h) {
    return h === c ? (n.consume(h), u++, m) : (n.exit("thematicBreakSequence"), Ct(h) ? Ot(n, p, "whitespace")(h) : p(h));
  }
}
const Re = {
  continuation: {
    tokenize: Ew
  },
  exit: Tw,
  name: "list",
  tokenize: zw
}, kw = {
  partial: !0,
  tokenize: Cw
}, Sw = {
  partial: !0,
  tokenize: Aw
};
function zw(n, r, a) {
  const u = this, c = u.events[u.events.length - 1];
  let d = c && c[1].type === "linePrefix" ? c[2].sliceSerialize(c[1], !0).length : 0, f = 0;
  return p;
  function p(x) {
    const E = u.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (E === "listUnordered" ? !u.containerState.marker || x === u.containerState.marker : zc(x)) {
      if (u.containerState.type || (u.containerState.type = E, n.enter(E, {
        _container: !0
      })), E === "listUnordered")
        return n.enter("listItemPrefix"), x === 42 || x === 45 ? n.check(yu, a, h)(x) : h(x);
      if (!u.interrupt || x === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), m(x);
    }
    return a(x);
  }
  function m(x) {
    return zc(x) && ++f < 10 ? (n.consume(x), m) : (!u.interrupt || f < 2) && (u.containerState.marker ? x === u.containerState.marker : x === 41 || x === 46) ? (n.exit("listItemValue"), h(x)) : a(x);
  }
  function h(x) {
    return n.enter("listItemMarker"), n.consume(x), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || x, n.check(
      Ya,
      // Can’t be empty when interrupting.
      u.interrupt ? a : b,
      n.attempt(kw, w, y)
    );
  }
  function b(x) {
    return u.containerState.initialBlankLine = !0, d++, w(x);
  }
  function y(x) {
    return Ct(x) ? (n.enter("listItemPrefixWhitespace"), n.consume(x), n.exit("listItemPrefixWhitespace"), w) : a(x);
  }
  function w(x) {
    return u.containerState.size = d + u.sliceSerialize(n.exit("listItemPrefix"), !0).length, r(x);
  }
}
function Ew(n, r, a) {
  const u = this;
  return u.containerState._closeFlow = void 0, n.check(Ya, c, d);
  function c(p) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, Ot(n, r, "listItemIndent", u.containerState.size + 1)(p);
  }
  function d(p) {
    return u.containerState.furtherBlankLines || !Ct(p) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, f(p)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(Sw, r, f)(p));
  }
  function f(p) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, Ot(n, n.attempt(Re, r, a), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function Aw(n, r, a) {
  const u = this;
  return Ot(n, c, "listItemIndent", u.containerState.size + 1);
  function c(d) {
    const f = u.events[u.events.length - 1];
    return f && f[1].type === "listItemIndent" && f[2].sliceSerialize(f[1], !0).length === u.containerState.size ? r(d) : a(d);
  }
}
function Tw(n) {
  n.exit(this.containerState.type);
}
function Cw(n, r, a) {
  const u = this;
  return Ot(n, c, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function c(d) {
    const f = u.events[u.events.length - 1];
    return !Ct(d) && f && f[1].type === "listItemPrefixWhitespace" ? r(d) : a(d);
  }
}
const Rm = {
  name: "setextUnderline",
  resolveTo: Dw,
  tokenize: _w
};
function Dw(n, r) {
  let a = n.length, u, c, d;
  for (; a--; )
    if (n[a][0] === "enter") {
      if (n[a][1].type === "content") {
        u = a;
        break;
      }
      n[a][1].type === "paragraph" && (c = a);
    } else
      n[a][1].type === "content" && n.splice(a, 1), !d && n[a][1].type === "definition" && (d = a);
  const f = {
    type: "setextHeading",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[c][1].type = "setextHeadingText", d ? (n.splice(c, 0, ["enter", f, r]), n.splice(d + 1, 0, ["exit", n[u][1], r]), n[u][1].end = {
    ...n[d][1].end
  }) : n[u][1] = f, n.push(["exit", f, r]), n;
}
function _w(n, r, a) {
  const u = this;
  let c;
  return d;
  function d(h) {
    let b = u.events.length, y;
    for (; b--; )
      if (u.events[b][1].type !== "lineEnding" && u.events[b][1].type !== "linePrefix" && u.events[b][1].type !== "content") {
        y = u.events[b][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || y) ? (n.enter("setextHeadingLine"), c = h, f(h)) : a(h);
  }
  function f(h) {
    return n.enter("setextHeadingLineSequence"), p(h);
  }
  function p(h) {
    return h === c ? (n.consume(h), p) : (n.exit("setextHeadingLineSequence"), Ct(h) ? Ot(n, m, "lineSuffix")(h) : m(h));
  }
  function m(h) {
    return h === null || mt(h) ? (n.exit("setextHeadingLine"), r(h)) : a(h);
  }
}
const Mw = {
  tokenize: Ow
};
function Ow(n) {
  const r = this, a = n.attempt(
    // Try to parse a blank line.
    Ya,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, c, Ot(n, n.attempt(this.parser.constructs.flow, c, n.attempt(jx, c)), "linePrefix"))
  );
  return a;
  function u(d) {
    if (d === null) {
      n.consume(d);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(d), n.exit("lineEndingBlank"), r.currentConstruct = void 0, a;
  }
  function c(d) {
    if (d === null) {
      n.consume(d);
      return;
    }
    return n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), r.currentConstruct = void 0, a;
  }
}
const Rw = {
  resolveAll: Jg()
}, Nw = Kg("string"), Lw = Kg("text");
function Kg(n) {
  return {
    resolveAll: Jg(n === "text" ? Uw : void 0),
    tokenize: r
  };
  function r(a) {
    const u = this, c = this.parser.constructs[n], d = a.attempt(c, f, p);
    return f;
    function f(b) {
      return h(b) ? d(b) : p(b);
    }
    function p(b) {
      if (b === null) {
        a.consume(b);
        return;
      }
      return a.enter("data"), a.consume(b), m;
    }
    function m(b) {
      return h(b) ? (a.exit("data"), d(b)) : (a.consume(b), m);
    }
    function h(b) {
      if (b === null)
        return !0;
      const y = c[b];
      let w = -1;
      if (y)
        for (; ++w < y.length; ) {
          const x = y[w];
          if (!x.previous || x.previous.call(u, u.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Jg(n) {
  return r;
  function r(a, u) {
    let c = -1, d;
    for (; ++c <= a.length; )
      d === void 0 ? a[c] && a[c][1].type === "data" && (d = c, c++) : (!a[c] || a[c][1].type !== "data") && (c !== d + 2 && (a[d][1].end = a[c - 1][1].end, a.splice(d + 2, c - d - 2), c = d + 2), d = void 0);
    return n ? n(a, u) : a;
  }
}
function Uw(n, r) {
  let a = 0;
  for (; ++a <= n.length; )
    if ((a === n.length || n[a][1].type === "lineEnding") && n[a - 1][1].type === "data") {
      const u = n[a - 1][1], c = r.sliceStream(u);
      let d = c.length, f = -1, p = 0, m;
      for (; d--; ) {
        const h = c[d];
        if (typeof h == "string") {
          for (f = h.length; h.charCodeAt(f - 1) === 32; )
            p++, f--;
          if (f) break;
          f = -1;
        } else if (h === -2)
          m = !0, p++;
        else if (h !== -1) {
          d++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && a === n.length && (p = 0), p) {
        const h = {
          type: a === n.length || m || p < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: d ? f : u.start._bufferIndex + f,
            _index: u.start._index + d,
            line: u.end.line,
            column: u.end.column - p,
            offset: u.end.offset - p
          },
          end: {
            ...u.end
          }
        };
        u.end = {
          ...h.start
        }, u.start.offset === u.end.offset ? Object.assign(u, h) : (n.splice(a, 0, ["enter", h, r], ["exit", h, r]), a += 2);
      }
      a++;
    }
  return n;
}
const jw = {
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
  62: Yg
}, Bw = {
  91: Gx
}, Hw = {
  [-2]: ic,
  [-1]: ic,
  32: ic
}, qw = {
  35: Kx,
  42: yu,
  45: [Rm, yu],
  60: Wx,
  61: Rm,
  95: yu,
  96: Mm,
  126: Mm
}, Yw = {
  38: Vg,
  92: Gg
}, Gw = {
  [-5]: ac,
  [-4]: ac,
  [-3]: ac,
  33: gw,
  38: Vg,
  42: Ec,
  60: [bx, aw],
  91: bw,
  92: [Zx, Gg],
  93: Yc,
  95: Ec,
  96: Mx
}, Vw = {
  null: [Ec, Rw]
}, Qw = {
  null: [42, 95]
}, Xw = {
  null: []
}, Zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Qw,
  contentInitial: Bw,
  disable: Xw,
  document: jw,
  flow: qw,
  flowInitial: Hw,
  insideSpan: Vw,
  string: Yw,
  text: Gw
}, Symbol.toStringTag, { value: "Module" }));
function Fw(n, r, a) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: a && a.line || 1,
    column: a && a.column || 1,
    offset: a && a.offset || 0
  };
  const c = {}, d = [];
  let f = [], p = [];
  const m = {
    attempt: P(ot),
    check: P(B),
    consume: Z,
    enter: H,
    exit: lt,
    interrupt: P(B, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: R,
    events: [],
    now: E,
    parser: n,
    previous: null,
    sliceSerialize: w,
    sliceStream: x,
    write: y
  };
  let b = r.tokenize.call(h, m);
  return r.resolveAll && d.push(r), h;
  function y(nt) {
    return f = ln(f, nt), L(), f[f.length - 1] !== null ? [] : (J(r, 0), h.events = Au(d, h.events, h), h.events);
  }
  function w(nt, tt) {
    return Jw(x(nt), tt);
  }
  function x(nt) {
    return Kw(f, nt);
  }
  function E() {
    const {
      _bufferIndex: nt,
      _index: tt,
      line: St,
      column: it,
      offset: I
    } = u;
    return {
      _bufferIndex: nt,
      _index: tt,
      line: St,
      column: it,
      offset: I
    };
  }
  function R(nt) {
    c[nt.line] = nt.column, U();
  }
  function L() {
    let nt;
    for (; u._index < f.length; ) {
      const tt = f[u._index];
      if (typeof tt == "string")
        for (nt = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === nt && u._bufferIndex < tt.length; )
          D(tt.charCodeAt(u._bufferIndex));
      else
        D(tt);
    }
  }
  function D(nt) {
    b = b(nt);
  }
  function Z(nt) {
    mt(nt) ? (u.line++, u.column = 1, u.offset += nt === -3 ? 2 : 1, U()) : nt !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    f[u._index].length && (u._bufferIndex = -1, u._index++)), h.previous = nt;
  }
  function H(nt, tt) {
    const St = tt || {};
    return St.type = nt, St.start = E(), h.events.push(["enter", St, h]), p.push(St), St;
  }
  function lt(nt) {
    const tt = p.pop();
    return tt.end = E(), h.events.push(["exit", tt, h]), tt;
  }
  function ot(nt, tt) {
    J(nt, tt.from);
  }
  function B(nt, tt) {
    tt.restore();
  }
  function P(nt, tt) {
    return St;
    function St(it, I, _) {
      let F, X, xt, S;
      return Array.isArray(it) ? (
        /* c8 ignore next 1 */
        Y(it)
      ) : "tokenize" in it ? (
        // Looks like a construct.
        Y([
          /** @type {Construct} */
          it
        ])
      ) : A(it);
      function A(ct) {
        return dt;
        function dt(Vt) {
          const Rt = Vt !== null && ct[Vt], de = Vt !== null && ct.null, Le = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Rt) ? Rt : Rt ? [Rt] : [],
            ...Array.isArray(de) ? de : de ? [de] : []
          ];
          return Y(Le)(Vt);
        }
      }
      function Y(ct) {
        return F = ct, X = 0, ct.length === 0 ? _ : k(ct[X]);
      }
      function k(ct) {
        return dt;
        function dt(Vt) {
          return S = pt(), xt = ct, ct.partial || (h.currentConstruct = ct), ct.name && h.parser.constructs.disable.null.includes(ct.name) ? ft() : ct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            tt ? Object.assign(Object.create(h), tt) : h,
            m,
            $,
            ft
          )(Vt);
        }
      }
      function $(ct) {
        return nt(xt, S), I;
      }
      function ft(ct) {
        return S.restore(), ++X < F.length ? k(F[X]) : _;
      }
    }
  }
  function J(nt, tt) {
    nt.resolveAll && !d.includes(nt) && d.push(nt), nt.resolve && Ze(h.events, tt, h.events.length - tt, nt.resolve(h.events.slice(tt), h)), nt.resolveTo && (h.events = nt.resolveTo(h.events, h));
  }
  function pt() {
    const nt = E(), tt = h.previous, St = h.currentConstruct, it = h.events.length, I = Array.from(p);
    return {
      from: it,
      restore: _
    };
    function _() {
      u = nt, h.previous = tt, h.currentConstruct = St, h.events.length = it, p = I, U();
    }
  }
  function U() {
    u.line in c && u.column < 2 && (u.column = c[u.line], u.offset += c[u.line] - 1);
  }
}
function Kw(n, r) {
  const a = r.start._index, u = r.start._bufferIndex, c = r.end._index, d = r.end._bufferIndex;
  let f;
  if (a === c)
    f = [n[a].slice(u, d)];
  else {
    if (f = n.slice(a, c), u > -1) {
      const p = f[0];
      typeof p == "string" ? f[0] = p.slice(u) : f.shift();
    }
    d > 0 && f.push(n[c].slice(0, d));
  }
  return f;
}
function Jw(n, r) {
  let a = -1;
  const u = [];
  let c;
  for (; ++a < n.length; ) {
    const d = n[a];
    let f;
    if (typeof d == "string")
      f = d;
    else switch (d) {
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
        if (!r && c) continue;
        f = " ";
        break;
      }
      default:
        f = String.fromCharCode(d);
    }
    c = d === -2, u.push(f);
  }
  return u.join("");
}
function Iw(n) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Hg([Zw, ...(n || {}).extensions || []])
    ),
    content: c(fx),
    defined: [],
    document: c(hx),
    flow: c(Mw),
    lazy: {},
    string: c(Nw),
    text: c(Lw)
  };
  return u;
  function c(d) {
    return f;
    function f(p) {
      return Fw(u, d, p);
    }
  }
}
function $w(n) {
  for (; !Qg(n); )
    ;
  return n;
}
const Nm = /[\0\t\n\r]/g;
function Ww() {
  let n = 1, r = "", a = !0, u;
  return c;
  function c(d, f, p) {
    const m = [];
    let h, b, y, w, x;
    for (d = r + (typeof d == "string" ? d.toString() : new TextDecoder(f || void 0).decode(d)), y = 0, r = "", a && (d.charCodeAt(0) === 65279 && y++, a = void 0); y < d.length; ) {
      if (Nm.lastIndex = y, h = Nm.exec(d), w = h && h.index !== void 0 ? h.index : d.length, x = d.charCodeAt(w), !h) {
        r = d.slice(y);
        break;
      }
      if (x === 10 && y === w && u)
        m.push(-3), u = void 0;
      else
        switch (u && (m.push(-5), u = void 0), y < w && (m.push(d.slice(y, w)), n += w - y), x) {
          case 0: {
            m.push(65533), n++;
            break;
          }
          case 9: {
            for (b = Math.ceil(n / 4) * 4, m.push(-2); n++ < b; ) m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), n = 1;
            break;
          }
          default:
            u = !0, n = 1;
        }
      y = w + 1;
    }
    return p && (u && m.push(-5), r && m.push(r), m.push(null)), m;
  }
}
const Pw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function tk(n) {
  return n.replace(Pw, ek);
}
function ek(n, r, a) {
  if (r)
    return r;
  if (a.charCodeAt(0) === 35) {
    const c = a.charCodeAt(1), d = c === 120 || c === 88;
    return qg(a.slice(d ? 2 : 1), d ? 16 : 10);
  }
  return qc(a) || n;
}
const Ig = {}.hasOwnProperty;
function nk(n, r, a) {
  return r && typeof r == "object" && (a = r, r = void 0), lk(a)($w(Iw(a).document().write(Ww()(n, r, !0))));
}
function lk(n) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: d(Bl),
      autolinkProtocol: pt,
      autolinkEmail: pt,
      atxHeading: d(Ul),
      blockQuote: d(de),
      characterEscape: pt,
      characterReference: pt,
      codeFenced: d(Le),
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: f,
      codeIndented: d(Le, f),
      codeText: d(cn, f),
      codeTextData: pt,
      data: pt,
      codeFlowValue: pt,
      definition: d(Va),
      definitionDestinationString: f,
      definitionLabelString: f,
      definitionTitleString: f,
      emphasis: d(yn),
      hardBreakEscape: d(jl),
      hardBreakTrailing: d(jl),
      htmlFlow: d(Qa, f),
      htmlFlowData: pt,
      htmlText: d(Qa, f),
      htmlTextData: pt,
      image: d(Xa),
      label: f,
      link: d(Bl),
      listItem: d(Ni),
      listItemValue: w,
      listOrdered: d(Hl, y),
      listUnordered: d(Hl),
      paragraph: d(_u),
      reference: k,
      referenceString: f,
      resourceDestinationString: f,
      resourceTitleString: f,
      setextHeading: d(Ul),
      strong: d(Mu),
      thematicBreak: d(Ou)
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: ot,
      autolink: m(),
      autolinkEmail: Rt,
      autolinkProtocol: Vt,
      blockQuote: m(),
      characterEscapeValue: U,
      characterReferenceMarkerHexadecimal: ft,
      characterReferenceMarkerNumeric: ft,
      characterReferenceValue: ct,
      characterReference: dt,
      codeFenced: m(L),
      codeFencedFence: R,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: E,
      codeFlowValue: U,
      codeIndented: m(D),
      codeText: m(I),
      codeTextData: U,
      data: U,
      definition: m(),
      definitionDestinationString: lt,
      definitionLabelString: Z,
      definitionTitleString: H,
      emphasis: m(),
      hardBreakEscape: m(tt),
      hardBreakTrailing: m(tt),
      htmlFlow: m(St),
      htmlFlowData: U,
      htmlText: m(it),
      htmlTextData: U,
      image: m(F),
      label: xt,
      labelText: X,
      lineEnding: nt,
      link: m(_),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: $,
      resourceDestinationString: S,
      resourceTitleString: A,
      resource: Y,
      setextHeading: m(J),
      setextHeadingLineSequence: P,
      setextHeadingText: B,
      strong: m(),
      thematicBreak: m()
    }
  };
  $g(r, (n || {}).mdastExtensions || []);
  const a = {};
  return u;
  function u(G) {
    let W = {
      type: "root",
      children: []
    };
    const yt = {
      stack: [W],
      tokenStack: [],
      config: r,
      enter: p,
      exit: h,
      buffer: f,
      resume: b,
      data: a
    }, Et = [];
    let jt = -1;
    for (; ++jt < G.length; )
      if (G[jt][1].type === "listOrdered" || G[jt][1].type === "listUnordered")
        if (G[jt][0] === "enter")
          Et.push(jt);
        else {
          const Ue = Et.pop();
          jt = c(G, Ue, jt);
        }
    for (jt = -1; ++jt < G.length; ) {
      const Ue = r[G[jt][0]];
      Ig.call(Ue, G[jt][1].type) && Ue[G[jt][1].type].call(Object.assign({
        sliceSerialize: G[jt][2].sliceSerialize
      }, yt), G[jt][1]);
    }
    if (yt.tokenStack.length > 0) {
      const Ue = yt.tokenStack[yt.tokenStack.length - 1];
      (Ue[1] || Lm).call(yt, void 0, Ue[0]);
    }
    for (W.position = {
      start: fl(G.length > 0 ? G[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: fl(G.length > 0 ? G[G.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, jt = -1; ++jt < r.transforms.length; )
      W = r.transforms[jt](W) || W;
    return W;
  }
  function c(G, W, yt) {
    let Et = W - 1, jt = -1, Ue = !1, bn, ke, ue, Ee;
    for (; ++Et <= yt; ) {
      const Qt = G[Et];
      switch (Qt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Qt[0] === "enter" ? jt++ : jt--, Ee = void 0;
          break;
        }
        case "lineEndingBlank": {
          Qt[0] === "enter" && (bn && !Ee && !jt && !ue && (ue = Et), Ee = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ee = void 0;
      }
      if (!jt && Qt[0] === "enter" && Qt[1].type === "listItemPrefix" || jt === -1 && Qt[0] === "exit" && (Qt[1].type === "listUnordered" || Qt[1].type === "listOrdered")) {
        if (bn) {
          let Hn = Et;
          for (ke = void 0; Hn--; ) {
            const an = G[Hn];
            if (an[1].type === "lineEnding" || an[1].type === "lineEndingBlank") {
              if (an[0] === "exit") continue;
              ke && (G[ke][1].type = "lineEndingBlank", Ue = !0), an[1].type = "lineEnding", ke = Hn;
            } else if (!(an[1].type === "linePrefix" || an[1].type === "blockQuotePrefix" || an[1].type === "blockQuotePrefixWhitespace" || an[1].type === "blockQuoteMarker" || an[1].type === "listItemIndent")) break;
          }
          ue && (!ke || ue < ke) && (bn._spread = !0), bn.end = Object.assign({}, ke ? G[ke][1].start : Qt[1].end), G.splice(ke || Et, 0, ["exit", bn, Qt[2]]), Et++, yt++;
        }
        if (Qt[1].type === "listItemPrefix") {
          const Hn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Qt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          bn = Hn, G.splice(Et, 0, ["enter", Hn, Qt[2]]), Et++, yt++, ue = void 0, Ee = !0;
        }
      }
    }
    return G[W][1]._spread = Ue, yt;
  }
  function d(G, W) {
    return yt;
    function yt(Et) {
      p.call(this, G(Et), Et), W && W.call(this, Et);
    }
  }
  function f() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(G, W, yt) {
    this.stack[this.stack.length - 1].children.push(G), this.stack.push(G), this.tokenStack.push([W, yt || void 0]), G.position = {
      start: fl(W.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function m(G) {
    return W;
    function W(yt) {
      G && G.call(this, yt), h.call(this, yt);
    }
  }
  function h(G, W) {
    const yt = this.stack.pop(), Et = this.tokenStack.pop();
    if (Et)
      Et[0].type !== G.type && (W ? W.call(this, G, Et[0]) : (Et[1] || Lm).call(this, G, Et[0]));
    else throw new Error("Cannot close `" + G.type + "` (" + Na({
      start: G.start,
      end: G.end
    }) + "): it’s not open");
    yt.position.end = fl(G.end);
  }
  function b() {
    return Hc(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(G) {
    if (this.data.expectingFirstListItemValue) {
      const W = this.stack[this.stack.length - 2];
      W.start = Number.parseInt(this.sliceSerialize(G), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.lang = G;
  }
  function E() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.meta = G;
  }
  function R() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function L() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function D() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = G.replace(/(\r?\n|\r)$/g, "");
  }
  function Z(G) {
    const W = this.resume(), yt = this.stack[this.stack.length - 1];
    yt.label = W, yt.identifier = sn(this.sliceSerialize(G)).toLowerCase();
  }
  function H() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.title = G;
  }
  function lt() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.url = G;
  }
  function ot(G) {
    const W = this.stack[this.stack.length - 1];
    if (!W.depth) {
      const yt = this.sliceSerialize(G).length;
      W.depth = yt;
    }
  }
  function B() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function P(G) {
    const W = this.stack[this.stack.length - 1];
    W.depth = this.sliceSerialize(G).codePointAt(0) === 61 ? 1 : 2;
  }
  function J() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function pt(G) {
    const yt = this.stack[this.stack.length - 1].children;
    let Et = yt[yt.length - 1];
    (!Et || Et.type !== "text") && (Et = we(), Et.position = {
      start: fl(G.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, yt.push(Et)), this.stack.push(Et);
  }
  function U(G) {
    const W = this.stack.pop();
    W.value += this.sliceSerialize(G), W.position.end = fl(G.end);
  }
  function nt(G) {
    const W = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const yt = W.children[W.children.length - 1];
      yt.position.end = fl(G.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(W.type) && (pt.call(this, G), U.call(this, G));
  }
  function tt() {
    this.data.atHardBreak = !0;
  }
  function St() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = G;
  }
  function it() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = G;
  }
  function I() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.value = G;
  }
  function _() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const W = this.data.referenceType || "shortcut";
      G.type += "Reference", G.referenceType = W, delete G.url, delete G.title;
    } else
      delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function F() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const W = this.data.referenceType || "shortcut";
      G.type += "Reference", G.referenceType = W, delete G.url, delete G.title;
    } else
      delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function X(G) {
    const W = this.sliceSerialize(G), yt = this.stack[this.stack.length - 2];
    yt.label = tk(W), yt.identifier = sn(W).toLowerCase();
  }
  function xt() {
    const G = this.stack[this.stack.length - 1], W = this.resume(), yt = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, yt.type === "link") {
      const Et = G.children;
      yt.children = Et;
    } else
      yt.alt = W;
  }
  function S() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.url = G;
  }
  function A() {
    const G = this.resume(), W = this.stack[this.stack.length - 1];
    W.title = G;
  }
  function Y() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = "collapsed";
  }
  function $(G) {
    const W = this.resume(), yt = this.stack[this.stack.length - 1];
    yt.label = W, yt.identifier = sn(this.sliceSerialize(G)).toLowerCase(), this.data.referenceType = "full";
  }
  function ft(G) {
    this.data.characterReferenceType = G.type;
  }
  function ct(G) {
    const W = this.sliceSerialize(G), yt = this.data.characterReferenceType;
    let Et;
    yt ? (Et = qg(W, yt === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Et = qc(W);
    const jt = this.stack[this.stack.length - 1];
    jt.value += Et;
  }
  function dt(G) {
    const W = this.stack.pop();
    W.position.end = fl(G.end);
  }
  function Vt(G) {
    U.call(this, G);
    const W = this.stack[this.stack.length - 1];
    W.url = this.sliceSerialize(G);
  }
  function Rt(G) {
    U.call(this, G);
    const W = this.stack[this.stack.length - 1];
    W.url = "mailto:" + this.sliceSerialize(G);
  }
  function de() {
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
  function cn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Va() {
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
  function Qa() {
    return {
      type: "html",
      value: ""
    };
  }
  function Xa() {
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
  function Hl(G) {
    return {
      type: "list",
      ordered: G.type === "listOrdered",
      start: null,
      spread: G._spread,
      children: []
    };
  }
  function Ni(G) {
    return {
      type: "listItem",
      spread: G._spread,
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
  function we() {
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
function $g(n, r) {
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    Array.isArray(u) ? $g(n, u) : ik(n, u);
  }
}
function ik(n, r) {
  let a;
  for (a in r)
    if (Ig.call(r, a))
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
function Lm(n, r) {
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
function ak(n) {
  const r = this;
  r.parser = a;
  function a(u) {
    return nk(u, {
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
function rk(n, r) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(r), !0)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function uk(n, r) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(r, a), [n.applyData(r, a), { type: "text", value: `
` }];
}
function ok(n, r) {
  const a = r.value ? r.value + `
` : "", u = {}, c = r.lang ? r.lang.split(/\s+/) : [];
  c.length > 0 && (u.className = ["language-" + c[0]]);
  let d = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: a }]
  };
  return r.meta && (d.data = { meta: r.meta }), n.patch(r, d), d = n.applyData(r, d), d = { type: "element", tagName: "pre", properties: {}, children: [d] }, n.patch(r, d), d;
}
function sk(n, r) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function ck(n, r) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function fk(n, r) {
  const a = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", u = String(r.identifier).toUpperCase(), c = Ri(u.toLowerCase()), d = n.footnoteOrder.indexOf(u);
  let f, p = n.footnoteCounts.get(u);
  p === void 0 ? (p = 0, n.footnoteOrder.push(u), f = n.footnoteOrder.length) : f = d + 1, p += 1, n.footnoteCounts.set(u, p);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + c,
      id: a + "fnref-" + c + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(f) }]
  };
  n.patch(r, m);
  const h = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [m]
  };
  return n.patch(r, h), n.applyData(r, h);
}
function dk(n, r) {
  const a = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function hk(n, r) {
  if (n.options.allowDangerousHtml) {
    const a = { type: "raw", value: r.value };
    return n.patch(r, a), n.applyData(r, a);
  }
}
function Wg(n, r) {
  const a = r.referenceType;
  let u = "]";
  if (a === "collapsed" ? u += "[]" : a === "full" && (u += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference")
    return [{ type: "text", value: "![" + r.alt + u }];
  const c = n.all(r), d = c[0];
  d && d.type === "text" ? d.value = "[" + d.value : c.unshift({ type: "text", value: "[" });
  const f = c[c.length - 1];
  return f && f.type === "text" ? f.value += u : c.push({ type: "text", value: u }), c;
}
function pk(n, r) {
  const a = String(r.identifier).toUpperCase(), u = n.definitionById.get(a);
  if (!u)
    return Wg(n, r);
  const c = { src: Ri(u.url || ""), alt: r.alt };
  u.title !== null && u.title !== void 0 && (c.title = u.title);
  const d = { type: "element", tagName: "img", properties: c, children: [] };
  return n.patch(r, d), n.applyData(r, d);
}
function mk(n, r) {
  const a = { src: Ri(r.url) };
  r.alt !== null && r.alt !== void 0 && (a.alt = r.alt), r.title !== null && r.title !== void 0 && (a.title = r.title);
  const u = { type: "element", tagName: "img", properties: a, children: [] };
  return n.patch(r, u), n.applyData(r, u);
}
function gk(n, r) {
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
function yk(n, r) {
  const a = String(r.identifier).toUpperCase(), u = n.definitionById.get(a);
  if (!u)
    return Wg(n, r);
  const c = { href: Ri(u.url || "") };
  u.title !== null && u.title !== void 0 && (c.title = u.title);
  const d = {
    type: "element",
    tagName: "a",
    properties: c,
    children: n.all(r)
  };
  return n.patch(r, d), n.applyData(r, d);
}
function bk(n, r) {
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
function vk(n, r, a) {
  const u = n.all(r), c = a ? xk(a) : Pg(r), d = {}, f = [];
  if (typeof r.checked == "boolean") {
    const b = u[0];
    let y;
    b && b.type === "element" && b.tagName === "p" ? y = b : (y = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: r.checked, disabled: !0 },
      children: []
    }), d.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < u.length; ) {
    const b = u[p];
    (c || p !== 0 || b.type !== "element" || b.tagName !== "p") && f.push({ type: "text", value: `
` }), b.type === "element" && b.tagName === "p" && !c ? f.push(...b.children) : f.push(b);
  }
  const m = u[u.length - 1];
  m && (c || m.type !== "element" || m.tagName !== "p") && f.push({ type: "text", value: `
` });
  const h = { type: "element", tagName: "li", properties: d, children: f };
  return n.patch(r, h), n.applyData(r, h);
}
function xk(n) {
  let r = !1;
  if (n.type === "list") {
    r = n.spread || !1;
    const a = n.children;
    let u = -1;
    for (; !r && ++u < a.length; )
      r = Pg(a[u]);
  }
  return r;
}
function Pg(n) {
  const r = n.spread;
  return r ?? n.children.length > 1;
}
function wk(n, r) {
  const a = {}, u = n.all(r);
  let c = -1;
  for (typeof r.start == "number" && r.start !== 1 && (a.start = r.start); ++c < u.length; ) {
    const f = u[c];
    if (f.type === "element" && f.tagName === "li" && f.properties && Array.isArray(f.properties.className) && f.properties.className.includes("task-list-item")) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const d = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: a,
    children: n.wrap(u, !0)
  };
  return n.patch(r, d), n.applyData(r, d);
}
function kk(n, r) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function Sk(n, r) {
  const a = { type: "root", children: n.wrap(n.all(r)) };
  return n.patch(r, a), n.applyData(r, a);
}
function zk(n, r) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function Ek(n, r) {
  const a = n.all(r), u = a.shift(), c = [];
  if (u) {
    const f = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([u], !0)
    };
    n.patch(r.children[0], f), c.push(f);
  }
  if (a.length > 0) {
    const f = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(a, !0)
    }, p = Lc(r.children[1]), m = Og(r.children[r.children.length - 1]);
    p && m && (f.position = { start: p, end: m }), c.push(f);
  }
  const d = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(c, !0)
  };
  return n.patch(r, d), n.applyData(r, d);
}
function Ak(n, r, a) {
  const u = a ? a.children : void 0, d = (u ? u.indexOf(r) : 1) === 0 ? "th" : "td", f = a && a.type === "table" ? a.align : void 0, p = f ? f.length : r.children.length;
  let m = -1;
  const h = [];
  for (; ++m < p; ) {
    const y = r.children[m], w = {}, x = f ? f[m] : void 0;
    x && (w.align = x);
    let E = { type: "element", tagName: d, properties: w, children: [] };
    y && (E.children = n.all(y), n.patch(y, E), E = n.applyData(y, E)), h.push(E);
  }
  const b = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(h, !0)
  };
  return n.patch(r, b), n.applyData(r, b);
}
function Tk(n, r) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
const Um = 9, jm = 32;
function Ck(n) {
  const r = String(n), a = /\r?\n|\r/g;
  let u = a.exec(r), c = 0;
  const d = [];
  for (; u; )
    d.push(
      Bm(r.slice(c, u.index), c > 0, !0),
      u[0]
    ), c = u.index + u[0].length, u = a.exec(r);
  return d.push(Bm(r.slice(c), c > 0, !1)), d.join("");
}
function Bm(n, r, a) {
  let u = 0, c = n.length;
  if (r) {
    let d = n.codePointAt(u);
    for (; d === Um || d === jm; )
      u++, d = n.codePointAt(u);
  }
  if (a) {
    let d = n.codePointAt(c - 1);
    for (; d === Um || d === jm; )
      c--, d = n.codePointAt(c - 1);
  }
  return c > u ? n.slice(u, c) : "";
}
function Dk(n, r) {
  const a = { type: "text", value: Ck(String(r.value)) };
  return n.patch(r, a), n.applyData(r, a);
}
function _k(n, r) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(r, a), n.applyData(r, a);
}
const Mk = {
  blockquote: rk,
  break: uk,
  code: ok,
  delete: sk,
  emphasis: ck,
  footnoteReference: fk,
  heading: dk,
  html: hk,
  imageReference: pk,
  image: mk,
  inlineCode: gk,
  linkReference: yk,
  link: bk,
  listItem: vk,
  list: wk,
  paragraph: kk,
  // @ts-expect-error: root is different, but hard to type.
  root: Sk,
  strong: zk,
  table: Ek,
  tableCell: Tk,
  tableRow: Ak,
  text: Dk,
  thematicBreak: _k,
  toml: du,
  yaml: du,
  definition: du,
  footnoteDefinition: du
};
function du() {
}
const ty = -1, Tu = 0, Ua = 1, xu = 2, Gc = 3, Vc = 4, Qc = 5, Xc = 6, ey = 7, ny = 8, Hm = typeof self == "object" ? self : globalThis, Ok = (n, r) => {
  const a = (c, d) => (n.set(d, c), c), u = (c) => {
    if (n.has(c))
      return n.get(c);
    const [d, f] = r[c];
    switch (d) {
      case Tu:
      case ty:
        return a(f, c);
      case Ua: {
        const p = a([], c);
        for (const m of f)
          p.push(u(m));
        return p;
      }
      case xu: {
        const p = a({}, c);
        for (const [m, h] of f)
          p[u(m)] = u(h);
        return p;
      }
      case Gc:
        return a(new Date(f), c);
      case Vc: {
        const { source: p, flags: m } = f;
        return a(new RegExp(p, m), c);
      }
      case Qc: {
        const p = a(/* @__PURE__ */ new Map(), c);
        for (const [m, h] of f)
          p.set(u(m), u(h));
        return p;
      }
      case Xc: {
        const p = a(/* @__PURE__ */ new Set(), c);
        for (const m of f)
          p.add(u(m));
        return p;
      }
      case ey: {
        const { name: p, message: m } = f;
        return a(new Hm[p](m), c);
      }
      case ny:
        return a(BigInt(f), c);
      case "BigInt":
        return a(Object(BigInt(f)), c);
      case "ArrayBuffer":
        return a(new Uint8Array(f).buffer, f);
      case "DataView": {
        const { buffer: p } = new Uint8Array(f);
        return a(new DataView(p), f);
      }
    }
    return a(new Hm[d](f), c);
  };
  return u;
}, qm = (n) => Ok(/* @__PURE__ */ new Map(), n)(0), Ai = "", { toString: Rk } = {}, { keys: Nk } = Object, Ra = (n) => {
  const r = typeof n;
  if (r !== "object" || !n)
    return [Tu, r];
  const a = Rk.call(n).slice(8, -1);
  switch (a) {
    case "Array":
      return [Ua, Ai];
    case "Object":
      return [xu, Ai];
    case "Date":
      return [Gc, Ai];
    case "RegExp":
      return [Vc, Ai];
    case "Map":
      return [Qc, Ai];
    case "Set":
      return [Xc, Ai];
    case "DataView":
      return [Ua, a];
  }
  return a.includes("Array") ? [Ua, a] : a.includes("Error") ? [ey, a] : [xu, a];
}, hu = ([n, r]) => n === Tu && (r === "function" || r === "symbol"), Lk = (n, r, a, u) => {
  const c = (f, p) => {
    const m = u.push(f) - 1;
    return a.set(p, m), m;
  }, d = (f) => {
    if (a.has(f))
      return a.get(f);
    let [p, m] = Ra(f);
    switch (p) {
      case Tu: {
        let b = f;
        switch (m) {
          case "bigint":
            p = ny, b = f.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + m);
            b = null;
            break;
          case "undefined":
            return c([ty], f);
        }
        return c([p, b], f);
      }
      case Ua: {
        if (m) {
          let w = f;
          return m === "DataView" ? w = new Uint8Array(f.buffer) : m === "ArrayBuffer" && (w = new Uint8Array(f)), c([m, [...w]], f);
        }
        const b = [], y = c([p, b], f);
        for (const w of f)
          b.push(d(w));
        return y;
      }
      case xu: {
        if (m)
          switch (m) {
            case "BigInt":
              return c([m, f.toString()], f);
            case "Boolean":
            case "Number":
            case "String":
              return c([m, f.valueOf()], f);
          }
        if (r && "toJSON" in f)
          return d(f.toJSON());
        const b = [], y = c([p, b], f);
        for (const w of Nk(f))
          (n || !hu(Ra(f[w]))) && b.push([d(w), d(f[w])]);
        return y;
      }
      case Gc:
        return c([p, f.toISOString()], f);
      case Vc: {
        const { source: b, flags: y } = f;
        return c([p, { source: b, flags: y }], f);
      }
      case Qc: {
        const b = [], y = c([p, b], f);
        for (const [w, x] of f)
          (n || !(hu(Ra(w)) || hu(Ra(x)))) && b.push([d(w), d(x)]);
        return y;
      }
      case Xc: {
        const b = [], y = c([p, b], f);
        for (const w of f)
          (n || !hu(Ra(w))) && b.push(d(w));
        return y;
      }
    }
    const { message: h } = f;
    return c([p, { name: m, message: h }], f);
  };
  return d;
}, Ym = (n, { json: r, lossy: a } = {}) => {
  const u = [];
  return Lk(!(r || a), !!r, /* @__PURE__ */ new Map(), u)(n), u;
}, wu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, r) => r && ("json" in r || "lossy" in r) ? qm(Ym(n, r)) : structuredClone(n)
) : (n, r) => qm(Ym(n, r));
function Uk(n, r) {
  const a = [{ type: "text", value: "↩" }];
  return r > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(r) }]
  }), a;
}
function jk(n, r) {
  return "Back to reference " + (n + 1) + (r > 1 ? "-" + r : "");
}
function Bk(n) {
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", a = n.options.footnoteBackContent || Uk, u = n.options.footnoteBackLabel || jk, c = n.options.footnoteLabel || "Footnotes", d = n.options.footnoteLabelTagName || "h2", f = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let m = -1;
  for (; ++m < n.footnoteOrder.length; ) {
    const h = n.footnoteById.get(
      n.footnoteOrder[m]
    );
    if (!h)
      continue;
    const b = n.all(h), y = String(h.identifier).toUpperCase(), w = Ri(y.toLowerCase());
    let x = 0;
    const E = [], R = n.footnoteCounts.get(y);
    for (; R !== void 0 && ++x <= R; ) {
      E.length > 0 && E.push({ type: "text", value: " " });
      let Z = typeof a == "string" ? a : a(m, x);
      typeof Z == "string" && (Z = { type: "text", value: Z }), E.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + r + "fnref-" + w + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(m, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(Z) ? Z : [Z]
      });
    }
    const L = b[b.length - 1];
    if (L && L.type === "element" && L.tagName === "p") {
      const Z = L.children[L.children.length - 1];
      Z && Z.type === "text" ? Z.value += " " : L.children.push({ type: "text", value: " " }), L.children.push(...E);
    } else
      b.push(...E);
    const D = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + w },
      children: n.wrap(b, !0)
    };
    n.patch(h, D), p.push(D);
  }
  if (p.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: d,
          properties: {
            ...wu(f),
            id: "footnote-label"
          },
          children: [{ type: "text", value: c }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: n.wrap(p, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Cu = (
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
      return Gk;
    if (typeof n == "function")
      return Du(n);
    if (typeof n == "object")
      return Array.isArray(n) ? Hk(n) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        qk(
          /** @type {Props} */
          n
        )
      );
    if (typeof n == "string")
      return Yk(n);
    throw new Error("Expected function, string, or object as test");
  })
);
function Hk(n) {
  const r = [];
  let a = -1;
  for (; ++a < n.length; )
    r[a] = Cu(n[a]);
  return Du(u);
  function u(...c) {
    let d = -1;
    for (; ++d < r.length; )
      if (r[d].apply(this, c)) return !0;
    return !1;
  }
}
function qk(n) {
  const r = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Du(a);
  function a(u) {
    const c = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let d;
    for (d in n)
      if (c[d] !== r[d]) return !1;
    return !0;
  }
}
function Yk(n) {
  return Du(r);
  function r(a) {
    return a && a.type === n;
  }
}
function Du(n) {
  return r;
  function r(a, u, c) {
    return !!(Vk(a) && n.call(
      this,
      a,
      typeof u == "number" ? u : void 0,
      c || void 0
    ));
  }
}
function Gk() {
  return !0;
}
function Vk(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const ly = [], Qk = !0, Ac = !1, Xk = "skip";
function iy(n, r, a, u) {
  let c;
  typeof r == "function" && typeof a != "function" ? (u = a, a = r) : c = r;
  const d = Cu(c), f = u ? -1 : 1;
  p(n, void 0, [])();
  function p(m, h, b) {
    const y = (
      /** @type {Record<string, unknown>} */
      m && typeof m == "object" ? m : {}
    );
    if (typeof y.type == "string") {
      const x = (
        // `hast`
        typeof y.tagName == "string" ? y.tagName : (
          // `xast`
          typeof y.name == "string" ? y.name : void 0
        )
      );
      Object.defineProperty(w, "name", {
        value: "node (" + (m.type + (x ? "<" + x + ">" : "")) + ")"
      });
    }
    return w;
    function w() {
      let x = ly, E, R, L;
      if ((!r || d(m, h, b[b.length - 1] || void 0)) && (x = Zk(a(m, b)), x[0] === Ac))
        return x;
      if ("children" in m && m.children) {
        const D = (
          /** @type {UnistParent} */
          m
        );
        if (D.children && x[0] !== Xk)
          for (R = (u ? D.children.length : -1) + f, L = b.concat(D); R > -1 && R < D.children.length; ) {
            const Z = D.children[R];
            if (E = p(Z, R, L)(), E[0] === Ac)
              return E;
            R = typeof E[1] == "number" ? E[1] : R + f;
          }
      }
      return x;
    }
  }
}
function Zk(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [Qk, n] : n == null ? ly : [n];
}
function Zc(n, r, a, u) {
  let c, d, f;
  typeof r == "function" && typeof a != "function" ? (d = void 0, f = r, c = a) : (d = r, f = a, c = u), iy(n, d, p, c);
  function p(m, h) {
    const b = h[h.length - 1], y = b ? b.children.indexOf(m) : void 0;
    return f(m, y, b);
  }
}
const Tc = {}.hasOwnProperty, Fk = {};
function Kk(n, r) {
  const a = r || Fk, u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = { ...Mk, ...a.handlers }, p = {
    all: h,
    applyData: Ik,
    definitionById: u,
    footnoteById: c,
    footnoteCounts: d,
    footnoteOrder: [],
    handlers: f,
    one: m,
    options: a,
    patch: Jk,
    wrap: Wk
  };
  return Zc(n, function(b) {
    if (b.type === "definition" || b.type === "footnoteDefinition") {
      const y = b.type === "definition" ? u : c, w = String(b.identifier).toUpperCase();
      y.has(w) || y.set(w, b);
    }
  }), p;
  function m(b, y) {
    const w = b.type, x = p.handlers[w];
    if (Tc.call(p.handlers, w) && x)
      return x(p, b, y);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in b) {
        const { children: R, ...L } = b, D = wu(L);
        return D.children = p.all(b), D;
      }
      return wu(b);
    }
    return (p.options.unknownHandler || $k)(p, b, y);
  }
  function h(b) {
    const y = [];
    if ("children" in b) {
      const w = b.children;
      let x = -1;
      for (; ++x < w.length; ) {
        const E = p.one(w[x], b);
        if (E) {
          if (x && w[x - 1].type === "break" && (!Array.isArray(E) && E.type === "text" && (E.value = Gm(E.value)), !Array.isArray(E) && E.type === "element")) {
            const R = E.children[0];
            R && R.type === "text" && (R.value = Gm(R.value));
          }
          Array.isArray(E) ? y.push(...E) : y.push(E);
        }
      }
    }
    return y;
  }
}
function Jk(n, r) {
  n.position && (r.position = j1(n));
}
function Ik(n, r) {
  let a = r;
  if (n && n.data) {
    const u = n.data.hName, c = n.data.hChildren, d = n.data.hProperties;
    if (typeof u == "string")
      if (a.type === "element")
        a.tagName = u;
      else {
        const f = "children" in a ? a.children : [a];
        a = { type: "element", tagName: u, properties: {}, children: f };
      }
    a.type === "element" && d && Object.assign(a.properties, wu(d)), "children" in a && a.children && c !== null && c !== void 0 && (a.children = c);
  }
  return a;
}
function $k(n, r) {
  const a = r.data || {}, u = "value" in r && !(Tc.call(a, "hProperties") || Tc.call(a, "hChildren")) ? { type: "text", value: r.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function Wk(n, r) {
  const a = [];
  let u = -1;
  for (r && a.push({ type: "text", value: `
` }); ++u < n.length; )
    u && a.push({ type: "text", value: `
` }), a.push(n[u]);
  return r && n.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Gm(n) {
  let r = 0, a = n.charCodeAt(r);
  for (; a === 9 || a === 32; )
    r++, a = n.charCodeAt(r);
  return n.slice(r);
}
function Vm(n, r) {
  const a = Kk(n, r), u = a.one(n, void 0), c = Bk(a), d = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return c && d.children.push({ type: "text", value: `
` }, c), d;
}
function Pk(n, r) {
  return n && "run" in n ? async function(a, u) {
    const c = (
      /** @type {HastRoot} */
      Vm(a, { file: u, ...r })
    );
    await n.run(c, u);
  } : function(a, u) {
    return (
      /** @type {HastRoot} */
      Vm(a, { file: u, ...n || r })
    );
  };
}
function Qm(n) {
  if (n)
    throw n;
}
var rc, Xm;
function tS() {
  if (Xm) return rc;
  Xm = 1;
  var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, a = Object.defineProperty, u = Object.getOwnPropertyDescriptor, c = function(h) {
    return typeof Array.isArray == "function" ? Array.isArray(h) : r.call(h) === "[object Array]";
  }, d = function(h) {
    if (!h || r.call(h) !== "[object Object]")
      return !1;
    var b = n.call(h, "constructor"), y = h.constructor && h.constructor.prototype && n.call(h.constructor.prototype, "isPrototypeOf");
    if (h.constructor && !b && !y)
      return !1;
    var w;
    for (w in h)
      ;
    return typeof w > "u" || n.call(h, w);
  }, f = function(h, b) {
    a && b.name === "__proto__" ? a(h, b.name, {
      enumerable: !0,
      configurable: !0,
      value: b.newValue,
      writable: !0
    }) : h[b.name] = b.newValue;
  }, p = function(h, b) {
    if (b === "__proto__")
      if (n.call(h, b)) {
        if (u)
          return u(h, b).value;
      } else return;
    return h[b];
  };
  return rc = function m() {
    var h, b, y, w, x, E, R = arguments[0], L = 1, D = arguments.length, Z = !1;
    for (typeof R == "boolean" && (Z = R, R = arguments[1] || {}, L = 2), (R == null || typeof R != "object" && typeof R != "function") && (R = {}); L < D; ++L)
      if (h = arguments[L], h != null)
        for (b in h)
          y = p(R, b), w = p(h, b), R !== w && (Z && w && (d(w) || (x = c(w))) ? (x ? (x = !1, E = y && c(y) ? y : []) : E = y && d(y) ? y : {}, f(R, { name: b, newValue: m(Z, E, w) })) : typeof w < "u" && f(R, { name: b, newValue: w }));
    return R;
  }, rc;
}
var eS = tS();
const uc = /* @__PURE__ */ Su(eS);
function Cc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function nS() {
  const n = [], r = { run: a, use: u };
  return r;
  function a(...c) {
    let d = -1;
    const f = c.pop();
    if (typeof f != "function")
      throw new TypeError("Expected function as last argument, not " + f);
    p(null, ...c);
    function p(m, ...h) {
      const b = n[++d];
      let y = -1;
      if (m) {
        f(m);
        return;
      }
      for (; ++y < c.length; )
        (h[y] === null || h[y] === void 0) && (h[y] = c[y]);
      c = h, b ? lS(b, p)(...h) : f(null, ...h);
    }
  }
  function u(c) {
    if (typeof c != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + c
      );
    return n.push(c), r;
  }
}
function lS(n, r) {
  let a;
  return u;
  function u(...f) {
    const p = n.length > f.length;
    let m;
    p && f.push(c);
    try {
      m = n.apply(this, f);
    } catch (h) {
      const b = (
        /** @type {Error} */
        h
      );
      if (p && a)
        throw b;
      return c(b);
    }
    p || (m && m.then && typeof m.then == "function" ? m.then(d, c) : m instanceof Error ? c(m) : d(m));
  }
  function c(f, ...p) {
    a || (a = !0, r(f, ...p));
  }
  function d(f) {
    c(null, f);
  }
}
const mn = { basename: iS, dirname: aS, extname: rS, join: uS, sep: "/" };
function iS(n, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Ga(n);
  let a = 0, u = -1, c = n.length, d;
  if (r === void 0 || r.length === 0 || r.length > n.length) {
    for (; c--; )
      if (n.codePointAt(c) === 47) {
        if (d) {
          a = c + 1;
          break;
        }
      } else u < 0 && (d = !0, u = c + 1);
    return u < 0 ? "" : n.slice(a, u);
  }
  if (r === n)
    return "";
  let f = -1, p = r.length - 1;
  for (; c--; )
    if (n.codePointAt(c) === 47) {
      if (d) {
        a = c + 1;
        break;
      }
    } else
      f < 0 && (d = !0, f = c + 1), p > -1 && (n.codePointAt(c) === r.codePointAt(p--) ? p < 0 && (u = c) : (p = -1, u = f));
  return a === u ? u = f : u < 0 && (u = n.length), n.slice(a, u);
}
function aS(n) {
  if (Ga(n), n.length === 0)
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
function rS(n) {
  Ga(n);
  let r = n.length, a = -1, u = 0, c = -1, d = 0, f;
  for (; r--; ) {
    const p = n.codePointAt(r);
    if (p === 47) {
      if (f) {
        u = r + 1;
        break;
      }
      continue;
    }
    a < 0 && (f = !0, a = r + 1), p === 46 ? c < 0 ? c = r : d !== 1 && (d = 1) : c > -1 && (d = -1);
  }
  return c < 0 || a < 0 || // We saw a non-dot character immediately before the dot.
  d === 0 || // The (right-most) trimmed path component is exactly `..`.
  d === 1 && c === a - 1 && c === u + 1 ? "" : n.slice(c, a);
}
function uS(...n) {
  let r = -1, a;
  for (; ++r < n.length; )
    Ga(n[r]), n[r] && (a = a === void 0 ? n[r] : a + "/" + n[r]);
  return a === void 0 ? "." : oS(a);
}
function oS(n) {
  Ga(n);
  const r = n.codePointAt(0) === 47;
  let a = sS(n, !r);
  return a.length === 0 && !r && (a = "."), a.length > 0 && n.codePointAt(n.length - 1) === 47 && (a += "/"), r ? "/" + a : a;
}
function sS(n, r) {
  let a = "", u = 0, c = -1, d = 0, f = -1, p, m;
  for (; ++f <= n.length; ) {
    if (f < n.length)
      p = n.codePointAt(f);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(c === f - 1 || d === 1)) if (c !== f - 1 && d === 2) {
        if (a.length < 2 || u !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
          if (a.length > 2) {
            if (m = a.lastIndexOf("/"), m !== a.length - 1) {
              m < 0 ? (a = "", u = 0) : (a = a.slice(0, m), u = a.length - 1 - a.lastIndexOf("/")), c = f, d = 0;
              continue;
            }
          } else if (a.length > 0) {
            a = "", u = 0, c = f, d = 0;
            continue;
          }
        }
        r && (a = a.length > 0 ? a + "/.." : "..", u = 2);
      } else
        a.length > 0 ? a += "/" + n.slice(c + 1, f) : a = n.slice(c + 1, f), u = f - c - 1;
      c = f, d = 0;
    } else p === 46 && d > -1 ? d++ : d = -1;
  }
  return a;
}
function Ga(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const cS = { cwd: fS };
function fS() {
  return "/";
}
function Dc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function dS(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!Dc(n)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw r.code = "ERR_INVALID_ARG_TYPE", r;
  }
  if (n.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw r.code = "ERR_INVALID_URL_SCHEME", r;
  }
  return hS(n);
}
function hS(n) {
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
        const c = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw c.code = "ERR_INVALID_FILE_URL_PATH", c;
      }
    }
  return decodeURIComponent(r);
}
const oc = (
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
class ay {
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
    r ? Dc(r) ? a = { path: r } : typeof r == "string" || pS(r) ? a = { value: r } : a = r : a = {}, this.cwd = "cwd" in a ? "" : cS.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < oc.length; ) {
      const d = oc[u];
      d in a && a[d] !== void 0 && a[d] !== null && (this[d] = d === "history" ? [...a[d]] : a[d]);
    }
    let c;
    for (c in a)
      oc.includes(c) || (this[c] = a[c]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? mn.basename(this.path) : void 0;
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
    cc(r, "basename"), sc(r, "basename"), this.path = mn.join(this.dirname || "", r);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? mn.dirname(this.path) : void 0;
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
    Zm(this.basename, "dirname"), this.path = mn.join(r || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? mn.extname(this.path) : void 0;
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
    if (sc(r, "extname"), Zm(this.dirname, "extname"), r) {
      if (r.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = mn.join(this.dirname, this.stem + (r || ""));
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
    Dc(r) && (r = dS(r)), cc(r, "path"), this.path !== r && this.history.push(r);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? mn.basename(this.path, this.extname) : void 0;
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
    cc(r, "stem"), sc(r, "stem"), this.path = mn.join(this.dirname || "", r + (this.extname || ""));
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
    const c = this.message(r, a, u);
    throw c.fatal = !0, c;
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
    const c = this.message(r, a, u);
    return c.fatal = void 0, c;
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
    const c = new xe(
      // @ts-expect-error: the overloads are fine.
      r,
      a,
      u
    );
    return this.path && (c.name = this.path + ":" + c.name, c.file = this.path), c.fatal = !1, this.messages.push(c), c;
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
function sc(n, r) {
  if (n && n.includes(mn.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + mn.sep + "`"
    );
}
function cc(n, r) {
  if (!n)
    throw new Error("`" + r + "` cannot be empty");
}
function Zm(n, r) {
  if (!n)
    throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function pS(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const mS = (
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
    ), c = u[n], d = function() {
      return c.apply(d, arguments);
    };
    return Object.setPrototypeOf(d, u), d;
  })
), gS = {}.hasOwnProperty;
class Fc extends mS {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = nS();
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
      new Fc()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const u = this.attachers[a];
      r.use(...u);
    }
    return r.data(uc(!0, {}, this.namespace)), r;
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
    return typeof r == "string" ? arguments.length === 2 ? (hc("data", this.frozen), this.namespace[r] = a, this) : gS.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (hc("data", this.frozen), this.namespace = r, this) : this.namespace;
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
      const c = a.call(r, ...u);
      typeof c == "function" && this.transformers.use(c);
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
    const a = pu(r), u = this.parser || this.Parser;
    return fc("parse", u), u(String(a), a);
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
    return this.freeze(), fc("process", this.parser || this.Parser), dc("process", this.compiler || this.Compiler), a ? c(void 0, a) : new Promise(c);
    function c(d, f) {
      const p = pu(r), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(p)
      );
      u.run(m, p, function(b, y, w) {
        if (b || !y || !w)
          return h(b);
        const x = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          y
        ), E = u.stringify(x, w);
        vS(E) ? w.value = E : w.result = E, h(
          b,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function h(b, y) {
        b || !y ? f(b) : d ? d(y) : a(void 0, y);
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
    return this.freeze(), fc("processSync", this.parser || this.Parser), dc("processSync", this.compiler || this.Compiler), this.process(r, c), Km("processSync", "process", a), u;
    function c(d, f) {
      a = !0, Qm(d), u = f;
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
    Fm(r), this.freeze();
    const c = this.transformers;
    return !u && typeof a == "function" && (u = a, a = void 0), u ? d(void 0, u) : new Promise(d);
    function d(f, p) {
      const m = pu(a);
      c.run(r, m, h);
      function h(b, y, w) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || r
        );
        b ? p(b) : f ? f(x) : u(void 0, x, w);
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
    let u = !1, c;
    return this.run(r, a, d), Km("runSync", "run", u), c;
    function d(f, p) {
      Qm(f), c = p, u = !0;
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
    const u = pu(a), c = this.compiler || this.Compiler;
    return dc("stringify", c), Fm(r), c(r, u);
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
    const u = this.attachers, c = this.namespace;
    if (hc("use", this.frozen), r != null) if (typeof r == "function")
      m(r, a);
    else if (typeof r == "object")
      Array.isArray(r) ? p(r) : f(r);
    else
      throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function d(h) {
      if (typeof h == "function")
        m(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [b, ...y] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          m(b, y);
        } else
          f(h);
      else
        throw new TypeError("Expected usable value, not `" + h + "`");
    }
    function f(h) {
      if (!("plugins" in h) && !("settings" in h))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      p(h.plugins), h.settings && (c.settings = uc(!0, c.settings, h.settings));
    }
    function p(h) {
      let b = -1;
      if (h != null) if (Array.isArray(h))
        for (; ++b < h.length; ) {
          const y = h[b];
          d(y);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function m(h, b) {
      let y = -1, w = -1;
      for (; ++y < u.length; )
        if (u[y][0] === h) {
          w = y;
          break;
        }
      if (w === -1)
        u.push([h, ...b]);
      else if (b.length > 0) {
        let [x, ...E] = b;
        const R = u[w][1];
        Cc(R) && Cc(x) && (x = uc(!0, R, x)), u[w] = [h, x, ...E];
      }
    }
  }
}
const yS = new Fc().freeze();
function fc(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function dc(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function hc(n, r) {
  if (r)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Fm(n) {
  if (!Cc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function Km(n, r, a) {
  if (!a)
    throw new Error(
      "`" + n + "` finished async. Use `" + r + "` instead"
    );
}
function pu(n) {
  return bS(n) ? n : new ay(n);
}
function bS(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function vS(n) {
  return typeof n == "string" || xS(n);
}
function xS(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const wS = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Jm = [], Im = { allowDangerousHtml: !0 }, kS = /^(https?|ircs?|mailto|xmpp)$/i, SS = [
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
function Kc(n) {
  const r = zS(n), a = ES(n);
  return AS(r.runSync(r.parse(a), a), n);
}
function zS(n) {
  const r = n.rehypePlugins || Jm, a = n.remarkPlugins || Jm, u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Im } : Im;
  return yS().use(ak).use(a).use(Pk, u).use(r);
}
function ES(n) {
  const r = n.children || "", a = new ay();
  return typeof r == "string" && (a.value = r), a;
}
function AS(n, r) {
  const a = r.allowedElements, u = r.allowElement, c = r.components, d = r.disallowedElements, f = r.skipHtml, p = r.unwrapDisallowed, m = r.urlTransform || TS;
  for (const b of SS)
    Object.hasOwn(r, b.from) && ("" + b.from + (b.to ? "use `" + b.to + "` instead" : "remove it") + wS + b.id, void 0);
  return Zc(n, h), G1(n, {
    Fragment: et.Fragment,
    components: c,
    ignoreInvalidStyle: !0,
    jsx: et.jsx,
    jsxs: et.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function h(b, y, w) {
    if (b.type === "raw" && w && typeof y == "number")
      return f ? w.children.splice(y, 1) : w.children[y] = { type: "text", value: b.value }, y;
    if (b.type === "element") {
      let x;
      for (x in lc)
        if (Object.hasOwn(lc, x) && Object.hasOwn(b.properties, x)) {
          const E = b.properties[x], R = lc[x];
          (R === null || R.includes(b.tagName)) && (b.properties[x] = m(String(E || ""), x, b));
        }
    }
    if (b.type === "element") {
      let x = a ? !a.includes(b.tagName) : d ? d.includes(b.tagName) : !1;
      if (!x && u && typeof y == "number" && (x = !u(b, y, w)), x && w && typeof y == "number")
        return p && b.children ? w.children.splice(y, 1, ...b.children) : w.children.splice(y, 1), y;
    }
  }
}
function TS(n) {
  const r = n.indexOf(":"), a = n.indexOf("?"), u = n.indexOf("#"), c = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    c !== -1 && r > c || a !== -1 && r > a || u !== -1 && r > u || // It is a protocol, it should be allowed.
    kS.test(n.slice(0, r)) ? n : ""
  );
}
function $m(n, r) {
  const a = String(n);
  if (typeof r != "string")
    throw new TypeError("Expected character");
  let u = 0, c = a.indexOf(r);
  for (; c !== -1; )
    u++, c = a.indexOf(r, c + r.length);
  return u;
}
function CS(n) {
  if (typeof n != "string")
    throw new TypeError("Expected a string");
  return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function DS(n, r, a) {
  const c = Cu((a || {}).ignore || []), d = _S(r);
  let f = -1;
  for (; ++f < d.length; )
    iy(n, "text", p);
  function p(h, b) {
    let y = -1, w;
    for (; ++y < b.length; ) {
      const x = b[y], E = w ? w.children : void 0;
      if (c(
        x,
        E ? E.indexOf(x) : void 0,
        w
      ))
        return;
      w = x;
    }
    if (w)
      return m(h, b);
  }
  function m(h, b) {
    const y = b[b.length - 1], w = d[f][0], x = d[f][1];
    let E = 0;
    const L = y.children.indexOf(h);
    let D = !1, Z = [];
    w.lastIndex = 0;
    let H = w.exec(h.value);
    for (; H; ) {
      const lt = H.index, ot = {
        index: H.index,
        input: H.input,
        stack: [...b, h]
      };
      let B = x(...H, ot);
      if (typeof B == "string" && (B = B.length > 0 ? { type: "text", value: B } : void 0), B === !1 ? w.lastIndex = lt + 1 : (E !== lt && Z.push({
        type: "text",
        value: h.value.slice(E, lt)
      }), Array.isArray(B) ? Z.push(...B) : B && Z.push(B), E = lt + H[0].length, D = !0), !w.global)
        break;
      H = w.exec(h.value);
    }
    return D ? (E < h.value.length && Z.push({ type: "text", value: h.value.slice(E) }), y.children.splice(L, 1, ...Z)) : Z = [h], L + Z.length;
  }
}
function _S(n) {
  const r = [];
  if (!Array.isArray(n))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const a = !n[0] || Array.isArray(n[0]) ? n : [n];
  let u = -1;
  for (; ++u < a.length; ) {
    const c = a[u];
    r.push([MS(c[0]), OS(c[1])]);
  }
  return r;
}
function MS(n) {
  return typeof n == "string" ? new RegExp(CS(n), "g") : n;
}
function OS(n) {
  return typeof n == "function" ? n : function() {
    return n;
  };
}
const pc = "phrasing", mc = ["autolink", "link", "image", "label"];
function RS() {
  return {
    transforms: [qS],
    enter: {
      literalAutolink: LS,
      literalAutolinkEmail: gc,
      literalAutolinkHttp: gc,
      literalAutolinkWww: gc
    },
    exit: {
      literalAutolink: HS,
      literalAutolinkEmail: BS,
      literalAutolinkHttp: US,
      literalAutolinkWww: jS
    }
  };
}
function NS() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: pc,
        notInConstruct: mc
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: pc,
        notInConstruct: mc
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: pc,
        notInConstruct: mc
      }
    ]
  };
}
function LS(n) {
  this.enter({ type: "link", title: null, url: "", children: [] }, n);
}
function gc(n) {
  this.config.enter.autolinkProtocol.call(this, n);
}
function US(n) {
  this.config.exit.autolinkProtocol.call(this, n);
}
function jS(n) {
  this.config.exit.data.call(this, n);
  const r = this.stack[this.stack.length - 1];
  r.type, r.url = "http://" + this.sliceSerialize(n);
}
function BS(n) {
  this.config.exit.autolinkEmail.call(this, n);
}
function HS(n) {
  this.exit(n);
}
function qS(n) {
  DS(
    n,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, YS],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), GS]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function YS(n, r, a, u, c) {
  let d = "";
  if (!ry(c) || (/^w/i.test(r) && (a = r + a, r = "", d = "http://"), !VS(a)))
    return !1;
  const f = QS(a + u);
  if (!f[0]) return !1;
  const p = {
    type: "link",
    title: null,
    url: d + r + f[0],
    children: [{ type: "text", value: r + f[0] }]
  };
  return f[1] ? [p, { type: "text", value: f[1] }] : p;
}
function GS(n, r, a, u) {
  return (
    // Not an expected previous character.
    !ry(u, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + r + "@" + a,
      children: [{ type: "text", value: r + "@" + a }]
    }
  );
}
function VS(n) {
  const r = n.split(".");
  return !(r.length < 2 || r[r.length - 1] && (/_/.test(r[r.length - 1]) || !/[a-zA-Z\d]/.test(r[r.length - 1])) || r[r.length - 2] && (/_/.test(r[r.length - 2]) || !/[a-zA-Z\d]/.test(r[r.length - 2])));
}
function QS(n) {
  const r = /[!"&'),.:;<>?\]}]+$/.exec(n);
  if (!r)
    return [n, void 0];
  n = n.slice(0, r.index);
  let a = r[0], u = a.indexOf(")");
  const c = $m(n, "(");
  let d = $m(n, ")");
  for (; u !== -1 && c > d; )
    n += a.slice(0, u + 1), a = a.slice(u + 1), u = a.indexOf(")"), d++;
  return [n, a];
}
function ry(n, r) {
  const a = n.input.charCodeAt(n.index - 1);
  return (n.index === 0 || Nl(a) || Eu(a)) && // If it’s an email, the previous character should not be a slash.
  (!r || a !== 47);
}
uy.peek = PS;
function XS() {
  this.buffer();
}
function ZS(n) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, n);
}
function FS() {
  this.buffer();
}
function KS(n) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    n
  );
}
function JS(n) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = sn(
    this.sliceSerialize(n)
  ).toLowerCase(), a.label = r;
}
function IS(n) {
  this.exit(n);
}
function $S(n) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = sn(
    this.sliceSerialize(n)
  ).toLowerCase(), a.label = r;
}
function WS(n) {
  this.exit(n);
}
function PS() {
  return "[";
}
function uy(n, r, a, u) {
  const c = a.createTracker(u);
  let d = c.move("[^");
  const f = a.enter("footnoteReference"), p = a.enter("reference");
  return d += c.move(
    a.safe(a.associationId(n), { after: "]", before: d })
  ), p(), f(), d += c.move("]"), d;
}
function t2() {
  return {
    enter: {
      gfmFootnoteCallString: XS,
      gfmFootnoteCall: ZS,
      gfmFootnoteDefinitionLabelString: FS,
      gfmFootnoteDefinition: KS
    },
    exit: {
      gfmFootnoteCallString: JS,
      gfmFootnoteCall: IS,
      gfmFootnoteDefinitionLabelString: $S,
      gfmFootnoteDefinition: WS
    }
  };
}
function e2(n) {
  let r = !1;
  return n && n.firstLineBlank && (r = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: uy },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(u, c, d, f) {
    const p = d.createTracker(f);
    let m = p.move("[^");
    const h = d.enter("footnoteDefinition"), b = d.enter("label");
    return m += p.move(
      d.safe(d.associationId(u), { before: m, after: "]" })
    ), b(), m += p.move("]:"), u.children && u.children.length > 0 && (p.shift(4), m += p.move(
      (r ? `
` : " ") + d.indentLines(
        d.containerFlow(u, p.current()),
        r ? oy : n2
      )
    )), h(), m;
  }
}
function n2(n, r, a) {
  return r === 0 ? n : oy(n, r, a);
}
function oy(n, r, a) {
  return (a ? "" : "    ") + n;
}
const l2 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
sy.peek = o2;
function i2() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: r2 },
    exit: { strikethrough: u2 }
  };
}
function a2() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: l2
      }
    ],
    handlers: { delete: sy }
  };
}
function r2(n) {
  this.enter({ type: "delete", children: [] }, n);
}
function u2(n) {
  this.exit(n);
}
function sy(n, r, a, u) {
  const c = a.createTracker(u), d = a.enter("strikethrough");
  let f = c.move("~~");
  return f += a.containerPhrasing(n, {
    ...c.current(),
    before: f,
    after: "~"
  }), f += c.move("~~"), d(), f;
}
function o2() {
  return "~";
}
function s2(n) {
  return n.length;
}
function c2(n, r) {
  const a = r || {}, u = (a.align || []).concat(), c = a.stringLength || s2, d = [], f = [], p = [], m = [];
  let h = 0, b = -1;
  for (; ++b < n.length; ) {
    const R = [], L = [];
    let D = -1;
    for (n[b].length > h && (h = n[b].length); ++D < n[b].length; ) {
      const Z = f2(n[b][D]);
      if (a.alignDelimiters !== !1) {
        const H = c(Z);
        L[D] = H, (m[D] === void 0 || H > m[D]) && (m[D] = H);
      }
      R.push(Z);
    }
    f[b] = R, p[b] = L;
  }
  let y = -1;
  if (typeof u == "object" && "length" in u)
    for (; ++y < h; )
      d[y] = Wm(u[y]);
  else {
    const R = Wm(u);
    for (; ++y < h; )
      d[y] = R;
  }
  y = -1;
  const w = [], x = [];
  for (; ++y < h; ) {
    const R = d[y];
    let L = "", D = "";
    R === 99 ? (L = ":", D = ":") : R === 108 ? L = ":" : R === 114 && (D = ":");
    let Z = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[y] - L.length - D.length
    );
    const H = L + "-".repeat(Z) + D;
    a.alignDelimiters !== !1 && (Z = L.length + Z + D.length, Z > m[y] && (m[y] = Z), x[y] = Z), w[y] = H;
  }
  f.splice(1, 0, w), p.splice(1, 0, x), b = -1;
  const E = [];
  for (; ++b < f.length; ) {
    const R = f[b], L = p[b];
    y = -1;
    const D = [];
    for (; ++y < h; ) {
      const Z = R[y] || "";
      let H = "", lt = "";
      if (a.alignDelimiters !== !1) {
        const ot = m[y] - (L[y] || 0), B = d[y];
        B === 114 ? H = " ".repeat(ot) : B === 99 ? ot % 2 ? (H = " ".repeat(ot / 2 + 0.5), lt = " ".repeat(ot / 2 - 0.5)) : (H = " ".repeat(ot / 2), lt = H) : lt = " ".repeat(ot);
      }
      a.delimiterStart !== !1 && !y && D.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && Z === "") && (a.delimiterStart !== !1 || y) && D.push(" "), a.alignDelimiters !== !1 && D.push(H), D.push(Z), a.alignDelimiters !== !1 && D.push(lt), a.padding !== !1 && D.push(" "), (a.delimiterEnd !== !1 || y !== h - 1) && D.push("|");
    }
    E.push(
      a.delimiterEnd === !1 ? D.join("").replace(/ +$/, "") : D.join("")
    );
  }
  return E.join(`
`);
}
function f2(n) {
  return n == null ? "" : String(n);
}
function Wm(n) {
  const r = typeof n == "string" ? n.codePointAt(0) : 0;
  return r === 67 || r === 99 ? 99 : r === 76 || r === 108 ? 108 : r === 82 || r === 114 ? 114 : 0;
}
function d2(n, r, a, u) {
  const c = a.enter("blockquote"), d = a.createTracker(u);
  d.move("> "), d.shift(2);
  const f = a.indentLines(
    a.containerFlow(n, d.current()),
    h2
  );
  return c(), f;
}
function h2(n, r, a) {
  return ">" + (a ? "" : " ") + n;
}
function p2(n, r) {
  return Pm(n, r.inConstruct, !0) && !Pm(n, r.notInConstruct, !1);
}
function Pm(n, r, a) {
  if (typeof r == "string" && (r = [r]), !r || r.length === 0)
    return a;
  let u = -1;
  for (; ++u < r.length; )
    if (n.includes(r[u]))
      return !0;
  return !1;
}
function tg(n, r, a, u) {
  let c = -1;
  for (; ++c < a.unsafe.length; )
    if (a.unsafe[c].character === `
` && p2(a.stack, a.unsafe[c]))
      return /[ \t]/.test(u.before) ? "" : " ";
  return `\\
`;
}
function m2(n, r) {
  const a = String(n);
  let u = a.indexOf(r), c = u, d = 0, f = 0;
  if (typeof r != "string")
    throw new TypeError("Expected substring");
  for (; u !== -1; )
    u === c ? ++d > f && (f = d) : d = 1, c = u + r.length, u = a.indexOf(r, c);
  return f;
}
function g2(n, r) {
  return !!(r.options.fences === !1 && n.value && // If there’s no info…
  !n.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(n.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value));
}
function y2(n) {
  const r = n.options.fence || "`";
  if (r !== "`" && r !== "~")
    throw new Error(
      "Cannot serialize code with `" + r + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return r;
}
function b2(n, r, a, u) {
  const c = y2(a), d = n.value || "", f = c === "`" ? "GraveAccent" : "Tilde";
  if (g2(n, a)) {
    const y = a.enter("codeIndented"), w = a.indentLines(d, v2);
    return y(), w;
  }
  const p = a.createTracker(u), m = c.repeat(Math.max(m2(d, c) + 1, 3)), h = a.enter("codeFenced");
  let b = p.move(m);
  if (n.lang) {
    const y = a.enter(`codeFencedLang${f}`);
    b += p.move(
      a.safe(n.lang, {
        before: b,
        after: " ",
        encode: ["`"],
        ...p.current()
      })
    ), y();
  }
  if (n.lang && n.meta) {
    const y = a.enter(`codeFencedMeta${f}`);
    b += p.move(" "), b += p.move(
      a.safe(n.meta, {
        before: b,
        after: `
`,
        encode: ["`"],
        ...p.current()
      })
    ), y();
  }
  return b += p.move(`
`), d && (b += p.move(d + `
`)), b += p.move(m), h(), b;
}
function v2(n, r, a) {
  return (a ? "" : "    ") + n;
}
function Jc(n) {
  const r = n.options.quote || '"';
  if (r !== '"' && r !== "'")
    throw new Error(
      "Cannot serialize title with `" + r + "` for `options.quote`, expected `\"`, or `'`"
    );
  return r;
}
function x2(n, r, a, u) {
  const c = Jc(a), d = c === '"' ? "Quote" : "Apostrophe", f = a.enter("definition");
  let p = a.enter("label");
  const m = a.createTracker(u);
  let h = m.move("[");
  return h += m.move(
    a.safe(a.associationId(n), {
      before: h,
      after: "]",
      ...m.current()
    })
  ), h += m.move("]: "), p(), // If there’s no url, or…
  !n.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (p = a.enter("destinationLiteral"), h += m.move("<"), h += m.move(
    a.safe(n.url, { before: h, after: ">", ...m.current() })
  ), h += m.move(">")) : (p = a.enter("destinationRaw"), h += m.move(
    a.safe(n.url, {
      before: h,
      after: n.title ? " " : `
`,
      ...m.current()
    })
  )), p(), n.title && (p = a.enter(`title${d}`), h += m.move(" " + c), h += m.move(
    a.safe(n.title, {
      before: h,
      after: c,
      ...m.current()
    })
  ), h += m.move(c), p()), f(), h;
}
function w2(n) {
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
function ku(n, r, a) {
  const u = Di(n), c = Di(r);
  return u === void 0 ? c === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    a === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : c === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : u === 1 ? c === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : c === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : c === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : c === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
cy.peek = k2;
function cy(n, r, a, u) {
  const c = w2(a), d = a.enter("emphasis"), f = a.createTracker(u), p = f.move(c);
  let m = f.move(
    a.containerPhrasing(n, {
      after: c,
      before: p,
      ...f.current()
    })
  );
  const h = m.charCodeAt(0), b = ku(
    u.before.charCodeAt(u.before.length - 1),
    h,
    c
  );
  b.inside && (m = Ha(h) + m.slice(1));
  const y = m.charCodeAt(m.length - 1), w = ku(u.after.charCodeAt(0), y, c);
  w.inside && (m = m.slice(0, -1) + Ha(y));
  const x = f.move(c);
  return d(), a.attentionEncodeSurroundingInfo = {
    after: w.outside,
    before: b.outside
  }, p + m + x;
}
function k2(n, r, a) {
  return a.options.emphasis || "*";
}
function S2(n, r) {
  let a = !1;
  return Zc(n, function(u) {
    if ("value" in u && /\r?\n|\r/.test(u.value) || u.type === "break")
      return a = !0, Ac;
  }), !!((!n.depth || n.depth < 3) && Hc(n) && (r.options.setext || a));
}
function z2(n, r, a, u) {
  const c = Math.max(Math.min(6, n.depth || 1), 1), d = a.createTracker(u);
  if (S2(n, a)) {
    const b = a.enter("headingSetext"), y = a.enter("phrasing"), w = a.containerPhrasing(n, {
      ...d.current(),
      before: `
`,
      after: `
`
    });
    return y(), b(), w + `
` + (c === 1 ? "=" : "-").repeat(
      // The whole size…
      w.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(w.lastIndexOf("\r"), w.lastIndexOf(`
`)) + 1)
    );
  }
  const f = "#".repeat(c), p = a.enter("headingAtx"), m = a.enter("phrasing");
  d.move(f + " ");
  let h = a.containerPhrasing(n, {
    before: "# ",
    after: `
`,
    ...d.current()
  });
  return /^[\t ]/.test(h) && (h = Ha(h.charCodeAt(0)) + h.slice(1)), h = h ? f + " " + h : f, a.options.closeAtx && (h += " " + f), m(), p(), h;
}
fy.peek = E2;
function fy(n) {
  return n.value || "";
}
function E2() {
  return "<";
}
dy.peek = A2;
function dy(n, r, a, u) {
  const c = Jc(a), d = c === '"' ? "Quote" : "Apostrophe", f = a.enter("image");
  let p = a.enter("label");
  const m = a.createTracker(u);
  let h = m.move("![");
  return h += m.move(
    a.safe(n.alt, { before: h, after: "]", ...m.current() })
  ), h += m.move("]("), p(), // If there’s no url but there is a title…
  !n.url && n.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (p = a.enter("destinationLiteral"), h += m.move("<"), h += m.move(
    a.safe(n.url, { before: h, after: ">", ...m.current() })
  ), h += m.move(">")) : (p = a.enter("destinationRaw"), h += m.move(
    a.safe(n.url, {
      before: h,
      after: n.title ? " " : ")",
      ...m.current()
    })
  )), p(), n.title && (p = a.enter(`title${d}`), h += m.move(" " + c), h += m.move(
    a.safe(n.title, {
      before: h,
      after: c,
      ...m.current()
    })
  ), h += m.move(c), p()), h += m.move(")"), f(), h;
}
function A2() {
  return "!";
}
hy.peek = T2;
function hy(n, r, a, u) {
  const c = n.referenceType, d = a.enter("imageReference");
  let f = a.enter("label");
  const p = a.createTracker(u);
  let m = p.move("![");
  const h = a.safe(n.alt, {
    before: m,
    after: "]",
    ...p.current()
  });
  m += p.move(h + "]["), f();
  const b = a.stack;
  a.stack = [], f = a.enter("reference");
  const y = a.safe(a.associationId(n), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = b, d(), c === "full" || !h || h !== y ? m += p.move(y + "]") : c === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function T2() {
  return "!";
}
py.peek = C2;
function py(n, r, a) {
  let u = n.value || "", c = "`", d = -1;
  for (; new RegExp("(^|[^`])" + c + "([^`]|$)").test(u); )
    c += "`";
  for (/[^ \r\n]/.test(u) && (/^[ \r\n]/.test(u) && /[ \r\n]$/.test(u) || /^`|`$/.test(u)) && (u = " " + u + " "); ++d < a.unsafe.length; ) {
    const f = a.unsafe[d], p = a.compilePattern(f);
    let m;
    if (f.atBreak)
      for (; m = p.exec(u); ) {
        let h = m.index;
        u.charCodeAt(h) === 10 && u.charCodeAt(h - 1) === 13 && h--, u = u.slice(0, h) + " " + u.slice(m.index + 1);
      }
  }
  return c + u + c;
}
function C2() {
  return "`";
}
function my(n, r) {
  const a = Hc(n);
  return !!(!r.options.resourceLink && // If there’s a url…
  n.url && // And there’s a no title…
  !n.title && // And the content of `node` is a single text node…
  n.children && n.children.length === 1 && n.children[0].type === "text" && // And if the url is the same as the content…
  (a === n.url || "mailto:" + a === n.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(n.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(n.url));
}
gy.peek = D2;
function gy(n, r, a, u) {
  const c = Jc(a), d = c === '"' ? "Quote" : "Apostrophe", f = a.createTracker(u);
  let p, m;
  if (my(n, a)) {
    const b = a.stack;
    a.stack = [], p = a.enter("autolink");
    let y = f.move("<");
    return y += f.move(
      a.containerPhrasing(n, {
        before: y,
        after: ">",
        ...f.current()
      })
    ), y += f.move(">"), p(), a.stack = b, y;
  }
  p = a.enter("link"), m = a.enter("label");
  let h = f.move("[");
  return h += f.move(
    a.containerPhrasing(n, {
      before: h,
      after: "](",
      ...f.current()
    })
  ), h += f.move("]("), m(), // If there’s no url but there is a title…
  !n.url && n.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (m = a.enter("destinationLiteral"), h += f.move("<"), h += f.move(
    a.safe(n.url, { before: h, after: ">", ...f.current() })
  ), h += f.move(">")) : (m = a.enter("destinationRaw"), h += f.move(
    a.safe(n.url, {
      before: h,
      after: n.title ? " " : ")",
      ...f.current()
    })
  )), m(), n.title && (m = a.enter(`title${d}`), h += f.move(" " + c), h += f.move(
    a.safe(n.title, {
      before: h,
      after: c,
      ...f.current()
    })
  ), h += f.move(c), m()), h += f.move(")"), p(), h;
}
function D2(n, r, a) {
  return my(n, a) ? "<" : "[";
}
yy.peek = _2;
function yy(n, r, a, u) {
  const c = n.referenceType, d = a.enter("linkReference");
  let f = a.enter("label");
  const p = a.createTracker(u);
  let m = p.move("[");
  const h = a.containerPhrasing(n, {
    before: m,
    after: "]",
    ...p.current()
  });
  m += p.move(h + "]["), f();
  const b = a.stack;
  a.stack = [], f = a.enter("reference");
  const y = a.safe(a.associationId(n), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = b, d(), c === "full" || !h || h !== y ? m += p.move(y + "]") : c === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function _2() {
  return "[";
}
function Ic(n) {
  const r = n.options.bullet || "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return r;
}
function M2(n) {
  const r = Ic(n), a = n.options.bulletOther;
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
function O2(n) {
  const r = n.options.bulletOrdered || ".";
  if (r !== "." && r !== ")")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return r;
}
function by(n) {
  const r = n.options.rule || "*";
  if (r !== "*" && r !== "-" && r !== "_")
    throw new Error(
      "Cannot serialize rules with `" + r + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return r;
}
function R2(n, r, a, u) {
  const c = a.enter("list"), d = a.bulletCurrent;
  let f = n.ordered ? O2(a) : Ic(a);
  const p = n.ordered ? f === "." ? ")" : "." : M2(a);
  let m = r && a.bulletLastUsed ? f === a.bulletLastUsed : !1;
  if (!n.ordered) {
    const b = n.children ? n.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (f === "*" || f === "-") && // Empty first list item:
      b && (!b.children || !b.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (m = !0), by(a) === f && b
    ) {
      let y = -1;
      for (; ++y < n.children.length; ) {
        const w = n.children[y];
        if (w && w.type === "listItem" && w.children && w.children[0] && w.children[0].type === "thematicBreak") {
          m = !0;
          break;
        }
      }
    }
  }
  m && (f = p), a.bulletCurrent = f;
  const h = a.containerFlow(n, u);
  return a.bulletLastUsed = f, a.bulletCurrent = d, c(), h;
}
function N2(n) {
  const r = n.options.listItemIndent || "one";
  if (r !== "tab" && r !== "one" && r !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return r;
}
function L2(n, r, a, u) {
  const c = N2(a);
  let d = a.bulletCurrent || Ic(a);
  r && r.type === "list" && r.ordered && (d = (typeof r.start == "number" && r.start > -1 ? r.start : 1) + (a.options.incrementListMarker === !1 ? 0 : r.children.indexOf(n)) + d);
  let f = d.length + 1;
  (c === "tab" || c === "mixed" && (r && r.type === "list" && r.spread || n.spread)) && (f = Math.ceil(f / 4) * 4);
  const p = a.createTracker(u);
  p.move(d + " ".repeat(f - d.length)), p.shift(f);
  const m = a.enter("listItem"), h = a.indentLines(
    a.containerFlow(n, p.current()),
    b
  );
  return m(), h;
  function b(y, w, x) {
    return w ? (x ? "" : " ".repeat(f)) + y : (x ? d : d + " ".repeat(f - d.length)) + y;
  }
}
function U2(n, r, a, u) {
  const c = a.enter("paragraph"), d = a.enter("phrasing"), f = a.containerPhrasing(n, u);
  return d(), c(), f;
}
const j2 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Cu([
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
function B2(n, r, a, u) {
  return (n.children.some(function(f) {
    return j2(f);
  }) ? a.containerPhrasing : a.containerFlow).call(a, n, u);
}
function H2(n) {
  const r = n.options.strong || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize strong with `" + r + "` for `options.strong`, expected `*`, or `_`"
    );
  return r;
}
vy.peek = q2;
function vy(n, r, a, u) {
  const c = H2(a), d = a.enter("strong"), f = a.createTracker(u), p = f.move(c + c);
  let m = f.move(
    a.containerPhrasing(n, {
      after: c,
      before: p,
      ...f.current()
    })
  );
  const h = m.charCodeAt(0), b = ku(
    u.before.charCodeAt(u.before.length - 1),
    h,
    c
  );
  b.inside && (m = Ha(h) + m.slice(1));
  const y = m.charCodeAt(m.length - 1), w = ku(u.after.charCodeAt(0), y, c);
  w.inside && (m = m.slice(0, -1) + Ha(y));
  const x = f.move(c + c);
  return d(), a.attentionEncodeSurroundingInfo = {
    after: w.outside,
    before: b.outside
  }, p + m + x;
}
function q2(n, r, a) {
  return a.options.strong || "*";
}
function Y2(n, r, a, u) {
  return a.safe(n.value, u);
}
function G2(n) {
  const r = n.options.ruleRepetition || 3;
  if (r < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + r + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return r;
}
function V2(n, r, a) {
  const u = (by(a) + (a.options.ruleSpaces ? " " : "")).repeat(G2(a));
  return a.options.ruleSpaces ? u.slice(0, -1) : u;
}
const xy = {
  blockquote: d2,
  break: tg,
  code: b2,
  definition: x2,
  emphasis: cy,
  hardBreak: tg,
  heading: z2,
  html: fy,
  image: dy,
  imageReference: hy,
  inlineCode: py,
  link: gy,
  linkReference: yy,
  list: R2,
  listItem: L2,
  paragraph: U2,
  root: B2,
  strong: vy,
  text: Y2,
  thematicBreak: V2
};
function Q2() {
  return {
    enter: {
      table: X2,
      tableData: eg,
      tableHeader: eg,
      tableRow: F2
    },
    exit: {
      codeText: K2,
      table: Z2,
      tableData: yc,
      tableHeader: yc,
      tableRow: yc
    }
  };
}
function X2(n) {
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
function Z2(n) {
  this.exit(n), this.data.inTable = void 0;
}
function F2(n) {
  this.enter({ type: "tableRow", children: [] }, n);
}
function yc(n) {
  this.exit(n);
}
function eg(n) {
  this.enter({ type: "tableCell", children: [] }, n);
}
function K2(n) {
  let r = this.resume();
  this.data.inTable && (r = r.replace(/\\([\\|])/g, J2));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = r, this.exit(n);
}
function J2(n, r) {
  return r === "|" ? r : n;
}
function I2(n) {
  const r = n || {}, a = r.tableCellPadding, u = r.tablePipeAlign, c = r.stringLength, d = a ? " " : "|";
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
      inlineCode: w,
      table: f,
      tableCell: m,
      tableRow: p
    }
  };
  function f(x, E, R, L) {
    return h(b(x, R, L), x.align);
  }
  function p(x, E, R, L) {
    const D = y(x, R, L), Z = h([D]);
    return Z.slice(0, Z.indexOf(`
`));
  }
  function m(x, E, R, L) {
    const D = R.enter("tableCell"), Z = R.enter("phrasing"), H = R.containerPhrasing(x, {
      ...L,
      before: d,
      after: d
    });
    return Z(), D(), H;
  }
  function h(x, E) {
    return c2(x, {
      align: E,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: u,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: c
    });
  }
  function b(x, E, R) {
    const L = x.children;
    let D = -1;
    const Z = [], H = E.enter("table");
    for (; ++D < L.length; )
      Z[D] = y(L[D], E, R);
    return H(), Z;
  }
  function y(x, E, R) {
    const L = x.children;
    let D = -1;
    const Z = [], H = E.enter("tableRow");
    for (; ++D < L.length; )
      Z[D] = m(L[D], x, E, R);
    return H(), Z;
  }
  function w(x, E, R) {
    let L = xy.inlineCode(x, E, R);
    return R.stack.includes("tableCell") && (L = L.replace(/\|/g, "\\$&")), L;
  }
}
function $2() {
  return {
    exit: {
      taskListCheckValueChecked: ng,
      taskListCheckValueUnchecked: ng,
      paragraph: P2
    }
  };
}
function W2() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: tz }
  };
}
function ng(n) {
  const r = this.stack[this.stack.length - 2];
  r.type, r.checked = n.type === "taskListCheckValueChecked";
}
function P2(n) {
  const r = this.stack[this.stack.length - 2];
  if (r && r.type === "listItem" && typeof r.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const u = a.children[0];
    if (u && u.type === "text") {
      const c = r.children;
      let d = -1, f;
      for (; ++d < c.length; ) {
        const p = c[d];
        if (p.type === "paragraph") {
          f = p;
          break;
        }
      }
      f === a && (u.value = u.value.slice(1), u.value.length === 0 ? a.children.shift() : a.position && u.position && typeof u.position.start.offset == "number" && (u.position.start.column++, u.position.start.offset++, a.position.start = Object.assign({}, u.position.start)));
    }
  }
  this.exit(n);
}
function tz(n, r, a, u) {
  const c = n.children[0], d = typeof n.checked == "boolean" && c && c.type === "paragraph", f = "[" + (n.checked ? "x" : " ") + "] ", p = a.createTracker(u);
  d && p.move(f);
  let m = xy.listItem(n, r, a, {
    ...u,
    ...p.current()
  });
  return d && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, h)), m;
  function h(b) {
    return b + f;
  }
}
function ez() {
  return [
    RS(),
    t2(),
    i2(),
    Q2(),
    $2()
  ];
}
function nz(n) {
  return {
    extensions: [
      NS(),
      e2(n),
      a2(),
      I2(n),
      W2()
    ]
  };
}
const lz = {
  tokenize: sz,
  partial: !0
}, wy = {
  tokenize: cz,
  partial: !0
}, ky = {
  tokenize: fz,
  partial: !0
}, Sy = {
  tokenize: dz,
  partial: !0
}, iz = {
  tokenize: hz,
  partial: !0
}, zy = {
  name: "wwwAutolink",
  tokenize: uz,
  previous: Ay
}, Ey = {
  name: "protocolAutolink",
  tokenize: oz,
  previous: Ty
}, Bn = {
  name: "emailAutolink",
  tokenize: rz,
  previous: Cy
}, gn = {};
function az() {
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
gn[87] = [Bn, zy];
gn[119] = [Bn, zy];
function rz(n, r, a) {
  const u = this;
  let c, d;
  return f;
  function f(y) {
    return !_c(y) || !Cy.call(u, u.previous) || $c(u.events) ? a(y) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), p(y));
  }
  function p(y) {
    return _c(y) ? (n.consume(y), p) : y === 64 ? (n.consume(y), m) : a(y);
  }
  function m(y) {
    return y === 46 ? n.check(iz, b, h)(y) : y === 45 || y === 95 || ve(y) ? (d = !0, n.consume(y), m) : b(y);
  }
  function h(y) {
    return n.consume(y), c = !0, m;
  }
  function b(y) {
    return d && c && ze(u.previous) ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), r(y)) : a(y);
  }
}
function uz(n, r, a) {
  const u = this;
  return c;
  function c(f) {
    return f !== 87 && f !== 119 || !Ay.call(u, u.previous) || $c(u.events) ? a(f) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(lz, n.attempt(wy, n.attempt(ky, d), a), a)(f));
  }
  function d(f) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), r(f);
  }
}
function oz(n, r, a) {
  const u = this;
  let c = "", d = !1;
  return f;
  function f(y) {
    return (y === 72 || y === 104) && Ty.call(u, u.previous) && !$c(u.events) ? (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), c += String.fromCodePoint(y), n.consume(y), p) : a(y);
  }
  function p(y) {
    if (ze(y) && c.length < 5)
      return c += String.fromCodePoint(y), n.consume(y), p;
    if (y === 58) {
      const w = c.toLowerCase();
      if (w === "http" || w === "https")
        return n.consume(y), m;
    }
    return a(y);
  }
  function m(y) {
    return y === 47 ? (n.consume(y), d ? h : (d = !0, m)) : a(y);
  }
  function h(y) {
    return y === null || vu(y) || Ft(y) || Nl(y) || Eu(y) ? a(y) : n.attempt(wy, n.attempt(ky, b), a)(y);
  }
  function b(y) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), r(y);
  }
}
function sz(n, r, a) {
  let u = 0;
  return c;
  function c(f) {
    return (f === 87 || f === 119) && u < 3 ? (u++, n.consume(f), c) : f === 46 && u === 3 ? (n.consume(f), d) : a(f);
  }
  function d(f) {
    return f === null ? a(f) : r(f);
  }
}
function cz(n, r, a) {
  let u, c, d;
  return f;
  function f(h) {
    return h === 46 || h === 95 ? n.check(Sy, m, p)(h) : h === null || Ft(h) || Nl(h) || h !== 45 && Eu(h) ? m(h) : (d = !0, n.consume(h), f);
  }
  function p(h) {
    return h === 95 ? u = !0 : (c = u, u = void 0), n.consume(h), f;
  }
  function m(h) {
    return c || u || !d ? a(h) : r(h);
  }
}
function fz(n, r) {
  let a = 0, u = 0;
  return c;
  function c(f) {
    return f === 40 ? (a++, n.consume(f), c) : f === 41 && u < a ? d(f) : f === 33 || f === 34 || f === 38 || f === 39 || f === 41 || f === 42 || f === 44 || f === 46 || f === 58 || f === 59 || f === 60 || f === 63 || f === 93 || f === 95 || f === 126 ? n.check(Sy, r, d)(f) : f === null || Ft(f) || Nl(f) ? r(f) : (n.consume(f), c);
  }
  function d(f) {
    return f === 41 && u++, n.consume(f), c;
  }
}
function dz(n, r, a) {
  return u;
  function u(p) {
    return p === 33 || p === 34 || p === 39 || p === 41 || p === 42 || p === 44 || p === 46 || p === 58 || p === 59 || p === 63 || p === 95 || p === 126 ? (n.consume(p), u) : p === 38 ? (n.consume(p), d) : p === 93 ? (n.consume(p), c) : (
      // `<` is an end.
      p === 60 || // So is whitespace.
      p === null || Ft(p) || Nl(p) ? r(p) : a(p)
    );
  }
  function c(p) {
    return p === null || p === 40 || p === 91 || Ft(p) || Nl(p) ? r(p) : u(p);
  }
  function d(p) {
    return ze(p) ? f(p) : a(p);
  }
  function f(p) {
    return p === 59 ? (n.consume(p), u) : ze(p) ? (n.consume(p), f) : a(p);
  }
}
function hz(n, r, a) {
  return u;
  function u(d) {
    return n.consume(d), c;
  }
  function c(d) {
    return ve(d) ? a(d) : r(d);
  }
}
function Ay(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 91 || n === 93 || n === 126 || Ft(n);
}
function Ty(n) {
  return !ze(n);
}
function Cy(n) {
  return !(n === 47 || _c(n));
}
function _c(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || ve(n);
}
function $c(n) {
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
const pz = {
  tokenize: kz,
  partial: !0
};
function mz() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: vz,
        continuation: {
          tokenize: xz
        },
        exit: wz
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: bz
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: gz,
        resolveTo: yz
      }
    }
  };
}
function gz(n, r, a) {
  const u = this;
  let c = u.events.length;
  const d = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let f;
  for (; c--; ) {
    const m = u.events[c][1];
    if (m.type === "labelImage") {
      f = m;
      break;
    }
    if (m.type === "gfmFootnoteCall" || m.type === "labelLink" || m.type === "label" || m.type === "image" || m.type === "link")
      break;
  }
  return p;
  function p(m) {
    if (!f || !f._balanced)
      return a(m);
    const h = sn(u.sliceSerialize({
      start: f.end,
      end: u.now()
    }));
    return h.codePointAt(0) !== 94 || !d.includes(h.slice(1)) ? a(m) : (n.enter("gfmFootnoteCallLabelMarker"), n.consume(m), n.exit("gfmFootnoteCallLabelMarker"), r(m));
  }
}
function yz(n, r) {
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
  }, c = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, n[a + 3][1].end),
    end: Object.assign({}, n[a + 3][1].end)
  };
  c.end.column++, c.end.offset++, c.end._bufferIndex++;
  const d = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, c.end),
    end: Object.assign({}, n[n.length - 1][1].start)
  }, f = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, d.start),
    end: Object.assign({}, d.end)
  }, p = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    n[a + 1],
    n[a + 2],
    ["enter", u, r],
    // The `[`
    n[a + 3],
    n[a + 4],
    // The `^`.
    ["enter", c, r],
    ["exit", c, r],
    // Everything in between.
    ["enter", d, r],
    ["enter", f, r],
    ["exit", f, r],
    ["exit", d, r],
    // The ending (`]`, properly parsed and labelled).
    n[n.length - 2],
    n[n.length - 1],
    ["exit", u, r]
  ];
  return n.splice(a, n.length - a + 1, ...p), n;
}
function bz(n, r, a) {
  const u = this, c = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let d = 0, f;
  return p;
  function p(y) {
    return n.enter("gfmFootnoteCall"), n.enter("gfmFootnoteCallLabelMarker"), n.consume(y), n.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(y) {
    return y !== 94 ? a(y) : (n.enter("gfmFootnoteCallMarker"), n.consume(y), n.exit("gfmFootnoteCallMarker"), n.enter("gfmFootnoteCallString"), n.enter("chunkString").contentType = "string", h);
  }
  function h(y) {
    if (
      // Too long.
      d > 999 || // Closing brace with nothing.
      y === 93 && !f || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || Ft(y)
    )
      return a(y);
    if (y === 93) {
      n.exit("chunkString");
      const w = n.exit("gfmFootnoteCallString");
      return c.includes(sn(u.sliceSerialize(w))) ? (n.enter("gfmFootnoteCallLabelMarker"), n.consume(y), n.exit("gfmFootnoteCallLabelMarker"), n.exit("gfmFootnoteCall"), r) : a(y);
    }
    return Ft(y) || (f = !0), d++, n.consume(y), y === 92 ? b : h;
  }
  function b(y) {
    return y === 91 || y === 92 || y === 93 ? (n.consume(y), d++, h) : h(y);
  }
}
function vz(n, r, a) {
  const u = this, c = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let d, f = 0, p;
  return m;
  function m(E) {
    return n.enter("gfmFootnoteDefinition")._container = !0, n.enter("gfmFootnoteDefinitionLabel"), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(E), n.exit("gfmFootnoteDefinitionLabelMarker"), h;
  }
  function h(E) {
    return E === 94 ? (n.enter("gfmFootnoteDefinitionMarker"), n.consume(E), n.exit("gfmFootnoteDefinitionMarker"), n.enter("gfmFootnoteDefinitionLabelString"), n.enter("chunkString").contentType = "string", b) : a(E);
  }
  function b(E) {
    if (
      // Too long.
      f > 999 || // Closing brace with nothing.
      E === 93 && !p || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      E === null || E === 91 || Ft(E)
    )
      return a(E);
    if (E === 93) {
      n.exit("chunkString");
      const R = n.exit("gfmFootnoteDefinitionLabelString");
      return d = sn(u.sliceSerialize(R)), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(E), n.exit("gfmFootnoteDefinitionLabelMarker"), n.exit("gfmFootnoteDefinitionLabel"), w;
    }
    return Ft(E) || (p = !0), f++, n.consume(E), E === 92 ? y : b;
  }
  function y(E) {
    return E === 91 || E === 92 || E === 93 ? (n.consume(E), f++, b) : b(E);
  }
  function w(E) {
    return E === 58 ? (n.enter("definitionMarker"), n.consume(E), n.exit("definitionMarker"), c.includes(d) || c.push(d), Ot(n, x, "gfmFootnoteDefinitionWhitespace")) : a(E);
  }
  function x(E) {
    return r(E);
  }
}
function xz(n, r, a) {
  return n.check(Ya, r, n.attempt(pz, r, a));
}
function wz(n) {
  n.exit("gfmFootnoteDefinition");
}
function kz(n, r, a) {
  const u = this;
  return Ot(n, c, "gfmFootnoteDefinitionIndent", 5);
  function c(d) {
    const f = u.events[u.events.length - 1];
    return f && f[1].type === "gfmFootnoteDefinitionIndent" && f[2].sliceSerialize(f[1], !0).length === 4 ? r(d) : a(d);
  }
}
function Sz(n) {
  let a = (n || {}).singleTilde;
  const u = {
    name: "strikethrough",
    tokenize: d,
    resolveAll: c
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
  function c(f, p) {
    let m = -1;
    for (; ++m < f.length; )
      if (f[m][0] === "enter" && f[m][1].type === "strikethroughSequenceTemporary" && f[m][1]._close) {
        let h = m;
        for (; h--; )
          if (f[h][0] === "exit" && f[h][1].type === "strikethroughSequenceTemporary" && f[h][1]._open && // If the sizes are the same:
          f[m][1].end.offset - f[m][1].start.offset === f[h][1].end.offset - f[h][1].start.offset) {
            f[m][1].type = "strikethroughSequence", f[h][1].type = "strikethroughSequence";
            const b = {
              type: "strikethrough",
              start: Object.assign({}, f[h][1].start),
              end: Object.assign({}, f[m][1].end)
            }, y = {
              type: "strikethroughText",
              start: Object.assign({}, f[h][1].end),
              end: Object.assign({}, f[m][1].start)
            }, w = [["enter", b, p], ["enter", f[h][1], p], ["exit", f[h][1], p], ["enter", y, p]], x = p.parser.constructs.insideSpan.null;
            x && Ze(w, w.length, 0, Au(x, f.slice(h + 1, m), p)), Ze(w, w.length, 0, [["exit", y, p], ["enter", f[m][1], p], ["exit", f[m][1], p], ["exit", b, p]]), Ze(f, h - 1, m - h + 3, w), m = h + w.length - 2;
            break;
          }
      }
    for (m = -1; ++m < f.length; )
      f[m][1].type === "strikethroughSequenceTemporary" && (f[m][1].type = "data");
    return f;
  }
  function d(f, p, m) {
    const h = this.previous, b = this.events;
    let y = 0;
    return w;
    function w(E) {
      return h === 126 && b[b.length - 1][1].type !== "characterEscape" ? m(E) : (f.enter("strikethroughSequenceTemporary"), x(E));
    }
    function x(E) {
      const R = Di(h);
      if (E === 126)
        return y > 1 ? m(E) : (f.consume(E), y++, x);
      if (y < 2 && !a) return m(E);
      const L = f.exit("strikethroughSequenceTemporary"), D = Di(E);
      return L._open = !D || D === 2 && !!R, L._close = !R || R === 2 && !!D, p(E);
    }
  }
}
class zz {
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
    Ez(this, r, a, u);
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
    if (this.map.sort(function(d, f) {
      return d[0] - f[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const u = [];
    for (; a > 0; )
      a -= 1, u.push(r.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), r.length = this.map[a][0];
    u.push(r.slice()), r.length = 0;
    let c = u.pop();
    for (; c; ) {
      for (const d of c)
        r.push(d);
      c = u.pop();
    }
    this.map.length = 0;
  }
}
function Ez(n, r, a, u) {
  let c = 0;
  if (!(a === 0 && u.length === 0)) {
    for (; c < n.map.length; ) {
      if (n.map[c][0] === r) {
        n.map[c][1] += a, n.map[c][2].push(...u);
        return;
      }
      c += 1;
    }
    n.map.push([r, a, u]);
  }
}
function Az(n, r) {
  let a = !1;
  const u = [];
  for (; r < n.length; ) {
    const c = n[r];
    if (a) {
      if (c[0] === "enter")
        c[1].type === "tableContent" && u.push(n[r + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (c[1].type === "tableContent") {
        if (n[r - 1][1].type === "tableDelimiterMarker") {
          const d = u.length - 1;
          u[d] = u[d] === "left" ? "center" : "right";
        }
      } else if (c[1].type === "tableDelimiterRow")
        break;
    } else c[0] === "enter" && c[1].type === "tableDelimiterRow" && (a = !0);
    r += 1;
  }
  return u;
}
function Tz() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Cz,
        resolveAll: Dz
      }
    }
  };
}
function Cz(n, r, a) {
  const u = this;
  let c = 0, d = 0, f;
  return p;
  function p(U) {
    let nt = u.events.length - 1;
    for (; nt > -1; ) {
      const it = u.events[nt][1].type;
      if (it === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      it === "linePrefix") nt--;
      else break;
    }
    const tt = nt > -1 ? u.events[nt][1].type : null, St = tt === "tableHead" || tt === "tableRow" ? B : m;
    return St === B && u.parser.lazy[u.now().line] ? a(U) : St(U);
  }
  function m(U) {
    return n.enter("tableHead"), n.enter("tableRow"), h(U);
  }
  function h(U) {
    return U === 124 || (f = !0, d += 1), b(U);
  }
  function b(U) {
    return U === null ? a(U) : mt(U) ? d > 1 ? (d = 0, u.interrupt = !0, n.exit("tableRow"), n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), x) : a(U) : Ct(U) ? Ot(n, b, "whitespace")(U) : (d += 1, f && (f = !1, c += 1), U === 124 ? (n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), f = !0, b) : (n.enter("data"), y(U)));
  }
  function y(U) {
    return U === null || U === 124 || Ft(U) ? (n.exit("data"), b(U)) : (n.consume(U), U === 92 ? w : y);
  }
  function w(U) {
    return U === 92 || U === 124 ? (n.consume(U), y) : y(U);
  }
  function x(U) {
    return u.interrupt = !1, u.parser.lazy[u.now().line] ? a(U) : (n.enter("tableDelimiterRow"), f = !1, Ct(U) ? Ot(n, E, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : E(U));
  }
  function E(U) {
    return U === 45 || U === 58 ? L(U) : U === 124 ? (f = !0, n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), R) : ot(U);
  }
  function R(U) {
    return Ct(U) ? Ot(n, L, "whitespace")(U) : L(U);
  }
  function L(U) {
    return U === 58 ? (d += 1, f = !0, n.enter("tableDelimiterMarker"), n.consume(U), n.exit("tableDelimiterMarker"), D) : U === 45 ? (d += 1, D(U)) : U === null || mt(U) ? lt(U) : ot(U);
  }
  function D(U) {
    return U === 45 ? (n.enter("tableDelimiterFiller"), Z(U)) : ot(U);
  }
  function Z(U) {
    return U === 45 ? (n.consume(U), Z) : U === 58 ? (f = !0, n.exit("tableDelimiterFiller"), n.enter("tableDelimiterMarker"), n.consume(U), n.exit("tableDelimiterMarker"), H) : (n.exit("tableDelimiterFiller"), H(U));
  }
  function H(U) {
    return Ct(U) ? Ot(n, lt, "whitespace")(U) : lt(U);
  }
  function lt(U) {
    return U === 124 ? E(U) : U === null || mt(U) ? !f || c !== d ? ot(U) : (n.exit("tableDelimiterRow"), n.exit("tableHead"), r(U)) : ot(U);
  }
  function ot(U) {
    return a(U);
  }
  function B(U) {
    return n.enter("tableRow"), P(U);
  }
  function P(U) {
    return U === 124 ? (n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), P) : U === null || mt(U) ? (n.exit("tableRow"), r(U)) : Ct(U) ? Ot(n, P, "whitespace")(U) : (n.enter("data"), J(U));
  }
  function J(U) {
    return U === null || U === 124 || Ft(U) ? (n.exit("data"), P(U)) : (n.consume(U), U === 92 ? pt : J);
  }
  function pt(U) {
    return U === 92 || U === 124 ? (n.consume(U), J) : J(U);
  }
}
function Dz(n, r) {
  let a = -1, u = !0, c = 0, d = [0, 0, 0, 0], f = [0, 0, 0, 0], p = !1, m = 0, h, b, y;
  const w = new zz();
  for (; ++a < n.length; ) {
    const x = n[a], E = x[1];
    x[0] === "enter" ? E.type === "tableHead" ? (p = !1, m !== 0 && (lg(w, r, m, h, b), b = void 0, m = 0), h = {
      type: "table",
      start: Object.assign({}, E.start),
      // Note: correct end is set later.
      end: Object.assign({}, E.end)
    }, w.add(a, 0, [["enter", h, r]])) : E.type === "tableRow" || E.type === "tableDelimiterRow" ? (u = !0, y = void 0, d = [0, 0, 0, 0], f = [0, a + 1, 0, 0], p && (p = !1, b = {
      type: "tableBody",
      start: Object.assign({}, E.start),
      // Note: correct end is set later.
      end: Object.assign({}, E.end)
    }, w.add(a, 0, [["enter", b, r]])), c = E.type === "tableDelimiterRow" ? 2 : b ? 3 : 1) : c && (E.type === "data" || E.type === "tableDelimiterMarker" || E.type === "tableDelimiterFiller") ? (u = !1, f[2] === 0 && (d[1] !== 0 && (f[0] = f[1], y = mu(w, r, d, c, void 0, y), d = [0, 0, 0, 0]), f[2] = a)) : E.type === "tableCellDivider" && (u ? u = !1 : (d[1] !== 0 && (f[0] = f[1], y = mu(w, r, d, c, void 0, y)), d = f, f = [d[1], a, 0, 0])) : E.type === "tableHead" ? (p = !0, m = a) : E.type === "tableRow" || E.type === "tableDelimiterRow" ? (m = a, d[1] !== 0 ? (f[0] = f[1], y = mu(w, r, d, c, a, y)) : f[1] !== 0 && (y = mu(w, r, f, c, a, y)), c = 0) : c && (E.type === "data" || E.type === "tableDelimiterMarker" || E.type === "tableDelimiterFiller") && (f[3] = a);
  }
  for (m !== 0 && lg(w, r, m, h, b), w.consume(r.events), a = -1; ++a < r.events.length; ) {
    const x = r.events[a];
    x[0] === "enter" && x[1].type === "table" && (x[1]._align = Az(r.events, a));
  }
  return n;
}
function mu(n, r, a, u, c, d) {
  const f = u === 1 ? "tableHeader" : u === 2 ? "tableDelimiter" : "tableData", p = "tableContent";
  a[0] !== 0 && (d.end = Object.assign({}, Ti(r.events, a[0])), n.add(a[0], 0, [["exit", d, r]]));
  const m = Ti(r.events, a[1]);
  if (d = {
    type: f,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, n.add(a[1], 0, [["enter", d, r]]), a[2] !== 0) {
    const h = Ti(r.events, a[2]), b = Ti(r.events, a[3]), y = {
      type: p,
      start: Object.assign({}, h),
      end: Object.assign({}, b)
    };
    if (n.add(a[2], 0, [["enter", y, r]]), u !== 2) {
      const w = r.events[a[2]], x = r.events[a[3]];
      if (w[1].end = Object.assign({}, x[1].end), w[1].type = "chunkText", w[1].contentType = "text", a[3] > a[2] + 1) {
        const E = a[2] + 1, R = a[3] - a[2] - 1;
        n.add(E, R, []);
      }
    }
    n.add(a[3] + 1, 0, [["exit", y, r]]);
  }
  return c !== void 0 && (d.end = Object.assign({}, Ti(r.events, c)), n.add(c, 0, [["exit", d, r]]), d = void 0), d;
}
function lg(n, r, a, u, c) {
  const d = [], f = Ti(r.events, a);
  c && (c.end = Object.assign({}, f), d.push(["exit", c, r])), u.end = Object.assign({}, f), d.push(["exit", u, r]), n.add(a + 1, 0, d);
}
function Ti(n, r) {
  const a = n[r], u = a[0] === "enter" ? "start" : "end";
  return a[1][u];
}
const _z = {
  name: "tasklistCheck",
  tokenize: Oz
};
function Mz() {
  return {
    text: {
      91: _z
    }
  };
}
function Oz(n, r, a) {
  const u = this;
  return c;
  function c(m) {
    return (
      // Exit if there’s stuff before.
      u.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !u._gfmTasklistFirstContentOfListItem ? a(m) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(m), n.exit("taskListCheckMarker"), d)
    );
  }
  function d(m) {
    return Ft(m) ? (n.enter("taskListCheckValueUnchecked"), n.consume(m), n.exit("taskListCheckValueUnchecked"), f) : m === 88 || m === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(m), n.exit("taskListCheckValueChecked"), f) : a(m);
  }
  function f(m) {
    return m === 93 ? (n.enter("taskListCheckMarker"), n.consume(m), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), p) : a(m);
  }
  function p(m) {
    return mt(m) ? r(m) : Ct(m) ? n.check({
      tokenize: Rz
    }, r, a)(m) : a(m);
  }
}
function Rz(n, r, a) {
  return Ot(n, u, "whitespace");
  function u(c) {
    return c === null ? a(c) : r(c);
  }
}
function Nz(n) {
  return Hg([
    az(),
    mz(),
    Sz(n),
    Tz(),
    Mz()
  ]);
}
const Lz = {};
function Wc(n) {
  const r = (
    /** @type {Processor<Root>} */
    this
  ), a = n || Lz, u = r.data(), c = u.micromarkExtensions || (u.micromarkExtensions = []), d = u.fromMarkdownExtensions || (u.fromMarkdownExtensions = []), f = u.toMarkdownExtensions || (u.toMarkdownExtensions = []);
  c.push(Nz(a)), d.push(ez()), f.push(nz(a));
}
const Uz = ({ messages: n }) => {
  const r = Zt.useRef(null);
  return Zt.useEffect(() => {
    r.current?.scrollIntoView({ behavior: "smooth" }), console.log(n);
  }, [n]), /* @__PURE__ */ et.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ et.jsx("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ et.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ et.jsx(Kc, { remarkPlugins: [Wc], children: n.message }) }) }) });
}, jz = (n, r, a) => {
  const u = new SpeechSynthesisUtterance(n);
  r && (u.onend = r), window.speechSynthesis.speak(u);
}, Bz = () => {
  window.speechSynthesis.cancel();
}, Hz = async (n) => {
  await navigator.clipboard.writeText(n);
}, Dy = (n) => {
  const r = n.split(`
`).filter((c) => c.trim());
  let a = "";
  const u = [];
  console.log("Raw RAG response lines:", n);
  for (const c of r)
    try {
      const d = JSON.parse(c);
      d.type === "ChatCompletion" && d.content && (a += d.content), d.type === "QuestionSuggestion" && d.content && u.push(d.content);
    } catch {
      console.warn("Failed to parse RAG response line:", c);
    }
  return console.log("Formatted RAG response:", a), console.log("Question suggestions:", u), {
    content: a,
    suggestions: u
  };
};
function qz({ className: n }) {
  return /* @__PURE__ */ et.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ et.jsx(
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
function Yz({ className: n }) {
  return /* @__PURE__ */ et.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ et.jsx(
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
function Gz({ className: n }) {
  return /* @__PURE__ */ et.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ et.jsx(
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
function Vz({ className: n }) {
  return /* @__PURE__ */ et.jsx(
    "svg",
    {
      className: n,
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ et.jsx(
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
const Qz = ({
  messages: n,
  index: r,
  onSuggestionClick: a
}) => {
  const { t: u } = zu(), [c, d] = Zt.useState(null), [f, p] = Zt.useState(null), m = Zt.useRef(null);
  let h = "";
  const [b, y] = Zt.useState("");
  Zt.useEffect(() => {
    m.current?.scrollIntoView({ behavior: "smooth" }), h += Dy(n.message).content, console.log("Formatted RAG response:::: ", h), y(h);
  }, [n]);
  const w = (E, R) => {
    if (c !== null && (Bz(), c === R)) {
      d(null);
      return;
    }
    jz(E, () => d(null)), d(R);
  }, x = async (E, R) => {
    try {
      await Hz(E), p(R), setTimeout(() => p(null), 2e3);
    } catch (L) {
      console.error("Failed to copy text:", L);
    }
  };
  return /* @__PURE__ */ et.jsx(
    "div",
    {
      className: "flex justify-start",
      children: /* @__PURE__ */ et.jsxs("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white", children: [
        /* @__PURE__ */ et.jsxs("div", { className: "flex flex-col items-start gap-3", children: [
          /* @__PURE__ */ et.jsx(Kc, { remarkPlugins: [Wc], children: n.message }),
          /* @__PURE__ */ et.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ et.jsx(
              ja,
              {
                onClick: () => x(n.message, r),
                variant: "ghost",
                size: "icon",
                className: "rounded-lg",
                title: f === r ? u.chat.copiedTooltip : u.chat.copyTooltip,
                children: f === r ? /* @__PURE__ */ et.jsx(qz, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ et.jsx(Yz, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ et.jsx(
              ja,
              {
                onClick: () => w(n.message, r),
                variant: "ghost",
                size: "icon",
                className: "rounded-lg",
                title: c === r ? u.chat.stopReadingTooltip : u.chat.readAloudTooltip,
                children: c === r ? /* @__PURE__ */ et.jsx(Gz, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ et.jsx(Vz, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ et.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ et.jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2", children: "Suggested follow-up questions:" }),
          /* @__PURE__ */ et.jsx("div", { className: "space-y-2", children: n.type === "QuestionSuggestion" && /* @__PURE__ */ et.jsx(
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
}, Xz = ({ welcomeMessage: n }) => /* @__PURE__ */ et.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ et.jsx("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white", children: /* @__PURE__ */ et.jsx("div", { className: "flex flex-col items-start gap-3", children: /* @__PURE__ */ et.jsx(Kc, { remarkPlugins: [Wc], children: n }) }) }) });
function Zz({
  messages: n,
  chatbotInitData: r,
  loading: a,
  onSuggestionClick: u
}) {
  const c = Zt.useRef(null);
  let d = "";
  const [f, p] = Zt.useState("");
  return Zt.useEffect(() => {
    c.current?.scrollIntoView({ behavior: "smooth" }), n.forEach((m) => {
      d += Dy(m.message);
    }), console.log("Formatted RAG response:::: ", d), p(d);
  }, [n]), Zt.useEffect(() => {
    c.current?.scrollIntoView({ behavior: "smooth" }), console.log(n);
  }, [n]), /* @__PURE__ */ et.jsxs("div", { className: "flex-1 overflow-y-auto space-y-4 mb-6 min-h-0", children: [
    r?.welcomeMessage && /* @__PURE__ */ et.jsx(Xz, { welcomeMessage: r.welcomeMessage }),
    n.map((m, h) => m.isChatbot ? /* @__PURE__ */ et.jsx(
      Qz,
      {
        messages: m,
        index: h,
        onSuggestionClick: u
      },
      h
    ) : /* @__PURE__ */ et.jsx(
      Uz,
      {
        index: h,
        messages: m
      },
      h
    )),
    a && /* @__PURE__ */ et.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ et.jsx("div", { className: "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-2xl", children: /* @__PURE__ */ et.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ et.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ et.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-100" }),
      /* @__PURE__ */ et.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-200" })
    ] }) }) }),
    /* @__PURE__ */ et.jsx("div", { ref: c })
  ] });
}
const Fz = fg(
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
), _y = Zt.forwardRef(
  ({ className: n, variant: r, inputSize: a, ...u }, c) => /* @__PURE__ */ et.jsx(
    "input",
    {
      className: zg(Fz({ variant: r, inputSize: a }), n),
      ref: c,
      ...u
    }
  )
);
_y.displayName = "Input";
function Kz({
  input: n,
  loading: r,
  pageContent: a,
  onInputChange: u,
  onSendMessage: c
}) {
  const { t: d } = zu();
  return /* @__PURE__ */ et.jsx("div", { className: "sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-4 pb-2", children: /* @__PURE__ */ et.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ et.jsx(
      _y,
      {
        type: "text",
        value: n,
        onChange: (f) => u(f.target.value),
        onKeyDown: (f) => f.key === "Enter" && c(),
        placeholder: a ? d.chat.inputPlaceholder : d.chat.inputPlaceholderEmpty,
        disabled: r,
        inputSize: "md",
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ et.jsx(
      ja,
      {
        onClick: c,
        disabled: r || !n.trim(),
        variant: "secondary",
        size: "lg",
        children: d.chat.sendButton
      }
    )
  ] }) });
}
const Jz = async (n, r, a) => {
  const u = await bv(n, r);
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
var bc = { exports: {} };
var ig;
function Iz() {
  return ig || (ig = 1, (function(n) {
    (function() {
      var r = {}.hasOwnProperty;
      function a() {
        for (var d = "", f = 0; f < arguments.length; f++) {
          var p = arguments[f];
          p && (d = c(d, u(p)));
        }
        return d;
      }
      function u(d) {
        if (typeof d == "string" || typeof d == "number")
          return d;
        if (typeof d != "object")
          return "";
        if (Array.isArray(d))
          return a.apply(null, d);
        if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]"))
          return d.toString();
        var f = "";
        for (var p in d)
          r.call(d, p) && d[p] && (f = c(f, p));
        return f;
      }
      function c(d, f) {
        return f ? d ? d + " " + f : d + f : d;
      }
      n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
    })();
  })(bc)), bc.exports;
}
var $z = Iz();
const Wz = /* @__PURE__ */ Su($z);
function Pz({ chatApi: n, chatAssistantId: r, open: a = !0, size: u = "large" }) {
  const [c, d] = Zt.useState(
    void 0
  ), [f, p] = Zt.useState(""), [m, h] = Zt.useState([]), [b, y] = Zt.useState(""), [w, x] = Zt.useState(!1);
  Zt.useRef(null), Zt.useEffect(() => {
    n && r && Jz(n, r, d);
  }, []);
  const E = async (L) => {
    if (!L.trim()) return;
    const D = { isChatbot: !1, message: L, id: void 0, type: "UserInput" }, Z = [...m, D];
    h(Z), y(""), x(!0);
    try {
      const H = await yv(
        n,
        L,
        r
      ), lt = {
        isChatbot: !0,
        message: H ? JSON.stringify(H.reader) : "",
        id: void 0,
        type: "ChatCompletion"
      };
      h((ot) => [...ot, lt]);
    } catch (H) {
      console.error("Error sending message:", H), H instanceof Error && H.message;
    } finally {
      x(!1);
    }
  }, R = (L) => {
    E(L);
  };
  return /* @__PURE__ */ et.jsxs("div", { className: Wz({ block: a, hidden: !a, "w-1/2": u === "medium", "w-screen": u === "large" }, "min-h-screen bg-white dark:bg-gray-950 flex flex-col z-1000"), children: [
    /* @__PURE__ */ et.jsx(
      Sv,
      {
        title: c?.name
      }
    ),
    /* @__PURE__ */ et.jsxs("div", { className: "flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6", children: [
      /* @__PURE__ */ et.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ et.jsx(
          h1,
          {
            loading: w,
            onSuggestionClick: R
          }
        ),
        /* @__PURE__ */ et.jsx("div", { className: "flex-1" })
      ] }),
      /* @__PURE__ */ et.jsx(
        Zz,
        {
          messages: m,
          loading: w,
          chatbotInitData: c,
          onSuggestionClick: E
        }
      ),
      /* @__PURE__ */ et.jsx(
        Kz,
        {
          input: b,
          loading: w,
          pageContent: f,
          onInputChange: y,
          onSendMessage: () => E(b)
        }
      )
    ] })
  ] });
}
const tE = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial}}}@layer theme{:root,:host{--color-green-50:oklch(98.2% .018 155.826);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-white:#fff;--spacing:.25rem;--container-3xl:48rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-bounce:bounce 1s infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-geist-sans);--default-mono-font-family:var(--font-geist-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.right-2\\.5{right:calc(var(--spacing)*2.5)}.bottom-0{bottom:calc(var(--spacing)*0)}.left-2\\.5{left:calc(var(--spacing)*2.5)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-50{z-index:50}.z-1000{z-index:1000}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.h-2{height:calc(var(--spacing)*2)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-2{width:calc(var(--spacing)*2)}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.w-screen{width:100vw}.max-w-3xl{max-width:var(--container-3xl)}.max-w-7xl{max-width:var(--container-7xl)}.flex-1{flex:1}.shrink{flex-shrink:1}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.translate-x-1{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-11{--tw-translate-x:calc(var(--spacing)*11);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.resize{resize:both}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-green-500{border-color:var(--color-green-500)}.border-transparent{border-color:#0000}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-green-500{background-color:var(--color-green-500)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.p-2{padding:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-4{padding-top:calc(var(--spacing)*4)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.text-left{text-align:left}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-wrap{text-wrap:wrap}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.opacity-60{opacity:.6}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.delay-100{transition-delay:.1s}.delay-200{transition-delay:.2s}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}@media(hover:hover){.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-900:hover{background-color:var(--color-gray-900)}.hover\\:bg-green-50:hover{background-color:var(--color-green-50)}.hover\\:bg-green-600:hover{background-color:var(--color-green-600)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-green-500:focus{--tw-ring-color:var(--color-green-500)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-500:focus-visible{--tw-ring-color:var(--color-gray-500)}.focus-visible\\:ring-green-500:focus-visible{--tw-ring-color:var(--color-green-500)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}.disabled\\:opacity-50:disabled{opacity:.5}@media(prefers-color-scheme:dark){.dark\\:border-gray-700{border-color:var(--color-gray-700)}.dark\\:border-gray-800{border-color:var(--color-gray-800)}.dark\\:border-green-600{border-color:var(--color-green-600)}.dark\\:bg-gray-700{background-color:var(--color-gray-700)}.dark\\:bg-gray-800{background-color:var(--color-gray-800)}.dark\\:bg-gray-900{background-color:var(--color-gray-900)}.dark\\:bg-gray-950{background-color:var(--color-gray-950)}.dark\\:bg-green-600{background-color:var(--color-green-600)}.dark\\:text-gray-100{color:var(--color-gray-100)}.dark\\:text-gray-300{color:var(--color-gray-300)}.dark\\:text-gray-400{color:var(--color-gray-400)}.dark\\:text-green-400{color:var(--color-green-400)}.dark\\:text-white{color:var(--color-white)}.dark\\:placeholder-gray-500::placeholder{color:var(--color-gray-500)}@media(hover:hover){.dark\\:hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.dark\\:hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.dark\\:hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.dark\\:hover\\:bg-green-700:hover{background-color:var(--color-green-700)}}.dark\\:focus-visible\\:ring-gray-600:focus-visible{--tw-ring-color:var(--color-gray-600)}.dark\\:disabled\\:bg-gray-700:disabled{background-color:var(--color-gray-700)}.dark\\:disabled\\:bg-gray-800:disabled{background-color:var(--color-gray-800)}}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-4px)}}@keyframes rainbow{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}@keyframes sparkle{0%{opacity:1;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(30px)scale(0)}}.animate-sparkle{animation:1s ease-out forwards sparkle}.rainbow-text{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#ff6b6b,#ffa94d,#ffd43b,#51cf66,#339af0,#845ef7,#f06595,#ff6b6b) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;animation:3s linear infinite rainbow}button:not(:disabled):hover{animation:3s linear infinite rainbow;color:#fff!important;background:linear-gradient(90deg,#ff6b6b,#ffa94d,#ffd43b,#51cf66,#339af0,#845ef7,#f06595,#ff6b6b) 0 0/200% 100%!important;border-color:#0000!important}@media(prefers-color-scheme:dark){.rainbow-text{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#ffb3ba,#ffdfba,#ffffba,#baffc9,#bae1ff,#d4baff,#ffb3f7,#ffb3ba) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;animation:3s linear infinite rainbow}button:not(:disabled):hover{animation:3s linear infinite rainbow;color:#1a1a1a!important;background:linear-gradient(90deg,#ffb3ba,#ffdfba,#ffffba,#baffc9,#bae1ff,#d4baff,#ffb3f7,#ffb3ba) 0 0/200% 100%!important;border-color:#0000!important}}.animate-bounce{animation:1s ease-in-out infinite bounce}.delay-100{animation-delay:.1s}.delay-200{animation-delay:.2s}}:root{--background:#fff;--foreground:#171717}@media(prefers-color-scheme:dark){:root{--background:#0a0a0a;--foreground:#ededed}}body{background:var(--background);color:var(--foreground);font-family:Arial,Helvetica,sans-serif}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}', gu = globalThis;
gu.process ? gu.process.env || (gu.process.env = { NODE_ENV: "production" }) : gu.process = {
  env: { NODE_ENV: "production" }
};
function eE({
  chatApi: n,
  chatAssistantId: r
}) {
  const a = Zt.useRef(null);
  return Zt.useEffect(() => {
    const u = a.current?.getRootNode();
    if (!(u instanceof ShadowRoot) || u.querySelector("style[data-teacher-tool-widget-styles]"))
      return;
    const c = document.createElement("style");
    c.setAttribute("data-teacher-tool-widget-styles", "true"), c.textContent = tE, u.prepend(c);
  }, []), /* @__PURE__ */ et.jsx("div", { ref: a, children: /* @__PURE__ */ et.jsx(kv, { children: /* @__PURE__ */ et.jsx(Pz, { chatApi: n, chatAssistantId: r }) }) });
}
const nE = pv(eE, {
  props: {
    chatApi: "string",
    chatAssistantId: "string"
  },
  shadow: "open"
});
customElements.define("teacher-tool-widget", nE);
