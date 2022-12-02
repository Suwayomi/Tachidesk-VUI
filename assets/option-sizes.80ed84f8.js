import { r as ref, c as computed, h } from "./index.0b61810d.js";
function useRefocusTarget(props, rootRef) {
  const refocusRef = ref(null);
  const refocusTargetEl = computed(() => {
    if (props.disable === true) {
      return null;
    }
    return h("span", {
      ref: refocusRef,
      class: "no-outline",
      tabindex: -1
    });
  });
  function refocusTarget(e) {
    const root = rootRef.value;
    if (e !== void 0 && e.type.indexOf("key") === 0) {
      if (root !== null && document.activeElement !== root && root.contains(document.activeElement) === true) {
        root.focus();
      }
    } else if (refocusRef.value !== null && (e === void 0 || root !== null && root.contains(e.target) === true)) {
      refocusRef.value.focus();
    }
  }
  return {
    refocusTargetEl,
    refocusTarget
  };
}
var optionSizes = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
};
export { optionSizes as o, useRefocusTarget as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLXNpemVzLjgwZWQ4NGY4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yZWZvY3VzLXRhcmdldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvb3B0aW9uLXNpemVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgcm9vdFJlZikge1xuICBjb25zdCByZWZvY3VzUmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgcmVmb2N1c1RhcmdldEVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBoKCdzcGFuJywge1xuICAgICAgcmVmOiByZWZvY3VzUmVmLFxuICAgICAgY2xhc3M6ICduby1vdXRsaW5lJyxcbiAgICAgIHRhYmluZGV4OiAtMVxuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVmb2N1c1RhcmdldCAoZSkge1xuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLnZhbHVlXG5cbiAgICBpZiAoZSAhPT0gdm9pZCAwICYmIGUudHlwZS5pbmRleE9mKCdrZXknKSA9PT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICByb290ICE9PSBudWxsXG4gICAgICAgICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHJvb3RcbiAgICAgICAgJiYgcm9vdC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHJvb3QuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIHJlZm9jdXNSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICYmIChlID09PSB2b2lkIDAgfHwgKHJvb3QgIT09IG51bGwgJiYgcm9vdC5jb250YWlucyhlLnRhcmdldCkgPT09IHRydWUpKVxuICAgICkge1xuICAgICAgcmVmb2N1c1JlZi52YWx1ZS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWZvY3VzVGFyZ2V0RWwsXG4gICAgcmVmb2N1c1RhcmdldFxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHhzOiAzMCxcbiAgc206IDM1LFxuICBtZDogNDAsXG4gIGxnOiA1MCxcbiAgeGw6IDYwXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVlLFNBQUEsaUJBQVUsT0FBTyxTQUFTO0FBQ3ZDLFFBQU0sYUFBYSxJQUFJLElBQUk7QUFFM0IsUUFBTSxrQkFBa0IsU0FBUyxNQUFNO0FBQ3JDLFFBQUksTUFBTSxZQUFZLE1BQU07QUFDMUIsYUFBTztBQUFBLElBQ1I7QUFFRCxXQUFPLEVBQUUsUUFBUTtBQUFBLE1BQ2YsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCLENBQUs7QUFBQSxFQUNMLENBQUc7QUFFRCxXQUFTLGNBQWUsR0FBRztBQUN6QixVQUFNLE9BQU8sUUFBUTtBQUVyQixRQUFJLE1BQU0sVUFBVSxFQUFFLEtBQUssUUFBUSxLQUFLLE1BQU0sR0FBRztBQUMvQyxVQUNFLFNBQVMsUUFDTixTQUFTLGtCQUFrQixRQUMzQixLQUFLLFNBQVMsU0FBUyxhQUFhLE1BQU0sTUFDN0M7QUFDQSxhQUFLLE1BQU87QUFBQSxNQUNiO0FBQUEsSUFDRixXQUVDLFdBQVcsVUFBVSxTQUNqQixNQUFNLFVBQVcsU0FBUyxRQUFRLEtBQUssU0FBUyxFQUFFLE1BQU0sTUFBTSxPQUNsRTtBQUNBLGlCQUFXLE1BQU0sTUFBTztBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUVELFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFDSDtBQ3pDQSxJQUFlLGNBQUE7QUFBQSxFQUNiLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFDTjs7In0=
