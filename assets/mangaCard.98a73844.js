import { Q as QInnerLoading } from "./QInnerLoading.dc9c40c5.js";
import { Q as QBadge } from "./QBadge.0d5331c7.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { g as getImgBlob } from "./usefull.5da5779b.js";
import { f as defineComponent, r as ref, _ as _export_sfc, u as resolveComponent, D as withDirectives, j as openBlock, k as createBlock, m as withCtx, n as createVNode, x as normalizeStyle, v as createBaseVNode, q as createTextVNode, p as createCommentVNode, y as createElementBlock, t as toDisplayString, s as normalizeClass } from "./index.75e4774b.js";
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
    const $q = useQuasar();
    const useCache = ref(`${$q.localStorage.getItem("useCache")}`);
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
  return withDirectives((openBlock(), createBlock(QCard, {
    flat: "",
    class: normalizeClass(["my-card", !(_ctx.$q.screen.sm || _ctx.$q.screen.xs) ? `q-ma-sm` : `q-ma-xs`]),
    style: normalizeStyle(_ctx.Display == `list` ? `` : `background: transparent`)
  }, {
    default: withCtx(() => [
      createVNode(_component_router_link, {
        to: `/manga/` + _ctx.manga.id,
        class: normalizeClass(["cursor-pointer", _ctx.$q.dark.isActive ? `text-white` : `text-dark`]),
        style: { "text-decoration": "none" }
      }, {
        default: withCtx(() => [
          _ctx.Display != `list` ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: _ctx.imgdata,
            loading: "lazy",
            "spinner-color": "white",
            style: normalizeStyle([
              { "max-width": "100%", "aspect-ratio": "225/350" },
              `background-color:` + (_ctx.$q.dark.isActive ? `var(--q-dark)` : `var(--q-light)`)
            ]),
            class: "rounded-borders",
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
          }, 8, ["src", "style", "img-style", "alt"])) : createCommentVNode("", true),
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
  ]);
}
var mangaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3bf7c0be"], ["__file", "mangaCard.vue"]]);
export { mangaCard as m };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FDYXJkLjk4YTczODQ0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvbWFuZ2FDYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZFxuICAgIHYtcmlwcGxlXG4gICAgZmxhdFxuICAgIGNsYXNzPVwibXktY2FyZFwiXG4gICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1hLXNtYCA6IGBxLW1hLXhzYFwiXG4gICAgOnN0eWxlPVwiRGlzcGxheSA9PSBgbGlzdGAgPyBgYCA6IGBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGBcIlxuICA+XG4gICAgPHJvdXRlci1saW5rXG4gICAgICA6dG89XCJgL21hbmdhL2AgKyBtYW5nYS5pZFwiXG4gICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCJcbiAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgdGV4dC13aGl0ZWAgOiBgdGV4dC1kYXJrYFwiXG4gICAgPlxuICAgICAgPHEtaW1nXG4gICAgICAgIHYtaWY9XCJEaXNwbGF5ICE9IGBsaXN0YFwiXG4gICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwXCJcbiAgICAgICAgOnN0eWxlPVwiXG4gICAgICAgICAgYGJhY2tncm91bmQtY29sb3I6YCArXG4gICAgICAgICAgKCRxLmRhcmsuaXNBY3RpdmUgPyBgdmFyKC0tcS1kYXJrKWAgOiBgdmFyKC0tcS1saWdodClgKVxuICAgICAgICBcIlxuICAgICAgICBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgIDppbWctc3R5bGU9XCJtYW5nYS5pbkxpYnJhcnkgPyB7IGZpbHRlcjogJ2JyaWdodG5lc3MoMC40KScgfSA6IHt9XCJcbiAgICAgICAgOmFsdD1cIm1hbmdhLnRpdGxlXCJcbiAgICAgID5cbiAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cIiFpbWdkYXRhXCIgY29sb3I9XCJwcmltYXJ5XCI+IDwvcS1pbm5lci1sb2FkaW5nPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudCBhYnNvbHV0ZS10b3AgcS1tdC14cyBxLW1sLXhzXCJcbiAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICB2LWlmPVwibWFuZ2EuaW5MaWJyYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluIExpYnJhcnlcbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20gdGV4dC1zdWJ0aXRsZTEgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIHYtaWY9XCJEaXNwbGF5ID09IGBjb21wYWN0YFwiXG4gICAgICAgICAgOnRpdGxlPVwibWFuZ2EudGl0bGVcIlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbWFuZ2EudGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtaW1nPlxuXG4gICAgICA8IS0tIGxpc3QgZGlzcGxheSBtb2RlIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgY29sLWdyb3cgbm8td3JhcFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICB2LWlmPVwiRGlzcGxheSA9PSBgbGlzdGBcIlxuICAgICAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3Bpbm5lci1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogOTNweDsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwOyB3aWR0aDogZml0LWNvbnRlbnRcIlxuICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjb2wtMVwiXG4gICAgICAgICAgbm8tc3Bpbm5lclxuICAgICAgICA+XG4gICAgICAgICAgPHEtaW5uZXItbG9hZGluZyA6c2hvd2luZz1cIiFpbWdkYXRhXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICA6Y2xhc3M9XCJsaXN0ZGl2Q2xhc3NcIlxuICAgICAgICAgIHYtaWY9XCJEaXNwbGF5ICE9IGBjb21wYWN0YFwiXG4gICAgICAgICAgOnRpdGxlPVwibWFuZ2EudGl0bGVcIlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA6c3R5bGU9XCJEaXNwbGF5ID09IGBsaXN0YCA/IGBgIDogYGhlaWdodDogNS4yNXJlbTtgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG1hbmdhLnRpdGxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJqdXN0aWZ5LWVuZCBmbGV4IGl0ZW1zLWVuZCBjb2wtZ3Jvd1wiXG4gICAgICAgICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1yLWxnYCA6IGBxLW1yLXhzYFwiXG4gICAgICAgICAgdi1pZj1cIm1hbmdhLmluTGlicmFyeSAmJiBEaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1iYWRnZSBjb2xvcj1cImJsdWVcIiBzdHlsZT1cIndpZHRoOiBtaW4tY29udGVudDsgcGFkZGluZzogNXB4XCI+XG4gICAgICAgICAgICBJbiBMaWJyYXJ5XG4gICAgICAgICAgPC9xLWJhZGdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcm91dGVyLWxpbms+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYW5nYSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGdldEltZ0Jsb2IgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvdXNlZnVsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYUNhcmQnLFxuICBwcm9wczoge1xuICAgIG1hbmdhOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8bWFuZ2E+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gT2JqZWN0XG4gICAgfSxcbiAgICBEaXNwbGF5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8J2NvbXBhY3QnIHwgJ2NvbWZvcnQnIHwgJ2xpc3QnPixcbiAgICAgIGRlZmF1bHQ6ICdjb21wYWN0J1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsYXkgPT0gJ2xpc3QnXG4gICAgICAgID8gJ3RleHQtbGVmdCBxLW1sLW1kIHRleHQtaDUgY29sLXNocmluaydcbiAgICAgICAgOiAndGV4dC1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEnO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGdldEltZ0Jsb2IodGhpcy5tYW5nYS50aHVtYm5haWxVcmwgKyAnP3VzZUNhY2hlPScgKyB0aGlzLnVzZUNhY2hlKS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7JHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZUNhY2hlJyl9YCk7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5teS1jYXJkIGRpdi5xLWltZy0tbWVudTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW1IQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTLE1BQU07QUFBQSxJQUNqQjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixlQUF1QjtBQUNkLGFBQUEsS0FBSyxXQUFXLFNBQ25CLHlDQUNBO0FBQUEsSUFDTjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsV0FBWTtBQUNuQixlQUFXLEtBQUssTUFBTSxlQUFlLGVBQWUsS0FBSyxRQUFRLEVBQUU7QUFBQSxNQUNqRSxDQUFDLFVBQVU7QUFDVCxhQUFLLFVBQVU7QUFBQSxNQUNqQjtBQUFBLElBQUE7QUFBQSxFQUVKO0FBQUEsRUFDQSxRQUFRO0FBQ04sVUFBTSxLQUFLO0FBQ1gsVUFBTSxXQUFXLElBQUksR0FBRyxHQUFHLGFBQWEsUUFBUSxVQUFVLEdBQUc7QUFDdkQsVUFBQSxVQUFVLElBQUksRUFBRTtBQUNmLFdBQUEsRUFBRSxVQUFVO0VBQ3JCO0FBQ0YsQ0FBQzs7RUEvR1MsT0FBTTtBQUFBLEVBQ04sT0FBQSxFQUFBLFdBQUEsSUFBQTs7O0FBNEJDLE1BQUEsYUFBQSxFQUFBLE9BQU07Ozs7c0NBMURmQSxZQW1HUyxPQUFBO0FBQUEsSUFqR1AsTUFBQTtBQUFBLElBQ0EsT0FBS0MsZ0JBQUMsV0FBUyxFQUNMLFFBQUcsT0FBTyxNQUFNLEtBQUcsR0FBQSxPQUFPLE1BQUUsWUFBQSxTQUFBLENBQUE7QUFBQSxJQUNyQyxPQUFLQyxlQUFFLEtBQU8sV0FBQSxTQUFBLEtBQUEseUJBQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxxQkFFZixNQTJGYztBQUFBLE1BM0ZkQyxZQTJGYyx3QkFBQTtBQUFBLFFBMUZYLElBQUUsWUFBYyxLQUFNLE1BQUE7QUFBQSxRQUN2QixPQUFLRixlQUFBLENBQUMsa0JBRUUsS0FBQSxHQUFHLEtBQUssV0FBUSxlQUFBLFdBQUEsQ0FBQTtBQUFBLFFBRHhCLE9BQUEsRUFBQSxtQkFBQSxPQUFBO0FBQUEsTUFBQSxHQUFBO0FBQUEseUJBR0EsTUEwQ1E7QUFBQSxVQXpDQSxLQUFBLFdBQU8sdUJBRGZELFlBMENRLE1BQUE7QUFBQSxZQUFBLEtBQUE7QUFBQSxZQXhDTCxLQUFLLEtBQUE7QUFBQSxZQUNOLFNBQVE7QUFBQSxZQUNSLGlCQUFjO0FBQUEsWUFDZCxPQUE4Q0UsZUFBQTtBQUFBLGNBQTlDLEVBQUEsYUFBQSxRQUFBLGdCQUFBLFVBQUE7QUFBQSxjQUNvRCx1QkFBQSxLQUFBLEdBQUcsS0FBSyxXQUFRLGtCQUFBO0FBQUEsWUFBQSxDQUFBO0FBQUEsWUFJcEUsT0FBTTtBQUFBLFlBQ0wsYUFBVyxXQUFNLFlBQVMsRUFBQSxRQUFBLGtCQUFBLElBQUEsQ0FBQTtBQUFBLFlBQzFCLEtBQUssS0FBTSxNQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsNkJBRVosTUFBd0U7QUFBQSxjQUF4RUMsWUFBd0UsZUFBQTtBQUFBLGdCQUF0RCxTQUFPLENBQUcsS0FBQTtBQUFBLGdCQUFTLE9BQU07QUFBQSxjQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUEsY0FDM0NDLGdCQVdNLE9BWE4sWUFXTTtBQUFBLGdCQUxJLEtBQUEsTUFBTSwwQkFGZEosWUFNVSxRQUFBO0FBQUEsa0JBQUEsS0FBQTtBQUFBLGtCQUxSLE9BQU07QUFBQSxrQkFFTixPQUFBLEVBQUEsU0FBQSxlQUFBLFdBQUEsTUFBQTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxtQ0FDRCxNQUVEO0FBQUEsb0JBQUFLLGdCQUZDLGNBRUQ7QUFBQSxrQkFBQSxDQUFBO0FBQUE7OztjQUlNLEtBQUEsV0FBTywwQkFGZkMsbUJBY00sT0FBQTtBQUFBLGdCQUFBLEtBQUE7QUFBQSxnQkFiSixPQUFNO0FBQUEsZ0JBRUwsT0FBTyxLQUFNLE1BQUE7QUFBQSxnQkFDZCxPQUFBLEVBQUEsV0FBQSxLQUFBLFdBQUEsZUFBQSxzQkFBQSxLQUFBLHNCQUFBLFlBQUEsaUJBQUEsWUFBQSxVQUFBLFNBQUE7QUFBQSxjQUFBLEdBQUFDLGdCQVNHLFdBQU0sS0FBSyxHQUFBLEdBQUEsVUFBQSxLQUFBQyxtQkFBQSxJQUFBLElBQUE7QUFBQTs7O1VBS2xCSixnQkF1Q00sT0F2Q04sWUF1Q007QUFBQSxZQXJDSSxLQUFBLFdBQU8sdUJBRGZKLFlBV1EsTUFBQTtBQUFBLGNBQUEsS0FBQTtBQUFBLGNBVEwsS0FBSyxLQUFBO0FBQUEsY0FDTixTQUFRO0FBQUEsY0FDUixpQkFBYztBQUFBLGNBQ2QsT0FBQSxFQUFBLFVBQUEsUUFBQSxnQkFBQSxXQUFBLFNBQUEsY0FBQTtBQUFBLGNBQ0EsT0FBTTtBQUFBLGNBQ04sY0FBQTtBQUFBLFlBQUEsR0FBQTtBQUFBLCtCQUVBLE1BQ2tCO0FBQUEsZ0JBRGxCRyxZQUNrQixlQUFBO0FBQUEsa0JBREEsU0FBTyxDQUFHLEtBQUE7QUFBQSxrQkFBUyxPQUFNO0FBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQTs7O1lBS3JDLEtBQUEsV0FBTywwQkFGZkcsbUJBZ0JNLE9BQUE7QUFBQSxjQUFBLEtBQUE7QUFBQSxjQWZILE9BQUtMLGVBQUUsS0FBWSxZQUFBO0FBQUEsY0FFbkIsT0FBTyxLQUFNLE1BQUE7QUFBQSxjQUNkLE9BUUNDLGVBUkQsQ0FBQSxFQUFBLFdBQUEsS0FBQSxXQUFBLGVBQUEsc0JBQUEsS0FBQSxzQkFBQSxZQUFBLGlCQUFBLFlBQUEsWUFBQSxVQUFBLFNBQUEsT0FBQSxHQVNRLEtBQU8sV0FBQSxTQUFBLEtBQUEsa0JBQUEsQ0FBQTtBQUFBLFlBQUEsR0FBQUssZ0JBRVosV0FBTSxLQUFLLEdBQUEsSUFBQSxVQUFBLEtBQUFDLG1CQUFBLElBQUEsSUFBQTtBQUFBLFlBS1IsS0FBTSxNQUFBLGFBQWEsS0FBTyxXQUFBLFVBQUFDLFVBQUEsR0FIbENILG1CQVFNLE9BQUE7QUFBQSxjQUFBLEtBQUE7QUFBQSxjQVBKLE9BQUtMLGVBQUEsQ0FBQyx1Q0FBcUMsRUFDakMsS0FBQSxHQUFHLE9BQU8sTUFBTSxLQUFBLEdBQUcsT0FBTyxNQUFFLFlBQUEsU0FBQSxDQUFBO0FBQUEsWUFBQSxHQUFBO0FBQUEsY0FHdENFLFlBRVUsUUFBQTtBQUFBLGdCQUZELE9BQU07QUFBQSxnQkFBTyxPQUFBLEVBQUEsU0FBQSxlQUFBLFdBQUEsTUFBQTtBQUFBLGNBQUEsR0FBQTtBQUFBLGlDQUF5QyxNQUUvRDtBQUFBLGtCQUFBRSxnQkFGK0QsY0FFL0Q7QUFBQSxnQkFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
