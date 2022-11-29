import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { u as useRouterLinkProps, a as useRouterLink, Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { u as useTabProps, a as useTabEmits, b as useTab, Q as QTabs } from "./QTabs.03dcafd4.js";
import { c as createComponent } from "./QSpinner.6511ee07.js";
import { c as computed, w as watch, f as defineComponent, r as ref, _ as _export_sfc, a6 as useRouter, a7 as useRoute, j as openBlock, y as createElementBlock, v as createBaseVNode, n as createVNode, m as withCtx, F as Fragment, z as renderList, x as normalizeStyle, k as createBlock, s as normalizeClass, u as resolveComponent, D as withDirectives, q as createTextVNode, t as toDisplayString, p as createCommentVNode, a8 as debounce } from "./index.75e4774b.js";
import { Q as QIntersection } from "./QIntersection.5a6859cd.js";
import { Q as QInnerLoading } from "./QInnerLoading.dc9c40c5.js";
import { Q as QBadge } from "./QBadge.0d5331c7.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { g as getImgBlob } from "./usefull.5da5779b.js";
import { u as useInBar } from "./Filters.e940003f.js";
import "./use-dark.63b90c22.js";
import "./QIcon.aa032244.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./use-transition.34947ede.js";
import "./focus-manager.32f8d49a.js";
import "./uid.42677368.js";
import "./QResizeObserver.98338598.js";
import "./rtl.b51694b1.js";
import "./Intersection.1f7cb92e.js";
import "./fetcher.d026f468.js";
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
        style: normalizeStyle(
          `background-color:` + (_ctx.$q.dark.isActive ? `var(--q-dark-page)` : `white`)
        )
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
      }, 8, ["modelValue", "style"])
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
    const $q = useQuasar();
    const useCache = ref(`${$q.localStorage.getItem("useCache")}`);
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
        class: normalizeClass(["cursor-pointer", _ctx.$q.dark.isActive ? `text-white` : `text-dark`]),
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
var MangaCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-1d0252d3"], ["__file", "MangaCard.vue"]]);
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
      const ideal = this.$q.localStorage.getItem("MitemW");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeVBhZ2UuY2NjNDNlNWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy9RUm91dGVUYWIuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RhYlBhbmVsLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FDYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FHcmlkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9saWJyYXJ5UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSb3V0ZVRhYicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlVGFiUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCByb3V0ZURhdGEgPSB1c2VSb3V0ZXJMaW5rKHtcbiAgICAgIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHM6IGZhbHNlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgcmVuZGVyVGFiLCAkdGFicyB9ID0gdXNlVGFiKFxuICAgICAgcHJvcHMsXG4gICAgICBzbG90cyxcbiAgICAgIGVtaXQsXG4gICAgICB7XG4gICAgICAgIGV4YWN0OiBjb21wdXRlZCgoKSA9PiBwcm9wcy5leGFjdCksXG4gICAgICAgIC4uLnJvdXRlRGF0YVxuICAgICAgfVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGAkeyBwcm9wcy5uYW1lIH0gfCAkeyBwcm9wcy5leGFjdCB9IHwgJHsgKHJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWUgfHwge30pLmhyZWYgfWAsICgpID0+IHtcbiAgICAgICR0YWJzLnZlcmlmeVJvdXRlTW9kZWwoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKHJvdXRlRGF0YS5saW5rVGFnLnZhbHVlLCByb3V0ZURhdGEubGlua0F0dHJzLnZhbHVlKVxuICB9XG59KVxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXIteS1tZFwiPlxuICAgICAgPHEtdGFic1xuICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgaW5saW5lLWxhYmVsXG4gICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOmAgK1xuICAgICAgICAgICgkcS5kYXJrLmlzQWN0aXZlID8gYHZhcigtLXEtZGFyay1wYWdlKWAgOiBgd2hpdGVgKVxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICB2LWZvcj1cInRhYmIgaW4gdGFic1wiXG4gICAgICAgICAgOmtleT1cInRhYmIudGFiSURcIlxuICAgICAgICAgIDpuYW1lPVwidGFiYi50YWJJRFwiXG4gICAgICAgICAgOmxhYmVsPVwidGFiYi50YWJuYW1lXCJcbiAgICAgICAgICBjbGFzcz1cImNvbC1ncm93XCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgOnRvPVwieyBxdWVyeTogeyAuLi4kcm91dGUucXVlcnksIHRhYjogdGFiYi50YWJJRCB9IH1cIlxuICAgICAgICAgIDpjbGFzcz1cIlxuICAgICAgICAgICAgJHJvdXRlLnF1ZXJ5Wyd0YWInXSA9PSB0YWJiLnRhYklELnRvU3RyaW5nKCkgPyBgdGV4dC1wcmltYXJ5YCA6IGBgXG4gICAgICAgICAgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS10YWJzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdUYWJQYW5lbCcsXG4gIHByb3BzOiB7XG4gICAgdGFiczoge1xuICAgICAgdHlwZTogQXJyYXkgYXMgUHJvcFR5cGU8dGFiW10+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBpZiAocm91dGUucXVlcnlbJ3RhYiddID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKHsgcXVlcnk6IHsgLi4ucm91dGUucXVlcnksIHRhYjogMCB9IH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGFiOiByZWYobmV3IE51bWJlcihyb3V0ZS5xdWVyeVsndGFiJ10pLnZhbHVlT2YoKSB8fCAwKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZFxuICAgIHYtcmlwcGxlXG4gICAgZmxhdFxuICAgIGNsYXNzPVwibXktY2FyZFwiXG4gICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1hLXNtYCA6IGBxLW1hLXhzYFwiXG4gICAgOnN0eWxlPVwiRGlzcGxheSA9PSBgbGlzdGAgPyBgYCA6IGBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGBcIlxuICA+XG4gICAgPHJvdXRlci1saW5rXG4gICAgICA6dG89XCJgL21hbmdhL2AgKyBtYW5nYS5pZFwiXG4gICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCJcbiAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgdGV4dC13aGl0ZWAgOiBgdGV4dC1kYXJrYFwiXG4gICAgPlxuICAgICAgPHEtaW1nXG4gICAgICAgIHYtaWY9XCJEaXNwbGF5ICE9IGBsaXN0YFwiXG4gICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwXCJcbiAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgICBuby1zcGlubmVyXG4gICAgICA+XG4gICAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCIhaW1nZGF0YVwiIGNvbG9yPVwicHJpbWFyeVwiPiA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnQgYWJzb2x1dGUtdG9wIHEtbXQteHMgcS1tbC14c1wiXG4gICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWJhZGdlXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgdi1pZj1cIm1hbmdhLnVucmVhZENvdW50XCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgICAgOnN0eWxlPVwiXG4gICAgICAgICAgICAgIG1hbmdhLmRvd25sb2FkQ291bnRcbiAgICAgICAgICAgICAgICA/IGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtgXG4gICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBtYW5nYS51bnJlYWRDb3VudCB9fVxuICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICB2LWlmPVwibWFuZ2EuZG93bmxvYWRDb3VudFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCJcbiAgICAgICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgICAgICBtYW5nYS51bnJlYWRDb3VudFxuICAgICAgICAgICAgICAgID8gYGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtgXG4gICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBtYW5nYS5kb3dubG9hZENvdW50IH19XG4gICAgICAgICAgPC9xLWJhZGdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtYm90dG9tIHRleHQtc3VidGl0bGUxIHRleHQtY2VudGVyXCJcbiAgICAgICAgICB2LWlmPVwiRGlzcGxheSA9PSBgY29tcGFjdGBcIlxuICAgICAgICAgIDp0aXRsZT1cIm1hbmdhLnRpdGxlXCJcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWltZz5cbiAgICAgIDwhLS0gbGlzdCBkaXNwbGF5IG1vZGUgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBjb2wtZ3JvdyBuby13cmFwXCI+XG4gICAgICAgIDxxLWltZ1xuICAgICAgICAgIHYtaWY9XCJEaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGNvbC0xXCJcbiAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwiIWltZ2RhdGFcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIDpjbGFzcz1cImxpc3RkaXZDbGFzc1wiXG4gICAgICAgICAgdi1pZj1cIkRpc3BsYXkgIT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICA6dGl0bGU9XCJtYW5nYS50aXRsZVwiXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIDpzdHlsZT1cIkRpc3BsYXkgPT0gYGxpc3RgID8gYGAgOiBgaGVpZ2h0OiA1LjI1cmVtO2BcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbWFuZ2EudGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImp1c3RpZnktZW5kIGZsZXggaXRlbXMtZW5kIGNvbC1ncm93XCJcbiAgICAgICAgICA6Y2xhc3M9XCIhKCRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMpID8gYHEtbXItbGdgIDogYHEtbXIteHNgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWJhZGdlXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgdi1pZj1cIm1hbmdhLnVucmVhZENvdW50ICYmIERpc3BsYXkgPT0gYGxpc3RgXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgICAgOnN0eWxlPVwiXG4gICAgICAgICAgICAgIG1hbmdhLmRvd25sb2FkQ291bnRcbiAgICAgICAgICAgICAgICA/IGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtgXG4gICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBtYW5nYS51bnJlYWRDb3VudCB9fVxuICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICB2LWlmPVwibWFuZ2EuZG93bmxvYWRDb3VudCAmJiBEaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCJcbiAgICAgICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgICAgICBtYW5nYS51bnJlYWRDb3VudFxuICAgICAgICAgICAgICAgID8gYGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtgXG4gICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBtYW5nYS5kb3dubG9hZENvdW50IH19XG4gICAgICAgICAgPC9xLWJhZGdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcm91dGVyLWxpbms+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGdldEltZ0Jsb2IgfSBmcm9tICcuLi9nbG9iYWwvdXNlZnVsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYUNhcmQnLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gT2JqZWN0XG4gICAgfSxcbiAgICBEaXNwbGF5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8J2NvbXBhY3QnIHwgJ2NvbWZvcnQnIHwgJ2xpc3QnPixcbiAgICAgIGRlZmF1bHQ6ICdjb21wYWN0J1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsYXkgPT0gJ2xpc3QnXG4gICAgICAgID8gJ3RleHQtbGVmdCBxLW1sLW1kIHRleHQtaDUgY29sLXNocmluaydcbiAgICAgICAgOiAndGV4dC1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEnO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGdldEltZ0Jsb2IodGhpcy5tYW5nYS50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7JHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZUNhY2hlJyl9YCk7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5teS1jYXJkIGRpdi5xLWltZy0tbWVudTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xufVxuPC9zdHlsZT5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleFwiIHJlZj1cIk1hbmdhR3JpZFwiPlxuICAgIDxxLWludGVyc2VjdGlvblxuICAgICAgdi1mb3I9XCJtYW5nYSBpbiBkb3NydFwiXG4gICAgICA6a2V5PVwibWFuZ2EuaWRcIlxuICAgICAgOnN0eWxlPVwid2lkdFwiXG4gICAgICB0cmFuc2l0aW9uPVwiZmFkZVwiXG4gICAgPlxuICAgICAgPE1hbmdhQ2FyZCA6RGlzcGxheT1cIkRpc3BsXCIgOm1hbmdhPVwibWFuZ2FcIj48L01hbmdhQ2FyZD5cbiAgICA8L3EtaW50ZXJzZWN0aW9uPlxuICA8L2Rpdj5cbiAgPHEtaW5uZXItbG9hZGluZ1xuICAgIHN0eWxlPVwiXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIFwiXG4gICAgOnNob3dpbmc9XCIhZG9zcnQubGVuZ3RoXCJcbiAgICBjb2xvcj1cInByaW1hcnlcIlxuICA+XG4gIDwvcS1pbm5lci1sb2FkaW5nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgTWFuZ2FDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL2xpYnJhcnkvTWFuZ2FDYXJkLnZ1ZSc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L0ZpbHRlcnMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdxdWFzYXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFuZ2FHcmlkJyxcbiAgY29tcG9uZW50czogeyBNYW5nYUNhcmQgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBkb0ZpbHQoKTogbWFuZ2FbXSB7XG4gICAgICBsZXQgbWFuZ2FzID0gdGhpcy5tYW5nYXM7XG4gICAgICBpZiAodGhpcy4kcm91dGUucXVlcnlbJ3EnXSkge1xuICAgICAgICBtYW5nYXMgPSBtYW5nYXMuZmlsdGVyKChtYW5nYSkgPT5cbiAgICAgICAgICBtYW5nYS50aXRsZVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmNsdWRlcyhgJHt0aGlzLiRyb3V0ZS5xdWVyeVsncSddIHx8ICcnfWAudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbHRlcnMudW5yZWFkICE9IG51bGwpIHtcbiAgICAgICAgbWFuZ2FzID0gbWFuZ2FzLmZpbHRlcigobWFuZ2EpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJzLnVucmVhZCA/ICEhbWFuZ2EudW5yZWFkQ291bnQgOiAhbWFuZ2EudW5yZWFkQ291bnRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuZG93bmxvYWRlZCAhPSBudWxsKSB7XG4gICAgICAgIG1hbmdhcyA9IG1hbmdhcy5maWx0ZXIoKG1hbmdhKSA9PlxuICAgICAgICAgIHRoaXMuZmlsdGVycy5kb3dubG9hZGVkID8gISFtYW5nYS5kb3dubG9hZENvdW50IDogIW1hbmdhLmRvd25sb2FkQ291bnRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYW5nYXM7XG4gICAgfSxcbiAgICBkb3NydCgpOiBtYW5nYVtdIHtcbiAgICAgIGxldCBtYW5nYXMgPSB0aGlzLmRvRmlsdDtcbiAgICAgIGlmICh0aGlzLmZpbHRlcnMubGVmdFRvUmVhZCAhPSBudWxsKSB7XG4gICAgICAgIG1hbmdhcyA9IG1hbmdhcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVycy5sZWZ0VG9SZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4gYS51bnJlYWRDb3VudCA+PSBiLnVucmVhZENvdW50ID8gLTEgOiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYS51bnJlYWRDb3VudCA8PSBiLnVucmVhZENvdW50ID8gLTEgOiAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbHRlcnMuYWxwaGFiZXRpY2FsICE9IG51bGwpIHtcbiAgICAgICAgbWFuZ2FzID0gbWFuZ2FzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzLmFscGhhYmV0aWNhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGEudGl0bGUgPj0gYi50aXRsZSA/IC0xIDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGEudGl0bGUgPD0gYi50aXRsZSA/IC0xIDogMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLkJ5SUQgIT0gbnVsbCkge1xuICAgICAgICBtYW5nYXMgPSBtYW5nYXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnMuQnlJRCkge1xuICAgICAgICAgICAgcmV0dXJuIGEuaWQgPj0gYi5pZCA/IC0xIDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGEuaWQgPD0gYi5pZCA/IC0xIDogMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFuZ2FzO1xuICAgIH0sXG4gICAgRGlzcGwoKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzLkRpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ2NvbXBhY3QnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlcnMuRGlzcGxheSkge1xuICAgICAgICByZXR1cm4gJ2NvbWZvcnQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdsaXN0JztcbiAgICB9LFxuICAgIHdpZHQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsID09ICdsaXN0J1xuICAgICAgICA/ICd3aWR0aDoxMDAlOyBoZWlnaHQ6IDEwOXB4OydcbiAgICAgICAgOiBgd2lkdGg6IGNhbGMoMTAwJSAvICR7dGhpcy5kZXZpZGVyfSk7IGFzcGVjdC1yYXRpbzogMjI1LzM1MDt0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2Utb3V0O2A7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2FsY1dpZHRoKCkge1xuICAgICAgY29uc3QgZ3JpZCA9IDxFbGVtZW50PnRoaXMuJHJlZnNbJ01hbmdhR3JpZCddO1xuICAgICAgY29uc3QgaWRlYWwgPSA8bnVtYmVyPnRoaXMuJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01pdGVtVycpO1xuICAgICAgaWYgKGdyaWQuY2xpZW50V2lkdGggPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICB0aGlzLmRldmlkZXIgPSBNYXRoLnJvdW5kKGdyaWQuY2xpZW50V2lkdGggLyBpZGVhbCk7XG4gICAgfSxcbiAgICBjYWxjSGVpZ2h0KCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy4kcGFyZW50Py4kZWw7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGxldCBIZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBIZWlnaHQgLT0gcGFyZW50LmNoaWxkcmVuWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgcmV0dXJuIEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgYXN5bmMgcmVsb2FkKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1hbmdhcyA9IFtdO1xuICAgICAgICB0aGlzLm1hbmdhcyA9IDxtYW5nYVtdPihcbiAgICAgICAgICBhd2FpdCB0aGlzLiRmZXRjaEpTT04oYC9hcGkvdjEvY2F0ZWdvcnkvJHt0aGlzLiRyb3V0ZS5xdWVyeVsndGFiJ119YClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCA9IGRlYm91bmNlKHRoaXMuY2FsY1dpZHRoLCA1MDApO1xuICAgIHRoaXMucmVsb2FkKHRoaXMuJHJvdXRlLnF1ZXJ5Wyd0YWInXSBhcyBudW1iZXIgfCB1bmRlZmluZWQpO1xuICB9LFxuICB3YXRjaDoge1xuICAgICckcm91dGUucXVlcnkudGFiJzogYXN5bmMgZnVuY3Rpb24gKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbG9hZCh2YWwpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FsY1dpZHRoKCk7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1dpZHRoKTtcbiAgICB9KTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjV2lkdGgpO1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gcmVmKEZpbHRlcnMoKSk7XG4gICAgY29uc3QgZGV2aWRlciA9IHJlZjxudW1iZXI+KDApO1xuICAgIGNvbnN0IGNsd2lkdGggPSByZWY8bnVtYmVyPigwKTtcbiAgICBjb25zdCBtYW5nYXMgPSByZWYoPG1hbmdhW10+W10pO1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpZGVyLFxuICAgICAgbWFuZ2FzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIGNsd2lkdGhcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG4gPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8VGFiUGFuZWwgYWN0aXZlIDp0YWJzPVwidGFic1wiPjwvVGFiUGFuZWw+XG4gICAgPE1hbmdhR3JpZCB2LWlmPVwiIWZhaWxlZEZldGNoXCI+IDwvTWFuZ2FHcmlkPlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwiZmFpbGVkRmV0Y2hcIiBwZXJzaXN0ZW50PlxuICAgICAgPHEtY2FyZCBzdHlsZT1cIm1pbi13aWR0aDogMzUwcHhcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgPjxxLWl0ZW0+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJ0ZXh0LWg2IHRleHQtbmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgID5HZXR0aW5nIGNhdGVnb3JpZXMgZmFpbGVkLlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtaW5mbyBxLXB0LWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5IYXZlIHlvdSBzZXQgeW91ciBzZXJ2ZXIgYWRkcmVzcz88L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PklzIHRoZSBzZXJ2ZXIgcnVubmluZz88L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wdC1zbVwiPlxuICAgICAgICAgICAgICAgICAgUHJlc3NpbmcgT2sgd2lsbCB0YWtlIHlvdSB0byB0aGUgc2V0dGluZ3MgcGFnZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICA8cS1idG4gZmxhdCBsYWJlbD1cIm9rXCIgdi1jbG9zZS1wb3B1cCB0bz1cIi9zZXR0aW5nc1wiIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB0YWIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBUYWJQYW5lbCBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L1RhYlBhbmVsLnZ1ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjYXQgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBNYW5nYUdyaWQgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9NYW5nYUdyaWQudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ2xpYnJhcnlQYWdlJyxcbiAgY29tcG9uZW50czogeyBUYWJQYW5lbCwgTWFuZ2FHcmlkIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNuOiBjYXRbXSA9IGF3YWl0IHRoaXMuJGZldGNoSlNPTignL2FwaS92MS9jYXRlZ29yeScpO1xuICAgICAgdGhpcy50YWJzID0ganNuLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGFibmFtZTogY2F0Lm5hbWUsXG4gICAgICAgICAgdGFiSUQ6IGNhdC5pZFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5mYWlsZWRGZXRjaCA9IHRydWU7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ0xpYnJhcnknKTtcbiAgICBjb25zdCB0YWJzID0gcmVmPHRhYltdPihbXSk7XG4gICAgY29uc3QgZmFpbGVkRmV0Y2ggPSByZWYoZmFsc2UpO1xuICAgIHJldHVybiB7XG4gICAgICB0YWJzLFxuICAgICAgZmFpbGVkRmV0Y2hcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZVN0eWxlIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJfaG9pc3RlZF8zIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwibWFuZ2EiLCJGaWx0ZXJzIiwiY2F0IiwiX3dpdGhDdHgiLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0Es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
