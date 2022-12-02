import { Q as QList } from "./QList.23ba57c4.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.10998179.js";
import { Q as QToggle } from "./QToggle.a59079d2.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QCheckbox } from "./QCheckbox.e3080dd8.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { Q as QInput } from "./QInput.269ea6c0.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QRadio } from "./QRadio.0e80ef9a.js";
import { R as Ripple } from "./Ripple.ce29675d.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { k as isCheckBoxPreference, l as isEditTextPreference, m as isMultiSelectListPreference, n as isSwitchPreferenceCompat, o as isListPreference } from "./models.d7e94ac2.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, B as withDirectives, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, n as createCommentVNode, u as createBaseVNode, F as Fragment, x as renderList, s as resolveComponent } from "./index.0b61810d.js";
import "./QSpinner.0d412098.js";
import "./use-dark.bc291eea.js";
import "./QIcon.8780f7dc.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./use-timeout.99cd911c.js";
import "./scroll.34fac392.js";
import "./dom.fd94eb85.js";
import "./use-transition.65db8379.js";
import "./focus-manager.32f8d49a.js";
import "./use-key-composition.64dd1858.js";
import "./uid.42677368.js";
const _sfc_main$1 = defineComponent({
  name: "WhatIs",
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
  emits: ["get-prefs"],
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
  },
  watch: {
    val() {
      if (!this.isEditTextPreference(this.preference)) {
        this.saveText();
      }
    }
  },
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
        this.$emit("get-prefs");
      });
    }
  }
});
const _hoisted_1 = { class: "text-h5" };
const _hoisted_2 = { class: "text-h5" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isSwitchPreferenceCompat(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 0,
      clickable: "",
      class: "row justify-between",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.val = !_ctx.val)
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
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.val = $event),
          color: "blue"
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })), [
      [Ripple]
    ]) : createCommentVNode("", true),
    _ctx.isCheckBoxPreference(_ctx.preference) ? withDirectives((openBlock(), createBlock(QItem, {
      key: 1,
      clickable: "",
      class: "row justify-between",
      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.val = !_ctx.val)
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
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.val = $event),
          color: "blue"
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
                  modelValue: _ctx.val,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.val = $event),
                  outlined: ""
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
  name: "SettingsPage",
  components: { whatis },
  setup() {
    return { preferences: ref([]) };
  },
  watch: {},
  created: function() {
    this.getPrefs();
  },
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
          key: index,
          preference: pref,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlQ29uZmlnUGFnZS5lZjdiMGI4YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL2NvbmZpZy93aGF0SXMudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL3NvdXJjZUNvbmZpZ1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzU3dpdGNoUHJlZmVyZW5jZUNvbXBhdChwcmVmZXJlbmNlKVwiXG4gICAgdi1yaXBwbGVcbiAgICBjbGlja2FibGVcbiAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWJldHdlZW5cIlxuICAgIEBjbGljaz1cInZhbCA9ICF2YWxcIlxuICA+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgcHJlZmVyZW5jZS5wcm9wcy5zdW1tYXJ5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS10b2dnbGUgdi1tb2RlbD1cInZhbFwiIGNvbG9yPVwiYmx1ZVwiIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzQ2hlY2tCb3hQcmVmZXJlbmNlKHByZWZlcmVuY2UpXCJcbiAgICB2LXJpcHBsZVxuICAgIGNsaWNrYWJsZVxuICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiXG4gICAgQGNsaWNrPVwidmFsID0gIXZhbFwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBwcmVmZXJlbmNlLnByb3BzLnN1bW1hcnkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWNoZWNrYm94IHYtbW9kZWw9XCJ2YWxcIiBjb2xvcj1cImJsdWVcIlxuICAvPjwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzTXVsdGlTZWxlY3RMaXN0UHJlZmVyZW5jZShwcmVmZXJlbmNlKVwiXG4gICAgdi1yaXBwbGVcbiAgICBjbGlja2FibGVcbiAgICBAY2xpY2s9XCJkaWFsb2cgPSB0cnVlXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgcHJlZmVyZW5jZS5wcm9wcy50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHByZWZlcmVuY2UucHJvcHMuc3VtbWFyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIj5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj57eyBwcmVmZXJlbmNlLnByb3BzLnRpdGxlIH19PC9kaXY+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1mb3I9XCIoc2VsZWMsIGluZGV4KSBpbiBwcmVmZXJlbmNlLnByb3BzLmVudHJpZXNcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICB2LW1vZGVsPVwidmFsXCJcbiAgICAgICAgICAgICAgOnZhbD1cInByZWZlcmVuY2UucHJvcHMuZW50cnlWYWx1ZXNbaW5kZXhdXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwic2VsZWNcIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbVxuICAgIHYtaWY9XCJpc0VkaXRUZXh0UHJlZmVyZW5jZShwcmVmZXJlbmNlKVwiXG4gICAgdi1yaXBwbGVcbiAgICBjbGlja2FibGVcbiAgICBAY2xpY2s9XCJkaWFsb2cgPSB0cnVlXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgcHJlZmVyZW5jZS5wcm9wcy50aXRsZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHByZWZlcmVuY2UucHJvcHMuc3VtbWFyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIj5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICAgIDxxLWlucHV0IHYtaWY9XCJ0eXBlb2YgdmFsID09ICdzdHJpbmcnXCIgdi1tb2RlbD1cInZhbFwiIG91dGxpbmVkIC8+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBsYWJlbD1cIk9LXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzYXZlVGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvcS1kaWFsb2c+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtXG4gICAgdi1pZj1cImlzTGlzdFByZWZlcmVuY2UocHJlZmVyZW5jZSlcIlxuICAgIHYtcmlwcGxlXG4gICAgY2xpY2thYmxlXG4gICAgQGNsaWNrPVwiZGlhbG9nID0gdHJ1ZVwiXG4gID5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57e1xuICAgICAgICBwcmVmZXJlbmNlLnByb3BzLnN1bW1hcnkucmVwbGFjZShcbiAgICAgICAgICAnJXMnLFxuICAgICAgICAgIHByZWZlcmVuY2UucHJvcHMuZW50cmllc1tcbiAgICAgICAgICAgIHByZWZlcmVuY2UucHJvcHMuZW50cnlWYWx1ZXMuaW5kZXhPZihwcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSlcbiAgICAgICAgICBdIHx8ICcnXG4gICAgICAgIClcbiAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiPlxuICAgICAgPHEtY2FyZCBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPnt7IHByZWZlcmVuY2UucHJvcHMudGl0bGUgfX08L2Rpdj5cbiAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICB2LWZvcj1cIihzZWxlYywgaW5kZXgpIGluIHByZWZlcmVuY2UucHJvcHMuZW50cmllc1wiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLXJhZGlvXG4gICAgICAgICAgICAgIHYtaWY9XCJ0eXBlb2YgdmFsID09ICdzdHJpbmcnXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInZhbFwiXG4gICAgICAgICAgICAgIDp2YWw9XCJwcmVmZXJlbmNlLnByb3BzLmVudHJ5VmFsdWVzW2luZGV4XVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cInNlbGVjXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLWRpYWxvZz5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgaXNDaGVja0JveFByZWZlcmVuY2UsXG4gIGlzRWRpdFRleHRQcmVmZXJlbmNlLFxuICBpc0xpc3RQcmVmZXJlbmNlLFxuICBpc011bHRpU2VsZWN0TGlzdFByZWZlcmVuY2UsXG4gIGlzU3dpdGNoUHJlZmVyZW5jZUNvbXBhdCxcbiAgcHJlZmVyZW5jZXMsXG59IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1doYXRJcycsXG4gIHByb3BzOiB7XG4gICAgcHJlZmVyZW5jZToge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPHByZWZlcmVuY2VzPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFsnZ2V0LXByZWZzJ10sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgY29uc3QgZGlhbG9nID0gcmVmKDxib29sZWFuPmZhbHNlKTtcbiAgICBsZXQgdmFsOiB1bmtub3duO1xuICAgIGlmIChpc0NoZWNrQm94UHJlZmVyZW5jZShwcm9wcy5wcmVmZXJlbmNlKSkge1xuICAgICAgdmFsID0gcmVmKDxib29sZWFuPnByb3BzLnByZWZlcmVuY2UucHJvcHMuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzRWRpdFRleHRQcmVmZXJlbmNlKHByb3BzLnByZWZlcmVuY2UpKSB7XG4gICAgICB2YWwgPSByZWYoPHN0cmluZz5wcm9wcy5wcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc011bHRpU2VsZWN0TGlzdFByZWZlcmVuY2UocHJvcHMucHJlZmVyZW5jZSkpIHtcbiAgICAgIHZhbCA9IHJlZig8c3RyaW5nW10+cHJvcHMucHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNTd2l0Y2hQcmVmZXJlbmNlQ29tcGF0KHByb3BzLnByZWZlcmVuY2UpKSB7XG4gICAgICB2YWwgPSByZWYoPGJvb2xlYW4+cHJvcHMucHJlZmVyZW5jZS5wcm9wcy5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSByZWYoPHN0cmluZz5wcm9wcy5wcmVmZXJlbmNlLnByb3BzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaWFsb2csXG4gICAgICB2YWwsXG4gICAgICBpc0NoZWNrQm94UHJlZmVyZW5jZSxcbiAgICAgIGlzRWRpdFRleHRQcmVmZXJlbmNlLFxuICAgICAgaXNNdWx0aVNlbGVjdExpc3RQcmVmZXJlbmNlLFxuICAgICAgaXNTd2l0Y2hQcmVmZXJlbmNlQ29tcGF0LFxuICAgICAgaXNMaXN0UHJlZmVyZW5jZSxcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbCgpIHtcbiAgICAgIGlmICghdGhpcy5pc0VkaXRUZXh0UHJlZmVyZW5jZSh0aGlzLnByZWZlcmVuY2UpKSB7XG4gICAgICAgIHRoaXMuc2F2ZVRleHQoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2F2ZVRleHQoKSB7XG4gICAgICBsZXQgdG1wOiBzdHJpbmc7XG4gICAgICBpZiAodHlwZW9mIHRoaXMudmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRtcCA9IEpTT04uc3RyaW5naWZ5KHRoaXMudmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcCA9ICh0aGlzLnZhbCBhcyBib29sZWFuIHwgc3RyaW5nKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBpXG4gICAgICAgIC5wb3N0KGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vcHJlZmVyZW5jZXNgLCB7XG4gICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgdmFsdWU6IHRtcCxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldC1wcmVmcycpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS1cbiBDb3B5cmlnaHQgKGMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuXG4gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLS0+XG5cbjx0ZW1wbGF0ZT5cbiAgPHEtbGlzdCBzZXBhcmF0b3IgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlXCIgOnN0eWxlLWZuPVwibXlUd2Vha1wiPlxuICAgIDx3aGF0aXNcbiAgICAgIHYtZm9yPVwiKHByZWYsIGluZGV4KSBpbiBwcmVmZXJlbmNlc1wiXG4gICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgOnByZWZlcmVuY2U9XCJwcmVmXCJcbiAgICAgIDpwb3NpdGlvbj1cImluZGV4XCJcbiAgICAgIEBnZXQtcHJlZnM9XCJnZXRQcmVmc1wiXG4gICAgPjwvd2hhdGlzPlxuICA8L3EtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBwcmVmZXJlbmNlcyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHdoYXRpcyBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvY29uZmlnL3doYXRJcy52dWUnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NldHRpbmdzUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgd2hhdGlzIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7IHByZWZlcmVuY2VzOiByZWYoPHByZWZlcmVuY2VzW10+W10pIH07XG4gIH0sXG4gIHdhdGNoOiB7fSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2V0UHJlZnMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJyxcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRQcmVmcygpIHtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAuZ2V0KGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vcHJlZmVyZW5jZXNgKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8cHJlZmVyZW5jZXNbXT4pID0+ICh0aGlzLnByZWZlcmVuY2VzID0gZGF0YSlcbiAgICAgICAgKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUlBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLENBQUMsV0FBVztBQUFBLEVBQ25CLE1BQU0sT0FBTztBQUNMLFVBQUEsU0FBUyxJQUFhLEtBQUs7QUFDN0IsUUFBQTtBQUNBLFFBQUEscUJBQXFCLE1BQU0sVUFBVSxHQUFHO0FBQzFDLFlBQU0sSUFBYSxNQUFNLFdBQVcsTUFBTSxZQUFZO0FBQUEsSUFDN0MsV0FBQSxxQkFBcUIsTUFB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
