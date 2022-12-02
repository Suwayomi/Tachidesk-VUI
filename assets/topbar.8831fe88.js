import { Q as QTooltip } from "./QTooltip.02a6ea06.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QSeparator } from "./QSeparator.95dc5d53.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { Q as QToggle } from "./QToggle.a59079d2.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, m as createVNode, v as createElementBlock, q as normalizeClass, F as Fragment, s as resolveComponent, p as createTextVNode, x as renderList, u as createBaseVNode } from "./index.0b61810d.js";
import "./position-engine.94f26946.js";
import "./selection.2c9d8487.js";
import "./scroll.34fac392.js";
import "./dom.fd94eb85.js";
import "./use-timeout.99cd911c.js";
import "./use-transition.65db8379.js";
import "./QSpinner.0d412098.js";
import "./QIcon.8780f7dc.js";
import "./Ripple.ce29675d.js";
import "./use-dark.bc291eea.js";
import "./focus-manager.32f8d49a.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
const _sfc_main$1 = defineComponent({
  props: {
    sele: {
      type: Boolean,
      required: true
    },
    cat: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      incat: ref(props.sele)
    };
  },
  watch: {
    incat() {
      if (this.incat) {
        this.$api.get(
          `/api/v1/manga/${this.$route.params["mangaID"]}/category/${this.cat.id}`
        );
      } else {
        this.$api.delete(
          `/api/v1/manga/${this.$route.params["mangaID"]}/category/${this.cat.id}`
        );
      }
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QItem, null, {
    default: withCtx(() => [
      createVNode(QToggle, {
        modelValue: _ctx.incat,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.incat = $event),
        label: _ctx.cat.name
      }, null, 8, ["modelValue", "label"])
    ]),
    _: 1
  });
}
var topBcat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "TopBcat.vue"]]);
const _sfc_main = defineComponent({
  name: "MangaTopBar",
  components: { topBcat },
  setup() {
    return {
      dialo: ref(false),
      options: ref([]),
      curr: ref([]),
      disp: ref([])
    };
  },
  mounted: function() {
    this.$api.get("/api/v1/category/").then(({ data }) => {
      this.options = data.slice(1);
    });
    this.$api.get(`/api/v1/manga/${this.$route.params["mangaID"]}/category/`).then(({ data }) => {
      this.curr = data;
    });
  },
  methods: {
    update() {
      this.$bus.emit("updateManga");
    }
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Set categories", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_topBcat = resolveComponent("topBcat");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtn, {
      flat: "",
      class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
      round: "",
      icon: "filter_list",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialo = true)
    }, {
      default: withCtx(() => [
        createVNode(QTooltip, null, {
          default: withCtx(() => [
            createTextVNode(" set category ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QDialog, {
      modelValue: _ctx.dialo,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.dialo = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-px-xl" }, {
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
            }),
            createVNode(QSeparator),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (opt) => {
              return openBlock(), createBlock(_component_topBcat, {
                key: opt.id,
                sele: _ctx.curr.find((ele) => ele.id == opt.id) != void 0,
                cat: opt
              }, null, 8, ["sele", "cat"]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(QBtn, {
      flat: "",
      round: "",
      class: normalizeClass(_ctx.$q.dark.isActive ? `light` : `dark`),
      icon: "refresh",
      onClick: _ctx.update
    }, {
      default: withCtx(() => [
        createVNode(QTooltip, null, {
          default: withCtx(() => [
            createTextVNode(" Update Manga ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "onClick"])
  ], 64);
}
var topbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "topbar.vue"]]);
export { topbar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLjg4MzFmZTg4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9Ub3BCY2F0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL3RvcGJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0+XG4gICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJpbmNhdFwiIDpsYWJlbD1cImNhdC5uYW1lXCI+PC9xLXRvZ2dsZT5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNhdCB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHNlbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNhdDoge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPGNhdD4sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICBpbmNhdDogcmVmKHByb3BzLnNlbGUpLFxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaW5jYXQoKSB7XG4gICAgICBpZiAodGhpcy5pbmNhdCkge1xuICAgICAgICB0aGlzLiRhcGkuZ2V0KFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NhdGVnb3J5LyR7dGhpcy5jYXQuaWR9YFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kYXBpLmRlbGV0ZShcbiAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jYXRlZ29yeS8ke3RoaXMuY2F0LmlkfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICByb3VuZFxuICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgIEBjbGljaz1cImRpYWxvID0gdHJ1ZVwiXG4gID5cbiAgICA8cS10b29sdGlwPiBzZXQgY2F0ZWdvcnkgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC14bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPlNldCBjYXRlZ29yaWVzPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8dG9wQmNhdFxuICAgICAgICB2LWZvcj1cIm9wdCBpbiBvcHRpb25zXCJcbiAgICAgICAgOmtleT1cIm9wdC5pZFwiXG4gICAgICAgIDpzZWxlPVwiY3Vyci5maW5kKChlbGUpID0+IGVsZS5pZCA9PSBvcHQuaWQpICE9IHVuZGVmaW5lZFwiXG4gICAgICAgIDpjYXQ9XCJvcHRcIlxuICAgICAgPlxuICAgICAgPC90b3BCY2F0PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgcm91bmRcbiAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cInJlZnJlc2hcIlxuICAgIEBjbGljaz1cInVwZGF0ZVwiXG4gID5cbiAgICA8cS10b29sdGlwPiBVcGRhdGUgTWFuZ2EgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHRvcEJjYXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvVG9wQmNhdC52dWUnO1xuaW1wb3J0IHsgY2F0IH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFuZ2FUb3BCYXInLFxuICBjb21wb25lbnRzOiB7IHRvcEJjYXQgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvOiByZWYoZmFsc2UpLFxuICAgICAgb3B0aW9uczogcmVmKDxjYXRbXT5bXSksXG4gICAgICBjdXJyOiByZWYoPGNhdFtdPltdKSxcbiAgICAgIGRpc3A6IHJlZihbXSksXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGFwaVxuICAgICAgLmdldCgnL2FwaS92MS9jYXRlZ29yeS8nKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9OiBBeGlvc1Jlc3BvbnNlPGNhdFtdPikgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhLnNsaWNlKDEpO1xuICAgICAgfSk7XG4gICAgdGhpcy4kYXBpXG4gICAgICAuZ2V0KGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NhdGVnb3J5L2ApXG4gICAgICAudGhlbigoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8Y2F0W10+KSA9PiB7XG4gICAgICAgIHRoaXMuY3VyciA9IGRhdGE7XG4gICAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJGJ1cy5lbWl0KCd1cGRhdGVNYW5nYScpO1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTSxPQUFPO0FBQ0osV0FBQTtBQUFBLE1BQ0wsT0FBTyxJQUFJLE1BQU0sSUFBSTtBQUFBLElBQUE7QUFBQSxFQUV6QjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUNOLFVBQUksS0FBSyxPQUFPO0FBQ2QsYUFBSyxLQUFLO0FBQUEsVUFDUixpQkFBaUIsS0FBSyxPQUFPLE9BQU8sdUJBQXVCLEtBQUssSUFBSTtBQUFBLFFBQUE7QUFBQSxNQUN0RSxPQUNLO0FBQ0wsYUFBSyxLQUFLO0FBQUEsVUFDUixpQkFBaUIsS0FBSyxPQUFPLE9BQU8sdUJBQXVCLEtBQUssSUFBSTtBQUFBLFFBQUE7QUFBQSxNQUV4RTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7c0JBdENDQyxZQUVTLE9BQUEsTUFBQTtBQUFBLElBQUEsU0FBQUMsUUFEUCxNQUF1RDtBQUFBLE1BQXZEQyxZQUF1RCxTQUFBO0FBQUEsUUFBcEMsWUFBQSxLQUFBO0FBQUEsUUFBSyx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLFFBQUE7QUFBQSxRQUFHLE9BQU8sS0FBSSxJQUFBO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGNBQUEsT0FBQSxDQUFBO0FBQUE7Ozs7O0FDeUMxQyxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZLEVBQUUsUUFBUTtBQUFBLEVBQ3RCLFFBQVE7QUFDQyxXQUFBO0FBQUEsTUFDTCxPQUFPLElBQUksS0FBSztBQUFBLE1BQ2hCLFNBQVMsSUFBVyxFQUFFO0FBQUEsTUFDdEIsTUFBTSxJQUFXLEVBQUU7QUFBQSxNQUNuQixNQUFNLElBQUksRUFBRTtBQUFBLElBQUE7QUFBQSxFQUVoQjtBQUFBLEVBQ0EsU0FBUyxXQUFZO0FBQ2QsU0FBQSxLQUNGLElBQUksbUJBQW1CLEVBQ3ZCLEtBQUssQ0FBQyxFQUFFLFdBQWlDO0FBQ25DLFdBQUEsVUFBVSxLQUFLLE1BQU0sQ0FBQztBQUFBLElBQUEsQ0FDNUI7QUFDSCxTQUFLLEtBQ0YsSUFBSSxpQkFBaUIsS0FBSyxPQUFPLE9BQU8sc0JBQXNCLEVBQzlELEtBQUssQ0FBQyxFQUFFLEtBQUEsTUFBaUM7QUFDeEMsV0FBSyxPQUFPO0FBQUEsSUFBQSxDQUNiO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsU0FBUztBQUNGLFdBQUEsS0FBSyxLQUFLLGFBQWE7QUFBQSxJQUM5QjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBekRPLE1BQUEsYUFBQUMsZ0NBQXlDLE9BQXBDLEVBQUEsT0FBTSxhQUFVLGtCQUFjLEVBQUE7Ozs7SUFiekNELFlBU1EsTUFBQTtBQUFBLE1BUk4sTUFBQTtBQUFBLE1BQ0EsT0FBS0UsZUFBQSxDQUFDLFdBRUUsS0FBQSxHQUFHLEtBQUssV0FBUSxVQUFBLE1BQUEsQ0FBQTtBQUFBLE1BRHhCLE9BQUE7QUFBQSxNQUVBLE1BQUs7QUFBQSxNQUNKLFNBQUssc0NBQUUsS0FBSyxRQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBRWIsTUFBcUM7QUFBQSxRQUFyQ0YsWUFBcUMsVUFBQSxNQUFBO0FBQUEsVUFBQSxTQUFBRCxRQUExQixNQUFjO0FBQUEsWUFBQUksZ0JBQWQsZ0JBQWM7QUFBQSxVQUFBLENBQUE7QUFBQTs7Ozs7SUFFM0JILFlBY1csU0FBQTtBQUFBLE1BZFEsWUFBQSxLQUFBO0FBQUEsTUFBSyx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLFFBQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFDdEIsTUFZUztBQUFBLFFBWlRBLFlBWVMsT0FBQSxNQUFBO0FBQUEsVUFBQSxTQUFBRCxRQVhQLE1BRWlCO0FBQUEsWUFGakJDLFlBRWlCLGNBRkQsRUFBQSxPQUFBLFVBQUEsR0FBTTtBQUFBLGNBQVMsU0FBQUQsUUFDN0IsTUFBeUM7QUFBQSxnQkFBekM7QUFBQSxjQUFBLENBQUE7QUFBQTs7WUFFRkMsWUFBMkIsVUFBQTtBQUFBLGFBQUFJLFVBQUEsSUFBQSxHQUMzQkMsbUJBTVVDLFVBQUEsTUFBQUMsV0FMTSxLQUFPLFNBQUEsQ0FBZCxRQUFHO2tDQURaVCxZQU1VLG9CQUFBO0FBQUEsZ0JBSlAsS0FBSyxJQUFJO0FBQUEsZ0JBQ1QsTUFBTSxVQUFLLEtBQUksQ0FBRSxRQUFRLElBQUksTUFBTSxJQUFJLEVBQUUsS0FBSztBQUFBLGdCQUM5QyxLQUFLO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsS0FBQSxDQUFBO0FBQUE7Ozs7Ozs7SUFLWkUsWUFRUSxNQUFBO0FBQUEsTUFQTixNQUFBO0FBQUEsTUFDQSxPQUFBO0FBQUEsTUFDQyxPQUFLRSxlQUFFLEtBQUcsR0FBQSxLQUFLLFdBQVEsVUFBQSxNQUFBO0FBQUEsTUFDeEIsTUFBSztBQUFBLE1BQ0osU0FBTyxLQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBRVIsTUFBcUM7QUFBQSxRQUFyQ0YsWUFBcUMsVUFBQSxNQUFBO0FBQUEsVUFBQSxTQUFBRCxRQUExQixNQUFjO0FBQUEsWUFBQUksZ0JBQWQsZ0JBQWM7QUFBQSxVQUFBLENBQUE7QUFBQTs7Ozs7Ozs7OyJ9
