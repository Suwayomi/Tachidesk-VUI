import { Q as QIcon } from "./QIcon.aa032244.js";
import { u as useMeta, Q as QLayout, a as QBar, b as QSpace, c as QHeader, d as QDrawer, e as QPageContainer } from "./use-meta.7bed1395.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { c as createComponent, h as hSlot, a as hMergeSlot } from "./QSpinner.6511ee07.js";
import { c as computed, h, i as inject, e as emptyRenderFn, r as ref, d as isRuntimeSsrPreHydration, w as watch, o as onBeforeUnmount, l as layoutKey, g as getCurrentInstance, f as defineComponent, _ as _export_sfc, j as openBlock, k as createBlock, m as withCtx, n as createVNode, p as createCommentVNode, q as createTextVNode, t as toDisplayString, s as normalizeClass, u as resolveComponent, v as createBaseVNode, x as normalizeStyle, y as createElementBlock, z as renderList, F as Fragment, A as mergeProps } from "./index.75e4774b.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QResizeObserver } from "./QResizeObserver.98338598.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import "./use-dark.63b90c22.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./TouchPan.86a57c6f.js";
import "./selection.3a23570e.js";
import "./format.2a3572e1.js";
import "./QScrollObserver.64c336b1.js";
import "./Ripple.bedf8a1c.js";
var QToolbarTitle = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QToolbar = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
  }
});
var QFooter = createComponent({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QFooter needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const windowHeight = ref(
      isRuntimeSsrPreHydration.value === true || $layout.isContainer.value === true ? 0 : window.innerHeight
    );
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("F") > -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const containerHeight = computed(() => $layout.isContainer.value === true ? $layout.containerHeight.value : windowHeight.value);
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = $layout.scroll.value.position + containerHeight.value + size.value - $layout.height.value;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-footer q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-bottom" + (props.bordered === true ? " q-footer--bordered" : "") + (hidden.value === true ? " q-footer--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" + (fixed.value !== true ? " hidden" : "") : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.bottom, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("footer", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function updateRevealed() {
      if (props.reveal !== true) {
        return;
      }
      const { direction, position, inflectionPoint } = $layout.scroll.value;
      updateLocal(revealed, direction === "up" || position - inflectionPoint < 100 || $layout.height.value - containerHeight.value - position - size.value < 300);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch([size, $layout.scroll, $layout.height], updateRevealed);
    watch(() => $q.screen.height, (val) => {
      $layout.isContainer.value !== true && updateLocal(windowHeight, val);
    });
    const instance = {};
    $layout.instances.footer = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.footer === instance) {
        $layout.instances.footer = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hMergeSlot(slots.default, [
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      ]);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      return h("footer", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const _sfc_main$1 = defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: "#"
    },
    icon: {
      type: String,
      default: ""
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QItem, {
    to: _ctx.link,
    class: "text-grey-7",
    "active-class": "text-primary"
  }, {
    default: withCtx(() => [
      _ctx.icon ? (openBlock(), createBlock(QItemSection, {
        key: 0,
        avatar: ""
      }, {
        default: withCtx(() => [
          createVNode(QIcon, {
            name: _ctx.icon,
            size: "lg"
          }, null, 8, ["name"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(QItemSection, null, {
        default: withCtx(() => [
          createVNode(QItemLabel, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }),
          createVNode(QItemLabel, { caption: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.caption), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["to"]);
}
var EssentialLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "EssentialLink.vue"]]);
const linksList = [
  {
    title: "Library",
    caption: "",
    icon: "o_collections_bookmark",
    link: "/library?tab=0"
  },
  {
    title: "Updates",
    caption: "",
    icon: "o_new_releases",
    link: "/updates"
  },
  {
    title: "Extensions",
    caption: "",
    icon: "o_extension",
    link: "/extensions"
  },
  {
    title: "Sources",
    caption: "",
    icon: "o_explore",
    link: "/sources"
  },
  {
    title: "Downloads",
    caption: "",
    icon: "o_download",
    link: "/downloads"
  },
  {
    title: "Settings",
    caption: "",
    icon: "settings",
    link: "/settings"
  }
];
const _sfc_main = defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink
  },
  watch: {
    scrollbarTheme(neww, old) {
      document.body.classList.remove(old);
      document.body.classList.add(neww);
    }
  },
  methods: {
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
      console.log(event);
      this.FS = event.detail;
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
  setup() {
    const $q = useQuasar();
    const title = ref("Quasar App");
    useMeta(() => {
      return {
        title: title.value,
        titleTemplate: (title2) => `${title2} - Tachidesk Quasar`
      };
    });
    $q.dark.set($q.localStorage.getItem("dark"));
    const leftDrawerOpen = ref(true);
    return {
      title,
      essentialLinks: linksList,
      tru: ref(true),
      leftDrawerOpen,
      toggledark() {
        $q.dark.toggle();
        $q.localStorage.set("dark", $q.dark.isActive);
      },
      doSearch: ref(false),
      Searchenter: ref(false),
      FS: ref(false)
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_EssentialLink = resolveComponent("EssentialLink");
  return openBlock(), createBlock(QLayout, {
    view: "hHh Lpr lFr",
    class: normalizeClass([_ctx.scrollbarTheme, "mainLayout"])
  }, {
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
                onClick: _ctx.minimize
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "crop_square",
                onClick: _ctx.toggleMaximize
              }, null, 8, ["onClick"]),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                icon: "close",
                onClick: _ctx.closeApp
              }, null, 8, ["onClick"])
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true),
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                dense: "",
                round: "",
                icon: "menu",
                "aria-label": "Menu",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
              }),
              createVNode(QBtn, {
                icon: "arrow_back",
                flat: "",
                round: "",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.go(-1))
              }),
              createVNode(QToolbarTitle, { class: "col-grow q-pr-none" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(!_ctx.$q.screen.xs ? _ctx.title : ``), 1)
                ]),
                _: 1
              }),
              createVNode(_component_router_view, { name: "inBar" }),
              createVNode(QBtn, {
                elevated: "",
                class: "q-ml-sm",
                round: "",
                "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
                icon: _ctx.$q.dark.isActive ? `light_mode` : `dark_mode`,
                onClick: _ctx.toggledark
              }, null, 8, ["text-color", "icon", "onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["style"]),
      _ctx.$q.screen.sm || _ctx.$q.screen.xs ? (openBlock(), createBlock(QFooter, {
        key: 0,
        elevated: "",
        class: normalizeClass(["text-primary flex no-wrap justify-evenly", _ctx.$q.dark.isActive ? `bg-dark` : `bg-white`])
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.essentialLinks, (menu) => {
            return openBlock(), createBlock(QItem, {
              key: menu.link,
              to: menu.link,
              class: "text-grey-7",
              "active-class": "text-primary"
            }, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: menu.icon,
                      size: "sm"
                    }, null, 8, ["name"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["to"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("", true),
      !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? (openBlock(), createBlock(QDrawer, {
        key: 1,
        modelValue: _ctx.tru,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.tru = $event),
        "show-if-above": "",
        mini: _ctx.leftDrawerOpen,
        breakpoint: 0,
        style: normalizeStyle(
          `background-color:` + (_ctx.$q.dark.isActive ? `var(--q-secondaryD)` : `var(--q-secondary)`)
        )
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.essentialLinks, (link) => {
            return openBlock(), createBlock(_component_EssentialLink, mergeProps({
              key: link.title
            }, link), null, 16);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "mini", "style"])) : createCommentVNode("", true),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view, {
            onSetTitle: _ctx.setTitle,
            class: normalizeClass(_ctx.$q.dark.isActive ? `dark-page` : `white`),
            style: { "overflow-y": "auto" }
          }, null, 8, ["onSetTitle", "class"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MainLayout.vue"]]);
export { MainLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC5lZGU2MTA5ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFpbkxheW91dC9Fc3NlbnRpYWxMaW5rLnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhclRpdGxlJyxcblxuICBwcm9wczoge1xuICAgIHNocmluazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyX190aXRsZSBlbGxpcHNpcydcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBpbnNldDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmluc2V0ID09PSB0cnVlID8gJyBxLXRvb2xiYXItLWluc2V0JyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlLCByb2xlOiAndG9vbGJhcicgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBwb3NpdGlvbiwgaW5mbGVjdGlvblBvaW50IH0gPSAkbGF5b3V0LnNjcm9sbC52YWx1ZVxuXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgKFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgcG9zaXRpb24gLSBpbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgICAgfHwgJGxheW91dC5oZWlnaHQudmFsdWUgLSBjb250YWluZXJIZWlnaHQudmFsdWUgLSBwb3NpdGlvbiAtIHNpemUudmFsdWUgPCAzMDBcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChbIHNpemUsICRsYXlvdXQuc2Nyb2xsLCAkbGF5b3V0LmhlaWdodCBdLCB1cGRhdGVSZXZlYWxlZClcblxuICAgIHdhdGNoKCgpID0+ICRxLnNjcmVlbi5oZWlnaHQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHdpbmRvd0hlaWdodCwgdmFsKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICBdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZm9vdGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtIDp0bz1cImxpbmtcIiBjbGFzcz1cInRleHQtZ3JleS03XCIgYWN0aXZlLWNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJpY29uXCIgYXZhdGFyPlxuICAgICAgPHEtaWNvbiA6bmFtZT1cImljb25cIiBzaXplPVwibGdcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHRpdGxlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgY2FwdGlvbiB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFc3NlbnRpYWxMaW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgY2FwdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuXG4gICAgbGluazoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyMnXG4gICAgfSxcblxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwiaEhoIExwciBsRnJcIiA6Y2xhc3M9XCJzY3JvbGxiYXJUaGVtZVwiIGNsYXNzPVwibWFpbkxheW91dFwiPlxuICAgIDxxLWhlYWRlclxuICAgICAgZWxldmF0ZWRcbiAgICAgIDpzdHlsZT1cIlxuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjpgICtcbiAgICAgICAgKCRxLmRhcmsuaXNBY3RpdmUgPyBgdmFyKC0tcS1wcmltYXJ5RClgIDogYHZhcigtLXEtcHJpbWFyeSlgKVxuICAgICAgXCJcbiAgICA+XG4gICAgICA8cS1iYXJcbiAgICAgICAgdi1pZj1cIiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uXCJcbiAgICAgICAgY2xhc3M9XCJxLWVsZWN0cm9uLWRyYWdcIlxuICAgICAgICA6Y2xhc3M9XCJGUyA/IGBoaWRkZW5gIDogYGBcIlxuICAgICAgPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJpbWc6ZmF2aWNvbi5pY29cIiBjbGFzcz1cInEtZWxlY3Ryb24tZHJhZy0tZXhjZXB0aW9uXCIgLz5cbiAgICAgICAgPGRpdj57eyBgJHt0aXRsZX0gLSBUYWNoaWRlc2sgUXVhc2FyYCB9fTwvZGl2PlxuXG4gICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgPHEtYnRuIGRlbnNlIGZsYXQgaWNvbj1cIm1pbmltaXplXCIgQGNsaWNrPVwibWluaW1pemVcIiAvPlxuICAgICAgICA8cS1idG4gZGVuc2UgZmxhdCBpY29uPVwiY3JvcF9zcXVhcmVcIiBAY2xpY2s9XCJ0b2dnbGVNYXhpbWl6ZVwiIC8+XG4gICAgICAgIDxxLWJ0biBkZW5zZSBmbGF0IGljb249XCJjbG9zZVwiIEBjbGljaz1cImNsb3NlQXBwXCIgLz5cbiAgICAgIDwvcS1iYXI+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGljb249XCJtZW51XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiXG4gICAgICAgICAgQGNsaWNrPVwibGVmdERyYXdlck9wZW4gPSAhbGVmdERyYXdlck9wZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG4gaWNvbj1cImFycm93X2JhY2tcIiBmbGF0IHJvdW5kIEBjbGljaz1cIiRyb3V0ZXIuZ28oLTEpXCIgLz5cblxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwiY29sLWdyb3cgcS1wci1ub25lXCI+XG4gICAgICAgICAge3sgISRxLnNjcmVlbi54cyA/IHRpdGxlIDogYGAgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgPHJvdXRlci12aWV3IG5hbWU9XCJpbkJhclwiIC8+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZWxldmF0ZWRcbiAgICAgICAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLmlzQWN0aXZlID8gYHdoaXRlYCA6IGBkYXJrYFwiXG4gICAgICAgICAgOmljb249XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0X21vZGVgIDogYGRhcmtfbW9kZWBcIlxuICAgICAgICAgIEBjbGljaz1cInRvZ2dsZWRhcmtcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWZvb3RlclxuICAgICAgZWxldmF0ZWRcbiAgICAgIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZsZXggbm8td3JhcCBqdXN0aWZ5LWV2ZW5seVwiXG4gICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmtgIDogYGJnLXdoaXRlYFwiXG4gICAgICB2LWlmPVwiJHEuc2NyZWVuLnNtIHx8ICRxLnNjcmVlbi54c1wiXG4gICAgPlxuICAgICAgPHEtaXRlbVxuICAgICAgICB2LWZvcj1cIm1lbnUgaW4gZXNzZW50aWFsTGlua3NcIlxuICAgICAgICA6a2V5PVwibWVudS5saW5rXCJcbiAgICAgICAgOnRvPVwibWVudS5saW5rXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktN1wiXG4gICAgICAgIGFjdGl2ZS1jbGFzcz1cInRleHQtcHJpbWFyeVwiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj4gPHEtaWNvbiA6bmFtZT1cIm1lbnUuaWNvblwiIHNpemU9XCJzbVwiIC8+PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1mb290ZXI+XG5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIHYtaWY9XCIhKCRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMpXCJcbiAgICAgIHYtbW9kZWw9XCJ0cnVcIlxuICAgICAgc2hvdy1pZi1hYm92ZVxuICAgICAgOm1pbmk9XCJsZWZ0RHJhd2VyT3BlblwiXG4gICAgICA6YnJlYWtwb2ludD1cIjBcIlxuICAgICAgOnN0eWxlPVwiXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOmAgK1xuICAgICAgICAoJHEuZGFyay5pc0FjdGl2ZSA/IGB2YXIoLS1xLXNlY29uZGFyeUQpYCA6IGB2YXIoLS1xLXNlY29uZGFyeSlgKVxuICAgICAgXCJcbiAgICA+XG4gICAgICA8RXNzZW50aWFsTGlua1xuICAgICAgICB2LWZvcj1cImxpbmsgaW4gZXNzZW50aWFsTGlua3NcIlxuICAgICAgICA6a2V5PVwibGluay50aXRsZVwiXG4gICAgICAgIHYtYmluZD1cImxpbmtcIlxuICAgICAgLz5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICA8cm91dGVyLXZpZXdcbiAgICAgICAgQHNldFRpdGxlPVwic2V0VGl0bGVcIlxuICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGRhcmstcGFnZWAgOiBgd2hpdGVgXCJcbiAgICAgICAgc3R5bGU9XCJvdmVyZmxvdy15OiBhdXRvXCJcbiAgICAgIC8+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuICA8L3EtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBFc3NlbnRpYWxMaW5rIGZyb20gJ3NyYy9jb21wb25lbnRzL21haW5MYXlvdXQvRXNzZW50aWFsTGluay52dWUnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHVzZU1ldGEgfSBmcm9tICdxdWFzYXInO1xuXG5jb25zdCBsaW5rc0xpc3QgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0xpYnJhcnknLFxuICAgIGNhcHRpb246ICcnLFxuICAgIGljb246ICdvX2NvbGxlY3Rpb25zX2Jvb2ttYXJrJyxcbiAgICBsaW5rOiAnL2xpYnJhcnk/dGFiPTAnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1VwZGF0ZXMnLFxuICAgIGNhcHRpb246ICcnLFxuICAgIGljb246ICdvX25ld19yZWxlYXNlcycsXG4gICAgbGluazogJy91cGRhdGVzJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFeHRlbnNpb25zJyxcbiAgICBjYXB0aW9uOiAnJyxcbiAgICBpY29uOiAnb19leHRlbnNpb24nLFxuICAgIGxpbms6ICcvZXh0ZW5zaW9ucydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU291cmNlcycsXG4gICAgY2FwdGlvbjogJycsXG4gICAgaWNvbjogJ29fZXhwbG9yZScsXG4gICAgbGluazogJy9zb3VyY2VzJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdEb3dubG9hZHMnLFxuICAgIGNhcHRpb246ICcnLFxuICAgIGljb246ICdvX2Rvd25sb2FkJyxcbiAgICBsaW5rOiAnL2Rvd25sb2FkcydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2V0dGluZ3MnLFxuICAgIGNhcHRpb246ICcnLFxuICAgIGljb246ICdzZXR0aW5ncycsXG4gICAgbGluazogJy9zZXR0aW5ncydcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ01haW5MYXlvdXQnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFc3NlbnRpYWxMaW5rXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc2Nyb2xsYmFyVGhlbWUobmV3dywgb2xkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUob2xkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChuZXd3KTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRUaXRsZSh0aXRsOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsO1xuICAgIH0sXG4gICAgbWluaW1pemUoKSB7XG4gICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5lbGVjdHJvbikge1xuICAgICAgICB3aW5kb3cubXlXaW5kb3dBUEkubWluaW1pemUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgaWYgKHRoaXMuJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAgICAgd2luZG93Lm15V2luZG93QVBJLnRvZ2dsZU1heGltaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZUFwcCgpIHtcbiAgICAgIGlmICh0aGlzLiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uKSB7XG4gICAgICAgIHdpbmRvdy5teVdpbmRvd0FQSS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNGUyhldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgIHRoaXMuRlMgPSBldmVudC5kZXRhaWw7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNjcm9sbGJhclRoZW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy4kcS5kYXJrLmlzQWN0aXZlID8gJ2RhcmtTQicgOiAnbGlnaHRTQic7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGJhclRoZW1lKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZnVsbC1zY3JlZW4nLCAoZSkgPT4gdGhpcy5pc0ZTKGUgYXMgQ3VzdG9tRXZlbnQpKTtcbiAgfSxcbiAgdW5tb3VudGVkKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGJhclRoZW1lKTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbiAgICBjb25zdCB0aXRsZSA9IHJlZignUXVhc2FyIEFwcCcpO1xuICAgIHVzZU1ldGEoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLnZhbHVlLFxuICAgICAgICB0aXRsZVRlbXBsYXRlOiAodGl0bGUpID0+IGAke3RpdGxlfSAtIFRhY2hpZGVzayBRdWFzYXJgXG4gICAgICB9O1xuICAgIH0pO1xuICAgICRxLmRhcmsuc2V0KDxib29sZWFuPiRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrJykpO1xuICAgIGNvbnN0IGxlZnREcmF3ZXJPcGVuID0gcmVmKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGVzc2VudGlhbExpbmtzOiBsaW5rc0xpc3QsXG4gICAgICB0cnU6IHJlZih0cnVlKSxcbiAgICAgIGxlZnREcmF3ZXJPcGVuLFxuICAgICAgdG9nZ2xlZGFyaygpIHtcbiAgICAgICAgJHEuZGFyay50b2dnbGUoKTtcbiAgICAgICAgJHEubG9jYWxTdG9yYWdlLnNldCgnZGFyaycsICRxLmRhcmsuaXNBY3RpdmUpO1xuICAgICAgfSxcbiAgICAgIGRvU2VhcmNoOiByZWYoZmFsc2UpLFxuICAgICAgU2VhcmNoZW50ZXI6IHJlZihmYWxzZSksXG4gICAgICBGUzogcmVmKGZhbHNlKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsib2Zmc2V0IiwiX3NmY19tYWluIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsInRpdGxlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfbWVyZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBQSxnQkFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVDtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUN2QixVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLCtCQUNHLE1BQU0sV0FBVyxPQUFPLGdCQUFnQjtBQUFBLElBQzVDO0FBRUQsV0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sUUFBUSxNQUFLLEdBQUksTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3JFO0FBQ0gsQ0FBQztBQ2ZELElBQUEsV0FB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
