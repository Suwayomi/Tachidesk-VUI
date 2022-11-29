import { u as useDarkProps, a as useDark } from "./use-dark.63b90c22.js";
import { c as createComponent, h as hSlot } from "./QSpinner.6511ee07.js";
import { c as computed, h, g as getCurrentInstance, f as defineComponent, r as ref, _ as _export_sfc, D as withDirectives, j as openBlock, k as createBlock, m as withCtx, n as createVNode, q as createTextVNode, t as toDisplayString, aj as withModifiers, p as createCommentVNode, u as resolveComponent, y as createElementBlock, z as renderList, F as Fragment, v as createBaseVNode } from "./index.75e4774b.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.07fdfe31.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { Q as QInnerLoading } from "./QInnerLoading.dc9c40c5.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { g as getImgBlob } from "./usefull.5da5779b.js";
import "./dom.3bfc77a6.js";
import "./scroll.51a1aea4.js";
import "./use-transition.34947ede.js";
import "./QIcon.aa032244.js";
import "./fetcher.d026f468.js";
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
    const $q = useQuasar();
    const useCache = ref(`${$q.localStorage.getItem("useCache")}`);
    return { useCache, imgdata };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock(QCard, {
    clickable: "",
    dark: _ctx.$q.dark.isActive,
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
  }, 8, ["dark"])), [
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
                dark: _ctx.$q.dark.isActive,
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
              }, 8, ["dark"])), [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlc1BhZ2UuMWE3OGJlNTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2tlbGV0b24vUVNrZWxldG9uLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdXBkYXRlcy91cGRhdGVjYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy91cGRhdGVzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25UeXBlcyA9IFtcbiAgJ3RleHQnLCAncmVjdCcsICdjaXJjbGUnLFxuICAnUUJ0bicsICdRQmFkZ2UnLCAnUUNoaXAnLCAnUVRvb2xiYXInLFxuICAnUUNoZWNrYm94JywgJ1FSYWRpbycsICdRVG9nZ2xlJyxcbiAgJ1FTbGlkZXInLCAnUVJhbmdlJywgJ1FJbnB1dCcsXG4gICdRQXZhdGFyJ1xuXVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25BbmltYXRpb25zID0gW1xuICAnd2F2ZScsICdwdWxzZScsICdwdWxzZS14JywgJ3B1bHNlLXknLCAnZmFkZScsICdibGluaycsICdub25lJ1xuXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNrZWxldG9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNrZWxldG9uVHlwZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAncmVjdCdcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2tlbGV0b25BbmltYXRpb25zLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3dhdmUnXG4gICAgfSxcbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTUwMFxuICAgIH0sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgICBzaXplOiBTdHJpbmcsXG4gICAgd2lkdGg6IFN0cmluZyxcbiAgICBoZWlnaHQ6IFN0cmluZ1xuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0gcHJvcHMuc2l6ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gWyBwcm9wcy5zaXplLCBwcm9wcy5zaXplIF1cbiAgICAgICAgOiBbIHByb3BzLndpZHRoLCBwcm9wcy5oZWlnaHQgXVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnLS1xLXNrZWxldG9uLXNwZWVkJzogYCR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tc2AsXG4gICAgICAgIHdpZHRoOiBzaXplWyAwIF0sXG4gICAgICAgIGhlaWdodDogc2l6ZVsgMSBdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2tlbGV0b24gcS1za2VsZXRvbi0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9IHEtc2tlbGV0b24tLXR5cGUtJHsgcHJvcHMudHlwZSB9YFxuICAgICAgKyAocHJvcHMuYW5pbWF0aW9uICE9PSAnbm9uZScgPyBgIHEtc2tlbGV0b24tLWFuaW0gcS1za2VsZXRvbi0tYW5pbS0keyBwcm9wcy5hbmltYXRpb24gfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1za2VsZXRvbi0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtc2tlbGV0b24tLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKHByb3BzLnRhZywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGNsaWNrYWJsZSB2LXJpcHBsZSA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIiBjbGFzcz1cInEtcGEteHMgcS1tYS1zbVwiPlxuICAgIDxxLWl0ZW0gOnRvPVwiYC9tYW5nYS9gICsgaXRlbS5tYW5nYS5pZFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGNvbC0xXCJcbiAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICA6c2hvd2luZz1cIiFpbWdkYXRhXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5tYW5nYS50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgaXRlbS5jaGFwdGVyLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1idG5cbiAgICAgICAgdi1pZj1cIiFpdGVtLmNoYXB0ZXIuZG93bmxvYWRlZFwiXG4gICAgICAgIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWQoaXRlbSlcIlxuICAgICAgICByb3VuZFxuICAgICAgICBzdHlsZT1cImhlaWdodDogZml0LWNvbnRlbnRcIlxuICAgICAgICBmbGF0XG4gICAgICAgIGljb249XCJkb3dubG9hZFwiXG4gICAgICAgIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiXG4gICAgICA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNoYXB0ZXIsIG1hbmdhIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnLi4vZ2xvYmFsL3VzZWZ1bGwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnVXBkYXRlQ2FyZCcsXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH0+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBkb3dubG9hZChpdGVtOiB7IG1hbmdhOiBtYW5nYTsgY2hhcHRlcjogY2hhcHRlciB9KSB7XG4gICAgICBhd2FpdCB0aGlzLiRmZXRjaChcbiAgICAgICAgYC9hcGkvdjEvZG93bmxvYWQvJHtpdGVtLm1hbmdhLmlkfS9jaGFwdGVyLyR7aXRlbS5jaGFwdGVyLmluZGV4fWBcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgZ2V0SW1nQmxvYihcbiAgICAgIHRoaXMuaXRlbS5tYW5nYS50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlXG4gICAgKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgfSk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7JHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZUNhY2hlJyl9YCk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8cS1pbmZpbml0ZS1zY3JvbGxcbiAgICAgIEBsb2FkPVwib25Mb2FkXCJcbiAgICAgIDpvZmZzZXQ9XCIkcS5zY3JlZW4uaGVpZ2h0XCJcbiAgICAgIHJlZj1cImluZmluaXRlU2Nyb2xcIlxuICAgID5cbiAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHVwZGF0ZXNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPFVwZGF0ZUNhcmQgOml0ZW09XCJpdGVtXCI+PC9VcGRhdGVDYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgIDxkaXYgdi1mb3I9XCIoXywgaW5kZXgpIGluIDZcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLXBhLXhzIHEtbWEtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtc2tlbGV0b25cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjkzcHhcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDkzcHg7IGFzcGVjdC1yYXRpbzogMjI1LzM1MFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+PHEtc2tlbGV0b24gdHlwZT1cInRleHRcIiAvPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj48cS1za2VsZXRvbiB0eXBlPVwidGV4dFwiIC8+PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIGNsYXNzPVwiZmxleC1yaWdodCBzZWxmLWNlbnRlclwiIHR5cGU9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBRSW5maW5pdGVTY3JvbGwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY2hhcHRlciwgbWFuZ2EgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBVcGRhdGVDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL3VwZGF0ZXMvdXBkYXRlY2FyZC52dWUnO1xuXG5pbnRlcmZhY2UgdXBkYXRlc3JlcSB7XG4gIGhhc05leHRQYWdlOiBib29sZWFuO1xuICBwYWdlOiB7IG1hbmdhOiBtYW5nYTsgY2hhcHRlcjogY2hhcHRlciB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICd1cGRhdGVzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgVXBkYXRlQ2FyZCB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZTogdXBkYXRlc3JlcSA9IGF3YWl0IHRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgYC9hcGkvdjEvdXBkYXRlL3JlY2VudENoYXB0ZXJzLyR7aW5kZXh9YFxuICAgICAgKTtcbiAgICAgIGlmICghdXBkYXRlLmhhc05leHRQYWdlKVxuICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuc3RvcCgpO1xuICAgICAgdGhpcy51cGRhdGVzLnB1c2goLi4udXBkYXRlLnBhZ2UpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ1VwZGF0ZXMnKTtcbiAgICByZXR1cm4geyB1cGRhdGVzOiByZWYoPHsgbWFuZ2E6IG1hbmdhOyBjaGFwdGVyOiBjaGFwdGVyIH1bXT5bXSkgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhNb2RpZmllcnMiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPTyxNQUFNLGdCQUFnQjtBQUFBLEVBQzNCO0FBQUEsRUFBUTtBQUFBLEVBQVE7QUFBQSxFQUNoQjtBQUFBLEVBQVE7QUFBQSxFQUFVO0FBQUEsRUFBUztBQUFBLEVBQzNCO0FBQUEsRUFBYTtBQUFBLEVBQVU7QUFBQSxFQUN2QjtBQUFBLEVBQVc7QUFBQSxFQUFVO0FBQUEsRUFDckI7QUFDRjtBQUVPLE1BQU0scUJBQXFCO0FBQUEsRUFDaEM7QUFBQSxFQUFRO0FBQUEsRUFBUztBQUFBLEVBQVc7QUFBQSxFQUFXO0FBQUEsRUFBUTtBQUFBLEVBQVM7QUFDMUQ7QUFFQSxJQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFdBQVcsT0FBSyxjQUFjLFNBQVMsQ0FBQztBQUFBLE1BQ3hDLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxXQUFXO0FBQUEs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
