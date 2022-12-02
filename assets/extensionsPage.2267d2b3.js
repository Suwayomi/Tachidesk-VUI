import { Q as QIntersection } from "./QIntersection.6a6cf41f.js";
import { Q as QList } from "./QList.23ba57c4.js";
import { Q as QInnerLoading } from "./QInnerLoading.b3499eb2.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { i as isArrExtention } from "./models.d7e94ac2.js";
import { g as getImgBlob, Q as QImg } from "./usefull.0f9a3edc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { storeGet } from "./StoreStuff.f5900537.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, m as createVNode, u as createBaseVNode, p as createTextVNode, t as toDisplayString, v as createElementBlock, n as createCommentVNode, q as normalizeClass, s as resolveComponent, x as renderList, F as Fragment } from "./index.0b61810d.js";
import { l as langSortCmp, u as useInBar } from "./Filters.eb5af801.js";
import "./Intersection.9c3ca45b.js";
import "./QSpinner.0d412098.js";
import "./use-dark.bc291eea.js";
import "./use-transition.65db8379.js";
import "./axios.a87bcd6c.js";
import "./QIcon.8780f7dc.js";
import "./Ripple.ce29675d.js";
import "./dom.fd94eb85.js";
const _sfc_main$1 = defineComponent({
  name: "ExtCard",
  props: {
    exten: {
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
  computed: {
    UpUnIn() {
      if (this.exten.hasUpdate)
        return "Update";
      if (this.exten.installed)
        return "Uninstall";
      return "Install";
    }
  },
  mounted: function() {
    getImgBlob(this.exten.iconUrl + "?useCache=" + this.useCache).then(
      (value) => {
        this.imgdata = value;
      }
    );
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async HandleExt() {
      if (this.exten.hasUpdate) {
        await this.$api.get(`/api/v1/extension/update/${this.exten.pkgName}`);
      } else if (this.exten.installed) {
        await this.$api.get(
          `/api/v1/extension/uninstall/${this.exten.pkgName}`
        );
      } else {
        await this.$api.get(`/api/v1/extension/install/${this.exten.pkgName}`);
      }
      this.$emit("reload");
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
    class: normalizeClass(["q-ma-sm", _ctx.$q.dark.isActive ? `` : "bg-light"])
  }, {
    default: withCtx(() => [
      createVNode(QItem, { style: { "height": "100px" } }, {
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
                    createTextVNode(toDisplayString(_ctx.capitalizeFirstLetter(_ctx.exten.name)), 1)
                  ]),
                  _: 1
                }),
                createVNode(QItemLabel, { caption: "" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.capitalizeFirstLetter(_ctx.exten.lang)) + " " + toDisplayString(_ctx.exten.versionName) + " ", 1),
                    _ctx.exten.isNsfw ? (openBlock(), createElementBlock("span", _hoisted_2, "18+")) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              outline: "",
              color: "blue",
              onClick: _ctx.HandleExt
            }, {
              default: withCtx(() => [
                createVNode(QItemLabel, {
                  class: normalizeClass(_ctx.$q.dark.isActive ? `light` : `dark`)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.capitalizeFirstLetter(_ctx.UpUnIn)), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
var extCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "extCard.vue"]]);
const _sfc_main = defineComponent({
  name: "SourcesPage",
  components: { extCard },
  emits: ["set-title"],
  setup(_props, { emit }) {
    emit("set-title", "Extentions");
    const filt = useInBar();
    const filters = filt;
    const list = ref([]);
    const langs = ref(filt.langs);
    return { list, allLangs: [], filters, langs };
  },
  computed: {
    langGroups() {
      return this.groupExtensions(this.list);
    },
    filterList() {
      let list = this.langGroups;
      list = list.map((ele) => {
        let tmp = ele[1];
        if (this.$route.query["q"]) {
          tmp = tmp.filter(
            (manga) => manga.name.toLowerCase().includes(`${this.$route.query["q"]}`.toLowerCase())
          );
        }
        if (!this.langs.includes(ele[0]))
          tmp = [];
        return [ele[0], tmp];
      });
      return list;
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
      this.$api.get("/api/v1/extension/list").then(({ data }) => {
        this.list = data;
      });
    },
    groupExtensions(extensions) {
      this.allLangs = [];
      const sortedExtenions = {
        ["installed"]: [],
        "updates pending": []
      };
      extensions.forEach((extension) => {
        var _a;
        const lang = extension.lang;
        if (sortedExtenions[lang] == void 0) {
          sortedExtenions[lang] = [];
          if (lang !== "all") {
            this.allLangs.push(lang);
          }
        }
        if (extension.installed) {
          if (extension.hasUpdate) {
            if (isArrExtention(sortedExtenions["updates pending"]))
              sortedExtenions["updates pending"].push(extension);
          } else {
            if (isArrExtention(sortedExtenions["installed"]))
              sortedExtenions["installed"].push(extension);
          }
        } else {
          (_a = sortedExtenions[lang]) == null ? void 0 : _a.push(extension);
        }
      });
      this.allLangs.sort(langSortCmp);
      const result = [
        [
          "updates pending",
          isArrExtention(sortedExtenions["updates pending"]) ? sortedExtenions["updates pending"] : []
        ],
        [
          "installed",
          isArrExtention(sortedExtenions["installed"]) ? sortedExtenions["installed"] : []
        ],
        [
          "all",
          isArrExtention(sortedExtenions["all"]) ? sortedExtenions["all"] : []
        ]
      ];
      this.filters.setcurrlangs(this.allLangs);
      const langExt = this.allLangs.map((lang) => [lang, sortedExtenions[lang]]).filter((ele) => ele[1] != void 0);
      const tmp = result.concat(langExt);
      return tmp;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
});
const _hoisted_1 = {
  key: 0,
  class: "text-h4 q-ml-xl q-my-lg"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_extCard = resolveComponent("extCard");
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filterList, (lang) => {
        return openBlock(), createBlock(QList, {
          key: lang[0]
        }, {
          default: withCtx(() => [
            lang[1].length ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.capitalizeFirstLetter(lang[0])), 1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(lang[1], (exten, index) => {
              return openBlock(), createBlock(QIntersection, {
                key: index,
                style: { "height": "100px", "width": "100%" },
                class: "flex-shrink"
              }, {
                default: withCtx(() => [
                  !exten.obsolete || exten.installed ? (openBlock(), createBlock(_component_extCard, {
                    key: 0,
                    exten,
                    onReload: _ctx.reload
                  }, null, 8, ["exten", "onReload"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 2
        }, 1024);
      }), 128)),
      createVNode(QInnerLoading, {
        style: { "position": "fixed", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "width": "fit-content", "height": "fit-content", "background-color": "transparent" },
        showing: _ctx.filterList.length == 3,
        color: "primary"
      }, null, 8, ["showing"])
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var extensionsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "extensionsPage.vue"]]);
export { extensionsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uc1BhZ2UuMjI2N2QyYjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvZXh0Q2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvZXh0ZW5zaW9uc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGNsYXNzPVwicS1tYS1zbVwiIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgYCA6ICdiZy1saWdodCdcIj5cbiAgICA8cS1pdGVtIHN0eWxlPVwiaGVpZ2h0OiAxMDBweFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb250ZW50LWNlbnRlciBjb2wtZ3Jvd1wiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgYXNwZWN0LXJhdGlvOiAyMjUvMjI1OyB3aWR0aDogZml0LWNvbnRlbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIG5vLXNwaW5uZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgICAgICAgIDwvcS1pbWc+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGV4dGVuLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGV4dGVuLmxhbmcpIH19IHt7IGV4dGVuLnZlcnNpb25OYW1lIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiZXh0ZW4uaXNOc2Z3XCIgc3R5bGU9XCJjb2xvcjogcmVkXCI+MTgrPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHEtYnRuIG91dGxpbmUgY29sb3I9XCJibHVlXCIgQGNsaWNrPVwiSGFuZGxlRXh0XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiPnt7XG4gICAgICAgICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoVXBVbkluKVxuICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtaXRlbT5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGV4dGVudGlvbiB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdFeHRDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBleHRlbjoge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPGV4dGVudGlvbj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBlbWl0czogWydyZWxvYWQnXSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7c3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSl9YCk7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBVcFVuSW4oKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmV4dGVuLmhhc1VwZGF0ZSkgcmV0dXJuICdVcGRhdGUnO1xuICAgICAgaWYgKHRoaXMuZXh0ZW4uaW5zdGFsbGVkKSByZXR1cm4gJ1VuaW5zdGFsbCc7XG4gICAgICByZXR1cm4gJ0luc3RhbGwnO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBnZXRJbWdCbG9iKHRoaXMuZXh0ZW4uaWNvblVybCArICc/dXNlQ2FjaGU9JyArIHRoaXMudXNlQ2FjaGUpLnRoZW4oXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICB9XG4gICAgKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG4gICAgYXN5bmMgSGFuZGxlRXh0KCkge1xuICAgICAgaWYgKHRoaXMuZXh0ZW4uaGFzVXBkYXRlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGFwaS5nZXQoYC9hcGkvdjEvZXh0ZW5zaW9uL3VwZGF0ZS8ke3RoaXMuZXh0ZW4ucGtnTmFtZX1gKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5leHRlbi5pbnN0YWxsZWQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kYXBpLmdldChcbiAgICAgICAgICBgL2FwaS92MS9leHRlbnNpb24vdW5pbnN0YWxsLyR7dGhpcy5leHRlbi5wa2dOYW1lfWBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGFwaS5nZXQoYC9hcGkvdjEvZXh0ZW5zaW9uL2luc3RhbGwvJHt0aGlzLmV4dGVuLnBrZ05hbWV9YCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdyZWxvYWQnKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8cS1saXN0IHYtZm9yPVwibGFuZyBpbiBmaWx0ZXJMaXN0XCIgOmtleT1cImxhbmdbMF1cIj5cbiAgICAgIDxkaXYgdi1pZj1cImxhbmdbMV0ubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWg0IHEtbWwteGwgcS1teS1sZ1wiPlxuICAgICAgICB7eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGFuZ1swXSkgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHEtaW50ZXJzZWN0aW9uXG4gICAgICAgIHYtZm9yPVwiKGV4dGVuLCBpbmRleCkgaW4gbGFuZ1sxXVwiXG4gICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMCVcIlxuICAgICAgICBjbGFzcz1cImZsZXgtc2hyaW5rXCJcbiAgICAgID5cbiAgICAgICAgPGV4dENhcmRcbiAgICAgICAgICB2LWlmPVwiIWV4dGVuLm9ic29sZXRlIHx8IGV4dGVuLmluc3RhbGxlZFwiXG4gICAgICAgICAgOmV4dGVuPVwiZXh0ZW5cIlxuICAgICAgICAgIEByZWxvYWQ9XCJyZWxvYWRcIlxuICAgICAgICA+PC9leHRDYXJkPlxuICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICA8L3EtbGlzdD5cbiAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICBzdHlsZT1cIlxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgXCJcbiAgICAgIDpzaG93aW5nPVwiZmlsdGVyTGlzdC5sZW5ndGggPT0gM1wiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgID5cbiAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtcbiAgZXh0ZW50aW9uLFxuICBncm91cGVkRXh0ZW50aW9uLFxuICBpc0FyckV4dGVudGlvbixcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgZXh0Q2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2V4dENhcmQudnVlJztcbmltcG9ydCB7IGxhbmdTb3J0Q21wIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9sYW5ndWFnZSc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL0ZpbHRlcnMnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NvdXJjZXNQYWdlJyxcbiAgY29tcG9uZW50czogeyBleHRDYXJkIH0sXG4gIGVtaXRzOiBbJ3NldC10aXRsZSddLFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0LXRpdGxlJywgJ0V4dGVudGlvbnMnKTtcbiAgICBjb25zdCBmaWx0ID0gRmlsdGVycygpO1xuICAgIGNvbnN0IGZpbHRlcnMgPSBmaWx0O1xuICAgIGNvbnN0IGxpc3QgPSByZWYoPGV4dGVudGlvbltdPltdKTtcbiAgICBjb25zdCBsYW5ncyA9IHJlZihmaWx0LmxhbmdzKTtcbiAgICByZXR1cm4geyBsaXN0LCBhbGxMYW5nczogPHN0cmluZ1tdPltdLCBmaWx0ZXJzLCBsYW5ncyB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxhbmdHcm91cHMoKTogW3N0cmluZywgZXh0ZW50aW9uW11dW10ge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBFeHRlbnNpb25zKHRoaXMubGlzdCk7XG4gICAgfSxcbiAgICBmaWx0ZXJMaXN0KCk6IFtzdHJpbmcsIGV4dGVudGlvbltdXVtdIHtcbiAgICAgIGxldCBsaXN0ID0gdGhpcy5sYW5nR3JvdXBzO1xuICAgICAgbGlzdCA9IGxpc3QubWFwKChlbGUpID0+IHtcbiAgICAgICAgbGV0IHRtcCA9IGVsZVsxXTtcbiAgICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5WydxJ10pIHtcbiAgICAgICAgICB0bXAgPSB0bXAuZmlsdGVyKChtYW5nYSkgPT5cbiAgICAgICAgICAgIG1hbmdhLm5hbWVcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGAke3RoaXMuJHJvdXRlLnF1ZXJ5WydxJ119YC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxhbmdzLmluY2x1ZGVzKGVsZVswXSkpIHRtcCA9IFtdO1xuICAgICAgICByZXR1cm4gW2VsZVswXSwgdG1wXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJyxcbiAgICAgIH07XG4gICAgfSxcbiAgICByZWxvYWQoKSB7XG4gICAgICB0aGlzLiRhcGlcbiAgICAgICAgLmdldCgnL2FwaS92MS9leHRlbnNpb24vbGlzdCcpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfTogQXhpb3NSZXNwb25zZTxleHRlbnRpb25bXT4pID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdyb3VwRXh0ZW5zaW9ucyhleHRlbnNpb25zOiBleHRlbnRpb25bXSkge1xuICAgICAgdGhpcy5hbGxMYW5ncyA9IFtdOyAvLyBlbXB0eSB0aGUgYXJyYXlcbiAgICAgIGNvbnN0IHNvcnRlZEV4dGVuaW9uczogZ3JvdXBlZEV4dGVudGlvbiA9IHtcbiAgICAgICAgWydpbnN0YWxsZWQnXTogW10gYXMgZXh0ZW50aW9uW10sXG4gICAgICAgICd1cGRhdGVzIHBlbmRpbmcnOiBbXSBhcyBleHRlbnRpb25bXSxcbiAgICAgIH07XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBjb25zdCBsYW5nID0gZXh0ZW5zaW9uLmxhbmc7XG4gICAgICAgIGlmIChzb3J0ZWRFeHRlbmlvbnNbbGFuZ10gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc29ydGVkRXh0ZW5pb25zW2xhbmddID0gW10gYXMgZXh0ZW50aW9uW107XG4gICAgICAgICAgaWYgKGxhbmcgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLmFsbExhbmdzLnB1c2gobGFuZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHRlbnNpb24uaW5zdGFsbGVkKSB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbi5oYXNVcGRhdGUpIHtcbiAgICAgICAgICAgIGlmIChpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddKSlcbiAgICAgICAgICAgICAgc29ydGVkRXh0ZW5pb25zWyd1cGRhdGVzIHBlbmRpbmcnXS5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddKSlcbiAgICAgICAgICAgICAgc29ydGVkRXh0ZW5pb25zWydpbnN0YWxsZWQnXS5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRlZEV4dGVuaW9uc1tsYW5nXT8ucHVzaChleHRlbnNpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbGxMYW5ncy5zb3J0KGxhbmdTb3J0Q21wKTtcbiAgICAgIGNvbnN0IHJlc3VsdDogW3N0cmluZywgZXh0ZW50aW9uW11dW10gPSBbXG4gICAgICAgIFtcbiAgICAgICAgICAndXBkYXRlcyBwZW5kaW5nJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddKVxuICAgICAgICAgICAgPyBzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ2luc3RhbGxlZCcsXG4gICAgICAgICAgaXNBcnJFeHRlbnRpb24oc29ydGVkRXh0ZW5pb25zWydpbnN0YWxsZWQnXSlcbiAgICAgICAgICAgID8gc29ydGVkRXh0ZW5pb25zWydpbnN0YWxsZWQnXVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdhbGwnLFxuICAgICAgICAgIGlzQXJyRXh0ZW50aW9uKHNvcnRlZEV4dGVuaW9uc1snYWxsJ10pID8gc29ydGVkRXh0ZW5pb25zWydhbGwnXSA6IFtdLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRjdXJybGFuZ3ModGhpcy5hbGxMYW5ncyk7XG4gICAgICBjb25zdCBsYW5nRXh0OiBbc3RyaW5nLCBleHRlbnRpb25bXV1bXSA9IHRoaXMuYWxsTGFuZ3NcbiAgICAgICAgLm1hcCgobGFuZykgPT4gW2xhbmcsIHNvcnRlZEV4dGVuaW9uc1tsYW5nXV0pXG4gICAgICAgIC5maWx0ZXIoKGVsZSkgPT4gZWxlWzFdICE9IHVuZGVmaW5lZCkgYXMgW3N0cmluZywgZXh0ZW50aW9uW11dW107XG4gICAgICBjb25zdCB0bXAgPSByZXN1bHQuY29uY2F0KGxhbmdFeHQpO1xuICAgICAgcmV0dXJuIHRtcDtcbiAgICB9LFxuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmc6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJGaWx0ZXJzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLFFBQVE7QUFDTixVQUFNLFdBQVcsSUFBSSxHQUFHLFNBQVMsWUFBWSxJQUFJLEdBQUc7QUFDOUMsVUFBQSxVQUFVLElBQUksRUFBRTtBQUNmLFdBQUEsRUFBRSxVQUFVO0VBQ3JCO0FBQUEsRUFDQSxVQUFVO0FBQUEs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
