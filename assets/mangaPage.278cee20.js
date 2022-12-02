import { Q as QPage } from "./QPage.126447b9.js";
import { g as getImgBlob, Q as QImg } from "./usefull.0f9a3edc.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QChip, a as QMenu } from "./QMenu.ebcf9c01.js";
import { storeGet, storeSet } from "./StoreStuff.f5900537.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, j as createBlock, n as createCommentVNode, u as createBaseVNode, q as normalizeClass, t as toDisplayString, p as createTextVNode, m as createVNode, F as Fragment, x as renderList, a6 as normalizeStyle, k as withCtx, c as computed, a7 as debounce, J as onDeactivated, I as onActivated, o as onBeforeUnmount, h, B as withDirectives, g as getCurrentInstance, Z as client, X as noop, a0 as leftClick, U as addEvt, W as position, V as cleanEvt, L as stopAndPrevent, P as Plugin, a5 as useRoute, s as resolveComponent, ai as withModifiers } from "./index.0b61810d.js";
import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QList } from "./QList.23ba57c4.js";
import { Q as QLinearProgress } from "./QLinearProgress.06ab1855.js";
import { Q as QIntersection } from "./QIntersection.6a6cf41f.js";
import { u as useDarkProps, a as useDark } from "./use-dark.bc291eea.js";
import { Q as QResizeObserver } from "./QResizeObserver.eb13856c.js";
import { Q as QScrollObserver } from "./QScrollObserver.88307b77.js";
import { T as TouchPan } from "./TouchPan.d2091680.js";
import { c as createComponent, a as hMergeSlot, f as createDirective } from "./QSpinner.0d412098.js";
import { b as between } from "./format.2a3572e1.js";
import { e as setHorizontalScrollPosition, s as setVerticalScrollPosition } from "./scroll.34fac392.js";
import { Q as QTooltip } from "./QTooltip.02a6ea06.js";
import { Q as QPageSticky } from "./QPageSticky.3c9de08f.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { c as clearSelection } from "./selection.2c9d8487.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { p as isdlsock } from "./models.d7e94ac2.js";
import { Q as QTab } from "./QTab.aacc573f.js";
import { Q as QTabs } from "./QTabs.460280b8.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QCheckbox } from "./QCheckbox.e3080dd8.js";
import { Q as QRadio } from "./QRadio.0e80ef9a.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { u as useDlSock } from "./useDlSock.b6f1d62c.js";
import "./axios.a87bcd6c.js";
import "./position-engine.94f26946.js";
import "./use-timeout.99cd911c.js";
import "./use-transition.65db8379.js";
import "./dom.fd94eb85.js";
import "./focus-manager.32f8d49a.js";
import "./Intersection.9c3ca45b.js";
import "./uid.42677368.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
var mangaInfo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = defineComponent({
  name: "MangaInfo",
  props: {
    manga: {
      type: Object,
      default: Object
    },
    offset: {
      type: Number,
      default: () => 0
    }
  },
  emits: ["inlib"],
  setup(props) {
    var _a;
    const useCache = storeGet("useCache", true);
    return {
      useCache,
      inLib: ref(((_a = props.manga) == null ? void 0 : _a.inLibrary) || false),
      imgdata: ref()
    };
  },
  created: function() {
    if (this.imgdata && this.manga) {
      this.getImg();
    } else {
      const unwatch = this.$watch(
        () => [this.imgdata, this.manga],
        () => {
          if (!this.imgdata && this.manga) {
            this.getImg();
            unwatch();
          }
        }
      );
    }
  },
  methods: {
    async InLibrary() {
      this.inLib = !this.inLib;
      if (this.inLib) {
        await this.$api.get(
          `/api/v1/manga/${this.$route.params["mangaID"]}/library/`
        );
      } else {
        await this.$api.delete(
          `/api/v1/manga/${this.$route.params["mangaID"]}/library/`
        );
      }
      this.$emit("inlib");
    },
    getImg() {
      var _a;
      getImgBlob(((_a = this.manga) == null ? void 0 : _a.thumbnailUrl) + "?useCache=" + this.useCache).then(
        (value) => {
          this.imgdata = value;
        }
      );
    }
  }
});
const _hoisted_1$2 = { class: "flex no-wrap" };
const _hoisted_2$2 = {
  key: 1,
  class: "q-mx-md",
  style: { "display": "inline-block" }
};
const _hoisted_3$2 = {
  key: 0,
  class: "text-h5 q-my-xs"
};
const _hoisted_4$1 = { class: "text-subtitle1" };
const _hoisted_5 = {
  key: 1,
  class: "text-h5 q-my-xs"
};
const _hoisted_6 = { class: "text-subtitle1" };
const _hoisted_7 = {
  key: 2,
  class: "text-h5 q-my-xs"
};
const _hoisted_8 = { class: "text-subtitle1" };
const _hoisted_9 = {
  key: 3,
  class: "text-h5 q-my-xs"
};
const _hoisted_10 = { class: "text-subtitle1" };
const _hoisted_11 = {
  class: "q-my-md",
  style: { "display": "flex", "justify-content": "space-evenly" }
};
const _hoisted_12 = { key: 1 };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h6", { class: "q-my-sm" }, "About:", -1);
const _hoisted_14 = { style: { "font-size": "1.3em" } };
const _hoisted_15 = { key: 2 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g;
  return openBlock(), createElementBlock("div", {
    class: "q-px-md q-py-md col MangaInfo",
    style: normalizeStyle([
      { "overflow-y": "auto" },
      _ctx.$q.screen.sm || _ctx.$q.screen.xs ? `` : `max-height: calc(100vh - ` + _ctx.offset + `px)`
    ])
  }, [
    _ctx.$q.screen.sm || _ctx.$q.screen.xs || _ctx.$q.screen.md ? (openBlock(), createBlock(QImg, {
      key: 0,
      style: { "width": "fit-content", "max-width": "100%" },
      loading: "lazy",
      class: "rounded-borders q-mx-md",
      "img-class": "test",
      src: _ctx.imgdata,
      fit: "scale-down"
    }, null, 8, ["src"])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_1$2, [
      !(_ctx.$q.screen.sm || _ctx.$q.screen.xs || _ctx.$q.screen.md) ? (openBlock(), createBlock(QImg, {
        key: 0,
        style: { "width": "fit-content", "max-width": "50%", "flex": "none" },
        loading: "lazy",
        class: "rounded-borders",
        "img-class": "test",
        src: _ctx.imgdata,
        fit: "scale-down"
      }, null, 8, ["src"])) : createCommentVNode("", true),
      _ctx.manga ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
        createBaseVNode("h3", {
          style: { "overflow-wrap": "anywhere" },
          class: normalizeClass(_ctx.$q.screen.sm || _ctx.$q.screen.xs || _ctx.$q.screen.md ? `q-my-sm` : ``)
        }, toDisplayString(_ctx.manga.title), 3),
        _ctx.manga.author ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createTextVNode(" Author: "),
          createBaseVNode("span", _hoisted_4$1, toDisplayString(_ctx.manga.author), 1)
        ])) : createCommentVNode("", true),
        _ctx.manga.artist ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createTextVNode(" Artist: "),
          createBaseVNode("span", _hoisted_6, toDisplayString(_ctx.manga.artist), 1)
        ])) : createCommentVNode("", true),
        _ctx.manga.status ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createTextVNode(" Status: "),
          createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.manga.status), 1)
        ])) : createCommentVNode("", true),
        ((_a = _ctx.manga.source) == null ? void 0 : _a.displayName) ? (openBlock(), createElementBlock("div", _hoisted_9, [
          createTextVNode(" Source: "),
          createBaseVNode("span", _hoisted_10, toDisplayString((_b = _ctx.manga.source) == null ? void 0 : _b.displayName), 1)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_11, [
      createVNode(QBtn, {
        flat: "",
        color: ((_c = _ctx.manga) == null ? void 0 : _c.inLibrary) ? `primary` : `grey-9`,
        icon: "favorite",
        label: ((_d = _ctx.manga) == null ? void 0 : _d.inLibrary) ? `In Library` : `Add To Library`,
        onClick: _ctx.InLibrary
      }, null, 8, ["color", "label", "onClick"]),
      createVNode(QBtn, {
        flat: "",
        color: "grey-9",
        icon: "public",
        label: "Open Site",
        href: (_e = _ctx.manga) == null ? void 0 : _e.realUrl,
        target: "_blank"
      }, null, 8, ["href"])
    ]),
    ((_f = _ctx.manga) == null ? void 0 : _f.description) ? (openBlock(), createElementBlock("div", _hoisted_12, [
      _hoisted_13,
      createBaseVNode("p", _hoisted_14, toDisplayString(_ctx.manga.description), 1)
    ])) : createCommentVNode("", true),
    ((_g = _ctx.manga) == null ? void 0 : _g.genre) ? (openBlock(), createElementBlock("div", _hoisted_15, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.manga.genre, (tag) => {
        return openBlock(), createBlock(QChip, {
          key: tag,
          outline: "",
          color: "primary"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(tag), 1)
          ]),
          _: 2
        }, 1024);
      }), 128))
    ])) : createCommentVNode("", true)
  ], 4);
}
var mangaInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "mangaInfo.vue"]]);
const axisList = ["vertical", "horizontal"];
const dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
const panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
const getMinThumbSize = (size) => size >= 250 ? 50 : Math.ceil(size / 5);
var QScrollArea = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    let timer, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    scroll.vertical.percentage = computed(() => {
      const diff = scroll.vertical.size.value - container.vertical.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(
      () => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1
    );
    scroll.vertical.thumbStart = computed(
      () => scroll.vertical.percentage.value * (container.vertical.value - scroll.vertical.thumbSize.value)
    );
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.vertical.value * container.vertical.value / scroll.vertical.size.value,
          getMinThumbSize(container.vertical.value),
          container.vertical.value
        )
      )
    );
    scroll.vertical.style = computed(() => {
      return {
        ...props.thumbStyle,
        ...props.verticalThumbStyle,
        top: `${scroll.vertical.thumbStart.value}px`,
        height: `${scroll.vertical.thumbSize.value}px`
      };
    });
    scroll.vertical.thumbClass = computed(
      () => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")
    );
    scroll.vertical.barClass = computed(
      () => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")
    );
    scroll.horizontal.percentage = computed(() => {
      const diff = scroll.horizontal.size.value - container.horizontal.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.horizontal.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(
      () => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1
    );
    scroll.horizontal.thumbStart = computed(
      () => scroll.horizontal.percentage.value * (container.horizontal.value - scroll.horizontal.thumbSize.value)
    );
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontal.value * container.horizontal.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontal.value),
          container.horizontal.value
        )
      )
    );
    scroll.horizontal.style = computed(() => {
      return {
        ...props.thumbStyle,
        ...props.horizontalThumbStyle,
        left: `${scroll.horizontal.thumbStart.value}px`,
        width: `${scroll.horizontal.thumbSize.value}px`
      };
    });
    scroll.horizontal.thumbClass = computed(
      () => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")
    );
    scroll.horizontal.barClass = computed(
      () => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")
    );
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props.contentStyle : props.contentActiveStyle);
    const thumbVertDir = [[
      TouchPan,
      (e) => {
        onPanThumb(e, "vertical");
      },
      void 0,
      { vertical: true, ...panOpts }
    ]];
    const thumbHorizDir = [[
      TouchPan,
      (e) => {
        onPanThumb(e, "horizontal");
      },
      void 0,
      { horizontal: true, ...panOpts }
    ]];
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        info[axis + "Position"] = data.position.value;
        info[axis + "Percentage"] = data.percentage.value;
        info[axis + "Size"] = data.size.value;
        info[axis + "ContainerSize"] = container[axis].value;
      });
      return info;
    }
    const emitScroll = debounce(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset, duration) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset, duration);
    }
    function updateContainer({ height, width }) {
      let change = false;
      if (container.vertical.value !== height) {
        container.vertical.value = height;
        change = true;
      }
      if (container.horizontal.value !== width) {
        container.horizontal.value = width;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position: position2 }) {
      let change = false;
      if (scroll.vertical.position.value !== position2.top) {
        scroll.vertical.position.value = position2.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position2.left) {
        scroll.horizontal.position.value = position2.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height, width }) {
      if (scroll.horizontal.size.value !== width) {
        scroll.horizontal.size.value = width;
        startTimer();
      }
      if (scroll.vertical.size.value !== height) {
        scroll.vertical.size.value = height;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) {
          return;
        }
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const containerSize = container[axis].value;
      const multiplier = (data.size.value - containerSize) / (containerSize - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const offset = evt[dirProps[axis].offset];
        if (offset < data.thumbStart.value || offset > data.thumbStart.value + data.thumbSize.value) {
          const pos = offset - data.thumbSize.value / 2;
          setScroll(pos / container[axis].value * data.size.value, axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function onVerticalMousedown(evt) {
      onMousedown(evt, "vertical");
    }
    function onHorizontalMousedown(evt) {
      onMousedown(evt, "horizontal");
    }
    function startTimer() {
      if (tempShowing.value === true) {
        clearTimeout(timer);
      } else {
        tempShowing.value = true;
      }
      timer = setTimeout(() => {
        tempShowing.value = false;
      }, props.delay);
      props.onScroll !== void 0 && emitScroll();
    }
    function setScroll(offset, axis) {
      targetRef.value[dirProps[axis].scroll] = offset;
    }
    function onMouseenter() {
      hover.value = true;
    }
    function onMouseleave() {
      hover.value = false;
    }
    let scrollPosition = null;
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null) {
        return;
      }
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value),
          duration
        );
      }
    });
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props.tabindex !== void 0 ? props.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver, {
          debounce: 0,
          onResize: updateContainer
        }),
        h("div", {
          class: scroll.vertical.barClass.value,
          style: [props.barStyle, props.verticalBarStyle],
          "aria-hidden": "true",
          onMousedown: onVerticalMousedown
        }),
        h("div", {
          class: scroll.horizontal.barClass.value,
          style: [props.barStyle, props.horizontalBarStyle],
          "aria-hidden": "true",
          onMousedown: onHorizontalMousedown
        }),
        withDirectives(
          h("div", {
            ref: scroll.vertical.ref,
            class: scroll.vertical.thumbClass.value,
            style: scroll.vertical.style.value,
            "aria-hidden": "true"
          }),
          thumbVertDir
        ),
        withDirectives(
          h("div", {
            ref: scroll.horizontal.ref,
            class: scroll.horizontal.thumbClass.value,
            style: scroll.horizontal.style.value,
            "aria-hidden": "true"
          }),
          thumbHorizDir
        )
      ]);
    };
  }
});
var TouchHold = createDirective(
  {
    name: "touch-hold",
    beforeMount(el, binding) {
      const { modifiers } = binding;
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const ctx = {
        handler: binding.value,
        noop,
        mouseStart(evt) {
          if (typeof ctx.handler === "function" && leftClick(evt) === true) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "passiveCapture"],
              [document, "click", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (evt.target !== void 0 && typeof ctx.handler === "function") {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "passiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          ctx.origin = position(evt);
          const startTime = Date.now();
          if (client.is.mobile === true) {
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelay) => {
              ctx.styleCleanup = void 0;
              const remove = () => {
                document.body.classList.remove("non-selectable");
              };
              if (withDelay === true) {
                clearSelection();
                setTimeout(remove, 10);
              } else {
                remove();
              }
            };
          }
          ctx.triggered = false;
          ctx.sensitivity = mouseEvent === true ? ctx.mouseSensitivity : ctx.touchSensitivity;
          ctx.timer = setTimeout(() => {
            clearSelection();
            ctx.triggered = true;
            ctx.handler({
              evt,
              touch: mouseEvent !== true,
              mouse: mouseEvent === true,
              position: ctx.origin,
              duration: Date.now() - startTime
            });
          }, ctx.duration);
        },
        move(evt) {
          const { top, left } = position(evt);
          if (Math.abs(left - ctx.origin.left) >= ctx.sensitivity || Math.abs(top - ctx.origin.top) >= ctx.sensitivity) {
            clearTimeout(ctx.timer);
          }
        },
        end(evt) {
          cleanEvt(ctx, "temp");
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(ctx.triggered);
          if (ctx.triggered === true) {
            evt !== void 0 && stopAndPrevent(evt);
          } else {
            clearTimeout(ctx.timer);
          }
        }
      };
      const data = [600, 5, 7];
      if (typeof binding.arg === "string" && binding.arg.length > 0) {
        binding.arg.split(":").forEach((val, index) => {
          const v = parseInt(val, 10);
          v && (data[index] = v);
        });
      }
      [ctx.duration, ctx.touchSensitivity, ctx.mouseSensitivity] = data;
      el.__qtouchhold = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchend", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, binding) {
      const ctx = el.__qtouchhold;
      if (ctx !== void 0 && binding.oldValue !== binding.value) {
        typeof binding.value !== "function" && ctx.end();
        ctx.handler = binding.value;
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchhold;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        clearTimeout(ctx.timer);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchhold;
      }
    }
  }
);
const Unread = ref(null);
const Downloaded = ref(null);
const Bookmarked = ref(null);
const Source = ref(null);
const FetchDate = ref(null);
const Display = ref("source");
function chaptersFilter(mangaID) {
  Unread.value = Plugin.getItem(`${mangaID}ChUnread`);
  Downloaded.value = Plugin.getItem(`${mangaID}ChDownloaded`);
  Bookmarked.value = Plugin.getItem(`${mangaID}ChBookmarked`);
  Source.value = Plugin.getItem(`${mangaID}ChSource`);
  FetchDate.value = Plugin.getItem(`${mangaID}ChFetchDate`);
  Display.value = Plugin.getItem(`${mangaID}ChDisplay`);
  const setUnread = function(value) {
    if (value == null)
      Plugin.remove(`${mangaID}ChUnread`);
    else
      Plugin.set(`${mangaID}ChUnread`, value);
    Unread.value = value;
  };
  const setDownloaded = function(value) {
    storeSet(`${mangaID}ChDownloaded`, value);
    Downloaded.value = value;
  };
  const setBookmarked = function(value) {
    storeSet(`${mangaID}ChBookmarked`, value);
    Bookmarked.value = value;
  };
  const setSource = function(value) {
    if (value != null) {
      storeSet(`${mangaID}ChSource`, value);
      Plugin.remove(`${mangaID}ChFetchDate`);
    }
    Source.value = value;
  };
  const setFetchDate = function(value) {
    if (value != null) {
      storeSet(`${mangaID}ChFetchDate`, value);
      Plugin.remove(`${mangaID}ChSource`);
    }
    FetchDate.value = value;
  };
  const setDisplay = function(value) {
    storeSet(`${mangaID}ChDisplay`, value, "source");
    Display.value = value;
  };
  if (Source.value == null && FetchDate.value == null)
    Source.value = false;
  if (Display.value == null)
    Display.value = "source";
  return {
    Unread,
    Downloaded,
    Bookmarked,
    Source,
    FetchDate,
    Display,
    setUnread,
    setDownloaded,
    setBookmarked,
    setSource,
    setFetchDate,
    setDisplay
  };
}
const _sfc_main$2 = defineComponent({
  name: "LibraryTopBar",
  setup() {
    const route = useRoute();
    const filt = chaptersFilter(parseInt(`${route.params["mangaID"]}`));
    const filters = ref(filt);
    return {
      dialo: ref(false),
      tab: ref("filter"),
      unread: ref(filt.Unread),
      downloaded: ref(filt.Downloaded),
      bookmarked: ref(filt.Bookmarked),
      Source: ref(filt.Source),
      FetchDate: ref(filt.FetchDate),
      filt: filters,
      disp: ref(filt.Display)
    };
  },
  watch: {
    unread() {
      this.filt.setUnread(this.unread);
    },
    downloaded() {
      this.filt.setDownloaded(this.downloaded);
    },
    bookmarked() {
      this.filt.setBookmarked(this.bookmarked);
    },
    Source() {
      this.filt.setSource(this.Source);
      if (this.Source != null) {
        this.FetchDate = null;
      }
    },
    FetchDate() {
      this.filt.setFetchDate(this.FetchDate);
      if (this.FetchDate != null) {
        this.Source = null;
      }
    },
    disp() {
      this.filt.setDisplay(this.disp);
    }
  },
  methods: {
    aredefaults() {
      return this.unread == null && this.downloaded == null && this.bookmarked == null && this.Source == false && this.FetchDate == null && this.disp == "source";
    }
  }
});
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { key: 2 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtn, {
      flat: "",
      class: "q-ml-sm",
      round: "",
      "text-color": _ctx.$q.dark.isActive ? _ctx.aredefaults() ? `white` : `orange` : _ctx.aredefaults() ? `dark` : `orange`,
      icon: "filter_list",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialo = true)
    }, null, 8, ["text-color"]),
    createVNode(QDialog, {
      modelValue: _ctx.dialo,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.dialo = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-pa-none" }, {
              default: withCtx(() => [
                createVNode(QTabs, {
                  modelValue: _ctx.tab,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.tab = $event),
                  class: "text-teal"
                }, {
                  default: withCtx(() => [
                    createVNode(QTab, {
                      class: "q-px-xl",
                      name: "filter",
                      icon: "filter_list",
                      label: "Filter"
                    }),
                    createVNode(QTab, {
                      class: "q-px-xl",
                      name: "sort",
                      icon: "sort",
                      label: "Sort"
                    }),
                    createVNode(QTab, {
                      class: "q-px-xl",
                      name: "display",
                      icon: "display_settings",
                      label: "Display"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _ctx.tab == "filter" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createVNode(QCardSection, { class: "q-px-md q-pt-md q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.unread,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.unread = $event),
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    label: "Unread",
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "primary"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-py-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.downloaded,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.downloaded = $event),
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    label: "Downloaded",
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "primary"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.bookmarked,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.bookmarked = $event),
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    label: "Bookmarked",
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "primary"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            _ctx.tab == "sort" ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
              createVNode(QCardSection, { class: "q-px-md q-pt-md q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.Source,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.Source = $event),
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    label: "By Source"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.FetchDate,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.FetchDate = $event),
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    label: "By Fetch date"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            _ctx.tab == "display" ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
              createVNode(QCardSection, { class: "q-px-md q-pt-md q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QRadio, {
                    modelValue: _ctx.disp,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.disp = $event),
                    val: "source",
                    label: "By Source Title"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QRadio, {
                    modelValue: _ctx.disp,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.disp = $event),
                    val: "chapter",
                    label: "By Chapter Number"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
var filterr = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "Filter.vue"]]);
var chapterList_vue_vue_type_style_index_0_scoped_true_lang = "";
var chapterList_vue_vue_type_style_index_1_lang = "";
const _sfc_main$1 = defineComponent({
  name: "MangaChapters",
  components: { filterr },
  setup() {
    const route = useRoute();
    const filters = ref(chaptersFilter(parseInt(`${route.params["mangaID"]}`)));
    const chapters = ref([]);
    const chaptersfilt = ref([]);
    const Emitt = useDlSock();
    const Emitter = ref(Emitt);
    const downloads = ref([]);
    const downloadsnum = ref(0);
    const tmp = Emitt.eventsFromServer.value ? JSON.parse(Emitt.eventsFromServer.value) : [];
    if (isdlsock(tmp)) {
      const tmpp = tmp.queue.filter(
        (ele) => ele.mangaId == parseInt(`${route.params["mangaID"]}`)
      );
      downloadsnum.value = tmpp.length;
      downloads.value = tmpp;
    }
    if (Emitter.value.isConnected) {
      Emitt.sendMsg("STATUS");
    }
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      chapters,
      chaptersfilt,
      filters,
      Emitter,
      downloadsnum,
      downloads,
      selectMode: ref(false),
      selected: ref([]),
      fabPos,
      draggingFab
    };
  },
  computed: {
    doFilt() {
      let chapts = this.chapters;
      if (this.filters.Unread != null) {
        chapts = chapts.filter(
          (ele) => this.filters.Unread ? !ele.read : ele.read
        );
      }
      if (this.filters.Downloaded != null) {
        chapts = chapts.filter(
          (ele) => this.filters.Downloaded ? ele.downloaded : !ele.downloaded
        );
      }
      if (this.filters.Bookmarked != null) {
        chapts = chapts.filter(
          (ele) => this.filters.Bookmarked ? ele.bookmarked : !ele.bookmarked
        );
      }
      return chapts;
    },
    doSrt() {
      let chapts = this.doFilt;
      if (this.filters.Source != null) {
        chapts = chapts.sort(
          (a, b) => this.filters.Source ? a.index > b.index ? 1 : -1 : a.index < b.index ? 1 : -1
        );
      }
      if (this.filters.FetchDate != null) {
        chapts = chapts.sort(
          (a, b) => this.filters.FetchDate ? a.fetchedAt > b.fetchedAt ? -1 : 1 : a.fetchedAt < b.fetchedAt ? -1 : 1
        );
      }
      return chapts;
    },
    res() {
      const notRead = this.doSrt.filter((ele) => !ele.read);
      if (!notRead.length) {
        return `/manga/${this.$route.params["mangaID"]}/chapter/${1}`;
      } else {
        const notreadchap = notRead[notRead.length - 1];
        return `/manga/${notreadchap.mangaId}/chapter/${notreadchap.index}`;
      }
    }
  },
  watch: {
    "Emitter.eventsFromServer"(val) {
      const tmp = JSON.parse(val);
      if (isdlsock(tmp)) {
        const tmpp = tmp.queue.filter(
          (ele) => ele.mangaId == parseInt(`${this.$route.params["mangaID"]}`)
        );
        if (this.downloadsnum != tmpp.length) {
          this.getonline();
        }
        this.downloadsnum = tmpp.length;
        this.downloads = tmpp;
      }
    }
  },
  created: async function() {
    this.$bus.on("updateManga", () => {
      this.getonline("true");
    });
    this.getonline();
  },
  methods: {
    moveFab(ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;
      let x = this.fabPos[0] - ev.delta.x;
      let y = this.fabPos[1] - ev.delta.y;
      const conta = this.$refs["conta"].parentElement.getBoundingClientRect();
      const stick = this.$refs["sticky"].$el.getBoundingClientRect();
      const maxy = conta.height;
      const sticky = stick.height;
      if (y > maxy - sticky)
        y = maxy - sticky;
      if (y < 0)
        y = 0;
      const maxx = conta.width;
      const stickx = stick.width;
      if (x > maxx - stickx)
        x = maxx - stickx;
      if (x < 0)
        x = 0;
      this.fabPos = [x, y];
    },
    calcHeight() {
      const tmp = this.$refs["chapHead"];
      if (tmp == void 0)
        return 0;
      let elHeight = tmp.getBoundingClientRect().bottom;
      elHeight += parseInt(
        window.getComputedStyle(tmp).getPropertyValue("margin-bottom")
      );
      return elHeight || 0;
    },
    async getonline(TF = "false", retry = 2) {
      try {
        this.chapters = (await this.$api.get(
          `/api/v1/manga/${this.$route.params["mangaID"]}/chapters?onlineFetch=${TF}`
        )).data;
      } catch (e) {
        retry--;
        if (retry >= 0) {
          console.warn(
            "fetch chapters failed in chapterList Retrying, retries left: " + retry
          );
          this.getonline(TF, retry);
        } else {
          console.error("fetch chapters failed in chapterList");
        }
      }
    },
    async download(index) {
      await this.$api.get(
        `/api/v1/download/${this.$route.params["mangaID"]}/chapter/${index}`
      );
    },
    async dele(index) {
      await this.$api.delete(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${index}`
      );
      this.getonline();
    },
    async mpatch(index, FD) {
      await this.$api.patchForm(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${index}`,
        FD
      );
      this.getonline();
    },
    handleHold(id) {
      this.selectMode = true;
      this.selectthis(id);
    },
    selectthis(id) {
      if (this.selected.includes(id)) {
        this.selected = this.selected.filter((e) => e !== id);
      } else {
        this.selected.push(id);
      }
    },
    selectall() {
      if (!this.selected.length) {
        this.selected = this.doSrt.map((ele) => ele.id);
      } else {
        this.selected = [];
      }
    },
    dl(list) {
      this.$api.post("/api/v1/download/batch", { chapterIds: list });
    },
    read(list, tf = true, rb = "isRead") {
      this.$api.post(`/api/v1/manga/${this.$route.params["mangaID"]}/chapter/batch`, {
        chapterIds: list,
        change: { [rb]: tf }
      }).then(() => this.getonline());
    }
  }
});
const _hoisted_1 = { ref: "conta" };
const _hoisted_2 = {
  ref: "chapHead",
  class: "row justify-between items-center"
};
const _hoisted_3 = { class: "q-ma-md" };
const _hoisted_4 = { style: { "padding-right": "12px" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_filterr = resolveComponent("filterr");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h4", _hoisted_3, toDisplayString(_ctx.chapters.length) + " chapters", 1),
      createBaseVNode("div", _hoisted_4, [
        _ctx.selectMode ? (openBlock(), createBlock(QBtn, {
          key: 0,
          flat: "",
          round: "",
          icon: "select_all",
          onClick: _ctx.selectall
        }, null, 8, ["onClick"])) : createCommentVNode("", true),
        createVNode(QBtn, {
          flat: "",
          round: "",
          icon: _ctx.selectMode ? `flip_to_front` : `flip_to_back`,
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.selectMode = !_ctx.selectMode)
        }, null, 8, ["icon"]),
        createVNode(QBtn, {
          round: "",
          flat: "",
          icon: "more_vert"
        }, {
          default: withCtx(() => [
            createVNode(QMenu, {
              anchor: "bottom end",
              self: "top right"
            }, {
              default: withCtx(() => [
                createVNode(QList, { style: { "width": "fit-content" } }, {
                  default: withCtx(() => [
                    createVNode(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "keyboard_arrow_left" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("download")
                          ]),
                          _: 1
                        }),
                        createVNode(QMenu, {
                          anchor: "top start",
                          self: "top end",
                          style: { "white-space": "nowrap" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.dl(
                                    _ctx.doSrt.filter((ele) => !ele.downloaded).map((ele) => ele.id)
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Download All")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.dl(
                                    _ctx.doSrt.filter((ele) => !ele.downloaded).slice(-5).map((ele) => ele.id)
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Download Next 5")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                _ctx.selectMode ? withDirectives((openBlock(), createBlock(QItem, {
                                  key: 0,
                                  clickable: "",
                                  onClick: _cache[3] || (_cache[3] = ($event) => _ctx.dl(_ctx.selected))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Download Selected")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "keyboard_arrow_left" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Read")
                          ]),
                          _: 1
                        }),
                        createVNode(QMenu, {
                          anchor: "top start",
                          self: "top end",
                          style: { "white-space": "nowrap" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[4] || (_cache[4] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !ele.read).map((ele) => ele.id)
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Read All")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[5] || (_cache[5] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !ele.read).slice(-5).map((ele) => ele.id)
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Read Next 5")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                _ctx.selectMode ? withDirectives((openBlock(), createBlock(QItem, {
                                  key: 0,
                                  clickable: "",
                                  onClick: _cache[6] || (_cache[6] = ($event) => _ctx.read(_ctx.selected))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Read Selected")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "keyboard_arrow_left" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Unread")
                          ]),
                          _: 1
                        }),
                        createVNode(QMenu, {
                          anchor: "top start",
                          self: "top end",
                          style: { "white-space": "nowrap" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[7] || (_cache[7] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !!ele.read).map((ele) => ele.id),
                                    false
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unread All")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[8] || (_cache[8] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !!ele.read).slice(0, 5).map((ele) => ele.id),
                                    false
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unread Last 5")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                _ctx.selectMode ? withDirectives((openBlock(), createBlock(QItem, {
                                  key: 0,
                                  clickable: "",
                                  onClick: _cache[9] || (_cache[9] = ($event) => _ctx.read(_ctx.selected, false))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unread Selected")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "keyboard_arrow_left" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Bookmark")
                          ]),
                          _: 1
                        }),
                        createVNode(QMenu, {
                          anchor: "top start",
                          self: "top end",
                          style: { "white-space": "nowrap" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[10] || (_cache[10] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !ele.bookmarked).map((ele) => ele.id),
                                    true,
                                    "isBookmarked"
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Bookmark All")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[11] || (_cache[11] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !ele.bookmarked).slice(-5).map((ele) => ele.id),
                                    true,
                                    "isBookmarked"
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Bookmark Next 5")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                _ctx.selectMode ? withDirectives((openBlock(), createBlock(QItem, {
                                  key: 0,
                                  clickable: "",
                                  onClick: _cache[12] || (_cache[12] = ($event) => _ctx.read(_ctx.selected, true, "isBookmarked"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Bookmark Selected")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "keyboard_arrow_left" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Unbookmark")
                          ]),
                          _: 1
                        }),
                        createVNode(QMenu, {
                          anchor: "top start",
                          self: "top end",
                          style: { "white-space": "nowrap" }
                        }, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[13] || (_cache[13] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !!ele.bookmarked).map((ele) => ele.id),
                                    false,
                                    "isBookmarked"
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unbookmark All")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: _cache[14] || (_cache[14] = ($event) => _ctx.read(
                                    _ctx.doSrt.filter((ele) => !!ele.bookmarked).slice(0, 5).map((ele) => ele.id),
                                    false,
                                    "isBookmarked"
                                  ))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unbookmark Last 5")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]),
                                _ctx.selectMode ? withDirectives((openBlock(), createBlock(QItem, {
                                  key: 0,
                                  clickable: "",
                                  onClick: _cache[15] || (_cache[15] = ($event) => _ctx.read(_ctx.selected, false, "isBookmarked"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unbookmark Selected")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })), [
                                  [ClosePopup]
                                ]) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_filterr)
      ])
    ], 512),
    createVNode(QScrollArea, {
      class: normalizeClass(["q-pr-xs", _ctx.selectMode ? ` selectmode` : ``]),
      style: normalizeStyle(
        _ctx.$q.screen.sm || _ctx.$q.screen.xs ? `height: 50vh` : `height: calc(100vh - ` + _ctx.calcHeight() + `px)`
      )
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.doSrt, (item) => {
          return openBlock(), createBlock(QIntersection, {
            key: item.index,
            style: { "height": "58px" },
            class: ""
          }, {
            default: withCtx(() => [
              withDirectives((openBlock(), createBlock(QItem, {
                id: item.id,
                key: item.index,
                clickable: "",
                class: normalizeClass([
                  "q-ma-sm rounded-borders",
                  (item.read ? `text-grey` : ``) + ` ` + (_ctx.selected.includes(item.id) && _ctx.selectMode ? `selected` : ``) + " " + (_ctx.$q.dark.isActive ? `bg-dark` : `bg-light`)
                ]),
                to: _ctx.selectMode ? void 0 : `/manga/` + item.mangaId + `/chapter/` + item.index,
                onClick: ($event) => _ctx.selectMode ? _ctx.selectthis(item.id) : void 0
              }, {
                default: withCtx(() => [
                  item.bookmarked ? (openBlock(), createBlock(QItemSection, {
                    key: 0,
                    side: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            color: "primary",
                            name: "bookmark",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.filters.Display == "source" ? item.name : "Chapter " + item.chapterNumber), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QItemLabel, { caption: "" }, {
                        default: withCtx(() => {
                          var _a, _b, _c, _d;
                          return [
                            createTextVNode(toDisplayString(item.scanlator) + " " + toDisplayString(new Date(item.uploadDate).toLocaleDateString()) + " " + toDisplayString(item.downloaded ? "\u2022 downloaded" : "") + " " + toDisplayString(((_a = _ctx.downloads.find((ele) => ele.chapterIndex == item.index)) == null ? void 0 : _a.state) ? `\u2022 ` + ((_b = _ctx.downloads.find((ele) => ele.chapterIndex == item.index)) == null ? void 0 : _b.state) : ``) + " ", 1),
                            ((_c = _ctx.downloads.find((ele) => ele.chapterIndex == item.index)) == null ? void 0 : _c.state) == `Downloading` ? (openBlock(), createBlock(QLinearProgress, {
                              key: 0,
                              value: (_d = _ctx.downloads.find((ele) => ele.chapterIndex == item.index)) == null ? void 0 : _d.progress
                            }, null, 8, ["value"])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  _ctx.selectMode ? (openBlock(), createBlock(QIcon, {
                    key: 1,
                    class: "flex-right self-center",
                    size: "md",
                    color: _ctx.selected.includes(item.id) ? `blue` : ``,
                    name: _ctx.selected.includes(item.id) ? `check_box` : `check_box_outline_blank`,
                    flat: ""
                  }, null, 8, ["color", "name"])) : createCommentVNode("", true),
                  createVNode(QBtn, {
                    round: "",
                    flat: "",
                    icon: "more_vert",
                    class: "flex-right",
                    onClick: _cache[16] || (_cache[16] = withModifiers(() => {
                    }, ["prevent"]))
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, null, {
                        default: withCtx(() => [
                          createVNode(QList, { style: { "width": "fit-content" } }, {
                            default: withCtx(() => [
                              !item.downloaded ? withDirectives((openBlock(), createBlock(QItem, {
                                key: 0,
                                clickable: "",
                                onClick: ($event) => _ctx.download(item.index)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Download")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]) : createCommentVNode("", true),
                              item.downloaded ? withDirectives((openBlock(), createBlock(QItem, {
                                key: 1,
                                clickable: "",
                                onClick: ($event) => _ctx.dele(item.index)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]) : createCommentVNode("", true),
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => _ctx.mpatch(item.index, { bookmarked: `${!item.bookmarked}` })
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(!item.bookmarked ? `Bookmark` : `Remove bookmark`), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => _ctx.mpatch(item.index, {
                                  read: `${!item.read}`,
                                  lastPageRead: "1"
                                })
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(!item.read ? `Mark as Read` : `Mark as Unread`), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => _ctx.mpatch(item.index, { markPrevRead: "true" })
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { style: { "white-space": "nowrap" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("Mark previous as Read")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["id", "class", "to", "onClick"])), [
                [
                  TouchHold,
                  () => _ctx.handleHold(item.id),
                  void 0,
                  { mouse: true }
                ],
                [Ripple]
              ])
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    }, 8, ["style", "class"]),
    createVNode(QPageSticky, {
      ref: "sticky",
      position: "bottom-right",
      offset: _ctx.fabPos
    }, {
      default: withCtx(() => [
        createVNode(_component_router_link, {
          is: _ctx.draggingFab ? "span" : "router-link",
          style: { "text-decoration": "none", "color": "inherit" },
          to: _ctx.res
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(QBtn, {
              fab: "",
              class: "Fabconsist",
              label: "Resume",
              color: "blue",
              icon: "drag_indicator"
            }, {
              default: withCtx(() => [
                createVNode(QTooltip, null, {
                  default: withCtx(() => [
                    createTextVNode(" draggable ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })), [
              [
                TouchPan,
                _ctx.moveFab,
                void 0,
                {
                  prevent: true,
                  mouse: true
                }
              ]
            ])
          ]),
          _: 1
        }, 8, ["is", "to"])
      ]),
      _: 1
    }, 8, ["offset"])
  ], 512);
}
var mangaChapters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ace47b44"], ["__file", "chapterList.vue"]]);
const _sfc_main = defineComponent({
  name: "MangaPage",
  components: { mangaInfo, mangaChapters },
  emits: ["set-title"],
  setup() {
    const manga2 = ref({});
    return { manga: manga2, offset: ref(Number()) };
  },
  created: async function() {
    var _a;
    this.$bus.on("updateManga", () => {
      this.getonline("true");
    });
    await this.getonline();
    this.$emit("set-title", ((_a = this.manga) == null ? void 0 : _a.title) || "manga");
    if (new Date(this.manga.lastFetchedAt * 1e3) < new Date(new Date().setDate(new Date().getDate() - 1))) {
      this.$bus.emit("updateManga");
    }
  },
  methods: {
    async getonline(TF = "false", retry = 3) {
      try {
        this.manga = (await this.$api.get(
          `/api/v1/manga/${this.$route.params["mangaID"]}/?onlineFetch=${TF}`
        )).data;
      } catch (error) {
        if (retry >= 1)
          await this.getonline(TF, retry - 1);
      }
    },
    myTweak(offset) {
      this.offset = offset;
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mangaInfo = resolveComponent("mangaInfo");
  const _component_mangaChapters = resolveComponent("mangaChapters");
  return openBlock(), createBlock(QPage, {
    class: normalizeClass(["nowrap", _ctx.$q.screen.sm || _ctx.$q.screen.xs ? `col` : `row`]),
    "style-fn": _ctx.myTweak
  }, {
    default: withCtx(() => [
      createVNode(_component_mangaInfo, {
        manga: _ctx.manga,
        offset: _ctx.offset,
        class: "col-6",
        onInlib: _ctx.getonline
      }, null, 8, ["manga", "offset", "onInlib"]),
      createVNode(_component_mangaChapters, { class: "col-6" })
    ]),
    _: 1
  }, 8, ["class", "style-fn"]);
}
var mangaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "mangaPage.vue"]]);
export { mangaPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FQYWdlLjI3OGNlZTIwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9tYW5nYUluZm8udnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hIb2xkLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuZ2EvZmlsdGVycy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL0ZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9jaGFwdGVyTGlzdC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvbWFuZ2FQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicS1weC1tZCBxLXB5LW1kIGNvbCBNYW5nYUluZm9cIlxuICAgIHN0eWxlPVwib3ZlcmZsb3cteTogYXV0b1wiXG4gICAgOnN0eWxlPVwiXG4gICAgICAkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzXG4gICAgICAgID8gYGBcbiAgICAgICAgOiBgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIGAgKyBvZmZzZXQgKyBgcHgpYFxuICAgIFwiXG4gID5cbiAgICA8cS1pbWdcbiAgICAgIHYtaWY9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiAxMDAlXCJcbiAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIHEtbXgtbWRcIlxuICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICBmaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IG5vLXdyYXBcIj5cbiAgICAgIDxxLWltZ1xuICAgICAgICB2LWlmPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZClcIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiA1MCU7IGZsZXg6IG5vbmVcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgZml0PVwic2NhbGUtZG93blwiXG4gICAgICAvPlxuICAgICAgPGRpdiB2LWlmPVwibWFuZ2FcIiBjbGFzcz1cInEtbXgtbWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiPlxuICAgICAgICA8aDNcbiAgICAgICAgICBzdHlsZT1cIm92ZXJmbG93LXdyYXA6IGFueXdoZXJlXCJcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZCA/IGBxLW15LXNtYCA6IGBgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgdi1pZj1cIm1hbmdhLmF1dGhvclwiIGNsYXNzPVwidGV4dC1oNSBxLW15LXhzXCI+XG4gICAgICAgICAgQXV0aG9yOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2EuYXV0aG9yIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwibWFuZ2EuYXJ0aXN0XCIgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIj5cbiAgICAgICAgICBBcnRpc3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IG1hbmdhLmFydGlzdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cIm1hbmdhLnN0YXR1c1wiIGNsYXNzPVwidGV4dC1oNSBxLW15LXhzXCI+XG4gICAgICAgICAgU3RhdHVzOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2Euc3RhdHVzIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwibWFuZ2Euc291cmNlPy5kaXNwbGF5TmFtZVwiIGNsYXNzPVwidGV4dC1oNSBxLW15LXhzXCI+XG4gICAgICAgICAgU291cmNlOlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJxLW15LW1kXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmNvbG9yPVwibWFuZ2E/LmluTGlicmFyeSA/IGBwcmltYXJ5YCA6IGBncmV5LTlgXCJcbiAgICAgICAgaWNvbj1cImZhdm9yaXRlXCJcbiAgICAgICAgOmxhYmVsPVwibWFuZ2E/LmluTGlicmFyeSA/IGBJbiBMaWJyYXJ5YCA6IGBBZGQgVG8gTGlicmFyeWBcIlxuICAgICAgICBAY2xpY2s9XCJJbkxpYnJhcnlcIlxuICAgICAgLz5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGNvbG9yPVwiZ3JleS05XCJcbiAgICAgICAgaWNvbj1cInB1YmxpY1wiXG4gICAgICAgIGxhYmVsPVwiT3BlbiBTaXRlXCJcbiAgICAgICAgOmhyZWY9XCJtYW5nYT8ucmVhbFVybFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cIm1hbmdhPy5kZXNjcmlwdGlvblwiPlxuICAgICAgPGg2IGNsYXNzPVwicS1teS1zbVwiPkFib3V0OjwvaDY+XG4gICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMS4zZW1cIj57eyBtYW5nYS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJtYW5nYT8uZ2VucmVcIj5cbiAgICAgIDxxLWNoaXAgdi1mb3I9XCJ0YWcgaW4gbWFuZ2EuZ2VucmVcIiA6a2V5PVwidGFnXCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj57e1xuICAgICAgICB0YWdcbiAgICAgIH19PC9xLWNoaXA+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYUluZm8nLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+LFxuICAgICAgZGVmYXVsdDogT2JqZWN0LFxuICAgIH0sXG4gICAgb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIgYXMgUHJvcFR5cGU8bnVtYmVyPixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IDAsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFsnaW5saWInXSxcbiAgc2V0dXAocHJvcHMpIHtcbiAgICBjb25zdCB1c2VDYWNoZSA9IHN0b3JlR2V0KCd1c2VDYWNoZScsIHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICB1c2VDYWNoZSxcbiAgICAgIGluTGliOiByZWYocHJvcHMubWFuZ2E/LmluTGlicmFyeSB8fCBmYWxzZSksXG4gICAgICBpbWdkYXRhOiByZWYoKSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW1nZGF0YSAmJiB0aGlzLm1hbmdhKSB7XG4gICAgICB0aGlzLmdldEltZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1bndhdGNoID0gdGhpcy4kd2F0Y2goXG4gICAgICAgICgpID0+IFt0aGlzLmltZ2RhdGEsIHRoaXMubWFuZ2FdLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmltZ2RhdGEgJiYgdGhpcy5tYW5nYSkge1xuICAgICAgICAgICAgdGhpcy5nZXRJbWcoKTtcbiAgICAgICAgICAgIHVud2F0Y2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgSW5MaWJyYXJ5KCkge1xuICAgICAgdGhpcy5pbkxpYiA9ICF0aGlzLmluTGliO1xuICAgICAgaWYgKHRoaXMuaW5MaWIpIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kYXBpLmdldChcbiAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9saWJyYXJ5L2BcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGFwaS5kZWxldGUoXG4gICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vbGlicmFyeS9gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdpbmxpYicpO1xuICAgIH0sXG4gICAgZ2V0SW1nKCkge1xuICAgICAgZ2V0SW1nQmxvYih0aGlzLm1hbmdhPy50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XG4uTWFuZ2FJbmZvIC5xLWltZ19fY29udGFpbmVyXG4gIHBvc2l0aW9uOiB1bnNldFxuXG4uTWFuZ2FJbmZvIC5xLWltZy5xLWltZy0tbWVudSA6Zmlyc3QtY2hpbGRcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2l0aERpcmVjdGl2ZXMsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuXG5jb25zdCBheGlzTGlzdCA9IFsgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnIF1cbmNvbnN0IGRpclByb3BzID0ge1xuICB2ZXJ0aWNhbDogeyBvZmZzZXQ6ICdvZmZzZXRZJywgc2Nyb2xsOiAnc2Nyb2xsVG9wJywgZGlyOiAnZG93bicsIGRpc3Q6ICd5JyB9LFxuICBob3Jpem9udGFsOiB7IG9mZnNldDogJ29mZnNldFgnLCBzY3JvbGw6ICdzY3JvbGxMZWZ0JywgZGlyOiAncmlnaHQnLCBkaXN0OiAneCcgfVxufVxuY29uc3QgcGFuT3B0cyA9IHtcbiAgcHJldmVudDogdHJ1ZSxcbiAgbW91c2U6IHRydWUsXG4gIG1vdXNlQWxsRGlyOiB0cnVlXG59XG5cbmNvbnN0IGdldE1pblRodW1iU2l6ZSA9IHNpemUgPT4gKHNpemUgPj0gMjUwID8gNTAgOiBNYXRoLmNlaWwoc2l6ZSAvIDUpKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbEFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgdGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIHZlcnRpY2FsVGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIGhvcml6b250YWxUaHVtYlN0eWxlOiBPYmplY3QsXG5cbiAgICBiYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICB2ZXJ0aWNhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhvcml6b250YWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50QWN0aXZlU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBkZWxheToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG5cbiAgICB2aXNpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICAvLyBzdGF0ZSBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGVtcFNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBob3ZlciA9IHJlZihmYWxzZSlcblxuICAgIC8vIG90aGVyLi4uXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgdmVydGljYWw6IHJlZigwKSxcbiAgICAgIGhvcml6b250YWw6IHJlZigwKVxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH0sXG5cbiAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcblxuICAgIGxldCB0aW1lciwgcGFuUmVmUG9zXG5cbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYSdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIudmVydGljYWwudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC8gc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgLi4ucHJvcHMudmVydGljYWxUaHVtYlN0eWxlLFxuICAgICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLXYgYWJzb2x1dGUtcmlnaHQnXG4gICAgICArIChzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlN0YXJ0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLSBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICogY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLyBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlLFxuICAgICAgICAgIGdldE1pblRodW1iU2l6ZShjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAgIC4uLnByb3BzLmhvcml6b250YWxUaHVtYlN0eWxlLFxuICAgICAgICBsZWZ0OiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICB3aWR0aDogYCR7IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZS52YWx1ZSB9cHhgXG4gICAgICB9XG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWggYWJzb2x1dGUtYm90dG9tJ1xuICAgICAgKyAoc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1haW5TdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbnRlbnRTdHlsZVxuICAgICAgICA6IHByb3BzLmNvbnRlbnRBY3RpdmVTdHlsZVxuICAgICkpXG5cbiAgICBjb25zdCB0aHVtYlZlcnREaXIgPSBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ3ZlcnRpY2FsJykgfSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHsgdmVydGljYWw6IHRydWUsIC4uLnBhbk9wdHMgfVxuICAgIF0gXVxuXG4gICAgY29uc3QgdGh1bWJIb3JpekRpciA9IFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAnaG9yaXpvbnRhbCcpIH0sXG4gICAgICB2b2lkIDAsXG4gICAgICB7IGhvcml6b250YWw6IHRydWUsIC4uLnBhbk9wdHMgfVxuICAgIF0gXVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsICgpIHtcbiAgICAgIGNvbnN0IGluZm8gPSB7fVxuXG4gICAgICBheGlzTGlzdC5mb3JFYWNoKGF4aXMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgICBpbmZvWyBheGlzICsgJ1Bvc2l0aW9uJyBdID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBpbmZvWyBheGlzICsgJ1BlcmNlbnRhZ2UnIF0gPSBkYXRhLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgICAgaW5mb1sgYXhpcyArICdTaXplJyBdID0gZGF0YS5zaXplLnZhbHVlXG4gICAgICAgIGluZm9bIGF4aXMgKyAnQ29udGFpbmVyU2l6ZScgXSA9IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gaW5mb1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgbG90cyBvZiBsaXN0ZW5lcnMsIHNvXG4gICAgLy8gZW5zdXJlIHdlJ3JlIG5vdCBlbWl0dGluZyBzYW1lIGluZm9cbiAgICAvLyBtdWx0aXBsZSB0aW1lc1xuICAgIGNvbnN0IGVtaXRTY3JvbGwgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICBjb25zdCBpbmZvID0gZ2V0U2Nyb2xsKClcbiAgICAgIGluZm8ucmVmID0gcHJveHlcbiAgICAgIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24gKGF4aXMsIG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChheGlzTGlzdC5pbmNsdWRlcyhheGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1FTY3JvbGxBcmVhXTogd3JvbmcgZmlyc3QgcGFyYW0gb2Ygc2V0U2Nyb2xsUG9zaXRpb24gKHZlcnRpY2FsL2hvcml6b250YWwpJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICA/IHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb25cbiAgICAgICAgOiBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb25cblxuICAgICAgZm4odGFyZ2V0UmVmLnZhbHVlLCBvZmZzZXQsIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lciAoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuXG4gICAgICBpZiAoY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbCAoeyBwb3NpdGlvbiB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAhPT0gcG9zaXRpb24udG9wKSB7XG4gICAgICAgIHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLnRvcFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSAhPT0gcG9zaXRpb24ubGVmdCkge1xuICAgICAgICBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLmxlZnRcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgc3RhcnRUaW1lcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsU2l6ZSAoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICAgIGlmIChzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlID0gd2lkdGhcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFuVGh1bWIgKGUsIGF4aXMpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICBpZiAoZS5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBwYW5SZWZQb3MgPSBkYXRhLnBvc2l0aW9uLnZhbHVlXG4gICAgICAgIHBhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5uaW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZS5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIHBhbm5pbmcudmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkUHJvcCA9IGRpclByb3BzWyBheGlzIF1cbiAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjb250YWluZXJbIGF4aXMgXS52YWx1ZVxuXG4gICAgICBjb25zdCBtdWx0aXBsaWVyID0gKGRhdGEuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclNpemUpIC8gKGNvbnRhaW5lclNpemUgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSlcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gZS5kaXN0YW5jZVsgZFByb3AuZGlzdCBdXG4gICAgICBjb25zdCBwb3MgPSBwYW5SZWZQb3MgKyAoZS5kaXJlY3Rpb24gPT09IGRQcm9wLmRpciA/IDEgOiAtMSkgKiBkaXN0YW5jZSAqIG11bHRpcGxpZXJcblxuICAgICAgc2V0U2Nyb2xsKHBvcywgYXhpcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZG93biAoZXZ0LCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGRhdGEudGh1bWJIaWRkZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZ0WyBkaXJQcm9wc1sgYXhpcyBdLm9mZnNldCBdXG4gICAgICAgIGlmIChvZmZzZXQgPCBkYXRhLnRodW1iU3RhcnQudmFsdWUgfHwgb2Zmc2V0ID4gZGF0YS50aHVtYlN0YXJ0LnZhbHVlICsgZGF0YS50aHVtYlNpemUudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwb3MgPSBvZmZzZXQgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSAvIDJcbiAgICAgICAgICBzZXRTY3JvbGwocG9zIC8gY29udGFpbmVyWyBheGlzIF0udmFsdWUgKiBkYXRhLnNpemUudmFsdWUsIGF4aXMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3RpdmF0ZSB0aHVtYiBwYW5cbiAgICAgICAgaWYgKGRhdGEucmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZGF0YS5yZWYudmFsdWUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChldnQudHlwZSwgZXZ0KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVmVydGljYWxNb3VzZWRvd24gKGV2dCkge1xuICAgICAgb25Nb3VzZWRvd24oZXZ0LCAndmVydGljYWwnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSG9yaXpvbnRhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICBvbk1vdXNlZG93bihldnQsICdob3Jpem9udGFsJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyICgpIHtcbiAgICAgIGlmICh0ZW1wU2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRlbXBTaG93aW5nLnZhbHVlID0gZmFsc2UgfSwgcHJvcHMuZGVsYXkpXG4gICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXRTY3JvbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbCAob2Zmc2V0LCBheGlzKSB7XG4gICAgICB0YXJnZXRSZWYudmFsdWVbIGRpclByb3BzWyBheGlzIF0uc2Nyb2xsIF0gPSBvZmZzZXRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZW50ZXIgKCkge1xuICAgICAgaG92ZXIudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWxlYXZlICgpIHtcbiAgICAgIGhvdmVyLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBudWxsXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoc2Nyb2xsVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLmxlZnQpXG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24oc2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbi50b3ApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudChlbWl0U2Nyb2xsLmNhbmNlbClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIGdldFNjcm9sbFRhcmdldDogKCkgPT4gdGFyZ2V0UmVmLnZhbHVlLFxuICAgICAgZ2V0U2Nyb2xsLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfSksXG4gICAgICBnZXRTY3JvbGxQZXJjZW50YWdlOiAoKSA9PiAoe1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uOiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uLFxuICAgICAgc2V0U2Nyb2xsUGVyY2VudGFnZSAoYXhpcywgcGVyY2VudGFnZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbG9jYWxTZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICBheGlzLFxuICAgICAgICAgIHBlcmNlbnRhZ2UgKiAoc2Nyb2xsWyBheGlzIF0uc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKSxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgb25Nb3VzZWVudGVyLFxuICAgICAgICBvbk1vdXNlbGVhdmVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250YWluZXIgc2Nyb2xsIHJlbGF0aXZlLXBvc2l0aW9uIGZpdCBoaWRlLXNjcm9sbGJhcicsXG4gICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4ICE9PSB2b2lkIDAgPyBwcm9wcy50YWJpbmRleCA6IHZvaWQgMFxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRlbnQgYWJzb2x1dGUnLFxuICAgICAgICAgICAgc3R5bGU6IG1haW5TdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVTY3JvbGxTaXplXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKSxcblxuICAgICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7XG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXG4gICAgICAgICAgICBvblNjcm9sbDogdXBkYXRlU2Nyb2xsXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBbIHByb3BzLmJhclN0eWxlLCBwcm9wcy52ZXJ0aWNhbEJhclN0eWxlIF0sXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgIG9uTW91c2Vkb3duOiBvblZlcnRpY2FsTW91c2Vkb3duXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLmhvcml6b250YWxCYXJTdHlsZSBdLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICBvbk1vdXNlZG93bjogb25Ib3Jpem9udGFsTW91c2Vkb3duXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogc2Nyb2xsLnZlcnRpY2FsLnJlZixcbiAgICAgICAgICAgIGNsYXNzOiBzY3JvbGwudmVydGljYWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiBzY3JvbGwudmVydGljYWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aHVtYlZlcnREaXJcbiAgICAgICAgKSxcblxuICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICByZWY6IHNjcm9sbC5ob3Jpem9udGFsLnJlZixcbiAgICAgICAgICAgIGNsYXNzOiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHNjcm9sbC5ob3Jpem9udGFsLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGh1bWJIb3JpekRpclxuICAgICAgICApXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgc3RvcEFuZFByZXZlbnQsIG5vb3AgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtaG9sZCcsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtaG9sZCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCB7IG1vZGlmaWVycyB9ID0gYmluZGluZ1xuXG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBoYW5kbGVyOiBiaW5kaW5nLnZhbHVlLFxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbicgJiYgbGVmdENsaWNrKGV2dCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdjbGljaycsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY3R4Lm9yaWdpbiA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgICAgICBpZiAoY2xpZW50LmlzLm1vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlLCAxMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHgudHJpZ2dlcmVkID0gZmFsc2VcbiAgICAgICAgICAgIGN0eC5zZW5zaXRpdml0eSA9IG1vdXNlRXZlbnQgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBjdHgubW91c2VTZW5zaXRpdml0eVxuICAgICAgICAgICAgICA6IGN0eC50b3VjaFNlbnNpdGl2aXR5XG5cbiAgICAgICAgICAgIGN0eC50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgICAgICAgIGN0eC50cmlnZ2VyZWQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgY3R4LmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGV2dCxcbiAgICAgICAgICAgICAgICB0b3VjaDogbW91c2VFdmVudCAhPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY3R4Lm9yaWdpbixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgY3R4LmR1cmF0aW9uKVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBwb3NpdGlvbihldnQpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIE1hdGguYWJzKGxlZnQgLSBjdHgub3JpZ2luLmxlZnQpID49IGN0eC5zZW5zaXRpdml0eVxuICAgICAgICAgICAgICB8fCBNYXRoLmFicyh0b3AgLSBjdHgub3JpZ2luLnRvcCkgPj0gY3R4LnNlbnNpdGl2aXR5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGN0eC50aW1lcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQpIHtcbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgICAvLyBkZWxheSBuZWVkZWQgb3RoZXJ3aXNlIHNlbGVjdGlvbiBzdGlsbCBvY2N1cnNcbiAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKGN0eC50cmlnZ2VyZWQpXG5cbiAgICAgICAgICAgIGlmIChjdHgudHJpZ2dlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGR1cmF0aW9uIGluIG1zLCB0b3VjaCBpbiBwaXhlbHMsIG1vdXNlIGluIHBpeGVsc1xuICAgICAgICBjb25zdCBkYXRhID0gWyA2MDAsIDUsIDcgXVxuXG4gICAgICAgIGlmICh0eXBlb2YgYmluZGluZy5hcmcgPT09ICdzdHJpbmcnICYmIGJpbmRpbmcuYXJnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBiaW5kaW5nLmFyZy5zcGxpdCgnOicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUludCh2YWwsIDEwKVxuICAgICAgICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIFsgY3R4LmR1cmF0aW9uLCBjdHgudG91Y2hTZW5zaXRpdml0eSwgY3R4Lm1vdXNlU2Vuc2l0aXZpdHkgXSA9IGRhdGFcblxuICAgICAgICBlbC5fX3F0b3VjaGhvbGQgPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2hlbmQnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwICYmIGJpbmRpbmcub2xkVmFsdWUgIT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICB0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmcudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaGhvbGRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzdG9yZVNldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuXG50eXBlIGJubiA9IGJvb2xlYW4gfCBudWxsO1xuXG50eXBlIGRpc3AgPSAnc291cmNlJyB8ICdjaGFwdGVyJztcblxuY29uc3QgVW5yZWFkID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBEb3dubG9hZGVkID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBCb29rbWFya2VkID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBTb3VyY2UgPSByZWYoPGJubj5udWxsKTtcbmNvbnN0IEZldGNoRGF0ZSA9IHJlZig8Ym5uPm51bGwpO1xuY29uc3QgRGlzcGxheSA9IHJlZig8ZGlzcD4nc291cmNlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFwdGVyc0ZpbHRlcihtYW5nYUlEOiBudW1iZXIpIHtcbiAgVW5yZWFkLnZhbHVlID0gPGJubj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoVW5yZWFkYCk7XG4gIERvd25sb2FkZWQudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hEb3dubG9hZGVkYCk7XG4gIEJvb2ttYXJrZWQudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hCb29rbWFya2VkYCk7XG4gIFNvdXJjZS52YWx1ZSA9IDxibm4+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaFNvdXJjZWApO1xuICBGZXRjaERhdGUudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hGZXRjaERhdGVgKTtcbiAgRGlzcGxheS52YWx1ZSA9IDxkaXNwPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hEaXNwbGF5YCk7XG5cbiAgY29uc3Qgc2V0VW5yZWFkID0gZnVuY3Rpb24gKHZhbHVlOiBibm4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgTG9jYWxTdG9yYWdlLnJlbW92ZShgJHttYW5nYUlEfUNoVW5yZWFkYCk7XG4gICAgZWxzZSBMb2NhbFN0b3JhZ2Uuc2V0KGAke21hbmdhSUR9Q2hVbnJlYWRgLCB2YWx1ZSk7XG4gICAgVW5yZWFkLnZhbHVlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldERvd25sb2FkZWQgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hEb3dubG9hZGVkYCwgdmFsdWUpO1xuICAgIERvd25sb2FkZWQudmFsdWUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0Qm9va21hcmtlZCA9IGZ1bmN0aW9uICh2YWx1ZTogYm5uKSB7XG4gICAgc3RvcmVTZXQoYCR7bWFuZ2FJRH1DaEJvb2ttYXJrZWRgLCB2YWx1ZSk7XG4gICAgQm9va21hcmtlZC52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRTb3VyY2UgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoU291cmNlYCwgdmFsdWUpO1xuICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZShgJHttYW5nYUlEfUNoRmV0Y2hEYXRlYCk7XG4gICAgfVxuICAgIFNvdXJjZS52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRGZXRjaERhdGUgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoRmV0Y2hEYXRlYCwgdmFsdWUpO1xuICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZShgJHttYW5nYUlEfUNoU291cmNlYCk7XG4gICAgfVxuICAgIEZldGNoRGF0ZS52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXREaXNwbGF5ID0gZnVuY3Rpb24gKHZhbHVlOiAnc291cmNlJyB8ICdjaGFwdGVyJykge1xuICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hEaXNwbGF5YCwgdmFsdWUsICdzb3VyY2UnKTtcbiAgICBEaXNwbGF5LnZhbHVlID0gdmFsdWU7XG4gIH07XG5cbiAgLy8gbmVlZHMgYSBkZWZhdWx0IGlmIG5vIHNvcnQgaXMgc2V0XG4gIGlmIChTb3VyY2UudmFsdWUgPT0gbnVsbCAmJiBGZXRjaERhdGUudmFsdWUgPT0gbnVsbCkgU291cmNlLnZhbHVlID0gZmFsc2U7XG4gIGlmIChEaXNwbGF5LnZhbHVlID09IG51bGwpIERpc3BsYXkudmFsdWUgPSAnc291cmNlJztcblxuICByZXR1cm4ge1xuICAgIFVucmVhZCxcbiAgICBEb3dubG9hZGVkLFxuICAgIEJvb2ttYXJrZWQsXG4gICAgU291cmNlLFxuICAgIEZldGNoRGF0ZSxcbiAgICBEaXNwbGF5LFxuICAgIHNldFVucmVhZCxcbiAgICBzZXREb3dubG9hZGVkLFxuICAgIHNldEJvb2ttYXJrZWQsXG4gICAgc2V0U291cmNlLFxuICAgIHNldEZldGNoRGF0ZSxcbiAgICBzZXREaXNwbGF5LFxuICB9O1xufVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOnRleHQtY29sb3I9XCJcbiAgICAgICRxLmRhcmsuaXNBY3RpdmVcbiAgICAgICAgPyBhcmVkZWZhdWx0cygpXG4gICAgICAgICAgPyBgd2hpdGVgXG4gICAgICAgICAgOiBgb3JhbmdlYFxuICAgICAgICA6IGFyZWRlZmF1bHRzKClcbiAgICAgICAgPyBgZGFya2BcbiAgICAgICAgOiBgb3JhbmdlYFxuICAgIFwiXG4gICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICBAY2xpY2s9XCJkaWFsbyA9IHRydWVcIlxuICAvPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXRhYiBjbGFzcz1cInEtcHgteGxcIiBuYW1lPVwic29ydFwiIGljb249XCJzb3J0XCIgbGFiZWw9XCJTb3J0XCIgLz5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIGNsYXNzPVwicS1weC14bFwiXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheVwiXG4gICAgICAgICAgICBpY29uPVwiZGlzcGxheV9zZXR0aW5nc1wiXG4gICAgICAgICAgICBsYWJlbD1cIkRpc3BsYXlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS10YWJzPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdmaWx0ZXInXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1bnJlYWRcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgbGFiZWw9XCJVbnJlYWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICB2LW1vZGVsPVwiZG93bmxvYWRlZFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIHRvZ2dsZS1pbmRldGVybWluYXRlXG4gICAgICAgICAgICBsYWJlbD1cIkRvd25sb2FkZWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHYtbW9kZWw9XCJib29rbWFya2VkXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIGxhYmVsPVwiQm9va21hcmtlZFwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ3NvcnQnXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHYtbW9kZWw9XCJTb3VyY2VcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJhcnJvd191cHdhcmRcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJhcnJvd19kb3dud2FyZFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJudWxsXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICBsYWJlbD1cIkJ5IFNvdXJjZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgdi1tb2RlbD1cIkZldGNoRGF0ZVwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIGxhYmVsPVwiQnkgRmV0Y2ggZGF0ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ2Rpc3BsYXknXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJzb3VyY2VcIiBsYWJlbD1cIkJ5IFNvdXJjZSBUaXRsZVwiIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJjaGFwdGVyXCIgbGFiZWw9XCJCeSBDaGFwdGVyIE51bWJlclwiIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyc0ZpbHRlciB9IGZyb20gJ3NyYy9jb21wb25lbnRzL21hbmdhL2ZpbHRlcnMnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0xpYnJhcnlUb3BCYXInLFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG4gICAgY29uc3QgZmlsdCA9IGNoYXB0ZXJzRmlsdGVyKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gcmVmKGZpbHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvOiByZWYoZmFsc2UpLFxuICAgICAgdGFiOiByZWYoJ2ZpbHRlcicpLFxuICAgICAgdW5yZWFkOiByZWYoZmlsdC5VbnJlYWQpLFxuICAgICAgZG93bmxvYWRlZDogcmVmKGZpbHQuRG93bmxvYWRlZCksXG4gICAgICBib29rbWFya2VkOiByZWYoZmlsdC5Cb29rbWFya2VkKSxcbiAgICAgIFNvdXJjZTogcmVmKGZpbHQuU291cmNlKSxcbiAgICAgIEZldGNoRGF0ZTogcmVmKGZpbHQuRmV0Y2hEYXRlKSxcbiAgICAgIGZpbHQ6IGZpbHRlcnMsXG4gICAgICBkaXNwOiByZWYoZmlsdC5EaXNwbGF5KSxcbiAgICB9O1xuICB9LFxuICAvL3NldEZpbHRlcih2YWx1ZTogYm5uLCBtYW5nYUlEOiBudW1iZXIsIHdoYXRDaGFuZ2U6IGtleWtleXMpIHtcbiAgd2F0Y2g6IHtcbiAgICB1bnJlYWQoKSB7XG4gICAgICB0aGlzLmZpbHQuc2V0VW5yZWFkKHRoaXMudW5yZWFkKTtcbiAgICB9LFxuICAgIGRvd25sb2FkZWQoKSB7XG4gICAgICB0aGlzLmZpbHQuc2V0RG93bmxvYWRlZCh0aGlzLmRvd25sb2FkZWQpO1xuICAgIH0sXG4gICAgYm9va21hcmtlZCgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXRCb29rbWFya2VkKHRoaXMuYm9va21hcmtlZCk7XG4gICAgfSxcbiAgICBTb3VyY2UoKSB7XG4gICAgICB0aGlzLmZpbHQuc2V0U291cmNlKHRoaXMuU291cmNlKTtcbiAgICAgIGlmICh0aGlzLlNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuRmV0Y2hEYXRlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIEZldGNoRGF0ZSgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXRGZXRjaERhdGUodGhpcy5GZXRjaERhdGUpO1xuICAgICAgaWYgKHRoaXMuRmV0Y2hEYXRlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5Tb3VyY2UgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcCgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXREaXNwbGF5KHRoaXMuZGlzcCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFyZWRlZmF1bHRzKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy51bnJlYWQgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmRvd25sb2FkZWQgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmJvb2ttYXJrZWQgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLlNvdXJjZSA9PSBmYWxzZSAmJlxuICAgICAgICB0aGlzLkZldGNoRGF0ZSA9PSBudWxsICYmXG4gICAgICAgIHRoaXMuZGlzcCA9PSAnc291cmNlJ1xuICAgICAgKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhXCI+XG4gICAgPGRpdiByZWY9XCJjaGFwSGVhZFwiIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoNCBjbGFzcz1cInEtbWEtbWRcIj57eyBjaGFwdGVycy5sZW5ndGggfX0gY2hhcHRlcnM8L2g0PlxuICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEycHhcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGljb249XCJzZWxlY3RfYWxsXCJcbiAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICA6aWNvbj1cInNlbGVjdE1vZGUgPyBgZmxpcF90b19mcm9udGAgOiBgZmxpcF90b19iYWNrYFwiXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0TW9kZSA9ICFzZWxlY3RNb2RlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cIm1vcmVfdmVydFwiPlxuICAgICAgICAgIDxxLW1lbnUgYW5jaG9yPVwiYm90dG9tIGVuZFwiIHNlbGY9XCJ0b3AgcmlnaHRcIj5cbiAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPCEtLSBkb3dubG9hZCAtLT5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5kb3dubG9hZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5kb3dubG9hZGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQgQWxsPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuZG93bmxvYWRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Eb3dubG9hZCBOZXh0IDU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGwoc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Eb3dubG9hZCBTZWxlY3RlZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwhLS0gcmVhZCAtLT5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3Agc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZj1cInRvcCBlbmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnQuZmlsdGVyKChlbGUpID0+ICFlbGUucmVhZCkubWFwKChlbGUpID0+IGVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlJlYWQgQWxsPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5yZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgtNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlJlYWQgTmV4dCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkIFNlbGVjdGVkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPCEtLSB1bnJlYWQgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5yZWFkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3Agc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZj1cInRvcCBlbmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICEhZWxlLnJlYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5yZWFkIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICEhZWxlLnJlYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5yZWFkIExhc3QgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWFkKHNlbGVjdGVkLCBmYWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZCBTZWxlY3RlZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwhLS0gYm9va21hcmsgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Qm9va21hcms8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcCBzdGFydFwiXG4gICAgICAgICAgICAgICAgICBzZWxmPVwidG9wIGVuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5ib29rbWFya2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzQm9va21hcmtlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuYm9va21hcmtlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaXNCb29rbWFya2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Qm9va21hcmsgTmV4dCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIHRydWUsICdpc0Jvb2ttYXJrZWQnKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Qm9va21hcmsgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8IS0tIHVuYm9va21hcmsgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5ib29rbWFyazwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5ib29rbWFya2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpc0Jvb2ttYXJrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbmJvb2ttYXJrIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICEhZWxlLmJvb2ttYXJrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzQm9va21hcmtlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVuYm9va21hcmsgTGFzdCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIGZhbHNlLCAnaXNCb29rbWFya2VkJylcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVuYm9va21hcmsgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8ZmlsdGVycj48L2ZpbHRlcnI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cS1zY3JvbGwtYXJlYVxuICAgICAgY2xhc3M9XCJxLXByLXhzXCJcbiAgICAgIDpzdHlsZT1cIlxuICAgICAgICAkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzXG4gICAgICAgICAgPyBgaGVpZ2h0OiA1MHZoYFxuICAgICAgICAgIDogYGhlaWdodDogY2FsYygxMDB2aCAtIGAgKyBjYWxjSGVpZ2h0KCkgKyBgcHgpYFxuICAgICAgXCJcbiAgICAgIDpjbGFzcz1cInNlbGVjdE1vZGUgPyBgIHNlbGVjdG1vZGVgIDogYGBcIlxuICAgID5cbiAgICAgIDxxLWludGVyc2VjdGlvblxuICAgICAgICB2LWZvcj1cIml0ZW0gaW4gZG9TcnRcIlxuICAgICAgICA6a2V5PVwiaXRlbS5pbmRleFwiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA1OHB4XCJcbiAgICAgICAgY2xhc3M9XCJcIlxuICAgICAgPlxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgOmlkPVwiaXRlbS5pZFwiXG4gICAgICAgICAgOmtleT1cIml0ZW0uaW5kZXhcIlxuICAgICAgICAgIHYtdG91Y2gtaG9sZC5tb3VzZT1cIigpID0+IGhhbmRsZUhvbGQoaXRlbS5pZClcIlxuICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgY2xhc3M9XCJxLW1hLXNtIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAoaXRlbS5yZWFkID8gYHRleHQtZ3JleWAgOiBgYCkgK1xuICAgICAgICAgICAgYCBgICtcbiAgICAgICAgICAgIChzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLmlkKSAmJiBzZWxlY3RNb2RlID8gYHNlbGVjdGVkYCA6IGBgKSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgKCRxLmRhcmsuaXNBY3RpdmUgPyBgYmctZGFya2AgOiBgYmctbGlnaHRgKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgOnRvPVwiXG4gICAgICAgICAgICBzZWxlY3RNb2RlXG4gICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIDogYC9tYW5nYS9gICsgaXRlbS5tYW5nYUlkICsgYC9jaGFwdGVyL2AgKyBpdGVtLmluZGV4XG4gICAgICAgICAgXCJcbiAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RNb2RlID8gc2VsZWN0dGhpcyhpdGVtLmlkKSA6IHVuZGVmaW5lZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1pZj1cIml0ZW0uYm9va21hcmtlZFwiIHNpZGU+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgID48cS1pY29uIGNvbG9yPVwicHJpbWFyeVwiIG5hbWU9XCJib29rbWFya1wiIHNpemU9XCJzbVwiPjwvcS1pY29uPlxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgIGZpbHRlcnMuRGlzcGxheSA9PSAnc291cmNlJ1xuICAgICAgICAgICAgICAgID8gaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgOiAnQ2hhcHRlciAnICsgaXRlbS5jaGFwdGVyTnVtYmVyXG4gICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICB7eyBpdGVtLnNjYW5sYXRvciB9fVxuICAgICAgICAgICAgICB7eyBuZXcgRGF0ZShpdGVtLnVwbG9hZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZG93bmxvYWRlZCA/ICfigKIgZG93bmxvYWRlZCcgOiAnJyB9fVxuICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleCk/LnN0YXRlXG4gICAgICAgICAgICAgICAgICA/IGDigKIgYCArXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgICA/LnN0YXRlXG4gICAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgPy5zdGF0ZSA9PSBgRG93bmxvYWRpbmdgXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJcbiAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgPy5wcm9ncmVzc1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgOmNvbG9yPVwic2VsZWN0ZWQuaW5jbHVkZXMoaXRlbS5pZCkgPyBgYmx1ZWAgOiBgYFwiXG4gICAgICAgICAgICA6bmFtZT1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLmlkKVxuICAgICAgICAgICAgICAgID8gYGNoZWNrX2JveGBcbiAgICAgICAgICAgICAgICA6IGBjaGVja19ib3hfb3V0bGluZV9ibGFua2BcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgPjwvcS1pY29uPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBmbGF0IGljb249XCJtb3JlX3ZlcnRcIiBjbGFzcz1cImZsZXgtcmlnaHRcIiBAY2xpY2sucHJldmVudD5cbiAgICAgICAgICAgIDxxLW1lbnU+XG4gICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiIWl0ZW0uZG93bmxvYWRlZFwiXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRvd25sb2FkKGl0ZW0uaW5kZXgpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtLmRvd25sb2FkZWRcIlxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxlKGl0ZW0uaW5kZXgpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RGVsZXRlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBtcGF0Y2goaXRlbS5pbmRleCwgeyBib29rbWFya2VkOiBgJHshaXRlbS5ib29rbWFya2VkfWAgfSlcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICFpdGVtLmJvb2ttYXJrZWQgPyBgQm9va21hcmtgIDogYFJlbW92ZSBib29rbWFya2BcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBtcGF0Y2goaXRlbS5pbmRleCwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IGAkeyFpdGVtLnJlYWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZVJlYWQ6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICFpdGVtLnJlYWQgPyBgTWFyayBhcyBSZWFkYCA6IGBNYXJrIGFzIFVucmVhZGBcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1wYXRjaChpdGVtLmluZGV4LCB7IG1hcmtQcmV2UmVhZDogJ3RydWUnIH0pXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgPk1hcmsgcHJldmlvdXMgYXMgUmVhZDwvcS1pdGVtLXNlY3Rpb25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgIDxxLXBhZ2Utc3RpY2t5IHJlZj1cInN0aWNreVwiIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cImZhYlBvc1wiPlxuICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgIDppcz1cImRyYWdnaW5nRmFiID8gJ3NwYW4nIDogJ3JvdXRlci1saW5rJ1wiXG4gICAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdFwiXG4gICAgICAgIDp0bz1cInJlc1wiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtdG91Y2gtcGFuLnByZXZlbnQubW91c2U9XCJtb3ZlRmFiXCJcbiAgICAgICAgICBmYWJcbiAgICAgICAgICBjbGFzcz1cIkZhYmNvbnNpc3RcIlxuICAgICAgICAgIGxhYmVsPVwiUmVzdW1lXCJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIGljb249XCJkcmFnX2luZGljYXRvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS10b29sdGlwPiBkcmFnZ2FibGUgPC9xLXRvb2x0aXA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvcS1wYWdlLXN0aWNreT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtcbiAgY2hhcHRlcixcbiAgZGxzb2NrLFxuICBkb3dubG9hZCxcbiAgaXNkbHNvY2ssXG59IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IGZpbHRlcnIgZnJvbSAnLi9GaWx0ZXIudnVlJztcbmltcG9ydCB7IGNoYXB0ZXJzRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgdXNlRGxTb2NrIGZyb20gJy4uL2Rvd25sb2Fkcy91c2VEbFNvY2snO1xuaW1wb3J0IHsgUVBhZ2VTdGlja3kgfSBmcm9tICdxdWFzYXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFuZ2FDaGFwdGVycycsXG4gIGNvbXBvbmVudHM6IHsgZmlsdGVyciB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IHJlZihjaGFwdGVyc0ZpbHRlcihwYXJzZUludChgJHtyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX1gKSkpO1xuICAgIGNvbnN0IGNoYXB0ZXJzID0gcmVmKDxjaGFwdGVyW10+W10pO1xuICAgIGNvbnN0IGNoYXB0ZXJzZmlsdCA9IHJlZig8Y2hhcHRlcltdPltdKTtcbiAgICBjb25zdCBFbWl0dCA9IHVzZURsU29jaygpO1xuICAgIGNvbnN0IEVtaXR0ZXIgPSByZWYoRW1pdHQpO1xuXG4gICAgY29uc3QgZG93bmxvYWRzID0gcmVmKDxkb3dubG9hZFtdPltdKTtcbiAgICBjb25zdCBkb3dubG9hZHNudW0gPSByZWYoMCk7XG4gICAgY29uc3QgdG1wID0gRW1pdHQuZXZlbnRzRnJvbVNlcnZlci52YWx1ZVxuICAgICAgPyBKU09OLnBhcnNlKEVtaXR0LmV2ZW50c0Zyb21TZXJ2ZXIudmFsdWUpXG4gICAgICA6IFtdO1xuICAgIGlmIChpc2Rsc29jayh0bXApKSB7XG4gICAgICBjb25zdCB0bXBwID0gdG1wLnF1ZXVlLmZpbHRlcihcbiAgICAgICAgKGVsZSkgPT4gZWxlLm1hbmdhSWQgPT0gcGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydtYW5nYUlEJ119YClcbiAgICAgICk7XG4gICAgICBkb3dubG9hZHNudW0udmFsdWUgPSB0bXBwLmxlbmd0aDtcbiAgICAgIGRvd25sb2Fkcy52YWx1ZSA9IHRtcHA7XG4gICAgfVxuICAgIGlmIChFbWl0dGVyLnZhbHVlLmlzQ29ubmVjdGVkKSB7XG4gICAgICBFbWl0dC5zZW5kTXNnKCdTVEFUVVMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmYWJQb3MgPSByZWYoPFtudW1iZXIsIG51bWJlcl0+WzE4LCAxOF0pO1xuICAgIGNvbnN0IGRyYWdnaW5nRmFiID0gcmVmPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaGFwdGVycyxcbiAgICAgIGNoYXB0ZXJzZmlsdCxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBFbWl0dGVyLFxuICAgICAgZG93bmxvYWRzbnVtLFxuICAgICAgZG93bmxvYWRzLFxuICAgICAgc2VsZWN0TW9kZTogcmVmKGZhbHNlKSxcbiAgICAgIHNlbGVjdGVkOiByZWYoPG51bWJlcltdPltdKSxcbiAgICAgIGZhYlBvcyxcbiAgICAgIGRyYWdnaW5nRmFiLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZG9GaWx0KCk6IGNoYXB0ZXJbXSB7XG4gICAgICBsZXQgY2hhcHRzOiBjaGFwdGVyW10gPSB0aGlzLmNoYXB0ZXJzO1xuICAgICAgaWYgKHRoaXMuZmlsdGVycy5VbnJlYWQgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuZmlsdGVyKChlbGUpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLlVucmVhZCA/ICFlbGUucmVhZCA6IGVsZS5yZWFkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLkRvd25sb2FkZWQgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuZmlsdGVyKChlbGUpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLkRvd25sb2FkZWQgPyBlbGUuZG93bmxvYWRlZCA6ICFlbGUuZG93bmxvYWRlZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5Cb29rbWFya2VkICE9IG51bGwpIHtcbiAgICAgICAgY2hhcHRzID0gY2hhcHRzLmZpbHRlcigoZWxlKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Cb29rbWFya2VkID8gZWxlLmJvb2ttYXJrZWQgOiAhZWxlLmJvb2ttYXJrZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFwdHM7XG4gICAgfSxcbiAgICBkb1NydCgpOiBjaGFwdGVyW10ge1xuICAgICAgbGV0IGNoYXB0czogY2hhcHRlcltdID0gdGhpcy5kb0ZpbHQ7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLlNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIGNoYXB0cyA9IGNoYXB0cy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Tb3VyY2VcbiAgICAgICAgICAgID8gYS5pbmRleCA+IGIuaW5kZXhcbiAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgIDogLTFcbiAgICAgICAgICAgIDogYS5pbmRleCA8IGIuaW5kZXhcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAtMVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5GZXRjaERhdGUgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMuRmV0Y2hEYXRlXG4gICAgICAgICAgICA/IGEuZmV0Y2hlZEF0ID4gYi5mZXRjaGVkQXRcbiAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICA6IDFcbiAgICAgICAgICAgIDogYS5mZXRjaGVkQXQgPCBiLmZldGNoZWRBdFxuICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgOiAxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhcHRzO1xuICAgIH0sXG4gICAgcmVzKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBub3RSZWFkID0gdGhpcy5kb1NydC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5yZWFkKTtcbiAgICAgIGlmICghbm90UmVhZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGAvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8kezF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdHJlYWRjaGFwID0gPGNoYXB0ZXI+bm90UmVhZFtub3RSZWFkLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gYC9tYW5nYS8ke25vdHJlYWRjaGFwLm1hbmdhSWR9L2NoYXB0ZXIvJHtub3RyZWFkY2hhcC5pbmRleH1gO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJ0VtaXR0ZXIuZXZlbnRzRnJvbVNlcnZlcicodmFsKSB7XG4gICAgICBjb25zdCB0bXAgPSA8ZGxzb2NrPkpTT04ucGFyc2UodmFsKTtcbiAgICAgIGlmIChpc2Rsc29jayh0bXApKSB7XG4gICAgICAgIGNvbnN0IHRtcHAgPSB0bXAucXVldWUuZmlsdGVyKFxuICAgICAgICAgIChlbGUpID0+IGVsZS5tYW5nYUlkID09IHBhcnNlSW50KGAke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLmRvd25sb2Fkc251bSAhPSB0bXBwLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb3dubG9hZHNudW0gPSB0bXBwLmxlbmd0aDtcbiAgICAgICAgdGhpcy5kb3dubG9hZHMgPSB0bXBwO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRidXMub24oJ3VwZGF0ZU1hbmdhJywgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRvbmxpbmUoJ3RydWUnKTtcbiAgICB9KTtcbiAgICB0aGlzLmdldG9ubGluZSgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbW92ZUZhYihldjoge1xuICAgICAgaXNGaXJzdDogYm9vbGVhbjtcbiAgICAgIGlzRmluYWw6IGJvb2xlYW47XG4gICAgICBkZWx0YTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICAgIH0pIHtcbiAgICAgIC8vIHdvdWxkIGxpa2UgdG8gdXNlIFRvdWNoUGFuIHR5cGUgYnV0IGl0IGRvZXNudCBzZWVtIHRvIGJlIGNvcnJlY3Qob3Igbm90IHRoZSBjb3JyZWN0IHR5cGUgaWRrKVxuICAgICAgdGhpcy5kcmFnZ2luZ0ZhYiA9IGV2LmlzRmlyc3QgIT09IHRydWUgJiYgZXYuaXNGaW5hbCAhPT0gdHJ1ZTtcbiAgICAgIGxldCB4ID0gdGhpcy5mYWJQb3NbMF0gLSBldi5kZWx0YS54O1xuICAgICAgbGV0IHkgPSB0aGlzLmZhYlBvc1sxXSAtIGV2LmRlbHRhLnk7XG5cbiAgICAgIGNvbnN0IGNvbnRhID0gKFxuICAgICAgICAodGhpcy4kcmVmc1snY29udGEnXSBhcyBIVE1MRWxlbWVudCkucGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudFxuICAgICAgKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHN0aWNrID0gKFxuICAgICAgICB0aGlzLiRyZWZzWydzdGlja3knXSBhcyBRUGFnZVN0aWNreVxuICAgICAgKS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IG1heHkgPSBjb250YS5oZWlnaHQ7XG4gICAgICBjb25zdCBzdGlja3kgPSBzdGljay5oZWlnaHQ7XG4gICAgICBpZiAoeSA+IG1heHkgLSBzdGlja3kpIHkgPSBtYXh5IC0gc3RpY2t5O1xuICAgICAgaWYgKHkgPCAwKSB5ID0gMDtcblxuICAgICAgY29uc3QgbWF4eCA9IGNvbnRhLndpZHRoO1xuICAgICAgY29uc3Qgc3RpY2t4ID0gc3RpY2sud2lkdGg7XG4gICAgICBpZiAoeCA+IG1heHggLSBzdGlja3gpIHggPSBtYXh4IC0gc3RpY2t4O1xuICAgICAgaWYgKHggPCAwKSB4ID0gMDtcblxuICAgICAgdGhpcy5mYWJQb3MgPSBbeCwgeV07XG4gICAgfSxcbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgY29uc3QgdG1wID0gPEVsZW1lbnQgfCB1bmRlZmluZWQ+dGhpcy4kcmVmc1snY2hhcEhlYWQnXTtcbiAgICAgIGlmICh0bXAgPT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcbiAgICAgIGxldCBlbEhlaWdodCA9IHRtcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICBlbEhlaWdodCArPSBwYXJzZUludChcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodG1wKS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJylcbiAgICAgICk7XG4gICAgICByZXR1cm4gZWxIZWlnaHQgfHwgMDtcbiAgICB9LFxuICAgIGFzeW5jIGdldG9ubGluZShURiA9ICdmYWxzZScsIHJldHJ5ID0gMikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5jaGFwdGVycyA9IDxjaGFwdGVyW10+KFxuICAgICAgICAgIChcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXJzP29ubGluZUZldGNoPSR7VEZ9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkuZGF0YVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXRyeS0tO1xuICAgICAgICBpZiAocmV0cnkgPj0gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICdmZXRjaCBjaGFwdGVycyBmYWlsZWQgaW4gY2hhcHRlckxpc3QgUmV0cnlpbmcsIHJldHJpZXMgbGVmdDogJyArXG4gICAgICAgICAgICAgIHJldHJ5XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmdldG9ubGluZShURiwgcmV0cnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZldGNoIGNoYXB0ZXJzIGZhaWxlZCBpbiBjaGFwdGVyTGlzdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBkb3dubG9hZChpbmRleDogbnVtYmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLiRhcGkuZ2V0KFxuICAgICAgICBgL2FwaS92MS9kb3dubG9hZC8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgYXdhaXQgdGhpcy4kYXBpLmRlbGV0ZShcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke2luZGV4fWBcbiAgICAgICk7XG4gICAgICB0aGlzLmdldG9ubGluZSgpO1xuICAgIH0sXG4gICAgYXN5bmMgbXBhdGNoKGluZGV4OiBudW1iZXIsIEZEOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICBhd2FpdCB0aGlzLiRhcGkucGF0Y2hGb3JtKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7aW5kZXh9YCxcbiAgICAgICAgRkRcbiAgICAgICk7XG4gICAgICB0aGlzLmdldG9ubGluZSgpO1xuICAgIH0sXG4gICAgaGFuZGxlSG9sZChpZDogbnVtYmVyKSB7XG4gICAgICB0aGlzLnNlbGVjdE1vZGUgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3R0aGlzKGlkKTtcbiAgICB9LFxuICAgIHNlbGVjdHRoaXMoaWQ6IG51bWJlcikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmZpbHRlcigoZSkgPT4gZSAhPT0gaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdGFsbCgpIHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZG9TcnQubWFwKChlbGUpID0+IGVsZS5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgICB9XG4gICAgfSxcbiAgICBkbChsaXN0OiBudW1iZXJbXSkge1xuICAgICAgdGhpcy4kYXBpLnBvc3QoJy9hcGkvdjEvZG93bmxvYWQvYmF0Y2gnLCB7IGNoYXB0ZXJJZHM6IGxpc3QgfSk7XG4gICAgfSxcbiAgICByZWFkKGxpc3Q6IG51bWJlcltdLCB0ZiA9IHRydWUsIHJiOiAnaXNSZWFkJyB8ICdpc0Jvb2ttYXJrZWQnID0gJ2lzUmVhZCcpIHtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAucG9zdChgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyL2JhdGNoYCwge1xuICAgICAgICAgIGNoYXB0ZXJJZHM6IGxpc3QsXG4gICAgICAgICAgY2hhbmdlOiB7IFtyYl06IHRmIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0b25saW5lKCkpO1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XG4uc2VsZWN0ZWRcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50XG5cbi5zZWxlY3Rtb2RlIC5xLWl0ZW1cbiAgb3BhY2l0eTogMC41XG48L3N0eWxlPlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cbi5GYWJjb25zaXN0IC5xLWJ0bl9fY29udGVudFxuICBmbGV4LXdyYXA6IG5vd3JhcFxuPC9zdHlsZT5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlXG4gICAgY2xhc3M9XCJub3dyYXBcIlxuICAgIDpjbGFzcz1cIiRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMgPyBgY29sYCA6IGByb3dgXCJcbiAgICA6c3R5bGUtZm49XCJteVR3ZWFrXCJcbiAgPlxuICAgIDxtYW5nYUluZm9cbiAgICAgIDptYW5nYT1cIm1hbmdhXCJcbiAgICAgIDpvZmZzZXQ9XCJvZmZzZXRcIlxuICAgICAgY2xhc3M9XCJjb2wtNlwiXG4gICAgICBAaW5saWI9XCJnZXRvbmxpbmVcIlxuICAgIC8+XG4gICAgPG1hbmdhQ2hhcHRlcnMgY2xhc3M9XCJjb2wtNlwiIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgbWFuZ2FJbmZvIGZyb20gJ3NyYy9jb21wb25lbnRzL21hbmdhL21hbmdhSW5mby52dWUnO1xuaW1wb3J0IG1hbmdhQ2hhcHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvY2hhcHRlckxpc3QudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYVBhZ2UnLFxuICBjb21wb25lbnRzOiB7IG1hbmdhSW5mbywgbWFuZ2FDaGFwdGVycyB9LFxuICBlbWl0czogWydzZXQtdGl0bGUnXSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgbWFuZ2EgPSByZWYoPG1hbmdhPnt9KTtcbiAgICByZXR1cm4geyBtYW5nYSwgb2Zmc2V0OiByZWYoPG51bWJlcj5OdW1iZXIoKSkgfTtcbiAgfSxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGJ1cy5vbigndXBkYXRlTWFuZ2EnLCAoKSA9PiB7XG4gICAgICB0aGlzLmdldG9ubGluZSgndHJ1ZScpO1xuICAgIH0pO1xuICAgIGF3YWl0IHRoaXMuZ2V0b25saW5lKCk7XG4gICAgdGhpcy4kZW1pdCgnc2V0LXRpdGxlJywgdGhpcy5tYW5nYT8udGl0bGUgfHwgJ21hbmdhJyk7XG4gICAgaWYgKFxuICAgICAgbmV3IERhdGUodGhpcy5tYW5nYS5sYXN0RmV0Y2hlZEF0ICogMTAwMCkgPFxuICAgICAgbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gMSkpXG4gICAgKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgndXBkYXRlTWFuZ2EnKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRvbmxpbmUoVEYgPSAnZmFsc2UnLCByZXRyeSA9IDMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWFuZ2EgPSAoXG4gICAgICAgICAgKGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS8/b25saW5lRmV0Y2g9JHtURn1gXG4gICAgICAgICAgKSkgYXMgQXhpb3NSZXNwb25zZTxtYW5nYT5cbiAgICAgICAgKS5kYXRhO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHJldHJ5ID49IDEpIGF3YWl0IHRoaXMuZ2V0b25saW5lKFRGLCByZXRyeSAtIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCcsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF80IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9ob2lzdGVkXzIiLCJfbm9ybWFsaXplQ2xhc3MiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfMyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsInBvc2l0aW9uIiwiTG9jYWxTdG9yYWdlIiwiX3dpdGhDdHgiLCJfd2l0aERpcmVjdGl2ZXMiLCJfd2l0aE1vZGlmaWVycyIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsT0FBTztBQUFBLEVBQ2YsTUFBTSxPQUFPOztBQUNMLFVBQUEsV0FBVyxTQUFTLFlBQVksSUFBSTtBQUNuQyxXQUFBO0FBQUEsTUFDTDtBQUFBLE1BQ0EsT0FBTyxNQUFJLFdBQU0sVUFBTixtQkFBYSxjQUFhLEtBQUs7QUFBQSxNQUMxQyxTQUFTLElBQUk7QUFBQSxJQUFBO0FBQUEsRUFFakI7QUFBQSxFQUNBLFNBQVMsV0FBWTtB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
