import { Q as QPage } from "./QPage.8c90446c.js";
import { Q as QIntersection } from "./QIntersection.c01880aa.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.8b9e5e85.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.065d6888.js";
import { Q as QBtn } from "./QBtn.11461724.js";
import { Q as QPageSticky } from "./QPageSticky.057230f8.js";
import { Q as QCardActions } from "./QCardActions.82161f73.js";
import { Q as QList } from "./QList.323c1084.js";
import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QDialog } from "./QDialog.e6d65e20.js";
import { C as ClosePopup } from "./ClosePopup.501d8ad0.js";
import { m as mangaCard } from "./mangaCard.cba174aa.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, n as createCommentVNode, F as Fragment, x as renderList, s as resolveComponent, a7 as debounce, u as createBaseVNode, B as withDirectives, a6 as normalizeStyle } from "./index.5cc93081.js";
import { u as useInBar } from "./Filters.0cd04f8b.js";
import { Q as QExpansionItem } from "./QExpansionItem.ae88d575.js";
import { a as isSortState, b as isfilterCheckBox, c as isfilterSort, d as isfilterSelect, e as isfilterTriState, f as isfilterHeader, g as isfilterSeparator, h as isfilterText, j as isfilterGroup } from "./models.4021c4b7.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.f373f416.js";
import { Q as QCheckbox } from "./QCheckbox.76c4b12d.js";
import { Q as QItem } from "./QItem.b6d35b8b.js";
import { Q as QSelect } from "./QSelect.94de2790.js";
import { Q as QSeparator } from "./QSeparator.13c326e4.js";
import { Q as QInput } from "./QInput.cad7e9be.js";
import { Q as QIcon } from "./QIcon.129c8e27.js";
import { i as isConfig } from "./isConfigurable.149073dc.js";
import "./QSpinner.7d14a7f2.js";
import "./Intersection.79320c52.js";
import "./dom.e2e78a08.js";
import "./scroll.b1151d01.js";
import "./Ripple.3a8ac2e1.js";
import "./use-dark.1adac86a.js";
import "./use-timeout.fccbe84a.js";
import "./use-transition.651acf9e.js";
import "./focus-manager.32f8d49a.js";
import "./QInnerLoading.480505c0.js";
import "./QBadge.4fa2216a.js";
import "./usefull.8778cf5c.js";
import "./axios.01f4fb44.js";
import "./StoreStuff.45ae8e68.js";
import "./uid.42677368.js";
import "./use-checkbox.17ce6f52.js";
import "./option-sizes.60af55ae.js";
import "./use-form.94dd5d17.js";
import "./use-key-composition.a20c22ba.js";
import "./QMenu.e8ab5d35.js";
import "./position-engine.4089f253.js";
import "./selection.4336ddbe.js";
import "./use-virtual-scroll.377a0319.js";
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
    async getlist(url) {
      const sourcepage2 = this.$api.get(url, {
        signal: this.controller.signal
      });
      try {
        return (await sourcepage2).data;
      } catch (error) {
        return void 0;
      }
    },
    async reload(num = 1) {
      if (this.noinit) {
        if (this.Smitted || this.$route.query["q"]) {
          return await this.getlist(
            `/api/v1/source/${this.$route.params["sourceID"]}/search?searchTerm=${this.$route.query["q"] || ""}&pageNum=${num}`
          );
        } else {
          return await this.getlist(
            `/api/v1/source/${this.$route.params["sourceID"]}/${this.$route.params["poplate"]}/${num}`
          );
        }
      } else {
        this.noinit = true;
        return void 0;
      }
    },
    onLoad(index, done = () => {
      return;
    }) {
      this.reload(index).then((data) => {
        if (data != void 0) {
          this.items.push(...data.mangaList);
          if (!data.hasNextPage)
            this.$refs["infiniteScrol"].stop();
        }
        done();
      });
    },
    resetScroll() {
      this.items = [];
      this.controller.abort();
      this.controller = new AbortController();
      this.$refs["infiniteScrol"].reset();
      this.$refs["infiniteScrol"].resume();
      this.$refs["infiniteScrol"].trigger();
    },
    getFilts(reset = false) {
      this.$api.get(
        `/api/v1/source/${this.$route.params["sourceID"]}/filters${reset ? "?reset=true" : ""}`
      ).then(({ data }) => {
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
      await this.$api.post(
        `/api/v1/source/${this.$route.params["sourceID"]}/filters`,
        this.stateChanges
      );
      this.Smitted = true;
      this.stateChanges = [];
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
      ref: "infiniteScrol",
      class: "notOflow"
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
var SourceSearchPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "ScourceSearchPage",
  components: {
    sourceGrid
  },
  created: async function() {
    try {
      const { data: jsn } = await this.$api.get(
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
  return openBlock(), createBlock(QPage, {
    "style-fn": _ctx.myTweak,
    class: "notOflow"
  }, {
    default: withCtx(() => [
      createVNode(_component_sourceGrid)
    ]),
    _: 1
  }, 8, ["style-fn"]);
}
var SourceSearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-49b0f170"], ["__file", "SourceSearchPage.vue"]]);
export { SourceSearchPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlU2VhcmNoUGFnZS43NWQzNTQ4Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvd2hhdEZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL3NvdXJjZU1hbmdhR3JpZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvU291cmNlU2VhcmNoUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyQ2hlY2tCb3goZmlsdGVyKVwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgZmlsdGVyLmZpbHRlci5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1jaGVja2JveCBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsXCIgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyU2VsZWN0KGZpbHRlcilcIj5cbiAgICA8cS1zZWxlY3RcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICA6b3B0aW9ucz1cIlxuICAgICAgICBmaWx0ZXIuZmlsdGVyLmRpc3BsYXlWYWx1ZXMubWFwKChlbGUsIGluZGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGVsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgIFwiXG4gICAgICBlbWl0LXZhbHVlXG4gICAgICBtYXAtb3B0aW9uc1xuICAgICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICAvPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJUcmlTdGF0ZShmaWx0ZXIpXCI+XG4gICAgPHEtY2hlY2tib3hcbiAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICAgIGNoZWNrZWQtaWNvbj1cImNoZWNrX2JveFwiXG4gICAgICB1bmNoZWNrZWQtaWNvbj1cInJfZGlzYWJsZWRfYnlfZGVmYXVsdFwiXG4gICAgICBpbmRldGVybWluYXRlLWljb249XCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiXG4gICAgICBrZWVwLWNvbG9yXG4gICAgICBzaXplPVwibGdcIlxuICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgIDppbmRldGVybWluYXRlLXZhbHVlPVwiMFwiXG4gICAgICA6dHJ1ZS12YWx1ZT1cIjFcIlxuICAgICAgOmZhbHNlLXZhbHVlPVwiMlwiXG4gICAgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVySGVhZGVyKGZpbHRlcilcIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPnt7IGZpbHRlci5maWx0ZXIubmFtZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtIHYtaWY9XCJpc2ZpbHRlclNlcGFyYXRvcihmaWx0ZXIpXCI+XG4gICAgPHEtc2VwYXJhdG9yPiA8L3Etc2VwYXJhdG9yPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJUZXh0KGZpbHRlcikgJiYgdHlwZW9mIHZhbCA9PSAnc3RyaW5nJ1wiPlxuICAgIDxxLWlucHV0XG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgIG91dGxpbmVkXG4gICAgICA6bGFiZWw9XCJmaWx0ZXIuZmlsdGVyLm5hbWVcIlxuICAgICAgdi1tb2RlbD1cInZhbFwiXG4gICAgPjwvcS1pbnB1dD5cbiAgPC9xLWl0ZW0+XG4gIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgOmxhYmVsPVwiZmlsdGVyLmZpbHRlci5uYW1lXCJcbiAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICB2LWlmPVwiaXNmaWx0ZXJTb3J0KGZpbHRlcikgJiYgaXNTb3J0U3RhdGUodmFsKVwiXG4gID5cbiAgICA8cS1pdGVtIHYtZm9yPVwiKHNvcnQsIGluZGV4KSBpbiBmaWx0ZXIuZmlsdGVyLnZhbHVlc1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIHRodW1ibmFpbCBjbGFzcz1cInEtcHgtbWRcIj5cbiAgICAgICAgPHEtaWNvblxuICAgICAgICAgIDpuYW1lPVwiXG4gICAgICAgICAgICB2YWwuaW5kZXggPT0gaW5kZXhcbiAgICAgICAgICAgICAgPyB2YWwuYXNjZW5kaW5nXG4gICAgICAgICAgICAgICAgPyBgYXJyb3dfZG93bndhcmRgXG4gICAgICAgICAgICAgICAgOiBgYXJyb3dfdXB3YXJkYFxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgY2xhc3M9XCJxLXBsLW5vbmVcIlxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgOmxhYmVsPVwic29ydFwiXG4gICAgICAgICAgQGNsaWNrPVwiZG9Tb3J0KGluZGV4KVwiXG4gICAgICAgID5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPC9xLWl0ZW0+XG4gIDwvcS1leHBhbnNpb24taXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBmaWx0ZXJzLFxuICBpc2ZpbHRlckNoZWNrQm94LFxuICBpc2ZpbHRlclNvcnQsXG4gIGlzZmlsdGVyU2VsZWN0LFxuICBpc2ZpbHRlclRyaVN0YXRlLFxuICBpc2ZpbHRlckhlYWRlcixcbiAgaXNmaWx0ZXJTZXBhcmF0b3IsXG4gIGlzZmlsdGVyVGV4dCxcbiAgaXNTb3J0U3RhdGVcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnaXNHcm91cCcsXG4gIHByb3BzOiB7XG4gICAgZmlsdGVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8ZmlsdGVycz4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXIgfCB1bmRlZmluZWQ+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gdW5kZWZpbmVkXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZG9Tb3J0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmIChpc1NvcnRTdGF0ZSh0aGlzLnZhbCkpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IHRoaXMudmFsLmluZGV4KSB7XG4gICAgICAgICAgdGhpcy52YWwuYXNjZW5kaW5nID0gIXRoaXMudmFsLmFzY2VuZGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRoaXMudmFsLmFzY2VuZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIEpTT04uc3RyaW5naWZ5KHRoaXMudmFsKSwgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0eXBlb2YgdGhpcy52YWwgPT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMudmFsID09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLnZhbCA9PSAnYm9vbGVhbidcbiAgICAgICkge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIHRoaXMudmFsLnRvU3RyaW5nKCksIHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IFsnc3RhdGVDaGFuZ2UnXSxcbiAgc2V0dXAocHJvcHMpIHtcbiAgICBsZXQgdmFsOiB1bmtub3duO1xuICAgIGlmIChpc2ZpbHRlckNoZWNrQm94KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZig8Ym9vbGVhbj5wcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyU29ydChwcm9wcy5maWx0ZXIpKSB7XG4gICAgICAvL2dvbm5hIGhhdmUgdG8gZG8gc29tZSBqYW5rIHdpdGggdGhpcyBvbmVcbiAgICAgIHZhbCA9IHJlZihcbiAgICAgICAgPHsgaW5kZXg6IG51bWJlcjsgYXNjZW5kaW5nOiBib29sZWFuIH0+cHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyU2VsZWN0KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZihwcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyVHJpU3RhdGUocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKDxudW1iZXI+cHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlckhlYWRlcihwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYoKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVyU2VwYXJhdG9yKHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZigpO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJUZXh0KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZig8c3RyaW5nPnByb3BzLmZpbHRlci5maWx0ZXIuc3RhdGUgfHwgJycpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsLFxuICAgICAgaXNmaWx0ZXJDaGVja0JveCxcbiAgICAgIGlzZmlsdGVyU29ydCxcbiAgICAgIGlzZmlsdGVyU2VsZWN0LFxuICAgICAgaXNmaWx0ZXJUcmlTdGF0ZSxcbiAgICAgIGlzZmlsdGVySGVhZGVyLFxuICAgICAgaXNmaWx0ZXJTZXBhcmF0b3IsXG4gICAgICBpc2ZpbHRlclRleHQsXG4gICAgICBpc1NvcnRTdGF0ZVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtZXhwYW5zaW9uLWl0ZW0gdi1pZj1cImlzZmlsdGVyR3JvdXAoZmlsdGVyKVwiIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGZpbHQsIGluZGV4KSBpbiBmaWx0ZXIuZmlsdGVyLnN0YXRlXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDx3aGF0RmlsdGVyXG4gICAgICAgICAgQHN0YXRlQ2hhbmdlPVwic3RhdGVDaGFuZ2VcIlxuICAgICAgICAgIDpmaWx0ZXI9XCJmaWx0XCJcbiAgICAgICAgICA6cG9zaXRpb249XCJpbmRleFwiXG4gICAgICAgID48L3doYXRGaWx0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtbGlzdD5cbiAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuICA8ZGl2IHYtaWY9XCIhaXNmaWx0ZXJHcm91cChmaWx0ZXIpXCI+XG4gICAgPHdoYXRGaWx0ZXIgQHN0YXRlQ2hhbmdlPVwic3RhdGVDaGFuZ2VcIiA6ZmlsdGVyPVwiZmlsdGVyXCI+PC93aGF0RmlsdGVyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBmaWx0ZXJzLCBpc2ZpbHRlckdyb3VwIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL21vZGVscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHdoYXRGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvd2hhdEZpbHRlci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnaXNHcm91cCcsXG4gIHByb3BzOiB7XG4gICAgZmlsdGVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8ZmlsdGVycz4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbJ3N0YXRlQ2hhbmdlJ10sXG4gIGNvbXBvbmVudHM6IHsgd2hhdEZpbHRlciB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhdGVDaGFuZ2Uoc3RhdGU6IHN0cmluZywgcG9zOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwb3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMuZmlsdGVyKChlbGUpID0+IGVsZS5wb3NpdGlvbiAhPSBwb3MpO1xuICAgICAgICB0aGlzLnN0YXR1cy5wdXNoKHsgcG9zaXRpb246IHBvcywgc3RhdGU6IHN0YXRlIH0pO1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZUNoYW5nZScsIHRoaXMuc3RhdHVzLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3N0YXRlQ2hhbmdlJywgc3RhdGUsIHRoaXMucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzZmlsdGVyR3JvdXAsXG4gICAgICBzdGF0dXM6IHJlZig8eyBwb3NpdGlvbjogbnVtYmVyOyBzdGF0ZTogc3RyaW5nIH1bXT5bXSlcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWluZmluaXRlLXNjcm9sbFxuICAgIEBsb2FkPVwib25Mb2FkXCJcbiAgICA6b2Zmc2V0PVwiJHEuc2NyZWVuLmhlaWdodCAvIDJcIlxuICAgIHJlZj1cImluZmluaXRlU2Nyb2xcIlxuICAgIGNsYXNzPVwibm90T2Zsb3dcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgIDxxLWludGVyc2VjdGlvbiB2LWZvcj1cIm1hbmdhIGluIGl0ZW1zXCIgOmtleT1cIm1hbmdhLmlkXCIgOnN0eWxlPVwid2lkdFwiPlxuICAgICAgICA8TWFuZ2FDYXJkIDpEaXNwbGF5PVwiRGlzcGxcIiA6bWFuZ2E9XCJtYW5nYVwiPjwvTWFuZ2FDYXJkPlxuICAgICAgPC9xLWludGVyc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtbXktbWRcIj5cbiAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG4gIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgPHEtYnRuXG4gICAgICBmYWJcbiAgICAgIGNsYXNzPVwidGV4dC1ibGFja1wiXG4gICAgICBpY29uPVwiZmlsdGVyX2xpc3RcIlxuICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgIGxhYmVsPVwiRklMVEVSXCJcbiAgICAgIEBjbGljaz1cImZpbHRlckRpYWwgPSB0cnVlXCJcbiAgICAvPlxuICA8L3EtcGFnZS1zdGlja3k+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwiZmlsdGVyRGlhbFwiPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cImJldHdlZW5cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiUmVzZXRcIlxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgIEBjbGljaz1cImdldEZpbHRzKHRydWUpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtYmxhY2tcIlxuICAgICAgICAgIGxhYmVsPVwiU3VibWl0XCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwic3VibWl0RmlsdGVyc1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPGlzSXRHcm91cFxuICAgICAgICAgIEBzdGF0ZUNoYW5nZT1cInN0YXRlQ2hhbmdlXCJcbiAgICAgICAgICB2LWZvcj1cIihmaWx0LCBpbmRleCkgaW4gZmlsdGVyc1wiXG4gICAgICAgICAgOmZpbHRlcj1cImZpbHRcIlxuICAgICAgICAgIDpwb3NpdGlvbj1cImluZGV4XCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgIDwvaXNJdEdyb3VwPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZmlsdGVycywgbWFuZ2EsIHNvdXJjZXBhZ2UgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBNYW5nYUNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL21hbmdhQ2FyZC52dWUnO1xuaW1wb3J0IHsgZGVib3VuY2UsIFFJbmZpbml0ZVNjcm9sbCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L0ZpbHRlcnMnO1xuaW1wb3J0IGlzSXRHcm91cCBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBwb3NTdGF0ZSB7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHN0YXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdtYW5nYVNvdXJjZUdyaWQnLFxuICBjb21wb25lbnRzOiB7IE1hbmdhQ2FyZCwgaXNJdEdyb3VwIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgRGlzcGwoKSB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5LkRpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ2NvbXBhY3QnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpc3BsYXkuRGlzcGxheSkge1xuICAgICAgICByZXR1cm4gJ2NvbWZvcnQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdsaXN0JztcbiAgICB9LFxuICAgIHdpZHQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsID09ICdsaXN0J1xuICAgICAgICA/ICd3aWR0aDoxMDAlOyBoZWlnaHQ6IDEwOXB4OydcbiAgICAgICAgOiBgd2lkdGg6IGNhbGMoMTAwJSAvICR7dGhpcy5kZXZpZGVyfSk7IGFzcGVjdC1yYXRpbzogMjI1LzM1MDt0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2Utb3V0O2A7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2FsY1dpZHRoKCkge1xuICAgICAgY29uc3QgZ3JpZCA9IDxRSW5maW5pdGVTY3JvbGw+dGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddO1xuICAgICAgY29uc3QgaWRlYWwgPSA8bnVtYmVyPnRoaXMuJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01pdGVtVycpO1xuICAgICAgaWYgKGdyaWQuJGVsLmNsaWVudFdpZHRoID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdGhpcy5kZXZpZGVyID0gTWF0aC5yb3VuZChncmlkLiRlbC5jbGllbnRXaWR0aCAvIGlkZWFsKTtcbiAgICB9LFxuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ/LiRlbDtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbGV0IEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIEhlaWdodCAtPSBwYXJlbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gSGVpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBhc3luYyBnZXRsaXN0KHVybDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBzb3VyY2VwYWdlID0gdGhpcy4kYXBpLmdldCh1cmwsIHtcbiAgICAgICAgc2lnbmFsOiB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsXG4gICAgICB9KSBhcyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8c291cmNlcGFnZT4+O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBzb3VyY2VwYWdlKS5kYXRhO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHJlbG9hZChudW0gPSAxKSB7XG4gICAgICBpZiAodGhpcy5ub2luaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuU21pdHRlZCB8fCB0aGlzLiRyb3V0ZS5xdWVyeVsncSddKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0bGlzdChcbiAgICAgICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ11cbiAgICAgICAgICAgIH0vc2VhcmNoP3NlYXJjaFRlcm09JHt0aGlzLiRyb3V0ZS5xdWVyeVsncSddIHx8ICcnfSZwYWdlTnVtPSR7bnVtfWBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldGxpc3QoXG4gICAgICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ119LyR7dGhpcy4kcm91dGUucGFyYW1zWydwb3BsYXRlJ119LyR7bnVtfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vaW5pdCA9IHRydWU7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQoXG4gICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgZG9uZTogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICkge1xuICAgICAgdGhpcy5yZWxvYWQoaW5kZXgpLnRoZW4oKGRhdGE6IHNvdXJjZXBhZ2UgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKC4uLmRhdGEubWFuZ2FMaXN0KTtcbiAgICAgICAgICBpZiAoIWRhdGEuaGFzTmV4dFBhZ2UpXG4gICAgICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXRTY3JvbGwoKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS5yZXNldCgpO1xuICAgICAgKHRoaXMuJHJlZnNbJ2luZmluaXRlU2Nyb2wnXSBhcyBRSW5maW5pdGVTY3JvbGwpLnJlc3VtZSgpO1xuICAgICAgKHRoaXMuJHJlZnNbJ2luZmluaXRlU2Nyb2wnXSBhcyBRSW5maW5pdGVTY3JvbGwpLnRyaWdnZXIoKTtcbiAgICB9LFxuICAgIGdldEZpbHRzKHJlc2V0ID0gZmFsc2UpIHtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAuZ2V0KFxuICAgICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vZmlsdGVycyR7XG4gICAgICAgICAgICByZXNldCA/ICc/cmVzZXQ9dHJ1ZScgOiAnJ1xuICAgICAgICAgIH1gXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9OiBBeGlvc1Jlc3BvbnNlPGZpbHRlcnM+KSA9PiB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJzID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3RhdGVDaGFuZ2Uoc3RhdGU6IHN0cmluZyB8IHBvc1N0YXRlW10sIHBvczogbnVtYmVyKSB7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcyA9IHRoaXMuc3RhdGVDaGFuZ2VzLmZpbHRlcihcbiAgICAgICAgKGVsZSkgPT4gZWxlLnBvc2l0aW9uICE9IHBvc1xuICAgICAgKTtcbiAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RhdGUuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMucHVzaCh7IHBvc2l0aW9uOiBwb3MsIHN0YXRlOiBKU09OLnN0cmluZ2lmeShlbGUpIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLnB1c2goeyBwb3NpdGlvbjogcG9zLCBzdGF0ZTogc3RhdGUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzdWJtaXRGaWx0ZXJzKCkge1xuICAgICAgYXdhaXQgdGhpcy4kYXBpLnBvc3QoXG4gICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX0vZmlsdGVyc2AsXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzXG4gICAgICApO1xuICAgICAgdGhpcy5TbWl0dGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzID0gW107XG4gICAgICAvLyB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgICB0aGlzLmdldEZpbHRzKCk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxjV2lkdGggPSBkZWJvdW5jZSh0aGlzLmNhbGNXaWR0aCwgNTAwKTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FsY1dpZHRoKCk7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1dpZHRoKTtcbiAgICB9KTtcbiAgICB0aGlzLmdldEZpbHRzKHRydWUpO1xuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNXaWR0aCk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJyRyb3V0ZS5xdWVyeS5xJzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNldFNjcm9sbCgpO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IHJlZihuZXcgQWJvcnRDb250cm9sbGVyKCkpO1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpZGVyOiByZWY8bnVtYmVyPigwKSxcbiAgICAgIG1hbmdhczogcmVmKDxtYW5nYVtdPltdKSxcbiAgICAgIGNsd2lkdGg6IHJlZjxudW1iZXI+KDApLFxuICAgICAgZGlzcGxheTogcmVmKERpc3BsYXkoKSksXG4gICAgICBmaWx0ZXJzOiByZWYoPHVua25vd24+W10pLFxuICAgICAgaXRlbXM6IHJlZig8bWFuZ2FbXT5bXSksXG4gICAgICBmaWx0ZXJEaWFsOiByZWYoZmFsc2UpLFxuICAgICAgc3RhdGVDaGFuZ2VzOiByZWYoPHsgcG9zaXRpb246IG51bWJlcjsgc3RhdGU6IHN0cmluZyB9W10+W10pLFxuICAgICAgU21pdHRlZDogcmVmKGZhbHNlKSxcbiAgICAgIG5vaW5pdDogcmVmKGZhbHNlKSxcbiAgICAgIGNvbnRyb2xsZXJcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4tLT5cblxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIiBjbGFzcz1cIm5vdE9mbG93XCI+XG4gICAgPHNvdXJjZUdyaWQ+IDwvc291cmNlR3JpZD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHNvdXJjZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHNvdXJjZUdyaWQgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL3NvdXJjZU1hbmdhR3JpZC52dWUnO1xuaW1wb3J0IHsgaXNDb25maWcgfSBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvaXNDb25maWd1cmFibGUnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1Njb3VyY2VTZWFyY2hQYWdlJyxcbiAgY29tcG9uZW50czoge1xuICAgIHNvdXJjZUdyaWRcbiAgfSxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGE6IGpzbiB9ID0gKGF3YWl0IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgIGAvYXBpL3YxL3NvdXJjZS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snc291cmNlSUQnXX1gXG4gICAgICApKSBhcyBBeGlvc1Jlc3BvbnNlPHNvdXJjZT47XG4gICAgICB0aGlzLiRlbWl0KCdzZXRUaXRsZScsIGpzbi5kaXNwbGF5TmFtZSk7XG4gICAgICB0aGlzLmlzQ29uZmkuc2V0Q29uZmlndXJhYmxlKGpzbi5pc0NvbmZpZ3VyYWJsZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0VGl0bGUnLCAnU291cmNlIFNlYXJjaCBQYWdlJyk7XG5cbiAgICByZXR1cm4geyBpc0NvbmZpOiBpc0NvbmZpZygpIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiIHNjb3BlZD5cbi5PRmxvdy5ub3RPZmxvd1xuICBvdmVyZmxvdy15OiB1bnNldFxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9ob2lzdGVkXzEiLCJNYW5nYUNhcmQiLCJzb3VyY2VwYWdlIiwiRGlzcGxheSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJtYW5nYSIsIl9ub3JtYWxpemVTdHlsZSIsIl93aXRoRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZHQSxNQUFLQSxjQUFhLGdCQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJ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
