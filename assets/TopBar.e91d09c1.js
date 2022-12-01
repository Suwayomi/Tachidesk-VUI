import { Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QCardSection } from "./QCardSection.6cd72ed9.js";
import { Q as QSeparator } from "./QSeparator.22c5d3c5.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.751b389a.js";
import { Q as QToggle } from "./QToggle.519c6e7f.js";
import { Q as QItem } from "./QItem.e5504d24.js";
import { Q as QCardActions } from "./QCardActions.d176eb8e.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { Q as QDialog } from "./QDialog.75edb166.js";
import { C as ClosePopup } from "./ClosePopup.5400fc3f.js";
import { u as useInBar, a as langCodeToName } from "./Filters.b0da0d77.js";
import SearchBar from "./SearchBar.dedd6d71.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, F as Fragment, s as resolveComponent, x as renderList, B as withDirectives, u as createBaseVNode, j as createBlock, p as createTextVNode, t as toDisplayString } from "./index.ba4ecd3b.js";
import "./QIcon.00211d75.js";
import "./QSpinner.ce362078.js";
import "./Ripple.d48b6bf8.js";
import "./dom.9c14e7bf.js";
import "./use-dark.7f6486f4.js";
import "./use-checkbox.edaab605.js";
import "./option-sizes.ff92785a.js";
import "./use-form.a300a275.js";
import "./use-timeout.fb745483.js";
import "./scroll.3ccd02db.js";
import "./use-transition.322af72f.js";
import "./focus-manager.32f8d49a.js";
import "./StoreStuff.b98d7f9e.js";
import "./QInput.a2e72a2b.js";
import "./use-key-composition.4fc2cfcf.js";
import "./uid.42677368.js";
const _sfc_main = defineComponent({
  name: "ExtTopBar",
  components: { SearchBar },
  watch: {
    curr() {
      this.filters.setlangs(this.curr);
    }
  },
  setup() {
    const filters = ref(useInBar());
    const curr = ref(filters.value.langs);
    const dial = ref(false);
    return { filters, dial, curr, langCodeToName };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Enabled Languages", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchBar = resolveComponent("SearchBar");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_SearchBar),
    createVNode(QBtn, {
      flat: "",
      class: "q-ml-sm",
      round: "",
      icon: "filter_list",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dial = true)
    }),
    createVNode(QDialog, {
      modelValue: _ctx.dial,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.dial = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, { style: { "width": "20%" } }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
            }),
            createVNode(QSeparator),
            createVNode(QCardSection, {
              class: "q-pt-none",
              style: { "max-height": "30vh", "overflow-y": "auto" }
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters.currlangs, (filt, index) => {
                  return openBlock(), createBlock(QCardSection, {
                    key: index,
                    class: "q-pa-none"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItem, {
                        class: "row justify-between q-pa-none",
                        style: { "width": "100%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.langCodeToName(filt)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QToggle, {
                                color: "blue",
                                modelValue: _ctx.curr,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.curr = $event),
                                val: filt
                              }, null, 8, ["modelValue", "val"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            }),
            createVNode(QSeparator),
            createVNode(QCardActions, { align: "right" }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  flat: "",
                  label: "OK",
                  color: "primary"
                }, null, 512), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64);
}
var ETB = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TopBar.vue"]]);
export { ETB as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLmU5MWQwOWMxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9leHRhbnRpb25zL1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0biBmbGF0IGNsYXNzPVwicS1tbC1zbVwiIHJvdW5kIGljb249XCJmaWx0ZXJfbGlzdFwiIEBjbGljaz1cImRpYWwgPSB0cnVlXCIgLz5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsXCI+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAyMCVcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5FbmFibGVkIExhbmd1YWdlczwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wdC1ub25lXCJcbiAgICAgICAgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMHZoOyBvdmVyZmxvdy15OiBhdXRvXCJcbiAgICAgID5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgdi1mb3I9XCIoZmlsdCwgaW5kZXgpIGluIGZpbHRlcnMuY3VycmxhbmdzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIHEtcGEtbm9uZVwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBsYW5nQ29kZVRvTmFtZShmaWx0KSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwiY3VyclwiIDp2YWw9XCJmaWx0XCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8cS1idG4gZmxhdCBsYWJlbD1cIk9LXCIgY29sb3I9XCJwcmltYXJ5XCIgdi1jbG9zZS1wb3B1cCAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgdXNlSW5CYXIgZnJvbSAnLi9GaWx0ZXJzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL1NlYXJjaEJhci52dWUnO1xuaW1wb3J0IHsgbGFuZ0NvZGVUb05hbWUgfSBmcm9tICcuL2xhbmd1YWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0V4dFRvcEJhcicsXG4gIGNvbXBvbmVudHM6IHsgU2VhcmNoQmFyIH0sXG4gIHdhdGNoOiB7XG4gICAgY3VycigpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRsYW5ncyh0aGlzLmN1cnIpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHJlZih1c2VJbkJhcigpKTtcbiAgICBjb25zdCBjdXJyID0gcmVmKGZpbHRlcnMudmFsdWUubGFuZ3MpO1xuICAgIGNvbnN0IGRpYWwgPSByZWYoZmFsc2UpO1xuICAgIHJldHVybiB7IGZpbHRlcnMsIGRpYWwsIGN1cnIsIGxhbmdDb2RlVG9OYW1lIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZLEVBQUUsVUFBVTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxJQUNMLE9BQU87QUFDQSxXQUFBLFFBQVEsU0FBUyxLQUFLLElBQUk7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFDQSxVQUFBLFVBQVUsSUFBSSxTQUFBLENBQVU7QUFDOUIsVUFBTSxPQUFPLElBQUksUUFBUSxNQUFNLEtBQUs7QUFDOUIsVUFBQSxPQUFPLElBQUksS0FBSztBQUN0QixXQUFPLEVBQUUsU0FBUyxNQUFNLE1BQU0sZUFBZTtBQUFBLEVBQy9DO0FBQ0YsQ0FBQztBQWxETyxNQUFBLGFBQUFBLGdDQUE0QyxPQUF2QyxFQUFBLE9BQU0sYUFBVSxxQkFBaUIsRUFBQTs7OztJQUw1Q0MsWUFBdUIsb0JBQUE7QUFBQSxJQUN2QkEsWUFBNEUsTUFBQTtBQUFBLE1BQXJFLE1BQUE7QUFBQSxNQUFLLE9BQU07QUFBQSxNQUFVLE9BQUE7QUFBQSxNQUFNLE1BQUs7QUFBQSxNQUFlLFNBQUssc0NBQUUsS0FBSSxPQUFBO0FBQUEsSUFBQSxDQUFBO0FBQUEsSUFDakVBLFlBOEJXLFNBQUE7QUFBQSxNQTlCUSxZQUFBLEtBQUE7QUFBQSxNQUFJLHVCQUFBLE9BQUEsT0FBQSxPQUFBLEtBQUEsQ0FBQSxXQUFBLEtBQUEsT0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUNyQixNQTRCUztBQUFBLFFBNUJUQSxZQTRCUywyQkE1QmlCLE1BQUEsS0FBQTtBQUFBLFVBQUEsU0FBQUMsUUFDeEIsTUFFaUI7QUFBQSxZQUZqQkQsWUFFaUIsY0FBQSxNQUFBO0FBQUEsY0FBQSxTQUFBQyxRQURmLE1BQTRDO0FBQUEsZ0JBQTVDO0FBQUEsY0FBQSxDQUFBO0FBQUE7O1lBRUZELFlBQWUsVUFBQTtBQUFBLFlBQ2ZBLFlBa0JpQixjQUFBO0FBQUEsY0FqQmYsT0FBTTtBQUFBLGNBQ04sT0FBQSxFQUFBLGNBQUEsUUFBQSxjQUFBLE9BQUE7QUFBQSxZQUFBLEdBQUE7QUFBQSwrQkFHRSxNQUEwQztBQUFBLGlCQUFBRSxVQUFBLElBQUEsR0FENUNDLG1CQWFpQkMsVUFaUyxNQUFBQyxXQUFBLEtBQUEsUUFBUSxXQUFTLENBQWpDLE1BQU0sVUFBSztzQ0FEckJDLFlBYWlCLGNBQUE7QUFBQSxvQkFYZCxLQUFLO0FBQUEsb0JBQ04sT0FBTTtBQUFBLGtCQUFBLEdBQUE7QUFBQSxxQ0FFTixNQU9TO0FBQUEsc0JBUFROLFlBT1MsT0FBQTtBQUFBLHdCQVBELE9BQU07QUFBQSx3QkFBZ0MsT0FBQSxFQUFBLFNBQUEsT0FBQTtBQUFBLHNCQUFBLEdBQUE7QUFBQSx5Q0FDNUMsTUFFaUI7QUFBQSwwQkFGakJBLFlBRWlCLGNBQUEsTUFBQTtBQUFBLDRCQUFBLFNBQUFDLFFBRGYsTUFBdUQ7QUFBQSw4QkFBdkRELFlBQXVELFlBQUEsTUFBQTtBQUFBLGdDQUFBLFNBQUFDLFFBQXpDLE1BQTBCO0FBQUEsa0NBQUFNLGdCQUFBQyxnQkFBdkIsb0JBQWUsSUFBSSxDQUFBLEdBQUEsQ0FBQTtBQUFBLGdDQUFBLENBQUE7QUFBQTs7Ozs7MEJBRXRDUixZQUVpQiw4QkFGSztBQUFBLDRCQUFBLFNBQUFDLFFBQ3BCLE1BQW9EO0FBQUEsOEJBQXBERCxZQUFvRCxTQUFBO0FBQUEsZ0NBQTFDLE9BQU07QUFBQSxnQ0FBZ0IsWUFBQSxLQUFBO0FBQUEsZ0NBQUksdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUEsS0FBQSxPQUFBO0FBQUEsZ0NBQUcsS0FBSztBQUFBLDhCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsY0FBQSxLQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztZQUtwREEsWUFBZSxVQUFBO0FBQUEsWUFDZkEsWUFFaUIsY0FGRCxFQUFBLE9BQUEsUUFBQSxHQUFBO0FBQUEsY0FBYSxTQUFBQyxRQUMzQixNQUF1RDtBQUFBLGdCQUFBUSxlQUF2RFQsWUFBdUQsTUFBQTtBQUFBLGtCQUFoRCxNQUFBO0FBQUEsa0JBQUssT0FBTTtBQUFBLGtCQUFLLE9BQU07QUFBQSxnQkFBQSxHQUFBLE1BQUEsR0FBQSxHQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OzsifQ==
