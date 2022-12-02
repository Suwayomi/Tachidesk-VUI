import { Q as QInnerLoading } from "./QInnerLoading.b3499eb2.js";
import { Q as QBadge } from "./QBadge.da9a9ffd.js";
import { g as getImgBlob, Q as QImg } from "./usefull.0f9a3edc.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QIntersection } from "./QIntersection.6a6cf41f.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { storeGet } from "./StoreStuff.f5900537.js";
import { d as defineComponent, r as ref, _ as _export_sfc, s as resolveComponent, f as openBlock, j as createBlock, k as withCtx, B as withDirectives, q as normalizeClass, a6 as normalizeStyle, m as createVNode, u as createBaseVNode, p as createTextVNode, n as createCommentVNode, v as createElementBlock, t as toDisplayString } from "./index.0b61810d.js";
var mangaCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "MangaCard",
  props: {
    manga: {
      type: Object,
      default: () => Object
    },
    display: {
      type: String,
      default: "compact"
    }
  },
  setup() {
    const useCache = ref(`${storeGet("useCache", true)}`);
    const imgdata = ref("");
    return { useCache, imgdata };
  },
  computed: {
    listdivClass() {
      return this.display == "list" ? "text-left q-ml-md text-h5 col-shrink" : "text-center text-subtitle1";
    }
  },
  mounted: function() {
    getImgBlob(this.manga.thumbnailUrl + "?useCache=" + this.useCache).then(
      (value) => {
        this.imgdata = value;
      }
    );
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
        style: normalizeStyle(_ctx.display == `list` ? `` : `background: transparent`)
      }, {
        default: withCtx(() => [
          createVNode(_component_router_link, {
            to: `/manga/` + _ctx.manga.id,
            class: normalizeClass(["cursor-pointer", _ctx.$q.dark.isActive ? `light` : `dark`]),
            style: { "text-decoration": "none" }
          }, {
            default: withCtx(() => [
              _ctx.display != `list` ? (openBlock(), createBlock(QImg, {
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
                  _ctx.display == `compact` ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "absolute-bottom text-subtitle1 text-center",
                    title: _ctx.manga.title,
                    style: { "padding": "0", "display": "-webkit-box", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical", "text-overflow": "ellipsis", "height": "3.5rem" }
                  }, toDisplayString(_ctx.manga.title), 9, _hoisted_2)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["src", "class", "img-style", "alt"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_3, [
                _ctx.display == `list` ? (openBlock(), createBlock(QImg, {
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
                _ctx.manga.inLibrary && _ctx.display == `list` ? (openBlock(), createElementBlock("div", {
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
var mangaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec55c2e6"], ["__file", "mangaCard.vue"]]);
export { mangaCard as m };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FDYXJkLmQyMzUwZDU5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvbWFuZ2FDYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtaW50ZXJzZWN0aW9uPlxuICAgIDxxLWNhcmRcbiAgICAgIHYtcmlwcGxlXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cIm15LWNhcmRcIlxuICAgICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1hLXNtYCA6IGBxLW1hLXhzYFwiXG4gICAgICA6c3R5bGU9XCJkaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGJhY2tncm91bmQ6IHRyYW5zcGFyZW50YFwiXG4gICAgPlxuICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgIDp0bz1cImAvbWFuZ2EvYCArIG1hbmdhLmlkXCJcbiAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCJcbiAgICAgICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgICAgPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICB2LWlmPVwiZGlzcGxheSAhPSBgbGlzdGBcIlxuICAgICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwXCJcbiAgICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmtgIDogYGJnLWxpZ2h0YFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgICAgIDppbWctc3R5bGU9XCJtYW5nYS5pbkxpYnJhcnkgPyB7IGZpbHRlcjogJ2JyaWdodG5lc3MoMC40KScgfSA6IHt9XCJcbiAgICAgICAgICA6YWx0PVwibWFuZ2EudGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cIiFpbWdkYXRhXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudCBhYnNvbHV0ZS10b3AgcS1tdC14cyBxLW1sLXhzXCJcbiAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgdi1pZj1cIm1hbmdhLmluTGlicmFyeVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBJbiBMaWJyYXJ5XG4gICAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdi1pZj1cImRpc3BsYXkgPT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtYm90dG9tIHRleHQtc3VidGl0bGUxIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgIDp0aXRsZT1cIm1hbmdhLnRpdGxlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbWFuZ2EudGl0bGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9xLWltZz5cblxuICAgICAgICA8IS0tIGxpc3QgZGlzcGxheSBtb2RlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBjb2wtZ3JvdyBuby13cmFwXCI+XG4gICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICB2LWlmPVwiZGlzcGxheSA9PSBgbGlzdGBcIlxuICAgICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVycyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY29sLTFcIlxuICAgICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlubmVyLWxvYWRpbmcgOnNob3dpbmc9XCIhaW1nZGF0YVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB2LWlmPVwiRGlzcGxheSAhPSBgY29tcGFjdGBcIlxuICAgICAgICAgICAgOmNsYXNzPVwibGlzdGRpdkNsYXNzXCJcbiAgICAgICAgICAgIDp0aXRsZT1cIm1hbmdhLnRpdGxlXCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA6c3R5bGU9XCJEaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGhlaWdodDogNS4yNXJlbTtgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBtYW5nYS50aXRsZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHYtaWY9XCJtYW5nYS5pbkxpYnJhcnkgJiYgZGlzcGxheSA9PSBgbGlzdGBcIlxuICAgICAgICAgICAgY2xhc3M9XCJqdXN0aWZ5LWVuZCBmbGV4IGl0ZW1zLWVuZCBjb2wtZ3Jvd1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCIhKCRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMpID8gYHEtbXItbGdgIDogYHEtbXIteHNgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1iYWRnZSBjb2xvcj1cImJsdWVcIiBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCI+XG4gICAgICAgICAgICAgIEluIExpYnJhcnlcbiAgICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtaW50ZXJzZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC91c2VmdWxsJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYUNhcmQnLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gT2JqZWN0LFxuICAgIH0sXG4gICAgZGlzcGxheToge1xuICAgICAgdHlwZTogU3RyaW5nIGFzIFByb3BUeXBlPCdjb21wYWN0JyB8ICdjb21mb3J0JyB8ICdsaXN0Jz4sXG4gICAgICBkZWZhdWx0OiAnY29tcGFjdCcsXG4gICAgfSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7c3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSl9YCk7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXkgPT0gJ2xpc3QnXG4gICAgICAgID8gJ3RleHQtbGVmdCBxLW1sLW1kIHRleHQtaDUgY29sLXNocmluaydcbiAgICAgICAgOiAndGV4dC1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEnO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBnZXRJbWdCbG9iKHRoaXMubWFuZ2EudGh1bWJuYWlsVXJsICsgJz91c2VDYWNoZT0nICsgdGhpcy51c2VDYWNoZSkudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmltZ2RhdGEgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICApO1xuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Fzc1wiPlxuLm15LWNhcmQgZGl2LnEtaW1nLS1tZW51OmhvdmVyXG4gIHRyYW5zaXRpb246IGZpbHRlciAkZ2VuZXJpYy1ob3Zlci10cmFuc2l0aW9uXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX3dpdGhEaXJlY3RpdmVzIiwiX29wZW5CbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFtSEEsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsSUFDakI7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUNOLFVBQU0sV0FBVyxJQUFJLEdBQUcsU0FBUyxZQUFZLElBQUksR0FBRztBQUM5QyxVQUFBLFVBQVUsSUFBSSxFQUFFO0FBQ2YsV0FBQSxFQUFFLFVBQVU7RUFDckI7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLGVBQXVCO0FBQ2QsYUFBQSxLQUFLLFdBQVcsU0FDbkIseUNBQ0E7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxXQUFZO0FBQ25CLGVBQVcsS0FBSyxNQUFNLGVBQWUsZUFBZSxLQUFLLFFBQVEsRUFBRTtBQUFBLE1BQ2pFLENBQUMsVUFBVTtBQUNULGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBQUEsSUFBQTtBQUFBLEVBRUo7QUFDRixDQUFDOztFQS9HVyxPQUFNO0FBQUEsRUFDTixPQUFBLEVBQUEsV0FBQSxJQUFBOzs7QUE0QkMsTUFBQSxhQUFBLEVBQUEsT0FBTTs7OztzQkF6RGpCQSxZQW1HaUIsZUFBQSxNQUFBO0FBQUEsSUFBQSxTQUFBQyxRQWxHZixNQWlHUztBQUFBLE1BQUFDLGdCQUFBQyxVQUFBLEdBakdUSCxZQWlHUyxPQUFBO0FBQUEsUUEvRlAsTUFBQTtBQUFBLFFBQ0EsT0FBS0ksZ0JBQUMsV0FBUyxFQUNMLFFBQUcsT0FBTyxNQUFNLEtBQUcsR0FBQSxPQUFPLE1BQUUsWUFBQSxTQUFBLENBQUE7QUFBQSxRQUNyQyxPQUFLQyxlQUFFLEtBQU8sV0FBQSxTQUFBLEtBQUEseUJBQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSx5QkFFZixNQXlGYztBQUFBLFVBekZkQyxZQXlGYyx3QkFBQTtBQUFBLFlBeEZYLElBQUUsWUFBYyxLQUFNLE1BQUE7QUFBQSxZQUN2QixPQUFLRixlQUFBLENBQUMsa0JBRUUsS0FBQSxHQUFHLEtBQUssV0FBUSxVQUFBLE1BQUEsQ0FBQTtBQUFBLFlBRHhCLE9BQUEsRUFBQSxtQkFBQSxPQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsNkJBR0EsTUF3Q1E7QUFBQSxjQXZDQSxLQUFBLFdBQU8sdUJBRGZKLFlBd0NRLE1BQUE7QUFBQSxnQkFBQSxLQUFBO0FBQUEsZ0JBdENMLEtBQUssS0FBQTtBQUFBLGdCQUNOLFNBQVE7QUFBQSxnQkFDUixpQkFBYztBQUFBLGdCQUNkLE9BQUEsRUFBQSxhQUFBLFFBQUEsZ0JBQUEsVUFBQTtBQUFBLGdCQUNDLE9BQUtJLGVBQUUsQ0FBQSxLQUFBLEdBQUcsS0FBSyxXQUFRLHdCQUNsQixpQkFBaUIsQ0FBQTtBQUFBLGdCQUN0QixhQUFXLFdBQU0sWUFBUyxFQUFBLFFBQUEsa0JBQUEsSUFBQSxDQUFBO0FBQUEsZ0JBQzFCLEtBQUssS0FBTSxNQUFBO0FBQUEsY0FBQSxHQUFBO0FBQUEsaUNBRVosTUFDa0I7QUFBQSxrQkFEbEJFLFlBQ2tCLGVBQUE7QUFBQSxvQkFEQSxTQUFPLENBQUcsS0FBQTtBQUFBLG9CQUFTLE9BQU07QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUFBLGtCQUUzQ0MsZ0JBV00sT0FYTixZQVdNO0FBQUEsb0JBTkksS0FBQSxNQUFNLDBCQURkUCxZQU1VLFFBQUE7QUFBQSxzQkFBQSxLQUFBO0FBQUEsc0JBSlIsT0FBTTtBQUFBLHNCQUNOLE9BQUEsRUFBQSxTQUFBLGVBQUEsV0FBQSxNQUFBO0FBQUEsb0JBQUEsR0FBQTtBQUFBLHVDQUNELE1BRUQ7QUFBQSx3QkFBQVEsZ0JBRkMsY0FFRDtBQUFBLHNCQUFBLENBQUE7QUFBQTs7O2tCQUdNLEtBQUEsV0FBTywwQkFEZkMsbUJBY00sT0FBQTtBQUFBLG9CQUFBLEtBQUE7QUFBQSxvQkFaSixPQUFNO0FBQUEsb0JBQ0wsT0FBTyxLQUFNLE1BQUE7QUFBQSxvQkFDZCxPQUFBLEVBQUEsV0FBQSxLQUFBLFdBQUEsZUFBQSxzQkFBQSxLQUFBLHNCQUFBLFlBQUEsaUJBQUEsWUFBQSxVQUFBLFNBQUE7QUFBQSxrQkFBQSxHQUFBQyxnQkFTRyxXQUFNLEtBQUssR0FBQSxHQUFBLFVBQUEsS0FBQUMsbUJBQUEsSUFBQSxJQUFBO0FBQUE7OztjQUtsQkosZ0JBdUNNLE9BdkNOLFlBdUNNO0FBQUEsZ0JBckNJLEtBQUEsV0FBTyx1QkFEZlAsWUFXUSxNQUFBO0FBQUEsa0JBQUEsS0FBQTtBQUFBLGtCQVRMLEtBQUssS0FBQTtBQUFBLGtCQUNOLFNBQVE7QUFBQSxrQkFDUixpQkFBYztBQUFBLGtCQUNkLE9BQUEsRUFBQSxVQUFBLFFBQUEsZ0JBQUEsV0FBQSxTQUFBLGNBQUE7QUFBQSxrQkFDQSxPQUFNO0FBQUEsa0JBQ04sY0FBQTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxtQ0FFQSxNQUNrQjtBQUFBLG9CQURsQk0sWUFDa0IsZUFBQTtBQUFBLHNCQURBLFNBQU8sQ0FBRyxLQUFBO0FBQUEsc0JBQVMsT0FBTTtBQUFBLG9CQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUE7OztnQkFJckMsS0FBQSxXQUFPLDBCQURmRyxtQkFnQk0sT0FBQTtBQUFBLGtCQUFBLEtBQUE7QUFBQSxrQkFkSCxPQUFLTCxlQUFFLEtBQVksWUFBQTtBQUFBLGtCQUNuQixPQUFPLEtBQU0sTUFBQTtBQUFBLGtCQUNkLE9BUUNDLGVBUkQsQ0FBQSxFQUFBLFdBQUEsS0FBQSxXQUFBLGVBQUEsc0JBQUEsS0FBQSxzQkFBQSxZQUFBLGlCQUFBLFlBQUEsWUFBQSxVQUFBLFNBQUEsT0FBQSxHQVNRLEtBQU8sV0FBQSxTQUFBLEtBQUEsa0JBQUEsQ0FBQTtBQUFBLGdCQUFBLEdBQUFLLGdCQUVaLFdBQU0sS0FBSyxHQUFBLElBQUEsVUFBQSxLQUFBQyxtQkFBQSxJQUFBLElBQUE7QUFBQSxnQkFHUixLQUFNLE1BQUEsYUFBYSxLQUFPLFdBQUEsVUFBQVIsVUFBQSxHQURsQ00sbUJBUU0sT0FBQTtBQUFBLGtCQUFBLEtBQUE7QUFBQSxrQkFOSixPQUFLTCxlQUFBLENBQUMsdUNBQXFDLEVBQ2pDLEtBQUEsR0FBRyxPQUFPLE1BQU0sS0FBQSxHQUFHLE9BQU8sTUFBRSxZQUFBLFNBQUEsQ0FBQTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxrQkFFdENFLFlBRVUsUUFBQTtBQUFBLG9CQUZELE9BQU07QUFBQSxvQkFBTyxPQUFBLEVBQUEsU0FBQSxlQUFBLFdBQUEsTUFBQTtBQUFBLGtCQUFBLEdBQUE7QUFBQSxxQ0FBeUMsTUFFL0Q7QUFBQSxzQkFBQUUsZ0JBRitELGNBRS9EO0FBQUEsb0JBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
