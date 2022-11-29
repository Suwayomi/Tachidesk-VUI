import { Q as QTooltip } from "./QTooltip.5b3ee804.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QSeparator } from "./QSeparator.3fdd6d84.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { Q as QToggle } from "./QToggle.41c58e33.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { f as defineComponent, r as ref, _ as _export_sfc, j as openBlock, k as createBlock, m as withCtx, n as createVNode, y as createElementBlock, F as Fragment, u as resolveComponent, q as createTextVNode, z as renderList, v as createBaseVNode } from "./index.75e4774b.js";
import "./position-engine.09a868e3.js";
import "./selection.3a23570e.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./use-timeout.4d745afd.js";
import "./use-transition.34947ede.js";
import "./QSpinner.6511ee07.js";
import "./QIcon.aa032244.js";
import "./Ripple.bedf8a1c.js";
import "./use-dark.63b90c22.js";
import "./focus-manager.32f8d49a.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
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
  watch: {
    incat() {
      if (this.incat) {
        this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/category/${this.cat.id}`
        );
      } else {
        this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/category/${this.cat.id}`,
          {
            method: "DELETE"
          }
        );
      }
    }
  },
  setup(props) {
    return {
      incat: ref(props.sele)
    };
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
  name: "mangaTopBar",
  components: { topBcat },
  methods: {
    update() {
      this.$bus.emit("updateManga");
    }
  },
  mounted: function() {
    this.$fetchJSON("/api/v1/category/").then((opt) => {
      this.options = opt.slice(1);
    });
    this.$fetchJSON(
      `/api/v1/manga/${this.$route.params["mangaID"]}/category/`
    ).then((opt) => {
      this.curr = opt;
    });
  },
  setup() {
    return {
      dialo: ref(false),
      options: ref([]),
      curr: ref([]),
      disp: ref([])
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Set categories", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_topBcat = resolveComponent("topBcat");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtn, {
      flat: "",
      class: "q-ml-sm",
      round: "",
      "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
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
    }, 8, ["text-color"]),
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
      "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
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
    }, 8, ["text-color", "onClick"])
  ], 64);
}
var topbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "topbar.vue"]]);
export { topbar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLjFmNWEwNGVhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9Ub3BCY2F0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL3RvcGJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0+XG4gICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJpbmNhdFwiIDpsYWJlbD1cImNhdC5uYW1lXCI+PC9xLXRvZ2dsZT5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNhdCB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHNlbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2F0OiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8Y2F0PixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGluY2F0KCkge1xuICAgICAgaWYgKHRoaXMuaW5jYXQpe1xuICAgICAgICB0aGlzLiRmZXRjaChcbiAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jYXRlZ29yeS8ke3RoaXMuY2F0LmlkfWBcbiAgICAgICAgKTtcblxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NhdGVnb3J5LyR7dGhpcy5jYXQuaWR9YCx7XG4gICAgICAgICAgICBtZXRob2Q6J0RFTEVURSdcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICBpbmNhdDogcmVmKHByb3BzLnNlbGUpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICByb3VuZFxuICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGB3aGl0ZWAgOiBgZGFya2BcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IHNldCBjYXRlZ29yeSA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb1wiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LXhsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+U2V0IGNhdGVnb3JpZXM8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgIDx0b3BCY2F0XG4gICAgICAgIHYtZm9yPVwib3B0IGluIG9wdGlvbnNcIlxuICAgICAgICA6a2V5PVwib3B0LmlkXCJcbiAgICAgICAgOnNlbGU9XCJjdXJyLmZpbmQoKGVsZSkgPT4gZWxlLmlkID09IG9wdC5pZCkgIT0gdW5kZWZpbmVkXCJcbiAgICAgICAgOmNhdD1cIm9wdFwiXG4gICAgICA+XG4gICAgICA8L3RvcEJjYXQ+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICByb3VuZFxuICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGB3aGl0ZWAgOiBgZGFya2BcIlxuICAgIGljb249XCJyZWZyZXNoXCJcbiAgICBAY2xpY2s9XCJ1cGRhdGVcIlxuICA+XG4gICAgPHEtdG9vbHRpcD4gVXBkYXRlIE1hbmdhIDwvcS10b29sdGlwPlxuICA8L3EtYnRuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB0b3BCY2F0IGZyb20gJ3NyYy9jb21wb25lbnRzL21hbmdhL1RvcEJjYXQudnVlJztcbmltcG9ydCB7IGNhdCB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnbWFuZ2FUb3BCYXInLFxuICBjb21wb25lbnRzOiB7IHRvcEJjYXQgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJGJ1cy5lbWl0KCd1cGRhdGVNYW5nYScpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGZldGNoSlNPTignL2FwaS92MS9jYXRlZ29yeS8nKS50aGVuKChvcHQ6IGNhdFtdKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHQuc2xpY2UoMSk7XG4gICAgfSk7XG4gICAgdGhpcy4kZmV0Y2hKU09OKFxuICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2F0ZWdvcnkvYFxuICAgICkudGhlbigob3B0OiBjYXRbXSkgPT4ge1xuICAgICAgdGhpcy5jdXJyID0gb3B0O1xuICAgIH0pO1xuICB9LFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG86IHJlZihmYWxzZSksXG4gICAgICBvcHRpb25zOiByZWYoPGNhdFtdPltdKSxcbiAgICAgIGN1cnI6IHJlZig8Y2F0W10+W10pLFxuICAgICAgZGlzcDogcmVmKFtdKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQ04sVUFBSSxLQUFLLE9BQU07QUFDUixhQUFBO0FBQUEsVUFDSCxpQkFBaUIsS0FBSyxPQUFPLE9BQU8sdUJBQXVCLEtBQUssSUFBSTtBQUFBLFFBQUE7QUFBQSxNQUN0RSxPQUVHO0FBQ0UsYUFBQTtBQUFBLFVBQ0gsaUJBQWlCLEtBQUssT0FBTyxPQUFPLHVCQUF1QixLQUFLLElBQUk7QUFBQSxVQUFLO0FBQUEsWUFDdkUsUUFBTztBQUFBLFVBQ1Q7QUFBQSxRQUFBO0FBQUEsTUFFSjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNLE9BQU87QUFDSixXQUFBO0FBQUEsTUFDTCxPQUFPLElBQUksTUFBTSxJQUFJO0FBQUEsSUFBQTtBQUFBLEVBRXpCO0FBQ0YsQ0FBQzs7c0JBekNDQyxZQUVTLE9BQUEsTUFBQTtBQUFBLElBQUEsU0FBQUMsUUFEUCxNQUF1RDtBQUFBLE1BQXZEQyxZQUF1RCxTQUFBO0FBQUEsUUFBcEMsWUFBQSxLQUFBO0FBQUEsUUFBSyx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLFFBQUE7QUFBQSxRQUFHLE9BQU8sS0FBSSxJQUFBO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGNBQUEsT0FBQSxDQUFBO0FBQUE7Ozs7O0FDd0MxQyxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZLEVBQUUsUUFBUTtBQUFBLEVBQ3RCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFDRixXQUFBLEtBQUssS0FBSyxhQUFhO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLFdBQVk7QUFDbkIsU0FBSyxXQUFXLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxRQUFlO0FBQ25ELFdBQUEsVUFBVSxJQUFJLE1BQU0sQ0FBQztBQUFBLElBQUEsQ0FDM0I7QUFDSSxTQUFBO0FBQUEsTUFDSCxpQkFBaUIsS0FBSyxPQUFPLE9BQU87QUFBQSxJQUFBLEVBQ3BDLEtBQUssQ0FBQyxRQUFlO0FBQ3JCLFdBQUssT0FBTztBQUFBLElBQUEsQ0FDYjtBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFDQyxXQUFBO0FBQUEsTUFDTCxPQUFPLElBQUksS0FBSztBQUFBLE1BQ2hCLFNBQVMsSUFBVyxFQUFFO0FBQUEsTUFDdEIsTUFBTSxJQUFXLEVBQUU7QUFBQSxNQUNuQixNQUFNLElBQUksRUFBRTtBQUFBLElBQUE7QUFBQSxFQUVoQjtBQUNGLENBQUM7QUF0RE8sTUFBQSxhQUFBQyxnQ0FBeUMsT0FBcEMsRUFBQSxPQUFNLGFBQVUsa0JBQWMsRUFBQTs7OztJQWJ6Q0QsWUFTUSxNQUFBO0FBQUEsTUFSTixNQUFBO0FBQUEsTUFDQSxPQUFNO0FBQUEsTUFDTixPQUFBO0FBQUEsTUFDQyxjQUFZLEtBQUcsR0FBQSxLQUFLLFdBQVEsVUFBQTtBQUFBLE1BQzdCLE1BQUs7QUFBQSxNQUNKLFNBQUssc0NBQUUsS0FBSyxRQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBRWIsTUFBcUM7QUFBQSxRQUFyQ0EsWUFBcUMsVUFBQSxNQUFBO0FBQUEsVUFBQSxTQUFBRCxRQUExQixNQUFjO0FBQUEsWUFBQUcsZ0JBQWQsZ0JBQWM7QUFBQSxVQUFBLENBQUE7QUFBQTs7Ozs7SUFFM0JGLFlBY1csU0FBQTtBQUFBLE1BZFEsWUFBQSxLQUFBO0FBQUEsTUFBSyx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLFFBQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFDdEIsTUFZUztBQUFBLFFBWlRBLFlBWVMsT0FBQSxNQUFBO0FBQUEsVUFBQSxTQUFBRCxRQVhQLE1BRWlCO0FBQUEsWUFGakJDLFlBRWlCLGNBRkQsRUFBQSxPQUFBLFVBQUEsR0FBTTtBQUFBLGNBQVMsU0FBQUQsUUFDN0IsTUFBeUM7QUFBQSxnQkFBekM7QUFBQSxjQUFBLENBQUE7QUFBQTs7WUFFRkMsWUFBMkIsVUFBQTtBQUFBLGFBQUFHLFVBQUEsSUFBQSxHQUMzQkMsbUJBTVVDLFVBQUEsTUFBQUMsV0FMTSxLQUFPLFNBQUEsQ0FBZCxRQUFHO2tDQURaUixZQU1VLG9CQUFBO0FBQUEsZ0JBSlAsS0FBSyxJQUFJO0FBQUEsZ0JBQ1QsTUFBTSxVQUFLLEtBQUksQ0FBRSxRQUFRLElBQUksTUFBTSxJQUFJLEVBQUUsS0FBSztBQUFBLGdCQUM5QyxLQUFLO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsS0FBQSxDQUFBO0FBQUE7Ozs7Ozs7SUFLWkUsWUFRUSxNQUFBO0FBQUEsTUFQTixNQUFBO0FBQUEsTUFDQSxPQUFBO0FBQUEsTUFDQyxjQUFZLEtBQUcsR0FBQSxLQUFLLFdBQVEsVUFBQTtBQUFBLE1BQzdCLE1BQUs7QUFBQSxNQUNKLFNBQU8sS0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUVSLE1BQXFDO0FBQUEsUUFBckNBLFlBQXFDLFVBQUEsTUFBQTtBQUFBLFVBQUEsU0FBQUQsUUFBMUIsTUFBYztBQUFBLFlBQUFHLGdCQUFkLGdCQUFjO0FBQUEsVUFBQSxDQUFBO0FBQUE7Ozs7Ozs7OzsifQ==
