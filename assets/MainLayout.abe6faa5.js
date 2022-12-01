import { Q as QIcon } from "./QIcon.25655771.js";
import { u as useMeta, Q as QLayout, a as QBar, b as QSpace, c as QHeader, d as QDrawer, e as QPageContainer } from "./use-meta.1f962fea.js";
import { Q as QBtn } from "./QBtn.fa53f47e.js";
import { c as createComponent, h as hSlot, a as hMergeSlot } from "./QSpinner.dc7e097a.js";
import { c as computed, h, i as inject, e as emptyRenderFn, r as ref, a as isRuntimeSsrPreHydration, w as watch, o as onBeforeUnmount, l as layoutKey, g as getCurrentInstance, d as defineComponent, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, m as createVNode, n as createCommentVNode, p as createTextVNode, t as toDisplayString, q as normalizeClass, s as resolveComponent, u as createBaseVNode, v as createElementBlock, x as renderList, F as Fragment, y as mergeProps } from "./index.c15e704f.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.66687690.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { Q as QResizeObserver } from "./QResizeObserver.beb445f9.js";
import { u as useQuasar } from "./use-quasar.d354c5de.js";
import { storeGet, storeSet } from "./StoreStuff.9c9e2ee5.js";
import "./use-dark.97ac6897.js";
import "./use-timeout.a78770d1.js";
import "./scroll.d31d6ae2.js";
import "./dom.617e2098.js";
import "./TouchPan.b565f21b.js";
import "./selection.a711d5f1.js";
import "./format.2a3572e1.js";
import "./QScrollObserver.5c2596b5.js";
import "./Ripple.a0364732.js";
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
    $q.dark.set(storeGet("dark", true));
    const leftDrawerOpen = ref(true);
    return {
      title,
      essentialLinks: linksList,
      tru: ref(true),
      leftDrawerOpen,
      toggledark() {
        $q.dark.toggle();
        storeSet("dark", $q.dark.isActive, true);
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
              !(_ctx.$q.screen.xs || _ctx.$q.screen.sm) ? (openBlock(), createBlock(QBtn, {
                key: 0,
                flat: "",
                dense: "",
                round: "",
                icon: "menu",
                "aria-label": "Menu",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.leftDrawerOpen = !_ctx.leftDrawerOpen)
              })) : createCommentVNode("", true),
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
                class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
                round: "",
                icon: _ctx.$q.dark.isActive ? `light_mode` : `dark_mode`,
                onClick: _ctx.toggledark
              }, null, 8, ["class", "icon", "onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]),
      _ctx.$q.screen.sm || _ctx.$q.screen.xs ? (openBlock(), createBlock(QFooter, {
        key: 0,
        elevated: "",
        class: normalizeClass(["text-primary flex no-wrap justify-evenly", _ctx.$q.dark.isActive ? `bg-dark` : `bg-light`])
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
        class: normalizeClass(_ctx.$q.dark.isActive ? `bg-secondaryD` : `bg-secondary`)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.essentialLinks, (link) => {
            return openBlock(), createBlock(_component_EssentialLink, mergeProps({
              key: link.title
            }, link), null, 16);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "mini", "class"])) : createCommentVNode("", true),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view, {
            onSetTitle: _ctx.setTitle,
            class: normalizeClass(_ctx.$q.dark.isActive ? `bg-dark-page` : `bg-light-page`),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC5hYmU2ZmFhNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFpbkxheW91dC9Fc3NlbnRpYWxMaW5rLnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhclRpdGxlJyxcblxuICBwcm9wczoge1xuICAgIHNocmluazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyX190aXRsZSBlbGxpcHNpcydcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBpbnNldDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmluc2V0ID09PSB0cnVlID8gJyBxLXRvb2xiYXItLWluc2V0JyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlLCByb2xlOiAndG9vbGJhcicgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBwb3NpdGlvbiwgaW5mbGVjdGlvblBvaW50IH0gPSAkbGF5b3V0LnNjcm9sbC52YWx1ZVxuXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgKFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgcG9zaXRpb24gLSBpbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgICAgfHwgJGxheW91dC5oZWlnaHQudmFsdWUgLSBjb250YWluZXJIZWlnaHQudmFsdWUgLSBwb3NpdGlvbiAtIHNpemUudmFsdWUgPCAzMDBcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChbIHNpemUsICRsYXlvdXQuc2Nyb2xsLCAkbGF5b3V0LmhlaWdodCBdLCB1cGRhdGVSZXZlYWxlZClcblxuICAgIHdhdGNoKCgpID0+ICRxLnNjcmVlbi5oZWlnaHQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHdpbmRvd0hlaWdodCwgdmFsKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICBdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZm9vdGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtIDp0bz1cImxpbmtcIiBjbGFzcz1cInRleHQtZ3JleS03XCIgYWN0aXZlLWNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJpY29uXCIgYXZhdGFyPlxuICAgICAgPHEtaWNvbiA6bmFtZT1cImljb25cIiBzaXplPVwibGdcIiAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHRpdGxlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgY2FwdGlvbiB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFc3NlbnRpYWxMaW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgY2FwdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuXG4gICAgbGluazoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyMnXG4gICAgfSxcblxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwiaEhoIExwciBsRnJcIiA6Y2xhc3M9XCJzY3JvbGxiYXJUaGVtZVwiIGNsYXNzPVwibWFpbkxheW91dFwiPlxuICAgIDxxLWhlYWRlciBlbGV2YXRlZCA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLXByaW1hcnlEYCA6IGBiZy1wcmltYXJ5YFwiPlxuICAgICAgPHEtYmFyXG4gICAgICAgIHYtaWY9XCIkcS5wbGF0Zm9ybS5pcy5lbGVjdHJvblwiXG4gICAgICAgIGNsYXNzPVwicS1lbGVjdHJvbi1kcmFnXCJcbiAgICAgICAgOmNsYXNzPVwiRlMgPyBgaGlkZGVuYCA6IGBgXCJcbiAgICAgID5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiaW1nOmZhdmljb24uaWNvXCIgY2xhc3M9XCJxLWVsZWN0cm9uLWRyYWctLWV4Y2VwdGlvblwiIC8+XG4gICAgICAgIDxkaXY+e3sgYCR7dGl0bGV9IC0gVGFjaGlkZXNrIFF1YXNhcmAgfX08L2Rpdj5cblxuICAgICAgICA8cS1zcGFjZSAvPlxuXG4gICAgICAgIDxxLWJ0biBkZW5zZSBmbGF0IGljb249XCJtaW5pbWl6ZVwiIEBjbGljaz1cIm1pbmltaXplXCIgLz5cbiAgICAgICAgPHEtYnRuIGRlbnNlIGZsYXQgaWNvbj1cImNyb3Bfc3F1YXJlXCIgQGNsaWNrPVwidG9nZ2xlTWF4aW1pemVcIiAvPlxuICAgICAgICA8cS1idG4gZGVuc2UgZmxhdCBpY29uPVwiY2xvc2VcIiBAY2xpY2s9XCJjbG9zZUFwcFwiIC8+XG4gICAgICA8L3EtYmFyPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgdi1pZj1cIiEoJHEuc2NyZWVuLnhzIHx8ICRxLnNjcmVlbi5zbSlcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgaWNvbj1cIm1lbnVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcbiAgICAgICAgICBAY2xpY2s9XCJsZWZ0RHJhd2VyT3BlbiA9ICFsZWZ0RHJhd2VyT3BlblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0biBpY29uPVwiYXJyb3dfYmFja1wiIGZsYXQgcm91bmQgQGNsaWNrPVwiJHJvdXRlci5nbygtMSlcIiAvPlxuXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgY2xhc3M9XCJjb2wtZ3JvdyBxLXByLW5vbmVcIj5cbiAgICAgICAgICB7eyAhJHEuc2NyZWVuLnhzID8gdGl0bGUgOiBgYCB9fVxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cblxuICAgICAgICA8cm91dGVyLXZpZXcgbmFtZT1cImluQmFyXCIgLz5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBlbGV2YXRlZFxuICAgICAgICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiXG4gICAgICAgICAgOmljb249XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0X21vZGVgIDogYGRhcmtfbW9kZWBcIlxuICAgICAgICAgIEBjbGljaz1cInRvZ2dsZWRhcmtcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWZvb3RlclxuICAgICAgZWxldmF0ZWRcbiAgICAgIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZsZXggbm8td3JhcCBqdXN0aWZ5LWV2ZW5seVwiXG4gICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmtgIDogYGJnLWxpZ2h0YFwiXG4gICAgICB2LWlmPVwiJHEuc2NyZWVuLnNtIHx8ICRxLnNjcmVlbi54c1wiXG4gICAgPlxuICAgICAgPHEtaXRlbVxuICAgICAgICB2LWZvcj1cIm1lbnUgaW4gZXNzZW50aWFsTGlua3NcIlxuICAgICAgICA6a2V5PVwibWVudS5saW5rXCJcbiAgICAgICAgOnRvPVwibWVudS5saW5rXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktN1wiXG4gICAgICAgIGFjdGl2ZS1jbGFzcz1cInRleHQtcHJpbWFyeVwiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj4gPHEtaWNvbiA6bmFtZT1cIm1lbnUuaWNvblwiIHNpemU9XCJzbVwiIC8+PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1mb290ZXI+XG5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIHYtaWY9XCIhKCRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMpXCJcbiAgICAgIHYtbW9kZWw9XCJ0cnVcIlxuICAgICAgc2hvdy1pZi1hYm92ZVxuICAgICAgOm1pbmk9XCJsZWZ0RHJhd2VyT3BlblwiXG4gICAgICA6YnJlYWtwb2ludD1cIjBcIlxuICAgICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBiZy1zZWNvbmRhcnlEYCA6IGBiZy1zZWNvbmRhcnlgXCJcbiAgICA+XG4gICAgICA8RXNzZW50aWFsTGlua1xuICAgICAgICB2LWZvcj1cImxpbmsgaW4gZXNzZW50aWFsTGlua3NcIlxuICAgICAgICA6a2V5PVwibGluay50aXRsZVwiXG4gICAgICAgIHYtYmluZD1cImxpbmtcIlxuICAgICAgLz5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICA8cm91dGVyLXZpZXdcbiAgICAgICAgQHNldFRpdGxlPVwic2V0VGl0bGVcIlxuICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmstcGFnZWAgOiBgYmctbGlnaHQtcGFnZWBcIlxuICAgICAgICBzdHlsZT1cIm92ZXJmbG93LXk6IGF1dG9cIlxuICAgICAgLz5cbiAgICA8L3EtcGFnZS1jb250YWluZXI+XG4gIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEVzc2VudGlhbExpbmsgZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFpbkxheW91dC9Fc3NlbnRpYWxMaW5rLnZ1ZSc7XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgdXNlTWV0YSB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBzdG9yZUdldCwgc3RvcmVTZXQgfSBmcm9tICdzcmMvYm9vdC9TdG9yZVN0dWZmJztcblxuY29uc3QgbGlua3NMaXN0ID0gW1xuICB7XG4gICAgdGl0bGU6ICdMaWJyYXJ5JyxcbiAgICBjYXB0aW9uOiAnJyxcbiAgICBpY29uOiAnb19jb2xsZWN0aW9uc19ib29rbWFyaycsXG4gICAgbGluazogJy9saWJyYXJ5P3RhYj0wJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdVcGRhdGVzJyxcbiAgICBjYXB0aW9uOiAnJyxcbiAgICBpY29uOiAnb19uZXdfcmVsZWFzZXMnLFxuICAgIGxpbms6ICcvdXBkYXRlcydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRXh0ZW5zaW9ucycsXG4gICAgY2FwdGlvbjogJycsXG4gICAgaWNvbjogJ29fZXh0ZW5zaW9uJyxcbiAgICBsaW5rOiAnL2V4dGVuc2lvbnMnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NvdXJjZXMnLFxuICAgIGNhcHRpb246ICcnLFxuICAgIGljb246ICdvX2V4cGxvcmUnLFxuICAgIGxpbms6ICcvc291cmNlcydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRG93bmxvYWRzJyxcbiAgICBjYXB0aW9uOiAnJyxcbiAgICBpY29uOiAnb19kb3dubG9hZCcsXG4gICAgbGluazogJy9kb3dubG9hZHMnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NldHRpbmdzJyxcbiAgICBjYXB0aW9uOiAnJyxcbiAgICBpY29uOiAnc2V0dGluZ3MnLFxuICAgIGxpbms6ICcvc2V0dGluZ3MnXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYWluTGF5b3V0JyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgRXNzZW50aWFsTGlua1xuICB9LFxuICB3YXRjaDoge1xuICAgIHNjcm9sbGJhclRoZW1lKG5ld3csIG9sZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKG9sZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmV3dyk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2V0VGl0bGUodGl0bDogc3RyaW5nKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bDtcbiAgICB9LFxuICAgIG1pbmltaXplKCkge1xuICAgICAgaWYgKHRoaXMuJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAgICAgd2luZG93Lm15V2luZG93QVBJLm1pbmltaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVNYXhpbWl6ZSgpIHtcbiAgICAgIGlmICh0aGlzLiRxLnBsYXRmb3JtLmlzLmVsZWN0cm9uKSB7XG4gICAgICAgIHdpbmRvdy5teVdpbmRvd0FQSS50b2dnbGVNYXhpbWl6ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VBcHAoKSB7XG4gICAgICBpZiAodGhpcy4kcS5wbGF0Zm9ybS5pcy5lbGVjdHJvbikge1xuICAgICAgICB3aW5kb3cubXlXaW5kb3dBUEkuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRlMoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICB0aGlzLkZTID0gZXZlbnQuZGV0YWlsO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzY3JvbGxiYXJUaGVtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuJHEuZGFyay5pc0FjdGl2ZSA/ICdkYXJrU0InIDogJ2xpZ2h0U0InO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxiYXJUaGVtZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGwtc2NyZWVuJywgKGUpID0+IHRoaXMuaXNGUyhlIGFzIEN1c3RvbUV2ZW50KSk7XG4gIH0sXG4gIHVubW91bnRlZCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zY3JvbGxiYXJUaGVtZSk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gICAgY29uc3QgdGl0bGUgPSByZWYoJ1F1YXNhciBBcHAnKTtcbiAgICB1c2VNZXRhKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aXRsZS52YWx1ZSxcbiAgICAgICAgdGl0bGVUZW1wbGF0ZTogKHRpdGxlKSA9PiBgJHt0aXRsZX0gLSBUYWNoaWRlc2sgUXVhc2FyYFxuICAgICAgfTtcbiAgICB9KTtcbiAgICAkcS5kYXJrLnNldCg8Ym9vbGVhbj5zdG9yZUdldCgnZGFyaycsIHRydWUpKTtcbiAgICBjb25zdCBsZWZ0RHJhd2VyT3BlbiA9IHJlZih0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBlc3NlbnRpYWxMaW5rczogbGlua3NMaXN0LFxuICAgICAgdHJ1OiByZWYodHJ1ZSksXG4gICAgICBsZWZ0RHJhd2VyT3BlbixcbiAgICAgIHRvZ2dsZWRhcmsoKSB7XG4gICAgICAgICRxLmRhcmsudG9nZ2xlKCk7XG4gICAgICAgIHN0b3JlU2V0KCdkYXJrJywgJHEuZGFyay5pc0FjdGl2ZSwgdHJ1ZSk7XG4gICAgICB9LFxuICAgICAgZG9TZWFyY2g6IHJlZihmYWxzZSksXG4gICAgICBTZWFyY2hlbnRlcjogcmVmKGZhbHNlKSxcbiAgICAgIEZTOiByZWYoZmFsc2UpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJvZmZzZXQiLCJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwidGl0bGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfbWVyZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQUEsZ0JBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwrQkFDRyxNQUFNLFdBQVcsT0FBTyxnQkFBZ0I7QUFBQSxJQUM1QztBQUVELFdBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLFFBQVEsTUFBSyxHQUFJLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUNyRTtBQUNILENBQUM7QUNmRCxJQUFBLFdBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FB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
