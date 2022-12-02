import { u as useDarkProps, a as useDark } from "./use-dark.1adac86a.js";
import { c as createComponent, h as hSlot } from "./QSpinner.7d14a7f2.js";
import { c as computed, h, g as getCurrentInstance, d as defineComponent, r as ref, _ as _export_sfc, B as withDirectives, f as openBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, ai as withModifiers, n as createCommentVNode, s as resolveComponent, v as createElementBlock, x as renderList, F as Fragment, u as createBaseVNode } from "./index.5cc93081.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.f373f416.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.065d6888.js";
import { Q as QPage } from "./QPage.8c90446c.js";
import { R as Ripple } from "./Ripple.3a8ac2e1.js";
import { Q as QInnerLoading } from "./QInnerLoading.480505c0.js";
import { g as getImgBlob, Q as QImg } from "./usefull.8778cf5c.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { storeGet } from "./StoreStuff.45ae8e68.js";
import "./dom.e2e78a08.js";
import "./scroll.b1151d01.js";
import "./use-transition.651acf9e.js";
import "./axios.01f4fb44.js";
import "./QIcon.129c8e27.js";
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
  methods: {
    async download(item) {
      await this.$api.get(
        `/api/v1/download/${item.manga.id}/chapter/${item.chapter.index}`
      );
    }
  },
  mounted: function() {
    getImgBlob(
      this.item.manga.thumbnailUrl + "?useCache=" + this.useCache
    ).then((value) => {
      this.imgdata = value;
    });
  },
  setup() {
    const imgdata = ref("");
    const useCache = ref(`${storeGet("useCache", true)}`);
    return { useCache, imgdata };
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
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.download(_ctx.item), ["prevent"])),
            round: "",
            style: { "height": "fit-content" },
            flat: "",
            icon: "download",
            class: "flex-right self-center"
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
  name: "updatesPage",
  components: { UpdateCard },
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
  },
  setup(_props, { emit }) {
    emit("setTitle", "Updates");
    return { updates: ref([]) };
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
        onLoad: _ctx.onLoad,
        offset: _ctx.$q.screen.height,
        ref: "infiniteScrol"
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
      }, 8, ["onLoad", "offset"])
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var updatesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-456c7e9b"], ["__file", "updatesPage.vue"]]);
export { updatesPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlc1BhZ2UuZGZhNTc1NWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2tlbGV0b24vUVNrZWxldG9uLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdXBkYXRlcy91cGRhdGVjYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy91cGRhdGVzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25UeXBlcyA9IFtcbiAgJ3RleHQnLCAncmVjdCcsICdjaXJjbGUnLFxuICAnUUJ0bicsICdRQmFkZ2UnLCAnUUNoaXAnLCAnUVRvb2xiYXInLFxuICAnUUNoZWNrYm94JywgJ1FSYWRpbycsICdRVG9nZ2xlJyxcbiAgJ1FTbGlkZXInLCAnUVJhbmdlJywgJ1FJbnB1dCcsXG4gICdRQXZhdGFyJ1xuXVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25BbmltYXRpb25zID0gW1xuICAnd2F2ZScsICdwdWxzZScsICdwdWxzZS14JywgJ3B1bHNlLXknLCAnZmFkZScsICdibGluaycsICdub25lJ1xuXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNrZWxldG9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNrZWxldG9uVHlwZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAncmVjdCdcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2tlbGV0b25BbmltYXRpb25zLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3dhdmUnXG4gICAgfSxcbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTUwMFxuICAgIH0sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgICBzaXplOiBTdHJpbmcsXG4gICAgd2lkdGg6IFN0cmluZyxcbiAgICBoZWlnaHQ6IFN0cmluZ1xuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0gcHJvcHMuc2l6ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gWyBwcm9wcy5zaXplLCBwcm9wcy5zaXplIF1cbiAgICAgICAgOiBbIHByb3BzLndpZHRoLCBwcm9wcy5oZWlnaHQgXVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnLS1xLXNrZWxldG9uLXNwZWVkJzogYCR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tc2AsXG4gICAgICAgIHdpZHRoOiBzaXplWyAwIF0sXG4gICAgICAgIGhlaWdodDogc2l6ZVsgMSBdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2tlbGV0b24gcS1za2VsZXRvbi0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9IHEtc2tlbGV0b24tLXR5cGUtJHsgcHJvcHMudHlwZSB9YFxuICAgICAgKyAocHJvcHMuYW5pbWF0aW9uICE9PSAnbm9uZScgPyBgIHEtc2tlbGV0b24tLWFuaW0gcS1za2VsZXRvbi0tYW5pbS0keyBwcm9wcy5hbmltYXRpb24gfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1za2VsZXRvbi0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtc2tlbGV0b24tLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKHByb3BzLnRhZywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGNsaWNrYWJsZSB2LXJpcHBsZSBjbGFzcz1cInEtcGEteHMgcS1tYS1zbVwiPlxuICAgIDxxLWl0ZW0gOnRvPVwiYC9tYW5nYS9gICsgaXRlbS5tYW5nYS5pZFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGNvbC0xXCJcbiAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICA6c2hvd2luZz1cIiFpbWdkYXRhXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5tYW5nYS50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgaXRlbS5jaGFwdGVyLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1idG5cbiAgICAgICAgdi1pZj1cIiFpdGVtLmNoYXB0ZXIuZG93bmxvYWRlZFwiXG4gICAgICAgIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWQoaXRlbSlcIlxuICAgICAgICByb3VuZFxuICAgICAgICBzdHlsZT1cImhlaWdodDogZml0LWNvbnRlbnRcIlxuICAgICAgICBmbGF0XG4gICAgICAgIGljb249XCJkb3dubG9hZFwiXG4gICAgICAgIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiXG4gICAgICA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZUdldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNoYXB0ZXIsIG1hbmdhIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnLi4vZ2xvYmFsL3VzZWZ1bGwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnVXBkYXRlQ2FyZCcsXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH0+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBkb3dubG9hZChpdGVtOiB7IG1hbmdhOiBtYW5nYTsgY2hhcHRlcjogY2hhcHRlciB9KSB7XG4gICAgICBhd2FpdCB0aGlzLiRhcGkuZ2V0KFxuICAgICAgICBgL2FwaS92MS9kb3dubG9hZC8ke2l0ZW0ubWFuZ2EuaWR9L2NoYXB0ZXIvJHtpdGVtLmNoYXB0ZXIuaW5kZXh9YFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBnZXRJbWdCbG9iKFxuICAgICAgdGhpcy5pdGVtLm1hbmdhLnRodW1ibmFpbFVybCArICc/dXNlQ2FjaGU9JyArIHRoaXMudXNlQ2FjaGVcbiAgICApLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7c3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSl9YCk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIiBjbGFzcz1cIm5vdE9mbG93XCI+XG4gICAgPHEtaW5maW5pdGUtc2Nyb2xsXG4gICAgICBAbG9hZD1cIm9uTG9hZFwiXG4gICAgICA6b2Zmc2V0PVwiJHEuc2NyZWVuLmhlaWdodFwiXG4gICAgICByZWY9XCJpbmZpbml0ZVNjcm9sXCJcbiAgICA+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB1cGRhdGVzXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDxVcGRhdGVDYXJkIDppdGVtPVwiaXRlbVwiPjwvVXBkYXRlQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKF8sIGluZGV4KSBpbiA2XCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgPHEtY2FyZCBjbGlja2FibGUgdi1yaXBwbGUgY2xhc3M9XCJxLXBhLXhzIHEtbWEtc21cIj5cbiAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtc2tlbGV0b25cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjkzcHhcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDkzcHg7IGFzcGVjdC1yYXRpbzogMjI1LzM1MFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+PHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj48cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIC8+PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiIHR5cGU9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBRSW5maW5pdGVTY3JvbGwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY2hhcHRlciwgbWFuZ2EgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBVcGRhdGVDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL3VwZGF0ZXMvdXBkYXRlY2FyZC52dWUnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuaW50ZXJmYWNlIHVwZGF0ZXNyZXEge1xuICBoYXNOZXh0UGFnZTogYm9vbGVhbjtcbiAgcGFnZTogeyBtYW5nYTogbWFuZ2E7IGNoYXB0ZXI6IGNoYXB0ZXIgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAndXBkYXRlc1BhZ2UnLFxuICBjb21wb25lbnRzOiB7IFVwZGF0ZUNhcmQgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jIG9uTG9hZChpbmRleDogbnVtYmVyLCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICBjb25zdCB7IGRhdGE6IHVwZGF0ZSB9OiBBeGlvc1Jlc3BvbnNlPHVwZGF0ZXNyZXE+ID0gYXdhaXQgdGhpcy4kYXBpLmdldChcbiAgICAgICAgYC9hcGkvdjEvdXBkYXRlL3JlY2VudENoYXB0ZXJzLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICAgIGlmICghdXBkYXRlLmhhc05leHRQYWdlKVxuICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuc3RvcCgpO1xuICAgICAgdGhpcy51cGRhdGVzLnB1c2goLi4udXBkYXRlLnBhZ2UpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ1VwZGF0ZXMnKTtcbiAgICByZXR1cm4geyB1cGRhdGVzOiByZWYoPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH1bXT5bXSkgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuLk9GbG93Lm5vdE9mbG93XG4gIG92ZXJmbG93LXk6IHVuc2V0XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aE1vZGlmaWVycyIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl93aXRoRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT08sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQjtBQUFBLEVBQVE7QUFBQSxFQUFRO0FBQUEsRUFDaEI7QUFBQSxFQUFRO0FBQUEsRUFBVTtBQUFBLEVBQVM7QUFBQSxFQUMzQjtBQUFBLEVBQWE7QUFBQSxFQUFVO0FBQUEsRUFDdkI7QUFBQSxFQUFXO0FBQUEsRUFBVTtBQUFBLEVBQ3JCO0FBQ0Y7QUFFTyxNQUFNLHFCQUFxQjtBQUFBLEVBQ2hDO0FBQUEsRUFBUTtBQUFBLEVBQVM7QUFBQSxFQUFXO0FBQUEsRUFBVztBQUFBLEVBQVE7QUFBQSxFQUFTO0FBQzFEO0FBRUEsSUFBQSxZQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixXQUFXLE9BQUssY0FBYyxTQUFTLENBQUM7QUFBQSxNQUN4QyxTQUFTO0FBQUEsSUFDVjtB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
