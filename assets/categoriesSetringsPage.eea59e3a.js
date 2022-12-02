import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.10998179.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QList } from "./QList.23ba57c4.js";
import { Q as QPageSticky } from "./QPageSticky.3c9de08f.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QInput } from "./QInput.269ea6c0.js";
import { Q as QToggle } from "./QToggle.a59079d2.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, B as withDirectives, F as Fragment, u as createBaseVNode, j as createBlock, s as resolveComponent, x as renderList, p as createTextVNode, t as toDisplayString } from "./index.0b61810d.js";
import "./QSpinner.0d412098.js";
import "./Ripple.ce29675d.js";
import "./dom.fd94eb85.js";
import "./use-dark.bc291eea.js";
import "./use-key-composition.64dd1858.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./use-form.324955ff.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-timeout.99cd911c.js";
import "./scroll.34fac392.js";
import "./use-transition.65db8379.js";
const _sfc_main$1 = defineComponent({
  name: "CatSettingsEdit",
  props: {
    cat: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      editdialog: ref(false),
      defaul: ref(props.cat.default),
      edittxt: ref(props.cat.name)
    };
  },
  methods: {
    savetxt() {
      this.$api.patchForm(`/api/v1/category/${this.cat.id}`, {
        name: this.edittxt,
        default: this.defaul.toString()
      });
    }
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
                  modelValue: _ctx.edittxt,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.edittxt = $event),
                  style: { "width": "100%" },
                  type: "text",
                  label: "Category Name",
                  outlined: ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(QItem, null, {
              default: withCtx(() => [
                createVNode(QToggle, {
                  modelValue: _ctx.defaul,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.defaul = $event),
                  label: "Default category when adding new manga to library",
                  color: "blue"
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
  setup() {
    return {
      catag: ref([]),
      editdialog: ref(false),
      newDialog: ref(false),
      edittxt: ref(""),
      defaul: ref(false)
    };
  },
  mounted: function() {
    this.getcats();
  },
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
                  round: "",
                  flat: "",
                  icon: "keyboard_double_arrow_up",
                  onClick: ($event) => index ? _ctx.moveto(cat2.order, 1) : ``
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  round: "",
                  flat: "",
                  icon: "keyboard_arrow_up",
                  onClick: ($event) => index ? _ctx.moveto(cat2.order, cat2.order - 1) : ``
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  round: "",
                  flat: "",
                  icon: "keyboard_arrow_down",
                  onClick: ($event) => index < _ctx.catag.length - 1 ? _ctx.moveto(cat2.order, cat2.order + 1) : ``
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  round: "",
                  flat: "",
                  icon: "keyboard_double_arrow_down",
                  onClick: ($event) => index < _ctx.catag.length - 1 ? _ctx.moveto(cat2.order, _ctx.catag.length) : ``
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
                    modelValue: _ctx.edittxt,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.edittxt = $event),
                    style: { "width": "100%" },
                    type: "text",
                    label: "Category Name",
                    outlined: ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QItem, null, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: _ctx.defaul,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.defaul = $event),
                    label: "Default category when adding new manga to library",
                    color: "blue"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllc1NldHJpbmdzUGFnZS5lZWE1OWUzYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2F0U2V0aW5ncy9lZGl0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9jYXRlZ29yaWVzU2V0cmluZ3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cImVkaXRcIiBjbGFzcz1cInEtbWwteGxcIiBAY2xpY2s9XCJlZGl0ZGlhbG9nID0gdHJ1ZVwiIC8+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZWRpdGRpYWxvZ1wiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+RWRpdCBDYXRlZ29yeTwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cImVkaXR0eHRcIlxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5IE5hbWVcIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgID48L3EtaW5wdXQ+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLXRvZ2dsZVxuICAgICAgICAgIHYtbW9kZWw9XCJkZWZhdWxcIlxuICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdCBjYXRlZ29yeSB3aGVuIGFkZGluZyBuZXcgbWFuZ2EgdG8gbGlicmFyeVwiXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgQGNsaWNrPVwic2F2ZXR4dFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjYXQgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0NhdFNldHRpbmdzRWRpdCcsXG4gIHByb3BzOiB7XG4gICAgY2F0OiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8Y2F0PixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRkaWFsb2c6IHJlZihmYWxzZSksXG4gICAgICBkZWZhdWw6IHJlZihwcm9wcy5jYXQuZGVmYXVsdCksXG4gICAgICBlZGl0dHh0OiByZWYocHJvcHMuY2F0Lm5hbWUpLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzYXZldHh0KCkge1xuICAgICAgdGhpcy4kYXBpLnBhdGNoRm9ybShgL2FwaS92MS9jYXRlZ29yeS8ke3RoaXMuY2F0LmlkfWAsIHtcbiAgICAgICAgbmFtZTogdGhpcy5lZGl0dHh0LFxuICAgICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bC50b1N0cmluZygpLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdCBzZXBhcmF0b3IgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlXCI+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIHYtZm9yPVwiKGNhdCwgaW5kZXgpIGluIGNhdGFnXCJcbiAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkcmFnX2hhbmRsZVwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGNhdC5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGljb249XCJrZXlib2FyZF9kb3VibGVfYXJyb3dfdXBcIlxuICAgICAgICAgIEBjbGljaz1cImluZGV4ID8gbW92ZXRvKGNhdC5vcmRlciwgMSkgOiBgYFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGljb249XCJrZXlib2FyZF9hcnJvd191cFwiXG4gICAgICAgICAgQGNsaWNrPVwiaW5kZXggPyBtb3ZldG8oY2F0Lm9yZGVyLCBjYXQub3JkZXIgLSAxKSA6IGBgXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImtleWJvYXJkX2Fycm93X2Rvd25cIlxuICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgaW5kZXggPCBjYXRhZy5sZW5ndGggLSAxID8gbW92ZXRvKGNhdC5vcmRlciwgY2F0Lm9yZGVyICsgMSkgOiBgYFxuICAgICAgICAgIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGljb249XCJrZXlib2FyZF9kb3VibGVfYXJyb3dfZG93blwiXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBpbmRleCA8IGNhdGFnLmxlbmd0aCAtIDEgPyBtb3ZldG8oY2F0Lm9yZGVyLCBjYXRhZy5sZW5ndGgpIDogYGBcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgICA8Y2F0RWRpdCA6Y2F0PVwiY2F0XCIgLz5cbiAgICAgICAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cImRlbGV0ZVwiIEBjbGljaz1cImRlbGNhdChjYXQuaWQpXCIgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgZmFiXG4gICAgICAgIGNsYXNzPVwidGV4dC1ibGFja1wiXG4gICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICBAY2xpY2s9XCJuZXdEaWFsb2cgPSB0cnVlXCJcbiAgICAgIC8+XG4gICAgPC9xLXBhZ2Utc3RpY2t5PlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwibmV3RGlhbG9nXCI+XG4gICAgICA8cS1jYXJkPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5OZXcgQ2F0ZWdvcnk8L2Rpdj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cImVkaXR0eHRcIlxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5IE5hbWVcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICA+PC9xLWlucHV0PlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS10b2dnbGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkZWZhdWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJEZWZhdWx0IGNhdGVnb3J5IHdoZW4gYWRkaW5nIG5ldyBtYW5nYSB0byBsaWJyYXJ5XCJcbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmV0eHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgY2F0IH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgY2F0RWRpdCBmcm9tICdzcmMvY29tcG9uZW50cy9jYXRTZXRpbmdzL2VkaXQudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdDYXRlZ29yaWVzU2V0dGluZ3NQYWdlJyxcbiAgY29tcG9uZW50czogeyBjYXRFZGl0IH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRhZzogcmVmKDxjYXRbXT5bXSksXG4gICAgICBlZGl0ZGlhbG9nOiByZWYoZmFsc2UpLFxuICAgICAgbmV3RGlhbG9nOiByZWYoZmFsc2UpLFxuICAgICAgZWRpdHR4dDogcmVmKCcnKSxcbiAgICAgIGRlZmF1bDogcmVmKGZhbHNlKSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRjYXRzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCcsXG4gICAgICB9O1xuICAgIH0sXG4gICAgbW92ZXRvKGN1cnI6IG51bWJlciwgdG86IG51bWJlcikge1xuICAgICAgY29uc3QgY3VyID0gdGhpcy5jYXRhZy5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLm9yZGVyID09IGN1cnIpO1xuICAgICAgaWYgKGN1ciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdG1wID0gdGhpcy5jYXRhZ1tjdXJdO1xuICAgICAgICBpZiAodG1wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuY2F0YWcgPSA8Y2F0W10+dGhpcy5hcnJheV9tb3ZlKHRoaXMuY2F0YWcsIGN1cnIgLSAxLCB0byAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2F0YWcgPSB0aGlzLmNhdGFnLm1hcCgoZWxlLCBpbmRlKSA9PiB7XG4gICAgICAgICAgZWxlLm9yZGVyID0gaW5kZSArIDE7XG4gICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFwaS5wYXRjaEZvcm0oJy9hcGkvdjEvY2F0ZWdvcnkvcmVvcmRlcicsIHtcbiAgICAgICAgICBmcm9tOiBjdXJyLnRvU3RyaW5nKCksXG4gICAgICAgICAgdG86IHRvLnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXJyYXlfbW92ZShhcnI6IHVua25vd25bXSwgb2xkX2luZGV4OiBudW1iZXIsIG5ld19pbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAobmV3X2luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGsgPSBuZXdfaW5kZXggLSBhcnIubGVuZ3RoICsgMTtcbiAgICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICAgIGFyci5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyci5zcGxpY2UobmV3X2luZGV4LCAwLCBhcnIuc3BsaWNlKG9sZF9pbmRleCwgMSlbMF0pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIHNhdmV0eHQoKSB7XG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmQuYXBwZW5kKCduYW1lJywgdGhpcy5lZGl0dHh0KTtcbiAgICAgIGZkLmFwcGVuZCgnZGVmYXVsdCcsIHRoaXMuZGVmYXVsLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy4kYXBpXG4gICAgICAgIC5wb3N0Rm9ybSgnL2FwaS92MS9jYXRlZ29yeS8nLCB7XG4gICAgICAgICAgbmFtZTogdGhpcy5lZGl0dHh0LFxuICAgICAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsLnRvU3RyaW5nKCksXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0Y2F0cygpKTtcbiAgICB9LFxuICAgIGdldGNhdHMoKSB7XG4gICAgICB0aGlzLiRhcGlcbiAgICAgICAgLmdldCgnL2FwaS92MS9jYXRlZ29yeS8nKVxuICAgICAgICAudGhlbigoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8Y2F0W10+KSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXRhZyA9IGRhdGEuc2xpY2UoMSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsY2F0KGlkOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuJGFwaS5kZWxldGUoYC9hcGkvdjEvY2F0ZWdvcnkvJHtpZH1gKS50aGVuKCgpID0+IHRoaXMuZ2V0Y2F0cygpKTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX3dpdGhEaXJlY3RpdmVzIiwiX2NyZWF0ZUJsb2NrIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVy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
