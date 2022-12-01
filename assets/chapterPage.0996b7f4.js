import { Q as QCard } from "./QCard.a457d3f1.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.bd7b4dda.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.d15024d7.js";
import { Q as QPage } from "./QPage.2a653745.js";
import { I as Intersection } from "./Intersection.d463dc89.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, m as createVNode, a6 as normalizeStyle, q as normalizeClass, j as createBlock, k as withCtx, n as createCommentVNode, a5 as useRoute, s as resolveComponent, u as createBaseVNode, x as renderList, F as Fragment, B as withDirectives, t as toDisplayString } from "./index.c15e704f.js";
import { Q as QImg, g as getImgBlob } from "./usefull.6349588e.js";
import { Q as QInnerLoading } from "./QInnerLoading.5b5d73c7.js";
import { c as chapterMeta } from "./readerSettings.74dcf6d8.js";
import "./use-dark.97ac6897.js";
import "./QSpinner.dc7e097a.js";
import "./dom.617e2098.js";
import "./scroll.d31d6ae2.js";
import "./fetcher.10190d88.js";
import "./StoreStuff.9c9e2ee5.js";
import "./use-transition.db025f57.js";
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
        this.$fetchJSON(
          `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${this.currchapter}`
        ).then((data) => {
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
      this.nextChapter = this.$fetchJSON(
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
      const fd = new FormData();
      fd.append(
        "lastPageRead",
        `${parseInt(ele.dataset["pid"]) + 1}`
      );
      this.$fetch(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${ele.dataset["cid"]}`,
        {
          method: "PATCH",
          body: fd
        }
      );
      if (parseInt(ele.dataset["pid"]) >= parseInt(ele.dataset["pcount"]) - 1) {
        const fd2 = new FormData();
        fd2.append("read", "true");
        this.$fetch(
          `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${ele.dataset["cid"]}`,
          {
            method: "PATCH",
            body: fd2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcHRlclBhZ2UuMDk5NmI3ZjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlYWRlci9kaXNwbGF5UGFnZS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvY2hhcHRlclBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICA6Y2xhc3M9XCJ2dWVfU2NhbGUgJiYgIWlzQm9vayA/IGBgIDogYGRpc3BsYXlQYWdlYFwiXG4gICAgOnN0eWxlPVwiaW1nY29udHN0eWxlXCJcbiAgPlxuICAgIDxxLWltZ1xuICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGVcIlxuICAgICAgOnN0eWxlPVwiaW1nc3R5bGVcIlxuICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgOmNsYXNzPVwidnVlX1dUID8gKGlzQm9vazIgPyBgcS1teC1tZGAgOiBgcS1tYS1tZGApIDogYGBcIlxuICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgOmZpdD1cImltZ2ZpdFwiXG4gICAgICA6aW1nQ2xhc3M9XCJpbWdDbGFzc1wiXG4gICAgICA6aW1nU3R5bGU9XCJpbWdpbWdzdHlsZVwiXG4gICAgPlxuICAgIDwvcS1pbWc+XG4gICAgPHEtY2FyZFxuICAgICAgZmxhdFxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgd2lkdGg6IDEwMCVcIlxuICAgICAgdi1pZj1cIiFpbWdkYXRhXCJcbiAgICA+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgID5cbiAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgIDwvcS1jYXJkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnZGlzcGxheVBhZ2UnLFxuICBwcm9wczoge1xuICAgIHBhZ2VOdW06IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoYXB0ZXJJRDoge1xuICAgICAgdHlwZTogTnVtYmVyIGFzIFByb3BUeXBlPG51bWJlcj4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdnVlX1JNOiB7XG4gICAgICB0eXBlOiBTdHJpbmcgYXMgUHJvcFR5cGU8c3RyaW5nPixcbiAgICAgIGRlZmF1bHQ6ICdSVEwnXG4gICAgfSxcbiAgICB2dWVfV1Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgdnVlX1NjYWxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuIGFzIFByb3BUeXBlPGJvb2xlYW4+LFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHZ1ZV9PZmZzZXQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4gYXMgUHJvcFR5cGU8Ym9vbGVhbj4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW1kYXRhOiB7XG4gICAgICB0eXBlOiBQcm9taXNlIGFzIFByb3BUeXBlPFByb21pc2U8c3RyaW5nPj4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldEltZygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzQm9vaygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZSddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGlzQm9vazIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJ10uaW5jbHVkZXModGhpcy52dWVfUk0pO1xuICAgIH0sXG4gICAgaW1nc3R5bGUoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLnZ1ZV9TY2FsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Jvb2spIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3dpZHRoOiBmaXQtY29udGVudDsnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ3dpZHRoOiBmaXQtY29udGVudDsnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnd2lkdGg6MTAwJTtoZWlnaHQ6Zml0LWNvbnRlbnQ7JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnd2lkdGg6IGZpdC1jb250ZW50O21heC13aWR0aDoxMDAlJztcbiAgICB9LFxuICAgIGltZ0NsYXNzKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy52dWVfU2NhbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNCb29rKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3Rlc3QnO1xuICAgIH0sXG4gICAgaW1nZml0KCk6ICdmaWxsJyB8ICdjb3ZlcicgfCAnY29udGFpbicgfCAnbm9uZScgfCAnc2NhbGUtZG93bicgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMudnVlX1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdmaWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgfSxcbiAgICBpbWdpbWdzdHlsZSgpOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+IHtcbiAgICAgIGlmICh0aGlzLnZ1ZV9TY2FsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Jvb2spIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgICAgICByZXR1cm4geyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICdmaXQtY29udGVudCcgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnZml0LWNvbnRlbnQnIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGltZ2NvbnRzdHlsZSgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudnVlX1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bSAlIDIpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudnVlX1JNID09ICdSVEwnKSB7XG4gICAgICAgICAgICAgIHRtcCAqPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZ1ZV9PZmZzZXQpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgJ3dpZHRoOjUwJTtoZWlnaHQ6MTAwdmg7YWxpZ24taXRlbXM6JyArXG4gICAgICAgICAgICAgICh0bXAgPT0gLTEgPyAnc3RhcnQnIDogJ2VuZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlO2hlaWdodDoxMDB2aCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd3aWR0aDoxMDAlO2hlaWdodDpmaXQtY29udGVudDsnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICBjb25zdCBlcyA9XG4gICAgICAgICAgdGhpcy5wYWdlTnVtICUgMlxuICAgICAgICAgICAgPyB0aGlzLnZ1ZV9STSA9PSAnUlRMJ1xuICAgICAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgOiB0aGlzLnZ1ZV9STSA9PSAnUlRMJ1xuICAgICAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgICAgICA6ICdlbmQnO1xuICAgICAgICByZXR1cm4gJ3dpZHRoOjUwJTthbGlnbi1pdGVtczonICsgZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlJztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcGFnZU51bSgpIHtcbiAgICAgIHRoaXMuZ2V0SW1nKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0SW1nKCk6IHZvaWQge1xuICAgICAgdGhpcy5pbWRhdGE/LnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7IGltZ2RhdGE6IHJlZignJykgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XG4uZGlzcGxheVBhZ2UgLnRlc3RcbiAgd2lkdGg6IGZpdC1jb250ZW50XG4gIGhlaWdodDogZml0LWNvbnRlbnRcbiAgbWF4LXdpZHRoOiAxMDAlXG5cbi5kaXNwbGF5UGFnZSAucS1pbWdfX2NvbnRhaW5lclxuICBwb3NpdGlvbjogdW5zZXRcbiAgZGlzcGxheTogZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICBoZWlnaHQ6IDEwMCVcblxuLmRpc3BsYXlQYWdlIC5xLWltZy5xLWltZy0tbWVudSA6Zmlyc3QtY2hpbGRcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50XG48L3N0eWxlPlxuIiwiPCEtLSAvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi8gLS0+XG48dGVtcGxhdGU+XG4gIDxxLXBhZ2UgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIiA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPGRpdj5cbiAgICAgIDxxLWluZmluaXRlLXNjcm9sbFxuICAgICAgICBAbG9hZD1cIm9uTG9hZFwiXG4gICAgICAgIDpvZmZzZXQ9XCIkcS5zY3JlZW4uaGVpZ2h0ICogNVwiXG4gICAgICAgIHJlZj1cImluZmluaXRlU2Nyb2xcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiIDpjbGFzcz1cImRpdkNsYXNzXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCVcIiB2LWlmPVwidnVlX09mZnNldCAmJiBpc0Jvb2syXCI+PC9kaXY+XG4gICAgICAgICAgPGRpc3BsYXlQYWdlXG4gICAgICAgICAgICA6cGFnZU51bT1cIlxuICAgICAgICAgICAgICB2dWVfUk0gPT0gJ1JUTCcgPyAoaW5kZXggJSAyID8gaW5kZXggLSAxIDogaW5kZXggKyAxKSA6IGluZGV4XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgOmNoYXB0ZXJJRD1cIml0ZW0uaW5kZXhcIlxuICAgICAgICAgICAgdi1mb3I9XCIoX3BhZ2UsIGluZGV4KSBpbiBpdGVtLnBhZ2VDb3VudFwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgOmRhdGEtcGlkPVwiaW5kZXhcIlxuICAgICAgICAgICAgOmRhdGEtY2lkPVwiaXRlbS5pbmRleFwiXG4gICAgICAgICAgICA6ZGF0YS1wY291bnQ9XCJpdGVtLnBhZ2VDb3VudFwiXG4gICAgICAgICAgICB2LWludGVyc2VjdGlvbj1cIm9uSW50ZXJzZWN0aW9uXCJcbiAgICAgICAgICAgIDp2dWVfUk09XCJ2dWVfUk1cIlxuICAgICAgICAgICAgOnZ1ZV9XVD1cInZ1ZV9XVFwiXG4gICAgICAgICAgICA6dnVlX1NjYWxlPVwidnVlX1NjYWxlXCJcbiAgICAgICAgICAgIDp2dWVfT2Zmc2V0PVwidnVlX09mZnNldFwiXG4gICAgICAgICAgICA6aW1kYXRhPVwicGFnZWUoaXRlbS5pbmRleCwgaW5kZXgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXNwbGF5UGFnZT5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwdmg7IG1heC1oZWlnaHQ6IDUwMHB4XCJcbiAgICAgICAgICAgIDpzdHlsZT1cImlzQm9vazIgPyBgd2lkdGg6MTAwJWAgOiBgYFwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbHVtbiB0ZXh0LWNlbnRlciBxLW1sLW1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjb2xcIj5FbmQgb2Yge3sgaXRlbS5uYW1lIH19PC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgaXRlbS5pbmRleCA+PSBpdGVtLmNoYXB0ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgPyAnbm8gY2hhcHRlcnMgcmVtYWluaW5nJ1xuICAgICAgICAgICAgICAgICAgOiAna2VlcCBzY3JvbGxpbmcgZm9yIHRoZSBuZXh0IGNoYXB0ZXInXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLXB5LW1kXCI+XG4gICAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJwYXRoVmlzYWJsZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImZpeGVkXCJcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KVwiXG4gICAgICAgIDpzdHlsZT1cImNsaXBQYXRoRlwiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZml4ZWRcIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpXCJcbiAgICAgICAgOnN0eWxlPVwiY2xpcFBhdGhCXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImNsaXBQYXRoTVwiXG4gICAgICAgIGNsYXNzPVwiZml4ZWRcIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjUpXCJcbiAgICAgICAgOnN0eWxlPVwiY2xpcFBhdGhNXCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgUUluZmluaXRlU2Nyb2xsIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNoYXB0ZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgZGlzcGxheVBhZ2UgZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVhZGVyL2Rpc3BsYXlQYWdlLnZ1ZSc7XG5pbXBvcnQgeyBjaGFwdGVyTWV0YSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlYWRlci9yZWFkZXJTZXR0aW5ncyc7XG5pbXBvcnQgeyBnZXRJbWdCbG9iIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvZ2xvYmFsL3VzZWZ1bGwnO1xuaW1wb3J0IHsgcGF0aHMgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvbW9kZWxzJztcblxuY29uc3QgcGF0aHNzOiBwYXRocyA9IHtcbiAgTDoge1xuICAgIGZvcndhcmQ6IFtcbiAgICAgIFsxMDAsIDEwMF0sXG4gICAgICBbMTAwLCAwXSxcbiAgICAgIFs2NiwgMF0sXG4gICAgICBbNjYsIDY2XSxcbiAgICAgIFswLCA2Nl0sXG4gICAgICBbMCwgMTAwXVxuICAgIF0sXG4gICAgYmFjazogW1xuICAgICAgWzMzLCAzM10sXG4gICAgICBbNjYsIDMzXSxcbiAgICAgIFs2NiwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNjZdLFxuICAgICAgWzMzLCA2Nl1cbiAgICBdLFxuICAgIG1lbnU6IFtcbiAgICAgIFszMywgMzNdLFxuICAgICAgWzY2LCAzM10sXG4gICAgICBbNjYsIDY2XSxcbiAgICAgIFszMywgNjZdXG4gICAgXVxuICB9LFxuICBSQUw6IHtcbiAgICBmb3J3YXJkOiBbXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzEwMCwgMF0sXG4gICAgICBbMTAwLCAxMDBdLFxuICAgICAgWzY2LCAxMDBdXG4gICAgXSxcbiAgICBiYWNrOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMzMsIDBdLFxuICAgICAgWzMzLCAxMDBdLFxuICAgICAgWzAsIDEwMF1cbiAgICBdLFxuICAgIG1lbnU6IFtcbiAgICAgIFszMywgMF0sXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzY2LCAxMDBdLFxuICAgICAgWzMzLCAxMDBdXG4gICAgXVxuICB9LFxuICBLaW5kbGU6IHtcbiAgICBmb3J3YXJkOiBbXG4gICAgICBbMzMsIDMzXSxcbiAgICAgIFszMywgMTAwXSxcbiAgICAgIFsxMDAsIDEwMF0sXG4gICAgICBbMTAwLCAzM11cbiAgICBdLFxuICAgIGJhY2s6IFtcbiAgICAgIFszMywgMzNdLFxuICAgICAgWzMzLCAxMDBdLFxuICAgICAgWzAsIDEwMF0sXG4gICAgICBbMCwgMzNdXG4gICAgXSxcbiAgICBtZW51OiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAwLCAwXSxcbiAgICAgIFsxMDAsIDMzXSxcbiAgICAgIFswLCAzM11cbiAgICBdXG4gIH0sXG4gIEVkZ2U6IHtcbiAgICBmb3J3YXJkOiBbXG4gICAgICBbMTAwLCAwXSxcbiAgICAgIFsxMDAsIDEwMF0sXG4gICAgICBbMCwgMTAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFszMywgMF0sXG4gICAgICBbMzMsIDEwMF0sXG4gICAgICBbNjYsIDEwMF0sXG4gICAgICBbNjYsIDBdXG4gICAgXSxcbiAgICBiYWNrOiBbXG4gICAgICBbMzMsIDY2XSxcbiAgICAgIFs2NiwgNjZdLFxuICAgICAgWzY2LCAxMDBdLFxuICAgICAgWzMzLCAxMDBdXG4gICAgXSxcbiAgICBtZW51OiBbXG4gICAgICBbMzMsIDY2XSxcbiAgICAgIFs2NiwgNjZdLFxuICAgICAgWzY2LCAwXSxcbiAgICAgIFszMywgMF1cbiAgICBdXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdjaGFwdGVyUGFnZScsXG4gIGNvbXBvbmVudHM6IHsgZGlzcGxheVBhZ2UgfSxcbiAgZW1pdHM6IFsnc2V0VGl0bGUnLCAnb3Blbk1lbnUnXSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldEltZyhjaGFwdGVySUQ6IG51bWJlciwgcGFnZU51bTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBnZXRJbWdCbG9iKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke1xuICAgICAgICAgIHRoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddXG4gICAgICAgIH0vY2hhcHRlci8ke2NoYXB0ZXJJRH0vcGFnZS8ke3BhZ2VOdW19P3VzZUNhY2hlPSR7dGhpcy4kc3RvcmVHZXQoXG4gICAgICAgICAgJ3VzZUNhY2hlJyxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICl9YFxuICAgICAgKTtcbiAgICB9LFxuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9uQ2hhcHRlcihkYXRhOiBjaGFwdGVyLCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goZGF0YSk7XG4gICAgICBpZiAodGhpcy5jdXJyY2hhcHRlciAhPSBwYXJzZUludChgJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ2NoYXB0ZXJJRCddfWApKSB7XG4gICAgICAgIGlmICh0aGlzLiRyb3V0ZS5uYW1lPy50b1N0cmluZygpID09ICdjaGFwdGVycGFnZScpIHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucmVwbGFjZShcbiAgICAgICAgICAgIGAvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke3RoaXMuY3VycmNoYXB0ZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvbmUoKTtcbiAgICAgIHRoaXMuY2hhcG5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICB0aGlzLiRlbWl0KCdzZXRUaXRsZScsIGAke3RoaXMudnVlX3RpdGxlfSAke2RhdGEubmFtZX1gKTtcbiAgICAgIGlmICh0aGlzLmN1cnJjaGFwdGVyID49IGRhdGEuY2hhcHRlckNvdW50KSB7XG4gICAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS5zdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJjaGFwdGVyKys7XG4gICAgICAgIHRoaXMuZ2V0TmV4dENoYXAoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9hZChfaW5kZXg6IG51bWJlciwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgaWYgKHRoaXMubmV4dENoYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLiRmZXRjaEpTT04oXG4gICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke3RoaXMuY3VycmNoYXB0ZXJ9YFxuICAgICAgICApLnRoZW4oKGRhdGE6IGNoYXB0ZXIpID0+IHtcbiAgICAgICAgICB0aGlzLlBhZ2VzW3RoaXMuY3VycmNoYXB0ZXJdID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnBhZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLlBhZ2VzW3RoaXMuY3VycmNoYXB0ZXJdPy5wdXNoKHRoaXMuZ2V0SW1nKGRhdGEuaW5kZXgsIGkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vbkNoYXB0ZXIoZGF0YSwgZG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0Q2hhcHRlci50aGVuKChkYXRhOiBjaGFwdGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNoYXB0ZXIoZGF0YSwgZG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TmV4dENoYXAoKSB7XG4gICAgICB0aGlzLm5leHRDaGFwdGVyID0gdGhpcy4kZmV0Y2hKU09OKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7dGhpcy5jdXJyY2hhcHRlcn1gXG4gICAgICApO1xuICAgICAgdGhpcy5uZXh0Q2hhcHRlci50aGVuKChkYXRhOiBjaGFwdGVyKSA9PiB7XG4gICAgICAgIHRoaXMuUGFnZXNbdGhpcy5jdXJyY2hhcHRlcl0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnBhZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5QYWdlc1t0aGlzLmN1cnJjaGFwdGVyXT8ucHVzaCh0aGlzLmdldEltZyhkYXRhLmluZGV4LCBpKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25JbnRlcnNlY3Rpb24oZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbnRyeS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRSZWFkUGFnZXMoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFsnaXNpbnQnXSA9ICd0cnVlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFsnaXNpbnQnXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFJlYWRQYWdlcyhlbGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmQuYXBwZW5kKFxuICAgICAgICAnbGFzdFBhZ2VSZWFkJyxcbiAgICAgICAgYCR7cGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3BpZCddIGFzIHN0cmluZykgKyAxfWBcbiAgICAgICk7XG4gICAgICB0aGlzLiRmZXRjaChcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke2VsZS5kYXRhc2V0WydjaWQnXX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgIGJvZHk6IGZkXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIHBhcnNlSW50KGVsZS5kYXRhc2V0WydwaWQnXSBhcyBzdHJpbmcpID49XG4gICAgICAgIHBhcnNlSW50KGVsZS5kYXRhc2V0WydwY291bnQnXSBhcyBzdHJpbmcpIC0gMVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZkLmFwcGVuZCgncmVhZCcsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHtlbGUuZGF0YXNldFsnY2lkJ119YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBib2R5OiBmZFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvTmV4dEludGVyc2VjdG9yODAoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGx0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSB0cnVlO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIGNvbnN0IHZwID0gd2luZG93LnZpc3VhbFZpZXdwb3J0IGFzIFZpc3VhbFZpZXdwb3J0O1xuICAgICAgICBjb25zdCB0b3AgPSB2cC5wYWdlVG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB2cC5wYWdlVG9wICsgdnAuaGVpZ2h0O1xuICAgICAgICBjb25zdCBpbnRzZWN0ID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnW2RhdGEtaXNpbnQ9dHJ1ZV0nXG4gICAgICAgICAgKVxuICAgICAgICApIGFzIEhUTUxFbGVtZW50W107XG5cbiAgICAgICAgaWYgKGludHNlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGVsZSA9IGludHNlY3RbaW50c2VjdC5sZW5ndGggLSAxXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBpZiAoZWxlLm9mZnNldFRvcCA+IGJvdHRvbSB8fCBlbGUub2Zmc2V0VG9wIDw9IHRvcCkge1xuICAgICAgICAgICAgZWxlLmRhdGFzZXRbJ2lzaW50J10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nb05leHRJbnRlcnNlY3RvcjgwKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZSkge1xuICAgICAgICAgICAgaW50c2VjdC5mb3JFYWNoKChlbGVtZW46IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbi5kYXRhc2V0Wydpc2ludCddID0gZWxlbWVuID09IGVsZSA/ICd0cnVlJyA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgdG9wOiBlbGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbDgwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbDgwKCkge1xuICAgICAgY29uc3QgdnAgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgYXMgVmlzdWFsVmlld3BvcnQ7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHZwLnBhZ2VUb3AgKyB2cC5oZWlnaHQgKiAwLjgsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzY3JvbGxVcDgwKCkge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsdGltZW91dCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zY3JvbGx0aW1lb3V0ID0gdHJ1ZTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgY29uc3QgdnAgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgYXMgVmlzdWFsVmlld3BvcnQ7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiB2cC5wYWdlVG9wIC0gdnAuaGVpZ2h0ICogMC44LFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5SGFuZGVsZXIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5ID09ICcgJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ29OZXh0SW50ZXJzZWN0b3I4MCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFnZWUoY2hhcHRlcklEOiBudW1iZXIsIHBhZ2VOdW06IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICBjb25zdCB0bXAgPSB0aGlzLlBhZ2VzW2NoYXB0ZXJJRF0gYXNcbiAgICAgICAgfCAoUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkKVtdXG4gICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKHRtcD8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRtcDIgPSB0bXBbcGFnZU51bV0gYXMgUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAodG1wMiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdG1wMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1nKGNoYXB0ZXJJRCwgcGFnZU51bSk7XG4gICAgfSxcbiAgICBoYW5kbGVDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucG9pbnRJblBvbHkoXG4gICAgICAgICAgW2UueCwgZS55XSxcbiAgICAgICAgICB0aGlzLnBvbHlUb1BPTExZKHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5mb3J3YXJkKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5nb05leHRJbnRlcnNlY3RvcjgwKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnBvaW50SW5Qb2x5KFxuICAgICAgICAgIFtlLngsIGUueV0sXG4gICAgICAgICAgdGhpcy5wb2x5VG9QT0xMWShwYXRoc3NbdGhpcy51c2VkcGF0aF0uYmFjaylcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVXA4MCgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcGF0aHNzW3RoaXMudXNlZHBhdGhdLm1lbnUgJiZcbiAgICAgICAgdGhpcy5wb2ludEluUG9seShcbiAgICAgICAgICBbZS54LCBlLnldLFxuICAgICAgICAgIHRoaXMucG9seVRvUE9MTFkocGF0aHNzW3RoaXMudXNlZHBhdGhdLm1lbnUpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLiRlbWl0KCdvcGVuTWVudScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcG9seVRvUE9MTFkoXG4gICAgICBwb2xseTogW251bWJlciwgbnVtYmVyXVtdIHwgdW5kZWZpbmVkXG4gICAgKTogW251bWJlciwgbnVtYmVyXVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmIChwb2xseSA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gcG9sbHkubWFwKChwb2ludCkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIChwb2ludFswXSAqIHdpbmRvdy5pbm5lcldpZHRoKSAvIDEwMCxcbiAgICAgICAgICAocG9pbnRbMV0gKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMTAwXG4gICAgICAgIF07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHBvaW50SW5Qb2x5KFxuICAgICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICB2czogW251bWJlciwgbnVtYmVyXVtdIHwgdW5kZWZpbmVkXG4gICAgKTogYm9vbGVhbiB7XG4gICAgICAvLyByYXktY2FzdGluZyBhbGdvcml0aG0gYmFzZWQgb25cbiAgICAgIC8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbC9wbnBvbHkuaHRtbFxuICAgICAgaWYgKHZzID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgeCA9IHBvaW50WzBdLFxuICAgICAgICB5ID0gcG9pbnRbMV07XG5cbiAgICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gdnMubGVuZ3RoIC0gMTsgaSA8IHZzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgICBjb25zdCBpaSA9IHZzW2ldIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgICAgIGNvbnN0IGpqID0gdnNbal0gYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICAgICAgY29uc3QgeGkgPSBpaVswXSxcbiAgICAgICAgICB5aSA9IGlpWzFdO1xuICAgICAgICBjb25zdCB4aiA9IGpqWzBdLFxuICAgICAgICAgIHlqID0gampbMV07XG5cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0ID1cbiAgICAgICAgICB5aSA+IHkgIT0geWogPiB5ICYmIHggPCAoKHhqIC0geGkpICogKHkgLSB5aSkpIC8gKHlqIC0geWkpICsgeGk7XG4gICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnNpZGU7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlIYW5kZWxlcik7XG4gIH0sXG4gIGJlZm9yZVVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUhhbmRlbGVyKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0Jvb2soKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJywgJ1NpbmdsZVBhZ2UnXS5pbmNsdWRlcyh0aGlzLnZ1ZV9STSk7XG4gICAgfSxcbiAgICBpc0Jvb2syKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIFsnUlRMJywgJ0xUUiddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGRpdkNsYXNzKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgIHJldHVybiAncm93IGl0ZW1zLWNlbnRlcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcbiAgICBjbGlwUGF0aEYoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoc3NbdGhpcy51c2VkcGF0aF0uZm9yd2FyZDtcbiAgICAgIHJldHVybiBgY2xpcC1wYXRoOiBwb2x5Z29uKCR7cGF0aFxuICAgICAgICAubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgIHJldHVybiBwb2ludFxuICAgICAgICAgICAgLm1hcCgocGVyc2VudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGVyc2VudCA9PSAwID8gcGVyc2VudC50b1N0cmluZygpIDogYCR7cGVyc2VudH0lYDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignLCcpfSk7dG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO2A7XG4gICAgfSxcbiAgICBjbGlwUGF0aEIoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoc3NbdGhpcy51c2VkcGF0aF0uYmFjaztcbiAgICAgIHJldHVybiBgY2xpcC1wYXRoOiBwb2x5Z29uKCR7cGF0aFxuICAgICAgICAubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgIHJldHVybiBwb2ludFxuICAgICAgICAgICAgLm1hcCgocGVyc2VudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGVyc2VudCA9PSAwID8gcGVyc2VudC50b1N0cmluZygpIDogYCR7cGVyc2VudH0lYDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignLCcpfSk7dG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO2A7XG4gICAgfSxcbiAgICBjbGlwUGF0aE0oKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoc3NbdGhpcy51c2VkcGF0aF0ubWVudTtcbiAgICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcbiAgICAgIHJldHVybiBgY2xpcC1wYXRoOiBwb2x5Z29uKCR7cGF0aFxuICAgICAgICAubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgIHJldHVybiBwb2ludFxuICAgICAgICAgICAgLm1hcCgocGVyc2VudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcGVyc2VudCA9PSAwID8gcGVyc2VudC50b1N0cmluZygpIDogYCR7cGVyc2VudH0lYDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignLCcpfSk7dG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO2A7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZ1ZV90aXRsZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NldFRpdGxlJywgYCR7dGhpcy5jaGFwbmFtZX0gJHt0aGlzLnZ1ZV90aXRsZX1gKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHBhZ2VJbnRlcnNlY3RFbGVBcnIgPSByZWYoPEhUTUxFbGVtZW50W10+W10pO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVmKDxjaGFwdGVyW10+W10pO1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBjdXJyY2hhcHRlciA9IHJlZig8bnVtYmVyPnBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snY2hhcHRlcklEJ119YCkpO1xuICAgIGNvbnN0IG5leHRDaGFwdGVyID0gcmVmKDxQcm9taXNlPGNoYXB0ZXI+IHwgdW5kZWZpbmVkPnVuZGVmaW5lZCk7XG4gICAgY29uc3QgUGFnZXMgPSByZWYoPChQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQpW11bXT5bXSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNoYXB0ZXJNZXRhKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKTtcbiAgICBjb25zdCB2dWVfUk0gPSBvcHRpb25zLnZ1ZV9STTtcbiAgICBjb25zdCB2dWVfUGF0aCA9IG9wdGlvbnMudnVlX1BhdGhzO1xuICAgIGNvbnN0IHBhdGhWaXNhYmxlID0gb3B0aW9ucy5wYXRoVmlzYWJsZTtcbiAgICBjb25zdCB2dWVfV1QgPSBvcHRpb25zLnZ1ZV9XVDtcbiAgICBjb25zdCB2dWVfU2NhbGUgPSBvcHRpb25zLnZ1ZV9TY2FsZTtcbiAgICBjb25zdCB2dWVfT2Zmc2V0ID0gb3B0aW9ucy52dWVfT2Zmc2V0O1xuICAgIGNvbnN0IHZ1ZV90aXRsZSA9IG9wdGlvbnMudnVlX3RpdGxlO1xuICAgIGNvbnN0IGNoYXBuYW1lID0gcmVmKDxzdHJpbmc+JycpO1xuICAgIGNvbnN0IHVzZWRwYXRoID0gb3B0aW9ucy52dWVfUGF0aHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zLFxuICAgICAgY3VycmNoYXB0ZXIsXG4gICAgICBuZXh0Q2hhcHRlcixcbiAgICAgIFBhZ2VzLFxuICAgICAgdnVlX1JNLFxuICAgICAgdnVlX1BhdGgsXG4gICAgICBwYXRoVmlzYWJsZSxcbiAgICAgIHZ1ZV9XVCxcbiAgICAgIHZ1ZV9TY2FsZSxcbiAgICAgIHZ1ZV9PZmZzZXQsXG4gICAgICBjaGFwbmFtZSxcbiAgICAgIHZ1ZV90aXRsZSxcbiAgICAgIHBhZ2VJbnRlcnNlY3RFbGVBcnIsXG4gICAgICBzY3JvbGx0aW1lb3V0OiByZWYodHJ1ZSksXG4gICAgICB1c2VkcGF0aFxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVWTm9kZSIsIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJmZCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfd2l0aEN0eCIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsImluZGV4IiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EsTUFBS0EsY0FBYSxnQkFBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNY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TUFDUCxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ04sQ0FBQyxJQUFJLEVBQUU7QUFBQSxNQUNQLENBQUMsR0FBRyxFQUFFO0FBQUEsTUFDTixDQUFDLEdBQUcsR0FBRztBQUFBLElBQ1Q7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDUCxDQUFDLElBQUksRUFBRTtBQUFBLE1BQ1AsQ0FBQyxJQUFJLENBQUM7QUFBQSxNQUNOLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDTCxDQUFDLEdBQUcsRUFBRTtBQUFBLE1BQ04sQ0FBQyxJQUFJLEVBQUU7QUFBQSxJQUNUO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixDQUFDLElBQUksRUFBRTtBQUFBLE1BQ1AsQ0FBQyxJQUFJLEVBQUU7QUFBQSxNQUNQLENBQUMsSUFBSSxFQUFFO0FBQUEsTUFDUCxDQUFDLElBQUksRUFBRTtBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ04sQ0FBQyxLQUFLLENBQUM7QUFBQSxNQUNQLENBQUMsS0FBSyxHQUFHO0FBQUEsTUFDVCxDQUFDLElBQUksR0FBRztBQUFBLElBQ1Y7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDTCxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ04sQ0FBQyxJQUFJLEdBQUc7QUFBQSxNQUNSLENBQUMsR0FBRyxHQUFHO0FBQUEsSUFDVDtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osQ0FBQyxJQUFJLENBQUM7QUFBQSxNQUNOLENBQUMsSUFBSSxDQUFDO0FBQUEsTUFDTixDQUFDLElBQUksR0FBRztBQUFBLE1BQ1IsQ0FBQyxJQUFJLEdBQUc7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsQ0FBQyxJQUFJLEVBQUU7QUFBQSxNQUNQLENBQUMsSUFBSSxHQUFHO0FBQUEs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
