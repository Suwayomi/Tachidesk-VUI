import { Q as QTooltip } from "./QTooltip.4059b9cb.js";
import { Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QCheckbox } from "./QCheckbox.14cae36f.js";
import { Q as QCardSection } from "./QCardSection.6cd72ed9.js";
import { Q as QCardActions } from "./QCardActions.d176eb8e.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { Q as QDialog } from "./QDialog.75edb166.js";
import { C as ClosePopup } from "./ClosePopup.5400fc3f.js";
import { u as useDlSock } from "./useDlSock.a1b5bcc2.js";
import { p as isdlsock } from "./models.4021c4b7.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, v as createElementBlock, m as createVNode, k as withCtx, q as normalizeClass, F as Fragment, p as createTextVNode, x as renderList, B as withDirectives, t as toDisplayString, u as createBaseVNode } from "./index.ba4ecd3b.js";
import "./position-engine.1cc73c92.js";
import "./selection.c4ca48d8.js";
import "./scroll.3ccd02db.js";
import "./dom.9c14e7bf.js";
import "./use-timeout.fb745483.js";
import "./use-transition.322af72f.js";
import "./QSpinner.ce362078.js";
import "./QIcon.00211d75.js";
import "./Ripple.d48b6bf8.js";
import "./use-checkbox.edaab605.js";
import "./use-dark.7f6486f4.js";
import "./option-sizes.ff92785a.js";
import "./use-form.a300a275.js";
import "./focus-manager.32f8d49a.js";
import "./StoreStuff.b98d7f9e.js";
const _sfc_main = defineComponent({
  name: "SearchBar",
  methods: {
    toggleplay() {
      if (!this.PlayPause) {
        this.$fetch("/api/v1/downloads/start");
      } else {
        this.$fetch("/api/v1/downloads/stop");
      }
    },
    clear() {
      this.$fetch("/api/v1/downloads/clear");
    },
    dofilter() {
      this.$bus.emit("DLFilter", this.filter);
    }
  },
  watch: {
    "Emitter.eventsFromServer"(val) {
      const tmp = JSON.parse(val);
      if (isdlsock(tmp)) {
        this.PlayPause = tmp.status == "Started";
      }
    }
  },
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
                    style: { "width": "100%" },
                    modelValue: _ctx.filter,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.filter = $event),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLjE1ZGU0ZGVlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kb3dubG9hZHMvVG9wQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgQGNsaWNrPVwiZGlhbG8gPSB0cnVlXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+RmlsdGVyPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9cIj5cbiAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sIGNvdW50KSBpbiBbJ0Rvd25sb2FkaW5nJywgJ1F1ZXVlZCcsICdmaW5pc2hlZCddXCJcbiAgICAgICAgOmtleT1cImNvdW50XCJcbiAgICAgICAgY2xhc3M9XCJxLXB5LXhzXCJcbiAgICAgID5cbiAgICAgICAgPHEtY2hlY2tib3ggc3R5bGU9XCJ3aWR0aDogMTAwJVwiIHYtbW9kZWw9XCJmaWx0ZXJcIiA6dmFsPVwiaXRlbVwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEyLjVweFwiPnt7IGl0ZW0gfX08L2Rpdj5cbiAgICAgICAgPC9xLWNoZWNrYm94PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgbGFiZWw9XCJjbGVhclwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICBmaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIGRvZmlsdGVyKCk7XG4gICAgICAgICAgXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiU2F2ZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwiZG9maWx0ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cblxuICA8cS1idG5cbiAgICBlbGV2YXRlZFxuICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgcm91bmRcbiAgICA6Y2xhc3M9XCIkcS5kYXJrLmlzQWN0aXZlID8gYGxpZ2h0YCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cImNsZWFyX2FsbFwiXG4gICAgQGNsaWNrPVwiY2xlYXJcIlxuICA+XG4gICAgPHEtdG9vbHRpcD4gQ2xlYXIgYWxsIGRvd25sb2FkcyA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbiAgPHEtYnRuXG4gICAgZWxldmF0ZWRcbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGBsaWdodGAgOiBgZGFya2BcIlxuICAgIDppY29uPVwiUGxheVBhdXNlID8gYHBhdXNlYCA6IGBwbGF5X2Fycm93YFwiXG4gICAgQGNsaWNrPVwidG9nZ2xlcGxheVwiXG4gID5cbiAgICA8cS10b29sdGlwPlxuICAgICAge3sgUGxheVBhdXNlID8gYHN0b3AgZG93bmxvYWRzYCA6IGBzdGFydCBkb3dubG9hZHNgIH19XG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHVzZURsU29jayBmcm9tICdzcmMvY29tcG9uZW50cy9kb3dubG9hZHMvdXNlRGxTb2NrJztcbmltcG9ydCB7IGRsc29jaywgaXNkbHNvY2sgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NlYXJjaEJhcicsXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVwbGF5KCkge1xuICAgICAgaWYgKCF0aGlzLlBsYXlQYXVzZSkge1xuICAgICAgICB0aGlzLiRmZXRjaCgnL2FwaS92MS9kb3dubG9hZHMvc3RhcnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL2Rvd25sb2Fkcy9zdG9wJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL2Rvd25sb2Fkcy9jbGVhcicpO1xuICAgIH0sXG4gICAgZG9maWx0ZXIoKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgnRExGaWx0ZXInLCB0aGlzLmZpbHRlcik7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgICdFbWl0dGVyLmV2ZW50c0Zyb21TZXJ2ZXInKHZhbCkge1xuICAgICAgY29uc3QgdG1wID0gPGRsc29jaz5KU09OLnBhcnNlKHZhbCk7XG4gICAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgICB0aGlzLlBsYXlQYXVzZSA9IHRtcC5zdGF0dXMgPT0gJ1N0YXJ0ZWQnO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRW1pdHQgPSB1c2VEbFNvY2soKTtcbiAgICBjb25zdCBFbWl0dGVyID0gcmVmKEVtaXR0KTtcblxuICAgIGNvbnN0IFBsYXlQYXVzZSA9IHJlZigpO1xuICAgIGNvbnN0IHRtcCA9IEVtaXR0LmV2ZW50c0Zyb21TZXJ2ZXIudmFsdWVcbiAgICAgID8gSlNPTi5wYXJzZShFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlKVxuICAgICAgOiBbXTtcbiAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgUGxheVBhdXNlLnZhbHVlID0gdG1wLnN0YXR1cyA9PSAnU3RhcnRlZCc7XG4gICAgfVxuICAgIGlmIChFbWl0dGVyLnZhbHVlLmlzQ29ubmVjdGVkKSB7XG4gICAgICBFbWl0dC5zZW5kTXNnKCdTVEFUVVMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG86IHJlZihmYWxzZSksXG4gICAgICBmaWx0ZXI6IHJlZihbXSksXG4gICAgICBQbGF5UGF1c2UsXG4gICAgICBFbWl0dGVyXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBLE1BQUssWUFBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLFNB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
