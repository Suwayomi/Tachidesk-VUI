import { Q as QTooltip } from "./QTooltip.02a6ea06.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QCheckbox } from "./QCheckbox.e3080dd8.js";
import { Q as QCardSection } from "./QCardSection.aec8c612.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { u as useDlSock } from "./useDlSock.b6f1d62c.js";
import { p as isdlsock } from "./models.d7e94ac2.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, q as normalizeClass, F as Fragment, p as createTextVNode, x as renderList, B as withDirectives, t as toDisplayString, u as createBaseVNode } from "./index.0b61810d.js";
import "./position-engine.94f26946.js";
import "./selection.2c9d8487.js";
import "./scroll.34fac392.js";
import "./dom.fd94eb85.js";
import "./use-timeout.99cd911c.js";
import "./use-transition.65db8379.js";
import "./QSpinner.0d412098.js";
import "./QIcon.8780f7dc.js";
import "./Ripple.ce29675d.js";
import "./use-checkbox.ee2b9cbf.js";
import "./use-dark.bc291eea.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./focus-manager.32f8d49a.js";
import "./StoreStuff.f5900537.js";
const _sfc_main = defineComponent({
  name: "SearchBar",
  setup() {
    const Emitt = useDlSock();
    const Emitter = ref(Emitt);
    const PlayPause = ref();
    const tmp = Emitt.eventsFromServer.value ? JSON.parse(Emitt.eventsFromServer.value) : [];
    if (isdlsock(tmp)) {
      PlayPause.value = tmp.status == "Started";
    }
    if (Emitter.value.isConnected) {
      Emitt.sendMsg("STATUS");
    }
    return {
      dialo: ref(false),
      filter: ref([]),
      PlayPause,
      Emitter
    };
  },
  watch: {
    "Emitter.eventsFromServer"(val) {
      const tmp = JSON.parse(val);
      if (isdlsock(tmp)) {
        this.PlayPause = tmp.status == "Started";
      }
    }
  },
  methods: {
    toggleplay() {
      if (!this.PlayPause) {
        this.$api.get("/api/v1/downloads/start");
      } else {
        this.$api.get("/api/v1/downloads/stop");
      }
    },
    clear() {
      this.$api.get("/api/v1/downloads/clear");
    },
    dofilter() {
      this.$bus.emit("DLFilter", this.filter);
    }
  }
});
const _hoisted_1 = { style: { "margin-right": "12.5px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QBtn, {
      class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
      round: "",
      icon: "filter_list",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialo = true)
    }, {
      default: withCtx(() => [
        createVNode(QTooltip, null, {
          default: withCtx(() => [
            createTextVNode("Filter")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QDialog, {
      modelValue: _ctx.dialo,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.dialo = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, { class: "q-pa-md" }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(["Downloading", "Queued", "finished"], (item, count) => {
              return createVNode(QCardSection, {
                key: count,
                class: "q-py-xs"
              }, {
                default: withCtx(() => [
                  createVNode(QCheckbox, {
                    modelValue: _ctx.filter,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.filter = $event),
                    style: { "width": "100%" },
                    val: item
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, toDisplayString(item), 1)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "val"])
                ]),
                _: 2
              }, 1024);
            }), 64)),
            createVNode(QCardActions, { align: "center" }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  flat: "",
                  label: "clear",
                  color: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => {
                    _ctx.filter = [];
                    _ctx.dofilter();
                  })
                }, null, 512), [
                  [ClosePopup]
                ]),
                withDirectives(createVNode(QBtn, {
                  flat: "",
                  label: "Save",
                  color: "primary",
                  onClick: _ctx.dofilter
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
    }, 8, ["modelValue"]),
    createVNode(QBtn, {
      elevated: "",
      class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
      round: "",
      icon: "clear_all",
      onClick: _ctx.clear
    }, {
      default: withCtx(() => [
        createVNode(QTooltip, null, {
          default: withCtx(() => [
            createTextVNode(" Clear all downloads ")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "onClick"]),
    createVNode(QBtn, {
      elevated: "",
      class: normalizeClass(["q-ml-sm", _ctx.$q.dark.isActive ? `light` : `dark`]),
      round: "",
      icon: _ctx.PlayPause ? `pause` : `play_arrow`,
      onClick: _ctx.toggleplay
    }, {
      default: withCtx(() => [
        createVNode(QTooltip, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.PlayPause ? `stop downloads` : `start downloads`), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "icon", "onClick"])
  ], 64);
}
var TopBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TopBar.vue"]]);
export { TopBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLmUwOTJjNTBjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kb3dubG9hZHMvVG9wQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+RmlsdGVyPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sIGNvdW50KSBpbiBbJ0Rvd25sb2FkaW5nJywgJ1F1ZXVlZCcsICdmaW5pc2hlZCddXCJcbiAgICAgICAgOmtleT1cImNvdW50XCJcbiAgICAgICAgY2xhc3M9XCJxLXB5LXhzXCJcbiAgICAgID5cbiAgICAgICAgPHEtY2hlY2tib3ggdi1tb2RlbD1cImZpbHRlclwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIiA6dmFsPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEyLjVweFwiPnt7IGl0ZW0gfX08L2Rpdj5cbiAgICAgICAgPC9xLWNoZWNrYm94PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiY2xlYXJcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBmaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIGRvZmlsdGVyKCk7XG4gICAgICAgICAgXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgQGNsaWNrPVwiZG9maWx0ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cblxuICA8cS1idG5cbiAgICBlbGV2YXRlZFxuICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgcm91bmRcbiAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cImNsZWFyX2FsbFwiXG4gICAgQGNsaWNrPVwiY2xlYXJcIlxuICA+XG4gICAgPHEtdG9vbHRpcD4gQ2xlYXIgYWxsIGRvd25sb2FkcyA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbiAgPHEtYnRuXG4gICAgZWxldmF0ZWRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIDppY29uPVwiUGxheVBhdXNlID8gYHBhdXNlYCA6IGBwbGF5X2Fycm93YFwiXG4gICAgQGNsaWNrPVwidG9nZ2xlcGxheVwiXG4gID5cbiAgICA8cS10b29sdGlwPlxuICAgICAge3sgUGxheVBhdXNlID8gYHN0b3AgZG93bmxvYWRzYCA6IGBzdGFydCBkb3dubG9hZHNgIH19XG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHVzZURsU29jayBmcm9tICdzcmMvY29tcG9uZW50cy9kb3dubG9hZHMvdXNlRGxTb2NrJztcbmltcG9ydCB7IGRsc29jaywgaXNkbHNvY2sgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NlYXJjaEJhcicsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IEVtaXR0ID0gdXNlRGxTb2NrKCk7XG4gICAgY29uc3QgRW1pdHRlciA9IHJlZihFbWl0dCk7XG5cbiAgICBjb25zdCBQbGF5UGF1c2UgPSByZWYoKTtcbiAgICBjb25zdCB0bXAgPSBFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlXG4gICAgICA/IEpTT04ucGFyc2UoRW1pdHQuZXZlbnRzRnJvbVNlcnZlci52YWx1ZSlcbiAgICAgIDogW107XG4gICAgaWYgKGlzZGxzb2NrKHRtcCkpIHtcbiAgICAgIFBsYXlQYXVzZS52YWx1ZSA9IHRtcC5zdGF0dXMgPT0gJ1N0YXJ0ZWQnO1xuICAgIH1cbiAgICBpZiAoRW1pdHRlci52YWx1ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgRW1pdHQuc2VuZE1zZygnU1RBVFVTJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvOiByZWYoZmFsc2UpLFxuICAgICAgZmlsdGVyOiByZWYoW10pLFxuICAgICAgUGxheVBhdXNlLFxuICAgICAgRW1pdHRlcixcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgICdFbWl0dGVyLmV2ZW50c0Zyb21TZXJ2ZXInKHZhbCkge1xuICAgICAgY29uc3QgdG1wID0gPGRsc29jaz5KU09OLnBhcnNlKHZhbCk7XG4gICAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgICB0aGlzLlBsYXlQYXVzZSA9IHRtcC5zdGF0dXMgPT0gJ1N0YXJ0ZWQnO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVwbGF5KCkge1xuICAgICAgaWYgKCF0aGlzLlBsYXlQYXVzZSkge1xuICAgICAgICB0aGlzLiRhcGkuZ2V0KCcvYXBpL3YxL2Rvd25sb2Fkcy9zdGFydCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kYXBpLmdldCgnL2FwaS92MS9kb3dubG9hZHMvc3RvcCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLiRhcGkuZ2V0KCcvYXBpL3YxL2Rvd25sb2Fkcy9jbGVhcicpO1xuICAgIH0sXG4gICAgZG9maWx0ZXIoKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgnRExGaWx0ZXInLCB0aGlzLmZpbHRlcik7XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FB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
