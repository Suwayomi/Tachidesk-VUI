import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QSeparator } from "./QSeparator.95dc5d53.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QToggle } from "./QToggle.a59079d2.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { u as useInBar, a as langCodeToName } from "./Filters.eb5af801.js";
import SearchBar from "./SearchBar.c8352725.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, F as Fragment, s as resolveComponent, x as renderList, B as withDirectives, u as createBaseVNode, j as createBlock, p as createTextVNode, t as toDisplayString } from "./index.0b61810d.js";
import "./QIcon.8780f7dc.js";
import "./QSpinner.0d412098.js";
import "./Ripple.ce29675d.js";
import "./dom.fd94eb85.js";
import "./use-dark.bc291eea.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./use-timeout.99cd911c.js";
import "./scroll.34fac392.js";
import "./use-transition.65db8379.js";
import "./focus-manager.32f8d49a.js";
import "./StoreStuff.f5900537.js";
import "./QInput.269ea6c0.js";
import "./use-key-composition.64dd1858.js";
import "./uid.42677368.js";
const _sfc_main = defineComponent({
  name: "ExtTopBar",
  components: { SearchBar },
  setup() {
    const filters = ref(useInBar());
    const curr = ref(filters.value.langs);
    const dial = ref(false);
    return { filters, dial, curr, langCodeToName };
  },
  watch: {
    curr() {
      this.filters.setlangs(this.curr);
    }
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
                                modelValue: _ctx.curr,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.curr = $event),
                                color: "blue",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLjdjYmQwYWQ0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9leHRhbnRpb25zL1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0biBmbGF0IGNsYXNzPVwicS1tbC1zbVwiIHJvdW5kIGljb249XCJmaWx0ZXJfbGlzdFwiIEBjbGljaz1cImRpYWwgPSB0cnVlXCIgLz5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsXCI+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAyMCVcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5FbmFibGVkIExhbmd1YWdlczwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wdC1ub25lXCJcbiAgICAgICAgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMHZoOyBvdmVyZmxvdy15OiBhdXRvXCJcbiAgICAgID5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgdi1mb3I9XCIoZmlsdCwgaW5kZXgpIGluIGZpbHRlcnMuY3VycmxhbmdzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIGNsYXNzPVwicS1wYS1ub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIHEtcGEtbm9uZVwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBsYW5nQ29kZVRvTmFtZShmaWx0KSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwiY3VyclwiIGNvbG9yPVwiYmx1ZVwiIDp2YWw9XCJmaWx0XCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8cS1idG4gdi1jbG9zZS1wb3B1cCBmbGF0IGxhYmVsPVwiT0tcIiBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgdXNlSW5CYXIgZnJvbSAnLi9GaWx0ZXJzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL1NlYXJjaEJhci52dWUnO1xuaW1wb3J0IHsgbGFuZ0NvZGVUb05hbWUgfSBmcm9tICcuL2xhbmd1YWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0V4dFRvcEJhcicsXG4gIGNvbXBvbmVudHM6IHsgU2VhcmNoQmFyIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSByZWYodXNlSW5CYXIoKSk7XG4gICAgY29uc3QgY3VyciA9IHJlZihmaWx0ZXJzLnZhbHVlLmxhbmdzKTtcbiAgICBjb25zdCBkaWFsID0gcmVmKGZhbHNlKTtcbiAgICByZXR1cm4geyBmaWx0ZXJzLCBkaWFsLCBjdXJyLCBsYW5nQ29kZVRvTmFtZSB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIGN1cnIoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0bGFuZ3ModGhpcy5jdXJyKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBLE1BQUssWUFBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLFlBQVksRUFBRSxVQUFVO0FBQUEsRUFDeEIsUUFBUTtBQUNBLFVBQUEsVUFBVSxJQUFJLFNBQUEsQ0FBVTtBQUM5QixVQUFNLE9BQU8sSUFBSSxRQUFRLE1BQU0sS0FBSztBQUM5QixVQUFBLE9BQU8sSUFBSSxLQUFLO0FBQ3RCLFdBQU8sRUFBRSxTQUFTLE1BQU0sTUFBTSxlQUFlO0FBQUEsRUFDL0M7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE9BQU87QUFDQSxXQUFBLFFBQVEsU0FBUyxLQUFL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
