import { Q as QIntersection } from "./QIntersection.6a6cf41f.js";
import { Q as QList } from "./QList.23ba57c4.js";
import { Q as QInnerLoading } from "./QInnerLoading.b3499eb2.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { a as langCodeToName, u as useInBar } from "./Filters.eb5af801.js";
import { g as getImgBlob, Q as QImg } from "./usefull.0f9a3edc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { storeGet } from "./StoreStuff.f5900537.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, B as withDirectives, u as createBaseVNode, m as createVNode, p as createTextVNode, t as toDisplayString, v as createElementBlock, n as createCommentVNode, aj as is, s as resolveComponent, x as renderList, F as Fragment } from "./index.0b61810d.js";
import "./Intersection.9c3ca45b.js";
import "./QSpinner.0d412098.js";
import "./use-dark.bc291eea.js";
import "./use-transition.65db8379.js";
import "./axios.a87bcd6c.js";
import "./QIcon.8780f7dc.js";
import "./dom.fd94eb85.js";
const _sfc_main$1 = defineComponent({
  name: "SourceCard",
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  emits: ["reload"],
  setup() {
    const useCache = ref(`${storeGet("useCache", true)}`);
    const imgdata = ref("");
    return { useCache, imgdata };
  },
  watch: {
    "source.iconUrl"() {
      this.imgdata = "";
      this.getSetImg();
    }
  },
  mounted: function() {
    this.getSetImg();
  },
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
  name: "SourcesPage",
  components: { sourcecard },
  emits: ["set-title"],
  setup(_props, { emit }) {
    emit("set-title", "Sources");
    const filters = useInBar();
    const langs = ref(filters.langs);
    const list = ref([]);
    return { list, langs, filters, is };
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
                    source: source2,
                    onReload: _ctx.reload
                  }, null, 8, ["source", "onReload"])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlc1BhZ2UuNjU0NjA0ZjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc291cmNlc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGZsYXQgY2xhc3M9XCJxLW1hLXNtXCI+XG4gICAgPHEtaXRlbVxuICAgICAgdi1yaXBwbGVcbiAgICAgIGNsaWNrYWJsZVxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4XCJcbiAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vcG9wdWxhci9gXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbnRlbnQtY2VudGVyIGNvbC1ncm93XCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICA6c3JjPVwiaW1nZGF0YVwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyBhc3BlY3QtcmF0aW86IDIyNS8yMjU7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgICAgICAgOnNob3dpbmc9XCIhaW1nZGF0YVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc291cmNlLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgbGFuZ0NvZGVUb05hbWUoc291cmNlLmxhbmcpIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic291cmNlLmlzTnNmd1wiIHN0eWxlPVwiY29sb3I6IHJlZFwiPjE4Kzwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtaWY9XCJzb3VyY2Uuc3VwcG9ydHNMYXRlc3RcIlxuICAgICAgICAgIGNsYXNzPVwicS1tYS1zbVwiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgbGFiZWw9XCJsYXRlc3RcIlxuICAgICAgICAgIDp0bz1cImAvc291cmNlcy8ke3NvdXJjZS5pZH0vbGF0ZXN0L2BcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHYtaWY9XCIhJHEuc2NyZWVuLnhzXCJcbiAgICAgICAgICBjbGFzcz1cInEtbWEtc21cIlxuICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIGxhYmVsPVwiYnJvd3NlXCJcbiAgICAgICAgICA6dG89XCJgL3NvdXJjZXMvJHtzb3VyY2UuaWR9L3BvcHVsYXIvYFwiXG4gICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc291cmNlIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBsYW5nQ29kZVRvTmFtZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdTb3VyY2VDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxzb3VyY2U+LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFsncmVsb2FkJ10sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKGAke3N0b3JlR2V0KCd1c2VDYWNoZScsIHRydWUpfWApO1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIHJldHVybiB7IHVzZUNhY2hlLCBpbWdkYXRhIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJ3NvdXJjZS5pY29uVXJsJygpIHtcbiAgICAgIHRoaXMuaW1nZGF0YSA9ICcnO1xuICAgICAgdGhpcy5nZXRTZXRJbWcoKTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRTZXRJbWcoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG4gICAgbGFuZ0NvZGVUb05hbWUsXG4gICAgZ2V0U2V0SW1nKCkge1xuICAgICAgZ2V0SW1nQmxvYih0aGlzLnNvdXJjZS5pY29uVXJsICsgJz91c2VDYWNoZT0nICsgdGhpcy51c2VDYWNoZSkudGhlbihcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdD5cbiAgICAgIDxkaXYgdi1mb3I9XCIoc291cmNlLCBpbmRleCkgaW4gdXNlbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgaXMuZGVlcEVxdWFsKFxuICAgICAgICAgICAgICB1c2VsaXN0LmZpbmQoKGVsZSkgPT4gZWxlLmxhbmcgPT0gc291cmNlLmxhbmcpLFxuICAgICAgICAgICAgICBzb3VyY2VcbiAgICAgICAgICAgIClcbiAgICAgICAgICBcIlxuICAgICAgICAgIGNsYXNzPVwidGV4dC1oNCBxLW1sLXhsIHEtbXktbGdcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbGFuZ0NvZGVUb05hbWUoc291cmNlLmxhbmcpIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cS1pbnRlcnNlY3Rpb24gc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwJVwiIGNsYXNzPVwiZmxleC1zaHJpbmtcIj5cbiAgICAgICAgICA8c291cmNlY2FyZCA6c291cmNlPVwic291cmNlXCIgQHJlbG9hZD1cInJlbG9hZFwiPjwvc291cmNlY2FyZD5cbiAgICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1saXN0PlxuICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgIHN0eWxlPVwiXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBcIlxuICAgICAgOnNob3dpbmc9XCIhdXNlbGlzdC5sZW5ndGhcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICA+XG4gICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHNvdXJjZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9GaWx0ZXJzJztcbmltcG9ydCBzb3VyY2VjYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlQ2FyZC52dWUnO1xuaW1wb3J0IHsgaXMgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgbGFuZ0NvZGVUb05hbWUgfSBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2xhbmd1YWdlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdTb3VyY2VzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgc291cmNlY2FyZCB9LFxuICBlbWl0czogWydzZXQtdGl0bGUnXSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldC10aXRsZScsICdTb3VyY2VzJyk7XG4gICAgY29uc3QgZmlsdGVycyA9IEZpbHRlcnMoKTtcbiAgICBjb25zdCBsYW5ncyA9IHJlZihmaWx0ZXJzLmxhbmdzKTtcbiAgICBjb25zdCBsaXN0ID0gcmVmKDxzb3VyY2VbXT5bXSk7XG4gICAgcmV0dXJuIHsgbGlzdCwgbGFuZ3MsIGZpbHRlcnMsIGlzIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdXNlbGlzdCgpOiBzb3VyY2VbXSB7XG4gICAgICBjb25zdCB0bXAgPSB0aGlzLmxpc3QuZmlsdGVyKChlbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3MuaW5jbHVkZXMoZWxlLmxhbmcpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG1wLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEubGFuZyA8IGIubGFuZykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxhbmcgPiBiLmxhbmcpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJyxcbiAgICAgIH07XG4gICAgfSxcbiAgICByZWxvYWQoKSB7XG4gICAgICB0aGlzLiRhcGlcbiAgICAgICAgLmdldCgnL2FwaS92MS9zb3VyY2UvbGlzdCcpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfTogQXhpb3NSZXNwb25zZTxzb3VyY2VbXT4pID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuZmlsdGVycy5zZXRjdXJybGFuZ3ModGhpcy5leHRyYWN0TGFuZ3MoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxhbmdDb2RlVG9OYW1lLFxuICAgIGV4dHJhY3RMYW5ncyhsaXM6IHNvdXJjZVtdKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChsaXMubWFwKChlbGUpID0+IGVsZS5sYW5nKSkpO1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlQmxvY2siLCJfd2l0aERpcmVjdGl2ZXMiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIkZpbHRlcnMiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUEsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxDQUFDLFFBQVE7QUFBQSxFQUNoQixRQUFRO0FBQ04sVUFBTSxXQUFXLElBQUksR0FBRyxTQUFTLFlBQVksSUFBSSxHQUFHO0FBQzlDLFVBQUEsVUFBVSxJQUFJLEVBQUU7QUFDZixXQUFBLEVBQUUsVUFBVTtFQUNyQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQ2pCLFdBQUssVUFBVTtBQUNmLFdBQUssVUFBVTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxXQUFZO0FBQ25CLFNBQUssVUFBVTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxzQkFBc0IsUUFBd0I7QUFDckMsYUFBQSxPQUFPLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixPQUFPLE1BQU0sQ0FBQztBQUFBLElBQ3hEO0FBQUEsSUFDQTtBQUFBLElBQ0EsWUFBWTtBQUNWLGlCQUFXLEtBQUssT0FBTyxVQUFVLGVBQWUsS0FBSyxRQUFRLEVBQUU7QUFBQSxRQUM3RCxDQUFDLFVBQVU7QUFDVCxlQUFLLFVBQVU7QUFBQSxRQUNqQjtBQUFBLE1BQUE7QUFBQSxJQUVKO0FBQUEsRUFDRjtBQUNGLENBQUM7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
