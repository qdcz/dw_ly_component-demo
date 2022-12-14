import { defineComponent as M, createVNode as a, inject as D, reactive as N, computed as v, resolveComponent as V, ref as B, onMounted as R, watchEffect as W, nextTick as H, watch as K, onUnmounted as ve, getCurrentInstance as fe, provide as me, withDirectives as be, resolveDirective as we, createTextVNode as Se } from "vue";
const Q = (e, l) => (e.install = function(s) {
  if (e) {
    const c = e.name || e.__name;
    if (c || l) {
      const r = l ? `dw-${l}` : "dw-" + c.replace(/dw/gi, "").toLowerCase();
      s.component(r, e);
    } else
      console.error(e, l, !l);
  }
}, e), ye = (e) => Array.isArray(e);
function I(e) {
  const l = `vi-${e}`;
  return {
    n: (r) => r ? r.startsWith("-") ? `${l}${r}` : `${l}_${r}` : l,
    classes: (...r) => r.map((t) => {
      if (ye(t)) {
        const [u, d, n = null] = t;
        return u ? d : n;
      }
      return t;
    })
  };
}
const O = Symbol("select-v2"), J = function(e, l) {
  for (let [s, c] of Object.entries(l.value))
    e.style.setProperty("--" + s, c);
}, q = {
  mounted(e, l) {
    J(e, l);
  },
  updated(e, l) {
    J(e, l);
  },
  install(e) {
    e.directive("Css", this);
  }
}, F = {
  modelValue: {
    type: [String, Number, Array],
    default: ""
  },
  mode: {
    type: String,
    default: "single"
  },
  list: {
    type: Array,
    default: () => []
  },
  itemLayout: {
    type: String,
    default: "co1"
  },
  clearable: Boolean,
  tooltip: Boolean,
  showMore: Boolean,
  search: Boolean,
  searchImg: {
    type: String,
    default: "https://cdn-upload.datav.aliyun.com/upload/download/1666233796787-Qfh6D-SR.svg"
  },
  placeholder: {
    type: String,
    default: "请选择您需要的选项o(*￣▽￣*)ブ"
  },
  dynamicCss: {
    type: Object,
    default: () => ({
      "input-box-shadow-x": "0",
      "input-box-shadow-y": "0",
      "input-box-shadow-blur": "0",
      "input-box-shadow-spread": "1",
      "input-box-shadow-color": "#dcdfe6",
      "input-hover-box-shadow-x": "0",
      "input-hover-box-shadow-y": "0",
      "input-hover-box-shadow-blur": "0",
      "input-hover-box-shadow-spread": "1",
      "input-hover-box-shadow-color": "#85a2dd",
      "input-active-box-shadow-x": "0",
      "input-active-box-shadow-y": "0",
      "input-active-box-shadow-blur": "0",
      "input-active-box-shadow-spread": "1",
      "input-active-box-shadow-color": "rgb(0, 94, 255)",
      "input-border-radius": "4",
      "input-line-padding-t": "0",
      "input-line-padding-r": "8",
      "input-line-padding-b": "0",
      "input-line-padding-l": "8",
      "input-bg-color": "rgba(255,255,255)",
      "input-fo-color": "#606266",
      "input-fo-size": "12",
      "input-fo-weight": "600",
      "input-placeholder-fo-color": "gray",
      "input-line-height": "30",
      "input-width": "200",
      "input-text-alight": "start",
      "input-icon-width": "12",
      "input-icon-color": "#000",
      "tag-height": "30",
      "tag-max-width": "80",
      "tag-margin-t": "2",
      "tag-margin-r": "0",
      "tag-margin-b": "2",
      "tag-margin-l": "2",
      "tag-padding-t": "0",
      "tag-padding-r": "5",
      "tag-padding-b": "0",
      "tag-padding-l": "9",
      "tag-border-radius": "4",
      "tag-fo-color": "#909399",
      "tag-fo-size": "10",
      "tag-fo-weight": "500",
      "tag-bg-color": "#f0f2f5",
      "tag-close-size": "12",
      "tag-close-hover-bg-color": "gray",
      "tag-close-hover-fo-color": "#fff",
      "tag-tooltip-bg-color": "#3a81d2",
      "tag-tooltip-fo-color": "#fff",
      "tag-tooltip-fo-size": "12",
      "tag-tooltip-fo-weight": "500",
      "popper-bg-color": "#fff",
      "popper-height": "250",
      "popper-padding": "4",
      "popper-border-radius": "8",
      "popper-z-index": "999",
      "popper-box-shadow-x": "0",
      "popper-box-shadow-y": "0",
      "popper-box-shadow-blur": "12",
      "popper-box-shadow-spread": "0",
      "popper-box-shadow-color": "rgba(0, 0, 0, 0.12)",
      "popper-arrow-height": "6",
      "popper-option-fo-size": "12",
      "popper-option-fo-weight": "500",
      "popper-option-fo-color": "#64666a",
      "popper-option-height": "40",
      "popper-option-padding-lr": "8",
      "popper-option-hover-bg-color": "#f5f7fa",
      "popper-option-active-fo-color": "#409eff",
      "popper-option-active-fo-weight": "600",
      "popper-option-txt-margin-lr": "6",
      "popper-option-fo-alight": "start",
      "popper-search-line-height": "20",
      "popper-search-fo-size": "12",
      "popper-search-fo-color": "gray",
      "popper-search-fo-weight": "500",
      "popper-search-box-shadow-x": "0",
      "popper-search-box-shadow-y": "0",
      "popper-search-box-shadow-blur": "0",
      "popper-search-box-shadow-spread": "1",
      "popper-search-box-shadow-color": "#e0e3e9",
      "popper-search-border-radius": "4",
      "popper-search-padding-t": "4",
      "popper-search-padding-r": "10",
      "popper-search-padding-b": "4",
      "popper-search-padding-l": "30",
      "popper-search-bg-color": "initial",
      "popper-search-inp-bg-color": "initial",
      "popper-search-icon-size": "14",
      "unfold-icon-height": "14",
      "unfold-icon-width": "14",
      "unfold-icon-hover-fo-color": "#00b7ff",
      "unfold-height": "300",
      "unfold-width": "600",
      "unfold-padding-t": "10",
      "unfold-padding-r": "10",
      "unfold-padding-b": "10",
      "unfold-padding-l": "10",
      "unfold-tag-border-radius": "4",
      "unfold-tag-bg-color": "rgb(229, 236, 234)",
      "unfold-tag-hover-bg-color": "#87ceeb",
      "unfold-tag-active-bg-color": "rgb(32, 183, 243)",
      "unfold-tag-padding-t": "8",
      "unfold-tag-padding-r": "16",
      "unfold-tag-padding-b": "8",
      "unfold-tag-padding-l": "16",
      "unfold-tag-margin-t": "0",
      "unfold-tag-margin-r": "8",
      "unfold-tag-margin-b": "8",
      "unfold-tag-margin-l": "0",
      "scroll-bar-width": "4",
      "scroll-bar-bg-color": "rgb(218, 218, 218)",
      "scroll-bar-hover-bg-color": "#87ceeb",
      "ani-transition": ".3"
    })
  }
}, {
  n: Ve,
  classes: xe
} = I("select-v2-svg-icon"), k = /* @__PURE__ */ M({
  name: "VISelectV2SvgIcon",
  emits: ["click"],
  props: {
    path: {
      type: String,
      default: `M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
			764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
			45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`
    },
    height: {
      type: [String, Number],
      default: "12"
    },
    width: {
      type: [String, Number],
      default: "12"
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    }
  },
  setup(e, l) {
    const s = function(r) {
      l.emit("click", r);
    }, c = function() {
      return a("svg", {
        class: [xe(Ve()), "icon"],
        height: e.height,
        width: e.width,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: s
      }, [a("path", {
        fill: "currentColor",
        d: e.path
      }, null)]);
    };
    return () => c();
  }
}), {
  n: j,
  classes: Le
} = I("select-v2-input"), Ce = /* @__PURE__ */ M({
  name: "VISelectV2Input",
  emits: ["focus", "blur", "click", "clear", "mouseenter", "mouseleave"],
  props: {
    active: {
      type: [Boolean, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: "o(*￣▽￣*)ブ"
    },
    iconHeight: {
      type: [Number, String],
      default: "12"
    },
    iconWidth: {
      type: [Number, String],
      default: "12"
    }
  },
  components: {
    "vi-select-v2-svg-icon": k
  },
  setup(e, l) {
    const {
      currentSelect: s,
      clearable: c,
      cacheOptionList: r,
      mode: t
    } = D(O), u = "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z", d = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", n = N({
      isHover: !1
    }), f = function(m) {
      l.emit("click", m);
    }, p = function(m) {
      s.value = "", l.emit("clear"), m.stopPropagation();
    }, h = function(m) {
      l.emit("focus", m);
    }, w = function(m) {
      l.emit("blur", m);
    }, x = function(m) {
      n.isHover = !0, l.emit("mouseenter");
    }, i = function(m) {
      n.isHover = !1, l.emit("mouseleave");
    }, L = v(() => r.value[s.value]);
    return () => a("div", {
      class: [Le(j(), e.active ? "active" : "")],
      onClick: f,
      onMouseenter: x,
      onMouseleave: i
    }, [a("input", {
      class: [j("_inner")],
      placeholder: e.placeholder,
      onFocus: h,
      onBlur: w,
      value: L.value,
      readonly: !0
    }, null), n.isHover && s.value && c.value && t.value == "single" ? a(V("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: d,
      onClick: p
    }, null) : a(V("vi-select-v2-svg-icon"), {
      height: e.iconHeight,
      width: e.iconWidth,
      path: u,
      class: ["arrow", e.active ? "turnUp" : "turnDown"]
    }, null)]);
  }
}), {
  n: _,
  classes: A
} = I("select-v2-dropdown"), Be = /* @__PURE__ */ M({
  name: "VISelectV2DropDown",
  emits: ["focus", "blur", "click"],
  props: ["active"],
  components: {
    "vi-svg-icon": k
  },
  setup(e, l) {
    const {
      selectRef: s,
      mode: c,
      currentSelect: r
    } = D(O), t = N({
      parentRect: {
        x: 0,
        y: 0
      },
      dropdownTop: "0"
    }), u = B(), d = B(), n = () => {
      H(() => {
        t.dropdownTop = s.value.clientHeight + 10 + "px";
      });
    };
    return R(() => n()), W(() => {
      let f = r.value;
      c.value == "multiple" && f && setTimeout(() => {
        n();
      }, 200);
    }), () => {
      var f, p;
      return a("div", {
        class: [_("-popper"), e.active ? "active" : ""],
        style: {
          top: t.dropdownTop
        }
      }, [a("div", {
        ref: u,
        class: [_("-arrow"), e.active ? "active" : ""]
      }, null), a("div", {
        ref: d,
        class: [A(_(), e.active ? "active" : "")]
      }, [a("div", {
        class: [A(_("_inner"))]
      }, [(p = (f = l.slots).default) == null ? void 0 : p.call(f)])])]);
    };
  }
}), {
  n: U,
  classes: Me
} = I("select-v2-tag"), Ie = /* @__PURE__ */ M({
  name: "VISelectV2Tag",
  emits: ["click", "closeClick", "hover"],
  props: {
    label: {
      type: [Number, String],
      default: ""
    },
    value: {
      type: [Number, String],
      default: ""
    },
    tooltip: {
      type: [Boolean, String],
      default: !1
    },
    height: {
      type: [Number, String],
      default: ""
    },
    width: {
      type: [Number, String],
      default: ""
    }
  },
  components: {
    "vi-svg-icon": k
  },
  setup(e, l) {
    const {
      currentSelect: s
    } = D(O), c = "M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z", r = function(t) {
      const u = JSON.parse(JSON.stringify(s.value));
      try {
        u.forEach((d, n) => {
          if (d.value == e.value)
            throw u.splice(n, 1), new Error();
        });
      } catch {
      }
      s.value = u, l.emit && l.emit("closeClick", {
        currentClose: {
          label: e.label,
          value: e.value
        },
        currentSelects: JSON.parse(JSON.stringify(u))
      }), t.stopPropagation();
    };
    return () => a("div", {
      class: [Me(U()), e.tooltip ? "useToolTip" : ""],
      "data-txt": e.label
    }, [a("span", {
      class: U("_span")
    }, [e.label]), a(V("vi-svg-icon"), {
      path: c,
      onClick: r,
      height: e.height + "px",
      width: e.width + "px"
    }, null)]);
  }
}), {
  n: Y,
  classes: Oe
} = I("scroll-bar"), He = /* @__PURE__ */ M({
  name: "VIScrollBar",
  emits: ["focus", "blur", "click"],
  props: ["dynamicCss"],
  directives: {
    css: q
  },
  setup(e, l) {
    const {
      cacheOptionList: s
    } = D(O), c = B(), r = B(), t = N({
      realMargin: 0,
      realPadding: 0,
      viewHeight: 0,
      realHeight: 0,
      maxScrollBoxRange: 0,
      proportion: 0,
      scrollBarHeight: 0,
      maxScrollBarRange: 0,
      scrollBarMovePropor: 0,
      scrollBoxMovePropor: 0,
      translateY: 0,
      startY: 0,
      moveY: 0,
      _move: 0,
      mouseMoving: !1
    }), u = function() {
      H(() => {
        const i = window.getComputedStyle(c.value.children[0]);
        t.realPadding = e.dynamicCss["popper-padding"] * 2, t.realHeight = i.height.replace("px", "") * 1, t.viewHeight = e.dynamicCss["popper-height"] * 1 - t.realPadding, t.maxScrollBoxRange = t.realHeight - t.viewHeight, t.proportion = Number((t.viewHeight / t.realHeight).toFixed(1)), t.scrollBarHeight = t.viewHeight * t.proportion, t.maxScrollBarRange = t.viewHeight - t.scrollBarHeight, t.scrollBarMovePropor = t.maxScrollBarRange / t.maxScrollBoxRange, t.scrollBoxMovePropor = t.maxScrollBoxRange / t.maxScrollBarRange;
      });
    };
    R(() => {
      u();
    }), K(() => s.value, () => {
      u();
    }, {
      deep: !0,
      immediate: !1
    });
    const d = v(() => t.scrollBarHeight < t.realHeight), n = function(i) {
      const L = i.target.scrollTop;
      w(L);
    }, f = function(i) {
      document.addEventListener("mousedown", p), document.addEventListener("mousemove", h);
    }, p = function(i) {
      t.mouseMoving = !0, t.startY = i.clientY;
    }, h = function(i) {
      t.moveY = t.startY - i.clientY, x();
    };
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", h), document.removeEventListener("mousedown", p), t.startY = 0, t.moveY = 0, t.mouseMoving && (t.translateY = t._move), t.mouseMoving = !1;
    });
    const w = function(i) {
      t.mouseMoving || (t.translateY = t.scrollBarMovePropor * i, r.value.style.transform = `translateY(${t.translateY}px)`);
    }, x = function() {
      let i = 0;
      t.moveY < 0 ? i = t.translateY + Math.abs(t.moveY) : t.moveY >= 0 && (i = t.translateY - Math.abs(t.moveY)), i < 0 && (i = 0), i > t.maxScrollBarRange && (i = t.maxScrollBarRange), t._move = i, r.value.style.transform = `translateY(${i}px)`, c.value.scrollTop = Math.abs(t.scrollBoxMovePropor * i);
    };
    return () => {
      var i, L;
      return a("div", {
        class: [Oe(Y())]
      }, [a("div", {
        class: Y("left"),
        ref: c,
        onScroll: n
      }, [(L = (i = l.slots).default) == null ? void 0 : L.call(i)]), d.value ? a("div", {
        ref: r,
        class: Y("right"),
        style: {
          height: t.scrollBarHeight + "px"
        },
        onMousedown: f
      }, null) : ""]);
    };
  }
}), {
  n: De,
  classes: ke
} = I("select-v2-option"), G = /* @__PURE__ */ M({
  name: "VISelectV2Option",
  emits: ["click"],
  props: ["label", "value"],
  components: {
    "vi-svg-icon": k
  },
  setup(e, l) {
    const {
      currentSelect: s,
      currentSelectLabel: c,
      mode: r,
      dropDownVisible: t,
      cacheOptionList: u,
      selectedFn: d,
      deleteOptionItem: n
    } = D(O), f = function() {
      if (r.value == "single")
        s.value = e.value, c.value = e.label, t.value = !1;
      else if (r.value == "multiple") {
        const h = JSON.parse(JSON.stringify(s.value));
        let w = !1;
        try {
          h.forEach((x, i) => {
            if (x.value == e.value)
              throw h.splice(i, 1), w = !0, new Error();
          });
        } catch {
        }
        w || h.push({
          label: e.label,
          value: e.value
        }), s.value = h;
      }
      d({
        label: e.label,
        value: e.value
      });
    };
    W(() => {
      u.value = {
        key: e.label,
        value: e.value
      };
    }), R(() => {
      u.value = {
        key: e.label,
        value: e.value
      };
    }), ve(() => {
      n(e.value);
    });
    const p = v(() => {
      if (r.value == "single")
        return s.value == e.value;
      if (r.value == "multiple") {
        let h = !1;
        try {
          s.value.forEach((w) => {
            if (h = w.value == e.value)
              throw new Error();
          });
        } catch {
        }
        return h;
      }
    });
    return () => a("li", {
      class: [ke(De()), p.value ? "active" : ""],
      onClick: f
    }, [a("div", {
      class: "txt"
    }, [e.label])]);
  }
}), {
  n: C,
  classes: _e
} = I("select-v2"), Ne = /* @__PURE__ */ M({
  name: "VISelectV2",
  emits: ["focus", "blur", "update:modelValue", "handleSelected", "handleClear", "mouseenter", "mouseleave"],
  props: F,
  directives: {
    css: q
  },
  components: {
    "vi-select-v2-input": Ce,
    "vi-select-v2-drop-down": Be,
    "vi-scroll-bar": He,
    "vi-select-v2-tag": Ie,
    "vi-select-v2-svg-icon": k,
    "vi-select-v2-option": G
  },
  setup(e, l) {
    var z;
    const c = "onUpdate:modelValue" in (((z = fe()) == null ? void 0 : z.vnode.props) || {}), r = () => "xxxxxxxx".replace(/[xy]/g, function(o) {
      var g = 0 | 16 * Math.random(), b = o == "x" ? g : 8 | 3 & g;
      return b.toString(16);
    }), t = B(), u = B(), d = B(), n = N({
      uuid: r(),
      dropDownVisible: !1,
      dialogVisible: !1,
      softFocus: !1,
      currentSelectLabel: "",
      OptionList: {},
      list: [],
      __inputPlaceholder: "",
      searchLabel: "",
      searchValue: ""
    }), f = "M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z", p = {
      popperHeight: "0",
      inputLineHeight: "0"
    }, h = function(o) {
      let g = !1;
      for (let b = 0; b < o.path.length; b++) {
        const y = o.path[b];
        if (y.classList && y.classList.value && y.getAttribute("class").includes("-select-v2") && y.dataset.id == n.uuid) {
          g = !0;
          break;
        }
      }
      g || w();
    };
    document.addEventListener("mousedown", h);
    const w = function() {
      n.dropDownVisible = !1, l.emit && l.emit("blur");
    }, x = function(o) {
      return new Promise((g, b) => {
        g(H(() => window.getComputedStyle(o.value)));
      });
    }, i = function(o) {
      e.mode == "single" ? l.emit && l.emit("handleSelected", o) : H(() => {
        l.emit && l.emit("handleSelected", {
          currentSelected: o,
          currentSelects: JSON.parse(JSON.stringify(e.modelValue))
        });
      });
    }, L = function(o) {
      delete n.OptionList[o];
    }, m = function(o) {
      if (o == "co1")
        return "";
      if (o == "auto" || o == "co2" || o == "co3" || o == "co4" || o == "co5" || o == "co6" || o == "co7")
        return "display:flex;flex-wrap: wrap;";
    }, $ = function(o) {
      n.dropDownVisible = !n.dropDownVisible, l.emit && (n.dropDownVisible ? l.emit("focus") : l.emit("blur"));
    }, X = function(o) {
    }, Z = function(o) {
    }, ee = function() {
      l.emit && l.emit("handleClear");
    }, te = function() {
      l.emit && l.emit("mouseenter");
    }, oe = function() {
      l.emit && l.emit("mouseleave");
    }, le = function(o) {
      l.emit && l.emit("handleClear", o);
    }, ne = function(o) {
      let g = o.target.value, b = {};
      n.list.forEach((y) => y.label.includes(g) ? b[y.value] = y.label : ""), n.searchValue = b, n.searchLabel = g, H(() => {
        P.value;
      });
    };
    K(() => e.list, () => {
      n.list = JSON.parse(JSON.stringify(e.list));
    }, {
      deep: !0,
      immediate: !0
    });
    const T = v({
      get() {
        return e.mode == "multiple" && (async () => {
          const {
            height: o
          } = await x(d);
          e.dynamicCss["input-line-height"] = o.replace("px", "") * 1, E.value = e.modelValue.length > 0 ? " " : e.placeholder, e.modelValue.length <= 1 && (e.dynamicCss["input-line-height"] = p.inputLineHeight);
        })(), e.modelValue;
      },
      set(o) {
        c && l.emit("update:modelValue", o);
      }
    }), ae = v({
      get() {
        return n.currentSelectLabel;
      },
      set(o) {
        n.currentSelectLabel = o;
      }
    }), P = v({
      get() {
        let o = Object.keys(n.OptionList).length;
        return o <= 5 && o > 0 ? n.searchValue || (e.search && o++, S.value["popper-height"] = S.value["popper-option-height"] * o + S.value["popper-padding"] * 2) : S.value["popper-height"] = p.popperHeight, n.OptionList;
      },
      set(o) {
        n.OptionList[o.value] = o.key;
      }
    }), ie = v({
      get() {
        return n.dropDownVisible;
      },
      set(o) {
        n.dropDownVisible = o;
      }
    }), E = v({
      get() {
        return n.__inputPlaceholder || e.placeholder;
      },
      set(o) {
        n.__inputPlaceholder = o;
      }
    }), re = v(() => e.clearable), se = v(() => e.mode), S = v(() => {
      let o = Object.assign(F.dynamicCss.default(), e.dynamicCss);
      return p.popperHeight = o["popper-height"], p.inputLineHeight = o["input-line-height"], o;
    }), ce = v(() => e.mode == "multiple"), ue = v(() => !!e.searchImg);
    me(O, {
      selectRef: t,
      currentSelect: T,
      currentSelectLabel: ae,
      mode: se,
      dynamicCss: S,
      dropDownVisible: ie,
      placeholder: E,
      cacheOptionList: P,
      clearable: re,
      selectedFn: i,
      deleteOptionItem: L
    });
    const de = function(o) {
      return a(V("vi-select-v2-tag"), {
        tooltip: e.tooltip,
        label: o.label,
        value: o.value,
        height: S.value["tag-close-size"],
        width: S.value["tag-close-size"],
        onCloseClick: le
      }, null);
    }, pe = function() {
      return a(V("vi-select-v2-input"), {
        iconHeight: S.value["input-icon-width"],
        iconWidth: S.value["input-icon-width"],
        ref: u,
        active: n.dropDownVisible,
        placeholder: E.value,
        onClick: $,
        onFocus: X,
        onBlur: Z,
        onClear: ee,
        onMouseenter: te,
        onMouseleave: oe
      }, null);
    }, he = function() {
      return a("li", {
        class: C("-search")
      }, [ue.value ? a("img", {
        class: C("--search"),
        src: e.searchImg
      }, null) : a(V("vi-select-v2-svg-icon"), {
        class: C("--search"),
        path: f
      }, null), a("input", {
        value: n.searchLabel,
        class: C("-search__input"),
        placeholder: "请输入您要搜索的内容",
        onInput: ne
      }, null)]);
    }, ge = function() {
      return a(V("vi-select-v2-drop-down"), {
        active: n.dropDownVisible
      }, {
        default: () => [a(V("vi-scroll-bar"), {
          dynamicCss: S.value
        }, {
          default: () => {
            var o, g;
            return [a("ul", null, [e.search ? he() : "", n.searchValue ? a("div", {
              style: m(e.itemLayout),
              class: e.itemLayout
            }, [Object.keys(n.searchValue).map((b, y) => a(V("vi-select-v2-option"), {
              key: b,
              value: b,
              label: Object.values(n.searchValue)[y]
            }, null))]) : a("div", {
              style: m(e.itemLayout),
              class: e.itemLayout
            }, [(g = (o = l.slots).default) == null ? void 0 : g.call(o)]), Object.keys(P.value).length <= 0 ? a("li", {
              class: C("-notData")
            }, [Se("暂无数据")]) : ""])];
          }
        })]
      });
    };
    return () => be(a("div", {
      "data-id": n.uuid,
      class: [_e(C())],
      ref: t
    }, [ce.value ? a("div", {
      ref: d,
      class: C("-taglist"),
      onClick: $
    }, [T.value.map((o) => de(o))]) : "", pe(), ge()]), [[we("css"), S.value || {}]]);
  }
}), Ye = Q(Ne, "select-v2"), Re = Q(G, "select-v2-option");
export {
  Ye as VISelectV2,
  Re as VISelectV2Option,
  Ye as default
};
