import { Q as QInnerLoading } from "./QInnerLoading.7a61e845.js";
import { Q as QBadge } from "./QBadge.55eaf29d.js";
import { g as getImgBlob, Q as QImg } from "./usefull.d0e2b46c.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { R as Ripple } from "./Ripple.d48b6bf8.js";
import { storeGet } from "./StoreStuff.b98d7f9e.js";
import { d as defineComponent, r as ref, _ as _export_sfc, s as resolveComponent, B as withDirectives, f as openBlock, j as createBlock, k as withCtx, m as createVNode, q as normalizeClass, u as createBaseVNode, p as createTextVNode, n as createCommentVNode, v as createElementBlock, t as toDisplayString, a6 as normalizeStyle } from "./index.ba4ecd3b.js";
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
  return withDirectives((openBlock(), createBlock(QCard, {
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
  ]);
}
var mangaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0b2bb130"], ["__file", "mangaCard.vue"]]);
export { mangaCard as m };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2FDYXJkLjhiMDQ4NDk1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvbWFuZ2FDYXJkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZFxuICAgIHYtcmlwcGxlXG4gICAgZmxhdFxuICAgIGNsYXNzPVwibXktY2FyZFwiXG4gICAgOmNsYXNzPVwiISgkcS5zY3JlZW4uc20gfHwgJHEuc2NyZWVuLnhzKSA/IGBxLW1hLXNtYCA6IGBxLW1hLXhzYFwiXG4gICAgOnN0eWxlPVwiRGlzcGxheSA9PSBgbGlzdGAgPyBgYCA6IGBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGBcIlxuICA+XG4gICAgPHJvdXRlci1saW5rXG4gICAgICA6dG89XCJgL21hbmdhL2AgKyBtYW5nYS5pZFwiXG4gICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCJcbiAgICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICA+XG4gICAgICA8cS1pbWdcbiAgICAgICAgdi1pZj1cIkRpc3BsYXkgIT0gYGxpc3RgXCJcbiAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIHNwaW5uZXItY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBhc3BlY3QtcmF0aW86IDIyNS8zNTBcIlxuICAgICAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGJnLWRhcmtgIDogYGJnLWxpZ2h0YFwiXG4gICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgOmltZy1zdHlsZT1cIm1hbmdhLmluTGlicmFyeSA/IHsgZmlsdGVyOiAnYnJpZ2h0bmVzcygwLjQpJyB9IDoge31cIlxuICAgICAgICA6YWx0PVwibWFuZ2EudGl0bGVcIlxuICAgICAgPlxuICAgICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwiIWltZ2RhdGFcIiBjb2xvcj1cInByaW1hcnlcIj4gPC9xLWlubmVyLWxvYWRpbmc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50IGFic29sdXRlLXRvcCBxLW10LXhzIHEtbWwteHNcIlxuICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIHYtaWY9XCJtYW5nYS5pbkxpYnJhcnlcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogbWluLWNvbnRlbnQ7IHBhZGRpbmc6IDVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW4gTGlicmFyeVxuICAgICAgICAgIDwvcS1iYWRnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWJvdHRvbSB0ZXh0LXN1YnRpdGxlMSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgdi1pZj1cIkRpc3BsYXkgPT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICA6dGl0bGU9XCJtYW5nYS50aXRsZVwiXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBtYW5nYS50aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1pbWc+XG5cbiAgICAgIDwhLS0gbGlzdCBkaXNwbGF5IG1vZGUgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWNlbnRlciBjb2wtZ3JvdyBuby13cmFwXCI+XG4gICAgICAgIDxxLWltZ1xuICAgICAgICAgIHYtaWY9XCJEaXNwbGF5ID09IGBsaXN0YFwiXG4gICAgICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcGlubmVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA5M3B4OyBhc3BlY3QtcmF0aW86IDIyNS8zNTA7IHdpZHRoOiBmaXQtY29udGVudFwiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGNvbC0xXCJcbiAgICAgICAgICBuby1zcGlubmVyXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pbm5lci1sb2FkaW5nIDpzaG93aW5nPVwiIWltZ2RhdGFcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICA8L3EtaW5uZXItbG9hZGluZz5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIDpjbGFzcz1cImxpc3RkaXZDbGFzc1wiXG4gICAgICAgICAgdi1pZj1cIkRpc3BsYXkgIT0gYGNvbXBhY3RgXCJcbiAgICAgICAgICA6dGl0bGU9XCJtYW5nYS50aXRsZVwiXG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBcIlxuICAgICAgICAgIDpzdHlsZT1cIkRpc3BsYXkgPT0gYGxpc3RgID8gYGAgOiBgaGVpZ2h0OiA1LjI1cmVtO2BcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgbWFuZ2EudGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImp1c3RpZnktZW5kIGZsZXggaXRlbXMtZW5kIGNvbC1ncm93XCJcbiAgICAgICAgICA6Y2xhc3M9XCIhKCRxLnNjcmVlbi5zbSB8fCAkcS5zY3JlZW4ueHMpID8gYHEtbXItbGdgIDogYHEtbXIteHNgXCJcbiAgICAgICAgICB2LWlmPVwibWFuZ2EuaW5MaWJyYXJ5ICYmIERpc3BsYXkgPT0gYGxpc3RgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWJhZGdlIGNvbG9yPVwiYmx1ZVwiIHN0eWxlPVwid2lkdGg6IG1pbi1jb250ZW50OyBwYWRkaW5nOiA1cHhcIj5cbiAgICAgICAgICAgIEluIExpYnJhcnlcbiAgICAgICAgICA8L3EtYmFkZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9yb3V0ZXItbGluaz5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL3VzZWZ1bGwnO1xuaW1wb3J0IHsgc3RvcmVHZXQgfSBmcm9tICdzcmMvYm9vdC9TdG9yZVN0dWZmJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ01hbmdhQ2FyZCcsXG4gIHByb3BzOiB7XG4gICAgbWFuZ2E6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxtYW5nYT4sXG4gICAgICBkZWZhdWx0OiAoKSA9PiBPYmplY3RcbiAgICB9LFxuICAgIERpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyBhcyBQcm9wVHlwZTwnY29tcGFjdCcgfCAnY29tZm9ydCcgfCAnbGlzdCc+LFxuICAgICAgZGVmYXVsdDogJ2NvbXBhY3QnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RkaXZDbGFzcygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuRGlzcGxheSA9PSAnbGlzdCdcbiAgICAgICAgPyAndGV4dC1sZWZ0IHEtbWwtbWQgdGV4dC1oNSBjb2wtc2hyaW5rJ1xuICAgICAgICA6ICd0ZXh0LWNlbnRlciB0ZXh0LXN1YnRpdGxlMSc7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgZ2V0SW1nQmxvYih0aGlzLm1hbmdhLnRodW1ibmFpbFVybCArICc/dXNlQ2FjaGU9JyArIHRoaXMudXNlQ2FjaGUpLnRoZW4oXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICB9XG4gICAgKTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoYCR7c3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSl9YCk7XG4gICAgY29uc3QgaW1nZGF0YSA9IHJlZignJyk7XG4gICAgcmV0dXJuIHsgdXNlQ2FjaGUsIGltZ2RhdGEgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Fzc1wiPlxuLm15LWNhcmQgZGl2LnEtaW1nLS1tZW51OmhvdmVyXG4gIHRyYW5zaXRpb246IGZpbHRlciAkZ2VuZXJpYy1ob3Zlci10cmFuc2l0aW9uXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX29wZW5CbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFnSEEsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsSUFDakI7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsZUFBdUI7QUFDZCxhQUFBLEtBQUssV0FBVyxTQUNuQix5Q0FDQTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLFdBQVk7QUFDbkIsZUFBVyxLQUFLLE1BQU0sZUFBZSxlQUFlLEtBQUssUUFBUSxFQUFFO0FBQUEsTUFDakUsQ0FBQyxVQUFVO0FBQ1QsYUFBSyxVQUFVO0FBQUEsTUFDakI7QUFBQSxJQUFBO0FBQUEsRUFFSjtBQUFBLEVBQ0EsUUFBUTtBQUNOLFVB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
