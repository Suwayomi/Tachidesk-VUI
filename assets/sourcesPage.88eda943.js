import { Q as QIntersection } from "./QIntersection.5a6859cd.js";
import { Q as QList } from "./QList.e87441cd.js";
import { Q as QInnerLoading } from "./QInnerLoading.dc9c40c5.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { a as langCodeToName, u as useInBar } from "./Filters.b563a00e.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { g as getImgBlob } from "./usefull.5da5779b.js";
import { f as defineComponent, r as ref, _ as _export_sfc, j as openBlock, k as createBlock, m as withCtx, D as withDirectives, v as createBaseVNode, n as createVNode, q as createTextVNode, t as toDisplayString, y as createElementBlock, p as createCommentVNode, ak as is, u as resolveComponent, z as renderList, F as Fragment } from "./index.75e4774b.js";
import "./Intersection.1f7cb92e.js";
import "./QSpinner.6511ee07.js";
import "./use-dark.63b90c22.js";
import "./use-transition.34947ede.js";
import "./QIcon.aa032244.js";
import "./dom.3bfc77a6.js";
import "./fetcher.d026f468.js";
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
    const $q = useQuasar();
    const useCache = ref(`${$q.localStorage.getItem("useCache")}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlc1BhZ2UuODhlZGE5NDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc291cmNlc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJxLW1hLXNtXCI+XG4gICAgPHEtaXRlbVxuICAgICAgdi1yaXBwbGVcbiAgICAgIGNsaWNrYWJsZVxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4XCJcbiAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vcG9wdWxhci9gXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbnRlbnQtY2VudGVyIGNvbC1ncm93XCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyBhc3BlY3QtcmF0aW86IDIyNS8yMjU7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgICAgOnNob3dpbmc9XCIhaW1nZGF0YVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc291cmNlLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgbGFuZ0NvZGVUb05hbWUoc291cmNlLmxhbmcpIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic291cmNlLmlzTnNmd1wiIHN0eWxlPVwiY29sb3I6IHJlZFwiPjE4Kzwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJsYXRlc3RcIlxuICAgICAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vbGF0ZXN0L2BcIlxuICAgICAgICAgIHYtaWY9XCJzb3VyY2Uuc3VwcG9ydHNMYXRlc3RcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJicm93c2VcIlxuICAgICAgICAgIHYtaWY9XCIhJHEuc2NyZWVuLnhzXCJcbiAgICAgICAgICA6dG89XCJgL3NvdXJjZXMvJHtzb3VyY2UuaWR9L3BvcHVsYXIvYFwiXG4gICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHNvdXJjZSB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgbGFuZ0NvZGVUb05hbWUgfSBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2xhbmd1YWdlJztcbmltcG9ydCB7IGdldEltZ0Jsb2IgfSBmcm9tICcuLi9nbG9iYWwvdXNlZnVsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdzb3VyY2VDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxzb3VyY2U+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ3JlbG9hZCddLFxuICBtZXRob2RzOiB7XG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBsYW5nQ29kZVRvTmFtZSxcbiAgICBnZXRTZXRJbWcoKSB7XG4gICAgICBnZXRJbWdCbG9iKHRoaXMuc291cmNlLmljb25VcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldFNldEltZygpO1xuICB9LFxuICB3YXRjaDoge1xuICAgICdzb3VyY2UuaWNvblVybCcoKSB7XG4gICAgICB0aGlzLmltZ2RhdGEgPSAnJztcbiAgICAgIHRoaXMuZ2V0U2V0SW1nKCk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKGAkeyRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VDYWNoZScpfWApO1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIHJldHVybiB7IHVzZUNhY2hlLCBpbWdkYXRhIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdD5cbiAgICAgIDxkaXYgdi1mb3I9XCIoc291cmNlLCBpbmRleCkgaW4gdXNlbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgaXMuZGVlcEVxdWFsKFxuICAgICAgICAgICAgICB1c2VsaXN0LmZpbmQoKGVsZSkgPT4gZWxlLmxhbmcgPT0gc291cmNlLmxhbmcpLFxuICAgICAgICAgICAgICBzb3VyY2VcbiAgICAgICAgICAgIClcbiAgICAgICAgICBcIlxuICAgICAgICAgIGNsYXNzPVwidGV4dC1oNCBxLW1sLXhsIHEtbXktbGdcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbGFuZ0NvZGVUb05hbWUoc291cmNlLmxhbmcpIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cS1pbnRlcnNlY3Rpb24gc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwJVwiIGNsYXNzPVwiZmxleC1zaHJpbmtcIj5cbiAgICAgICAgICA8c291cmNlY2FyZCBAcmVsb2FkPVwicmVsb2FkXCIgOnNvdXJjZT1cInNvdXJjZVwiPjwvc291cmNlY2FyZD5cbiAgICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1saXN0PlxuICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgIHN0eWxlPVwiXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBcIlxuICAgICAgOnNob3dpbmc9XCIhdXNlbGlzdC5sZW5ndGhcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICA+XG4gICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHNvdXJjZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9GaWx0ZXJzJztcbmltcG9ydCBzb3VyY2VjYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlQ2FyZC52dWUnO1xuaW1wb3J0IHsgaXMgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgbGFuZ0NvZGVUb05hbWUgfSBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2xhbmd1YWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NvdXJjZXNQYWdlJyxcbiAgY29tcG9uZW50czogeyBzb3VyY2VjYXJkIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVsb2FkKCkge1xuICAgICAgdGhpcy4kZmV0Y2hKU09OKCcvYXBpL3YxL3NvdXJjZS9saXN0JykudGhlbigoZGF0YTogc291cmNlW10pID0+IHtcbiAgICAgICAgdGhpcy5saXN0ID0gZGF0YTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnNldGN1cnJsYW5ncyh0aGlzLmV4dHJhY3RMYW5ncyhkYXRhKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxhbmdDb2RlVG9OYW1lLFxuICAgIGV4dHJhY3RMYW5ncyhsaXM6IHNvdXJjZVtdKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChsaXMubWFwKChlbGUpID0+IGVsZS5sYW5nKSkpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VsaXN0KCk6IHNvdXJjZVtdIHtcbiAgICAgIGNvbnN0IHRtcCA9IHRoaXMubGlzdC5maWx0ZXIoKGVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ncy5pbmNsdWRlcyhlbGUubGFuZyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0bXAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5sYW5nIDwgYi5sYW5nKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGFuZyA+IGIubGFuZykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ1NvdXJjZXMnKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gRmlsdGVycygpO1xuICAgIGNvbnN0IGxhbmdzID0gcmVmKGZpbHRlcnMubGFuZ3MpO1xuICAgIGNvbnN0IGxpc3QgPSByZWYoPHNvdXJjZVtdPltdKTtcbiAgICByZXR1cm4geyBsaXN0LCBsYW5ncywgZmlsdGVycywgaXMgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhEaXJlY3RpdmVzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJGaWx0ZXJzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVFQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLHNCQUFzQixRQUF3QjtBQUNyQyxhQUFBLE9BQU8sT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDO0FBQUEsSUFDeEQ7QUFBQSxJQUNBO0FBQUEsSUFDQSxZQUFZO0FBQ1YsaUJBQVcsS0FBSyxPQUFPLFVBQVUsZUFBZSxLQUFLLFFBQVEsRUFBRTtBQUFBLFFBQzdELENBQUMsVUFBVTtBQUNULGVBQUssVUFBVTtBQUFBLFFBQ2pCO0FBQUEsTUFBQTtBQUFBLElBRUo7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLFdBQVk7QUFDbkIsU0FBSyxVQUFVO0FBQUEsRUFDakI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUNqQixXQUFLLFVBQVU7QUFDZixXQUFLLFVBQVU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFDTixVQUFNLEtBQUs7QUFDWCxVQUFNLFdBQVcsSUFBSSxHQUFHLEdBQUcsYUFBYSxRQUFRLFVBQVUsR0FBRztBQUN2RCxVQUFBLFVBQVUsSUFBSSxFQUFFO0FBQ2YsV0FBQSxFQUFFLFVBQVU7RUFDckI7QUFDRixDQUFDO0FBOUZVLE1BQUFDLGVBQUEsRUFBQSxPQUFNOzs7RUFzQnNCLE9BQUEsRUFBQSxTQUFBLE1BQUE7O0FBSTVCLE1BQUEsYUFB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
