import { Q as QIntersection } from "./QIntersection.b475cf21.js";
import { Q as QList } from "./QList.10571ef1.js";
import { Q as QInnerLoading } from "./QInnerLoading.7a61e845.js";
import { Q as QPage } from "./QPage.d4311932.js";
import { a as langCodeToName, u as useInBar } from "./Filters.b0da0d77.js";
import { g as getImgBlob, Q as QImg } from "./usefull.d0e2b46c.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.751b389a.js";
import { Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QItem } from "./QItem.e5504d24.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { R as Ripple } from "./Ripple.d48b6bf8.js";
import { storeGet } from "./StoreStuff.b98d7f9e.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, B as withDirectives, u as createBaseVNode, m as createVNode, p as createTextVNode, t as toDisplayString, v as createElementBlock, n as createCommentVNode, aj as is, s as resolveComponent, x as renderList, F as Fragment } from "./index.ba4ecd3b.js";
import "./Intersection.bfa1b1ed.js";
import "./QSpinner.ce362078.js";
import "./use-dark.7f6486f4.js";
import "./use-transition.322af72f.js";
import "./fetcher.0bda8d6d.js";
import "./QIcon.00211d75.js";
import "./dom.9c14e7bf.js";
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
      this.$fetchJSON("/api/v1/source/list").then((data) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlc1BhZ2UuMjQzNDYyNTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc291cmNlc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJxLW1hLXNtXCI+XG4gICAgPHEtaXRlbVxuICAgICAgdi1yaXBwbGVcbiAgICAgIGNsaWNrYWJsZVxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4XCJcbiAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vcG9wdWxhci9gXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbnRlbnQtY2VudGVyIGNvbC1ncm93XCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyBhc3BlY3QtcmF0aW86IDIyNS8yMjU7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgICAgOnNob3dpbmc9XCIhaW1nZGF0YVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc291cmNlLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgbGFuZ0NvZGVUb05hbWUoc291cmNlLmxhbmcpIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic291cmNlLmlzTnNmd1wiIHN0eWxlPVwiY29sb3I6IHJlZFwiPjE4Kzwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJsYXRlc3RcIlxuICAgICAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vbGF0ZXN0L2BcIlxuICAgICAgICAgIHYtaWY9XCJzb3VyY2Uuc3VwcG9ydHNMYXRlc3RcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJicm93c2VcIlxuICAgICAgICAgIHYtaWY9XCIhJHEuc2NyZWVuLnhzXCJcbiAgICAgICAgICA6dG89XCJgL3NvdXJjZXMvJHtzb3VyY2UuaWR9L3BvcHVsYXIvYFwiXG4gICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc291cmNlIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBsYW5nQ29kZVRvTmFtZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdzb3VyY2VDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxzb3VyY2U+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ3JlbG9hZCddLFxuICBtZXRob2RzOiB7XG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBsYW5nQ29kZVRvTmFtZSxcbiAgICBnZXRTZXRJbWcoKSB7XG4gICAgICBnZXRJbWdCbG9iKHRoaXMuc291cmNlLmljb25VcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldFNldEltZygpO1xuICB9LFxuICB3YXRjaDoge1xuICAgICdzb3VyY2UuaWNvblVybCcoKSB7XG4gICAgICB0aGlzLmltZ2RhdGEgPSAnJztcbiAgICAgIHRoaXMuZ2V0U2V0SW1nKCk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCB1c2VDYWNoZSA9IHJlZihgJHtzdG9yZUdldCgndXNlQ2FjaGUnLCB0cnVlKX1gKTtcbiAgICBjb25zdCBpbWdkYXRhID0gcmVmKCcnKTtcbiAgICByZXR1cm4geyB1c2VDYWNoZSwgaW1nZGF0YSB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgOnN0eWxlLWZuPVwibXlUd2Vha1wiPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8ZGl2IHYtZm9yPVwiKHNvdXJjZSwgaW5kZXgpIGluIHVzZWxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgIGlzLmRlZXBFcXVhbChcbiAgICAgICAgICAgICAgdXNlbGlzdC5maW5kKChlbGUpID0+IGVsZS5sYW5nID09IHNvdXJjZS5sYW5nKSxcbiAgICAgICAgICAgICAgc291cmNlXG4gICAgICAgICAgICApXG4gICAgICAgICAgXCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtaDQgcS1tbC14bCBxLW15LWxnXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGxhbmdDb2RlVG9OYW1lKHNvdXJjZS5sYW5nKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtaW50ZXJzZWN0aW9uIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMCVcIiBjbGFzcz1cImZsZXgtc2hyaW5rXCI+XG4gICAgICAgICAgPHNvdXJjZWNhcmQgQHJlbG9hZD1cInJlbG9hZFwiIDpzb3VyY2U9XCJzb3VyY2VcIj48L3NvdXJjZWNhcmQ+XG4gICAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtbGlzdD5cbiAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICBzdHlsZT1cIlxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgXCJcbiAgICAgIDpzaG93aW5nPVwiIXVzZWxpc3QubGVuZ3RoXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgPlxuICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzb3VyY2UgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvRmlsdGVycyc7XG5pbXBvcnQgc291cmNlY2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VzL3NvdXJjZUNhcmQudnVlJztcbmltcG9ydCB7IGlzIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGxhbmdDb2RlVG9OYW1lIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9sYW5ndWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdzb3VyY2VzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgc291cmNlY2FyZCB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHJlbG9hZCgpIHtcbiAgICAgIHRoaXMuJGZldGNoSlNPTignL2FwaS92MS9zb3VyY2UvbGlzdCcpLnRoZW4oKGRhdGE6IHNvdXJjZVtdKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGE7XG4gICAgICAgIHRoaXMuZmlsdGVycy5zZXRjdXJybGFuZ3ModGhpcy5leHRyYWN0TGFuZ3MoZGF0YSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBsYW5nQ29kZVRvTmFtZSxcbiAgICBleHRyYWN0TGFuZ3MobGlzOiBzb3VyY2VbXSk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQobGlzLm1hcCgoZWxlKSA9PiBlbGUubGFuZykpKTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdXNlbGlzdCgpOiBzb3VyY2VbXSB7XG4gICAgICBjb25zdCB0bXAgPSB0aGlzLmxpc3QuZmlsdGVyKChlbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3MuaW5jbHVkZXMoZWxlLmxhbmcpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG1wLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEubGFuZyA8IGIubGFuZykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxhbmcgPiBiLmxhbmcpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKF9wcm9wcywgeyBlbWl0IH0pIHtcbiAgICBlbWl0KCdzZXRUaXRsZScsICdTb3VyY2VzJyk7XG4gICAgY29uc3QgZmlsdGVycyA9IEZpbHRlcnMoKTtcbiAgICBjb25zdCBsYW5ncyA9IHJlZihmaWx0ZXJzLmxhbmdzKTtcbiAgICBjb25zdCBsaXN0ID0gcmVmKDxzb3VyY2VbXT5bXSk7XG4gICAgcmV0dXJuIHsgbGlzdCwgbGFuZ3MsIGZpbHRlcnMsIGlzIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVCbG9jayIsIl93aXRoRGlyZWN0aXZlcyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiRmlsdGVycyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Iiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVFQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLHNCQUFzQixRQUF3QjtBQUNyQyxhQUFBLE9BQU8sT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDO0FBQUEsSUFDeEQ7QUFBQSxJQUNBO0FBQUEsSUFDQSxZQUFZO0FBQ1YsaUJBQVcsS0FBSyxPQUFPLFVBQVUsZUFBZSxLQUFLLFFBQVEsRUFBRTtBQUFBLFFBQzdELENBQUMsVUFBVTtBQUNULGVBQUssVUFBVTtBQUFBLFFBQ2pCO0FBQUEsTUFBQTtBQUFBLElBRUo7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLFdBQVk7QUFDbkIsU0FBSyxVQUFVO0FBQUEsRUFDakI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUNqQixXQUFLLFVBQVU7QUFDZixXQUFLLFVBQVU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFDTixVQUFNLFdBQVcsSUFBSSxHQUFHLFNBQVMsWUFBWSxJQUFJLEdBQUc7QUFDOUMsVUFBQSxVQUFVLElBQUksRUFBRTtBQUNmLFdBQUEsRUFBRSxVQUFVO0VBQ3JCO0FBQ0YsQ0FBQztBQTdGVSxNQUFBQyxlQUFBLEVBQUEsT0FBTTs7O0VBc0JzQixPQUFBLEVBQUEsU0FBQSxNQUFBOztBQUk1QixNQUFBLGFBQUEsRUFBQSxPQUFNOztzQkFqQ2ZDLFlBc0RTLE9BQUE7QUFBQSxJQXRERCxNQUFB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
