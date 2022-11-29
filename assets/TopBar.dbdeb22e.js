import { Q as QTooltip } from "./QTooltip.5b3ee804.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QCheckbox } from "./QCheckbox.64e78a72.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { u as useDlSock } from "./useDlSock.1248d29f.js";
import { p as isdlsock } from "./models.4021c4b7.js";
import { _ as _export_sfc, f as defineComponent, r as ref, j as openBlock, y as createElementBlock, n as createVNode, m as withCtx, F as Fragment, q as createTextVNode, z as renderList, D as withDirectives, t as toDisplayString, v as createBaseVNode } from "./index.75e4774b.js";
import "./position-engine.09a868e3.js";
import "./selection.3a23570e.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./use-timeout.4d745afd.js";
import "./use-transition.34947ede.js";
import "./QSpinner.6511ee07.js";
import "./QIcon.aa032244.js";
import "./Ripple.bedf8a1c.js";
import "./use-checkbox.4b6eeeb4.js";
import "./use-dark.63b90c22.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
import "./focus-manager.32f8d49a.js";
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
      class: "q-ml-sm",
      round: "",
      "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
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
    }, 8, ["text-color"]),
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
                    dark: _ctx.$q.dark.isActive,
                    val: item
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, toDisplayString(item), 1)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "dark", "val"])
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
      class: "q-ml-sm",
      round: "",
      "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
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
    }, 8, ["text-color", "onClick"]),
    createVNode(QBtn, {
      elevated: "",
      class: "q-ml-sm",
      round: "",
      "text-color": _ctx.$q.dark.isActive ? `white` : `dark`,
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
    }, 8, ["text-color", "icon", "onClick"])
  ], 64);
}
var TopBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TopBar.vue"]]);
export { TopBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wQmFyLmRiZGViMjJlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kb3dubG9hZHMvVG9wQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgIHJvdW5kXG4gICAgOnRleHQtY29sb3I9XCIkcS5kYXJrLmlzQWN0aXZlID8gYHdoaXRlYCA6IGBkYXJrYFwiXG4gICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICBAY2xpY2s9XCJkaWFsbyA9IHRydWVcIlxuICA+XG4gICAgPHEtdG9vbHRpcD5GaWx0ZXI8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb1wiPlxuICAgIDxxLWNhcmQgY2xhc3M9XCJxLXBhLW1kXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgdi1mb3I9XCIoaXRlbSwgY291bnQpIGluIFsnRG93bmxvYWRpbmcnLCAnUXVldWVkJywgJ2ZpbmlzaGVkJ11cIlxuICAgICAgICA6a2V5PVwiY291bnRcIlxuICAgICAgICBjbGFzcz1cInEtcHkteHNcIlxuICAgICAgPlxuICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxuICAgICAgICAgIDpkYXJrPVwiJHEuZGFyay5pc0FjdGl2ZVwiXG4gICAgICAgICAgOnZhbD1cIml0ZW1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTIuNXB4XCI+e3sgaXRlbSB9fTwvZGl2PlxuICAgICAgICA8L3EtY2hlY2tib3g+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBsYWJlbD1cImNsZWFyXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgIGZpbHRlciA9IFtdO1xuICAgICAgICAgICAgZG9maWx0ZXIoKTtcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgbGFiZWw9XCJTYXZlXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICBAY2xpY2s9XCJkb2ZpbHRlclwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuXG4gIDxxLWJ0blxuICAgIGVsZXZhdGVkXG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICByb3VuZFxuICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGB3aGl0ZWAgOiBgZGFya2BcIlxuICAgIGljb249XCJjbGVhcl9hbGxcIlxuICAgIEBjbGljaz1cImNsZWFyXCJcbiAgPlxuICAgIDxxLXRvb2x0aXA+IENsZWFyIGFsbCBkb3dubG9hZHMgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG4gIDxxLWJ0blxuICAgIGVsZXZhdGVkXG4gICAgY2xhc3M9XCJxLW1sLXNtXCJcbiAgICByb3VuZFxuICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5pc0FjdGl2ZSA/IGB3aGl0ZWAgOiBgZGFya2BcIlxuICAgIDppY29uPVwiUGxheVBhdXNlID8gYHBhdXNlYCA6IGBwbGF5X2Fycm93YFwiXG4gICAgQGNsaWNrPVwidG9nZ2xlcGxheVwiXG4gID5cbiAgICA8cS10b29sdGlwPlxuICAgICAge3sgUGxheVBhdXNlID8gYHN0b3AgZG93bmxvYWRzYCA6IGBzdGFydCBkb3dubG9hZHNgIH19XG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHVzZURsU29jayBmcm9tICdzcmMvY29tcG9uZW50cy9kb3dubG9hZHMvdXNlRGxTb2NrJztcbmltcG9ydCB7IGRsc29jaywgaXNkbHNvY2sgfSBmcm9tICcuLi9nbG9iYWwvbW9kZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NlYXJjaEJhcicsXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVwbGF5KCkge1xuICAgICAgaWYgKCF0aGlzLlBsYXlQYXVzZSkge1xuICAgICAgICB0aGlzLiRmZXRjaCgnL2FwaS92MS9kb3dubG9hZHMvc3RhcnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL2Rvd25sb2Fkcy9zdG9wJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMuJGZldGNoKCcvYXBpL3YxL2Rvd25sb2Fkcy9jbGVhcicpO1xuICAgIH0sXG4gICAgZG9maWx0ZXIoKSB7XG4gICAgICB0aGlzLiRidXMuZW1pdCgnRExGaWx0ZXInLCB0aGlzLmZpbHRlcik7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgICdFbWl0dGVyLmV2ZW50c0Zyb21TZXJ2ZXInKHZhbCkge1xuICAgICAgY29uc3QgdG1wID0gPGRsc29jaz5KU09OLnBhcnNlKHZhbCk7XG4gICAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgICB0aGlzLlBsYXlQYXVzZSA9IHRtcC5zdGF0dXMgPT0gJ1N0YXJ0ZWQnO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgRW1pdHQgPSB1c2VEbFNvY2soKTtcbiAgICBjb25zdCBFbWl0dGVyID0gcmVmKEVtaXR0KTtcblxuICAgIGNvbnN0IFBsYXlQYXVzZSA9IHJlZigpO1xuICAgIGNvbnN0IHRtcCA9IEVtaXR0LmV2ZW50c0Zyb21TZXJ2ZXIudmFsdWVcbiAgICAgID8gSlNPTi5wYXJzZShFbWl0dC5ldmVudHNGcm9tU2VydmVyLnZhbHVlKVxuICAgICAgOiBbXTtcbiAgICBpZiAoaXNkbHNvY2sodG1wKSkge1xuICAgICAgUGxheVBhdXNlLnZhbHVlID0gdG1wLnN0YXR1cyA9PSAnU3RhcnRlZCc7XG4gICAgfVxuICAgIGlmIChFbWl0dGVyLnZhbHVlLmlzQ29ubmVjdGVkKSB7XG4gICAgICBFbWl0dC5zZW5kTXNnKCdTVEFUVVMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG86IHJlZihmYWxzZSksXG4gICAgICBmaWx0ZXI6IHJlZihbXSksXG4gICAgICBQbGF5UGF1c2UsXG4gICAgICBFbWl0dGVyXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3Mi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
