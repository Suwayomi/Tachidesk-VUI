import { u as useDarkProps, a as useDark } from "./use-dark.bc291eea.js";
import { c as createComponent, h as hSlot } from "./QSpinner.0d412098.js";
import { c as computed, h, g as getCurrentInstance, d as defineComponent, r as ref, _ as _export_sfc, B as withDirectives, f as openBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, ai as withModifiers, n as createCommentVNode, s as resolveComponent, v as createElementBlock, x as renderList, F as Fragment, u as createBaseVNode } from "./index.0b61810d.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.13aea2ff.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { Q as QInnerLoading } from "./QInnerLoading.b3499eb2.js";
import { g as getImgBlob, Q as QImg } from "./usefull.0f9a3edc.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { storeGet } from "./StoreStuff.f5900537.js";
import "./dom.fd94eb85.js";
import "./scroll.34fac392.js";
import "./use-transition.65db8379.js";
import "./axios.a87bcd6c.js";
import "./QIcon.8780f7dc.js";
const skeletonTypes = [
  "text",
  "rect",
  "circle",
  "QBtn",
  "QBadge",
  "QChip",
  "QToolbar",
  "QCheckbox",
  "QRadio",
  "QToggle",
  "QSlider",
  "QRange",
  "QInput",
  "QAvatar"
];
const skeletonAnimations = [
  "wave",
  "pulse",
  "pulse-x",
  "pulse-y",
  "fade",
  "blink",
  "none"
];
var QSkeleton = createComponent({
  name: "QSkeleton",
  props: {
    ...useDarkProps,
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      validator: (v) => skeletonTypes.includes(v),
      default: "rect"
    },
    animation: {
      type: String,
      validator: (v) => skeletonAnimations.includes(v),
      default: "wave"
    },
    animationSpeed: {
      type: [String, Number],
      default: 1500
    },
    square: Boolean,
    bordered: Boolean,
    size: String,
    width: String,
    height: String
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const style = computed(() => {
      const size = props.size !== void 0 ? [props.size, props.size] : [props.width, props.height];
      return {
        "--q-skeleton-speed": `${props.animationSpeed}ms`,
        width: size[0],
        height: size[1]
      };
    });
    const classes = computed(
      () => `q-skeleton q-skeleton--${isDark.value === true ? "dark" : "light"} q-skeleton--type-${props.type}` + (props.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${props.animation}` : "") + (props.square === true ? " q-skeleton--square" : "") + (props.bordered === true ? " q-skeleton--bordered" : "")
    );
    return () => h(props.tag, {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
const _sfc_main$1 = defineComponent({
  name: "UpdateCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    const imgdata = ref("");
    const useCache = ref(`${storeGet("useCache", true)}`);
    return { useCache, imgdata };
  },
  mounted: function() {
    getImgBlob(
      this.item.manga.thumbnailUrl + "?useCache=" + this.useCache
    ).then((value) => {
      this.imgdata = value;
    });
  },
  methods: {
    async download(item) {
      await this.$api.get(
        `/api/v1/download/${item.manga.id}/chapter/${item.chapter.index}`
      );
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock(QCard, {
    clickable: "",
    class: "q-pa-xs q-ma-sm"
  }, {
    default: withCtx(() => [
      createVNode(QItem, {
        to: `/manga/` + _ctx.item.manga.id
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QImg, {
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
                    color: "primary",
                    style: { "padding": "0" }
                  }, null, 8, ["showing"])
                ]),
                _: 1
              }, 8, ["src"])
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.item.manga.title), 1)
                ]),
                _: 1
              }),
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.item.chapter.name), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          !_ctx.item.chapter.downloaded ? (openBlock(), createBlock(QBtn, {
            key: 0,
            round: "",
            style: { "height": "fit-content" },
            flat: "",
            icon: "download",
            class: "flex-right self-center",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.download(_ctx.item), ["prevent"]))
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    _: 1
  })), [
    [Ripple]
  ]);
}
var UpdateCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "updatecard.vue"]]);
var updatesPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "UpdatesPage",
  components: { UpdateCard },
  emits: ["set-title"],
  setup(_props, { emit }) {
    emit("set-title", "Updates");
    return { updates: ref([]) };
  },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    async onLoad(index, done) {
      const { data: update } = await this.$api.get(
        `/api/v1/update/recentChapters/${index}`
      );
      if (!update.hasNextPage)
        this.$refs["infiniteScrol"].stop();
      this.updates.push(...update.page);
      done();
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UpdateCard = resolveComponent("UpdateCard");
  return openBlock(), createBlock(QPage, {
    "style-fn": _ctx.myTweak,
    class: "notOflow"
  }, {
    default: withCtx(() => [
      createVNode(QInfiniteScroll, {
        ref: "infiniteScrol",
        offset: _ctx.$q.screen.height,
        onLoad: _ctx.onLoad
      }, {
        loading: withCtx(() => [
          (openBlock(), createElementBlock(Fragment, null, renderList(6, (_, index) => {
            return createBaseVNode("div", { key: index }, [
              withDirectives((openBlock(), createBlock(QCard, {
                clickable: "",
                class: "q-pa-xs q-ma-sm"
              }, {
                default: withCtx(() => [
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QSkeleton, {
                            height: "93px",
                            style: { "height": "93px", "aspect-ratio": "225/350" }
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createVNode(QSkeleton, { type: "text" })
                            ]),
                            _: 1
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createVNode(QSkeleton, { type: "text" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QSkeleton, {
                        class: "flex-right self-center",
                        type: "circle"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })), [
                [Ripple]
              ])
            ]);
          }), 64))
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.updates, (item, index) => {
            return openBlock(), createElementBlock("div", { key: index }, [
              createVNode(_component_UpdateCard, { item }, null, 8, ["item"])
            ]);
          }), 128))
        ]),
        _: 1
      }, 8, ["offset", "onLoad"])
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var updatesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-67553d25"], ["__file", "updatesPage.vue"]]);
export { updatesPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlc1BhZ2UuYTlkODhiMTEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2tlbGV0b24vUVNrZWxldG9uLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdXBkYXRlcy91cGRhdGVjYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy91cGRhdGVzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25UeXBlcyA9IFtcbiAgJ3RleHQnLCAncmVjdCcsICdjaXJjbGUnLFxuICAnUUJ0bicsICdRQmFkZ2UnLCAnUUNoaXAnLCAnUVRvb2xiYXInLFxuICAnUUNoZWNrYm94JywgJ1FSYWRpbycsICdRVG9nZ2xlJyxcbiAgJ1FTbGlkZXInLCAnUVJhbmdlJywgJ1FJbnB1dCcsXG4gICdRQXZhdGFyJ1xuXVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25BbmltYXRpb25zID0gW1xuICAnd2F2ZScsICdwdWxzZScsICdwdWxzZS14JywgJ3B1bHNlLXknLCAnZmFkZScsICdibGluaycsICdub25lJ1xuXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNrZWxldG9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNrZWxldG9uVHlwZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAncmVjdCdcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2tlbGV0b25BbmltYXRpb25zLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3dhdmUnXG4gICAgfSxcbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTUwMFxuICAgIH0sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgICBzaXplOiBTdHJpbmcsXG4gICAgd2lkdGg6IFN0cmluZyxcbiAgICBoZWlnaHQ6IFN0cmluZ1xuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0gcHJvcHMuc2l6ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gWyBwcm9wcy5zaXplLCBwcm9wcy5zaXplIF1cbiAgICAgICAgOiBbIHByb3BzLndpZHRoLCBwcm9wcy5oZWlnaHQgXVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnLS1xLXNrZWxldG9uLXNwZWVkJzogYCR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tc2AsXG4gICAgICAgIHdpZHRoOiBzaXplWyAwIF0sXG4gICAgICAgIGhlaWdodDogc2l6ZVsgMSBdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2tlbGV0b24gcS1za2VsZXRvbi0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9IHEtc2tlbGV0b24tLXR5cGUtJHsgcHJvcHMudHlwZSB9YFxuICAgICAgKyAocHJvcHMuYW5pbWF0aW9uICE9PSAnbm9uZScgPyBgIHEtc2tlbGV0b24tLWFuaW0gcS1za2VsZXRvbi0tYW5pbS0keyBwcm9wcy5hbmltYXRpb24gfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1za2VsZXRvbi0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtc2tlbGV0b24tLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKHByb3BzLnRhZywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIHYtcmlwcGxlIGNsaWNrYWJsZSBjbGFzcz1cInEtcGEteHMgcS1tYS1zbVwiPlxuICAgIDxxLWl0ZW0gOnRvPVwiYC9tYW5nYS9gICsgaXRlbS5tYW5nYS5pZFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGNvbC0xXCJcbiAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICA6c2hvd2luZz1cIiFpbWdkYXRhXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5tYW5nYS50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgaXRlbS5jaGFwdGVyLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1idG5cbiAgICAgICAgdi1pZj1cIiFpdGVtLmNoYXB0ZXIuZG93bmxvYWRlZFwiXG4gICAgICAgIHJvdW5kXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiBmaXQtY29udGVudFwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgaWNvbj1cImRvd25sb2FkXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4LXJpZ2h0IHNlbGYtY2VudGVyXCJcbiAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJkb3dubG9hZChpdGVtKVwiXG4gICAgICA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZUdldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNoYXB0ZXIsIG1hbmdhIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnLi4vZ2xvYmFsL3VzZWZ1bGwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnVXBkYXRlQ2FyZCcsXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH0+LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7c3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSl9YCk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGdldEltZ0Jsb2IoXG4gICAgICB0aGlzLml0ZW0ubWFuZ2EudGh1bWJuYWlsVXJsICsgJz91c2VDYWNoZT0nICsgdGhpcy51c2VDYWNoZVxuICAgICkudGhlbigodmFsdWUpID0+IHtcbiAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZG93bmxvYWQoaXRlbTogeyBtYW5nYTogbWFuZ2E7IGNoYXB0ZXI6IGNoYXB0ZXIgfSkge1xuICAgICAgYXdhaXQgdGhpcy4kYXBpLmdldChcbiAgICAgICAgYC9hcGkvdjEvZG93bmxvYWQvJHtpdGVtLm1hbmdhLmlkfS9jaGFwdGVyLyR7aXRlbS5jaGFwdGVyLmluZGV4fWBcbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCIgY2xhc3M9XCJub3RPZmxvd1wiPlxuICAgIDxxLWluZmluaXRlLXNjcm9sbFxuICAgICAgcmVmPVwiaW5maW5pdGVTY3JvbFwiXG4gICAgICA6b2Zmc2V0PVwiJHEuc2NyZWVuLmhlaWdodFwiXG4gICAgICBAbG9hZD1cIm9uTG9hZFwiXG4gICAgPlxuICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdXBkYXRlc1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICA8VXBkYXRlQ2FyZCA6aXRlbT1cIml0ZW1cIj48L1VwZGF0ZUNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihfLCBpbmRleCkgaW4gNlwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgIDxxLWNhcmQgdi1yaXBwbGUgY2xpY2thYmxlIGNsYXNzPVwicS1wYS14cyBxLW1hLXNtXCI+XG4gICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxxLXNrZWxldG9uXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI5M3B4XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPjxxLXNrZWxldG9uIHR5cGU9XCJ0ZXh0XCIgLz48L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+PHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1za2VsZXRvbiBjbGFzcz1cImZsZXgtcmlnaHQgc2VsZi1jZW50ZXJcIiB0eXBlPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgUUluZmluaXRlU2Nyb2xsIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNoYXB0ZXIsIG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVXBkYXRlQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy91cGRhdGVzL3VwZGF0ZWNhcmQudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSB1cGRhdGVzcmVxIHtcbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW47XG4gIHBhZ2U6IHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH1bXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1VwZGF0ZXNQYWdlJyxcbiAgY29tcG9uZW50czogeyBVcGRhdGVDYXJkIH0sXG4gIGVtaXRzOiBbJ3NldC10aXRsZSddLFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0LXRpdGxlJywgJ1VwZGF0ZXMnKTtcbiAgICByZXR1cm4geyB1cGRhdGVzOiByZWYoPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH1bXT5bXSkgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJyxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luYyBvbkxvYWQoaW5kZXg6IG51bWJlciwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgY29uc3QgeyBkYXRhOiB1cGRhdGUgfTogQXhpb3NSZXNwb25zZTx1cGRhdGVzcmVxPiA9IGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgIGAvYXBpL3YxL3VwZGF0ZS9yZWNlbnRDaGFwdGVycy8ke2luZGV4fWBcbiAgICAgICk7XG4gICAgICBpZiAoIXVwZGF0ZS5oYXNOZXh0UGFnZSlcbiAgICAgICAgKHRoaXMuJHJlZnNbJ2luZmluaXRlU2Nyb2wnXSBhcyBRSW5maW5pdGVTY3JvbGwpLnN0b3AoKTtcbiAgICAgIHRoaXMudXBkYXRlcy5wdXNoKC4uLnVwZGF0ZS5wYWdlKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuLk9GbG93Lm5vdE9mbG93XG4gIG92ZXJmbG93LXk6IHVuc2V0XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aE1vZGlmaWVycyIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl93aXRoRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT08sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQjtBQUFBLEVBQVE7QUFBQSxFQUFRO0FBQUEsRUFDaEI7QUFBQSxFQUFRO0FBQUEsRUFBVTtBQUFBLEVBQVM7QUFBQSxFQUMzQjtBQUFBLEVBQWE7QUFBQSxFQUFVO0FBQUEsRUFDdkI7QUFBQSxFQUFXO0FBQUEsRUFBVTtBQUFBLEVBQ3JCO0FBQ0Y7QUFFTyxNQUFNLHFCQUFxQjtBQUFBLEVBQ2hDO0FBQUEsRUFBUTtBQUFBLEVBQVM7QUFBQSxFQUFXO0FBQUEsRUFBVztBQUFBLEVBQVE7QUFBQSxFQUFTO0FBQzFEO0FBRUEsSUFBQSxZQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixXQUFXLE9BQUssY0FBYyxTQUFTLENBQUM7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
