import { Q as QIcon } from "./QIcon.00211d75.js";
import { u as useMeta, Q as QLayout, a as QBar, b as QSpace, c as QHeader, d as QDrawer, e as QPageContainer } from "./use-meta.56bab812.js";
import { Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QItem } from "./QItem.e5504d24.js";
import { Q as QPageSticky } from "./QPageSticky.e82c04be.js";
import { a as QItemLabel } from "./QItemLabel.751b389a.js";
import { Q as QToggle } from "./QToggle.519c6e7f.js";
import { Q as QSelect } from "./QSelect.5b441b0d.js";
import { Q as QTooltip } from "./QTooltip.4059b9cb.js";
import { R as Ripple } from "./Ripple.d48b6bf8.js";
import { c as chapterMeta } from "./readerSettings.58872740.js";
import { d as defineComponent, r as ref, _ as _export_sfc, a5 as useRoute, f as openBlock, v as createElementBlock, B as withDirectives, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, F as Fragment, u as createBaseVNode, s as resolveComponent, q as normalizeClass, t as toDisplayString, n as createCommentVNode } from "./index.ba4ecd3b.js";
import "./QSpinner.ce362078.js";
import "./use-dark.7f6486f4.js";
import "./QResizeObserver.0a316fac.js";
import "./use-timeout.fb745483.js";
import "./scroll.3ccd02db.js";
import "./dom.9c14e7bf.js";
import "./TouchPan.4378eff7.js";
import "./selection.c4ca48d8.js";
import "./format.2a3572e1.js";
import "./QScrollObserver.190052c8.js";
import "./use-checkbox.edaab605.js";
import "./option-sizes.ff92785a.js";
import "./use-form.a300a275.js";
import "./use-key-composition.4fc2cfcf.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./QMenu.5ba06e13.js";
import "./position-engine.1cc73c92.js";
import "./QDialog.75edb166.js";
import "./use-transition.322af72f.js";
import "./use-virtual-scroll.24900e81.js";
import "./rtl.b51694b1.js";
import "./fetcher.0bda8d6d.js";
import "./StoreStuff.b98d7f9e.js";
const _sfc_main$1 = defineComponent({
  name: "readerDrawerCont",
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
  },
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
          color: "blue",
          modelValue: _ctx.SreadMargins,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.SreadMargins = $event)
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
          color: "blue",
          modelValue: _ctx.SreadScale,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.SreadScale = $event)
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
          color: "blue",
          modelValue: _ctx.sReadOffset,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.sReadOffset = $event)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]),
    createVNode(QSelect, {
      standout: "",
      label: "Reader Mode",
      modelValue: _ctx.SReadModel,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.SReadModel = $event),
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
          color: "blue",
          modelValue: _ctx.showPath,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.showPath = $event)
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
      standout: "",
      style: { "width": "100%" },
      label: "Navigation layout",
      modelValue: _ctx.SReadPath,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.SReadPath = $event),
      options: _ctx.PathOptions
    }, null, 8, ["modelValue", "options"])
  ], 64);
}
var leftDrawerVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "leftDrawerCont.vue"]]);
var ChapterLayout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "chapterLayout",
  components: { leftDrawerVue },
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
  computed: {
    scrollbarTheme() {
      return this.$q.dark.isActive ? "darkSB" : "lightSB";
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
  },
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
                onClick: _ctx.minimize,
                class: "q-electron-drag--exception"
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "crop_square",
                onClick: _ctx.toggleMaximize,
                class: "q-electron-drag--exception"
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "close",
                onClick: _ctx.closeApp,
                class: "q-electron-drag--exception"
              }, null, 8, ["onClick"])
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(QDrawer, {
        overlay: "",
        modelValue: _ctx.leftDrawerOpen,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.leftDrawerOpen = $event),
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
            onSetTitle: _ctx.setTitle,
            class: normalizeClass(_ctx.$q.dark.isActive ? `bg-dark-page` : `bg-light-page`),
            onOpenMenu: _cache[3] || (_cache[3] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
          }, null, 8, ["onSetTitle", "class"]),
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
var ChapterLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bf5d1a88"], ["__file", "ChapterLayout.vue"]]);
export { ChapterLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckxheW91dC5jMmU3MWQ5Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcmVhZGVyL2xlZnREcmF3ZXJDb250LnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL0NoYXB0ZXJMYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJTcmVhZE1hcmdpbnMgPSAhU3JlYWRNYXJnaW5zXCJcbiAgPlxuICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBNYXJnaW5zPC9xLWl0ZW0tbGFiZWw+XG4gICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJTcmVhZE1hcmdpbnNcIiAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBuby13cmFwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWJvcmRlcnNcIlxuICAgIGNsaWNrYWJsZVxuICAgIHYtcmlwcGxlXG4gICAgQGNsaWNrPVwiU3JlYWRTY2FsZSA9ICFTcmVhZFNjYWxlXCJcbiAgPlxuICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBTY2FsZTwvcS1pdGVtLWxhYmVsPlxuICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwiU3JlYWRTY2FsZVwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJzUmVhZE9mZnNldCA9ICFzUmVhZE9mZnNldFwiXG4gID5cbiAgICA8cS1pdGVtLWxhYmVsPlBhZ2UgT2Zmc2V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJzUmVhZE9mZnNldFwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1zZWxlY3RcbiAgICBzdGFuZG91dFxuICAgIGxhYmVsPVwiUmVhZGVyIE1vZGVcIlxuICAgIHYtbW9kZWw9XCJTUmVhZE1vZGVsXCJcbiAgICA6b3B0aW9ucz1cIlNSZWFkb3B0aW9uc1wiXG4gID5cbiAgPC9xLXNlbGVjdD5cblxuICA8cS1pdGVtXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJzaG93UGF0aCA9ICFzaG93UGF0aFwiXG4gID5cbiAgICA8cS1pdGVtLWxhYmVsPlZpZXcgUGF0aDwvcS1pdGVtLWxhYmVsPlxuICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwic2hvd1BhdGhcIiAvPlxuICAgIDxxLXRvb2x0aXA+XG4gICAgICA8ZGl2PmJsdWUgPSBuZXh0PC9kaXY+XG4gICAgICA8ZGl2PnJlZCA9IGJhY2s8L2Rpdj5cbiAgICAgIDxkaXY+Z3JlZW4gPSBtZW51PC9kaXY+XG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1pdGVtPlxuXG4gIDxxLXNlbGVjdFxuICAgIHN0YW5kb3V0XG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgbGFiZWw9XCJOYXZpZ2F0aW9uIGxheW91dFwiXG4gICAgdi1tb2RlbD1cIlNSZWFkUGF0aFwiXG4gICAgOm9wdGlvbnM9XCJQYXRoT3B0aW9uc1wiXG4gID5cbiAgPC9xLXNlbGVjdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyTWV0YSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlYWRlci9yZWFkZXJTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3JlYWRlckRyYXdlckNvbnQnLFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kd2F0Y2goJ1NSZWFkTW9kZWwnLCAobmV3ZXI6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldFJNKG5ld2VyKTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnU1JlYWRQYXRoJywgKG5ld2VyOiBrZXlvZiBwYXRocykgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldFBhdGhzKG5ld2VyKTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnU3JlYWRNYXJnaW5zJywgKG5ld2VyOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2V0V1QobmV3ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdTcmVhZFNjYWxlJywgKG5ld2VyOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2V0U2NhbGUobmV3ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdzUmVhZE9mZnNldCcsIChuZXdlcjogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldE9mZnNldChuZXdlcik7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ3Nob3dQYXRoJywgKCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnRvZ2dQYXRoKCk7XG4gICAgfSk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBvcHRpb25zID0gY2hhcHRlck1ldGEocGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydtYW5nYUlEJ119YCkpO1xuICAgIGNvbnN0IFNSZWFkTW9kZWwgPSBvcHRpb25zLnZ1ZV9STTtcbiAgICBjb25zdCBTUmVhZFBhdGggPSBvcHRpb25zLnZ1ZV9QYXRocztcbiAgICBjb25zdCBTcmVhZE1hcmdpbnMgPSBvcHRpb25zLnZ1ZV9XVDtcbiAgICBjb25zdCBTcmVhZFNjYWxlID0gb3B0aW9ucy52dWVfU2NhbGU7XG4gICAgY29uc3Qgc1JlYWRPZmZzZXQgPSBvcHRpb25zLnZ1ZV9PZmZzZXQ7XG4gICAgY29uc3Qgc2hvd1BhdGggPSByZWYob3B0aW9ucy5wYXRoVmlzYWJsZS52YWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNyZWFkTWFyZ2lucyxcbiAgICAgIFNyZWFkU2NhbGUsXG4gICAgICBTUmVhZE1vZGVsLFxuICAgICAgU1JlYWRQYXRoLFxuICAgICAgUGF0aE9wdGlvbnM6IFsnTCcsICdSQUwnLCAnS2luZGxlJywgJ0VkZ2UnXSxcbiAgICAgIHNob3dQYXRoLFxuICAgICAgU1JlYWRvcHRpb25zOiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZScsICdWZXJ0aWNhbCddLFxuICAgICAgc1JlYWRPZmZzZXQsXG4gICAgICBvcHRpb25zXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1sYXlvdXQgdmlldz1cImhIaCBMcHIgZkZmXCI+XG4gICAgPHEtaGVhZGVyIGVsZXZhdGVkIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgYmctcHJpbWFyeURgIDogYGJnLXByaW1hcnlgXCI+XG4gICAgICA8cS1iYXJcbiAgICAgICAgdi1pZj1cIiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uXCJcbiAgICAgICAgY2xhc3M9XCJxLWVsZWN0cm9uLWRyYWdcIlxuICAgICAgICA6Y2xhc3M9XCJGUyA/IGBoaWRkZW5gIDogYGBcIlxuICAgICAgPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJpbWc6ZmF2aWNvbi5pY29cIiBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZy0tZXhjZXB0aW9uXCIgLz5cbiAgICAgICAgPGRpdj57eyBgJHt0aXRsZX0gLSBUYWNoaWRlc2sgUXVhc2FyYCB9fTwvZGl2PlxuXG4gICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cIm1pbmltaXplXCJcbiAgICAgICAgICBAY2xpY2s9XCJtaW5pbWl6ZVwiXG4gICAgICAgICAgY2xhc3M9XCJxLWVsZWN0cm9uLWRyYWctLWV4Y2VwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGljb249XCJjcm9wX3NxdWFyZVwiXG4gICAgICAgICAgQGNsaWNrPVwidG9nZ2xlTWF4aW1pemVcIlxuICAgICAgICAgIGNsYXNzPVwicS1lbGVjdHJvbi1kcmFnLS1leGNlcHRpb25cIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgIEBjbGljaz1cImNsb3NlQXBwXCJcbiAgICAgICAgICBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZy0tZXhjZXB0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1iYXI+XG4gICAgPC9xLWhlYWRlcj5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIG92ZXJsYXlcbiAgICAgIHYtbW9kZWw9XCJsZWZ0RHJhd2VyT3BlblwiXG4gICAgICBlbGV2YXRlZFxuICAgICAgY2xhc3M9XCJmaXhlZFwiXG4gICAgICA6YnJlYWtwb2ludD1cIjBcIlxuICAgICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBiZy1zZWNvbmRhcnlEYCA6IGBiZy1zZWNvbmRhcnlgXCJcbiAgICA+XG4gICAgICA8cS1pdGVtIGNsYXNzPVwianVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgQGNsaWNrPVwibGVmdERyYXdlck9wZW4gPSAhbGVmdERyYXdlck9wZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG4gaWNvbj1cImFycm93X2JhY2tcIiBmbGF0IHJvdW5kIEBjbGljaz1cIiRyb3V0ZXIuZ28oLTEpXCIgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPGxlZnREcmF3ZXJWdWU+PC9sZWZ0RHJhd2VyVnVlPlxuICAgIDwvcS1kcmF3ZXI+XG4gICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICA8cm91dGVyLXZpZXdcbiAgICAgICAgQHNldFRpdGxlPVwic2V0VGl0bGVcIlxuICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmstcGFnZWAgOiBgYmctbGlnaHQtcGFnZWBcIlxuICAgICAgICBAb3Blbk1lbnU9XCJsZWZ0RHJhd2VyT3BlbiA9ICFsZWZ0RHJhd2VyT3BlblwiXG4gICAgICAvPlxuICAgICAgPHEtcGFnZS1zdGlja3lcbiAgICAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiXG4gICAgICAgIDpvZmZzZXQ9XCJbMTgsIDE4XVwiXG4gICAgICAgIHYtaWY9XCIhbGVmdERyYXdlck9wZW5cIlxuICAgICAgICBjbGFzcz1cImZhYmJcIlxuICAgICAgPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmYWJcbiAgICAgICAgICBpY29uPVwibWVudVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBAY2xpY2s9XCJsZWZ0RHJhd2VyT3BlbiA9ICFsZWZ0RHJhd2VyT3BlblwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtcGFnZS1zdGlja3k+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuICA8L3EtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7XG4gIFJvdXRlTG9jYXRpb25Ob3JtYWxpemVkLFxuICBSb3V0ZUxvY2F0aW9uTm9ybWFsaXplZExvYWRlZFxufSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBsZWZ0RHJhd2VyVnVlIGZyb20gJ3NyYy9jb21wb25lbnRzL3JlYWRlci9sZWZ0RHJhd2VyQ29udC52dWUnO1xuaW1wb3J0IHsgdXNlTWV0YSB9IGZyb20gJ3F1YXNhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdjaGFwdGVyTGF5b3V0JyxcbiAgY29tcG9uZW50czogeyBsZWZ0RHJhd2VyVnVlIH0sXG4gIHdhdGNoOiB7XG4gICAgc2Nyb2xsYmFyVGhlbWUobmV3dywgb2xkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUob2xkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChuZXd3KTtcbiAgICB9LFxuICAgICRyb3V0ZSh0bzogUm91dGVMb2NhdGlvbk5vcm1hbGl6ZWQsIGZyb206IFJvdXRlTG9jYXRpb25Ob3JtYWxpemVkTG9hZGVkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRvLnBhcmFtc1snbWFuZ2FJRCddICE9IGZyb20ucGFyYW1zWydtYW5nYUlEJ10gfHxcbiAgICAgICAgdG8ucGFyYW1zWydjaGFwdGVySUQnXSAhPVxuICAgICAgICAgIChwYXJzZUludChgJHtmcm9tLnBhcmFtc1snY2hhcHRlcklEJ119YCkgKyAxKS50b1N0cmluZygpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLmdvKDApO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzY3JvbGxiYXJUaGVtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuJHEuZGFyay5pc0FjdGl2ZSA/ICdkYXJrU0InIDogJ2xpZ2h0U0InO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxiYXJUaGVtZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGwtc2NyZWVuJywgKGUpID0+IHRoaXMuaXNGUyhlIGFzIEN1c3RvbUV2ZW50KSk7XG4gIH0sXG4gIHVubW91bnRlZCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxiYXJUaGVtZSk7XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRxLmRhcmsuc2V0KDxib29sZWFuPnRoaXMuJHN0b3JlR2V0KCdkYXJrJywgdGhpcy4kcS5kYXJrLmlzQWN0aXZlKSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVkYXJrKCkge1xuICAgICAgdGhpcy4kcS5kYXJrLnRvZ2dsZSgpO1xuICAgICAgdGhpcy4kc3RvcmVTZXQoJ2RhcmsnLCB0aGlzLiRxLmRhcmsuaXNBY3RpdmUsIHRydWUpO1xuICAgIH0sXG4gICAgc2V0VGl0bGUodGl0bDogc3RyaW5nKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bDtcbiAgICB9LFxuICAgIG1pbmltaXplKCkge1xuICAgICAgaWYgKHRoaXMuJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAgICAgd2luZG93Lm15V2luZG93QVBJLm1pbmltaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVNYXhpbWl6ZSgpIHtcbiAgICAgIGlmICh0aGlzLiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uKSB7XG4gICAgICAgIHdpbmRvdy5teVdpbmRvd0FQSS50b2dnbGVNYXhpbWl6ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VBcHAoKSB7XG4gICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5lbGVjdHJvbikge1xuICAgICAgICB3aW5kb3cubXlXaW5kb3dBUEkuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRlMoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgICB0aGlzLkZTID0gZXZlbnQuZGV0YWlsO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdGl0bGUgPSByZWYoJycpO1xuICAgIHVzZU1ldGEoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLnZhbHVlLFxuICAgICAgICB0aXRsZVRlbXBsYXRlOiAodGl0bGUpID0+IGAke3RpdGxlfSAtIFJlYWRpbmcgLSBUYWNoaWRlc2sgUXVhc2FyIGBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnREcmF3ZXJPcGVuOiByZWYoZmFsc2UpLFxuICAgICAgdGl0bGUsXG4gICAgICBGUzogcmVmKGZhbHNlKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNhc3NcIj5cbi5mYWJiXG4gIG9wYWNpdHk6IDAuMlxuXG4uZmFiYjpob3ZlclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRnZW5lcmljLWhvdmVyLXRyYW5zaXRpb25cbiAgb3BhY2l0eTogMVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwidGl0bGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfb3BlbkJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUEsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLFNBQVMsV0FBWTtBQUNkLFNBQUEsT0FBTyxjQUFjLENBQUMsVUFBa0I7QUFDdEMsV0FBQSxRQUFRLE1BQU0sS0FBSztBQUFBLElBQUEsQ0FDekI7QUFDSSxTQUFBLE9BQU8sYUFBYSxDQUFDLFVBQXVCO0FBQzFDLFdBQUEsUUFBUSxTQUFTLEtBQUs7QUFBQSxJQUFBLENBQzVCO0FBQ0ksU0FBQSxPQUFPLGdCQUFnQixDQUFDLFVBQW1CO0FBQ3pDLFdBQUEsUUFBUSxNQUFNLEtBQUs7QUFBQSxJQUFBLENBQ3pCO0FBQ0ksU0FBQSxPQUFPLGNBQWMsQ0FBQyxVQUFtQjtBQUN2QyxXQUFBLFFBQVEsU0FBUyxLQUFLO0FBQUEsSUFBQSxDQUM1QjtBQUNJLFNBQUEsT0FBTyxlQUFlLENBQUMsVUFBbUI7QUFDeEMsV0FBQSxRQUFRLFVBQVUsS0FBSztBQUFBLElBQUEsQ0FDN0I7QUFDSSxTQUFBLE9BQU8sWUFBWSxNQUFNO0FBQzVCLFdBQUssUUFBUTtJQUFT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
