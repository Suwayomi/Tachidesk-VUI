import { r as ref, a as isRuntimeSsrPreHydration, c as computed, h, T as Transition } from "./index.c15e704f.js";
import { I as Intersection } from "./Intersection.d463dc89.js";
import { c as createComponent, e as hDir, h as hSlot } from "./QSpinner.dc7e097a.js";
var QIntersection = createComponent({
  name: "QIntersection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    once: Boolean,
    transition: String,
    transitionDuration: {
      type: [String, Number],
      default: 300
    },
    ssrPrerender: Boolean,
    margin: String,
    threshold: [Number, Array],
    root: {
      default: null
    },
    disable: Boolean,
    onVisibility: Function
  },
  setup(props, { slots, emit }) {
    const showing = ref(isRuntimeSsrPreHydration.value === true ? props.ssrPrerender : false);
    const intersectionProps = computed(() => props.root !== void 0 || props.margin !== void 0 || props.threshold !== void 0 ? {
      handler: trigger,
      cfg: {
        root: props.root,
        rootMargin: props.margin,
        threshold: props.threshold
      }
    } : trigger);
    const hasDirective = computed(
      () => props.disable !== true && (isRuntimeSsrPreHydration.value !== true || props.once !== true || props.ssrPrerender !== true)
    );
    const directives = computed(() => {
      return [[
        Intersection,
        intersectionProps.value,
        void 0,
        { once: props.once }
      ]];
    });
    const transitionStyle = computed(
      () => `--q-transition-duration: ${props.transitionDuration}ms`
    );
    function trigger(entry) {
      if (showing.value !== entry.isIntersecting) {
        showing.value = entry.isIntersecting;
        props.onVisibility !== void 0 && emit("visibility", showing.value);
      }
    }
    function getContent() {
      return showing.value === true ? [h("div", { key: "content", style: transitionStyle.value }, hSlot(slots.default))] : void 0;
    }
    return () => {
      const child = props.transition ? [
        h(Transition, {
          name: "q-transition--" + props.transition
        }, getContent)
      ] : getContent();
      return hDir(
        props.tag,
        { class: "q-intersection" },
        child,
        "main",
        hasDirective.value,
        () => directives.value
      );
    };
  }
});
export { QIntersection as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUludGVyc2VjdGlvbi4xOTZhZTNjNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbnRlcnNlY3Rpb24vUUludGVyc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBUcmFuc2l0aW9uIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgSW50ZXJzZWN0aW9uIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvSW50ZXJzZWN0aW9uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSW50ZXJzZWN0aW9uJyxcblxuICBwcm9wczoge1xuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgb25jZTogQm9vbGVhbixcbiAgICB0cmFuc2l0aW9uOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9LFxuXG4gICAgc3NyUHJlcmVuZGVyOiBCb29sZWFuLFxuXG4gICAgbWFyZ2luOiBTdHJpbmcsXG4gICAgdGhyZXNob2xkOiBbIE51bWJlciwgQXJyYXkgXSxcbiAgICByb290OiB7XG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgICBvblZpc2liaWxpdHk6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCBzaG93aW5nID0gcmVmKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnNzclByZXJlbmRlciA6IGZhbHNlKVxuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9uUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5yb290ICE9PSB2b2lkIDAgfHwgcHJvcHMubWFyZ2luICE9PSB2b2lkIDAgfHwgcHJvcHMudGhyZXNob2xkICE9PSB2b2lkIDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBoYW5kbGVyOiB0cmlnZ2VyLFxuICAgICAgICAgICAgY2ZnOiB7XG4gICAgICAgICAgICAgIHJvb3Q6IHByb3BzLnJvb3QsXG4gICAgICAgICAgICAgIHJvb3RNYXJnaW46IHByb3BzLm1hcmdpbixcbiAgICAgICAgICAgICAgdGhyZXNob2xkOiBwcm9wcy50aHJlc2hvbGRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDogdHJpZ2dlclxuICAgICkpXG5cbiAgICBjb25zdCBoYXNEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgICAgJiYgKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSAhPT0gdHJ1ZSB8fCBwcm9wcy5vbmNlICE9PSB0cnVlIHx8IHByb3BzLnNzclByZXJlbmRlciAhPT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBkaXJlY3RpdmVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgaGFzRGlyZWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIEludGVyc2VjdGlvbixcbiAgICAgICAgaW50ZXJzZWN0aW9uUHJvcHMudmFsdWUsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgeyBvbmNlOiBwcm9wcy5vbmNlIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uU3R5bGUgPSBjb21wdXRlZChcbiAgICAgICgpID0+IGAtLXEtdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIH1tc2BcbiAgICApXG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChlbnRyeSkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHNob3dpbmcudmFsdWUgPSBlbnRyeS5pc0ludGVyc2VjdGluZ1xuICAgICAgICBwcm9wcy5vblZpc2liaWxpdHkgIT09IHZvaWQgMCAmJiBlbWl0KCd2aXNpYmlsaXR5Jywgc2hvd2luZy52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIHJldHVybiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gWyBoKCdkaXYnLCB7IGtleTogJ2NvbnRlbnQnLCBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSBdXG4gICAgICAgIDogdm9pZCAwXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMudHJhbnNpdGlvblxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS0nICsgcHJvcHMudHJhbnNpdGlvblxuICAgICAgICAgICAgfSwgZ2V0Q29udGVudClcbiAgICAgICAgICBdXG4gICAgICAgIDogZ2V0Q29udGVudCgpXG5cbiAgICAgIHJldHVybiBoRGlyKFxuICAgICAgICBwcm9wcy50YWcsXG4gICAgICAgIHsgY2xhc3M6ICdxLWludGVyc2VjdGlvbicgfSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgICdtYWluJyxcbiAgICAgICAgaGFzRGlyZWN0aXZlLnZhbHVlLFxuICAgICAgICAoKSA9PiBkaXJlY3RpdmVzLnZhbHVlXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLElBQUEsZ0JBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLG9CQUFvQjtBQUFBLE1BQ2xCLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsY0FBYztBQUFBLElBRWQsUUFBUTtBQUFBLElBQ1IsV0FBVyxDQUFFLFFBQVEsS0FBTztBQUFBLElBQzVCLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxTQUFTO0FBQUEsSUFFVCxjQUFjO0FBQUEsRUFDZjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxVQUFVLElBQUkseUJBQXlCLFVBQVUsT0FBTyxNQUFNLGVBQWUsS0FBSztBQUV4RixVQUFNLG9CQUFvQixTQUFTLE1BQ2pDLE1BQU0sU0FBUyxVQUFVLE1BQU0sV0FBVyxVQUFVLE1BQU0sY0FBYyxTQUNwRTtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsS0FBSztBQUFBLFFBQ0gsTUFBTSxNQUFNO0FBQUEsUUFDWixZQUFZLE1BQU07QUFBQSxRQUNsQixXQUFXLE1BQU07QUFBQSxNQUNsQjtBQUFBLElBQ0YsSUFDRCxPQUNMO0FBRUQsVUFBTSxlQUFlO0FBQUEsTUFBUyxNQUM1QixNQUFNLFlBQVksU0FDZCx5QkFBeUIsVUFBVSxRQUFRLE1BQU0sU0FBUyxRQUFRLE1BQU0saUJBQWlCO0FBQUEsSUFDOUY7QUFFRCxVQUFNLGFBQWEsU0FBUyxNQUFNO0FBRWhDLGFBQU8sQ0FBRTtBQUFBLFFBQ1A7QUFBQSxRQUNBLGtCQUFrQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxFQUFFLE1BQU0sTUFBTSxLQUFNO0FBQUEsTUFDNUIsQ0FBUztBQUFBLElBQ1QsQ0FBSztBQUVELFVBQU0sa0JBQWtCO0FBQUEsTUFDdEIsTUFBTSw0QkFBNkIsTUFBTTtBQUFBLElBQzFDO0FBRUQsYUFBUyxRQUFTLE9BQU87QUFDdkIsVUFBSSxRQUFRLFVBQVUsTUFBTSxnQkFBZ0I7QUFDMUMsZ0JBQVEsUUFBUSxNQUFNO0FBQ3RCLGNBQU0saUJBQWlCLFVBQVUsS0FBSyxjQUFjLFFBQVEsS0FBSztBQUFBLE1BQ2xFO0FBQUEsSUFDRjtBQUVELGFBQVMsYUFBYztBQUNyQixhQUFPLFFBQVEsVUFBVSxPQUNyQixDQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssV0FBVyxPQUFPLGdCQUFnQixNQUFPLEdBQUUsTUFBTSxNQUFNLE9BQU8sQ0FBQyxDQUFHLElBQ3BGO0FBQUEsSUFDTDtBQUVELFdBQU8sTUFBTTtBQUNYLFlBQU0sUUFBUSxNQUFNLGFBQ2hCO0FBQUEsUUFDRSxFQUFFLFlBQVk7QUFBQSxVQUNaLE1BQU0sbUJBQW1CLE1BQU07QUFBQSxRQUNoQyxHQUFFLFVBQVU7QUFBQSxNQUNkLElBQ0QsV0FBWTtBQUVoQixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixFQUFFLE9BQU8saUJBQWtCO0FBQUEsUUFDM0I7QUFBQSxRQUNBO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixNQUFNLFdBQVc7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0gsQ0FBQzs7In0=
