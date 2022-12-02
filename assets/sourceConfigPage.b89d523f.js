import { Q as QList } from "./QList.323c1084.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.f373f416.js";
import { Q as QToggle } from "./QToggle.a7cc5817.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QCheckbox } from "./QCheckbox.76c4b12d.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QDialog } from "./QDialog.e6d65e20.js";
import { Q as QInput } from "./QInput.cad7e9be.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QCardActions } from "./QCardActions.82161f73.js";
import { Q as QRadio } from "./QRadio.2833a467.js";
import { R as Ripple } from "./Ripple.3a8ac2e1.js";
import { C as ClosePopup } from "./ClosePopup.501d8ad0.js";
import { k as isCheckBoxPreference, l as isEditTextPreference, m as isMultiSelectListPreference, n as isSwitchPreferenceCompat, o as isListPreference } from "./models.4021c4b7.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, B as withDirectives, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, n as createCommentVNode, u as createBaseVNode, F as Fragment, x as renderList, s as resolveComponent } from "./index.5cc93081.js";
import "./QSpinner.7d14a7f2.js";
import "./use-dark.1adac86a.js";
import "./QIcon.129c8e27.js";
import "./use-checkbox.17ce6f52.js";
import "./option-sizes.60af55ae.js";
import "./use-form.94dd5d17.js";
import "./use-timeout.fccbe84a.js";
import "./scroll.b1151d01.js";
import "./dom.e2e78a08.js";
import "./use-transition.651acf9e.js";
import "./focus-manager.32f8d49a.js";
import "./use-key-composition.a20c22ba.js";
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
      this.$api.post(`/api/v1/source/${this.$route.params["sourceID"]}/preferences`, {
        position: this.position,
        value: tmp
      }).then(() => {
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
      this.$api.get(`/api/v1/source/${this.$route.params["sourceID"]}/preferences`).then(
        ({ data }) => this.preferences = data
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlQ29uZmlnUGFnZS5iODlkNTIzZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL2NvbmZpZy93aGF0SXMudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL3NvdXJjZUNvbmZpZ1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJ2YWwgPSAhdmFsXCJcbiAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW5cIlxuICAgIHYtaWY9XCJpc1N3aXRjaFByZWZlcmVuY2VDb21wYXQocHJlZmVyZW5jZSlcIlxuICA+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgcHJlZmVyZW5jZS5wcm9wcy5zdW1tYXJ5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS10b2dnbGUgY29sb3I9XCJibHVlXCIgdi1tb2RlbD1cInZhbFwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzQ2hlY2tCb3hQcmVmZXJlbmNlKHByZWZlcmVuY2UpXCJcbiAgICBjbGlja2FibGVcbiAgICB2LXJpcHBsZVxuICAgIEBjbGljaz1cInZhbCA9ICF2YWxcIlxuICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBwcmVmZXJlbmNlLnByb3BzLnN1bW1hcnkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWNoZWNrYm94IGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJ2YWxcIlxuICAvPjwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzTXVsdGlTZWxlY3RMaXN0UHJlZmVyZW5jZShwcmVmZXJlbmNlKVwiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJkaWFsb2cgPSB0cnVlXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgcHJlZmVyZW5jZS5wcm9wcy50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHByZWZlcmVuY2UucHJvcHMuc3VtbWFyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIj5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9kaXY+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIHYtZm9yPVwiKHNlbGVjLCBpbmRleCkgaW4gcHJlZmVyZW5jZS5wcm9wcy5lbnRyaWVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICB2LW1vZGVsPVwidmFsXCJcbiAgICAgICAgICAgICAgOnZhbD1cInByZWZlcmVuY2UucHJvcHMuZW50cnlWYWx1ZXNbaW5kZXhdXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwic2VsZWNcIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIHYtaWY9XCJpc0VkaXRUZXh0UHJlZmVyZW5jZShwcmVmZXJlbmNlKVwiXG4gICAgY2xpY2thYmxlXG4gICAgdi1yaXBwbGVcbiAgICBAY2xpY2s9XCJkaWFsb2cgPSB0cnVlXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgcHJlZmVyZW5jZS5wcm9wcy50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHByZWZlcmVuY2UucHJvcHMuc3VtbWFyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIj5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDxxLWlucHV0IHYtaWY9XCJ0eXBlb2YgdmFsID09ICdzdHJpbmcnXCIgb3V0bGluZWQgdi1tb2RlbD1cInZhbFwiIC8+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBsYWJlbD1cIk9LXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICBAY2xpY2s9XCJzYXZlVGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvcS1kaWFsb2c+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzTGlzdFByZWZlcmVuY2UocHJlZmVyZW5jZSlcIlxuICAgIGNsaWNrYWJsZVxuICAgIHYtcmlwcGxlXG4gICAgQGNsaWNrPVwiZGlhbG9nID0gdHJ1ZVwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57e1xuICAgICAgICBwcmVmZXJlbmNlLnByb3BzLnN1bW1hcnkucmVwbGFjZShcbiAgICAgICAgICAnJXMnLFxuICAgICAgICAgIHByZWZlcmVuY2UucHJvcHMuZW50cmllc1tcbiAgICAgICAgICAgIHByZWZlcmVuY2UucHJvcHMuZW50cnlWYWx1ZXMuaW5kZXhPZihwcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSlcbiAgICAgICAgICBdIHx8ICcnXG4gICAgICAgIClcbiAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiPlxuICAgICAgPHEtY2FyZCBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L2Rpdj5cbiAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgdi1mb3I9XCIoc2VsZWMsIGluZGV4KSBpbiBwcmVmZXJlbmNlLnByb3BzLmVudHJpZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLXJhZGlvXG4gICAgICAgICAgICAgIHYtaWY9XCJ0eXBlb2YgdmFsID09ICdzdHJpbmcnXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInZhbFwiXG4gICAgICAgICAgICAgIDp2YWw9XCJwcmVmZXJlbmNlLnByb3BzLmVudHJ5VmFsdWVzW2luZGV4XVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cInNlbGVjXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLWRpYWxvZz5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgaXNDaGVja0JveFByZWZlcmVuY2UsXG4gIGlzRWRpdFRleHRQcmVmZXJlbmNlLFxuICBpc0xpc3RQcmVmZXJlbmNlLFxuICBpc011bHRpU2VsZWN0TGlzdFByZWZlcmVuY2UsXG4gIGlzU3dpdGNoUHJlZmVyZW5jZUNvbXBhdCxcbiAgcHJlZmVyZW5jZXNcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnd2hhdElzJyxcbiAgcHJvcHM6IHtcbiAgICBwcmVmZXJlbmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8cHJlZmVyZW5jZXM+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIgYXMgUHJvcFR5cGU8bnVtYmVyPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBlbWl0czogWydnZXRQcmVmcyddLFxuICBtZXRob2RzOiB7XG4gICAgc2F2ZVRleHQoKSB7XG4gICAgICBsZXQgdG1wOiBzdHJpbmc7XG4gICAgICBpZiAodHlwZW9mIHRoaXMudmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRtcCA9IEpTT04uc3RyaW5naWZ5KHRoaXMudmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcCA9ICh0aGlzLnZhbCBhcyBib29sZWFuIHwgc3RyaW5nKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBpXG4gICAgICAgIC5wb3N0KGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vcHJlZmVyZW5jZXNgLCB7XG4gICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgdmFsdWU6IHRtcFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0UHJlZnMnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbCgpIHtcbiAgICAgIGlmICghdGhpcy5pc0VkaXRUZXh0UHJlZmVyZW5jZSh0aGlzLnByZWZlcmVuY2UpKSB7XG4gICAgICAgIHRoaXMuc2F2ZVRleHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgZGlhbG9nID0gcmVmKDxib29sZWFuPmZhbHNlKTtcbiAgICBsZXQgdmFsOiB1bmtub3duO1xuICAgIGlmIChpc0NoZWNrQm94UHJlZmVyZW5jZShwcm9wcy5wcmVmZXJlbmNlKSkge1xuICAgICAgdmFsID0gcmVmKDxib29sZWFuPnByb3BzLnByZWZlcmVuY2UucHJvcHMuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzRWRpdFRleHRQcmVmZXJlbmNlKHByb3BzLnByZWZlcmVuY2UpKSB7XG4gICAgICB2YWwgPSByZWYoPHN0cmluZz5wcm9wcy5wcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc011bHRpU2VsZWN0TGlzdFByZWZlcmVuY2UocHJvcHMucHJlZmVyZW5jZSkpIHtcbiAgICAgIHZhbCA9IHJlZig8c3RyaW5nW10+cHJvcHMucHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNTd2l0Y2hQcmVmZXJlbmNlQ29tcGF0KHByb3BzLnByZWZlcmVuY2UpKSB7XG4gICAgICB2YWwgPSByZWYoPGJvb2xlYW4+cHJvcHMucHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSByZWYoPHN0cmluZz5wcm9wcy5wcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaWFsb2csXG4gICAgICB2YWwsXG4gICAgICBpc0NoZWNrQm94UHJlZmVyZW5jZSxcbiAgICAgIGlzRWRpdFRleHRQcmVmZXJlbmNlLFxuICAgICAgaXNNdWx0aVNlbGVjdExpc3RQcmVmZXJlbmNlLFxuICAgICAgaXNTd2l0Y2hQcmVmZXJlbmNlQ29tcGF0LFxuICAgICAgaXNMaXN0UHJlZmVyZW5jZVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4gQ29weXJpZ2h0IChjKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcblxuIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi0tPlxuXG48dGVtcGxhdGU+XG4gIDxxLWxpc3Qgc2VwYXJhdG9yIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8d2hhdGlzXG4gICAgICB2LWZvcj1cIihwcmVmLCBpbmRleCkgaW4gcHJlZmVyZW5jZXNcIlxuICAgICAgOnByZWZlcmVuY2U9XCJwcmVmXCJcbiAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICA6cG9zaXRpb249XCJpbmRleFwiXG4gICAgICBAZ2V0UHJlZnM9XCJnZXRQcmVmc1wiXG4gICAgPjwvd2hhdGlzPlxuICA8L3EtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBwcmVmZXJlbmNlcyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHdoYXRpcyBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvY29uZmlnL3doYXRJcy52dWUnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NldHRpbmdzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgd2hhdGlzIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRQcmVmcygpIHtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAuZ2V0KGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vcHJlZmVyZW5jZXNgKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8cHJlZmVyZW5jZXNbXT4pID0+ICh0aGlzLnByZWZlcmVuY2VzID0gZGF0YSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7fSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2V0UHJlZnMoKTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHsgcHJlZmVyZW5jZXM6IHJlZig8cHJlZmVyZW5jZXNbXT5bXSkgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUlBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsVUFBVTtBQUFBLEVBQ2xCLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFDTCxVQUFBO0FBQ0EsVUFBQSxPQUFPLEtBQUssT0FBTyxVQUFVO0FBQ3pCLGNBQUEsS0FBSyxVQUFVLEtBQUssR0FBRztBQUFBLE1BQUEsT0FDeEI7QUFDRSxjQUFBLEtBQUssSUFBeUI7TUFDdkM7QUFDQSxXQUFLLEtBQ0YsS0FBSyxr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
