import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { u as useMeta, Q as QLayout, a as QBar, b as QSpace, c as QHeader, d as QDrawer, e as QPageContainer } from "./use-meta.f34c9317.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QPageSticky } from "./QPageSticky.3c9de08f.js";
import { a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QToggle } from "./QToggle.a59079d2.js";
import { Q as QSelect } from "./QSelect.b1f4fa30.js";
import { Q as QTooltip } from "./QTooltip.02a6ea06.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { c as chapterMeta } from "./readerSettings.c657db7a.js";
import { d as defineComponent, r as ref, _ as _export_sfc, a5 as useRoute, f as openBlock, v as createElementBlock, B as withDirectives, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, F as Fragment, u as createBaseVNode, s as resolveComponent, q as normalizeClass, t as toDisplayString, n as createCommentVNode } from "./index.0b61810d.js";
import "./QSpinner.0d412098.js";
import "./use-dark.bc291eea.js";
import "./QResizeObserver.eb13856c.js";
import "./use-timeout.99cd911c.js";
import "./scroll.34fac392.js";
import "./dom.fd94eb85.js";
import "./TouchPan.d2091680.js";
import "./selection.2c9d8487.js";
import "./format.2a3572e1.js";
import "./QScrollObserver.88307b77.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./use-key-composition.64dd1858.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./QMenu.ebcf9c01.js";
import "./position-engine.94f26946.js";
import "./QDialog.39313c8c.js";
import "./use-transition.65db8379.js";
import "./use-virtual-scroll.083e959b.js";
import "./rtl.b51694b1.js";
import "./axios.a87bcd6c.js";
import "./StoreStuff.f5900537.js";
const _sfc_main$1 = defineComponent({
  name: "ReaderDrawerCont",
  setup() {
    const route = useRoute();
    const options = chapterMeta(parseInt(`${route.params["mangaID"]}`));
    const SReadModel = options.vue_RM;
    const SReadPath = options.vue_Paths;
    const SreadMargins = options.vue_WT;
    const SreadScale = options.vue_Scale;
    const sReadOffset = options.vue_Offset;
    const showPath = ref(options.pathVisable.value);
    return {
      SreadMargins,
      SreadScale,
      SReadModel,
      SReadPath,
      PathOptions: ["L", "RAL", "Kindle", "Edge"],
      showPath,
      SReadoptions: ["RTL", "LTR", "SinglePage", "Vertical"],
      sReadOffset,
      options
    };
  },
  created: function() {
    this.$watch("SReadModel", (newer) => {
      this.options.setRM(newer);
    });
    this.$watch("SReadPath", (newer) => {
      this.options.setPaths(newer);
    });
    this.$watch("SreadMargins", (newer) => {
      this.options.setWT(newer);
    });
    this.$watch("SreadScale", (newer) => {
      this.options.setScale(newer);
    });
    this.$watch("sReadOffset", (newer) => {
      this.options.setOffset(newer);
    });
    this.$watch("showPath", () => {
      this.options.toggPath();
    });
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", null, "blue = next", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "red = back", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, "green = menu", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    withDirectives((openBlock(), createBlock(QItem, {
      class: "row justify-between no-wrap items-center rounded-borders",
      clickable: "",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.SreadMargins = !_ctx.SreadMargins)
    }, {
      default: withCtx(() => [
        createVNode(QItemLabel, null, {
          default: withCtx(() => [
            createTextVNode("Page Margins")
          ]),
          _: 1
        }),
        createVNode(QToggle, {
          modelValue: _ctx.SreadMargins,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.SreadMargins = $event),
          color: "blue"
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]),
    withDirectives((openBlock(), createBlock(QItem, {
      class: "row justify-between no-wrap items-center rounded-borders",
      clickable: "",
      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.SreadScale = !_ctx.SreadScale)
    }, {
      default: withCtx(() => [
        createVNode(QItemLabel, null, {
          default: withCtx(() => [
            createTextVNode("Page Scale")
          ]),
          _: 1
        }),
        createVNode(QToggle, {
          modelValue: _ctx.SreadScale,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.SreadScale = $event),
          color: "blue"
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]),
    withDirectives((openBlock(), createBlock(QItem, {
      class: "row justify-between no-wrap items-center rounded-borders",
      clickable: "",
      onClick: _cache[5] || (_cache[5] = ($event) => _ctx.sReadOffset = !_ctx.sReadOffset)
    }, {
      default: withCtx(() => [
        createVNode(QItemLabel, null, {
          default: withCtx(() => [
            createTextVNode("Page Offset")
          ]),
          _: 1
        }),
        createVNode(QToggle, {
          modelValue: _ctx.sReadOffset,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.sReadOffset = $event),
          color: "blue"
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]),
    createVNode(QSelect, {
      modelValue: _ctx.SReadModel,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.SReadModel = $event),
      standout: "",
      label: "Reader Mode",
      options: _ctx.SReadoptions
    }, null, 8, ["modelValue", "options"]),
    withDirectives((openBlock(), createBlock(QItem, {
      class: "row justify-between no-wrap items-center rounded-borders",
      clickable: "",
      onClick: _cache[8] || (_cache[8] = ($event) => _ctx.showPath = !_ctx.showPath)
    }, {
      default: withCtx(() => [
        createVNode(QItemLabel, null, {
          default: withCtx(() => [
            createTextVNode("View Path")
          ]),
          _: 1
        }),
        createVNode(QToggle, {
          modelValue: _ctx.showPath,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.showPath = $event),
          color: "blue"
        }, null, 8, ["modelValue"]),
        createVNode(QTooltip, null, {
          default: withCtx(() => [
            _hoisted_1,
            _hoisted_2,
            _hoisted_3
          ]),
          _: 1
        })
      ]),
      _: 1
    })), [
      [Ripple]
    ]),
    createVNode(QSelect, {
      modelValue: _ctx.SReadPath,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.SReadPath = $event),
      standout: "",
      style: { "width": "100%" },
      label: "Navigation layout",
      options: _ctx.PathOptions
    }, null, 8, ["modelValue", "options"])
  ], 64);
}
var leftDrawerVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "leftDrawerCont.vue"]]);
var ChapterLayout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "ChapterLayout",
  components: { leftDrawerVue },
  setup() {
    const title = ref("");
    useMeta(() => {
      return {
        title: title.value,
        titleTemplate: (title2) => `${title2} - Reading - Tachidesk Quasar `
      };
    });
    return {
      leftDrawerOpen: ref(false),
      title,
      FS: ref(false)
    };
  },
  computed: {
    scrollbarTheme() {
      return this.$q.dark.isActive ? "darkSB" : "lightSB";
    }
  },
  watch: {
    scrollbarTheme(neww, old) {
      document.body.classList.remove(old);
      document.body.classList.add(neww);
    },
    $route(to, from) {
      if (to.params["mangaID"] != from.params["mangaID"] || to.params["chapterID"] != (parseInt(`${from.params["chapterID"]}`) + 1).toString()) {
        this.$router.go(0);
      }
    }
  },
  mounted() {
    document.body.classList.add(this.scrollbarTheme);
    window.addEventListener("full-screen", (e) => this.isFS(e));
  },
  unmounted() {
    document.body.classList.remove(this.scrollbarTheme);
  },
  created: function() {
    this.$q.dark.set(this.$storeGet("dark", this.$q.dark.isActive));
  },
  methods: {
    toggledark() {
      this.$q.dark.toggle();
      this.$storeSet("dark", this.$q.dark.isActive, true);
    },
    setTitle(titl) {
      this.title = titl;
    },
    minimize() {
      if (this.$q.platform.is.electron) {
        window.myWindowAPI.minimize();
      }
    },
    toggleMaximize() {
      if (this.$q.platform.is.electron) {
        window.myWindowAPI.toggleMaximize();
      }
    },
    closeApp() {
      if (this.$q.platform.is.electron) {
        window.myWindowAPI.close();
      }
    },
    isFS(event) {
      this.FS = event.detail;
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_leftDrawerVue = resolveComponent("leftDrawerVue");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QLayout, { view: "hHh Lpr fFf" }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        elevated: "",
        class: normalizeClass(_ctx.$q.dark.isActive ? `bg-primaryD` : `bg-primary`)
      }, {
        default: withCtx(() => [
          _ctx.$q.platform.is.electron ? (openBlock(), createBlock(QBar, {
            key: 0,
            class: normalizeClass(["q-electron-drag", _ctx.FS ? `hidden` : ``])
          }, {
            default: withCtx(() => [
              createVNode(QIcon, {
                name: "img:favicon.ico",
                class: "q-electron-drag--exception"
              }),
              createBaseVNode("div", null, toDisplayString(`${_ctx.title} - Tachidesk Quasar`), 1),
              createVNode(QSpace),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "minimize",
                class: "q-electron-drag--exception",
                onClick: _ctx.minimize
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "crop_square",
                class: "q-electron-drag--exception",
                onClick: _ctx.toggleMaximize
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "close",
                class: "q-electron-drag--exception",
                onClick: _ctx.closeApp
              }, null, 8, ["onClick"])
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QDrawer, {
        modelValue: _ctx.leftDrawerOpen,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.leftDrawerOpen = $event),
        overlay: "",
        elevated: "",
        class: normalizeClass(["fixed", _ctx.$q.dark.isActive ? `bg-secondaryD` : `bg-secondary`]),
        breakpoint: 0
      }, {
        default: withCtx(() => [
          createVNode(QItem, { class: "justify-between" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                icon: "close",
                flat: "",
                round: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
              }),
              createVNode(QBtn, {
                icon: "arrow_back",
                flat: "",
                round: "",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.go(-1))
              })
            ]),
            _: 1
          }),
          createVNode(_component_leftDrawerVue)
        ]),
        _: 1
      }, 8, ["modelValue", "class"]),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view, {
            class: normalizeClass(_ctx.$q.dark.isActive ? `bg-dark-page` : `bg-light-page`),
            onSetTitle: _ctx.setTitle,
            onOpenMenu: _cache[3] || (_cache[3] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
          }, null, 8, ["class", "onSetTitle"]),
          !_ctx.leftDrawerOpen ? (openBlock(), createBlock(QPageSticky, {
            key: 0,
            position: "top-left",
            offset: [18, 18],
            class: "fabb"
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                fab: "",
                icon: "menu",
                color: "primary",
                onClick: _cache[4] || (_cache[4] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var ChapterLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-30695984"], ["__file", "ChapterLayout.vue"]]);
export { ChapterLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckxheW91dC4zNWJkMDQyYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcmVhZGVyL2xlZnREcmF3ZXJDb250LnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL0NoYXB0ZXJMYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtXG4gICAgdi1yaXBwbGVcbiAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gbm8td3JhcCBpdGVtcy1jZW50ZXIgcm91bmRlZC1ib3JkZXJzXCJcbiAgICBjbGlja2FibGVcbiAgICBAY2xpY2s9XCJTcmVhZE1hcmdpbnMgPSAhU3JlYWRNYXJnaW5zXCJcbiAgPlxuICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBNYXJnaW5zPC9xLWl0ZW0tbGFiZWw+XG4gICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJTcmVhZE1hcmdpbnNcIiBjb2xvcj1cImJsdWVcIiAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIHYtcmlwcGxlXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgY2xpY2thYmxlXG4gICAgQGNsaWNrPVwiU3JlYWRTY2FsZSA9ICFTcmVhZFNjYWxlXCJcbiAgPlxuICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBTY2FsZTwvcS1pdGVtLWxhYmVsPlxuICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwiU3JlYWRTY2FsZVwiIGNvbG9yPVwiYmx1ZVwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1yaXBwbGVcbiAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gbm8td3JhcCBpdGVtcy1jZW50ZXIgcm91bmRlZC1ib3JkZXJzXCJcbiAgICBjbGlja2FibGVcbiAgICBAY2xpY2s9XCJzUmVhZE9mZnNldCA9ICFzUmVhZE9mZnNldFwiXG4gID5cbiAgICA8cS1pdGVtLWxhYmVsPlBhZ2UgT2Zmc2V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzUmVhZE9mZnNldFwiIGNvbG9yPVwiYmx1ZVwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1zZWxlY3RcbiAgICB2LW1vZGVsPVwiU1JlYWRNb2RlbFwiXG4gICAgc3RhbmRvdXRcbiAgICBsYWJlbD1cIlJlYWRlciBNb2RlXCJcbiAgICA6b3B0aW9ucz1cIlNSZWFkb3B0aW9uc1wiXG4gID5cbiAgPC9xLXNlbGVjdD5cblxuICA8cS1pdGVtXG4gICAgdi1yaXBwbGVcbiAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW4gbm8td3JhcCBpdGVtcy1jZW50ZXIgcm91bmRlZC1ib3JkZXJzXCJcbiAgICBjbGlja2FibGVcbiAgICBAY2xpY2s9XCJzaG93UGF0aCA9ICFzaG93UGF0aFwiXG4gID5cbiAgICA8cS1pdGVtLWxhYmVsPlZpZXcgUGF0aDwvcS1pdGVtLWxhYmVsPlxuICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwic2hvd1BhdGhcIiBjb2xvcj1cImJsdWVcIiAvPlxuICAgIDxxLXRvb2x0aXA+XG4gICAgICA8ZGl2PmJsdWUgPSBuZXh0PC9kaXY+XG4gICAgICA8ZGl2PnJlZCA9IGJhY2s8L2Rpdj5cbiAgICAgIDxkaXY+Z3JlZW4gPSBtZW51PC9kaXY+XG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1pdGVtPlxuXG4gIDxxLXNlbGVjdFxuICAgIHYtbW9kZWw9XCJTUmVhZFBhdGhcIlxuICAgIHN0YW5kb3V0XG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgbGFiZWw9XCJOYXZpZ2F0aW9uIGxheW91dFwiXG4gICAgOm9wdGlvbnM9XCJQYXRoT3B0aW9uc1wiXG4gID5cbiAgPC9xLXNlbGVjdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyTWV0YSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlYWRlci9yZWFkZXJTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1JlYWRlckRyYXdlckNvbnQnLFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNoYXB0ZXJNZXRhKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKTtcbiAgICBjb25zdCBTUmVhZE1vZGVsID0gb3B0aW9ucy52dWVfUk07XG4gICAgY29uc3QgU1JlYWRQYXRoID0gb3B0aW9ucy52dWVfUGF0aHM7XG4gICAgY29uc3QgU3JlYWRNYXJnaW5zID0gb3B0aW9ucy52dWVfV1Q7XG4gICAgY29uc3QgU3JlYWRTY2FsZSA9IG9wdGlvbnMudnVlX1NjYWxlO1xuICAgIGNvbnN0IHNSZWFkT2Zmc2V0ID0gb3B0aW9ucy52dWVfT2Zmc2V0O1xuICAgIGNvbnN0IHNob3dQYXRoID0gcmVmKG9wdGlvbnMucGF0aFZpc2FibGUudmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICBTcmVhZE1hcmdpbnMsXG4gICAgICBTcmVhZFNjYWxlLFxuICAgICAgU1JlYWRNb2RlbCxcbiAgICAgIFNSZWFkUGF0aCxcbiAgICAgIFBhdGhPcHRpb25zOiBbJ0wnLCAnUkFMJywgJ0tpbmRsZScsICdFZGdlJ10sXG4gICAgICBzaG93UGF0aCxcbiAgICAgIFNSZWFkb3B0aW9uczogWydSVEwnLCAnTFRSJywgJ1NpbmdsZVBhZ2UnLCAnVmVydGljYWwnXSxcbiAgICAgIHNSZWFkT2Zmc2V0LFxuICAgICAgb3B0aW9ucyxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kd2F0Y2goJ1NSZWFkTW9kZWwnLCAobmV3ZXI6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldFJNKG5ld2VyKTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnU1JlYWRQYXRoJywgKG5ld2VyOiBrZXlvZiBwYXRocykgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldFBhdGhzKG5ld2VyKTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnU3JlYWRNYXJnaW5zJywgKG5ld2VyOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2V0V1QobmV3ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdTcmVhZFNjYWxlJywgKG5ld2VyOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2V0U2NhbGUobmV3ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdzUmVhZE9mZnNldCcsIChuZXdlcjogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldE9mZnNldChuZXdlcik7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ3Nob3dQYXRoJywgKCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnRvZ2dQYXRoKCk7XG4gICAgfSk7XG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwiaEhoIExwciBmRmZcIj5cbiAgICA8cS1oZWFkZXIgZWxldmF0ZWQgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBiZy1wcmltYXJ5RGAgOiBgYmctcHJpbWFyeWBcIj5cbiAgICAgIDxxLWJhclxuICAgICAgICB2LWlmPVwiJHEucGxhdGZvcm0uaXMuZWxlY3Ryb25cIlxuICAgICAgICBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZ1wiXG4gICAgICAgIDpjbGFzcz1cIkZTID8gYGhpZGRlbmAgOiBgYFwiXG4gICAgICA+XG4gICAgICAgIDxxLWljb24gbmFtZT1cImltZzpmYXZpY29uLmljb1wiIGNsYXNzPVwicS1lbGVjdHJvbi1kcmFnLS1leGNlcHRpb25cIiAvPlxuICAgICAgICA8ZGl2Pnt7IGAke3RpdGxlfSAtIFRhY2hpZGVzayBRdWFzYXJgIH19PC9kaXY+XG5cbiAgICAgICAgPHEtc3BhY2UgLz5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwibWluaW1pemVcIlxuICAgICAgICAgIGNsYXNzPVwicS1lbGVjdHJvbi1kcmFnLS1leGNlcHRpb25cIlxuICAgICAgICAgIEBjbGljaz1cIm1pbmltaXplXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImNyb3Bfc3F1YXJlXCJcbiAgICAgICAgICBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZy0tZXhjZXB0aW9uXCJcbiAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVNYXhpbWl6ZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgY2xhc3M9XCJxLWVsZWN0cm9uLWRyYWctLWV4Y2VwdGlvblwiXG4gICAgICAgICAgQGNsaWNrPVwiY2xvc2VBcHBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWJhcj5cbiAgICA8L3EtaGVhZGVyPlxuICAgIDxxLWRyYXdlclxuICAgICAgdi1tb2RlbD1cImxlZnREcmF3ZXJPcGVuXCJcbiAgICAgIG92ZXJsYXlcbiAgICAgIGVsZXZhdGVkXG4gICAgICBjbGFzcz1cImZpeGVkXCJcbiAgICAgIDpicmVha3BvaW50PVwiMFwiXG4gICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLXNlY29uZGFyeURgIDogYGJnLXNlY29uZGFyeWBcIlxuICAgID5cbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBAY2xpY2s9XCJsZWZ0RHJhd2VyT3BlbiA9ICFsZWZ0RHJhd2VyT3BlblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0biBpY29uPVwiYXJyb3dfYmFja1wiIGZsYXQgcm91bmQgQGNsaWNrPVwiJHJvdXRlci5nbygtMSlcIiAvPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8bGVmdERyYXdlclZ1ZT48L2xlZnREcmF3ZXJWdWU+XG4gICAgPC9xLWRyYXdlcj5cbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgIDxyb3V0ZXItdmlld1xuICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmstcGFnZWAgOiBgYmctbGlnaHQtcGFnZWBcIlxuICAgICAgICBAc2V0LXRpdGxlPVwic2V0VGl0bGVcIlxuICAgICAgICBAb3Blbi1tZW51PVwibGVmdERyYXdlck9wZW4gPSAhbGVmdERyYXdlck9wZW5cIlxuICAgICAgLz5cbiAgICAgIDxxLXBhZ2Utc3RpY2t5XG4gICAgICAgIHYtaWY9XCIhbGVmdERyYXdlck9wZW5cIlxuICAgICAgICBwb3NpdGlvbj1cInRvcC1sZWZ0XCJcbiAgICAgICAgOm9mZnNldD1cIlsxOCwgMThdXCJcbiAgICAgICAgY2xhc3M9XCJmYWJiXCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmFiXG4gICAgICAgICAgaWNvbj1cIm1lbnVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgQGNsaWNrPVwibGVmdERyYXdlck9wZW4gPSAhbGVmdERyYXdlck9wZW5cIlxuICAgICAgICAvPlxuICAgICAgPC9xLXBhZ2Utc3RpY2t5PlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1xuICBSb3V0ZUxvY2F0aW9uTm9ybWFsaXplZCxcbiAgUm91dGVMb2NhdGlvbk5vcm1hbGl6ZWRMb2FkZWQsXG59IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IGxlZnREcmF3ZXJWdWUgZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVhZGVyL2xlZnREcmF3ZXJDb250LnZ1ZSc7XG5pbXBvcnQgeyB1c2VNZXRhIH0gZnJvbSAncXVhc2FyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0NoYXB0ZXJMYXlvdXQnLFxuICBjb21wb25lbnRzOiB7IGxlZnREcmF3ZXJWdWUgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdGl0bGUgPSByZWYoJycpO1xuICAgIHVzZU1ldGEoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLnZhbHVlLFxuICAgICAgICB0aXRsZVRlbXBsYXRlOiAodGl0bGUpID0+IGAke3RpdGxlfSAtIFJlYWRpbmcgLSBUYWNoaWRlc2sgUXVhc2FyIGAsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0RHJhd2VyT3BlbjogcmVmKGZhbHNlKSxcbiAgICAgIHRpdGxlLFxuICAgICAgRlM6IHJlZihmYWxzZSksXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzY3JvbGxiYXJUaGVtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuJHEuZGFyay5pc0FjdGl2ZSA/ICdkYXJrU0InIDogJ2xpZ2h0U0InO1xuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc2Nyb2xsYmFyVGhlbWUobmV3dywgb2xkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUob2xkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChuZXd3KTtcbiAgICB9LFxuICAgICRyb3V0ZSh0bzogUm91dGVMb2NhdGlvbk5vcm1hbGl6ZWQsIGZyb206IFJvdXRlTG9jYXRpb25Ob3JtYWxpemVkTG9hZGVkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRvLnBhcmFtc1snbWFuZ2FJRCddICE9IGZyb20ucGFyYW1zWydtYW5nYUlEJ10gfHxcbiAgICAgICAgdG8ucGFyYW1zWydjaGFwdGVySUQnXSAhPVxuICAgICAgICAgIChwYXJzZUludChgJHtmcm9tLnBhcmFtc1snY2hhcHRlcklEJ119YCkgKyAxKS50b1N0cmluZygpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLmdvKDApO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsYmFyVGhlbWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmdWxsLXNjcmVlbicsIChlKSA9PiB0aGlzLmlzRlMoZSBhcyBDdXN0b21FdmVudCkpO1xuICB9LFxuICB1bm1vdW50ZWQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsYmFyVGhlbWUpO1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcS5kYXJrLnNldCg8Ym9vbGVhbj50aGlzLiRzdG9yZUdldCgnZGFyaycsIHRoaXMuJHEuZGFyay5pc0FjdGl2ZSkpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlZGFyaygpIHtcbiAgICAgIHRoaXMuJHEuZGFyay50b2dnbGUoKTtcbiAgICAgIHRoaXMuJHN0b3JlU2V0KCdkYXJrJywgdGhpcy4kcS5kYXJrLmlzQWN0aXZlLCB0cnVlKTtcbiAgICB9LFxuICAgIHNldFRpdGxlKHRpdGw6IHN0cmluZykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGw7XG4gICAgfSxcbiAgICBtaW5pbWl6ZSgpIHtcbiAgICAgIGlmICh0aGlzLiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uKSB7XG4gICAgICAgIHdpbmRvdy5teVdpbmRvd0FQSS5taW5pbWl6ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlTWF4aW1pemUoKSB7XG4gICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5lbGVjdHJvbikge1xuICAgICAgICB3aW5kb3cubXlXaW5kb3dBUEkudG9nZ2xlTWF4aW1pemUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlQXBwKCkge1xuICAgICAgaWYgKHRoaXMuJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAgICAgd2luZG93Lm15V2luZG93QVBJLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0ZTKGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgICAgdGhpcy5GUyA9IGV2ZW50LmRldGFpbDtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Fzc1wiPlxuLmZhYmJcbiAgb3BhY2l0eTogMC4yXG5cbi5mYWJiOmhvdmVyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgJGdlbmVyaWMtaG92ZXItdHJhbnNpdGlvblxuICBvcGFjaXR5OiAxXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJ0aXRsZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUNOLFVBQU0sUUFBUTtBQUNkLFVBQU0sVUFBVSxZQUFZLFNBQVMsR0FBRyxNQUFNLE9BQU8sWUFBWSxDQUFDO0FBQ2xFLFVBQU0sYUFBYSxRQUFRO0FBQzNCLFVBQU0sWUFBWSxRQUFRO0FBQzFCLFVBQU0sZUFBZSxRQUFRO0FBQzdCLFVBQU0sYUFBYSxRQUFRO0FBQzNCLFVBQU0sY0FBYyxRQUFRO0FBQzVCLFVBQU0sV0FBVyxJQUFJLFFBQVEsWUFBWSxLQUFLO0FBQ3ZDLFdBQUE7QUFBQSxNQUNMO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxhQUFhLENBQUMsS0FBSyxPQUFPLFVBQVUsTUFBTTtBQUFBLE1BQzFDO0FBQUEsTUFDQSxjQUFjLENBQUMsT0FBTyxPQUFPLGNBQWMsVUFBVTtBQUFBLE1BQ3JEO0FBQUEsTUFDQTtBQUFBLElBQUE7QUFBQSxFQUVKO0FBQUEsRUFDQSxTQUFTLFdB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
