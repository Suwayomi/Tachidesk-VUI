import { Q as QPage } from "./QPage.d65b07e9.js";
import { Q as QIntersection } from "./QIntersection.5a6859cd.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.1a97c95a.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.07fdfe31.js";
import { Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QPageSticky } from "./QPageSticky.fba7628c.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QList } from "./QList.e87441cd.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { m as mangaCard } from "./mangaCard.98a73844.js";
import { f as defineComponent, r as ref, _ as _export_sfc, j as openBlock, y as createElementBlock, k as createBlock, m as withCtx, n as createVNode, q as createTextVNode, t as toDisplayString, p as createCommentVNode, F as Fragment, z as renderList, u as resolveComponent, a8 as debounce, v as createBaseVNode, D as withDirectives, x as normalizeStyle } from "./index.75e4774b.js";
import { u as useInBar } from "./Filters.e940003f.js";
import { Q as QExpansionItem } from "./QExpansionItem.f468b7fc.js";
import { a as isSortState, b as isfilterCheckBox, c as isfilterSort, d as isfilterSelect, e as isfilterTriState, f as isfilterHeader, g as isfilterSeparator, h as isfilterText, j as isfilterGroup } from "./models.4021c4b7.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.bf6e2c41.js";
import { Q as QCheckbox } from "./QCheckbox.64e78a72.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QSelect } from "./QSelect.fbe52429.js";
import { Q as QSeparator } from "./QSeparator.3fdd6d84.js";
import { Q as QInput } from "./QInput.6b71ca31.js";
import { Q as QIcon } from "./QIcon.aa032244.js";
import { i as isConfig } from "./isConfigurable.651788e3.js";
import "./QSpinner.6511ee07.js";
import "./Intersection.1f7cb92e.js";
import "./dom.3bfc77a6.js";
import "./scroll.51a1aea4.js";
import "./Ripple.bedf8a1c.js";
import "./use-dark.63b90c22.js";
import "./use-timeout.4d745afd.js";
import "./use-transition.34947ede.js";
import "./focus-manager.32f8d49a.js";
import "./QInnerLoading.dc9c40c5.js";
import "./QBadge.0d5331c7.js";
import "./QImg.834b853c.js";
import "./use-quasar.ac6e6735.js";
import "./usefull.5da5779b.js";
import "./fetcher.d026f468.js";
import "./uid.42677368.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-form.b3df9ff5.js";
import "./use-key-composition.689d3f4d.js";
import "./QMenu.fd3c1db0.js";
import "./position-engine.09a868e3.js";
import "./selection.3a23570e.js";
import "./use-virtual-scroll.d842f9a0.js";
import "./rtl.b51694b1.js";
import "./format.2a3572e1.js";
const _sfc_main$3 = defineComponent({
  name: "isGroup",
  props: {
    filter: {
      type: Object,
      required: true
    },
    position: {
      type: Number,
      default: () => void 0
    }
  },
  methods: {
    doSort(index) {
      if (isSortState(this.val)) {
        if (index == this.val.index) {
          this.val.ascending = !this.val.ascending;
        } else {
          this.val.index = index;
          this.val.ascending = true;
        }
      }
    }
  },
  watch: {
    val() {
      if (typeof this.val == "object") {
        this.$emit("stateChange", JSON.stringify(this.val), this.position);
      } else if (typeof this.val == "string" || typeof this.val == "number" || typeof this.val == "boolean") {
        this.$emit("stateChange", this.val.toString(), this.position);
      }
    }
  },
  emits: ["stateChange"],
  setup(props) {
    let val;
    if (isfilterCheckBox(props.filter)) {
      val = ref(props.filter.filter.state);
    } else if (isfilterSort(props.filter)) {
      val = ref(
        props.filter.filter.state
      );
    } else if (isfilterSelect(props.filter)) {
      val = ref(props.filter.filter.state);
    } else if (isfilterTriState(props.filter)) {
      val = ref(props.filter.filter.state);
    } else if (isfilterHeader(props.filter)) {
      val = ref();
    } else if (isfilterSeparator(props.filter)) {
      val = ref();
    } else if (isfilterText(props.filter)) {
      val = ref(props.filter.filter.state || "");
    }
    return {
      val,
      isfilterCheckBox,
      isfilterSort,
      isfilterSelect,
      isfilterTriState,
      isfilterHeader,
      isfilterSeparator,
      isfilterText,
      isSortState
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isfilterCheckBox(_ctx.filter) ? (openBlock(), createBlock(QItem, { key: 0 }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.filter.filter.name), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QCheckbox, {
          color: "blue",
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.val = $event)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _ctx.isfilterSelect(_ctx.filter) ? (openBlock(), createBlock(QItem, { key: 1 }, {
      default: withCtx(() => [
        createVNode(QSelect, {
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.val = $event),
          style: { "width": "100%" },
          options: _ctx.filter.filter.displayValues.map((ele, inde) => {
            return {
              label: ele,
              value: inde
            };
          }),
          "emit-value": "",
          "map-options": "",
          label: _ctx.filter.filter.name
        }, null, 8, ["modelValue", "options", "label"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _ctx.isfilterTriState(_ctx.filter) ? (openBlock(), createBlock(QItem, { key: 2 }, {
      default: withCtx(() => [
        createVNode(QCheckbox, {
          style: { "width": "100%" },
          "toggle-indeterminate": "",
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.val = $event),
          dark: _ctx.$q.dark.isActive,
          label: _ctx.filter.filter.name,
          "checked-icon": "check_box",
          "unchecked-icon": "r_disabled_by_default",
          "indeterminate-icon": "check_box_outline_blank",
          "keep-color": "",
          size: "lg",
          color: "blue",
          "indeterminate-value": 0,
          "true-value": 1,
          "false-value": 2
        }, null, 8, ["modelValue", "dark", "label"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _ctx.isfilterHeader(_ctx.filter) ? (openBlock(), createBlock(QItem, { key: 3 }, {
      default: withCtx(() => [
        createVNode(QItemSection, null, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.filter.filter.name), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _ctx.isfilterSeparator(_ctx.filter) ? (openBlock(), createBlock(QItem, { key: 4 }, {
      default: withCtx(() => [
        createVNode(QSeparator)
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _ctx.isfilterText(_ctx.filter) && typeof _ctx.val == "string" ? (openBlock(), createBlock(QItem, { key: 5 }, {
      default: withCtx(() => [
        createVNode(QInput, {
          style: { "width": "100%" },
          outlined: "",
          label: _ctx.filter.filter.name,
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.val = $event)
        }, null, 8, ["label", "modelValue"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    _ctx.isfilterSort(_ctx.filter) && _ctx.isSortState(_ctx.val) ? (openBlock(), createBlock(QExpansionItem, {
      key: 6,
      label: _ctx.filter.filter.name,
      style: { "width": "100%" }
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filter.filter.values, (sort, index) => {
          return openBlock(), createBlock(QItem, { key: index }, {
            default: withCtx(() => [
              createVNode(QItemSection, {
                thumbnail: "",
                class: "q-px-md"
              }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    name: _ctx.val.index == index ? _ctx.val.ascending ? `arrow_downward` : `arrow_upward` : void 0
                  }, null, 8, ["name"])
                ]),
                _: 2
              }, 1024),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    class: "q-pl-none",
                    style: { "width": "100%" },
                    align: "left",
                    label: sort,
                    onClick: ($event) => _ctx.doSort(index)
                  }, null, 8, ["label", "onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    }, 8, ["label"])) : createCommentVNode("", true)
  ], 64);
}
var whatFilter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "whatFilter.vue"]]);
const _sfc_main$2 = defineComponent({
  name: "isGroup",
  props: {
    filter: {
      type: Object,
      required: true
    },
    position: {
      type: Number,
      required: true
    }
  },
  emits: ["stateChange"],
  components: { whatFilter },
  methods: {
    stateChange(state, pos = void 0) {
      if (pos != void 0) {
        this.status = this.status.filter((ele) => ele.position != pos);
        this.status.push({ position: pos, state });
        this.$emit("stateChange", this.status, this.position);
      } else {
        this.$emit("stateChange", state, this.position);
      }
    }
  },
  setup() {
    return {
      isfilterGroup,
      status: ref([])
    };
  }
});
const _hoisted_1$1 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_whatFilter = resolveComponent("whatFilter");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.isfilterGroup(_ctx.filter) ? (openBlock(), createBlock(QExpansionItem, {
      key: 0,
      label: _ctx.filter.filter.name
    }, {
      default: withCtx(() => [
        createVNode(QList, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filter.filter.state, (filt, index) => {
              return openBlock(), createElementBlock("div", { key: index }, [
                createVNode(_component_whatFilter, {
                  onStateChange: _ctx.stateChange,
                  filter: filt,
                  position: index
                }, null, 8, ["onStateChange", "filter", "position"])
              ]);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["label"])) : createCommentVNode("", true),
    !_ctx.isfilterGroup(_ctx.filter) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      createVNode(_component_whatFilter, {
        onStateChange: _ctx.stateChange,
        filter: _ctx.filter
      }, null, 8, ["onStateChange", "filter"])
    ])) : createCommentVNode("", true)
  ], 64);
}
var isItGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "isItGroup.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "mangaSourceGrid",
  components: { MangaCard: mangaCard, isItGroup },
  computed: {
    Displ() {
      if (this.display.Display == null) {
        return "compact";
      } else if (this.display.Display) {
        return "comfort";
      }
      return "list";
    },
    widt() {
      return this.Displ == "list" ? "width:100%; height: 109px;" : `width: calc(100% / ${this.devider}); aspect-ratio: 225/350;transition: width 0.5s ease-out;`;
    }
  },
  methods: {
    calcWidth() {
      const grid = this.$refs["infiniteScrol"];
      const ideal = this.$q.localStorage.getItem("MitemW");
      if (grid.$el.clientWidth == void 0)
        return;
      this.devider = Math.round(grid.$el.clientWidth / ideal);
    },
    calcHeight() {
      var _a;
      const parent = (_a = this.$parent) == null ? void 0 : _a.$el;
      if (parent) {
        let Height = parent.clientHeight;
        Height -= parent.children[0].clientHeight;
        return Height;
      }
      return 0;
    },
    async reload(num = 1, signal) {
      if (this.noinit) {
        if (this.Smitted || this.$route.query["q"]) {
          const sourcepage2 = this.$fetchJSON(
            `/api/v1/source/${this.$route.params["sourceID"]}/search?searchTerm=${this.$route.query["q"] || ""}&pageNum=${num}`,
            {
              signal
            }
          );
          try {
            return await sourcepage2;
          } catch (error) {
            return void 0;
          }
        } else {
          const sourcepage2 = this.$fetchJSON(
            `/api/v1/source/${this.$route.params["sourceID"]}/${this.$route.params["poplate"]}/${num}`,
            {
              signal
            }
          );
          try {
            return await sourcepage2;
          } catch (error) {
            return void 0;
          }
        }
      } else {
        this.noinit = true;
        return void 0;
      }
    },
    onLoad(index, done = () => {
      return;
    }) {
      this.reload(index, this.controller.signal).then(
        (data) => {
          if (data != void 0) {
            this.items.push(...data.mangaList);
            if (!data.hasNextPage)
              this.$refs["infiniteScrol"].stop();
          }
          done();
        }
      );
    },
    resetScroll() {
      this.items = [];
      this.controller.abort();
      this.controller = new AbortController();
      this.$refs["infiniteScrol"].reset();
      this.$refs["infiniteScrol"].resume();
    },
    getFilts(reset = false) {
      this.$fetchJSON(
        `/api/v1/source/${this.$route.params["sourceID"]}/filters${reset ? "?reset=true" : ""}`
      ).then((data) => {
        this.filters = data;
        this.resetScroll();
      });
    },
    stateChange(state, pos) {
      this.stateChanges = this.stateChanges.filter(
        (ele) => ele.position != pos
      );
      if (typeof state != "string") {
        state.forEach((ele) => {
          this.stateChanges.push({ position: pos, state: JSON.stringify(ele) });
        });
      } else {
        this.stateChanges.push({ position: pos, state });
      }
    },
    async submitFilters() {
      await this.$fetch(
        `/api/v1/source/${this.$route.params["sourceID"]}/filters`,
        {
          method: "POST",
          body: JSON.stringify(this.stateChanges)
        }
      );
      this.Smitted = true;
      this.stateChanges = [];
      this.resetScroll();
      this.getFilts();
    }
  },
  created: async function() {
    this.calcWidth = debounce(this.calcWidth, 500);
  },
  mounted: function() {
    this.calcWidth();
    this.$nextTick(() => {
      window.addEventListener("resize", this.calcWidth);
    });
    this.getFilts(true);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calcWidth);
  },
  watch: {
    "$route.query.q": function() {
      this.resetScroll();
    }
  },
  setup() {
    const controller = ref(new AbortController());
    return {
      devider: ref(0),
      mangas: ref([]),
      clwidth: ref(0),
      display: ref(useInBar()),
      filters: ref([]),
      items: ref([]),
      filterDial: ref(false),
      stateChanges: ref([]),
      Smitted: ref(false),
      noinit: ref(false),
      controller
    };
  }
});
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MangaCard = resolveComponent("MangaCard");
  const _component_isItGroup = resolveComponent("isItGroup");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QInfiniteScroll, {
      onLoad: _ctx.onLoad,
      offset: _ctx.$q.screen.height / 2,
      ref: "infiniteScrol"
    }, {
      loading: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QSpinnerDots, {
            color: "primary",
            size: "40px"
          })
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (manga2) => {
            return openBlock(), createBlock(QIntersection, {
              key: manga2.id,
              style: normalizeStyle(_ctx.widt)
            }, {
              default: withCtx(() => [
                createVNode(_component_MangaCard, {
                  Display: _ctx.Displ,
                  manga: manga2
                }, null, 8, ["Display", "manga"])
              ]),
              _: 2
            }, 1032, ["style"]);
          }), 128))
        ])
      ]),
      _: 1
    }, 8, ["onLoad", "offset"]),
    createVNode(QPageSticky, {
      position: "bottom-right",
      offset: [18, 18]
    }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          fab: "",
          class: "text-black",
          icon: "filter_list",
          color: "blue",
          label: "FILTER",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.filterDial = true)
        })
      ]),
      _: 1
    }),
    createVNode(QDialog, {
      modelValue: _ctx.filterDial,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.filterDial = $event)
    }, {
      default: withCtx(() => [
        createVNode(QCard, { style: { "width": "500px" } }, {
          default: withCtx(() => [
            createVNode(QCardActions, { align: "between" }, {
              default: withCtx(() => [
                withDirectives(createVNode(QBtn, {
                  flat: "",
                  label: "Reset",
                  color: "blue",
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.getFilts(true))
                }, null, 512), [
                  [ClosePopup]
                ]),
                withDirectives(createVNode(QBtn, {
                  color: "blue",
                  class: "text-black",
                  label: "Submit",
                  onClick: _ctx.submitFilters
                }, null, 8, ["onClick"]), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            }),
            createVNode(QList, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filt, index) => {
                  return openBlock(), createBlock(_component_isItGroup, {
                    onStateChange: _ctx.stateChange,
                    filter: filt,
                    position: index,
                    key: index
                  }, null, 8, ["onStateChange", "filter", "position"]);
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
  ], 64);
}
var sourceGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "sourceMangaGrid.vue"]]);
const _sfc_main = defineComponent({
  name: "ScourceSearchPage",
  components: {
    sourceGrid
  },
  created: async function() {
    try {
      const jsn = await this.$fetchJSON(
        `/api/v1/source/${this.$route.params["sourceID"]}`
      );
      this.$emit("setTitle", jsn.displayName);
      this.isConfi.setConfigurable(jsn.isConfigurable);
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    }
  },
  setup(_props, { emit }) {
    emit("setTitle", "Source Search Page");
    return { isConfi: isConfig() };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sourceGrid = resolveComponent("sourceGrid");
  return openBlock(), createBlock(QPage, { "style-fn": _ctx.myTweak }, {
    default: withCtx(() => [
      createVNode(_component_sourceGrid)
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var SourceSearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SourceSearchPage.vue"]]);
export { SourceSearchPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlU2VhcmNoUGFnZS44MGFhODY0Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvd2hhdEZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL3NvdXJjZU1hbmdhR3JpZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvU291cmNlU2VhcmNoUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyQ2hlY2tCb3goZmlsdGVyKVwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgZmlsdGVyLmZpbHRlci5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1jaGVja2JveCBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsXCIgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyU2VsZWN0KGZpbHRlcilcIj5cbiAgICA8cS1zZWxlY3RcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICA6b3B0aW9ucz1cIlxuICAgICAgICBmaWx0ZXIuZmlsdGVyLmRpc3BsYXlWYWx1ZXMubWFwKChlbGUsIGluZGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGVsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgIFwiXG4gICAgICBlbWl0LXZhbHVlXG4gICAgICBtYXAtb3B0aW9uc1xuICAgICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJUcmlTdGF0ZShmaWx0ZXIpXCI+XG4gICAgPHEtY2hlY2tib3hcbiAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgOmRhcms9XCIkcS5kYXJrLmlzQWN0aXZlXCJcbiAgICAgIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiXG4gICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAga2VlcC1jb2xvclxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICA6aW5kZXRlcm1pbmF0ZS12YWx1ZT1cIjBcIlxuICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgIDpmYWxzZS12YWx1ZT1cIjJcIlxuICAgIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtIHYtaWY9XCJpc2ZpbHRlckhlYWRlcihmaWx0ZXIpXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBmaWx0ZXIuZmlsdGVyLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJTZXBhcmF0b3IoZmlsdGVyKVwiPlxuICAgIDxxLXNlcGFyYXRvcj4gPC9xLXNlcGFyYXRvcj5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyVGV4dChmaWx0ZXIpICYmIHR5cGVvZiB2YWwgPT0gJ3N0cmluZydcIj5cbiAgICA8cS1pbnB1dFxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICBvdXRsaW5lZFxuICAgICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgID48L3EtaW5wdXQ+XG4gIDwvcS1pdGVtPlxuICA8cS1leHBhbnNpb24taXRlbVxuICAgIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiXG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgdi1pZj1cImlzZmlsdGVyU29ydChmaWx0ZXIpICYmIGlzU29ydFN0YXRlKHZhbClcIlxuICA+XG4gICAgPHEtaXRlbSB2LWZvcj1cIihzb3J0LCBpbmRleCkgaW4gZmlsdGVyLmZpbHRlci52YWx1ZXNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0aHVtYm5haWwgY2xhc3M9XCJxLXB4LW1kXCI+XG4gICAgICAgIDxxLWljb25cbiAgICAgICAgICA6bmFtZT1cIlxuICAgICAgICAgICAgdmFsLmluZGV4ID09IGluZGV4XG4gICAgICAgICAgICAgID8gdmFsLmFzY2VuZGluZ1xuICAgICAgICAgICAgICAgID8gYGFycm93X2Rvd253YXJkYFxuICAgICAgICAgICAgICAgIDogYGFycm93X3Vwd2FyZGBcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNsYXNzPVwicS1wbC1ub25lXCJcbiAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgIDpsYWJlbD1cInNvcnRcIlxuICAgICAgICAgIEBjbGljaz1cImRvU29ydChpbmRleClcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgZmlsdGVycyxcbiAgaXNmaWx0ZXJDaGVja0JveCxcbiAgaXNmaWx0ZXJTb3J0LFxuICBpc2ZpbHRlclNlbGVjdCxcbiAgaXNmaWx0ZXJUcmlTdGF0ZSxcbiAgaXNmaWx0ZXJIZWFkZXIsXG4gIGlzZmlsdGVyU2VwYXJhdG9yLFxuICBpc2ZpbHRlclRleHQsXG4gIGlzU29ydFN0YXRlXG59IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ2lzR3JvdXAnLFxuICBwcm9wczoge1xuICAgIGZpbHRlcjoge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPGZpbHRlcnM+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIgYXMgUHJvcFR5cGU8bnVtYmVyIHwgdW5kZWZpbmVkPixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHVuZGVmaW5lZFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRvU29ydChpbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAoaXNTb3J0U3RhdGUodGhpcy52YWwpKSB7XG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLnZhbC5pbmRleCkge1xuICAgICAgICAgIHRoaXMudmFsLmFzY2VuZGluZyA9ICF0aGlzLnZhbC5hc2NlbmRpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWwuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICB0aGlzLnZhbC5hc2NlbmRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy52YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3RhdGVDaGFuZ2UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnZhbCksIHRoaXMucG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMudmFsID09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLnZhbCA9PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2YgdGhpcy52YWwgPT0gJ2Jvb2xlYW4nXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3RhdGVDaGFuZ2UnLCB0aGlzLnZhbC50b1N0cmluZygpLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ3N0YXRlQ2hhbmdlJ10sXG4gIHNldHVwKHByb3BzKSB7XG4gICAgbGV0IHZhbDogdW5rbm93bjtcbiAgICBpZiAoaXNmaWx0ZXJDaGVja0JveChwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYoPGJvb2xlYW4+cHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlclNvcnQocHJvcHMuZmlsdGVyKSkge1xuICAgICAgLy9nb25uYSBoYXZlIHRvIGRvIHNvbWUgamFuayB3aXRoIHRoaXMgb25lXG4gICAgICB2YWwgPSByZWYoXG4gICAgICAgIDx7IGluZGV4OiBudW1iZXI7IGFzY2VuZGluZzogYm9vbGVhbiB9PnByb3BzLmZpbHRlci5maWx0ZXIuc3RhdGVcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlclNlbGVjdChwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYocHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlclRyaVN0YXRlKHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZig8bnVtYmVyPnByb3BzLmZpbHRlci5maWx0ZXIuc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJIZWFkZXIocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKCk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlclNlcGFyYXRvcihwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYoKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyVGV4dChwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYoPHN0cmluZz5wcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlIHx8ICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbCxcbiAgICAgIGlzZmlsdGVyQ2hlY2tCb3gsXG4gICAgICBpc2ZpbHRlclNvcnQsXG4gICAgICBpc2ZpbHRlclNlbGVjdCxcbiAgICAgIGlzZmlsdGVyVHJpU3RhdGUsXG4gICAgICBpc2ZpbHRlckhlYWRlcixcbiAgICAgIGlzZmlsdGVyU2VwYXJhdG9yLFxuICAgICAgaXNmaWx0ZXJUZXh0LFxuICAgICAgaXNTb3J0U3RhdGVcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWV4cGFuc2lvbi1pdGVtIHYtaWY9XCJpc2ZpbHRlckdyb3VwKGZpbHRlcilcIiA6bGFiZWw9XCJmaWx0ZXIuZmlsdGVyLm5hbWVcIj5cbiAgICA8cS1saXN0PlxuICAgICAgPGRpdiB2LWZvcj1cIihmaWx0LCBpbmRleCkgaW4gZmlsdGVyLmZpbHRlci5zdGF0ZVwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICA8d2hhdEZpbHRlclxuICAgICAgICAgIEBzdGF0ZUNoYW5nZT1cInN0YXRlQ2hhbmdlXCJcbiAgICAgICAgICA6ZmlsdGVyPVwiZmlsdFwiXG4gICAgICAgICAgOnBvc2l0aW9uPVwiaW5kZXhcIlxuICAgICAgICA+PC93aGF0RmlsdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1leHBhbnNpb24taXRlbT5cbiAgPGRpdiB2LWlmPVwiIWlzZmlsdGVyR3JvdXAoZmlsdGVyKVwiPlxuICAgIDx3aGF0RmlsdGVyIEBzdGF0ZUNoYW5nZT1cInN0YXRlQ2hhbmdlXCIgOmZpbHRlcj1cImZpbHRlclwiPjwvd2hhdEZpbHRlcj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZmlsdGVycywgaXNmaWx0ZXJHcm91cCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB3aGF0RmlsdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZVNlYXJjaC9GaWx0ZXJzL3doYXRGaWx0ZXIudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ2lzR3JvdXAnLFxuICBwcm9wczoge1xuICAgIGZpbHRlcjoge1xuICAgICAgdHlwZTogT2JqZWN0IGFzIFByb3BUeXBlPGZpbHRlcnM+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIgYXMgUHJvcFR5cGU8bnVtYmVyPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBlbWl0czogWydzdGF0ZUNoYW5nZSddLFxuICBjb21wb25lbnRzOiB7IHdoYXRGaWx0ZXIgfSxcbiAgbWV0aG9kczoge1xuICAgIHN0YXRlQ2hhbmdlKHN0YXRlOiBzdHJpbmcsIHBvczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocG9zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzLmZpbHRlcigoZWxlKSA9PiBlbGUucG9zaXRpb24gIT0gcG9zKTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHVzaCh7IHBvc2l0aW9uOiBwb3MsIHN0YXRlOiBzdGF0ZSB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3RhdGVDaGFuZ2UnLCB0aGlzLnN0YXR1cywgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIHN0YXRlLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc2ZpbHRlckdyb3VwLFxuICAgICAgc3RhdHVzOiByZWYoPHsgcG9zaXRpb246IG51bWJlcjsgc3RhdGU6IHN0cmluZyB9W10+W10pXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1pbmZpbml0ZS1zY3JvbGxcbiAgICBAbG9hZD1cIm9uTG9hZFwiXG4gICAgOm9mZnNldD1cIiRxLnNjcmVlbi5oZWlnaHQgLyAyXCJcbiAgICByZWY9XCJpbmZpbml0ZVNjcm9sXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICA8cS1pbnRlcnNlY3Rpb24gdi1mb3I9XCJtYW5nYSBpbiBpdGVtc1wiIDprZXk9XCJtYW5nYS5pZFwiIDpzdHlsZT1cIndpZHRcIj5cbiAgICAgICAgPE1hbmdhQ2FyZCA6RGlzcGxheT1cIkRpc3BsXCIgOm1hbmdhPVwibWFuZ2FcIj48L01hbmdhQ2FyZD5cbiAgICAgIDwvcS1pbnRlcnNlY3Rpb24+XG4gICAgPC9kaXY+XG4gICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLW15LW1kXCI+XG4gICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwiNDBweFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICA8cS1wYWdlLXN0aWNreSBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiIDpvZmZzZXQ9XCJbMTgsIDE4XVwiPlxuICAgIDxxLWJ0blxuICAgICAgZmFiXG4gICAgICBjbGFzcz1cInRleHQtYmxhY2tcIlxuICAgICAgaWNvbj1cImZpbHRlcl9saXN0XCJcbiAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICBsYWJlbD1cIkZJTFRFUlwiXG4gICAgICBAY2xpY2s9XCJmaWx0ZXJEaWFsID0gdHJ1ZVwiXG4gICAgLz5cbiAgPC9xLXBhZ2Utc3RpY2t5PlxuICA8cS1kaWFsb2cgdi1tb2RlbD1cImZpbHRlckRpYWxcIj5cbiAgICA8cS1jYXJkIHN0eWxlPVwid2lkdGg6IDUwMHB4XCI+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJiZXR3ZWVuXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBsYWJlbD1cIlJlc2V0XCJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICBAY2xpY2s9XCJnZXRGaWx0cyh0cnVlKVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgY2xhc3M9XCJ0ZXh0LWJsYWNrXCJcbiAgICAgICAgICBsYWJlbD1cIlN1Ym1pdFwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgIEBjbGljaz1cInN1Ym1pdEZpbHRlcnNcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDxpc0l0R3JvdXBcbiAgICAgICAgICBAc3RhdGVDaGFuZ2U9XCJzdGF0ZUNoYW5nZVwiXG4gICAgICAgICAgdi1mb3I9XCIoZmlsdCwgaW5kZXgpIGluIGZpbHRlcnNcIlxuICAgICAgICAgIDpmaWx0ZXI9XCJmaWx0XCJcbiAgICAgICAgICA6cG9zaXRpb249XCJpbmRleFwiXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgPlxuICAgICAgICA8L2lzSXRHcm91cD5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG1hbmdhLCBzb3VyY2VwYWdlIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgTWFuZ2FDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZVNlYXJjaC9tYW5nYUNhcmQudnVlJztcbmltcG9ydCB7IGRlYm91bmNlLCBRSW5maW5pdGVTY3JvbGwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IERpc3BsYXkgZnJvbSAnc3JjL2NvbXBvbmVudHMvbGlicmFyeS9GaWx0ZXJzJztcbmltcG9ydCBpc0l0R3JvdXAgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvaXNJdEdyb3VwLnZ1ZSc7XG5cbmludGVyZmFjZSBwb3NTdGF0ZSB7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHN0YXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYVNvdXJjZUdyaWQnLFxuICBjb21wb25lbnRzOiB7IE1hbmdhQ2FyZCwgaXNJdEdyb3VwIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgRGlzcGwoKSB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5LkRpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ2NvbXBhY3QnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpc3BsYXkuRGlzcGxheSkge1xuICAgICAgICByZXR1cm4gJ2NvbWZvcnQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdsaXN0JztcbiAgICB9LFxuICAgIHdpZHQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsID09ICdsaXN0J1xuICAgICAgICA/ICd3aWR0aDoxMDAlOyBoZWlnaHQ6IDEwOXB4OydcbiAgICAgICAgOiBgd2lkdGg6IGNhbGMoMTAwJSAvICR7dGhpcy5kZXZpZGVyfSk7IGFzcGVjdC1yYXRpbzogMjI1LzM1MDt0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2Utb3V0O2A7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2FsY1dpZHRoKCkge1xuICAgICAgY29uc3QgZ3JpZCA9IDxRSW5maW5pdGVTY3JvbGw+dGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddO1xuICAgICAgY29uc3QgaWRlYWwgPSA8bnVtYmVyPnRoaXMuJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01pdGVtVycpO1xuICAgICAgaWYgKGdyaWQuJGVsLmNsaWVudFdpZHRoID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdGhpcy5kZXZpZGVyID0gTWF0aC5yb3VuZChncmlkLiRlbC5jbGllbnRXaWR0aCAvIGlkZWFsKTtcbiAgICB9LFxuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ/LiRlbDtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbGV0IEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIEhlaWdodCAtPSBwYXJlbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gSGVpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBhc3luYyByZWxvYWQobnVtID0gMSwgc2lnbmFsOiBBYm9ydFNpZ25hbCkge1xuICAgICAgaWYgKHRoaXMubm9pbml0KSB7XG4gICAgICAgIGlmICh0aGlzLlNtaXR0ZWQgfHwgdGhpcy4kcm91dGUucXVlcnlbJ3EnXSkge1xuICAgICAgICAgIGNvbnN0IHNvdXJjZXBhZ2UgPSA8UHJvbWlzZTxzb3VyY2VwYWdlPj50aGlzLiRmZXRjaEpTT04oXG4gICAgICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddXG4gICAgICAgICAgICB9L3NlYXJjaD9zZWFyY2hUZXJtPSR7dGhpcy4kcm91dGUucXVlcnlbJ3EnXSB8fCAnJ30mcGFnZU51bT0ke251bX1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaWduYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgc291cmNlcGFnZTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc291cmNlcGFnZSA9IDxQcm9taXNlPHNvdXJjZXBhZ2U+PnRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3BvcGxhdGUnXX0vJHtudW19YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2lnbmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHNvdXJjZXBhZ2U7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vaW5pdCA9IHRydWU7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQoXG4gICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgZG9uZTogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICkge1xuICAgICAgdGhpcy5yZWxvYWQoaW5kZXgsIHRoaXMuY29udHJvbGxlci5zaWduYWwpLnRoZW4oXG4gICAgICAgIChkYXRhOiBzb3VyY2VwYWdlIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goLi4uZGF0YS5tYW5nYUxpc3QpO1xuICAgICAgICAgICAgaWYgKCFkYXRhLmhhc05leHRQYWdlKVxuICAgICAgICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICByZXNldFNjcm9sbCgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgKHRoaXMuJHJlZnNbJ2luZmluaXRlU2Nyb2wnXSBhcyBRSW5maW5pdGVTY3JvbGwpLnJlc2V0KCk7XG4gICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkucmVzdW1lKCk7XG4gICAgICAvLyAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkudHJpZ2dlcigpO1xuICAgIH0sXG4gICAgZ2V0RmlsdHMocmVzZXQgPSBmYWxzZSkge1xuICAgICAgdGhpcy4kZmV0Y2hKU09OKFxuICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ119L2ZpbHRlcnMke1xuICAgICAgICAgIHJlc2V0ID8gJz9yZXNldD10cnVlJyA6ICcnXG4gICAgICAgIH1gXG4gICAgICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZGF0YTtcbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbCgpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdGF0ZUNoYW5nZShzdGF0ZTogc3RyaW5nIHwgcG9zU3RhdGVbXSwgcG9zOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzID0gdGhpcy5zdGF0ZUNoYW5nZXMuZmlsdGVyKFxuICAgICAgICAoZWxlKSA9PiBlbGUucG9zaXRpb24gIT0gcG9zXG4gICAgICApO1xuICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPSAnc3RyaW5nJykge1xuICAgICAgICBzdGF0ZS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5wdXNoKHsgcG9zaXRpb246IHBvcywgc3RhdGU6IEpTT04uc3RyaW5naWZ5KGVsZSkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMucHVzaCh7IHBvc2l0aW9uOiBwb3MsIHN0YXRlOiBzdGF0ZSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHN1Ym1pdEZpbHRlcnMoKSB7XG4gICAgICBhd2FpdCB0aGlzLiRmZXRjaChcbiAgICAgICAgYC9hcGkvdjEvc291cmNlLyR7dGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddfS9maWx0ZXJzYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGVDaGFuZ2VzKVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGhpcy5TbWl0dGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzID0gW107XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgICB0aGlzLmdldEZpbHRzKCk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxjV2lkdGggPSBkZWJvdW5jZSh0aGlzLmNhbGNXaWR0aCwgNTAwKTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FsY1dpZHRoKCk7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1dpZHRoKTtcbiAgICB9KTtcbiAgICB0aGlzLmdldEZpbHRzKHRydWUpO1xuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNXaWR0aCk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJyRyb3V0ZS5xdWVyeS5xJzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNldFNjcm9sbCgpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IHJlZihuZXcgQWJvcnRDb250cm9sbGVyKCkpO1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpZGVyOiByZWY8bnVtYmVyPigwKSxcbiAgICAgIG1hbmdhczogcmVmKDxtYW5nYVtdPltdKSxcbiAgICAgIGNsd2lkdGg6IHJlZjxudW1iZXI+KDApLFxuICAgICAgZGlzcGxheTogcmVmKERpc3BsYXkoKSksXG4gICAgICBmaWx0ZXJzOiByZWYoPHVua25vd24+W10pLFxuICAgICAgaXRlbXM6IHJlZig8bWFuZ2FbXT5bXSksXG4gICAgICBmaWx0ZXJEaWFsOiByZWYoZmFsc2UpLFxuICAgICAgc3RhdGVDaGFuZ2VzOiByZWYoPHsgcG9zaXRpb246IG51bWJlcjsgc3RhdGU6IHN0cmluZyB9W10+W10pLFxuICAgICAgU21pdHRlZDogcmVmKGZhbHNlKSxcbiAgICAgIG5vaW5pdDogcmVmKGZhbHNlKSxcbiAgICAgIGNvbnRyb2xsZXJcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4tLT5cblxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIj5cbiAgICA8c291cmNlR3JpZD4gPC9zb3VyY2VHcmlkPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc291cmNlIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgc291cmNlR3JpZCBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvc291cmNlTWFuZ2FHcmlkLnZ1ZSc7XG5pbXBvcnQgeyBpc0NvbmZpZyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZVNlYXJjaC9pc0NvbmZpZ3VyYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdTY291cmNlU2VhcmNoUGFnZScsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBzb3VyY2VHcmlkXG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNuOiBzb3VyY2UgPSBhd2FpdCB0aGlzLiRmZXRjaEpTT04oXG4gICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX1gXG4gICAgICApO1xuICAgICAgdGhpcy4kZW1pdCgnc2V0VGl0bGUnLCBqc24uZGlzcGxheU5hbWUpO1xuICAgICAgdGhpcy5pc0NvbmZpLnNldENvbmZpZ3VyYWJsZShqc24uaXNDb25maWd1cmFibGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoX3Byb3BzLCB7IGVtaXQgfSkge1xuICAgIGVtaXQoJ3NldFRpdGxlJywgJ1NvdXJjZSBTZWFyY2ggUGFnZScpO1xuXG4gICAgcmV0dXJuIHsgaXNDb25maTogaXNDb25maWcoKSB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2hvaXN0ZWRfMSIsIk1hbmdhQ2FyZCIsInNvdXJjZXBhZ2UiLCJEaXNwbGF5IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIm1hbmdhIiwiX25vcm1hbGl6ZVN0eWxlIiwiX3dpdGhEaXJlY3RpdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThHQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFB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
