import { Q as QIcon } from "./QIcon.129c8e27.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.f373f416.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QList } from "./QList.323c1084.js";
import { Q as QPageSticky } from "./QPageSticky.057230f8.js";
import { Q as QCardSection } from "./QCardSection.c8f72209.js";
import { Q as QInput } from "./QInput.cad7e9be.js";
import { Q as QToggle } from "./QToggle.a7cc5817.js";
import { Q as QCardActions } from "./QCardActions.82161f73.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QDialog } from "./QDialog.e6d65e20.js";
import { Q as QPage } from "./QPage.8c90446c.js";
import { C as ClosePopup } from "./ClosePopup.501d8ad0.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, B as withDirectives, F as Fragment, u as createBaseVNode, j as createBlock, s as resolveComponent, x as renderList, p as createTextVNode, t as toDisplayString } from "./index.5cc93081.js";
import "./QSpinner.7d14a7f2.js";
import "./Ripple.3a8ac2e1.js";
import "./dom.e2e78a08.js";
import "./use-dark.1adac86a.js";
import "./use-key-composition.a20c22ba.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./use-form.94dd5d17.js";
import "./use-checkbox.17ce6f52.js";
import "./option-sizes.60af55ae.js";
import "./use-timeout.fccbe84a.js";
import "./scroll.b1151d01.js";
import "./use-transition.651acf9e.js";
const _sfc_main$1 = defineComponent({
  name: "CatSettingsEdit",
  props: {
    cat: {
      type: Object,
      required: true
    }
  },
  methods: {
    savetxt() {
      this.$api.patchForm(`/api/v1/category/${this.cat.id}`, {
        name: this.edittxt,
        default: this.defaul.toString()
      });
    }
  },
  setup(props) {
    return {
      editdialog: ref(false),
      defaul: ref(props.cat.default),
      edittxt: ref(props.cat.name)
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Edit Category", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtn, {
      round: "",
      flat: "",
      icon: "edit",
      class: "q-ml-xl",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.editdialog = true)
    }),
    createVNode(QDialog, {
      modelValue: _ctx.editdialog,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.editdialog = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_1$1
              ]),
              _: 1
            }),
            createVNode(QItem, null, {
              default: withCtx(() => [
                createVNode(QInput, {
                  style: { "width": "100%" },
                  type: "text",
                  label: "Category Name",
                  outlined: "",
                  modelValue: _ctx.edittxt,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.edittxt = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(QItem, null, {
              default: withCtx(() => [
                createVNode(QToggle, {
                  label: "Default category when adding new manga to library",
                  color: "blue",
                  modelValue: _ctx.defaul,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.defaul = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(QCardActions, { align: "right" }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  flat: "",
                  label: "Save",
                  color: "primary",
                  onClick: _ctx.savetxt
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
  ], 64);
}
var catEdit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "edit.vue"]]);
const _sfc_main = defineComponent({
  name: "CategoriesSettingsPage",
  components: { catEdit },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    moveto(curr, to) {
      const cur = this.catag.findIndex((ele) => ele.order == curr);
      if (cur != void 0) {
        const tmp = this.catag[cur];
        if (tmp != void 0) {
          this.catag = this.array_move(this.catag, curr - 1, to - 1);
        }
        this.catag = this.catag.map((ele, inde) => {
          ele.order = inde + 1;
          return ele;
        });
        this.$api.patchForm("/api/v1/category/reorder", {
          from: curr.toString(),
          to: to.toString()
        });
      }
    },
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        let k = new_index - arr.length + 1;
        while (k--) {
          arr.push(void 0);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
    },
    savetxt() {
      const fd = new FormData();
      fd.append("name", this.edittxt);
      fd.append("default", this.defaul.toString());
      this.$api.postForm("/api/v1/category/", {
        name: this.edittxt,
        default: this.defaul.toString()
      }).then(() => this.getcats());
    },
    getcats() {
      this.$api.get("/api/v1/category/").then(({ data }) => {
        this.catag = data.slice(1);
      });
    },
    delcat(id) {
      this.$api.delete(`/api/v1/category/${id}`).then(() => this.getcats());
    }
  },
  mounted: function() {
    this.getcats();
  },
  setup() {
    return {
      catag: ref([]),
      editdialog: ref(false),
      newDialog: ref(false),
      edittxt: ref(""),
      defaul: ref(false)
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "New Category", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_catEdit = resolveComponent("catEdit");
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
    default: withCtx(() => [
      createVNode(QList, {
        separator: "",
        dark: _ctx.$q.dark.isActive
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.catag, (cat2, index) => {
            return openBlock(), createBlock(QItem, {
              key: index,
              class: "row justify-between"
            }, {
              default: withCtx(() => [
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QIcon, { name: "drag_handle" })
                  ]),
                  _: 1
                }),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(cat2.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(QBtn, {
                  onClick: ($event) => index ? _ctx.moveto(cat2.order, 1) : ``,
                  round: "",
                  flat: "",
                  icon: "keyboard_double_arrow_up"
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  onClick: ($event) => index ? _ctx.moveto(cat2.order, cat2.order - 1) : ``,
                  round: "",
                  flat: "",
                  icon: "keyboard_arrow_up"
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  onClick: ($event) => index < _ctx.catag.length - 1 ? _ctx.moveto(cat2.order, cat2.order + 1) : ``,
                  round: "",
                  flat: "",
                  icon: "keyboard_arrow_down"
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  onClick: ($event) => index < _ctx.catag.length - 1 ? _ctx.moveto(cat2.order, _ctx.catag.length) : ``,
                  round: "",
                  flat: "",
                  icon: "keyboard_double_arrow_down"
                }, null, 8, ["onClick"]),
                createVNode(_component_catEdit, { cat: cat2 }, null, 8, ["cat"]),
                createVNode(QBtn, {
                  round: "",
                  flat: "",
                  icon: "delete",
                  onClick: ($event) => _ctx.delcat(cat2.id)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["dark"]),
      createVNode(QPageSticky, {
        position: "bottom-right",
        offset: [18, 18]
      }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            fab: "",
            class: "text-black",
            icon: "add",
            color: "blue",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.newDialog = true)
          })
        ]),
        _: 1
      }),
      createVNode(QDialog, {
        modelValue: _ctx.newDialog,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.newDialog = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    style: { "width": "100%" },
                    type: "text",
                    label: "Category Name",
                    outlined: "",
                    modelValue: _ctx.edittxt,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.edittxt = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    label: "Default category when adding new manga to library",
                    color: "blue",
                    modelValue: _ctx.defaul,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.defaul = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    label: "Save",
                    color: "primary",
                    onClick: _ctx.savetxt
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
  }, 8, ["style-fn"]);
}
var categoriesSetringsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "categoriesSetringsPage.vue"]]);
export { categoriesSetringsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllc1NldHJpbmdzUGFnZS4wMzgwNmFhOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2F0U2V0aW5ncy9lZGl0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9jYXRlZ29yaWVzU2V0cmluZ3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cImVkaXRcIiBjbGFzcz1cInEtbWwteGxcIiBAY2xpY2s9XCJlZGl0ZGlhbG9nID0gdHJ1ZVwiIC8+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZWRpdGRpYWxvZ1wiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+RWRpdCBDYXRlZ29yeTwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcnkgTmFtZVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICB2LW1vZGVsPVwiZWRpdHR4dFwiXG4gICAgICAgID48L3EtaW5wdXQ+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLXRvZ2dsZVxuICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdCBjYXRlZ29yeSB3aGVuIGFkZGluZyBuZXcgbWFuZ2EgdG8gbGlicmFyeVwiXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZGVmYXVsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiU2F2ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwic2F2ZXR4dFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjYXQgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0NhdFNldHRpbmdzRWRpdCcsXG4gIHByb3BzOiB7XG4gICAgY2F0OiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8Y2F0PixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2F2ZXR4dCgpIHtcbiAgICAgIHRoaXMuJGFwaS5wYXRjaEZvcm0oYC9hcGkvdjEvY2F0ZWdvcnkvJHt0aGlzLmNhdC5pZH1gLCB7XG4gICAgICAgIG5hbWU6IHRoaXMuZWRpdHR4dCxcbiAgICAgICAgZGVmYXVsdDogdGhpcy5kZWZhdWwudG9TdHJpbmcoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0ZGlhbG9nOiByZWYoZmFsc2UpLFxuICAgICAgZGVmYXVsOiByZWYocHJvcHMuY2F0LmRlZmF1bHQpLFxuICAgICAgZWRpdHR4dDogcmVmKHByb3BzLmNhdC5uYW1lKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdCBzZXBhcmF0b3IgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlXCI+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIHYtZm9yPVwiKGNhdCwgaW5kZXgpIGluIGNhdGFnXCJcbiAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkcmFnX2hhbmRsZVwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGNhdC5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImluZGV4ID8gbW92ZXRvKGNhdC5vcmRlciwgMSkgOiBgYFwiXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImtleWJvYXJkX2RvdWJsZV9hcnJvd191cFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImluZGV4ID8gbW92ZXRvKGNhdC5vcmRlciwgY2F0Lm9yZGVyIC0gMSkgOiBgYFwiXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImtleWJvYXJkX2Fycm93X3VwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBpbmRleCA8IGNhdGFnLmxlbmd0aCAtIDEgPyBtb3ZldG8oY2F0Lm9yZGVyLCBjYXQub3JkZXIgKyAxKSA6IGBgXG4gICAgICAgICAgXCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfYXJyb3dfZG93blwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgaW5kZXggPCBjYXRhZy5sZW5ndGggLSAxID8gbW92ZXRvKGNhdC5vcmRlciwgY2F0YWcubGVuZ3RoKSA6IGBgXG4gICAgICAgICAgXCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfZG91YmxlX2Fycm93X2Rvd25cIlxuICAgICAgICAvPlxuICAgICAgICA8Y2F0RWRpdCA6Y2F0PVwiY2F0XCIgLz5cbiAgICAgICAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cImRlbGV0ZVwiIEBjbGljaz1cImRlbGNhdChjYXQuaWQpXCIgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgZmFiXG4gICAgICAgIGNsYXNzPVwidGV4dC1ibGFja1wiXG4gICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICBAY2xpY2s9XCJuZXdEaWFsb2cgPSB0cnVlXCJcbiAgICAgIC8+XG4gICAgPC9xLXBhZ2Utc3RpY2t5PlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwibmV3RGlhbG9nXCI+XG4gICAgICA8cS1jYXJkPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5OZXcgQ2F0ZWdvcnk8L2Rpdj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5IE5hbWVcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJlZGl0dHh0XCJcbiAgICAgICAgICA+PC9xLWlucHV0PlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS10b2dnbGVcbiAgICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdCBjYXRlZ29yeSB3aGVuIGFkZGluZyBuZXcgbWFuZ2EgdG8gbGlicmFyeVwiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImRlZmF1bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmV0eHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgY2F0IH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgY2F0RWRpdCBmcm9tICdzcmMvY29tcG9uZW50cy9jYXRTZXRpbmdzL2VkaXQudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdDYXRlZ29yaWVzU2V0dGluZ3NQYWdlJyxcbiAgY29tcG9uZW50czogeyBjYXRFZGl0IH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBtb3ZldG8oY3VycjogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gICAgICBjb25zdCBjdXIgPSB0aGlzLmNhdGFnLmZpbmRJbmRleCgoZWxlKSA9PiBlbGUub3JkZXIgPT0gY3Vycik7XG4gICAgICBpZiAoY3VyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0bXAgPSB0aGlzLmNhdGFnW2N1cl07XG4gICAgICAgIGlmICh0bXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5jYXRhZyA9IDxjYXRbXT50aGlzLmFycmF5X21vdmUodGhpcy5jYXRhZywgY3VyciAtIDEsIHRvIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXRhZyA9IHRoaXMuY2F0YWcubWFwKChlbGUsIGluZGUpID0+IHtcbiAgICAgICAgICBlbGUub3JkZXIgPSBpbmRlICsgMTtcbiAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kYXBpLnBhdGNoRm9ybSgnL2FwaS92MS9jYXRlZ29yeS9yZW9yZGVyJywge1xuICAgICAgICAgIGZyb206IGN1cnIudG9TdHJpbmcoKSxcbiAgICAgICAgICB0bzogdG8udG9TdHJpbmcoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFycmF5X21vdmUoYXJyOiB1bmtub3duW10sIG9sZF9pbmRleDogbnVtYmVyLCBuZXdfaW5kZXg6IG51bWJlcikge1xuICAgICAgaWYgKG5ld19pbmRleCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgIGxldCBrID0gbmV3X2luZGV4IC0gYXJyLmxlbmd0aCArIDE7XG4gICAgICAgIHdoaWxlIChrLS0pIHtcbiAgICAgICAgICBhcnIucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnIuc3BsaWNlKG5ld19pbmRleCwgMCwgYXJyLnNwbGljZShvbGRfaW5kZXgsIDEpWzBdKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICBzYXZldHh0KCkge1xuICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZkLmFwcGVuZCgnbmFtZScsIHRoaXMuZWRpdHR4dCk7XG4gICAgICBmZC5hcHBlbmQoJ2RlZmF1bHQnLCB0aGlzLmRlZmF1bC50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAucG9zdEZvcm0oJy9hcGkvdjEvY2F0ZWdvcnkvJywge1xuICAgICAgICAgIG5hbWU6IHRoaXMuZWRpdHR4dCxcbiAgICAgICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bC50b1N0cmluZygpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0Y2F0cygpKTtcbiAgICB9LFxuICAgIGdldGNhdHMoKSB7XG4gICAgICB0aGlzLiRhcGlcbiAgICAgICAgLmdldCgnL2FwaS92MS9jYXRlZ29yeS8nKVxuICAgICAgICAudGhlbigoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8Y2F0W10+KSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXRhZyA9IGRhdGEuc2xpY2UoMSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsY2F0KGlkOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuJGFwaS5kZWxldGUoYC9hcGkvdjEvY2F0ZWdvcnkvJHtpZH1gKS50aGVuKCgpID0+IHRoaXMuZ2V0Y2F0cygpKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldGNhdHMoKTtcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFnOiByZWYoPGNhdFtdPltdKSxcbiAgICAgIGVkaXRkaWFsb2c6IHJlZihmYWxzZSksXG4gICAgICBuZXdEaWFsb2c6IHJlZihmYWxzZSksXG4gICAgICBlZGl0dHh0OiByZWYoJycpLFxuICAgICAgZGVmYXVsOiByZWYoZmFsc2UpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX3dpdGhEaXJlY3RpdmVzIiwiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsImNhdCIs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
