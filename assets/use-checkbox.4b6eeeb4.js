import { a as useDark, u as useDarkProps } from "./use-dark.63b90c22.js";
import { b as useSize, a as hMergeSlot, h as hSlot, u as useSizeProps } from "./QSpinner.6511ee07.js";
import { u as useRefocusTarget, o as optionSizes } from "./option-sizes.8951cf75.js";
import { u as useFormProps, a as useFormInject } from "./use-form.b3df9ff5.js";
import { r as ref, c as computed, h, g as getCurrentInstance, N as stopAndPrevent, ae as toRaw } from "./index.75e4774b.js";
const useCheckboxProps = {
  ...useDarkProps,
  ...useSizeProps,
  ...useFormProps,
  modelValue: {
    required: true,
    default: null
  },
  val: {},
  trueValue: { default: true },
  falseValue: { default: false },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (v) => v === "tf" || v === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
};
const useCheckboxEmits = ["update:modelValue"];
function useCheckbox(type, getInner) {
  const { props, slots, emit, proxy } = getCurrentInstance();
  const { $q } = proxy;
  const isDark = useDark(props, $q);
  const rootRef = ref(null);
  const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
  const sizeStyle = useSize(props, optionSizes);
  const modelIsArray = computed(
    () => props.val !== void 0 && Array.isArray(props.modelValue)
  );
  const index = computed(() => {
    const val = toRaw(props.val);
    return modelIsArray.value === true ? props.modelValue.findIndex((opt) => toRaw(opt) === val) : -1;
  });
  const isTrue = computed(() => modelIsArray.value === true ? index.value > -1 : toRaw(props.modelValue) === toRaw(props.trueValue));
  const isFalse = computed(() => modelIsArray.value === true ? index.value === -1 : toRaw(props.modelValue) === toRaw(props.falseValue));
  const isIndeterminate = computed(
    () => isTrue.value === false && isFalse.value === false
  );
  const tabindex = computed(() => props.disable === true ? -1 : props.tabindex || 0);
  const classes = computed(
    () => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props.dense === true ? ` q-${type}--dense` : "") + (props.leftLabel === true ? " reverse" : "")
  );
  const innerClass = computed(() => {
    const state = isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet";
    const color = props.color !== void 0 && (props.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props.color}` : "";
    return `q-${type}__inner relative-position non-selectable q-${type}__inner--${state}${color}`;
  });
  const formAttrs = computed(() => {
    const prop = { type: "checkbox" };
    props.name !== void 0 && Object.assign(prop, {
      "^checked": isTrue.value === true ? "checked" : void 0,
      name: props.name,
      value: modelIsArray.value === true ? props.val : props.trueValue
    });
    return prop;
  });
  const injectFormInput = useFormInject(formAttrs);
  const attributes = computed(() => {
    const attrs = {
      tabindex: tabindex.value,
      role: type === "toggle" ? "switch" : "checkbox",
      "aria-label": props.label,
      "aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
    };
    if (props.disable === true) {
      attrs["aria-disabled"] = "true";
    }
    return attrs;
  });
  function onClick(e) {
    if (e !== void 0) {
      stopAndPrevent(e);
      refocusTarget(e);
    }
    if (props.disable !== true) {
      emit("update:modelValue", getNextValue(), e);
    }
  }
  function getNextValue() {
    if (modelIsArray.value === true) {
      if (isTrue.value === true) {
        const val = props.modelValue.slice();
        val.splice(index.value, 1);
        return val;
      }
      return props.modelValue.concat([props.val]);
    }
    if (isTrue.value === true) {
      if (props.toggleOrder !== "ft" || props.toggleIndeterminate === false) {
        return props.falseValue;
      }
    } else if (isFalse.value === true) {
      if (props.toggleOrder === "ft" || props.toggleIndeterminate === false) {
        return props.trueValue;
      }
    } else {
      return props.toggleOrder !== "ft" ? props.trueValue : props.falseValue;
    }
    return props.indeterminateValue;
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
  const getInnerContent = getInner(isTrue, isIndeterminate);
  Object.assign(proxy, { toggle: onClick });
  return () => {
    const inner = getInnerContent();
    props.disable !== true && injectFormInput(
      inner,
      "unshift",
      ` q-${type}__native absolute q-ma-none q-pa-none`
    );
    const child = [
      h("div", {
        class: innerClass.value,
        style: sizeStyle.value,
        "aria-hidden": "true"
      }, inner)
    ];
    if (refocusTargetEl.value !== null) {
      child.push(refocusTargetEl.value);
    }
    const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
    label !== void 0 && child.push(
      h("div", {
        class: `q-${type}__label q-anchor--skip`
      }, label)
    );
    return h("div", {
      ref: rootRef,
      class: classes.value,
      ...attributes.value,
      onClick,
      onKeydown,
      onKeyup
    }, child);
  };
}
export { useCheckboxEmits as a, useCheckbox as b, useCheckboxProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWNoZWNrYm94LjRiNmVlZWI0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L3VzZS1jaGVja2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIHRvUmF3IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcbmltcG9ydCB1c2VSZWZvY3VzVGFyZ2V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJlZm9jdXMtdGFyZ2V0LmpzJ1xuaW1wb3J0IHsgdXNlRm9ybUluamVjdCwgdXNlRm9ybVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IG9wdGlvblNpemVzIGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvb3B0aW9uLXNpemVzLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90LCBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VDaGVja2JveFByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZVNpemVQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1vZGVsVmFsdWU6IHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIHZhbDoge30sXG5cbiAgdHJ1ZVZhbHVlOiB7IGRlZmF1bHQ6IHRydWUgfSxcbiAgZmFsc2VWYWx1ZTogeyBkZWZhdWx0OiBmYWxzZSB9LFxuICBpbmRldGVybWluYXRlVmFsdWU6IHsgZGVmYXVsdDogbnVsbCB9LFxuXG4gIGNoZWNrZWRJY29uOiBTdHJpbmcsXG4gIHVuY2hlY2tlZEljb246IFN0cmluZyxcbiAgaW5kZXRlcm1pbmF0ZUljb246IFN0cmluZyxcblxuICB0b2dnbGVPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ3RmJyB8fCB2ID09PSAnZnQnXG4gIH0sXG4gIHRvZ2dsZUluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG5cbiAgbGFiZWw6IFN0cmluZyxcbiAgbGVmdExhYmVsOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIGtlZXBDb2xvcjogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ2hlY2tib3hFbWl0cyA9IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCBnZXRJbm5lcikge1xuICBjb25zdCB7IHByb3BzLCBzbG90cywgZW1pdCwgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCB7IHJlZm9jdXNUYXJnZXRFbCwgcmVmb2N1c1RhcmdldCB9ID0gdXNlUmVmb2N1c1RhcmdldChwcm9wcywgcm9vdFJlZilcbiAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgb3B0aW9uU2l6ZXMpXG5cbiAgY29uc3QgbW9kZWxJc0FycmF5ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy52YWwgIT09IHZvaWQgMCAmJiBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpXG4gIClcblxuICBjb25zdCBpbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB2YWwgPSB0b1Jhdyhwcm9wcy52YWwpXG4gICAgcmV0dXJuIG1vZGVsSXNBcnJheS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlLmZpbmRJbmRleChvcHQgPT4gdG9SYXcob3B0KSA9PT0gdmFsKVxuICAgICAgOiAtMVxuICB9KVxuXG4gIGNvbnN0IGlzVHJ1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBtb2RlbElzQXJyYXkudmFsdWUgPT09IHRydWVcbiAgICAgID8gaW5kZXgudmFsdWUgPiAtMVxuICAgICAgOiB0b1Jhdyhwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdG9SYXcocHJvcHMudHJ1ZVZhbHVlKVxuICApKVxuXG4gIGNvbnN0IGlzRmFsc2UgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgbW9kZWxJc0FycmF5LnZhbHVlID09PSB0cnVlXG4gICAgICA/IGluZGV4LnZhbHVlID09PSAtMVxuICAgICAgOiB0b1Jhdyhwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdG9SYXcocHJvcHMuZmFsc2VWYWx1ZSlcbiAgKSlcblxuICBjb25zdCBpc0luZGV0ZXJtaW5hdGUgPSBjb21wdXRlZCgoKSA9PlxuICAgIGlzVHJ1ZS52YWx1ZSA9PT0gZmFsc2UgJiYgaXNGYWxzZS52YWx1ZSA9PT0gZmFsc2VcbiAgKVxuXG4gIGNvbnN0IHRhYmluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAtMSA6IHByb3BzLnRhYmluZGV4IHx8IDBcbiAgKSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS0keyB0eXBlIH0gY3Vyc29yLXBvaW50ZXIgbm8tb3V0bGluZSByb3cgaW5saW5lIG5vLXdyYXAgaXRlbXMtY2VudGVyYFxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/IGAgcS0keyB0eXBlIH0tLWRhcmtgIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyBgIHEtJHsgdHlwZSB9LS1kZW5zZWAgOiAnJylcbiAgICArIChwcm9wcy5sZWZ0TGFiZWwgPT09IHRydWUgPyAnIHJldmVyc2UnIDogJycpXG4gIClcblxuICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gaXNUcnVlLnZhbHVlID09PSB0cnVlID8gJ3RydXRoeScgOiAoaXNGYWxzZS52YWx1ZSA9PT0gdHJ1ZSA/ICdmYWxzeScgOiAnaW5kZXQnKVxuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuY29sb3IgIT09IHZvaWQgMCAmJiAoXG4gICAgICBwcm9wcy5rZWVwQ29sb3IgPT09IHRydWVcbiAgICAgIHx8ICh0eXBlID09PSAndG9nZ2xlJyA/IGlzVHJ1ZS52YWx1ZSA9PT0gdHJ1ZSA6IGlzRmFsc2UudmFsdWUgIT09IHRydWUpXG4gICAgKVxuICAgICAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWBcbiAgICAgIDogJydcblxuICAgIHJldHVybiBgcS0keyB0eXBlIH1fX2lubmVyIHJlbGF0aXZlLXBvc2l0aW9uIG5vbi1zZWxlY3RhYmxlIHEtJHsgdHlwZSB9X19pbm5lci0tJHsgc3RhdGUgfSR7IGNvbG9yIH1gXG4gIH0pXG5cbiAgY29uc3QgZm9ybUF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByb3AgPSB7IHR5cGU6ICdjaGVja2JveCcgfVxuXG4gICAgcHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIE9iamVjdC5hc3NpZ24ocHJvcCwge1xuICAgICAgJ15jaGVja2VkJzogaXNUcnVlLnZhbHVlID09PSB0cnVlID8gJ2NoZWNrZWQnIDogdm9pZCAwLFxuICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgIHZhbHVlOiBtb2RlbElzQXJyYXkudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy52YWxcbiAgICAgICAgOiBwcm9wcy50cnVlVmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb3BcbiAgfSlcblxuICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgcm9sZTogdHlwZSA9PT0gJ3RvZ2dsZScgPyAnc3dpdGNoJyA6ICdjaGVja2JveCcsXG4gICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsLFxuICAgICAgJ2FyaWEtY2hlY2tlZCc6IGlzSW5kZXRlcm1pbmF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICdtaXhlZCdcbiAgICAgICAgOiAoaXNUcnVlLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJylcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYXR0cnNbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgIGlmIChlICE9PSB2b2lkIDApIHtcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICByZWZvY3VzVGFyZ2V0KGUpXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZ2V0TmV4dFZhbHVlKCksIGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmV4dFZhbHVlICgpIHtcbiAgICBpZiAobW9kZWxJc0FycmF5LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNUcnVlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuICAgICAgICB2YWwuc3BsaWNlKGluZGV4LnZhbHVlLCAxKVxuICAgICAgICByZXR1cm4gdmFsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcy5tb2RlbFZhbHVlLmNvbmNhdChbIHByb3BzLnZhbCBdKVxuICAgIH1cblxuICAgIGlmIChpc1RydWUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGlmIChwcm9wcy50b2dnbGVPcmRlciAhPT0gJ2Z0JyB8fCBwcm9wcy50b2dnbGVJbmRldGVybWluYXRlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcHJvcHMuZmFsc2VWYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0ZhbHNlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBpZiAocHJvcHMudG9nZ2xlT3JkZXIgPT09ICdmdCcgfHwgcHJvcHMudG9nZ2xlSW5kZXRlcm1pbmF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnRydWVWYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9wcy50b2dnbGVPcmRlciAhPT0gJ2Z0J1xuICAgICAgICA/IHByb3BzLnRydWVWYWx1ZVxuICAgICAgICA6IHByb3BzLmZhbHNlVmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMuaW5kZXRlcm1pbmF0ZVZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICBvbkNsaWNrKGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0SW5uZXJDb250ZW50ID0gZ2V0SW5uZXIoaXNUcnVlLCBpc0luZGV0ZXJtaW5hdGUpXG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgdG9nZ2xlOiBvbkNsaWNrIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBpbm5lciA9IGdldElubmVyQ29udGVudCgpXG5cbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGluamVjdEZvcm1JbnB1dChcbiAgICAgIGlubmVyLFxuICAgICAgJ3Vuc2hpZnQnLFxuICAgICAgYCBxLSR7IHR5cGUgfV9fbmF0aXZlIGFic29sdXRlIHEtbWEtbm9uZSBxLXBhLW5vbmVgXG4gICAgKVxuXG4gICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH0sIGlubmVyKVxuICAgIF1cblxuICAgIGlmIChyZWZvY3VzVGFyZ2V0RWwudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGNoaWxkLnB1c2gocmVmb2N1c1RhcmdldEVsLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGxhYmVsID0gcHJvcHMubGFiZWwgIT09IHZvaWQgMFxuICAgICAgPyBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgIDogaFNsb3Qoc2xvdHMuZGVmYXVsdClcblxuICAgIGxhYmVsICE9PSB2b2lkIDAgJiYgY2hpbGQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGBxLSR7IHR5cGUgfV9fbGFiZWwgcS1hbmNob3ItLXNraXBgXG4gICAgICB9LCBsYWJlbClcbiAgICApXG5cbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5ZG93bixcbiAgICAgIG9uS2V5dXBcbiAgICB9LCBjaGlsZClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBV1ksTUFBQyxtQkFBbUI7QUFBQSxFQUM5QixHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFFSCxZQUFZO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsRUFDVjtBQUFBLEVBQ0QsS0FBSyxDQUFFO0FBQUEsRUFFUCxXQUFXLEVBQUUsU0FBUyxLQUFNO0FBQUEsRUFDNUIsWUFBWSxFQUFFLFNBQVMsTUFBTztBQUFBLEVBQzlCLG9CQUFvQixFQUFFLFNBQVMsS0FBTTtBQUFBLEVBRXJDLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLG1CQUFtQjtBQUFBLEVBRW5CLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFdBQVcsT0FBSyxNQUFNLFFBQVEsTUFBTTtBQUFBLEVBQ3JDO0FBQUEsRUFDRCxxQkFBcUI7QUFBQSxFQUVyQixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFFWCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFFUCxTQUFTO0FBQUEsRUFDVCxVQUFVLENBQUUsUUFBUSxNQUFRO0FBQzlCO0FBRVksTUFBQyxtQkFBbUIsQ0FBRSxtQkFBcUI7QUFFeEMsU0FBQSxZQUFVLE1BQU0sVUFBVTtBQUN2QyxRQUFNLEVBQUUsT0FBTyxPQUFPLE1BQU0sTUFBSyxJQUFLLG1CQUFvQjtBQUMxRCxRQUFNLEVBQUUsR0FBRSxJQUFLO0FBRWYsUUFBTSxTQUFTLFFBQVEsT0FBTyxFQUFFO0FBRWhDLFFBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsUUFB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
