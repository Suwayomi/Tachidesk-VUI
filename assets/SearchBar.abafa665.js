import { Q as QIcon } from "./QIcon.129c8e27.js";
import { Q as QInput } from "./QInput.cad7e9be.js";
import { _ as _export_sfc, d as defineComponent, r as ref, f as openBlock, j as createBlock, k as withCtx, ae as withKeys, a5 as useRoute } from "./index.5cc93081.js";
import "./QSpinner.7d14a7f2.js";
import "./use-key-composition.a20c22ba.js";
import "./use-dark.1adac86a.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./use-form.94dd5d17.js";
const _sfc_main = defineComponent({
  name: "SearchBar",
  methods: {
    searchNoEnt() {
      if (!this.Searchenter) {
        this.$router.push({ query: { ...this.$route.query, q: this.text } });
      }
    },
    searchEnt() {
      this.$router.push({ query: { ...this.$route.query, q: this.text } });
    }
  },
  setup() {
    const Route = useRoute();
    return {
      text: ref(`${Route.query["q"] || ""}`),
      Searchenter: ref(false)
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QInput, {
    dense: "",
    standout: "",
    modelValue: _ctx.text,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.text = $event),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmFyLmFiYWZhNjY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvU2VhcmNoQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIC8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtaW5wdXRcbiAgICBkZW5zZVxuICAgIHN0YW5kb3V0XG4gICAgdi1tb2RlbD1cInRleHRcIlxuICAgIGRlYm91bmNlPVwiNTAwXCJcbiAgICBpbnB1dC1jbGFzcz1cInRleHQtcmlnaHRcIlxuICAgIGNsYXNzPVwicS1tbC14cyBjb2wtc2hyaW5rXCJcbiAgICBAa2V5dXAuZW50ZXI9XCJzZWFyY2hFbnQoKVwiXG4gID5cbiAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgIDxxLWljb24gdi1pZj1cInRleHQgPT09ICcnXCIgbmFtZT1cInNlYXJjaFwiIC8+XG4gICAgICA8cS1pY29uXG4gICAgICAgIHYtZWxzZVxuICAgICAgICBuYW1lPVwiY2xlYXJcIlxuICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICAgIHNlYXJjaEVudCgpO1xuICAgICAgICBcIlxuICAgICAgLz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3EtaW5wdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NlYXJjaEJhcicsXG4gIG1ldGhvZHM6IHtcbiAgICBzZWFyY2hOb0VudCgpIHtcbiAgICAgIGlmICghdGhpcy5TZWFyY2hlbnRlcikge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHF1ZXJ5OiB7IC4uLnRoaXMuJHJvdXRlLnF1ZXJ5LCBxOiB0aGlzLnRleHQgfSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlYXJjaEVudCgpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcXVlcnk6IHsgLi4udGhpcy4kcm91dGUucXVlcnksIHE6IHRoaXMudGV4dCB9IH0pO1xuICAgIH1cbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgUm91dGUgPSB1c2VSb3V0ZSgpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiByZWYoYCR7Um91dGUucXVlcnlbJ3EnXSB8fCAnJ31gKSxcbiAgICAgIFNlYXJjaGVudGVyOiByZWYoZmFsc2UpXG4gICAgfTtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW1DQSxNQUFLLFlBQWEsZ0JBQWE7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQ1IsVUFBQSxDQUFDLEtBQUssYUFBYTtBQUNyQixhQUFLLFFBQVEsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssT0FBTyxPQUFPLEdBQUcsS0FBSyxLQUFBLEVBQVEsQ0FBQTtBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUNWLFdBQUssUUFBUSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxPQUFPLE9BQU8sR0FBRyxLQUFLLEtBQUEsRUFBUSxDQUFBO0FBQUEsSUFDckU7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQ04sVUFBTSxRQUFRO0FBQ1AsV0FBQTtBQUFBLE1BQ0wsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ3JDLGFBQWEsSUFBSSxLQUFLO0FBQUEsSUFBQTtBQUFBLEVBRTFCO0FBQ0YsQ0FBQzs7c0JBL0NDQSxZQXFCVSxRQUFBO0FBQUEsSUFwQlIsT0FBQTtBQUFBLElBQ0EsVUFBQTtBQUFBLElBQ1MsWUFBQSxLQUFBO0FBQUEsSUFBSSx1QkFBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLENBQUEsV0FBQSxLQUFBLE9BQUE7QUFBQSxJQUNiLFVBQVM7QUFBQSxJQUNULGVBQVk7QUFBQSxJQUNaLE9BQU07QUFBQSxJQUNMLFNBQUssK0NBQVEsS0FBUyxVQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUVOLFFBQU1DLFFBQ3JCLE1BQTJDO0FBQUEsTUFBN0IsS0FBQSxTQUFJLG1CQUFsQkQsWUFBMkMsT0FBQTtBQUFBLFFBQUEsS0FBQTtBQUFBLFFBQWhCLE1BQUs7QUFBQSxNQUFBLENBQUEsTUFBQUUsVUFBQSxHQUNoQ0YsWUFRRSxPQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFOQSxNQUFLO0FBQUEsUUFDTCxPQUFNO0FBQUEsUUFDTCxTQUFLLE9BQUEsT0FBQSxPQUFBLEtBQUEsQ0FBQSxXQUFBO0FBQWlCLGVBQUEsT0FBQTtBQUEwQixlQUFBLFVBQUE7QUFBQSxRQUFBO0FBQUE7Ozs7Ozs7In0=
