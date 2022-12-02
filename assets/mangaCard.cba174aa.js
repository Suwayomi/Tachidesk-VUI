import { Q as QInnerLoading } from "./QInnerLoading.480505c0.js";
import { Q as QBadge } from "./QBadge.4fa2216a.js";
import { g as getImgBlob, Q as QImg } from "./usefull.8778cf5c.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QIntersection } from "./QIntersection.c01880aa.js";
import { R as Ripple } from "./Ripple.3a8ac2e1.js";
import { storeGet } from "./StoreStuff.45ae8e68.js";
import { d as defineComponent, r as ref, _ as _export_sfc, s as resolveComponent, f as openBlock, j as createBlock, k as withCtx, B as withDirectives, q as normalizeClass, a6 as normalizeStyle, m as createVNode, u as createBaseVNode, p as createTextVNode, n as createCommentVNode, v as createElementBlock, t as toDisplayString } from "./index.5cc93081.js";
var mangaCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "MangaCard",
  props: {
    manga: {
      type: Object,
      default: () => Object
    },
    Display: {
      type: String,
      default: "compact"
    }
  },
  computed: {
    listdivClass() {
      return this.Display == "list" ? "text-left q-ml-md text-h5 col-shrink" : "text-center text-subtitle1";
    }
  },
  mounted: function() {
    getImgBlob(this.manga.thumbnailUrl + "?useCache=" + this.useCache).then(
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
const _hoisted_1 = {
  class: "transparent absolute-top q-mt-xs q-ml-xs",
  style: { "padding": "0" }
};
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "row items-center col-grow no-wrap" };
const _hoisted_4 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createBlock(QIntersection, null, {
    default: withCtx(() => [
      withDirectives((openBlock(), createBlock(QCard, {
        flat: "",
        class: normalizeClass(["my-card", !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? `q-ma-sm` : `q-ma-xs`]),
        style: normalizeStyle(_ctx.Display == `list` ? `` : `background: transparent`)
      }, {
        default: withCtx(() => [
          createVNode(_component_router_link, {
            to: `/manga/` + _ctx.manga.id,
            class: normalizeClass(["cursor-pointer", _ctx.$q.dark.isActive ? `light` : `dark`]),
            style: { "text-decoration": "none" }
          }, {
            default: withCtx(() => [
              _ctx.Display != `list` ? (openBlock(), createBlock(QImg, {
                key: 0,
                src: _ctx.imgdata,
                loading: "lazy",
                "spinner-color": "white",
                style: { "max-width": "100%", "aspect-ratio": "225/350" },
                class: normalizeClass([_ctx.$q.dark.isActive ? `bg-dark` : `bg-light`, "rounded-borders"]),
                "img-style": _ctx.manga.inLibrary ? { filter: "brightness(0.4)" } : {},
                alt: _ctx.manga.title
              }, {
                default: withCtx(() => [
                  createVNode(QInnerLoading, {
                    showing: !_ctx.imgdata,
                    color: "primary"
                  }, null, 8, ["showing"]),
                  createBaseVNode("div", _hoisted_1, [
                    _ctx.manga.inLibrary ? (openBlock(), createBlock(QBadge, {
                      key: 0,
                      color: "blue",
                      style: { "width": "min-content", "padding": "5px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" In Library ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _ctx.Display == `compact` ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "absolute-bottom text-subtitle1 text-center",
                    title: _ctx.manga.title,
                    style: { "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "height": "3.5rem" }
                  }, toDisplayString(_ctx.manga.title), 9, _hoisted_2)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["src", "class", "img-style", "alt"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_3, [
                _ctx.Display == `list` ? (openBlock(), createBlock(QImg, {
                  key: 0,
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
                      color: "primary"
                    }, null, 8, ["showing"])
                  ]),
                  _: 1
                }, 8, ["src"])) : createCommentVNode("", true),
                _ctx.Display != `compact` ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.listdivClass),
                  title: _ctx.manga.title,
                  style: normalizeStyle([{ "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "overflow": "hidden", "width": "100%" }, _ctx.Display == `list` ? `` : `height: 5.25rem;`])
                }, toDisplayString(_ctx.manga.title), 15, _hoisted_4)) : createCommentVNode("", true),
                _ctx.manga.inLibrary && _ctx.Display == `list` ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(["justify-end flex items-end col-grow", !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? `q-mr-lg` : `q-mr-xs`])
                }, [
                  createVNode(QBadge, {
                    color: "blue",
                    style: { "width": "min-content", "padding": "5px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" In Library ")
                    ]),
                    _: 1
                  })
                ], 2)) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["to", "class"])
        ]),
        _: 1
      }, 8, ["class", "style"])), [
        [Ripple]
      ])
    ]),
    _: 1
  });
}
var mangaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8b085dee"], ["__file", "mangaCard.vue"]]);
export { mangaCard as m };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FDYXJkLmNiYTE3NGFhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvbWFuZ2FDYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtaW50ZXJzZWN0aW9uPlxuICAgIDxxLWNhcmRcbiAgICAgIHYtcmlwcGxlXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cIm15LWNhcmRcIlxuICAgICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1hLXNtYCA6IGBxLW1hLXhzYFwiXG4gICAgICA6c3R5bGU9XCJEaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGJhY2tncm91bmQ6IHRyYW5zcGFyZW50YFwiXG4gICAgPlxuICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgIDp0bz1cImAvbWFuZ2EvYCArIG1hbmdhLmlkXCJcbiAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCJcbiAgICAgICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgICAgPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICB2LWlmPVwiRGlzcGxheSAhPSBgbGlzdGBcIlxuICAgICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwXCJcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmtgIDogYGJnLWxpZ2h0YFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgICAgIDppbWctc3R5bGU9XCJtYW5nYS5pbkxpYnJhcnkgPyB7IGZpbHRlcjogJ2JyaWdodG5lc3MoMC40KScgfSA6IHt9XCJcbiAgICAgICAgICA6YWx0PVwibWFuZ2EudGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cIiFpbWdkYXRhXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudCBhYnNvbHV0ZS10b3AgcS1tdC14cyBxLW1sLXhzXCJcbiAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgICAgdi1pZj1cIm1hbmdhLmluTGlicmFyeVwiXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBJbiBMaWJyYXJ5XG4gICAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20gdGV4dC1zdWJ0aXRsZTEgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgdi1pZj1cIkRpc3BsYXkgPT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICAgIDp0aXRsZT1cIm1hbmdhLnRpdGxlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbWFuZ2EudGl0bGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWltZz5cblxuICAgICAgICA8IS0tIGxpc3QgZGlzcGxheSBtb2RlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBjb2wtZ3JvdyBuby13cmFwXCI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICB2LWlmPVwiRGlzcGxheSA9PSBgbGlzdGBcIlxuICAgICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY29sLTFcIlxuICAgICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCIhaW1nZGF0YVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICA6Y2xhc3M9XCJsaXN0ZGl2Q2xhc3NcIlxuICAgICAgICAgICAgdi1pZj1cIkRpc3BsYXkgIT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICAgIDp0aXRsZT1cIm1hbmdhLnRpdGxlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA6c3R5bGU9XCJEaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGhlaWdodDogNS4yNXJlbTtgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBtYW5nYS50aXRsZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwianVzdGlmeS1lbmQgZmxleCBpdGVtcy1lbmQgY29sLWdyb3dcIlxuICAgICAgICAgICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1yLWxnYCA6IGBxLW1yLXhzYFwiXG4gICAgICAgICAgICB2LWlmPVwibWFuZ2EuaW5MaWJyYXJ5ICYmIERpc3BsYXkgPT0gYGxpc3RgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1iYWRnZSBjb2xvcj1cImJsdWVcIiBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCI+XG4gICAgICAgICAgICAgIEluIExpYnJhcnlcbiAgICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtaW50ZXJzZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYUNhcmQnLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gT2JqZWN0XG4gICAgfSxcbiAgICBEaXNwbGF5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8J2NvbXBhY3QnIHwgJ2NvbWZvcnQnIHwgJ2xpc3QnPixcbiAgICAgIGRlZmF1bHQ6ICdjb21wYWN0J1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsYXkgPT0gJ2xpc3QnXG4gICAgICAgID8gJ3RleHQtbGVmdCBxLW1sLW1kIHRleHQtaDUgY29sLXNocmluaydcbiAgICAgICAgOiAndGV4dC1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEnO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGdldEltZ0Jsb2IodGhpcy5tYW5nYS50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKGAke3N0b3JlR2V0KCd1c2VDYWNoZScsIHRydWUpfWApO1xuICAgIGNvbnN0IGltZ2RhdGEgPSByZWYoJycpO1xuICAgIHJldHVybiB7IHVzZUNhY2hlLCBpbWdkYXRhIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNhc3NcIj5cbi5teS1jYXJkIGRpdi5xLWltZy0tbWVudTpob3ZlclxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgJGdlbmVyaWMtaG92ZXItdHJhbnNpdGlvblxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl93aXRoRGlyZWN0aXZlcyIsIl9vcGVuQmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBbUhBLE1BQUssWUFBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFNBQVMsTUFBTTtBQUFBLElBQ2pCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFN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
