import { r as ref, a as isRuntimeSsrPreHydration, z as onMounted, o as onBeforeUnmount, X as noop, A as nextTick, h, g as getCurrentInstance, Q as listenOpts } from "./index.ba4ecd3b.js";
import { c as createComponent } from "./QSpinner.ce362078.js";
function useCanRender() {
  const canRender = ref(!isRuntimeSsrPreHydration.value);
  if (canRender.value === false) {
    onMounted(() => {
      canRender.value = true;
    });
  }
  return canRender;
}
const hasObserver = typeof ResizeObserver !== "undefined";
const resizeProps = hasObserver === true ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
var QResizeObserver = createComponent({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(props, { emit }) {
    let timer = null, targetEl, size = { width: -1, height: -1 };
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (timer === null) {
        timer = setTimeout(emitEvent, props.debounce);
      }
    }
    function emitEvent() {
      clearTimeout(timer);
      timer = null;
      if (targetEl) {
        const { offsetWidth: width, offsetHeight: height } = targetEl;
        if (width !== size.width || height !== size.height) {
          size = { width, height };
          emit("resize", size);
        }
      }
    }
    const { proxy } = getCurrentInstance();
    if (hasObserver === true) {
      let observer;
      const init = (stop) => {
        targetEl = proxy.$el.parentNode;
        if (targetEl) {
          observer = new ResizeObserver(trigger);
          observer.observe(targetEl);
          emitEvent();
        } else if (stop !== true) {
          nextTick(() => {
            init(true);
          });
        }
      };
      onMounted(() => {
        init();
      });
      onBeforeUnmount(() => {
        clearTimeout(timer);
        if (observer !== void 0) {
          if (observer.disconnect !== void 0) {
            observer.disconnect();
          } else if (targetEl) {
            observer.unobserve(targetEl);
          }
        }
      });
      return noop;
    } else {
      let cleanup = function() {
        clearTimeout(timer);
        if (curDocView !== void 0) {
          if (curDocView.removeEventListener !== void 0) {
            curDocView.removeEventListener("resize", trigger, listenOpts.passive);
          }
          curDocView = void 0;
        }
      }, onObjLoad = function() {
        cleanup();
        if (targetEl && targetEl.contentDocument) {
          curDocView = targetEl.contentDocument.defaultView;
          curDocView.addEventListener("resize", trigger, listenOpts.passive);
          emitEvent();
        }
      };
      const canRender = useCanRender();
      let curDocView;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el;
          targetEl && onObjLoad();
        });
      });
      onBeforeUnmount(cleanup);
      proxy.trigger = trigger;
      return () => {
        if (canRender.value === true) {
          return h("object", {
            style: resizeProps.style,
            tabindex: -1,
            type: "text/html",
            data: resizeProps.url,
            "aria-hidden": "true",
            onLoad: onObjLoad
          });
        }
      };
    }
  }
});
export { QResizeObserver as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVJlc2l6ZU9ic2VydmVyLjBhMzE2ZmFjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYW4tcmVuZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuXG4vLyB1c2luZyBpdCB0byBtYW5hZ2UgU1NSIHJlbmRlcmluZyB3aXRoIGJlc3QgcGVyZm9ybWFuY2VcbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FuUmVuZGVyID0gcmVmKCFpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUpXG5cbiAgaWYgKGNhblJlbmRlci52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgY2FuUmVuZGVyLnZhbHVlID0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY2FuUmVuZGVyXG59XG4iLCJpbXBvcnQgeyBoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUNhblJlbmRlciBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYW4tcmVuZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgaGFzT2JzZXJ2ZXIgPSB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5jb25zdCByZXNpemVQcm9wcyA9IGhhc09ic2VydmVyID09PSB0cnVlXG4gID8ge31cbiAgOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xOycsXG4gICAgICB1cmw6ICdhYm91dDpibGFuaydcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUmVzaXplT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmVzaXplJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7IHJldHVybiBub29wIH1cblxuICAgIGxldCB0aW1lciA9IG51bGwsIHRhcmdldEVsLCBzaXplID0geyB3aWR0aDogLTEsIGhlaWdodDogLTEgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoaW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbW1lZGlhdGVseSA9PT0gdHJ1ZSB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gJzAnKSB7XG4gICAgICAgIGVtaXRFdmVudCgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZW1pdEV2ZW50LCBwcm9wcy5kZWJvdW5jZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgdGltZXIgPSBudWxsXG5cbiAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICBjb25zdCB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IHRhcmdldEVsXG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSBzaXplLndpZHRoIHx8IGhlaWdodCAhPT0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH1cbiAgICAgICAgICBlbWl0KCdyZXNpemUnLCBzaXplKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGlmIChoYXNPYnNlcnZlciA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IG9ic2VydmVyXG5cbiAgICAgIC8vIGluaXRpYWxpemUgYXMgc29vbiBhcyBwb3NzaWJsZVxuICAgICAgY29uc3QgaW5pdCA9IHN0b3AgPT4ge1xuICAgICAgICB0YXJnZXRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG5cbiAgICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIodHJpZ2dlcilcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIGVtaXRFdmVudCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RvcCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHsgaW5pdCh0cnVlKSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91bnRlZCgoKSA9PiB7IGluaXQoKSB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG5cbiAgICAgICAgaWYgKG9ic2VydmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIuZGlzY29ubmVjdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGFyZ2V0RWwpIHsgLy8gRkYgZm9yIEFuZHJvaWRcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXRFbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBub29wXG4gICAgfVxuICAgIGVsc2UgeyAvLyBubyBvYnNlcnZlciwgc28gZmFsbGJhY2sgdG8gb2xkIGlmcmFtZSBtZXRob2RcbiAgICAgIGNvbnN0IGNhblJlbmRlciA9IHVzZUNhblJlbmRlcigpXG5cbiAgICAgIGxldCBjdXJEb2NWaWV3XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG5cbiAgICAgICAgaWYgKGN1ckRvY1ZpZXcgIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIGlPUyBpcyBmdXp6eSwgbmVlZCB0byBjaGVjayBpdCBmaXJzdFxuICAgICAgICAgIGlmIChjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY3VyRG9jVmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmlnZ2VyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGN1ckRvY1ZpZXcgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbk9iakxvYWQgKCkge1xuICAgICAgICBjbGVhbnVwKClcblxuICAgICAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHRhcmdldEVsLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlld1xuICAgICAgICAgIGN1ckRvY1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdHJpZ2dlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICAgIGVtaXRFdmVudCgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsXG4gICAgICAgICAgdGFyZ2V0RWwgJiYgb25PYmpMb2FkKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZFxuICAgICAgcHJveHkudHJpZ2dlciA9IHRyaWdnZXJcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGNhblJlbmRlci52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBoKCdvYmplY3QnLCB7XG4gICAgICAgICAgICBzdHlsZTogcmVzaXplUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB0YWJpbmRleDogLTEsIC8vIGZpeCBmb3IgRmlyZWZveFxuICAgICAgICAgICAgdHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgICBkYXRhOiByZXNpemVQcm9wcy51cmwsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICBvbkxvYWQ6IG9uT2JqTG9hZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLZSxTQUFBLGVBQVk7QUFDekIsUUFBTSxZQUFZLElBQUksQ0FBQyx5QkFBeUIsS0FBSztBQUVyRCxNQUFJLFVBQVUsVUFBVSxPQUFPO0FBQzdCLGNBQVUsTUFBTTtBQUNkLGdCQUFVLFFB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
