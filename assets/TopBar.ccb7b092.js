import { Q as QTooltip } from "./QTooltip.5b3ee804.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QTab } from "./QTab.0a84aa85.js";
import { Q as QTabs } from "./QTabs.03dcafd4.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QCheckbox } from "./QCheckbox.64e78a72.js";
import { Q as QIcon } from "./QIcon.aa032244.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QRadio } from "./QRadio.03f9724f.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import SearchBar from "./SearchBar.f00d3400.js";
import { u as useInBar } from "./Filters.e940003f.js";
import { _ as _export_sfc, f as defineComponent, r as ref, j as openBlock, y as createElementBlock, n as createVNode, m as withCtx, F as Fragment, u as resolveComponent, q as createTextVNode, p as createCommentVNode } from "./index.75e4774b.js";
import "./position-engine.09a868e3.js";
import "./selection.3a23570e.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./use-timeout.4d745afd.js";
import "./use-transition.34947ede.js";
import "./QSpinner.6511ee07.js";
import "./Ripple.bedf8a1c.js";
import "./uid.42677368.js";
import "./QResizeObserver.98338598.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.4b6eeeb4.js";
import "./use-dark.63b90c22.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.6b71ca31.js";
import "./use-key-composition.689d3f4d.js";
import "./usefull.5da5779b.js";
import "./fetcher.d026f468.js";
const _sfc_main = defineComponent({
  name: "libraryTopBar",
  components: { SearchBar },
  methods: {
    update() {
      this.$fetch("/api/v1/update/fetch", {
        method: "POST",
        body: `categoryId=${this.$route.query["tab"]}`
      });
    }
  },
  watch: {
    unread() {
      this.filters.setUnread(this.unread);
    },
    downloaded() {
      this.filters.setDownloaded(this.downloaded);
    },
    leftToRead() {
      this.filters.setLeftToRead(this.leftToRead);
      if (this.leftToRead != null) {
        this.alphabetical = null;
        this.ByID = null;
      }
    },
    alphabetical() {
      this.filters.setAlphabetical(this.alphabetical);
      if (this.alphabetical != null) {
        this.leftToRead = null;
        this.ByID = null;
      }
    },
    ByID() {
      this.filters.setByID(this.ByID);
      if (this.ByID != null) {
        this.alphabetical = null;
        this.leftToRead = null;
      }
    },
    disp() {
      if (this.disp == "null")
        this.filters.setDisplay(null);
      else
        this.filters.setDisplay(this.disp == "true");
    }
  },
  setup() {
    const filters = useInBar();
    const unread = ref(filters.unread.value);
    const downloaded = ref(filters.downloaded.value);
    const leftToRead = ref(filters.leftToRead.value);
    const alphabetical = ref(filters.alphabetical.value);
    const ByID = ref(filters.ByID.value);
    const disp = ref(`${filters.Display.value}`);
    return {
      dialo: ref(false),
      tab: ref("filter"),
      unread,
      downloaded,
      leftToRead,
      alphabetical,
      ByID,
      disp,
      filters
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchBar = resolveComponent("SearchBar");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_SearchBar),
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
            createTextVNode(" Sort / Filter / Display ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["text-color"]),
    createVNode(QDialog, {
      modelValue: _ctx.dialo,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.dialo = $event)
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
                      name: "filter",
                      icon: "filter_list",
                      label: "Filter"
                    }),
                    createVNode(QTab, {
                      class: "q-px-xl",
                      name: "sort",
                      icon: "sort",
                      label: "Sort"
                    }),
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
            _ctx.tab == "filter" ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(QCardSection, { class: "q-px-md q-pt-md q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    modelValue: _ctx.unread,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.unread = $event),
                    dark: _ctx.$q.dark.isActive,
                    label: "Unread",
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "blue"
                  }, null, 8, ["modelValue", "dark"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
                    modelValue: _ctx.downloaded,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.downloaded = $event),
                    label: "Downloaded",
                    dark: _ctx.$q.dark.isActive,
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "green"
                  }, null, 8, ["modelValue", "dark"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            _ctx.tab == "sort" ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(QCardSection, { class: "q-px-md q-pt-md q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    modelValue: _ctx.leftToRead,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.leftToRead = $event),
                    label: "By left to Read",
                    dark: _ctx.$q.dark.isActive
                  }, null, 8, ["modelValue", "dark"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    modelValue: _ctx.alphabetical,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.alphabetical = $event),
                    label: "Alphabetical",
                    dark: _ctx.$q.dark.isActive
                  }, null, 8, ["modelValue", "dark"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    modelValue: _ctx.ByID,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.ByID = $event),
                    label: "By ID",
                    dark: _ctx.$q.dark.isActive
                  }, null, 8, ["modelValue", "dark"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            _ctx.tab == "display" ? (openBlock(), createElementBlock("div", _hoisted_3, [
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
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.disp = $event),
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
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.disp = $event),
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
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.disp = $event),
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
            createTextVNode(" Update category ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["text-color", "onClick"])
  ], 64);
}
var TopBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TopBar.vue"]]);
export { TopBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLmNjYjdiMDkyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLmlzQWN0aXZlID8gYHdoaXRlYCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICBAY2xpY2s9XCJkaWFsbyA9IHRydWVcIlxuICA+XG4gICAgPHEtdG9vbHRpcD4gU29ydCAvIEZpbHRlciAvIERpc3BsYXkgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgIDxxLXRhYnMgdi1tb2RlbD1cInRhYlwiIGNsYXNzPVwidGV4dC10ZWFsXCI+XG4gICAgICAgICAgPHEtdGFiXG4gICAgICAgICAgICBjbGFzcz1cInEtcHgteGxcIlxuICAgICAgICAgICAgbmFtZT1cImZpbHRlclwiXG4gICAgICAgICAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHEtdGFiIGNsYXNzPVwicS1weC14bFwiIG5hbWU9XCJzb3J0XCIgaWNvbj1cInNvcnRcIiBsYWJlbD1cIlNvcnRcIiAvPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJkaXNwbGF5XCJcbiAgICAgICAgICAgIGljb249XCJkaXNwbGF5X3NldHRpbmdzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGlzcGxheVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLXRhYnM+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ2ZpbHRlcidcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgdi1tb2RlbD1cInVucmVhZFwiXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgICAgbGFiZWw9XCJVbnJlYWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkb3dubG9hZGVkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRG93bmxvYWRlZFwiXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInRhYiA9PSAnc29ydCdcIj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJhcnJvd191cHdhcmRcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJhcnJvd19kb3dud2FyZFwiXG4gICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJudWxsXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBrZWVwLWNvbG9yXG4gICAgICAgICAgICB2LW1vZGVsPVwibGVmdFRvUmVhZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkJ5IGxlZnQgdG8gUmVhZFwiXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cImFscGhhYmV0aWNhbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkFscGhhYmV0aWNhbFwiXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cIkJ5SURcIlxuICAgICAgICAgICAgbGFiZWw9XCJCeSBJRFwiXG4gICAgICAgICAgICA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdkaXNwbGF5J1wiPlxuICAgICAgICA8cS1pdGVtIGNsYXNzPVwicS1teC1sZyBxLXB0LW1kIHEtcGIteHNcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gdGh1bWJuYWlsIGNsYXNzPVwicS1wci1zbVwiPlxuICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwiZGlzcGxheV9zZXR0aW5nc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkRJU1BMQVkgTU9ERTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHkteHNcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cIm51bGxcIiBsYWJlbD1cIkNvbXBhY3QgZ3JpZFwiIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS14c1wiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwidHJ1ZVwiIGxhYmVsPVwiQ29tZm9ydGFibGUgZ3JpZFwiIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJmYWxzZVwiIGxhYmVsPVwibGlzdFwiIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cblxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgcm91bmRcbiAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgd2hpdGVgIDogYGRhcmtgXCJcbiAgICBpY29uPVwicmVmcmVzaFwiXG4gICAgQGNsaWNrPVwidXBkYXRlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFVwZGF0ZSBjYXRlZ29yeSA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCYXIudnVlJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vRmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdsaWJyYXJ5VG9wQmFyJyxcbiAgY29tcG9uZW50czogeyBTZWFyY2hCYXIgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL3VwZGF0ZS9mZXRjaCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGBjYXRlZ29yeUlkPSR7dGhpcy4kcm91dGUucXVlcnlbJ3RhYiddfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB1bnJlYWQoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0VW5yZWFkKHRoaXMudW5yZWFkKTtcbiAgICB9LFxuICAgIGRvd25sb2FkZWQoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0RG93bmxvYWRlZCh0aGlzLmRvd25sb2FkZWQpO1xuICAgIH0sXG4gICAgbGVmdFRvUmVhZCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRMZWZ0VG9SZWFkKHRoaXMubGVmdFRvUmVhZCk7XG4gICAgICBpZiAodGhpcy5sZWZ0VG9SZWFkICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbHBoYWJldGljYWwgPSBudWxsO1xuICAgICAgICB0aGlzLkJ5SUQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxwaGFiZXRpY2FsKCkge1xuICAgICAgdGhpcy5maWx0ZXJzLnNldEFscGhhYmV0aWNhbCh0aGlzLmFscGhhYmV0aWNhbCk7XG4gICAgICBpZiAodGhpcy5hbHBoYWJldGljYWwgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxlZnRUb1JlYWQgPSBudWxsO1xuICAgICAgICB0aGlzLkJ5SUQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgQnlJRCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRCeUlEKHRoaXMuQnlJRCk7XG4gICAgICBpZiAodGhpcy5CeUlEICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbHBoYWJldGljYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRUb1JlYWQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcCgpIHtcbiAgICAgIGlmICh0aGlzLmRpc3AgPT0gJ251bGwnKSB0aGlzLmZpbHRlcnMuc2V0RGlzcGxheShudWxsKTtcbiAgICAgIGVsc2UgdGhpcy5maWx0ZXJzLnNldERpc3BsYXkodGhpcy5kaXNwID09ICd0cnVlJyk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gRmlsdGVycygpO1xuICAgIGNvbnN0IHVucmVhZCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy51bnJlYWQudmFsdWUpO1xuICAgIGNvbnN0IGRvd25sb2FkZWQgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMuZG93bmxvYWRlZC52YWx1ZSk7XG4gICAgY29uc3QgbGVmdFRvUmVhZCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy5sZWZ0VG9SZWFkLnZhbHVlKTtcbiAgICBjb25zdCBhbHBoYWJldGljYWwgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMuYWxwaGFiZXRpY2FsLnZhbHVlKTtcbiAgICBjb25zdCBCeUlEID0gcmVmKDxib29sZWFuIHwgbnVsbD5maWx0ZXJzLkJ5SUQudmFsdWUpO1xuICAgIGNvbnN0IGRpc3AgPSByZWYoPCdudWxsJyB8ICd0cnVlJyB8ICdmYWxzZSc+YCR7ZmlsdGVycy5EaXNwbGF5LnZhbHVlfWApO1xuICAgIHJldHVybiB7XG4gICAgICBkaWFsbzogcmVmKGZhbHNlKSxcbiAgICAgIHRhYjogcmVmKCdmaWx0ZXInKSxcbiAgICAgIHVucmVhZCxcbiAgICAgIGRvd25sb2FkZWQsXG4gICAgICBsZWZ0VG9SZWFkLFxuICAgICAgYWxwaGFiZXRpY2FsLFxuICAgICAgQnlJRCxcbiAgICAgIGRpc3AsXG4gICAgICBmaWx0ZXJzXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJGaWx0ZXJzIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1SkEsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sWUFBWSxFQUFFLFVBQVU7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDUCxTQUFTO0FBQ1AsV0FBSyxPQUFPLHdCQUF3QjtBQUFBLFFBQ2xDLFFBQVE7QUFBQSxRQUNSLE1BQU0sY0FBYyxLQUFLLE9BQU8sTUFBTTtBQUFBLE1BQUEsQ0FDdkM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBLEVBQ0Es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
