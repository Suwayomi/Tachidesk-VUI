import { Q as QCard } from "./QCard.85acad91.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.50d98fd7.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.13aea2ff.js";
import { Q as QPage } from "./QPage.126447b9.js";
import { I as Intersection } from "./Intersection.9c3ca45b.js";
import { d as defineComponent, r as ref, _ as _export_sfc, f as openBlock, v as createElementBlock, m as createVNode, a6 as normalizeStyle, q as normalizeClass, j as createBlock, k as withCtx, n as createCommentVNode, a5 as useRoute, s as resolveComponent, u as createBaseVNode, x as renderList, F as Fragment, B as withDirectives, t as toDisplayString } from "./index.0b61810d.js";
import { Q as QImg, g as getImgBlob } from "./usefull.0f9a3edc.js";
import { Q as QInnerLoading } from "./QInnerLoading.b3499eb2.js";
import { c as chapterMeta } from "./readerSettings.c657db7a.js";
import "./use-dark.bc291eea.js";
import "./QSpinner.0d412098.js";
import "./dom.fd94eb85.js";
import "./scroll.34fac392.js";
import "./axios.a87bcd6c.js";
import "./StoreStuff.f5900537.js";
import "./use-transition.65db8379.js";
var displayPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  name: "DisplayPage",
  props: {
    pageNum: {
      type: Number,
      required: true
    },
    chapterID: {
      type: Number,
      required: true
    },
    vueRM: {
      type: String,
      default: "RTL"
    },
    vueWT: {
      type: Boolean,
      default: false
    },
    vueScale: {
      type: Boolean,
      default: false
    },
    vueOffset: {
      type: Boolean,
      default: false
    },
    imdata: {
      type: Promise,
      default: void 0
    }
  },
  setup() {
    return { imgdata: ref("") };
  },
  computed: {
    isBook() {
      return ["RTL", "LTR", "SinglePage"].includes(this.vueRM);
    },
    isBook2() {
      return ["RTL", "LTR"].includes(this.vueRM);
    },
    imgstyle() {
      if (this.vueScale) {
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
      if (this.vueScale) {
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
      if (this.vueScale) {
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
      if (this.vueScale) {
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
      if (this.vueScale) {
        if (this.isBook) {
          if (this.isBook2) {
            let tmp = 1;
            if (this.pageNum % 2) {
              tmp *= -1;
            }
            if (this.vueRM == "RTL") {
              tmp *= -1;
            }
            if (this.vueOffset) {
              tmp *= -1;
            }
            return "width:50%;height:100vh;align-items:" + (tmp == -1 ? "start" : "end");
          }
          return "max-width:100%;height:100vh";
        }
        return "width:100%;height:fit-content;";
      }
      if (this.isBook2) {
        const es = this.pageNum % 2 ? this.vueRM == "RTL" ? "end" : "start" : this.vueRM == "RTL" ? "start" : "end";
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
  mounted: function() {
    this.getImg();
  },
  methods: {
    getImg() {
      var _a;
      (_a = this.imdata) == null ? void 0 : _a.then((value) => {
        this.imgdata = value;
      });
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["column items-center justify-center", _ctx.vueScale && !_ctx.isBook ? `` : `displayPage`]),
    style: normalizeStyle(_ctx.imgcontstyle)
  }, [
    createVNode(QImg, {
      style: normalizeStyle([{ "max-width": "-webkit-fill-available" }, _ctx.imgstyle]),
      loading: "lazy",
      class: normalizeClass(_ctx.vueWT ? _ctx.isBook2 ? `q-mx-md` : `q-ma-md` : ``),
      src: _ctx.imgdata,
      fit: _ctx.imgfit,
      "img-class": _ctx.imgClass,
      "img-style": _ctx.imgimgstyle
    }, null, 8, ["style", "class", "src", "fit", "img-class", "img-style"]),
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
  name: "ChapterPage",
  components: { displayPage },
  emits: ["set-title", "open-menu"],
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
      this.$emit("set-title", `${this.chapname} ${this.vue_title}`);
    }
  },
  created() {
    window.addEventListener("keydown", this.keyHandeler);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.keyHandeler);
  },
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
      this.$emit("set-title", `${this.vue_title} ${data.name}`);
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
        this.$emit("open-menu");
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
    "style-fn": _ctx.myTweak,
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(QInfiniteScroll, {
          ref: "infiniteScrol",
          offset: _ctx.$q.screen.height * 5,
          onLoad: _ctx.onLoad
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, indexx) => {
              return openBlock(), createElementBlock("div", {
                key: indexx,
                class: normalizeClass(_ctx.divClass)
              }, [
                _ctx.vue_Offset && _ctx.isBook2 ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.pageCount, (_page, index) => {
                  return withDirectives((openBlock(), createBlock(_component_displayPage, {
                    key: index,
                    "page-num": _ctx.vue_RM == "RTL" ? index % 2 ? index - 1 : index + 1 : index,
                    "chapter-i-d": item.index,
                    "data-pid": index,
                    "data-cid": item.index,
                    "data-pcount": item.pageCount,
                    "vue-r-m": _ctx.vue_RM,
                    "vue-w-t": _ctx.vue_WT,
                    "vue-scale": _ctx.vue_Scale,
                    "vue-offset": _ctx.vue_Offset,
                    imdata: _ctx.pagee(item.index, index)
                  }, null, 8, ["page-num", "chapter-i-d", "data-pid", "data-cid", "data-pcount", "vue-r-m", "vue-w-t", "vue-scale", "vue-offset", "imdata"])), [
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
        }, 8, ["offset", "onLoad"])
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
  }, 8, ["style-fn", "onClick"]);
}
var chapterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "chapterPage.vue"]]);
export { chapterPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcHRlclBhZ2UuMzg5Mjk5OTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlYWRlci9kaXNwbGF5UGFnZS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvY2hhcHRlclBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICA6Y2xhc3M9XCJ2dWVTY2FsZSAmJiAhaXNCb29rID8gYGAgOiBgZGlzcGxheVBhZ2VgXCJcbiAgICA6c3R5bGU9XCJpbWdjb250c3R5bGVcIlxuICA+XG4gICAgPHEtaW1nXG4gICAgICBzdHlsZT1cIm1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZVwiXG4gICAgICA6c3R5bGU9XCJpbWdzdHlsZVwiXG4gICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICA6Y2xhc3M9XCJ2dWVXVCA/IChpc0Jvb2syID8gYHEtbXgtbWRgIDogYHEtbWEtbWRgKSA6IGBgXCJcbiAgICAgIDpzcmM9XCJpbWdkYXRhXCJcbiAgICAgIDpmaXQ9XCJpbWdmaXRcIlxuICAgICAgOmltZy1jbGFzcz1cImltZ0NsYXNzXCJcbiAgICAgIDppbWctc3R5bGU9XCJpbWdpbWdzdHlsZVwiXG4gICAgPlxuICAgIDwvcS1pbWc+XG4gICAgPHEtY2FyZFxuICAgICAgdi1pZj1cIiFpbWdkYXRhXCJcbiAgICAgIGZsYXRcbiAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IHdpZHRoOiAxMDAlXCJcbiAgICA+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgID5cbiAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgIDwvcS1jYXJkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRGlzcGxheVBhZ2UnLFxuICBwcm9wczoge1xuICAgIHBhZ2VOdW06IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjaGFwdGVySUQ6IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB2dWVSTToge1xuICAgICAgdHlwZTogU3RyaW5nIGFzIFByb3BUeXBlPHN0cmluZz4sXG4gICAgICBkZWZhdWx0OiAnUlRMJyxcbiAgICB9LFxuICAgIHZ1ZVdUOiB7XG4gICAgICB0eXBlOiBCb29sZWFuIGFzIFByb3BUeXBlPGJvb2xlYW4+LFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICB2dWVTY2FsZToge1xuICAgICAgdHlwZTogQm9vbGVhbiBhcyBQcm9wVHlwZTxib29sZWFuPixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdnVlT2Zmc2V0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuIGFzIFByb3BUeXBlPGJvb2xlYW4+LFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpbWRhdGE6IHtcbiAgICAgIHR5cGU6IFByb21pc2UgYXMgUHJvcFR5cGU8UHJvbWlzZTxzdHJpbmc+PixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4geyBpbWdkYXRhOiByZWYoJycpIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNCb29rKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIFsnUlRMJywgJ0xUUicsICdTaW5nbGVQYWdlJ10uaW5jbHVkZXModGhpcy52dWVSTSk7XG4gICAgfSxcbiAgICBpc0Jvb2syKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIFsnUlRMJywgJ0xUUiddLmluY2x1ZGVzKHRoaXMudnVlUk0pO1xuICAgIH0sXG4gICAgaW1nc3R5bGUoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLnZ1ZVNjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiAnd2lkdGg6IGZpdC1jb250ZW50Oyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnd2lkdGg6IGZpdC1jb250ZW50Oyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd3aWR0aDoxMDAlO2hlaWdodDpmaXQtY29udGVudDsnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICd3aWR0aDogZml0LWNvbnRlbnQ7bWF4LXdpZHRoOjEwMCUnO1xuICAgIH0sXG4gICAgaW1nQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLnZ1ZVNjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiAndGVzdCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAndGVzdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICB9LFxuICAgIGltZ2ZpdCgpOiAnZmlsbCcgfCAnY292ZXInIHwgJ2NvbnRhaW4nIHwgJ25vbmUnIHwgJ3NjYWxlLWRvd24nIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLnZ1ZVNjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdmaWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgfSxcbiAgICBpbWdpbWdzdHlsZSgpOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+IHtcbiAgICAgIGlmICh0aGlzLnZ1ZVNjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJ2ZpdC1jb250ZW50JyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICdmaXQtY29udGVudCcgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdmaXQtY29udGVudCcgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGltZ2NvbnRzdHlsZSgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudnVlU2NhbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNCb29rKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICAgICAgbGV0IHRtcCA9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtICUgMikge1xuICAgICAgICAgICAgICB0bXAgKj0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52dWVSTSA9PSAnUlRMJykge1xuICAgICAgICAgICAgICB0bXAgKj0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52dWVPZmZzZXQpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgJ3dpZHRoOjUwJTtoZWlnaHQ6MTAwdmg7YWxpZ24taXRlbXM6JyArXG4gICAgICAgICAgICAgICh0bXAgPT0gLTEgPyAnc3RhcnQnIDogJ2VuZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlO2hlaWdodDoxMDB2aCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd3aWR0aDoxMDAlO2hlaWdodDpmaXQtY29udGVudDsnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICBjb25zdCBlcyA9XG4gICAgICAgICAgdGhpcy5wYWdlTnVtICUgMlxuICAgICAgICAgICAgPyB0aGlzLnZ1ZVJNID09ICdSVEwnXG4gICAgICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICA6IHRoaXMudnVlUk0gPT0gJ1JUTCdcbiAgICAgICAgICAgID8gJ3N0YXJ0J1xuICAgICAgICAgICAgOiAnZW5kJztcbiAgICAgICAgcmV0dXJuICd3aWR0aDo1MCU7YWxpZ24taXRlbXM6JyArIGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdtYXgtd2lkdGg6MTAwJSc7XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBwYWdlTnVtKCkge1xuICAgICAgdGhpcy5nZXRJbWcoKTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRJbWcoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEltZygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaW1kYXRhPy50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW1nZGF0YSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPlxuLmRpc3BsYXlQYWdlIC50ZXN0XG4gIHdpZHRoOiBmaXQtY29udGVudFxuICBoZWlnaHQ6IGZpdC1jb250ZW50XG4gIG1heC13aWR0aDogMTAwJVxuXG4uZGlzcGxheVBhZ2UgLnEtaW1nX19jb250YWluZXJcbiAgcG9zaXRpb246IHVuc2V0XG4gIGRpc3BsYXk6IGZsZXhcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgaGVpZ2h0OiAxMDAlXG5cbi5kaXNwbGF5UGFnZSAucS1pbWcucS1pbWctLW1lbnUgOmZpcnN0LWNoaWxkXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudFxuPC9zdHlsZT5cbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1wYWdlIDpzdHlsZS1mbj1cIm15VHdlYWtcIiBAY2xpY2s9XCJoYW5kbGVDbGlja1wiPlxuICAgIDxkaXY+XG4gICAgICA8cS1pbmZpbml0ZS1zY3JvbGxcbiAgICAgICAgcmVmPVwiaW5maW5pdGVTY3JvbFwiXG4gICAgICAgIDpvZmZzZXQ9XCIkcS5zY3JlZW4uaGVpZ2h0ICogNVwiXG4gICAgICAgIEBsb2FkPVwib25Mb2FkXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpbmRleHgpIGluIGl0ZW1zXCIgOmtleT1cImluZGV4eFwiIDpjbGFzcz1cImRpdkNsYXNzXCI+XG4gICAgICAgICAgPGRpdiB2LWlmPVwidnVlX09mZnNldCAmJiBpc0Jvb2syXCIgc3R5bGU9XCJ3aWR0aDogNTAlXCI+PC9kaXY+XG4gICAgICAgICAgPGRpc3BsYXlQYWdlXG4gICAgICAgICAgICB2LWZvcj1cIihfcGFnZSwgaW5kZXgpIGluIGl0ZW0ucGFnZUNvdW50XCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICB2LWludGVyc2VjdGlvbj1cIm9uSW50ZXJzZWN0aW9uXCJcbiAgICAgICAgICAgIDpwYWdlLW51bT1cIlxuICAgICAgICAgICAgICB2dWVfUk0gPT0gJ1JUTCcgPyAoaW5kZXggJSAyID8gaW5kZXggLSAxIDogaW5kZXggKyAxKSA6IGluZGV4XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgOmNoYXB0ZXItaS1kPVwiaXRlbS5pbmRleFwiXG4gICAgICAgICAgICA6ZGF0YS1waWQ9XCJpbmRleFwiXG4gICAgICAgICAgICA6ZGF0YS1jaWQ9XCJpdGVtLmluZGV4XCJcbiAgICAgICAgICAgIDpkYXRhLXBjb3VudD1cIml0ZW0ucGFnZUNvdW50XCJcbiAgICAgICAgICAgIDp2dWUtci1tPVwidnVlX1JNXCJcbiAgICAgICAgICAgIDp2dWUtdy10PVwidnVlX1dUXCJcbiAgICAgICAgICAgIDp2dWUtc2NhbGU9XCJ2dWVfU2NhbGVcIlxuICAgICAgICAgICAgOnZ1ZS1vZmZzZXQ9XCJ2dWVfT2Zmc2V0XCJcbiAgICAgICAgICAgIDppbWRhdGE9XCJwYWdlZShpdGVtLmluZGV4LCBpbmRleClcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpc3BsYXlQYWdlPlxuICAgICAgICAgIDxxLWNhcmRcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDsgbWF4LWhlaWdodDogNTAwcHhcIlxuICAgICAgICAgICAgOnN0eWxlPVwiaXNCb29rMiA/IGB3aWR0aDoxMDAlYCA6IGBgXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sdW1uIHRleHQtY2VudGVyIHEtbWwtbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbFwiPkVuZCBvZiB7eyBpdGVtLm5hbWUgfX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICBpdGVtLmluZGV4ID49IGl0ZW0uY2hhcHRlckNvdW50XG4gICAgICAgICAgICAgICAgICA/ICdubyBjaGFwdGVycyByZW1haW5pbmcnXG4gICAgICAgICAgICAgICAgICA6ICdrZWVwIHNjcm9sbGluZyBmb3IgdGhlIG5leHQgY2hhcHRlcidcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtcHktbWRcIj5cbiAgICAgICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwiNDBweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cInBhdGhWaXNhYmxlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZml4ZWRcIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpXCJcbiAgICAgICAgOnN0eWxlPVwiY2xpcFBhdGhGXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJmaXhlZFwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSlcIlxuICAgICAgICA6c3R5bGU9XCJjbGlwUGF0aEJcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiY2xpcFBhdGhNXCJcbiAgICAgICAgY2xhc3M9XCJmaXhlZFwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSlcIlxuICAgICAgICA6c3R5bGU9XCJjbGlwUGF0aE1cIlxuICAgICAgPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBRSW5maW5pdGVTY3JvbGwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY2hhcHRlciB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBkaXNwbGF5UGFnZSBmcm9tICdzcmMvY29tcG9uZW50cy9yZWFkZXIvZGlzcGxheVBhZ2UudnVlJztcbmltcG9ydCB7IGNoYXB0ZXJNZXRhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVhZGVyL3JlYWRlclNldHRpbmdzJztcbmltcG9ydCB7IGdldEltZ0Jsb2IgfSBmcm9tICdzcmMvY29tcG9uZW50cy9nbG9iYWwvdXNlZnVsbCc7XG5pbXBvcnQgeyBwYXRocyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcblxuY29uc3QgcGF0aHNzOiBwYXRocyA9IHtcbiAgTDoge1xuICAgIGZvcndhcmQ6IFtcbiAgICAgIFsxMDAsIDEwMF0sXG4gICAgICBbMTAwLCAwXSxcbiAgICAgIFs2NiwgMF0sXG4gICAgICBbNjYsIDY2XSxcbiAgICAgIFswLCA2Nl0sXG4gICAgICBbMCwgMTAwXSxcbiAgICBdLFxuICAgIGJhY2s6IFtcbiAgICAgIFszMywgMzNdLFxuICAgICAgWzY2LCAzM10sXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDY2XSxcbiAgICAgIFszMywgNjZdLFxuICAgIF0sXG4gICAgbWVudTogW1xuICAgICAgWzMzLCAzM10sXG4gICAgICBbNjYsIDMzXSxcbiAgICAgIFs2NiwgNjZdLFxuICAgICAgWzMzLCA2Nl0sXG4gICAgXSxcbiAgfSxcbiAgUkFMOiB7XG4gICAgZm9yd2FyZDogW1xuICAgICAgWzY2LCAwXSxcbiAgICAgIFsxMDAsIDBdLFxuICAgICAgWzEwMCwgMTAwXSxcbiAgICAgIFs2NiwgMTAwXSxcbiAgICBdLFxuICAgIGJhY2s6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFszMywgMF0sXG4gICAgICBbMzMsIDEwMF0sXG4gICAgICBbMCwgMTAwXSxcbiAgICBdLFxuICAgIG1lbnU6IFtcbiAgICAgIFszMywgMF0sXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzY2LCAxMDBdLFxuICAgICAgWzMzLCAxMDBdLFxuICAgIF0sXG4gIH0sXG4gIEtpbmRsZToge1xuICAgIGZvcndhcmQ6IFtcbiAgICAgIFszMywgMzNdLFxuICAgICAgWzMzLCAxMDBdLFxuICAgICAgWzEwMCwgMTAwXSxcbiAgICAgIFsxMDAsIDMzXSxcbiAgICBdLFxuICAgIGJhY2s6IFtcbiAgICAgIFszMywgMzNdLFxuICAgICAgWzMzLCAxMDBdLFxuICAgICAgWzAsIDEwMF0sXG4gICAgICBbMCwgMzNdLFxuICAgIF0sXG4gICAgbWVudTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwMCwgMF0sXG4gICAgICBbMTAwLCAzM10sXG4gICAgICBbMCwgMzNdLFxuICAgIF0sXG4gIH0sXG4gIEVkZ2U6IHtcbiAgICBmb3J3YXJkOiBbXG4gICAgICBbMTAwLCAwXSxcbiAgICAgIFsxMDAsIDEwMF0sXG4gICAgICBbMCwgMTAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFszMywgMF0sXG4gICAgICBbMzMsIDEwMF0sXG4gICAgICBbNjYsIDEwMF0sXG4gICAgICBbNjYsIDBdLFxuICAgIF0sXG4gICAgYmFjazogW1xuICAgICAgWzMzLCA2Nl0sXG4gICAgICBbNjYsIDY2XSxcbiAgICAgIFs2NiwgMTAwXSxcbiAgICAgIFszMywgMTAwXSxcbiAgICBdLFxuICAgIG1lbnU6IFtcbiAgICAgIFszMywgNjZdLFxuICAgICAgWzY2LCA2Nl0sXG4gICAgICBbNjYsIDBdLFxuICAgICAgWzMzLCAwXSxcbiAgICBdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0NoYXB0ZXJQYWdlJyxcbiAgY29tcG9uZW50czogeyBkaXNwbGF5UGFnZSB9LFxuICBlbWl0czogWydzZXQtdGl0bGUnLCAnb3Blbi1tZW51J10sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHBhZ2VJbnRlcnNlY3RFbGVBcnIgPSByZWYoPEhUTUxFbGVtZW50W10+W10pO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVmKDxjaGFwdGVyW10+W10pO1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBjdXJyY2hhcHRlciA9IHJlZig8bnVtYmVyPnBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snY2hhcHRlcklEJ119YCkpO1xuICAgIGNvbnN0IG5leHRDaGFwdGVyID0gcmVmKDxQcm9taXNlPGNoYXB0ZXI+IHwgdW5kZWZpbmVkPnVuZGVmaW5lZCk7XG4gICAgY29uc3QgUGFnZXMgPSByZWYoPChQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQpW11bXT5bXSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNoYXB0ZXJNZXRhKHBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snbWFuZ2FJRCddfWApKTtcbiAgICBjb25zdCB2dWVfUk0gPSBvcHRpb25zLnZ1ZV9STTtcbiAgICBjb25zdCB2dWVfUGF0aCA9IG9wdGlvbnMudnVlX1BhdGhzO1xuICAgIGNvbnN0IHBhdGhWaXNhYmxlID0gb3B0aW9ucy5wYXRoVmlzYWJsZTtcbiAgICBjb25zdCB2dWVfV1QgPSBvcHRpb25zLnZ1ZV9XVDtcbiAgICBjb25zdCB2dWVfU2NhbGUgPSBvcHRpb25zLnZ1ZV9TY2FsZTtcbiAgICBjb25zdCB2dWVfT2Zmc2V0ID0gb3B0aW9ucy52dWVfT2Zmc2V0O1xuICAgIGNvbnN0IHZ1ZV90aXRsZSA9IG9wdGlvbnMudnVlX3RpdGxlO1xuICAgIGNvbnN0IGNoYXBuYW1lID0gcmVmKDxzdHJpbmc+JycpO1xuICAgIGNvbnN0IHVzZWRwYXRoID0gb3B0aW9ucy52dWVfUGF0aHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zLFxuICAgICAgY3VycmNoYXB0ZXIsXG4gICAgICBuZXh0Q2hhcHRlcixcbiAgICAgIFBhZ2VzLFxuICAgICAgdnVlX1JNLFxuICAgICAgdnVlX1BhdGgsXG4gICAgICBwYXRoVmlzYWJsZSxcbiAgICAgIHZ1ZV9XVCxcbiAgICAgIHZ1ZV9TY2FsZSxcbiAgICAgIHZ1ZV9PZmZzZXQsXG4gICAgICBjaGFwbmFtZSxcbiAgICAgIHZ1ZV90aXRsZSxcbiAgICAgIHBhZ2VJbnRlcnNlY3RFbGVBcnIsXG4gICAgICBzY3JvbGx0aW1lb3V0OiByZWYodHJ1ZSksXG4gICAgICB1c2VkcGF0aCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzQm9vaygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZSddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGlzQm9vazIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJ10uaW5jbHVkZXModGhpcy52dWVfUk0pO1xuICAgIH0sXG4gICAgZGl2Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgcmV0dXJuICdyb3cgaXRlbXMtY2VudGVyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIGNsaXBQYXRoRigpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5mb3J3YXJkO1xuICAgICAgcmV0dXJuIGBjbGlwLXBhdGg6IHBvbHlnb24oJHtwYXRoXG4gICAgICAgIC5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAubWFwKChwZXJzZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwZXJzZW50ID09IDAgPyBwZXJzZW50LnRvU3RyaW5nKCkgOiBgJHtwZXJzZW50fSVgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9KTt0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7YDtcbiAgICB9LFxuICAgIGNsaXBQYXRoQigpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5iYWNrO1xuICAgICAgcmV0dXJuIGBjbGlwLXBhdGg6IHBvbHlnb24oJHtwYXRoXG4gICAgICAgIC5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAubWFwKChwZXJzZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwZXJzZW50ID09IDAgPyBwZXJzZW50LnRvU3RyaW5nKCkgOiBgJHtwZXJzZW50fSVgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9KTt0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7YDtcbiAgICB9LFxuICAgIGNsaXBQYXRoTSgpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5tZW51O1xuICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuICAgICAgcmV0dXJuIGBjbGlwLXBhdGg6IHBvbHlnb24oJHtwYXRoXG4gICAgICAgIC5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAubWFwKChwZXJzZW50KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwZXJzZW50ID09IDAgPyBwZXJzZW50LnRvU3RyaW5nKCkgOiBgJHtwZXJzZW50fSVgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9KTt0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7YDtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIHZ1ZV90aXRsZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NldC10aXRsZScsIGAke3RoaXMuY2hhcG5hbWV9ICR7dGhpcy52dWVfdGl0bGV9YCk7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5SGFuZGVsZXIpO1xuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlIYW5kZWxlcik7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRJbWcoY2hhcHRlcklEOiBudW1iZXIsIHBhZ2VOdW06IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gZ2V0SW1nQmxvYihcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXVxuICAgICAgICB9L2NoYXB0ZXIvJHtjaGFwdGVySUR9L3BhZ2UvJHtwYWdlTnVtfT91c2VDYWNoZT0ke3RoaXMuJHN0b3JlR2V0KFxuICAgICAgICAgICd1c2VDYWNoZScsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApfWBcbiAgICAgICk7XG4gICAgfSxcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCcsXG4gICAgICB9O1xuICAgIH0sXG4gICAgb25DaGFwdGVyKGRhdGE6IGNoYXB0ZXIsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChkYXRhKTtcbiAgICAgIGlmICh0aGlzLmN1cnJjaGFwdGVyICE9IHBhcnNlSW50KGAke3RoaXMuJHJvdXRlLnBhcmFtc1snY2hhcHRlcklEJ119YCkpIHtcbiAgICAgICAgaWYgKHRoaXMuJHJvdXRlLm5hbWU/LnRvU3RyaW5nKCkgPT0gJ2NoYXB0ZXJwYWdlJykge1xuICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKFxuICAgICAgICAgICAgYC9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7dGhpcy5jdXJyY2hhcHRlcn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZG9uZSgpO1xuICAgICAgdGhpcy5jaGFwbmFtZSA9IGRhdGEubmFtZTtcbiAgICAgIHRoaXMuJGVtaXQoJ3NldC10aXRsZScsIGAke3RoaXMudnVlX3RpdGxlfSAke2RhdGEubmFtZX1gKTtcbiAgICAgIGlmICh0aGlzLmN1cnJjaGFwdGVyID49IGRhdGEuY2hhcHRlckNvdW50KSB7XG4gICAgICAgICh0aGlzLiRyZWZzWydpbmZpbml0ZVNjcm9sJ10gYXMgUUluZmluaXRlU2Nyb2xsKS5zdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJjaGFwdGVyKys7XG4gICAgICAgIHRoaXMuZ2V0TmV4dENoYXAoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9hZChfaW5kZXg6IG51bWJlciwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgaWYgKHRoaXMubmV4dENoYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLiRhcGlcbiAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke3RoaXMuY3VycmNoYXB0ZXJ9YFxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBkYXRhIH06IEF4aW9zUmVzcG9uc2U8Y2hhcHRlcj4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGFnZXNbdGhpcy5jdXJyY2hhcHRlcl0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5wYWdlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLlBhZ2VzW3RoaXMuY3VycmNoYXB0ZXJdPy5wdXNoKHRoaXMuZ2V0SW1nKGRhdGEuaW5kZXgsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25DaGFwdGVyKGRhdGEsIGRvbmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0Q2hhcHRlci50aGVuKChkYXRhOiBjaGFwdGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNoYXB0ZXIoZGF0YSwgZG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TmV4dENoYXAoKSB7XG4gICAgICB0aGlzLm5leHRDaGFwdGVyID0gdGhpcy4kYXBpLmdldChcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke3RoaXMuY3VycmNoYXB0ZXJ9YFxuICAgICAgKTtcbiAgICAgIHRoaXMubmV4dENoYXB0ZXIudGhlbigoZGF0YTogY2hhcHRlcikgPT4ge1xuICAgICAgICB0aGlzLlBhZ2VzW3RoaXMuY3VycmNoYXB0ZXJdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5wYWdlQ291bnQ7IGkrKykge1xuICAgICAgICAgIHRoaXMuUGFnZXNbdGhpcy5jdXJyY2hhcHRlcl0/LnB1c2godGhpcy5nZXRJbWcoZGF0YS5pbmRleCwgaSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uSW50ZXJzZWN0aW9uKGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZW50cnkudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuc2V0UmVhZFBhZ2VzKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmRhdGFzZXRbJ2lzaW50J10gPSAndHJ1ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmRhdGFzZXRbJ2lzaW50J10gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRSZWFkUGFnZXMoZWxlOiBIVE1MRWxlbWVudCkge1xuICAgICAgdGhpcy4kYXBpLnBhdGNoRm9ybShcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke2VsZS5kYXRhc2V0WydjaWQnXX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbGFzdFBhZ2VSZWFkOiBgJHtwYXJzZUludChlbGUuZGF0YXNldFsncGlkJ10gYXMgc3RyaW5nKSArIDF9YCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3BpZCddIGFzIHN0cmluZykgPj1cbiAgICAgICAgcGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3Bjb3VudCddIGFzIHN0cmluZykgLSAxXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4kYXBpLnBhdGNoRm9ybShcbiAgICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7ZWxlLmRhdGFzZXRbJ2NpZCddfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVhZDogJ3RydWUnLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvTmV4dEludGVyc2VjdG9yODAoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGx0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSB0cnVlO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIGNvbnN0IHZwID0gd2luZG93LnZpc3VhbFZpZXdwb3J0IGFzIFZpc3VhbFZpZXdwb3J0O1xuICAgICAgICBjb25zdCB0b3AgPSB2cC5wYWdlVG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB2cC5wYWdlVG9wICsgdnAuaGVpZ2h0O1xuICAgICAgICBjb25zdCBpbnRzZWN0ID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAodGhpcy4kcmVmc1snaW5maW5pdGVTY3JvbCddIGFzIFFJbmZpbml0ZVNjcm9sbCkuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnW2RhdGEtaXNpbnQ9dHJ1ZV0nXG4gICAgICAgICAgKVxuICAgICAgICApIGFzIEhUTUxFbGVtZW50W107XG5cbiAgICAgICAgaWYgKGludHNlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGVsZSA9IGludHNlY3RbaW50c2VjdC5sZW5ndGggLSAxXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBpZiAoZWxlLm9mZnNldFRvcCA+IGJvdHRvbSB8fCBlbGUub2Zmc2V0VG9wIDw9IHRvcCkge1xuICAgICAgICAgICAgZWxlLmRhdGFzZXRbJ2lzaW50J10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nb05leHRJbnRlcnNlY3RvcjgwKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZSkge1xuICAgICAgICAgICAgaW50c2VjdC5mb3JFYWNoKChlbGVtZW46IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbi5kYXRhc2V0Wydpc2ludCddID0gZWxlbWVuID09IGVsZSA/ICd0cnVlJyA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgdG9wOiBlbGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGw4MCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzY3JvbGw4MCgpIHtcbiAgICAgIGNvbnN0IHZwID0gd2luZG93LnZpc3VhbFZpZXdwb3J0IGFzIFZpc3VhbFZpZXdwb3J0O1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiB2cC5wYWdlVG9wICsgdnAuaGVpZ2h0ICogMC44LFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNjcm9sbFVwODAoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGx0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNjcm9sbHRpbWVvdXQgPSB0cnVlO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICBjb25zdCB2cCA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydCBhcyBWaXN1YWxWaWV3cG9ydDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IHZwLnBhZ2VUb3AgLSB2cC5oZWlnaHQgKiAwLjgsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5SGFuZGVsZXIoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5ID09ICcgJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ29OZXh0SW50ZXJzZWN0b3I4MCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFnZWUoY2hhcHRlcklEOiBudW1iZXIsIHBhZ2VOdW06IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICBjb25zdCB0bXAgPSB0aGlzLlBhZ2VzW2NoYXB0ZXJJRF0gYXNcbiAgICAgICAgfCAoUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkKVtdXG4gICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKHRtcD8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRtcDIgPSB0bXBbcGFnZU51bV0gYXMgUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAodG1wMiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdG1wMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1nKGNoYXB0ZXJJRCwgcGFnZU51bSk7XG4gICAgfSxcbiAgICBoYW5kbGVDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucG9pbnRJblBvbHkoXG4gICAgICAgICAgW2UueCwgZS55XSxcbiAgICAgICAgICB0aGlzLnBvbHlUb1BPTExZKHBhdGhzc1t0aGlzLnVzZWRwYXRoXS5mb3J3YXJkKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5nb05leHRJbnRlcnNlY3RvcjgwKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnBvaW50SW5Qb2x5KFxuICAgICAgICAgIFtlLngsIGUueV0sXG4gICAgICAgICAgdGhpcy5wb2x5VG9QT0xMWShwYXRoc3NbdGhpcy51c2VkcGF0aF0uYmFjaylcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVXA4MCgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcGF0aHNzW3RoaXMudXNlZHBhdGhdLm1lbnUgJiZcbiAgICAgICAgdGhpcy5wb2ludEluUG9seShcbiAgICAgICAgICBbZS54LCBlLnldLFxuICAgICAgICAgIHRoaXMucG9seVRvUE9MTFkocGF0aHNzW3RoaXMudXNlZHBhdGhdLm1lbnUpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLiRlbWl0KCdvcGVuLW1lbnUnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvbHlUb1BPTExZKFxuICAgICAgcG9sbHk6IFtudW1iZXIsIG51bWJlcl1bXSB8IHVuZGVmaW5lZFxuICAgICk6IFtudW1iZXIsIG51bWJlcl1bXSB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAocG9sbHkgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHBvbGx5Lm1hcCgocG9pbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAocG9pbnRbMF0gKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyAxMDAsXG4gICAgICAgICAgKHBvaW50WzFdICogd2luZG93LmlubmVySGVpZ2h0KSAvIDEwMCxcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcG9pbnRJblBvbHkoXG4gICAgICBwb2ludDogW251bWJlciwgbnVtYmVyXSxcbiAgICAgIHZzOiBbbnVtYmVyLCBudW1iZXJdW10gfCB1bmRlZmluZWRcbiAgICApOiBib29sZWFuIHtcbiAgICAgIC8vIHJheS1jYXN0aW5nIGFsZ29yaXRobSBiYXNlZCBvblxuICAgICAgLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1L1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sL3BucG9seS5odG1sXG4gICAgICBpZiAodnMgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCB4ID0gcG9pbnRbMF0sXG4gICAgICAgIHkgPSBwb2ludFsxXTtcblxuICAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIGNvbnN0IGlpID0gdnNbaV0gYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICAgICAgY29uc3QgamogPSB2c1tqXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgICBjb25zdCB4aSA9IGlpWzBdLFxuICAgICAgICAgIHlpID0gaWlbMV07XG4gICAgICAgIGNvbnN0IHhqID0gampbMF0sXG4gICAgICAgICAgeWogPSBqalsxXTtcblxuICAgICAgICBjb25zdCBpbnRlcnNlY3QgPVxuICAgICAgICAgIHlpID4geSAhPSB5aiA+IHkgJiYgeCA8ICgoeGogLSB4aSkgKiAoeSAtIHlpKSkgLyAoeWogLSB5aSkgKyB4aTtcbiAgICAgICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc2lkZTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZVZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfd2l0aEN0eCIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07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
