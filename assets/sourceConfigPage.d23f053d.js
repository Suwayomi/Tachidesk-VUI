import { Q as QList } from "./QList.10571ef1.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.751b389a.js";
import { Q as QToggle } from "./QToggle.519c6e7f.js";
import { Q as QItem } from "./QItem.e5504d24.js";
import { Q as QCheckbox } from "./QCheckbox.14cae36f.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { Q as QDialog } from "./QDialog.75edb166.js";
import { Q as QInput } from "./QInput.a2e72a2b.js";
import { Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QCardActions } from "./QCardActions.d176eb8e.js";
import { Q as QRadio } from "./QRadio.1c22212c.js";
import { R as Ripple } from "./Ripple.d48b6bf8.js";
import { C as ClosePopup } from "./ClosePopup.5400fc3f.js";
import { k as isCheckBoxPreference, l as isEditTextPreference, m as isMultiSelectListPreference, n as isSwitchPreferenceCompat, o as isListPreference } from "./models.4021c4b7.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, B as withDirectives, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, n as createCommentVNode, u as createBaseVNode, F as Fragment, x as renderList, s as resolveComponent } from "./index.ba4ecd3b.js";
import "./QSpinner.ce362078.js";
import "./use-dark.7f6486f4.js";
import "./QIcon.00211d75.js";
import "./use-checkbox.edaab605.js";
import "./option-sizes.ff92785a.js";
import "./use-form.a300a275.js";
import "./use-timeout.fb745483.js";
import "./scroll.3ccd02db.js";
import "./dom.9c14e7bf.js";
import "./use-transition.322af72f.js";
import "./focus-manager.32f8d49a.js";
import "./use-key-composition.4fc2cfcf.js";
import "./uid.42677368.js";
const _sfc_main$1 = defineComponent({
  name: "whatIs",
  props: {
    preference: {
      type: Object,
      required: true
    },
    position: {
      type: Number,
      required: true
    }
  },
  emits: ["getPrefs"],
  methods: {
    saveText() {
      let tmp;
      if (typeof this.val == "object") {
        tmp = JSON.stringify(this.val);
      } else {
        tmp = this.val.toString();
      }
      this.$fetch(
        `/api/v1/source/${this.$route.params["sourceID"]}/preferences`,
        {
          method: "POST",
          body: JSON.stringify({ position: this.position, value: tmp })
        }
      ).then(() => {
        this.$emit("getPrefs");
      });
    }
  },
  watch: {
    val() {
      if (!this.isEditTextPreference(this.preference)) {
        this.saveText();
      }
    }
  },
  setup(props) {
    const dialog = ref(false);
    let val;
    if (isCheckBoxPreference(props.preference)) {
      val = ref(props.preference.props.currentValue);
    } else if (isEditTextPreference(props.preference)) {
      val = ref(props.preference.props.currentValue);
    } else if (isMultiSelectListPreference(props.preference)) {
      val = ref(props.preference.props.currentValue);
    } else if (isSwitchPreferenceCompat(props.preference)) {
      val = ref(props.preference.props.currentValue);
    } else {
      val = ref(props.preference.props.currentValue);
    }
    return {
      dialog,
      val,
      isCheckBoxPreference,
      isEditTextPreference,
      isMultiSelectListPreference,
      isSwitchPreferenceCompat,
      isListPreference
    };
  }
});
const _hoisted_1 = { class: "text-h5" };
const _hoisted_2 = { class: "text-h5" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isSwitchPreferenceCompat(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 0,
      clickable: "",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.val = !_ctx.val),
      class: "row justify-between"
    }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.title), 1)
              ]),
              _: 1
            }),
            createVNode(QItemLabel, { caption: "" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.summary), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QToggle, {
          color: "blue",
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.val = $event)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]) : createCommentVNode("", true),
    _ctx.isCheckBoxPreference(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 1,
      clickable: "",
      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.val = !_ctx.val),
      class: "row justify-between"
    }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.title), 1)
              ]),
              _: 1
            }),
            createVNode(QItemLabel, { caption: "" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.summary), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QCheckbox, {
          color: "blue",
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.val = $event)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]) : createCommentVNode("", true),
    _ctx.isMultiSelectListPreference(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 2,
      clickable: "",
      onClick: _cache[6] || (_cache[6] = ($event) => _ctx.dialog = true)
    }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.title), 1)
              ]),
              _: 1
            }),
            createVNode(QItemLabel, { caption: "" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.summary), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.dialog = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "q-pa-md" }, {
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.preference.props.title), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.preference.props.entries, (selec, index) => {
                      return openBlock(), createBlock(QItem, { key: index }, {
                        default: withCtx(() => [
                          createVNode(QCheckbox, {
                            modelValue: _ctx.val,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.val = $event),
                            val: _ctx.preference.props.entryValues[index],
                            label: selec,
                            color: "blue"
                          }, null, 8, ["modelValue", "val", "label"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]) : createCommentVNode("", true),
    _ctx.isEditTextPreference(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 3,
      clickable: "",
      onClick: _cache[9] || (_cache[9] = ($event) => _ctx.dialog = true)
    }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.title), 1)
              ]),
              _: 1
            }),
            createVNode(QItemLabel, { caption: "" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.summary), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.dialog = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "q-pa-md" }, {
              default: withCtx(() => [
                typeof _ctx.val == "string" ? (openBlock(), createBlock(QInput, {
                  key: 0,
                  outlined: "",
                  modelValue: _ctx.val,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.val = $event)
                }, null, 8, ["modelValue"])) : createCommentVNode("", true),
                createVNode(QCardActions, { align: "right" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      label: "OK",
                      color: "primary",
                      onClick: _ctx.saveText
                    }, null, 8, ["onClick"]), [
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
      ]),
      _: 1
    })), [
      [Ripple]
    ]) : createCommentVNode("", true),
    _ctx.isListPreference(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 4,
      clickable: "",
      onClick: _cache[12] || (_cache[12] = ($event) => _ctx.dialog = true)
    }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.title), 1)
              ]),
              _: 1
            }),
            createVNode(QItemLabel, { caption: "" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.preference.props.summary.replace(
                  "%s",
                  _ctx.preference.props.entries[_ctx.preference.props.entryValues.indexOf(_ctx.preference.props.currentValue)] || ""
                )), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.dialog = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "q-pa-md" }, {
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.preference.props.title), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.preference.props.entries, (selec, index) => {
                      return openBlock(), createBlock(QItem, { key: index }, {
                        default: withCtx(() => [
                          typeof _ctx.val == "string" ? (openBlock(), createBlock(QRadio, {
                            key: 0,
                            modelValue: _ctx.val,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.val = $event),
                            val: _ctx.preference.props.entryValues[index],
                            label: selec,
                            color: "blue"
                          }, null, 8, ["modelValue", "val", "label"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]) : createCommentVNode("", true)
  ], 64);
}
var whatis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "whatIs.vue"]]);
const _sfc_main = defineComponent({
  name: "settingsPage",
  components: { whatis },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    getPrefs() {
      this.$fetchJSON(
        `/api/v1/source/${this.$route.params["sourceID"]}/preferences`
      ).then((data) => this.preferences = data);
    }
  },
  watch: {},
  created: function() {
    this.getPrefs();
  },
  setup() {
    return { preferences: ref([]) };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_whatis = resolveComponent("whatis");
  return openBlock(), createBlock(QList, {
    separator: "",
    dark: _ctx.$q.dark.isActive,
    "style-fn": _ctx.myTweak
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.preferences, (pref, index) => {
        return openBlock(), createBlock(_component_whatis, {
          preference: pref,
          key: index,
          position: index,
          onGetPrefs: _ctx.getPrefs
        }, null, 8, ["preference", "position", "onGetPrefs"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["dark", "style-fn"]);
}
var sourceConfigPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "sourceConfigPage.vue"]]);
export { sourceConfigPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlQ29uZmlnUGFnZS5kMjNmMDUzZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL2NvbmZpZy93aGF0SXMudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL3NvdXJjZUNvbmZpZ1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuIDx0ZW1wbGF0ZT5cbiAgPHEtaXRlbVxuICAgIGNsaWNrYWJsZVxuICAgIHYtcmlwcGxlXG4gICAgQGNsaWNrPVwidmFsID0gIXZhbFwiXG4gICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICB2LWlmPVwiaXNTd2l0Y2hQcmVmZXJlbmNlQ29tcGF0KHByZWZlcmVuY2UpXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgcHJlZmVyZW5jZS5wcm9wcy50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHByZWZlcmVuY2UucHJvcHMuc3VtbWFyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJ2YWxcIiAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIHYtaWY9XCJpc0NoZWNrQm94UHJlZmVyZW5jZShwcmVmZXJlbmNlKVwiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJ2YWwgPSAhdmFsXCJcbiAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW5cIlxuICA+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgcHJlZmVyZW5jZS5wcm9wcy5zdW1tYXJ5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1jaGVja2JveCBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsXCJcbiAgLz48L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIHYtaWY9XCJpc011bHRpU2VsZWN0TGlzdFByZWZlcmVuY2UocHJlZmVyZW5jZSlcIlxuICAgIGNsaWNrYWJsZVxuICAgIHYtcmlwcGxlXG4gICAgQGNsaWNrPVwiZGlhbG9nID0gdHJ1ZVwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBwcmVmZXJlbmNlLnByb3BzLnN1bW1hcnkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCI+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgICA8cS1saXN0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+e3sgcHJlZmVyZW5jZS5wcm9wcy50aXRsZSB9fTwvZGl2PlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICB2LWZvcj1cIihzZWxlYywgaW5kZXgpIGluIHByZWZlcmVuY2UucHJvcHMuZW50cmllc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInZhbFwiXG4gICAgICAgICAgICAgIDp2YWw9XCJwcmVmZXJlbmNlLnByb3BzLmVudHJ5VmFsdWVzW2luZGV4XVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cInNlbGVjXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLWRpYWxvZz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW1cbiAgICB2LWlmPVwiaXNFZGl0VGV4dFByZWZlcmVuY2UocHJlZmVyZW5jZSlcIlxuICAgIGNsaWNrYWJsZVxuICAgIHYtcmlwcGxlXG4gICAgQGNsaWNrPVwiZGlhbG9nID0gdHJ1ZVwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBwcmVmZXJlbmNlLnByb3BzLnN1bW1hcnkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCI+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgICA8cS1pbnB1dCB2LWlmPVwidHlwZW9mIHZhbCA9PSAnc3RyaW5nJ1wiIG91dGxpbmVkIHYtbW9kZWw9XCJ2YWxcIiAvPlxuICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgbGFiZWw9XCJPS1wiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgQGNsaWNrPVwic2F2ZVRleHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIHYtaWY9XCJpc0xpc3RQcmVmZXJlbmNlKHByZWZlcmVuY2UpXCJcbiAgICBjbGlja2FibGVcbiAgICB2LXJpcHBsZVxuICAgIEBjbGljaz1cImRpYWxvZyA9IHRydWVcIlxuICA+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3tcbiAgICAgICAgcHJlZmVyZW5jZS5wcm9wcy5zdW1tYXJ5LnJlcGxhY2UoXG4gICAgICAgICAgJyVzJyxcbiAgICAgICAgICBwcmVmZXJlbmNlLnByb3BzLmVudHJpZXNbXG4gICAgICAgICAgICBwcmVmZXJlbmNlLnByb3BzLmVudHJ5VmFsdWVzLmluZGV4T2YocHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpXG4gICAgICAgICAgXSB8fCAnJ1xuICAgICAgICApXG4gICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIj5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9kaXY+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIHYtZm9yPVwiKHNlbGVjLCBpbmRleCkgaW4gcHJlZmVyZW5jZS5wcm9wcy5lbnRyaWVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1yYWRpb1xuICAgICAgICAgICAgICB2LWlmPVwidHlwZW9mIHZhbCA9PSAnc3RyaW5nJ1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgICAgICAgICA6dmFsPVwicHJlZmVyZW5jZS5wcm9wcy5lbnRyeVZhbHVlc1tpbmRleF1cIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJzZWxlY1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvcS1kaWFsb2c+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIGlzQ2hlY2tCb3hQcmVmZXJlbmNlLFxuICBpc0VkaXRUZXh0UHJlZmVyZW5jZSxcbiAgaXNMaXN0UHJlZmVyZW5jZSxcbiAgaXNNdWx0aVNlbGVjdExpc3RQcmVmZXJlbmNlLFxuICBpc1N3aXRjaFByZWZlcmVuY2VDb21wYXQsXG4gIHByZWZlcmVuY2VzXG59IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3doYXRJcycsXG4gIHByb3BzOiB7XG4gICAgcHJlZmVyZW5jZToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPHByZWZlcmVuY2VzPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdHlwZTogTnVtYmVyIGFzIFByb3BUeXBlPG51bWJlcj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnZ2V0UHJlZnMnXSxcbiAgbWV0aG9kczoge1xuICAgIHNhdmVUZXh0KCkge1xuICAgICAgbGV0IHRtcDogc3RyaW5nO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0bXAgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXAgPSAodGhpcy52YWwgYXMgYm9vbGVhbiB8IHN0cmluZykudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ119L3ByZWZlcmVuY2VzYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHZhbHVlOiB0bXAgfSlcbiAgICAgICAgfVxuICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnZ2V0UHJlZnMnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWwoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFZGl0VGV4dFByZWZlcmVuY2UodGhpcy5wcmVmZXJlbmNlKSkge1xuICAgICAgICB0aGlzLnNhdmVUZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IGRpYWxvZyA9IHJlZig8Ym9vbGVhbj5mYWxzZSk7XG4gICAgbGV0IHZhbDogdW5rbm93bjtcbiAgICBpZiAoaXNDaGVja0JveFByZWZlcmVuY2UocHJvcHMucHJlZmVyZW5jZSkpIHtcbiAgICAgIHZhbCA9IHJlZig8Ym9vbGVhbj5wcm9wcy5wcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0VkaXRUZXh0UHJlZmVyZW5jZShwcm9wcy5wcmVmZXJlbmNlKSkge1xuICAgICAgdmFsID0gcmVmKDxzdHJpbmc+cHJvcHMucHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNNdWx0aVNlbGVjdExpc3RQcmVmZXJlbmNlKHByb3BzLnByZWZlcmVuY2UpKSB7XG4gICAgICB2YWwgPSByZWYoPHN0cmluZ1tdPnByb3BzLnByZWZlcmVuY2UucHJvcHMuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzU3dpdGNoUHJlZmVyZW5jZUNvbXBhdChwcm9wcy5wcmVmZXJlbmNlKSkge1xuICAgICAgdmFsID0gcmVmKDxib29sZWFuPnByb3BzLnByZWZlcmVuY2UucHJvcHMuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsID0gcmVmKDxzdHJpbmc+cHJvcHMucHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG9nLFxuICAgICAgdmFsLFxuICAgICAgaXNDaGVja0JveFByZWZlcmVuY2UsXG4gICAgICBpc0VkaXRUZXh0UHJlZmVyZW5jZSxcbiAgICAgIGlzTXVsdGlTZWxlY3RMaXN0UHJlZmVyZW5jZSxcbiAgICAgIGlzU3dpdGNoUHJlZmVyZW5jZUNvbXBhdCxcbiAgICAgIGlzTGlzdFByZWZlcmVuY2VcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuIENvcHlyaWdodCAoYykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG5cbiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4tLT5cblxuPHRlbXBsYXRlPlxuICA8cS1saXN0IHNlcGFyYXRvciA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIiA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHdoYXRpc1xuICAgICAgdi1mb3I9XCIocHJlZiwgaW5kZXgpIGluIHByZWZlcmVuY2VzXCJcbiAgICAgIDpwcmVmZXJlbmNlPVwicHJlZlwiXG4gICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgOnBvc2l0aW9uPVwiaW5kZXhcIlxuICAgICAgQGdldFByZWZzPVwiZ2V0UHJlZnNcIlxuICAgID48L3doYXRpcz5cbiAgPC9xLWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgcHJlZmVyZW5jZXMgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB3aGF0aXMgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL2NvbmZpZy93aGF0SXMudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NldHRpbmdzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgd2hhdGlzIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRQcmVmcygpIHtcbiAgICAgIHRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgYC9hcGkvdjEvc291cmNlLyR7dGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddfS9wcmVmZXJlbmNlc2BcbiAgICAgICkudGhlbigoZGF0YTogcHJlZmVyZW5jZXNbXSkgPT4gKHRoaXMucHJlZmVyZW5jZXMgPSBkYXRhKSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge30sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldFByZWZzKCk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7IHByZWZlcmVuY2VzOiByZWYoPHByZWZlcmVuY2VzW10+W10pIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl93aXRoRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlJQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxDQUFDLFVBQVU7QUFBQSxFQUNsQixTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQ0wsVUFBQTtBQUNBLFVBQUEsT0FBTyxLQUFLLE9BQU8sVUFBVTtBQUN6QixjQUFBLEtBQUssVUFBVSxLQUFLLEdBQUc7QUFBQSxNQUFBLE9BQ3hCO0FBQ0UsY0FBQSxLQUFLLElBQXlCO01BQ3ZDO0FBQ0ssV0FBQTtBQUFBLFFBQ0gsa0JBQWtCLEtBQUssT0FBTyxPQUFPO0FBQUEsUUFDckM7QUFBQSxV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
