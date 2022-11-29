import { Q as QIntersection } from "./QIntersection.5a6859cd.js";
import { Q as QList } from "./QList.e87441cd.js";
import { Q as QInnerLoading } from "./QInnerLoading.dc9c40c5.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { i as isArrExtention } from "./models.4021c4b7.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { g as getImgBlob } from "./usefull.5da5779b.js";
import { f as defineComponent, r as ref, _ as _export_sfc, D as withDirectives, j as openBlock, k as createBlock, m as withCtx, n as createVNode, v as createBaseVNode, q as createTextVNode, t as toDisplayString, y as createElementBlock, p as createCommentVNode, s as normalizeClass, u as resolveComponent, z as renderList, F as Fragment } from "./index.75e4774b.js";
import { l as langSortCmp, u as useInBar } from "./Filters.b563a00e.js";
import "./Intersection.1f7cb92e.js";
import "./QSpinner.6511ee07.js";
import "./use-dark.63b90c22.js";
import "./use-transition.34947ede.js";
import "./QIcon.aa032244.js";
import "./dom.3bfc77a6.js";
import "./fetcher.d026f468.js";
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
  return withDirectives((openBlock(), createBlock(QCard, {
    flat: "",
    class: "q-ma-sm"
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
                  class: normalizeClass(_ctx.$q.dark.isActive ? `text-white` : `text-dark`)
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
  })), [
    [Ripple]
  ]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uc1BhZ2UuZjhiYjE1ZTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2V4dGFudGlvbnMvZXh0Q2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvZXh0ZW5zaW9uc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1jYXJkIHYtcmlwcGxlIGZsYXQgY2xhc3M9XCJxLW1hLXNtXCI+XG4gICAgPHEtaXRlbSBzdHlsZT1cImhlaWdodDogMTAwcHhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29udGVudC1jZW50ZXIgY29sLWdyb3dcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pbWdcbiAgICAgICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIHNwaW5uZXItY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwcHg7IGFzcGVjdC1yYXRpbzogMjI1LzIyNTsgd2lkdGg6IGZpdC1jb250ZW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgICAgICAgICA6c2hvd2luZz1cIiFpbWdkYXRhXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgICA8L3EtaW1nPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJmbGV4LWdyb3dcIj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGNhcGl0YWxpemVGaXJzdExldHRlcihleHRlbi5uYW1lKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvblxuICAgICAgICAgICAgPnt7IGNhcGl0YWxpemVGaXJzdExldHRlcihleHRlbi5sYW5nKSB9fSB7eyBleHRlbi52ZXJzaW9uTmFtZSB9fVxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImV4dGVuLmlzTnNmd1wiIHN0eWxlPVwiY29sb3I6IHJlZFwiPjE4Kzwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxxLWJ0biBvdXRsaW5lIGNvbG9yPVwiYmx1ZVwiIEBjbGljaz1cIkhhbmRsZUV4dFwiPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgdGV4dC13aGl0ZWAgOiBgdGV4dC1kYXJrYFwiXG4gICAgICAgICAgICA+e3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFVwVW5JbikgfX08L3EtaXRlbS1sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGV4dGVudGlvbiB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ2V4dENhcmQnLFxuICBwcm9wczoge1xuICAgIGV4dGVuOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8ZXh0ZW50aW9uPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBlbWl0czogWydyZWxvYWQnXSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBVcFVuSW4oKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmV4dGVuLmhhc1VwZGF0ZSkgcmV0dXJuICdVcGRhdGUnO1xuICAgICAgaWYgKHRoaXMuZXh0ZW4uaW5zdGFsbGVkKSByZXR1cm4gJ1VuaW5zdGFsbCc7XG4gICAgICByZXR1cm4gJ0luc3RhbGwnO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG4gICAgYXN5bmMgSGFuZGxlRXh0KCkge1xuICAgICAgaWYgKHRoaXMuZXh0ZW4uaGFzVXBkYXRlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGZldGNoKGAvYXBpL3YxL2V4dGVuc2lvbi91cGRhdGUvJHt0aGlzLmV4dGVuLnBrZ05hbWV9YCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZXh0ZW4uaW5zdGFsbGVkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuJGZldGNoKGAvYXBpL3YxL2V4dGVuc2lvbi91bmluc3RhbGwvJHt0aGlzLmV4dGVuLnBrZ05hbWV9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLiRmZXRjaChgL2FwaS92MS9leHRlbnNpb24vaW5zdGFsbC8ke3RoaXMuZXh0ZW4ucGtnTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ3JlbG9hZCcpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGdldEltZ0Jsb2IodGhpcy5leHRlbi5pY29uVXJsICsgJz91c2VDYWNoZT0nICsgdGhpcy51c2VDYWNoZSkudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICApO1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKGAkeyRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VDYWNoZScpfWApO1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIHJldHVybiB7IHVzZUNhY2hlLCBpbWdkYXRhIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdCB2LWZvcj1cImxhbmcgaW4gZmlsdGVyTGlzdFwiIDprZXk9XCJsYW5nWzBdXCI+XG4gICAgICA8ZGl2IHYtaWY9XCJsYW5nWzFdLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1oNCBxLW1sLXhsIHEtbXktbGdcIj5cbiAgICAgICAge3sgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxhbmdbMF0pIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxxLWludGVyc2VjdGlvblxuICAgICAgICB2LWZvcj1cIihleHRlbiwgaW5kZXgpIGluIGxhbmdbMV1cIlxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDAlXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4LXNocmlua1wiXG4gICAgICA+XG4gICAgICAgIDxleHRDYXJkXG4gICAgICAgICAgQHJlbG9hZD1cInJlbG9hZFwiXG4gICAgICAgICAgdi1pZj1cIiFleHRlbi5vYnNvbGV0ZSB8fCBleHRlbi5pbnN0YWxsZWRcIlxuICAgICAgICAgIDpleHRlbj1cImV4dGVuXCJcbiAgICAgICAgPjwvZXh0Q2FyZD5cbiAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgPC9xLWxpc3Q+XG4gICAgPHEtaW5uZXItbG9hZGluZ1xuICAgICAgc3R5bGU9XCJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIFwiXG4gICAgICA6c2hvd2luZz1cImZpbHRlckxpc3QubGVuZ3RoID09IDNcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICA+XG4gICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7XG4gIGV4dGVudGlvbixcbiAgZ3JvdXBlZEV4dGVudGlvbixcbiAgaXNBcnJFeHRlbnRpb25cbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgZXh0Q2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL2V4dENhcmQudnVlJztcbmltcG9ydCB7IGxhbmdTb3J0Q21wIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZXh0YW50aW9ucy9sYW5ndWFnZSc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICdzcmMvY29tcG9uZW50cy9leHRhbnRpb25zL0ZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnc291cmNlc1BhZ2UnLFxuICBjb21wb25lbnRzOiB7IGV4dENhcmQgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVsb2FkKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICByZWxvYWQoKSB7XG4gICAgICB0aGlzLiRmZXRjaEpTT04oJy9hcGkvdjEvZXh0ZW5zaW9uL2xpc3QnKS50aGVuKChkYXRhOiBleHRlbnRpb25bXSkgPT4ge1xuICAgICAgICB0aGlzLmxpc3QgPSBkYXRhO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBncm91cEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogZXh0ZW50aW9uW10pIHtcbiAgICAgIHRoaXMuYWxsTGFuZ3MgPSBbXTsgLy8gZW1wdHkgdGhlIGFycmF5XG4gICAgICBjb25zdCBzb3J0ZWRFeHRlbmlvbnM6IGdyb3VwZWRFeHRlbnRpb24gPSB7XG4gICAgICAgIFsnaW5zdGFsbGVkJ106IFtdIGFzIGV4dGVudGlvbltdLFxuICAgICAgICAndXBkYXRlcyBwZW5kaW5nJzogW10gYXMgZXh0ZW50aW9uW11cbiAgICAgIH07XG4gICAgICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xuICAgICAgICBjb25zdCBsYW5nID0gZXh0ZW5zaW9uLmxhbmc7XG4gICAgICAgIGlmIChzb3J0ZWRFeHRlbmlvbnNbbGFuZ10gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc29ydGVkRXh0ZW5pb25zW2xhbmddID0gW10gYXMgZXh0ZW50aW9uW107XG4gICAgICAgICAgaWYgKGxhbmcgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLmFsbExhbmdzLnB1c2gobGFuZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHRlbnNpb24uaW5zdGFsbGVkKSB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbi5oYXNVcGRhdGUpIHtcbiAgICAgICAgICAgIGlmIChpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddKSlcbiAgICAgICAgICAgICAgc29ydGVkRXh0ZW5pb25zWyd1cGRhdGVzIHBlbmRpbmcnXS5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddKSlcbiAgICAgICAgICAgICAgc29ydGVkRXh0ZW5pb25zWydpbnN0YWxsZWQnXS5wdXNoKGV4dGVuc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRlZEV4dGVuaW9uc1tsYW5nXT8ucHVzaChleHRlbnNpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbGxMYW5ncy5zb3J0KGxhbmdTb3J0Q21wKTtcbiAgICAgIGNvbnN0IHJlc3VsdDogW3N0cmluZywgZXh0ZW50aW9uW11dW10gPSBbXG4gICAgICAgIFtcbiAgICAgICAgICAndXBkYXRlcyBwZW5kaW5nJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddKVxuICAgICAgICAgICAgPyBzb3J0ZWRFeHRlbmlvbnNbJ3VwZGF0ZXMgcGVuZGluZyddXG4gICAgICAgICAgICA6IFtdXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnaW5zdGFsbGVkJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddKVxuICAgICAgICAgICAgPyBzb3J0ZWRFeHRlbmlvbnNbJ2luc3RhbGxlZCddXG4gICAgICAgICAgICA6IFtdXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnYWxsJyxcbiAgICAgICAgICBpc0FyckV4dGVudGlvbihzb3J0ZWRFeHRlbmlvbnNbJ2FsbCddKSA/IHNvcnRlZEV4dGVuaW9uc1snYWxsJ10gOiBbXVxuICAgICAgICBdXG4gICAgICBdO1xuICAgICAgdGhpcy5maWx0ZXJzLnNldGN1cnJsYW5ncyh0aGlzLmFsbExhbmdzKTtcbiAgICAgIGNvbnN0IGxhbmdFeHQ6IFtzdHJpbmcsIGV4dGVudGlvbltdXVtdID0gdGhpcy5hbGxMYW5nc1xuICAgICAgICAubWFwKChsYW5nKSA9PiBbbGFuZywgc29ydGVkRXh0ZW5pb25zW2xhbmddXSlcbiAgICAgICAgLmZpbHRlcigoZWxlKSA9PiBlbGVbMV0gIT0gdW5kZWZpbmVkKSBhcyBbc3RyaW5nLCBleHRlbnRpb25bXV1bXTtcbiAgICAgIGNvbnN0IHRtcCA9IHJlc3VsdC5jb25jYXQobGFuZ0V4dCk7XG4gICAgICByZXR1cm4gdG1wO1xuICAgIH0sXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsYW5nR3JvdXBzKCk6IFtzdHJpbmcsIGV4dGVudGlvbltdXVtdIHtcbiAgICAgIHJldHVybiB0aGlzLmdyb3VwRXh0ZW5zaW9ucyh0aGlzLmxpc3QpO1xuICAgIH0sXG4gICAgZmlsdGVyTGlzdCgpOiBbc3RyaW5nLCBleHRlbnRpb25bXV1bXSB7XG4gICAgICBsZXQgbGlzdCA9IHRoaXMubGFuZ0dyb3VwcztcbiAgICAgIGxpc3QgPSBsaXN0Lm1hcCgoZWxlKSA9PiB7XG4gICAgICAgIGxldCB0bXAgPSBlbGVbMV07XG4gICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeVsncSddKSB7XG4gICAgICAgICAgdG1wID0gdG1wLmZpbHRlcigobWFuZ2EpID0+XG4gICAgICAgICAgICBtYW5nYS5uYW1lXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhgJHt0aGlzLiRyb3V0ZS5xdWVyeVsncSddfWAudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sYW5ncy5pbmNsdWRlcyhlbGVbMF0pKSB0bXAgPSBbXTtcbiAgICAgICAgcmV0dXJuIFtlbGVbMF0sIHRtcF07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9LFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0VGl0bGUnLCAnRXh0ZW50aW9ucycpO1xuICAgIGNvbnN0IGZpbHQgPSBGaWx0ZXJzKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IGZpbHQ7XG4gICAgY29uc3QgbGlzdCA9IHJlZig8ZXh0ZW50aW9uW10+W10pO1xuICAgIGNvbnN0IGxhbmdzID0gcmVmKGZpbHQubGFuZ3MpO1xuICAgIHJldHVybiB7IGxpc3QsIGFsbExhbmdzOiA8c3RyaW5nW10+W10sIGZpbHRlcnMsIGxhbmdzIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiRmlsdGVycyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sQ0FBQyxRQUFRO0FBQUEsRUFDaEIsVUFBVTtBQUFBLElBQ1IsU0FBaUI7QUFDZixVQUFJLEtBQUssTUFBTTtBQUFrQixlQUFBO0FBQ2pDLFVBQUksS0FBSyxNQUFNO0FBQWtCLGVBQUE7QUFDMUIsYUFBQTtBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxzQkFBc0IsUUFBd0I7QUFDckMsYUFBQSxPQUFPLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixPQUFPLE1BQU0sQ0FBQztBQUFBLElBQ3hEO0FBQUEsSUFDQSxNQUFNLFlBQVk7QUFDWixVQUFBLEtBQUss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
