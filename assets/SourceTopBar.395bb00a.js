import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QTab } from "./QTab.0a84aa85.js";
import { Q as QTabs } from "./QTabs.03dcafd4.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QIcon } from "./QIcon.aa032244.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QRadio } from "./QRadio.03f9724f.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import SearchBar from "./SearchBar.f00d3400.js";
import { u as useInBar } from "./Filters.e940003f.js";
import { i as isConfig } from "./isConfigurable.651788e3.js";
import { _ as _export_sfc, f as defineComponent, r as ref, j as openBlock, y as createElementBlock, n as createVNode, m as withCtx, k as createBlock, p as createCommentVNode, F as Fragment, u as resolveComponent, q as createTextVNode } from "./index.75e4774b.js";
import "./QSpinner.6511ee07.js";
import "./Ripple.bedf8a1c.js";
import "./dom.3bfc77a6.js";
import "./uid.42677368.js";
import "./QResizeObserver.98338598.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./rtl.b51694b1.js";
import "./use-dark.63b90c22.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
import "./use-transition.34947ede.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.6b71ca31.js";
import "./use-key-composition.689d3f4d.js";
import "./usefull.5da5779b.js";
import "./fetcher.d026f468.js";
const _sfc_main = defineComponent({
  name: "libraryTopBar",
  components: { SearchBar },
  watch: {
    disp() {
      if (this.disp == "null")
        this.filters.setDisplay(null);
      else
        this.filters.setDisplay(this.disp == "true");
    }
  },
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
  }
});
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchBar = resolveComponent("SearchBar");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_SearchBar),
    createVNode(QBtn, {
      flat: "",
      class: "q-ml-sm",
      round: "",
      "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
      icon: "display_settings",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialo = true)
    }, null, 8, ["text-color"]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlVG9wQmFyLjM5NWJiMDBhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvU291cmNlVG9wQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbiA8dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLmlzQWN0aXZlID8gYHdoaXRlYCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cImRpc3BsYXlfc2V0dGluZ3NcIlxuICAgIEBjbGljaz1cImRpYWxvID0gdHJ1ZVwiXG4gIC8+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgIDxxLXRhYnMgdi1tb2RlbD1cInRhYlwiIGNsYXNzPVwidGV4dC10ZWFsXCI+XG4gICAgICAgICAgPHEtdGFiXG4gICAgICAgICAgICBjbGFzcz1cInEtcHgteGxcIlxuICAgICAgICAgICAgbmFtZT1cImRpc3BsYXlcIlxuICAgICAgICAgICAgaWNvbj1cImRpc3BsYXlfc2V0dGluZ3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJEaXNwbGF5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtdGFicz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnZGlzcGxheSdcIj5cbiAgICAgICAgPHEtaXRlbSBjbGFzcz1cInEtbXgtbGcgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHRodW1ibmFpbCBjbGFzcz1cInEtcHItc21cIj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cImRpc3BsYXlfc2V0dGluZ3NcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5ESVNQTEFZIE1PREU8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB5LXhzXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJudWxsXCIgbGFiZWw9XCJDb21wYWN0IGdyaWRcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHkteHNcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cInRydWVcIiBsYWJlbD1cIkNvbWZvcnRhYmxlIGdyaWRcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi1tZFwiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwiZmFsc2VcIiBsYWJlbD1cImxpc3RcIiAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG5cbiAgPHEtYnRuXG4gICAgZmxhdFxuICAgIHJvdW5kXG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICBpY29uPVwic2V0dGluZ3NcIlxuICAgIHYtaWY9XCJpc0NvbmZpZ3VyYWJsZVwiXG4gICAgdG89XCIuLi9jb25maWdcIlxuICA+PC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCYXIudnVlJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJ3NyYy9jb21wb25lbnRzL2xpYnJhcnkvRmlsdGVycyc7XG5pbXBvcnQgeyBpc0NvbmZpZyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZVNlYXJjaC9pc0NvbmZpZ3VyYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdsaWJyYXJ5VG9wQmFyJyxcbiAgY29tcG9uZW50czogeyBTZWFyY2hCYXIgfSxcbiAgd2F0Y2g6IHtcbiAgICBkaXNwKCkge1xuICAgICAgaWYgKHRoaXMuZGlzcCA9PSAnbnVsbCcpIHRoaXMuZmlsdGVycy5zZXREaXNwbGF5KG51bGwpO1xuICAgICAgZWxzZSB0aGlzLmZpbHRlcnMuc2V0RGlzcGxheSh0aGlzLmRpc3AgPT0gJ3RydWUnKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSBGaWx0ZXJzKCk7XG4gICAgY29uc3QgaXNDb25maWd1cmFibGUgPSByZWYoaXNDb25maWcoKS5pc0NvbmZpZ3VyYWJsZSk7XG4gICAgY29uc3QgZGlzcCA9IHJlZig8J251bGwnIHwgJ3RydWUnIHwgJ2ZhbHNlJz5gJHtmaWx0ZXJzLkRpc3BsYXkudmFsdWV9YCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvOiByZWYoZmFsc2UpLFxuICAgICAgdGFiOiByZWYoJ2Rpc3BsYXknKSxcbiAgICAgIGRpc3AsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgaXNDb25maWd1cmFibGVcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVGV4dFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUEsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sWUFBWSxFQUFFLFVBQVU7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQ0wsVUFBSSxLQUFLLFFBQVE7QUFBYSxhQUFBLFFBQVEsV0FBVyxJQUFJO0FBQUE7QUFDaEQsYUFBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLE1BQU07QUFBQSxJQUNsRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFDTixVQUFNLFVBQVVBO0FBQ2hCLFVBQU0saUJBQWlCLElBQUksU0FBUyxFQUFFLGNBQWM7QUFDcEQsVUFBTSxPQUFPLElBQStCLEdBQUcsUUFBUSxRQUFRLE9BQU87QUFDL0QsV0FBQTtBQUFBLE1BQ0wsT0FBTyxJQUFJLEtBQUs7QUFBQSxNQUNoQixLQUFLLElBQUksU0FBUztBQUFBLE1BQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUFBO0FBQUEsRUFFSjtBQUNGLENBQUM7Ozs7O0lBakZDQyxZQUF1QixvQkFBQTtBQUFBLElBQ3ZCQSxZQU9FLE1BQUE7QUFBQSxNQU5BLE1BQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLE9BQUE7QUFBQSxNQUNDLGNBQVksS0FBRyxHQUFBLEtBQUssV0FBUSxVQUFB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
