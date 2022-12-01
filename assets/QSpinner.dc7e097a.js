import { c as computed, S as markRaw, d as defineComponent, h, B as withDirectives } from "./index.c15e704f.js";
const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
const useSizeProps = {
  size: String
};
function useSize(props, sizes = useSizeDefaults) {
  return computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}
const createComponent = (raw) => markRaw(defineComponent(raw));
const createDirective = (raw) => markRaw(raw);
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice();
    }
  }
  return otherwise;
}
function hMergeSlot(slot, source) {
  return slot !== void 0 ? source.concat(slot()) : source;
}
function hMergeSlotSafely(slot, source) {
  if (slot === void 0) {
    return source;
  }
  return source !== void 0 ? source.concat(slot()) : slot();
}
function hDir(tag, data, children, key, condition, getDirsFn) {
  data.key = key + condition;
  const vnode = h(tag, data, children);
  return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  return {
    cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
    classes: computed(
      () => "q-spinner" + (props.color ? ` text-${props.color}` : "")
    )
  };
}
var QSpinner = createComponent({
  name: "QSpinner",
  props: {
    ...useSpinnerProps,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value + " q-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
export { QSpinner as Q, hMergeSlot as a, useSize as b, createComponent as c, hUniqueSlot as d, hDir as e, createDirective as f, useSpinnerProps as g, hSlot as h, useSpinner as i, hMergeSlotSafely as j, useSizeProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNwaW5uZXIuZGM3ZTA5N2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2NyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zcGlubmVyL3VzZS1zcGlubmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zcGlubmVyL1FTcGlubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlU2l6ZURlZmF1bHRzID0ge1xuICB4czogMTgsXG4gIHNtOiAyNCxcbiAgbWQ6IDMyLFxuICBsZzogMzgsXG4gIHhsOiA0NlxufVxuXG5leHBvcnQgY29uc3QgdXNlU2l6ZVByb3BzID0ge1xuICBzaXplOiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBzaXplcyA9IHVzZVNpemVEZWZhdWx0cykge1xuICAvLyByZXR1cm4gc2l6ZVN0eWxlXG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuc2l6ZSAhPT0gdm9pZCAwXG4gICAgICA/IHsgZm9udFNpemU6IHByb3BzLnNpemUgaW4gc2l6ZXMgPyBgJHsgc2l6ZXNbIHByb3BzLnNpemUgXSB9cHhgIDogcHJvcHMuc2l6ZSB9XG4gICAgICA6IG51bGxcbiAgKSlcbn1cbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgbWFya1JhdyB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IHJhdyA9PiBtYXJrUmF3KGRlZmluZUNvbXBvbmVudChyYXcpKVxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpcmVjdGl2ZSA9IHJhdyA9PiBtYXJrUmF3KHJhdylcbiIsImltcG9ydCB7IGgsIHdpdGhEaXJlY3RpdmVzIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZnVuY3Rpb24gaFNsb3QgKHNsb3QsIG90aGVyd2lzZSkge1xuICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgPyBzbG90KCkgfHwgb3RoZXJ3aXNlXG4gICAgOiBvdGhlcndpc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhVbmlxdWVTbG90IChzbG90LCBvdGhlcndpc2UpIHtcbiAgaWYgKHNsb3QgIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IHZub2RlID0gc2xvdCgpXG4gICAgaWYgKHZub2RlICE9PSB2b2lkIDAgJiYgdm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2bm9kZS5zbGljZSgpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG90aGVyd2lzZVxufVxuXG4vKipcbiAqIFNvdXJjZSBkZWZpbml0ZWx5IGV4aXN0cyxcbiAqIHNvIGl0J3MgbWVyZ2VkIHdpdGggdGhlIHBvc3NpYmxlIHNsb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhNZXJnZVNsb3QgKHNsb3QsIHNvdXJjZSkge1xuICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgPyBzb3VyY2UuY29uY2F0KHNsb3QoKSlcbiAgICA6IHNvdXJjZVxufVxuXG4vKipcbiAqIE1lcmdlIHdpdGggcG9zc2libGUgc2xvdCxcbiAqIGV2ZW4gaWYgc291cmNlIG1pZ2h0IG5vdCBleGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaE1lcmdlU2xvdFNhZmVseSAoc2xvdCwgc291cmNlKSB7XG4gIGlmIChzbG90ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gc291cmNlXG4gIH1cblxuICByZXR1cm4gc291cmNlICE9PSB2b2lkIDBcbiAgICA/IHNvdXJjZS5jb25jYXQoc2xvdCgpKVxuICAgIDogc2xvdCgpXG59XG5cbi8qXG4gKiAoU3RyaW5nKSAga2V5ICAgICAgIC0gdW5pcXVlIHZub2RlIGtleVxuICogKEJvb2xlYW4pIGNvbmRpdGlvbiAtIHNob3VsZCBjaGFuZ2UgT05MWSB3aGVuIGFkZGluZy9yZW1vdmluZyBkaXJlY3RpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhEaXIgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBrZXksXG4gIGNvbmRpdGlvbixcbiAgZ2V0RGlyc0ZuXG4pIHtcbiAgZGF0YS5rZXkgPSBrZXkgKyBjb25kaXRpb25cblxuICBjb25zdCB2bm9kZSA9IGgodGFnLCBkYXRhLCBjaGlsZHJlbilcblxuICByZXR1cm4gY29uZGl0aW9uID09PSB0cnVlXG4gICAgPyB3aXRoRGlyZWN0aXZlcyh2bm9kZSwgZ2V0RGlyc0ZuKCkpXG4gICAgOiB2bm9kZVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VTaXplRGVmYXVsdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlU3Bpbm5lclByb3BzID0ge1xuICBzaXplOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6ICcxZW0nXG4gIH0sXG4gIGNvbG9yOiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3Bpbm5lciAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBjU2l6ZTogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2l6ZSBpbiB1c2VTaXplRGVmYXVsdHNcbiAgICAgICAgPyBgJHsgdXNlU2l6ZURlZmF1bHRzWyBwcm9wcy5zaXplIF0gfXB4YFxuICAgICAgICA6IHByb3BzLnNpemVcbiAgICApKSxcblxuICAgIGNsYXNzZXM6IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zcGlubmVyJyArIChwcm9wcy5jb2xvciA/IGAgdGV4dC0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNwaW5uZXIsIHsgdXNlU3Bpbm5lclByb3BzIH0gZnJvbSAnLi91c2Utc3Bpbm5lci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTcGlubmVyUHJvcHMsXG5cbiAgICB0aGlja25lc3M6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDVcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSArICcgcS1zcGlubmVyLW1hdCcsXG4gICAgICB3aWR0aDogY1NpemUudmFsdWUsXG4gICAgICBoZWlnaHQ6IGNTaXplLnZhbHVlLFxuICAgICAgdmlld0JveDogJzI1IDI1IDUwIDUwJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2NpcmNsZScsIHtcbiAgICAgICAgY2xhc3M6ICdwYXRoJyxcbiAgICAgICAgY3g6ICc1MCcsXG4gICAgICAgIGN5OiAnNTAnLFxuICAgICAgICByOiAnMjAnLFxuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiBwcm9wcy50aGlja25lc3MsXG4gICAgICAgICdzdHJva2UtbWl0ZXJsaW1pdCc6ICcxMCdcbiAgICAgIH0pXG4gICAgXSlcbiAgfVxufSlcbiJd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
