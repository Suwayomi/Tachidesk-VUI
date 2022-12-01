import { Q as QPage } from "./QPage.d4311932.js";
import { Q as QIntersection } from "./QIntersection.b475cf21.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.3844f9eb.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.e0e59218.js";
import { Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QPageSticky } from "./QPageSticky.e82c04be.js";
import { Q as QCardActions } from "./QCardActions.d176eb8e.js";
import { Q as QList } from "./QList.10571ef1.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { Q as QDialog } from "./QDialog.75edb166.js";
import { C as ClosePopup } from "./ClosePopup.5400fc3f.js";
import { m as mangaCard } from "./mangaCard.8b048495.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, n as createCommentVNode, F as Fragment, x as renderList, s as resolveComponent, a7 as debounce, u as createBaseVNode, B as withDirectives, a6 as normalizeStyle } from "./index.ba4ecd3b.js";
import { u as useInBar } from "./Filters.f1d0a2e5.js";
import { Q as QExpansionItem } from "./QExpansionItem.57e138fd.js";
import { a as isSortState, b as isfilterCheckBox, c as isfilterSort, d as isfilterSelect, e as isfilterTriState, f as isfilterHeader, g as isfilterSeparator, h as isfilterText, j as isfilterGroup } from "./models.4021c4b7.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.751b389a.js";
import { Q as QCheckbox } from "./QCheckbox.14cae36f.js";
import { Q as QItem } from "./QItem.e5504d24.js";
import { Q as QSelect } from "./QSelect.5b441b0d.js";
import { Q as QSeparator } from "./QSeparator.22c5d3c5.js";
import { Q as QInput } from "./QInput.a2e72a2b.js";
import { Q as QIcon } from "./QIcon.00211d75.js";
import { i as isConfig } from "./isConfigurable.c4b0fd74.js";
import "./QSpinner.ce362078.js";
import "./Intersection.bfa1b1ed.js";
import "./dom.9c14e7bf.js";
import "./scroll.3ccd02db.js";
import "./Ripple.d48b6bf8.js";
import "./use-dark.7f6486f4.js";
import "./use-timeout.fb745483.js";
import "./use-transition.322af72f.js";
import "./focus-manager.32f8d49a.js";
import "./QInnerLoading.7a61e845.js";
import "./QBadge.55eaf29d.js";
import "./usefull.d0e2b46c.js";
import "./fetcher.0bda8d6d.js";
import "./StoreStuff.b98d7f9e.js";
import "./uid.42677368.js";
import "./use-checkbox.edaab605.js";
import "./option-sizes.ff92785a.js";
import "./use-form.a300a275.js";
import "./use-key-composition.4fc2cfcf.js";
import "./QMenu.5ba06e13.js";
import "./position-engine.1cc73c92.js";
import "./selection.c4ca48d8.js";
import "./use-virtual-scroll.24900e81.js";
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
        }, null, 8, ["modelValue", "label"])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlU2VhcmNoUGFnZS5jOTA3NTNmNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvd2hhdEZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL3NvdXJjZU1hbmdhR3JpZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvU291cmNlU2VhcmNoUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyQ2hlY2tCb3goZmlsdGVyKVwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgZmlsdGVyLmZpbHRlci5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1jaGVja2JveCBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsXCIgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyU2VsZWN0KGZpbHRlcilcIj5cbiAgICA8cS1zZWxlY3RcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICA6b3B0aW9ucz1cIlxuICAgICAgICBmaWx0ZXIuZmlsdGVyLmRpc3BsYXlWYWx1ZXMubWFwKChlbGUsIGluZGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGVsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgIFwiXG4gICAgICBlbWl0LXZhbHVlXG4gICAgICBtYXAtb3B0aW9uc1xuICAgICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJUcmlTdGF0ZShmaWx0ZXIpXCI+XG4gICAgPHEtY2hlY2tib3hcbiAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICAgIGNoZWNrZWQtaWNvbj1cImNoZWNrX2JveFwiXG4gICAgICB1bmNoZWNrZWQtaWNvbj1cInJfZGlzYWJsZWRfYnlfZGVmYXVsdFwiXG4gICAgICBpbmRldGVybWluYXRlLWljb249XCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiXG4gICAgICBrZWVwLWNvbG9yXG4gICAgICBzaXplPVwibGdcIlxuICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgIDppbmRldGVybWluYXRlLXZhbHVlPVwiMFwiXG4gICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgOmZhbHNlLXZhbHVlPVwiMlwiXG4gICAgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVySGVhZGVyKGZpbHRlcilcIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IGZpbHRlci5maWx0ZXIubmFtZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtIHYtaWY9XCJpc2ZpbHRlclNlcGFyYXRvcihmaWx0ZXIpXCI+XG4gICAgPHEtc2VwYXJhdG9yPiA8L3Etc2VwYXJhdG9yPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJUZXh0KGZpbHRlcikgJiYgdHlwZW9mIHZhbCA9PSAnc3RyaW5nJ1wiPlxuICAgIDxxLWlucHV0XG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgIG91dGxpbmVkXG4gICAgICA6bGFiZWw9XCJmaWx0ZXIuZmlsdGVyLm5hbWVcIlxuICAgICAgdi1tb2RlbD1cInZhbFwiXG4gICAgPjwvcS1pbnB1dD5cbiAgPC9xLWl0ZW0+XG4gIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICB2LWlmPVwiaXNmaWx0ZXJTb3J0KGZpbHRlcikgJiYgaXNTb3J0U3RhdGUodmFsKVwiXG4gID5cbiAgICA8cS1pdGVtIHYtZm9yPVwiKHNvcnQsIGluZGV4KSBpbiBmaWx0ZXIuZmlsdGVyLnZhbHVlc1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIHRodW1ibmFpbCBjbGFzcz1cInEtcHgtbWRcIj5cbiAgICAgICAgPHEtaWNvblxuICAgICAgICAgIDpuYW1lPVwiXG4gICAgICAgICAgICB2YWwuaW5kZXggPT0gaW5kZXhcbiAgICAgICAgICAgICAgPyB2YWwuYXNjZW5kaW5nXG4gICAgICAgICAgICAgICAgPyBgYXJyb3dfZG93bndhcmRgXG4gICAgICAgICAgICAgICAgOiBgYXJyb3dfdXB3YXJkYFxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgY2xhc3M9XCJxLXBsLW5vbmVcIlxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgOmxhYmVsPVwic29ydFwiXG4gICAgICAgICAgQGNsaWNrPVwiZG9Tb3J0KGluZGV4KVwiXG4gICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPC9xLWl0ZW0+XG4gIDwvcS1leHBhbnNpb24taXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBmaWx0ZXJzLFxuICBpc2ZpbHRlckNoZWNrQm94LFxuICBpc2ZpbHRlclNvcnQsXG4gIGlzZmlsdGVyU2VsZWN0LFxuICBpc2ZpbHRlclRyaVN0YXRlLFxuICBpc2ZpbHRlckhlYWRlcixcbiAgaXNmaWx0ZXJTZXBhcmF0b3IsXG4gIGlzZmlsdGVyVGV4dCxcbiAgaXNTb3J0U3RhdGVcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnaXNHcm91cCcsXG4gIHByb3BzOiB7XG4gICAgZmlsdGVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8ZmlsdGVycz4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXIgfCB1bmRlZmluZWQ+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gdW5kZWZpbmVkXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZG9Tb3J0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmIChpc1NvcnRTdGF0ZSh0aGlzLnZhbCkpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IHRoaXMudmFsLmluZGV4KSB7XG4gICAgICAgICAgdGhpcy52YWwuYXNjZW5kaW5nID0gIXRoaXMudmFsLmFzY2VuZGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRoaXMudmFsLmFzY2VuZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIEpTT04uc3RyaW5naWZ5KHRoaXMudmFsKSwgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0eXBlb2YgdGhpcy52YWwgPT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMudmFsID09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLnZhbCA9PSAnYm9vbGVhbidcbiAgICAgICkge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIHRoaXMudmFsLnRvU3RyaW5nKCksIHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnc3RhdGVDaGFuZ2UnXSxcbiAgc2V0dXAocHJvcHMpIHtcbiAgICBsZXQgdmFsOiB1bmtub3duO1xuICAgIGlmIChpc2ZpbHRlckNoZWNrQm94KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZig8Ym9vbGVhbj5wcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyU29ydChwcm9wcy5maWx0ZXIpKSB7XG4gICAgICAvL2dvbm5hIGhhdmUgdG8gZG8gc29tZSBqYW5rIHdpdGggdGhpcyBvbmVcbiAgICAgIHZhbCA9IHJlZihcbiAgICAgICAgPHsgaW5kZXg6IG51bWJlcjsgYXNjZW5kaW5nOiBib29sZWFuIH0+cHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyU2VsZWN0KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZihwcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyVHJpU3RhdGUocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKDxudW1iZXI+cHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlckhlYWRlcihwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYoKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyU2VwYXJhdG9yKHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZigpO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJUZXh0KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZig8c3RyaW5nPnByb3BzLmZpbHRlci5maWx0ZXIuc3RhdGUgfHwgJycpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsLFxuICAgICAgaXNmaWx0ZXJDaGVja0JveCxcbiAgICAgIGlzZmlsdGVyU29ydCxcbiAgICAgIGlzZmlsdGVyU2VsZWN0LFxuICAgICAgaXNmaWx0ZXJUcmlTdGF0ZSxcbiAgICAgIGlzZmlsdGVySGVhZGVyLFxuICAgICAgaXNmaWx0ZXJTZXBhcmF0b3IsXG4gICAgICBpc2ZpbHRlclRleHQsXG4gICAgICBpc1NvcnRTdGF0ZVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtZXhwYW5zaW9uLWl0ZW0gdi1pZj1cImlzZmlsdGVyR3JvdXAoZmlsdGVyKVwiIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGZpbHQsIGluZGV4KSBpbiBmaWx0ZXIuZmlsdGVyLnN0YXRlXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDx3aGF0RmlsdGVyXG4gICAgICAgICAgQHN0YXRlQ2hhbmdlPVwic3RhdGVDaGFuZ2VcIlxuICAgICAgICAgIDpmaWx0ZXI9XCJmaWx0XCJcbiAgICAgICAgICA6cG9zaXRpb249XCJpbmRleFwiXG4gICAgICAgID48L3doYXRGaWx0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtbGlzdD5cbiAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuICA8ZGl2IHYtaWY9XCIhaXNmaWx0ZXJHcm91cChmaWx0ZXIpXCI+XG4gICAgPHdoYXRGaWx0ZXIgQHN0YXRlQ2hhbmdlPVwic3RhdGVDaGFuZ2VcIiA6ZmlsdGVyPVwiZmlsdGVyXCI+PC93aGF0RmlsdGVyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBmaWx0ZXJzLCBpc2ZpbHRlckdyb3VwIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHdoYXRGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvd2hhdEZpbHRlci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnaXNHcm91cCcsXG4gIHByb3BzOiB7XG4gICAgZmlsdGVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8ZmlsdGVycz4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ3N0YXRlQ2hhbmdlJ10sXG4gIGNvbXBvbmVudHM6IHsgd2hhdEZpbHRlciB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhdGVDaGFuZ2Uoc3RhdGU6IHN0cmluZywgcG9zOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwb3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMuZmlsdGVyKChlbGUpID0+IGVsZS5wb3NpdGlvbiAhPSBwb3MpO1xuICAgICAgICB0aGlzLnN0YXR1cy5wdXNoKHsgcG9zaXRpb246IHBvcywgc3RhdGU6IHN0YXRlIH0pO1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIHRoaXMuc3RhdHVzLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3N0YXRlQ2hhbmdlJywgc3RhdGUsIHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzZmlsdGVyR3JvdXAsXG4gICAgICBzdGF0dXM6IHJlZig8eyBwb3NpdGlvbjogbnVtYmVyOyBzdGF0ZTogc3RyaW5nIH1bXT5bXSlcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWluZmluaXRlLXNjcm9sbFxuICAgIEBsb2FkPVwib25Mb2FkXCJcbiAgICA6b2Zmc2V0PVwiJHEuc2NyZWVuLmhlaWdodCAvIDJcIlxuICAgIHJlZj1cImluZmluaXRlU2Nyb2xcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgIDxxLWludGVyc2VjdGlvbiB2LWZvcj1cIm1hbmdhIGluIGl0ZW1zXCIgOmtleT1cIm1hbmdhLmlkXCIgOnN0eWxlPVwid2lkdFwiPlxuICAgICAgICA8TWFuZ2FDYXJkIDpEaXNwbGF5PVwiRGlzcGxcIiA6bWFuZ2E9XCJtYW5nYVwiPjwvTWFuZ2FDYXJkPlxuICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtbXktbWRcIj5cbiAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG4gIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgPHEtYnRuXG4gICAgICBmYWJcbiAgICAgIGNsYXNzPVwidGV4dC1ibGFja1wiXG4gICAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgIGxhYmVsPVwiRklMVEVSXCJcbiAgICAgIEBjbGljaz1cImZpbHRlckRpYWwgPSB0cnVlXCJcbiAgICAvPlxuICA8L3EtcGFnZS1zdGlja3k+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZmlsdGVyRGlhbFwiPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cImJldHdlZW5cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiUmVzZXRcIlxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgIEBjbGljaz1cImdldEZpbHRzKHRydWUpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtYmxhY2tcIlxuICAgICAgICAgIGxhYmVsPVwiU3VibWl0XCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwic3VibWl0RmlsdGVyc1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPGlzSXRHcm91cFxuICAgICAgICAgIEBzdGF0ZUNoYW5nZT1cInN0YXRlQ2hhbmdlXCJcbiAgICAgICAgICB2LWZvcj1cIihmaWx0LCBpbmRleCkgaW4gZmlsdGVyc1wiXG4gICAgICAgICAgOmZpbHRlcj1cImZpbHRcIlxuICAgICAgICAgIDpwb3NpdGlvbj1cImluZGV4XCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgIDwvaXNJdEdyb3VwPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgbWFuZ2EsIHNvdXJjZXBhZ2UgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBNYW5nYUNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL21hbmdhQ2FyZC52dWUnO1xuaW1wb3J0IHsgZGVib3VuY2UsIFFJbmZpbml0ZVNjcm9sbCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L0ZpbHRlcnMnO1xuaW1wb3J0IGlzSXRHcm91cCBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlJztcblxuaW50ZXJmYWNlIHBvc1N0YXRlIHtcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgc3RhdGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ21hbmdhU291cmNlR3JpZCcsXG4gIGNvbXBvbmVudHM6IHsgTWFuZ2FDYXJkLCBpc0l0R3JvdXAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBEaXNwbCgpIHtcbiAgICAgIGlmICh0aGlzLmRpc3BsYXkuRGlzcGxheSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnY29tcGFjdCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlzcGxheS5EaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiAnY29tZm9ydCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2xpc3QnO1xuICAgIH0sXG4gICAgd2lkdCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuRGlzcGwgPT0gJ2xpc3QnXG4gICAgICAgID8gJ3dpZHRoOjEwMCU7IGhlaWdodDogMTA5cHg7J1xuICAgICAgICA6IGB3aWR0aDogY2FsYygxMDAlIC8gJHt0aGlzLmRldmlkZXJ9KTsgYXNwZWN0LXJhdGlvOiAyMjUvMzUwO3RyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1vdXQ7YDtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjYWxjV2lkdGgoKSB7XG4gICAgICBjb25zdCBncmlkID0gPFFJbmZpbml0ZVNjcm9sbD50aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ107XG4gICAgICBjb25zdCBpZGVhbCA9IDxudW1iZXI+dGhpcy4kcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWl0ZW1XJyk7XG4gICAgICBpZiAoZ3JpZC4kZWwuY2xpZW50V2lkdGggPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICB0aGlzLmRldmlkZXIgPSBNYXRoLnJvdW5kKGdyaWQuJGVsLmNsaWVudFdpZHRoIC8gaWRlYWwpO1xuICAgIH0sXG4gICAgY2FsY0hlaWdodCgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuJHBhcmVudD8uJGVsO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBsZXQgSGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgSGVpZ2h0IC09IHBhcmVudC5jaGlsZHJlblswXS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiBIZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIGFzeW5jIHJlbG9hZChudW0gPSAxLCBzaWduYWw6IEFib3J0U2lnbmFsKSB7XG4gICAgICBpZiAodGhpcy5ub2luaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuU21pdHRlZCB8fCB0aGlzLiRyb3V0ZS5xdWVyeVsncSddKSB7XG4gICAgICAgICAgY29uc3Qgc291cmNlcGFnZSA9IDxQcm9taXNlPHNvdXJjZXBhZ2U+PnRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ11cbiAgICAgICAgICAgIH0vc2VhcmNoP3NlYXJjaFRlcm09JHt0aGlzLiRyb3V0ZS5xdWVyeVsncSddIHx8ICcnfSZwYWdlTnVtPSR7bnVtfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNpZ25hbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBzb3VyY2VwYWdlO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VwYWdlID0gPFByb21pc2U8c291cmNlcGFnZT4+dGhpcy4kZmV0Y2hKU09OKFxuICAgICAgICAgICAgYC9hcGkvdjEvc291cmNlLyR7dGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddfS8ke3RoaXMuJHJvdXRlLnBhcmFtc1sncG9wbGF0ZSddfS8ke251bX1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaWduYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgc291cmNlcGFnZTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm9pbml0ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9hZChcbiAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICBkb25lOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgKSB7XG4gICAgICB0aGlzLnJlbG9hZChpbmRleCwgdGhpcy5jb250cm9sbGVyLnNpZ25hbCkudGhlbihcbiAgICAgICAgKGRhdGE6IHNvdXJjZXBhZ2UgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi5kYXRhLm1hbmdhTGlzdCk7XG4gICAgICAgICAgICBpZiAoIWRhdGEuaGFzTmV4dFBhZ2UpXG4gICAgICAgICAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHJlc2V0U2Nyb2xsKCkge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgdGhpcy5jb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkucmVzZXQoKTtcbiAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS5yZXN1bWUoKTtcbiAgICAgIC8vICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICBnZXRGaWx0cyhyZXNldCA9IGZhbHNlKSB7XG4gICAgICB0aGlzLiRmZXRjaEpTT04oXG4gICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vZmlsdGVycyR7XG4gICAgICAgICAgcmVzZXQgPyAnP3Jlc2V0PXRydWUnIDogJydcbiAgICAgICAgfWBcbiAgICAgICkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBkYXRhO1xuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN0YXRlQ2hhbmdlKHN0YXRlOiBzdHJpbmcgfCBwb3NTdGF0ZVtdLCBwb3M6IG51bWJlcikge1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMgPSB0aGlzLnN0YXRlQ2hhbmdlcy5maWx0ZXIoXG4gICAgICAgIChlbGUpID0+IGVsZS5wb3NpdGlvbiAhPSBwb3NcbiAgICAgICk7XG4gICAgICBpZiAodHlwZW9mIHN0YXRlICE9ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0YXRlLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLnB1c2goeyBwb3NpdGlvbjogcG9zLCBzdGF0ZTogSlNPTi5zdHJpbmdpZnkoZWxlKSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5wdXNoKHsgcG9zaXRpb246IHBvcywgc3RhdGU6IHN0YXRlIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc3VibWl0RmlsdGVycygpIHtcbiAgICAgIGF3YWl0IHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ119L2ZpbHRlcnNgLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZUNoYW5nZXMpXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLlNtaXR0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMgPSBbXTtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGwoKTtcbiAgICAgIHRoaXMuZ2V0RmlsdHMoKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCA9IGRlYm91bmNlKHRoaXMuY2FsY1dpZHRoLCA1MDApO1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxjV2lkdGgoKTtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjV2lkdGgpO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0RmlsdHModHJ1ZSk7XG4gIH0sXG4gIGJlZm9yZVVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1dpZHRoKTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlLnF1ZXJ5LnEnOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgfVxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gcmVmKG5ldyBBYm9ydENvbnRyb2xsZXIoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmlkZXI6IHJlZjxudW1iZXI+KDApLFxuICAgICAgbWFuZ2FzOiByZWYoPG1hbmdhW10+W10pLFxuICAgICAgY2x3aWR0aDogcmVmPG51bWJlcj4oMCksXG4gICAgICBkaXNwbGF5OiByZWYoRGlzcGxheSgpKSxcbiAgICAgIGZpbHRlcnM6IHJlZig8dW5rbm93bj5bXSksXG4gICAgICBpdGVtczogcmVmKDxtYW5nYVtdPltdKSxcbiAgICAgIGZpbHRlckRpYWw6IHJlZihmYWxzZSksXG4gICAgICBzdGF0ZUNoYW5nZXM6IHJlZig8eyBwb3NpdGlvbjogbnVtYmVyOyBzdGF0ZTogc3RyaW5nIH1bXT5bXSksXG4gICAgICBTbWl0dGVkOiByZWYoZmFsc2UpLFxuICAgICAgbm9pbml0OiByZWYoZmFsc2UpLFxuICAgICAgY29udHJvbGxlclxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbi0tPlxuXG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgOnN0eWxlLWZuPVwibXlUd2Vha1wiPlxuICAgIDxzb3VyY2VHcmlkPiA8L3NvdXJjZUdyaWQ+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzb3VyY2UgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBzb3VyY2VHcmlkIGZyb20gJ3NyYy9jb21wb25lbnRzL3NvdXJjZVNlYXJjaC9zb3VyY2VNYW5nYUdyaWQudnVlJztcbmltcG9ydCB7IGlzQ29uZmlnIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL2lzQ29uZmlndXJhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1Njb3VyY2VTZWFyY2hQYWdlJyxcbiAgY29tcG9uZW50czoge1xuICAgIHNvdXJjZUdyaWRcbiAgfSxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBqc246IHNvdXJjZSA9IGF3YWl0IHRoaXMuJGZldGNoSlNPTihcbiAgICAgICAgYC9hcGkvdjEvc291cmNlLyR7dGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddfWBcbiAgICAgICk7XG4gICAgICB0aGlzLiRlbWl0KCdzZXRUaXRsZScsIGpzbi5kaXNwbGF5TmFtZSk7XG4gICAgICB0aGlzLmlzQ29uZmkuc2V0Q29uZmlndXJhYmxlKGpzbi5pc0NvbmZpZ3VyYWJsZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0VGl0bGUnLCAnU291cmNlIFNlYXJjaCBQYWdlJyk7XG5cbiAgICByZXR1cm4geyBpc0NvbmZpOiBpc0NvbmZpZygpIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfaG9pc3RlZF8xIiwiTWFuZ2FDYXJkIiwic291cmNlcGFnZSIsIkRpc3BsYXkiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwibWFuZ2EiLCJfbm9ybWFsaXplU3R5bGUiLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2R0EsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixNQUFN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
