import { Q as QTooltip } from "./QTooltip.180c1c60.js";
import { Q as QBtn } from "./QBtn.fa53f47e.js";
import { Q as QCardSection } from "./QCardSection.92a082ef.js";
import { Q as QSeparator } from "./QSeparator.64db8131.js";
import { Q as QCard } from "./QCard.a457d3f1.js";
import { Q as QDialog } from "./QDialog.1c3b5a04.js";
import { Q as QToggle } from "./QToggle.a20f7c2f.js";
import { Q as QItem } from "./QItem.16efe24a.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, j as createBlock, k as withCtx, m as createVNode, v as createElementBlock, q as normalizeClass, F as Fragment, s as resolveComponent, p as createTextVNode, x as renderList, u as createBaseVNode } from "./index.c15e704f.js";
import "./position-engine.f1dc51f3.js";
import "./selection.a711d5f1.js";
import "./scroll.d31d6ae2.js";
import "./dom.617e2098.js";
import "./use-timeout.a78770d1.js";
import "./use-transition.db025f57.js";
import "./QSpinner.dc7e097a.js";
import "./QIcon.25655771.js";
import "./Ripple.a0364732.js";
import "./use-dark.97ac6897.js";
import "./focus-manager.32f8d49a.js";
import "./use-checkbox.85632a95.js";
import "./option-sizes.d2e717dc.js";
import "./use-form.2fa626ca.js";
const _sfc_main$1 = defineComponent({
  props: {
    sele: {
      type: Boolean,
      required: true
    },
    cat: {
      type: Object,
      required: true
    }
  },
  watch: {
    incat() {
      if (this.incat) {
        this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/category/${this.cat.id}`
        );
      } else {
        this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/category/${this.cat.id}`,
          {
            method: "DELETE"
          }
        );
      }
    }
  },
  setup(props) {
    return {
      incat: ref(props.sele)
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QItem, null, {
    default: withCtx(() => [
      createVNode(QToggle, {
        modelValue: _ctx.incat,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.incat = $event),
        label: _ctx.cat.name
      }, null, 8, ["modelValue", "label"])
    ]),
    _: 1
  });
}
var topBcat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "TopBcat.vue"]]);
const _sfc_main = defineComponent({
  name: "mangaTopBar",
  components: { topBcat },
  methods: {
    update() {
      this.$bus.emit("updateManga");
    }
  },
  mounted: function() {
    this.$fetchJSON("/api/v1/category/").then((opt) => {
      this.options = opt.slice(1);
    });
    this.$fetchJSON(
      `/api/v1/manga/${this.$route.params["mangaID"]}/category/`
    ).then((opt) => {
      this.curr = opt;
    });
  },
  setup() {
    return {
      dialo: ref(false),
      options: ref([]),
      curr: ref([]),
      disp: ref([])
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Set categories", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_topBcat = resolveComponent("topBcat");
  return openBlock(), createElementBlock(Fragment, null, [
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
            createTextVNode(" set category ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QDialog, {
      modelValue: _ctx.dialo,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.dialo = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "q-px-xl" }, {
              default: withCtx(() => [
                _hoisted_1
              ]),
              _: 1
            }),
            createVNode(QSeparator),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (opt) => {
              return openBlock(), createBlock(_component_topBcat, {
                key: opt.id,
                sele: _ctx.curr.find((ele) => ele.id == opt.id) != void 0,
                cat: opt
              }, null, 8, ["sele", "cat"]);
            }), 128))
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
            createTextVNode(" Update Manga ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "onClick"])
  ], 64);
}
var topbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "topbar.vue"]]);
export { topbar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLjBlMmNmNzQ5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9tYW5nYS9Ub3BCY2F0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hbmdhL3RvcGJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0+XG4gICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJpbmNhdFwiIDpsYWJlbD1cImNhdC5uYW1lXCI+PC9xLXRvZ2dsZT5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNhdCB9IGZyb20gJy4uL2dsb2JhbC9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHNlbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2F0OiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8Y2F0PixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGluY2F0KCkge1xuICAgICAgaWYgKHRoaXMuaW5jYXQpe1xuICAgICAgICB0aGlzLiRmZXRjaChcbiAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jYXRlZ29yeS8ke3RoaXMuY2F0LmlkfWBcbiAgICAgICAgKTtcblxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NhdGVnb3J5LyR7dGhpcy5jYXQuaWR9YCx7XG4gICAgICAgICAgICBtZXRob2Q6J0RFTEVURSdcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICBpbmNhdDogcmVmKHByb3BzLnNlbGUpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICByb3VuZFxuICAgIDpjbGFzcz1cIiRxLmRhcmsuaXNBY3RpdmUgPyBgbGlnaHRgIDogYGRhcmtgXCJcbiAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgIEBjbGljaz1cImRpYWxvID0gdHJ1ZVwiXG4gID5cbiAgICA8cS10b29sdGlwPiBzZXQgY2F0ZWdvcnkgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weC14bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPlNldCBjYXRlZ29yaWVzPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICA8dG9wQmNhdFxuICAgICAgICB2LWZvcj1cIm9wdCBpbiBvcHRpb25zXCJcbiAgICAgICAgOmtleT1cIm9wdC5pZFwiXG4gICAgICAgIDpzZWxlPVwiY3Vyci5maW5kKChlbGUpID0+IGVsZS5pZCA9PSBvcHQuaWQpICE9IHVuZGVmaW5lZFwiXG4gICAgICAgIDpjYXQ9XCJvcHRcIlxuICAgICAgPlxuICAgICAgPC90b3BCY2F0PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuICA8cS1idG5cbiAgICBmbGF0XG4gICAgcm91bmRcbiAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cInJlZnJlc2hcIlxuICAgIEBjbGljaz1cInVwZGF0ZVwiXG4gID5cbiAgICA8cS10b29sdGlwPiBVcGRhdGUgTWFuZ2EgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHRvcEJjYXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvbWFuZ2EvVG9wQmNhdC52dWUnO1xuaW1wb3J0IHsgY2F0IH0gZnJvbSAnLi4vZ2xvYmFsL21vZGVscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYVRvcEJhcicsXG4gIGNvbXBvbmVudHM6IHsgdG9wQmNhdCB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgdGhpcy4kYnVzLmVtaXQoJ3VwZGF0ZU1hbmdhJyk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kZmV0Y2hKU09OKCcvYXBpL3YxL2NhdGVnb3J5LycpLnRoZW4oKG9wdDogY2F0W10pID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdC5zbGljZSgxKTtcbiAgICB9KTtcbiAgICB0aGlzLiRmZXRjaEpTT04oXG4gICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jYXRlZ29yeS9gXG4gICAgKS50aGVuKChvcHQ6IGNhdFtdKSA9PiB7XG4gICAgICB0aGlzLmN1cnIgPSBvcHQ7XG4gICAgfSk7XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaWFsbzogcmVmKGZhbHNlKSxcbiAgICAgIG9wdGlvbnM6IHJlZig8Y2F0W10+W10pLFxuICAgICAgY3VycjogcmVmKDxjYXRbXT5bXSksXG4gICAgICBkaXNwOiByZWYoW10pXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE9BQU87QUFBQSxJQUNMLE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJ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
