import { Q as QCard } from "./QCard.70d72d27.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.8b9e5e85.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.065d6888.js";
import { Q as QPage } from "./QPage.8c90446c.js";
import { I as Intersection } from "./Intersection.79320c52.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, m as createVNode, a6 as normalizeStyle, q as normalizeClass, j as createBlock, k as withCtx, n as createCommentVNode, a5 as useRoute, s as resolveComponent, u as createBaseVNode, x as renderList, F as Fragment, B as withDirectives, t as toDisplayString } from "./index.5cc93081.js";
import { Q as QImg, g as getImgBlob } from "./usefull.8778cf5c.js";
import { Q as QInnerLoading } from "./QInnerLoading.480505c0.js";
import { c as chapterMeta } from "./readerSettings.06bbeb03.js";
import "./use-dark.1adac86a.js";
import "./QSpinner.7d14a7f2.js";
import "./dom.e2e78a08.js";
import "./scroll.b1151d01.js";
import "./axios.01f4fb44.js";
import "./StoreStuff.45ae8e68.js";
import "./use-transition.651acf9e.js";
var displayPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  name: "displayPage",
  props: {
    pageNum: {
      type: Number,
      required: true
    },
    chapterID: {
      type: Number,
      required: true
    },
    vue_RM: {
      type: String,
      default: "RTL"
    },
    vue_WT: {
      type: Boolean,
      default: false
    },
    vue_Scale: {
      type: Boolean,
      default: false
    },
    vue_Offset: {
      type: Boolean,
      default: false
    },
    imdata: {
      type: Promise,
      default: void 0
    }
  },
  mounted: function() {
    this.getImg();
  },
  computed: {
    isBook() {
      return ["RTL", "LTR", "SinglePage"].includes(this.vue_RM);
    },
    isBook2() {
      return ["RTL", "LTR"].includes(this.vue_RM);
    },
    imgstyle() {
      if (this.vue_Scale) {
        if (this.isBook) {
          if (this.isBook2) {
            return "width: fit-content;";
          }
          return "width: fit-content;";
        }
        return "width:100%;height:fit-content;";
      }
      return "width: fit-content;max-width:100%";
    },
    imgClass() {
      if (this.vue_Scale) {
        if (this.isBook) {
          if (this.isBook2) {
            return "test";
          }
          return "test";
        }
        return "";
      }
      return "test";
    },
    imgfit() {
      if (this.vue_Scale) {
        if (this.isBook) {
          if (this.isBook2) {
            return "scale-down";
          }
          return "scale-down";
        }
        return "fill";
      }
      return "scale-down";
    },
    imgimgstyle() {
      if (this.vue_Scale) {
        if (this.isBook) {
          if (this.isBook2) {
            return { height: "100%", width: "fit-content" };
          }
          return { height: "100%", width: "fit-content" };
        }
        return { width: "100%", height: "fit-content" };
      }
      return {
        width: "fit-content",
        maxWidth: "100%"
      };
    },
    imgcontstyle() {
      if (this.vue_Scale) {
        if (this.isBook) {
          if (this.isBook2) {
            let tmp = 1;
            if (this.pageNum % 2) {
              tmp *= -1;
            }
            if (this.vue_RM == "RTL") {
              tmp *= -1;
            }
            if (this.vue_Offset) {
              tmp *= -1;
            }
            return "width:50%;height:100vh;align-items:" + (tmp == -1 ? "start" : "end");
          }
          return "max-width:100%;height:100vh";
        }
        return "width:100%;height:fit-content;";
      }
      if (this.isBook2) {
        const es = this.pageNum % 2 ? this.vue_RM == "RTL" ? "end" : "start" : this.vue_RM == "RTL" ? "start" : "end";
        return "width:50%;align-items:" + es;
      }
      return "max-width:100%";
    }
  },
  watch: {
    pageNum() {
      this.getImg();
    }
  },
  methods: {
    getImg() {
      var _a;
      (_a = this.imdata) == null ? void 0 : _a.then((value) => {
        this.imgdata = value;
      });
    }
  },
  setup() {
    return { imgdata: ref("") };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["column items-center justify-center", _ctx.vue_Scale && !_ctx.isBook ? `` : `displayPage`]),
    style: normalizeStyle(_ctx.imgcontstyle)
  }, [
    createVNode(QImg, {
      style: normalizeStyle([{ "max-width": "-webkit-fill-available" }, _ctx.imgstyle]),
      loading: "lazy",
      class: normalizeClass(_ctx.vue_WT ? _ctx.isBook2 ? `q-mx-md` : `q-ma-md` : ``),
      src: _ctx.imgdata,
      fit: _ctx.imgfit,
      imgClass: _ctx.imgClass,
      imgStyle: _ctx.imgimgstyle
    }, null, 8, ["style", "class", "src", "fit", "imgClass", "imgStyle"]),
    !_ctx.imgdata ? (openBlock(), createBlock(QCard, {
      key: 0,
      flat: "",
      style: { "height": "100vh", "background-color": "transparent", "width": "100%" }
    }, {
      default: withCtx(() => [
        createVNode(QInnerLoading, {
          showing: !_ctx.imgdata,
          color: "primary",
          class: "bg-transparent"
        }, null, 8, ["showing"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 6);
}
var displayPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "displayPage.vue"]]);
const pathss = {
  L: {
    forward: [
      [100, 100],
      [100, 0],
      [66, 0],
      [66, 66],
      [0, 66],
      [0, 100]
    ],
    back: [
      [33, 33],
      [66, 33],
      [66, 0],
      [0, 0],
      [0, 66],
      [33, 66]
    ],
    menu: [
      [33, 33],
      [66, 33],
      [66, 66],
      [33, 66]
    ]
  },
  RAL: {
    forward: [
      [66, 0],
      [100, 0],
      [100, 100],
      [66, 100]
    ],
    back: [
      [0, 0],
      [33, 0],
      [33, 100],
      [0, 100]
    ],
    menu: [
      [33, 0],
      [66, 0],
      [66, 100],
      [33, 100]
    ]
  },
  Kindle: {
    forward: [
      [33, 33],
      [33, 100],
      [100, 100],
      [100, 33]
    ],
    back: [
      [33, 33],
      [33, 100],
      [0, 100],
      [0, 33]
    ],
    menu: [
      [0, 0],
      [100, 0],
      [100, 33],
      [0, 33]
    ]
  },
  Edge: {
    forward: [
      [100, 0],
      [100, 100],
      [0, 100],
      [0, 0],
      [33, 0],
      [33, 100],
      [66, 100],
      [66, 0]
    ],
    back: [
      [33, 66],
      [66, 66],
      [66, 100],
      [33, 100]
    ],
    menu: [
      [33, 66],
      [66, 66],
      [66, 0],
      [33, 0]
    ]
  }
};
const _sfc_main = defineComponent({
  name: "chapterPage",
  components: { displayPage },
  emits: ["setTitle", "openMenu"],
  methods: {
    async getImg(chapterID, pageNum) {
      return getImgBlob(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${chapterID}/page/${pageNum}?useCache=${this.$storeGet(
          "useCache",
          true
        )}`
      );
    },
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    onChapter(data, done) {
      var _a;
      this.items.push(data);
      if (this.currchapter != parseInt(`${this.$route.params["chapterID"]}`)) {
        if (((_a = this.$route.name) == null ? void 0 : _a.toString()) == "chapterpage") {
          this.$router.replace(
            `/manga/${this.$route.params["mangaID"]}/chapter/${this.currchapter}`
          );
        }
      }
      done();
      this.chapname = data.name;
      this.$emit("setTitle", `${this.vue_title} ${data.name}`);
      if (this.currchapter >= data.chapterCount) {
        this.$refs["infiniteScrol"].stop();
      } else {
        this.currchapter++;
        this.getNextChap();
      }
    },
    onLoad(_index, done) {
      if (this.nextChapter === void 0) {
        this.$api.get(
          `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${this.currchapter}`
        ).then(({ data }) => {
          var _a;
          this.Pages[this.currchapter] = [];
          for (let i = 0; i < data.pageCount; i++) {
            (_a = this.Pages[this.currchapter]) == null ? void 0 : _a.push(this.getImg(data.index, i));
          }
          this.onChapter(data, done);
        });
      } else {
        this.nextChapter.then((data) => {
          this.onChapter(data, done);
        });
      }
    },
    getNextChap() {
      this.nextChapter = this.$api.get(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${this.currchapter}`
      );
      this.nextChapter.then((data) => {
        var _a;
        this.Pages[this.currchapter] = [];
        for (let i = 0; i < data.pageCount; i++) {
          (_a = this.Pages[this.currchapter]) == null ? void 0 : _a.push(this.getImg(data.index, i));
        }
      });
    },
    onIntersection(entry) {
      const element = entry.target;
      if (entry.isIntersecting) {
        this.setReadPages(element);
        element.dataset["isint"] = "true";
      } else {
        element.dataset["isint"] = void 0;
      }
    },
    setReadPages(ele) {
      this.$api.patchForm(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${ele.dataset["cid"]}`,
        {
          lastPageRead: `${parseInt(ele.dataset["pid"]) + 1}`
        }
      );
      if (parseInt(ele.dataset["pid"]) >= parseInt(ele.dataset["pcount"]) - 1) {
        this.$api.patchForm(
          `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${ele.dataset["cid"]}`,
          {
            read: "true"
          }
        );
      }
    },
    goNextIntersector80() {
      if (this.scrolltimeout) {
        this.scrolltimeout = false;
        setTimeout(() => {
          this.scrolltimeout = true;
        }, 500);
        const vp = window.visualViewport;
        const top = vp.pageTop;
        const bottom = vp.pageTop + vp.height;
        const intsect = Array.from(
          this.$refs["infiniteScrol"].$el.querySelectorAll(
            "[data-isint=true]"
          )
        );
        if (intsect.length > 0) {
          const ele = intsect[intsect.length - 1];
          if (ele.offsetTop > bottom || ele.offsetTop <= top) {
            ele.dataset["isint"] = void 0;
            this.scrolltimeout = true;
            this.goNextIntersector80();
            return;
          }
          if (ele) {
            intsect.forEach((elemen) => {
              elemen.dataset["isint"] = elemen == ele ? "true" : void 0;
            });
            window.scrollTo({
              top: ele.offsetTop,
              left: 0,
              behavior: "smooth"
            });
          }
        } else {
          this.scroll80();
        }
      }
    },
    scroll80() {
      const vp = window.visualViewport;
      window.scrollTo({
        top: vp.pageTop + vp.height * 0.8,
        left: 0,
        behavior: "smooth"
      });
    },
    scrollUp80() {
      if (this.scrolltimeout) {
        this.scrolltimeout = false;
        setTimeout(() => {
          this.scrolltimeout = true;
        }, 500);
        const vp = window.visualViewport;
        window.scrollTo({
          top: vp.pageTop - vp.height * 0.8,
          left: 0,
          behavior: "smooth"
        });
      }
    },
    keyHandeler(e) {
      if (e.key == " ") {
        e.preventDefault();
        this.goNextIntersector80();
      }
    },
    pagee(chapterID, pageNum) {
      const tmp = this.Pages[chapterID];
      if (tmp == null ? void 0 : tmp.length) {
        const tmp2 = tmp[pageNum];
        if (tmp2 != void 0) {
          return tmp2;
        }
      }
      return this.getImg(chapterID, pageNum);
    },
    handleClick(e) {
      if (this.pointInPoly(
        [e.x, e.y],
        this.polyToPOLLY(pathss[this.usedpath].forward)
      )) {
        this.goNextIntersector80();
      } else if (this.pointInPoly(
        [e.x, e.y],
        this.polyToPOLLY(pathss[this.usedpath].back)
      )) {
        this.scrollUp80();
      } else if (pathss[this.usedpath].menu && this.pointInPoly(
        [e.x, e.y],
        this.polyToPOLLY(pathss[this.usedpath].menu)
      )) {
        this.$emit("openMenu");
      }
    },
    polyToPOLLY(polly) {
      if (polly == void 0)
        return void 0;
      return polly.map((point) => {
        return [
          point[0] * window.innerWidth / 100,
          point[1] * window.innerHeight / 100
        ];
      });
    },
    pointInPoly(point, vs) {
      if (vs == void 0)
        return false;
      const x = point[0], y = point[1];
      let inside = false;
      for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        const ii = vs[i];
        const jj = vs[j];
        const xi = ii[0], yi = ii[1];
        const xj = jj[0], yj = jj[1];
        const intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect)
          inside = !inside;
      }
      return inside;
    }
  },
  created() {
    window.addEventListener("keydown", this.keyHandeler);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.keyHandeler);
  },
  computed: {
    isBook() {
      return ["RTL", "LTR", "SinglePage"].includes(this.vue_RM);
    },
    isBook2() {
      return ["RTL", "LTR"].includes(this.vue_RM);
    },
    divClass() {
      if (this.isBook2) {
        return "row items-center";
      }
      return "";
    },
    clipPathF() {
      const path = pathss[this.usedpath].forward;
      return `clip-path: polygon(${path.map((point) => {
        return point.map((persent) => {
          return persent == 0 ? persent.toString() : `${persent}%`;
        }).join(" ");
      }).join(",")});top: 0;
      bottom: 0;
      left: 0;
      right: 0;`;
    },
    clipPathB() {
      const path = pathss[this.usedpath].back;
      return `clip-path: polygon(${path.map((point) => {
        return point.map((persent) => {
          return persent == 0 ? persent.toString() : `${persent}%`;
        }).join(" ");
      }).join(",")});top: 0;
      bottom: 0;
      left: 0;
      right: 0;`;
    },
    clipPathM() {
      const path = pathss[this.usedpath].menu;
      if (path === void 0)
        return "";
      return `clip-path: polygon(${path.map((point) => {
        return point.map((persent) => {
          return persent == 0 ? persent.toString() : `${persent}%`;
        }).join(" ");
      }).join(",")});top: 0;
      bottom: 0;
      left: 0;
      right: 0;`;
    }
  },
  watch: {
    vue_title() {
      this.$emit("setTitle", `${this.chapname} ${this.vue_title}`);
    }
  },
  setup() {
    const pageIntersectEleArr = ref([]);
    const items = ref([]);
    const route = useRoute();
    const currchapter = ref(parseInt(`${route.params["chapterID"]}`));
    const nextChapter = ref(void 0);
    const Pages = ref([]);
    const options = chapterMeta(parseInt(`${route.params["mangaID"]}`));
    const vue_RM = options.vue_RM;
    const vue_Path = options.vue_Paths;
    const pathVisable = options.pathVisable;
    const vue_WT = options.vue_WT;
    const vue_Scale = options.vue_Scale;
    const vue_Offset = options.vue_Offset;
    const vue_title = options.vue_title;
    const chapname = ref("");
    const usedpath = options.vue_Paths;
    return {
      items,
      currchapter,
      nextChapter,
      Pages,
      vue_RM,
      vue_Path,
      pathVisable,
      vue_WT,
      vue_Scale,
      vue_Offset,
      chapname,
      vue_title,
      pageIntersectEleArr,
      scrolltimeout: ref(true),
      usedpath
    };
  }
});
const _hoisted_1 = {
  key: 0,
  style: { "width": "50%" }
};
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "row justify-center q-py-md" };
const _hoisted_5 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_displayPage = resolveComponent("displayPage");
  return openBlock(), createBlock(QPage, {
    onClick: _ctx.handleClick,
    "style-fn": _ctx.myTweak
  }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(QInfiniteScroll, {
          onLoad: _ctx.onLoad,
          offset: _ctx.$q.screen.height * 5,
          ref: "infiniteScrol"
        }, {
          loading: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QSpinnerDots, {
                color: "primary",
                size: "40px"
              })
            ])
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass(_ctx.divClass)
              }, [
                _ctx.vue_Offset && _ctx.isBook2 ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.pageCount, (_page, index2) => {
                  return withDirectives((openBlock(), createBlock(_component_displayPage, {
                    pageNum: _ctx.vue_RM == "RTL" ? index2 % 2 ? index2 - 1 : index2 + 1 : index2,
                    chapterID: item.index,
                    key: index2,
                    "data-pid": index2,
                    "data-cid": item.index,
                    "data-pcount": item.pageCount,
                    vue_RM: _ctx.vue_RM,
                    vue_WT: _ctx.vue_WT,
                    vue_Scale: _ctx.vue_Scale,
                    vue_Offset: _ctx.vue_Offset,
                    imdata: _ctx.pagee(item.index, index2)
                  }, null, 8, ["pageNum", "chapterID", "data-pid", "data-cid", "data-pcount", "vue_RM", "vue_WT", "vue_Scale", "vue_Offset", "imdata"])), [
                    [Intersection, _ctx.onIntersection]
                  ]);
                }), 128)),
                createVNode(QCard, {
                  style: normalizeStyle([{ "height": "100vh", "max-height": "500px" }, _ctx.isBook2 ? `width:100%` : ``]),
                  class: "column text-center q-ml-md"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("h5", _hoisted_2, "End of " + toDisplayString(item.name), 1),
                    createBaseVNode("p", _hoisted_3, toDisplayString(item.index >= item.chapterCount ? "no chapters remaining" : "keep scrolling for the next chapter"), 1)
                  ]),
                  _: 2
                }, 1032, ["style"])
              ], 2);
            }), 128))
          ]),
          _: 1
        }, 8, ["onLoad", "offset"])
      ]),
      _ctx.pathVisable ? (openBlock(), createElementBlock("div", _hoisted_5, [
        createBaseVNode("div", {
          class: "fixed",
          style: normalizeStyle([{ "background-color": "rgba(0, 0, 255, 0.5)" }, _ctx.clipPathF])
        }, null, 4),
        createBaseVNode("div", {
          class: "fixed",
          style: normalizeStyle([{ "background-color": "rgba(255, 0, 0, 0.5)" }, _ctx.clipPathB])
        }, null, 4),
        _ctx.clipPathM ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed",
          style: normalizeStyle([{ "background-color": "rgba(0, 255, 0, 0.5)" }, _ctx.clipPathM])
        }, null, 4)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["onClick", "style-fn"]);
}
var chapterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "chapterPage.vue"]]);
export { chapterPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcHRlclBhZ2UuNzc2OGVlODQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlYWRlci9kaXNwbGF5UGFnZS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvY2hhcHRlclBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICA6Y2xhc3M9XCJ2dWVfU2NhbGUgJiYgIWlzQm9vayA/IGBgIDogYGRpc3BsYXlQYWdlYFwiXG4gICAgOnN0eWxlPVwiaW1nY29udHN0eWxlXCJcbiAgPlxuICAgIDxxLWltZ1xuICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGVcIlxuICAgICAgOnN0eWxlPVwiaW1nc3R5bGVcIlxuICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgOmNsYXNzPVwidnVlX1dUID8gKGlzQm9vazIgPyBgcS1teC1tZGAgOiBgcS1tYS1tZGApIDogYGBcIlxuICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgOmZpdD1cImltZ2ZpdFwiXG4gICAgICA6aW1nQ2xhc3M9XCJpbWdDbGFzc1wiXG4gICAgICA6aW1nU3R5bGU9XCJpbWdpbWdzdHlsZVwiXG4gICAgPlxuICAgIDwvcS1pbWc+XG4gICAgPHEtY2FyZFxuICAgICAgZmxhdFxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgd2lkdGg6IDEwMCVcIlxuICAgICAgdi1pZj1cIiFpbWdkYXRhXCJcbiAgICA+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgID5cbiAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgIDwvcS1jYXJkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnZGlzcGxheVBhZ2UnLFxuICBwcm9wczoge1xuICAgIHBhZ2VOdW06IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoYXB0ZXJJRDoge1xuICAgICAgdHlwZTogTnVtYmVyIGFzIFByb3BUeXBlPG51bWJlcj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdnVlX1JNOiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8c3RyaW5nPixcbiAgICAgIGRlZmF1bHQ6ICdSVEwnXG4gICAgfSxcbiAgICB2dWVfV1Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgdnVlX1NjYWxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuIGFzIFByb3BUeXBlPGJvb2xlYW4+LFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHZ1ZV9PZmZzZXQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW1kYXRhOiB7XG4gICAgICB0eXBlOiBQcm9taXNlIGFzIFByb3BUeXBlPFByb21pc2U8c3RyaW5nPj4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldEltZygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzQm9vaygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZSddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGlzQm9vazIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJ10uaW5jbHVkZXModGhpcy52dWVfUk0pO1xuICAgIH0sXG4gICAgaW1nc3R5bGUoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLnZ1ZV9TY2FsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Jvb2spIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3dpZHRoOiBmaXQtY29udGVudDsnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ3dpZHRoOiBmaXQtY29udGVudDsnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnd2lkdGg6MTAwJTtoZWlnaHQ6Zml0LWNvbnRlbnQ7JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnd2lkdGg6IGZpdC1jb250ZW50O21heC13aWR0aDoxMDAlJztcbiAgICB9LFxuICAgIGltZ0NsYXNzKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy52dWVfU2NhbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNCb29rKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3Rlc3QnO1xuICAgIH0sXG4gICAgaW1nZml0KCk6ICdmaWxsJyB8ICdjb3ZlcicgfCAnY29udGFpbicgfCAnbm9uZScgfCAnc2NhbGUtZG93bicgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMudnVlX1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdmaWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgfSxcbiAgICBpbWdpbWdzdHlsZSgpOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+IHtcbiAgICAgIGlmICh0aGlzLnZ1ZV9TY2FsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Jvb2spIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgICAgICByZXR1cm4geyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICdmaXQtY29udGVudCcgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnZml0LWNvbnRlbnQnIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGltZ2NvbnRzdHlsZSgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudnVlX1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bSAlIDIpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudnVlX1JNID09ICdSVEwnKSB7XG4gICAgICAgICAgICAgIHRtcCAqPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZ1ZV9PZmZzZXQpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgJ3dpZHRoOjUwJTtoZWlnaHQ6MTAwdmg7YWxpZ24taXRlbXM6JyArXG4gICAgICAgICAgICAgICh0bXAgPT0gLTEgPyAnc3RhcnQnIDogJ2VuZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlO2hlaWdodDoxMDB2aCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd3aWR0aDoxMDAlO2hlaWdodDpmaXQtY29udGVudDsnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICBjb25zdCBlcyA9XG4gICAgICAgICAgdGhpcy5wYWdlTnVtICUgMlxuICAgICAgICAgICAgPyB0aGlzLnZ1ZV9STSA9PSAnUlRMJ1xuICAgICAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgOiB0aGlzLnZ1ZV9STSA9PSAnUlRMJ1xuICAgICAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgICAgICA6ICdlbmQnO1xuICAgICAgICByZXR1cm4gJ3dpZHRoOjUwJTthbGlnbi1pdGVtczonICsgZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlJztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcGFnZU51bSgpIHtcbiAgICAgIHRoaXMuZ2V0SW1nKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0SW1nKCk6IHZvaWQge1xuICAgICAgdGhpcy5pbWRhdGE/LnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7IGltZ2RhdGE6IHJlZignJykgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XG4uZGlzcGxheVBhZ2UgLnRlc3RcbiAgd2lkdGg6IGZpdC1jb250ZW50XG4gIGhlaWdodDogZml0LWNvbnRlbnRcbiAgbWF4LXdpZHRoOiAxMDAlXG5cbi5kaXNwbGF5UGFnZSAucS1pbWdfX2NvbnRhaW5lclxuICBwb3NpdGlvbjogdW5zZXRcbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBoZWlnaHQ6IDEwMCVcblxuLmRpc3BsYXlQYWdlIC5xLWltZy5xLWltZy0tbWVudSA6Zmlyc3QtY2hpbGRcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50XG48L3N0eWxlPlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIiA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPGRpdj5cbiAgICAgIDxxLWluZmluaXRlLXNjcm9sbFxuICAgICAgICBAbG9hZD1cIm9uTG9hZFwiXG4gICAgICAgIDpvZmZzZXQ9XCIkcS5zY3JlZW4uaGVpZ2h0ICogNVwiXG4gICAgICAgIHJlZj1cImluZmluaXRlU2Nyb2xcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiIDpjbGFzcz1cImRpdkNsYXNzXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCVcIiB2LWlmPVwidnVlX09mZnNldCAmJiBpc0Jvb2syXCI+PC9kaXY+XG4gICAgICAgICAgPGRpc3BsYXlQYWdlXG4gICAgICAgICAgICA6cGFnZU51bT1cIlxuICAgICAgICAgICAgICB2dWVfUk0gPT0gJ1JUTCcgPyAoaW5kZXggJSAyID8gaW5kZXggLSAxIDogaW5kZXggKyAxKSA6IGluZGV4XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgOmNoYXB0ZXJJRD1cIml0ZW0uaW5kZXhcIlxuICAgICAgICAgICAgdi1mb3I9XCIoX3BhZ2UsIGluZGV4KSBpbiBpdGVtLnBhZ2VDb3VudFwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgOmRhdGEtcGlkPVwiaW5kZXhcIlxuICAgICAgICAgICAgOmRhdGEtY2lkPVwiaXRlbS5pbmRleFwiXG4gICAgICAgICAgICA6ZGF0YS1wY291bnQ9XCJpdGVtLnBhZ2VDb3VudFwiXG4gICAgICAgICAgICB2LWludGVyc2VjdGlvbj1cIm9uSW50ZXJzZWN0aW9uXCJcbiAgICAgICAgICAgIDp2dWVfUk09XCJ2dWVfUk1cIlxuICAgICAgICAgICAgOnZ1ZV9XVD1cInZ1ZV9XVFwiXG4gICAgICAgICAgICA6dnVlX1NjYWxlPVwidnVlX1NjYWxlXCJcbiAgICAgICAgICAgIDp2dWVfT2Zmc2V0PVwidnVlX09mZnNldFwiXG4gICAgICAgICAgICA6aW1kYXRhPVwicGFnZWUoaXRlbS5pbmRleCwgaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXNwbGF5UGFnZT5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwdmg7IG1heC1oZWlnaHQ6IDUwMHB4XCJcbiAgICAgICAgICAgIDpzdHlsZT1cImlzQm9vazIgPyBgd2lkdGg6MTAwJWAgOiBgYFwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbHVtbiB0ZXh0LWNlbnRlciBxLW1sLW1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjb2xcIj5FbmQgb2Yge3sgaXRlbS5uYW1lIH19PC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgaXRlbS5pbmRleCA+PSBpdGVtLmNoYXB0ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgPyAnbm8gY2hhcHRlcnMgcmVtYWluaW5nJ1xuICAgICAgICAgICAgICAgICAgOiAna2VlcCBzY3JvbGxpbmcgZm9yIHRoZSBuZXh0IGNoYXB0ZXInXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLXB5LW1kXCI+XG4gICAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJwYXRoVmlzYWJsZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImZpeGVkXCJcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KVwiXG4gICAgICAgIDpzdHlsZT1cImNsaXBQYXRoRlwiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZml4ZWRcIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpXCJcbiAgICAgICAgOnN0eWxlPVwiY2xpcFBhdGhCXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImNsaXBQYXRoTVwiXG4gICAgICAgIGNsYXNzPVwiZml4ZWRcIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjUpXCJcbiAgICAgICAgOnN0eWxlPVwiY2xpcFBhdGhNXCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgUUluZmluaXRlU2Nyb2xsIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNoYXB0ZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgZGlzcGxheVBhZ2UgZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVhZGVyL2Rpc3BsYXlQYWdlLnZ1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyTWV0YSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlYWRlci9yZWFkZXJTZXR0aW5ncyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL3VzZWZ1bGwnO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHBhdGhzczogcGF0aHMgPSB7XG4gIEw6IHtcbiAgICBmb3J3YXJkOiBbXG4gICAgICBbMTAwLCAxMDBdLFxuICAgICAgWzEwMCwgMF0sXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzY2LCA2Nl0sXG4gICAgICBbMCwgNjZdLFxuICAgICAgWzAsIDEwMF1cbiAgICBdLFxuICAgIGJhY2s6IFtcbiAgICAgIFszMywgMzNdLFxuICAgICAgWzY2LCAzM10sXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDY2XSxcbiAgICAgIFszMywgNjZdXG4gICAgXSxcbiAgICBtZW51OiBbXG4gICAgICBbMzMsIDMzXSxcbiAgICAgIFs2NiwgMzNdLFxuICAgICAgWzY2LCA2Nl0sXG4gICAgICBbMzMsIDY2XVxuICAgIF1cbiAgfSxcbiAgUkFMOiB7XG4gICAgZm9yd2FyZDogW1xuICAgICAgWzY2LCAwXSxcbiAgICAgIFsxMDAsIDBdLFxuICAgICAgWzEwMCwgMTAwXSxcbiAgICAgIFs2NiwgMTAwXVxuICAgIF0sXG4gICAgYmFjazogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzMzLCAwXSxcbiAgICAgIFszMywgMTAwXSxcbiAgICAgIFswLCAxMDBdXG4gICAgXSxcbiAgICBtZW51OiBbXG4gICAgICBbMzMsIDBdLFxuICAgICAgWzY2LCAwXSxcbiAgICAgIFs2NiwgMTAwXSxcbiAgICAgIFszMywgMTAwXVxuICAgIF1cbiAgfSxcbiAgS2luZGxlOiB7XG4gICAgZm9yd2FyZDogW1xuICAgICAgWzMzLCAzM10sXG4gICAgICBbMzMsIDEwMF0sXG4gICAgICBbMTAwLCAxMDBdLFxuICAgICAgWzEwMCwgMzNdXG4gICAgXSxcbiAgICBiYWNrOiBbXG4gICAgICBbMzMsIDMzXSxcbiAgICAgIFszMywgMTAwXSxcbiAgICAgIFswLCAxMDBdLFxuICAgICAgWzAsIDMzXVxuICAgIF0sXG4gICAgbWVudTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwMCwgMF0sXG4gICAgICBbMTAwLCAzM10sXG4gICAgICBbMCwgMzNdXG4gICAgXVxuICB9LFxuICBFZGdlOiB7XG4gICAgZm9yd2FyZDogW1xuICAgICAgWzEwMCwgMF0sXG4gICAgICBbMTAwLCAxMDBdLFxuICAgICAgWzAsIDEwMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMzMsIDBdLFxuICAgICAgWzMzLCAxMDBdLFxuICAgICAgWzY2LCAxMDBdLFxuICAgICAgWzY2LCAwXVxuICAgIF0sXG4gICAgYmFjazogW1xuICAgICAgWzMzLCA2Nl0sXG4gICAgICBbNjYsIDY2XSxcbiAgICAgIFs2NiwgMTAwXSxcbiAgICAgIFszMywgMTAwXVxuICAgIF0sXG4gICAgbWVudTogW1xuICAgICAgWzMzLCA2Nl0sXG4gICAgICBbNjYsIDY2XSxcbiAgICAgIFs2NiwgMF0sXG4gICAgICBbMzMsIDBdXG4gICAgXVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnY2hhcHRlclBhZ2UnLFxuICBjb21wb25lbnRzOiB7IGRpc3BsYXlQYWdlIH0sXG4gIGVtaXRzOiBbJ3NldFRpdGxlJywgJ29wZW5NZW51J10sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRJbWcoY2hhcHRlcklEOiBudW1iZXIsIHBhZ2VOdW06IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gZ2V0SW1nQmxvYihcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXVxuICAgICAgICB9L2NoYXB0ZXIvJHtjaGFwdGVySUR9L3BhZ2UvJHtwYWdlTnVtfT91c2VDYWNoZT0ke3RoaXMuJHN0b3JlR2V0KFxuICAgICAgICAgICd1c2VDYWNoZScsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApfWBcbiAgICAgICk7XG4gICAgfSxcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBvbkNoYXB0ZXIoZGF0YTogY2hhcHRlciwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGRhdGEpO1xuICAgICAgaWYgKHRoaXMuY3VycmNoYXB0ZXIgIT0gcGFyc2VJbnQoYCR7dGhpcy4kcm91dGUucGFyYW1zWydjaGFwdGVySUQnXX1gKSkge1xuICAgICAgICBpZiAodGhpcy4kcm91dGUubmFtZT8udG9TdHJpbmcoKSA9PSAnY2hhcHRlcnBhZ2UnKSB7XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXG4gICAgICAgICAgICBgL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHt0aGlzLmN1cnJjaGFwdGVyfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb25lKCk7XG4gICAgICB0aGlzLmNoYXBuYW1lID0gZGF0YS5uYW1lO1xuICAgICAgdGhpcy4kZW1pdCgnc2V0VGl0bGUnLCBgJHt0aGlzLnZ1ZV90aXRsZX0gJHtkYXRhLm5hbWV9YCk7XG4gICAgICBpZiAodGhpcy5jdXJyY2hhcHRlciA+PSBkYXRhLmNoYXB0ZXJDb3VudCkge1xuICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuc3RvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyY2hhcHRlcisrO1xuICAgICAgICB0aGlzLmdldE5leHRDaGFwKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQoX2luZGV4OiBudW1iZXIsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgIGlmICh0aGlzLm5leHRDaGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy4kYXBpXG4gICAgICAgICAgLmdldChcbiAgICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHt0aGlzLmN1cnJjaGFwdGVyfWBcbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZGF0YSB9OiBBeGlvc1Jlc3BvbnNlPGNoYXB0ZXI+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLlBhZ2VzW3RoaXMuY3VycmNoYXB0ZXJdID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucGFnZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5QYWdlc1t0aGlzLmN1cnJjaGFwdGVyXT8ucHVzaCh0aGlzLmdldEltZyhkYXRhLmluZGV4LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQ2hhcHRlcihkYXRhLCBkb25lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmV4dENoYXB0ZXIudGhlbigoZGF0YTogY2hhcHRlcikgPT4ge1xuICAgICAgICAgIHRoaXMub25DaGFwdGVyKGRhdGEsIGRvbmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE5leHRDaGFwKCkge1xuICAgICAgdGhpcy5uZXh0Q2hhcHRlciA9IHRoaXMuJGFwaS5nZXQoXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHt0aGlzLmN1cnJjaGFwdGVyfWBcbiAgICAgICk7XG4gICAgICB0aGlzLm5leHRDaGFwdGVyLnRoZW4oKGRhdGE6IGNoYXB0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5QYWdlc1t0aGlzLmN1cnJjaGFwdGVyXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucGFnZUNvdW50OyBpKyspIHtcbiAgICAgICAgICB0aGlzLlBhZ2VzW3RoaXMuY3VycmNoYXB0ZXJdPy5wdXNoKHRoaXMuZ2V0SW1nKGRhdGEuaW5kZXgsIGkpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkludGVyc2VjdGlvbihlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVudHJ5LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLnNldFJlYWRQYWdlcyhlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0Wydpc2ludCddID0gJ3RydWUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0Wydpc2ludCddID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0UmVhZFBhZ2VzKGVsZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuJGFwaS5wYXRjaEZvcm0oXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtlbGUuZGF0YXNldFsnY2lkJ119YCxcbiAgICAgICAge1xuICAgICAgICAgIGxhc3RQYWdlUmVhZDogYCR7cGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3BpZCddIGFzIHN0cmluZykgKyAxfWBcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3BpZCddIGFzIHN0cmluZykgPj1cbiAgICAgICAgcGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3Bjb3VudCddIGFzIHN0cmluZykgLSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kYXBpLnBhdGNoRm9ybShcbiAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7ZWxlLmRhdGFzZXRbJ2NpZCddfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVhZDogJ3RydWUnXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ29OZXh0SW50ZXJzZWN0b3I4MCgpIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0aW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IHRydWU7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgY29uc3QgdnAgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgYXMgVmlzdWFsVmlld3BvcnQ7XG4gICAgICAgIGNvbnN0IHRvcCA9IHZwLnBhZ2VUb3A7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHZwLnBhZ2VUb3AgKyB2cC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGludHNlY3QgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS4kZWwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICdbZGF0YS1pc2ludD10cnVlXSdcbiAgICAgICAgICApXG4gICAgICAgICkgYXMgSFRNTEVsZW1lbnRbXTtcblxuICAgICAgICBpZiAoaW50c2VjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZWxlID0gaW50c2VjdFtpbnRzZWN0Lmxlbmd0aCAtIDFdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGlmIChlbGUub2Zmc2V0VG9wID4gYm90dG9tIHx8IGVsZS5vZmZzZXRUb3AgPD0gdG9wKSB7XG4gICAgICAgICAgICBlbGUuZGF0YXNldFsnaXNpbnQnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdvTmV4dEludGVyc2VjdG9yODAoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWxlKSB7XG4gICAgICAgICAgICBpbnRzZWN0LmZvckVhY2goKGVsZW1lbjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVuLmRhdGFzZXRbJ2lzaW50J10gPSBlbGVtZW4gPT0gZWxlID8gJ3RydWUnIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICB0b3A6IGVsZS5vZmZzZXRUb3AsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsODAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsODAoKSB7XG4gICAgICBjb25zdCB2cCA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydCBhcyBWaXN1YWxWaWV3cG9ydDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogdnAucGFnZVRvcCArIHZwLmhlaWdodCAqIDAuOCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNjcm9sbFVwODAoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGx0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSB0cnVlO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICBjb25zdCB2cCA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydCBhcyBWaXN1YWxWaWV3cG9ydDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IHZwLnBhZ2VUb3AgLSB2cC5oZWlnaHQgKiAwLjgsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBrZXlIYW5kZWxlcihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT0gJyAnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nb05leHRJbnRlcnNlY3RvcjgwKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwYWdlZShjaGFwdGVySUQ6IG51bWJlciwgcGFnZU51bTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgIGNvbnN0IHRtcCA9IHRoaXMuUGFnZXNbY2hhcHRlcklEXSBhc1xuICAgICAgICB8IChQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQpW11cbiAgICAgICAgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAodG1wPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG1wMiA9IHRtcFtwYWdlTnVtXSBhcyBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0bXAyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB0bXAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWcoY2hhcHRlcklELCBwYWdlTnVtKTtcbiAgICB9LFxuICAgIGhhbmRsZUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wb2ludEluUG9seShcbiAgICAgICAgICBbZS54LCBlLnldLFxuICAgICAgICAgIHRoaXMucG9seVRvUE9MTFkocGF0aHNzW3RoaXMudXNlZHBhdGhdLmZvcndhcmQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmdvTmV4dEludGVyc2VjdG9yODAoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMucG9pbnRJblBvbHkoXG4gICAgICAgICAgW2UueCwgZS55XSxcbiAgICAgICAgICB0aGlzLnBvbHlUb1BPTExZKHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5iYWNrKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zY3JvbGxVcDgwKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwYXRoc3NbdGhpcy51c2VkcGF0aF0ubWVudSAmJlxuICAgICAgICB0aGlzLnBvaW50SW5Qb2x5KFxuICAgICAgICAgIFtlLngsIGUueV0sXG4gICAgICAgICAgdGhpcy5wb2x5VG9QT0xMWShwYXRoc3NbdGhpcy51c2VkcGF0aF0ubWVudSlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ29wZW5NZW51Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwb2x5VG9QT0xMWShcbiAgICAgIHBvbGx5OiBbbnVtYmVyLCBudW1iZXJdW10gfCB1bmRlZmluZWRcbiAgICApOiBbbnVtYmVyLCBudW1iZXJdW10gfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHBvbGx5ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBwb2xseS5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgKHBvaW50WzBdICogd2luZG93LmlubmVyV2lkdGgpIC8gMTAwLFxuICAgICAgICAgIChwb2ludFsxXSAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAxMDBcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcG9pbnRJblBvbHkoXG4gICAgICBwb2ludDogW251bWJlciwgbnVtYmVyXSxcbiAgICAgIHZzOiBbbnVtYmVyLCBudW1iZXJdW10gfCB1bmRlZmluZWRcbiAgICApOiBib29sZWFuIHtcbiAgICAgIC8vIHJheS1jYXN0aW5nIGFsZ29yaXRobSBiYXNlZCBvblxuICAgICAgLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1L1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sL3BucG9seS5odG1sXG4gICAgICBpZiAodnMgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCB4ID0gcG9pbnRbMF0sXG4gICAgICAgIHkgPSBwb2ludFsxXTtcblxuICAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIGNvbnN0IGlpID0gdnNbaV0gYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICAgICAgY29uc3QgamogPSB2c1tqXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgICBjb25zdCB4aSA9IGlpWzBdLFxuICAgICAgICAgIHlpID0gaWlbMV07XG4gICAgICAgIGNvbnN0IHhqID0gampbMF0sXG4gICAgICAgICAgeWogPSBqalsxXTtcblxuICAgICAgICBjb25zdCBpbnRlcnNlY3QgPVxuICAgICAgICAgIHlpID4geSAhPSB5aiA+IHkgJiYgeCA8ICgoeGogLSB4aSkgKiAoeSAtIHlpKSkgLyAoeWogLSB5aSkgKyB4aTtcbiAgICAgICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc2lkZTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUhhbmRlbGVyKTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5SGFuZGVsZXIpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzQm9vaygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZSddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGlzQm9vazIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJ10uaW5jbHVkZXModGhpcy52dWVfUk0pO1xuICAgIH0sXG4gICAgZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgcmV0dXJuICdyb3cgaXRlbXMtY2VudGVyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIGNsaXBQYXRoRigpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5mb3J3YXJkO1xuICAgICAgcmV0dXJuIGBjbGlwLXBhdGg6IHBvbHlnb24oJHtwYXRoXG4gICAgICAgIC5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAubWFwKChwZXJzZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwZXJzZW50ID09IDAgPyBwZXJzZW50LnRvU3RyaW5nKCkgOiBgJHtwZXJzZW50fSVgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9KTt0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7YDtcbiAgICB9LFxuICAgIGNsaXBQYXRoQigpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5iYWNrO1xuICAgICAgcmV0dXJuIGBjbGlwLXBhdGg6IHBvbHlnb24oJHtwYXRoXG4gICAgICAgIC5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAubWFwKChwZXJzZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwZXJzZW50ID09IDAgPyBwZXJzZW50LnRvU3RyaW5nKCkgOiBgJHtwZXJzZW50fSVgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9KTt0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7YDtcbiAgICB9LFxuICAgIGNsaXBQYXRoTSgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5tZW51O1xuICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuICAgICAgcmV0dXJuIGBjbGlwLXBhdGg6IHBvbHlnb24oJHtwYXRoXG4gICAgICAgIC5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAubWFwKChwZXJzZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwZXJzZW50ID09IDAgPyBwZXJzZW50LnRvU3RyaW5nKCkgOiBgJHtwZXJzZW50fSVgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9KTt0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7YDtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdnVlX3RpdGxlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnc2V0VGl0bGUnLCBgJHt0aGlzLmNoYXBuYW1lfSAke3RoaXMudnVlX3RpdGxlfWApO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgcGFnZUludGVyc2VjdEVsZUFyciA9IHJlZig8SFRNTEVsZW1lbnRbXT5bXSk7XG4gICAgY29uc3QgaXRlbXMgPSByZWYoPGNoYXB0ZXJbXT5bXSk7XG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuICAgIGNvbnN0IGN1cnJjaGFwdGVyID0gcmVmKDxudW1iZXI+cGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydjaGFwdGVySUQnXX1gKSk7XG4gICAgY29uc3QgbmV4dENoYXB0ZXIgPSByZWYoPFByb21pc2U8Y2hhcHRlcj4gfCB1bmRlZmluZWQ+dW5kZWZpbmVkKTtcbiAgICBjb25zdCBQYWdlcyA9IHJlZig8KFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZClbXVtdPltdKTtcbiAgICBjb25zdCBvcHRpb25zID0gY2hhcHRlck1ldGEocGFyc2VJbnQoYCR7cm91dGUucGFyYW1zWydtYW5nYUlEJ119YCkpO1xuICAgIGNvbnN0IHZ1ZV9STSA9IG9wdGlvbnMudnVlX1JNO1xuICAgIGNvbnN0IHZ1ZV9QYXRoID0gb3B0aW9ucy52dWVfUGF0aHM7XG4gICAgY29uc3QgcGF0aFZpc2FibGUgPSBvcHRpb25zLnBhdGhWaXNhYmxlO1xuICAgIGNvbnN0IHZ1ZV9XVCA9IG9wdGlvbnMudnVlX1dUO1xuICAgIGNvbnN0IHZ1ZV9TY2FsZSA9IG9wdGlvbnMudnVlX1NjYWxlO1xuICAgIGNvbnN0IHZ1ZV9PZmZzZXQgPSBvcHRpb25zLnZ1ZV9PZmZzZXQ7XG4gICAgY29uc3QgdnVlX3RpdGxlID0gb3B0aW9ucy52dWVfdGl0bGU7XG4gICAgY29uc3QgY2hhcG5hbWUgPSByZWYoPHN0cmluZz4nJyk7XG4gICAgY29uc3QgdXNlZHBhdGggPSBvcHRpb25zLnZ1ZV9QYXRocztcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXMsXG4gICAgICBjdXJyY2hhcHRlcixcbiAgICAgIG5leHRDaGFwdGVyLFxuICAgICAgUGFnZXMsXG4gICAgICB2dWVfUk0sXG4gICAgICB2dWVfUGF0aCxcbiAgICAgIHBhdGhWaXNhYmxlLFxuICAgICAgdnVlX1dULFxuICAgICAgdnVlX1NjYWxlLFxuICAgICAgdnVlX09mZnNldCxcbiAgICAgIGNoYXBuYW1lLFxuICAgICAgdnVlX3RpdGxlLFxuICAgICAgcGFnZUludGVyc2VjdEVsZUFycixcbiAgICAgIHNjcm9sbHRpbWVvdXQ6IHJlZih0cnVlKSxcbiAgICAgIHVzZWRwYXRoXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZVZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfd2l0aEN0eCIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsImluZGV4IiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7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QUNBLE1BQU07QUFBQSxNQUNKLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDUCxDQUFDLElBQUksRUFBRTtBQUFBLE1BQ1AsQ0FBQyxJQUFJLENBQUM7QUFBQSxNQUNOLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDTCxDQUFDLEdBQUcsRUFBRTtBQUFBLE1BQ04sQ0FBQyxJQUFJLEVBQUU7QUFBQSxJQUNUO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixDQUFDLElBQUksRUFBRTtBQUFBLE1BQ1AsQ0FBQyxJQUFJLEVBQUU7QUFBQSxNQUNQLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDUCxDQUFDLElBQUksRUFBRTtBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ04sQ0FBQyxLQUFLLENBQUM7QUFBQSxNQUNQLENBQUMsS0FBSyxHQUFHO0FBQUEsTUFDVCxDQUFDLElBQUksR0FBRztBQUFBLElBQ1Y7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDTCxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ04sQ0FBQyxJQUFJLEdBQUc7QUFBQSxNQUNSLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVDtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osQ0FBQyxJQUFJLENBQUM7QUFBQSxNQUNOLENBQUMsSUFBSSxDQUFDO0FBQUEsTUFDTixDQUFDLElBQUksR0FBRztBQUFBLE1BQ1IsQ0FBQyxJQUFJLEdBQUc7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsQ0FBQyxJQUFJLEVBQUU7QUFBQSxNQUNQLENBQUMsSUFBSSxHQUFHO0FBQUEsTUFDUixDQUFDLEtBQUssR0FBRztBQUFBLE1BQ1QsQ0FBQyxLQUFLLEVBQUU7QUFBQSxJQUNWO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixDQUFDLElBQUksRUFBRTtBQUFBLE1BQ1AsQ0FBQyxJ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
