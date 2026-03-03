function Eu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Zs = { exports: {} }, za = {};
var Im;
function X0() {
  if (Im) return za;
  Im = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(u, c, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      f = {};
      for (var m in c)
        m !== "key" && (f[m] = c[m]);
    } else f = c;
    return c = f.ref, {
      $$typeof: n,
      type: u,
      key: h,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return za.Fragment = r, za.jsx = a, za.jsxs = a, za;
}
var Wm;
function Z0() {
  return Wm || (Wm = 1, Zs.exports = X0()), Zs.exports;
}
var te = Z0(), Fs = { exports: {} }, be = {};
var $m;
function F0() {
  if ($m) return be;
  $m = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
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
  function D(z, Y, k) {
    this.props = z, this.context = Y, this.refs = L, this.updater = k || A;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(z, Y) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, Y, "setState");
  }, D.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = D.prototype;
  function H(z, Y, k) {
    this.props = z, this.context = Y, this.refs = L, this.updater = k || A;
  }
  var le = H.prototype = new Z();
  le.constructor = H, R(le, D.prototype), le.isPureReactComponent = !0;
  var oe = Array.isArray;
  function B() {
  }
  var P = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function me(z, Y, k) {
    var W = k.ref;
    return {
      $$typeof: n,
      type: z,
      key: Y,
      ref: W !== void 0 ? W : null,
      props: k
    };
  }
  function U(z, Y) {
    return me(z.type, Y, z.props);
  }
  function ne(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n;
  }
  function ee(z) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(k) {
      return Y[k];
    });
  }
  var Ee = /\/+/g;
  function ie(z, Y) {
    return typeof z == "object" && z !== null && z.key != null ? ee("" + z.key) : Y.toString(36);
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
  function _(z, Y, k, W, fe) {
    var ce = typeof z;
    (ce === "undefined" || ce === "boolean") && (z = null);
    var he = !1;
    if (z === null) he = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case n:
            case r:
              he = !0;
              break;
            case b:
              return he = z._init, _(
                he(z._payload),
                Y,
                k,
                W,
                fe
              );
          }
      }
    if (he)
      return fe = fe(z), he = W === "" ? "." + ie(z, 0) : W, oe(fe) ? (k = "", he != null && (k = he.replace(Ee, "$&/") + "/"), _(fe, Y, k, "", function(ht) {
        return ht;
      })) : fe != null && (ne(fe) && (fe = U(
        fe,
        k + (fe.key == null || z && z.key === fe.key ? "" : ("" + fe.key).replace(
          Ee,
          "$&/"
        ) + "/") + he
      )), Y.push(fe)), 1;
    he = 0;
    var Ve = W === "" ? "." : W + ":";
    if (oe(z))
      for (var Re = 0; Re < z.length; Re++)
        W = z[Re], ce = Ve + ie(W, Re), he += _(
          W,
          Y,
          k,
          ce,
          fe
        );
    else if (Re = x(z), typeof Re == "function")
      for (z = Re.call(z), Re = 0; !(W = z.next()).done; )
        W = W.value, ce = Ve + ie(W, Re++), he += _(
          W,
          Y,
          k,
          ce,
          fe
        );
    else if (ce === "object") {
      if (typeof z.then == "function")
        return _(
          I(z),
          Y,
          k,
          W,
          fe
        );
      throw Y = String(z), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function F(z, Y, k) {
    if (z == null) return z;
    var W = [], fe = 0;
    return _(z, W, "", "", function(ce) {
      return Y.call(k, ce, fe++);
    }), W;
  }
  function X(z) {
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
  var xe = typeof reportError == "function" ? reportError : function(z) {
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
    map: F,
    forEach: function(z, Y, k) {
      F(
        z,
        function() {
          Y.apply(this, arguments);
        },
        k
      );
    },
    count: function(z) {
      var Y = 0;
      return F(z, function() {
        Y++;
      }), Y;
    },
    toArray: function(z) {
      return F(z, function(Y) {
        return Y;
      }) || [];
    },
    only: function(z) {
      if (!ne(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return be.Activity = y, be.Children = E, be.Component = D, be.Fragment = a, be.Profiler = c, be.PureComponent = H, be.StrictMode = u, be.Suspense = p, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return P.H.useMemoCache(z);
    }
  }, be.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, be.cacheSignal = function() {
    return null;
  }, be.cloneElement = function(z, Y, k) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var W = R({}, z.props), fe = z.key;
    if (Y != null)
      for (ce in Y.key !== void 0 && (fe = "" + Y.key), Y)
        !J.call(Y, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && Y.ref === void 0 || (W[ce] = Y[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) W.children = k;
    else if (1 < ce) {
      for (var he = Array(ce), Ve = 0; Ve < ce; Ve++)
        he[Ve] = arguments[Ve + 2];
      W.children = he;
    }
    return me(z.type, fe, W);
  }, be.createContext = function(z) {
    return z = {
      $$typeof: h,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: f,
      _context: z
    }, z;
  }, be.createElement = function(z, Y, k) {
    var W, fe = {}, ce = null;
    if (Y != null)
      for (W in Y.key !== void 0 && (ce = "" + Y.key), Y)
        J.call(Y, W) && W !== "key" && W !== "__self" && W !== "__source" && (fe[W] = Y[W]);
    var he = arguments.length - 2;
    if (he === 1) fe.children = k;
    else if (1 < he) {
      for (var Ve = Array(he), Re = 0; Re < he; Re++)
        Ve[Re] = arguments[Re + 2];
      fe.children = Ve;
    }
    if (z && z.defaultProps)
      for (W in he = z.defaultProps, he)
        fe[W] === void 0 && (fe[W] = he[W]);
    return me(z, ce, fe);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(z) {
    return { $$typeof: m, render: z };
  }, be.isValidElement = ne, be.lazy = function(z) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: z },
      _init: X
    };
  }, be.memo = function(z, Y) {
    return {
      $$typeof: d,
      type: z,
      compare: Y === void 0 ? null : Y
    };
  }, be.startTransition = function(z) {
    var Y = P.T, k = {};
    P.T = k;
    try {
      var W = z(), fe = P.S;
      fe !== null && fe(k, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(B, xe);
    } catch (ce) {
      xe(ce);
    } finally {
      Y !== null && k.types !== null && (Y.types = k.types), P.T = Y;
    }
  }, be.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, be.use = function(z) {
    return P.H.use(z);
  }, be.useActionState = function(z, Y, k) {
    return P.H.useActionState(z, Y, k);
  }, be.useCallback = function(z, Y) {
    return P.H.useCallback(z, Y);
  }, be.useContext = function(z) {
    return P.H.useContext(z);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(z, Y) {
    return P.H.useDeferredValue(z, Y);
  }, be.useEffect = function(z, Y) {
    return P.H.useEffect(z, Y);
  }, be.useEffectEvent = function(z) {
    return P.H.useEffectEvent(z);
  }, be.useId = function() {
    return P.H.useId();
  }, be.useImperativeHandle = function(z, Y, k) {
    return P.H.useImperativeHandle(z, Y, k);
  }, be.useInsertionEffect = function(z, Y) {
    return P.H.useInsertionEffect(z, Y);
  }, be.useLayoutEffect = function(z, Y) {
    return P.H.useLayoutEffect(z, Y);
  }, be.useMemo = function(z, Y) {
    return P.H.useMemo(z, Y);
  }, be.useOptimistic = function(z, Y) {
    return P.H.useOptimistic(z, Y);
  }, be.useReducer = function(z, Y, k) {
    return P.H.useReducer(z, Y, k);
  }, be.useRef = function(z) {
    return P.H.useRef(z);
  }, be.useState = function(z) {
    return P.H.useState(z);
  }, be.useSyncExternalStore = function(z, Y, k) {
    return P.H.useSyncExternalStore(
      z,
      Y,
      k
    );
  }, be.useTransition = function() {
    return P.H.useTransition();
  }, be.version = "19.2.3", be;
}
var Pm;
function Oc() {
  return Pm || (Pm = 1, Fs.exports = F0()), Fs.exports;
}
var Ie = Oc();
const ag = /* @__PURE__ */ Eu(Ie);
var Ks = { exports: {} }, Ta = {}, Js = { exports: {} }, Is = {};
var ep;
function K0() {
  return ep || (ep = 1, (function(n) {
    function r(_, F) {
      var X = _.length;
      _.push(F);
      e: for (; 0 < X; ) {
        var xe = X - 1 >>> 1, E = _[xe];
        if (0 < c(E, F))
          _[xe] = F, _[X] = E, X = xe;
        else break e;
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
        e: for (var xe = 0, E = _.length, z = E >>> 1; xe < z; ) {
          var Y = 2 * (xe + 1) - 1, k = _[Y], W = Y + 1, fe = _[W];
          if (0 > c(k, X))
            W < E && 0 > c(fe, k) ? (_[xe] = fe, _[W] = X, xe = W) : (_[xe] = k, _[Y] = X, xe = Y);
          else if (W < E && 0 > c(fe, X))
            _[xe] = fe, _[W] = X, xe = W;
          else break e;
        }
      }
      return F;
    }
    function c(_, F) {
      var X = _.sortIndex - F.sortIndex;
      return X !== 0 ? X : _.id - F.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, m = h.now();
      n.unstable_now = function() {
        return h.now() - m;
      };
    }
    var p = [], d = [], b = 1, y = null, S = 3, x = !1, A = !1, R = !1, L = !1, D = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function le(_) {
      for (var F = a(d); F !== null; ) {
        if (F.callback === null) u(d);
        else if (F.startTime <= _)
          u(d), F.sortIndex = F.expirationTime, r(p, F);
        else break;
        F = a(d);
      }
    }
    function oe(_) {
      if (R = !1, le(_), !A)
        if (a(p) !== null)
          A = !0, B || (B = !0, ee());
        else {
          var F = a(d);
          F !== null && I(oe, F.startTime - _);
        }
    }
    var B = !1, P = -1, J = 5, me = -1;
    function U() {
      return L ? !0 : !(n.unstable_now() - me < J);
    }
    function ne() {
      if (L = !1, B) {
        var _ = n.unstable_now();
        me = _;
        var F = !0;
        try {
          e: {
            A = !1, R && (R = !1, Z(P), P = -1), x = !0;
            var X = S;
            try {
              t: {
                for (le(_), y = a(p); y !== null && !(y.expirationTime > _ && U()); ) {
                  var xe = y.callback;
                  if (typeof xe == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var E = xe(
                      y.expirationTime <= _
                    );
                    if (_ = n.unstable_now(), typeof E == "function") {
                      y.callback = E, le(_), F = !0;
                      break t;
                    }
                    y === a(p) && u(p), le(_);
                  } else u(p);
                  y = a(p);
                }
                if (y !== null) F = !0;
                else {
                  var z = a(d);
                  z !== null && I(
                    oe,
                    z.startTime - _
                  ), F = !1;
                }
              }
              break e;
            } finally {
              y = null, S = X, x = !1;
            }
            F = void 0;
          }
        } finally {
          F ? ee() : B = !1;
        }
      }
    }
    var ee;
    if (typeof H == "function")
      ee = function() {
        H(ne);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), ie = Ee.port2;
      Ee.port1.onmessage = ne, ee = function() {
        ie.postMessage(null);
      };
    } else
      ee = function() {
        D(ne, 0);
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
      return S;
    }, n.unstable_next = function(_) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = S;
      }
      var X = S;
      S = F;
      try {
        return _();
      } finally {
        S = X;
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
      var X = S;
      S = _;
      try {
        return F();
      } finally {
        S = X;
      }
    }, n.unstable_scheduleCallback = function(_, F, X) {
      var xe = n.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? xe + X : xe) : X = xe, _) {
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
      return E = X + E, _ = {
        id: b++,
        callback: F,
        priorityLevel: _,
        startTime: X,
        expirationTime: E,
        sortIndex: -1
      }, X > xe ? (_.sortIndex = X, r(d, _), a(p) === null && _ === a(d) && (R ? (Z(P), P = -1) : R = !0, I(oe, X - xe))) : (_.sortIndex = E, r(p, _), A || x || (A = !0, B || (B = !0, ee()))), _;
    }, n.unstable_shouldYield = U, n.unstable_wrapCallback = function(_) {
      var F = S;
      return function() {
        var X = S;
        S = F;
        try {
          return _.apply(this, arguments);
        } finally {
          S = X;
        }
      };
    };
  })(Is)), Is;
}
var tp;
function J0() {
  return tp || (tp = 1, Js.exports = K0()), Js.exports;
}
var Ws = { exports: {} }, bt = {};
var np;
function I0() {
  if (np) return bt;
  np = 1;
  var n = Oc();
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
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function f(p, d, b) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: p,
      containerInfo: d,
      implementation: b
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, d) {
    if (p === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, bt.createPortal = function(p, d) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(r(299));
    return f(p, d, null, b);
  }, bt.flushSync = function(p) {
    var d = h.T, b = u.p;
    try {
      if (h.T = null, u.p = 2, p) return p();
    } finally {
      h.T = d, u.p = b, u.d.f();
    }
  }, bt.preconnect = function(p, d) {
    typeof p == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, u.d.C(p, d));
  }, bt.prefetchDNS = function(p) {
    typeof p == "string" && u.d.D(p);
  }, bt.preinit = function(p, d) {
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
  }, bt.preinitModule = function(p, d) {
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
  }, bt.preload = function(p, d) {
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
  }, bt.preloadModule = function(p, d) {
    if (typeof p == "string")
      if (d) {
        var b = m(d.as, d.crossOrigin);
        u.d.m(p, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: b,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else u.d.m(p);
  }, bt.requestFormReset = function(p) {
    u.d.r(p);
  }, bt.unstable_batchedUpdates = function(p, d) {
    return p(d);
  }, bt.useFormState = function(p, d, b) {
    return h.H.useFormState(p, d, b);
  }, bt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, bt.version = "19.2.3", bt;
}
var lp;
function W0() {
  if (lp) return Ws.exports;
  lp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Ws.exports = I0(), Ws.exports;
}
var ip;
function $0() {
  if (ip) return Ta;
  ip = 1;
  var n = J0(), r = Oc(), a = W0();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e)
      throw Error(u(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var l = e, i = t; ; ) {
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
          if (s === l) return p(o), e;
          if (s === i) return p(o), t;
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
    return l.stateNode.current === l ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), U = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ne = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ee = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case D:
        return "Profiler";
      case L:
        return "StrictMode";
      case oe:
        return "Suspense";
      case B:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case H:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : ie(e.type) || "Memo";
        case J:
          t = e._payload, e = e._init;
          try {
            return ie(e(t));
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
  }, xe = [], E = -1;
  function z(e) {
    return { current: e };
  }
  function Y(e) {
    0 > E || (e.current = xe[E], xe[E] = null, E--);
  }
  function k(e, t) {
    E++, xe[E] = e.current, e.current = t;
  }
  var W = z(null), fe = z(null), ce = z(null), he = z(null);
  function Ve(e, t) {
    switch (k(ce, t), k(fe, e), k(W, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = vm(t), e = xm(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Y(W), k(W, e);
  }
  function Re() {
    Y(W), Y(fe), Y(ce);
  }
  function ht(e) {
    e.memoizedState !== null && k(he, e);
    var t = W.current, l = xm(t, e.type);
    t !== l && (k(fe, e), k(W, l));
  }
  function Lt(e) {
    fe.current === e && (Y(W), Y(fe)), he.current === e && (Y(he), ka._currentValue = X);
  }
  var cn, Va;
  function yn(e) {
    if (cn === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        cn = t && t[1] || "", Va = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + cn + e + Va;
  }
  var Ul = !1;
  function jl(e, t) {
    if (!e || Ul) return "";
    Ul = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
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
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (j) {
                  N = j;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                N = j;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
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
        var w = g.split(`
`), M = v.split(`
`);
        for (o = i = 0; i < w.length && !w[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < M.length && !M[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === w.length || o === M.length)
          for (i = w.length - 1, o = M.length - 1; 1 <= i && 0 <= o && w[i] !== M[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (w[i] !== M[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || w[i] !== M[o]) {
                  var q = `
` + w[i].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      Ul = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? yn(l) : "";
  }
  function Qa(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return yn(e.type);
      case 16:
        return yn("Lazy");
      case 13:
        return e.child !== t && t !== null ? yn("Suspense Fallback") : yn("Suspense");
      case 19:
        return yn("SuspenseList");
      case 0:
      case 15:
        return jl(e.type, !1);
      case 11:
        return jl(e.type.render, !1);
      case 1:
        return jl(e.type, !0);
      case 31:
        return yn("Activity");
      default:
        return "";
    }
  }
  function Xa(e) {
    try {
      var t = "", l = null;
      do
        t += Qa(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Bl = Object.prototype.hasOwnProperty, Hl = n.unstable_scheduleCallback, Ni = n.unstable_cancelCallback, _u = n.unstable_shouldYield, Ou = n.unstable_requestPaint, St = n.unstable_now, Mu = n.unstable_getCurrentPriorityLevel, G = n.unstable_ImmediatePriority, $ = n.unstable_UserBlockingPriority, ye = n.unstable_NormalPriority, Ae = n.unstable_LowPriority, je = n.unstable_IdlePriority, Ut = n.log, bn = n.unstable_setDisableYieldValue, kt = null, ut = null;
  function At(e) {
    if (typeof Ut == "function" && bn(e), ut && typeof ut.setStrictMode == "function")
      try {
        ut.setStrictMode(kt, e);
      } catch {
      }
  }
  var Qe = Math.clz32 ? Math.clz32 : Oy, Hn = Math.log, an = Math.LN2;
  function Oy(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hn(e) / an | 0) | 0;
  }
  var Za = 256, Fa = 262144, Ka = 4194304;
  function dl(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function Ja(e, t, l) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, s = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~s, i !== 0 ? o = dl(i) : (g &= v, g !== 0 ? o = dl(g) : l || (l = v & ~e, l !== 0 && (o = dl(l))))) : (v = i & ~s, v !== 0 ? o = dl(v) : g !== 0 ? o = dl(g) : l || (l = i & ~e, l !== 0 && (o = dl(l)))), o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o, l = t & -t, s >= l || s === 32 && (l & 4194048) !== 0) ? t : o;
  }
  function Li(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function My(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
    var e = Ka;
    return Ka <<= 1, (Ka & 62914560) === 0 && (Ka = 4194304), e;
  }
  function Ru(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ui(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ry(e, t, l, i, o, s) {
    var g = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var v = e.entanglements, w = e.expirationTimes, M = e.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var q = 31 - Qe(l), Q = 1 << q;
      v[q] = 0, w[q] = -1;
      var N = M[q];
      if (N !== null)
        for (M[q] = null, q = 0; q < N.length; q++) {
          var j = N[q];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~Q;
    }
    i !== 0 && ef(e, i, 0), s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(g & ~t));
  }
  function ef(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Qe(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | l & 261930;
  }
  function tf(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var i = 31 - Qe(l), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), l &= ~o;
    }
  }
  function nf(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Nu(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Nu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Lu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function lf() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Vm(e.type));
  }
  function af(e, t) {
    var l = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = l;
    }
  }
  var qn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + qn, zt = "__reactProps$" + qn, ql = "__reactContainer$" + qn, Uu = "__reactEvents$" + qn, Ny = "__reactListeners$" + qn, Ly = "__reactHandles$" + qn, rf = "__reactResources$" + qn, ji = "__reactMarker$" + qn;
  function ju(e) {
    delete e[dt], delete e[zt], delete e[Uu], delete e[Ny], delete e[Ly];
  }
  function Yl(e) {
    var t = e[dt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[ql] || l[dt]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Tm(e); e !== null; ) {
            if (l = e[dt]) return l;
            e = Tm(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Gl(e) {
    if (e = e[dt] || e[ql]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Bi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Vl(e) {
    var t = e[rf];
    return t || (t = e[rf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[ji] = !0;
  }
  var uf = /* @__PURE__ */ new Set(), of = {};
  function ml(e, t) {
    Ql(e, t), Ql(e + "Capture", t);
  }
  function Ql(e, t) {
    for (of[e] = t, e = 0; e < t.length; e++)
      uf.add(t[e]);
  }
  var Uy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), sf = {}, cf = {};
  function jy(e) {
    return Bl.call(cf, e) ? !0 : Bl.call(sf, e) ? !1 : Uy.test(e) ? cf[e] = !0 : (sf[e] = !0, !1);
  }
  function Ia(e, t, l) {
    if (jy(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Wa(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function vn(e, t, l, i) {
    if (i === null) e.removeAttribute(l);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + i);
    }
  }
  function Ft(e) {
    switch (typeof e) {
      case "bigint":
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
  function ff(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function By(e, t, l) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, s = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(g) {
          l = "" + g, s.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(g) {
          l = "" + g;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Bu(e) {
    if (!e._valueTracker) {
      var t = ff(e) ? "checked" : "value";
      e._valueTracker = By(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function hf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), i = "";
    return e && (i = ff(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== l ? (t.setValue(e), !0) : !1;
  }
  function $a(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hy = /[\n"\\]/g;
  function Kt(e) {
    return e.replace(
      Hy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hu(e, t, l, i, o, s, g, v) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ft(t)) : e.value !== "" + Ft(t) && (e.value = "" + Ft(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? qu(e, g, Ft(t)) : l != null ? qu(e, g, Ft(l)) : i != null && e.removeAttribute("value"), o == null && s != null && (e.defaultChecked = !!s), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Ft(v) : e.removeAttribute("name");
  }
  function df(e, t, l, i, o, s, g, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || l != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        Bu(e);
        return;
      }
      l = l != null ? "" + Ft(l) : "", t = t != null ? "" + Ft(t) : l, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = v ? e.checked : !!i, e.defaultChecked = !!i, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), Bu(e);
  }
  function qu(e, t, l) {
    t === "number" && $a(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Xl(e, t, l, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < l.length; o++)
        t["$" + l[o]] = !0;
      for (l = 0; l < e.length; l++)
        o = t.hasOwnProperty("$" + e[l].value), e[l].selected !== o && (e[l].selected = o), o && i && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ft(l), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === l) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mf(e, t, l) {
    if (t != null && (t = "" + Ft(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ft(l) : "";
  }
  function pf(e, t, l, i) {
    if (t == null) {
      if (i != null) {
        if (l != null) throw Error(u(92));
        if (I(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        l = i;
      }
      l == null && (l = ""), t = l;
    }
    l = Ft(t), e.defaultValue = l, i = e.textContent, i === l && i !== "" && i !== null && (e.value = i), Bu(e);
  }
  function Zl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gf(e, t, l) {
    var i = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, l) : typeof l != "number" || l === 0 || qy.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function yf(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, l != null) {
      for (var i in l)
        !l.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var o in t)
        i = t[o], t.hasOwnProperty(o) && l[o] !== i && gf(e, o, i);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && gf(e, s, t[s]);
  }
  function Yu(e) {
    if (e.indexOf("-") === -1) return !1;
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
  function Pa(e) {
    return Gy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function xn() {
  }
  var Gu = null;
  function Vu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fl = null, Kl = null;
  function bf(e) {
    var t = Gl(e);
    if (t && (e = t.stateNode)) {
      var l = e[zt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Hu(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Kt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var i = l[t];
              if (i !== e && i.form === e.form) {
                var o = i[zt] || null;
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
            for (t = 0; t < l.length; t++)
              i = l[t], i.form === e.form && hf(i);
          }
          break e;
        case "textarea":
          mf(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Xl(e, !!l.multiple, t, !1);
      }
    }
  }
  var Qu = !1;
  function vf(e, t, l) {
    if (Qu) return e(t, l);
    Qu = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (Qu = !1, (Fl !== null || Kl !== null) && (qr(), Fl && (t = Fl, e = Kl, Kl = Fl = null, bf(t), e)))
        for (t = 0; t < e.length; t++) bf(e[t]);
    }
  }
  function Hi(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var i = l[zt] || null;
    if (i === null) return null;
    l = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        u(231, t, typeof l)
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
  var Yn = null, Zu = null, er = null;
  function xf() {
    if (er) return er;
    var e, t = Zu, l = t.length, i, o = "value" in Yn ? Yn.value : Yn.textContent, s = o.length;
    for (e = 0; e < l && t[e] === o[e]; e++) ;
    var g = l - e;
    for (i = 1; i <= g && t[l - i] === o[s - i]; i++) ;
    return er = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function tr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function nr() {
    return !0;
  }
  function Sf() {
    return !1;
  }
  function Tt(e) {
    function t(l, i, o, s, g) {
      this._reactName = l, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = g, this.currentTarget = null;
      for (var v in e)
        e.hasOwnProperty(v) && (l = e[v], this[v] = l ? l(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? nr : Sf, this.isPropagationStopped = Sf, this;
    }
    return y(t.prototype, {
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
    }), t;
  }
  var pl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, lr = Tt(pl), Yi = y({}, pl, { view: 0, detail: 0 }), Vy = Tt(Yi), Fu, Ku, Gi, ir = y({}, Yi, {
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
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (Fu = e.screenX - Gi.screenX, Ku = e.screenY - Gi.screenY) : Ku = Fu = 0, Gi = e), Fu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ku;
    }
  }), kf = Tt(ir), Qy = y({}, ir, { dataTransfer: 0 }), Xy = Tt(Qy), Zy = y({}, Yi, { relatedTarget: 0 }), Ju = Tt(Zy), Fy = y({}, pl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ky = Tt(Fy), Jy = y({}, pl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Iy = Tt(Jy), Wy = y({}, pl, { data: 0 }), Ef = Tt(Wy), $y = {
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
  }, eb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function tb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = eb[e]) ? !!t[e] : !1;
  }
  function Iu() {
    return tb;
  }
  var nb = y({}, Yi, {
    key: function(e) {
      if (e.key) {
        var t = $y[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Py[e.keyCode] || "Unidentified" : "";
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
    charCode: function(e) {
      return e.type === "keypress" ? tr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), lb = Tt(nb), ib = y({}, ir, {
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
  }), wf = Tt(ib), ab = y({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu
  }), rb = Tt(ab), ub = y({}, pl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = Tt(ub), sb = y({}, ir, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cb = Tt(sb), fb = y({}, pl, {
    newState: 0,
    oldState: 0
  }), hb = Tt(fb), db = [9, 13, 27, 32], Wu = Sn && "CompositionEvent" in window, Vi = null;
  Sn && "documentMode" in document && (Vi = document.documentMode);
  var mb = Sn && "TextEvent" in window && !Vi, Af = Sn && (!Wu || Vi && 8 < Vi && 11 >= Vi), zf = " ", Tf = !1;
  function Cf(e, t) {
    switch (e) {
      case "keyup":
        return db.indexOf(t.keyCode) !== -1;
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
  function Df(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jl = !1;
  function pb(e, t) {
    switch (e) {
      case "compositionend":
        return Df(t);
      case "keypress":
        return t.which !== 32 ? null : (Tf = !0, zf);
      case "textInput":
        return e = t.data, e === zf && Tf ? null : e;
      default:
        return null;
    }
  }
  function gb(e, t) {
    if (Jl)
      return e === "compositionend" || !Wu && Cf(e, t) ? (e = xf(), er = Zu = Yn = null, Jl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Af && t.locale !== "ko" ? null : t.data;
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
  function _f(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yb[e.type] : t === "textarea";
  }
  function Of(e, t, l, i) {
    Fl ? Kl ? Kl.push(i) : Kl = [i] : Fl = i, t = Fr(t, "onChange"), 0 < t.length && (l = new lr(
      "onChange",
      "change",
      null,
      l,
      i
    ), e.push({ event: l, listeners: t }));
  }
  var Qi = null, Xi = null;
  function bb(e) {
    dm(e, 0);
  }
  function ar(e) {
    var t = Bi(e);
    if (hf(t)) return e;
  }
  function Mf(e, t) {
    if (e === "change") return t;
  }
  var Rf = !1;
  if (Sn) {
    var $u;
    if (Sn) {
      var Pu = "oninput" in document;
      if (!Pu) {
        var Nf = document.createElement("div");
        Nf.setAttribute("oninput", "return;"), Pu = typeof Nf.oninput == "function";
      }
      $u = Pu;
    } else $u = !1;
    Rf = $u && (!document.documentMode || 9 < document.documentMode);
  }
  function Lf() {
    Qi && (Qi.detachEvent("onpropertychange", Uf), Xi = Qi = null);
  }
  function Uf(e) {
    if (e.propertyName === "value" && ar(Xi)) {
      var t = [];
      Of(
        t,
        Xi,
        e,
        Vu(e)
      ), vf(bb, t);
    }
  }
  function vb(e, t, l) {
    e === "focusin" ? (Lf(), Qi = t, Xi = l, Qi.attachEvent("onpropertychange", Uf)) : e === "focusout" && Lf();
  }
  function xb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ar(Xi);
  }
  function Sb(e, t) {
    if (e === "click") return ar(t);
  }
  function kb(e, t) {
    if (e === "input" || e === "change")
      return ar(t);
  }
  function Eb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var jt = typeof Object.is == "function" ? Object.is : Eb;
  function Zi(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), i = Object.keys(t);
    if (l.length !== i.length) return !1;
    for (i = 0; i < l.length; i++) {
      var o = l[i];
      if (!Bl.call(t, o) || !jt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function jf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bf(e, t) {
    var l = jf(e);
    e = 0;
    for (var i; l; ) {
      if (l.nodeType === 3) {
        if (i = e + l.textContent.length, e <= t && i >= t)
          return { node: l, offset: t - e };
        e = i;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = jf(l);
    }
  }
  function Hf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function qf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = $a(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = $a(e.document);
    }
    return t;
  }
  function eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var wb = Sn && "documentMode" in document && 11 >= document.documentMode, Il = null, to = null, Fi = null, no = !1;
  function Yf(e, t, l) {
    var i = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    no || Il == null || Il !== $a(i) || (i = Il, "selectionStart" in i && eo(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Fi && Zi(Fi, i) || (Fi = i, i = Fr(to, "onSelect"), 0 < i.length && (t = new lr(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: i }), t.target = Il)));
  }
  function gl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Wl = {
    animationend: gl("Animation", "AnimationEnd"),
    animationiteration: gl("Animation", "AnimationIteration"),
    animationstart: gl("Animation", "AnimationStart"),
    transitionrun: gl("Transition", "TransitionRun"),
    transitionstart: gl("Transition", "TransitionStart"),
    transitioncancel: gl("Transition", "TransitionCancel"),
    transitionend: gl("Transition", "TransitionEnd")
  }, lo = {}, Gf = {};
  Sn && (Gf = document.createElement("div").style, "AnimationEvent" in window || (delete Wl.animationend.animation, delete Wl.animationiteration.animation, delete Wl.animationstart.animation), "TransitionEvent" in window || delete Wl.transitionend.transition);
  function yl(e) {
    if (lo[e]) return lo[e];
    if (!Wl[e]) return e;
    var t = Wl[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Gf)
        return lo[e] = t[l];
    return e;
  }
  var Vf = yl("animationend"), Qf = yl("animationiteration"), Xf = yl("animationstart"), Ab = yl("transitionrun"), zb = yl("transitionstart"), Tb = yl("transitioncancel"), Zf = yl("transitionend"), Ff = /* @__PURE__ */ new Map(), io = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  io.push("scrollEnd");
  function rn(e, t) {
    Ff.set(e, t), ml(t, [e]);
  }
  var rr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Jt = [], $l = 0, ao = 0;
  function ur() {
    for (var e = $l, t = ao = $l = 0; t < e; ) {
      var l = Jt[t];
      Jt[t++] = null;
      var i = Jt[t];
      Jt[t++] = null;
      var o = Jt[t];
      Jt[t++] = null;
      var s = Jt[t];
      if (Jt[t++] = null, i !== null && o !== null) {
        var g = i.pending;
        g === null ? o.next = o : (o.next = g.next, g.next = o), i.pending = o;
      }
      s !== 0 && Kf(l, o, s);
    }
  }
  function or(e, t, l, i) {
    Jt[$l++] = e, Jt[$l++] = t, Jt[$l++] = l, Jt[$l++] = i, ao |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function ro(e, t, l, i) {
    return or(e, t, l, i), sr(e);
  }
  function bl(e, t) {
    return or(e, null, null, t), sr(e);
  }
  function Kf(e, t, l) {
    e.lanes |= l;
    var i = e.alternate;
    i !== null && (i.lanes |= l);
    for (var o = !1, s = e.return; s !== null; )
      s.childLanes |= l, i = s.alternate, i !== null && (i.childLanes |= l), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (o = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, o && t !== null && (o = 31 - Qe(l), e = s.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = l | 536870912), s) : null;
  }
  function sr(e) {
    if (50 < pa)
      throw pa = 0, gs = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pl = {};
  function Cb(e, t, l, i) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Bt(e, t, l, i) {
    return new Cb(e, t, l, i);
  }
  function uo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kn(e, t) {
    var l = e.alternate;
    return l === null ? (l = Bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Jf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function cr(e, t, l, i, o, s) {
    var g = 0;
    if (i = e, typeof e == "function") uo(e) && (g = 1);
    else if (typeof e == "string")
      g = R0(
        e,
        l,
        W.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case me:
          return e = Bt(31, l, t, o), e.elementType = me, e.lanes = s, e;
        case R:
          return vl(l.children, o, s, t);
        case L:
          g = 8, o |= 24;
          break;
        case D:
          return e = Bt(12, l, t, o | 2), e.elementType = D, e.lanes = s, e;
        case oe:
          return e = Bt(13, l, t, o), e.elementType = oe, e.lanes = s, e;
        case B:
          return e = Bt(19, l, t, o), e.elementType = B, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
                g = 10;
                break e;
              case Z:
                g = 9;
                break e;
              case le:
                g = 11;
                break e;
              case P:
                g = 14;
                break e;
              case J:
                g = 16, i = null;
                break e;
            }
          g = 29, l = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Bt(g, l, t, o), t.elementType = e, t.type = i, t.lanes = s, t;
  }
  function vl(e, t, l, i) {
    return e = Bt(7, e, i, t), e.lanes = l, e;
  }
  function oo(e, t, l) {
    return e = Bt(6, e, null, t), e.lanes = l, e;
  }
  function If(e) {
    var t = Bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function so(e, t, l) {
    return t = Bt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Wf = /* @__PURE__ */ new WeakMap();
  function It(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Wf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Xa(t)
      }, Wf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Xa(t)
    };
  }
  var ei = [], ti = 0, fr = null, Ki = 0, Wt = [], $t = 0, Gn = null, fn = 1, hn = "";
  function En(e, t) {
    ei[ti++] = Ki, ei[ti++] = fr, fr = e, Ki = t;
  }
  function $f(e, t, l) {
    Wt[$t++] = fn, Wt[$t++] = hn, Wt[$t++] = Gn, Gn = e;
    var i = fn;
    e = hn;
    var o = 32 - Qe(i) - 1;
    i &= ~(1 << o), l += 1;
    var s = 32 - Qe(t) + o;
    if (30 < s) {
      var g = o - o % 5;
      s = (i & (1 << g) - 1).toString(32), i >>= g, o -= g, fn = 1 << 32 - Qe(t) + o | l << o | i, hn = s + e;
    } else
      fn = 1 << s | l << o | i, hn = e;
  }
  function co(e) {
    e.return !== null && (En(e, 1), $f(e, 1, 0));
  }
  function fo(e) {
    for (; e === fr; )
      fr = ei[--ti], ei[ti] = null, Ki = ei[--ti], ei[ti] = null;
    for (; e === Gn; )
      Gn = Wt[--$t], Wt[$t] = null, hn = Wt[--$t], Wt[$t] = null, fn = Wt[--$t], Wt[$t] = null;
  }
  function Pf(e, t) {
    Wt[$t++] = fn, Wt[$t++] = hn, Wt[$t++] = Gn, fn = t.id, hn = t.overflow, Gn = e;
  }
  var mt = null, Ke = null, Oe = !1, Vn = null, Pt = !1, ho = Error(u(519));
  function Qn(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ji(It(t, e)), ho;
  }
  function eh(e) {
    var t = e.stateNode, l = e.type, i = e.memoizedProps;
    switch (t[dt] = e, t[zt] = i, l) {
      case "dialog":
        Te("cancel", t), Te("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Te("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ya.length; l++)
          Te(ya[l], t);
        break;
      case "source":
        Te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Te("error", t), Te("load", t);
        break;
      case "details":
        Te("toggle", t);
        break;
      case "input":
        Te("invalid", t), df(
          t,
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
        Te("invalid", t);
        break;
      case "textarea":
        Te("invalid", t), pf(t, i.value, i.defaultValue, i.children);
    }
    l = i.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || i.suppressHydrationWarning === !0 || ym(t.textContent, l) ? (i.popover != null && (Te("beforetoggle", t), Te("toggle", t)), i.onScroll != null && Te("scroll", t), i.onScrollEnd != null && Te("scrollend", t), i.onClick != null && (t.onclick = xn), t = !0) : t = !1, t || Qn(e, !0);
  }
  function th(e) {
    for (mt = e.return; mt; )
      switch (mt.tag) {
        case 5:
        case 31:
        case 13:
          Pt = !1;
          return;
        case 27:
        case 3:
          Pt = !0;
          return;
        default:
          mt = mt.return;
      }
  }
  function ni(e) {
    if (e !== mt) return !1;
    if (!Oe) return th(e), Oe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Os(e.type, e.memoizedProps)), l = !l), l && Ke && Qn(e), th(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ke = zm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ke = zm(e);
    } else
      t === 27 ? (t = Ke, il(e.type) ? (e = Us, Us = null, Ke = e) : Ke = t) : Ke = mt ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xl() {
    Ke = mt = null, Oe = !1;
  }
  function mo() {
    var e = Vn;
    return e !== null && (Ot === null ? Ot = e : Ot.push.apply(
      Ot,
      e
    ), Vn = null), e;
  }
  function Ji(e) {
    Vn === null ? Vn = [e] : Vn.push(e);
  }
  var po = z(null), Sl = null, wn = null;
  function Xn(e, t, l) {
    k(po, t._currentValue), t._currentValue = l;
  }
  function An(e) {
    e._currentValue = po.current, Y(po);
  }
  function go(e, t, l) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function yo(e, t, l, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var s = o.dependencies;
      if (s !== null) {
        var g = o.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var v = s;
          s = o;
          for (var w = 0; w < t.length; w++)
            if (v.context === t[w]) {
              s.lanes |= l, v = s.alternate, v !== null && (v.lanes |= l), go(
                s.return,
                l,
                e
              ), i || (g = null);
              break e;
            }
          s = v.next;
        }
      } else if (o.tag === 18) {
        if (g = o.return, g === null) throw Error(u(341));
        g.lanes |= l, s = g.alternate, s !== null && (s.lanes |= l), go(g, l, e), g = null;
      } else g = o.child;
      if (g !== null) g.return = o;
      else
        for (g = o; g !== null; ) {
          if (g === e) {
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
  function li(e, t, l, i) {
    e = null;
    for (var o = t, s = !1; o !== null; ) {
      if (!s) {
        if ((o.flags & 524288) !== 0) s = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(u(387));
        if (g = g.memoizedProps, g !== null) {
          var v = o.type;
          jt(o.pendingProps.value, g.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (o === he.current) {
        if (g = o.alternate, g === null) throw Error(u(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(ka) : e = [ka]);
      }
      o = o.return;
    }
    e !== null && yo(
      t,
      e,
      l,
      i
    ), t.flags |= 262144;
  }
  function hr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!jt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function kl(e) {
    Sl = e, wn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return nh(Sl, e);
  }
  function dr(e, t) {
    return Sl === null && kl(e), nh(e, t);
  }
  function nh(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, wn === null) {
      if (e === null) throw Error(u(308));
      wn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else wn = wn.next = t;
    return l;
  }
  var Db = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, _b = n.unstable_scheduleCallback, Ob = n.unstable_NormalPriority, nt = {
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
  function Ii(e) {
    e.refCount--, e.refCount === 0 && _b(Ob, function() {
      e.controller.abort();
    });
  }
  var Wi = null, vo = 0, ii = 0, ai = null;
  function Mb(e, t) {
    if (Wi === null) {
      var l = Wi = [];
      vo = 0, ii = ks(), ai = {
        status: "pending",
        value: void 0,
        then: function(i) {
          l.push(i);
        }
      };
    }
    return vo++, t.then(lh, lh), t;
  }
  function lh() {
    if (--vo === 0 && Wi !== null) {
      ai !== null && (ai.status = "fulfilled");
      var e = Wi;
      Wi = null, ii = 0, ai = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Rb(e, t) {
    var l = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        l.push(o);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var o = 0; o < l.length; o++) (0, l[o])(t);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < l.length; o++)
          (0, l[o])(void 0);
      }
    ), i;
  }
  var ih = _.S;
  _.S = function(e, t) {
    Yd = St(), typeof t == "object" && t !== null && typeof t.then == "function" && Mb(e, t), ih !== null && ih(e, t);
  };
  var El = z(null);
  function xo() {
    var e = El.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function mr(e, t) {
    t === null ? k(El, El.current) : k(El, t.pool);
  }
  function ah() {
    var e = xo();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var ri = Error(u(460)), So = Error(u(474)), pr = Error(u(542)), gr = { then: function() {
  } };
  function rh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function uh(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(xn, xn), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, sh(e), e;
      default:
        if (typeof t.status == "string") t.then(xn, xn);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = i;
              }
            },
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = i;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, sh(e), e;
        }
        throw Al = t, ri;
    }
  }
  function wl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Al = l, ri) : l;
    }
  }
  var Al = null;
  function oh() {
    if (Al === null) throw Error(u(459));
    var e = Al;
    return Al = null, e;
  }
  function sh(e) {
    if (e === ri || e === pr)
      throw Error(u(483));
  }
  var ui = null, $i = 0;
  function yr(e) {
    var t = $i;
    return $i += 1, ui === null && (ui = []), uh(ui, e, t);
  }
  function Pi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function br(e, t) {
    throw t.$$typeof === S ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ch(e) {
    function t(C, T) {
      if (e) {
        var O = C.deletions;
        O === null ? (C.deletions = [T], C.flags |= 16) : O.push(T);
      }
    }
    function l(C, T) {
      if (!e) return null;
      for (; T !== null; )
        t(C, T), T = T.sibling;
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
    function s(C, T, O) {
      return C.index = O, e ? (O = C.alternate, O !== null ? (O = O.index, O < T ? (C.flags |= 67108866, T) : O) : (C.flags |= 67108866, T)) : (C.flags |= 1048576, T);
    }
    function g(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, T, O, V) {
      return T === null || T.tag !== 6 ? (T = oo(O, C.mode, V), T.return = C, T) : (T = o(T, O), T.return = C, T);
    }
    function w(C, T, O, V) {
      var de = O.type;
      return de === R ? q(
        C,
        T,
        O.props.children,
        V,
        O.key
      ) : T !== null && (T.elementType === de || typeof de == "object" && de !== null && de.$$typeof === J && wl(de) === T.type) ? (T = o(T, O.props), Pi(T, O), T.return = C, T) : (T = cr(
        O.type,
        O.key,
        O.props,
        null,
        C.mode,
        V
      ), Pi(T, O), T.return = C, T);
    }
    function M(C, T, O, V) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = so(O, C.mode, V), T.return = C, T) : (T = o(T, O.children || []), T.return = C, T);
    }
    function q(C, T, O, V, de) {
      return T === null || T.tag !== 7 ? (T = vl(
        O,
        C.mode,
        V,
        de
      ), T.return = C, T) : (T = o(T, O), T.return = C, T);
    }
    function Q(C, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = oo(
          "" + T,
          C.mode,
          O
        ), T.return = C, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case x:
            return O = cr(
              T.type,
              T.key,
              T.props,
              null,
              C.mode,
              O
            ), Pi(O, T), O.return = C, O;
          case A:
            return T = so(
              T,
              C.mode,
              O
            ), T.return = C, T;
          case J:
            return T = wl(T), Q(C, T, O);
        }
        if (I(T) || ee(T))
          return T = vl(
            T,
            C.mode,
            O,
            null
          ), T.return = C, T;
        if (typeof T.then == "function")
          return Q(C, yr(T), O);
        if (T.$$typeof === H)
          return Q(
            C,
            dr(C, T),
            O
          );
        br(C, T);
      }
      return null;
    }
    function N(C, T, O, V) {
      var de = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return de !== null ? null : v(C, T, "" + O, V);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return O.key === de ? w(C, T, O, V) : null;
          case A:
            return O.key === de ? M(C, T, O, V) : null;
          case J:
            return O = wl(O), N(C, T, O, V);
        }
        if (I(O) || ee(O))
          return de !== null ? null : q(C, T, O, V, null);
        if (typeof O.then == "function")
          return N(
            C,
            T,
            yr(O),
            V
          );
        if (O.$$typeof === H)
          return N(
            C,
            T,
            dr(C, O),
            V
          );
        br(C, O);
      }
      return null;
    }
    function j(C, T, O, V, de) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return C = C.get(O) || null, v(T, C, "" + V, de);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case x:
            return C = C.get(
              V.key === null ? O : V.key
            ) || null, w(T, C, V, de);
          case A:
            return C = C.get(
              V.key === null ? O : V.key
            ) || null, M(T, C, V, de);
          case J:
            return V = wl(V), j(
              C,
              T,
              O,
              V,
              de
            );
        }
        if (I(V) || ee(V))
          return C = C.get(O) || null, q(T, C, V, de, null);
        if (typeof V.then == "function")
          return j(
            C,
            T,
            O,
            yr(V),
            de
          );
        if (V.$$typeof === H)
          return j(
            C,
            T,
            O,
            dr(T, V),
            de
          );
        br(T, V);
      }
      return null;
    }
    function ae(C, T, O, V) {
      for (var de = null, Ne = null, se = T, Se = T = 0, _e = null; se !== null && Se < O.length; Se++) {
        se.index > Se ? (_e = se, se = null) : _e = se.sibling;
        var Le = N(
          C,
          se,
          O[Se],
          V
        );
        if (Le === null) {
          se === null && (se = _e);
          break;
        }
        e && se && Le.alternate === null && t(C, se), T = s(Le, T, Se), Ne === null ? de = Le : Ne.sibling = Le, Ne = Le, se = _e;
      }
      if (Se === O.length)
        return l(C, se), Oe && En(C, Se), de;
      if (se === null) {
        for (; Se < O.length; Se++)
          se = Q(C, O[Se], V), se !== null && (T = s(
            se,
            T,
            Se
          ), Ne === null ? de = se : Ne.sibling = se, Ne = se);
        return Oe && En(C, Se), de;
      }
      for (se = i(se); Se < O.length; Se++)
        _e = j(
          se,
          C,
          Se,
          O[Se],
          V
        ), _e !== null && (e && _e.alternate !== null && se.delete(
          _e.key === null ? Se : _e.key
        ), T = s(
          _e,
          T,
          Se
        ), Ne === null ? de = _e : Ne.sibling = _e, Ne = _e);
      return e && se.forEach(function(sl) {
        return t(C, sl);
      }), Oe && En(C, Se), de;
    }
    function ge(C, T, O, V) {
      if (O == null) throw Error(u(151));
      for (var de = null, Ne = null, se = T, Se = T = 0, _e = null, Le = O.next(); se !== null && !Le.done; Se++, Le = O.next()) {
        se.index > Se ? (_e = se, se = null) : _e = se.sibling;
        var sl = N(C, se, Le.value, V);
        if (sl === null) {
          se === null && (se = _e);
          break;
        }
        e && se && sl.alternate === null && t(C, se), T = s(sl, T, Se), Ne === null ? de = sl : Ne.sibling = sl, Ne = sl, se = _e;
      }
      if (Le.done)
        return l(C, se), Oe && En(C, Se), de;
      if (se === null) {
        for (; !Le.done; Se++, Le = O.next())
          Le = Q(C, Le.value, V), Le !== null && (T = s(Le, T, Se), Ne === null ? de = Le : Ne.sibling = Le, Ne = Le);
        return Oe && En(C, Se), de;
      }
      for (se = i(se); !Le.done; Se++, Le = O.next())
        Le = j(se, C, Se, Le.value, V), Le !== null && (e && Le.alternate !== null && se.delete(Le.key === null ? Se : Le.key), T = s(Le, T, Se), Ne === null ? de = Le : Ne.sibling = Le, Ne = Le);
      return e && se.forEach(function(Q0) {
        return t(C, Q0);
      }), Oe && En(C, Se), de;
    }
    function Ge(C, T, O, V) {
      if (typeof O == "object" && O !== null && O.type === R && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            e: {
              for (var de = O.key; T !== null; ) {
                if (T.key === de) {
                  if (de = O.type, de === R) {
                    if (T.tag === 7) {
                      l(
                        C,
                        T.sibling
                      ), V = o(
                        T,
                        O.props.children
                      ), V.return = C, C = V;
                      break e;
                    }
                  } else if (T.elementType === de || typeof de == "object" && de !== null && de.$$typeof === J && wl(de) === T.type) {
                    l(
                      C,
                      T.sibling
                    ), V = o(T, O.props), Pi(V, O), V.return = C, C = V;
                    break e;
                  }
                  l(C, T);
                  break;
                } else t(C, T);
                T = T.sibling;
              }
              O.type === R ? (V = vl(
                O.props.children,
                C.mode,
                V,
                O.key
              ), V.return = C, C = V) : (V = cr(
                O.type,
                O.key,
                O.props,
                null,
                C.mode,
                V
              ), Pi(V, O), V.return = C, C = V);
            }
            return g(C);
          case A:
            e: {
              for (de = O.key; T !== null; ) {
                if (T.key === de)
                  if (T.tag === 4 && T.stateNode.containerInfo === O.containerInfo && T.stateNode.implementation === O.implementation) {
                    l(
                      C,
                      T.sibling
                    ), V = o(T, O.children || []), V.return = C, C = V;
                    break e;
                  } else {
                    l(C, T);
                    break;
                  }
                else t(C, T);
                T = T.sibling;
              }
              V = so(O, C.mode, V), V.return = C, C = V;
            }
            return g(C);
          case J:
            return O = wl(O), Ge(
              C,
              T,
              O,
              V
            );
        }
        if (I(O))
          return ae(
            C,
            T,
            O,
            V
          );
        if (ee(O)) {
          if (de = ee(O), typeof de != "function") throw Error(u(150));
          return O = de.call(O), ge(
            C,
            T,
            O,
            V
          );
        }
        if (typeof O.then == "function")
          return Ge(
            C,
            T,
            yr(O),
            V
          );
        if (O.$$typeof === H)
          return Ge(
            C,
            T,
            dr(C, O),
            V
          );
        br(C, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (l(C, T.sibling), V = o(T, O), V.return = C, C = V) : (l(C, T), V = oo(O, C.mode, V), V.return = C, C = V), g(C)) : l(C, T);
    }
    return function(C, T, O, V) {
      try {
        $i = 0;
        var de = Ge(
          C,
          T,
          O,
          V
        );
        return ui = null, de;
      } catch (se) {
        if (se === ri || se === pr) throw se;
        var Ne = Bt(29, se, null, C.mode);
        return Ne.lanes = V, Ne.return = C, Ne;
      }
    };
  }
  var zl = ch(!0), fh = ch(!1), Zn = !1;
  function ko(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Eo(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Fn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(e, t, l) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ue & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = sr(e), Kf(e, null, l), t;
    }
    return or(e, i, t, l), sr(e);
  }
  function ea(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, l |= i, t.lanes = l, tf(e, l);
    }
  }
  function wo(e, t) {
    var l = e.updateQueue, i = e.alternate;
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
        s === null ? o = s = t : s = s.next = t;
      } else o = s = t;
      l = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Ao = !1;
  function ta() {
    if (Ao) {
      var e = ai;
      if (e !== null) throw e;
    }
  }
  function na(e, t, l, i) {
    Ao = !1;
    var o = e.updateQueue;
    Zn = !1;
    var s = o.firstBaseUpdate, g = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var w = v, M = w.next;
      w.next = null, g === null ? s = M : g.next = M, g = w;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== g && (v === null ? q.firstBaseUpdate = M : v.next = M, q.lastBaseUpdate = w));
    }
    if (s !== null) {
      var Q = o.baseState;
      g = 0, q = M = w = null, v = s;
      do {
        var N = v.lane & -536870913, j = N !== v.lane;
        if (j ? (De & N) === N : (i & N) === N) {
          N !== 0 && N === ii && (Ao = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ae = e, ge = v;
            N = t;
            var Ge = l;
            switch (ge.tag) {
              case 1:
                if (ae = ge.payload, typeof ae == "function") {
                  Q = ae.call(Ge, Q, N);
                  break e;
                }
                Q = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = ge.payload, N = typeof ae == "function" ? ae.call(Ge, Q, N) : ae, N == null) break e;
                Q = y({}, Q, N);
                break e;
              case 2:
                Zn = !0;
            }
          }
          N = v.callback, N !== null && (e.flags |= 64, j && (e.flags |= 8192), j = o.callbacks, j === null ? o.callbacks = [N] : j.push(N));
        } else
          j = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, q === null ? (M = q = j, w = Q) : q = q.next = j, g |= N;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          j = v, v = j.next, j.next = null, o.lastBaseUpdate = j, o.shared.pending = null;
        }
      } while (!0);
      q === null && (w = Q), o.baseState = w, o.firstBaseUpdate = M, o.lastBaseUpdate = q, s === null && (o.shared.lanes = 0), Pn |= g, e.lanes = g, e.memoizedState = Q;
    }
  }
  function hh(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function dh(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        hh(l[e], t);
  }
  var oi = z(null), vr = z(0);
  function mh(e, t) {
    e = Nn, k(vr, e), k(oi, t), Nn = e | t.baseLanes;
  }
  function zo() {
    k(vr, Nn), k(oi, oi.current);
  }
  function To() {
    Nn = vr.current, Y(oi), Y(vr);
  }
  var Ht = z(null), en = null;
  function Jn(e) {
    var t = e.alternate;
    k(et, et.current & 1), k(Ht, e), en === null && (t === null || oi.current !== null || t.memoizedState !== null) && (en = e);
  }
  function Co(e) {
    k(et, et.current), k(Ht, e), en === null && (en = e);
  }
  function ph(e) {
    e.tag === 22 ? (k(et, et.current), k(Ht, e), en === null && (en = e)) : In();
  }
  function In() {
    k(et, et.current), k(Ht, Ht.current);
  }
  function qt(e) {
    Y(Ht), en === e && (en = null), Y(et);
  }
  var et = z(0);
  function xr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ns(l) || Ls(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var zn = 0, ve = null, qe = null, lt = null, Sr = !1, si = !1, Tl = !1, kr = 0, la = 0, ci = null, Nb = 0;
  function $e() {
    throw Error(u(321));
  }
  function Do(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!jt(e[l], t[l])) return !1;
    return !0;
  }
  function _o(e, t, l, i, o, s) {
    return zn = s, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = e === null || e.memoizedState === null ? $h : Xo, Tl = !1, s = l(i, o), Tl = !1, si && (s = yh(
      t,
      l,
      i,
      o
    )), gh(e), s;
  }
  function gh(e) {
    _.H = ra;
    var t = qe !== null && qe.next !== null;
    if (zn = 0, lt = qe = ve = null, Sr = !1, la = 0, ci = null, t) throw Error(u(300));
    e === null || it || (e = e.dependencies, e !== null && hr(e) && (it = !0));
  }
  function yh(e, t, l, i) {
    ve = e;
    var o = 0;
    do {
      if (si && (ci = null), la = 0, si = !1, 25 <= o) throw Error(u(301));
      if (o += 1, lt = qe = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      _.H = Ph, s = t(l, i);
    } while (si);
    return s;
  }
  function Lb() {
    var e = _.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ia(t) : t, e = e.useState()[0], (qe !== null ? qe.memoizedState : null) !== e && (ve.flags |= 1024), t;
  }
  function Oo() {
    var e = kr !== 0;
    return kr = 0, e;
  }
  function Mo(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Ro(e) {
    if (Sr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Sr = !1;
    }
    zn = 0, lt = qe = ve = null, si = !1, la = kr = 0, ci = null;
  }
  function Et() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? ve.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function tt() {
    if (qe === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = lt === null ? ve.memoizedState : lt.next;
    if (t !== null)
      lt = t, qe = e;
    else {
      if (e === null)
        throw ve.alternate === null ? Error(u(467)) : Error(u(310));
      qe = e, e = {
        memoizedState: qe.memoizedState,
        baseState: qe.baseState,
        baseQueue: qe.baseQueue,
        queue: qe.queue,
        next: null
      }, lt === null ? ve.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function Er() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ia(e) {
    var t = la;
    return la += 1, ci === null && (ci = []), e = uh(ci, e, t), t = ve, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? $h : Xo), e;
  }
  function wr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ia(e);
      if (e.$$typeof === H) return pt(e);
    }
    throw Error(u(438, String(e)));
  }
  function No(e) {
    var t = null, l = ve.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var i = ve.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Er(), ve.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), i = 0; i < e; i++)
        l[i] = U;
    return t.index++, l;
  }
  function Tn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ar(e) {
    var t = tt();
    return Lo(t, qe, e);
  }
  function Lo(e, t, l) {
    var i = e.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = l;
    var o = e.baseQueue, s = i.pending;
    if (s !== null) {
      if (o !== null) {
        var g = o.next;
        o.next = s.next, s.next = g;
      }
      t.baseQueue = o = s, i.pending = null;
    }
    if (s = e.baseState, o === null) e.memoizedState = s;
    else {
      t = o.next;
      var v = g = null, w = null, M = t, q = !1;
      do {
        var Q = M.lane & -536870913;
        if (Q !== M.lane ? (De & Q) === Q : (zn & Q) === Q) {
          var N = M.revertLane;
          if (N === 0)
            w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), Q === ii && (q = !0);
          else if ((zn & N) === N) {
            M = M.next, N === ii && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, w === null ? (v = w = Q, g = s) : w = w.next = Q, ve.lanes |= N, Pn |= N;
          Q = M.action, Tl && l(s, Q), s = M.hasEagerState ? M.eagerState : l(s, Q);
        } else
          N = {
            lane: Q,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, w === null ? (v = w = N, g = s) : w = w.next = N, ve.lanes |= Q, Pn |= Q;
        M = M.next;
      } while (M !== null && M !== t);
      if (w === null ? g = s : w.next = v, !jt(s, e.memoizedState) && (it = !0, q && (l = ai, l !== null)))
        throw l;
      e.memoizedState = s, e.baseState = g, e.baseQueue = w, i.lastRenderedState = s;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Uo(e) {
    var t = tt(), l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var i = l.dispatch, o = l.pending, s = t.memoizedState;
    if (o !== null) {
      l.pending = null;
      var g = o = o.next;
      do
        s = e(s, g.action), g = g.next;
      while (g !== o);
      jt(s, t.memoizedState) || (it = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), l.lastRenderedState = s;
    }
    return [s, i];
  }
  function bh(e, t, l) {
    var i = ve, o = tt(), s = Oe;
    if (s) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var g = !jt(
      (qe || o).memoizedState,
      l
    );
    if (g && (o.memoizedState = l, it = !0), o = o.queue, Ho(Sh.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || g || lt !== null && lt.memoizedState.tag & 1) {
      if (i.flags |= 2048, fi(
        9,
        { destroy: void 0 },
        xh.bind(
          null,
          i,
          o,
          l,
          t
        ),
        null
      ), Xe === null) throw Error(u(349));
      s || (zn & 127) !== 0 || vh(i, t, l);
    }
    return l;
  }
  function vh(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ve.updateQueue, t === null ? (t = Er(), ve.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function xh(e, t, l, i) {
    t.value = l, t.getSnapshot = i, kh(t) && Eh(e);
  }
  function Sh(e, t, l) {
    return l(function() {
      kh(t) && Eh(e);
    });
  }
  function kh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !jt(e, l);
    } catch {
      return !0;
    }
  }
  function Eh(e) {
    var t = bl(e, 2);
    t !== null && Mt(t, e, 2);
  }
  function jo(e) {
    var t = Et();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Tl) {
        At(!0);
        try {
          l();
        } finally {
          At(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tn,
      lastRenderedState: e
    }, t;
  }
  function wh(e, t, l, i) {
    return e.baseState = l, Lo(
      e,
      qe,
      typeof i == "function" ? i : Tn
    );
  }
  function Ub(e, t, l, i, o) {
    if (Cr(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: o,
        action: e,
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
      _.T !== null ? l(!0) : s.isTransition = !1, i(s), l = t.pending, l === null ? (s.next = t.pending = s, Ah(t, s)) : (s.next = l.next, t.pending = l.next = s);
    }
  }
  function Ah(e, t) {
    var l = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var s = _.T, g = {};
      _.T = g;
      try {
        var v = l(o, i), w = _.S;
        w !== null && w(g, v), zh(e, t, v);
      } catch (M) {
        Bo(e, t, M);
      } finally {
        s !== null && g.types !== null && (s.types = g.types), _.T = s;
      }
    } else
      try {
        s = l(o, i), zh(e, t, s);
      } catch (M) {
        Bo(e, t, M);
      }
  }
  function zh(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(i) {
        Th(e, t, i);
      },
      function(i) {
        return Bo(e, t, i);
      }
    ) : Th(e, t, l);
  }
  function Th(e, t, l) {
    t.status = "fulfilled", t.value = l, Ch(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Ah(e, l)));
  }
  function Bo(e, t, l) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = l, Ch(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Ch(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Dh(e, t) {
    return t;
  }
  function _h(e, t) {
    if (Oe) {
      var l = Xe.formState;
      if (l !== null) {
        e: {
          var i = ve;
          if (Oe) {
            if (Ke) {
              t: {
                for (var o = Ke, s = Pt; o.nodeType !== 8; ) {
                  if (!s) {
                    o = null;
                    break t;
                  }
                  if (o = tn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Ke = tn(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            Qn(i);
          }
          i = !1;
        }
        i && (t = l[0]);
      }
    }
    return l = Et(), l.memoizedState = l.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dh,
      lastRenderedState: t
    }, l.queue = i, l = Jh.bind(
      null,
      ve,
      i
    ), i.dispatch = l, i = jo(!1), s = Qo.bind(
      null,
      ve,
      !1,
      i.queue
    ), i = Et(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, l = Ub.bind(
      null,
      ve,
      o,
      s,
      l
    ), o.dispatch = l, i.memoizedState = e, [t, l, !1];
  }
  function Oh(e) {
    var t = tt();
    return Mh(t, qe, e);
  }
  function Mh(e, t, l) {
    if (t = Lo(
      e,
      t,
      Dh
    )[0], e = Ar(Tn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = ia(t);
      } catch (g) {
        throw g === ri ? pr : g;
      }
    else i = t;
    t = tt();
    var o = t.queue, s = o.dispatch;
    return l !== t.memoizedState && (ve.flags |= 2048, fi(
      9,
      { destroy: void 0 },
      jb.bind(null, o, l),
      null
    )), [i, s, e];
  }
  function jb(e, t) {
    e.action = t;
  }
  function Rh(e) {
    var t = tt(), l = qe;
    if (l !== null)
      return Mh(t, l, e);
    tt(), t = t.memoizedState, l = tt();
    var i = l.queue.dispatch;
    return l.memoizedState = e, [t, i, !1];
  }
  function fi(e, t, l, i) {
    return e = { tag: e, create: l, deps: i, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Er(), ve.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (i = l.next, l.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Nh() {
    return tt().memoizedState;
  }
  function zr(e, t, l, i) {
    var o = Et();
    ve.flags |= e, o.memoizedState = fi(
      1 | t,
      { destroy: void 0 },
      l,
      i === void 0 ? null : i
    );
  }
  function Tr(e, t, l, i) {
    var o = tt();
    i = i === void 0 ? null : i;
    var s = o.memoizedState.inst;
    qe !== null && i !== null && Do(i, qe.memoizedState.deps) ? o.memoizedState = fi(t, s, l, i) : (ve.flags |= e, o.memoizedState = fi(
      1 | t,
      s,
      l,
      i
    ));
  }
  function Lh(e, t) {
    zr(8390656, 8, e, t);
  }
  function Ho(e, t) {
    Tr(2048, 8, e, t);
  }
  function Bb(e) {
    ve.flags |= 4;
    var t = ve.updateQueue;
    if (t === null)
      t = Er(), ve.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Uh(e) {
    var t = tt().memoizedState;
    return Bb({ ref: t, nextImpl: e }), function() {
      if ((Ue & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function jh(e, t) {
    return Tr(4, 2, e, t);
  }
  function Bh(e, t) {
    return Tr(4, 4, e, t);
  }
  function Hh(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function qh(e, t, l) {
    l = l != null ? l.concat([e]) : null, Tr(4, 4, Hh.bind(null, t, e), l);
  }
  function qo() {
  }
  function Yh(e, t) {
    var l = tt();
    t = t === void 0 ? null : t;
    var i = l.memoizedState;
    return t !== null && Do(t, i[1]) ? i[0] : (l.memoizedState = [e, t], e);
  }
  function Gh(e, t) {
    var l = tt();
    t = t === void 0 ? null : t;
    var i = l.memoizedState;
    if (t !== null && Do(t, i[1]))
      return i[0];
    if (i = e(), Tl) {
      At(!0);
      try {
        e();
      } finally {
        At(!1);
      }
    }
    return l.memoizedState = [i, t], i;
  }
  function Yo(e, t, l) {
    return l === void 0 || (zn & 1073741824) !== 0 && (De & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Vd(), ve.lanes |= e, Pn |= e, l);
  }
  function Vh(e, t, l, i) {
    return jt(l, t) ? l : oi.current !== null ? (e = Yo(e, l, i), jt(e, t) || (it = !0), e) : (zn & 42) === 0 || (zn & 1073741824) !== 0 && (De & 261930) === 0 ? (it = !0, e.memoizedState = l) : (e = Vd(), ve.lanes |= e, Pn |= e, t);
  }
  function Qh(e, t, l, i, o) {
    var s = F.p;
    F.p = s !== 0 && 8 > s ? s : 8;
    var g = _.T, v = {};
    _.T = v, Qo(e, !1, t, l);
    try {
      var w = o(), M = _.S;
      if (M !== null && M(v, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var q = Rb(
          w,
          i
        );
        aa(
          e,
          t,
          q,
          Vt(e)
        );
      } else
        aa(
          e,
          t,
          i,
          Vt(e)
        );
    } catch (Q) {
      aa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        Vt()
      );
    } finally {
      F.p = s, g !== null && v.types !== null && (g.types = v.types), _.T = g;
    }
  }
  function Hb() {
  }
  function Go(e, t, l, i) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Xh(e).queue;
    Qh(
      e,
      o,
      t,
      X,
      l === null ? Hb : function() {
        return Zh(e), l(i);
      }
    );
  }
  function Xh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
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
    return t.next = {
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
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Zh(e) {
    var t = Xh(e);
    t.next === null && (t = e.alternate.memoizedState), aa(
      e,
      t.next.queue,
      {},
      Vt()
    );
  }
  function Vo() {
    return pt(ka);
  }
  function Fh() {
    return tt().memoizedState;
  }
  function Kh() {
    return tt().memoizedState;
  }
  function qb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Vt();
          e = Fn(l);
          var i = Kn(t, e, l);
          i !== null && (Mt(i, t, l), ea(i, t, l)), t = { cache: bo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Yb(e, t, l) {
    var i = Vt();
    l = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(e) ? Ih(t, l) : (l = ro(e, t, l, i), l !== null && (Mt(l, e, i), Wh(l, t, i)));
  }
  function Jh(e, t, l) {
    var i = Vt();
    aa(e, t, l, i);
  }
  function aa(e, t, l, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cr(e)) Ih(t, o);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var g = t.lastRenderedState, v = s(g, l);
          if (o.hasEagerState = !0, o.eagerState = v, jt(v, g))
            return or(e, t, o, 0), Xe === null && ur(), !1;
        } catch {
        }
      if (l = ro(e, t, o, i), l !== null)
        return Mt(l, e, i), Wh(l, t, i), !0;
    }
    return !1;
  }
  function Qo(e, t, l, i) {
    if (i = {
      lane: 2,
      revertLane: ks(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(e)) {
      if (t) throw Error(u(479));
    } else
      t = ro(
        e,
        l,
        i,
        2
      ), t !== null && Mt(t, e, 2);
  }
  function Cr(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function Ih(e, t) {
    si = Sr = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Wh(e, t, l) {
    if ((l & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, l |= i, t.lanes = l, tf(e, l);
    }
  }
  var ra = {
    readContext: pt,
    use: wr,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e
  };
  ra.useEffectEvent = $e;
  var $h = {
    readContext: pt,
    use: wr,
    useCallback: function(e, t) {
      return Et().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: Lh,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, zr(
        4194308,
        4,
        Hh.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      zr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = Et();
      t = t === void 0 ? null : t;
      var i = e();
      if (Tl) {
        At(!0);
        try {
          e();
        } finally {
          At(!1);
        }
      }
      return l.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, l) {
      var i = Et();
      if (l !== void 0) {
        var o = l(t);
        if (Tl) {
          At(!0);
          try {
            l(t);
          } finally {
            At(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Yb.bind(
        null,
        ve,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Et();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = jo(e);
      var t = e.queue, l = Jh.bind(null, ve, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: qo,
    useDeferredValue: function(e, t) {
      var l = Et();
      return Yo(l, e, t);
    },
    useTransition: function() {
      var e = jo(!1);
      return e = Qh.bind(
        null,
        ve,
        e.queue,
        !0,
        !1
      ), Et().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var i = ve, o = Et();
      if (Oe) {
        if (l === void 0)
          throw Error(u(407));
        l = l();
      } else {
        if (l = t(), Xe === null)
          throw Error(u(349));
        (De & 127) !== 0 || vh(i, t, l);
      }
      o.memoizedState = l;
      var s = { value: l, getSnapshot: t };
      return o.queue = s, Lh(Sh.bind(null, i, s, e), [
        e
      ]), i.flags |= 2048, fi(
        9,
        { destroy: void 0 },
        xh.bind(
          null,
          i,
          s,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = Et(), t = Xe.identifierPrefix;
      if (Oe) {
        var l = hn, i = fn;
        l = (i & ~(1 << 32 - Qe(i) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = kr++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Nb++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Vo,
    useFormState: _h,
    useActionState: _h,
    useOptimistic: function(e) {
      var t = Et();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Qo.bind(
        null,
        ve,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: No,
    useCacheRefresh: function() {
      return Et().memoizedState = qb.bind(
        null,
        ve
      );
    },
    useEffectEvent: function(e) {
      var t = Et(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ue & 2) !== 0)
          throw Error(u(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Xo = {
    readContext: pt,
    use: wr,
    useCallback: Yh,
    useContext: pt,
    useEffect: Ho,
    useImperativeHandle: qh,
    useInsertionEffect: jh,
    useLayoutEffect: Bh,
    useMemo: Gh,
    useReducer: Ar,
    useRef: Nh,
    useState: function() {
      return Ar(Tn);
    },
    useDebugValue: qo,
    useDeferredValue: function(e, t) {
      var l = tt();
      return Vh(
        l,
        qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ar(Tn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : ia(e),
        t
      ];
    },
    useSyncExternalStore: bh,
    useId: Fh,
    useHostTransitionStatus: Vo,
    useFormState: Oh,
    useActionState: Oh,
    useOptimistic: function(e, t) {
      var l = tt();
      return wh(l, qe, e, t);
    },
    useMemoCache: No,
    useCacheRefresh: Kh
  };
  Xo.useEffectEvent = Uh;
  var Ph = {
    readContext: pt,
    use: wr,
    useCallback: Yh,
    useContext: pt,
    useEffect: Ho,
    useImperativeHandle: qh,
    useInsertionEffect: jh,
    useLayoutEffect: Bh,
    useMemo: Gh,
    useReducer: Uo,
    useRef: Nh,
    useState: function() {
      return Uo(Tn);
    },
    useDebugValue: qo,
    useDeferredValue: function(e, t) {
      var l = tt();
      return qe === null ? Yo(l, e, t) : Vh(
        l,
        qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Uo(Tn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : ia(e),
        t
      ];
    },
    useSyncExternalStore: bh,
    useId: Fh,
    useHostTransitionStatus: Vo,
    useFormState: Rh,
    useActionState: Rh,
    useOptimistic: function(e, t) {
      var l = tt();
      return qe !== null ? wh(l, qe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: No,
    useCacheRefresh: Kh
  };
  Ph.useEffectEvent = Uh;
  function Zo(e, t, l, i) {
    t = e.memoizedState, l = l(i, t), l = l == null ? t : y({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Fo = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var i = Vt(), o = Fn(i);
      o.payload = t, l != null && (o.callback = l), t = Kn(e, o, i), t !== null && (Mt(t, e, i), ea(t, e, i));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var i = Vt(), o = Fn(i);
      o.tag = 1, o.payload = t, l != null && (o.callback = l), t = Kn(e, o, i), t !== null && (Mt(t, e, i), ea(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Vt(), i = Fn(l);
      i.tag = 2, t != null && (i.callback = t), t = Kn(e, i, l), t !== null && (Mt(t, e, l), ea(t, e, l));
    }
  };
  function ed(e, t, l, i, o, s, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, g) : t.prototype && t.prototype.isPureReactComponent ? !Zi(l, i) || !Zi(o, s) : !0;
  }
  function td(e, t, l, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, i), t.state !== e && Fo.enqueueReplaceState(t, t.state, null);
  }
  function Cl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var i in t)
        i !== "ref" && (l[i] = t[i]);
    }
    if (e = e.defaultProps) {
      l === t && (l = y({}, l));
      for (var o in e)
        l[o] === void 0 && (l[o] = e[o]);
    }
    return l;
  }
  function nd(e) {
    rr(e);
  }
  function ld(e) {
    console.error(e);
  }
  function id(e) {
    rr(e);
  }
  function Dr(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function ad(e, t, l) {
    try {
      var i = e.onCaughtError;
      i(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Ko(e, t, l) {
    return l = Fn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Dr(e, t);
    }, l;
  }
  function rd(e) {
    return e = Fn(e), e.tag = 3, e;
  }
  function ud(e, t, l, i) {
    var o = l.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = i.value;
      e.payload = function() {
        return o(s);
      }, e.callback = function() {
        ad(t, l, i);
      };
    }
    var g = l.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      ad(t, l, i), typeof o != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Gb(e, t, l, i, o) {
    if (l.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = l.alternate, t !== null && li(
        t,
        l,
        o,
        !0
      ), l = Ht.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return en === null ? Yr() : l.alternate === null && Pe === 0 && (Pe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, i === gr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), vs(e, i, o)), !1;
          case 22:
            return l.flags |= 65536, i === gr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : l.add(i)), vs(e, i, o)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return vs(e, i, o), Yr(), !1;
    }
    if (Oe)
      return t = Ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== ho && (e = Error(u(422), { cause: i }), Ji(It(e, l)))) : (i !== ho && (t = Error(u(423), {
        cause: i
      }), Ji(
        It(t, l)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = It(i, l), o = Ko(
        e.stateNode,
        i,
        o
      ), wo(e, o), Pe !== 4 && (Pe = 2)), !1;
    var s = Error(u(520), { cause: i });
    if (s = It(s, l), ma === null ? ma = [s] : ma.push(s), Pe !== 4 && (Pe = 2), t === null) return !0;
    i = It(i, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = o & -o, l.lanes |= e, e = Ko(l.stateNode, i, e), wo(l, e), !1;
        case 1:
          if (t = l.type, s = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (el === null || !el.has(s))))
            return l.flags |= 65536, o &= -o, l.lanes |= o, o = rd(o), ud(
              o,
              e,
              l,
              i
            ), wo(l, o), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Jo = Error(u(461)), it = !1;
  function gt(e, t, l, i) {
    t.child = e === null ? fh(t, null, l, i) : zl(
      t,
      e.child,
      l,
      i
    );
  }
  function od(e, t, l, i, o) {
    l = l.render;
    var s = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var v in i)
        v !== "ref" && (g[v] = i[v]);
    } else g = i;
    return kl(t), i = _o(
      e,
      t,
      l,
      g,
      s,
      o
    ), v = Oo(), e !== null && !it ? (Mo(e, t, o), Cn(e, t, o)) : (Oe && v && co(t), t.flags |= 1, gt(e, t, i, o), t.child);
  }
  function sd(e, t, l, i, o) {
    if (e === null) {
      var s = l.type;
      return typeof s == "function" && !uo(s) && s.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = s, cd(
        e,
        t,
        s,
        i,
        o
      )) : (e = cr(
        l.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !ls(e, o)) {
      var g = s.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zi, l(g, i) && e.ref === t.ref)
        return Cn(e, t, o);
    }
    return t.flags |= 1, e = kn(s, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function cd(e, t, l, i, o) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Zi(s, i) && e.ref === t.ref)
        if (it = !1, t.pendingProps = i = s, ls(e, o))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, Cn(e, t, o);
    }
    return Io(
      e,
      t,
      l,
      i,
      o
    );
  }
  function fd(e, t, l, i) {
    var o = i.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | l : l, e !== null) {
          for (i = t.child = e.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~s;
        } else i = 0, t.child = null;
        return hd(
          e,
          t,
          s,
          l,
          i
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && mr(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? mh(t, s) : zo(), ph(t);
      else
        return i = t.lanes = 536870912, hd(
          e,
          t,
          s !== null ? s.baseLanes | l : l,
          l,
          i
        );
    } else
      s !== null ? (mr(t, s.cachePool), mh(t, s), In(), t.memoizedState = null) : (e !== null && mr(t, null), zo(), In());
    return gt(e, t, o, l), t.child;
  }
  function ua(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function hd(e, t, l, i, o) {
    var s = xo();
    return s = s === null ? null : { parent: nt._currentValue, pool: s }, t.memoizedState = {
      baseLanes: l,
      cachePool: s
    }, e !== null && mr(t, null), zo(), ph(t), e !== null && li(e, t, i, !0), t.childLanes = o, null;
  }
  function _r(e, t) {
    return t = Mr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function dd(e, t, l) {
    return zl(t, e.child, null, l), e = _r(t, t.pendingProps), e.flags |= 2, qt(t), t.memoizedState = null, e;
  }
  function Vb(e, t, l) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Oe) {
        if (i.mode === "hidden")
          return e = _r(t, i), t.lanes = 536870912, ua(null, e);
        if (Co(t), (e = Ke) ? (e = Am(
          e,
          Pt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Gn !== null ? { id: fn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = If(e), l.return = t, t.child = l, mt = t, Ke = null)) : e = null, e === null) throw Qn(t);
        return t.lanes = 536870912, null;
      }
      return _r(t, i);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var g = s.dehydrated;
      if (Co(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = dd(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (it || li(e, t, l, !1), o = (l & e.childLanes) !== 0, it || o) {
        if (i = Xe, i !== null && (g = nf(i, l), g !== 0 && g !== s.retryLane))
          throw s.retryLane = g, bl(e, g), Mt(i, e, g), Jo;
        Yr(), t = dd(
          e,
          t,
          l
        );
      } else
        e = s.treeContext, Ke = tn(g.nextSibling), mt = t, Oe = !0, Vn = null, Pt = !1, e !== null && Pf(t, e), t = _r(t, i), t.flags |= 4096;
      return t;
    }
    return e = kn(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Or(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(u(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Io(e, t, l, i, o) {
    return kl(t), l = _o(
      e,
      t,
      l,
      i,
      void 0,
      o
    ), i = Oo(), e !== null && !it ? (Mo(e, t, o), Cn(e, t, o)) : (Oe && i && co(t), t.flags |= 1, gt(e, t, l, o), t.child);
  }
  function md(e, t, l, i, o, s) {
    return kl(t), t.updateQueue = null, l = yh(
      t,
      i,
      l,
      o
    ), gh(e), i = Oo(), e !== null && !it ? (Mo(e, t, s), Cn(e, t, s)) : (Oe && i && co(t), t.flags |= 1, gt(e, t, l, s), t.child);
  }
  function pd(e, t, l, i, o) {
    if (kl(t), t.stateNode === null) {
      var s = Pl, g = l.contextType;
      typeof g == "object" && g !== null && (s = pt(g)), s = new l(i, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Fo, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = i, s.state = t.memoizedState, s.refs = {}, ko(t), g = l.contextType, s.context = typeof g == "object" && g !== null ? pt(g) : Pl, s.state = t.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (Zo(
        t,
        l,
        g,
        i
      ), s.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (g = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), g !== s.state && Fo.enqueueReplaceState(s, s.state, null), na(t, i, s, o), ta(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      s = t.stateNode;
      var v = t.memoizedProps, w = Cl(l, v);
      s.props = w;
      var M = s.context, q = l.contextType;
      g = Pl, typeof q == "object" && q !== null && (g = pt(q));
      var Q = l.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, q || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || M !== g) && td(
        t,
        s,
        i,
        g
      ), Zn = !1;
      var N = t.memoizedState;
      s.state = N, na(t, i, s, o), ta(), M = t.memoizedState, v || N !== M || Zn ? (typeof Q == "function" && (Zo(
        t,
        l,
        Q,
        i
      ), M = t.memoizedState), (w = Zn || ed(
        t,
        l,
        w,
        i,
        N,
        M,
        g
      )) ? (q || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = M), s.props = i, s.state = M, s.context = g, i = w) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      s = t.stateNode, Eo(e, t), g = t.memoizedProps, q = Cl(l, g), s.props = q, Q = t.pendingProps, N = s.context, M = l.contextType, w = Pl, typeof M == "object" && M !== null && (w = pt(M)), v = l.getDerivedStateFromProps, (M = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== Q || N !== w) && td(
        t,
        s,
        i,
        w
      ), Zn = !1, N = t.memoizedState, s.state = N, na(t, i, s, o), ta();
      var j = t.memoizedState;
      g !== Q || N !== j || Zn || e !== null && e.dependencies !== null && hr(e.dependencies) ? (typeof v == "function" && (Zo(
        t,
        l,
        v,
        i
      ), j = t.memoizedState), (q = Zn || ed(
        t,
        l,
        q,
        i,
        N,
        j,
        w
      ) || e !== null && e.dependencies !== null && hr(e.dependencies)) ? (M || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, j, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        i,
        j,
        w
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = j), s.props = i, s.state = j, s.context = w, i = q) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return s = i, Or(e, t), i = (t.flags & 128) !== 0, s || i ? (s = t.stateNode, l = i && typeof l.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && i ? (t.child = zl(
      t,
      e.child,
      null,
      o
    ), t.child = zl(
      t,
      null,
      l,
      o
    )) : gt(e, t, l, o), t.memoizedState = s.state, e = t.child) : e = Cn(
      e,
      t,
      o
    ), e;
  }
  function gd(e, t, l, i) {
    return xl(), t.flags |= 256, gt(e, t, l, i), t.child;
  }
  var Wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $o(e) {
    return { baseLanes: e, cachePool: ah() };
  }
  function Po(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Gt), e;
  }
  function yd(e, t, l) {
    var i = t.pendingProps, o = !1, s = (t.flags & 128) !== 0, g;
    if ((g = s) || (g = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), g && (o = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Oe) {
        if (o ? Jn(t) : In(), (e = Ke) ? (e = Am(
          e,
          Pt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Gn !== null ? { id: fn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = If(e), l.return = t, t.child = l, mt = t, Ke = null)) : e = null, e === null) throw Qn(t);
        return Ls(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, o ? (In(), o = t.mode, v = Mr(
        { mode: "hidden", children: v },
        o
      ), i = vl(
        i,
        o,
        l,
        null
      ), v.return = t, i.return = t, v.sibling = i, t.child = v, i = t.child, i.memoizedState = $o(l), i.childLanes = Po(
        e,
        g,
        l
      ), t.memoizedState = Wo, ua(null, i)) : (Jn(t), es(t, v));
    }
    var w = e.memoizedState;
    if (w !== null && (v = w.dehydrated, v !== null)) {
      if (s)
        t.flags & 256 ? (Jn(t), t.flags &= -257, t = ts(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (In(), t.child = e.child, t.flags |= 128, t = null) : (In(), v = i.fallback, o = t.mode, i = Mr(
          { mode: "visible", children: i.children },
          o
        ), v = vl(
          v,
          o,
          l,
          null
        ), v.flags |= 2, i.return = t, v.return = t, i.sibling = v, t.child = i, zl(
          t,
          e.child,
          null,
          l
        ), i = t.child, i.memoizedState = $o(l), i.childLanes = Po(
          e,
          g,
          l
        ), t.memoizedState = Wo, t = ua(null, i));
      else if (Jn(t), Ls(v)) {
        if (g = v.nextSibling && v.nextSibling.dataset, g) var M = g.dgst;
        g = M, i = Error(u(419)), i.stack = "", i.digest = g, Ji({ value: i, source: null, stack: null }), t = ts(
          e,
          t,
          l
        );
      } else if (it || li(e, t, l, !1), g = (l & e.childLanes) !== 0, it || g) {
        if (g = Xe, g !== null && (i = nf(g, l), i !== 0 && i !== w.retryLane))
          throw w.retryLane = i, bl(e, i), Mt(g, e, i), Jo;
        Ns(v) || Yr(), t = ts(
          e,
          t,
          l
        );
      } else
        Ns(v) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, Ke = tn(
          v.nextSibling
        ), mt = t, Oe = !0, Vn = null, Pt = !1, e !== null && Pf(t, e), t = es(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (In(), v = i.fallback, o = t.mode, w = e.child, M = w.sibling, i = kn(w, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = w.subtreeFlags & 65011712, M !== null ? v = kn(
      M,
      v
    ) : (v = vl(
      v,
      o,
      l,
      null
    ), v.flags |= 2), v.return = t, i.return = t, i.sibling = v, t.child = i, ua(null, i), i = t.child, v = e.child.memoizedState, v === null ? v = $o(l) : (o = v.cachePool, o !== null ? (w = nt._currentValue, o = o.parent !== w ? { parent: w, pool: w } : o) : o = ah(), v = {
      baseLanes: v.baseLanes | l,
      cachePool: o
    }), i.memoizedState = v, i.childLanes = Po(
      e,
      g,
      l
    ), t.memoizedState = Wo, ua(e.child, i)) : (Jn(t), l = e.child, e = l.sibling, l = kn(l, {
      mode: "visible",
      children: i.children
    }), l.return = t, l.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function es(e, t) {
    return t = Mr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Mr(e, t) {
    return e = Bt(22, e, null, t), e.lanes = 0, e;
  }
  function ts(e, t, l) {
    return zl(t, e.child, null, l), e = es(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function bd(e, t, l) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), go(e.return, t, l);
  }
  function ns(e, t, l, i, o, s) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: l,
      tailMode: o,
      treeForkCount: s
    } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = i, g.tail = l, g.tailMode = o, g.treeForkCount = s);
  }
  function vd(e, t, l) {
    var i = t.pendingProps, o = i.revealOrder, s = i.tail;
    i = i.children;
    var g = et.current, v = (g & 2) !== 0;
    if (v ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, k(et, g), gt(e, t, i, l), i = Oe ? Ki : 0, !v && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && bd(e, l, t);
        else if (e.tag === 19)
          bd(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (o) {
      case "forwards":
        for (l = t.child, o = null; l !== null; )
          e = l.alternate, e !== null && xr(e) === null && (o = l), l = l.sibling;
        l = o, l === null ? (o = t.child, t.child = null) : (o = l.sibling, l.sibling = null), ns(
          t,
          !1,
          o,
          l,
          s,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && xr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = l, l = o, o = e;
        }
        ns(
          t,
          !0,
          l,
          null,
          s,
          i
        );
        break;
      case "together":
        ns(
          t,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Cn(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (li(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, l = kn(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = kn(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function ls(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && hr(e)));
  }
  function Qb(e, t, l) {
    switch (t.tag) {
      case 3:
        Ve(t, t.stateNode.containerInfo), Xn(t, nt, e.memoizedState.cache), xl();
        break;
      case 27:
      case 5:
        ht(t);
        break;
      case 4:
        Ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Co(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Jn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? yd(e, t, l) : (Jn(t), e = Cn(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Jn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (l & t.childLanes) !== 0, i || (li(
          e,
          t,
          l,
          !1
        ), i = (l & t.childLanes) !== 0), o) {
          if (i)
            return vd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), k(et, et.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, fd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Xn(t, nt, e.memoizedState.cache);
    }
    return Cn(e, t, l);
  }
  function xd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!ls(e, l) && (t.flags & 128) === 0)
          return it = !1, Qb(
            e,
            t,
            l
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, Oe && (t.flags & 1048576) !== 0 && $f(t, Ki, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = wl(t.elementType), t.type = e, typeof e == "function")
            uo(e) ? (i = Cl(e, i), t.tag = 1, t = pd(
              null,
              t,
              e,
              i,
              l
            )) : (t.tag = 0, t = Io(
              null,
              t,
              e,
              i,
              l
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === le) {
                t.tag = 11, t = od(
                  null,
                  t,
                  e,
                  i,
                  l
                );
                break e;
              } else if (o === P) {
                t.tag = 14, t = sd(
                  null,
                  t,
                  e,
                  i,
                  l
                );
                break e;
              }
            }
            throw t = ie(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Io(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return i = t.type, o = Cl(
          i,
          t.pendingProps
        ), pd(
          e,
          t,
          i,
          o,
          l
        );
      case 3:
        e: {
          if (Ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          i = t.pendingProps;
          var s = t.memoizedState;
          o = s.element, Eo(e, t), na(t, i, null, l);
          var g = t.memoizedState;
          if (i = g.cache, Xn(t, nt, i), i !== s.cache && yo(
            t,
            [nt],
            l,
            !0
          ), ta(), i = g.element, s.isDehydrated)
            if (s = {
              element: i,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = gd(
                e,
                t,
                i,
                l
              );
              break e;
            } else if (i !== o) {
              o = It(
                Error(u(424)),
                t
              ), Ji(o), t = gd(
                e,
                t,
                i,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ke = tn(e.firstChild), mt = t, Oe = !0, Vn = null, Pt = !0, l = fh(
                t,
                null,
                i,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (xl(), i === o) {
              t = Cn(
                e,
                t,
                l
              );
              break e;
            }
            gt(e, t, i, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Or(e, t), e === null ? (l = Om(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : Oe || (l = t.type, e = t.pendingProps, i = Kr(
          ce.current
        ).createElement(l), i[dt] = t, i[zt] = e, yt(i, l, e), ct(i), t.stateNode = i) : t.memoizedState = Om(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ht(t), e === null && Oe && (i = t.stateNode = Cm(
          t.type,
          t.pendingProps,
          ce.current
        ), mt = t, Pt = !0, o = Ke, il(t.type) ? (Us = o, Ke = tn(i.firstChild)) : Ke = o), gt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Or(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Oe && ((o = i = Ke) && (i = x0(
          i,
          t.type,
          t.pendingProps,
          Pt
        ), i !== null ? (t.stateNode = i, mt = t, Ke = tn(i.firstChild), Pt = !1, o = !0) : o = !1), o || Qn(t)), ht(t), o = t.type, s = t.pendingProps, g = e !== null ? e.memoizedProps : null, i = s.children, Os(o, s) ? i = null : g !== null && Os(o, g) && (t.flags |= 32), t.memoizedState !== null && (o = _o(
          e,
          t,
          Lb,
          null,
          null,
          l
        ), ka._currentValue = o), Or(e, t), gt(e, t, i, l), t.child;
      case 6:
        return e === null && Oe && ((e = l = Ke) && (l = S0(
          l,
          t.pendingProps,
          Pt
        ), l !== null ? (t.stateNode = l, mt = t, Ke = null, e = !0) : e = !1), e || Qn(t)), null;
      case 13:
        return yd(e, t, l);
      case 4:
        return Ve(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = zl(
          t,
          null,
          i,
          l
        ) : gt(e, t, i, l), t.child;
      case 11:
        return od(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return gt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return gt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return gt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return i = t.pendingProps, Xn(t, t.type, i.value), gt(e, t, i.children, l), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, kl(t), o = pt(o), i = i(o), t.flags |= 1, gt(e, t, i, l), t.child;
      case 14:
        return sd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return cd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return vd(e, t, l);
      case 31:
        return Vb(e, t, l);
      case 22:
        return fd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return kl(t), i = pt(nt), e === null ? (o = xo(), o === null && (o = Xe, s = bo(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= l), o = s), t.memoizedState = { parent: i, cache: o }, ko(t), Xn(t, nt, o)) : ((e.lanes & l) !== 0 && (Eo(e, t), na(t, null, null, l), ta()), o = e.memoizedState, s = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Xn(t, nt, i)) : (i = s.cache, Xn(t, nt, i), i !== o.cache && yo(
          t,
          [nt],
          l,
          !0
        ))), gt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Dn(e) {
    e.flags |= 4;
  }
  function is(e, t, l, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Fd()) e.flags |= 8192;
        else
          throw Al = gr, So;
    } else e.flags &= -16777217;
  }
  function Sd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Um(t))
      if (Fd()) e.flags |= 8192;
      else
        throw Al = gr, So;
  }
  function Rr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Pc() : 536870912, e.lanes |= t, pi |= t);
  }
  function oa(e, t) {
    if (!Oe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var i = null; l !== null; )
            l.alternate !== null && (i = l), l = l.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        l |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        l |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = l, t;
  }
  function Xb(e, t, l) {
    var i = t.pendingProps;
    switch (fo(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return l = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), An(nt), Re(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ni(t) ? Dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mo())), Je(t), null;
      case 26:
        var o = t.type, s = t.memoizedState;
        return e === null ? (Dn(t), s !== null ? (Je(t), Sd(t, s)) : (Je(t), is(
          t,
          o,
          null,
          i,
          l
        ))) : s ? s !== e.memoizedState ? (Dn(t), Je(t), Sd(t, s)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Dn(t), Je(t), is(
          t,
          o,
          e,
          i,
          l
        )), null;
      case 27:
        if (Lt(t), l = ce.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Je(t), null;
          }
          e = W.current, ni(t) ? eh(t) : (e = Cm(o, i, l), t.stateNode = e, Dn(t));
        }
        return Je(t), null;
      case 5:
        if (Lt(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Je(t), null;
          }
          if (s = W.current, ni(t))
            eh(t);
          else {
            var g = Kr(
              ce.current
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
            s[dt] = t, s[zt] = i;
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6)
                s.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t)
                  break e;
                g = g.return;
              }
              g.sibling.return = g.return, g = g.sibling;
            }
            t.stateNode = s;
            e: switch (yt(s, o, i), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && Dn(t);
          }
        }
        return Je(t), is(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Dn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = ce.current, ni(t)) {
            if (e = t.stateNode, l = t.memoizedProps, i = null, o = mt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === l || i !== null && i.suppressHydrationWarning === !0 || ym(e.nodeValue, l)), e || Qn(t, !0);
          } else
            e = Kr(e).createTextNode(
              i
            ), e[dt] = t, t.stateNode = e;
        }
        return Je(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = ni(t), l !== null) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[dt] = t;
            } else
              xl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), e = !1;
          } else
            l = mo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Je(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = ni(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[dt] = t;
            } else
              xl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), o = !1;
          } else
            o = mo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        return qt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = i !== null, e = e !== null && e.memoizedState !== null, l && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== o && (i.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Rr(t, t.updateQueue), Je(t), null);
      case 4:
        return Re(), e === null && zs(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return An(t.type), Je(t), null;
      case 19:
        if (Y(et), i = t.memoizedState, i === null) return Je(t), null;
        if (o = (t.flags & 128) !== 0, s = i.rendering, s === null)
          if (o) oa(i, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = xr(e), s !== null) {
                  for (t.flags |= 128, oa(i, !1), e = s.updateQueue, t.updateQueue = e, Rr(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Jf(l, e), l = l.sibling;
                  return k(
                    et,
                    et.current & 1 | 2
                  ), Oe && En(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && St() > Br && (t.flags |= 128, o = !0, oa(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = xr(s), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Rr(t, e), oa(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Oe)
                return Je(t), null;
            } else
              2 * St() - i.renderingStartTime > Br && l !== 536870912 && (t.flags |= 128, o = !0, oa(i, !1), t.lanes = 4194304);
          i.isBackwards ? (s.sibling = t.child, t.child = s) : (e = i.last, e !== null ? e.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = St(), e.sibling = null, l = et.current, k(
          et,
          o ? l & 1 | 2 : l & 1
        ), Oe && En(t, i.treeForkCount), e) : (Je(t), null);
      case 22:
      case 23:
        return qt(t), To(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), l = t.updateQueue, l !== null && Rr(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== l && (t.flags |= 2048), e !== null && Y(El), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), An(nt), Je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Zb(e, t) {
    switch (fo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return An(nt), Re(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Lt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (qt(t), t.alternate === null)
            throw Error(u(340));
          xl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          xl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Y(et), null;
      case 4:
        return Re(), null;
      case 10:
        return An(t.type), null;
      case 22:
      case 23:
        return qt(t), To(), e !== null && Y(El), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return An(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kd(e, t) {
    switch (fo(t), t.tag) {
      case 3:
        An(nt), Re();
        break;
      case 26:
      case 27:
      case 5:
        Lt(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        t.memoizedState !== null && qt(t);
        break;
      case 13:
        qt(t);
        break;
      case 19:
        Y(et);
        break;
      case 10:
        An(t.type);
        break;
      case 22:
      case 23:
        qt(t), To(), e !== null && Y(El);
        break;
      case 24:
        An(nt);
    }
  }
  function sa(e, t) {
    try {
      var l = t.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            i = void 0;
            var s = l.create, g = l.inst;
            i = s(), g.destroy = i;
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (v) {
      He(t, t.return, v);
    }
  }
  function Wn(e, t, l) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        i = s;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst, v = g.destroy;
            if (v !== void 0) {
              g.destroy = void 0, o = t;
              var w = l, M = v;
              try {
                M();
              } catch (q) {
                He(
                  o,
                  w,
                  q
                );
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (q) {
      He(t, t.return, q);
    }
  }
  function Ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        dh(t, l);
      } catch (i) {
        He(e, e.return, i);
      }
    }
  }
  function wd(e, t, l) {
    l.props = Cl(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (i) {
      He(e, t, i);
    }
  }
  function ca(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(i) : l.current = i;
      }
    } catch (o) {
      He(e, t, o);
    }
  }
  function dn(e, t) {
    var l = e.ref, i = e.refCleanup;
    if (l !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          He(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          He(e, t, o);
        }
      else l.current = null;
  }
  function Ad(e) {
    var t = e.type, l = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && i.focus();
          break e;
        case "img":
          l.src ? i.src = l.src : l.srcSet && (i.srcset = l.srcSet);
      }
    } catch (o) {
      He(e, e.return, o);
    }
  }
  function as(e, t, l) {
    try {
      var i = e.stateNode;
      m0(i, e.type, l, t), i[zt] = t;
    } catch (o) {
      He(e, e.return, o);
    }
  }
  function zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && il(e.type) || e.tag === 4;
  }
  function rs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && il(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function us(e, t, l) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = xn));
    else if (i !== 4 && (i === 27 && il(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (us(e, t, l), e = e.sibling; e !== null; )
        us(e, t, l), e = e.sibling;
  }
  function Nr(e, t, l) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (i !== 4 && (i === 27 && il(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Nr(e, t, l), e = e.sibling; e !== null; )
        Nr(e, t, l), e = e.sibling;
  }
  function Td(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      yt(t, i, l), t[dt] = e, t[zt] = l;
    } catch (s) {
      He(e, e.return, s);
    }
  }
  var _n = !1, at = !1, os = !1, Cd = typeof WeakSet == "function" ? WeakSet : Set, ft = null;
  function Fb(e, t) {
    if (e = e.containerInfo, Ds = tu, e = qf(e), eo(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var i = l.getSelection && l.getSelection();
          if (i && i.rangeCount !== 0) {
            l = i.anchorNode;
            var o = i.anchorOffset, s = i.focusNode;
            i = i.focusOffset;
            try {
              l.nodeType, s.nodeType;
            } catch {
              l = null;
              break e;
            }
            var g = 0, v = -1, w = -1, M = 0, q = 0, Q = e, N = null;
            t: for (; ; ) {
              for (var j; Q !== l || o !== 0 && Q.nodeType !== 3 || (v = g + o), Q !== s || i !== 0 && Q.nodeType !== 3 || (w = g + i), Q.nodeType === 3 && (g += Q.nodeValue.length), (j = Q.firstChild) !== null; )
                N = Q, Q = j;
              for (; ; ) {
                if (Q === e) break t;
                if (N === l && ++M === o && (v = g), N === s && ++q === i && (w = g), (j = Q.nextSibling) !== null) break;
                Q = N, N = Q.parentNode;
              }
              Q = j;
            }
            l = v === -1 || w === -1 ? null : { start: v, end: w };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_s = { focusedElem: e, selectionRange: l }, tu = !1, ft = t; ft !== null; )
      if (t = ft, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ft = e;
      else
        for (; ft !== null; ) {
          switch (t = ft, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  o = e[l], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, l = t, o = s.memoizedProps, s = s.memoizedState, i = l.stateNode;
                try {
                  var ae = Cl(
                    l.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    ae,
                    s
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ge) {
                  He(
                    l,
                    l.return,
                    ge
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Rs(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rs(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ft = e;
            break;
          }
          ft = t.return;
        }
  }
  function Dd(e, t, l) {
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Mn(e, l), i & 4 && sa(5, l);
        break;
      case 1:
        if (Mn(e, l), i & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              He(l, l.return, g);
            }
          else {
            var o = Cl(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (g) {
              He(
                l,
                l.return,
                g
              );
            }
          }
        i & 64 && Ed(l), i & 512 && ca(l, l.return);
        break;
      case 3:
        if (Mn(e, l), i & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            dh(e, t);
          } catch (g) {
            He(l, l.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Td(l);
      case 26:
      case 5:
        Mn(e, l), t === null && i & 4 && Ad(l), i & 512 && ca(l, l.return);
        break;
      case 12:
        Mn(e, l);
        break;
      case 31:
        Mn(e, l), i & 4 && Md(e, l);
        break;
      case 13:
        Mn(e, l), i & 4 && Rd(e, l), i & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = n0.bind(
          null,
          l
        ), k0(e, l))));
        break;
      case 22:
        if (i = l.memoizedState !== null || _n, !i) {
          t = t !== null && t.memoizedState !== null || at, o = _n;
          var s = at;
          _n = i, (at = t) && !s ? Rn(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Mn(e, l), _n = o, at = s;
        }
        break;
      case 30:
        break;
      default:
        Mn(e, l);
    }
  }
  function _d(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _d(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ju(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var We = null, Ct = !1;
  function On(e, t, l) {
    for (l = l.child; l !== null; )
      Od(e, t, l), l = l.sibling;
  }
  function Od(e, t, l) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(kt, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        at || dn(l, t), On(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        at || dn(l, t);
        var i = We, o = Ct;
        il(l.type) && (We = l.stateNode, Ct = !1), On(
          e,
          t,
          l
        ), va(l.stateNode), We = i, Ct = o;
        break;
      case 5:
        at || dn(l, t);
      case 6:
        if (i = We, o = Ct, We = null, On(
          e,
          t,
          l
        ), We = i, Ct = o, We !== null)
          if (Ct)
            try {
              (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(l.stateNode);
            } catch (s) {
              He(
                l,
                t,
                s
              );
            }
          else
            try {
              We.removeChild(l.stateNode);
            } catch (s) {
              He(
                l,
                t,
                s
              );
            }
        break;
      case 18:
        We !== null && (Ct ? (e = We, Em(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Ei(e)) : Em(We, l.stateNode));
        break;
      case 4:
        i = We, o = Ct, We = l.stateNode.containerInfo, Ct = !0, On(
          e,
          t,
          l
        ), We = i, Ct = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wn(2, l, t), at || Wn(4, l, t), On(
          e,
          t,
          l
        );
        break;
      case 1:
        at || (dn(l, t), i = l.stateNode, typeof i.componentWillUnmount == "function" && wd(
          l,
          t,
          i
        )), On(
          e,
          t,
          l
        );
        break;
      case 21:
        On(
          e,
          t,
          l
        );
        break;
      case 22:
        at = (i = at) || l.memoizedState !== null, On(
          e,
          t,
          l
        ), at = i;
        break;
      default:
        On(
          e,
          t,
          l
        );
    }
  }
  function Md(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ei(e);
      } catch (l) {
        He(t, t.return, l);
      }
    }
  }
  function Rd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ei(e);
      } catch (l) {
        He(t, t.return, l);
      }
  }
  function Kb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Cd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Cd()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Lr(e, t) {
    var l = Kb(e);
    t.forEach(function(i) {
      if (!l.has(i)) {
        l.add(i);
        var o = l0.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function Dt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var i = 0; i < l.length; i++) {
        var o = l[i], s = e, g = t, v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (il(v.type)) {
                We = v.stateNode, Ct = !1;
                break e;
              }
              break;
            case 5:
              We = v.stateNode, Ct = !1;
              break e;
            case 3:
            case 4:
              We = v.stateNode.containerInfo, Ct = !0;
              break e;
          }
          v = v.return;
        }
        if (We === null) throw Error(u(160));
        Od(s, g, o), We = null, Ct = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Nd(t, e), t = t.sibling;
  }
  var un = null;
  function Nd(e, t) {
    var l = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Dt(t, e), _t(e), i & 4 && (Wn(3, e, e.return), sa(3, e), Wn(5, e, e.return));
        break;
      case 1:
        Dt(t, e), _t(e), i & 512 && (at || l === null || dn(l, l.return)), i & 64 && _n && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? i : l.concat(i))));
        break;
      case 26:
        var o = un;
        if (Dt(t, e), _t(e), i & 512 && (at || l === null || dn(l, l.return)), i & 4) {
          var s = l !== null ? l.memoizedState : null;
          if (i = e.memoizedState, l === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, l = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      s = o.getElementsByTagName("title")[0], (!s || s[ji] || s[dt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(i), o.head.insertBefore(
                        s,
                        o.querySelector("head > title")
                      )), yt(s, i, l), s[dt] = e, ct(s), i = s;
                      break e;
                    case "link":
                      var g = Nm(
                        "link",
                        "href",
                        o
                      ).get(i + (l.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (s = g[v], s.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && s.getAttribute("rel") === (l.rel == null ? null : l.rel) && s.getAttribute("title") === (l.title == null ? null : l.title) && s.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      s = o.createElement(i), yt(s, i, l), o.head.appendChild(s);
                      break;
                    case "meta":
                      if (g = Nm(
                        "meta",
                        "content",
                        o
                      ).get(i + (l.content || ""))) {
                        for (v = 0; v < g.length; v++)
                          if (s = g[v], s.getAttribute("content") === (l.content == null ? null : "" + l.content) && s.getAttribute("name") === (l.name == null ? null : l.name) && s.getAttribute("property") === (l.property == null ? null : l.property) && s.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && s.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      s = o.createElement(i), yt(s, i, l), o.head.appendChild(s);
                      break;
                    default:
                      throw Error(u(468, i));
                  }
                  s[dt] = e, ct(s), i = s;
                }
                e.stateNode = i;
              } else
                Lm(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Rm(
                o,
                i,
                e.memoizedProps
              );
          else
            s !== i ? (s === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : s.count--, i === null ? Lm(
              o,
              e.type,
              e.stateNode
            ) : Rm(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && as(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Dt(t, e), _t(e), i & 512 && (at || l === null || dn(l, l.return)), l !== null && i & 4 && as(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Dt(t, e), _t(e), i & 512 && (at || l === null || dn(l, l.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Zl(o, "");
          } catch (ae) {
            He(e, e.return, ae);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, as(
          e,
          o,
          l !== null ? l.memoizedProps : o
        )), i & 1024 && (os = !0);
        break;
      case 6:
        if (Dt(t, e), _t(e), i & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          i = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = i;
          } catch (ae) {
            He(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (Wr = null, o = un, un = Jr(t.containerInfo), Dt(t, e), un = o, _t(e), i & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ei(t.containerInfo);
          } catch (ae) {
            He(e, e.return, ae);
          }
        os && (os = !1, Ld(e));
        break;
      case 4:
        i = un, un = Jr(
          e.stateNode.containerInfo
        ), Dt(t, e), _t(e), un = i;
        break;
      case 12:
        Dt(t, e), _t(e);
        break;
      case 31:
        Dt(t, e), _t(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Lr(e, i)));
        break;
      case 13:
        Dt(t, e), _t(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (jr = St()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Lr(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var w = l !== null && l.memoizedState !== null, M = _n, q = at;
        if (_n = M || o, at = q || w, Dt(t, e), at = q, _n = M, _t(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (l === null || w || _n || at || Dl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                w = l = t;
                try {
                  if (s = w.stateNode, o)
                    g = s.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    v = w.stateNode;
                    var Q = w.memoizedProps.style, N = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (ae) {
                  He(w, w.return, ae);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = o ? "" : w.memoizedProps;
                } catch (ae) {
                  He(w, w.return, ae);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                w = t;
                try {
                  var j = w.stateNode;
                  o ? wm(j, !0) : wm(w.stateNode, !1);
                } catch (ae) {
                  He(w, w.return, ae);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        i & 4 && (i = e.updateQueue, i !== null && (l = i.retryQueue, l !== null && (i.retryQueue = null, Lr(e, l))));
        break;
      case 19:
        Dt(t, e), _t(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Lr(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Dt(t, e), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, i = e.return; i !== null; ) {
          if (zd(i)) {
            l = i;
            break;
          }
          i = i.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var o = l.stateNode, s = rs(e);
            Nr(e, s, o);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && (Zl(g, ""), l.flags &= -33);
            var v = rs(e);
            Nr(e, v, g);
            break;
          case 3:
          case 4:
            var w = l.stateNode.containerInfo, M = rs(e);
            us(
              e,
              M,
              w
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        He(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ld(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ld(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Mn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Dd(e, t.alternate, t), t = t.sibling;
  }
  function Dl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wn(4, t, t.return), Dl(t);
          break;
        case 1:
          dn(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && wd(
            t,
            t.return,
            l
          ), Dl(t);
          break;
        case 27:
          va(t.stateNode);
        case 26:
        case 5:
          dn(t, t.return), Dl(t);
          break;
        case 22:
          t.memoizedState === null && Dl(t);
          break;
        case 30:
          Dl(t);
          break;
        default:
          Dl(t);
      }
      e = e.sibling;
    }
  }
  function Rn(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, s = t, g = s.flags;
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
            } catch (M) {
              He(i, i.return, M);
            }
          if (i = s, o = i.updateQueue, o !== null) {
            var v = i.stateNode;
            try {
              var w = o.shared.hiddenCallbacks;
              if (w !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < w.length; o++)
                  hh(w[o], v);
            } catch (M) {
              He(i, i.return, M);
            }
          }
          l && g & 64 && Ed(s), ca(s, s.return);
          break;
        case 27:
          Td(s);
        case 26:
        case 5:
          Rn(
            o,
            s,
            l
          ), l && i === null && g & 4 && Ad(s), ca(s, s.return);
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
          ), l && g & 4 && Md(o, s);
          break;
        case 13:
          Rn(
            o,
            s,
            l
          ), l && g & 4 && Rd(o, s);
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
      t = t.sibling;
    }
  }
  function ss(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ii(l));
  }
  function cs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ii(e));
  }
  function on(e, t, l, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ud(
          e,
          t,
          l,
          i
        ), t = t.sibling;
  }
  function Ud(e, t, l, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        on(
          e,
          t,
          l,
          i
        ), o & 2048 && sa(9, t);
        break;
      case 1:
        on(
          e,
          t,
          l,
          i
        );
        break;
      case 3:
        on(
          e,
          t,
          l,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ii(e)));
        break;
      case 12:
        if (o & 2048) {
          on(
            e,
            t,
            l,
            i
          ), e = t.stateNode;
          try {
            var s = t.memoizedProps, g = s.id, v = s.onPostCommit;
            typeof v == "function" && v(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (w) {
            He(t, t.return, w);
          }
        } else
          on(
            e,
            t,
            l,
            i
          );
        break;
      case 31:
        on(
          e,
          t,
          l,
          i
        );
        break;
      case 13:
        on(
          e,
          t,
          l,
          i
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, g = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? on(
          e,
          t,
          l,
          i
        ) : fa(e, t) : s._visibility & 2 ? on(
          e,
          t,
          l,
          i
        ) : (s._visibility |= 2, hi(
          e,
          t,
          l,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && ss(g, t);
        break;
      case 24:
        on(
          e,
          t,
          l,
          i
        ), o & 2048 && cs(t.alternate, t);
        break;
      default:
        on(
          e,
          t,
          l,
          i
        );
    }
  }
  function hi(e, t, l, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, g = t, v = l, w = i, M = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            s,
            g,
            v,
            w,
            o
          ), sa(8, g);
          break;
        case 23:
          break;
        case 22:
          var q = g.stateNode;
          g.memoizedState !== null ? q._visibility & 2 ? hi(
            s,
            g,
            v,
            w,
            o
          ) : fa(
            s,
            g
          ) : (q._visibility |= 2, hi(
            s,
            g,
            v,
            w,
            o
          )), o && M & 2048 && ss(
            g.alternate,
            g
          );
          break;
        case 24:
          hi(
            s,
            g,
            v,
            w,
            o
          ), o && M & 2048 && cs(g.alternate, g);
          break;
        default:
          hi(
            s,
            g,
            v,
            w,
            o
          );
      }
      t = t.sibling;
    }
  }
  function fa(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, i = t, o = i.flags;
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
        t = t.sibling;
      }
  }
  var ha = 8192;
  function di(e, t, l) {
    if (e.subtreeFlags & ha)
      for (e = e.child; e !== null; )
        jd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function jd(e, t, l) {
    switch (e.tag) {
      case 26:
        di(
          e,
          t,
          l
        ), e.flags & ha && e.memoizedState !== null && N0(
          l,
          un,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var i = un;
        un = Jr(e.stateNode.containerInfo), di(
          e,
          t,
          l
        ), un = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = ha, ha = 16777216, di(
          e,
          t,
          l
        ), ha = i) : di(
          e,
          t,
          l
        ));
        break;
      default:
        di(
          e,
          t,
          l
        );
    }
  }
  function Bd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function da(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var i = t[l];
          ft = i, qd(
            i,
            e
          );
        }
      Bd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Hd(e), e = e.sibling;
  }
  function Hd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        da(e), e.flags & 2048 && Wn(9, e, e.return);
        break;
      case 3:
        da(e);
        break;
      case 12:
        da(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ur(e)) : da(e);
        break;
      default:
        da(e);
    }
  }
  function Ur(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var i = t[l];
          ft = i, qd(
            i,
            e
          );
        }
      Bd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, t, t.return), Ur(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Ur(t));
          break;
        default:
          Ur(t);
      }
      e = e.sibling;
    }
  }
  function qd(e, t) {
    for (; ft !== null; ) {
      var l = ft;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, l, t);
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
      if (i = l.child, i !== null) i.return = l, ft = i;
      else
        e: for (l = e; ft !== null; ) {
          i = ft;
          var o = i.sibling, s = i.return;
          if (_d(i), i === l) {
            ft = null;
            break e;
          }
          if (o !== null) {
            o.return = s, ft = o;
            break e;
          }
          ft = s;
        }
    }
  }
  var Jb = {
    getCacheForType: function(e) {
      var t = pt(nt), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return pt(nt).controller.signal;
    }
  }, Ib = typeof WeakMap == "function" ? WeakMap : Map, Ue = 0, Xe = null, ze = null, De = 0, Be = 0, Yt = null, $n = !1, mi = !1, fs = !1, Nn = 0, Pe = 0, Pn = 0, _l = 0, hs = 0, Gt = 0, pi = 0, ma = null, Ot = null, ds = !1, jr = 0, Yd = 0, Br = 1 / 0, Hr = null, el = null, ot = 0, tl = null, gi = null, Ln = 0, ms = 0, ps = null, Gd = null, pa = 0, gs = null;
  function Vt() {
    return (Ue & 2) !== 0 && De !== 0 ? De & -De : _.T !== null ? ks() : lf();
  }
  function Vd() {
    if (Gt === 0)
      if ((De & 536870912) === 0 || Oe) {
        var e = Fa;
        Fa <<= 1, (Fa & 3932160) === 0 && (Fa = 262144), Gt = e;
      } else Gt = 536870912;
    return e = Ht.current, e !== null && (e.flags |= 32), Gt;
  }
  function Mt(e, t, l) {
    (e === Xe && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), nl(
      e,
      De,
      Gt,
      !1
    )), Ui(e, l), ((Ue & 2) === 0 || e !== Xe) && (e === Xe && ((Ue & 2) === 0 && (_l |= l), Pe === 4 && nl(
      e,
      De,
      Gt,
      !1
    )), mn(e));
  }
  function Qd(e, t, l) {
    if ((Ue & 6) !== 0) throw Error(u(327));
    var i = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Li(e, t), o = i ? Pb(e, t) : bs(e, t, !0), s = i;
    do {
      if (o === 0) {
        mi && !i && nl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, s && !Wb(l)) {
          o = bs(e, t, !1), s = !1;
          continue;
        }
        if (o === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var g = 0;
          else
            g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var v = e;
              o = ma;
              var w = v.current.memoizedState.isDehydrated;
              if (w && (yi(v, g).flags |= 256), g = bs(
                v,
                g,
                !1
              ), g !== 2) {
                if (fs && !w) {
                  v.errorRecoveryDisabledLanes |= s, _l |= s, o = 4;
                  break e;
                }
                s = Ot, Ot = o, s !== null && (Ot === null ? Ot = s : Ot.push.apply(
                  Ot,
                  s
                ));
              }
              o = g;
            }
            if (s = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          yi(e, 0), nl(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, s = o, s) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              nl(
                i,
                t,
                Gt,
                !$n
              );
              break e;
            case 2:
              Ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (o = jr + 300 - St(), 10 < o)) {
            if (nl(
              i,
              t,
              Gt,
              !$n
            ), Ja(i, 0, !0) !== 0) break e;
            Ln = t, i.timeoutHandle = Sm(
              Xd.bind(
                null,
                i,
                l,
                Ot,
                Hr,
                ds,
                t,
                Gt,
                _l,
                pi,
                $n,
                s,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          Xd(
            i,
            l,
            Ot,
            Hr,
            ds,
            t,
            Gt,
            _l,
            pi,
            $n,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mn(e);
  }
  function Xd(e, t, l, i, o, s, g, v, w, M, q, Q, N, j) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xn
      }, jd(
        t,
        s,
        Q
      );
      var ae = (s & 62914560) === s ? jr - St() : (s & 4194048) === s ? Yd - St() : 0;
      if (ae = L0(
        Q,
        ae
      ), ae !== null) {
        Ln = s, e.cancelPendingCommit = ae(
          Pd.bind(
            null,
            e,
            t,
            s,
            l,
            i,
            o,
            g,
            v,
            w,
            q,
            Q,
            null,
            N,
            j
          )
        ), nl(e, s, g, !M);
        return;
      }
    }
    Pd(
      e,
      t,
      s,
      l,
      i,
      o,
      g,
      v,
      w
    );
  }
  function Wb(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var i = 0; i < l.length; i++) {
          var o = l[i], s = o.getSnapshot;
          o = o.value;
          try {
            if (!jt(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function nl(e, t, l, i) {
    t &= ~hs, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var s = 31 - Qe(o), g = 1 << s;
      i[s] = -1, o &= ~g;
    }
    l !== 0 && ef(e, l, t);
  }
  function qr() {
    return (Ue & 6) === 0 ? (ga(0), !1) : !0;
  }
  function ys() {
    if (ze !== null) {
      if (Be === 0)
        var e = ze.return;
      else
        e = ze, wn = Sl = null, Ro(e), ui = null, $i = 0, e = ze;
      for (; e !== null; )
        kd(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function yi(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, y0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ln = 0, ys(), Xe = e, ze = l = kn(e.current, null), De = t, Be = 0, Yt = null, $n = !1, mi = Li(e, t), fs = !1, pi = Gt = hs = _l = Pn = Pe = 0, Ot = ma = null, ds = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - Qe(i), s = 1 << o;
        t |= e[o], i &= ~s;
      }
    return Nn = t, ur(), l;
  }
  function Zd(e, t) {
    ve = null, _.H = ra, t === ri || t === pr ? (t = oh(), Be = 3) : t === So ? (t = oh(), Be = 4) : Be = t === Jo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Yt = t, ze === null && (Pe = 1, Dr(
      e,
      It(t, e.current)
    ));
  }
  function Fd() {
    var e = Ht.current;
    return e === null ? !0 : (De & 4194048) === De ? en === null : (De & 62914560) === De || (De & 536870912) !== 0 ? e === en : !1;
  }
  function Kd() {
    var e = _.H;
    return _.H = ra, e === null ? ra : e;
  }
  function Jd() {
    var e = _.A;
    return _.A = Jb, e;
  }
  function Yr() {
    Pe = 4, $n || (De & 4194048) !== De && Ht.current !== null || (mi = !0), (Pn & 134217727) === 0 && (_l & 134217727) === 0 || Xe === null || nl(
      Xe,
      De,
      Gt,
      !1
    );
  }
  function bs(e, t, l) {
    var i = Ue;
    Ue |= 2;
    var o = Kd(), s = Jd();
    (Xe !== e || De !== t) && (Hr = null, yi(e, t)), t = !1;
    var g = Pe;
    e: do
      try {
        if (Be !== 0 && ze !== null) {
          var v = ze, w = Yt;
          switch (Be) {
            case 8:
              ys(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ht.current === null && (t = !0);
              var M = Be;
              if (Be = 0, Yt = null, bi(e, v, w, M), l && mi) {
                g = 0;
                break e;
              }
              break;
            default:
              M = Be, Be = 0, Yt = null, bi(e, v, w, M);
          }
        }
        $b(), g = Pe;
        break;
      } catch (q) {
        Zd(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, wn = Sl = null, Ue = i, _.H = o, _.A = s, ze === null && (Xe = null, De = 0, ur()), g;
  }
  function $b() {
    for (; ze !== null; ) Id(ze);
  }
  function Pb(e, t) {
    var l = Ue;
    Ue |= 2;
    var i = Kd(), o = Jd();
    Xe !== e || De !== t ? (Hr = null, Br = St() + 500, yi(e, t)) : mi = Li(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && ze !== null) {
          t = ze;
          var s = Yt;
          t: switch (Be) {
            case 1:
              Be = 0, Yt = null, bi(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (rh(s)) {
                Be = 0, Yt = null, Wd(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Xe !== e || (Be = 7), mn(e);
              }, s.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              rh(s) ? (Be = 0, Yt = null, Wd(t)) : (Be = 0, Yt = null, bi(e, t, s, 7));
              break;
            case 5:
              var g = null;
              switch (ze.tag) {
                case 26:
                  g = ze.memoizedState;
                case 5:
                case 27:
                  var v = ze;
                  if (g ? Um(g) : v.stateNode.complete) {
                    Be = 0, Yt = null;
                    var w = v.sibling;
                    if (w !== null) ze = w;
                    else {
                      var M = v.return;
                      M !== null ? (ze = M, Gr(M)) : ze = null;
                    }
                    break t;
                  }
              }
              Be = 0, Yt = null, bi(e, t, s, 5);
              break;
            case 6:
              Be = 0, Yt = null, bi(e, t, s, 6);
              break;
            case 8:
              ys(), Pe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        e0();
        break;
      } catch (q) {
        Zd(e, q);
      }
    while (!0);
    return wn = Sl = null, _.H = i, _.A = o, Ue = l, ze !== null ? 0 : (Xe = null, De = 0, ur(), Pe);
  }
  function e0() {
    for (; ze !== null && !_u(); )
      Id(ze);
  }
  function Id(e) {
    var t = xd(e.alternate, e, Nn);
    e.memoizedProps = e.pendingProps, t === null ? Gr(e) : ze = t;
  }
  function Wd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = md(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          De
        );
        break;
      case 11:
        t = md(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          De
        );
        break;
      case 5:
        Ro(t);
      default:
        kd(l, t), t = ze = Jf(t, Nn), t = xd(l, t, Nn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Gr(e) : ze = t;
  }
  function bi(e, t, l, i) {
    wn = Sl = null, Ro(t), ui = null, $i = 0;
    var o = t.return;
    try {
      if (Gb(
        e,
        o,
        t,
        l,
        De
      )) {
        Pe = 1, Dr(
          e,
          It(l, e.current)
        ), ze = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw ze = o, s;
      Pe = 1, Dr(
        e,
        It(l, e.current)
      ), ze = null;
      return;
    }
    t.flags & 32768 ? (Oe || i === 1 ? e = !0 : mi || (De & 536870912) !== 0 ? e = !1 : ($n = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Ht.current, i !== null && i.tag === 13 && (i.flags |= 16384))), $d(t, e)) : Gr(t);
  }
  function Gr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        $d(
          t,
          $n
        );
        return;
      }
      e = t.return;
      var l = Xb(
        t.alternate,
        t,
        Nn
      );
      if (l !== null) {
        ze = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function $d(e, t) {
    do {
      var l = Zb(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ze = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ze = e;
        return;
      }
      ze = e = l;
    } while (e !== null);
    Pe = 6, ze = null;
  }
  function Pd(e, t, l, i, o, s, g, v, w) {
    e.cancelPendingCommit = null;
    do
      Vr();
    while (ot !== 0);
    if ((Ue & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (s = t.lanes | t.childLanes, s |= ao, Ry(
        e,
        l,
        s,
        g,
        v,
        w
      ), e === Xe && (ze = Xe = null, De = 0), gi = t, tl = e, Ln = l, ms = s, ps = o, Gd = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, i0(ye, function() {
        return im(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = _.T, _.T = null, o = F.p, F.p = 2, g = Ue, Ue |= 4;
        try {
          Fb(e, t, l);
        } finally {
          Ue = g, F.p = o, _.T = i;
        }
      }
      ot = 1, em(), tm(), nm();
    }
  }
  function em() {
    if (ot === 1) {
      ot = 0;
      var e = tl, t = gi, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var i = F.p;
        F.p = 2;
        var o = Ue;
        Ue |= 4;
        try {
          Nd(t, e);
          var s = _s, g = qf(e.containerInfo), v = s.focusedElem, w = s.selectionRange;
          if (g !== v && v && v.ownerDocument && Hf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (w !== null && eo(v)) {
              var M = w.start, q = w.end;
              if (q === void 0 && (q = M), "selectionStart" in v)
                v.selectionStart = M, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var Q = v.ownerDocument || document, N = Q && Q.defaultView || window;
                if (N.getSelection) {
                  var j = N.getSelection(), ae = v.textContent.length, ge = Math.min(w.start, ae), Ge = w.end === void 0 ? ge : Math.min(w.end, ae);
                  !j.extend && ge > Ge && (g = Ge, Ge = ge, ge = g);
                  var C = Bf(
                    v,
                    ge
                  ), T = Bf(
                    v,
                    Ge
                  );
                  if (C && T && (j.rangeCount !== 1 || j.anchorNode !== C.node || j.anchorOffset !== C.offset || j.focusNode !== T.node || j.focusOffset !== T.offset)) {
                    var O = Q.createRange();
                    O.setStart(C.node, C.offset), j.removeAllRanges(), ge > Ge ? (j.addRange(O), j.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), j.addRange(O));
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
          tu = !!Ds, _s = Ds = null;
        } finally {
          Ue = o, F.p = i, _.T = l;
        }
      }
      e.current = t, ot = 2;
    }
  }
  function tm() {
    if (ot === 2) {
      ot = 0;
      var e = tl, t = gi, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var i = F.p;
        F.p = 2;
        var o = Ue;
        Ue |= 4;
        try {
          Dd(e, t.alternate, t);
        } finally {
          Ue = o, F.p = i, _.T = l;
        }
      }
      ot = 3;
    }
  }
  function nm() {
    if (ot === 4 || ot === 3) {
      ot = 0, Ou();
      var e = tl, t = gi, l = Ln, i = Gd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, gi = tl = null, lm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (el = null), Lu(l), t = t.stateNode, ut && typeof ut.onCommitFiberRoot == "function")
        try {
          ut.onCommitFiberRoot(
            kt,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = _.T, o = F.p, F.p = 2, _.T = null;
        try {
          for (var s = e.onRecoverableError, g = 0; g < i.length; g++) {
            var v = i[g];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          _.T = t, F.p = o;
        }
      }
      (Ln & 3) !== 0 && Vr(), mn(e), o = e.pendingLanes, (l & 261930) !== 0 && (o & 42) !== 0 ? e === gs ? pa++ : (pa = 0, gs = e) : pa = 0, ga(0);
    }
  }
  function lm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ii(t)));
  }
  function Vr() {
    return em(), tm(), nm(), im();
  }
  function im() {
    if (ot !== 5) return !1;
    var e = tl, t = ms;
    ms = 0;
    var l = Lu(Ln), i = _.T, o = F.p;
    try {
      F.p = 32 > l ? 32 : l, _.T = null, l = ps, ps = null;
      var s = tl, g = Ln;
      if (ot = 0, gi = tl = null, Ln = 0, (Ue & 6) !== 0) throw Error(u(331));
      var v = Ue;
      if (Ue |= 4, Hd(s.current), Ud(
        s,
        s.current,
        g,
        l
      ), Ue = v, ga(0, !1), ut && typeof ut.onPostCommitFiberRoot == "function")
        try {
          ut.onPostCommitFiberRoot(kt, s);
        } catch {
        }
      return !0;
    } finally {
      F.p = o, _.T = i, lm(e, t);
    }
  }
  function am(e, t, l) {
    t = It(l, t), t = Ko(e.stateNode, t, 2), e = Kn(e, t, 2), e !== null && (Ui(e, 2), mn(e));
  }
  function He(e, t, l) {
    if (e.tag === 3)
      am(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          am(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (el === null || !el.has(i))) {
            e = It(l, e), l = rd(2), i = Kn(t, l, 2), i !== null && (ud(
              l,
              i,
              t,
              e
            ), Ui(i, 2), mn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function vs(e, t, l) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Ib();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(l) || (fs = !0, o.add(l), e = t0.bind(null, e, t, l), t.then(e, e));
  }
  function t0(e, t, l) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Xe === e && (De & l) === l && (Pe === 4 || Pe === 3 && (De & 62914560) === De && 300 > St() - jr ? (Ue & 2) === 0 && yi(e, 0) : hs |= l, pi === De && (pi = 0)), mn(e);
  }
  function rm(e, t) {
    t === 0 && (t = Pc()), e = bl(e, t), e !== null && (Ui(e, t), mn(e));
  }
  function n0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), rm(e, l);
  }
  function l0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode, o = e.memoizedState;
        o !== null && (l = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(t), rm(e, l);
  }
  function i0(e, t) {
    return Hl(e, t);
  }
  var Qr = null, vi = null, xs = !1, Xr = !1, Ss = !1, ll = 0;
  function mn(e) {
    e !== vi && e.next === null && (vi === null ? Qr = vi = e : vi = vi.next = e), Xr = !0, xs || (xs = !0, r0());
  }
  function ga(e, t) {
    if (!Ss && Xr) {
      Ss = !0;
      do
        for (var l = !1, i = Qr; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var g = i.suspendedLanes, v = i.pingedLanes;
              s = (1 << 31 - Qe(42 | e) + 1) - 1, s &= o & ~(g & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (l = !0, cm(i, s));
          } else
            s = De, s = Ja(
              i,
              i === Xe ? s : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (s & 3) === 0 || Li(i, s) || (l = !0, cm(i, s));
          i = i.next;
        }
      while (l);
      Ss = !1;
    }
  }
  function a0() {
    um();
  }
  function um() {
    Xr = xs = !1;
    var e = 0;
    ll !== 0 && g0() && (e = ll);
    for (var t = St(), l = null, i = Qr; i !== null; ) {
      var o = i.next, s = om(i, t);
      s === 0 ? (i.next = null, l === null ? Qr = o : l.next = o, o === null && (vi = l)) : (l = i, (e !== 0 || (s & 3) !== 0) && (Xr = !0)), i = o;
    }
    ot !== 0 && ot !== 5 || ga(e), ll !== 0 && (ll = 0);
  }
  function om(e, t) {
    for (var l = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var g = 31 - Qe(s), v = 1 << g, w = o[g];
      w === -1 ? ((v & l) === 0 || (v & i) !== 0) && (o[g] = My(v, t)) : w <= t && (e.expiredLanes |= v), s &= ~v;
    }
    if (t = Xe, l = De, l = Ja(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, l === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Ni(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Li(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (i !== null && Ni(i), Lu(l)) {
        case 2:
        case 8:
          l = $;
          break;
        case 32:
          l = ye;
          break;
        case 268435456:
          l = je;
          break;
        default:
          l = ye;
      }
      return i = sm.bind(null, e), l = Hl(l, i), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return i !== null && i !== null && Ni(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function sm(e, t) {
    if (ot !== 0 && ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Vr() && e.callbackNode !== l)
      return null;
    var i = De;
    return i = Ja(
      e,
      e === Xe ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (Qd(e, i, t), om(e, St()), e.callbackNode != null && e.callbackNode === l ? sm.bind(null, e) : null);
  }
  function cm(e, t) {
    if (Vr()) return null;
    Qd(e, t, !0);
  }
  function r0() {
    b0(function() {
      (Ue & 6) !== 0 ? Hl(
        G,
        a0
      ) : um();
    });
  }
  function ks() {
    if (ll === 0) {
      var e = ii;
      e === 0 && (e = Za, Za <<= 1, (Za & 261888) === 0 && (Za = 256)), ll = e;
    }
    return ll;
  }
  function fm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pa("" + e);
  }
  function hm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function u0(e, t, l, i, o) {
    if (t === "submit" && l && l.stateNode === o) {
      var s = fm(
        (o[zt] || null).action
      ), g = i.submitter;
      g && (t = (t = g[zt] || null) ? fm(t.formAction) : g.getAttribute("formAction"), t !== null && (s = t, g = null));
      var v = new lr(
        "action",
        "action",
        null,
        i,
        o
      );
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (ll !== 0) {
                  var w = g ? hm(o, g) : new FormData(o);
                  Go(
                    l,
                    {
                      pending: !0,
                      data: w,
                      method: o.method,
                      action: s
                    },
                    null,
                    w
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), w = g ? hm(o, g) : new FormData(o), Go(
                  l,
                  {
                    pending: !0,
                    data: w,
                    method: o.method,
                    action: s
                  },
                  s,
                  w
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Es = 0; Es < io.length; Es++) {
    var ws = io[Es], o0 = ws.toLowerCase(), s0 = ws[0].toUpperCase() + ws.slice(1);
    rn(
      o0,
      "on" + s0
    );
  }
  rn(Vf, "onAnimationEnd"), rn(Qf, "onAnimationIteration"), rn(Xf, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(Ab, "onTransitionRun"), rn(zb, "onTransitionStart"), rn(Tb, "onTransitionCancel"), rn(Zf, "onTransitionEnd"), Ql("onMouseEnter", ["mouseout", "mouseover"]), Ql("onMouseLeave", ["mouseout", "mouseover"]), Ql("onPointerEnter", ["pointerout", "pointerover"]), Ql("onPointerLeave", ["pointerout", "pointerover"]), ml(
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
  ), c0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya)
  );
  function dm(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var i = e[l], o = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var v = i[g], w = v.instance, M = v.currentTarget;
            if (v = v.listener, w !== s && o.isPropagationStopped())
              break e;
            s = v, o.currentTarget = M;
            try {
              s(o);
            } catch (q) {
              rr(q);
            }
            o.currentTarget = null, s = w;
          }
        else
          for (g = 0; g < i.length; g++) {
            if (v = i[g], w = v.instance, M = v.currentTarget, v = v.listener, w !== s && o.isPropagationStopped())
              break e;
            s = v, o.currentTarget = M;
            try {
              s(o);
            } catch (q) {
              rr(q);
            }
            o.currentTarget = null, s = w;
          }
      }
    }
  }
  function Te(e, t) {
    var l = t[Uu];
    l === void 0 && (l = t[Uu] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    l.has(i) || (mm(t, e, 2, !1), l.add(i));
  }
  function As(e, t, l) {
    var i = 0;
    t && (i |= 4), mm(
      l,
      e,
      i,
      t
    );
  }
  var Zr = "_reactListening" + Math.random().toString(36).slice(2);
  function zs(e) {
    if (!e[Zr]) {
      e[Zr] = !0, uf.forEach(function(l) {
        l !== "selectionchange" && (c0.has(l) || As(l, !1, e), As(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Zr] || (t[Zr] = !0, As("selectionchange", !1, t));
    }
  }
  function mm(e, t, l, i) {
    switch (Vm(t)) {
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
      t,
      l,
      e
    ), o = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, l, !0) : o !== void 0 ? e.addEventListener(t, l, {
      passive: o
    }) : e.addEventListener(t, l, !1);
  }
  function Ts(e, t, l, i, o) {
    var s = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
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
              i = s = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    vf(function() {
      var M = s, q = Vu(l), Q = [];
      e: {
        var N = Ff.get(e);
        if (N !== void 0) {
          var j = lr, ae = e;
          switch (e) {
            case "keypress":
              if (tr(l) === 0) break e;
            case "keydown":
            case "keyup":
              j = lb;
              break;
            case "focusin":
              ae = "focus", j = Ju;
              break;
            case "focusout":
              ae = "blur", j = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ju;
              break;
            case "click":
              if (l.button === 2) break e;
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
              j = wf;
              break;
            case "toggle":
            case "beforetoggle":
              j = hb;
          }
          var ge = (t & 4) !== 0, Ge = !ge && (e === "scroll" || e === "scrollend"), C = ge ? N !== null ? N + "Capture" : null : N;
          ge = [];
          for (var T = M, O; T !== null; ) {
            var V = T;
            if (O = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || O === null || C === null || (V = Hi(T, C), V != null && ge.push(
              ba(T, V, O)
            )), Ge) break;
            T = T.return;
          }
          0 < ge.length && (N = new j(
            N,
            ae,
            null,
            l,
            q
          ), Q.push({ event: N, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", N && l !== Gu && (ae = l.relatedTarget || l.fromElement) && (Yl(ae) || ae[ql]))
            break e;
          if ((j || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, j ? (ae = l.relatedTarget || l.toElement, j = M, ae = ae ? Yl(ae) : null, ae !== null && (Ge = f(ae), ge = ae.tag, ae !== Ge || ge !== 5 && ge !== 27 && ge !== 6) && (ae = null)) : (j = null, ae = M), j !== ae)) {
            if (ge = kf, V = "onMouseLeave", C = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ge = wf, V = "onPointerLeave", C = "onPointerEnter", T = "pointer"), Ge = j == null ? N : Bi(j), O = ae == null ? N : Bi(ae), N = new ge(
              V,
              T + "leave",
              j,
              l,
              q
            ), N.target = Ge, N.relatedTarget = O, V = null, Yl(q) === M && (ge = new ge(
              C,
              T + "enter",
              ae,
              l,
              q
            ), ge.target = O, ge.relatedTarget = Ge, V = ge), Ge = V, j && ae)
              t: {
                for (ge = f0, C = j, T = ae, O = 0, V = C; V; V = ge(V))
                  O++;
                V = 0;
                for (var de = T; de; de = ge(de))
                  V++;
                for (; 0 < O - V; )
                  C = ge(C), O--;
                for (; 0 < V - O; )
                  T = ge(T), V--;
                for (; O--; ) {
                  if (C === T || T !== null && C === T.alternate) {
                    ge = C;
                    break t;
                  }
                  C = ge(C), T = ge(T);
                }
                ge = null;
              }
            else ge = null;
            j !== null && pm(
              Q,
              N,
              j,
              ge,
              !1
            ), ae !== null && Ge !== null && pm(
              Q,
              Ge,
              ae,
              ge,
              !0
            );
          }
        }
        e: {
          if (N = M ? Bi(M) : window, j = N.nodeName && N.nodeName.toLowerCase(), j === "select" || j === "input" && N.type === "file")
            var Ne = Mf;
          else if (_f(N))
            if (Rf)
              Ne = kb;
            else {
              Ne = xb;
              var se = vb;
            }
          else
            j = N.nodeName, !j || j.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? M && Yu(M.elementType) && (Ne = Mf) : Ne = Sb;
          if (Ne && (Ne = Ne(e, M))) {
            Of(
              Q,
              Ne,
              l,
              q
            );
            break e;
          }
          se && se(e, N, M), e === "focusout" && M && N.type === "number" && M.memoizedProps.value != null && qu(N, "number", N.value);
        }
        switch (se = M ? Bi(M) : window, e) {
          case "focusin":
            (_f(se) || se.contentEditable === "true") && (Il = se, to = M, Fi = null);
            break;
          case "focusout":
            Fi = to = Il = null;
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
            if (wb) break;
          case "keydown":
          case "keyup":
            Yf(Q, l, q);
        }
        var Se;
        if (Wu)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          Jl ? Cf(e, l) && (_e = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Af && l.locale !== "ko" && (Jl || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Jl && (Se = xf()) : (Yn = q, Zu = "value" in Yn ? Yn.value : Yn.textContent, Jl = !0)), se = Fr(M, _e), 0 < se.length && (_e = new Ef(
          _e,
          e,
          null,
          l,
          q
        ), Q.push({ event: _e, listeners: se }), Se ? _e.data = Se : (Se = Df(l), Se !== null && (_e.data = Se)))), (Se = mb ? pb(e, l) : gb(e, l)) && (_e = Fr(M, "onBeforeInput"), 0 < _e.length && (se = new Ef(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          q
        ), Q.push({
          event: se,
          listeners: _e
        }), se.data = Se)), u0(
          Q,
          e,
          M,
          l,
          q
        );
      }
      dm(Q, t);
    });
  }
  function ba(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Fr(e, t) {
    for (var l = t + "Capture", i = []; e !== null; ) {
      var o = e, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = Hi(e, l), o != null && i.unshift(
        ba(e, o, s)
      ), o = Hi(e, t), o != null && i.push(
        ba(e, o, s)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function f0(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function pm(e, t, l, i, o) {
    for (var s = t._reactName, g = []; l !== null && l !== i; ) {
      var v = l, w = v.alternate, M = v.stateNode;
      if (v = v.tag, w !== null && w === i) break;
      v !== 5 && v !== 26 && v !== 27 || M === null || (w = M, o ? (M = Hi(l, s), M != null && g.unshift(
        ba(l, M, w)
      )) : o || (M = Hi(l, s), M != null && g.push(
        ba(l, M, w)
      ))), l = l.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var h0 = /\r\n?/g, d0 = /\u0000|\uFFFD/g;
  function gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(h0, `
`).replace(d0, "");
  }
  function ym(e, t) {
    return t = gm(t), gm(e) === t;
  }
  function Ye(e, t, l, i, o, s) {
    switch (l) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || Zl(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && Zl(e, "" + i);
        break;
      case "className":
        Wa(e, "class", i);
        break;
      case "tabIndex":
        Wa(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wa(e, l, i);
        break;
      case "style":
        yf(e, i, s);
        break;
      case "data":
        if (t !== "object") {
          Wa(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(l);
          break;
        }
        i = Pa("" + i), e.setAttribute(l, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (l === "formAction" ? (t !== "input" && Ye(e, t, "name", o.name, o, null), Ye(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ye(e, t, "encType", o.encType, o, null), Ye(e, t, "method", o.method, o, null), Ye(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(l);
          break;
        }
        i = Pa("" + i), e.setAttribute(l, i);
        break;
      case "onClick":
        i != null && (e.onclick = xn);
        break;
      case "onScroll":
        i != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (l = i.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          e.removeAttribute("xlink:href");
          break;
        }
        l = Pa("" + i), e.setAttributeNS(
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
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(l, "" + i) : e.removeAttribute(l);
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
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(l, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(l, i) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(l, i) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(l) : e.setAttribute(l, i);
        break;
      case "popover":
        Te("beforetoggle", e), Te("toggle", e), Ia(e, "popover", i);
        break;
      case "xlinkActuate":
        vn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        vn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        vn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        vn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        vn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        vn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        vn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        vn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        vn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Ia(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Yy.get(l) || l, Ia(e, l, i));
    }
  }
  function Cs(e, t, l, i, o, s) {
    switch (l) {
      case "style":
        yf(e, i, s);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (l = i.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Zl(e, i) : (typeof i == "number" || typeof i == "bigint") && Zl(e, "" + i);
        break;
      case "onScroll":
        i != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Te("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = xn);
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
          e: {
            if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), t = l.slice(2, o ? l.length - 7 : void 0), s = e[zt] || null, s = s != null ? s[l] : null, typeof s == "function" && e.removeEventListener(t, s, o), typeof i == "function")) {
              typeof s != "function" && s !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, i, o);
              break e;
            }
            l in e ? e[l] = i : i === !0 ? e.setAttribute(l, "") : Ia(e, l, i);
          }
    }
  }
  function yt(e, t, l) {
    switch (t) {
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
        Te("error", e), Te("load", e);
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
                  throw Error(u(137, t));
                default:
                  Ye(e, t, s, g, l, null);
              }
          }
        o && Ye(e, t, "srcSet", l.srcSet, l, null), i && Ye(e, t, "src", l.src, l, null);
        return;
      case "input":
        Te("invalid", e);
        var v = s = g = o = null, w = null, M = null;
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
                  M = q;
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
                    throw Error(u(137, t));
                  break;
                default:
                  Ye(e, t, i, q, l, null);
              }
          }
        df(
          e,
          s,
          v,
          w,
          M,
          g,
          o,
          !1
        );
        return;
      case "select":
        Te("invalid", e), i = g = s = null;
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
                Ye(e, t, o, v, l, null);
            }
        t = s, l = g, e.multiple = !!i, t != null ? Xl(e, !!i, t, !1) : l != null && Xl(e, !!i, l, !0);
        return;
      case "textarea":
        Te("invalid", e), s = o = i = null;
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
                Ye(e, t, g, v, l, null);
            }
        pf(e, i, o, s);
        return;
      case "option":
        for (w in l)
          l.hasOwnProperty(w) && (i = l[w], i != null) && (w === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Ye(e, t, w, i, l, null));
        return;
      case "dialog":
        Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
        break;
      case "iframe":
      case "object":
        Te("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ya.length; i++)
          Te(ya[i], e);
        break;
      case "image":
        Te("error", e), Te("load", e);
        break;
      case "details":
        Te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Te("error", e), Te("load", e);
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
        for (M in l)
          if (l.hasOwnProperty(M) && (i = l[M], i != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ye(e, t, M, i, l, null);
            }
        return;
      default:
        if (Yu(t)) {
          for (q in l)
            l.hasOwnProperty(q) && (i = l[q], i !== void 0 && Cs(
              e,
              t,
              q,
              i,
              l,
              void 0
            ));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && (i = l[v], i != null && Ye(e, t, v, i, l, null));
  }
  function m0(e, t, l, i) {
    switch (t) {
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
        var o = null, s = null, g = null, v = null, w = null, M = null, q = null;
        for (j in l) {
          var Q = l[j];
          if (l.hasOwnProperty(j) && Q != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = Q;
              default:
                i.hasOwnProperty(j) || Ye(e, t, j, null, i, Q);
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
                M = j;
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
                  throw Error(u(137, t));
                break;
              default:
                j !== Q && Ye(
                  e,
                  t,
                  N,
                  j,
                  i,
                  Q
                );
            }
        }
        Hu(
          e,
          g,
          v,
          w,
          M,
          q,
          s,
          o
        );
        return;
      case "select":
        j = g = v = N = null;
        for (s in l)
          if (w = l[s], l.hasOwnProperty(s) && w != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                j = w;
              default:
                i.hasOwnProperty(s) || Ye(
                  e,
                  t,
                  s,
                  null,
                  i,
                  w
                );
            }
        for (o in i)
          if (s = i[o], w = l[o], i.hasOwnProperty(o) && (s != null || w != null))
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
                s !== w && Ye(
                  e,
                  t,
                  o,
                  s,
                  i,
                  w
                );
            }
        t = v, l = g, i = j, N != null ? Xl(e, !!l, N, !1) : !!i != !!l && (t != null ? Xl(e, !!l, t, !0) : Xl(e, !!l, l ? [] : "", !1));
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
                Ye(e, t, v, null, i, o);
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
                o !== s && Ye(e, t, g, o, i, s);
            }
        mf(e, N, j);
        return;
      case "option":
        for (var ae in l)
          N = l[ae], l.hasOwnProperty(ae) && N != null && !i.hasOwnProperty(ae) && (ae === "selected" ? e.selected = !1 : Ye(
            e,
            t,
            ae,
            null,
            i,
            N
          ));
        for (w in i)
          N = i[w], j = l[w], i.hasOwnProperty(w) && N !== j && (N != null || j != null) && (w === "selected" ? e.selected = N && typeof N != "function" && typeof N != "symbol" : Ye(
            e,
            t,
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
        for (var ge in l)
          N = l[ge], l.hasOwnProperty(ge) && N != null && !i.hasOwnProperty(ge) && Ye(e, t, ge, null, i, N);
        for (M in i)
          if (N = i[M], j = l[M], i.hasOwnProperty(M) && N !== j && (N != null || j != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(u(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  M,
                  N,
                  i,
                  j
                );
            }
        return;
      default:
        if (Yu(t)) {
          for (var Ge in l)
            N = l[Ge], l.hasOwnProperty(Ge) && N !== void 0 && !i.hasOwnProperty(Ge) && Cs(
              e,
              t,
              Ge,
              void 0,
              i,
              N
            );
          for (q in i)
            N = i[q], j = l[q], !i.hasOwnProperty(q) || N === j || N === void 0 && j === void 0 || Cs(
              e,
              t,
              q,
              N,
              i,
              j
            );
          return;
        }
    }
    for (var C in l)
      N = l[C], l.hasOwnProperty(C) && N != null && !i.hasOwnProperty(C) && Ye(e, t, C, null, i, N);
    for (Q in i)
      N = i[Q], j = l[Q], !i.hasOwnProperty(Q) || N === j || N == null && j == null || Ye(e, t, Q, N, i, j);
  }
  function bm(e) {
    switch (e) {
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
  function p0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), i = 0; i < l.length; i++) {
        var o = l[i], s = o.transferSize, g = o.initiatorType, v = o.duration;
        if (s && v && bm(g)) {
          for (g = 0, v = o.responseEnd, i += 1; i < l.length; i++) {
            var w = l[i], M = w.startTime;
            if (M > v) break;
            var q = w.transferSize, Q = w.initiatorType;
            q && bm(Q) && (w = w.responseEnd, g += q * (w < v ? 1 : (v - M) / (w - M)));
          }
          if (--i, t += 8 * (s + g) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ds = null, _s = null;
  function Kr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Os(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ms = null;
  function g0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ms ? !1 : (Ms = e, !0) : (Ms = null, !1);
  }
  var Sm = typeof setTimeout == "function" ? setTimeout : void 0, y0 = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(v0);
  } : Sm;
  function v0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function il(e) {
    return e === "head";
  }
  function Em(e, t) {
    var l = t, i = 0;
    do {
      var o = l.nextSibling;
      if (e.removeChild(l), o && o.nodeType === 8)
        if (l = o.data, l === "/$" || l === "/&") {
          if (i === 0) {
            e.removeChild(o), Ei(t);
            return;
          }
          i--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          i++;
        else if (l === "html")
          va(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, va(l);
          for (var s = l.firstChild; s; ) {
            var g = s.nextSibling, v = s.nodeName;
            s[ji] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = g;
          }
        } else
          l === "body" && va(e.ownerDocument.body);
      l = o;
    } while (l);
    Ei(t);
  }
  function wm(e, t) {
    var l = e;
    e = 0;
    do {
      var i = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), i && i.nodeType === 8)
        if (l = i.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = i;
    } while (l);
  }
  function Rs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
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
      e.removeChild(l);
    }
  }
  function x0(e, t, l, i) {
    for (; e.nodeType === 1; ) {
      var o = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[ji])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === s)
          return e;
      } else return e;
      if (e = tn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function S0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Am(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ns(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ls(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function k0(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var i = function() {
        t(), l.removeEventListener("DOMContentLoaded", i);
      };
      l.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Us = null;
  function zm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return tn(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Tm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cm(e, t, l) {
    switch (t = Kr(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function va(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ju(e);
  }
  var nn = /* @__PURE__ */ new Map(), Dm = /* @__PURE__ */ new Set();
  function Jr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Un = F.d;
  F.d = {
    f: E0,
    r: w0,
    D: A0,
    C: z0,
    L: T0,
    m: C0,
    X: _0,
    S: D0,
    M: O0
  };
  function E0() {
    var e = Un.f(), t = qr();
    return e || t;
  }
  function w0(e) {
    var t = Gl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Zh(t) : Un.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function _m(e, t, l) {
    var i = xi;
    if (i && typeof t == "string" && t) {
      var o = Kt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), Dm.has(o) || (Dm.add(o), e = { rel: e, crossOrigin: l, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), yt(t, "link", e), ct(t), i.head.appendChild(t)));
    }
  }
  function A0(e) {
    Un.D(e), _m("dns-prefetch", e, null);
  }
  function z0(e, t) {
    Un.C(e, t), _m("preconnect", e, t);
  }
  function T0(e, t, l) {
    Un.L(e, t, l);
    var i = xi;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Kt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + Kt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + Kt(
        l.imageSizes
      ) + '"]')) : o += '[href="' + Kt(e) + '"]';
      var s = o;
      switch (t) {
        case "style":
          s = Si(e);
          break;
        case "script":
          s = ki(e);
      }
      nn.has(s) || (e = y(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), nn.set(s, e), i.querySelector(o) !== null || t === "style" && i.querySelector(xa(s)) || t === "script" && i.querySelector(Sa(s)) || (t = i.createElement("link"), yt(t, "link", e), ct(t), i.head.appendChild(t)));
    }
  }
  function C0(e, t) {
    Un.m(e, t);
    var l = xi;
    if (l && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Kt(i) + '"][href="' + Kt(e) + '"]', s = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ki(e);
      }
      if (!nn.has(s) && (e = y({ rel: "modulepreload", href: e }, t), nn.set(s, e), l.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Sa(s)))
              return;
        }
        i = l.createElement("link"), yt(i, "link", e), ct(i), l.head.appendChild(i);
      }
    }
  }
  function D0(e, t, l) {
    Un.S(e, t, l);
    var i = xi;
    if (i && e) {
      var o = Vl(i).hoistableStyles, s = Si(e);
      t = t || "default";
      var g = o.get(s);
      if (!g) {
        var v = { loading: 0, preload: null };
        if (g = i.querySelector(
          xa(s)
        ))
          v.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = nn.get(s)) && js(e, l);
          var w = g = i.createElement("link");
          ct(w), yt(w, "link", e), w._p = new Promise(function(M, q) {
            w.onload = M, w.onerror = q;
          }), w.addEventListener("load", function() {
            v.loading |= 1;
          }), w.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ir(g, t, i);
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
  function _0(e, t) {
    Un.X(e, t);
    var l = xi;
    if (l && e) {
      var i = Vl(l).hoistableScripts, o = ki(e), s = i.get(o);
      s || (s = l.querySelector(Sa(o)), s || (e = y({ src: e, async: !0 }, t), (t = nn.get(o)) && Bs(e, t), s = l.createElement("script"), ct(s), yt(s, "link", e), l.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function O0(e, t) {
    Un.M(e, t);
    var l = xi;
    if (l && e) {
      var i = Vl(l).hoistableScripts, o = ki(e), s = i.get(o);
      s || (s = l.querySelector(Sa(o)), s || (e = y({ src: e, async: !0, type: "module" }, t), (t = nn.get(o)) && Bs(e, t), s = l.createElement("script"), ct(s), yt(s, "link", e), l.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function Om(e, t, l, i) {
    var o = (o = ce.current) ? Jr(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Si(l.href), l = Vl(
          o
        ).hoistableStyles, i = l.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Si(l.href);
          var s = Vl(
            o
          ).hoistableStyles, g = s.get(e);
          if (g || (o = o.ownerDocument || o, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, g), (s = o.querySelector(
            xa(e)
          )) && !s._p && (g.instance = s, g.state.loading = 5), nn.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, nn.set(e, l), s || M0(
            o,
            e,
            l,
            g.state
          ))), t && i === null)
            throw Error(u(528, ""));
          return g;
        }
        if (t && i !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ki(l), l = Vl(
          o
        ).hoistableScripts, i = l.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function Si(e) {
    return 'href="' + Kt(e) + '"';
  }
  function xa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mm(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function M0(e, t, l, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), yt(t, "link", l), ct(t), e.head.appendChild(t));
  }
  function ki(e) {
    return '[src="' + Kt(e) + '"]';
  }
  function Sa(e) {
    return "script[async]" + e;
  }
  function Rm(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Kt(l.href) + '"]'
          );
          if (i)
            return t.instance = i, ct(i), i;
          var o = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), ct(i), yt(i, "style", o), Ir(i, l.precedence, e), t.instance = i;
        case "stylesheet":
          o = Si(l.href);
          var s = e.querySelector(
            xa(o)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, ct(s), s;
          i = Mm(l), (o = nn.get(o)) && js(i, o), s = (e.ownerDocument || e).createElement("link"), ct(s);
          var g = s;
          return g._p = new Promise(function(v, w) {
            g.onload = v, g.onerror = w;
          }), yt(s, "link", i), t.state.loading |= 4, Ir(s, l.precedence, e), t.instance = s;
        case "script":
          return s = ki(l.src), (o = e.querySelector(
            Sa(s)
          )) ? (t.instance = o, ct(o), o) : (i = l, (o = nn.get(s)) && (i = y({}, l), Bs(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ct(o), yt(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Ir(i, l.precedence, e));
    return t.instance;
  }
  function Ir(e, t, l) {
    for (var i = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, s = o, g = 0; g < i.length; g++) {
      var v = i[g];
      if (v.dataset.precedence === t) s = v;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function js(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Bs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Wr = null;
  function Nm(e, t, l) {
    if (Wr === null) {
      var i = /* @__PURE__ */ new Map(), o = Wr = /* @__PURE__ */ new Map();
      o.set(l, i);
    } else
      o = Wr, i = o.get(l), i || (i = /* @__PURE__ */ new Map(), o.set(l, i));
    if (i.has(e)) return i;
    for (i.set(e, null), l = l.getElementsByTagName(e), o = 0; o < l.length; o++) {
      var s = l[o];
      if (!(s[ji] || s[dt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = s.getAttribute(t) || "";
        g = e + g;
        var v = i.get(g);
        v ? v.push(s) : i.set(g, [s]);
      }
    }
    return i;
  }
  function Lm(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function R0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Um(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function N0(e, t, l, i) {
    if (l.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var o = Si(i.href), s = t.querySelector(
          xa(o)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = $r.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = s, ct(s);
          return;
        }
        s = t.ownerDocument || t, i = Mm(i), (o = nn.get(o)) && js(i, o), s = s.createElement("link"), ct(s);
        var g = s;
        g._p = new Promise(function(v, w) {
          g.onload = v, g.onerror = w;
        }), yt(s, "link", i), l.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = $r.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Hs = 0;
  function L0(e, t) {
    return e.stylesheets && e.count === 0 && eu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var i = setTimeout(function() {
        if (e.stylesheets && eu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Hs === 0 && (Hs = 62500 * p0());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && eu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > Hs ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function $r() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) eu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Pr = null;
  function eu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Pr = /* @__PURE__ */ new Map(), t.forEach(U0, e), Pr = null, $r.call(e));
  }
  function U0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Pr.get(e);
      if (l) var i = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Pr.set(e, l);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var g = o[s];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (l.set(g.dataset.precedence, g), i = g);
        }
        i && l.set(null, i);
      }
      o = t.instance, g = o.getAttribute("data-precedence"), s = l.get(g) || i, s === i && l.set(null, o), l.set(g, o), this.count++, i = $r.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
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
  function j0(e, t, l, i, o, s, g, v, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ru(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ru(0), this.hiddenUpdates = Ru(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jm(e, t, l, i, o, s, g, v, w, M, q, Q) {
    return e = new j0(
      e,
      t,
      l,
      g,
      w,
      M,
      q,
      Q,
      v
    ), t = 1, s === !0 && (t |= 24), s = Bt(3, null, null, t), e.current = s, s.stateNode = e, t = bo(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: l,
      cache: t
    }, ko(s), e;
  }
  function Bm(e) {
    return e ? (e = Pl, e) : Pl;
  }
  function Hm(e, t, l, i, o, s) {
    o = Bm(o), i.context === null ? i.context = o : i.pendingContext = o, i = Fn(t), i.payload = { element: l }, s = s === void 0 ? null : s, s !== null && (i.callback = s), l = Kn(e, i, t), l !== null && (Mt(l, e, t), ea(l, e, t));
  }
  function qm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function qs(e, t) {
    qm(e, t), (e = e.alternate) && qm(e, t);
  }
  function Ym(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bl(e, 67108864);
      t !== null && Mt(t, e, 67108864), qs(e, 67108864);
    }
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Vt();
      t = Nu(t);
      var l = bl(e, t);
      l !== null && Mt(l, e, t), qs(e, t);
    }
  }
  var tu = !0;
  function B0(e, t, l, i) {
    var o = _.T;
    _.T = null;
    var s = F.p;
    try {
      F.p = 2, Ys(e, t, l, i);
    } finally {
      F.p = s, _.T = o;
    }
  }
  function H0(e, t, l, i) {
    var o = _.T;
    _.T = null;
    var s = F.p;
    try {
      F.p = 8, Ys(e, t, l, i);
    } finally {
      F.p = s, _.T = o;
    }
  }
  function Ys(e, t, l, i) {
    if (tu) {
      var o = Gs(i);
      if (o === null)
        Ts(
          e,
          t,
          i,
          nu,
          l
        ), Qm(e, i);
      else if (Y0(
        o,
        e,
        t,
        l,
        i
      ))
        i.stopPropagation();
      else if (Qm(e, i), t & 4 && -1 < q0.indexOf(e)) {
        for (; o !== null; ) {
          var s = Gl(o);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var g = dl(s.pendingLanes);
                  if (g !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var w = 1 << 31 - Qe(g);
                      v.entanglements[1] |= w, g &= ~w;
                    }
                    mn(s), (Ue & 6) === 0 && (Br = St() + 500, ga(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = bl(s, 2), v !== null && Mt(v, s, 2), qr(), qs(s, 2);
            }
          if (s = Gs(i), s === null && Ts(
            e,
            t,
            i,
            nu,
            l
          ), s === o) break;
          o = s;
        }
        o !== null && i.stopPropagation();
      } else
        Ts(
          e,
          t,
          i,
          null,
          l
        );
    }
  }
  function Gs(e) {
    return e = Vu(e), Vs(e);
  }
  var nu = null;
  function Vs(e) {
    if (nu = null, e = Yl(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return nu = e, null;
  }
  function Vm(e) {
    switch (e) {
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
        switch (Mu()) {
          case G:
            return 2;
          case $:
            return 8;
          case ye:
          case Ae:
            return 32;
          case je:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qs = !1, al = null, rl = null, ul = null, Ea = /* @__PURE__ */ new Map(), wa = /* @__PURE__ */ new Map(), ol = [], q0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Qm(e, t) {
    switch (e) {
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
        Ea.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wa.delete(t.pointerId);
    }
  }
  function Aa(e, t, l, i, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [o]
    }, t !== null && (t = Gl(t), t !== null && Ym(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Y0(e, t, l, i, o) {
    switch (t) {
      case "focusin":
        return al = Aa(
          al,
          e,
          t,
          l,
          i,
          o
        ), !0;
      case "dragenter":
        return rl = Aa(
          rl,
          e,
          t,
          l,
          i,
          o
        ), !0;
      case "mouseover":
        return ul = Aa(
          ul,
          e,
          t,
          l,
          i,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return Ea.set(
          s,
          Aa(
            Ea.get(s) || null,
            e,
            t,
            l,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, wa.set(
          s,
          Aa(
            wa.get(s) || null,
            e,
            t,
            l,
            i,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Xm(e) {
    var t = Yl(e.target);
    if (t !== null) {
      var l = f(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = h(l), t !== null) {
            e.blockedOn = t, af(e.priority, function() {
              Gm(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(l), t !== null) {
            e.blockedOn = t, af(e.priority, function() {
              Gm(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function lu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Gs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var i = new l.constructor(
          l.type,
          l
        );
        Gu = i, l.target.dispatchEvent(i), Gu = null;
      } else
        return t = Gl(l), t !== null && Ym(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Zm(e, t, l) {
    lu(e) && l.delete(t);
  }
  function G0() {
    Qs = !1, al !== null && lu(al) && (al = null), rl !== null && lu(rl) && (rl = null), ul !== null && lu(ul) && (ul = null), Ea.forEach(Zm), wa.forEach(Zm);
  }
  function iu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qs || (Qs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      G0
    )));
  }
  var au = null;
  function Fm(e) {
    au !== e && (au = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        au === e && (au = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (Vs(i || l) === null)
              continue;
            break;
          }
          var s = Gl(l);
          s !== null && (e.splice(t, 3), t -= 3, Go(
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
  function Ei(e) {
    function t(w) {
      return iu(w, e);
    }
    al !== null && iu(al, e), rl !== null && iu(rl, e), ul !== null && iu(ul, e), Ea.forEach(t), wa.forEach(t);
    for (var l = 0; l < ol.length; l++) {
      var i = ol[l];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < ol.length && (l = ol[0], l.blockedOn === null); )
      Xm(l), l.blockedOn === null && ol.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (i = 0; i < l.length; i += 3) {
        var o = l[i], s = l[i + 1], g = o[zt] || null;
        if (typeof s == "function")
          g || Fm(l);
        else if (g) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, g = s[zt] || null)
              v = g.formAction;
            else if (Vs(o) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? l[i + 1] = v : (l.splice(i, 3), i -= 3), Fm(l);
        }
      }
  }
  function Km() {
    function e(s) {
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
    function t() {
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
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function Xs(e) {
    this._internalRoot = e;
  }
  ru.prototype.render = Xs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var l = t.current, i = Vt();
    Hm(l, i, e, t, null, null);
  }, ru.prototype.unmount = Xs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Hm(e.current, 2, null, e, null, null), qr(), t[ql] = null;
    }
  };
  function ru(e) {
    this._internalRoot = e;
  }
  ru.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = lf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ol.length && t !== 0 && t < ol[l].priority; l++) ;
      ol.splice(l, 0, e), l === 0 && Xm(e);
    }
  };
  var Jm = r.version;
  if (Jm !== "19.2.3")
    throw Error(
      u(
        527,
        Jm,
        "19.2.3"
      )
    );
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = d(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
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
        kt = uu.inject(
          V0
        ), ut = uu;
      } catch {
      }
  }
  return Ta.createRoot = function(e, t) {
    if (!c(e)) throw Error(u(299));
    var l = !1, i = "", o = nd, s = ld, g = id;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = jm(
      e,
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
      Km
    ), e[ql] = t.current, zs(e), new Xs(t);
  }, Ta.hydrateRoot = function(e, t, l) {
    if (!c(e)) throw Error(u(299));
    var i = !1, o = "", s = nd, g = ld, v = id, w = null;
    return l != null && (l.unstable_strictMode === !0 && (i = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (s = l.onUncaughtError), l.onCaughtError !== void 0 && (g = l.onCaughtError), l.onRecoverableError !== void 0 && (v = l.onRecoverableError), l.formState !== void 0 && (w = l.formState)), t = jm(
      e,
      1,
      !0,
      t,
      l ?? null,
      i,
      o,
      w,
      s,
      g,
      v,
      Km
    ), t.context = Bm(null), l = t.current, i = Vt(), i = Nu(i), o = Fn(i), o.callback = null, Kn(l, o, i), l = i, t.current.lanes = l, Ui(t, l), mn(t), e[ql] = t.current, zs(e), new ru(t);
  }, Ta.version = "19.2.3", Ta;
}
var ap;
function P0() {
  if (ap) return Ks.exports;
  ap = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Ks.exports = $0(), Ks.exports;
}
var e1 = P0(), t1 = Object.defineProperty, n1 = (n, r, a) => r in n ? t1(n, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[r] = a, ou = (n, r, a) => n1(n, typeof r != "symbol" ? r + "" : r, a);
const l1 = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, i1 = {
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
}, a1 = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
};
function r1(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (r, a, u) => `${a}-${u.toLowerCase()}`
  );
}
function rg(n) {
  return n.replace(/[-:]([a-z])/g, (r, a) => `${a.toUpperCase()}`);
}
const u1 = {
  stringify: (n) => n.name,
  parse: (n, r, a) => {
    const u = (() => {
      const c = rg(r);
      if (typeof a < "u" && c in a.container)
        return a.container[c];
    })();
    return typeof u == "function" ? u.bind(a) : void 0;
  }
}, o1 = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, s1 = {
  stringify: (n) => n,
  parse: (n) => n
}, $s = {
  string: s1,
  number: o1,
  boolean: l1,
  function: i1,
  method: u1,
  json: a1
}, Ca = /* @__PURE__ */ Symbol.for("r2wc.render"), su = /* @__PURE__ */ Symbol.for("r2wc.connected"), Ol = /* @__PURE__ */ Symbol.for("r2wc.context"), Qt = /* @__PURE__ */ Symbol.for("r2wc.props");
function c1(n, r, a) {
  var u, c, f;
  r.props || (r.props = n.propTypes ? Object.keys(n.propTypes) : []), r.events || (r.events = []);
  const h = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), m = Array.isArray(r.events) ? r.events.slice() : Object.keys(r.events), p = {}, d = {}, b = {}, y = {};
  for (const x of h) {
    p[x] = Array.isArray(r.props) ? "string" : r.props[x];
    const A = r1(x);
    b[x] = A, y[A] = x;
  }
  for (const x of m)
    d[x] = Array.isArray(r.events) ? {} : r.events[x];
  class S extends HTMLElement {
    constructor() {
      super(), ou(this, f, !0), ou(this, c), ou(this, u, {}), ou(this, "container"), r.shadow ? this.container = this.attachShadow({
        mode: r.shadow
      }) : this.container = this, this[Qt].container = this.container;
      for (const A of h) {
        const R = b[A], L = this.getAttribute(R), D = p[A], Z = D ? $s[D] : null;
        if (D === "method") {
          const H = rg(R);
          Object.defineProperty(this[Qt].container, H, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Qt][H];
            },
            set(le) {
              this[Qt][H] = le, this[Ca]();
            }
          }), this[Qt][A] = Z.parse(L, R, this);
        }
        Z != null && Z.parse && L && (this[Qt][A] = Z.parse(L, R, this));
      }
      for (const A of m)
        this[Qt][A] = (R) => {
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
      this[su] = !0, this[Ca]();
    }
    disconnectedCallback() {
      this[su] = !1, this[Ol] && a.unmount(this[Ol]), delete this[Ol];
    }
    attributeChangedCallback(A, R, L) {
      const D = y[A], Z = p[D], H = Z ? $s[Z] : null;
      D in p && H != null && H.parse && L && (this[Qt][D] = H.parse(L, A, this), this[Ca]());
    }
    [(f = su, c = Ol, u = Qt, Ca)]() {
      this[su] && (this[Ol] ? a.update(this[Ol], this[Qt]) : this[Ol] = a.mount(
        this.container,
        n,
        this[Qt]
      ));
    }
  }
  for (const x of h) {
    const A = b[x], R = p[x];
    Object.defineProperty(S.prototype, x, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Qt][x];
      },
      set(L) {
        this[Qt][x] = L;
        const D = R ? $s[R] : null;
        if (D != null && D.stringify) {
          const Z = D.stringify(L, A, this);
          this.getAttribute(A) !== Z && this.setAttribute(A, Z);
        } else
          this[Ca]();
      }
    });
  }
  return S;
}
function f1(n, r, a) {
  const u = e1.createRoot(n), c = ag.createElement(r, a);
  return u.render(c), {
    root: u,
    ReactComponent: r
  };
}
function h1({ root: n, ReactComponent: r }, a) {
  const u = ag.createElement(r, a);
  n.render(u);
}
function d1({ root: n }) {
  n.unmount();
}
function m1(n, r = {}) {
  return c1(n, r, { mount: f1, update: h1, unmount: d1 });
}
async function p1() {
  const n = /* @__PURE__ */ new Date(), r = new Date(n);
  r.setDate(r.getDate() - 1);
  const a = rp(n), u = rp(r), c = await up(a), f = await up(u), h = new Uint8Array(c.length);
  for (let m = 0; m < c.length; m++)
    h[m] = c[m] ^ f[m];
  return g1(h).substring(0, 64);
}
function rp(n) {
  const r = n.getFullYear(), a = String(n.getMonth() + 1).padStart(2, "0"), u = String(n.getDate()).padStart(2, "0");
  return `${r}-${a}-${u}`;
}
async function up(n) {
  const r = new TextEncoder().encode(n), a = await crypto.subtle.digest("SHA-256", r);
  return new Uint8Array(a);
}
function g1(n) {
  return Array.from(n).map((r) => r.toString(16).padStart(2, "0")).join("");
}
const y1 = async (n, r, a, u) => {
  const c = await fetch("/api/chat", {
    method: "POST",
    credentials: "include",
    headers: await ug(),
    // body: JSON.stringify(payload),
    body: JSON.stringify({
      pageContent: a,
      url: u,
      assistantId: r,
      conversationHistory: [{ message: n }]
    })
  }), f = await c.json();
  if (!c.ok || "error" in f && f.error)
    throw new Error(
      "error" in f && f.error ? f.error : `Response status: ${c.status}`
    );
  return f;
};
async function ug(n) {
  const r = new Headers();
  r.set("Content-Type", "application/json; charset=utf-8");
  const a = await p1();
  r.set("X-API-Key", a);
  const u = localStorage.getItem("lruRagChatToken");
  return u && r.set("X-Chat-Token", u), r;
}
async function b1(n = void 0, r = void 0) {
  if (r && n)
    try {
      const a = await fetch(`/api/chat/init?assistantId=${r}`, {
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
const v1 = { header: { title: "🎓 Lærerens Indholdsassistent", subtitle: "Omdan webindhold til undervisningsmaterialer" }, contentSource: { chooseLabel: "Hvordan vil du indlæse indhold?", loadFromUrl: "🌐 Indlæs fra URL", uploadPdf: "📄 Upload PDF", urlLabel: "Indlæs fra URL", uploadPdfLabel: "Upload PDF", urlPlaceholder: "https://eksempel.dk/artikel", loadUrlButton: "Indlæs URL", loading: "Indlæser...", uploadPdfButton: "📄 Upload PDF", contentLoadedFrom: "✓ Indhold indlæst fra:", pdfLoaded: "✓ PDF indlæst:", startFresh: "🔄 Start forfra", waitingForFile: "Venter på filvalg..." }, quickActions: { title: "Hurtige handlinger:", summarize: "📝 Opsummer", createPodcast: "🎙️ Lav Podcast", generateQuestions: "❓ Generer spørgsmål", studyGuide: "📚 Studievejledning", quiz: "🧪 Quiz" }, suggestions: { summarize: "Lav en kortfattet opsummering af hovedpunkterne fra dette indhold.", createPodcast: "Lav et podcast-manuskript baseret på dette indhold, herunder introduktion, diskussionspunkter og konklusion.", generateQuestions: "Lav 10 forståelsesspørgsmål om dette indhold, der egner sig til elever.", studyGuide: "Lav en detaljeret studievejledning med nøglebegreber, hovedkoncepter og vigtige pointer.", quiz: "Lav en quiz med 5 multiple choice-spørgsmål baseret på dette indhold med svarforklaringer." }, chat: { emptyStateTitle: "👆 Indtast en URL eller upload en PDF for at komme i gang", emptyStateSubtitle: "Indlæs indhold, og jeg hjælper dig med at lave undervisningsmaterialer fra det", inputPlaceholder: "Bed mig om at gøre noget med dette indhold...", inputPlaceholderEmpty: "Spørg mig om noget eller indlæs indhold for at analysere...", sendButton: "Send", pdfLoadedMessage: "Jeg har indlæst PDF-indholdet ({pages} sider). Du kan nu bede mig om at opsummere det, lave et podcast-manuskript, generere spørgsmål eller noget andet, du gerne vil have mig til at gøre med dette indhold.", urlLoadedMessage: "Jeg har indlæst indholdet fra {url}. Du kan nu bede mig om at opsummere det, lave et podcast-manuskript, generere spørgsmål eller noget andet, du gerne vil have mig til at gøre med dette indhold.", copyTooltip: "Kopier til udklipsholder", copiedTooltip: "Kopieret!", readAloudTooltip: "Læs højt", stopReadingTooltip: "Stop læsning" }, providers: { claude: "Claude", openai: "OpenAI", rag: "RAG" }, errors: { pdfUploadFailed: "Kunne ikke uploade PDF-filen", urlFetchFailed: "Kunne ikke hente websidens indhold. Sørg for, at URL'en er gyldig.", pdfNotValid: "Upload venligst en PDF-fil", fetchContentLength: "Hentet indhold længde:", apiError: `❌ Fejl: {error}

Tjek venligst:
1. Din API-nøgle er konfigureret i .env.local
2. API-nøglen er gyldig
3. Du har tilstrækkelige kreditter

Tjek browserkonsollen for flere detaljer.` } }, x1 = { header: { title: "🎓 Teacher's Content Assistant", subtitle: "Transform web content into educational materials" }, contentSource: { chooseLabel: "How would you like to load content?", loadFromUrl: "🌐 Load from URL", uploadPdf: "📄 Upload PDF", urlLabel: "Load from URL", uploadPdfLabel: "Upload PDF", urlPlaceholder: "https://example.com/article", loadUrlButton: "Load URL", loading: "Loading...", uploadPdfButton: "📄 Upload PDF", contentLoadedFrom: "✓ Content loaded from:", pdfLoaded: "✓ PDF loaded:", startFresh: "🔄 Start Fresh", waitingForFile: "Waiting for file selection..." }, quickActions: { title: "Quick Actions:", summarize: "📝 Summarize", createPodcast: "🎙️ Create Podcast", generateQuestions: "❓ Generate Questions", studyGuide: "📚 Study Guide", quiz: "🧪 Quiz" }, suggestions: { summarize: "Create a concise summary of the main points from this content.", createPodcast: "Create a podcast script based on this content, including an introduction, key discussion points, and conclusion.", generateQuestions: "Create 10 comprehension questions about this content suitable for students.", studyGuide: "Create a detailed study guide with key terms, main concepts, and important takeaways.", quiz: "Create a 5-question multiple choice quiz based on this content with answer explanations." }, chat: { emptyStateTitle: "👆 Enter a URL or upload a PDF to get started", emptyStateSubtitle: "Load content and I'll help you create educational materials from it", inputPlaceholder: "Ask me to do something with this content...", inputPlaceholderEmpty: "Ask me anything or load content to analyze...", sendButton: "Send", pdfLoadedMessage: "I've loaded the PDF content ({pages} pages). You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.", urlLoadedMessage: "I've loaded the content from {url}. You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.", copyTooltip: "Copy to clipboard", copiedTooltip: "Copied!", readAloudTooltip: "Read aloud", stopReadingTooltip: "Stop reading" }, providers: { claude: "Claude", openai: "OpenAI", rag: "RAG" }, errors: { pdfUploadFailed: "Failed to upload PDF file", urlFetchFailed: "Failed to fetch the webpage content. Please make sure the URL is valid.", pdfNotValid: "Please upload a PDF file", fetchContentLength: "Fetched content length:", apiError: `❌ Error: {error}

Please check:
1. Your API key is configured in .env.local
2. The API key is valid
3. You have sufficient credits

Check the browser console for more details.` } }, S1 = {
  da: v1,
  en: x1
}, og = Ie.createContext(
  void 0
);
function k1({ children: n }) {
  const [r, a] = Ie.useState("da");
  Ie.useEffect(() => {
    const f = localStorage.getItem("language");
    f && (f === "da" || f === "en") && a(f);
  }, []);
  const u = (f) => {
    a(f), localStorage.setItem("language", f);
  }, c = S1[r];
  return /* @__PURE__ */ te.jsx(
    og.Provider,
    {
      value: { language: r, setLanguage: u, t: c },
      children: n
    }
  );
}
function wu() {
  const n = Ie.useContext(og);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function E1({ title: n }) {
  const { language: r, setLanguage: a, t: u } = wu();
  return /* @__PURE__ */ te.jsx("div", { className: "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-8 py-4", children: /* @__PURE__ */ te.jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ te.jsxs("div", { children: [
      /* @__PURE__ */ te.jsx("h1", { className: "text-2xl font-bold rainbow-text", children: n }),
      /* @__PURE__ */ te.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: u.header.subtitle })
    ] }),
    /* @__PURE__ */ te.jsxs(
      "button",
      {
        onClick: () => a(r === "en" ? "da" : "en"),
        className: "relative inline-flex h-10 w-20 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        "aria-label": "Toggle language",
        children: [
          /* @__PURE__ */ te.jsx(
            "span",
            {
              className: `absolute text-xl opacity-60 ${r === "en" ? "right-2.5" : "left-2.5"}`,
              children: r === "en" ? "🇩🇰" : "🇬🇧"
            }
          ),
          /* @__PURE__ */ te.jsx(
            "span",
            {
              className: `inline-flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform ${r === "en" ? "translate-x-1" : "translate-x-11"}`,
              children: /* @__PURE__ */ te.jsx("span", { className: "text-xl", children: r === "en" ? "🇬🇧" : "🇩🇰" })
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
const op = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, sp = cg, fg = (n, r) => (a) => {
  var u;
  if (r?.variants == null) return sp(n, a?.class, a?.className);
  const { variants: c, defaultVariants: f } = r, h = Object.keys(c).map((d) => {
    const b = a?.[d], y = f?.[d];
    if (b === null) return null;
    const S = op(b) || op(y);
    return c[d][S];
  }), m = a && Object.entries(a).reduce((d, b) => {
    let [y, S] = b;
    return S === void 0 || (d[y] = S), d;
  }, {}), p = r == null || (u = r.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((d, b) => {
    let { class: y, className: S, ...x } = b;
    return Object.entries(x).every((A) => {
      let [R, L] = A;
      return Array.isArray(L) ? L.includes({
        ...f,
        ...m
      }[R]) : {
        ...f,
        ...m
      }[R] === L;
    }) ? [
      ...d,
      y,
      S
    ] : d;
  }, []);
  return sp(n, h, p, a?.class, a?.className);
}, w1 = (n, r) => {
  const a = new Array(n.length + r.length);
  for (let u = 0; u < n.length; u++)
    a[u] = n[u];
  for (let u = 0; u < r.length; u++)
    a[n.length + u] = r[u];
  return a;
}, A1 = (n, r) => ({
  classGroupId: n,
  validator: r
}), hg = (n = /* @__PURE__ */ new Map(), r = null, a) => ({
  nextPart: n,
  validators: r,
  classGroupId: a
}), bu = "-", cp = [], z1 = "arbitrary..", T1 = (n) => {
  const r = D1(n), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: u
  } = n;
  return {
    getClassGroupId: (h) => {
      if (h.startsWith("[") && h.endsWith("]"))
        return C1(h);
      const m = h.split(bu), p = m[0] === "" && m.length > 1 ? 1 : 0;
      return dg(m, p, r);
    },
    getConflictingClassGroupIds: (h, m) => {
      if (m) {
        const p = u[h], d = a[h];
        return p ? d ? w1(d, p) : p : d || cp;
      }
      return a[h] || cp;
    }
  };
}, dg = (n, r, a) => {
  if (n.length - r === 0)
    return a.classGroupId;
  const c = n[r], f = a.nextPart.get(c);
  if (f) {
    const d = dg(n, r + 1, f);
    if (d) return d;
  }
  const h = a.validators;
  if (h === null)
    return;
  const m = r === 0 ? n.join(bu) : n.slice(r).join(bu), p = h.length;
  for (let d = 0; d < p; d++) {
    const b = h[d];
    if (b.validator(m))
      return b.classGroupId;
  }
}, C1 = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = n.slice(1, -1), a = r.indexOf(":"), u = r.slice(0, a);
  return u ? z1 + u : void 0;
})(), D1 = (n) => {
  const {
    theme: r,
    classGroups: a
  } = n;
  return _1(a, r);
}, _1 = (n, r) => {
  const a = hg();
  for (const u in n) {
    const c = n[u];
    Mc(c, a, u, r);
  }
  return a;
}, Mc = (n, r, a, u) => {
  const c = n.length;
  for (let f = 0; f < c; f++) {
    const h = n[f];
    O1(h, r, a, u);
  }
}, O1 = (n, r, a, u) => {
  if (typeof n == "string") {
    M1(n, r, a);
    return;
  }
  if (typeof n == "function") {
    R1(n, r, a, u);
    return;
  }
  N1(n, r, a, u);
}, M1 = (n, r, a) => {
  const u = n === "" ? r : mg(r, n);
  u.classGroupId = a;
}, R1 = (n, r, a, u) => {
  if (L1(n)) {
    Mc(n(u), r, a, u);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(A1(a, n));
}, N1 = (n, r, a, u) => {
  const c = Object.entries(n), f = c.length;
  for (let h = 0; h < f; h++) {
    const [m, p] = c[h];
    Mc(p, mg(r, m), a, u);
  }
}, mg = (n, r) => {
  let a = n;
  const u = r.split(bu), c = u.length;
  for (let f = 0; f < c; f++) {
    const h = u[f];
    let m = a.nextPart.get(h);
    m || (m = hg(), a.nextPart.set(h, m)), a = m;
  }
  return a;
}, L1 = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, U1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
  const c = (f, h) => {
    a[f] = h, r++, r > n && (r = 0, u = a, a = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(f) {
      let h = a[f];
      if (h !== void 0)
        return h;
      if ((h = u[f]) !== void 0)
        return c(f, h), h;
    },
    set(f, h) {
      f in a ? a[f] = h : c(f, h);
    }
  };
}, vc = "!", fp = ":", j1 = [], hp = (n, r, a, u, c) => ({
  modifiers: n,
  hasImportantModifier: r,
  baseClassName: a,
  maybePostfixModifierPosition: u,
  isExternal: c
}), B1 = (n) => {
  const {
    prefix: r,
    experimentalParseClassName: a
  } = n;
  let u = (c) => {
    const f = [];
    let h = 0, m = 0, p = 0, d;
    const b = c.length;
    for (let R = 0; R < b; R++) {
      const L = c[R];
      if (h === 0 && m === 0) {
        if (L === fp) {
          f.push(c.slice(p, R)), p = R + 1;
          continue;
        }
        if (L === "/") {
          d = R;
          continue;
        }
      }
      L === "[" ? h++ : L === "]" ? h-- : L === "(" ? m++ : L === ")" && m--;
    }
    const y = f.length === 0 ? c : c.slice(p);
    let S = y, x = !1;
    y.endsWith(vc) ? (S = y.slice(0, -1), x = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(vc) && (S = y.slice(1), x = !0)
    );
    const A = d && d > p ? d - p : void 0;
    return hp(f, x, S, A);
  };
  if (r) {
    const c = r + fp, f = u;
    u = (h) => h.startsWith(c) ? f(h.slice(c.length)) : hp(j1, !1, h, void 0, !0);
  }
  if (a) {
    const c = u;
    u = (f) => a({
      className: f,
      parseClassName: c
    });
  }
  return u;
}, H1 = (n) => {
  const r = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((a, u) => {
    r.set(a, 1e6 + u);
  }), (a) => {
    const u = [];
    let c = [];
    for (let f = 0; f < a.length; f++) {
      const h = a[f], m = h[0] === "[", p = r.has(h);
      m || p ? (c.length > 0 && (c.sort(), u.push(...c), c = []), u.push(h)) : c.push(h);
    }
    return c.length > 0 && (c.sort(), u.push(...c)), u;
  };
}, q1 = (n) => ({
  cache: U1(n.cacheSize),
  parseClassName: B1(n),
  sortModifiers: H1(n),
  ...T1(n)
}), Y1 = /\s+/, G1 = (n, r) => {
  const {
    parseClassName: a,
    getClassGroupId: u,
    getConflictingClassGroupIds: c,
    sortModifiers: f
  } = r, h = [], m = n.trim().split(Y1);
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
    let L = !!R, D = u(L ? A.substring(0, R) : A);
    if (!D) {
      if (!L) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (D = u(A), !D) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      L = !1;
    }
    const Z = S.length === 0 ? "" : S.length === 1 ? S[0] : f(S).join(":"), H = x ? Z + vc : Z, le = H + D;
    if (h.indexOf(le) > -1)
      continue;
    h.push(le);
    const oe = c(D, L);
    for (let B = 0; B < oe.length; ++B) {
      const P = oe[B];
      h.push(H + P);
    }
    p = b + (p.length > 0 ? " " + p : p);
  }
  return p;
}, V1 = (...n) => {
  let r = 0, a, u, c = "";
  for (; r < n.length; )
    (a = n[r++]) && (u = pg(a)) && (c && (c += " "), c += u);
  return c;
}, pg = (n) => {
  if (typeof n == "string")
    return n;
  let r, a = "";
  for (let u = 0; u < n.length; u++)
    n[u] && (r = pg(n[u])) && (a && (a += " "), a += r);
  return a;
}, Q1 = (n, ...r) => {
  let a, u, c, f;
  const h = (p) => {
    const d = r.reduce((b, y) => y(b), n());
    return a = q1(d), u = a.cache.get, c = a.cache.set, f = m, m(p);
  }, m = (p) => {
    const d = u(p);
    if (d)
      return d;
    const b = G1(p, a);
    return c(p, b), b;
  };
  return f = h, (...p) => f(V1(...p));
}, X1 = [], st = (n) => {
  const r = (a) => a[n] || X1;
  return r.isThemeGetter = !0, r;
}, gg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, yg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Z1 = /^\d+\/\d+$/, F1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, K1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, J1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, I1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, W1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wi = (n) => Z1.test(n), we = (n) => !!n && !Number.isNaN(Number(n)), cl = (n) => !!n && Number.isInteger(Number(n)), Ps = (n) => n.endsWith("%") && we(n.slice(0, -1)), jn = (n) => F1.test(n), $1 = () => !0, P1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  K1.test(n) && !J1.test(n)
), bg = () => !1, ev = (n) => I1.test(n), tv = (n) => W1.test(n), nv = (n) => !re(n) && !ue(n), lv = (n) => _i(n, Sg, bg), re = (n) => gg.test(n), Ml = (n) => _i(n, kg, P1), ec = (n) => _i(n, ov, we), dp = (n) => _i(n, vg, bg), iv = (n) => _i(n, xg, tv), cu = (n) => _i(n, Eg, ev), ue = (n) => yg.test(n), Da = (n) => Oi(n, kg), av = (n) => Oi(n, sv), mp = (n) => Oi(n, vg), rv = (n) => Oi(n, Sg), uv = (n) => Oi(n, xg), fu = (n) => Oi(n, Eg, !0), _i = (n, r, a) => {
  const u = gg.exec(n);
  return u ? u[1] ? r(u[1]) : a(u[2]) : !1;
}, Oi = (n, r, a = !1) => {
  const u = yg.exec(n);
  return u ? u[1] ? r(u[1]) : a : !1;
}, vg = (n) => n === "position" || n === "percentage", xg = (n) => n === "image" || n === "url", Sg = (n) => n === "length" || n === "size" || n === "bg-size", kg = (n) => n === "length", ov = (n) => n === "number", sv = (n) => n === "family-name", Eg = (n) => n === "shadow", cv = () => {
  const n = st("color"), r = st("font"), a = st("text"), u = st("font-weight"), c = st("tracking"), f = st("leading"), h = st("breakpoint"), m = st("container"), p = st("spacing"), d = st("radius"), b = st("shadow"), y = st("inset-shadow"), S = st("text-shadow"), x = st("drop-shadow"), A = st("blur"), R = st("perspective"), L = st("aspect"), D = st("ease"), Z = st("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], le = () => [
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
  ], oe = () => [...le(), ue, re], B = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], J = () => [ue, re, p], me = () => [wi, "full", "auto", ...J()], U = () => [cl, "none", "subgrid", ue, re], ne = () => ["auto", {
    span: ["full", cl, ue, re]
  }, cl, ue, re], ee = () => [cl, "auto", ue, re], Ee = () => ["auto", "min", "max", "fr", ue, re], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...J()], F = () => [wi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...J()], X = () => [n, ue, re], xe = () => [...le(), mp, dp, {
    position: [ue, re]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", rv, lv, {
    size: [ue, re]
  }], Y = () => [Ps, Da, Ml], k = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ue,
    re
  ], W = () => ["", we, Da, Ml], fe = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], he = () => [we, Ps, mp, dp], Ve = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    ue,
    re
  ], Re = () => ["none", we, ue, re], ht = () => ["none", we, ue, re], Lt = () => [we, ue, re], cn = () => [wi, "full", ...J()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [$1],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [nv],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", we],
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
        aspect: ["auto", "square", wi, re, ue, L]
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
        columns: [we, re, ue, m]
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
        object: oe()
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
        inset: me()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": me()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": me()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: me()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: me()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: me()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: me()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: me()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: me()
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
        z: [cl, "auto", ue, re]
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
        flex: [we, wi, "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", we, ue, re]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", we, ue, re]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [cl, "first", "last", "none", ue, re]
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
        col: ne()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
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
        row: ne()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": Ee()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Ee()
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
        justify: [...ie(), "normal"]
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
        content: ["normal", ...ie()]
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
        "place-content": ie()
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
        w: [m, "screen", ...F()]
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
          ...F()
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
            screen: [h]
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
        text: ["base", a, Da, Ml]
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
        font: [u, ue, ec]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ps, re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [av, re, r]
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
        tracking: [c, ue, re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [we, "none", ue, ec]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...J()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue, re]
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
        list: ["disc", "decimal", "none", ue, re]
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
        decoration: [...fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [we, "from-font", "auto", ue, Ml]
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
        "underline-offset": [we, "auto", ue, re]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, re]
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
        content: ["none", ue, re]
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
        bg: xe()
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
          }, cl, ue, re],
          radial: ["", ue, re],
          conic: [cl, ue, re]
        }, uv, iv]
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
        border: W()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": W()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": W()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": W()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": W()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": W()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": W()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": W()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": W()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": W()
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
        "divide-y": W()
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
        border: [...fe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...fe(), "hidden", "none"]
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
        outline: [...fe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [we, ue, re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", we, Da, Ml]
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
        ring: W()
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
        "ring-offset": [we, Ml]
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
        "inset-ring": W()
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
        "text-shadow": ["none", S, fu, cu]
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
        opacity: [we, ue, re]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        "mask-linear": [we]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": he()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": he()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": X()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": he()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": he()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": X()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": he()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": he()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": X()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": he()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": he()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": X()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": he()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": he()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": X()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": he()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": he()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": X()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": he()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": he()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": X()
      }],
      "mask-image-radial": [{
        "mask-radial": [ue, re]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": he()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": he()
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
        "mask-radial-at": le()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [we]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": he()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": he()
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
        mask: xe()
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
        mask: ["none", ue, re]
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
          ue,
          re
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ve()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [we, ue, re]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [we, ue, re]
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
        grayscale: ["", we, ue, re]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [we, ue, re]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", we, ue, re]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [we, ue, re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", we, ue, re]
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
          ue,
          re
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ve()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [we, ue, re]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [we, ue, re]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", we, ue, re]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [we, ue, re]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", we, ue, re]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [we, ue, re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [we, ue, re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", we, ue, re]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, re]
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
        duration: [we, "initial", ue, re]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, ue, re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [we, ue, re]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Z, ue, re]
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
        perspective: [R, ue, re]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": oe()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ht()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ht()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ht()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ht()
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
        skew: Lt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Lt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Lt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ue, re, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: oe()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, re]
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
        "will-change": ["auto", "scroll", "contents", "transform", ue, re]
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
        stroke: [we, Da, Ml, ec]
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
}, fv = /* @__PURE__ */ Q1(cv);
function wg(...n) {
  return fv(cg(n));
}
const hv = fg(
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
), ja = Ie.forwardRef(
  ({ className: n, variant: r, size: a, fullWidth: u, ...c }, f) => /* @__PURE__ */ te.jsx(
    "button",
    {
      className: wg(hv({ variant: r, size: a, fullWidth: u }), n),
      ref: f,
      ...c
    }
  )
);
ja.displayName = "Button";
function dv({
  loading: n,
  onSuggestionClick: r
}) {
  const { t: a } = wu(), u = [
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
  return /* @__PURE__ */ te.jsx("div", { className: "flex flex-wrap gap-2", children: u.map((c, f) => /* @__PURE__ */ te.jsx(
    ja,
    {
      onClick: () => r(c.prompt),
      disabled: n,
      variant: "outline",
      size: "sm",
      className: "rounded-full",
      children: c.label
    },
    f
  )) });
}
function mv(n, r) {
  const a = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const pv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, gv = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, yv = {};
function pp(n, r) {
  return (yv.jsx ? gv : pv).test(n);
}
const bv = /[ \t\n\f\r]/g;
function vv(n) {
  return typeof n == "object" ? n.type === "text" ? gp(n.value) : !1 : gp(n);
}
function gp(n) {
  return n.replace(bv, "") === "";
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
function Ag(n, r) {
  const a = {}, u = {};
  for (const c of n)
    Object.assign(a, c.property), Object.assign(u, c.normal);
  return new qa(a, u, r);
}
function xc(n) {
  return n.toLowerCase();
}
class Nt {
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
Nt.prototype.attribute = "";
Nt.prototype.booleanish = !1;
Nt.prototype.boolean = !1;
Nt.prototype.commaOrSpaceSeparated = !1;
Nt.prototype.commaSeparated = !1;
Nt.prototype.defined = !1;
Nt.prototype.mustUseProperty = !1;
Nt.prototype.number = !1;
Nt.prototype.overloadedBoolean = !1;
Nt.prototype.property = "";
Nt.prototype.spaceSeparated = !1;
Nt.prototype.space = void 0;
let xv = 0;
const ke = Ll(), rt = Ll(), Sc = Ll(), K = Ll(), Fe = Ll(), Ci = Ll(), Xt = Ll();
function Ll() {
  return 2 ** ++xv;
}
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ke,
  booleanish: rt,
  commaOrSpaceSeparated: Xt,
  commaSeparated: Ci,
  number: K,
  overloadedBoolean: Sc,
  spaceSeparated: Fe
}, Symbol.toStringTag, { value: "Module" })), tc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(kc)
);
class Rc extends Nt {
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
    let f = -1;
    if (super(r, a), yp(this, "space", c), typeof u == "number")
      for (; ++f < tc.length; ) {
        const h = tc[f];
        yp(this, tc[f], (u & kc[h]) === kc[h]);
      }
  }
}
Rc.prototype.defined = !0;
function yp(n, r, a) {
  a && (n[r] = a);
}
function Mi(n) {
  const r = {}, a = {};
  for (const [u, c] of Object.entries(n.properties)) {
    const f = new Rc(
      u,
      n.transform(n.attributes || {}, u),
      c,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(u) && (f.mustUseProperty = !0), r[u] = f, a[xc(u)] = u, a[xc(f.attribute)] = u;
  }
  return new qa(r, a, n.space);
}
const zg = Mi({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: rt,
    ariaAutoComplete: null,
    ariaBusy: rt,
    ariaChecked: rt,
    ariaColCount: K,
    ariaColIndex: K,
    ariaColSpan: K,
    ariaControls: Fe,
    ariaCurrent: null,
    ariaDescribedBy: Fe,
    ariaDetails: null,
    ariaDisabled: rt,
    ariaDropEffect: Fe,
    ariaErrorMessage: null,
    ariaExpanded: rt,
    ariaFlowTo: Fe,
    ariaGrabbed: rt,
    ariaHasPopup: null,
    ariaHidden: rt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Fe,
    ariaLevel: K,
    ariaLive: null,
    ariaModal: rt,
    ariaMultiLine: rt,
    ariaMultiSelectable: rt,
    ariaOrientation: null,
    ariaOwns: Fe,
    ariaPlaceholder: null,
    ariaPosInSet: K,
    ariaPressed: rt,
    ariaReadOnly: rt,
    ariaRelevant: null,
    ariaRequired: rt,
    ariaRoleDescription: Fe,
    ariaRowCount: K,
    ariaRowIndex: K,
    ariaRowSpan: K,
    ariaSelected: rt,
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
const Sv = Mi({
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
    acceptCharset: Fe,
    accessKey: Fe,
    action: null,
    allow: null,
    allowFullScreen: ke,
    allowPaymentRequest: ke,
    allowUserMedia: ke,
    alt: null,
    as: null,
    async: ke,
    autoCapitalize: null,
    autoComplete: Fe,
    autoFocus: ke,
    autoPlay: ke,
    blocking: Fe,
    capture: null,
    charSet: null,
    checked: ke,
    cite: null,
    className: Fe,
    cols: K,
    colSpan: null,
    content: null,
    contentEditable: rt,
    controls: ke,
    controlsList: Fe,
    coords: K | Ci,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ke,
    defer: ke,
    dir: null,
    dirName: null,
    disabled: ke,
    download: Sc,
    draggable: rt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ke,
    formTarget: null,
    headers: Fe,
    height: K,
    hidden: Sc,
    high: K,
    href: null,
    hrefLang: null,
    htmlFor: Fe,
    httpEquiv: Fe,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ke,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ke,
    itemId: null,
    itemProp: Fe,
    itemRef: Fe,
    itemScope: ke,
    itemType: Fe,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ke,
    low: K,
    manifest: null,
    max: null,
    maxLength: K,
    media: null,
    method: null,
    min: null,
    minLength: K,
    multiple: ke,
    muted: ke,
    name: null,
    nonce: null,
    noModule: ke,
    noValidate: ke,
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
    open: ke,
    optimum: K,
    pattern: null,
    ping: Fe,
    placeholder: null,
    playsInline: ke,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ke,
    referrerPolicy: null,
    rel: Fe,
    required: ke,
    reversed: ke,
    rows: K,
    rowSpan: K,
    sandbox: Fe,
    scope: null,
    scoped: ke,
    seamless: ke,
    selected: ke,
    shadowRootClonable: ke,
    shadowRootDelegatesFocus: ke,
    shadowRootMode: null,
    shape: null,
    size: K,
    sizes: null,
    slot: null,
    span: K,
    spellCheck: rt,
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
    typeMustMatch: ke,
    useMap: null,
    value: rt,
    width: K,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Fe,
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
    compact: ke,
    // Lists. Use CSS to reduce space between items instead
    declare: ke,
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
    noResize: ke,
    // `<frame>`
    noHref: ke,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ke,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ke,
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
    scrolling: rt,
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
    disablePictureInPicture: ke,
    disableRemotePlayback: ke,
    prefix: null,
    property: null,
    results: K,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Cg
}), kv = Mi({
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
    about: Xt,
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
    className: Fe,
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
    download: ke,
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
    kernelMatrix: Xt,
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
    ping: Fe,
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
    property: Xt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Xt,
    rev: Xt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Xt,
    requiredFeatures: Xt,
    requiredFonts: Xt,
    requiredFormats: Xt,
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
    strokeDashArray: Xt,
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
    systemLanguage: Xt,
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
    typeOf: Xt,
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
}), Dg = Mi({
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
}), _g = Mi({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Cg
}), Og = Mi({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, r) {
    return "xml:" + r.slice(3).toLowerCase();
  }
}), Ev = {
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
}, wv = /[A-Z]/g, bp = /-[a-z]/g, Av = /^data[-\w.:]+$/i;
function zv(n, r) {
  const a = xc(r);
  let u = r, c = Nt;
  if (a in n.normal)
    return n.property[n.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && Av.test(r)) {
    if (r.charAt(4) === "-") {
      const f = r.slice(5).replace(bp, Cv);
      u = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = r.slice(4);
      if (!bp.test(f)) {
        let h = f.replace(wv, Tv);
        h.charAt(0) !== "-" && (h = "-" + h), r = "data" + h;
      }
    }
    c = Rc;
  }
  return new c(u, r);
}
function Tv(n) {
  return "-" + n.toLowerCase();
}
function Cv(n) {
  return n.charAt(1).toUpperCase();
}
const Dv = Ag([zg, Sv, Dg, _g, Og], "html"), Nc = Ag([zg, kv, Dg, _g, Og], "svg");
function _v(n) {
  return n.join(" ").trim();
}
var Ai = {}, nc, vp;
function Ov() {
  if (vp) return nc;
  vp = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, a = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, c = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, h = /^[;\s]*/, m = /^\s+|\s+$/g, p = `
`, d = "/", b = "*", y = "", S = "comment", x = "declaration";
  function A(L, D) {
    if (typeof L != "string")
      throw new TypeError("First argument must be a string");
    if (!L) return [];
    D = D || {};
    var Z = 1, H = 1;
    function le(ie) {
      var I = ie.match(r);
      I && (Z += I.length);
      var _ = ie.lastIndexOf(p);
      H = ~_ ? ie.length - _ : H + ie.length;
    }
    function oe() {
      var ie = { line: Z, column: H };
      return function(I) {
        return I.position = new B(ie), me(), I;
      };
    }
    function B(ie) {
      this.start = ie, this.end = { line: Z, column: H }, this.source = D.source;
    }
    B.prototype.content = L;
    function P(ie) {
      var I = new Error(
        D.source + ":" + Z + ":" + H + ": " + ie
      );
      if (I.reason = ie, I.filename = D.source, I.line = Z, I.column = H, I.source = L, !D.silent) throw I;
    }
    function J(ie) {
      var I = ie.exec(L);
      if (I) {
        var _ = I[0];
        return le(_), L = L.slice(_.length), I;
      }
    }
    function me() {
      J(a);
    }
    function U(ie) {
      var I;
      for (ie = ie || []; I = ne(); )
        I !== !1 && ie.push(I);
      return ie;
    }
    function ne() {
      var ie = oe();
      if (!(d != L.charAt(0) || b != L.charAt(1))) {
        for (var I = 2; y != L.charAt(I) && (b != L.charAt(I) || d != L.charAt(I + 1)); )
          ++I;
        if (I += 2, y === L.charAt(I - 1))
          return P("End of comment missing");
        var _ = L.slice(2, I - 2);
        return H += 2, le(_), L = L.slice(I), H += 2, ie({
          type: S,
          comment: _
        });
      }
    }
    function ee() {
      var ie = oe(), I = J(u);
      if (I) {
        if (ne(), !J(c)) return P("property missing ':'");
        var _ = J(f), F = ie({
          type: x,
          property: R(I[0].replace(n, y)),
          value: _ ? R(_[0].replace(n, y)) : y
        });
        return J(h), F;
      }
    }
    function Ee() {
      var ie = [];
      U(ie);
      for (var I; I = ee(); )
        I !== !1 && (ie.push(I), U(ie));
      return ie;
    }
    return me(), Ee();
  }
  function R(L) {
    return L ? L.replace(m, y) : y;
  }
  return nc = A, nc;
}
var xp;
function Mv() {
  if (xp) return Ai;
  xp = 1;
  var n = Ai && Ai.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.default = a;
  const r = n(Ov());
  function a(u, c) {
    let f = null;
    if (!u || typeof u != "string")
      return f;
    const h = (0, r.default)(u), m = typeof c == "function";
    return h.forEach((p) => {
      if (p.type !== "declaration")
        return;
      const { property: d, value: b } = p;
      m ? c(d, b, p) : b && (f = f || {}, f[d] = b);
    }), f;
  }
  return Ai;
}
var _a = {}, Sp;
function Rv() {
  if (Sp) return _a;
  Sp = 1, Object.defineProperty(_a, "__esModule", { value: !0 }), _a.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, a = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, c = /^-(ms)-/, f = function(d) {
    return !d || a.test(d) || n.test(d);
  }, h = function(d, b) {
    return b.toUpperCase();
  }, m = function(d, b) {
    return "".concat(b, "-");
  }, p = function(d, b) {
    return b === void 0 && (b = {}), f(d) ? d : (d = d.toLowerCase(), b.reactCompat ? d = d.replace(c, m) : d = d.replace(u, m), d.replace(r, h));
  };
  return _a.camelCase = p, _a;
}
var Oa, kp;
function Nv() {
  if (kp) return Oa;
  kp = 1;
  var n = Oa && Oa.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  }, r = n(Mv()), a = Rv();
  function u(c, f) {
    var h = {};
    return !c || typeof c != "string" || (0, r.default)(c, function(m, p) {
      m && p && (h[(0, a.camelCase)(m, f)] = p);
    }), h;
  }
  return u.default = u, Oa = u, Oa;
}
var Lv = Nv();
const Uv = /* @__PURE__ */ Eu(Lv), Mg = Rg("end"), Lc = Rg("start");
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
function jv(n) {
  const r = Lc(n), a = Mg(n);
  if (r && a)
    return { start: r, end: a };
}
function Na(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Ep(n.position) : "start" in n || "end" in n ? Ep(n) : "line" in n || "column" in n ? Ec(n) : "";
}
function Ec(n) {
  return wp(n && n.line) + ":" + wp(n && n.column);
}
function Ep(n) {
  return Ec(n && n.start) + "-" + Ec(n && n.end);
}
function wp(n) {
  return n && typeof n == "number" ? n : 1;
}
class xt extends Error {
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
    let c = "", f = {}, h = !1;
    if (a && ("line" in a && "column" in a ? f = { place: a } : "start" in a && "end" in a ? f = { place: a } : "type" in a ? f = {
      ancestors: [a],
      place: a.position
    } : f = { ...a }), typeof r == "string" ? c = r : !f.cause && r && (h = !0, c = r.message, f.cause = r), !f.ruleId && !f.source && typeof u == "string") {
      const p = u.indexOf(":");
      p === -1 ? f.ruleId = u : (f.source = u.slice(0, p), f.ruleId = u.slice(p + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const p = f.ancestors[f.ancestors.length - 1];
      p && (f.place = p.position);
    }
    const m = f.place && "start" in f.place ? f.place.start : f.place;
    this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = m ? m.column : void 0, this.fatal = void 0, this.file = "", this.message = c, this.line = m ? m.line : void 0, this.name = Na(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = h && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
xt.prototype.file = "";
xt.prototype.name = "";
xt.prototype.reason = "";
xt.prototype.message = "";
xt.prototype.stack = "";
xt.prototype.column = void 0;
xt.prototype.line = void 0;
xt.prototype.ancestors = void 0;
xt.prototype.cause = void 0;
xt.prototype.fatal = void 0;
xt.prototype.place = void 0;
xt.prototype.ruleId = void 0;
xt.prototype.source = void 0;
const Uc = {}.hasOwnProperty, Bv = /* @__PURE__ */ new Map(), Hv = /[A-Z]/g, qv = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Yv = /* @__PURE__ */ new Set(["td", "th"]), Ng = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Gv(n, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = r.filePath || void 0;
  let u;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = Iv(a, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = Jv(a, r.jsx, r.jsxs);
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
    schema: r.space === "svg" ? Nc : Dv,
    stylePropertyNameCase: r.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: r.tableCellAlignToStyle !== !1
  }, f = Lg(c, n, void 0);
  return f && typeof f != "string" ? f : c.create(
    n,
    c.Fragment,
    { children: f || void 0 },
    void 0
  );
}
function Lg(n, r, a) {
  if (r.type === "element")
    return Vv(n, r, a);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return Qv(n, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return Zv(n, r, a);
  if (r.type === "mdxjsEsm")
    return Xv(n, r);
  if (r.type === "root")
    return Fv(n, r, a);
  if (r.type === "text")
    return Kv(n, r);
}
function Vv(n, r, a) {
  const u = n.schema;
  let c = u;
  r.tagName.toLowerCase() === "svg" && u.space === "html" && (c = Nc, n.schema = c), n.ancestors.push(r);
  const f = jg(n, r.tagName, !1), h = Wv(n, r);
  let m = Bc(n, r);
  return qv.has(r.tagName) && (m = m.filter(function(p) {
    return typeof p == "string" ? !vv(p) : !0;
  })), Ug(n, h, f, r), jc(h, m), n.ancestors.pop(), n.schema = u, n.create(r, f, h, a);
}
function Qv(n, r) {
  if (r.data && r.data.estree && n.evaluater) {
    const u = r.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(u.expression);
  }
  Ba(n, r.position);
}
function Xv(n, r) {
  if (r.data && r.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(r.data.estree)
    );
  Ba(n, r.position);
}
function Zv(n, r, a) {
  const u = n.schema;
  let c = u;
  r.name === "svg" && u.space === "html" && (c = Nc, n.schema = c), n.ancestors.push(r);
  const f = r.name === null ? n.Fragment : jg(n, r.name, !0), h = $v(n, r), m = Bc(n, r);
  return Ug(n, h, f, r), jc(h, m), n.ancestors.pop(), n.schema = u, n.create(r, f, h, a);
}
function Fv(n, r, a) {
  const u = {};
  return jc(u, Bc(n, r)), n.create(r, n.Fragment, u, a);
}
function Kv(n, r) {
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
function Jv(n, r, a) {
  return u;
  function u(c, f, h, m) {
    const d = Array.isArray(h.children) ? a : r;
    return m ? d(f, h, m) : d(f, h);
  }
}
function Iv(n, r) {
  return a;
  function a(u, c, f, h) {
    const m = Array.isArray(f.children), p = Lc(u);
    return r(
      c,
      f,
      h,
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
function Wv(n, r) {
  const a = {};
  let u, c;
  for (c in r.properties)
    if (c !== "children" && Uc.call(r.properties, c)) {
      const f = Pv(n, c, r.properties[c]);
      if (f) {
        const [h, m] = f;
        n.tableCellAlignToStyle && h === "align" && typeof m == "string" && Yv.has(r.tagName) ? u = m : a[h] = m;
      }
    }
  if (u) {
    const f = (
      /** @type {Style} */
      a.style || (a.style = {})
    );
    f[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return a;
}
function $v(n, r) {
  const a = {};
  for (const u of r.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && n.evaluater) {
        const f = u.data.estree.body[0];
        f.type;
        const h = f.expression;
        h.type;
        const m = h.properties[0];
        m.type, Object.assign(
          a,
          n.evaluater.evaluateExpression(m.argument)
        );
      } else
        Ba(n, r.position);
    else {
      const c = u.name;
      let f;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && n.evaluater) {
          const m = u.value.data.estree.body[0];
          m.type, f = n.evaluater.evaluateExpression(m.expression);
        } else
          Ba(n, r.position);
      else
        f = u.value === null ? !0 : u.value;
      a[c] = /** @type {Props[keyof Props]} */
      f;
    }
  return a;
}
function Bc(n, r) {
  const a = [];
  let u = -1;
  const c = n.passKeys ? /* @__PURE__ */ new Map() : Bv;
  for (; ++u < r.children.length; ) {
    const f = r.children[u];
    let h;
    if (n.passKeys) {
      const p = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (p) {
        const d = c.get(p) || 0;
        h = p + "-" + d, c.set(p, d + 1);
      }
    }
    const m = Lg(n, f, h);
    m !== void 0 && a.push(m);
  }
  return a;
}
function Pv(n, r, a) {
  const u = zv(n.schema, r);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = u.commaSeparated ? mv(a) : _v(a)), u.property === "style") {
      let c = typeof a == "object" ? a : ex(n, String(a));
      return n.stylePropertyNameCase === "css" && (c = tx(c)), ["style", c];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space ? Ev[u.property] || u.property : u.attribute,
      a
    ];
  }
}
function ex(n, r) {
  try {
    return Uv(r, { reactCompat: !0 });
  } catch (a) {
    if (n.ignoreInvalidStyle)
      return {};
    const u = (
      /** @type {Error} */
      a
    ), c = new xt("Cannot parse `style` attribute", {
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
    let f = -1, h;
    for (; ++f < c.length; ) {
      const m = pp(c[f]) ? { type: "Identifier", name: c[f] } : { type: "Literal", value: c[f] };
      h = h ? {
        type: "MemberExpression",
        object: h,
        property: m,
        computed: !!(f && m.type === "Literal"),
        optional: !1
      } : m;
    }
    u = h;
  } else
    u = pp(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
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
  const a = new xt(
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
function tx(n) {
  const r = {};
  let a;
  for (a in n)
    Uc.call(n, a) && (r[nx(a)] = n[a]);
  return r;
}
function nx(n) {
  let r = n.replace(Hv, lx);
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
      return Ap(n.children, r, a);
  }
  return Array.isArray(n) ? Ap(n, r, a) : "";
}
function Ap(n, r, a) {
  const u = [];
  let c = -1;
  for (; ++c < n.length; )
    u[c] = Bg(n[c], r, a);
  return u.join("");
}
function ax(n) {
  return !!(n && typeof n == "object");
}
const zp = document.createElement("i");
function qc(n) {
  const r = "&" + n + ";";
  zp.innerHTML = r;
  const a = zp.textContent;
  return a.charCodeAt(a.length - 1) === 59 && n !== "semi" || a === r ? !1 : a;
}
function Zt(n, r, a, u) {
  const c = n.length;
  let f = 0, h;
  if (r < 0 ? r = -r > c ? 0 : c + r : r = r > c ? c : r, a = a > 0 ? a : 0, u.length < 1e4)
    h = Array.from(u), h.unshift(r, a), n.splice(...h);
  else
    for (a && n.splice(r, a); f < u.length; )
      h = u.slice(f, f + 1e4), h.unshift(r, 0), n.splice(...h), f += 1e4, r += 1e4;
}
function ln(n, r) {
  return n.length > 0 ? (Zt(n, n.length, 0, r), n) : r;
}
const Tp = {}.hasOwnProperty;
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
    const c = (Tp.call(n, a) ? n[a] : void 0) || (n[a] = {}), f = r[a];
    let h;
    if (f)
      for (h in f) {
        Tp.call(c, h) || (c[h] = []);
        const m = f[h];
        ux(
          // @ts-expect-error Looks like a list.
          c[h],
          Array.isArray(m) ? m : m ? [m] : []
        );
      }
  }
}
function ux(n, r) {
  let a = -1;
  const u = [];
  for (; ++a < r.length; )
    (r[a].add === "after" ? n : u).push(r[a]);
  Zt(n, 0, 0, u);
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
const wt = hl(/[A-Za-z]/), vt = hl(/[\dA-Za-z]/), ox = hl(/[#-'*+\--9=?A-Z^-~]/);
function vu(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const wc = hl(/\d/), sx = hl(/[\dA-Fa-f]/), cx = hl(/[!-/:-@[-`{-~]/);
function pe(n) {
  return n !== null && n < -2;
}
function Ze(n) {
  return n !== null && (n < 0 || n === 32);
}
function Ce(n) {
  return n === -2 || n === -1 || n === 32;
}
const Au = hl(new RegExp("\\p{P}|\\p{S}", "u")), Nl = hl(/\s/);
function hl(n) {
  return r;
  function r(a) {
    return a !== null && a > -1 && n.test(String.fromCharCode(a));
  }
}
function Ri(n) {
  const r = [];
  let a = -1, u = 0, c = 0;
  for (; ++a < n.length; ) {
    const f = n.charCodeAt(a);
    let h = "";
    if (f === 37 && vt(n.charCodeAt(a + 1)) && vt(n.charCodeAt(a + 2)))
      c = 2;
    else if (f < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (h = String.fromCharCode(f));
    else if (f > 55295 && f < 57344) {
      const m = n.charCodeAt(a + 1);
      f < 56320 && m > 56319 && m < 57344 ? (h = String.fromCharCode(f, m), c = 1) : h = "�";
    } else
      h = String.fromCharCode(f);
    h && (r.push(n.slice(u, a), encodeURIComponent(h)), u = a + c + 1, h = ""), c && (a += c, c = 0);
  }
  return r.join("") + n.slice(u);
}
function Me(n, r, a, u) {
  const c = u ? u - 1 : Number.POSITIVE_INFINITY;
  let f = 0;
  return h;
  function h(p) {
    return Ce(p) ? (n.enter(a), m(p)) : r(p);
  }
  function m(p) {
    return Ce(p) && f++ < c ? (n.consume(p), m) : (n.exit(a), r(p));
  }
}
const fx = {
  tokenize: hx
};
function hx(n) {
  const r = n.attempt(this.parser.constructs.contentInitial, u, c);
  let a;
  return r;
  function u(m) {
    if (m === null) {
      n.consume(m);
      return;
    }
    return n.enter("lineEnding"), n.consume(m), n.exit("lineEnding"), Me(n, r, "linePrefix");
  }
  function c(m) {
    return n.enter("paragraph"), f(m);
  }
  function f(m) {
    const p = n.enter("chunkText", {
      contentType: "text",
      previous: a
    });
    return a && (a.next = p), a = p, h(m);
  }
  function h(m) {
    if (m === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(m);
      return;
    }
    return pe(m) ? (n.consume(m), n.exit("chunkText"), f) : (n.consume(m), h);
  }
}
const dx = {
  tokenize: mx
}, Cp = {
  tokenize: px
};
function mx(n) {
  const r = this, a = [];
  let u = 0, c, f, h;
  return m;
  function m(H) {
    if (u < a.length) {
      const le = a[u];
      return r.containerState = le[1], n.attempt(le[0].continuation, p, d)(H);
    }
    return d(H);
  }
  function p(H) {
    if (u++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, c && Z();
      const le = r.events.length;
      let oe = le, B;
      for (; oe--; )
        if (r.events[oe][0] === "exit" && r.events[oe][1].type === "chunkFlow") {
          B = r.events[oe][1].end;
          break;
        }
      D(u);
      let P = le;
      for (; P < r.events.length; )
        r.events[P][1].end = {
          ...B
        }, P++;
      return Zt(r.events, oe + 1, 0, r.events.slice(le)), r.events.length = P, d(H);
    }
    return m(H);
  }
  function d(H) {
    if (u === a.length) {
      if (!c)
        return S(H);
      if (c.currentConstruct && c.currentConstruct.concrete)
        return A(H);
      r.interrupt = !!(c.currentConstruct && !c._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, n.check(Cp, b, y)(H);
  }
  function b(H) {
    return c && Z(), D(u), S(H);
  }
  function y(H) {
    return r.parser.lazy[r.now().line] = u !== a.length, h = r.now().offset, A(H);
  }
  function S(H) {
    return r.containerState = {}, n.attempt(Cp, x, A)(H);
  }
  function x(H) {
    return u++, a.push([r.currentConstruct, r.containerState]), S(H);
  }
  function A(H) {
    if (H === null) {
      c && Z(), D(0), n.consume(H);
      return;
    }
    return c = c || r.parser.flow(r.now()), n.enter("chunkFlow", {
      _tokenizer: c,
      contentType: "flow",
      previous: f
    }), R(H);
  }
  function R(H) {
    if (H === null) {
      L(n.exit("chunkFlow"), !0), D(0), n.consume(H);
      return;
    }
    return pe(H) ? (n.consume(H), L(n.exit("chunkFlow")), u = 0, r.interrupt = void 0, m) : (n.consume(H), R);
  }
  function L(H, le) {
    const oe = r.sliceStream(H);
    if (le && oe.push(null), H.previous = f, f && (f.next = H), f = H, c.defineSkip(H.start), c.write(oe), r.parser.lazy[H.start.line]) {
      let B = c.events.length;
      for (; B--; )
        if (
          // The token starts before the line ending…
          c.events[B][1].start.offset < h && // …and either is not ended yet…
          (!c.events[B][1].end || // …or ends after it.
          c.events[B][1].end.offset > h)
        )
          return;
      const P = r.events.length;
      let J = P, me, U;
      for (; J--; )
        if (r.events[J][0] === "exit" && r.events[J][1].type === "chunkFlow") {
          if (me) {
            U = r.events[J][1].end;
            break;
          }
          me = !0;
        }
      for (D(u), B = P; B < r.events.length; )
        r.events[B][1].end = {
          ...U
        }, B++;
      Zt(r.events, J + 1, 0, r.events.slice(P)), r.events.length = B;
    }
  }
  function D(H) {
    let le = a.length;
    for (; le-- > H; ) {
      const oe = a[le];
      r.containerState = oe[1], oe[0].exit.call(r, n);
    }
    a.length = H;
  }
  function Z() {
    c.write([null]), f = void 0, c = void 0, r.containerState._closeFlow = void 0;
  }
}
function px(n, r, a) {
  return Me(n, n.attempt(this.parser.constructs.document, r, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Di(n) {
  if (n === null || Ze(n) || Nl(n))
    return 1;
  if (Au(n))
    return 2;
}
function zu(n, r, a) {
  const u = [];
  let c = -1;
  for (; ++c < n.length; ) {
    const f = n[c].resolveAll;
    f && !u.includes(f) && (r = f(r, a), u.push(f));
  }
  return r;
}
const Ac = {
  name: "attention",
  resolveAll: gx,
  tokenize: yx
};
function gx(n, r) {
  let a = -1, u, c, f, h, m, p, d, b;
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
          Dp(y, -p), Dp(S, p), h = {
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
          }, f = {
            type: p > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[u][1].end
            },
            end: {
              ...n[a][1].start
            }
          }, c = {
            type: p > 1 ? "strong" : "emphasis",
            start: {
              ...h.start
            },
            end: {
              ...m.end
            }
          }, n[u][1].end = {
            ...h.start
          }, n[a][1].start = {
            ...m.end
          }, d = [], n[u][1].end.offset - n[u][1].start.offset && (d = ln(d, [["enter", n[u][1], r], ["exit", n[u][1], r]])), d = ln(d, [["enter", c, r], ["enter", h, r], ["exit", h, r], ["enter", f, r]]), d = ln(d, zu(r.parser.constructs.insideSpan.null, n.slice(u + 1, a), r)), d = ln(d, [["exit", f, r], ["enter", m, r], ["exit", m, r], ["exit", c, r]]), n[a][1].end.offset - n[a][1].start.offset ? (b = 2, d = ln(d, [["enter", n[a][1], r], ["exit", n[a][1], r]])) : b = 0, Zt(n, u - 1, a - u + 3, d), a = u + d.length - b - 2;
          break;
        }
    }
  for (a = -1; ++a < n.length; )
    n[a][1].type === "attentionSequence" && (n[a][1].type = "data");
  return n;
}
function yx(n, r) {
  const a = this.parser.constructs.attentionMarkers.null, u = this.previous, c = Di(u);
  let f;
  return h;
  function h(p) {
    return f = p, n.enter("attentionSequence"), m(p);
  }
  function m(p) {
    if (p === f)
      return n.consume(p), m;
    const d = n.exit("attentionSequence"), b = Di(p), y = !b || b === 2 && c || a.includes(p), S = !c || c === 2 && b || a.includes(u);
    return d._open = !!(f === 42 ? y : y && (c || !S)), d._close = !!(f === 42 ? S : S && (b || !y)), r(p);
  }
}
function Dp(n, r) {
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
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), f;
  }
  function f(x) {
    return wt(x) ? (n.consume(x), h) : x === 64 ? a(x) : d(x);
  }
  function h(x) {
    return x === 43 || x === 45 || x === 46 || vt(x) ? (u = 1, m(x)) : d(x);
  }
  function m(x) {
    return x === 58 ? (n.consume(x), u = 0, p) : (x === 43 || x === 45 || x === 46 || vt(x)) && u++ < 32 ? (n.consume(x), m) : (u = 0, d(x));
  }
  function p(x) {
    return x === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), r) : x === null || x === 32 || x === 60 || vu(x) ? a(x) : (n.consume(x), p);
  }
  function d(x) {
    return x === 64 ? (n.consume(x), b) : ox(x) ? (n.consume(x), d) : a(x);
  }
  function b(x) {
    return vt(x) ? y(x) : a(x);
  }
  function y(x) {
    return x === 46 ? (n.consume(x), u = 0, b) : x === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), r) : S(x);
  }
  function S(x) {
    if ((x === 45 || vt(x)) && u++ < 63) {
      const A = x === 45 ? S : y;
      return n.consume(x), A;
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
  function u(f) {
    return Ce(f) ? Me(n, c, "linePrefix")(f) : c(f);
  }
  function c(f) {
    return f === null || pe(f) ? r(f) : a(f);
  }
}
const Yg = {
  continuation: {
    tokenize: kx
  },
  exit: Ex,
  name: "blockQuote",
  tokenize: Sx
};
function Sx(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    if (h === 62) {
      const m = u.containerState;
      return m.open || (n.enter("blockQuote", {
        _container: !0
      }), m.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(h), n.exit("blockQuoteMarker"), f;
    }
    return a(h);
  }
  function f(h) {
    return Ce(h) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(h), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), r) : (n.exit("blockQuotePrefix"), r(h));
  }
}
function kx(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return Ce(h) ? Me(n, f, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : f(h);
  }
  function f(h) {
    return n.attempt(Yg, r, a)(h);
  }
}
function Ex(n) {
  n.exit("blockQuote");
}
const Gg = {
  name: "characterEscape",
  tokenize: wx
};
function wx(n, r, a) {
  return u;
  function u(f) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(f), n.exit("escapeMarker"), c;
  }
  function c(f) {
    return cx(f) ? (n.enter("characterEscapeValue"), n.consume(f), n.exit("characterEscapeValue"), n.exit("characterEscape"), r) : a(f);
  }
}
const Vg = {
  name: "characterReference",
  tokenize: Ax
};
function Ax(n, r, a) {
  const u = this;
  let c = 0, f, h;
  return m;
  function m(y) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), p;
  }
  function p(y) {
    return y === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(y), n.exit("characterReferenceMarkerNumeric"), d) : (n.enter("characterReferenceValue"), f = 31, h = vt, b(y));
  }
  function d(y) {
    return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(y), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), f = 6, h = sx, b) : (n.enter("characterReferenceValue"), f = 7, h = wc, b(y));
  }
  function b(y) {
    if (y === 59 && c) {
      const S = n.exit("characterReferenceValue");
      return h === vt && !qc(u.sliceSerialize(S)) ? a(y) : (n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), n.exit("characterReference"), r);
    }
    return h(y) && c++ < f ? (n.consume(y), b) : a(y);
  }
}
const _p = {
  partial: !0,
  tokenize: Tx
}, Op = {
  concrete: !0,
  name: "codeFenced",
  tokenize: zx
};
function zx(n, r, a) {
  const u = this, c = {
    partial: !0,
    tokenize: oe
  };
  let f = 0, h = 0, m;
  return p;
  function p(B) {
    return d(B);
  }
  function d(B) {
    const P = u.events[u.events.length - 1];
    return f = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0, m = B, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), b(B);
  }
  function b(B) {
    return B === m ? (h++, n.consume(B), b) : h < 3 ? a(B) : (n.exit("codeFencedFenceSequence"), Ce(B) ? Me(n, y, "whitespace")(B) : y(B));
  }
  function y(B) {
    return B === null || pe(B) ? (n.exit("codeFencedFence"), u.interrupt ? r(B) : n.check(_p, R, le)(B)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), S(B));
  }
  function S(B) {
    return B === null || pe(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(B)) : Ce(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Me(n, x, "whitespace")(B)) : B === 96 && B === m ? a(B) : (n.consume(B), S);
  }
  function x(B) {
    return B === null || pe(B) ? y(B) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), A(B));
  }
  function A(B) {
    return B === null || pe(B) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), y(B)) : B === 96 && B === m ? a(B) : (n.consume(B), A);
  }
  function R(B) {
    return n.attempt(c, le, L)(B);
  }
  function L(B) {
    return n.enter("lineEnding"), n.consume(B), n.exit("lineEnding"), D;
  }
  function D(B) {
    return f > 0 && Ce(B) ? Me(n, Z, "linePrefix", f + 1)(B) : Z(B);
  }
  function Z(B) {
    return B === null || pe(B) ? n.check(_p, R, le)(B) : (n.enter("codeFlowValue"), H(B));
  }
  function H(B) {
    return B === null || pe(B) ? (n.exit("codeFlowValue"), Z(B)) : (n.consume(B), H);
  }
  function le(B) {
    return n.exit("codeFenced"), r(B);
  }
  function oe(B, P, J) {
    let me = 0;
    return U;
    function U(I) {
      return B.enter("lineEnding"), B.consume(I), B.exit("lineEnding"), ne;
    }
    function ne(I) {
      return B.enter("codeFencedFence"), Ce(I) ? Me(B, ee, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(I) : ee(I);
    }
    function ee(I) {
      return I === m ? (B.enter("codeFencedFenceSequence"), Ee(I)) : J(I);
    }
    function Ee(I) {
      return I === m ? (me++, B.consume(I), Ee) : me >= h ? (B.exit("codeFencedFenceSequence"), Ce(I) ? Me(B, ie, "whitespace")(I) : ie(I)) : J(I);
    }
    function ie(I) {
      return I === null || pe(I) ? (B.exit("codeFencedFence"), P(I)) : J(I);
    }
  }
}
function Tx(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return h === null ? a(h) : (n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), f);
  }
  function f(h) {
    return u.parser.lazy[u.now().line] ? a(h) : r(h);
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
  function c(d) {
    return n.enter("codeIndented"), Me(n, f, "linePrefix", 5)(d);
  }
  function f(d) {
    const b = u.events[u.events.length - 1];
    return b && b[1].type === "linePrefix" && b[2].sliceSerialize(b[1], !0).length >= 4 ? h(d) : a(d);
  }
  function h(d) {
    return d === null ? p(d) : pe(d) ? n.attempt(Cx, h, p)(d) : (n.enter("codeFlowValue"), m(d));
  }
  function m(d) {
    return d === null || pe(d) ? (n.exit("codeFlowValue"), h(d)) : (n.consume(d), m);
  }
  function p(d) {
    return n.exit("codeIndented"), r(d);
  }
}
function _x(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return u.parser.lazy[u.now().line] ? a(h) : pe(h) ? (n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), c) : Me(n, f, "linePrefix", 5)(h);
  }
  function f(h) {
    const m = u.events[u.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? r(h) : pe(h) ? c(h) : a(h);
  }
}
const Ox = {
  name: "codeText",
  previous: Rx,
  resolve: Mx,
  tokenize: Nx
};
function Mx(n) {
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
  let u = 0, c, f;
  return h;
  function h(y) {
    return n.enter("codeText"), n.enter("codeTextSequence"), m(y);
  }
  function m(y) {
    return y === 96 ? (n.consume(y), u++, m) : (n.exit("codeTextSequence"), p(y));
  }
  function p(y) {
    return y === null ? a(y) : y === 32 ? (n.enter("space"), n.consume(y), n.exit("space"), p) : y === 96 ? (f = n.enter("codeTextSequence"), c = 0, b(y)) : pe(y) ? (n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), p) : (n.enter("codeTextData"), d(y));
  }
  function d(y) {
    return y === null || y === 32 || y === 96 || pe(y) ? (n.exit("codeTextData"), p(y)) : (n.consume(y), d);
  }
  function b(y) {
    return y === 96 ? (n.consume(y), c++, b) : c === u ? (n.exit("codeTextSequence"), n.exit("codeText"), r(y)) : (f.type = "codeTextData", d(y));
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
    const f = this.right.splice(this.right.length - c, Number.POSITIVE_INFINITY);
    return u && Ma(this.left, u), f.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Ma(this.left, r);
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
    this.setCursor(0), Ma(this.right, r.reverse());
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
        Ma(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        Ma(this.left, a.reverse());
      }
  }
}
function Ma(n, r) {
  let a = 0;
  if (r.length < 1e4)
    n.push(...r);
  else
    for (; a < r.length; )
      n.push(...r.slice(a, a + 1e4)), a += 1e4;
}
function Qg(n) {
  const r = {};
  let a = -1, u, c, f, h, m, p, d;
  const b = new Lx(n);
  for (; ++a < b.length; ) {
    for (; a in r; )
      a = r[a];
    if (u = b.get(a), a && u[1].type === "chunkFlow" && b.get(a - 1)[1].type === "listItemPrefix" && (p = u[1]._tokenizer.events, f = 0, f < p.length && p[f][1].type === "lineEndingBlank" && (f += 2), f < p.length && p[f][1].type === "content"))
      for (; ++f < p.length && p[f][1].type !== "content"; )
        p[f][1].type === "chunkText" && (p[f][1]._isInFirstContentOfListItem = !0, f++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(r, Ux(b, a)), a = r[a], d = !0);
    else if (u[1]._container) {
      for (f = a, c = void 0; f--; )
        if (h = b.get(f), h[1].type === "lineEnding" || h[1].type === "lineEndingBlank")
          h[0] === "enter" && (c && (b.get(c)[1].type = "lineEndingBlank"), h[1].type = "lineEnding", c = f);
        else if (!(h[1].type === "linePrefix" || h[1].type === "listItemIndent")) break;
      c && (u[1].end = {
        ...b.get(c)[1].start
      }, m = b.slice(c, a), m.unshift(u), b.splice(c, a - c + 1, m));
    }
  }
  return Zt(n, 0, Number.POSITIVE_INFINITY, b.slice(0)), !d;
}
function Ux(n, r) {
  const a = n.get(r)[1], u = n.get(r)[2];
  let c = r - 1;
  const f = [];
  let h = a._tokenizer;
  h || (h = u.parser[a.contentType](a.start), a._contentTypeTextTrailing && (h._contentTypeTextTrailing = !0));
  const m = h.events, p = [], d = {};
  let b, y, S = -1, x = a, A = 0, R = 0;
  const L = [R];
  for (; x; ) {
    for (; n.get(++c)[1] !== x; )
      ;
    f.push(c), x._tokenizer || (b = u.sliceStream(x), x.next || b.push(null), y && h.defineSkip(x.start), x._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = !0), h.write(b), x._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), y = x, x = x.next;
  }
  for (x = a; ++S < m.length; )
    // Find a void token that includes a break.
    m[S][0] === "exit" && m[S - 1][0] === "enter" && m[S][1].type === m[S - 1][1].type && m[S][1].start.line !== m[S][1].end.line && (R = S + 1, L.push(R), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (h.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : L.pop(), S = L.length; S--; ) {
    const D = m.slice(L[S], L[S + 1]), Z = f.pop();
    p.push([Z, Z + D.length - 1]), n.splice(Z, 2, D);
  }
  for (p.reverse(), S = -1; ++S < p.length; )
    d[A + p[S][0]] = A + p[S][1], A += p[S][1] - p[S][0] - 1;
  return d;
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
  function u(m) {
    return n.enter("content"), a = n.enter("chunkContent", {
      contentType: "content"
    }), c(m);
  }
  function c(m) {
    return m === null ? f(m) : pe(m) ? n.check(Bx, h, f)(m) : (n.consume(m), c);
  }
  function f(m) {
    return n.exit("chunkContent"), n.exit("content"), r(m);
  }
  function h(m) {
    return n.consume(m), n.exit("chunkContent"), a.next = n.enter("chunkContent", {
      contentType: "content",
      previous: a
    }), a = a.next, c;
  }
}
function Yx(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), Me(n, f, "linePrefix");
  }
  function f(h) {
    if (h === null || pe(h))
      return a(h);
    const m = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? r(h) : n.interrupt(u.parser.constructs.flow, a, r)(h);
  }
}
function Xg(n, r, a, u, c, f, h, m, p) {
  const d = p || Number.POSITIVE_INFINITY;
  let b = 0;
  return y;
  function y(D) {
    return D === 60 ? (n.enter(u), n.enter(c), n.enter(f), n.consume(D), n.exit(f), S) : D === null || D === 32 || D === 41 || vu(D) ? a(D) : (n.enter(u), n.enter(h), n.enter(m), n.enter("chunkString", {
      contentType: "string"
    }), R(D));
  }
  function S(D) {
    return D === 62 ? (n.enter(f), n.consume(D), n.exit(f), n.exit(c), n.exit(u), r) : (n.enter(m), n.enter("chunkString", {
      contentType: "string"
    }), x(D));
  }
  function x(D) {
    return D === 62 ? (n.exit("chunkString"), n.exit(m), S(D)) : D === null || D === 60 || pe(D) ? a(D) : (n.consume(D), D === 92 ? A : x);
  }
  function A(D) {
    return D === 60 || D === 62 || D === 92 ? (n.consume(D), x) : x(D);
  }
  function R(D) {
    return !b && (D === null || D === 41 || Ze(D)) ? (n.exit("chunkString"), n.exit(m), n.exit(h), n.exit(u), r(D)) : b < d && D === 40 ? (n.consume(D), b++, R) : D === 41 ? (n.consume(D), b--, R) : D === null || D === 32 || D === 40 || vu(D) ? a(D) : (n.consume(D), D === 92 ? L : R);
  }
  function L(D) {
    return D === 40 || D === 41 || D === 92 ? (n.consume(D), R) : R(D);
  }
}
function Zg(n, r, a, u, c, f) {
  const h = this;
  let m = 0, p;
  return d;
  function d(x) {
    return n.enter(u), n.enter(c), n.consume(x), n.exit(c), n.enter(f), b;
  }
  function b(x) {
    return m > 999 || x === null || x === 91 || x === 93 && !p || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !m && "_hiddenFootnoteSupport" in h.parser.constructs ? a(x) : x === 93 ? (n.exit(f), n.enter(c), n.consume(x), n.exit(c), n.exit(u), r) : pe(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), b) : (n.enter("chunkString", {
      contentType: "string"
    }), y(x));
  }
  function y(x) {
    return x === null || x === 91 || x === 93 || pe(x) || m++ > 999 ? (n.exit("chunkString"), b(x)) : (n.consume(x), p || (p = !Ce(x)), x === 92 ? S : y);
  }
  function S(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), m++, y) : y(x);
  }
}
function Fg(n, r, a, u, c, f) {
  let h;
  return m;
  function m(S) {
    return S === 34 || S === 39 || S === 40 ? (n.enter(u), n.enter(c), n.consume(S), n.exit(c), h = S === 40 ? 41 : S, p) : a(S);
  }
  function p(S) {
    return S === h ? (n.enter(c), n.consume(S), n.exit(c), n.exit(u), r) : (n.enter(f), d(S));
  }
  function d(S) {
    return S === h ? (n.exit(f), p(h)) : S === null ? a(S) : pe(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), Me(n, d, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), b(S));
  }
  function b(S) {
    return S === h || S === null || pe(S) ? (n.exit("chunkString"), d(S)) : (n.consume(S), S === 92 ? y : b);
  }
  function y(S) {
    return S === h || S === 92 ? (n.consume(S), b) : b(S);
  }
}
function La(n, r) {
  let a;
  return u;
  function u(c) {
    return pe(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), a = !0, u) : Ce(c) ? Me(n, u, a ? "linePrefix" : "lineSuffix")(c) : r(c);
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
  return f;
  function f(x) {
    return n.enter("definition"), h(x);
  }
  function h(x) {
    return Zg.call(
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
    return c = sn(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), x === 58 ? (n.enter("definitionMarker"), n.consume(x), n.exit("definitionMarker"), p) : a(x);
  }
  function p(x) {
    return Ze(x) ? La(n, d)(x) : d(x);
  }
  function d(x) {
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
    return Ce(x) ? Me(n, S, "whitespace")(x) : S(x);
  }
  function S(x) {
    return x === null || pe(x) ? (n.exit("definition"), u.parser.defined.push(c), r(x)) : a(x);
  }
}
function Xx(n, r, a) {
  return u;
  function u(m) {
    return Ze(m) ? La(n, c)(m) : a(m);
  }
  function c(m) {
    return Fg(n, f, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(m);
  }
  function f(m) {
    return Ce(m) ? Me(n, h, "whitespace")(m) : h(m);
  }
  function h(m) {
    return m === null || pe(m) ? r(m) : a(m);
  }
}
const Zx = {
  name: "hardBreakEscape",
  tokenize: Fx
};
function Fx(n, r, a) {
  return u;
  function u(f) {
    return n.enter("hardBreakEscape"), n.consume(f), c;
  }
  function c(f) {
    return pe(f) ? (n.exit("hardBreakEscape"), r(f)) : a(f);
  }
}
const Kx = {
  name: "headingAtx",
  resolve: Jx,
  tokenize: Ix
};
function Jx(n, r) {
  let a = n.length - 2, u = 3, c, f;
  return n[u][1].type === "whitespace" && (u += 2), a - 2 > u && n[a][1].type === "whitespace" && (a -= 2), n[a][1].type === "atxHeadingSequence" && (u === a - 1 || a - 4 > u && n[a - 2][1].type === "whitespace") && (a -= u + 1 === a ? 2 : 4), a > u && (c = {
    type: "atxHeadingText",
    start: n[u][1].start,
    end: n[a][1].end
  }, f = {
    type: "chunkText",
    start: n[u][1].start,
    end: n[a][1].end,
    contentType: "text"
  }, Zt(n, u, a - u + 1, [["enter", c, r], ["enter", f, r], ["exit", f, r], ["exit", c, r]])), n;
}
function Ix(n, r, a) {
  let u = 0;
  return c;
  function c(b) {
    return n.enter("atxHeading"), f(b);
  }
  function f(b) {
    return n.enter("atxHeadingSequence"), h(b);
  }
  function h(b) {
    return b === 35 && u++ < 6 ? (n.consume(b), h) : b === null || Ze(b) ? (n.exit("atxHeadingSequence"), m(b)) : a(b);
  }
  function m(b) {
    return b === 35 ? (n.enter("atxHeadingSequence"), p(b)) : b === null || pe(b) ? (n.exit("atxHeading"), r(b)) : Ce(b) ? Me(n, m, "whitespace")(b) : (n.enter("atxHeadingText"), d(b));
  }
  function p(b) {
    return b === 35 ? (n.consume(b), p) : (n.exit("atxHeadingSequence"), m(b));
  }
  function d(b) {
    return b === null || b === 35 || Ze(b) ? (n.exit("atxHeadingText"), m(b)) : (n.consume(b), d);
  }
}
const Wx = [
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
], Mp = ["pre", "script", "style", "textarea"], $x = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: tS,
  tokenize: nS
}, Px = {
  partial: !0,
  tokenize: iS
}, eS = {
  partial: !0,
  tokenize: lS
};
function tS(n) {
  let r = n.length;
  for (; r-- && !(n[r][0] === "enter" && n[r][1].type === "htmlFlow"); )
    ;
  return r > 1 && n[r - 2][1].type === "linePrefix" && (n[r][1].start = n[r - 2][1].start, n[r + 1][1].start = n[r - 2][1].start, n.splice(r - 2, 2)), n;
}
function nS(n, r, a) {
  const u = this;
  let c, f, h, m, p;
  return d;
  function d(k) {
    return b(k);
  }
  function b(k) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(k), y;
  }
  function y(k) {
    return k === 33 ? (n.consume(k), S) : k === 47 ? (n.consume(k), f = !0, R) : k === 63 ? (n.consume(k), c = 3, u.interrupt ? r : E) : wt(k) ? (n.consume(k), h = String.fromCharCode(k), L) : a(k);
  }
  function S(k) {
    return k === 45 ? (n.consume(k), c = 2, x) : k === 91 ? (n.consume(k), c = 5, m = 0, A) : wt(k) ? (n.consume(k), c = 4, u.interrupt ? r : E) : a(k);
  }
  function x(k) {
    return k === 45 ? (n.consume(k), u.interrupt ? r : E) : a(k);
  }
  function A(k) {
    const W = "CDATA[";
    return k === W.charCodeAt(m++) ? (n.consume(k), m === W.length ? u.interrupt ? r : ee : A) : a(k);
  }
  function R(k) {
    return wt(k) ? (n.consume(k), h = String.fromCharCode(k), L) : a(k);
  }
  function L(k) {
    if (k === null || k === 47 || k === 62 || Ze(k)) {
      const W = k === 47, fe = h.toLowerCase();
      return !W && !f && Mp.includes(fe) ? (c = 1, u.interrupt ? r(k) : ee(k)) : Wx.includes(h.toLowerCase()) ? (c = 6, W ? (n.consume(k), D) : u.interrupt ? r(k) : ee(k)) : (c = 7, u.interrupt && !u.parser.lazy[u.now().line] ? a(k) : f ? Z(k) : H(k));
    }
    return k === 45 || vt(k) ? (n.consume(k), h += String.fromCharCode(k), L) : a(k);
  }
  function D(k) {
    return k === 62 ? (n.consume(k), u.interrupt ? r : ee) : a(k);
  }
  function Z(k) {
    return Ce(k) ? (n.consume(k), Z) : U(k);
  }
  function H(k) {
    return k === 47 ? (n.consume(k), U) : k === 58 || k === 95 || wt(k) ? (n.consume(k), le) : Ce(k) ? (n.consume(k), H) : U(k);
  }
  function le(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || vt(k) ? (n.consume(k), le) : oe(k);
  }
  function oe(k) {
    return k === 61 ? (n.consume(k), B) : Ce(k) ? (n.consume(k), oe) : H(k);
  }
  function B(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? a(k) : k === 34 || k === 39 ? (n.consume(k), p = k, P) : Ce(k) ? (n.consume(k), B) : J(k);
  }
  function P(k) {
    return k === p ? (n.consume(k), p = null, me) : k === null || pe(k) ? a(k) : (n.consume(k), P);
  }
  function J(k) {
    return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || Ze(k) ? oe(k) : (n.consume(k), J);
  }
  function me(k) {
    return k === 47 || k === 62 || Ce(k) ? H(k) : a(k);
  }
  function U(k) {
    return k === 62 ? (n.consume(k), ne) : a(k);
  }
  function ne(k) {
    return k === null || pe(k) ? ee(k) : Ce(k) ? (n.consume(k), ne) : a(k);
  }
  function ee(k) {
    return k === 45 && c === 2 ? (n.consume(k), _) : k === 60 && c === 1 ? (n.consume(k), F) : k === 62 && c === 4 ? (n.consume(k), z) : k === 63 && c === 3 ? (n.consume(k), E) : k === 93 && c === 5 ? (n.consume(k), xe) : pe(k) && (c === 6 || c === 7) ? (n.exit("htmlFlowData"), n.check(Px, Y, Ee)(k)) : k === null || pe(k) ? (n.exit("htmlFlowData"), Ee(k)) : (n.consume(k), ee);
  }
  function Ee(k) {
    return n.check(eS, ie, Y)(k);
  }
  function ie(k) {
    return n.enter("lineEnding"), n.consume(k), n.exit("lineEnding"), I;
  }
  function I(k) {
    return k === null || pe(k) ? Ee(k) : (n.enter("htmlFlowData"), ee(k));
  }
  function _(k) {
    return k === 45 ? (n.consume(k), E) : ee(k);
  }
  function F(k) {
    return k === 47 ? (n.consume(k), h = "", X) : ee(k);
  }
  function X(k) {
    if (k === 62) {
      const W = h.toLowerCase();
      return Mp.includes(W) ? (n.consume(k), z) : ee(k);
    }
    return wt(k) && h.length < 8 ? (n.consume(k), h += String.fromCharCode(k), X) : ee(k);
  }
  function xe(k) {
    return k === 93 ? (n.consume(k), E) : ee(k);
  }
  function E(k) {
    return k === 62 ? (n.consume(k), z) : k === 45 && c === 2 ? (n.consume(k), E) : ee(k);
  }
  function z(k) {
    return k === null || pe(k) ? (n.exit("htmlFlowData"), Y(k)) : (n.consume(k), z);
  }
  function Y(k) {
    return n.exit("htmlFlow"), r(k);
  }
}
function lS(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return pe(h) ? (n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), f) : a(h);
  }
  function f(h) {
    return u.parser.lazy[u.now().line] ? a(h) : r(h);
  }
}
function iS(n, r, a) {
  return u;
  function u(c) {
    return n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), n.attempt(Ya, r, a);
  }
}
const aS = {
  name: "htmlText",
  tokenize: rS
};
function rS(n, r, a) {
  const u = this;
  let c, f, h;
  return m;
  function m(E) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(E), p;
  }
  function p(E) {
    return E === 33 ? (n.consume(E), d) : E === 47 ? (n.consume(E), oe) : E === 63 ? (n.consume(E), H) : wt(E) ? (n.consume(E), J) : a(E);
  }
  function d(E) {
    return E === 45 ? (n.consume(E), b) : E === 91 ? (n.consume(E), f = 0, A) : wt(E) ? (n.consume(E), Z) : a(E);
  }
  function b(E) {
    return E === 45 ? (n.consume(E), x) : a(E);
  }
  function y(E) {
    return E === null ? a(E) : E === 45 ? (n.consume(E), S) : pe(E) ? (h = y, F(E)) : (n.consume(E), y);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), x) : y(E);
  }
  function x(E) {
    return E === 62 ? _(E) : E === 45 ? S(E) : y(E);
  }
  function A(E) {
    const z = "CDATA[";
    return E === z.charCodeAt(f++) ? (n.consume(E), f === z.length ? R : A) : a(E);
  }
  function R(E) {
    return E === null ? a(E) : E === 93 ? (n.consume(E), L) : pe(E) ? (h = R, F(E)) : (n.consume(E), R);
  }
  function L(E) {
    return E === 93 ? (n.consume(E), D) : R(E);
  }
  function D(E) {
    return E === 62 ? _(E) : E === 93 ? (n.consume(E), D) : R(E);
  }
  function Z(E) {
    return E === null || E === 62 ? _(E) : pe(E) ? (h = Z, F(E)) : (n.consume(E), Z);
  }
  function H(E) {
    return E === null ? a(E) : E === 63 ? (n.consume(E), le) : pe(E) ? (h = H, F(E)) : (n.consume(E), H);
  }
  function le(E) {
    return E === 62 ? _(E) : H(E);
  }
  function oe(E) {
    return wt(E) ? (n.consume(E), B) : a(E);
  }
  function B(E) {
    return E === 45 || vt(E) ? (n.consume(E), B) : P(E);
  }
  function P(E) {
    return pe(E) ? (h = P, F(E)) : Ce(E) ? (n.consume(E), P) : _(E);
  }
  function J(E) {
    return E === 45 || vt(E) ? (n.consume(E), J) : E === 47 || E === 62 || Ze(E) ? me(E) : a(E);
  }
  function me(E) {
    return E === 47 ? (n.consume(E), _) : E === 58 || E === 95 || wt(E) ? (n.consume(E), U) : pe(E) ? (h = me, F(E)) : Ce(E) ? (n.consume(E), me) : _(E);
  }
  function U(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || vt(E) ? (n.consume(E), U) : ne(E);
  }
  function ne(E) {
    return E === 61 ? (n.consume(E), ee) : pe(E) ? (h = ne, F(E)) : Ce(E) ? (n.consume(E), ne) : me(E);
  }
  function ee(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? a(E) : E === 34 || E === 39 ? (n.consume(E), c = E, Ee) : pe(E) ? (h = ee, F(E)) : Ce(E) ? (n.consume(E), ee) : (n.consume(E), ie);
  }
  function Ee(E) {
    return E === c ? (n.consume(E), c = void 0, I) : E === null ? a(E) : pe(E) ? (h = Ee, F(E)) : (n.consume(E), Ee);
  }
  function ie(E) {
    return E === null || E === 34 || E === 39 || E === 60 || E === 61 || E === 96 ? a(E) : E === 47 || E === 62 || Ze(E) ? me(E) : (n.consume(E), ie);
  }
  function I(E) {
    return E === 47 || E === 62 || Ze(E) ? me(E) : a(E);
  }
  function _(E) {
    return E === 62 ? (n.consume(E), n.exit("htmlTextData"), n.exit("htmlText"), r) : a(E);
  }
  function F(E) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), X;
  }
  function X(E) {
    return Ce(E) ? Me(n, xe, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(E) : xe(E);
  }
  function xe(E) {
    return n.enter("htmlTextData"), h(E);
  }
}
const Yc = {
  name: "labelEnd",
  resolveAll: cS,
  resolveTo: fS,
  tokenize: hS
}, uS = {
  tokenize: dS
}, oS = {
  tokenize: mS
}, sS = {
  tokenize: pS
};
function cS(n) {
  let r = -1;
  const a = [];
  for (; ++r < n.length; ) {
    const u = n[r][1];
    if (a.push(n[r]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const c = u.type === "labelImage" ? 4 : 2;
      u.type = "data", r += c;
    }
  }
  return n.length !== a.length && Zt(n, 0, n.length, a), n;
}
function fS(n, r) {
  let a = n.length, u = 0, c, f, h, m;
  for (; a--; )
    if (c = n[a][1], f) {
      if (c.type === "link" || c.type === "labelLink" && c._inactive)
        break;
      n[a][0] === "enter" && c.type === "labelLink" && (c._inactive = !0);
    } else if (h) {
      if (n[a][0] === "enter" && (c.type === "labelImage" || c.type === "labelLink") && !c._balanced && (f = a, c.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else c.type === "labelEnd" && (h = a);
  const p = {
    type: n[f][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[f][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, d = {
    type: "label",
    start: {
      ...n[f][1].start
    },
    end: {
      ...n[h][1].end
    }
  }, b = {
    type: "labelText",
    start: {
      ...n[f + u + 2][1].end
    },
    end: {
      ...n[h - 2][1].start
    }
  };
  return m = [["enter", p, r], ["enter", d, r]], m = ln(m, n.slice(f + 1, f + u + 3)), m = ln(m, [["enter", b, r]]), m = ln(m, zu(r.parser.constructs.insideSpan.null, n.slice(f + u + 4, h - 3), r)), m = ln(m, [["exit", b, r], n[h - 2], n[h - 1], ["exit", d, r]]), m = ln(m, n.slice(h + 1)), m = ln(m, [["exit", p, r]]), Zt(n, f, n.length, m), n;
}
function hS(n, r, a) {
  const u = this;
  let c = u.events.length, f, h;
  for (; c--; )
    if ((u.events[c][1].type === "labelImage" || u.events[c][1].type === "labelLink") && !u.events[c][1]._balanced) {
      f = u.events[c][1];
      break;
    }
  return m;
  function m(S) {
    return f ? f._inactive ? y(S) : (h = u.parser.defined.includes(sn(u.sliceSerialize({
      start: f.end,
      end: u.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(S), n.exit("labelMarker"), n.exit("labelEnd"), p) : a(S);
  }
  function p(S) {
    return S === 40 ? n.attempt(uS, b, h ? b : y)(S) : S === 91 ? n.attempt(oS, b, h ? d : y)(S) : h ? b(S) : y(S);
  }
  function d(S) {
    return n.attempt(sS, b, y)(S);
  }
  function b(S) {
    return r(S);
  }
  function y(S) {
    return f._balanced = !0, a(S);
  }
}
function dS(n, r, a) {
  return u;
  function u(y) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), c;
  }
  function c(y) {
    return Ze(y) ? La(n, f)(y) : f(y);
  }
  function f(y) {
    return y === 41 ? b(y) : Xg(n, h, m, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function h(y) {
    return Ze(y) ? La(n, p)(y) : b(y);
  }
  function m(y) {
    return a(y);
  }
  function p(y) {
    return y === 34 || y === 39 || y === 40 ? Fg(n, d, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : b(y);
  }
  function d(y) {
    return Ze(y) ? La(n, b)(y) : b(y);
  }
  function b(y) {
    return y === 41 ? (n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), n.exit("resource"), r) : a(y);
  }
}
function mS(n, r, a) {
  const u = this;
  return c;
  function c(m) {
    return Zg.call(u, n, f, h, "reference", "referenceMarker", "referenceString")(m);
  }
  function f(m) {
    return u.parser.defined.includes(sn(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? r(m) : a(m);
  }
  function h(m) {
    return a(m);
  }
}
function pS(n, r, a) {
  return u;
  function u(f) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), c;
  }
  function c(f) {
    return f === 93 ? (n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), n.exit("reference"), r) : a(f);
  }
}
const gS = {
  name: "labelStartImage",
  resolveAll: Yc.resolveAll,
  tokenize: yS
};
function yS(n, r, a) {
  const u = this;
  return c;
  function c(m) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(m), n.exit("labelImageMarker"), f;
  }
  function f(m) {
    return m === 91 ? (n.enter("labelMarker"), n.consume(m), n.exit("labelMarker"), n.exit("labelImage"), h) : a(m);
  }
  function h(m) {
    return m === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? a(m) : r(m);
  }
}
const bS = {
  name: "labelStartLink",
  resolveAll: Yc.resolveAll,
  tokenize: vS
};
function vS(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(h), n.exit("labelMarker"), n.exit("labelLink"), f;
  }
  function f(h) {
    return h === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? a(h) : r(h);
  }
}
const ac = {
  name: "lineEnding",
  tokenize: xS
};
function xS(n, r) {
  return a;
  function a(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), Me(n, r, "linePrefix");
  }
}
const yu = {
  name: "thematicBreak",
  tokenize: SS
};
function SS(n, r, a) {
  let u = 0, c;
  return f;
  function f(d) {
    return n.enter("thematicBreak"), h(d);
  }
  function h(d) {
    return c = d, m(d);
  }
  function m(d) {
    return d === c ? (n.enter("thematicBreakSequence"), p(d)) : u >= 3 && (d === null || pe(d)) ? (n.exit("thematicBreak"), r(d)) : a(d);
  }
  function p(d) {
    return d === c ? (n.consume(d), u++, p) : (n.exit("thematicBreakSequence"), Ce(d) ? Me(n, m, "whitespace")(d) : m(d));
  }
}
const Rt = {
  continuation: {
    tokenize: AS
  },
  exit: TS,
  name: "list",
  tokenize: wS
}, kS = {
  partial: !0,
  tokenize: CS
}, ES = {
  partial: !0,
  tokenize: zS
};
function wS(n, r, a) {
  const u = this, c = u.events[u.events.length - 1];
  let f = c && c[1].type === "linePrefix" ? c[2].sliceSerialize(c[1], !0).length : 0, h = 0;
  return m;
  function m(x) {
    const A = u.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (A === "listUnordered" ? !u.containerState.marker || x === u.containerState.marker : wc(x)) {
      if (u.containerState.type || (u.containerState.type = A, n.enter(A, {
        _container: !0
      })), A === "listUnordered")
        return n.enter("listItemPrefix"), x === 42 || x === 45 ? n.check(yu, a, d)(x) : d(x);
      if (!u.interrupt || x === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), p(x);
    }
    return a(x);
  }
  function p(x) {
    return wc(x) && ++h < 10 ? (n.consume(x), p) : (!u.interrupt || h < 2) && (u.containerState.marker ? x === u.containerState.marker : x === 41 || x === 46) ? (n.exit("listItemValue"), d(x)) : a(x);
  }
  function d(x) {
    return n.enter("listItemMarker"), n.consume(x), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || x, n.check(
      Ya,
      // Can’t be empty when interrupting.
      u.interrupt ? a : b,
      n.attempt(kS, S, y)
    );
  }
  function b(x) {
    return u.containerState.initialBlankLine = !0, f++, S(x);
  }
  function y(x) {
    return Ce(x) ? (n.enter("listItemPrefixWhitespace"), n.consume(x), n.exit("listItemPrefixWhitespace"), S) : a(x);
  }
  function S(x) {
    return u.containerState.size = f + u.sliceSerialize(n.exit("listItemPrefix"), !0).length, r(x);
  }
}
function AS(n, r, a) {
  const u = this;
  return u.containerState._closeFlow = void 0, n.check(Ya, c, f);
  function c(m) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, Me(n, r, "listItemIndent", u.containerState.size + 1)(m);
  }
  function f(m) {
    return u.containerState.furtherBlankLines || !Ce(m) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, h(m)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(ES, r, h)(m));
  }
  function h(m) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, Me(n, n.attempt(Rt, r, a), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
  }
}
function zS(n, r, a) {
  const u = this;
  return Me(n, c, "listItemIndent", u.containerState.size + 1);
  function c(f) {
    const h = u.events[u.events.length - 1];
    return h && h[1].type === "listItemIndent" && h[2].sliceSerialize(h[1], !0).length === u.containerState.size ? r(f) : a(f);
  }
}
function TS(n) {
  n.exit(this.containerState.type);
}
function CS(n, r, a) {
  const u = this;
  return Me(n, c, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function c(f) {
    const h = u.events[u.events.length - 1];
    return !Ce(f) && h && h[1].type === "listItemPrefixWhitespace" ? r(f) : a(f);
  }
}
const Rp = {
  name: "setextUnderline",
  resolveTo: DS,
  tokenize: _S
};
function DS(n, r) {
  let a = n.length, u, c, f;
  for (; a--; )
    if (n[a][0] === "enter") {
      if (n[a][1].type === "content") {
        u = a;
        break;
      }
      n[a][1].type === "paragraph" && (c = a);
    } else
      n[a][1].type === "content" && n.splice(a, 1), !f && n[a][1].type === "definition" && (f = a);
  const h = {
    type: "setextHeading",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[c][1].type = "setextHeadingText", f ? (n.splice(c, 0, ["enter", h, r]), n.splice(f + 1, 0, ["exit", n[u][1], r]), n[u][1].end = {
    ...n[f][1].end
  }) : n[u][1] = h, n.push(["exit", h, r]), n;
}
function _S(n, r, a) {
  const u = this;
  let c;
  return f;
  function f(d) {
    let b = u.events.length, y;
    for (; b--; )
      if (u.events[b][1].type !== "lineEnding" && u.events[b][1].type !== "linePrefix" && u.events[b][1].type !== "content") {
        y = u.events[b][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || y) ? (n.enter("setextHeadingLine"), c = d, h(d)) : a(d);
  }
  function h(d) {
    return n.enter("setextHeadingLineSequence"), m(d);
  }
  function m(d) {
    return d === c ? (n.consume(d), m) : (n.exit("setextHeadingLineSequence"), Ce(d) ? Me(n, p, "lineSuffix")(d) : p(d));
  }
  function p(d) {
    return d === null || pe(d) ? (n.exit("setextHeadingLine"), r(d)) : a(d);
  }
}
const OS = {
  tokenize: MS
};
function MS(n) {
  const r = this, a = n.attempt(
    // Try to parse a blank line.
    Ya,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, c, Me(n, n.attempt(this.parser.constructs.flow, c, n.attempt(jx, c)), "linePrefix"))
  );
  return a;
  function u(f) {
    if (f === null) {
      n.consume(f);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(f), n.exit("lineEndingBlank"), r.currentConstruct = void 0, a;
  }
  function c(f) {
    if (f === null) {
      n.consume(f);
      return;
    }
    return n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), r.currentConstruct = void 0, a;
  }
}
const RS = {
  resolveAll: Jg()
}, NS = Kg("string"), LS = Kg("text");
function Kg(n) {
  return {
    resolveAll: Jg(n === "text" ? US : void 0),
    tokenize: r
  };
  function r(a) {
    const u = this, c = this.parser.constructs[n], f = a.attempt(c, h, m);
    return h;
    function h(b) {
      return d(b) ? f(b) : m(b);
    }
    function m(b) {
      if (b === null) {
        a.consume(b);
        return;
      }
      return a.enter("data"), a.consume(b), p;
    }
    function p(b) {
      return d(b) ? (a.exit("data"), f(b)) : (a.consume(b), p);
    }
    function d(b) {
      if (b === null)
        return !0;
      const y = c[b];
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
function Jg(n) {
  return r;
  function r(a, u) {
    let c = -1, f;
    for (; ++c <= a.length; )
      f === void 0 ? a[c] && a[c][1].type === "data" && (f = c, c++) : (!a[c] || a[c][1].type !== "data") && (c !== f + 2 && (a[f][1].end = a[c - 1][1].end, a.splice(f + 2, c - f - 2), c = f + 2), f = void 0);
    return n ? n(a, u) : a;
  }
}
function US(n, r) {
  let a = 0;
  for (; ++a <= n.length; )
    if ((a === n.length || n[a][1].type === "lineEnding") && n[a - 1][1].type === "data") {
      const u = n[a - 1][1], c = r.sliceStream(u);
      let f = c.length, h = -1, m = 0, p;
      for (; f--; ) {
        const d = c[f];
        if (typeof d == "string") {
          for (h = d.length; d.charCodeAt(h - 1) === 32; )
            m++, h--;
          if (h) break;
          h = -1;
        } else if (d === -2)
          p = !0, m++;
        else if (d !== -1) {
          f++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && a === n.length && (m = 0), m) {
        const d = {
          type: a === n.length || p || m < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? h : u.start._bufferIndex + h,
            _index: u.start._index + f,
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
const jS = {
  42: Rt,
  43: Rt,
  45: Rt,
  48: Rt,
  49: Rt,
  50: Rt,
  51: Rt,
  52: Rt,
  53: Rt,
  54: Rt,
  55: Rt,
  56: Rt,
  57: Rt,
  62: Yg
}, BS = {
  91: Gx
}, HS = {
  [-2]: ic,
  [-1]: ic,
  32: ic
}, qS = {
  35: Kx,
  42: yu,
  45: [Rp, yu],
  60: $x,
  61: Rp,
  95: yu,
  96: Op,
  126: Op
}, YS = {
  38: Vg,
  92: Gg
}, GS = {
  [-5]: ac,
  [-4]: ac,
  [-3]: ac,
  33: gS,
  38: Vg,
  42: Ac,
  60: [bx, aS],
  91: bS,
  92: [Zx, Gg],
  93: Yc,
  95: Ac,
  96: Ox
}, VS = {
  null: [Ac, RS]
}, QS = {
  null: [42, 95]
}, XS = {
  null: []
}, ZS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: QS,
  contentInitial: BS,
  disable: XS,
  document: jS,
  flow: qS,
  flowInitial: HS,
  insideSpan: VS,
  string: YS,
  text: GS
}, Symbol.toStringTag, { value: "Module" }));
function FS(n, r, a) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: a && a.line || 1,
    column: a && a.column || 1,
    offset: a && a.offset || 0
  };
  const c = {}, f = [];
  let h = [], m = [];
  const p = {
    attempt: P(oe),
    check: P(B),
    consume: Z,
    enter: H,
    exit: le,
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
  return r.resolveAll && f.push(r), d;
  function y(ne) {
    return h = ln(h, ne), L(), h[h.length - 1] !== null ? [] : (J(r, 0), d.events = zu(f, d.events, d), d.events);
  }
  function S(ne, ee) {
    return JS(x(ne), ee);
  }
  function x(ne) {
    return KS(h, ne);
  }
  function A() {
    const {
      _bufferIndex: ne,
      _index: ee,
      line: Ee,
      column: ie,
      offset: I
    } = u;
    return {
      _bufferIndex: ne,
      _index: ee,
      line: Ee,
      column: ie,
      offset: I
    };
  }
  function R(ne) {
    c[ne.line] = ne.column, U();
  }
  function L() {
    let ne;
    for (; u._index < h.length; ) {
      const ee = h[u._index];
      if (typeof ee == "string")
        for (ne = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === ne && u._bufferIndex < ee.length; )
          D(ee.charCodeAt(u._bufferIndex));
      else
        D(ee);
    }
  }
  function D(ne) {
    b = b(ne);
  }
  function Z(ne) {
    pe(ne) ? (u.line++, u.column = 1, u.offset += ne === -3 ? 2 : 1, U()) : ne !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    h[u._index].length && (u._bufferIndex = -1, u._index++)), d.previous = ne;
  }
  function H(ne, ee) {
    const Ee = ee || {};
    return Ee.type = ne, Ee.start = A(), d.events.push(["enter", Ee, d]), m.push(Ee), Ee;
  }
  function le(ne) {
    const ee = m.pop();
    return ee.end = A(), d.events.push(["exit", ee, d]), ee;
  }
  function oe(ne, ee) {
    J(ne, ee.from);
  }
  function B(ne, ee) {
    ee.restore();
  }
  function P(ne, ee) {
    return Ee;
    function Ee(ie, I, _) {
      let F, X, xe, E;
      return Array.isArray(ie) ? (
        /* c8 ignore next 1 */
        Y(ie)
      ) : "tokenize" in ie ? (
        // Looks like a construct.
        Y([
          /** @type {Construct} */
          ie
        ])
      ) : z(ie);
      function z(ce) {
        return he;
        function he(Ve) {
          const Re = Ve !== null && ce[Ve], ht = Ve !== null && ce.null, Lt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Re) ? Re : Re ? [Re] : [],
            ...Array.isArray(ht) ? ht : ht ? [ht] : []
          ];
          return Y(Lt)(Ve);
        }
      }
      function Y(ce) {
        return F = ce, X = 0, ce.length === 0 ? _ : k(ce[X]);
      }
      function k(ce) {
        return he;
        function he(Ve) {
          return E = me(), xe = ce, ce.partial || (d.currentConstruct = ce), ce.name && d.parser.constructs.disable.null.includes(ce.name) ? fe() : ce.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            ee ? Object.assign(Object.create(d), ee) : d,
            p,
            W,
            fe
          )(Ve);
        }
      }
      function W(ce) {
        return ne(xe, E), I;
      }
      function fe(ce) {
        return E.restore(), ++X < F.length ? k(F[X]) : _;
      }
    }
  }
  function J(ne, ee) {
    ne.resolveAll && !f.includes(ne) && f.push(ne), ne.resolve && Zt(d.events, ee, d.events.length - ee, ne.resolve(d.events.slice(ee), d)), ne.resolveTo && (d.events = ne.resolveTo(d.events, d));
  }
  function me() {
    const ne = A(), ee = d.previous, Ee = d.currentConstruct, ie = d.events.length, I = Array.from(m);
    return {
      from: ie,
      restore: _
    };
    function _() {
      u = ne, d.previous = ee, d.currentConstruct = Ee, d.events.length = ie, m = I, U();
    }
  }
  function U() {
    u.line in c && u.column < 2 && (u.column = c[u.line], u.offset += c[u.line] - 1);
  }
}
function KS(n, r) {
  const a = r.start._index, u = r.start._bufferIndex, c = r.end._index, f = r.end._bufferIndex;
  let h;
  if (a === c)
    h = [n[a].slice(u, f)];
  else {
    if (h = n.slice(a, c), u > -1) {
      const m = h[0];
      typeof m == "string" ? h[0] = m.slice(u) : h.shift();
    }
    f > 0 && h.push(n[c].slice(0, f));
  }
  return h;
}
function JS(n, r) {
  let a = -1;
  const u = [];
  let c;
  for (; ++a < n.length; ) {
    const f = n[a];
    let h;
    if (typeof f == "string")
      h = f;
    else switch (f) {
      case -5: {
        h = "\r";
        break;
      }
      case -4: {
        h = `
`;
        break;
      }
      case -3: {
        h = `\r
`;
        break;
      }
      case -2: {
        h = r ? " " : "	";
        break;
      }
      case -1: {
        if (!r && c) continue;
        h = " ";
        break;
      }
      default:
        h = String.fromCharCode(f);
    }
    c = f === -2, u.push(h);
  }
  return u.join("");
}
function IS(n) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Hg([ZS, ...(n || {}).extensions || []])
    ),
    content: c(fx),
    defined: [],
    document: c(dx),
    flow: c(OS),
    lazy: {},
    string: c(NS),
    text: c(LS)
  };
  return u;
  function c(f) {
    return h;
    function h(m) {
      return FS(u, f, m);
    }
  }
}
function WS(n) {
  for (; !Qg(n); )
    ;
  return n;
}
const Np = /[\0\t\n\r]/g;
function $S() {
  let n = 1, r = "", a = !0, u;
  return c;
  function c(f, h, m) {
    const p = [];
    let d, b, y, S, x;
    for (f = r + (typeof f == "string" ? f.toString() : new TextDecoder(h || void 0).decode(f)), y = 0, r = "", a && (f.charCodeAt(0) === 65279 && y++, a = void 0); y < f.length; ) {
      if (Np.lastIndex = y, d = Np.exec(f), S = d && d.index !== void 0 ? d.index : f.length, x = f.charCodeAt(S), !d) {
        r = f.slice(y);
        break;
      }
      if (x === 10 && y === S && u)
        p.push(-3), u = void 0;
      else
        switch (u && (p.push(-5), u = void 0), y < S && (p.push(f.slice(y, S)), n += S - y), x) {
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
const PS = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ek(n) {
  return n.replace(PS, tk);
}
function tk(n, r, a) {
  if (r)
    return r;
  if (a.charCodeAt(0) === 35) {
    const c = a.charCodeAt(1), f = c === 120 || c === 88;
    return qg(a.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return qc(a) || n;
}
const Ig = {}.hasOwnProperty;
function nk(n, r, a) {
  return r && typeof r == "object" && (a = r, r = void 0), lk(a)(WS(IS(a).document().write($S()(n, r, !0))));
}
function lk(n) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Bl),
      autolinkProtocol: me,
      autolinkEmail: me,
      atxHeading: f(Ul),
      blockQuote: f(ht),
      characterEscape: me,
      characterReference: me,
      codeFenced: f(Lt),
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: h,
      codeIndented: f(Lt, h),
      codeText: f(cn, h),
      codeTextData: me,
      data: me,
      codeFlowValue: me,
      definition: f(Va),
      definitionDestinationString: h,
      definitionLabelString: h,
      definitionTitleString: h,
      emphasis: f(yn),
      hardBreakEscape: f(jl),
      hardBreakTrailing: f(jl),
      htmlFlow: f(Qa, h),
      htmlFlowData: me,
      htmlText: f(Qa, h),
      htmlTextData: me,
      image: f(Xa),
      label: h,
      link: f(Bl),
      listItem: f(Ni),
      listItemValue: S,
      listOrdered: f(Hl, y),
      listUnordered: f(Hl),
      paragraph: f(_u),
      reference: k,
      referenceString: h,
      resourceDestinationString: h,
      resourceTitleString: h,
      setextHeading: f(Ul),
      strong: f(Ou),
      thematicBreak: f(Mu)
    },
    exit: {
      atxHeading: p(),
      atxHeadingSequence: oe,
      autolink: p(),
      autolinkEmail: Re,
      autolinkProtocol: Ve,
      blockQuote: p(),
      characterEscapeValue: U,
      characterReferenceMarkerHexadecimal: fe,
      characterReferenceMarkerNumeric: fe,
      characterReferenceValue: ce,
      characterReference: he,
      codeFenced: p(L),
      codeFencedFence: R,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: A,
      codeFlowValue: U,
      codeIndented: p(D),
      codeText: p(I),
      codeTextData: U,
      data: U,
      definition: p(),
      definitionDestinationString: le,
      definitionLabelString: Z,
      definitionTitleString: H,
      emphasis: p(),
      hardBreakEscape: p(ee),
      hardBreakTrailing: p(ee),
      htmlFlow: p(Ee),
      htmlFlowData: U,
      htmlText: p(ie),
      htmlTextData: U,
      image: p(F),
      label: xe,
      labelText: X,
      lineEnding: ne,
      link: p(_),
      listItem: p(),
      listOrdered: p(),
      listUnordered: p(),
      paragraph: p(),
      referenceString: W,
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
  Wg(r, (n || {}).mdastExtensions || []);
  const a = {};
  return u;
  function u(G) {
    let $ = {
      type: "root",
      children: []
    };
    const ye = {
      stack: [$],
      tokenStack: [],
      config: r,
      enter: m,
      exit: d,
      buffer: h,
      resume: b,
      data: a
    }, Ae = [];
    let je = -1;
    for (; ++je < G.length; )
      if (G[je][1].type === "listOrdered" || G[je][1].type === "listUnordered")
        if (G[je][0] === "enter")
          Ae.push(je);
        else {
          const Ut = Ae.pop();
          je = c(G, Ut, je);
        }
    for (je = -1; ++je < G.length; ) {
      const Ut = r[G[je][0]];
      Ig.call(Ut, G[je][1].type) && Ut[G[je][1].type].call(Object.assign({
        sliceSerialize: G[je][2].sliceSerialize
      }, ye), G[je][1]);
    }
    if (ye.tokenStack.length > 0) {
      const Ut = ye.tokenStack[ye.tokenStack.length - 1];
      (Ut[1] || Lp).call(ye, void 0, Ut[0]);
    }
    for ($.position = {
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
    }, je = -1; ++je < r.transforms.length; )
      $ = r.transforms[je]($) || $;
    return $;
  }
  function c(G, $, ye) {
    let Ae = $ - 1, je = -1, Ut = !1, bn, kt, ut, At;
    for (; ++Ae <= ye; ) {
      const Qe = G[Ae];
      switch (Qe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Qe[0] === "enter" ? je++ : je--, At = void 0;
          break;
        }
        case "lineEndingBlank": {
          Qe[0] === "enter" && (bn && !At && !je && !ut && (ut = Ae), At = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          At = void 0;
      }
      if (!je && Qe[0] === "enter" && Qe[1].type === "listItemPrefix" || je === -1 && Qe[0] === "exit" && (Qe[1].type === "listUnordered" || Qe[1].type === "listOrdered")) {
        if (bn) {
          let Hn = Ae;
          for (kt = void 0; Hn--; ) {
            const an = G[Hn];
            if (an[1].type === "lineEnding" || an[1].type === "lineEndingBlank") {
              if (an[0] === "exit") continue;
              kt && (G[kt][1].type = "lineEndingBlank", Ut = !0), an[1].type = "lineEnding", kt = Hn;
            } else if (!(an[1].type === "linePrefix" || an[1].type === "blockQuotePrefix" || an[1].type === "blockQuotePrefixWhitespace" || an[1].type === "blockQuoteMarker" || an[1].type === "listItemIndent")) break;
          }
          ut && (!kt || ut < kt) && (bn._spread = !0), bn.end = Object.assign({}, kt ? G[kt][1].start : Qe[1].end), G.splice(kt || Ae, 0, ["exit", bn, Qe[2]]), Ae++, ye++;
        }
        if (Qe[1].type === "listItemPrefix") {
          const Hn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Qe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          bn = Hn, G.splice(Ae, 0, ["enter", Hn, Qe[2]]), Ae++, ye++, ut = void 0, At = !0;
        }
      }
    }
    return G[$][1]._spread = Ut, ye;
  }
  function f(G, $) {
    return ye;
    function ye(Ae) {
      m.call(this, G(Ae), Ae), $ && $.call(this, Ae);
    }
  }
  function h() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(G, $, ye) {
    this.stack[this.stack.length - 1].children.push(G), this.stack.push(G), this.tokenStack.push([$, ye || void 0]), G.position = {
      start: fl($.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function p(G) {
    return $;
    function $(ye) {
      G && G.call(this, ye), d.call(this, ye);
    }
  }
  function d(G, $) {
    const ye = this.stack.pop(), Ae = this.tokenStack.pop();
    if (Ae)
      Ae[0].type !== G.type && ($ ? $.call(this, G, Ae[0]) : (Ae[1] || Lp).call(this, G, Ae[0]));
    else throw new Error("Cannot close `" + G.type + "` (" + Na({
      start: G.start,
      end: G.end
    }) + "): it’s not open");
    ye.position.end = fl(G.end);
  }
  function b() {
    return Hc(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function S(G) {
    if (this.data.expectingFirstListItemValue) {
      const $ = this.stack[this.stack.length - 2];
      $.start = Number.parseInt(this.sliceSerialize(G), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.lang = G;
  }
  function A() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.meta = G;
  }
  function R() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function L() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function D() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = G.replace(/(\r?\n|\r)$/g, "");
  }
  function Z(G) {
    const $ = this.resume(), ye = this.stack[this.stack.length - 1];
    ye.label = $, ye.identifier = sn(this.sliceSerialize(G)).toLowerCase();
  }
  function H() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.title = G;
  }
  function le() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.url = G;
  }
  function oe(G) {
    const $ = this.stack[this.stack.length - 1];
    if (!$.depth) {
      const ye = this.sliceSerialize(G).length;
      $.depth = ye;
    }
  }
  function B() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function P(G) {
    const $ = this.stack[this.stack.length - 1];
    $.depth = this.sliceSerialize(G).codePointAt(0) === 61 ? 1 : 2;
  }
  function J() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function me(G) {
    const ye = this.stack[this.stack.length - 1].children;
    let Ae = ye[ye.length - 1];
    (!Ae || Ae.type !== "text") && (Ae = St(), Ae.position = {
      start: fl(G.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ye.push(Ae)), this.stack.push(Ae);
  }
  function U(G) {
    const $ = this.stack.pop();
    $.value += this.sliceSerialize(G), $.position.end = fl(G.end);
  }
  function ne(G) {
    const $ = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ye = $.children[$.children.length - 1];
      ye.position.end = fl(G.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes($.type) && (me.call(this, G), U.call(this, G));
  }
  function ee() {
    this.data.atHardBreak = !0;
  }
  function Ee() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = G;
  }
  function ie() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = G;
  }
  function I() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = G;
  }
  function _() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const $ = this.data.referenceType || "shortcut";
      G.type += "Reference", G.referenceType = $, delete G.url, delete G.title;
    } else
      delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function F() {
    const G = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const $ = this.data.referenceType || "shortcut";
      G.type += "Reference", G.referenceType = $, delete G.url, delete G.title;
    } else
      delete G.identifier, delete G.label;
    this.data.referenceType = void 0;
  }
  function X(G) {
    const $ = this.sliceSerialize(G), ye = this.stack[this.stack.length - 2];
    ye.label = ek($), ye.identifier = sn($).toLowerCase();
  }
  function xe() {
    const G = this.stack[this.stack.length - 1], $ = this.resume(), ye = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ye.type === "link") {
      const Ae = G.children;
      ye.children = Ae;
    } else
      ye.alt = $;
  }
  function E() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.url = G;
  }
  function z() {
    const G = this.resume(), $ = this.stack[this.stack.length - 1];
    $.title = G;
  }
  function Y() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = "collapsed";
  }
  function W(G) {
    const $ = this.resume(), ye = this.stack[this.stack.length - 1];
    ye.label = $, ye.identifier = sn(this.sliceSerialize(G)).toLowerCase(), this.data.referenceType = "full";
  }
  function fe(G) {
    this.data.characterReferenceType = G.type;
  }
  function ce(G) {
    const $ = this.sliceSerialize(G), ye = this.data.characterReferenceType;
    let Ae;
    ye ? (Ae = qg($, ye === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ae = qc($);
    const je = this.stack[this.stack.length - 1];
    je.value += Ae;
  }
  function he(G) {
    const $ = this.stack.pop();
    $.position.end = fl(G.end);
  }
  function Ve(G) {
    U.call(this, G);
    const $ = this.stack[this.stack.length - 1];
    $.url = this.sliceSerialize(G);
  }
  function Re(G) {
    U.call(this, G);
    const $ = this.stack[this.stack.length - 1];
    $.url = "mailto:" + this.sliceSerialize(G);
  }
  function ht() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Lt() {
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
  function Ou() {
    return {
      type: "strong",
      children: []
    };
  }
  function St() {
    return {
      type: "text",
      value: ""
    };
  }
  function Mu() {
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
function Wg(n, r) {
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    Array.isArray(u) ? Wg(n, u) : ik(n, u);
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
function Lp(n, r) {
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
  let f = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: a }]
  };
  return r.meta && (f.data = { meta: r.meta }), n.patch(r, f), f = n.applyData(r, f), f = { type: "element", tagName: "pre", properties: {}, children: [f] }, n.patch(r, f), f;
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
  const a = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", u = String(r.identifier).toUpperCase(), c = Ri(u.toLowerCase()), f = n.footnoteOrder.indexOf(u);
  let h, m = n.footnoteCounts.get(u);
  m === void 0 ? (m = 0, n.footnoteOrder.push(u), h = n.footnoteOrder.length) : h = f + 1, m += 1, n.footnoteCounts.set(u, m);
  const p = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + c,
      id: a + "fnref-" + c + (m > 1 ? "-" + m : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(h) }]
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
function hk(n, r) {
  const a = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function dk(n, r) {
  if (n.options.allowDangerousHtml) {
    const a = { type: "raw", value: r.value };
    return n.patch(r, a), n.applyData(r, a);
  }
}
function $g(n, r) {
  const a = r.referenceType;
  let u = "]";
  if (a === "collapsed" ? u += "[]" : a === "full" && (u += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference")
    return [{ type: "text", value: "![" + r.alt + u }];
  const c = n.all(r), f = c[0];
  f && f.type === "text" ? f.value = "[" + f.value : c.unshift({ type: "text", value: "[" });
  const h = c[c.length - 1];
  return h && h.type === "text" ? h.value += u : c.push({ type: "text", value: u }), c;
}
function mk(n, r) {
  const a = String(r.identifier).toUpperCase(), u = n.definitionById.get(a);
  if (!u)
    return $g(n, r);
  const c = { src: Ri(u.url || ""), alt: r.alt };
  u.title !== null && u.title !== void 0 && (c.title = u.title);
  const f = { type: "element", tagName: "img", properties: c, children: [] };
  return n.patch(r, f), n.applyData(r, f);
}
function pk(n, r) {
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
    return $g(n, r);
  const c = { href: Ri(u.url || "") };
  u.title !== null && u.title !== void 0 && (c.title = u.title);
  const f = {
    type: "element",
    tagName: "a",
    properties: c,
    children: n.all(r)
  };
  return n.patch(r, f), n.applyData(r, f);
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
  const u = n.all(r), c = a ? xk(a) : Pg(r), f = {}, h = [];
  if (typeof r.checked == "boolean") {
    const b = u[0];
    let y;
    b && b.type === "element" && b.tagName === "p" ? y = b : (y = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: r.checked, disabled: !0 },
      children: []
    }), f.className = ["task-list-item"];
  }
  let m = -1;
  for (; ++m < u.length; ) {
    const b = u[m];
    (c || m !== 0 || b.type !== "element" || b.tagName !== "p") && h.push({ type: "text", value: `
` }), b.type === "element" && b.tagName === "p" && !c ? h.push(...b.children) : h.push(b);
  }
  const p = u[u.length - 1];
  p && (c || p.type !== "element" || p.tagName !== "p") && h.push({ type: "text", value: `
` });
  const d = { type: "element", tagName: "li", properties: f, children: h };
  return n.patch(r, d), n.applyData(r, d);
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
function Sk(n, r) {
  const a = {}, u = n.all(r);
  let c = -1;
  for (typeof r.start == "number" && r.start !== 1 && (a.start = r.start); ++c < u.length; ) {
    const h = u[c];
    if (h.type === "element" && h.tagName === "li" && h.properties && Array.isArray(h.properties.className) && h.properties.className.includes("task-list-item")) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const f = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: a,
    children: n.wrap(u, !0)
  };
  return n.patch(r, f), n.applyData(r, f);
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
function Ek(n, r) {
  const a = { type: "root", children: n.wrap(n.all(r)) };
  return n.patch(r, a), n.applyData(r, a);
}
function wk(n, r) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, a), n.applyData(r, a);
}
function Ak(n, r) {
  const a = n.all(r), u = a.shift(), c = [];
  if (u) {
    const h = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([u], !0)
    };
    n.patch(r.children[0], h), c.push(h);
  }
  if (a.length > 0) {
    const h = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(a, !0)
    }, m = Lc(r.children[1]), p = Mg(r.children[r.children.length - 1]);
    m && p && (h.position = { start: m, end: p }), c.push(h);
  }
  const f = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(c, !0)
  };
  return n.patch(r, f), n.applyData(r, f);
}
function zk(n, r, a) {
  const u = a ? a.children : void 0, f = (u ? u.indexOf(r) : 1) === 0 ? "th" : "td", h = a && a.type === "table" ? a.align : void 0, m = h ? h.length : r.children.length;
  let p = -1;
  const d = [];
  for (; ++p < m; ) {
    const y = r.children[p], S = {}, x = h ? h[p] : void 0;
    x && (S.align = x);
    let A = { type: "element", tagName: f, properties: S, children: [] };
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
const Up = 9, jp = 32;
function Ck(n) {
  const r = String(n), a = /\r?\n|\r/g;
  let u = a.exec(r), c = 0;
  const f = [];
  for (; u; )
    f.push(
      Bp(r.slice(c, u.index), c > 0, !0),
      u[0]
    ), c = u.index + u[0].length, u = a.exec(r);
  return f.push(Bp(r.slice(c), c > 0, !1)), f.join("");
}
function Bp(n, r, a) {
  let u = 0, c = n.length;
  if (r) {
    let f = n.codePointAt(u);
    for (; f === Up || f === jp; )
      u++, f = n.codePointAt(u);
  }
  if (a) {
    let f = n.codePointAt(c - 1);
    for (; f === Up || f === jp; )
      c--, f = n.codePointAt(c - 1);
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
const Ok = {
  blockquote: rk,
  break: uk,
  code: ok,
  delete: sk,
  emphasis: ck,
  footnoteReference: fk,
  heading: hk,
  html: dk,
  imageReference: mk,
  image: pk,
  inlineCode: gk,
  linkReference: yk,
  link: bk,
  listItem: vk,
  list: Sk,
  paragraph: kk,
  // @ts-expect-error: root is different, but hard to type.
  root: Ek,
  strong: wk,
  table: Ak,
  tableCell: Tk,
  tableRow: zk,
  text: Dk,
  thematicBreak: _k,
  toml: hu,
  yaml: hu,
  definition: hu,
  footnoteDefinition: hu
};
function hu() {
}
const ey = -1, Tu = 0, Ua = 1, xu = 2, Gc = 3, Vc = 4, Qc = 5, Xc = 6, ty = 7, ny = 8, Hp = typeof self == "object" ? self : globalThis, Mk = (n, r) => {
  const a = (c, f) => (n.set(f, c), c), u = (c) => {
    if (n.has(c))
      return n.get(c);
    const [f, h] = r[c];
    switch (f) {
      case Tu:
      case ey:
        return a(h, c);
      case Ua: {
        const m = a([], c);
        for (const p of h)
          m.push(u(p));
        return m;
      }
      case xu: {
        const m = a({}, c);
        for (const [p, d] of h)
          m[u(p)] = u(d);
        return m;
      }
      case Gc:
        return a(new Date(h), c);
      case Vc: {
        const { source: m, flags: p } = h;
        return a(new RegExp(m, p), c);
      }
      case Qc: {
        const m = a(/* @__PURE__ */ new Map(), c);
        for (const [p, d] of h)
          m.set(u(p), u(d));
        return m;
      }
      case Xc: {
        const m = a(/* @__PURE__ */ new Set(), c);
        for (const p of h)
          m.add(u(p));
        return m;
      }
      case ty: {
        const { name: m, message: p } = h;
        return a(new Hp[m](p), c);
      }
      case ny:
        return a(BigInt(h), c);
      case "BigInt":
        return a(Object(BigInt(h)), c);
      case "ArrayBuffer":
        return a(new Uint8Array(h).buffer, h);
      case "DataView": {
        const { buffer: m } = new Uint8Array(h);
        return a(new DataView(m), h);
      }
    }
    return a(new Hp[f](h), c);
  };
  return u;
}, qp = (n) => Mk(/* @__PURE__ */ new Map(), n)(0), zi = "", { toString: Rk } = {}, { keys: Nk } = Object, Ra = (n) => {
  const r = typeof n;
  if (r !== "object" || !n)
    return [Tu, r];
  const a = Rk.call(n).slice(8, -1);
  switch (a) {
    case "Array":
      return [Ua, zi];
    case "Object":
      return [xu, zi];
    case "Date":
      return [Gc, zi];
    case "RegExp":
      return [Vc, zi];
    case "Map":
      return [Qc, zi];
    case "Set":
      return [Xc, zi];
    case "DataView":
      return [Ua, a];
  }
  return a.includes("Array") ? [Ua, a] : a.includes("Error") ? [ty, a] : [xu, a];
}, du = ([n, r]) => n === Tu && (r === "function" || r === "symbol"), Lk = (n, r, a, u) => {
  const c = (h, m) => {
    const p = u.push(h) - 1;
    return a.set(m, p), p;
  }, f = (h) => {
    if (a.has(h))
      return a.get(h);
    let [m, p] = Ra(h);
    switch (m) {
      case Tu: {
        let b = h;
        switch (p) {
          case "bigint":
            m = ny, b = h.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + p);
            b = null;
            break;
          case "undefined":
            return c([ey], h);
        }
        return c([m, b], h);
      }
      case Ua: {
        if (p) {
          let S = h;
          return p === "DataView" ? S = new Uint8Array(h.buffer) : p === "ArrayBuffer" && (S = new Uint8Array(h)), c([p, [...S]], h);
        }
        const b = [], y = c([m, b], h);
        for (const S of h)
          b.push(f(S));
        return y;
      }
      case xu: {
        if (p)
          switch (p) {
            case "BigInt":
              return c([p, h.toString()], h);
            case "Boolean":
            case "Number":
            case "String":
              return c([p, h.valueOf()], h);
          }
        if (r && "toJSON" in h)
          return f(h.toJSON());
        const b = [], y = c([m, b], h);
        for (const S of Nk(h))
          (n || !du(Ra(h[S]))) && b.push([f(S), f(h[S])]);
        return y;
      }
      case Gc:
        return c([m, h.toISOString()], h);
      case Vc: {
        const { source: b, flags: y } = h;
        return c([m, { source: b, flags: y }], h);
      }
      case Qc: {
        const b = [], y = c([m, b], h);
        for (const [S, x] of h)
          (n || !(du(Ra(S)) || du(Ra(x)))) && b.push([f(S), f(x)]);
        return y;
      }
      case Xc: {
        const b = [], y = c([m, b], h);
        for (const S of h)
          (n || !du(Ra(S))) && b.push(f(S));
        return y;
      }
    }
    const { message: d } = h;
    return c([m, { name: p, message: d }], h);
  };
  return f;
}, Yp = (n, { json: r, lossy: a } = {}) => {
  const u = [];
  return Lk(!(r || a), !!r, /* @__PURE__ */ new Map(), u)(n), u;
}, Su = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, r) => r && ("json" in r || "lossy" in r) ? qp(Yp(n, r)) : structuredClone(n)
) : (n, r) => qp(Yp(n, r));
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
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", a = n.options.footnoteBackContent || Uk, u = n.options.footnoteBackLabel || jk, c = n.options.footnoteLabel || "Footnotes", f = n.options.footnoteLabelTagName || "h2", h = n.options.footnoteLabelProperties || {
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
    const D = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + S },
      children: n.wrap(b, !0)
    };
    n.patch(d, D), m.push(D);
  }
  if (m.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: f,
          properties: {
            ...Su(h),
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
          children: n.wrap(m, !0)
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
    let f = -1;
    for (; ++f < r.length; )
      if (r[f].apply(this, c)) return !0;
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
    let f;
    for (f in n)
      if (c[f] !== r[f]) return !1;
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
const ly = [], Qk = !0, zc = !1, Xk = "skip";
function iy(n, r, a, u) {
  let c;
  typeof r == "function" && typeof a != "function" ? (u = a, a = r) : c = r;
  const f = Cu(c), h = u ? -1 : 1;
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
      let x = ly, A, R, L;
      if ((!r || f(p, d, b[b.length - 1] || void 0)) && (x = Zk(a(p, b)), x[0] === zc))
        return x;
      if ("children" in p && p.children) {
        const D = (
          /** @type {UnistParent} */
          p
        );
        if (D.children && x[0] !== Xk)
          for (R = (u ? D.children.length : -1) + h, L = b.concat(D); R > -1 && R < D.children.length; ) {
            const Z = D.children[R];
            if (A = m(Z, R, L)(), A[0] === zc)
              return A;
            R = typeof A[1] == "number" ? A[1] : R + h;
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
  let c, f, h;
  typeof r == "function" && typeof a != "function" ? (f = void 0, h = r, c = a) : (f = r, h = a, c = u), iy(n, f, m, c);
  function m(p, d) {
    const b = d[d.length - 1], y = b ? b.children.indexOf(p) : void 0;
    return h(p, y, b);
  }
}
const Tc = {}.hasOwnProperty, Fk = {};
function Kk(n, r) {
  const a = r || Fk, u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = { ...Ok, ...a.handlers }, m = {
    all: d,
    applyData: Ik,
    definitionById: u,
    footnoteById: c,
    footnoteCounts: f,
    footnoteOrder: [],
    handlers: h,
    one: p,
    options: a,
    patch: Jk,
    wrap: $k
  };
  return Zc(n, function(b) {
    if (b.type === "definition" || b.type === "footnoteDefinition") {
      const y = b.type === "definition" ? u : c, S = String(b.identifier).toUpperCase();
      y.has(S) || y.set(S, b);
    }
  }), m;
  function p(b, y) {
    const S = b.type, x = m.handlers[S];
    if (Tc.call(m.handlers, S) && x)
      return x(m, b, y);
    if (m.options.passThrough && m.options.passThrough.includes(S)) {
      if ("children" in b) {
        const { children: R, ...L } = b, D = Su(L);
        return D.children = m.all(b), D;
      }
      return Su(b);
    }
    return (m.options.unknownHandler || Wk)(m, b, y);
  }
  function d(b) {
    const y = [];
    if ("children" in b) {
      const S = b.children;
      let x = -1;
      for (; ++x < S.length; ) {
        const A = m.one(S[x], b);
        if (A) {
          if (x && S[x - 1].type === "break" && (!Array.isArray(A) && A.type === "text" && (A.value = Gp(A.value)), !Array.isArray(A) && A.type === "element")) {
            const R = A.children[0];
            R && R.type === "text" && (R.value = Gp(R.value));
          }
          Array.isArray(A) ? y.push(...A) : y.push(A);
        }
      }
    }
    return y;
  }
}
function Jk(n, r) {
  n.position && (r.position = jv(n));
}
function Ik(n, r) {
  let a = r;
  if (n && n.data) {
    const u = n.data.hName, c = n.data.hChildren, f = n.data.hProperties;
    if (typeof u == "string")
      if (a.type === "element")
        a.tagName = u;
      else {
        const h = "children" in a ? a.children : [a];
        a = { type: "element", tagName: u, properties: {}, children: h };
      }
    a.type === "element" && f && Object.assign(a.properties, Su(f)), "children" in a && a.children && c !== null && c !== void 0 && (a.children = c);
  }
  return a;
}
function Wk(n, r) {
  const a = r.data || {}, u = "value" in r && !(Tc.call(a, "hProperties") || Tc.call(a, "hChildren")) ? { type: "text", value: r.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function $k(n, r) {
  const a = [];
  let u = -1;
  for (r && a.push({ type: "text", value: `
` }); ++u < n.length; )
    u && a.push({ type: "text", value: `
` }), a.push(n[u]);
  return r && n.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Gp(n) {
  let r = 0, a = n.charCodeAt(r);
  for (; a === 9 || a === 32; )
    r++, a = n.charCodeAt(r);
  return n.slice(r);
}
function Vp(n, r) {
  const a = Kk(n, r), u = a.one(n, void 0), c = Bk(a), f = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return c && f.children.push({ type: "text", value: `
` }, c), f;
}
function Pk(n, r) {
  return n && "run" in n ? async function(a, u) {
    const c = (
      /** @type {HastRoot} */
      Vp(a, { file: u, ...r })
    );
    await n.run(c, u);
  } : function(a, u) {
    return (
      /** @type {HastRoot} */
      Vp(a, { file: u, ...n || r })
    );
  };
}
function Qp(n) {
  if (n)
    throw n;
}
var rc, Xp;
function e2() {
  if (Xp) return rc;
  Xp = 1;
  var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, a = Object.defineProperty, u = Object.getOwnPropertyDescriptor, c = function(d) {
    return typeof Array.isArray == "function" ? Array.isArray(d) : r.call(d) === "[object Array]";
  }, f = function(d) {
    if (!d || r.call(d) !== "[object Object]")
      return !1;
    var b = n.call(d, "constructor"), y = d.constructor && d.constructor.prototype && n.call(d.constructor.prototype, "isPrototypeOf");
    if (d.constructor && !b && !y)
      return !1;
    var S;
    for (S in d)
      ;
    return typeof S > "u" || n.call(d, S);
  }, h = function(d, b) {
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
  return rc = function p() {
    var d, b, y, S, x, A, R = arguments[0], L = 1, D = arguments.length, Z = !1;
    for (typeof R == "boolean" && (Z = R, R = arguments[1] || {}, L = 2), (R == null || typeof R != "object" && typeof R != "function") && (R = {}); L < D; ++L)
      if (d = arguments[L], d != null)
        for (b in d)
          y = m(R, b), S = m(d, b), R !== S && (Z && S && (f(S) || (x = c(S))) ? (x ? (x = !1, A = y && c(y) ? y : []) : A = y && f(y) ? y : {}, h(R, { name: b, newValue: p(Z, A, S) })) : typeof S < "u" && h(R, { name: b, newValue: S }));
    return R;
  }, rc;
}
var t2 = e2();
const uc = /* @__PURE__ */ Eu(t2);
function Cc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function n2() {
  const n = [], r = { run: a, use: u };
  return r;
  function a(...c) {
    let f = -1;
    const h = c.pop();
    if (typeof h != "function")
      throw new TypeError("Expected function as last argument, not " + h);
    m(null, ...c);
    function m(p, ...d) {
      const b = n[++f];
      let y = -1;
      if (p) {
        h(p);
        return;
      }
      for (; ++y < c.length; )
        (d[y] === null || d[y] === void 0) && (d[y] = c[y]);
      c = d, b ? l2(b, m)(...d) : h(null, ...d);
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
function l2(n, r) {
  let a;
  return u;
  function u(...h) {
    const m = n.length > h.length;
    let p;
    m && h.push(c);
    try {
      p = n.apply(this, h);
    } catch (d) {
      const b = (
        /** @type {Error} */
        d
      );
      if (m && a)
        throw b;
      return c(b);
    }
    m || (p && p.then && typeof p.then == "function" ? p.then(f, c) : p instanceof Error ? c(p) : f(p));
  }
  function c(h, ...m) {
    a || (a = !0, r(h, ...m));
  }
  function f(h) {
    c(null, h);
  }
}
const pn = { basename: i2, dirname: a2, extname: r2, join: u2, sep: "/" };
function i2(n, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Ga(n);
  let a = 0, u = -1, c = n.length, f;
  if (r === void 0 || r.length === 0 || r.length > n.length) {
    for (; c--; )
      if (n.codePointAt(c) === 47) {
        if (f) {
          a = c + 1;
          break;
        }
      } else u < 0 && (f = !0, u = c + 1);
    return u < 0 ? "" : n.slice(a, u);
  }
  if (r === n)
    return "";
  let h = -1, m = r.length - 1;
  for (; c--; )
    if (n.codePointAt(c) === 47) {
      if (f) {
        a = c + 1;
        break;
      }
    } else
      h < 0 && (f = !0, h = c + 1), m > -1 && (n.codePointAt(c) === r.codePointAt(m--) ? m < 0 && (u = c) : (m = -1, u = h));
  return a === u ? u = h : u < 0 && (u = n.length), n.slice(a, u);
}
function a2(n) {
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
function r2(n) {
  Ga(n);
  let r = n.length, a = -1, u = 0, c = -1, f = 0, h;
  for (; r--; ) {
    const m = n.codePointAt(r);
    if (m === 47) {
      if (h) {
        u = r + 1;
        break;
      }
      continue;
    }
    a < 0 && (h = !0, a = r + 1), m === 46 ? c < 0 ? c = r : f !== 1 && (f = 1) : c > -1 && (f = -1);
  }
  return c < 0 || a < 0 || // We saw a non-dot character immediately before the dot.
  f === 0 || // The (right-most) trimmed path component is exactly `..`.
  f === 1 && c === a - 1 && c === u + 1 ? "" : n.slice(c, a);
}
function u2(...n) {
  let r = -1, a;
  for (; ++r < n.length; )
    Ga(n[r]), n[r] && (a = a === void 0 ? n[r] : a + "/" + n[r]);
  return a === void 0 ? "." : o2(a);
}
function o2(n) {
  Ga(n);
  const r = n.codePointAt(0) === 47;
  let a = s2(n, !r);
  return a.length === 0 && !r && (a = "."), a.length > 0 && n.codePointAt(n.length - 1) === 47 && (a += "/"), r ? "/" + a : a;
}
function s2(n, r) {
  let a = "", u = 0, c = -1, f = 0, h = -1, m, p;
  for (; ++h <= n.length; ) {
    if (h < n.length)
      m = n.codePointAt(h);
    else {
      if (m === 47)
        break;
      m = 47;
    }
    if (m === 47) {
      if (!(c === h - 1 || f === 1)) if (c !== h - 1 && f === 2) {
        if (a.length < 2 || u !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
          if (a.length > 2) {
            if (p = a.lastIndexOf("/"), p !== a.length - 1) {
              p < 0 ? (a = "", u = 0) : (a = a.slice(0, p), u = a.length - 1 - a.lastIndexOf("/")), c = h, f = 0;
              continue;
            }
          } else if (a.length > 0) {
            a = "", u = 0, c = h, f = 0;
            continue;
          }
        }
        r && (a = a.length > 0 ? a + "/.." : "..", u = 2);
      } else
        a.length > 0 ? a += "/" + n.slice(c + 1, h) : a = n.slice(c + 1, h), u = h - c - 1;
      c = h, f = 0;
    } else m === 46 && f > -1 ? f++ : f = -1;
  }
  return a;
}
function Ga(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const c2 = { cwd: f2 };
function f2() {
  return "/";
}
function Dc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function h2(n) {
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
  return d2(n);
}
function d2(n) {
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
    r ? Dc(r) ? a = { path: r } : typeof r == "string" || m2(r) ? a = { value: r } : a = r : a = {}, this.cwd = "cwd" in a ? "" : c2.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < oc.length; ) {
      const f = oc[u];
      f in a && a[f] !== void 0 && a[f] !== null && (this[f] = f === "history" ? [...a[f]] : a[f]);
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
    cc(r, "basename"), sc(r, "basename"), this.path = pn.join(this.dirname || "", r);
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
    Zp(this.basename, "dirname"), this.path = pn.join(r || "", this.basename);
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
    if (sc(r, "extname"), Zp(this.dirname, "extname"), r) {
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
    Dc(r) && (r = h2(r)), cc(r, "path"), this.path !== r && this.history.push(r);
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
    cc(r, "stem"), sc(r, "stem"), this.path = pn.join(this.dirname || "", r + (this.extname || ""));
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
    const c = new xt(
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
  if (n && n.includes(pn.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + pn.sep + "`"
    );
}
function cc(n, r) {
  if (!n)
    throw new Error("`" + r + "` cannot be empty");
}
function Zp(n, r) {
  if (!n)
    throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function m2(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const p2 = (
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
    ), c = u[n], f = function() {
      return c.apply(f, arguments);
    };
    return Object.setPrototypeOf(f, u), f;
  })
), g2 = {}.hasOwnProperty;
class Fc extends p2 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = n2();
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
    return typeof r == "string" ? arguments.length === 2 ? (dc("data", this.frozen), this.namespace[r] = a, this) : g2.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (dc("data", this.frozen), this.namespace = r, this) : this.namespace;
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
    const a = mu(r), u = this.parser || this.Parser;
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
    return this.freeze(), fc("process", this.parser || this.Parser), hc("process", this.compiler || this.Compiler), a ? c(void 0, a) : new Promise(c);
    function c(f, h) {
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
        v2(A) ? S.value = A : S.result = A, d(
          b,
          /** @type {VFileWithOutput<CompileResult>} */
          S
        );
      });
      function d(b, y) {
        b || !y ? h(b) : f ? f(y) : a(void 0, y);
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
    return this.freeze(), fc("processSync", this.parser || this.Parser), hc("processSync", this.compiler || this.Compiler), this.process(r, c), Kp("processSync", "process", a), u;
    function c(f, h) {
      a = !0, Qp(f), u = h;
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
    Fp(r), this.freeze();
    const c = this.transformers;
    return !u && typeof a == "function" && (u = a, a = void 0), u ? f(void 0, u) : new Promise(f);
    function f(h, m) {
      const p = mu(a);
      c.run(r, p, d);
      function d(b, y, S) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || r
        );
        b ? m(b) : h ? h(x) : u(void 0, x, S);
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
    return this.run(r, a, f), Kp("runSync", "run", u), c;
    function f(h, m) {
      Qp(h), c = m, u = !0;
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
    const u = mu(a), c = this.compiler || this.Compiler;
    return hc("stringify", c), Fp(r), c(r, u);
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
    if (dc("use", this.frozen), r != null) if (typeof r == "function")
      p(r, a);
    else if (typeof r == "object")
      Array.isArray(r) ? m(r) : h(r);
    else
      throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function f(d) {
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
          h(d);
      else
        throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function h(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      m(d.plugins), d.settings && (c.settings = uc(!0, c.settings, d.settings));
    }
    function m(d) {
      let b = -1;
      if (d != null) if (Array.isArray(d))
        for (; ++b < d.length; ) {
          const y = d[b];
          f(y);
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
        Cc(R) && Cc(x) && (x = uc(!0, R, x)), u[S] = [d, x, ...A];
      }
    }
  }
}
const y2 = new Fc().freeze();
function fc(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function hc(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function dc(n, r) {
  if (r)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Fp(n) {
  if (!Cc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function Kp(n, r, a) {
  if (!a)
    throw new Error(
      "`" + n + "` finished async. Use `" + r + "` instead"
    );
}
function mu(n) {
  return b2(n) ? n : new ay(n);
}
function b2(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function v2(n) {
  return typeof n == "string" || x2(n);
}
function x2(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const S2 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Jp = [], Ip = { allowDangerousHtml: !0 }, k2 = /^(https?|ircs?|mailto|xmpp)$/i, E2 = [
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
  const r = w2(n), a = A2(n);
  return z2(r.runSync(r.parse(a), a), n);
}
function w2(n) {
  const r = n.rehypePlugins || Jp, a = n.remarkPlugins || Jp, u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Ip } : Ip;
  return y2().use(ak).use(a).use(Pk, u).use(r);
}
function A2(n) {
  const r = n.children || "", a = new ay();
  return typeof r == "string" && (a.value = r), a;
}
function z2(n, r) {
  const a = r.allowedElements, u = r.allowElement, c = r.components, f = r.disallowedElements, h = r.skipHtml, m = r.unwrapDisallowed, p = r.urlTransform || T2;
  for (const b of E2)
    Object.hasOwn(r, b.from) && ("" + b.from + (b.to ? "use `" + b.to + "` instead" : "remove it") + S2 + b.id, void 0);
  return Zc(n, d), Gv(n, {
    Fragment: te.Fragment,
    components: c,
    ignoreInvalidStyle: !0,
    jsx: te.jsx,
    jsxs: te.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function d(b, y, S) {
    if (b.type === "raw" && S && typeof y == "number")
      return h ? S.children.splice(y, 1) : S.children[y] = { type: "text", value: b.value }, y;
    if (b.type === "element") {
      let x;
      for (x in lc)
        if (Object.hasOwn(lc, x) && Object.hasOwn(b.properties, x)) {
          const A = b.properties[x], R = lc[x];
          (R === null || R.includes(b.tagName)) && (b.properties[x] = p(String(A || ""), x, b));
        }
    }
    if (b.type === "element") {
      let x = a ? !a.includes(b.tagName) : f ? f.includes(b.tagName) : !1;
      if (!x && u && typeof y == "number" && (x = !u(b, y, S)), x && S && typeof y == "number")
        return m && b.children ? S.children.splice(y, 1, ...b.children) : S.children.splice(y, 1), y;
    }
  }
}
function T2(n) {
  const r = n.indexOf(":"), a = n.indexOf("?"), u = n.indexOf("#"), c = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    c !== -1 && r > c || a !== -1 && r > a || u !== -1 && r > u || // It is a protocol, it should be allowed.
    k2.test(n.slice(0, r)) ? n : ""
  );
}
function Wp(n, r) {
  const a = String(n);
  if (typeof r != "string")
    throw new TypeError("Expected character");
  let u = 0, c = a.indexOf(r);
  for (; c !== -1; )
    u++, c = a.indexOf(r, c + r.length);
  return u;
}
function C2(n) {
  if (typeof n != "string")
    throw new TypeError("Expected a string");
  return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function D2(n, r, a) {
  const c = Cu((a || {}).ignore || []), f = _2(r);
  let h = -1;
  for (; ++h < f.length; )
    iy(n, "text", m);
  function m(d, b) {
    let y = -1, S;
    for (; ++y < b.length; ) {
      const x = b[y], A = S ? S.children : void 0;
      if (c(
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
    const y = b[b.length - 1], S = f[h][0], x = f[h][1];
    let A = 0;
    const L = y.children.indexOf(d);
    let D = !1, Z = [];
    S.lastIndex = 0;
    let H = S.exec(d.value);
    for (; H; ) {
      const le = H.index, oe = {
        index: H.index,
        input: H.input,
        stack: [...b, d]
      };
      let B = x(...H, oe);
      if (typeof B == "string" && (B = B.length > 0 ? { type: "text", value: B } : void 0), B === !1 ? S.lastIndex = le + 1 : (A !== le && Z.push({
        type: "text",
        value: d.value.slice(A, le)
      }), Array.isArray(B) ? Z.push(...B) : B && Z.push(B), A = le + H[0].length, D = !0), !S.global)
        break;
      H = S.exec(d.value);
    }
    return D ? (A < d.value.length && Z.push({ type: "text", value: d.value.slice(A) }), y.children.splice(L, 1, ...Z)) : Z = [d], L + Z.length;
  }
}
function _2(n) {
  const r = [];
  if (!Array.isArray(n))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const a = !n[0] || Array.isArray(n[0]) ? n : [n];
  let u = -1;
  for (; ++u < a.length; ) {
    const c = a[u];
    r.push([O2(c[0]), M2(c[1])]);
  }
  return r;
}
function O2(n) {
  return typeof n == "string" ? new RegExp(C2(n), "g") : n;
}
function M2(n) {
  return typeof n == "function" ? n : function() {
    return n;
  };
}
const mc = "phrasing", pc = ["autolink", "link", "image", "label"];
function R2() {
  return {
    transforms: [q2],
    enter: {
      literalAutolink: L2,
      literalAutolinkEmail: gc,
      literalAutolinkHttp: gc,
      literalAutolinkWww: gc
    },
    exit: {
      literalAutolink: H2,
      literalAutolinkEmail: B2,
      literalAutolinkHttp: U2,
      literalAutolinkWww: j2
    }
  };
}
function N2() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: mc,
        notInConstruct: pc
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: mc,
        notInConstruct: pc
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: mc,
        notInConstruct: pc
      }
    ]
  };
}
function L2(n) {
  this.enter({ type: "link", title: null, url: "", children: [] }, n);
}
function gc(n) {
  this.config.enter.autolinkProtocol.call(this, n);
}
function U2(n) {
  this.config.exit.autolinkProtocol.call(this, n);
}
function j2(n) {
  this.config.exit.data.call(this, n);
  const r = this.stack[this.stack.length - 1];
  r.type, r.url = "http://" + this.sliceSerialize(n);
}
function B2(n) {
  this.config.exit.autolinkEmail.call(this, n);
}
function H2(n) {
  this.exit(n);
}
function q2(n) {
  D2(
    n,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Y2],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), G2]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Y2(n, r, a, u, c) {
  let f = "";
  if (!ry(c) || (/^w/i.test(r) && (a = r + a, r = "", f = "http://"), !V2(a)))
    return !1;
  const h = Q2(a + u);
  if (!h[0]) return !1;
  const m = {
    type: "link",
    title: null,
    url: f + r + h[0],
    children: [{ type: "text", value: r + h[0] }]
  };
  return h[1] ? [m, { type: "text", value: h[1] }] : m;
}
function G2(n, r, a, u) {
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
function V2(n) {
  const r = n.split(".");
  return !(r.length < 2 || r[r.length - 1] && (/_/.test(r[r.length - 1]) || !/[a-zA-Z\d]/.test(r[r.length - 1])) || r[r.length - 2] && (/_/.test(r[r.length - 2]) || !/[a-zA-Z\d]/.test(r[r.length - 2])));
}
function Q2(n) {
  const r = /[!"&'),.:;<>?\]}]+$/.exec(n);
  if (!r)
    return [n, void 0];
  n = n.slice(0, r.index);
  let a = r[0], u = a.indexOf(")");
  const c = Wp(n, "(");
  let f = Wp(n, ")");
  for (; u !== -1 && c > f; )
    n += a.slice(0, u + 1), a = a.slice(u + 1), u = a.indexOf(")"), f++;
  return [n, a];
}
function ry(n, r) {
  const a = n.input.charCodeAt(n.index - 1);
  return (n.index === 0 || Nl(a) || Au(a)) && // If it’s an email, the previous character should not be a slash.
  (!r || a !== 47);
}
uy.peek = P2;
function X2() {
  this.buffer();
}
function Z2(n) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, n);
}
function F2() {
  this.buffer();
}
function K2(n) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    n
  );
}
function J2(n) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = sn(
    this.sliceSerialize(n)
  ).toLowerCase(), a.label = r;
}
function I2(n) {
  this.exit(n);
}
function W2(n) {
  const r = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = sn(
    this.sliceSerialize(n)
  ).toLowerCase(), a.label = r;
}
function $2(n) {
  this.exit(n);
}
function P2() {
  return "[";
}
function uy(n, r, a, u) {
  const c = a.createTracker(u);
  let f = c.move("[^");
  const h = a.enter("footnoteReference"), m = a.enter("reference");
  return f += c.move(
    a.safe(a.associationId(n), { after: "]", before: f })
  ), m(), h(), f += c.move("]"), f;
}
function eE() {
  return {
    enter: {
      gfmFootnoteCallString: X2,
      gfmFootnoteCall: Z2,
      gfmFootnoteDefinitionLabelString: F2,
      gfmFootnoteDefinition: K2
    },
    exit: {
      gfmFootnoteCallString: J2,
      gfmFootnoteCall: I2,
      gfmFootnoteDefinitionLabelString: W2,
      gfmFootnoteDefinition: $2
    }
  };
}
function tE(n) {
  let r = !1;
  return n && n.firstLineBlank && (r = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: uy },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(u, c, f, h) {
    const m = f.createTracker(h);
    let p = m.move("[^");
    const d = f.enter("footnoteDefinition"), b = f.enter("label");
    return p += m.move(
      f.safe(f.associationId(u), { before: p, after: "]" })
    ), b(), p += m.move("]:"), u.children && u.children.length > 0 && (m.shift(4), p += m.move(
      (r ? `
` : " ") + f.indentLines(
        f.containerFlow(u, m.current()),
        r ? oy : nE
      )
    )), d(), p;
  }
}
function nE(n, r, a) {
  return r === 0 ? n : oy(n, r, a);
}
function oy(n, r, a) {
  return (a ? "" : "    ") + n;
}
const lE = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
sy.peek = oE;
function iE() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: rE },
    exit: { strikethrough: uE }
  };
}
function aE() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: lE
      }
    ],
    handlers: { delete: sy }
  };
}
function rE(n) {
  this.enter({ type: "delete", children: [] }, n);
}
function uE(n) {
  this.exit(n);
}
function sy(n, r, a, u) {
  const c = a.createTracker(u), f = a.enter("strikethrough");
  let h = c.move("~~");
  return h += a.containerPhrasing(n, {
    ...c.current(),
    before: h,
    after: "~"
  }), h += c.move("~~"), f(), h;
}
function oE() {
  return "~";
}
function sE(n) {
  return n.length;
}
function cE(n, r) {
  const a = r || {}, u = (a.align || []).concat(), c = a.stringLength || sE, f = [], h = [], m = [], p = [];
  let d = 0, b = -1;
  for (; ++b < n.length; ) {
    const R = [], L = [];
    let D = -1;
    for (n[b].length > d && (d = n[b].length); ++D < n[b].length; ) {
      const Z = fE(n[b][D]);
      if (a.alignDelimiters !== !1) {
        const H = c(Z);
        L[D] = H, (p[D] === void 0 || H > p[D]) && (p[D] = H);
      }
      R.push(Z);
    }
    h[b] = R, m[b] = L;
  }
  let y = -1;
  if (typeof u == "object" && "length" in u)
    for (; ++y < d; )
      f[y] = $p(u[y]);
  else {
    const R = $p(u);
    for (; ++y < d; )
      f[y] = R;
  }
  y = -1;
  const S = [], x = [];
  for (; ++y < d; ) {
    const R = f[y];
    let L = "", D = "";
    R === 99 ? (L = ":", D = ":") : R === 108 ? L = ":" : R === 114 && (D = ":");
    let Z = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      p[y] - L.length - D.length
    );
    const H = L + "-".repeat(Z) + D;
    a.alignDelimiters !== !1 && (Z = L.length + Z + D.length, Z > p[y] && (p[y] = Z), x[y] = Z), S[y] = H;
  }
  h.splice(1, 0, S), m.splice(1, 0, x), b = -1;
  const A = [];
  for (; ++b < h.length; ) {
    const R = h[b], L = m[b];
    y = -1;
    const D = [];
    for (; ++y < d; ) {
      const Z = R[y] || "";
      let H = "", le = "";
      if (a.alignDelimiters !== !1) {
        const oe = p[y] - (L[y] || 0), B = f[y];
        B === 114 ? H = " ".repeat(oe) : B === 99 ? oe % 2 ? (H = " ".repeat(oe / 2 + 0.5), le = " ".repeat(oe / 2 - 0.5)) : (H = " ".repeat(oe / 2), le = H) : le = " ".repeat(oe);
      }
      a.delimiterStart !== !1 && !y && D.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && Z === "") && (a.delimiterStart !== !1 || y) && D.push(" "), a.alignDelimiters !== !1 && D.push(H), D.push(Z), a.alignDelimiters !== !1 && D.push(le), a.padding !== !1 && D.push(" "), (a.delimiterEnd !== !1 || y !== d - 1) && D.push("|");
    }
    A.push(
      a.delimiterEnd === !1 ? D.join("").replace(/ +$/, "") : D.join("")
    );
  }
  return A.join(`
`);
}
function fE(n) {
  return n == null ? "" : String(n);
}
function $p(n) {
  const r = typeof n == "string" ? n.codePointAt(0) : 0;
  return r === 67 || r === 99 ? 99 : r === 76 || r === 108 ? 108 : r === 82 || r === 114 ? 114 : 0;
}
function hE(n, r, a, u) {
  const c = a.enter("blockquote"), f = a.createTracker(u);
  f.move("> "), f.shift(2);
  const h = a.indentLines(
    a.containerFlow(n, f.current()),
    dE
  );
  return c(), h;
}
function dE(n, r, a) {
  return ">" + (a ? "" : " ") + n;
}
function mE(n, r) {
  return Pp(n, r.inConstruct, !0) && !Pp(n, r.notInConstruct, !1);
}
function Pp(n, r, a) {
  if (typeof r == "string" && (r = [r]), !r || r.length === 0)
    return a;
  let u = -1;
  for (; ++u < r.length; )
    if (n.includes(r[u]))
      return !0;
  return !1;
}
function eg(n, r, a, u) {
  let c = -1;
  for (; ++c < a.unsafe.length; )
    if (a.unsafe[c].character === `
` && mE(a.stack, a.unsafe[c]))
      return /[ \t]/.test(u.before) ? "" : " ";
  return `\\
`;
}
function pE(n, r) {
  const a = String(n);
  let u = a.indexOf(r), c = u, f = 0, h = 0;
  if (typeof r != "string")
    throw new TypeError("Expected substring");
  for (; u !== -1; )
    u === c ? ++f > h && (h = f) : f = 1, c = u + r.length, u = a.indexOf(r, c);
  return h;
}
function gE(n, r) {
  return !!(r.options.fences === !1 && n.value && // If there’s no info…
  !n.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(n.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value));
}
function yE(n) {
  const r = n.options.fence || "`";
  if (r !== "`" && r !== "~")
    throw new Error(
      "Cannot serialize code with `" + r + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return r;
}
function bE(n, r, a, u) {
  const c = yE(a), f = n.value || "", h = c === "`" ? "GraveAccent" : "Tilde";
  if (gE(n, a)) {
    const y = a.enter("codeIndented"), S = a.indentLines(f, vE);
    return y(), S;
  }
  const m = a.createTracker(u), p = c.repeat(Math.max(pE(f, c) + 1, 3)), d = a.enter("codeFenced");
  let b = m.move(p);
  if (n.lang) {
    const y = a.enter(`codeFencedLang${h}`);
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
    const y = a.enter(`codeFencedMeta${h}`);
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
`), f && (b += m.move(f + `
`)), b += m.move(p), d(), b;
}
function vE(n, r, a) {
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
function xE(n, r, a, u) {
  const c = Jc(a), f = c === '"' ? "Quote" : "Apostrophe", h = a.enter("definition");
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
  )), m(), n.title && (m = a.enter(`title${f}`), d += p.move(" " + c), d += p.move(
    a.safe(n.title, {
      before: d,
      after: c,
      ...p.current()
    })
  ), d += p.move(c), m()), h(), d;
}
function SE(n) {
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
cy.peek = kE;
function cy(n, r, a, u) {
  const c = SE(a), f = a.enter("emphasis"), h = a.createTracker(u), m = h.move(c);
  let p = h.move(
    a.containerPhrasing(n, {
      after: c,
      before: m,
      ...h.current()
    })
  );
  const d = p.charCodeAt(0), b = ku(
    u.before.charCodeAt(u.before.length - 1),
    d,
    c
  );
  b.inside && (p = Ha(d) + p.slice(1));
  const y = p.charCodeAt(p.length - 1), S = ku(u.after.charCodeAt(0), y, c);
  S.inside && (p = p.slice(0, -1) + Ha(y));
  const x = h.move(c);
  return f(), a.attentionEncodeSurroundingInfo = {
    after: S.outside,
    before: b.outside
  }, m + p + x;
}
function kE(n, r, a) {
  return a.options.emphasis || "*";
}
function EE(n, r) {
  let a = !1;
  return Zc(n, function(u) {
    if ("value" in u && /\r?\n|\r/.test(u.value) || u.type === "break")
      return a = !0, zc;
  }), !!((!n.depth || n.depth < 3) && Hc(n) && (r.options.setext || a));
}
function wE(n, r, a, u) {
  const c = Math.max(Math.min(6, n.depth || 1), 1), f = a.createTracker(u);
  if (EE(n, a)) {
    const b = a.enter("headingSetext"), y = a.enter("phrasing"), S = a.containerPhrasing(n, {
      ...f.current(),
      before: `
`,
      after: `
`
    });
    return y(), b(), S + `
` + (c === 1 ? "=" : "-").repeat(
      // The whole size…
      S.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(S.lastIndexOf("\r"), S.lastIndexOf(`
`)) + 1)
    );
  }
  const h = "#".repeat(c), m = a.enter("headingAtx"), p = a.enter("phrasing");
  f.move(h + " ");
  let d = a.containerPhrasing(n, {
    before: "# ",
    after: `
`,
    ...f.current()
  });
  return /^[\t ]/.test(d) && (d = Ha(d.charCodeAt(0)) + d.slice(1)), d = d ? h + " " + d : h, a.options.closeAtx && (d += " " + h), p(), m(), d;
}
fy.peek = AE;
function fy(n) {
  return n.value || "";
}
function AE() {
  return "<";
}
hy.peek = zE;
function hy(n, r, a, u) {
  const c = Jc(a), f = c === '"' ? "Quote" : "Apostrophe", h = a.enter("image");
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
  )), m(), n.title && (m = a.enter(`title${f}`), d += p.move(" " + c), d += p.move(
    a.safe(n.title, {
      before: d,
      after: c,
      ...p.current()
    })
  ), d += p.move(c), m()), d += p.move(")"), h(), d;
}
function zE() {
  return "!";
}
dy.peek = TE;
function dy(n, r, a, u) {
  const c = n.referenceType, f = a.enter("imageReference");
  let h = a.enter("label");
  const m = a.createTracker(u);
  let p = m.move("![");
  const d = a.safe(n.alt, {
    before: p,
    after: "]",
    ...m.current()
  });
  p += m.move(d + "]["), h();
  const b = a.stack;
  a.stack = [], h = a.enter("reference");
  const y = a.safe(a.associationId(n), {
    before: p,
    after: "]",
    ...m.current()
  });
  return h(), a.stack = b, f(), c === "full" || !d || d !== y ? p += m.move(y + "]") : c === "shortcut" ? p = p.slice(0, -1) : p += m.move("]"), p;
}
function TE() {
  return "!";
}
my.peek = CE;
function my(n, r, a) {
  let u = n.value || "", c = "`", f = -1;
  for (; new RegExp("(^|[^`])" + c + "([^`]|$)").test(u); )
    c += "`";
  for (/[^ \r\n]/.test(u) && (/^[ \r\n]/.test(u) && /[ \r\n]$/.test(u) || /^`|`$/.test(u)) && (u = " " + u + " "); ++f < a.unsafe.length; ) {
    const h = a.unsafe[f], m = a.compilePattern(h);
    let p;
    if (h.atBreak)
      for (; p = m.exec(u); ) {
        let d = p.index;
        u.charCodeAt(d) === 10 && u.charCodeAt(d - 1) === 13 && d--, u = u.slice(0, d) + " " + u.slice(p.index + 1);
      }
  }
  return c + u + c;
}
function CE() {
  return "`";
}
function py(n, r) {
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
gy.peek = DE;
function gy(n, r, a, u) {
  const c = Jc(a), f = c === '"' ? "Quote" : "Apostrophe", h = a.createTracker(u);
  let m, p;
  if (py(n, a)) {
    const b = a.stack;
    a.stack = [], m = a.enter("autolink");
    let y = h.move("<");
    return y += h.move(
      a.containerPhrasing(n, {
        before: y,
        after: ">",
        ...h.current()
      })
    ), y += h.move(">"), m(), a.stack = b, y;
  }
  m = a.enter("link"), p = a.enter("label");
  let d = h.move("[");
  return d += h.move(
    a.containerPhrasing(n, {
      before: d,
      after: "](",
      ...h.current()
    })
  ), d += h.move("]("), p(), // If there’s no url but there is a title…
  !n.url && n.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(n.url) ? (p = a.enter("destinationLiteral"), d += h.move("<"), d += h.move(
    a.safe(n.url, { before: d, after: ">", ...h.current() })
  ), d += h.move(">")) : (p = a.enter("destinationRaw"), d += h.move(
    a.safe(n.url, {
      before: d,
      after: n.title ? " " : ")",
      ...h.current()
    })
  )), p(), n.title && (p = a.enter(`title${f}`), d += h.move(" " + c), d += h.move(
    a.safe(n.title, {
      before: d,
      after: c,
      ...h.current()
    })
  ), d += h.move(c), p()), d += h.move(")"), m(), d;
}
function DE(n, r, a) {
  return py(n, a) ? "<" : "[";
}
yy.peek = _E;
function yy(n, r, a, u) {
  const c = n.referenceType, f = a.enter("linkReference");
  let h = a.enter("label");
  const m = a.createTracker(u);
  let p = m.move("[");
  const d = a.containerPhrasing(n, {
    before: p,
    after: "]",
    ...m.current()
  });
  p += m.move(d + "]["), h();
  const b = a.stack;
  a.stack = [], h = a.enter("reference");
  const y = a.safe(a.associationId(n), {
    before: p,
    after: "]",
    ...m.current()
  });
  return h(), a.stack = b, f(), c === "full" || !d || d !== y ? p += m.move(y + "]") : c === "shortcut" ? p = p.slice(0, -1) : p += m.move("]"), p;
}
function _E() {
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
function OE(n) {
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
function ME(n) {
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
function RE(n, r, a, u) {
  const c = a.enter("list"), f = a.bulletCurrent;
  let h = n.ordered ? ME(a) : Ic(a);
  const m = n.ordered ? h === "." ? ")" : "." : OE(a);
  let p = r && a.bulletLastUsed ? h === a.bulletLastUsed : !1;
  if (!n.ordered) {
    const b = n.children ? n.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (h === "*" || h === "-") && // Empty first list item:
      b && (!b.children || !b.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (p = !0), by(a) === h && b
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
  p && (h = m), a.bulletCurrent = h;
  const d = a.containerFlow(n, u);
  return a.bulletLastUsed = h, a.bulletCurrent = f, c(), d;
}
function NE(n) {
  const r = n.options.listItemIndent || "one";
  if (r !== "tab" && r !== "one" && r !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return r;
}
function LE(n, r, a, u) {
  const c = NE(a);
  let f = a.bulletCurrent || Ic(a);
  r && r.type === "list" && r.ordered && (f = (typeof r.start == "number" && r.start > -1 ? r.start : 1) + (a.options.incrementListMarker === !1 ? 0 : r.children.indexOf(n)) + f);
  let h = f.length + 1;
  (c === "tab" || c === "mixed" && (r && r.type === "list" && r.spread || n.spread)) && (h = Math.ceil(h / 4) * 4);
  const m = a.createTracker(u);
  m.move(f + " ".repeat(h - f.length)), m.shift(h);
  const p = a.enter("listItem"), d = a.indentLines(
    a.containerFlow(n, m.current()),
    b
  );
  return p(), d;
  function b(y, S, x) {
    return S ? (x ? "" : " ".repeat(h)) + y : (x ? f : f + " ".repeat(h - f.length)) + y;
  }
}
function UE(n, r, a, u) {
  const c = a.enter("paragraph"), f = a.enter("phrasing"), h = a.containerPhrasing(n, u);
  return f(), c(), h;
}
const jE = (
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
function BE(n, r, a, u) {
  return (n.children.some(function(h) {
    return jE(h);
  }) ? a.containerPhrasing : a.containerFlow).call(a, n, u);
}
function HE(n) {
  const r = n.options.strong || "*";
  if (r !== "*" && r !== "_")
    throw new Error(
      "Cannot serialize strong with `" + r + "` for `options.strong`, expected `*`, or `_`"
    );
  return r;
}
vy.peek = qE;
function vy(n, r, a, u) {
  const c = HE(a), f = a.enter("strong"), h = a.createTracker(u), m = h.move(c + c);
  let p = h.move(
    a.containerPhrasing(n, {
      after: c,
      before: m,
      ...h.current()
    })
  );
  const d = p.charCodeAt(0), b = ku(
    u.before.charCodeAt(u.before.length - 1),
    d,
    c
  );
  b.inside && (p = Ha(d) + p.slice(1));
  const y = p.charCodeAt(p.length - 1), S = ku(u.after.charCodeAt(0), y, c);
  S.inside && (p = p.slice(0, -1) + Ha(y));
  const x = h.move(c + c);
  return f(), a.attentionEncodeSurroundingInfo = {
    after: S.outside,
    before: b.outside
  }, m + p + x;
}
function qE(n, r, a) {
  return a.options.strong || "*";
}
function YE(n, r, a, u) {
  return a.safe(n.value, u);
}
function GE(n) {
  const r = n.options.ruleRepetition || 3;
  if (r < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + r + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return r;
}
function VE(n, r, a) {
  const u = (by(a) + (a.options.ruleSpaces ? " " : "")).repeat(GE(a));
  return a.options.ruleSpaces ? u.slice(0, -1) : u;
}
const xy = {
  blockquote: hE,
  break: eg,
  code: bE,
  definition: xE,
  emphasis: cy,
  hardBreak: eg,
  heading: wE,
  html: fy,
  image: hy,
  imageReference: dy,
  inlineCode: my,
  link: gy,
  linkReference: yy,
  list: RE,
  listItem: LE,
  paragraph: UE,
  root: BE,
  strong: vy,
  text: YE,
  thematicBreak: VE
};
function QE() {
  return {
    enter: {
      table: XE,
      tableData: tg,
      tableHeader: tg,
      tableRow: FE
    },
    exit: {
      codeText: KE,
      table: ZE,
      tableData: yc,
      tableHeader: yc,
      tableRow: yc
    }
  };
}
function XE(n) {
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
function ZE(n) {
  this.exit(n), this.data.inTable = void 0;
}
function FE(n) {
  this.enter({ type: "tableRow", children: [] }, n);
}
function yc(n) {
  this.exit(n);
}
function tg(n) {
  this.enter({ type: "tableCell", children: [] }, n);
}
function KE(n) {
  let r = this.resume();
  this.data.inTable && (r = r.replace(/\\([\\|])/g, JE));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = r, this.exit(n);
}
function JE(n, r) {
  return r === "|" ? r : n;
}
function IE(n) {
  const r = n || {}, a = r.tableCellPadding, u = r.tablePipeAlign, c = r.stringLength, f = a ? " " : "|";
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
      table: h,
      tableCell: p,
      tableRow: m
    }
  };
  function h(x, A, R, L) {
    return d(b(x, R, L), x.align);
  }
  function m(x, A, R, L) {
    const D = y(x, R, L), Z = d([D]);
    return Z.slice(0, Z.indexOf(`
`));
  }
  function p(x, A, R, L) {
    const D = R.enter("tableCell"), Z = R.enter("phrasing"), H = R.containerPhrasing(x, {
      ...L,
      before: f,
      after: f
    });
    return Z(), D(), H;
  }
  function d(x, A) {
    return cE(x, {
      align: A,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: u,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: c
    });
  }
  function b(x, A, R) {
    const L = x.children;
    let D = -1;
    const Z = [], H = A.enter("table");
    for (; ++D < L.length; )
      Z[D] = y(L[D], A, R);
    return H(), Z;
  }
  function y(x, A, R) {
    const L = x.children;
    let D = -1;
    const Z = [], H = A.enter("tableRow");
    for (; ++D < L.length; )
      Z[D] = p(L[D], x, A, R);
    return H(), Z;
  }
  function S(x, A, R) {
    let L = xy.inlineCode(x, A, R);
    return R.stack.includes("tableCell") && (L = L.replace(/\|/g, "\\$&")), L;
  }
}
function WE() {
  return {
    exit: {
      taskListCheckValueChecked: ng,
      taskListCheckValueUnchecked: ng,
      paragraph: PE
    }
  };
}
function $E() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: ew }
  };
}
function ng(n) {
  const r = this.stack[this.stack.length - 2];
  r.type, r.checked = n.type === "taskListCheckValueChecked";
}
function PE(n) {
  const r = this.stack[this.stack.length - 2];
  if (r && r.type === "listItem" && typeof r.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const u = a.children[0];
    if (u && u.type === "text") {
      const c = r.children;
      let f = -1, h;
      for (; ++f < c.length; ) {
        const m = c[f];
        if (m.type === "paragraph") {
          h = m;
          break;
        }
      }
      h === a && (u.value = u.value.slice(1), u.value.length === 0 ? a.children.shift() : a.position && u.position && typeof u.position.start.offset == "number" && (u.position.start.column++, u.position.start.offset++, a.position.start = Object.assign({}, u.position.start)));
    }
  }
  this.exit(n);
}
function ew(n, r, a, u) {
  const c = n.children[0], f = typeof n.checked == "boolean" && c && c.type === "paragraph", h = "[" + (n.checked ? "x" : " ") + "] ", m = a.createTracker(u);
  f && m.move(h);
  let p = xy.listItem(n, r, a, {
    ...u,
    ...m.current()
  });
  return f && (p = p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, d)), p;
  function d(b) {
    return b + h;
  }
}
function tw() {
  return [
    R2(),
    eE(),
    iE(),
    QE(),
    WE()
  ];
}
function nw(n) {
  return {
    extensions: [
      N2(),
      tE(n),
      aE(),
      IE(n),
      $E()
    ]
  };
}
const lw = {
  tokenize: sw,
  partial: !0
}, Sy = {
  tokenize: cw,
  partial: !0
}, ky = {
  tokenize: fw,
  partial: !0
}, Ey = {
  tokenize: hw,
  partial: !0
}, iw = {
  tokenize: dw,
  partial: !0
}, wy = {
  name: "wwwAutolink",
  tokenize: uw,
  previous: zy
}, Ay = {
  name: "protocolAutolink",
  tokenize: ow,
  previous: Ty
}, Bn = {
  name: "emailAutolink",
  tokenize: rw,
  previous: Cy
}, gn = {};
function aw() {
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
gn[72] = [Bn, Ay];
gn[104] = [Bn, Ay];
gn[87] = [Bn, wy];
gn[119] = [Bn, wy];
function rw(n, r, a) {
  const u = this;
  let c, f;
  return h;
  function h(y) {
    return !_c(y) || !Cy.call(u, u.previous) || Wc(u.events) ? a(y) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), m(y));
  }
  function m(y) {
    return _c(y) ? (n.consume(y), m) : y === 64 ? (n.consume(y), p) : a(y);
  }
  function p(y) {
    return y === 46 ? n.check(iw, b, d)(y) : y === 45 || y === 95 || vt(y) ? (f = !0, n.consume(y), p) : b(y);
  }
  function d(y) {
    return n.consume(y), c = !0, p;
  }
  function b(y) {
    return f && c && wt(u.previous) ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), r(y)) : a(y);
  }
}
function uw(n, r, a) {
  const u = this;
  return c;
  function c(h) {
    return h !== 87 && h !== 119 || !zy.call(u, u.previous) || Wc(u.events) ? a(h) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(lw, n.attempt(Sy, n.attempt(ky, f), a), a)(h));
  }
  function f(h) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), r(h);
  }
}
function ow(n, r, a) {
  const u = this;
  let c = "", f = !1;
  return h;
  function h(y) {
    return (y === 72 || y === 104) && Ty.call(u, u.previous) && !Wc(u.events) ? (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), c += String.fromCodePoint(y), n.consume(y), m) : a(y);
  }
  function m(y) {
    if (wt(y) && c.length < 5)
      return c += String.fromCodePoint(y), n.consume(y), m;
    if (y === 58) {
      const S = c.toLowerCase();
      if (S === "http" || S === "https")
        return n.consume(y), p;
    }
    return a(y);
  }
  function p(y) {
    return y === 47 ? (n.consume(y), f ? d : (f = !0, p)) : a(y);
  }
  function d(y) {
    return y === null || vu(y) || Ze(y) || Nl(y) || Au(y) ? a(y) : n.attempt(Sy, n.attempt(ky, b), a)(y);
  }
  function b(y) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), r(y);
  }
}
function sw(n, r, a) {
  let u = 0;
  return c;
  function c(h) {
    return (h === 87 || h === 119) && u < 3 ? (u++, n.consume(h), c) : h === 46 && u === 3 ? (n.consume(h), f) : a(h);
  }
  function f(h) {
    return h === null ? a(h) : r(h);
  }
}
function cw(n, r, a) {
  let u, c, f;
  return h;
  function h(d) {
    return d === 46 || d === 95 ? n.check(Ey, p, m)(d) : d === null || Ze(d) || Nl(d) || d !== 45 && Au(d) ? p(d) : (f = !0, n.consume(d), h);
  }
  function m(d) {
    return d === 95 ? u = !0 : (c = u, u = void 0), n.consume(d), h;
  }
  function p(d) {
    return c || u || !f ? a(d) : r(d);
  }
}
function fw(n, r) {
  let a = 0, u = 0;
  return c;
  function c(h) {
    return h === 40 ? (a++, n.consume(h), c) : h === 41 && u < a ? f(h) : h === 33 || h === 34 || h === 38 || h === 39 || h === 41 || h === 42 || h === 44 || h === 46 || h === 58 || h === 59 || h === 60 || h === 63 || h === 93 || h === 95 || h === 126 ? n.check(Ey, r, f)(h) : h === null || Ze(h) || Nl(h) ? r(h) : (n.consume(h), c);
  }
  function f(h) {
    return h === 41 && u++, n.consume(h), c;
  }
}
function hw(n, r, a) {
  return u;
  function u(m) {
    return m === 33 || m === 34 || m === 39 || m === 41 || m === 42 || m === 44 || m === 46 || m === 58 || m === 59 || m === 63 || m === 95 || m === 126 ? (n.consume(m), u) : m === 38 ? (n.consume(m), f) : m === 93 ? (n.consume(m), c) : (
      // `<` is an end.
      m === 60 || // So is whitespace.
      m === null || Ze(m) || Nl(m) ? r(m) : a(m)
    );
  }
  function c(m) {
    return m === null || m === 40 || m === 91 || Ze(m) || Nl(m) ? r(m) : u(m);
  }
  function f(m) {
    return wt(m) ? h(m) : a(m);
  }
  function h(m) {
    return m === 59 ? (n.consume(m), u) : wt(m) ? (n.consume(m), h) : a(m);
  }
}
function dw(n, r, a) {
  return u;
  function u(f) {
    return n.consume(f), c;
  }
  function c(f) {
    return vt(f) ? a(f) : r(f);
  }
}
function zy(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 91 || n === 93 || n === 126 || Ze(n);
}
function Ty(n) {
  return !wt(n);
}
function Cy(n) {
  return !(n === 47 || _c(n));
}
function _c(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || vt(n);
}
function Wc(n) {
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
const mw = {
  tokenize: kw,
  partial: !0
};
function pw() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: vw,
        continuation: {
          tokenize: xw
        },
        exit: Sw
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: bw
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: gw,
        resolveTo: yw
      }
    }
  };
}
function gw(n, r, a) {
  const u = this;
  let c = u.events.length;
  const f = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let h;
  for (; c--; ) {
    const p = u.events[c][1];
    if (p.type === "labelImage") {
      h = p;
      break;
    }
    if (p.type === "gfmFootnoteCall" || p.type === "labelLink" || p.type === "label" || p.type === "image" || p.type === "link")
      break;
  }
  return m;
  function m(p) {
    if (!h || !h._balanced)
      return a(p);
    const d = sn(u.sliceSerialize({
      start: h.end,
      end: u.now()
    }));
    return d.codePointAt(0) !== 94 || !f.includes(d.slice(1)) ? a(p) : (n.enter("gfmFootnoteCallLabelMarker"), n.consume(p), n.exit("gfmFootnoteCallLabelMarker"), r(p));
  }
}
function yw(n, r) {
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
  const f = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, c.end),
    end: Object.assign({}, n[n.length - 1][1].start)
  }, h = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, f.start),
    end: Object.assign({}, f.end)
  }, m = [
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
    ["enter", f, r],
    ["enter", h, r],
    ["exit", h, r],
    ["exit", f, r],
    // The ending (`]`, properly parsed and labelled).
    n[n.length - 2],
    n[n.length - 1],
    ["exit", u, r]
  ];
  return n.splice(a, n.length - a + 1, ...m), n;
}
function bw(n, r, a) {
  const u = this, c = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let f = 0, h;
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
      f > 999 || // Closing brace with nothing.
      y === 93 && !h || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || Ze(y)
    )
      return a(y);
    if (y === 93) {
      n.exit("chunkString");
      const S = n.exit("gfmFootnoteCallString");
      return c.includes(sn(u.sliceSerialize(S))) ? (n.enter("gfmFootnoteCallLabelMarker"), n.consume(y), n.exit("gfmFootnoteCallLabelMarker"), n.exit("gfmFootnoteCall"), r) : a(y);
    }
    return Ze(y) || (h = !0), f++, n.consume(y), y === 92 ? b : d;
  }
  function b(y) {
    return y === 91 || y === 92 || y === 93 ? (n.consume(y), f++, d) : d(y);
  }
}
function vw(n, r, a) {
  const u = this, c = u.parser.gfmFootnotes || (u.parser.gfmFootnotes = []);
  let f, h = 0, m;
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
      h > 999 || // Closing brace with nothing.
      A === 93 && !m || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      A === null || A === 91 || Ze(A)
    )
      return a(A);
    if (A === 93) {
      n.exit("chunkString");
      const R = n.exit("gfmFootnoteDefinitionLabelString");
      return f = sn(u.sliceSerialize(R)), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(A), n.exit("gfmFootnoteDefinitionLabelMarker"), n.exit("gfmFootnoteDefinitionLabel"), S;
    }
    return Ze(A) || (m = !0), h++, n.consume(A), A === 92 ? y : b;
  }
  function y(A) {
    return A === 91 || A === 92 || A === 93 ? (n.consume(A), h++, b) : b(A);
  }
  function S(A) {
    return A === 58 ? (n.enter("definitionMarker"), n.consume(A), n.exit("definitionMarker"), c.includes(f) || c.push(f), Me(n, x, "gfmFootnoteDefinitionWhitespace")) : a(A);
  }
  function x(A) {
    return r(A);
  }
}
function xw(n, r, a) {
  return n.check(Ya, r, n.attempt(mw, r, a));
}
function Sw(n) {
  n.exit("gfmFootnoteDefinition");
}
function kw(n, r, a) {
  const u = this;
  return Me(n, c, "gfmFootnoteDefinitionIndent", 5);
  function c(f) {
    const h = u.events[u.events.length - 1];
    return h && h[1].type === "gfmFootnoteDefinitionIndent" && h[2].sliceSerialize(h[1], !0).length === 4 ? r(f) : a(f);
  }
}
function Ew(n) {
  let a = (n || {}).singleTilde;
  const u = {
    name: "strikethrough",
    tokenize: f,
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
  function c(h, m) {
    let p = -1;
    for (; ++p < h.length; )
      if (h[p][0] === "enter" && h[p][1].type === "strikethroughSequenceTemporary" && h[p][1]._close) {
        let d = p;
        for (; d--; )
          if (h[d][0] === "exit" && h[d][1].type === "strikethroughSequenceTemporary" && h[d][1]._open && // If the sizes are the same:
          h[p][1].end.offset - h[p][1].start.offset === h[d][1].end.offset - h[d][1].start.offset) {
            h[p][1].type = "strikethroughSequence", h[d][1].type = "strikethroughSequence";
            const b = {
              type: "strikethrough",
              start: Object.assign({}, h[d][1].start),
              end: Object.assign({}, h[p][1].end)
            }, y = {
              type: "strikethroughText",
              start: Object.assign({}, h[d][1].end),
              end: Object.assign({}, h[p][1].start)
            }, S = [["enter", b, m], ["enter", h[d][1], m], ["exit", h[d][1], m], ["enter", y, m]], x = m.parser.constructs.insideSpan.null;
            x && Zt(S, S.length, 0, zu(x, h.slice(d + 1, p), m)), Zt(S, S.length, 0, [["exit", y, m], ["enter", h[p][1], m], ["exit", h[p][1], m], ["exit", b, m]]), Zt(h, d - 1, p - d + 3, S), p = d + S.length - 2;
            break;
          }
      }
    for (p = -1; ++p < h.length; )
      h[p][1].type === "strikethroughSequenceTemporary" && (h[p][1].type = "data");
    return h;
  }
  function f(h, m, p) {
    const d = this.previous, b = this.events;
    let y = 0;
    return S;
    function S(A) {
      return d === 126 && b[b.length - 1][1].type !== "characterEscape" ? p(A) : (h.enter("strikethroughSequenceTemporary"), x(A));
    }
    function x(A) {
      const R = Di(d);
      if (A === 126)
        return y > 1 ? p(A) : (h.consume(A), y++, x);
      if (y < 2 && !a) return p(A);
      const L = h.exit("strikethroughSequenceTemporary"), D = Di(A);
      return L._open = !D || D === 2 && !!R, L._close = !R || R === 2 && !!D, m(A);
    }
  }
}
class ww {
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
    Aw(this, r, a, u);
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
    if (this.map.sort(function(f, h) {
      return f[0] - h[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const u = [];
    for (; a > 0; )
      a -= 1, u.push(r.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), r.length = this.map[a][0];
    u.push(r.slice()), r.length = 0;
    let c = u.pop();
    for (; c; ) {
      for (const f of c)
        r.push(f);
      c = u.pop();
    }
    this.map.length = 0;
  }
}
function Aw(n, r, a, u) {
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
function zw(n, r) {
  let a = !1;
  const u = [];
  for (; r < n.length; ) {
    const c = n[r];
    if (a) {
      if (c[0] === "enter")
        c[1].type === "tableContent" && u.push(n[r + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (c[1].type === "tableContent") {
        if (n[r - 1][1].type === "tableDelimiterMarker") {
          const f = u.length - 1;
          u[f] = u[f] === "left" ? "center" : "right";
        }
      } else if (c[1].type === "tableDelimiterRow")
        break;
    } else c[0] === "enter" && c[1].type === "tableDelimiterRow" && (a = !0);
    r += 1;
  }
  return u;
}
function Tw() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Cw,
        resolveAll: Dw
      }
    }
  };
}
function Cw(n, r, a) {
  const u = this;
  let c = 0, f = 0, h;
  return m;
  function m(U) {
    let ne = u.events.length - 1;
    for (; ne > -1; ) {
      const ie = u.events[ne][1].type;
      if (ie === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      ie === "linePrefix") ne--;
      else break;
    }
    const ee = ne > -1 ? u.events[ne][1].type : null, Ee = ee === "tableHead" || ee === "tableRow" ? B : p;
    return Ee === B && u.parser.lazy[u.now().line] ? a(U) : Ee(U);
  }
  function p(U) {
    return n.enter("tableHead"), n.enter("tableRow"), d(U);
  }
  function d(U) {
    return U === 124 || (h = !0, f += 1), b(U);
  }
  function b(U) {
    return U === null ? a(U) : pe(U) ? f > 1 ? (f = 0, u.interrupt = !0, n.exit("tableRow"), n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), x) : a(U) : Ce(U) ? Me(n, b, "whitespace")(U) : (f += 1, h && (h = !1, c += 1), U === 124 ? (n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), h = !0, b) : (n.enter("data"), y(U)));
  }
  function y(U) {
    return U === null || U === 124 || Ze(U) ? (n.exit("data"), b(U)) : (n.consume(U), U === 92 ? S : y);
  }
  function S(U) {
    return U === 92 || U === 124 ? (n.consume(U), y) : y(U);
  }
  function x(U) {
    return u.interrupt = !1, u.parser.lazy[u.now().line] ? a(U) : (n.enter("tableDelimiterRow"), h = !1, Ce(U) ? Me(n, A, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : A(U));
  }
  function A(U) {
    return U === 45 || U === 58 ? L(U) : U === 124 ? (h = !0, n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), R) : oe(U);
  }
  function R(U) {
    return Ce(U) ? Me(n, L, "whitespace")(U) : L(U);
  }
  function L(U) {
    return U === 58 ? (f += 1, h = !0, n.enter("tableDelimiterMarker"), n.consume(U), n.exit("tableDelimiterMarker"), D) : U === 45 ? (f += 1, D(U)) : U === null || pe(U) ? le(U) : oe(U);
  }
  function D(U) {
    return U === 45 ? (n.enter("tableDelimiterFiller"), Z(U)) : oe(U);
  }
  function Z(U) {
    return U === 45 ? (n.consume(U), Z) : U === 58 ? (h = !0, n.exit("tableDelimiterFiller"), n.enter("tableDelimiterMarker"), n.consume(U), n.exit("tableDelimiterMarker"), H) : (n.exit("tableDelimiterFiller"), H(U));
  }
  function H(U) {
    return Ce(U) ? Me(n, le, "whitespace")(U) : le(U);
  }
  function le(U) {
    return U === 124 ? A(U) : U === null || pe(U) ? !h || c !== f ? oe(U) : (n.exit("tableDelimiterRow"), n.exit("tableHead"), r(U)) : oe(U);
  }
  function oe(U) {
    return a(U);
  }
  function B(U) {
    return n.enter("tableRow"), P(U);
  }
  function P(U) {
    return U === 124 ? (n.enter("tableCellDivider"), n.consume(U), n.exit("tableCellDivider"), P) : U === null || pe(U) ? (n.exit("tableRow"), r(U)) : Ce(U) ? Me(n, P, "whitespace")(U) : (n.enter("data"), J(U));
  }
  function J(U) {
    return U === null || U === 124 || Ze(U) ? (n.exit("data"), P(U)) : (n.consume(U), U === 92 ? me : J);
  }
  function me(U) {
    return U === 92 || U === 124 ? (n.consume(U), J) : J(U);
  }
}
function Dw(n, r) {
  let a = -1, u = !0, c = 0, f = [0, 0, 0, 0], h = [0, 0, 0, 0], m = !1, p = 0, d, b, y;
  const S = new ww();
  for (; ++a < n.length; ) {
    const x = n[a], A = x[1];
    x[0] === "enter" ? A.type === "tableHead" ? (m = !1, p !== 0 && (lg(S, r, p, d, b), b = void 0, p = 0), d = {
      type: "table",
      start: Object.assign({}, A.start),
      // Note: correct end is set later.
      end: Object.assign({}, A.end)
    }, S.add(a, 0, [["enter", d, r]])) : A.type === "tableRow" || A.type === "tableDelimiterRow" ? (u = !0, y = void 0, f = [0, 0, 0, 0], h = [0, a + 1, 0, 0], m && (m = !1, b = {
      type: "tableBody",
      start: Object.assign({}, A.start),
      // Note: correct end is set later.
      end: Object.assign({}, A.end)
    }, S.add(a, 0, [["enter", b, r]])), c = A.type === "tableDelimiterRow" ? 2 : b ? 3 : 1) : c && (A.type === "data" || A.type === "tableDelimiterMarker" || A.type === "tableDelimiterFiller") ? (u = !1, h[2] === 0 && (f[1] !== 0 && (h[0] = h[1], y = pu(S, r, f, c, void 0, y), f = [0, 0, 0, 0]), h[2] = a)) : A.type === "tableCellDivider" && (u ? u = !1 : (f[1] !== 0 && (h[0] = h[1], y = pu(S, r, f, c, void 0, y)), f = h, h = [f[1], a, 0, 0])) : A.type === "tableHead" ? (m = !0, p = a) : A.type === "tableRow" || A.type === "tableDelimiterRow" ? (p = a, f[1] !== 0 ? (h[0] = h[1], y = pu(S, r, f, c, a, y)) : h[1] !== 0 && (y = pu(S, r, h, c, a, y)), c = 0) : c && (A.type === "data" || A.type === "tableDelimiterMarker" || A.type === "tableDelimiterFiller") && (h[3] = a);
  }
  for (p !== 0 && lg(S, r, p, d, b), S.consume(r.events), a = -1; ++a < r.events.length; ) {
    const x = r.events[a];
    x[0] === "enter" && x[1].type === "table" && (x[1]._align = zw(r.events, a));
  }
  return n;
}
function pu(n, r, a, u, c, f) {
  const h = u === 1 ? "tableHeader" : u === 2 ? "tableDelimiter" : "tableData", m = "tableContent";
  a[0] !== 0 && (f.end = Object.assign({}, Ti(r.events, a[0])), n.add(a[0], 0, [["exit", f, r]]));
  const p = Ti(r.events, a[1]);
  if (f = {
    type: h,
    start: Object.assign({}, p),
    // Note: correct end is set later.
    end: Object.assign({}, p)
  }, n.add(a[1], 0, [["enter", f, r]]), a[2] !== 0) {
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
  return c !== void 0 && (f.end = Object.assign({}, Ti(r.events, c)), n.add(c, 0, [["exit", f, r]]), f = void 0), f;
}
function lg(n, r, a, u, c) {
  const f = [], h = Ti(r.events, a);
  c && (c.end = Object.assign({}, h), f.push(["exit", c, r])), u.end = Object.assign({}, h), f.push(["exit", u, r]), n.add(a + 1, 0, f);
}
function Ti(n, r) {
  const a = n[r], u = a[0] === "enter" ? "start" : "end";
  return a[1][u];
}
const _w = {
  name: "tasklistCheck",
  tokenize: Mw
};
function Ow() {
  return {
    text: {
      91: _w
    }
  };
}
function Mw(n, r, a) {
  const u = this;
  return c;
  function c(p) {
    return (
      // Exit if there’s stuff before.
      u.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !u._gfmTasklistFirstContentOfListItem ? a(p) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(p), n.exit("taskListCheckMarker"), f)
    );
  }
  function f(p) {
    return Ze(p) ? (n.enter("taskListCheckValueUnchecked"), n.consume(p), n.exit("taskListCheckValueUnchecked"), h) : p === 88 || p === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(p), n.exit("taskListCheckValueChecked"), h) : a(p);
  }
  function h(p) {
    return p === 93 ? (n.enter("taskListCheckMarker"), n.consume(p), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), m) : a(p);
  }
  function m(p) {
    return pe(p) ? r(p) : Ce(p) ? n.check({
      tokenize: Rw
    }, r, a)(p) : a(p);
  }
}
function Rw(n, r, a) {
  return Me(n, u, "whitespace");
  function u(c) {
    return c === null ? a(c) : r(c);
  }
}
function Nw(n) {
  return Hg([
    aw(),
    pw(),
    Ew(n),
    Tw(),
    Ow()
  ]);
}
const Lw = {};
function $c(n) {
  const r = (
    /** @type {Processor<Root>} */
    this
  ), a = n || Lw, u = r.data(), c = u.micromarkExtensions || (u.micromarkExtensions = []), f = u.fromMarkdownExtensions || (u.fromMarkdownExtensions = []), h = u.toMarkdownExtensions || (u.toMarkdownExtensions = []);
  c.push(Nw(a)), f.push(tw()), h.push(nw(a));
}
const Uw = ({ messages: n }) => {
  const r = Ie.useRef(null);
  return Ie.useEffect(() => {
    r.current?.scrollIntoView({ behavior: "smooth" }), console.log(n);
  }, [n]), /* @__PURE__ */ te.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ te.jsx("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ te.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ te.jsx(Kc, { remarkPlugins: [$c], children: n.message }) }) }) });
}, jw = (n, r, a) => {
  const u = new SpeechSynthesisUtterance(n);
  r && (u.onend = r), window.speechSynthesis.speak(u);
}, Bw = () => {
  window.speechSynthesis.cancel();
}, Hw = async (n) => {
  await navigator.clipboard.writeText(n);
}, Dy = (n) => {
  const r = n.split(`
`).filter((c) => c.trim());
  let a = "";
  const u = [];
  console.log("Raw RAG response lines:", n);
  for (const c of r)
    try {
      const f = JSON.parse(c);
      f.type === "ChatCompletion" && f.content && (a += f.content), f.type === "QuestionSuggestion" && f.content && u.push(f.content);
    } catch {
      console.warn("Failed to parse RAG response line:", c);
    }
  return console.log("Formatted RAG response:", a), console.log("Question suggestions:", u), {
    content: a,
    suggestions: u
  };
};
function qw({ className: n }) {
  return /* @__PURE__ */ te.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ te.jsx(
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
function Yw({ className: n }) {
  return /* @__PURE__ */ te.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ te.jsx(
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
function Gw({ className: n }) {
  return /* @__PURE__ */ te.jsx(
    "svg",
    {
      className: n,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ te.jsx(
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
function Vw({ className: n }) {
  return /* @__PURE__ */ te.jsx(
    "svg",
    {
      className: n,
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ te.jsx(
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
const Qw = ({
  messages: n,
  index: r,
  onSuggestionClick: a
}) => {
  const { t: u } = wu(), [c, f] = Ie.useState(null), [h, m] = Ie.useState(null), p = Ie.useRef(null);
  let d = "";
  const [b, y] = Ie.useState("");
  Ie.useEffect(() => {
    p.current?.scrollIntoView({ behavior: "smooth" }), d += Dy(n.message).content, console.log("Formatted RAG response:::: ", d), y(d);
  }, [n]);
  const S = (A, R) => {
    if (c !== null && (Bw(), c === R)) {
      f(null);
      return;
    }
    jw(A, () => f(null)), f(R);
  }, x = async (A, R) => {
    try {
      await Hw(A), m(R), setTimeout(() => m(null), 2e3);
    } catch (L) {
      console.error("Failed to copy text:", L);
    }
  };
  return /* @__PURE__ */ te.jsx(
    "div",
    {
      className: "flex justify-start",
      children: /* @__PURE__ */ te.jsxs("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white", children: [
        /* @__PURE__ */ te.jsxs("div", { className: "flex flex-col items-start gap-3", children: [
          /* @__PURE__ */ te.jsx(Kc, { remarkPlugins: [$c], children: n.message }),
          /* @__PURE__ */ te.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ te.jsx(
              ja,
              {
                onClick: () => x(n.message, r),
                variant: "ghost",
                size: "icon",
                className: "rounded-lg",
                title: h === r ? u.chat.copiedTooltip : u.chat.copyTooltip,
                children: h === r ? /* @__PURE__ */ te.jsx(qw, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ te.jsx(Yw, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ te.jsx(
              ja,
              {
                onClick: () => S(n.message, r),
                variant: "ghost",
                size: "icon",
                className: "rounded-lg",
                title: c === r ? u.chat.stopReadingTooltip : u.chat.readAloudTooltip,
                children: c === r ? /* @__PURE__ */ te.jsx(Gw, { className: "w-5 h-5 text-green-600" }) : /* @__PURE__ */ te.jsx(Vw, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ te.jsxs("div", { className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ te.jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2", children: "Suggested follow-up questions:" }),
          /* @__PURE__ */ te.jsx("div", { className: "space-y-2", children: n.type === "QuestionSuggestion" && /* @__PURE__ */ te.jsx(
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
}, Xw = ({ welcomeMessage: n }) => /* @__PURE__ */ te.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ te.jsx("div", { className: "max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white", children: /* @__PURE__ */ te.jsx("div", { className: "flex flex-col items-start gap-3", children: /* @__PURE__ */ te.jsx(Kc, { remarkPlugins: [$c], children: n }) }) }) });
function Zw({
  messages: n,
  chatbotInitData: r,
  loading: a,
  onSuggestionClick: u
}) {
  const c = Ie.useRef(null);
  let f = "";
  const [h, m] = Ie.useState("");
  return Ie.useEffect(() => {
    c.current?.scrollIntoView({ behavior: "smooth" }), n.forEach((p) => {
      f += Dy(p.message);
    }), console.log("Formatted RAG response:::: ", f), m(f);
  }, [n]), Ie.useEffect(() => {
    c.current?.scrollIntoView({ behavior: "smooth" }), console.log(n);
  }, [n]), /* @__PURE__ */ te.jsxs("div", { className: "flex-1 overflow-y-auto space-y-4 mb-6 min-h-0", children: [
    r?.welcomeMessage && /* @__PURE__ */ te.jsx(Xw, { welcomeMessage: r.welcomeMessage }),
    n.map((p, d) => p.isChatbot ? /* @__PURE__ */ te.jsx(
      Qw,
      {
        messages: p,
        index: d,
        onSuggestionClick: u
      },
      d
    ) : /* @__PURE__ */ te.jsx(
      Uw,
      {
        index: d,
        messages: p
      },
      d
    )),
    a && /* @__PURE__ */ te.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ te.jsx("div", { className: "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-2xl", children: /* @__PURE__ */ te.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ te.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ te.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-100" }),
      /* @__PURE__ */ te.jsx("div", { className: "w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-200" })
    ] }) }) }),
    /* @__PURE__ */ te.jsx("div", { ref: c })
  ] });
}
const Fw = fg(
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
), _y = Ie.forwardRef(
  ({ className: n, variant: r, inputSize: a, ...u }, c) => /* @__PURE__ */ te.jsx(
    "input",
    {
      className: wg(Fw({ variant: r, inputSize: a }), n),
      ref: c,
      ...u
    }
  )
);
_y.displayName = "Input";
function Kw({
  input: n,
  loading: r,
  pageContent: a,
  onInputChange: u,
  onSendMessage: c
}) {
  const { t: f } = wu();
  return /* @__PURE__ */ te.jsx("div", { className: "sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-4 pb-2", children: /* @__PURE__ */ te.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ te.jsx(
      _y,
      {
        type: "text",
        value: n,
        onChange: (h) => u(h.target.value),
        onKeyDown: (h) => h.key === "Enter" && c(),
        placeholder: a ? f.chat.inputPlaceholder : f.chat.inputPlaceholderEmpty,
        disabled: r,
        inputSize: "md",
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ te.jsx(
      ja,
      {
        onClick: c,
        disabled: r || !n.trim(),
        variant: "secondary",
        size: "lg",
        children: f.chat.sendButton
      }
    )
  ] }) });
}
const Jw = async (n, r, a) => {
  const u = await b1(n, r);
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
function Iw() {
  return ig || (ig = 1, (function(n) {
    (function() {
      var r = {}.hasOwnProperty;
      function a() {
        for (var f = "", h = 0; h < arguments.length; h++) {
          var m = arguments[h];
          m && (f = c(f, u(m)));
        }
        return f;
      }
      function u(f) {
        if (typeof f == "string" || typeof f == "number")
          return f;
        if (typeof f != "object")
          return "";
        if (Array.isArray(f))
          return a.apply(null, f);
        if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
          return f.toString();
        var h = "";
        for (var m in f)
          r.call(f, m) && f[m] && (h = c(h, m));
        return h;
      }
      function c(f, h) {
        return h ? f ? f + " " + h : f + h : f;
      }
      n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
    })();
  })(bc)), bc.exports;
}
var Ww = Iw();
const $w = /* @__PURE__ */ Eu(Ww);
function Pw({ chatApi: n, chatAssistantId: r, open: a = !0, size: u = "large" }) {
  const [c, f] = Ie.useState(
    void 0
  ), [h, m] = Ie.useState(""), [p, d] = Ie.useState([]), [b, y] = Ie.useState(""), [S, x] = Ie.useState(!1);
  Ie.useRef(null), Ie.useEffect(() => {
    n && r && Jw(n, r, f);
  }, []);
  const A = async (L) => {
    if (!L.trim()) return;
    const D = { isChatbot: !1, message: L, id: void 0, type: "UserInput" }, Z = [...p, D];
    d(Z), y(""), x(!0);
    try {
      const le = {
        isChatbot: !0,
        message: (await y1(
          L,
          r,
          h
        )).response,
        id: void 0,
        type: "ChatCompletion"
      };
      d((oe) => [...oe, le]);
    } catch (H) {
      console.error("Error sending message:", H), H instanceof Error && H.message;
    } finally {
      x(!1);
    }
  }, R = (L) => {
    A(L);
  };
  return /* @__PURE__ */ te.jsxs("div", { className: $w({ block: a, hidden: !a, "w-1/2": u === "medium", "w-screen": u === "large" }, "min-h-screen bg-white dark:bg-gray-950 flex flex-col z-1000"), children: [
    /* @__PURE__ */ te.jsx(
      E1,
      {
        title: c?.name
      }
    ),
    /* @__PURE__ */ te.jsxs("div", { className: "flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6", children: [
      /* @__PURE__ */ te.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ te.jsx(
          dv,
          {
            loading: S,
            onSuggestionClick: R
          }
        ),
        /* @__PURE__ */ te.jsx("div", { className: "flex-1" })
      ] }),
      /* @__PURE__ */ te.jsx(
        Zw,
        {
          messages: p,
          loading: S,
          chatbotInitData: c,
          onSuggestionClick: A
        }
      ),
      /* @__PURE__ */ te.jsx(
        Kw,
        {
          input: b,
          loading: S,
          pageContent: h,
          onInputChange: y,
          onSendMessage: () => A(b)
        }
      )
    ] })
  ] });
}
const gu = globalThis;
gu.process ? gu.process.env || (gu.process.env = { NODE_ENV: "production" }) : gu.process = {
  env: { NODE_ENV: "production" }
};
function eA({
  chatApi: n,
  chatAssistantId: r
}) {
  return /* @__PURE__ */ te.jsx(k1, { children: /* @__PURE__ */ te.jsx(Pw, { chatApi: n, chatAssistantId: r }) });
}
const tA = m1(eA, {
  props: {
    chatApi: "string",
    chatAssistantId: "string"
  },
  shadow: "open"
});
customElements.define("teacher-tool-widget", tA);
