import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { u as useRouterLinkProps, a as useRouterLink, Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { u as useTabProps, a as useTabEmits, b as useTab, Q as QTabs } from "./QTabs.460280b8.js";
import { c as createComponent } from "./QSpinner.0d412098.js";
import { c as computed, w as watch, d as defineComponent, r as ref, _ as _export_sfc, a4 as useRouter, a5 as useRoute, f as openBlock, v as createElementBlock, u as createBaseVNode, m as createVNode, k as withCtx, F as Fragment, x as renderList, q as normalizeClass, j as createBlock, s as resolveComponent, B as withDirectives, a6 as normalizeStyle, p as createTextVNode, t as toDisplayString, n as createCommentVNode, a7 as debounce } from "./index.0b61810d.js";
import { Q as QIntersection } from "./QIntersection.6a6cf41f.js";
import { Q as QInnerLoading } from "./QInnerLoading.b3499eb2.js";
import { Q as QBadge } from "./QBadge.da9a9ffd.js";
import { g as getImgBlob, Q as QImg } from "./usefull.0f9a3edc.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { storeGet } from "./StoreStuff.f5900537.js";
import { u as useInBar } from "./Filters.d6e3deb1.js";
import "./use-dark.bc291eea.js";
import "./QIcon.8780f7dc.js";
import "./use-timeout.99cd911c.js";
import "./scroll.34fac392.js";
import "./dom.fd94eb85.js";
import "./use-transition.65db8379.js";
import "./focus-manager.32f8d49a.js";
import "./uid.42677368.js";
import "./QResizeObserver.eb13856c.js";
import "./rtl.b51694b1.js";
import "./Intersection.9c3ca45b.js";
import "./axios.a87bcd6c.js";
var QRouteTab = createComponent({
  name: "QRouteTab",
  props: {
    ...useRouterLinkProps,
    ...useTabProps
  },
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const routeData = useRouterLink({
      useDisableForRouterLinkProps: false
    });
    const { renderTab, $tabs } = useTab(
      props,
      slots,
      emit,
      {
        exact: computed(() => props.exact),
        ...routeData
      }
    );
    watch(() => `${props.name} | ${props.exact} | ${(routeData.resolvedLink.value || {}).href}`, () => {
      $tabs.verifyRouteModel();
    });
    return () => renderTab(routeData.linkTag.value, routeData.linkAttrs.value);
  }
});
const _sfc_main$3 = defineComponent({
  name: "TabPanel",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    if (route.query["tab"] === void 0) {
      router.push({ query: { ...route.query, tab: 0 } });
    }
    return {
      tab: ref(new Number(route.query["tab"]).valueOf() || 0)
    };
  }
});
const _hoisted_1$3 = { class: "" };
const _hoisted_2$2 = { class: "q-gutter-y-md" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$2, [
      createVNode(QTabs, {
        modelValue: _ctx.tab,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tab = $event),
        "inline-label": "",
        class: normalizeClass(_ctx.$q.dark.isActive ? `bg-dark-page` : `bg-light-page`)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabs, (tabb) => {
            return openBlock(), createBlock(QRouteTab, {
              key: tabb.tabID,
              name: tabb.tabID,
              label: tabb.tabname,
              class: normalizeClass([
                "col-grow",
                _ctx.$route.query["tab"] == tabb.tabID.toString() ? `text-primary` : ``
              ]),
              flat: "",
              to: { query: { ..._ctx.$route.query, tab: tabb.tabID } }
            }, null, 8, ["name", "label", "to", "class"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "class"])
    ])
  ]);
}
var TabPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "TabPanel.vue"]]);
var MangaCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = defineComponent({
  name: "MangaCard",
  props: {
    manga: {
      type: Object,
      default: () => Object
    },
    display: {
      type: String,
      default: "compact"
    }
  },
  setup() {
    const useCache = ref(`${storeGet("useCache", true)}`);
    const imgdata = ref("");
    return { useCache, imgdata };
  },
  computed: {
    listdivClass() {
      return this.display == "list" ? "text-left q-ml-md text-h5 col-shrink" : "text-center text-subtitle1";
    }
  },
  mounted: function() {
    getImgBlob(this.manga.thumbnailUrl + "?useCache=" + this.useCache).then(
      (value) => {
        this.imgdata = value;
      }
    );
  }
});
const _hoisted_1$2 = {
  class: "transparent absolute-top q-mt-xs q-ml-xs",
  style: { "padding": "0" }
};
const _hoisted_2$1 = ["title"];
const _hoisted_3$1 = { class: "row items-center col-grow no-wrap" };
const _hoisted_4 = ["title"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return withDirectives((openBlock(), createBlock(QCard, {
    flat: "",
    class: normalizeClass(["my-card", !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? `q-ma-sm` : `q-ma-xs`]),
    style: normalizeStyle(_ctx.display == `list` ? `` : `background: transparent`)
  }, {
    default: withCtx(() => [
      createVNode(_component_router_link, {
        to: `/manga/` + _ctx.manga.id,
        class: normalizeClass(["cursor-pointer", _ctx.$q.dark.isActive ? `light` : `dark`]),
        style: { "text-decoration": "none" }
      }, {
        default: withCtx(() => [
          _ctx.display != `list` ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: _ctx.imgdata,
            loading: "lazy",
            "spinner-color": "white",
            style: { "max-width": "100%", "aspect-ratio": "225/350" },
            class: "rounded-borders",
            "no-spinner": ""
          }, {
            default: withCtx(() => [
              createVNode(QInnerLoading, {
                showing: !_ctx.imgdata,
                color: "primary"
              }, null, 8, ["showing"]),
              createBaseVNode("div", _hoisted_1$2, [
                _ctx.manga.unreadCount ? (openBlock(), createBlock(QBadge, {
                  key: 0,
                  color: "blue",
                  style: normalizeStyle([
                    { "width": "min-content", "padding": "5px" },
                    _ctx.manga.downloadCount ? `border-top-right-radius: 0;border-bottom-right-radius: 0;` : ``
                  ])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.manga.unreadCount), 1)
                  ]),
                  _: 1
                }, 8, ["style"])) : createCommentVNode("", true),
                _ctx.manga.downloadCount ? (openBlock(), createBlock(QBadge, {
                  key: 1,
                  color: "green",
                  style: normalizeStyle([
                    { "width": "min-content", "padding": "5px" },
                    _ctx.manga.unreadCount ? `border-top-left-radius: 0;border-bottom-left-radius: 0;` : ``
                  ])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.manga.downloadCount), 1)
                  ]),
                  _: 1
                }, 8, ["style"])) : createCommentVNode("", true)
              ]),
              _ctx.display == `compact` ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "absolute-bottom text-subtitle1 text-center",
                title: _ctx.manga.title,
                style: { "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "height": "3.5rem" }
              }, toDisplayString(_ctx.manga.title), 9, _hoisted_2$1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["src"])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3$1, [
            _ctx.display == `list` ? (openBlock(), createBlock(QImg, {
              key: 0,
              src: _ctx.imgdata,
              loading: "lazy",
              "spinner-color": "white",
              style: { "height": "93px", "aspect-ratio": "225/350", "width": "fit-content" },
              class: "rounded-borders items-center justify-center col-1",
              "no-spinner": ""
            }, {
              default: withCtx(() => [
                createVNode(QInnerLoading, {
                  showing: !_ctx.imgdata,
                  color: "primary"
                }, null, 8, ["showing"])
              ]),
              _: 1
            }, 8, ["src"])) : createCommentVNode("", true),
            _ctx.display != `compact` ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.listdivClass),
              title: _ctx.manga.title,
              style: normalizeStyle([{ "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "overflow": "hidden", "width": "100%" }, _ctx.display == `list` ? `` : `height: 5.25rem;`])
            }, toDisplayString(_ctx.manga.title), 15, _hoisted_4)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["justify-end flex items-end col-grow", !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? `q-mr-lg` : `q-mr-xs`])
            }, [
              _ctx.manga.unreadCount && _ctx.display == `list` ? (openBlock(), createBlock(QBadge, {
                key: 0,
                color: "blue",
                style: normalizeStyle([
                  { "width": "min-content", "padding": "5px" },
                  _ctx.manga.downloadCount ? `border-top-right-radius: 0;border-bottom-right-radius: 0;` : ``
                ])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.manga.unreadCount), 1)
                ]),
                _: 1
              }, 8, ["style"])) : createCommentVNode("", true),
              _ctx.manga.downloadCount && _ctx.display == `list` ? (openBlock(), createBlock(QBadge, {
                key: 1,
                color: "green",
                style: normalizeStyle([
                  { "width": "min-content", "padding": "5px" },
                  _ctx.manga.unreadCount ? `border-top-left-radius: 0;border-bottom-left-radius: 0;` : ``
                ])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.manga.downloadCount), 1)
                ]),
                _: 1
              }, 8, ["style"])) : createCommentVNode("", true)
            ], 2)
          ])
        ]),
        _: 1
      }, 8, ["to", "class"])
    ]),
    _: 1
  }, 8, ["class", "style"])), [
    [Ripple]
  ]);
}
var MangaCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-41e8beda"], ["__file", "MangaCard.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "MangaGrid",
  components: { MangaCard },
  setup() {
    const filters = ref(useInBar());
    const devider = ref(0);
    const clwidth = ref(0);
    const mangas = ref([]);
    return {
      devider,
      mangas,
      filters,
      clwidth
    };
  },
  computed: {
    doFilt() {
      let mangas = this.mangas;
      if (this.$route.query["q"]) {
        mangas = mangas.filter(
          (manga2) => manga2.title.toLowerCase().includes(`${this.$route.query["q"] || ""}`.toLowerCase())
        );
      }
      if (this.filters.unread != null) {
        mangas = mangas.filter(
          (manga2) => this.filters.unread ? !!manga2.unreadCount : !manga2.unreadCount
        );
      }
      if (this.filters.downloaded != null) {
        mangas = mangas.filter(
          (manga2) => this.filters.downloaded ? !!manga2.downloadCount : !manga2.downloadCount
        );
      }
      return mangas;
    },
    dosrt() {
      let mangas = this.doFilt;
      if (this.filters.leftToRead != null) {
        mangas = mangas.sort((a, b) => {
          if (this.filters.leftToRead) {
            return a.unreadCount >= b.unreadCount ? -1 : 1;
          }
          return a.unreadCount <= b.unreadCount ? -1 : 1;
        });
      }
      if (this.filters.alphabetical != null) {
        mangas = mangas.sort((a, b) => {
          if (this.filters.alphabetical) {
            return a.title >= b.title ? -1 : 1;
          }
          return a.title <= b.title ? -1 : 1;
        });
      }
      if (this.filters.ByID != null) {
        mangas = mangas.sort((a, b) => {
          if (this.filters.ByID) {
            return a.id >= b.id ? -1 : 1;
          }
          return a.id <= b.id ? -1 : 1;
        });
      }
      return mangas;
    },
    Displ() {
      if (this.filters.Display == null) {
        return "compact";
      } else if (this.filters.Display) {
        return "comfort";
      }
      return "list";
    },
    widt() {
      return this.Displ == "list" ? "width:100%; height: 109px;" : `width: calc(100% / ${this.devider}); aspect-ratio: 225/350;transition: width 0.5s ease-out;`;
    }
  },
  watch: {
    "$route.query.tab": async function(val) {
      this.reload(val);
    }
  },
  created: async function() {
    this.calcWidth = debounce(this.calcWidth, 500);
    this.reload(this.$route.query["tab"]);
  },
  mounted: function() {
    this.calcWidth();
    this.$nextTick(() => {
      window.addEventListener("resize", this.calcWidth);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calcWidth);
  },
  methods: {
    calcWidth() {
      const grid = this.$refs["MangaGrid"];
      const ideal = this.$storeGet("MitemW", 300);
      if (grid.clientWidth == void 0)
        return;
      this.devider = Math.round(grid.clientWidth / ideal);
    },
    calcHeight() {
      var _a;
      const parent = (_a = this.$parent) == null ? void 0 : _a.$el;
      if (parent) {
        let Height = parent.clientHeight;
        Height -= parent.children[0].clientHeight;
        return Height;
      }
      return 0;
    },
    async reload(val) {
      if (val != void 0) {
        this.mangas = [];
        this.mangas = (await this.$api.get(`/api/v1/category/${this.$route.query["tab"]}`)).data;
      }
    }
  }
});
const _hoisted_1$1 = {
  ref: "MangaGrid",
  class: "flex"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MangaCard = resolveComponent("MangaCard");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dosrt, (manga2) => {
        return openBlock(), createBlock(QIntersection, {
          key: manga2.id,
          style: normalizeStyle(_ctx.widt),
          transition: "fade"
        }, {
          default: withCtx(() => [
            createVNode(_component_MangaCard, {
              display: _ctx.Displ,
              manga: manga2
            }, null, 8, ["display", "manga"])
          ]),
          _: 2
        }, 1032, ["style"]);
      }), 128))
    ], 512),
    createVNode(QInnerLoading, {
      style: { "position": "fixed", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "width": "fit-content", "height": "fit-content", "background-color": "transparent" },
      showing: !_ctx.dosrt.length,
      color: "primary"
    }, null, 8, ["showing"])
  ], 64);
}
var MangaGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "MangaGrid.vue"]]);
const _sfc_main = defineComponent({
  name: "LibraryPage",
  components: { TabPanel, MangaGrid },
  emits: ["set-title"],
  setup(_props, { emit }) {
    emit("set-title", "Library");
    const tabs = ref([]);
    const failedFetch = ref(false);
    return {
      tabs,
      failedFetch
    };
  },
  created: async function() {
    try {
      const jsn = await this.$api.get("/api/v1/category");
      this.tabs = jsn.data.map((cat2) => {
        return {
          tabname: cat2.name,
          tabID: cat2.id
        };
      });
    } catch (e) {
      this.failedFetch = true;
    }
  },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    }
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", null, "Have you set your server address?", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "Is the server running?", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "q-pt-sm" }, " Pressing Ok will take you to the settings page ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TabPanel = resolveComponent("TabPanel");
  const _component_MangaGrid = resolveComponent("MangaGrid");
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
    default: withCtx(() => [
      createVNode(_component_TabPanel, {
        active: "",
        tabs: _ctx.tabs
      }, null, 8, ["tabs"]),
      !_ctx.failedFetch ? (openBlock(), createBlock(_component_MangaGrid, { key: 0 })) : createCommentVNode("", true),
      createVNode(QDialog, {
        modelValue: _ctx.failedFetch,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.failedFetch = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "min-width": "350px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, { class: "text-h6 text-negative" }, {
                            default: withCtx(() => [
                              createTextVNode("Getting categories failed. ")
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { class: "text-info q-pt-lg" }, {
                            default: withCtx(() => [
                              _hoisted_1,
                              _hoisted_2,
                              _hoisted_3
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
                    label: "ok",
                    to: "/settings"
                  }, null, 512), [
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
var libraryPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "libraryPage.vue"]]);
export { libraryPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeVBhZ2UuOTY2YzJhMjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy9RUm91dGVUYWIuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RhYlBhbmVsLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FDYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FHcmlkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9saWJyYXJ5UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSb3V0ZVRhYicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlVGFiUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCByb3V0ZURhdGEgPSB1c2VSb3V0ZXJMaW5rKHtcbiAgICAgIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHM6IGZhbHNlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgcmVuZGVyVGFiLCAkdGFicyB9ID0gdXNlVGFiKFxuICAgICAgcHJvcHMsXG4gICAgICBzbG90cyxcbiAgICAgIGVtaXQsXG4gICAgICB7XG4gICAgICAgIGV4YWN0OiBjb21wdXRlZCgoKSA9PiBwcm9wcy5leGFjdCksXG4gICAgICAgIC4uLnJvdXRlRGF0YVxuICAgICAgfVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGAkeyBwcm9wcy5uYW1lIH0gfCAkeyBwcm9wcy5leGFjdCB9IHwgJHsgKHJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWUgfHwge30pLmhyZWYgfWAsICgpID0+IHtcbiAgICAgICR0YWJzLnZlcmlmeVJvdXRlTW9kZWwoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKHJvdXRlRGF0YS5saW5rVGFnLnZhbHVlLCByb3V0ZURhdGEubGlua0F0dHJzLnZhbHVlKVxuICB9XG59KVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXIteS1tZFwiPlxuICAgICAgPHEtdGFic1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgaW5saW5lLWxhYmVsXG4gICAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgYmctZGFyay1wYWdlYCA6IGBiZy1saWdodC1wYWdlYFwiXG4gICAgICA+XG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIHYtZm9yPVwidGFiYiBpbiB0YWJzXCJcbiAgICAgICAgICA6a2V5PVwidGFiYi50YWJJRFwiXG4gICAgICAgICAgOm5hbWU9XCJ0YWJiLnRhYklEXCJcbiAgICAgICAgICA6bGFiZWw9XCJ0YWJiLnRhYm5hbWVcIlxuICAgICAgICAgIGNsYXNzPVwiY29sLWdyb3dcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICA6dG89XCJ7IHF1ZXJ5OiB7IC4uLiRyb3V0ZS5xdWVyeSwgdGFiOiB0YWJiLnRhYklEIH0gfVwiXG4gICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAkcm91dGUucXVlcnlbJ3RhYiddID09IHRhYmIudGFiSUQudG9TdHJpbmcoKSA/IGB0ZXh0LXByaW1hcnlgIDogYGBcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRhYnM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1RhYlBhbmVsJyxcbiAgcHJvcHM6IHtcbiAgICB0YWJzOiB7XG4gICAgICB0eXBlOiBBcnJheSBhcyBQcm9wVHlwZTx0YWJbXT4sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcbiAgICB9LFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG4gICAgaWYgKHJvdXRlLnF1ZXJ5Wyd0YWInXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByb3V0ZXIucHVzaCh7IHF1ZXJ5OiB7IC4uLnJvdXRlLnF1ZXJ5LCB0YWI6IDAgfSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYjogcmVmKG5ldyBOdW1iZXIocm91dGUucXVlcnlbJ3RhYiddKS52YWx1ZU9mKCkgfHwgMCksXG4gICAgfTtcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZFxuICAgIHYtcmlwcGxlXG4gICAgZmxhdFxuICAgIGNsYXNzPVwibXktY2FyZFwiXG4gICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1hLXNtYCA6IGBxLW1hLXhzYFwiXG4gICAgOnN0eWxlPVwiZGlzcGxheSA9PSBgbGlzdGAgPyBgYCA6IGBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGBcIlxuICA+XG4gICAgPHJvdXRlci1saW5rXG4gICAgICA6dG89XCJgL21hbmdhL2AgKyBtYW5nYS5pZFwiXG4gICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCJcbiAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICA+XG4gICAgICA8cS1pbWdcbiAgICAgICAgdi1pZj1cImRpc3BsYXkgIT0gYGxpc3RgXCJcbiAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIHNwaW5uZXItY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBhc3BlY3QtcmF0aW86IDIyNS8zNTBcIlxuICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgIG5vLXNwaW5uZXJcbiAgICAgID5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cIiFpbWdkYXRhXCIgY29sb3I9XCJwcmltYXJ5XCI+IDwvcS1pbm5lci1sb2FkaW5nPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudCBhYnNvbHV0ZS10b3AgcS1tdC14cyBxLW1sLXhzXCJcbiAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgIHYtaWY9XCJtYW5nYS51bnJlYWRDb3VudFwiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogbWluLWNvbnRlbnQ7IHBhZGRpbmc6IDVweFwiXG4gICAgICAgICAgICA6c3R5bGU9XCJcbiAgICAgICAgICAgICAgbWFuZ2EuZG93bmxvYWRDb3VudFxuICAgICAgICAgICAgICAgID8gYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO2BcbiAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IG1hbmdhLnVucmVhZENvdW50IH19XG4gICAgICAgICAgPC9xLWJhZGdlPlxuICAgICAgICAgIDxxLWJhZGdlXG4gICAgICAgICAgICB2LWlmPVwibWFuZ2EuZG93bmxvYWRDb3VudFwiXG4gICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgICAgOnN0eWxlPVwiXG4gICAgICAgICAgICAgIG1hbmdhLnVucmVhZENvdW50XG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO2BcbiAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IG1hbmdhLmRvd25sb2FkQ291bnQgfX1cbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cImRpc3BsYXkgPT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWJvdHRvbSB0ZXh0LXN1YnRpdGxlMSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgOnRpdGxlPVwibWFuZ2EudGl0bGVcIlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbWFuZ2EudGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtaW1nPlxuICAgICAgPCEtLSBsaXN0IGRpc3BsYXkgbW9kZSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGNvbC1ncm93IG5vLXdyYXBcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgdi1pZj1cImRpc3BsYXkgPT0gYGxpc3RgXCJcbiAgICAgICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDkzcHg7IGFzcGVjdC1yYXRpbzogMjI1LzM1MDsgd2lkdGg6IGZpdC1jb250ZW50XCJcbiAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY29sLTFcIlxuICAgICAgICAgIG5vLXNwaW5uZXJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCIhaW1nZGF0YVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgICAgICA8L3EtaW1nPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cImRpc3BsYXkgIT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICA6Y2xhc3M9XCJsaXN0ZGl2Q2xhc3NcIlxuICAgICAgICAgIDp0aXRsZT1cIm1hbmdhLnRpdGxlXCJcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIFwiXG4gICAgICAgICAgOnN0eWxlPVwiZGlzcGxheSA9PSBgbGlzdGAgPyBgYCA6IGBoZWlnaHQ6IDUuMjVyZW07YFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBtYW5nYS50aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwianVzdGlmeS1lbmQgZmxleCBpdGVtcy1lbmQgY29sLWdyb3dcIlxuICAgICAgICAgIDpjbGFzcz1cIiEoJHEuc2NyZWVuLnNtIHx8ICRxLnNjcmVlbi54cykgPyBgcS1tci1sZ2AgOiBgcS1tci14c2BcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgIHYtaWY9XCJtYW5nYS51bnJlYWRDb3VudCAmJiBkaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogbWluLWNvbnRlbnQ7IHBhZGRpbmc6IDVweFwiXG4gICAgICAgICAgICA6c3R5bGU9XCJcbiAgICAgICAgICAgICAgbWFuZ2EuZG93bmxvYWRDb3VudFxuICAgICAgICAgICAgICAgID8gYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO2BcbiAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IG1hbmdhLnVucmVhZENvdW50IH19XG4gICAgICAgICAgPC9xLWJhZGdlPlxuICAgICAgICAgIDxxLWJhZGdlXG4gICAgICAgICAgICB2LWlmPVwibWFuZ2EuZG93bmxvYWRDb3VudCAmJiBkaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgICAgOnN0eWxlPVwiXG4gICAgICAgICAgICAgIG1hbmdhLnVucmVhZENvdW50XG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO2BcbiAgICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IG1hbmdhLmRvd25sb2FkQ291bnQgfX1cbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9yb3V0ZXItbGluaz5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnLi4vZ2xvYmFsL3VzZWZ1bGwnO1xuaW1wb3J0IHsgc3RvcmVHZXQgfSBmcm9tICdzcmMvYm9vdC9TdG9yZVN0dWZmJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ01hbmdhQ2FyZCcsXG4gIHByb3BzOiB7XG4gICAgbWFuZ2E6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxtYW5nYT4sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBPYmplY3QsXG4gICAgfSxcbiAgICBkaXNwbGF5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8J2NvbXBhY3QnIHwgJ2NvbWZvcnQnIHwgJ2xpc3QnPixcbiAgICAgIGRlZmF1bHQ6ICdjb21wYWN0JyxcbiAgICB9LFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCB1c2VDYWNoZSA9IHJlZihgJHtzdG9yZUdldCgndXNlQ2FjaGUnLCB0cnVlKX1gKTtcbiAgICBjb25zdCBpbWdkYXRhID0gcmVmKCcnKTtcbiAgICByZXR1cm4geyB1c2VDYWNoZSwgaW1nZGF0YSB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RkaXZDbGFzcygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheSA9PSAnbGlzdCdcbiAgICAgICAgPyAndGV4dC1sZWZ0IHEtbWwtbWQgdGV4dC1oNSBjb2wtc2hyaW5rJ1xuICAgICAgICA6ICd0ZXh0LWNlbnRlciB0ZXh0LXN1YnRpdGxlMSc7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGdldEltZ0Jsb2IodGhpcy5tYW5nYS50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XG4ubXktY2FyZCBkaXYucS1pbWctLW1lbnU6aG92ZXJcbiAgdHJhbnNpdGlvbjogZmlsdGVyICRnZW5lcmljLWhvdmVyLXRyYW5zaXRpb25cbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNylcbjwvc3R5bGU+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJNYW5nYUdyaWRcIiBjbGFzcz1cImZsZXhcIj5cbiAgICA8cS1pbnRlcnNlY3Rpb25cbiAgICAgIHYtZm9yPVwibWFuZ2EgaW4gZG9zcnRcIlxuICAgICAgOmtleT1cIm1hbmdhLmlkXCJcbiAgICAgIDpzdHlsZT1cIndpZHRcIlxuICAgICAgdHJhbnNpdGlvbj1cImZhZGVcIlxuICAgID5cbiAgICAgIDxNYW5nYUNhcmQgOmRpc3BsYXk9XCJEaXNwbFwiIDptYW5nYT1cIm1hbmdhXCI+PC9NYW5nYUNhcmQ+XG4gICAgPC9xLWludGVyc2VjdGlvbj5cbiAgPC9kaXY+XG4gIDxxLWlubmVyLWxvYWRpbmdcbiAgICBzdHlsZT1cIlxuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcIlxuICAgIDpzaG93aW5nPVwiIWRvc3J0Lmxlbmd0aFwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgPlxuICA8L3EtaW5uZXItbG9hZGluZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IE1hbmdhQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L01hbmdhQ2FyZC52dWUnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9GaWx0ZXJzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAncXVhc2FyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ01hbmdhR3JpZCcsXG4gIGNvbXBvbmVudHM6IHsgTWFuZ2FDYXJkIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSByZWYoRmlsdGVycygpKTtcbiAgICBjb25zdCBkZXZpZGVyID0gcmVmPG51bWJlcj4oMCk7XG4gICAgY29uc3QgY2x3aWR0aCA9IHJlZjxudW1iZXI+KDApO1xuICAgIGNvbnN0IG1hbmdhcyA9IHJlZig8bWFuZ2FbXT5bXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmlkZXIsXG4gICAgICBtYW5nYXMsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgY2x3aWR0aCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGRvRmlsdCgpOiBtYW5nYVtdIHtcbiAgICAgIGxldCBtYW5nYXMgPSB0aGlzLm1hbmdhcztcbiAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeVsncSddKSB7XG4gICAgICAgIG1hbmdhcyA9IG1hbmdhcy5maWx0ZXIoKG1hbmdhKSA9PlxuICAgICAgICAgIG1hbmdhLnRpdGxlXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluY2x1ZGVzKGAke3RoaXMuJHJvdXRlLnF1ZXJ5WydxJ10gfHwgJyd9YC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy51bnJlYWQgIT0gbnVsbCkge1xuICAgICAgICBtYW5nYXMgPSBtYW5nYXMuZmlsdGVyKChtYW5nYSkgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMudW5yZWFkID8gISFtYW5nYS51bnJlYWRDb3VudCA6ICFtYW5nYS51bnJlYWRDb3VudFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5kb3dubG9hZGVkICE9IG51bGwpIHtcbiAgICAgICAgbWFuZ2FzID0gbWFuZ2FzLmZpbHRlcigobWFuZ2EpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLmRvd25sb2FkZWQgPyAhIW1hbmdhLmRvd25sb2FkQ291bnQgOiAhbWFuZ2EuZG93bmxvYWRDb3VudFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hbmdhcztcbiAgICB9LFxuICAgIGRvc3J0KCk6IG1hbmdhW10ge1xuICAgICAgbGV0IG1hbmdhcyA9IHRoaXMuZG9GaWx0O1xuICAgICAgaWYgKHRoaXMuZmlsdGVycy5sZWZ0VG9SZWFkICE9IG51bGwpIHtcbiAgICAgICAgbWFuZ2FzID0gbWFuZ2FzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzLmxlZnRUb1JlYWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnVucmVhZENvdW50ID49IGIudW5yZWFkQ291bnQgPyAtMSA6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhLnVucmVhZENvdW50IDw9IGIudW5yZWFkQ291bnQgPyAtMSA6IDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5hbHBoYWJldGljYWwgIT0gbnVsbCkge1xuICAgICAgICBtYW5nYXMgPSBtYW5nYXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnMuYWxwaGFiZXRpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm4gYS50aXRsZSA+PSBiLnRpdGxlID8gLTEgOiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYS50aXRsZSA8PSBiLnRpdGxlID8gLTEgOiAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuQnlJRCAhPSBudWxsKSB7XG4gICAgICAgIG1hbmdhcyA9IG1hbmdhcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVycy5CeUlEKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA+PSBiLmlkID8gLTEgOiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYS5pZCA8PSBiLmlkID8gLTEgOiAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYW5nYXM7XG4gICAgfSxcbiAgICBEaXNwbCgpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuRGlzcGxheSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnY29tcGFjdCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVycy5EaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiAnY29tZm9ydCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2xpc3QnO1xuICAgIH0sXG4gICAgd2lkdCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuRGlzcGwgPT0gJ2xpc3QnXG4gICAgICAgID8gJ3dpZHRoOjEwMCU7IGhlaWdodDogMTA5cHg7J1xuICAgICAgICA6IGB3aWR0aDogY2FsYygxMDAlIC8gJHt0aGlzLmRldmlkZXJ9KTsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwO3RyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1vdXQ7YDtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgICckcm91dGUucXVlcnkudGFiJzogYXN5bmMgZnVuY3Rpb24gKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbG9hZCh2YWwpO1xuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCA9IGRlYm91bmNlKHRoaXMuY2FsY1dpZHRoLCA1MDApO1xuICAgIHRoaXMucmVsb2FkKHRoaXMuJHJvdXRlLnF1ZXJ5Wyd0YWInXSBhcyBudW1iZXIgfCB1bmRlZmluZWQpO1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxjV2lkdGgoKTtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjV2lkdGgpO1xuICAgIH0pO1xuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNXaWR0aCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxjV2lkdGgoKSB7XG4gICAgICBjb25zdCBncmlkID0gPEVsZW1lbnQ+dGhpcy4kcmVmc1snTWFuZ2FHcmlkJ107XG4gICAgICBjb25zdCBpZGVhbCA9IDxudW1iZXI+dGhpcy4kc3RvcmVHZXQoJ01pdGVtVycsIDMwMCk7XG4gICAgICBpZiAoZ3JpZC5jbGllbnRXaWR0aCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHRoaXMuZGV2aWRlciA9IE1hdGgucm91bmQoZ3JpZC5jbGllbnRXaWR0aCAvIGlkZWFsKTtcbiAgICB9LFxuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ/LiRlbDtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbGV0IEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIEhlaWdodCAtPSBwYXJlbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gSGVpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBhc3luYyByZWxvYWQodmFsOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWFuZ2FzID0gW107XG4gICAgICAgIHRoaXMubWFuZ2FzID0gPG1hbmdhW10+KFxuICAgICAgICAgIChhd2FpdCB0aGlzLiRhcGkuZ2V0KGAvYXBpL3YxL2NhdGVnb3J5LyR7dGhpcy4kcm91dGUucXVlcnlbJ3RhYiddfWApKVxuICAgICAgICAgICAgLmRhdGFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8VGFiUGFuZWwgYWN0aXZlIDp0YWJzPVwidGFic1wiPjwvVGFiUGFuZWw+XG4gICAgPE1hbmdhR3JpZCB2LWlmPVwiIWZhaWxlZEZldGNoXCI+IDwvTWFuZ2FHcmlkPlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwiZmFpbGVkRmV0Y2hcIiBwZXJzaXN0ZW50PlxuICAgICAgPHEtY2FyZCBzdHlsZT1cIm1pbi13aWR0aDogMzUwcHhcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgPjxxLWl0ZW0+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWg2IHRleHQtbmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgID5HZXR0aW5nIGNhdGVnb3JpZXMgZmFpbGVkLlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtaW5mbyBxLXB0LWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5IYXZlIHlvdSBzZXQgeW91ciBzZXJ2ZXIgYWRkcmVzcz88L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PklzIHRoZSBzZXJ2ZXIgcnVubmluZz88L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wdC1zbVwiPlxuICAgICAgICAgICAgICAgICAgUHJlc3NpbmcgT2sgd2lsbCB0YWtlIHlvdSB0byB0aGUgc2V0dGluZ3MgcGFnZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICA8cS1idG4gdi1jbG9zZS1wb3B1cCBmbGF0IGxhYmVsPVwib2tcIiB0bz1cIi9zZXR0aW5nc1wiIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB0YWIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBUYWJQYW5lbCBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L1RhYlBhbmVsLnZ1ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjYXQgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBNYW5nYUdyaWQgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9NYW5nYUdyaWQudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdMaWJyYXJ5UGFnZScsXG4gIGNvbXBvbmVudHM6IHsgVGFiUGFuZWwsIE1hbmdhR3JpZCB9LFxuICBlbWl0czogWydzZXQtdGl0bGUnXSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldC10aXRsZScsICdMaWJyYXJ5Jyk7XG4gICAgY29uc3QgdGFicyA9IHJlZjx0YWJbXT4oW10pO1xuICAgIGNvbnN0IGZhaWxlZEZldGNoID0gcmVmKGZhbHNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGFicyxcbiAgICAgIGZhaWxlZEZldGNoLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNuID0gKGF3YWl0IHRoaXMuJGFwaS5nZXQoJy9hcGkvdjEvY2F0ZWdvcnknKSkgYXMgQXhpb3NSZXNwb25zZTxcbiAgICAgICAgY2F0W11cbiAgICAgID47XG4gICAgICB0aGlzLnRhYnMgPSBqc24uZGF0YS5tYXAoKGNhdCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRhYm5hbWU6IGNhdC5uYW1lLFxuICAgICAgICAgIHRhYklEOiBjYXQuaWQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZhaWxlZEZldGNoID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCcsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQmxvY2siLCJfaG9pc3RlZF8zIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiRmls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
