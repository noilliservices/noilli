(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["app"], { 0: function(e, t, n) { e.exports = n("2f39") }, "2f39": function(t, n, o) { "use strict";
            o.r(n); var a = o("967e"),
                r = o.n(a),
                u = (o("a481"), o("96cf"), o("fa84")),
                i = o.n(u),
                s = (o("7d6e"), o("e54f"), o("62f2"), o("7e6d"), o("298f"), o("2b0e")),
                c = o("b05d"),
                l = o("cb32"),
                f = o("58a8"),
                p = o("ead5"),
                d = o("079e"),
                m = o("9c40"),
                g = o("6f48"),
                b = o("f09f"),
                h = o("c859"),
                v = o("4b7e"),
                Q = o("a370"),
                _ = o("8f8e"),
                P = o("f2cc"),
                w = o("24e8"),
                I = o("0378"),
                S = o("9898"),
                j = o("0016"),
                y = o("068f"),
                k = o("27f9"),
                T = o("6ab5"),
                x = o("e208"),
                A = o("033f"),
                C = o("4d5a"),
                D = o("497d"),
                L = o("6b1d"),
                q = o("4e73"),
                M = o("9f0a"),
                $ = o("2ea3"),
                O = o("c7a0"),
                E = o("d3ab"),
                B = o("7cbe"),
                F = o("7bbf"),
                G = o("7867"),
                U = o("4983"),
                N = o("ddd8"),
                R = o("eb85"),
                V = o("7460"),
                J = o("eaac"),
                H = o("823b"),
                z = o("adad"),
                K = o("429b"),
                W = o("24a7"),
                X = o("9564"),
                Y = o("65c6"),
                Z = o("6ac5"),
                ee = o("ee89"),
                te = o("714f"),
                ne = o("7f67"),
                oe = o("2a19"),
                ae = o("436b"),
                re = o("18d6"),
                ue = o("a639");
            s["default"].use(c["a"], { config: {}, components: { QAvatar: l["a"], QBadge: f["a"], QBreadcrumbs: p["a"], QBreadcrumbsEl: d["a"], QBtn: m["a"], QBtnToggle: g["a"], QCard: b["a"], QDate: h["a"], QCardActions: v["a"], QCardSection: Q["a"], QCheckbox: _["a"], QDrawer: P["a"], QDialog: w["a"], QForm: I["a"], QHeader: S["a"], QIcon: j["a"], QImg: y["a"], QInput: k["a"], QItem: T["a"], QItemLabel: x["a"], QItemSection: A["a"], QLayout: C["a"], QList: D["a"], QLinearProgress: L["a"], QMenu: q["a"], QOptionGroup: M["a"], QPage: $["a"], QPageContainer: O["a"], QPageSticky: E["a"], QPopupProxy: B["a"], QRange: F["a"], QRouteTab: G["a"], QScrollArea: U["a"], QSelect: N["a"], QSeparator: R["a"], QTab: V["a"], QTable: J["a"], QTabPanel: H["a"], QTabPanels: z["a"], QTabs: K["a"], QTime: W["a"], QToggle: X["a"], QToolbar: Y["a"], QToolbarTitle: Z["a"], QUploader: ee["a"] }, directives: { Ripple: te["a"], ClosePopup: ne["a"] }, plugins: { Notify: oe["a"], Dialog: ae["a"], LocalStorage: re["a"], SessionStorage: ue["a"] } }); var ie = function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { attrs: { id: "q-app" } }, [n("router-view")], 1) },
                se = [],
                ce = o("0967"),
                le = { name: "App", mounted: function() { ce["a"].is.mobile ? (console.log("Mobile"), this.$q.sessionStorage.set("Mobile", !0)) : (console.log("Browser"), this.$q.sessionStorage.set("Mobile", !1)) } },
                fe = le,
                pe = o("2877"),
                de = Object(pe["a"])(fe, ie, se, !1, null, null, null),
                me = de.exports,
                ge = (o("ac6a"), o("cadf"), o("06db"), o("456d"), o("2f62"));
            o("f508");

            function be(e) { ae["a"].create({ title: "Error", message: e }) } var he = o("616b"),
                ve = o.n(he),
                Qe = { st_loggedIn: !1, st_token: "", st_user: {}, st_role: "", st_title: "" },
                _e = { mPageTitle: function(e, t) { e.st_title = t }, mAuthSuccess: function(e, t) { e.st_loggedIn = !0, e.st_token = t.id, e.st_user = t, ue["a"].set("st_loggedIn", !0), ue["a"].set("st_token", t.id), ue["a"].set("st_user", t), this.$router.push("/Profile") }, mSignup: function(e, t) { e.st_role = t, ue["a"].set("st_role", t), this.$router.push("/Secure") }, mAuthError: function(e) { e.st_token = "", e.st_user = {}, e.st_loggedIn = !1, sessionStorage.removeItem("st_token"), sessionStorage.removeItem("st_user"), sessionStorage.removeItem("st_loggedIn") }, mLogout: function(e) { e.st_token = "", e.st_user = {}, e.st_loggedIn = !1, sessionStorage.removeItem("st_token"), sessionStorage.removeItem("st_user"), sessionStorage.removeItem("st_loggedIn"), this.$router.replace("/") } },
                Pe = { aLogin: function(t, n) { var o = t.commit;
                        ve()(n).login({ scope: "openid email profile" }).then((function(t) { ve()(t.network).api("/me").then((function(e) { console.log("Profile", e), o("mAuthSuccess", e) }), (function(t) { console.log("error calling api me", e), be(t.message), this.$router.push("/") })) }), (function(t) { console.log("error calling login", e), be(t.message), this.$router.push("/") })) }, aLogout: function(e) { var t = e.commit;
                        console.log("logoutUser"), t("mLogout", {}) }, aSignup: function(e, t) { var n = e.commit;
                        console.log("Sign Up", t), n("mSignup", t) }, aPageTitle: function(e, t) { var n = e.commit;
                        console.log("Action PageTitle", t), n("mPageTitle", t) }, aSaveProject: function(e, t) { e.commit; var n = ue["a"].getItem("Projects");
                        n || (n = []), n.push(t), ue["a"].set("Projects", n), this.$router.push("/MyProject") }, aGetForm: function(e, t) { var n = this,
                            o = (e.commit, ue["a"].getItem("Projects")),
                            a = o.filter((function(e) { return e.id === n.projectId })); return a ? a[0].selectedComponents : "" }, aSaveData: function(e, t) { e.commit; var n = ue["a"].getItem("FormData");
                        n ? n.push(t) : (n = [], n.push(t)), ue["a"].set("FormData", n), this.$router.push("/MyProject") } },
                we = { gTitle: function(e) { return console.log("Called Getter title"), e.st_title }, gGetProjects: function() { var e = ue["a"].getItem("Projects"); return e } },
                Ie = { namespaced: !0, state: Qe, mutations: _e, actions: Pe, getters: we };
            s["default"].use(ge["a"]); for (var Se = { VuexStore: Ie }, je = new ge["a"].Store({ modules: Se }), ye = 0, ke = Object.keys(Se); ye < ke.length; ye++) { var Te = ke[ye];
                Se[Te].actions.init && storeModules.dispatch("".concat(Te, "/init")) } var xe = je,
                Ae = o("8c4f"),
                Ce = o("310e"),
                De = o.n(Ce),
                Le = [{ path: "/auth", component: function() { return o.e("2d0c1557").then(o.bind(null, "4632")) }, children: [{ path: "/", component: function() { return o.e("daa57ac6").then(o.bind(null, "b2c5")) }, meta: { guest: !0, title: "Login" } }, { path: "/Profile", component: function() { return o.e("2d0e542e").then(o.bind(null, "9474")) }, meta: { guest: !0, title: "Profile" } }] }, { path: "/secure", component: function() { return o.e("2d22c0ff").then(o.bind(null, "f241")) }, children: [{ path: "/", component: function() { return o.e("0b381547").then(o.bind(null, "3ee7")) }, meta: { requiresAuth: !0, title: "My Projects" } }, { path: "/DataEntry/:id", component: function() { return o.e("2d0d3136").then(o.bind(null, "5ae9")) }, props: !0, meta: { requiresAuth: !0, title: "Data Entry" } }, { path: "/FormGenerator/:id", component: function() { return o.e("15b59dfa").then(o.bind(null, "fefc")) }, props: !0, meta: { requiresAuth: !0, title: "Form Generator" } }, { path: "/ListData/:id", component: function() { return o.e("a6f55a32").then(o.bind(null, "eba2")) }, props: !0, meta: { requiresAuth: !0, title: "Data List" } }, { path: "/MyProject", component: function() { return o.e("0b381547").then(o.bind(null, "3ee7")) }, meta: { requiresAuth: !0, title: "My Project" } }, { path: "/CreateProject", component: function() { return o.e("4cf35e0b").then(o.bind(null, "e76b")) }, meta: { requiresAuth: !0, title: "Create Projects" } }, { path: "/TryOut", component: function() { return o.e("77f02229").then(o.bind(null, "1337")) }, meta: { requiresAuth: !0, title: "Try Out" } }] }, { path: "*", component: function() { return o.e("4b47640d").then(o.bind(null, "e51e")) } }],
                qe = Le,
                Me = o("ce5b"),
                $e = o.n(Me),
                Oe = o("e7ec"),
                Ee = o.n(Oe);
            s["default"].use(Ae["a"]), s["default"].use(De.a), s["default"].use(Ee.a), s["default"].use($e.a), s["default"].use(xe); var Be = function() { var e = new Ae["a"]({ scrollBehavior: function() { return { x: 0, y: 0 } }, routes: qe, mode: "hash", base: "" }); return e },
                Fe = function() { var e = "function" === typeof xe ? xe({ Vue: s["default"] }) : xe,
                        t = "function" === typeof Be ? Be({ Vue: s["default"], store: e }) : Be;
                    e.$router = t; var n = { el: "#q-app", router: t, store: e, render: function(e) { return e(me) } }; return { app: n, store: e, router: t } },
                Ge = o("1aba"),
                Ue = o("758b"),
                Ne = o.n(Ue),
                Re = function(e) { e.vue;
                    ue["a"].getItem("Mobile") ? ve.a.init({ google: "738214277404-n7is7g2dlg6fp4giuuc96b4vs192hbvg.apps.googleusercontent.com" }, { redirect_uri: "http://localhost/" }) : ve.a.init({ google: "738214277404-6nin520edm6qmjn3c7sfu81h9ftpa27g.apps.googleusercontent.com" }, { redirect_uri: "https://noilliservices.github.io/noilli/" }), s["default"].prototype.$hello = ve.a },
                Ve = function(e) { var t = e.router;
                    t.beforeEach((function(e, t, n) { document.title = e.meta.title, ue["a"].set("page_title", e.meta.title), Je(e.meta.title), console.log("Router Called", JSON.stringify(e.meta.title)); var o = ue["a"].getItem("st_loggedIn"),
                            a = ue["a"].getItem("st_user"),
                            r = ue["a"].getItem("st_token");
                        o || a || r || "/auth" === e.path ? n() : n("/auth") })) };

            function Je(e) { return He.apply(this, arguments) }

            function He() { return He = i()(r.a.mark((function e(t) { return r.a.wrap((function(e) { while (1) switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop() } }), e) }))), He.apply(this, arguments) } var ze = Fe(),
                Ke = ze.app,
                We = ze.store,
                Xe = ze.router;

            function Ye() { return Ze.apply(this, arguments) }

            function Ze() { return Ze = i()(r.a.mark((function e() { var t, n, o, a, u; return r.a.wrap((function(e) { while (1) switch (e.prev = e.next) {
                            case 0:
                                t = !0, n = function(e) { t = !1, window.location.href = e }, o = window.location.href.replace(window.location.origin, ""), a = [Ge["a"], Ne.a, Re, Ve], u = 0;
                            case 5:
                                if (!(!0 === t && u < a.length)) { e.next = 23; break } if ("function" === typeof a[u]) { e.next = 8; break } return e.abrupt("continue", 20);
                            case 8:
                                return e.prev = 8, e.next = 11, a[u]({ app: Ke, router: Xe, store: We, Vue: s["default"], ssrContext: null, redirect: n, urlPath: o });
                            case 11:
                                e.next = 20; break;
                            case 13:
                                if (e.prev = 13, e.t0 = e["catch"](8), !e.t0 || !e.t0.url) { e.next = 18; break } return window.location.href = e.t0.url, e.abrupt("return");
                            case 18:
                                return console.error("[Quasar] boot error:", e.t0), e.abrupt("return");
                            case 20:
                                u++, e.next = 5; break;
                            case 23:
                                if (!1 !== t) { e.next = 25; break } return e.abrupt("return");
                            case 25:
                                new s["default"](Ke);
                            case 26:
                            case "end":
                                return e.stop() } }), e, null, [
                        [8, 13]
                    ]) }))), Ze.apply(this, arguments) }
            Ye() }, "758b": function(e, t) {}, "7e6d": function(e, t, n) {}, a3b0: function(e, t, n) { var o = { "./de": "75b3", "./de.js": "75b3", "./en-gb": "1267", "./en-gb.js": "1267", "./en-us": "d23a", "./en-us.js": "d23a", "./es": "ec5d3", "./es-419": "1805", "./es-419.js": "1805", "./es.js": "ec5d3", "./fr": "be0b", "./fr.js": "be0b", "./it": "58dc", "./it.js": "58dc", "./pt": "b4ad", "./pt-br": "ccc7", "./pt-br.js": "ccc7", "./pt.js": "b4ad" };

            function a(e) { var t = r(e); return n(t) }

            function r(e) { if (!n.o(o, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return o[e] }
            a.keys = function() { return Object.keys(o) }, a.resolve = r, e.exports = a, a.id = "a3b0" } },
    [
        [0, "runtime", "vendor"]
    ]
]);