import { c as createComponent, h as hSlot } from "./QSpinner.6511ee07.js";
import { i as inject, e as emptyRenderFn, c as computed, h, l as layoutKey, G as pageContainerKey, g as getCurrentInstance } from "./index.75e4774b.js";
var QPage = createComponent({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPage needs to be a deep child of QLayout");
      return emptyRenderFn;
    }
    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error("QPage needs to be child of QPageContainer");
      return emptyRenderFn;
    }
    const style = computed(() => {
      const offset = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
      if (typeof props.styleFn === "function") {
        const height = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
        return props.styleFn(offset, height);
      }
      return {
        minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset + "px" : $q.screen.height === 0 ? offset !== 0 ? `calc(100vh - ${offset}px)` : "100vh" : $q.screen.height - offset + "px"
      };
    });
    const classes = computed(
      () => `q-page${props.padding === true ? " q-layout-padding" : ""}`
    );
    return () => h("main", {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
export { QPage as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBhZ2UuZDY1YjA3ZTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlJyxcblxuICBwcm9wczoge1xuICAgIHBhZGRpbmc6IEJvb2xlYW4sXG4gICAgc3R5bGVGbjogRnVuY3Rpb25cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRUGFnZSBuZWVkcyB0byBiZSBhIGRlZXAgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0ICRwYWdlQ29udGFpbmVyID0gaW5qZWN0KHBhZ2VDb250YWluZXJLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRwYWdlQ29udGFpbmVyID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRUGFnZSBuZWVkcyB0byBiZSBjaGlsZCBvZiBRUGFnZUNvbnRhaW5lcicpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0XG4gICAgICAgID0gKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlID8gJGxheW91dC5oZWFkZXIuc2l6ZSA6IDApXG4gICAgICAgICsgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlID8gJGxheW91dC5mb290ZXIuc2l6ZSA6IDApXG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAkbGF5b3V0LmNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgIDogJHEuc2NyZWVuLmhlaWdodFxuXG4gICAgICAgIHJldHVybiBwcm9wcy5zdHlsZUZuKG9mZnNldCwgaGVpZ2h0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW5IZWlnaHQ6ICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICgkbGF5b3V0LmNvbnRhaW5lckhlaWdodC52YWx1ZSAtIG9mZnNldCkgKyAncHgnXG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICRxLnNjcmVlbi5oZWlnaHQgPT09IDBcbiAgICAgICAgICAgICAgICA/IChvZmZzZXQgIT09IDAgPyBgY2FsYygxMDB2aCAtICR7IG9mZnNldCB9cHgpYCA6ICcxMDB2aCcpXG4gICAgICAgICAgICAgICAgOiAoJHEuc2NyZWVuLmhlaWdodCAtIG9mZnNldCkgKyAncHgnXG4gICAgICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtcGFnZSR7IHByb3BzLnBhZGRpbmcgPT09IHRydWUgPyAnIHEtbGF5b3V0LXBhZGRpbmcnIDogJycgfWBcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnbWFpbicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxJQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxVQUFVLE9BQU8sV0FBVyxhQUFhO0FBQy9DLFFBQUksWUFBWSxlQUFlO0FBQzdCLGNBQVEsTUFBTSwyQ0FBMkM7QUFDekQsYUFBTztBQUFBLElBQ1I7QUFFRCxVQUFNLGlCQUFpQixPQUFPLGtCQUFrQixhQUFhO0FBQzdELFFBQUksbUJBQW1CLGVBQWU7QUFDcEMsY0FBUSxNQUFNLDJDQUEyQztBQUN6RCxhQUFPO0FBQUEsSUFDUjtBQUVELFVBQU0sUUFBUSxTQUFTLE1BQU07QUFDM0IsWUFBTSxVQUNELFFBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxPQUFPLE9BQU8sTUFDdEQsUUFBUSxPQUFPLFVBQVUsT0FBTyxRQUFRLE9BQU8sT0FBTztBQUUzRCxVQUFJLE9BQU8sTUFBTSxZQUFZLFlBQVk7QUFDdkMsY0FBTSxTQUFTLFFBQVEsWUFBWSxVQUFVLE9BQ3pDLFFBQVEsZ0JBQWdCLFFBQ3hCLEdBQUcsT0FBTztBQUVkLGVBQU8sTUFBTSxRQUFRLFFBQVEsTUFBTTtBQUFBLE1BQ3BDO0FBRUQsYUFBTztBQUFBLFFBQ0wsV0FBVyxRQUFRLFlBQVksVUFBVSxPQUNwQyxRQUFRLGdCQUFnQixRQUFRLFNBQVUsT0FFekMsR0FBRyxPQUFPLFdBQVcsSUFDaEIsV0FBVyxJQUFJLGdCQUFpQixjQUFlLFVBQy9DLEdBQUcsT0FBTyxTQUFTLFNBQVU7QUFBQSxNQUV6QztBQUFBLElBQ1AsQ0FBSztBQUVELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsU0FBVSxNQUFNLFlBQVksT0FBTyxzQkFBc0I7QUFBQSxJQUMxRDtBQUVELFdBQU8sTUFBTSxFQUFFLFFBQVE7QUFBQSxNQUNyQixPQUFPLFFBQVE7QUFBQSxNQUNmLE9BQU8sTUFBTTtBQUFBLElBQ25CLEdBQU8sTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3hCO0FBQ0gsQ0FBQzs7In0=
