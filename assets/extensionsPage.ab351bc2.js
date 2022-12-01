import { Q as QIntersection } from "./QIntersection.196ae3c5.js";
import { Q as QList } from "./QList.550eb66e.js";
import { Q as QInnerLoading } from "./QInnerLoading.5b5d73c7.js";
import { Q as QPage } from "./QPage.2a653745.js";
import { i as isArrExtention } from "./models.4021c4b7.js";
import { g as getImgBlob, Q as QImg } from "./usefull.6349588e.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.66687690.js";
import { Q as QBtn } from "./QBtn.fa53f47e.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { Q as QCard } from "./QCard.a457d3f1.js";
import { storeGet } from "./StoreStuff.9c9e2ee5.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, m as createVNode, u as createBaseVNode, p as createTextVNode, t as toDisplayString, v as createElementBlock, n as createCommentVNode, q as normalizeClass, s as resolveComponent, x as renderList, F as Fragment } from "./index.c15e704f.js";
import { l as langSortCmp, u as useInBar } from "./Filters.f2b9e057.js";
import "./Intersection.d463dc89.js";
import "./QSpinner.dc7e097a.js";
import "./use-dark.97ac6897.js";
import "./use-transition.db025f57.js";
import "./fetcher.10190d88.js";
import "./QIcon.25655771.js";
import "./Ripple.a0364732.js";
import "./dom.617e2098.js";
const _sfc_main$1 = defineComponent({
  name: "extCard",
  props: {
    exten: {
      type: Object,
      required: true
    }
  },
  emits: ["reload"],
  computed: {
    UpUnIn() {
      if (this.exten.hasUpdate)
        return "Update";
      if (this.exten.installed)
        return "Uninstall";
      return "Install";
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async HandleExt() {
      if (this.exten.hasUpdate) {
        await this.$fetch(`/api/v1/extension/update/${this.exten.pkgName}`);
      } else if (this.exten.installed) {
        await this.$fetch(`/api/v1/extension/uninstall/${this.exten.pkgName}`);
      } else {
        await this.$fetch(`/api/v1/extension/install/${this.exten.pkgName}`);
      }
      this.$emit("reload");
    }
  },
  mounted: function() {
    getImgBlob(this.exten.iconUrl + "?useCache=" + this.useCache).then(
      (value) => {
        this.imgdata = value;
      }
    );
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
  name: "sourcesPage",
  components: { extCard },
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
      this.$fetchJSON("/api/v1/extension/list").then((data) => {
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
  setup(_props, { emit }) {
    emit("setTitle", "Extentions");
    const filt = useInBar();
    const filters = filt;
    const list = ref([]);
    const langs = ref(filt.langs);
    return { list, allLangs: [], filters, langs };
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
                    onReload: _ctx.reload,
                    exten
                  }, null, 8, ["onReload", "exten"])) : createCommentVNode("", true)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uc1BhZ2UuYWIzNTFiYzIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvZXh0Q2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvZXh0ZW5zaW9uc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGNsYXNzPVwicS1tYS1zbVwiIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgYCA6ICdiZy1saWdodCdcIj5cbiAgICA8cS1pdGVtIHN0eWxlPVwiaGVpZ2h0OiAxMDBweFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb250ZW50LWNlbnRlciBjb2wtZ3Jvd1wiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgYXNwZWN0LXJhdGlvOiAyMjUvMjI1OyB3aWR0aDogZml0LWNvbnRlbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIG5vLXNwaW5uZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgICAgICAgIDwvcS1pbWc+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGV4dGVuLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGV4dGVuLmxhbmcpIH19IHt7IGV4dGVuLnZlcnNpb25OYW1lIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiZXh0ZW4uaXNOc2Z3XCIgc3R5bGU9XCJjb2xvcjogcmVkXCI+MTgrPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHEtYnRuIG91dGxpbmUgY29sb3I9XCJibHVlXCIgQGNsaWNrPVwiSGFuZGxlRXh0XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiPnt7XG4gICAgICAgICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoVXBVbkluKVxuICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtaXRlbT5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGV4dGVudGlvbiB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdleHRDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBleHRlbjoge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPGV4dGVudGlvbj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsncmVsb2FkJ10sXG4gIGNvbXB1dGVkOiB7XG4gICAgVXBVbkluKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5leHRlbi5oYXNVcGRhdGUpIHJldHVybiAnVXBkYXRlJztcbiAgICAgIGlmICh0aGlzLmV4dGVuLmluc3RhbGxlZCkgcmV0dXJuICdVbmluc3RhbGwnO1xuICAgICAgcmV0dXJuICdJbnN0YWxsJztcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuICAgIGFzeW5jIEhhbmRsZUV4dCgpIHtcbiAgICAgIGlmICh0aGlzLmV4dGVuLmhhc1VwZGF0ZSkge1xuICAgICAgICBhd2FpdCB0aGlzLiRmZXRjaChgL2FwaS92MS9leHRlbnNpb24vdXBkYXRlLyR7dGhpcy5leHRlbi5wa2dOYW1lfWApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmV4dGVuLmluc3RhbGxlZCkge1xuICAgICAgICBhd2FpdCB0aGlzLiRmZXRjaChgL2FwaS92MS9leHRlbnNpb24vdW5pbnN0YWxsLyR7dGhpcy5leHRlbi5wa2dOYW1lfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy4kZmV0Y2goYC9hcGkvdjEvZXh0ZW5zaW9uL2luc3RhbGwvJHt0aGlzLmV4dGVuLnBrZ05hbWV9YCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdyZWxvYWQnKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBnZXRJbWdCbG9iKHRoaXMuZXh0ZW4uaWNvblVybCArICc/dXNlQ2FjaGU9JyArIHRoaXMudXNlQ2FjaGUpLnRoZW4oXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICB9XG4gICAgKTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7c3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSl9YCk7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8cS1saXN0IHYtZm9yPVwibGFuZyBpbiBmaWx0ZXJMaXN0XCIgOmtleT1cImxhbmdbMF1cIj5cbiAgICAgIDxkaXYgdi1pZj1cImxhbmdbMV0ubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWg0IHEtbWwteGwgcS1teS1sZ1wiPlxuICAgICAgICB7eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGFuZ1swXSkgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHEtaW50ZXJzZWN0aW9uXG4gICAgICAgIHYtZm9yPVwiKGV4dGVuLCBpbmRleCkgaW4gbGFuZ1sxXVwiXG4gICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMCVcIlxuICAgICAgICBjbGFzcz1cImZsZXgtc2hyaW5rXCJcbiAgICAgID5cbiAgICAgICAgPGV4dENhcmRcbiAgICAgICAgICBAcmVsb2FkPVwicmVsb2FkXCJcbiAgICAgICAgICB2LWlmPVwiIWV4dGVuLm9ic29sZXRlIHx8IGV4dGVuLmluc3RhbGxlZFwiXG4gICAgICAgICAgOmV4dGVuPVwiZXh0ZW5cIlxuICAgICAgICA+PC9leHRDYXJkPlxuICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICA8L3EtbGlzdD5cbiAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICBzdHlsZT1cIlxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgXCJcbiAgICAgIDpzaG93aW5nPVwiZmlsdGVyTGlzdC5sZW5ndGggPT0gM1wiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgID5cbiAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtcbiAgZXh0ZW50aW9uLFxuICBncm91cGVkRXh0ZW50aW9uLFxuICBpc0FyckV4dGVudGlvblxufSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBleHRDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvZXh0Q2FyZC52dWUnO1xuaW1wb3J0IHsgbGFuZ1NvcnRDbXAgfSBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2xhbmd1YWdlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvRmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdzb3VyY2VzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgZXh0Q2FyZCB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHJlbG9hZCgpIHtcbiAgICAgIHRoaXMuJGZldGNoSlNPTignL2FwaS92MS9leHRlbnNpb24vbGlzdCcpLnRoZW4oKGRhdGE6IGV4dGVudGlvbltdKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdyb3VwRXh0ZW5zaW9ucyhleHRlbnNpb25zOiBleHRlbnRpb25bXSkge1xuICAgICAgdGhpcy5hbGxMYW5ncyA9IFtdOyAvLyBlbXB0eSB0aGUgYXJyYXlcbiAgICAgIGNvbnN0IHNvcnRlZEV4dGVuaW9uczogZ3JvdXBlZEV4dGVudGlvbiA9IHtcbiAgICAgICAgWydpbnN0YWxsZWQnXTogW10gYXMgZXh0ZW50aW9uW10sXG4gICAgICAgICd1cGRhdGVzIHBlbmRpbmcnOiBbXSBhcyBleHRlbnRpb25bXVxuICAgICAgfTtcbiAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhbmcgPSBleHRlbnNpb24ubGFuZztcbiAgICAgICAgaWYgKHNvcnRlZEV4dGVuaW9uc1tsYW5nXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzb3J0ZWRFeHRlbmlvbnNbbGFuZ10gPSBbXSBhcyBleHRlbnRpb25bXTtcbiAgICAgICAgICBpZiAobGFuZyAhPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTGFuZ3MucHVzaChsYW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dGVuc2lvbi5pbnN0YWxsZWQpIHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uLmhhc1VwZGF0ZSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyRXh0ZW50aW9uKHNvcnRlZEV4dGVuaW9uc1sndXBkYXRlcyBwZW5kaW5nJ10pKVxuICAgICAgICAgICAgICBzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddLnB1c2goZXh0ZW5zaW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzQXJyRXh0ZW50aW9uKHNvcnRlZEV4dGVuaW9uc1snaW5zdGFsbGVkJ10pKVxuICAgICAgICAgICAgICBzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddLnB1c2goZXh0ZW5zaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGVkRXh0ZW5pb25zW2xhbmddPy5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFsbExhbmdzLnNvcnQobGFuZ1NvcnRDbXApO1xuICAgICAgY29uc3QgcmVzdWx0OiBbc3RyaW5nLCBleHRlbnRpb25bXV1bXSA9IFtcbiAgICAgICAgW1xuICAgICAgICAgICd1cGRhdGVzIHBlbmRpbmcnLFxuICAgICAgICAgIGlzQXJyRXh0ZW50aW9uKHNvcnRlZEV4dGVuaW9uc1sndXBkYXRlcyBwZW5kaW5nJ10pXG4gICAgICAgICAgICA/IHNvcnRlZEV4dGVuaW9uc1sndXBkYXRlcyBwZW5kaW5nJ11cbiAgICAgICAgICAgIDogW11cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdpbnN0YWxsZWQnLFxuICAgICAgICAgIGlzQXJyRXh0ZW50aW9uKHNvcnRlZEV4dGVuaW9uc1snaW5zdGFsbGVkJ10pXG4gICAgICAgICAgICA/IHNvcnRlZEV4dGVuaW9uc1snaW5zdGFsbGVkJ11cbiAgICAgICAgICAgIDogW11cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdhbGwnLFxuICAgICAgICAgIGlzQXJyRXh0ZW50aW9uKHNvcnRlZEV4dGVuaW9uc1snYWxsJ10pID8gc29ydGVkRXh0ZW5pb25zWydhbGwnXSA6IFtdXG4gICAgICAgIF1cbiAgICAgIF07XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0Y3VycmxhbmdzKHRoaXMuYWxsTGFuZ3MpO1xuICAgICAgY29uc3QgbGFuZ0V4dDogW3N0cmluZywgZXh0ZW50aW9uW11dW10gPSB0aGlzLmFsbExhbmdzXG4gICAgICAgIC5tYXAoKGxhbmcpID0+IFtsYW5nLCBzb3J0ZWRFeHRlbmlvbnNbbGFuZ11dKVxuICAgICAgICAuZmlsdGVyKChlbGUpID0+IGVsZVsxXSAhPSB1bmRlZmluZWQpIGFzIFtzdHJpbmcsIGV4dGVudGlvbltdXVtdO1xuICAgICAgY29uc3QgdG1wID0gcmVzdWx0LmNvbmNhdChsYW5nRXh0KTtcbiAgICAgIHJldHVybiB0bXA7XG4gICAgfSxcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxhbmdHcm91cHMoKTogW3N0cmluZywgZXh0ZW50aW9uW11dW10ge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBFeHRlbnNpb25zKHRoaXMubGlzdCk7XG4gICAgfSxcbiAgICBmaWx0ZXJMaXN0KCk6IFtzdHJpbmcsIGV4dGVudGlvbltdXVtdIHtcbiAgICAgIGxldCBsaXN0ID0gdGhpcy5sYW5nR3JvdXBzO1xuICAgICAgbGlzdCA9IGxpc3QubWFwKChlbGUpID0+IHtcbiAgICAgICAgbGV0IHRtcCA9IGVsZVsxXTtcbiAgICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5WydxJ10pIHtcbiAgICAgICAgICB0bXAgPSB0bXAuZmlsdGVyKChtYW5nYSkgPT5cbiAgICAgICAgICAgIG1hbmdhLm5hbWVcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGAke3RoaXMuJHJvdXRlLnF1ZXJ5WydxJ119YC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxhbmdzLmluY2x1ZGVzKGVsZVswXSkpIHRtcCA9IFtdO1xuICAgICAgICByZXR1cm4gW2VsZVswXSwgdG1wXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gIH0sXG4gIHNldHVwKF9wcm9wcywgeyBlbWl0IH0pIHtcbiAgICBlbWl0KCdzZXRUaXRsZScsICdFeHRlbnRpb25zJyk7XG4gICAgY29uc3QgZmlsdCA9IEZpbHRlcnMoKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gZmlsdDtcbiAgICBjb25zdCBsaXN0ID0gcmVmKDxleHRlbnRpb25bXT5bXSk7XG4gICAgY29uc3QgbGFuZ3MgPSByZWYoZmlsdC5sYW5ncyk7XG4gICAgcmV0dXJuIHsgbGlzdCwgYWxsTGFuZ3M6IDxzdHJpbmdbXT5bXSwgZmlsdGVycywgbGFuZ3MgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJGaWx0ZXJzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsUUFBUTtBQUFBLEVBQ2hCLFVBQVU7QUFBQSxJQUNSLFNBQWlCO0FBQ2YsVUFBSSxLQUFLLE1BQU07QUFBa0IsZUFBQTtBQUNqQyxVQUFJLEtBQUssTUFBTTtBQUFrQixlQUFBO0FBQzFCLGFBQUE7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1Asc0JBQXNCLFFBQXdCO0FBQ3JDLGFBQUEsT0FBTyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsT0FBTyxNQUFNLENBQUM7QUFBQSxJQUN4RDtBQUFBLElBQ0EsTUFBTSxZQUFZO0FBQ1osVUFBQSxLQUFLLE1BQU0sV0FBVztBQUN4QixjQUFN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
