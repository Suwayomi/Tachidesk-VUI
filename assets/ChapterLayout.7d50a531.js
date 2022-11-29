import { Q as QIcon } from "./QIcon.aa032244.js";
import { u as useMeta, Q as QLayout, a as QBar, b as QSpace, c as QHeader, d as QDrawer, e as QPageContainer } from "./use-meta.7bed1395.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QPageSticky } from "./QPageSticky.fba7628c.js";
import { a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QToggle } from "./QToggle.41c58e33.js";
import { Q as QSelect } from "./QSelect.fbe52429.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { c as chapterMeta } from "./readerSettings.2ba4d9c1.js";
import { f as defineComponent, _ as _export_sfc, a7 as useRoute, j as openBlock, y as createElementBlock, D as withDirectives, k as createBlock, m as withCtx, n as createVNode, q as createTextVNode, F as Fragment, r as ref, u as resolveComponent, s as normalizeClass, v as createBaseVNode, t as toDisplayString, p as createCommentVNode, x as normalizeStyle } from "./index.75e4774b.js";
import "./QSpinner.6511ee07.js";
import "./use-dark.63b90c22.js";
import "./QResizeObserver.98338598.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./TouchPan.86a57c6f.js";
import "./selection.3a23570e.js";
import "./format.2a3572e1.js";
import "./QScrollObserver.64c336b1.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
import "./use-key-composition.689d3f4d.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./QMenu.fd3c1db0.js";
import "./position-engine.09a868e3.js";
import "./QDialog.2ec363bc.js";
import "./use-transition.34947ede.js";
import "./use-virtual-scroll.d842f9a0.js";
import "./rtl.b51694b1.js";
import "./fetcher.d026f468.js";
const _sfc_main$1 = defineComponent({
  name: "readerDrawerCont",
  created: function() {
    this.$watch("SReadModel", (newer) => {
      this.options.setRM(newer);
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
  },
  setup() {
    const route = useRoute();
    const options = chapterMeta(parseInt(`${route.params["mangaID"]}`));
    const SReadModel = options.vue_RM;
    const SreadMargins = options.vue_WT;
    const SreadScale = options.vue_Scale;
    const sReadOffset = options.vue_Offset;
    return {
      SreadMargins,
      SreadScale,
      SReadModel,
      SReadoptions: ["RTL", "LTR", "SinglePage", "Vertical"],
      sReadOffset,
      options
    };
  }
});
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
    this.$q.dark.set(this.$q.localStorage.getItem("dark"));
  },
  methods: {
    toggledark() {
      this.$q.dark.toggle();
      this.$q.localStorage.set("dark", this.$q.dark.isActive);
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
        style: normalizeStyle(
          `background-color:` + (_ctx.$q.dark.isActive ? `var(--q-primaryD)` : `var(--q-primary)`)
        )
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
      }, 8, ["style"]),
      createVNode(QDrawer, {
        overlay: "",
        modelValue: _ctx.leftDrawerOpen,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.leftDrawerOpen = $event),
        elevated: "",
        class: "fixed",
        breakpoint: 0,
        style: normalizeStyle(
          `background-color:` + (_ctx.$q.dark.isActive ? `var(--q-secondaryD)` : `var(--q-secondary)`)
        )
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
      }, 8, ["modelValue", "style"]),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view, {
            onSetTitle: _ctx.setTitle,
            class: normalizeClass(_ctx.$q.dark.isActive ? `dark-page` : `white`)
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
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
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
var ChapterLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4f7cc6d4"], ["__file", "ChapterLayout.vue"]]);
export { ChapterLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckxheW91dC43ZDUwYTUzMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcmVhZGVyL2xlZnREcmF3ZXJDb250LnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL0NoYXB0ZXJMYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJTcmVhZE1hcmdpbnMgPSAhU3JlYWRNYXJnaW5zXCJcbiAgPlxuICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBNYXJnaW5zPC9xLWl0ZW0tbGFiZWw+XG4gICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJTcmVhZE1hcmdpbnNcIiAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBuby13cmFwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWJvcmRlcnNcIlxuICAgIGNsaWNrYWJsZVxuICAgIHYtcmlwcGxlXG4gICAgQGNsaWNrPVwiU3JlYWRTY2FsZSA9ICFTcmVhZFNjYWxlXCJcbiAgPlxuICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBTY2FsZTwvcS1pdGVtLWxhYmVsPlxuICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwiU3JlYWRTY2FsZVwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJzUmVhZE9mZnNldCA9ICFzUmVhZE9mZnNldFwiXG4gID5cbiAgICA8cS1pdGVtLWxhYmVsPlBhZ2UgT2Zmc2V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJzUmVhZE9mZnNldFwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1zZWxlY3RcbiAgICBzdGFuZG91dFxuICAgIGxhYmVsPVwiUmVhZGVyIE1vZGVcIlxuICAgIHYtbW9kZWw9XCJTUmVhZE1vZGVsXCJcbiAgICA6b3B0aW9ucz1cIlNSZWFkb3B0aW9uc1wiXG4gID5cbiAgPC9xLXNlbGVjdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY2hhcHRlck1ldGEgfSBmcm9tICdzcmMvY29tcG9uZW50cy9yZWFkZXIvcmVhZGVyU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3JlYWRlckRyYXdlckNvbnQnLFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kd2F0Y2goJ1NSZWFkTW9kZWwnLCAobmV3ZXI6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldFJNKG5ld2VyKTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnU3JlYWRNYXJnaW5zJywgKG5ld2VyOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2V0V1QobmV3ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdTcmVhZFNjYWxlJywgKG5ld2VyOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2V0U2NhbGUobmV3ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdzUmVhZE9mZnNldCcsIChuZXdlcjogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLnNldE9mZnNldChuZXdlcik7XG4gICAgfSk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBvcHRpb25zID0gY2hhcHRlck1ldGEocGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydtYW5nYUlEJ119YCkpO1xuICAgIGNvbnN0IFNSZWFkTW9kZWwgPSBvcHRpb25zLnZ1ZV9STTtcbiAgICBjb25zdCBTcmVhZE1hcmdpbnMgPSBvcHRpb25zLnZ1ZV9XVDtcbiAgICBjb25zdCBTcmVhZFNjYWxlID0gb3B0aW9ucy52dWVfU2NhbGU7XG4gICAgY29uc3Qgc1JlYWRPZmZzZXQgPSBvcHRpb25zLnZ1ZV9PZmZzZXQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNyZWFkTWFyZ2lucyxcbiAgICAgIFNyZWFkU2NhbGUsXG4gICAgICBTUmVhZE1vZGVsLFxuICAgICAgU1JlYWRvcHRpb25zOiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZScsICdWZXJ0aWNhbCddLFxuICAgICAgc1JlYWRPZmZzZXQsXG4gICAgICBvcHRpb25zXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1sYXlvdXQgdmlldz1cImhIaCBMcHIgZkZmXCI+XG4gICAgPHEtaGVhZGVyXG4gICAgICBlbGV2YXRlZFxuICAgICAgOnN0eWxlPVwiXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOmAgK1xuICAgICAgICAoJHEuZGFyay5pc0FjdGl2ZSA/IGB2YXIoLS1xLXByaW1hcnlEKWAgOiBgdmFyKC0tcS1wcmltYXJ5KWApXG4gICAgICBcIlxuICAgID5cbiAgICAgIDxxLWJhclxuICAgICAgICB2LWlmPVwiJHEucGxhdGZvcm0uaXMuZWxlY3Ryb25cIlxuICAgICAgICBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZ1wiXG4gICAgICAgIDpjbGFzcz1cIkZTID8gYGhpZGRlbmAgOiBgYFwiXG4gICAgICA+XG4gICAgICAgIDxxLWljb24gbmFtZT1cImltZzpmYXZpY29uLmljb1wiIGNsYXNzPVwicS1lbGVjdHJvbi1kcmFnLS1leGNlcHRpb25cIiAvPlxuICAgICAgICA8ZGl2Pnt7IGAke3RpdGxlfSAtIFRhY2hpZGVzayBRdWFzYXJgIH19PC9kaXY+XG5cbiAgICAgICAgPHEtc3BhY2UgLz5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwibWluaW1pemVcIlxuICAgICAgICAgIEBjbGljaz1cIm1pbmltaXplXCJcbiAgICAgICAgICBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZy0tZXhjZXB0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImNyb3Bfc3F1YXJlXCJcbiAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVNYXhpbWl6ZVwiXG4gICAgICAgICAgY2xhc3M9XCJxLWVsZWN0cm9uLWRyYWctLWV4Y2VwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgQGNsaWNrPVwiY2xvc2VBcHBcIlxuICAgICAgICAgIGNsYXNzPVwicS1lbGVjdHJvbi1kcmFnLS1leGNlcHRpb25cIlxuICAgICAgICAvPlxuICAgICAgPC9xLWJhcj5cbiAgICA8L3EtaGVhZGVyPlxuICAgIDxxLWRyYXdlclxuICAgICAgb3ZlcmxheVxuICAgICAgdi1tb2RlbD1cImxlZnREcmF3ZXJPcGVuXCJcbiAgICAgIGVsZXZhdGVkXG4gICAgICBjbGFzcz1cImZpeGVkXCJcbiAgICAgIDpicmVha3BvaW50PVwiMFwiXG4gICAgICA6c3R5bGU9XCJcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6YCArXG4gICAgICAgICgkcS5kYXJrLmlzQWN0aXZlID8gYHZhcigtLXEtc2Vjb25kYXJ5RClgIDogYHZhcigtLXEtc2Vjb25kYXJ5KWApXG4gICAgICBcIlxuICAgID5cbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBAY2xpY2s9XCJsZWZ0RHJhd2VyT3BlbiA9ICFsZWZ0RHJhd2VyT3BlblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0biBpY29uPVwiYXJyb3dfYmFja1wiIGZsYXQgcm91bmQgQGNsaWNrPVwiJHJvdXRlci5nbygtMSlcIiAvPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8bGVmdERyYXdlclZ1ZT48L2xlZnREcmF3ZXJWdWU+XG4gICAgPC9xLWRyYXdlcj5cbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgIDxyb3V0ZXItdmlld1xuICAgICAgICBAc2V0VGl0bGU9XCJzZXRUaXRsZVwiXG4gICAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgZGFyay1wYWdlYCA6IGB3aGl0ZWBcIlxuICAgICAgLz5cbiAgICAgIDxxLXBhZ2Utc3RpY2t5XG4gICAgICAgIHBvc2l0aW9uPVwidG9wLWxlZnRcIlxuICAgICAgICA6b2Zmc2V0PVwiWzE4LCAxOF1cIlxuICAgICAgICB2LWlmPVwiIWxlZnREcmF3ZXJPcGVuXCJcbiAgICAgICAgY2xhc3M9XCJmYWJiXCJcbiAgICAgID5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmFiXG4gICAgICAgICAgaWNvbj1cIm1lbnVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgQGNsaWNrPVwibGVmdERyYXdlck9wZW4gPSAhbGVmdERyYXdlck9wZW5cIlxuICAgICAgICAvPlxuICAgICAgPC9xLXBhZ2Utc3RpY2t5PlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1xuICBSb3V0ZUxvY2F0aW9uTm9ybWFsaXplZCxcbiAgUm91dGVMb2NhdGlvbk5vcm1hbGl6ZWRMb2FkZWRcbn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgbGVmdERyYXdlclZ1ZSBmcm9tICdzcmMvY29tcG9uZW50cy9yZWFkZXIvbGVmdERyYXdlckNvbnQudnVlJztcbmltcG9ydCB7IHVzZU1ldGEgfSBmcm9tICdxdWFzYXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnY2hhcHRlckxheW91dCcsXG4gIGNvbXBvbmVudHM6IHsgbGVmdERyYXdlclZ1ZSB9LFxuICB3YXRjaDoge1xuICAgIHNjcm9sbGJhclRoZW1lKG5ld3csIG9sZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKG9sZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmV3dyk7XG4gICAgfSxcbiAgICAkcm91dGUodG86IFJvdXRlTG9jYXRpb25Ob3JtYWxpemVkLCBmcm9tOiBSb3V0ZUxvY2F0aW9uTm9ybWFsaXplZExvYWRlZCkge1xuICAgICAgaWYgKFxuICAgICAgICB0by5wYXJhbXNbJ21hbmdhSUQnXSAhPSBmcm9tLnBhcmFtc1snbWFuZ2FJRCddIHx8XG4gICAgICAgIHRvLnBhcmFtc1snY2hhcHRlcklEJ10gIT1cbiAgICAgICAgICAocGFyc2VJbnQoYCR7ZnJvbS5wYXJhbXNbJ2NoYXB0ZXJJRCddfWApICsgMSkudG9TdHJpbmcoKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5nbygwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc2Nyb2xsYmFyVGhlbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLiRxLmRhcmsuaXNBY3RpdmUgPyAnZGFya1NCJyA6ICdsaWdodFNCJztcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsYmFyVGhlbWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmdWxsLXNjcmVlbicsIChlKSA9PiB0aGlzLmlzRlMoZSBhcyBDdXN0b21FdmVudCkpO1xuICB9LFxuICB1bm1vdW50ZWQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsYmFyVGhlbWUpO1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcS5kYXJrLnNldCg8Ym9vbGVhbj50aGlzLiRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrJykpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlZGFyaygpIHtcbiAgICAgIHRoaXMuJHEuZGFyay50b2dnbGUoKTtcbiAgICAgIHRoaXMuJHEubG9jYWxTdG9yYWdlLnNldCgnZGFyaycsIHRoaXMuJHEuZGFyay5pc0FjdGl2ZSk7XG4gICAgfSxcbiAgICBzZXRUaXRsZSh0aXRsOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsO1xuICAgIH0sXG4gICAgbWluaW1pemUoKSB7XG4gICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5lbGVjdHJvbikge1xuICAgICAgICB3aW5kb3cubXlXaW5kb3dBUEkubWluaW1pemUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgaWYgKHRoaXMuJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAgICAgd2luZG93Lm15V2luZG93QVBJLnRvZ2dsZU1heGltaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZUFwcCgpIHtcbiAgICAgIGlmICh0aGlzLiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uKSB7XG4gICAgICAgIHdpbmRvdy5teVdpbmRvd0FQSS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNGUyhldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICAgIHRoaXMuRlMgPSBldmVudC5kZXRhaWw7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHJlZignJyk7XG4gICAgdXNlTWV0YSgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGl0bGUudmFsdWUsXG4gICAgICAgIHRpdGxlVGVtcGxhdGU6ICh0aXRsZSkgPT4gYCR7dGl0bGV9IC0gUmVhZGluZyAtIFRhY2hpZGVzayBRdWFzYXIgYFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdERyYXdlck9wZW46IHJlZihmYWxzZSksXG4gICAgICB0aXRsZSxcbiAgICAgIEZTOiByZWYoZmFsc2UpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5mYWJiIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuLmZhYmI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJ0aXRsZSIsIl9ub3JtYWxpemVTdHlsZSIsIl9vcGVuQmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlRWxlbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixTQUFTLFdBQVk7QUFDZCxTQUFBLE9BQU8sY0FBYyxDQUFDLFVBQWtCO0FBQ3RDLFdBQUEsUUFBUSxNQUFNLEtBQUs7QUFBQSxJQUFBLENBQ3pCO0FBQ0ksU0FBQSxPQUFPLGdCQUFnQixDQUFDLFVBQW1CO0FBQ3pDLFdBQUEsUUFBUSxNQUFNLEtBQUs7QUFBQSxJQUFBLENBQ3pCO0FBQ0ksU0FBQSxPQUFPLGNBQWMsQ0FBQyxVQUFtQjtBQUN2QyxXQUFBLFFBQVEsU0FBUyxLQUFLO0FBQUEsSUFBQSxDQUM1QjtBQUNJLFNBQUEsT0FBTyxlQUFlLENBQUMsVUFBbUI7QUFDeEMsV0FBQSxRQUFRLFVBQVUsS0FBSztBQUFBLElBQUEsQ0FDN0I7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQ04sVUFBTSxRQUFRO0FBQ2QsVUFBTSxVQUFVLFlBQVksU0FBUyxHQUFHLE1BQU0sT0FBTyxZQUFZLENBQUM7QUFDbEUsVUFBTSxhQUFhLFFBQVE7QUFDM0IsVUFBTSxlQUFlLFFBQVE7QUFDN0IsVUFBTSxhQUFhLFFB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
