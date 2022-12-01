import { Q as QPage } from "./QPage.2a653745.js";
import { g as getImgBlob, Q as QImg } from "./usefull.6349588e.js";
import { Q as QBtn } from "./QBtn.fa53f47e.js";
import { Q as QChip, a as QMenu } from "./QMenu.6fe60063.js";
import { storeGet, storeSet } from "./StoreStuff.9c9e2ee5.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, j as createBlock, n as createCommentVNode, u as createBaseVNode, q as normalizeClass, t as toDisplayString, p as createTextVNode, m as createVNode, F as Fragment, x as renderList, a6 as normalizeStyle, k as withCtx, c as computed, a7 as debounce, J as onDeactivated, I as onActivated, o as onBeforeUnmount, h, B as withDirectives, g as getCurrentInstance, Z as client, X as noop, a0 as leftClick, U as addEvt, W as position, V as cleanEvt, L as stopAndPrevent, P as Plugin, a5 as useRoute, s as resolveComponent, ai as withModifiers } from "./index.c15e704f.js";
import { Q as QIcon } from "./QIcon.25655771.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.66687690.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { Q as QList } from "./QList.550eb66e.js";
import { Q as QLinearProgress } from "./QLinearProgress.a87d027a.js";
import { Q as QIntersection } from "./QIntersection.196ae3c5.js";
import { u as useDarkProps, a as useDark } from "./use-dark.97ac6897.js";
import { Q as QResizeObserver } from "./QResizeObserver.beb445f9.js";
import { Q as QScrollObserver } from "./QScrollObserver.5c2596b5.js";
import { T as TouchPan } from "./TouchPan.b565f21b.js";
import { c as createComponent, a as hMergeSlot, f as createDirective } from "./QSpinner.dc7e097a.js";
import { b as between } from "./format.2a3572e1.js";
import { e as setHorizontalScrollPosition, s as setVerticalScrollPosition } from "./scroll.d31d6ae2.js";
import { Q as QTooltip } from "./QTooltip.180c1c60.js";
import { Q as QPageSticky } from "./QPageSticky.542a0227.js";
import { C as ClosePopup } from "./ClosePopup.6e286577.js";
import { c as clearSelection } from "./selection.a711d5f1.js";
import { R as Ripple } from "./Ripple.a0364732.js";
import { p as isdlsock } from "./models.4021c4b7.js";
import { Q as QTab } from "./QTab.3877ec1d.js";
import { Q as QTabs } from "./QTabs.2309048c.js";
import { Q as QCardSection } from "./QCardSection.92a082ef.js";
import { Q as QCheckbox } from "./QCheckbox.74ac24d4.js";
import { Q as QRadio } from "./QRadio.d57d2126.js";
import { Q as QCard } from "./QCard.a457d3f1.js";
import { Q as QDialog } from "./QDialog.1c3b5a04.js";
import { u as useDlSock } from "./useDlSock.de000660.js";
import "./fetcher.10190d88.js";
import "./position-engine.f1dc51f3.js";
import "./use-timeout.a78770d1.js";
import "./use-transition.db025f57.js";
import "./dom.617e2098.js";
import "./focus-manager.32f8d49a.js";
import "./Intersection.d463dc89.js";
import "./uid.42677368.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.85632a95.js";
import "./option-sizes.d2e717dc.js";
import "./use-form.2fa626ca.js";
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
        await this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/library/`
        );
      } else {
        await this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/library/`,
          {
            method: "DELETE"
          }
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
        this.chapters = await this.$fetchJSON(
          `/api/v1/manga/${this.$route.params["mangaID"]}/chapters?onlineFetch=${TF}`
        );
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
      await this.$fetch(
        `/api/v1/download/${this.$route.params["mangaID"]}/chapter/${index}`
      );
    },
    async dele(index) {
      await this.$fetch(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${index}`,
        { method: "DELETE" }
      );
      this.getonline();
    },
    async mpatch(index, FD) {
      const fd = new FormData();
      FD.forEach((dat) => {
        fd.append(...dat);
      });
      await this.$fetch(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${index}`,
        { method: "PATCH", body: fd }
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
      const fd = { chapterIds: list };
      this.$fetch("/api/v1/download/batch", {
        method: "POST",
        body: JSON.stringify(fd)
      });
    },
    read(list, tf = true, rb = "isRead") {
      const fd = { chapterIds: list, change: { [rb]: tf } };
      this.$fetch(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/batch`,
        {
          method: "POST",
          body: JSON.stringify(fd)
        }
      ).then(() => this.getonline());
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
                                onClick: ($event) => _ctx.mpatch(item.index, [["bookmarked", `${!item.bookmarked}`]])
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
                                onClick: ($event) => _ctx.mpatch(item.index, [
                                  ["read", `${!item.read}`],
                                  ["lastPageRead", "1"]
                                ]),
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
                                onClick: ($event) => _ctx.mpatch(item.index, [["markPrevRead", "true"]]),
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
var mangaChapters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5c4be102"], ["__file", "chapterList.vue"]]);
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
        this.manga = await this.$fetchJSON(
          `/api/v1/manga/${this.$route.params["mangaID"]}/?onlineFetch=${TF}`
        );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FQYWdlLjk0NTMxMzRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9tYW5nYUluZm8udnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hIb2xkLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuZ2EvZmlsdGVycy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL0ZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9jaGFwdGVyTGlzdC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvbWFuZ2FQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicS1weC1tZCBxLXB5LW1kIGNvbCBNYW5nYUluZm9cIlxuICAgIHN0eWxlPVwib3ZlcmZsb3cteTogYXV0b1wiXG4gICAgOnN0eWxlPVwiXG4gICAgICAkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzXG4gICAgICAgID8gYGBcbiAgICAgICAgOiBgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIGAgKyBvZmZzZXQgKyBgcHgpYFxuICAgIFwiXG4gID5cbiAgICA8cS1pbWdcbiAgICAgIHYtaWY9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiAxMDAlXCJcbiAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIHEtbXgtbWRcIlxuICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICBmaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IG5vLXdyYXBcIj5cbiAgICAgIDxxLWltZ1xuICAgICAgICB2LWlmPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZClcIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiA1MCU7IGZsZXg6IG5vbmVcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgZml0PVwic2NhbGUtZG93blwiXG4gICAgICAvPlxuICAgICAgPGRpdiB2LWlmPVwibWFuZ2FcIiBjbGFzcz1cInEtbXgtbWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiPlxuICAgICAgICA8aDNcbiAgICAgICAgICBzdHlsZT1cIm92ZXJmbG93LXdyYXA6IGFueXdoZXJlXCJcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZCA/IGBxLW15LXNtYCA6IGBgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIiB2LWlmPVwibWFuZ2EuYXV0aG9yXCI+XG4gICAgICAgICAgQXV0aG9yOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2EuYXV0aG9yIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgcS1teS14c1wiIHYtaWY9XCJtYW5nYS5hcnRpc3RcIj5cbiAgICAgICAgICBBcnRpc3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IG1hbmdhLmFydGlzdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIiB2LWlmPVwibWFuZ2Euc3RhdHVzXCI+XG4gICAgICAgICAgU3RhdHVzOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2Euc3RhdHVzIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgcS1teS14c1wiIHYtaWY9XCJtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lXCI+XG4gICAgICAgICAgU291cmNlOlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJxLW15LW1kXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmNvbG9yPVwibWFuZ2E/LmluTGlicmFyeSA/IGBwcmltYXJ5YCA6IGBncmV5LTlgXCJcbiAgICAgICAgaWNvbj1cImZhdm9yaXRlXCJcbiAgICAgICAgOmxhYmVsPVwibWFuZ2E/LmluTGlicmFyeSA/IGBJbiBMaWJyYXJ5YCA6IGBBZGQgVG8gTGlicmFyeWBcIlxuICAgICAgICBAY2xpY2s9XCJJbkxpYnJhcnlcIlxuICAgICAgLz5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGNvbG9yPVwiZ3JleS05XCJcbiAgICAgICAgaWNvbj1cInB1YmxpY1wiXG4gICAgICAgIGxhYmVsPVwiT3BlbiBTaXRlXCJcbiAgICAgICAgOmhyZWY9XCJtYW5nYT8ucmVhbFVybFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cIm1hbmdhPy5kZXNjcmlwdGlvblwiPlxuICAgICAgPGg2IGNsYXNzPVwicS1teS1zbVwiPkFib3V0OjwvaDY+XG4gICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMS4zZW1cIj57eyBtYW5nYS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJtYW5nYT8uZ2VucmVcIj5cbiAgICAgIDxxLWNoaXAgdi1mb3I9XCJ0YWcgaW4gbWFuZ2EuZ2VucmVcIiA6a2V5PVwidGFnXCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj57e1xuICAgICAgICB0YWdcbiAgICAgIH19PC9xLWNoaXA+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYUluZm8nLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+XG4gICAgfSxcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gMFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmltZ2RhdGEgJiYgdGhpcy5tYW5nYSkge1xuICAgICAgdGhpcy5nZXRJbWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdW53YXRjaCA9IHRoaXMuJHdhdGNoKFxuICAgICAgICAoKSA9PiBbdGhpcy5pbWdkYXRhLCB0aGlzLm1hbmdhXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pbWdkYXRhICYmIHRoaXMubWFuZ2EpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1nKCk7XG4gICAgICAgICAgICB1bndhdGNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIEluTGlicmFyeSgpIHtcbiAgICAgIHRoaXMuaW5MaWIgPSAhdGhpcy5pbkxpYjtcbiAgICAgIGlmICh0aGlzLmluTGliKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGZldGNoKFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2xpYnJhcnkvYFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goXG4gICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vbGlicmFyeS9gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdpbmxpYicpO1xuICAgIH0sXG4gICAgZ2V0SW1nKCkge1xuICAgICAgZ2V0SW1nQmxvYih0aGlzLm1hbmdhPy50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSBzdG9yZUdldCgndXNlQ2FjaGUnLCB0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlQ2FjaGUsXG4gICAgICBpbkxpYjogcmVmKHByb3BzLm1hbmdhPy5pbkxpYnJhcnkgfHwgZmFsc2UpLFxuICAgICAgaW1nZGF0YTogcmVmKClcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cbi5NYW5nYUluZm8gLnEtaW1nX19jb250YWluZXJcbiAgcG9zaXRpb246IHVuc2V0XG5cbi5NYW5nYUluZm8gLnEtaW1nLnEtaW1nLS1tZW51IDpmaXJzdC1jaGlsZFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnRcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3aXRoRGlyZWN0aXZlcywgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UuanMnXG5cbmNvbnN0IGF4aXNMaXN0ID0gWyAndmVydGljYWwnLCAnaG9yaXpvbnRhbCcgXVxuY29uc3QgZGlyUHJvcHMgPSB7XG4gIHZlcnRpY2FsOiB7IG9mZnNldDogJ29mZnNldFknLCBzY3JvbGw6ICdzY3JvbGxUb3AnLCBkaXI6ICdkb3duJywgZGlzdDogJ3knIH0sXG4gIGhvcml6b250YWw6IHsgb2Zmc2V0OiAnb2Zmc2V0WCcsIHNjcm9sbDogJ3Njcm9sbExlZnQnLCBkaXI6ICdyaWdodCcsIGRpc3Q6ICd4JyB9XG59XG5jb25zdCBwYW5PcHRzID0ge1xuICBwcmV2ZW50OiB0cnVlLFxuICBtb3VzZTogdHJ1ZSxcbiAgbW91c2VBbGxEaXI6IHRydWVcbn1cblxuY29uc3QgZ2V0TWluVGh1bWJTaXplID0gc2l6ZSA9PiAoc2l6ZSA+PSAyNTAgPyA1MCA6IE1hdGguY2VpbChzaXplIC8gNSkpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2Nyb2xsQXJlYScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICB0aHVtYlN0eWxlOiBPYmplY3QsXG4gICAgdmVydGljYWxUaHVtYlN0eWxlOiBPYmplY3QsXG4gICAgaG9yaXpvbnRhbFRodW1iU3R5bGU6IE9iamVjdCxcblxuICAgIGJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIHZlcnRpY2FsQmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaG9yaXpvbnRhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgY29udGVudFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGNvbnRlbnRBY3RpdmVTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAxMDAwXG4gICAgfSxcblxuICAgIHZpc2libGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb25cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIC8vIHN0YXRlIG1hbmFnZW1lbnRcbiAgICBjb25zdCB0ZW1wU2hvd2luZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBwYW5uaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGhvdmVyID0gcmVmKGZhbHNlKVxuXG4gICAgLy8gb3RoZXIuLi5cbiAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICB2ZXJ0aWNhbDogcmVmKDApLFxuICAgICAgaG9yaXpvbnRhbDogcmVmKDApXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsID0ge1xuICAgICAgdmVydGljYWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfSxcblxuICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICByZWY6IHJlZihudWxsKSxcbiAgICAgICAgcG9zaXRpb246IHJlZigwKSxcbiAgICAgICAgc2l6ZTogcmVmKDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHByb3h5LiRxKVxuXG4gICAgbGV0IHRpbWVyLCBwYW5SZWZQb3NcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWEtLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBkaWZmID0gc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgLSBjb250YWluZXIudmVydGljYWwudmFsdWVcbiAgICAgIGlmIChkaWZmIDw9IDApIHsgcmV0dXJuIDAgfVxuICAgICAgY29uc3QgcCA9IGJldHdlZW4oc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlIC8gZGlmZiwgMCwgMSlcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHAgKiAxMDAwMCkgLyAxMDAwMFxuICAgIH0pXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA8PSBjb250YWluZXIudmVydGljYWwudmFsdWUgKyAxXG4gICAgKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYlN0YXJ0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlICogKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAtIHNjcm9sbC52ZXJ0aWNhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYlNpemUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgYmV0d2VlbihcbiAgICAgICAgICBjb250YWluZXIudmVydGljYWwudmFsdWUgKiBjb250YWluZXIudmVydGljYWwudmFsdWUgLyBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSxcbiAgICAgICAgICBnZXRNaW5UaHVtYlNpemUoY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlKSxcbiAgICAgICAgICBjb250YWluZXIudmVydGljYWwudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwuc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgICAuLi5wcm9wcy52ZXJ0aWNhbFRodW1iU3R5bGUsXG4gICAgICAgIHRvcDogYCR7IHNjcm9sbC52ZXJ0aWNhbC50aHVtYlN0YXJ0LnZhbHVlIH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7IHNjcm9sbC52ZXJ0aWNhbC50aHVtYlNpemUudmFsdWUgfXB4YFxuICAgICAgfVxuICAgIH0pXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwuYmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS12IGFic29sdXRlLXJpZ2h0J1xuICAgICAgKyAoc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcblxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBkaWZmID0gc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlIC8gZGlmZiwgMCwgMSlcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHAgKiAxMDAwMCkgLyAxMDAwMFxuICAgIH0pXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKFxuICAgICAgICAocHJvcHMudmlzaWJsZSA9PT0gbnVsbCA/IGhvdmVyLnZhbHVlIDogcHJvcHMudmlzaWJsZSkgIT09IHRydWVcbiAgICAgICAgJiYgdGVtcFNob3dpbmcudmFsdWUgPT09IGZhbHNlXG4gICAgICAgICYmIHBhbm5pbmcudmFsdWUgPT09IGZhbHNlXG4gICAgICApIHx8IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgKyAxXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU3RhcnQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgc2Nyb2xsLmhvcml6b250YWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAtIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZS52YWx1ZSlcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgKiBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAvIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlKSxcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgLi4ucHJvcHMuaG9yaXpvbnRhbFRodW1iU3R5bGUsXG4gICAgICAgIGxlZnQ6IGAkeyBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlN0YXJ0LnZhbHVlIH1weGAsXG4gICAgICAgIHdpZHRoOiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhX19iYXIgcS1zY3JvbGxhcmVhX19iYXItLWggYWJzb2x1dGUtYm90dG9tJ1xuICAgICAgKyAoc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fYmFyLS1pbnZpc2libGUnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbWFpblN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgIDogcHJvcHMuY29udGVudEFjdGl2ZVN0eWxlXG4gICAgKSlcblxuICAgIGNvbnN0IHRodW1iVmVydERpciA9IFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAndmVydGljYWwnKSB9LFxuICAgICAgdm9pZCAwLFxuICAgICAgeyB2ZXJ0aWNhbDogdHJ1ZSwgLi4ucGFuT3B0cyB9XG4gICAgXSBdXG5cbiAgICBjb25zdCB0aHVtYkhvcml6RGlyID0gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIGUgPT4geyBvblBhblRodW1iKGUsICdob3Jpem9udGFsJykgfSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHsgaG9yaXpvbnRhbDogdHJ1ZSwgLi4ucGFuT3B0cyB9XG4gICAgXSBdXG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwgKCkge1xuICAgICAgY29uc3QgaW5mbyA9IHt9XG5cbiAgICAgIGF4aXNMaXN0LmZvckVhY2goYXhpcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICAgIGluZm9bIGF4aXMgKyAnUG9zaXRpb24nIF0gPSBkYXRhLnBvc2l0aW9uLnZhbHVlXG4gICAgICAgIGluZm9bIGF4aXMgKyAnUGVyY2VudGFnZScgXSA9IGRhdGEucGVyY2VudGFnZS52YWx1ZVxuICAgICAgICBpbmZvWyBheGlzICsgJ1NpemUnIF0gPSBkYXRhLnNpemUudmFsdWVcbiAgICAgICAgaW5mb1sgYXhpcyArICdDb250YWluZXJTaXplJyBdID0gY29udGFpbmVyWyBheGlzIF0udmFsdWVcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBpbmZvXG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBsb3RzIG9mIGxpc3RlbmVycywgc29cbiAgICAvLyBlbnN1cmUgd2UncmUgbm90IGVtaXR0aW5nIHNhbWUgaW5mb1xuICAgIC8vIG11bHRpcGxlIHRpbWVzXG4gICAgY29uc3QgZW1pdFNjcm9sbCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnN0IGluZm8gPSBnZXRTY3JvbGwoKVxuICAgICAgaW5mby5yZWYgPSBwcm94eVxuICAgICAgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICB9LCAwKVxuXG4gICAgZnVuY3Rpb24gbG9jYWxTZXRTY3JvbGxQb3NpdGlvbiAoYXhpcywgb2Zmc2V0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGF4aXNMaXN0LmluY2x1ZGVzKGF4aXMpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbUVNjcm9sbEFyZWFdOiB3cm9uZyBmaXJzdCBwYXJhbSBvZiBzZXRTY3JvbGxQb3NpdGlvbiAodmVydGljYWwvaG9yaXpvbnRhbCknKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSBheGlzID09PSAndmVydGljYWwnXG4gICAgICAgID8gc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvblxuICAgICAgICA6IHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvblxuXG4gICAgICBmbih0YXJnZXRSZWYudmFsdWUsIG9mZnNldCwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyICh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChjb250YWluZXIudmVydGljYWwudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBjb250YWluZXIudmVydGljYWwudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlID0gd2lkdGhcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgc3RhcnRUaW1lcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsICh7IHBvc2l0aW9uIH0pIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlICE9PSBwb3NpdGlvbi50b3ApIHtcbiAgICAgICAgc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24udG9wXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlICE9PSBwb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24ubGVmdFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxTaXplICh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgaWYgKHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgPSB3aWR0aFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYW5UaHVtYiAoZSwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChlLmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGRhdGEudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHBhblJlZlBvcyA9IGRhdGEucG9zaXRpb24udmFsdWVcbiAgICAgICAgcGFubmluZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbm5pbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlLmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgcGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRQcm9wID0gZGlyUHJvcHNbIGF4aXMgXVxuICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlXG5cbiAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAoZGF0YS5zaXplLnZhbHVlIC0gY29udGFpbmVyU2l6ZSkgLyAoY29udGFpbmVyU2l6ZSAtIGRhdGEudGh1bWJTaXplLnZhbHVlKVxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBlLmRpc3RhbmNlWyBkUHJvcC5kaXN0IF1cbiAgICAgIGNvbnN0IHBvcyA9IHBhblJlZlBvcyArIChlLmRpcmVjdGlvbiA9PT0gZFByb3AuZGlyID8gMSA6IC0xKSAqIGRpc3RhbmNlICogbXVsdGlwbGllclxuXG4gICAgICBzZXRTY3JvbGwocG9zLCBheGlzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2Vkb3duIChldnQsIGF4aXMpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBldnRbIGRpclByb3BzWyBheGlzIF0ub2Zmc2V0IF1cbiAgICAgICAgaWYgKG9mZnNldCA8IGRhdGEudGh1bWJTdGFydC52YWx1ZSB8fCBvZmZzZXQgPiBkYXRhLnRodW1iU3RhcnQudmFsdWUgKyBkYXRhLnRodW1iU2l6ZS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHBvcyA9IG9mZnNldCAtIGRhdGEudGh1bWJTaXplLnZhbHVlIC8gMlxuICAgICAgICAgIHNldFNjcm9sbChwb3MgLyBjb250YWluZXJbIGF4aXMgXS52YWx1ZSAqIGRhdGEuc2l6ZS52YWx1ZSwgYXhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGl2YXRlIHRodW1iIHBhblxuICAgICAgICBpZiAoZGF0YS5yZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBkYXRhLnJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KGV2dC50eXBlLCBldnQpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25WZXJ0aWNhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICBvbk1vdXNlZG93bihldnQsICd2ZXJ0aWNhbCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ib3Jpem9udGFsTW91c2Vkb3duIChldnQpIHtcbiAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ2hvcml6b250YWwnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIgKCkge1xuICAgICAgaWYgKHRlbXBTaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0ZW1wU2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGVtcFNob3dpbmcudmFsdWUgPSBmYWxzZSB9LCBwcm9wcy5kZWxheSlcbiAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdFNjcm9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsIChvZmZzZXQsIGF4aXMpIHtcbiAgICAgIHRhcmdldFJlZi52YWx1ZVsgZGlyUHJvcHNbIGF4aXMgXS5zY3JvbGwgXSA9IG9mZnNldFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VlbnRlciAoKSB7XG4gICAgICBob3Zlci52YWx1ZSA9IHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlbGVhdmUgKCkge1xuICAgICAgaG92ZXIudmFsdWUgPSBmYWxzZVxuICAgIH1cblxuICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IG51bGxcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2Nyb2xsUG9zaXRpb24gPSB7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gdGFyZ2V0UmVmLnZhbHVlXG5cbiAgICAgIGlmIChzY3JvbGxUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zaXRpb24ubGVmdClcbiAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLnRvcClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGVtaXRTY3JvbGwuY2FuY2VsKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgZ2V0U2Nyb2xsVGFyZ2V0OiAoKSA9PiB0YXJnZXRSZWYudmFsdWUsXG4gICAgICBnZXRTY3JvbGwsXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4gKHtcbiAgICAgICAgdG9wOiBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIGdldFNjcm9sbFBlcmNlbnRhZ2U6ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgIH0pLFxuICAgICAgc2V0U2Nyb2xsUG9zaXRpb246IGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24sXG4gICAgICBzZXRTY3JvbGxQZXJjZW50YWdlIChheGlzLCBwZXJjZW50YWdlLCBkdXJhdGlvbikge1xuICAgICAgICBsb2NhbFNldFNjcm9sbFBvc2l0aW9uKFxuICAgICAgICAgIGF4aXMsXG4gICAgICAgICAgcGVyY2VudGFnZSAqIChzY3JvbGxbIGF4aXMgXS5zaXplLnZhbHVlIC0gY29udGFpbmVyWyBheGlzIF0udmFsdWUpLFxuICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBvbk1vdXNlZW50ZXIsXG4gICAgICAgIG9uTW91c2VsZWF2ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiB0YXJnZXRSZWYsXG4gICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRhaW5lciBzY3JvbGwgcmVsYXRpdmUtcG9zaXRpb24gZml0IGhpZGUtc2Nyb2xsYmFyJyxcbiAgICAgICAgICB0YWJpbmRleDogcHJvcHMudGFiaW5kZXggIT09IHZvaWQgMCA/IHByb3BzLnRhYmluZGV4IDogdm9pZCAwXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3Etc2Nyb2xsYXJlYV9fY29udGVudCBhYnNvbHV0ZScsXG4gICAgICAgICAgICBzdHlsZTogbWFpblN0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICAgICAgb25SZXNpemU6IHVwZGF0ZVNjcm9sbFNpemVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSkpLFxuXG4gICAgICAgICAgaChRU2Nyb2xsT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgIGF4aXM6ICdib3RoJyxcbiAgICAgICAgICAgIG9uU2Nyb2xsOiB1cGRhdGVTY3JvbGxcbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVDb250YWluZXJcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBzY3JvbGwudmVydGljYWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLnZlcnRpY2FsQmFyU3R5bGUgXSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgb25Nb3VzZWRvd246IG9uVmVydGljYWxNb3VzZWRvd25cbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogWyBwcm9wcy5iYXJTdHlsZSwgcHJvcHMuaG9yaXpvbnRhbEJhclN0eWxlIF0sXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgIG9uTW91c2Vkb3duOiBvbkhvcml6b250YWxNb3VzZWRvd25cbiAgICAgICAgfSksXG5cbiAgICAgICAgd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgcmVmOiBzY3JvbGwudmVydGljYWwucmVmLFxuICAgICAgICAgICAgY2xhc3M6IHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHNjcm9sbC52ZXJ0aWNhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRodW1iVmVydERpclxuICAgICAgICApLFxuXG4gICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogc2Nyb2xsLmhvcml6b250YWwucmVmLFxuICAgICAgICAgICAgY2xhc3M6IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogc2Nyb2xsLmhvcml6b250YWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aHVtYkhvcml6RGlyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBzdG9wQW5kUHJldmVudCwgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1ob2xkJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICd0b3VjaC1ob2xkJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIGNvbnN0IHsgbW9kaWZpZXJzIH0gPSBiaW5kaW5nXG5cbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgIT09IHRydWUgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGhhbmRsZXI6IGJpbmRpbmcudmFsdWUsXG4gICAgICAgICAgbm9vcCxcblxuICAgICAgICAgIG1vdXNlU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyAmJiBsZWZ0Q2xpY2soZXZ0KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgJ21vdmUnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ2NsaWNrJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB0b3VjaFN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChldnQudGFyZ2V0ICE9PSB2b2lkIDAgJiYgdHlwZW9mIGN0eC5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW92ZScsICdwYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjdHgub3JpZ2luID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAgICAgICAgIGlmIChjbGllbnQuaXMubW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheSA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHZvaWQgMFxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmUsIDEwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmVtb3ZlKCkgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC50cmlnZ2VyZWQgPSBmYWxzZVxuICAgICAgICAgICAgY3R4LnNlbnNpdGl2aXR5ID0gbW91c2VFdmVudCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IGN0eC5tb3VzZVNlbnNpdGl2aXR5XG4gICAgICAgICAgICAgIDogY3R4LnRvdWNoU2Vuc2l0aXZpdHlcblxuICAgICAgICAgICAgY3R4LnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgY3R4LnRyaWdnZXJlZCA9IHRydWVcblxuICAgICAgICAgICAgICBjdHguaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZXZ0LFxuICAgICAgICAgICAgICAgIHRvdWNoOiBtb3VzZUV2ZW50ICE9PSB0cnVlLFxuICAgICAgICAgICAgICAgIG1vdXNlOiBtb3VzZUV2ZW50ID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjdHgub3JpZ2luLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBjdHguZHVyYXRpb24pXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1vdmUgKGV2dCkge1xuICAgICAgICAgICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IHBvc2l0aW9uKGV2dClcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgTWF0aC5hYnMobGVmdCAtIGN0eC5vcmlnaW4ubGVmdCkgPj0gY3R4LnNlbnNpdGl2aXR5XG4gICAgICAgICAgICAgIHx8IE1hdGguYWJzKHRvcCAtIGN0eC5vcmlnaW4udG9wKSA+PSBjdHguc2Vuc2l0aXZpdHlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCkge1xuICAgICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICAgIC8vIGRlbGF5IG5lZWRlZCBvdGhlcndpc2Ugc2VsZWN0aW9uIHN0aWxsIG9jY3Vyc1xuICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoY3R4LnRyaWdnZXJlZClcblxuICAgICAgICAgICAgaWYgKGN0eC50cmlnZ2VyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChjdHgudGltZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHVyYXRpb24gaW4gbXMsIHRvdWNoIGluIHBpeGVscywgbW91c2UgaW4gcGl4ZWxzXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbIDYwMCwgNSwgNyBdXG5cbiAgICAgICAgaWYgKHR5cGVvZiBiaW5kaW5nLmFyZyA9PT0gJ3N0cmluZycgJiYgYmluZGluZy5hcmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGJpbmRpbmcuYXJnLnNwbGl0KCc6JykuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlSW50KHZhbCwgMTApXG4gICAgICAgICAgICB2ICYmIChkYXRhWyBpbmRleCBdID0gdilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgWyBjdHguZHVyYXRpb24sIGN0eC50b3VjaFNlbnNpdGl2aXR5LCBjdHgubW91c2VTZW5zaXRpdml0eSBdID0gZGF0YVxuXG4gICAgICAgIGVsLl9fcXRvdWNoaG9sZCA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaGVuZCcsICdub29wJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaGhvbGRcblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDAgJiYgYmluZGluZy5vbGRWYWx1ZSAhPT0gYmluZGluZy52YWx1ZSkge1xuICAgICAgICAgIHR5cGVvZiBiaW5kaW5nLnZhbHVlICE9PSAnZnVuY3Rpb24nICYmIGN0eC5lbmQoKVxuICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZy52YWx1ZVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaGhvbGRcblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcblxuICAgICAgICAgIGNsZWFyVGltZW91dChjdHgudGltZXIpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNoaG9sZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHN0b3JlU2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbnR5cGUgYm5uID0gYm9vbGVhbiB8IG51bGw7XG5cbnR5cGUgZGlzcCA9ICdzb3VyY2UnIHwgJ2NoYXB0ZXInO1xuXG5jb25zdCBVbnJlYWQgPSByZWYoPGJubj5udWxsKTtcbmNvbnN0IERvd25sb2FkZWQgPSByZWYoPGJubj5udWxsKTtcbmNvbnN0IEJvb2ttYXJrZWQgPSByZWYoPGJubj5udWxsKTtcbmNvbnN0IFNvdXJjZSA9IHJlZig8Ym5uPm51bGwpO1xuY29uc3QgRmV0Y2hEYXRlID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBEaXNwbGF5ID0gcmVmKDxkaXNwPidzb3VyY2UnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYXB0ZXJzRmlsdGVyKG1hbmdhSUQ6IG51bWJlcikge1xuICBVbnJlYWQudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hVbnJlYWRgKTtcbiAgRG93bmxvYWRlZC52YWx1ZSA9IDxibm4+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaERvd25sb2FkZWRgKTtcbiAgQm9va21hcmtlZC52YWx1ZSA9IDxibm4+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaEJvb2ttYXJrZWRgKTtcbiAgU291cmNlLnZhbHVlID0gPGJubj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoU291cmNlYCk7XG4gIEZldGNoRGF0ZS52YWx1ZSA9IDxibm4+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaEZldGNoRGF0ZWApO1xuICBEaXNwbGF5LnZhbHVlID0gPGRpc3A+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaERpc3BsYXlgKTtcblxuICBjb25zdCBzZXRVbnJlYWQgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSBMb2NhbFN0b3JhZ2UucmVtb3ZlKGAke21hbmdhSUR9Q2hVbnJlYWRgKTtcbiAgICBlbHNlIExvY2FsU3RvcmFnZS5zZXQoYCR7bWFuZ2FJRH1DaFVucmVhZGAsIHZhbHVlKTtcbiAgICBVbnJlYWQudmFsdWUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0RG93bmxvYWRlZCA9IGZ1bmN0aW9uICh2YWx1ZTogYm5uKSB7XG4gICAgc3RvcmVTZXQoYCR7bWFuZ2FJRH1DaERvd25sb2FkZWRgLCB2YWx1ZSk7XG4gICAgRG93bmxvYWRlZC52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRCb29rbWFya2VkID0gZnVuY3Rpb24gKHZhbHVlOiBibm4pIHtcbiAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoQm9va21hcmtlZGAsIHZhbHVlKTtcbiAgICBCb29rbWFya2VkLnZhbHVlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldFNvdXJjZSA9IGZ1bmN0aW9uICh2YWx1ZTogYm5uKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hTb3VyY2VgLCB2YWx1ZSk7XG4gICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlKGAke21hbmdhSUR9Q2hGZXRjaERhdGVgKTtcbiAgICB9XG4gICAgU291cmNlLnZhbHVlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldEZldGNoRGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZTogYm5uKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hGZXRjaERhdGVgLCB2YWx1ZSk7XG4gICAgICBMb2NhbFN0b3JhZ2UucmVtb3ZlKGAke21hbmdhSUR9Q2hTb3VyY2VgKTtcbiAgICB9XG4gICAgRmV0Y2hEYXRlLnZhbHVlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldERpc3BsYXkgPSBmdW5jdGlvbiAodmFsdWU6ICdzb3VyY2UnIHwgJ2NoYXB0ZXInKSB7XG4gICAgc3RvcmVTZXQoYCR7bWFuZ2FJRH1DaERpc3BsYXlgLCB2YWx1ZSwgJ3NvdXJjZScpO1xuICAgIERpc3BsYXkudmFsdWUgPSB2YWx1ZTtcbiAgfTtcblxuICAvLyBuZWVkcyBhIGRlZmF1bHQgaWYgbm8gc29ydCBpcyBzZXRcbiAgaWYgKFNvdXJjZS52YWx1ZSA9PSBudWxsICYmIEZldGNoRGF0ZS52YWx1ZSA9PSBudWxsKSBTb3VyY2UudmFsdWUgPSBmYWxzZTtcbiAgaWYgKERpc3BsYXkudmFsdWUgPT0gbnVsbCkgRGlzcGxheS52YWx1ZSA9ICdzb3VyY2UnO1xuXG4gIHJldHVybiB7XG4gICAgVW5yZWFkLFxuICAgIERvd25sb2FkZWQsXG4gICAgQm9va21hcmtlZCxcbiAgICBTb3VyY2UsXG4gICAgRmV0Y2hEYXRlLFxuICAgIERpc3BsYXksXG4gICAgc2V0VW5yZWFkLFxuICAgIHNldERvd25sb2FkZWQsXG4gICAgc2V0Qm9va21hcmtlZCxcbiAgICBzZXRTb3VyY2UsXG4gICAgc2V0RmV0Y2hEYXRlLFxuICAgIHNldERpc3BsYXlcbiAgfTtcbn1cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICByb3VuZFxuICAgIDp0ZXh0LWNvbG9yPVwiXG4gICAgICAkcS5kYXJrLmlzQWN0aXZlXG4gICAgICAgID8gYXJlZGVmYXVsdHMoKVxuICAgICAgICAgID8gYHdoaXRlYFxuICAgICAgICAgIDogYG9yYW5nZWBcbiAgICAgICAgOiBhcmVkZWZhdWx0cygpXG4gICAgICAgID8gYGRhcmtgXG4gICAgICAgIDogYG9yYW5nZWBcbiAgICBcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgLz5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb1wiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXBhLW5vbmVcIj5cbiAgICAgICAgPHEtdGFicyB2LW1vZGVsPVwidGFiXCIgY2xhc3M9XCJ0ZXh0LXRlYWxcIj5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIGNsYXNzPVwicS1weC14bFwiXG4gICAgICAgICAgICBuYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpbHRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cS10YWIgY2xhc3M9XCJxLXB4LXhsXCIgbmFtZT1cInNvcnRcIiBpY29uPVwic29ydFwiIGxhYmVsPVwiU29ydFwiIC8+XG4gICAgICAgICAgPHEtdGFiXG4gICAgICAgICAgICBjbGFzcz1cInEtcHgteGxcIlxuICAgICAgICAgICAgbmFtZT1cImRpc3BsYXlcIlxuICAgICAgICAgICAgaWNvbj1cImRpc3BsYXlfc2V0dGluZ3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJEaXNwbGF5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtdGFicz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnZmlsdGVyJ1wiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIHRvZ2dsZS1pbmRldGVybWluYXRlXG4gICAgICAgICAgICB2LW1vZGVsPVwidW5yZWFkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVW5yZWFkXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImNoZWNrX2JveFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cInJfZGlzYWJsZWRfYnlfZGVmYXVsdFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHkteHNcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1tb2RlbD1cImRvd25sb2FkZWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEb3dubG9hZGVkXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImNoZWNrX2JveFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cInJfZGlzYWJsZWRfYnlfZGVmYXVsdFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi1tZFwiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIHRvZ2dsZS1pbmRldGVybWluYXRlXG4gICAgICAgICAgICB2LW1vZGVsPVwiYm9va21hcmtlZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkJvb2ttYXJrZWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdzb3J0J1wiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHYtbW9kZWw9XCJTb3VyY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJCeSBTb3VyY2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cIkZldGNoRGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkJ5IEZldGNoIGRhdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdkaXNwbGF5J1wiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwic291cmNlXCIgbGFiZWw9XCJCeSBTb3VyY2UgVGl0bGVcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi1tZFwiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwiY2hhcHRlclwiIGxhYmVsPVwiQnkgQ2hhcHRlciBOdW1iZXJcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY2hhcHRlcnNGaWx0ZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9tYW5nYS9maWx0ZXJzJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdsaWJyYXJ5VG9wQmFyJyxcbiAgLy9zZXRGaWx0ZXIodmFsdWU6IGJubiwgbWFuZ2FJRDogbnVtYmVyLCB3aGF0Q2hhbmdlOiBrZXlrZXlzKSB7XG4gIHdhdGNoOiB7XG4gICAgdW5yZWFkKCkge1xuICAgICAgdGhpcy5maWx0LnNldFVucmVhZCh0aGlzLnVucmVhZCk7XG4gICAgfSxcbiAgICBkb3dubG9hZGVkKCkge1xuICAgICAgdGhpcy5maWx0LnNldERvd25sb2FkZWQodGhpcy5kb3dubG9hZGVkKTtcbiAgICB9LFxuICAgIGJvb2ttYXJrZWQoKSB7XG4gICAgICB0aGlzLmZpbHQuc2V0Qm9va21hcmtlZCh0aGlzLmJvb2ttYXJrZWQpO1xuICAgIH0sXG4gICAgU291cmNlKCkge1xuICAgICAgdGhpcy5maWx0LnNldFNvdXJjZSh0aGlzLlNvdXJjZSk7XG4gICAgICBpZiAodGhpcy5Tb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLkZldGNoRGF0ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBGZXRjaERhdGUoKSB7XG4gICAgICB0aGlzLmZpbHQuc2V0RmV0Y2hEYXRlKHRoaXMuRmV0Y2hEYXRlKTtcbiAgICAgIGlmICh0aGlzLkZldGNoRGF0ZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuU291cmNlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc3AoKSB7XG4gICAgICB0aGlzLmZpbHQuc2V0RGlzcGxheSh0aGlzLmRpc3ApO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFyZWRlZmF1bHRzKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy51bnJlYWQgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmRvd25sb2FkZWQgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmJvb2ttYXJrZWQgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLlNvdXJjZSA9PSBmYWxzZSAmJlxuICAgICAgICB0aGlzLkZldGNoRGF0ZSA9PSBudWxsICYmXG4gICAgICAgIHRoaXMuZGlzcCA9PSAnc291cmNlJ1xuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBmaWx0ID0gY2hhcHRlcnNGaWx0ZXIocGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydtYW5nYUlEJ119YCkpO1xuICAgIGNvbnN0IGZpbHRlcnMgPSByZWYoZmlsdCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG86IHJlZihmYWxzZSksXG4gICAgICB0YWI6IHJlZignZmlsdGVyJyksXG4gICAgICB1bnJlYWQ6IHJlZihmaWx0LlVucmVhZCksXG4gICAgICBkb3dubG9hZGVkOiByZWYoZmlsdC5Eb3dubG9hZGVkKSxcbiAgICAgIGJvb2ttYXJrZWQ6IHJlZihmaWx0LkJvb2ttYXJrZWQpLFxuICAgICAgU291cmNlOiByZWYoZmlsdC5Tb3VyY2UpLFxuICAgICAgRmV0Y2hEYXRlOiByZWYoZmlsdC5GZXRjaERhdGUpLFxuICAgICAgZmlsdDogZmlsdGVycyxcbiAgICAgIGRpc3A6IHJlZihmaWx0LkRpc3BsYXkpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCIgcmVmPVwiY2hhcEhlYWRcIj5cbiAgICAgIDxoNCBjbGFzcz1cInEtbWEtbWRcIj57eyBjaGFwdGVycy5sZW5ndGggfX0gY2hhcHRlcnM8L2g0PlxuICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEycHhcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgaWNvbj1cInNlbGVjdF9hbGxcIlxuICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICA6aWNvbj1cInNlbGVjdE1vZGUgPyBgZmxpcF90b19mcm9udGAgOiBgZmxpcF90b19iYWNrYFwiXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0TW9kZSA9ICFzZWxlY3RNb2RlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cIm1vcmVfdmVydFwiPlxuICAgICAgICAgIDxxLW1lbnUgYW5jaG9yPVwiYm90dG9tIGVuZFwiIHNlbGY9XCJ0b3AgcmlnaHRcIj5cbiAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPCEtLSBkb3dubG9hZCAtLT5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5kb3dubG9hZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5kb3dubG9hZGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQgQWxsPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuZG93bmxvYWRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Eb3dubG9hZCBOZXh0IDU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkbChzZWxlY3RlZClcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Eb3dubG9hZCBTZWxlY3RlZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwhLS0gcmVhZCAtLT5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3Agc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZj1cInRvcCBlbmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnQuZmlsdGVyKChlbGUpID0+ICFlbGUucmVhZCkubWFwKChlbGUpID0+IGVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlJlYWQgQWxsPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5yZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgtNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlJlYWQgTmV4dCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVhZChzZWxlY3RlZClcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkIFNlbGVjdGVkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPCEtLSB1bnJlYWQgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5yZWFkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3Agc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZj1cInRvcCBlbmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICEhZWxlLnJlYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5yZWFkIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICEhZWxlLnJlYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5yZWFkIExhc3QgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIGZhbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZCBTZWxlY3RlZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwhLS0gYm9va21hcmsgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Qm9va21hcms8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcCBzdGFydFwiXG4gICAgICAgICAgICAgICAgICBzZWxmPVwidG9wIGVuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5ib29rbWFya2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzQm9va21hcmtlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuYm9va21hcmtlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaXNCb29rbWFya2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Qm9va21hcmsgTmV4dCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVhZChzZWxlY3RlZCwgdHJ1ZSwgJ2lzQm9va21hcmtlZCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Qm9va21hcmsgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8IS0tIHVuYm9va21hcmsgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5ib29rbWFyazwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5ib29rbWFya2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpc0Jvb2ttYXJrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbmJvb2ttYXJrIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICEhZWxlLmJvb2ttYXJrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzQm9va21hcmtlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVuYm9va21hcmsgTGFzdCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVhZChzZWxlY3RlZCwgZmFsc2UsICdpc0Jvb2ttYXJrZWQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVuYm9va21hcmsgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8ZmlsdGVycj48L2ZpbHRlcnI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cS1zY3JvbGwtYXJlYVxuICAgICAgY2xhc3M9XCJxLXByLXhzXCJcbiAgICAgIDpzdHlsZT1cIlxuICAgICAgICAkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzXG4gICAgICAgICAgPyBgaGVpZ2h0OiA1MHZoYFxuICAgICAgICAgIDogYGhlaWdodDogY2FsYygxMDB2aCAtIGAgKyBjYWxjSGVpZ2h0KCkgKyBgcHgpYFxuICAgICAgXCJcbiAgICAgIDpjbGFzcz1cInNlbGVjdE1vZGUgPyBgIHNlbGVjdG1vZGVgIDogYGBcIlxuICAgID5cbiAgICAgIDxxLWludGVyc2VjdGlvblxuICAgICAgICB2LWZvcj1cIml0ZW0gaW4gZG9TcnRcIlxuICAgICAgICA6a2V5PVwiaXRlbS5pbmRleFwiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA1OHB4XCJcbiAgICAgICAgY2xhc3M9XCJcIlxuICAgICAgPlxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgdi10b3VjaC1ob2xkLm1vdXNlPVwiKCkgPT4gaGFuZGxlSG9sZChpdGVtLmlkKVwiXG4gICAgICAgICAgOmlkPVwiaXRlbS5pZFwiXG4gICAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICBjbGFzcz1cInEtbWEtc20gcm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgICA6Y2xhc3M9XCJcbiAgICAgICAgICAgIChpdGVtLnJlYWQgPyBgdGV4dC1ncmV5YCA6IGBgKSArXG4gICAgICAgICAgICBgIGAgK1xuICAgICAgICAgICAgKHNlbGVjdGVkLmluY2x1ZGVzKGl0ZW0uaWQpICYmIHNlbGVjdE1vZGUgPyBgc2VsZWN0ZWRgIDogYGApICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAoJHEuZGFyay5pc0FjdGl2ZSA/IGBiZy1kYXJrYCA6IGBiZy1saWdodGApXG4gICAgICAgICAgXCJcbiAgICAgICAgICA6dG89XCJcbiAgICAgICAgICAgIHNlbGVjdE1vZGVcbiAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgOiBgL21hbmdhL2AgKyBpdGVtLm1hbmdhSWQgKyBgL2NoYXB0ZXIvYCArIGl0ZW0uaW5kZXhcbiAgICAgICAgICBcIlxuICAgICAgICAgIEBjbGljaz1cInNlbGVjdE1vZGUgPyBzZWxlY3R0aGlzKGl0ZW0uaWQpIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICA6a2V5PVwiaXRlbS5pbmRleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1pZj1cIml0ZW0uYm9va21hcmtlZFwiIHNpZGU+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgID48cS1pY29uIGNvbG9yPVwicHJpbWFyeVwiIG5hbWU9XCJib29rbWFya1wiIHNpemU9XCJzbVwiPjwvcS1pY29uPlxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgIGZpbHRlcnMuRGlzcGxheSA9PSAnc291cmNlJ1xuICAgICAgICAgICAgICAgID8gaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgOiAnQ2hhcHRlciAnICsgaXRlbS5jaGFwdGVyTnVtYmVyXG4gICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICB7eyBpdGVtLnNjYW5sYXRvciB9fVxuICAgICAgICAgICAgICB7eyBuZXcgRGF0ZShpdGVtLnVwbG9hZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZG93bmxvYWRlZCA/ICfigKIgZG93bmxvYWRlZCcgOiAnJyB9fVxuICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleCk/LnN0YXRlXG4gICAgICAgICAgICAgICAgICA/IGDigKIgYCArXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgICA/LnN0YXRlXG4gICAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgPy5zdGF0ZSA9PSBgRG93bmxvYWRpbmdgXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJcbiAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgPy5wcm9ncmVzc1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgOmNvbG9yPVwic2VsZWN0ZWQuaW5jbHVkZXMoaXRlbS5pZCkgPyBgYmx1ZWAgOiBgYFwiXG4gICAgICAgICAgICA6bmFtZT1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLmlkKVxuICAgICAgICAgICAgICAgID8gYGNoZWNrX2JveGBcbiAgICAgICAgICAgICAgICA6IGBjaGVja19ib3hfb3V0bGluZV9ibGFua2BcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgPjwvcS1pY29uPlxuICAgICAgICAgIDxxLWJ0biBAY2xpY2sucHJldmVudCByb3VuZCBmbGF0IGljb249XCJtb3JlX3ZlcnRcIiBjbGFzcz1cImZsZXgtcmlnaHRcIj5cbiAgICAgICAgICAgIDxxLW1lbnU+XG4gICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiIWl0ZW0uZG93bmxvYWRlZFwiXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRvd25sb2FkKGl0ZW0uaW5kZXgpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtLmRvd25sb2FkZWRcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxlKGl0ZW0uaW5kZXgpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RGVsZXRlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBtcGF0Y2goaXRlbS5pbmRleCwgW1snYm9va21hcmtlZCcsIGAkeyFpdGVtLmJvb2ttYXJrZWR9YF1dKVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3tcbiAgICAgICAgICAgICAgICAgICAgIWl0ZW0uYm9va21hcmtlZCA/IGBCb29rbWFya2AgOiBgUmVtb3ZlIGJvb2ttYXJrYFxuICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBtcGF0Y2goaXRlbS5pbmRleCwgW1xuICAgICAgICAgICAgICAgICAgICAgIFsncmVhZCcsIGAkeyFpdGVtLnJlYWR9YF0sXG4gICAgICAgICAgICAgICAgICAgICAgWydsYXN0UGFnZVJlYWQnLCAnMSddXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICFpdGVtLnJlYWQgPyBgTWFyayBhcyBSZWFkYCA6IGBNYXJrIGFzIFVucmVhZGBcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJtcGF0Y2goaXRlbS5pbmRleCwgW1snbWFya1ByZXZSZWFkJywgJ3RydWUnXV0pXCJcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICA+TWFyayBwcmV2aW91cyBhcyBSZWFkPC9xLWl0ZW0tc2VjdGlvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgPHEtcGFnZS1zdGlja3kgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiA6b2Zmc2V0PVwiZmFiUG9zXCIgcmVmPVwic3RpY2t5XCI+XG4gICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0XCJcbiAgICAgICAgOmlzPVwiZHJhZ2dpbmdGYWIgPyAnc3BhbicgOiAncm91dGVyLWxpbmsnXCJcbiAgICAgICAgOnRvPVwicmVzXCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmFiXG4gICAgICAgICAgY2xhc3M9XCJGYWJjb25zaXN0XCJcbiAgICAgICAgICBsYWJlbD1cIlJlc3VtZVwiXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBpY29uPVwiZHJhZ19pbmRpY2F0b3JcIlxuICAgICAgICAgIHYtdG91Y2gtcGFuLnByZXZlbnQubW91c2U9XCJtb3ZlRmFiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLXRvb2x0aXA+IGRyYWdnYWJsZSA8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgPC9xLXBhZ2Utc3RpY2t5PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1xuICBjaGFwdGVyLFxuICBkbHNvY2ssXG4gIGRvd25sb2FkLFxuICBpc2Rsc29ja1xufSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBmaWx0ZXJyIGZyb20gJy4vRmlsdGVyLnZ1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyc0ZpbHRlciB9IGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHVzZURsU29jayBmcm9tICcuLi9kb3dubG9hZHMvdXNlRGxTb2NrJztcbmltcG9ydCB7IFFQYWdlU3RpY2t5IH0gZnJvbSAncXVhc2FyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ21hbmdhQ2hhcHRlcnMnLFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYnVzLm9uKCd1cGRhdGVNYW5nYScsICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCd0cnVlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRvbmxpbmUoKTtcbiAgfSxcbiAgY29tcG9uZW50czogeyBmaWx0ZXJyIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZG9GaWx0KCk6IGNoYXB0ZXJbXSB7XG4gICAgICBsZXQgY2hhcHRzOiBjaGFwdGVyW10gPSB0aGlzLmNoYXB0ZXJzO1xuICAgICAgaWYgKHRoaXMuZmlsdGVycy5VbnJlYWQgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuZmlsdGVyKChlbGUpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLlVucmVhZCA/ICFlbGUucmVhZCA6IGVsZS5yZWFkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLkRvd25sb2FkZWQgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuZmlsdGVyKChlbGUpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLkRvd25sb2FkZWQgPyBlbGUuZG93bmxvYWRlZCA6ICFlbGUuZG93bmxvYWRlZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5Cb29rbWFya2VkICE9IG51bGwpIHtcbiAgICAgICAgY2hhcHRzID0gY2hhcHRzLmZpbHRlcigoZWxlKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Cb29rbWFya2VkID8gZWxlLmJvb2ttYXJrZWQgOiAhZWxlLmJvb2ttYXJrZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFwdHM7XG4gICAgfSxcbiAgICBkb1NydCgpOiBjaGFwdGVyW10ge1xuICAgICAgbGV0IGNoYXB0czogY2hhcHRlcltdID0gdGhpcy5kb0ZpbHQ7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLlNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIGNoYXB0cyA9IGNoYXB0cy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Tb3VyY2VcbiAgICAgICAgICAgID8gYS5pbmRleCA+IGIuaW5kZXhcbiAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgIDogLTFcbiAgICAgICAgICAgIDogYS5pbmRleCA8IGIuaW5kZXhcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAtMVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5GZXRjaERhdGUgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMuRmV0Y2hEYXRlXG4gICAgICAgICAgICA/IGEuZmV0Y2hlZEF0ID4gYi5mZXRjaGVkQXRcbiAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICA6IDFcbiAgICAgICAgICAgIDogYS5mZXRjaGVkQXQgPCBiLmZldGNoZWRBdFxuICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgOiAxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhcHRzO1xuICAgIH0sXG4gICAgcmVzKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBub3RSZWFkID0gdGhpcy5kb1NydC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5yZWFkKTtcbiAgICAgIGlmICghbm90UmVhZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGAvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8kezF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdHJlYWRjaGFwID0gPGNoYXB0ZXI+bm90UmVhZFtub3RSZWFkLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gYC9tYW5nYS8ke25vdHJlYWRjaGFwLm1hbmdhSWR9L2NoYXB0ZXIvJHtub3RyZWFkY2hhcC5pbmRleH1gO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1vdmVGYWIoZXY6IHtcbiAgICAgIGlzRmlyc3Q6IGJvb2xlYW47XG4gICAgICBpc0ZpbmFsOiBib29sZWFuO1xuICAgICAgZGVsdGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgICB9KSB7XG4gICAgICAvLyB3b3VsZCBsaWtlIHRvIHVzZSBUb3VjaFBhbiB0eXBlIGJ1dCBpdCBkb2VzbnQgc2VlbSB0byBiZSBjb3JyZWN0KG9yIG5vdCB0aGUgY29ycmVjdCB0eXBlIGlkaylcbiAgICAgIHRoaXMuZHJhZ2dpbmdGYWIgPSBldi5pc0ZpcnN0ICE9PSB0cnVlICYmIGV2LmlzRmluYWwgIT09IHRydWU7XG4gICAgICBsZXQgeCA9IHRoaXMuZmFiUG9zWzBdIC0gZXYuZGVsdGEueDtcbiAgICAgIGxldCB5ID0gdGhpcy5mYWJQb3NbMV0gLSBldi5kZWx0YS55O1xuXG4gICAgICBjb25zdCBjb250YSA9IChcbiAgICAgICAgKHRoaXMuJHJlZnNbJ2NvbnRhJ10gYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBzdGljayA9IChcbiAgICAgICAgdGhpcy4kcmVmc1snc3RpY2t5J10gYXMgUVBhZ2VTdGlja3lcbiAgICAgICkuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBtYXh5ID0gY29udGEuaGVpZ2h0O1xuICAgICAgY29uc3Qgc3RpY2t5ID0gc3RpY2suaGVpZ2h0O1xuICAgICAgaWYgKHkgPiBtYXh5IC0gc3RpY2t5KSB5ID0gbWF4eSAtIHN0aWNreTtcbiAgICAgIGlmICh5IDwgMCkgeSA9IDA7XG5cbiAgICAgIGNvbnN0IG1heHggPSBjb250YS53aWR0aDtcbiAgICAgIGNvbnN0IHN0aWNreCA9IHN0aWNrLndpZHRoO1xuICAgICAgaWYgKHggPiBtYXh4IC0gc3RpY2t4KSB4ID0gbWF4eCAtIHN0aWNreDtcbiAgICAgIGlmICh4IDwgMCkgeCA9IDA7XG5cbiAgICAgIHRoaXMuZmFiUG9zID0gW3gsIHldO1xuICAgIH0sXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgIGNvbnN0IHRtcCA9IDxFbGVtZW50IHwgdW5kZWZpbmVkPnRoaXMuJHJlZnNbJ2NoYXBIZWFkJ107XG4gICAgICBpZiAodG1wID09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XG4gICAgICBsZXQgZWxIZWlnaHQgPSB0bXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgZWxIZWlnaHQgKz0gcGFyc2VJbnQoXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRtcCkuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGVsSGVpZ2h0IHx8IDA7XG4gICAgfSxcbiAgICBhc3luYyBnZXRvbmxpbmUoVEYgPSAnZmFsc2UnLCByZXRyeSA9IDIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY2hhcHRlcnMgPSA8Y2hhcHRlcltdPihcbiAgICAgICAgICBhd2FpdCB0aGlzLiRmZXRjaEpTT04oXG4gICAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVycz9vbmxpbmVGZXRjaD0ke1RGfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHJ5LS07XG4gICAgICAgIGlmIChyZXRyeSA+PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ2ZldGNoIGNoYXB0ZXJzIGZhaWxlZCBpbiBjaGFwdGVyTGlzdCBSZXRyeWluZywgcmV0cmllcyBsZWZ0OiAnICtcbiAgICAgICAgICAgICAgcmV0cnlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZ2V0b25saW5lKFRGLCByZXRyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignZmV0Y2ggY2hhcHRlcnMgZmFpbGVkIGluIGNoYXB0ZXJMaXN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGRvd25sb2FkKGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9kb3dubG9hZC8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtpbmRleH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0RFTEVURScgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgfSxcbiAgICBhc3luYyBtcGF0Y2goaW5kZXg6IG51bWJlciwgRkQ6IFtzdHJpbmcsIHN0cmluZ11bXSkge1xuICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIEZELmZvckVhY2goKGRhdCkgPT4ge1xuICAgICAgICBmZC5hcHBlbmQoLi4uZGF0KTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtpbmRleH1gLFxuICAgICAgICB7IG1ldGhvZDogJ1BBVENIJywgYm9keTogZmQgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgfSxcbiAgICBoYW5kbGVIb2xkKGlkOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0TW9kZSA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdHRoaXMoaWQpO1xuICAgIH0sXG4gICAgc2VsZWN0dGhpcyhpZDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuZmlsdGVyKChlKSA9PiBlICE9PSBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0YWxsKCkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kb1NydC5tYXAoKGVsZSkgPT4gZWxlLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRsKGxpc3Q6IG51bWJlcltdKSB7XG4gICAgICBjb25zdCBmZCA9IHsgY2hhcHRlcklkczogbGlzdCB9O1xuICAgICAgdGhpcy4kZmV0Y2goJy9hcGkvdjEvZG93bmxvYWQvYmF0Y2gnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmZClcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVhZChsaXN0OiBudW1iZXJbXSwgdGYgPSB0cnVlLCByYjogJ2lzUmVhZCcgfCAnaXNCb29rbWFya2VkJyA9ICdpc1JlYWQnKSB7XG4gICAgICBjb25zdCBmZCA9IHsgY2hhcHRlcklkczogbGlzdCwgY2hhbmdlOiB7IFtyYl06IHRmIH0gfTtcbiAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyL2JhdGNoYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZkKVxuICAgICAgICB9XG4gICAgICApLnRoZW4oKCkgPT4gdGhpcy5nZXRvbmxpbmUoKSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgICdFbWl0dGVyLmV2ZW50c0Zyb21TZXJ2ZXInKHZhbCkge1xuICAgICAgY29uc3QgdG1wID0gPGRsc29jaz5KU09OLnBhcnNlKHZhbCk7XG4gICAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgICBjb25zdCB0bXBwID0gdG1wLnF1ZXVlLmZpbHRlcihcbiAgICAgICAgICAoZWxlKSA9PiBlbGUubWFuZ2FJZCA9PSBwYXJzZUludChgJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX1gKVxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5kb3dubG9hZHNudW0gIT0gdG1wcC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmdldG9ubGluZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG93bmxvYWRzbnVtID0gdG1wcC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZG93bmxvYWRzID0gdG1wcDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gcmVmKGNoYXB0ZXJzRmlsdGVyKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKSk7XG4gICAgY29uc3QgY2hhcHRlcnMgPSByZWYoPGNoYXB0ZXJbXT5bXSk7XG4gICAgY29uc3QgY2hhcHRlcnNmaWx0ID0gcmVmKDxjaGFwdGVyW10+W10pO1xuICAgIGNvbnN0IEVtaXR0ID0gdXNlRGxTb2NrKCk7XG4gICAgY29uc3QgRW1pdHRlciA9IHJlZihFbWl0dCk7XG5cbiAgICBjb25zdCBkb3dubG9hZHMgPSByZWYoPGRvd25sb2FkW10+W10pO1xuICAgIGNvbnN0IGRvd25sb2Fkc251bSA9IHJlZigwKTtcbiAgICBjb25zdCB0bXAgPSBFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlXG4gICAgICA/IEpTT04ucGFyc2UoRW1pdHQuZXZlbnRzRnJvbVNlcnZlci52YWx1ZSlcbiAgICAgIDogW107XG4gICAgaWYgKGlzZGxzb2NrKHRtcCkpIHtcbiAgICAgIGNvbnN0IHRtcHAgPSB0bXAucXVldWUuZmlsdGVyKFxuICAgICAgICAoZWxlKSA9PiBlbGUubWFuZ2FJZCA9PSBwYXJzZUludChgJHtyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX1gKVxuICAgICAgKTtcbiAgICAgIGRvd25sb2Fkc251bS52YWx1ZSA9IHRtcHAubGVuZ3RoO1xuICAgICAgZG93bmxvYWRzLnZhbHVlID0gdG1wcDtcbiAgICB9XG4gICAgaWYgKEVtaXR0ZXIudmFsdWUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIEVtaXR0LnNlbmRNc2coJ1NUQVRVUycpO1xuICAgIH1cblxuICAgIGNvbnN0IGZhYlBvcyA9IHJlZig8W251bWJlciwgbnVtYmVyXT5bMTgsIDE4XSk7XG4gICAgY29uc3QgZHJhZ2dpbmdGYWIgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXB0ZXJzLFxuICAgICAgY2hhcHRlcnNmaWx0LFxuICAgICAgZmlsdGVycyxcbiAgICAgIEVtaXR0ZXIsXG4gICAgICBkb3dubG9hZHNudW0sXG4gICAgICBkb3dubG9hZHMsXG4gICAgICBzZWxlY3RNb2RlOiByZWYoZmFsc2UpLFxuICAgICAgc2VsZWN0ZWQ6IHJlZig8bnVtYmVyW10+W10pLFxuICAgICAgZmFiUG9zLFxuICAgICAgZHJhZ2dpbmdGYWJcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XG4uc2VsZWN0ZWRcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50XG5cbi5zZWxlY3Rtb2RlIC5xLWl0ZW1cbiAgb3BhY2l0eTogMC41XG48L3N0eWxlPlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cbi5GYWJjb25zaXN0IC5xLWJ0bl9fY29udGVudFxuICBmbGV4LXdyYXA6IG5vd3JhcFxuPC9zdHlsZT5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlXG4gICAgY2xhc3M9XCJub3dyYXBcIlxuICAgIDpjbGFzcz1cIiRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMgPyBgY29sYCA6IGByb3dgXCJcbiAgICA6c3R5bGUtZm49XCJteVR3ZWFrXCJcbiAgPlxuICAgIDxtYW5nYUluZm9cbiAgICAgIEBpbmxpYj1cImdldG9ubGluZVwiXG4gICAgICA6bWFuZ2E9XCJtYW5nYVwiXG4gICAgICA6b2Zmc2V0PVwib2Zmc2V0XCJcbiAgICAgIGNsYXNzPVwiY29sLTZcIlxuICAgIC8+XG4gICAgPG1hbmdhQ2hhcHRlcnMgY2xhc3M9XCJjb2wtNlwiIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgbWFuZ2FJbmZvIGZyb20gJ3NyYy9jb21wb25lbnRzL21hbmdhL21hbmdhSW5mby52dWUnO1xuaW1wb3J0IG1hbmdhQ2hhcHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvY2hhcHRlckxpc3QudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ21hbmdhUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgbWFuZ2FJbmZvLCBtYW5nYUNoYXB0ZXJzIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRidXMub24oJ3VwZGF0ZU1hbmdhJywgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRvbmxpbmUoJ3RydWUnKTtcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLmdldG9ubGluZSgpO1xuICAgIHRoaXMuJGVtaXQoJ3NldFRpdGxlJywgdGhpcy5tYW5nYT8udGl0bGUgfHwgJ21hbmdhJyk7XG4gICAgaWYgKFxuICAgICAgbmV3IERhdGUodGhpcy5tYW5nYS5sYXN0RmV0Y2hlZEF0ICogMTAwMCkgPFxuICAgICAgbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gMSkpXG4gICAgKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgndXBkYXRlTWFuZ2EnKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRvbmxpbmUoVEYgPSAnZmFsc2UnLCByZXRyeSA9IDMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWFuZ2EgPSA8bWFuZ2E+KFxuICAgICAgICAgIGF3YWl0IHRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119Lz9vbmxpbmVGZXRjaD0ke1RGfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAocmV0cnkgPj0gMSkgYXdhaXQgdGhpcy5nZXRvbmxpbmUoVEYsIHJldHJ5IC0gMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IG1hbmdhID0gcmVmKDxtYW5nYT57fSk7XG4gICAgcmV0dXJuIHsgbWFuZ2EsIG9mZnNldDogcmVmKDxudW1iZXI+TnVtYmVyKCkpIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2hvaXN0ZWRfMiIsIl9ub3JtYWxpemVDbGFzcyIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF8zIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwicG9zaXRpb24iLCJMb2NhbFN0b3JhZ2UiLCJfd2l0aEN0eCIsIl93aXRoRGlyZWN0aXZlcyIsIl93aXRoTW9kaWZpZXJzIiwibWFuZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RkEsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTLE1BQU07QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsV0FBWTtBQUNmLFFBQUEsS0FBSyxXQUFXLEtBQUssT0FBTztBQUM5QixX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
