import { Q as QPage } from "./QPage.d65b07e9.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QChip, a as QMenu } from "./QMenu.fd3c1db0.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { g as getImgBlob, s as storeSet } from "./usefull.5da5779b.js";
import { f as defineComponent, r as ref, _ as _export_sfc, j as openBlock, y as createElementBlock, k as createBlock, p as createCommentVNode, v as createBaseVNode, s as normalizeClass, t as toDisplayString, q as createTextVNode, n as createVNode, F as Fragment, z as renderList, x as normalizeStyle, m as withCtx, c as computed, a8 as debounce, L as onDeactivated, K as onActivated, o as onBeforeUnmount, h, D as withDirectives, g as getCurrentInstance, a0 as client, Z as noop, a2 as leftClick, W as addEvt, Y as position, X as cleanEvt, N as stopAndPrevent, P as Plugin, a7 as useRoute, u as resolveComponent, aj as withModifiers } from "./index.75e4774b.js";
import { Q as QIcon } from "./QIcon.aa032244.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QList } from "./QList.e87441cd.js";
import { Q as QLinearProgress } from "./QLinearProgress.b53747dd.js";
import { Q as QIntersection } from "./QIntersection.5a6859cd.js";
import { u as useDarkProps, a as useDark } from "./use-dark.63b90c22.js";
import { Q as QResizeObserver } from "./QResizeObserver.98338598.js";
import { Q as QScrollObserver } from "./QScrollObserver.64c336b1.js";
import { T as TouchPan } from "./TouchPan.86a57c6f.js";
import { c as createComponent, a as hMergeSlot, f as createDirective } from "./QSpinner.6511ee07.js";
import { b as between } from "./format.2a3572e1.js";
import { e as setHorizontalScrollPosition, s as setVerticalScrollPosition } from "./scroll.51a1aea4.js";
import { Q as QTooltip } from "./QTooltip.5b3ee804.js";
import { Q as QPageSticky } from "./QPageSticky.fba7628c.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { c as clearSelection } from "./selection.3a23570e.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { p as isdlsock } from "./models.4021c4b7.js";
import { Q as QTab } from "./QTab.0a84aa85.js";
import { Q as QTabs } from "./QTabs.03dcafd4.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QCheckbox } from "./QCheckbox.64e78a72.js";
import { Q as QRadio } from "./QRadio.03f9724f.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { u as useDlSock } from "./useDlSock.1248d29f.js";
import "./position-engine.09a868e3.js";
import "./use-timeout.4d745afd.js";
import "./use-transition.34947ede.js";
import "./dom.3bfc77a6.js";
import "./focus-manager.32f8d49a.js";
import "./fetcher.d026f468.js";
import "./Intersection.1f7cb92e.js";
import "./uid.42677368.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
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
    const $q = useQuasar();
    const useCache = $q.localStorage.getItem("useCache");
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
                    dark: _ctx.$q.dark.isActive,
                    label: "Unread",
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "primary"
                  }, null, 8, ["modelValue", "dark"])
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
                    dark: _ctx.$q.dark.isActive,
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "primary"
                  }, null, 8, ["modelValue", "dark"])
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
                    dark: _ctx.$q.dark.isActive,
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "primary"
                  }, null, 8, ["modelValue", "dark"])
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
                    label: "By Source",
                    dark: _ctx.$q.dark.isActive
                  }, null, 8, ["modelValue", "dark"])
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
                    label: "By Fetch date",
                    dark: _ctx.$q.dark.isActive
                  }, null, 8, ["modelValue", "dark"])
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
    itemstyle() {
      return "background-color:" + (this.$q.dark.isActive ? "var(--q-dark)" : "var(--q-light)");
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
      dark: _ctx.$q.dark.isActive,
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
                dark: _ctx.$q.dark.isActive,
                class: normalizeClass([
                  "q-ma-sm rounded-borders",
                  (item.read ? `text-grey` : ``) + ` ` + (_ctx.selected.includes(item.id) && _ctx.selectMode ? `selected` : ``)
                ]),
                style: normalizeStyle(_ctx.itemstyle),
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
              }, 1032, ["id", "dark", "class", "style", "to", "onClick"])), [
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
    }, 8, ["dark", "style", "class"]),
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
var mangaChapters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-e2988834"], ["__file", "chapterList.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FQYWdlLjlhM2Q3MTYxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9tYW5nYUluZm8udnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hIb2xkLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuZ2EvZmlsdGVycy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL0ZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9jaGFwdGVyTGlzdC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvbWFuZ2FQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwicS1weC1tZCBxLXB5LW1kIGNvbCBNYW5nYUluZm9cIlxuICAgIHN0eWxlPVwib3ZlcmZsb3cteTogYXV0b1wiXG4gICAgOnN0eWxlPVwiXG4gICAgICAkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzXG4gICAgICAgID8gYGBcbiAgICAgICAgOiBgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIGAgKyBvZmZzZXQgKyBgcHgpYFxuICAgIFwiXG4gID5cbiAgICA8cS1pbWdcbiAgICAgIHYtaWY9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiAxMDAlXCJcbiAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIHEtbXgtbWRcIlxuICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICBmaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IG5vLXdyYXBcIj5cbiAgICAgIDxxLWltZ1xuICAgICAgICB2LWlmPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZClcIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiBmaXQtY29udGVudDsgbWF4LXdpZHRoOiA1MCU7IGZsZXg6IG5vbmVcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgaW1nLWNsYXNzPVwidGVzdFwiXG4gICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgZml0PVwic2NhbGUtZG93blwiXG4gICAgICAvPlxuICAgICAgPGRpdiB2LWlmPVwibWFuZ2FcIiBjbGFzcz1cInEtbXgtbWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiPlxuICAgICAgICA8aDNcbiAgICAgICAgICBzdHlsZT1cIm92ZXJmbG93LXdyYXA6IGFueXdoZXJlXCJcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5tZCA/IGBxLW15LXNtYCA6IGBgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIiB2LWlmPVwibWFuZ2EuYXV0aG9yXCI+XG4gICAgICAgICAgQXV0aG9yOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2EuYXV0aG9yIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgcS1teS14c1wiIHYtaWY9XCJtYW5nYS5hcnRpc3RcIj5cbiAgICAgICAgICBBcnRpc3Q6XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IG1hbmdhLmFydGlzdCB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1IHEtbXkteHNcIiB2LWlmPVwibWFuZ2Euc3RhdHVzXCI+XG4gICAgICAgICAgU3RhdHVzOiA8c3BhbiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgbWFuZ2Euc3RhdHVzIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDUgcS1teS14c1wiIHYtaWY9XCJtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lXCI+XG4gICAgICAgICAgU291cmNlOlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBtYW5nYS5zb3VyY2U/LmRpc3BsYXlOYW1lIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJxLW15LW1kXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmNvbG9yPVwibWFuZ2E/LmluTGlicmFyeSA/IGBwcmltYXJ5YCA6IGBncmV5LTlgXCJcbiAgICAgICAgaWNvbj1cImZhdm9yaXRlXCJcbiAgICAgICAgOmxhYmVsPVwibWFuZ2E/LmluTGlicmFyeSA/IGBJbiBMaWJyYXJ5YCA6IGBBZGQgVG8gTGlicmFyeWBcIlxuICAgICAgICBAY2xpY2s9XCJJbkxpYnJhcnlcIlxuICAgICAgLz5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGNvbG9yPVwiZ3JleS05XCJcbiAgICAgICAgaWNvbj1cInB1YmxpY1wiXG4gICAgICAgIGxhYmVsPVwiT3BlbiBTaXRlXCJcbiAgICAgICAgOmhyZWY9XCJtYW5nYT8ucmVhbFVybFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cIm1hbmdhPy5kZXNjcmlwdGlvblwiPlxuICAgICAgPGg2IGNsYXNzPVwicS1teS1zbVwiPkFib3V0OjwvaDY+XG4gICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMS4zZW1cIj57eyBtYW5nYS5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJtYW5nYT8uZ2VucmVcIj5cbiAgICAgIDxxLWNoaXAgdi1mb3I9XCJ0YWcgaW4gbWFuZ2EuZ2VucmVcIiA6a2V5PVwidGFnXCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj57e1xuICAgICAgICB0YWdcbiAgICAgIH19PC9xLWNoaXA+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGdldEltZ0Jsb2IgfSBmcm9tICcuLi9nbG9iYWwvdXNlZnVsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYUluZm8nLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+XG4gICAgfSxcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gMFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmltZ2RhdGEgJiYgdGhpcy5tYW5nYSkge1xuICAgICAgdGhpcy5nZXRJbWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdW53YXRjaCA9IHRoaXMuJHdhdGNoKFxuICAgICAgICAoKSA9PiBbdGhpcy5pbWdkYXRhLCB0aGlzLm1hbmdhXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pbWdkYXRhICYmIHRoaXMubWFuZ2EpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1nKCk7XG4gICAgICAgICAgICB1bndhdGNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIEluTGlicmFyeSgpIHtcbiAgICAgIHRoaXMuaW5MaWIgPSAhdGhpcy5pbkxpYjtcbiAgICAgIGlmICh0aGlzLmluTGliKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGZldGNoKFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2xpYnJhcnkvYFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goXG4gICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vbGlicmFyeS9gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdpbmxpYicpO1xuICAgIH0sXG4gICAgZ2V0SW1nKCkge1xuICAgICAgZ2V0SW1nQmxvYih0aGlzLm1hbmdhPy50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbiAgICBjb25zdCB1c2VDYWNoZSA9ICRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VDYWNoZScpO1xuICAgIHJldHVybiB7XG4gICAgICB1c2VDYWNoZSxcbiAgICAgIGluTGliOiByZWYocHJvcHMubWFuZ2E/LmluTGlicmFyeSB8fCBmYWxzZSksXG4gICAgICBpbWdkYXRhOiByZWYoKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5NYW5nYUluZm8gLnEtaW1nX19jb250YWluZXIge1xuICBwb3NpdGlvbjogdW5zZXQ7XG59XG4uTWFuZ2FJbmZvIC5xLWltZy5xLWltZy0tbWVudSA6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2l0aERpcmVjdGl2ZXMsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuXG5jb25zdCBheGlzTGlzdCA9IFsgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnIF1cbmNvbnN0IGRpclByb3BzID0ge1xuICB2ZXJ0aWNhbDogeyBvZmZzZXQ6ICdvZmZzZXRZJywgc2Nyb2xsOiAnc2Nyb2xsVG9wJywgZGlyOiAnZG93bicsIGRpc3Q6ICd5JyB9LFxuICBob3Jpem9udGFsOiB7IG9mZnNldDogJ29mZnNldFgnLCBzY3JvbGw6ICdzY3JvbGxMZWZ0JywgZGlyOiAncmlnaHQnLCBkaXN0OiAneCcgfVxufVxuY29uc3QgcGFuT3B0cyA9IHtcbiAgcHJldmVudDogdHJ1ZSxcbiAgbW91c2U6IHRydWUsXG4gIG1vdXNlQWxsRGlyOiB0cnVlXG59XG5cbmNvbnN0IGdldE1pblRodW1iU2l6ZSA9IHNpemUgPT4gKHNpemUgPj0gMjUwID8gNTAgOiBNYXRoLmNlaWwoc2l6ZSAvIDUpKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbEFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgdGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIHZlcnRpY2FsVGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIGhvcml6b250YWxUaHVtYlN0eWxlOiBPYmplY3QsXG5cbiAgICBiYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICB2ZXJ0aWNhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhvcml6b250YWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50QWN0aXZlU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBkZWxheToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG5cbiAgICB2aXNpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICAvLyBzdGF0ZSBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGVtcFNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBob3ZlciA9IHJlZihmYWxzZSlcblxuICAgIC8vIG90aGVyLi4uXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgdmVydGljYWw6IHJlZigwKSxcbiAgICAgIGhvcml6b250YWw6IHJlZigwKVxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH0sXG5cbiAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcblxuICAgIGxldCB0aW1lciwgcGFuUmVmUG9zXG5cbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYSdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIudmVydGljYWwudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC8gc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgLi4ucHJvcHMudmVydGljYWxUaHVtYlN0eWxlLFxuICAgICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLXYgYWJzb2x1dGUtcmlnaHQnXG4gICAgICArIChzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlN0YXJ0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLSBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICogY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLyBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlLFxuICAgICAgICAgIGdldE1pblRodW1iU2l6ZShjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAgIC4uLnByb3BzLmhvcml6b250YWxUaHVtYlN0eWxlLFxuICAgICAgICBsZWZ0OiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICB3aWR0aDogYCR7IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU2l6ZS52YWx1ZSB9cHhgXG4gICAgICB9XG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWggYWJzb2x1dGUtYm90dG9tJ1xuICAgICAgKyAoc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1haW5TdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbnRlbnRTdHlsZVxuICAgICAgICA6IHByb3BzLmNvbnRlbnRBY3RpdmVTdHlsZVxuICAgICkpXG5cbiAgICBjb25zdCB0aHVtYlZlcnREaXIgPSBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ3ZlcnRpY2FsJykgfSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHsgdmVydGljYWw6IHRydWUsIC4uLnBhbk9wdHMgfVxuICAgIF0gXVxuXG4gICAgY29uc3QgdGh1bWJIb3JpekRpciA9IFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAnaG9yaXpvbnRhbCcpIH0sXG4gICAgICB2b2lkIDAsXG4gICAgICB7IGhvcml6b250YWw6IHRydWUsIC4uLnBhbk9wdHMgfVxuICAgIF0gXVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsICgpIHtcbiAgICAgIGNvbnN0IGluZm8gPSB7fVxuXG4gICAgICBheGlzTGlzdC5mb3JFYWNoKGF4aXMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgICBpbmZvWyBheGlzICsgJ1Bvc2l0aW9uJyBdID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBpbmZvWyBheGlzICsgJ1BlcmNlbnRhZ2UnIF0gPSBkYXRhLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgICAgaW5mb1sgYXhpcyArICdTaXplJyBdID0gZGF0YS5zaXplLnZhbHVlXG4gICAgICAgIGluZm9bIGF4aXMgKyAnQ29udGFpbmVyU2l6ZScgXSA9IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gaW5mb1xuICAgIH1cblxuICAgIC8vIHdlIGhhdmUgbG90cyBvZiBsaXN0ZW5lcnMsIHNvXG4gICAgLy8gZW5zdXJlIHdlJ3JlIG5vdCBlbWl0dGluZyBzYW1lIGluZm9cbiAgICAvLyBtdWx0aXBsZSB0aW1lc1xuICAgIGNvbnN0IGVtaXRTY3JvbGwgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICBjb25zdCBpbmZvID0gZ2V0U2Nyb2xsKClcbiAgICAgIGluZm8ucmVmID0gcHJveHlcbiAgICAgIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgfSwgMClcblxuICAgIGZ1bmN0aW9uIGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24gKGF4aXMsIG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChheGlzTGlzdC5pbmNsdWRlcyhheGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1FTY3JvbGxBcmVhXTogd3JvbmcgZmlyc3QgcGFyYW0gb2Ygc2V0U2Nyb2xsUG9zaXRpb24gKHZlcnRpY2FsL2hvcml6b250YWwpJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICA/IHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb25cbiAgICAgICAgOiBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb25cblxuICAgICAgZm4odGFyZ2V0UmVmLnZhbHVlLCBvZmZzZXQsIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lciAoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuXG4gICAgICBpZiAoY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbCAoeyBwb3NpdGlvbiB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAhPT0gcG9zaXRpb24udG9wKSB7XG4gICAgICAgIHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLnRvcFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSAhPT0gcG9zaXRpb24ubGVmdCkge1xuICAgICAgICBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLmxlZnRcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgc3RhcnRUaW1lcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsU2l6ZSAoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICAgIGlmIChzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlID0gd2lkdGhcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFuVGh1bWIgKGUsIGF4aXMpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICBpZiAoZS5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBwYW5SZWZQb3MgPSBkYXRhLnBvc2l0aW9uLnZhbHVlXG4gICAgICAgIHBhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5uaW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZS5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIHBhbm5pbmcudmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkUHJvcCA9IGRpclByb3BzWyBheGlzIF1cbiAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjb250YWluZXJbIGF4aXMgXS52YWx1ZVxuXG4gICAgICBjb25zdCBtdWx0aXBsaWVyID0gKGRhdGEuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclNpemUpIC8gKGNvbnRhaW5lclNpemUgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSlcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gZS5kaXN0YW5jZVsgZFByb3AuZGlzdCBdXG4gICAgICBjb25zdCBwb3MgPSBwYW5SZWZQb3MgKyAoZS5kaXJlY3Rpb24gPT09IGRQcm9wLmRpciA/IDEgOiAtMSkgKiBkaXN0YW5jZSAqIG11bHRpcGxpZXJcblxuICAgICAgc2V0U2Nyb2xsKHBvcywgYXhpcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZG93biAoZXZ0LCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGRhdGEudGh1bWJIaWRkZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZ0WyBkaXJQcm9wc1sgYXhpcyBdLm9mZnNldCBdXG4gICAgICAgIGlmIChvZmZzZXQgPCBkYXRhLnRodW1iU3RhcnQudmFsdWUgfHwgb2Zmc2V0ID4gZGF0YS50aHVtYlN0YXJ0LnZhbHVlICsgZGF0YS50aHVtYlNpemUudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwb3MgPSBvZmZzZXQgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSAvIDJcbiAgICAgICAgICBzZXRTY3JvbGwocG9zIC8gY29udGFpbmVyWyBheGlzIF0udmFsdWUgKiBkYXRhLnNpemUudmFsdWUsIGF4aXMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3RpdmF0ZSB0aHVtYiBwYW5cbiAgICAgICAgaWYgKGRhdGEucmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZGF0YS5yZWYudmFsdWUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChldnQudHlwZSwgZXZ0KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVmVydGljYWxNb3VzZWRvd24gKGV2dCkge1xuICAgICAgb25Nb3VzZWRvd24oZXZ0LCAndmVydGljYWwnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSG9yaXpvbnRhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICBvbk1vdXNlZG93bihldnQsICdob3Jpem9udGFsJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyICgpIHtcbiAgICAgIGlmICh0ZW1wU2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7IHRlbXBTaG93aW5nLnZhbHVlID0gZmFsc2UgfSwgcHJvcHMuZGVsYXkpXG4gICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXRTY3JvbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbCAob2Zmc2V0LCBheGlzKSB7XG4gICAgICB0YXJnZXRSZWYudmFsdWVbIGRpclByb3BzWyBheGlzIF0uc2Nyb2xsIF0gPSBvZmZzZXRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZW50ZXIgKCkge1xuICAgICAgaG92ZXIudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWxlYXZlICgpIHtcbiAgICAgIGhvdmVyLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBudWxsXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoc2Nyb2xsVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLmxlZnQpXG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24oc2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbi50b3ApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudChlbWl0U2Nyb2xsLmNhbmNlbClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIGdldFNjcm9sbFRhcmdldDogKCkgPT4gdGFyZ2V0UmVmLnZhbHVlLFxuICAgICAgZ2V0U2Nyb2xsLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfSksXG4gICAgICBnZXRTY3JvbGxQZXJjZW50YWdlOiAoKSA9PiAoe1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uOiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uLFxuICAgICAgc2V0U2Nyb2xsUGVyY2VudGFnZSAoYXhpcywgcGVyY2VudGFnZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbG9jYWxTZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICBheGlzLFxuICAgICAgICAgIHBlcmNlbnRhZ2UgKiAoc2Nyb2xsWyBheGlzIF0uc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKSxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgb25Nb3VzZWVudGVyLFxuICAgICAgICBvbk1vdXNlbGVhdmVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250YWluZXIgc2Nyb2xsIHJlbGF0aXZlLXBvc2l0aW9uIGZpdCBoaWRlLXNjcm9sbGJhcicsXG4gICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4ICE9PSB2b2lkIDAgPyBwcm9wcy50YWJpbmRleCA6IHZvaWQgMFxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRlbnQgYWJzb2x1dGUnLFxuICAgICAgICAgICAgc3R5bGU6IG1haW5TdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVTY3JvbGxTaXplXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKSxcblxuICAgICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7XG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXG4gICAgICAgICAgICBvblNjcm9sbDogdXBkYXRlU2Nyb2xsXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBbIHByb3BzLmJhclN0eWxlLCBwcm9wcy52ZXJ0aWNhbEJhclN0eWxlIF0sXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgIG9uTW91c2Vkb3duOiBvblZlcnRpY2FsTW91c2Vkb3duXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLmhvcml6b250YWxCYXJTdHlsZSBdLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICBvbk1vdXNlZG93bjogb25Ib3Jpem9udGFsTW91c2Vkb3duXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogc2Nyb2xsLnZlcnRpY2FsLnJlZixcbiAgICAgICAgICAgIGNsYXNzOiBzY3JvbGwudmVydGljYWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiBzY3JvbGwudmVydGljYWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aHVtYlZlcnREaXJcbiAgICAgICAgKSxcblxuICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICByZWY6IHNjcm9sbC5ob3Jpem9udGFsLnJlZixcbiAgICAgICAgICAgIGNsYXNzOiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHNjcm9sbC5ob3Jpem9udGFsLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGh1bWJIb3JpekRpclxuICAgICAgICApXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgc3RvcEFuZFByZXZlbnQsIG5vb3AgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtaG9sZCcsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtaG9sZCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCB7IG1vZGlmaWVycyB9ID0gYmluZGluZ1xuXG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBoYW5kbGVyOiBiaW5kaW5nLnZhbHVlLFxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbicgJiYgbGVmdENsaWNrKGV2dCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdjbGljaycsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY3R4Lm9yaWdpbiA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICAgICAgICBpZiAoY2xpZW50LmlzLm1vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlLCAxMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHgudHJpZ2dlcmVkID0gZmFsc2VcbiAgICAgICAgICAgIGN0eC5zZW5zaXRpdml0eSA9IG1vdXNlRXZlbnQgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBjdHgubW91c2VTZW5zaXRpdml0eVxuICAgICAgICAgICAgICA6IGN0eC50b3VjaFNlbnNpdGl2aXR5XG5cbiAgICAgICAgICAgIGN0eC50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgICAgICAgIGN0eC50cmlnZ2VyZWQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgY3R4LmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGV2dCxcbiAgICAgICAgICAgICAgICB0b3VjaDogbW91c2VFdmVudCAhPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY3R4Lm9yaWdpbixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgY3R4LmR1cmF0aW9uKVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBwb3NpdGlvbihldnQpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIE1hdGguYWJzKGxlZnQgLSBjdHgub3JpZ2luLmxlZnQpID49IGN0eC5zZW5zaXRpdml0eVxuICAgICAgICAgICAgICB8fCBNYXRoLmFicyh0b3AgLSBjdHgub3JpZ2luLnRvcCkgPj0gY3R4LnNlbnNpdGl2aXR5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGN0eC50aW1lcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQpIHtcbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgICAvLyBkZWxheSBuZWVkZWQgb3RoZXJ3aXNlIHNlbGVjdGlvbiBzdGlsbCBvY2N1cnNcbiAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKGN0eC50cmlnZ2VyZWQpXG5cbiAgICAgICAgICAgIGlmIChjdHgudHJpZ2dlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGR1cmF0aW9uIGluIG1zLCB0b3VjaCBpbiBwaXhlbHMsIG1vdXNlIGluIHBpeGVsc1xuICAgICAgICBjb25zdCBkYXRhID0gWyA2MDAsIDUsIDcgXVxuXG4gICAgICAgIGlmICh0eXBlb2YgYmluZGluZy5hcmcgPT09ICdzdHJpbmcnICYmIGJpbmRpbmcuYXJnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBiaW5kaW5nLmFyZy5zcGxpdCgnOicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUludCh2YWwsIDEwKVxuICAgICAgICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIFsgY3R4LmR1cmF0aW9uLCBjdHgudG91Y2hTZW5zaXRpdml0eSwgY3R4Lm1vdXNlU2Vuc2l0aXZpdHkgXSA9IGRhdGFcblxuICAgICAgICBlbC5fX3F0b3VjaGhvbGQgPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2hlbmQnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwICYmIGJpbmRpbmcub2xkVmFsdWUgIT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICB0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmcudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hob2xkXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoY3R4LnRpbWVyKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaGhvbGRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzdG9yZVNldCB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcblxudHlwZSBibm4gPSBib29sZWFuIHwgbnVsbDtcblxudHlwZSBkaXNwID0gJ3NvdXJjZScgfCAnY2hhcHRlcic7XG5cbmNvbnN0IFVucmVhZCA9IHJlZig8Ym5uPm51bGwpO1xuY29uc3QgRG93bmxvYWRlZCA9IHJlZig8Ym5uPm51bGwpO1xuY29uc3QgQm9va21hcmtlZCA9IHJlZig8Ym5uPm51bGwpO1xuY29uc3QgU291cmNlID0gcmVmKDxibm4+bnVsbCk7XG5jb25zdCBGZXRjaERhdGUgPSByZWYoPGJubj5udWxsKTtcbmNvbnN0IERpc3BsYXkgPSByZWYoPGRpc3A+J3NvdXJjZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhcHRlcnNGaWx0ZXIobWFuZ2FJRDogbnVtYmVyKSB7XG4gIFVucmVhZC52YWx1ZSA9IDxibm4+TG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bWFuZ2FJRH1DaFVucmVhZGApO1xuICBEb3dubG9hZGVkLnZhbHVlID0gPGJubj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoRG93bmxvYWRlZGApO1xuICBCb29rbWFya2VkLnZhbHVlID0gPGJubj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoQm9va21hcmtlZGApO1xuICBTb3VyY2UudmFsdWUgPSA8Ym5uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke21hbmdhSUR9Q2hTb3VyY2VgKTtcbiAgRmV0Y2hEYXRlLnZhbHVlID0gPGJubj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoRmV0Y2hEYXRlYCk7XG4gIERpc3BsYXkudmFsdWUgPSA8ZGlzcD5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHttYW5nYUlEfUNoRGlzcGxheWApO1xuXG4gIGNvbnN0IHNldFVucmVhZCA9IGZ1bmN0aW9uICh2YWx1ZTogYm5uKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIExvY2FsU3RvcmFnZS5yZW1vdmUoYCR7bWFuZ2FJRH1DaFVucmVhZGApO1xuICAgIGVsc2UgTG9jYWxTdG9yYWdlLnNldChgJHttYW5nYUlEfUNoVW5yZWFkYCwgdmFsdWUpO1xuICAgIFVucmVhZC52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXREb3dubG9hZGVkID0gZnVuY3Rpb24gKHZhbHVlOiBibm4pIHtcbiAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoRG93bmxvYWRlZGAsIHZhbHVlKTtcbiAgICBEb3dubG9hZGVkLnZhbHVlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldEJvb2ttYXJrZWQgPSBmdW5jdGlvbiAodmFsdWU6IGJubikge1xuICAgIHN0b3JlU2V0KGAke21hbmdhSUR9Q2hCb29rbWFya2VkYCwgdmFsdWUpO1xuICAgIEJvb2ttYXJrZWQudmFsdWUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0U291cmNlID0gZnVuY3Rpb24gKHZhbHVlOiBibm4pIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgc3RvcmVTZXQoYCR7bWFuZ2FJRH1DaFNvdXJjZWAsIHZhbHVlKTtcbiAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmUoYCR7bWFuZ2FJRH1DaEZldGNoRGF0ZWApO1xuICAgIH1cbiAgICBTb3VyY2UudmFsdWUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0RmV0Y2hEYXRlID0gZnVuY3Rpb24gKHZhbHVlOiBibm4pIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgc3RvcmVTZXQoYCR7bWFuZ2FJRH1DaEZldGNoRGF0ZWAsIHZhbHVlKTtcbiAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmUoYCR7bWFuZ2FJRH1DaFNvdXJjZWApO1xuICAgIH1cbiAgICBGZXRjaERhdGUudmFsdWUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0RGlzcGxheSA9IGZ1bmN0aW9uICh2YWx1ZTogJ3NvdXJjZScgfCAnY2hhcHRlcicpIHtcbiAgICBzdG9yZVNldChgJHttYW5nYUlEfUNoRGlzcGxheWAsIHZhbHVlLCAnc291cmNlJyk7XG4gICAgRGlzcGxheS52YWx1ZSA9IHZhbHVlO1xuICB9O1xuXG4gIC8vIG5lZWRzIGEgZGVmYXVsdCBpZiBubyBzb3J0IGlzIHNldFxuICBpZiAoU291cmNlLnZhbHVlID09IG51bGwgJiYgRmV0Y2hEYXRlLnZhbHVlID09IG51bGwpIFNvdXJjZS52YWx1ZSA9IGZhbHNlO1xuICBpZiAoRGlzcGxheS52YWx1ZSA9PSBudWxsKSBEaXNwbGF5LnZhbHVlID0gJ3NvdXJjZSc7XG5cbiAgcmV0dXJuIHtcbiAgICBVbnJlYWQsXG4gICAgRG93bmxvYWRlZCxcbiAgICBCb29rbWFya2VkLFxuICAgIFNvdXJjZSxcbiAgICBGZXRjaERhdGUsXG4gICAgRGlzcGxheSxcbiAgICBzZXRVbnJlYWQsXG4gICAgc2V0RG93bmxvYWRlZCxcbiAgICBzZXRCb29rbWFya2VkLFxuICAgIHNldFNvdXJjZSxcbiAgICBzZXRGZXRjaERhdGUsXG4gICAgc2V0RGlzcGxheVxuICB9O1xufVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOnRleHQtY29sb3I9XCJcbiAgICAgICRxLmRhcmsuaXNBY3RpdmVcbiAgICAgICAgPyBhcmVkZWZhdWx0cygpXG4gICAgICAgICAgPyBgd2hpdGVgXG4gICAgICAgICAgOiBgb3JhbmdlYFxuICAgICAgICA6IGFyZWRlZmF1bHRzKClcbiAgICAgICAgPyBgZGFya2BcbiAgICAgICAgOiBgb3JhbmdlYFxuICAgIFwiXG4gICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICBAY2xpY2s9XCJkaWFsbyA9IHRydWVcIlxuICAvPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXRhYiBjbGFzcz1cInEtcHgteGxcIiBuYW1lPVwic29ydFwiIGljb249XCJzb3J0XCIgbGFiZWw9XCJTb3J0XCIgLz5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIGNsYXNzPVwicS1weC14bFwiXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheVwiXG4gICAgICAgICAgICBpY29uPVwiZGlzcGxheV9zZXR0aW5nc1wiXG4gICAgICAgICAgICBsYWJlbD1cIkRpc3BsYXlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS10YWJzPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdmaWx0ZXInXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1bnJlYWRcIlxuICAgICAgICAgICAgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVW5yZWFkXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImNoZWNrX2JveFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cInJfZGlzYWJsZWRfYnlfZGVmYXVsdFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHkteHNcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1tb2RlbD1cImRvd25sb2FkZWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEb3dubG9hZGVkXCJcbiAgICAgICAgICAgIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1tb2RlbD1cImJvb2ttYXJrZWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJCb29rbWFya2VkXCJcbiAgICAgICAgICAgIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ3NvcnQnXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cIlNvdXJjZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkJ5IFNvdXJjZVwiXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cIkZldGNoRGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkJ5IEZldGNoIGRhdGVcIlxuICAgICAgICAgICAgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnZGlzcGxheSdcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cInNvdXJjZVwiIGxhYmVsPVwiQnkgU291cmNlIFRpdGxlXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cImNoYXB0ZXJcIiBsYWJlbD1cIkJ5IENoYXB0ZXIgTnVtYmVyXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNoYXB0ZXJzRmlsdGVyIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvZmlsdGVycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnbGlicmFyeVRvcEJhcicsXG4gIC8vc2V0RmlsdGVyKHZhbHVlOiBibm4sIG1hbmdhSUQ6IG51bWJlciwgd2hhdENoYW5nZToga2V5a2V5cykge1xuICB3YXRjaDoge1xuICAgIHVucmVhZCgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXRVbnJlYWQodGhpcy51bnJlYWQpO1xuICAgIH0sXG4gICAgZG93bmxvYWRlZCgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXREb3dubG9hZGVkKHRoaXMuZG93bmxvYWRlZCk7XG4gICAgfSxcbiAgICBib29rbWFya2VkKCkge1xuICAgICAgdGhpcy5maWx0LnNldEJvb2ttYXJrZWQodGhpcy5ib29rbWFya2VkKTtcbiAgICB9LFxuICAgIFNvdXJjZSgpIHtcbiAgICAgIHRoaXMuZmlsdC5zZXRTb3VyY2UodGhpcy5Tb3VyY2UpO1xuICAgICAgaWYgKHRoaXMuU291cmNlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5GZXRjaERhdGUgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgRmV0Y2hEYXRlKCkge1xuICAgICAgdGhpcy5maWx0LnNldEZldGNoRGF0ZSh0aGlzLkZldGNoRGF0ZSk7XG4gICAgICBpZiAodGhpcy5GZXRjaERhdGUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLlNvdXJjZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwKCkge1xuICAgICAgdGhpcy5maWx0LnNldERpc3BsYXkodGhpcy5kaXNwKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhcmVkZWZhdWx0cygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudW5yZWFkID09IG51bGwgJiZcbiAgICAgICAgdGhpcy5kb3dubG9hZGVkID09IG51bGwgJiZcbiAgICAgICAgdGhpcy5ib29rbWFya2VkID09IG51bGwgJiZcbiAgICAgICAgdGhpcy5Tb3VyY2UgPT0gZmFsc2UgJiZcbiAgICAgICAgdGhpcy5GZXRjaERhdGUgPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmRpc3AgPT0gJ3NvdXJjZSdcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG4gICAgY29uc3QgZmlsdCA9IGNoYXB0ZXJzRmlsdGVyKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gcmVmKGZpbHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvOiByZWYoZmFsc2UpLFxuICAgICAgdGFiOiByZWYoJ2ZpbHRlcicpLFxuICAgICAgdW5yZWFkOiByZWYoZmlsdC5VbnJlYWQpLFxuICAgICAgZG93bmxvYWRlZDogcmVmKGZpbHQuRG93bmxvYWRlZCksXG4gICAgICBib29rbWFya2VkOiByZWYoZmlsdC5Cb29rbWFya2VkKSxcbiAgICAgIFNvdXJjZTogcmVmKGZpbHQuU291cmNlKSxcbiAgICAgIEZldGNoRGF0ZTogcmVmKGZpbHQuRmV0Y2hEYXRlKSxcbiAgICAgIGZpbHQ6IGZpbHRlcnMsXG4gICAgICBkaXNwOiByZWYoZmlsdC5EaXNwbGF5KVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIHJlZj1cImNoYXBIZWFkXCI+XG4gICAgICA8aDQgY2xhc3M9XCJxLW1hLW1kXCI+e3sgY2hhcHRlcnMubGVuZ3RoIH19IGNoYXB0ZXJzPC9oND5cbiAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMnB4XCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGljb249XCJzZWxlY3RfYWxsXCJcbiAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0YWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgOmljb249XCJzZWxlY3RNb2RlID8gYGZsaXBfdG9fZnJvbnRgIDogYGZsaXBfdG9fYmFja2BcIlxuICAgICAgICAgIEBjbGljaz1cInNlbGVjdE1vZGUgPSAhc2VsZWN0TW9kZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0biByb3VuZCBmbGF0IGljb249XCJtb3JlX3ZlcnRcIj5cbiAgICAgICAgICA8cS1tZW51IGFuY2hvcj1cImJvdHRvbSBlbmRcIiBzZWxmPVwidG9wIHJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwid2lkdGg6IGZpdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDwhLS0gZG93bmxvYWQgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+ZG93bmxvYWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcCBzdGFydFwiXG4gICAgICAgICAgICAgICAgICBzZWxmPVwidG9wIGVuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuZG93bmxvYWRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkRvd25sb2FkIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhZWxlLmRvd25sb2FkZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC01KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQgTmV4dCA1PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGwoc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8IS0tIHJlYWQgLS0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+UmVhZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0LmZpbHRlcigoZWxlKSA9PiAhZWxlLnJlYWQpLm1hcCgoZWxlKSA9PiBlbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkIEFsbDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUucmVhZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWxlKSA9PiBlbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5SZWFkIE5leHQgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+UmVhZCBTZWxlY3RlZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwhLS0gdW5yZWFkIC0tPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X2xlZnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgZW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2hpdGUtc3BhY2U6IG5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5yZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZCBBbGw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5yZWFkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVucmVhZCBMYXN0IDU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWFkKHNlbGVjdGVkLCBmYWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbnJlYWQgU2VsZWN0ZWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8IS0tIGJvb2ttYXJrIC0tPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X2xlZnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3Agc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZj1cInRvcCBlbmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9TcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbGUpID0+ICFlbGUuYm9va21hcmtlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpc0Jvb2ttYXJrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Cb29rbWFyayBBbGw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhZWxlLmJvb2ttYXJrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC01KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzQm9va21hcmtlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrIE5leHQgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIHRydWUsICdpc0Jvb2ttYXJrZWQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkJvb2ttYXJrIFNlbGVjdGVkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPCEtLSB1bmJvb2ttYXJrIC0tPlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X2xlZnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlVuYm9va21hcms8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcCBzdGFydFwiXG4gICAgICAgICAgICAgICAgICBzZWxmPVwidG9wIGVuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb1NydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gISFlbGUuYm9va21hcmtlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChlbGUpID0+IGVsZS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaXNCb29rbWFya2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VW5ib29rbWFyayBBbGw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvU3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWxlKSA9PiAhIWVsZS5ib29rbWFya2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsZSkgPT4gZWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpc0Jvb2ttYXJrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbmJvb2ttYXJrIExhc3QgNTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlYWQoc2VsZWN0ZWQsIGZhbHNlLCAnaXNCb29rbWFya2VkJylcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5VbmJvb2ttYXJrIFNlbGVjdGVkPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPGZpbHRlcnI+PC9maWx0ZXJyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHEtc2Nyb2xsLWFyZWFcbiAgICAgIGNsYXNzPVwicS1wci14c1wiXG4gICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgOnN0eWxlPVwiXG4gICAgICAgICRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHNcbiAgICAgICAgICA/IGBoZWlnaHQ6IDUwdmhgXG4gICAgICAgICAgOiBgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gYCArIGNhbGNIZWlnaHQoKSArIGBweClgXG4gICAgICBcIlxuICAgICAgOmNsYXNzPVwic2VsZWN0TW9kZSA/IGAgc2VsZWN0bW9kZWAgOiBgYFwiXG4gICAgPlxuICAgICAgPHEtaW50ZXJzZWN0aW9uXG4gICAgICAgIHYtZm9yPVwiaXRlbSBpbiBkb1NydFwiXG4gICAgICAgIDprZXk9XCJpdGVtLmluZGV4XCJcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDU4cHhcIlxuICAgICAgICBjbGFzcz1cIlwiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICB2LXRvdWNoLWhvbGQubW91c2U9XCIoKSA9PiBoYW5kbGVIb2xkKGl0ZW0uaWQpXCJcbiAgICAgICAgICA6aWQ9XCJpdGVtLmlkXCJcbiAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiXG4gICAgICAgICAgY2xhc3M9XCJxLW1hLXNtIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAoaXRlbS5yZWFkID8gYHRleHQtZ3JleWAgOiBgYCkgK1xuICAgICAgICAgICAgYCBgICtcbiAgICAgICAgICAgIChzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLmlkKSAmJiBzZWxlY3RNb2RlID8gYHNlbGVjdGVkYCA6IGBgKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgOnN0eWxlPVwiaXRlbXN0eWxlXCJcbiAgICAgICAgICA6dG89XCJcbiAgICAgICAgICAgIHNlbGVjdE1vZGVcbiAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgOiBgL21hbmdhL2AgKyBpdGVtLm1hbmdhSWQgKyBgL2NoYXB0ZXIvYCArIGl0ZW0uaW5kZXhcbiAgICAgICAgICBcIlxuICAgICAgICAgIEBjbGljaz1cInNlbGVjdE1vZGUgPyBzZWxlY3R0aGlzKGl0ZW0uaWQpIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICA6a2V5PVwiaXRlbS5pbmRleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdi1pZj1cIml0ZW0uYm9va21hcmtlZFwiIHNpZGU+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgID48cS1pY29uIGNvbG9yPVwicHJpbWFyeVwiIG5hbWU9XCJib29rbWFya1wiIHNpemU9XCJzbVwiPjwvcS1pY29uPlxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7XG4gICAgICAgICAgICAgIGZpbHRlcnMuRGlzcGxheSA9PSAnc291cmNlJ1xuICAgICAgICAgICAgICAgID8gaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgOiAnQ2hhcHRlciAnICsgaXRlbS5jaGFwdGVyTnVtYmVyXG4gICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICB7eyBpdGVtLnNjYW5sYXRvciB9fVxuICAgICAgICAgICAgICB7eyBuZXcgRGF0ZShpdGVtLnVwbG9hZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZG93bmxvYWRlZCA/ICfigKIgZG93bmxvYWRlZCcgOiAnJyB9fVxuICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleCk/LnN0YXRlXG4gICAgICAgICAgICAgICAgICA/IGDigKIgYCArXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgICA/LnN0YXRlXG4gICAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgPy5zdGF0ZSA9PSBgRG93bmxvYWRpbmdgXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJcbiAgICAgICAgICAgICAgICAgIGRvd25sb2Fkcy5maW5kKChlbGUpID0+IGVsZS5jaGFwdGVySW5kZXggPT0gaXRlbS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgPy5wcm9ncmVzc1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgOmNvbG9yPVwic2VsZWN0ZWQuaW5jbHVkZXMoaXRlbS5pZCkgPyBgYmx1ZWAgOiBgYFwiXG4gICAgICAgICAgICA6bmFtZT1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC5pbmNsdWRlcyhpdGVtLmlkKVxuICAgICAgICAgICAgICAgID8gYGNoZWNrX2JveGBcbiAgICAgICAgICAgICAgICA6IGBjaGVja19ib3hfb3V0bGluZV9ibGFua2BcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgPjwvcS1pY29uPlxuICAgICAgICAgIDxxLWJ0biBAY2xpY2sucHJldmVudCByb3VuZCBmbGF0IGljb249XCJtb3JlX3ZlcnRcIiBjbGFzcz1cImZsZXgtcmlnaHRcIj5cbiAgICAgICAgICAgIDxxLW1lbnU+XG4gICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiIWl0ZW0uZG93bmxvYWRlZFwiXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRvd25sb2FkKGl0ZW0uaW5kZXgpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG93bmxvYWQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtLmRvd25sb2FkZWRcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxlKGl0ZW0uaW5kZXgpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RGVsZXRlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBtcGF0Y2goaXRlbS5pbmRleCwgW1snYm9va21hcmtlZCcsIGAkeyFpdGVtLmJvb2ttYXJrZWR9YF1dKVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3tcbiAgICAgICAgICAgICAgICAgICAgIWl0ZW0uYm9va21hcmtlZCA/IGBCb29rbWFya2AgOiBgUmVtb3ZlIGJvb2ttYXJrYFxuICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICBtcGF0Y2goaXRlbS5pbmRleCwgW1xuICAgICAgICAgICAgICAgICAgICAgIFsncmVhZCcsIGAkeyFpdGVtLnJlYWR9YF0sXG4gICAgICAgICAgICAgICAgICAgICAgWydsYXN0UGFnZVJlYWQnLCAnMSddXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7XG4gICAgICAgICAgICAgICAgICAgICFpdGVtLnJlYWQgPyBgTWFyayBhcyBSZWFkYCA6IGBNYXJrIGFzIFVucmVhZGBcbiAgICAgICAgICAgICAgICAgIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJtcGF0Y2goaXRlbS5pbmRleCwgW1snbWFya1ByZXZSZWFkJywgJ3RydWUnXV0pXCJcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzdHlsZT1cIndoaXRlLXNwYWNlOiBub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICA+TWFyayBwcmV2aW91cyBhcyBSZWFkPC9xLWl0ZW0tc2VjdGlvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgPHEtcGFnZS1zdGlja3kgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiA6b2Zmc2V0PVwiZmFiUG9zXCIgcmVmPVwic3RpY2t5XCI+XG4gICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0XCJcbiAgICAgICAgOmlzPVwiZHJhZ2dpbmdGYWIgPyAnc3BhbicgOiAncm91dGVyLWxpbmsnXCJcbiAgICAgICAgOnRvPVwicmVzXCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmFiXG4gICAgICAgICAgY2xhc3M9XCJGYWJjb25zaXN0XCJcbiAgICAgICAgICBsYWJlbD1cIlJlc3VtZVwiXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBpY29uPVwiZHJhZ19pbmRpY2F0b3JcIlxuICAgICAgICAgIHYtdG91Y2gtcGFuLnByZXZlbnQubW91c2U9XCJtb3ZlRmFiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLXRvb2x0aXA+IGRyYWdnYWJsZSA8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgPC9xLXBhZ2Utc3RpY2t5PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1xuICBjaGFwdGVyLFxuICBkbHNvY2ssXG4gIGRvd25sb2FkLFxuICBpc2Rsc29ja1xufSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBmaWx0ZXJyIGZyb20gJy4vRmlsdGVyLnZ1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyc0ZpbHRlciB9IGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHVzZURsU29jayBmcm9tICcuLi9kb3dubG9hZHMvdXNlRGxTb2NrJztcbmltcG9ydCB7IFFQYWdlU3RpY2t5IH0gZnJvbSAncXVhc2FyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ21hbmdhQ2hhcHRlcnMnLFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYnVzLm9uKCd1cGRhdGVNYW5nYScsICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCd0cnVlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRvbmxpbmUoKTtcbiAgfSxcbiAgY29tcG9uZW50czogeyBmaWx0ZXJyIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZG9GaWx0KCk6IGNoYXB0ZXJbXSB7XG4gICAgICBsZXQgY2hhcHRzOiBjaGFwdGVyW10gPSB0aGlzLmNoYXB0ZXJzO1xuICAgICAgaWYgKHRoaXMuZmlsdGVycy5VbnJlYWQgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuZmlsdGVyKChlbGUpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLlVucmVhZCA/ICFlbGUucmVhZCA6IGVsZS5yZWFkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLkRvd25sb2FkZWQgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuZmlsdGVyKChlbGUpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLkRvd25sb2FkZWQgPyBlbGUuZG93bmxvYWRlZCA6ICFlbGUuZG93bmxvYWRlZFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5Cb29rbWFya2VkICE9IG51bGwpIHtcbiAgICAgICAgY2hhcHRzID0gY2hhcHRzLmZpbHRlcigoZWxlKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Cb29rbWFya2VkID8gZWxlLmJvb2ttYXJrZWQgOiAhZWxlLmJvb2ttYXJrZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFwdHM7XG4gICAgfSxcbiAgICBkb1NydCgpOiBjaGFwdGVyW10ge1xuICAgICAgbGV0IGNoYXB0czogY2hhcHRlcltdID0gdGhpcy5kb0ZpbHQ7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLlNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIGNoYXB0cyA9IGNoYXB0cy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5Tb3VyY2VcbiAgICAgICAgICAgID8gYS5pbmRleCA+IGIuaW5kZXhcbiAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgIDogLTFcbiAgICAgICAgICAgIDogYS5pbmRleCA8IGIuaW5kZXhcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAtMVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5GZXRjaERhdGUgIT0gbnVsbCkge1xuICAgICAgICBjaGFwdHMgPSBjaGFwdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMuRmV0Y2hEYXRlXG4gICAgICAgICAgICA/IGEuZmV0Y2hlZEF0ID4gYi5mZXRjaGVkQXRcbiAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICA6IDFcbiAgICAgICAgICAgIDogYS5mZXRjaGVkQXQgPCBiLmZldGNoZWRBdFxuICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgOiAxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhcHRzO1xuICAgIH0sXG4gICAgaXRlbXN0eWxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjonICtcbiAgICAgICAgKHRoaXMuJHEuZGFyay5pc0FjdGl2ZSA/ICd2YXIoLS1xLWRhcmspJyA6ICd2YXIoLS1xLWxpZ2h0KScpXG4gICAgICApO1xuICAgIH0sXG4gICAgcmVzKCk6IHN0cmluZyB7XG4gICAgICBjb25zdCBub3RSZWFkID0gdGhpcy5kb1NydC5maWx0ZXIoKGVsZSkgPT4gIWVsZS5yZWFkKTtcbiAgICAgIGlmICghbm90UmVhZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGAvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8kezF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdHJlYWRjaGFwID0gPGNoYXB0ZXI+bm90UmVhZFtub3RSZWFkLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gYC9tYW5nYS8ke25vdHJlYWRjaGFwLm1hbmdhSWR9L2NoYXB0ZXIvJHtub3RyZWFkY2hhcC5pbmRleH1gO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1vdmVGYWIoZXY6IHtcbiAgICAgIGlzRmlyc3Q6IGJvb2xlYW47XG4gICAgICBpc0ZpbmFsOiBib29sZWFuO1xuICAgICAgZGVsdGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgICB9KSB7XG4gICAgICAvLyB3b3VsZCBsaWtlIHRvIHVzZSBUb3VjaFBhbiB0eXBlIGJ1dCBpdCBkb2VzbnQgc2VlbSB0byBiZSBjb3JyZWN0KG9yIG5vdCB0aGUgY29ycmVjdCB0eXBlIGlkaylcbiAgICAgIHRoaXMuZHJhZ2dpbmdGYWIgPSBldi5pc0ZpcnN0ICE9PSB0cnVlICYmIGV2LmlzRmluYWwgIT09IHRydWU7XG4gICAgICBsZXQgeCA9IHRoaXMuZmFiUG9zWzBdIC0gZXYuZGVsdGEueDtcbiAgICAgIGxldCB5ID0gdGhpcy5mYWJQb3NbMV0gLSBldi5kZWx0YS55O1xuXG4gICAgICBjb25zdCBjb250YSA9IChcbiAgICAgICAgKHRoaXMuJHJlZnNbJ2NvbnRhJ10gYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBzdGljayA9IChcbiAgICAgICAgdGhpcy4kcmVmc1snc3RpY2t5J10gYXMgUVBhZ2VTdGlja3lcbiAgICAgICkuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBtYXh5ID0gY29udGEuaGVpZ2h0O1xuICAgICAgY29uc3Qgc3RpY2t5ID0gc3RpY2suaGVpZ2h0O1xuICAgICAgaWYgKHkgPiBtYXh5IC0gc3RpY2t5KSB5ID0gbWF4eSAtIHN0aWNreTtcbiAgICAgIGlmICh5IDwgMCkgeSA9IDA7XG5cbiAgICAgIGNvbnN0IG1heHggPSBjb250YS53aWR0aDtcbiAgICAgIGNvbnN0IHN0aWNreCA9IHN0aWNrLndpZHRoO1xuICAgICAgaWYgKHggPiBtYXh4IC0gc3RpY2t4KSB4ID0gbWF4eCAtIHN0aWNreDtcbiAgICAgIGlmICh4IDwgMCkgeCA9IDA7XG5cbiAgICAgIHRoaXMuZmFiUG9zID0gW3gsIHldO1xuICAgIH0sXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgIGNvbnN0IHRtcCA9IDxFbGVtZW50IHwgdW5kZWZpbmVkPnRoaXMuJHJlZnNbJ2NoYXBIZWFkJ107XG4gICAgICBpZiAodG1wID09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XG4gICAgICBsZXQgZWxIZWlnaHQgPSB0bXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgZWxIZWlnaHQgKz0gcGFyc2VJbnQoXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRtcCkuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGVsSGVpZ2h0IHx8IDA7XG4gICAgfSxcbiAgICBhc3luYyBnZXRvbmxpbmUoVEYgPSAnZmFsc2UnLCByZXRyeSA9IDIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY2hhcHRlcnMgPSA8Y2hhcHRlcltdPihcbiAgICAgICAgICBhd2FpdCB0aGlzLiRmZXRjaEpTT04oXG4gICAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVycz9vbmxpbmVGZXRjaD0ke1RGfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHJ5LS07XG4gICAgICAgIGlmIChyZXRyeSA+PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ2ZldGNoIGNoYXB0ZXJzIGZhaWxlZCBpbiBjaGFwdGVyTGlzdCBSZXRyeWluZywgcmV0cmllcyBsZWZ0OiAnICtcbiAgICAgICAgICAgICAgcmV0cnlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZ2V0b25saW5lKFRGLCByZXRyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignZmV0Y2ggY2hhcHRlcnMgZmFpbGVkIGluIGNoYXB0ZXJMaXN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGRvd25sb2FkKGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9kb3dubG9hZC8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtpbmRleH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0RFTEVURScgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgfSxcbiAgICBhc3luYyBtcGF0Y2goaW5kZXg6IG51bWJlciwgRkQ6IFtzdHJpbmcsIHN0cmluZ11bXSkge1xuICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIEZELmZvckVhY2goKGRhdCkgPT4ge1xuICAgICAgICBmZC5hcHBlbmQoLi4uZGF0KTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtpbmRleH1gLFxuICAgICAgICB7IG1ldGhvZDogJ1BBVENIJywgYm9keTogZmQgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2V0b25saW5lKCk7XG4gICAgfSxcbiAgICBoYW5kbGVIb2xkKGlkOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0TW9kZSA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdHRoaXMoaWQpO1xuICAgIH0sXG4gICAgc2VsZWN0dGhpcyhpZDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuZmlsdGVyKChlKSA9PiBlICE9PSBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0YWxsKCkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kb1NydC5tYXAoKGVsZSkgPT4gZWxlLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRsKGxpc3Q6IG51bWJlcltdKSB7XG4gICAgICBjb25zdCBmZCA9IHsgY2hhcHRlcklkczogbGlzdCB9O1xuICAgICAgdGhpcy4kZmV0Y2goJy9hcGkvdjEvZG93bmxvYWQvYmF0Y2gnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmZClcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVhZChsaXN0OiBudW1iZXJbXSwgdGYgPSB0cnVlLCByYjogJ2lzUmVhZCcgfCAnaXNCb29rbWFya2VkJyA9ICdpc1JlYWQnKSB7XG4gICAgICBjb25zdCBmZCA9IHsgY2hhcHRlcklkczogbGlzdCwgY2hhbmdlOiB7IFtyYl06IHRmIH0gfTtcbiAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyL2JhdGNoYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZkKVxuICAgICAgICB9XG4gICAgICApLnRoZW4oKCkgPT4gdGhpcy5nZXRvbmxpbmUoKSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgICdFbWl0dGVyLmV2ZW50c0Zyb21TZXJ2ZXInKHZhbCkge1xuICAgICAgY29uc3QgdG1wID0gPGRsc29jaz5KU09OLnBhcnNlKHZhbCk7XG4gICAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgICBjb25zdCB0bXBwID0gdG1wLnF1ZXVlLmZpbHRlcihcbiAgICAgICAgICAoZWxlKSA9PiBlbGUubWFuZ2FJZCA9PSBwYXJzZUludChgJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX1gKVxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5kb3dubG9hZHNudW0gIT0gdG1wcC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmdldG9ubGluZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG93bmxvYWRzbnVtID0gdG1wcC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZG93bmxvYWRzID0gdG1wcDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gcmVmKGNoYXB0ZXJzRmlsdGVyKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKSk7XG4gICAgY29uc3QgY2hhcHRlcnMgPSByZWYoPGNoYXB0ZXJbXT5bXSk7XG4gICAgY29uc3QgY2hhcHRlcnNmaWx0ID0gcmVmKDxjaGFwdGVyW10+W10pO1xuICAgIGNvbnN0IEVtaXR0ID0gdXNlRGxTb2NrKCk7XG4gICAgY29uc3QgRW1pdHRlciA9IHJlZihFbWl0dCk7XG5cbiAgICBjb25zdCBkb3dubG9hZHMgPSByZWYoPGRvd25sb2FkW10+W10pO1xuICAgIGNvbnN0IGRvd25sb2Fkc251bSA9IHJlZigwKTtcbiAgICBjb25zdCB0bXAgPSBFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlXG4gICAgICA/IEpTT04ucGFyc2UoRW1pdHQuZXZlbnRzRnJvbVNlcnZlci52YWx1ZSlcbiAgICAgIDogW107XG4gICAgaWYgKGlzZGxzb2NrKHRtcCkpIHtcbiAgICAgIGNvbnN0IHRtcHAgPSB0bXAucXVldWUuZmlsdGVyKFxuICAgICAgICAoZWxlKSA9PiBlbGUubWFuZ2FJZCA9PSBwYXJzZUludChgJHtyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX1gKVxuICAgICAgKTtcbiAgICAgIGRvd25sb2Fkc251bS52YWx1ZSA9IHRtcHAubGVuZ3RoO1xuICAgICAgZG93bmxvYWRzLnZhbHVlID0gdG1wcDtcbiAgICB9XG4gICAgaWYgKEVtaXR0ZXIudmFsdWUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIEVtaXR0LnNlbmRNc2coJ1NUQVRVUycpO1xuICAgIH1cblxuICAgIGNvbnN0IGZhYlBvcyA9IHJlZig8W251bWJlciwgbnVtYmVyXT5bMTgsIDE4XSk7XG4gICAgY29uc3QgZHJhZ2dpbmdGYWIgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXB0ZXJzLFxuICAgICAgY2hhcHRlcnNmaWx0LFxuICAgICAgZmlsdGVycyxcbiAgICAgIEVtaXR0ZXIsXG4gICAgICBkb3dubG9hZHNudW0sXG4gICAgICBkb3dubG9hZHMsXG4gICAgICBzZWxlY3RNb2RlOiByZWYoZmFsc2UpLFxuICAgICAgc2VsZWN0ZWQ6IHJlZig8bnVtYmVyW10+W10pLFxuICAgICAgZmFiUG9zLFxuICAgICAgZHJhZ2dpbmdGYWJcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLnNlbGVjdG1vZGUgLnEtaXRlbSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbjwvc3R5bGU+XG5cbjxzdHlsZT5cbi5GYWJjb25zaXN0IC5xLWJ0bl9fY29udGVudCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuPC9zdHlsZT5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlXG4gICAgY2xhc3M9XCJub3dyYXBcIlxuICAgIDpjbGFzcz1cIiRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMgPyBgY29sYCA6IGByb3dgXCJcbiAgICA6c3R5bGUtZm49XCJteVR3ZWFrXCJcbiAgPlxuICAgIDxtYW5nYUluZm9cbiAgICAgIEBpbmxpYj1cImdldG9ubGluZVwiXG4gICAgICA6bWFuZ2E9XCJtYW5nYVwiXG4gICAgICA6b2Zmc2V0PVwib2Zmc2V0XCJcbiAgICAgIGNsYXNzPVwiY29sLTZcIlxuICAgIC8+XG4gICAgPG1hbmdhQ2hhcHRlcnMgY2xhc3M9XCJjb2wtNlwiIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgbWFuZ2FJbmZvIGZyb20gJ3NyYy9jb21wb25lbnRzL21hbmdhL21hbmdhSW5mby52dWUnO1xuaW1wb3J0IG1hbmdhQ2hhcHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvY2hhcHRlckxpc3QudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ21hbmdhUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgbWFuZ2FJbmZvLCBtYW5nYUNoYXB0ZXJzIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRidXMub24oJ3VwZGF0ZU1hbmdhJywgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRvbmxpbmUoJ3RydWUnKTtcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLmdldG9ubGluZSgpO1xuICAgIHRoaXMuJGVtaXQoJ3NldFRpdGxlJywgdGhpcy5tYW5nYT8udGl0bGUgfHwgJ21hbmdhJyk7XG4gICAgaWYgKFxuICAgICAgbmV3IERhdGUodGhpcy5tYW5nYS5sYXN0RmV0Y2hlZEF0ICogMTAwMCkgPFxuICAgICAgbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gMSkpXG4gICAgKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgndXBkYXRlTWFuZ2EnKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRvbmxpbmUoVEYgPSAnZmFsc2UnLCByZXRyeSA9IDMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWFuZ2EgPSA8bWFuZ2E+KFxuICAgICAgICAgIGF3YWl0IHRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119Lz9vbmxpbmVGZXRjaD0ke1RGfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAocmV0cnkgPj0gMSkgYXdhaXQgdGhpcy5nZXRvbmxpbmUoVEYsIHJldHJ5IC0gMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IG1hbmdhID0gcmVmKDxtYW5nYT57fSk7XG4gICAgcmV0dXJuIHsgbWFuZ2EsIG9mZnNldDogcmVmKDxudW1iZXI+TnVtYmVyKCkpIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2hvaXN0ZWRfMiIsIl9ub3JtYWxpemVDbGFzcyIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF8zIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwicG9zaXRpb24iLCJMb2NhbFN0b3JhZ2UiLCJfd2l0aEN0eCIsIl93aXRoRGlyZWN0aXZlcyIsIl93aXRoTW9kaWZpZXJzIiwibWFuZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLFdBQVk7QUFDZixRQUFBLEtBQUssV0FBVyxLQUFLLE9BQU87QUFDOUIsV0FBSyxPQUFPO0FBQUEsSUFBQSxPQUNQO0FBQ0wsWUFBTSxVQUFVLEtBQUs7QUFBQSxRQUNuQixNQUFNLENBQUMsS0FBSyxTQUFTLEtBQUssS0FBSztBQUFBLFFBQy9CLE1BQU07QUFDSixjQUFJLENBQUMsS0FBSyxXQUFXLEtBQUssT0FBTztBQUMvQixpQkFBSyxPQUFPO0FBQ0o7VUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUFBO0FBQUEsSUFFSjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU0sWUFBWTtBQUNYLFdBQUEsUUFBUSxDQUFDLEtBQUs7QUFDbkIsVUFBSSxLQUFLLE9BQU87QUFDZCxjQUFNLEtBQUs7QUFBQSxVQUNULGlCQUFpQixLQUFLLE9BQU8sT0FBTztBQUFBLFFBQUE7QUFBQSxNQUN0QyxPQUNLO0FBQ0wsY0FBTSxLQUFLO0FBQUEsVUFDVCxpQkFBaUIsS0FBSyxPQUFPLE9BQU87QUFBQSxVQUNwQztBQUFBLFlBQ0UsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUFBO0FBQUEsTUFFSjtBQUNBLFdBQUssTUFBTSxPQUFPO0FBQUEsSUFDcEI7QUFBQSxJQUNBLFNB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
