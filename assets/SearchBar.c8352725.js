import { Q as QIcon } from "./QIcon.8780f7dc.js";
import { Q as QInput } from "./QInput.269ea6c0.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, j as createBlock, k as withCtx, ae as withKeys, a5 as useRoute } from "./index.0b61810d.js";
import "./QSpinner.0d412098.js";
import "./use-key-composition.64dd1858.js";
import "./use-dark.bc291eea.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./use-form.324955ff.js";
const _sfc_main = defineComponent({
  name: "SearchBar",
  setup() {
    const Route = useRoute();
    return {
      text: ref(`${Route.query["q"] || ""}`),
      Searchenter: ref(false)
    };
  },
  methods: {
    searchNoEnt() {
      if (!this.Searchenter) {
        this.$router.push({ query: { ...this.$route.query, q: this.text } });
      }
    },
    searchEnt() {
      this.$router.push({ query: { ...this.$route.query, q: this.text } });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QInput, {
    modelValue: _ctx.text,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.text = $event),
    dense: "",
    standout: "",
    debounce: "500",
    "input-class": "text-right",
    class: "q-ml-xs col-shrink",
    onKeyup: _cache[2] || (_cache[2] = withKeys(($event) => _ctx.searchEnt(), ["enter"]))
  }, {
    append: withCtx(() => [
      _ctx.text === "" ? (openBlock(), createBlock(QIcon, {
        key: 0,
        name: "search"
      })) : (openBlock(), createBlock(QIcon, {
        key: 1,
        name: "clear",
        class: "cursor-pointer",
        onClick: _cache[0] || (_cache[0] = ($event) => {
          _ctx.text = "";
          _ctx.searchEnt();
        })
      }))
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var SearchBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SearchBar.vue"]]);
export { SearchBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmFyLmM4MzUyNzI1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvU2VhcmNoQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtaW5wdXRcbiAgICB2LW1vZGVsPVwidGV4dFwiXG4gICAgZGVuc2VcbiAgICBzdGFuZG91dFxuICAgIGRlYm91bmNlPVwiNTAwXCJcbiAgICBpbnB1dC1jbGFzcz1cInRleHQtcmlnaHRcIlxuICAgIGNsYXNzPVwicS1tbC14cyBjb2wtc2hyaW5rXCJcbiAgICBAa2V5dXAuZW50ZXI9XCJzZWFyY2hFbnQoKVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI2FwcGVuZD5cbiAgICAgIDxxLWljb24gdi1pZj1cInRleHQgPT09ICcnXCIgbmFtZT1cInNlYXJjaFwiIC8+XG4gICAgICA8cS1pY29uXG4gICAgICAgIHYtZWxzZVxuICAgICAgICBuYW1lPVwiY2xlYXJcIlxuICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICAgIHNlYXJjaEVudCgpO1xuICAgICAgICBcIlxuICAgICAgLz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3EtaW5wdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NlYXJjaEJhcicsXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IFJvdXRlID0gdXNlUm91dGUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogcmVmKGAke1JvdXRlLnF1ZXJ5WydxJ10gfHwgJyd9YCksXG4gICAgICBTZWFyY2hlbnRlcjogcmVmKGZhbHNlKSxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2VhcmNoTm9FbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuU2VhcmNoZW50ZXIpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBxdWVyeTogeyAuLi50aGlzLiRyb3V0ZS5xdWVyeSwgcTogdGhpcy50ZXh0IH0gfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZWFyY2hFbnQoKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHF1ZXJ5OiB7IC4uLnRoaXMuJHJvdXRlLnF1ZXJ5LCBxOiB0aGlzLnRleHQgfSB9KTtcbiAgICB9LFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW1DQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQ04sVUFBTSxRQUFRO0FBQ1AsV0FBQTtBQUFBLE1BQ0wsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ3JDLGFBQWEsSUFBSSxLQUFLO0FBQUEsSUFBQTtBQUFBLEVBRTFCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQ1IsVUFBQSxDQUFDLEtBQUssYUFBYTtBQUNyQixhQUFLLFFBQVEsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssT0FBTyxPQUFPLEdBQUcsS0FBSyxLQUFBLEVBQVEsQ0FBQTtBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUNWLFdBQUssUUFBUSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxPQUFPLE9BQU8sR0FBRyxLQUFLLEtBQUEsRUFBUSxDQUFBO0FBQUEsSUFDckU7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7c0JBL0NDQSxZQXFCVSxRQUFBO0FBQUEsSUFwQkMsWUFBQSxLQUFBO0FBQUEsSUFBSSx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLE9BQUE7QUFBQSxJQUNiLE9BQUE7QUFBQSxJQUNBLFVBQUE7QUFBQSxJQUNBLFVBQVM7QUFBQSxJQUNULGVBQVk7QUFBQSxJQUNaLE9BQU07QUFBQSxJQUNMLFNBQUssK0NBQVEsS0FBUyxVQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUVaLFFBQU1DLFFBQ2YsTUFBMkM7QUFBQSxNQUE3QixLQUFBLFNBQUksbUJBQWxCRCxZQUEyQyxPQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFBaEIsTUFBSztBQUFBLE1BQUEsQ0FBQSxNQUFBRSxVQUFBLEdBQ2hDRixZQVFFLE9BQUE7QUFBQSxRQUFBLEtBQUE7QUFBQSxRQU5BLE1BQUs7QUFBQSxRQUNMLE9BQU07QUFBQSxRQUNMLFNBQUssT0FBQSxPQUFBLE9BQUEsS0FBQSxDQUFBLFdBQUE7QUFBaUIsZUFBQSxPQUFBO0FBQTBCLGVBQUEsVUFBQTtBQUFBLFFBQUE7QUFBQTs7Ozs7OzsifQ==
