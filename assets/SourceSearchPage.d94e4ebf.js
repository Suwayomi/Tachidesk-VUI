import { Q as QPage } from "./QPage.126447b9.js";
import { Q as QIntersection } from "./QIntersection.6a6cf41f.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.50d98fd7.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.13aea2ff.js";
import { Q as QBtn } from "./QBtn.99f48b76.js";
import { Q as QPageSticky } from "./QPageSticky.3c9de08f.js";
import { Q as QCardActions } from "./QCardActions.821af329.js";
import { Q as QList } from "./QList.23ba57c4.js";
import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QDialog } from "./QDialog.39313c8c.js";
import { C as ClosePopup } from "./ClosePopup.77615a3d.js";
import { m as mangaCard } from "./mangaCard.d2350d59.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, t as toDisplayString, n as createCommentVNode, F as Fragment, x as renderList, s as resolveComponent, a7 as debounce, u as createBaseVNode, B as withDirectives, a6 as normalizeStyle } from "./index.0b61810d.js";
import { u as useInBar } from "./Filters.d6e3deb1.js";
import { Q as QExpansionItem } from "./QExpansionItem.7a294102.js";
import { a as isfilterCheckBox, b as isfilterSort, c as isfilterSelect, d as isfilterTriState, e as isfilterHeader, f as isfilterSeparator, g as isfilterText, h as isSortState, j as isfilterGroup } from "./models.d7e94ac2.js";
import { a as QItemLabel, Q as QItemSection } from "./QItemLabel.10998179.js";
import { Q as QCheckbox } from "./QCheckbox.e3080dd8.js";
import { Q as QItem } from "./QItem.f310d6ce.js";
import { Q as QSelect } from "./QSelect.b1f4fa30.js";
import { Q as QSeparator } from "./QSeparator.95dc5d53.js";
import { Q as QInput } from "./QInput.269ea6c0.js";
import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { i as isConfig } from "./isConfigurable.ab1bc5d9.js";
import "./QSpinner.0d412098.js";
import "./Intersection.9c3ca45b.js";
import "./dom.fd94eb85.js";
import "./scroll.34fac392.js";
import "./Ripple.ce29675d.js";
import "./use-dark.bc291eea.js";
import "./use-timeout.99cd911c.js";
import "./use-transition.65db8379.js";
import "./focus-manager.32f8d49a.js";
import "./QInnerLoading.b3499eb2.js";
import "./QBadge.da9a9ffd.js";
import "./usefull.0f9a3edc.js";
import "./axios.a87bcd6c.js";
import "./StoreStuff.f5900537.js";
import "./uid.42677368.js";
import "./use-checkbox.ee2b9cbf.js";
import "./option-sizes.80ed84f8.js";
import "./use-form.324955ff.js";
import "./use-key-composition.64dd1858.js";
import "./QMenu.ebcf9c01.js";
import "./position-engine.94f26946.js";
import "./selection.2c9d8487.js";
import "./use-virtual-scroll.083e959b.js";
import "./rtl.b51694b1.js";
import "./format.2a3572e1.js";
const _sfc_main$3 = defineComponent({
  name: "IsGroup",
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
  emits: ["state-change"],
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
  },
  watch: {
    val() {
      if (typeof this.val == "object") {
        this.$emit("state-change", JSON.stringify(this.val), this.position);
      } else if (typeof this.val == "string" || typeof this.val == "number" || typeof this.val == "boolean") {
        this.$emit("state-change", this.val.toString(), this.position);
      }
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
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.val = $event),
          color: "blue"
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
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.val = $event),
          style: { "width": "100%" },
          "toggle-indeterminate": "",
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
          modelValue: _ctx.val,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.val = $event),
          style: { "width": "100%" },
          outlined: "",
          label: _ctx.filter.filter.name
        }, null, 8, ["modelValue", "label"])
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
  name: "IsGroup",
  components: { whatFilter },
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
  emits: ["state-change"],
  setup() {
    return {
      isfilterGroup,
      status: ref([])
    };
  },
  methods: {
    stateChange(state, pos = void 0) {
      if (pos != void 0) {
        this.status = this.status.filter((ele) => ele.position != pos);
        this.status.push({ position: pos, state });
        this.$emit("state-change", this.status, this.position);
      } else {
        this.$emit("state-change", state, this.position);
      }
    }
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
                  filter: filt,
                  position: index,
                  onStateChange: _ctx.stateChange
                }, null, 8, ["filter", "position", "onStateChange"])
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
        filter: _ctx.filter,
        onStateChange: _ctx.stateChange
      }, null, 8, ["filter", "onStateChange"])
    ])) : createCommentVNode("", true)
  ], 64);
}
var isItGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "isItGroup.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "MangaSourceGrid",
  components: { MangaCard: mangaCard, isItGroup },
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
  },
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
  watch: {
    "$route.query.q": function() {
      this.resetScroll();
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
  }
});
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MangaCard = resolveComponent("MangaCard");
  const _component_isItGroup = resolveComponent("isItGroup");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QInfiniteScroll, {
      ref: "infiniteScrol",
      offset: _ctx.$q.screen.height / 2,
      class: "notOflow",
      onLoad: _ctx.onLoad
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
                  display: _ctx.Displ,
                  manga: manga2
                }, null, 8, ["display", "manga"])
              ]),
              _: 2
            }, 1032, ["style"]);
          }), 128))
        ])
      ]),
      _: 1
    }, 8, ["offset", "onLoad"]),
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
                    key: index,
                    filter: filt,
                    position: index,
                    onStateChange: _ctx.stateChange
                  }, null, 8, ["filter", "position", "onStateChange"]);
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
  emits: ["set-title"],
  setup(_props, { emit }) {
    emit("set-title", "Source Search Page");
    return { isConfi: isConfig() };
  },
  created: async function() {
    try {
      const { data: jsn } = await this.$api.get(
        `/api/v1/source/${this.$route.params["sourceID"]}`
      );
      this.$emit("set-title", jsn.displayName);
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
var SourceSearchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d43a09aa"], ["__file", "SourceSearchPage.vue"]]);
export { SourceSearchPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291cmNlU2VhcmNoUGFnZS5kOTRlNGViZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL0ZpbHRlcnMvd2hhdEZpbHRlci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL3NvdXJjZU1hbmdhR3JpZC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvU291cmNlU2VhcmNoUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyQ2hlY2tCb3goZmlsdGVyKVwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgZmlsdGVyLmZpbHRlci5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1jaGVja2JveCB2LW1vZGVsPVwidmFsXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyU2VsZWN0KGZpbHRlcilcIj5cbiAgICA8cS1zZWxlY3RcbiAgICAgIHYtbW9kZWw9XCJ2YWxcIlxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICA6b3B0aW9ucz1cIlxuICAgICAgICBmaWx0ZXIuZmlsdGVyLmRpc3BsYXlWYWx1ZXMubWFwKChlbGUsIGluZGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGVsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICBcIlxuICAgICAgZW1pdC12YWx1ZVxuICAgICAgbWFwLW9wdGlvbnNcbiAgICAgIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiXG4gICAgLz5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyVHJpU3RhdGUoZmlsdGVyKVwiPlxuICAgIDxxLWNoZWNrYm94XG4gICAgICB2LW1vZGVsPVwidmFsXCJcbiAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgdG9nZ2xlLWluZGV0ZXJtaW5hdGVcbiAgICAgIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiXG4gICAgICBjaGVja2VkLWljb249XCJjaGVja19ib3hcIlxuICAgICAgdW5jaGVja2VkLWljb249XCJyX2Rpc2FibGVkX2J5X2RlZmF1bHRcIlxuICAgICAgaW5kZXRlcm1pbmF0ZS1pY29uPVwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIlxuICAgICAga2VlcC1jb2xvclxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICA6aW5kZXRlcm1pbmF0ZS12YWx1ZT1cIjBcIlxuICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgIDpmYWxzZS12YWx1ZT1cIjJcIlxuICAgIC8+XG4gIDwvcS1pdGVtPlxuICA8cS1pdGVtIHYtaWY9XCJpc2ZpbHRlckhlYWRlcihmaWx0ZXIpXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBmaWx0ZXIuZmlsdGVyLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB2LWlmPVwiaXNmaWx0ZXJTZXBhcmF0b3IoZmlsdGVyKVwiPlxuICAgIDxxLXNlcGFyYXRvcj4gPC9xLXNlcGFyYXRvcj5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdi1pZj1cImlzZmlsdGVyVGV4dChmaWx0ZXIpICYmIHR5cGVvZiB2YWwgPT0gJ3N0cmluZydcIj5cbiAgICA8cS1pbnB1dFxuICAgICAgdi1tb2RlbD1cInZhbFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgIG91dGxpbmVkXG4gICAgICA6bGFiZWw9XCJmaWx0ZXIuZmlsdGVyLm5hbWVcIlxuICAgID48L3EtaW5wdXQ+XG4gIDwvcS1pdGVtPlxuICA8cS1leHBhbnNpb24taXRlbVxuICAgIHYtaWY9XCJpc2ZpbHRlclNvcnQoZmlsdGVyKSAmJiBpc1NvcnRTdGF0ZSh2YWwpXCJcbiAgICA6bGFiZWw9XCJmaWx0ZXIuZmlsdGVyLm5hbWVcIlxuICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICA+XG4gICAgPHEtaXRlbSB2LWZvcj1cIihzb3J0LCBpbmRleCkgaW4gZmlsdGVyLmZpbHRlci52YWx1ZXNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbiB0aHVtYm5haWwgY2xhc3M9XCJxLXB4LW1kXCI+XG4gICAgICAgIDxxLWljb25cbiAgICAgICAgICA6bmFtZT1cIlxuICAgICAgICAgICAgdmFsLmluZGV4ID09IGluZGV4XG4gICAgICAgICAgICAgID8gdmFsLmFzY2VuZGluZ1xuICAgICAgICAgICAgICAgID8gYGFycm93X2Rvd253YXJkYFxuICAgICAgICAgICAgICAgIDogYGFycm93X3Vwd2FyZGBcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNsYXNzPVwicS1wbC1ub25lXCJcbiAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgIDpsYWJlbD1cInNvcnRcIlxuICAgICAgICAgIEBjbGljaz1cImRvU29ydChpbmRleClcIlxuICAgICAgICA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDwvcS1pdGVtPlxuICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgZmlsdGVycyxcbiAgaXNmaWx0ZXJDaGVja0JveCxcbiAgaXNmaWx0ZXJTb3J0LFxuICBpc2ZpbHRlclNlbGVjdCxcbiAgaXNmaWx0ZXJUcmlTdGF0ZSxcbiAgaXNmaWx0ZXJIZWFkZXIsXG4gIGlzZmlsdGVyU2VwYXJhdG9yLFxuICBpc2ZpbHRlclRleHQsXG4gIGlzU29ydFN0YXRlLFxufSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdJc0dyb3VwJyxcbiAgcHJvcHM6IHtcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxmaWx0ZXJzPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXIgfCB1bmRlZmluZWQ+LFxuICAgICAgZGVmYXVsdDogKCkgPT4gdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0sXG4gIGVtaXRzOiBbJ3N0YXRlLWNoYW5nZSddLFxuICBzZXR1cChwcm9wcykge1xuICAgIGxldCB2YWw6IHVua25vd247XG4gICAgaWYgKGlzZmlsdGVyQ2hlY2tCb3gocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKDxib29sZWFuPnByb3BzLmZpbHRlci5maWx0ZXIuc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJTb3J0KHByb3BzLmZpbHRlcikpIHtcbiAgICAgIC8vZ29ubmEgaGF2ZSB0byBkbyBzb21lIGphbmsgd2l0aCB0aGlzIG9uZVxuICAgICAgdmFsID0gcmVmKFxuICAgICAgICA8eyBpbmRleDogbnVtYmVyOyBhc2NlbmRpbmc6IGJvb2xlYW4gfT5wcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJTZWxlY3QocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKHByb3BzLmZpbHRlci5maWx0ZXIuc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJUcmlTdGF0ZShwcm9wcy5maWx0ZXIpKSB7XG4gICAgICB2YWwgPSByZWYoPG51bWJlcj5wcm9wcy5maWx0ZXIuZmlsdGVyLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKGlzZmlsdGVySGVhZGVyKHByb3BzLmZpbHRlcikpIHtcbiAgICAgIHZhbCA9IHJlZigpO1xuICAgIH0gZWxzZSBpZiAoaXNmaWx0ZXJTZXBhcmF0b3IocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKCk7XG4gICAgfSBlbHNlIGlmIChpc2ZpbHRlclRleHQocHJvcHMuZmlsdGVyKSkge1xuICAgICAgdmFsID0gcmVmKDxzdHJpbmc+cHJvcHMuZmlsdGVyLmZpbHRlci5zdGF0ZSB8fCAnJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWwsXG4gICAgICBpc2ZpbHRlckNoZWNrQm94LFxuICAgICAgaXNmaWx0ZXJTb3J0LFxuICAgICAgaXNmaWx0ZXJTZWxlY3QsXG4gICAgICBpc2ZpbHRlclRyaVN0YXRlLFxuICAgICAgaXNmaWx0ZXJIZWFkZXIsXG4gICAgICBpc2ZpbHRlclNlcGFyYXRvcixcbiAgICAgIGlzZmlsdGVyVGV4dCxcbiAgICAgIGlzU29ydFN0YXRlLFxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZS1jaGFuZ2UnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnZhbCksIHRoaXMucG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMudmFsID09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLnZhbCA9PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2YgdGhpcy52YWwgPT0gJ2Jvb2xlYW4nXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3RhdGUtY2hhbmdlJywgdGhpcy52YWwudG9TdHJpbmcoKSwgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRvU29ydChpbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAoaXNTb3J0U3RhdGUodGhpcy52YWwpKSB7XG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLnZhbC5pbmRleCkge1xuICAgICAgICAgIHRoaXMudmFsLmFzY2VuZGluZyA9ICF0aGlzLnZhbC5hc2NlbmRpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWwuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICB0aGlzLnZhbC5hc2NlbmRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtZXhwYW5zaW9uLWl0ZW0gdi1pZj1cImlzZmlsdGVyR3JvdXAoZmlsdGVyKVwiIDpsYWJlbD1cImZpbHRlci5maWx0ZXIubmFtZVwiPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8ZGl2IHYtZm9yPVwiKGZpbHQsIGluZGV4KSBpbiBmaWx0ZXIuZmlsdGVyLnN0YXRlXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDx3aGF0RmlsdGVyXG4gICAgICAgICAgOmZpbHRlcj1cImZpbHRcIlxuICAgICAgICAgIDpwb3NpdGlvbj1cImluZGV4XCJcbiAgICAgICAgICBAc3RhdGUtY2hhbmdlPVwic3RhdGVDaGFuZ2VcIlxuICAgICAgICA+PC93aGF0RmlsdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1leHBhbnNpb24taXRlbT5cbiAgPGRpdiB2LWlmPVwiIWlzZmlsdGVyR3JvdXAoZmlsdGVyKVwiPlxuICAgIDx3aGF0RmlsdGVyIDpmaWx0ZXI9XCJmaWx0ZXJcIiBAc3RhdGUtY2hhbmdlPVwic3RhdGVDaGFuZ2VcIj48L3doYXRGaWx0ZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGZpbHRlcnMsIGlzZmlsdGVyR3JvdXAgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgUHJvcFR5cGUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgd2hhdEZpbHRlciBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy93aGF0RmlsdGVyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdJc0dyb3VwJyxcbiAgY29tcG9uZW50czogeyB3aGF0RmlsdGVyIH0sXG4gIHByb3BzOiB7XG4gICAgZmlsdGVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QgYXMgUHJvcFR5cGU8ZmlsdGVycz4sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIgYXMgUHJvcFR5cGU8bnVtYmVyPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGVtaXRzOiBbJ3N0YXRlLWNoYW5nZSddLFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNmaWx0ZXJHcm91cCxcbiAgICAgIHN0YXR1czogcmVmKDx7IHBvc2l0aW9uOiBudW1iZXI7IHN0YXRlOiBzdHJpbmcgfVtdPltdKSxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhdGVDaGFuZ2Uoc3RhdGU6IHN0cmluZywgcG9zOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwb3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMuZmlsdGVyKChlbGUpID0+IGVsZS5wb3NpdGlvbiAhPSBwb3MpO1xuICAgICAgICB0aGlzLnN0YXR1cy5wdXNoKHsgcG9zaXRpb246IHBvcywgc3RhdGU6IHN0YXRlIH0pO1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZS1jaGFuZ2UnLCB0aGlzLnN0YXR1cywgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdGF0ZS1jaGFuZ2UnLCBzdGF0ZSwgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtaW5maW5pdGUtc2Nyb2xsXG4gICAgcmVmPVwiaW5maW5pdGVTY3JvbFwiXG4gICAgOm9mZnNldD1cIiRxLnNjcmVlbi5oZWlnaHQgLyAyXCJcbiAgICBjbGFzcz1cIm5vdE9mbG93XCJcbiAgICBAbG9hZD1cIm9uTG9hZFwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgPHEtaW50ZXJzZWN0aW9uIHYtZm9yPVwibWFuZ2EgaW4gaXRlbXNcIiA6a2V5PVwibWFuZ2EuaWRcIiA6c3R5bGU9XCJ3aWR0XCI+XG4gICAgICAgIDxNYW5nYUNhcmQgOmRpc3BsYXk9XCJEaXNwbFwiIDptYW5nYT1cIm1hbmdhXCI+PC9NYW5nYUNhcmQ+XG4gICAgICA8L3EtaW50ZXJzZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgcS1teS1tZFwiPlxuICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgPHEtcGFnZS1zdGlja3kgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiA6b2Zmc2V0PVwiWzE4LCAxOF1cIj5cbiAgICA8cS1idG5cbiAgICAgIGZhYlxuICAgICAgY2xhc3M9XCJ0ZXh0LWJsYWNrXCJcbiAgICAgIGljb249XCJmaWx0ZXJfbGlzdFwiXG4gICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgbGFiZWw9XCJGSUxURVJcIlxuICAgICAgQGNsaWNrPVwiZmlsdGVyRGlhbCA9IHRydWVcIlxuICAgIC8+XG4gIDwvcS1wYWdlLXN0aWNreT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJmaWx0ZXJEaWFsXCI+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweFwiPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwiYmV0d2VlblwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiUmVzZXRcIlxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgQGNsaWNrPVwiZ2V0RmlsdHModHJ1ZSlcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtYmxhY2tcIlxuICAgICAgICAgIGxhYmVsPVwiU3VibWl0XCJcbiAgICAgICAgICBAY2xpY2s9XCJzdWJtaXRGaWx0ZXJzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICA8cS1saXN0PlxuICAgICAgICA8aXNJdEdyb3VwXG4gICAgICAgICAgdi1mb3I9XCIoZmlsdCwgaW5kZXgpIGluIGZpbHRlcnNcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgOmZpbHRlcj1cImZpbHRcIlxuICAgICAgICAgIDpwb3NpdGlvbj1cImluZGV4XCJcbiAgICAgICAgICBAc3RhdGUtY2hhbmdlPVwic3RhdGVDaGFuZ2VcIlxuICAgICAgICA+XG4gICAgICAgIDwvaXNJdEdyb3VwPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZmlsdGVycywgbWFuZ2EsIHNvdXJjZXBhZ2UgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCBNYW5nYUNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL21hbmdhQ2FyZC52dWUnO1xuaW1wb3J0IHsgZGVib3VuY2UsIFFJbmZpbml0ZVNjcm9sbCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9saWJyYXJ5L0ZpbHRlcnMnO1xuaW1wb3J0IGlzSXRHcm91cCBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvRmlsdGVycy9pc0l0R3JvdXAudnVlJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBwb3NTdGF0ZSB7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHN0YXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYW5nYVNvdXJjZUdyaWQnLFxuICBjb21wb25lbnRzOiB7IE1hbmdhQ2FyZCwgaXNJdEdyb3VwIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSByZWYobmV3IEFib3J0Q29udHJvbGxlcigpKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGV2aWRlcjogcmVmPG51bWJlcj4oMCksXG4gICAgICBtYW5nYXM6IHJlZig8bWFuZ2FbXT5bXSksXG4gICAgICBjbHdpZHRoOiByZWY8bnVtYmVyPigwKSxcbiAgICAgIGRpc3BsYXk6IHJlZihEaXNwbGF5KCkpLFxuICAgICAgZmlsdGVyczogcmVmKDx1bmtub3duPltdKSxcbiAgICAgIGl0ZW1zOiByZWYoPG1hbmdhW10+W10pLFxuICAgICAgZmlsdGVyRGlhbDogcmVmKGZhbHNlKSxcbiAgICAgIHN0YXRlQ2hhbmdlczogcmVmKDx7IHBvc2l0aW9uOiBudW1iZXI7IHN0YXRlOiBzdHJpbmcgfVtdPltdKSxcbiAgICAgIFNtaXR0ZWQ6IHJlZihmYWxzZSksXG4gICAgICBub2luaXQ6IHJlZihmYWxzZSksXG4gICAgICBjb250cm9sbGVyLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgRGlzcGwoKSB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5LkRpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ2NvbXBhY3QnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpc3BsYXkuRGlzcGxheSkge1xuICAgICAgICByZXR1cm4gJ2NvbWZvcnQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdsaXN0JztcbiAgICB9LFxuICAgIHdpZHQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLkRpc3BsID09ICdsaXN0J1xuICAgICAgICA/ICd3aWR0aDoxMDAlOyBoZWlnaHQ6IDEwOXB4OydcbiAgICAgICAgOiBgd2lkdGg6IGNhbGMoMTAwJSAvICR7dGhpcy5kZXZpZGVyfSk7IGFzcGVjdC1yYXRpbzogMjI1LzM1MDt0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2Utb3V0O2A7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlLnF1ZXJ5LnEnOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FsY1dpZHRoID0gZGVib3VuY2UodGhpcy5jYWxjV2lkdGgsIDUwMCk7XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGNXaWR0aCgpO1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNXaWR0aCk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRGaWx0cyh0cnVlKTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjV2lkdGgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2FsY1dpZHRoKCkge1xuICAgICAgY29uc3QgZ3JpZCA9IDxRSW5maW5pdGVTY3JvbGw+dGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddO1xuICAgICAgY29uc3QgaWRlYWwgPSA8bnVtYmVyPnRoaXMuJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01pdGVtVycpO1xuICAgICAgaWYgKGdyaWQuJGVsLmNsaWVudFdpZHRoID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdGhpcy5kZXZpZGVyID0gTWF0aC5yb3VuZChncmlkLiRlbC5jbGllbnRXaWR0aCAvIGlkZWFsKTtcbiAgICB9LFxuICAgIGNhbGNIZWlnaHQoKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ/LiRlbDtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbGV0IEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIEhlaWdodCAtPSBwYXJlbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gSGVpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBhc3luYyBnZXRsaXN0KHVybDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBzb3VyY2VwYWdlID0gdGhpcy4kYXBpLmdldCh1cmwsIHtcbiAgICAgICAgc2lnbmFsOiB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgfSkgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPHNvdXJjZXBhZ2U+PjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgc291cmNlcGFnZSkuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyByZWxvYWQobnVtID0gMSkge1xuICAgICAgaWYgKHRoaXMubm9pbml0KSB7XG4gICAgICAgIGlmICh0aGlzLlNtaXR0ZWQgfHwgdGhpcy4kcm91dGUucXVlcnlbJ3EnXSkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldGxpc3QoXG4gICAgICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddXG4gICAgICAgICAgICB9L3NlYXJjaD9zZWFyY2hUZXJtPSR7dGhpcy4kcm91dGUucXVlcnlbJ3EnXSB8fCAnJ30mcGFnZU51bT0ke251bX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRsaXN0KFxuICAgICAgICAgICAgYC9hcGkvdjEvc291cmNlLyR7dGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddfS8ke3RoaXMuJHJvdXRlLnBhcmFtc1sncG9wbGF0ZSddfS8ke251bX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub2luaXQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Mb2FkKFxuICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgIGRvbmU6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIHRoaXMucmVsb2FkKGluZGV4KS50aGVuKChkYXRhOiBzb3VyY2VwYWdlIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCguLi5kYXRhLm1hbmdhTGlzdCk7XG4gICAgICAgICAgaWYgKCFkYXRhLmhhc05leHRQYWdlKVxuICAgICAgICAgICAgKHRoaXMuJHJlZnNbJ2luZmluaXRlU2Nyb2wnXSBhcyBRSW5maW5pdGVTY3JvbGwpLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0U2Nyb2xsKCkge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgdGhpcy5jb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkucmVzZXQoKTtcbiAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS5yZXN1bWUoKTtcbiAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS50cmlnZ2VyKCk7XG4gICAgfSxcbiAgICBnZXRGaWx0cyhyZXNldCA9IGZhbHNlKSB7XG4gICAgICB0aGlzLiRhcGlcbiAgICAgICAgLmdldChcbiAgICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ119L2ZpbHRlcnMke1xuICAgICAgICAgICAgcmVzZXQgPyAnP3Jlc2V0PXRydWUnIDogJydcbiAgICAgICAgICB9YFxuICAgICAgICApXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfTogQXhpb3NSZXNwb25zZTxmaWx0ZXJzPikgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsdGVycyA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5yZXNldFNjcm9sbCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHN0YXRlQ2hhbmdlKHN0YXRlOiBzdHJpbmcgfCBwb3NTdGF0ZVtdLCBwb3M6IG51bWJlcikge1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMgPSB0aGlzLnN0YXRlQ2hhbmdlcy5maWx0ZXIoXG4gICAgICAgIChlbGUpID0+IGVsZS5wb3NpdGlvbiAhPSBwb3NcbiAgICAgICk7XG4gICAgICBpZiAodHlwZW9mIHN0YXRlICE9ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0YXRlLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLnB1c2goeyBwb3NpdGlvbjogcG9zLCBzdGF0ZTogSlNPTi5zdHJpbmdpZnkoZWxlKSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5wdXNoKHsgcG9zaXRpb246IHBvcywgc3RhdGU6IHN0YXRlIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc3VibWl0RmlsdGVycygpIHtcbiAgICAgIGF3YWl0IHRoaXMuJGFwaS5wb3N0KFxuICAgICAgICBgL2FwaS92MS9zb3VyY2UvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ3NvdXJjZUlEJ119L2ZpbHRlcnNgLFxuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlc1xuICAgICAgKTtcbiAgICAgIHRoaXMuU21pdHRlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcyA9IFtdO1xuICAgICAgLy8gdGhpcy5yZXNldFNjcm9sbCgpO1xuICAgICAgdGhpcy5nZXRGaWx0cygpO1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4tLT5cblxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIiBjbGFzcz1cIm5vdE9mbG93XCI+XG4gICAgPHNvdXJjZUdyaWQ+IDwvc291cmNlR3JpZD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHNvdXJjZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHNvdXJjZUdyaWQgZnJvbSAnc3JjL2NvbXBvbmVudHMvc291cmNlU2VhcmNoL3NvdXJjZU1hbmdhR3JpZC52dWUnO1xuaW1wb3J0IHsgaXNDb25maWcgfSBmcm9tICdzcmMvY29tcG9uZW50cy9zb3VyY2VTZWFyY2gvaXNDb25maWd1cmFibGUnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1Njb3VyY2VTZWFyY2hQYWdlJyxcbiAgY29tcG9uZW50czoge1xuICAgIHNvdXJjZUdyaWQsXG4gIH0sXG4gIGVtaXRzOiBbJ3NldC10aXRsZSddLFxuICBzZXR1cChfcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgZW1pdCgnc2V0LXRpdGxlJywgJ1NvdXJjZSBTZWFyY2ggUGFnZScpO1xuXG4gICAgcmV0dXJuIHsgaXNDb25maTogaXNDb25maWcoKSB9O1xuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YToganNuIH0gPSAoYXdhaXQgdGhpcy4kYXBpLmdldChcbiAgICAgICAgYC9hcGkvdjEvc291cmNlLyR7dGhpcy4kcm91dGUucGFyYW1zWydzb3VyY2VJRCddfWBcbiAgICAgICkpIGFzIEF4aW9zUmVzcG9uc2U8c291cmNlPjtcbiAgICAgIHRoaXMuJGVtaXQoJ3NldC10aXRsZScsIGpzbi5kaXNwbGF5TmFtZSk7XG4gICAgICB0aGlzLmlzQ29uZmkuc2V0Q29uZmlndXJhYmxlKGpzbi5pc0NvbmZpZ3VyYWJsZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCcsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIiBzY29wZWQ+XG4uT0Zsb3cubm90T2Zsb3dcbiAgb3ZlcmZsb3cteTogdW5zZXRcbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfaG9pc3RlZF8xIiwiTWFuZ2FDYXJkIiwiRGlzcGxheSIsInNvdXJjZXBhZ2UiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwibWFuZ2EiLCJfbm9ybWFsaXplU3R5bGUiLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2R0EsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJ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
