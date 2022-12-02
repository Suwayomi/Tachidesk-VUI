import { f as createDirective } from "./QSpinner.7d14a7f2.js";
import { ac as isDeepEqual } from "./index.5cc93081.js";
const defaultCfg = {
  threshold: 0,
  root: null,
  rootMargin: "0px"
};
function update(el, ctx, value) {
  let handler, cfg, changed;
  if (typeof value === "function") {
    handler = value;
    cfg = defaultCfg;
    changed = ctx.cfg === void 0;
  } else {
    handler = value.handler;
    cfg = Object.assign({}, defaultCfg, value.cfg);
    changed = ctx.cfg === void 0 || isDeepEqual(ctx.cfg, cfg) === false;
  }
  if (ctx.handler !== handler) {
    ctx.handler = handler;
  }
  if (changed === true) {
    ctx.cfg = cfg;
    ctx.observer !== void 0 && ctx.observer.unobserve(el);
    ctx.observer = new IntersectionObserver(([entry]) => {
      if (typeof ctx.handler === "function") {
        if (entry.rootBounds === null && document.body.contains(el) === true) {
          ctx.observer.unobserve(el);
          ctx.observer.observe(el);
          return;
        }
        const res = ctx.handler(entry, ctx.observer);
        if (res === false || ctx.once === true && entry.isIntersecting === true) {
          destroy(el);
        }
      }
    }, cfg);
    ctx.observer.observe(el);
  }
}
function destroy(el) {
  const ctx = el.__qvisible;
  if (ctx !== void 0) {
    ctx.observer !== void 0 && ctx.observer.unobserve(el);
    delete el.__qvisible;
  }
}
var Intersection = createDirective(
  {
    name: "intersection",
    mounted(el, { modifiers, value }) {
      const ctx = {
        once: modifiers.once === true
      };
      update(el, ctx, value);
      el.__qvisible = ctx;
    },
    updated(el, binding) {
      const ctx = el.__qvisible;
      ctx !== void 0 && update(el, ctx, binding.value);
    },
    beforeUnmount: destroy
  }
);
export { Intersection as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJzZWN0aW9uLjc5MzIwYzUyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL0ludGVyc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGlzRGVlcEVxdWFsIH0gZnJvbSAnLi4vdXRpbHMvaXMuanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5jb25zdCBkZWZhdWx0Q2ZnID0ge1xuICB0aHJlc2hvbGQ6IDAsXG4gIHJvb3Q6IG51bGwsXG4gIHJvb3RNYXJnaW46ICcwcHgnXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSAoZWwsIGN0eCwgdmFsdWUpIHtcbiAgbGV0IGhhbmRsZXIsIGNmZywgY2hhbmdlZFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBoYW5kbGVyID0gdmFsdWVcbiAgICBjZmcgPSBkZWZhdWx0Q2ZnXG4gICAgY2hhbmdlZCA9IGN0eC5jZmcgPT09IHZvaWQgMFxuICB9XG4gIGVsc2Uge1xuICAgIGhhbmRsZXIgPSB2YWx1ZS5oYW5kbGVyXG4gICAgY2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENmZywgdmFsdWUuY2ZnKVxuICAgIGNoYW5nZWQgPSBjdHguY2ZnID09PSB2b2lkIDAgfHwgaXNEZWVwRXF1YWwoY3R4LmNmZywgY2ZnKSA9PT0gZmFsc2VcbiAgfVxuXG4gIGlmIChjdHguaGFuZGxlciAhPT0gaGFuZGxlcikge1xuICAgIGN0eC5oYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgaWYgKGNoYW5nZWQgPT09IHRydWUpIHtcbiAgICBjdHguY2ZnID0gY2ZnXG4gICAgY3R4Lm9ic2VydmVyICE9PSB2b2lkIDAgJiYgY3R4Lm9ic2VydmVyLnVub2JzZXJ2ZShlbClcblxuICAgIGN0eC5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoWyBlbnRyeSBdKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGN0eC5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIGlmIG9ic2VydmVkIGVsZW1lbnQgaXMgcGFydCBvZiBhIHZ1ZSB0cmFuc2l0aW9uXG4gICAgICAgIC8vIHRoZW4gd2UgbmVlZCB0byBiZSBjYXJlZnVsLi4uXG4gICAgICAgIGlmIChcbiAgICAgICAgICBlbnRyeS5yb290Qm91bmRzID09PSBudWxsXG4gICAgICAgICAgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyhlbCkgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3R4Lm9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICAgICAgICBjdHgub2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGN0eC5oYW5kbGVyKGVudHJ5LCBjdHgub2JzZXJ2ZXIpXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlcyA9PT0gZmFsc2VcbiAgICAgICAgICB8fCAoY3R4Lm9uY2UgPT09IHRydWUgJiYgZW50cnkuaXNJbnRlcnNlY3RpbmcgPT09IHRydWUpXG4gICAgICAgICkge1xuICAgICAgICAgIGRlc3Ryb3koZWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjZmcpXG5cbiAgICBjdHgub2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXN0cm95IChlbCkge1xuICBjb25zdCBjdHggPSBlbC5fX3F2aXNpYmxlXG5cbiAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgY3R4Lm9ic2VydmVyICE9PSB2b2lkIDAgJiYgY3R4Lm9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICBkZWxldGUgZWwuX19xdmlzaWJsZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICdpbnRlcnNlY3Rpb24nLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ2ludGVyc2VjdGlvbicsXG5cbiAgICAgIG1vdW50ZWQgKGVsLCB7IG1vZGlmaWVycywgdmFsdWUgfSkge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgb25jZTogbW9kaWZpZXJzLm9uY2UgPT09IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZShlbCwgY3R4LCB2YWx1ZSlcblxuICAgICAgICBlbC5fX3F2aXNpYmxlID0gY3R4XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F2aXNpYmxlXG4gICAgICAgIGN0eCAhPT0gdm9pZCAwICYmIHVwZGF0ZShlbCwgY3R4LCBiaW5kaW5nLnZhbHVlKVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudDogZGVzdHJveVxuICAgIH1cbilcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sYUFBYTtBQUFBLEVBQ2pCLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFDZDtBQUVBLFNBQVMsT0FBUSxJQUFJLEtBQUssT0FBTztBQUMvQixNQUFJLFNBQVMsS0FBSztBQUVsQixNQUFJLE9BQU8sVUFBVSxZQUFZO0FBQy9CLGNBQVU7QUFDVixVQUFNO0FBQ04sY0FBVSxJQUFJLFFBQVE7QUFBQSxFQUN2QixPQUNJO0FBQ0gsY0FBVSxNQUFNO0FBQ2hCLFVBQU0sT0FBTyxPQUFPLENBQUUsR0FBRSxZQUFZLE1BQU0sR0FBRztBQUM3QyxjQUFVLElBQUksUUFBUSxVQUFVLFlBQVksSUFBSSxLQUFLLEdBQUcsTUFBTTtBQUFBLEVBQy9EO0FBRUQsTUFBSSxJQUFJLFlBQVksU0FBUztBQUMzQixRQUFJLFVBQVU7QUFBQSxFQUNmO0FBRUQsTUFBSSxZQUFZLE1BQU07QUFDcEIsUUFBSSxNQUFNO0FBQ1YsUUFBSSxhQUFhLFVBQVUsSUFBSSxTQUFTLFVBQVUsRUFBRTtBQUVwRCxRQUFJLFdBQVcsSUFBSSxxQkFBcUIsQ0FBQyxDQUFFLEtBQUssTUFBTztBQUNyRCxVQUFJLE9BQU8sSUFBSSxZQUFZLFlBQVk7QUFHckMsWUFDRSxNQUFNLGVBQWUsUUFDbEIsU0FBUyxLQUFLLFNBQVMsRUFBRSxNQUFNLE1BQ2xDO0FBQ0EsY0FBSSxTQUFTLFVBQVUsRUFBRTtBQUN6QixjQUFJLFNBQVMsUUFBUSxFQUFFO0FBQ3ZCO0FBQUEsUUFDRDtBQUVELGNBQU0sTUFBTSxJQUFJLFFBQVEsT0FBTyxJQUFJLFFBQVE7QUFFM0MsWUFDRSxRQUFRLFNBQ0osSUFBSSxTQUFTLFFBQVEsTUFBTSxtQkFBbUIsTUFDbEQ7QUFDQSxrQkFBUSxFQUFFO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLEdBQUUsR0FBRztBQUVOLFFBQUksU0FBUyxRQUFRLEVBQUU7QUFBQSxFQUN4QjtBQUNIO0FBRUEsU0FBUyxRQUFTLElBQUk7QUFDcEIsUUFBTSxNQUFNLEdBQUc7QUFFZixNQUFJLFFBQVEsUUFBUTtBQUNsQixRQUFJLGFBQWEsVUFBVSxJQUFJLFNBQVMsVUFBVSxFQUFFO0FBQ3BELFdBQU8sR0FBRztBQUFBLEVBQ1g7QUFDSDtBQUVBLElBQUEsZUFBZTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUVOLFFBQVMsSUFBSSxFQUFFLFdBQVcsTUFBSyxHQUFJO0FBQ2pDLFlBQU0sTUFBTTtBQUFBLFFBQ1YsTUFBTSxVQUFVLFNBQVM7QUFBQSxNQUMxQjtBQUVELGFBQU8sSUFBSSxLQUFLLEtBQUs7QUFFckIsU0FBRyxhQUFhO0FBQUEsSUFDakI7QUFBQSxJQUVELFFBQVMsSUFBSSxTQUFTO0FBQ3BCLFlBQU0sTUFBTSxHQUFHO0FBQ2YsY0FBUSxVQUFVLE9BQU8sSUFBSSxLQUFLLFFBQVEsS0FBSztBQUFBLElBQ2hEO0FBQUEsSUFFRCxlQUFlO0FBQUEsRUFDaEI7QUFDTDs7In0=
