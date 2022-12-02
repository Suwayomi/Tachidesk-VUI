import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QTab } from "./QTab.aacc573f.js";
import { Q as QTabs } from "./QTabs.460280b8.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QRadio } from "./QRadio.0e80ef9a.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import SearchBar from "./SearchBar.c8352725.js";
import { u as useInBar } from "./Filters.d6e3deb1.js";
import { i as isConfig } from "./isConfigurable.ab1bc5d9.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, q as normalizeClass, k as withCtx, j as createBlock, n as createCommentVNode, F as Fragment, s as resolveComponent, p as createTextVNode } from "./index.0b61810d.js";
import "./QSpinner.0d412098.js";
import "./Ripple.ce29675d.js";
import "./dom.fd94eb85.js";
import "./uid.42677368.js";
import "./QResizeObserver.eb13856c.js";
import "./use-timeout.99cd911c.js";
import "./scroll.34fac392.js";
import "./rtl.b51694b1.js";
import "./use-dark.bc291eea.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./use-transition.65db8379.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.269ea6c0.js";
import "./use-key-composition.64dd1858.js";
import "./StoreStuff.f5900537.js";
const _sfc_main = defineComponent({
  name: "LibraryTopBar",
  components: { SearchBar },
  setup() {
    const filters = useInBar();
    const isConfigurable = ref(isConfig().isConfigurable);
    const disp = ref(`${filters.Display.value}`);
    return {
      dialo: ref(false),
      tab: ref("display"),
      disp,
      filters,
      isConfigurable
    };
  },
  watch: {
    disp() {
      if (this.disp == "null")
        this.filters.setDisplay(null);
      else
        this.filters.setDisplay(this.disp == "true");
    }
  }
});
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchBar = resolveComponent("SearchBar");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_SearchBar),
    createVNode(QBtn, {
      flat: "",
      class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
      round: "",
      icon: "display_settings",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialo = true)
    }, null, 8, ["class"]),
    createVNode(QDialog, {
      modelValue: _ctx.dialo,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.dialo = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-pa-none" }, {
              default: withCtx(() => [
                createVNode(QTabs, {
                  modelValue: _ctx.tab,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.tab = $event),
                  class: "text-teal"
                }, {
                  default: withCtx(() => [
                    createVNode(QTab, {
                      class: "q-px-xl",
                      name: "display",
                      icon: "display_settings",
                      label: "Display"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            _ctx.tab == "display" ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(QItem, { class: "q-mx-lg q-pt-md q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QItemSection, {
                    thumbnail: "",
                    class: "q-pr-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(QIcon, { name: "display_settings" })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("DISPLAY MODE")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-py-xs" }, {
                default: withCtx(() => [
                  createVNode(QRadio, {
                    modelValue: _ctx.disp,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.disp = $event),
                    val: "null",
                    label: "Compact grid"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-py-xs" }, {
                default: withCtx(() => [
                  createVNode(QRadio, {
                    modelValue: _ctx.disp,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.disp = $event),
                    val: "true",
                    label: "Comfortable grid"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QRadio, {
                    modelValue: _ctx.disp,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.disp = $event),
                    val: "false",
                    label: "list"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    _ctx.isConfigurable ? (openBlock(), createBlock(QBtn, {
      key: 0,
      flat: "",
      round: "",
      class: "q-ml-sm",
      icon: "settings",
      to: "../config"
    })) : createCommentVNode("", true)
  ], 64);
}
var SourceTopBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SourceTopBar.vue"]]);
export { SourceTopBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlVG9wQmFyLmQwMjViM2NjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvU291cmNlVG9wQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPFNlYXJjaEJhcj48L1NlYXJjaEJhcj5cbiAgPHEtYnRuXG4gICAgZmxhdFxuICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgcm91bmRcbiAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cImRpc3BsYXlfc2V0dGluZ3NcIlxuICAgIEBjbGljaz1cImRpYWxvID0gdHJ1ZVwiXG4gIC8+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgIDxxLXRhYnMgdi1tb2RlbD1cInRhYlwiIGNsYXNzPVwidGV4dC10ZWFsXCI+XG4gICAgICAgICAgPHEtdGFiXG4gICAgICAgICAgICBjbGFzcz1cInEtcHgteGxcIlxuICAgICAgICAgICAgbmFtZT1cImRpc3BsYXlcIlxuICAgICAgICAgICAgaWNvbj1cImRpc3BsYXlfc2V0dGluZ3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJEaXNwbGF5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtdGFicz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnZGlzcGxheSdcIj5cbiAgICAgICAgPHEtaXRlbSBjbGFzcz1cInEtbXgtbGcgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRodW1ibmFpbCBjbGFzcz1cInEtcHItc21cIj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImRpc3BsYXlfc2V0dGluZ3NcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5ESVNQTEFZIE1PREU8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB5LXhzXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJudWxsXCIgbGFiZWw9XCJDb21wYWN0IGdyaWRcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHkteHNcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cInRydWVcIiBsYWJlbD1cIkNvbWZvcnRhYmxlIGdyaWRcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi1tZFwiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwiZmFsc2VcIiBsYWJlbD1cImxpc3RcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG5cbiAgPHEtYnRuXG4gICAgdi1pZj1cImlzQ29uZmlndXJhYmxlXCJcbiAgICBmbGF0XG4gICAgcm91bmRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIGljb249XCJzZXR0aW5nc1wiXG4gICAgdG89XCIuLi9jb25maWdcIlxuICA+PC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCYXIudnVlJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ3NyYy9jb21wb25lbnRzL2xpYnJhcnkvRmlsdGVycyc7XG5pbXBvcnQgeyBpc0NvbmZpZyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZVNlYXJjaC9pc0NvbmZpZ3VyYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdMaWJyYXJ5VG9wQmFyJyxcbiAgY29tcG9uZW50czogeyBTZWFyY2hCYXIgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IEZpbHRlcnMoKTtcbiAgICBjb25zdCBpc0NvbmZpZ3VyYWJsZSA9IHJlZihpc0NvbmZpZygpLmlzQ29uZmlndXJhYmxlKTtcbiAgICBjb25zdCBkaXNwID0gcmVmKDwnbnVsbCcgfCAndHJ1ZScgfCAnZmFsc2UnPmAke2ZpbHRlcnMuRGlzcGxheS52YWx1ZX1gKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG86IHJlZihmYWxzZSksXG4gICAgICB0YWI6IHJlZignZGlzcGxheScpLFxuICAgICAgZGlzcCxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBpc0NvbmZpZ3VyYWJsZSxcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIGRpc3AoKSB7XG4gICAgICBpZiAodGhpcy5kaXNwID09ICdudWxsJykgdGhpcy5maWx0ZXJzLnNldERpc3BsYXkobnVsbCk7XG4gICAgICBlbHNlIHRoaXMuZmlsdGVycy5zZXREaXNwbGF5KHRoaXMuZGlzcCA9PSAndHJ1ZScpO1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfd2l0aEN0eCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVGV4dFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZLEVBQUUsVUFBVTtBQUFBLEVBQ3hCLFFBQVE7QUFDTixVQUFNLFVBQVVBO0FBQ2hCLFVBQU0saUJBQWlCLElBQUksU0FBUyxFQUFFLGNBQWM7QUFDcEQsVUFBTSxPQUFPLElBQStCLEdBQUcsUUFBUSxRQUFRLE9BQU87QUFDL0QsV0FBQTtBQUFBLE1BQ0wsT0FBTyxJQUFJLEtBQUs7QUFBQSxNQUNoQixLQUFLLElBQUksU0FBUztBQUFBLE1BQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUFBO0FBQUEsRUFFSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsT0FBTztBQUNMLFVBQUksS0FBSyxRQUFRO0FBQWEsYUFBQSxRQUFRLFdBQVcsSUFBSTtBQUFBO0FBQ2hELGFBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNO0FBQUEsSUFDbEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7Ozs7SUFqRkNDLFlBQXVCLG9CQUFBO0FBQUEsSUFDdkJBLFlBT0UsTUFBQTtBQUFBLE1BTkEsTUFBQTtBQUFBLE1BQ0EsT0FBS0MsZUFBQSxDQUFDLFdBRUUsS0FBQSxHQUFHLEtBQUssV0FBUSxVQUFB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
