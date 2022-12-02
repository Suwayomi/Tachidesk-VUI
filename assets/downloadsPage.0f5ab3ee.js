import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QLinearProgress } from "./QLinearProgress.06ab1855.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QList } from "./QList.23ba57c4.js";
import { u as useDarkProps, a as useDark } from "./use-dark.bc291eea.js";
import { c as createComponent, h as hSlot, a as hMergeSlot } from "./QSpinner.0d412098.js";
import { c as computed, h, g as getCurrentInstance, r as ref, w as watch, an as onBeforeMount, z as onMounted, I as onActivated, J as onDeactivated, o as onBeforeUnmount, Q as listenOpts, _ as _export_sfc, d as defineComponent, f as openBlock, j as createBlock, k as withCtx, v as createElementBlock, n as createCommentVNode, B as withDirectives, m as createVNode, p as createTextVNode, t as toDisplayString, u as createBaseVNode, ai as withModifiers } from "./index.0b61810d.js";
import { u as useVirtualScrollProps, a as useVirtualScroll } from "./use-virtual-scroll.083e959b.js";
import { c as getScrollTarget } from "./scroll.34fac392.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { u as useDlSock } from "./useDlSock.b6f1d62c.js";
import { p as isdlsock } from "./models.d7e94ac2.js";
import { u as useQuasar } from "./use-quasar.561ee09f.js";
import { storeGet } from "./StoreStuff.f5900537.js";
import "./rtl.b51694b1.js";
import "./dom.fd94eb85.js";
import "./use-timeout.99cd911c.js";
import "./use-transition.65db8379.js";
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
  emits: ["set-title"],
  setup(_props, { emit }) {
    emit("set-title", "Downloads");
    const $q = useQuasar();
    const Emitt = useDlSock();
    const Emitter = ref(Emitt);
    const base = storeGet("baseUrl", location.origin);
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
  },
  computed: {
    downlfilt() {
      if (this.filtering.length) {
        return this.downloads.filter((e) => this.filtering.includes(e.state));
      }
      return this.downloads;
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
      this.$api.delete(
        `/api/v1/download/${download2.mangaId}/chapter/${download2.chapterIndex}`
      );
      this.$api.delete(
        `/api/v1/manga/${download2.mangaId}/chapter/${download2.chapterIndex}`,
        { method: "DELETE" }
      );
    },
    dontshowagain() {
      this.$q.localStorage.set("dontshowagainWH", true);
    }
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
        style: { "flex": "auto", "height": "100%" }
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
                    round: "",
                    flat: "",
                    icon: "delete",
                    class: "flex-right",
                    onClick: [
                      _cache[0] || (_cache[0] = withModifiers(() => {
                      }, ["prevent"])),
                      ($event) => _ctx.delet(item)
                    ]
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
      }, 8, ["items"])) : createCommentVNode("", true),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWRzUGFnZS4wZjVhYjNlZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9tYXJrdXAtdGFibGUvUU1hcmt1cFRhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9RVmlydHVhbFNjcm9sbC5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9kb3dubG9hZHNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8ZGl2IHYtaWY9XCIhZG93bmxvYWRzLmxlbmd0aCAmJiBFbWl0dGVyLmlzQ29ubmVjdGVkXCI+Tm8gRG93bmxvYWRzPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiIWRvd25sZmlsdC5sZW5ndGggJiYgZG93bmxvYWRzLmxlbmd0aCAmJiBFbWl0dGVyLmlzQ29ubmVjdGVkXCI+XG4gICAgICBObyBEb3dubG9hZHMgZml0IGZpbHRlclxuICAgIDwvZGl2PlxuICAgIDxxLXZpcnR1YWwtc2Nyb2xsXG4gICAgICB2LWlmPVwiZG93bmxmaWx0Lmxlbmd0aFwiXG4gICAgICB2LXNsb3Q9XCJ7IGl0ZW0gfVwiXG4gICAgICA6aXRlbXM9XCJkb3dubGZpbHRcIlxuICAgICAgY2xhc3M9XCJzZWxmLXN0YXJ0XCJcbiAgICAgIHN0eWxlPVwiZmxleDogYXV0bzsgaGVpZ2h0OiAxMDAlXCJcbiAgICA+XG4gICAgICA8cS1pdGVtIHYtcmlwcGxlIGNsaWNrYWJsZSBjbGFzcz1cInEtcGEtbGdcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkcmFnX2hhbmRsZVwiIHNpemU9XCJzbVwiPjwvcS1pY29uPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHRleHQtaDZcIj5cbiAgICAgICAgICAgIHt7IGl0ZW0ubWFuZ2EudGl0bGUgfX1cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICBDaGFwdGVyIHt7IGl0ZW0uY2hhcHRlckluZGV4IH19ICh7e1xuICAgICAgICAgICAgICAgIChpdGVtLnByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIH19JSkgPT4gc3RhdGU6XG4gICAgICAgICAgICAgIHt7IGl0ZW0uc3RhdGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHEtbGluZWFyLXByb2dyZXNzXG4gICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW0ucHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDUwMHB4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgaWNvbj1cImRlbGV0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXgtcmlnaHRcIlxuICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgIEBjbGljaz1cImRlbGV0KGl0ZW0pXCJcbiAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS12aXJ0dWFsLXNjcm9sbD5cbiAgICA8cS1kaWFsb2cgdi1tb2RlbD1cImdvb2RCYXNlXCIgcGVyc2lzdGVudD5cbiAgICAgIDxxLWNhcmQgc3R5bGU9XCJtaW4td2lkdGg6IDM1MHB4XCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cIlwiXG4gICAgICAgICAgPjxxLWl0ZW0+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWg2IHRleHQtbmVnYXRpdmVcIj5cbiAgICAgICAgICAgICAgICBEb3dubG9hZHMgd2ViaG9vayBtYXkgbm90IHdvcmsgd2l0aCBhdXRoZW50aWNhdGlvbi5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWluZm8gcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAxLiBNb3ZlIHRoaXMgVUkgdG8gdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBzZXJ2ZXIgKFJlY29tZW5kZWQpXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gY2xhc3M9XCJ0ZXh0LWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PnJlcGxhY2UgdGhlIGRlZmF1bHQgd2VidWkgZmlsZXMgd2l0aCB0aGlzIG9uZXMgZmlsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pm9yIHNvbWUgcmV2ZXJzZSBwcm94eSBqYW5rPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC1pbmZvIHEtcHQtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PjIuIGRpc3NhYmxlIGF1dGhlbnRpY2F0aW9uIG9uIHRoZSB3ZWJob29rIHVybDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwidGV4dC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj4vYXBpL3YxL2Rvd25sb2FkczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+d2l0aCBzb21lIHJldmVyc2UgcHJveHkgamFuazwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtaW5mbyBxLXB0LWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdj4zLiBkaXNzYWJsZSBhdXRoZW50aWNhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwidGV4dC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5pbiBzZXJ2ZXIgY29uZmlnczwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtaW5mbyBxLXB0LWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdj40LiBHbyB0byB0aGUgZGVmYXVsdCB3ZWJVSSBhbmQgbG9naW48L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBjbGFzcz1cInRleHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+cGVyIGJyb3dzZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgdGhpcyBpcyBhIHRlbXBvcmFyeSBmaXggYXMgaXQgd2lsbCBjbGVhciBhZnRlciBhIG1vbnRoIChpXG4gICAgICAgICAgICAgICAgICB0aGluaylcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgPHEtYnRuIHYtY2xvc2UtcG9wdXAgZmxhdCBsYWJlbD1cIk9rXCIgLz5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGxhYmVsPVwiRG9udCBzaG93IGFnYWluXCJcbiAgICAgICAgICAgIEBjbGljaz1cImRvbnRzaG93YWdhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgdXNlRGxTb2NrIGZyb20gJ3NyYy9jb21wb25lbnRzL2Rvd25sb2Fkcy91c2VEbFNvY2snO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZG93bmxvYWQsIGRsc29jaywgaXNkbHNvY2sgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBzdG9yZUdldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBlbWl0czogWydzZXQtdGl0bGUnXSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldC10aXRsZScsICdEb3dubG9hZHMnKTtcbiAgICBjb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuICAgIGNvbnN0IEVtaXR0ID0gdXNlRGxTb2NrKCk7XG4gICAgY29uc3QgRW1pdHRlciA9IHJlZihFbWl0dCk7XG4gICAgY29uc3QgYmFzZSA9IHN0b3JlR2V0KCdiYXNlVXJsJywgbG9jYXRpb24ub3JpZ2luKSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCBkb3dubG9hZHMgPSByZWYoPGRvd25sb2FkW10+W10pO1xuICAgIGNvbnN0IHRtcCA9IEVtaXR0LmV2ZW50c0Zyb21TZXJ2ZXIudmFsdWVcbiAgICAgID8gSlNPTi5wYXJzZShFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlKVxuICAgICAgOiBbXTtcbiAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgZG93bmxvYWRzLnZhbHVlID0gPGRvd25sb2FkW10+dG1wLnF1ZXVlO1xuICAgIH1cbiAgICBpZiAoRW1pdHRlci52YWx1ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgRW1pdHQuc2VuZE1zZygnU1RBVFVTJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ29vZEJhc2UgPSByZWYoXG4gICAgICBuZXcgVVJMKGJhc2UpLm9yaWdpbiAhPSBsb2NhdGlvbi5vcmlnaW4gJiZcbiAgICAgICAgISRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb250c2hvd2FnYWluV0gnKSAmJlxuICAgICAgICAhISRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJylcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBkb3dubG9hZHMsXG4gICAgICBnb29kQmFzZSxcbiAgICAgIEVtaXR0ZXIsXG4gICAgICBmaWx0ZXJpbmc6IHJlZig8c3RyaW5nW10+W10pLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZG93bmxmaWx0KCk6IGRvd25sb2FkW10ge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3dubG9hZHMuZmlsdGVyKChlKSA9PiB0aGlzLmZpbHRlcmluZy5pbmNsdWRlcyhlLnN0YXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kb3dubG9hZHM7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAnRW1pdHRlci5ldmVudHNGcm9tU2VydmVyJyh2YWwpIHtcbiAgICAgIGNvbnN0IHRtcCA9IDxkbHNvY2s+SlNPTi5wYXJzZSh2YWwpO1xuICAgICAgaWYgKGlzZGxzb2NrKHRtcCkpIHtcbiAgICAgICAgdGhpcy5kb3dubG9hZHMgPSA8ZG93bmxvYWRbXT50bXAucXVldWU7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRidXMub24oJ0RMRmlsdGVyJywgKGU6IHN0cmluZ1tdKSA9PiB7XG4gICAgICB0aGlzLmZpbHRlcmluZyA9IGU7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCcsXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgZGVsZXQoZG93bmxvYWQ6IGRvd25sb2FkKSB7XG4gICAgICB0aGlzLiRhcGkuZGVsZXRlKFxuICAgICAgICBgL2FwaS92MS9kb3dubG9hZC8ke2Rvd25sb2FkLm1hbmdhSWR9L2NoYXB0ZXIvJHtkb3dubG9hZC5jaGFwdGVySW5kZXh9YFxuICAgICAgKTtcbiAgICAgIHRoaXMuJGFwaS5kZWxldGUoXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7ZG93bmxvYWQubWFuZ2FJZH0vY2hhcHRlci8ke2Rvd25sb2FkLmNoYXB0ZXJJbmRleH1gLFxuICAgICAgICB7IG1ldGhvZDogJ0RFTEVURScgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIGRvbnRzaG93YWdhaW4oKSB7XG4gICAgICB0aGlzLiRxLmxvY2FsU3RvcmFnZS5zZXQoJ2RvbnRzaG93YWdhaW5XSCcsIHRydWUpO1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImRvd25sb2FkIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl93aXRoQ3R4IiwiX3dpdGhEaXJlY3RpdmVzIiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aE1vZGlmaWVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsTUFBTSxrQkFBa0IsQ0FBRSxjQUFjLFlBQVksUUFBUSxNQUFRO0FBRXBFLElBQUEsZUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFFWCxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXLE9BQUssZ0JBQWdCLFNBQVMsQ0FBQztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUN2QixVQUFNLEtBQUssbUJBQW9CO0FBQy9CLFVBQU0sU0FBUyxRQUFRLE9BQU8sR0FBRyxNQUFNLEVBQUU7QUFFekMsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2Qiw0REFDZ0IsTUFBTSx5QkFDbkIsT0FBTyxVQUFVLE9BQU8sOENBQThDLE9BQ3RFLE1BQU0sVUFBVSxPQUFPLG9CQUFvQixPQUMzQyxNQUFNLFNBQVMsT0FBTyxtQkFBbUIsT0FDekMsTUFBTSxhQUFhLE9BQU8sdUJBQXVCLE9BQ2pELE1BQU0sV0FBVyxPQUFPLHFCQUFxQixPQUM3QyxNQUFNLGNBQWMsUUFBUSxzQkFBc0I7QUFBQSxJQUN0RDtBQUVELFdBQU8sTUFBTSxFQUFFLE9BQU87QUFBQSxNQUNwQixPQUFPLFFBQVE7QUFBQSxJQUNyQixHQUFPO0FBQUEsTUFDRCxFQUFFLFNBQVMsRUFBRSxPQUFPLFVBQVcsR0FBRSxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsSUFDM0QsQ0FBSztBQUFBLEVBQ0Y7QUFDSCxDQUFDO0FDL0NjLFNBQUEsZUFBVSxPQUFPLFNBQVM7QUFDdkMsU0FBTyxFQUFFLE9BQU8sT0FBTztBQUFBLElBQ3JCLEVBQUUsU0FBUyxFQUFFLE9BQU8sVUFBUyxHQUFJLE9BQU87QUFBQSxFQUM1QyxDQUFHO0FBQ0g7QUNPQSxNQUFNLFFBQVE7QUFBQSxFQUNaLE1BQU07QUFBQSxFQUNOLE9BQU87QUFDVDtBQUVBLE1BQU0sY0FBYyxDQUFFLFFBQVEsU0FBUyxVQUFZO0FBRW5ELElBQUEsaUJBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVyxPQUFLLFlBQVksU0FBUyxDQUFDO0FBQUEsSUFDdkM7QUFBQSxJQUVELE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFNBQVMsTUFBTSxDQUFFO0FBQUEsSUFDbEI7QUFBQSxJQUVELFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUVYLGNBQWM7QUFBQSxNQUNaLFNBQVM7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsT0FBTyxNQUFLLEdBQUk7QUFDOUIsUUFBSTtBQUNKLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFFeEIsVUFBTSxzQkFBc0IsU0FBUyxNQUNuQyxNQUFNLGFBQWEsS0FBSyxNQUFNLFlBQVksU0FDdEMsU0FBUyxNQUFNLFdBQVcsRUFBRSxJQUMzQixNQUFNLFFBQVEsTUFBTSxLQUFLLElBQUksTUFBTSxNQUFNLFNBQVMsQ0FDeEQ7QUFFRCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0QsSUFBRyxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLE1BQXFCO0FBQUEsTUFBd0I7QUFBQSxJQUNuRCxDQUFLO0FBRUQsVUFBTSxxQkFBcUIsU0FBUyxNQUFNO0FBQ3hDLFVBQUksb0JBQW9CLFVBQVUsR0FBRztBQUNuQyxlQUFPLENBQUU7QUFBQSxNQUNWO0FBRUQsWUFBTSxRQUFRLENBQUMsTUFBTSxPQUFPO0FBQUEsUUFDMUIsT0FBTyx3QkFBd0IsTUFBTSxPQUFPO0FBQUEsUUFDNUM7QUFBQSxNQUNSO0FBRU0sYUFBTyxNQUFNLFlBQVksU0FDckIsTUFBTSxNQUFNLE1BQU0sd0JBQXdCLE1BQU0sTUFBTSx3QkFBd0IsTUFBTSxFQUFFLEVBQUUsSUFBSSxLQUFLLElBQ2pHLE1BQU0sUUFBUSx3QkFBd0IsTUFBTSxNQUFNLHdCQUF3QixNQUFNLEtBQUssd0JBQXdCLE1BQU0sSUFBSSxFQUFFLElBQUksS0FBSztBQUFBLElBQzVJLENBQUs7QUFFRCxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLHVDQUF1QyxNQUFNLDRCQUE0QixPQUFPLGlCQUFpQixpQkFDOUYsTUFBTSxpQkFBaUIsU0FBUyxLQUFLO0FBQUEsSUFDekM7QUFFRCxVQUFNLGFBQWEsU0FBUyxNQUMxQixNQUFNLGlCQUFpQixTQUFTLENBQUEsSUFBSyxFQUFFLFVBQVUsRUFBRyxDQUNyRDtBQUVELFVBQU0scUJBQXFCLE1BQU07QUFDL0IsOEJBQXlCO0FBQUEsSUFDL0IsQ0FBSztBQUVELFVBQU0sTUFBTSxNQUFNLGNBQWMsTUFBTTtBQUNwQyw4QkFBeUI7QUFDekIsNEJBQXVCO0FBQUEsSUFDN0IsQ0FBSztBQUVELGFBQVMscUJBQXNCO0FBQzdCLGFBQU8sUUFBUSxNQUFNLE9BQU8sUUFBUTtBQUFBLElBQ3JDO0FBRUQsYUFBUyx5QkFBMEI7QUFDakMsYUFBTztBQUFBLElBQ1I7QUFFRCxhQUFTLHdCQUF5QjtBQUNoQywwQkFBb0IsZ0JBQWdCLHNCQUFzQixNQUFNLFlBQVk7QUFDNUUsd0JBQWtCLGlCQUFpQixVQUFVLG9CQUFvQixXQUFXLE9BQU87QUFBQSxJQUNwRjtBQUVELGFBQVMsMEJBQTJCO0FBQ2xDLFVBQUksc0JBQXNCLFFBQVE7QUFDaEMsMEJBQWtCLG9CQUFvQixVQUFVLG9CQUFvQixXQUFXLE9BQU87QUFDdEYsNEJBQW9CO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBRUQsYUFBUyx1QkFBd0I7QUFDL0IsVUFBSSxRQUFRO0FBQUEsUUFDVixNQUFNLFNBQVMsU0FBUyxRQUFRO0FBQUEsUUFDaEMsbUJBQW1CLE1BQU0sSUFBSSxNQUFNLE9BQU87QUFBQSxNQUMzQztBQUVELFVBQUksTUFBTSxXQUFXLFFBQVE7QUFDM0IsZ0JBQVEsTUFBTSxTQUFTLE9BQU8sS0FBSztBQUFBLE1BQ3BDO0FBRUQsYUFBTyxXQUFXLE1BQU0sT0FBTyxLQUFLO0FBQUEsSUFDckM7QUFFRCxrQkFBYyxNQUFNO0FBQ2xCLDhCQUF5QjtBQUFBLElBQy9CLENBQUs7QUFFRCxjQUFVLE1BQU07QUFDZCw0QkFBdUI7QUFBQSxJQUM3QixDQUFLO0FBRUQsZ0JBQVksTUFBTTtBQUNoQiw0QkFBdUI7QUFBQSxJQUM3QixDQUFLO0FBRUQsa0JBQWMsTUFBTTtBQUNsQiw4QkFBeUI7QUFBQSxJQUMvQixDQUFLO0FBRUQsb0JBQWdCLE1BQU07QUFDcEIsOEJBQXlCO0FBQUEsSUFDL0IsQ0FBSztBQUVELFdBQU8sTUFBTTtBQUNYLFVBQUksTUFBTSxZQUFZLFFBQVE7QUFDNUIsZ0JBQVEsTUFBTSwrREFBK0Q7QUFDN0U7QUFBQSxNQUNEO0FBRUQsYUFBTyxNQUFNLFNBQVMsYUFDbEI7QUFBQSxRQUNBLEVBQUUsS0FBSyxTQUFTLE9BQU8scUJBQXFCLFFBQVEsTUFBTztBQUFBLFFBQzNELHFCQUFzQjtBQUFBLE1BQ3ZCLElBQ0MsRUFBRSxNQUFPLE1BQU0sT0FBUTtBQUFBLFFBQ3ZCLEdBQUc7QUFBQSxRQUNILEtBQUs7QUFBQSxRQUNMLE9BQU8sQ0FBRSxNQUFNLE9BQU8sUUFBUSxLQUFPO0FBQUEsUUFDckMsR0FBRyxXQUFXO0FBQUEsTUFDZixHQUFFLG9CQUFvQjtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUNILENBQUM7QUNwREQsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsT0FBTyxDQUFDLFdBQVc7QUFBQSxFQUNuQixNQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3RCLFNBQUssYUFBYSxXQUFXO0FBQzdCLFVBQU0sS0FBSztBQUNYLFVBQU0sUUFBUTtBQUNSLFVBQUEsVUFBVSxJQUFJLEtBQUs7QUFDekIsVUFBTSxPQUFPLFNBQVMsV0FBVyxTQUFTLE1BQU07QUFFMUMsVUFBQSxZQUFZLElBQWdCLENBQUEsQ0FBRTtBQUM5QixVQUFBLE1BQU0sTUFBTSxpQkFBaUIsUUFDL0IsS0FBSyxNQUFNLE1BQU0saUJBQWlCLEtBQUssSUFDdkMsQ0FBQTtBQUNBLFFBQUEsU0FBUyxHQUFHLEdBQUc7QUFDakIsZ0JBQVUsUUFBb0IsSUFBSTtBQUFBLElBQ3BDO0FBQ0ksUUFBQSxRQUFRLE1BQU0sYUFBYTtBQUM3QixZQUFNLFFBQVEsUUFBUTtBQUFBLElBQ3hCO0FBRUEsVUFBTSxXQUFXO0FBQUEsTUFDZixJQUFJLElBQUksSUFBSSxFQUFFLFVBQVUsU0FBUyxVQUMvQixDQUFDLEdBQUcsYUFBYSxRQUFRLGlCQUFpQixLQUMxQyxDQUFDLENBQUMsR0FBRyxhQUFhLFFBQVEsTUFBTTtBQUFBLElBQUE7QUFFN0IsV0FBQTtBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsV0FBVyxJQUFjLEVBQUU7QUFBQSxJQUFBO0FBQUEsRUFFL0I7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLFlBQXdCO0FBQ2xCLFVBQUEsS0FBSyxVQUFVLFFBQVE7QUFDbEIsZUFBQSxLQUFLLFVBQVUsT0FBTyxDQUFDLE1BQU0sS0FBSyxVQUFVLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFBQSxNQUN0RTtBQUNBLGFBQU8sS0FBSztBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCwyQkFBMkIsS0FBSztBQUN4QixZQUFBLE1BQWMsS0FBSyxNQUFNLEdBQUc7QUFDOUIsVUFBQSxTQUFTLEdBQUcsR0FBRztBQUNqQixhQUFLLFlBQXdCLElBQUk7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQ1IsU0FBSyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQWdCO0FBQ3hDLFdBQUssWUFBWTtBQUFBLElBQUEsQ0FDbEI7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxRQUFRLFFBQWdCO0FBQ2YsYUFBQTtBQUFBLFFBQ0wsUUFBUSxTQUFTLGdCQUFnQixjQUFjO0FBQUEsTUFBQTtBQUFBLElBRW5EO0FBQUEsSUFDQSxNQUFNLE1BQU1BLFdBQW9CO0FBQzlCLFdBQUssS0FBSztBQUFBLFFBQ1Isb0JBQW9CQSxVQUFTLG1CQUFtQkEsVUFBUztBQUFBLE1BQUE7QUFFM0QsV0FBSyxLQUFLO0FBQUEsUUFDUixpQkFBaUJBLFVBQVMsbUJBQW1CQSxVQUFTO0FBQUEsUUFDdEQsRUFBRSxRQUFRLFNBQVM7QUFBQSxNQUFBO0FBQUEsSUFFdkI7QUFBQSxJQUNBLGdCQUFnQjtBQUNkLFdBQUssR0FBRyxhQUFhLElBQUksbUJBQW1CLElBQUk7QUFBQSxJQUNsRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUFoS2dCLE1BQUEsYUFBQSxFQUFBLE9BQU07QUFpQ1AsTUFBQSxhQUFBQyxnQ0FFTSxhQUZELG1FQUVMLEVBQUE7QUFHQSxNQUFBLGFBQUFBLGdDQUErRCxhQUExRCx3REFBb0QsRUFBQTtBQUN6RCxNQUFBLGFBQUFBLGdDQUFxQyxhQUFoQyw4QkFBMEIsRUFBQTtBQUcvQixNQUFBLGFBQUFBLGdDQUF3RCxhQUFuRCxpREFBNkMsRUFBQTtBQUdsRCxNQUFBLGFBQUFBLGdDQUE0QixhQUF2QixxQkFBaUIsRUFBQTtBQUN0QixNQUFBLGFBQUFBLGdDQUF1QyxhQUFsQyxnQ0FBNEIsRUFBQTtBQUdqQyxNQUFBLGNBQUFBLGdDQUFxQyxhQUFoQyw4QkFBMEIsRUFBQTtBQUcvQixNQUFBLGNBQUFBLGdDQUE0QixhQUF2QixxQkFBaUIsRUFBQTtBQUd0QixNQUFBLGNBQUFBLGdDQUErQyxhQUExQyx3Q0FBb0MsRUFBQTtBQUd6QyxNQUFBLGNBQUFBLGdDQUFzQixhQUFqQixlQUFXLEVBQUE7QUFDaEIsTUFBQSxjQUFBQSxnQ0FHTSxhQUhELHNFQUdMLEVBQUE7O3NCQXBGZEMsWUFvR1MsT0FBQTtBQUFBLElBcEdELE9BQU07QUFBQSxJQUFvQyxZQUFVLEtBQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxxQkFDMUQsTUFBdUU7QUFBQSxNQUFBLENBQTNELGVBQVUsVUFBVSxLQUFBLFFBQVEsZUFBeENDLFVBQUEsR0FBQUMsbUJBQXVFLG1CQUFsQixjQUFZLEtBQUFDLG1CQUFBLElBQUEsSUFBQTtBQUFBLE1BQ3JELENBQUEsS0FBQSxVQUFVLFVBQVUsS0FBVSxVQUFBLFVBQVUsYUFBUSxlQUE1REYsYUFBQUMsbUJBRU0sbUJBRm1FLDJCQUV6RSxLQUFBQyxtQkFBQSxJQUFBLElBQUE7QUFBQSxNQUVRLEtBQUEsVUFBVSx1QkFEbEJILFlBd0NtQixnQkFBQTtBQUFBLFFBQUEsS0FBQTtBQUFBLFFBckNoQixPQUFPLEtBQUE7QUFBQSxRQUNSLE9BQU07QUFBQSxRQUNOLE9BQUEsRUFBQSxRQUFBLFFBQUEsVUFBQSxPQUFBO0FBQUEsTUFBQSxHQUFBO0FBQUEsUUFFQSxTQUFBSSxRQUFBLENBZ0NTLEVBckNDLFdBQUk7QUFBQSxVQUFBQyxnQkFBQUosVUFBQSxHQUtkRCxZQWdDUyxPQUFBO0FBQUEsWUFoQ1EsV0FBQTtBQUFBLFlBQVUsT0FBTTtBQUFBLFVBQUEsR0FBQTtBQUFBLDZCQUMvQixNQUVpQjtBQUFBLGNBRmpCTSxZQUVpQiw4QkFGSztBQUFBLGdCQUFBLFNBQUFGLFFBQ3BCLE1BQThDO0FBQUEsa0JBQTlDRSxZQUE4QyxPQUFBO0FBQUEsb0JBQXRDLE1BQUs7QUFBQSxvQkFBYyxNQUFLO0FBQUEsa0JBQUEsQ0FBQTtBQUFBOzs7Y0FHbENBLFlBZ0JpQixjQUFBLE1BQUE7QUFBQSxnQkFBQSxTQUFBRixRQWZmLE1BRWU7QUFBQSxrQkFGZkUsWUFFZSxZQUZELEVBQUEsT0FBQSw2QkFBa0MsR0FBQTtBQUFBLG9CQUFBLFNBQUFGLFFBQzlDLE1BQXNCO0FBQUEsc0JBQW5CRyxnQkFBQUMsZ0JBQUEsS0FBSyxNQUFNLEtBQUssR0FBQSxDQUFBO0FBQUEsb0JBQUEsQ0FBQTtBQUFBOztrQkFFckJGLFlBV2UsWUFBQTtBQUFBLG9CQVhELFNBQUE7QUFBQSxvQkFBUSxPQUFNO0FBQUEsa0JBQUEsR0FBQTtBQUFBLHFDQUMxQixNQUtNO0FBQUEsc0JBTE5QLGdCQUtNLE9BTE4sWUFBbUIsY0FDVFMsZ0JBQUcsS0FBSyxZQUFZLElBQUcsT0FBRUEsaUJBQzlCLEtBQUssV0FBUSxLQUFRLFFBQU8sTUFDN0Isa0JBQ0ZBLGdCQUFHLEtBQUssS0FBSyxHQUFBLENBQUE7QUFBQSxzQkFFZkYsWUFHRSxpQkFBQTtBQUFBLHdCQUZDLE9BQU8sS0FBSztBQUFBLHdCQUNiLE9BQUEsRUFBQSxTQUFBLFFBQUEsYUFBQSxRQUFBO0FBQUEsc0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQTs7Ozs7O2NBSU5BLFlBU2lCLDhCQVRLO0FBQUEsZ0JBQUEsU0FBQUYsUUFDcEIsTUFPUztBQUFBLGtCQVBURSxZQU9TLE1BQUE7QUFBQSxvQkFOUCxPQUFBO0FBQUEsb0JBQ0EsTUFBQTtBQUFBLG9CQUNBLE1BQUs7QUFBQSxvQkFDTCxPQUFNO0FBQUEsb0JBQ0wsU0FBSztBQUFBLHNCQUFOLE9BQUEsT0FBQSxPQUFBLEtBQUFHLGNBQUEsTUFBQTtBQUFBLHNCQUFBLEdBQWMsQ0FBQSxTQUFBLENBQUE7QUFBQSxzQkFBQSxDQUFBLFdBQ04sV0FBTSxJQUFJO0FBQUEsb0JBQUE7QUFBQTs7Ozs7Ozs7Ozs7O01BSzFCSCxZQXFEVyxTQUFBO0FBQUEsUUFyRFEsWUFBQSxLQUFBO0FBQUEsUUFBUSx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLFdBQUE7QUFBQSxRQUFFLFlBQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSx5QkFDM0IsTUFtRFM7QUFBQSxVQW5EVEEsWUFtRFMsK0JBbkR1QixRQUFBLEtBQUE7QUFBQSxZQUFBLFNBQUFGLFFBQzlCLE1Bd0NpQjtBQUFBLGNBeENqQkUsWUF3Q2lCLGNBeENELEVBQUEsT0FBQSxHQUFBLEdBQUE7QUFBQSxnQkFBUSxTQUFBRixRQUNyQixNQXNDUTtBQUFBLGtCQXRDUkUsWUFzQ1EsT0FBQSxNQUFBO0FBQUEsb0JBQUEsU0FBQUYsUUFyQ1AsTUFvQ2lCO0FBQUEsc0JBcENqQkUsWUFvQ2lCLGNBQUEsTUFBQTtBQUFBLHdCQUFBLFNBQUFGLFFBbkNmLE1BRWU7QUFBQSwwQkFGZkUsWUFFZSxZQUZELEVBQUEsT0FBQSx3QkFBNkIsR0FBQTtBQUFBLDRCQUFBLFNBQUFGLFFBQUMsTUFFNUM7QUFBQSw4QkFBQUcsZ0JBRjRDLHVEQUU1QztBQUFBLDRCQUFBLENBQUE7QUFBQTs7MEJBQ0FELFlBSWUsWUFBQSxFQUFBLE9BQUEsb0JBSndCLEdBQUE7QUFBQSw0QkFBQSxTQUFBRixRQUNyQyxNQUVNO0FBQUEsOEJBRk47QUFBQSw0QkFBQSxDQUFBO0FBQUE7OzBCQUlGRSxZQUdlLFlBQUE7QUFBQSw0QkFIRCxTQUFBO0FBQUEsNEJBQVEsT0FBTTtBQUFBLDBCQUFBLEdBQUE7QUFBQSw2Q0FDMUIsTUFBK0Q7QUFBQSw4QkFBL0Q7QUFBQSw4QkFDQTtBQUFBLDRCQUFBLENBQUE7QUFBQTs7MEJBRUZBLFlBRWUsWUFBQSxFQUFBLE9BQUEsb0JBRndCLEdBQUE7QUFBQSw0QkFBQSxTQUFBRixRQUNyQyxNQUF3RDtBQUFBLDhCQUF4RDtBQUFBLDRCQUFBLENBQUE7QUFBQTs7MEJBRUZFLFlBR2UsWUFBQTtBQUFBLDRCQUhELFNBQUE7QUFBQSw0QkFBUSxPQUFNO0FBQUEsMEJBQUEsR0FBQTtBQUFBLDZDQUMxQixNQUE0QjtBQUFBLDhCQUE1QjtBQUFBLDhCQUNBO0FBQUEsNEJBQUEsQ0FBQTtBQUFBOzswQkFFRkEsWUFFZSxZQUFBLEVBQUEsT0FBQSxvQkFGd0IsR0FBQTtBQUFBLDRCQUFBLFNBQUFGLFFBQ3JDLE1BQXFDO0FBQUEsOEJBQXJDO0FBQUEsNEJBQUEsQ0FBQTtBQUFBOzswQkFFRkUsWUFFZSxZQUFBO0FBQUEsNEJBRkQsU0FBQTtBQUFBLDRCQUFRLE9BQU07QUFBQSwwQkFBQSxHQUFBO0FBQUEsNkNBQzFCLE1BQTRCO0FBQUEsOEJBQTVCO0FBQUEsNEJBQUEsQ0FBQTtBQUFBOzswQkFFRkEsWUFFZSxZQUFBLEVBQUEsT0FBQSxvQkFGd0IsR0FBQTtBQUFBLDRCQUFBLFNBQUFGLFFBQ3JDLE1BQStDO0FBQUEsOEJBQS9DO0FBQUEsNEJBQUEsQ0FBQTtBQUFBOzswQkFFRkUsWUFNZSxZQUFBO0FBQUEsNEJBTkQsU0FBQTtBQUFBLDRCQUFRLE9BQU07QUFBQSwwQkFBQSxHQUFBO0FBQUEsNkNBQzFCLE1BQXNCO0FBQUEsOEJBQXRCO0FBQUEsOEJBQ0E7QUFBQSw0QkFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7O2NBUVJBLFlBUWlCLGNBQUE7QUFBQSxnQkFSRCxPQUFNO0FBQUEsZ0JBQVEsT0FBTTtBQUFBLGNBQUEsR0FBQTtBQUFBLGlDQUNsQyxNQUF1QztBQUFBLGtCQUFBRCxlQUF2Q0MsWUFBdUMsTUFBQTtBQUFBLG9CQUFsQixNQUFBO0FBQUEsb0JBQUssT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLEdBQUE7QUFBQTs7aUNBQ2hDQSxZQUtFLE1BQUE7QUFBQSxvQkFIQSxNQUFBO0FBQUEsb0JBQ0EsT0FBTTtBQUFBLG9CQUNMLFNBQU8sS0FBQTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBLEdBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
