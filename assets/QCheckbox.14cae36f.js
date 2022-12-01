import { Q as QIcon } from "./QIcon.00211d75.js";
import { c as createComponent } from "./QSpinner.ce362078.js";
import { u as useCheckboxProps, a as useCheckboxEmits, b as useCheckbox } from "./use-checkbox.edaab605.js";
import { h, c as computed } from "./index.ba4ecd3b.js";
const bgNode = h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
var QCheckbox = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null
      );
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return useCheckbox("checkbox", getInner);
  }
});
export { QCheckbox as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUNoZWNrYm94LjE0Y2FlMzZmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L1FDaGVja2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHVzZUNoZWNrYm94LCB7IHVzZUNoZWNrYm94UHJvcHMsIHVzZUNoZWNrYm94RW1pdHMgfSBmcm9tICcuL3VzZS1jaGVja2JveC5qcydcblxuY29uc3QgYmdOb2RlID0gaCgnZGl2Jywge1xuICBrZXk6ICdzdmcnLFxuICBjbGFzczogJ3EtY2hlY2tib3hfX2JnIGFic29sdXRlJ1xufSwgW1xuICBoKCdzdmcnLCB7XG4gICAgY2xhc3M6ICdxLWNoZWNrYm94X19zdmcgZml0IGFic29sdXRlLWZ1bGwnLFxuICAgIHZpZXdCb3g6ICcwIDAgMjQgMjQnXG4gIH0sIFtcbiAgICBoKCdwYXRoJywge1xuICAgICAgY2xhc3M6ICdxLWNoZWNrYm94X190cnV0aHknLFxuICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgZDogJ00xLjczLDEyLjkxIDguMSwxOS4yOCAyMi43OSw0LjU5J1xuICAgIH0pLFxuXG4gICAgaCgncGF0aCcsIHtcbiAgICAgIGNsYXNzOiAncS1jaGVja2JveF9faW5kZXQnLFxuICAgICAgZDogJ000LDE0SDIwVjEwSDQnXG4gICAgfSlcbiAgXSlcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ2hlY2tib3gnLFxuXG4gIHByb3BzOiB1c2VDaGVja2JveFByb3BzLFxuICBlbWl0czogdXNlQ2hlY2tib3hFbWl0cyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRJbm5lciAoaXNUcnVlLCBpc0luZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IGljb24gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgICAoaXNUcnVlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5jaGVja2VkSWNvblxuICAgICAgICAgIDogKGlzSW5kZXRlcm1pbmF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IHByb3BzLmluZGV0ZXJtaW5hdGVJY29uXG4gICAgICAgICAgICAgIDogcHJvcHMudW5jaGVja2VkSWNvblxuICAgICAgICAgICAgKVxuICAgICAgICApIHx8IG51bGxcbiAgICAgIClcblxuICAgICAgcmV0dXJuICgpID0+IChcbiAgICAgICAgaWNvbi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAga2V5OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLWNoZWNrYm94X19pY29uLWNvbnRhaW5lciBhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAncS1jaGVja2JveF9faWNvbicsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBpY29uLnZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFsgYmdOb2RlIF1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlQ2hlY2tib3goJ2NoZWNrYm94JywgZ2V0SW5uZXIpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE1BQU0sU0FBUyxFQUFFLE9BQU87QUFBQSxFQUN0QixLQUFLO0FBQUEsRUFDTCxPQUFPO0FBQ1QsR0FBRztBQUFBLEVBQ0QsRUFBRSxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsRUFDYixHQUFLO0FBQUEsSUFDRCxFQUFFLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEdBQUc7QUFBQSxJQUNULENBQUs7QUFBQSxJQUVELEVBQUUsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsR0FBRztBQUFBLElBQ1QsQ0FBSztBQUFBLEVBQ0wsQ0FBRztBQUNILENBQUM7QUFFRCxJQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBRVAsTUFBTyxPQUFPO0FBQ1osYUFBUyxTQUFVLFFBQVEsaUJBQWlCO0FBQzFDLFlBQU0sT0FBTztBQUFBLFFBQVMsT0FDbkIsT0FBTyxVQUFVLE9BQ2QsTUFBTSxjQUNMLGdCQUFnQixVQUFVLE9BQ3ZCLE1BQU0sb0JBQ04sTUFBTSxrQkFFVDtBQUFBLE1BQ047QUFFRCxhQUFPLE1BQ0wsS0FBSyxVQUFVLE9BQ1g7QUFBQSxRQUNFLEVBQUUsT0FBTztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ3ZCLEdBQWlCO0FBQUEsVUFDRCxFQUFFLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLE1BQU0sS0FBSztBQUFBLFVBQzdCLENBQWlCO0FBQUEsUUFDakIsQ0FBZTtBQUFBLE1BQ0YsSUFDRCxDQUFFLE1BQVE7QUFBQSxJQUVqQjtBQUVELFdBQU8sWUFBWSxZQUFZLFFBQVE7QUFBQSxFQUN4QztBQUNILENBQUM7OyJ9
