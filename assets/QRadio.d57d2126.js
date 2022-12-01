import { Q as QIcon } from "./QIcon.25655771.js";
import { u as useDarkProps, a as useDark } from "./use-dark.97ac6897.js";
import { c as createComponent, u as useSizeProps, b as useSize, a as hMergeSlot, h as hSlot } from "./QSpinner.dc7e097a.js";
import { o as optionSizes, u as useRefocusTarget } from "./option-sizes.d2e717dc.js";
import { u as useFormProps, a as useFormInject } from "./use-form.2fa626ca.js";
import { h, r as ref, c as computed, g as getCurrentInstance, ad as toRaw, L as stopAndPrevent } from "./index.c15e704f.js";
const svg = h("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24"
}, [
  h("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  h("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]);
var QRadio = createComponent({
  name: "QRadio",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    ...useFormProps,
    modelValue: { required: true },
    val: { required: true },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    const sizeStyle = useSize(props, optionSizes);
    const rootRef = ref(null);
    const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
    const isTrue = computed(() => toRaw(props.modelValue) === toRaw(props.val));
    const classes = computed(
      () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (props.disable === true ? " disabled" : "") + (isDark.value === true ? " q-radio--dark" : "") + (props.dense === true ? " q-radio--dense" : "") + (props.leftLabel === true ? " reverse" : "")
    );
    const innerClass = computed(() => {
      const color = props.color !== void 0 && (props.keepColor === true || isTrue.value === true) ? ` text-${props.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${isTrue.value === true ? "truthy" : "falsy"}${color}`;
    });
    const icon = computed(
      () => (isTrue.value === true ? props.checkedIcon : props.uncheckedIcon) || null
    );
    const tabindex = computed(() => props.disable === true ? -1 : props.tabindex || 0);
    const formAttrs = computed(() => {
      const prop = { type: "radio" };
      props.name !== void 0 && Object.assign(prop, {
        "^checked": isTrue.value === true ? "checked" : void 0,
        name: props.name,
        value: props.val
      });
      return prop;
    });
    const injectFormInput = useFormInject(formAttrs);
    function onClick(e) {
      if (e !== void 0) {
        stopAndPrevent(e);
        refocusTarget(e);
      }
      if (props.disable !== true && isTrue.value !== true) {
        emit("update:modelValue", props.val, e);
      }
    }
    function onKeydown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        stopAndPrevent(e);
      }
    }
    function onKeyup(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        onClick(e);
      }
    }
    Object.assign(proxy, { set: onClick });
    return () => {
      const content = icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-radio__icon",
            name: icon.value
          })
        ])
      ] : [svg];
      props.disable !== true && injectFormInput(
        content,
        "unshift",
        " q-radio__native q-ma-none q-pa-none"
      );
      const child = [
        h("div", {
          class: innerClass.value,
          style: sizeStyle.value,
          "aria-hidden": "true"
        }, content)
      ];
      if (refocusTargetEl.value !== null) {
        child.push(refocusTargetEl.value);
      }
      const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
      label !== void 0 && child.push(
        h("div", {
          class: "q-radio__label q-anchor--skip"
        }, label)
      );
      return h("div", {
        ref: rootRef,
        class: classes.value,
        tabindex: tabindex.value,
        role: "radio",
        "aria-label": props.label,
        "aria-checked": isTrue.value === true ? "true" : "false",
        "aria-disabled": props.disable === true ? "true" : void 0,
        onClick,
        onKeydown,
        onKeyup
      }, child);
    };
  }
});
export { QRadio as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVJhZGlvLmQ1N2QyMTI2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3JhZGlvL1FSYWRpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIHRvUmF3IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5pbXBvcnQgdXNlUmVmb2N1c1RhcmdldCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yZWZvY3VzLXRhcmdldC5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUluamVjdCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IG9wdGlvblNpemVzIGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvb3B0aW9uLXNpemVzLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90LCBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHN2ZyA9IGgoJ3N2ZycsIHtcbiAga2V5OiAnc3ZnJyxcbiAgY2xhc3M6ICdxLXJhZGlvX19iZyBhYnNvbHV0ZSBub24tc2VsZWN0YWJsZScsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnXG59LCBbXG4gIGgoJ3BhdGgnLCB7XG4gICAgZDogJ00xMiwyMmExMCwxMCAwIDAgMSAtMTAsLTEwYTEwLDEwIDAgMCAxIDEwLC0xMGExMCwxMCAwIDAgMSAxMCwxMGExMCwxMCAwIDAgMSAtMTAsMTBtMCwtMjJhMTIsMTIgMCAwIDAgLTEyLDEyYTEyLDEyIDAgMCAwIDEyLDEyYTEyLDEyIDAgMCAwIDEyLC0xMmExMiwxMiAwIDAgMCAtMTIsLTEyJ1xuICB9KSxcblxuICBoKCdwYXRoJywge1xuICAgIGNsYXNzOiAncS1yYWRpb19fY2hlY2snLFxuICAgIGQ6ICdNMTIsNmE2LDYgMCAwIDAgLTYsNmE2LDYgMCAwIDAgNiw2YTYsNiAwIDAgMCA2LC02YTYsNiAwIDAgMCAtNiwtNidcbiAgfSlcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUmFkaW8nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVNpemVQcm9wcyxcbiAgICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgdmFsOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxlZnRMYWJlbDogQm9vbGVhbixcblxuICAgIGNoZWNrZWRJY29uOiBTdHJpbmcsXG4gICAgdW5jaGVja2VkSWNvbjogU3RyaW5nLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBrZWVwQ29sb3I6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgb3B0aW9uU2l6ZXMpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgeyByZWZvY3VzVGFyZ2V0RWwsIHJlZm9jdXNUYXJnZXQgfSA9IHVzZVJlZm9jdXNUYXJnZXQocHJvcHMsIHJvb3RSZWYpXG5cbiAgICBjb25zdCBpc1RydWUgPSBjb21wdXRlZCgoKSA9PiB0b1Jhdyhwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdG9SYXcocHJvcHMudmFsKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtcmFkaW8gY3Vyc29yLXBvaW50ZXIgbm8tb3V0bGluZSByb3cgaW5saW5lIG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtcmFkaW8tLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1yYWRpby0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5sZWZ0TGFiZWwgPT09IHRydWUgPyAnIHJldmVyc2UnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuY29sb3IgIT09IHZvaWQgMCAmJiAoXG4gICAgICAgIHByb3BzLmtlZXBDb2xvciA9PT0gdHJ1ZVxuICAgICAgICB8fCBpc1RydWUudmFsdWUgPT09IHRydWVcbiAgICAgIClcbiAgICAgICAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWBcbiAgICAgICAgOiAnJ1xuXG4gICAgICByZXR1cm4gJ3EtcmFkaW9fX2lubmVyIHJlbGF0aXZlLXBvc2l0aW9uICdcbiAgICAgICAgKyBgcS1yYWRpb19faW5uZXItLSR7IGlzVHJ1ZS52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnV0aHknIDogJ2ZhbHN5JyB9JHsgY29sb3IgfWBcbiAgICB9KVxuXG4gICAgY29uc3QgaWNvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoaXNUcnVlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY2hlY2tlZEljb25cbiAgICAgICAgOiBwcm9wcy51bmNoZWNrZWRJY29uXG4gICAgICApIHx8IG51bGxcbiAgICApXG5cbiAgICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAtMSA6IHByb3BzLnRhYmluZGV4IHx8IDBcbiAgICApKVxuXG4gICAgY29uc3QgZm9ybUF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgcHJvcCA9IHsgdHlwZTogJ3JhZGlvJyB9XG5cbiAgICAgIHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBPYmplY3QuYXNzaWduKHByb3AsIHtcbiAgICAgICAgJ15jaGVja2VkJzogaXNUcnVlLnZhbHVlID09PSB0cnVlID8gJ2NoZWNrZWQnIDogdm9pZCAwLFxuICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB2YWx1ZTogcHJvcHMudmFsXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcHJvcFxuICAgIH0pXG5cbiAgICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGlmIChlICE9PSB2b2lkIDApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgcmVmb2N1c1RhcmdldChlKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpc1RydWUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBwcm9wcy52YWwsIGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXl1cCAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgICBvbkNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBzZXQ6IG9uQ2xpY2sgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaWNvbi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnaWNvbicsXG4gICAgICAgICAgICAgIGNsYXNzOiAncS1yYWRpb19faWNvbi1jb250YWluZXIgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3EtcmFkaW9fX2ljb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6IGljb24udmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFsgc3ZnIF1cblxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpbmplY3RGb3JtSW5wdXQoXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgICd1bnNoaWZ0JyxcbiAgICAgICAgJyBxLXJhZGlvX19uYXRpdmUgcS1tYS1ub25lIHEtcGEtbm9uZSdcbiAgICAgIClcblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBjb250ZW50KVxuICAgICAgXVxuXG4gICAgICBpZiAocmVmb2N1c1RhcmdldEVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkLnB1c2gocmVmb2N1c1RhcmdldEVsLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBsYWJlbCA9IHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgPyBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgICAgOiBoU2xvdChzbG90cy5kZWZhdWx0KVxuXG4gICAgICBsYWJlbCAhPT0gdm9pZCAwICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtcmFkaW9fX2xhYmVsIHEtYW5jaG9yLS1za2lwJ1xuICAgICAgICB9LCBsYWJlbClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICByb2xlOiAncmFkaW8nLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsLFxuICAgICAgICAnYXJpYS1jaGVja2VkJzogaXNUcnVlLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogdm9pZCAwLFxuICAgICAgICBvbkNsaWNrLFxuICAgICAgICBvbktleWRvd24sXG4gICAgICAgIG9uS2V5dXBcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFjQSxNQUFNLE1BQU0sRUFBRSxPQUFPO0FBQUEsRUFDbkIsS0FBSztBQUFBLEVBQ0wsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELEVBQUUsUUFBUTtBQUFBLElBQ1IsR0FBRztBQUFBLEVBQ1AsQ0FBRztBQUFBLEVBRUQsRUFBRSxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxHQUFHO0FBQUEsRUFDUCxDQUFHO0FBQ0gsQ0FBQztBQUVELElBQUEsU0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFFSCxZQUFZLEVBQUUsVUFBVSxLQUFNO0FBQUEsSUFDOUIsS0FBSyxFQUFFLFVBQVUsS0FBTTtBQUFBLElBRXZCLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUVYLGFBQWE7QUFBQSxJQUNiLGVBQWU7QUFBQSxJQUVmLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUVQLFNBQVM7QUFBQSxJQUNULFVBQVUsQ0FBRSxRQUFRLE1BQVE7QUFBQSxFQUM3QjtBQUFBLEVBRUQsT0FBTyxDQUFFLG1CQUFxQjtBQUFBLEVBRTlCLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxNQUFPLElBQUcsbUJBQW9CO0FBRXRDLFVBQU0sU0FBUyxRQUFRLE9BQU8sTUFBTSxFQUFFO0FBQ3RDLFVBQU0sWUFBWSxRQUFRLE9BQU8sV0FBVztBQUU1QyxVQUFNLFVBQVUsSUFBSSxJQUFJO0FBQ3hCLFVBQU0sRUFBRSxpQkFBaUIsY0FBYSxJQUFLLGlCQUFpQixPQUFPLE9BQU87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
