var on = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function Ca(i) {
  if (i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")) {
    return i.default;
  } else {
    return i;
  }
}
function Vp(i) {
  if (i.__esModule) {
    return i;
  }
  var t = i.default;
  if (typeof t == "function") {
    var e = function r() {
      if (this instanceof r) {
        return Reflect.construct(t, arguments, this.constructor);
      } else {
        return t.apply(this, arguments);
      }
    };
    e.prototype = t.prototype;
  } else {
    e = {};
  }
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  Object.keys(i).forEach(function (r) {
    var n = Object.getOwnPropertyDescriptor(i, r);
    Object.defineProperty(e, r, n.get ? n : {
      enumerable: true,
      get: function () {
        return i[r];
      }
    });
  });
  return e;
}
var jc = {
  exports: {}
};
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function (i) {
  (function (t, e) {
    i.exports = t.document ? e(t, true) : function (r) {
      if (!r.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return e(r);
    };
  })(typeof window !== "undefined" ? window : on, function (t, e) {
    var r = [];
    var n = Object.getPrototypeOf;
    var s = r.slice;
    var a = r.flat ? function (h) {
      return r.flat.call(h);
    } : function (h) {
      return r.concat.apply([], h);
    };
    var o = r.push;
    var l = r.indexOf;
    var c = {};
    var p = c.toString;
    var g = c.hasOwnProperty;
    var f = g.toString;
    var v = f.call(Object);
    var _ = {};
    function T(u) {
      return typeof u == "function" && typeof u.nodeType != "number" && typeof u.item != "function";
    }
    function A(u) {
      return u != null && u === u.window;
    }
    var E = t.document;
    var I = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function S(h, u, m) {
      m = m || E;
      var y;
      var x;
      var b = m.createElement("script");
      b.text = h;
      if (u) {
        for (y in I) {
          x = u[y] || u.getAttribute && u.getAttribute(y);
          if (x) {
            b.setAttribute(y, x);
          }
        }
      }
      m.head.appendChild(b).parentNode.removeChild(b);
    }
    function P(h) {
      if (h == null) {
        return h + "";
      } else if (typeof h == "object" || typeof h == "function") {
        return c[p.call(h)] || "object";
      } else {
        return typeof h;
      }
    }
    var k = "3.7.1";
    var V = /HTML$/i;
    function d(h, u) {
      return new d.fn.init(h, u);
    }
    d.fn = d.prototype = {
      jquery: k,
      constructor: d,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (h) {
        if (h == null) {
          return s.call(this);
        } else if (h < 0) {
          return this[h + this.length];
        } else {
          return this[h];
        }
      },
      pushStack: function (h) {
        var u = d.merge(this.constructor(), h);
        u.prevObject = this;
        return u;
      },
      each: function (h) {
        return d.each(this, h);
      },
      map: function (h) {
        return this.pushStack(d.map(this, function (u, m) {
          return h.call(u, m, u);
        }));
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(d.grep(this, function (h, u) {
          return (u + 1) % 2;
        }));
      },
      odd: function () {
        return this.pushStack(d.grep(this, function (h, u) {
          return u % 2;
        }));
      },
      eq: function (h) {
        var u = this.length;
        var m = +h + (h < 0 ? u : 0);
        return this.pushStack(m >= 0 && m < u ? [this[m]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: o,
      sort: r.sort,
      splice: r.splice
    };
    d.extend = d.fn.extend = function () {
      var h;
      var u;
      var m;
      var y;
      var x;
      var b;
      var w = arguments[0] || {};
      var M = 1;
      var R = arguments.length;
      var F = false;
      if (typeof w == "boolean") {
        F = w;
        w = arguments[M] || {};
        M++;
      }
      if (typeof w != "object" && !T(w)) {
        w = {};
      }
      if (M === R) {
        w = this;
        M--;
      }
      for (; M < R; M++) {
        if ((h = arguments[M]) != null) {
          for (u in h) {
            y = h[u];
            if (u !== "__proto__" && w !== y) {
              if (F && y && (d.isPlainObject(y) || (x = Array.isArray(y)))) {
                m = w[u];
                if (x && !Array.isArray(m)) {
                  b = [];
                } else if (!x && !d.isPlainObject(m)) {
                  b = {};
                } else {
                  b = m;
                }
                x = false;
                w[u] = d.extend(F, b, y);
              } else if (y !== undefined) {
                w[u] = y;
              }
            }
          }
        }
      }
      return w;
    };
    d.extend({
      expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function (h) {
        throw new Error(h);
      },
      noop: function () {},
      isPlainObject: function (h) {
        var u;
        var m;
        if (!h || p.call(h) !== "[object Object]") {
          return false;
        } else {
          u = n(h);
          if (u) {
            m = g.call(u, "constructor") && u.constructor;
            return typeof m == "function" && f.call(m) === v;
          } else {
            return true;
          }
        }
      },
      isEmptyObject: function (h) {
        var u;
        for (u in h) {
          return false;
        }
        return true;
      },
      globalEval: function (h, u, m) {
        S(h, {
          nonce: u && u.nonce
        }, m);
      },
      each: function (h, u) {
        var m;
        var y = 0;
        if (O(h)) {
          for (m = h.length; y < m && u.call(h[y], y, h[y]) !== false; y++);
        } else {
          for (y in h) {
            if (u.call(h[y], y, h[y]) === false) {
              break;
            }
          }
        }
        return h;
      },
      text: function (h) {
        var u;
        var m = "";
        var y = 0;
        var x = h.nodeType;
        if (!x) {
          while (u = h[y++]) {
            m += d.text(u);
          }
        }
        if (x === 1 || x === 11) {
          return h.textContent;
        } else if (x === 9) {
          return h.documentElement.textContent;
        } else if (x === 3 || x === 4) {
          return h.nodeValue;
        } else {
          return m;
        }
      },
      makeArray: function (h, u) {
        var m = u || [];
        if (h != null) {
          if (O(Object(h))) {
            d.merge(m, typeof h == "string" ? [h] : h);
          } else {
            o.call(m, h);
          }
        }
        return m;
      },
      inArray: function (h, u, m) {
        if (u == null) {
          return -1;
        } else {
          return l.call(u, h, m);
        }
      },
      isXMLDoc: function (h) {
        var u = h && h.namespaceURI;
        var m = h && (h.ownerDocument || h).documentElement;
        return !V.test(u || m && m.nodeName || "HTML");
      },
      merge: function (h, u) {
        for (var m = +u.length, y = 0, x = h.length; y < m; y++) {
          h[x++] = u[y];
        }
        h.length = x;
        return h;
      },
      grep: function (h, u, m) {
        var y;
        var x = [];
        for (var b = 0, w = h.length, M = !m; b < w; b++) {
          y = !u(h[b], b);
          if (y !== M) {
            x.push(h[b]);
          }
        }
        return x;
      },
      map: function (h, u, m) {
        var y;
        var x;
        var b = 0;
        var w = [];
        if (O(h)) {
          for (y = h.length; b < y; b++) {
            x = u(h[b], b, m);
            if (x != null) {
              w.push(x);
            }
          }
        } else {
          for (b in h) {
            x = u(h[b], b, m);
            if (x != null) {
              w.push(x);
            }
          }
        }
        return a(w);
      },
      guid: 1,
      support: _
    });
    if (typeof Symbol == "function") {
      d.fn[Symbol.iterator] = r[Symbol.iterator];
    }
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (h, u) {
      c["[object " + u + "]"] = u.toLowerCase();
    });
    function O(h) {
      var u = !!h && "length" in h && h.length;
      var m = P(h);
      if (T(h) || A(h)) {
        return false;
      } else {
        return m === "array" || u === 0 || typeof u == "number" && u > 0 && u - 1 in h;
      }
    }
    function N(h, u) {
      return h.nodeName && h.nodeName.toLowerCase() === u.toLowerCase();
    }
    var z = r.pop;
    var J = r.sort;
    var $ = r.splice;
    var B = "[\\x20\\t\\r\\n\\f]";
    var W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g");
    d.contains = function (h, u) {
      var m = u && u.parentNode;
      return h === m || !!m && m.nodeType === 1 && !!(h.contains ? h.contains(m) : h.compareDocumentPosition && h.compareDocumentPosition(m) & 16);
    };
    var tt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function at(h, u) {
      if (u) {
        if (h === "\0") {
          return "�";
        } else {
          return h.slice(0, -1) + "\\" + h.charCodeAt(h.length - 1).toString(16) + " ";
        }
      } else {
        return "\\" + h;
      }
    }
    d.escapeSelector = function (h) {
      return (h + "").replace(tt, at);
    };
    var nt = E;
    var dt = o;
    (function () {
      var h;
      var u;
      var m;
      var y;
      var x;
      var b = dt;
      var w;
      var M;
      var R;
      var F;
      var H;
      var X = d.expando;
      var U = 0;
      var Y = 0;
      var wt = xs();
      var Ht = xs();
      var Rt = xs();
      var Te = xs();
      function ce(C, D) {
        if (C === D) {
          x = true;
        }
        return 0;
      }
      var gr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      var mr = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
      var Ut = `${"\\[" + B + "*(" + mr + ")(?:" + B + "*([*^$|!~]?=)" + B}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${mr}))|)${B}*\\]`;
      var yi = `${":(" + mr})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${Ut})*)|.*)\\)|)`;
      var $t = new RegExp(B + "+", "g");
      var se = new RegExp("^" + B + "*," + B + "*");
      var Pn = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*");
      var ho = new RegExp(B + "|>");
      var yr = new RegExp(yi);
      var Mn = new RegExp("^" + mr + "$");
      var vr = {
        ID: new RegExp("^#(" + mr + ")"),
        CLASS: new RegExp("^\\.(" + mr + ")"),
        TAG: new RegExp("^(" + mr + "|[*])"),
        ATTR: new RegExp("^" + Ut),
        PSEUDO: new RegExp("^" + yi),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + gr + ")$", "i"),
        needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
      };
      var Qr = /^(?:input|select|textarea|button)$/i;
      var Jr = /^h\d$/i;
      var je = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var lo = /[+~]/;
      var Hr = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g");
      function $r(C, D) {
        var L = "0x" + C.slice(1) - 65536;
        return D || (L < 0 ? String.fromCharCode(L + 65536) : String.fromCharCode(L >> 10 | 55296, L & 1023 | 56320));
      }
      function Np() {
        ti();
      }
      var Lp = Ts(function (C) {
        return C.disabled === true && N(C, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
      function kp() {
        try {
          return w.activeElement;
        } catch {}
      }
      try {
        b.apply(r = s.call(nt.childNodes), nt.childNodes);
        r[nt.childNodes.length].nodeType;
      } catch {
        b = {
          apply: function (D, L) {
            dt.apply(D, s.call(L));
          },
          call: function (D) {
            dt.apply(D, s.call(arguments, 1));
          }
        };
      }
      function zt(C, D, L, G) {
        var j;
        var it;
        var ht;
        var pt;
        var lt;
        var Nt;
        var bt;
        var Et = D && D.ownerDocument;
        var Lt = D ? D.nodeType : 9;
        L = L || [];
        if (typeof C != "string" || !C || Lt !== 1 && Lt !== 9 && Lt !== 11) {
          return L;
        }
        if (!G && (ti(D), D = D || w, R)) {
          if (Lt !== 11 && (lt = je.exec(C))) {
            if (j = lt[1]) {
              if (Lt === 9) {
                if (ht = D.getElementById(j)) {
                  if (ht.id === j) {
                    b.call(L, ht);
                    return L;
                  }
                } else {
                  return L;
                }
              } else if (Et && (ht = Et.getElementById(j)) && zt.contains(D, ht) && ht.id === j) {
                b.call(L, ht);
                return L;
              }
            } else {
              if (lt[2]) {
                b.apply(L, D.getElementsByTagName(C));
                return L;
              }
              if ((j = lt[3]) && D.getElementsByClassName) {
                b.apply(L, D.getElementsByClassName(j));
                return L;
              }
            }
          }
          if (!Te[C + " "] && (!F || !F.test(C))) {
            bt = C;
            Et = D;
            if (Lt === 1 && (ho.test(C) || Pn.test(C))) {
              Et = lo.test(C) && uo(D.parentNode) || D;
              if (Et != D || !_.scope) {
                if (pt = D.getAttribute("id")) {
                  pt = d.escapeSelector(pt);
                } else {
                  D.setAttribute("id", pt = X);
                }
              }
              Nt = Dn(C);
              it = Nt.length;
              while (it--) {
                Nt[it] = (pt ? "#" + pt : ":scope") + " " + bs(Nt[it]);
              }
              bt = Nt.join(",");
            }
            try {
              b.apply(L, Et.querySelectorAll(bt));
              return L;
            } catch {
              Te(C, true);
            } finally {
              if (pt === X) {
                D.removeAttribute("id");
              }
            }
          }
        }
        return iu(C.replace(W, "$1"), D, L, G);
      }
      function xs() {
        var C = [];
        function D(L, G) {
          if (C.push(L + " ") > u.cacheLength) {
            delete D[C.shift()];
          }
          return D[L + " "] = G;
        }
        return D;
      }
      function er(C) {
        C[X] = true;
        return C;
      }
      function $i(C) {
        var D = w.createElement("fieldset");
        try {
          return !!C(D);
        } catch {
          return false;
        } finally {
          if (D.parentNode) {
            D.parentNode.removeChild(D);
          }
          D = null;
        }
      }
      function Up(C) {
        return function (D) {
          return N(D, "input") && D.type === C;
        };
      }
      function Gp(C) {
        return function (D) {
          return (N(D, "input") || N(D, "button")) && D.type === C;
        };
      }
      function eu(C) {
        return function (D) {
          if ("form" in D) {
            if (D.parentNode && D.disabled === false) {
              if ("label" in D) {
                if ("label" in D.parentNode) {
                  return D.parentNode.disabled === C;
                } else {
                  return D.disabled === C;
                }
              } else {
                return D.isDisabled === C || D.isDisabled !== !C && Lp(D) === C;
              }
            } else {
              return D.disabled === C;
            }
          } else if ("label" in D) {
            return D.disabled === C;
          } else {
            return false;
          }
        };
      }
      function vi(C) {
        return er(function (D) {
          D = +D;
          return er(function (L, G) {
            var j;
            var it = C([], L.length, D);
            for (var ht = it.length; ht--;) {
              if (L[j = it[ht]]) {
                L[j] = !(G[j] = L[j]);
              }
            }
          });
        });
      }
      function uo(C) {
        return C && typeof C.getElementsByTagName !== "undefined" && C;
      }
      function ti(C) {
        var D;
        var L = C ? C.ownerDocument || C : nt;
        if (L != w && L.nodeType === 9 && !!L.documentElement) {
          w = L;
          M = w.documentElement;
          R = !d.isXMLDoc(w);
          H = M.matches || M.webkitMatchesSelector || M.msMatchesSelector;
          if (M.msMatchesSelector && nt != w && (D = w.defaultView) && D.top !== D) {
            D.addEventListener("unload", Np);
          }
          _.getById = $i(function (G) {
            M.appendChild(G).id = d.expando;
            return !w.getElementsByName || !w.getElementsByName(d.expando).length;
          });
          _.disconnectedMatch = $i(function (G) {
            return H.call(G, "*");
          });
          _.scope = $i(function () {
            return w.querySelectorAll(":scope");
          });
          _.cssHas = $i(function () {
            try {
              w.querySelector(":has(*,:jqfake)");
              return false;
            } catch {
              return true;
            }
          });
          if (_.getById) {
            u.filter.ID = function (G) {
              var j = G.replace(Hr, $r);
              return function (it) {
                return it.getAttribute("id") === j;
              };
            };
            u.find.ID = function (G, j) {
              if (typeof j.getElementById !== "undefined" && R) {
                var it = j.getElementById(G);
                if (it) {
                  return [it];
                } else {
                  return [];
                }
              }
            };
          } else {
            u.filter.ID = function (G) {
              var j = G.replace(Hr, $r);
              return function (it) {
                var ht = typeof it.getAttributeNode !== "undefined" && it.getAttributeNode("id");
                return ht && ht.value === j;
              };
            };
            u.find.ID = function (G, j) {
              if (typeof j.getElementById !== "undefined" && R) {
                var it;
                var ht;
                var pt;
                var lt = j.getElementById(G);
                if (lt) {
                  it = lt.getAttributeNode("id");
                  if (it && it.value === G) {
                    return [lt];
                  }
                  pt = j.getElementsByName(G);
                  ht = 0;
                  while (lt = pt[ht++]) {
                    it = lt.getAttributeNode("id");
                    if (it && it.value === G) {
                      return [lt];
                    }
                  }
                }
                return [];
              }
            };
          }
          u.find.TAG = function (G, j) {
            if (typeof j.getElementsByTagName !== "undefined") {
              return j.getElementsByTagName(G);
            } else {
              return j.querySelectorAll(G);
            }
          };
          u.find.CLASS = function (G, j) {
            if (typeof j.getElementsByClassName !== "undefined" && R) {
              return j.getElementsByClassName(G);
            }
          };
          F = [];
          $i(function (G) {
            var j;
            M.appendChild(G).innerHTML = "<a id='" + X + "' href='' disabled='disabled'></a><select id='" + X + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!G.querySelectorAll("[selected]").length) {
              F.push("\\[" + B + "*(?:value|" + gr + ")");
            }
            if (!G.querySelectorAll("[id~=" + X + "-]").length) {
              F.push("~=");
            }
            if (!G.querySelectorAll("a#" + X + "+*").length) {
              F.push(".#.+[+~]");
            }
            if (!G.querySelectorAll(":checked").length) {
              F.push(":checked");
            }
            j = w.createElement("input");
            j.setAttribute("type", "hidden");
            G.appendChild(j).setAttribute("name", "D");
            M.appendChild(G).disabled = true;
            if (G.querySelectorAll(":disabled").length !== 2) {
              F.push(":enabled", ":disabled");
            }
            j = w.createElement("input");
            j.setAttribute("name", "");
            G.appendChild(j);
            if (!G.querySelectorAll("[name='']").length) {
              F.push(`${"\\[" + B + "*name" + B + "*=" + B}*(?:''|"")`);
            }
          });
          if (!_.cssHas) {
            F.push(":has");
          }
          F = F.length && new RegExp(F.join("|"));
          ce = function (G, j) {
            if (G === j) {
              x = true;
              return 0;
            }
            var it = !G.compareDocumentPosition - !j.compareDocumentPosition;
            return it || (it = (G.ownerDocument || G) == (j.ownerDocument || j) ? G.compareDocumentPosition(j) : 1, it & 1 || !_.sortDetached && j.compareDocumentPosition(G) === it ? G === w || G.ownerDocument == nt && zt.contains(nt, G) ? -1 : j === w || j.ownerDocument == nt && zt.contains(nt, j) ? 1 : y ? l.call(y, G) - l.call(y, j) : 0 : it & 4 ? -1 : 1);
          };
        }
        return w;
      }
      zt.matches = function (C, D) {
        return zt(C, null, null, D);
      };
      zt.matchesSelector = function (C, D) {
        ti(C);
        if (R && !Te[D + " "] && (!F || !F.test(D))) {
          try {
            var L = H.call(C, D);
            if (L || _.disconnectedMatch || C.document && C.document.nodeType !== 11) {
              return L;
            }
          } catch {
            Te(D, true);
          }
        }
        return zt(D, w, null, [C]).length > 0;
      };
      zt.contains = function (C, D) {
        if ((C.ownerDocument || C) != w) {
          ti(C);
        }
        return d.contains(C, D);
      };
      zt.attr = function (C, D) {
        if ((C.ownerDocument || C) != w) {
          ti(C);
        }
        var L = u.attrHandle[D.toLowerCase()];
        var G = L && g.call(u.attrHandle, D.toLowerCase()) ? L(C, D, !R) : undefined;
        if (G !== undefined) {
          return G;
        } else {
          return C.getAttribute(D);
        }
      };
      zt.error = function (C) {
        throw new Error("Syntax error, unrecognized expression: " + C);
      };
      d.uniqueSort = function (C) {
        var D;
        var L = [];
        var G = 0;
        var j = 0;
        x = !_.sortStable;
        y = !_.sortStable && s.call(C, 0);
        J.call(C, ce);
        if (x) {
          while (D = C[j++]) {
            if (D === C[j]) {
              G = L.push(j);
            }
          }
          while (G--) {
            $.call(C, L[G], 1);
          }
        }
        y = null;
        return C;
      };
      d.fn.uniqueSort = function () {
        return this.pushStack(d.uniqueSort(s.apply(this)));
      };
      u = d.expr = {
        cacheLength: 50,
        createPseudo: er,
        match: vr,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: true
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (C) {
            C[1] = C[1].replace(Hr, $r);
            C[3] = (C[3] || C[4] || C[5] || "").replace(Hr, $r);
            if (C[2] === "~=") {
              C[3] = " " + C[3] + " ";
            }
            return C.slice(0, 4);
          },
          CHILD: function (C) {
            C[1] = C[1].toLowerCase();
            if (C[1].slice(0, 3) === "nth") {
              if (!C[3]) {
                zt.error(C[0]);
              }
              C[4] = +(C[4] ? C[5] + (C[6] || 1) : (C[3] === "even" || C[3] === "odd") * 2);
              C[5] = +(C[7] + C[8] || C[3] === "odd");
            } else if (C[3]) {
              zt.error(C[0]);
            }
            return C;
          },
          PSEUDO: function (C) {
            var D;
            var L = !C[6] && C[2];
            if (vr.CHILD.test(C[0])) {
              return null;
            } else {
              if (C[3]) {
                C[2] = C[4] || C[5] || "";
              } else if (L && yr.test(L) && (D = Dn(L, true)) && (D = L.indexOf(")", L.length - D) - L.length)) {
                C[0] = C[0].slice(0, D);
                C[2] = L.slice(0, D);
              }
              return C.slice(0, 3);
            }
          }
        },
        filter: {
          TAG: function (C) {
            var D = C.replace(Hr, $r).toLowerCase();
            if (C === "*") {
              return function () {
                return true;
              };
            } else {
              return function (L) {
                return N(L, D);
              };
            }
          },
          CLASS: function (C) {
            var D = wt[C + " "];
            return D || (D = new RegExp("(^|" + B + ")" + C + "(" + B + "|$)")) && wt(C, function (L) {
              return D.test(typeof L.className == "string" && L.className || typeof L.getAttribute !== "undefined" && L.getAttribute("class") || "");
            });
          },
          ATTR: function (C, D, L) {
            return function (G) {
              var j = zt.attr(G, C);
              if (j == null) {
                return D === "!=";
              } else if (D) {
                j += "";
                if (D === "=") {
                  return j === L;
                } else if (D === "!=") {
                  return j !== L;
                } else if (D === "^=") {
                  return L && j.indexOf(L) === 0;
                } else if (D === "*=") {
                  return L && j.indexOf(L) > -1;
                } else if (D === "$=") {
                  return L && j.slice(-L.length) === L;
                } else if (D === "~=") {
                  return (" " + j.replace($t, " ") + " ").indexOf(L) > -1;
                } else if (D === "|=") {
                  return j === L || j.slice(0, L.length + 1) === L + "-";
                } else {
                  return false;
                }
              } else {
                return true;
              }
            };
          },
          CHILD: function (C, D, L, G, j) {
            var it = C.slice(0, 3) !== "nth";
            var ht = C.slice(-4) !== "last";
            var pt = D === "of-type";
            if (G === 1 && j === 0) {
              return function (lt) {
                return !!lt.parentNode;
              };
            } else {
              return function (lt, Nt, bt) {
                var Et;
                var Lt;
                var yt;
                var Qt;
                var Le;
                var Se = it !== ht ? "nextSibling" : "previousSibling";
                var Xe = lt.parentNode;
                var _r = pt && lt.nodeName.toLowerCase();
                var Vi = !bt && !pt;
                var Pe = false;
                if (Xe) {
                  if (it) {
                    while (Se) {
                      for (yt = lt; yt = yt[Se];) {
                        if (pt ? N(yt, _r) : yt.nodeType === 1) {
                          return false;
                        }
                      }
                      Le = Se = C === "only" && !Le && "nextSibling";
                    }
                    return true;
                  }
                  Le = [ht ? Xe.firstChild : Xe.lastChild];
                  if (ht && Vi) {
                    Lt = Xe[X] ||= {};
                    Et = Lt[C] || [];
                    Qt = Et[0] === U && Et[1];
                    Pe = Qt && Et[2];
                    yt = Qt && Xe.childNodes[Qt];
                    while (yt = ++Qt && yt && yt[Se] || (Pe = Qt = 0) || Le.pop()) {
                      if (yt.nodeType === 1 && ++Pe && yt === lt) {
                        Lt[C] = [U, Qt, Pe];
                        break;
                      }
                    }
                  } else {
                    if (Vi) {
                      Lt = lt[X] ||= {};
                      Et = Lt[C] || [];
                      Qt = Et[0] === U && Et[1];
                      Pe = Qt;
                    }
                    if (Pe === false) {
                      while ((yt = ++Qt && yt && yt[Se] || (Pe = Qt = 0) || Le.pop()) && (!(pt ? N(yt, _r) : yt.nodeType === 1) || !++Pe || !(Vi && (Lt = yt[X] ||= {}, Lt[C] = [U, Pe]), yt === lt)));
                    }
                  }
                  Pe -= j;
                  return Pe === G || Pe % G === 0 && Pe / G >= 0;
                }
              };
            }
          },
          PSEUDO: function (C, D) {
            var L;
            var G = u.pseudos[C] || u.setFilters[C.toLowerCase()] || zt.error("unsupported pseudo: " + C);
            if (G[X]) {
              return G(D);
            } else if (G.length > 1) {
              L = [C, C, "", D];
              if (u.setFilters.hasOwnProperty(C.toLowerCase())) {
                return er(function (j, it) {
                  var ht;
                  var pt = G(j, D);
                  for (var lt = pt.length; lt--;) {
                    ht = l.call(j, pt[lt]);
                    j[ht] = !(it[ht] = pt[lt]);
                  }
                });
              } else {
                return function (j) {
                  return G(j, 0, L);
                };
              }
            } else {
              return G;
            }
          }
        },
        pseudos: {
          not: er(function (C) {
            var D = [];
            var L = [];
            var G = go(C.replace(W, "$1"));
            if (G[X]) {
              return er(function (j, it, ht, pt) {
                var lt;
                var Nt = G(j, null, pt, []);
                for (var bt = j.length; bt--;) {
                  if (lt = Nt[bt]) {
                    j[bt] = !(it[bt] = lt);
                  }
                }
              });
            } else {
              return function (j, it, ht) {
                D[0] = j;
                G(D, null, ht, L);
                D[0] = null;
                return !L.pop();
              };
            }
          }),
          has: er(function (C) {
            return function (D) {
              return zt(C, D).length > 0;
            };
          }),
          contains: er(function (C) {
            C = C.replace(Hr, $r);
            return function (D) {
              return (D.textContent || d.text(D)).indexOf(C) > -1;
            };
          }),
          lang: er(function (C) {
            if (!Mn.test(C || "")) {
              zt.error("unsupported lang: " + C);
            }
            C = C.replace(Hr, $r).toLowerCase();
            return function (D) {
              var L;
              do {
                if (L = R ? D.lang : D.getAttribute("xml:lang") || D.getAttribute("lang")) {
                  L = L.toLowerCase();
                  return L === C || L.indexOf(C + "-") === 0;
                }
              } while ((D = D.parentNode) && D.nodeType === 1);
              return false;
            };
          }),
          target: function (C) {
            var D = t.location && t.location.hash;
            return D && D.slice(1) === C.id;
          },
          root: function (C) {
            return C === M;
          },
          focus: function (C) {
            return C === kp() && w.hasFocus() && (!!C.type || !!C.href || !!~C.tabIndex);
          },
          enabled: eu(false),
          disabled: eu(true),
          checked: function (C) {
            return N(C, "input") && !!C.checked || N(C, "option") && !!C.selected;
          },
          selected: function (C) {
            if (C.parentNode) {
              C.parentNode.selectedIndex;
            }
            return C.selected === true;
          },
          empty: function (C) {
            for (C = C.firstChild; C; C = C.nextSibling) {
              if (C.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function (C) {
            return !u.pseudos.empty(C);
          },
          header: function (C) {
            return Jr.test(C.nodeName);
          },
          input: function (C) {
            return Qr.test(C.nodeName);
          },
          button: function (C) {
            return N(C, "input") && C.type === "button" || N(C, "button");
          },
          text: function (C) {
            var D;
            return N(C, "input") && C.type === "text" && ((D = C.getAttribute("type")) == null || D.toLowerCase() === "text");
          },
          first: vi(function () {
            return [0];
          }),
          last: vi(function (C, D) {
            return [D - 1];
          }),
          eq: vi(function (C, D, L) {
            return [L < 0 ? L + D : L];
          }),
          even: vi(function (C, D) {
            for (var L = 0; L < D; L += 2) {
              C.push(L);
            }
            return C;
          }),
          odd: vi(function (C, D) {
            for (var L = 1; L < D; L += 2) {
              C.push(L);
            }
            return C;
          }),
          lt: vi(function (C, D, L) {
            var G;
            for (L < 0 ? G = L + D : L > D ? G = D : G = L; --G >= 0;) {
              C.push(G);
            }
            return C;
          }),
          gt: vi(function (C, D, L) {
            for (var G = L < 0 ? L + D : L; ++G < D;) {
              C.push(G);
            }
            return C;
          })
        }
      };
      u.pseudos.nth = u.pseudos.eq;
      for (h in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) {
        u.pseudos[h] = Up(h);
      }
      for (h in {
        submit: true,
        reset: true
      }) {
        u.pseudos[h] = Gp(h);
      }
      function ru() {}
      ru.prototype = u.filters = u.pseudos;
      u.setFilters = new ru();
      function Dn(C, D) {
        var L;
        var G;
        var j;
        var it;
        var ht;
        var pt;
        var lt;
        var Nt = Ht[C + " "];
        if (Nt) {
          if (D) {
            return 0;
          } else {
            return Nt.slice(0);
          }
        }
        ht = C;
        pt = [];
        lt = u.preFilter;
        while (ht) {
          if (!L || (G = se.exec(ht))) {
            if (G) {
              ht = ht.slice(G[0].length) || ht;
            }
            pt.push(j = []);
          }
          L = false;
          if (G = Pn.exec(ht)) {
            L = G.shift();
            j.push({
              value: L,
              type: G[0].replace(W, " ")
            });
            ht = ht.slice(L.length);
          }
          for (it in u.filter) {
            if ((G = vr[it].exec(ht)) && (!lt[it] || (G = lt[it](G)))) {
              L = G.shift();
              j.push({
                value: L,
                type: it,
                matches: G
              });
              ht = ht.slice(L.length);
            }
          }
          if (!L) {
            break;
          }
        }
        if (D) {
          return ht.length;
        } else if (ht) {
          return zt.error(C);
        } else {
          return Ht(C, pt).slice(0);
        }
      }
      function bs(C) {
        for (var D = 0, L = C.length, G = ""; D < L; D++) {
          G += C[D].value;
        }
        return G;
      }
      function Ts(C, D, L) {
        var G = D.dir;
        var j = D.next;
        var it = j || G;
        var ht = L && it === "parentNode";
        var pt = Y++;
        if (D.first) {
          return function (lt, Nt, bt) {
            while (lt = lt[G]) {
              if (lt.nodeType === 1 || ht) {
                return C(lt, Nt, bt);
              }
            }
            return false;
          };
        } else {
          return function (lt, Nt, bt) {
            var Et;
            var Lt;
            var yt = [U, pt];
            if (bt) {
              while (lt = lt[G]) {
                if ((lt.nodeType === 1 || ht) && C(lt, Nt, bt)) {
                  return true;
                }
              }
            } else {
              while (lt = lt[G]) {
                if (lt.nodeType === 1 || ht) {
                  Lt = lt[X] ||= {};
                  if (j && N(lt, j)) {
                    lt = lt[G] || lt;
                  } else {
                    if ((Et = Lt[it]) && Et[0] === U && Et[1] === pt) {
                      return yt[2] = Et[2];
                    }
                    Lt[it] = yt;
                    if (yt[2] = C(lt, Nt, bt)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
      }
      function co(C) {
        if (C.length > 1) {
          return function (D, L, G) {
            for (var j = C.length; j--;) {
              if (!C[j](D, L, G)) {
                return false;
              }
            }
            return true;
          };
        } else {
          return C[0];
        }
      }
      function Hp(C, D, L) {
        for (var G = 0, j = D.length; G < j; G++) {
          zt(C, D[G], L);
        }
        return L;
      }
      function ws(C, D, L, G, j) {
        var it;
        var ht = [];
        for (var pt = 0, lt = C.length, Nt = D != null; pt < lt; pt++) {
          if ((it = C[pt]) && (!L || L(it, G, j))) {
            ht.push(it);
            if (Nt) {
              D.push(pt);
            }
          }
        }
        return ht;
      }
      function fo(C, D, L, G, j, it) {
        if (G && !G[X]) {
          G = fo(G);
        }
        if (j && !j[X]) {
          j = fo(j, it);
        }
        return er(function (ht, pt, lt, Nt) {
          var bt;
          var Et;
          var Lt;
          var yt;
          var Qt = [];
          var Le = [];
          var Se = pt.length;
          var Xe = ht || Hp(D || "*", lt.nodeType ? [lt] : lt, []);
          var _r = C && (ht || !D) ? ws(Xe, Qt, C, lt, Nt) : Xe;
          if (L) {
            yt = j || (ht ? C : Se || G) ? [] : pt;
            L(_r, yt, lt, Nt);
          } else {
            yt = _r;
          }
          if (G) {
            bt = ws(yt, Le);
            G(bt, [], lt, Nt);
            Et = bt.length;
            while (Et--) {
              if (Lt = bt[Et]) {
                yt[Le[Et]] = !(_r[Le[Et]] = Lt);
              }
            }
          }
          if (ht) {
            if (j || C) {
              if (j) {
                bt = [];
                Et = yt.length;
                while (Et--) {
                  if (Lt = yt[Et]) {
                    bt.push(_r[Et] = Lt);
                  }
                }
                j(null, yt = [], bt, Nt);
              }
              for (Et = yt.length; Et--;) {
                if ((Lt = yt[Et]) && (bt = j ? l.call(ht, Lt) : Qt[Et]) > -1) {
                  ht[bt] = !(pt[bt] = Lt);
                }
              }
            }
          } else {
            yt = ws(yt === pt ? yt.splice(Se, yt.length) : yt);
            if (j) {
              j(null, pt, yt, Nt);
            } else {
              b.apply(pt, yt);
            }
          }
        });
      }
      function po(C) {
        var D;
        var L;
        var G;
        for (var j = C.length, it = u.relative[C[0].type], ht = it || u.relative[" "], pt = it ? 1 : 0, lt = Ts(function (Et) {
            return Et === D;
          }, ht, true), Nt = Ts(function (Et) {
            return l.call(D, Et) > -1;
          }, ht, true), bt = [function (Et, Lt, yt) {
            var Qt = !it && (yt || Lt != m) || ((D = Lt).nodeType ? lt(Et, Lt, yt) : Nt(Et, Lt, yt));
            D = null;
            return Qt;
          }]; pt < j; pt++) {
          if (L = u.relative[C[pt].type]) {
            bt = [Ts(co(bt), L)];
          } else {
            L = u.filter[C[pt].type].apply(null, C[pt].matches);
            if (L[X]) {
              for (G = ++pt; G < j && !u.relative[C[G].type]; G++);
              return fo(pt > 1 && co(bt), pt > 1 && bs(C.slice(0, pt - 1).concat({
                value: C[pt - 2].type === " " ? "*" : ""
              })).replace(W, "$1"), L, pt < G && po(C.slice(pt, G)), G < j && po(C = C.slice(G)), G < j && bs(C));
            }
            bt.push(L);
          }
        }
        return co(bt);
      }
      function $p(C, D) {
        var L = D.length > 0;
        var G = C.length > 0;
        function j(it, ht, pt, lt, Nt) {
          var bt;
          var Et;
          var Lt;
          var yt = 0;
          var Qt = "0";
          var Le = it && [];
          var Se = [];
          var Xe = m;
          var _r = it || G && u.find.TAG("*", Nt);
          var Vi = U += Xe == null ? 1 : Math.random() || 0.1;
          var Pe = _r.length;
          for (Nt && (m = ht == w || ht || Nt); Qt !== Pe && (bt = _r[Qt]) != null; Qt++) {
            if (G && bt) {
              Et = 0;
              if (!ht && bt.ownerDocument != w) {
                ti(bt);
                pt = !R;
              }
              while (Lt = C[Et++]) {
                if (Lt(bt, ht || w, pt)) {
                  b.call(lt, bt);
                  break;
                }
              }
              if (Nt) {
                U = Vi;
              }
            }
            if (L) {
              if (bt = !Lt && bt) {
                yt--;
              }
              if (it) {
                Le.push(bt);
              }
            }
          }
          yt += Qt;
          if (L && Qt !== yt) {
            for (Et = 0; Lt = D[Et++];) {
              Lt(Le, Se, ht, pt);
            }
            if (it) {
              if (yt > 0) {
                while (Qt--) {
                  if (!Le[Qt] && !Se[Qt]) {
                    Se[Qt] = z.call(lt);
                  }
                }
              }
              Se = ws(Se);
            }
            b.apply(lt, Se);
            if (Nt && !it && Se.length > 0 && yt + D.length > 1) {
              d.uniqueSort(lt);
            }
          }
          if (Nt) {
            U = Vi;
            m = Xe;
          }
          return Le;
        }
        if (L) {
          return er(j);
        } else {
          return j;
        }
      }
      function go(C, D) {
        var L;
        var G = [];
        var j = [];
        var it = Rt[C + " "];
        if (!it) {
          D ||= Dn(C);
          L = D.length;
          while (L--) {
            it = po(D[L]);
            if (it[X]) {
              G.push(it);
            } else {
              j.push(it);
            }
          }
          it = Rt(C, $p(j, G));
          it.selector = C;
        }
        return it;
      }
      function iu(C, D, L, G) {
        var j;
        var it;
        var ht;
        var pt;
        var lt;
        var Nt = typeof C == "function" && C;
        var bt = !G && Dn(C = Nt.selector || C);
        L = L || [];
        if (bt.length === 1) {
          it = bt[0] = bt[0].slice(0);
          if (it.length > 2 && (ht = it[0]).type === "ID" && D.nodeType === 9 && R && u.relative[it[1].type]) {
            D = (u.find.ID(ht.matches[0].replace(Hr, $r), D) || [])[0];
            if (D) {
              if (Nt) {
                D = D.parentNode;
              }
            } else {
              return L;
            }
            C = C.slice(it.shift().value.length);
          }
          for (j = vr.needsContext.test(C) ? 0 : it.length; j-- && (ht = it[j], !u.relative[pt = ht.type]);) {
            if ((lt = u.find[pt]) && (G = lt(ht.matches[0].replace(Hr, $r), lo.test(it[0].type) && uo(D.parentNode) || D))) {
              it.splice(j, 1);
              C = G.length && bs(it);
              if (!C) {
                b.apply(L, G);
                return L;
              }
              break;
            }
          }
        }
        (Nt || go(C, bt))(G, D, !R, L, !D || lo.test(C) && uo(D.parentNode) || D);
        return L;
      }
      _.sortStable = X.split("").sort(ce).join("") === X;
      ti();
      _.sortDetached = $i(function (C) {
        return C.compareDocumentPosition(w.createElement("fieldset")) & 1;
      });
      d.find = zt;
      d.expr[":"] = d.expr.pseudos;
      d.unique = d.uniqueSort;
      zt.compile = go;
      zt.select = iu;
      zt.setDocument = ti;
      zt.tokenize = Dn;
      zt.escape = d.escapeSelector;
      zt.getText = d.text;
      zt.isXML = d.isXMLDoc;
      zt.selectors = d.expr;
      zt.support = d.support;
      zt.uniqueSort = d.uniqueSort;
    })();
    function Ft(h, u, m) {
      var y = [];
      var x = m !== undefined;
      while ((h = h[u]) && h.nodeType !== 9) {
        if (h.nodeType === 1) {
          if (x && d(h).is(m)) {
            break;
          }
          y.push(h);
        }
      }
      return y;
    }
    function Q(h, u) {
      var m = [];
      for (; h; h = h.nextSibling) {
        if (h.nodeType === 1 && h !== u) {
          m.push(h);
        }
      }
      return m;
    }
    var K = d.expr.match.needsContext;
    var xt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Ct(h, u, m) {
      if (T(u)) {
        return d.grep(h, function (y, x) {
          return !!u.call(y, x, y) !== m;
        });
      } else if (u.nodeType) {
        return d.grep(h, function (y) {
          return y === u !== m;
        });
      } else if (typeof u != "string") {
        return d.grep(h, function (y) {
          return l.call(u, y) > -1 !== m;
        });
      } else {
        return d.filter(u, h, m);
      }
    }
    d.filter = function (h, u, m) {
      var y = u[0];
      if (m) {
        h = ":not(" + h + ")";
      }
      if (u.length === 1 && y.nodeType === 1) {
        if (d.find.matchesSelector(y, h)) {
          return [y];
        } else {
          return [];
        }
      } else {
        return d.find.matches(h, d.grep(u, function (x) {
          return x.nodeType === 1;
        }));
      }
    };
    d.fn.extend({
      find: function (h) {
        var u;
        var m;
        var y = this.length;
        var x = this;
        if (typeof h != "string") {
          return this.pushStack(d(h).filter(function () {
            for (u = 0; u < y; u++) {
              if (d.contains(x[u], this)) {
                return true;
              }
            }
          }));
        }
        m = this.pushStack([]);
        u = 0;
        for (; u < y; u++) {
          d.find(h, x[u], m);
        }
        if (y > 1) {
          return d.uniqueSort(m);
        } else {
          return m;
        }
      },
      filter: function (h) {
        return this.pushStack(Ct(this, h || [], false));
      },
      not: function (h) {
        return this.pushStack(Ct(this, h || [], true));
      },
      is: function (h) {
        return !!Ct(this, typeof h == "string" && K.test(h) ? d(h) : h || [], false).length;
      }
    });
    var It;
    var kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    var Ot = d.fn.init = function (h, u, m) {
      var y;
      var x;
      if (!h) {
        return this;
      }
      m = m || It;
      if (typeof h == "string") {
        if (h[0] === "<" && h[h.length - 1] === ">" && h.length >= 3) {
          y = [null, h, null];
        } else {
          y = kt.exec(h);
        }
        if (y && (y[1] || !u)) {
          if (y[1]) {
            u = u instanceof d ? u[0] : u;
            d.merge(this, d.parseHTML(y[1], u && u.nodeType ? u.ownerDocument || u : E, true));
            if (xt.test(y[1]) && d.isPlainObject(u)) {
              for (y in u) {
                if (T(this[y])) {
                  this[y](u[y]);
                } else {
                  this.attr(y, u[y]);
                }
              }
            }
            return this;
          } else {
            x = E.getElementById(y[2]);
            if (x) {
              this[0] = x;
              this.length = 1;
            }
            return this;
          }
        } else if (!u || u.jquery) {
          return (u || m).find(h);
        } else {
          return this.constructor(u).find(h);
        }
      } else {
        if (h.nodeType) {
          this[0] = h;
          this.length = 1;
          return this;
        }
        if (T(h)) {
          if (m.ready !== undefined) {
            return m.ready(h);
          } else {
            return h(d);
          }
        }
      }
      return d.makeArray(h, this);
    };
    Ot.prototype = d.fn;
    It = d(E);
    var Mt = /^(?:parents|prev(?:Until|All))/;
    var Vt = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    d.fn.extend({
      has: function (h) {
        var u = d(h, this);
        var m = u.length;
        return this.filter(function () {
          for (var y = 0; y < m; y++) {
            if (d.contains(this, u[y])) {
              return true;
            }
          }
        });
      },
      closest: function (h, u) {
        var m;
        var y = 0;
        var x = this.length;
        var b = [];
        var w = typeof h != "string" && d(h);
        if (!K.test(h)) {
          for (; y < x; y++) {
            for (m = this[y]; m && m !== u; m = m.parentNode) {
              if (m.nodeType < 11 && (w ? w.index(m) > -1 : m.nodeType === 1 && d.find.matchesSelector(m, h))) {
                b.push(m);
                break;
              }
            }
          }
        }
        return this.pushStack(b.length > 1 ? d.uniqueSort(b) : b);
      },
      index: function (h) {
        if (h) {
          if (typeof h == "string") {
            return l.call(d(h), this[0]);
          } else {
            return l.call(this, h.jquery ? h[0] : h);
          }
        } else if (this[0] && this[0].parentNode) {
          return this.first().prevAll().length;
        } else {
          return -1;
        }
      },
      add: function (h, u) {
        return this.pushStack(d.uniqueSort(d.merge(this.get(), d(h, u))));
      },
      addBack: function (h) {
        return this.add(h == null ? this.prevObject : this.prevObject.filter(h));
      }
    });
    function Yt(h, u) {
      while ((h = h[u]) && h.nodeType !== 1);
      return h;
    }
    d.each({
      parent: function (h) {
        var u = h.parentNode;
        if (u && u.nodeType !== 11) {
          return u;
        } else {
          return null;
        }
      },
      parents: function (h) {
        return Ft(h, "parentNode");
      },
      parentsUntil: function (h, u, m) {
        return Ft(h, "parentNode", m);
      },
      next: function (h) {
        return Yt(h, "nextSibling");
      },
      prev: function (h) {
        return Yt(h, "previousSibling");
      },
      nextAll: function (h) {
        return Ft(h, "nextSibling");
      },
      prevAll: function (h) {
        return Ft(h, "previousSibling");
      },
      nextUntil: function (h, u, m) {
        return Ft(h, "nextSibling", m);
      },
      prevUntil: function (h, u, m) {
        return Ft(h, "previousSibling", m);
      },
      siblings: function (h) {
        return Q((h.parentNode || {}).firstChild, h);
      },
      children: function (h) {
        return Q(h.firstChild);
      },
      contents: function (h) {
        if (h.contentDocument != null && n(h.contentDocument)) {
          return h.contentDocument;
        } else {
          if (N(h, "template")) {
            h = h.content || h;
          }
          return d.merge([], h.childNodes);
        }
      }
    }, function (h, u) {
      d.fn[h] = function (m, y) {
        var x = d.map(this, u, m);
        if (h.slice(-5) !== "Until") {
          y = m;
        }
        if (y && typeof y == "string") {
          x = d.filter(y, x);
        }
        if (this.length > 1) {
          if (!Vt[h]) {
            d.uniqueSort(x);
          }
          if (Mt.test(h)) {
            x.reverse();
          }
        }
        return this.pushStack(x);
      };
    });
    var Dt = /[^\x20\t\r\n\f]+/g;
    function qt(h) {
      var u = {};
      d.each(h.match(Dt) || [], function (m, y) {
        u[y] = true;
      });
      return u;
    }
    d.Callbacks = function (h) {
      h = typeof h == "string" ? qt(h) : d.extend({}, h);
      var u;
      var m;
      var y;
      var x;
      var b = [];
      var w = [];
      var M = -1;
      function R() {
        x = x || h.once;
        y = u = true;
        for (; w.length; M = -1) {
          for (m = w.shift(); ++M < b.length;) {
            if (b[M].apply(m[0], m[1]) === false && h.stopOnFalse) {
              M = b.length;
              m = false;
            }
          }
        }
        if (!h.memory) {
          m = false;
        }
        u = false;
        if (x) {
          if (m) {
            b = [];
          } else {
            b = "";
          }
        }
      }
      var F = {
        add: function () {
          if (b) {
            if (m && !u) {
              M = b.length - 1;
              w.push(m);
            }
            (function H(X) {
              d.each(X, function (U, Y) {
                if (T(Y)) {
                  if (!h.unique || !F.has(Y)) {
                    b.push(Y);
                  }
                } else if (Y && Y.length && P(Y) !== "string") {
                  H(Y);
                }
              });
            })(arguments);
            if (m && !u) {
              R();
            }
          }
          return this;
        },
        remove: function () {
          d.each(arguments, function (H, X) {
            for (var U; (U = d.inArray(X, b, U)) > -1;) {
              b.splice(U, 1);
              if (U <= M) {
                M--;
              }
            }
          });
          return this;
        },
        has: function (H) {
          if (H) {
            return d.inArray(H, b) > -1;
          } else {
            return b.length > 0;
          }
        },
        empty: function () {
          b &&= [];
          return this;
        },
        disable: function () {
          x = w = [];
          b = m = "";
          return this;
        },
        disabled: function () {
          return !b;
        },
        lock: function () {
          x = w = [];
          if (!m && !u) {
            b = m = "";
          }
          return this;
        },
        locked: function () {
          return !!x;
        },
        fireWith: function (H, X) {
          if (!x) {
            X = X || [];
            X = [H, X.slice ? X.slice() : X];
            w.push(X);
            if (!u) {
              R();
            }
          }
          return this;
        },
        fire: function () {
          F.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!y;
        }
      };
      return F;
    };
    function _t(h) {
      return h;
    }
    function Kt(h) {
      throw h;
    }
    function Xt(h, u, m, y) {
      var x;
      try {
        if (h && T(x = h.promise)) {
          x.call(h).done(u).fail(m);
        } else if (h && T(x = h.then)) {
          x.call(h, u, m);
        } else {
          u.apply(undefined, [h].slice(y));
        }
      } catch (b) {
        m.apply(undefined, [b]);
      }
    }
    d.extend({
      Deferred: function (h) {
        var u = [["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2], ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]];
        var m = "pending";
        var y = {
          state: function () {
            return m;
          },
          always: function () {
            x.done(arguments).fail(arguments);
            return this;
          },
          catch: function (b) {
            return y.then(null, b);
          },
          pipe: function () {
            var b = arguments;
            return d.Deferred(function (w) {
              d.each(u, function (M, R) {
                var F = T(b[R[4]]) && b[R[4]];
                x[R[1]](function () {
                  var H = F && F.apply(this, arguments);
                  if (H && T(H.promise)) {
                    H.promise().progress(w.notify).done(w.resolve).fail(w.reject);
                  } else {
                    w[R[0] + "With"](this, F ? [H] : arguments);
                  }
                });
              });
              b = null;
            }).promise();
          },
          then: function (b, w, M) {
            var R = 0;
            function F(H, X, U, Y) {
              return function () {
                var wt = this;
                var Ht = arguments;
                function Rt() {
                  var ce;
                  var gr;
                  if (!(H < R)) {
                    ce = U.apply(wt, Ht);
                    if (ce === X.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    gr = ce && (typeof ce == "object" || typeof ce == "function") && ce.then;
                    if (T(gr)) {
                      if (Y) {
                        gr.call(ce, F(R, X, _t, Y), F(R, X, Kt, Y));
                      } else {
                        R++;
                        gr.call(ce, F(R, X, _t, Y), F(R, X, Kt, Y), F(R, X, _t, X.notifyWith));
                      }
                    } else {
                      if (U !== _t) {
                        wt = undefined;
                        Ht = [ce];
                      }
                      (Y || X.resolveWith)(wt, Ht);
                    }
                  }
                }
                var Te = Y ? Rt : function () {
                  try {
                    Rt();
                  } catch (ce) {
                    if (d.Deferred.exceptionHook) {
                      d.Deferred.exceptionHook(ce, Te.error);
                    }
                    if (H + 1 >= R) {
                      if (U !== Kt) {
                        wt = undefined;
                        Ht = [ce];
                      }
                      X.rejectWith(wt, Ht);
                    }
                  }
                };
                if (H) {
                  Te();
                } else {
                  if (d.Deferred.getErrorHook) {
                    Te.error = d.Deferred.getErrorHook();
                  } else if (d.Deferred.getStackHook) {
                    Te.error = d.Deferred.getStackHook();
                  }
                  t.setTimeout(Te);
                }
              };
            }
            return d.Deferred(function (H) {
              u[0][3].add(F(0, H, T(M) ? M : _t, H.notifyWith));
              u[1][3].add(F(0, H, T(b) ? b : _t));
              u[2][3].add(F(0, H, T(w) ? w : Kt));
            }).promise();
          },
          promise: function (b) {
            if (b != null) {
              return d.extend(b, y);
            } else {
              return y;
            }
          }
        };
        var x = {};
        d.each(u, function (b, w) {
          var M = w[2];
          var R = w[5];
          y[w[1]] = M.add;
          if (R) {
            M.add(function () {
              m = R;
            }, u[3 - b][2].disable, u[3 - b][3].disable, u[0][2].lock, u[0][3].lock);
          }
          M.add(w[3].fire);
          x[w[0]] = function () {
            x[w[0] + "With"](this === x ? undefined : this, arguments);
            return this;
          };
          x[w[0] + "With"] = M.fireWith;
        });
        y.promise(x);
        if (h) {
          h.call(x, x);
        }
        return x;
      },
      when: function (h) {
        var u = arguments.length;
        var m = u;
        var y = Array(m);
        var x = s.call(arguments);
        var b = d.Deferred();
        function w(M) {
          return function (R) {
            y[M] = this;
            x[M] = arguments.length > 1 ? s.call(arguments) : R;
            if (! --u) {
              b.resolveWith(y, x);
            }
          };
        }
        if (u <= 1 && (Xt(h, b.done(w(m)).resolve, b.reject, !u), b.state() === "pending" || T(x[m] && x[m].then))) {
          return b.then();
        }
        while (m--) {
          Xt(x[m], w(m), b.reject);
        }
        return b.promise();
      }
    });
    var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    d.Deferred.exceptionHook = function (h, u) {
      if (t.console && t.console.warn && h && me.test(h.name)) {
        t.console.warn("jQuery.Deferred exception: " + h.message, h.stack, u);
      }
    };
    d.readyException = function (h) {
      t.setTimeout(function () {
        throw h;
      });
    };
    var Ee = d.Deferred();
    d.fn.ready = function (h) {
      Ee.then(h).catch(function (u) {
        d.readyException(u);
      });
      return this;
    };
    d.extend({
      isReady: false,
      readyWait: 1,
      ready: function (h) {
        if (!(h === true ? --d.readyWait : d.isReady)) {
          d.isReady = true;
          if (h === true || !(--d.readyWait > 0)) {
            Ee.resolveWith(E, [d]);
          }
        }
      }
    });
    d.ready.then = Ee.then;
    function fr() {
      E.removeEventListener("DOMContentLoaded", fr);
      t.removeEventListener("load", fr);
      d.ready();
    }
    if (E.readyState === "complete" || E.readyState !== "loading" && !E.documentElement.doScroll) {
      t.setTimeout(d.ready);
    } else {
      E.addEventListener("DOMContentLoaded", fr);
      t.addEventListener("load", fr);
    }
    function oe(h, u, m, y, x, b, w) {
      var M = 0;
      var R = h.length;
      var F = m == null;
      if (P(m) === "object") {
        x = true;
        for (M in m) {
          oe(h, u, M, m[M], true, b, w);
        }
      } else if (y !== undefined && (x = true, T(y) || (w = true), F && (w ? (u.call(h, y), u = null) : (F = u, u = function (H, X, U) {
        return F.call(d(H), U);
      })), u)) {
        for (; M < R; M++) {
          u(h[M], m, w ? y : y.call(h[M], M, u(h[M], m)));
        }
      }
      if (x) {
        return h;
      } else if (F) {
        return u.call(h);
      } else if (R) {
        return u(h[0], m);
      } else {
        return b;
      }
    }
    var Tn = /^-ms-/;
    var wn = /-([a-z])/g;
    function Ni(h, u) {
      return u.toUpperCase();
    }
    function Fe(h) {
      return h.replace(Tn, "ms-").replace(wn, Ni);
    }
    function Ze(h) {
      return h.nodeType === 1 || h.nodeType === 9 || !+h.nodeType;
    }
    function Qe() {
      this.expando = d.expando + Qe.uid++;
    }
    Qe.uid = 1;
    Qe.prototype = {
      cache: function (h) {
        var u = h[this.expando];
        if (!u) {
          u = {};
          if (Ze(h)) {
            if (h.nodeType) {
              h[this.expando] = u;
            } else {
              Object.defineProperty(h, this.expando, {
                value: u,
                configurable: true
              });
            }
          }
        }
        return u;
      },
      set: function (h, u, m) {
        var y;
        var x = this.cache(h);
        if (typeof u == "string") {
          x[Fe(u)] = m;
        } else {
          for (y in u) {
            x[Fe(y)] = u[y];
          }
        }
        return x;
      },
      get: function (h, u) {
        if (u === undefined) {
          return this.cache(h);
        } else {
          return h[this.expando] && h[this.expando][Fe(u)];
        }
      },
      access: function (h, u, m) {
        if (u === undefined || u && typeof u == "string" && m === undefined) {
          return this.get(h, u);
        } else {
          this.set(h, u, m);
          if (m !== undefined) {
            return m;
          } else {
            return u;
          }
        }
      },
      remove: function (h, u) {
        var m;
        var y = h[this.expando];
        if (y !== undefined) {
          if (u !== undefined) {
            if (Array.isArray(u)) {
              u = u.map(Fe);
            } else {
              u = Fe(u);
              u = u in y ? [u] : u.match(Dt) || [];
            }
            m = u.length;
            while (m--) {
              delete y[u[m]];
            }
          }
          if (u === undefined || d.isEmptyObject(y)) {
            if (h.nodeType) {
              h[this.expando] = undefined;
            } else {
              delete h[this.expando];
            }
          }
        }
      },
      hasData: function (h) {
        var u = h[this.expando];
        return u !== undefined && !d.isEmptyObject(u);
      }
    };
    var ft = new Qe();
    var be = new Qe();
    var Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var En = /[A-Z]/g;
    function kr(h) {
      if (h === "true") {
        return true;
      } else if (h === "false") {
        return false;
      } else if (h === "null") {
        return null;
      } else if (h === +h + "") {
        return +h;
      } else if (Ae.test(h)) {
        return JSON.parse(h);
      } else {
        return h;
      }
    }
    function Li(h, u, m) {
      var y;
      if (m === undefined && h.nodeType === 1) {
        y = "data-" + u.replace(En, "-$&").toLowerCase();
        m = h.getAttribute(y);
        if (typeof m == "string") {
          try {
            m = kr(m);
          } catch {}
          be.set(h, u, m);
        } else {
          m = undefined;
        }
      }
      return m;
    }
    d.extend({
      hasData: function (h) {
        return be.hasData(h) || ft.hasData(h);
      },
      data: function (h, u, m) {
        return be.access(h, u, m);
      },
      removeData: function (h, u) {
        be.remove(h, u);
      },
      _data: function (h, u, m) {
        return ft.access(h, u, m);
      },
      _removeData: function (h, u) {
        ft.remove(h, u);
      }
    });
    d.fn.extend({
      data: function (h, u) {
        var m;
        var y;
        var x;
        var b = this[0];
        var w = b && b.attributes;
        if (h === undefined) {
          if (this.length && (x = be.get(b), b.nodeType === 1 && !ft.get(b, "hasDataAttrs"))) {
            for (m = w.length; m--;) {
              if (w[m]) {
                y = w[m].name;
                if (y.indexOf("data-") === 0) {
                  y = Fe(y.slice(5));
                  Li(b, y, x[y]);
                }
              }
            }
            ft.set(b, "hasDataAttrs", true);
          }
          return x;
        }
        if (typeof h == "object") {
          return this.each(function () {
            be.set(this, h);
          });
        } else {
          return oe(this, function (M) {
            var R;
            if (b && M === undefined) {
              R = be.get(b, h);
              if (R !== undefined || (R = Li(b, h), R !== undefined)) {
                return R;
              } else {
                return undefined;
              }
            }
            this.each(function () {
              be.set(this, h, M);
            });
          }, null, u, arguments.length > 1, null, true);
        }
      },
      removeData: function (h) {
        return this.each(function () {
          be.remove(this, h);
        });
      }
    });
    d.extend({
      queue: function (h, u, m) {
        var y;
        if (h) {
          u = (u || "fx") + "queue";
          y = ft.get(h, u);
          if (m) {
            if (!y || Array.isArray(m)) {
              y = ft.access(h, u, d.makeArray(m));
            } else {
              y.push(m);
            }
          }
          return y || [];
        }
      },
      dequeue: function (h, u) {
        u = u || "fx";
        var m = d.queue(h, u);
        var y = m.length;
        var x = m.shift();
        var b = d._queueHooks(h, u);
        function w() {
          d.dequeue(h, u);
        }
        if (x === "inprogress") {
          x = m.shift();
          y--;
        }
        if (x) {
          if (u === "fx") {
            m.unshift("inprogress");
          }
          delete b.stop;
          x.call(h, w, b);
        }
        if (!y && b) {
          b.empty.fire();
        }
      },
      _queueHooks: function (h, u) {
        var m = u + "queueHooks";
        return ft.get(h, m) || ft.access(h, m, {
          empty: d.Callbacks("once memory").add(function () {
            ft.remove(h, [u + "queue", m]);
          })
        });
      }
    });
    d.fn.extend({
      queue: function (h, u) {
        var m = 2;
        if (typeof h != "string") {
          u = h;
          h = "fx";
          m--;
        }
        if (arguments.length < m) {
          return d.queue(this[0], h);
        } else if (u === undefined) {
          return this;
        } else {
          return this.each(function () {
            var y = d.queue(this, h, u);
            d._queueHooks(this, h);
            if (h === "fx" && y[0] !== "inprogress") {
              d.dequeue(this, h);
            }
          });
        }
      },
      dequeue: function (h) {
        return this.each(function () {
          d.dequeue(this, h);
        });
      },
      clearQueue: function (h) {
        return this.queue(h || "fx", []);
      },
      promise: function (h, u) {
        var m;
        var y = 1;
        var x = d.Deferred();
        var b = this;
        var w = this.length;
        function M() {
          if (! --y) {
            x.resolveWith(b, [b]);
          }
        }
        if (typeof h != "string") {
          u = h;
          h = undefined;
        }
        h = h || "fx";
        while (w--) {
          m = ft.get(b[w], h + "queueHooks");
          if (m && m.empty) {
            y++;
            m.empty.add(M);
          }
        }
        M();
        return x.promise(u);
      }
    });
    var pi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var Ur = new RegExp("^(?:([+-])=|)(" + pi + ")([a-z%]*)$", "i");
    var et = ["Top", "Right", "Bottom", "Left"];
    var St = E.documentElement;
    function Wt(h) {
      return d.contains(h.ownerDocument, h);
    }
    var ie = {
      composed: true
    };
    if (St.getRootNode) {
      Wt = function (h) {
        return d.contains(h.ownerDocument, h) || h.getRootNode(ie) === h.ownerDocument;
      };
    }
    function le(h, u) {
      h = u || h;
      return h.style.display === "none" || h.style.display === "" && Wt(h) && d.css(h, "display") === "none";
    }
    function ye(h, u, m, y) {
      var x;
      var b;
      var w = 20;
      var M = y ? function () {
        return y.cur();
      } : function () {
        return d.css(h, u, "");
      };
      var R = M();
      var F = m && m[3] || (d.cssNumber[u] ? "" : "px");
      var H = h.nodeType && (d.cssNumber[u] || F !== "px" && +R) && Ur.exec(d.css(h, u));
      if (H && H[3] !== F) {
        R = R / 2;
        F = F || H[3];
        H = +R || 1;
        while (w--) {
          d.style(h, u, H + F);
          if ((1 - b) * (1 - (b = M() / R || 0.5)) <= 0) {
            w = 0;
          }
          H = H / b;
        }
        H = H * 2;
        d.style(h, u, H + F);
        m = m || [];
      }
      if (m) {
        H = +H || +R || 0;
        x = m[1] ? H + (m[1] + 1) * m[2] : +m[2];
        if (y) {
          y.unit = F;
          y.start = H;
          y.end = x;
        }
      }
      return x;
    }
    var Ge = {};
    function Gr(h) {
      var u;
      var m = h.ownerDocument;
      var y = h.nodeName;
      var x = Ge[y];
      return x || (u = m.body.appendChild(m.createElement(y)), x = d.css(u, "display"), u.parentNode.removeChild(u), x === "none" && (x = "block"), Ge[y] = x, x);
    }
    function Je(h, u) {
      var m;
      var y;
      var x = [];
      for (var b = 0, w = h.length; b < w; b++) {
        y = h[b];
        if (y.style) {
          m = y.style.display;
          if (u) {
            if (m === "none") {
              x[b] = ft.get(y, "display") || null;
              if (!x[b]) {
                y.style.display = "";
              }
            }
            if (y.style.display === "" && le(y)) {
              x[b] = Gr(y);
            }
          } else if (m !== "none") {
            x[b] = "none";
            ft.set(y, "display", m);
          }
        }
      }
      for (b = 0; b < w; b++) {
        if (x[b] != null) {
          h[b].style.display = x[b];
        }
      }
      return h;
    }
    d.fn.extend({
      show: function () {
        return Je(this, true);
      },
      hide: function () {
        return Je(this);
      },
      toggle: function (h) {
        if (typeof h == "boolean") {
          if (h) {
            return this.show();
          } else {
            return this.hide();
          }
        } else {
          return this.each(function () {
            if (le(this)) {
              d(this).show();
            } else {
              d(this).hide();
            }
          });
        }
      }
    });
    var pr = /^(?:checkbox|radio)$/i;
    var Zr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var ps = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var h = E.createDocumentFragment();
      var u = h.appendChild(E.createElement("div"));
      var m = E.createElement("input");
      m.setAttribute("type", "radio");
      m.setAttribute("checked", "checked");
      m.setAttribute("name", "t");
      u.appendChild(m);
      _.checkClone = u.cloneNode(true).cloneNode(true).lastChild.checked;
      u.innerHTML = "<textarea>x</textarea>";
      _.noCloneChecked = !!u.cloneNode(true).lastChild.defaultValue;
      u.innerHTML = "<option></option>";
      _.option = !!u.lastChild;
    })();
    var Oe = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead;
    Oe.th = Oe.td;
    if (!_.option) {
      Oe.optgroup = Oe.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    function ue(h, u) {
      var m;
      if (typeof h.getElementsByTagName !== "undefined") {
        m = h.getElementsByTagName(u || "*");
      } else if (typeof h.querySelectorAll !== "undefined") {
        m = h.querySelectorAll(u || "*");
      } else {
        m = [];
      }
      if (u === undefined || u && N(h, u)) {
        return d.merge([h], m);
      } else {
        return m;
      }
    }
    function ki(h, u) {
      for (var m = 0, y = h.length; m < y; m++) {
        ft.set(h[m], "globalEval", !u || ft.get(u[m], "globalEval"));
      }
    }
    var gs = /<|&#?\w+;/;
    function An(h, u, m, y, x) {
      var b;
      var w;
      var M;
      var R;
      var F;
      var H;
      var X = u.createDocumentFragment();
      var U = [];
      for (var Y = 0, wt = h.length; Y < wt; Y++) {
        b = h[Y];
        if (b || b === 0) {
          if (P(b) === "object") {
            d.merge(U, b.nodeType ? [b] : b);
          } else if (!gs.test(b)) {
            U.push(u.createTextNode(b));
          } else {
            w = w || X.appendChild(u.createElement("div"));
            M = (Zr.exec(b) || ["", ""])[1].toLowerCase();
            R = Oe[M] || Oe._default;
            w.innerHTML = R[1] + d.htmlPrefilter(b) + R[2];
            H = R[0];
            while (H--) {
              w = w.lastChild;
            }
            d.merge(U, w.childNodes);
            w = X.firstChild;
            w.textContent = "";
          }
        }
      }
      X.textContent = "";
      Y = 0;
      while (b = U[Y++]) {
        if (y && d.inArray(b, y) > -1) {
          if (x) {
            x.push(b);
          }
          continue;
        }
        F = Wt(b);
        w = ue(X.appendChild(b), "script");
        if (F) {
          ki(w);
        }
        if (m) {
          for (H = 0; b = w[H++];) {
            if (ps.test(b.type || "")) {
              m.push(b);
            }
          }
        }
      }
      return X;
    }
    var Jt = /^([^.]*)(?:\.(.+)|)/;
    function te() {
      return true;
    }
    function Re() {
      return false;
    }
    function He(h, u, m, y, x, b) {
      var w;
      var M;
      if (typeof u == "object") {
        if (typeof m != "string") {
          y = y || m;
          m = undefined;
        }
        for (M in u) {
          He(h, M, m, y, u[M], b);
        }
        return h;
      }
      if (y == null && x == null) {
        x = m;
        y = m = undefined;
      } else if (x == null) {
        if (typeof m == "string") {
          x = y;
          y = undefined;
        } else {
          x = y;
          y = m;
          m = undefined;
        }
      }
      if (x === false) {
        x = Re;
      } else if (!x) {
        return h;
      }
      if (b === 1) {
        w = x;
        x = function (R) {
          d().off(R);
          return w.apply(this, arguments);
        };
        x.guid = w.guid ||= d.guid++;
      }
      return h.each(function () {
        d.event.add(this, u, x, y, m);
      });
    }
    d.event = {
      global: {},
      add: function (h, u, m, y, x) {
        var b;
        var w;
        var M;
        var R;
        var F;
        var H;
        var X;
        var U;
        var Y;
        var wt;
        var Ht;
        var Rt = ft.get(h);
        if (Ze(h)) {
          if (m.handler) {
            b = m;
            m = b.handler;
            x = b.selector;
          }
          if (x) {
            d.find.matchesSelector(St, x);
          }
          m.guid ||= d.guid++;
          if (!(R = Rt.events)) {
            R = Rt.events = Object.create(null);
          }
          if (!(w = Rt.handle)) {
            w = Rt.handle = function (Te) {
              if (typeof d !== "undefined" && d.event.triggered !== Te.type) {
                return d.event.dispatch.apply(h, arguments);
              } else {
                return undefined;
              }
            };
          }
          u = (u || "").match(Dt) || [""];
          F = u.length;
          while (F--) {
            M = Jt.exec(u[F]) || [];
            Y = Ht = M[1];
            wt = (M[2] || "").split(".").sort();
            if (Y) {
              X = d.event.special[Y] || {};
              Y = (x ? X.delegateType : X.bindType) || Y;
              X = d.event.special[Y] || {};
              H = d.extend({
                type: Y,
                origType: Ht,
                data: y,
                handler: m,
                guid: m.guid,
                selector: x,
                needsContext: x && d.expr.match.needsContext.test(x),
                namespace: wt.join(".")
              }, b);
              if (!(U = R[Y])) {
                U = R[Y] = [];
                U.delegateCount = 0;
                if ((!X.setup || X.setup.call(h, y, wt, w) === false) && h.addEventListener) {
                  h.addEventListener(Y, w);
                }
              }
              if (X.add) {
                X.add.call(h, H);
                H.handler.guid ||= m.guid;
              }
              if (x) {
                U.splice(U.delegateCount++, 0, H);
              } else {
                U.push(H);
              }
              d.event.global[Y] = true;
            }
          }
        }
      },
      remove: function (h, u, m, y, x) {
        var b;
        var w;
        var M;
        var R;
        var F;
        var H;
        var X;
        var U;
        var Y;
        var wt;
        var Ht;
        var Rt = ft.hasData(h) && ft.get(h);
        if (!!Rt && !!(R = Rt.events)) {
          u = (u || "").match(Dt) || [""];
          F = u.length;
          while (F--) {
            M = Jt.exec(u[F]) || [];
            Y = Ht = M[1];
            wt = (M[2] || "").split(".").sort();
            if (!Y) {
              for (Y in R) {
                d.event.remove(h, Y + u[F], m, y, true);
              }
              continue;
            }
            X = d.event.special[Y] || {};
            Y = (y ? X.delegateType : X.bindType) || Y;
            U = R[Y] || [];
            M = M[2] && new RegExp("(^|\\.)" + wt.join("\\.(?:.*\\.|)") + "(\\.|$)");
            w = b = U.length;
            while (b--) {
              H = U[b];
              if ((x || Ht === H.origType) && (!m || m.guid === H.guid) && (!M || M.test(H.namespace)) && (!y || y === H.selector || y === "**" && H.selector)) {
                U.splice(b, 1);
                if (H.selector) {
                  U.delegateCount--;
                }
                if (X.remove) {
                  X.remove.call(h, H);
                }
              }
            }
            if (w && !U.length) {
              if (!X.teardown || X.teardown.call(h, wt, Rt.handle) === false) {
                d.removeEvent(h, Y, Rt.handle);
              }
              delete R[Y];
            }
          }
          if (d.isEmptyObject(R)) {
            ft.remove(h, "handle events");
          }
        }
      },
      dispatch: function (h) {
        var u;
        var m;
        var y;
        var x;
        var b;
        var w;
        var M = new Array(arguments.length);
        var R = d.event.fix(h);
        var F = (ft.get(this, "events") || Object.create(null))[R.type] || [];
        var H = d.event.special[R.type] || {};
        M[0] = R;
        u = 1;
        for (; u < arguments.length; u++) {
          M[u] = arguments[u];
        }
        R.delegateTarget = this;
        if (!H.preDispatch || H.preDispatch.call(this, R) !== false) {
          w = d.event.handlers.call(this, R, F);
          u = 0;
          while ((x = w[u++]) && !R.isPropagationStopped()) {
            R.currentTarget = x.elem;
            m = 0;
            while ((b = x.handlers[m++]) && !R.isImmediatePropagationStopped()) {
              if (!R.rnamespace || b.namespace === false || R.rnamespace.test(b.namespace)) {
                R.handleObj = b;
                R.data = b.data;
                y = ((d.event.special[b.origType] || {}).handle || b.handler).apply(x.elem, M);
                if (y !== undefined && (R.result = y) === false) {
                  R.preventDefault();
                  R.stopPropagation();
                }
              }
            }
          }
          if (H.postDispatch) {
            H.postDispatch.call(this, R);
          }
          return R.result;
        }
      },
      handlers: function (h, u) {
        var m;
        var y;
        var x;
        var b;
        var w;
        var M = [];
        var R = u.delegateCount;
        var F = h.target;
        if (R && F.nodeType && (h.type !== "click" || !(h.button >= 1))) {
          for (; F !== this; F = F.parentNode || this) {
            if (F.nodeType === 1 && (h.type !== "click" || F.disabled !== true)) {
              b = [];
              w = {};
              m = 0;
              for (; m < R; m++) {
                y = u[m];
                x = y.selector + " ";
                if (w[x] === undefined) {
                  w[x] = y.needsContext ? d(x, this).index(F) > -1 : d.find(x, this, null, [F]).length;
                }
                if (w[x]) {
                  b.push(y);
                }
              }
              if (b.length) {
                M.push({
                  elem: F,
                  handlers: b
                });
              }
            }
          }
        }
        F = this;
        if (R < u.length) {
          M.push({
            elem: F,
            handlers: u.slice(R)
          });
        }
        return M;
      },
      addProp: function (h, u) {
        Object.defineProperty(d.Event.prototype, h, {
          enumerable: true,
          configurable: true,
          get: T(u) ? function () {
            if (this.originalEvent) {
              return u(this.originalEvent);
            }
          } : function () {
            if (this.originalEvent) {
              return this.originalEvent[h];
            }
          },
          set: function (m) {
            Object.defineProperty(this, h, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: m
            });
          }
        });
      },
      fix: function (h) {
        if (h[d.expando]) {
          return h;
        } else {
          return new d.Event(h);
        }
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function (h) {
            var u = this || h;
            if (pr.test(u.type) && u.click && N(u, "input")) {
              Ui(u, "click", true);
            }
            return false;
          },
          trigger: function (h) {
            var u = this || h;
            if (pr.test(u.type) && u.click && N(u, "input")) {
              Ui(u, "click");
            }
            return true;
          },
          _default: function (h) {
            var u = h.target;
            return pr.test(u.type) && u.click && N(u, "input") && ft.get(u, "click") || N(u, "a");
          }
        },
        beforeunload: {
          postDispatch: function (h) {
            if (h.result !== undefined && h.originalEvent) {
              h.originalEvent.returnValue = h.result;
            }
          }
        }
      }
    };
    function Ui(h, u, m) {
      if (!m) {
        if (ft.get(h, u) === undefined) {
          d.event.add(h, u, te);
        }
        return;
      }
      ft.set(h, u, false);
      d.event.add(h, u, {
        namespace: false,
        handler: function (y) {
          var x;
          var b = ft.get(this, u);
          if (y.isTrigger & 1 && this[u]) {
            if (b) {
              if ((d.event.special[u] || {}).delegateType) {
                y.stopPropagation();
              }
            } else {
              b = s.call(arguments);
              ft.set(this, u, b);
              this[u]();
              x = ft.get(this, u);
              ft.set(this, u, false);
              if (b !== x) {
                y.stopImmediatePropagation();
                y.preventDefault();
                return x;
              }
            }
          } else if (b) {
            ft.set(this, u, d.event.trigger(b[0], b.slice(1), this));
            y.stopPropagation();
            y.isImmediatePropagationStopped = te;
          }
        }
      });
    }
    d.removeEvent = function (h, u, m) {
      if (h.removeEventListener) {
        h.removeEventListener(u, m);
      }
    };
    d.Event = function (h, u) {
      if (!(this instanceof d.Event)) {
        return new d.Event(h, u);
      }
      if (h && h.type) {
        this.originalEvent = h;
        this.type = h.type;
        this.isDefaultPrevented = h.defaultPrevented || h.defaultPrevented === undefined && h.returnValue === false ? te : Re;
        this.target = h.target && h.target.nodeType === 3 ? h.target.parentNode : h.target;
        this.currentTarget = h.currentTarget;
        this.relatedTarget = h.relatedTarget;
      } else {
        this.type = h;
      }
      if (u) {
        d.extend(this, u);
      }
      this.timeStamp = h && h.timeStamp || Date.now();
      this[d.expando] = true;
    };
    d.Event.prototype = {
      constructor: d.Event,
      isDefaultPrevented: Re,
      isPropagationStopped: Re,
      isImmediatePropagationStopped: Re,
      isSimulated: false,
      preventDefault: function () {
        var h = this.originalEvent;
        this.isDefaultPrevented = te;
        if (h && !this.isSimulated) {
          h.preventDefault();
        }
      },
      stopPropagation: function () {
        var h = this.originalEvent;
        this.isPropagationStopped = te;
        if (h && !this.isSimulated) {
          h.stopPropagation();
        }
      },
      stopImmediatePropagation: function () {
        var h = this.originalEvent;
        this.isImmediatePropagationStopped = te;
        if (h && !this.isSimulated) {
          h.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    d.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      char: true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, d.event.addProp);
    d.each({
      focus: "focusin",
      blur: "focusout"
    }, function (h, u) {
      function m(y) {
        if (E.documentMode) {
          var x = ft.get(this, "handle");
          var b = d.event.fix(y);
          b.type = y.type === "focusin" ? "focus" : "blur";
          b.isSimulated = true;
          x(y);
          if (b.target === b.currentTarget) {
            x(b);
          }
        } else {
          d.event.simulate(u, y.target, d.event.fix(y));
        }
      }
      d.event.special[h] = {
        setup: function () {
          var y;
          Ui(this, h, true);
          if (E.documentMode) {
            y = ft.get(this, u);
            if (!y) {
              this.addEventListener(u, m);
            }
            ft.set(this, u, (y || 0) + 1);
          } else {
            return false;
          }
        },
        trigger: function () {
          Ui(this, h);
          return true;
        },
        teardown: function () {
          var y;
          if (E.documentMode) {
            y = ft.get(this, u) - 1;
            if (y) {
              ft.set(this, u, y);
            } else {
              this.removeEventListener(u, m);
              ft.remove(this, u);
            }
          } else {
            return false;
          }
        },
        _default: function (y) {
          return ft.get(y.target, h);
        },
        delegateType: u
      };
      d.event.special[u] = {
        setup: function () {
          var y = this.ownerDocument || this.document || this;
          var x = E.documentMode ? this : y;
          var b = ft.get(x, u);
          if (!b) {
            if (E.documentMode) {
              this.addEventListener(u, m);
            } else {
              y.addEventListener(h, m, true);
            }
          }
          ft.set(x, u, (b || 0) + 1);
        },
        teardown: function () {
          var y = this.ownerDocument || this.document || this;
          var x = E.documentMode ? this : y;
          var b = ft.get(x, u) - 1;
          if (b) {
            ft.set(x, u, b);
          } else {
            if (E.documentMode) {
              this.removeEventListener(u, m);
            } else {
              y.removeEventListener(h, m, true);
            }
            ft.remove(x, u);
          }
        }
      };
    });
    d.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (h, u) {
      d.event.special[h] = {
        delegateType: u,
        bindType: u,
        handle: function (m) {
          var y;
          var x = this;
          var b = m.relatedTarget;
          var w = m.handleObj;
          if (!b || b !== x && !d.contains(x, b)) {
            m.type = w.origType;
            y = w.handler.apply(this, arguments);
            m.type = u;
          }
          return y;
        }
      };
    });
    d.fn.extend({
      on: function (h, u, m, y) {
        return He(this, h, u, m, y);
      },
      one: function (h, u, m, y) {
        return He(this, h, u, m, y, 1);
      },
      off: function (h, u, m) {
        var y;
        var x;
        if (h && h.preventDefault && h.handleObj) {
          y = h.handleObj;
          d(h.delegateTarget).off(y.namespace ? y.origType + "." + y.namespace : y.origType, y.selector, y.handler);
          return this;
        }
        if (typeof h == "object") {
          for (x in h) {
            this.off(x, u, h[x]);
          }
          return this;
        }
        if (u === false || typeof u == "function") {
          m = u;
          u = undefined;
        }
        if (m === false) {
          m = Re;
        }
        return this.each(function () {
          d.event.remove(this, h, m, u);
        });
      }
    });
    var ms = /<script|<style|<link/i;
    var np = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var sp = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Dl(h, u) {
      return N(h, "table") && N(u.nodeType !== 11 ? u : u.firstChild, "tr") && d(h).children("tbody")[0] || h;
    }
    function ap(h) {
      h.type = (h.getAttribute("type") !== null) + "/" + h.type;
      return h;
    }
    function op(h) {
      if ((h.type || "").slice(0, 5) === "true/") {
        h.type = h.type.slice(5);
      } else {
        h.removeAttribute("type");
      }
      return h;
    }
    function Bl(h, u) {
      var m;
      var y;
      var x;
      var b;
      var w;
      var M;
      var R;
      if (u.nodeType === 1) {
        if (ft.hasData(h) && (b = ft.get(h), R = b.events, R)) {
          ft.remove(u, "handle events");
          for (x in R) {
            m = 0;
            y = R[x].length;
            for (; m < y; m++) {
              d.event.add(u, x, R[x][m]);
            }
          }
        }
        if (be.hasData(h)) {
          w = be.access(h);
          M = d.extend({}, w);
          be.set(u, M);
        }
      }
    }
    function hp(h, u) {
      var m = u.nodeName.toLowerCase();
      if (m === "input" && pr.test(h.type)) {
        u.checked = h.checked;
      } else if (m === "input" || m === "textarea") {
        u.defaultValue = h.defaultValue;
      }
    }
    function Gi(h, u, m, y) {
      u = a(u);
      var x;
      var b;
      var w;
      var M;
      var R;
      var F;
      var H = 0;
      var X = h.length;
      var U = X - 1;
      var Y = u[0];
      var wt = T(Y);
      if (wt || X > 1 && typeof Y == "string" && !_.checkClone && np.test(Y)) {
        return h.each(function (Ht) {
          var Rt = h.eq(Ht);
          if (wt) {
            u[0] = Y.call(this, Ht, Rt.html());
          }
          Gi(Rt, u, m, y);
        });
      }
      if (X && (x = An(u, h[0].ownerDocument, false, h, y), b = x.firstChild, x.childNodes.length === 1 && (x = b), b || y)) {
        w = d.map(ue(x, "script"), ap);
        M = w.length;
        for (; H < X; H++) {
          R = x;
          if (H !== U) {
            R = d.clone(R, true, true);
            if (M) {
              d.merge(w, ue(R, "script"));
            }
          }
          m.call(h[H], R, H);
        }
        if (M) {
          F = w[w.length - 1].ownerDocument;
          d.map(w, op);
          H = 0;
          for (; H < M; H++) {
            R = w[H];
            if (ps.test(R.type || "") && !ft.access(R, "globalEval") && d.contains(F, R)) {
              if (R.src && (R.type || "").toLowerCase() !== "module") {
                if (d._evalUrl && !R.noModule) {
                  d._evalUrl(R.src, {
                    nonce: R.nonce || R.getAttribute("nonce")
                  }, F);
                }
              } else {
                S(R.textContent.replace(sp, ""), R, F);
              }
            }
          }
        }
      }
      return h;
    }
    function Fl(h, u, m) {
      for (var y, x = u ? d.filter(u, h) : h, b = 0; (y = x[b]) != null; b++) {
        if (!m && y.nodeType === 1) {
          d.cleanData(ue(y));
        }
        if (y.parentNode) {
          if (m && Wt(y)) {
            ki(ue(y, "script"));
          }
          y.parentNode.removeChild(y);
        }
      }
      return h;
    }
    d.extend({
      htmlPrefilter: function (h) {
        return h;
      },
      clone: function (h, u, m) {
        var y;
        var x;
        var b;
        var w;
        var M = h.cloneNode(true);
        var R = Wt(h);
        if (!_.noCloneChecked && (h.nodeType === 1 || h.nodeType === 11) && !d.isXMLDoc(h)) {
          w = ue(M);
          b = ue(h);
          y = 0;
          x = b.length;
          for (; y < x; y++) {
            hp(b[y], w[y]);
          }
        }
        if (u) {
          if (m) {
            b = b || ue(h);
            w = w || ue(M);
            y = 0;
            x = b.length;
            for (; y < x; y++) {
              Bl(b[y], w[y]);
            }
          } else {
            Bl(h, M);
          }
        }
        w = ue(M, "script");
        if (w.length > 0) {
          ki(w, !R && ue(h, "script"));
        }
        return M;
      },
      cleanData: function (h) {
        var u;
        for (var m, y, x = d.event.special, b = 0; (m = h[b]) !== undefined; b++) {
          if (Ze(m)) {
            if (u = m[ft.expando]) {
              if (u.events) {
                for (y in u.events) {
                  if (x[y]) {
                    d.event.remove(m, y);
                  } else {
                    d.removeEvent(m, y, u.handle);
                  }
                }
              }
              m[ft.expando] = undefined;
            }
            m[be.expando] &&= undefined;
          }
        }
      }
    });
    d.fn.extend({
      detach: function (h) {
        return Fl(this, h, true);
      },
      remove: function (h) {
        return Fl(this, h);
      },
      text: function (h) {
        return oe(this, function (u) {
          if (u === undefined) {
            return d.text(this);
          } else {
            return this.empty().each(function () {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = u;
              }
            });
          }
        }, null, h, arguments.length);
      },
      append: function () {
        return Gi(this, arguments, function (h) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var u = Dl(this, h);
            u.appendChild(h);
          }
        });
      },
      prepend: function () {
        return Gi(this, arguments, function (h) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var u = Dl(this, h);
            u.insertBefore(h, u.firstChild);
          }
        });
      },
      before: function () {
        return Gi(this, arguments, function (h) {
          if (this.parentNode) {
            this.parentNode.insertBefore(h, this);
          }
        });
      },
      after: function () {
        return Gi(this, arguments, function (h) {
          if (this.parentNode) {
            this.parentNode.insertBefore(h, this.nextSibling);
          }
        });
      },
      empty: function () {
        for (var h, u = 0; (h = this[u]) != null; u++) {
          if (h.nodeType === 1) {
            d.cleanData(ue(h, false));
            h.textContent = "";
          }
        }
        return this;
      },
      clone: function (h, u) {
        h = h ?? false;
        u = u ?? h;
        return this.map(function () {
          return d.clone(this, h, u);
        });
      },
      html: function (h) {
        return oe(this, function (u) {
          var m = this[0] || {};
          var y = 0;
          var x = this.length;
          if (u === undefined && m.nodeType === 1) {
            return m.innerHTML;
          }
          if (typeof u == "string" && !ms.test(u) && !Oe[(Zr.exec(u) || ["", ""])[1].toLowerCase()]) {
            u = d.htmlPrefilter(u);
            try {
              for (; y < x; y++) {
                m = this[y] || {};
                if (m.nodeType === 1) {
                  d.cleanData(ue(m, false));
                  m.innerHTML = u;
                }
              }
              m = 0;
            } catch {}
          }
          if (m) {
            this.empty().append(u);
          }
        }, null, h, arguments.length);
      },
      replaceWith: function () {
        var h = [];
        return Gi(this, arguments, function (u) {
          var m = this.parentNode;
          if (d.inArray(this, h) < 0) {
            d.cleanData(ue(this));
            if (m) {
              m.replaceChild(u, this);
            }
          }
        }, h);
      }
    });
    d.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (h, u) {
      d.fn[h] = function (m) {
        var y;
        var x = [];
        var b = d(m);
        for (var w = b.length - 1, M = 0; M <= w; M++) {
          y = M === w ? this : this.clone(true);
          d(b[M])[u](y);
          o.apply(x, y.get());
        }
        return this.pushStack(x);
      };
    });
    var Ka = new RegExp("^(" + pi + ")(?!px)[a-z%]+$", "i");
    var Za = /^--/;
    function ys(h) {
      var u = h.ownerDocument.defaultView;
      if (!u || !u.opener) {
        u = t;
      }
      return u.getComputedStyle(h);
    }
    function Ol(h, u, m) {
      var y;
      var x;
      var b = {};
      for (x in u) {
        b[x] = h.style[x];
        h.style[x] = u[x];
      }
      y = m.call(h);
      for (x in u) {
        h.style[x] = b[x];
      }
      return y;
    }
    var lp = new RegExp(et.join("|"), "i");
    (function () {
      function h() {
        if (F) {
          R.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          F.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          St.appendChild(R).appendChild(F);
          var H = t.getComputedStyle(F);
          m = H.top !== "1%";
          M = u(H.marginLeft) === 12;
          F.style.right = "60%";
          b = u(H.right) === 36;
          y = u(H.width) === 36;
          F.style.position = "absolute";
          x = u(F.offsetWidth / 3) === 12;
          St.removeChild(R);
          F = null;
        }
      }
      function u(H) {
        return Math.round(parseFloat(H));
      }
      var m;
      var y;
      var x;
      var b;
      var w;
      var M;
      var R = E.createElement("div");
      var F = E.createElement("div");
      if (F.style) {
        F.style.backgroundClip = "content-box";
        F.cloneNode(true).style.backgroundClip = "";
        _.clearCloneStyle = F.style.backgroundClip === "content-box";
        d.extend(_, {
          boxSizingReliable: function () {
            h();
            return y;
          },
          pixelBoxStyles: function () {
            h();
            return b;
          },
          pixelPosition: function () {
            h();
            return m;
          },
          reliableMarginLeft: function () {
            h();
            return M;
          },
          scrollboxSize: function () {
            h();
            return x;
          },
          reliableTrDimensions: function () {
            var H;
            var X;
            var U;
            var Y;
            if (w == null) {
              H = E.createElement("table");
              X = E.createElement("tr");
              U = E.createElement("div");
              H.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              X.style.cssText = "box-sizing:content-box;border:1px solid";
              X.style.height = "1px";
              U.style.height = "9px";
              U.style.display = "block";
              St.appendChild(H).appendChild(X).appendChild(U);
              Y = t.getComputedStyle(X);
              w = parseInt(Y.height, 10) + parseInt(Y.borderTopWidth, 10) + parseInt(Y.borderBottomWidth, 10) === X.offsetHeight;
              St.removeChild(H);
            }
            return w;
          }
        });
      }
    })();
    function Sn(h, u, m) {
      var y;
      var x;
      var b;
      var w;
      var M = Za.test(u);
      var R = h.style;
      m = m || ys(h);
      if (m) {
        w = m.getPropertyValue(u) || m[u];
        if (M && w) {
          w = w.replace(W, "$1") || undefined;
        }
        if (w === "" && !Wt(h)) {
          w = d.style(h, u);
        }
        if (!_.pixelBoxStyles() && Ka.test(w) && lp.test(u)) {
          y = R.width;
          x = R.minWidth;
          b = R.maxWidth;
          R.minWidth = R.maxWidth = R.width = w;
          w = m.width;
          R.width = y;
          R.minWidth = x;
          R.maxWidth = b;
        }
      }
      if (w !== undefined) {
        return w + "";
      } else {
        return w;
      }
    }
    function Nl(h, u) {
      return {
        get: function () {
          if (h()) {
            delete this.get;
            return;
          }
          return (this.get = u).apply(this, arguments);
        }
      };
    }
    var Ll = ["Webkit", "Moz", "ms"];
    var kl = E.createElement("div").style;
    var Ul = {};
    function up(h) {
      var u = h[0].toUpperCase() + h.slice(1);
      for (var m = Ll.length; m--;) {
        h = Ll[m] + u;
        if (h in kl) {
          return h;
        }
      }
    }
    function Qa(h) {
      var u = d.cssProps[h] || Ul[h];
      return u || (h in kl ? h : Ul[h] = up(h) || h);
    }
    var cp = /^(none|table(?!-c[ea]).+)/;
    var dp = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    };
    var Gl = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Hl(h, u, m) {
      var y = Ur.exec(u);
      if (y) {
        return Math.max(0, y[2] - (m || 0)) + (y[3] || "px");
      } else {
        return u;
      }
    }
    function Ja(h, u, m, y, x, b) {
      var w = u === "width" ? 1 : 0;
      var M = 0;
      var R = 0;
      var F = 0;
      if (m === (y ? "border" : "content")) {
        return 0;
      }
      for (; w < 4; w += 2) {
        if (m === "margin") {
          F += d.css(h, m + et[w], true, x);
        }
        if (y) {
          if (m === "content") {
            R -= d.css(h, "padding" + et[w], true, x);
          }
          if (m !== "margin") {
            R -= d.css(h, "border" + et[w] + "Width", true, x);
          }
        } else {
          R += d.css(h, "padding" + et[w], true, x);
          if (m !== "padding") {
            R += d.css(h, "border" + et[w] + "Width", true, x);
          } else {
            M += d.css(h, "border" + et[w] + "Width", true, x);
          }
        }
      }
      if (!y && b >= 0) {
        R += Math.max(0, Math.ceil(h["offset" + u[0].toUpperCase() + u.slice(1)] - b - R - M - 0.5)) || 0;
      }
      return R + F;
    }
    function $l(h, u, m) {
      var y = ys(h);
      var x = !_.boxSizingReliable() || m;
      var b = x && d.css(h, "boxSizing", false, y) === "border-box";
      var w = b;
      var M = Sn(h, u, y);
      var R = "offset" + u[0].toUpperCase() + u.slice(1);
      if (Ka.test(M)) {
        if (!m) {
          return M;
        }
        M = "auto";
      }
      if ((!_.boxSizingReliable() && b || !_.reliableTrDimensions() && N(h, "tr") || M === "auto" || !parseFloat(M) && d.css(h, "display", false, y) === "inline") && h.getClientRects().length) {
        b = d.css(h, "boxSizing", false, y) === "border-box";
        w = R in h;
        if (w) {
          M = h[R];
        }
      }
      M = parseFloat(M) || 0;
      return M + Ja(h, u, m || (b ? "border" : "content"), w, y, M) + "px";
    }
    d.extend({
      cssHooks: {
        opacity: {
          get: function (h, u) {
            if (u) {
              var m = Sn(h, "opacity");
              if (m === "") {
                return "1";
              } else {
                return m;
              }
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageSlice: true,
        columnCount: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        scale: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeMiterlimit: true,
        strokeOpacity: true
      },
      cssProps: {},
      style: function (h, u, m, y) {
        if (!!h && h.nodeType !== 3 && h.nodeType !== 8 && !!h.style) {
          var x;
          var b;
          var w;
          var M = Fe(u);
          var R = Za.test(u);
          var F = h.style;
          if (!R) {
            u = Qa(M);
          }
          w = d.cssHooks[u] || d.cssHooks[M];
          if (m !== undefined) {
            b = typeof m;
            if (b === "string" && (x = Ur.exec(m)) && x[1]) {
              m = ye(h, u, x);
              b = "number";
            }
            if (m == null || m !== m) {
              return;
            }
            if (b === "number" && !R) {
              m += x && x[3] || (d.cssNumber[M] ? "" : "px");
            }
            if (!_.clearCloneStyle && m === "" && u.indexOf("background") === 0) {
              F[u] = "inherit";
            }
            if (!w || !("set" in w) || (m = w.set(h, m, y)) !== undefined) {
              if (R) {
                F.setProperty(u, m);
              } else {
                F[u] = m;
              }
            }
          } else if (w && "get" in w && (x = w.get(h, false, y)) !== undefined) {
            return x;
          } else {
            return F[u];
          }
        }
      },
      css: function (h, u, m, y) {
        var x;
        var b;
        var w;
        var M = Fe(u);
        var R = Za.test(u);
        if (!R) {
          u = Qa(M);
        }
        w = d.cssHooks[u] || d.cssHooks[M];
        if (w && "get" in w) {
          x = w.get(h, true, m);
        }
        if (x === undefined) {
          x = Sn(h, u, y);
        }
        if (x === "normal" && u in Gl) {
          x = Gl[u];
        }
        if (m === "" || m) {
          b = parseFloat(x);
          if (m === true || isFinite(b)) {
            return b || 0;
          } else {
            return x;
          }
        } else {
          return x;
        }
      }
    });
    d.each(["height", "width"], function (h, u) {
      d.cssHooks[u] = {
        get: function (m, y, x) {
          if (y) {
            if (cp.test(d.css(m, "display")) && (!m.getClientRects().length || !m.getBoundingClientRect().width)) {
              return Ol(m, dp, function () {
                return $l(m, u, x);
              });
            } else {
              return $l(m, u, x);
            }
          }
        },
        set: function (m, y, x) {
          var b;
          var w = ys(m);
          var M = !_.scrollboxSize() && w.position === "absolute";
          var R = M || x;
          var F = R && d.css(m, "boxSizing", false, w) === "border-box";
          var H = x ? Ja(m, u, x, F, w) : 0;
          if (F && M) {
            H -= Math.ceil(m["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(w[u]) - Ja(m, u, "border", false, w) - 0.5);
          }
          if (H && (b = Ur.exec(y)) && (b[3] || "px") !== "px") {
            m.style[u] = y;
            y = d.css(m, u);
          }
          return Hl(m, y, H);
        }
      };
    });
    d.cssHooks.marginLeft = Nl(_.reliableMarginLeft, function (h, u) {
      if (u) {
        return (parseFloat(Sn(h, "marginLeft")) || h.getBoundingClientRect().left - Ol(h, {
          marginLeft: 0
        }, function () {
          return h.getBoundingClientRect().left;
        })) + "px";
      }
    });
    d.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (h, u) {
      d.cssHooks[h + u] = {
        expand: function (m) {
          for (var y = 0, x = {}, b = typeof m == "string" ? m.split(" ") : [m]; y < 4; y++) {
            x[h + et[y] + u] = b[y] || b[y - 2] || b[0];
          }
          return x;
        }
      };
      if (h !== "margin") {
        d.cssHooks[h + u].set = Hl;
      }
    });
    d.fn.extend({
      css: function (h, u) {
        return oe(this, function (m, y, x) {
          var b;
          var w;
          var M = {};
          var R = 0;
          if (Array.isArray(y)) {
            b = ys(m);
            w = y.length;
            for (; R < w; R++) {
              M[y[R]] = d.css(m, y[R], false, b);
            }
            return M;
          }
          if (x !== undefined) {
            return d.style(m, y, x);
          } else {
            return d.css(m, y);
          }
        }, h, u, arguments.length > 1);
      }
    });
    function Ne(h, u, m, y, x) {
      return new Ne.prototype.init(h, u, m, y, x);
    }
    d.Tween = Ne;
    Ne.prototype = {
      constructor: Ne,
      init: function (h, u, m, y, x, b) {
        this.elem = h;
        this.prop = m;
        this.easing = x || d.easing._default;
        this.options = u;
        this.start = this.now = this.cur();
        this.end = y;
        this.unit = b || (d.cssNumber[m] ? "" : "px");
      },
      cur: function () {
        var h = Ne.propHooks[this.prop];
        if (h && h.get) {
          return h.get(this);
        } else {
          return Ne.propHooks._default.get(this);
        }
      },
      run: function (h) {
        var u;
        var m = Ne.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = u = d.easing[this.easing](h, this.options.duration * h, 0, 1, this.options.duration);
        } else {
          this.pos = u = h;
        }
        this.now = (this.end - this.start) * u + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (m && m.set) {
          m.set(this);
        } else {
          Ne.propHooks._default.set(this);
        }
        return this;
      }
    };
    Ne.prototype.init.prototype = Ne.prototype;
    Ne.propHooks = {
      _default: {
        get: function (h) {
          var u;
          if (h.elem.nodeType !== 1 || h.elem[h.prop] != null && h.elem.style[h.prop] == null) {
            return h.elem[h.prop];
          } else {
            u = d.css(h.elem, h.prop, "");
            if (!u || u === "auto") {
              return 0;
            } else {
              return u;
            }
          }
        },
        set: function (h) {
          if (d.fx.step[h.prop]) {
            d.fx.step[h.prop](h);
          } else if (h.elem.nodeType === 1 && (d.cssHooks[h.prop] || h.elem.style[Qa(h.prop)] != null)) {
            d.style(h.elem, h.prop, h.now + h.unit);
          } else {
            h.elem[h.prop] = h.now;
          }
        }
      }
    };
    Ne.propHooks.scrollTop = Ne.propHooks.scrollLeft = {
      set: function (h) {
        if (h.elem.nodeType && h.elem.parentNode) {
          h.elem[h.prop] = h.now;
        }
      }
    };
    d.easing = {
      linear: function (h) {
        return h;
      },
      swing: function (h) {
        return 0.5 - Math.cos(h * Math.PI) / 2;
      },
      _default: "swing"
    };
    d.fx = Ne.prototype.init;
    d.fx.step = {};
    var Hi;
    var vs;
    var fp = /^(?:toggle|show|hide)$/;
    var pp = /queueHooks$/;
    function to() {
      if (vs) {
        if (E.hidden === false && t.requestAnimationFrame) {
          t.requestAnimationFrame(to);
        } else {
          t.setTimeout(to, d.fx.interval);
        }
        d.fx.tick();
      }
    }
    function Vl() {
      t.setTimeout(function () {
        Hi = undefined;
      });
      return Hi = Date.now();
    }
    function _s(h, u) {
      var m;
      var y = 0;
      var x = {
        height: h
      };
      for (u = u ? 1 : 0; y < 4; y += 2 - u) {
        m = et[y];
        x["margin" + m] = x["padding" + m] = h;
      }
      if (u) {
        x.opacity = x.width = h;
      }
      return x;
    }
    function Wl(h, u, m) {
      var y;
      var x = (tr.tweeners[u] || []).concat(tr.tweeners["*"]);
      for (var b = 0, w = x.length; b < w; b++) {
        if (y = x[b].call(m, u, h)) {
          return y;
        }
      }
    }
    function gp(h, u, m) {
      var y;
      var x;
      var b;
      var w;
      var M;
      var R;
      var F;
      var H;
      var X = "width" in u || "height" in u;
      var U = this;
      var Y = {};
      var wt = h.style;
      var Ht = h.nodeType && le(h);
      var Rt = ft.get(h, "fxshow");
      if (!m.queue) {
        w = d._queueHooks(h, "fx");
        if (w.unqueued == null) {
          w.unqueued = 0;
          M = w.empty.fire;
          w.empty.fire = function () {
            if (!w.unqueued) {
              M();
            }
          };
        }
        w.unqueued++;
        U.always(function () {
          U.always(function () {
            w.unqueued--;
            if (!d.queue(h, "fx").length) {
              w.empty.fire();
            }
          });
        });
      }
      for (y in u) {
        x = u[y];
        if (fp.test(x)) {
          delete u[y];
          b = b || x === "toggle";
          if (x === (Ht ? "hide" : "show")) {
            if (x === "show" && Rt && Rt[y] !== undefined) {
              Ht = true;
            } else {
              continue;
            }
          }
          Y[y] = Rt && Rt[y] || d.style(h, y);
        }
      }
      R = !d.isEmptyObject(u);
      if (!!R || !d.isEmptyObject(Y)) {
        if (X && h.nodeType === 1) {
          m.overflow = [wt.overflow, wt.overflowX, wt.overflowY];
          F = Rt && Rt.display;
          if (F == null) {
            F = ft.get(h, "display");
          }
          H = d.css(h, "display");
          if (H === "none") {
            if (F) {
              H = F;
            } else {
              Je([h], true);
              F = h.style.display || F;
              H = d.css(h, "display");
              Je([h]);
            }
          }
          if ((H === "inline" || H === "inline-block" && F != null) && d.css(h, "float") === "none") {
            if (!R) {
              U.done(function () {
                wt.display = F;
              });
              if (F == null) {
                H = wt.display;
                F = H === "none" ? "" : H;
              }
            }
            wt.display = "inline-block";
          }
        }
        if (m.overflow) {
          wt.overflow = "hidden";
          U.always(function () {
            wt.overflow = m.overflow[0];
            wt.overflowX = m.overflow[1];
            wt.overflowY = m.overflow[2];
          });
        }
        R = false;
        for (y in Y) {
          if (!R) {
            if (Rt) {
              if ("hidden" in Rt) {
                Ht = Rt.hidden;
              }
            } else {
              Rt = ft.access(h, "fxshow", {
                display: F
              });
            }
            if (b) {
              Rt.hidden = !Ht;
            }
            if (Ht) {
              Je([h], true);
            }
            U.done(function () {
              if (!Ht) {
                Je([h]);
              }
              ft.remove(h, "fxshow");
              for (y in Y) {
                d.style(h, y, Y[y]);
              }
            });
          }
          R = Wl(Ht ? Rt[y] : 0, y, U);
          if (!(y in Rt)) {
            Rt[y] = R.start;
            if (Ht) {
              R.end = R.start;
              R.start = 0;
            }
          }
        }
      }
    }
    function mp(h, u) {
      var m;
      var y;
      var x;
      var b;
      var w;
      for (m in h) {
        y = Fe(m);
        x = u[y];
        b = h[m];
        if (Array.isArray(b)) {
          x = b[1];
          b = h[m] = b[0];
        }
        if (m !== y) {
          h[y] = b;
          delete h[m];
        }
        w = d.cssHooks[y];
        if (w && "expand" in w) {
          b = w.expand(b);
          delete h[y];
          for (m in b) {
            if (!(m in h)) {
              h[m] = b[m];
              u[m] = x;
            }
          }
        } else {
          u[y] = x;
        }
      }
    }
    function tr(h, u, m) {
      var y;
      var x;
      var b = 0;
      var w = tr.prefilters.length;
      var M = d.Deferred().always(function () {
        delete R.elem;
      });
      function R() {
        if (x) {
          return false;
        }
        var X = Hi || Vl();
        var U = Math.max(0, F.startTime + F.duration - X);
        var Y = U / F.duration || 0;
        var wt = 1 - Y;
        for (var Ht = 0, Rt = F.tweens.length; Ht < Rt; Ht++) {
          F.tweens[Ht].run(wt);
        }
        M.notifyWith(h, [F, wt, U]);
        if (wt < 1 && Rt) {
          return U;
        } else {
          if (!Rt) {
            M.notifyWith(h, [F, 1, 0]);
          }
          M.resolveWith(h, [F]);
          return false;
        }
      }
      var F = M.promise({
        elem: h,
        props: d.extend({}, u),
        opts: d.extend(true, {
          specialEasing: {},
          easing: d.easing._default
        }, m),
        originalProperties: u,
        originalOptions: m,
        startTime: Hi || Vl(),
        duration: m.duration,
        tweens: [],
        createTween: function (X, U) {
          var Y = d.Tween(h, F.opts, X, U, F.opts.specialEasing[X] || F.opts.easing);
          F.tweens.push(Y);
          return Y;
        },
        stop: function (X) {
          var U = 0;
          var Y = X ? F.tweens.length : 0;
          if (x) {
            return this;
          }
          for (x = true; U < Y; U++) {
            F.tweens[U].run(1);
          }
          if (X) {
            M.notifyWith(h, [F, 1, 0]);
            M.resolveWith(h, [F, X]);
          } else {
            M.rejectWith(h, [F, X]);
          }
          return this;
        }
      });
      var H = F.props;
      for (mp(H, F.opts.specialEasing); b < w; b++) {
        y = tr.prefilters[b].call(F, h, H, F.opts);
        if (y) {
          if (T(y.stop)) {
            d._queueHooks(F.elem, F.opts.queue).stop = y.stop.bind(y);
          }
          return y;
        }
      }
      d.map(H, Wl, F);
      if (T(F.opts.start)) {
        F.opts.start.call(h, F);
      }
      F.progress(F.opts.progress).done(F.opts.done, F.opts.complete).fail(F.opts.fail).always(F.opts.always);
      d.fx.timer(d.extend(R, {
        elem: h,
        anim: F,
        queue: F.opts.queue
      }));
      return F;
    }
    d.Animation = d.extend(tr, {
      tweeners: {
        "*": [function (h, u) {
          var m = this.createTween(h, u);
          ye(m.elem, h, Ur.exec(u), m);
          return m;
        }]
      },
      tweener: function (h, u) {
        if (T(h)) {
          u = h;
          h = ["*"];
        } else {
          h = h.match(Dt);
        }
        var m;
        for (var y = 0, x = h.length; y < x; y++) {
          m = h[y];
          tr.tweeners[m] = tr.tweeners[m] || [];
          tr.tweeners[m].unshift(u);
        }
      },
      prefilters: [gp],
      prefilter: function (h, u) {
        if (u) {
          tr.prefilters.unshift(h);
        } else {
          tr.prefilters.push(h);
        }
      }
    });
    d.speed = function (h, u, m) {
      var y = h && typeof h == "object" ? d.extend({}, h) : {
        complete: m || !m && u || T(h) && h,
        duration: h,
        easing: m && u || u && !T(u) && u
      };
      if (d.fx.off) {
        y.duration = 0;
      } else if (typeof y.duration != "number") {
        if (y.duration in d.fx.speeds) {
          y.duration = d.fx.speeds[y.duration];
        } else {
          y.duration = d.fx.speeds._default;
        }
      }
      if (y.queue == null || y.queue === true) {
        y.queue = "fx";
      }
      y.old = y.complete;
      y.complete = function () {
        if (T(y.old)) {
          y.old.call(this);
        }
        if (y.queue) {
          d.dequeue(this, y.queue);
        }
      };
      return y;
    };
    d.fn.extend({
      fadeTo: function (h, u, m, y) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: u
        }, h, m, y);
      },
      animate: function (h, u, m, y) {
        var x = d.isEmptyObject(h);
        var b = d.speed(u, m, y);
        function w() {
          var M = tr(this, d.extend({}, h), b);
          if (x || ft.get(this, "finish")) {
            M.stop(true);
          }
        }
        w.finish = w;
        if (x || b.queue === false) {
          return this.each(w);
        } else {
          return this.queue(b.queue, w);
        }
      },
      stop: function (h, u, m) {
        function y(x) {
          var b = x.stop;
          delete x.stop;
          b(m);
        }
        if (typeof h != "string") {
          m = u;
          u = h;
          h = undefined;
        }
        if (u) {
          this.queue(h || "fx", []);
        }
        return this.each(function () {
          var x = true;
          var b = h != null && h + "queueHooks";
          var w = d.timers;
          var M = ft.get(this);
          if (b) {
            if (M[b] && M[b].stop) {
              y(M[b]);
            }
          } else {
            for (b in M) {
              if (M[b] && M[b].stop && pp.test(b)) {
                y(M[b]);
              }
            }
          }
          for (b = w.length; b--;) {
            if (w[b].elem === this && (h == null || w[b].queue === h)) {
              w[b].anim.stop(m);
              x = false;
              w.splice(b, 1);
            }
          }
          if (x || !m) {
            d.dequeue(this, h);
          }
        });
      },
      finish: function (h) {
        if (h !== false) {
          h = h || "fx";
        }
        return this.each(function () {
          var u;
          var m = ft.get(this);
          var y = m[h + "queue"];
          var x = m[h + "queueHooks"];
          var b = d.timers;
          var w = y ? y.length : 0;
          m.finish = true;
          d.queue(this, h, []);
          if (x && x.stop) {
            x.stop.call(this, true);
          }
          u = b.length;
          while (u--) {
            if (b[u].elem === this && b[u].queue === h) {
              b[u].anim.stop(true);
              b.splice(u, 1);
            }
          }
          for (u = 0; u < w; u++) {
            if (y[u] && y[u].finish) {
              y[u].finish.call(this);
            }
          }
          delete m.finish;
        });
      }
    });
    d.each(["toggle", "show", "hide"], function (h, u) {
      var m = d.fn[u];
      d.fn[u] = function (y, x, b) {
        if (y == null || typeof y == "boolean") {
          return m.apply(this, arguments);
        } else {
          return this.animate(_s(u, true), y, x, b);
        }
      };
    });
    d.each({
      slideDown: _s("show"),
      slideUp: _s("hide"),
      slideToggle: _s("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (h, u) {
      d.fn[h] = function (m, y, x) {
        return this.animate(u, m, y, x);
      };
    });
    d.timers = [];
    d.fx.tick = function () {
      var h;
      var u = 0;
      var m = d.timers;
      for (Hi = Date.now(); u < m.length; u++) {
        h = m[u];
        if (!h() && m[u] === h) {
          m.splice(u--, 1);
        }
      }
      if (!m.length) {
        d.fx.stop();
      }
      Hi = undefined;
    };
    d.fx.timer = function (h) {
      d.timers.push(h);
      d.fx.start();
    };
    d.fx.interval = 13;
    d.fx.start = function () {
      if (!vs) {
        vs = true;
        to();
      }
    };
    d.fx.stop = function () {
      vs = null;
    };
    d.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    d.fn.delay = function (h, u) {
      h = d.fx && d.fx.speeds[h] || h;
      u = u || "fx";
      return this.queue(u, function (m, y) {
        var x = t.setTimeout(m, h);
        y.stop = function () {
          t.clearTimeout(x);
        };
      });
    };
    (function () {
      var h = E.createElement("input");
      var u = E.createElement("select");
      var m = u.appendChild(E.createElement("option"));
      h.type = "checkbox";
      _.checkOn = h.value !== "";
      _.optSelected = m.selected;
      h = E.createElement("input");
      h.value = "t";
      h.type = "radio";
      _.radioValue = h.value === "t";
    })();
    var jl;
    var Cn = d.expr.attrHandle;
    d.fn.extend({
      attr: function (h, u) {
        return oe(this, d.attr, h, u, arguments.length > 1);
      },
      removeAttr: function (h) {
        return this.each(function () {
          d.removeAttr(this, h);
        });
      }
    });
    d.extend({
      attr: function (h, u, m) {
        var y;
        var x;
        var b = h.nodeType;
        if (b !== 3 && b !== 8 && b !== 2) {
          if (typeof h.getAttribute === "undefined") {
            return d.prop(h, u, m);
          }
          if (b !== 1 || !d.isXMLDoc(h)) {
            x = d.attrHooks[u.toLowerCase()] || (d.expr.match.bool.test(u) ? jl : undefined);
          }
          if (m !== undefined) {
            if (m === null) {
              d.removeAttr(h, u);
              return;
            }
            if (x && "set" in x && (y = x.set(h, m, u)) !== undefined) {
              return y;
            } else {
              h.setAttribute(u, m + "");
              return m;
            }
          }
          if (x && "get" in x && (y = x.get(h, u)) !== null) {
            return y;
          } else {
            y = d.find.attr(h, u);
            return y ?? undefined;
          }
        }
      },
      attrHooks: {
        type: {
          set: function (h, u) {
            if (!_.radioValue && u === "radio" && N(h, "input")) {
              var m = h.value;
              h.setAttribute("type", u);
              if (m) {
                h.value = m;
              }
              return u;
            }
          }
        }
      },
      removeAttr: function (h, u) {
        var m;
        var y = 0;
        var x = u && u.match(Dt);
        if (x && h.nodeType === 1) {
          while (m = x[y++]) {
            h.removeAttribute(m);
          }
        }
      }
    });
    jl = {
      set: function (h, u, m) {
        if (u === false) {
          d.removeAttr(h, m);
        } else {
          h.setAttribute(m, m);
        }
        return m;
      }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function (h, u) {
      var m = Cn[u] || d.find.attr;
      Cn[u] = function (y, x, b) {
        var w;
        var M;
        var R = x.toLowerCase();
        if (!b) {
          M = Cn[R];
          Cn[R] = w;
          w = m(y, x, b) != null ? R : null;
          Cn[R] = M;
        }
        return w;
      };
    });
    var yp = /^(?:input|select|textarea|button)$/i;
    var vp = /^(?:a|area)$/i;
    d.fn.extend({
      prop: function (h, u) {
        return oe(this, d.prop, h, u, arguments.length > 1);
      },
      removeProp: function (h) {
        return this.each(function () {
          delete this[d.propFix[h] || h];
        });
      }
    });
    d.extend({
      prop: function (h, u, m) {
        var y;
        var x;
        var b = h.nodeType;
        if (b !== 3 && b !== 8 && b !== 2) {
          if (b !== 1 || !d.isXMLDoc(h)) {
            u = d.propFix[u] || u;
            x = d.propHooks[u];
          }
          if (m !== undefined) {
            if (x && "set" in x && (y = x.set(h, m, u)) !== undefined) {
              return y;
            } else {
              return h[u] = m;
            }
          } else if (x && "get" in x && (y = x.get(h, u)) !== null) {
            return y;
          } else {
            return h[u];
          }
        }
      },
      propHooks: {
        tabIndex: {
          get: function (h) {
            var u = d.find.attr(h, "tabindex");
            if (u) {
              return parseInt(u, 10);
            } else if (yp.test(h.nodeName) || vp.test(h.nodeName) && h.href) {
              return 0;
            } else {
              return -1;
            }
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    });
    if (!_.optSelected) {
      d.propHooks.selected = {
        get: function (h) {
          var u = h.parentNode;
          if (u && u.parentNode) {
            u.parentNode.selectedIndex;
          }
          return null;
        },
        set: function (h) {
          var u = h.parentNode;
          if (u) {
            u.selectedIndex;
            if (u.parentNode) {
              u.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      d.propFix[this.toLowerCase()] = this;
    });
    function gi(h) {
      var u = h.match(Dt) || [];
      return u.join(" ");
    }
    function mi(h) {
      return h.getAttribute && h.getAttribute("class") || "";
    }
    function eo(h) {
      if (Array.isArray(h)) {
        return h;
      } else if (typeof h == "string") {
        return h.match(Dt) || [];
      } else {
        return [];
      }
    }
    d.fn.extend({
      addClass: function (h) {
        var u;
        var m;
        var y;
        var x;
        var b;
        var w;
        if (T(h)) {
          return this.each(function (M) {
            d(this).addClass(h.call(this, M, mi(this)));
          });
        } else {
          u = eo(h);
          if (u.length) {
            return this.each(function () {
              y = mi(this);
              m = this.nodeType === 1 && " " + gi(y) + " ";
              if (m) {
                for (b = 0; b < u.length; b++) {
                  x = u[b];
                  if (m.indexOf(" " + x + " ") < 0) {
                    m += x + " ";
                  }
                }
                w = gi(m);
                if (y !== w) {
                  this.setAttribute("class", w);
                }
              }
            });
          } else {
            return this;
          }
        }
      },
      removeClass: function (h) {
        var u;
        var m;
        var y;
        var x;
        var b;
        var w;
        if (T(h)) {
          return this.each(function (M) {
            d(this).removeClass(h.call(this, M, mi(this)));
          });
        } else if (arguments.length) {
          u = eo(h);
          if (u.length) {
            return this.each(function () {
              y = mi(this);
              m = this.nodeType === 1 && " " + gi(y) + " ";
              if (m) {
                for (b = 0; b < u.length; b++) {
                  for (x = u[b]; m.indexOf(" " + x + " ") > -1;) {
                    m = m.replace(" " + x + " ", " ");
                  }
                }
                w = gi(m);
                if (y !== w) {
                  this.setAttribute("class", w);
                }
              }
            });
          } else {
            return this;
          }
        } else {
          return this.attr("class", "");
        }
      },
      toggleClass: function (h, u) {
        var m;
        var y;
        var x;
        var b;
        var w = typeof h;
        var M = w === "string" || Array.isArray(h);
        if (T(h)) {
          return this.each(function (R) {
            d(this).toggleClass(h.call(this, R, mi(this), u), u);
          });
        } else if (typeof u == "boolean" && M) {
          if (u) {
            return this.addClass(h);
          } else {
            return this.removeClass(h);
          }
        } else {
          m = eo(h);
          return this.each(function () {
            if (M) {
              b = d(this);
              x = 0;
              for (; x < m.length; x++) {
                y = m[x];
                if (b.hasClass(y)) {
                  b.removeClass(y);
                } else {
                  b.addClass(y);
                }
              }
            } else if (h === undefined || w === "boolean") {
              y = mi(this);
              if (y) {
                ft.set(this, "__className__", y);
              }
              if (this.setAttribute) {
                this.setAttribute("class", y || h === false ? "" : ft.get(this, "__className__") || "");
              }
            }
          });
        }
      },
      hasClass: function (h) {
        var u;
        var m;
        var y = 0;
        for (u = " " + h + " "; m = this[y++];) {
          if (m.nodeType === 1 && (" " + gi(mi(m)) + " ").indexOf(u) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var _p = /\r/g;
    d.fn.extend({
      val: function (h) {
        var u;
        var m;
        var y;
        var x = this[0];
        if (arguments.length) {
          y = T(h);
          return this.each(function (b) {
            var w;
            if (this.nodeType === 1) {
              if (y) {
                w = h.call(this, b, d(this).val());
              } else {
                w = h;
              }
              if (w == null) {
                w = "";
              } else if (typeof w == "number") {
                w += "";
              } else if (Array.isArray(w)) {
                w = d.map(w, function (M) {
                  if (M == null) {
                    return "";
                  } else {
                    return M + "";
                  }
                });
              }
              u = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()];
              if (!u || !("set" in u) || u.set(this, w, "value") === undefined) {
                this.value = w;
              }
            }
          });
        } else if (x) {
          u = d.valHooks[x.type] || d.valHooks[x.nodeName.toLowerCase()];
          if (u && "get" in u && (m = u.get(x, "value")) !== undefined) {
            return m;
          } else {
            m = x.value;
            if (typeof m == "string") {
              return m.replace(_p, "");
            } else {
              return m ?? "";
            }
          }
        } else {
          return undefined;
        }
      }
    });
    d.extend({
      valHooks: {
        option: {
          get: function (h) {
            var u = d.find.attr(h, "value");
            return u ?? gi(d.text(h));
          }
        },
        select: {
          get: function (h) {
            var u;
            var m;
            var y;
            var x = h.options;
            var b = h.selectedIndex;
            var w = h.type === "select-one";
            var M = w ? null : [];
            var R = w ? b + 1 : x.length;
            for (b < 0 ? y = R : y = w ? b : 0; y < R; y++) {
              m = x[y];
              if ((m.selected || y === b) && !m.disabled && (!m.parentNode.disabled || !N(m.parentNode, "optgroup"))) {
                u = d(m).val();
                if (w) {
                  return u;
                }
                M.push(u);
              }
            }
            return M;
          },
          set: function (h, u) {
            var m;
            var y;
            var x = h.options;
            var b = d.makeArray(u);
            for (var w = x.length; w--;) {
              y = x[w];
              if (y.selected = d.inArray(d.valHooks.option.get(y), b) > -1) {
                m = true;
              }
            }
            if (!m) {
              h.selectedIndex = -1;
            }
            return b;
          }
        }
      }
    });
    d.each(["radio", "checkbox"], function () {
      d.valHooks[this] = {
        set: function (h, u) {
          if (Array.isArray(u)) {
            return h.checked = d.inArray(d(h).val(), u) > -1;
          }
        }
      };
      if (!_.checkOn) {
        d.valHooks[this].get = function (h) {
          if (h.getAttribute("value") === null) {
            return "on";
          } else {
            return h.value;
          }
        };
      }
    });
    var In = t.location;
    var Xl = {
      guid: Date.now()
    };
    var ro = /\?/;
    d.parseXML = function (h) {
      var u;
      var m;
      if (!h || typeof h != "string") {
        return null;
      }
      try {
        u = new t.DOMParser().parseFromString(h, "text/xml");
      } catch {}
      m = u && u.getElementsByTagName("parsererror")[0];
      if (!u || m) {
        d.error("Invalid XML: " + (m ? d.map(m.childNodes, function (y) {
          return y.textContent;
        }).join(`
`) : h));
      }
      return u;
    };
    var zl = /^(?:focusinfocus|focusoutblur)$/;
    function ql(h) {
      h.stopPropagation();
    }
    d.extend(d.event, {
      trigger: function (h, u, m, y) {
        var x;
        var b;
        var w;
        var M;
        var R;
        var F;
        var H;
        var X;
        var U = [m || E];
        var Y = g.call(h, "type") ? h.type : h;
        var wt = g.call(h, "namespace") ? h.namespace.split(".") : [];
        b = X = w = m = m || E;
        if (m.nodeType !== 3 && m.nodeType !== 8 && !zl.test(Y + d.event.triggered) && (Y.indexOf(".") > -1 && (wt = Y.split("."), Y = wt.shift(), wt.sort()), R = Y.indexOf(":") < 0 && "on" + Y, h = h[d.expando] ? h : new d.Event(Y, typeof h == "object" && h), h.isTrigger = y ? 2 : 3, h.namespace = wt.join("."), h.rnamespace = h.namespace ? new RegExp("(^|\\.)" + wt.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h.result = undefined, h.target ||= m, u = u == null ? [h] : d.makeArray(u, [h]), H = d.event.special[Y] || {}, !!y || !H.trigger || H.trigger.apply(m, u) !== false)) {
          if (!y && !H.noBubble && !A(m)) {
            M = H.delegateType || Y;
            if (!zl.test(M + Y)) {
              b = b.parentNode;
            }
            for (; b; b = b.parentNode) {
              U.push(b);
              w = b;
            }
            if (w === (m.ownerDocument || E)) {
              U.push(w.defaultView || w.parentWindow || t);
            }
          }
          for (x = 0; (b = U[x++]) && !h.isPropagationStopped();) {
            X = b;
            h.type = x > 1 ? M : H.bindType || Y;
            F = (ft.get(b, "events") || Object.create(null))[h.type] && ft.get(b, "handle");
            if (F) {
              F.apply(b, u);
            }
            F = R && b[R];
            if (F && F.apply && Ze(b)) {
              h.result = F.apply(b, u);
              if (h.result === false) {
                h.preventDefault();
              }
            }
          }
          h.type = Y;
          if (!y && !h.isDefaultPrevented() && (!H._default || H._default.apply(U.pop(), u) === false) && Ze(m) && R && T(m[Y]) && !A(m)) {
            w = m[R];
            if (w) {
              m[R] = null;
            }
            d.event.triggered = Y;
            if (h.isPropagationStopped()) {
              X.addEventListener(Y, ql);
            }
            m[Y]();
            if (h.isPropagationStopped()) {
              X.removeEventListener(Y, ql);
            }
            d.event.triggered = undefined;
            if (w) {
              m[R] = w;
            }
          }
          return h.result;
        }
      },
      simulate: function (h, u, m) {
        var y = d.extend(new d.Event(), m, {
          type: h,
          isSimulated: true
        });
        d.event.trigger(y, null, u);
      }
    });
    d.fn.extend({
      trigger: function (h, u) {
        return this.each(function () {
          d.event.trigger(h, u, this);
        });
      },
      triggerHandler: function (h, u) {
        var m = this[0];
        if (m) {
          return d.event.trigger(h, u, m, true);
        }
      }
    });
    var xp = /\[\]$/;
    var Yl = /\r?\n/g;
    var bp = /^(?:submit|button|image|reset|file)$/i;
    var Tp = /^(?:input|select|textarea|keygen)/i;
    function io(h, u, m, y) {
      var x;
      if (Array.isArray(u)) {
        d.each(u, function (b, w) {
          if (m || xp.test(h)) {
            y(h, w);
          } else {
            io(h + "[" + (typeof w == "object" && w != null ? b : "") + "]", w, m, y);
          }
        });
      } else if (!m && P(u) === "object") {
        for (x in u) {
          io(h + "[" + x + "]", u[x], m, y);
        }
      } else {
        y(h, u);
      }
    }
    d.param = function (h, u) {
      var m;
      var y = [];
      function x(b, w) {
        var M = T(w) ? w() : w;
        y[y.length] = encodeURIComponent(b) + "=" + encodeURIComponent(M ?? "");
      }
      if (h == null) {
        return "";
      }
      if (Array.isArray(h) || h.jquery && !d.isPlainObject(h)) {
        d.each(h, function () {
          x(this.name, this.value);
        });
      } else {
        for (m in h) {
          io(m, h[m], u, x);
        }
      }
      return y.join("&");
    };
    d.fn.extend({
      serialize: function () {
        return d.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var h = d.prop(this, "elements");
          if (h) {
            return d.makeArray(h);
          } else {
            return this;
          }
        }).filter(function () {
          var h = this.type;
          return this.name && !d(this).is(":disabled") && Tp.test(this.nodeName) && !bp.test(h) && (this.checked || !pr.test(h));
        }).map(function (h, u) {
          var m = d(this).val();
          if (m == null) {
            return null;
          } else if (Array.isArray(m)) {
            return d.map(m, function (y) {
              return {
                name: u.name,
                value: y.replace(Yl, `\r
`)
              };
            });
          } else {
            return {
              name: u.name,
              value: m.replace(Yl, `\r
`)
            };
          }
        }).get();
      }
    });
    var wp = /%20/g;
    var Ep = /#.*$/;
    var Ap = /([?&])_=[^&]*/;
    var Sp = /^(.*?):[ \t]*([^\r\n]*)$/mg;
    var Cp = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
    var Ip = /^(?:GET|HEAD)$/;
    var Rp = /^\/\//;
    var Kl = {};
    var no = {};
    var Zl = `*/*`;
    var so = E.createElement("a");
    so.href = In.href;
    function Ql(h) {
      return function (u, m) {
        if (typeof u != "string") {
          m = u;
          u = "*";
        }
        var y;
        var x = 0;
        var b = u.toLowerCase().match(Dt) || [];
        if (T(m)) {
          while (y = b[x++]) {
            if (y[0] === "+") {
              y = y.slice(1) || "*";
              (h[y] = h[y] || []).unshift(m);
            } else {
              (h[y] = h[y] || []).push(m);
            }
          }
        }
      };
    }
    function Jl(h, u, m, y) {
      var x = {};
      var b = h === no;
      function w(M) {
        var R;
        x[M] = true;
        d.each(h[M] || [], function (F, H) {
          var X = H(u, m, y);
          if (typeof X == "string" && !b && !x[X]) {
            u.dataTypes.unshift(X);
            w(X);
            return false;
          }
          if (b) {
            return !(R = X);
          }
        });
        return R;
      }
      return w(u.dataTypes[0]) || !x["*"] && w("*");
    }
    function ao(h, u) {
      var m;
      var y;
      var x = d.ajaxSettings.flatOptions || {};
      for (m in u) {
        if (u[m] !== undefined) {
          (x[m] ? h : y ||= {})[m] = u[m];
        }
      }
      if (y) {
        d.extend(true, h, y);
      }
      return h;
    }
    function Pp(h, u, m) {
      var y;
      var x;
      var b;
      var w;
      var M = h.contents;
      for (var R = h.dataTypes; R[0] === "*";) {
        R.shift();
        if (y === undefined) {
          y = h.mimeType || u.getResponseHeader("Content-Type");
        }
      }
      if (y) {
        for (x in M) {
          if (M[x] && M[x].test(y)) {
            R.unshift(x);
            break;
          }
        }
      }
      if (R[0] in m) {
        b = R[0];
      } else {
        for (x in m) {
          if (!R[0] || h.converters[x + " " + R[0]]) {
            b = x;
            break;
          }
          w ||= x;
        }
        b = b || w;
      }
      if (b) {
        if (b !== R[0]) {
          R.unshift(b);
        }
        return m[b];
      }
    }
    function Mp(h, u, m, y) {
      var x;
      var b;
      var w;
      var M;
      var R;
      var F = {};
      var H = h.dataTypes.slice();
      if (H[1]) {
        for (w in h.converters) {
          F[w.toLowerCase()] = h.converters[w];
        }
      }
      for (b = H.shift(); b;) {
        if (h.responseFields[b]) {
          m[h.responseFields[b]] = u;
        }
        if (!R && y && h.dataFilter) {
          u = h.dataFilter(u, h.dataType);
        }
        R = b;
        b = H.shift();
        if (b) {
          if (b === "*") {
            b = R;
          } else if (R !== "*" && R !== b) {
            w = F[R + " " + b] || F["* " + b];
            if (!w) {
              for (x in F) {
                M = x.split(" ");
                if (M[1] === b && (w = F[R + " " + M[0]] || F["* " + M[0]], w)) {
                  if (w === true) {
                    w = F[x];
                  } else if (F[x] !== true) {
                    b = M[0];
                    H.unshift(M[1]);
                  }
                  break;
                }
              }
            }
            if (w !== true) {
              if (w && h.throws) {
                u = w(u);
              } else {
                try {
                  u = w(u);
                } catch (X) {
                  return {
                    state: "parsererror",
                    error: w ? X : "No conversion from " + R + " to " + b
                  };
                }
              }
            }
          }
        }
      }
      return {
        state: "success",
        data: u
      };
    }
    d.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: In.href,
        type: "GET",
        isLocal: Cp.test(In.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Zl,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": d.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function (h, u) {
        if (u) {
          return ao(ao(h, d.ajaxSettings), u);
        } else {
          return ao(d.ajaxSettings, h);
        }
      },
      ajaxPrefilter: Ql(Kl),
      ajaxTransport: Ql(no),
      ajax: function (h, u) {
        if (typeof h == "object") {
          u = h;
          h = undefined;
        }
        u = u || {};
        var m;
        var y;
        var x;
        var b;
        var w;
        var M;
        var R;
        var F;
        var H;
        var X;
        var U = d.ajaxSetup({}, u);
        var Y = U.context || U;
        var wt = U.context && (Y.nodeType || Y.jquery) ? d(Y) : d.event;
        var Ht = d.Deferred();
        var Rt = d.Callbacks("once memory");
        var Te = U.statusCode || {};
        var ce = {};
        var gr = {};
        var mr = "canceled";
        var Ut = {
          readyState: 0,
          getResponseHeader: function ($t) {
            var se;
            if (R) {
              if (!b) {
                for (b = {}; se = Sp.exec(x);) {
                  b[se[1].toLowerCase() + " "] = (b[se[1].toLowerCase() + " "] || []).concat(se[2]);
                }
              }
              se = b[$t.toLowerCase() + " "];
            }
            if (se == null) {
              return null;
            } else {
              return se.join(", ");
            }
          },
          getAllResponseHeaders: function () {
            if (R) {
              return x;
            } else {
              return null;
            }
          },
          setRequestHeader: function ($t, se) {
            if (R == null) {
              $t = gr[$t.toLowerCase()] = gr[$t.toLowerCase()] || $t;
              ce[$t] = se;
            }
            return this;
          },
          overrideMimeType: function ($t) {
            if (R == null) {
              U.mimeType = $t;
            }
            return this;
          },
          statusCode: function ($t) {
            var se;
            if ($t) {
              if (R) {
                Ut.always($t[Ut.status]);
              } else {
                for (se in $t) {
                  Te[se] = [Te[se], $t[se]];
                }
              }
            }
            return this;
          },
          abort: function ($t) {
            var se = $t || mr;
            if (m) {
              m.abort(se);
            }
            yi(0, se);
            return this;
          }
        };
        Ht.promise(Ut);
        U.url = ((h || U.url || In.href) + "").replace(Rp, In.protocol + "//");
        U.type = u.method || u.type || U.method || U.type;
        U.dataTypes = (U.dataType || "*").toLowerCase().match(Dt) || [""];
        if (U.crossDomain == null) {
          M = E.createElement("a");
          try {
            M.href = U.url;
            M.href = M.href;
            U.crossDomain = so.protocol + "//" + so.host != M.protocol + "//" + M.host;
          } catch {
            U.crossDomain = true;
          }
        }
        if (U.data && U.processData && typeof U.data != "string") {
          U.data = d.param(U.data, U.traditional);
        }
        Jl(Kl, U, u, Ut);
        if (R) {
          return Ut;
        }
        F = d.event && U.global;
        if (F && d.active++ === 0) {
          d.event.trigger("ajaxStart");
        }
        U.type = U.type.toUpperCase();
        U.hasContent = !Ip.test(U.type);
        y = U.url.replace(Ep, "");
        if (U.hasContent) {
          if (U.data && U.processData && (U.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            U.data = U.data.replace(wp, "+");
          }
        } else {
          X = U.url.slice(y.length);
          if (U.data && (U.processData || typeof U.data == "string")) {
            y += (ro.test(y) ? "&" : "?") + U.data;
            delete U.data;
          }
          if (U.cache === false) {
            y = y.replace(Ap, "$1");
            X = (ro.test(y) ? "&" : "?") + "_=" + Xl.guid++ + X;
          }
          U.url = y + X;
        }
        if (U.ifModified) {
          if (d.lastModified[y]) {
            Ut.setRequestHeader("If-Modified-Since", d.lastModified[y]);
          }
          if (d.etag[y]) {
            Ut.setRequestHeader("If-None-Match", d.etag[y]);
          }
        }
        if (U.data && U.hasContent && U.contentType !== false || u.contentType) {
          Ut.setRequestHeader("Content-Type", U.contentType);
        }
        Ut.setRequestHeader("Accept", U.dataTypes[0] && U.accepts[U.dataTypes[0]] ? U.accepts[U.dataTypes[0]] + (U.dataTypes[0] !== "*" ? ", " + Zl + "; q=0.01" : "") : U.accepts["*"]);
        for (H in U.headers) {
          Ut.setRequestHeader(H, U.headers[H]);
        }
        if (U.beforeSend && (U.beforeSend.call(Y, Ut, U) === false || R)) {
          return Ut.abort();
        }
        mr = "abort";
        Rt.add(U.complete);
        Ut.done(U.success);
        Ut.fail(U.error);
        m = Jl(no, U, u, Ut);
        if (!m) {
          yi(-1, "No Transport");
        } else {
          Ut.readyState = 1;
          if (F) {
            wt.trigger("ajaxSend", [Ut, U]);
          }
          if (R) {
            return Ut;
          }
          if (U.async && U.timeout > 0) {
            w = t.setTimeout(function () {
              Ut.abort("timeout");
            }, U.timeout);
          }
          try {
            R = false;
            m.send(ce, yi);
          } catch ($t) {
            if (R) {
              throw $t;
            }
            yi(-1, $t);
          }
        }
        function yi($t, se, Pn, ho) {
          var yr;
          var Mn;
          var vr;
          var Qr;
          var Jr;
          var je = se;
          if (!R) {
            R = true;
            if (w) {
              t.clearTimeout(w);
            }
            m = undefined;
            x = ho || "";
            Ut.readyState = $t > 0 ? 4 : 0;
            yr = $t >= 200 && $t < 300 || $t === 304;
            if (Pn) {
              Qr = Pp(U, Ut, Pn);
            }
            if (!yr && d.inArray("script", U.dataTypes) > -1 && d.inArray("json", U.dataTypes) < 0) {
              U.converters["text script"] = function () {};
            }
            Qr = Mp(U, Qr, Ut, yr);
            if (yr) {
              if (U.ifModified) {
                Jr = Ut.getResponseHeader("Last-Modified");
                if (Jr) {
                  d.lastModified[y] = Jr;
                }
                Jr = Ut.getResponseHeader("etag");
                if (Jr) {
                  d.etag[y] = Jr;
                }
              }
              if ($t === 204 || U.type === "HEAD") {
                je = "nocontent";
              } else if ($t === 304) {
                je = "notmodified";
              } else {
                je = Qr.state;
                Mn = Qr.data;
                vr = Qr.error;
                yr = !vr;
              }
            } else {
              vr = je;
              if ($t || !je) {
                je = "error";
                if ($t < 0) {
                  $t = 0;
                }
              }
            }
            Ut.status = $t;
            Ut.statusText = (se || je) + "";
            if (yr) {
              Ht.resolveWith(Y, [Mn, je, Ut]);
            } else {
              Ht.rejectWith(Y, [Ut, je, vr]);
            }
            Ut.statusCode(Te);
            Te = undefined;
            if (F) {
              wt.trigger(yr ? "ajaxSuccess" : "ajaxError", [Ut, U, yr ? Mn : vr]);
            }
            Rt.fireWith(Y, [Ut, je]);
            if (F) {
              wt.trigger("ajaxComplete", [Ut, U]);
              if (! --d.active) {
                d.event.trigger("ajaxStop");
              }
            }
          }
        }
        return Ut;
      },
      getJSON: function (h, u, m) {
        return d.get(h, u, m, "json");
      },
      getScript: function (h, u) {
        return d.get(h, undefined, u, "script");
      }
    });
    d.each(["get", "post"], function (h, u) {
      d[u] = function (m, y, x, b) {
        if (T(y)) {
          b = b || x;
          x = y;
          y = undefined;
        }
        return d.ajax(d.extend({
          url: m,
          type: u,
          dataType: b,
          data: y,
          success: x
        }, d.isPlainObject(m) && m));
      };
    });
    d.ajaxPrefilter(function (h) {
      var u;
      for (u in h.headers) {
        if (u.toLowerCase() === "content-type") {
          h.contentType = h.headers[u] || "";
        }
      }
    });
    d._evalUrl = function (h, u, m) {
      return d.ajax({
        url: h,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (y) {
          d.globalEval(y, u, m);
        }
      });
    };
    d.fn.extend({
      wrapAll: function (h) {
        var u;
        if (this[0]) {
          if (T(h)) {
            h = h.call(this[0]);
          }
          u = d(h, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            u.insertBefore(this[0]);
          }
          u.map(function () {
            for (var m = this; m.firstElementChild;) {
              m = m.firstElementChild;
            }
            return m;
          }).append(this);
        }
        return this;
      },
      wrapInner: function (h) {
        if (T(h)) {
          return this.each(function (u) {
            d(this).wrapInner(h.call(this, u));
          });
        } else {
          return this.each(function () {
            var u = d(this);
            var m = u.contents();
            if (m.length) {
              m.wrapAll(h);
            } else {
              u.append(h);
            }
          });
        }
      },
      wrap: function (h) {
        var u = T(h);
        return this.each(function (m) {
          d(this).wrapAll(u ? h.call(this, m) : h);
        });
      },
      unwrap: function (h) {
        this.parent(h).not("body").each(function () {
          d(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    d.expr.pseudos.hidden = function (h) {
      return !d.expr.pseudos.visible(h);
    };
    d.expr.pseudos.visible = function (h) {
      return !!h.offsetWidth || !!h.offsetHeight || !!h.getClientRects().length;
    };
    d.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch {}
    };
    var Dp = {
      0: 200,
      1223: 204
    };
    var Rn = d.ajaxSettings.xhr();
    _.cors = !!Rn && "withCredentials" in Rn;
    _.ajax = Rn = !!Rn;
    d.ajaxTransport(function (h) {
      var u;
      var m;
      if (_.cors || Rn && !h.crossDomain) {
        return {
          send: function (y, x) {
            var b;
            var w = h.xhr();
            w.open(h.type, h.url, h.async, h.username, h.password);
            if (h.xhrFields) {
              for (b in h.xhrFields) {
                w[b] = h.xhrFields[b];
              }
            }
            if (h.mimeType && w.overrideMimeType) {
              w.overrideMimeType(h.mimeType);
            }
            if (!h.crossDomain && !y["X-Requested-With"]) {
              y["X-Requested-With"] = "XMLHttpRequest";
            }
            for (b in y) {
              w.setRequestHeader(b, y[b]);
            }
            u = function (M) {
              return function () {
                if (u) {
                  u = m = w.onload = w.onerror = w.onabort = w.ontimeout = w.onreadystatechange = null;
                  if (M === "abort") {
                    w.abort();
                  } else if (M === "error") {
                    if (typeof w.status != "number") {
                      x(0, "error");
                    } else {
                      x(w.status, w.statusText);
                    }
                  } else {
                    x(Dp[w.status] || w.status, w.statusText, (w.responseType || "text") !== "text" || typeof w.responseText != "string" ? {
                      binary: w.response
                    } : {
                      text: w.responseText
                    }, w.getAllResponseHeaders());
                  }
                }
              };
            };
            w.onload = u();
            m = w.onerror = w.ontimeout = u("error");
            if (w.onabort !== undefined) {
              w.onabort = m;
            } else {
              w.onreadystatechange = function () {
                if (w.readyState === 4) {
                  t.setTimeout(function () {
                    if (u) {
                      m();
                    }
                  });
                }
              };
            }
            u = u("abort");
            try {
              w.send(h.hasContent && h.data || null);
            } catch (M) {
              if (u) {
                throw M;
              }
            }
          },
          abort: function () {
            if (u) {
              u();
            }
          }
        };
      }
    });
    d.ajaxPrefilter(function (h) {
      if (h.crossDomain) {
        h.contents.script = false;
      }
    });
    d.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (h) {
          d.globalEval(h);
          return h;
        }
      }
    });
    d.ajaxPrefilter("script", function (h) {
      if (h.cache === undefined) {
        h.cache = false;
      }
      if (h.crossDomain) {
        h.type = "GET";
      }
    });
    d.ajaxTransport("script", function (h) {
      if (h.crossDomain || h.scriptAttrs) {
        var u;
        var m;
        return {
          send: function (y, x) {
            u = d("<script>").attr(h.scriptAttrs || {}).prop({
              charset: h.scriptCharset,
              src: h.url
            }).on("load error", m = function (b) {
              u.remove();
              m = null;
              if (b) {
                x(b.type === "error" ? 404 : 200, b.type);
              }
            });
            E.head.appendChild(u[0]);
          },
          abort: function () {
            if (m) {
              m();
            }
          }
        };
      }
    });
    var tu = [];
    var oo = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var h = tu.pop() || d.expando + "_" + Xl.guid++;
        this[h] = true;
        return h;
      }
    });
    d.ajaxPrefilter("json jsonp", function (h, u, m) {
      var y;
      var x;
      var b;
      var w = h.jsonp !== false && (oo.test(h.url) ? "url" : typeof h.data == "string" && (h.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && oo.test(h.data) && "data");
      if (w || h.dataTypes[0] === "jsonp") {
        y = h.jsonpCallback = T(h.jsonpCallback) ? h.jsonpCallback() : h.jsonpCallback;
        if (w) {
          h[w] = h[w].replace(oo, "$1" + y);
        } else if (h.jsonp !== false) {
          h.url += (ro.test(h.url) ? "&" : "?") + h.jsonp + "=" + y;
        }
        h.converters["script json"] = function () {
          if (!b) {
            d.error(y + " was not called");
          }
          return b[0];
        };
        h.dataTypes[0] = "json";
        x = t[y];
        t[y] = function () {
          b = arguments;
        };
        m.always(function () {
          if (x === undefined) {
            d(t).removeProp(y);
          } else {
            t[y] = x;
          }
          if (h[y]) {
            h.jsonpCallback = u.jsonpCallback;
            tu.push(y);
          }
          if (b && T(x)) {
            x(b[0]);
          }
          b = x = undefined;
        });
        return "script";
      }
    });
    _.createHTMLDocument = function () {
      var h = E.implementation.createHTMLDocument("").body;
      h.innerHTML = "<form></form><form></form>";
      return h.childNodes.length === 2;
    }();
    d.parseHTML = function (h, u, m) {
      if (typeof h != "string") {
        return [];
      }
      if (typeof u == "boolean") {
        m = u;
        u = false;
      }
      var y;
      var x;
      var b;
      if (!u) {
        if (_.createHTMLDocument) {
          u = E.implementation.createHTMLDocument("");
          y = u.createElement("base");
          y.href = E.location.href;
          u.head.appendChild(y);
        } else {
          u = E;
        }
      }
      x = xt.exec(h);
      b = !m && [];
      if (x) {
        return [u.createElement(x[1])];
      } else {
        x = An([h], u, b);
        if (b && b.length) {
          d(b).remove();
        }
        return d.merge([], x.childNodes);
      }
    };
    d.fn.load = function (h, u, m) {
      var y;
      var x;
      var b;
      var w = this;
      var M = h.indexOf(" ");
      if (M > -1) {
        y = gi(h.slice(M));
        h = h.slice(0, M);
      }
      if (T(u)) {
        m = u;
        u = undefined;
      } else if (u && typeof u == "object") {
        x = "POST";
      }
      if (w.length > 0) {
        d.ajax({
          url: h,
          type: x || "GET",
          dataType: "html",
          data: u
        }).done(function (R) {
          b = arguments;
          w.html(y ? d("<div>").append(d.parseHTML(R)).find(y) : R);
        }).always(m && function (R, F) {
          w.each(function () {
            m.apply(this, b || [R.responseText, F, R]);
          });
        });
      }
      return this;
    };
    d.expr.pseudos.animated = function (h) {
      return d.grep(d.timers, function (u) {
        return h === u.elem;
      }).length;
    };
    d.offset = {
      setOffset: function (h, u, m) {
        var y;
        var x;
        var b;
        var w;
        var M;
        var R;
        var F;
        var H = d.css(h, "position");
        var X = d(h);
        var U = {};
        if (H === "static") {
          h.style.position = "relative";
        }
        M = X.offset();
        b = d.css(h, "top");
        R = d.css(h, "left");
        F = (H === "absolute" || H === "fixed") && (b + R).indexOf("auto") > -1;
        if (F) {
          y = X.position();
          w = y.top;
          x = y.left;
        } else {
          w = parseFloat(b) || 0;
          x = parseFloat(R) || 0;
        }
        if (T(u)) {
          u = u.call(h, m, d.extend({}, M));
        }
        if (u.top != null) {
          U.top = u.top - M.top + w;
        }
        if (u.left != null) {
          U.left = u.left - M.left + x;
        }
        if ("using" in u) {
          u.using.call(h, U);
        } else {
          X.css(U);
        }
      }
    };
    d.fn.extend({
      offset: function (h) {
        if (arguments.length) {
          if (h === undefined) {
            return this;
          } else {
            return this.each(function (x) {
              d.offset.setOffset(this, h, x);
            });
          }
        }
        var u;
        var m;
        var y = this[0];
        if (y) {
          if (y.getClientRects().length) {
            u = y.getBoundingClientRect();
            m = y.ownerDocument.defaultView;
            return {
              top: u.top + m.pageYOffset,
              left: u.left + m.pageXOffset
            };
          } else {
            return {
              top: 0,
              left: 0
            };
          }
        }
      },
      position: function () {
        if (this[0]) {
          var h;
          var u;
          var m;
          var y = this[0];
          var x = {
            top: 0,
            left: 0
          };
          if (d.css(y, "position") === "fixed") {
            u = y.getBoundingClientRect();
          } else {
            u = this.offset();
            m = y.ownerDocument;
            h = y.offsetParent || m.documentElement;
            while (h && (h === m.body || h === m.documentElement) && d.css(h, "position") === "static") {
              h = h.parentNode;
            }
            if (h && h !== y && h.nodeType === 1) {
              x = d(h).offset();
              x.top += d.css(h, "borderTopWidth", true);
              x.left += d.css(h, "borderLeftWidth", true);
            }
          }
          return {
            top: u.top - x.top - d.css(y, "marginTop", true),
            left: u.left - x.left - d.css(y, "marginLeft", true)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var h = this.offsetParent; h && d.css(h, "position") === "static";) {
            h = h.offsetParent;
          }
          return h || St;
        });
      }
    });
    d.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (h, u) {
      var m = u === "pageYOffset";
      d.fn[h] = function (y) {
        return oe(this, function (x, b, w) {
          var M;
          if (A(x)) {
            M = x;
          } else if (x.nodeType === 9) {
            M = x.defaultView;
          }
          if (w === undefined) {
            if (M) {
              return M[u];
            } else {
              return x[b];
            }
          }
          if (M) {
            M.scrollTo(m ? M.pageXOffset : w, m ? w : M.pageYOffset);
          } else {
            x[b] = w;
          }
        }, h, y, arguments.length);
      };
    });
    d.each(["top", "left"], function (h, u) {
      d.cssHooks[u] = Nl(_.pixelPosition, function (m, y) {
        if (y) {
          y = Sn(m, u);
          if (Ka.test(y)) {
            return d(m).position()[u] + "px";
          } else {
            return y;
          }
        }
      });
    });
    d.each({
      Height: "height",
      Width: "width"
    }, function (h, u) {
      d.each({
        padding: "inner" + h,
        content: u,
        "": "outer" + h
      }, function (m, y) {
        d.fn[y] = function (x, b) {
          var w = arguments.length && (m || typeof x != "boolean");
          var M = m || (x === true || b === true ? "margin" : "border");
          return oe(this, function (R, F, H) {
            var X;
            if (A(R)) {
              if (y.indexOf("outer") === 0) {
                return R["inner" + h];
              } else {
                return R.document.documentElement["client" + h];
              }
            } else if (R.nodeType === 9) {
              X = R.documentElement;
              return Math.max(R.body["scroll" + h], X["scroll" + h], R.body["offset" + h], X["offset" + h], X["client" + h]);
            } else if (H === undefined) {
              return d.css(R, F, M);
            } else {
              return d.style(R, F, H, M);
            }
          }, u, w ? x : undefined, w);
        };
      });
    });
    d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (h, u) {
      d.fn[u] = function (m) {
        return this.on(u, m);
      };
    });
    d.fn.extend({
      bind: function (h, u, m) {
        return this.on(h, null, u, m);
      },
      unbind: function (h, u) {
        return this.off(h, null, u);
      },
      delegate: function (h, u, m, y) {
        return this.on(u, h, m, y);
      },
      undelegate: function (h, u, m) {
        if (arguments.length === 1) {
          return this.off(h, "**");
        } else {
          return this.off(u, h || "**", m);
        }
      },
      hover: function (h, u) {
        return this.on("mouseenter", h).on("mouseleave", u || h);
      }
    });
    d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (h, u) {
      d.fn[u] = function (m, y) {
        if (arguments.length > 0) {
          return this.on(u, null, m, y);
        } else {
          return this.trigger(u);
        }
      };
    });
    var Bp = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    d.proxy = function (h, u) {
      var m;
      var y;
      var x;
      if (typeof u == "string") {
        m = h[u];
        u = h;
        h = m;
      }
      if (T(h)) {
        y = s.call(arguments, 2);
        x = function () {
          return h.apply(u || this, y.concat(s.call(arguments)));
        };
        x.guid = h.guid = h.guid || d.guid++;
        return x;
      }
    };
    d.holdReady = function (h) {
      if (h) {
        d.readyWait++;
      } else {
        d.ready(true);
      }
    };
    d.isArray = Array.isArray;
    d.parseJSON = JSON.parse;
    d.nodeName = N;
    d.isFunction = T;
    d.isWindow = A;
    d.camelCase = Fe;
    d.type = P;
    d.now = Date.now;
    d.isNumeric = function (h) {
      var u = d.type(h);
      return (u === "number" || u === "string") && !isNaN(h - parseFloat(h));
    };
    d.trim = function (h) {
      if (h == null) {
        return "";
      } else {
        return (h + "").replace(Bp, "$1");
      }
    };
    var Fp = t.jQuery;
    var Op = t.$;
    d.noConflict = function (h) {
      if (t.$ === d) {
        t.$ = Op;
      }
      if (h && t.jQuery === d) {
        t.jQuery = Fp;
      }
      return d;
    };
    if (typeof e === "undefined") {
      t.jQuery = t.$ = d;
    }
    return d;
  });
})(jc);
var Wp = jc.exports;
const p1 = Ca(Wp);
var Oi = (i => {
  i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY";
  i[i.WEBGL = 1] = "WEBGL";
  i[i.WEBGL2 = 2] = "WEBGL2";
  return i;
})(Oi || {});
var ul = (i => {
  i[i.UNKNOWN = 0] = "UNKNOWN";
  i[i.WEBGL = 1] = "WEBGL";
  i[i.CANVAS = 2] = "CANVAS";
  return i;
})(ul || {});
var uh = (i => {
  i[i.COLOR = 16384] = "COLOR";
  i[i.DEPTH = 256] = "DEPTH";
  i[i.STENCIL = 1024] = "STENCIL";
  return i;
})(uh || {});
var q = (i => {
  i[i.NORMAL = 0] = "NORMAL";
  i[i.ADD = 1] = "ADD";
  i[i.MULTIPLY = 2] = "MULTIPLY";
  i[i.SCREEN = 3] = "SCREEN";
  i[i.OVERLAY = 4] = "OVERLAY";
  i[i.DARKEN = 5] = "DARKEN";
  i[i.LIGHTEN = 6] = "LIGHTEN";
  i[i.COLOR_DODGE = 7] = "COLOR_DODGE";
  i[i.COLOR_BURN = 8] = "COLOR_BURN";
  i[i.HARD_LIGHT = 9] = "HARD_LIGHT";
  i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT";
  i[i.DIFFERENCE = 11] = "DIFFERENCE";
  i[i.EXCLUSION = 12] = "EXCLUSION";
  i[i.HUE = 13] = "HUE";
  i[i.SATURATION = 14] = "SATURATION";
  i[i.COLOR = 15] = "COLOR";
  i[i.LUMINOSITY = 16] = "LUMINOSITY";
  i[i.NORMAL_NPM = 17] = "NORMAL_NPM";
  i[i.ADD_NPM = 18] = "ADD_NPM";
  i[i.SCREEN_NPM = 19] = "SCREEN_NPM";
  i[i.NONE = 20] = "NONE";
  i[i.SRC_OVER = 0] = "SRC_OVER";
  i[i.SRC_IN = 21] = "SRC_IN";
  i[i.SRC_OUT = 22] = "SRC_OUT";
  i[i.SRC_ATOP = 23] = "SRC_ATOP";
  i[i.DST_OVER = 24] = "DST_OVER";
  i[i.DST_IN = 25] = "DST_IN";
  i[i.DST_OUT = 26] = "DST_OUT";
  i[i.DST_ATOP = 27] = "DST_ATOP";
  i[i.ERASE = 26] = "ERASE";
  i[i.SUBTRACT = 28] = "SUBTRACT";
  i[i.XOR = 29] = "XOR";
  return i;
})(q || {});
var or = (i => {
  i[i.POINTS = 0] = "POINTS";
  i[i.LINES = 1] = "LINES";
  i[i.LINE_LOOP = 2] = "LINE_LOOP";
  i[i.LINE_STRIP = 3] = "LINE_STRIP";
  i[i.TRIANGLES = 4] = "TRIANGLES";
  i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP";
  i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
  return i;
})(or || {});
var Z = (i => {
  i[i.RGBA = 6408] = "RGBA";
  i[i.RGB = 6407] = "RGB";
  i[i.RG = 33319] = "RG";
  i[i.RED = 6403] = "RED";
  i[i.RGBA_INTEGER = 36249] = "RGBA_INTEGER";
  i[i.RGB_INTEGER = 36248] = "RGB_INTEGER";
  i[i.RG_INTEGER = 33320] = "RG_INTEGER";
  i[i.RED_INTEGER = 36244] = "RED_INTEGER";
  i[i.ALPHA = 6406] = "ALPHA";
  i[i.LUMINANCE = 6409] = "LUMINANCE";
  i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA";
  i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT";
  i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
  return i;
})(Z || {});
var hn = (i => {
  i[i.TEXTURE_2D = 3553] = "TEXTURE_2D";
  i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP";
  i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY";
  i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
  return i;
})(hn || {});
var mt = (i => {
  i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE";
  i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT";
  i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5";
  i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  i[i.UNSIGNED_INT = 5125] = "UNSIGNED_INT";
  i[i.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  i[i.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  i[i.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8";
  i[i.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  i[i.BYTE = 5120] = "BYTE";
  i[i.SHORT = 5122] = "SHORT";
  i[i.INT = 5124] = "INT";
  i[i.FLOAT = 5126] = "FLOAT";
  i[i.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  i[i.HALF_FLOAT = 36193] = "HALF_FLOAT";
  return i;
})(mt || {});
var ct = (i => {
  i[i.FLOAT = 0] = "FLOAT";
  i[i.INT = 1] = "INT";
  i[i.UINT = 2] = "UINT";
  return i;
})(ct || {});
var hr = (i => {
  i[i.NEAREST = 0] = "NEAREST";
  i[i.LINEAR = 1] = "LINEAR";
  return i;
})(hr || {});
var Yr = (i => {
  i[i.CLAMP = 33071] = "CLAMP";
  i[i.REPEAT = 10497] = "REPEAT";
  i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
  return i;
})(Yr || {});
var Br = (i => {
  i[i.OFF = 0] = "OFF";
  i[i.POW2 = 1] = "POW2";
  i[i.ON = 2] = "ON";
  i[i.ON_MANUAL = 3] = "ON_MANUAL";
  return i;
})(Br || {});
var ke = (i => {
  i[i.NPM = 0] = "NPM";
  i[i.UNPACK = 1] = "UNPACK";
  i[i.PMA = 2] = "PMA";
  i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA";
  i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD";
  i[i.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
  return i;
})(ke || {});
var Cr = (i => {
  i[i.NO = 0] = "NO";
  i[i.YES = 1] = "YES";
  i[i.AUTO = 2] = "AUTO";
  i[i.BLEND = 0] = "BLEND";
  i[i.CLEAR = 1] = "CLEAR";
  i[i.BLIT = 2] = "BLIT";
  return i;
})(Cr || {});
var cl = (i => {
  i[i.AUTO = 0] = "AUTO";
  i[i.MANUAL = 1] = "MANUAL";
  return i;
})(cl || {});
var Ye = (i => {
  i.LOW = "lowp";
  i.MEDIUM = "mediump";
  i.HIGH = "highp";
  return i;
})(Ye || {});
var fe = (i => {
  i[i.NONE = 0] = "NONE";
  i[i.SCISSOR = 1] = "SCISSOR";
  i[i.STENCIL = 2] = "STENCIL";
  i[i.SPRITE = 3] = "SPRITE";
  i[i.COLOR = 4] = "COLOR";
  return i;
})(fe || {});
var he = (i => {
  i[i.NONE = 0] = "NONE";
  i[i.LOW = 2] = "LOW";
  i[i.MEDIUM = 4] = "MEDIUM";
  i[i.HIGH = 8] = "HIGH";
  return i;
})(he || {});
var Mr = (i => {
  i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
  i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER";
  i[i.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
  return i;
})(Mr || {});
const jp = {
  createCanvas: (i, t) => {
    const e = document.createElement("canvas");
    e.width = i;
    e.height = t;
    return e;
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (i, t) => fetch(i, t),
  parseXML: i => new DOMParser().parseFromString(i, "text/xml")
};
const st = {
  ADAPTER: jp,
  RESOLUTION: 1,
  CREATE_IMAGE_BITMAP: false,
  ROUND_PIXELS: false
};
var mo = /iPhone/i;
var nu = /iPod/i;
var su = /iPad/i;
var au = /\biOS-universal(?:.+)Mac\b/i;
var yo = /\bAndroid(?:.+)Mobile\b/i;
var ou = /Android/i;
var Wi = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var Es = /Silk/i;
var Vr = /Windows Phone/i;
var hu = /\bWindows(?:.+)ARM\b/i;
var lu = /BlackBerry/i;
var uu = /BB10/i;
var cu = /Opera Mini/i;
var du = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var fu = /Mobile(?:.+)Firefox\b/i;
function pu(i) {
  return typeof i !== "undefined" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream === "undefined";
}
function Xp(i) {
  return function (t) {
    return t.test(i);
  };
}
function gu(i) {
  var t = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  if (!i && typeof navigator !== "undefined") {
    t = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints || 0
    };
  } else if (typeof i == "string") {
    t.userAgent = i;
  } else if (i && i.userAgent) {
    t = {
      userAgent: i.userAgent,
      platform: i.platform,
      maxTouchPoints: i.maxTouchPoints || 0
    };
  }
  var e = t.userAgent;
  var r = e.split("[FBAN");
  if (typeof r[1] !== "undefined") {
    e = r[0];
  }
  r = e.split("Twitter");
  if (typeof r[1] !== "undefined") {
    e = r[0];
  }
  var n = Xp(e);
  var s = {
    apple: {
      phone: n(mo) && !n(Vr),
      ipod: n(nu),
      tablet: !n(mo) && (n(su) || pu(t)) && !n(Vr),
      universal: n(au),
      device: (n(mo) || n(nu) || n(su) || n(au) || pu(t)) && !n(Vr)
    },
    amazon: {
      phone: n(Wi),
      tablet: !n(Wi) && n(Es),
      device: n(Wi) || n(Es)
    },
    android: {
      phone: !n(Vr) && n(Wi) || !n(Vr) && n(yo),
      tablet: !n(Vr) && !n(Wi) && !n(yo) && (n(Es) || n(ou)),
      device: !n(Vr) && (n(Wi) || n(Es) || n(yo) || n(ou)) || n(/\bokhttp\b/i)
    },
    windows: {
      phone: n(Vr),
      tablet: n(hu),
      device: n(Vr) || n(hu)
    },
    other: {
      blackberry: n(lu),
      blackberry10: n(uu),
      opera: n(cu),
      firefox: n(fu),
      chrome: n(du),
      device: n(lu) || n(uu) || n(cu) || n(fu) || n(du)
    },
    any: false,
    phone: false,
    tablet: false
  };
  s.any = s.apple.device || s.android.device || s.windows.device || s.other.device;
  s.phone = s.apple.phone || s.android.phone || s.windows.phone;
  s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet;
  return s;
}
const zp = gu.default ?? gu;
const Pr = zp(globalThis.navigator);
st.RETINA_PREFIX = /@([0-9\.]+)x/;
st.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
var Xc = {
  exports: {}
};
(function (i) {
  var t = Object.prototype.hasOwnProperty;
  var e = "~";
  function r() {}
  if (Object.create) {
    r.prototype = Object.create(null);
    if (!new r().__proto__) {
      e = false;
    }
  }
  function n(l, c, p) {
    this.fn = l;
    this.context = c;
    this.once = p || false;
  }
  function s(l, c, p, g, f) {
    if (typeof p != "function") {
      throw new TypeError("The listener must be a function");
    }
    var v = new n(p, g || l, f);
    var _ = e ? e + c : c;
    if (l._events[_]) {
      if (l._events[_].fn) {
        l._events[_] = [l._events[_], v];
      } else {
        l._events[_].push(v);
      }
    } else {
      l._events[_] = v;
      l._eventsCount++;
    }
    return l;
  }
  function a(l, c) {
    if (--l._eventsCount === 0) {
      l._events = new r();
    } else {
      delete l._events[c];
    }
  }
  function o() {
    this._events = new r();
    this._eventsCount = 0;
  }
  o.prototype.eventNames = function () {
    var c = [];
    var p;
    var g;
    if (this._eventsCount === 0) {
      return c;
    }
    for (g in p = this._events) {
      if (t.call(p, g)) {
        c.push(e ? g.slice(1) : g);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return c.concat(Object.getOwnPropertySymbols(p));
    } else {
      return c;
    }
  };
  o.prototype.listeners = function (c) {
    var p = e ? e + c : c;
    var g = this._events[p];
    if (!g) {
      return [];
    }
    if (g.fn) {
      return [g.fn];
    }
    for (var f = 0, v = g.length, _ = new Array(v); f < v; f++) {
      _[f] = g[f].fn;
    }
    return _;
  };
  o.prototype.listenerCount = function (c) {
    var p = e ? e + c : c;
    var g = this._events[p];
    if (g) {
      if (g.fn) {
        return 1;
      } else {
        return g.length;
      }
    } else {
      return 0;
    }
  };
  o.prototype.emit = function (c, p, g, f, v, _) {
    var T = e ? e + c : c;
    if (!this._events[T]) {
      return false;
    }
    var A = this._events[T];
    var E = arguments.length;
    var I;
    var S;
    if (A.fn) {
      if (A.once) {
        this.removeListener(c, A.fn, undefined, true);
      }
      switch (E) {
        case 1:
          A.fn.call(A.context);
          return true;
        case 2:
          A.fn.call(A.context, p);
          return true;
        case 3:
          A.fn.call(A.context, p, g);
          return true;
        case 4:
          A.fn.call(A.context, p, g, f);
          return true;
        case 5:
          A.fn.call(A.context, p, g, f, v);
          return true;
        case 6:
          A.fn.call(A.context, p, g, f, v, _);
          return true;
      }
      S = 1;
      I = new Array(E - 1);
      for (; S < E; S++) {
        I[S - 1] = arguments[S];
      }
      A.fn.apply(A.context, I);
    } else {
      var P = A.length;
      var k;
      for (S = 0; S < P; S++) {
        if (A[S].once) {
          this.removeListener(c, A[S].fn, undefined, true);
        }
        switch (E) {
          case 1:
            A[S].fn.call(A[S].context);
            break;
          case 2:
            A[S].fn.call(A[S].context, p);
            break;
          case 3:
            A[S].fn.call(A[S].context, p, g);
            break;
          case 4:
            A[S].fn.call(A[S].context, p, g, f);
            break;
          default:
            if (!I) {
              k = 1;
              I = new Array(E - 1);
              for (; k < E; k++) {
                I[k - 1] = arguments[k];
              }
            }
            A[S].fn.apply(A[S].context, I);
        }
      }
    }
    return true;
  };
  o.prototype.on = function (c, p, g) {
    return s(this, c, p, g, false);
  };
  o.prototype.once = function (c, p, g) {
    return s(this, c, p, g, true);
  };
  o.prototype.removeListener = function (c, p, g, f) {
    var v = e ? e + c : c;
    if (!this._events[v]) {
      return this;
    }
    if (!p) {
      a(this, v);
      return this;
    }
    var _ = this._events[v];
    if (_.fn) {
      if (_.fn === p && (!f || _.once) && (!g || _.context === g)) {
        a(this, v);
      }
    } else {
      for (var T = 0, A = [], E = _.length; T < E; T++) {
        if (_[T].fn !== p || f && !_[T].once || g && _[T].context !== g) {
          A.push(_[T]);
        }
      }
      if (A.length) {
        this._events[v] = A.length === 1 ? A[0] : A;
      } else {
        a(this, v);
      }
    }
    return this;
  };
  o.prototype.removeAllListeners = function (c) {
    var p;
    if (c) {
      p = e ? e + c : c;
      if (this._events[p]) {
        a(this, p);
      }
    } else {
      this._events = new r();
      this._eventsCount = 0;
    }
    return this;
  };
  o.prototype.off = o.prototype.removeListener;
  o.prototype.addListener = o.prototype.on;
  o.prefixed = e;
  o.EventEmitter = o;
  i.exports = o;
})(Xc);
var qp = Xc.exports;
const xn = Ca(qp);
var dl = {
  exports: {}
};
dl.exports = Ia;
dl.exports.default = Ia;
function Ia(i, t, e) {
  e = e || 2;
  var r = t && t.length;
  var n = r ? t[0] * e : i.length;
  var s = zc(i, 0, n, e, true);
  var a = [];
  if (!s || s.next === s.prev) {
    return a;
  }
  var o;
  var l;
  var c;
  var p;
  var g;
  var f;
  var v;
  if (r) {
    s = Jp(i, t, s, e);
  }
  if (i.length > e * 80) {
    o = c = i[0];
    l = p = i[1];
    for (var _ = e; _ < n; _ += e) {
      g = i[_];
      f = i[_ + 1];
      if (g < o) {
        o = g;
      }
      if (f < l) {
        l = f;
      }
      if (g > c) {
        c = g;
      }
      if (f > p) {
        p = f;
      }
    }
    v = Math.max(c - o, p - l);
    v = v !== 0 ? 32767 / v : 0;
  }
  Jn(s, a, e, o, l, v, 0);
  return a;
}
function zc(i, t, e, r, n) {
  var s;
  var a;
  if (n === fh(i, t, e, r) > 0) {
    for (s = t; s < e; s += r) {
      a = mu(s, i[s], i[s + 1], a);
    }
  } else {
    for (s = e - r; s >= t; s -= r) {
      a = mu(s, i[s], i[s + 1], a);
    }
  }
  if (a && Ra(a, a.next)) {
    es(a);
    a = a.next;
  }
  return a;
}
function Bi(i, t) {
  if (!i) {
    return i;
  }
  t ||= i;
  var e = i;
  var r;
  do {
    r = false;
    if (!e.steiner && (Ra(e, e.next) || ne(e.prev, e, e.next) === 0)) {
      es(e);
      e = t = e.prev;
      if (e === e.next) {
        break;
      }
      r = true;
    } else {
      e = e.next;
    }
  } while (r || e !== t);
  return t;
}
function Jn(i, t, e, r, n, s, a) {
  if (i) {
    if (!a && s) {
      ng(i, r, n, s);
    }
    var o = i;
    var l;
    var c;
    while (i.prev !== i.next) {
      l = i.prev;
      c = i.next;
      if (s ? Kp(i, r, n, s) : Yp(i)) {
        t.push(l.i / e | 0);
        t.push(i.i / e | 0);
        t.push(c.i / e | 0);
        es(i);
        i = c.next;
        o = c.next;
        continue;
      }
      i = c;
      if (i === o) {
        if (a) {
          if (a === 1) {
            i = Zp(Bi(i), t, e);
            Jn(i, t, e, r, n, s, 2);
          } else if (a === 2) {
            Qp(i, t, e, r, n, s);
          }
        } else {
          Jn(Bi(i), t, e, r, n, s, 1);
        }
        break;
      }
    }
  }
}
function Yp(i) {
  var t = i.prev;
  var e = i;
  var r = i.next;
  if (ne(t, e, r) >= 0) {
    return false;
  }
  var n = t.x;
  var s = e.x;
  var a = r.x;
  var o = t.y;
  var l = e.y;
  var c = r.y;
  var p = n < s ? n < a ? n : a : s < a ? s : a;
  var g = o < l ? o < c ? o : c : l < c ? l : c;
  var f = n > s ? n > a ? n : a : s > a ? s : a;
  var v = o > l ? o > c ? o : c : l > c ? l : c;
  for (var _ = r.next; _ !== t;) {
    if (_.x >= p && _.x <= f && _.y >= g && _.y <= v && sn(n, o, s, l, a, c, _.x, _.y) && ne(_.prev, _, _.next) >= 0) {
      return false;
    }
    _ = _.next;
  }
  return true;
}
function Kp(i, t, e, r) {
  var n = i.prev;
  var s = i;
  var a = i.next;
  if (ne(n, s, a) >= 0) {
    return false;
  }
  var o = n.x;
  var l = s.x;
  var c = a.x;
  var p = n.y;
  var g = s.y;
  var f = a.y;
  var v = o < l ? o < c ? o : c : l < c ? l : c;
  var _ = p < g ? p < f ? p : f : g < f ? g : f;
  var T = o > l ? o > c ? o : c : l > c ? l : c;
  var A = p > g ? p > f ? p : f : g > f ? g : f;
  for (var E = ch(v, _, t, e, r), I = ch(T, A, t, e, r), S = i.prevZ, P = i.nextZ; S && S.z >= E && P && P.z <= I;) {
    if (S.x >= v && S.x <= T && S.y >= _ && S.y <= A && S !== n && S !== a && sn(o, p, l, g, c, f, S.x, S.y) && ne(S.prev, S, S.next) >= 0 || (S = S.prevZ, P.x >= v && P.x <= T && P.y >= _ && P.y <= A && P !== n && P !== a && sn(o, p, l, g, c, f, P.x, P.y) && ne(P.prev, P, P.next) >= 0)) {
      return false;
    }
    P = P.nextZ;
  }
  while (S && S.z >= E) {
    if (S.x >= v && S.x <= T && S.y >= _ && S.y <= A && S !== n && S !== a && sn(o, p, l, g, c, f, S.x, S.y) && ne(S.prev, S, S.next) >= 0) {
      return false;
    }
    S = S.prevZ;
  }
  while (P && P.z <= I) {
    if (P.x >= v && P.x <= T && P.y >= _ && P.y <= A && P !== n && P !== a && sn(o, p, l, g, c, f, P.x, P.y) && ne(P.prev, P, P.next) >= 0) {
      return false;
    }
    P = P.nextZ;
  }
  return true;
}
function Zp(i, t, e) {
  var r = i;
  do {
    var n = r.prev;
    var s = r.next.next;
    if (!Ra(n, s) && qc(n, r, r.next, s) && ts(n, s) && ts(s, n)) {
      t.push(n.i / e | 0);
      t.push(r.i / e | 0);
      t.push(s.i / e | 0);
      es(r);
      es(r.next);
      r = i = s;
    }
    r = r.next;
  } while (r !== i);
  return Bi(r);
}
function Qp(i, t, e, r, n, s) {
  var a = i;
  do {
    for (var o = a.next.next; o !== a.prev;) {
      if (a.i !== o.i && og(a, o)) {
        var l = Yc(a, o);
        a = Bi(a, a.next);
        l = Bi(l, l.next);
        Jn(a, t, e, r, n, s, 0);
        Jn(l, t, e, r, n, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function Jp(i, t, e, r) {
  var n = [];
  var s;
  var a;
  var o;
  var l;
  var c;
  s = 0;
  a = t.length;
  for (; s < a; s++) {
    o = t[s] * r;
    l = s < a - 1 ? t[s + 1] * r : i.length;
    c = zc(i, o, l, r, false);
    if (c === c.next) {
      c.steiner = true;
    }
    n.push(ag(c));
  }
  n.sort(tg);
  s = 0;
  for (; s < n.length; s++) {
    e = eg(n[s], e);
  }
  return e;
}
function tg(i, t) {
  return i.x - t.x;
}
function eg(i, t) {
  var e = rg(i, t);
  if (!e) {
    return t;
  }
  var r = Yc(e, i);
  Bi(r, r.next);
  return Bi(e, e.next);
}
function rg(i, t) {
  var e = t;
  var r = i.x;
  var n = i.y;
  var s = -Infinity;
  var a;
  do {
    if (n <= e.y && n >= e.next.y && e.next.y !== e.y) {
      var o = e.x + (n - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (o <= r && o > s && (s = o, a = e.x < e.next.x ? e : e.next, o === r)) {
        return a;
      }
    }
    e = e.next;
  } while (e !== t);
  if (!a) {
    return null;
  }
  var l = a;
  var c = a.x;
  var p = a.y;
  var g = Infinity;
  var f;
  e = a;
  do {
    if (r >= e.x && e.x >= c && r !== e.x && sn(n < p ? r : s, n, c, p, n < p ? s : r, n, e.x, e.y)) {
      f = Math.abs(n - e.y) / (r - e.x);
      if (ts(e, i) && (f < g || f === g && (e.x > a.x || e.x === a.x && ig(a, e)))) {
        a = e;
        g = f;
      }
    }
    e = e.next;
  } while (e !== l);
  return a;
}
function ig(i, t) {
  return ne(i.prev, i, t.prev) < 0 && ne(t.next, i, i.next) < 0;
}
function ng(i, t, e, r) {
  var n = i;
  do {
    if (n.z === 0) {
      n.z = ch(n.x, n.y, t, e, r);
    }
    n.prevZ = n.prev;
    n.nextZ = n.next;
    n = n.next;
  } while (n !== i);
  n.prevZ.nextZ = null;
  n.prevZ = null;
  sg(n);
}
function sg(i) {
  var t;
  var e;
  var r;
  var n;
  var s;
  var a;
  var o;
  var l;
  var c = 1;
  do {
    e = i;
    i = null;
    s = null;
    a = 0;
    while (e) {
      a++;
      r = e;
      o = 0;
      t = 0;
      for (; t < c && (o++, r = r.nextZ, !!r); t++);
      for (l = c; o > 0 || l > 0 && r;) {
        if (o !== 0 && (l === 0 || !r || e.z <= r.z)) {
          n = e;
          e = e.nextZ;
          o--;
        } else {
          n = r;
          r = r.nextZ;
          l--;
        }
        if (s) {
          s.nextZ = n;
        } else {
          i = n;
        }
        n.prevZ = s;
        s = n;
      }
      e = r;
    }
    s.nextZ = null;
    c *= 2;
  } while (a > 1);
  return i;
}
function ch(i, t, e, r, n) {
  i = (i - e) * n | 0;
  t = (t - r) * n | 0;
  i = (i | i << 8) & 16711935;
  i = (i | i << 4) & 252645135;
  i = (i | i << 2) & 858993459;
  i = (i | i << 1) & 1431655765;
  t = (t | t << 8) & 16711935;
  t = (t | t << 4) & 252645135;
  t = (t | t << 2) & 858993459;
  t = (t | t << 1) & 1431655765;
  return i | t << 1;
}
function ag(i) {
  var t = i;
  var e = i;
  do {
    if (t.x < e.x || t.x === e.x && t.y < e.y) {
      e = t;
    }
    t = t.next;
  } while (t !== i);
  return e;
}
function sn(i, t, e, r, n, s, a, o) {
  return (n - a) * (t - o) >= (i - a) * (s - o) && (i - a) * (r - o) >= (e - a) * (t - o) && (e - a) * (s - o) >= (n - a) * (r - o);
}
function og(i, t) {
  return i.next.i !== t.i && i.prev.i !== t.i && !hg(i, t) && (ts(i, t) && ts(t, i) && lg(i, t) && (ne(i.prev, i, t.prev) || ne(i, t.prev, t)) || Ra(i, t) && ne(i.prev, i, i.next) > 0 && ne(t.prev, t, t.next) > 0);
}
function ne(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function Ra(i, t) {
  return i.x === t.x && i.y === t.y;
}
function qc(i, t, e, r) {
  var n = Ss(ne(i, t, e));
  var s = Ss(ne(i, t, r));
  var a = Ss(ne(e, r, i));
  var o = Ss(ne(e, r, t));
  return n !== s && a !== o || n === 0 && !!As(i, e, t) || s === 0 && !!As(i, r, t) || a === 0 && !!As(e, i, r) || o === 0 && !!As(e, t, r);
}
function As(i, t, e) {
  return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y);
}
function Ss(i) {
  if (i > 0) {
    return 1;
  } else if (i < 0) {
    return -1;
  } else {
    return 0;
  }
}
function hg(i, t) {
  var e = i;
  do {
    if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && qc(e, e.next, i, t)) {
      return true;
    }
    e = e.next;
  } while (e !== i);
  return false;
}
function ts(i, t) {
  if (ne(i.prev, i, i.next) < 0) {
    return ne(i, t, i.next) >= 0 && ne(i, i.prev, t) >= 0;
  } else {
    return ne(i, t, i.prev) < 0 || ne(i, i.next, t) < 0;
  }
}
function lg(i, t) {
  var e = i;
  var r = false;
  var n = (i.x + t.x) / 2;
  var s = (i.y + t.y) / 2;
  do {
    if (e.y > s != e.next.y > s && e.next.y !== e.y && n < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x) {
      r = !r;
    }
    e = e.next;
  } while (e !== i);
  return r;
}
function Yc(i, t) {
  var e = new dh(i.i, i.x, i.y);
  var r = new dh(t.i, t.x, t.y);
  var n = i.next;
  var s = t.prev;
  i.next = t;
  t.prev = i;
  e.next = n;
  n.prev = e;
  r.next = e;
  e.prev = r;
  s.next = r;
  r.prev = s;
  return r;
}
function mu(i, t, e, r) {
  var n = new dh(i, t, e);
  if (r) {
    n.next = r.next;
    n.prev = r;
    r.next.prev = n;
    r.next = n;
  } else {
    n.prev = n;
    n.next = n;
  }
  return n;
}
function es(i) {
  i.next.prev = i.prev;
  i.prev.next = i.next;
  if (i.prevZ) {
    i.prevZ.nextZ = i.nextZ;
  }
  if (i.nextZ) {
    i.nextZ.prevZ = i.prevZ;
  }
}
function dh(i, t, e) {
  this.i = i;
  this.x = t;
  this.y = e;
  this.prev = null;
  this.next = null;
  this.z = 0;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
Ia.deviation = function (i, t, e, r) {
  var n = t && t.length;
  var s = n ? t[0] * e : i.length;
  var a = Math.abs(fh(i, 0, s, e));
  if (n) {
    for (var o = 0, l = t.length; o < l; o++) {
      var c = t[o] * e;
      var p = o < l - 1 ? t[o + 1] * e : i.length;
      a -= Math.abs(fh(i, c, p, e));
    }
  }
  var g = 0;
  for (o = 0; o < r.length; o += 3) {
    var f = r[o] * e;
    var v = r[o + 1] * e;
    var _ = r[o + 2] * e;
    g += Math.abs((i[f] - i[_]) * (i[v + 1] - i[f + 1]) - (i[f] - i[v]) * (i[_ + 1] - i[f + 1]));
  }
  if (a === 0 && g === 0) {
    return 0;
  } else {
    return Math.abs((g - a) / a);
  }
};
function fh(i, t, e, r) {
  var n = 0;
  for (var s = t, a = e - r; s < e; s += r) {
    n += (i[a] - i[s]) * (i[s + 1] + i[a + 1]);
    a = s;
  }
  return n;
}
Ia.flatten = function (i) {
  var t = i[0][0].length;
  var e = {
    vertices: [],
    holes: [],
    dimensions: t
  };
  var r = 0;
  for (var n = 0; n < i.length; n++) {
    for (var s = 0; s < i[n].length; s++) {
      for (var a = 0; a < t; a++) {
        e.vertices.push(i[n][s][a]);
      }
    }
    if (n > 0) {
      r += i[n - 1].length;
      e.holes.push(r);
    }
  }
  return e;
};
var ug = dl.exports;
const Kc = Ca(ug);
var ha = {
  exports: {}
};
/*! https://mths.be/punycode v1.4.1 by @mathias */
ha.exports;
(function (i, t) {
  (function (e) {
    var r = t && !t.nodeType && t;
    var n = i && !i.nodeType && i;
    var s = typeof on == "object" && on;
    if (s.global === s || s.window === s || s.self === s) {
      e = s;
    }
    var a;
    var o = 2147483647;
    var l = 36;
    var c = 1;
    var p = 26;
    var g = 38;
    var f = 700;
    var v = 72;
    var _ = 128;
    var T = "-";
    var A = /^xn--/;
    var E = /[^\x20-\x7E]/;
    var I = /[\x2E\u3002\uFF0E\uFF61]/g;
    var S = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    var P = l - c;
    var k = Math.floor;
    var V = String.fromCharCode;
    var d;
    function O(Q) {
      throw new RangeError(S[Q]);
    }
    function N(Q, K) {
      for (var xt = Q.length, Ct = []; xt--;) {
        Ct[xt] = K(Q[xt]);
      }
      return Ct;
    }
    function z(Q, K) {
      var xt = Q.split("@");
      var Ct = "";
      if (xt.length > 1) {
        Ct = xt[0] + "@";
        Q = xt[1];
      }
      Q = Q.replace(I, ".");
      var It = Q.split(".");
      var kt = N(It, K).join(".");
      return Ct + kt;
    }
    function J(Q) {
      var K = [];
      for (var xt = 0, Ct = Q.length, It, kt; xt < Ct;) {
        It = Q.charCodeAt(xt++);
        if (It >= 55296 && It <= 56319 && xt < Ct) {
          kt = Q.charCodeAt(xt++);
          if ((kt & 64512) == 56320) {
            K.push(((It & 1023) << 10) + (kt & 1023) + 65536);
          } else {
            K.push(It);
            xt--;
          }
        } else {
          K.push(It);
        }
      }
      return K;
    }
    function $(Q) {
      return N(Q, function (K) {
        var xt = "";
        if (K > 65535) {
          K -= 65536;
          xt += V(K >>> 10 & 1023 | 55296);
          K = K & 1023 | 56320;
        }
        xt += V(K);
        return xt;
      }).join("");
    }
    function B(Q) {
      if (Q - 48 < 10) {
        return Q - 22;
      } else if (Q - 65 < 26) {
        return Q - 65;
      } else if (Q - 97 < 26) {
        return Q - 97;
      } else {
        return l;
      }
    }
    function W(Q, K) {
      return Q + 22 + (Q < 26) * 75 - ((K != 0) << 5);
    }
    function tt(Q, K, xt) {
      var Ct = 0;
      Q = xt ? k(Q / f) : Q >> 1;
      Q += k(Q / K);
      for (; Q > P * p >> 1; Ct += l) {
        Q = k(Q / P);
      }
      return k(Ct + (P + 1) * Q / (Q + g));
    }
    function at(Q) {
      var K = [];
      var xt = Q.length;
      var Ct;
      var It = 0;
      var kt = _;
      var Ot = v;
      var Mt;
      var Vt;
      var Yt;
      var Dt;
      var qt;
      var _t;
      var Kt;
      var Xt;
      var me;
      Mt = Q.lastIndexOf(T);
      if (Mt < 0) {
        Mt = 0;
      }
      Vt = 0;
      for (; Vt < Mt; ++Vt) {
        if (Q.charCodeAt(Vt) >= 128) {
          O("not-basic");
        }
        K.push(Q.charCodeAt(Vt));
      }
      for (Yt = Mt > 0 ? Mt + 1 : 0; Yt < xt;) {
        Dt = It;
        qt = 1;
        _t = l;
        for (; Yt >= xt && O("invalid-input"), Kt = B(Q.charCodeAt(Yt++)), (Kt >= l || Kt > k((o - It) / qt)) && O("overflow"), It += Kt * qt, Xt = _t <= Ot ? c : _t >= Ot + p ? p : _t - Ot, !(Kt < Xt); _t += l) {
          me = l - Xt;
          if (qt > k(o / me)) {
            O("overflow");
          }
          qt *= me;
        }
        Ct = K.length + 1;
        Ot = tt(It - Dt, Ct, Dt == 0);
        if (k(It / Ct) > o - kt) {
          O("overflow");
        }
        kt += k(It / Ct);
        It %= Ct;
        K.splice(It++, 0, kt);
      }
      return $(K);
    }
    function nt(Q) {
      var K;
      var xt;
      var Ct;
      var It;
      var kt;
      var Ot;
      var Mt;
      var Vt;
      var Yt;
      var Dt;
      var qt;
      var _t = [];
      var Kt;
      var Xt;
      var me;
      var Ee;
      Q = J(Q);
      Kt = Q.length;
      K = _;
      xt = 0;
      kt = v;
      Ot = 0;
      for (; Ot < Kt; ++Ot) {
        qt = Q[Ot];
        if (qt < 128) {
          _t.push(V(qt));
        }
      }
      Ct = It = _t.length;
      if (It) {
        _t.push(T);
      }
      while (Ct < Kt) {
        Mt = o;
        Ot = 0;
        for (; Ot < Kt; ++Ot) {
          qt = Q[Ot];
          if (qt >= K && qt < Mt) {
            Mt = qt;
          }
        }
        Xt = Ct + 1;
        if (Mt - K > k((o - xt) / Xt)) {
          O("overflow");
        }
        xt += (Mt - K) * Xt;
        K = Mt;
        Ot = 0;
        for (; Ot < Kt; ++Ot) {
          qt = Q[Ot];
          if (qt < K && ++xt > o) {
            O("overflow");
          }
          if (qt == K) {
            Vt = xt;
            Yt = l;
            for (; Dt = Yt <= kt ? c : Yt >= kt + p ? p : Yt - kt, !(Vt < Dt); Yt += l) {
              Ee = Vt - Dt;
              me = l - Dt;
              _t.push(V(W(Dt + Ee % me, 0)));
              Vt = k(Ee / me);
            }
            _t.push(V(W(Vt, 0)));
            kt = tt(xt, Xt, Ct == It);
            xt = 0;
            ++Ct;
          }
        }
        ++xt;
        ++K;
      }
      return _t.join("");
    }
    function dt(Q) {
      return z(Q, function (K) {
        if (A.test(K)) {
          return at(K.slice(4).toLowerCase());
        } else {
          return K;
        }
      });
    }
    function Ft(Q) {
      return z(Q, function (K) {
        if (E.test(K)) {
          return "xn--" + nt(K);
        } else {
          return K;
        }
      });
    }
    a = {
      version: "1.4.1",
      ucs2: {
        decode: J,
        encode: $
      },
      decode: at,
      encode: nt,
      toASCII: Ft,
      toUnicode: dt
    };
    if (r && n) {
      if (i.exports == r) {
        n.exports = a;
      } else {
        for (d in a) {
          if (a.hasOwnProperty(d)) {
            r[d] = a[d];
          }
        }
      }
    } else {
      e.punycode = a;
    }
  })(on);
})(ha, ha.exports);
var cg = ha.exports;
var ci = TypeError;
const dg = {};
const fg = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: dg
}, Symbol.toStringTag, {
  value: "Module"
}));
const pg = Vp(fg);
var fl = typeof Map == "function" && Map.prototype;
var vo = Object.getOwnPropertyDescriptor && fl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var la = fl && vo && typeof vo.get == "function" ? vo.get : null;
var yu = fl && Map.prototype.forEach;
var pl = typeof Set == "function" && Set.prototype;
var _o = Object.getOwnPropertyDescriptor && pl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var ua = pl && _o && typeof _o.get == "function" ? _o.get : null;
var vu = pl && Set.prototype.forEach;
var gg = typeof WeakMap == "function" && WeakMap.prototype;
var Yn = gg ? WeakMap.prototype.has : null;
var mg = typeof WeakSet == "function" && WeakSet.prototype;
var Kn = mg ? WeakSet.prototype.has : null;
var yg = typeof WeakRef == "function" && WeakRef.prototype;
var _u = yg ? WeakRef.prototype.deref : null;
var vg = Boolean.prototype.valueOf;
var _g = Object.prototype.toString;
var xg = Function.prototype.toString;
var bg = String.prototype.match;
var gl = String.prototype.slice;
var ai = String.prototype.replace;
var Tg = String.prototype.toUpperCase;
var xu = String.prototype.toLowerCase;
var Zc = RegExp.prototype.test;
var bu = Array.prototype.concat;
var Ir = Array.prototype.join;
var wg = Array.prototype.slice;
var Tu = Math.floor;
var ph = typeof BigInt == "function" ? BigInt.prototype.valueOf : null;
var xo = Object.getOwnPropertySymbols;
var gh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null;
var gn = typeof Symbol == "function" && typeof Symbol.iterator == "object";
var Ie = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === gn || true) ? Symbol.toStringTag : null;
var Qc = Object.prototype.propertyIsEnumerable;
var wu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (i) {
  return i.__proto__;
} : null);
function Eu(i, t) {
  if (i === Infinity || i === -Infinity || i !== i || i && i > -1000 && i < 1000 || Zc.call(/e/, t)) {
    return t;
  }
  var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof i == "number") {
    var r = i < 0 ? -Tu(-i) : Tu(i);
    if (r !== i) {
      var n = String(r);
      var s = gl.call(t, n.length + 1);
      return ai.call(n, e, "$&_") + "." + ai.call(ai.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return ai.call(t, e, "$&_");
}
var mh = pg;
var Au = mh.custom;
var Su = ed(Au) ? Au : null;
var Jc = {
  __proto__: null,
  double: "\"",
  single: "'"
};
var Eg = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
};
var Pa = function i(t, e, r, n) {
  var s = e || {};
  if (jr(s, "quoteStyle") && !jr(Jc, s.quoteStyle)) {
    throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
  }
  if (jr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== Infinity : s.maxStringLength !== null)) {
    throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
  }
  var a = jr(s, "customInspect") ? s.customInspect : true;
  if (typeof a != "boolean" && a !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (jr(s, "indent") && s.indent !== null && s.indent !== "\t" && (parseInt(s.indent, 10) !== s.indent || !(s.indent > 0))) {
    throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
  }
  if (jr(s, "numericSeparator") && typeof s.numericSeparator != "boolean") {
    throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
  }
  var o = s.numericSeparator;
  if (typeof t === "undefined") {
    return "undefined";
  }
  if (t === null) {
    return "null";
  }
  if (typeof t == "boolean") {
    if (t) {
      return "true";
    } else {
      return "false";
    }
  }
  if (typeof t == "string") {
    return id(t, s);
  }
  if (typeof t == "number") {
    if (t === 0) {
      if (Infinity / t > 0) {
        return "0";
      } else {
        return "-0";
      }
    }
    var l = String(t);
    if (o) {
      return Eu(t, l);
    } else {
      return l;
    }
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    if (o) {
      return Eu(t, c);
    } else {
      return c;
    }
  }
  var p = typeof s.depth === "undefined" ? 5 : s.depth;
  if (typeof r === "undefined") {
    r = 0;
  }
  if (r >= p && p > 0 && typeof t == "object") {
    if (yh(t)) {
      return "[Array]";
    } else {
      return "[Object]";
    }
  }
  var g = $g(s, r);
  if (typeof n === "undefined") {
    n = [];
  } else if (rd(n, t) >= 0) {
    return "[Circular]";
  }
  function f(B, W, tt) {
    if (W) {
      n = wg.call(n);
      n.push(W);
    }
    if (tt) {
      var at = {
        depth: s.depth
      };
      if (jr(s, "quoteStyle")) {
        at.quoteStyle = s.quoteStyle;
      }
      return i(B, at, r + 1, n);
    }
    return i(B, s, r + 1, n);
  }
  if (typeof t == "function" && !Cu(t)) {
    var v = Bg(t);
    var _ = Cs(t, f);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (_.length > 0 ? " { " + Ir.call(_, ", ") + " }" : "");
  }
  if (ed(t)) {
    var T = gn ? ai.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : gh.call(t);
    if (typeof t == "object" && !gn) {
      return Bn(T);
    } else {
      return T;
    }
  }
  if (Ug(t)) {
    var A = "<" + xu.call(String(t.nodeName));
    for (var E = t.attributes || [], I = 0; I < E.length; I++) {
      A += " " + E[I].name + "=" + td(Ag(E[I].value), "double", s);
    }
    A += ">";
    if (t.childNodes && t.childNodes.length) {
      A += "...";
    }
    A += "</" + xu.call(String(t.nodeName)) + ">";
    return A;
  }
  if (yh(t)) {
    if (t.length === 0) {
      return "[]";
    }
    var S = Cs(t, f);
    if (g && !Hg(S)) {
      return "[" + vh(S, g) + "]";
    } else {
      return "[ " + Ir.call(S, ", ") + " ]";
    }
  }
  if (Cg(t)) {
    var P = Cs(t, f);
    if (!("cause" in Error.prototype) && "cause" in t && !Qc.call(t, "cause")) {
      return "{ [" + String(t) + "] " + Ir.call(bu.call("[cause]: " + f(t.cause), P), ", ") + " }";
    } else if (P.length === 0) {
      return "[" + String(t) + "]";
    } else {
      return "{ [" + String(t) + "] " + Ir.call(P, ", ") + " }";
    }
  }
  if (typeof t == "object" && a) {
    if (Su && typeof t[Su] == "function" && mh) {
      return mh(t, {
        depth: p - r
      });
    }
    if (a !== "symbol" && typeof t.inspect == "function") {
      return t.inspect();
    }
  }
  if (Fg(t)) {
    var k = [];
    if (yu) {
      yu.call(t, function (B, W) {
        k.push(f(W, t, true) + " => " + f(B, t));
      });
    }
    return Iu("Map", la.call(t), k, g);
  }
  if (Lg(t)) {
    var V = [];
    if (vu) {
      vu.call(t, function (B) {
        V.push(f(B, t));
      });
    }
    return Iu("Set", ua.call(t), V, g);
  }
  if (Og(t)) {
    return bo("WeakMap");
  }
  if (kg(t)) {
    return bo("WeakSet");
  }
  if (Ng(t)) {
    return bo("WeakRef");
  }
  if (Rg(t)) {
    return Bn(f(Number(t)));
  }
  if (Mg(t)) {
    return Bn(f(ph.call(t)));
  }
  if (Pg(t)) {
    return Bn(vg.call(t));
  }
  if (Ig(t)) {
    return Bn(f(String(t)));
  }
  if (typeof window !== "undefined" && t === window) {
    return "{ [object Window] }";
  }
  if (typeof globalThis !== "undefined" && t === globalThis || typeof on !== "undefined" && t === on) {
    return "{ [object globalThis] }";
  }
  if (!Sg(t) && !Cu(t)) {
    var d = Cs(t, f);
    var O = wu ? wu(t) === Object.prototype : t instanceof Object || t.constructor === Object;
    var N = t instanceof Object ? "" : "null prototype";
    var z = !O && Ie && Object(t) === t && Ie in t ? gl.call(di(t), 8, -1) : N ? "Object" : "";
    var J = O || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "";
    var $ = J + (z || N ? "[" + Ir.call(bu.call([], z || [], N || []), ": ") + "] " : "");
    if (d.length === 0) {
      return $ + "{}";
    } else if (g) {
      return $ + "{" + vh(d, g) + "}";
    } else {
      return $ + "{ " + Ir.call(d, ", ") + " }";
    }
  }
  return String(t);
};
function td(i, t, e) {
  var r = e.quoteStyle || t;
  var n = Jc[r];
  return n + i + n;
}
function Ag(i) {
  return ai.call(String(i), /"/g, "&quot;");
}
function yh(i) {
  return di(i) === "[object Array]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function Sg(i) {
  return di(i) === "[object Date]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function Cu(i) {
  return di(i) === "[object RegExp]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function Cg(i) {
  return di(i) === "[object Error]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function Ig(i) {
  return di(i) === "[object String]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function Rg(i) {
  return di(i) === "[object Number]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function Pg(i) {
  return di(i) === "[object Boolean]" && (!Ie || typeof i != "object" || !(Ie in i));
}
function ed(i) {
  if (gn) {
    return i && typeof i == "object" && i instanceof Symbol;
  }
  if (typeof i == "symbol") {
    return true;
  }
  if (!i || typeof i != "object" || !gh) {
    return false;
  }
  try {
    gh.call(i);
    return true;
  } catch {}
  return false;
}
function Mg(i) {
  if (!i || typeof i != "object" || !ph) {
    return false;
  }
  try {
    ph.call(i);
    return true;
  } catch {}
  return false;
}
var Dg = Object.prototype.hasOwnProperty || function (i) {
  return i in this;
};
function jr(i, t) {
  return Dg.call(i, t);
}
function di(i) {
  return _g.call(i);
}
function Bg(i) {
  if (i.name) {
    return i.name;
  }
  var t = bg.call(xg.call(i), /^function\s*([\w$]+)/);
  if (t) {
    return t[1];
  } else {
    return null;
  }
}
function rd(i, t) {
  if (i.indexOf) {
    return i.indexOf(t);
  }
  for (var e = 0, r = i.length; e < r; e++) {
    if (i[e] === t) {
      return e;
    }
  }
  return -1;
}
function Fg(i) {
  if (!la || !i || typeof i != "object") {
    return false;
  }
  try {
    la.call(i);
    try {
      ua.call(i);
    } catch {
      return true;
    }
    return i instanceof Map;
  } catch {}
  return false;
}
function Og(i) {
  if (!Yn || !i || typeof i != "object") {
    return false;
  }
  try {
    Yn.call(i, Yn);
    try {
      Kn.call(i, Kn);
    } catch {
      return true;
    }
    return i instanceof WeakMap;
  } catch {}
  return false;
}
function Ng(i) {
  if (!_u || !i || typeof i != "object") {
    return false;
  }
  try {
    _u.call(i);
    return true;
  } catch {}
  return false;
}
function Lg(i) {
  if (!ua || !i || typeof i != "object") {
    return false;
  }
  try {
    ua.call(i);
    try {
      la.call(i);
    } catch {
      return true;
    }
    return i instanceof Set;
  } catch {}
  return false;
}
function kg(i) {
  if (!Kn || !i || typeof i != "object") {
    return false;
  }
  try {
    Kn.call(i, Kn);
    try {
      Yn.call(i, Yn);
    } catch {
      return true;
    }
    return i instanceof WeakSet;
  } catch {}
  return false;
}
function Ug(i) {
  if (!i || typeof i != "object") {
    return false;
  } else if (typeof HTMLElement !== "undefined" && i instanceof HTMLElement) {
    return true;
  } else {
    return typeof i.nodeName == "string" && typeof i.getAttribute == "function";
  }
}
function id(i, t) {
  if (i.length > t.maxStringLength) {
    var e = i.length - t.maxStringLength;
    var r = "... " + e + " more character" + (e > 1 ? "s" : "");
    return id(gl.call(i, 0, t.maxStringLength), t) + r;
  }
  var n = Eg[t.quoteStyle || "single"];
  n.lastIndex = 0;
  var s = ai.call(ai.call(i, n, "\\$1"), /[\x00-\x1f]/g, Gg);
  return td(s, "single", t);
}
function Gg(i) {
  var t = i.charCodeAt(0);
  var e = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  if (e) {
    return "\\" + e;
  } else {
    return "\\x" + (t < 16 ? "0" : "") + Tg.call(t.toString(16));
  }
}
function Bn(i) {
  return "Object(" + i + ")";
}
function bo(i) {
  return i + " { ? }";
}
function Iu(i, t, e, r) {
  var n = r ? vh(e, r) : Ir.call(e, ", ");
  return i + " (" + t + ") {" + n + "}";
}
function Hg(i) {
  for (var t = 0; t < i.length; t++) {
    if (rd(i[t], `
`) >= 0) {
      return false;
    }
  }
  return true;
}
function $g(i, t) {
  var e;
  if (i.indent === "\t") {
    e = "\t";
  } else if (typeof i.indent == "number" && i.indent > 0) {
    e = Ir.call(Array(i.indent + 1), " ");
  } else {
    return null;
  }
  return {
    base: e,
    prev: Ir.call(Array(t + 1), e)
  };
}
function vh(i, t) {
  if (i.length === 0) {
    return "";
  }
  var e = `
${t.prev}${t.base}`;
  return `${e + Ir.call(i, "," + e)}
${t.prev}`;
}
function Cs(i, t) {
  var e = yh(i);
  var r = [];
  if (e) {
    r.length = i.length;
    for (var n = 0; n < i.length; n++) {
      r[n] = jr(i, n) ? t(i[n], i) : "";
    }
  }
  var s = typeof xo == "function" ? xo(i) : [];
  var a;
  if (gn) {
    a = {};
    for (var o = 0; o < s.length; o++) {
      a["$" + s[o]] = s[o];
    }
  }
  for (var l in i) {
    if (jr(i, l)) {
      if ((!e || String(Number(l)) !== l || !(l < i.length)) && (!gn || !(a["$" + l] instanceof Symbol))) {
        if (Zc.call(/[^\w$]/, l)) {
          r.push(t(l, i) + ": " + t(i[l], i));
        } else {
          r.push(l + ": " + t(i[l], i));
        }
      }
    }
  }
  if (typeof xo == "function") {
    for (var c = 0; c < s.length; c++) {
      if (Qc.call(i, s[c])) {
        r.push("[" + t(s[c]) + "]: " + t(i[s[c]], i));
      }
    }
  }
  return r;
}
var Vg = Pa;
var Wg = ci;
function Ma(i, t, e) {
  for (var r = i, n; (n = r.next) != null; r = n) {
    if (n.key === t) {
      r.next = n.next;
      if (!e) {
        n.next = i.next;
        i.next = n;
      }
      return n;
    }
  }
}
function jg(i, t) {
  if (i) {
    var e = Ma(i, t);
    return e && e.value;
  }
}
function Xg(i, t, e) {
  var r = Ma(i, t);
  if (r) {
    r.value = e;
  } else {
    i.next = {
      key: t,
      next: i.next,
      value: e
    };
  }
}
function zg(i, t) {
  if (i) {
    return !!Ma(i, t);
  } else {
    return false;
  }
}
function qg(i, t) {
  if (i) {
    return Ma(i, t, true);
  }
}
function Yg() {
  var t;
  var e = {
    assert: function (r) {
      if (!e.has(r)) {
        throw new Wg("Side channel does not contain " + Vg(r));
      }
    },
    delete: function (r) {
      var n = t && t.next;
      var s = qg(t, r);
      if (s && n && n === s) {
        t = undefined;
      }
      return !!s;
    },
    get: function (r) {
      return jg(t, r);
    },
    has: function (r) {
      return zg(t, r);
    },
    set: function (r, n) {
      t ||= {
        next: undefined
      };
      Xg(t, r, n);
    }
  };
  return e;
}
var Kg = Object;
var Zg = Error;
var Qg = EvalError;
var Jg = RangeError;
var tm = ReferenceError;
var nd = SyntaxError;
var em = URIError;
var rm = Math.abs;
var im = Math.floor;
var nm = Math.max;
var sm = Math.min;
var am = Math.pow;
var om = Object.getOwnPropertyDescriptor;
var Ks = om;
if (Ks) {
  try {
    Ks([], "length");
  } catch {
    Ks = null;
  }
}
var Da = Ks;
var Zs = Object.defineProperty || false;
if (Zs) {
  try {
    Zs({}, "a", {
      value: 1
    });
  } catch {
    Zs = false;
  }
}
var Ba = Zs;
var To;
var Ru;
function hm() {
  if (!Ru) {
    Ru = 1;
    To = function () {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
        return false;
      }
      if (typeof Symbol.iterator == "symbol") {
        return true;
      }
      var t = {};
      var e = Symbol("test");
      var r = Object(e);
      if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") {
        return false;
      }
      var n = 42;
      t[e] = n;
      for (var s in t) {
        return false;
      }
      if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) {
        return false;
      }
      var a = Object.getOwnPropertySymbols(t);
      if (a.length !== 1 || a[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(t, e);
        if (o.value !== n || o.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
  return To;
}
var wo;
var Pu;
function lm() {
  if (Pu) {
    return wo;
  }
  Pu = 1;
  var i = typeof Symbol !== "undefined" && Symbol;
  var t = hm();
  wo = function () {
    if (typeof i != "function" || typeof Symbol != "function" || typeof i("foo") != "symbol" || typeof Symbol("bar") != "symbol") {
      return false;
    } else {
      return t();
    }
  };
  return wo;
}
var Eo;
var Mu;
function um() {
  if (Mu) {
    return Eo;
  }
  Mu = 1;
  var i = "Function.prototype.bind called on incompatible ";
  var t = Object.prototype.toString;
  var e = Math.max;
  var r = "[object Function]";
  function n(l, c) {
    var p = [];
    for (var g = 0; g < l.length; g += 1) {
      p[g] = l[g];
    }
    for (var f = 0; f < c.length; f += 1) {
      p[f + l.length] = c[f];
    }
    return p;
  }
  function s(l, c) {
    var p = [];
    for (var g = c, f = 0; g < l.length; g += 1, f += 1) {
      p[f] = l[g];
    }
    return p;
  }
  function a(o, l) {
    var c = "";
    for (var p = 0; p < o.length; p += 1) {
      c += o[p];
      if (p + 1 < o.length) {
        c += l;
      }
    }
    return c;
  }
  Eo = function (l) {
    var c = this;
    if (typeof c != "function" || t.apply(c) !== r) {
      throw new TypeError(i + c);
    }
    var p = s(arguments, 1);
    var g;
    function f() {
      if (this instanceof g) {
        var E = c.apply(this, n(p, arguments));
        if (Object(E) === E) {
          return E;
        } else {
          return this;
        }
      }
      return c.apply(l, n(p, arguments));
    }
    for (var v = e(0, c.length - p.length), _ = [], T = 0; T < v; T++) {
      _[T] = "$" + T;
    }
    g = Function("binder", "return function (" + a(_, ",") + "){ return binder.apply(this,arguments); }")(f);
    if (c.prototype) {
      function A() {}
      A.prototype = c.prototype;
      g.prototype = new A();
      A.prototype = null;
    }
    return g;
  };
  return Eo;
}
var Ao;
var Du;
function as() {
  if (Du) {
    return Ao;
  }
  Du = 1;
  var i = um();
  Ao = Function.prototype.bind || i;
  return Ao;
}
var So;
var Bu;
function ml() {
  if (!Bu) {
    Bu = 1;
    So = Function.prototype.call;
  }
  return So;
}
var Co;
var Fu;
function yl() {
  if (!Fu) {
    Fu = 1;
    Co = Function.prototype.apply;
  }
  return Co;
}
var cm = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
var dm = as();
var fm = yl();
var pm = ml();
var gm = cm;
var sd = gm || dm.call(pm, fm);
var mm = as();
var ym = ci;
var vm = ml();
var _m = sd;
function ad(t) {
  if (t.length < 1 || typeof t[0] != "function") {
    throw new ym("a function is required");
  }
  return _m(mm, vm, t);
}
var Io;
var Ou;
function xm() {
  if (Ou) {
    return Io;
  }
  Ou = 1;
  var i = ad;
  var t = Da;
  var e = [].__proto__ === Array.prototype;
  var r = e && t && t(Object.prototype, "__proto__");
  var n = Object;
  var s = n.getPrototypeOf;
  Io = r && typeof r.get == "function" ? i([r.get]) : typeof s == "function" ? function (o) {
    return s(o == null ? o : n(o));
  } : false;
  return Io;
}
var Ro;
var Nu;
function bm() {
  if (Nu) {
    return Ro;
  }
  Nu = 1;
  var i = Function.prototype.call;
  var t = Object.prototype.hasOwnProperty;
  var e = as();
  Ro = e.call(i, t);
  return Ro;
}
var Gt;
var od = Kg;
var Tm = Zg;
var wm = Qg;
var Em = Jg;
var Am = tm;
var mn = nd;
var ln = ci;
var Sm = em;
var Cm = rm;
var Im = im;
var Rm = nm;
var Pm = sm;
var Mm = am;
var hd = Function;
function Po(i) {
  try {
    return hd("\"use strict\"; return (" + i + ").constructor;")();
  } catch {}
}
var rs = Da;
var Dm = Ba;
function Mo() {
  throw new ln();
}
var Bm = rs ? function () {
  try {
    arguments.callee;
    return Mo;
  } catch {
    try {
      return rs(arguments, "callee").get;
    } catch {
      return Mo;
    }
  }
}() : Mo;
var ji = lm()();
var Fm = xm();
var ve = typeof Reflect == "function" && Reflect.getPrototypeOf || od.getPrototypeOf || Fm;
var ld = yl();
var os = ml();
var Zi = {};
var Om = typeof Uint8Array === "undefined" || !ve ? Gt : ve(Uint8Array);
var Ri = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError === "undefined" ? Gt : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? Gt : ArrayBuffer,
  "%ArrayIteratorPrototype%": ji && ve ? ve([][Symbol.iterator]()) : Gt,
  "%AsyncFromSyncIteratorPrototype%": Gt,
  "%AsyncFunction%": Zi,
  "%AsyncGenerator%": Zi,
  "%AsyncGeneratorFunction%": Zi,
  "%AsyncIteratorPrototype%": Zi,
  "%Atomics%": typeof Atomics === "undefined" ? Gt : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? Gt : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? Gt : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? Gt : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? Gt : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Tm,
  "%eval%": eval,
  "%EvalError%": wm,
  "%Float32Array%": typeof Float32Array === "undefined" ? Gt : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? Gt : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? Gt : FinalizationRegistry,
  "%Function%": hd,
  "%GeneratorFunction%": Zi,
  "%Int8Array%": typeof Int8Array === "undefined" ? Gt : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? Gt : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? Gt : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ji && ve ? ve(ve([][Symbol.iterator]())) : Gt,
  "%JSON%": typeof JSON == "object" ? JSON : Gt,
  "%Map%": typeof Map === "undefined" ? Gt : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !ji || !ve ? Gt : ve(new Map()[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": od,
  "%Object.getOwnPropertyDescriptor%": rs,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? Gt : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? Gt : Proxy,
  "%RangeError%": Em,
  "%ReferenceError%": Am,
  "%Reflect%": typeof Reflect === "undefined" ? Gt : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? Gt : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !ji || !ve ? Gt : ve(new Set()[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? Gt : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ji && ve ? ve(""[Symbol.iterator]()) : Gt,
  "%Symbol%": ji ? Symbol : Gt,
  "%SyntaxError%": mn,
  "%ThrowTypeError%": Bm,
  "%TypedArray%": Om,
  "%TypeError%": ln,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? Gt : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? Gt : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? Gt : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? Gt : Uint32Array,
  "%URIError%": Sm,
  "%WeakMap%": typeof WeakMap === "undefined" ? Gt : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? Gt : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? Gt : WeakSet,
  "%Function.prototype.call%": os,
  "%Function.prototype.apply%": ld,
  "%Object.defineProperty%": Dm,
  "%Math.abs%": Cm,
  "%Math.floor%": Im,
  "%Math.max%": Rm,
  "%Math.min%": Pm,
  "%Math.pow%": Mm
};
if (ve) {
  try {
    null.error;
  } catch (i) {
    var Nm = ve(ve(i));
    Ri["%Error.prototype%"] = Nm;
  }
}
var Lm = function i(t) {
  var e;
  if (t === "%AsyncFunction%") {
    e = Po("async function () {}");
  } else if (t === "%GeneratorFunction%") {
    e = Po("function* () {}");
  } else if (t === "%AsyncGeneratorFunction%") {
    e = Po("async function* () {}");
  } else if (t === "%AsyncGenerator%") {
    var r = i("%AsyncGeneratorFunction%");
    if (r) {
      e = r.prototype;
    }
  } else if (t === "%AsyncIteratorPrototype%") {
    var n = i("%AsyncGenerator%");
    if (n && ve) {
      e = ve(n.prototype);
    }
  }
  Ri[t] = e;
  return e;
};
var Lu = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var hs = as();
var ca = bm();
var km = hs.call(os, Array.prototype.concat);
var Um = hs.call(ld, Array.prototype.splice);
var ku = hs.call(os, String.prototype.replace);
var da = hs.call(os, String.prototype.slice);
var Gm = hs.call(os, RegExp.prototype.exec);
var Hm = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $m = /\\(\\)?/g;
function Vm(t) {
  var e = da(t, 0, 1);
  var r = da(t, -1);
  if (e === "%" && r !== "%") {
    throw new mn("invalid intrinsic syntax, expected closing `%`");
  }
  if (r === "%" && e !== "%") {
    throw new mn("invalid intrinsic syntax, expected opening `%`");
  }
  var n = [];
  ku(t, Hm, function (s, a, o, l) {
    n[n.length] = o ? ku(l, $m, "$1") : a || s;
  });
  return n;
}
function Wm(t, e) {
  var r = t;
  var n;
  if (ca(Lu, r)) {
    n = Lu[r];
    r = "%" + n[0] + "%";
  }
  if (ca(Ri, r)) {
    var s = Ri[r];
    if (s === Zi) {
      s = Lm(r);
    }
    if (typeof s === "undefined" && !e) {
      throw new ln("intrinsic " + t + " exists, but is not available. Please file an issue!");
    }
    return {
      alias: n,
      name: r,
      value: s
    };
  }
  throw new mn("intrinsic " + t + " does not exist!");
}
function Fa(t, e) {
  if (typeof t != "string" || t.length === 0) {
    throw new ln("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof e != "boolean") {
    throw new ln("\"allowMissing\" argument must be a boolean");
  }
  if (Gm(/^%?[^%]*%?$/, t) === null) {
    throw new mn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var r = Vm(t);
  var n = r.length > 0 ? r[0] : "";
  var s = Wm("%" + n + "%", e);
  var a = s.name;
  var o = s.value;
  var l = false;
  var c = s.alias;
  if (c) {
    n = c[0];
    Um(r, km([0, 1], c));
  }
  for (var p = 1, g = true; p < r.length; p += 1) {
    var f = r[p];
    var v = da(f, 0, 1);
    var _ = da(f, -1);
    if ((v === "\"" || v === "'" || v === "`" || _ === "\"" || _ === "'" || _ === "`") && v !== _) {
      throw new mn("property names with quotes must have matching quotes");
    }
    if (f === "constructor" || !g) {
      l = true;
    }
    n += "." + f;
    a = "%" + n + "%";
    if (ca(Ri, a)) {
      o = Ri[a];
    } else if (o != null) {
      if (!(f in o)) {
        if (!e) {
          throw new ln("base intrinsic for " + t + " exists, but the property is not available.");
        }
        return;
      }
      if (rs && p + 1 >= r.length) {
        var T = rs(o, f);
        g = !!T;
        if (g && "get" in T && !("originalValue" in T.get)) {
          o = T.get;
        } else {
          o = o[f];
        }
      } else {
        g = ca(o, f);
        o = o[f];
      }
      if (g && !l) {
        Ri[a] = o;
      }
    }
  }
  return o;
}
var ud = {
  exports: {}
};
var Uu = Ba;
var jm = nd;
var Xi = ci;
var Gu = Da;
function Xm(t, e, r) {
  if (!t || typeof t != "object" && typeof t != "function") {
    throw new Xi("`obj` must be an object or a function`");
  }
  if (typeof e != "string" && typeof e != "symbol") {
    throw new Xi("`property` must be a string or a symbol`");
  }
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) {
    throw new Xi("`nonEnumerable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) {
    throw new Xi("`nonWritable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) {
    throw new Xi("`nonConfigurable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 6 && typeof arguments[6] != "boolean") {
    throw new Xi("`loose`, if provided, must be a boolean");
  }
  var n = arguments.length > 3 ? arguments[3] : null;
  var s = arguments.length > 4 ? arguments[4] : null;
  var a = arguments.length > 5 ? arguments[5] : null;
  var o = arguments.length > 6 ? arguments[6] : false;
  var l = !!Gu && Gu(t, e);
  if (Uu) {
    Uu(t, e, {
      configurable: a === null && l ? l.configurable : !a,
      enumerable: n === null && l ? l.enumerable : !n,
      value: r,
      writable: s === null && l ? l.writable : !s
    });
  } else if (o || !n && !s && !a) {
    t[e] = r;
  } else {
    throw new jm("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }
}
var _h = Ba;
function cd() {
  return !!_h;
}
cd.hasArrayLengthDefineBug = function () {
  if (!_h) {
    return null;
  }
  try {
    return _h([], "length", {
      value: 1
    }).length !== 1;
  } catch {
    return true;
  }
};
var zm = cd;
var qm = Fa;
var Hu = Xm;
var Ym = zm();
var $u = Da;
var Vu = ci;
var Km = qm("%Math.floor%");
function Zm(t, e) {
  if (typeof t != "function") {
    throw new Vu("`fn` is not a function");
  }
  if (typeof e != "number" || e < 0 || e > 4294967295 || Km(e) !== e) {
    throw new Vu("`length` must be a positive 32-bit integer");
  }
  var r = arguments.length > 2 && !!arguments[2];
  var n = true;
  var s = true;
  if ("length" in t && $u) {
    var a = $u(t, "length");
    if (a && !a.configurable) {
      n = false;
    }
    if (a && !a.writable) {
      s = false;
    }
  }
  if (n || s || !r) {
    if (Ym) {
      Hu(t, "length", e, true, true);
    } else {
      Hu(t, "length", e);
    }
  }
  return t;
}
var Qm = as();
var Jm = yl();
var ty = sd;
function ey() {
  return ty(Qm, Jm, arguments);
}
(function (i) {
  var t = Zm;
  var e = Ba;
  var r = ad;
  var n = ey;
  i.exports = function (a) {
    var o = r(arguments);
    var l = a.length - (arguments.length - 1);
    return t(o, 1 + (l > 0 ? l : 0), true);
  };
  if (e) {
    e(i.exports, "apply", {
      value: n
    });
  } else {
    i.exports.apply = n;
  }
})(ud);
var ry = ud.exports;
var dd = Fa;
var fd = ry;
var iy = fd(dd("String.prototype.indexOf"));
function pd(t, e) {
  var r = dd(t, !!e);
  if (typeof r == "function" && iy(t, ".prototype.") > -1) {
    return fd(r);
  } else {
    return r;
  }
}
var ny = Fa;
var ls = pd;
var sy = Pa;
var ay = ci;
var Wu = ny("%Map%", true);
var oy = ls("Map.prototype.get", true);
var hy = ls("Map.prototype.set", true);
var ly = ls("Map.prototype.has", true);
var uy = ls("Map.prototype.delete", true);
var cy = ls("Map.prototype.size", true);
var gd = !!Wu && function () {
  var t;
  var e = {
    assert: function (r) {
      if (!e.has(r)) {
        throw new ay("Side channel does not contain " + sy(r));
      }
    },
    delete: function (r) {
      if (t) {
        var n = uy(t, r);
        if (cy(t) === 0) {
          t = undefined;
        }
        return n;
      }
      return false;
    },
    get: function (r) {
      if (t) {
        return oy(t, r);
      }
    },
    has: function (r) {
      if (t) {
        return ly(t, r);
      } else {
        return false;
      }
    },
    set: function (r, n) {
      t ||= new Wu();
      hy(t, r, n);
    }
  };
  return e;
};
var dy = Fa;
var Oa = pd;
var fy = Pa;
var Is = gd;
var py = ci;
var zi = dy("%WeakMap%", true);
var gy = Oa("WeakMap.prototype.get", true);
var my = Oa("WeakMap.prototype.set", true);
var yy = Oa("WeakMap.prototype.has", true);
var vy = Oa("WeakMap.prototype.delete", true);
var _y = zi ? function () {
  var t;
  var e;
  var r = {
    assert: function (n) {
      if (!r.has(n)) {
        throw new py("Side channel does not contain " + fy(n));
      }
    },
    delete: function (n) {
      if (zi && n && (typeof n == "object" || typeof n == "function")) {
        if (t) {
          return vy(t, n);
        }
      } else if (Is && e) {
        return e.delete(n);
      }
      return false;
    },
    get: function (n) {
      if (zi && n && (typeof n == "object" || typeof n == "function") && t) {
        return gy(t, n);
      } else {
        return e && e.get(n);
      }
    },
    has: function (n) {
      if (zi && n && (typeof n == "object" || typeof n == "function") && t) {
        return yy(t, n);
      } else {
        return !!e && e.has(n);
      }
    },
    set: function (n, s) {
      if (zi && n && (typeof n == "object" || typeof n == "function")) {
        t ||= new zi();
        my(t, n, s);
      } else if (Is) {
        e ||= Is();
        e.set(n, s);
      }
    }
  };
  return r;
} : Is;
var xy = ci;
var by = Pa;
var Ty = Yg;
var wy = gd;
var Ey = _y;
var Ay = Ey || wy || Ty;
function Sy() {
  var t;
  var e = {
    assert: function (r) {
      if (!e.has(r)) {
        throw new xy("Side channel does not contain " + by(r));
      }
    },
    delete: function (r) {
      return !!t && t.delete(r);
    },
    get: function (r) {
      return t && t.get(r);
    },
    has: function (r) {
      return !!t && t.has(r);
    },
    set: function (r, n) {
      t ||= Ay();
      t.set(r, n);
    }
  };
  return e;
}
var Cy = String.prototype.replace;
var Iy = /%20/g;
var Do = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var vl = {
  default: Do.RFC3986,
  formatters: {
    RFC1738: function (i) {
      return Cy.call(i, Iy, "+");
    },
    RFC3986: function (i) {
      return String(i);
    }
  },
  RFC1738: Do.RFC1738,
  RFC3986: Do.RFC3986
};
var Ry = vl;
var Bo = Object.prototype.hasOwnProperty;
var Ci = Array.isArray;
var xr = function () {
  var i = [];
  for (var t = 0; t < 256; ++t) {
    i.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  }
  return i;
}();
function Py(t) {
  while (t.length > 1) {
    var e = t.pop();
    var r = e.obj[e.prop];
    if (Ci(r)) {
      var n = [];
      for (var s = 0; s < r.length; ++s) {
        if (typeof r[s] !== "undefined") {
          n.push(r[s]);
        }
      }
      e.obj[e.prop] = n;
    }
  }
}
function md(t, e) {
  var r = e && e.plainObjects ? {
    __proto__: null
  } : {};
  for (var n = 0; n < t.length; ++n) {
    if (typeof t[n] !== "undefined") {
      r[n] = t[n];
    }
  }
  return r;
}
var My = function i(t, e, r) {
  if (!e) {
    return t;
  }
  if (typeof e != "object" && typeof e != "function") {
    if (Ci(t)) {
      t.push(e);
    } else if (t && typeof t == "object") {
      if (r && (r.plainObjects || r.allowPrototypes) || !Bo.call(Object.prototype, e)) {
        t[e] = true;
      }
    } else {
      return [t, e];
    }
    return t;
  }
  if (!t || typeof t != "object") {
    return [t].concat(e);
  }
  var n = t;
  if (Ci(t) && !Ci(e)) {
    n = md(t, r);
  }
  if (Ci(t) && Ci(e)) {
    e.forEach(function (s, a) {
      if (Bo.call(t, a)) {
        var o = t[a];
        if (o && typeof o == "object" && s && typeof s == "object") {
          t[a] = i(o, s, r);
        } else {
          t.push(s);
        }
      } else {
        t[a] = s;
      }
    });
    return t;
  } else {
    return Object.keys(e).reduce(function (s, a) {
      var o = e[a];
      if (Bo.call(s, a)) {
        s[a] = i(s[a], o, r);
      } else {
        s[a] = o;
      }
      return s;
    }, n);
  }
};
function Dy(t, e) {
  return Object.keys(e).reduce(function (r, n) {
    r[n] = e[n];
    return r;
  }, t);
}
function By(i, t, e) {
  var r = i.replace(/\+/g, " ");
  if (e === "iso-8859-1") {
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}
var Fo = 1024;
function Fy(t, e, r, n, s) {
  if (t.length === 0) {
    return t;
  }
  var a = t;
  if (typeof t == "symbol") {
    a = Symbol.prototype.toString.call(t);
  } else if (typeof t != "string") {
    a = String(t);
  }
  if (r === "iso-8859-1") {
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function (v) {
      return "%26%23" + parseInt(v.slice(2), 16) + "%3B";
    });
  }
  var o = "";
  for (var l = 0; l < a.length; l += Fo) {
    for (var c = a.length >= Fo ? a.slice(l, l + Fo) : a, p = [], g = 0; g < c.length; ++g) {
      var f = c.charCodeAt(g);
      if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || s === Ry.RFC1738 && (f === 40 || f === 41)) {
        p[p.length] = c.charAt(g);
        continue;
      }
      if (f < 128) {
        p[p.length] = xr[f];
        continue;
      }
      if (f < 2048) {
        p[p.length] = xr[f >> 6 | 192] + xr[f & 63 | 128];
        continue;
      }
      if (f < 55296 || f >= 57344) {
        p[p.length] = xr[f >> 12 | 224] + xr[f >> 6 & 63 | 128] + xr[f & 63 | 128];
        continue;
      }
      g += 1;
      f = 65536 + ((f & 1023) << 10 | c.charCodeAt(g) & 1023);
      p[p.length] = xr[f >> 18 | 240] + xr[f >> 12 & 63 | 128] + xr[f >> 6 & 63 | 128] + xr[f & 63 | 128];
    }
    o += p.join("");
  }
  return o;
}
function Oy(t) {
  for (var e = [{
      obj: {
        o: t
      },
      prop: "o"
    }], r = [], n = 0; n < e.length; ++n) {
    var s = e[n];
    var a = s.obj[s.prop];
    for (var o = Object.keys(a), l = 0; l < o.length; ++l) {
      var c = o[l];
      var p = a[c];
      if (typeof p == "object" && p !== null && r.indexOf(p) === -1) {
        e.push({
          obj: a,
          prop: c
        });
        r.push(p);
      }
    }
  }
  Py(e);
  return t;
}
function Ny(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Ly(t) {
  if (!t || typeof t != "object") {
    return false;
  } else {
    return !!t.constructor && !!t.constructor.isBuffer && !!t.constructor.isBuffer(t);
  }
}
function ky(t, e) {
  return [].concat(t, e);
}
function Uy(t, e) {
  if (Ci(t)) {
    var r = [];
    for (var n = 0; n < t.length; n += 1) {
      r.push(e(t[n]));
    }
    return r;
  }
  return e(t);
}
var yd = {
  arrayToObject: md,
  assign: Dy,
  combine: ky,
  compact: Oy,
  decode: By,
  encode: Fy,
  isBuffer: Ly,
  isRegExp: Ny,
  maybeMap: Uy,
  merge: My
};
var vd = Sy;
var Qs = yd;
var Zn = vl;
var Gy = Object.prototype.hasOwnProperty;
var _d = {
  brackets: function (t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function (t, e) {
    return t + "[" + e + "]";
  },
  repeat: function (t) {
    return t;
  }
};
var Sr = Array.isArray;
var Hy = Array.prototype.push;
function xd(i, t) {
  Hy.apply(i, Sr(t) ? t : [t]);
}
var $y = Date.prototype.toISOString;
var ju = Zn.default;
var de = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  commaRoundTrip: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: Qs.encode,
  encodeValuesOnly: false,
  filter: undefined,
  format: ju,
  formatter: Zn.formatters[ju],
  indices: false,
  serializeDate: function (t) {
    return $y.call(t);
  },
  skipNulls: false,
  strictNullHandling: false
};
function Vy(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}
var Oo = {};
var Wy = function i(t, e, r, n, s, a, o, l, c, p, g, f, v, _, T, A, E, I) {
  var S = t;
  for (var P = I, k = 0, V = false; (P = P.get(Oo)) !== undefined && !V;) {
    var d = P.get(t);
    k += 1;
    if (typeof d !== "undefined") {
      if (d === k) {
        throw new RangeError("Cyclic object value");
      }
      V = true;
    }
    if (typeof P.get(Oo) === "undefined") {
      k = 0;
    }
  }
  if (typeof p == "function") {
    S = p(e, S);
  } else if (S instanceof Date) {
    S = v(S);
  } else if (r === "comma" && Sr(S)) {
    S = Qs.maybeMap(S, function (Q) {
      if (Q instanceof Date) {
        return v(Q);
      } else {
        return Q;
      }
    });
  }
  if (S === null) {
    if (a) {
      if (c && !A) {
        return c(e, de.encoder, E, "key", _);
      } else {
        return e;
      }
    }
    S = "";
  }
  if (Vy(S) || Qs.isBuffer(S)) {
    if (c) {
      var O = A ? e : c(e, de.encoder, E, "key", _);
      return [T(O) + "=" + T(c(S, de.encoder, E, "value", _))];
    }
    return [T(e) + "=" + T(String(S))];
  }
  var N = [];
  if (typeof S === "undefined") {
    return N;
  }
  var z;
  if (r === "comma" && Sr(S)) {
    if (A && c) {
      S = Qs.maybeMap(S, c);
    }
    z = [{
      value: S.length > 0 ? S.join(",") || null : undefined
    }];
  } else if (Sr(p)) {
    z = p;
  } else {
    var J = Object.keys(S);
    z = g ? J.sort(g) : J;
  }
  var $ = l ? String(e).replace(/\./g, "%2E") : String(e);
  var B = n && Sr(S) && S.length === 1 ? $ + "[]" : $;
  if (s && Sr(S) && S.length === 0) {
    return B + "[]";
  }
  for (var W = 0; W < z.length; ++W) {
    var tt = z[W];
    var at = typeof tt == "object" && tt && typeof tt.value !== "undefined" ? tt.value : S[tt];
    if (!o || at !== null) {
      var nt = f && l ? String(tt).replace(/\./g, "%2E") : String(tt);
      var dt = Sr(S) ? typeof r == "function" ? r(B, nt) : B : B + (f ? "." + nt : "[" + nt + "]");
      I.set(t, k);
      var Ft = vd();
      Ft.set(Oo, I);
      xd(N, i(at, dt, r, n, s, a, o, l, r === "comma" && A && Sr(S) ? null : c, p, g, f, v, _, T, A, E, Ft));
    }
  }
  return N;
};
function jy(t) {
  if (!t) {
    return de;
  }
  if (typeof t.allowEmptyArrays !== "undefined" && typeof t.allowEmptyArrays != "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof t.encodeDotInKeys !== "undefined" && typeof t.encodeDotInKeys != "boolean") {
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (t.encoder !== null && typeof t.encoder !== "undefined" && typeof t.encoder != "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var e = t.charset || de.charset;
  if (typeof t.charset !== "undefined" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var r = Zn.default;
  if (typeof t.format !== "undefined") {
    if (!Gy.call(Zn.formatters, t.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    r = t.format;
  }
  var n = Zn.formatters[r];
  var s = de.filter;
  if (typeof t.filter == "function" || Sr(t.filter)) {
    s = t.filter;
  }
  var a;
  if (t.arrayFormat in _d) {
    a = t.arrayFormat;
  } else if ("indices" in t) {
    a = t.indices ? "indices" : "repeat";
  } else {
    a = de.arrayFormat;
  }
  if ("commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var o = typeof t.allowDots === "undefined" ? t.encodeDotInKeys === true ? true : de.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : de.addQueryPrefix,
    allowDots: o,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : de.allowEmptyArrays,
    arrayFormat: a,
    charset: e,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : de.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter === "undefined" ? de.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : de.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : de.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : de.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : de.encodeValuesOnly,
    filter: s,
    format: r,
    formatter: n,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : de.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : de.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : de.strictNullHandling
  };
}
function Xy(i, t) {
  var e = i;
  var r = jy(t);
  var n;
  var s;
  if (typeof r.filter == "function") {
    s = r.filter;
    e = s("", e);
  } else if (Sr(r.filter)) {
    s = r.filter;
    n = s;
  }
  var a = [];
  if (typeof e != "object" || e === null) {
    return "";
  }
  var o = _d[r.arrayFormat];
  var l = o === "comma" && r.commaRoundTrip;
  n ||= Object.keys(e);
  if (r.sort) {
    n.sort(r.sort);
  }
  var c = vd();
  for (var p = 0; p < n.length; ++p) {
    var g = n[p];
    var f = e[g];
    if (!r.skipNulls || f !== null) {
      xd(a, Wy(f, g, o, l, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, c));
    }
  }
  var v = a.join(r.delimiter);
  var _ = r.addQueryPrefix === true ? "?" : "";
  if (r.charsetSentinel) {
    if (r.charset === "iso-8859-1") {
      _ += "utf8=%26%2310003%3B&";
    } else {
      _ += "utf8=%E2%9C%93&";
    }
  }
  if (v.length > 0) {
    return _ + v;
  } else {
    return "";
  }
}
var yn = yd;
var xh = Object.prototype.hasOwnProperty;
var zy = Array.isArray;
var ae = {
  allowDots: false,
  allowEmptyArrays: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decodeDotInKeys: false,
  decoder: yn.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictDepth: false,
  strictNullHandling: false
};
function qy(i) {
  return i.replace(/&#(\d+);/g, function (t, e) {
    return String.fromCharCode(parseInt(e, 10));
  });
}
function bd(i, t) {
  if (i && typeof i == "string" && t.comma && i.indexOf(",") > -1) {
    return i.split(",");
  } else {
    return i;
  }
}
var Yy = "utf8=%26%2310003%3B";
var Ky = "utf8=%E2%9C%93";
function Zy(t, e) {
  var r = {
    __proto__: null
  };
  var n = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  n = n.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var s = e.parameterLimit === Infinity ? undefined : e.parameterLimit;
  var a = n.split(e.delimiter, s);
  var o = -1;
  var l;
  var c = e.charset;
  if (e.charsetSentinel) {
    for (l = 0; l < a.length; ++l) {
      if (a[l].indexOf("utf8=") === 0) {
        if (a[l] === Ky) {
          c = "utf-8";
        } else if (a[l] === Yy) {
          c = "iso-8859-1";
        }
        o = l;
        l = a.length;
      }
    }
  }
  for (l = 0; l < a.length; ++l) {
    if (l !== o) {
      var p = a[l];
      var g = p.indexOf("]=");
      var f = g === -1 ? p.indexOf("=") : g + 1;
      var v;
      var _;
      if (f === -1) {
        v = e.decoder(p, ae.decoder, c, "key");
        _ = e.strictNullHandling ? null : "";
      } else {
        v = e.decoder(p.slice(0, f), ae.decoder, c, "key");
        _ = yn.maybeMap(bd(p.slice(f + 1), e), function (A) {
          return e.decoder(A, ae.decoder, c, "value");
        });
      }
      if (_ && e.interpretNumericEntities && c === "iso-8859-1") {
        _ = qy(String(_));
      }
      if (p.indexOf("[]=") > -1) {
        _ = zy(_) ? [_] : _;
      }
      var T = xh.call(r, v);
      if (T && e.duplicates === "combine") {
        r[v] = yn.combine(r[v], _);
      } else if (!T || e.duplicates === "last") {
        r[v] = _;
      }
    }
  }
  return r;
}
function Qy(i, t, e, r) {
  var n = r ? t : bd(t, e);
  for (var s = i.length - 1; s >= 0; --s) {
    var a;
    var o = i[s];
    if (o === "[]" && e.parseArrays) {
      a = e.allowEmptyArrays && (n === "" || e.strictNullHandling && n === null) ? [] : [].concat(n);
    } else {
      a = e.plainObjects ? {
        __proto__: null
      } : {};
      var l = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o;
      var c = e.decodeDotInKeys ? l.replace(/%2E/g, ".") : l;
      var p = parseInt(c, 10);
      if (!e.parseArrays && c === "") {
        a = {
          0: n
        };
      } else if (!isNaN(p) && o !== c && String(p) === c && p >= 0 && e.parseArrays && p <= e.arrayLimit) {
        a = [];
        a[p] = n;
      } else if (c !== "__proto__") {
        a[c] = n;
      }
    }
    n = a;
  }
  return n;
}
function Jy(t, e, r, n) {
  if (t) {
    var s = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t;
    var a = /(\[[^[\]]*])/;
    var o = /(\[[^[\]]*])/g;
    var l = r.depth > 0 && a.exec(s);
    var c = l ? s.slice(0, l.index) : s;
    var p = [];
    if (c) {
      if (!r.plainObjects && xh.call(Object.prototype, c) && !r.allowPrototypes) {
        return;
      }
      p.push(c);
    }
    for (var g = 0; r.depth > 0 && (l = o.exec(s)) !== null && g < r.depth;) {
      g += 1;
      if (!r.plainObjects && xh.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes) {
        return;
      }
      p.push(l[1]);
    }
    if (l) {
      if (r.strictDepth === true) {
        throw new RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
      }
      p.push("[" + s.slice(l.index) + "]");
    }
    return Qy(p, e, r, n);
  }
}
function tv(t) {
  if (!t) {
    return ae;
  }
  if (typeof t.allowEmptyArrays !== "undefined" && typeof t.allowEmptyArrays != "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof t.decodeDotInKeys !== "undefined" && typeof t.decodeDotInKeys != "boolean") {
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (t.decoder !== null && typeof t.decoder !== "undefined" && typeof t.decoder != "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof t.charset !== "undefined" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var e = typeof t.charset === "undefined" ? ae.charset : t.charset;
  var r = typeof t.duplicates === "undefined" ? ae.duplicates : t.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last") {
    throw new TypeError("The duplicates option must be either combine, first, or last");
  }
  var n = typeof t.allowDots === "undefined" ? t.decodeDotInKeys === true ? true : ae.allowDots : !!t.allowDots;
  return {
    allowDots: n,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : ae.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ae.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ae.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ae.arrayLimit,
    charset: e,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ae.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : ae.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : ae.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : ae.decoder,
    delimiter: typeof t.delimiter == "string" || yn.isRegExp(t.delimiter) ? t.delimiter : ae.delimiter,
    depth: typeof t.depth == "number" || t.depth === false ? +t.depth : ae.depth,
    duplicates: r,
    ignoreQueryPrefix: t.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ae.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ae.parameterLimit,
    parseArrays: t.parseArrays !== false,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ae.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : ae.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ae.strictNullHandling
  };
}
function ev(i, t) {
  var e = tv(t);
  if (i === "" || i === null || typeof i === "undefined") {
    if (e.plainObjects) {
      return {
        __proto__: null
      };
    } else {
      return {};
    }
  }
  var r = typeof i == "string" ? Zy(i, e) : i;
  var n = e.plainObjects ? {
    __proto__: null
  } : {};
  for (var s = Object.keys(r), a = 0; a < s.length; ++a) {
    var o = s[a];
    var l = Jy(o, r[o], e, typeof i == "string");
    n = yn.merge(n, l, e);
  }
  if (e.allowSparse === true) {
    return n;
  } else {
    return yn.compact(n);
  }
}
var rv = Xy;
var iv = ev;
var nv = vl;
var sv = {
  formats: nv,
  parse: iv,
  stringify: rv
};
var av = cg;
function lr() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}
var ov = /^([a-z0-9.+-]+:)/i;
var hv = /:[0-9]*$/;
var lv = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
var uv = ["<", ">", "\"", "`", " ", "\r", `
`, "\t"];
var cv = ["{", "}", "|", "\\", "^", "`"].concat(uv);
var bh = ["'"].concat(cv);
var Xu = ["%", "/", "?", ";", "#"].concat(bh);
var zu = ["/", "?", "#"];
var dv = 255;
var qu = /^[+a-z0-9A-Z_-]{0,63}$/;
var fv = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var pv = {
  javascript: true,
  "javascript:": true
};
var Th = {
  javascript: true,
  "javascript:": true
};
var un = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
var wh = sv;
function Na(i, t, e) {
  if (i && typeof i == "object" && i instanceof lr) {
    return i;
  }
  var r = new lr();
  r.parse(i, t, e);
  return r;
}
lr.prototype.parse = function (i, t, e) {
  if (typeof i != "string") {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof i);
  }
  var r = i.indexOf("?");
  var n = r !== -1 && r < i.indexOf("#") ? "?" : "#";
  var s = i.split(n);
  var a = /\\/g;
  s[0] = s[0].replace(a, "/");
  i = s.join(n);
  var o = i;
  o = o.trim();
  if (!e && i.split("#").length === 1) {
    var l = lv.exec(o);
    if (l) {
      this.path = o;
      this.href = o;
      this.pathname = l[1];
      if (l[2]) {
        this.search = l[2];
        if (t) {
          this.query = wh.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (t) {
        this.search = "";
        this.query = {};
      }
      return this;
    }
  }
  var c = ov.exec(o);
  if (c) {
    c = c[0];
    var p = c.toLowerCase();
    this.protocol = p;
    o = o.substr(c.length);
  }
  if (e || c || o.match(/^\/\/[^@/]+@[^@/]+/)) {
    var g = o.substr(0, 2) === "//";
    if (g && (!c || !Th[c])) {
      o = o.substr(2);
      this.slashes = true;
    }
  }
  if (!Th[c] && (g || c && !un[c])) {
    var f = -1;
    for (var v = 0; v < zu.length; v++) {
      var _ = o.indexOf(zu[v]);
      if (_ !== -1 && (f === -1 || _ < f)) {
        f = _;
      }
    }
    var T;
    var A;
    if (f === -1) {
      A = o.lastIndexOf("@");
    } else {
      A = o.lastIndexOf("@", f);
    }
    if (A !== -1) {
      T = o.slice(0, A);
      o = o.slice(A + 1);
      this.auth = decodeURIComponent(T);
    }
    f = -1;
    for (var v = 0; v < Xu.length; v++) {
      var _ = o.indexOf(Xu[v]);
      if (_ !== -1 && (f === -1 || _ < f)) {
        f = _;
      }
    }
    if (f === -1) {
      f = o.length;
    }
    this.host = o.slice(0, f);
    o = o.slice(f);
    this.parseHost();
    this.hostname = this.hostname || "";
    var E = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!E) {
      var I = this.hostname.split(/\./);
      for (var v = 0, S = I.length; v < S; v++) {
        var P = I[v];
        if (P && !P.match(qu)) {
          var k = "";
          for (var V = 0, d = P.length; V < d; V++) {
            if (P.charCodeAt(V) > 127) {
              k += "x";
            } else {
              k += P[V];
            }
          }
          if (!k.match(qu)) {
            var O = I.slice(0, v);
            var N = I.slice(v + 1);
            var z = P.match(fv);
            if (z) {
              O.push(z[1]);
              N.unshift(z[2]);
            }
            if (N.length) {
              o = "/" + N.join(".") + o;
            }
            this.hostname = O.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > dv) {
      this.hostname = "";
    } else {
      this.hostname = this.hostname.toLowerCase();
    }
    if (!E) {
      this.hostname = av.toASCII(this.hostname);
    }
    var J = this.port ? ":" + this.port : "";
    var $ = this.hostname || "";
    this.host = $ + J;
    this.href += this.host;
    if (E) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (o[0] !== "/") {
        o = "/" + o;
      }
    }
  }
  if (!pv[p]) {
    for (var v = 0, S = bh.length; v < S; v++) {
      var B = bh[v];
      if (o.indexOf(B) !== -1) {
        var W = encodeURIComponent(B);
        if (W === B) {
          W = escape(B);
        }
        o = o.split(B).join(W);
      }
    }
  }
  var tt = o.indexOf("#");
  if (tt !== -1) {
    this.hash = o.substr(tt);
    o = o.slice(0, tt);
  }
  var at = o.indexOf("?");
  if (at !== -1) {
    this.search = o.substr(at);
    this.query = o.substr(at + 1);
    if (t) {
      this.query = wh.parse(this.query);
    }
    o = o.slice(0, at);
  } else if (t) {
    this.search = "";
    this.query = {};
  }
  if (o) {
    this.pathname = o;
  }
  if (un[p] && this.hostname && !this.pathname) {
    this.pathname = "/";
  }
  if (this.pathname || this.search) {
    var J = this.pathname || "";
    var nt = this.search || "";
    this.path = J + nt;
  }
  this.href = this.format();
  return this;
};
function gv(i) {
  if (typeof i == "string") {
    i = Na(i);
  }
  if (i instanceof lr) {
    return i.format();
  } else {
    return lr.prototype.format.call(i);
  }
}
lr.prototype.format = function () {
  var i = this.auth || "";
  if (i) {
    i = encodeURIComponent(i);
    i = i.replace(/%3A/i, ":");
    i += "@";
  }
  var t = this.protocol || "";
  var e = this.pathname || "";
  var r = this.hash || "";
  var n = false;
  var s = "";
  if (this.host) {
    n = i + this.host;
  } else if (this.hostname) {
    n = i + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
    if (this.port) {
      n += ":" + this.port;
    }
  }
  if (this.query && typeof this.query == "object" && Object.keys(this.query).length) {
    s = wh.stringify(this.query, {
      arrayFormat: "repeat",
      addQueryPrefix: false
    });
  }
  var a = this.search || s && "?" + s || "";
  if (t && t.substr(-1) !== ":") {
    t += ":";
  }
  if (this.slashes || (!t || un[t]) && n !== false) {
    n = "//" + (n || "");
    if (e && e.charAt(0) !== "/") {
      e = "/" + e;
    }
  } else {
    n ||= "";
  }
  if (r && r.charAt(0) !== "#") {
    r = "#" + r;
  }
  if (a && a.charAt(0) !== "?") {
    a = "?" + a;
  }
  e = e.replace(/[?#]/g, function (o) {
    return encodeURIComponent(o);
  });
  a = a.replace("#", "%23");
  return t + n + e + a + r;
};
function mv(i, t) {
  return Na(i, false, true).resolve(t);
}
lr.prototype.resolve = function (i) {
  return this.resolveObject(Na(i, false, true)).format();
};
lr.prototype.resolveObject = function (i) {
  if (typeof i == "string") {
    var t = new lr();
    t.parse(i, false, true);
    i = t;
  }
  var e = new lr();
  for (var r = Object.keys(this), n = 0; n < r.length; n++) {
    var s = r[n];
    e[s] = this[s];
  }
  e.hash = i.hash;
  if (i.href === "") {
    e.href = e.format();
    return e;
  }
  if (i.slashes && !i.protocol) {
    for (var a = Object.keys(i), o = 0; o < a.length; o++) {
      var l = a[o];
      if (l !== "protocol") {
        e[l] = i[l];
      }
    }
    if (un[e.protocol] && e.hostname && !e.pathname) {
      e.pathname = "/";
      e.path = e.pathname;
    }
    e.href = e.format();
    return e;
  }
  if (i.protocol && i.protocol !== e.protocol) {
    if (!un[i.protocol]) {
      for (var c = Object.keys(i), p = 0; p < c.length; p++) {
        var g = c[p];
        e[g] = i[g];
      }
      e.href = e.format();
      return e;
    }
    e.protocol = i.protocol;
    if (!i.host && !Th[i.protocol]) {
      for (var S = (i.pathname || "").split("/"); S.length && !(i.host = S.shift()););
      i.host ||= "";
      i.hostname ||= "";
      if (S[0] !== "") {
        S.unshift("");
      }
      if (S.length < 2) {
        S.unshift("");
      }
      e.pathname = S.join("/");
    } else {
      e.pathname = i.pathname;
    }
    e.search = i.search;
    e.query = i.query;
    e.host = i.host || "";
    e.auth = i.auth;
    e.hostname = i.hostname || i.host;
    e.port = i.port;
    if (e.pathname || e.search) {
      var f = e.pathname || "";
      var v = e.search || "";
      e.path = f + v;
    }
    e.slashes = e.slashes || i.slashes;
    e.href = e.format();
    return e;
  }
  var _ = e.pathname && e.pathname.charAt(0) === "/";
  var T = i.host || i.pathname && i.pathname.charAt(0) === "/";
  var A = T || _ || e.host && i.pathname;
  var E = A;
  var I = e.pathname && e.pathname.split("/") || [];
  var S = i.pathname && i.pathname.split("/") || [];
  var P = e.protocol && !un[e.protocol];
  if (P) {
    e.hostname = "";
    e.port = null;
    if (e.host) {
      if (I[0] === "") {
        I[0] = e.host;
      } else {
        I.unshift(e.host);
      }
    }
    e.host = "";
    if (i.protocol) {
      i.hostname = null;
      i.port = null;
      if (i.host) {
        if (S[0] === "") {
          S[0] = i.host;
        } else {
          S.unshift(i.host);
        }
      }
      i.host = null;
    }
    A = A && (S[0] === "" || I[0] === "");
  }
  if (T) {
    e.host = i.host || i.host === "" ? i.host : e.host;
    e.hostname = i.hostname || i.hostname === "" ? i.hostname : e.hostname;
    e.search = i.search;
    e.query = i.query;
    I = S;
  } else if (S.length) {
    I ||= [];
    I.pop();
    I = I.concat(S);
    e.search = i.search;
    e.query = i.query;
  } else if (i.search != null) {
    if (P) {
      e.host = I.shift();
      e.hostname = e.host;
      var k = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : false;
      if (k) {
        e.auth = k.shift();
        e.hostname = k.shift();
        e.host = e.hostname;
      }
    }
    e.search = i.search;
    e.query = i.query;
    if (e.pathname !== null || e.search !== null) {
      e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "");
    }
    e.href = e.format();
    return e;
  }
  if (!I.length) {
    e.pathname = null;
    if (e.search) {
      e.path = "/" + e.search;
    } else {
      e.path = null;
    }
    e.href = e.format();
    return e;
  }
  var V = I.slice(-1)[0];
  var d = (e.host || i.host || I.length > 1) && (V === "." || V === "..") || V === "";
  var O = 0;
  for (var N = I.length; N >= 0; N--) {
    V = I[N];
    if (V === ".") {
      I.splice(N, 1);
    } else if (V === "..") {
      I.splice(N, 1);
      O++;
    } else if (O) {
      I.splice(N, 1);
      O--;
    }
  }
  if (!A && !E) {
    for (; O--; O) {
      I.unshift("..");
    }
  }
  if (A && I[0] !== "" && (!I[0] || I[0].charAt(0) !== "/")) {
    I.unshift("");
  }
  if (d && I.join("/").substr(-1) !== "/") {
    I.push("");
  }
  var z = I[0] === "" || I[0] && I[0].charAt(0) === "/";
  if (P) {
    e.hostname = z ? "" : I.length ? I.shift() : "";
    e.host = e.hostname;
    var k = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : false;
    if (k) {
      e.auth = k.shift();
      e.hostname = k.shift();
      e.host = e.hostname;
    }
  }
  A = A || e.host && I.length;
  if (A && !z) {
    I.unshift("");
  }
  if (I.length > 0) {
    e.pathname = I.join("/");
  } else {
    e.pathname = null;
    e.path = null;
  }
  if (e.pathname !== null || e.search !== null) {
    e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "");
  }
  e.auth = i.auth || e.auth;
  e.slashes = e.slashes || i.slashes;
  e.href = e.format();
  return e;
};
lr.prototype.parseHost = function () {
  var i = this.host;
  var t = hv.exec(i);
  if (t) {
    t = t[0];
    if (t !== ":") {
      this.port = t.substr(1);
    }
    i = i.substr(0, i.length - t.length);
  }
  if (i) {
    this.hostname = i;
  }
};
var yv = Na;
var vv = mv;
var _v = gv;
const Yu = {};
function vt(i, t, e = 3) {
  if (Yu[t]) {
    return;
  }
  let r = new Error().stack;
  if (typeof r === "undefined") {
    console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`);
  } else {
    r = r.split(`
`).splice(e).join(`
`);
    if (console.groupCollapsed) {
      console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${i}`);
      console.warn(r);
      console.groupEnd();
    } else {
      console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`);
      console.warn(r);
    }
  }
  Yu[t] = true;
}
const xv = {
  get parse() {
    vt("7.3.0", "utils.url.parse is deprecated, use native URL API instead.");
    return yv;
  },
  get format() {
    vt("7.3.0", "utils.url.format is deprecated, use native URL API instead.");
    return _v;
  },
  get resolve() {
    vt("7.3.0", "utils.url.resolve is deprecated, use native URL API instead.");
    return vv;
  }
};
function rr(i) {
  if (typeof i != "string") {
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`);
  }
}
function Fn(i) {
  return i.split("?")[0].split("#")[0];
}
function bv(i) {
  return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Tv(i, t, e) {
  return i.replace(new RegExp(bv(t), "g"), e);
}
function wv(i, t) {
  let e = "";
  let r = 0;
  let n = -1;
  let s = 0;
  let a = -1;
  for (let o = 0; o <= i.length; ++o) {
    if (o < i.length) {
      a = i.charCodeAt(o);
    } else {
      if (a === 47) {
        break;
      }
      a = 47;
    }
    if (a === 47) {
      if (n !== o - 1 && s !== 1) {
        if (n !== o - 1 && s === 2) {
          if (e.length < 2 || r !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
            if (e.length > 2) {
              const l = e.lastIndexOf("/");
              if (l !== e.length - 1) {
                if (l === -1) {
                  e = "";
                  r = 0;
                } else {
                  e = e.slice(0, l);
                  r = e.length - 1 - e.lastIndexOf("/");
                }
                n = o;
                s = 0;
                continue;
              }
            } else if (e.length === 2 || e.length === 1) {
              e = "";
              r = 0;
              n = o;
              s = 0;
              continue;
            }
          }
        } else {
          if (e.length > 0) {
            e += `/${i.slice(n + 1, o)}`;
          } else {
            e = i.slice(n + 1, o);
          }
          r = o - n - 1;
        }
      }
      n = o;
      s = 0;
    } else if (a === 46 && s !== -1) {
      ++s;
    } else {
      s = -1;
    }
  }
  return e;
}
const ge = {
  toPosix(i) {
    return Tv(i, "\\", "/");
  },
  isUrl(i) {
    return /^https?:/.test(this.toPosix(i));
  },
  isDataUrl(i) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i);
  },
  isBlobUrl(i) {
    return i.startsWith("blob:");
  },
  hasProtocol(i) {
    return /^[^/:]+:/.test(this.toPosix(i));
  },
  getProtocol(i) {
    rr(i);
    i = this.toPosix(i);
    const t = /^file:\/\/\//.exec(i);
    if (t) {
      return t[0];
    }
    const e = /^[^/:]+:\/{0,2}/.exec(i);
    if (e) {
      return e[0];
    } else {
      return "";
    }
  },
  toAbsolute(i, t, e) {
    rr(i);
    if (this.isDataUrl(i) || this.isBlobUrl(i)) {
      return i;
    }
    const r = Fn(this.toPosix(t ?? st.ADAPTER.getBaseUrl()));
    const n = Fn(this.toPosix(e ?? this.rootname(r)));
    i = this.toPosix(i);
    if (i.startsWith("/")) {
      return ge.join(n, i.slice(1));
    } else if (this.isAbsolute(i)) {
      return i;
    } else {
      return this.join(r, i);
    }
  },
  normalize(i) {
    rr(i);
    if (i.length === 0) {
      return ".";
    }
    if (this.isDataUrl(i) || this.isBlobUrl(i)) {
      return i;
    }
    i = this.toPosix(i);
    let t = "";
    const e = i.startsWith("/");
    if (this.hasProtocol(i)) {
      t = this.rootname(i);
      i = i.slice(t.length);
    }
    const r = i.endsWith("/");
    i = wv(i);
    if (i.length > 0 && r) {
      i += "/";
    }
    if (e) {
      return `/${i}`;
    } else {
      return t + i;
    }
  },
  isAbsolute(i) {
    rr(i);
    i = this.toPosix(i);
    if (this.hasProtocol(i)) {
      return true;
    } else {
      return i.startsWith("/");
    }
  },
  join(...i) {
    if (i.length === 0) {
      return ".";
    }
    let t;
    for (let e = 0; e < i.length; ++e) {
      const r = i[e];
      rr(r);
      if (r.length > 0) {
        if (t === undefined) {
          t = r;
        } else {
          const n = i[e - 1] ?? "";
          if (this.joinExtensions.includes(this.extname(n).toLowerCase())) {
            t += `/../${r}`;
          } else {
            t += `/${r}`;
          }
        }
      }
    }
    if (t === undefined) {
      return ".";
    } else {
      return this.normalize(t);
    }
  },
  dirname(i) {
    rr(i);
    if (i.length === 0) {
      return ".";
    }
    i = this.toPosix(i);
    let t = i.charCodeAt(0);
    const e = t === 47;
    let r = -1;
    let n = true;
    const s = this.getProtocol(i);
    const a = i;
    i = i.slice(s.length);
    for (let o = i.length - 1; o >= 1; --o) {
      t = i.charCodeAt(o);
      if (t === 47) {
        if (!n) {
          r = o;
          break;
        }
      } else {
        n = false;
      }
    }
    if (r === -1) {
      if (e) {
        return "/";
      } else if (this.isUrl(a)) {
        return s + i;
      } else {
        return s;
      }
    } else if (e && r === 1) {
      return "//";
    } else {
      return s + i.slice(0, r);
    }
  },
  rootname(i) {
    rr(i);
    i = this.toPosix(i);
    let t = "";
    if (i.startsWith("/")) {
      t = "/";
    } else {
      t = this.getProtocol(i);
    }
    if (this.isUrl(i)) {
      const e = i.indexOf("/", t.length);
      if (e !== -1) {
        t = i.slice(0, e);
      } else {
        t = i;
      }
      if (!t.endsWith("/")) {
        t += "/";
      }
    }
    return t;
  },
  basename(i, t) {
    rr(i);
    if (t) {
      rr(t);
    }
    i = Fn(this.toPosix(i));
    let e = 0;
    let r = -1;
    let n = true;
    let s;
    if (t !== undefined && t.length > 0 && t.length <= i.length) {
      if (t.length === i.length && t === i) {
        return "";
      }
      let a = t.length - 1;
      let o = -1;
      for (s = i.length - 1; s >= 0; --s) {
        const l = i.charCodeAt(s);
        if (l === 47) {
          if (!n) {
            e = s + 1;
            break;
          }
        } else {
          if (o === -1) {
            n = false;
            o = s + 1;
          }
          if (a >= 0) {
            if (l === t.charCodeAt(a)) {
              if (--a === -1) {
                r = s;
              }
            } else {
              a = -1;
              r = o;
            }
          }
        }
      }
      if (e === r) {
        r = o;
      } else if (r === -1) {
        r = i.length;
      }
      return i.slice(e, r);
    }
    for (s = i.length - 1; s >= 0; --s) {
      if (i.charCodeAt(s) === 47) {
        if (!n) {
          e = s + 1;
          break;
        }
      } else if (r === -1) {
        n = false;
        r = s + 1;
      }
    }
    if (r === -1) {
      return "";
    } else {
      return i.slice(e, r);
    }
  },
  extname(i) {
    rr(i);
    i = Fn(this.toPosix(i));
    let t = -1;
    let e = 0;
    let r = -1;
    let n = true;
    let s = 0;
    for (let a = i.length - 1; a >= 0; --a) {
      const o = i.charCodeAt(a);
      if (o === 47) {
        if (!n) {
          e = a + 1;
          break;
        }
        continue;
      }
      if (r === -1) {
        n = false;
        r = a + 1;
      }
      if (o === 46) {
        if (t === -1) {
          t = a;
        } else if (s !== 1) {
          s = 1;
        }
      } else if (t !== -1) {
        s = -1;
      }
    }
    if (t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === e + 1) {
      return "";
    } else {
      return i.slice(t, r);
    }
  },
  parse(i) {
    rr(i);
    const t = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (i.length === 0) {
      return t;
    }
    i = Fn(this.toPosix(i));
    let e = i.charCodeAt(0);
    const r = this.isAbsolute(i);
    let n;
    t.root = this.rootname(i);
    if (r || this.hasProtocol(i)) {
      n = 1;
    } else {
      n = 0;
    }
    let s = -1;
    let a = 0;
    let o = -1;
    let l = true;
    let c = i.length - 1;
    let p = 0;
    for (; c >= n; --c) {
      e = i.charCodeAt(c);
      if (e === 47) {
        if (!l) {
          a = c + 1;
          break;
        }
        continue;
      }
      if (o === -1) {
        l = false;
        o = c + 1;
      }
      if (e === 46) {
        if (s === -1) {
          s = c;
        } else if (p !== 1) {
          p = 1;
        }
      } else if (s !== -1) {
        p = -1;
      }
    }
    if (s === -1 || o === -1 || p === 0 || p === 1 && s === o - 1 && s === a + 1) {
      if (o !== -1) {
        if (a === 0 && r) {
          t.base = t.name = i.slice(1, o);
        } else {
          t.base = t.name = i.slice(a, o);
        }
      }
    } else {
      if (a === 0 && r) {
        t.name = i.slice(1, s);
        t.base = i.slice(1, o);
      } else {
        t.name = i.slice(a, s);
        t.base = i.slice(a, o);
      }
      t.ext = i.slice(s, o);
    }
    t.dir = this.dirname(i);
    return t;
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"]
};
let No;
async function Td() {
  No ??= (async () => {
    var s;
    const i = document.createElement("canvas").getContext("webgl");
    if (!i) {
      return ke.UNPACK;
    }
    const t = await new Promise(a => {
      const o = document.createElement("video");
      o.onloadeddata = () => a(o);
      o.onerror = () => a(null);
      o.autoplay = false;
      o.crossOrigin = "anonymous";
      o.preload = "auto";
      o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=";
      o.load();
    });
    if (!t) {
      return ke.UNPACK;
    }
    const e = i.createTexture();
    i.bindTexture(i.TEXTURE_2D, e);
    const r = i.createFramebuffer();
    i.bindFramebuffer(i.FRAMEBUFFER, r);
    i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, e, 0);
    i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
    i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t);
    const n = new Uint8Array(4);
    i.readPixels(0, 0, 1, 1, i.RGBA, i.UNSIGNED_BYTE, n);
    i.deleteFramebuffer(r);
    i.deleteTexture(e);
    if ((s = i.getExtension("WEBGL_lose_context")) != null) {
      s.loseContext();
    }
    if (n[0] <= n[3]) {
      return ke.PMA;
    } else {
      return ke.UNPACK;
    }
  })();
  return No;
}
function Ev() {
  vt("7.0.0", "skipHello is deprecated, please use settings.RENDER_OPTIONS.hello");
}
function Av() {
  vt("7.0.0", `sayHello is deprecated, please use Renderer's "hello" option`);
}
let Lo;
function wd() {
  if (typeof Lo === "undefined") {
    Lo = function () {
      var t;
      const i = {
        stencil: true,
        failIfMajorPerformanceCaveat: st.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
      };
      try {
        if (!st.ADAPTER.getWebGLRenderingContext()) {
          return false;
        }
        const e = st.ADAPTER.createCanvas();
        let r = e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
        const n = (t = r == null ? undefined : r.getContextAttributes()) != null && !!t.stencil;
        if (r) {
          const s = r.getExtension("WEBGL_lose_context");
          if (s) {
            s.loseContext();
          }
        }
        r = null;
        return n;
      } catch {
        return false;
      }
    }();
  }
  return Lo;
}
var Sv = {
  grad: 0.9,
  turn: 360,
  rad: 360 / (Math.PI * 2)
};
function Wr(i) {
  if (typeof i == "string") {
    return i.length > 0;
  } else {
    return typeof i == "number";
  }
}
function xe(i, t = 0, e = Math.pow(10, t)) {
  return Math.round(e * i) / e + 0;
}
function Ke(i, t = 0, e = 1) {
  if (i > e) {
    return e;
  } else if (i > t) {
    return i;
  } else {
    return t;
  }
}
function Ed(i) {
  if ((i = isFinite(i) ? i % 360 : 0) > 0) {
    return i;
  } else {
    return i + 360;
  }
}
function Ku(i) {
  return {
    r: Ke(i.r, 0, 255),
    g: Ke(i.g, 0, 255),
    b: Ke(i.b, 0, 255),
    a: Ke(i.a)
  };
}
function ko(i) {
  return {
    r: xe(i.r),
    g: xe(i.g),
    b: xe(i.b),
    a: xe(i.a, 3)
  };
}
var Cv = /^#([0-9a-f]{3,8})$/i;
function Rs(i) {
  var t = i.toString(16);
  if (t.length < 2) {
    return "0" + t;
  } else {
    return t;
  }
}
function Ad(i) {
  var t = i.r;
  var e = i.g;
  var r = i.b;
  var n = i.a;
  var s = Math.max(t, e, r);
  var a = s - Math.min(t, e, r);
  var o = a ? s === t ? (e - r) / a : s === e ? 2 + (r - t) / a : 4 + (t - e) / a : 0;
  return {
    h: (o < 0 ? o + 6 : o) * 60,
    s: s ? a / s * 100 : 0,
    v: s / 255 * 100,
    a: n
  };
}
function Sd(i) {
  var t = i.h;
  var e = i.s;
  var r = i.v;
  var n = i.a;
  t = t / 360 * 6;
  e /= 100;
  r /= 100;
  var s = Math.floor(t);
  var a = r * (1 - e);
  var o = r * (1 - (t - s) * e);
  var l = r * (1 - (1 - t + s) * e);
  var c = s % 6;
  return {
    r: [r, o, a, a, l, r][c] * 255,
    g: [l, r, r, o, a, a][c] * 255,
    b: [a, a, l, r, r, o][c] * 255,
    a: n
  };
}
function Zu(i) {
  return {
    h: Ed(i.h),
    s: Ke(i.s, 0, 100),
    l: Ke(i.l, 0, 100),
    a: Ke(i.a)
  };
}
function Qu(i) {
  return {
    h: xe(i.h),
    s: xe(i.s),
    l: xe(i.l),
    a: xe(i.a, 3)
  };
}
function Ju(i) {
  return Sd((e = (t = i).s, {
    h: t.h,
    s: (e *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? e * 2 / (r + e) * 100 : 0,
    v: r + e,
    a: t.a
  }));
  var t;
  var e;
  var r;
}
function Qn(i) {
  return {
    h: (t = Ad(i)).h,
    s: (n = (200 - (e = t.s)) * (r = t.v) / 100) > 0 && n < 200 ? e * r / 100 / (n <= 100 ? n : 200 - n) * 100 : 0,
    l: n / 2,
    a: t.a
  };
  var t;
  var e;
  var r;
  var n;
}
var Iv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var Rv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var Pv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var Mv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var Eh = {
  string: [[function (i) {
    var t = Cv.exec(i);
    if (t) {
      if ((i = t[1]).length <= 4) {
        return {
          r: parseInt(i[0] + i[0], 16),
          g: parseInt(i[1] + i[1], 16),
          b: parseInt(i[2] + i[2], 16),
          a: i.length === 4 ? xe(parseInt(i[3] + i[3], 16) / 255, 2) : 1
        };
      } else if (i.length === 6 || i.length === 8) {
        return {
          r: parseInt(i.substr(0, 2), 16),
          g: parseInt(i.substr(2, 2), 16),
          b: parseInt(i.substr(4, 2), 16),
          a: i.length === 8 ? xe(parseInt(i.substr(6, 2), 16) / 255, 2) : 1
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }, "hex"], [function (i) {
    var t = Pv.exec(i) || Mv.exec(i);
    if (t) {
      if (t[2] !== t[4] || t[4] !== t[6]) {
        return null;
      } else {
        return Ku({
          r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
          g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
          b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
          a: t[7] === undefined ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
        });
      }
    } else {
      return null;
    }
  }, "rgb"], [function (i) {
    var t = Iv.exec(i) || Rv.exec(i);
    if (!t) {
      return null;
    }
    var e;
    var r;
    var n = Zu({
      h: (e = t[1], r = t[2], r === undefined && (r = "deg"), Number(e) * (Sv[r] || 1)),
      s: Number(t[3]),
      l: Number(t[4]),
      a: t[5] === undefined ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
    });
    return Ju(n);
  }, "hsl"]],
  object: [[function (i) {
    var t = i.r;
    var e = i.g;
    var r = i.b;
    var n = i.a;
    var s = n === undefined ? 1 : n;
    if (Wr(t) && Wr(e) && Wr(r)) {
      return Ku({
        r: Number(t),
        g: Number(e),
        b: Number(r),
        a: Number(s)
      });
    } else {
      return null;
    }
  }, "rgb"], [function (i) {
    var t = i.h;
    var e = i.s;
    var r = i.l;
    var n = i.a;
    var s = n === undefined ? 1 : n;
    if (!Wr(t) || !Wr(e) || !Wr(r)) {
      return null;
    }
    var a = Zu({
      h: Number(t),
      s: Number(e),
      l: Number(r),
      a: Number(s)
    });
    return Ju(a);
  }, "hsl"], [function (i) {
    var t = i.h;
    var e = i.s;
    var r = i.v;
    var n = i.a;
    var s = n === undefined ? 1 : n;
    if (!Wr(t) || !Wr(e) || !Wr(r)) {
      return null;
    }
    var a = function (o) {
      return {
        h: Ed(o.h),
        s: Ke(o.s, 0, 100),
        v: Ke(o.v, 0, 100),
        a: Ke(o.a)
      };
    }({
      h: Number(t),
      s: Number(e),
      v: Number(r),
      a: Number(s)
    });
    return Sd(a);
  }, "hsv"]]
};
function tc(i, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e][0](i);
    if (r) {
      return [r, t[e][1]];
    }
  }
  return [null, undefined];
}
function Dv(i) {
  if (typeof i == "string") {
    return tc(i.trim(), Eh.string);
  } else if (typeof i == "object" && i !== null) {
    return tc(i, Eh.object);
  } else {
    return [null, undefined];
  }
}
function Uo(i, t) {
  var e = Qn(i);
  return {
    h: e.h,
    s: Ke(e.s + t * 100, 0, 100),
    l: e.l,
    a: e.a
  };
}
function Go(i) {
  return (i.r * 299 + i.g * 587 + i.b * 114) / 1000 / 255;
}
function ec(i, t) {
  var e = Qn(i);
  return {
    h: e.h,
    s: e.s,
    l: Ke(e.l + t * 100, 0, 100),
    a: e.a
  };
}
var Ah = function () {
  function i(t) {
    this.parsed = Dv(t)[0];
    this.rgba = this.parsed || {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  i.prototype.isValid = function () {
    return this.parsed !== null;
  };
  i.prototype.brightness = function () {
    return xe(Go(this.rgba), 2);
  };
  i.prototype.isDark = function () {
    return Go(this.rgba) < 0.5;
  };
  i.prototype.isLight = function () {
    return Go(this.rgba) >= 0.5;
  };
  i.prototype.toHex = function () {
    t = ko(this.rgba);
    e = t.r;
    r = t.g;
    n = t.b;
    a = (s = t.a) < 1 ? Rs(xe(s * 255)) : "";
    return "#" + Rs(e) + Rs(r) + Rs(n) + a;
    var t;
    var e;
    var r;
    var n;
    var s;
    var a;
  };
  i.prototype.toRgb = function () {
    return ko(this.rgba);
  };
  i.prototype.toRgbString = function () {
    t = ko(this.rgba);
    e = t.r;
    r = t.g;
    n = t.b;
    if ((s = t.a) < 1) {
      return "rgba(" + e + ", " + r + ", " + n + ", " + s + ")";
    } else {
      return "rgb(" + e + ", " + r + ", " + n + ")";
    }
    var t;
    var e;
    var r;
    var n;
    var s;
  };
  i.prototype.toHsl = function () {
    return Qu(Qn(this.rgba));
  };
  i.prototype.toHslString = function () {
    t = Qu(Qn(this.rgba));
    e = t.h;
    r = t.s;
    n = t.l;
    if ((s = t.a) < 1) {
      return "hsla(" + e + ", " + r + "%, " + n + "%, " + s + ")";
    } else {
      return "hsl(" + e + ", " + r + "%, " + n + "%)";
    }
    var t;
    var e;
    var r;
    var n;
    var s;
  };
  i.prototype.toHsv = function () {
    t = Ad(this.rgba);
    return {
      h: xe(t.h),
      s: xe(t.s),
      v: xe(t.v),
      a: xe(t.a, 3)
    };
    var t;
  };
  i.prototype.invert = function () {
    return Tr({
      r: 255 - (t = this.rgba).r,
      g: 255 - t.g,
      b: 255 - t.b,
      a: t.a
    });
    var t;
  };
  i.prototype.saturate = function (t = 0.1) {
    return Tr(Uo(this.rgba, t));
  };
  i.prototype.desaturate = function (t = 0.1) {
    return Tr(Uo(this.rgba, -t));
  };
  i.prototype.grayscale = function () {
    return Tr(Uo(this.rgba, -1));
  };
  i.prototype.lighten = function (t = 0.1) {
    return Tr(ec(this.rgba, t));
  };
  i.prototype.darken = function (t = 0.1) {
    return Tr(ec(this.rgba, -t));
  };
  i.prototype.rotate = function (t = 15) {
    return this.hue(this.hue() + t);
  };
  i.prototype.alpha = function (t) {
    if (typeof t == "number") {
      return Tr({
        r: (e = this.rgba).r,
        g: e.g,
        b: e.b,
        a: t
      });
    } else {
      return xe(this.rgba.a, 3);
    }
    var e;
  };
  i.prototype.hue = function (t) {
    var e = Qn(this.rgba);
    if (typeof t == "number") {
      return Tr({
        h: t,
        s: e.s,
        l: e.l,
        a: e.a
      });
    } else {
      return xe(e.h);
    }
  };
  i.prototype.isEqual = function (t) {
    return this.toHex() === Tr(t).toHex();
  };
  return i;
}();
function Tr(i) {
  if (i instanceof Ah) {
    return i;
  } else {
    return new Ah(i);
  }
}
var rc = [];
function Bv(i) {
  i.forEach(function (t) {
    if (rc.indexOf(t) < 0) {
      t(Ah, Eh);
      rc.push(t);
    }
  });
}
function Fv(i, t) {
  var e = {
    white: "#ffffff",
    bisque: "#ffe4c4",
    blue: "#0000ff",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    azure: "#f0ffff",
    whitesmoke: "#f5f5f5",
    papayawhip: "#ffefd5",
    plum: "#dda0dd",
    blanchedalmond: "#ffebcd",
    black: "#000000",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    cornsilk: "#fff8dc",
    cornflowerblue: "#6495ed",
    burlywood: "#deb887",
    aquamarine: "#7fffd4",
    beige: "#f5f5dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkkhaki: "#bdb76b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    peachpuff: "#ffdab9",
    darkmagenta: "#8b008b",
    darkred: "#8b0000",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkslateblue: "#483d8b",
    gray: "#808080",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    wheat: "#f5deb3",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    ghostwhite: "#f8f8ff",
    darkviolet: "#9400d3",
    magenta: "#ff00ff",
    green: "#008000",
    dodgerblue: "#1e90ff",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    blueviolet: "#8a2be2",
    forestgreen: "#228b22",
    lawngreen: "#7cfc00",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    fuchsia: "#ff00ff",
    brown: "#a52a2a",
    maroon: "#800000",
    mediumblue: "#0000cd",
    lightcoral: "#f08080",
    darkturquoise: "#00ced1",
    lightcyan: "#e0ffff",
    ivory: "#fffff0",
    lightyellow: "#ffffe0",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    linen: "#faf0e6",
    mediumaquamarine: "#66cdaa",
    lemonchiffon: "#fffacd",
    lime: "#00ff00",
    khaki: "#f0e68c",
    mediumseagreen: "#3cb371",
    limegreen: "#32cd32",
    mediumspringgreen: "#00fa9a",
    lightskyblue: "#87cefa",
    lightblue: "#add8e6",
    midnightblue: "#191970",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    mintcream: "#f5fffa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    navajowhite: "#ffdead",
    navy: "#000080",
    mediumvioletred: "#c71585",
    powderblue: "#b0e0e6",
    palegoldenrod: "#eee8aa",
    oldlace: "#fdf5e6",
    paleturquoise: "#afeeee",
    mediumturquoise: "#48d1cc",
    mediumorchid: "#ba55d3",
    rebeccapurple: "#663399",
    lightsteelblue: "#b0c4de",
    mediumslateblue: "#7b68ee",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    orchid: "#da70d6",
    mediumpurple: "#9370db",
    purple: "#800080",
    pink: "#ffc0cb",
    skyblue: "#87ceeb",
    springgreen: "#00ff7f",
    palegreen: "#98fb98",
    red: "#ff0000",
    yellow: "#ffff00",
    slateblue: "#6a5acd",
    lavenderblush: "#fff0f5",
    peru: "#cd853f",
    palevioletred: "#db7093",
    violet: "#ee82ee",
    teal: "#008080",
    slategray: "#708090",
    slategrey: "#708090",
    aliceblue: "#f0f8ff",
    darkseagreen: "#8fbc8f",
    darkolivegreen: "#556b2f",
    greenyellow: "#adff2f",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    tomato: "#ff6347",
    silver: "#c0c0c0",
    sienna: "#a0522d",
    lavender: "#e6e6fa",
    lightgreen: "#90ee90",
    orange: "#ffa500",
    orangered: "#ff4500",
    steelblue: "#4682b4",
    royalblue: "#4169e1",
    turquoise: "#40e0d0",
    yellowgreen: "#9acd32",
    salmon: "#fa8072",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    darksalmon: "#e9967a",
    lightgoldenrodyellow: "#fafad2",
    snow: "#fffafa",
    lightgrey: "#d3d3d3",
    lightgray: "#d3d3d3",
    dimgray: "#696969",
    dimgrey: "#696969",
    olivedrab: "#6b8e23",
    olive: "#808000"
  };
  var r = {};
  for (var n in e) {
    r[e[n]] = n;
  }
  var s = {};
  i.prototype.toName = function (a) {
    if (!this.rgba.a && !this.rgba.r && !this.rgba.g && !this.rgba.b) {
      return "transparent";
    }
    var o;
    var l;
    var c = r[this.toHex()];
    if (c) {
      return c;
    }
    if (a != null && a.closest) {
      var p = this.toRgb();
      var g = Infinity;
      var f = "black";
      if (!s.length) {
        for (var v in e) {
          s[v] = new i(e[v]).toRgb();
        }
      }
      for (var _ in e) {
        o = p;
        l = s[_];
        var T = Math.pow(o.r - l.r, 2) + Math.pow(o.g - l.g, 2) + Math.pow(o.b - l.b, 2);
        if (T < g) {
          g = T;
          f = _;
        }
      }
      return f;
    }
  };
  t.string.push([function (a) {
    var o = a.toLowerCase();
    var l = o === "transparent" ? "#0000" : e[o];
    if (l) {
      return new i(l).toRgb();
    } else {
      return null;
    }
  }, "name"]);
}
Bv([Fv]);
const Qi = class Js {
  constructor(t = 16777215) {
    this._value = null;
    this._components = new Float32Array(4);
    this._components.fill(1);
    this._int = 16777215;
    this.value = t;
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(t) {
    this.value = t;
    return this;
  }
  set value(t) {
    if (t instanceof Js) {
      this._value = this.cloneSource(t._value);
      this._int = t._int;
      this._components.set(t._components);
    } else {
      if (t === null) {
        throw new Error("Cannot set PIXI.Color#value to null");
      }
      if (this._value === null || !this.isSourceEqual(this._value, t)) {
        this.normalize(t);
        this._value = this.cloneSource(t);
      }
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(t) {
    if (typeof t == "string" || typeof t == "number" || t instanceof Number || t === null) {
      return t;
    } else if (Array.isArray(t) || ArrayBuffer.isView(t)) {
      return t.slice(0);
    } else if (typeof t == "object" && t !== null) {
      return {
        ...t
      };
    } else {
      return t;
    }
  }
  isSourceEqual(t, e) {
    const r = typeof t;
    if (r !== typeof e) {
      return false;
    }
    if (r === "number" || r === "string" || t instanceof Number) {
      return t === e;
    }
    if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (t.length !== e.length) {
        return false;
      } else {
        return t.every((n, s) => n === e[s]);
      }
    }
    if (t !== null && e !== null) {
      const n = Object.keys(t);
      const s = Object.keys(e);
      if (n.length !== s.length) {
        return false;
      } else {
        return n.every(a => t[a] === e[a]);
      }
    }
    return t === e;
  }
  toRgba() {
    const [t, e, r, n] = this._components;
    return {
      r: t,
      g: e,
      b: r,
      a: n
    };
  }
  toRgb() {
    const [t, e, r] = this._components;
    return {
      r: t,
      g: e,
      b: r
    };
  }
  toRgbaString() {
    const [t, e, r] = this.toUint8RgbArray();
    return `rgba(${t},${e},${r},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [e, r, n] = this._components;
    t = t ?? [];
    t[0] = Math.round(e * 255);
    t[1] = Math.round(r * 255);
    t[2] = Math.round(n * 255);
    return t;
  }
  toRgbArray(t) {
    t = t ?? [];
    const [e, r, n] = this._components;
    t[0] = e;
    t[1] = r;
    t[2] = n;
    return t;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  multiply(t) {
    const [e, r, n, s] = Js.temp.setValue(t)._components;
    this._components[0] *= e;
    this._components[1] *= r;
    this._components[2] *= n;
    this._components[3] *= s;
    this.refreshInt();
    this._value = null;
    return this;
  }
  premultiply(t, e = true) {
    if (e) {
      this._components[0] *= t;
      this._components[1] *= t;
      this._components[2] *= t;
    }
    this._components[3] = t;
    this.refreshInt();
    this._value = null;
    return this;
  }
  toPremultiplied(t, e = true) {
    if (t === 1) {
      return -16777216 + this._int;
    }
    if (t === 0) {
      if (e) {
        return 0;
      } else {
        return this._int;
      }
    }
    let r = this._int >> 16 & 255;
    let n = this._int >> 8 & 255;
    let s = this._int & 255;
    if (e) {
      r = r * t + 0.5 | 0;
      n = n * t + 0.5 | 0;
      s = s * t + 0.5 | 0;
    }
    return (t * 255 << 24) + (r << 16) + (n << 8) + s;
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  setAlpha(t) {
    this._components[3] = this._clamp(t);
    return this;
  }
  round(t) {
    const [e, r, n] = this._components;
    this._components[0] = Math.round(e * t) / t;
    this._components[1] = Math.round(r * t) / t;
    this._components[2] = Math.round(n * t) / t;
    this.refreshInt();
    this._value = null;
    return this;
  }
  toArray(t) {
    t = t ?? [];
    const [e, r, n, s] = this._components;
    t[0] = e;
    t[1] = r;
    t[2] = n;
    t[3] = s;
    return t;
  }
  normalize(t) {
    let e;
    let r;
    let n;
    let s;
    if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
      const a = t;
      e = (a >> 16 & 255) / 255;
      r = (a >> 8 & 255) / 255;
      n = (a & 255) / 255;
      s = 1;
    } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4) {
      t = this._clamp(t);
      [e, r, n, s = 1] = t;
    } else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4) {
      t = this._clamp(t, 0, 255);
      [e, r, n, s = 255] = t;
      e /= 255;
      r /= 255;
      n /= 255;
      s /= 255;
    } else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = Js.HEX_PATTERN.exec(t);
        if (o) {
          t = `#${o[2]}`;
        }
      }
      const a = Tr(t);
      if (a.isValid()) {
        ({
          r: e,
          g: r,
          b: n,
          a: s
        } = a.rgba);
        e /= 255;
        r /= 255;
        n /= 255;
      }
    }
    if (e !== undefined) {
      this._components[0] = e;
      this._components[1] = r;
      this._components[2] = n;
      this._components[3] = s;
      this.refreshInt();
    } else {
      throw new Error(`Unable to convert color ${t}`);
    }
  }
  refreshInt() {
    this._clamp(this._components);
    const [t, e, r] = this._components;
    this._int = (t * 255 << 16) + (e * 255 << 8) + (r * 255 | 0);
  }
  _clamp(t, e = 0, r = 1) {
    if (typeof t == "number") {
      return Math.min(Math.max(t, e), r);
    } else {
      t.forEach((n, s) => {
        t[s] = Math.min(Math.max(n, e), r);
      });
      return t;
    }
  }
};
Qi.shared = new Qi();
Qi.temp = new Qi();
Qi.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let Pt = Qi;
function Ov(i, t = []) {
  vt("7.2.0", "utils.hex2rgb is deprecated, use Color#toRgbArray instead");
  return Pt.shared.setValue(i).toRgbArray(t);
}
function Cd(i) {
  vt("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead");
  return Pt.shared.setValue(i).toHex();
}
function Nv(i) {
  vt("7.2.0", "utils.string2hex is deprecated, use Color#toNumber instead");
  return Pt.shared.setValue(i).toNumber();
}
function Id(i) {
  vt("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead");
  return Pt.shared.setValue(i).toNumber();
}
function Lv() {
  const i = [];
  const t = [];
  for (let r = 0; r < 32; r++) {
    i[r] = r;
    t[r] = r;
  }
  i[q.NORMAL_NPM] = q.NORMAL;
  i[q.ADD_NPM] = q.ADD;
  i[q.SCREEN_NPM] = q.SCREEN;
  t[q.NORMAL] = q.NORMAL_NPM;
  t[q.ADD] = q.ADD_NPM;
  t[q.SCREEN] = q.SCREEN_NPM;
  const e = [];
  e.push(t);
  e.push(i);
  return e;
}
const _l = Lv();
function xl(i, t) {
  return _l[t ? 1 : 0][i];
}
function kv(i, t, e, r = true) {
  vt("7.2.0", "utils.premultiplyRgba has moved to Color.premultiply");
  return Pt.shared.setValue(i).premultiply(t, r).toArray(e ?? new Float32Array(4));
}
function Uv(i, t) {
  vt("7.2.0", "utils.premultiplyTint has moved to Color.toPremultiplied");
  return Pt.shared.setValue(i).toPremultiplied(t);
}
function Gv(i, t, e, r = true) {
  vt("7.2.0", "utils.premultiplyTintToRgba has moved to Color.premultiply");
  return Pt.shared.setValue(i).premultiply(t, r).toArray(e ?? new Float32Array(4));
}
const Rd = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function Pd(i, t = null) {
  const e = i * 6;
  t = t || new Uint16Array(e);
  if (t.length !== e) {
    throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${e}`);
  }
  for (let r = 0, n = 0; r < e; r += 6, n += 4) {
    t[r + 0] = n + 0;
    t[r + 1] = n + 1;
    t[r + 2] = n + 2;
    t[r + 3] = n + 0;
    t[r + 4] = n + 2;
    t[r + 5] = n + 3;
  }
  return t;
}
function La(i) {
  if (i.BYTES_PER_ELEMENT === 4) {
    if (i instanceof Float32Array) {
      return "Float32Array";
    } else if (i instanceof Uint32Array) {
      return "Uint32Array";
    } else {
      return "Int32Array";
    }
  }
  if (i.BYTES_PER_ELEMENT === 2) {
    if (i instanceof Uint16Array) {
      return "Uint16Array";
    }
  } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array) {
    return "Uint8Array";
  }
  return null;
}
const Hv = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function $v(i, t) {
  let e = 0;
  let r = 0;
  const n = {};
  for (let l = 0; l < i.length; l++) {
    r += t[l];
    e += i[l].length;
  }
  const s = new ArrayBuffer(e * 4);
  let a = null;
  let o = 0;
  for (let l = 0; l < i.length; l++) {
    const c = t[l];
    const p = i[l];
    const g = La(p);
    n[g] ||= new Hv[g](s);
    a = n[g];
    for (let f = 0; f < p.length; f++) {
      const v = (f / c | 0) * r + o;
      const _ = f % c;
      a[v + _] = p[f];
    }
    o += c;
  }
  return new Float32Array(s);
}
function is(i) {
  i += i === 0 ? 1 : 0;
  --i;
  i |= i >>> 1;
  i |= i >>> 2;
  i |= i >>> 4;
  i |= i >>> 8;
  i |= i >>> 16;
  return i + 1;
}
function Sh(i) {
  return !(i & i - 1) && !!i;
}
function Ch(i) {
  let t = (i > 65535 ? 1 : 0) << 4;
  i >>>= t;
  let e = (i > 255 ? 1 : 0) << 3;
  i >>>= e;
  t |= e;
  e = (i > 15 ? 1 : 0) << 2;
  i >>>= e;
  t |= e;
  e = (i > 3 ? 1 : 0) << 1;
  i >>>= e;
  t |= e;
  return t | i >> 1;
}
function Pi(i, t, e) {
  const r = i.length;
  let n;
  if (t >= r || e === 0) {
    return;
  }
  e = t + e > r ? r - t : e;
  const s = r - e;
  for (n = t; n < s; ++n) {
    i[n] = i[n + e];
  }
  i.length = s;
}
function Xr(i) {
  if (i === 0) {
    return 0;
  } else if (i < 0) {
    return -1;
  } else {
    return 1;
  }
}
let Vv = 0;
function hi() {
  return ++Vv;
}
const Ih = class {
  constructor(i, t, e, r) {
    this.left = i;
    this.top = t;
    this.right = e;
    this.bottom = r;
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
Ih.EMPTY = new Ih(0, 0, 0, 0);
let Rh = Ih;
const Ph = {};
const Me = Object.create(null);
const Ve = Object.create(null);
function Wv() {
  let i;
  for (i in Me) {
    Me[i].destroy();
  }
  for (i in Ve) {
    Ve[i].destroy();
  }
}
function jv() {
  let i;
  for (i in Me) {
    delete Me[i];
  }
  for (i in Ve) {
    delete Ve[i];
  }
}
class us {
  constructor(t, e, r) {
    this._canvas = st.ADAPTER.createCanvas();
    this._context = this._canvas.getContext("2d");
    this.resolution = r || st.RESOLUTION;
    this.resize(t, e);
  }
  clear() {
    this._checkDestroyed();
    this._context.setTransform(1, 0, 0, 1, 0, 0);
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(t, e) {
    this._checkDestroyed();
    this._canvas.width = Math.round(t * this.resolution);
    this._canvas.height = Math.round(e * this.resolution);
  }
  destroy() {
    this._context = null;
    this._canvas = null;
  }
  get width() {
    this._checkDestroyed();
    return this._canvas.width;
  }
  set width(t) {
    this._checkDestroyed();
    this._canvas.width = Math.round(t);
  }
  get height() {
    this._checkDestroyed();
    return this._canvas.height;
  }
  set height(t) {
    this._checkDestroyed();
    this._canvas.height = Math.round(t);
  }
  get canvas() {
    this._checkDestroyed();
    return this._canvas;
  }
  get context() {
    this._checkDestroyed();
    return this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null) {
      throw new TypeError("The CanvasRenderTarget has already been destroyed");
    }
  }
}
function ic(i, t, e) {
  for (let r = 0, n = e * 4 * t; r < t; ++r, n += 4) {
    if (i[n + 3] !== 0) {
      return false;
    }
  }
  return true;
}
function nc(i, t, e, r, n) {
  const s = t * 4;
  for (let a = r, o = r * s + e * 4; a <= n; ++a, o += s) {
    if (i[o + 3] !== 0) {
      return false;
    }
  }
  return true;
}
function Md(i) {
  const {
    width: t,
    height: e
  } = i;
  const r = i.getContext("2d", {
    willReadFrequently: true
  });
  if (r === null) {
    throw new TypeError("Failed to get canvas 2D context");
  }
  const n = r.getImageData(0, 0, t, e).data;
  let s = 0;
  let a = 0;
  let o = t - 1;
  let l = e - 1;
  while (a < e && ic(n, t, a)) {
    ++a;
  }
  if (a === e) {
    return Rh.EMPTY;
  }
  while (ic(n, t, l)) {
    --l;
  }
  while (nc(n, t, s, a, l)) {
    ++s;
  }
  while (nc(n, t, o, a, l)) {
    --o;
  }
  ++o;
  ++l;
  return new Rh(s, a, o, l);
}
function Dd(i) {
  const t = Md(i);
  const {
    width: e,
    height: r
  } = t;
  let n = null;
  if (!t.isEmpty()) {
    const s = i.getContext("2d");
    if (s === null) {
      throw new TypeError("Failed to get canvas 2D context");
    }
    n = s.getImageData(t.left, t.top, e, r);
  }
  return {
    width: e,
    height: r,
    data: n
  };
}
function Xv(i) {
  const t = Rd.exec(i);
  if (t) {
    return {
      mediaType: t[1] ? t[1].toLowerCase() : undefined,
      subType: t[2] ? t[2].toLowerCase() : undefined,
      charset: t[3] ? t[3].toLowerCase() : undefined,
      encoding: t[4] ? t[4].toLowerCase() : undefined,
      data: t[5]
    };
  }
}
function Bd(i, t = globalThis.location) {
  if (i.startsWith("data:")) {
    return "";
  }
  t = t || globalThis.location;
  const e = new URL(i, document.baseURI);
  if (e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol) {
    return "anonymous";
  } else {
    return "";
  }
}
function Fr(i, t = 1) {
  var r;
  const e = (r = st.RETINA_PREFIX) == null ? undefined : r.exec(i);
  if (e) {
    return parseFloat(e[1]);
  } else {
    return t;
  }
}
const zv = Object.freeze(Object.defineProperty({
  __proto__: null,
  BaseTextureCache: Ve,
  BoundingBox: Rh,
  CanvasRenderTarget: us,
  DATA_URI: Rd,
  EventEmitter: xn,
  ProgramCache: Ph,
  TextureCache: Me,
  clearTextureCache: jv,
  correctBlendMode: xl,
  createIndicesForQuads: Pd,
  decomposeDataUri: Xv,
  deprecation: vt,
  destroyTextureCache: Wv,
  detectVideoAlphaMode: Td,
  determineCrossOrigin: Bd,
  earcut: Kc,
  getBufferType: La,
  getCanvasBoundingBox: Md,
  getResolutionOfUrl: Fr,
  hex2rgb: Ov,
  hex2string: Cd,
  interleaveTypedArrays: $v,
  isMobile: Pr,
  isPow2: Sh,
  isWebGLSupported: wd,
  log2: Ch,
  nextPow2: is,
  path: ge,
  premultiplyBlendMode: _l,
  premultiplyRgba: kv,
  premultiplyTint: Uv,
  premultiplyTintToRgba: Gv,
  removeItems: Pi,
  rgb2hex: Id,
  sayHello: Av,
  sign: Xr,
  skipHello: Ev,
  string2hex: Nv,
  trimCanvas: Dd,
  uid: hi,
  url: xv
}, Symbol.toStringTag, {
  value: "Module"
}));
var rt = (i => {
  i.Renderer = "renderer";
  i.Application = "application";
  i.RendererSystem = "renderer-webgl-system";
  i.RendererPlugin = "renderer-webgl-plugin";
  i.CanvasRendererSystem = "renderer-canvas-system";
  i.CanvasRendererPlugin = "renderer-canvas-plugin";
  i.Asset = "asset";
  i.LoadParser = "load-parser";
  i.ResolveParser = "resolve-parser";
  i.CacheParser = "cache-parser";
  i.DetectionParser = "detection-parser";
  return i;
})(rt || {});
const Mh = i => {
  if (typeof i == "function" || typeof i == "object" && i.extension) {
    if (!i.extension) {
      throw new Error("Extension class must have an extension object");
    }
    i = {
      ...(typeof i.extension != "object" ? {
        type: i.extension
      } : i.extension),
      ref: i
    };
  }
  if (typeof i == "object") {
    i = {
      ...i
    };
  } else {
    throw new Error("Invalid extension type");
  }
  if (typeof i.type == "string") {
    i.type = [i.type];
  }
  return i;
};
const sc = (i, t) => Mh(i).priority ?? t;
const ot = {
  _addHandlers: {},
  _removeHandlers: {},
  _queue: {},
  remove(...i) {
    i.map(Mh).forEach(t => {
      t.type.forEach(e => {
        var r;
        var n;
        if ((n = (r = this._removeHandlers)[e]) == null) {
          return undefined;
        } else {
          return n.call(r, t);
        }
      });
    });
    return this;
  },
  add(...i) {
    i.map(Mh).forEach(t => {
      t.type.forEach(e => {
        var s;
        var a;
        const r = this._addHandlers;
        const n = this._queue;
        if (r[e]) {
          if ((s = r[e]) != null) {
            s.call(r, t);
          }
        } else {
          n[e] = n[e] || [];
          if ((a = n[e]) != null) {
            a.push(t);
          }
        }
      });
    });
    return this;
  },
  handle(i, t, e) {
    var a;
    const r = this._addHandlers;
    const n = this._removeHandlers;
    if (r[i] || n[i]) {
      throw new Error(`Extension type ${i} already has a handler`);
    }
    r[i] = t;
    n[i] = e;
    const s = this._queue;
    if (s[i]) {
      if ((a = s[i]) != null) {
        a.forEach(o => t(o));
      }
      delete s[i];
    }
    return this;
  },
  handleByMap(i, t) {
    return this.handle(i, e => {
      if (e.name) {
        t[e.name] = e.ref;
      }
    }, e => {
      if (e.name) {
        delete t[e.name];
      }
    });
  },
  handleByList(i, t, e = -1) {
    return this.handle(i, r => {
      if (!t.includes(r.ref)) {
        t.push(r.ref);
        t.sort((n, s) => sc(s, e) - sc(n, e));
      }
    }, r => {
      const n = t.indexOf(r.ref);
      if (n !== -1) {
        t.splice(n, 1);
      }
    });
  }
};
class Dh {
  constructor(t) {
    if (typeof t == "number") {
      this.rawBinaryData = new ArrayBuffer(t);
    } else if (t instanceof Uint8Array) {
      this.rawBinaryData = t.buffer;
    } else {
      this.rawBinaryData = t;
    }
    this.uint32View = new Uint32Array(this.rawBinaryData);
    this.float32View = new Float32Array(this.rawBinaryData);
  }
  get int8View() {
    this._int8View ||= new Int8Array(this.rawBinaryData);
    return this._int8View;
  }
  get uint8View() {
    this._uint8View ||= new Uint8Array(this.rawBinaryData);
    return this._uint8View;
  }
  get int16View() {
    this._int16View ||= new Int16Array(this.rawBinaryData);
    return this._int16View;
  }
  get uint16View() {
    this._uint16View ||= new Uint16Array(this.rawBinaryData);
    return this._uint16View;
  }
  get int32View() {
    this._int32View ||= new Int32Array(this.rawBinaryData);
    return this._int32View;
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    this.rawBinaryData = null;
    this._int8View = null;
    this._uint8View = null;
    this._int16View = null;
    this._uint16View = null;
    this._int32View = null;
    this.uint32View = null;
    this.float32View = null;
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
const qv = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function Yv(i) {
  let t = "";
  for (let e = 0; e < i; ++e) {
    if (e > 0) {
      t += `
else `;
    }
    if (e < i - 1) {
      t += `if(test == ${e}.0){}`;
    }
  }
  return t;
}
function Kv(i, t) {
  if (i === 0) {
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  }
  const e = t.createShader(t.FRAGMENT_SHADER);
  while (true) {
    const r = qv.replace(/%forloop%/gi, Yv(i));
    t.shaderSource(e, r);
    t.compileShader(e);
    if (!t.getShaderParameter(e, t.COMPILE_STATUS)) {
      i = i / 2 | 0;
    } else {
      break;
    }
  }
  return i;
}
const Ho = 0;
const $o = 1;
const Vo = 2;
const Wo = 3;
const jo = 4;
const Xo = 5;
class Nr {
  constructor() {
    this.data = 0;
    this.blendMode = q.NORMAL;
    this.polygonOffset = 0;
    this.blend = true;
    this.depthMask = true;
  }
  get blend() {
    return !!(this.data & 1 << Ho);
  }
  set blend(t) {
    if (!!(this.data & 1 << Ho) !== t) {
      this.data ^= 1 << Ho;
    }
  }
  get offsets() {
    return !!(this.data & 1 << $o);
  }
  set offsets(t) {
    if (!!(this.data & 1 << $o) !== t) {
      this.data ^= 1 << $o;
    }
  }
  get culling() {
    return !!(this.data & 1 << Vo);
  }
  set culling(t) {
    if (!!(this.data & 1 << Vo) !== t) {
      this.data ^= 1 << Vo;
    }
  }
  get depthTest() {
    return !!(this.data & 1 << Wo);
  }
  set depthTest(t) {
    if (!!(this.data & 1 << Wo) !== t) {
      this.data ^= 1 << Wo;
    }
  }
  get depthMask() {
    return !!(this.data & 1 << Xo);
  }
  set depthMask(t) {
    if (!!(this.data & 1 << Xo) !== t) {
      this.data ^= 1 << Xo;
    }
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << jo);
  }
  set clockwiseFrontFace(t) {
    if (!!(this.data & 1 << jo) !== t) {
      this.data ^= 1 << jo;
    }
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this.blend = t !== q.NONE;
    this._blendMode = t;
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    this.offsets = !!t;
    this._polygonOffset = t;
  }
  static for2d() {
    const t = new Nr();
    t.depthTest = false;
    t.blend = true;
    return t;
  }
}
Nr.prototype.toString = function () {
  return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
};
const Bh = [];
function Fd(i, t) {
  if (!i) {
    return null;
  }
  let e = "";
  if (typeof i == "string") {
    const r = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
    if (r) {
      e = r[1].toLowerCase();
    }
  }
  for (let r = Bh.length - 1; r >= 0; --r) {
    const n = Bh[r];
    if (n.test && n.test(i, e)) {
      return new n(i, t);
    }
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class ur {
  constructor(t) {
    this.items = [];
    this._name = t;
    this._aliasCount = 0;
  }
  emit(t, e, r, n, s, a, o, l) {
    if (arguments.length > 8) {
      throw new Error("max arguments reached");
    }
    const {
      name: c,
      items: p
    } = this;
    this._aliasCount++;
    for (let g = 0, f = p.length; g < f; g++) {
      p[g][c](t, e, r, n, s, a, o, l);
    }
    if (p === this.items) {
      this._aliasCount--;
    }
    return this;
  }
  ensureNonAliasedItems() {
    if (this._aliasCount > 0 && this.items.length > 1) {
      this._aliasCount = 0;
      this.items = this.items.slice(0);
    }
  }
  add(t) {
    if (t[this._name]) {
      this.ensureNonAliasedItems();
      this.remove(t);
      this.items.push(t);
    }
    return this;
  }
  remove(t) {
    const e = this.items.indexOf(t);
    if (e !== -1) {
      this.ensureNonAliasedItems();
      this.items.splice(e, 1);
    }
    return this;
  }
  contains(t) {
    return this.items.includes(t);
  }
  removeAll() {
    this.ensureNonAliasedItems();
    this.items.length = 0;
    return this;
  }
  destroy() {
    this.removeAll();
    this.items.length = 0;
    this._name = "";
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(ur.prototype, {
  dispatch: {
    value: ur.prototype.emit
  },
  run: {
    value: ur.prototype.emit
  }
});
class ns {
  constructor(t = 0, e = 0) {
    this._width = t;
    this._height = e;
    this.destroyed = false;
    this.internal = false;
    this.onResize = new ur("setRealSize");
    this.onUpdate = new ur("update");
    this.onError = new ur("onError");
  }
  bind(t) {
    this.onResize.add(t);
    this.onUpdate.add(t);
    this.onError.add(t);
    if (this._width || this._height) {
      this.onResize.emit(this._width, this._height);
    }
  }
  unbind(t) {
    this.onResize.remove(t);
    this.onUpdate.remove(t);
    this.onError.remove(t);
  }
  resize(t, e) {
    if (t !== this._width || e !== this._height) {
      this._width = t;
      this._height = e;
      this.onResize.emit(t, e);
    }
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    if (!this.destroyed) {
      this.onUpdate.emit();
    }
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(t, e, r) {
    return false;
  }
  dispose() {}
  destroy() {
    if (!this.destroyed) {
      this.destroyed = true;
      this.dispose();
      this.onError.removeAll();
      this.onError = null;
      this.onResize.removeAll();
      this.onResize = null;
      this.onUpdate.removeAll();
      this.onUpdate = null;
    }
  }
  static test(t, e) {
    return false;
  }
}
class ka extends ns {
  constructor(t, e) {
    const {
      width: r,
      height: n
    } = e || {};
    if (!r || !n) {
      throw new Error("BufferResource width or height invalid");
    }
    super(r, n);
    this.data = t;
    this.unpackAlignment = e.unpackAlignment ?? 4;
  }
  upload(t, e, r) {
    const n = t.gl;
    n.pixelStorei(n.UNPACK_ALIGNMENT, this.unpackAlignment);
    n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ke.UNPACK);
    const s = e.realWidth;
    const a = e.realHeight;
    if (r.width === s && r.height === a) {
      n.texSubImage2D(e.target, 0, 0, 0, s, a, e.format, r.type, this.data);
    } else {
      r.width = s;
      r.height = a;
      n.texImage2D(e.target, 0, r.internalFormat, s, a, 0, e.format, r.type, this.data);
    }
    return true;
  }
  dispose() {
    this.data = null;
  }
  static test(t) {
    return t === null || t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
  }
}
const Zv = {
  scaleMode: hr.NEAREST,
  alphaMode: ke.NPM
};
const Fh = class Ji extends xn {
  constructor(t = null, e = null) {
    super();
    e = Object.assign({}, Ji.defaultOptions, e);
    const {
      alphaMode: r,
      mipmap: n,
      anisotropicLevel: s,
      scaleMode: a,
      width: o,
      height: l,
      wrapMode: c,
      format: p,
      type: g,
      target: f,
      resolution: v,
      resourceOptions: _
    } = e;
    if (t && !(t instanceof ns)) {
      t = Fd(t, _);
      t.internal = true;
    }
    this.resolution = v || st.RESOLUTION;
    this.width = Math.round((o || 0) * this.resolution) / this.resolution;
    this.height = Math.round((l || 0) * this.resolution) / this.resolution;
    this._mipmap = n;
    this.anisotropicLevel = s;
    this._wrapMode = c;
    this._scaleMode = a;
    this.format = p;
    this.type = g;
    this.target = f;
    this.alphaMode = r;
    this.uid = hi();
    this.touched = 0;
    this.isPowerOfTwo = false;
    this._refreshPOT();
    this._glTextures = {};
    this.dirtyId = 0;
    this.dirtyStyleId = 0;
    this.cacheId = null;
    this.valid = o > 0 && l > 0;
    this.textureCacheIds = [];
    this.destroyed = false;
    this.resource = null;
    this._batchEnabled = 0;
    this._batchLocation = 0;
    this.parentTextureArray = null;
    this.setResource(t);
  }
  get realWidth() {
    return Math.round(this.width * this.resolution);
  }
  get realHeight() {
    return Math.round(this.height * this.resolution);
  }
  get mipmap() {
    return this._mipmap;
  }
  set mipmap(t) {
    if (this._mipmap !== t) {
      this._mipmap = t;
      this.dirtyStyleId++;
    }
  }
  get scaleMode() {
    return this._scaleMode;
  }
  set scaleMode(t) {
    if (this._scaleMode !== t) {
      this._scaleMode = t;
      this.dirtyStyleId++;
    }
  }
  get wrapMode() {
    return this._wrapMode;
  }
  set wrapMode(t) {
    if (this._wrapMode !== t) {
      this._wrapMode = t;
      this.dirtyStyleId++;
    }
  }
  setStyle(t, e) {
    let r;
    if (t !== undefined && t !== this.scaleMode) {
      this.scaleMode = t;
      r = true;
    }
    if (e !== undefined && e !== this.mipmap) {
      this.mipmap = e;
      r = true;
    }
    if (r) {
      this.dirtyStyleId++;
    }
    return this;
  }
  setSize(t, e, r) {
    r = r || this.resolution;
    return this.setRealSize(t * r, e * r, r);
  }
  setRealSize(t, e, r) {
    this.resolution = r || this.resolution;
    this.width = Math.round(t) / this.resolution;
    this.height = Math.round(e) / this.resolution;
    this._refreshPOT();
    this.update();
    return this;
  }
  _refreshPOT() {
    this.isPowerOfTwo = Sh(this.realWidth) && Sh(this.realHeight);
  }
  setResolution(t) {
    const e = this.resolution;
    if (e === t) {
      return this;
    } else {
      this.resolution = t;
      if (this.valid) {
        this.width = Math.round(this.width * e) / t;
        this.height = Math.round(this.height * e) / t;
        this.emit("update", this);
      }
      this._refreshPOT();
      return this;
    }
  }
  setResource(t) {
    if (this.resource === t) {
      return this;
    }
    if (this.resource) {
      throw new Error("Resource can be set only once");
    }
    t.bind(this);
    this.resource = t;
    return this;
  }
  update() {
    if (this.valid) {
      this.dirtyId++;
      this.dirtyStyleId++;
      this.emit("update", this);
    } else if (this.width > 0 && this.height > 0) {
      this.valid = true;
      this.emit("loaded", this);
      this.emit("update", this);
    }
  }
  onError(t) {
    this.emit("error", this, t);
  }
  destroy() {
    if (this.resource) {
      this.resource.unbind(this);
      if (this.resource.internal) {
        this.resource.destroy();
      }
      this.resource = null;
    }
    if (this.cacheId) {
      delete Ve[this.cacheId];
      delete Me[this.cacheId];
      this.cacheId = null;
    }
    this.valid = false;
    this.dispose();
    Ji.removeFromCache(this);
    this.textureCacheIds = null;
    this.destroyed = true;
    this.emit("destroyed", this);
    this.removeAllListeners();
  }
  dispose() {
    this.emit("dispose", this);
  }
  castToBaseTexture() {
    return this;
  }
  static from(t, e, r = st.STRICT_TEXTURE_CACHE) {
    const n = typeof t == "string";
    let s = null;
    if (n) {
      s = t;
    } else {
      if (!t._pixiId) {
        const o = (e == null ? undefined : e.pixiIdPrefix) || "pixiid";
        t._pixiId = `${o}_${hi()}`;
      }
      s = t._pixiId;
    }
    let a = Ve[s];
    if (n && r && !a) {
      throw new Error(`The cacheId "${s}" does not exist in BaseTextureCache.`);
    }
    if (!a) {
      a = new Ji(t, e);
      a.cacheId = s;
      Ji.addToCache(a, s);
    }
    return a;
  }
  static fromBuffer(t, e, r, n) {
    t = t || new Float32Array(e * r * 4);
    const s = new ka(t, {
      width: e,
      height: r,
      ...(n == null ? undefined : n.resourceOptions)
    });
    let a;
    let o;
    if (t instanceof Float32Array) {
      a = Z.RGBA;
      o = mt.FLOAT;
    } else if (t instanceof Int32Array) {
      a = Z.RGBA_INTEGER;
      o = mt.INT;
    } else if (t instanceof Uint32Array) {
      a = Z.RGBA_INTEGER;
      o = mt.UNSIGNED_INT;
    } else if (t instanceof Int16Array) {
      a = Z.RGBA_INTEGER;
      o = mt.SHORT;
    } else if (t instanceof Uint16Array) {
      a = Z.RGBA_INTEGER;
      o = mt.UNSIGNED_SHORT;
    } else if (t instanceof Int8Array) {
      a = Z.RGBA;
      o = mt.BYTE;
    } else {
      a = Z.RGBA;
      o = mt.UNSIGNED_BYTE;
    }
    s.internal = true;
    return new Ji(s, Object.assign({}, Zv, {
      type: o,
      format: a
    }, n));
  }
  static addToCache(t, e) {
    if (e) {
      if (!t.textureCacheIds.includes(e)) {
        t.textureCacheIds.push(e);
      }
      if (Ve[e] && Ve[e] !== t) {
        console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`);
      }
      Ve[e] = t;
    }
  }
  static removeFromCache(t) {
    if (typeof t == "string") {
      const e = Ve[t];
      if (e) {
        const r = e.textureCacheIds.indexOf(t);
        if (r > -1) {
          e.textureCacheIds.splice(r, 1);
        }
        delete Ve[t];
        return e;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let e = 0; e < t.textureCacheIds.length; ++e) {
        delete Ve[t.textureCacheIds[e]];
      }
      t.textureCacheIds.length = 0;
      return t;
    }
    return null;
  }
};
Fh.defaultOptions = {
  mipmap: Br.POW2,
  anisotropicLevel: 0,
  scaleMode: hr.LINEAR,
  wrapMode: Yr.CLAMP,
  alphaMode: ke.UNPACK,
  target: hn.TEXTURE_2D,
  format: Z.RGBA,
  type: mt.UNSIGNED_BYTE
};
Fh._globalBatch = 0;
let Tt = Fh;
class Oh {
  constructor() {
    this.texArray = null;
    this.blend = 0;
    this.type = or.TRIANGLES;
    this.start = 0;
    this.size = 0;
    this.data = null;
  }
}
let Qv = 0;
let pe = class Od {
  constructor(t, e = true, r = false) {
    this.data = t || new Float32Array(1);
    this._glBuffers = {};
    this._updateID = 0;
    this.index = r;
    this.static = e;
    this.id = Qv++;
    this.disposeRunner = new ur("disposeBuffer");
  }
  update(t) {
    if (t instanceof Array) {
      t = new Float32Array(t);
    }
    this.data = t || this.data;
    this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroy() {
    this.dispose();
    this.data = null;
  }
  set index(t) {
    this.type = t ? Mr.ELEMENT_ARRAY_BUFFER : Mr.ARRAY_BUFFER;
  }
  get index() {
    return this.type === Mr.ELEMENT_ARRAY_BUFFER;
  }
  static from(t) {
    if (t instanceof Array) {
      t = new Float32Array(t);
    }
    return new Od(t);
  }
};
class fa {
  constructor(t, e = 0, r = false, n = mt.FLOAT, s, a, o, l = 1) {
    this.buffer = t;
    this.size = e;
    this.normalized = r;
    this.type = n;
    this.stride = s;
    this.start = a;
    this.instance = o;
    this.divisor = l;
  }
  destroy() {
    this.buffer = null;
  }
  static from(t, e, r, n, s) {
    return new fa(t, e, r, n, s);
  }
}
const Jv = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function t0(i, t) {
  let e = 0;
  let r = 0;
  const n = {};
  for (let l = 0; l < i.length; l++) {
    r += t[l];
    e += i[l].length;
  }
  const s = new ArrayBuffer(e * 4);
  let a = null;
  let o = 0;
  for (let l = 0; l < i.length; l++) {
    const c = t[l];
    const p = i[l];
    const g = La(p);
    n[g] ||= new Jv[g](s);
    a = n[g];
    for (let f = 0; f < p.length; f++) {
      const v = (f / c | 0) * r + o;
      const _ = f % c;
      a[v + _] = p[f];
    }
    o += c;
  }
  return new Float32Array(s);
}
const ac = {
  5126: 4,
  5123: 2,
  5121: 1
};
let e0 = 0;
const r0 = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array,
  Uint16Array
};
class li {
  constructor(t = [], e = {}) {
    this.buffers = t;
    this.indexBuffer = null;
    this.attributes = e;
    this.glVertexArrayObjects = {};
    this.id = e0++;
    this.instanced = false;
    this.instanceCount = 1;
    this.disposeRunner = new ur("disposeGeometry");
    this.refCount = 0;
  }
  addAttribute(t, e, r = 0, n = false, s, a, o, l = false) {
    if (!e) {
      throw new Error("You must pass a buffer when creating an attribute");
    }
    if (!(e instanceof pe)) {
      if (e instanceof Array) {
        e = new Float32Array(e);
      }
      e = new pe(e);
    }
    const c = t.split("|");
    if (c.length > 1) {
      for (let g = 0; g < c.length; g++) {
        this.addAttribute(c[g], e, r, n, s);
      }
      return this;
    }
    let p = this.buffers.indexOf(e);
    if (p === -1) {
      this.buffers.push(e);
      p = this.buffers.length - 1;
    }
    this.attributes[t] = new fa(p, r, n, s, a, o, l);
    this.instanced = this.instanced || l;
    return this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getBuffer(t) {
    return this.buffers[this.getAttribute(t).buffer];
  }
  addIndex(t) {
    if (!(t instanceof pe)) {
      if (t instanceof Array) {
        t = new Uint16Array(t);
      }
      t = new pe(t);
    }
    t.type = Mr.ELEMENT_ARRAY_BUFFER;
    this.indexBuffer = t;
    if (!this.buffers.includes(t)) {
      this.buffers.push(t);
    }
    return this;
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) {
      return this;
    }
    const t = [];
    const e = [];
    const r = new pe();
    let n;
    for (n in this.attributes) {
      const s = this.attributes[n];
      const a = this.buffers[s.buffer];
      t.push(a.data);
      e.push(s.size * ac[s.type] / 4);
      s.buffer = 0;
    }
    r.data = t0(t, e);
    n = 0;
    for (; n < this.buffers.length; n++) {
      if (this.buffers[n] !== this.indexBuffer) {
        this.buffers[n].destroy();
      }
    }
    this.buffers = [r];
    if (this.indexBuffer) {
      this.buffers.push(this.indexBuffer);
    }
    return this;
  }
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroy() {
    this.dispose();
    this.buffers = null;
    this.indexBuffer = null;
    this.attributes = null;
  }
  clone() {
    const t = new li();
    for (let e = 0; e < this.buffers.length; e++) {
      t.buffers[e] = new pe(this.buffers[e].data.slice(0));
    }
    for (const e in this.attributes) {
      const r = this.attributes[e];
      t.attributes[e] = new fa(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance);
    }
    if (this.indexBuffer) {
      t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)];
      t.indexBuffer.type = Mr.ELEMENT_ARRAY_BUFFER;
    }
    return t;
  }
  static merge(t) {
    const e = new li();
    const r = [];
    const n = [];
    const s = [];
    let a;
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let l = 0; l < a.buffers.length; l++) {
        n[l] = n[l] || 0;
        n[l] += a.buffers[l].data.length;
        s[l] = 0;
      }
    }
    for (let o = 0; o < a.buffers.length; o++) {
      r[o] = new r0[La(a.buffers[o].data)](n[o]);
      e.buffers[o] = new pe(r[o]);
    }
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let l = 0; l < a.buffers.length; l++) {
        r[l].set(a.buffers[l].data, s[l]);
        s[l] += a.buffers[l].data.length;
      }
    }
    e.attributes = a.attributes;
    if (a.indexBuffer) {
      e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)];
      e.indexBuffer.type = Mr.ELEMENT_ARRAY_BUFFER;
      let o = 0;
      let l = 0;
      let c = 0;
      let p = 0;
      for (let g = 0; g < a.buffers.length; g++) {
        if (a.buffers[g] !== a.indexBuffer) {
          p = g;
          break;
        }
      }
      for (const g in a.attributes) {
        const f = a.attributes[g];
        if ((f.buffer | 0) === p) {
          l += f.size * ac[f.type] / 4;
        }
      }
      for (let g = 0; g < t.length; g++) {
        const f = t[g].indexBuffer.data;
        for (let v = 0; v < f.length; v++) {
          e.indexBuffer.data[v + c] += o;
        }
        o += t[g].buffers[p].data.length / l;
        c += f.length;
      }
    }
    return e;
  }
}
class Nd extends li {
  constructor(t = false) {
    super();
    this._buffer = new pe(null, t, false);
    this._indexBuffer = new pe(null, t, true);
    this.addAttribute("aVertexPosition", this._buffer, 2, false, mt.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, false, mt.FLOAT).addAttribute("aColor", this._buffer, 4, true, mt.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, true, mt.FLOAT).addIndex(this._indexBuffer);
  }
}
const pa = Math.PI * 2;
const i0 = 180 / Math.PI;
const n0 = Math.PI / 180;
var Zt = (i => {
  i[i.POLY = 0] = "POLY";
  i[i.RECT = 1] = "RECT";
  i[i.CIRC = 2] = "CIRC";
  i[i.ELIP = 3] = "ELIP";
  i[i.RREC = 4] = "RREC";
  return i;
})(Zt || {});
class Bt {
  constructor(t = 0, e = 0) {
    this.x = 0;
    this.y = 0;
    this.x = t;
    this.y = e;
  }
  clone() {
    return new Bt(this.x, this.y);
  }
  copyFrom(t) {
    this.set(t.x, t.y);
    return this;
  }
  copyTo(t) {
    t.set(this.x, this.y);
    return t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, e = t) {
    this.x = t;
    this.y = e;
    return this;
  }
}
Bt.prototype.toString = function () {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const Ps = [new Bt(), new Bt(), new Bt(), new Bt()];
class At {
  constructor(t = 0, e = 0, r = 0, n = 0) {
    this.x = Number(t);
    this.y = Number(e);
    this.width = Number(r);
    this.height = Number(n);
    this.type = Zt.RECT;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new At(0, 0, 0, 0);
  }
  clone() {
    return new At(this.x, this.y, this.width, this.height);
  }
  copyFrom(t) {
    this.x = t.x;
    this.y = t.y;
    this.width = t.width;
    this.height = t.height;
    return this;
  }
  copyTo(t) {
    t.x = this.x;
    t.y = this.y;
    t.width = this.width;
    t.height = this.height;
    return t;
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    } else {
      return t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
    }
  }
  intersects(t, e) {
    if (!e) {
      const O = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= O) {
        return false;
      }
      const N = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > N;
    }
    const r = this.left;
    const n = this.right;
    const s = this.top;
    const a = this.bottom;
    if (n <= r || a <= s) {
      return false;
    }
    const o = Ps[0].set(t.left, t.top);
    const l = Ps[1].set(t.left, t.bottom);
    const c = Ps[2].set(t.right, t.top);
    const p = Ps[3].set(t.right, t.bottom);
    if (c.x <= o.x || l.y <= o.y) {
      return false;
    }
    const g = Math.sign(e.a * e.d - e.b * e.c);
    if (g === 0 || (e.apply(o, o), e.apply(l, l), e.apply(c, c), e.apply(p, p), Math.max(o.x, l.x, c.x, p.x) <= r || Math.min(o.x, l.x, c.x, p.x) >= n || Math.max(o.y, l.y, c.y, p.y) <= s || Math.min(o.y, l.y, c.y, p.y) >= a)) {
      return false;
    }
    const f = g * (l.y - o.y);
    const v = g * (o.x - l.x);
    const _ = f * r + v * s;
    const T = f * n + v * s;
    const A = f * r + v * a;
    const E = f * n + v * a;
    if (Math.max(_, T, A, E) <= f * o.x + v * o.y || Math.min(_, T, A, E) >= f * p.x + v * p.y) {
      return false;
    }
    const I = g * (o.y - c.y);
    const S = g * (c.x - o.x);
    const P = I * r + S * s;
    const k = I * n + S * s;
    const V = I * r + S * a;
    const d = I * n + S * a;
    return !(Math.max(P, k, V, d) <= I * o.x + S * o.y) && !(Math.min(P, k, V, d) >= I * p.x + S * p.y);
  }
  pad(t = 0, e = t) {
    this.x -= t;
    this.y -= e;
    this.width += t * 2;
    this.height += e * 2;
    return this;
  }
  fit(t) {
    const e = Math.max(this.x, t.x);
    const r = Math.min(this.x + this.width, t.x + t.width);
    const n = Math.max(this.y, t.y);
    const s = Math.min(this.y + this.height, t.y + t.height);
    this.x = e;
    this.width = Math.max(r - e, 0);
    this.y = n;
    this.height = Math.max(s - n, 0);
    return this;
  }
  ceil(t = 1, e = 0.001) {
    const r = Math.ceil((this.x + this.width - e) * t) / t;
    const n = Math.ceil((this.y + this.height - e) * t) / t;
    this.x = Math.floor((this.x + e) * t) / t;
    this.y = Math.floor((this.y + e) * t) / t;
    this.width = r - this.x;
    this.height = n - this.y;
    return this;
  }
  enlarge(t) {
    const e = Math.min(this.x, t.x);
    const r = Math.max(this.x + this.width, t.x + t.width);
    const n = Math.min(this.y, t.y);
    const s = Math.max(this.y + this.height, t.y + t.height);
    this.x = e;
    this.width = r - e;
    this.y = n;
    this.height = s - n;
    return this;
  }
}
At.prototype.toString = function () {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class Ua {
  constructor(t = 0, e = 0, r = 0) {
    this.x = t;
    this.y = e;
    this.radius = r;
    this.type = Zt.CIRC;
  }
  clone() {
    return new Ua(this.x, this.y, this.radius);
  }
  contains(t, e) {
    if (this.radius <= 0) {
      return false;
    }
    const r = this.radius * this.radius;
    let n = this.x - t;
    let s = this.y - e;
    n *= n;
    s *= s;
    return n + s <= r;
  }
  getBounds() {
    return new At(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}
Ua.prototype.toString = function () {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class Ga {
  constructor(t = 0, e = 0, r = 0, n = 0) {
    this.x = t;
    this.y = e;
    this.width = r;
    this.height = n;
    this.type = Zt.ELIP;
  }
  clone() {
    return new Ga(this.x, this.y, this.width, this.height);
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    let r = (t - this.x) / this.width;
    let n = (e - this.y) / this.height;
    r *= r;
    n *= n;
    return r + n <= 1;
  }
  getBounds() {
    return new At(this.x - this.width, this.y - this.height, this.width, this.height);
  }
}
Ga.prototype.toString = function () {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class Mi {
  constructor(...t) {
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const r = [];
      for (let n = 0, s = e.length; n < s; n++) {
        r.push(e[n].x, e[n].y);
      }
      e = r;
    }
    this.points = e;
    this.type = Zt.POLY;
    this.closeStroke = true;
  }
  clone() {
    const t = this.points.slice();
    const e = new Mi(t);
    e.closeStroke = this.closeStroke;
    return e;
  }
  contains(t, e) {
    let r = false;
    const n = this.points.length / 2;
    for (let s = 0, a = n - 1; s < n; a = s++) {
      const o = this.points[s * 2];
      const l = this.points[s * 2 + 1];
      const c = this.points[a * 2];
      const p = this.points[a * 2 + 1];
      if (l > e != p > e && t < (c - o) * ((e - l) / (p - l)) + o) {
        r = !r;
      }
    }
    return r;
  }
}
Mi.prototype.toString = function () {
  return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((i, t) => `${i}, ${t}`, "")}]`;
};
class Ha {
  constructor(t = 0, e = 0, r = 0, n = 0, s = 20) {
    this.x = t;
    this.y = e;
    this.width = r;
    this.height = n;
    this.radius = s;
    this.type = Zt.RREC;
  }
  clone() {
    return new Ha(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
      const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r) {
        return true;
      }
      let n = t - (this.x + r);
      let s = e - (this.y + r);
      const a = r * r;
      if (n * n + s * s <= a || (n = t - (this.x + this.width - r), n * n + s * s <= a) || (s = e - (this.y + this.height - r), n * n + s * s <= a) || (n = t - (this.x + r), n * n + s * s <= a)) {
        return true;
      }
    }
    return false;
  }
}
Ha.prototype.toString = function () {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class jt {
  constructor(t = 1, e = 0, r = 0, n = 1, s = 0, a = 0) {
    this.array = null;
    this.a = t;
    this.b = e;
    this.c = r;
    this.d = n;
    this.tx = s;
    this.ty = a;
  }
  fromArray(t) {
    this.a = t[0];
    this.b = t[1];
    this.c = t[3];
    this.d = t[4];
    this.tx = t[2];
    this.ty = t[5];
  }
  set(t, e, r, n, s, a) {
    this.a = t;
    this.b = e;
    this.c = r;
    this.d = n;
    this.tx = s;
    this.ty = a;
    return this;
  }
  toArray(t, e) {
    this.array ||= new Float32Array(9);
    const r = e || this.array;
    if (t) {
      r[0] = this.a;
      r[1] = this.b;
      r[2] = 0;
      r[3] = this.c;
      r[4] = this.d;
      r[5] = 0;
      r[6] = this.tx;
      r[7] = this.ty;
      r[8] = 1;
    } else {
      r[0] = this.a;
      r[1] = this.c;
      r[2] = this.tx;
      r[3] = this.b;
      r[4] = this.d;
      r[5] = this.ty;
      r[6] = 0;
      r[7] = 0;
      r[8] = 1;
    }
    return r;
  }
  apply(t, e) {
    e = e || new Bt();
    const r = t.x;
    const n = t.y;
    e.x = this.a * r + this.c * n + this.tx;
    e.y = this.b * r + this.d * n + this.ty;
    return e;
  }
  applyInverse(t, e) {
    e = e || new Bt();
    const r = 1 / (this.a * this.d + this.c * -this.b);
    const n = t.x;
    const s = t.y;
    e.x = this.d * r * n + -this.c * r * s + (this.ty * this.c - this.tx * this.d) * r;
    e.y = this.a * r * s + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r;
    return e;
  }
  translate(t, e) {
    this.tx += t;
    this.ty += e;
    return this;
  }
  scale(t, e) {
    this.a *= t;
    this.d *= e;
    this.c *= t;
    this.b *= e;
    this.tx *= t;
    this.ty *= e;
    return this;
  }
  rotate(t) {
    const e = Math.cos(t);
    const r = Math.sin(t);
    const n = this.a;
    const s = this.c;
    const a = this.tx;
    this.a = n * e - this.b * r;
    this.b = n * r + this.b * e;
    this.c = s * e - this.d * r;
    this.d = s * r + this.d * e;
    this.tx = a * e - this.ty * r;
    this.ty = a * r + this.ty * e;
    return this;
  }
  append(t) {
    const e = this.a;
    const r = this.b;
    const n = this.c;
    const s = this.d;
    this.a = t.a * e + t.b * n;
    this.b = t.a * r + t.b * s;
    this.c = t.c * e + t.d * n;
    this.d = t.c * r + t.d * s;
    this.tx = t.tx * e + t.ty * n + this.tx;
    this.ty = t.tx * r + t.ty * s + this.ty;
    return this;
  }
  setTransform(t, e, r, n, s, a, o, l, c) {
    this.a = Math.cos(o + c) * s;
    this.b = Math.sin(o + c) * s;
    this.c = -Math.sin(o - l) * a;
    this.d = Math.cos(o - l) * a;
    this.tx = t - (r * this.a + n * this.c);
    this.ty = e - (r * this.b + n * this.d);
    return this;
  }
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const r = this.a;
      const n = this.c;
      this.a = r * t.a + this.b * t.c;
      this.b = r * t.b + this.b * t.d;
      this.c = n * t.a + this.d * t.c;
      this.d = n * t.b + this.d * t.d;
    }
    this.tx = e * t.a + this.ty * t.c + t.tx;
    this.ty = e * t.b + this.ty * t.d + t.ty;
    return this;
  }
  decompose(t) {
    const e = this.a;
    const r = this.b;
    const n = this.c;
    const s = this.d;
    const a = t.pivot;
    const o = -Math.atan2(-n, s);
    const l = Math.atan2(r, e);
    const c = Math.abs(o + l);
    if (c < 0.00001 || Math.abs(pa - c) < 0.00001) {
      t.rotation = l;
      t.skew.x = t.skew.y = 0;
    } else {
      t.rotation = 0;
      t.skew.x = o;
      t.skew.y = l;
    }
    t.scale.x = Math.sqrt(e * e + r * r);
    t.scale.y = Math.sqrt(n * n + s * s);
    t.position.x = this.tx + (a.x * e + a.y * n);
    t.position.y = this.ty + (a.x * r + a.y * s);
    return t;
  }
  invert() {
    const t = this.a;
    const e = this.b;
    const r = this.c;
    const n = this.d;
    const s = this.tx;
    const a = t * n - e * r;
    this.a = n / a;
    this.b = -e / a;
    this.c = -r / a;
    this.d = t / a;
    this.tx = (r * this.ty - n * s) / a;
    this.ty = -(t * this.ty - e * s) / a;
    return this;
  }
  identity() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
    return this;
  }
  clone() {
    const t = new jt();
    t.a = this.a;
    t.b = this.b;
    t.c = this.c;
    t.d = this.d;
    t.tx = this.tx;
    t.ty = this.ty;
    return t;
  }
  copyTo(t) {
    t.a = this.a;
    t.b = this.b;
    t.c = this.c;
    t.d = this.d;
    t.tx = this.tx;
    t.ty = this.ty;
    return t;
  }
  copyFrom(t) {
    this.a = t.a;
    this.b = t.b;
    this.c = t.c;
    this.d = t.d;
    this.tx = t.tx;
    this.ty = t.ty;
    return this;
  }
  static get IDENTITY() {
    return new jt();
  }
  static get TEMP_MATRIX() {
    return new jt();
  }
}
jt.prototype.toString = function () {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const bi = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
const Ti = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
const wi = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
const Ei = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
const Nh = [];
const Ld = [];
const Ms = Math.sign;
function s0() {
  for (let i = 0; i < 16; i++) {
    const t = [];
    Nh.push(t);
    for (let e = 0; e < 16; e++) {
      const r = Ms(bi[i] * bi[e] + wi[i] * Ti[e]);
      const n = Ms(Ti[i] * bi[e] + Ei[i] * Ti[e]);
      const s = Ms(bi[i] * wi[e] + wi[i] * Ei[e]);
      const a = Ms(Ti[i] * wi[e] + Ei[i] * Ei[e]);
      for (let o = 0; o < 16; o++) {
        if (bi[o] === r && Ti[o] === n && wi[o] === s && Ei[o] === a) {
          t.push(o);
          break;
        }
      }
    }
  }
  for (let i = 0; i < 16; i++) {
    const t = new jt();
    t.set(bi[i], Ti[i], wi[i], Ei[i], 0, 0);
    Ld.push(t);
  }
}
s0();
const ee = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: i => bi[i],
  uY: i => Ti[i],
  vX: i => wi[i],
  vY: i => Ei[i],
  inv: i => i & 8 ? i & 15 : -i & 7,
  add: (i, t) => Nh[i][t],
  sub: (i, t) => Nh[i][ee.inv(t)],
  rotate180: i => i ^ 4,
  isVertical: i => (i & 3) === 2,
  byDirection: (i, t) => Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? ee.S : ee.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? ee.E : ee.W : t > 0 ? i > 0 ? ee.SE : ee.SW : i > 0 ? ee.NE : ee.NW,
  matrixAppendRotationInv: (i, t, e = 0, r = 0) => {
    const n = Ld[ee.inv(t)];
    n.tx = e;
    n.ty = r;
    i.append(n);
  }
};
class zr {
  constructor(t, e, r = 0, n = 0) {
    this._x = r;
    this._y = n;
    this.cb = t;
    this.scope = e;
  }
  clone(t = this.cb, e = this.scope) {
    return new zr(t, e, this._x, this._y);
  }
  set(t = 0, e = t) {
    if (this._x !== t || this._y !== e) {
      this._x = t;
      this._y = e;
      this.cb.call(this.scope);
    }
    return this;
  }
  copyFrom(t) {
    if (this._x !== t.x || this._y !== t.y) {
      this._x = t.x;
      this._y = t.y;
      this.cb.call(this.scope);
    }
    return this;
  }
  copyTo(t) {
    t.set(this._x, this._y);
    return t;
  }
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    if (this._x !== t) {
      this._x = t;
      this.cb.call(this.scope);
    }
  }
  get y() {
    return this._y;
  }
  set y(t) {
    if (this._y !== t) {
      this._y = t;
      this.cb.call(this.scope);
    }
  }
}
zr.prototype.toString = function () {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const Lh = class {
  constructor() {
    this.worldTransform = new jt();
    this.localTransform = new jt();
    this.position = new zr(this.onChange, this, 0, 0);
    this.scale = new zr(this.onChange, this, 1, 1);
    this.pivot = new zr(this.onChange, this, 0, 0);
    this.skew = new zr(this.updateSkew, this, 0, 0);
    this._rotation = 0;
    this._cx = 1;
    this._sx = 0;
    this._cy = 0;
    this._sy = 1;
    this._localID = 0;
    this._currentLocalID = 0;
    this._worldID = 0;
    this._parentID = 0;
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y);
    this._sx = Math.sin(this._rotation + this.skew.y);
    this._cy = -Math.sin(this._rotation - this.skew.x);
    this._sy = Math.cos(this._rotation - this.skew.x);
    this._localID++;
  }
  updateLocalTransform() {
    const i = this.localTransform;
    if (this._localID !== this._currentLocalID) {
      i.a = this._cx * this.scale.x;
      i.b = this._sx * this.scale.x;
      i.c = this._cy * this.scale.y;
      i.d = this._sy * this.scale.y;
      i.tx = this.position.x - (this.pivot.x * i.a + this.pivot.y * i.c);
      i.ty = this.position.y - (this.pivot.x * i.b + this.pivot.y * i.d);
      this._currentLocalID = this._localID;
      this._parentID = -1;
    }
  }
  updateTransform(i) {
    const t = this.localTransform;
    if (this._localID !== this._currentLocalID) {
      t.a = this._cx * this.scale.x;
      t.b = this._sx * this.scale.x;
      t.c = this._cy * this.scale.y;
      t.d = this._sy * this.scale.y;
      t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c);
      t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d);
      this._currentLocalID = this._localID;
      this._parentID = -1;
    }
    if (this._parentID !== i._worldID) {
      const e = i.worldTransform;
      const r = this.worldTransform;
      r.a = t.a * e.a + t.b * e.c;
      r.b = t.a * e.b + t.b * e.d;
      r.c = t.c * e.a + t.d * e.c;
      r.d = t.c * e.b + t.d * e.d;
      r.tx = t.tx * e.a + t.ty * e.c + e.tx;
      r.ty = t.tx * e.b + t.ty * e.d + e.ty;
      this._parentID = i._worldID;
      this._worldID++;
    }
  }
  setFromMatrix(i) {
    i.decompose(this);
    this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(i) {
    if (this._rotation !== i) {
      this._rotation = i;
      this.updateSkew();
    }
  }
};
Lh.IDENTITY = new Lh();
let $a = Lh;
$a.prototype.toString = function () {
  return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
};
var a0 = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`;
var o0 = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function oc(i, t, e) {
  const r = i.createShader(t);
  i.shaderSource(r, e);
  i.compileShader(r);
  return r;
}
function zo(i) {
  const t = new Array(i);
  for (let e = 0; e < t.length; e++) {
    t[e] = false;
  }
  return t;
}
function kd(i, t) {
  switch (i) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(t * 2);
    case "vec3":
      return new Float32Array(t * 3);
    case "vec4":
      return new Float32Array(t * 4);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(t * 2);
    case "ivec3":
      return new Int32Array(t * 3);
    case "ivec4":
      return new Int32Array(t * 4);
    case "uvec2":
      return new Uint32Array(t * 2);
    case "uvec3":
      return new Uint32Array(t * 3);
    case "uvec4":
      return new Uint32Array(t * 4);
    case "bool":
      return false;
    case "bvec2":
      return zo(t * 2);
    case "bvec3":
      return zo(t * 3);
    case "bvec4":
      return zo(t * 4);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const cn = [{
  test: i => i.type === "float" && i.size === 1 && !i.isArray,
  code: i => `
            if(uv["${i}"] !== ud["${i}"].value)
            {
                ud["${i}"].value = uv["${i}"]
                gl.uniform1f(ud["${i}"].location, uv["${i}"])
            }
            `
}, {
  test: (i, t) => (i.type === "sampler2D" || i.type === "samplerCube" || i.type === "sampler2DArray") && i.size === 1 && !i.isArray && (t == null || t.castToBaseTexture !== undefined),
  code: i => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${i}"], t);

            if(ud["${i}"].value !== t)
            {
                ud["${i}"].value = t;
                gl.uniform1i(ud["${i}"].location, t);
; // eslint-disable-line max-len
            }`
}, {
  test: (i, t) => i.type === "mat3" && i.size === 1 && !i.isArray && t.a !== undefined,
  code: i => `
            gl.uniformMatrix3fv(ud["${i}"].location, false, uv["${i}"].toArray(true));
            `,
  codeUbo: i => `
                var ${i}_matrix = uv.${i}.toArray(true);

                data[offset] = ${i}_matrix[0];
                data[offset+1] = ${i}_matrix[1];
                data[offset+2] = ${i}_matrix[2];
        
                data[offset + 4] = ${i}_matrix[3];
                data[offset + 5] = ${i}_matrix[4];
                data[offset + 6] = ${i}_matrix[5];
        
                data[offset + 8] = ${i}_matrix[6];
                data[offset + 9] = ${i}_matrix[7];
                data[offset + 10] = ${i}_matrix[8];
            `
}, {
  test: (i, t) => i.type === "vec2" && i.size === 1 && !i.isArray && t.x !== undefined,
  code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${i}"].location, v.x, v.y);
                }`,
  codeUbo: i => `
                v = uv.${i};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
}, {
  test: i => i.type === "vec2" && i.size === 1 && !i.isArray,
  code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${i}"].location, v[0], v[1]);
                }
            `
}, {
  test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.width !== undefined,
  code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${i}"].location, v.x, v.y, v.width, v.height)
                }`,
  codeUbo: i => `
                    v = uv.${i};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
}, {
  test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.red !== undefined,
  code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${i}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
  codeUbo: i => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `
}, {
  test: (i, t) => i.type === "vec3" && i.size === 1 && !i.isArray && t.red !== undefined,
  code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${i}"].location, v.red, v.green, v.blue)
                }`,
  codeUbo: i => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `
}, {
  test: i => i.type === "vec4" && i.size === 1 && !i.isArray,
  code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${i}"].location, v[0], v[1], v[2], v[3])
                }`
}];
const h0 = {
  float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
  vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
  vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
  vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
  int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
  uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
  uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
  uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
  bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
  bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
};
const l0 = {
  float: "gl.uniform1fv(location, v)",
  vec2: "gl.uniform2fv(location, v)",
  vec3: "gl.uniform3fv(location, v)",
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
};
function u0(i, t) {
  var r;
  const e = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const n in i.uniforms) {
    const s = t[n];
    if (!s) {
      if (((r = i.uniforms[n]) == null ? undefined : r.group) === true) {
        if (i.uniforms[n].ubo) {
          e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${n}, '${n}');
                    `);
        } else {
          e.push(`
                        renderer.shader.syncUniformGroup(uv.${n}, syncData);
                    `);
        }
      }
      continue;
    }
    const a = i.uniforms[n];
    let o = false;
    for (let l = 0; l < cn.length; l++) {
      if (cn[l].test(s, a)) {
        e.push(cn[l].code(n, a));
        o = true;
        break;
      }
    }
    if (!o) {
      const l = (s.size === 1 && !s.isArray ? h0 : l0)[s.type].replace("location", `ud["${n}"].location`);
      e.push(`
            cu = ud["${n}"];
            cv = cu.value;
            v = uv["${n}"];
            ${l};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", e.join(`
`));
}
const Ud = {};
let qi = Ud;
function c0() {
  if (qi === Ud || qi != null && qi.isContextLost()) {
    const i = st.ADAPTER.createCanvas();
    let t;
    if (st.PREFER_ENV >= Oi.WEBGL2) {
      t = i.getContext("webgl2", {});
    }
    if (!t) {
      t = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {});
      if (t) {
        t.getExtension("WEBGL_draw_buffers");
      } else {
        t = null;
      }
    }
    qi = t;
  }
  return qi;
}
let Ds;
function d0() {
  if (!Ds) {
    Ds = Ye.MEDIUM;
    const i = c0();
    if (i && i.getShaderPrecisionFormat) {
      const t = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT);
      if (t) {
        Ds = t.precision ? Ye.HIGH : Ye.MEDIUM;
      }
    }
  }
  return Ds;
}
function hc(i, t) {
  const e = i.getShaderSource(t).split(`
`).map((c, p) => `${p}: ${c}`);
  const r = i.getShaderInfoLog(t);
  const n = r.split(`
`);
  const s = {};
  const a = n.map(c => parseFloat(c.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(c => c && !s[c] ? (s[c] = true, true) : false);
  const o = [""];
  a.forEach(c => {
    e[c - 1] = `%c${e[c - 1]}%c`;
    o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const l = e.join(`
`);
  o[0] = l;
  console.error(r);
  console.groupCollapsed("click to view full shader code");
  console.warn(...o);
  console.groupEnd();
}
function f0(i, t, e, r) {
  if (!i.getProgramParameter(t, i.LINK_STATUS)) {
    if (!i.getShaderParameter(e, i.COMPILE_STATUS)) {
      hc(i, e);
    }
    if (!i.getShaderParameter(r, i.COMPILE_STATUS)) {
      hc(i, r);
    }
    console.error("PixiJS Error: Could not initialize shader.");
    if (i.getProgramInfoLog(t) !== "") {
      console.warn("PixiJS Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(t));
    }
  }
}
const p0 = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function Gd(i) {
  return p0[i];
}
let Bs = null;
const lc = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function Hd(i, t) {
  if (!Bs) {
    const e = Object.keys(lc);
    Bs = {};
    for (let r = 0; r < e.length; ++r) {
      const n = e[r];
      Bs[i[n]] = lc[n];
    }
  }
  return Bs[t];
}
function uc(i, t, e) {
  if (i.substring(0, 9) !== "precision") {
    let r = t;
    if (t === Ye.HIGH && e !== Ye.HIGH) {
      r = Ye.MEDIUM;
    }
    return `precision ${r} float;
${i}`;
  } else if (e !== Ye.HIGH && i.substring(0, 15) === "precision highp") {
    return i.replace("precision highp", "precision mediump");
  }
  return i;
}
let On;
function g0() {
  if (typeof On == "boolean") {
    return On;
  }
  try {
    On = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
      a: "b"
    }, "a", "b") === true;
  } catch {
    On = false;
  }
  return On;
}
let m0 = 0;
const Fs = {};
const kh = class tn {
  constructor(t, e, r = "pixi-shader", n = {}) {
    this.extra = {};
    this.id = m0++;
    this.vertexSrc = t || tn.defaultVertexSrc;
    this.fragmentSrc = e || tn.defaultFragmentSrc;
    this.vertexSrc = this.vertexSrc.trim();
    this.fragmentSrc = this.fragmentSrc.trim();
    this.extra = n;
    if (this.vertexSrc.substring(0, 8) !== "#version") {
      r = r.replace(/\s+/g, "-");
      if (Fs[r]) {
        Fs[r]++;
        r += `-${Fs[r]}`;
      } else {
        Fs[r] = 1;
      }
      this.vertexSrc = `#define SHADER_NAME ${r}
${this.vertexSrc}`;
      this.fragmentSrc = `#define SHADER_NAME ${r}
${this.fragmentSrc}`;
      this.vertexSrc = uc(this.vertexSrc, tn.defaultVertexPrecision, Ye.HIGH);
      this.fragmentSrc = uc(this.fragmentSrc, tn.defaultFragmentPrecision, d0());
    }
    this.glPrograms = {};
    this.syncUniforms = null;
  }
  static get defaultVertexSrc() {
    return o0;
  }
  static get defaultFragmentSrc() {
    return a0;
  }
  static from(t, e, r) {
    const n = t + e;
    let s = Ph[n];
    if (!s) {
      Ph[n] = s = new tn(t, e, r);
    }
    return s;
  }
};
kh.defaultVertexPrecision = Ye.HIGH;
kh.defaultFragmentPrecision = Pr.apple.device ? Ye.HIGH : Ye.MEDIUM;
let qr = kh;
let y0 = 0;
class cr {
  constructor(t, e, r) {
    this.group = true;
    this.syncUniforms = {};
    this.dirtyId = 0;
    this.id = y0++;
    this.static = !!e;
    this.ubo = !!r;
    if (t instanceof pe) {
      this.buffer = t;
      this.buffer.type = Mr.UNIFORM_BUFFER;
      this.autoManage = false;
      this.ubo = true;
    } else {
      this.uniforms = t;
      if (this.ubo) {
        this.buffer = new pe(new Float32Array(1));
        this.buffer.type = Mr.UNIFORM_BUFFER;
        this.autoManage = true;
      }
    }
  }
  update() {
    this.dirtyId++;
    if (!this.autoManage && this.buffer) {
      this.buffer.update();
    }
  }
  add(t, e, r) {
    if (!this.ubo) {
      this.uniforms[t] = new cr(e, r);
    } else {
      throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
    }
  }
  static from(t, e, r) {
    return new cr(t, e, r);
  }
  static uboFrom(t, e) {
    return new cr(t, e ?? true, true);
  }
}
class Dr {
  constructor(t, e) {
    this.uniformBindCount = 0;
    this.program = t;
    if (e) {
      if (e instanceof cr) {
        this.uniformGroup = e;
      } else {
        this.uniformGroup = new cr(e);
      }
    } else {
      this.uniformGroup = new cr({});
    }
    this.disposeRunner = new ur("disposeShader");
  }
  checkUniformExists(t, e) {
    if (e.uniforms[t]) {
      return true;
    }
    for (const r in e.uniforms) {
      const n = e.uniforms[r];
      if (n.group === true && this.checkUniformExists(t, n)) {
        return true;
      }
    }
    return false;
  }
  destroy() {
    this.uniformGroup = null;
    this.disposeRunner.emit(this);
    this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(t, e, r) {
    const n = qr.from(t, e);
    return new Dr(n, r);
  }
}
class v0 {
  constructor(t, e) {
    this.vertexSrc = t;
    this.fragTemplate = e;
    this.programCache = {};
    this.defaultGroupCache = {};
    if (!e.includes("%count%")) {
      throw new Error("Fragment template must contain \"%count%\".");
    }
    if (!e.includes("%forloop%")) {
      throw new Error("Fragment template must contain \"%forloop%\".");
    }
  }
  generateShader(t) {
    if (!this.programCache[t]) {
      const r = new Int32Array(t);
      for (let s = 0; s < t; s++) {
        r[s] = s;
      }
      this.defaultGroupCache[t] = cr.from({
        uSamplers: r
      }, true);
      let n = this.fragTemplate;
      n = n.replace(/%count%/gi, `${t}`);
      n = n.replace(/%forloop%/gi, this.generateSampleSrc(t));
      this.programCache[t] = new qr(this.vertexSrc, n);
    }
    const e = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new jt(),
      default: this.defaultGroupCache[t]
    };
    return new Dr(this.programCache[t], e);
  }
  generateSampleSrc(t) {
    let e = "";
    e += `
`;
    e += `
`;
    for (let r = 0; r < t; r++) {
      if (r > 0) {
        e += `
else `;
      }
      if (r < t - 1) {
        e += `if(vTextureId < ${r}.5)`;
      }
      e += `
{`;
      e += `
	color = texture2D(uSamplers[${r}], vTextureCoord);`;
      e += `
}`;
    }
    e += `
`;
    e += `
`;
    return e;
  }
}
class Uh {
  constructor() {
    this.elements = [];
    this.ids = [];
    this.count = 0;
  }
  clear() {
    for (let t = 0; t < this.count; t++) {
      this.elements[t] = null;
    }
    this.count = 0;
  }
}
function _0() {
  return !Pr.apple.device;
}
function x0(i) {
  let t = true;
  const e = st.ADAPTER.getNavigator();
  if (Pr.tablet || Pr.phone) {
    if (Pr.apple.device) {
      const r = e.userAgent.match(/OS (\d+)_(\d+)?/);
      if (r && parseInt(r[1], 10) < 11) {
        t = false;
      }
    }
    if (Pr.android.device) {
      const r = e.userAgent.match(/Android\s([0-9.]*)/);
      if (r && parseInt(r[1], 10) < 7) {
        t = false;
      }
    }
  }
  if (t) {
    return i;
  } else {
    return 4;
  }
}
class Va {
  constructor(t) {
    this.renderer = t;
  }
  flush() {}
  destroy() {
    this.renderer = null;
  }
  start() {}
  stop() {
    this.flush();
  }
  render(t) {}
}
var b0 = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`;
var T0 = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const $n = class nr extends Va {
  constructor(t) {
    super(t);
    this.setShaderGenerator();
    this.geometryClass = Nd;
    this.vertexSize = 6;
    this.state = Nr.for2d();
    this.size = nr.defaultBatchSize * 4;
    this._vertexCount = 0;
    this._indexCount = 0;
    this._bufferedElements = [];
    this._bufferedTextures = [];
    this._bufferSize = 0;
    this._shader = null;
    this._packedGeometries = [];
    this._packedGeometryPoolSize = 2;
    this._flushId = 0;
    this._aBuffers = {};
    this._iBuffers = {};
    this.maxTextures = 1;
    this.renderer.on("prerender", this.onPrerender, this);
    t.runners.contextChange.add(this);
    this._dcIndex = 0;
    this._aIndex = 0;
    this._iIndex = 0;
    this._attributeBuffer = null;
    this._indexBuffer = null;
    this._tempBoundTextures = [];
  }
  static get defaultMaxTextures() {
    this._defaultMaxTextures = this._defaultMaxTextures ?? x0(32);
    return this._defaultMaxTextures;
  }
  static set defaultMaxTextures(t) {
    this._defaultMaxTextures = t;
  }
  static get canUploadSameBuffer() {
    this._canUploadSameBuffer = this._canUploadSameBuffer ?? _0();
    return this._canUploadSameBuffer;
  }
  static set canUploadSameBuffer(t) {
    this._canUploadSameBuffer = t;
  }
  get MAX_TEXTURES() {
    vt("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures");
    return this.maxTextures;
  }
  static get defaultVertexSrc() {
    return T0;
  }
  static get defaultFragmentTemplate() {
    return b0;
  }
  setShaderGenerator({
    vertex: t = nr.defaultVertexSrc,
    fragment: e = nr.defaultFragmentTemplate
  } = {}) {
    this.shaderGenerator = new v0(t, e);
  }
  contextChange() {
    const t = this.renderer.gl;
    if (st.PREFER_ENV === Oi.WEBGL_LEGACY) {
      this.maxTextures = 1;
    } else {
      this.maxTextures = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), nr.defaultMaxTextures);
      this.maxTextures = Kv(this.maxTextures, t);
    }
    this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let e = 0; e < this._packedGeometryPoolSize; e++) {
      this._packedGeometries[e] = new this.geometryClass();
    }
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const {
      _drawCallPool: t,
      _textureArrayPool: e
    } = nr;
    const r = this.size / 4;
    const n = Math.floor(r / this.maxTextures) + 1;
    while (t.length < r) {
      t.push(new Oh());
    }
    while (e.length < n) {
      e.push(new Uh());
    }
    for (let s = 0; s < this.maxTextures; s++) {
      this._tempBoundTextures[s] = null;
    }
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(t) {
    if (t._texture.valid) {
      if (this._vertexCount + t.vertexData.length / 2 > this.size) {
        this.flush();
      }
      this._vertexCount += t.vertexData.length / 2;
      this._indexCount += t.indices.length;
      this._bufferedTextures[this._bufferSize] = t._texture.baseTexture;
      this._bufferedElements[this._bufferSize++] = t;
    }
  }
  buildTexturesAndDrawCalls() {
    const {
      _bufferedTextures: t,
      maxTextures: e
    } = this;
    const r = nr._textureArrayPool;
    const n = this.renderer.batch;
    const s = this._tempBoundTextures;
    const a = this.renderer.textureGC.count;
    let o = ++Tt._globalBatch;
    let l = 0;
    let c = r[0];
    let p = 0;
    n.copyBoundTextures(s, e);
    for (let g = 0; g < this._bufferSize; ++g) {
      const f = t[g];
      t[g] = null;
      if (f._batchEnabled !== o) {
        if (c.count >= e) {
          n.boundArray(c, s, o, e);
          this.buildDrawCalls(c, p, g);
          p = g;
          c = r[++l];
          ++o;
        }
        f._batchEnabled = o;
        f.touched = a;
        c.elements[c.count++] = f;
      }
    }
    if (c.count > 0) {
      n.boundArray(c, s, o, e);
      this.buildDrawCalls(c, p, this._bufferSize);
      ++l;
      ++o;
    }
    for (let g = 0; g < s.length; g++) {
      s[g] = null;
    }
    Tt._globalBatch = o;
  }
  buildDrawCalls(t, e, r) {
    const {
      _bufferedElements: n,
      _attributeBuffer: s,
      _indexBuffer: a,
      vertexSize: o
    } = this;
    const l = nr._drawCallPool;
    let c = this._dcIndex;
    let p = this._aIndex;
    let g = this._iIndex;
    let f = l[c];
    f.start = this._iIndex;
    f.texArray = t;
    for (let v = e; v < r; ++v) {
      const _ = n[v];
      const T = _._texture.baseTexture;
      const A = _l[T.alphaMode ? 1 : 0][_.blendMode];
      n[v] = null;
      if (e < v && f.blend !== A) {
        f.size = g - f.start;
        e = v;
        f = l[++c];
        f.texArray = t;
        f.start = g;
      }
      this.packInterleavedGeometry(_, s, a, p, g);
      p += _.vertexData.length / 2 * o;
      g += _.indices.length;
      f.blend = A;
    }
    if (e < r) {
      f.size = g - f.start;
      ++c;
    }
    this._dcIndex = c;
    this._aIndex = p;
    this._iIndex = g;
  }
  bindAndClearTexArray(t) {
    const e = this.renderer.texture;
    for (let r = 0; r < t.count; r++) {
      e.bind(t.elements[r], t.ids[r]);
      t.elements[r] = null;
    }
    t.count = 0;
  }
  updateGeometry() {
    const {
      _packedGeometries: t,
      _attributeBuffer: e,
      _indexBuffer: r
    } = this;
    if (nr.canUploadSameBuffer) {
      t[this._flushId]._buffer.update(e.rawBinaryData);
      t[this._flushId]._indexBuffer.update(r);
      this.renderer.geometry.updateBuffers();
    } else {
      if (this._packedGeometryPoolSize <= this._flushId) {
        this._packedGeometryPoolSize++;
        t[this._flushId] = new this.geometryClass();
      }
      t[this._flushId]._buffer.update(e.rawBinaryData);
      t[this._flushId]._indexBuffer.update(r);
      this.renderer.geometry.bind(t[this._flushId]);
      this.renderer.geometry.updateBuffers();
      this._flushId++;
    }
  }
  drawBatches() {
    const t = this._dcIndex;
    const {
      gl: e,
      state: r
    } = this.renderer;
    const n = nr._drawCallPool;
    let s = null;
    for (let a = 0; a < t; a++) {
      const {
        texArray: o,
        type: l,
        size: c,
        start: p,
        blend: g
      } = n[a];
      if (s !== o) {
        s = o;
        this.bindAndClearTexArray(o);
      }
      this.state.blendMode = g;
      r.set(this.state);
      e.drawElements(l, c, e.UNSIGNED_SHORT, p * 2);
    }
  }
  flush() {
    if (this._vertexCount !== 0) {
      this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
      this._indexBuffer = this.getIndexBuffer(this._indexCount);
      this._aIndex = 0;
      this._iIndex = 0;
      this._dcIndex = 0;
      this.buildTexturesAndDrawCalls();
      this.updateGeometry();
      this.drawBatches();
      this._bufferSize = 0;
      this._vertexCount = 0;
      this._indexCount = 0;
    }
  }
  start() {
    this.renderer.state.set(this.state);
    this.renderer.texture.ensureSamplerType(this.maxTextures);
    this.renderer.shader.bind(this._shader);
    if (nr.canUploadSameBuffer) {
      this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
    }
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let t = 0; t < this._packedGeometryPoolSize; t++) {
      if (this._packedGeometries[t]) {
        this._packedGeometries[t].destroy();
      }
    }
    this.renderer.off("prerender", this.onPrerender, this);
    this._aBuffers = null;
    this._iBuffers = null;
    this._packedGeometries = null;
    this._attributeBuffer = null;
    this._indexBuffer = null;
    if (this._shader) {
      this._shader.destroy();
      this._shader = null;
    }
    super.destroy();
  }
  getAttributeBuffer(t) {
    const e = is(Math.ceil(t / 8));
    const r = Ch(e);
    const n = e * 8;
    if (this._aBuffers.length <= r) {
      this._iBuffers.length = r + 1;
    }
    let s = this._aBuffers[n];
    if (!s) {
      this._aBuffers[n] = s = new Dh(n * this.vertexSize * 4);
    }
    return s;
  }
  getIndexBuffer(t) {
    const e = is(Math.ceil(t / 12));
    const r = Ch(e);
    const n = e * 12;
    if (this._iBuffers.length <= r) {
      this._iBuffers.length = r + 1;
    }
    let s = this._iBuffers[r];
    if (!s) {
      this._iBuffers[r] = s = new Uint16Array(n);
    }
    return s;
  }
  packInterleavedGeometry(t, e, r, n, s) {
    const {
      uint32View: a,
      float32View: o
    } = e;
    const l = n / this.vertexSize;
    const c = t.uvs;
    const p = t.indices;
    const g = t.vertexData;
    const f = t._texture.baseTexture._batchLocation;
    const v = Math.min(t.worldAlpha, 1);
    const _ = Pt.shared.setValue(t._tintRGB).toPremultiplied(v, t._texture.baseTexture.alphaMode > 0);
    for (let T = 0; T < g.length; T += 2) {
      o[n++] = g[T];
      o[n++] = g[T + 1];
      o[n++] = c[T];
      o[n++] = c[T + 1];
      a[n++] = _;
      o[n++] = f;
    }
    for (let T = 0; T < p.length; T++) {
      r[s++] = l + p[T];
    }
  }
};
$n.defaultBatchSize = 4096;
$n.extension = {
  name: "batch",
  type: rt.RendererPlugin
};
$n._drawCallPool = [];
$n._textureArrayPool = [];
let Ai = $n;
ot.add(Ai);
var w0 = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`;
var E0 = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Gh = class Vn extends Dr {
  constructor(t, e, r) {
    const n = qr.from(t || Vn.defaultVertexSrc, e || Vn.defaultFragmentSrc);
    super(n, r);
    this.padding = 0;
    this.resolution = Vn.defaultResolution;
    this.multisample = Vn.defaultMultisample;
    this.enabled = true;
    this.autoFit = true;
    this.state = new Nr();
  }
  apply(t, e, r, n, s) {
    t.applyFilter(this, e, r, n);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._resolution = t;
  }
  static get defaultVertexSrc() {
    return E0;
  }
  static get defaultFragmentSrc() {
    return w0;
  }
};
Gh.defaultResolution = 1;
Gh.defaultMultisample = he.NONE;
let De = Gh;
class ga {
  constructor() {
    this.clearBeforeRender = true;
    this._backgroundColor = new Pt(0);
    this.alpha = 1;
  }
  init(t) {
    this.clearBeforeRender = t.clearBeforeRender;
    const {
      backgroundColor: e,
      background: r,
      backgroundAlpha: n
    } = t;
    const s = r ?? e;
    if (s !== undefined) {
      this.color = s;
    }
    this.alpha = n;
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(t) {
    this._backgroundColor.setValue(t);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(t) {
    this._backgroundColor.setAlpha(t);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {}
}
ga.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: true
};
ga.extension = {
  type: [rt.RendererSystem, rt.CanvasRendererSystem],
  name: "background"
};
ot.add(ga);
class $d {
  constructor(t) {
    this.renderer = t;
    this.emptyRenderer = new Va(t);
    this.currentRenderer = this.emptyRenderer;
  }
  setObjectRenderer(t) {
    if (this.currentRenderer !== t) {
      this.currentRenderer.stop();
      this.currentRenderer = t;
      this.currentRenderer.start();
    }
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(t, e) {
    const {
      boundTextures: r
    } = this.renderer.texture;
    for (let n = e - 1; n >= 0; --n) {
      t[n] = r[n] || null;
      if (t[n]) {
        t[n]._batchLocation = n;
      }
    }
  }
  boundArray(t, e, r, n) {
    const {
      elements: s,
      ids: a,
      count: o
    } = t;
    let l = 0;
    for (let c = 0; c < o; c++) {
      const p = s[c];
      const g = p._batchLocation;
      if (g >= 0 && g < n && e[g] === p) {
        a[c] = g;
        continue;
      }
      while (l < n) {
        const f = e[l];
        if (f && f._batchEnabled === r && f._batchLocation === l) {
          l++;
          continue;
        }
        a[c] = l;
        p._batchLocation = l;
        e[l] = p;
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
$d.extension = {
  type: rt.RendererSystem,
  name: "batch"
};
ot.add($d);
let cc = 0;
class ma {
  constructor(t) {
    this.renderer = t;
    this.webGLVersion = 1;
    this.extensions = {};
    this.supports = {
      uint32Indices: false
    };
    this.handleContextLost = this.handleContextLost.bind(this);
    this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(t) {
    this.gl = t;
    this.renderer.gl = t;
    this.renderer.CONTEXT_UID = cc++;
  }
  init(t) {
    if (t.context) {
      this.initFromContext(t.context);
    } else {
      const e = this.renderer.background.alpha < 1;
      const r = t.premultipliedAlpha;
      this.preserveDrawingBuffer = t.preserveDrawingBuffer;
      this.useContextAlpha = t.useContextAlpha;
      this.powerPreference = t.powerPreference;
      this.initFromOptions({
        alpha: e,
        premultipliedAlpha: r,
        antialias: t.antialias,
        stencil: true,
        preserveDrawingBuffer: t.preserveDrawingBuffer,
        powerPreference: t.powerPreference
      });
    }
  }
  initFromContext(t) {
    this.gl = t;
    this.validateContext(t);
    this.renderer.gl = t;
    this.renderer.CONTEXT_UID = cc++;
    this.renderer.runners.contextChange.emit(t);
    const e = this.renderer.view;
    if (e.addEventListener !== undefined) {
      e.addEventListener("webglcontextlost", this.handleContextLost, false);
      e.addEventListener("webglcontextrestored", this.handleContextRestored, false);
    }
  }
  initFromOptions(t) {
    const e = this.createContext(this.renderer.view, t);
    this.initFromContext(e);
  }
  createContext(t, e) {
    let r;
    if (st.PREFER_ENV >= Oi.WEBGL2) {
      r = t.getContext("webgl2", e);
    }
    if (r) {
      this.webGLVersion = 2;
    } else {
      this.webGLVersion = 1;
      r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
      if (!r) {
        throw new Error("This browser does not support WebGL. Try using the canvas renderer");
      }
    }
    this.gl = r;
    this.getExtensions();
    return this.gl;
  }
  getExtensions() {
    const {
      gl: t
    } = this;
    const e = {
      loseContext: t.getExtension("WEBGL_lose_context"),
      anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      etc: t.getExtension("WEBGL_compressed_texture_etc"),
      etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: t.getExtension("WEBGL_compressed_texture_atc"),
      astc: t.getExtension("WEBGL_compressed_texture_astc"),
      bptc: t.getExtension("EXT_texture_compression_bptc")
    };
    if (this.webGLVersion === 1) {
      Object.assign(this.extensions, e, {
        drawBuffers: t.getExtension("WEBGL_draw_buffers"),
        depthTexture: t.getExtension("WEBGL_depth_texture"),
        vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
        uint32ElementIndex: t.getExtension("OES_element_index_uint"),
        floatTexture: t.getExtension("OES_texture_float"),
        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
        textureHalfFloat: t.getExtension("OES_texture_half_float"),
        textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
      });
    } else if (this.webGLVersion === 2) {
      Object.assign(this.extensions, e, {
        colorBufferFloat: t.getExtension("EXT_color_buffer_float")
      });
    }
  }
  handleContextLost(t) {
    t.preventDefault();
    setTimeout(() => {
      if (this.gl.isContextLost() && this.extensions.loseContext) {
        this.extensions.loseContext.restoreContext();
      }
    }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const t = this.renderer.view;
    this.renderer = null;
    if (t.removeEventListener !== undefined) {
      t.removeEventListener("webglcontextlost", this.handleContextLost);
      t.removeEventListener("webglcontextrestored", this.handleContextRestored);
    }
    this.gl.useProgram(null);
    if (this.extensions.loseContext) {
      this.extensions.loseContext.loseContext();
    }
  }
  postrender() {
    if (this.renderer.objectRenderer.renderingToScreen) {
      this.gl.flush();
    }
  }
  validateContext(t) {
    const e = t.getContextAttributes();
    const r = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
    if (r) {
      this.webGLVersion = 2;
    }
    if (e && !e.stencil) {
      console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    }
    const n = r || !!t.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = n;
    if (!n) {
      console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
    }
  }
}
ma.defaultOptions = {
  context: null,
  antialias: false,
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  powerPreference: "default"
};
ma.extension = {
  type: rt.RendererSystem,
  name: "context"
};
ot.add(ma);
class Hh {
  constructor(t, e) {
    this.width = Math.round(t);
    this.height = Math.round(e);
    if (!this.width || !this.height) {
      throw new Error("Framebuffer width or height is zero");
    }
    this.stencil = false;
    this.depth = false;
    this.dirtyId = 0;
    this.dirtyFormat = 0;
    this.dirtySize = 0;
    this.depthTexture = null;
    this.colorTextures = [];
    this.glFramebuffers = {};
    this.disposeRunner = new ur("disposeFramebuffer");
    this.multisample = he.NONE;
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(t = 0, e) {
    this.colorTextures[t] = e || new Tt(null, {
      scaleMode: hr.NEAREST,
      resolution: 1,
      mipmap: Br.OFF,
      width: this.width,
      height: this.height
    });
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  addDepthTexture(t) {
    this.depthTexture = t || new Tt(null, {
      scaleMode: hr.NEAREST,
      resolution: 1,
      width: this.width,
      height: this.height,
      mipmap: Br.OFF,
      format: Z.DEPTH_COMPONENT,
      type: mt.UNSIGNED_SHORT
    });
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  enableDepth() {
    this.depth = true;
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  enableStencil() {
    this.stencil = true;
    this.dirtyId++;
    this.dirtyFormat++;
    return this;
  }
  resize(t, e) {
    t = Math.round(t);
    e = Math.round(e);
    if (!t || !e) {
      throw new Error("Framebuffer width and height must not be zero");
    }
    if (t !== this.width || e !== this.height) {
      this.width = t;
      this.height = e;
      this.dirtyId++;
      this.dirtySize++;
      for (let r = 0; r < this.colorTextures.length; r++) {
        const n = this.colorTextures[r];
        const s = n.resolution;
        n.setSize(t / s, e / s);
      }
      if (this.depthTexture) {
        const r = this.depthTexture.resolution;
        this.depthTexture.setSize(t / r, e / r);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroyDepthTexture() {
    if (this.depthTexture) {
      this.depthTexture.destroy();
      this.depthTexture = null;
      ++this.dirtyId;
      ++this.dirtyFormat;
    }
  }
}
class bl extends Tt {
  constructor(t = {}) {
    if (typeof t == "number") {
      const e = arguments[0];
      const r = arguments[1];
      const n = arguments[2];
      const s = arguments[3];
      t = {
        width: e,
        height: r,
        scaleMode: n,
        resolution: s
      };
    }
    t.width = t.width ?? 100;
    t.height = t.height ?? 100;
    t.multisample ??= he.NONE;
    super(null, t);
    this.mipmap = Br.OFF;
    this.valid = true;
    this._clear = new Pt([0, 0, 0, 0]);
    this.framebuffer = new Hh(this.realWidth, this.realHeight).addColorTexture(0, this);
    this.framebuffer.multisample = t.multisample;
    this.maskStack = [];
    this.filterStack = [{}];
  }
  set clearColor(t) {
    this._clear.setValue(t);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, e) {
    this.framebuffer.resize(t * this.resolution, e * this.resolution);
    this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose();
    super.dispose();
  }
  destroy() {
    super.destroy();
    this.framebuffer.destroyDepthTexture();
    this.framebuffer = null;
  }
}
class Kr extends ns {
  constructor(t) {
    const e = t;
    const r = e.naturalWidth || e.videoWidth || e.displayWidth || e.width;
    const n = e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
    super(r, n);
    this.source = t;
    this.noSubImage = false;
  }
  static crossOrigin(t, e, r) {
    if (r === undefined && !e.startsWith("data:")) {
      t.crossOrigin = Bd(e);
    } else if (r !== false) {
      t.crossOrigin = typeof r == "string" ? r : "anonymous";
    }
  }
  upload(t, e, r, n) {
    const s = t.gl;
    const a = e.realWidth;
    const o = e.realHeight;
    n = n || this.source;
    if (typeof HTMLImageElement !== "undefined" && n instanceof HTMLImageElement) {
      if (!n.complete || n.naturalWidth === 0) {
        return false;
      }
    } else if (typeof HTMLVideoElement !== "undefined" && n instanceof HTMLVideoElement && n.readyState <= 1) {
      return false;
    }
    s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ke.UNPACK);
    if (!this.noSubImage && e.target === s.TEXTURE_2D && r.width === a && r.height === o) {
      s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, e.format, r.type, n);
    } else {
      r.width = a;
      r.height = o;
      s.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, n);
    }
    return true;
  }
  update() {
    if (this.destroyed) {
      return;
    }
    const t = this.source;
    const e = t.naturalWidth || t.videoWidth || t.width;
    const r = t.naturalHeight || t.videoHeight || t.height;
    this.resize(e, r);
    super.update();
  }
  dispose() {
    this.source = null;
  }
}
class Vd extends Kr {
  constructor(t, e) {
    e = e || {};
    if (typeof t == "string") {
      const r = new Image();
      Kr.crossOrigin(r, t, e.crossorigin);
      r.src = t;
      t = r;
    }
    super(t);
    if (!t.complete && this._width && this._height) {
      this._width = 0;
      this._height = 0;
    }
    this.url = t.src;
    this._process = null;
    this.preserveBitmap = false;
    this.createBitmap = (e.createBitmap ?? st.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap;
    this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null;
    this.bitmap = null;
    this._load = null;
    if (e.autoLoad !== false) {
      this.load();
    }
  }
  load(t) {
    if (this._load) {
      return this._load;
    } else {
      if (t !== undefined) {
        this.createBitmap = t;
      }
      this._load = new Promise((e, r) => {
        const n = this.source;
        this.url = n.src;
        const s = () => {
          if (!this.destroyed) {
            n.onload = null;
            n.onerror = null;
            this.update();
            this._load = null;
            if (this.createBitmap) {
              e(this.process());
            } else {
              e(this);
            }
          }
        };
        if (n.complete && n.src) {
          s();
        } else {
          n.onload = s;
          n.onerror = a => {
            r(a);
            this.onError.emit(a);
          };
        }
      });
      return this._load;
    }
  }
  process() {
    const t = this.source;
    if (this._process !== null) {
      return this._process;
    }
    if (this.bitmap !== null || !globalThis.createImageBitmap) {
      return Promise.resolve(this);
    }
    const e = globalThis.createImageBitmap;
    const r = !t.crossOrigin || t.crossOrigin === "anonymous";
    this._process = fetch(t.src, {
      mode: r ? "cors" : "no-cors"
    }).then(n => n.blob()).then(n => e(n, 0, 0, t.width, t.height, {
      premultiplyAlpha: this.alphaMode === null || this.alphaMode === ke.UNPACK ? "premultiply" : "none"
    })).then(n => this.destroyed ? Promise.reject() : (this.bitmap = n, this.update(), this._process = null, Promise.resolve(this)));
    return this._process;
  }
  upload(t, e, r) {
    if (typeof this.alphaMode == "number") {
      e.alphaMode = this.alphaMode;
    }
    if (!this.createBitmap) {
      return super.upload(t, e, r);
    }
    if (!this.bitmap && (this.process(), !this.bitmap)) {
      return false;
    }
    super.upload(t, e, r, this.bitmap);
    if (!this.preserveBitmap) {
      let n = true;
      const s = e._glTextures;
      for (const a in s) {
        const o = s[a];
        if (o !== r && o.dirtyId !== e.dirtyId) {
          n = false;
          break;
        }
      }
      if (n) {
        if (this.bitmap.close) {
          this.bitmap.close();
        }
        this.bitmap = null;
      }
    }
    return true;
  }
  dispose() {
    this.source.onload = null;
    this.source.onerror = null;
    super.dispose();
    if (this.bitmap) {
      this.bitmap.close();
      this.bitmap = null;
    }
    this._process = null;
    this._load = null;
  }
  static test(t) {
    return typeof HTMLImageElement !== "undefined" && (typeof t == "string" || t instanceof HTMLImageElement);
  }
}
class Tl {
  constructor() {
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 1;
    this.y1 = 0;
    this.x2 = 1;
    this.y2 = 1;
    this.x3 = 0;
    this.y3 = 1;
    this.uvsFloat32 = new Float32Array(8);
  }
  set(t, e, r) {
    const n = e.width;
    const s = e.height;
    if (r) {
      const a = t.width / 2 / n;
      const o = t.height / 2 / s;
      const l = t.x / n + a;
      const c = t.y / s + o;
      r = ee.add(r, ee.NW);
      this.x0 = l + a * ee.uX(r);
      this.y0 = c + o * ee.uY(r);
      r = ee.add(r, 2);
      this.x1 = l + a * ee.uX(r);
      this.y1 = c + o * ee.uY(r);
      r = ee.add(r, 2);
      this.x2 = l + a * ee.uX(r);
      this.y2 = c + o * ee.uY(r);
      r = ee.add(r, 2);
      this.x3 = l + a * ee.uX(r);
      this.y3 = c + o * ee.uY(r);
    } else {
      this.x0 = t.x / n;
      this.y0 = t.y / s;
      this.x1 = (t.x + t.width) / n;
      this.y1 = t.y / s;
      this.x2 = (t.x + t.width) / n;
      this.y2 = (t.y + t.height) / s;
      this.x3 = t.x / n;
      this.y3 = (t.y + t.height) / s;
    }
    this.uvsFloat32[0] = this.x0;
    this.uvsFloat32[1] = this.y0;
    this.uvsFloat32[2] = this.x1;
    this.uvsFloat32[3] = this.y1;
    this.uvsFloat32[4] = this.x2;
    this.uvsFloat32[5] = this.y2;
    this.uvsFloat32[6] = this.x3;
    this.uvsFloat32[7] = this.y3;
  }
}
Tl.prototype.toString = function () {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const dc = new Tl();
function Os(i) {
  i.destroy = function () {};
  i.on = function () {};
  i.once = function () {};
  i.emit = function () {};
}
class ut extends xn {
  constructor(t, e, r, n, s, a, o) {
    super();
    this.noFrame = false;
    if (!e) {
      this.noFrame = true;
      e = new At(0, 0, 1, 1);
    }
    if (t instanceof ut) {
      t = t.baseTexture;
    }
    this.baseTexture = t;
    this._frame = e;
    this.trim = n;
    this.valid = false;
    this.destroyed = false;
    this._uvs = dc;
    this.uvMatrix = null;
    this.orig = r || e;
    this._rotate = Number(s || 0);
    if (s === true) {
      this._rotate = 2;
    } else if (this._rotate % 2 !== 0) {
      throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    }
    this.defaultAnchor = a ? new Bt(a.x, a.y) : new Bt(0, 0);
    this.defaultBorders = o;
    this._updateID = 0;
    this.textureCacheIds = [];
    if (t.valid) {
      if (this.noFrame) {
        if (t.valid) {
          this.onBaseTextureUpdated(t);
        }
      } else {
        this.frame = e;
      }
    } else {
      t.once("loaded", this.onBaseTextureUpdated, this);
    }
    if (this.noFrame) {
      t.on("update", this.onBaseTextureUpdated, this);
    }
  }
  update() {
    if (this.baseTexture.resource) {
      this.baseTexture.resource.update();
    }
  }
  onBaseTextureUpdated(t) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) {
        return;
      }
      this._frame.width = t.width;
      this._frame.height = t.height;
      this.valid = true;
      this.updateUvs();
    } else {
      this.frame = this._frame;
    }
    this.emit("update", this);
  }
  destroy(t) {
    if (this.baseTexture) {
      if (t) {
        const {
          resource: e
        } = this.baseTexture;
        if (e != null && e.url && Me[e.url]) {
          ut.removeFromCache(e.url);
        }
        this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this);
      this.baseTexture.off("update", this.onBaseTextureUpdated, this);
      this.baseTexture = null;
    }
    this._frame = null;
    this._uvs = null;
    this.trim = null;
    this.orig = null;
    this.valid = false;
    ut.removeFromCache(this);
    this.textureCacheIds = null;
    this.destroyed = true;
    this.emit("destroyed", this);
    this.removeAllListeners();
  }
  clone() {
    var n;
    const t = this._frame.clone();
    const e = this._frame === this.orig ? t : this.orig.clone();
    const r = new ut(this.baseTexture, !this.noFrame && t, e, (n = this.trim) == null ? undefined : n.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
    if (this.noFrame) {
      r._frame = t;
    }
    return r;
  }
  updateUvs() {
    if (this._uvs === dc) {
      this._uvs = new Tl();
    }
    this._uvs.set(this._frame, this.baseTexture, this.rotate);
    this._updateID++;
  }
  static from(t, e = {}, r = st.STRICT_TEXTURE_CACHE) {
    const n = typeof t == "string";
    let s = null;
    if (n) {
      s = t;
    } else if (t instanceof Tt) {
      if (!t.cacheId) {
        const o = (e == null ? undefined : e.pixiIdPrefix) || "pixiid";
        t.cacheId = `${o}-${hi()}`;
        Tt.addToCache(t, t.cacheId);
      }
      s = t.cacheId;
    } else {
      if (!t._pixiId) {
        const o = (e == null ? undefined : e.pixiIdPrefix) || "pixiid";
        t._pixiId = `${o}_${hi()}`;
      }
      s = t._pixiId;
    }
    let a = Me[s];
    if (n && r && !a) {
      throw new Error(`The cacheId "${s}" does not exist in TextureCache.`);
    }
    if (!a && !(t instanceof Tt)) {
      e.resolution ||= Fr(t);
      a = new ut(new Tt(t, e));
      a.baseTexture.cacheId = s;
      Tt.addToCache(a.baseTexture, s);
      ut.addToCache(a, s);
    } else if (!a && t instanceof Tt) {
      a = new ut(t);
      ut.addToCache(a, s);
    }
    return a;
  }
  static fromURL(t, e) {
    const r = Object.assign({
      autoLoad: false
    }, e == null ? undefined : e.resourceOptions);
    const n = ut.from(t, Object.assign({
      resourceOptions: r
    }, e), false);
    const s = n.baseTexture.resource;
    if (n.baseTexture.valid) {
      return Promise.resolve(n);
    } else {
      return s.load().then(() => Promise.resolve(n));
    }
  }
  static fromBuffer(t, e, r, n) {
    return new ut(Tt.fromBuffer(t, e, r, n));
  }
  static fromLoader(t, e, r, n) {
    const s = new Tt(t, Object.assign({
      scaleMode: Tt.defaultOptions.scaleMode,
      resolution: Fr(e)
    }, n));
    const {
      resource: a
    } = s;
    if (a instanceof Vd) {
      a.url = e;
    }
    const o = new ut(s);
    r ||= e;
    Tt.addToCache(o.baseTexture, r);
    ut.addToCache(o, r);
    if (r !== e) {
      Tt.addToCache(o.baseTexture, e);
      ut.addToCache(o, e);
    }
    if (o.baseTexture.valid) {
      return Promise.resolve(o);
    } else {
      return new Promise(l => {
        o.baseTexture.once("loaded", () => l(o));
      });
    }
  }
  static addToCache(t, e) {
    if (e) {
      if (!t.textureCacheIds.includes(e)) {
        t.textureCacheIds.push(e);
      }
      if (Me[e] && Me[e] !== t) {
        console.warn(`Texture added to the cache with an id [${e}] that already had an entry`);
      }
      Me[e] = t;
    }
  }
  static removeFromCache(t) {
    if (typeof t == "string") {
      const e = Me[t];
      if (e) {
        const r = e.textureCacheIds.indexOf(t);
        if (r > -1) {
          e.textureCacheIds.splice(r, 1);
        }
        delete Me[t];
        return e;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let e = 0; e < t.textureCacheIds.length; ++e) {
        if (Me[t.textureCacheIds[e]] === t) {
          delete Me[t.textureCacheIds[e]];
        }
      }
      t.textureCacheIds.length = 0;
      return t;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(t) {
    this._frame = t;
    this.noFrame = false;
    const {
      x: e,
      y: r,
      width: n,
      height: s
    } = t;
    const a = e + n > this.baseTexture.width;
    const o = r + s > this.baseTexture.height;
    if (a || o) {
      const l = a && o ? "and" : "or";
      const c = `X: ${e} + ${n} = ${e + n} > ${this.baseTexture.width}`;
      const p = `Y: ${r} + ${s} = ${r + s} > ${this.baseTexture.height}`;
      throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${c} ${l} ${p}`);
    }
    this.valid = n && s && this.baseTexture.valid;
    if (!this.trim && !this.rotate) {
      this.orig = t;
    }
    if (this.valid) {
      this.updateUvs();
    }
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(t) {
    this._rotate = t;
    if (this.valid) {
      this.updateUvs();
    }
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    if (!ut._EMPTY) {
      ut._EMPTY = new ut(new Tt());
      Os(ut._EMPTY);
      Os(ut._EMPTY.baseTexture);
    }
    return ut._EMPTY;
  }
  static get WHITE() {
    if (!ut._WHITE) {
      const t = st.ADAPTER.createCanvas(16, 16);
      const e = t.getContext("2d");
      t.width = 16;
      t.height = 16;
      e.fillStyle = "white";
      e.fillRect(0, 0, 16, 16);
      ut._WHITE = new ut(Tt.from(t));
      Os(ut._WHITE);
      Os(ut._WHITE.baseTexture);
    }
    return ut._WHITE;
  }
}
class Or extends ut {
  constructor(t, e) {
    super(t, e);
    this.valid = true;
    this.filterFrame = null;
    this.filterPoolKey = null;
    this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, e, r = true) {
    const n = this.baseTexture.resolution;
    const s = Math.round(t * n) / n;
    const a = Math.round(e * n) / n;
    this.valid = s > 0 && a > 0;
    this._frame.width = this.orig.width = s;
    this._frame.height = this.orig.height = a;
    if (r) {
      this.baseTexture.resize(s, a);
    }
    this.updateUvs();
  }
  setResolution(t) {
    const {
      baseTexture: e
    } = this;
    if (e.resolution !== t) {
      e.setResolution(t);
      this.resize(e.width, e.height, false);
    }
  }
  static create(t) {
    return new Or(new bl(t));
  }
}
class Wd {
  constructor(t) {
    this.texturePool = {};
    this.textureOptions = t || {};
    this.enableFullScreen = false;
    this._pixelsWidth = 0;
    this._pixelsHeight = 0;
  }
  createTexture(t, e, r = he.NONE) {
    const n = new bl(Object.assign({
      width: t,
      height: e,
      resolution: 1,
      multisample: r
    }, this.textureOptions));
    return new Or(n);
  }
  getOptimalTexture(t, e, r = 1, n = he.NONE) {
    let s;
    t = Math.max(Math.ceil(t * r - 0.000001), 1);
    e = Math.max(Math.ceil(e * r - 0.000001), 1);
    if (!this.enableFullScreen || t !== this._pixelsWidth || e !== this._pixelsHeight) {
      t = is(t);
      e = is(e);
      s = ((t & 65535) << 16 | e & 65535) >>> 0;
      if (n > 1) {
        s += n * 4294967296;
      }
    } else {
      s = n > 1 ? -n : -1;
    }
    this.texturePool[s] ||= [];
    let a = this.texturePool[s].pop();
    a ||= this.createTexture(t, e, n);
    a.filterPoolKey = s;
    a.setResolution(r);
    return a;
  }
  getFilterTexture(t, e, r) {
    const n = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || he.NONE);
    n.filterFrame = t.filterFrame;
    return n;
  }
  returnTexture(t) {
    const e = t.filterPoolKey;
    t.filterFrame = null;
    this.texturePool[e].push(t);
  }
  returnFilterTexture(t) {
    this.returnTexture(t);
  }
  clear(t) {
    t = t !== false;
    if (t) {
      for (const e in this.texturePool) {
        const r = this.texturePool[e];
        if (r) {
          for (let n = 0; n < r.length; n++) {
            r[n].destroy(true);
          }
        }
      }
    }
    this.texturePool = {};
  }
  setScreenSize(t) {
    if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
      this.enableFullScreen = t.width > 0 && t.height > 0;
      for (const e in this.texturePool) {
        if (!(Number(e) < 0)) {
          continue;
        }
        const r = this.texturePool[e];
        if (r) {
          for (let n = 0; n < r.length; n++) {
            r[n].destroy(true);
          }
        }
        this.texturePool[e] = [];
      }
      this._pixelsWidth = t.width;
      this._pixelsHeight = t.height;
    }
  }
}
Wd.SCREEN_KEY = -1;
class A0 extends li {
  constructor() {
    super();
    this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]);
  }
}
class jd extends li {
  constructor() {
    super();
    this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
    this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
    this.vertexBuffer = new pe(this.vertices);
    this.uvBuffer = new pe(this.uvs);
    this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(t, e) {
    let r = 0;
    let n = 0;
    this.uvs[0] = r;
    this.uvs[1] = n;
    this.uvs[2] = r + e.width / t.width;
    this.uvs[3] = n;
    this.uvs[4] = r + e.width / t.width;
    this.uvs[5] = n + e.height / t.height;
    this.uvs[6] = r;
    this.uvs[7] = n + e.height / t.height;
    r = e.x;
    n = e.y;
    this.vertices[0] = r;
    this.vertices[1] = n;
    this.vertices[2] = r + e.width;
    this.vertices[3] = n;
    this.vertices[4] = r + e.width;
    this.vertices[5] = n + e.height;
    this.vertices[6] = r;
    this.vertices[7] = n + e.height;
    this.invalidate();
    return this;
  }
  invalidate() {
    this.vertexBuffer._updateID++;
    this.uvBuffer._updateID++;
    return this;
  }
}
class S0 {
  constructor() {
    this.renderTexture = null;
    this.target = null;
    this.legacy = false;
    this.resolution = 1;
    this.multisample = he.NONE;
    this.sourceFrame = new At();
    this.destinationFrame = new At();
    this.bindingSourceFrame = new At();
    this.bindingDestinationFrame = new At();
    this.filters = [];
    this.transform = null;
  }
  clear() {
    this.target = null;
    this.filters = null;
    this.renderTexture = null;
  }
}
const Ns = [new Bt(), new Bt(), new Bt(), new Bt()];
const qo = new jt();
class Xd {
  constructor(t) {
    this.renderer = t;
    this.defaultFilterStack = [{}];
    this.texturePool = new Wd();
    this.statePool = [];
    this.quad = new A0();
    this.quadUv = new jd();
    this.tempRect = new At();
    this.activeState = {};
    this.globalUniforms = new cr({
      outputFrame: new At(),
      inputSize: new Float32Array(4),
      inputPixel: new Float32Array(4),
      inputClamp: new Float32Array(4),
      resolution: 1,
      filterArea: new Float32Array(4),
      filterClamp: new Float32Array(4)
    }, true);
    this.forceClear = false;
    this.useMaxPadding = false;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(t, e) {
    const r = this.renderer;
    const n = this.defaultFilterStack;
    const s = this.statePool.pop() || new S0();
    const a = r.renderTexture;
    let o;
    let l;
    if (a.current) {
      const A = a.current;
      o = A.resolution;
      l = A.multisample;
    } else {
      o = r.resolution;
      l = r.multisample;
    }
    let c = e[0].resolution || o;
    let p = e[0].multisample ?? l;
    let g = e[0].padding;
    let f = e[0].autoFit;
    let v = e[0].legacy ?? true;
    for (let A = 1; A < e.length; A++) {
      const E = e[A];
      c = Math.min(c, E.resolution || o);
      p = Math.min(p, E.multisample ?? l);
      g = this.useMaxPadding ? Math.max(g, E.padding) : g + E.padding;
      f = f && E.autoFit;
      v = v || (E.legacy ?? true);
    }
    if (n.length === 1) {
      this.defaultFilterStack[0].renderTexture = a.current;
    }
    n.push(s);
    s.resolution = c;
    s.multisample = p;
    s.legacy = v;
    s.target = t;
    s.sourceFrame.copyFrom(t.filterArea || t.getBounds(true));
    s.sourceFrame.pad(g);
    const _ = this.tempRect.copyFrom(a.sourceFrame);
    if (r.projection.transform) {
      this.transformAABB(qo.copyFrom(r.projection.transform).invert(), _);
    }
    if (f) {
      s.sourceFrame.fit(_);
      if (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) {
        s.sourceFrame.width = 0;
        s.sourceFrame.height = 0;
      }
    } else if (!s.sourceFrame.intersects(_)) {
      s.sourceFrame.width = 0;
      s.sourceFrame.height = 0;
    }
    this.roundFrame(s.sourceFrame, a.current ? a.current.resolution : r.resolution, a.sourceFrame, a.destinationFrame, r.projection.transform);
    s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, c, p);
    s.filters = e;
    s.destinationFrame.width = s.renderTexture.width;
    s.destinationFrame.height = s.renderTexture.height;
    const T = this.tempRect;
    T.x = 0;
    T.y = 0;
    T.width = s.sourceFrame.width;
    T.height = s.sourceFrame.height;
    s.renderTexture.filterFrame = s.sourceFrame;
    s.bindingSourceFrame.copyFrom(a.sourceFrame);
    s.bindingDestinationFrame.copyFrom(a.destinationFrame);
    s.transform = r.projection.transform;
    r.projection.transform = null;
    a.bind(s.renderTexture, s.sourceFrame, T);
    r.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const t = this.defaultFilterStack;
    const e = t.pop();
    const r = e.filters;
    this.activeState = e;
    const n = this.globalUniforms.uniforms;
    n.outputFrame = e.sourceFrame;
    n.resolution = e.resolution;
    const s = n.inputSize;
    const a = n.inputPixel;
    const o = n.inputClamp;
    s[0] = e.destinationFrame.width;
    s[1] = e.destinationFrame.height;
    s[2] = 1 / s[0];
    s[3] = 1 / s[1];
    a[0] = Math.round(s[0] * e.resolution);
    a[1] = Math.round(s[1] * e.resolution);
    a[2] = 1 / a[0];
    a[3] = 1 / a[1];
    o[0] = a[2] * 0.5;
    o[1] = a[3] * 0.5;
    o[2] = e.sourceFrame.width * s[2] - a[2] * 0.5;
    o[3] = e.sourceFrame.height * s[3] - a[3] * 0.5;
    if (e.legacy) {
      const c = n.filterArea;
      c[0] = e.destinationFrame.width;
      c[1] = e.destinationFrame.height;
      c[2] = e.sourceFrame.x;
      c[3] = e.sourceFrame.y;
      n.filterClamp = n.inputClamp;
    }
    this.globalUniforms.update();
    const l = t[t.length - 1];
    this.renderer.framebuffer.blit();
    if (r.length === 1) {
      r[0].apply(this, e.renderTexture, l.renderTexture, Cr.BLEND, e);
      this.returnFilterTexture(e.renderTexture);
    } else {
      let c = e.renderTexture;
      let p = this.getOptimalFilterTexture(c.width, c.height, e.resolution);
      p.filterFrame = c.filterFrame;
      let g = 0;
      for (g = 0; g < r.length - 1; ++g) {
        if (g === 1 && e.multisample > 1) {
          p = this.getOptimalFilterTexture(c.width, c.height, e.resolution);
          p.filterFrame = c.filterFrame;
        }
        r[g].apply(this, c, p, Cr.CLEAR, e);
        const f = c;
        c = p;
        p = f;
      }
      r[g].apply(this, c, l.renderTexture, Cr.BLEND, e);
      if (g > 1 && e.multisample > 1) {
        this.returnFilterTexture(e.renderTexture);
      }
      this.returnFilterTexture(c);
      this.returnFilterTexture(p);
    }
    e.clear();
    this.statePool.push(e);
  }
  bindAndClear(t, e = Cr.CLEAR) {
    const {
      renderTexture: r,
      state: n
    } = this.renderer;
    if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
      this.renderer.projection.transform = this.activeState.transform;
    } else {
      this.renderer.projection.transform = null;
    }
    if (t == null ? undefined : t.filterFrame) {
      const a = this.tempRect;
      a.x = 0;
      a.y = 0;
      a.width = t.filterFrame.width;
      a.height = t.filterFrame.height;
      r.bind(t, t.filterFrame, a);
    } else if (t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
      r.bind(t);
    } else {
      this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
    }
    const s = n.stateId & 1 || this.forceClear;
    if (e === Cr.CLEAR || e === Cr.BLIT && s) {
      this.renderer.framebuffer.clear(0, 0, 0, 0);
    }
  }
  applyFilter(t, e, r, n) {
    const s = this.renderer;
    s.state.set(t.state);
    this.bindAndClear(r, n);
    t.uniforms.uSampler = e;
    t.uniforms.filterGlobals = this.globalUniforms;
    s.shader.bind(t);
    t.legacy = !!t.program.attributeData.aTextureCoord;
    if (t.legacy) {
      this.quadUv.map(e._frame, e.filterFrame);
      s.geometry.bind(this.quadUv);
      s.geometry.draw(or.TRIANGLES);
    } else {
      s.geometry.bind(this.quad);
      s.geometry.draw(or.TRIANGLE_STRIP);
    }
  }
  calculateSpriteMatrix(t, e) {
    const {
      sourceFrame: r,
      destinationFrame: n
    } = this.activeState;
    const {
      orig: s
    } = e._texture;
    const a = t.set(n.width, 0, 0, n.height, r.x, r.y);
    const o = e.worldTransform.copyTo(jt.TEMP_MATRIX);
    o.invert();
    a.prepend(o);
    a.scale(1 / s.width, 1 / s.height);
    a.translate(e.anchor.x, e.anchor.y);
    return a;
  }
  destroy() {
    this.renderer = null;
    this.texturePool.clear(false);
  }
  getOptimalFilterTexture(t, e, r = 1, n = he.NONE) {
    return this.texturePool.getOptimalTexture(t, e, r, n);
  }
  getFilterTexture(t, e, r) {
    if (typeof t == "number") {
      const s = t;
      t = e;
      e = s;
    }
    t = t || this.activeState.renderTexture;
    const n = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || he.NONE);
    n.filterFrame = t.filterFrame;
    return n;
  }
  returnFilterTexture(t) {
    this.texturePool.returnTexture(t);
  }
  emptyPool() {
    this.texturePool.clear(true);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(t, e) {
    const r = Ns[0];
    const n = Ns[1];
    const s = Ns[2];
    const a = Ns[3];
    r.set(e.left, e.top);
    n.set(e.left, e.bottom);
    s.set(e.right, e.top);
    a.set(e.right, e.bottom);
    t.apply(r, r);
    t.apply(n, n);
    t.apply(s, s);
    t.apply(a, a);
    const o = Math.min(r.x, n.x, s.x, a.x);
    const l = Math.min(r.y, n.y, s.y, a.y);
    const c = Math.max(r.x, n.x, s.x, a.x);
    const p = Math.max(r.y, n.y, s.y, a.y);
    e.x = o;
    e.y = l;
    e.width = c - o;
    e.height = p - l;
  }
  roundFrame(t, e, r, n, s) {
    if (!(t.width <= 0) && !(t.height <= 0) && !(r.width <= 0) && !(r.height <= 0)) {
      if (s) {
        const {
          a,
          b: o,
          c: l,
          d: c
        } = s;
        if ((Math.abs(o) > 0.0001 || Math.abs(l) > 0.0001) && (Math.abs(a) > 0.0001 || Math.abs(c) > 0.0001)) {
          return;
        }
      }
      s = s ? qo.copyFrom(s) : qo.identity();
      s.translate(-r.x, -r.y).scale(n.width / r.width, n.height / r.height).translate(n.x, n.y);
      this.transformAABB(s, t);
      t.ceil(e);
      this.transformAABB(s.invert(), t);
    }
  }
}
Xd.extension = {
  type: rt.RendererSystem,
  name: "filter"
};
ot.add(Xd);
class C0 {
  constructor(t) {
    this.framebuffer = t;
    this.stencil = null;
    this.dirtyId = -1;
    this.dirtyFormat = -1;
    this.dirtySize = -1;
    this.multisample = he.NONE;
    this.msaaBuffer = null;
    this.blitFramebuffer = null;
    this.mipLevel = 0;
  }
}
const I0 = new At();
class zd {
  constructor(t) {
    this.renderer = t;
    this.managedFramebuffers = [];
    this.unknownFramebuffer = new Hh(10, 10);
    this.msaaSamples = null;
  }
  contextChange() {
    this.disposeAll(true);
    const t = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    this.current = this.unknownFramebuffer;
    this.viewport = new At();
    this.hasMRT = true;
    this.writeDepthTexture = true;
    if (this.renderer.context.webGLVersion === 1) {
      let e = this.renderer.context.extensions.drawBuffers;
      let r = this.renderer.context.extensions.depthTexture;
      if (st.PREFER_ENV === Oi.WEBGL_LEGACY) {
        e = null;
        r = null;
      }
      if (e) {
        t.drawBuffers = n => e.drawBuffersWEBGL(n);
      } else {
        this.hasMRT = false;
        t.drawBuffers = () => {};
      }
      if (!r) {
        this.writeDepthTexture = false;
      }
    } else {
      this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES);
    }
  }
  bind(t, e, r = 0) {
    const {
      gl: n
    } = this;
    if (t) {
      const s = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
      if (this.current !== t) {
        this.current = t;
        n.bindFramebuffer(n.FRAMEBUFFER, s.framebuffer);
      }
      if (s.mipLevel !== r) {
        t.dirtyId++;
        t.dirtyFormat++;
        s.mipLevel = r;
      }
      if (s.dirtyId !== t.dirtyId) {
        s.dirtyId = t.dirtyId;
        if (s.dirtyFormat !== t.dirtyFormat) {
          s.dirtyFormat = t.dirtyFormat;
          s.dirtySize = t.dirtySize;
          this.updateFramebuffer(t, r);
        } else if (s.dirtySize !== t.dirtySize) {
          s.dirtySize = t.dirtySize;
          this.resizeFramebuffer(t);
        }
      }
      for (let a = 0; a < t.colorTextures.length; a++) {
        const o = t.colorTextures[a];
        this.renderer.texture.unbind(o.parentTextureArray || o);
      }
      if (t.depthTexture) {
        this.renderer.texture.unbind(t.depthTexture);
      }
      if (e) {
        const a = e.width >> r;
        const o = e.height >> r;
        const l = a / e.width;
        this.setViewport(e.x * l, e.y * l, a, o);
      } else {
        const a = t.width >> r;
        const o = t.height >> r;
        this.setViewport(0, 0, a, o);
      }
    } else {
      if (this.current) {
        this.current = null;
        n.bindFramebuffer(n.FRAMEBUFFER, null);
      }
      if (e) {
        this.setViewport(e.x, e.y, e.width, e.height);
      } else {
        this.setViewport(0, 0, this.renderer.width, this.renderer.height);
      }
    }
  }
  setViewport(t, e, r, n) {
    const s = this.viewport;
    t = Math.round(t);
    e = Math.round(e);
    r = Math.round(r);
    n = Math.round(n);
    if (s.width !== r || s.height !== n || s.x !== t || s.y !== e) {
      s.x = t;
      s.y = e;
      s.width = r;
      s.height = n;
      this.gl.viewport(t, e, r, n);
    }
  }
  get size() {
    if (this.current) {
      return {
        x: 0,
        y: 0,
        width: this.current.width,
        height: this.current.height
      };
    } else {
      return {
        x: 0,
        y: 0,
        width: this.renderer.width,
        height: this.renderer.height
      };
    }
  }
  clear(t, e, r, n, s = uh.COLOR | uh.DEPTH) {
    const {
      gl: a
    } = this;
    a.clearColor(t, e, r, n);
    a.clear(s);
  }
  initFramebuffer(t) {
    const {
      gl: e
    } = this;
    const r = new C0(e.createFramebuffer());
    r.multisample = this.detectSamples(t.multisample);
    t.glFramebuffers[this.CONTEXT_UID] = r;
    this.managedFramebuffers.push(t);
    t.disposeRunner.add(this);
    return r;
  }
  resizeFramebuffer(t) {
    const {
      gl: e
    } = this;
    const r = t.glFramebuffers[this.CONTEXT_UID];
    if (r.stencil) {
      e.bindRenderbuffer(e.RENDERBUFFER, r.stencil);
      let a;
      if (this.renderer.context.webGLVersion === 1) {
        a = e.DEPTH_STENCIL;
      } else if (t.depth && t.stencil) {
        a = e.DEPTH24_STENCIL8;
      } else if (t.depth) {
        a = e.DEPTH_COMPONENT24;
      } else {
        a = e.STENCIL_INDEX8;
      }
      if (r.msaaBuffer) {
        e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, a, t.width, t.height);
      } else {
        e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height);
      }
    }
    const n = t.colorTextures;
    let s = n.length;
    if (!e.drawBuffers) {
      s = Math.min(s, 1);
    }
    for (let a = 0; a < s; a++) {
      const o = n[a];
      const l = o.parentTextureArray || o;
      this.renderer.texture.bind(l, 0);
      if (a === 0 && r.msaaBuffer) {
        e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer);
        e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, l._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height);
      }
    }
    if (t.depthTexture && this.writeDepthTexture) {
      this.renderer.texture.bind(t.depthTexture, 0);
    }
  }
  updateFramebuffer(t, e) {
    const {
      gl: r
    } = this;
    const n = t.glFramebuffers[this.CONTEXT_UID];
    const s = t.colorTextures;
    let a = s.length;
    if (!r.drawBuffers) {
      a = Math.min(a, 1);
    }
    if (n.multisample > 1 && this.canMultisampleFramebuffer(t)) {
      n.msaaBuffer = n.msaaBuffer || r.createRenderbuffer();
    } else if (n.msaaBuffer) {
      r.deleteRenderbuffer(n.msaaBuffer);
      n.msaaBuffer = null;
      if (n.blitFramebuffer) {
        n.blitFramebuffer.dispose();
        n.blitFramebuffer = null;
      }
    }
    const o = [];
    for (let l = 0; l < a; l++) {
      const c = s[l];
      const p = c.parentTextureArray || c;
      this.renderer.texture.bind(p, 0);
      if (l === 0 && n.msaaBuffer) {
        r.bindRenderbuffer(r.RENDERBUFFER, n.msaaBuffer);
        r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, p._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height);
        r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, n.msaaBuffer);
      } else {
        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + l, c.target, p._glTextures[this.CONTEXT_UID].texture, e);
        o.push(r.COLOR_ATTACHMENT0 + l);
      }
    }
    if (o.length > 1) {
      r.drawBuffers(o);
    }
    if (t.depthTexture && this.writeDepthTexture) {
      const l = t.depthTexture;
      this.renderer.texture.bind(l, 0);
      r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e);
    }
    if ((t.stencil || t.depth) && (!t.depthTexture || !this.writeDepthTexture)) {
      n.stencil = n.stencil || r.createRenderbuffer();
      let l;
      let c;
      if (this.renderer.context.webGLVersion === 1) {
        l = r.DEPTH_STENCIL_ATTACHMENT;
        c = r.DEPTH_STENCIL;
      } else if (t.depth && t.stencil) {
        l = r.DEPTH_STENCIL_ATTACHMENT;
        c = r.DEPTH24_STENCIL8;
      } else if (t.depth) {
        l = r.DEPTH_ATTACHMENT;
        c = r.DEPTH_COMPONENT24;
      } else {
        l = r.STENCIL_ATTACHMENT;
        c = r.STENCIL_INDEX8;
      }
      r.bindRenderbuffer(r.RENDERBUFFER, n.stencil);
      if (n.msaaBuffer) {
        r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, c, t.width, t.height);
      } else {
        r.renderbufferStorage(r.RENDERBUFFER, c, t.width, t.height);
      }
      r.framebufferRenderbuffer(r.FRAMEBUFFER, l, r.RENDERBUFFER, n.stencil);
    } else if (n.stencil) {
      r.deleteRenderbuffer(n.stencil);
      n.stencil = null;
    }
  }
  canMultisampleFramebuffer(t) {
    return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture;
  }
  detectSamples(t) {
    const {
      msaaSamples: e
    } = this;
    let r = he.NONE;
    if (t <= 1 || e === null) {
      return r;
    }
    for (let n = 0; n < e.length; n++) {
      if (e[n] <= t) {
        r = e[n];
        break;
      }
    }
    if (r === 1) {
      r = he.NONE;
    }
    return r;
  }
  blit(t, e, r) {
    const {
      current: n,
      renderer: s,
      gl: a,
      CONTEXT_UID: o
    } = this;
    if (s.context.webGLVersion !== 2 || !n) {
      return;
    }
    const l = n.glFramebuffers[o];
    if (!l) {
      return;
    }
    if (!t) {
      if (!l.msaaBuffer) {
        return;
      }
      const p = n.colorTextures[0];
      if (!p) {
        return;
      }
      if (!l.blitFramebuffer) {
        l.blitFramebuffer = new Hh(n.width, n.height);
        l.blitFramebuffer.addColorTexture(0, p);
      }
      t = l.blitFramebuffer;
      if (t.colorTextures[0] !== p) {
        t.colorTextures[0] = p;
        t.dirtyId++;
        t.dirtyFormat++;
      }
      if (t.width !== n.width || t.height !== n.height) {
        t.width = n.width;
        t.height = n.height;
        t.dirtyId++;
        t.dirtySize++;
      }
    }
    if (!e) {
      e = I0;
      e.width = n.width;
      e.height = n.height;
    }
    r ||= e;
    const c = e.width === r.width && e.height === r.height;
    this.bind(t);
    a.bindFramebuffer(a.READ_FRAMEBUFFER, l.framebuffer);
    a.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, a.COLOR_BUFFER_BIT, c ? a.NEAREST : a.LINEAR);
    a.bindFramebuffer(a.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer);
  }
  disposeFramebuffer(t, e) {
    const r = t.glFramebuffers[this.CONTEXT_UID];
    const n = this.gl;
    if (!r) {
      return;
    }
    delete t.glFramebuffers[this.CONTEXT_UID];
    const s = this.managedFramebuffers.indexOf(t);
    if (s >= 0) {
      this.managedFramebuffers.splice(s, 1);
    }
    t.disposeRunner.remove(this);
    if (!e) {
      n.deleteFramebuffer(r.framebuffer);
      if (r.msaaBuffer) {
        n.deleteRenderbuffer(r.msaaBuffer);
      }
      if (r.stencil) {
        n.deleteRenderbuffer(r.stencil);
      }
    }
    if (r.blitFramebuffer) {
      this.disposeFramebuffer(r.blitFramebuffer, e);
    }
  }
  disposeAll(t) {
    const e = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let r = 0; r < e.length; r++) {
      this.disposeFramebuffer(e[r], t);
    }
  }
  forceStencil() {
    const t = this.current;
    if (!t) {
      return;
    }
    const e = t.glFramebuffers[this.CONTEXT_UID];
    if (!e || e.stencil && t.stencil) {
      return;
    }
    t.stencil = true;
    const r = t.width;
    const n = t.height;
    const s = this.gl;
    const a = e.stencil = s.createRenderbuffer();
    s.bindRenderbuffer(s.RENDERBUFFER, a);
    let o;
    let l;
    if (this.renderer.context.webGLVersion === 1) {
      o = s.DEPTH_STENCIL_ATTACHMENT;
      l = s.DEPTH_STENCIL;
    } else if (t.depth) {
      o = s.DEPTH_STENCIL_ATTACHMENT;
      l = s.DEPTH24_STENCIL8;
    } else {
      o = s.STENCIL_ATTACHMENT;
      l = s.STENCIL_INDEX8;
    }
    if (e.msaaBuffer) {
      s.renderbufferStorageMultisample(s.RENDERBUFFER, e.multisample, l, r, n);
    } else {
      s.renderbufferStorage(s.RENDERBUFFER, l, r, n);
    }
    s.framebufferRenderbuffer(s.FRAMEBUFFER, o, s.RENDERBUFFER, a);
  }
  reset() {
    this.current = this.unknownFramebuffer;
    this.viewport = new At();
  }
  destroy() {
    this.renderer = null;
  }
}
zd.extension = {
  type: rt.RendererSystem,
  name: "framebuffer"
};
ot.add(zd);
const Yo = {
  5126: 4,
  5123: 2,
  5121: 1
};
class qd {
  constructor(t) {
    this.renderer = t;
    this._activeGeometry = null;
    this._activeVao = null;
    this.hasVao = true;
    this.hasInstance = true;
    this.canUseUInt32ElementIndex = false;
    this.managedGeometries = {};
  }
  contextChange() {
    this.disposeAll(true);
    const t = this.gl = this.renderer.gl;
    const e = this.renderer.context;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    if (e.webGLVersion !== 2) {
      let r = this.renderer.context.extensions.vertexArrayObject;
      if (st.PREFER_ENV === Oi.WEBGL_LEGACY) {
        r = null;
      }
      if (r) {
        t.createVertexArray = () => r.createVertexArrayOES();
        t.bindVertexArray = n => r.bindVertexArrayOES(n);
        t.deleteVertexArray = n => r.deleteVertexArrayOES(n);
      } else {
        this.hasVao = false;
        t.createVertexArray = () => null;
        t.bindVertexArray = () => null;
        t.deleteVertexArray = () => null;
      }
    }
    if (e.webGLVersion !== 2) {
      const r = t.getExtension("ANGLE_instanced_arrays");
      if (r) {
        t.vertexAttribDivisor = (n, s) => r.vertexAttribDivisorANGLE(n, s);
        t.drawElementsInstanced = (n, s, a, o, l) => r.drawElementsInstancedANGLE(n, s, a, o, l);
        t.drawArraysInstanced = (n, s, a, o) => r.drawArraysInstancedANGLE(n, s, a, o);
      } else {
        this.hasInstance = false;
      }
    }
    this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex;
  }
  bind(t, e) {
    e = e || this.renderer.shader.shader;
    const {
      gl: r
    } = this;
    let n = t.glVertexArrayObjects[this.CONTEXT_UID];
    let s = false;
    if (!n) {
      this.managedGeometries[t.id] = t;
      t.disposeRunner.add(this);
      t.glVertexArrayObjects[this.CONTEXT_UID] = n = {};
      s = true;
    }
    const a = n[e.program.id] || this.initGeometryVao(t, e, s);
    this._activeGeometry = t;
    if (this._activeVao !== a) {
      this._activeVao = a;
      if (this.hasVao) {
        r.bindVertexArray(a);
      } else {
        this.activateVao(t, e.program);
      }
    }
    this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const t = this._activeGeometry;
    const e = this.renderer.buffer;
    for (let r = 0; r < t.buffers.length; r++) {
      const n = t.buffers[r];
      e.update(n);
    }
  }
  checkCompatibility(t, e) {
    const r = t.attributes;
    const n = e.attributeData;
    for (const s in n) {
      if (!r[s]) {
        throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`);
      }
    }
  }
  getSignature(t, e) {
    const r = t.attributes;
    const n = e.attributeData;
    const s = ["g", t.id];
    for (const a in r) {
      if (n[a]) {
        s.push(a, n[a].location);
      }
    }
    return s.join("-");
  }
  initGeometryVao(t, e, r = true) {
    const n = this.gl;
    const s = this.CONTEXT_UID;
    const a = this.renderer.buffer;
    const o = e.program;
    if (!o.glPrograms[s]) {
      this.renderer.shader.generateProgram(e);
    }
    this.checkCompatibility(t, o);
    const l = this.getSignature(t, o);
    const c = t.glVertexArrayObjects[this.CONTEXT_UID];
    let p = c[l];
    if (p) {
      c[o.id] = p;
      return p;
    }
    const g = t.buffers;
    const f = t.attributes;
    const v = {};
    const _ = {};
    for (const T in g) {
      v[T] = 0;
      _[T] = 0;
    }
    for (const T in f) {
      if (!f[T].size && o.attributeData[T]) {
        f[T].size = o.attributeData[T].size;
      } else if (!f[T].size) {
        console.warn(`PIXI Geometry attribute '${T}' size cannot be determined (likely the bound shader does not have the attribute)`);
      }
      v[f[T].buffer] += f[T].size * Yo[f[T].type];
    }
    for (const T in f) {
      const A = f[T];
      const E = A.size;
      if (A.stride === undefined) {
        if (v[A.buffer] === E * Yo[A.type]) {
          A.stride = 0;
        } else {
          A.stride = v[A.buffer];
        }
      }
      if (A.start === undefined) {
        A.start = _[A.buffer];
        _[A.buffer] += E * Yo[A.type];
      }
    }
    p = n.createVertexArray();
    n.bindVertexArray(p);
    for (let T = 0; T < g.length; T++) {
      const A = g[T];
      a.bind(A);
      if (r) {
        A._glBuffers[s].refCount++;
      }
    }
    this.activateVao(t, o);
    c[o.id] = p;
    c[l] = p;
    n.bindVertexArray(null);
    a.unbind(Mr.ARRAY_BUFFER);
    return p;
  }
  disposeGeometry(t, e) {
    var o;
    if (!this.managedGeometries[t.id]) {
      return;
    }
    delete this.managedGeometries[t.id];
    const r = t.glVertexArrayObjects[this.CONTEXT_UID];
    const n = this.gl;
    const s = t.buffers;
    const a = (o = this.renderer) == null ? undefined : o.buffer;
    t.disposeRunner.remove(this);
    if (r) {
      if (a) {
        for (let l = 0; l < s.length; l++) {
          const c = s[l]._glBuffers[this.CONTEXT_UID];
          if (c) {
            c.refCount--;
            if (c.refCount === 0 && !e) {
              a.dispose(s[l], e);
            }
          }
        }
      }
      if (!e) {
        for (const l in r) {
          if (l[0] === "g") {
            const c = r[l];
            if (this._activeVao === c) {
              this.unbind();
            }
            n.deleteVertexArray(c);
          }
        }
      }
      delete t.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(t) {
    const e = Object.keys(this.managedGeometries);
    for (let r = 0; r < e.length; r++) {
      this.disposeGeometry(this.managedGeometries[e[r]], t);
    }
  }
  activateVao(t, e) {
    const r = this.gl;
    const n = this.CONTEXT_UID;
    const s = this.renderer.buffer;
    const a = t.buffers;
    const o = t.attributes;
    if (t.indexBuffer) {
      s.bind(t.indexBuffer);
    }
    let l = null;
    for (const c in o) {
      const p = o[c];
      const g = a[p.buffer];
      const f = g._glBuffers[n];
      if (e.attributeData[c]) {
        if (l !== f) {
          s.bind(g);
          l = f;
        }
        const v = e.attributeData[c].location;
        r.enableVertexAttribArray(v);
        r.vertexAttribPointer(v, p.size, p.type || r.FLOAT, p.normalized, p.stride, p.start);
        if (p.instance) {
          if (this.hasInstance) {
            r.vertexAttribDivisor(v, p.divisor);
          } else {
            throw new Error("geometry error, GPU Instancing is not supported on this device");
          }
        }
      }
    }
  }
  draw(t, e, r, n) {
    const {
      gl: s
    } = this;
    const a = this._activeGeometry;
    if (a.indexBuffer) {
      const o = a.indexBuffer.data.BYTES_PER_ELEMENT;
      const l = o === 2 ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
      if (o === 2 || o === 4 && this.canUseUInt32ElementIndex) {
        if (a.instanced) {
          s.drawElementsInstanced(t, e || a.indexBuffer.data.length, l, (r || 0) * o, n || 1);
        } else {
          s.drawElements(t, e || a.indexBuffer.data.length, l, (r || 0) * o);
        }
      } else {
        console.warn("unsupported index buffer type: uint32");
      }
    } else if (a.instanced) {
      s.drawArraysInstanced(t, r, e || a.getSize(), n || 1);
    } else {
      s.drawArrays(t, r, e || a.getSize());
    }
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null);
    this._activeVao = null;
    this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
qd.extension = {
  type: rt.RendererSystem,
  name: "geometry"
};
ot.add(qd);
const fc = new jt();
class wl {
  constructor(t, e) {
    this._texture = t;
    this.mapCoord = new jt();
    this.uClampFrame = new Float32Array(4);
    this.uClampOffset = new Float32Array(2);
    this._textureID = -1;
    this._updateID = 0;
    this.clampOffset = 0;
    this.clampMargin = typeof e === "undefined" ? 0.5 : e;
    this.isSimple = false;
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture = t;
    this._textureID = -1;
  }
  multiplyUvs(t, e = t) {
    const r = this.mapCoord;
    for (let n = 0; n < t.length; n += 2) {
      const s = t[n];
      const a = t[n + 1];
      e[n] = s * r.a + a * r.c + r.tx;
      e[n + 1] = s * r.b + a * r.d + r.ty;
    }
    return e;
  }
  update(t) {
    const e = this._texture;
    if (!e || !e.valid || !t && this._textureID === e._updateID) {
      return false;
    }
    this._textureID = e._updateID;
    this._updateID++;
    const r = e._uvs;
    this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
    const n = e.orig;
    const s = e.trim;
    if (s) {
      fc.set(n.width / s.width, 0, 0, n.height / s.height, -s.x / s.width, -s.y / s.height);
      this.mapCoord.append(fc);
    }
    const a = e.baseTexture;
    const o = this.uClampFrame;
    const l = this.clampMargin / a.resolution;
    const c = this.clampOffset;
    o[0] = (e._frame.x + l + c) / a.width;
    o[1] = (e._frame.y + l + c) / a.height;
    o[2] = (e._frame.x + e._frame.width - l + c) / a.width;
    o[3] = (e._frame.y + e._frame.height - l + c) / a.height;
    this.uClampOffset[0] = c / a.realWidth;
    this.uClampOffset[1] = c / a.realHeight;
    this.isSimple = e._frame.width === a.width && e._frame.height === a.height && e.rotate === 0;
    return true;
  }
}
var R0 = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`;
var P0 = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class M0 extends De {
  constructor(t, e, r) {
    let n = null;
    if (typeof t != "string" && e === undefined && r === undefined) {
      n = t;
      t = undefined;
      e = undefined;
      r = undefined;
    }
    super(t || P0, e || R0, r);
    this.maskSprite = n;
    this.maskMatrix = new jt();
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(t) {
    this._maskSprite = t;
    if (this._maskSprite) {
      this._maskSprite.renderable = false;
    }
  }
  apply(t, e, r, n) {
    const s = this._maskSprite;
    const a = s._texture;
    if (a.valid) {
      a.uvMatrix ||= new wl(a, 0);
      a.uvMatrix.update();
      this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1;
      this.uniforms.mask = a;
      this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, s).prepend(a.uvMatrix.mapCoord);
      this.uniforms.alpha = s.worldAlpha;
      this.uniforms.maskClamp = a.uvMatrix.uClampFrame;
      t.applyFilter(this, e, r, n);
    }
  }
}
class D0 {
  constructor(t = null) {
    this.type = fe.NONE;
    this.autoDetect = true;
    this.maskObject = t || null;
    this.pooled = false;
    this.isMaskData = true;
    this.resolution = null;
    this.multisample = De.defaultMultisample;
    this.enabled = true;
    this.colorMask = 15;
    this._filters = null;
    this._stencilCounter = 0;
    this._scissorCounter = 0;
    this._scissorRect = null;
    this._scissorRectLocal = null;
    this._colorMask = 15;
    this._target = null;
  }
  get filter() {
    if (this._filters) {
      return this._filters[0];
    } else {
      return null;
    }
  }
  set filter(t) {
    if (t) {
      if (this._filters) {
        this._filters[0] = t;
      } else {
        this._filters = [t];
      }
    } else {
      this._filters = null;
    }
  }
  reset() {
    if (this.pooled) {
      this.maskObject = null;
      this.type = fe.NONE;
      this.autoDetect = true;
    }
    this._target = null;
    this._scissorRectLocal = null;
  }
  copyCountersOrReset(t) {
    if (t) {
      this._stencilCounter = t._stencilCounter;
      this._scissorCounter = t._scissorCounter;
      this._scissorRect = t._scissorRect;
    } else {
      this._stencilCounter = 0;
      this._scissorCounter = 0;
      this._scissorRect = null;
    }
  }
}
class Yd {
  constructor(t) {
    this.renderer = t;
    this.enableScissor = true;
    this.alphaMaskPool = [];
    this.maskDataPool = [];
    this.maskStack = [];
    this.alphaMaskIndex = 0;
  }
  setMaskStack(t) {
    this.maskStack = t;
    this.renderer.scissor.setMaskStack(t);
    this.renderer.stencil.setMaskStack(t);
  }
  push(t, e) {
    let r = e;
    if (!r.isMaskData) {
      const s = this.maskDataPool.pop() || new D0();
      s.pooled = true;
      s.maskObject = e;
      r = s;
    }
    const n = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    r.copyCountersOrReset(n);
    r._colorMask = n ? n._colorMask : 15;
    if (r.autoDetect) {
      this.detect(r);
    }
    r._target = t;
    if (r.type !== fe.SPRITE) {
      this.maskStack.push(r);
    }
    if (r.enabled) {
      switch (r.type) {
        case fe.SCISSOR:
          this.renderer.scissor.push(r);
          break;
        case fe.STENCIL:
          this.renderer.stencil.push(r);
          break;
        case fe.SPRITE:
          r.copyCountersOrReset(null);
          this.pushSpriteMask(r);
          break;
        case fe.COLOR:
          this.pushColorMask(r);
          break;
      }
    }
    if (r.type === fe.SPRITE) {
      this.maskStack.push(r);
    }
  }
  pop(t) {
    const e = this.maskStack.pop();
    if (!!e && e._target === t) {
      if (e.enabled) {
        switch (e.type) {
          case fe.SCISSOR:
            this.renderer.scissor.pop(e);
            break;
          case fe.STENCIL:
            this.renderer.stencil.pop(e.maskObject);
            break;
          case fe.SPRITE:
            this.popSpriteMask(e);
            break;
          case fe.COLOR:
            this.popColorMask(e);
            break;
        }
      }
      e.reset();
      if (e.pooled) {
        this.maskDataPool.push(e);
      }
      if (this.maskStack.length !== 0) {
        const r = this.maskStack[this.maskStack.length - 1];
        if (r.type === fe.SPRITE && r._filters) {
          r._filters[0].maskSprite = r.maskObject;
        }
      }
    }
  }
  detect(t) {
    const e = t.maskObject;
    if (e) {
      if (e.isSprite) {
        t.type = fe.SPRITE;
      } else if (this.enableScissor && this.renderer.scissor.testScissor(t)) {
        t.type = fe.SCISSOR;
      } else {
        t.type = fe.STENCIL;
      }
    } else {
      t.type = fe.COLOR;
    }
  }
  pushSpriteMask(t) {
    const {
      maskObject: e
    } = t;
    const r = t._target;
    let n = t._filters;
    if (!n) {
      n = this.alphaMaskPool[this.alphaMaskIndex];
      n ||= this.alphaMaskPool[this.alphaMaskIndex] = [new M0()];
    }
    n[0].resolution = t.resolution;
    n[0].multisample = t.multisample;
    n[0].maskSprite = e;
    const s = r.filterArea;
    r.filterArea = e.getBounds(true);
    this.renderer.filter.push(r, n);
    r.filterArea = s;
    if (!t._filters) {
      this.alphaMaskIndex++;
    }
  }
  popSpriteMask(t) {
    this.renderer.filter.pop();
    if (t._filters) {
      t._filters[0].maskSprite = null;
    } else {
      this.alphaMaskIndex--;
      this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null;
    }
  }
  pushColorMask(t) {
    const e = t._colorMask;
    const r = t._colorMask = e & t.colorMask;
    if (r !== e) {
      this.renderer.gl.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0);
    }
  }
  popColorMask(t) {
    const e = t._colorMask;
    const r = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    if (r !== e) {
      this.renderer.gl.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0);
    }
  }
  destroy() {
    this.renderer = null;
  }
}
Yd.extension = {
  type: rt.RendererSystem,
  name: "mask"
};
ot.add(Yd);
class Kd {
  constructor(t) {
    this.renderer = t;
    this.maskStack = [];
    this.glConst = 0;
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(t) {
    const {
      gl: e
    } = this.renderer;
    const r = this.getStackLength();
    this.maskStack = t;
    const n = this.getStackLength();
    if (n !== r) {
      if (n === 0) {
        e.disable(this.glConst);
      } else {
        e.enable(this.glConst);
        this._useCurrent();
      }
    }
  }
  _useCurrent() {}
  destroy() {
    this.renderer = null;
    this.maskStack = null;
  }
}
const pc = new jt();
const gc = [];
const Zd = class ta extends Kd {
  constructor(t) {
    super(t);
    this.glConst = st.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    if (t) {
      return t._scissorCounter;
    } else {
      return 0;
    }
  }
  calcScissorRect(t) {
    if (t._scissorRectLocal) {
      return;
    }
    const e = t._scissorRect;
    const {
      maskObject: r
    } = t;
    const {
      renderer: n
    } = this;
    const s = n.renderTexture;
    const a = r.getBounds(true, gc.pop() ?? new At());
    this.roundFrameToPixels(a, s.current ? s.current.resolution : n.resolution, s.sourceFrame, s.destinationFrame, n.projection.transform);
    if (e) {
      a.fit(e);
    }
    t._scissorRectLocal = a;
  }
  static isMatrixRotated(t) {
    if (!t) {
      return false;
    }
    const {
      a: e,
      b: r,
      c: n,
      d: s
    } = t;
    return (Math.abs(r) > 0.0001 || Math.abs(n) > 0.0001) && (Math.abs(e) > 0.0001 || Math.abs(s) > 0.0001);
  }
  testScissor(t) {
    const {
      maskObject: e
    } = t;
    if (!e.isFastRect || !e.isFastRect() || ta.isMatrixRotated(e.worldTransform) || ta.isMatrixRotated(this.renderer.projection.transform)) {
      return false;
    }
    this.calcScissorRect(t);
    const r = t._scissorRectLocal;
    return r.width > 0 && r.height > 0;
  }
  roundFrameToPixels(t, e, r, n, s) {
    if (!ta.isMatrixRotated(s)) {
      s = s ? pc.copyFrom(s) : pc.identity();
      s.translate(-r.x, -r.y).scale(n.width / r.width, n.height / r.height).translate(n.x, n.y);
      this.renderer.filter.transformAABB(s, t);
      t.fit(n);
      t.x = Math.round(t.x * e);
      t.y = Math.round(t.y * e);
      t.width = Math.round(t.width * e);
      t.height = Math.round(t.height * e);
    }
  }
  push(t) {
    if (!t._scissorRectLocal) {
      this.calcScissorRect(t);
    }
    const {
      gl: e
    } = this.renderer;
    if (!t._scissorRect) {
      e.enable(e.SCISSOR_TEST);
    }
    t._scissorCounter++;
    t._scissorRect = t._scissorRectLocal;
    this._useCurrent();
  }
  pop(t) {
    const {
      gl: e
    } = this.renderer;
    if (t) {
      gc.push(t._scissorRectLocal);
    }
    if (this.getStackLength() > 0) {
      this._useCurrent();
    } else {
      e.disable(e.SCISSOR_TEST);
    }
  }
  _useCurrent() {
    const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let e;
    if (this.renderer.renderTexture.current) {
      e = t.y;
    } else {
      e = this.renderer.height - t.height - t.y;
    }
    this.renderer.gl.scissor(t.x, e, t.width, t.height);
  }
};
Zd.extension = {
  type: rt.RendererSystem,
  name: "scissor"
};
let B0 = Zd;
ot.add(B0);
class Qd extends Kd {
  constructor(t) {
    super(t);
    this.glConst = st.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    if (t) {
      return t._stencilCounter;
    } else {
      return 0;
    }
  }
  push(t) {
    const e = t.maskObject;
    const {
      gl: r
    } = this.renderer;
    const n = t._stencilCounter;
    if (n === 0) {
      this.renderer.framebuffer.forceStencil();
      r.clearStencil(0);
      r.clear(r.STENCIL_BUFFER_BIT);
      r.enable(r.STENCIL_TEST);
    }
    t._stencilCounter++;
    const s = t._colorMask;
    if (s !== 0) {
      t._colorMask = 0;
      r.colorMask(false, false, false, false);
    }
    r.stencilFunc(r.EQUAL, n, 4294967295);
    r.stencilOp(r.KEEP, r.KEEP, r.INCR);
    e.renderable = true;
    e.render(this.renderer);
    this.renderer.batch.flush();
    e.renderable = false;
    if (s !== 0) {
      t._colorMask = s;
      r.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0);
    }
    this._useCurrent();
  }
  pop(t) {
    const e = this.renderer.gl;
    if (this.getStackLength() === 0) {
      e.disable(e.STENCIL_TEST);
    } else {
      const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
      const n = r ? r._colorMask : 15;
      if (n !== 0) {
        r._colorMask = 0;
        e.colorMask(false, false, false, false);
      }
      e.stencilOp(e.KEEP, e.KEEP, e.DECR);
      t.renderable = true;
      t.render(this.renderer);
      this.renderer.batch.flush();
      t.renderable = false;
      if (n !== 0) {
        r._colorMask = n;
        e.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0);
      }
      this._useCurrent();
    }
  }
  _useCurrent() {
    const t = this.renderer.gl;
    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295);
    t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
  }
}
Qd.extension = {
  type: rt.RendererSystem,
  name: "stencil"
};
ot.add(Qd);
class Jd {
  constructor(t) {
    this.renderer = t;
    this.plugins = {};
    Object.defineProperties(this.plugins, {
      extract: {
        enumerable: false,
        get() {
          vt("7.0.0", "renderer.plugins.extract has moved to renderer.extract");
          return t.extract;
        }
      },
      prepare: {
        enumerable: false,
        get() {
          vt("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare");
          return t.prepare;
        }
      },
      interaction: {
        enumerable: false,
        get() {
          vt("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events");
          return t.events;
        }
      }
    });
  }
  init() {
    const t = this.rendererPlugins;
    for (const e in t) {
      this.plugins[e] = new t[e](this.renderer);
    }
  }
  destroy() {
    for (const t in this.plugins) {
      this.plugins[t].destroy();
      this.plugins[t] = null;
    }
  }
}
Jd.extension = {
  type: [rt.RendererSystem, rt.CanvasRendererSystem],
  name: "_plugin"
};
ot.add(Jd);
class tf {
  constructor(t) {
    this.renderer = t;
    this.destinationFrame = null;
    this.sourceFrame = null;
    this.defaultFrame = null;
    this.projectionMatrix = new jt();
    this.transform = null;
  }
  update(t, e, r, n) {
    this.destinationFrame = t || this.destinationFrame || this.defaultFrame;
    this.sourceFrame = e || this.sourceFrame || t;
    this.calculateProjection(this.destinationFrame, this.sourceFrame, r, n);
    if (this.transform) {
      this.projectionMatrix.append(this.transform);
    }
    const s = this.renderer;
    s.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
    s.globalUniforms.update();
    if (s.shader.shader) {
      s.shader.syncUniformGroup(s.shader.shader.uniforms.globals);
    }
  }
  calculateProjection(t, e, r, n) {
    const s = this.projectionMatrix;
    const a = n ? -1 : 1;
    s.identity();
    s.a = 1 / e.width * 2;
    s.d = a * (1 / e.height * 2);
    s.tx = -1 - e.x * s.a;
    s.ty = -a - e.y * s.d;
  }
  setTransform(t) {}
  destroy() {
    this.renderer = null;
  }
}
tf.extension = {
  type: rt.RendererSystem,
  name: "projection"
};
ot.add(tf);
const F0 = new $a();
const mc = new At();
class ef {
  constructor(t) {
    this.renderer = t;
    this._tempMatrix = new jt();
  }
  generateTexture(t, e) {
    const {
      region: r,
      ...n
    } = e || {};
    const s = (r == null ? undefined : r.copyTo(mc)) || t.getLocalBounds(mc, true);
    const a = n.resolution || this.renderer.resolution;
    s.width = Math.max(s.width, 1 / a);
    s.height = Math.max(s.height, 1 / a);
    n.width = s.width;
    n.height = s.height;
    n.resolution = a;
    n.multisample ??= this.renderer.multisample;
    const o = Or.create(n);
    this._tempMatrix.tx = -s.x;
    this._tempMatrix.ty = -s.y;
    const l = t.transform;
    t.transform = F0;
    this.renderer.render(t, {
      renderTexture: o,
      transform: this._tempMatrix,
      skipUpdateTransform: !!t.parent,
      blit: true
    });
    t.transform = l;
    return o;
  }
  destroy() {}
}
ef.extension = {
  type: [rt.RendererSystem, rt.CanvasRendererSystem],
  name: "textureGenerator"
};
ot.add(ef);
const _i = new At();
const Nn = new At();
class rf {
  constructor(t) {
    this.renderer = t;
    this.defaultMaskStack = [];
    this.current = null;
    this.sourceFrame = new At();
    this.destinationFrame = new At();
    this.viewportFrame = new At();
  }
  contextChange() {
    var e;
    const t = (e = this.renderer) == null ? undefined : e.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!t && !!t.alpha && !!t.premultipliedAlpha;
  }
  bind(t = null, e, r) {
    const n = this.renderer;
    this.current = t;
    let s;
    let a;
    let o;
    if (t) {
      s = t.baseTexture;
      o = s.resolution;
      if (!e) {
        _i.width = t.frame.width;
        _i.height = t.frame.height;
        e = _i;
      }
      if (!r) {
        Nn.x = t.frame.x;
        Nn.y = t.frame.y;
        Nn.width = e.width;
        Nn.height = e.height;
        r = Nn;
      }
      a = s.framebuffer;
    } else {
      o = n.resolution;
      if (!e) {
        _i.width = n._view.screen.width;
        _i.height = n._view.screen.height;
        e = _i;
      }
      if (!r) {
        r = _i;
        r.width = e.width;
        r.height = e.height;
      }
    }
    const l = this.viewportFrame;
    l.x = r.x * o;
    l.y = r.y * o;
    l.width = r.width * o;
    l.height = r.height * o;
    if (!t) {
      l.y = n.view.height - (l.y + l.height);
    }
    l.ceil();
    this.renderer.framebuffer.bind(a, l);
    this.renderer.projection.update(r, e, o, !a);
    if (t) {
      this.renderer.mask.setMaskStack(s.maskStack);
    } else {
      this.renderer.mask.setMaskStack(this.defaultMaskStack);
    }
    this.sourceFrame.copyFrom(e);
    this.destinationFrame.copyFrom(r);
  }
  clear(t, e) {
    const r = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor;
    const n = Pt.shared.setValue(t || r);
    if (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) {
      n.premultiply(n.alpha);
    }
    const s = this.destinationFrame;
    const a = this.current ? this.current.baseTexture : this.renderer._view.screen;
    const o = s.width !== a.width || s.height !== a.height;
    if (o) {
      let {
        x: l,
        y: c,
        width: p,
        height: g
      } = this.viewportFrame;
      l = Math.round(l);
      c = Math.round(c);
      p = Math.round(p);
      g = Math.round(g);
      this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
      this.renderer.gl.scissor(l, c, p, g);
    }
    this.renderer.framebuffer.clear(n.red, n.green, n.blue, n.alpha, e);
    if (o) {
      this.renderer.scissor.pop();
    }
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
rf.extension = {
  type: rt.RendererSystem,
  name: "renderTexture"
};
ot.add(rf);
class O0 {
  constructor(t, e) {
    this.program = t;
    this.uniformData = e;
    this.uniformGroups = {};
    this.uniformDirtyGroups = {};
    this.uniformBufferBindings = {};
  }
  destroy() {
    this.uniformData = null;
    this.uniformGroups = null;
    this.uniformDirtyGroups = null;
    this.uniformBufferBindings = null;
    this.program = null;
  }
}
function N0(i, t) {
  const e = {};
  const r = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES);
  for (let n = 0; n < r; n++) {
    const s = t.getActiveAttrib(i, n);
    if (s.name.startsWith("gl_")) {
      continue;
    }
    const a = Hd(t, s.type);
    const o = {
      type: a,
      name: s.name,
      size: Gd(a),
      location: t.getAttribLocation(i, s.name)
    };
    e[s.name] = o;
  }
  return e;
}
function L0(i, t) {
  const e = {};
  const r = t.getProgramParameter(i, t.ACTIVE_UNIFORMS);
  for (let n = 0; n < r; n++) {
    const s = t.getActiveUniform(i, n);
    const a = s.name.replace(/\[.*?\]$/, "");
    const o = !!s.name.match(/\[.*?\]$/);
    const l = Hd(t, s.type);
    e[a] = {
      name: a,
      index: n,
      type: l,
      size: s.size,
      isArray: o,
      value: kd(l, s.size)
    };
  }
  return e;
}
function k0(i, t) {
  var o;
  const e = oc(i, i.VERTEX_SHADER, t.vertexSrc);
  const r = oc(i, i.FRAGMENT_SHADER, t.fragmentSrc);
  const n = i.createProgram();
  i.attachShader(n, e);
  i.attachShader(n, r);
  const s = (o = t.extra) == null ? undefined : o.transformFeedbackVaryings;
  if (s) {
    if (typeof i.transformFeedbackVaryings != "function") {
      console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.");
    } else {
      i.transformFeedbackVaryings(n, s.names, s.bufferMode === "separate" ? i.SEPARATE_ATTRIBS : i.INTERLEAVED_ATTRIBS);
    }
  }
  i.linkProgram(n);
  if (!i.getProgramParameter(n, i.LINK_STATUS)) {
    f0(i, n, e, r);
  }
  t.attributeData = N0(n, i);
  t.uniformData = L0(n, i);
  if (!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
    const l = Object.keys(t.attributeData);
    l.sort((c, p) => c > p ? 1 : -1);
    for (let c = 0; c < l.length; c++) {
      t.attributeData[l[c]].location = c;
      i.bindAttribLocation(n, c, l[c]);
    }
    i.linkProgram(n);
  }
  i.deleteShader(e);
  i.deleteShader(r);
  const a = {};
  for (const l in t.uniformData) {
    const c = t.uniformData[l];
    a[l] = {
      location: i.getUniformLocation(n, l),
      value: kd(c.type, c.size)
    };
  }
  return new O0(n, a);
}
function U0(i, t, e, r, n) {
  e.buffer.update(n);
}
const G0 = {
  float: `
        data[offset] = v;
    `,
  vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
  vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
  vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
  mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
  mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
  mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
};
const nf = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  int: 4,
  ivec2: 8,
  ivec3: 12,
  ivec4: 16,
  uint: 4,
  uvec2: 8,
  uvec3: 12,
  uvec4: 16,
  bool: 4,
  bvec2: 8,
  bvec3: 12,
  bvec4: 16,
  mat2: 32,
  mat3: 48,
  mat4: 64
};
function H0(i) {
  const t = i.map(s => ({
    data: s,
    offset: 0,
    dataLen: 0,
    dirty: 0
  }));
  let e = 0;
  let r = 0;
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    e = nf[a.data.type];
    if (a.data.size > 1) {
      e = Math.max(e, 16) * a.data.size;
    }
    a.dataLen = e;
    if (r % e !== 0 && r < 16) {
      const o = r % e % 16;
      r += o;
      n += o;
    }
    if (r + e > 16) {
      n = Math.ceil(n / 16) * 16;
      a.offset = n;
      n += e;
      r = e;
    } else {
      a.offset = n;
      r += e;
      n += e;
    }
  }
  n = Math.ceil(n / 16) * 16;
  return {
    uboElements: t,
    size: n
  };
}
function $0(i, t) {
  const e = [];
  for (const r in i) {
    if (t[r]) {
      e.push(t[r]);
    }
  }
  e.sort((r, n) => r.index - n.index);
  return e;
}
function V0(i, t) {
  if (!i.autoManage) {
    return {
      size: 0,
      syncFunc: U0
    };
  }
  const e = $0(i.uniforms, t);
  const {
    uboElements: r,
    size: n
  } = H0(e);
  const s = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    const l = i.uniforms[o.data.name];
    const c = o.data.name;
    let p = false;
    for (let g = 0; g < cn.length; g++) {
      const f = cn[g];
      if (f.codeUbo && f.test(o.data, l)) {
        s.push(`offset = ${o.offset / 4};`, cn[g].codeUbo(o.data.name, l));
        p = true;
        break;
      }
    }
    if (!p) {
      if (o.data.size > 1) {
        const g = Gd(o.data.type);
        const f = Math.max(nf[o.data.type] / 16, 1);
        const v = g / f;
        const _ = (4 - v % 4) % 4;
        s.push(`
                cv = ud.${c}.value;
                v = uv.${c};
                offset = ${o.offset / 4};

                t = 0;

                for(var i=0; i < ${o.data.size * f}; i++)
                {
                    for(var j = 0; j < ${v}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${_};
                }

                `);
      } else {
        const g = G0[o.data.type];
        s.push(`
                cv = ud.${c}.value;
                v = uv.${c};
                offset = ${o.offset / 4};
                ${g};
                `);
      }
    }
  }
  s.push(`
       renderer.buffer.update(buffer);
    `);
  return {
    size: n,
    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", s.join(`
`))
  };
}
let W0 = 0;
const Ls = {
  textureCount: 0,
  uboCount: 0
};
class sf {
  constructor(t) {
    this.destroyed = false;
    this.renderer = t;
    this.systemCheck();
    this.gl = null;
    this.shader = null;
    this.program = null;
    this.cache = {};
    this._uboCache = {};
    this.id = W0++;
  }
  systemCheck() {
    if (!g0()) {
      throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
    }
  }
  contextChange(t) {
    this.gl = t;
    this.reset();
  }
  bind(t, e) {
    t.disposeRunner.add(this);
    t.uniforms.globals = this.renderer.globalUniforms;
    const r = t.program;
    const n = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
    this.shader = t;
    if (this.program !== r) {
      this.program = r;
      this.gl.useProgram(n.program);
    }
    if (!e) {
      Ls.textureCount = 0;
      Ls.uboCount = 0;
      this.syncUniformGroup(t.uniformGroup, Ls);
    }
    return n;
  }
  setUniforms(t) {
    const e = this.shader.program;
    const r = e.glPrograms[this.renderer.CONTEXT_UID];
    e.syncUniforms(r.uniformData, t, this.renderer);
  }
  syncUniformGroup(t, e) {
    const r = this.getGlProgram();
    if (!t.static || t.dirtyId !== r.uniformDirtyGroups[t.id]) {
      r.uniformDirtyGroups[t.id] = t.dirtyId;
      this.syncUniforms(t, r, e);
    }
  }
  syncUniforms(t, e, r) {
    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r);
  }
  createSyncGroups(t) {
    const e = this.getSignature(t, this.shader.program.uniformData, "u");
    this.cache[e] ||= u0(t, this.shader.program.uniformData);
    t.syncUniforms[this.shader.program.id] = this.cache[e];
    return t.syncUniforms[this.shader.program.id];
  }
  syncUniformBufferGroup(t, e) {
    const r = this.getGlProgram();
    if (!t.static || t.dirtyId !== 0 || !r.uniformGroups[t.id]) {
      t.dirtyId = 0;
      const n = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
      t.buffer.update();
      n(r.uniformData, t.uniforms, this.renderer, Ls, t.buffer);
    }
    this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e]);
  }
  createSyncBufferGroup(t, e, r) {
    const {
      gl: n
    } = this.renderer;
    this.renderer.buffer.bind(t.buffer);
    const s = this.gl.getUniformBlockIndex(e.program, r);
    e.uniformBufferBindings[r] = this.shader.uniformBindCount;
    n.uniformBlockBinding(e.program, s, this.shader.uniformBindCount);
    this.shader.uniformBindCount++;
    const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
    let o = this._uboCache[a];
    o ||= this._uboCache[a] = V0(t, this.shader.program.uniformData);
    if (t.autoManage) {
      const l = new Float32Array(o.size / 4);
      t.buffer.update(l);
    }
    e.uniformGroups[t.id] = o.syncFunc;
    return e.uniformGroups[t.id];
  }
  getSignature(t, e, r) {
    const n = t.uniforms;
    const s = [`${r}-`];
    for (const a in n) {
      s.push(a);
      if (e[a]) {
        s.push(e[a].type);
      }
    }
    return s.join("-");
  }
  getGlProgram() {
    if (this.shader) {
      return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
    } else {
      return null;
    }
  }
  generateProgram(t) {
    const e = this.gl;
    const r = t.program;
    const n = k0(e, r);
    r.glPrograms[this.renderer.CONTEXT_UID] = n;
    return n;
  }
  reset() {
    this.program = null;
    this.shader = null;
  }
  disposeShader(t) {
    if (this.shader === t) {
      this.shader = null;
    }
  }
  destroy() {
    this.renderer = null;
    this.destroyed = true;
  }
}
sf.extension = {
  type: rt.RendererSystem,
  name: "shader"
};
ot.add(sf);
class ya {
  constructor(t) {
    this.renderer = t;
  }
  run(t) {
    const {
      renderer: e
    } = this;
    e.runners.init.emit(e.options);
    if (t.hello) {
      console.log(`PixiJS 7.4.2 - ${e.rendererLogId} - https://pixijs.com`);
    }
    e.resize(e.screen.width, e.screen.height);
  }
  destroy() {}
}
ya.defaultOptions = {
  hello: false
};
ya.extension = {
  type: [rt.RendererSystem, rt.CanvasRendererSystem],
  name: "startup"
};
ot.add(ya);
function j0(i, t = []) {
  t[q.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.ADD] = [i.ONE, i.ONE];
  t[q.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.NONE] = [0, 0];
  t[q.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE];
  t[q.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA];
  t[q.SRC_IN] = [i.DST_ALPHA, i.ZERO];
  t[q.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO];
  t[q.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA];
  t[q.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE];
  t[q.DST_IN] = [i.ZERO, i.SRC_ALPHA];
  t[q.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA];
  t[q.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA];
  t[q.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA];
  t[q.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD];
  return t;
}
const X0 = 0;
const z0 = 1;
const q0 = 2;
const Y0 = 3;
const K0 = 4;
const Z0 = 5;
const af = class $h {
  constructor() {
    this.gl = null;
    this.stateId = 0;
    this.polygonOffset = 0;
    this.blendMode = q.NONE;
    this._blendEq = false;
    this.map = [];
    this.map[X0] = this.setBlend;
    this.map[z0] = this.setOffset;
    this.map[q0] = this.setCullFace;
    this.map[Y0] = this.setDepthTest;
    this.map[K0] = this.setFrontFace;
    this.map[Z0] = this.setDepthMask;
    this.checks = [];
    this.defaultState = new Nr();
    this.defaultState.blend = true;
  }
  contextChange(t) {
    this.gl = t;
    this.blendModes = j0(t);
    this.set(this.defaultState);
    this.reset();
  }
  set(t) {
    t = t || this.defaultState;
    if (this.stateId !== t.data) {
      let e = this.stateId ^ t.data;
      let r = 0;
      while (e) {
        if (e & 1) {
          this.map[r].call(this, !!(t.data & 1 << r));
        }
        e = e >> 1;
        r++;
      }
      this.stateId = t.data;
    }
    for (let e = 0; e < this.checks.length; e++) {
      this.checks[e](this, t);
    }
  }
  forceState(t) {
    t = t || this.defaultState;
    for (let e = 0; e < this.map.length; e++) {
      this.map[e].call(this, !!(t.data & 1 << e));
    }
    for (let e = 0; e < this.checks.length; e++) {
      this.checks[e](this, t);
    }
    this.stateId = t.data;
  }
  setBlend(t) {
    this.updateCheck($h.checkBlendMode, t);
    this.gl[t ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(t) {
    this.updateCheck($h.checkPolygonOffset, t);
    this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  setDepthTest(t) {
    this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  setDepthMask(t) {
    this.gl.depthMask(t);
  }
  setCullFace(t) {
    this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  setFrontFace(t) {
    this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
  }
  setBlendMode(t) {
    if (t === this.blendMode) {
      return;
    }
    this.blendMode = t;
    const e = this.blendModes[t];
    const r = this.gl;
    if (e.length === 2) {
      r.blendFunc(e[0], e[1]);
    } else {
      r.blendFuncSeparate(e[0], e[1], e[2], e[3]);
    }
    if (e.length === 6) {
      this._blendEq = true;
      r.blendEquationSeparate(e[4], e[5]);
    } else if (this._blendEq) {
      this._blendEq = false;
      r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD);
    }
  }
  setPolygonOffset(t, e) {
    this.gl.polygonOffset(t, e);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
    this.forceState(this.defaultState);
    this._blendEq = true;
    this.blendMode = -1;
    this.setBlendMode(0);
  }
  updateCheck(t, e) {
    const r = this.checks.indexOf(t);
    if (e && r === -1) {
      this.checks.push(t);
    } else if (!e && r !== -1) {
      this.checks.splice(r, 1);
    }
  }
  static checkBlendMode(t, e) {
    t.setBlendMode(e.blendMode);
  }
  static checkPolygonOffset(t, e) {
    t.setPolygonOffset(1, e.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
af.extension = {
  type: rt.RendererSystem,
  name: "state"
};
let Q0 = af;
ot.add(Q0);
class of extends xn {
  constructor() {
    super(...arguments);
    this.runners = {};
    this._systemsHash = {};
  }
  setup(t) {
    this.addRunners(...t.runners);
    const e = (t.priority ?? []).filter(n => t.systems[n]);
    const r = [...e, ...Object.keys(t.systems).filter(n => !e.includes(n))];
    for (const n of r) {
      this.addSystem(t.systems[n], n);
    }
  }
  addRunners(...t) {
    t.forEach(e => {
      this.runners[e] = new ur(e);
    });
  }
  addSystem(t, e) {
    const r = new t(this);
    if (this[e]) {
      throw new Error(`Whoops! The name "${e}" is already in use`);
    }
    this[e] = r;
    this._systemsHash[e] = r;
    for (const n in this.runners) {
      this.runners[n].add(r);
    }
    return this;
  }
  emitWithCustomOptions(t, e) {
    const r = Object.keys(this._systemsHash);
    t.items.forEach(n => {
      const s = r.find(a => this._systemsHash[a] === n);
      n[t.name](e[s]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach(t => {
      t.destroy();
    });
    this._systemsHash = {};
  }
}
const Wn = class ea {
  constructor(t) {
    this.renderer = t;
    this.count = 0;
    this.checkCount = 0;
    this.maxIdle = ea.defaultMaxIdle;
    this.checkCountMax = ea.defaultCheckCountMax;
    this.mode = ea.defaultMode;
  }
  postrender() {
    if (this.renderer.objectRenderer.renderingToScreen) {
      this.count++;
      if (this.mode !== cl.MANUAL) {
        this.checkCount++;
        if (this.checkCount > this.checkCountMax) {
          this.checkCount = 0;
          this.run();
        }
      }
    }
  }
  run() {
    const t = this.renderer.texture;
    const e = t.managedTextures;
    let r = false;
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      if (s.resource && this.count - s.touched > this.maxIdle) {
        t.destroyTexture(s, true);
        e[n] = null;
        r = true;
      }
    }
    if (r) {
      let n = 0;
      for (let s = 0; s < e.length; s++) {
        if (e[s] !== null) {
          e[n++] = e[s];
        }
      }
      e.length = n;
    }
  }
  unload(t) {
    const e = this.renderer.texture;
    const r = t._texture;
    if (r && !r.framebuffer) {
      e.destroyTexture(r);
    }
    for (let n = t.children.length - 1; n >= 0; n--) {
      this.unload(t.children[n]);
    }
  }
  destroy() {
    this.renderer = null;
  }
};
Wn.defaultMode = cl.AUTO;
Wn.defaultMaxIdle = 3600;
Wn.defaultCheckCountMax = 600;
Wn.extension = {
  type: rt.RendererSystem,
  name: "textureGC"
};
let Si = Wn;
ot.add(Si);
class Ko {
  constructor(t) {
    this.texture = t;
    this.width = -1;
    this.height = -1;
    this.dirtyId = -1;
    this.dirtyStyleId = -1;
    this.mipmap = false;
    this.wrapMode = 33071;
    this.type = mt.UNSIGNED_BYTE;
    this.internalFormat = Z.RGBA;
    this.samplerType = 0;
  }
}
function J0(i) {
  let t;
  if ("WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext) {
    t = {
      [i.RGB]: ct.FLOAT,
      [i.RGBA]: ct.FLOAT,
      [i.ALPHA]: ct.FLOAT,
      [i.LUMINANCE]: ct.FLOAT,
      [i.LUMINANCE_ALPHA]: ct.FLOAT,
      [i.R8]: ct.FLOAT,
      [i.R8_SNORM]: ct.FLOAT,
      [i.RG8]: ct.FLOAT,
      [i.RG8_SNORM]: ct.FLOAT,
      [i.RGB8]: ct.FLOAT,
      [i.RGB8_SNORM]: ct.FLOAT,
      [i.RGB565]: ct.FLOAT,
      [i.RGBA4]: ct.FLOAT,
      [i.RGB5_A1]: ct.FLOAT,
      [i.RGBA8]: ct.FLOAT,
      [i.RGBA8_SNORM]: ct.FLOAT,
      [i.RGB10_A2]: ct.FLOAT,
      [i.RGB10_A2UI]: ct.FLOAT,
      [i.SRGB8]: ct.FLOAT,
      [i.SRGB8_ALPHA8]: ct.FLOAT,
      [i.R16F]: ct.FLOAT,
      [i.RG16F]: ct.FLOAT,
      [i.RGB16F]: ct.FLOAT,
      [i.RGBA16F]: ct.FLOAT,
      [i.R32F]: ct.FLOAT,
      [i.RG32F]: ct.FLOAT,
      [i.RGB32F]: ct.FLOAT,
      [i.RGBA32F]: ct.FLOAT,
      [i.R11F_G11F_B10F]: ct.FLOAT,
      [i.RGB9_E5]: ct.FLOAT,
      [i.R8I]: ct.INT,
      [i.R8UI]: ct.UINT,
      [i.R16I]: ct.INT,
      [i.R16UI]: ct.UINT,
      [i.R32I]: ct.INT,
      [i.R32UI]: ct.UINT,
      [i.RG8I]: ct.INT,
      [i.RG8UI]: ct.UINT,
      [i.RG16I]: ct.INT,
      [i.RG16UI]: ct.UINT,
      [i.RG32I]: ct.INT,
      [i.RG32UI]: ct.UINT,
      [i.RGB8I]: ct.INT,
      [i.RGB8UI]: ct.UINT,
      [i.RGB16I]: ct.INT,
      [i.RGB16UI]: ct.UINT,
      [i.RGB32I]: ct.INT,
      [i.RGB32UI]: ct.UINT,
      [i.RGBA8I]: ct.INT,
      [i.RGBA8UI]: ct.UINT,
      [i.RGBA16I]: ct.INT,
      [i.RGBA16UI]: ct.UINT,
      [i.RGBA32I]: ct.INT,
      [i.RGBA32UI]: ct.UINT,
      [i.DEPTH_COMPONENT16]: ct.FLOAT,
      [i.DEPTH_COMPONENT24]: ct.FLOAT,
      [i.DEPTH_COMPONENT32F]: ct.FLOAT,
      [i.DEPTH_STENCIL]: ct.FLOAT,
      [i.DEPTH24_STENCIL8]: ct.FLOAT,
      [i.DEPTH32F_STENCIL8]: ct.FLOAT
    };
  } else {
    t = {
      [i.RGB]: ct.FLOAT,
      [i.RGBA]: ct.FLOAT,
      [i.ALPHA]: ct.FLOAT,
      [i.LUMINANCE]: ct.FLOAT,
      [i.LUMINANCE_ALPHA]: ct.FLOAT,
      [i.DEPTH_STENCIL]: ct.FLOAT
    };
  }
  return t;
}
function t_(i) {
  let t;
  if ("WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext) {
    t = {
      [mt.UNSIGNED_BYTE]: {
        [Z.RGBA]: i.RGBA8,
        [Z.RGB]: i.RGB8,
        [Z.RG]: i.RG8,
        [Z.RED]: i.R8,
        [Z.RGBA_INTEGER]: i.RGBA8UI,
        [Z.RGB_INTEGER]: i.RGB8UI,
        [Z.RG_INTEGER]: i.RG8UI,
        [Z.RED_INTEGER]: i.R8UI,
        [Z.ALPHA]: i.ALPHA,
        [Z.LUMINANCE]: i.LUMINANCE,
        [Z.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
      },
      [mt.BYTE]: {
        [Z.RGBA]: i.RGBA8_SNORM,
        [Z.RGB]: i.RGB8_SNORM,
        [Z.RG]: i.RG8_SNORM,
        [Z.RED]: i.R8_SNORM,
        [Z.RGBA_INTEGER]: i.RGBA8I,
        [Z.RGB_INTEGER]: i.RGB8I,
        [Z.RG_INTEGER]: i.RG8I,
        [Z.RED_INTEGER]: i.R8I
      },
      [mt.UNSIGNED_SHORT]: {
        [Z.RGBA_INTEGER]: i.RGBA16UI,
        [Z.RGB_INTEGER]: i.RGB16UI,
        [Z.RG_INTEGER]: i.RG16UI,
        [Z.RED_INTEGER]: i.R16UI,
        [Z.DEPTH_COMPONENT]: i.DEPTH_COMPONENT16
      },
      [mt.SHORT]: {
        [Z.RGBA_INTEGER]: i.RGBA16I,
        [Z.RGB_INTEGER]: i.RGB16I,
        [Z.RG_INTEGER]: i.RG16I,
        [Z.RED_INTEGER]: i.R16I
      },
      [mt.UNSIGNED_INT]: {
        [Z.RGBA_INTEGER]: i.RGBA32UI,
        [Z.RGB_INTEGER]: i.RGB32UI,
        [Z.RG_INTEGER]: i.RG32UI,
        [Z.RED_INTEGER]: i.R32UI,
        [Z.DEPTH_COMPONENT]: i.DEPTH_COMPONENT24
      },
      [mt.INT]: {
        [Z.RGBA_INTEGER]: i.RGBA32I,
        [Z.RGB_INTEGER]: i.RGB32I,
        [Z.RG_INTEGER]: i.RG32I,
        [Z.RED_INTEGER]: i.R32I
      },
      [mt.FLOAT]: {
        [Z.RGBA]: i.RGBA32F,
        [Z.RGB]: i.RGB32F,
        [Z.RG]: i.RG32F,
        [Z.RED]: i.R32F,
        [Z.DEPTH_COMPONENT]: i.DEPTH_COMPONENT32F
      },
      [mt.HALF_FLOAT]: {
        [Z.RGBA]: i.RGBA16F,
        [Z.RGB]: i.RGB16F,
        [Z.RG]: i.RG16F,
        [Z.RED]: i.R16F
      },
      [mt.UNSIGNED_SHORT_5_6_5]: {
        [Z.RGB]: i.RGB565
      },
      [mt.UNSIGNED_SHORT_4_4_4_4]: {
        [Z.RGBA]: i.RGBA4
      },
      [mt.UNSIGNED_SHORT_5_5_5_1]: {
        [Z.RGBA]: i.RGB5_A1
      },
      [mt.UNSIGNED_INT_2_10_10_10_REV]: {
        [Z.RGBA]: i.RGB10_A2,
        [Z.RGBA_INTEGER]: i.RGB10_A2UI
      },
      [mt.UNSIGNED_INT_10F_11F_11F_REV]: {
        [Z.RGB]: i.R11F_G11F_B10F
      },
      [mt.UNSIGNED_INT_5_9_9_9_REV]: {
        [Z.RGB]: i.RGB9_E5
      },
      [mt.UNSIGNED_INT_24_8]: {
        [Z.DEPTH_STENCIL]: i.DEPTH24_STENCIL8
      },
      [mt.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
        [Z.DEPTH_STENCIL]: i.DEPTH32F_STENCIL8
      }
    };
  } else {
    t = {
      [mt.UNSIGNED_BYTE]: {
        [Z.RGBA]: i.RGBA,
        [Z.RGB]: i.RGB,
        [Z.ALPHA]: i.ALPHA,
        [Z.LUMINANCE]: i.LUMINANCE,
        [Z.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
      },
      [mt.UNSIGNED_SHORT_5_6_5]: {
        [Z.RGB]: i.RGB
      },
      [mt.UNSIGNED_SHORT_4_4_4_4]: {
        [Z.RGBA]: i.RGBA
      },
      [mt.UNSIGNED_SHORT_5_5_5_1]: {
        [Z.RGBA]: i.RGBA
      }
    };
  }
  return t;
}
class hf {
  constructor(t) {
    this.renderer = t;
    this.boundTextures = [];
    this.currentLocation = -1;
    this.managedTextures = [];
    this._unknownBoundTextures = false;
    this.unknownTexture = new Tt();
    this.hasIntegerTextures = false;
  }
  contextChange() {
    const t = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    this.webGLVersion = this.renderer.context.webGLVersion;
    this.internalFormats = t_(t);
    this.samplerTypes = J0(t);
    const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = e;
    for (let n = 0; n < e; n++) {
      this.boundTextures[n] = null;
    }
    this.emptyTextures = {};
    const r = new Ko(t.createTexture());
    t.bindTexture(t.TEXTURE_2D, r.texture);
    t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4));
    this.emptyTextures[t.TEXTURE_2D] = r;
    this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Ko(t.createTexture());
    t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
    for (let n = 0; n < 6; n++) {
      t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    }
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR);
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
    for (let n = 0; n < this.boundTextures.length; n++) {
      this.bind(null, n);
    }
  }
  bind(t, e = 0) {
    const {
      gl: r
    } = this;
    t = t == null ? undefined : t.castToBaseTexture();
    if ((t == null ? undefined : t.valid) && !t.parentTextureArray) {
      t.touched = this.renderer.textureGC.count;
      const n = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
      if (this.boundTextures[e] !== t) {
        if (this.currentLocation !== e) {
          this.currentLocation = e;
          r.activeTexture(r.TEXTURE0 + e);
        }
        r.bindTexture(t.target, n.texture);
      }
      if (n.dirtyId !== t.dirtyId) {
        if (this.currentLocation !== e) {
          this.currentLocation = e;
          r.activeTexture(r.TEXTURE0 + e);
        }
        this.updateTexture(t);
      } else if (n.dirtyStyleId !== t.dirtyStyleId) {
        this.updateTextureStyle(t);
      }
      this.boundTextures[e] = t;
    } else {
      if (this.currentLocation !== e) {
        this.currentLocation = e;
        r.activeTexture(r.TEXTURE0 + e);
      }
      r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture);
      this.boundTextures[e] = null;
    }
  }
  reset() {
    this._unknownBoundTextures = true;
    this.hasIntegerTextures = false;
    this.currentLocation = -1;
    for (let t = 0; t < this.boundTextures.length; t++) {
      this.boundTextures[t] = this.unknownTexture;
    }
  }
  unbind(t) {
    const {
      gl: e,
      boundTextures: r
    } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = false;
      for (let n = 0; n < r.length; n++) {
        if (r[n] === this.unknownTexture) {
          this.bind(null, n);
        }
      }
    }
    for (let n = 0; n < r.length; n++) {
      if (r[n] === t) {
        if (this.currentLocation !== n) {
          e.activeTexture(e.TEXTURE0 + n);
          this.currentLocation = n;
        }
        e.bindTexture(t.target, this.emptyTextures[t.target].texture);
        r[n] = null;
      }
    }
  }
  ensureSamplerType(t) {
    const {
      boundTextures: e,
      hasIntegerTextures: r,
      CONTEXT_UID: n
    } = this;
    if (r) {
      for (let s = t - 1; s >= 0; --s) {
        const a = e[s];
        if (a && a._glTextures[n].samplerType !== ct.FLOAT) {
          this.renderer.texture.unbind(a);
        }
      }
    }
  }
  initTexture(t) {
    const e = new Ko(this.gl.createTexture());
    e.dirtyId = -1;
    t._glTextures[this.CONTEXT_UID] = e;
    this.managedTextures.push(t);
    t.on("dispose", this.destroyTexture, this);
    return e;
  }
  initTextureType(t, e) {
    var r;
    e.internalFormat = ((r = this.internalFormats[t.type]) == null ? undefined : r[t.format]) ?? t.format;
    e.samplerType = this.samplerTypes[e.internalFormat] ?? ct.FLOAT;
    if (this.webGLVersion === 2 && t.type === mt.HALF_FLOAT) {
      e.type = this.gl.HALF_FLOAT;
    } else {
      e.type = t.type;
    }
  }
  updateTexture(t) {
    var n;
    const e = t._glTextures[this.CONTEXT_UID];
    if (!e) {
      return;
    }
    const r = this.renderer;
    this.initTextureType(t, e);
    if ((n = t.resource) == null ? undefined : n.upload(r, t, e)) {
      if (e.samplerType !== ct.FLOAT) {
        this.hasIntegerTextures = true;
      }
    } else {
      const s = t.realWidth;
      const a = t.realHeight;
      const o = r.gl;
      if (e.width !== s || e.height !== a || e.dirtyId < 0) {
        e.width = s;
        e.height = a;
        o.texImage2D(t.target, 0, e.internalFormat, s, a, 0, t.format, e.type, null);
      }
    }
    if (t.dirtyStyleId !== e.dirtyStyleId) {
      this.updateTextureStyle(t);
    }
    e.dirtyId = t.dirtyId;
  }
  destroyTexture(t, e) {
    const {
      gl: r
    } = this;
    t = t.castToBaseTexture();
    if (t._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
      const n = this.managedTextures.indexOf(t);
      if (n !== -1) {
        Pi(this.managedTextures, n, 1);
      }
    }
  }
  updateTextureStyle(t) {
    var r;
    const e = t._glTextures[this.CONTEXT_UID];
    if (e) {
      if ((t.mipmap === Br.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo) {
        e.mipmap = false;
      } else {
        e.mipmap = t.mipmap >= 1;
      }
      if (this.webGLVersion !== 2 && !t.isPowerOfTwo) {
        e.wrapMode = Yr.CLAMP;
      } else {
        e.wrapMode = t.wrapMode;
      }
      if ((r = t.resource) == null || !r.style(this.renderer, t, e)) {
        this.setStyle(t, e);
      }
      e.dirtyStyleId = t.dirtyStyleId;
    }
  }
  setStyle(t, e) {
    const r = this.gl;
    if (e.mipmap && t.mipmap !== Br.ON_MANUAL) {
      r.generateMipmap(t.target);
    }
    r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode);
    r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode);
    if (e.mipmap) {
      r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
      const n = this.renderer.context.extensions.anisotropicFiltering;
      if (n && t.anisotropicLevel > 0 && t.scaleMode === hr.LINEAR) {
        const s = Math.min(t.anisotropicLevel, r.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        r.texParameterf(t.target, n.TEXTURE_MAX_ANISOTROPY_EXT, s);
      }
    } else {
      r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR : r.NEAREST);
    }
    r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR : r.NEAREST);
  }
  destroy() {
    this.renderer = null;
  }
}
hf.extension = {
  type: rt.RendererSystem,
  name: "texture"
};
ot.add(hf);
class lf {
  constructor(t) {
    this.renderer = t;
  }
  contextChange() {
    this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(t) {
    const {
      gl: e,
      CONTEXT_UID: r
    } = this;
    const n = t._glTransformFeedbacks[r] || this.createGLTransformFeedback(t);
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
  }
  unbind() {
    const {
      gl: t
    } = this;
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(t, e) {
    const {
      gl: r,
      renderer: n
    } = this;
    if (e) {
      n.shader.bind(e);
    }
    r.beginTransformFeedback(t);
  }
  endTransformFeedback() {
    const {
      gl: t
    } = this;
    t.endTransformFeedback();
  }
  createGLTransformFeedback(t) {
    const {
      gl: e,
      renderer: r,
      CONTEXT_UID: n
    } = this;
    const s = e.createTransformFeedback();
    t._glTransformFeedbacks[n] = s;
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, s);
    for (let a = 0; a < t.buffers.length; a++) {
      const o = t.buffers[a];
      if (o) {
        r.buffer.update(o);
        o._glBuffers[n].refCount++;
        e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, a, o._glBuffers[n].buffer || null);
      }
    }
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null);
    t.disposeRunner.add(this);
    return s;
  }
  disposeTransformFeedback(t, e) {
    const r = t._glTransformFeedbacks[this.CONTEXT_UID];
    const n = this.gl;
    t.disposeRunner.remove(this);
    const s = this.renderer.buffer;
    if (s) {
      for (let a = 0; a < t.buffers.length; a++) {
        const o = t.buffers[a];
        if (!o) {
          continue;
        }
        const l = o._glBuffers[this.CONTEXT_UID];
        if (l) {
          l.refCount--;
          if (l.refCount === 0 && !e) {
            s.dispose(o, e);
          }
        }
      }
    }
    if (r) {
      if (!e) {
        n.deleteTransformFeedback(r);
      }
      delete t._glTransformFeedbacks[this.CONTEXT_UID];
    }
  }
  destroy() {
    this.renderer = null;
  }
}
lf.extension = {
  type: rt.RendererSystem,
  name: "transformFeedback"
};
ot.add(lf);
class va {
  constructor(t) {
    this.renderer = t;
  }
  init(t) {
    this.screen = new At(0, 0, t.width, t.height);
    this.element = t.view || st.ADAPTER.createCanvas();
    this.resolution = t.resolution || st.RESOLUTION;
    this.autoDensity = !!t.autoDensity;
  }
  resizeView(t, e) {
    this.element.width = Math.round(t * this.resolution);
    this.element.height = Math.round(e * this.resolution);
    const r = this.element.width / this.resolution;
    const n = this.element.height / this.resolution;
    this.screen.width = r;
    this.screen.height = n;
    if (this.autoDensity) {
      this.element.style.width = `${r}px`;
      this.element.style.height = `${n}px`;
    }
    this.renderer.emit("resize", r, n);
    this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(t) {
    var e;
    if (t) {
      if ((e = this.element.parentNode) != null) {
        e.removeChild(this.element);
      }
    }
    this.renderer = null;
    this.element = null;
    this.screen = null;
  }
}
va.defaultOptions = {
  width: 800,
  height: 600,
  resolution: undefined,
  autoDensity: false
};
va.extension = {
  type: [rt.RendererSystem, rt.CanvasRendererSystem],
  name: "_view"
};
ot.add(va);
st.PREFER_ENV = Oi.WEBGL2;
st.STRICT_TEXTURE_CACHE = false;
st.RENDER_OPTIONS = {
  ...ma.defaultOptions,
  ...ga.defaultOptions,
  ...va.defaultOptions,
  ...ya.defaultOptions
};
Object.defineProperties(st, {
  WRAP_MODE: {
    get() {
      return Tt.defaultOptions.wrapMode;
    },
    set(i) {
      vt("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode");
      Tt.defaultOptions.wrapMode = i;
    }
  },
  SCALE_MODE: {
    get() {
      return Tt.defaultOptions.scaleMode;
    },
    set(i) {
      vt("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode");
      Tt.defaultOptions.scaleMode = i;
    }
  },
  MIPMAP_TEXTURES: {
    get() {
      return Tt.defaultOptions.mipmap;
    },
    set(i) {
      vt("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap");
      Tt.defaultOptions.mipmap = i;
    }
  },
  ANISOTROPIC_LEVEL: {
    get() {
      return Tt.defaultOptions.anisotropicLevel;
    },
    set(i) {
      vt("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel");
      Tt.defaultOptions.anisotropicLevel = i;
    }
  },
  FILTER_RESOLUTION: {
    get() {
      vt("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution");
      return De.defaultResolution;
    },
    set(i) {
      De.defaultResolution = i;
    }
  },
  FILTER_MULTISAMPLE: {
    get() {
      vt("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample");
      return De.defaultMultisample;
    },
    set(i) {
      De.defaultMultisample = i;
    }
  },
  SPRITE_MAX_TEXTURES: {
    get() {
      return Ai.defaultMaxTextures;
    },
    set(i) {
      vt("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures");
      Ai.defaultMaxTextures = i;
    }
  },
  SPRITE_BATCH_SIZE: {
    get() {
      return Ai.defaultBatchSize;
    },
    set(i) {
      vt("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize");
      Ai.defaultBatchSize = i;
    }
  },
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return Ai.canUploadSameBuffer;
    },
    set(i) {
      vt("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer");
      Ai.canUploadSameBuffer = i;
    }
  },
  GC_MODE: {
    get() {
      return Si.defaultMode;
    },
    set(i) {
      vt("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode");
      Si.defaultMode = i;
    }
  },
  GC_MAX_IDLE: {
    get() {
      return Si.defaultMaxIdle;
    },
    set(i) {
      vt("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle");
      Si.defaultMaxIdle = i;
    }
  },
  GC_MAX_CHECK_COUNT: {
    get() {
      return Si.defaultCheckCountMax;
    },
    set(i) {
      vt("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax");
      Si.defaultCheckCountMax = i;
    }
  },
  PRECISION_VERTEX: {
    get() {
      return qr.defaultVertexPrecision;
    },
    set(i) {
      vt("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision");
      qr.defaultVertexPrecision = i;
    }
  },
  PRECISION_FRAGMENT: {
    get() {
      return qr.defaultFragmentPrecision;
    },
    set(i) {
      vt("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision");
      qr.defaultFragmentPrecision = i;
    }
  }
});
var Fi = (i => {
  i[i.INTERACTION = 50] = "INTERACTION";
  i[i.HIGH = 25] = "HIGH";
  i[i.NORMAL = 0] = "NORMAL";
  i[i.LOW = -25] = "LOW";
  i[i.UTILITY = -50] = "UTILITY";
  return i;
})(Fi || {});
class Zo {
  constructor(t, e = null, r = 0, n = false) {
    this.next = null;
    this.previous = null;
    this._destroyed = false;
    this.fn = t;
    this.context = e;
    this.priority = r;
    this.once = n;
  }
  match(t, e = null) {
    return this.fn === t && this.context === e;
  }
  emit(t) {
    if (this.fn) {
      if (this.context) {
        this.fn.call(this.context, t);
      } else {
        this.fn(t);
      }
    }
    const e = this.next;
    if (this.once) {
      this.destroy(true);
    }
    if (this._destroyed) {
      this.next = null;
    }
    return e;
  }
  connect(t) {
    this.previous = t;
    if (t.next) {
      t.next.previous = this;
    }
    this.next = t.next;
    t.next = this;
  }
  destroy(t = false) {
    this._destroyed = true;
    this.fn = null;
    this.context = null;
    if (this.previous) {
      this.previous.next = this.next;
    }
    if (this.next) {
      this.next.previous = this.previous;
    }
    const e = this.next;
    this.next = t ? null : e;
    this.previous = null;
    return e;
  }
}
const uf = class $e {
  constructor() {
    this.autoStart = false;
    this.deltaTime = 1;
    this.lastTime = -1;
    this.speed = 1;
    this.started = false;
    this._requestId = null;
    this._maxElapsedMS = 100;
    this._minElapsedMS = 0;
    this._protected = false;
    this._lastFrame = -1;
    this._head = new Zo(null, null, Infinity);
    this.deltaMS = 1 / $e.targetFPMS;
    this.elapsedMS = 1 / $e.targetFPMS;
    this._tick = t => {
      this._requestId = null;
      if (this.started) {
        this.update(t);
        if (this.started && this._requestId === null && this._head.next) {
          this._requestId = requestAnimationFrame(this._tick);
        }
      }
    };
  }
  _requestIfNeeded() {
    if (this._requestId === null && this._head.next) {
      this.lastTime = performance.now();
      this._lastFrame = this.lastTime;
      this._requestId = requestAnimationFrame(this._tick);
    }
  }
  _cancelIfNeeded() {
    if (this._requestId !== null) {
      cancelAnimationFrame(this._requestId);
      this._requestId = null;
    }
  }
  _startIfPossible() {
    if (this.started) {
      this._requestIfNeeded();
    } else if (this.autoStart) {
      this.start();
    }
  }
  add(t, e, r = Fi.NORMAL) {
    return this._addListener(new Zo(t, e, r));
  }
  addOnce(t, e, r = Fi.NORMAL) {
    return this._addListener(new Zo(t, e, r, true));
  }
  _addListener(t) {
    let e = this._head.next;
    let r = this._head;
    if (!e) {
      t.connect(r);
    } else {
      while (e) {
        if (t.priority > e.priority) {
          t.connect(r);
          break;
        }
        r = e;
        e = e.next;
      }
      if (!t.previous) {
        t.connect(r);
      }
    }
    this._startIfPossible();
    return this;
  }
  remove(t, e) {
    let r = this._head.next;
    while (r) {
      if (r.match(t, e)) {
        r = r.destroy();
      } else {
        r = r.next;
      }
    }
    if (!this._head.next) {
      this._cancelIfNeeded();
    }
    return this;
  }
  get count() {
    if (!this._head) {
      return 0;
    }
    let t = 0;
    let e = this._head;
    while (e = e.next) {
      t++;
    }
    return t;
  }
  start() {
    if (!this.started) {
      this.started = true;
      this._requestIfNeeded();
    }
  }
  stop() {
    if (this.started) {
      this.started = false;
      this._cancelIfNeeded();
    }
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      while (t) {
        t = t.destroy(true);
      }
      this._head.destroy();
      this._head = null;
    }
  }
  update(t = performance.now()) {
    let e;
    if (t > this.lastTime) {
      e = this.elapsedMS = t - this.lastTime;
      if (e > this._maxElapsedMS) {
        e = this._maxElapsedMS;
      }
      e *= this.speed;
      if (this._minElapsedMS) {
        const s = t - this._lastFrame | 0;
        if (s < this._minElapsedMS) {
          return;
        }
        this._lastFrame = t - s % this._minElapsedMS;
      }
      this.deltaMS = e;
      this.deltaTime = this.deltaMS * $e.targetFPMS;
      const r = this._head;
      let n = r.next;
      while (n) {
        n = n.emit(this.deltaTime);
      }
      if (!r.next) {
        this._cancelIfNeeded();
      }
    } else {
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    }
    this.lastTime = t;
  }
  get FPS() {
    return 1000 / this.elapsedMS;
  }
  get minFPS() {
    return 1000 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const e = Math.min(this.maxFPS, t);
    const r = Math.min(Math.max(0, e) / 1000, $e.targetFPMS);
    this._maxElapsedMS = 1 / r;
  }
  get maxFPS() {
    if (this._minElapsedMS) {
      return Math.round(1000 / this._minElapsedMS);
    } else {
      return 0;
    }
  }
  set maxFPS(t) {
    if (t === 0) {
      this._minElapsedMS = 0;
    } else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1000);
    }
  }
  static get shared() {
    if (!$e._shared) {
      const t = $e._shared = new $e();
      t.autoStart = true;
      t._protected = true;
    }
    return $e._shared;
  }
  static get system() {
    if (!$e._system) {
      const t = $e._system = new $e();
      t.autoStart = true;
      t._protected = true;
    }
    return $e._system;
  }
};
uf.targetFPMS = 0.06;
let We = uf;
Object.defineProperties(st, {
  TARGET_FPMS: {
    get() {
      return We.targetFPMS;
    },
    set(i) {
      vt("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS");
      We.targetFPMS = i;
    }
  }
});
class cf {
  static init(t) {
    t = Object.assign({
      autoStart: true,
      sharedTicker: false
    }, t);
    Object.defineProperty(this, "ticker", {
      set(e) {
        if (this._ticker) {
          this._ticker.remove(this.render, this);
        }
        this._ticker = e;
        if (e) {
          e.add(this.render, this, Fi.LOW);
        }
      },
      get() {
        return this._ticker;
      }
    });
    this.stop = () => {
      this._ticker.stop();
    };
    this.start = () => {
      this._ticker.start();
    };
    this._ticker = null;
    this.ticker = t.sharedTicker ? We.shared : new We();
    if (t.autoStart) {
      this.start();
    }
  }
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      this.ticker = null;
      t.destroy();
    }
  }
}
cf.extension = rt.Application;
ot.add(cf);
const df = [];
ot.handleByList(rt.Renderer, df);
function e_(i) {
  for (const t of df) {
    if (t.test(i)) {
      return new t(i);
    }
  }
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var r_ = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`;
var i_ = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const n_ = r_;
const ff = i_;
class pf {
  constructor(t) {
    this.renderer = t;
  }
  contextChange(t) {
    let e;
    if (this.renderer.context.webGLVersion === 1) {
      const r = t.getParameter(t.FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.FRAMEBUFFER, null);
      e = t.getParameter(t.SAMPLES);
      t.bindFramebuffer(t.FRAMEBUFFER, r);
    } else {
      const r = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null);
      e = t.getParameter(t.SAMPLES);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, r);
    }
    if (e >= he.HIGH) {
      this.multisample = he.HIGH;
    } else if (e >= he.MEDIUM) {
      this.multisample = he.MEDIUM;
    } else if (e >= he.LOW) {
      this.multisample = he.LOW;
    } else {
      this.multisample = he.NONE;
    }
  }
  destroy() {}
}
pf.extension = {
  type: rt.RendererSystem,
  name: "_multisample"
};
ot.add(pf);
class s_ {
  constructor(t) {
    this.buffer = t || null;
    this.updateID = -1;
    this.byteLength = -1;
    this.refCount = 0;
  }
}
class gf {
  constructor(t) {
    this.renderer = t;
    this.managedBuffers = {};
    this.boundBufferBases = {};
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(true);
    this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(t) {
    const {
      gl: e,
      CONTEXT_UID: r
    } = this;
    const n = t._glBuffers[r] || this.createGLBuffer(t);
    e.bindBuffer(t.type, n.buffer);
  }
  unbind(t) {
    const {
      gl: e
    } = this;
    e.bindBuffer(t, null);
  }
  bindBufferBase(t, e) {
    const {
      gl: r,
      CONTEXT_UID: n
    } = this;
    if (this.boundBufferBases[e] !== t) {
      const s = t._glBuffers[n] || this.createGLBuffer(t);
      this.boundBufferBases[e] = t;
      r.bindBufferBase(r.UNIFORM_BUFFER, e, s.buffer);
    }
  }
  bindBufferRange(t, e, r) {
    const {
      gl: n,
      CONTEXT_UID: s
    } = this;
    r = r || 0;
    const a = t._glBuffers[s] || this.createGLBuffer(t);
    n.bindBufferRange(n.UNIFORM_BUFFER, e || 0, a.buffer, r * 256, 256);
  }
  update(t) {
    const {
      gl: e,
      CONTEXT_UID: r
    } = this;
    const n = t._glBuffers[r] || this.createGLBuffer(t);
    if (t._updateID !== n.updateID) {
      n.updateID = t._updateID;
      e.bindBuffer(t.type, n.buffer);
      if (n.byteLength >= t.data.byteLength) {
        e.bufferSubData(t.type, 0, t.data);
      } else {
        const s = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
        n.byteLength = t.data.byteLength;
        e.bufferData(t.type, t.data, s);
      }
    }
  }
  dispose(t, e) {
    if (!this.managedBuffers[t.id]) {
      return;
    }
    delete this.managedBuffers[t.id];
    const r = t._glBuffers[this.CONTEXT_UID];
    const n = this.gl;
    t.disposeRunner.remove(this);
    if (r) {
      if (!e) {
        n.deleteBuffer(r.buffer);
      }
      delete t._glBuffers[this.CONTEXT_UID];
    }
  }
  disposeAll(t) {
    const e = Object.keys(this.managedBuffers);
    for (let r = 0; r < e.length; r++) {
      this.dispose(this.managedBuffers[e[r]], t);
    }
  }
  createGLBuffer(t) {
    const {
      CONTEXT_UID: e,
      gl: r
    } = this;
    t._glBuffers[e] = new s_(r.createBuffer());
    this.managedBuffers[t.id] = t;
    t.disposeRunner.add(this);
    return t._glBuffers[e];
  }
}
gf.extension = {
  type: rt.RendererSystem,
  name: "buffer"
};
ot.add(gf);
class mf {
  constructor(t) {
    this.renderer = t;
  }
  render(t, e) {
    const r = this.renderer;
    let n;
    let s;
    let a;
    let o;
    if (e) {
      n = e.renderTexture;
      s = e.clear;
      a = e.transform;
      o = e.skipUpdateTransform;
    }
    this.renderingToScreen = !n;
    r.runners.prerender.emit();
    r.emit("prerender");
    r.projection.transform = a;
    if (!r.context.isLost) {
      if (!n) {
        this.lastObjectRendered = t;
      }
      if (!o) {
        const l = t.enableTempParent();
        t.updateTransform();
        t.disableTempParent(l);
      }
      r.renderTexture.bind(n);
      r.batch.currentRenderer.start();
      if (s ?? r.background.clearBeforeRender) {
        r.renderTexture.clear();
      }
      t.render(r);
      r.batch.currentRenderer.flush();
      if (n) {
        if (e.blit) {
          r.framebuffer.blit();
        }
        n.baseTexture.update();
      }
      r.runners.postrender.emit();
      r.projection.transform = null;
      r.emit("postrender");
    }
  }
  destroy() {
    this.renderer = null;
    this.lastObjectRendered = null;
  }
}
mf.extension = {
  type: rt.RendererSystem,
  name: "objectRenderer"
};
ot.add(mf);
const ra = class Vh extends of {
  constructor(t) {
    super();
    this.type = ul.WEBGL;
    t = Object.assign({}, st.RENDER_OPTIONS, t);
    this.gl = null;
    this.CONTEXT_UID = 0;
    this.globalUniforms = new cr({
      projectionMatrix: new jt()
    }, true);
    const e = {
      runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
      systems: Vh.__systems,
      priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
    };
    this.setup(e);
    if ("useContextAlpha" in t) {
      vt("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead");
      t.premultipliedAlpha = t.useContextAlpha && t.useContextAlpha !== "notMultiplied";
      t.backgroundAlpha = t.useContextAlpha === false ? 1 : t.backgroundAlpha;
    }
    this._plugin.rendererPlugins = Vh.__plugins;
    this.options = t;
    this.startup.run(this.options);
  }
  static test(t) {
    if (t != null && t.forceCanvas) {
      return false;
    } else {
      return wd();
    }
  }
  render(t, e) {
    this.objectRenderer.render(t, e);
  }
  resize(t, e) {
    this._view.resizeView(t, e);
  }
  reset() {
    this.runners.reset.emit();
    return this;
  }
  clear() {
    this.renderTexture.bind();
    this.renderTexture.clear();
  }
  destroy(t = false) {
    this.runners.destroy.items.reverse();
    this.emitWithCustomOptions(this.runners.destroy, {
      _view: t
    });
    super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(t) {
    this._view.resolution = t;
    this.runners.resolutionChange.emit(t);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    vt("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead.");
    return this.background.clearBeforeRender;
  }
  get useContextAlpha() {
    vt("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead.");
    return this.context.useContextAlpha;
  }
  get preserveDrawingBuffer() {
    vt("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context");
    return this.context.preserveDrawingBuffer;
  }
  get backgroundColor() {
    vt("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead.");
    return this.background.color;
  }
  set backgroundColor(t) {
    vt("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead.");
    this.background.color = t;
  }
  get backgroundAlpha() {
    vt("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.");
    return this.background.alpha;
  }
  set backgroundAlpha(t) {
    vt("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.");
    this.background.alpha = t;
  }
  get powerPreference() {
    vt("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context");
    return this.context.powerPreference;
  }
  generateTexture(t, e) {
    return this.textureGenerator.generateTexture(t, e);
  }
};
ra.extension = {
  type: rt.Renderer,
  priority: 1
};
ra.__plugins = {};
ra.__systems = {};
let El = ra;
ot.handleByMap(rt.RendererPlugin, El.__plugins);
ot.handleByMap(rt.RendererSystem, El.__systems);
ot.add(El);
class yf extends ns {
  constructor(t, e) {
    const {
      width: r,
      height: n
    } = e || {};
    super(r, n);
    this.items = [];
    this.itemDirtyIds = [];
    for (let s = 0; s < t; s++) {
      const a = new Tt();
      this.items.push(a);
      this.itemDirtyIds.push(-2);
    }
    this.length = t;
    this._load = null;
    this.baseTexture = null;
  }
  initFromArray(t, e) {
    for (let r = 0; r < this.length; r++) {
      if (t[r]) {
        if (t[r].castToBaseTexture) {
          this.addBaseTextureAt(t[r].castToBaseTexture(), r);
        } else if (t[r] instanceof ns) {
          this.addResourceAt(t[r], r);
        } else {
          this.addResourceAt(Fd(t[r], e), r);
        }
      }
    }
  }
  dispose() {
    for (let t = 0, e = this.length; t < e; t++) {
      this.items[t].destroy();
    }
    this.items = null;
    this.itemDirtyIds = null;
    this._load = null;
  }
  addResourceAt(t, e) {
    if (!this.items[e]) {
      throw new Error(`Index ${e} is out of bounds`);
    }
    if (t.valid && !this.valid) {
      this.resize(t.width, t.height);
    }
    this.items[e].setResource(t);
    return this;
  }
  bind(t) {
    if (this.baseTexture !== null) {
      throw new Error("Only one base texture per TextureArray is allowed");
    }
    super.bind(t);
    for (let e = 0; e < this.length; e++) {
      this.items[e].parentTextureArray = t;
      this.items[e].on("update", t.update, t);
    }
  }
  unbind(t) {
    super.unbind(t);
    for (let e = 0; e < this.length; e++) {
      this.items[e].parentTextureArray = null;
      this.items[e].off("update", t.update, t);
    }
  }
  load() {
    if (this._load) {
      return this._load;
    }
    const t = this.items.map(e => e.resource).filter(e => e).map(e => e.load());
    this._load = Promise.all(t).then(() => {
      const {
        realWidth: e,
        realHeight: r
      } = this.items[0];
      this.resize(e, r);
      this.update();
      return Promise.resolve(this);
    });
    return this._load;
  }
}
class a_ extends yf {
  constructor(t, e) {
    const {
      width: r,
      height: n
    } = e || {};
    let s;
    let a;
    if (Array.isArray(t)) {
      s = t;
      a = t.length;
    } else {
      a = t;
    }
    super(a, {
      width: r,
      height: n
    });
    if (s) {
      this.initFromArray(s, e);
    }
  }
  addBaseTextureAt(t, e) {
    if (t.resource) {
      this.addResourceAt(t.resource, e);
    } else {
      throw new Error("ArrayResource does not support RenderTexture");
    }
    return this;
  }
  bind(t) {
    super.bind(t);
    t.target = hn.TEXTURE_2D_ARRAY;
  }
  upload(t, e, r) {
    const {
      length: n,
      itemDirtyIds: s,
      items: a
    } = this;
    const {
      gl: o
    } = t;
    if (r.dirtyId < 0) {
      o.texImage3D(o.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, n, 0, e.format, r.type, null);
    }
    for (let l = 0; l < n; l++) {
      const c = a[l];
      if (s[l] < c.dirtyId) {
        s[l] = c.dirtyId;
        if (c.valid) {
          o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, l, c.resource.width, c.resource.height, 1, e.format, r.type, c.resource.source);
        }
      }
    }
    return true;
  }
}
class vf extends Kr {
  constructor(t) {
    super(t);
  }
  static test(t) {
    const {
      OffscreenCanvas: e
    } = globalThis;
    if (e && t instanceof e) {
      return true;
    } else {
      return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
    }
  }
}
const _f = class jn extends yf {
  constructor(t, e) {
    const {
      width: r,
      height: n,
      autoLoad: s,
      linkBaseTexture: a
    } = e || {};
    if (t && t.length !== jn.SIDES) {
      throw new Error(`Invalid length. Got ${t.length}, expected 6`);
    }
    super(6, {
      width: r,
      height: n
    });
    for (let o = 0; o < jn.SIDES; o++) {
      this.items[o].target = hn.TEXTURE_CUBE_MAP_POSITIVE_X + o;
    }
    this.linkBaseTexture = a !== false;
    if (t) {
      this.initFromArray(t, e);
    }
    if (s !== false) {
      this.load();
    }
  }
  bind(t) {
    super.bind(t);
    t.target = hn.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(t, e, r = this.linkBaseTexture) {
    if (!this.items[e]) {
      throw new Error(`Index ${e} is out of bounds`);
    }
    if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
      if (t.resource) {
        this.addResourceAt(t.resource, e);
      } else {
        throw new Error("CubeResource does not support copying of renderTexture.");
      }
    } else {
      t.target = hn.TEXTURE_CUBE_MAP_POSITIVE_X + e;
      t.parentTextureArray = this.baseTexture;
      this.items[e] = t;
    }
    if (t.valid && !this.valid) {
      this.resize(t.realWidth, t.realHeight);
    }
    this.items[e] = t;
    return this;
  }
  upload(t, e, r) {
    const n = this.itemDirtyIds;
    for (let s = 0; s < jn.SIDES; s++) {
      const a = this.items[s];
      if (n[s] < a.dirtyId || r.dirtyId < e.dirtyId) {
        if (a.valid && a.resource) {
          a.resource.upload(t, a, r);
          n[s] = a.dirtyId;
        } else if (n[s] < -1) {
          t.gl.texImage2D(a.target, 0, r.internalFormat, e.realWidth, e.realHeight, 0, e.format, r.type, null);
          n[s] = -1;
        }
      }
    }
    return true;
  }
  static test(t) {
    return Array.isArray(t) && t.length === jn.SIDES;
  }
};
_f.SIDES = 6;
let o_ = _f;
class an extends Kr {
  constructor(t, e) {
    e = e || {};
    let r;
    let n;
    let s;
    if (typeof t == "string") {
      r = an.EMPTY;
      n = t;
      s = true;
    } else {
      r = t;
      n = null;
      s = false;
    }
    super(r);
    this.url = n;
    this.crossOrigin = e.crossOrigin ?? true;
    this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null;
    this.ownsImageBitmap = e.ownsImageBitmap ?? s;
    this._load = null;
    if (e.autoLoad !== false) {
      this.load();
    }
  }
  load() {
    if (this._load) {
      return this._load;
    } else {
      this._load = new Promise(async (t, e) => {
        if (this.url === null) {
          t(this);
          return;
        }
        try {
          const r = await st.ADAPTER.fetch(this.url, {
            mode: this.crossOrigin ? "cors" : "no-cors"
          });
          if (this.destroyed) {
            return;
          }
          const n = await r.blob();
          if (this.destroyed) {
            return;
          }
          const s = await createImageBitmap(n, {
            premultiplyAlpha: this.alphaMode === null || this.alphaMode === ke.UNPACK ? "premultiply" : "none"
          });
          if (this.destroyed) {
            s.close();
            return;
          }
          this.source = s;
          this.update();
          t(this);
        } catch (r) {
          if (this.destroyed) {
            return;
          }
          e(r);
          this.onError.emit(r);
        }
      });
      return this._load;
    }
  }
  upload(t, e, r) {
    if (this.source instanceof ImageBitmap) {
      if (typeof this.alphaMode == "number") {
        e.alphaMode = this.alphaMode;
      }
      return super.upload(t, e, r);
    } else {
      this.load();
      return false;
    }
  }
  dispose() {
    if (this.ownsImageBitmap && this.source instanceof ImageBitmap) {
      this.source.close();
    }
    super.dispose();
    this._load = null;
  }
  static test(t) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap !== "undefined" && (typeof t == "string" || t instanceof ImageBitmap);
  }
  static get EMPTY() {
    an._EMPTY = an._EMPTY ?? st.ADAPTER.createCanvas(0, 0);
    return an._EMPTY;
  }
}
const Wh = class ia extends Kr {
  constructor(t, e) {
    e = e || {};
    super(st.ADAPTER.createCanvas());
    this._width = 0;
    this._height = 0;
    this.svg = t;
    this.scale = e.scale || 1;
    this._overrideWidth = e.width;
    this._overrideHeight = e.height;
    this._resolve = null;
    this._crossorigin = e.crossorigin;
    this._load = null;
    if (e.autoLoad !== false) {
      this.load();
    }
  }
  load() {
    if (this._load) {
      return this._load;
    } else {
      this._load = new Promise(t => {
        this._resolve = () => {
          this.update();
          t(this);
        };
        if (ia.SVG_XML.test(this.svg.trim())) {
          if (!btoa) {
            throw new Error("Your browser doesn't support base64 conversions.");
          }
          this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
        }
        this._loadSvg();
      });
      return this._load;
    }
  }
  _loadSvg() {
    const t = new Image();
    Kr.crossOrigin(t, this.svg, this._crossorigin);
    t.src = this.svg;
    t.onerror = e => {
      if (this._resolve) {
        t.onerror = null;
        this.onError.emit(e);
      }
    };
    t.onload = () => {
      if (!this._resolve) {
        return;
      }
      const e = t.width;
      const r = t.height;
      if (!e || !r) {
        throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      }
      let n = e * this.scale;
      let s = r * this.scale;
      if (this._overrideWidth || this._overrideHeight) {
        n = this._overrideWidth || this._overrideHeight / r * e;
        s = this._overrideHeight || this._overrideWidth / e * r;
      }
      n = Math.round(n);
      s = Math.round(s);
      const a = this.source;
      a.width = n;
      a.height = s;
      a._pixiId = `canvas_${hi()}`;
      a.getContext("2d").drawImage(t, 0, 0, e, r, 0, 0, n, s);
      this._resolve();
      this._resolve = null;
    };
  }
  static getSize(t) {
    const e = ia.SVG_SIZE.exec(t);
    const r = {};
    if (e) {
      r[e[1]] = Math.round(parseFloat(e[3]));
      r[e[5]] = Math.round(parseFloat(e[7]));
    }
    return r;
  }
  dispose() {
    super.dispose();
    this._resolve = null;
    this._crossorigin = null;
  }
  static test(t, e) {
    return e === "svg" || typeof t == "string" && t.startsWith("data:image/svg+xml") || typeof t == "string" && ia.SVG_XML.test(t);
  }
};
Wh.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
Wh.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
let jh = Wh;
class h_ extends Kr {
  constructor(t) {
    super(t);
  }
  static test(t) {
    return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame;
  }
}
const Xh = class zh extends Kr {
  constructor(t, e) {
    e = e || {};
    if (!(t instanceof HTMLVideoElement)) {
      const r = document.createElement("video");
      if (e.autoLoad !== false) {
        r.setAttribute("preload", "auto");
      }
      if (e.playsinline !== false) {
        r.setAttribute("webkit-playsinline", "");
        r.setAttribute("playsinline", "");
      }
      if (e.muted === true) {
        r.setAttribute("muted", "");
        r.muted = true;
      }
      if (e.loop === true) {
        r.setAttribute("loop", "");
      }
      if (e.autoPlay !== false) {
        r.setAttribute("autoplay", "");
      }
      if (typeof t == "string") {
        t = [t];
      }
      const n = t[0].src || t[0];
      Kr.crossOrigin(r, n, e.crossorigin);
      for (let s = 0; s < t.length; ++s) {
        const a = document.createElement("source");
        let {
          src: o,
          mime: l
        } = t[s];
        o = o || t[s];
        if (o.startsWith("data:")) {
          l = o.slice(5, o.indexOf(";"));
        } else if (!o.startsWith("blob:")) {
          const c = o.split("?").shift().toLowerCase();
          const p = c.slice(c.lastIndexOf(".") + 1);
          l = l || zh.MIME_TYPES[p] || `video/${p}`;
        }
        a.src = o;
        if (l) {
          a.type = l;
        }
        r.appendChild(a);
      }
      t = r;
    }
    super(t);
    this.noSubImage = true;
    this._autoUpdate = true;
    this._isConnectedToTicker = false;
    this._updateFPS = e.updateFPS || 0;
    this._msToNextUpdate = 0;
    this.autoPlay = e.autoPlay !== false;
    this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this);
    this._videoFrameRequestCallbackHandle = null;
    this._load = null;
    this._resolve = null;
    this._reject = null;
    this._onCanPlay = this._onCanPlay.bind(this);
    this._onError = this._onError.bind(this);
    this._onPlayStart = this._onPlayStart.bind(this);
    this._onPlayStop = this._onPlayStop.bind(this);
    this._onSeeked = this._onSeeked.bind(this);
    if (e.autoLoad !== false) {
      this.load();
    }
  }
  update(t = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const e = We.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
      }
      if (!this._updateFPS || this._msToNextUpdate <= 0) {
        super.update();
        this._msToNextUpdate = this._updateFPS ? Math.floor(1000 / this._updateFPS) : 0;
      }
    }
  }
  _videoFrameRequestCallback() {
    this.update();
    if (this.destroyed) {
      this._videoFrameRequestCallbackHandle = null;
    } else {
      this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);
    }
  }
  load() {
    if (this._load) {
      return this._load;
    }
    const t = this.source;
    if ((t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height) {
      t.complete = true;
    }
    t.addEventListener("play", this._onPlayStart);
    t.addEventListener("pause", this._onPlayStop);
    t.addEventListener("seeked", this._onSeeked);
    if (this._isSourceReady()) {
      this._onCanPlay();
    } else {
      t.addEventListener("canplay", this._onCanPlay);
      t.addEventListener("canplaythrough", this._onCanPlay);
      t.addEventListener("error", this._onError, true);
    }
    this._load = new Promise((e, r) => {
      if (this.valid) {
        e(this);
      } else {
        this._resolve = e;
        this._reject = r;
        t.load();
      }
    });
    return this._load;
  }
  _onError(t) {
    this.source.removeEventListener("error", this._onError, true);
    this.onError.emit(t);
    if (this._reject) {
      this._reject(t);
      this._reject = null;
      this._resolve = null;
    }
  }
  _isSourcePlaying() {
    const t = this.source;
    return !t.paused && !t.ended;
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    if (!this.valid) {
      this._onCanPlay();
    }
    this._configureAutoUpdate();
  }
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  _onSeeked() {
    if (this._autoUpdate && !this._isSourcePlaying()) {
      this._msToNextUpdate = 0;
      this.update();
      this._msToNextUpdate = 0;
    }
  }
  _onCanPlay() {
    const t = this.source;
    t.removeEventListener("canplay", this._onCanPlay);
    t.removeEventListener("canplaythrough", this._onCanPlay);
    const e = this.valid;
    this._msToNextUpdate = 0;
    this.update();
    this._msToNextUpdate = 0;
    if (!e && this._resolve) {
      this._resolve(this);
      this._resolve = null;
      this._reject = null;
    }
    if (this._isSourcePlaying()) {
      this._onPlayStart();
    } else if (this.autoPlay) {
      t.play();
    }
  }
  dispose() {
    this._configureAutoUpdate();
    const t = this.source;
    if (t) {
      t.removeEventListener("play", this._onPlayStart);
      t.removeEventListener("pause", this._onPlayStop);
      t.removeEventListener("seeked", this._onSeeked);
      t.removeEventListener("canplay", this._onCanPlay);
      t.removeEventListener("canplaythrough", this._onCanPlay);
      t.removeEventListener("error", this._onError, true);
      t.pause();
      t.src = "";
      t.load();
    }
    super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    if (t !== this._autoUpdate) {
      this._autoUpdate = t;
      this._configureAutoUpdate();
    }
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(t) {
    if (t !== this._updateFPS) {
      this._updateFPS = t;
      this._configureAutoUpdate();
    }
  }
  _configureAutoUpdate() {
    if (this._autoUpdate && this._isSourcePlaying()) {
      if (!this._updateFPS && this.source.requestVideoFrameCallback) {
        if (this._isConnectedToTicker) {
          We.shared.remove(this.update, this);
          this._isConnectedToTicker = false;
          this._msToNextUpdate = 0;
        }
        if (this._videoFrameRequestCallbackHandle === null) {
          this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);
        }
      } else {
        if (this._videoFrameRequestCallbackHandle !== null) {
          this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle);
          this._videoFrameRequestCallbackHandle = null;
        }
        if (!this._isConnectedToTicker) {
          We.shared.add(this.update, this);
          this._isConnectedToTicker = true;
          this._msToNextUpdate = 0;
        }
      }
    } else {
      if (this._videoFrameRequestCallbackHandle !== null) {
        this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle);
        this._videoFrameRequestCallbackHandle = null;
      }
      if (this._isConnectedToTicker) {
        We.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
        this._msToNextUpdate = 0;
      }
    }
  }
  static test(t, e) {
    return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || zh.TYPES.includes(e);
  }
};
Xh.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
Xh.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
let xf = Xh;
Bh.push(an, Vd, vf, xf, h_, jh, ka, o_, a_);
Tt.prototype.getDrawableSource = function () {
  const i = this.resource;
  if (i) {
    return i.bitmap || i.source;
  } else {
    return null;
  }
};
bl.prototype._canvasRenderTarget = null;
ut.prototype.patternCache = null;
ut.prototype.tintCache = null;
let Ln;
function yc(i) {
  const t = st.ADAPTER.createCanvas(6, 1);
  const e = t.getContext("2d");
  e.fillStyle = i;
  e.fillRect(0, 0, 6, 1);
  return t;
}
function bf() {
  if (typeof document === "undefined") {
    return false;
  }
  if (Ln !== undefined) {
    return Ln;
  }
  const i = yc("#ff00ff");
  const t = yc("#ffff00");
  const e = st.ADAPTER.createCanvas(6, 1).getContext("2d");
  e.globalCompositeOperation = "multiply";
  e.drawImage(i, 0, 0);
  e.drawImage(t, 2, 0);
  const r = e.getImageData(2, 0, 1, 1);
  if (!r) {
    Ln = false;
  } else {
    const n = r.data;
    Ln = n[0] === 255 && n[1] === 0 && n[2] === 0;
  }
  return Ln;
}
function l_(i = []) {
  if (bf()) {
    i[q.NORMAL] = "source-over";
    i[q.ADD] = "lighter";
    i[q.MULTIPLY] = "multiply";
    i[q.SCREEN] = "screen";
    i[q.OVERLAY] = "overlay";
    i[q.DARKEN] = "darken";
    i[q.LIGHTEN] = "lighten";
    i[q.COLOR_DODGE] = "color-dodge";
    i[q.COLOR_BURN] = "color-burn";
    i[q.HARD_LIGHT] = "hard-light";
    i[q.SOFT_LIGHT] = "soft-light";
    i[q.DIFFERENCE] = "difference";
    i[q.EXCLUSION] = "exclusion";
    i[q.HUE] = "hue";
    i[q.SATURATION] = "saturation";
    i[q.COLOR] = "color";
    i[q.LUMINOSITY] = "luminosity";
  } else {
    i[q.NORMAL] = "source-over";
    i[q.ADD] = "lighter";
    i[q.MULTIPLY] = "source-over";
    i[q.SCREEN] = "source-over";
    i[q.OVERLAY] = "source-over";
    i[q.DARKEN] = "source-over";
    i[q.LIGHTEN] = "source-over";
    i[q.COLOR_DODGE] = "source-over";
    i[q.COLOR_BURN] = "source-over";
    i[q.HARD_LIGHT] = "source-over";
    i[q.SOFT_LIGHT] = "source-over";
    i[q.DIFFERENCE] = "source-over";
    i[q.EXCLUSION] = "source-over";
    i[q.HUE] = "source-over";
    i[q.SATURATION] = "source-over";
    i[q.COLOR] = "source-over";
    i[q.LUMINOSITY] = "source-over";
  }
  i[q.NORMAL_NPM] = i[q.NORMAL];
  i[q.ADD_NPM] = i[q.ADD];
  i[q.SCREEN_NPM] = i[q.SCREEN];
  i[q.SRC_IN] = "source-in";
  i[q.SRC_OUT] = "source-out";
  i[q.SRC_ATOP] = "source-atop";
  i[q.DST_OVER] = "destination-over";
  i[q.DST_IN] = "destination-in";
  i[q.DST_OUT] = "destination-out";
  i[q.DST_ATOP] = "destination-atop";
  i[q.XOR] = "xor";
  i[q.SUBTRACT] = "source-over";
  return i;
}
const u_ = new jt();
class Tf {
  constructor(t) {
    this.activeResolution = 1;
    this.smoothProperty = "imageSmoothingEnabled";
    this.blendModes = l_();
    this._activeBlendMode = null;
    this._projTransform = null;
    this._outerBlend = false;
    this.renderer = t;
  }
  init() {
    const t = this.renderer.background.alpha < 1;
    this.rootContext = this.renderer.view.getContext("2d", {
      alpha: t
    });
    this.activeContext = this.rootContext;
    if (!this.rootContext.imageSmoothingEnabled) {
      const e = this.rootContext;
      if (e.webkitImageSmoothingEnabled) {
        this.smoothProperty = "webkitImageSmoothingEnabled";
      } else if (e.mozImageSmoothingEnabled) {
        this.smoothProperty = "mozImageSmoothingEnabled";
      } else if (e.oImageSmoothingEnabled) {
        this.smoothProperty = "oImageSmoothingEnabled";
      } else if (e.msImageSmoothingEnabled) {
        this.smoothProperty = "msImageSmoothingEnabled";
      }
    }
  }
  setContextTransform(t, e, r) {
    let n = t;
    const s = this._projTransform;
    const a = this.activeResolution;
    r = r || a;
    if (s) {
      n = u_;
      n.copyFrom(t);
      n.prepend(s);
    }
    if (e) {
      this.activeContext.setTransform(n.a * r, n.b * r, n.c * r, n.d * r, n.tx * a | 0, n.ty * a | 0);
    } else {
      this.activeContext.setTransform(n.a * r, n.b * r, n.c * r, n.d * r, n.tx * a, n.ty * a);
    }
  }
  clear(t, e) {
    const {
      activeContext: r,
      renderer: n
    } = this;
    const s = t ? Pt.shared.setValue(t) : this.renderer.background.backgroundColor;
    r.clearRect(0, 0, n.width, n.height);
    if (t) {
      r.globalAlpha = e ?? this.renderer.background.alpha;
      r.fillStyle = s.toHex();
      r.fillRect(0, 0, n.width, n.height);
      r.globalAlpha = 1;
    }
  }
  setBlendMode(t, e) {
    const r = t === q.SRC_IN || t === q.SRC_OUT || t === q.DST_IN || t === q.DST_ATOP;
    if (!e && r) {
      t = q.NORMAL;
    }
    if (this._activeBlendMode !== t) {
      this._activeBlendMode = t;
      this._outerBlend = r;
      this.activeContext.globalCompositeOperation = this.blendModes[t];
    }
  }
  resize() {
    if (this.smoothProperty) {
      this.rootContext[this.smoothProperty] = Tt.defaultOptions.scaleMode === hr.LINEAR;
    }
  }
  invalidateBlendMode() {
    this._activeBlendMode = this.blendModes.indexOf(this.activeContext.globalCompositeOperation);
  }
  destroy() {
    this.renderer = null;
    this.rootContext = null;
    this.activeContext = null;
    this.smoothProperty = null;
  }
}
Tf.extension = {
  type: rt.CanvasRendererSystem,
  name: "canvasContext"
};
ot.add(Tf);
class wf {
  constructor(t) {
    this._foundShapes = [];
    this.renderer = t;
  }
  pushMask(t) {
    const e = this.renderer;
    const r = t.maskObject || t;
    e.canvasContext.activeContext.save();
    const n = this._foundShapes;
    this.recursiveFindShapes(r, n);
    if (n.length > 0) {
      const s = e.canvasContext.activeContext;
      s.beginPath();
      for (let a = 0; a < n.length; a++) {
        const o = n[a];
        const l = o.transform.worldTransform;
        this.renderer.canvasContext.setContextTransform(l);
        this.renderGraphicsShape(o);
      }
      n.length = 0;
      s.clip();
    }
  }
  recursiveFindShapes(t, e) {
    if (t.geometry && t.geometry.graphicsData) {
      e.push(t);
    }
    const {
      children: r
    } = t;
    if (r) {
      for (let n = 0; n < r.length; n++) {
        this.recursiveFindShapes(r[n], e);
      }
    }
  }
  renderGraphicsShape(t) {
    t.finishPoly();
    const e = this.renderer.canvasContext.activeContext;
    const r = t.geometry.graphicsData;
    const n = r.length;
    if (n !== 0) {
      for (let s = 0; s < n; s++) {
        const a = r[s];
        const o = a.shape;
        if (o.type === Zt.POLY) {
          let l = o.points;
          const c = a.holes;
          let p;
          let g;
          let f;
          let v;
          e.moveTo(l[0], l[1]);
          for (let _ = 1; _ < l.length / 2; _++) {
            e.lineTo(l[_ * 2], l[_ * 2 + 1]);
          }
          if (c.length > 0) {
            p = 0;
            f = l[0];
            v = l[1];
            for (let _ = 2; _ + 2 < l.length; _ += 2) {
              p += (l[_] - f) * (l[_ + 3] - v) - (l[_ + 2] - f) * (l[_ + 1] - v);
            }
            for (let _ = 0; _ < c.length; _++) {
              l = c[_].shape.points;
              if (l) {
                g = 0;
                f = l[0];
                v = l[1];
                for (let T = 2; T + 2 < l.length; T += 2) {
                  g += (l[T] - f) * (l[T + 3] - v) - (l[T + 2] - f) * (l[T + 1] - v);
                }
                if (g * p < 0) {
                  e.moveTo(l[0], l[1]);
                  for (let T = 2; T < l.length; T += 2) {
                    e.lineTo(l[T], l[T + 1]);
                  }
                } else {
                  e.moveTo(l[l.length - 2], l[l.length - 1]);
                  for (let T = l.length - 4; T >= 0; T -= 2) {
                    e.lineTo(l[T], l[T + 1]);
                  }
                }
                if (c[_].shape.closeStroke) {
                  e.closePath();
                }
              }
            }
          }
          if (l[0] === l[l.length - 2] && l[1] === l[l.length - 1]) {
            e.closePath();
          }
        } else if (o.type === Zt.RECT) {
          e.rect(o.x, o.y, o.width, o.height);
          e.closePath();
        } else if (o.type === Zt.CIRC) {
          e.arc(o.x, o.y, o.radius, 0, Math.PI * 2);
          e.closePath();
        } else if (o.type === Zt.ELIP) {
          const l = o.width * 2;
          const c = o.height * 2;
          const p = o.x - l / 2;
          const g = o.y - c / 2;
          const f = 0.5522848;
          const v = l / 2 * f;
          const _ = c / 2 * f;
          const T = p + l;
          const A = g + c;
          const E = p + l / 2;
          const I = g + c / 2;
          e.moveTo(p, I);
          e.bezierCurveTo(p, I - _, E - v, g, E, g);
          e.bezierCurveTo(E + v, g, T, I - _, T, I);
          e.bezierCurveTo(T, I + _, E + v, A, E, A);
          e.bezierCurveTo(E - v, A, p, I + _, p, I);
          e.closePath();
        } else if (o.type === Zt.RREC) {
          const l = o.x;
          const c = o.y;
          const p = o.width;
          const g = o.height;
          let f = o.radius;
          const v = Math.min(p, g) / 2;
          f = f > v ? v : f;
          e.moveTo(l, c + f);
          e.lineTo(l, c + g - f);
          e.quadraticCurveTo(l, c + g, l + f, c + g);
          e.lineTo(l + p - f, c + g);
          e.quadraticCurveTo(l + p, c + g, l + p, c + g - f);
          e.lineTo(l + p, c + f);
          e.quadraticCurveTo(l + p, c, l + p - f, c);
          e.lineTo(l + f, c);
          e.quadraticCurveTo(l, c, l, c + f);
          e.closePath();
        }
      }
    }
  }
  popMask(t) {
    t.canvasContext.activeContext.restore();
    t.canvasContext.invalidateBlendMode();
  }
  destroy() {}
}
wf.extension = {
  type: rt.CanvasRendererSystem,
  name: "mask"
};
ot.add(wf);
class Ef {
  constructor(t) {
    this.renderer = t;
  }
  render(t, e) {
    const r = this.renderer;
    if (!r.view) {
      return;
    }
    const n = r.canvasContext;
    let s;
    let a;
    let o;
    let l;
    if (e) {
      s = e.renderTexture;
      a = e.clear;
      o = e.transform;
      l = e.skipUpdateTransform;
    }
    this.renderingToScreen = !s;
    r.emit("prerender");
    const c = r.resolution;
    if (s) {
      s = s.castToBaseTexture();
      if (!s._canvasRenderTarget) {
        s._canvasRenderTarget = new us(s.width, s.height, s.resolution);
        s.resource = new vf(s._canvasRenderTarget.canvas);
        s.valid = true;
      }
      n.activeContext = s._canvasRenderTarget.context;
      r.canvasContext.activeResolution = s._canvasRenderTarget.resolution;
    } else {
      n.activeContext = n.rootContext;
      n.activeResolution = c;
    }
    const p = n.activeContext;
    n._projTransform = o || null;
    if (!s) {
      this.lastObjectRendered = t;
    }
    if (!l) {
      const f = t.enableTempParent();
      t.updateTransform();
      t.disableTempParent(f);
    }
    p.save();
    p.setTransform(1, 0, 0, 1, 0, 0);
    p.globalAlpha = 1;
    n._activeBlendMode = q.NORMAL;
    n._outerBlend = false;
    p.globalCompositeOperation = n.blendModes[q.NORMAL];
    if (a ?? r.background.clearBeforeRender) {
      if (this.renderingToScreen) {
        p.clearRect(0, 0, r.width, r.height);
        const f = r.background;
        if (f.alpha > 0) {
          p.globalAlpha = f.backgroundColor.alpha;
          p.fillStyle = f.backgroundColor.toHex();
          p.fillRect(0, 0, r.width, r.height);
          p.globalAlpha = 1;
        }
      } else {
        s = s;
        s._canvasRenderTarget.clear();
        if (s.clear.alpha > 0) {
          p.globalAlpha = s.clear.alpha;
          p.fillStyle = s.clear.toHex();
          p.fillRect(0, 0, s.realWidth, s.realHeight);
          p.globalAlpha = 1;
        }
      }
    }
    const g = n.activeContext;
    n.activeContext = p;
    t.renderCanvas(r);
    n.activeContext = g;
    p.restore();
    n.activeResolution = c;
    n._projTransform = null;
    r.emit("postrender");
  }
  destroy() {
    this.lastObjectRendered = null;
    this.render = null;
  }
}
Ef.extension = {
  type: rt.CanvasRendererSystem,
  name: "objectRenderer"
};
ot.add(Ef);
const {
  deprecation: Ce
} = zv;
const na = class qh extends of {
  constructor(t) {
    super();
    this.type = ul.CANVAS;
    this.rendererLogId = "Canvas";
    t = Object.assign({}, st.RENDER_OPTIONS, t);
    const e = {
      runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
      systems: qh.__systems,
      priority: ["textureGenerator", "background", "_view", "_plugin", "startup", "mask", "canvasContext", "objectRenderer"]
    };
    this.setup(e);
    if ("useContextAlpha" in t) {
      Ce("7.0.0", "options.useContextAlpha is deprecated, use options.backgroundAlpha instead");
      t.backgroundAlpha = t.useContextAlpha === false ? 1 : t.backgroundAlpha;
    }
    this._plugin.rendererPlugins = qh.__plugins;
    this.options = t;
    this.startup.run(this.options);
  }
  static test() {
    return true;
  }
  generateTexture(t, e) {
    return this.textureGenerator.generateTexture(t, e);
  }
  reset() {}
  render(t, e) {
    this.objectRenderer.render(t, e);
  }
  clear() {
    this.canvasContext.clear();
  }
  destroy(t) {
    this.runners.destroy.items.reverse();
    this.emitWithCustomOptions(this.runners.destroy, {
      _view: t
    });
    super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  resize(t, e) {
    this._view.resizeView(t, e);
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(t) {
    this._view.resolution = t;
    this.runners.resolutionChange.emit(t);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get clearBeforeRender() {
    return this.background.clearBeforeRender;
  }
  get blendModes() {
    Ce("7.0.0", "renderer.blendModes has been deprecated, please use renderer.canvasContext.blendModes instead");
    return this.canvasContext.blendModes;
  }
  get maskManager() {
    Ce("7.0.0", "renderer.maskManager has been deprecated, please use renderer.mask instead");
    return this.mask;
  }
  get refresh() {
    Ce("7.0.0", "renderer.refresh has been deprecated");
    return true;
  }
  get rootContext() {
    Ce("7.0.0", "renderer.rootContext has been deprecated, please use renderer.canvasContext.rootContext instead");
    return this.canvasContext.rootContext;
  }
  get context() {
    Ce("7.0.0", "renderer.context has been deprecated, please use renderer.canvasContext.activeContext instead");
    return this.canvasContext.activeContext;
  }
  get smoothProperty() {
    Ce("7.0.0", "renderer.smoothProperty has been deprecated, please use renderer.canvasContext.smoothProperty instead");
    return this.canvasContext.smoothProperty;
  }
  setBlendMode(t, e) {
    Ce("7.0.0", "renderer.setBlendMode has been deprecated, use renderer.canvasContext.setBlendMode instead");
    this.canvasContext.setBlendMode(t, e);
  }
  invalidateBlendMode() {
    Ce("7.0.0", "renderer.invalidateBlendMode has been deprecated, use renderer.canvasContext.invalidateBlendMode instead");
    this.canvasContext.invalidateBlendMode();
  }
  setContextTransform(t, e, r) {
    Ce("7.0.0", "renderer.setContextTransform has been deprecated, use renderer.canvasContext.setContextTransform instead");
    this.canvasContext.setContextTransform(t, e, r);
  }
  get backgroundColor() {
    Ce("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead.");
    return this.background.color;
  }
  set backgroundColor(t) {
    Ce("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead.");
    this.background.color = t;
  }
  get backgroundAlpha() {
    Ce("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.");
    return this.background.alpha;
  }
  set backgroundAlpha(t) {
    Ce("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.");
    this.background.alpha = t;
  }
  get preserveDrawingBuffer() {
    Ce("7.0.0", "renderer.preserveDrawingBuffer has been deprecated");
    return false;
  }
  get useContextAlpha() {
    Ce("7.0.0", "renderer.useContextAlpha has been deprecated");
    return false;
  }
};
na.extension = {
  type: rt.Renderer,
  priority: 0
};
na.__plugins = {};
na.__systems = {};
let Wa = na;
ot.handleByMap(rt.CanvasRendererPlugin, Wa.__plugins);
ot.handleByMap(rt.CanvasRendererSystem, Wa.__systems);
ot.add(Wa);
const _e = {
  canvas: null,
  getTintedCanvas: (i, t) => {
    const e = i.texture;
    const r = Pt.shared.setValue(t).toHex();
    e.tintCache = e.tintCache || {};
    const n = e.tintCache[r];
    let s;
    if (n) {
      if (n.tintId === e._updateID) {
        return e.tintCache[r];
      }
      s = e.tintCache[r];
    } else {
      s = st.ADAPTER.createCanvas();
    }
    _e.tintMethod(e, t, s);
    s.tintId = e._updateID;
    if (!_e.convertTintToImage) {
      e.tintCache[r] = s;
    }
    return s;
  },
  getTintedPattern: (i, t) => {
    const e = Pt.shared.setValue(t).toHex();
    i.patternCache = i.patternCache || {};
    let r = i.patternCache[e];
    if ((r == null ? undefined : r.tintId) !== i._updateID) {
      _e.canvas ||= st.ADAPTER.createCanvas();
      _e.tintMethod(i, t, _e.canvas);
      r = _e.canvas.getContext("2d").createPattern(_e.canvas, "repeat");
      r.tintId = i._updateID;
      i.patternCache[e] = r;
    }
    return r;
  },
  tintWithMultiply: (i, t, e) => {
    const r = e.getContext("2d");
    const n = i._frame.clone();
    const s = i.baseTexture.resolution;
    n.x *= s;
    n.y *= s;
    n.width *= s;
    n.height *= s;
    e.width = Math.ceil(n.width);
    e.height = Math.ceil(n.height);
    r.save();
    r.fillStyle = Pt.shared.setValue(t).toHex();
    r.fillRect(0, 0, n.width, n.height);
    r.globalCompositeOperation = "multiply";
    const a = i.baseTexture.getDrawableSource();
    r.drawImage(a, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
    r.globalCompositeOperation = "destination-atop";
    r.drawImage(a, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
    r.restore();
  },
  tintWithOverlay: (i, t, e) => {
    const r = e.getContext("2d");
    const n = i._frame.clone();
    const s = i.baseTexture.resolution;
    n.x *= s;
    n.y *= s;
    n.width *= s;
    n.height *= s;
    e.width = Math.ceil(n.width);
    e.height = Math.ceil(n.height);
    r.save();
    r.globalCompositeOperation = "copy";
    r.fillStyle = `#${`00000${(t | 0).toString(16)}`.slice(-6)}`;
    r.fillRect(0, 0, n.width, n.height);
    r.globalCompositeOperation = "destination-atop";
    r.drawImage(i.baseTexture.getDrawableSource(), n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
    r.restore();
  },
  tintWithPerPixel: (i, t, e) => {
    const r = e.getContext("2d");
    const n = i._frame.clone();
    const s = i.baseTexture.resolution;
    n.x *= s;
    n.y *= s;
    n.width *= s;
    n.height *= s;
    e.width = Math.ceil(n.width);
    e.height = Math.ceil(n.height);
    r.save();
    r.globalCompositeOperation = "copy";
    r.drawImage(i.baseTexture.getDrawableSource(), n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
    r.restore();
    const [a, o, l] = Pt.shared.setValue(t).toArray();
    const c = r.getImageData(0, 0, n.width, n.height);
    const p = c.data;
    for (let g = 0; g < p.length; g += 4) {
      p[g + 0] *= a;
      p[g + 1] *= o;
      p[g + 2] *= l;
    }
    r.putImageData(c, 0, 0);
  },
  roundColor: i => {
    vt("7.3.0", "PIXI.canvasUtils.roundColor is deprecated");
    return Pt.shared.setValue(i).round(_e.cacheStepsPerColorChannel).toNumber();
  },
  cacheStepsPerColorChannel: 8,
  convertTintToImage: false,
  canUseMultiply: bf(),
  tintMethod: null
};
_e.tintMethod = _e.canUseMultiply ? _e.tintWithMultiply : _e.tintWithPerPixel;
class _a {
  constructor() {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.rect = null;
    this.updateID = -1;
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
  }
  getRectangle(t) {
    if (this.minX > this.maxX || this.minY > this.maxY) {
      return At.EMPTY;
    } else {
      t = t || new At(0, 0, 1, 1);
      t.x = this.minX;
      t.y = this.minY;
      t.width = this.maxX - this.minX;
      t.height = this.maxY - this.minY;
      return t;
    }
  }
  addPoint(t) {
    this.minX = Math.min(this.minX, t.x);
    this.maxX = Math.max(this.maxX, t.x);
    this.minY = Math.min(this.minY, t.y);
    this.maxY = Math.max(this.maxY, t.y);
  }
  addPointMatrix(t, e) {
    const {
      a: r,
      b: n,
      c: s,
      d: a,
      tx: o,
      ty: l
    } = t;
    const c = r * e.x + s * e.y + o;
    const p = n * e.x + a * e.y + l;
    this.minX = Math.min(this.minX, c);
    this.maxX = Math.max(this.maxX, c);
    this.minY = Math.min(this.minY, p);
    this.maxY = Math.max(this.maxY, p);
  }
  addQuad(t) {
    let e = this.minX;
    let r = this.minY;
    let n = this.maxX;
    let s = this.maxY;
    let a = t[0];
    let o = t[1];
    e = a < e ? a : e;
    r = o < r ? o : r;
    n = a > n ? a : n;
    s = o > s ? o : s;
    a = t[2];
    o = t[3];
    e = a < e ? a : e;
    r = o < r ? o : r;
    n = a > n ? a : n;
    s = o > s ? o : s;
    a = t[4];
    o = t[5];
    e = a < e ? a : e;
    r = o < r ? o : r;
    n = a > n ? a : n;
    s = o > s ? o : s;
    a = t[6];
    o = t[7];
    e = a < e ? a : e;
    r = o < r ? o : r;
    n = a > n ? a : n;
    s = o > s ? o : s;
    this.minX = e;
    this.minY = r;
    this.maxX = n;
    this.maxY = s;
  }
  addFrame(t, e, r, n, s) {
    this.addFrameMatrix(t.worldTransform, e, r, n, s);
  }
  addFrameMatrix(t, e, r, n, s) {
    const a = t.a;
    const o = t.b;
    const l = t.c;
    const c = t.d;
    const p = t.tx;
    const g = t.ty;
    let f = this.minX;
    let v = this.minY;
    let _ = this.maxX;
    let T = this.maxY;
    let A = a * e + l * r + p;
    let E = o * e + c * r + g;
    f = A < f ? A : f;
    v = E < v ? E : v;
    _ = A > _ ? A : _;
    T = E > T ? E : T;
    A = a * n + l * r + p;
    E = o * n + c * r + g;
    f = A < f ? A : f;
    v = E < v ? E : v;
    _ = A > _ ? A : _;
    T = E > T ? E : T;
    A = a * e + l * s + p;
    E = o * e + c * s + g;
    f = A < f ? A : f;
    v = E < v ? E : v;
    _ = A > _ ? A : _;
    T = E > T ? E : T;
    A = a * n + l * s + p;
    E = o * n + c * s + g;
    f = A < f ? A : f;
    v = E < v ? E : v;
    _ = A > _ ? A : _;
    T = E > T ? E : T;
    this.minX = f;
    this.minY = v;
    this.maxX = _;
    this.maxY = T;
  }
  addVertexData(t, e, r) {
    let n = this.minX;
    let s = this.minY;
    let a = this.maxX;
    let o = this.maxY;
    for (let l = e; l < r; l += 2) {
      const c = t[l];
      const p = t[l + 1];
      n = c < n ? c : n;
      s = p < s ? p : s;
      a = c > a ? c : a;
      o = p > o ? p : o;
    }
    this.minX = n;
    this.minY = s;
    this.maxX = a;
    this.maxY = o;
  }
  addVertices(t, e, r, n) {
    this.addVerticesMatrix(t.worldTransform, e, r, n);
  }
  addVerticesMatrix(t, e, r, n, s = 0, a = s) {
    const o = t.a;
    const l = t.b;
    const c = t.c;
    const p = t.d;
    const g = t.tx;
    const f = t.ty;
    let v = this.minX;
    let _ = this.minY;
    let T = this.maxX;
    let A = this.maxY;
    for (let E = r; E < n; E += 2) {
      const I = e[E];
      const S = e[E + 1];
      const P = o * I + c * S + g;
      const k = p * S + l * I + f;
      v = Math.min(v, P - s);
      T = Math.max(T, P + s);
      _ = Math.min(_, k - a);
      A = Math.max(A, k + a);
    }
    this.minX = v;
    this.minY = _;
    this.maxX = T;
    this.maxY = A;
  }
  addBounds(t) {
    const e = this.minX;
    const r = this.minY;
    const n = this.maxX;
    const s = this.maxY;
    this.minX = t.minX < e ? t.minX : e;
    this.minY = t.minY < r ? t.minY : r;
    this.maxX = t.maxX > n ? t.maxX : n;
    this.maxY = t.maxY > s ? t.maxY : s;
  }
  addBoundsMask(t, e) {
    const r = t.minX > e.minX ? t.minX : e.minX;
    const n = t.minY > e.minY ? t.minY : e.minY;
    const s = t.maxX < e.maxX ? t.maxX : e.maxX;
    const a = t.maxY < e.maxY ? t.maxY : e.maxY;
    if (r <= s && n <= a) {
      const o = this.minX;
      const l = this.minY;
      const c = this.maxX;
      const p = this.maxY;
      this.minX = r < o ? r : o;
      this.minY = n < l ? n : l;
      this.maxX = s > c ? s : c;
      this.maxY = a > p ? a : p;
    }
  }
  addBoundsMatrix(t, e) {
    this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
  }
  addBoundsArea(t, e) {
    const r = t.minX > e.x ? t.minX : e.x;
    const n = t.minY > e.y ? t.minY : e.y;
    const s = t.maxX < e.x + e.width ? t.maxX : e.x + e.width;
    const a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
    if (r <= s && n <= a) {
      const o = this.minX;
      const l = this.minY;
      const c = this.maxX;
      const p = this.maxY;
      this.minX = r < o ? r : o;
      this.minY = n < l ? n : l;
      this.maxX = s > c ? s : c;
      this.maxY = a > p ? a : p;
    }
  }
  pad(t = 0, e = t) {
    if (!this.isEmpty()) {
      this.minX -= t;
      this.maxX += t;
      this.minY -= e;
      this.maxY += e;
    }
  }
  addFramePad(t, e, r, n, s, a) {
    t -= s;
    e -= a;
    r += s;
    n += a;
    this.minX = this.minX < t ? this.minX : t;
    this.maxX = this.maxX > r ? this.maxX : r;
    this.minY = this.minY < e ? this.minY : e;
    this.maxY = this.maxY > n ? this.maxY : n;
  }
}
class re extends xn {
  constructor() {
    super();
    this.tempDisplayObjectParent = null;
    this.transform = new $a();
    this.alpha = 1;
    this.visible = true;
    this.renderable = true;
    this.cullable = false;
    this.cullArea = null;
    this.parent = null;
    this.worldAlpha = 1;
    this._lastSortedIndex = 0;
    this._zIndex = 0;
    this.filterArea = null;
    this.filters = null;
    this._enabledFilters = null;
    this._bounds = new _a();
    this._localBounds = null;
    this._boundsID = 0;
    this._boundsRect = null;
    this._localBoundsRect = null;
    this._mask = null;
    this._maskRefCount = 0;
    this._destroyed = false;
    this.isSprite = false;
    this.isMask = false;
  }
  static mixin(t) {
    const e = Object.keys(t);
    for (let r = 0; r < e.length; ++r) {
      const n = e[r];
      Object.defineProperty(re.prototype, n, Object.getOwnPropertyDescriptor(t, n));
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    if (this.parent) {
      this.parent._recursivePostUpdateTransform();
      this.transform.updateTransform(this.parent.transform);
    } else {
      this.transform.updateTransform(this._tempDisplayObjectParent.transform);
    }
  }
  updateTransform() {
    this._boundsID++;
    this.transform.updateTransform(this.parent.transform);
    this.worldAlpha = this.alpha * this.parent.worldAlpha;
  }
  getBounds(t, e) {
    if (!t) {
      if (this.parent) {
        this._recursivePostUpdateTransform();
        this.updateTransform();
      } else {
        this.parent = this._tempDisplayObjectParent;
        this.updateTransform();
        this.parent = null;
      }
    }
    if (this._bounds.updateID !== this._boundsID) {
      this.calculateBounds();
      this._bounds.updateID = this._boundsID;
    }
    if (!e) {
      this._boundsRect ||= new At();
      e = this._boundsRect;
    }
    return this._bounds.getRectangle(e);
  }
  getLocalBounds(t) {
    if (!t) {
      this._localBoundsRect ||= new At();
      t = this._localBoundsRect;
    }
    this._localBounds ||= new _a();
    const e = this.transform;
    const r = this.parent;
    this.parent = null;
    this._tempDisplayObjectParent.worldAlpha = (r == null ? undefined : r.worldAlpha) ?? 1;
    this.transform = this._tempDisplayObjectParent.transform;
    const n = this._bounds;
    const s = this._boundsID;
    this._bounds = this._localBounds;
    const a = this.getBounds(false, t);
    this.parent = r;
    this.transform = e;
    this._bounds = n;
    this._bounds.updateID += this._boundsID - s;
    return a;
  }
  toGlobal(t, e, r = false) {
    if (!r) {
      this._recursivePostUpdateTransform();
      if (this.parent) {
        this.displayObjectUpdateTransform();
      } else {
        this.parent = this._tempDisplayObjectParent;
        this.displayObjectUpdateTransform();
        this.parent = null;
      }
    }
    return this.worldTransform.apply(t, e);
  }
  toLocal(t, e, r, n) {
    if (e) {
      t = e.toGlobal(t, r, n);
    }
    if (!n) {
      this._recursivePostUpdateTransform();
      if (this.parent) {
        this.displayObjectUpdateTransform();
      } else {
        this.parent = this._tempDisplayObjectParent;
        this.displayObjectUpdateTransform();
        this.parent = null;
      }
    }
    return this.worldTransform.applyInverse(t, r);
  }
  setParent(t) {
    if (!t || !t.addChild) {
      throw new Error("setParent: Argument must be a Container");
    }
    t.addChild(this);
    return t;
  }
  removeFromParent() {
    var t;
    if ((t = this.parent) != null) {
      t.removeChild(this);
    }
  }
  setTransform(t = 0, e = 0, r = 1, n = 1, s = 0, a = 0, o = 0, l = 0, c = 0) {
    this.position.x = t;
    this.position.y = e;
    this.scale.x = r || 1;
    this.scale.y = n || 1;
    this.rotation = s;
    this.skew.x = a;
    this.skew.y = o;
    this.pivot.x = l;
    this.pivot.y = c;
    return this;
  }
  destroy(t) {
    this.removeFromParent();
    this._destroyed = true;
    this.transform = null;
    this.parent = null;
    this._bounds = null;
    this.mask = null;
    this.cullArea = null;
    this.filters = null;
    this.filterArea = null;
    this.hitArea = null;
    this.eventMode = "auto";
    this.interactiveChildren = false;
    this.emit("destroyed");
    this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    if (this.tempDisplayObjectParent === null) {
      this.tempDisplayObjectParent = new c_();
    }
    return this.tempDisplayObjectParent;
  }
  enableTempParent() {
    const t = this.parent;
    this.parent = this._tempDisplayObjectParent;
    return t;
  }
  disableTempParent(t) {
    this.parent = t;
  }
  get x() {
    return this.position.x;
  }
  set x(t) {
    this.transform.position.x = t;
  }
  get y() {
    return this.position.y;
  }
  set y(t) {
    this.transform.position.y = t;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(t) {
    this.transform.position.copyFrom(t);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(t) {
    this.transform.scale.copyFrom(t);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(t) {
    this.transform.pivot.copyFrom(t);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(t) {
    this.transform.skew.copyFrom(t);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(t) {
    this.transform.rotation = t;
  }
  get angle() {
    return this.transform.rotation * i0;
  }
  set angle(t) {
    this.transform.rotation = t * n0;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(t) {
    if (this._zIndex !== t) {
      this._zIndex = t;
      if (this.parent) {
        this.parent.sortDirty = true;
      }
    }
  }
  get worldVisible() {
    let t = this;
    do {
      if (!t.visible) {
        return false;
      }
      t = t.parent;
    } while (t);
    return true;
  }
  get mask() {
    return this._mask;
  }
  set mask(t) {
    if (this._mask !== t) {
      if (this._mask) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        if (e) {
          e._maskRefCount--;
          if (e._maskRefCount === 0) {
            e.renderable = true;
            e.isMask = false;
          }
        }
      }
      this._mask = t;
      if (this._mask) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        if (e) {
          if (e._maskRefCount === 0) {
            e.renderable = false;
            e.isMask = true;
          }
          e._maskRefCount++;
        }
      }
    }
  }
}
class c_ extends re {
  constructor() {
    super(...arguments);
    this.sortDirty = null;
  }
}
re.prototype.displayObjectUpdateTransform = re.prototype.updateTransform;
const d_ = new jt();
function f_(i, t) {
  if (i.zIndex === t.zIndex) {
    return i._lastSortedIndex - t._lastSortedIndex;
  } else {
    return i.zIndex - t.zIndex;
  }
}
const Af = class Yh extends re {
  constructor() {
    super();
    this.children = [];
    this.sortableChildren = Yh.defaultSortableChildren;
    this.sortDirty = false;
  }
  onChildrenChange(t) {}
  addChild(...t) {
    if (t.length > 1) {
      for (let e = 0; e < t.length; e++) {
        this.addChild(t[e]);
      }
    } else {
      const e = t[0];
      if (e.parent) {
        e.parent.removeChild(e);
      }
      e.parent = this;
      this.sortDirty = true;
      e.transform._parentID = -1;
      this.children.push(e);
      this._boundsID++;
      this.onChildrenChange(this.children.length - 1);
      this.emit("childAdded", e, this, this.children.length - 1);
      e.emit("added", this);
    }
    return t[0];
  }
  addChildAt(t, e) {
    if (e < 0 || e > this.children.length) {
      throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
    }
    if (t.parent) {
      t.parent.removeChild(t);
    }
    t.parent = this;
    this.sortDirty = true;
    t.transform._parentID = -1;
    this.children.splice(e, 0, t);
    this._boundsID++;
    this.onChildrenChange(e);
    t.emit("added", this);
    this.emit("childAdded", t, this, e);
    return t;
  }
  swapChildren(t, e) {
    if (t === e) {
      return;
    }
    const r = this.getChildIndex(t);
    const n = this.getChildIndex(e);
    this.children[r] = e;
    this.children[n] = t;
    this.onChildrenChange(r < n ? r : n);
  }
  getChildIndex(t) {
    const e = this.children.indexOf(t);
    if (e === -1) {
      throw new Error("The supplied DisplayObject must be a child of the caller");
    }
    return e;
  }
  setChildIndex(t, e) {
    if (e < 0 || e >= this.children.length) {
      throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
    }
    const r = this.getChildIndex(t);
    Pi(this.children, r, 1);
    this.children.splice(e, 0, t);
    this.onChildrenChange(e);
  }
  getChildAt(t) {
    if (t < 0 || t >= this.children.length) {
      throw new Error(`getChildAt: Index (${t}) does not exist.`);
    }
    return this.children[t];
  }
  removeChild(...t) {
    if (t.length > 1) {
      for (let e = 0; e < t.length; e++) {
        this.removeChild(t[e]);
      }
    } else {
      const e = t[0];
      const r = this.children.indexOf(e);
      if (r === -1) {
        return null;
      }
      e.parent = null;
      e.transform._parentID = -1;
      Pi(this.children, r, 1);
      this._boundsID++;
      this.onChildrenChange(r);
      e.emit("removed", this);
      this.emit("childRemoved", e, this, r);
    }
    return t[0];
  }
  removeChildAt(t) {
    const e = this.getChildAt(t);
    e.parent = null;
    e.transform._parentID = -1;
    Pi(this.children, t, 1);
    this._boundsID++;
    this.onChildrenChange(t);
    e.emit("removed", this);
    this.emit("childRemoved", e, this, t);
    return e;
  }
  removeChildren(t = 0, e = this.children.length) {
    const r = t;
    const n = e;
    const s = n - r;
    let a;
    if (s > 0 && s <= n) {
      a = this.children.splice(r, s);
      for (let o = 0; o < a.length; ++o) {
        a[o].parent = null;
        if (a[o].transform) {
          a[o].transform._parentID = -1;
        }
      }
      this._boundsID++;
      this.onChildrenChange(t);
      for (let o = 0; o < a.length; ++o) {
        a[o].emit("removed", this);
        this.emit("childRemoved", a[o], this, o);
      }
      return a;
    } else if (s === 0 && this.children.length === 0) {
      return [];
    }
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  }
  sortChildren() {
    let t = false;
    for (let e = 0, r = this.children.length; e < r; ++e) {
      const n = this.children[e];
      n._lastSortedIndex = e;
      if (!t && n.zIndex !== 0) {
        t = true;
      }
    }
    if (t && this.children.length > 1) {
      this.children.sort(f_);
    }
    this.sortDirty = false;
  }
  updateTransform() {
    if (this.sortableChildren && this.sortDirty) {
      this.sortChildren();
    }
    this._boundsID++;
    this.transform.updateTransform(this.parent.transform);
    this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let t = 0, e = this.children.length; t < e; ++t) {
      const r = this.children[t];
      if (r.visible) {
        r.updateTransform();
      }
    }
  }
  calculateBounds() {
    this._bounds.clear();
    this._calculateBounds();
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      if (!!e.visible && !!e.renderable) {
        e.calculateBounds();
        if (e._mask) {
          const r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
          if (r) {
            r.calculateBounds();
            this._bounds.addBoundsMask(e._bounds, r._bounds);
          } else {
            this._bounds.addBounds(e._bounds);
          }
        } else if (e.filterArea) {
          this._bounds.addBoundsArea(e._bounds, e.filterArea);
        } else {
          this._bounds.addBounds(e._bounds);
        }
      }
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(t, e = false) {
    const r = super.getLocalBounds(t);
    if (!e) {
      for (let n = 0, s = this.children.length; n < s; ++n) {
        const a = this.children[n];
        if (a.visible) {
          a.updateTransform();
        }
      }
    }
    return r;
  }
  _calculateBounds() {}
  _renderWithCulling(t) {
    const e = t.renderTexture.sourceFrame;
    if (!(e.width > 0) || !(e.height > 0)) {
      return;
    }
    let r;
    let n;
    if (this.cullArea) {
      r = this.cullArea;
      n = this.worldTransform;
    } else if (this._render !== Yh.prototype._render) {
      r = this.getBounds(true);
    }
    const s = t.projection.transform;
    if (s) {
      if (n) {
        n = d_.copyFrom(n);
        n.prepend(s);
      } else {
        n = s;
      }
    }
    if (r && e.intersects(r, n)) {
      this._render(t);
    } else if (this.cullArea) {
      return;
    }
    for (let a = 0, o = this.children.length; a < o; ++a) {
      const l = this.children[a];
      const c = l.cullable;
      l.cullable = c || !this.cullArea;
      l.render(t);
      l.cullable = c;
    }
  }
  render(t) {
    var e;
    if (!!this.visible && !(this.worldAlpha <= 0) && !!this.renderable) {
      if (this._mask || (e = this.filters) != null && e.length) {
        this.renderAdvanced(t);
      } else if (this.cullable) {
        this._renderWithCulling(t);
      } else {
        this._render(t);
        for (let r = 0, n = this.children.length; r < n; ++r) {
          this.children[r].render(t);
        }
      }
    }
  }
  renderAdvanced(t) {
    var s;
    var a;
    var o;
    const e = this.filters;
    const r = this._mask;
    if (e) {
      this._enabledFilters ||= [];
      this._enabledFilters.length = 0;
      for (let l = 0; l < e.length; l++) {
        if (e[l].enabled) {
          this._enabledFilters.push(e[l]);
        }
      }
    }
    const n = e && ((s = this._enabledFilters) == null ? undefined : s.length) || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== fe.NONE));
    if (n) {
      t.batch.flush();
    }
    if (e && (a = this._enabledFilters) != null && a.length) {
      t.filter.push(this, this._enabledFilters);
    }
    if (r) {
      t.mask.push(this, this._mask);
    }
    if (this.cullable) {
      this._renderWithCulling(t);
    } else {
      this._render(t);
      for (let l = 0, c = this.children.length; l < c; ++l) {
        this.children[l].render(t);
      }
    }
    if (n) {
      t.batch.flush();
    }
    if (r) {
      t.mask.pop(this);
    }
    if (e && (o = this._enabledFilters) != null && o.length) {
      t.filter.pop();
    }
  }
  _render(t) {}
  destroy(t) {
    super.destroy();
    this.sortDirty = false;
    const e = typeof t == "boolean" ? t : t == null ? undefined : t.children;
    const r = this.removeChildren(0, this.children.length);
    if (e) {
      for (let n = 0; n < r.length; ++n) {
        r[n].destroy(t);
      }
    }
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    if (e !== 0) {
      this.scale.x = t / e;
    } else {
      this.scale.x = 1;
    }
    this._width = t;
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    if (e !== 0) {
      this.scale.y = t / e;
    } else {
      this.scale.y = 1;
    }
    this._height = t;
  }
};
Af.defaultSortableChildren = false;
let Ue = Af;
Ue.prototype.containerUpdateTransform = Ue.prototype.updateTransform;
Object.defineProperties(st, {
  SORTABLE_CHILDREN: {
    get() {
      return Ue.defaultSortableChildren;
    },
    set(i) {
      vt("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren");
      Ue.defaultSortableChildren = i;
    }
  }
});
const kn = new Bt();
const p_ = new Uint16Array([0, 1, 2, 0, 2, 3]);
class Lr extends Ue {
  constructor(t) {
    super();
    this._anchor = new zr(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0);
    this._texture = null;
    this._width = 0;
    this._height = 0;
    this._tintColor = new Pt(16777215);
    this._tintRGB = null;
    this.tint = 16777215;
    this.blendMode = q.NORMAL;
    this._cachedTint = 16777215;
    this.uvs = null;
    this.texture = t || ut.EMPTY;
    this.vertexData = new Float32Array(8);
    this.vertexTrimmedData = null;
    this._transformID = -1;
    this._textureID = -1;
    this._transformTrimmedID = -1;
    this._textureTrimmedID = -1;
    this.indices = p_;
    this.pluginName = "batch";
    this.isSprite = true;
    this._roundPixels = st.ROUND_PIXELS;
  }
  _onTextureUpdate() {
    this._textureID = -1;
    this._textureTrimmedID = -1;
    this._cachedTint = 16777215;
    if (this._width) {
      this.scale.x = Xr(this.scale.x) * this._width / this._texture.orig.width;
    }
    if (this._height) {
      this.scale.y = Xr(this.scale.y) * this._height / this._texture.orig.height;
    }
  }
  _onAnchorUpdate() {
    this._transformID = -1;
    this._transformTrimmedID = -1;
  }
  calculateVertices() {
    const t = this._texture;
    if (this._transformID === this.transform._worldID && this._textureID === t._updateID) {
      return;
    }
    if (this._textureID !== t._updateID) {
      this.uvs = this._texture._uvs.uvsFloat32;
    }
    this._transformID = this.transform._worldID;
    this._textureID = t._updateID;
    const e = this.transform.worldTransform;
    const r = e.a;
    const n = e.b;
    const s = e.c;
    const a = e.d;
    const o = e.tx;
    const l = e.ty;
    const c = this.vertexData;
    const p = t.trim;
    const g = t.orig;
    const f = this._anchor;
    let v = 0;
    let _ = 0;
    let T = 0;
    let A = 0;
    if (p) {
      _ = p.x - f._x * g.width;
      v = _ + p.width;
      A = p.y - f._y * g.height;
      T = A + p.height;
    } else {
      _ = -f._x * g.width;
      v = _ + g.width;
      A = -f._y * g.height;
      T = A + g.height;
    }
    c[0] = r * _ + s * A + o;
    c[1] = a * A + n * _ + l;
    c[2] = r * v + s * A + o;
    c[3] = a * A + n * v + l;
    c[4] = r * v + s * T + o;
    c[5] = a * T + n * v + l;
    c[6] = r * _ + s * T + o;
    c[7] = a * T + n * _ + l;
    if (this._roundPixels) {
      const E = st.RESOLUTION;
      for (let I = 0; I < c.length; ++I) {
        c[I] = Math.round(c[I] * E) / E;
      }
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData) {
      this.vertexTrimmedData = new Float32Array(8);
    } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
      return;
    }
    this._transformTrimmedID = this.transform._worldID;
    this._textureTrimmedID = this._texture._updateID;
    const t = this._texture;
    const e = this.vertexTrimmedData;
    const r = t.orig;
    const n = this._anchor;
    const s = this.transform.worldTransform;
    const a = s.a;
    const o = s.b;
    const l = s.c;
    const c = s.d;
    const p = s.tx;
    const g = s.ty;
    const f = -n._x * r.width;
    const v = f + r.width;
    const _ = -n._y * r.height;
    const T = _ + r.height;
    e[0] = a * f + l * _ + p;
    e[1] = c * _ + o * f + g;
    e[2] = a * v + l * _ + p;
    e[3] = c * _ + o * v + g;
    e[4] = a * v + l * T + p;
    e[5] = c * T + o * v + g;
    e[6] = a * f + l * T + p;
    e[7] = c * T + o * f + g;
    if (this._roundPixels) {
      const A = st.RESOLUTION;
      for (let E = 0; E < e.length; ++E) {
        e[E] = Math.round(e[E] * A) / A;
      }
    }
  }
  _render(t) {
    this.calculateVertices();
    t.batch.setObjectRenderer(t.plugins[this.pluginName]);
    t.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const t = this._texture.trim;
    const e = this._texture.orig;
    if (!t || t.width === e.width && t.height === e.height) {
      this.calculateVertices();
      this._bounds.addQuad(this.vertexData);
    } else {
      this.calculateTrimmedVertices();
      this._bounds.addQuad(this.vertexTrimmedData);
    }
  }
  getLocalBounds(t) {
    if (this.children.length === 0) {
      this._localBounds ||= new _a();
      this._localBounds.minX = this._texture.orig.width * -this._anchor._x;
      this._localBounds.minY = this._texture.orig.height * -this._anchor._y;
      this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
      this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
      if (!t) {
        this._localBoundsRect ||= new At();
        t = this._localBoundsRect;
      }
      return this._localBounds.getRectangle(t);
    } else {
      return super.getLocalBounds.call(this, t);
    }
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, kn);
    const e = this._texture.orig.width;
    const r = this._texture.orig.height;
    const n = -e * this.anchor.x;
    let s = 0;
    return kn.x >= n && kn.x < n + e && (s = -r * this.anchor.y, kn.y >= s && kn.y < s + r);
  }
  destroy(t) {
    super.destroy(t);
    this._texture.off("update", this._onTextureUpdate, this);
    this._anchor = null;
    if (typeof t == "boolean" ? t : t == null ? undefined : t.texture) {
      const e = typeof t == "boolean" ? t : t == null ? undefined : t.baseTexture;
      this._texture.destroy(!!e);
    }
    this._texture = null;
  }
  static from(t, e) {
    const r = t instanceof ut ? t : ut.from(t, e);
    return new Lr(r);
  }
  set roundPixels(t) {
    if (this._roundPixels !== t) {
      this._transformID = -1;
      this._transformTrimmedID = -1;
    }
    this._roundPixels = t;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    const e = Xr(this.scale.x) || 1;
    this.scale.x = e * t / this._texture.orig.width;
    this._width = t;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    const e = Xr(this.scale.y) || 1;
    this.scale.y = e * t / this._texture.orig.height;
    this._height = t;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    this._anchor.copyFrom(t);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t);
    this._tintRGB = this._tintColor.toLittleEndianNumber();
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    if (this._texture !== t) {
      if (this._texture) {
        this._texture.off("update", this._onTextureUpdate, this);
      }
      this._texture = t || ut.EMPTY;
      this._cachedTint = 16777215;
      this._textureID = -1;
      this._textureTrimmedID = -1;
      if (t) {
        if (t.baseTexture.valid) {
          this._onTextureUpdate();
        } else {
          t.once("update", this._onTextureUpdate, this);
        }
      }
    }
  }
}
const Un = new Bt();
class Al extends Lr {
  constructor(t, e = 100, r = 100) {
    super(t);
    this.tileTransform = new $a();
    this._width = e;
    this._height = r;
    this.uvMatrix = this.texture.uvMatrix || new wl(t);
    this.pluginName = "tilingSprite";
    this.uvRespectAnchor = false;
  }
  get clampMargin() {
    return this.uvMatrix.clampMargin;
  }
  set clampMargin(t) {
    this.uvMatrix.clampMargin = t;
    this.uvMatrix.update(true);
  }
  get tileScale() {
    return this.tileTransform.scale;
  }
  set tileScale(t) {
    this.tileTransform.scale.copyFrom(t);
  }
  get tilePosition() {
    return this.tileTransform.position;
  }
  set tilePosition(t) {
    this.tileTransform.position.copyFrom(t);
  }
  _onTextureUpdate() {
    if (this.uvMatrix) {
      this.uvMatrix.texture = this._texture;
    }
    this._cachedTint = 16777215;
  }
  _render(t) {
    const e = this._texture;
    if (!!e && !!e.valid) {
      this.tileTransform.updateLocalTransform();
      this.uvMatrix.update();
      t.batch.setObjectRenderer(t.plugins[this.pluginName]);
      t.plugins[this.pluginName].render(this);
    }
  }
  _calculateBounds() {
    const t = this._width * -this._anchor._x;
    const e = this._height * -this._anchor._y;
    const r = this._width * (1 - this._anchor._x);
    const n = this._height * (1 - this._anchor._y);
    this._bounds.addFrame(this.transform, t, e, r, n);
  }
  getLocalBounds(t) {
    if (this.children.length === 0) {
      this._bounds.minX = this._width * -this._anchor._x;
      this._bounds.minY = this._height * -this._anchor._y;
      this._bounds.maxX = this._width * (1 - this._anchor._x);
      this._bounds.maxY = this._height * (1 - this._anchor._y);
      if (!t) {
        this._localBoundsRect ||= new At();
        t = this._localBoundsRect;
      }
      return this._bounds.getRectangle(t);
    } else {
      return super.getLocalBounds.call(this, t);
    }
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, Un);
    const e = this._width;
    const r = this._height;
    const n = -e * this.anchor._x;
    if (Un.x >= n && Un.x < n + e) {
      const s = -r * this.anchor._y;
      if (Un.y >= s && Un.y < s + r) {
        return true;
      }
    }
    return false;
  }
  destroy(t) {
    super.destroy(t);
    this.tileTransform = null;
    this.uvMatrix = null;
  }
  static from(t, e) {
    const r = t instanceof ut ? t : ut.from(t, e);
    return new Al(r, e.width, e.height);
  }
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t;
  }
  get height() {
    return this._height;
  }
  set height(t) {
    this._height = t;
  }
}
var g_ = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`;
var m_ = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`;
var y_ = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`;
var vc = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`;
var v_ = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const ks = new jt();
class Sf extends Va {
  constructor(t) {
    super(t);
    t.runners.contextChange.add(this);
    this.quad = new jd();
    this.state = Nr.for2d();
  }
  contextChange() {
    const t = this.renderer;
    const e = {
      globals: t.globalUniforms
    };
    this.simpleShader = Dr.from(vc, v_, e);
    this.shader = t.context.webGLVersion > 1 ? Dr.from(m_, g_, e) : Dr.from(vc, y_, e);
  }
  render(t) {
    const e = this.renderer;
    const r = this.quad;
    let n = r.vertices;
    n[0] = n[6] = t._width * -t.anchor.x;
    n[1] = n[3] = t._height * -t.anchor.y;
    n[2] = n[4] = t._width * (1 - t.anchor.x);
    n[5] = n[7] = t._height * (1 - t.anchor.y);
    const s = t.uvRespectAnchor ? t.anchor.x : 0;
    const a = t.uvRespectAnchor ? t.anchor.y : 0;
    n = r.uvs;
    n[0] = n[6] = -s;
    n[1] = n[3] = -a;
    n[2] = n[4] = 1 - s;
    n[5] = n[7] = 1 - a;
    r.invalidate();
    const o = t._texture;
    const l = o.baseTexture;
    const c = l.alphaMode > 0;
    const p = t.tileTransform.localTransform;
    const g = t.uvMatrix;
    let f = l.isPowerOfTwo && o.frame.width === l.width && o.frame.height === l.height;
    if (f) {
      if (l._glTextures[e.CONTEXT_UID]) {
        f = l.wrapMode !== Yr.CLAMP;
      } else if (l.wrapMode === Yr.CLAMP) {
        l.wrapMode = Yr.REPEAT;
      }
    }
    const v = f ? this.simpleShader : this.shader;
    const _ = o.width;
    const T = o.height;
    const A = t._width;
    const E = t._height;
    ks.set(p.a * _ / A, p.b * _ / E, p.c * T / A, p.d * T / E, p.tx / A, p.ty / E);
    ks.invert();
    if (f) {
      ks.prepend(g.mapCoord);
    } else {
      v.uniforms.uMapCoord = g.mapCoord.toArray(true);
      v.uniforms.uClampFrame = g.uClampFrame;
      v.uniforms.uClampOffset = g.uClampOffset;
    }
    v.uniforms.uTransform = ks.toArray(true);
    v.uniforms.uColor = Pt.shared.setValue(t.tint).premultiply(t.worldAlpha, c).toArray(v.uniforms.uColor);
    v.uniforms.translationMatrix = t.transform.worldTransform.toArray(true);
    v.uniforms.uSampler = o;
    e.shader.bind(v);
    e.geometry.bind(r);
    this.state.blendMode = xl(t.blendMode, c);
    e.state.set(this.state);
    e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
Sf.extension = {
  name: "tilingSprite",
  type: rt.RendererPlugin
};
ot.add(Sf);
const Us = new jt();
const Gn = new jt();
const br = [new Bt(), new Bt(), new Bt(), new Bt()];
Al.prototype._renderCanvas = function (i) {
  const t = this._texture;
  if (!t.baseTexture.valid) {
    return;
  }
  const e = i.canvasContext.activeContext;
  const r = this.worldTransform;
  const n = t.baseTexture;
  const s = n.getDrawableSource();
  const a = n.resolution;
  if (this._textureID !== this._texture._updateID || this._cachedTint !== this.tintValue) {
    this._textureID = this._texture._updateID;
    const f = new us(t._frame.width, t._frame.height, a);
    if (this.tintValue !== 16777215) {
      this._tintedCanvas = _e.getTintedCanvas(this, this.tintValue);
      f.context.drawImage(this._tintedCanvas, 0, 0);
    } else {
      f.context.drawImage(s, -t._frame.x * a, -t._frame.y * a);
    }
    this._cachedTint = this.tintValue;
    this._canvasPattern = f.context.createPattern(f.canvas, "repeat");
  }
  e.globalAlpha = this.worldAlpha;
  i.canvasContext.setBlendMode(this.blendMode);
  this.tileTransform.updateLocalTransform();
  const o = this.tileTransform.localTransform;
  const l = this._width;
  const c = this._height;
  Us.identity();
  Gn.copyFrom(o);
  if (!this.uvRespectAnchor) {
    Gn.translate(-this.anchor.x * l, -this.anchor.y * c);
  }
  Gn.scale(1 / a, 1 / a);
  Us.prepend(Gn);
  Us.prepend(r);
  i.canvasContext.setContextTransform(Us);
  e.fillStyle = this._canvasPattern;
  const p = this.anchor.x * -l;
  const g = this.anchor.y * -c;
  br[0].set(p, g);
  br[1].set(p + l, g);
  br[2].set(p + l, g + c);
  br[3].set(p, g + c);
  for (let f = 0; f < 4; f++) {
    Gn.applyInverse(br[f], br[f]);
  }
  e.beginPath();
  e.moveTo(br[0].x, br[0].y);
  for (let f = 1; f < 4; f++) {
    e.lineTo(br[f].x, br[f].y);
  }
  e.closePath();
  e.fill();
};
class __ extends Ue {
  constructor(t = 1500, e, r = 16384, n = false) {
    super();
    const s = 16384;
    if (r > s) {
      r = s;
    }
    this._properties = [false, true, false, false, false];
    this._maxSize = t;
    this._batchSize = r;
    this._buffers = null;
    this._bufferUpdateIDs = [];
    this._updateID = 0;
    this.interactiveChildren = false;
    this.blendMode = q.NORMAL;
    this.autoResize = n;
    this.roundPixels = true;
    this.baseTexture = null;
    this.setProperties(e);
    this._tintColor = new Pt(0);
    this.tintRgb = new Float32Array(3);
    this.tint = 16777215;
  }
  setProperties(t) {
    if (t) {
      this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0];
      this._properties[1] = "position" in t ? !!t.position : this._properties[1];
      this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2];
      this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3];
      this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4];
    }
  }
  updateTransform() {
    this.displayObjectUpdateTransform();
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t);
    this._tintColor.toRgbArray(this.tintRgb);
  }
  render(t) {
    if (!!this.visible && !(this.worldAlpha <= 0) && !!this.children.length && !!this.renderable) {
      if (!this.baseTexture) {
        this.baseTexture = this.children[0]._texture.baseTexture;
        if (!this.baseTexture.valid) {
          this.baseTexture.once("update", () => this.onChildrenChange(0));
        }
      }
      t.batch.setObjectRenderer(t.plugins.particle);
      t.plugins.particle.render(this);
    }
  }
  onChildrenChange(t) {
    const e = Math.floor(t / this._batchSize);
    while (this._bufferUpdateIDs.length < e) {
      this._bufferUpdateIDs.push(0);
    }
    this._bufferUpdateIDs[e] = ++this._updateID;
  }
  dispose() {
    if (this._buffers) {
      for (let t = 0; t < this._buffers.length; ++t) {
        this._buffers[t].destroy();
      }
      this._buffers = null;
    }
  }
  destroy(t) {
    super.destroy(t);
    this.dispose();
    this._properties = null;
    this._buffers = null;
    this._bufferUpdateIDs = null;
  }
}
class _c {
  constructor(t, e, r) {
    this.geometry = new li();
    this.indexBuffer = null;
    this.size = r;
    this.dynamicProperties = [];
    this.staticProperties = [];
    for (let n = 0; n < t.length; ++n) {
      let s = t[n];
      s = {
        attributeName: s.attributeName,
        size: s.size,
        uploadFunction: s.uploadFunction,
        type: s.type || mt.FLOAT,
        offset: s.offset
      };
      if (e[n]) {
        this.dynamicProperties.push(s);
      } else {
        this.staticProperties.push(s);
      }
    }
    this.staticStride = 0;
    this.staticBuffer = null;
    this.staticData = null;
    this.staticDataUint32 = null;
    this.dynamicStride = 0;
    this.dynamicBuffer = null;
    this.dynamicData = null;
    this.dynamicDataUint32 = null;
    this._updateID = 0;
    this.initBuffers();
  }
  initBuffers() {
    const t = this.geometry;
    let e = 0;
    this.indexBuffer = new pe(Pd(this.size), true, true);
    t.addIndex(this.indexBuffer);
    this.dynamicStride = 0;
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      o.offset = e;
      e += o.size;
      this.dynamicStride += o.size;
    }
    const r = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(r);
    this.dynamicDataUint32 = new Uint32Array(r);
    this.dynamicBuffer = new pe(this.dynamicData, false, false);
    let n = 0;
    this.staticStride = 0;
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      o.offset = n;
      n += o.size;
      this.staticStride += o.size;
    }
    const s = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(s);
    this.staticDataUint32 = new Uint32Array(s);
    this.staticBuffer = new pe(this.staticData, true, false);
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      t.addAttribute(o.attributeName, this.dynamicBuffer, 0, o.type === mt.UNSIGNED_BYTE, o.type, this.dynamicStride * 4, o.offset * 4);
    }
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      t.addAttribute(o.attributeName, this.staticBuffer, 0, o.type === mt.UNSIGNED_BYTE, o.type, this.staticStride * 4, o.offset * 4);
    }
  }
  uploadDynamic(t, e, r) {
    for (let n = 0; n < this.dynamicProperties.length; n++) {
      const s = this.dynamicProperties[n];
      s.uploadFunction(t, e, r, s.type === mt.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, s.offset);
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(t, e, r) {
    for (let n = 0; n < this.staticProperties.length; n++) {
      const s = this.staticProperties[n];
      s.uploadFunction(t, e, r, s.type === mt.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, s.offset);
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    this.indexBuffer = null;
    this.dynamicProperties = null;
    this.dynamicBuffer = null;
    this.dynamicData = null;
    this.dynamicDataUint32 = null;
    this.staticProperties = null;
    this.staticBuffer = null;
    this.staticData = null;
    this.staticDataUint32 = null;
    this.geometry.destroy();
  }
}
var x_ = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`;
var b_ = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class Cf extends Va {
  constructor(t) {
    super(t);
    this.shader = null;
    this.properties = null;
    this.tempMatrix = new jt();
    this.properties = [{
      attributeName: "aVertexPosition",
      size: 2,
      uploadFunction: this.uploadVertices,
      offset: 0
    }, {
      attributeName: "aPositionCoord",
      size: 2,
      uploadFunction: this.uploadPosition,
      offset: 0
    }, {
      attributeName: "aRotation",
      size: 1,
      uploadFunction: this.uploadRotation,
      offset: 0
    }, {
      attributeName: "aTextureCoord",
      size: 2,
      uploadFunction: this.uploadUvs,
      offset: 0
    }, {
      attributeName: "aColor",
      size: 1,
      type: mt.UNSIGNED_BYTE,
      uploadFunction: this.uploadTint,
      offset: 0
    }];
    this.shader = Dr.from(b_, x_, {});
    this.state = Nr.for2d();
  }
  render(t) {
    const e = t.children;
    const r = t._maxSize;
    const n = t._batchSize;
    const s = this.renderer;
    let a = e.length;
    if (a === 0) {
      return;
    }
    if (a > r && !t.autoResize) {
      a = r;
    }
    let o = t._buffers;
    o ||= t._buffers = this.generateBuffers(t);
    const l = e[0]._texture.baseTexture;
    const c = l.alphaMode > 0;
    this.state.blendMode = xl(t.blendMode, c);
    s.state.set(this.state);
    const p = s.gl;
    const g = t.worldTransform.copyTo(this.tempMatrix);
    g.prepend(s.globalUniforms.uniforms.projectionMatrix);
    this.shader.uniforms.translationMatrix = g.toArray(true);
    this.shader.uniforms.uColor = Pt.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, c).toArray(this.shader.uniforms.uColor);
    this.shader.uniforms.uSampler = l;
    this.renderer.shader.bind(this.shader);
    let f = false;
    for (let v = 0, _ = 0; v < a; v += n, _ += 1) {
      let T = a - v;
      if (T > n) {
        T = n;
      }
      if (_ >= o.length) {
        o.push(this._generateOneMoreBuffer(t));
      }
      const A = o[_];
      A.uploadDynamic(e, v, T);
      const E = t._bufferUpdateIDs[_] || 0;
      f = f || A._updateID < E;
      if (f) {
        A._updateID = t._updateID;
        A.uploadStatic(e, v, T);
      }
      s.geometry.bind(A.geometry);
      p.drawElements(p.TRIANGLES, T * 6, p.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(t) {
    const e = [];
    const r = t._maxSize;
    const n = t._batchSize;
    const s = t._properties;
    for (let a = 0; a < r; a += n) {
      e.push(new _c(this.properties, s, n));
    }
    return e;
  }
  _generateOneMoreBuffer(t) {
    const e = t._batchSize;
    const r = t._properties;
    return new _c(this.properties, r, e);
  }
  uploadVertices(t, e, r, n, s, a) {
    let o = 0;
    let l = 0;
    let c = 0;
    let p = 0;
    for (let g = 0; g < r; ++g) {
      const f = t[e + g];
      const v = f._texture;
      const _ = f.scale.x;
      const T = f.scale.y;
      const A = v.trim;
      const E = v.orig;
      if (A) {
        l = A.x - f.anchor.x * E.width;
        o = l + A.width;
        p = A.y - f.anchor.y * E.height;
        c = p + A.height;
      } else {
        o = E.width * (1 - f.anchor.x);
        l = E.width * -f.anchor.x;
        c = E.height * (1 - f.anchor.y);
        p = E.height * -f.anchor.y;
      }
      n[a] = l * _;
      n[a + 1] = p * T;
      n[a + s] = o * _;
      n[a + s + 1] = p * T;
      n[a + s * 2] = o * _;
      n[a + s * 2 + 1] = c * T;
      n[a + s * 3] = l * _;
      n[a + s * 3 + 1] = c * T;
      a += s * 4;
    }
  }
  uploadPosition(t, e, r, n, s, a) {
    for (let o = 0; o < r; o++) {
      const l = t[e + o].position;
      n[a] = l.x;
      n[a + 1] = l.y;
      n[a + s] = l.x;
      n[a + s + 1] = l.y;
      n[a + s * 2] = l.x;
      n[a + s * 2 + 1] = l.y;
      n[a + s * 3] = l.x;
      n[a + s * 3 + 1] = l.y;
      a += s * 4;
    }
  }
  uploadRotation(t, e, r, n, s, a) {
    for (let o = 0; o < r; o++) {
      const l = t[e + o].rotation;
      n[a] = l;
      n[a + s] = l;
      n[a + s * 2] = l;
      n[a + s * 3] = l;
      a += s * 4;
    }
  }
  uploadUvs(t, e, r, n, s, a) {
    for (let o = 0; o < r; ++o) {
      const l = t[e + o]._texture._uvs;
      if (l) {
        n[a] = l.x0;
        n[a + 1] = l.y0;
        n[a + s] = l.x1;
        n[a + s + 1] = l.y1;
        n[a + s * 2] = l.x2;
        n[a + s * 2 + 1] = l.y2;
        n[a + s * 3] = l.x3;
        n[a + s * 3 + 1] = l.y3;
        a += s * 4;
      } else {
        n[a] = 0;
        n[a + 1] = 0;
        n[a + s] = 0;
        n[a + s + 1] = 0;
        n[a + s * 2] = 0;
        n[a + s * 2 + 1] = 0;
        n[a + s * 3] = 0;
        n[a + s * 3 + 1] = 0;
        a += s * 4;
      }
    }
  }
  uploadTint(t, e, r, n, s, a) {
    for (let o = 0; o < r; ++o) {
      const l = t[e + o];
      const c = Pt.shared.setValue(l._tintRGB).toPremultiplied(l.alpha, l.texture.baseTexture.alphaMode > 0);
      n[a] = c;
      n[a + s] = c;
      n[a + s * 2] = c;
      n[a + s * 3] = c;
      a += s * 4;
    }
  }
  destroy() {
    super.destroy();
    if (this.shader) {
      this.shader.destroy();
      this.shader = null;
    }
    this.tempMatrix = null;
  }
}
Cf.extension = {
  name: "particle",
  type: rt.RendererPlugin
};
ot.add(Cf);
__.prototype.renderCanvas = function (i) {
  if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
    return;
  }
  const t = i.canvasContext.activeContext;
  const e = this.worldTransform;
  let r = true;
  let n = 0;
  let s = 0;
  let a = 0;
  let o = 0;
  i.canvasContext.setBlendMode(this.blendMode);
  t.globalAlpha = this.worldAlpha;
  this.displayObjectUpdateTransform();
  for (let l = 0; l < this.children.length; ++l) {
    const c = this.children[l];
    if (!c.visible || !c._texture.valid) {
      continue;
    }
    const p = c._texture.frame;
    t.globalAlpha = this.worldAlpha * c.alpha;
    if (c.rotation % (Math.PI * 2) === 0) {
      if (r) {
        i.canvasContext.setContextTransform(e, false, 1);
        r = false;
      }
      n = c.anchor.x * (-p.width * c.scale.x) + c.position.x + 0.5;
      s = c.anchor.y * (-p.height * c.scale.y) + c.position.y + 0.5;
      a = p.width * c.scale.x;
      o = p.height * c.scale.y;
    } else {
      r ||= true;
      c.displayObjectUpdateTransform();
      const v = c.worldTransform;
      i.canvasContext.setContextTransform(v, this.roundPixels, 1);
      n = c.anchor.x * -p.width + 0.5;
      s = c.anchor.y * -p.height + 0.5;
      a = p.width;
      o = p.height;
    }
    const g = c._texture.baseTexture.resolution;
    const f = i.canvasContext.activeResolution;
    t.drawImage(c._texture.baseTexture.getDrawableSource(), p.x * g, p.y * g, p.width * g, p.height * g, n * f, s * f, a * f, o * f);
  }
};
Ue.prototype._renderCanvas = function (i) {};
Ue.prototype.renderCanvas = function (i) {
  if (!!this.visible && !(this.worldAlpha <= 0) && !!this.renderable) {
    if (this._mask) {
      i.mask.pushMask(this._mask);
    }
    this._renderCanvas(i);
    for (let t = 0, e = this.children.length; t < e; ++t) {
      this.children[t].renderCanvas(i);
    }
    if (this._mask) {
      i.mask.popMask(i);
    }
  }
};
re.prototype.renderCanvas = function (i) {};
var ja = (i => {
  i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL";
  i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL";
  return i;
})(ja || {});
const Gs = {
  willReadFrequently: true
};
const wr = class gt {
  static get experimentalLetterSpacingSupported() {
    let t = gt._experimentalLetterSpacingSupported;
    if (t !== undefined) {
      const e = st.ADAPTER.getCanvasRenderingContext2D().prototype;
      t = gt._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
    }
    return t;
  }
  constructor(t, e, r, n, s, a, o, l, c) {
    this.text = t;
    this.style = e;
    this.width = r;
    this.height = n;
    this.lines = s;
    this.lineWidths = a;
    this.lineHeight = o;
    this.maxLineWidth = l;
    this.fontProperties = c;
  }
  static measureText(t, e, r, n = gt._canvas) {
    r = r ?? e.wordWrap;
    const s = e.toFontString();
    const a = gt.measureFont(s);
    if (a.fontSize === 0) {
      a.fontSize = e.fontSize;
      a.ascent = e.fontSize;
    }
    const o = n.getContext("2d", Gs);
    o.font = s;
    const l = (r ? gt.wordWrap(t, e, n) : t).split(/(?:\r\n|\r|\n)/);
    const c = new Array(l.length);
    let p = 0;
    for (let _ = 0; _ < l.length; _++) {
      const T = gt._measureText(l[_], e.letterSpacing, o);
      c[_] = T;
      p = Math.max(p, T);
    }
    let g = p + e.strokeThickness;
    if (e.dropShadow) {
      g += e.dropShadowDistance;
    }
    const f = e.lineHeight || a.fontSize + e.strokeThickness;
    let v = Math.max(f, a.fontSize + e.strokeThickness * 2) + e.leading + (l.length - 1) * (f + e.leading);
    if (e.dropShadow) {
      v += e.dropShadowDistance;
    }
    return new gt(t, e, g, v, l, c, f + e.leading, p, a);
  }
  static _measureText(t, e, r) {
    let n = false;
    if (gt.experimentalLetterSpacingSupported) {
      if (gt.experimentalLetterSpacing) {
        r.letterSpacing = `${e}px`;
        r.textLetterSpacing = `${e}px`;
        n = true;
      } else {
        r.letterSpacing = "0px";
        r.textLetterSpacing = "0px";
      }
    }
    let s = r.measureText(t).width;
    if (s > 0) {
      if (n) {
        s -= e;
      } else {
        s += (gt.graphemeSegmenter(t).length - 1) * e;
      }
    }
    return s;
  }
  static wordWrap(t, e, r = gt._canvas) {
    const n = r.getContext("2d", Gs);
    let s = 0;
    let a = "";
    let o = "";
    const l = Object.create(null);
    const {
      letterSpacing: c,
      whiteSpace: p
    } = e;
    const g = gt.collapseSpaces(p);
    const f = gt.collapseNewlines(p);
    let v = !g;
    const _ = e.wordWrapWidth + c;
    const T = gt.tokenize(t);
    for (let A = 0; A < T.length; A++) {
      let E = T[A];
      if (gt.isNewline(E)) {
        if (!f) {
          o += gt.addLine(a);
          v = !g;
          a = "";
          s = 0;
          continue;
        }
        E = " ";
      }
      if (g) {
        const S = gt.isBreakingSpace(E);
        const P = gt.isBreakingSpace(a[a.length - 1]);
        if (S && P) {
          continue;
        }
      }
      const I = gt.getFromCache(E, c, l, n);
      if (I > _) {
        if (a !== "") {
          o += gt.addLine(a);
          a = "";
          s = 0;
        }
        if (gt.canBreakWords(E, e.breakWords)) {
          const S = gt.wordWrapSplit(E);
          for (let P = 0; P < S.length; P++) {
            let k = S[P];
            let V = k;
            let d = 1;
            while (S[P + d]) {
              const N = S[P + d];
              if (!gt.canBreakChars(V, N, E, P, e.breakWords)) {
                k += N;
              } else {
                break;
              }
              V = N;
              d++;
            }
            P += d - 1;
            const O = gt.getFromCache(k, c, l, n);
            if (O + s > _) {
              o += gt.addLine(a);
              v = false;
              a = "";
              s = 0;
            }
            a += k;
            s += O;
          }
        } else {
          if (a.length > 0) {
            o += gt.addLine(a);
            a = "";
            s = 0;
          }
          const S = A === T.length - 1;
          o += gt.addLine(E, !S);
          v = false;
          a = "";
          s = 0;
        }
      } else {
        if (I + s > _) {
          v = false;
          o += gt.addLine(a);
          a = "";
          s = 0;
        }
        if (a.length > 0 || !gt.isBreakingSpace(E) || v) {
          a += E;
          s += I;
        }
      }
    }
    o += gt.addLine(a, false);
    return o;
  }
  static addLine(t, e = true) {
    t = gt.trimRight(t);
    t = e ? `${t}
` : t;
    return t;
  }
  static getFromCache(t, e, r, n) {
    let s = r[t];
    if (typeof s != "number") {
      s = gt._measureText(t, e, n) + e;
      r[t] = s;
    }
    return s;
  }
  static collapseSpaces(t) {
    return t === "normal" || t === "pre-line";
  }
  static collapseNewlines(t) {
    return t === "normal";
  }
  static trimRight(t) {
    if (typeof t != "string") {
      return "";
    }
    for (let e = t.length - 1; e >= 0; e--) {
      const r = t[e];
      if (!gt.isBreakingSpace(r)) {
        break;
      }
      t = t.slice(0, -1);
    }
    return t;
  }
  static isNewline(t) {
    if (typeof t != "string") {
      return false;
    } else {
      return gt._newlines.includes(t.charCodeAt(0));
    }
  }
  static isBreakingSpace(t, e) {
    if (typeof t != "string") {
      return false;
    } else {
      return gt._breakingSpaces.includes(t.charCodeAt(0));
    }
  }
  static tokenize(t) {
    const e = [];
    let r = "";
    if (typeof t != "string") {
      return e;
    }
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      const a = t[n + 1];
      if (gt.isBreakingSpace(s, a) || gt.isNewline(s)) {
        if (r !== "") {
          e.push(r);
          r = "";
        }
        e.push(s);
        continue;
      }
      r += s;
    }
    if (r !== "") {
      e.push(r);
    }
    return e;
  }
  static canBreakWords(t, e) {
    return e;
  }
  static canBreakChars(t, e, r, n, s) {
    return true;
  }
  static wordWrapSplit(t) {
    return gt.graphemeSegmenter(t);
  }
  static measureFont(t) {
    if (gt._fonts[t]) {
      return gt._fonts[t];
    }
    const e = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    };
    const r = gt._canvas;
    const n = gt._context;
    n.font = t;
    const s = gt.METRICS_STRING + gt.BASELINE_SYMBOL;
    const a = Math.ceil(n.measureText(s).width);
    let o = Math.ceil(n.measureText(gt.BASELINE_SYMBOL).width);
    const l = Math.ceil(gt.HEIGHT_MULTIPLIER * o);
    o = o * gt.BASELINE_MULTIPLIER | 0;
    if (a === 0 || l === 0) {
      gt._fonts[t] = e;
      return e;
    }
    r.width = a;
    r.height = l;
    n.fillStyle = "#f00";
    n.fillRect(0, 0, a, l);
    n.font = t;
    n.textBaseline = "alphabetic";
    n.fillStyle = "#000";
    n.fillText(s, 0, o);
    const c = n.getImageData(0, 0, a, l).data;
    const p = c.length;
    const g = a * 4;
    let f = 0;
    let v = 0;
    let _ = false;
    for (f = 0; f < o; ++f) {
      for (let T = 0; T < g; T += 4) {
        if (c[v + T] !== 255) {
          _ = true;
          break;
        }
      }
      if (!_) {
        v += g;
      } else {
        break;
      }
    }
    e.ascent = o - f;
    v = p - g;
    _ = false;
    f = l;
    for (; f > o; --f) {
      for (let T = 0; T < g; T += 4) {
        if (c[v + T] !== 255) {
          _ = true;
          break;
        }
      }
      if (!_) {
        v -= g;
      } else {
        break;
      }
    }
    e.descent = f - o;
    e.fontSize = e.ascent + e.descent;
    gt._fonts[t] = e;
    return e;
  }
  static clearMetrics(t = "") {
    if (t) {
      delete gt._fonts[t];
    } else {
      gt._fonts = {};
    }
  }
  static get _canvas() {
    var t;
    if (!gt.__canvas) {
      let e;
      try {
        const r = new OffscreenCanvas(0, 0);
        if ((t = r.getContext("2d", Gs)) != null && t.measureText) {
          gt.__canvas = r;
          return r;
        }
        e = st.ADAPTER.createCanvas();
      } catch {
        e = st.ADAPTER.createCanvas();
      }
      e.width = e.height = 10;
      gt.__canvas = e;
    }
    return gt.__canvas;
  }
  static get _context() {
    gt.__context ||= gt._canvas.getContext("2d", Gs);
    return gt.__context;
  }
};
wr.METRICS_STRING = "|ÉqÅ";
wr.BASELINE_SYMBOL = "M";
wr.BASELINE_MULTIPLIER = 1.4;
wr.HEIGHT_MULTIPLIER = 2;
wr.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? undefined : Intl.Segmenter) == "function") {
    const i = new Intl.Segmenter();
    return t => [...i.segment(t)].map(e => e.segment);
  }
  return i => [...i];
})();
wr.experimentalLetterSpacing = false;
wr._fonts = {};
wr._newlines = [10, 13];
wr._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
let ni = wr;
const T_ = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
const If = class Xn {
  constructor(t) {
    this.styleID = 0;
    this.reset();
    Jo(this, t, t);
  }
  clone() {
    const t = {};
    Jo(t, this, Xn.defaultStyle);
    return new Xn(t);
  }
  reset() {
    Jo(this, Xn.defaultStyle, Xn.defaultStyle);
  }
  get align() {
    return this._align;
  }
  set align(t) {
    if (this._align !== t) {
      this._align = t;
      this.styleID++;
    }
  }
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(t) {
    if (this._breakWords !== t) {
      this._breakWords = t;
      this.styleID++;
    }
  }
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(t) {
    if (this._dropShadow !== t) {
      this._dropShadow = t;
      this.styleID++;
    }
  }
  get dropShadowAlpha() {
    return this._dropShadowAlpha;
  }
  set dropShadowAlpha(t) {
    if (this._dropShadowAlpha !== t) {
      this._dropShadowAlpha = t;
      this.styleID++;
    }
  }
  get dropShadowAngle() {
    return this._dropShadowAngle;
  }
  set dropShadowAngle(t) {
    if (this._dropShadowAngle !== t) {
      this._dropShadowAngle = t;
      this.styleID++;
    }
  }
  get dropShadowBlur() {
    return this._dropShadowBlur;
  }
  set dropShadowBlur(t) {
    if (this._dropShadowBlur !== t) {
      this._dropShadowBlur = t;
      this.styleID++;
    }
  }
  get dropShadowColor() {
    return this._dropShadowColor;
  }
  set dropShadowColor(t) {
    const e = Qo(t);
    if (this._dropShadowColor !== e) {
      this._dropShadowColor = e;
      this.styleID++;
    }
  }
  get dropShadowDistance() {
    return this._dropShadowDistance;
  }
  set dropShadowDistance(t) {
    if (this._dropShadowDistance !== t) {
      this._dropShadowDistance = t;
      this.styleID++;
    }
  }
  get fill() {
    return this._fill;
  }
  set fill(t) {
    const e = Qo(t);
    if (this._fill !== e) {
      this._fill = e;
      this.styleID++;
    }
  }
  get fillGradientType() {
    return this._fillGradientType;
  }
  set fillGradientType(t) {
    if (this._fillGradientType !== t) {
      this._fillGradientType = t;
      this.styleID++;
    }
  }
  get fillGradientStops() {
    return this._fillGradientStops;
  }
  set fillGradientStops(t) {
    if (!w_(this._fillGradientStops, t)) {
      this._fillGradientStops = t;
      this.styleID++;
    }
  }
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(t) {
    if (this.fontFamily !== t) {
      this._fontFamily = t;
      this.styleID++;
    }
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t) {
    if (this._fontSize !== t) {
      this._fontSize = t;
      this.styleID++;
    }
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(t) {
    if (this._fontStyle !== t) {
      this._fontStyle = t;
      this.styleID++;
    }
  }
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(t) {
    if (this._fontVariant !== t) {
      this._fontVariant = t;
      this.styleID++;
    }
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(t) {
    if (this._fontWeight !== t) {
      this._fontWeight = t;
      this.styleID++;
    }
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(t) {
    if (this._letterSpacing !== t) {
      this._letterSpacing = t;
      this.styleID++;
    }
  }
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(t) {
    if (this._lineHeight !== t) {
      this._lineHeight = t;
      this.styleID++;
    }
  }
  get leading() {
    return this._leading;
  }
  set leading(t) {
    if (this._leading !== t) {
      this._leading = t;
      this.styleID++;
    }
  }
  get lineJoin() {
    return this._lineJoin;
  }
  set lineJoin(t) {
    if (this._lineJoin !== t) {
      this._lineJoin = t;
      this.styleID++;
    }
  }
  get miterLimit() {
    return this._miterLimit;
  }
  set miterLimit(t) {
    if (this._miterLimit !== t) {
      this._miterLimit = t;
      this.styleID++;
    }
  }
  get padding() {
    return this._padding;
  }
  set padding(t) {
    if (this._padding !== t) {
      this._padding = t;
      this.styleID++;
    }
  }
  get stroke() {
    return this._stroke;
  }
  set stroke(t) {
    const e = Qo(t);
    if (this._stroke !== e) {
      this._stroke = e;
      this.styleID++;
    }
  }
  get strokeThickness() {
    return this._strokeThickness;
  }
  set strokeThickness(t) {
    if (this._strokeThickness !== t) {
      this._strokeThickness = t;
      this.styleID++;
    }
  }
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(t) {
    if (this._textBaseline !== t) {
      this._textBaseline = t;
      this.styleID++;
    }
  }
  get trim() {
    return this._trim;
  }
  set trim(t) {
    if (this._trim !== t) {
      this._trim = t;
      this.styleID++;
    }
  }
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(t) {
    if (this._whiteSpace !== t) {
      this._whiteSpace = t;
      this.styleID++;
    }
  }
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(t) {
    if (this._wordWrap !== t) {
      this._wordWrap = t;
      this.styleID++;
    }
  }
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(t) {
    if (this._wordWrapWidth !== t) {
      this._wordWrapWidth = t;
      this.styleID++;
    }
  }
  toFontString() {
    const t = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
    let e = this.fontFamily;
    if (!Array.isArray(this.fontFamily)) {
      e = this.fontFamily.split(",");
    }
    for (let r = e.length - 1; r >= 0; r--) {
      let n = e[r].trim();
      if (!/([\"\'])[^\'\"]+\1/.test(n) && !T_.includes(n)) {
        n = `"${n}"`;
      }
      e[r] = n;
    }
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`;
  }
};
If.defaultStyle = {
  align: "left",
  breakWords: false,
  dropShadow: false,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: ja.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: false,
  whiteSpace: "pre",
  wordWrap: false,
  wordWrapWidth: 100
};
let ui = If;
function Qo(i) {
  const t = Pt.shared;
  const e = r => {
    const n = t.setValue(r);
    if (n.alpha === 1) {
      return n.toHex();
    } else {
      return n.toRgbaString();
    }
  };
  if (Array.isArray(i)) {
    return i.map(e);
  } else {
    return e(i);
  }
}
function w_(i, t) {
  if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length) {
    return false;
  }
  for (let e = 0; e < i.length; ++e) {
    if (i[e] !== t[e]) {
      return false;
    }
  }
  return true;
}
function Jo(i, t, e) {
  for (const r in e) {
    if (Array.isArray(t[r])) {
      i[r] = t[r].slice();
    } else {
      i[r] = t[r];
    }
  }
}
const E_ = {
  texture: true,
  children: false,
  baseTexture: true
};
const Rf = class Kh extends Lr {
  constructor(t, e, r) {
    let n = false;
    if (!r) {
      r = st.ADAPTER.createCanvas();
      n = true;
    }
    r.width = 3;
    r.height = 3;
    const s = ut.from(r);
    s.orig = new At();
    s.trim = new At();
    super(s);
    this._ownCanvas = n;
    this.canvas = r;
    this.context = r.getContext("2d", {
      willReadFrequently: true
    });
    this._resolution = Kh.defaultResolution ?? st.RESOLUTION;
    this._autoResolution = Kh.defaultAutoResolution;
    this._text = null;
    this._style = null;
    this._styleListener = null;
    this._font = "";
    this.text = t;
    this.style = e;
    this.localStyleID = -1;
  }
  static get experimentalLetterSpacing() {
    return ni.experimentalLetterSpacing;
  }
  static set experimentalLetterSpacing(t) {
    vt("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing");
    ni.experimentalLetterSpacing = t;
  }
  updateText(t) {
    const e = this._style;
    if (this.localStyleID !== e.styleID) {
      this.dirty = true;
      this.localStyleID = e.styleID;
    }
    if (!this.dirty && t) {
      return;
    }
    this._font = this._style.toFontString();
    const r = this.context;
    const n = ni.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas);
    const s = n.width;
    const a = n.height;
    const o = n.lines;
    const l = n.lineHeight;
    const c = n.lineWidths;
    const p = n.maxLineWidth;
    const g = n.fontProperties;
    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, s) + e.padding * 2) * this._resolution);
    this.canvas.height = Math.ceil(Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution);
    r.scale(this._resolution, this._resolution);
    r.clearRect(0, 0, this.canvas.width, this.canvas.height);
    r.font = this._font;
    r.lineWidth = e.strokeThickness;
    r.textBaseline = e.textBaseline;
    r.lineJoin = e.lineJoin;
    r.miterLimit = e.miterLimit;
    let f;
    let v;
    const _ = e.dropShadow ? 2 : 1;
    for (let T = 0; T < _; ++T) {
      const A = e.dropShadow && T === 0;
      const E = A ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0;
      const I = E * this._resolution;
      if (A) {
        r.fillStyle = "black";
        r.strokeStyle = "black";
        const P = e.dropShadowColor;
        const k = e.dropShadowBlur * this._resolution;
        const V = e.dropShadowDistance * this._resolution;
        r.shadowColor = Pt.shared.setValue(P).setAlpha(e.dropShadowAlpha).toRgbaString();
        r.shadowBlur = k;
        r.shadowOffsetX = Math.cos(e.dropShadowAngle) * V;
        r.shadowOffsetY = Math.sin(e.dropShadowAngle) * V + I;
      } else {
        r.fillStyle = this._generateFillStyle(e, o, n);
        r.strokeStyle = e.stroke;
        r.shadowColor = "black";
        r.shadowBlur = 0;
        r.shadowOffsetX = 0;
        r.shadowOffsetY = 0;
      }
      let S = (l - g.fontSize) / 2;
      if (l - g.fontSize < 0) {
        S = 0;
      }
      for (let P = 0; P < o.length; P++) {
        f = e.strokeThickness / 2;
        v = e.strokeThickness / 2 + P * l + g.ascent + S;
        if (e.align === "right") {
          f += p - c[P];
        } else if (e.align === "center") {
          f += (p - c[P]) / 2;
        }
        if (e.stroke && e.strokeThickness) {
          this.drawLetterSpacing(o[P], f + e.padding, v + e.padding - E, true);
        }
        if (e.fill) {
          this.drawLetterSpacing(o[P], f + e.padding, v + e.padding - E);
        }
      }
    }
    this.updateTexture();
  }
  drawLetterSpacing(t, e, r, n = false) {
    const s = this._style.letterSpacing;
    let a = false;
    if (ni.experimentalLetterSpacingSupported) {
      if (ni.experimentalLetterSpacing) {
        this.context.letterSpacing = `${s}px`;
        this.context.textLetterSpacing = `${s}px`;
        a = true;
      } else {
        this.context.letterSpacing = "0px";
        this.context.textLetterSpacing = "0px";
      }
    }
    if (s === 0 || a) {
      if (n) {
        this.context.strokeText(t, e, r);
      } else {
        this.context.fillText(t, e, r);
      }
      return;
    }
    let o = e;
    const l = ni.graphemeSegmenter(t);
    let c = this.context.measureText(t).width;
    let p = 0;
    for (let g = 0; g < l.length; ++g) {
      const f = l[g];
      if (n) {
        this.context.strokeText(f, o, r);
      } else {
        this.context.fillText(f, o, r);
      }
      let v = "";
      for (let _ = g + 1; _ < l.length; ++_) {
        v += l[_];
      }
      p = this.context.measureText(v).width;
      o += c - p + s;
      c = p;
    }
  }
  updateTexture() {
    const t = this.canvas;
    if (this._style.trim) {
      const a = Dd(t);
      if (a.data) {
        t.width = a.width;
        t.height = a.height;
        this.context.putImageData(a.data, 0, 0);
      }
    }
    const e = this._texture;
    const r = this._style;
    const n = r.trim ? 0 : r.padding;
    const s = e.baseTexture;
    e.trim.width = e._frame.width = t.width / this._resolution;
    e.trim.height = e._frame.height = t.height / this._resolution;
    e.trim.x = -n;
    e.trim.y = -n;
    e.orig.width = e._frame.width - n * 2;
    e.orig.height = e._frame.height - n * 2;
    this._onTextureUpdate();
    s.setRealSize(t.width, t.height, this._resolution);
    e.updateUvs();
    this.dirty = false;
  }
  _render(t) {
    if (this._autoResolution && this._resolution !== t.resolution) {
      this._resolution = t.resolution;
      this.dirty = true;
    }
    this.updateText(true);
    super._render(t);
  }
  updateTransform() {
    this.updateText(true);
    super.updateTransform();
  }
  getBounds(t, e) {
    this.updateText(true);
    if (this._textureID === -1) {
      t = false;
    }
    return super.getBounds(t, e);
  }
  getLocalBounds(t) {
    this.updateText(true);
    return super.getLocalBounds.call(this, t);
  }
  _calculateBounds() {
    this.calculateVertices();
    this._bounds.addQuad(this.vertexData);
  }
  _generateFillStyle(t, e, r) {
    const n = t.fill;
    if (Array.isArray(n)) {
      if (n.length === 1) {
        return n[0];
      }
    } else {
      return n;
    }
    let s;
    const a = t.dropShadow ? t.dropShadowDistance : 0;
    const o = t.padding || 0;
    const l = this.canvas.width / this._resolution - a - o * 2;
    const c = this.canvas.height / this._resolution - a - o * 2;
    const p = n.slice();
    const g = t.fillGradientStops.slice();
    if (!g.length) {
      const f = p.length + 1;
      for (let v = 1; v < f; ++v) {
        g.push(v / f);
      }
    }
    p.unshift(n[0]);
    g.unshift(0);
    p.push(n[n.length - 1]);
    g.push(1);
    if (t.fillGradientType === ja.LINEAR_VERTICAL) {
      s = this.context.createLinearGradient(l / 2, o, l / 2, c + o);
      const f = r.fontProperties.fontSize + t.strokeThickness;
      for (let v = 0; v < e.length; v++) {
        const _ = r.lineHeight * (v - 1) + f;
        const T = r.lineHeight * v;
        let A = T;
        if (v > 0 && _ > T) {
          A = (T + _) / 2;
        }
        const E = T + f;
        const I = r.lineHeight * (v + 1);
        let S = E;
        if (v + 1 < e.length && I < E) {
          S = (E + I) / 2;
        }
        const P = (S - A) / c;
        for (let k = 0; k < p.length; k++) {
          let V = 0;
          if (typeof g[k] == "number") {
            V = g[k];
          } else {
            V = k / p.length;
          }
          let d = Math.min(1, Math.max(0, A / c + V * P));
          d = Number(d.toFixed(5));
          s.addColorStop(d, p[k]);
        }
      }
    } else {
      s = this.context.createLinearGradient(o, c / 2, l + o, c / 2);
      const f = p.length + 1;
      let v = 1;
      for (let _ = 0; _ < p.length; _++) {
        let T;
        if (typeof g[_] == "number") {
          T = g[_];
        } else {
          T = v / f;
        }
        s.addColorStop(T, p[_]);
        v++;
      }
    }
    return s;
  }
  destroy(t) {
    if (typeof t == "boolean") {
      t = {
        children: t
      };
    }
    t = Object.assign({}, E_, t);
    super.destroy(t);
    if (this._ownCanvas) {
      this.canvas.height = this.canvas.width = 0;
    }
    this.context = null;
    this.canvas = null;
    this._style = null;
  }
  get width() {
    this.updateText(true);
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    this.updateText(true);
    const e = Xr(this.scale.x) || 1;
    this.scale.x = e * t / this._texture.orig.width;
    this._width = t;
  }
  get height() {
    this.updateText(true);
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    this.updateText(true);
    const e = Xr(this.scale.y) || 1;
    this.scale.y = e * t / this._texture.orig.height;
    this._height = t;
  }
  get style() {
    return this._style;
  }
  set style(t) {
    t = t || {};
    if (t instanceof ui) {
      this._style = t;
    } else {
      this._style = new ui(t);
    }
    this.localStyleID = -1;
    this.dirty = true;
  }
  get text() {
    return this._text;
  }
  set text(t) {
    t = String(t ?? "");
    if (this._text !== t) {
      this._text = t;
      this.dirty = true;
    }
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._autoResolution = false;
    if (this._resolution !== t) {
      this._resolution = t;
      this.dirty = true;
    }
  }
};
Rf.defaultAutoResolution = true;
let Sl = Rf;
Sl.prototype._renderCanvas = function (i) {
  if (this._autoResolution && this._resolution !== i.resolution) {
    this._resolution = i.resolution;
    this.dirty = true;
  }
  this.updateText(true);
  Lr.prototype._renderCanvas.call(this, i);
};
const Pf = new jt();
re.prototype._cacheAsBitmap = false;
re.prototype._cacheData = null;
re.prototype._cacheAsBitmapResolution = null;
re.prototype._cacheAsBitmapMultisample = null;
class A_ {
  constructor() {
    this.textureCacheId = null;
    this.originalRender = null;
    this.originalRenderCanvas = null;
    this.originalCalculateBounds = null;
    this.originalGetLocalBounds = null;
    this.originalUpdateTransform = null;
    this.originalDestroy = null;
    this.originalMask = null;
    this.originalFilterArea = null;
    this.originalContainsPoint = null;
    this.sprite = null;
  }
}
Object.defineProperties(re.prototype, {
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(i) {
      if (i !== this._cacheAsBitmapResolution) {
        this._cacheAsBitmapResolution = i;
        if (this.cacheAsBitmap) {
          this.cacheAsBitmap = false;
          this.cacheAsBitmap = true;
        }
      }
    }
  },
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(i) {
      if (i !== this._cacheAsBitmapMultisample) {
        this._cacheAsBitmapMultisample = i;
        if (this.cacheAsBitmap) {
          this.cacheAsBitmap = false;
          this.cacheAsBitmap = true;
        }
      }
    }
  },
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(i) {
      if (this._cacheAsBitmap === i) {
        return;
      }
      this._cacheAsBitmap = i;
      let t;
      if (i) {
        this._cacheData ||= new A_();
        t = this._cacheData;
        t.originalRender = this.render;
        t.originalRenderCanvas = this.renderCanvas;
        t.originalUpdateTransform = this.updateTransform;
        t.originalCalculateBounds = this.calculateBounds;
        t.originalGetLocalBounds = this.getLocalBounds;
        t.originalDestroy = this.destroy;
        t.originalContainsPoint = this.containsPoint;
        t.originalMask = this._mask;
        t.originalFilterArea = this.filterArea;
        this.render = this._renderCached;
        this.renderCanvas = this._renderCachedCanvas;
        this.destroy = this._cacheAsBitmapDestroy;
      } else {
        t = this._cacheData;
        if (t.sprite) {
          this._destroyCachedDisplayObject();
        }
        this.render = t.originalRender;
        this.renderCanvas = t.originalRenderCanvas;
        this.calculateBounds = t.originalCalculateBounds;
        this.getLocalBounds = t.originalGetLocalBounds;
        this.destroy = t.originalDestroy;
        this.updateTransform = t.originalUpdateTransform;
        this.containsPoint = t.originalContainsPoint;
        this._mask = t.originalMask;
        this.filterArea = t.originalFilterArea;
      }
    }
  }
});
re.prototype._renderCached = function (i) {
  if (!!this.visible && !(this.worldAlpha <= 0) && !!this.renderable) {
    this._initCachedDisplayObject(i);
    this._cacheData.sprite.transform._worldID = this.transform._worldID;
    this._cacheData.sprite.worldAlpha = this.worldAlpha;
    this._cacheData.sprite._render(i);
  }
};
re.prototype._initCachedDisplayObject = function (i) {
  var f;
  var v;
  if ((f = this._cacheData) != null && f.sprite) {
    return;
  }
  const t = this.alpha;
  this.alpha = 1;
  i.batch.flush();
  const e = this.getLocalBounds(new At(), true);
  if ((v = this.filters) != null && v.length) {
    const _ = this.filters[0].padding;
    e.pad(_);
  }
  const r = this.cacheAsBitmapResolution || i.resolution;
  e.ceil(r);
  e.width = Math.max(e.width, 1 / r);
  e.height = Math.max(e.height, 1 / r);
  const n = i.renderTexture.current;
  const s = i.renderTexture.sourceFrame.clone();
  const a = i.renderTexture.destinationFrame.clone();
  const o = i.projection.transform;
  const l = Or.create({
    width: e.width,
    height: e.height,
    resolution: r,
    multisample: this.cacheAsBitmapMultisample ?? i.multisample
  });
  const c = `cacheAsBitmap_${hi()}`;
  this._cacheData.textureCacheId = c;
  Tt.addToCache(l.baseTexture, c);
  ut.addToCache(l, c);
  const p = this.transform.localTransform.copyTo(Pf).invert().translate(-e.x, -e.y);
  this.render = this._cacheData.originalRender;
  i.render(this, {
    renderTexture: l,
    clear: true,
    transform: p,
    skipUpdateTransform: false
  });
  i.framebuffer.blit();
  i.projection.transform = o;
  i.renderTexture.bind(n, s, a);
  this.render = this._renderCached;
  this.updateTransform = this.displayObjectUpdateTransform;
  this.calculateBounds = this._calculateCachedBounds;
  this.getLocalBounds = this._getCachedLocalBounds;
  this._mask = null;
  this.filterArea = null;
  this.alpha = t;
  const g = new Lr(l);
  g.transform.worldTransform = this.transform.worldTransform;
  g.anchor.x = -(e.x / e.width);
  g.anchor.y = -(e.y / e.height);
  g.alpha = t;
  g._bounds = this._bounds;
  this._cacheData.sprite = g;
  this.transform._parentID = -1;
  if (this.parent) {
    this.updateTransform();
  } else {
    this.enableTempParent();
    this.updateTransform();
    this.disableTempParent(null);
  }
  this.containsPoint = g.containsPoint.bind(g);
};
re.prototype._renderCachedCanvas = function (i) {
  if (!!this.visible && !(this.worldAlpha <= 0) && !!this.renderable) {
    this._initCachedDisplayObjectCanvas(i);
    this._cacheData.sprite.worldAlpha = this.worldAlpha;
    this._cacheData.sprite._renderCanvas(i);
  }
};
re.prototype._initCachedDisplayObjectCanvas = function (i) {
  var p;
  if ((p = this._cacheData) != null && p.sprite) {
    return;
  }
  const t = this.getLocalBounds(new At(), true);
  const e = this.alpha;
  this.alpha = 1;
  const r = i.canvasContext.activeContext;
  const n = i._projTransform;
  const s = this.cacheAsBitmapResolution || i.resolution;
  t.ceil(s);
  t.width = Math.max(t.width, 1 / s);
  t.height = Math.max(t.height, 1 / s);
  const a = Or.create({
    width: t.width,
    height: t.height,
    resolution: s
  });
  const o = `cacheAsBitmap_${hi()}`;
  this._cacheData.textureCacheId = o;
  Tt.addToCache(a.baseTexture, o);
  ut.addToCache(a, o);
  const l = Pf;
  this.transform.localTransform.copyTo(l);
  l.invert();
  l.tx -= t.x;
  l.ty -= t.y;
  this.renderCanvas = this._cacheData.originalRenderCanvas;
  i.render(this, {
    renderTexture: a,
    clear: true,
    transform: l,
    skipUpdateTransform: false
  });
  i.canvasContext.activeContext = r;
  i._projTransform = n;
  this.renderCanvas = this._renderCachedCanvas;
  this.updateTransform = this.displayObjectUpdateTransform;
  this.calculateBounds = this._calculateCachedBounds;
  this.getLocalBounds = this._getCachedLocalBounds;
  this._mask = null;
  this.filterArea = null;
  this.alpha = e;
  const c = new Lr(a);
  c.transform.worldTransform = this.transform.worldTransform;
  c.anchor.x = -(t.x / t.width);
  c.anchor.y = -(t.y / t.height);
  c.alpha = e;
  c._bounds = this._bounds;
  this._cacheData.sprite = c;
  this.transform._parentID = -1;
  if (this.parent) {
    this.updateTransform();
  } else {
    this.parent = i._tempDisplayObjectParent;
    this.updateTransform();
    this.parent = null;
  }
  this.containsPoint = c.containsPoint.bind(c);
};
re.prototype._calculateCachedBounds = function () {
  this._bounds.clear();
  this._cacheData.sprite.transform._worldID = this.transform._worldID;
  this._cacheData.sprite._calculateBounds();
  this._bounds.updateID = this._boundsID;
};
re.prototype._getCachedLocalBounds = function () {
  return this._cacheData.sprite.getLocalBounds(null);
};
re.prototype._destroyCachedDisplayObject = function () {
  this._cacheData.sprite._texture.destroy(true);
  this._cacheData.sprite = null;
  Tt.removeFromCache(this._cacheData.textureCacheId);
  ut.removeFromCache(this._cacheData.textureCacheId);
  this._cacheData.textureCacheId = null;
};
re.prototype._cacheAsBitmapDestroy = function (i) {
  this.cacheAsBitmap = false;
  this.destroy(i);
};
re.prototype.name = null;
Ue.prototype.getChildByName = function (i, t) {
  for (let e = 0, r = this.children.length; e < r; e++) {
    if (this.children[e].name === i) {
      return this.children[e];
    }
  }
  if (t) {
    for (let e = 0, r = this.children.length; e < r; e++) {
      const n = this.children[e];
      if (!n.getChildByName) {
        continue;
      }
      const s = n.getChildByName(i, true);
      if (s) {
        return s;
      }
    }
  }
  return null;
};
re.prototype.getGlobalPosition = function (i = new Bt(), t = false) {
  if (this.parent) {
    this.parent.toGlobal(this.position, i, t);
  } else {
    i.x = this.position.x;
    i.y = this.position.y;
  }
  return i;
};
var S_ = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class C_ extends De {
  constructor(t = 1) {
    super(n_, S_, {
      uAlpha: 1
    });
    this.alpha = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
const I_ = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [0.000489, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
};
const R_ = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`);
function P_(i) {
  const t = I_[i];
  const e = t.length;
  let r = R_;
  let n = "";
  const s = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let a;
  for (let o = 0; o < i; o++) {
    let l = s.replace("%index%", o.toString());
    a = o;
    if (o >= e) {
      a = i - o - 1;
    }
    l = l.replace("%value%", t[a].toString());
    n += l;
    n += `
`;
  }
  r = r.replace("%blur%", n);
  r = r.replace("%size%", i.toString());
  return r;
}
const M_ = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function D_(i, t) {
  const e = Math.ceil(i / 2);
  let r = M_;
  let n = "";
  let s;
  if (t) {
    s = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);";
  } else {
    s = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  }
  for (let a = 0; a < i; a++) {
    let o = s.replace("%index%", a.toString());
    o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`);
    n += o;
    n += `
`;
  }
  r = r.replace("%blur%", n);
  r = r.replace("%size%", i.toString());
  return r;
}
class Zh extends De {
  constructor(t, e = 8, r = 4, n = De.defaultResolution, s = 5) {
    const a = D_(s, t);
    const o = P_(s);
    super(a, o);
    this.horizontal = t;
    this.resolution = n;
    this._quality = 0;
    this.quality = r;
    this.blur = e;
  }
  apply(t, e, r, n) {
    if (r) {
      if (this.horizontal) {
        this.uniforms.strength = 1 / r.width * (r.width / e.width);
      } else {
        this.uniforms.strength = 1 / r.height * (r.height / e.height);
      }
    } else if (this.horizontal) {
      this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width);
    } else {
      this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height);
    }
    this.uniforms.strength *= this.strength;
    this.uniforms.strength /= this.passes;
    if (this.passes === 1) {
      t.applyFilter(this, e, r, n);
    } else {
      const s = t.getFilterTexture();
      const a = t.renderer;
      let o = e;
      let l = s;
      this.state.blend = false;
      t.applyFilter(this, o, l, Cr.CLEAR);
      for (let c = 1; c < this.passes - 1; c++) {
        t.bindAndClear(o, Cr.BLIT);
        this.uniforms.uSampler = l;
        const p = l;
        l = o;
        o = p;
        a.shader.bind(this);
        a.geometry.draw(5);
      }
      this.state.blend = true;
      t.applyFilter(this, l, r, n);
      t.returnFilterTexture(s);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(t) {
    this.padding = 1 + Math.abs(t) * 2;
    this.strength = t;
  }
  get quality() {
    return this._quality;
  }
  set quality(t) {
    this._quality = t;
    this.passes = t;
  }
}
class B_ extends De {
  constructor(t = 8, e = 4, r = De.defaultResolution, n = 5) {
    super();
    this._repeatEdgePixels = false;
    this.blurXFilter = new Zh(true, t, e, r, n);
    this.blurYFilter = new Zh(false, t, e, r, n);
    this.resolution = r;
    this.quality = e;
    this.blur = t;
    this.repeatEdgePixels = false;
  }
  apply(t, e, r, n) {
    const s = Math.abs(this.blurXFilter.strength);
    const a = Math.abs(this.blurYFilter.strength);
    if (s && a) {
      const o = t.getFilterTexture();
      this.blurXFilter.apply(t, e, o, Cr.CLEAR);
      this.blurYFilter.apply(t, o, r, n);
      t.returnFilterTexture(o);
    } else if (a) {
      this.blurYFilter.apply(t, e, r, n);
    } else {
      this.blurXFilter.apply(t, e, r, n);
    }
  }
  updatePadding() {
    if (this._repeatEdgePixels) {
      this.padding = 0;
    } else {
      this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
    }
  }
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(t) {
    this.blurXFilter.blur = this.blurYFilter.blur = t;
    this.updatePadding();
  }
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(t) {
    this.blurXFilter.blur = t;
    this.updatePadding();
  }
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(t) {
    this.blurYFilter.blur = t;
    this.updatePadding();
  }
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(t) {
    this.blurYFilter.blendMode = t;
  }
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    this._repeatEdgePixels = t;
    this.updatePadding();
  }
}
var F_ = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class Qh extends De {
  constructor() {
    const t = {
      m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
      uAlpha: 1
    };
    super(ff, F_, t);
    this.alpha = 1;
  }
  _loadMatrix(t, e = false) {
    let r = t;
    if (e) {
      this._multiply(r, this.uniforms.m, t);
      r = this._colorMatrix(r);
    }
    this.uniforms.m = r;
  }
  _multiply(t, e, r) {
    t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15];
    t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16];
    t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17];
    t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18];
    t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4];
    t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15];
    t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16];
    t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17];
    t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18];
    t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9];
    t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15];
    t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16];
    t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17];
    t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18];
    t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14];
    t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15];
    t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16];
    t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17];
    t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18];
    t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19];
    return t;
  }
  _colorMatrix(t) {
    const e = new Float32Array(t);
    e[4] /= 255;
    e[9] /= 255;
    e[14] /= 255;
    e[19] /= 255;
    return e;
  }
  brightness(t, e) {
    const r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  tint(t, e) {
    const [r, n, s] = Pt.shared.setValue(t).toArray();
    const a = [r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(a, e);
  }
  greyscale(t, e) {
    const r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  blackAndWhite(t) {
    const e = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  hue(t, e) {
    t = (t || 0) / 180 * Math.PI;
    const r = Math.cos(t);
    const n = Math.sin(t);
    const s = Math.sqrt;
    const a = 1 / 3;
    const o = s(a);
    const l = r + (1 - r) * a;
    const c = a * (1 - r) - o * n;
    const p = a * (1 - r) + o * n;
    const g = a * (1 - r) + o * n;
    const f = r + a * (1 - r);
    const v = a * (1 - r) - o * n;
    const _ = a * (1 - r) - o * n;
    const T = a * (1 - r) + o * n;
    const A = r + a * (1 - r);
    const E = [l, c, p, 0, 0, g, f, v, 0, 0, _, T, A, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(E, e);
  }
  contrast(t, e) {
    const r = (t || 0) + 1;
    const n = (r - 1) * -0.5;
    const s = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
    this._loadMatrix(s, e);
  }
  saturate(t = 0, e) {
    const r = t * 2 / 3 + 1;
    const n = (r - 1) * -0.5;
    const s = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(s, e);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(t) {
    const e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  sepia(t) {
    const e = [0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  technicolor(t) {
    const e = [1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  polaroid(t) {
    const e = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  toBGR(t) {
    const e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  kodachrome(t) {
    const e = [1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  browni(t) {
    const e = [0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  vintage(t) {
    const e = [0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  colorTone(t, e, r, n, s) {
    t = t || 0.2;
    e = e || 0.15;
    r = r || 16770432;
    n = n || 3375104;
    const a = Pt.shared;
    const [o, l, c] = a.setValue(r).toArray();
    const [p, g, f] = a.setValue(n).toArray();
    const v = [0.3, 0.59, 0.11, 0, 0, o, l, c, t, 0, p, g, f, e, 0, o - p, l - g, c - f, 0, 0];
    this._loadMatrix(v, s);
  }
  night(t, e) {
    t = t || 0.1;
    const r = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  predator(t, e) {
    const r = [t * 11.224130630493164, t * -4.794486999511719, t * -2.8746118545532227, t * 0, t * 0.40342438220977783, t * -3.6330697536468506, t * 9.193157196044922, t * -2.951810836791992, t * 0, t * -1.316135048866272, t * -3.2184197902679443, t * -4.2375030517578125, t * 7.476448059082031, t * 0, t * 0.8044459223747253, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  lsd(t) {
    const e = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, t);
  }
  reset() {
    const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, false);
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(t) {
    this.uniforms.m = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
Qh.prototype.grayscale = Qh.prototype.greyscale;
var O_ = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`;
var N_ = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class L_ extends De {
  constructor(t, e) {
    const r = new jt();
    t.renderable = false;
    super(N_, O_, {
      mapSampler: t._texture,
      filterMatrix: r,
      scale: {
        x: 1,
        y: 1
      },
      rotation: new Float32Array([1, 0, 0, 1])
    });
    this.maskSprite = t;
    this.maskMatrix = r;
    if (e == null) {
      e = 20;
    }
    this.scale = new Bt(e, e);
  }
  apply(t, e, r, n) {
    this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
    this.uniforms.scale.x = this.scale.x;
    this.uniforms.scale.y = this.scale.y;
    const s = this.maskSprite.worldTransform;
    const a = Math.sqrt(s.a * s.a + s.b * s.b);
    const o = Math.sqrt(s.c * s.c + s.d * s.d);
    if (a !== 0 && o !== 0) {
      this.uniforms.rotation[0] = s.a / a;
      this.uniforms.rotation[1] = s.b / a;
      this.uniforms.rotation[2] = s.c / o;
      this.uniforms.rotation[3] = s.d / o;
    }
    t.applyFilter(this, e, r, n);
  }
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(t) {
    this.uniforms.mapSampler = t;
  }
}
var k_ = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;
var U_ = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class G_ extends De {
  constructor() {
    super(U_, k_);
  }
}
var H_ = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class $_ extends De {
  constructor(t = 0.5, e = Math.random()) {
    super(ff, H_, {
      uNoise: 0,
      uSeed: 0
    });
    this.noise = t;
    this.seed = e;
  }
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(t) {
    this.uniforms.uNoise = t;
  }
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(t) {
    this.uniforms.uSeed = t;
  }
}
const xc = {
  AlphaFilter: C_,
  BlurFilter: B_,
  BlurFilterPass: Zh,
  ColorMatrixFilter: Qh,
  DisplacementFilter: L_,
  FXAAFilter: G_,
  NoiseFilter: $_
};
Object.entries(xc).forEach(([i, t]) => {
  Object.defineProperty(xc, i, {
    get() {
      vt("7.1.0", `filters.${i} has moved to ${i}`);
      return t;
    }
  });
});
class V_ {
  constructor() {
    this.interactionFrequency = 10;
    this._deltaTime = 0;
    this._didMove = false;
    this.tickerAdded = false;
    this._pauseUpdate = true;
  }
  init(t) {
    this.removeTickerListener();
    this.events = t;
    this.interactionFrequency = 10;
    this._deltaTime = 0;
    this._didMove = false;
    this.tickerAdded = false;
    this._pauseUpdate = true;
  }
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(t) {
    this._pauseUpdate = t;
  }
  addTickerListener() {
    if (!this.tickerAdded && !!this.domElement) {
      We.system.add(this.tickerUpdate, this, Fi.INTERACTION);
      this.tickerAdded = true;
    }
  }
  removeTickerListener() {
    if (this.tickerAdded) {
      We.system.remove(this.tickerUpdate, this);
      this.tickerAdded = false;
    }
  }
  pointerMoved() {
    this._didMove = true;
  }
  update() {
    if (!this.domElement || this._pauseUpdate) {
      return;
    }
    if (this._didMove) {
      this._didMove = false;
      return;
    }
    const t = this.events.rootPointerEvent;
    if (!this.events.supportsTouchEvents || t.pointerType !== "touch") {
      globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
        clientX: t.clientX,
        clientY: t.clientY
      }));
    }
  }
  tickerUpdate(t) {
    this._deltaTime += t;
    if (!(this._deltaTime < this.interactionFrequency)) {
      this._deltaTime = 0;
      this.update();
    }
  }
}
const si = new V_();
class cs {
  constructor(t) {
    this.bubbles = true;
    this.cancelBubble = true;
    this.cancelable = false;
    this.composed = false;
    this.defaultPrevented = false;
    this.eventPhase = cs.prototype.NONE;
    this.propagationStopped = false;
    this.propagationImmediatelyStopped = false;
    this.layer = new Bt();
    this.page = new Bt();
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.manager = t;
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    if (this.manager && (!this.path || this.path[this.path.length - 1] !== this.target)) {
      this.path = this.target ? this.manager.propagationPath(this.target) : [];
    }
    return this.path;
  }
  initEvent(t, e, r) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  initUIEvent(t, e, r, n, s) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  preventDefault() {
    if (this.nativeEvent instanceof Event && this.nativeEvent.cancelable) {
      this.nativeEvent.preventDefault();
    }
    this.defaultPrevented = true;
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = true;
  }
  stopPropagation() {
    this.propagationStopped = true;
  }
}
class xa extends cs {
  constructor() {
    super(...arguments);
    this.client = new Bt();
    this.movement = new Bt();
    this.offset = new Bt();
    this.global = new Bt();
    this.screen = new Bt();
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getLocalPosition(t, e, r) {
    return t.worldTransform.applyInverse(r || this.global, e);
  }
  getModifierState(t) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t);
  }
  initMouseEvent(t, e, r, n, s, a, o, l, c, p, g, f, v, _, T) {
    throw new Error("Method not implemented.");
  }
}
class sr extends xa {
  constructor() {
    super(...arguments);
    this.width = 0;
    this.height = 0;
    this.isPrimary = false;
  }
  getCoalescedEvents() {
    if (this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove") {
      return [this];
    } else {
      return [];
    }
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class dn extends xa {
  constructor() {
    super(...arguments);
    this.DOM_DELTA_PIXEL = 0;
    this.DOM_DELTA_LINE = 1;
    this.DOM_DELTA_PAGE = 2;
  }
}
dn.DOM_DELTA_PIXEL = 0;
dn.DOM_DELTA_LINE = 1;
dn.DOM_DELTA_PAGE = 2;
const W_ = 2048;
const j_ = new Bt();
const th = new Bt();
class X_ {
  constructor(t) {
    this.dispatch = new xn();
    this.moveOnAll = false;
    this.enableGlobalMoveEvents = true;
    this.mappingState = {
      trackingData: {}
    };
    this.eventPool = new Map();
    this._allInteractiveElements = [];
    this._hitElements = [];
    this._isPointerMoveEvent = false;
    this.rootTarget = t;
    this.hitPruneFn = this.hitPruneFn.bind(this);
    this.hitTestFn = this.hitTestFn.bind(this);
    this.mapPointerDown = this.mapPointerDown.bind(this);
    this.mapPointerMove = this.mapPointerMove.bind(this);
    this.mapPointerOut = this.mapPointerOut.bind(this);
    this.mapPointerOver = this.mapPointerOver.bind(this);
    this.mapPointerUp = this.mapPointerUp.bind(this);
    this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this);
    this.mapWheel = this.mapWheel.bind(this);
    this.mappingTable = {};
    this.addEventMapping("pointerdown", this.mapPointerDown);
    this.addEventMapping("pointermove", this.mapPointerMove);
    this.addEventMapping("pointerout", this.mapPointerOut);
    this.addEventMapping("pointerleave", this.mapPointerOut);
    this.addEventMapping("pointerover", this.mapPointerOver);
    this.addEventMapping("pointerup", this.mapPointerUp);
    this.addEventMapping("pointerupoutside", this.mapPointerUpOutside);
    this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(t, e) {
    this.mappingTable[t] ||= [];
    this.mappingTable[t].push({
      fn: e,
      priority: 0
    });
    this.mappingTable[t].sort((r, n) => r.priority - n.priority);
  }
  dispatchEvent(t, e) {
    t.propagationStopped = false;
    t.propagationImmediatelyStopped = false;
    this.propagate(t, e);
    this.dispatch.emit(e || t.type, t);
  }
  mapEvent(t) {
    if (!this.rootTarget) {
      return;
    }
    const e = this.mappingTable[t.type];
    if (e) {
      for (let r = 0, n = e.length; r < n; r++) {
        e[r].fn(t);
      }
    } else {
      console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
    }
  }
  hitTest(t, e) {
    si.pauseUpdate = true;
    const r = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive";
    const n = this[r](this.rootTarget, this.rootTarget.eventMode, j_.set(t, e), this.hitTestFn, this.hitPruneFn);
    return n && n[0];
  }
  propagate(t, e) {
    if (!t.target) {
      return;
    }
    const r = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let n = 0, s = r.length - 1; n < s; n++) {
      t.currentTarget = r[n];
      this.notifyTarget(t, e);
      if (t.propagationStopped || t.propagationImmediatelyStopped) {
        return;
      }
    }
    t.eventPhase = t.AT_TARGET;
    t.currentTarget = t.target;
    this.notifyTarget(t, e);
    if (!t.propagationStopped && !t.propagationImmediatelyStopped) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let n = r.length - 2; n >= 0; n--) {
        t.currentTarget = r[n];
        this.notifyTarget(t, e);
        if (t.propagationStopped || t.propagationImmediatelyStopped) {
          return;
        }
      }
    }
  }
  all(t, e, r = this._allInteractiveElements) {
    if (r.length === 0) {
      return;
    }
    t.eventPhase = t.BUBBLING_PHASE;
    const n = Array.isArray(e) ? e : [e];
    for (let s = r.length - 1; s >= 0; s--) {
      n.forEach(a => {
        t.currentTarget = r[s];
        this.notifyTarget(t, a);
      });
    }
  }
  propagationPath(t) {
    const e = [t];
    for (let r = 0; r < W_ && t !== this.rootTarget; r++) {
      if (!t.parent) {
        throw new Error("Cannot find propagation path to disconnected target");
      }
      e.push(t.parent);
      t = t.parent;
    }
    e.reverse();
    return e;
  }
  hitTestMoveRecursive(t, e, r, n, s, a = false) {
    let o = false;
    if (this._interactivePrune(t)) {
      return null;
    }
    if (t.eventMode === "dynamic" || e === "dynamic") {
      si.pauseUpdate = false;
    }
    if (t.interactiveChildren && t.children) {
      const p = t.children;
      for (let g = p.length - 1; g >= 0; g--) {
        const f = p[g];
        const v = this.hitTestMoveRecursive(f, this._isInteractive(e) ? e : f.eventMode, r, n, s, a || s(t, r));
        if (v) {
          if (v.length > 0 && !v[v.length - 1].parent) {
            continue;
          }
          const _ = t.isInteractive();
          if (v.length > 0 || _) {
            if (_) {
              this._allInteractiveElements.push(t);
            }
            v.push(t);
          }
          if (this._hitElements.length === 0) {
            this._hitElements = v;
          }
          o = true;
        }
      }
    }
    const l = this._isInteractive(e);
    const c = t.isInteractive();
    if (l && c) {
      this._allInteractiveElements.push(t);
    }
    if (a || this._hitElements.length > 0) {
      return null;
    } else if (o) {
      return this._hitElements;
    } else if (l && !s(t, r) && n(t, r)) {
      if (c) {
        return [t];
      } else {
        return [];
      }
    } else {
      return null;
    }
  }
  hitTestRecursive(t, e, r, n, s) {
    if (this._interactivePrune(t) || s(t, r)) {
      return null;
    }
    if (t.eventMode === "dynamic" || e === "dynamic") {
      si.pauseUpdate = false;
    }
    if (t.interactiveChildren && t.children) {
      const l = t.children;
      for (let c = l.length - 1; c >= 0; c--) {
        const p = l[c];
        const g = this.hitTestRecursive(p, this._isInteractive(e) ? e : p.eventMode, r, n, s);
        if (g) {
          if (g.length > 0 && !g[g.length - 1].parent) {
            continue;
          }
          const f = t.isInteractive();
          if (g.length > 0 || f) {
            g.push(t);
          }
          return g;
        }
      }
    }
    const a = this._isInteractive(e);
    const o = t.isInteractive();
    if (a && n(t, r)) {
      if (o) {
        return [t];
      } else {
        return [];
      }
    } else {
      return null;
    }
  }
  _isInteractive(t) {
    return t === "static" || t === "dynamic";
  }
  _interactivePrune(t) {
    return !t || !!t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || !!t.isMask;
  }
  hitPruneFn(t, e) {
    var r;
    if (t.hitArea && (t.worldTransform.applyInverse(e, th), !t.hitArea.contains(th.x, th.y))) {
      return true;
    }
    if (t._mask) {
      const n = t._mask.isMaskData ? t._mask.maskObject : t._mask;
      if (n && ((r = n.containsPoint) == null || !r.call(n, e))) {
        return true;
      }
    }
    return false;
  }
  hitTestFn(t, e) {
    if (t.eventMode === "passive") {
      return false;
    } else if (t.hitArea) {
      return true;
    } else if (t.containsPoint) {
      return t.containsPoint(e);
    } else {
      return false;
    }
  }
  notifyTarget(t, e) {
    var s;
    var a;
    e = e ?? t.type;
    const r = `on${e}`;
    if ((a = (s = t.currentTarget)[r]) != null) {
      a.call(s, t);
    }
    const n = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
    this.notifyListeners(t, n);
    if (t.eventPhase === t.AT_TARGET) {
      this.notifyListeners(t, e);
    }
  }
  mapPointerDown(t) {
    if (!(t instanceof sr)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.createPointerEvent(t);
    this.dispatchEvent(e, "pointerdown");
    if (e.pointerType === "touch") {
      this.dispatchEvent(e, "touchstart");
    } else if (e.pointerType === "mouse" || e.pointerType === "pen") {
      const n = e.button === 2;
      this.dispatchEvent(e, n ? "rightdown" : "mousedown");
    }
    const r = this.trackingData(t.pointerId);
    r.pressTargetsByButton[t.button] = e.composedPath();
    this.freeEvent(e);
  }
  mapPointerMove(t) {
    var l;
    var c;
    if (!(t instanceof sr)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    this._allInteractiveElements.length = 0;
    this._hitElements.length = 0;
    this._isPointerMoveEvent = true;
    const e = this.createPointerEvent(t);
    this._isPointerMoveEvent = false;
    const r = e.pointerType === "mouse" || e.pointerType === "pen";
    const n = this.trackingData(t.pointerId);
    const s = this.findMountedTarget(n.overTargets);
    if (((l = n.overTargets) == null ? undefined : l.length) > 0 && s !== e.target) {
      const p = t.type === "mousemove" ? "mouseout" : "pointerout";
      const g = this.createPointerEvent(t, p, s);
      this.dispatchEvent(g, "pointerout");
      if (r) {
        this.dispatchEvent(g, "mouseout");
      }
      if (!e.composedPath().includes(s)) {
        const f = this.createPointerEvent(t, "pointerleave", s);
        for (f.eventPhase = f.AT_TARGET; f.target && !e.composedPath().includes(f.target);) {
          f.currentTarget = f.target;
          this.notifyTarget(f);
          if (r) {
            this.notifyTarget(f, "mouseleave");
          }
          f.target = f.target.parent;
        }
        this.freeEvent(f);
      }
      this.freeEvent(g);
    }
    if (s !== e.target) {
      const p = t.type === "mousemove" ? "mouseover" : "pointerover";
      const g = this.clonePointerEvent(e, p);
      this.dispatchEvent(g, "pointerover");
      if (r) {
        this.dispatchEvent(g, "mouseover");
      }
      let f = s == null ? undefined : s.parent;
      while (f && f !== this.rootTarget.parent && f !== e.target) {
        f = f.parent;
      }
      if (!f || f === this.rootTarget.parent) {
        const v = this.clonePointerEvent(e, "pointerenter");
        for (v.eventPhase = v.AT_TARGET; v.target && v.target !== s && v.target !== this.rootTarget.parent;) {
          v.currentTarget = v.target;
          this.notifyTarget(v);
          if (r) {
            this.notifyTarget(v, "mouseenter");
          }
          v.target = v.target.parent;
        }
        this.freeEvent(v);
      }
      this.freeEvent(g);
    }
    const a = [];
    const o = this.enableGlobalMoveEvents ?? true;
    if (this.moveOnAll) {
      a.push("pointermove");
    } else {
      this.dispatchEvent(e, "pointermove");
    }
    if (o) {
      a.push("globalpointermove");
    }
    if (e.pointerType === "touch") {
      if (this.moveOnAll) {
        a.splice(1, 0, "touchmove");
      } else {
        this.dispatchEvent(e, "touchmove");
      }
      if (o) {
        a.push("globaltouchmove");
      }
    }
    if (r) {
      if (this.moveOnAll) {
        a.splice(1, 0, "mousemove");
      } else {
        this.dispatchEvent(e, "mousemove");
      }
      if (o) {
        a.push("globalmousemove");
      }
      this.cursor = (c = e.target) == null ? undefined : c.cursor;
    }
    if (a.length > 0) {
      this.all(e, a);
    }
    this._allInteractiveElements.length = 0;
    this._hitElements.length = 0;
    n.overTargets = e.composedPath();
    this.freeEvent(e);
  }
  mapPointerOver(t) {
    var a;
    if (!(t instanceof sr)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.trackingData(t.pointerId);
    const r = this.createPointerEvent(t);
    const n = r.pointerType === "mouse" || r.pointerType === "pen";
    this.dispatchEvent(r, "pointerover");
    if (n) {
      this.dispatchEvent(r, "mouseover");
    }
    if (r.pointerType === "mouse") {
      this.cursor = (a = r.target) == null ? undefined : a.cursor;
    }
    const s = this.clonePointerEvent(r, "pointerenter");
    for (s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent;) {
      s.currentTarget = s.target;
      this.notifyTarget(s);
      if (n) {
        this.notifyTarget(s, "mouseenter");
      }
      s.target = s.target.parent;
    }
    e.overTargets = r.composedPath();
    this.freeEvent(r);
    this.freeEvent(s);
  }
  mapPointerOut(t) {
    if (!(t instanceof sr)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.trackingData(t.pointerId);
    if (e.overTargets) {
      const r = t.pointerType === "mouse" || t.pointerType === "pen";
      const n = this.findMountedTarget(e.overTargets);
      const s = this.createPointerEvent(t, "pointerout", n);
      this.dispatchEvent(s);
      if (r) {
        this.dispatchEvent(s, "mouseout");
      }
      const a = this.createPointerEvent(t, "pointerleave", n);
      for (a.eventPhase = a.AT_TARGET; a.target && a.target !== this.rootTarget.parent;) {
        a.currentTarget = a.target;
        this.notifyTarget(a);
        if (r) {
          this.notifyTarget(a, "mouseleave");
        }
        a.target = a.target.parent;
      }
      e.overTargets = null;
      this.freeEvent(s);
      this.freeEvent(a);
    }
    this.cursor = null;
  }
  mapPointerUp(t) {
    if (!(t instanceof sr)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = performance.now();
    const r = this.createPointerEvent(t);
    this.dispatchEvent(r, "pointerup");
    if (r.pointerType === "touch") {
      this.dispatchEvent(r, "touchend");
    } else if (r.pointerType === "mouse" || r.pointerType === "pen") {
      const o = r.button === 2;
      this.dispatchEvent(r, o ? "rightup" : "mouseup");
    }
    const n = this.trackingData(t.pointerId);
    const s = this.findMountedTarget(n.pressTargetsByButton[t.button]);
    let a = s;
    if (s && !r.composedPath().includes(s)) {
      let o = s;
      while (o && !r.composedPath().includes(o)) {
        r.currentTarget = o;
        this.notifyTarget(r, "pointerupoutside");
        if (r.pointerType === "touch") {
          this.notifyTarget(r, "touchendoutside");
        } else if (r.pointerType === "mouse" || r.pointerType === "pen") {
          const l = r.button === 2;
          this.notifyTarget(r, l ? "rightupoutside" : "mouseupoutside");
        }
        o = o.parent;
      }
      delete n.pressTargetsByButton[t.button];
      a = o;
    }
    if (a) {
      const o = this.clonePointerEvent(r, "click");
      o.target = a;
      o.path = null;
      n.clicksByButton[t.button] ||= {
        clickCount: 0,
        target: o.target,
        timeStamp: e
      };
      const l = n.clicksByButton[t.button];
      if (l.target === o.target && e - l.timeStamp < 200) {
        ++l.clickCount;
      } else {
        l.clickCount = 1;
      }
      l.target = o.target;
      l.timeStamp = e;
      o.detail = l.clickCount;
      if (o.pointerType === "mouse") {
        const c = o.button === 2;
        this.dispatchEvent(o, c ? "rightclick" : "click");
      } else if (o.pointerType === "touch") {
        this.dispatchEvent(o, "tap");
      }
      this.dispatchEvent(o, "pointertap");
      this.freeEvent(o);
    }
    this.freeEvent(r);
  }
  mapPointerUpOutside(t) {
    if (!(t instanceof sr)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.trackingData(t.pointerId);
    const r = this.findMountedTarget(e.pressTargetsByButton[t.button]);
    const n = this.createPointerEvent(t);
    if (r) {
      let s = r;
      while (s) {
        n.currentTarget = s;
        this.notifyTarget(n, "pointerupoutside");
        if (n.pointerType === "touch") {
          this.notifyTarget(n, "touchendoutside");
        } else if (n.pointerType === "mouse" || n.pointerType === "pen") {
          this.notifyTarget(n, n.button === 2 ? "rightupoutside" : "mouseupoutside");
        }
        s = s.parent;
      }
      delete e.pressTargetsByButton[t.button];
    }
    this.freeEvent(n);
  }
  mapWheel(t) {
    if (!(t instanceof dn)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const e = this.createWheelEvent(t);
    this.dispatchEvent(e);
    this.freeEvent(e);
  }
  findMountedTarget(t) {
    if (!t) {
      return null;
    }
    let e = t[0];
    for (let r = 1; r < t.length && t[r].parent === e; r++) {
      e = t[r];
    }
    return e;
  }
  createPointerEvent(t, e, r) {
    const n = this.allocateEvent(sr);
    this.copyPointerData(t, n);
    this.copyMouseData(t, n);
    this.copyData(t, n);
    n.nativeEvent = t.nativeEvent;
    n.originalEvent = t;
    n.target = r ?? this.hitTest(n.global.x, n.global.y) ?? this._hitElements[0];
    if (typeof e == "string") {
      n.type = e;
    }
    return n;
  }
  createWheelEvent(t) {
    const e = this.allocateEvent(dn);
    this.copyWheelData(t, e);
    this.copyMouseData(t, e);
    this.copyData(t, e);
    e.nativeEvent = t.nativeEvent;
    e.originalEvent = t;
    e.target = this.hitTest(e.global.x, e.global.y);
    return e;
  }
  clonePointerEvent(t, e) {
    const r = this.allocateEvent(sr);
    r.nativeEvent = t.nativeEvent;
    r.originalEvent = t.originalEvent;
    this.copyPointerData(t, r);
    this.copyMouseData(t, r);
    this.copyData(t, r);
    r.target = t.target;
    r.path = t.composedPath().slice();
    r.type = e ?? r.type;
    return r;
  }
  copyWheelData(t, e) {
    e.deltaMode = t.deltaMode;
    e.deltaX = t.deltaX;
    e.deltaY = t.deltaY;
    e.deltaZ = t.deltaZ;
  }
  copyPointerData(t, e) {
    if (t instanceof sr && e instanceof sr) {
      e.pointerId = t.pointerId;
      e.width = t.width;
      e.height = t.height;
      e.isPrimary = t.isPrimary;
      e.pointerType = t.pointerType;
      e.pressure = t.pressure;
      e.tangentialPressure = t.tangentialPressure;
      e.tiltX = t.tiltX;
      e.tiltY = t.tiltY;
      e.twist = t.twist;
    }
  }
  copyMouseData(t, e) {
    if (t instanceof xa && e instanceof xa) {
      e.altKey = t.altKey;
      e.button = t.button;
      e.buttons = t.buttons;
      e.client.copyFrom(t.client);
      e.ctrlKey = t.ctrlKey;
      e.metaKey = t.metaKey;
      e.movement.copyFrom(t.movement);
      e.screen.copyFrom(t.screen);
      e.shiftKey = t.shiftKey;
      e.global.copyFrom(t.global);
    }
  }
  copyData(t, e) {
    e.isTrusted = t.isTrusted;
    e.srcElement = t.srcElement;
    e.timeStamp = performance.now();
    e.type = t.type;
    e.detail = t.detail;
    e.view = t.view;
    e.which = t.which;
    e.layer.copyFrom(t.layer);
    e.page.copyFrom(t.page);
  }
  trackingData(t) {
    this.mappingState.trackingData[t] ||= {
      pressTargetsByButton: {},
      clicksByButton: {},
      overTarget: null
    };
    return this.mappingState.trackingData[t];
  }
  allocateEvent(t) {
    if (!this.eventPool.has(t)) {
      this.eventPool.set(t, []);
    }
    const e = this.eventPool.get(t).pop() || new t(this);
    e.eventPhase = e.NONE;
    e.currentTarget = null;
    e.path = null;
    e.target = null;
    return e;
  }
  freeEvent(t) {
    if (t.manager !== this) {
      throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    }
    const e = t.constructor;
    if (!this.eventPool.has(e)) {
      this.eventPool.set(e, []);
    }
    this.eventPool.get(e).push(t);
  }
  notifyListeners(t, e) {
    const r = t.currentTarget._events[e];
    if (r && t.currentTarget.isInteractive()) {
      if ("fn" in r) {
        if (r.once) {
          t.currentTarget.removeListener(e, r.fn, undefined, true);
        }
        r.fn.call(r.context, t);
      } else {
        for (let n = 0, s = r.length; n < s && !t.propagationImmediatelyStopped; n++) {
          if (r[n].once) {
            t.currentTarget.removeListener(e, r[n].fn, undefined, true);
          }
          r[n].fn.call(r[n].context, t);
        }
      }
    }
  }
}
const z_ = 1;
const q_ = {
  touchstart: "pointerdown",
  touchend: "pointerup",
  touchendoutside: "pointerupoutside",
  touchmove: "pointermove",
  touchcancel: "pointercancel"
};
const Jh = class tl {
  constructor(t) {
    this.supportsTouchEvents = "ontouchstart" in globalThis;
    this.supportsPointerEvents = !!globalThis.PointerEvent;
    this.domElement = null;
    this.resolution = 1;
    this.renderer = t;
    this.rootBoundary = new X_(null);
    si.init(this);
    this.autoPreventDefault = true;
    this.eventsAdded = false;
    this.rootPointerEvent = new sr(null);
    this.rootWheelEvent = new dn(null);
    this.cursorStyles = {
      default: "inherit",
      pointer: "pointer"
    };
    this.features = new Proxy({
      ...tl.defaultEventFeatures
    }, {
      set: (e, r, n) => {
        if (r === "globalMove") {
          this.rootBoundary.enableGlobalMoveEvents = n;
        }
        e[r] = n;
        return true;
      }
    });
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onPointerOverOut = this.onPointerOverOut.bind(this);
    this.onWheel = this.onWheel.bind(this);
  }
  static get defaultEventMode() {
    return this._defaultEventMode;
  }
  init(t) {
    const {
      view: e,
      resolution: r
    } = this.renderer;
    this.setTargetElement(e);
    this.resolution = r;
    tl._defaultEventMode = t.eventMode ?? "auto";
    Object.assign(this.features, t.eventFeatures ?? {});
    this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
  }
  resolutionChange(t) {
    this.resolution = t;
  }
  destroy() {
    this.setTargetElement(null);
    this.renderer = null;
  }
  setCursor(t) {
    t = t || "default";
    let e = true;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas) {
      e = false;
    }
    if (this.currentCursor === t) {
      return;
    }
    this.currentCursor = t;
    const r = this.cursorStyles[t];
    if (r) {
      switch (typeof r) {
        case "string":
          if (e) {
            this.domElement.style.cursor = r;
          }
          break;
        case "function":
          r(t);
          break;
        case "object":
          if (e) {
            Object.assign(this.domElement.style, r);
          }
          break;
      }
    } else if (e && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t)) {
      this.domElement.style.cursor = t;
    }
  }
  get pointer() {
    return this.rootPointerEvent;
  }
  onPointerDown(t) {
    if (!this.features.click) {
      return;
    }
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const e = this.normalizeToPointerData(t);
    if (this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t))) {
      t.preventDefault();
    }
    for (let r = 0, n = e.length; r < n; r++) {
      const s = e[r];
      const a = this.bootstrapEvent(this.rootPointerEvent, s);
      this.rootBoundary.mapEvent(a);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerMove(t) {
    if (!this.features.move) {
      return;
    }
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    si.pointerMoved();
    const e = this.normalizeToPointerData(t);
    for (let r = 0, n = e.length; r < n; r++) {
      const s = this.bootstrapEvent(this.rootPointerEvent, e[r]);
      this.rootBoundary.mapEvent(s);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerUp(t) {
    if (!this.features.click) {
      return;
    }
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    let e = t.target;
    if (t.composedPath && t.composedPath().length > 0) {
      e = t.composedPath()[0];
    }
    const r = e !== this.domElement ? "outside" : "";
    const n = this.normalizeToPointerData(t);
    for (let s = 0, a = n.length; s < a; s++) {
      const o = this.bootstrapEvent(this.rootPointerEvent, n[s]);
      o.type += r;
      this.rootBoundary.mapEvent(o);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerOverOut(t) {
    if (!this.features.click) {
      return;
    }
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const e = this.normalizeToPointerData(t);
    for (let r = 0, n = e.length; r < n; r++) {
      const s = this.bootstrapEvent(this.rootPointerEvent, e[r]);
      this.rootBoundary.mapEvent(s);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onWheel(t) {
    if (!this.features.wheel) {
      return;
    }
    const e = this.normalizeWheelEvent(t);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    this.rootBoundary.mapEvent(e);
  }
  setTargetElement(t) {
    this.removeEvents();
    this.domElement = t;
    si.domElement = t;
    this.addEvents();
  }
  addEvents() {
    if (this.eventsAdded || !this.domElement) {
      return;
    }
    si.addTickerListener();
    const t = this.domElement.style;
    if (t) {
      if (globalThis.navigator.msPointerEnabled) {
        t.msContentZooming = "none";
        t.msTouchAction = "none";
      } else if (this.supportsPointerEvents) {
        t.touchAction = "none";
      }
    }
    if (this.supportsPointerEvents) {
      globalThis.document.addEventListener("pointermove", this.onPointerMove, true);
      this.domElement.addEventListener("pointerdown", this.onPointerDown, true);
      this.domElement.addEventListener("pointerleave", this.onPointerOverOut, true);
      this.domElement.addEventListener("pointerover", this.onPointerOverOut, true);
      globalThis.addEventListener("pointerup", this.onPointerUp, true);
    } else {
      globalThis.document.addEventListener("mousemove", this.onPointerMove, true);
      this.domElement.addEventListener("mousedown", this.onPointerDown, true);
      this.domElement.addEventListener("mouseout", this.onPointerOverOut, true);
      this.domElement.addEventListener("mouseover", this.onPointerOverOut, true);
      globalThis.addEventListener("mouseup", this.onPointerUp, true);
      if (this.supportsTouchEvents) {
        this.domElement.addEventListener("touchstart", this.onPointerDown, true);
        this.domElement.addEventListener("touchend", this.onPointerUp, true);
        this.domElement.addEventListener("touchmove", this.onPointerMove, true);
      }
    }
    this.domElement.addEventListener("wheel", this.onWheel, {
      passive: true,
      capture: true
    });
    this.eventsAdded = true;
  }
  removeEvents() {
    if (!this.eventsAdded || !this.domElement) {
      return;
    }
    si.removeTickerListener();
    const t = this.domElement.style;
    if (globalThis.navigator.msPointerEnabled) {
      t.msContentZooming = "";
      t.msTouchAction = "";
    } else if (this.supportsPointerEvents) {
      t.touchAction = "";
    }
    if (this.supportsPointerEvents) {
      globalThis.document.removeEventListener("pointermove", this.onPointerMove, true);
      this.domElement.removeEventListener("pointerdown", this.onPointerDown, true);
      this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, true);
      this.domElement.removeEventListener("pointerover", this.onPointerOverOut, true);
      globalThis.removeEventListener("pointerup", this.onPointerUp, true);
    } else {
      globalThis.document.removeEventListener("mousemove", this.onPointerMove, true);
      this.domElement.removeEventListener("mousedown", this.onPointerDown, true);
      this.domElement.removeEventListener("mouseout", this.onPointerOverOut, true);
      this.domElement.removeEventListener("mouseover", this.onPointerOverOut, true);
      globalThis.removeEventListener("mouseup", this.onPointerUp, true);
      if (this.supportsTouchEvents) {
        this.domElement.removeEventListener("touchstart", this.onPointerDown, true);
        this.domElement.removeEventListener("touchend", this.onPointerUp, true);
        this.domElement.removeEventListener("touchmove", this.onPointerMove, true);
      }
    }
    this.domElement.removeEventListener("wheel", this.onWheel, true);
    this.domElement = null;
    this.eventsAdded = false;
  }
  mapPositionToPoint(t, e, r) {
    const n = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
      x: 0,
      y: 0,
      width: this.domElement.width,
      height: this.domElement.height,
      left: 0,
      top: 0
    };
    const s = 1 / this.resolution;
    t.x = (e - n.left) * (this.domElement.width / n.width) * s;
    t.y = (r - n.top) * (this.domElement.height / n.height) * s;
  }
  normalizeToPointerData(t) {
    const e = [];
    if (this.supportsTouchEvents && t instanceof TouchEvent) {
      for (let r = 0, n = t.changedTouches.length; r < n; r++) {
        const s = t.changedTouches[r];
        if (typeof s.button === "undefined") {
          s.button = 0;
        }
        if (typeof s.buttons === "undefined") {
          s.buttons = 1;
        }
        if (typeof s.isPrimary === "undefined") {
          s.isPrimary = t.touches.length === 1 && t.type === "touchstart";
        }
        if (typeof s.width === "undefined") {
          s.width = s.radiusX || 1;
        }
        if (typeof s.height === "undefined") {
          s.height = s.radiusY || 1;
        }
        if (typeof s.tiltX === "undefined") {
          s.tiltX = 0;
        }
        if (typeof s.tiltY === "undefined") {
          s.tiltY = 0;
        }
        if (typeof s.pointerType === "undefined") {
          s.pointerType = "touch";
        }
        if (typeof s.pointerId === "undefined") {
          s.pointerId = s.identifier || 0;
        }
        if (typeof s.pressure === "undefined") {
          s.pressure = s.force || 0.5;
        }
        if (typeof s.twist === "undefined") {
          s.twist = 0;
        }
        if (typeof s.tangentialPressure === "undefined") {
          s.tangentialPressure = 0;
        }
        if (typeof s.layerX === "undefined") {
          s.layerX = s.offsetX = s.clientX;
        }
        if (typeof s.layerY === "undefined") {
          s.layerY = s.offsetY = s.clientY;
        }
        s.isNormalized = true;
        s.type = t.type;
        e.push(s);
      }
    } else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
      const r = t;
      if (typeof r.isPrimary === "undefined") {
        r.isPrimary = true;
      }
      if (typeof r.width === "undefined") {
        r.width = 1;
      }
      if (typeof r.height === "undefined") {
        r.height = 1;
      }
      if (typeof r.tiltX === "undefined") {
        r.tiltX = 0;
      }
      if (typeof r.tiltY === "undefined") {
        r.tiltY = 0;
      }
      if (typeof r.pointerType === "undefined") {
        r.pointerType = "mouse";
      }
      if (typeof r.pointerId === "undefined") {
        r.pointerId = z_;
      }
      if (typeof r.pressure === "undefined") {
        r.pressure = 0.5;
      }
      if (typeof r.twist === "undefined") {
        r.twist = 0;
      }
      if (typeof r.tangentialPressure === "undefined") {
        r.tangentialPressure = 0;
      }
      r.isNormalized = true;
      e.push(r);
    } else {
      e.push(t);
    }
    return e;
  }
  normalizeWheelEvent(t) {
    const e = this.rootWheelEvent;
    this.transferMouseData(e, t);
    e.deltaX = t.deltaX;
    e.deltaY = t.deltaY;
    e.deltaZ = t.deltaZ;
    e.deltaMode = t.deltaMode;
    this.mapPositionToPoint(e.screen, t.clientX, t.clientY);
    e.global.copyFrom(e.screen);
    e.offset.copyFrom(e.screen);
    e.nativeEvent = t;
    e.type = t.type;
    return e;
  }
  bootstrapEvent(t, e) {
    t.originalEvent = null;
    t.nativeEvent = e;
    t.pointerId = e.pointerId;
    t.width = e.width;
    t.height = e.height;
    t.isPrimary = e.isPrimary;
    t.pointerType = e.pointerType;
    t.pressure = e.pressure;
    t.tangentialPressure = e.tangentialPressure;
    t.tiltX = e.tiltX;
    t.tiltY = e.tiltY;
    t.twist = e.twist;
    this.transferMouseData(t, e);
    this.mapPositionToPoint(t.screen, e.clientX, e.clientY);
    t.global.copyFrom(t.screen);
    t.offset.copyFrom(t.screen);
    t.isTrusted = e.isTrusted;
    if (t.type === "pointerleave") {
      t.type = "pointerout";
    }
    if (t.type.startsWith("mouse")) {
      t.type = t.type.replace("mouse", "pointer");
    }
    if (t.type.startsWith("touch")) {
      t.type = q_[t.type] || t.type;
    }
    return t;
  }
  transferMouseData(t, e) {
    t.isTrusted = e.isTrusted;
    t.srcElement = e.srcElement;
    t.timeStamp = performance.now();
    t.type = e.type;
    t.altKey = e.altKey;
    t.button = e.button;
    t.buttons = e.buttons;
    t.client.x = e.clientX;
    t.client.y = e.clientY;
    t.ctrlKey = e.ctrlKey;
    t.metaKey = e.metaKey;
    t.movement.x = e.movementX;
    t.movement.y = e.movementY;
    t.page.x = e.pageX;
    t.page.y = e.pageY;
    t.relatedTarget = null;
    t.shiftKey = e.shiftKey;
  }
};
Jh.extension = {
  name: "events",
  type: [rt.RendererSystem, rt.CanvasRendererSystem]
};
Jh.defaultEventFeatures = {
  move: true,
  globalMove: true,
  click: true,
  wheel: true
};
let el = Jh;
ot.add(el);
function bc(i) {
  return i === "dynamic" || i === "static";
}
const Y_ = {
  onclick: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onglobalmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmouseupoutside: null,
  onpointercancel: null,
  onpointerdown: null,
  onpointerenter: null,
  onpointerleave: null,
  onpointermove: null,
  onglobalpointermove: null,
  onpointerout: null,
  onpointerover: null,
  onpointertap: null,
  onpointerup: null,
  onpointerupoutside: null,
  onrightclick: null,
  onrightdown: null,
  onrightup: null,
  onrightupoutside: null,
  ontap: null,
  ontouchcancel: null,
  ontouchend: null,
  ontouchendoutside: null,
  ontouchmove: null,
  onglobaltouchmove: null,
  ontouchstart: null,
  onwheel: null,
  _internalInteractive: undefined,
  get interactive() {
    return this._internalInteractive ?? bc(el.defaultEventMode);
  },
  set interactive(i) {
    vt("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead.");
    this._internalInteractive = i;
    this.eventMode = i ? "static" : "auto";
  },
  _internalEventMode: undefined,
  get eventMode() {
    return this._internalEventMode ?? el.defaultEventMode;
  },
  set eventMode(i) {
    this._internalInteractive = bc(i);
    this._internalEventMode = i;
  },
  isInteractive() {
    return this.eventMode === "static" || this.eventMode === "dynamic";
  },
  interactiveChildren: true,
  hitArea: null,
  addEventListener(i, t, e) {
    const r = typeof e == "boolean" && e || typeof e == "object" && e.capture;
    const n = typeof e == "object" ? e.signal : undefined;
    const s = typeof e == "object" ? e.once === true : false;
    const a = typeof t == "function" ? undefined : t;
    i = r ? `${i}capture` : i;
    const o = typeof t == "function" ? t : t.handleEvent;
    const l = this;
    if (n) {
      n.addEventListener("abort", () => {
        l.off(i, o, a);
      });
    }
    if (s) {
      l.once(i, o, a);
    } else {
      l.on(i, o, a);
    }
  },
  removeEventListener(i, t, e) {
    const r = typeof e == "boolean" && e || typeof e == "object" && e.capture;
    const n = typeof t == "function" ? undefined : t;
    i = r ? `${i}capture` : i;
    t = typeof t == "function" ? t : t.handleEvent;
    this.off(i, t, n);
  },
  dispatchEvent(i) {
    if (!(i instanceof cs)) {
      throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
    }
    i.defaultPrevented = false;
    i.path = null;
    i.target = this;
    i.manager.dispatchEvent(i);
    return !i.defaultPrevented;
  }
};
re.mixin(Y_);
const K_ = {
  accessible: false,
  accessibleTitle: null,
  accessibleHint: null,
  tabIndex: 0,
  _accessibleActive: false,
  _accessibleDiv: null,
  accessibleType: "button",
  accessiblePointerEvents: "auto",
  accessibleChildren: true,
  renderId: -1
};
re.mixin(K_);
const Z_ = 9;
const Hs = 100;
const Q_ = 0;
const J_ = 0;
const Tc = 2;
const wc = 1;
const tx = -1000;
const ex = -1000;
const rx = 2;
class Mf {
  constructor(t) {
    this.debug = false;
    this._isActive = false;
    this._isMobileAccessibility = false;
    this.pool = [];
    this.renderId = 0;
    this.children = [];
    this.androidUpdateCount = 0;
    this.androidUpdateFrequency = 500;
    this._hookDiv = null;
    if (Pr.tablet || Pr.phone) {
      this.createTouchHook();
    }
    const e = document.createElement("div");
    e.style.width = `${Hs}px`;
    e.style.height = `${Hs}px`;
    e.style.position = "absolute";
    e.style.top = `${Q_}px`;
    e.style.left = `${J_}px`;
    e.style.zIndex = Tc.toString();
    this.div = e;
    this.renderer = t;
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    globalThis.addEventListener("keydown", this._onKeyDown, false);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const t = document.createElement("button");
    t.style.width = `${wc}px`;
    t.style.height = `${wc}px`;
    t.style.position = "absolute";
    t.style.top = `${tx}px`;
    t.style.left = `${ex}px`;
    t.style.zIndex = rx.toString();
    t.style.backgroundColor = "#FF0000";
    t.title = "select to enable accessibility for this content";
    t.addEventListener("focus", () => {
      this._isMobileAccessibility = true;
      this.activate();
      this.destroyTouchHook();
    });
    document.body.appendChild(t);
    this._hookDiv = t;
  }
  destroyTouchHook() {
    if (this._hookDiv) {
      document.body.removeChild(this._hookDiv);
      this._hookDiv = null;
    }
  }
  activate() {
    var t;
    if (!this._isActive) {
      this._isActive = true;
      globalThis.document.addEventListener("mousemove", this._onMouseMove, true);
      globalThis.removeEventListener("keydown", this._onKeyDown, false);
      this.renderer.on("postrender", this.update, this);
      if ((t = this.renderer.view.parentNode) != null) {
        t.appendChild(this.div);
      }
    }
  }
  deactivate() {
    var t;
    if (!!this._isActive && !this._isMobileAccessibility) {
      this._isActive = false;
      globalThis.document.removeEventListener("mousemove", this._onMouseMove, true);
      globalThis.addEventListener("keydown", this._onKeyDown, false);
      this.renderer.off("postrender", this.update);
      if ((t = this.div.parentNode) != null) {
        t.removeChild(this.div);
      }
    }
  }
  updateAccessibleObjects(t) {
    if (!t.visible || !t.accessibleChildren) {
      return;
    }
    if (t.accessible && t.isInteractive()) {
      if (!t._accessibleActive) {
        this.addChild(t);
      }
      t.renderId = this.renderId;
    }
    const e = t.children;
    if (e) {
      for (let r = 0; r < e.length; r++) {
        this.updateAccessibleObjects(e[r]);
      }
    }
  }
  update() {
    const t = performance.now();
    if (Pr.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen)) {
      return;
    }
    if (this.renderer.lastObjectRendered) {
      this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    }
    const {
      x: e,
      y: r,
      width: n,
      height: s
    } = this.renderer.view.getBoundingClientRect();
    const {
      width: a,
      height: o,
      resolution: l
    } = this.renderer;
    const c = n / a * l;
    const p = s / o * l;
    let g = this.div;
    g.style.left = `${e}px`;
    g.style.top = `${r}px`;
    g.style.width = `${a}px`;
    g.style.height = `${o}px`;
    for (let f = 0; f < this.children.length; f++) {
      const v = this.children[f];
      if (v.renderId !== this.renderId) {
        v._accessibleActive = false;
        Pi(this.children, f, 1);
        this.div.removeChild(v._accessibleDiv);
        this.pool.push(v._accessibleDiv);
        v._accessibleDiv = null;
        f--;
      } else {
        g = v._accessibleDiv;
        let _ = v.hitArea;
        const T = v.worldTransform;
        if (v.hitArea) {
          g.style.left = `${(T.tx + _.x * T.a) * c}px`;
          g.style.top = `${(T.ty + _.y * T.d) * p}px`;
          g.style.width = `${_.width * T.a * c}px`;
          g.style.height = `${_.height * T.d * p}px`;
        } else {
          _ = v.getBounds();
          this.capHitArea(_);
          g.style.left = `${_.x * c}px`;
          g.style.top = `${_.y * p}px`;
          g.style.width = `${_.width * c}px`;
          g.style.height = `${_.height * p}px`;
          if (g.title !== v.accessibleTitle && v.accessibleTitle !== null) {
            g.title = v.accessibleTitle;
          }
          if (g.getAttribute("aria-label") !== v.accessibleHint && v.accessibleHint !== null) {
            g.setAttribute("aria-label", v.accessibleHint);
          }
        }
        if (v.accessibleTitle !== g.title || v.tabIndex !== g.tabIndex) {
          g.title = v.accessibleTitle;
          g.tabIndex = v.tabIndex;
          if (this.debug) {
            this.updateDebugHTML(g);
          }
        }
      }
    }
    this.renderId++;
  }
  updateDebugHTML(t) {
    t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
  }
  capHitArea(t) {
    if (t.x < 0) {
      t.width += t.x;
      t.x = 0;
    }
    if (t.y < 0) {
      t.height += t.y;
      t.y = 0;
    }
    const {
      width: e,
      height: r
    } = this.renderer;
    if (t.x + t.width > e) {
      t.width = e - t.x;
    }
    if (t.y + t.height > r) {
      t.height = r - t.y;
    }
  }
  addChild(t) {
    let e = this.pool.pop();
    if (!e) {
      e = document.createElement("button");
      e.style.width = `${Hs}px`;
      e.style.height = `${Hs}px`;
      e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent";
      e.style.position = "absolute";
      e.style.zIndex = Tc.toString();
      e.style.borderStyle = "none";
      if (navigator.userAgent.toLowerCase().includes("chrome")) {
        e.setAttribute("aria-live", "off");
      } else {
        e.setAttribute("aria-live", "polite");
      }
      if (navigator.userAgent.match(/rv:.*Gecko\//)) {
        e.setAttribute("aria-relevant", "additions");
      } else {
        e.setAttribute("aria-relevant", "text");
      }
      e.addEventListener("click", this._onClick.bind(this));
      e.addEventListener("focus", this._onFocus.bind(this));
      e.addEventListener("focusout", this._onFocusOut.bind(this));
    }
    e.style.pointerEvents = t.accessiblePointerEvents;
    e.type = t.accessibleType;
    if (t.accessibleTitle && t.accessibleTitle !== null) {
      e.title = t.accessibleTitle;
    } else if (!t.accessibleHint || t.accessibleHint === null) {
      e.title = `displayObject ${t.tabIndex}`;
    }
    if (t.accessibleHint && t.accessibleHint !== null) {
      e.setAttribute("aria-label", t.accessibleHint);
    }
    if (this.debug) {
      this.updateDebugHTML(e);
    }
    t._accessibleActive = true;
    t._accessibleDiv = e;
    e.displayObject = t;
    this.children.push(t);
    this.div.appendChild(t._accessibleDiv);
    t._accessibleDiv.tabIndex = t.tabIndex;
  }
  _dispatchEvent(t, e) {
    const {
      displayObject: r
    } = t.target;
    const n = this.renderer.events.rootBoundary;
    const s = Object.assign(new cs(n), {
      target: r
    });
    n.rootTarget = this.renderer.lastObjectRendered;
    e.forEach(a => n.dispatchEvent(s, a));
  }
  _onClick(t) {
    this._dispatchEvent(t, ["click", "pointertap", "tap"]);
  }
  _onFocus(t) {
    if (!t.target.getAttribute("aria-live")) {
      t.target.setAttribute("aria-live", "assertive");
    }
    this._dispatchEvent(t, ["mouseover"]);
  }
  _onFocusOut(t) {
    if (!t.target.getAttribute("aria-live")) {
      t.target.setAttribute("aria-live", "polite");
    }
    this._dispatchEvent(t, ["mouseout"]);
  }
  _onKeyDown(t) {
    if (t.keyCode === Z_) {
      this.activate();
    }
  }
  _onMouseMove(t) {
    if (t.movementX !== 0 || t.movementY !== 0) {
      this.deactivate();
    }
  }
  destroy() {
    this.destroyTouchHook();
    this.div = null;
    globalThis.document.removeEventListener("mousemove", this._onMouseMove, true);
    globalThis.removeEventListener("keydown", this._onKeyDown);
    this.pool = null;
    this.children = null;
    this.renderer = null;
  }
}
Mf.extension = {
  name: "accessibility",
  type: [rt.RendererPlugin, rt.CanvasRendererPlugin]
};
ot.add(Mf);
const Df = class rl {
  constructor(t) {
    this.stage = new Ue();
    t = Object.assign({
      forceCanvas: false
    }, t);
    this.renderer = e_(t);
    rl._plugins.forEach(e => {
      e.init.call(this, t);
    });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    var t;
    if ((t = this.renderer) == null) {
      return undefined;
    } else {
      return t.view;
    }
  }
  get screen() {
    var t;
    if ((t = this.renderer) == null) {
      return undefined;
    } else {
      return t.screen;
    }
  }
  destroy(t, e) {
    const r = rl._plugins.slice(0);
    r.reverse();
    r.forEach(n => {
      n.destroy.call(this);
    });
    this.stage.destroy(e);
    this.stage = null;
    this.renderer.destroy(t);
    this.renderer = null;
  }
};
Df._plugins = [];
let ix = Df;
ot.handleByList(rt.Application, ix._plugins);
class Bf {
  static init(t) {
    Object.defineProperty(this, "resizeTo", {
      set(e) {
        globalThis.removeEventListener("resize", this.queueResize);
        this._resizeTo = e;
        if (e) {
          globalThis.addEventListener("resize", this.queueResize);
          this.resize();
        }
      },
      get() {
        return this._resizeTo;
      }
    });
    this.queueResize = () => {
      if (this._resizeTo) {
        this.cancelResize();
        this._resizeId = requestAnimationFrame(() => this.resize());
      }
    };
    this.cancelResize = () => {
      if (this._resizeId) {
        cancelAnimationFrame(this._resizeId);
        this._resizeId = null;
      }
    };
    this.resize = () => {
      if (!this._resizeTo) {
        return;
      }
      this.cancelResize();
      let e;
      let r;
      if (this._resizeTo === globalThis.window) {
        e = globalThis.innerWidth;
        r = globalThis.innerHeight;
      } else {
        const {
          clientWidth: n,
          clientHeight: s
        } = this._resizeTo;
        e = n;
        r = s;
      }
      this.renderer.resize(e, r);
      this.render();
    };
    this._resizeId = null;
    this._resizeTo = null;
    this.resizeTo = t.resizeTo || null;
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize);
    this.cancelResize();
    this.cancelResize = null;
    this.queueResize = null;
    this.resizeTo = null;
    this.resize = null;
  }
}
Bf.extension = rt.Application;
ot.add(Bf);
const Ec = {
  loader: rt.LoadParser,
  resolver: rt.ResolveParser,
  cache: rt.CacheParser,
  detection: rt.DetectionParser
};
ot.handle(rt.Asset, i => {
  const t = i.ref;
  Object.entries(Ec).filter(([e]) => !!t[e]).forEach(([e, r]) => ot.add(Object.assign(t[e], {
    extension: t[e].extension ?? r
  })));
}, i => {
  const t = i.ref;
  Object.keys(Ec).filter(e => !!t[e]).forEach(e => ot.remove(t[e]));
});
class nx {
  constructor(t, e = false) {
    this._loader = t;
    this._assetList = [];
    this._isLoading = false;
    this._maxConcurrent = 1;
    this.verbose = e;
  }
  add(t) {
    t.forEach(e => {
      this._assetList.push(e);
    });
    if (this.verbose) {
      console.log("[BackgroundLoader] assets: ", this._assetList);
    }
    if (this._isActive && !this._isLoading) {
      this._next();
    }
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = true;
      const t = [];
      const e = Math.min(this._assetList.length, this._maxConcurrent);
      for (let r = 0; r < e; r++) {
        t.push(this._assetList.pop());
      }
      await this._loader.load(t);
      this._isLoading = false;
      this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(t) {
    if (this._isActive !== t) {
      this._isActive = t;
      if (t && !this._isLoading) {
        this._next();
      }
    }
  }
}
function bn(i, t) {
  if (Array.isArray(t)) {
    for (const e of t) {
      if (i.startsWith(`data:${e}`)) {
        return true;
      }
    }
    return false;
  }
  return i.startsWith(`data:${t}`);
}
function fi(i, t) {
  const e = i.split("?")[0];
  const r = ge.extname(e).toLowerCase();
  if (Array.isArray(t)) {
    return t.includes(r);
  } else {
    return r === t;
  }
}
const ar = (i, t, e = false) => {
  if (!Array.isArray(i)) {
    i = [i];
  }
  if (t) {
    return i.map(r => typeof r == "string" || e ? t(r) : r);
  } else {
    return i;
  }
};
const il = (i, t) => {
  const e = t.split("?")[1];
  if (e) {
    i += `?${e}`;
  }
  return i;
};
function Ff(i, t, e, r, n) {
  const s = t[e];
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    if (e < t.length - 1) {
      Ff(i.replace(r[e], o), t, e + 1, r, n);
    } else {
      n.push(i.replace(r[e], o));
    }
  }
}
function sx(i) {
  const t = /\{(.*?)\}/g;
  const e = i.match(t);
  const r = [];
  if (e) {
    const n = [];
    e.forEach(s => {
      const a = s.substring(1, s.length - 1).split(",");
      n.push(a);
    });
    Ff(i, n, 0, e, r);
  } else {
    r.push(i);
  }
  return r;
}
const ba = i => !Array.isArray(i);
class ax {
  constructor() {
    this._parsers = [];
    this._cache = new Map();
    this._cacheMap = new Map();
  }
  reset() {
    this._cacheMap.clear();
    this._cache.clear();
  }
  has(t) {
    return this._cache.has(t);
  }
  get(t) {
    const e = this._cache.get(t);
    if (!e) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
    }
    return e;
  }
  set(t, e) {
    const r = ar(t);
    let n;
    for (let o = 0; o < this.parsers.length; o++) {
      const l = this.parsers[o];
      if (l.test(e)) {
        n = l.getCacheableAssets(r, e);
        break;
      }
    }
    if (!n) {
      n = {};
      r.forEach(o => {
        n[o] = e;
      });
    }
    const s = Object.keys(n);
    const a = {
      cacheKeys: s,
      keys: r
    };
    r.forEach(o => {
      this._cacheMap.set(o, a);
    });
    s.forEach(o => {
      if (this._cache.has(o) && this._cache.get(o) !== e) {
        console.warn("[Cache] already has key:", o);
      }
      this._cache.set(o, n[o]);
    });
    if (e instanceof ut) {
      const o = e;
      r.forEach(l => {
        if (o.baseTexture !== ut.EMPTY.baseTexture) {
          Tt.addToCache(o.baseTexture, l);
        }
        ut.addToCache(o, l);
      });
    }
  }
  remove(t) {
    if (!this._cacheMap.has(t)) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach(r => {
      this._cache.delete(r);
    });
    e.keys.forEach(r => {
      this._cacheMap.delete(r);
    });
  }
  get parsers() {
    return this._parsers;
  }
}
const Ii = new ax();
class ox {
  constructor() {
    this._parsers = [];
    this._parsersValidated = false;
    this.parsers = new Proxy(this._parsers, {
      set: (t, e, r) => {
        this._parsersValidated = false;
        t[e] = r;
        return true;
      }
    });
    this.promiseCache = {};
  }
  reset() {
    this._parsersValidated = false;
    this.promiseCache = {};
  }
  _getLoadPromiseAndParser(t, e) {
    const r = {
      promise: null,
      parser: null
    };
    r.promise = (async () => {
      var a;
      var o;
      let n = null;
      let s = null;
      if (e.loadParser) {
        s = this._parserHash[e.loadParser];
        if (!s) {
          console.warn(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`);
        }
      }
      if (!s) {
        for (let l = 0; l < this.parsers.length; l++) {
          const c = this.parsers[l];
          if (c.load && (a = c.test) != null && a.call(c, t, e, this)) {
            s = c;
            break;
          }
        }
        if (!s) {
          console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`);
          return null;
        }
      }
      n = await s.load(t, e, this);
      r.parser = s;
      for (let l = 0; l < this.parsers.length; l++) {
        const c = this.parsers[l];
        if (c.parse && c.parse && (await ((o = c.testParse) == null ? undefined : o.call(c, n, e, this)))) {
          n = (await c.parse(n, e, this)) || n;
          r.parser = c;
        }
      }
      return n;
    })();
    return r;
  }
  async load(t, e) {
    if (!this._parsersValidated) {
      this._validateParsers();
    }
    let r = 0;
    const n = {};
    const s = ba(t);
    const a = ar(t, c => ({
      alias: [c],
      src: c
    }));
    const o = a.length;
    const l = a.map(async c => {
      const p = ge.toAbsolute(c.src);
      if (!n[c.src]) {
        try {
          this.promiseCache[p] ||= this._getLoadPromiseAndParser(p, c);
          n[c.src] = await this.promiseCache[p].promise;
          if (e) {
            e(++r / o);
          }
        } catch (g) {
          delete this.promiseCache[p];
          delete n[c.src];
          throw new Error(`[Loader.load] Failed to load ${p}.
${g}`);
        }
      }
    });
    await Promise.all(l);
    if (s) {
      return n[a[0].src];
    } else {
      return n;
    }
  }
  async unload(t) {
    const e = ar(t, r => ({
      alias: [r],
      src: r
    })).map(async r => {
      var a;
      var o;
      const n = ge.toAbsolute(r.src);
      const s = this.promiseCache[n];
      if (s) {
        const l = await s.promise;
        delete this.promiseCache[n];
        if ((o = (a = s.parser) == null ? undefined : a.unload) != null) {
          o.call(a, l, r, this);
        }
      }
    });
    await Promise.all(e);
  }
  _validateParsers() {
    this._parsersValidated = true;
    this._parserHash = this._parsers.filter(t => t.name).reduce((t, e) => {
      if (t[e.name]) {
        console.warn(`[Assets] loadParser name conflict "${e.name}"`);
      }
      return {
        ...t,
        [e.name]: e
      };
    }, {});
  }
}
var dr = (i => {
  i[i.Low = 0] = "Low";
  i[i.Normal = 1] = "Normal";
  i[i.High = 2] = "High";
  return i;
})(dr || {});
const hx = ".json";
const lx = "application/json";
const ux = {
  extension: {
    type: rt.LoadParser,
    priority: dr.Low
  },
  name: "loadJson",
  test(i) {
    return bn(i, lx) || fi(i, hx);
  },
  async load(i) {
    return await (await st.ADAPTER.fetch(i)).json();
  }
};
ot.add(ux);
const cx = ".txt";
const dx = "text/plain";
const fx = {
  name: "loadTxt",
  extension: {
    type: rt.LoadParser,
    priority: dr.Low
  },
  test(i) {
    return bn(i, dx) || fi(i, cx);
  },
  async load(i) {
    return await (await st.ADAPTER.fetch(i)).text();
  }
};
ot.add(fx);
const px = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
const gx = [".ttf", ".otf", ".woff", ".woff2"];
const mx = ["font/ttf", "font/otf", "font/woff", "font/woff2"];
const yx = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function vx(i) {
  const t = ge.extname(i);
  const e = ge.basename(i, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1));
  let r = e.length > 0;
  for (const s of e) {
    if (!s.match(yx)) {
      r = false;
      break;
    }
  }
  let n = e.join(" ");
  if (!r) {
    n = `"${n.replace(/[\\"]/g, "\\$&")}"`;
  }
  return n;
}
const _x = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function xx(i) {
  if (_x.test(i)) {
    return i;
  } else {
    return encodeURI(i);
  }
}
const bx = {
  extension: {
    type: rt.LoadParser,
    priority: dr.Low
  },
  name: "loadWebFont",
  test(i) {
    return bn(i, mx) || fi(i, gx);
  },
  async load(i, t) {
    var r;
    var n;
    var s;
    const e = st.ADAPTER.getFontFaceSet();
    if (e) {
      const a = [];
      const o = ((r = t.data) == null ? undefined : r.family) ?? vx(i);
      const l = ((s = (n = t.data) == null ? undefined : n.weights) == null ? undefined : s.filter(p => px.includes(p))) ?? ["normal"];
      const c = t.data ?? {};
      for (let p = 0; p < l.length; p++) {
        const g = l[p];
        const f = new FontFace(o, `url(${xx(i)})`, {
          ...c,
          weight: g
        });
        await f.load();
        e.add(f);
        a.push(f);
      }
      if (a.length === 1) {
        return a[0];
      } else {
        return a;
      }
    }
    console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font");
    return null;
  },
  unload(i) {
    (Array.isArray(i) ? i : [i]).forEach(t => st.ADAPTER.getFontFaceSet().delete(t));
  }
};
ot.add(bx);
const Tx = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
let fn = null;
let nl = class {
  constructor() {
    fn ||= URL.createObjectURL(new Blob([Tx], {
      type: "application/javascript"
    }));
    this.worker = new Worker(fn);
  }
};
nl.revokeObjectURL = function () {
  if (fn) {
    URL.revokeObjectURL(fn);
    fn = null;
  }
};
const wx = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
let pn = null;
class Of {
  constructor() {
    pn ||= URL.createObjectURL(new Blob([wx], {
      type: "application/javascript"
    }));
    this.worker = new Worker(pn);
  }
}
Of.revokeObjectURL = function () {
  if (pn) {
    URL.revokeObjectURL(pn);
    pn = null;
  }
};
let Ac = 0;
let eh;
class Ex {
  constructor() {
    this._initialized = false;
    this._createdWorkers = 0;
    this.workerPool = [];
    this.queue = [];
    this.resolveHash = {};
  }
  isImageBitmapSupported() {
    if (this._isImageBitmapSupported !== undefined) {
      return this._isImageBitmapSupported;
    } else {
      this._isImageBitmapSupported = new Promise(t => {
        const {
          worker: e
        } = new nl();
        e.addEventListener("message", r => {
          e.terminate();
          nl.revokeObjectURL();
          t(r.data);
        });
      });
      return this._isImageBitmapSupported;
    }
  }
  loadImageBitmap(t) {
    return this._run("loadImageBitmap", [t]);
  }
  async _initWorkers() {
    this._initialized ||= true;
  }
  getWorker() {
    if (eh === undefined) {
      eh = navigator.hardwareConcurrency || 4;
    }
    let t = this.workerPool.pop();
    if (!t && this._createdWorkers < eh) {
      this._createdWorkers++;
      t = new Of().worker;
      t.addEventListener("message", e => {
        this.complete(e.data);
        this.returnWorker(e.target);
        this.next();
      });
    }
    return t;
  }
  returnWorker(t) {
    this.workerPool.push(t);
  }
  complete(t) {
    if (t.error !== undefined) {
      this.resolveHash[t.uuid].reject(t.error);
    } else {
      this.resolveHash[t.uuid].resolve(t.data);
    }
    this.resolveHash[t.uuid] = null;
  }
  async _run(t, e) {
    await this._initWorkers();
    const r = new Promise((n, s) => {
      this.queue.push({
        id: t,
        arguments: e,
        resolve: n,
        reject: s
      });
    });
    this.next();
    return r;
  }
  next() {
    if (!this.queue.length) {
      return;
    }
    const t = this.getWorker();
    if (!t) {
      return;
    }
    const e = this.queue.pop();
    const r = e.id;
    this.resolveHash[Ac] = {
      resolve: e.resolve,
      reject: e.reject
    };
    t.postMessage({
      data: e.arguments,
      uuid: Ac++,
      id: r
    });
  }
}
const Sc = new Ex();
function ds(i, t, e) {
  i.resource.internal = true;
  const r = new ut(i);
  const n = () => {
    delete t.promiseCache[e];
    if (Ii.has(e)) {
      Ii.remove(e);
    }
  };
  r.baseTexture.once("destroyed", () => {
    if (e in t.promiseCache) {
      console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture.");
      n();
    }
  });
  r.once("destroyed", () => {
    if (!i.destroyed) {
      console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.");
      n();
    }
  });
  return r;
}
const Ax = [".jpeg", ".jpg", ".png", ".webp", ".avif"];
const Sx = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function Cx(i) {
  const t = await st.ADAPTER.fetch(i);
  if (!t.ok) {
    throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`);
  }
  const e = await t.blob();
  return await createImageBitmap(e);
}
const Xa = {
  name: "loadTextures",
  extension: {
    type: rt.LoadParser,
    priority: dr.High
  },
  config: {
    preferWorkers: true,
    preferCreateImageBitmap: true,
    crossOrigin: "anonymous"
  },
  test(i) {
    return bn(i, Sx) || fi(i, Ax);
  },
  async load(i, t, e) {
    var o;
    const r = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
    let n;
    if (r) {
      if (this.config.preferWorkers && (await Sc.isImageBitmapSupported())) {
        n = await Sc.loadImageBitmap(i);
      } else {
        n = await Cx(i);
      }
    } else {
      n = await new Promise((l, c) => {
        const p = new Image();
        p.crossOrigin = this.config.crossOrigin;
        p.src = i;
        if (p.complete) {
          l(p);
        } else {
          p.onload = () => l(p);
          p.onerror = g => c(g);
        }
      });
    }
    const s = {
      ...t.data
    };
    s.resolution ??= Fr(i);
    if (r && ((o = s.resourceOptions) == null ? undefined : o.ownsImageBitmap) === undefined) {
      s.resourceOptions = {
        ...s.resourceOptions
      };
      s.resourceOptions.ownsImageBitmap = true;
    }
    const a = new Tt(n, s);
    a.resource.src = i;
    return ds(a, e, i);
  },
  unload(i) {
    i.destroy(true);
  }
};
ot.add(Xa);
const Ix = ".svg";
const Rx = "image/svg+xml";
const Px = {
  extension: {
    type: rt.LoadParser,
    priority: dr.High
  },
  name: "loadSVG",
  test(i) {
    return bn(i, Rx) || fi(i, Ix);
  },
  async testParse(i) {
    return jh.test(i);
  },
  async parse(i, t, e) {
    var s;
    const r = new jh(i, (s = t == null ? undefined : t.data) == null ? undefined : s.resourceOptions);
    await r.load();
    const n = new Tt(r, {
      resolution: Fr(i),
      ...(t == null ? undefined : t.data)
    });
    n.resource.src = t.src;
    return ds(n, e, t.src);
  },
  async load(i, t) {
    return (await st.ADAPTER.fetch(i)).text();
  },
  unload: Xa.unload
};
ot.add(Px);
const Mx = [".mp4", ".m4v", ".webm", ".ogv"];
const Dx = ["video/mp4", "video/webm", "video/ogg"];
const Bx = {
  name: "loadVideo",
  extension: {
    type: rt.LoadParser,
    priority: dr.High
  },
  config: {
    defaultAutoPlay: true,
    defaultUpdateFPS: 0,
    defaultLoop: false,
    defaultMuted: false,
    defaultPlaysinline: true
  },
  test(i) {
    return bn(i, Dx) || fi(i, Mx);
  },
  async load(i, t, e) {
    var a;
    let r;
    const n = await (await st.ADAPTER.fetch(i)).blob();
    const s = URL.createObjectURL(n);
    try {
      const o = {
        autoPlay: this.config.defaultAutoPlay,
        updateFPS: this.config.defaultUpdateFPS,
        loop: this.config.defaultLoop,
        muted: this.config.defaultMuted,
        playsinline: this.config.defaultPlaysinline,
        ...((a = t == null ? undefined : t.data) == null ? undefined : a.resourceOptions),
        autoLoad: true
      };
      const l = new xf(s, o);
      await l.load();
      const c = new Tt(l, {
        alphaMode: await Td(),
        resolution: Fr(i),
        ...(t == null ? undefined : t.data)
      });
      c.resource.src = i;
      r = ds(c, e, i);
      r.baseTexture.once("destroyed", () => {
        URL.revokeObjectURL(s);
      });
    } catch (o) {
      URL.revokeObjectURL(s);
      throw o;
    }
    return r;
  },
  unload(i) {
    i.destroy(true);
  }
};
ot.add(Bx);
class Fx {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
    };
    this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector;
    this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId;
    this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle;
    this._assetMap = {};
    this._preferredOrder = [];
    this._parsers = [];
    this._resolverHash = {};
    this._bundles = {};
  }
  setBundleIdentifier(t) {
    this._bundleIdConnector = t.connector ?? this._bundleIdConnector;
    this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId;
    this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle;
    if (this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") {
      throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
    }
  }
  prefer(...t) {
    t.forEach(e => {
      this._preferredOrder.push(e);
      e.priority ||= Object.keys(e.params);
    });
    this._resolverHash = {};
  }
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions);
    this._assetMap = {};
    this._preferredOrder = [];
    this._resolverHash = {};
    this._rootPath = null;
    this._basePath = null;
    this._manifest = null;
    this._bundles = {};
    this._defaultSearchParams = null;
  }
  setDefaultSearchParams(t) {
    if (typeof t == "string") {
      this._defaultSearchParams = t;
    } else {
      const e = t;
      this._defaultSearchParams = Object.keys(e).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&");
    }
  }
  getAlias(t) {
    const {
      alias: e,
      name: r,
      src: n,
      srcs: s
    } = t;
    return ar(e || r || n || s, a => typeof a == "string" ? a : Array.isArray(a) ? a.map(o => (o == null ? undefined : o.src) ?? (o == null ? undefined : o.srcs) ?? o) : a != null && a.src || a != null && a.srcs ? a.src ?? a.srcs : a, true);
  }
  addManifest(t) {
    if (this._manifest) {
      console.warn("[Resolver] Manifest already exists, this will be overwritten");
    }
    this._manifest = t;
    t.bundles.forEach(e => {
      this.addBundle(e.name, e.assets);
    });
  }
  addBundle(t, e) {
    const r = [];
    if (Array.isArray(e)) {
      e.forEach(n => {
        const s = n.src ?? n.srcs;
        const a = n.alias ?? n.name;
        let o;
        if (typeof a == "string") {
          const l = this._createBundleAssetId(t, a);
          r.push(l);
          o = [a, l];
        } else {
          const l = a.map(c => this._createBundleAssetId(t, c));
          r.push(...l);
          o = [...a, ...l];
        }
        this.add({
          ...n,
          alias: o,
          src: s
        });
      });
    } else {
      Object.keys(e).forEach(n => {
        const s = [n, this._createBundleAssetId(t, n)];
        if (typeof e[n] == "string") {
          this.add({
            alias: s,
            src: e[n]
          });
        } else if (Array.isArray(e[n])) {
          this.add({
            alias: s,
            src: e[n]
          });
        } else {
          const a = e[n];
          const o = a.src ?? a.srcs;
          this.add({
            ...a,
            alias: s,
            src: Array.isArray(o) ? o : [o]
          });
        }
        r.push(...s);
      });
    }
    this._bundles[t] = r;
  }
  add(t, e, r, n, s) {
    const a = [];
    if (typeof t == "string" || Array.isArray(t) && typeof t[0] == "string") {
      vt("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`);
      a.push({
        alias: t,
        src: e,
        data: r,
        format: n,
        loadParser: s
      });
    } else if (Array.isArray(t)) {
      a.push(...t);
    } else {
      a.push(t);
    }
    let o;
    o = l => {
      if (this.hasKey(l)) {
        console.warn(`[Resolver] already has key: ${l} overwriting`);
      }
    };
    ar(a).forEach(l => {
      const {
        src: c,
        srcs: p
      } = l;
      let {
        data: g,
        format: f,
        loadParser: v
      } = l;
      const _ = ar(c || p).map(E => typeof E == "string" ? sx(E) : Array.isArray(E) ? E : [E]);
      const T = this.getAlias(l);
      if (Array.isArray(T)) {
        T.forEach(o);
      } else {
        o(T);
      }
      const A = [];
      _.forEach(E => {
        E.forEach(I => {
          let S = {};
          if (typeof I != "object") {
            S.src = I;
            for (let P = 0; P < this._parsers.length; P++) {
              const k = this._parsers[P];
              if (k.test(I)) {
                S = k.parse(I);
                break;
              }
            }
          } else {
            g = I.data ?? g;
            f = I.format ?? f;
            v = I.loadParser ?? v;
            S = {
              ...S,
              ...I
            };
          }
          if (!T) {
            throw new Error(`[Resolver] alias is undefined for this asset: ${S.src}`);
          }
          S = this.buildResolvedAsset(S, {
            aliases: T,
            data: g,
            format: f,
            loadParser: v
          });
          A.push(S);
        });
      });
      T.forEach(E => {
        this._assetMap[E] = A;
      });
    });
  }
  resolveBundle(t) {
    const e = ba(t);
    t = ar(t);
    const r = {};
    t.forEach(n => {
      const s = this._bundles[n];
      if (s) {
        const a = this.resolve(s);
        const o = {};
        for (const l in a) {
          const c = a[l];
          o[this._extractAssetIdFromBundle(n, l)] = c;
        }
        r[n] = o;
      }
    });
    if (e) {
      return r[t[0]];
    } else {
      return r;
    }
  }
  resolveUrl(t) {
    const e = this.resolve(t);
    if (typeof t != "string") {
      const r = {};
      for (const n in e) {
        r[n] = e[n].src;
      }
      return r;
    }
    return e.src;
  }
  resolve(t) {
    const e = ba(t);
    t = ar(t);
    const r = {};
    t.forEach(n => {
      if (!this._resolverHash[n]) {
        if (this._assetMap[n]) {
          let s = this._assetMap[n];
          const a = s[0];
          const o = this._getPreferredOrder(s);
          if (o != null) {
            o.priority.forEach(l => {
              o.params[l].forEach(c => {
                const p = s.filter(g => g[l] ? g[l] === c : false);
                if (p.length) {
                  s = p;
                }
              });
            });
          }
          this._resolverHash[n] = s[0] ?? a;
        } else {
          this._resolverHash[n] = this.buildResolvedAsset({
            alias: [n],
            src: n
          }, {});
        }
      }
      r[n] = this._resolverHash[n];
    });
    if (e) {
      return r[t[0]];
    } else {
      return r;
    }
  }
  hasKey(t) {
    return !!this._assetMap[t];
  }
  hasBundle(t) {
    return !!this._bundles[t];
  }
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const r = t[0];
      const n = this._preferredOrder.find(s => s.params.format.includes(r.format));
      if (n) {
        return n;
      }
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams) {
      return t;
    }
    const e = /\?/.test(t) ? "&" : "?";
    return `${t}${e}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(t, e) {
    const {
      aliases: r,
      data: n,
      loadParser: s,
      format: a
    } = e;
    if (this._basePath || this._rootPath) {
      t.src = ge.toAbsolute(t.src, this._basePath, this._rootPath);
    }
    t.alias = r ?? t.alias ?? [t.src];
    t.src = this._appendDefaultSearchParams(t.src);
    t.data = {
      ...(n || {}),
      ...t.data
    };
    t.loadParser = s ?? t.loadParser;
    t.format = a ?? t.format ?? ge.extname(t.src).slice(1);
    t.srcs = t.src;
    t.name = t.alias;
    return t;
  }
}
class Ox {
  constructor() {
    this._detections = [];
    this._initialized = false;
    this.resolver = new Fx();
    this.loader = new ox();
    this.cache = Ii;
    this._backgroundLoader = new nx(this.loader);
    this._backgroundLoader.active = true;
    this.reset();
  }
  async init(t = {}) {
    var s;
    var a;
    if (this._initialized) {
      console.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    this._initialized = true;
    if (t.defaultSearchParams) {
      this.resolver.setDefaultSearchParams(t.defaultSearchParams);
    }
    if (t.basePath) {
      this.resolver.basePath = t.basePath;
    }
    if (t.bundleIdentifier) {
      this.resolver.setBundleIdentifier(t.bundleIdentifier);
    }
    if (t.manifest) {
      let o = t.manifest;
      if (typeof o == "string") {
        o = await this.load(o);
      }
      this.resolver.addManifest(o);
    }
    const e = ((s = t.texturePreference) == null ? undefined : s.resolution) ?? 1;
    const r = typeof e == "number" ? [e] : e;
    const n = await this._detectFormats({
      preferredFormats: (a = t.texturePreference) == null ? undefined : a.format,
      skipDetections: t.skipDetections,
      detections: this._detections
    });
    this.resolver.prefer({
      params: {
        format: n,
        resolution: r
      }
    });
    if (t.preferences) {
      this.setPreferences(t.preferences);
    }
  }
  add(t, e, r, n, s) {
    this.resolver.add(t, e, r, n, s);
  }
  async load(t, e) {
    if (!this._initialized) {
      await this.init();
    }
    const r = ba(t);
    const n = ar(t).map(o => {
      if (typeof o != "string") {
        const l = this.resolver.getAlias(o);
        if (l.some(c => !this.resolver.hasKey(c))) {
          this.add(o);
        }
        if (Array.isArray(l)) {
          return l[0];
        } else {
          return l;
        }
      }
      if (!this.resolver.hasKey(o)) {
        this.add({
          alias: o,
          src: o
        });
      }
      return o;
    });
    const s = this.resolver.resolve(n);
    const a = await this._mapLoadToResolve(s, e);
    if (r) {
      return a[n[0]];
    } else {
      return a;
    }
  }
  addBundle(t, e) {
    this.resolver.addBundle(t, e);
  }
  async loadBundle(t, e) {
    if (!this._initialized) {
      await this.init();
    }
    let r = false;
    if (typeof t == "string") {
      r = true;
      t = [t];
    }
    const n = this.resolver.resolveBundle(t);
    const s = {};
    const a = Object.keys(n);
    let o = 0;
    let l = 0;
    const c = () => {
      if (e != null) {
        e(++o / l);
      }
    };
    const p = a.map(g => {
      const f = n[g];
      l += Object.keys(f).length;
      return this._mapLoadToResolve(f, c).then(v => {
        s[g] = v;
      });
    });
    await Promise.all(p);
    if (r) {
      return s[t[0]];
    } else {
      return s;
    }
  }
  async backgroundLoad(t) {
    if (!this._initialized) {
      await this.init();
    }
    if (typeof t == "string") {
      t = [t];
    }
    const e = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(e));
  }
  async backgroundLoadBundle(t) {
    if (!this._initialized) {
      await this.init();
    }
    if (typeof t == "string") {
      t = [t];
    }
    const e = this.resolver.resolveBundle(t);
    Object.values(e).forEach(r => {
      this._backgroundLoader.add(Object.values(r));
    });
  }
  reset() {
    this.resolver.reset();
    this.loader.reset();
    this.cache.reset();
    this._initialized = false;
  }
  get(t) {
    if (typeof t == "string") {
      return Ii.get(t);
    }
    const e = {};
    for (let r = 0; r < t.length; r++) {
      e[r] = Ii.get(t[r]);
    }
    return e;
  }
  async _mapLoadToResolve(t, e) {
    const r = Object.values(t);
    const n = Object.keys(t);
    this._backgroundLoader.active = false;
    const s = await this.loader.load(r, e);
    this._backgroundLoader.active = true;
    const a = {};
    r.forEach((o, l) => {
      const c = s[o.src];
      const p = [o.src];
      if (o.alias) {
        p.push(...o.alias);
      }
      a[n[l]] = c;
      Ii.set(p, c);
    });
    return a;
  }
  async unload(t) {
    if (!this._initialized) {
      await this.init();
    }
    const e = ar(t).map(n => typeof n != "string" ? n.src : n);
    const r = this.resolver.resolve(e);
    await this._unloadFromResolved(r);
  }
  async unloadBundle(t) {
    if (!this._initialized) {
      await this.init();
    }
    t = ar(t);
    const e = this.resolver.resolveBundle(t);
    const r = Object.keys(e).map(n => this._unloadFromResolved(e[n]));
    await Promise.all(r);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach(r => {
      Ii.remove(r.src);
    });
    await this.loader.unload(e);
  }
  async _detectFormats(t) {
    let e = [];
    if (t.preferredFormats) {
      e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats];
    }
    for (const r of t.detections) {
      if (t.skipDetections || (await r.test())) {
        e = await r.add(e);
      } else if (!t.skipDetections) {
        e = await r.remove(e);
      }
    }
    e = e.filter((r, n) => e.indexOf(r) === n);
    return e;
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return Xa.config.preferWorkers;
  }
  set preferWorkers(t) {
    vt("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead.");
    this.setPreferences({
      preferWorkers: t
    });
  }
  setPreferences(t) {
    this.loader.parsers.forEach(e => {
      if (e.config) {
        Object.keys(e.config).filter(r => r in t).forEach(r => {
          e.config[r] = t[r];
        });
      }
    });
  }
}
const $s = new Ox();
ot.handleByList(rt.LoadParser, $s.loader.parsers).handleByList(rt.ResolveParser, $s.resolver.parsers).handleByList(rt.CacheParser, $s.cache.parsers).handleByList(rt.DetectionParser, $s.detections);
const Nx = {
  extension: rt.CacheParser,
  test: i => Array.isArray(i) && i.every(t => t instanceof ut),
  getCacheableAssets: (i, t) => {
    const e = {};
    i.forEach(r => {
      t.forEach((n, s) => {
        e[r + (s === 0 ? "" : s + 1)] = n;
      });
    });
    return e;
  }
};
ot.add(Nx);
async function Nf(i) {
  if ("Image" in globalThis) {
    return new Promise(t => {
      const e = new Image();
      e.onload = () => {
        t(true);
      };
      e.onerror = () => {
        t(false);
      };
      e.src = i;
    });
  }
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(i)).blob();
      await createImageBitmap(t);
    } catch {
      return false;
    }
    return true;
  }
  return false;
}
const Lx = {
  extension: {
    type: rt.DetectionParser,
    priority: 1
  },
  test: async () => Nf("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
  add: async i => [...i, "avif"],
  remove: async i => i.filter(t => t !== "avif")
};
ot.add(Lx);
const kx = {
  extension: {
    type: rt.DetectionParser,
    priority: 0
  },
  test: async () => Nf("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
  add: async i => [...i, "webp"],
  remove: async i => i.filter(t => t !== "webp")
};
ot.add(kx);
const Cc = ["png", "jpg", "jpeg"];
const Ux = {
  extension: {
    type: rt.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(true),
  add: async i => [...i, ...Cc],
  remove: async i => i.filter(t => !Cc.includes(t))
};
ot.add(Ux);
const Gx = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function Cl(i) {
  if (Gx) {
    return false;
  } else {
    return document.createElement("video").canPlayType(i) !== "";
  }
}
const Hx = {
  extension: {
    type: rt.DetectionParser,
    priority: 0
  },
  test: async () => Cl("video/webm"),
  add: async i => [...i, "webm"],
  remove: async i => i.filter(t => t !== "webm")
};
ot.add(Hx);
const $x = {
  extension: {
    type: rt.DetectionParser,
    priority: 0
  },
  test: async () => Cl("video/mp4"),
  add: async i => [...i, "mp4", "m4v"],
  remove: async i => i.filter(t => t !== "mp4" && t !== "m4v")
};
ot.add($x);
const Vx = {
  extension: {
    type: rt.DetectionParser,
    priority: 0
  },
  test: async () => Cl("video/ogg"),
  add: async i => [...i, "ogv"],
  remove: async i => i.filter(t => t !== "ogv")
};
ot.add(Vx);
const Wx = {
  extension: rt.ResolveParser,
  test: Xa.test,
  parse: i => {
    var t;
    return {
      resolution: parseFloat(((t = st.RETINA_PREFIX.exec(i)) == null ? undefined : t[1]) ?? "1"),
      format: ge.extname(i).slice(1),
      src: i
    };
  }
};
ot.add(Wx);
var we = (i => {
  i[i.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
  i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
  i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
  i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
  i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
  i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
  i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
  i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
  i[i.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC";
  i[i.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC";
  i[i.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC";
  i[i.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
  i[i.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2";
  i[i.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
  i[i.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2";
  i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
  i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
  i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
  i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
  i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
  i[i.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
  i[i.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL";
  i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL";
  i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL";
  i[i.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
  i[i.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT";
  i[i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT";
  i[i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT";
  i[i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT";
  return i;
})(we || {});
const Ta = {
  33776: 0.5,
  33777: 0.5,
  33778: 1,
  33779: 1,
  35916: 0.5,
  35917: 0.5,
  35918: 1,
  35919: 1,
  37488: 0.5,
  37489: 0.5,
  37490: 1,
  37491: 1,
  37492: 0.5,
  37496: 1,
  37493: 0.5,
  37497: 1,
  37494: 0.5,
  37495: 0.5,
  35840: 0.5,
  35842: 0.5,
  35841: 0.25,
  35843: 0.25,
  36196: 0.5,
  35986: 0.5,
  35987: 1,
  34798: 1,
  37808: 1,
  36492: 1,
  36493: 1,
  36494: 1,
  36495: 1
};
let Er;
let en;
function Ic() {
  en = {
    bptc: Er.getExtension("EXT_texture_compression_bptc"),
    astc: Er.getExtension("WEBGL_compressed_texture_astc"),
    etc: Er.getExtension("WEBGL_compressed_texture_etc"),
    s3tc: Er.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: Er.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    pvrtc: Er.getExtension("WEBGL_compressed_texture_pvrtc") || Er.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    etc1: Er.getExtension("WEBGL_compressed_texture_etc1"),
    atc: Er.getExtension("WEBGL_compressed_texture_atc")
  };
}
const jx = {
  extension: {
    type: rt.DetectionParser,
    priority: 2
  },
  test: async () => {
    const i = st.ADAPTER.createCanvas().getContext("webgl");
    if (i) {
      Er = i;
      return true;
    } else {
      console.warn("WebGL not available for compressed textures.");
      return false;
    }
  },
  add: async i => {
    if (!en) {
      Ic();
    }
    const t = [];
    for (const e in en) {
      if (en[e]) {
        t.push(e);
      }
    }
    return [...t, ...i];
  },
  remove: async i => {
    if (!en) {
      Ic();
    }
    return i.filter(t => !(t in en));
  }
};
ot.add(jx);
class Xx extends ka {
  constructor(t, e = {
    width: 1,
    height: 1,
    autoLoad: true
  }) {
    let r;
    let n;
    if (typeof t == "string") {
      r = t;
      n = new Uint8Array();
    } else {
      r = null;
      n = t;
    }
    super(n, e);
    this.origin = r;
    this.buffer = n ? new Dh(n) : null;
    this._load = null;
    this.loaded = false;
    if (this.origin !== null && e.autoLoad !== false) {
      this.load();
    }
    if (this.origin === null && this.buffer) {
      this._load = Promise.resolve(this);
      this.loaded = true;
      this.onBlobLoaded(this.buffer.rawBinaryData);
    }
  }
  onBlobLoaded(t) {}
  load() {
    if (this._load) {
      return this._load;
    } else {
      this._load = fetch(this.origin).then(t => t.blob()).then(t => t.arrayBuffer()).then(t => {
        this.data = new Uint32Array(t);
        this.buffer = new Dh(t);
        this.loaded = true;
        this.onBlobLoaded(t);
        this.update();
        return this;
      });
      return this._load;
    }
  }
}
class Di extends Xx {
  constructor(t, e) {
    super(t, e);
    this.format = e.format;
    this.levels = e.levels || 1;
    this._width = e.width;
    this._height = e.height;
    this._extension = Di._formatToExtension(this.format);
    if (e.levelBuffers || this.buffer) {
      this._levelBuffers = e.levelBuffers || Di._createLevelBuffers(t instanceof Uint8Array ? t : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
    }
  }
  upload(t, e, r) {
    const n = t.gl;
    if (!t.context.extensions[this._extension]) {
      throw new Error(`${this._extension} textures are not supported on the current machine`);
    }
    if (!this._levelBuffers) {
      return false;
    }
    n.pixelStorei(n.UNPACK_ALIGNMENT, 4);
    for (let s = 0, a = this.levels; s < a; s++) {
      const {
        levelID: o,
        levelWidth: l,
        levelHeight: c,
        levelBuffer: p
      } = this._levelBuffers[s];
      n.compressedTexImage2D(n.TEXTURE_2D, o, this.format, l, c, 0, p);
    }
    return true;
  }
  onBlobLoaded() {
    this._levelBuffers = Di._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
  }
  static _formatToExtension(t) {
    if (t >= 33776 && t <= 33779) {
      return "s3tc";
    }
    if (t >= 35916 && t <= 35919) {
      return "s3tc_sRGB";
    }
    if (t >= 37488 && t <= 37497) {
      return "etc";
    }
    if (t >= 35840 && t <= 35843) {
      return "pvrtc";
    }
    if (t === 36196) {
      return "etc1";
    }
    if (t === 35986 || t === 35987 || t === 34798) {
      return "atc";
    }
    if (t >= 36492 && t <= 36495) {
      return "bptc";
    }
    if (t === 37808) {
      return "astc";
    }
    throw new Error(`Invalid (compressed) texture format given: ${t}`);
  }
  static _createLevelBuffers(t, e, r, n, s, a, o) {
    const l = new Array(r);
    let c = t.byteOffset;
    let p = a;
    let g = o;
    let f = p + n - 1 & ~(n - 1);
    let v = g + s - 1 & ~(s - 1);
    let _ = f * v * Ta[e];
    for (let T = 0; T < r; T++) {
      l[T] = {
        levelID: T,
        levelWidth: r > 1 ? p : f,
        levelHeight: r > 1 ? g : v,
        levelBuffer: new Uint8Array(t.buffer, c, _)
      };
      c += _;
      p = p >> 1 || 1;
      g = g >> 1 || 1;
      f = p + n - 1 & ~(n - 1);
      v = g + s - 1 & ~(s - 1);
      _ = f * v * Ta[e];
    }
    return l;
  }
}
const rh = 4;
const Vs = 124;
const zx = 32;
const Rc = 20;
const qx = 542327876;
const Ws = {
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19
};
const Yx = {
  SIZE: 0,
  FLAGS: 1,
  FOURCC: 2,
  RGB_BITCOUNT: 3,
  R_BIT_MASK: 4,
  G_BIT_MASK: 5,
  B_BIT_MASK: 6,
  A_BIT_MASK: 7
};
const js = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
};
const Kx = 1;
const Zx = 2;
const Qx = 4;
const Jx = 64;
const tb = 512;
const eb = 131072;
const rb = 827611204;
const ib = 861165636;
const nb = 894720068;
const sb = 808540228;
const ab = 4;
const ob = {
  [rb]: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [ib]: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [nb]: we.COMPRESSED_RGBA_S3TC_DXT5_EXT
};
const hb = {
  70: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  71: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  73: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  74: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  76: we.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  77: we.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  72: we.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
  75: we.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
  78: we.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
  96: we.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
  95: we.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
  98: we.COMPRESSED_RGBA_BPTC_UNORM_EXT,
  99: we.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
};
function lb(i) {
  const t = new Uint32Array(i);
  if (t[0] !== qx) {
    throw new Error("Invalid DDS file magic word");
  }
  const e = new Uint32Array(i, 0, Vs / Uint32Array.BYTES_PER_ELEMENT);
  const r = e[Ws.HEIGHT];
  const n = e[Ws.WIDTH];
  const s = e[Ws.MIPMAP_COUNT];
  const a = new Uint32Array(i, Ws.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, zx / Uint32Array.BYTES_PER_ELEMENT);
  const o = a[Kx];
  if (o & Qx) {
    const l = a[Yx.FOURCC];
    if (l !== sb) {
      const I = ob[l];
      const S = rh + Vs;
      const P = new Uint8Array(i, S);
      return [new Di(P, {
        format: I,
        width: n,
        height: r,
        levels: s
      })];
    }
    const c = rh + Vs;
    const p = new Uint32Array(t.buffer, c, Rc / Uint32Array.BYTES_PER_ELEMENT);
    const g = p[js.DXGI_FORMAT];
    const f = p[js.RESOURCE_DIMENSION];
    const v = p[js.MISC_FLAG];
    const _ = p[js.ARRAY_SIZE];
    const T = hb[g];
    if (T === undefined) {
      throw new Error(`DDSParser cannot parse texture data with DXGI format ${g}`);
    }
    if (v === ab) {
      throw new Error("DDSParser does not support cubemap textures");
    }
    if (f === 6) {
      throw new Error("DDSParser does not supported 3D texture data");
    }
    const A = new Array();
    const E = rh + Vs + Rc;
    if (_ === 1) {
      A.push(new Uint8Array(i, E));
    } else {
      const I = Ta[T];
      let S = 0;
      let P = n;
      let k = r;
      for (let d = 0; d < s; d++) {
        const O = Math.max(1, P + 3 & -4);
        const N = Math.max(1, k + 3 & -4);
        const z = O * N * I;
        S += z;
        P = P >>> 1;
        k = k >>> 1;
      }
      let V = E;
      for (let d = 0; d < _; d++) {
        A.push(new Uint8Array(i, V, S));
        V += S;
      }
    }
    return A.map(I => new Di(I, {
      format: T,
      width: n,
      height: r,
      levels: s
    }));
  }
  throw o & Jx ? new Error("DDSParser does not support uncompressed texture data.") : o & tb ? new Error("DDSParser does not supported YUV uncompressed texture data.") : o & eb ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : o & Zx ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
const Pc = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
const ub = 67305985;
const ir = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
};
const sl = 64;
const Mc = {
  [mt.UNSIGNED_BYTE]: 1,
  [mt.UNSIGNED_SHORT]: 2,
  [mt.INT]: 4,
  [mt.UNSIGNED_INT]: 4,
  [mt.FLOAT]: 4,
  [mt.HALF_FLOAT]: 8
};
const cb = {
  [Z.RGBA]: 4,
  [Z.RGB]: 3,
  [Z.RG]: 2,
  [Z.RED]: 1,
  [Z.LUMINANCE]: 1,
  [Z.LUMINANCE_ALPHA]: 2,
  [Z.ALPHA]: 1
};
const db = {
  [mt.UNSIGNED_SHORT_4_4_4_4]: 2,
  [mt.UNSIGNED_SHORT_5_5_5_1]: 2,
  [mt.UNSIGNED_SHORT_5_6_5]: 2
};
function fb(i, t, e = false) {
  const r = new DataView(t);
  if (!pb(i, r)) {
    return null;
  }
  const n = r.getUint32(ir.ENDIANNESS, true) === ub;
  const s = r.getUint32(ir.GL_TYPE, n);
  const a = r.getUint32(ir.GL_FORMAT, n);
  const o = r.getUint32(ir.GL_INTERNAL_FORMAT, n);
  const l = r.getUint32(ir.PIXEL_WIDTH, n);
  const c = r.getUint32(ir.PIXEL_HEIGHT, n) || 1;
  const p = r.getUint32(ir.PIXEL_DEPTH, n) || 1;
  const g = r.getUint32(ir.NUMBER_OF_ARRAY_ELEMENTS, n) || 1;
  const f = r.getUint32(ir.NUMBER_OF_FACES, n);
  const v = r.getUint32(ir.NUMBER_OF_MIPMAP_LEVELS, n);
  const _ = r.getUint32(ir.BYTES_OF_KEY_VALUE_DATA, n);
  if (c === 0 || p !== 1) {
    throw new Error("Only 2D textures are supported");
  }
  if (f !== 1) {
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  }
  if (g !== 1) {
    throw new Error("WebGL does not support array textures");
  }
  const T = 4;
  const A = 4;
  const E = l + 3 & -4;
  const I = c + 3 & -4;
  const S = new Array(g);
  let P = l * c;
  if (s === 0) {
    P = E * I;
  }
  let k;
  if (s !== 0) {
    if (Mc[s]) {
      k = Mc[s] * cb[a];
    } else {
      k = db[s];
    }
  } else {
    k = Ta[o];
  }
  if (k === undefined) {
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  }
  const V = e ? mb(r, _, n) : null;
  let d = P * k;
  let O = l;
  let N = c;
  let z = E;
  let J = I;
  let $ = sl + _;
  for (let B = 0; B < v; B++) {
    const W = r.getUint32($, n);
    let tt = $ + 4;
    for (let at = 0; at < g; at++) {
      let nt = S[at];
      nt ||= S[at] = new Array(v);
      nt[B] = {
        levelID: B,
        levelWidth: v > 1 || s !== 0 ? O : z,
        levelHeight: v > 1 || s !== 0 ? N : J,
        levelBuffer: new Uint8Array(t, tt, d)
      };
      tt += d;
    }
    $ += W + 4;
    $ = $ % 4 !== 0 ? $ + 4 - $ % 4 : $;
    O = O >> 1 || 1;
    N = N >> 1 || 1;
    z = O + T - 1 & ~(T - 1);
    J = N + A - 1 & ~(A - 1);
    d = z * J * k;
  }
  if (s !== 0) {
    return {
      uncompressed: S.map(B => {
        let W = B[0].levelBuffer;
        let tt = false;
        if (s === mt.FLOAT) {
          W = new Float32Array(B[0].levelBuffer.buffer, B[0].levelBuffer.byteOffset, B[0].levelBuffer.byteLength / 4);
        } else if (s === mt.UNSIGNED_INT) {
          tt = true;
          W = new Uint32Array(B[0].levelBuffer.buffer, B[0].levelBuffer.byteOffset, B[0].levelBuffer.byteLength / 4);
        } else if (s === mt.INT) {
          tt = true;
          W = new Int32Array(B[0].levelBuffer.buffer, B[0].levelBuffer.byteOffset, B[0].levelBuffer.byteLength / 4);
        }
        return {
          resource: new ka(W, {
            width: B[0].levelWidth,
            height: B[0].levelHeight
          }),
          type: s,
          format: tt ? gb(a) : a
        };
      }),
      kvData: V
    };
  } else {
    return {
      compressed: S.map(B => new Di(null, {
        format: o,
        width: l,
        height: c,
        levels: v,
        levelBuffers: B
      })),
      kvData: V
    };
  }
}
function pb(i, t) {
  for (let e = 0; e < Pc.length; e++) {
    if (t.getUint8(e) !== Pc[e]) {
      console.error(`${i} is not a valid *.ktx file!`);
      return false;
    }
  }
  return true;
}
function gb(i) {
  switch (i) {
    case Z.RGBA:
      return Z.RGBA_INTEGER;
    case Z.RGB:
      return Z.RGB_INTEGER;
    case Z.RG:
      return Z.RG_INTEGER;
    case Z.RED:
      return Z.RED_INTEGER;
    default:
      return i;
  }
}
function mb(i, t, e) {
  const r = new Map();
  let n = 0;
  while (n < t) {
    const s = i.getUint32(sl + n, e);
    const a = sl + n + 4;
    const o = 3 - (s + 3) % 4;
    if (s === 0 || s > t - n) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let l = 0;
    for (; l < s && i.getUint8(a + l) !== 0; l++);
    if (l === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const c = new TextDecoder().decode(new Uint8Array(i.buffer, a, l));
    const p = new DataView(i.buffer, a + l + 1, s - l - 1);
    r.set(c, p);
    n += 4 + s + o;
  }
  return r;
}
const yb = {
  extension: {
    type: rt.LoadParser,
    priority: dr.High
  },
  name: "loadDDS",
  test(i) {
    return fi(i, ".dds");
  },
  async load(i, t, e) {
    const r = await (await st.ADAPTER.fetch(i)).arrayBuffer();
    const n = lb(r).map(s => {
      const a = new Tt(s, {
        mipmap: Br.OFF,
        alphaMode: ke.NO_PREMULTIPLIED_ALPHA,
        resolution: Fr(i),
        ...t.data
      });
      return ds(a, e, i);
    });
    if (n.length === 1) {
      return n[0];
    } else {
      return n;
    }
  },
  unload(i) {
    if (Array.isArray(i)) {
      i.forEach(t => t.destroy(true));
    } else {
      i.destroy(true);
    }
  }
};
ot.add(yb);
const vb = {
  extension: {
    type: rt.LoadParser,
    priority: dr.High
  },
  name: "loadKTX",
  test(i) {
    return fi(i, ".ktx");
  },
  async load(i, t, e) {
    const r = await (await st.ADAPTER.fetch(i)).arrayBuffer();
    const {
      compressed: n,
      uncompressed: s,
      kvData: a
    } = fb(i, r);
    const o = n ?? s;
    const l = {
      mipmap: Br.OFF,
      alphaMode: ke.NO_PREMULTIPLIED_ALPHA,
      resolution: Fr(i),
      ...t.data
    };
    const c = o.map(p => {
      if (o === s) {
        Object.assign(l, {
          type: p.type,
          format: p.format
        });
      }
      const g = p.resource ?? p;
      const f = new Tt(g, l);
      f.ktxKeyValueData = a;
      return ds(f, e, i);
    });
    if (c.length === 1) {
      return c[0];
    } else {
      return c;
    }
  },
  unload(i) {
    if (Array.isArray(i)) {
      i.forEach(t => t.destroy(true));
    } else {
      i.destroy(true);
    }
  }
};
ot.add(vb);
const _b = ["s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"];
const xb = {
  extension: rt.ResolveParser,
  test: i => {
    const t = ge.extname(i).slice(1);
    return ["basis", "ktx", "dds"].includes(t);
  },
  parse: i => {
    var r;
    var n;
    const t = i.split(".");
    const e = t.pop();
    if (["ktx", "dds"].includes(e)) {
      const s = t.pop();
      if (_b.includes(s)) {
        return {
          resolution: parseFloat(((r = st.RETINA_PREFIX.exec(i)) == null ? undefined : r[1]) ?? "1"),
          format: s,
          src: i
        };
      }
    }
    return {
      resolution: parseFloat(((n = st.RETINA_PREFIX.exec(i)) == null ? undefined : n[1]) ?? "1"),
      format: e,
      src: i
    };
  }
};
ot.add(xb);
const Xs = new At();
const bb = 4;
const Lf = class zn {
  constructor(t) {
    this.renderer = t;
    this._rendererPremultipliedAlpha = false;
  }
  contextChange() {
    var e;
    const t = (e = this.renderer) == null ? undefined : e.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!t && !!t.alpha && !!t.premultipliedAlpha;
  }
  async image(t, e, r, n) {
    const s = new Image();
    s.src = await this.base64(t, e, r, n);
    return s;
  }
  async base64(t, e, r, n) {
    const s = this.canvas(t, n);
    if (s.toBlob !== undefined) {
      return new Promise((a, o) => {
        s.toBlob(l => {
          if (!l) {
            o(new Error("ICanvas.toBlob failed!"));
            return;
          }
          const c = new FileReader();
          c.onload = () => a(c.result);
          c.onerror = o;
          c.readAsDataURL(l);
        }, e, r);
      });
    }
    if (s.toDataURL !== undefined) {
      return s.toDataURL(e, r);
    }
    if (s.convertToBlob !== undefined) {
      const a = await s.convertToBlob({
        type: e,
        quality: r
      });
      return new Promise((o, l) => {
        const c = new FileReader();
        c.onload = () => o(c.result);
        c.onerror = l;
        c.readAsDataURL(a);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  canvas(t, e) {
    const {
      pixels: r,
      width: n,
      height: s,
      flipY: a,
      premultipliedAlpha: o
    } = this._rawPixels(t, e);
    if (a) {
      zn._flipY(r, n, s);
    }
    if (o) {
      zn._unpremultiplyAlpha(r);
    }
    const l = new us(n, s, 1);
    const c = new ImageData(new Uint8ClampedArray(r.buffer), n, s);
    l.context.putImageData(c, 0, 0);
    return l.canvas;
  }
  pixels(t, e) {
    const {
      pixels: r,
      width: n,
      height: s,
      flipY: a,
      premultipliedAlpha: o
    } = this._rawPixels(t, e);
    if (a) {
      zn._flipY(r, n, s);
    }
    if (o) {
      zn._unpremultiplyAlpha(r);
    }
    return r;
  }
  _rawPixels(t, e) {
    const r = this.renderer;
    if (!r) {
      throw new Error("The Extract has already been destroyed");
    }
    let n;
    let s = false;
    let a = false;
    let o;
    let l = false;
    if (t) {
      if (t instanceof Or) {
        o = t;
      } else {
        o = r.generateTexture(t, {
          region: e,
          resolution: r.resolution,
          multisample: r.multisample
        });
        l = true;
        if (e) {
          Xs.width = e.width;
          Xs.height = e.height;
          e = Xs;
        }
      }
    }
    const c = r.gl;
    if (o) {
      n = o.baseTexture.resolution;
      e = e ?? o.frame;
      s = false;
      a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === Z.RGBA;
      if (!l) {
        r.renderTexture.bind(o);
        const v = o.framebuffer.glFramebuffers[r.CONTEXT_UID];
        if (v.blitFramebuffer) {
          r.framebuffer.bind(v.blitFramebuffer);
        }
      }
    } else {
      n = r.resolution;
      if (!e) {
        e = Xs;
        e.width = r.width / n;
        e.height = r.height / n;
      }
      s = true;
      a = this._rendererPremultipliedAlpha;
      r.renderTexture.bind();
    }
    const p = Math.max(Math.round(e.width * n), 1);
    const g = Math.max(Math.round(e.height * n), 1);
    const f = new Uint8Array(bb * p * g);
    c.readPixels(Math.round(e.x * n), Math.round(e.y * n), p, g, c.RGBA, c.UNSIGNED_BYTE, f);
    if (l) {
      if (o != null) {
        o.destroy(true);
      }
    }
    return {
      pixels: f,
      width: p,
      height: g,
      flipY: s,
      premultipliedAlpha: a
    };
  }
  destroy() {
    this.renderer = null;
  }
  static _flipY(t, e, r) {
    const n = e << 2;
    const s = r >> 1;
    const a = new Uint8Array(n);
    for (let o = 0; o < s; o++) {
      const l = o * n;
      const c = (r - o - 1) * n;
      a.set(t.subarray(l, l + n));
      t.copyWithin(l, c, c + n);
      t.set(a, c);
    }
  }
  static _unpremultiplyAlpha(t) {
    if (t instanceof Uint8ClampedArray) {
      t = new Uint8Array(t.buffer);
    }
    const e = t.length;
    for (let r = 0; r < e; r += 4) {
      const n = t[r + 3];
      if (n !== 0) {
        const s = 255.001 / n;
        t[r] = t[r] * s + 0.5;
        t[r + 1] = t[r + 1] * s + 0.5;
        t[r + 2] = t[r + 2] * s + 0.5;
      }
    }
  }
};
Lf.extension = {
  name: "extract",
  type: rt.RendererSystem
};
let Tb = Lf;
ot.add(Tb);
const wa = {
  build(i) {
    const t = i.points;
    let e;
    let r;
    let n;
    let s;
    let a;
    let o;
    if (i.type === Zt.CIRC) {
      const _ = i.shape;
      e = _.x;
      r = _.y;
      a = o = _.radius;
      n = s = 0;
    } else if (i.type === Zt.ELIP) {
      const _ = i.shape;
      e = _.x;
      r = _.y;
      a = _.width;
      o = _.height;
      n = s = 0;
    } else {
      const _ = i.shape;
      const T = _.width / 2;
      const A = _.height / 2;
      e = _.x + T;
      r = _.y + A;
      a = o = Math.max(0, Math.min(_.radius, Math.min(T, A)));
      n = T - a;
      s = A - o;
    }
    if (!(a >= 0) || !(o >= 0) || !(n >= 0) || !(s >= 0)) {
      t.length = 0;
      return;
    }
    const l = Math.ceil(Math.sqrt(a + o) * 2.3);
    const c = l * 8 + (n ? 4 : 0) + (s ? 4 : 0);
    t.length = c;
    if (c === 0) {
      return;
    }
    if (l === 0) {
      t.length = 8;
      t[0] = t[6] = e + n;
      t[1] = t[3] = r + s;
      t[2] = t[4] = e - n;
      t[5] = t[7] = r - s;
      return;
    }
    let p = 0;
    let g = l * 4 + (n ? 2 : 0) + 2;
    let f = g;
    let v = c;
    {
      const _ = n + a;
      const T = s;
      const A = e + _;
      const E = e - _;
      const I = r + T;
      t[p++] = A;
      t[p++] = I;
      t[--g] = I;
      t[--g] = E;
      if (s) {
        const S = r - T;
        t[f++] = E;
        t[f++] = S;
        t[--v] = S;
        t[--v] = A;
      }
    }
    for (let _ = 1; _ < l; _++) {
      const T = Math.PI / 2 * (_ / l);
      const A = n + Math.cos(T) * a;
      const E = s + Math.sin(T) * o;
      const I = e + A;
      const S = e - A;
      const P = r + E;
      const k = r - E;
      t[p++] = I;
      t[p++] = P;
      t[--g] = P;
      t[--g] = S;
      t[f++] = S;
      t[f++] = k;
      t[--v] = k;
      t[--v] = I;
    }
    {
      const _ = n;
      const T = s + o;
      const A = e + _;
      const E = e - _;
      const I = r + T;
      const S = r - T;
      t[p++] = A;
      t[p++] = I;
      t[--v] = S;
      t[--v] = A;
      if (n) {
        t[p++] = E;
        t[p++] = I;
        t[--v] = S;
        t[--v] = E;
      }
    }
  },
  triangulate(i, t) {
    const e = i.points;
    const r = t.points;
    const n = t.indices;
    if (e.length === 0) {
      return;
    }
    let s = r.length / 2;
    const a = s;
    let o;
    let l;
    if (i.type !== Zt.RREC) {
      const p = i.shape;
      o = p.x;
      l = p.y;
    } else {
      const p = i.shape;
      o = p.x + p.width / 2;
      l = p.y + p.height / 2;
    }
    const c = i.matrix;
    r.push(i.matrix ? c.a * o + c.c * l + c.tx : o, i.matrix ? c.b * o + c.d * l + c.ty : l);
    s++;
    r.push(e[0], e[1]);
    for (let p = 2; p < e.length; p += 2) {
      r.push(e[p], e[p + 1]);
      n.push(s++, a, s);
    }
    n.push(a + 1, a, s);
  }
};
function Dc(i, t = false) {
  const e = i.length;
  if (e < 6) {
    return;
  }
  let r = 0;
  for (let n = 0, s = i[e - 2], a = i[e - 1]; n < e; n += 2) {
    const o = i[n];
    const l = i[n + 1];
    r += (o - s) * (l + a);
    s = o;
    a = l;
  }
  if (!t && r > 0 || t && r <= 0) {
    const n = e / 2;
    for (let s = n + n % 2; s < e; s += 2) {
      const a = e - s - 2;
      const o = e - s - 1;
      const l = s;
      const c = s + 1;
      [i[a], i[l]] = [i[l], i[a]];
      [i[o], i[c]] = [i[c], i[o]];
    }
  }
}
const kf = {
  build(i) {
    i.points = i.shape.points.slice();
  },
  triangulate(i, t) {
    let e = i.points;
    const r = i.holes;
    const n = t.points;
    const s = t.indices;
    if (e.length >= 6) {
      Dc(e, false);
      const a = [];
      for (let c = 0; c < r.length; c++) {
        const p = r[c];
        Dc(p.points, true);
        a.push(e.length / 2);
        e = e.concat(p.points);
      }
      const o = Kc(e, a, 2);
      if (!o) {
        return;
      }
      const l = n.length / 2;
      for (let c = 0; c < o.length; c += 3) {
        s.push(o[c] + l);
        s.push(o[c + 1] + l);
        s.push(o[c + 2] + l);
      }
      for (let c = 0; c < e.length; c++) {
        n.push(e[c]);
      }
    }
  }
};
const wb = {
  build(i) {
    const t = i.shape;
    const e = t.x;
    const r = t.y;
    const n = t.width;
    const s = t.height;
    const a = i.points;
    a.length = 0;
    if (n >= 0 && s >= 0) {
      a.push(e, r, e + n, r, e + n, r + s, e, r + s);
    }
  },
  triangulate(i, t) {
    const e = i.points;
    const r = t.points;
    if (e.length === 0) {
      return;
    }
    const n = r.length / 2;
    r.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]);
    t.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3);
  }
};
const Eb = {
  build(i) {
    wa.build(i);
  },
  triangulate(i, t) {
    wa.triangulate(i, t);
  }
};
var qe = (i => {
  i.MITER = "miter";
  i.BEVEL = "bevel";
  i.ROUND = "round";
  return i;
})(qe || {});
var oi = (i => {
  i.BUTT = "butt";
  i.ROUND = "round";
  i.SQUARE = "square";
  return i;
})(oi || {});
const vn = {
  adaptive: true,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 0.0001,
  _segmentsCount(i, t = 20) {
    if (!this.adaptive || !i || isNaN(i)) {
      return t;
    }
    let e = Math.ceil(i / this.maxLength);
    if (e < this.minSegments) {
      e = this.minSegments;
    } else if (e > this.maxSegments) {
      e = this.maxSegments;
    }
    return e;
  }
};
class Bc {
  static curveTo(t, e, r, n, s, a) {
    const o = a[a.length - 2];
    const l = a[a.length - 1] - e;
    const c = o - t;
    const p = n - e;
    const g = r - t;
    const f = Math.abs(l * g - c * p);
    if (f < 1e-8 || s === 0) {
      if (a[a.length - 2] !== t || a[a.length - 1] !== e) {
        a.push(t, e);
      }
      return null;
    }
    const v = l * l + c * c;
    const _ = p * p + g * g;
    const T = l * p + c * g;
    const A = s * Math.sqrt(v) / f;
    const E = s * Math.sqrt(_) / f;
    const I = A * T / v;
    const S = E * T / _;
    const P = A * g + E * c;
    const k = A * p + E * l;
    const V = c * (E + I);
    const d = l * (E + I);
    const O = g * (A + S);
    const N = p * (A + S);
    const z = Math.atan2(d - k, V - P);
    const J = Math.atan2(N - k, O - P);
    return {
      cx: P + t,
      cy: k + e,
      radius: s,
      startAngle: z,
      endAngle: J,
      anticlockwise: c * p > g * l
    };
  }
  static arc(t, e, r, n, s, a, o, l, c) {
    const p = o - a;
    const g = vn._segmentsCount(Math.abs(p) * s, Math.ceil(Math.abs(p) / pa) * 40);
    const f = p / (g * 2);
    const v = f * 2;
    const _ = Math.cos(f);
    const T = Math.sin(f);
    const A = g - 1;
    const E = A % 1 / A;
    for (let I = 0; I <= A; ++I) {
      const S = I + E * I;
      const P = f + a + v * S;
      const k = Math.cos(P);
      const V = -Math.sin(P);
      c.push((_ * k + T * V) * s + r, (_ * -V + T * k) * s + n);
    }
  }
}
class Ab {
  constructor() {
    this.reset();
  }
  begin(t, e, r) {
    this.reset();
    this.style = t;
    this.start = e;
    this.attribStart = r;
  }
  end(t, e) {
    this.attribSize = e - this.attribStart;
    this.size = t - this.start;
  }
  reset() {
    this.style = null;
    this.size = 0;
    this.start = 0;
    this.attribStart = 0;
    this.attribSize = 0;
  }
}
class Il {
  static curveLength(t, e, r, n, s, a, o, l) {
    let c = 0;
    let p = 0;
    let g = 0;
    let f = 0;
    let v = 0;
    let _ = 0;
    let T = 0;
    let A = 0;
    let E = 0;
    let I = 0;
    let S = 0;
    let P = t;
    let k = e;
    for (let V = 1; V <= 10; ++V) {
      p = V / 10;
      g = p * p;
      f = g * p;
      v = 1 - p;
      _ = v * v;
      T = _ * v;
      A = T * t + _ * 3 * p * r + v * 3 * g * s + f * o;
      E = T * e + _ * 3 * p * n + v * 3 * g * a + f * l;
      I = P - A;
      S = k - E;
      P = A;
      k = E;
      c += Math.sqrt(I * I + S * S);
    }
    return c;
  }
  static curveTo(t, e, r, n, s, a, o) {
    const l = o[o.length - 2];
    const c = o[o.length - 1];
    o.length -= 2;
    const p = vn._segmentsCount(Il.curveLength(l, c, t, e, r, n, s, a));
    let g = 0;
    let f = 0;
    let v = 0;
    let _ = 0;
    let T = 0;
    o.push(l, c);
    for (let A = 1, E = 0; A <= p; ++A) {
      E = A / p;
      g = 1 - E;
      f = g * g;
      v = f * g;
      _ = E * E;
      T = _ * E;
      o.push(v * l + f * 3 * E * t + g * 3 * _ * r + T * s, v * c + f * 3 * E * e + g * 3 * _ * n + T * a);
    }
  }
}
function Fc(i, t, e, r, n, s, a, o) {
  const l = i - e * n;
  const c = t - r * n;
  const p = i + e * s;
  const g = t + r * s;
  let f;
  let v;
  if (a) {
    f = r;
    v = -e;
  } else {
    f = -r;
    v = e;
  }
  const _ = l + f;
  const T = c + v;
  const A = p + f;
  const E = g + v;
  o.push(_, T, A, E);
  return 2;
}
function xi(i, t, e, r, n, s, a, o) {
  const l = e - i;
  const c = r - t;
  let p = Math.atan2(l, c);
  let g = Math.atan2(n - i, s - t);
  if (o && p < g) {
    p += Math.PI * 2;
  } else if (!o && p > g) {
    g += Math.PI * 2;
  }
  let f = p;
  const v = g - p;
  const _ = Math.abs(v);
  const T = Math.sqrt(l * l + c * c);
  const A = (_ * 15 * Math.sqrt(T) / Math.PI >> 0) + 1;
  const E = v / A;
  f += E;
  if (o) {
    a.push(i, t, e, r);
    for (let I = 1, S = f; I < A; I++, S += E) {
      a.push(i, t, i + Math.sin(S) * T, t + Math.cos(S) * T);
    }
    a.push(i, t, n, s);
  } else {
    a.push(e, r, i, t);
    for (let I = 1, S = f; I < A; I++, S += E) {
      a.push(i + Math.sin(S) * T, t + Math.cos(S) * T, i, t);
    }
    a.push(n, s, i, t);
  }
  return A * 2;
}
function Sb(i, t) {
  const e = i.shape;
  let r = i.points || e.points.slice();
  const n = t.closePointEps;
  if (r.length === 0) {
    return;
  }
  const s = i.lineStyle;
  const a = new Bt(r[0], r[1]);
  const o = new Bt(r[r.length - 2], r[r.length - 1]);
  const l = e.type !== Zt.POLY || e.closeStroke;
  const c = Math.abs(a.x - o.x) < n && Math.abs(a.y - o.y) < n;
  if (l) {
    r = r.slice();
    if (c) {
      r.pop();
      r.pop();
      o.set(r[r.length - 2], r[r.length - 1]);
    }
    const nt = (a.x + o.x) * 0.5;
    const dt = (o.y + a.y) * 0.5;
    r.unshift(nt, dt);
    r.push(nt, dt);
  }
  const p = t.points;
  const g = r.length / 2;
  let f = r.length;
  const v = p.length / 2;
  const _ = s.width / 2;
  const T = _ * _;
  const A = s.miterLimit * s.miterLimit;
  let E = r[0];
  let I = r[1];
  let S = r[2];
  let P = r[3];
  let k = 0;
  let V = 0;
  let d = -(I - P);
  let O = E - S;
  let N = 0;
  let z = 0;
  let J = Math.sqrt(d * d + O * O);
  d /= J;
  O /= J;
  d *= _;
  O *= _;
  const $ = s.alignment;
  const B = (1 - $) * 2;
  const W = $ * 2;
  if (!l) {
    if (s.cap === oi.ROUND) {
      f += xi(E - d * (B - W) * 0.5, I - O * (B - W) * 0.5, E - d * B, I - O * B, E + d * W, I + O * W, p, true) + 2;
    } else if (s.cap === oi.SQUARE) {
      f += Fc(E, I, d, O, B, W, true, p);
    }
  }
  p.push(E - d * B, I - O * B, E + d * W, I + O * W);
  for (let nt = 1; nt < g - 1; ++nt) {
    E = r[(nt - 1) * 2];
    I = r[(nt - 1) * 2 + 1];
    S = r[nt * 2];
    P = r[nt * 2 + 1];
    k = r[(nt + 1) * 2];
    V = r[(nt + 1) * 2 + 1];
    d = -(I - P);
    O = E - S;
    J = Math.sqrt(d * d + O * O);
    d /= J;
    O /= J;
    d *= _;
    O *= _;
    N = -(P - V);
    z = S - k;
    J = Math.sqrt(N * N + z * z);
    N /= J;
    z /= J;
    N *= _;
    z *= _;
    const dt = S - E;
    const Ft = I - P;
    const Q = S - k;
    const K = V - P;
    const xt = dt * Q + Ft * K;
    const Ct = Ft * Q - K * dt;
    const It = Ct < 0;
    if (Math.abs(Ct) < Math.abs(xt) * 0.001) {
      p.push(S - d * B, P - O * B, S + d * W, P + O * W);
      if (xt >= 0) {
        if (s.join === qe.ROUND) {
          f += xi(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, false) + 4;
        } else {
          f += 2;
        }
        p.push(S - N * W, P - z * W, S + N * B, P + z * B);
      }
      continue;
    }
    const kt = (-d + E) * (-O + P) - (-d + S) * (-O + I);
    const Ot = (-N + k) * (-z + P) - (-N + S) * (-z + V);
    const Mt = (dt * Ot - Q * kt) / Ct;
    const Vt = (K * kt - Ft * Ot) / Ct;
    const Yt = (Mt - S) * (Mt - S) + (Vt - P) * (Vt - P);
    const Dt = S + (Mt - S) * B;
    const qt = P + (Vt - P) * B;
    const _t = S - (Mt - S) * W;
    const Kt = P - (Vt - P) * W;
    const Xt = Math.min(dt * dt + Ft * Ft, Q * Q + K * K);
    const me = It ? B : W;
    const Ee = Xt + me * me * T;
    const fr = Yt <= Ee;
    let oe = s.join;
    if (oe === qe.MITER && Yt / T > A) {
      oe = qe.BEVEL;
    }
    if (fr) {
      switch (oe) {
        case qe.MITER:
          {
            p.push(Dt, qt, _t, Kt);
            break;
          }
        case qe.BEVEL:
          {
            if (It) {
              p.push(Dt, qt, S + d * W, P + O * W, Dt, qt, S + N * W, P + z * W);
            } else {
              p.push(S - d * B, P - O * B, _t, Kt, S - N * B, P - z * B, _t, Kt);
            }
            f += 2;
            break;
          }
        case qe.ROUND:
          {
            if (It) {
              p.push(Dt, qt, S + d * W, P + O * W);
              f += xi(S, P, S + d * W, P + O * W, S + N * W, P + z * W, p, true) + 4;
              p.push(Dt, qt, S + N * W, P + z * W);
            } else {
              p.push(S - d * B, P - O * B, _t, Kt);
              f += xi(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, false) + 4;
              p.push(S - N * B, P - z * B, _t, Kt);
            }
            break;
          }
      }
    } else {
      p.push(S - d * B, P - O * B, S + d * W, P + O * W);
      switch (oe) {
        case qe.MITER:
          {
            if (It) {
              p.push(_t, Kt, _t, Kt);
            } else {
              p.push(Dt, qt, Dt, qt);
            }
            f += 2;
            break;
          }
        case qe.ROUND:
          {
            if (It) {
              f += xi(S, P, S + d * W, P + O * W, S + N * W, P + z * W, p, true) + 2;
            } else {
              f += xi(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, false) + 2;
            }
            break;
          }
      }
      p.push(S - N * B, P - z * B, S + N * W, P + z * W);
      f += 2;
    }
  }
  E = r[(g - 2) * 2];
  I = r[(g - 2) * 2 + 1];
  S = r[(g - 1) * 2];
  P = r[(g - 1) * 2 + 1];
  d = -(I - P);
  O = E - S;
  J = Math.sqrt(d * d + O * O);
  d /= J;
  O /= J;
  d *= _;
  O *= _;
  p.push(S - d * B, P - O * B, S + d * W, P + O * W);
  if (!l) {
    if (s.cap === oi.ROUND) {
      f += xi(S - d * (B - W) * 0.5, P - O * (B - W) * 0.5, S - d * B, P - O * B, S + d * W, P + O * W, p, false) + 2;
    } else if (s.cap === oi.SQUARE) {
      f += Fc(S, P, d, O, B, W, false, p);
    }
  }
  const tt = t.indices;
  const at = vn.epsilon * vn.epsilon;
  for (let nt = v; nt < f + v - 2; ++nt) {
    E = p[nt * 2];
    I = p[nt * 2 + 1];
    S = p[(nt + 1) * 2];
    P = p[(nt + 1) * 2 + 1];
    k = p[(nt + 2) * 2];
    V = p[(nt + 2) * 2 + 1];
    if (!(Math.abs(E * (P - V) + S * (V - I) + k * (I - P)) < at)) {
      tt.push(nt, nt + 1, nt + 2);
    }
  }
}
function Cb(i, t) {
  let e = 0;
  const r = i.shape;
  const n = i.points || r.points;
  const s = r.type !== Zt.POLY || r.closeStroke;
  if (n.length === 0) {
    return;
  }
  const a = t.points;
  const o = t.indices;
  const l = n.length / 2;
  const c = a.length / 2;
  let p = c;
  a.push(n[0], n[1]);
  e = 1;
  for (; e < l; e++) {
    a.push(n[e * 2], n[e * 2 + 1]);
    o.push(p, p + 1);
    p++;
  }
  if (s) {
    o.push(p, c);
  }
}
function Oc(i, t) {
  if (i.lineStyle.native) {
    Cb(i, t);
  } else {
    Sb(i, t);
  }
}
class Rl {
  static curveLength(t, e, r, n, s, a) {
    const o = t - r * 2 + s;
    const l = e - n * 2 + a;
    const c = r * 2 - t * 2;
    const p = n * 2 - e * 2;
    const g = (o * o + l * l) * 4;
    const f = (o * c + l * p) * 4;
    const v = c * c + p * p;
    const _ = Math.sqrt(g + f + v) * 2;
    const T = Math.sqrt(g);
    const A = g * 2 * T;
    const E = Math.sqrt(v) * 2;
    const I = f / T;
    return (A * _ + T * f * (_ - E) + (v * 4 * g - f * f) * Math.log((T * 2 + I + _) / (I + E))) / (A * 4);
  }
  static curveTo(t, e, r, n, s) {
    const a = s[s.length - 2];
    const o = s[s.length - 1];
    const l = vn._segmentsCount(Rl.curveLength(a, o, t, e, r, n));
    let c = 0;
    let p = 0;
    for (let g = 1; g <= l; ++g) {
      const f = g / l;
      c = a + (t - a) * f;
      p = o + (e - o) * f;
      s.push(c + (t + (r - t) * f - c) * f, p + (e + (n - e) * f - p) * f);
    }
  }
}
const ih = {
  [Zt.POLY]: kf,
  [Zt.CIRC]: wa,
  [Zt.ELIP]: wa,
  [Zt.RECT]: wb,
  [Zt.RREC]: Eb
};
const Nc = [];
const zs = [];
class Ea {
  constructor(t, e = null, r = null, n = null) {
    this.points = [];
    this.holes = [];
    this.shape = t;
    this.lineStyle = r;
    this.fillStyle = e;
    this.matrix = n;
    this.type = t.type;
  }
  clone() {
    return new Ea(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    this.shape = null;
    this.holes.length = 0;
    this.holes = null;
    this.points.length = 0;
    this.points = null;
    this.lineStyle = null;
    this.fillStyle = null;
  }
}
const Yi = new Bt();
const Uf = class Gf extends Nd {
  constructor() {
    super();
    this.closePointEps = 0.0001;
    this.boundsPadding = 0;
    this.uvsFloat32 = null;
    this.indicesUint16 = null;
    this.batchable = false;
    this.points = [];
    this.colors = [];
    this.uvs = [];
    this.indices = [];
    this.textureIds = [];
    this.graphicsData = [];
    this.drawCalls = [];
    this.batchDirty = -1;
    this.batches = [];
    this.dirty = 0;
    this.cacheDirty = -1;
    this.clearDirty = 0;
    this.shapeIndex = 0;
    this._bounds = new _a();
    this.boundsDirty = -1;
  }
  get bounds() {
    this.updateBatches();
    if (this.boundsDirty !== this.dirty) {
      this.boundsDirty = this.dirty;
      this.calculateBounds();
    }
    return this._bounds;
  }
  invalidate() {
    this.boundsDirty = -1;
    this.dirty++;
    this.batchDirty++;
    this.shapeIndex = 0;
    this.points.length = 0;
    this.colors.length = 0;
    this.uvs.length = 0;
    this.indices.length = 0;
    this.textureIds.length = 0;
    for (let t = 0; t < this.drawCalls.length; t++) {
      this.drawCalls[t].texArray.clear();
      zs.push(this.drawCalls[t]);
    }
    this.drawCalls.length = 0;
    for (let t = 0; t < this.batches.length; t++) {
      const e = this.batches[t];
      e.reset();
      Nc.push(e);
    }
    this.batches.length = 0;
  }
  clear() {
    if (this.graphicsData.length > 0) {
      this.invalidate();
      this.clearDirty++;
      this.graphicsData.length = 0;
    }
    return this;
  }
  drawShape(t, e = null, r = null, n = null) {
    const s = new Ea(t, e, r, n);
    this.graphicsData.push(s);
    this.dirty++;
    return this;
  }
  drawHole(t, e = null) {
    if (!this.graphicsData.length) {
      return null;
    }
    const r = new Ea(t, null, null, e);
    const n = this.graphicsData[this.graphicsData.length - 1];
    r.lineStyle = n.lineStyle;
    n.holes.push(r);
    this.dirty++;
    return this;
  }
  destroy() {
    super.destroy();
    for (let t = 0; t < this.graphicsData.length; ++t) {
      this.graphicsData[t].destroy();
    }
    this.points.length = 0;
    this.points = null;
    this.colors.length = 0;
    this.colors = null;
    this.uvs.length = 0;
    this.uvs = null;
    this.indices.length = 0;
    this.indices = null;
    this.indexBuffer.destroy();
    this.indexBuffer = null;
    this.graphicsData.length = 0;
    this.graphicsData = null;
    this.drawCalls.length = 0;
    this.drawCalls = null;
    this.batches.length = 0;
    this.batches = null;
    this._bounds = null;
  }
  containsPoint(t) {
    const e = this.graphicsData;
    for (let r = 0; r < e.length; ++r) {
      const n = e[r];
      if (n.fillStyle.visible && n.shape && (n.matrix ? n.matrix.applyInverse(t, Yi) : Yi.copyFrom(t), n.shape.contains(Yi.x, Yi.y))) {
        let s = false;
        if (n.holes) {
          for (let a = 0; a < n.holes.length; a++) {
            if (n.holes[a].shape.contains(Yi.x, Yi.y)) {
              s = true;
              break;
            }
          }
        }
        if (!s) {
          return true;
        }
      }
    }
    return false;
  }
  updateBatches() {
    if (!this.graphicsData.length) {
      this.batchable = true;
      return;
    }
    if (!this.validateBatching()) {
      return;
    }
    this.cacheDirty = this.dirty;
    const t = this.uvs;
    const e = this.graphicsData;
    let r = null;
    let n = null;
    if (this.batches.length > 0) {
      r = this.batches[this.batches.length - 1];
      n = r.style;
    }
    for (let l = this.shapeIndex; l < e.length; l++) {
      this.shapeIndex++;
      const c = e[l];
      const p = c.fillStyle;
      const g = c.lineStyle;
      ih[c.type].build(c);
      if (c.matrix) {
        this.transformPoints(c.points, c.matrix);
      }
      if (p.visible || g.visible) {
        this.processHoles(c.holes);
      }
      for (let f = 0; f < 2; f++) {
        const v = f === 0 ? p : g;
        if (!v.visible) {
          continue;
        }
        const _ = v.texture.baseTexture;
        const T = this.indices.length;
        const A = this.points.length / 2;
        _.wrapMode = Yr.REPEAT;
        if (f === 0) {
          this.processFill(c);
        } else {
          this.processLine(c);
        }
        const E = this.points.length / 2 - A;
        if (E !== 0) {
          if (r && !this._compareStyles(n, v)) {
            r.end(T, A);
            r = null;
          }
          if (!r) {
            r = Nc.pop() || new Ab();
            r.begin(v, T, A);
            this.batches.push(r);
            n = v;
          }
          this.addUvs(this.points, t, v.texture, A, E, v.matrix);
        }
      }
    }
    const s = this.indices.length;
    const a = this.points.length / 2;
    if (r) {
      r.end(s, a);
    }
    if (this.batches.length === 0) {
      this.batchable = true;
      return;
    }
    const o = a > 65535;
    if (this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2) {
      this.indicesUint16.set(this.indices);
    } else {
      this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
    }
    this.batchable = this.isBatchable();
    if (this.batchable) {
      this.packBatches();
    } else {
      this.buildDrawCalls();
    }
  }
  _compareStyles(t, e) {
    return !!t && !!e && t.texture.baseTexture === e.texture.baseTexture && t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native;
  }
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
      return false;
    }
    for (let t = 0, e = this.graphicsData.length; t < e; t++) {
      const r = this.graphicsData[t];
      const n = r.fillStyle;
      const s = r.lineStyle;
      if (n && !n.texture.baseTexture.valid || s && !s.texture.baseTexture.valid) {
        return false;
      }
    }
    return true;
  }
  packBatches() {
    this.batchDirty++;
    this.uvsFloat32 = new Float32Array(this.uvs);
    const t = this.batches;
    for (let e = 0, r = t.length; e < r; e++) {
      const n = t[e];
      for (let s = 0; s < n.size; s++) {
        const a = n.start + s;
        this.indicesUint16[a] = this.indicesUint16[a] - n.attribStart;
      }
    }
  }
  isBatchable() {
    if (this.points.length > 131070) {
      return false;
    }
    const t = this.batches;
    for (let e = 0; e < t.length; e++) {
      if (t[e].style.native) {
        return false;
      }
    }
    return this.points.length < Gf.BATCHABLE_SIZE * 2;
  }
  buildDrawCalls() {
    let t = ++Tt._globalBatch;
    for (let g = 0; g < this.drawCalls.length; g++) {
      this.drawCalls[g].texArray.clear();
      zs.push(this.drawCalls[g]);
    }
    this.drawCalls.length = 0;
    const e = this.colors;
    const r = this.textureIds;
    let n = zs.pop();
    if (!n) {
      n = new Oh();
      n.texArray = new Uh();
    }
    n.texArray.count = 0;
    n.start = 0;
    n.size = 0;
    n.type = or.TRIANGLES;
    let s = 0;
    let a = null;
    let o = 0;
    let l = false;
    let c = or.TRIANGLES;
    let p = 0;
    this.drawCalls.push(n);
    for (let g = 0; g < this.batches.length; g++) {
      const f = this.batches[g];
      const v = 8;
      const _ = f.style;
      const T = _.texture.baseTexture;
      if (l !== !!_.native) {
        l = !!_.native;
        c = l ? or.LINES : or.TRIANGLES;
        a = null;
        s = v;
        t++;
      }
      if (a !== T) {
        a = T;
        if (T._batchEnabled !== t) {
          if (s === v) {
            t++;
            s = 0;
            if (n.size > 0) {
              n = zs.pop();
              if (!n) {
                n = new Oh();
                n.texArray = new Uh();
              }
              this.drawCalls.push(n);
            }
            n.start = p;
            n.size = 0;
            n.texArray.count = 0;
            n.type = c;
          }
          T.touched = 1;
          T._batchEnabled = t;
          T._batchLocation = s;
          T.wrapMode = Yr.REPEAT;
          n.texArray.elements[n.texArray.count++] = T;
          s++;
        }
      }
      n.size += f.size;
      p += f.size;
      o = T._batchLocation;
      this.addColors(e, _.color, _.alpha, f.attribSize, f.attribStart);
      this.addTextureIds(r, o, f.attribSize, f.attribStart);
    }
    Tt._globalBatch = t;
    this.packAttributes();
  }
  packAttributes() {
    const t = this.points;
    const e = this.uvs;
    const r = this.colors;
    const n = this.textureIds;
    const s = new ArrayBuffer(t.length * 3 * 4);
    const a = new Float32Array(s);
    const o = new Uint32Array(s);
    let l = 0;
    for (let c = 0; c < t.length / 2; c++) {
      a[l++] = t[c * 2];
      a[l++] = t[c * 2 + 1];
      a[l++] = e[c * 2];
      a[l++] = e[c * 2 + 1];
      o[l++] = r[c];
      a[l++] = n[c];
    }
    this._buffer.update(s);
    this._indexBuffer.update(this.indicesUint16);
  }
  processFill(t) {
    if (t.holes.length) {
      kf.triangulate(t, this);
    } else {
      ih[t.type].triangulate(t, this);
    }
  }
  processLine(t) {
    Oc(t, this);
    for (let e = 0; e < t.holes.length; e++) {
      Oc(t.holes[e], this);
    }
  }
  processHoles(t) {
    for (let e = 0; e < t.length; e++) {
      const r = t[e];
      ih[r.type].build(r);
      if (r.matrix) {
        this.transformPoints(r.points, r.matrix);
      }
    }
  }
  calculateBounds() {
    const t = this._bounds;
    t.clear();
    t.addVertexData(this.points, 0, this.points.length);
    t.pad(this.boundsPadding, this.boundsPadding);
  }
  transformPoints(t, e) {
    for (let r = 0; r < t.length / 2; r++) {
      const n = t[r * 2];
      const s = t[r * 2 + 1];
      t[r * 2] = e.a * n + e.c * s + e.tx;
      t[r * 2 + 1] = e.b * n + e.d * s + e.ty;
    }
  }
  addColors(t, e, r, n, s = 0) {
    const a = Pt.shared.setValue(e).toLittleEndianNumber();
    const o = Pt.shared.setValue(a).toPremultiplied(r);
    t.length = Math.max(t.length, s + n);
    for (let l = 0; l < n; l++) {
      t[s + l] = o;
    }
  }
  addTextureIds(t, e, r, n = 0) {
    t.length = Math.max(t.length, n + r);
    for (let s = 0; s < r; s++) {
      t[n + s] = e;
    }
  }
  addUvs(t, e, r, n, s, a = null) {
    let o = 0;
    const l = e.length;
    const c = r.frame;
    while (o < s) {
      let g = t[(n + o) * 2];
      let f = t[(n + o) * 2 + 1];
      if (a) {
        const v = a.a * g + a.c * f + a.tx;
        f = a.b * g + a.d * f + a.ty;
        g = v;
      }
      o++;
      e.push(g / c.width, f / c.height);
    }
    const p = r.baseTexture;
    if (c.width < p.width || c.height < p.height) {
      this.adjustUvs(e, r, l, s);
    }
  }
  adjustUvs(t, e, r, n) {
    const s = e.baseTexture;
    const a = 0.000001;
    const o = r + n * 2;
    const l = e.frame;
    const c = l.width / s.width;
    const p = l.height / s.height;
    let g = l.x / l.width;
    let f = l.y / l.height;
    let v = Math.floor(t[r] + a);
    let _ = Math.floor(t[r + 1] + a);
    for (let T = r + 2; T < o; T += 2) {
      v = Math.min(v, Math.floor(t[T] + a));
      _ = Math.min(_, Math.floor(t[T + 1] + a));
    }
    g -= v;
    f -= _;
    for (let T = r; T < o; T += 2) {
      t[T] = (t[T] + g) * c;
      t[T + 1] = (t[T + 1] + f) * p;
    }
  }
};
Uf.BATCHABLE_SIZE = 100;
let Ib = Uf;
class za {
  constructor() {
    this.color = 16777215;
    this.alpha = 1;
    this.texture = ut.WHITE;
    this.matrix = null;
    this.visible = false;
    this.reset();
  }
  clone() {
    const t = new za();
    t.color = this.color;
    t.alpha = this.alpha;
    t.texture = this.texture;
    t.matrix = this.matrix;
    t.visible = this.visible;
    return t;
  }
  reset() {
    this.color = 16777215;
    this.alpha = 1;
    this.texture = ut.WHITE;
    this.matrix = null;
    this.visible = false;
  }
  destroy() {
    this.texture = null;
    this.matrix = null;
  }
}
class Pl extends za {
  constructor() {
    super(...arguments);
    this.width = 0;
    this.alignment = 0.5;
    this.native = false;
    this.cap = oi.BUTT;
    this.join = qe.MITER;
    this.miterLimit = 10;
  }
  clone() {
    const t = new Pl();
    t.color = this.color;
    t.alpha = this.alpha;
    t.texture = this.texture;
    t.matrix = this.matrix;
    t.visible = this.visible;
    t.width = this.width;
    t.alignment = this.alignment;
    t.native = this.native;
    t.cap = this.cap;
    t.join = this.join;
    t.miterLimit = this.miterLimit;
    return t;
  }
  reset() {
    super.reset();
    this.color = 0;
    this.alignment = 0.5;
    this.width = 0;
    this.native = false;
    this.cap = oi.BUTT;
    this.join = qe.MITER;
    this.miterLimit = 10;
  }
}
const nh = {};
const al = class sa extends Ue {
  constructor(t = null) {
    super();
    this.shader = null;
    this.pluginName = "batch";
    this.currentPath = null;
    this.batches = [];
    this.batchTint = -1;
    this.batchDirty = -1;
    this.vertexData = null;
    this._fillStyle = new za();
    this._lineStyle = new Pl();
    this._matrix = null;
    this._holeMode = false;
    this.state = Nr.for2d();
    this._geometry = t || new Ib();
    this._geometry.refCount++;
    this._transformID = -1;
    this._tintColor = new Pt(16777215);
    this.blendMode = q.NORMAL;
  }
  get geometry() {
    return this._geometry;
  }
  clone() {
    this.finishPoly();
    return new sa(this._geometry);
  }
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t);
  }
  get fill() {
    return this._fillStyle;
  }
  get line() {
    return this._lineStyle;
  }
  lineStyle(t = null, e = 0, r, n = 0.5, s = false) {
    if (typeof t == "number") {
      t = {
        width: t,
        color: e,
        alpha: r,
        alignment: n,
        native: s
      };
    }
    return this.lineTextureStyle(t);
  }
  lineTextureStyle(t) {
    const e = {
      width: 0,
      texture: ut.WHITE,
      color: t != null && t.texture ? 16777215 : 0,
      matrix: null,
      alignment: 0.5,
      native: false,
      cap: oi.BUTT,
      join: qe.MITER,
      miterLimit: 10
    };
    t = Object.assign(e, t);
    this.normalizeColor(t);
    if (this.currentPath) {
      this.startPoly();
    }
    const r = t.width > 0 && t.alpha > 0;
    if (r) {
      if (t.matrix) {
        t.matrix = t.matrix.clone();
        t.matrix.invert();
      }
      Object.assign(this._lineStyle, {
        visible: r
      }, t);
    } else {
      this._lineStyle.reset();
    }
    return this;
  }
  startPoly() {
    if (this.currentPath) {
      const t = this.currentPath.points;
      const e = this.currentPath.points.length;
      if (e > 2) {
        this.drawShape(this.currentPath);
        this.currentPath = new Mi();
        this.currentPath.closeStroke = false;
        this.currentPath.points.push(t[e - 2], t[e - 1]);
      }
    } else {
      this.currentPath = new Mi();
      this.currentPath.closeStroke = false;
    }
  }
  finishPoly() {
    if (this.currentPath) {
      if (this.currentPath.points.length > 2) {
        this.drawShape(this.currentPath);
        this.currentPath = null;
      } else {
        this.currentPath.points.length = 0;
      }
    }
  }
  moveTo(t, e) {
    this.startPoly();
    this.currentPath.points[0] = t;
    this.currentPath.points[1] = e;
    return this;
  }
  lineTo(t, e) {
    if (!this.currentPath) {
      this.moveTo(0, 0);
    }
    const r = this.currentPath.points;
    const n = r[r.length - 2];
    const s = r[r.length - 1];
    if (n !== t || s !== e) {
      r.push(t, e);
    }
    return this;
  }
  _initCurve(t = 0, e = 0) {
    if (this.currentPath) {
      if (this.currentPath.points.length === 0) {
        this.currentPath.points = [t, e];
      }
    } else {
      this.moveTo(t, e);
    }
  }
  quadraticCurveTo(t, e, r, n) {
    this._initCurve();
    const s = this.currentPath.points;
    if (s.length === 0) {
      this.moveTo(0, 0);
    }
    Rl.curveTo(t, e, r, n, s);
    return this;
  }
  bezierCurveTo(t, e, r, n, s, a) {
    this._initCurve();
    Il.curveTo(t, e, r, n, s, a, this.currentPath.points);
    return this;
  }
  arcTo(t, e, r, n, s) {
    this._initCurve(t, e);
    const a = this.currentPath.points;
    const o = Bc.curveTo(t, e, r, n, s, a);
    if (o) {
      const {
        cx: l,
        cy: c,
        radius: p,
        startAngle: g,
        endAngle: f,
        anticlockwise: v
      } = o;
      this.arc(l, c, p, g, f, v);
    }
    return this;
  }
  arc(t, e, r, n, s, a = false) {
    if (n === s) {
      return this;
    }
    if (!a && s <= n) {
      s += pa;
    } else if (a && n <= s) {
      n += pa;
    }
    if (s - n === 0) {
      return this;
    }
    const o = t + Math.cos(n) * r;
    const l = e + Math.sin(n) * r;
    const c = this._geometry.closePointEps;
    let p = this.currentPath ? this.currentPath.points : null;
    if (p) {
      const g = Math.abs(p[p.length - 2] - o);
      const f = Math.abs(p[p.length - 1] - l);
      if (!(g < c) || !(f < c)) {
        p.push(o, l);
      }
    } else {
      this.moveTo(o, l);
      p = this.currentPath.points;
    }
    Bc.arc(o, l, t, e, r, n, s, a, p);
    return this;
  }
  beginFill(t = 0, e) {
    return this.beginTextureFill({
      texture: ut.WHITE,
      color: t,
      alpha: e
    });
  }
  normalizeColor(t) {
    const e = Pt.shared.setValue(t.color ?? 0);
    t.color = e.toNumber();
    t.alpha ??= e.alpha;
  }
  beginTextureFill(t) {
    const e = {
      texture: ut.WHITE,
      color: 16777215,
      matrix: null
    };
    t = Object.assign(e, t);
    this.normalizeColor(t);
    if (this.currentPath) {
      this.startPoly();
    }
    const r = t.alpha > 0;
    if (r) {
      if (t.matrix) {
        t.matrix = t.matrix.clone();
        t.matrix.invert();
      }
      Object.assign(this._fillStyle, {
        visible: r
      }, t);
    } else {
      this._fillStyle.reset();
    }
    return this;
  }
  endFill() {
    this.finishPoly();
    this._fillStyle.reset();
    return this;
  }
  drawRect(t, e, r, n) {
    return this.drawShape(new At(t, e, r, n));
  }
  drawRoundedRect(t, e, r, n, s) {
    return this.drawShape(new Ha(t, e, r, n, s));
  }
  drawCircle(t, e, r) {
    return this.drawShape(new Ua(t, e, r));
  }
  drawEllipse(t, e, r, n) {
    return this.drawShape(new Ga(t, e, r, n));
  }
  drawPolygon(...t) {
    let e;
    let r = true;
    const n = t[0];
    if (n.points) {
      r = n.closeStroke;
      e = n.points;
    } else if (Array.isArray(t[0])) {
      e = t[0];
    } else {
      e = t;
    }
    const s = new Mi(e);
    s.closeStroke = r;
    this.drawShape(s);
    return this;
  }
  drawShape(t) {
    if (this._holeMode) {
      this._geometry.drawHole(t, this._matrix);
    } else {
      this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix);
    }
    return this;
  }
  clear() {
    this._geometry.clear();
    this._lineStyle.reset();
    this._fillStyle.reset();
    this._boundsID++;
    this._matrix = null;
    this._holeMode = false;
    this.currentPath = null;
    return this;
  }
  isFastRect() {
    const t = this._geometry.graphicsData;
    return t.length === 1 && t[0].shape.type === Zt.RECT && !t[0].matrix && !t[0].holes.length && (!t[0].lineStyle.visible || !t[0].lineStyle.width);
  }
  _render(t) {
    this.finishPoly();
    const e = this._geometry;
    e.updateBatches();
    if (e.batchable) {
      if (this.batchDirty !== e.batchDirty) {
        this._populateBatches();
      }
      this._renderBatched(t);
    } else {
      t.batch.flush();
      this._renderDirect(t);
    }
  }
  _populateBatches() {
    const t = this._geometry;
    const e = this.blendMode;
    const r = t.batches.length;
    this.batchTint = -1;
    this._transformID = -1;
    this.batchDirty = t.batchDirty;
    this.batches.length = r;
    this.vertexData = new Float32Array(t.points);
    for (let n = 0; n < r; n++) {
      const s = t.batches[n];
      const a = s.style.color;
      const o = new Float32Array(this.vertexData.buffer, s.attribStart * 4 * 2, s.attribSize * 2);
      const l = new Float32Array(t.uvsFloat32.buffer, s.attribStart * 4 * 2, s.attribSize * 2);
      const c = new Uint16Array(t.indicesUint16.buffer, s.start * 2, s.size);
      const p = {
        vertexData: o,
        blendMode: e,
        indices: c,
        uvs: l,
        _batchRGB: Pt.shared.setValue(a).toRgbArray(),
        _tintRGB: a,
        _texture: s.style.texture,
        alpha: s.style.alpha,
        worldAlpha: 1
      };
      this.batches[n] = p;
    }
  }
  _renderBatched(t) {
    if (this.batches.length) {
      t.batch.setObjectRenderer(t.plugins[this.pluginName]);
      this.calculateVertices();
      this.calculateTints();
      for (let e = 0, r = this.batches.length; e < r; e++) {
        const n = this.batches[e];
        n.worldAlpha = this.worldAlpha * n.alpha;
        t.plugins[this.pluginName].render(n);
      }
    }
  }
  _renderDirect(t) {
    const e = this._resolveDirectShader(t);
    const r = this._geometry;
    const n = this.worldAlpha;
    const s = e.uniforms;
    const a = r.drawCalls;
    s.translationMatrix = this.transform.worldTransform;
    Pt.shared.setValue(this._tintColor).premultiply(n).toArray(s.tint);
    t.shader.bind(e);
    t.geometry.bind(r, e);
    t.state.set(this.state);
    for (let o = 0, l = a.length; o < l; o++) {
      this._renderDrawCallDirect(t, r.drawCalls[o]);
    }
  }
  _renderDrawCallDirect(t, e) {
    const {
      texArray: r,
      type: n,
      size: s,
      start: a
    } = e;
    const o = r.count;
    for (let l = 0; l < o; l++) {
      t.texture.bind(r.elements[l], l);
    }
    t.geometry.draw(n, s, a);
  }
  _resolveDirectShader(t) {
    let e = this.shader;
    const r = this.pluginName;
    if (!e) {
      if (!nh[r]) {
        const {
          maxTextures: n
        } = t.plugins[r];
        const s = new Int32Array(n);
        for (let l = 0; l < n; l++) {
          s[l] = l;
        }
        const a = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new jt(),
          default: cr.from({
            uSamplers: s
          }, true)
        };
        const o = t.plugins[r]._shader.program;
        nh[r] = new Dr(o, a);
      }
      e = nh[r];
    }
    return e;
  }
  _calculateBounds() {
    this.finishPoly();
    const t = this._geometry;
    if (!t.graphicsData.length) {
      return;
    }
    const {
      minX: e,
      minY: r,
      maxX: n,
      maxY: s
    } = t.bounds;
    this._bounds.addFrame(this.transform, e, r, n, s);
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, sa._TEMP_POINT);
    return this._geometry.containsPoint(sa._TEMP_POINT);
  }
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this._tintColor.toNumber();
      for (let t = 0; t < this.batches.length; t++) {
        const e = this.batches[t];
        e._tintRGB = Pt.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber();
      }
    }
  }
  calculateVertices() {
    const t = this.transform._worldID;
    if (this._transformID === t) {
      return;
    }
    this._transformID = t;
    const e = this.transform.worldTransform;
    const r = e.a;
    const n = e.b;
    const s = e.c;
    const a = e.d;
    const o = e.tx;
    const l = e.ty;
    const c = this._geometry.points;
    const p = this.vertexData;
    let g = 0;
    for (let f = 0; f < c.length; f += 2) {
      const v = c[f];
      const _ = c[f + 1];
      p[g++] = r * v + s * _ + o;
      p[g++] = a * _ + n * v + l;
    }
  }
  closePath() {
    const t = this.currentPath;
    if (t) {
      t.closeStroke = true;
      this.finishPoly();
    }
    return this;
  }
  setMatrix(t) {
    this._matrix = t;
    return this;
  }
  beginHole() {
    this.finishPoly();
    this._holeMode = true;
    return this;
  }
  endHole() {
    this.finishPoly();
    this._holeMode = false;
    return this;
  }
  destroy(t) {
    this._geometry.refCount--;
    if (this._geometry.refCount === 0) {
      this._geometry.dispose();
    }
    this._matrix = null;
    this.currentPath = null;
    this._lineStyle.destroy();
    this._lineStyle = null;
    this._fillStyle.destroy();
    this._fillStyle = null;
    this._geometry = null;
    this.shader = null;
    this.vertexData = null;
    this.batches.length = 0;
    this.batches = null;
    super.destroy(t);
  }
};
al.curves = vn;
al._TEMP_POINT = new Bt();
let fs = al;
class Rb {
  constructor(t, e) {
    this.uvBuffer = t;
    this.uvMatrix = e;
    this.data = null;
    this._bufferUpdateId = -1;
    this._textureUpdateId = -1;
    this._updateID = 0;
  }
  update(t) {
    if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) {
      return;
    }
    this._bufferUpdateId = this.uvBuffer._updateID;
    this._textureUpdateId = this.uvMatrix._updateID;
    const e = this.uvBuffer.data;
    if (!this.data || this.data.length !== e.length) {
      this.data = new Float32Array(e.length);
    }
    this.uvMatrix.multiplyUvs(e, this.data);
    this._updateID++;
  }
}
const sh = new Bt();
const Lc = new Mi();
const Hf = class $f extends Ue {
  constructor(t, e, r, n = or.TRIANGLES) {
    super();
    this.geometry = t;
    this.shader = e;
    this.state = r || Nr.for2d();
    this.drawMode = n;
    this.start = 0;
    this.size = 0;
    this.uvs = null;
    this.indices = null;
    this.vertexData = new Float32Array(1);
    this.vertexDirty = -1;
    this._transformID = -1;
    this._roundPixels = st.ROUND_PIXELS;
    this.batchUvs = null;
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(t) {
    if (this._geometry !== t) {
      if (this._geometry) {
        this._geometry.refCount--;
        if (this._geometry.refCount === 0) {
          this._geometry.dispose();
        }
      }
      this._geometry = t;
      if (this._geometry) {
        this._geometry.refCount++;
      }
      this.vertexDirty = -1;
    }
  }
  get uvBuffer() {
    return this.geometry.buffers[1];
  }
  get verticesBuffer() {
    return this.geometry.buffers[0];
  }
  set material(t) {
    this.shader = t;
  }
  get material() {
    return this.shader;
  }
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set roundPixels(t) {
    if (this._roundPixels !== t) {
      this._transformID = -1;
    }
    this._roundPixels = t;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get tint() {
    if ("tint" in this.shader) {
      return this.shader.tint;
    } else {
      return null;
    }
  }
  set tint(t) {
    this.shader.tint = t;
  }
  get tintValue() {
    return this.shader.tintValue;
  }
  get texture() {
    if ("texture" in this.shader) {
      return this.shader.texture;
    } else {
      return null;
    }
  }
  set texture(t) {
    this.shader.texture = t;
  }
  _render(t) {
    const e = this.geometry.buffers[0].data;
    if (this.shader.batchable && this.drawMode === or.TRIANGLES && e.length < $f.BATCHABLE_SIZE * 2) {
      this._renderToBatch(t);
    } else {
      this._renderDefault(t);
    }
  }
  _renderDefault(t) {
    const e = this.shader;
    e.alpha = this.worldAlpha;
    if (e.update) {
      e.update();
    }
    t.batch.flush();
    e.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);
    t.shader.bind(e);
    t.state.set(this.state);
    t.geometry.bind(this.geometry, e);
    t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
  }
  _renderToBatch(t) {
    const e = this.geometry;
    const r = this.shader;
    if (r.uvMatrix) {
      r.uvMatrix.update();
      this.calculateUvs();
    }
    this.calculateVertices();
    this.indices = e.indexBuffer.data;
    this._tintRGB = r._tintRGB;
    this._texture = r.texture;
    const n = this.material.pluginName;
    t.batch.setObjectRenderer(t.plugins[n]);
    t.plugins[n].render(this);
  }
  calculateVertices() {
    const t = this.geometry.buffers[0];
    const e = t.data;
    const r = t._updateID;
    if (r === this.vertexDirty && this._transformID === this.transform._worldID) {
      return;
    }
    this._transformID = this.transform._worldID;
    if (this.vertexData.length !== e.length) {
      this.vertexData = new Float32Array(e.length);
    }
    const n = this.transform.worldTransform;
    const s = n.a;
    const a = n.b;
    const o = n.c;
    const l = n.d;
    const c = n.tx;
    const p = n.ty;
    const g = this.vertexData;
    for (let f = 0; f < g.length / 2; f++) {
      const v = e[f * 2];
      const _ = e[f * 2 + 1];
      g[f * 2] = s * v + o * _ + c;
      g[f * 2 + 1] = a * v + l * _ + p;
    }
    if (this._roundPixels) {
      const f = st.RESOLUTION;
      for (let v = 0; v < g.length; ++v) {
        g[v] = Math.round(g[v] * f) / f;
      }
    }
    this.vertexDirty = r;
  }
  calculateUvs() {
    const t = this.geometry.buffers[1];
    const e = this.shader;
    if (e.uvMatrix.isSimple) {
      this.uvs = t.data;
    } else {
      this.batchUvs ||= new Rb(t, e.uvMatrix);
      this.batchUvs.update();
      this.uvs = this.batchUvs.data;
    }
  }
  _calculateBounds() {
    this.calculateVertices();
    this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  containsPoint(t) {
    if (!this.getBounds().contains(t.x, t.y)) {
      return false;
    }
    this.worldTransform.applyInverse(t, sh);
    const e = this.geometry.getBuffer("aVertexPosition").data;
    const r = Lc.points;
    const n = this.geometry.getIndex().data;
    const s = n.length;
    const a = this.drawMode === 4 ? 3 : 1;
    for (let o = 0; o + 2 < s; o += a) {
      const l = n[o] * 2;
      const c = n[o + 1] * 2;
      const p = n[o + 2] * 2;
      r[0] = e[l];
      r[1] = e[l + 1];
      r[2] = e[c];
      r[3] = e[c + 1];
      r[4] = e[p];
      r[5] = e[p + 1];
      if (Lc.contains(sh.x, sh.y)) {
        return true;
      }
    }
    return false;
  }
  destroy(t) {
    super.destroy(t);
    if (this._cachedTexture) {
      this._cachedTexture.destroy();
      this._cachedTexture = null;
    }
    this.geometry = null;
    this.shader = null;
    this.state = null;
    this.uvs = null;
    this.indices = null;
    this.vertexData = null;
  }
};
Hf.BATCHABLE_SIZE = 100;
let Be = Hf;
class qa extends li {
  constructor(t, e, r) {
    super();
    const n = new pe(t);
    const s = new pe(e, true);
    const a = new pe(r, true, true);
    this.addAttribute("aVertexPosition", n, 2, false, mt.FLOAT).addAttribute("aTextureCoord", s, 2, false, mt.FLOAT).addIndex(a);
    this._updateId = -1;
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var Pb = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`;
var Mb = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class _n extends Dr {
  constructor(t, e) {
    const r = {
      uSampler: t,
      alpha: 1,
      uTextureMatrix: jt.IDENTITY,
      uColor: new Float32Array([1, 1, 1, 1])
    };
    e = Object.assign({
      tint: 16777215,
      alpha: 1,
      pluginName: "batch"
    }, e);
    if (e.uniforms) {
      Object.assign(r, e.uniforms);
    }
    super(e.program || qr.from(Mb, Pb), r);
    this._colorDirty = false;
    this.uvMatrix = new wl(t);
    this.batchable = e.program === undefined;
    this.pluginName = e.pluginName;
    this._tintColor = new Pt(e.tint);
    this._tintRGB = this._tintColor.toLittleEndianNumber();
    this._colorDirty = true;
    this.alpha = e.alpha;
  }
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(t) {
    if (this.uniforms.uSampler !== t) {
      if (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode) {
        this._colorDirty = true;
      }
      this.uniforms.uSampler = t;
      this.uvMatrix.texture = t;
    }
  }
  set alpha(t) {
    if (t !== this._alpha) {
      this._alpha = t;
      this._colorDirty = true;
    }
  }
  get alpha() {
    return this._alpha;
  }
  set tint(t) {
    if (t !== this.tint) {
      this._tintColor.setValue(t);
      this._tintRGB = this._tintColor.toLittleEndianNumber();
      this._colorDirty = true;
    }
  }
  get tint() {
    return this._tintColor.value;
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  update() {
    if (this._colorDirty) {
      this._colorDirty = false;
      const t = this.texture.baseTexture.alphaMode;
      Pt.shared.setValue(this._tintColor).premultiply(this._alpha, t).toArray(this.uniforms.uColor);
    }
    if (this.uvMatrix.update()) {
      this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord;
    }
  }
}
class Db extends qa {
  constructor(t = 100, e = 100, r = 10, n = 10) {
    super();
    this.segWidth = r;
    this.segHeight = n;
    this.width = t;
    this.height = e;
    this.build();
  }
  build() {
    const t = this.segWidth * this.segHeight;
    const e = [];
    const r = [];
    const n = [];
    const s = this.segWidth - 1;
    const a = this.segHeight - 1;
    const o = this.width / s;
    const l = this.height / a;
    for (let p = 0; p < t; p++) {
      const g = p % this.segWidth;
      const f = p / this.segWidth | 0;
      e.push(g * o, f * l);
      r.push(g / s, f / a);
    }
    const c = s * a;
    for (let p = 0; p < c; p++) {
      const g = p % s;
      const f = p / s | 0;
      const v = f * this.segWidth + g;
      const _ = f * this.segWidth + g + 1;
      const T = (f + 1) * this.segWidth + g;
      const A = (f + 1) * this.segWidth + g + 1;
      n.push(v, _, T, _, A, T);
    }
    this.buffers[0].data = new Float32Array(e);
    this.buffers[1].data = new Float32Array(r);
    this.indexBuffer.data = new Uint16Array(n);
    this.buffers[0].update();
    this.buffers[1].update();
    this.indexBuffer.update();
  }
}
class Bb extends qa {
  constructor(t = 200, e, r = 0) {
    super(new Float32Array(e.length * 4), new Float32Array(e.length * 4), new Uint16Array((e.length - 1) * 6));
    this.points = e;
    this._width = t;
    this.textureScale = r;
    this.build();
  }
  get width() {
    return this._width;
  }
  build() {
    const t = this.points;
    if (!t) {
      return;
    }
    const e = this.getBuffer("aVertexPosition");
    const r = this.getBuffer("aTextureCoord");
    const n = this.getIndex();
    if (t.length < 1) {
      return;
    }
    if (e.data.length / 4 !== t.length) {
      e.data = new Float32Array(t.length * 4);
      r.data = new Float32Array(t.length * 4);
      n.data = new Uint16Array((t.length - 1) * 6);
    }
    const s = r.data;
    const a = n.data;
    s[0] = 0;
    s[1] = 0;
    s[2] = 0;
    s[3] = 1;
    let o = 0;
    let l = t[0];
    const c = this._width * this.textureScale;
    const p = t.length;
    for (let f = 0; f < p; f++) {
      const v = f * 4;
      if (this.textureScale > 0) {
        const _ = l.x - t[f].x;
        const T = l.y - t[f].y;
        const A = Math.sqrt(_ * _ + T * T);
        l = t[f];
        o += A / c;
      } else {
        o = f / (p - 1);
      }
      s[v] = o;
      s[v + 1] = 0;
      s[v + 2] = o;
      s[v + 3] = 1;
    }
    let g = 0;
    for (let f = 0; f < p - 1; f++) {
      const v = f * 2;
      a[g++] = v;
      a[g++] = v + 1;
      a[g++] = v + 2;
      a[g++] = v + 2;
      a[g++] = v + 1;
      a[g++] = v + 3;
    }
    r.update();
    n.update();
    this.updateVertices();
  }
  updateVertices() {
    const t = this.points;
    if (t.length < 1) {
      return;
    }
    let e = t[0];
    let r;
    let n = 0;
    let s = 0;
    const a = this.buffers[0].data;
    const o = t.length;
    const l = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
    for (let c = 0; c < o; c++) {
      const p = t[c];
      const g = c * 4;
      if (c < t.length - 1) {
        r = t[c + 1];
      } else {
        r = p;
      }
      s = -(r.x - e.x);
      n = r.y - e.y;
      const f = Math.sqrt(n * n + s * s);
      if (f < 0.000001) {
        n = 0;
        s = 0;
      } else {
        n /= f;
        s /= f;
        n *= l;
        s *= l;
      }
      a[g] = p.x + n;
      a[g + 1] = p.y + s;
      a[g + 2] = p.x - n;
      a[g + 3] = p.y - s;
      e = p;
    }
    this.buffers[0].update();
  }
  update() {
    if (this.textureScale > 0) {
      this.build();
    } else {
      this.updateVertices();
    }
  }
}
class Fb extends Be {
  constructor(t, e, r) {
    const n = new Db(t.width, t.height, e, r);
    const s = new _n(ut.WHITE);
    super(n, s);
    this.texture = t;
    this.autoResize = true;
  }
  textureUpdated() {
    this._textureID = this.shader.texture._updateID;
    const t = this.geometry;
    const {
      width: e,
      height: r
    } = this.shader.texture;
    if (this.autoResize && (t.width !== e || t.height !== r)) {
      t.width = this.shader.texture.width;
      t.height = this.shader.texture.height;
      t.build();
    }
  }
  set texture(t) {
    if (this.shader.texture !== t) {
      this.shader.texture = t;
      this._textureID = -1;
      if (t.baseTexture.valid) {
        this.textureUpdated();
      } else {
        t.once("update", this.textureUpdated, this);
      }
    }
  }
  get texture() {
    return this.shader.texture;
  }
  _render(t) {
    if (this._textureID !== this.shader.texture._updateID) {
      this.textureUpdated();
    }
    super._render(t);
  }
  destroy(t) {
    this.shader.texture.off("update", this.textureUpdated, this);
    super.destroy(t);
  }
}
const qs = 10;
class Ya extends Fb {
  constructor(t, e, r, n, s) {
    var a;
    var o;
    var l;
    var c;
    super(ut.WHITE, 4, 4);
    this._origWidth = t.orig.width;
    this._origHeight = t.orig.height;
    this._width = this._origWidth;
    this._height = this._origHeight;
    this._leftWidth = e ?? ((a = t.defaultBorders) == null ? undefined : a.left) ?? qs;
    this._rightWidth = n ?? ((o = t.defaultBorders) == null ? undefined : o.right) ?? qs;
    this._topHeight = r ?? ((l = t.defaultBorders) == null ? undefined : l.top) ?? qs;
    this._bottomHeight = s ?? ((c = t.defaultBorders) == null ? undefined : c.bottom) ?? qs;
    this.texture = t;
  }
  textureUpdated() {
    this._textureID = this.shader.texture._updateID;
    this._refresh();
  }
  get vertices() {
    return this.geometry.getBuffer("aVertexPosition").data;
  }
  set vertices(t) {
    this.geometry.getBuffer("aVertexPosition").data = t;
  }
  updateHorizontalVertices() {
    const t = this.vertices;
    const e = this._getMinScale();
    t[9] = t[11] = t[13] = t[15] = this._topHeight * e;
    t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e;
    t[25] = t[27] = t[29] = t[31] = this._height;
  }
  updateVerticalVertices() {
    const t = this.vertices;
    const e = this._getMinScale();
    t[2] = t[10] = t[18] = t[26] = this._leftWidth * e;
    t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e;
    t[6] = t[14] = t[22] = t[30] = this._width;
  }
  _getMinScale() {
    const t = this._leftWidth + this._rightWidth;
    const e = this._width > t ? 1 : this._width / t;
    const r = this._topHeight + this._bottomHeight;
    const n = this._height > r ? 1 : this._height / r;
    return Math.min(e, n);
  }
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t;
    this._refresh();
  }
  get height() {
    return this._height;
  }
  set height(t) {
    this._height = t;
    this._refresh();
  }
  get leftWidth() {
    return this._leftWidth;
  }
  set leftWidth(t) {
    this._leftWidth = t;
    this._refresh();
  }
  get rightWidth() {
    return this._rightWidth;
  }
  set rightWidth(t) {
    this._rightWidth = t;
    this._refresh();
  }
  get topHeight() {
    return this._topHeight;
  }
  set topHeight(t) {
    this._topHeight = t;
    this._refresh();
  }
  get bottomHeight() {
    return this._bottomHeight;
  }
  set bottomHeight(t) {
    this._bottomHeight = t;
    this._refresh();
  }
  _refresh() {
    const t = this.texture;
    const e = this.geometry.buffers[1].data;
    this._origWidth = t.orig.width;
    this._origHeight = t.orig.height;
    const r = 1 / this._origWidth;
    const n = 1 / this._origHeight;
    e[0] = e[8] = e[16] = e[24] = 0;
    e[1] = e[3] = e[5] = e[7] = 0;
    e[6] = e[14] = e[22] = e[30] = 1;
    e[25] = e[27] = e[29] = e[31] = 1;
    e[2] = e[10] = e[18] = e[26] = r * this._leftWidth;
    e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth;
    e[9] = e[11] = e[13] = e[15] = n * this._topHeight;
    e[17] = e[19] = e[21] = e[23] = 1 - n * this._bottomHeight;
    this.updateHorizontalVertices();
    this.updateVerticalVertices();
    this.geometry.buffers[0].update();
    this.geometry.buffers[1].update();
  }
}
class Ob extends Be {
  constructor(t = ut.EMPTY, e, r, n, s) {
    const a = new qa(e, r, n);
    a.getBuffer("aVertexPosition").static = false;
    const o = new _n(t);
    super(a, o, null, s);
    this.autoUpdate = true;
  }
  get vertices() {
    return this.geometry.getBuffer("aVertexPosition").data;
  }
  set vertices(t) {
    this.geometry.getBuffer("aVertexPosition").data = t;
  }
  _render(t) {
    if (this.autoUpdate) {
      this.geometry.getBuffer("aVertexPosition").update();
    }
    super._render(t);
  }
}
class Nb extends Be {
  constructor(t, e, r = 0) {
    const n = new Bb(t.height, e, r);
    const s = new _n(t);
    if (r > 0) {
      t.baseTexture.wrapMode = Yr.REPEAT;
    }
    super(n, s);
    this.autoUpdate = true;
  }
  _render(t) {
    const e = this.geometry;
    if (this.autoUpdate || e._width !== this.shader.texture.height) {
      e._width = this.shader.texture.height;
      e.update();
    }
    super._render(t);
  }
}
class Lb {
  constructor(t) {
    this.maxItemsPerFrame = t;
    this.itemsLeft = 0;
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function kb(i, t) {
  var r;
  let e = false;
  if ((r = i == null ? undefined : i._textures) != null && r.length) {
    for (let n = 0; n < i._textures.length; n++) {
      if (i._textures[n] instanceof ut) {
        const s = i._textures[n].baseTexture;
        if (!t.includes(s)) {
          t.push(s);
          e = true;
        }
      }
    }
  }
  return e;
}
function Ub(i, t) {
  if (i.baseTexture instanceof Tt) {
    const e = i.baseTexture;
    if (!t.includes(e)) {
      t.push(e);
    }
    return true;
  }
  return false;
}
function Gb(i, t) {
  if (i._texture && i._texture instanceof ut) {
    const e = i._texture.baseTexture;
    if (!t.includes(e)) {
      t.push(e);
    }
    return true;
  }
  return false;
}
function Hb(i, t) {
  if (t instanceof Sl) {
    t.updateText(true);
    return true;
  } else {
    return false;
  }
}
function $b(i, t) {
  if (t instanceof ui) {
    const e = t.toFontString();
    ni.measureFont(e);
    return true;
  }
  return false;
}
function Vb(i, t) {
  if (i instanceof Sl) {
    if (!t.includes(i.style)) {
      t.push(i.style);
    }
    if (!t.includes(i)) {
      t.push(i);
    }
    const e = i._texture.baseTexture;
    if (!t.includes(e)) {
      t.push(e);
    }
    return true;
  }
  return false;
}
function Wb(i, t) {
  if (i instanceof ui) {
    if (!t.includes(i)) {
      t.push(i);
    }
    return true;
  } else {
    return false;
  }
}
const Vf = class Wf {
  constructor(t) {
    this.limiter = new Lb(Wf.uploadsPerFrame);
    this.renderer = t;
    this.uploadHookHelper = null;
    this.queue = [];
    this.addHooks = [];
    this.uploadHooks = [];
    this.completes = [];
    this.ticking = false;
    this.delayedTick = () => {
      if (this.queue) {
        this.prepareItems();
      }
    };
    this.registerFindHook(Vb);
    this.registerFindHook(Wb);
    this.registerFindHook(kb);
    this.registerFindHook(Ub);
    this.registerFindHook(Gb);
    this.registerUploadHook(Hb);
    this.registerUploadHook($b);
  }
  upload(t) {
    return new Promise(e => {
      if (t) {
        this.add(t);
      }
      if (this.queue.length) {
        this.completes.push(e);
        if (!this.ticking) {
          this.ticking = true;
          We.system.addOnce(this.tick, this, Fi.UTILITY);
        }
      } else {
        e();
      }
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
      const t = this.queue[0];
      let e = false;
      if (t && !t._destroyed) {
        for (let r = 0, n = this.uploadHooks.length; r < n; r++) {
          if (this.uploadHooks[r](this.uploadHookHelper, t)) {
            this.queue.shift();
            e = true;
            break;
          }
        }
      }
      if (!e) {
        this.queue.shift();
      }
    }
    if (this.queue.length) {
      We.system.addOnce(this.tick, this, Fi.UTILITY);
    } else {
      this.ticking = false;
      const t = this.completes.slice(0);
      this.completes.length = 0;
      for (let e = 0, r = t.length; e < r; e++) {
        t[e]();
      }
    }
  }
  registerFindHook(t) {
    if (t) {
      this.addHooks.push(t);
    }
    return this;
  }
  registerUploadHook(t) {
    if (t) {
      this.uploadHooks.push(t);
    }
    return this;
  }
  add(t) {
    for (let e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++);
    if (t instanceof Ue) {
      for (let e = t.children.length - 1; e >= 0; e--) {
        this.add(t.children[e]);
      }
    }
    return this;
  }
  destroy() {
    if (this.ticking) {
      We.system.remove(this.tick, this);
    }
    this.ticking = false;
    this.addHooks = null;
    this.uploadHooks = null;
    this.renderer = null;
    this.completes = null;
    this.queue = null;
    this.limiter = null;
    this.uploadHookHelper = null;
  }
};
Vf.uploadsPerFrame = 4;
let Aa = Vf;
Object.defineProperties(st, {
  UPLOADS_PER_FRAME: {
    get() {
      return Aa.uploadsPerFrame;
    },
    set(i) {
      vt("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame");
      Aa.uploadsPerFrame = i;
    }
  }
});
function jf(i, t) {
  if (t instanceof Tt) {
    if (!t._glTextures[i.CONTEXT_UID]) {
      i.texture.bind(t);
    }
    return true;
  } else {
    return false;
  }
}
function jb(i, t) {
  if (!(t instanceof fs)) {
    return false;
  }
  const {
    geometry: e
  } = t;
  t.finishPoly();
  e.updateBatches();
  const {
    batches: r
  } = e;
  for (let n = 0; n < r.length; n++) {
    const {
      texture: s
    } = r[n].style;
    if (s) {
      jf(i, s.baseTexture);
    }
  }
  if (!e.batchable) {
    i.geometry.bind(e, t._resolveDirectShader(i));
  }
  return true;
}
function Xb(i, t) {
  if (i instanceof fs) {
    t.push(i);
    return true;
  } else {
    return false;
  }
}
class Xf extends Aa {
  constructor(t) {
    super(t);
    this.uploadHookHelper = this.renderer;
    this.registerFindHook(Xb);
    this.registerUploadHook(jf);
    this.registerUploadHook(jb);
  }
}
Xf.extension = {
  name: "prepare",
  type: rt.RendererSystem
};
ot.add(Xf);
const zf = class qn {
  constructor(t, e, r) {
    this.linkedSheets = [];
    if (t instanceof Tt || t instanceof ut) {
      t = {
        texture: t,
        data: e,
        resolutionFilename: r
      };
    }
    const {
      texture: n,
      data: s,
      resolutionFilename: a = null,
      cachePrefix: o = ""
    } = t;
    this.cachePrefix = o;
    this._texture = n instanceof ut ? n : null;
    this.baseTexture = n instanceof Tt ? n : this._texture.baseTexture;
    this.textures = {};
    this.animations = {};
    this.data = s;
    const l = this.baseTexture.resource;
    this.resolution = this._updateResolution(a || (l ? l.url : null));
    this._frames = this.data.frames;
    this._frameKeys = Object.keys(this._frames);
    this._batchIndex = 0;
    this._callback = null;
  }
  _updateResolution(t = null) {
    const {
      scale: e
    } = this.data.meta;
    let r = Fr(t, null);
    if (r === null) {
      r = typeof e == "number" ? e : parseFloat(e ?? "1");
    }
    if (r !== 1) {
      this.baseTexture.setResolution(r);
    }
    return r;
  }
  parse() {
    return new Promise(t => {
      this._callback = t;
      this._batchIndex = 0;
      if (this._frameKeys.length <= qn.BATCH_SIZE) {
        this._processFrames(0);
        this._processAnimations();
        this._parseComplete();
      } else {
        this._nextBatch();
      }
    });
  }
  _processFrames(t) {
    let e = t;
    const r = qn.BATCH_SIZE;
    while (e - t < r && e < this._frameKeys.length) {
      const n = this._frameKeys[e];
      const s = this._frames[n];
      const a = s.frame;
      if (a) {
        let o = null;
        let l = null;
        const c = s.trimmed !== false && s.sourceSize ? s.sourceSize : s.frame;
        const p = new At(0, 0, Math.floor(c.w) / this.resolution, Math.floor(c.h) / this.resolution);
        if (s.rotated) {
          o = new At(Math.floor(a.x) / this.resolution, Math.floor(a.y) / this.resolution, Math.floor(a.h) / this.resolution, Math.floor(a.w) / this.resolution);
        } else {
          o = new At(Math.floor(a.x) / this.resolution, Math.floor(a.y) / this.resolution, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution);
        }
        if (s.trimmed !== false && s.spriteSourceSize) {
          l = new At(Math.floor(s.spriteSourceSize.x) / this.resolution, Math.floor(s.spriteSourceSize.y) / this.resolution, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution);
        }
        this.textures[n] = new ut(this.baseTexture, o, p, l, s.rotated ? 2 : 0, s.anchor, s.borders);
        ut.addToCache(this.textures[n], this.cachePrefix + n.toString());
      }
      e++;
    }
  }
  _processAnimations() {
    const t = this.data.animations || {};
    for (const e in t) {
      this.animations[e] = [];
      for (let r = 0; r < t[e].length; r++) {
        const n = t[e][r];
        this.animations[e].push(this.textures[n]);
      }
    }
  }
  _parseComplete() {
    const t = this._callback;
    this._callback = null;
    this._batchIndex = 0;
    t.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * qn.BATCH_SIZE);
    this._batchIndex++;
    setTimeout(() => {
      if (this._batchIndex * qn.BATCH_SIZE < this._frameKeys.length) {
        this._nextBatch();
      } else {
        this._processAnimations();
        this._parseComplete();
      }
    }, 0);
  }
  destroy(t = false) {
    var e;
    for (const r in this.textures) {
      this.textures[r].destroy();
    }
    this._frames = null;
    this._frameKeys = null;
    this.data = null;
    this.textures = null;
    if (t) {
      if ((e = this._texture) != null) {
        e.destroy();
      }
      this.baseTexture.destroy();
    }
    this._texture = null;
    this.baseTexture = null;
    this.linkedSheets = [];
  }
};
zf.BATCH_SIZE = 1000;
let kc = zf;
const zb = ["jpg", "png", "jpeg", "avif", "webp", "s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"];
function qf(i, t, e) {
  const r = {};
  i.forEach(n => {
    r[n] = t;
  });
  Object.keys(t.textures).forEach(n => {
    r[`${t.cachePrefix}${n}`] = t.textures[n];
  });
  if (!e) {
    const n = ge.dirname(i[0]);
    t.linkedSheets.forEach((s, a) => {
      Object.assign(r, qf([`${n}/${t.data.meta.related_multi_packs[a]}`], s, true));
    });
  }
  return r;
}
const qb = {
  extension: rt.Asset,
  cache: {
    test: i => i instanceof kc,
    getCacheableAssets: (i, t) => qf(i, t, false)
  },
  resolver: {
    test: i => {
      const t = i.split("?")[0].split(".");
      const e = t.pop();
      const r = t.pop();
      return e === "json" && zb.includes(r);
    },
    parse: i => {
      var e;
      const t = i.split(".");
      return {
        resolution: parseFloat(((e = st.RETINA_PREFIX.exec(i)) == null ? undefined : e[1]) ?? "1"),
        format: t[t.length - 2],
        src: i
      };
    }
  },
  loader: {
    name: "spritesheetLoader",
    extension: {
      type: rt.LoadParser,
      priority: dr.Normal
    },
    async testParse(i, t) {
      return ge.extname(t.src).toLowerCase() === ".json" && !!i.frames;
    },
    async parse(i, t, e) {
      var p;
      var g;
      const {
        texture: r,
        imageFilename: n,
        cachePrefix: s
      } = (t == null ? undefined : t.data) ?? {};
      let a = ge.dirname(t.src);
      if (a && a.lastIndexOf("/") !== a.length - 1) {
        a += "/";
      }
      let o;
      if (r && r.baseTexture) {
        o = r;
      } else {
        const f = il(a + (n ?? i.meta.image), t.src);
        o = (await e.load([f]))[f];
      }
      const l = new kc({
        texture: o.baseTexture,
        data: i,
        resolutionFilename: t.src,
        cachePrefix: s
      });
      await l.parse();
      const c = (p = i == null ? undefined : i.meta) == null ? undefined : p.related_multi_packs;
      if (Array.isArray(c)) {
        const f = [];
        for (const _ of c) {
          if (typeof _ != "string") {
            continue;
          }
          let T = a + _;
          if ((g = t.data) == null || !g.ignoreMultiPack) {
            T = il(T, t.src);
            f.push(e.load({
              src: T,
              data: {
                ignoreMultiPack: true
              }
            }));
          }
        }
        const v = await Promise.all(f);
        l.linkedSheets = v;
        v.forEach(_ => {
          _.linkedSheets = [l].concat(l.linkedSheets.filter(T => T !== _));
        });
      }
      return l;
    },
    unload(i) {
      i.destroy(true);
    }
  }
};
ot.add(qb);
class Sa {
  constructor() {
    this.info = [];
    this.common = [];
    this.page = [];
    this.char = [];
    this.kerning = [];
    this.distanceField = [];
  }
}
class aa {
  static test(t) {
    return typeof t == "string" && t.startsWith("info face=");
  }
  static parse(t) {
    const e = t.match(/^[a-z]+\s+.+$/gm);
    const r = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const s in e) {
      const a = e[s].match(/^[a-z]+/gm)[0];
      const o = e[s].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
      const l = {};
      for (const c in o) {
        const p = o[c].split("=");
        const g = p[0];
        const f = p[1].replace(/"/gm, "");
        const v = parseFloat(f);
        const _ = isNaN(v) ? f : v;
        l[g] = _;
      }
      r[a].push(l);
    }
    const n = new Sa();
    r.info.forEach(s => n.info.push({
      face: s.face,
      size: parseInt(s.size, 10)
    }));
    r.common.forEach(s => n.common.push({
      lineHeight: parseInt(s.lineHeight, 10)
    }));
    r.page.forEach(s => n.page.push({
      id: parseInt(s.id, 10),
      file: s.file
    }));
    r.char.forEach(s => n.char.push({
      id: parseInt(s.id, 10),
      page: parseInt(s.page, 10),
      x: parseInt(s.x, 10),
      y: parseInt(s.y, 10),
      width: parseInt(s.width, 10),
      height: parseInt(s.height, 10),
      xoffset: parseInt(s.xoffset, 10),
      yoffset: parseInt(s.yoffset, 10),
      xadvance: parseInt(s.xadvance, 10)
    }));
    r.kerning.forEach(s => n.kerning.push({
      first: parseInt(s.first, 10),
      second: parseInt(s.second, 10),
      amount: parseInt(s.amount, 10)
    }));
    r.distanceField.forEach(s => n.distanceField.push({
      distanceRange: parseInt(s.distanceRange, 10),
      fieldType: s.fieldType
    }));
    return n;
  }
}
class ol {
  static test(t) {
    const e = t;
    return typeof t != "string" && "getElementsByTagName" in t && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  static parse(t) {
    const e = new Sa();
    const r = t.getElementsByTagName("info");
    const n = t.getElementsByTagName("common");
    const s = t.getElementsByTagName("page");
    const a = t.getElementsByTagName("char");
    const o = t.getElementsByTagName("kerning");
    const l = t.getElementsByTagName("distanceField");
    for (let c = 0; c < r.length; c++) {
      e.info.push({
        face: r[c].getAttribute("face"),
        size: parseInt(r[c].getAttribute("size"), 10)
      });
    }
    for (let c = 0; c < n.length; c++) {
      e.common.push({
        lineHeight: parseInt(n[c].getAttribute("lineHeight"), 10)
      });
    }
    for (let c = 0; c < s.length; c++) {
      e.page.push({
        id: parseInt(s[c].getAttribute("id"), 10) || 0,
        file: s[c].getAttribute("file")
      });
    }
    for (let c = 0; c < a.length; c++) {
      const p = a[c];
      e.char.push({
        id: parseInt(p.getAttribute("id"), 10),
        page: parseInt(p.getAttribute("page"), 10) || 0,
        x: parseInt(p.getAttribute("x"), 10),
        y: parseInt(p.getAttribute("y"), 10),
        width: parseInt(p.getAttribute("width"), 10),
        height: parseInt(p.getAttribute("height"), 10),
        xoffset: parseInt(p.getAttribute("xoffset"), 10),
        yoffset: parseInt(p.getAttribute("yoffset"), 10),
        xadvance: parseInt(p.getAttribute("xadvance"), 10)
      });
    }
    for (let c = 0; c < o.length; c++) {
      e.kerning.push({
        first: parseInt(o[c].getAttribute("first"), 10),
        second: parseInt(o[c].getAttribute("second"), 10),
        amount: parseInt(o[c].getAttribute("amount"), 10)
      });
    }
    for (let c = 0; c < l.length; c++) {
      e.distanceField.push({
        fieldType: l[c].getAttribute("fieldType"),
        distanceRange: parseInt(l[c].getAttribute("distanceRange"), 10)
      });
    }
    return e;
  }
}
class hl {
  static test(t) {
    if (typeof t == "string" && t.includes("<font>")) {
      return ol.test(st.ADAPTER.parseXML(t));
    } else {
      return false;
    }
  }
  static parse(t) {
    return ol.parse(st.ADAPTER.parseXML(t));
  }
}
const ah = [aa, ol, hl];
function Yb(i) {
  for (let t = 0; t < ah.length; t++) {
    if (ah[t].test(i)) {
      return ah[t];
    }
  }
  return null;
}
function Kb(i, t, e, r, n, s) {
  const a = e.fill;
  if (Array.isArray(a)) {
    if (a.length === 1) {
      return a[0];
    }
  } else {
    return a;
  }
  let o;
  const l = e.dropShadow ? e.dropShadowDistance : 0;
  const c = e.padding || 0;
  const p = i.width / r - l - c * 2;
  const g = i.height / r - l - c * 2;
  const f = a.slice();
  const v = e.fillGradientStops.slice();
  if (!v.length) {
    const _ = f.length + 1;
    for (let T = 1; T < _; ++T) {
      v.push(T / _);
    }
  }
  f.unshift(a[0]);
  v.unshift(0);
  f.push(a[a.length - 1]);
  v.push(1);
  if (e.fillGradientType === ja.LINEAR_VERTICAL) {
    o = t.createLinearGradient(p / 2, c, p / 2, g + c);
    let _ = 0;
    const T = (s.fontProperties.fontSize + e.strokeThickness) / g;
    for (let A = 0; A < n.length; A++) {
      const E = s.lineHeight * A;
      for (let I = 0; I < f.length; I++) {
        let S = 0;
        if (typeof v[I] == "number") {
          S = v[I];
        } else {
          S = I / f.length;
        }
        const P = E / g + S * T;
        let k = Math.max(_, P);
        k = Math.min(k, 1);
        o.addColorStop(k, f[I]);
        _ = k;
      }
    }
  } else {
    o = t.createLinearGradient(c, g / 2, p + c, g / 2);
    const _ = f.length + 1;
    let T = 1;
    for (let A = 0; A < f.length; A++) {
      let E;
      if (typeof v[A] == "number") {
        E = v[A];
      } else {
        E = T / _;
      }
      o.addColorStop(E, f[A]);
      T++;
    }
  }
  return o;
}
function Zb(i, t, e, r, n, s, a) {
  const o = e.text;
  const l = e.fontProperties;
  t.translate(r, n);
  t.scale(s, s);
  const c = a.strokeThickness / 2;
  const p = -(a.strokeThickness / 2);
  t.font = a.toFontString();
  t.lineWidth = a.strokeThickness;
  t.textBaseline = a.textBaseline;
  t.lineJoin = a.lineJoin;
  t.miterLimit = a.miterLimit;
  t.fillStyle = Kb(i, t, a, s, [o], e);
  t.strokeStyle = a.stroke;
  if (a.dropShadow) {
    const g = a.dropShadowColor;
    const f = a.dropShadowBlur * s;
    const v = a.dropShadowDistance * s;
    t.shadowColor = Pt.shared.setValue(g).setAlpha(a.dropShadowAlpha).toRgbaString();
    t.shadowBlur = f;
    t.shadowOffsetX = Math.cos(a.dropShadowAngle) * v;
    t.shadowOffsetY = Math.sin(a.dropShadowAngle) * v;
  } else {
    t.shadowColor = "black";
    t.shadowBlur = 0;
    t.shadowOffsetX = 0;
    t.shadowOffsetY = 0;
  }
  if (a.stroke && a.strokeThickness) {
    t.strokeText(o, c, p + e.lineHeight - l.descent);
  }
  if (a.fill) {
    t.fillText(o, c, p + e.lineHeight - l.descent);
  }
  t.setTransform(1, 0, 0, 1, 0, 0);
  t.fillStyle = "rgba(0, 0, 0, 0)";
}
function oa(i) {
  if (i.codePointAt) {
    return i.codePointAt(0);
  } else {
    return i.charCodeAt(0);
  }
}
function Yf(i) {
  if (Array.from) {
    return Array.from(i);
  } else {
    return i.split("");
  }
}
function Qb(i) {
  if (typeof i == "string") {
    i = [i];
  }
  const t = [];
  for (let e = 0, r = i.length; e < r; e++) {
    const n = i[e];
    if (Array.isArray(n)) {
      if (n.length !== 2) {
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${n.length}.`);
      }
      const s = n[0].charCodeAt(0);
      const a = n[1].charCodeAt(0);
      if (a < s) {
        throw new Error("[BitmapFont]: Invalid character range.");
      }
      for (let o = s, l = a; o <= l; o++) {
        t.push(String.fromCharCode(o));
      }
    } else {
      t.push(...Yf(n));
    }
  }
  if (t.length === 0) {
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  }
  return t;
}
const ri = class Ar {
  constructor(t, e, r) {
    var p;
    const [n] = t.info;
    const [s] = t.common;
    const [a] = t.page;
    const [o] = t.distanceField;
    const l = Fr(a.file);
    const c = {};
    this._ownsTextures = r;
    this.font = n.face;
    this.size = n.size;
    this.lineHeight = s.lineHeight / l;
    this.chars = {};
    this.pageTextures = c;
    for (let g = 0; g < t.page.length; g++) {
      const {
        id: f,
        file: v
      } = t.page[g];
      c[f] = e instanceof Array ? e[g] : e[v];
      if (o != null && o.fieldType && o.fieldType !== "none") {
        c[f].baseTexture.alphaMode = ke.NO_PREMULTIPLIED_ALPHA;
        c[f].baseTexture.mipmap = Br.OFF;
      }
    }
    for (let g = 0; g < t.char.length; g++) {
      const {
        id: f,
        page: v
      } = t.char[g];
      let {
        x: _,
        y: T,
        width: A,
        height: E,
        xoffset: I,
        yoffset: S,
        xadvance: P
      } = t.char[g];
      _ /= l;
      T /= l;
      A /= l;
      E /= l;
      I /= l;
      S /= l;
      P /= l;
      const k = new At(_ + c[v].frame.x / l, T + c[v].frame.y / l, A, E);
      this.chars[f] = {
        xOffset: I,
        yOffset: S,
        xAdvance: P,
        kerning: {},
        texture: new ut(c[v].baseTexture, k),
        page: v
      };
    }
    for (let g = 0; g < t.kerning.length; g++) {
      let {
        first: f,
        second: v,
        amount: _
      } = t.kerning[g];
      f /= l;
      v /= l;
      _ /= l;
      if (this.chars[v]) {
        this.chars[v].kerning[f] = _;
      }
    }
    this.distanceFieldRange = o == null ? undefined : o.distanceRange;
    this.distanceFieldType = ((p = o == null ? undefined : o.fieldType) == null ? undefined : p.toLowerCase()) ?? "none";
  }
  destroy() {
    for (const t in this.chars) {
      this.chars[t].texture.destroy();
      this.chars[t].texture = null;
    }
    for (const t in this.pageTextures) {
      if (this._ownsTextures) {
        this.pageTextures[t].destroy(true);
      }
      this.pageTextures[t] = null;
    }
    this.chars = null;
    this.pageTextures = null;
  }
  static install(t, e, r) {
    let n;
    if (t instanceof Sa) {
      n = t;
    } else {
      const a = Yb(t);
      if (!a) {
        throw new Error("Unrecognized data format for font.");
      }
      n = a.parse(t);
    }
    if (e instanceof ut) {
      e = [e];
    }
    const s = new Ar(n, e, r);
    Ar.available[s.font] = s;
    return s;
  }
  static uninstall(t) {
    const e = Ar.available[t];
    if (!e) {
      throw new Error(`No font found named '${t}'`);
    }
    e.destroy();
    delete Ar.available[t];
  }
  static from(t, e, r) {
    if (!t) {
      throw new Error("[BitmapFont] Property `name` is required.");
    }
    const {
      chars: n,
      padding: s,
      resolution: a,
      textureWidth: o,
      textureHeight: l,
      ...c
    } = Object.assign({}, Ar.defaultOptions, r);
    const p = Qb(n);
    const g = e instanceof ui ? e : new ui(e);
    const f = o;
    const v = new Sa();
    v.info[0] = {
      face: g.fontFamily,
      size: g.fontSize
    };
    v.common[0] = {
      lineHeight: g.fontSize
    };
    let _ = 0;
    let T = 0;
    let A;
    let E;
    let I;
    let S = 0;
    const P = [];
    for (let V = 0; V < p.length; V++) {
      if (!A) {
        A = st.ADAPTER.createCanvas();
        A.width = o;
        A.height = l;
        E = A.getContext("2d");
        I = new Tt(A, {
          resolution: a,
          ...c
        });
        P.push(new ut(I));
        v.page.push({
          id: P.length - 1,
          file: ""
        });
      }
      const d = p[V];
      const O = ni.measureText(d, g, false, A);
      const N = O.width;
      const z = Math.ceil(O.height);
      const J = Math.ceil((g.fontStyle === "italic" ? 2 : 1) * N);
      if (T >= l - z * a) {
        if (T === 0) {
          throw new Error(`[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${g.fontFamily}', fontSize: ${g.fontSize}px, char: '${d}')`);
        }
        --V;
        A = null;
        E = null;
        I = null;
        T = 0;
        _ = 0;
        S = 0;
        continue;
      }
      S = Math.max(z + O.fontProperties.descent, S);
      if (J * a + _ >= f) {
        if (_ === 0) {
          throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${g.fontFamily}', fontSize: ${g.fontSize}px, char: '${d}')`);
        }
        --V;
        T += S * a;
        T = Math.ceil(T);
        _ = 0;
        S = 0;
        continue;
      }
      Zb(A, E, O, _, T, a, g);
      const $ = oa(O.text);
      v.char.push({
        id: $,
        page: P.length - 1,
        x: _ / a,
        y: T / a,
        width: J,
        height: z,
        xoffset: 0,
        yoffset: 0,
        xadvance: N - (g.dropShadow ? g.dropShadowDistance : 0) - (g.stroke ? g.strokeThickness : 0)
      });
      _ += (J + s * 2) * a;
      _ = Math.ceil(_);
    }
    if (r == null || !r.skipKerning) {
      for (let V = 0, d = p.length; V < d; V++) {
        const O = p[V];
        for (let N = 0; N < d; N++) {
          const z = p[N];
          const J = E.measureText(O).width;
          const $ = E.measureText(z).width;
          const B = E.measureText(O + z).width - (J + $);
          if (B) {
            v.kerning.push({
              first: oa(O),
              second: oa(z),
              amount: B
            });
          }
        }
      }
    }
    const k = new Ar(v, P, true);
    if (Ar.available[t] !== undefined) {
      Ar.uninstall(t);
    }
    Ar.available[t] = k;
    return k;
  }
};
ri.ALPHA = [["a", "z"], ["A", "Z"], " "];
ri.NUMERIC = [["0", "9"]];
ri.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "];
ri.ASCII = [[" ", "~"]];
ri.defaultOptions = {
  resolution: 1,
  textureWidth: 512,
  textureHeight: 512,
  padding: 4,
  chars: ri.ALPHANUMERIC
};
ri.available = {};
let ii = ri;
var Jb = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`;
var t1 = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const Uc = [];
const Gc = [];
const Hc = [];
const e1 = class Kf extends Ue {
  constructor(t, e = {}) {
    super();
    const {
      align: r,
      tint: n,
      maxWidth: s,
      letterSpacing: a,
      fontName: o,
      fontSize: l
    } = Object.assign({}, Kf.styleDefaults, e);
    if (!ii.available[o]) {
      throw new Error(`Missing BitmapFont "${o}"`);
    }
    this._activePagesMeshData = [];
    this._textWidth = 0;
    this._textHeight = 0;
    this._align = r;
    this._tintColor = new Pt(n);
    this._font = undefined;
    this._fontName = o;
    this._fontSize = l;
    this.text = t;
    this._maxWidth = s;
    this._maxLineHeight = 0;
    this._letterSpacing = a;
    this._anchor = new zr(() => {
      this.dirty = true;
    }, this, 0, 0);
    this._roundPixels = st.ROUND_PIXELS;
    this.dirty = true;
    this._resolution = st.RESOLUTION;
    this._autoResolution = true;
    this._textureCache = {};
  }
  updateText() {
    var J;
    const t = ii.available[this._fontName];
    const e = this.fontSize;
    const r = e / t.size;
    const n = new Bt();
    const s = [];
    const a = [];
    const o = [];
    const l = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ";
    const c = Yf(l);
    const p = this._maxWidth * t.size / e;
    const g = t.distanceFieldType === "none" ? Uc : Gc;
    let f = null;
    let v = 0;
    let _ = 0;
    let T = 0;
    let A = -1;
    let E = 0;
    let I = 0;
    let S = 0;
    let P = 0;
    for (let $ = 0; $ < c.length; $++) {
      const B = c[$];
      const W = oa(B);
      if (/(?:\s)/.test(B)) {
        A = $;
        E = v;
        P++;
      }
      if (B === "\r" || B === `
`) {
        a.push(v);
        o.push(-1);
        _ = Math.max(_, v);
        ++T;
        ++I;
        n.x = 0;
        n.y += t.lineHeight;
        f = null;
        P = 0;
        continue;
      }
      const tt = t.chars[W];
      if (!tt) {
        continue;
      }
      if (f && tt.kerning[f]) {
        n.x += tt.kerning[f];
      }
      const at = Hc.pop() || {
        texture: ut.EMPTY,
        line: 0,
        charCode: 0,
        prevSpaces: 0,
        position: new Bt()
      };
      at.texture = tt.texture;
      at.line = T;
      at.charCode = W;
      at.position.x = Math.round(n.x + tt.xOffset + this._letterSpacing / 2);
      at.position.y = Math.round(n.y + tt.yOffset);
      at.prevSpaces = P;
      s.push(at);
      v = at.position.x + Math.max(tt.xAdvance - tt.xOffset, tt.texture.orig.width);
      n.x += tt.xAdvance + this._letterSpacing;
      S = Math.max(S, tt.yOffset + tt.texture.height);
      f = W;
      if (A !== -1 && p > 0 && n.x > p) {
        ++I;
        Pi(s, 1 + A - I, 1 + $ - A);
        $ = A;
        A = -1;
        a.push(E);
        o.push(s.length > 0 ? s[s.length - 1].prevSpaces : 0);
        _ = Math.max(_, E);
        T++;
        n.x = 0;
        n.y += t.lineHeight;
        f = null;
        P = 0;
      }
    }
    const k = c[c.length - 1];
    if (k !== "\r" && k !== `
`) {
      if (/(?:\s)/.test(k)) {
        v = E;
      }
      a.push(v);
      _ = Math.max(_, v);
      o.push(-1);
    }
    const V = [];
    for (let $ = 0; $ <= T; $++) {
      let B = 0;
      if (this._align === "right") {
        B = _ - a[$];
      } else if (this._align === "center") {
        B = (_ - a[$]) / 2;
      } else if (this._align === "justify") {
        B = o[$] < 0 ? 0 : (_ - a[$]) / o[$];
      }
      V.push(B);
    }
    const d = s.length;
    const O = {};
    const N = [];
    const z = this._activePagesMeshData;
    g.push(...z);
    for (let $ = 0; $ < d; $++) {
      const B = s[$].texture;
      const W = B.baseTexture.uid;
      if (!O[W]) {
        let tt = g.pop();
        if (!tt) {
          const nt = new qa();
          let dt;
          let Ft;
          if (t.distanceFieldType === "none") {
            dt = new _n(ut.EMPTY);
            Ft = q.NORMAL;
          } else {
            dt = new _n(ut.EMPTY, {
              program: qr.from(t1, Jb),
              uniforms: {
                uFWidth: 0
              }
            });
            Ft = q.NORMAL_NPM;
          }
          const Q = new Be(nt, dt);
          Q.blendMode = Ft;
          tt = {
            index: 0,
            indexCount: 0,
            vertexCount: 0,
            uvsCount: 0,
            total: 0,
            mesh: Q,
            vertices: null,
            uvs: null,
            indices: null
          };
        }
        tt.index = 0;
        tt.indexCount = 0;
        tt.vertexCount = 0;
        tt.uvsCount = 0;
        tt.total = 0;
        const {
          _textureCache: at
        } = this;
        at[W] = at[W] || new ut(B.baseTexture);
        tt.mesh.texture = at[W];
        tt.mesh.tint = this._tintColor.value;
        N.push(tt);
        O[W] = tt;
      }
      O[W].total++;
    }
    for (let $ = 0; $ < z.length; $++) {
      if (!N.includes(z[$])) {
        this.removeChild(z[$].mesh);
      }
    }
    for (let $ = 0; $ < N.length; $++) {
      if (N[$].mesh.parent !== this) {
        this.addChild(N[$].mesh);
      }
    }
    this._activePagesMeshData = N;
    for (const $ in O) {
      const B = O[$];
      const W = B.total;
      if (!(((J = B.indices) == null ? undefined : J.length) > W * 6) || B.vertices.length < Be.BATCHABLE_SIZE * 2) {
        B.vertices = new Float32Array(W * 8);
        B.uvs = new Float32Array(W * 8);
        B.indices = new Uint16Array(W * 6);
      } else {
        const tt = B.total;
        const at = B.vertices;
        for (let nt = tt * 4 * 2; nt < at.length; nt++) {
          at[nt] = 0;
        }
      }
      B.mesh.size = W * 6;
    }
    for (let $ = 0; $ < d; $++) {
      const B = s[$];
      let W = B.position.x + V[B.line] * (this._align === "justify" ? B.prevSpaces : 1);
      if (this._roundPixels) {
        W = Math.round(W);
      }
      const tt = W * r;
      const at = B.position.y * r;
      const nt = B.texture;
      const dt = O[nt.baseTexture.uid];
      const Ft = nt.frame;
      const Q = nt._uvs;
      const K = dt.index++;
      dt.indices[K * 6 + 0] = 0 + K * 4;
      dt.indices[K * 6 + 1] = 1 + K * 4;
      dt.indices[K * 6 + 2] = 2 + K * 4;
      dt.indices[K * 6 + 3] = 0 + K * 4;
      dt.indices[K * 6 + 4] = 2 + K * 4;
      dt.indices[K * 6 + 5] = 3 + K * 4;
      dt.vertices[K * 8 + 0] = tt;
      dt.vertices[K * 8 + 1] = at;
      dt.vertices[K * 8 + 2] = tt + Ft.width * r;
      dt.vertices[K * 8 + 3] = at;
      dt.vertices[K * 8 + 4] = tt + Ft.width * r;
      dt.vertices[K * 8 + 5] = at + Ft.height * r;
      dt.vertices[K * 8 + 6] = tt;
      dt.vertices[K * 8 + 7] = at + Ft.height * r;
      dt.uvs[K * 8 + 0] = Q.x0;
      dt.uvs[K * 8 + 1] = Q.y0;
      dt.uvs[K * 8 + 2] = Q.x1;
      dt.uvs[K * 8 + 3] = Q.y1;
      dt.uvs[K * 8 + 4] = Q.x2;
      dt.uvs[K * 8 + 5] = Q.y2;
      dt.uvs[K * 8 + 6] = Q.x3;
      dt.uvs[K * 8 + 7] = Q.y3;
    }
    this._textWidth = _ * r;
    this._textHeight = (n.y + t.lineHeight) * r;
    for (const $ in O) {
      const B = O[$];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let nt = 0;
        const dt = this._textWidth * this.anchor.x;
        const Ft = this._textHeight * this.anchor.y;
        for (let Q = 0; Q < B.total; Q++) {
          B.vertices[nt++] -= dt;
          B.vertices[nt++] -= Ft;
          B.vertices[nt++] -= dt;
          B.vertices[nt++] -= Ft;
          B.vertices[nt++] -= dt;
          B.vertices[nt++] -= Ft;
          B.vertices[nt++] -= dt;
          B.vertices[nt++] -= Ft;
        }
      }
      this._maxLineHeight = S * r;
      const W = B.mesh.geometry.getBuffer("aVertexPosition");
      const tt = B.mesh.geometry.getBuffer("aTextureCoord");
      const at = B.mesh.geometry.getIndex();
      W.data = B.vertices;
      tt.data = B.uvs;
      at.data = B.indices;
      W.update();
      tt.update();
      at.update();
    }
    for (let $ = 0; $ < s.length; $++) {
      Hc.push(s[$]);
    }
    this._font = t;
    this.dirty = false;
  }
  updateTransform() {
    this.validate();
    this.containerUpdateTransform();
  }
  _render(t) {
    if (this._autoResolution && this._resolution !== t.resolution) {
      this._resolution = t.resolution;
      this.dirty = true;
    }
    const {
      distanceFieldRange: e,
      distanceFieldType: r,
      size: n
    } = ii.available[this._fontName];
    if (r !== "none") {
      const {
        a: s,
        b: a,
        c: o,
        d: l
      } = this.worldTransform;
      const c = Math.sqrt(s * s + a * a);
      const p = Math.sqrt(o * o + l * l);
      const g = (Math.abs(c) + Math.abs(p)) / 2;
      const f = this.fontSize / n;
      const v = t._view.resolution;
      for (const _ of this._activePagesMeshData) {
        _.mesh.shader.uniforms.uFWidth = g * e * f * v;
      }
    }
    super._render(t);
  }
  getLocalBounds() {
    this.validate();
    return super.getLocalBounds();
  }
  validate() {
    const t = ii.available[this._fontName];
    if (!t) {
      throw new Error(`Missing BitmapFont "${this._fontName}"`);
    }
    if (this._font !== t) {
      this.dirty = true;
    }
    if (this.dirty) {
      this.updateText();
    }
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    if (this.tint !== t) {
      this._tintColor.setValue(t);
      for (let e = 0; e < this._activePagesMeshData.length; e++) {
        this._activePagesMeshData[e].mesh.tint = t;
      }
    }
  }
  get align() {
    return this._align;
  }
  set align(t) {
    if (this._align !== t) {
      this._align = t;
      this.dirty = true;
    }
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(t) {
    if (!ii.available[t]) {
      throw new Error(`Missing BitmapFont "${t}"`);
    }
    if (this._fontName !== t) {
      this._fontName = t;
      this.dirty = true;
    }
  }
  get fontSize() {
    return this._fontSize ?? ii.available[this._fontName].size;
  }
  set fontSize(t) {
    if (this._fontSize !== t) {
      this._fontSize = t;
      this.dirty = true;
    }
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    if (typeof t == "number") {
      this._anchor.set(t);
    } else {
      this._anchor.copyFrom(t);
    }
  }
  get text() {
    return this._text;
  }
  set text(t) {
    t = String(t ?? "");
    if (this._text !== t) {
      this._text = t;
      this.dirty = true;
    }
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(t) {
    if (this._maxWidth !== t) {
      this._maxWidth = t;
      this.dirty = true;
    }
  }
  get maxLineHeight() {
    this.validate();
    return this._maxLineHeight;
  }
  get textWidth() {
    this.validate();
    return this._textWidth;
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(t) {
    if (this._letterSpacing !== t) {
      this._letterSpacing = t;
      this.dirty = true;
    }
  }
  get roundPixels() {
    return this._roundPixels;
  }
  set roundPixels(t) {
    if (t !== this._roundPixels) {
      this._roundPixels = t;
      this.dirty = true;
    }
  }
  get textHeight() {
    this.validate();
    return this._textHeight;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._autoResolution = false;
    if (this._resolution !== t) {
      this._resolution = t;
      this.dirty = true;
    }
  }
  destroy(t) {
    const {
      _textureCache: e
    } = this;
    const r = ii.available[this._fontName].distanceFieldType === "none" ? Uc : Gc;
    r.push(...this._activePagesMeshData);
    for (const n of this._activePagesMeshData) {
      this.removeChild(n.mesh);
    }
    this._activePagesMeshData = [];
    r.filter(n => e[n.mesh.texture.baseTexture.uid]).forEach(n => {
      n.mesh.texture = ut.EMPTY;
    });
    for (const n in e) {
      e[n].destroy();
      delete e[n];
    }
    this._font = null;
    this._tintColor = null;
    this._textureCache = null;
    super.destroy(t);
  }
};
e1.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0
};
const r1 = [".xml", ".fnt"];
const i1 = {
  extension: {
    type: rt.LoadParser,
    priority: dr.Normal
  },
  name: "loadBitmapFont",
  test(i) {
    return r1.includes(ge.extname(i).toLowerCase());
  },
  async testParse(i) {
    return aa.test(i) || hl.test(i);
  },
  async parse(i, t, e) {
    const r = aa.test(i) ? aa.parse(i) : hl.parse(i);
    const {
      src: n
    } = t;
    const {
      page: s
    } = r;
    const a = [];
    for (let c = 0; c < s.length; ++c) {
      const p = s[c].file;
      let g = ge.join(ge.dirname(n), p);
      g = il(g, n);
      a.push(g);
    }
    const o = await e.load(a);
    const l = a.map(c => o[c]);
    return ii.install(r, l, true);
  },
  async load(i, t) {
    return (await st.ADAPTER.fetch(i)).text();
  },
  unload(i) {
    i.destroy();
  }
};
ot.add(i1);
const ll = class rn extends ui {
  constructor() {
    super(...arguments);
    this._fonts = [];
    this._overrides = [];
    this._stylesheet = "";
    this.fontsDirty = false;
  }
  static from(t) {
    return new rn(Object.keys(rn.defaultOptions).reduce((e, r) => ({
      ...e,
      [r]: t[r]
    }), {}));
  }
  cleanFonts() {
    if (this._fonts.length > 0) {
      this._fonts.forEach(t => {
        URL.revokeObjectURL(t.src);
        t.refs--;
        if (t.refs === 0) {
          if (t.fontFace) {
            document.fonts.delete(t.fontFace);
          }
          delete rn.availableFonts[t.originalUrl];
        }
      });
      this.fontFamily = "Arial";
      this._fonts.length = 0;
      this.styleID++;
      this.fontsDirty = true;
    }
  }
  loadFont(t, e = {}) {
    const {
      availableFonts: r
    } = rn;
    if (r[t]) {
      const n = r[t];
      this._fonts.push(n);
      n.refs++;
      this.styleID++;
      this.fontsDirty = true;
      return Promise.resolve();
    }
    return st.ADAPTER.fetch(t).then(n => n.blob()).then(async n => new Promise((s, a) => {
      const o = URL.createObjectURL(n);
      const l = new FileReader();
      l.onload = () => s([o, l.result]);
      l.onerror = a;
      l.readAsDataURL(n);
    })).then(async ([n, s]) => {
      const a = Object.assign({
        family: ge.basename(t, ge.extname(t)),
        weight: "normal",
        style: "normal",
        display: "auto",
        src: n,
        dataSrc: s,
        refs: 1,
        originalUrl: t,
        fontFace: null
      }, e);
      r[t] = a;
      this._fonts.push(a);
      this.styleID++;
      const o = new FontFace(a.family, `url(${a.src})`, {
        weight: a.weight,
        style: a.style,
        display: a.display
      });
      a.fontFace = o;
      await o.load();
      document.fonts.add(o);
      await document.fonts.ready;
      this.styleID++;
      this.fontsDirty = true;
    });
  }
  addOverride(...t) {
    const e = t.filter(r => !this._overrides.includes(r));
    if (e.length > 0) {
      this._overrides.push(...e);
      this.styleID++;
    }
  }
  removeOverride(...t) {
    const e = t.filter(r => this._overrides.includes(r));
    if (e.length > 0) {
      this._overrides = this._overrides.filter(r => !e.includes(r));
      this.styleID++;
    }
  }
  toCSS(t) {
    return [`transform: scale(${t})`, "transform-origin: top left", "display: inline-block", `color: ${this.normalizeColor(this.fill)}`, `font-size: ${this.fontSize}px`, `font-family: ${this.fontFamily}`, `font-weight: ${this.fontWeight}`, `font-style: ${this.fontStyle}`, `font-variant: ${this.fontVariant}`, `letter-spacing: ${this.letterSpacing}px`, `text-align: ${this.align}`, `padding: ${this.padding}px`, `white-space: ${this.whiteSpace}`, ...(this.lineHeight ? [`line-height: ${this.lineHeight}px`] : []), ...(this.wordWrap ? [`word-wrap: ${this.breakWords ? "break-all" : "break-word"}`, `max-width: ${this.wordWrapWidth}px`] : []), ...(this.strokeThickness ? [`-webkit-text-stroke-width: ${this.strokeThickness}px`, `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`, `text-stroke-width: ${this.strokeThickness}px`, `text-stroke-color: ${this.normalizeColor(this.stroke)}`, "paint-order: stroke"] : []), ...(this.dropShadow ? [this.dropShadowToCSS()] : []), ...this._overrides].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce((t, e) => `${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`, this._stylesheet);
  }
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(t) {
    if (this._stylesheet !== t) {
      this._stylesheet = t;
      this.styleID++;
    }
  }
  normalizeColor(t) {
    if (Array.isArray(t)) {
      t = Id(t);
    }
    if (typeof t == "number") {
      return Cd(t);
    } else {
      return t;
    }
  }
  dropShadowToCSS() {
    let t = this.normalizeColor(this.dropShadowColor);
    const e = this.dropShadowAlpha;
    const r = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance);
    const n = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    if (t.startsWith("#") && e < 1) {
      t += (e * 255 | 0).toString(16).padStart(2, "0");
    }
    const s = `${r}px ${n}px`;
    if (this.dropShadowBlur > 0) {
      return `text-shadow: ${s} ${this.dropShadowBlur}px ${t}`;
    } else {
      return `text-shadow: ${s} ${t}`;
    }
  }
  reset() {
    Object.assign(this, rn.defaultOptions);
  }
  onBeforeDraw() {
    const {
      fontsDirty: t
    } = this;
    this.fontsDirty = false;
    if (this.isSafari && this._fonts.length > 0 && t) {
      return new Promise(e => setTimeout(e, 100));
    } else {
      return Promise.resolve();
    }
  }
  get isSafari() {
    const {
      userAgent: t
    } = st.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(t);
  }
  set fillGradientStops(t) {
    console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText");
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(t) {
    console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText");
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(t) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(t) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(t) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(t) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(t) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
ll.availableFonts = {};
ll.defaultOptions = {
  align: "left",
  breakWords: false,
  dropShadow: false,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  letterSpacing: 0,
  lineHeight: 0,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  whiteSpace: "normal",
  wordWrap: false,
  wordWrapWidth: 100
};
let oh = ll;
const Ys = class nn extends Lr {
  constructor(t = "", e = {}) {
    super(ut.EMPTY);
    this._text = null;
    this._style = null;
    this._autoResolution = true;
    this.localStyleID = -1;
    this.dirty = false;
    this._updateID = 0;
    this.ownsStyle = false;
    const r = new Image();
    const n = ut.from(r, {
      scaleMode: st.SCALE_MODE,
      resourceOptions: {
        autoLoad: false
      }
    });
    n.orig = new At();
    n.trim = new At();
    this.texture = n;
    const s = "http://www.w3.org/2000/svg";
    const a = "http://www.w3.org/1999/xhtml";
    const o = document.createElementNS(s, "svg");
    const l = document.createElementNS(s, "foreignObject");
    const c = document.createElementNS(a, "div");
    const p = document.createElementNS(a, "style");
    l.setAttribute("width", "10000");
    l.setAttribute("height", "10000");
    l.style.overflow = "hidden";
    o.appendChild(l);
    this.maxWidth = nn.defaultMaxWidth;
    this.maxHeight = nn.defaultMaxHeight;
    this._domElement = c;
    this._styleElement = p;
    this._svgRoot = o;
    this._foreignObject = l;
    this._foreignObject.appendChild(p);
    this._foreignObject.appendChild(c);
    this._image = r;
    this._loadImage = new Image();
    this._autoResolution = nn.defaultAutoResolution;
    this._resolution = nn.defaultResolution ?? st.RESOLUTION;
    this.text = t;
    this.style = e;
  }
  measureText(t) {
    var p;
    var g;
    const {
      text: e,
      style: r,
      resolution: n
    } = Object.assign({
      text: this._text,
      style: this._style,
      resolution: this._resolution
    }, t);
    Object.assign(this._domElement, {
      innerHTML: e,
      style: r.toCSS(n)
    });
    this._styleElement.textContent = r.toGlobalCSS();
    document.body.appendChild(this._svgRoot);
    const s = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const {
      width: a,
      height: o
    } = s;
    if (a > this.maxWidth || o > this.maxHeight) {
      console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
    }
    const l = Math.min(this.maxWidth, Math.ceil(a));
    const c = Math.min(this.maxHeight, Math.ceil(o));
    this._svgRoot.setAttribute("width", l.toString());
    this._svgRoot.setAttribute("height", c.toString());
    if (e !== this._text) {
      this._domElement.innerHTML = this._text;
    }
    if (r !== this._style) {
      Object.assign(this._domElement, {
        style: (p = this._style) == null ? undefined : p.toCSS(n)
      });
      this._styleElement.textContent = (g = this._style) == null ? undefined : g.toGlobalCSS();
    }
    return {
      width: l + r.padding * 2,
      height: c + r.padding * 2
    };
  }
  async updateText(t = true) {
    const {
      style: e,
      _image: r,
      _loadImage: n
    } = this;
    if (this.localStyleID !== e.styleID) {
      this.dirty = true;
      this.localStyleID = e.styleID;
    }
    if (!this.dirty && t) {
      return;
    }
    const {
      width: s,
      height: a
    } = this.measureText();
    r.width = n.width = Math.ceil(Math.max(1, s));
    r.height = n.height = Math.ceil(Math.max(1, a));
    this._updateID++;
    const o = this._updateID;
    await new Promise(l => {
      n.onload = async () => {
        if (o < this._updateID) {
          l();
          return;
        }
        await e.onBeforeDraw();
        r.src = n.src;
        n.onload = null;
        n.src = "";
        this.updateTexture();
        l();
      };
      const c = new XMLSerializer().serializeToString(this._svgRoot);
      n.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(c)}`;
    });
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    const {
      style: t,
      texture: e,
      _image: r,
      resolution: n
    } = this;
    const {
      padding: s
    } = t;
    const {
      baseTexture: a
    } = e;
    e.trim.width = e._frame.width = r.width / n;
    e.trim.height = e._frame.height = r.height / n;
    e.trim.x = -s;
    e.trim.y = -s;
    e.orig.width = e._frame.width - s * 2;
    e.orig.height = e._frame.height - s * 2;
    this._onTextureUpdate();
    a.setRealSize(r.width, r.height, n);
    this.dirty = false;
  }
  _render(t) {
    if (this._autoResolution && this._resolution !== t.resolution) {
      this._resolution = t.resolution;
      this.dirty = true;
    }
    this.updateText(true);
    super._render(t);
  }
  _renderCanvas(t) {
    if (this._autoResolution && this._resolution !== t.resolution) {
      this._resolution = t.resolution;
      this.dirty = true;
    }
    this.updateText(true);
    super._renderCanvas(t);
  }
  getLocalBounds(t) {
    this.updateText(true);
    return super.getLocalBounds(t);
  }
  _calculateBounds() {
    this.updateText(true);
    this.calculateVertices();
    this._bounds.addQuad(this.vertexData);
  }
  _onStyleChange() {
    this.dirty = true;
  }
  destroy(t) {
    var r;
    var n;
    var s;
    var a;
    var o;
    if (typeof t == "boolean") {
      t = {
        children: t
      };
    }
    t = Object.assign({}, nn.defaultDestroyOptions, t);
    super.destroy(t);
    const e = null;
    if (this.ownsStyle) {
      if ((r = this._style) != null) {
        r.cleanFonts();
      }
    }
    this._style = e;
    if ((n = this._svgRoot) != null) {
      n.remove();
    }
    this._svgRoot = e;
    if ((s = this._domElement) != null) {
      s.remove();
    }
    this._domElement = e;
    if ((a = this._foreignObject) != null) {
      a.remove();
    }
    this._foreignObject = e;
    if ((o = this._styleElement) != null) {
      o.remove();
    }
    this._styleElement = e;
    this._loadImage.src = "";
    this._loadImage.onload = null;
    this._loadImage = e;
    this._image.src = "";
    this._image = e;
  }
  get width() {
    this.updateText(true);
    return Math.abs(this.scale.x) * this._image.width / this.resolution;
  }
  set width(t) {
    this.updateText(true);
    const e = Xr(this.scale.x) || 1;
    this.scale.x = e * t / this._image.width / this.resolution;
    this._width = t;
  }
  get height() {
    this.updateText(true);
    return Math.abs(this.scale.y) * this._image.height / this.resolution;
  }
  set height(t) {
    this.updateText(true);
    const e = Xr(this.scale.y) || 1;
    this.scale.y = e * t / this._image.height / this.resolution;
    this._height = t;
  }
  get style() {
    return this._style;
  }
  set style(t) {
    if (this._style !== t) {
      t = t || {};
      if (t instanceof oh) {
        this.ownsStyle = false;
        this._style = t;
      } else if (t instanceof ui) {
        console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle");
        this.ownsStyle = true;
        this._style = oh.from(t);
      } else {
        this.ownsStyle = true;
        this._style = new oh(t);
      }
      this.localStyleID = -1;
      this.dirty = true;
    }
  }
  get text() {
    return this._text;
  }
  set text(t) {
    t = String(t === "" || t === null || t === undefined ? " " : t);
    t = this.sanitiseText(t);
    if (this._text !== t) {
      this._text = t;
      this.dirty = true;
    }
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._autoResolution = false;
    if (this._resolution !== t) {
      this._resolution = t;
      this.dirty = true;
    }
  }
  sanitiseText(t) {
    return t.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;");
  }
};
Ys.defaultDestroyOptions = {
  texture: true,
  children: false,
  baseTexture: true
};
Ys.defaultMaxWidth = 2024;
Ys.defaultMaxHeight = 2024;
Ys.defaultAutoResolution = true;
const ei = new At();
class Zf {
  constructor(t) {
    this.renderer = t;
  }
  async image(t, e, r, n) {
    const s = new Image();
    s.src = await this.base64(t, e, r, n);
    return s;
  }
  async base64(t, e, r, n) {
    const s = this.canvas(t, n);
    if (s.toBlob !== undefined) {
      return new Promise((a, o) => {
        s.toBlob(l => {
          if (!l) {
            o(new Error("ICanvas.toBlob failed!"));
            return;
          }
          const c = new FileReader();
          c.onload = () => a(c.result);
          c.onerror = o;
          c.readAsDataURL(l);
        }, e, r);
      });
    }
    if (s.toDataURL !== undefined) {
      return s.toDataURL(e, r);
    }
    if (s.convertToBlob !== undefined) {
      const a = await s.convertToBlob({
        type: e,
        quality: r
      });
      return new Promise((o, l) => {
        const c = new FileReader();
        c.onload = () => o(c.result);
        c.onerror = l;
        c.readAsDataURL(a);
      });
    }
    throw new Error("CanvasExtract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  canvas(t, e) {
    const r = this.renderer;
    if (!r) {
      throw new Error("The CanvasExtract has already been destroyed");
    }
    let n;
    let s;
    let a;
    if (t) {
      if (t instanceof Or) {
        a = t;
      } else {
        a = r.generateTexture(t, {
          region: e,
          resolution: r.resolution
        });
        if (e) {
          ei.width = e.width;
          ei.height = e.height;
          e = ei;
        }
      }
    }
    if (a) {
      n = a.baseTexture._canvasRenderTarget.context;
      s = a.baseTexture._canvasRenderTarget.resolution;
      e = e ?? a.frame;
    } else {
      n = r.canvasContext.rootContext;
      s = r._view.resolution;
      if (!e) {
        e = ei;
        e.width = r.width / s;
        e.height = r.height / s;
      }
    }
    const o = Math.round(e.x * s);
    const l = Math.round(e.y * s);
    const c = Math.max(Math.round(e.width * s), 1);
    const p = Math.max(Math.round(e.height * s), 1);
    const g = new us(c, p, 1);
    const f = n.getImageData(o, l, c, p);
    g.context.putImageData(f, 0, 0);
    return g.canvas;
  }
  pixels(t, e) {
    const r = this.renderer;
    if (!r) {
      throw new Error("The CanvasExtract has already been destroyed");
    }
    let n;
    let s;
    let a;
    if (t) {
      if (t instanceof Or) {
        a = t;
      } else {
        a = r.generateTexture(t, {
          region: e,
          resolution: r.resolution
        });
        if (e) {
          ei.width = e.width;
          ei.height = e.height;
          e = ei;
        }
      }
    }
    if (a) {
      n = a.baseTexture._canvasRenderTarget.context;
      s = a.baseTexture._canvasRenderTarget.resolution;
      e = e ?? a.frame;
    } else {
      n = r.canvasContext.rootContext;
      s = r.resolution;
      if (!e) {
        e = ei;
        e.width = r.width / s;
        e.height = r.height / s;
      }
    }
    const o = Math.round(e.x * s);
    const l = Math.round(e.y * s);
    const c = Math.max(Math.round(e.width * s), 1);
    const p = Math.max(Math.round(e.height * s), 1);
    return n.getImageData(o, l, c, p).data;
  }
  destroy() {
    this.renderer = null;
  }
}
Zf.extension = {
  name: "extract",
  type: rt.CanvasRendererSystem
};
ot.add(Zf);
let hh;
const Hn = new jt();
fs.prototype.generateCanvasTexture = function (i, t = 1) {
  const e = this.getLocalBounds(new At());
  e.width = Math.max(e.width, 1 / t);
  e.height = Math.max(e.height, 1 / t);
  const r = Or.create({
    width: e.width,
    height: e.height,
    scaleMode: i,
    resolution: t
  });
  hh ||= new Wa();
  this.transform.updateLocalTransform();
  this.transform.localTransform.copyTo(Hn);
  Hn.invert();
  Hn.tx -= e.x;
  Hn.ty -= e.y;
  hh.render(this, {
    renderTexture: r,
    clear: true,
    transform: Hn
  });
  const n = ut.from(r.baseTexture._canvasRenderTarget.canvas, {
    scaleMode: i
  });
  n.baseTexture.setResolution(t);
  return n;
};
fs.prototype.cachedGraphicsData = [];
fs.prototype._renderCanvas = function (i) {
  if (this.isMask !== true) {
    this.finishPoly();
    i.plugins.graphics.render(this);
  }
};
class ss {
  static offsetPolygon(t, e) {
    const r = [];
    const n = t.length;
    e = ss.isPolygonClockwise(t) ? e : e * -1;
    for (let s = 0; s < n; s += 2) {
      let a = s - 2;
      if (a < 0) {
        a += n;
      }
      const o = (s + 2) % n;
      let l = t[s] - t[a];
      let c = t[s + 1] - t[a + 1];
      let p = Math.sqrt(l * l + c * c);
      l /= p;
      c /= p;
      l *= e;
      c *= e;
      const g = -c;
      const f = l;
      const v = [t[a] + g, t[a + 1] + f];
      const _ = [t[s] + g, t[s + 1] + f];
      let T = t[o] - t[s];
      let A = t[o + 1] - t[s + 1];
      p = Math.sqrt(T * T + A * A);
      T /= p;
      A /= p;
      T *= e;
      A *= e;
      const E = -A;
      const I = T;
      const S = [t[s] + E, t[s + 1] + I];
      const P = [t[o] + E, t[o + 1] + I];
      const k = ss.findIntersection(v[0], v[1], _[0], _[1], S[0], S[1], P[0], P[1]);
      if (k) {
        r.push(...k);
      }
    }
    return r;
  }
  static findIntersection(t, e, r, n, s, a, o, l) {
    const c = (l - a) * (r - t) - (o - s) * (n - e);
    const p = (o - s) * (e - a) - (l - a) * (t - s);
    const g = (r - t) * (e - a) - (n - e) * (t - s);
    if (c === 0) {
      if (p === 0 && g === 0) {
        return [(t + r) / 2, (e + n) / 2];
      } else {
        return null;
      }
    }
    const f = p / c;
    return [t + f * (r - t), e + f * (n - e)];
  }
  static isPolygonClockwise(t) {
    let e = 0;
    for (let r = 0, n = t.length - 2; r < t.length; n = r, r += 2) {
      e += (t[r] - t[n]) * (t[r + 1] + t[n + 1]);
    }
    return e > 0;
  }
}
class Qf {
  constructor(t) {
    this._svgMatrix = null;
    this._tempMatrix = new jt();
    this.renderer = t;
  }
  _calcCanvasStyle(t, e) {
    let r;
    if (t.texture && t.texture.baseTexture !== ut.WHITE.baseTexture) {
      if (t.texture.valid) {
        r = _e.getTintedPattern(t.texture, e);
        this.setPatternTransform(r, t.matrix || jt.IDENTITY);
      } else {
        r = "#808080";
      }
    } else {
      r = `#${`00000${(e | 0).toString(16)}`.slice(-6)}`;
    }
    return r;
  }
  render(t) {
    const e = this.renderer;
    const r = e.canvasContext.activeContext;
    const n = t.worldAlpha;
    const s = t.transform.worldTransform;
    e.canvasContext.setContextTransform(s);
    e.canvasContext.setBlendMode(t.blendMode);
    const a = t.geometry.graphicsData;
    let o;
    let l;
    const c = Pt.shared.setValue(t.tint).toArray();
    for (let p = 0; p < a.length; p++) {
      const g = a[p];
      const f = g.shape;
      const v = g.fillStyle;
      const _ = g.lineStyle;
      const T = g.fillStyle.color | 0;
      const A = g.lineStyle.color | 0;
      if (g.matrix) {
        e.canvasContext.setContextTransform(s.copyTo(this._tempMatrix).append(g.matrix));
      }
      if (v.visible) {
        o = this._calcCanvasStyle(v, Pt.shared.setValue(T).multiply(c).toNumber());
      }
      if (_.visible) {
        l = this._calcCanvasStyle(_, Pt.shared.setValue(A).multiply(c).toNumber());
      }
      r.lineWidth = _.width;
      r.lineCap = _.cap;
      r.lineJoin = _.join;
      r.miterLimit = _.miterLimit;
      if (g.type === Zt.POLY) {
        r.beginPath();
        const E = f;
        let I = E.points;
        const S = g.holes;
        let P;
        let k;
        let V;
        let d;
        let O;
        r.moveTo(I[0], I[1]);
        for (let N = 2; N < I.length; N += 2) {
          r.lineTo(I[N], I[N + 1]);
        }
        if (E.closeStroke) {
          r.closePath();
        }
        if (S.length > 0) {
          O = [];
          P = 0;
          V = I[0];
          d = I[1];
          for (let N = 2; N + 2 < I.length; N += 2) {
            P += (I[N] - V) * (I[N + 3] - d) - (I[N + 2] - V) * (I[N + 1] - d);
          }
          for (let N = 0; N < S.length; N++) {
            I = S[N].shape.points;
            if (I) {
              k = 0;
              V = I[0];
              d = I[1];
              for (let z = 2; z + 2 < I.length; z += 2) {
                k += (I[z] - V) * (I[z + 3] - d) - (I[z + 2] - V) * (I[z + 1] - d);
              }
              if (k * P < 0) {
                r.moveTo(I[0], I[1]);
                for (let z = 2; z < I.length; z += 2) {
                  r.lineTo(I[z], I[z + 1]);
                }
              } else {
                r.moveTo(I[I.length - 2], I[I.length - 1]);
                for (let z = I.length - 4; z >= 0; z -= 2) {
                  r.lineTo(I[z], I[z + 1]);
                }
              }
              if (S[N].shape.closeStroke) {
                r.closePath();
              }
              O[N] = k * P < 0;
            }
          }
        }
        if (v.visible) {
          r.globalAlpha = v.alpha * n;
          r.fillStyle = o;
          r.fill();
        }
        if (_.visible) {
          this.paintPolygonStroke(E, _, l, S, O, n, r);
        }
      } else if (g.type === Zt.RECT) {
        const E = f;
        if (v.visible) {
          r.globalAlpha = v.alpha * n;
          r.fillStyle = o;
          r.fillRect(E.x, E.y, E.width, E.height);
        }
        if (_.visible) {
          const I = _.width * (0.5 - (1 - _.alignment));
          const S = E.width + I * 2;
          const P = E.height + I * 2;
          r.globalAlpha = _.alpha * n;
          r.strokeStyle = l;
          r.strokeRect(E.x - I, E.y - I, S, P);
        }
      } else if (g.type === Zt.CIRC) {
        const E = f;
        r.beginPath();
        r.arc(E.x, E.y, E.radius, 0, Math.PI * 2);
        r.closePath();
        if (v.visible) {
          r.globalAlpha = v.alpha * n;
          r.fillStyle = o;
          r.fill();
        }
        if (_.visible) {
          if (_.alignment !== 0.5) {
            const I = _.width * (0.5 - (1 - _.alignment));
            r.beginPath();
            r.arc(E.x, E.y, E.radius + I, 0, Math.PI * 2);
            r.closePath();
          }
          r.globalAlpha = _.alpha * n;
          r.strokeStyle = l;
          r.stroke();
        }
      } else if (g.type === Zt.ELIP) {
        const E = f;
        const I = _.alignment === 1;
        if (!I) {
          this.paintEllipse(E, v, _, o, n, r);
        }
        if (_.visible) {
          if (_.alignment !== 0.5) {
            const S = 0.5522848;
            const P = _.width * (0.5 - (1 - _.alignment));
            const k = (E.width + P) * 2;
            const V = (E.height + P) * 2;
            const d = E.x - k / 2;
            const O = E.y - V / 2;
            const N = k / 2 * S;
            const z = V / 2 * S;
            const J = d + k;
            const $ = O + V;
            const B = d + k / 2;
            const W = O + V / 2;
            r.beginPath();
            r.moveTo(d, W);
            r.bezierCurveTo(d, W - z, B - N, O, B, O);
            r.bezierCurveTo(B + N, O, J, W - z, J, W);
            r.bezierCurveTo(J, W + z, B + N, $, B, $);
            r.bezierCurveTo(B - N, $, d, W + z, d, W);
            r.closePath();
          }
          r.globalAlpha = _.alpha * n;
          r.strokeStyle = l;
          r.stroke();
        }
        if (I) {
          this.paintEllipse(E, v, _, o, n, r);
        }
      } else if (g.type === Zt.RREC) {
        const E = f;
        const I = _.alignment === 1;
        if (!I) {
          this.paintRoundedRectangle(E, v, _, o, n, r);
        }
        if (_.visible) {
          if (_.alignment !== 0.5) {
            const S = E.width;
            const P = E.height;
            const k = _.width * (0.5 - (1 - _.alignment));
            const V = E.x - k;
            const d = E.y - k;
            const O = E.width + k * 2;
            const N = E.height + k * 2;
            const z = k * (_.alignment >= 1 ? Math.min(O / S, N / P) : Math.min(S / O, P / N));
            let J = E.radius + z;
            const $ = Math.min(O, N) / 2;
            J = J > $ ? $ : J;
            r.beginPath();
            r.moveTo(V, d + J);
            r.lineTo(V, d + N - J);
            r.quadraticCurveTo(V, d + N, V + J, d + N);
            r.lineTo(V + O - J, d + N);
            r.quadraticCurveTo(V + O, d + N, V + O, d + N - J);
            r.lineTo(V + O, d + J);
            r.quadraticCurveTo(V + O, d, V + O - J, d);
            r.lineTo(V + J, d);
            r.quadraticCurveTo(V, d, V, d + J);
            r.closePath();
          }
          r.globalAlpha = _.alpha * n;
          r.strokeStyle = l;
          r.stroke();
        }
        if (I) {
          this.paintRoundedRectangle(E, v, _, o, n, r);
        }
      }
    }
  }
  paintPolygonStroke(t, e, r, n, s, a, o) {
    if (e.alignment !== 0.5) {
      const l = e.width * (0.5 - (1 - e.alignment));
      let c = ss.offsetPolygon(t.points, l);
      let p;
      o.beginPath();
      o.moveTo(c[0], c[1]);
      for (let g = 2; g < c.length; g += 2) {
        o.lineTo(c[g], c[g + 1]);
      }
      if (t.closeStroke) {
        o.closePath();
      }
      for (let g = 0; g < n.length; g++) {
        p = n[g].shape.points;
        c = ss.offsetPolygon(p, l);
        if (s[g]) {
          o.moveTo(c[0], c[1]);
          for (let f = 2; f < c.length; f += 2) {
            o.lineTo(c[f], c[f + 1]);
          }
        } else {
          o.moveTo(c[c.length - 2], c[c.length - 1]);
          for (let f = c.length - 4; f >= 0; f -= 2) {
            o.lineTo(c[f], c[f + 1]);
          }
        }
        if (n[g].shape.closeStroke) {
          o.closePath();
        }
      }
    }
    o.globalAlpha = e.alpha * a;
    o.strokeStyle = r;
    o.stroke();
  }
  paintEllipse(t, e, r, n, s, a) {
    const o = t.width * 2;
    const l = t.height * 2;
    const c = t.x - o / 2;
    const p = t.y - l / 2;
    const g = 0.5522848;
    const f = o / 2 * g;
    const v = l / 2 * g;
    const _ = c + o;
    const T = p + l;
    const A = c + o / 2;
    const E = p + l / 2;
    if (r.alignment === 0) {
      a.save();
    }
    a.beginPath();
    a.moveTo(c, E);
    a.bezierCurveTo(c, E - v, A - f, p, A, p);
    a.bezierCurveTo(A + f, p, _, E - v, _, E);
    a.bezierCurveTo(_, E + v, A + f, T, A, T);
    a.bezierCurveTo(A - f, T, c, E + v, c, E);
    a.closePath();
    if (r.alignment === 0) {
      a.clip();
    }
    if (e.visible) {
      a.globalAlpha = e.alpha * s;
      a.fillStyle = n;
      a.fill();
    }
    if (r.alignment === 0) {
      a.restore();
    }
  }
  paintRoundedRectangle(t, e, r, n, s, a) {
    const o = t.x;
    const l = t.y;
    const c = t.width;
    const p = t.height;
    let g = t.radius;
    const f = Math.min(c, p) / 2;
    g = g > f ? f : g;
    if (r.alignment === 0) {
      a.save();
    }
    a.beginPath();
    a.moveTo(o, l + g);
    a.lineTo(o, l + p - g);
    a.quadraticCurveTo(o, l + p, o + g, l + p);
    a.lineTo(o + c - g, l + p);
    a.quadraticCurveTo(o + c, l + p, o + c, l + p - g);
    a.lineTo(o + c, l + g);
    a.quadraticCurveTo(o + c, l, o + c - g, l);
    a.lineTo(o + g, l);
    a.quadraticCurveTo(o, l, o, l + g);
    a.closePath();
    if (r.alignment === 0) {
      a.clip();
    }
    if (e.visible) {
      a.globalAlpha = e.alpha * s;
      a.fillStyle = n;
      a.fill();
    }
    if (r.alignment === 0) {
      a.restore();
    }
  }
  setPatternTransform(t, e) {
    if (this._svgMatrix !== false) {
      if (!this._svgMatrix) {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (r != null && r.createSVGMatrix) {
          this._svgMatrix = r.createSVGMatrix();
        }
        if (!this._svgMatrix || !t.setTransform) {
          this._svgMatrix = false;
          return;
        }
      }
      this._svgMatrix.a = e.a;
      this._svgMatrix.b = e.b;
      this._svgMatrix.c = e.c;
      this._svgMatrix.d = e.d;
      this._svgMatrix.e = e.tx;
      this._svgMatrix.f = e.ty;
      t.setTransform(this._svgMatrix.inverse());
    }
  }
  destroy() {
    this.renderer = null;
    this._svgMatrix = null;
    this._tempMatrix = null;
  }
}
Qf.extension = {
  name: "graphics",
  type: rt.CanvasRendererPlugin
};
ot.add(Qf);
Object.defineProperties(st, {
  MESH_CANVAS_PADDING: {
    get() {
      return Be.defaultCanvasPadding;
    },
    set(i) {
      vt("7.1.0", "settings.MESH_CANVAS_PADDING is deprecated, use Mesh.defaultCanvasPadding");
      Be.defaultCanvasPadding = i;
    }
  }
});
_n.prototype._renderCanvas = function (i, t) {
  i.plugins.mesh.render(t);
};
Ya.prototype._cachedTint = 16777215;
Ya.prototype._tintedCanvas = null;
Ya.prototype._canvasUvs = null;
Ya.prototype._renderCanvas = function (i) {
  const t = i.canvasContext.activeContext;
  const e = this.worldTransform;
  const r = this.tintValue !== 16777215;
  const n = this.texture;
  if (!n.valid) {
    return;
  }
  if (r && this._cachedTint !== this.tintValue) {
    this._cachedTint = this.tintValue;
    this._tintedCanvas = _e.getTintedCanvas(this, this.tintValue);
  }
  const s = r ? this._tintedCanvas : n.baseTexture.getDrawableSource();
  this._canvasUvs ||= [0, 0, 0, 0, 0, 0, 0, 0];
  const a = this.vertices;
  const o = this._canvasUvs;
  const l = r ? 0 : n.frame.x;
  const c = r ? 0 : n.frame.y;
  const p = l + n.frame.width;
  const g = c + n.frame.height;
  o[0] = l;
  o[1] = l + this._leftWidth;
  o[2] = p - this._rightWidth;
  o[3] = p;
  o[4] = c;
  o[5] = c + this._topHeight;
  o[6] = g - this._bottomHeight;
  o[7] = g;
  for (let f = 0; f < 8; f++) {
    o[f] *= n.baseTexture.resolution;
  }
  t.globalAlpha = this.worldAlpha;
  i.canvasContext.setBlendMode(this.blendMode);
  i.canvasContext.setContextTransform(e, this.roundPixels);
  for (let f = 0; f < 3; f++) {
    for (let v = 0; v < 3; v++) {
      const _ = v * 2 + f * 8;
      const T = Math.max(1, o[v + 1] - o[v]);
      const A = Math.max(1, o[f + 5] - o[f + 4]);
      const E = Math.max(1, a[_ + 10] - a[_]);
      const I = Math.max(1, a[_ + 11] - a[_ + 1]);
      t.drawImage(s, o[v], o[f + 4], T, A, a[_], a[_ + 1], E, I);
    }
  }
};
let $c = false;
Be.prototype._cachedTint = 16777215;
Be.prototype._tintedCanvas = null;
Be.prototype._cachedTexture = null;
Be.prototype._renderCanvas = function (i) {
  if (this.shader.uvMatrix) {
    this.shader.uvMatrix.update();
    this.calculateUvs();
  }
  if (this.material._renderCanvas) {
    this.material._renderCanvas(i, this);
  } else if (!$c) {
    $c = true;
    globalThis.console.warn("Mesh with custom shaders are not supported in CanvasRenderer.");
  }
};
Be.prototype._canvasPadding = null;
Be.defaultCanvasPadding = 0;
Object.defineProperty(Be.prototype, "canvasPadding", {
  get() {
    return this._canvasPadding ?? Be.defaultCanvasPadding;
  },
  set(i) {
    this._canvasPadding = i;
  }
});
Ob.prototype._renderCanvas = function (i) {
  if (this.autoUpdate) {
    this.geometry.getBuffer("aVertexPosition").update();
  }
  if (this.shader.update) {
    this.shader.update();
  }
  this.calculateUvs();
  this.material._renderCanvas(i, this);
};
Nb.prototype._renderCanvas = function (i) {
  if (this.autoUpdate || this.geometry._width !== this.shader.texture.height) {
    this.geometry._width = this.shader.texture.height;
    this.geometry.update();
  }
  if (this.shader.update) {
    this.shader.update();
  }
  this.calculateUvs();
  this.material._renderCanvas(i, this);
};
class Jf {
  constructor(t) {
    this.renderer = t;
  }
  render(t) {
    const e = this.renderer;
    const r = t.worldTransform;
    e.canvasContext.activeContext.globalAlpha = t.worldAlpha;
    e.canvasContext.setBlendMode(t.blendMode);
    e.canvasContext.setContextTransform(r, t.roundPixels);
    if (t.drawMode !== or.TRIANGLES) {
      this._renderTriangleMesh(t);
    } else {
      this._renderTriangles(t);
    }
  }
  _renderTriangleMesh(t) {
    const e = t.geometry.buffers[0].data.length;
    for (let r = 0; r < e - 2; r++) {
      const n = r * 2;
      this._renderDrawTriangle(t, n, n + 2, n + 4);
    }
  }
  _renderTriangles(t) {
    const e = t.geometry.getIndex().data;
    const r = e.length;
    for (let n = 0; n < r; n += 3) {
      const s = e[n] * 2;
      const a = e[n + 1] * 2;
      const o = e[n + 2] * 2;
      this._renderDrawTriangle(t, s, a, o);
    }
  }
  _renderDrawTriangle(t, e, r, n) {
    var dt;
    const s = this.renderer.canvasContext.activeContext;
    const a = t.geometry.buffers[0].data;
    const {
      uvs: o,
      texture: l
    } = t;
    if (!l.valid) {
      return;
    }
    const c = t.tintValue !== 16777215;
    const p = l.baseTexture;
    const g = p.width;
    const f = p.height;
    if (t._cachedTexture && t._cachedTexture.baseTexture !== p) {
      t._cachedTint = 16777215;
      if ((dt = t._cachedTexture) != null) {
        dt.destroy();
      }
      t._cachedTexture = null;
      t._tintedCanvas = null;
    }
    if (c && t._cachedTint !== t.tintValue) {
      t._cachedTint = t.tintValue;
      t._cachedTexture = t._cachedTexture || new ut(p);
      t._tintedCanvas = _e.getTintedCanvas({
        texture: t._cachedTexture
      }, t.tintValue);
    }
    const v = c ? t._tintedCanvas : p.getDrawableSource();
    const _ = o[e] * p.width;
    const T = o[r] * p.width;
    const A = o[n] * p.width;
    const E = o[e + 1] * p.height;
    const I = o[r + 1] * p.height;
    const S = o[n + 1] * p.height;
    let P = a[e];
    let k = a[r];
    let V = a[n];
    let d = a[e + 1];
    let O = a[r + 1];
    let N = a[n + 1];
    const z = t.canvasPadding / this.renderer.canvasContext.activeResolution;
    if (z > 0) {
      const {
        a: Ft,
        b: Q,
        c: K,
        d: xt
      } = t.worldTransform;
      const Ct = (P + k + V) / 3;
      const It = (d + O + N) / 3;
      let kt = P - Ct;
      let Ot = d - It;
      let Mt = Ft * kt + K * Ot;
      let Vt = Q * kt + xt * Ot;
      let Yt = Math.sqrt(Mt * Mt + Vt * Vt);
      let Dt = 1 + z / Yt;
      P = Ct + kt * Dt;
      d = It + Ot * Dt;
      kt = k - Ct;
      Ot = O - It;
      Mt = Ft * kt + K * Ot;
      Vt = Q * kt + xt * Ot;
      Yt = Math.sqrt(Mt * Mt + Vt * Vt);
      Dt = 1 + z / Yt;
      k = Ct + kt * Dt;
      O = It + Ot * Dt;
      kt = V - Ct;
      Ot = N - It;
      Mt = Ft * kt + K * Ot;
      Vt = Q * kt + xt * Ot;
      Yt = Math.sqrt(Mt * Mt + Vt * Vt);
      Dt = 1 + z / Yt;
      V = Ct + kt * Dt;
      N = It + Ot * Dt;
    }
    s.save();
    s.beginPath();
    s.moveTo(P, d);
    s.lineTo(k, O);
    s.lineTo(V, N);
    s.closePath();
    s.clip();
    const J = _ * I + E * A + T * S - I * A - E * T - _ * S;
    const $ = P * I + E * V + k * S - I * V - E * k - P * S;
    const B = _ * k + P * A + T * V - k * A - P * T - _ * V;
    const W = _ * I * V + E * k * A + P * T * S - P * I * A - E * T * V - _ * k * S;
    const tt = d * I + E * N + O * S - I * N - E * O - d * S;
    const at = _ * O + d * A + T * N - O * A - d * T - _ * N;
    const nt = _ * I * N + E * O * A + d * T * S - d * I * A - E * T * N - _ * O * S;
    s.transform($ / J, tt / J, B / J, at / J, W / J, nt / J);
    s.drawImage(v, 0, 0, g * p.resolution, f * p.resolution, 0, 0, g, f);
    s.restore();
    this.renderer.canvasContext.invalidateBlendMode();
  }
  renderMeshFlat(t) {
    const e = this.renderer.canvasContext.activeContext;
    const r = t.geometry.getBuffer("aVertexPosition").data;
    const n = r.length / 2;
    e.beginPath();
    for (let s = 1; s < n - 2; ++s) {
      const a = s * 2;
      const o = r[a];
      const l = r[a + 1];
      const c = r[a + 2];
      const p = r[a + 3];
      const g = r[a + 4];
      const f = r[a + 5];
      e.moveTo(o, l);
      e.lineTo(c, p);
      e.lineTo(g, f);
    }
    e.fillStyle = "#FF0000";
    e.fill();
    e.closePath();
  }
  destroy() {
    this.renderer = null;
  }
}
Jf.extension = {
  name: "mesh",
  type: rt.CanvasRendererPlugin
};
ot.add(Jf);
const Vc = 16;
function n1(i, t) {
  const e = i;
  if (t instanceof Tt) {
    const r = t.source;
    const n = r.width === 0 ? e.canvas.width : Math.min(e.canvas.width, r.width);
    const s = r.height === 0 ? e.canvas.height : Math.min(e.canvas.height, r.height);
    e.ctx.drawImage(r, 0, 0, n, s, 0, 0, e.canvas.width, e.canvas.height);
    return true;
  }
  return false;
}
class tp extends Aa {
  constructor(t) {
    super(t);
    this.uploadHookHelper = this;
    this.canvas = st.ADAPTER.createCanvas(Vc, Vc);
    this.ctx = this.canvas.getContext("2d");
    this.registerUploadHook(n1);
  }
  destroy() {
    super.destroy();
    this.ctx = null;
    this.canvas = null;
  }
}
tp.extension = {
  name: "prepare",
  type: rt.CanvasRendererSystem
};
ot.add(tp);
Lr.prototype._tintedCanvas = null;
Lr.prototype._renderCanvas = function (i) {
  i.plugins.sprite.render(this);
};
const Wc = new jt();
class ep {
  constructor(t) {
    this.renderer = t;
  }
  render(t) {
    const e = t._texture;
    const r = this.renderer;
    const n = r.canvasContext.activeContext;
    const s = r.canvasContext.activeResolution;
    if (!e.valid) {
      return;
    }
    const a = e._frame.width;
    const o = e._frame.height;
    let l = e._frame.width;
    let c = e._frame.height;
    if (e.trim) {
      l = e.trim.width;
      c = e.trim.height;
    }
    let p = t.transform.worldTransform;
    let g = 0;
    let f = 0;
    const v = e.baseTexture.getDrawableSource();
    if (e.orig.width <= 0 || e.orig.height <= 0 || !e.valid || !v) {
      return;
    }
    r.canvasContext.setBlendMode(t.blendMode, true);
    n.globalAlpha = t.worldAlpha;
    const _ = e.baseTexture.scaleMode === hr.LINEAR;
    const T = r.canvasContext.smoothProperty;
    if (T && n[T] !== _) {
      n[T] = _;
    }
    if (e.trim) {
      g = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width;
      f = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height;
    } else {
      g = (0.5 - t.anchor.x) * e.orig.width;
      f = (0.5 - t.anchor.y) * e.orig.height;
    }
    if (e.rotate) {
      p.copyTo(Wc);
      p = Wc;
      ee.matrixAppendRotationInv(p, e.rotate, g, f);
      g = 0;
      f = 0;
    }
    g -= l / 2;
    f -= c / 2;
    r.canvasContext.setContextTransform(p, t.roundPixels, 1);
    if (t.roundPixels) {
      g = g | 0;
      f = f | 0;
    }
    const A = e.baseTexture.resolution;
    const E = r.canvasContext._outerBlend;
    if (E) {
      n.save();
      n.beginPath();
      n.rect(g * s, f * s, l * s, c * s);
      n.clip();
    }
    if (t.tint !== 16777215) {
      if (t._cachedTint !== t.tintValue || t._tintedCanvas.tintId !== t._texture._updateID) {
        t._cachedTint = t.tintValue;
        t._tintedCanvas = _e.getTintedCanvas(t, t.tintValue);
      }
      n.drawImage(t._tintedCanvas, 0, 0, Math.floor(a * A), Math.floor(o * A), Math.floor(g * s), Math.floor(f * s), Math.floor(l * s), Math.floor(c * s));
    } else {
      n.drawImage(v, e._frame.x * A, e._frame.y * A, Math.floor(a * A), Math.floor(o * A), Math.floor(g * s), Math.floor(f * s), Math.floor(l * s), Math.floor(c * s));
    }
    if (E) {
      n.restore();
    }
    r.canvasContext.setBlendMode(q.NORMAL);
  }
  destroy() {
    this.renderer = null;
  }
}
ep.extension = {
  name: "sprite",
  type: rt.CanvasRendererPlugin
};
ot.add(ep);
var Ml = {
  byteLength: o1,
  toByteArray: l1,
  fromByteArray: d1
};
var Rr = [];
var ze = [];
var s1 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var lh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ki = 0, a1 = lh.length; Ki < a1; ++Ki) {
  Rr[Ki] = lh[Ki];
  ze[lh.charCodeAt(Ki)] = Ki;
}
ze[45] = 62;
ze[95] = 63;
function rp(i) {
  var t = i.length;
  if (t % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var e = i.indexOf("=");
  if (e === -1) {
    e = t;
  }
  var r = e === t ? 0 : 4 - e % 4;
  return [e, r];
}
function o1(i) {
  var t = rp(i);
  var e = t[0];
  var r = t[1];
  return (e + r) * 3 / 4 - r;
}
function h1(i, t, e) {
  return (t + e) * 3 / 4 - e;
}
function l1(i) {
  var t;
  var e = rp(i);
  var r = e[0];
  var n = e[1];
  var s = new s1(h1(i, r, n));
  var a = 0;
  var o = n > 0 ? r - 4 : r;
  var l;
  for (l = 0; l < o; l += 4) {
    t = ze[i.charCodeAt(l)] << 18 | ze[i.charCodeAt(l + 1)] << 12 | ze[i.charCodeAt(l + 2)] << 6 | ze[i.charCodeAt(l + 3)];
    s[a++] = t >> 16 & 255;
    s[a++] = t >> 8 & 255;
    s[a++] = t & 255;
  }
  if (n === 2) {
    t = ze[i.charCodeAt(l)] << 2 | ze[i.charCodeAt(l + 1)] >> 4;
    s[a++] = t & 255;
  }
  if (n === 1) {
    t = ze[i.charCodeAt(l)] << 10 | ze[i.charCodeAt(l + 1)] << 4 | ze[i.charCodeAt(l + 2)] >> 2;
    s[a++] = t >> 8 & 255;
    s[a++] = t & 255;
  }
  return s;
}
function u1(i) {
  return Rr[i >> 18 & 63] + Rr[i >> 12 & 63] + Rr[i >> 6 & 63] + Rr[i & 63];
}
function c1(i, t, e) {
  var r;
  var n = [];
  for (var s = t; s < e; s += 3) {
    r = (i[s] << 16 & 16711680) + (i[s + 1] << 8 & 65280) + (i[s + 2] & 255);
    n.push(u1(r));
  }
  return n.join("");
}
function d1(i) {
  var t;
  var e = i.length;
  var r = e % 3;
  var n = [];
  for (var s = 16383, a = 0, o = e - r; a < o; a += s) {
    n.push(c1(i, a, a + s > o ? o : a + s));
  }
  if (r === 1) {
    t = i[e - 1];
    n.push(Rr[t >> 2] + Rr[t << 4 & 63] + "==");
  } else if (r === 2) {
    t = (i[e - 2] << 8) + i[e - 1];
    n.push(Rr[t >> 10] + Rr[t >> 4 & 63] + Rr[t << 2 & 63] + "=");
  }
  return n.join("");
}
var ip = {
  exports: {}
};
(function (i) {
  (function (t) {
    function e(f, v, _) {
      var T = f instanceof ArrayBuffer || typeof Buffer !== "undefined" && f instanceof Buffer;
      if (!T) {
        throw new Error("Must specify a valid ArrayBuffer or Buffer.");
      }
      v = v || 0;
      _ = _ || f.byteLength || f.length;
      this._view = new Uint8Array(f.buffer || f, v, _);
      this.bigEndian = false;
    }
    e._scratch = new DataView(new ArrayBuffer(8));
    Object.defineProperty(e.prototype, "buffer", {
      get: function () {
        if (typeof Buffer !== "undefined") {
          return Buffer.from(this._view.buffer);
        } else {
          return this._view.buffer;
        }
      },
      enumerable: true,
      configurable: false
    });
    Object.defineProperty(e.prototype, "byteLength", {
      get: function () {
        return this._view.length;
      },
      enumerable: true,
      configurable: false
    });
    e.prototype._setBit = function (f, v) {
      if (v) {
        this._view[f >> 3] |= 1 << (f & 7);
      } else {
        this._view[f >> 3] &= ~(1 << (f & 7));
      }
    };
    e.prototype.getBits = function (f, v, _) {
      var T = this._view.length * 8 - f;
      if (v > T) {
        throw new Error("Cannot get " + v + " bit(s) from offset " + f + ", " + T + " available");
      }
      var A = 0;
      for (var E = 0; E < v;) {
        var I = v - E;
        var S = f & 7;
        var P = this._view[f >> 3];
        var k = Math.min(I, 8 - S);
        var V;
        var d;
        if (this.bigEndian) {
          V = ~(255 << k);
          d = P >> 8 - k - S & V;
          A <<= k;
          A |= d;
        } else {
          V = ~(255 << k);
          d = P >> S & V;
          A |= d << E;
        }
        f += k;
        E += k;
      }
      if (_) {
        if (v !== 32 && A & 1 << v - 1) {
          A |= (1 << v) - 1 ^ -1;
        }
        return A;
      } else {
        return A >>> 0;
      }
    };
    e.prototype.setBits = function (f, v, _) {
      var T = this._view.length * 8 - f;
      if (_ > T) {
        throw new Error("Cannot set " + _ + " bit(s) from offset " + f + ", " + T + " available");
      }
      for (var A = 0; A < _;) {
        var E = _ - A;
        var I = f & 7;
        var S = f >> 3;
        var P = Math.min(E, 8 - I);
        var k;
        var V;
        var d;
        if (this.bigEndian) {
          k = ~(-1 << P);
          V = v >> _ - A - P & k;
          var O = 8 - I - P;
          d = ~(k << O);
          this._view[S] = this._view[S] & d | V << O;
        } else {
          k = ~(255 << P);
          V = v & k;
          v >>= P;
          d = ~(k << I);
          this._view[S] = this._view[S] & d | V << I;
        }
        f += P;
        A += P;
      }
    };
    e.prototype.getBoolean = function (f) {
      return this.getBits(f, 1, false) !== 0;
    };
    e.prototype.getInt8 = function (f) {
      return this.getBits(f, 8, true);
    };
    e.prototype.getUint8 = function (f) {
      return this.getBits(f, 8, false);
    };
    e.prototype.getInt16 = function (f) {
      return this.getBits(f, 16, true);
    };
    e.prototype.getUint16 = function (f) {
      return this.getBits(f, 16, false);
    };
    e.prototype.getInt32 = function (f) {
      return this.getBits(f, 32, true);
    };
    e.prototype.getUint32 = function (f) {
      return this.getBits(f, 32, false);
    };
    e.prototype.getFloat32 = function (f) {
      e._scratch.setUint32(0, this.getUint32(f));
      return e._scratch.getFloat32(0);
    };
    e.prototype.getFloat64 = function (f) {
      e._scratch.setUint32(0, this.getUint32(f));
      e._scratch.setUint32(4, this.getUint32(f + 32));
      return e._scratch.getFloat64(0);
    };
    e.prototype.setBoolean = function (f, v) {
      this.setBits(f, v ? 1 : 0, 1);
    };
    e.prototype.setInt8 = e.prototype.setUint8 = function (f, v) {
      this.setBits(f, v, 8);
    };
    e.prototype.setInt16 = e.prototype.setUint16 = function (f, v) {
      this.setBits(f, v, 16);
    };
    e.prototype.setInt32 = e.prototype.setUint32 = function (f, v) {
      this.setBits(f, v, 32);
    };
    e.prototype.setFloat32 = function (f, v) {
      e._scratch.setFloat32(0, v);
      this.setBits(f, e._scratch.getUint32(0), 32);
    };
    e.prototype.setFloat64 = function (f, v) {
      e._scratch.setFloat64(0, v);
      this.setBits(f, e._scratch.getUint32(0), 32);
      this.setBits(f + 32, e._scratch.getUint32(4), 32);
    };
    e.prototype.getArrayBuffer = function (f, v) {
      var _ = new Uint8Array(v);
      for (var T = 0; T < v; T++) {
        _[T] = this.getUint8(f + T * 8);
      }
      return _;
    };
    function r(f, v) {
      return function () {
        if (this._index + v > this._length) {
          throw new Error("Trying to read past the end of the stream");
        }
        var _ = this._view[f](this._index);
        this._index += v;
        return _;
      };
    }
    function n(f, v) {
      return function (_) {
        this._view[f](this._index, _);
        this._index += v;
      };
    }
    function s(f, v) {
      return o(f, v, false);
    }
    function a(f, v) {
      return o(f, v, true);
    }
    function o(f, v, _) {
      if (v === 0) {
        return "";
      }
      var T = 0;
      var A = [];
      var E = true;
      var I = !!v;
      for (v ||= Math.floor((f._length - f._index) / 8); T < v;) {
        var S = f.readUint8();
        if (S === 0 && (E = false, !I)) {
          break;
        }
        if (E) {
          A.push(S);
        }
        T++;
      }
      var P = String.fromCharCode.apply(null, A);
      if (_) {
        try {
          return decodeURIComponent(escape(P));
        } catch {
          return P;
        }
      } else {
        return P;
      }
    }
    function l(f, v, _) {
      for (var T = _ || v.length + 1, A = 0; A < T; A++) {
        f.writeUint8(A < v.length ? v.charCodeAt(A) : 0);
      }
    }
    function c(f, v, _) {
      var T = p(v);
      for (var A = _ || T.length + 1, E = 0; E < A; E++) {
        f.writeUint8(E < T.length ? T[E] : 0);
      }
    }
    function p(f) {
      var v = [];
      var _;
      var T;
      for (_ = 0; _ < f.length; _++) {
        T = f.charCodeAt(_);
        if (T <= 127) {
          v.push(T);
        } else if (T <= 2047) {
          v.push(T >> 6 | 192);
          v.push(T & 63 | 128);
        } else if (T <= 65535) {
          v.push(T >> 12 | 224);
          v.push(T >> 6 & 63 | 128);
          v.push(T & 63 | 128);
        } else {
          v.push(T >> 18 | 240);
          v.push(T >> 12 & 63 | 128);
          v.push(T >> 6 & 63 | 128);
          v.push(T & 63 | 128);
        }
      }
      return v;
    }
    function g(f, v, _) {
      var T = f instanceof ArrayBuffer || typeof Buffer !== "undefined" && f instanceof Buffer;
      if (!(f instanceof e) && !T) {
        throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
      }
      if (T) {
        this._view = new e(f, v, _);
      } else {
        this._view = f;
      }
      this._index = 0;
      this._startIndex = 0;
      this._length = this._view.byteLength * 8;
    }
    Object.defineProperty(g.prototype, "index", {
      get: function () {
        return this._index - this._startIndex;
      },
      set: function (f) {
        this._index = f + this._startIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(g.prototype, "length", {
      get: function () {
        return this._length - this._startIndex;
      },
      set: function (f) {
        this._length = f + this._startIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(g.prototype, "bitsLeft", {
      get: function () {
        return this._length - this._index;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(g.prototype, "byteIndex", {
      get: function () {
        return Math.ceil(this._index / 8);
      },
      set: function (f) {
        this._index = f * 8;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(g.prototype, "buffer", {
      get: function () {
        return this._view.buffer;
      },
      enumerable: true,
      configurable: false
    });
    Object.defineProperty(g.prototype, "view", {
      get: function () {
        return this._view;
      },
      enumerable: true,
      configurable: false
    });
    Object.defineProperty(g.prototype, "bigEndian", {
      get: function () {
        return this._view.bigEndian;
      },
      set: function (f) {
        this._view.bigEndian = f;
      },
      enumerable: true,
      configurable: false
    });
    g.prototype.readBits = function (f, v) {
      var _ = this._view.getBits(this._index, f, v);
      this._index += f;
      return _;
    };
    g.prototype.writeBits = function (f, v) {
      this._view.setBits(this._index, f, v);
      this._index += v;
    };
    g.prototype.readBoolean = r("getBoolean", 1);
    g.prototype.readInt8 = r("getInt8", 8);
    g.prototype.readUint8 = r("getUint8", 8);
    g.prototype.readInt16 = r("getInt16", 16);
    g.prototype.readUint16 = r("getUint16", 16);
    g.prototype.readInt32 = r("getInt32", 32);
    g.prototype.readUint32 = r("getUint32", 32);
    g.prototype.readFloat32 = r("getFloat32", 32);
    g.prototype.readFloat64 = r("getFloat64", 64);
    g.prototype.writeBoolean = n("setBoolean", 1);
    g.prototype.writeInt8 = n("setInt8", 8);
    g.prototype.writeUint8 = n("setUint8", 8);
    g.prototype.writeInt16 = n("setInt16", 16);
    g.prototype.writeUint16 = n("setUint16", 16);
    g.prototype.writeInt32 = n("setInt32", 32);
    g.prototype.writeUint32 = n("setUint32", 32);
    g.prototype.writeFloat32 = n("setFloat32", 32);
    g.prototype.writeFloat64 = n("setFloat64", 64);
    g.prototype.readASCIIString = function (f) {
      return s(this, f);
    };
    g.prototype.readUTF8String = function (f) {
      return a(this, f);
    };
    g.prototype.writeASCIIString = function (f, v) {
      l(this, f, v);
    };
    g.prototype.writeUTF8String = function (f, v) {
      c(this, f, v);
    };
    g.prototype.readBitStream = function (f) {
      var v = new g(this._view);
      v._startIndex = this._index;
      v._index = this._index;
      v.length = f;
      this._index += f;
      return v;
    };
    g.prototype.writeBitStream = function (f, v) {
      v ||= f.bitsLeft;
      var _;
      while (v > 0) {
        _ = Math.min(v, 32);
        this.writeBits(f.readBits(_), _);
        v -= _;
      }
    };
    g.prototype.readArrayBuffer = function (f) {
      var v = this._view.getArrayBuffer(this._index, f);
      this._index += f * 8;
      return v;
    };
    g.prototype.writeArrayBuffer = function (f, v) {
      this.writeBitStream(new g(f), v * 8);
    };
    i.exports &&= {
      BitView: e,
      BitStream: g
    };
  })();
})(ip);
var f1 = ip.exports;
const m1 = Ca(f1);
/*!
 * ==========================================================
 *  COLOR PICKER PLUGIN 1.4.2
 * ==========================================================
 * Author: Taufik Nurrohman <https://github.com/tovic>
 * License: MIT
 * ----------------------------------------------------------
 */
(function (i, t, e) {
  var r = "__instance__";
  var n = "firstChild";
  var s = setTimeout;
  function a(d) {
    return typeof d !== "undefined";
  }
  function o(d) {
    return typeof d == "string";
  }
  function l(d) {
    return typeof d == "object";
  }
  function c(d) {
    return Object.keys(d).length;
  }
  function p(d, O, N) {
    if (d < O) {
      return O;
    } else if (d > N) {
      return N;
    } else {
      return d;
    }
  }
  function g(d, O) {
    return parseInt(d, O);
  }
  function f(d) {
    return Math.round(d);
  }
  function v(d) {
    var O = +d[0];
    var N = +d[1];
    var z = +d[2];
    var J;
    var $;
    var B;
    var W;
    var tt;
    var at;
    var nt;
    var dt;
    W = Math.floor(O * 6);
    tt = O * 6 - W;
    at = z * (1 - N);
    nt = z * (1 - tt * N);
    dt = z * (1 - (1 - tt) * N);
    W = W || 0;
    nt = nt || 0;
    dt = dt || 0;
    switch (W % 6) {
      case 0:
        J = z;
        $ = dt;
        B = at;
        break;
      case 1:
        J = nt;
        $ = z;
        B = at;
        break;
      case 2:
        J = at;
        $ = z;
        B = dt;
        break;
      case 3:
        J = at;
        $ = nt;
        B = z;
        break;
      case 4:
        J = dt;
        $ = at;
        B = z;
        break;
      case 5:
        J = z;
        $ = at;
        B = nt;
        break;
    }
    return [f(J * 255), f($ * 255), f(B * 255)];
  }
  function _(d) {
    return A(v(d));
  }
  function T(d) {
    var O = +d[0];
    var N = +d[1];
    var z = +d[2];
    var J = Math.max(O, N, z);
    var $ = Math.min(O, N, z);
    var B = J - $;
    var W;
    var tt = J === 0 ? 0 : B / J;
    var at = J / 255;
    switch (J) {
      case $:
        W = 0;
        break;
      case O:
        W = N - z + B * (N < z ? 6 : 0);
        W /= B * 6;
        break;
      case N:
        W = z - O + B * 2;
        W /= B * 6;
        break;
      case z:
        W = O - N + B * 4;
        W /= B * 6;
        break;
    }
    return [W, tt, at];
  }
  function A(d) {
    var O = +d[2] | +d[1] << 8 | +d[0] << 16;
    O = "000000" + O.toString(16);
    return O.slice(-6);
  }
  function E(d) {
    return T(I(d));
  }
  function I(d) {
    if (d.length === 3) {
      d = d.replace(/./g, "$&$&");
    }
    return [g(d[0] + d[1], 16), g(d[2] + d[3], 16), g(d[4] + d[5], 16)];
  }
  function S(d) {
    return [+d[0] / 360, +d[1] / 100, +d[2] / 100];
  }
  function P(d) {
    return [f(+d[0] * 360), f(+d[1] * 100), f(+d[2] * 100)];
  }
  function k(d) {
    return [+d[0] / 255, +d[1] / 255, +d[2] / 255];
  }
  function V(d) {
    if (l(d)) {
      return d;
    }
    var O = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(d);
    var N = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(d);
    var z = d[0] === "#" && d.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
    if (z) {
      return E(d.slice(1));
    } else if (N) {
      return S([+N[1], +N[2], +N[3]]);
    } else if (O) {
      return T([+O[1], +O[2], +O[3]]);
    } else {
      return [0, 1, 1];
    }
  }
  (function (d) {
    d.version = "1.4.2";
    d[r] = {};
    d.each = function (O, N) {
      s(function () {
        var z = d[r];
        var J;
        for (J in z) {
          O.call(z[J], J, z);
        }
      }, N === 0 ? 0 : N || 1);
      return d;
    };
    d.parse = V;
    d._HSV2RGB = v;
    d._HSV2HEX = _;
    d._RGB2HSV = T;
    d._HEX2HSV = E;
    d._HEX2RGB = function (O) {
      return k(I(O));
    };
    d.HSV2RGB = function (O) {
      return v(S(O));
    };
    d.HSV2HEX = function (O) {
      return _(S(O));
    };
    d.RGB2HSV = function (O) {
      return P(T(O));
    };
    d.RGB2HEX = A;
    d.HEX2HSV = function (O) {
      return P(E(O));
    };
    d.HEX2RGB = I;
  })(i[e] = function (d, O, N) {
    var z = t.body;
    var J = t.documentElement;
    var $ = this;
    var B = i[e];
    var W = false;
    var tt = {};
    var at = t.createElement("div");
    var nt = "touchstart mousedown";
    var dt = "touchmove mousemove";
    var Ft = "touchend mouseup";
    var Q = "orientationchange resize";
    if (!($ instanceof B)) {
      return new B(d, O);
    }
    B[r][d.id || d.name || c(B[r])] = $;
    if (!a(O) || O === true) {
      O = nt;
    }
    function K(et, St, Wt) {
      et = et.split(/\s+/);
      for (var ie = 0, le = et.length; ie < le; ++ie) {
        St.addEventListener(et[ie], Wt, false);
      }
    }
    function xt(et, St, Wt) {
      et = et.split(/\s+/);
      for (var ie = 0, le = et.length; ie < le; ++ie) {
        St.removeEventListener(et[ie], Wt);
      }
    }
    function Ct(et, St) {
      var Wt = "touches";
      var ie = "clientX";
      var le = "clientY";
      var ye = St[Wt] ? St[Wt][0][ie] : St[ie];
      var Ge = St[Wt] ? St[Wt][0][le] : St[le];
      var Gr = It(et);
      return {
        x: ye - Gr.l,
        y: Ge - Gr.t
      };
    }
    function It(et) {
      var St;
      var Wt;
      var ie;
      if (et === i) {
        St = i.pageXOffset || J.scrollLeft;
        Wt = i.pageYOffset || J.scrollTop;
      } else {
        ie = et.getBoundingClientRect();
        St = ie.left;
        Wt = ie.top;
      }
      return {
        l: St,
        t: Wt
      };
    }
    function kt(et, St) {
      while ((et = et.parentElement) && et !== St);
      return et;
    }
    function Ot(et) {
      if (et) {
        et.preventDefault();
      }
    }
    function Mt(et) {
      if (et === i) {
        return {
          w: i.innerWidth,
          h: i.innerHeight
        };
      } else {
        return {
          w: et.offsetWidth,
          h: et.offsetHeight
        };
      }
    }
    function Vt(et) {
      return W || (a(et) ? et : false);
    }
    function Yt(et) {
      W = et;
    }
    function Dt(et, St, Wt) {
      if (a(et)) {
        if (a(St)) {
          if (!a(tt[et])) {
            tt[et] = {};
          }
          if (!a(Wt)) {
            Wt = c(tt[et]);
          }
          tt[et][Wt] = St;
          return $;
        } else {
          return tt[et];
        }
      } else {
        return tt;
      }
    }
    function qt(et, St) {
      if (a(et)) {
        if (a(St)) {
          delete tt[et][St];
          return $;
        } else {
          tt[et] = {};
          return $;
        }
      } else {
        tt = {};
        return $;
      }
    }
    function _t(et, St, Wt) {
      if (!a(tt[et])) {
        return $;
      }
      if (a(Wt)) {
        if (a(tt[et][Wt])) {
          tt[et][Wt].apply($, St);
        }
      } else {
        for (var ie in tt[et]) {
          tt[et][ie].apply($, St);
        }
      }
      return $;
    }
    Yt(B.parse(d.getAttribute("data-color") || d.value || [0, 1, 1]));
    at.className = "color-picker";
    at.innerHTML = "<div class=\"color-picker-container\"><span class=\"color-picker-h\"><i></i></span><span class=\"color-picker-sv\"><i></i></span></div>";
    var Kt = at[n].children;
    var Xt = Vt([0, 1, 1]);
    var me = Kt[0];
    var Ee = Kt[1];
    var fr = me[n];
    var oe = Ee[n];
    var Tn = 0;
    var wn = 0;
    var Ni = 0;
    var Fe = 0;
    var Ze = 0;
    var Qe = 0;
    var ft = 0;
    var be = 0;
    var Ae = [_(Xt)];
    var En;
    function kr(et, St) {
      if (!et || et === "h") {
        _t("change:h", St);
      }
      if (!et || et === "sv") {
        _t("change:sv", St);
      }
      _t("change", St);
    }
    function Li() {
      return at.parentNode;
    }
    function pi(et, St) {
      if (!et) {
        (N || St || z).appendChild(at);
        $.visible = true;
      }
      ft = Mt(at).w;
      be = Mt(at).h;
      var Wt = Mt(Ee);
      var ie = Mt(oe);
      var le = Mt(me).h;
      var ye = Wt.w;
      var Ge = Wt.h;
      var Gr = Mt(fr).h;
      var Je = ie.w;
      var pr = ie.h;
      if (et) {
        let Jt = function (te) {
          var Re = te.target;
          var He = Re === d || kt(Re, d) === d;
          if (He) {
            if (!Li()) {
              pi();
              _t("enter");
            }
          } else {
            $.exit();
          }
        };
        at.style.left = at.style.top = "-9999px";
        if (O !== false) {
          K(O, d, Jt);
        }
        $.create = function () {
          pi(1);
          _t("create");
          return $;
        };
        $.destroy = function () {
          if (O !== false) {
            xt(O, d, Jt);
          }
          $.exit();
          Yt(false);
          _t("destroy");
          return $;
        };
      } else {
        Ur();
      }
      En = function () {
        Xt = Vt(Xt);
        Zr();
        fr.style.top = le - Gr / 2 - le * +Xt[0] + "px";
        oe.style.right = ye - Je / 2 - ye * +Xt[1] + "px";
        oe.style.top = Ge - pr / 2 - Ge * +Xt[2] + "px";
      };
      $.exit = function (Jt) {
        var te = Li();
        if (te) {
          te.removeChild(at);
          $.visible = false;
        }
        xt(nt, me, gs);
        xt(nt, Ee, An);
        xt(dt, t, ue);
        xt(Ft, t, ki);
        xt(Q, i, Ur);
        _t("exit");
        return $;
      };
      function Zr(Jt) {
        v(Xt);
        var te = v([Xt[0], 1, 1]);
        Ee.style.backgroundColor = "rgb(" + te.join(",") + ")";
        Yt(Xt);
        Ot(Jt);
      }
      En();
      function ps(Jt) {
        var te = p(Ct(me, Jt).y, 0, le);
        Xt[0] = (le - te) / le;
        fr.style.top = te - Gr / 2 + "px";
        Zr(Jt);
      }
      function Oe(Jt) {
        var te = Ct(Ee, Jt);
        var Re = p(te.x, 0, ye);
        var He = p(te.y, 0, Ge);
        Xt[1] = 1 - (ye - Re) / ye;
        Xt[2] = (Ge - He) / Ge;
        oe.style.right = ye - Re - Je / 2 + "px";
        oe.style.top = He - pr / 2 + "px";
        Zr(Jt);
      }
      function ue(Jt) {
        if (Ni) {
          ps(Jt);
          Ae = [_(Xt)];
          if (!Tn) {
            _t("drag:h", Ae);
            _t("drag", Ae);
            kr("h", Ae);
          }
        }
        if (Fe) {
          Oe(Jt);
          Ae = [_(Xt)];
          if (!wn) {
            _t("drag:sv", Ae);
            _t("drag", Ae);
            kr("sv", Ae);
          }
        }
        Tn = 0;
        wn = 0;
      }
      function ki(Jt) {
        var te = Jt.target;
        var Re = Ni ? "h" : "sv";
        var He = [_(Xt), $];
        var Ui = te === d || kt(te, d) === d;
        var ms = te === at || kt(te, at) === at;
        if (!Ui && !ms) {
          if (Li() && O !== false) {
            $.exit();
            kr(0, He);
          }
        } else if (ms) {
          _t("stop:" + Re, He);
          _t("stop", He);
          kr(Re, He);
        }
        Ni = 0;
        Fe = 0;
      }
      function gs(Jt) {
        Tn = 1;
        Ni = 1;
        ue(Jt);
        Ot(Jt);
        _t("start:h", Ae);
        _t("start", Ae);
        kr("h", Ae);
      }
      function An(Jt) {
        wn = 1;
        Fe = 1;
        ue(Jt);
        Ot(Jt);
        _t("start:sv", Ae);
        _t("start", Ae);
        kr("sv", Ae);
      }
      if (!et) {
        K(nt, me, gs);
        K(nt, Ee, An);
        K(dt, t, ue);
        K(Ft, t, ki);
        K(Q, i, Ur);
      }
    }
    pi(1);
    s(function () {
      var et = [_(Xt)];
      _t("create", et);
      kr(0, et);
    }, 0);
    $.fit = function (et) {
      var St = Mt(i);
      var Wt = Mt(J);
      var ie = St.w - Wt.w;
      var le = St.h - J.clientHeight;
      var ye = It(i);
      var Ge = It(d);
      Ze = Ge.l + ye.l;
      Qe = Ge.t + ye.t + Mt(d).h;
      if (l(et)) {
        if (a(et[0])) {
          Ze = et[0];
        }
        if (a(et[1])) {
          Qe = et[1];
        }
      } else {
        var Gr = ye.l;
        var Je = ye.t;
        var pr = ye.l + St.w - ft - ie;
        var Zr = ye.t + St.h - be - le;
        Ze = p(Ze, Gr, pr) >> 0;
        Qe = p(Qe, Je, Zr) >> 0;
      }
      at.style.left = Ze + "px";
      at.style.top = Qe + "px";
      _t("fit");
      return $;
    };
    function Ur() {
      return $.fit();
    }
    $.set = function (et) {
      if (a(et)) {
        if (o(et)) {
          et = B.parse(et);
        }
        Yt(et);
        En();
        return $;
      } else {
        return Vt();
      }
    };
    $.get = function (et) {
      return Vt(et);
    };
    $.source = d;
    $.self = at;
    $.visible = false;
    $.on = Dt;
    $.off = qt;
    $.fire = _t;
    $.hooks = tt;
    $.enter = function (et) {
      pi(0, et);
      _t("enter");
      return $;
    };
    return $;
  });
})(window, document, "CP");
export { p1 as $, ix as A, m1 as B, Ue as C, fs as G, Bt as P, Or as R, Lr as S, ut as T, ui as a, Sl as b, hr as c, ul as d, Ml as e, kc as f, Ye as g, Pr as i, st as s };