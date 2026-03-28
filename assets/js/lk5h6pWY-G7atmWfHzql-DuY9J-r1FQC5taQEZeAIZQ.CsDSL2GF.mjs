import {t as e} from "./rolldown-runtime.Bog7j6PM.mjs";
import {A as t, D as n, N as r, a as i, c as a, g as o, i as s, k as c, l, o as u, s as d, w as f, y as ee} from "./react.rOuTHGyj.mjs";
import {C as p, a as m, n as te, r as ne, t as h} from "./motion.C2JV8wdr.mjs";
import {A as g, E as _, F as v, H as y, N as b, St as x, T as re, Tt as S, U as C, V as w, Y as T, _t as E, a as D, bt as O, c as ie, dt as ae, f as oe, ft as se, gt as ce, ht as le, i as k, k as A, l as j, o as ue, ot as de, p as fe, st as pe, u as me, ut as he, w as ge, wt as M, x as N, xt as P, yt as _e} from "./framer.lzhiYDJe.mjs";
import {A as F, D as I, E as L, O as R, T as ve, a as z, c as B, f as ye, i as be, k as V, o as xe, p as H, r as U, s as Se} from "./shared-lib.CDGN-1yd.mjs";
import {a as Ce, i as we, n as W, o as Te, r as Ee, t as De} from "./rmyHU0j9Q.RJKyFblw.mjs";
import {a as Oe, c as ke, i as Ae, n as je, o as Me, r as Ne, s as Pe, t as Fe} from "./VcngNbO2E.DndaRSd_.mjs";
import {i as Ie, n as Le, r as Re, t as ze} from "./lOKAKBM3d.BXcEpAG6.mjs";
import {n as G, t as Be} from "./jKdDGAaaN.CR6TTFBY.mjs";
import {i as Ve, n as He, r as Ue, t as We} from "./AZmqYzF9O.BTokKnsI.mjs";
import {n as Ge, r as Ke} from "./dW9gRn8nJ.DfkT6KEi.mjs";
function qe(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])),
    n
}
var Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, K, q, ct = e(( () => {
    u(),
    T(),
    h(),
    f(),
    Ae(),
    Je = M(p.div),
    Ye = {
        QlUerS51m: {
            hover: !0,
            pressed: !0
        }
    },
    Xe = [`QlUerS51m`, `b3uqWqrAy`, `MpBjBvFeG`, `Nx28WFTXd`, `AZdphq93a`],
    Ze = `framer-Ig2sb`,
    Qe = {
        AZdphq93a: `framer-v-1ue18qo`,
        b3uqWqrAy: `framer-v-s4zw4f`,
        MpBjBvFeG: `framer-v-13aaca4`,
        Nx28WFTXd: `framer-v-xnuyrn`,
        QlUerS51m: `framer-v-11e6nn0`
    },
    $e = {
        delay: 0,
        duration: .2,
        ease: [.44, 0, .56, 1],
        type: `tween`
    },
    et = {
        delay: 0,
        duration: 1,
        ease: [0, 0, 1, 1],
        type: `tween`
    },
    tt = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0
    },
    nt = (e, t) => `translateX(-50%) ${t}`,
    rt = ({value: e, children: n}) => {
        let r = c(m)
          , i = e ?? r.transition
          , o = t( () => ({
            ...r,
            transition: i
        }), [JSON.stringify(i)]);
        return a(m.Provider, {
            value: o,
            children: n
        })
    }
    ,
    it = p.create(r),
    at = {
        Default: `QlUerS51m`,
        Disabled: `MpBjBvFeG`,
        Error: `AZdphq93a`,
        Loading: `b3uqWqrAy`,
        Success: `Nx28WFTXd`
    },
    ot = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: at[r.variant] ?? r.variant ?? `QlUerS51m`
    }),
    st = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`),
    K = x(o(function(e, t) {
        let {activeLocale: i, setLocale: o} = le()
          , {style: s, className: c, layoutId: u, variant: d, ...f} = ot(e)
          , {baseVariant: m, classNames: te, clearLoadingGesture: h, gestureHandlers: g, gestureVariant: v, isLoading: y, setGestureState: x, setVariant: re, variants: S} = P({
            cycleOrder: Xe,
            defaultVariant: `QlUerS51m`,
            enabledGestures: Ye,
            variant: d,
            variantClassNames: Qe
        })
          , C = st(e, S)
          , w = n(null)
          , T = () => m !== `b3uqWqrAy`
          , E = () => m === `b3uqWqrAy`
          , D = ee()
          , O = [Fe];
        return pe(),
        a(ne, {
            id: u ?? D,
            children: a(it, {
                animate: S,
                initial: !1,
                children: a(rt, {
                    value: $e,
                    children: l(p.button, {
                        ...f,
                        ...g,
                        className: b(Ze, ...O, `framer-11e6nn0`, c, te),
                        "data-framer-name": `Default`,
                        "data-reset": `button`,
                        layoutDependency: C,
                        layoutId: `QlUerS51m`,
                        ref: t ?? w,
                        style: {
                            backgroundColor: `var(--token-c46abb9d-0d10-414f-ba99-89efb980d54d, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            opacity: 1,
                            ...s
                        },
                        variants: {
                            "QlUerS51m-hover": {
                                backgroundColor: `rgba(51, 51, 51, 0.85)`
                            },
                            "QlUerS51m-pressed": {
                                backgroundColor: `rgb(51, 51, 51)`
                            },
                            AZdphq93a: {
                                backgroundColor: `rgba(255, 34, 68, 0.15)`
                            },
                            MpBjBvFeG: {
                                opacity: .5
                            }
                        },
                        ...qe({
                            "QlUerS51m-hover": {
                                "data-framer-name": void 0
                            },
                            "QlUerS51m-pressed": {
                                "data-framer-name": void 0
                            },
                            AZdphq93a: {
                                "data-framer-name": `Error`
                            },
                            b3uqWqrAy: {
                                "data-framer-name": `Loading`
                            },
                            MpBjBvFeG: {
                                "data-framer-name": `Disabled`
                            },
                            Nx28WFTXd: {
                                "data-framer-name": `Success`
                            }
                        }, m, v),
                        children: [T() && a(_, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                                children: a(p.p, {
                                    className: `framer-styles-preset-zd8fka`,
                                    "data-styles-preset": `VcngNbO2E`,
                                    style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2130d30-5051-414b-bbfe-2f8dcb0cab5e, rgb(0, 0, 0)))`
                                    },
                                    children: `Submit Now`
                                })
                            }),
                            className: `framer-sx4fwo`,
                            fonts: [`Inter`],
                            layoutDependency: C,
                            layoutId: `iJcHGt_3z`,
                            style: {
                                "--extracted-r6o4lv": `var(--token-f2130d30-5051-414b-bbfe-2f8dcb0cab5e, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`
                            },
                            variants: {
                                "QlUerS51m-hover": {
                                    "--extracted-r6o4lv": `var(--token-c46abb9d-0d10-414f-ba99-89efb980d54d, rgb(255, 255, 255))`
                                },
                                AZdphq93a: {
                                    "--extracted-r6o4lv": `var(--token-cf7185d2-9bee-4a1e-85da-418f70827721, rgb(255, 0, 0))`
                                }
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...qe({
                                "QlUerS51m-hover": {
                                    children: a(r, {
                                        children: a(p.p, {
                                            className: `framer-styles-preset-zd8fka`,
                                            "data-styles-preset": `VcngNbO2E`,
                                            style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c46abb9d-0d10-414f-ba99-89efb980d54d, rgb(255, 255, 255)))`
                                            },
                                            children: `Submit Now`
                                        })
                                    })
                                },
                                AZdphq93a: {
                                    children: a(r, {
                                        children: a(p.p, {
                                            className: `framer-styles-preset-zd8fka`,
                                            "data-styles-preset": `VcngNbO2E`,
                                            style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-cf7185d2-9bee-4a1e-85da-418f70827721, rgb(255, 0, 0)))`
                                            },
                                            children: `Something went wrong`
                                        })
                                    })
                                },
                                Nx28WFTXd: {
                                    children: a(r, {
                                        children: a(p.p, {
                                            className: `framer-styles-preset-zd8fka`,
                                            "data-styles-preset": `VcngNbO2E`,
                                            style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2130d30-5051-414b-bbfe-2f8dcb0cab5e, rgb(0, 0, 0)))`
                                            },
                                            children: `Thank you`
                                        })
                                    })
                                }
                            }, m, v)
                        }), E() && a(p.div, {
                            className: `framer-17cxdme`,
                            "data-framer-name": `Spinner`,
                            layoutDependency: C,
                            layoutId: `PPL3ffXMW`,
                            style: {
                                mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                                WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`
                            },
                            children: a(Je, {
                                __framer__loop: tt,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: `loop`,
                                __framer__loopTransition: et,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-1lk57pr`,
                                "data-framer-name": `Conic`,
                                layoutDependency: C,
                                layoutId: `CR_nLfGJ_`,
                                style: {
                                    background: `conic-gradient(from 0deg at 50% 50%, var(--token-f2130d30-5051-414b-bbfe-2f8dcb0cab5e, rgb(0, 0, 0)) /* {"name":"Black"} */ 7.208614864864882deg, var(--token-c46abb9d-0d10-414f-ba99-89efb980d54d, rgb(255, 255, 255)) /* {"name":"White"} */ 342deg)`,
                                    mask: `none`,
                                    WebkitMask: `none`
                                },
                                variants: {
                                    b3uqWqrAy: {
                                        mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                                        WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`
                                    }
                                },
                                children: a(p.div, {
                                    className: `framer-1w1o18r`,
                                    "data-framer-name": `Rounding`,
                                    layoutDependency: C,
                                    layoutId: `YbYty6IYp`,
                                    style: {
                                        backgroundColor: `var(--token-c46abb9d-0d10-414f-ba99-89efb980d54d, rgb(255, 255, 255))`,
                                        borderBottomLeftRadius: 1,
                                        borderBottomRightRadius: 1,
                                        borderTopLeftRadius: 1,
                                        borderTopRightRadius: 1
                                    },
                                    transformTemplate: nt
                                })
                            })
                        })]
                    })
                })
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-Ig2sb.framer-uwqxob, .framer-Ig2sb .framer-uwqxob { display: block; }`, `.framer-Ig2sb.framer-11e6nn0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 240px; }`, `.framer-Ig2sb .framer-sx4fwo { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`, `.framer-Ig2sb .framer-17cxdme { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`, `.framer-Ig2sb .framer-1lk57pr { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`, `.framer-Ig2sb .framer-1w1o18r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ig2sb.framer-11e6nn0 { gap: 0px; } .framer-Ig2sb.framer-11e6nn0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Ig2sb.framer-11e6nn0 > :first-child { margin-left: 0px; } .framer-Ig2sb.framer-11e6nn0 > :last-child { margin-right: 0px; } }`, `.framer-Ig2sb.framer-v-s4zw4f.framer-11e6nn0, .framer-Ig2sb.framer-v-13aaca4.framer-11e6nn0, .framer-Ig2sb.framer-v-xnuyrn.framer-11e6nn0, .framer-Ig2sb.framer-v-1ue18qo.framer-11e6nn0 { cursor: unset; }`, `.framer-Ig2sb.framer-v-s4zw4f .framer-1lk57pr { overflow: hidden; }`, ...je], `framer-Ig2sb`),
    q = K,
    K.displayName = `Contact Button`,
    K.defaultProps = {
        height: 71.5,
        width: 240
    },
    g(K, {
        variant: {
            options: [`QlUerS51m`, `b3uqWqrAy`, `MpBjBvFeG`, `Nx28WFTXd`, `AZdphq93a`],
            optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
            title: `Variant`,
            type: ue.Enum
        }
    }),
    A(K, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }]
    }, ...y(Ne)], {
        supportsExplicitInterCodegen: !0
    })
}
)), lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, J, Y, Tt, Et, Dt, Ot, kt, X, At, jt, Mt, Nt, Z, Pt, Ft, It, Q, Lt, $;
e(( () => {
    u(),
    T(),
    h(),
    f(),
    i(),
    F(),
    Be(),
    B(),
    xe(),
    De(),
    ye(),
    be(),
    ct(),
    Ve(),
    Ie(),
    R(),
    Te(),
    ke(),
    Ge(),
    lt = w(z),
    ut = w(U),
    dt = w(q),
    ft = M(oe),
    pt = S(p.section),
    mt = w(H),
    ht = w(W),
    gt = w(V),
    _t = w(G),
    vt = S(D),
    yt = w(Se),
    bt = {
        du_gSvf5d: `(min-width: 1200px) and (max-width: 1439.98px)`,
        iXEe_mfui: `(max-width: 809.98px)`,
        SUOGIPFLw: `(min-width: 1440px)`,
        t9IgpKzxN: `(min-width: 810px) and (max-width: 1199.98px)`
    },
    xt = [],
    St = `framer-8Rqls`,
    Ct = {
        du_gSvf5d: `framer-v-1o1gjrq`,
        iXEe_mfui: `framer-v-kgip4p`,
        SUOGIPFLw: `framer-v-1jk2gi5`,
        t9IgpKzxN: `framer-v-1k60gq6`
    },
    wt = (e, t, n) => e && t ? `position` : n,
    J = (...e) => {
        for (let t of e)
            if (t && typeof t == `string`)
                return t
    }
    ,
    Y = {
        damping: 30,
        delay: 0,
        mass: 1,
        stiffness: 220,
        type: `spring`
    },
    Tt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 716
    },
    Et = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 0
    },
    Dt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 716
    },
    Ot = () => document.querySelector(`#template-overlay`) ?? document.querySelector(`#overlay`) ?? document.body,
    kt = ({children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r=!0}) => {
        let[i,a] = E({
            blockDocumentScrolling: t,
            dismissWithEsc: r && n
        });
        return e({
            hide: () => a(!1),
            show: () => a(!0),
            toggle: () => a(!i),
            visible: r && i
        })
    }
    ,
    X = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: {
            damping: 40,
            delay: .2,
            mass: 1,
            stiffness: 200,
            type: `spring`
        },
        x: 0,
        y: 0
    },
    At = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 160
    },
    jt = (e, t, n) => {
        switch (e.state) {
        case `success`:
            return t.success ?? n;
        case `pending`:
            return t.pending ?? n;
        case `error`:
            return t.error ?? n;
        case `incomplete`:
            return t.incomplete ?? n;
        default:
            return n
        }
    }
    ,
    Mt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
            bounce: .2,
            delay: 1,
            duration: .8,
            type: `spring`
        },
        x: 0,
        y: 0
    },
    Nt = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0
    },
    Z = {
        L: `du_gSvf5d`,
        M: `t9IgpKzxN`,
        S: `iXEe_mfui`,
        XL: `SUOGIPFLw`
    },
    Pt = ({value: e}) => se() ? null : a(`style`, {
        dangerouslySetInnerHTML: {
            __html: e
        },
        "data-framer-html-style": ``
    }),
    Ft = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: Z[r.variant] ?? r.variant ?? `SUOGIPFLw`
    }),
    It = {
        component: Se,
        variant: `TMrDX933o`
    },
    Q = x(o(function(e, i) {
        let o = n(null)
          , u = i ?? o
          , f = ee()
          , {activeLocale: h, setLocale: g} = le()
          , v = pe()
          , {style: y, className: x, layoutId: S, variant: w, ...T} = Ft(e);
        ce(t( () => Ke({}, h), [h]));
        let[E,se] = ae(w, bt, !1)
          , {activeVariantCallback: A, delay: ue} = de(void 0)
          , M = ({overlay: e}) => A(async (...t) => {
            e.toggle()
        }
        )
          , P = ({overlay: e}) => A(async (...t) => {
            e.hide()
        }
        )
          , F = b(St, ze, Oe, Ee, ve, We)
          , I = c(me)?.isLayoutTemplate
          , L = wt(I, !!c(m)?.transition?.layout)
          , R = _e(`ejO2cZPCT`)
          , B = n(null);
        return O(),
        he({
            xzcnq6: It
        }),
        a(me.Provider, {
            value: {
                activeVariantId: E,
                humanReadableVariantMap: Z,
                primaryVariantId: `SUOGIPFLw`,
                variantClassNames: Ct
            },
            children: l(ne, {
                id: S ?? f,
                children: [a(Pt, {
                    value: `html body { background: var(--token-f2130d30-5051-414b-bbfe-2f8dcb0cab5e, rgb(0, 0, 0)); }`
                }), l(p.div, {
                    ...T,
                    className: b(F, `framer-1jk2gi5`, x),
                    "data-framer-cursor": `xzcnq6`,
                    ref: u,
                    style: {
                        ...y
                    },
                    children: [a(kt, {
                        blockDocumentScrolling: !1,
                        dismissWithEsc: !0,
                        children: e => a(d, {
                            children: a(k, {
                                height: 118,
                                width: `min(${v?.width || `100vw`}, 1480px)`,
                                children: l(D, {
                                    className: `framer-kyocay-container`,
                                    id: R,
                                    layout: L,
                                    nodeId: `ejO2cZPCT`,
                                    ref: B,
                                    scopeId: `dW9gRn8nJ`,
                                    children: [a(N, {
                                        breakpoint: E,
                                        overrides: {
                                            iXEe_mfui: {
                                                variant: J(e.visible && `Jsvx82v0f`, (e.visible,
                                                `Jsvx82v0f`))
                                            }
                                        },
                                        children: a(z, {
                                            h8rI9Kvlz: M({
                                                overlay: e
                                            }),
                                            height: `100%`,
                                            id: `ejO2cZPCT`,
                                            layoutId: `ejO2cZPCT`,
                                            style: {
                                                maxWidth: `100%`,
                                                width: `100%`
                                            },
                                            variant: J(e.visible && `BufbQy2wG`, (e.visible,
                                            `BufbQy2wG`)),
                                            width: `100%`
                                        })
                                    }), a(te, {
                                        children: e.visible && a(d, {
                                            children: s(a(fe, {
                                                triggerId: R,
                                                children: l(ge, {
                                                    children: [a(p.div, {
                                                        animate: {
                                                            opacity: 1,
                                                            transition: {
                                                                delay: 0,
                                                                duration: .3,
                                                                ease: [.5, 0, .88, .77],
                                                                type: `tween`
                                                            }
                                                        },
                                                        className: b(F, `framer-1oq0w1`),
                                                        "data-framer-portal-id": R,
                                                        exit: {
                                                            opacity: 0,
                                                            transition: {
                                                                delay: 0,
                                                                duration: .3,
                                                                ease: [.12, .23, .5, 1],
                                                                type: `tween`
                                                            }
                                                        },
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        onTap: () => e.hide()
                                                    }, `OoJw9lLLf`), a(k, {
                                                        width: `min(100vw, 1480px)`,
                                                        children: a(D, {
                                                            animate: Et,
                                                            className: b(F, `framer-1x49s75-container`),
                                                            "data-framer-portal-id": R,
                                                            exit: Tt,
                                                            inComponentSlot: !0,
                                                            initial: Dt,
                                                            nodeId: `OeFF5ZeDU`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `dW9gRn8nJ`,
                                                            children: a(N, {
                                                                breakpoint: E,
                                                                overrides: {
                                                                    iXEe_mfui: {
                                                                        variant: J(`EvqT2xqsr`)
                                                                    }
                                                                },
                                                                children: a(U, {
                                                                    height: `100%`,
                                                                    id: `OeFF5ZeDU`,
                                                                    layoutId: `OeFF5ZeDU`,
                                                                    nudbpXYrr: P({
                                                                        overlay: e
                                                                    }),
                                                                    style: {
                                                                        height: `100%`,
                                                                        maxWidth: `100%`,
                                                                        width: `100%`
                                                                    },
                                                                    variant: J(`yx4GJqTsU`),
                                                                    width: `100%`
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), Ot())
                                        })
                                    })]
                                })
                            })
                        })
                    }), a(pt, {
                        animate: X,
                        className: `framer-47pidv`,
                        "data-framer-appear-id": `47pidv`,
                        "data-framer-name": `Contact`,
                        initial: At,
                        layout: L,
                        optimized: !0,
                        style: {
                            transformPerspective: 1200
                        },
                        children: l(`div`, {
                            className: `framer-2npnzf`,
                            "data-framer-name": `Container`,
                            children: [l(`div`, {
                                className: `framer-zflwwq`,
                                "data-framer-name": `Content`,
                                children: [l(`div`, {
                                    className: `framer-nhqn4h`,
                                    "data-framer-name": `Top`,
                                    children: [a(`div`, {
                                        className: `framer-axrwio`,
                                        "data-framer-name": `Title`,
                                        children: a(_, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                                children: a(`p`, {
                                                    className: `framer-styles-preset-1jq4svj`,
                                                    "data-styles-preset": `lOKAKBM3d`,
                                                    style: {
                                                        "--framer-text-alignment": `left`
                                                    },
                                                    children: `Ring a bell!`
                                                })
                                            }),
                                            className: `framer-si2yec`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })
                                    }), a(`div`, {
                                        className: `framer-18pa9qr`,
                                        "data-framer-name": `Body Text`,
                                        children: a(N, {
                                            breakpoint: E,
                                            overrides: {
                                                du_gSvf5d: {
                                                    children: a(r, {
                                                        children: a(`p`, {
                                                            className: `framer-styles-preset-zd8fka`,
                                                            "data-styles-preset": `VcngNbO2E`,
                                                            children: `Reach out and let's create something amazing together. Let's achieve greatness.`
                                                        })
                                                    })
                                                },
                                                iXEe_mfui: {
                                                    children: a(r, {
                                                        children: a(`p`, {
                                                            className: `framer-styles-preset-zd8fka`,
                                                            "data-styles-preset": `VcngNbO2E`,
                                                            children: `Reach out and let's create something amazing together. Let's achieve greatness.`
                                                        })
                                                    })
                                                }
                                            },
                                            children: a(_, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                    children: l(`p`, {
                                                        className: `framer-styles-preset-zd8fka`,
                                                        "data-styles-preset": `VcngNbO2E`,
                                                        children: [`Reach out and let's create something amazing together. Let's `, a(`br`, {}), `achieve greatness.`]
                                                    })
                                                }),
                                                className: `framer-1popixj`,
                                                "data-framer-name": `Text`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0
                                            })
                                        })
                                    })]
                                }), l(`div`, {
                                    className: `framer-agghgg`,
                                    "data-framer-name": `Bottom`,
                                    children: [a(_, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                            children: a(`h5`, {
                                                className: `framer-styles-preset-1dtjhvc`,
                                                "data-styles-preset": `SR8Tu6wLN`,
                                                style: {
                                                    "--framer-text-alignment": `left`
                                                },
                                                children: `Fill THIS form out`
                                            })
                                        }),
                                        className: `framer-1lgh4hq`,
                                        "data-framer-name": `Text`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), a(ie, {
                                        action: `https://api.framer.com/forms/v1/forms/63717fb9-4603-4f67-8d66-6e5c4ce83edb/submit`,
                                        className: `framer-14ftx7o`,
                                        nodeId: `cPF_Ola54`,
                                        children: e => l(d, {
                                            children: [a(`label`, {
                                                className: `framer-6mti7k`,
                                                children: a(j, {
                                                    className: `framer-1v98nax`,
                                                    inputName: `Name`,
                                                    placeholder: `Name*`,
                                                    required: !0,
                                                    type: `text`
                                                })
                                            }), a(`label`, {
                                                className: `framer-5q8d6s`,
                                                children: a(j, {
                                                    className: `framer-15mid06`,
                                                    inputName: `Email`,
                                                    placeholder: `Email*`,
                                                    required: !0,
                                                    type: `email`
                                                })
                                            }), a(`label`, {
                                                className: `framer-10zp5vb`,
                                                children: a(j, {
                                                    className: `framer-1p0mzxl`,
                                                    inputName: `Message`,
                                                    placeholder: `Message*`,
                                                    required: !0,
                                                    type: `textarea`
                                                })
                                            }), a(N, {
                                                breakpoint: E,
                                                overrides: {
                                                    iXEe_mfui: {
                                                        width: `calc(min(${v?.width || `100vw`}, 1480px) - 40px)`
                                                    },
                                                    t9IgpKzxN: {
                                                        width: `calc(min(${v?.width || `100vw`}, 1480px) - 80px)`
                                                    }
                                                },
                                                children: a(k, {
                                                    height: 71,
                                                    width: `max((max(min(${v?.width || `100vw`}, 1480px) - 80px, 1px) - 60px) / 2, 1px)`,
                                                    children: a(D, {
                                                        className: `framer-jfum7s-container`,
                                                        nodeId: `r9D56XPRX`,
                                                        scopeId: `dW9gRn8nJ`,
                                                        children: a(q, {
                                                            height: `100%`,
                                                            id: `r9D56XPRX`,
                                                            layoutId: `r9D56XPRX`,
                                                            style: {
                                                                width: `100%`
                                                            },
                                                            type: `submit`,
                                                            variant: jt(e, {
                                                                pending: `b3uqWqrAy`,
                                                                success: `Nx28WFTXd`
                                                            }, J(`QlUerS51m`)),
                                                            width: `100%`
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), a(`div`, {
                                className: `framer-sqitl3`,
                                "data-framer-name": `Image`,
                                children: a(N, {
                                    breakpoint: E,
                                    overrides: {
                                        iXEe_mfui: {
                                            background: {
                                                alt: `Man`,
                                                fit: `fill`,
                                                intrinsicHeight: 1218,
                                                intrinsicWidth: 1024,
                                                pixelHeight: 1218,
                                                pixelWidth: 1024,
                                                sizes: `calc(min(${v?.width || `100vw`}, 1480px) - 40px)`,
                                                src: `https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?width=1024&height=1218`,
                                                srcSet: `https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?scale-down-to=1024&width=1024&height=1218 860w,https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?width=1024&height=1218 1024w`
                                            }
                                        },
                                        t9IgpKzxN: {
                                            background: {
                                                alt: `Man`,
                                                fit: `fill`,
                                                intrinsicHeight: 1218,
                                                intrinsicWidth: 1024,
                                                pixelHeight: 1218,
                                                pixelWidth: 1024,
                                                sizes: `calc(min(${v?.width || `100vw`}, 1480px) - 80px)`,
                                                src: `https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?width=1024&height=1218`,
                                                srcSet: `https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?scale-down-to=1024&width=1024&height=1218 860w,https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?width=1024&height=1218 1024w`
                                            }
                                        }
                                    },
                                    children: a(ft, {
                                        __framer__adjustPosition: !0,
                                        __framer__offset: 0,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 110,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: `Man`,
                                            fit: `fill`,
                                            intrinsicHeight: 1218,
                                            intrinsicWidth: 1024,
                                            pixelHeight: 1218,
                                            pixelWidth: 1024,
                                            sizes: `max((max(min(${v?.width || `100vw`}, 1480px) - 80px, 1px) - 60px) / 2, 1px)`,
                                            src: `https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?width=1024&height=1218`,
                                            srcSet: `https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?scale-down-to=1024&width=1024&height=1218 860w,https://framerusercontent.com/images/PRWamPfYIovvFrH2L8p8hHwrgE.png?width=1024&height=1218 1024w`
                                        },
                                        className: `framer-1pagezc`,
                                        "data-framer-name": `Fill Your Image Here`
                                    })
                                })
                            })]
                        })
                    }), l(p.section, {
                        className: `framer-11dgu93`,
                        "data-framer-name": `Info`,
                        layout: L,
                        children: [a(`div`, {
                            className: `framer-pi5cp3`,
                            "data-framer-name": `Line`
                        }), l(`div`, {
                            className: `framer-1dq8wts`,
                            "data-framer-name": `Inner Content`,
                            children: [l(`div`, {
                                className: `framer-fjkkqr`,
                                "data-framer-name": `1`,
                                children: [a(_, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                        children: a(`p`, {
                                            className: `framer-styles-preset-1fyflak`,
                                            "data-styles-preset": `o93BsUfXU`,
                                            style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128))`
                                            },
                                            children: `FOLLOW ME`
                                        })
                                    }),
                                    className: `framer-15h6gtg`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                }), l(`div`, {
                                    className: `framer-sp8sho`,
                                    "data-framer-name": `Social Links`,
                                    children: [a(N, {
                                        breakpoint: E,
                                        overrides: {
                                            iXEe_mfui: {
                                                width: `calc(min(${v?.width || `100vw`}, 1480px) - 40px)`
                                            },
                                            t9IgpKzxN: {
                                                width: `min(max((min(${v?.width || `100vw`}, 1480px) - 110px) / 2, 50px), 280px)`
                                            }
                                        },
                                        children: a(k, {
                                            height: 23,
                                            width: `min(max((min(${v?.width || `100vw`}, 1480px) - 150px) / 4, 1px), 280px)`,
                                            children: a(D, {
                                                className: `framer-xku0xq-container`,
                                                nodeId: `xjSwpssQ9`,
                                                scopeId: `dW9gRn8nJ`,
                                                children: a(H, {
                                                    D1BksElC1: !0,
                                                    grlILkKzz: !1,
                                                    height: `100%`,
                                                    id: `xjSwpssQ9`,
                                                    layoutId: `xjSwpssQ9`,
                                                    LXl6QtB7P: `https://www.linkedin.com/in/vishnu-s-raj/`,
                                                    style: {
                                                        width: `100%`
                                                    },
                                                    Tul3dvmcC: `center`,
                                                    variant: J(`VC9xaxuso`),
                                                    width: `100%`,
                                                    WToiWnGc4: `LinkedIn`
                                                })
                                            })
                                        })
                                    }), a(N, {
                                        breakpoint: E,
                                        overrides: {
                                            iXEe_mfui: {
                                                width: `calc(min(${v?.width || `100vw`}, 1480px) - 40px)`
                                            },
                                            t9IgpKzxN: {
                                                width: `min(max((min(${v?.width || `100vw`}, 1480px) - 110px) / 2, 50px), 280px)`
                                            }
                                        },
                                        children: a(k, {
                                            height: 23,
                                            width: `min(max((min(${v?.width || `100vw`}, 1480px) - 150px) / 4, 1px), 280px)`,
                                            children: a(D, {
                                                className: `framer-1n9fph5-container`,
                                                nodeId: `QhMf3J20z`,
                                                scopeId: `dW9gRn8nJ`,
                                                children: a(H, {
                                                    D1BksElC1: !0,
                                                    grlILkKzz: !1,
                                                    height: `100%`,
                                                    id: `QhMf3J20z`,
                                                    layoutId: `QhMf3J20z`,
                                                    LXl6QtB7P: `https://www.behance.net/vishnusraj91`,
                                                    style: {
                                                        width: `100%`
                                                    },
                                                    Tul3dvmcC: `center`,
                                                    variant: J(`VC9xaxuso`),
                                                    width: `100%`,
                                                    WToiWnGc4: `Behance`
                                                })
                                            })
                                        })
                                    }), a(N, {
                                        breakpoint: E,
                                        overrides: {
                                            iXEe_mfui: {
                                                width: `calc(min(${v?.width || `100vw`}, 1480px) - 40px)`
                                            },
                                            t9IgpKzxN: {
                                                width: `min(max((min(${v?.width || `100vw`}, 1480px) - 110px) / 2, 50px), 280px)`
                                            }
                                        },
                                        children: a(k, {
                                            height: 23,
                                            width: `min(max((min(${v?.width || `100vw`}, 1480px) - 150px) / 4, 1px), 280px)`,
                                            children: a(D, {
                                                className: `framer-18q755z-container`,
                                                nodeId: `sfqtXZCq6`,
                                                scopeId: `dW9gRn8nJ`,
                                                children: a(H, {
                                                    D1BksElC1: !0,
                                                    grlILkKzz: !1,
                                                    height: `100%`,
                                                    id: `sfqtXZCq6`,
                                                    layoutId: `sfqtXZCq6`,
                                                    LXl6QtB7P: `https://www.instagram.com/vishnu_s_raj/`,
                                                    style: {
                                                        width: `100%`
                                                    },
                                                    Tul3dvmcC: `center`,
                                                    variant: J(`VC9xaxuso`),
                                                    width: `100%`,
                                                    WToiWnGc4: `Instagram`
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), l(`div`, {
                                className: `framer-pzp9up`,
                                "data-framer-name": `2`,
                                children: [a(_, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                        children: a(`p`, {
                                            className: `framer-styles-preset-1fyflak`,
                                            "data-styles-preset": `o93BsUfXU`,
                                            style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128))`
                                            },
                                            children: `CURRENT LOCATION`
                                        })
                                    }),
                                    className: `framer-3p22vp`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                }), l(`div`, {
                                    className: `framer-fwdwjs`,
                                    "data-framer-name": `Address`,
                                    children: [a(_, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                            children: a(`h6`, {
                                                className: `framer-styles-preset-h7dwia`,
                                                "data-styles-preset": `AZmqYzF9O`,
                                                dir: `auto`,
                                                children: `Bengaluru,`
                                            })
                                        }),
                                        className: `framer-142u9bv`,
                                        "data-framer-name": `Text 2`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), a(_, {
                                        __fromCanvasComponent: !0,
                                        children: a(r, {
                                            children: a(`h6`, {
                                                className: `framer-styles-preset-h7dwia`,
                                                "data-styles-preset": `AZmqYzF9O`,
                                                dir: `auto`,
                                                children: `India`
                                            })
                                        }),
                                        className: `framer-cr68lb`,
                                        "data-framer-name": `Text 3`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })]
                                })]
                            }), l(`div`, {
                                className: `framer-rer8ob`,
                                "data-framer-name": `3`,
                                children: [a(_, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                        children: a(`p`, {
                                            className: `framer-styles-preset-1fyflak`,
                                            "data-styles-preset": `o93BsUfXU`,
                                            style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128))`
                                            },
                                            children: `Phone`
                                        })
                                    }),
                                    className: `framer-amqby9`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                }), a(`div`, {
                                    className: `framer-1xg4x57`,
                                    "data-framer-name": `Phone`,
                                    children: a(`div`, {
                                        className: `framer-1mq690c`,
                                        "data-framer-name": `1`,
                                        children: a(N, {
                                            breakpoint: E,
                                            overrides: {
                                                du_gSvf5d: {
                                                    width: `min(max((min(${v?.width || `100vw`}, 1480px) - 150px) / 4, 1px), 280px)`
                                                },
                                                iXEe_mfui: {
                                                    width: `max(min(${v?.width || `100vw`}, 1480px) - 40px, 1px)`
                                                },
                                                t9IgpKzxN: {
                                                    width: `max(min(max((min(${v?.width || `100vw`}, 1480px) - 110px) / 2, 50px), 280px), 1px)`
                                                }
                                            },
                                            children: a(k, {
                                                height: 23,
                                                width: `max(min(max((min(${v?.width || `100vw`}, 1480px) - 150px) / 4, 1px), 280px), 1px)`,
                                                children: a(D, {
                                                    className: `framer-yw27nx-container`,
                                                    nodeId: `xkIHh_JA5`,
                                                    scopeId: `dW9gRn8nJ`,
                                                    children: a(H, {
                                                        D1BksElC1: !0,
                                                        grlILkKzz: !1,
                                                        height: `100%`,
                                                        id: `xkIHh_JA5`,
                                                        layoutId: `xkIHh_JA5`,
                                                        LXl6QtB7P: `tel:+919620578544`,
                                                        style: {
                                                            width: `100%`
                                                        },
                                                        Tul3dvmcC: `flex-start`,
                                                        variant: J(`IE_nV3mtl`),
                                                        width: `100%`,
                                                        WToiWnGc4: `+919620578544`
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), l(`div`, {
                                className: `framer-5sh5sl`,
                                "data-framer-name": `4`,
                                children: [a(_, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                        children: a(`p`, {
                                            className: `framer-styles-preset-1fyflak`,
                                            "data-styles-preset": `o93BsUfXU`,
                                            style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128))`
                                            },
                                            children: `EMAIL me`
                                        })
                                    }),
                                    className: `framer-ckcc92`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                }), a(`div`, {
                                    className: `framer-12plf6e`,
                                    "data-framer-name": `Emails`,
                                    children: a(N, {
                                        breakpoint: E,
                                        overrides: {
                                            iXEe_mfui: {
                                                width: `calc(min(${v?.width || `100vw`}, 1480px) - 40px)`
                                            },
                                            t9IgpKzxN: {
                                                width: `min(max((min(${v?.width || `100vw`}, 1480px) - 110px) / 2, 50px), 280px)`
                                            }
                                        },
                                        children: a(k, {
                                            height: 23,
                                            width: `min(max((min(${v?.width || `100vw`}, 1480px) - 150px) / 4, 1px), 280px)`,
                                            children: a(D, {
                                                className: `framer-8889in-container`,
                                                nodeId: `im0A5NJ87`,
                                                scopeId: `dW9gRn8nJ`,
                                                children: a(H, {
                                                    D1BksElC1: !0,
                                                    grlILkKzz: !1,
                                                    height: `100%`,
                                                    id: `im0A5NJ87`,
                                                    layoutId: `im0A5NJ87`,
                                                    LXl6QtB7P: `mailto:dummy@mail.com`,
                                                    style: {
                                                        width: `100%`
                                                    },
                                                    Tul3dvmcC: `flex-start`,
                                                    variant: J(`IE_nV3mtl`),
                                                    width: `100%`,
                                                    WToiWnGc4: `vishnusraj91@gmail.com`
                                                })
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), a(`div`, {
                            className: `framer-1lr0z0b`,
                            "data-framer-name": `Line`
                        })]
                    }), a(re, {
                        links: [{
                            href: {
                                hash: `:ejO2cZPCT`,
                                webPageId: `dW9gRn8nJ`
                            },
                            implicitPathVariables: void 0
                        }, {
                            href: {
                                hash: `:ejO2cZPCT`,
                                webPageId: `dW9gRn8nJ`
                            },
                            implicitPathVariables: void 0
                        }, {
                            href: {
                                hash: `:ejO2cZPCT`,
                                webPageId: `dW9gRn8nJ`
                            },
                            implicitPathVariables: void 0
                        }, {
                            href: {
                                hash: `:ejO2cZPCT`,
                                webPageId: `dW9gRn8nJ`
                            },
                            implicitPathVariables: void 0
                        }],
                        children: e => a(k, {
                            height: 378,
                            width: `min(${v?.width || `100vw`}, 1480px)`,
                            children: a(D, {
                                className: `framer-1vki6vm-container`,
                                layout: L,
                                nodeId: `dfrjq1V9v`,
                                scopeId: `dW9gRn8nJ`,
                                children: a(N, {
                                    breakpoint: E,
                                    overrides: {
                                        du_gSvf5d: {
                                            uMRm_yoFo: e[1],
                                            variant: J(`lYtXF1T_j`)
                                        },
                                        iXEe_mfui: {
                                            uMRm_yoFo: e[3],
                                            variant: J(`S_2PrDWvT`)
                                        },
                                        t9IgpKzxN: {
                                            uMRm_yoFo: e[2],
                                            variant: J(`wln1qwUNV`)
                                        }
                                    },
                                    children: a(W, {
                                        height: `100%`,
                                        id: `dfrjq1V9v`,
                                        layoutId: `dfrjq1V9v`,
                                        style: {
                                            maxWidth: `100%`,
                                            width: `100%`
                                        },
                                        uMRm_yoFo: e[0],
                                        variant: J(`lI3Bgfs7S`),
                                        width: `100%`
                                    })
                                })
                            })
                        })
                    }), a(k, {
                        children: a(D, {
                            className: `framer-4cwwaf-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layout: L,
                            nodeId: `FHt90UjLD`,
                            scopeId: `dW9gRn8nJ`,
                            children: a(V, {
                                height: `100%`,
                                id: `FHt90UjLD`,
                                intensity: 16,
                                layoutId: `FHt90UjLD`,
                                width: `100%`
                            })
                        })
                    }), a(N, {
                        breakpoint: E,
                        overrides: {
                            t9IgpKzxN: {
                                background: {
                                    alt: ``,
                                    backgroundSize: .2,
                                    fit: `tile`,
                                    intrinsicHeight: 475,
                                    intrinsicWidth: 911,
                                    loading: C((v?.y || 0) + 0),
                                    pixelHeight: 128,
                                    pixelWidth: 128,
                                    positionX: `left`,
                                    positionY: `top`,
                                    sizes: `calc(${v?.width || `100vw`} * 0.9988)`,
                                    src: `https://framerusercontent.com/images/ldf53R2pKtKErtQpdz1GxxWt2I.svg?width=128&height=128`
                                }
                            }
                        },
                        children: a(oe, {
                            as: `section`,
                            background: {
                                alt: ``,
                                backgroundSize: .2,
                                fit: `tile`,
                                intrinsicHeight: 475,
                                intrinsicWidth: 911,
                                loading: C((v?.y || 0) + 0),
                                pixelHeight: 128,
                                pixelWidth: 128,
                                positionX: `left`,
                                positionY: `top`,
                                sizes: v?.width || `100vw`,
                                src: `https://framerusercontent.com/images/ldf53R2pKtKErtQpdz1GxxWt2I.svg?width=128&height=128`
                            },
                            className: `framer-v0ucvd`,
                            "data-framer-name": `BG Pattern`,
                            layout: L
                        })
                    }), l(p.section, {
                        className: `framer-oqaco1`,
                        "data-framer-name": `BG Lines`,
                        layout: L,
                        children: [a(`div`, {
                            className: `framer-5at4np`,
                            "data-framer-name": `Line`
                        }), a(`div`, {
                            className: `framer-1hak7o`,
                            "data-framer-name": `Line`
                        }), a(`div`, {
                            className: `framer-541asi`,
                            "data-framer-name": `Line`
                        })]
                    }), a(k, {
                        height: 40,
                        y: 900,
                        children: a(vt, {
                            animate: Mt,
                            className: `framer-1m5cgf5-container`,
                            "data-framer-appear-id": `1m5cgf5`,
                            initial: Nt,
                            layout: L,
                            layoutScroll: !0,
                            nodeId: `wzd9IyahR`,
                            optimized: !0,
                            rendersWithMotion: !0,
                            scopeId: `dW9gRn8nJ`,
                            children: a(G, {
                                height: `100%`,
                                id: `wzd9IyahR`,
                                layoutId: `wzd9IyahR`,
                                width: `100%`
                            })
                        })
                    })]
                }), a(`div`, {
                    id: `overlay`
                })]
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-8Rqls.framer-125bfsb, .framer-8Rqls .framer-125bfsb { display: block; }`, `.framer-8Rqls.framer-1jk2gi5 { align-content: center; align-items: center; background-color: var(--token-f2130d30-5051-414b-bbfe-2f8dcb0cab5e, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1440px; }`, `.framer-8Rqls .framer-kyocay-container { flex: none; height: auto; max-width: 1480px; position: relative; width: 100%; z-index: 1; }`, `.framer-8Rqls.framer-1oq0w1 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 9; }`, `.framer-8Rqls.framer-1x49s75-container { flex: none; height: 100vh; left: calc(50.00000000000002% - min(1480px, 100%) / 2); max-width: 1480px; position: fixed; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`, `.framer-8Rqls .framer-47pidv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1480px; overflow: hidden; padding: 50px 40px 0px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`, `.framer-8Rqls .framer-2npnzf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-8Rqls .framer-zflwwq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }`, `.framer-8Rqls .framer-nhqn4h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-axrwio { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 490px; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-si2yec { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-8Rqls .framer-18pa9qr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1popixj { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-8Rqls .framer-agghgg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1lgh4hq { flex: none; height: auto; max-width: 490px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-8Rqls .framer-14ftx7o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-6mti7k, .framer-8Rqls .framer-5q8d6s, .framer-8Rqls .framer-10zp5vb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1v98nax { --framer-input-background: var(--token-e4ce6541-81b8-4420-b356-a0eaf8a75ea2, #0f0f0f); --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-d3164dbb-164d-4c40-a765-b9e50ed00c8a, rgba(255, 255, 255, 0.6)); --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0px; --framer-input-font-line-height: 16px; --framer-input-font-open-type-features: 'salt' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 24px; --framer-input-placeholder-color: var(--token-d3164dbb-164d-4c40-a765-b9e50ed00c8a, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`, `.framer-8Rqls .framer-15mid06 { --framer-input-background: var(--token-e4ce6541-81b8-4420-b356-a0eaf8a75ea2, #0f0f0f); --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-d3164dbb-164d-4c40-a765-b9e50ed00c8a, rgba(255, 255, 255, 0.6)); --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0px; --framer-input-font-line-height: 16px; --framer-input-font-open-type-features: 'ss08' on, 'salt' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 24px; --framer-input-placeholder-color: var(--token-d3164dbb-164d-4c40-a765-b9e50ed00c8a, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1p0mzxl { --framer-input-background: var(--token-e4ce6541-81b8-4420-b356-a0eaf8a75ea2, #0f0f0f); --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-d3164dbb-164d-4c40-a765-b9e50ed00c8a, rgba(255, 255, 255, 0.6)); --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0px; --framer-input-font-line-height: 16px; --framer-input-font-open-type-features: 'salt' on; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 24px; --framer-input-placeholder-color: var(--token-d3164dbb-164d-4c40-a765-b9e50ed00c8a, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 150px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-jfum7s-container, .framer-8Rqls .framer-xku0xq-container, .framer-8Rqls .framer-1n9fph5-container, .framer-8Rqls .framer-18q755z-container, .framer-8Rqls .framer-8889in-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-8Rqls .framer-sqitl3 { align-content: center; align-items: center; background-color: #000000; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 753px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-8Rqls .framer-1pagezc { flex: none; height: 930px; overflow: visible; position: relative; width: 100%; }`, `.framer-8Rqls .framer-11dgu93 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 1480px; overflow: hidden; padding: 70px 60px 0px 60px; position: relative; width: 100%; z-index: 3; }`, `.framer-8Rqls .framer-pi5cp3, .framer-8Rqls .framer-1lr0z0b { background-color: var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616); flex: none; gap: 10px; height: 1px; overflow: hidden; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1dq8wts { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-fjkkqr, .framer-8Rqls .framer-pzp9up, .framer-8Rqls .framer-rer8ob, .framer-8Rqls .framer-5sh5sl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-8Rqls .framer-15h6gtg, .framer-8Rqls .framer-3p22vp, .framer-8Rqls .framer-142u9bv, .framer-8Rqls .framer-cr68lb, .framer-8Rqls .framer-amqby9, .framer-8Rqls .framer-ckcc92 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`, `.framer-8Rqls .framer-sp8sho, .framer-8Rqls .framer-fwdwjs, .framer-8Rqls .framer-12plf6e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 280px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1xg4x57 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 280px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-1mq690c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-8Rqls .framer-yw27nx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`, `.framer-8Rqls .framer-1vki6vm-container { flex: none; height: auto; max-width: 1480px; position: relative; width: 100%; z-index: 2; }`, `.framer-8Rqls .framer-4cwwaf-container { flex: none; height: auto; position: relative; width: auto; z-index: 0; }`, `.framer-8Rqls .framer-v0ucvd { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.06; overflow: visible; pointer-events: none; position: absolute; top: 0px; width: 100%; z-index: 0; }`, `.framer-8Rqls .framer-oqaco1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 400px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }`, `.framer-8Rqls .framer-5at4np, .framer-8Rqls .framer-1hak7o, .framer-8Rqls .framer-541asi { background-color: var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616); flex: none; height: 100%; overflow: hidden; position: relative; width: 1px; }`, `.framer-8Rqls .framer-1m5cgf5-container { bottom: 60px; flex: none; height: auto; position: fixed; right: 20px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`, ...Le, ...Me, ...we, ...L, ...He, `@media (min-width: 1200px) and (max-width: 1439.98px) { .framer-8Rqls.framer-1jk2gi5 { width: 1200px; } .framer-8Rqls .framer-1mq690c { flex-wrap: wrap; }}`, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-8Rqls.framer-1jk2gi5 { overflow: hidden; width: 810px; } .framer-8Rqls .framer-kyocay-container { order: 0; } .framer-8Rqls .framer-47pidv { flex-direction: column; gap: 74px; justify-content: flex-start; order: 1; } .framer-8Rqls .framer-2npnzf { flex: none; flex-direction: column; gap: 80px; width: 100%; } .framer-8Rqls .framer-zflwwq, .framer-8Rqls .framer-sqitl3 { flex: none; width: 100%; } .framer-8Rqls .framer-axrwio { justify-content: flex-start; } .framer-8Rqls .framer-11dgu93 { order: 2; padding: 70px 40px 0px 40px; } .framer-8Rqls .framer-1dq8wts { align-content: unset; align-items: unset; display: grid; gap: 30px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); } .framer-8Rqls .framer-fjkkqr, .framer-8Rqls .framer-pzp9up, .framer-8Rqls .framer-rer8ob, .framer-8Rqls .framer-5sh5sl { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-8Rqls .framer-1mq690c { align-content: flex-start; align-items: flex-start; } .framer-8Rqls .framer-1vki6vm-container { order: 3; } .framer-8Rqls .framer-4cwwaf-container { order: 4; } .framer-8Rqls .framer-v0ucvd { left: calc(50.00000000000002% - 99.87654320987654% / 2); order: 5; width: 100%; } .framer-8Rqls .framer-oqaco1 { order: 6; } .framer-8Rqls .framer-1m5cgf5-container { order: 7; }}`, `@media (max-width: 809.98px) { .framer-8Rqls.framer-1jk2gi5 { overflow: hidden; width: 390px; } .framer-8Rqls .framer-47pidv { flex-direction: column; gap: 74px; justify-content: flex-start; padding: 60px 20px 40px 20px; } .framer-8Rqls .framer-2npnzf { flex: none; flex-direction: column; gap: 80px; width: 100%; } .framer-8Rqls .framer-zflwwq, .framer-8Rqls .framer-fjkkqr, .framer-8Rqls .framer-pzp9up, .framer-8Rqls .framer-rer8ob, .framer-8Rqls .framer-5sh5sl { flex: none; width: 100%; } .framer-8Rqls .framer-si2yec { overflow: hidden; } .framer-8Rqls .framer-sqitl3 { flex: none; height: 560px; width: 100%; } .framer-8Rqls .framer-11dgu93 { gap: 40px; padding: 0px 20px 20px 20px; } .framer-8Rqls .framer-1dq8wts { flex-direction: column; gap: 60px; } .framer-8Rqls .framer-sp8sho, .framer-8Rqls .framer-fwdwjs, .framer-8Rqls .framer-1xg4x57, .framer-8Rqls .framer-12plf6e { max-width: unset; }}`], `framer-8Rqls`),
    Lt = Q,
    Q.displayName = `Page`,
    Q.defaultProps = {
        height: 1841,
        width: 1440
    },
    A(Q, [{
        explicitInter: !0,
        fonts: [{
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter Display`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter Display`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
            weight: `400`
        }]
    }, ...lt, ...ut, ...dt, ...mt, ...ht, ...gt, ..._t, ...yt, ...y(Re), ...y(Pe), ...y(Ce), ...y(I), ...y(Ue)], {
        supportsExplicitInterCodegen: !0
    }),
    Q.loader = {
        load: (e, t) => (t.locale,
        Promise.allSettled([v(z, {}, t), v(U, {}, t), v(q, {}, t), v(H, {}, t), v(W, {}, t), v(G, {}, t)]))
    },
    $ = {
        exports: {
            default: {
                type: `reactComponent`,
                name: `FramerdW9gRn8nJ`,
                slots: [],
                annotations: {
                    framerImmutableVariables: `true`,
                    framerScrollSections: `{"ejO2cZPCT":{"pattern":":ejO2cZPCT","name":"nav"}}`,
                    framerContractVersion: `1`,
                    framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"du_gSvf5d":{"layout":["fixed","auto"]},"t9IgpKzxN":{"layout":["fixed","auto"]},"iXEe_mfui":{"layout":["fixed","auto"]}}}`,
                    framerColorSyntax: `true`,
                    framerDisplayContentsDiv: `false`,
                    framerIntrinsicHeight: `1841`,
                    framerAutoSizeImages: `true`,
                    framerComponentViewportWidth: `true`,
                    framerIntrinsicWidth: `1440`,
                    framerAcceptsLayoutTemplate: `true`,
                    framerResponsiveScreen: `true`,
                    framerLayoutTemplateFlowEffect: `true`
                }
            },
            queryParamNames: {
                type: `variable`,
                annotations: {
                    framerContractVersion: `1`
                }
            },
            Props: {
                type: `tsType`,
                annotations: {
                    framerContractVersion: `1`
                }
            },
            __FramerMetadata__: {
                type: `variable`
            }
        }
    }
}
))();
export {$ as __FramerMetadata__, Lt as default, xt as queryParamNames};
//# sourceMappingURL=lk5h6pWY-G7atmWfHzql-DuY9J-r1FQC5taQEZeAIZQ.CsDSL2GF.mjs.map
