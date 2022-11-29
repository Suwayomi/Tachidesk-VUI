import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.1a97c95a.js";
import { Q as QInfiniteScroll } from "./QInfiniteScroll.07fdfe31.js";
import { Q as QPage } from "./QPage.d65b07e9.js";
import { I as Intersection } from "./Intersection.1f7cb92e.js";
import { f as defineComponent, r as ref, _ as _export_sfc, j as openBlock, y as createElementBlock, n as createVNode, x as normalizeStyle, s as normalizeClass, k as createBlock, m as withCtx, p as createCommentVNode, a7 as useRoute, u as resolveComponent, v as createBaseVNode, z as renderList, F as Fragment, D as withDirectives, t as toDisplayString } from "./index.75e4774b.js";
import { Q as QImg } from "./QImg.834b853c.js";
import { Q as QInnerLoading } from "./QInnerLoading.dc9c40c5.js";
import { g as getImgBlob } from "./usefull.5da5779b.js";
import { c as chapterMeta } from "./readerSettings.2ba4d9c1.js";
import "./use-dark.63b90c22.js";
import "./QSpinner.6511ee07.js";
import "./dom.3bfc77a6.js";
import "./scroll.51a1aea4.js";
import "./use-transition.34947ede.js";
import "./fetcher.d026f468.js";
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
      getImgBlob(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${this.chapterID}/page/${this.pageNum}?useCache=${this.$q.localStorage.getItem(
          "useCache"
        )}`
      ).then((value) => {
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
const _sfc_main = defineComponent({
  name: "chapterPage",
  components: { displayPage },
  emits: ["setTitle"],
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    onLoad(_index, done) {
      this.$fetchJSON(
        `/api/v1/manga/${this.$route.params["mangaID"]}/chapter/${this.currchapter}`
      ).then((data) => {
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
        if (this.currchapter >= data.chapterCount)
          this.$refs["infiniteScrol"].stop();
        this.currchapter++;
      });
    },
    onIntersection(entry) {
      const element = entry.target;
      if (entry.isIntersecting) {
        this.pageIntersectEleArr.push(element);
        this.setReadPages(element);
      } else {
        this.pageIntersectEleArr = this.pageIntersectEleArr.filter(
          (ele) => !(ele.dataset["pid"] == element.dataset["pid"] && ele.dataset["cid"] == element.dataset["cid"])
        );
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
        if (this.pageIntersectEleArr.length > 1) {
          const element = this.pageIntersectEleArr[this.pageIntersectEleArr.length - 1];
          if (element) {
            const vp = window.visualViewport;
            if (element.offsetTop > vp.pageTop + vp.height || element.offsetTop < vp.pageTop) {
              this.pageIntersectEleArr = this.pageIntersectEleArr.filter(
                (ele) => !(ele.dataset["pid"] == element.dataset["pid"] && ele.dataset["cid"] == element.dataset["cid"])
              );
              this.goNextIntersector80();
            } else {
              this.pageIntersectEleArr = [element];
              const top = element.offsetTop + 1;
              window.scrollTo({
                top,
                left: 0,
                behavior: "smooth"
              });
            }
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
    keyHandeler(e) {
      if (e.key == " ") {
        e.preventDefault();
        this.goNextIntersector80();
      }
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
    const options = chapterMeta(parseInt(`${route.params["mangaID"]}`));
    const vue_RM = options.vue_RM;
    const vue_WT = options.vue_WT;
    const vue_Scale = options.vue_Scale;
    const vue_Offset = options.vue_Offset;
    const vue_title = options.vue_title;
    const chapname = ref("");
    return {
      items,
      currchapter,
      vue_RM,
      vue_WT,
      vue_Scale,
      vue_Offset,
      chapname,
      vue_title,
      pageIntersectEleArr,
      scrolltimeout: ref(true)
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_displayPage = resolveComponent("displayPage");
  return openBlock(), createBlock(QPage, {
    onClick: _ctx.goNextIntersector80,
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
                    vue_Offset: _ctx.vue_Offset
                  }, null, 8, ["pageNum", "chapterID", "data-pid", "data-cid", "data-pcount", "vue_RM", "vue_WT", "vue_Scale", "vue_Offset"])), [
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
      ])
    ]),
    _: 1
  }, 8, ["onClick", "style-fn"]);
}
var chapterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "chapterPage.vue"]]);
export { chapterPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcHRlclBhZ2UuZTg0ZTAzYWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlYWRlci9kaXNwbGF5UGFnZS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvY2hhcHRlclBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICA6Y2xhc3M9XCJ2dWVfU2NhbGUgJiYgIWlzQm9vayA/IGBgIDogYGRpc3BsYXlQYWdlYFwiXG4gICAgOnN0eWxlPVwiaW1nY29udHN0eWxlXCJcbiAgPlxuICAgIDxxLWltZ1xuICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGVcIlxuICAgICAgOnN0eWxlPVwiaW1nc3R5bGVcIlxuICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgOmNsYXNzPVwidnVlX1dUID8gKGlzQm9vazIgPyBgcS1teC1tZGAgOiBgcS1tYS1tZGApIDogYGBcIlxuICAgICAgOnNyYz1cImltZ2RhdGFcIlxuICAgICAgOmZpdD1cImltZ2ZpdFwiXG4gICAgICA6aW1nQ2xhc3M9XCJpbWdDbGFzc1wiXG4gICAgICA6aW1nU3R5bGU9XCJpbWdpbWdzdHlsZVwiXG4gICAgPlxuICAgIDwvcS1pbWc+XG4gICAgPHEtY2FyZFxuICAgICAgZmxhdFxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgd2lkdGg6IDEwMCVcIlxuICAgICAgdi1pZj1cIiFpbWdkYXRhXCJcbiAgICA+XG4gICAgICA8cS1pbm5lci1sb2FkaW5nXG4gICAgICAgIDpzaG93aW5nPVwiIWltZ2RhdGFcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgID5cbiAgICAgIDwvcS1pbm5lci1sb2FkaW5nPlxuICAgIDwvcS1jYXJkPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZ2V0SW1nQmxvYiB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ2Rpc3BsYXlQYWdlJyxcbiAgcHJvcHM6IHtcbiAgICBwYWdlTnVtOiB7XG4gICAgICB0eXBlOiBOdW1iZXIgYXMgUHJvcFR5cGU8bnVtYmVyPixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjaGFwdGVySUQ6IHtcbiAgICAgIHR5cGU6IE51bWJlciBhcyBQcm9wVHlwZTxudW1iZXI+LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHZ1ZV9STToge1xuICAgICAgdHlwZTogU3RyaW5nIGFzIFByb3BUeXBlPHN0cmluZz4sXG4gICAgICBkZWZhdWx0OiAnUlRMJ1xuICAgIH0sXG4gICAgdnVlX1dUOiB7XG4gICAgICB0eXBlOiBCb29sZWFuIGFzIFByb3BUeXBlPGJvb2xlYW4+LFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHZ1ZV9TY2FsZToge1xuICAgICAgdHlwZTogQm9vbGVhbiBhcyBQcm9wVHlwZTxib29sZWFuPixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB2dWVfT2Zmc2V0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuIGFzIFByb3BUeXBlPGJvb2xlYW4+LFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldEltZygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzQm9vaygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBbJ1JUTCcsICdMVFInLCAnU2luZ2xlUGFnZSddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGlzQm9vazIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJ10uaW5jbHVkZXModGhpcy52dWVfUk0pO1xuICAgIH0sXG4gICAgaW1nc3R5bGUoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLnZ1ZV9TY2FsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Jvb2spIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3dpZHRoOiBmaXQtY29udGVudDsnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ3dpZHRoOiBmaXQtY29udGVudDsnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnd2lkdGg6MTAwJTtoZWlnaHQ6Zml0LWNvbnRlbnQ7JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnd2lkdGg6IGZpdC1jb250ZW50O21heC13aWR0aDoxMDAlJztcbiAgICB9LFxuICAgIGltZ0NsYXNzKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy52dWVfU2NhbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNCb29rKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3Rlc3QnO1xuICAgIH0sXG4gICAgaW1nZml0KCk6ICdmaWxsJyB8ICdjb3ZlcicgfCAnY29udGFpbicgfCAnbm9uZScgfCAnc2NhbGUtZG93bicgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKHRoaXMudnVlX1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdmaWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnc2NhbGUtZG93bic7XG4gICAgfSxcbiAgICBpbWdpbWdzdHlsZSgpOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+IHtcbiAgICAgIGlmICh0aGlzLnZ1ZV9TY2FsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Jvb2spIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgICAgICByZXR1cm4geyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICdmaXQtY29udGVudCcgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnZml0LWNvbnRlbnQnIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGltZ2NvbnRzdHlsZSgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudnVlX1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQm9vaykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQm9vazIpIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bSAlIDIpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudnVlX1JNID09ICdSVEwnKSB7XG4gICAgICAgICAgICAgIHRtcCAqPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZ1ZV9PZmZzZXQpIHtcbiAgICAgICAgICAgICAgdG1wICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgJ3dpZHRoOjUwJTtoZWlnaHQ6MTAwdmg7YWxpZ24taXRlbXM6JyArXG4gICAgICAgICAgICAgICh0bXAgPT0gLTEgPyAnc3RhcnQnIDogJ2VuZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlO2hlaWdodDoxMDB2aCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd3aWR0aDoxMDAlO2hlaWdodDpmaXQtY29udGVudDsnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNCb29rMikge1xuICAgICAgICBjb25zdCBlcyA9XG4gICAgICAgICAgdGhpcy5wYWdlTnVtICUgMlxuICAgICAgICAgICAgPyB0aGlzLnZ1ZV9STSA9PSAnUlRMJ1xuICAgICAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgOiB0aGlzLnZ1ZV9STSA9PSAnUlRMJ1xuICAgICAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgICAgICA6ICdlbmQnO1xuICAgICAgICByZXR1cm4gJ3dpZHRoOjUwJTthbGlnbi1pdGVtczonICsgZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ21heC13aWR0aDoxMDAlJztcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcGFnZU51bSgpIHtcbiAgICAgIHRoaXMuZ2V0SW1nKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0SW1nKCk6IHZvaWQge1xuICAgICAgZ2V0SW1nQmxvYihcbiAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke1xuICAgICAgICAgIHRoaXMuY2hhcHRlcklEXG4gICAgICAgIH0vcGFnZS8ke3RoaXMucGFnZU51bX0/dXNlQ2FjaGU9JHt0aGlzLiRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgICd1c2VDYWNoZSdcbiAgICAgICAgKX1gXG4gICAgICApLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5pbWdkYXRhID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIHJldHVybiB7IGltZ2RhdGE6IHJlZignJykgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmRpc3BsYXlQYWdlIC50ZXN0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZGlzcGxheVBhZ2UgLnEtaW1nX19jb250YWluZXIge1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGlzcGxheVBhZ2UgLnEtaW1nLnEtaW1nLS1tZW51IDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBAY2xpY2s9XCJnb05leHRJbnRlcnNlY3RvcjgwXCIgOnN0eWxlLWZuPVwibXlUd2Vha1wiPlxuICAgIDxkaXY+XG4gICAgICA8cS1pbmZpbml0ZS1zY3JvbGxcbiAgICAgICAgQGxvYWQ9XCJvbkxvYWRcIlxuICAgICAgICA6b2Zmc2V0PVwiJHEuc2NyZWVuLmhlaWdodCAqIDVcIlxuICAgICAgICByZWY9XCJpbmZpbml0ZVNjcm9sXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcIiA6a2V5PVwiaW5kZXhcIiA6Y2xhc3M9XCJkaXZDbGFzc1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTAlXCIgdi1pZj1cInZ1ZV9PZmZzZXQgJiYgaXNCb29rMlwiPjwvZGl2PlxuICAgICAgICAgIDxkaXNwbGF5UGFnZVxuICAgICAgICAgICAgOnBhZ2VOdW09XCJcbiAgICAgICAgICAgICAgdnVlX1JNID09ICdSVEwnID8gKGluZGV4ICUgMiA/IGluZGV4IC0gMSA6IGluZGV4ICsgMSkgOiBpbmRleFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIDpjaGFwdGVySUQ9XCJpdGVtLmluZGV4XCJcbiAgICAgICAgICAgIHYtZm9yPVwiKF9wYWdlLCBpbmRleCkgaW4gaXRlbS5wYWdlQ291bnRcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIDpkYXRhLXBpZD1cImluZGV4XCJcbiAgICAgICAgICAgIDpkYXRhLWNpZD1cIml0ZW0uaW5kZXhcIlxuICAgICAgICAgICAgOmRhdGEtcGNvdW50PVwiaXRlbS5wYWdlQ291bnRcIlxuICAgICAgICAgICAgdi1pbnRlcnNlY3Rpb249XCJvbkludGVyc2VjdGlvblwiXG4gICAgICAgICAgICA6dnVlX1JNPVwidnVlX1JNXCJcbiAgICAgICAgICAgIDp2dWVfV1Q9XCJ2dWVfV1RcIlxuICAgICAgICAgICAgOnZ1ZV9TY2FsZT1cInZ1ZV9TY2FsZVwiXG4gICAgICAgICAgICA6dnVlX09mZnNldD1cInZ1ZV9PZmZzZXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpc3BsYXlQYWdlPlxuICAgICAgICAgIDxxLWNhcmRcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDsgbWF4LWhlaWdodDogNTAwcHhcIlxuICAgICAgICAgICAgOnN0eWxlPVwiaXNCb29rMiA/IGB3aWR0aDoxMDAlYCA6IGBgXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sdW1uIHRleHQtY2VudGVyIHEtbWwtbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbFwiPkVuZCBvZiB7eyBpdGVtLm5hbWUgfX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICBpdGVtLmluZGV4ID49IGl0ZW0uY2hhcHRlckNvdW50XG4gICAgICAgICAgICAgICAgICA/ICdubyBjaGFwdGVycyByZW1haW5pbmcnXG4gICAgICAgICAgICAgICAgICA6ICdrZWVwIHNjcm9sbGluZyBmb3IgdGhlIG5leHQgY2hhcHRlcidcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bG9hZGluZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtcHktbWRcIj5cbiAgICAgICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwiNDBweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBRSW5maW5pdGVTY3JvbGwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY2hhcHRlciB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBkaXNwbGF5UGFnZSBmcm9tICdzcmMvY29tcG9uZW50cy9yZWFkZXIvZGlzcGxheVBhZ2UudnVlJztcbmltcG9ydCB7IGNoYXB0ZXJNZXRhIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVhZGVyL3JlYWRlclNldHRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ2NoYXB0ZXJQYWdlJyxcbiAgY29tcG9uZW50czogeyBkaXNwbGF5UGFnZSB9LFxuICBlbWl0czogWydzZXRUaXRsZSddLFxuICBtZXRob2RzOiB7XG4gICAgbXlUd2VhayhvZmZzZXQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXQgPyBgY2FsYygxMDB2aCAtICR7b2Zmc2V0fXB4KWAgOiAnMTAwdmgnXG4gICAgICB9O1xuICAgIH0sXG4gICAgb25Mb2FkKF9pbmRleDogbnVtYmVyLCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLiRmZXRjaEpTT04oXG4gICAgICAgIGAvYXBpL3YxL21hbmdhLyR7dGhpcy4kcm91dGUucGFyYW1zWydtYW5nYUlEJ119L2NoYXB0ZXIvJHt0aGlzLmN1cnJjaGFwdGVyfWBcbiAgICAgICkudGhlbigoZGF0YTogY2hhcHRlcikgPT4ge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goZGF0YSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmN1cnJjaGFwdGVyICE9IHBhcnNlSW50KGAke3RoaXMuJHJvdXRlLnBhcmFtc1snY2hhcHRlcklEJ119YClcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJvdXRlLm5hbWU/LnRvU3RyaW5nKCkgPT0gJ2NoYXB0ZXJwYWdlJykge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoXG4gICAgICAgICAgICAgIGAvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke3RoaXMuY3VycmNoYXB0ZXJ9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9uZSgpO1xuICAgICAgICB0aGlzLmNoYXBuYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLiRlbWl0KCdzZXRUaXRsZScsIGAke3RoaXMudnVlX3RpdGxlfSAke2RhdGEubmFtZX1gKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmNoYXB0ZXIgPj0gZGF0YS5jaGFwdGVyQ291bnQpXG4gICAgICAgICAgKHRoaXMuJHJlZnNbJ2luZmluaXRlU2Nyb2wnXSBhcyBRSW5maW5pdGVTY3JvbGwpLnN0b3AoKTtcbiAgICAgICAgdGhpcy5jdXJyY2hhcHRlcisrO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkludGVyc2VjdGlvbihlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVudHJ5LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLnBhZ2VJbnRlcnNlY3RFbGVBcnIucHVzaChlbGVtZW50KTtcbiAgICAgICAgdGhpcy5zZXRSZWFkUGFnZXMoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2VJbnRlcnNlY3RFbGVBcnIgPSB0aGlzLnBhZ2VJbnRlcnNlY3RFbGVBcnIuZmlsdGVyKFxuICAgICAgICAgIChlbGUpID0+XG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICBlbGUuZGF0YXNldFsncGlkJ10gPT0gZWxlbWVudC5kYXRhc2V0WydwaWQnXSAmJlxuICAgICAgICAgICAgICBlbGUuZGF0YXNldFsnY2lkJ10gPT0gZWxlbWVudC5kYXRhc2V0WydjaWQnXVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0UmVhZFBhZ2VzKGVsZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmZC5hcHBlbmQoXG4gICAgICAgICdsYXN0UGFnZVJlYWQnLFxuICAgICAgICBgJHtwYXJzZUludChlbGUuZGF0YXNldFsncGlkJ10gYXMgc3RyaW5nKSArIDF9YFxuICAgICAgKTtcbiAgICAgIHRoaXMuJGZldGNoKFxuICAgICAgICBgL2FwaS92MS9tYW5nYS8ke3RoaXMuJHJvdXRlLnBhcmFtc1snbWFuZ2FJRCddfS9jaGFwdGVyLyR7ZWxlLmRhdGFzZXRbJ2NpZCddfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgYm9keTogZmRcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3BpZCddIGFzIHN0cmluZykgPj1cbiAgICAgICAgcGFyc2VJbnQoZWxlLmRhdGFzZXRbJ3Bjb3VudCddIGFzIHN0cmluZykgLSAxXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZmQuYXBwZW5kKCdyZWFkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy4kZmV0Y2goXG4gICAgICAgICAgYC9hcGkvdjEvbWFuZ2EvJHt0aGlzLiRyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX0vY2hhcHRlci8ke2VsZS5kYXRhc2V0WydjaWQnXX1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgIGJvZHk6IGZkXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ29OZXh0SW50ZXJzZWN0b3I4MCgpIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0aW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsdGltZW91dCA9IHRydWU7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgaWYgKHRoaXMucGFnZUludGVyc2VjdEVsZUFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9XG4gICAgICAgICAgICB0aGlzLnBhZ2VJbnRlcnNlY3RFbGVBcnJbdGhpcy5wYWdlSW50ZXJzZWN0RWxlQXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB2cCA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydCBhcyBWaXN1YWxWaWV3cG9ydDtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRUb3AgPiB2cC5wYWdlVG9wICsgdnAuaGVpZ2h0IHx8XG4gICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wIDwgdnAucGFnZVRvcFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMucGFnZUludGVyc2VjdEVsZUFyciA9IHRoaXMucGFnZUludGVyc2VjdEVsZUFyci5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgIGVsZS5kYXRhc2V0WydwaWQnXSA9PSBlbGVtZW50LmRhdGFzZXRbJ3BpZCddICYmXG4gICAgICAgICAgICAgICAgICAgIGVsZS5kYXRhc2V0WydjaWQnXSA9PSBlbGVtZW50LmRhdGFzZXRbJ2NpZCddXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuZ29OZXh0SW50ZXJzZWN0b3I4MCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wYWdlSW50ZXJzZWN0RWxlQXJyID0gW2VsZW1lbnRdO1xuICAgICAgICAgICAgICBjb25zdCB0b3AgPSBlbGVtZW50Lm9mZnNldFRvcCArIDE7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbDgwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbDgwKCkge1xuICAgICAgY29uc3QgdnAgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgYXMgVmlzdWFsVmlld3BvcnQ7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHZwLnBhZ2VUb3AgKyB2cC5oZWlnaHQgKiAwLjgsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBrZXlIYW5kZWxlcihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT0gJyAnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nb05leHRJbnRlcnNlY3RvcjgwKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlIYW5kZWxlcik7XG4gIH0sXG4gIGJlZm9yZVVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUhhbmRlbGVyKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0Jvb2soKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gWydSVEwnLCAnTFRSJywgJ1NpbmdsZVBhZ2UnXS5pbmNsdWRlcyh0aGlzLnZ1ZV9STSk7XG4gICAgfSxcbiAgICBpc0Jvb2syKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIFsnUlRMJywgJ0xUUiddLmluY2x1ZGVzKHRoaXMudnVlX1JNKTtcbiAgICB9LFxuICAgIGRpdkNsYXNzKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5pc0Jvb2syKSB7XG4gICAgICAgIHJldHVybiAncm93IGl0ZW1zLWNlbnRlcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZ1ZV90aXRsZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NldFRpdGxlJywgYCR7dGhpcy5jaGFwbmFtZX0gJHt0aGlzLnZ1ZV90aXRsZX1gKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHBhZ2VJbnRlcnNlY3RFbGVBcnIgPSByZWYoPEhUTUxFbGVtZW50W10+W10pO1xuICAgIGNvbnN0IGl0ZW1zID0gcmVmKDxjaGFwdGVyW10+W10pO1xuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbiAgICBjb25zdCBjdXJyY2hhcHRlciA9IHJlZig8bnVtYmVyPnBhcnNlSW50KGAke3JvdXRlLnBhcmFtc1snY2hhcHRlcklEJ119YCkpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjaGFwdGVyTWV0YShwYXJzZUludChgJHtyb3V0ZS5wYXJhbXNbJ21hbmdhSUQnXX1gKSk7XG4gICAgY29uc3QgdnVlX1JNID0gb3B0aW9ucy52dWVfUk07XG4gICAgY29uc3QgdnVlX1dUID0gb3B0aW9ucy52dWVfV1Q7XG4gICAgY29uc3QgdnVlX1NjYWxlID0gb3B0aW9ucy52dWVfU2NhbGU7XG4gICAgY29uc3QgdnVlX09mZnNldCA9IG9wdGlvbnMudnVlX09mZnNldDtcbiAgICBjb25zdCB2dWVfdGl0bGUgPSBvcHRpb25zLnZ1ZV90aXRsZTtcbiAgICBjb25zdCBjaGFwbmFtZSA9IHJlZig8c3RyaW5nPicnKTtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXMsXG4gICAgICBjdXJyY2hhcHRlcixcbiAgICAgIHZ1ZV9STSxcbiAgICAgIHZ1ZV9XVCxcbiAgICAgIHZ1ZV9TY2FsZSxcbiAgICAgIHZ1ZV9PZmZzZXQsXG4gICAgICBjaGFwbmFtZSxcbiAgICAgIHZ1ZV90aXRsZSxcbiAgICAgIHBhZ2VJbnRlcnNlY3RFbGVBcnIsXG4gICAgICBzY3JvbGx0aW1lb3V0OiByZWYodHJ1ZSlcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlVk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiZmQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3dpdGhDdHgiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJpbmRleCIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBLE1BQUtBLGNBQWEsZ0JBQWE7QUFBQSxF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
