import { c as createComponent, a as hMergeSlot } from "./QSpinner.6511ee07.js";
import { c as computed, h } from "./index.75e4774b.js";
const alignValues = ["top", "middle", "bottom"];
var QBadge = createComponent({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (v) => alignValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      return props.align !== void 0 ? { verticalAlign: props.align } : null;
    });
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${props.multiLine === true ? "multi" : "single"}-line` + (props.outline === true ? " q-badge--outline" : props.color !== void 0 ? ` bg-${props.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (props.floating === true ? " q-badge--floating" : "") + (props.rounded === true ? " q-badge--rounded" : "") + (props.transparent === true ? " q-badge--transparent" : "");
    });
    return () => h("div", {
      class: classes.value,
      style: style.value,
      role: "status",
      "aria-label": props.label
    }, hMergeSlot(slots.default, props.label !== void 0 ? [props.label] : []));
  }
});
export { QBadge as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJhZGdlLjBkNTMzMWM3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2JhZGdlL1FCYWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGFsaWduVmFsdWVzID0gWyAndG9wJywgJ21pZGRsZScsICdib3R0b20nIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCYWRnZScsXG5cbiAgcHJvcHM6IHtcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgZmxvYXRpbmc6IEJvb2xlYW4sXG4gICAgdHJhbnNwYXJlbnQ6IEJvb2xlYW4sXG4gICAgbXVsdGlMaW5lOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGxhYmVsOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuYWxpZ24gIT09IHZvaWQgMFxuICAgICAgICA/IHsgdmVydGljYWxBbGlnbjogcHJvcHMuYWxpZ24gfVxuICAgICAgICA6IG51bGxcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgICAgIDogcHJvcHMudGV4dENvbG9yXG5cbiAgICAgIHJldHVybiAncS1iYWRnZSBmbGV4IGlubGluZSBpdGVtcy1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgKyBgIHEtYmFkZ2UtLSR7IHByb3BzLm11bHRpTGluZSA9PT0gdHJ1ZSA/ICdtdWx0aScgOiAnc2luZ2xlJyB9LWxpbmVgXG4gICAgICAgICsgKHByb3BzLm91dGxpbmUgPT09IHRydWVcbiAgICAgICAgICA/ICcgcS1iYWRnZS0tb3V0bGluZSdcbiAgICAgICAgICA6IChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICAgICApXG4gICAgICAgICsgKHRleHQgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0ZXh0IH1gIDogJycpXG4gICAgICAgICsgKHByb3BzLmZsb2F0aW5nID09PSB0cnVlID8gJyBxLWJhZGdlLS1mbG9hdGluZycgOiAnJylcbiAgICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcS1iYWRnZS0tcm91bmRlZCcgOiAnJylcbiAgICAgICAgKyAocHJvcHMudHJhbnNwYXJlbnQgPT09IHRydWUgPyAnIHEtYmFkZ2UtLXRyYW5zcGFyZW50JyA6ICcnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMubGFiZWxcbiAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgPyBbIHByb3BzLmxhYmVsIF0gOiBbXSkpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxNQUFNLGNBQWMsQ0FBRSxPQUFPLFVBQVUsUUFBVTtBQUVqRCxJQUFBLFNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBRVgsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLElBRVQsT0FBTyxDQUFFLFFBQVEsTUFBUTtBQUFBLElBRXpCLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFdBQVcsT0FBSyxZQUFZLFNBQVMsQ0FBQztBQUFBLElBQ3ZDO0FBQUEsRUFDRjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUN2QixVQUFNLFFBQVEsU0FBUyxNQUFNO0FBQzNCLGFBQU8sTUFBTSxVQUFVLFNBQ25CLEVBQUUsZUFBZSxNQUFNLE1BQU8sSUFDOUI7QUFBQSxJQUNWLENBQUs7QUFFRCxVQUFNLFVBQVUsU0FBUyxNQUFNO0FBQzdCLFlBQU0sT0FBTyxNQUFNLFlBQVksT0FDM0IsTUFBTSxTQUFTLE1BQU0sWUFDckIsTUFBTTtBQUVWLGFBQU8scURBQ1csTUFBTSxjQUFjLE9BQU8sVUFBVSxtQkFDbEQsTUFBTSxZQUFZLE9BQ2pCLHNCQUNDLE1BQU0sVUFBVSxTQUFTLE9BQVEsTUFBTSxVQUFXLE9BRXBELFNBQVMsU0FBUyxTQUFVLFNBQVUsT0FDdEMsTUFBTSxhQUFhLE9BQU8sdUJBQXVCLE9BQ2pELE1BQU0sWUFBWSxPQUFPLHNCQUFzQixPQUMvQyxNQUFNLGdCQUFnQixPQUFPLDBCQUEwQjtBQUFBLElBQ2xFLENBQUs7QUFFRCxXQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsTUFDcEIsT0FBTyxRQUFRO0FBQUEsTUFDZixPQUFPLE1BQU07QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLGNBQWMsTUFBTTtBQUFBLElBQ3JCLEdBQUUsV0FBVyxNQUFNLFNBQVMsTUFBTSxVQUFVLFNBQVMsQ0FBRSxNQUFNLEtBQU8sSUFBRyxDQUFFLENBQUEsQ0FBQztBQUFBLEVBQzVFO0FBQ0gsQ0FBQzs7In0=
