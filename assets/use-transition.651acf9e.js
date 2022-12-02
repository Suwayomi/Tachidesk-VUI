import { r as ref, w as watch, c as computed, A as nextTick } from "./index.5cc93081.js";
const useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function useTransition(props, showing) {
  const transitionState = ref(showing.value);
  watch(showing, (val) => {
    nextTick(() => {
      transitionState.value = val;
    });
  });
  return {
    transition: computed(() => "q-transition--" + (transitionState.value === true ? props.transitionHide : props.transitionShow)),
    transitionStyle: computed(() => `--q-transition-duration: ${props.transitionDuration}ms`)
  };
}
export { useTransition as a, useTransitionProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXRyYW5zaXRpb24uNjUxYWNmOWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRyYW5zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVHJhbnNpdGlvblByb3BzID0ge1xuICB0cmFuc2l0aW9uU2hvdzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZmFkZSdcbiAgfSxcblxuICB0cmFuc2l0aW9uSGlkZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZmFkZSdcbiAgfSxcblxuICB0cmFuc2l0aW9uRHVyYXRpb246IHtcbiAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGVmYXVsdDogMzAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBzaG93aW5nKSB7XG4gIGNvbnN0IHRyYW5zaXRpb25TdGF0ZSA9IHJlZihzaG93aW5nLnZhbHVlKVxuXG4gIHdhdGNoKHNob3dpbmcsIHZhbCA9PiB7XG4gICAgbmV4dFRpY2soKCkgPT4geyB0cmFuc2l0aW9uU3RhdGUudmFsdWUgPSB2YWwgfSlcbiAgfSlcblxuICAvLyByZXR1cm4gdHJhbnNpdGlvblxuICByZXR1cm4ge1xuICAgIHRyYW5zaXRpb246IGNvbXB1dGVkKCgpID0+ICdxLXRyYW5zaXRpb24tLScgKyAoXG4gICAgICB0cmFuc2l0aW9uU3RhdGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50cmFuc2l0aW9uSGlkZSA6IHByb3BzLnRyYW5zaXRpb25TaG93XG4gICAgKSksXG5cbiAgICB0cmFuc2l0aW9uU3R5bGU6IGNvbXB1dGVkKCgpID0+IGAtLXEtdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIH1tc2ApXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRVksTUFBQyxxQkFBcUI7QUFBQSxFQUNoQyxnQkFBZ0I7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxnQkFBZ0I7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxvQkFBb0I7QUFBQSxJQUNsQixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFDeEIsU0FBUztBQUFBLEVBQ1Y7QUFDSDtBQUVlLFNBQUEsY0FBVSxPQUFPLFNBQVM7QUFDdkMsUUFBTSxrQkFBa0IsSUFBSSxRQUFRLEtBQUs7QUFFekMsUUFBTSxTQUFTLFNBQU87QUFDcEIsYUFBUyxNQUFNO0FBQUUsc0JBQWdCLFFBQVE7QUFBQSxJQUFHLENBQUU7QUFBQSxFQUNsRCxDQUFHO0FBR0QsU0FBTztBQUFBLElBQ0wsWUFBWSxTQUFTLE1BQU0sb0JBQ3pCLGdCQUFnQixVQUFVLE9BQU8sTUFBTSxpQkFBaUIsTUFBTSxlQUMvRDtBQUFBLElBRUQsaUJBQWlCLFNBQVMsTUFBTSw0QkFBNkIsTUFBTSxzQkFBdUI7QUFBQSxFQUMzRjtBQUNIOzsifQ==
