import { Q as QTooltip } from "./QTooltip.6bd57eb1.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QTab } from "./QTab.5863deae.js";
import { Q as QTabs } from "./QTabs.02416a46.js";
import { Q as QCardSection } from "./QCardSection.c8f72209.js";
import { Q as QCheckbox } from "./QCheckbox.76c4b12d.js";
import { Q as QIcon } from "./QIcon.129c8e27.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.f373f416.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QRadio } from "./QRadio.2833a467.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QDialog } from "./QDialog.e6d65e20.js";
import SearchBar from "./SearchBar.abafa665.js";
import { u as useInBar } from "./Filters.0cd04f8b.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, q as normalizeClass, F as Fragment, s as resolveComponent, p as createTextVNode, n as createCommentVNode } from "./index.5cc93081.js";
import "./position-engine.4089f253.js";
import "./selection.4336ddbe.js";
import "./scroll.b1151d01.js";
import "./dom.e2e78a08.js";
import "./use-timeout.fccbe84a.js";
import "./use-transition.651acf9e.js";
import "./QSpinner.7d14a7f2.js";
import "./Ripple.3a8ac2e1.js";
import "./uid.42677368.js";
import "./QResizeObserver.08dcd257.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.17ce6f52.js";
import "./use-dark.1adac86a.js";
import "./option-sizes.60af55ae.js";
import "./use-form.94dd5d17.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.cad7e9be.js";
import "./use-key-composition.a20c22ba.js";
import "./StoreStuff.45ae8e68.js";
const _sfc_main = defineComponent({
  name: "libraryTopBar",
  components: { SearchBar },
  methods: {
    update() {
      this.$api.post(
        "/api/v1/update/fetch",
        `categoryId=${this.$route.query["tab"]}`
      );
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
      class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
      round: "",
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
    }, 8, ["class"]),
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
                    label: "Unread",
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "blue"
                  }, null, 8, ["modelValue"])
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
                    "checked-icon": "check_box",
                    "unchecked-icon": "r_disabled_by_default",
                    "indeterminate-icon": "check_box_outline_blank",
                    "keep-color": "",
                    size: "lg",
                    color: "green"
                  }, null, 8, ["modelValue"])
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
                    label: "By left to Read"
                  }, null, 8, ["modelValue"])
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
                    label: "Alphabetical"
                  }, null, 8, ["modelValue"])
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
                    label: "By ID"
                  }, null, 8, ["modelValue"])
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
      class: normalizeClass(_ctx.$q.dark.isActive ? `light` : `dark`),
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
    }, 8, ["class", "onClick"])
  ], 64);
}
var TopBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TopBar.vue"]]);
export { TopBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLjQwZTQ2YjA5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFNvcnQgLyBGaWx0ZXIgLyBEaXNwbGF5IDwvcS10b29sdGlwPlxuICA8L3EtYnRuPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXRhYiBjbGFzcz1cInEtcHgteGxcIiBuYW1lPVwic29ydFwiIGljb249XCJzb3J0XCIgbGFiZWw9XCJTb3J0XCIgLz5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIGNsYXNzPVwicS1weC14bFwiXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheVwiXG4gICAgICAgICAgICBpY29uPVwiZGlzcGxheV9zZXR0aW5nc1wiXG4gICAgICAgICAgICBsYWJlbD1cIkRpc3BsYXlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS10YWJzPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdmaWx0ZXInXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1bnJlYWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJVbnJlYWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkb3dubG9hZGVkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRG93bmxvYWRlZFwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdzb3J0J1wiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHYtbW9kZWw9XCJsZWZ0VG9SZWFkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiQnkgbGVmdCB0byBSZWFkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHYtbW9kZWw9XCJhbHBoYWJldGljYWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJBbHBoYWJldGljYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cIkJ5SURcIlxuICAgICAgICAgICAgbGFiZWw9XCJCeSBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ2Rpc3BsYXknXCI+XG4gICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLW14LWxnIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0aHVtYm5haWwgY2xhc3M9XCJxLXByLXNtXCI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkaXNwbGF5X3NldHRpbmdzXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+RElTUExBWSBNT0RFPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS14c1wiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwibnVsbFwiIGxhYmVsPVwiQ29tcGFjdCBncmlkXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB5LXhzXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJ0cnVlXCIgbGFiZWw9XCJDb21mb3J0YWJsZSBncmlkXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cImZhbHNlXCIgbGFiZWw9XCJsaXN0XCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuXG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICByb3VuZFxuICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICBpY29uPVwicmVmcmVzaFwiXG4gICAgQGNsaWNrPVwidXBkYXRlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFVwZGF0ZSBjYXRlZ29yeSA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCYXIudnVlJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vRmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdsaWJyYXJ5VG9wQmFyJyxcbiAgY29tcG9uZW50czogeyBTZWFyY2hCYXIgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJGFwaS5wb3N0KFxuICAgICAgICAnL2FwaS92MS91cGRhdGUvZmV0Y2gnLFxuICAgICAgICBgY2F0ZWdvcnlJZD0ke3RoaXMuJHJvdXRlLnF1ZXJ5Wyd0YWInXX1gXG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB1bnJlYWQoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0VW5yZWFkKHRoaXMudW5yZWFkKTtcbiAgICB9LFxuICAgIGRvd25sb2FkZWQoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0RG93bmxvYWRlZCh0aGlzLmRvd25sb2FkZWQpO1xuICAgIH0sXG4gICAgbGVmdFRvUmVhZCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRMZWZ0VG9SZWFkKHRoaXMubGVmdFRvUmVhZCk7XG4gICAgICBpZiAodGhpcy5sZWZ0VG9SZWFkICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbHBoYWJldGljYWwgPSBudWxsO1xuICAgICAgICB0aGlzLkJ5SUQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxwaGFiZXRpY2FsKCkge1xuICAgICAgdGhpcy5maWx0ZXJzLnNldEFscGhhYmV0aWNhbCh0aGlzLmFscGhhYmV0aWNhbCk7XG4gICAgICBpZiAodGhpcy5hbHBoYWJldGljYWwgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxlZnRUb1JlYWQgPSBudWxsO1xuICAgICAgICB0aGlzLkJ5SUQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgQnlJRCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRCeUlEKHRoaXMuQnlJRCk7XG4gICAgICBpZiAodGhpcy5CeUlEICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbHBoYWJldGljYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRUb1JlYWQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcCgpIHtcbiAgICAgIGlmICh0aGlzLmRpc3AgPT0gJ251bGwnKSB0aGlzLmZpbHRlcnMuc2V0RGlzcGxheShudWxsKTtcbiAgICAgIGVsc2UgdGhpcy5maWx0ZXJzLnNldERpc3BsYXkodGhpcy5kaXNwID09ICd0cnVlJyk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gRmlsdGVycygpO1xuICAgIGNvbnN0IHVucmVhZCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy51bnJlYWQudmFsdWUpO1xuICAgIGNvbnN0IGRvd25sb2FkZWQgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMuZG93bmxvYWRlZC52YWx1ZSk7XG4gICAgY29uc3QgbGVmdFRvUmVhZCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy5sZWZ0VG9SZWFkLnZhbHVlKTtcbiAgICBjb25zdCBhbHBoYWJldGljYWwgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMuYWxwaGFiZXRpY2FsLnZhbHVlKTtcbiAgICBjb25zdCBCeUlEID0gcmVmKDxib29sZWFuIHwgbnVsbD5maWx0ZXJzLkJ5SUQudmFsdWUpO1xuICAgIGNvbnN0IGRpc3AgPSByZWYoPCdudWxsJyB8ICd0cnVlJyB8ICdmYWxzZSc+YCR7ZmlsdGVycy5EaXNwbGF5LnZhbHVlfWApO1xuICAgIHJldHVybiB7XG4gICAgICBkaWFsbzogcmVmKGZhbHNlKSxcbiAgICAgIHRhYjogcmVmKCdmaWx0ZXInKSxcbiAgICAgIHVucmVhZCxcbiAgICAgIGRvd25sb2FkZWQsXG4gICAgICBsZWZ0VG9SZWFkLFxuICAgICAgYWxwaGFiZXRpY2FsLFxuICAgICAgQnlJRCxcbiAgICAgIGRpc3AsXG4gICAgICBmaWx0ZXJzXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJGaWx0ZXJzIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtKQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZLEVBQUUsVUFBVTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFDUCxXQUFLLEtBQUs7QUFBQSxRQUNSO0FBQUEsUUFDQSxjQUFjLEtBQUssT0FBTyxNQUFNO0FBQUEsTUFBQTtBQUFBLElBRXBDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsU0FBUztBQUNGLFdBQUEsUUFBUSxVQUFVLEtBQUssTUFBTTtBQUFBLElBQ3BDO0FBQUEsSUFDQSxhQUFhO0FBQ04sV0FBQSxRQUFRLGNBQWMsS0FBSyxVQUFVO0FBQUEsSUFDNUM7QUFBQSxJQUNBLGFBQWE7QUFDTixXQUFBLFFBQVEsY0FBYyxLQUFLLFVBQVU7QUFDdEMsVUFBQSxLQUFLLGNBQWMsTUFBTTtBQUMzQixhQUFLLGVBQWU7QUFDcEIsYUFBSyxPQUFPO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFDUixXQUFBLFFBQVEsZ0JBQWdCLEtBQUssWUFBWTtBQUMxQyxVQUFBLEtBQUssZ0JBQWdCLE1BQU07QUFDN0IsYUFBSyxhQUFhO0FBQ2xCLGFBQUssT0FBTztBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQ0EsV0FBQSxRQUFRLFFBQVEsS0FBSyxJQUFJO0FBQzFCLFVBQUEsS0FBSyxRQUFRLE1BQU07QUFDckIsYUFBSyxlQUFlO0FBQ3BCLGFBQUssYUFBYTtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUNMLFVBQUksS0FBSyxRQUFRO0FBQWEsYUFBQSxRQUFRLFdBQVcsSUFBSTtBQUFBO0FBQ2hELGFBQUssUUFBUSxXQUFXLEtBQUssUUFBUSxNQUFNO0FBQUEsSUFDbEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQ04sVUFBTSxVQUFVQTtBQUNoQixVQUFNLFNBQVMsSUFBb0IsUUFBUSxPQUFPLEtBQUs7QUFDdkQsVUFBTSxhQUFhLElBQW9CLFFBQVEsV0FBVyxLQUFLO0FBQy9ELFVBQU0sYUFBYSxJQUFvQixRQUFRLFdBQVcsS0FBSztBQUMvRCxVQUFNLGVBQWUsSUFBb0IsUUFBUSxhQUFhLEtBQUs7QUFDbkUsVUFBTSxPQUFPLElBQW9CLFFBQVEsS0FBSyxLQUFLO0FBQ25ELFVBQU0sT0FBTyxJQUErQixHQUFHLFFBQVEsUUFBUSxPQUFPO0FBQy9ELFdBQUE7QUFBQSxNQUNMLE9BQU8sSUFBSSxLQUFLO0FBQUEsTUFDaEIsS0FBSyxJQUFJLFFBQVE7QUFBQSxNQUNqQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQUE7QUFBQSxFQUVKO0FBQ0YsQ0FBQzs7Ozs7OztJQTNNQ0MsWUFBdUIsb0JBQUE7QUFBQSxJQUN2QkEsWUFTUSxNQUFBO0FBQUEsTUFSTixNQUFBO0FBQUEsTUFDQSxPQUFLQyxlQUFBLENBQUMsV0FFRSxLQUFBLEdBQUcsS0FBSyxXQUFRLFVBQUEsTUFBQSxDQUFBO0FBQUEsTUFEeEIsT0FBQTtBQUFBLE1BRUEsTUFBSztBQUFBLE1BQ0osU0FBSyxzQ0FBRSxLQUFLLFFBQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFFYixNQUFnRDtBQUFBLFFBQWhERCxZQUFnRCxVQUFBLE1BQUE7QUFBQSxVQUFBLFNBQUFFLFFBQXJDLE1BQXlCO0FBQUEsWUFBQUMsZ0JBQXpCLDJCQUF5QjtBQUFBLFVBQUEsQ0FBQTtBQUFBOzs7OztJQUV0Q0gsWUE4R1csU0FBQTtBQUFBLE1BOUdRLFlBQUEsS0FBQTtBQUFBLE1BQUssdUJBQUEsT0FBQSxRQUFBLE9BQUEsTUFBQSxDQUFBLFdBQUEsS0FBQSxRQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBQ3RCLE1BNEdTO0FBQUEsUUE1R1RBLFlBNEdTLE9BQUEsTUFBQTtBQUFBLFVBQUEsU0FBQUUsUUEzR1AsTUFnQmlCO0FBQUEsWUFoQmpCRixZQWdCaUIsY0FoQkQsRUFBQSxPQUFBLFlBQUEsR0FBaUI7QUFBQSxjQUFBLFNBQUFFLFFBQy9CLE1BY1M7QUFBQSxnQkFkVEYsWUFjUyxPQUFBO0FBQUEsa0JBZFEsWUFBQSxLQUFBO0FBQUEsa0JBQUcsdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBO0FBQUEsa0JBQUUsT0FBTTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxtQ0FDMUIsTUFLRTtBQUFBLG9CQUxGQSxZQUtFLE1BQUE7QUFBQSxzQkFKQSxPQUFNO0FBQUEsc0JBQ04sTUFBSztBQUFBLHNCQUNMLE1BQUs7QUFBQSxzQkFDTCxPQUFNO0FBQUEsb0JBQUEsQ0FBQTtBQUFBLG9CQUVSQSxZQUE4RCxNQUFBO0FBQUEsc0JBQXZELE9BQU07QUFBQSxzQkFBVSxNQUFLO0FBQUEsc0JBQU8sTUFBSztBQUFBLHNCQUFPLE9BQU07QUFBQSxvQkFBQSxDQUFBO0FBQUEsb0JBQ3JEQSxZQUtFLE1BQUE7QUFBQSxzQkFKQSxPQUFNO0FBQUEsc0JBQ04sTUFBSztBQUFBLHNCQUNMLE1BQUs7QUFBQSxzQkFDTCxPQUFNO0FBQUEsb0JBQUEsQ0FBQTtBQUFBOzs7Ozs7WUFLRCxLQUFBLE9BQUcseUJBQWRJLG1CQTZCTSxPQUFBLFlBQUE7QUFBQSxjQTVCSkosWUFhaUIsY0FiRCxFQUFBLE9BQUEsMEJBQStCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUM3QyxNQVdFO0FBQUEsa0JBWEZGLFlBV0UsV0FBQTtBQUFBLG9CQVZBLE9BQUEsRUFBQSxTQUFBLE9BQUE7QUFBQSxvQkFDQSx3QkFBQTtBQUFBLG9CQUNTLFlBQUEsS0FBQTtBQUFBLG9CQUFNLHVCQUFBLE9BQUEsT0FBQSxPQUFBLEtBQUEsQ0FBQSxXQUFBLEtBQUEsU0FBQTtBQUFBLG9CQUNmLE9BQU07QUFBQSxvQkFDTixnQkFBYTtBQUFBLG9CQUNiLGtCQUFlO0FBQUEsb0JBQ2Ysc0JBQW1CO0FBQUEsb0JBQ25CLGNBQUE7QUFBQSxvQkFDQSxNQUFLO0FBQUEsb0JBQ0wsT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7OztjQUdWQSxZQWFpQixjQUFBLEVBQUEsT0FBQSwwQkFiOEIsR0FBQTtBQUFBLGdCQUFBLFNBQUFFLFFBQzdDLE1BV0U7QUFBQSxrQkFYRkYsWUFXRSxXQUFBO0FBQUEsb0JBVkEsT0FBQSxFQUFBLFNBQUEsT0FBQTtBQUFBLG9CQUNBLHdCQUFBO0FBQUEsb0JBQ1MsWUFBQSxLQUFBO0FBQUEsb0JBQVUsdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUEsS0FBQSxhQUFBO0FBQUEsb0JBQ25CLE9BQU07QUFBQSxvQkFDTixnQkFBYTtBQUFBLG9CQUNiLGtCQUFlO0FBQUEsb0JBQ2Ysc0JBQW1CO0FBQUEsb0JBQ25CLGNBQUE7QUFBQSxvQkFDQSxNQUFLO0FBQUEsb0JBQ0wsT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7WUFLRCxLQUFBLE9BQUcsdUJBQWRJLG1CQXFDTSxPQUFBLFlBQUE7QUFBQSxjQXBDSkosWUFXaUIsY0FYRCxFQUFBLE9BQUEsMEJBQStCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUM3QyxNQVNFO0FBQUEsa0JBVEZGLFlBU0UsV0FBQTtBQUFBLG9CQVJBLE9BQUEsRUFBQSxTQUFBLE9BQUE7QUFBQSxvQkFDQSxnQkFBYTtBQUFBLG9CQUNiLGtCQUFlO0FBQUEsb0JBQ2Ysc0JBQW1CO0FBQUEsb0JBQ25CLE9BQU07QUFBQSxvQkFDTixjQUFBO0FBQUEsb0JBQ1MsWUFBQSxLQUFBO0FBQUEsb0JBQVUsdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUEsS0FBQSxhQUFBO0FBQUEsb0JBQ25CLE9BQU07QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7Y0FHVkEsWUFXaUIsY0FBQSxFQUFBLE9BQUEsMEJBWDhCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUM3QyxNQVNFO0FBQUEsa0JBVEZGLFlBU0UsV0FBQTtBQUFBLG9CQVJBLE9BQUEsRUFBQSxTQUFBLE9BQUE7QUFBQSxvQkFDQSxnQkFBYTtBQUFBLG9CQUNiLGtCQUFlO0FBQUEsb0JBQ2Ysc0JBQW1CO0FBQUEsb0JBQ25CLE9BQU07QUFBQSxvQkFDTixjQUFBO0FBQUEsb0JBQ1MsWUFBQSxLQUFBO0FBQUEsb0JBQVksdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUEsS0FBQSxlQUFBO0FBQUEsb0JBQ3JCLE9BQU07QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7Y0FHVkEsWUFXaUIsY0FBQSxFQUFBLE9BQUEsMEJBWDhCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUM3QyxNQVNFO0FBQUEsa0JBVEZGLFlBU0UsV0FBQTtBQUFBLG9CQVJBLE9BQUEsRUFBQSxTQUFBLE9BQUE7QUFBQSxvQkFDQSxnQkFBYTtBQUFBLG9CQUNiLGtCQUFlO0FBQUEsb0JBQ2Ysc0JBQW1CO0FBQUEsb0JBQ25CLE9BQU07QUFBQSxvQkFDTixjQUFBO0FBQUEsb0JBQ1MsWUFBQSxLQUFBO0FBQUEsb0JBQUksdUJBQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUEsS0FBQSxPQUFBO0FBQUEsb0JBQ2IsT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7WUFLRCxLQUFBLE9BQUcsMEJBQWRJLG1CQWtCTSxPQUFBLFlBQUE7QUFBQSxjQWpCSkosWUFPUyxPQVBELEVBQUEsT0FBQSwwQkFBK0IsR0FBQTtBQUFBLGdCQUFBLFNBQUFFLFFBQ3JDLE1BRWlCO0FBQUEsa0JBRmpCRixZQUVpQixjQUFBO0FBQUEsb0JBRkQsV0FBQTtBQUFBLG9CQUFVLE9BQU07QUFBQSxrQkFBQSxHQUFBO0FBQUEscUNBQzlCLE1BQWtDO0FBQUEsc0JBQWxDQSxZQUFrQyxPQUExQixFQUFBLE1BQUEsbUJBQXVCLENBQUE7QUFBQSxvQkFBQSxDQUFBO0FBQUE7O2tCQUVqQ0EsWUFFaUIsY0FBQSxNQUFBO0FBQUEsb0JBQUEsU0FBQUUsUUFEZixNQUF5QztBQUFBLHNCQUF6Q0YsWUFBeUMsWUFBQSxNQUFBO0FBQUEsd0JBQUEsU0FBQUUsUUFBM0IsTUFBWTtBQUFBLDBCQUFBQyxnQkFBWixjQUFZO0FBQUEsd0JBQUEsQ0FBQTtBQUFBOzs7Ozs7OztjQUc5QkgsWUFFaUIsY0FBQSxFQUFBLE9BQUEsa0JBRnNCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUNyQyxNQUEwRDtBQUFBLGtCQUExREYsWUFBMEQsUUFBQTtBQUFBLG9CQUF4QyxZQUFBLEtBQUE7QUFBQSxvQkFBSSx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLE9BQUE7QUFBQSxvQkFBRSxLQUFJO0FBQUEsb0JBQU8sT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7OztjQUUzQ0EsWUFFaUIsY0FBQSxFQUFBLE9BQUEsa0JBRnNCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUNyQyxNQUE4RDtBQUFBLGtCQUE5REYsWUFBOEQsUUFBQTtBQUFBLG9CQUE1QyxZQUFBLEtBQUE7QUFBQSxvQkFBSSx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLE9BQUE7QUFBQSxvQkFBRSxLQUFJO0FBQUEsb0JBQU8sT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7OztjQUUzQ0EsWUFFaUIsY0FBQSxFQUFBLE9BQUEsMEJBRjhCLEdBQUE7QUFBQSxnQkFBQSxTQUFBRSxRQUM3QyxNQUFtRDtBQUFBLGtCQUFuREYsWUFBbUQsUUFBQTtBQUFBLG9CQUFqQyxZQUFBLEtBQUE7QUFBQSxvQkFBSSx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLE9BQUE7QUFBQSxvQkFBRSxLQUFJO0FBQUEsb0JBQVEsT0FBTTtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7SUFNbERBLFlBUVEsTUFBQTtBQUFBLE1BUE4sTUFBQTtBQUFBLE1BQ0EsT0FBQTtBQUFBLE1BQ0MsT0FBS0MsZUFBRSxLQUFHLEdBQUEsS0FBSyxXQUFRLFVBQUEsTUFBQTtBQUFBLE1BQ3hCLE1BQUs7QUFBQSxNQUNKLFNBQU8sS0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUVSLE1BQXdDO0FBQUEsUUFBeENELFlBQXdDLFVBQUEsTUFBQTtBQUFBLFVBQUEsU0FBQUUsUUFBN0IsTUFBaUI7QUFBQSxZQUFBQyxnQkFBakIsbUJBQWlCO0FBQUEsVUFBQSxDQUFBO0FBQUE7Ozs7Ozs7OzsifQ==
