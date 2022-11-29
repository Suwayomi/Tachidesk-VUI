import { Q as QIcon } from "./QIcon.aa032244.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QLinearProgress } from "./QLinearProgress.b53747dd.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QList } from "./QList.e87441cd.js";
import { u as useDarkProps, a as useDark } from "./use-dark.63b90c22.js";
import { c as createComponent, h as hSlot, a as hMergeSlot } from "./QSpinner.6511ee07.js";
import { c as computed, h, g as getCurrentInstance, r as ref, w as watch, ao as onBeforeMount, B as onMounted, K as onActivated, L as onDeactivated, o as onBeforeUnmount, S as listenOpts, _ as _export_sfc, f as defineComponent, j as openBlock, k as createBlock, m as withCtx, y as createElementBlock, p as createCommentVNode, D as withDirectives, n as createVNode, q as createTextVNode, t as toDisplayString, v as createBaseVNode, aj as withModifiers } from "./index.75e4774b.js";
import { u as useVirtualScrollProps, a as useVirtualScroll } from "./use-virtual-scroll.d842f9a0.js";
import { c as getScrollTarget } from "./scroll.51a1aea4.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { u as useDlSock } from "./useDlSock.1248d29f.js";
import { p as isdlsock } from "./models.4021c4b7.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import "./rtl.b51694b1.js";
import "./dom.3bfc77a6.js";
import "./use-timeout.4d745afd.js";
import "./use-transition.34947ede.js";
import "./focus-manager.32f8d49a.js";
const separatorValues = ["horizontal", "vertical", "cell", "none"];
var QMarkupTable = createComponent({
  name: "QMarkupTable",
  props: {
    ...useDarkProps,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => separatorValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(
      () => `q-markup-table q-table__container q-table__card q-table--${props.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "") + (props.square === true ? " q-table--square" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "")
    );
    return () => h("div", {
      class: classes.value
    }, [
      h("table", { class: "q-table" }, hSlot(slots.default))
    ]);
  }
});
function getTableMiddle(props, content) {
  return h("div", props, [
    h("table", { class: "q-table" }, content)
  ]);
}
const comps = {
  list: QList,
  table: QMarkupTable
};
const typeOptions = ["list", "table", "__qtable"];
var QVirtualScroll = createComponent({
  name: "QVirtualScroll",
  props: {
    ...useVirtualScrollProps,
    type: {
      type: String,
      default: "list",
      validator: (v) => typeOptions.includes(v)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: {
      default: void 0
    }
  },
  setup(props, { slots, attrs }) {
    let localScrollTarget;
    const rootRef = ref(null);
    const virtualScrollLength = computed(() => props.itemsSize >= 0 && props.itemsFn !== void 0 ? parseInt(props.itemsSize, 10) : Array.isArray(props.items) ? props.items.length : 0);
    const {
      virtualScrollSliceRange,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl
    });
    const virtualScrollScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const mapFn = (item, i) => ({
        index: virtualScrollSliceRange.value.from + i,
        item
      });
      return props.itemsFn === void 0 ? props.items.slice(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to).map(mapFn) : props.itemsFn(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to - virtualScrollSliceRange.value.from).map(mapFn);
    });
    const classes = computed(
      () => "q-virtual-scroll q-virtual-scroll" + (props.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (props.scrollTarget !== void 0 ? "" : " scroll")
    );
    const attributes = computed(() => props.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    watch(virtualScrollLength, () => {
      localResetVirtualScroll();
    });
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function getVirtualScrollEl() {
      return rootRef.value.$el || rootRef.value;
    }
    function getVirtualScrollTarget() {
      return localScrollTarget;
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(getVirtualScrollEl(), props.scrollTarget);
      localScrollTarget.addEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
        localScrollTarget = void 0;
      }
    }
    function __getVirtualChildren() {
      let child = padVirtualScroll(
        props.type === "list" ? "div" : "tbody",
        virtualScrollScope.value.map(slots.default)
      );
      if (slots.before !== void 0) {
        child = slots.before().concat(child);
      }
      return hMergeSlot(slots.after, child);
    }
    onBeforeMount(() => {
      localResetVirtualScroll();
    });
    onMounted(() => {
      configureScrollTarget();
    });
    onActivated(() => {
      configureScrollTarget();
    });
    onDeactivated(() => {
      unconfigureScrollTarget();
    });
    onBeforeUnmount(() => {
      unconfigureScrollTarget();
    });
    return () => {
      if (slots.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return props.type === "__qtable" ? getTableMiddle(
        { ref: rootRef, class: "q-table__middle " + classes.value },
        __getVirtualChildren()
      ) : h(comps[props.type], {
        ...attrs,
        ref: rootRef,
        class: [attrs.class, classes.value],
        ...attributes.value
      }, __getVirtualChildren);
    };
  }
});
const _sfc_main = defineComponent({
  created() {
    this.$bus.on("DLFilter", (e) => {
      this.filtering = e;
    });
  },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    async delet(download2) {
      this.$fetch(
        `/api/v1/download/${download2.mangaId}/chapter/${download2.chapterIndex}`,
        { method: "DELETE" }
      );
      this.$fetch(
        `/api/v1/manga/${download2.mangaId}/chapter/${download2.chapterIndex}`,
        { method: "DELETE" }
      );
    },
    dontshowagain() {
      this.$q.localStorage.set("dontshowagainWH", true);
    }
  },
  watch: {
    "Emitter.eventsFromServer"(val) {
      const tmp = JSON.parse(val);
      if (isdlsock(tmp)) {
        this.downloads = tmp.queue;
      }
    }
  },
  computed: {
    downlfilt() {
      if (this.filtering.length) {
        return this.downloads.filter((e) => this.filtering.includes(e.state));
      }
      return this.downloads;
    }
  },
  setup(_props, { emit }) {
    emit("setTitle", "Downloads");
    const $q = useQuasar();
    const Emitt = useDlSock();
    const Emitter = ref(Emitt);
    const base = $q.localStorage.getItem("baseUrl");
    const downloads = ref([]);
    const tmp = Emitt.eventsFromServer.value ? JSON.parse(Emitt.eventsFromServer.value) : [];
    if (isdlsock(tmp)) {
      downloads.value = tmp.queue;
    }
    if (Emitter.value.isConnected) {
      Emitt.sendMsg("STATUS");
    }
    const goodBase = ref(
      new URL(base).origin != location.origin && !$q.localStorage.getItem("dontshowagainWH") && !!$q.localStorage.getItem("auth")
    );
    return {
      downloads,
      goodBase,
      Emitter,
      filtering: ref([])
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "col-6" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", null, " 1. Move this UI to the same origin as the server (Recomended) ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", null, "replace the default webui files with this ones files", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", null, "or some reverse proxy jank", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, "2. dissable authentication on the webhook url", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", null, "/api/v1/downloads", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", null, "with some reverse proxy jank", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", null, "3. dissable authentication", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", null, "in server configs", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", null, "4. Go to the default webUI and login", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", null, "per browser", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", null, " this is a temporary fix as it will clear after a month (i think) ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, {
    class: "flex items-center justify-center",
    "style-fn": _ctx.myTweak
  }, {
    default: withCtx(() => [
      !_ctx.downloads.length && _ctx.Emitter.isConnected ? (openBlock(), createElementBlock("div", _hoisted_1, "No Downloads")) : createCommentVNode("", true),
      !_ctx.downlfilt.length && _ctx.downloads.length && _ctx.Emitter.isConnected ? (openBlock(), createElementBlock("div", _hoisted_2, " No Downloads fit filter ")) : createCommentVNode("", true),
      _ctx.downlfilt.length ? (openBlock(), createBlock(QVirtualScroll, {
        key: 2,
        items: _ctx.downlfilt,
        class: "self-start",
        style: { "flex": "auto", "height": "100%" },
        dark: _ctx.$q.dark.isActive
      }, {
        default: withCtx(({ item }) => [
          withDirectives((openBlock(), createBlock(QItem, {
            clickable: "",
            class: "q-pa-lg"
          }, {
            default: withCtx(() => [
              createVNode(QItemSection, { avatar: "" }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    name: "drag_handle",
                    size: "sm"
                  })
                ]),
                _: 1
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { class: "text-weight-medium text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.manga.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemLabel, {
                    caption: "",
                    class: ""
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, " Chapter " + toDisplayString(item.chapterIndex) + " (" + toDisplayString((item.progress * 100).toFixed(2)) + "%) => state: " + toDisplayString(item.state), 1),
                      createVNode(QLinearProgress, {
                        value: item.progress,
                        style: { "width": "100%", "max-width": "500px" }
                      }, null, 8, ["value"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode(QItemSection, { avatar: "" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    onClick: [
                      _cache[0] || (_cache[0] = withModifiers(() => {
                      }, ["prevent"])),
                      ($event) => _ctx.delet(item)
                    ],
                    round: "",
                    flat: "",
                    icon: "delete",
                    class: "flex-right"
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024)), [
            [Ripple]
          ])
        ]),
        _: 1
      }, 8, ["items", "dark"])) : createCommentVNode("", true),
      createVNode(QDialog, {
        modelValue: _ctx.goodBase,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.goodBase = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "min-width": "350px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "" }, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, { class: "text-h6 text-negative" }, {
                            default: withCtx(() => [
                              createTextVNode(" Downloads webhook may not work with authentication. ")
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { class: "text-info q-pt-lg" }, {
                            default: withCtx(() => [
                              _hoisted_4
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, {
                            caption: "",
                            class: "text-info"
                          }, {
                            default: withCtx(() => [
                              _hoisted_5,
                              _hoisted_6
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { class: "text-info q-pt-lg" }, {
                            default: withCtx(() => [
                              _hoisted_7
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, {
                            caption: "",
                            class: "text-info"
                          }, {
                            default: withCtx(() => [
                              _hoisted_8,
                              _hoisted_9
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { class: "text-info q-pt-lg" }, {
                            default: withCtx(() => [
                              _hoisted_10
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, {
                            caption: "",
                            class: "text-info"
                          }, {
                            default: withCtx(() => [
                              _hoisted_11
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { class: "text-info q-pt-lg" }, {
                            default: withCtx(() => [
                              _hoisted_12
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, {
                            caption: "",
                            class: "text-info"
                          }, {
                            default: withCtx(() => [
                              _hoisted_13,
                              _hoisted_14
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
              createVNode(QCardActions, {
                align: "right",
                class: "text-primary"
              }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    label: "Ok"
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    label: "Dont show again",
                    onClick: _ctx.dontshowagain
                  }, null, 8, ["onClick"]), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var downloadsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "downloadsPage.vue"]]);
export { downloadsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWRzUGFnZS5mMTRjNmJhNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9tYXJrdXAtdGFibGUvUU1hcmt1cFRhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9RVmlydHVhbFNjcm9sbC5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9kb3dubG9hZHNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8ZGl2IHYtaWY9XCIhZG93bmxvYWRzLmxlbmd0aCAmJiBFbWl0dGVyLmlzQ29ubmVjdGVkXCI+Tm8gRG93bmxvYWRzPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiIWRvd25sZmlsdC5sZW5ndGggJiYgZG93bmxvYWRzLmxlbmd0aCAmJiBFbWl0dGVyLmlzQ29ubmVjdGVkXCI+XG4gICAgICBObyBEb3dubG9hZHMgZml0IGZpbHRlclxuICAgIDwvZGl2PlxuICAgIDxxLXZpcnR1YWwtc2Nyb2xsXG4gICAgICB2LWlmPVwiZG93bmxmaWx0Lmxlbmd0aFwiXG4gICAgICA6aXRlbXM9XCJkb3dubGZpbHRcIlxuICAgICAgdi1zbG90PVwieyBpdGVtIH1cIlxuICAgICAgY2xhc3M9XCJzZWxmLXN0YXJ0XCJcbiAgICAgIHN0eWxlPVwiZmxleDogYXV0bzsgaGVpZ2h0OiAxMDAlXCJcbiAgICAgIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiXG4gICAgPlxuICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgY2xhc3M9XCJxLXBhLWxnXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiBuYW1lPVwiZHJhZ19oYW5kbGVcIiBzaXplPVwic21cIj48L3EtaWNvbj5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSB0ZXh0LWg2XCI+XG4gICAgICAgICAgICB7eyBpdGVtLm1hbmdhLnRpdGxlIH19XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgQ2hhcHRlciB7eyBpdGVtLmNoYXB0ZXJJbmRleCB9fSAoe3tcbiAgICAgICAgICAgICAgICAoaXRlbS5wcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICB9fSUpID0+IHN0YXRlOlxuICAgICAgICAgICAgICB7eyBpdGVtLnN0YXRlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzc1xuICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLnByb2dyZXNzXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiA1MDBweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgIEBjbGljaz1cImRlbGV0KGl0ZW0pXCJcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBpY29uPVwiZGVsZXRlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1yaWdodFwiXG4gICAgICAgICAgPjwvcS1idG4+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtdmlydHVhbC1zY3JvbGw+XG4gICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJnb29kQmFzZVwiIHBlcnNpc3RlbnQ+XG4gICAgICA8cS1jYXJkIHN0eWxlPVwibWluLXdpZHRoOiAzNTBweFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJcIlxuICAgICAgICAgID48cS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC1oNiB0ZXh0LW5lZ2F0aXZlXCI+XG4gICAgICAgICAgICAgICAgRG93bmxvYWRzIHdlYmhvb2sgbWF5IG5vdCB3b3JrIHdpdGggYXV0aGVudGljYXRpb24uXG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC1pbmZvIHEtcHQtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgMS4gTW92ZSB0aGlzIFVJIHRvIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgc2VydmVyIChSZWNvbWVuZGVkKVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwidGV4dC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5yZXBsYWNlIHRoZSBkZWZhdWx0IHdlYnVpIGZpbGVzIHdpdGggdGhpcyBvbmVzIGZpbGVzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5vciBzb21lIHJldmVyc2UgcHJveHkgamFuazwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtaW5mbyBxLXB0LWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdj4yLiBkaXNzYWJsZSBhdXRoZW50aWNhdGlvbiBvbiB0aGUgd2ViaG9vayB1cmw8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cInRleHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+L2FwaS92MS9kb3dubG9hZHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PndpdGggc29tZSByZXZlcnNlIHByb3h5IGphbms8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWluZm8gcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+My4gZGlzc2FibGUgYXV0aGVudGljYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cInRleHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+aW4gc2VydmVyIGNvbmZpZ3M8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWluZm8gcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+NC4gR28gdG8gdGhlIGRlZmF1bHQgd2ViVUkgYW5kIGxvZ2luPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJ0ZXh0LWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PnBlciBicm93c2VyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHRoaXMgaXMgYSB0ZW1wb3JhcnkgZml4IGFzIGl0IHdpbGwgY2xlYXIgYWZ0ZXIgYSBtb250aCAoaVxuICAgICAgICAgICAgICAgICAgdGhpbmspXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgIDxxLWJ0biBmbGF0IGxhYmVsPVwiT2tcIiB2LWNsb3NlLXBvcHVwIC8+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBsYWJlbD1cIkRvbnQgc2hvdyBhZ2FpblwiXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICBAY2xpY2s9XCJkb250c2hvd2FnYWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLWRpYWxvZz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHVzZURsU29jayBmcm9tICdzcmMvY29tcG9uZW50cy9kb3dubG9hZHMvdXNlRGxTb2NrJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGRvd25sb2FkLCBkbHNvY2ssIGlzZGxzb2NrIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJGJ1cy5vbignRExGaWx0ZXInLCAoZTogc3RyaW5nW10pID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyaW5nID0gZTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGV0KGRvd25sb2FkOiBkb3dubG9hZCkge1xuICAgICAgdGhpcy4kZmV0Y2goXG4gICAgICAgIGAvYXBpL3YxL2Rvd25sb2FkLyR7ZG93bmxvYWQubWFuZ2FJZH0vY2hhcHRlci8ke2Rvd25sb2FkLmNoYXB0ZXJJbmRleH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0RFTEVURScgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke2Rvd25sb2FkLm1hbmdhSWR9L2NoYXB0ZXIvJHtkb3dubG9hZC5jaGFwdGVySW5kZXh9YCxcbiAgICAgICAgeyBtZXRob2Q6ICdERUxFVEUnIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBkb250c2hvd2FnYWluKCkge1xuICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCdkb250c2hvd2FnYWluV0gnLCB0cnVlKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJ0VtaXR0ZXIuZXZlbnRzRnJvbVNlcnZlcicodmFsKSB7XG4gICAgICBjb25zdCB0bXAgPSA8ZGxzb2NrPkpTT04ucGFyc2UodmFsKTtcbiAgICAgIGlmIChpc2Rsc29jayh0bXApKSB7XG4gICAgICAgIHRoaXMuZG93bmxvYWRzID0gPGRvd25sb2FkW10+dG1wLnF1ZXVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBkb3dubGZpbHQoKTogZG93bmxvYWRbXSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJpbmcubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvd25sb2Fkcy5maWx0ZXIoKGUpID0+IHRoaXMuZmlsdGVyaW5nLmluY2x1ZGVzKGUuc3RhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvd25sb2FkcztcbiAgICB9XG4gIH0sXG4gIHNldHVwKF9wcm9wcywgeyBlbWl0IH0pIHtcbiAgICBlbWl0KCdzZXRUaXRsZScsICdEb3dubG9hZHMnKTtcbiAgICBjb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuICAgIGNvbnN0IEVtaXR0ID0gdXNlRGxTb2NrKCk7XG4gICAgY29uc3QgRW1pdHRlciA9IHJlZihFbWl0dCk7XG4gICAgY29uc3QgYmFzZSA9ICRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYXNlVXJsJykgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgZG93bmxvYWRzID0gcmVmKDxkb3dubG9hZFtdPltdKTtcbiAgICBjb25zdCB0bXAgPSBFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlXG4gICAgICA/IEpTT04ucGFyc2UoRW1pdHQuZXZlbnRzRnJvbVNlcnZlci52YWx1ZSlcbiAgICAgIDogW107XG4gICAgaWYgKGlzZGxzb2NrKHRtcCkpIHtcbiAgICAgIGRvd25sb2Fkcy52YWx1ZSA9IDxkb3dubG9hZFtdPnRtcC5xdWV1ZTtcbiAgICB9XG4gICAgaWYgKEVtaXR0ZXIudmFsdWUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIEVtaXR0LnNlbmRNc2coJ1NUQVRVUycpO1xuICAgIH1cblxuICAgIGNvbnN0IGdvb2RCYXNlID0gcmVmKFxuICAgICAgbmV3IFVSTChiYXNlKS5vcmlnaW4gIT0gbG9jYXRpb24ub3JpZ2luICYmXG4gICAgICAgICEkcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9udHNob3dhZ2FpbldIJykgJiZcbiAgICAgICAgISEkcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgZG93bmxvYWRzLFxuICAgICAgZ29vZEJhc2UsXG4gICAgICBFbWl0dGVyLFxuICAgICAgZmlsdGVyaW5nOiByZWYoPHN0cmluZ1tdPltdKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiZG93bmxvYWQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX3dpdGhDdHgiLCJfd2l0aERpcmVjdGl2ZXMiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoTW9kaWZpZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLE1BQU0sa0JBQWtCLENBQUUsY0FBYyxZQUFZLFFBQVEsTUFBUTtBQUVwRSxJQUFBLGVBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBRVgsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04s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
