import { Q as QIcon } from "./QIcon.aa032244.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QList } from "./QList.e87441cd.js";
import { Q as QPageSticky } from "./QPageSticky.fba7628c.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QInput } from "./QInput.6b71ca31.js";
import { Q as QToggle } from "./QToggle.41c58e33.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { f as defineComponent, r as ref, _ as _export_sfc, j as openBlock, y as createElementBlock, n as createVNode, m as withCtx, D as withDirectives, F as Fragment, v as createBaseVNode, k as createBlock, u as resolveComponent, z as renderList, q as createTextVNode, t as toDisplayString } from "./index.75e4774b.js";
import "./QSpinner.6511ee07.js";
import "./Ripple.bedf8a1c.js";
import "./dom.3bfc77a6.js";
import "./use-dark.63b90c22.js";
import "./use-key-composition.689d3f4d.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./use-form.b3df9ff5.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./use-transition.34947ede.js";
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
      const fd = new FormData();
      fd.append("name", this.edittxt);
      fd.append("default", this.defaul.toString());
      this.$fetch(`/api/v1/category/${this.cat.id}`, {
        method: "PATCH",
        body: fd
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
        const fd = new FormData();
        fd.append("from", curr.toString());
        fd.append("to", to.toString());
        this.$fetch("/api/v1/category/reorder", {
          method: "PATCH",
          body: fd
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
      this.$fetch("/api/v1/category/", {
        method: "POST",
        body: fd
      }).then(() => this.getcats());
    },
    getcats() {
      this.$fetchJSON("/api/v1/category/").then((data) => {
        this.catag = data.slice(1);
      });
    },
    delcat(id) {
      this.$fetch(`/api/v1/category/${id}`, { method: "DELETE" }).then(
        () => this.getcats()
      );
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
        dark: _ctx.$q.dark.isActive ? true : false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllc1NldHJpbmdzUGFnZS4wM2E5NWJkZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2F0U2V0aW5ncy9lZGl0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9jYXRlZ29yaWVzU2V0cmluZ3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cImVkaXRcIiBjbGFzcz1cInEtbWwteGxcIiBAY2xpY2s9XCJlZGl0ZGlhbG9nID0gdHJ1ZVwiIC8+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZWRpdGRpYWxvZ1wiPlxuICAgIDxxLWNhcmQ+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+RWRpdCBDYXRlZ29yeTwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcnkgTmFtZVwiXG4gICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICB2LW1vZGVsPVwiZWRpdHR4dFwiXG4gICAgICAgID48L3EtaW5wdXQ+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLXRvZ2dsZVxuICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdCBjYXRlZ29yeSB3aGVuIGFkZGluZyBuZXcgbWFuZ2EgdG8gbGlicmFyeVwiXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZGVmYXVsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiU2F2ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwic2F2ZXR4dFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjYXQgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0NhdFNldHRpbmdzRWRpdCcsXG4gIHByb3BzOiB7XG4gICAgY2F0OiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8Y2F0PixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2F2ZXR4dCgpIHtcbiAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmZC5hcHBlbmQoJ25hbWUnLCB0aGlzLmVkaXR0eHQpO1xuICAgICAgZmQuYXBwZW5kKCdkZWZhdWx0JywgdGhpcy5kZWZhdWwudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLiRmZXRjaChgL2FwaS92MS9jYXRlZ29yeS8ke3RoaXMuY2F0LmlkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBib2R5OiBmZFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0ZGlhbG9nOiByZWYoZmFsc2UpLFxuICAgICAgZGVmYXVsOiByZWYocHJvcHMuY2F0LmRlZmF1bHQpLFxuICAgICAgZWRpdHR4dDogcmVmKHByb3BzLmNhdC5uYW1lKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPHEtbGlzdCBzZXBhcmF0b3IgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlID8gdHJ1ZSA6IGZhbHNlXCI+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIHYtZm9yPVwiKGNhdCwgaW5kZXgpIGluIGNhdGFnXCJcbiAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJkcmFnX2hhbmRsZVwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGNhdC5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImluZGV4ID8gbW92ZXRvKGNhdC5vcmRlciwgMSkgOiBgYFwiXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImtleWJvYXJkX2RvdWJsZV9hcnJvd191cFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImluZGV4ID8gbW92ZXRvKGNhdC5vcmRlciwgY2F0Lm9yZGVyIC0gMSkgOiBgYFwiXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaWNvbj1cImtleWJvYXJkX2Fycm93X3VwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBpbmRleCA8IGNhdGFnLmxlbmd0aCAtIDEgPyBtb3ZldG8oY2F0Lm9yZGVyLCBjYXQub3JkZXIgKyAxKSA6IGBgXG4gICAgICAgICAgXCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfYXJyb3dfZG93blwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgaW5kZXggPCBjYXRhZy5sZW5ndGggLSAxID8gbW92ZXRvKGNhdC5vcmRlciwgY2F0YWcubGVuZ3RoKSA6IGBgXG4gICAgICAgICAgXCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBpY29uPVwia2V5Ym9hcmRfZG91YmxlX2Fycm93X2Rvd25cIlxuICAgICAgICAvPlxuICAgICAgICA8Y2F0RWRpdCA6Y2F0PVwiY2F0XCIgLz5cbiAgICAgICAgPHEtYnRuIHJvdW5kIGZsYXQgaWNvbj1cImRlbGV0ZVwiIEBjbGljaz1cImRlbGNhdChjYXQuaWQpXCIgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgZmFiXG4gICAgICAgIGNsYXNzPVwidGV4dC1ibGFja1wiXG4gICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICBAY2xpY2s9XCJuZXdEaWFsb2cgPSB0cnVlXCJcbiAgICAgIC8+XG4gICAgPC9xLXBhZ2Utc3RpY2t5PlxuICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwibmV3RGlhbG9nXCI+XG4gICAgICA8cS1jYXJkPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5OZXcgQ2F0ZWdvcnk8L2Rpdj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5IE5hbWVcIlxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJlZGl0dHh0XCJcbiAgICAgICAgICA+PC9xLWlucHV0PlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS10b2dnbGVcbiAgICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdCBjYXRlZ29yeSB3aGVuIGFkZGluZyBuZXcgbWFuZ2EgdG8gbGlicmFyeVwiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImRlZmF1bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmV0eHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtZGlhbG9nPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgY2F0IH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgY2F0RWRpdCBmcm9tICdzcmMvY29tcG9uZW50cy9jYXRTZXRpbmdzL2VkaXQudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0NhdGVnb3JpZXNTZXR0aW5nc1BhZ2UnLFxuICBjb21wb25lbnRzOiB7IGNhdEVkaXQgfSxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIG1vdmV0byhjdXJyOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IGN1ciA9IHRoaXMuY2F0YWcuZmluZEluZGV4KChlbGUpID0+IGVsZS5vcmRlciA9PSBjdXJyKTtcbiAgICAgIGlmIChjdXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IHRoaXMuY2F0YWdbY3VyXTtcbiAgICAgICAgaWYgKHRtcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNhdGFnID0gPGNhdFtdPnRoaXMuYXJyYXlfbW92ZSh0aGlzLmNhdGFnLCBjdXJyIC0gMSwgdG8gLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGFnID0gdGhpcy5jYXRhZy5tYXAoKGVsZSwgaW5kZSkgPT4ge1xuICAgICAgICAgIGVsZS5vcmRlciA9IGluZGUgKyAxO1xuICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmZC5hcHBlbmQoJ2Zyb20nLCBjdXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICBmZC5hcHBlbmQoJ3RvJywgdG8udG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL2NhdGVnb3J5L3Jlb3JkZXInLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgIGJvZHk6IGZkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXJyYXlfbW92ZShhcnI6IHVua25vd25bXSwgb2xkX2luZGV4OiBudW1iZXIsIG5ld19pbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAobmV3X2luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGsgPSBuZXdfaW5kZXggLSBhcnIubGVuZ3RoICsgMTtcbiAgICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICAgIGFyci5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyci5zcGxpY2UobmV3X2luZGV4LCAwLCBhcnIuc3BsaWNlKG9sZF9pbmRleCwgMSlbMF0pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIHNhdmV0eHQoKSB7XG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmQuYXBwZW5kKCduYW1lJywgdGhpcy5lZGl0dHh0KTtcbiAgICAgIGZkLmFwcGVuZCgnZGVmYXVsdCcsIHRoaXMuZGVmYXVsLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy4kZmV0Y2goJy9hcGkvdjEvY2F0ZWdvcnkvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZmRcbiAgICAgIH0pLnRoZW4oKCkgPT4gdGhpcy5nZXRjYXRzKCkpO1xuICAgIH0sXG4gICAgZ2V0Y2F0cygpIHtcbiAgICAgIHRoaXMuJGZldGNoSlNPTignL2FwaS92MS9jYXRlZ29yeS8nKS50aGVuKChkYXRhOiBjYXRbXSkgPT4ge1xuICAgICAgICB0aGlzLmNhdGFnID0gZGF0YS5zbGljZSgxKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsY2F0KGlkOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuJGZldGNoKGAvYXBpL3YxL2NhdGVnb3J5LyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pLnRoZW4oKCkgPT5cbiAgICAgICAgdGhpcy5nZXRjYXRzKClcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRjYXRzKCk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRhZzogcmVmKDxjYXRbXT5bXSksXG4gICAgICBlZGl0ZGlhbG9nOiByZWYoZmFsc2UpLFxuICAgICAgbmV3RGlhbG9nOiByZWYoZmFsc2UpLFxuICAgICAgZWRpdHR4dDogcmVmKCcnKSxcbiAgICAgIGRlZmF1bDogcmVmKGZhbHNlKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl93aXRoRGlyZWN0aXZlcyIsIl9jcmVhdGVCbG9jayIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJjYXQiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQ0YsWUFBQSxLQUFLLElBQUk7QUFDWixTQUFBLE9BQU8sUUFBUSxLQUFLLE9BQU87QUFDOUIsU0FBRyxPQUFPLFdBQVcsS0FBSyxPQUFPLFVBQVU7QUFDM0MsV0FBSyxPQUFPLG9CQUFvQixLQUFLLElBQUksTUFBTTtBQUFBLFFBQzdDLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxNQUFBLENBQ1A7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTSxPQUFPO0FBQ0osV0FBQTtBQUFBLE1BQ0wsWUFBWSxJQUFJLEtBQUs7QUFBQSxNQUNyQixRQUFRLElBQUksTUFBTSxJQUFJLE9BQU87QUFBQSxNQUM3QixTQUFTLElBQUksTUFBTSxJQUFJLElBQUk7QUFBQSxJQUFBO0FBQUEsRUFFL0I7QUFDRixDQUFDO0FBN0RPLE1BQUFDLGVBQUFDLGdDQUF3QyxPQUFuQyxFQUFBLE9BQU0sYUFBVSxpQkFBYSxFQUFBOzs7SUFKeENDLFlBQTJFLE1BQUE7QUFBQSxNQUFwRSxPQUFBO0FBQUEsTUFBTSxNQUFBO0FBQUEsTUFBSyxNQUFLO0FBQUEsTUFBTyxPQUFNO0FBQUEsTUFBVyxTQUFLLHNDQUFFLEtBQVUsYUFBQTtBQUFBLElBQUEsQ0FBQTtBQUFBLElBQ2hFQSxZQStCVyxTQUFBO0FBQUEsTUEvQlEsWUFBQSxL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
