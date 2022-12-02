import { c as computed, h, T as Transition, g as getCurrentInstance } from "./index.5cc93081.js";
import { c as createComponent, Q as QSpinner } from "./QSpinner.7d14a7f2.js";
import { u as useDarkProps, a as useDark } from "./use-dark.1adac86a.js";
import { u as useTransitionProps, a as useTransition } from "./use-transition.651acf9e.js";
var QInnerLoading = createComponent({
  name: "QInnerLoading",
  props: {
    ...useDarkProps,
    ...useTransitionProps,
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: 42
    },
    label: String,
    labelClass: String,
    labelStyle: [String, Array, Object]
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { transition, transitionStyle } = useTransition(props, computed(() => props.showing));
    const classes = computed(
      () => "q-inner-loading absolute-full column flex-center" + (isDark.value === true ? " q-inner-loading--dark" : "")
    );
    const labelClass = computed(
      () => "q-inner-loading__label" + (props.labelClass !== void 0 ? ` ${props.labelClass}` : "")
    );
    function getInner() {
      const child = [
        h(QSpinner, {
          size: props.size,
          color: props.color
        })
      ];
      if (props.label !== void 0) {
        child.push(
          h("div", {
            class: labelClass.value,
            style: props.labelStyle
          }, [props.label])
        );
      }
      return child;
    }
    function getContent() {
      return props.showing === true ? h(
        "div",
        { class: classes.value, style: transitionStyle.value },
        slots.default !== void 0 ? slots.default() : getInner()
      ) : null;
    }
    return () => h(Transition, {
      name: transition.value,
      appear: true
    }, getContent);
  }
});
export { QInnerLoading as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUlubmVyTG9hZGluZy40ODA1MDVjMC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbm5lci1sb2FkaW5nL1FJbm5lckxvYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIFRyYW5zaXRpb24sIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VUcmFuc2l0aW9uLCB7IHVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRyYW5zaXRpb24uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSW5uZXJMb2FkaW5nJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VUcmFuc2l0aW9uUHJvcHMsXG5cbiAgICBzaG93aW5nOiBCb29sZWFuLFxuICAgIGNvbG9yOiBTdHJpbmcsXG5cbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA0MlxuICAgIH0sXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxhYmVsQ2xhc3M6IFN0cmluZyxcbiAgICBsYWJlbFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCB7IHRyYW5zaXRpb24sIHRyYW5zaXRpb25TdHlsZSB9ID0gdXNlVHJhbnNpdGlvbihwcm9wcywgY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2hvd2luZykpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWlubmVyLWxvYWRpbmcgYWJzb2x1dGUtZnVsbCBjb2x1bW4gZmxleC1jZW50ZXInXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtaW5uZXItbG9hZGluZy0tZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWlubmVyLWxvYWRpbmdfX2xhYmVsJ1xuICAgICAgKyAocHJvcHMubGFiZWxDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5sYWJlbENsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5uZXIgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoUVNwaW5uZXIsIHtcbiAgICAgICAgICBzaXplOiBwcm9wcy5zaXplLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvclxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmxhYmVsU3R5bGVcbiAgICAgICAgICB9LCBbIHByb3BzLmxhYmVsIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICByZXR1cm4gcHJvcHMuc2hvd2luZyA9PT0gdHJ1ZVxuICAgICAgICA/IGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHRyYW5zaXRpb25TdHlsZS52YWx1ZSB9LFxuICAgICAgICAgIHNsb3RzLmRlZmF1bHQgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBzbG90cy5kZWZhdWx0KClcbiAgICAgICAgICAgIDogZ2V0SW5uZXIoKVxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBoKFRyYW5zaXRpb24sIHtcbiAgICAgIG5hbWU6IHRyYW5zaXRpb24udmFsdWUsXG4gICAgICBhcHBlYXI6IHRydWVcbiAgICB9LCBnZXRDb250ZW50KVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxJQUFBLGdCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUVILFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUVQLE1BQU07QUFBQSxNQUNKLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osWUFBWSxDQUFFLFFBQVEsT0FBTyxNQUFRO0FBQUEsRUFDdEM7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxLQUFLLG1CQUFvQjtBQUMvQixVQUFNLFNBQVMsUUFBUSxPQUFPLEdBQUcsTUFBTSxFQUFFO0FBRXpDLFVBQU0sRUFBRSxZQUFZLGdCQUFlLElBQUssY0FBYyxPQUFPLFNBQVMsTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUUxRixVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLHNEQUNHLE9BQU8sVUFBVSxPQUFPLDJCQUEyQjtBQUFBLElBQ3ZEO0FBRUQsVUFBTSxhQUFhO0FBQUEsTUFBUyxNQUMxQiw0QkFDRyxNQUFNLGVBQWUsU0FBUyxJQUFLLE1BQU0sZUFBZ0I7QUFBQSxJQUM3RDtBQUVELGFBQVMsV0FBWTtBQUNuQixZQUFNLFFBQVE7QUFBQSxRQUNaLEVBQUUsVUFBVTtBQUFBLFVBQ1YsTUFBTSxNQUFNO0FBQUEsVUFDWixPQUFPLE1BQU07QUFBQSxRQUN2QixDQUFTO0FBQUEsTUFDRjtBQUVELFVBQUksTUFBTSxVQUFVLFFBQVE7QUFDMUIsY0FBTTtBQUFBLFVBQ0osRUFBRSxPQUFPO0FBQUEsWUFDUCxPQUFPLFdBQVc7QUFBQSxZQUNsQixPQUFPLE1BQU07QUFBQSxVQUN6QixHQUFhLENBQUUsTUFBTSxNQUFPO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBRUQsYUFBTztBQUFBLElBQ1I7QUFFRCxhQUFTLGFBQWM7QUFDckIsYUFBTyxNQUFNLFlBQVksT0FDckI7QUFBQSxRQUNBO0FBQUEsUUFDQSxFQUFFLE9BQU8sUUFBUSxPQUFPLE9BQU8sZ0JBQWdCLE1BQU87QUFBQSxRQUN0RCxNQUFNLFlBQVksU0FDZCxNQUFNLFFBQVMsSUFDZixTQUFVO0FBQUEsTUFDZixJQUNDO0FBQUEsSUFDTDtBQUVELFdBQU8sTUFBTSxFQUFFLFlBQVk7QUFBQSxNQUN6QixNQUFNLFdBQVc7QUFBQSxNQUNqQixRQUFRO0FBQUEsSUFDVCxHQUFFLFVBQVU7QUFBQSxFQUNkO0FBQ0gsQ0FBQzs7In0=
