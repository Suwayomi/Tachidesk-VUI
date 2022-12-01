import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.66687690.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { Q as QCardSection } from "./QCardSection.92a082ef.js";
import { u as useRouterLinkProps, a as useRouterLink, Q as QBtn } from "./QBtn.fa53f47e.js";
import { Q as QCardActions } from "./QCardActions.ca11870b.js";
import { Q as QCard } from "./QCard.a457d3f1.js";
import { Q as QDialog } from "./QDialog.1c3b5a04.js";
import { Q as QPage } from "./QPage.2a653745.js";
import { C as ClosePopup } from "./ClosePopup.6e286577.js";
import { u as useTabProps, a as useTabEmits, b as useTab, Q as QTabs } from "./QTabs.2309048c.js";
import { c as createComponent } from "./QSpinner.dc7e097a.js";
import { c as computed, w as watch, d as defineComponent, r as ref, _ as _export_sfc, a4 as useRouter, a5 as useRoute, f as openBlock, v as createElementBlock, u as createBaseVNode, m as createVNode, k as withCtx, F as Fragment, x as renderList, q as normalizeClass, j as createBlock, s as resolveComponent, B as withDirectives, a6 as normalizeStyle, p as createTextVNode, t as toDisplayString, n as createCommentVNode, a7 as debounce } from "./index.c15e704f.js";
import { Q as QIntersection } from "./QIntersection.196ae3c5.js";
import { Q as QInnerLoading } from "./QInnerLoading.5b5d73c7.js";
import { Q as QBadge } from "./QBadge.7294de63.js";
import { g as getImgBlob, Q as QImg } from "./usefull.6349588e.js";
import { R as Ripple } from "./Ripple.a0364732.js";
import { storeGet } from "./StoreStuff.9c9e2ee5.js";
import { u as useInBar } from "./Filters.e28dcb17.js";
import "./use-dark.97ac6897.js";
import "./QIcon.25655771.js";
import "./use-timeout.a78770d1.js";
import "./scroll.d31d6ae2.js";
import "./dom.617e2098.js";
import "./use-transition.db025f57.js";
import "./focus-manager.32f8d49a.js";
import "./uid.42677368.js";
import "./QResizeObserver.beb445f9.js";
import "./rtl.b51694b1.js";
import "./Intersection.d463dc89.js";
import "./fetcher.10190d88.js";
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
    Display: {
      type: String,
      default: "compact"
    }
  },
  computed: {
    listdivClass() {
      return this.Display == "list" ? "text-left q-ml-md text-h5 col-shrink" : "text-center text-subtitle1";
    }
  },
  mounted: function() {
    getImgBlob(this.manga.thumbnailUrl + "?useCache=" + this.useCache).then(
      (value) => {
        this.imgdata = value;
      }
    );
  },
  setup() {
    const useCache = ref(`${storeGet("useCache", true)}`);
    const imgdata = ref("");
    return { useCache, imgdata };
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
    style: normalizeStyle(_ctx.Display == `list` ? `` : `background: transparent`)
  }, {
    default: withCtx(() => [
      createVNode(_component_router_link, {
        to: `/manga/` + _ctx.manga.id,
        class: normalizeClass(["cursor-pointer", _ctx.$q.dark.isActive ? `light` : `dark`]),
        style: { "text-decoration": "none" }
      }, {
        default: withCtx(() => [
          _ctx.Display != `list` ? (openBlock(), createBlock(QImg, {
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
              _ctx.Display == `compact` ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "absolute-bottom text-subtitle1 text-center",
                title: _ctx.manga.title,
                style: { "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "height": "3.5rem" }
              }, toDisplayString(_ctx.manga.title), 9, _hoisted_2$1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["src"])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3$1, [
            _ctx.Display == `list` ? (openBlock(), createBlock(QImg, {
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
            _ctx.Display != `compact` ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.listdivClass),
              title: _ctx.manga.title,
              style: normalizeStyle([{ "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "overflow": "hidden", "width": "100%" }, _ctx.Display == `list` ? `` : `height: 5.25rem;`])
            }, toDisplayString(_ctx.manga.title), 15, _hoisted_4)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["justify-end flex items-end col-grow", !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? `q-mr-lg` : `q-mr-xs`])
            }, [
              _ctx.manga.unreadCount && _ctx.Display == `list` ? (openBlock(), createBlock(QBadge, {
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
              _ctx.manga.downloadCount && _ctx.Display == `list` ? (openBlock(), createBlock(QBadge, {
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
var MangaCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-6225f8c4"], ["__file", "MangaCard.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "MangaGrid",
  components: { MangaCard },
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
        this.mangas = await this.$fetchJSON(`/api/v1/category/${this.$route.query["tab"]}`);
      }
    }
  },
  created: async function() {
    this.calcWidth = debounce(this.calcWidth, 500);
    this.reload(this.$route.query["tab"]);
  },
  watch: {
    "$route.query.tab": async function(val) {
      this.reload(val);
    }
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
  }
});
const _hoisted_1$1 = {
  class: "flex",
  ref: "MangaGrid"
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
              Display: _ctx.Displ,
              manga: manga2
            }, null, 8, ["Display", "manga"])
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
  name: "libraryPage",
  components: { TabPanel, MangaGrid },
  created: async function() {
    try {
      const jsn = await this.$fetchJSON("/api/v1/category");
      this.tabs = jsn.map((cat2) => {
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
  },
  setup(_props, { emit }) {
    emit("setTitle", "Library");
    const tabs = ref([]);
    const failedFetch = ref(false);
    return {
      tabs,
      failedFetch
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeVBhZ2UuZDc2YjAwZjkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy9RUm91dGVUYWIuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RhYlBhbmVsLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FDYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FHcmlkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9saWJyYXJ5UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSb3V0ZVRhYicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlVGFiUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCByb3V0ZURhdGEgPSB1c2VSb3V0ZXJMaW5rKHtcbiAgICAgIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHM6IGZhbHNlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgcmVuZGVyVGFiLCAkdGFicyB9ID0gdXNlVGFiKFxuICAgICAgcHJvcHMsXG4gICAgICBzbG90cyxcbiAgICAgIGVtaXQsXG4gICAgICB7XG4gICAgICAgIGV4YWN0OiBjb21wdXRlZCgoKSA9PiBwcm9wcy5leGFjdCksXG4gICAgICAgIC4uLnJvdXRlRGF0YVxuICAgICAgfVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGAkeyBwcm9wcy5uYW1lIH0gfCAkeyBwcm9wcy5leGFjdCB9IHwgJHsgKHJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWUgfHwge30pLmhyZWYgfWAsICgpID0+IHtcbiAgICAgICR0YWJzLnZlcmlmeVJvdXRlTW9kZWwoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKHJvdXRlRGF0YS5saW5rVGFnLnZhbHVlLCByb3V0ZURhdGEubGlua0F0dHJzLnZhbHVlKVxuICB9XG59KVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXIteS1tZFwiPlxuICAgICAgPHEtdGFic1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgaW5saW5lLWxhYmVsXG4gICAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgYmctZGFyay1wYWdlYCA6IGBiZy1saWdodC1wYWdlYFwiXG4gICAgICA+XG4gICAgICAgIDxxLXJvdXRlLXRhYlxuICAgICAgICAgIHYtZm9yPVwidGFiYiBpbiB0YWJzXCJcbiAgICAgICAgICA6a2V5PVwidGFiYi50YWJJRFwiXG4gICAgICAgICAgOm5hbWU9XCJ0YWJiLnRhYklEXCJcbiAgICAgICAgICA6bGFiZWw9XCJ0YWJiLnRhYm5hbWVcIlxuICAgICAgICAgIGNsYXNzPVwiY29sLWdyb3dcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICA6dG89XCJ7IHF1ZXJ5OiB7IC4uLiRyb3V0ZS5xdWVyeSwgdGFiOiB0YWJiLnRhYklEIH0gfVwiXG4gICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAkcm91dGUucXVlcnlbJ3RhYiddID09IHRhYmIudGFiSUQudG9TdHJpbmcoKSA/IGB0ZXh0LXByaW1hcnlgIDogYGBcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRhYnM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1RhYlBhbmVsJyxcbiAgcHJvcHM6IHtcbiAgICB0YWJzOiB7XG4gICAgICB0eXBlOiBBcnJheSBhcyBQcm9wVHlwZTx0YWJbXT4sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuICAgIGlmIChyb3V0ZS5xdWVyeVsndGFiJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcm91dGVyLnB1c2goeyBxdWVyeTogeyAuLi5yb3V0ZS5xdWVyeSwgdGFiOiAwIH0gfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0YWI6IHJlZihuZXcgTnVtYmVyKHJvdXRlLnF1ZXJ5Wyd0YWInXSkudmFsdWVPZigpIHx8IDApXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkXG4gICAgdi1yaXBwbGVcbiAgICBmbGF0XG4gICAgY2xhc3M9XCJteS1jYXJkXCJcbiAgICA6Y2xhc3M9XCIhKCRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMpID8gYHEtbWEtc21gIDogYHEtbWEteHNgXCJcbiAgICA6c3R5bGU9XCJEaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGJhY2tncm91bmQ6IHRyYW5zcGFyZW50YFwiXG4gID5cbiAgICA8cm91dGVyLWxpbmtcbiAgICAgIDp0bz1cImAvbWFuZ2EvYCArIG1hbmdhLmlkXCJcbiAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IG5vbmVcIlxuICAgICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgID5cbiAgICAgIDxxLWltZ1xuICAgICAgICB2LWlmPVwiRGlzcGxheSAhPSBgbGlzdGBcIlxuICAgICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGFzcGVjdC1yYXRpbzogMjI1LzM1MFwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgPlxuICAgICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwiIWltZ2RhdGFcIiBjb2xvcj1cInByaW1hcnlcIj4gPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50IGFic29sdXRlLXRvcCBxLW10LXhzIHEtbWwteHNcIlxuICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIHYtaWY9XCJtYW5nYS51bnJlYWRDb3VudFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCJcbiAgICAgICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgICAgICBtYW5nYS5kb3dubG9hZENvdW50XG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbWFuZ2EudW5yZWFkQ291bnQgfX1cbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgICAgdi1pZj1cIm1hbmdhLmRvd25sb2FkQ291bnRcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogbWluLWNvbnRlbnQ7IHBhZGRpbmc6IDVweFwiXG4gICAgICAgICAgICA6c3R5bGU9XCJcbiAgICAgICAgICAgICAgbWFuZ2EudW5yZWFkQ291bnRcbiAgICAgICAgICAgICAgICA/IGBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbWFuZ2EuZG93bmxvYWRDb3VudCB9fVxuICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWJvdHRvbSB0ZXh0LXN1YnRpdGxlMSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgdi1pZj1cIkRpc3BsYXkgPT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICA6dGl0bGU9XCJtYW5nYS50aXRsZVwiXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBtYW5nYS50aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1pbWc+XG4gICAgICA8IS0tIGxpc3QgZGlzcGxheSBtb2RlIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgY29sLWdyb3cgbm8td3JhcFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICB2LWlmPVwiRGlzcGxheSA9PSBgbGlzdGBcIlxuICAgICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogOTNweDsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwOyB3aWR0aDogZml0LWNvbnRlbnRcIlxuICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjb2wtMVwiXG4gICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICA+XG4gICAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cIiFpbWdkYXRhXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICA6Y2xhc3M9XCJsaXN0ZGl2Q2xhc3NcIlxuICAgICAgICAgIHYtaWY9XCJEaXNwbGF5ICE9IGBjb21wYWN0YFwiXG4gICAgICAgICAgOnRpdGxlPVwibWFuZ2EudGl0bGVcIlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA6c3R5bGU9XCJEaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGhlaWdodDogNS4yNXJlbTtgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJqdXN0aWZ5LWVuZCBmbGV4IGl0ZW1zLWVuZCBjb2wtZ3Jvd1wiXG4gICAgICAgICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1yLWxnYCA6IGBxLW1yLXhzYFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIHYtaWY9XCJtYW5nYS51bnJlYWRDb3VudCAmJiBEaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCJcbiAgICAgICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgICAgICBtYW5nYS5kb3dubG9hZENvdW50XG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbWFuZ2EudW5yZWFkQ291bnQgfX1cbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgICAgdi1pZj1cIm1hbmdhLmRvd25sb2FkQ291bnQgJiYgRGlzcGxheSA9PSBgbGlzdGBcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogbWluLWNvbnRlbnQ7IHBhZGRpbmc6IDVweFwiXG4gICAgICAgICAgICA6c3R5bGU9XCJcbiAgICAgICAgICAgICAgbWFuZ2EudW5yZWFkQ291bnRcbiAgICAgICAgICAgICAgICA/IGBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7YFxuICAgICAgICAgICAgICAgIDogYGBcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbWFuZ2EuZG93bmxvYWRDb3VudCB9fVxuICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3JvdXRlci1saW5rPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgbWFuZ2EgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGdldEltZ0Jsb2IgfSBmcm9tICcuLi9nbG9iYWwvdXNlZnVsbCc7XG5pbXBvcnQgeyBzdG9yZUdldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFuZ2FDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBtYW5nYToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPG1hbmdhPixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IE9iamVjdFxuICAgIH0sXG4gICAgRGlzcGxheToge1xuICAgICAgdHlwZTogU3RyaW5nIGFzIFByb3BUeXBlPCdjb21wYWN0JyB8ICdjb21mb3J0JyB8ICdsaXN0Jz4sXG4gICAgICBkZWZhdWx0OiAnY29tcGFjdCdcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGRpdkNsYXNzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5EaXNwbGF5ID09ICdsaXN0J1xuICAgICAgICA/ICd0ZXh0LWxlZnQgcS1tbC1tZCB0ZXh0LWg1IGNvbC1zaHJpbmsnXG4gICAgICAgIDogJ3RleHQtY2VudGVyIHRleHQtc3VidGl0bGUxJztcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBnZXRJbWdCbG9iKHRoaXMubWFuZ2EudGh1bWJuYWlsVXJsICsgJz91c2VDYWNoZT0nICsgdGhpcy51c2VDYWNoZSkudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICApO1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCB1c2VDYWNoZSA9IHJlZihgJHtzdG9yZUdldCgndXNlQ2FjaGUnLCB0cnVlKX1gKTtcbiAgICBjb25zdCBpbWdkYXRhID0gcmVmKCcnKTtcbiAgICByZXR1cm4geyB1c2VDYWNoZSwgaW1nZGF0YSB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzYXNzXCI+XG4ubXktY2FyZCBkaXYucS1pbWctLW1lbnU6aG92ZXJcbiAgdHJhbnNpdGlvbjogZmlsdGVyICRnZW5lcmljLWhvdmVyLXRyYW5zaXRpb25cbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNylcbjwvc3R5bGU+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXhcIiByZWY9XCJNYW5nYUdyaWRcIj5cbiAgICA8cS1pbnRlcnNlY3Rpb25cbiAgICAgIHYtZm9yPVwibWFuZ2EgaW4gZG9zcnRcIlxuICAgICAgOmtleT1cIm1hbmdhLmlkXCJcbiAgICAgIDpzdHlsZT1cIndpZHRcIlxuICAgICAgdHJhbnNpdGlvbj1cImZhZGVcIlxuICAgID5cbiAgICAgIDxNYW5nYUNhcmQgOkRpc3BsYXk9XCJEaXNwbFwiIDptYW5nYT1cIm1hbmdhXCI+PC9NYW5nYUNhcmQ+XG4gICAgPC9xLWludGVyc2VjdGlvbj5cbiAgPC9kaXY+XG4gIDxxLWlubmVyLWxvYWRpbmdcbiAgICBzdHlsZT1cIlxuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcIlxuICAgIDpzaG93aW5nPVwiIWRvc3J0Lmxlbmd0aFwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgPlxuICA8L3EtaW5uZXItbG9hZGluZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IE1hbmdhQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L01hbmdhQ2FyZC52dWUnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9GaWx0ZXJzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAncXVhc2FyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ01hbmdhR3JpZCcsXG4gIGNvbXBvbmVudHM6IHsgTWFuZ2FDYXJkIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZG9GaWx0KCk6IG1hbmdhW10ge1xuICAgICAgbGV0IG1hbmdhcyA9IHRoaXMubWFuZ2FzO1xuICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5WydxJ10pIHtcbiAgICAgICAgbWFuZ2FzID0gbWFuZ2FzLmZpbHRlcigobWFuZ2EpID0+XG4gICAgICAgICAgbWFuZ2EudGl0bGVcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoYCR7dGhpcy4kcm91dGUucXVlcnlbJ3EnXSB8fCAnJ31gLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLnVucmVhZCAhPSBudWxsKSB7XG4gICAgICAgIG1hbmdhcyA9IG1hbmdhcy5maWx0ZXIoKG1hbmdhKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy51bnJlYWQgPyAhIW1hbmdhLnVucmVhZENvdW50IDogIW1hbmdhLnVucmVhZENvdW50XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLmRvd25sb2FkZWQgIT0gbnVsbCkge1xuICAgICAgICBtYW5nYXMgPSBtYW5nYXMuZmlsdGVyKChtYW5nYSkgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlcnMuZG93bmxvYWRlZCA/ICEhbWFuZ2EuZG93bmxvYWRDb3VudCA6ICFtYW5nYS5kb3dubG9hZENvdW50XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFuZ2FzO1xuICAgIH0sXG4gICAgZG9zcnQoKTogbWFuZ2FbXSB7XG4gICAgICBsZXQgbWFuZ2FzID0gdGhpcy5kb0ZpbHQ7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLmxlZnRUb1JlYWQgIT0gbnVsbCkge1xuICAgICAgICBtYW5nYXMgPSBtYW5nYXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnMubGVmdFRvUmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuIGEudW5yZWFkQ291bnQgPj0gYi51bnJlYWRDb3VudCA/IC0xIDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGEudW5yZWFkQ291bnQgPD0gYi51bnJlYWRDb3VudCA/IC0xIDogMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLmFscGhhYmV0aWNhbCAhPSBudWxsKSB7XG4gICAgICAgIG1hbmdhcyA9IG1hbmdhcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVycy5hbHBoYWJldGljYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnRpdGxlID49IGIudGl0bGUgPyAtMSA6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhLnRpdGxlIDw9IGIudGl0bGUgPyAtMSA6IDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVycy5CeUlEICE9IG51bGwpIHtcbiAgICAgICAgbWFuZ2FzID0gbWFuZ2FzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzLkJ5SUQpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmlkID49IGIuaWQgPyAtMSA6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhLmlkIDw9IGIuaWQgPyAtMSA6IDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hbmdhcztcbiAgICB9LFxuICAgIERpc3BsKCkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVycy5EaXNwbGF5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdjb21wYWN0JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJzLkRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuICdjb21mb3J0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbGlzdCc7XG4gICAgfSxcbiAgICB3aWR0KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5EaXNwbCA9PSAnbGlzdCdcbiAgICAgICAgPyAnd2lkdGg6MTAwJTsgaGVpZ2h0OiAxMDlweDsnXG4gICAgICAgIDogYHdpZHRoOiBjYWxjKDEwMCUgLyAke3RoaXMuZGV2aWRlcn0pOyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7dHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLW91dDtgO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNhbGNXaWR0aCgpIHtcbiAgICAgIGNvbnN0IGdyaWQgPSA8RWxlbWVudD50aGlzLiRyZWZzWydNYW5nYUdyaWQnXTtcbiAgICAgIGNvbnN0IGlkZWFsID0gPG51bWJlcj50aGlzLiRzdG9yZUdldCgnTWl0ZW1XJywgMzAwKTtcbiAgICAgIGlmIChncmlkLmNsaWVudFdpZHRoID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdGhpcy5kZXZpZGVyID0gTWF0aC5yb3VuZChncmlkLmNsaWVudFdpZHRoIC8gaWRlYWwpO1xuICAgIH0sXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuJHBhcmVudD8uJGVsO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBsZXQgSGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgSGVpZ2h0IC09IHBhcmVudC5jaGlsZHJlblswXS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiBIZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIGFzeW5jIHJlbG9hZCh2YWw6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tYW5nYXMgPSBbXTtcbiAgICAgICAgdGhpcy5tYW5nYXMgPSA8bWFuZ2FbXT4oXG4gICAgICAgICAgYXdhaXQgdGhpcy4kZmV0Y2hKU09OKGAvYXBpL3YxL2NhdGVnb3J5LyR7dGhpcy4kcm91dGUucXVlcnlbJ3RhYiddfWApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxjV2lkdGggPSBkZWJvdW5jZSh0aGlzLmNhbGNXaWR0aCwgNTAwKTtcbiAgICB0aGlzLnJlbG9hZCh0aGlzLiRyb3V0ZS5xdWVyeVsndGFiJ10gYXMgbnVtYmVyIHwgdW5kZWZpbmVkKTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlLnF1ZXJ5LnRhYic6IGFzeW5jIGZ1bmN0aW9uICh2YWw6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZWxvYWQodmFsKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCgpO1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNXaWR0aCk7XG4gICAgfSk7XG4gIH0sXG4gIGJlZm9yZVVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1dpZHRoKTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHJlZihGaWx0ZXJzKCkpO1xuICAgIGNvbnN0IGRldmlkZXIgPSByZWY8bnVtYmVyPigwKTtcbiAgICBjb25zdCBjbHdpZHRoID0gcmVmPG51bWJlcj4oMCk7XG4gICAgY29uc3QgbWFuZ2FzID0gcmVmKDxtYW5nYVtdPltdKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGV2aWRlcixcbiAgICAgIG1hbmdhcyxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBjbHdpZHRoXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuIDx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPFRhYlBhbmVsIGFjdGl2ZSA6dGFicz1cInRhYnNcIj48L1RhYlBhbmVsPlxuICAgIDxNYW5nYUdyaWQgdi1pZj1cIiFmYWlsZWRGZXRjaFwiPiA8L01hbmdhR3JpZD5cbiAgICA8cS1kaWFsb2cgdi1tb2RlbD1cImZhaWxlZEZldGNoXCIgcGVyc2lzdGVudD5cbiAgICAgIDxxLWNhcmQgc3R5bGU9XCJtaW4td2lkdGg6IDM1MHB4XCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICAgID48cS1pdGVtPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwidGV4dC1oNiB0ZXh0LW5lZ2F0aXZlXCJcbiAgICAgICAgICAgICAgICA+R2V0dGluZyBjYXRlZ29yaWVzIGZhaWxlZC5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWluZm8gcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+SGF2ZSB5b3Ugc2V0IHlvdXIgc2VydmVyIGFkZHJlc3M/PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5JcyB0aGUgc2VydmVyIHJ1bm5pbmc/PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIFByZXNzaW5nIE9rIHdpbGwgdGFrZSB5b3UgdG8gdGhlIHNldHRpbmdzIHBhZ2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgPHEtYnRuIGZsYXQgbGFiZWw9XCJva1wiIHYtY2xvc2UtcG9wdXAgdG89XCIvc2V0dGluZ3NcIiAvPlxuICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLWRpYWxvZz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdGFiIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgVGFiUGFuZWwgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9UYWJQYW5lbC52dWUnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY2F0IH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgTWFuZ2FHcmlkIGZyb20gJ3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FHcmlkLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdsaWJyYXJ5UGFnZScsXG4gIGNvbXBvbmVudHM6IHsgVGFiUGFuZWwsIE1hbmdhR3JpZCB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzbjogY2F0W10gPSBhd2FpdCB0aGlzLiRmZXRjaEpTT04oJy9hcGkvdjEvY2F0ZWdvcnknKTtcbiAgICAgIHRoaXMudGFicyA9IGpzbi5tYXAoKGNhdCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRhYm5hbWU6IGNhdC5uYW1lLFxuICAgICAgICAgIHRhYklEOiBjYXQuaWRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZmFpbGVkRmV0Y2ggPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKF9wcm9wcywgeyBlbWl0IH0pIHtcbiAgICBlbWl0KCdzZXRUaXRsZScsICdMaWJyYXJ5Jyk7XG4gICAgY29uc3QgdGFicyA9IHJlZjx0YWJbXT4oW10pO1xuICAgIGNvbnN0IGZhaWxlZEZldGNoID0gcmVmKGZhbHNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGFicyxcbiAgICAgIGZhaWxlZEZldGNoXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUJsb2NrIiwiX2hvaXN0ZWRfMyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIm1hbmdhIiwiRmlsdGVycyIsImNhdCIsIl93aXRoQ3R4IiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBQSxZQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9B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
