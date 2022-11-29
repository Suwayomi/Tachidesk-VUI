import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QSeparator } from "./QSeparator.3fdd6d84.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QToggle } from "./QToggle.41c58e33.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { u as useInBar, a as langCodeToName } from "./Filters.b563a00e.js";
import SearchBar from "./SearchBar.f00d3400.js";
import { _ as _export_sfc, f as defineComponent, r as ref, j as openBlock, y as createElementBlock, n as createVNode, m as withCtx, F as Fragment, u as resolveComponent, z as renderList, D as withDirectives, v as createBaseVNode, k as createBlock, q as createTextVNode, t as toDisplayString } from "./index.75e4774b.js";
import "./QIcon.aa032244.js";
import "./QSpinner.6511ee07.js";
import "./Ripple.bedf8a1c.js";
import "./dom.3bfc77a6.js";
import "./use-dark.63b90c22.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./use-transition.34947ede.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.6b71ca31.js";
import "./use-key-composition.689d3f4d.js";
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
            createVNode(QSeparator, {
              dark: _ctx.$q.dark.isActive
            }, null, 8, ["dark"]),
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
            createVNode(QSeparator, {
              dark: _ctx.$q.dark.isActive
            }, null, 8, ["dark"]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLjQwOTk2N2RlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9leHRhbnRpb25zL1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0biBmbGF0IGNsYXNzPVwicS1tbC1zbVwiIHJvdW5kIGljb249XCJmaWx0ZXJfbGlzdFwiIEBjbGljaz1cImRpYWwgPSB0cnVlXCIgLz5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsXCI+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAyMCVcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5FbmFibGVkIExhbmd1YWdlczwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIiAvPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wdC1ub25lXCJcbiAgICAgICAgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMHZoOyBvdmVyZmxvdy15OiBhdXRvXCJcbiAgICAgID5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgdi1mb3I9XCIoZmlsdCwgaW5kZXgpIGluIGZpbHRlcnMuY3VycmxhbmdzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIHEtcGEtbm9uZVwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBsYW5nQ29kZVRvTmFtZShmaWx0KSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwiY3VyclwiIDp2YWw9XCJmaWx0XCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiIC8+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8cS1idG4gZmxhdCBsYWJlbD1cIk9LXCIgY29sb3I9XCJwcmltYXJ5XCIgdi1jbG9zZS1wb3B1cCAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgdXNlSW5CYXIgZnJvbSAnLi9GaWx0ZXJzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL1NlYXJjaEJhci52dWUnO1xuaW1wb3J0IHsgbGFuZ0NvZGVUb05hbWUgfSBmcm9tICcuL2xhbmd1YWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0V4dFRvcEJhcicsXG4gIGNvbXBvbmVudHM6IHsgU2VhcmNoQmFyIH0sXG4gIHdhdGNoOiB7XG4gICAgY3VycigpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRsYW5ncyh0aGlzLmN1cnIpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHJlZih1c2VJbkJhcigpKTtcbiAgICBjb25zdCBjdXJyID0gcmVmKGZpbHRlcnMudmFsdWUubGFuZ3MpO1xuICAgIGNvbnN0IGRpYWwgPSByZWYoZmFsc2UpO1xuICAgIHJldHVybiB7IGZpbHRlcnMsIGRpYWwsIGN1cnIsIGxhbmdDb2RlVG9OYW1lIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBLE1BQUssWUFBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLFlBQVksRUFBRSxVQUFVO0FBQUEsRUFDeEIsT0FBTztBQUFBLElBQ0wsT0FBTztBQUNBLFdBQUEsUUFBUSxTQUFTLEtBQUssSUFBSTtBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUNBLFVBQUEsVUFBVSxJQUFJLFNBQUEsQ0FBVTtBQUM5QixVQUFNLE9BQU8sSUFBSSxRQUFRLE1BQU0s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
