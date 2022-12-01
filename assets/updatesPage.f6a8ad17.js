import { u as useDarkProps, a as useDark } from "./use-dark.97ac6897.js";
import { c as createComponent, h as hSlot } from "./QSpinner.dc7e097a.js";
import { c as computed, h, g as getCurrentInstance, d as defineComponent, r as ref, _ as _export_sfc, B as withDirectives, f as openBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, ai as withModifiers, n as createCommentVNode, s as resolveComponent, v as createElementBlock, x as renderList, F as Fragment, u as createBaseVNode } from "./index.c15e704f.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.66687690.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { Q as QCard } from "./QCard.a457d3f1.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.d15024d7.js";
import { Q as QPage } from "./QPage.2a653745.js";
import { R as Ripple } from "./Ripple.a0364732.js";
import { Q as QInnerLoading } from "./QInnerLoading.5b5d73c7.js";
import { g as getImgBlob, Q as QImg } from "./usefull.6349588e.js";
import { Q as QBtn } from "./QBtn.fa53f47e.js";
import { storeGet } from "./StoreStuff.9c9e2ee5.js";
import "./dom.617e2098.js";
import "./scroll.d31d6ae2.js";
import "./use-transition.db025f57.js";
import "./fetcher.10190d88.js";
import "./QIcon.25655771.js";
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
      await this.$fetch(
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
      const update = await this.$fetchJSON(
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
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
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
var updatesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "updatesPage.vue"]]);
export { updatesPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlc1BhZ2UuZjZhOGFkMTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2tlbGV0b24vUVNrZWxldG9uLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdXBkYXRlcy91cGRhdGVjYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy91cGRhdGVzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25UeXBlcyA9IFtcbiAgJ3RleHQnLCAncmVjdCcsICdjaXJjbGUnLFxuICAnUUJ0bicsICdRQmFkZ2UnLCAnUUNoaXAnLCAnUVRvb2xiYXInLFxuICAnUUNoZWNrYm94JywgJ1FSYWRpbycsICdRVG9nZ2xlJyxcbiAgJ1FTbGlkZXInLCAnUVJhbmdlJywgJ1FJbnB1dCcsXG4gICdRQXZhdGFyJ1xuXVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25BbmltYXRpb25zID0gW1xuICAnd2F2ZScsICdwdWxzZScsICdwdWxzZS14JywgJ3B1bHNlLXknLCAnZmFkZScsICdibGluaycsICdub25lJ1xuXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNrZWxldG9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNrZWxldG9uVHlwZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAncmVjdCdcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2tlbGV0b25BbmltYXRpb25zLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3dhdmUnXG4gICAgfSxcbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTUwMFxuICAgIH0sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgICBzaXplOiBTdHJpbmcsXG4gICAgd2lkdGg6IFN0cmluZyxcbiAgICBoZWlnaHQ6IFN0cmluZ1xuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0gcHJvcHMuc2l6ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gWyBwcm9wcy5zaXplLCBwcm9wcy5zaXplIF1cbiAgICAgICAgOiBbIHByb3BzLndpZHRoLCBwcm9wcy5oZWlnaHQgXVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnLS1xLXNrZWxldG9uLXNwZWVkJzogYCR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tc2AsXG4gICAgICAgIHdpZHRoOiBzaXplWyAwIF0sXG4gICAgICAgIGhlaWdodDogc2l6ZVsgMSBdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2tlbGV0b24gcS1za2VsZXRvbi0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9IHEtc2tlbGV0b24tLXR5cGUtJHsgcHJvcHMudHlwZSB9YFxuICAgICAgKyAocHJvcHMuYW5pbWF0aW9uICE9PSAnbm9uZScgPyBgIHEtc2tlbGV0b24tLWFuaW0gcS1za2VsZXRvbi0tYW5pbS0keyBwcm9wcy5hbmltYXRpb24gfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1za2VsZXRvbi0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtc2tlbGV0b24tLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKHByb3BzLnRhZywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGNsaWNrYWJsZSB2LXJpcHBsZSBjbGFzcz1cInEtcGEteHMgcS1tYS1zbVwiPlxuICAgIDxxLWl0ZW0gOnRvPVwiYC9tYW5nYS9gICsgaXRlbS5tYW5nYS5pZFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGNvbC0xXCJcbiAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICA6c2hvd2luZz1cIiFpbWdkYXRhXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5tYW5nYS50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgaXRlbS5jaGFwdGVyLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1idG5cbiAgICAgICAgdi1pZj1cIiFpdGVtLmNoYXB0ZXIuZG93bmxvYWRlZFwiXG4gICAgICAgIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWQoaXRlbSlcIlxuICAgICAgICByb3VuZFxuICAgICAgICBzdHlsZT1cImhlaWdodDogZml0LWNvbnRlbnRcIlxuICAgICAgICBmbGF0XG4gICAgICAgIGljb249XCJkb3dubG9hZFwiXG4gICAgICAgIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiXG4gICAgICA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZUdldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNoYXB0ZXIsIG1hbmdhIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnLi4vZ2xvYmFsL3VzZWZ1bGwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnVXBkYXRlQ2FyZCcsXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH0+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBkb3dubG9hZChpdGVtOiB7IG1hbmdhOiBtYW5nYTsgY2hhcHRlcjogY2hhcHRlciB9KSB7XG4gICAgICBhd2FpdCB0aGlzLiRmZXRjaChcbiAgICAgICAgYC9hcGkvdjEvZG93bmxvYWQvJHtpdGVtLm1hbmdhLmlkfS9jaGFwdGVyLyR7aXRlbS5jaGFwdGVyLmluZGV4fWBcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgZ2V0SW1nQmxvYihcbiAgICAgIHRoaXMuaXRlbS5tYW5nYS50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlXG4gICAgKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgfSk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKGAke3N0b3JlR2V0KCd1c2VDYWNoZScsIHRydWUpfWApO1xuICAgIHJldHVybiB7IHVzZUNhY2hlLCBpbWdkYXRhIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtaW5maW5pdGUtc2Nyb2xsXG4gICAgICBAbG9hZD1cIm9uTG9hZFwiXG4gICAgICA6b2Zmc2V0PVwiJHEuc2NyZWVuLmhlaWdodFwiXG4gICAgICByZWY9XCJpbmZpbml0ZVNjcm9sXCJcbiAgICA+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB1cGRhdGVzXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDxVcGRhdGVDYXJkIDppdGVtPVwiaXRlbVwiPjwvVXBkYXRlQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKF8sIGluZGV4KSBpbiA2XCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgPHEtY2FyZCBjbGlja2FibGUgdi1yaXBwbGUgY2xhc3M9XCJxLXBhLXhzIHEtbWEtc21cIj5cbiAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtc2tlbGV0b25cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjkzcHhcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDkzcHg7IGFzcGVjdC1yYXRpbzogMjI1LzM1MFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+PHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj48cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIC8+PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiIHR5cGU9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBRSW5maW5pdGVTY3JvbGwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY2hhcHRlciwgbWFuZ2EgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBVcGRhdGVDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL3VwZGF0ZXMvdXBkYXRlY2FyZC52dWUnO1xuXG5pbnRlcmZhY2UgdXBkYXRlc3JlcSB7XG4gIGhhc05leHRQYWdlOiBib29sZWFuO1xuICBwYWdlOiB7IG1hbmdhOiBtYW5nYTsgY2hhcHRlcjogY2hhcHRlciB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICd1cGRhdGVzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgVXBkYXRlQ2FyZCB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZTogdXBkYXRlc3JlcSA9IGF3YWl0IHRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgYC9hcGkvdjEvdXBkYXRlL3JlY2VudENoYXB0ZXJzLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICAgIGlmICghdXBkYXRlLmhhc05leHRQYWdlKVxuICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuc3RvcCgpO1xuICAgICAgdGhpcy51cGRhdGVzLnB1c2goLi4udXBkYXRlLnBhZ2UpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ1VwZGF0ZXMnKTtcbiAgICByZXR1cm4geyB1cGRhdGVzOiByZWYoPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH1bXT5bXSkgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhNb2RpZmllcnMiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9PLE1BQU0sZ0JBQWdCO0FBQUEsRUFDM0I7QUFBQSxFQUFRO0FBQUEsRUFBUTtBQUFBLEVBQ2hCO0FBQUEsRUFBUTtBQUFBLEVBQVU7QUFBQSxFQUFTO0FBQUEsRUFDM0I7QUFBQSxFQUFhO0FBQUEsRUFBVTtBQUFBLEVBQ3ZCO0FBQUEsRUFBVztBQUFBLEVBQVU7QUFBQSxFQUNyQjtBQUNGO0FBRU8sTUFBTSxxQkFBcUI7QUFBQSxFQUNoQztBQUFBLEVBQVE7QUFBQSxFQUFTO0FBQUEsRUFBVztBQUFBLEVBQVc7QUFBQSxFQUFRO0FBQUEsRUFBUztBQUMxRDtBQUVBLElBQUEsWUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sV0FBVyxPQUFLLGNBQWMsU0FBUyxDQUFDO0FBQUEsTUFDeEMsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFdBQVcsT0FBSyxtQkFBbUIsU0FBUyxDQUFDO0FBQUEsTUFDN0MsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELGdCQUFnQjtBQUFBLE1BQ2QsTUFBTSxDQUFFLFFBQVEsTUFBUTtBQUFBLE1BQ3hCLFNBQVM7QUFBQSxJQUNW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
