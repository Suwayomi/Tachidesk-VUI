import { Q as QIntersection } from "./QIntersection.c01880aa.js";
import { Q as QList } from "./QList.323c1084.js";
import { Q as QInnerLoading } from "./QInnerLoading.480505c0.js";
import { Q as QPage } from "./QPage.8c90446c.js";
import { i as isArrExtention } from "./models.4021c4b7.js";
import { g as getImgBlob, Q as QImg } from "./usefull.8778cf5c.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.f373f416.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { storeGet } from "./StoreStuff.45ae8e68.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, m as createVNode, u as createBaseVNode, p as createTextVNode, t as toDisplayString, v as createElementBlock, n as createCommentVNode, q as normalizeClass, s as resolveComponent, x as renderList, F as Fragment } from "./index.5cc93081.js";
import { l as langSortCmp, u as useInBar } from "./Filters.e6df5390.js";
import "./Intersection.79320c52.js";
import "./QSpinner.7d14a7f2.js";
import "./use-dark.1adac86a.js";
import "./use-transition.651acf9e.js";
import "./axios.01f4fb44.js";
import "./QIcon.129c8e27.js";
import "./Ripple.3a8ac2e1.js";
import "./dom.e2e78a08.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uc1BhZ2UuNjY4M2RiMWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvZXh0Q2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvZXh0ZW5zaW9uc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIGNsYXNzPVwicS1tYS1zbVwiIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgYCA6ICdiZy1saWdodCdcIj5cbiAgICA8cS1pdGVtIHN0eWxlPVwiaGVpZ2h0OiAxMDBweFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb250ZW50LWNlbnRlciBjb2wtZ3Jvd1wiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgYXNwZWN0LXJhdGlvOiAyMjUvMjI1OyB3aWR0aDogZml0LWNvbnRlbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIG5vLXNwaW5uZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgICAgICAgIDwvcS1pbWc+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGV4dGVuLm5hbWUpIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICA+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGV4dGVuLmxhbmcpIH19IHt7IGV4dGVuLnZlcnNpb25OYW1lIH19XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiZXh0ZW4uaXNOc2Z3XCIgc3R5bGU9XCJjb2xvcjogcmVkXCI+MTgrPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHEtYnRuIG91dGxpbmUgY29sb3I9XCJibHVlXCIgQGNsaWNrPVwiSGFuZGxlRXh0XCI+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiPnt7XG4gICAgICAgICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoVXBVbkluKVxuICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtaXRlbT5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGV4dGVudGlvbiB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdleHRDYXJkJyxcbiAgcHJvcHM6IHtcbiAgICBleHRlbjoge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPGV4dGVudGlvbj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsncmVsb2FkJ10sXG4gIGNvbXB1dGVkOiB7XG4gICAgVXBVbkluKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5leHRlbi5oYXNVcGRhdGUpIHJldHVybiAnVXBkYXRlJztcbiAgICAgIGlmICh0aGlzLmV4dGVuLmluc3RhbGxlZCkgcmV0dXJuICdVbmluc3RhbGwnO1xuICAgICAgcmV0dXJuICdJbnN0YWxsJztcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuICAgIGFzeW5jIEhhbmRsZUV4dCgpIHtcbiAgICAgIGlmICh0aGlzLmV4dGVuLmhhc1VwZGF0ZSkge1xuICAgICAgICBhd2FpdCB0aGlzLiRhcGkuZ2V0KGAvYXBpL3YxL2V4dGVuc2lvbi91cGRhdGUvJHt0aGlzLmV4dGVuLnBrZ05hbWV9YCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZXh0ZW4uaW5zdGFsbGVkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgICAgYC9hcGkvdjEvZXh0ZW5zaW9uL3VuaW5zdGFsbC8ke3RoaXMuZXh0ZW4ucGtnTmFtZX1gXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLiRhcGkuZ2V0KGAvYXBpL3YxL2V4dGVuc2lvbi9pbnN0YWxsLyR7dGhpcy5leHRlbi5wa2dOYW1lfWApO1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgncmVsb2FkJyk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgZ2V0SW1nQmxvYih0aGlzLmV4dGVuLmljb25VcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKGAke3N0b3JlR2V0KCd1c2VDYWNoZScsIHRydWUpfWApO1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIHJldHVybiB7IHVzZUNhY2hlLCBpbWdkYXRhIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdCB2LWZvcj1cImxhbmcgaW4gZmlsdGVyTGlzdFwiIDprZXk9XCJsYW5nWzBdXCI+XG4gICAgICA8ZGl2IHYtaWY9XCJsYW5nWzFdLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1oNCBxLW1sLXhsIHEtbXktbGdcIj5cbiAgICAgICAge3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxhbmdbMF0pIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxxLWludGVyc2VjdGlvblxuICAgICAgICB2LWZvcj1cIihleHRlbiwgaW5kZXgpIGluIGxhbmdbMV1cIlxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDAlXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4LXNocmlua1wiXG4gICAgICA+XG4gICAgICAgIDxleHRDYXJkXG4gICAgICAgICAgQHJlbG9hZD1cInJlbG9hZFwiXG4gICAgICAgICAgdi1pZj1cIiFleHRlbi5vYnNvbGV0ZSB8fCBleHRlbi5pbnN0YWxsZWRcIlxuICAgICAgICAgIDpleHRlbj1cImV4dGVuXCJcbiAgICAgICAgPjwvZXh0Q2FyZD5cbiAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgPC9xLWxpc3Q+XG4gICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgc3R5bGU9XCJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIFwiXG4gICAgICA6c2hvd2luZz1cImZpbHRlckxpc3QubGVuZ3RoID09IDNcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICA+XG4gICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7XG4gIGV4dGVudGlvbixcbiAgZ3JvdXBlZEV4dGVudGlvbixcbiAgaXNBcnJFeHRlbnRpb25cbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgZXh0Q2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2V4dENhcmQudnVlJztcbmltcG9ydCB7IGxhbmdTb3J0Q21wIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9sYW5ndWFnZSc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL0ZpbHRlcnMnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NvdXJjZXNQYWdlJyxcbiAgY29tcG9uZW50czogeyBleHRDYXJkIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVsb2FkKCkge1xuICAgICAgdGhpcy4kYXBpXG4gICAgICAgIC5nZXQoJy9hcGkvdjEvZXh0ZW5zaW9uL2xpc3QnKVxuICAgICAgICAudGhlbigoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8ZXh0ZW50aW9uW10+KSA9PiB7XG4gICAgICAgICAgdGhpcy5saXN0ID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBncm91cEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogZXh0ZW50aW9uW10pIHtcbiAgICAgIHRoaXMuYWxsTGFuZ3MgPSBbXTsgLy8gZW1wdHkgdGhlIGFycmF5XG4gICAgICBjb25zdCBzb3J0ZWRFeHRlbmlvbnM6IGdyb3VwZWRFeHRlbnRpb24gPSB7XG4gICAgICAgIFsnaW5zdGFsbGVkJ106IFtdIGFzIGV4dGVudGlvbltdLFxuICAgICAgICAndXBkYXRlcyBwZW5kaW5nJzogW10gYXMgZXh0ZW50aW9uW11cbiAgICAgIH07XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBjb25zdCBsYW5nID0gZXh0ZW5zaW9uLmxhbmc7XG4gICAgICAgIGlmIChzb3J0ZWRFeHRlbmlvbnNbbGFuZ10gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc29ydGVkRXh0ZW5pb25zW2xhbmddID0gW10gYXMgZXh0ZW50aW9uW107XG4gICAgICAgICAgaWYgKGxhbmcgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLmFsbExhbmdzLnB1c2gobGFuZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHRlbnNpb24uaW5zdGFsbGVkKSB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbi5oYXNVcGRhdGUpIHtcbiAgICAgICAgICAgIGlmIChpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddKSlcbiAgICAgICAgICAgICAgc29ydGVkRXh0ZW5pb25zWyd1cGRhdGVzIHBlbmRpbmcnXS5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddKSlcbiAgICAgICAgICAgICAgc29ydGVkRXh0ZW5pb25zWydpbnN0YWxsZWQnXS5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRlZEV4dGVuaW9uc1tsYW5nXT8ucHVzaChleHRlbnNpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbGxMYW5ncy5zb3J0KGxhbmdTb3J0Q21wKTtcbiAgICAgIGNvbnN0IHJlc3VsdDogW3N0cmluZywgZXh0ZW50aW9uW11dW10gPSBbXG4gICAgICAgIFtcbiAgICAgICAgICAndXBkYXRlcyBwZW5kaW5nJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddKVxuICAgICAgICAgICAgPyBzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddXG4gICAgICAgICAgICA6IFtdXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnaW5zdGFsbGVkJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddKVxuICAgICAgICAgICAgPyBzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddXG4gICAgICAgICAgICA6IFtdXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnYWxsJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2FsbCddKSA/IHNvcnRlZEV4dGVuaW9uc1snYWxsJ10gOiBbXVxuICAgICAgICBdXG4gICAgICBdO1xuICAgICAgdGhpcy5maWx0ZXJzLnNldGN1cnJsYW5ncyh0aGlzLmFsbExhbmdzKTtcbiAgICAgIGNvbnN0IGxhbmdFeHQ6IFtzdHJpbmcsIGV4dGVudGlvbltdXVtdID0gdGhpcy5hbGxMYW5nc1xuICAgICAgICAubWFwKChsYW5nKSA9PiBbbGFuZywgc29ydGVkRXh0ZW5pb25zW2xhbmddXSlcbiAgICAgICAgLmZpbHRlcigoZWxlKSA9PiBlbGVbMV0gIT0gdW5kZWZpbmVkKSBhcyBbc3RyaW5nLCBleHRlbnRpb25bXV1bXTtcbiAgICAgIGNvbnN0IHRtcCA9IHJlc3VsdC5jb25jYXQobGFuZ0V4dCk7XG4gICAgICByZXR1cm4gdG1wO1xuICAgIH0sXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsYW5nR3JvdXBzKCk6IFtzdHJpbmcsIGV4dGVudGlvbltdXVtdIHtcbiAgICAgIHJldHVybiB0aGlzLmdyb3VwRXh0ZW5zaW9ucyh0aGlzLmxpc3QpO1xuICAgIH0sXG4gICAgZmlsdGVyTGlzdCgpOiBbc3RyaW5nLCBleHRlbnRpb25bXV1bXSB7XG4gICAgICBsZXQgbGlzdCA9IHRoaXMubGFuZ0dyb3VwcztcbiAgICAgIGxpc3QgPSBsaXN0Lm1hcCgoZWxlKSA9PiB7XG4gICAgICAgIGxldCB0bXAgPSBlbGVbMV07XG4gICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeVsncSddKSB7XG4gICAgICAgICAgdG1wID0gdG1wLmZpbHRlcigobWFuZ2EpID0+XG4gICAgICAgICAgICBtYW5nYS5uYW1lXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhgJHt0aGlzLiRyb3V0ZS5xdWVyeVsncSddfWAudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sYW5ncy5pbmNsdWRlcyhlbGVbMF0pKSB0bXAgPSBbXTtcbiAgICAgICAgcmV0dXJuIFtlbGVbMF0sIHRtcF07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9LFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0VGl0bGUnLCAnRXh0ZW50aW9ucycpO1xuICAgIGNvbnN0IGZpbHQgPSBGaWx0ZXJzKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IGZpbHQ7XG4gICAgY29uc3QgbGlzdCA9IHJlZig8ZXh0ZW50aW9uW10+W10pO1xuICAgIGNvbnN0IGxhbmdzID0gcmVmKGZpbHQubGFuZ3MpO1xuICAgIHJldHVybiB7IGxpc3QsIGFsbExhbmdzOiA8c3RyaW5nW10+W10sIGZpbHRlcnMsIGxhbmdzIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiRmlsdGVycyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxDQUFDLFFBQVE7QUFBQSxFQUNoQixVQUFVO0FBQUEsSUFDUixTQUFpQjtBQUNmLFVBQUksS0FBSyxNQUFNO0FBQWtCLGVBQUE7QUFDakMsVUFBSSxLQUFLLE1BQU07QUFBa0IsZUFBQTtBQUMxQixhQUFBO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLHNCQUFzQixRQUF3QjtBQUNyQyxhQUFB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
