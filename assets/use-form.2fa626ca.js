import { c as computed, h } from "./index.c15e704f.js";
const useFormProps = {
  name: String
};
function useFormAttrs(props) {
  return computed(() => ({
    type: "hidden",
    name: props.name,
    value: props.modelValue
  }));
}
function useFormInject(formAttrs = {}) {
  return (child, action, className) => {
    child[action](
      h("input", {
        class: "hidden" + (className || ""),
        ...formAttrs.value
      })
    );
  };
}
function useFormInputNameAttr(props) {
  return computed(() => props.name || props.for);
}
export { useFormInject as a, useFormInputNameAttr as b, useFormAttrs as c, useFormProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWZvcm0uMmZhNjI2Y2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VGb3JtUHJvcHMgPSB7XG4gIG5hbWU6IFN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9ybUF0dHJzIChwcm9wcykge1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgIHZhbHVlOiBwcm9wcy5tb2RlbFZhbHVlXG4gIH0pKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9ybUluamVjdCAoZm9ybUF0dHJzID0ge30pIHtcbiAgcmV0dXJuIChjaGlsZCwgYWN0aW9uLCBjbGFzc05hbWUpID0+IHtcbiAgICBjaGlsZFsgYWN0aW9uIF0oXG4gICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgY2xhc3M6ICdoaWRkZW4nICsgKGNsYXNzTmFtZSB8fCAnJyksXG4gICAgICAgIC4uLmZvcm1BdHRycy52YWx1ZVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm1JbnB1dE5hbWVBdHRyIChwcm9wcykge1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gcHJvcHMubmFtZSB8fCBwcm9wcy5mb3IpXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVZLE1BQUMsZUFBZTtBQUFBLEVBQzFCLE1BQU07QUFDUjtBQUVPLFNBQVMsYUFBYyxPQUFPO0FBQ25DLFNBQU8sU0FBUyxPQUFPO0FBQUEsSUFDckIsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsSUFDWixPQUFPLE1BQU07QUFBQSxFQUNqQixFQUFJO0FBQ0o7QUFFTyxTQUFTLGNBQWUsWUFBWSxJQUFJO0FBQzdDLFNBQU8sQ0FBQyxPQUFPLFFBQVEsY0FBYztBQUNuQyxVQUFPO0FBQUEsTUFDTCxFQUFFLFNBQVM7QUFBQSxRQUNULE9BQU8sWUFBWSxhQUFhO0FBQUEsUUFDaEMsR0FBRyxVQUFVO0FBQUEsTUFDckIsQ0FBTztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0g7QUFFTyxTQUFTLHFCQUFzQixPQUFPO0FBQzNDLFNBQU8sU0FBUyxNQUFNLE1BQU0sUUFBUSxNQUFNLEdBQUc7QUFDL0M7OyJ9
