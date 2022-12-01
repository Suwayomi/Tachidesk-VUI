import { Q as QTooltip } from "./QTooltip.180c1c60.js";
import { Q as QBtn } from "./QBtn.fa53f47e.js";
import { Q as QTab } from "./QTab.3877ec1d.js";
import { Q as QTabs } from "./QTabs.2309048c.js";
import { Q as QCardSection } from "./QCardSection.92a082ef.js";
import { Q as QCheckbox } from "./QCheckbox.74ac24d4.js";
import { Q as QIcon } from "./QIcon.25655771.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.66687690.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { Q as QRadio } from "./QRadio.d57d2126.js";
import { Q as QCard } from "./QCard.a457d3f1.js";
import { Q as QDialog } from "./QDialog.1c3b5a04.js";
import SearchBar from "./SearchBar.9b662db8.js";
import { u as useInBar } from "./Filters.e28dcb17.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, q as normalizeClass, F as Fragment, s as resolveComponent, p as createTextVNode, n as createCommentVNode } from "./index.c15e704f.js";
import "./position-engine.f1dc51f3.js";
import "./selection.a711d5f1.js";
import "./scroll.d31d6ae2.js";
import "./dom.617e2098.js";
import "./use-timeout.a78770d1.js";
import "./use-transition.db025f57.js";
import "./QSpinner.dc7e097a.js";
import "./Ripple.a0364732.js";
import "./uid.42677368.js";
import "./QResizeObserver.beb445f9.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.85632a95.js";
import "./use-dark.97ac6897.js";
import "./option-sizes.d2e717dc.js";
import "./use-form.2fa626ca.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.310e72d3.js";
import "./use-key-composition.5ad075e2.js";
import "./StoreStuff.9c9e2ee5.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLjdjN2RjN2M0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFNvcnQgLyBGaWx0ZXIgLyBEaXNwbGF5IDwvcS10b29sdGlwPlxuICA8L3EtYnRuPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXRhYiBjbGFzcz1cInEtcHgteGxcIiBuYW1lPVwic29ydFwiIGljb249XCJzb3J0XCIgbGFiZWw9XCJTb3J0XCIgLz5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIGNsYXNzPVwicS1weC14bFwiXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheVwiXG4gICAgICAgICAgICBpY29uPVwiZGlzcGxheV9zZXR0aW5nc1wiXG4gICAgICAgICAgICBsYWJlbD1cIkRpc3BsYXlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS10YWJzPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdmaWx0ZXInXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1bnJlYWRcIlxuICAgICAgICAgICAgbGFiZWw9XCJVbnJlYWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkb3dubG9hZGVkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRG93bmxvYWRlZFwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdzb3J0J1wiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHYtbW9kZWw9XCJsZWZ0VG9SZWFkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiQnkgbGVmdCB0byBSZWFkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHYtbW9kZWw9XCJhbHBoYWJldGljYWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJBbHBoYWJldGljYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgdi1tb2RlbD1cIkJ5SURcIlxuICAgICAgICAgICAgbGFiZWw9XCJCeSBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ2Rpc3BsYXknXCI+XG4gICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLW14LWxnIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0aHVtYm5haWwgY2xhc3M9XCJxLXByLXNtXCI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkaXNwbGF5X3NldHRpbmdzXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+RElTUExBWSBNT0RFPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS14c1wiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwibnVsbFwiIGxhYmVsPVwiQ29tcGFjdCBncmlkXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB5LXhzXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJ0cnVlXCIgbGFiZWw9XCJDb21mb3J0YWJsZSBncmlkXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cImZhbHNlXCIgbGFiZWw9XCJsaXN0XCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuXG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICByb3VuZFxuICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICBpY29uPVwicmVmcmVzaFwiXG4gICAgQGNsaWNrPVwidXBkYXRlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFVwZGF0ZSBjYXRlZ29yeSA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCYXIudnVlJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vRmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdsaWJyYXJ5VG9wQmFyJyxcbiAgY29tcG9uZW50czogeyBTZWFyY2hCYXIgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL3VwZGF0ZS9mZXRjaCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGBjYXRlZ29yeUlkPSR7dGhpcy4kcm91dGUucXVlcnlbJ3RhYiddfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB1bnJlYWQoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0VW5yZWFkKHRoaXMudW5yZWFkKTtcbiAgICB9LFxuICAgIGRvd25sb2FkZWQoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0RG93bmxvYWRlZCh0aGlzLmRvd25sb2FkZWQpO1xuICAgIH0sXG4gICAgbGVmdFRvUmVhZCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRMZWZ0VG9SZWFkKHRoaXMubGVmdFRvUmVhZCk7XG4gICAgICBpZiAodGhpcy5sZWZ0VG9SZWFkICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbHBoYWJldGljYWwgPSBudWxsO1xuICAgICAgICB0aGlzLkJ5SUQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxwaGFiZXRpY2FsKCkge1xuICAgICAgdGhpcy5maWx0ZXJzLnNldEFscGhhYmV0aWNhbCh0aGlzLmFscGhhYmV0aWNhbCk7XG4gICAgICBpZiAodGhpcy5hbHBoYWJldGljYWwgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxlZnRUb1JlYWQgPSBudWxsO1xuICAgICAgICB0aGlzLkJ5SUQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgQnlJRCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRCeUlEKHRoaXMuQnlJRCk7XG4gICAgICBpZiAodGhpcy5CeUlEICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbHBoYWJldGljYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRUb1JlYWQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcCgpIHtcbiAgICAgIGlmICh0aGlzLmRpc3AgPT0gJ251bGwnKSB0aGlzLmZpbHRlcnMuc2V0RGlzcGxheShudWxsKTtcbiAgICAgIGVsc2UgdGhpcy5maWx0ZXJzLnNldERpc3BsYXkodGhpcy5kaXNwID09ICd0cnVlJyk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gRmlsdGVycygpO1xuICAgIGNvbnN0IHVucmVhZCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy51bnJlYWQudmFsdWUpO1xuICAgIGNvbnN0IGRvd25sb2FkZWQgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMuZG93bmxvYWRlZC52YWx1ZSk7XG4gICAgY29uc3QgbGVmdFRvUmVhZCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy5sZWZ0VG9SZWFkLnZhbHVlKTtcbiAgICBjb25zdCBhbHBoYWJldGljYWwgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMuYWxwaGFiZXRpY2FsLnZhbHVlKTtcbiAgICBjb25zdCBCeUlEID0gcmVmKDxib29sZWFuIHwgbnVsbD5maWx0ZXJzLkJ5SUQudmFsdWUpO1xuICAgIGNvbnN0IGRpc3AgPSByZWYoPCdudWxsJyB8ICd0cnVlJyB8ICdmYWxzZSc+YCR7ZmlsdGVycy5EaXNwbGF5LnZhbHVlfWApO1xuICAgIHJldHVybiB7XG4gICAgICBkaWFsbzogcmVmKGZhbHNlKSxcbiAgICAgIHRhYjogcmVmKCdmaWx0ZXInKSxcbiAgICAgIHVucmVhZCxcbiAgICAgIGRvd25sb2FkZWQsXG4gICAgICBsZWZ0VG9SZWFkLFxuICAgICAgYWxwaGFiZXRpY2FsLFxuICAgICAgQnlJRCxcbiAgICAgIGRpc3AsXG4gICAgICBmaWx0ZXJzXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJGaWx0ZXJzIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtKQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixZQUFZLEVBQUUsVUFBVTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFDUCxXQUFLLE9BQU8sd0JBQXdCO0FBQUEsUUFDbEMsUUFBUTtBQUFBLFFBQ1IsTUFBTSxjQUFjLEtBQUssT0FBTyxNQUFNO0FBQUEsTUFBQSxDQUN2QztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxTQUFTO0FBQ0YsV0FBQSxRQUFRLFVBQVUsS0FBSyxNQUFNO0FBQUEsSUFDcEM7QUFBQSxJQUNBLGFBQWE7QUFDTixXQUFBLFFBQVEsY0FBYyxLQUFLLFVBQVU7QUFBQSxJQUM1QztBQUFBLElBQ0EsYUFBYTtBQUNOLFdBQUEsUUFBUSxjQUFjLEtBQUssVUFBVTtBQUN0QyxVQUFBLEtBQUssY0FBYyxNQUFNO0FBQzNC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
