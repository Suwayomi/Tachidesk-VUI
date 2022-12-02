import { Q as QTooltip } from "./QTooltip.02a6ea06.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QTab } from "./QTab.aacc573f.js";
import { Q as QTabs } from "./QTabs.460280b8.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QCheckbox } from "./QCheckbox.e3080dd8.js";
import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QRadio } from "./QRadio.0e80ef9a.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import SearchBar from "./SearchBar.c8352725.js";
import { u as useInBar } from "./Filters.d6e3deb1.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, q as normalizeClass, F as Fragment, s as resolveComponent, p as createTextVNode, n as createCommentVNode } from "./index.0b61810d.js";
import "./position-engine.94f26946.js";
import "./selection.2c9d8487.js";
import "./scroll.34fac392.js";
import "./dom.fd94eb85.js";
import "./use-timeout.99cd911c.js";
import "./use-transition.65db8379.js";
import "./QSpinner.0d412098.js";
import "./Ripple.ce29675d.js";
import "./uid.42677368.js";
import "./QResizeObserver.eb13856c.js";
import "./rtl.b51694b1.js";
import "./use-checkbox.ee2b9cbf.js";
import "./use-dark.bc291eea.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./focus-manager.32f8d49a.js";
import "./QInput.269ea6c0.js";
import "./use-key-composition.64dd1858.js";
import "./StoreStuff.f5900537.js";
const _sfc_main = defineComponent({
  name: "LibraryTopBar",
  components: { SearchBar },
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
  methods: {
    update() {
      this.$api.post(
        "/api/v1/update/fetch",
        `categoryId=${this.$route.query["tab"]}`
      );
    }
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
                    modelValue: _ctx.unread,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.unread = $event),
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
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
                    modelValue: _ctx.downloaded,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.downloaded = $event),
                    style: { "width": "100%" },
                    "toggle-indeterminate": "",
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
                    modelValue: _ctx.leftToRead,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.leftToRead = $event),
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    label: "By left to Read"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-xs" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.alphabetical,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.alphabetical = $event),
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
                    label: "Alphabetical"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-px-md q-pt-xs q-pb-md" }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.ByID,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.ByID = $event),
                    style: { "width": "100%" },
                    "checked-icon": "arrow_upward",
                    "unchecked-icon": "arrow_downward",
                    "indeterminate-icon": "null",
                    color: "primary",
                    "keep-color": "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLmYzMDAzZjBkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9saWJyYXJ5L1RvcEJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFNvcnQgLyBGaWx0ZXIgLyBEaXNwbGF5IDwvcS10b29sdGlwPlxuICA8L3EtYnRuPlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvXCI+XG4gICAgPHEtY2FyZD5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcGEtbm9uZVwiPlxuICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiPlxuICAgICAgICAgIDxxLXRhYlxuICAgICAgICAgICAgY2xhc3M9XCJxLXB4LXhsXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxxLXRhYiBjbGFzcz1cInEtcHgteGxcIiBuYW1lPVwic29ydFwiIGljb249XCJzb3J0XCIgbGFiZWw9XCJTb3J0XCIgLz5cbiAgICAgICAgICA8cS10YWJcbiAgICAgICAgICAgIGNsYXNzPVwicS1weC14bFwiXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheVwiXG4gICAgICAgICAgICBpY29uPVwiZGlzcGxheV9zZXR0aW5nc1wiXG4gICAgICAgICAgICBsYWJlbD1cIkRpc3BsYXlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS10YWJzPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdmaWx0ZXInXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC1tZCBxLXBiLXhzXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ1bnJlYWRcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0b2dnbGUtaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgbGFiZWw9XCJVbnJlYWRcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfYm94XCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwicl9kaXNhYmxlZF9ieV9kZWZhdWx0XCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkb3dubG9hZGVkXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgIGxhYmVsPVwiRG93bmxvYWRlZFwiXG4gICAgICAgICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwidGFiID09ICdzb3J0J1wiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICB2LW1vZGVsPVwibGVmdFRvUmVhZFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImFycm93X3Vwd2FyZFwiXG4gICAgICAgICAgICB1bmNoZWNrZWQtaWNvbj1cImFycm93X2Rvd253YXJkXCJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUtaWNvbj1cIm51bGxcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGtlZXAtY29sb3JcbiAgICAgICAgICAgIGxhYmVsPVwiQnkgbGVmdCB0byBSZWFkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB4LW1kIHEtcHQteHMgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgICB2LW1vZGVsPVwiYWxwaGFiZXRpY2FsXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgbGFiZWw9XCJBbHBoYWJldGljYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1wdC14cyBxLXBiLW1kXCI+XG4gICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgIHYtbW9kZWw9XCJCeUlEXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiYXJyb3dfdXB3YXJkXCJcbiAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwiYXJyb3dfZG93bndhcmRcIlxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwibnVsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAga2VlcC1jb2xvclxuICAgICAgICAgICAgbGFiZWw9XCJCeSBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ0YWIgPT0gJ2Rpc3BsYXknXCI+XG4gICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLW14LWxnIHEtcHQtbWQgcS1wYi14c1wiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0aHVtYm5haWwgY2xhc3M9XCJxLXByLXNtXCI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkaXNwbGF5X3NldHRpbmdzXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+RElTUExBWSBNT0RFPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbWQgcS1weS14c1wiPlxuICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJkaXNwXCIgdmFsPVwibnVsbFwiIGxhYmVsPVwiQ29tcGFjdCBncmlkXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB5LXhzXCI+XG4gICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cImRpc3BcIiB2YWw9XCJ0cnVlXCIgbGFiZWw9XCJDb21mb3J0YWJsZSBncmlkXCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC1tZCBxLXB0LXhzIHEtcGItbWRcIj5cbiAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwiZGlzcFwiIHZhbD1cImZhbHNlXCIgbGFiZWw9XCJsaXN0XCIgLz5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuXG4gIDxxLWJ0blxuICAgIGZsYXRcbiAgICByb3VuZFxuICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICBpY29uPVwicmVmcmVzaFwiXG4gICAgQGNsaWNrPVwidXBkYXRlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IFVwZGF0ZSBjYXRlZ29yeSA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCYXIudnVlJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vRmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdMaWJyYXJ5VG9wQmFyJyxcbiAgY29tcG9uZW50czogeyBTZWFyY2hCYXIgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IEZpbHRlcnMoKTtcbiAgICBjb25zdCB1bnJlYWQgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMudW5yZWFkLnZhbHVlKTtcbiAgICBjb25zdCBkb3dubG9hZGVkID0gcmVmKDxib29sZWFuIHwgbnVsbD5maWx0ZXJzLmRvd25sb2FkZWQudmFsdWUpO1xuICAgIGNvbnN0IGxlZnRUb1JlYWQgPSByZWYoPGJvb2xlYW4gfCBudWxsPmZpbHRlcnMubGVmdFRvUmVhZC52YWx1ZSk7XG4gICAgY29uc3QgYWxwaGFiZXRpY2FsID0gcmVmKDxib29sZWFuIHwgbnVsbD5maWx0ZXJzLmFscGhhYmV0aWNhbC52YWx1ZSk7XG4gICAgY29uc3QgQnlJRCA9IHJlZig8Ym9vbGVhbiB8IG51bGw+ZmlsdGVycy5CeUlELnZhbHVlKTtcbiAgICBjb25zdCBkaXNwID0gcmVmKDwnbnVsbCcgfCAndHJ1ZScgfCAnZmFsc2UnPmAke2ZpbHRlcnMuRGlzcGxheS52YWx1ZX1gKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG86IHJlZihmYWxzZSksXG4gICAgICB0YWI6IHJlZignZmlsdGVyJyksXG4gICAgICB1bnJlYWQsXG4gICAgICBkb3dubG9hZGVkLFxuICAgICAgbGVmdFRvUmVhZCxcbiAgICAgIGFscGhhYmV0aWNhbCxcbiAgICAgIEJ5SUQsXG4gICAgICBkaXNwLFxuICAgICAgZmlsdGVycyxcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIHVucmVhZCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXRVbnJlYWQodGhpcy51bnJlYWQpO1xuICAgIH0sXG4gICAgZG93bmxvYWRlZCgpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5zZXREb3dubG9hZGVkKHRoaXMuZG93bmxvYWRlZCk7XG4gICAgfSxcbiAgICBsZWZ0VG9SZWFkKCkge1xuICAgICAgdGhpcy5maWx0ZXJzLnNldExlZnRUb1JlYWQodGhpcy5sZWZ0VG9SZWFkKTtcbiAgICAgIGlmICh0aGlzLmxlZnRUb1JlYWQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmFscGhhYmV0aWNhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuQnlJRCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbHBoYWJldGljYWwoKSB7XG4gICAgICB0aGlzLmZpbHRlcnMuc2V0QWxwaGFiZXRpY2FsKHRoaXMuYWxwaGFiZXRpY2FsKTtcbiAgICAgIGlmICh0aGlzLmFscGhhYmV0aWNhbCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMubGVmdFRvUmVhZCA9IG51bGw7XG4gICAgICAgIHRoaXMuQnlJRCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBCeUlEKCkge1xuICAgICAgdGhpcy5maWx0ZXJzLnNldEJ5SUQodGhpcy5CeUlEKTtcbiAgICAgIGlmICh0aGlzLkJ5SUQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmFscGhhYmV0aWNhbCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVmdFRvUmVhZCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwKCkge1xuICAgICAgaWYgKHRoaXMuZGlzcCA9PSAnbnVsbCcpIHRoaXMuZmlsdGVycy5zZXREaXNwbGF5KG51bGwpO1xuICAgICAgZWxzZSB0aGlzLmZpbHRlcnMuc2V0RGlzcGxheSh0aGlzLmRpc3AgPT0gJ3RydWUnKTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgdGhpcy4kYXBpLnBvc3QoXG4gICAgICAgICcvYXBpL3YxL3VwZGF0ZS9mZXRjaCcsXG4gICAgICAgIGBjYXRlZ29yeUlkPSR7dGhpcy4kcm91dGUucXVlcnlbJ3RhYiddfWBcbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiRmlsdGVycyIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSkEsTUFBSyxZQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sWUFBWSxFQUFFLFVBQVU7QUFBQSxFQUN4QixRQUFRO0FBQ04sVUFBTSxVQUFVQTtBQUNoQixVQUFNLFNBQVMsSUFBb0IsUUFBUSxPQUFPLEtBQUs7QUFDdkQsVUFBTSxhQUFhLElBQW9CLFFBQVEsV0FBVyxLQUFLO0FBQy9ELFVBQU0sYUFBYSxJQUFvQixRQUFRLFdBQVcsS0FBSztBQUMvRCxVQUFNLGVBQWUsSUFBb0IsUUFBUSxhQUFhLEtBQUs7QUFDbkUsVUFBTSxPQUFPLElBQW9CLFFBQVEsS0FBSyxLQUFLO0FBQ25ELFVBQU0sT0FBTyxJQUErQixHQUFHLFFBQVEsUUFBUSxPQUFPO0FBQy9ELFdBQUE7QUFBQSxNQUNMLE9BQU8sSUFBSSxLQUFLO0FBQUEsTUFDaEIsS0FBSyxJQUFJLFFBQVE7QUFBQSxNQUNqQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFD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
