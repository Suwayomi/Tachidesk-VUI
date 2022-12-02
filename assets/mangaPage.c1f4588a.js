import { Q as QPage } from "./QPage.8c90446c.js";
import { g as getImgBlob, Q as QImg } from "./usefull.8778cf5c.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QChip, a as QMenu } from "./QMenu.e8ab5d35.js";
import { storeGet, storeSet } from "./StoreStuff.45ae8e68.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, j as createBlock, n as createCommentVNode, u as createBaseVNode, q as normalizeClass, t as toDisplayString, p as createTextVNode, m as createVNode, F as Fragment, x as renderList, a6 as normalizeStyle, k as withCtx, c as computed, a7 as debounce, J as onDeactivated, I as onActivated, o as onBeforeUnmount, h, B as withDirectives, g as getCurrentInstance, Z as client, X as noop, a0 as leftClick, U as addEvt, W as position, V as cleanEvt, L as stopAndPrevent, P as Plugin, a5 as useRoute, s as resolveComponent, ai as withModifiers } from "./index.5cc93081.js";
import { Q as QIcon } from "./QIcon.129c8e27.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.f373f416.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QList } from "./QList.323c1084.js";
import { Q as QLinearProgress } from "./QLinearProgress.b8ae575c.js";
import { Q as QIntersection } from "./QIntersection.c01880aa.js";
import { u as useDarkProps, a as useDark } from "./use-dark.1adac86a.js";
import { Q as QResizeObserver } from "./QResizeObserver.08dcd257.js";
import { Q as QScrollObserver } from "./QScrollObserver.6d28dc53.js";
import { T as TouchPan } from "./TouchPan.8843921d.js";
import { c as createComponent, a as hMergeSlot, f as createDirective } from "./QSpinner.7d14a7f2.js";
import { b as between } from "./format.2a3572e1.js";
import { e as setHorizontalScrollPosition, s as setVerticalScrollPosition } from "./scroll.b1151d01.js";
import { Q as QTooltip } from "./QTooltip.6bd57eb1.js";
import { Q as QPageSticky } from "./QPageSticky.057230f8.js";
import { C as ClosePopup } from "./ClosePopup.501d8ad0.js";
import { c as clearSelection } from "./selection.4336ddbe.js";
import { R as Ripple } from "./Ripple.3a8ac2e1.js";
import { p as isdlsock } from "./models.4021c4b7.js";
import { Q as QTab } from "./QTab.5863deae.js";
import { Q as QTabs } from "./QTabs.02416a46.js";
import { Q as QCardSection } from "./QCardSection.c8f72209.js";
import { Q as QCheckbox } from "./QCheckbox.76c4b12d.js";
import { Q as QRadio } from "./QRadio.2833a467.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QDialog } from "./QDialog.e6d65e20.js";
import { u as useDlSock } from "./useDlSock.2097a636.js";
import "./axios.01f4fb44.js";
import "./position-engine.4089f253.js";
import "./use-timeout.fccbe84a.js";
import "./use-transition.651acf9e.js";
import "./dom.e2e78a08.js";
import "./focus-manager.32f8d49a.js";
import "./Intersection.79320c52.js";
import "./uid.42677368.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.17ce6f52.js";
import "./option-sizes.60af55ae.js";
import "./use-form.94dd5d17.js";
var mangaInfo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = defineComponent({
  name: "mangaInfo",
  props: {
    manga: {
      type: Object
    },
    offset: {
      type: Number,
      default: () => 0
    }
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
  },
  setup(props) {
    var _a;
    const useCache = storeGet("useCache", true);
    return {
      useCache,
      inLib: ref(((_a = props.manga) == null ? void 0 : _a.inLibrary) || false),
      imgdata: ref()
    };
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
  name: "libraryTopBar",
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
  },
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
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    modelValue: _ctx.unread,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.unread = $event),
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
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    modelValue: _ctx.downloaded,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.downloaded = $event),
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
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    modelValue: _ctx.bookmarked,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.bookmarked = $event),
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
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    modelValue: _ctx.Source,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.Source = $event),
                    label: "By Source"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    modelValue: _ctx.FetchDate,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.FetchDate = $event),
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
  name: "mangaChapters",
  created: async function() {
    this.$bus.on("updateManga", () => {
      this.getonline("true");
    });
    this.getonline();
  },
  components: { filterr },
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
  }
});
const _hoisted_1 = { ref: "conta" };
const _hoisted_2 = {
  class: "row justify-between items-center",
  ref: "chapHead"
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
                clickable: "",
                class: normalizeClass([
                  "q-ma-sm rounded-borders",
                  (item.read ? `text-grey` : ``) + ` ` + (_ctx.selected.includes(item.id) && _ctx.selectMode ? `selected` : ``) + " " + (_ctx.$q.dark.isActive ? `bg-dark` : `bg-light`)
                ]),
                to: _ctx.selectMode ? void 0 : `/manga/` + item.mangaId + `/chapter/` + item.index,
                onClick: ($event) => _ctx.selectMode ? _ctx.selectthis(item.id) : void 0,
                key: item.index
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
                    onClick: _cache[16] || (_cache[16] = withModifiers(() => {
                    }, ["prevent"])),
                    round: "",
                    flat: "",
                    icon: "more_vert",
                    class: "flex-right"
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
                                onClick: ($event) => _ctx.mpatch(item.index, {
                                  read: `${!item.read}`,
                                  lastPageRead: "1"
                                }),
                                clickable: ""
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
                                onClick: ($event) => _ctx.mpatch(item.index, { markPrevRead: "true" }),
                                clickable: ""
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
      position: "bottom-right",
      offset: _ctx.fabPos,
      ref: "sticky"
    }, {
      default: withCtx(() => [
        createVNode(_component_router_link, {
          style: { "text-decoration": "none", "color": "inherit" },
          is: _ctx.draggingFab ? "span" : "router-link",
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
var mangaChapters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-21098a5c"], ["__file", "chapterList.vue"]]);
const _sfc_main = defineComponent({
  name: "mangaPage",
  components: { mangaInfo, mangaChapters },
  created: async function() {
    var _a;
    this.$bus.on("updateManga", () => {
      this.getonline("true");
    });
    await this.getonline();
    this.$emit("setTitle", ((_a = this.manga) == null ? void 0 : _a.title) || "manga");
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
  },
  setup() {
    const manga2 = ref({});
    return { manga: manga2, offset: ref(Number()) };
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
        onInlib: _ctx.getonline,
        manga: _ctx.manga,
        offset: _ctx.offset,
        class: "col-6"
      }, null, 8, ["onInlib", "manga", "offset"]),
      createVNode(_component_mangaChapters, { class: "col-6" })
    ]),
    _: 1
  }, 8, ["class", "style-fn"]);
}
var mangaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "mangaPage.vue"]]);
export { mangaPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FQYWdlLmMxZjQ1ODhhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9tYW5nYUluZm8udnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hIb2xkLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuZ2EvZmlsdGVycy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL0ZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9jaGFwdGVyTGlzdC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvbWFuZ2FQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicS1weC1tZCBxLXB5LW1kIGNvbCBNYW5nYUluZm9cIlxuICAgIHN0eWxlPVwib3ZlcmZsb3cteTogYXV0b1wiXG4gICAgOnN0eWxlPVwiXG4gICAgICAkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzXG4gICAgICAgID8gYGBcbiAgICAgICAgOiBgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIGAgKyBvZmZzZXQgKyBgcHgpYFxuICAgIFwiXG4gID5cbiAgICA8cS1pbWdcbiAgICAgIHYtaWY9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiAxMDAlXCJcbiAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIHEtbXgtbWRcIlxuICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICBmaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IG5vLXdyYXBcIj5cbiAgICAgIDxxLWltZ1xuICAgICAgICB2LWlmPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZClcIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiA1MCU7IGZsZXg6IG5vbmVcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgZml0PVwic2NhbGUtZG93blwiXG4gICAgICAvPlxuICAgICAgPGRpdiB2LWlmPVwibWFuZ2FcIiBjbGFzcz1cInEtbXgtbWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiPlxuICAgICAgICA8aDNcbiAgICAgICAgICBzdHlsZT1cIm92ZXJmbG93LXdyYXA6IGFueXdoZXJlXCJcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZCA/IGBxLW15LXNtYCA6IGBgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIiB2LWlmPVwibWFuZ2EuYXV0aG9yXCI+XG4gICAgICAgICAgQXV0aG9yOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2EuYXV0aG9yIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgcS1teS14c1wiIHYtaWY9XCJtYW5nYS5hcnRpc3RcIj5cbiAgICAgICAgICBBcnRpc3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IG1hbmdhLmFydGlzdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIiB2LWlmPVwibWFuZ2Euc3RhdHVzXCI+XG4gICAgICAgICAgU3RhdHVzOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2Euc3RhdHVzIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgcS1teS14c1wiIHYtaWY9XCJtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lXCI+XG4gICAgICAgICAgU291cmNlOlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJxLW15LW1kXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmNvbG9yPVwibWFuZ2E/LmluTGlicmFyeSA/IGBwcmltYXJ5YCA6IGBncmV5LTlgXCJcbiAgICAgICAgaWNvbj1cImZhdm9yaXRlXCJcbiAgICAgICAgOmxhYmVsPVwibWFuZ2E/LmluTGlicmFyeSA/IGBJbiBMaWJyYXJ5YCA6IGBBZGQgVG8gTGlicmFyeWBcIlxuICAgICAgICBAY2xpY2s9XCJJbkxpYnJhcnlcIlxuICAgICAgLz5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGNvbG9yPVwiZ3JleS05XCJcbiAgICAgICAgaWNvbj1cInB1YmxpY1wiXG4gICAgICAgIGxhYmVsPVwiT3BlbiBTaXRlXCJcbiAgICAgICAgOmhyZWY9XCJtYW5nYT8ucmVhbFVybFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cIm1hbmdhPy5kZXNjcmlwdGlvblwiPlxuICAgICAgPGg2IGNsYXNzPVwicS1teS1zbVwiPkFib3V0OjwvaDY+XG4gICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMS4zZW1cIj57eyBtYW5nYS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJtYW5nYT8uZ2VucmVcIj5cbiAgICAgIDxxLWNoaXAgdi1mb3I9XCJ0YWcgaW4gbWFuZ2EuZ2VucmVcIiA6a2V5PVwidGFnXCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj57e1xuICAgICAgICB0YWdcbiAgICAgIH19PC9xLWNoaXA+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYUluZm8nLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+XG4gICAgfSxcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gMFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmltZ2RhdGEgJiYgdGhpcy5tYW5nYSkge1xuICAgICAgdGhpcy5nZXRJbWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdW53YXRjaCA9IHRoaXMuJHdhdGNoKFxuICAgICAgICAoKSA9PiBbdGhpcy5pbWdkYXRhLCB0aGlzLm1hbmdhXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pbWdkYXRhICYmIHRoaXMubWFuZ2EpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1nKCk7XG4gICAgICAgICAgICB1bndhdGNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIEluTGlicmFyeSgpIHtcbiAgICAgIHRoaXMuaW5MaWIgPSAhdGhpcy5pbkxpYjtcbiAgICAgIGlmICh0aGlzLmluTGliKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vbGlicmFyeS9gXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLiRhcGkuZGVsZXRlKFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2xpYnJhcnkvYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnaW5saWInKTtcbiAgICB9LFxuICAgIGdldEltZygpIHtcbiAgICAgIGdldEltZ0Jsb2IodGhpcy5tYW5nYT8udGh1bWJuYWlsVXJsICsgJz91c2VDYWNoZT0nICsgdGhpcy51c2VDYWNoZSkudGhlbihcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IHVzZUNhY2hlID0gc3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZUNhY2hlLFxuICAgICAgaW5MaWI6IHJlZihwcm9wcy5tYW5nYT8uaW5MaWJyYXJ5IHx8IGZhbHNlKSxcbiAgICAgIGltZ2RhdGE6IHJlZigpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XG4uTWFuZ2FJbmZvIC5xLWltZ19fY29udGFpbmVyXG4gIHBvc2l0aW9uOiB1bnNldFxuXG4uTWFuZ2FJbmZvIC5xLWltZy5xLWltZy0tbWVudSA6Zmlyc3QtY2hpbGRcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2l0aERpcmVjdGl2ZXMsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuXG5jb25zdCBheGlzTGlzdCA9IFsgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnIF1cbmNvbnN0IGRpclByb3BzID0ge1xuICB2ZXJ0aWNhbDogeyBvZmZzZXQ6ICdvZmZzZXRZJywgc2Nyb2xsOiAnc2Nyb2xsVG9wJywgZGlyOiAnZG93bicsIGRpc3Q6ICd5JyB9LFxuICBob3Jpem9udGFsOiB7IG9mZnNldDogJ29mZnNldFgnLCBzY3JvbGw6ICdzY3JvbGxMZWZ0JywgZGlyOiAncmlnaHQnLCBkaXN0OiAneCcgfVxufVxuY29uc3QgcGFuT3B0cyA9IHtcbiAgcHJldmVudDogdHJ1ZSxcbiAgbW91c2U6IHRydWUsXG4gIG1vdXNlQWxsRGlyOiB0cnVlXG59XG5cbmNvbnN0IGdldE1pblRodW1iU2l6ZSA9IHNpemUgPT4gKHNpemUgPj0gMjUwID8gNTAgOiBNYXRoLmNlaWwoc2l6ZSAvIDUpKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbEFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgdGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIHZlcnRpY2FsVGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIGhvcml6b250YWxUaHVtYlN0eWxlOiBPYmplY3QsXG5cbiAgICBiYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICB2ZXJ0aWNhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhvcml6b250YWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50QWN0aXZlU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBkZWxheToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG5cbiAgICB2aXNpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICAvLyBzdGF0ZSBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGVtcFNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBob3ZlciA9IHJlZihmYWxzZSlcblxuICAgIC8vIG90aGVyLi4uXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgdmVydGljYWw6IHJlZigwKSxcbiAgICAgIGhvcml6b250YWw6IHJlZigwKVxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH0sXG5cbiAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcblxuICAgIGxldCB0aW1lciwgcGFuUmVmUG9zXG5cbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYSdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIudmVydGljYWwudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC8gc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgLi4ucHJvcHMudmVydGljYWxUaHVtYlN0eWxlLFxuICAgICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLXYgYWJzb2x1dGUtcmlnaHQnXG4gICAgICArIChzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlN0YXJ0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLSBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICogY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLyBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlLFxuICAgICAgICAgIGdldE1pblRodW1iU2l6ZShjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAgIC4uLnByb3BzLmhvcml6b250YWxUaHVtYlN0eWxlLFxuICAgICAgICBsZWZ0OiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICB3aWR0aDogYCR7IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZS52YWx1ZSB9cHhgXG4gICAgICB9XG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWggYWJzb2x1dGUtYm90dG9tJ1xuICAgICAgKyAoc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1haW5TdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbnRlbnRTdHlsZVxuICAgICAgICA6IHByb3BzLmNvbnRlbnRBY3RpdmVTdHlsZVxuICAgICkpXG5cbiAgICBjb25zdCB0aHVtYlZlcnREaXIgPSBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ3ZlcnRpY2FsJykgfSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHsgdmVydGljYWw6IHRydWUsIC4uLnBhbk9wdHMgfVxuICAgIF0gXVxuXG4gICAgY29uc3QgdGh1bWJIb3JpekRpciA9IFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAnaG9yaXpvbnRhbCcpIH0sXG4gICAgICB2b2lkIDAsXG4gICAgICB7IGhvcml6b250YWw6IHRydWUsIC4uLnBhbk9wdHMgfVxuICAgIF0gXVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsICgpIHtcbiAgICAgIGNvbnN0IGluZm8gPSB7fVxuXG4gICAgICBheGlzTGlzdC5mb3JFYWNoKGF4aXMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgICBpbmZvWyBheGlzICsgJ1Bvc2l0aW9uJyBdID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBpbmZvWyBheGlzICsgJ1BlcmNlbnRhZ2UnIF0gPSBkYXRhLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgICAgaW5mb1sgYXhpcyArICdTaXplJyBdID0gZGF0YS5zaXplLnZhbHVlXG4gICAgICAgIGluZm9bIGF4aXMgKyAnQ29udGFpbmVyU2l6ZScgXSA9IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gaW5mb1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgbG90cyBvZiBsaXN0ZW5lcnMsIHNvXG4gICAgLy8gZW5zdXJlIHdlJ3JlIG5vdCBlbWl0dGluZyBzYW1lIGluZm9cbiAgICAvLyBtdWx0aXBsZSB0aW1lc1xuICAgIGNvbnN0IGVtaXRTY3JvbGwgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICBjb25zdCBpbmZvID0gZ2V0U2Nyb2xsKClcbiAgICAgIGluZm8ucmVmID0gcHJveHlcbiAgICAgIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24gKGF4aXMsIG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChheGlzTGlzdC5pbmNsdWRlcyhheGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1FTY3JvbGxBcmVhXTogd3JvbmcgZmlyc3QgcGFyYW0gb2Ygc2V0U2Nyb2xsUG9zaXRpb24gKHZlcnRpY2FsL2hvcml6b250YWwpJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICA/IHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb25cbiAgICAgICAgOiBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb25cblxuICAgICAgZm4odGFyZ2V0UmVmLnZhbHVlLCBvZmZzZXQsIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lciAoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuXG4gICAgICBpZiAoY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbCAoeyBwb3NpdGlvbiB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAhPT0gcG9zaXRpb24udG9wKSB7XG4gICAgICAgIHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLnRvcFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSAhPT0gcG9zaXRpb24ubGVmdCkge1xuICAgICAgICBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLmxlZnRcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgc3RhcnRUaW1lcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsU2l6ZSAoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICAgIGlmIChzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlID0gd2lkdGhcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFuVGh1bWIgKGUsIGF4aXMpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICBpZiAoZS5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBwYW5SZWZQb3MgPSBkYXRhLnBvc2l0aW9uLnZhbHVlXG4gICAgICAgIHBhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5uaW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZS5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIHBhbm5pbmcudmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkUHJvcCA9IGRpclByb3BzWyBheGlzIF1cbiAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjb250YWluZXJbIGF4aXMgXS52YWx1ZVxuXG4gICAgICBjb25zdCBtdWx0aXBsaWVyID0gKGRhdGEuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclNpemUpIC8gKGNvbnRhaW5lclNpemUgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSlcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gZS5kaXN0YW5jZVsgZFByb3AuZGlzdCBdXG4gICAgICBjb25zdCBwb3MgPSBwYW5SZWZQb3MgKyAoZS5kaXJlY3Rpb24gPT09IGRQcm9wLmRpciA/IDEgOiAtMSkgKiBkaXN0YW5jZSAqIG11bHRpcGxpZXJcblxuICAgICAgc2V0U2Nyb2xsKHBvcywgYXhpcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZG93biAoZXZ0LCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGRhdGEudGh1bWJIaWRkZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZ0WyBkaXJQcm9wc1sgYXhpcyBdLm9mZnNldCBdXG4gICAgICAgIGlmIChvZmZzZXQgPCBkYXRhLnRodW1iU3RhcnQudmFsdWUgfHwgb2Zmc2V0ID4gZGF0YS50aHVtYlN0YXJ0LnZhbHVlICsgZGF0YS50aHVtYlNpemUudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwb3MgPSBvZmZzZXQgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSAvIDJcbiAgICAgICAgICBzZXRTY3JvbGwocG9zIC8gY29udGFpbmVyWyBheGlzIF0udmFsdWUgKiBkYXRhLnNpemUudmFsdWUsIGF4aXMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3RpdmF0ZSB0aHVtYiBwYW5cbiAgICAgICAgaWYgKGRhdGEucmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZGF0YS5yZWYudmFsdWUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChldnQudHlwZSwgZXZ0KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVmVydGljYWxNb3VzZWRvd24gKGV2dCkge1xuICAgICAgb25Nb3VzZWRvd24oZXZ0LCAndmVydGljYWwnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSG9yaXpvbnRhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICBvbk1vdXNlZG93bihldnQsICdob3Jpem9udGFsJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyICgpIHtcbiAgICAgIGlmICh0ZW1wU2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRlbXBTaG93aW5nLnZhbHVlID0gZmFsc2UgfSwgcHJvcHMuZGVsYXkpXG4gICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXRTY3JvbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbCAob2Zmc2V0LCBheGlzKSB7XG4gICAgICB0YXJnZXRSZWYudmFsdWVbIGRpclByb3BzWyBheGlzIF0uc2Nyb2xsIF0gPSBvZmZzZXRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZW50ZXIgKCkge1xuICAgICAgaG92ZXIudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWxlYXZlICgpIHtcbiAgICAgIGhvdmVyLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBudWxsXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoc2Nyb2xsVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLmxlZnQpXG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24oc2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbi50b3ApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudChlbWl0U2Nyb2xsLmNhbmNlbClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIGdldFNjcm9sbFRhcmdldDogKCkgPT4gdGFyZ2V0UmVmLnZhbHVlLFxuICAgICAgZ2V0U2Nyb2xsLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfSksXG4gICAgICBnZXRTY3JvbGxQZXJjZW50YWdlOiAoKSA9PiAoe1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uOiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uLFxuICAgICAgc2V0U2Nyb2xsUGVyY2VudGFnZSAoYXhpcywgcGVyY2VudGFnZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbG9jYWxTZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICBheGlzLFxuICAgICAgICAgIHBlcmNlbnRhZ2UgKiAoc2Nyb2xsWyBheGlzIF0uc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKSxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgb25Nb3VzZWVudGVyLFxuICAgICAgICBvbk1vdXNlbGVhdmVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250YWluZXIgc2Nyb2xsIHJlbGF0aXZlLXBvc2l0aW9uIGZpdCBoaWRlLXNjcm9sbGJhcicsXG4gICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4ICE9PSB2b2lkIDAgPyBwcm9wcy50YWJpbmRleCA6IHZvaWQgMFxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRlbnQgYWJzb2x1dGUnLFxuICAgICAgICAgICAgc3R5bGU6IG1haW5TdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVTY3JvbGxTaXplXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKSxcblxuICAgICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7XG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXG4gICAgICAgICAgICBvblNjcm9sbDogdXBkYXRlU2Nyb2xsXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBbIHByb3BzLmJhclN0eWxlLCBwcm9wcy52ZXJ0aWNhbEJhclN0eWxlIF0sXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgIG9uTW91c2Vkb3duOiBvblZlcnRpY2FsTW91c2Vkb3duXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLmhvcml6b250YWxCYXJTdHlsZSBdLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICBvbk1vdXNlZG93bjogb25Ib3Jpem9udGFsTW91c2Vkb3duXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogc2Nyb2xsLnZlcnRpY2FsLnJlZixcbiAgICAgICAgICAgIGNsYXNzOiBzY3JvbGwudmVydGljYWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiBzY3JvbGwudmVydGljYWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aHVtYlZlcnREaXJcbiAgICAgICAgKSxcblxuICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICByZWY6IHNjcm9sbC5ob3Jpem9udGFsLnJlZixcbiAgICAgICAgICAgIGNsYXNzOiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHNjcm9sbC5ob3Jpem9udGFsLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGh1bWJIb3JpekRpclxuICAgICAgICApXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgc3RvcEFuZFByZXZlbnQsIG5vb3AgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtaG9sZCcsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtaG9sZCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCB7IG1vZGlmaWVycyB9ID0gYmluZGluZ1xuXG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBoYW5kbGVyOiBiaW5kaW5nLnZhbHVlLFxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbicgJiYgbGVmdENsaWNrKGV2dCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdjbGljaycsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY3R4Lm9yaWdpbiA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgICAgICBpZiAoY2xpZW50LmlzLm1vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlLCAxMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHgudHJpZ2dlcmVkID0gZmFsc2VcbiAgICAgICAgICAgIGN0eC5zZW5zaXRpdml0eSA9IG1vdXNlRXZlbnQgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBjdHgubW91c2VTZW5zaXRpdml0eVxuICAgICAgICAgICAgICA6IGN0eC50b3VjaFNlbnNpdGl2aXR5XG5cbiAgICAgICAgICAgIGN0eC50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgICAgICAgIGN0eC50cmlnZ2VyZWQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgY3R4LmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGV2dCxcbiAgICAgICAgICAgICAgICB0b3VjaDogbW91c2VFdmVudCAhPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY3R4Lm9yaWdpbixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgY3R4LmR1cmF0aW9uKVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBwb3NpdGlvbihldnQpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIE1hdGguYWJzKGxlZnQgLSBjdHgub3JpZ2luLmxlZnQpID49IGN0eC5zZW5zaXRpdml0eVxuICAgICAgICAgICAgICB8fCBNYXRoLmFicyh0b3AgLSBjdHgub3JpZ2luLnRvcCkgPj0gY3R4LnNlbnNpdGl2aXR5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGN0eC50aW1lcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQpIHtcbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgICAvLyBkZWxheSBuZWVkZWQgb3RoZXJ3aXNlIHNlbGVjdGlvbiBzdGlsbCBvY2N1cnNcbiAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKGN0eC50cmlnZ2VyZWQpXG5cbiAgICAgICAgICAgIGlmIChjdHgudHJpZ2dlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGR1cmF0aW9uIGluIG1zLCB0b3VjaCBpbiBwaXhlbHMsIG1vdXNlIGluIHBpeGVsc1xuICAgICAgICBjb25zdCBkYXRhID0gWyA2MDAsIDUsIDcgXVxuXG4gICAgICAgIGlmICh0eXBlb2YgYmluZGluZy5hcmcgPT09ICdzdHJpbmcnICYmIGJpbmRpbmcuYXJnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBiaW5kaW5nLmFyZy5zcGxpdCgnOicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUludCh2YWwsIDEwKVxuICAgICAgICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIFsgY3R4LmR1cmF0aW9uLCBjdHgudG91Y2hTZW5zaXRpdml0eSwgY3R4Lm1vdXNlU2Vuc2l0aXZpdHkgXSA9IGRhdGFcblxuICAgICAgICBlbC5fX3F0b3VjaGhvbGQgPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2hlbmQnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwICYmIGJpbmRpbmcub2xkVmFsdWUgIT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICB0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmcudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaGhvbGRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzdG9yZVNldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuXG50eXBlIGJubiA9IGJvb2xlYW4gfCBudWxsO1xuXG50eXBlIGRpc3AgPSAnc291cmNlJyB8ICdjaGFwdGVyJztcblxuY29uc3QgVW5yZWFkID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBEb3dubG9hZGVkID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBCb29rbWFya2VkID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBTb3VyY2UgPSByZWYoPGJubj5udWxsKTtcbmNvbnN0IEZldGNoRGF0ZSA9IHJlZig8Ym5uPm51bGwpO1xuY29uc3QgRGlzcGxheSA9IHJlZig8ZGlzcD4nc291cmNlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFwdGVyc0ZpbHRlcihtYW5nYUlEOiBudW1iZXIpIHtcbiAgVW5yZWFkLnZhbHVlID0gPGJubj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoVW5yZWFkYCk7XG4gIERvd25sb2FkZWQudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hEb3dubG9hZGVkYCk7XG4gIEJvb2ttYXJrZWQudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hCb29rbWFya2VkYCk7XG4gIFNvdXJjZS52YWx1ZSA9IDxibm4+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaFNvdXJjZWApO1xuICBGZXRjaERhdGUudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hGZXRjaERhdGVgKTtcbiAgRGlzcGxheS52YWx1ZSA9IDxkaXNwPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hEaXNwbGF5YCk7XG5cbiAgY29uc3Qgc2V0VW5yZWFkID0gZnVuY3Rpb24gKHZhbHVlOiBibm4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgTG9jYWxTdG9yYWdlLnJlbW92ZShgJHttYW5nYUlEfUNoVW5yZWFkYCk7XG4gICAgZWxzZSBMb2NhbFN0b3JhZ2Uuc2V0KGAke21hbmdhSUR9Q2hVbnJlYWRgLCB2YWx1ZSk7XG4gICAgVW5yZWFkLnZhbHVlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldERvd25sb2FkZWQgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hEb3dubG9hZGVkYCwgdmFsdWUpO1xuICAgIERvd25sb2FkZWQudmFsdWUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0Qm9va21hcmtlZCA9IGZ1bmN0aW9uICh2YWx1ZTogYm5uKSB7XG4gICAgc3RvcmVTZXQoYCR7bWFuZ2FJRH1DaEJvb2ttYXJrZWRgLCB2YWx1ZSk7XG4gICAgQm9va21hcmtlZC52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRTb3VyY2UgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoU291cmNlYCwgdmFsdWUpO1xuICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZShgJHttYW5nYUlEfUNoRmV0Y2hEYXRlYCk7XG4gICAgfVxuICAgIFNvdXJjZS52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRGZXRjaERhdGUgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoRmV0Y2hEYXRlYCwgdmFsdWUpO1xuICAgICAgTG9jYWxTdG9yYWdlLnJlbW92ZShgJHttYW5nYUlEfUNoU291cmNlYCk7XG4gICAgfVxuICAgIEZldGNoRGF0ZS52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXREaXNwbGF5ID0gZnVuY3Rpb24gKHZhbHVlOiAnc291cmNlJyB8ICdjaGFwdGVyJykge1xuICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hEaXNwbGF5YCwgdmFsdWUsICdzb3VyY2UnKTtcbiAgICBEaXNwbGF5LnZhbHVlID0gdmFsdWU7XG4gIH07XG5cbiAgLy8gbmVlZHMgYSBkZWZhdWx0IGlmIG5vIHNvcnQgaXMgc2V0XG4gIGlmIChTb3VyY2UudmFsdWUgPT0gbnVsbCAmJiBGZXRjaERhdGUudmFsdWUgPT0gbnVsbCkgU291cmNlLnZhbHVlID0gZmFsc2U7XG4gIGlmIChEaXNwbGF5LnZhbHVlID09IG51bGwpIERpc3BsYXkudmFsdWUgPSAnc291cmNlJztcblxuICByZXR1cm4ge1xuICAgIFVucmVhZCxcbiAgICBEb3dubG9hZGVkLFxuICAgIEJvb2ttYXJrZWQsXG4gICAgU291cmNlLFxuICAgIEZldGNoRGF0ZSxcbiAgICBEaXNwbGF5LFxuICAgIHNldFVucmVhZCxcbiAgICBzZXREb3dubG9hZGVkLFxuICAgIHNldEJvb2ttYXJrZWQsXG4gICAgc2V0U291cmNlLFxuICAgIHNldEZldGNoRGF0ZSxcbiAgICBzZXREaXNwbGF5XG4gIH07XG59XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtYnRuXG4gICAgZmxhdFxuICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgcm91bmRcbiAgICA6dGV4dC1jb2xvcj1cIlxuICAgICAgJHEuZGFyay5pc0FjdGl2ZVxuICAgICAgICA/IGFyZWRlZmF1bHRzKClcbiAgICAgICAgICA/IGB3aGl0ZWBcbiAgICAgICAgICA6IGBvcmFuZ2VgXG4gICAgICAgIDogYXJlZGVmYXVsdHMoKVxuICAgICAgICA/IGBkYXJrYFxuICAgICAgICA6IGBvcmFuZ2VgXG4gICAgXCJcbiAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgIEBjbGljaz1cImRpYWxvID0gdHJ1ZVwiXG4gIC8+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgIDxxLXRhYnMgdi1tb2RlbD1cInRhYlwiIGNsYXNzPVwidGV4dC10ZWFsXCI+XG4gICAgICAgICAgPHEtdGFiXG4gICAgICAgICAgICBjbGFzcz1cInEtcHgteGxcIlxuICAgICAgICAgICAgbmFtZT1cImZpbHRlclwiXG4gICAgICAgICAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtdGFiIGNsYXNzPVwicS1weC14bFwiIG5hbWU9XCJzb3J0XCIgaWNvbj1cInNvcnRcIiBsYWJlbD1cIlNvcnRcIiAvPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJkaXNwbGF5XCJcbiAgICAgICAgICAgIGljb249XCJkaXNwbGF5X3NldHRpbmdzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGlzcGxheVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLXRhYnM+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ2ZpbHRlcidcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1tb2RlbD1cInVucmVhZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlVucmVhZFwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB5LXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkb3dubG9hZGVkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRG93bmxvYWRlZFwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1tb2RlbD1cImJvb2ttYXJrZWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJCb29rbWFya2VkXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImNoZWNrX2JveFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cInJfZGlzYWJsZWRfYnlfZGVmYXVsdFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnc29ydCdcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJhcnJvd191cHdhcmRcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJhcnJvd19kb3dud2FyZFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJudWxsXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICB2LW1vZGVsPVwiU291cmNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiQnkgU291cmNlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi1tZFwiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHYtbW9kZWw9XCJGZXRjaERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJCeSBGZXRjaCBkYXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnZGlzcGxheSdcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cInNvdXJjZVwiIGxhYmVsPVwiQnkgU291cmNlIFRpdGxlXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cImNoYXB0ZXJcIiBsYWJlbD1cIkJ5IENoYXB0ZXIgTnVtYmVyXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNoYXB0ZXJzRmlsdGVyIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvZmlsdGVycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnbGlicmFyeVRvcEJhcicsXG4gIC8vc2V0RmlsdGVyKHZhbHVlOiBibm4sIG1hbmdhSUQ6IG51bWJlciwgd2hhdENoYW5nZToga2V5a2V5cykge1xuICB3YXRjaDoge1xuICAgIHVucmVhZCgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXRVbnJlYWQodGhpcy51bnJlYWQpO1xuICAgIH0sXG4gICAgZG93bmxvYWRlZCgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXREb3dubG9hZGVkKHRoaXMuZG93bmxvYWRlZCk7XG4gICAgfSxcbiAgICBib29rbWFya2VkKCkge1xuICAgICAgdGhpcy5maWx0LnNldEJvb2ttYXJrZWQodGhpcy5ib29rbWFya2VkKTtcbiAgICB9LFxuICAgIFNvdXJjZSgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXRTb3VyY2UodGhpcy5Tb3VyY2UpO1xuICAgICAgaWYgKHRoaXMuU291cmNlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5GZXRjaERhdGUgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgRmV0Y2hEYXRlKCkge1xuICAgICAgdGhpcy5maWx0LnNldEZldGNoRGF0ZSh0aGlzLkZldGNoRGF0ZSk7XG4gICAgICBpZiAodGhpcy5GZXRjaERhdGUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLlNvdXJjZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwKCkge1xuICAgICAgdGhpcy5maWx0LnNldERpc3BsYXkodGhpcy5kaXNwKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhcmVkZWZhdWx0cygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudW5yZWFkID09IG51bGwgJiZcbiAgICAgICAgdGhpcy5kb3dubG9hZGVkID09IG51bGwgJiZcbiAgICAgICAgdGhpcy5ib29rbWFya2VkID09IG51bGwgJiZcbiAgICAgICAgdGhpcy5Tb3VyY2UgPT0gZmFsc2UgJiZcbiAgICAgICAgdGhpcy5GZXRjaERhdGUgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmRpc3AgPT0gJ3NvdXJjZSdcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG4gICAgY29uc3QgZmlsdCA9IGNoYXB0ZXJzRmlsdGVyKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gcmVmKGZpbHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvOiByZWYoZmFsc2UpLFxuICAgICAgdGFiOiByZWYoJ2ZpbHRlcicpLFxuICAgICAgdW5yZWFkOiByZWYoZmlsdC5VbnJlYWQpLFxuICAgICAgZG93bmxvYWRlZDogcmVmKGZpbHQuRG93bmxvYWRlZCksXG4gICAgICBib29rbWFya2VkOiByZWYoZmlsdC5Cb29rbWFya2VkKSxcbiAgICAgIFNvdXJjZTogcmVmKGZpbHQuU291cmNlKSxcbiAgICAgIEZldGNoRGF0ZTogcmVmKGZpbHQuRmV0Y2hEYXRlKSxcbiAgICAgIGZpbHQ6IGZpbHRlcnMsXG4gICAgICBkaXNwOiByZWYoZmlsdC5EaXNwbGF5KVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIHJlZj1cImNoYXBIZWFkXCI+XG4gICAgICA8aDQgY2xhc3M9XCJxLW1hLW1kXCI+e3sgY2hhcHRlcnMubGVuZ3RoIH19IGNoYXB0ZXJzPC9oND5cbiAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMnB4XCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGljb249XCJzZWxlY3RfYWxsXCJcbiAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0YWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgOmljb249XCJzZWxlY3RNb2RlID8gYGZsaXBfdG9fZnJvbnRgIDogYGZsaXBfdG9fYmFja2BcIlxuICAgICAgICAgIEBjbGljaz1cInNlbGVjdE1vZGUgPSAhc2VsZWN0TW9kZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0biByb3VuZCBmbGF0IGljb249XCJtb3JlX3ZlcnRcIj5cbiAgICAgICAgICA8cS1tZW51IGFuY2hvcj1cImJvdHRvbSBlbmRcIiBzZWxmPVwidG9wIHJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwid2lkdGg6IGZpdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDwhLS0gZG93bmxvYWQgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+ZG93bmxvYWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcCBzdGFydFwiXG4gICAgICAgICAgICAgICAgICBzZWxmPVwidG9wIGVuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuZG93bmxvYWRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkRvd25sb2FkIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhZWxlLmRvd25sb2FkZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC01KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQgTmV4dCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGwoc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8IS0tIHJlYWQgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+UmVhZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0LmZpbHRlcigoZWxlKSA9PiAhZWxlLnJlYWQpLm1hcCgoZWxlKSA9PiBlbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUucmVhZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkIE5leHQgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+UmVhZCBTZWxlY3RlZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwhLS0gdW5yZWFkIC0tPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X2xlZnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5yZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZCBBbGw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5yZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZCBMYXN0IDU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWFkKHNlbGVjdGVkLCBmYWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbnJlYWQgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8IS0tIGJvb2ttYXJrIC0tPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X2xlZnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3Agc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZj1cInRvcCBlbmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuYm9va21hcmtlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpc0Jvb2ttYXJrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Cb29rbWFyayBBbGw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhZWxlLmJvb2ttYXJrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC01KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzQm9va21hcmtlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrIE5leHQgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIHRydWUsICdpc0Jvb2ttYXJrZWQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrIFNlbGVjdGVkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPCEtLSB1bmJvb2ttYXJrIC0tPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X2xlZnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVuYm9va21hcms8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcCBzdGFydFwiXG4gICAgICAgICAgICAgICAgICBzZWxmPVwidG9wIGVuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gISFlbGUuYm9va21hcmtlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaXNCb29rbWFya2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5ib29rbWFyayBBbGw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5ib29rbWFya2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpc0Jvb2ttYXJrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbmJvb2ttYXJrIExhc3QgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIGZhbHNlLCAnaXNCb29rbWFya2VkJylcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbmJvb2ttYXJrIFNlbGVjdGVkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPGZpbHRlcnI+PC9maWx0ZXJyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHEtc2Nyb2xsLWFyZWFcbiAgICAgIGNsYXNzPVwicS1wci14c1wiXG4gICAgICA6c3R5bGU9XCJcbiAgICAgICAgJHEuc2NyZWVuLnNtIHx8ICRxLnNjcmVlbi54c1xuICAgICAgICAgID8gYGhlaWdodDogNTB2aGBcbiAgICAgICAgICA6IGBoZWlnaHQ6IGNhbGMoMTAwdmggLSBgICsgY2FsY0hlaWdodCgpICsgYHB4KWBcbiAgICAgIFwiXG4gICAgICA6Y2xhc3M9XCJzZWxlY3RNb2RlID8gYCBzZWxlY3Rtb2RlYCA6IGBgXCJcbiAgICA+XG4gICAgICA8cS1pbnRlcnNlY3Rpb25cbiAgICAgICAgdi1mb3I9XCJpdGVtIGluIGRvU3J0XCJcbiAgICAgICAgOmtleT1cIml0ZW0uaW5kZXhcIlxuICAgICAgICBzdHlsZT1cImhlaWdodDogNThweFwiXG4gICAgICAgIGNsYXNzPVwiXCJcbiAgICAgID5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIHYtdG91Y2gtaG9sZC5tb3VzZT1cIigpID0+IGhhbmRsZUhvbGQoaXRlbS5pZClcIlxuICAgICAgICAgIDppZD1cIml0ZW0uaWRcIlxuICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgY2xhc3M9XCJxLW1hLXNtIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAoaXRlbS5yZWFkID8gYHRleHQtZ3JleWAgOiBgYCkgK1xuICAgICAgICAgICAgYCBgICtcbiAgICAgICAgICAgIChzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLmlkKSAmJiBzZWxlY3RNb2RlID8gYHNlbGVjdGVkYCA6IGBgKSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgKCRxLmRhcmsuaXNBY3RpdmUgPyBgYmctZGFya2AgOiBgYmctbGlnaHRgKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgOnRvPVwiXG4gICAgICAgICAgICBzZWxlY3RNb2RlXG4gICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIDogYC9tYW5nYS9gICsgaXRlbS5tYW5nYUlkICsgYC9jaGFwdGVyL2AgKyBpdGVtLmluZGV4XG4gICAgICAgICAgXCJcbiAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RNb2RlID8gc2VsZWN0dGhpcyhpdGVtLmlkKSA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgOmtleT1cIml0ZW0uaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJpdGVtLmJvb2ttYXJrZWRcIiBzaWRlPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICA+PHEtaWNvbiBjb2xvcj1cInByaW1hcnlcIiBuYW1lPVwiYm9va21hcmtcIiBzaXplPVwic21cIj48L3EtaWNvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57e1xuICAgICAgICAgICAgICBmaWx0ZXJzLkRpc3BsYXkgPT0gJ3NvdXJjZSdcbiAgICAgICAgICAgICAgICA/IGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIDogJ0NoYXB0ZXIgJyArIGl0ZW0uY2hhcHRlck51bWJlclxuICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAge3sgaXRlbS5zY2FubGF0b3IgfX1cbiAgICAgICAgICAgICAge3sgbmV3IERhdGUoaXRlbS51cGxvYWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICB7eyBpdGVtLmRvd25sb2FkZWQgPyAn4oCiIGRvd25sb2FkZWQnIDogJycgfX1cbiAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICBkb3dubG9hZHMuZmluZCgoZWxlKSA9PiBlbGUuY2hhcHRlckluZGV4ID09IGl0ZW0uaW5kZXgpPy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgPyBg4oCiIGAgK1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZHMuZmluZCgoZWxlKSA9PiBlbGUuY2hhcHRlckluZGV4ID09IGl0ZW0uaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgPy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8cS1saW5lYXItcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICBkb3dubG9hZHMuZmluZCgoZWxlKSA9PiBlbGUuY2hhcHRlckluZGV4ID09IGl0ZW0uaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgID8uc3RhdGUgPT0gYERvd25sb2FkaW5nYFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwiXG4gICAgICAgICAgICAgICAgICBkb3dubG9hZHMuZmluZCgoZWxlKSA9PiBlbGUuY2hhcHRlckluZGV4ID09IGl0ZW0uaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgID8ucHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXgtcmlnaHQgc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIDpjb2xvcj1cInNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0uaWQpID8gYGJsdWVgIDogYGBcIlxuICAgICAgICAgICAgOm5hbWU9XCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgICAgICAgICAgICA/IGBjaGVja19ib3hgXG4gICAgICAgICAgICAgICAgOiBgY2hlY2tfYm94X291dGxpbmVfYmxhbmtgXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgID48L3EtaWNvbj5cbiAgICAgICAgICA8cS1idG4gQGNsaWNrLnByZXZlbnQgcm91bmQgZmxhdCBpY29uPVwibW9yZV92ZXJ0XCIgY2xhc3M9XCJmbGV4LXJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1tZW51PlxuICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwid2lkdGg6IGZpdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgdi1pZj1cIiFpdGVtLmRvd25sb2FkZWRcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb3dubG9hZChpdGVtLmluZGV4KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkRvd25sb2FkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbS5kb3dubG9hZGVkXCJcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZShpdGVtLmluZGV4KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkRlbGV0ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgbXBhdGNoKGl0ZW0uaW5kZXgsIHsgYm9va21hcmtlZDogYCR7IWl0ZW0uYm9va21hcmtlZH1gIH0pXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57e1xuICAgICAgICAgICAgICAgICAgICAhaXRlbS5ib29rbWFya2VkID8gYEJvb2ttYXJrYCA6IGBSZW1vdmUgYm9va21hcmtgXG4gICAgICAgICAgICAgICAgICB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgIG1wYXRjaChpdGVtLmluZGV4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVhZDogYCR7IWl0ZW0ucmVhZH1gLFxuICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYWdlUmVhZDogJzEnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICFpdGVtLnJlYWQgPyBgTWFyayBhcyBSZWFkYCA6IGBNYXJrIGFzIFVucmVhZGBcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJtcGF0Y2goaXRlbS5pbmRleCwgeyBtYXJrUHJldlJlYWQ6ICd0cnVlJyB9KVwiXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgPk1hcmsgcHJldmlvdXMgYXMgUmVhZDwvcS1pdGVtLXNlY3Rpb25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cImZhYlBvc1wiIHJlZj1cInN0aWNreVwiPlxuICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdFwiXG4gICAgICAgIDppcz1cImRyYWdnaW5nRmFiID8gJ3NwYW4nIDogJ3JvdXRlci1saW5rJ1wiXG4gICAgICAgIDp0bz1cInJlc1wiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZhYlxuICAgICAgICAgIGNsYXNzPVwiRmFiY29uc2lzdFwiXG4gICAgICAgICAgbGFiZWw9XCJSZXN1bWVcIlxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgaWNvbj1cImRyYWdfaW5kaWNhdG9yXCJcbiAgICAgICAgICB2LXRvdWNoLXBhbi5wcmV2ZW50Lm1vdXNlPVwibW92ZUZhYlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS10b29sdGlwPiBkcmFnZ2FibGUgPC9xLXRvb2x0aXA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvcS1wYWdlLXN0aWNreT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtcbiAgY2hhcHRlcixcbiAgZGxzb2NrLFxuICBkb3dubG9hZCxcbiAgaXNkbHNvY2tcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgZmlsdGVyciBmcm9tICcuL0ZpbHRlci52dWUnO1xuaW1wb3J0IHsgY2hhcHRlcnNGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcnMnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB1c2VEbFNvY2sgZnJvbSAnLi4vZG93bmxvYWRzL3VzZURsU29jayc7XG5pbXBvcnQgeyBRUGFnZVN0aWNreSB9IGZyb20gJ3F1YXNhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYUNoYXB0ZXJzJyxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGJ1cy5vbigndXBkYXRlTWFuZ2EnLCAoKSA9PiB7XG4gICAgICB0aGlzLmdldG9ubGluZSgndHJ1ZScpO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gIH0sXG4gIGNvbXBvbmVudHM6IHsgZmlsdGVyciB9LFxuICBjb21wdXRlZDoge1xuICAgIGRvRmlsdCgpOiBjaGFwdGVyW10ge1xuICAgICAgbGV0IGNoYXB0czogY2hhcHRlcltdID0gdGhpcy5jaGFwdGVycztcbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuVW5yZWFkICE9IG51bGwpIHtcbiAgICAgICAgY2hhcHRzID0gY2hhcHRzLmZpbHRlcigoZWxlKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5VbnJlYWQgPyAhZWxlLnJlYWQgOiBlbGUucmVhZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5Eb3dubG9hZGVkICE9IG51bGwpIHtcbiAgICAgICAgY2hhcHRzID0gY2hhcHRzLmZpbHRlcigoZWxlKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Eb3dubG9hZGVkID8gZWxlLmRvd25sb2FkZWQgOiAhZWxlLmRvd25sb2FkZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuQm9va21hcmtlZCAhPSBudWxsKSB7XG4gICAgICAgIGNoYXB0cyA9IGNoYXB0cy5maWx0ZXIoKGVsZSkgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMuQm9va21hcmtlZCA/IGVsZS5ib29rbWFya2VkIDogIWVsZS5ib29rbWFya2VkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhcHRzO1xuICAgIH0sXG4gICAgZG9TcnQoKTogY2hhcHRlcltdIHtcbiAgICAgIGxldCBjaGFwdHM6IGNoYXB0ZXJbXSA9IHRoaXMuZG9GaWx0O1xuICAgICAgaWYgKHRoaXMuZmlsdGVycy5Tb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMuU291cmNlXG4gICAgICAgICAgICA/IGEuaW5kZXggPiBiLmluZGV4XG4gICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICA6IC0xXG4gICAgICAgICAgICA6IGEuaW5kZXggPCBiLmluZGV4XG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogLTFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuRmV0Y2hEYXRlICE9IG51bGwpIHtcbiAgICAgICAgY2hhcHRzID0gY2hhcHRzLnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLkZldGNoRGF0ZVxuICAgICAgICAgICAgPyBhLmZldGNoZWRBdCA+IGIuZmV0Y2hlZEF0XG4gICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgOiAxXG4gICAgICAgICAgICA6IGEuZmV0Y2hlZEF0IDwgYi5mZXRjaGVkQXRcbiAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgIDogMVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYXB0cztcbiAgICB9LFxuICAgIHJlcygpOiBzdHJpbmcge1xuICAgICAgY29uc3Qgbm90UmVhZCA9IHRoaXMuZG9TcnQuZmlsdGVyKChlbGUpID0+ICFlbGUucmVhZCk7XG4gICAgICBpZiAoIW5vdFJlYWQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBgL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHsxfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3RyZWFkY2hhcCA9IDxjaGFwdGVyPm5vdFJlYWRbbm90UmVhZC5sZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuIGAvbWFuZ2EvJHtub3RyZWFkY2hhcC5tYW5nYUlkfS9jaGFwdGVyLyR7bm90cmVhZGNoYXAuaW5kZXh9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtb3ZlRmFiKGV2OiB7XG4gICAgICBpc0ZpcnN0OiBib29sZWFuO1xuICAgICAgaXNGaW5hbDogYm9vbGVhbjtcbiAgICAgIGRlbHRhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gICAgfSkge1xuICAgICAgLy8gd291bGQgbGlrZSB0byB1c2UgVG91Y2hQYW4gdHlwZSBidXQgaXQgZG9lc250IHNlZW0gdG8gYmUgY29ycmVjdChvciBub3QgdGhlIGNvcnJlY3QgdHlwZSBpZGspXG4gICAgICB0aGlzLmRyYWdnaW5nRmFiID0gZXYuaXNGaXJzdCAhPT0gdHJ1ZSAmJiBldi5pc0ZpbmFsICE9PSB0cnVlO1xuICAgICAgbGV0IHggPSB0aGlzLmZhYlBvc1swXSAtIGV2LmRlbHRhLng7XG4gICAgICBsZXQgeSA9IHRoaXMuZmFiUG9zWzFdIC0gZXYuZGVsdGEueTtcblxuICAgICAgY29uc3QgY29udGEgPSAoXG4gICAgICAgICh0aGlzLiRyZWZzWydjb250YSddIGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50XG4gICAgICApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc3RpY2sgPSAoXG4gICAgICAgIHRoaXMuJHJlZnNbJ3N0aWNreSddIGFzIFFQYWdlU3RpY2t5XG4gICAgICApLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgY29uc3QgbWF4eSA9IGNvbnRhLmhlaWdodDtcbiAgICAgIGNvbnN0IHN0aWNreSA9IHN0aWNrLmhlaWdodDtcbiAgICAgIGlmICh5ID4gbWF4eSAtIHN0aWNreSkgeSA9IG1heHkgLSBzdGlja3k7XG4gICAgICBpZiAoeSA8IDApIHkgPSAwO1xuXG4gICAgICBjb25zdCBtYXh4ID0gY29udGEud2lkdGg7XG4gICAgICBjb25zdCBzdGlja3ggPSBzdGljay53aWR0aDtcbiAgICAgIGlmICh4ID4gbWF4eCAtIHN0aWNreCkgeCA9IG1heHggLSBzdGlja3g7XG4gICAgICBpZiAoeCA8IDApIHggPSAwO1xuXG4gICAgICB0aGlzLmZhYlBvcyA9IFt4LCB5XTtcbiAgICB9LFxuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICBjb25zdCB0bXAgPSA8RWxlbWVudCB8IHVuZGVmaW5lZD50aGlzLiRyZWZzWydjaGFwSGVhZCddO1xuICAgICAgaWYgKHRtcCA9PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICAgICAgbGV0IGVsSGVpZ2h0ID0gdG1wLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgIGVsSGVpZ2h0ICs9IHBhcnNlSW50KFxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0bXApLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBlbEhlaWdodCB8fCAwO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0b25saW5lKFRGID0gJ2ZhbHNlJywgcmV0cnkgPSAyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmNoYXB0ZXJzID0gPGNoYXB0ZXJbXT4oXG4gICAgICAgICAgKFxuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXBpLmdldChcbiAgICAgICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlcnM/b25saW5lRmV0Y2g9JHtURn1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKS5kYXRhXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHJ5LS07XG4gICAgICAgIGlmIChyZXRyeSA+PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ2ZldGNoIGNoYXB0ZXJzIGZhaWxlZCBpbiBjaGFwdGVyTGlzdCBSZXRyeWluZywgcmV0cmllcyBsZWZ0OiAnICtcbiAgICAgICAgICAgICAgcmV0cnlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZ2V0b25saW5lKFRGLCByZXRyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignZmV0Y2ggY2hhcHRlcnMgZmFpbGVkIGluIGNoYXB0ZXJMaXN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGRvd25sb2FkKGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgIGAvYXBpL3YxL2Rvd25sb2FkLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtpbmRleH1gXG4gICAgICApO1xuICAgIH0sXG4gICAgYXN5bmMgZGVsZShpbmRleDogbnVtYmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLiRhcGkuZGVsZXRlKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgfSxcbiAgICBhc3luYyBtcGF0Y2goaW5kZXg6IG51bWJlciwgRkQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICAgIGF3YWl0IHRoaXMuJGFwaS5wYXRjaEZvcm0oXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtpbmRleH1gLFxuICAgICAgICBGRFxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgfSxcbiAgICBoYW5kbGVIb2xkKGlkOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0TW9kZSA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdHRoaXMoaWQpO1xuICAgIH0sXG4gICAgc2VsZWN0dGhpcyhpZDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuZmlsdGVyKChlKSA9PiBlICE9PSBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0YWxsKCkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kb1NydC5tYXAoKGVsZSkgPT4gZWxlLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRsKGxpc3Q6IG51bWJlcltdKSB7XG4gICAgICB0aGlzLiRhcGkucG9zdCgnL2FwaS92MS9kb3dubG9hZC9iYXRjaCcsIHsgY2hhcHRlcklkczogbGlzdCB9KTtcbiAgICB9LFxuICAgIHJlYWQobGlzdDogbnVtYmVyW10sIHRmID0gdHJ1ZSwgcmI6ICdpc1JlYWQnIHwgJ2lzQm9va21hcmtlZCcgPSAnaXNSZWFkJykge1xuICAgICAgdGhpcy4kYXBpXG4gICAgICAgIC5wb3N0KGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvYmF0Y2hgLCB7XG4gICAgICAgICAgY2hhcHRlcklkczogbGlzdCxcbiAgICAgICAgICBjaGFuZ2U6IHsgW3JiXTogdGYgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmdldG9ubGluZSgpKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJ0VtaXR0ZXIuZXZlbnRzRnJvbVNlcnZlcicodmFsKSB7XG4gICAgICBjb25zdCB0bXAgPSA8ZGxzb2NrPkpTT04ucGFyc2UodmFsKTtcbiAgICAgIGlmIChpc2Rsc29jayh0bXApKSB7XG4gICAgICAgIGNvbnN0IHRtcHAgPSB0bXAucXVldWUuZmlsdGVyKFxuICAgICAgICAgIChlbGUpID0+IGVsZS5tYW5nYUlkID09IHBhcnNlSW50KGAke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLmRvd25sb2Fkc251bSAhPSB0bXBwLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb3dubG9hZHNudW0gPSB0bXBwLmxlbmd0aDtcbiAgICAgICAgdGhpcy5kb3dubG9hZHMgPSB0bXBwO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuICAgIGNvbnN0IGZpbHRlcnMgPSByZWYoY2hhcHRlcnNGaWx0ZXIocGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydtYW5nYUlEJ119YCkpKTtcbiAgICBjb25zdCBjaGFwdGVycyA9IHJlZig8Y2hhcHRlcltdPltdKTtcbiAgICBjb25zdCBjaGFwdGVyc2ZpbHQgPSByZWYoPGNoYXB0ZXJbXT5bXSk7XG4gICAgY29uc3QgRW1pdHQgPSB1c2VEbFNvY2soKTtcbiAgICBjb25zdCBFbWl0dGVyID0gcmVmKEVtaXR0KTtcblxuICAgIGNvbnN0IGRvd25sb2FkcyA9IHJlZig8ZG93bmxvYWRbXT5bXSk7XG4gICAgY29uc3QgZG93bmxvYWRzbnVtID0gcmVmKDApO1xuICAgIGNvbnN0IHRtcCA9IEVtaXR0LmV2ZW50c0Zyb21TZXJ2ZXIudmFsdWVcbiAgICAgID8gSlNPTi5wYXJzZShFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlKVxuICAgICAgOiBbXTtcbiAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgY29uc3QgdG1wcCA9IHRtcC5xdWV1ZS5maWx0ZXIoXG4gICAgICAgIChlbGUpID0+IGVsZS5tYW5nYUlkID09IHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApXG4gICAgICApO1xuICAgICAgZG93bmxvYWRzbnVtLnZhbHVlID0gdG1wcC5sZW5ndGg7XG4gICAgICBkb3dubG9hZHMudmFsdWUgPSB0bXBwO1xuICAgIH1cbiAgICBpZiAoRW1pdHRlci52YWx1ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgRW1pdHQuc2VuZE1zZygnU1RBVFVTJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZmFiUG9zID0gcmVmKDxbbnVtYmVyLCBudW1iZXJdPlsxOCwgMThdKTtcbiAgICBjb25zdCBkcmFnZ2luZ0ZhYiA9IHJlZjxib29sZWFuPihmYWxzZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhcHRlcnMsXG4gICAgICBjaGFwdGVyc2ZpbHQsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgRW1pdHRlcixcbiAgICAgIGRvd25sb2Fkc251bSxcbiAgICAgIGRvd25sb2FkcyxcbiAgICAgIHNlbGVjdE1vZGU6IHJlZihmYWxzZSksXG4gICAgICBzZWxlY3RlZDogcmVmKDxudW1iZXJbXT5bXSksXG4gICAgICBmYWJQb3MsXG4gICAgICBkcmFnZ2luZ0ZhYlxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNhc3NcIj5cbi5zZWxlY3RlZFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnRcblxuLnNlbGVjdG1vZGUgLnEtaXRlbVxuICBvcGFjaXR5OiAwLjVcbjwvc3R5bGU+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPlxuLkZhYmNvbnNpc3QgLnEtYnRuX19jb250ZW50XG4gIGZsZXgtd3JhcDogbm93cmFwXG48L3N0eWxlPlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2VcbiAgICBjbGFzcz1cIm5vd3JhcFwiXG4gICAgOmNsYXNzPVwiJHEuc2NyZWVuLnNtIHx8ICRxLnNjcmVlbi54cyA/IGBjb2xgIDogYHJvd2BcIlxuICAgIDpzdHlsZS1mbj1cIm15VHdlYWtcIlxuICA+XG4gICAgPG1hbmdhSW5mb1xuICAgICAgQGlubGliPVwiZ2V0b25saW5lXCJcbiAgICAgIDptYW5nYT1cIm1hbmdhXCJcbiAgICAgIDpvZmZzZXQ9XCJvZmZzZXRcIlxuICAgICAgY2xhc3M9XCJjb2wtNlwiXG4gICAgLz5cbiAgICA8bWFuZ2FDaGFwdGVycyBjbGFzcz1cImNvbC02XCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgbWFuZ2EgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBtYW5nYUluZm8gZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvbWFuZ2FJbmZvLnZ1ZSc7XG5pbXBvcnQgbWFuZ2FDaGFwdGVycyBmcm9tICdzcmMvY29tcG9uZW50cy9tYW5nYS9jaGFwdGVyTGlzdC52dWUnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ21hbmdhUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgbWFuZ2FJbmZvLCBtYW5nYUNoYXB0ZXJzIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRidXMub24oJ3VwZGF0ZU1hbmdhJywgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRvbmxpbmUoJ3RydWUnKTtcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLmdldG9ubGluZSgpO1xuICAgIHRoaXMuJGVtaXQoJ3NldFRpdGxlJywgdGhpcy5tYW5nYT8udGl0bGUgfHwgJ21hbmdhJyk7XG4gICAgaWYgKFxuICAgICAgbmV3IERhdGUodGhpcy5tYW5nYS5sYXN0RmV0Y2hlZEF0ICogMTAwMCkgPFxuICAgICAgbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gMSkpXG4gICAgKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgndXBkYXRlTWFuZ2EnKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRvbmxpbmUoVEYgPSAnZmFsc2UnLCByZXRyeSA9IDMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWFuZ2EgPSAoXG4gICAgICAgICAgKGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS8/b25saW5lRmV0Y2g9JHtURn1gXG4gICAgICAgICAgKSkgYXMgQXhpb3NSZXNwb25zZTxtYW5nYT5cbiAgICAgICAgKS5kYXRhO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHJldHJ5ID49IDEpIGF3YWl0IHRoaXMuZ2V0b25saW5lKFRGLCByZXRyeSAtIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBtYW5nYSA9IHJlZig8bWFuZ2E+e30pO1xuICAgIHJldHVybiB7IG1hbmdhLCBvZmZzZXQ6IHJlZig8bnVtYmVyPk51bWJlcigpKSB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF80IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9ob2lzdGVkXzIiLCJfbm9ybWFsaXplQ2xhc3MiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfMyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsInBvc2l0aW9uIiwiTG9jYWxTdG9yYWdlIiwiX3dpdGhDdHgiLCJfd2l0aERpcmVjdGl2ZXMiLCJfd2l0aE1vZGlmaWVycyIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLFdBQVk7QUFDZixRQUFBLEtBQUssV0FBVyxLQUFLLE9BQU87QUFDOUIsV0FBSyxPQUFPO0FBQUEsSUFBQSxPQUNQO0FBQ0wsWUFBTSxVQUFVLEtBQUs7QUFBQSxRQUNuQixNQUFNLENBQUMsS0FBSyxTQUFTLEtBQUssS0FBSztBQUFBLFFBQy9CLE1BQU07QUFDSixjQUFJLENBQUMsS0FBSyxXQUFXLEtBQUssT0FBTztBQUMvQixpQkFBSyxPQUFPO0FBQ0o7VUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUFBO0FBQUEsSUFFSjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU0sWUFBWTtBQUNYLFdBQUEsUUFBUSxDQUFD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
