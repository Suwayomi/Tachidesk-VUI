import { Q as QIntersection } from "./QIntersection.c01880aa.js";
import { Q as QList } from "./QList.323c1084.js";
import { Q as QInnerLoading } from "./QInnerLoading.480505c0.js";
import { Q as QPage } from "./QPage.8c90446c.js";
import { a as langCodeToName, u as useInBar } from "./Filters.e6df5390.js";
import { g as getImgBlob, Q as QImg } from "./usefull.8778cf5c.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.f373f416.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { R as Ripple } from "./Ripple.3a8ac2e1.js";
import { storeGet } from "./StoreStuff.45ae8e68.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, B as withDirectives, u as createBaseVNode, m as createVNode, p as createTextVNode, t as toDisplayString, v as createElementBlock, n as createCommentVNode, aj as is, s as resolveComponent, x as renderList, F as Fragment } from "./index.5cc93081.js";
import "./Intersection.79320c52.js";
import "./QSpinner.7d14a7f2.js";
import "./use-dark.1adac86a.js";
import "./use-transition.651acf9e.js";
import "./axios.01f4fb44.js";
import "./QIcon.129c8e27.js";
import "./dom.e2e78a08.js";
const _sfc_main$1 = defineComponent({
  name: "sourceCard",
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  emits: ["reload"],
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    langCodeToName,
    getSetImg() {
      getImgBlob(this.source.iconUrl + "?useCache=" + this.useCache).then(
        (value) => {
          this.imgdata = value;
        }
      );
    }
  },
  mounted: function() {
    this.getSetImg();
  },
  watch: {
    "source.iconUrl"() {
      this.imgdata = "";
      this.getSetImg();
    }
  },
  setup() {
    const useCache = ref(`${storeGet("useCache", true)}`);
    const imgdata = ref("");
    return { useCache, imgdata };
  }
});
const _hoisted_1$1 = { class: "row content-center col-grow" };
const _hoisted_2 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_3 = { class: "flex items-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, {
    flat: "",
    class: "q-ma-sm"
  }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        style: { "height": "100px" },
        to: `/sources/${_ctx.source.id}/popular/`
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(QItemSection, { avatar: "" }, {
              default: withCtx(() => [
                createVNode(QImg, {
                  src: _ctx.imgdata,
                  loading: "lazy",
                  "spinner-color": "white",
                  style: { "height": "100px", "aspect-ratio": "225/225", "width": "fit-content" },
                  class: "rounded-borders items-center justify-center",
                  "no-spinner": ""
                }, {
                  default: withCtx(() => [
                    createVNode(QInnerLoading, {
                      showing: !_ctx.imgdata,
                      color: "primary",
                      class: "bg-transparent"
                    }, null, 8, ["showing"])
                  ]),
                  _: 1
                }, 8, ["src"])
              ]),
              _: 1
            }),
            createVNode(QItemSection, { class: "flex-grow" }, {
              default: withCtx(() => [
                createVNode(QItemLabel, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.capitalizeFirstLetter(_ctx.source.name)), 1)
                  ]),
                  _: 1
                }),
                createVNode(QItemLabel, { caption: "" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.langCodeToName(_ctx.source.lang)) + " ", 1),
                    _ctx.source.isNsfw ? (openBlock(), createElementBlock("span", _hoisted_2, "18+")) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_3, [
            _ctx.source.supportsLatest ? (openBlock(), createBlock(QBtn, {
              key: 0,
              class: "q-ma-sm",
              outline: "",
              color: "blue",
              label: "latest",
              to: `/sources/${_ctx.source.id}/latest/`
            }, null, 8, ["to"])) : createCommentVNode("", true),
            !_ctx.$q.screen.xs ? (openBlock(), createBlock(QBtn, {
              key: 1,
              class: "q-ma-sm",
              outline: "",
              color: "blue",
              label: "browse",
              to: `/sources/${_ctx.source.id}/popular/`
            }, null, 8, ["to"])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["to"])), [
        [Ripple]
      ])
    ]),
    _: 1
  });
}
var sourcecard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "sourceCard.vue"]]);
const _sfc_main = defineComponent({
  name: "sourcesPage",
  components: { sourcecard },
  created: function() {
    this.reload();
  },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    reload() {
      this.$api.get("/api/v1/source/list").then(({ data }) => {
        this.list = data;
        this.filters.setcurrlangs(this.extractLangs(data));
      });
    },
    langCodeToName,
    extractLangs(lis) {
      return Array.from(new Set(lis.map((ele) => ele.lang)));
    }
  },
  computed: {
    uselist() {
      const tmp = this.list.filter((ele) => {
        return this.langs.includes(ele.lang);
      });
      return tmp.sort((a, b) => {
        if (a.lang < b.lang) {
          return 1;
        }
        if (a.lang > b.lang) {
          return -1;
        }
        return 0;
      });
    }
  },
  setup(_props, { emit }) {
    emit("setTitle", "Sources");
    const filters = useInBar();
    const langs = ref(filters.langs);
    const list = ref([]);
    return { list, langs, filters, is };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "text-h4 q-ml-xl q-my-lg"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sourcecard = resolveComponent("sourcecard");
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
    default: withCtx(() => [
      createVNode(QList, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.uselist, (source2, index) => {
            return openBlock(), createElementBlock("div", { key: index }, [
              _ctx.is.deepEqual(
                _ctx.uselist.find((ele) => ele.lang == source2.lang),
                source2
              ) ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.langCodeToName(source2.lang)), 1)) : createCommentVNode("", true),
              createVNode(QIntersection, {
                style: { "height": "100px", "width": "100%" },
                class: "flex-shrink"
              }, {
                default: withCtx(() => [
                  createVNode(_component_sourcecard, {
                    onReload: _ctx.reload,
                    source: source2
                  }, null, 8, ["onReload", "source"])
                ]),
                _: 2
              }, 1024)
            ]);
          }), 128))
        ]),
        _: 1
      }),
      createVNode(QInnerLoading, {
        style: { "position": "fixed", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "width": "fit-content", "height": "fit-content", "background-color": "transparent" },
        showing: !_ctx.uselist.length,
        color: "primary"
      }, null, 8, ["showing"])
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var sourcesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "sourcesPage.vue"]]);
export { sourcesPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlc1BhZ2UuYTg4ZTM3MGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc291cmNlc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJxLW1hLXNtXCI+XG4gICAgPHEtaXRlbVxuICAgICAgdi1yaXBwbGVcbiAgICAgIGNsaWNrYWJsZVxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4XCJcbiAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vcG9wdWxhci9gXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbnRlbnQtY2VudGVyIGNvbC1ncm93XCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyBhc3BlY3QtcmF0aW86IDIyNS8yMjU7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgICAgOnNob3dpbmc9XCIhaW1nZGF0YVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc291cmNlLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgbGFuZ0NvZGVUb05hbWUoc291cmNlLmxhbmcpIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic291cmNlLmlzTnNmd1wiIHN0eWxlPVwiY29sb3I6IHJlZFwiPjE4Kzwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJsYXRlc3RcIlxuICAgICAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vbGF0ZXN0L2BcIlxuICAgICAgICAgIHYtaWY9XCJzb3VyY2Uuc3VwcG9ydHNMYXRlc3RcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJicm93c2VcIlxuICAgICAgICAgIHYtaWY9XCIhJHEuc2NyZWVuLnhzXCJcbiAgICAgICAgICA6dG89XCJgL3NvdXJjZXMvJHtzb3VyY2UuaWR9L3BvcHVsYXIvYFwiXG4gICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc291cmNlIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBsYW5nQ29kZVRvTmFtZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdzb3VyY2VDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxzb3VyY2U+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ3JlbG9hZCddLFxuICBtZXRob2RzOiB7XG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBsYW5nQ29kZVRvTmFtZSxcbiAgICBnZXRTZXRJbWcoKSB7XG4gICAgICBnZXRJbWdCbG9iKHRoaXMuc291cmNlLmljb25VcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldFNldEltZygpO1xuICB9LFxuICB3YXRjaDoge1xuICAgICdzb3VyY2UuaWNvblVybCcoKSB7XG4gICAgICB0aGlzLmltZ2RhdGEgPSAnJztcbiAgICAgIHRoaXMuZ2V0U2V0SW1nKCk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCB1c2VDYWNoZSA9IHJlZihgJHtzdG9yZUdldCgndXNlQ2FjaGUnLCB0cnVlKX1gKTtcbiAgICBjb25zdCBpbWdkYXRhID0gcmVmKCcnKTtcbiAgICByZXR1cm4geyB1c2VDYWNoZSwgaW1nZGF0YSB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgOnN0eWxlLWZuPVwibXlUd2Vha1wiPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8ZGl2IHYtZm9yPVwiKHNvdXJjZSwgaW5kZXgpIGluIHVzZWxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgIGlzLmRlZXBFcXVhbChcbiAgICAgICAgICAgICAgdXNlbGlzdC5maW5kKChlbGUpID0+IGVsZS5sYW5nID09IHNvdXJjZS5sYW5nKSxcbiAgICAgICAgICAgICAgc291cmNlXG4gICAgICAgICAgICApXG4gICAgICAgICAgXCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtaDQgcS1tbC14bCBxLW15LWxnXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGxhbmdDb2RlVG9OYW1lKHNvdXJjZS5sYW5nKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtaW50ZXJzZWN0aW9uIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMCVcIiBjbGFzcz1cImZsZXgtc2hyaW5rXCI+XG4gICAgICAgICAgPHNvdXJjZWNhcmQgQHJlbG9hZD1cInJlbG9hZFwiIDpzb3VyY2U9XCJzb3VyY2VcIj48L3NvdXJjZWNhcmQ+XG4gICAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtbGlzdD5cbiAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICBzdHlsZT1cIlxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgXCJcbiAgICAgIDpzaG93aW5nPVwiIXVzZWxpc3QubGVuZ3RoXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgPlxuICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzb3VyY2UgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvRmlsdGVycyc7XG5pbXBvcnQgc291cmNlY2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VzL3NvdXJjZUNhcmQudnVlJztcbmltcG9ydCB7IGlzIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGxhbmdDb2RlVG9OYW1lIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9sYW5ndWFnZSc7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnc291cmNlc1BhZ2UnLFxuICBjb21wb25lbnRzOiB7IHNvdXJjZWNhcmQgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVsb2FkKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICByZWxvYWQoKSB7XG4gICAgICB0aGlzLiRhcGlcbiAgICAgICAgLmdldCgnL2FwaS92MS9zb3VyY2UvbGlzdCcpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfTogQXhpb3NSZXNwb25zZTxzb3VyY2VbXT4pID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuZmlsdGVycy5zZXRjdXJybGFuZ3ModGhpcy5leHRyYWN0TGFuZ3MoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxhbmdDb2RlVG9OYW1lLFxuICAgIGV4dHJhY3RMYW5ncyhsaXM6IHNvdXJjZVtdKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChsaXMubWFwKChlbGUpID0+IGVsZS5sYW5nKSkpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VsaXN0KCk6IHNvdXJjZVtdIHtcbiAgICAgIGNvbnN0IHRtcCA9IHRoaXMubGlzdC5maWx0ZXIoKGVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ncy5pbmNsdWRlcyhlbGUubGFuZyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0bXAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5sYW5nIDwgYi5sYW5nKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGFuZyA+IGIubGFuZykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ1NvdXJjZXMnKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gRmlsdGVycygpO1xuICAgIGNvbnN0IGxhbmdzID0gcmVmKGZpbHRlcnMubGFuZ3MpO1xuICAgIGNvbnN0IGxpc3QgPSByZWYoPHNvdXJjZVtdPltdKTtcbiAgICByZXR1cm4geyBsaXN0LCBsYW5ncywgZmlsdGVycywgaXMgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhEaXJlY3RpdmVzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJGaWx0ZXJzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sQ0FBQyxRQUFRO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1Asc0JBQXNCLFFBQXdCO0FBQ3JDLGFBQUEsT0FBTyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsT0FBTyxNQUFNLENBQUM7QUFBQSxJQUN4RDtBQUFBLElBQ0E7QUFBQSxJQUNBLFlBQVk7QUFDVixpQkFBVyxLQUFLLE9BQU8sVUFBVSxlQUFlLEtBQUssUUFBUSxFQUFFO0FBQUEsUUFDN0QsQ0FBQyxVQUFVO0FBQ1QsZUFBSyxVQUFVO0FBQUEsUUFDakI7QUFBQSxNQUFBO0FBQUEsSUFFSjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsV0FBWTtBQUNuQixTQUFLLFVBQVU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQ2pCLFdBQUssVUFBVTtBQUNmLFdBQUssVUFBVTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUNOLFVBQU0sV0FBVyxJQUFJLEdBQUcsU0FBUyxZQUFZLElBQUksR0FBRztBQUM5QyxVQUFBLFVBQVUsSUFBSSxFQUFFO0FBQ2YsV0FBQSxFQUFFLFVBQVU7RUFDckI7QUFDRixDQUFDO0FBN0ZVLE1BQUFDLGVBQUEsRUFBQSxPQUFNOzs7RUFzQnNCLE9BQUEsRUFBQSxTQUFBLE1BQUE7O0FBSTVCLE1BQUEsYUFBQSxFQUFBLE9BQU07O3NCQWpDZkMsWUFzRFMsT0FBQTtBQUFBLElBdERELE1BQUE7QUFBQSxJQUFLLE9BQU07QUFBQSxFQUFBLEdBQUE7QUFBQSxxQkFDakIsTUFvRFM7QUFBQSxNQUFBQyxnQkFBQUMsVUFBQSxHQXBEVEYsWUFvRFMsT0FBQTtBQUFBLFFBbERQLFdBQUE7QUFBQSxRQUNBLE9BQUEsRUFBQSxVQUFBLFFBQUE7QUFBQSxRQUNDLElBQUUsWUFBYyxLQUFPLE9BQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSx5QkFFeEIsTUF5Qk07QUFBQSxVQXpCTkcsZ0JBeUJNLE9BekJOSixjQXlCTTtBQUFBLFlBeEJKSyxZQWdCaUIsOEJBaEJLO0FBQUEsY0FBQSxTQUFBQyxRQUNwQixNQWNRO0FBQUEsZ0JBZFJELFlBY1EsTUFBQTtBQUFBLGtCQWJMLEtBQUssS0FBQTtBQUFBLGtCQUNOLFNBQVE7QUFBQSxrQkFDUixpQkFBYztBQUFBLGtCQUNkLE9BQUEsRUFBQSxVQUFBLFNBQUEsZ0JBQUEsV0FBQSxTQUFBLGNBQUE7QUFBQSxrQkFDQSxPQUFNO0FBQUEsa0JBQ04sY0FBQTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxtQ0FFQSxNQUtrQjtBQUFBLG9CQUxsQkEsWUFLa0IsZUFBQTtBQUFBLHNCQUpmLFNBQU8sQ0FBRyxLQUFBO0FBQUEsc0JBQ1gsT0FBTTtBQUFBLHNCQUNOLE9BQU07QUFBQSxvQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUFBOzs7Ozs7WUFLWkEsWUFNaUIsY0FBQSxFQUFBLE9BQUEsZUFOZ0I7QUFBQSxjQUFBLFNBQUFDLFFBQy9CLE1BQXFFO0FBQUEsZ0JBQXJFRCxZQUFxRSxZQUFBLE1BQUE7QUFBQSxrQkFBQSxTQUFBQyxRQUF2RCxNQUF3QztBQUFBLG9CQUFyQ0MsZ0JBQUFDLGdCQUFBLEtBQUEsc0JBQXNCLFlBQU8sSUFBSSxDQUFBLEdBQUEsQ0FBQTtBQUFBLGtCQUFBLENBQUE7QUFBQTs7Z0JBQ2xESCxZQUdlLDZCQUhNO0FBQUEsa0JBQUEsU0FBQUMsUUFDbEIsTUFBaUM7QUFBQSxvQkFBQUMsZ0JBQUFDLGdCQUE5QixLQUFlLGVBQUEsS0FBQSxPQUFPLElBQUksQ0FBQSxJQUFJLEtBQ2xDLENBQUE7QUFBQSxvQkFBWSxLQUFPLE9BQUEsVUFBQUwsVUFBQSxHQUFuQk0sbUJBQXdELFFBQXhELFlBQThDLEtBQUcsS0FBQUMsbUJBQUEsSUFBQSxJQUFBO0FBQUE7Ozs7Ozs7VUFJdkROLGdCQW1CTSxPQW5CTixZQW1CTTtBQUFBLFlBWkksS0FBQSxPQUFPLCtCQU5mSCxZQVFRLE1BQUE7QUFBQSxjQUFBLEtBQUE7QUFBQSxjQVBOLE9BQU07QUFBQSxjQUNOLFNBQUE7QUFBQSxjQUNBLE9BQU07QUFBQSxjQUNOLE9BQU07QUFBQSxjQUNMLElBQUUsWUFBYyxLQUFPLE9BQUE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxDQUFBLEtBQUFTLG1CQUFBLElBQUEsSUFBQTtBQUFBLGFBU2pCLEtBQUcsR0FBQSxPQUFPLG1CQUxuQlQsWUFRUSxNQUFBO0FBQUEsY0FBQSxLQUFBO0FBQUEsY0FQTixPQUFNO0FBQUEsY0FDTixTQUFBO0FBQUEsY0FDQSxPQUFNO0FBQUEsY0FDTixPQUFNO0FBQUEsY0FFTCxJQUFFLFlBQWMsS0FBTyxPQUFBO0FBQUEsWUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxLQUFBUyxtQkFBQSxJQUFBLElBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUNKbEMsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sWUFBWSxFQUFFLFdBQVc7QUFBQSxFQUN6QixTQUFTLFdBQVk7QUFDbkIsU0FBSyxPQUFPO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsUUFBUSxRQUFnQjtBQUNmLGFBQUE7QUFBQSxRQUNMLFFBQVEsU0FBUyxnQkFBZ0IsY0FBYztBQUFBLE1BQUE7QUFBQSxJQUVuRDtBQUFBLElBQ0EsU0FBUztBQUNGLFdBQUEsS0FDRixJQUFJLHFCQUFxQixFQUN6QixLQUFLLENBQUMsRUFBRSxXQUFvQztBQUMzQyxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVEsYUFBYSxLQUFLLGFBQWEsSUFBSSxDQUFDO0FBQUEsTUFBQSxDQUNsRDtBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQSxhQUFhLEtBQXlCO0FBQzdCLGFBQUEsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxJQUN2RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLFVBQW9CO0FBQ2xCLFlBQU0sTUFBTSxLQUFLLEtBQUssT0FBTyxDQUFDLFFBQVE7QUFDcEMsZUFBTyxLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUk7QUFBQSxNQUFBLENBQ3BDO0FBQ0QsYUFBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLE1BQU07QUFDcEIsWUFBQSxFQUFFLE9BQU8sRUFBRSxNQUFNO0FBQ1osaUJBQUE7QUFBQSxRQUNUO0FBQ0ksWUFBQSxFQUFFLE9BQU8sRUFBRSxNQUFNO0FBQ1osaUJBQUE7QUFBQSxRQUNUO0FBQ08sZUFBQTtBQUFBLE1BQUEsQ0FDUjtBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3RCLFNBQUssWUFBWSxTQUFTO0FBQzFCLFVBQU0sVUFBVUM7QUFDVixVQUFBLFFBQVEsSUFBSSxRQUFRLEtBQUs7QUFDekIsVUFBQSxPQUFPLElBQWMsQ0FBQSxDQUFFO0FBQzdCLFdBQU8sRUFBRSxNQUFNLE9BQU8sU0FBUyxHQUFHO0FBQUEsRUFDcEM7QUFDRixDQUFDOzs7RUFuRlMsT0FBTTs7OztzQkFWZFYsWUFpQ1MsT0FBQSxFQUFBLFlBakNBLGdCQUFpQjtBQUFBLElBQUEsU0FBQUssUUFDeEIsTUFpQlM7QUFBQSxNQWpCVEQsWUFpQlMsT0FBQSxNQUFBO0FBQUEsUUFBQSxTQUFBQyxRQWhCRixNQUFrQztBQUFBLFdBQUFILFVBQUEsSUFBQSxHQUF2Q00sbUJBZU1HLFVBQUEsTUFBQUMsV0FmeUIsS0FBTyxTQUFBLENBQXpCQyxTQUFRLFVBQUs7Z0NBQTFCTCxtQkFlTSxPQUFBLEVBZm1DLEtBQUssU0FBSztBQUFBLGNBRTVCLEtBQUcsR0FBQTtBQUFBLGdCQUF5QixhQUFRLEtBQUksQ0FBRSxRQUFRLElBQUksUUFBUUssUUFBTyxJQUFJO0FBQUEsZ0JBQWlCQTtBQUFBQSxjQUFBLEtBQUFYLFVBQUEsR0FEL0dNLG1CQVVNLE9BVk4sWUFVTUQsZ0JBREQsS0FBQSxlQUFlTSxRQUFPLElBQUksQ0FBQSxHQUFBLENBQUEsS0FBQUosbUJBQUEsSUFBQSxJQUFBO0FBQUEsY0FFL0JMLFlBRWlCLGVBQUE7QUFBQSxnQkFGRCxPQUFBLEVBQUEsVUFBQSxTQUFBLFNBQUEsT0FBQTtBQUFBLGdCQUFtQyxPQUFNO0FBQUEsY0FBQSxHQUFBO0FBQUEsaUNBQ3ZELE1BQTJEO0FBQUEsa0JBQTNEQSxZQUEyRCx1QkFBQTtBQUFBLG9CQUE5QyxVQUFRLEtBQUE7QUFBQSxvQkFBUyxRQUFRUztBQUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsUUFBQSxDQUFBO0FBQUE7Ozs7Ozs7O01BSTVDVCxZQWFrQixlQUFBO0FBQUEsUUFaaEIsT0FBQSxFQUFBLFlBQUEsU0FBQSxRQUFBLE9BQUEsT0FBQSxPQUFBLGFBQUEseUJBQUEsU0FBQSxlQUFBLFVBQUEsZUFBQSxvQkFBQSxjQUFBO0FBQUEsUUFTQyxTQUFPLENBQUcsS0FBUSxRQUFBO0FBQUEsUUFDbkIsT0FBTTtBQUFBLE1BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQTs7Ozs7OyJ9
