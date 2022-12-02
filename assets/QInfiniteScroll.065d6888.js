import { c as createComponent, d as hUniqueSlot, h as hSlot } from "./QSpinner.7d14a7f2.js";
import { r as ref, c as computed, w as watch, I as onActivated, J as onDeactivated, o as onBeforeUnmount, z as onMounted, h, Q as listenOpts, A as nextTick, a7 as debounce, g as getCurrentInstance } from "./index.5cc93081.js";
import { h as height } from "./dom.e2e78a08.js";
import { d as getScrollHeight, b as getVerticalScrollPosition, s as setVerticalScrollPosition, c as getScrollTarget } from "./scroll.b1151d01.js";
const { passive } = listenOpts;
var QInfiniteScroll = createComponent({
  name: "QInfiniteScroll",
  props: {
    offset: {
      type: Number,
      default: 500
    },
    debounce: {
      type: [String, Number],
      default: 100
    },
    scrollTarget: {
      default: void 0
    },
    initialIndex: Number,
    disable: Boolean,
    reverse: Boolean
  },
  emits: ["load"],
  setup(props, { slots, emit }) {
    const isFetching = ref(false);
    const isWorking = ref(true);
    const rootRef = ref(null);
    let index = props.initialIndex || 0;
    let localScrollTarget, poll;
    const classes = computed(
      () => "q-infinite-scroll__loading" + (isFetching.value === true ? "" : " invisible")
    );
    function immediatePoll() {
      if (props.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      const scrollHeight = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), containerHeight = height(localScrollTarget);
      if (props.reverse === false) {
        if (Math.round(scrollPosition + containerHeight + props.offset) >= Math.round(scrollHeight)) {
          trigger();
        }
      } else if (Math.round(scrollPosition) <= props.offset) {
        trigger();
      }
    }
    function trigger() {
      if (props.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      index++;
      isFetching.value = true;
      const heightBefore = getScrollHeight(localScrollTarget);
      emit("load", index, (isDone) => {
        if (isWorking.value === true) {
          isFetching.value = false;
          nextTick(() => {
            if (props.reverse === true) {
              const heightAfter = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), heightDifference = heightAfter - heightBefore;
              setVerticalScrollPosition(localScrollTarget, scrollPosition + heightDifference);
            }
            if (isDone === true) {
              stop();
            } else if (rootRef.value) {
              rootRef.value.closest("body") && poll();
            }
          });
        }
      });
    }
    function reset() {
      index = 0;
    }
    function resume() {
      if (isWorking.value === false) {
        isWorking.value = true;
        localScrollTarget.addEventListener("scroll", poll, passive);
      }
      immediatePoll();
    }
    function stop() {
      if (isWorking.value === true) {
        isWorking.value = false;
        isFetching.value = false;
        localScrollTarget.removeEventListener("scroll", poll, passive);
        if (poll !== void 0 && poll.cancel !== void 0) {
          poll.cancel();
        }
      }
    }
    function updateScrollTarget() {
      if (localScrollTarget && isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive);
      }
      localScrollTarget = getScrollTarget(rootRef.value, props.scrollTarget);
      if (isWorking.value === true) {
        localScrollTarget.addEventListener("scroll", poll, passive);
        if (props.reverse === true) {
          const scrollHeight = getScrollHeight(localScrollTarget), containerHeight = height(localScrollTarget);
          setVerticalScrollPosition(localScrollTarget, scrollHeight - containerHeight);
        }
        immediatePoll();
      }
    }
    function setIndex(newIndex) {
      index = newIndex;
    }
    function setDebounce(val) {
      val = parseInt(val, 10);
      const oldPoll = poll;
      poll = val <= 0 ? immediatePoll : debounce(immediatePoll, isNaN(val) === true ? 100 : val);
      if (localScrollTarget && isWorking.value === true) {
        if (oldPoll !== void 0) {
          localScrollTarget.removeEventListener("scroll", oldPoll, passive);
        }
        localScrollTarget.addEventListener("scroll", poll, passive);
      }
    }
    watch(() => props.disable, (val) => {
      if (val === true) {
        stop();
      } else {
        resume();
      }
    });
    watch(() => props.reverse, (val) => {
      if (isFetching.value === false && isWorking.value === true) {
        immediatePoll();
      }
    });
    watch(() => props.scrollTarget, updateScrollTarget);
    watch(() => props.debounce, setDebounce);
    let scrollPos = false;
    onActivated(() => {
      if (scrollPos !== false && localScrollTarget) {
        setVerticalScrollPosition(localScrollTarget, scrollPos);
      }
    });
    onDeactivated(() => {
      scrollPos = localScrollTarget ? getVerticalScrollPosition(localScrollTarget) : false;
    });
    onBeforeUnmount(() => {
      if (isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive);
      }
    });
    onMounted(() => {
      setDebounce(props.debounce);
      updateScrollTarget();
    });
    const vm = getCurrentInstance();
    Object.assign(vm.proxy, {
      poll: () => {
        poll !== void 0 && poll();
      },
      trigger,
      stop,
      reset,
      resume,
      setIndex
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (props.disable !== true && isWorking.value === true) {
        child[props.reverse === false ? "push" : "unshift"](
          h("div", { class: classes.value }, hSlot(slots.loading))
        );
      }
      return h("div", {
        class: "q-infinite-scroll",
        ref: rootRef
      }, child);
    };
  }
});
export { QInfiniteScroll as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUluZmluaXRlU2Nyb2xsLjA2NWQ2ODg4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9RSW5maW5pdGVTY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UuanMnXG5pbXBvcnQgeyBoZWlnaHQgfSBmcm9tICcuLi8uLi91dGlscy9kb20uanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQsIGdldFNjcm9sbEhlaWdodCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90LCBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCB7IHBhc3NpdmUgfSA9IGxpc3Rlbk9wdHNcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJbmZpbml0ZVNjcm9sbCcsXG5cbiAgcHJvcHM6IHtcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDUwMFxuICAgIH0sXG5cbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIGluaXRpYWxJbmRleDogTnVtYmVyLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2xvYWQnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCBpc0ZldGNoaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGlzV29ya2luZyA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCBpbmRleCA9IHByb3BzLmluaXRpYWxJbmRleCB8fCAwXG4gICAgbGV0IGxvY2FsU2Nyb2xsVGFyZ2V0LCBwb2xsXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWluZmluaXRlLXNjcm9sbF9fbG9hZGluZydcbiAgICAgICsgKGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgaW52aXNpYmxlJylcbiAgICApXG5cbiAgICBmdW5jdGlvbiBpbW1lZGlhdGVQb2xsICgpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgfHwgaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQgKyBwcm9wcy5vZmZzZXQpID49IE1hdGgucm91bmQoc2Nyb2xsSGVpZ2h0KSkge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChNYXRoLnJvdW5kKHNjcm9sbFBvc2l0aW9uKSA8PSBwcm9wcy5vZmZzZXQpIHtcbiAgICAgICAgdHJpZ2dlcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBpc0ZldGNoaW5nLnZhbHVlID09PSB0cnVlIHx8IGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSB0cnVlXG5cbiAgICAgIGNvbnN0IGhlaWdodEJlZm9yZSA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgZW1pdCgnbG9hZCcsIGluZGV4LCBpc0RvbmUgPT4ge1xuICAgICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLnJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICBoZWlnaHRBZnRlciA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBoZWlnaHREaWZmZXJlbmNlID0gaGVpZ2h0QWZ0ZXIgLSBoZWlnaHRCZWZvcmVcblxuICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbiArIGhlaWdodERpZmZlcmVuY2UpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0RvbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc3RvcCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyb290UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHJvb3RSZWYudmFsdWUuY2xvc2VzdCgnYm9keScpICYmIHBvbGwoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgICAgaW5kZXggPSAwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lICgpIHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzV29ya2luZy52YWx1ZSA9IHRydWVcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cblxuICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCAoKSB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlzV29ya2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgICBpZiAocG9sbCAhPT0gdm9pZCAwICYmIHBvbGwuY2FuY2VsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBwb2xsLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChyb290UmVmLnZhbHVlLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG5cbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcblxuICAgICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCwgc2Nyb2xsSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0KVxuICAgICAgICB9XG5cbiAgICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5kZXggKG5ld0luZGV4KSB7XG4gICAgICBpbmRleCA9IG5ld0luZGV4XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVib3VuY2UgKHZhbCkge1xuICAgICAgdmFsID0gcGFyc2VJbnQodmFsLCAxMClcblxuICAgICAgY29uc3Qgb2xkUG9sbCA9IHBvbGxcblxuICAgICAgcG9sbCA9IHZhbCA8PSAwXG4gICAgICAgID8gaW1tZWRpYXRlUG9sbFxuICAgICAgICA6IGRlYm91bmNlKGltbWVkaWF0ZVBvbGwsIGlzTmFOKHZhbCkgPT09IHRydWUgPyAxMDAgOiB2YWwpXG5cbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKG9sZFBvbGwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9sZFBvbGwsIHBhc3NpdmUpXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRpc2FibGUsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7IHN0b3AoKSB9XG4gICAgICBlbHNlIHsgcmVzdW1lKCkgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlcnNlLCB2YWwgPT4ge1xuICAgICAgaWYgKGlzRmV0Y2hpbmcudmFsdWUgPT09IGZhbHNlICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCB1cGRhdGVTY3JvbGxUYXJnZXQpXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGVib3VuY2UsIHNldERlYm91bmNlKVxuXG4gICAgbGV0IHNjcm9sbFBvcyA9IGZhbHNlXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zICE9PSBmYWxzZSAmJiBsb2NhbFNjcm9sbFRhcmdldCkge1xuICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3MpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2Nyb2xsUG9zID0gbG9jYWxTY3JvbGxUYXJnZXRcbiAgICAgICAgPyBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuICAgICAgICA6IGZhbHNlXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZShwcm9wcy5kZWJvdW5jZSlcblxuICAgICAgdXBkYXRlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHBvbGw6ICgpID0+IHsgcG9sbCAhPT0gdm9pZCAwICYmIHBvbGwoKSB9LFxuICAgICAgdHJpZ2dlciwgc3RvcCwgcmVzZXQsIHJlc3VtZSwgc2V0SW5kZXhcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZFsgcHJvcHMucmV2ZXJzZSA9PT0gZmFsc2UgPyAncHVzaCcgOiAndW5zaGlmdCcgXShcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmxvYWRpbmcpKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1pbmZpbml0ZS1zY3JvbGwnLFxuICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBU0EsTUFBTSxFQUFFLFFBQVMsSUFBRztBQUVwQixJQUFBLGtCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxVQUFVO0FBQUEsTUFDUixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELGNBQWM7QUFBQSxNQUNaLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxjQUFjO0FBQUEsSUFFZCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsRUFDVjtBQUFBLEVBRUQsT0FBTyxDQUFFLE1BQVE7QUFBQSxFQUVqQixNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLGFBQWEsSUFBSSxLQUFLO0FBQzVCLFVBQU0sWUFBWSxJQUFJLElBQUk7QUFDMUIsVUFBTSxVQUFVLElBQUksSUFBSTtBQUV4QixRQUFJLFFBQVEsTUFBTSxnQkFBZ0I7QUFDbEMsUUFBSSxtQkFBbUI7QUFFdkIsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QixnQ0FDRyxXQUFXLFVBQVUsT0FBTyxLQUFLO0FBQUEsSUFDckM7QUFFRCxhQUFTLGdCQUFpQjtBQUN4QixVQUFJLE1BQU0sWUFBWSxRQUFRLFdBQVcsVUFBVSxRQUFRLFVBQVUsVUFBVSxPQUFPO0FBQ3BGO0FBQUEsTUFDRDtBQUVELFlBQ0UsZUFBZSxnQkFBZ0IsaUJBQWlCLEdBQ2hELGlCQUFpQiwwQkFBMEIsaUJBQWlCLEdBQzVELGtCQUFrQixPQUFPLGlCQUFpQjtBQUU1QyxVQUFJLE1BQU0sWUFBWSxPQUFPO0FBQzNCLFlBQUksS0FBSyxNQUFNLGlCQUFpQixrQkFBa0IsTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksR0FBRztBQUMzRixrQkFBUztBQUFBLFFBQ1Y7QUFBQSxNQUNGLFdBQ1EsS0FBSyxNQUFNLGNBQWMsS0FBSyxNQUFNLFFBQVE7QUFDbkQsZ0JBQVM7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUVELGFBQVMsVUFBVztBQUNsQixVQUFJLE1BQU0sWUFBWSxRQUFRLFdBQVcsVUFBVSxRQUFRLFVBQVUsVUFBVSxPQUFPO0FBQ3BGO0FBQUEsTUFDRDtBQUVEO0FBQ0EsaUJBQVcsUUFBUTtBQUVuQixZQUFNLGVBQWUsZ0JBQWdCLGlCQUFpQjtBQUV0RCxXQUFLLFFBQVEsT0FBTyxZQUFVO0FBQzVCLFlBQUksVUFBVSxVQUFVLE1BQU07QUFDNUIscUJBQVcsUUFBUTtBQUNuQixtQkFBUyxNQUFNO0FBQ2IsZ0JBQUksTUFBTSxZQUFZLE1BQU07QUFDMUIsb0JBQ0UsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQy9DLGlCQUFpQiwwQkFBMEIsaUJBQWlCLEdBQzVELG1CQUFtQixjQUFjO0FBRW5DLHdDQUEwQixtQkFBbUIsaUJBQWlCLGdCQUFnQjtBQUFBLFlBQy9FO0FBRUQsZ0JBQUksV0FBVyxNQUFNO0FBQ25CLG1CQUFNO0FBQUEsWUFDUCxXQUNRLFFBQVEsT0FBTztBQUN0QixzQkFBUSxNQUFNLFFBQVEsTUFBTSxLQUFLLEtBQU07QUFBQSxZQUN4QztBQUFBLFVBQ2IsQ0FBVztBQUFBLFFBQ0Y7QUFBQSxNQUNULENBQU87QUFBQSxJQUNGO0FBRUQsYUFBUyxRQUFTO0FBQ2hCLGNBQVE7QUFBQSxJQUNUO0FBRUQsYUFBUyxTQUFVO0FBQ2pCLFVBQUksVUFBVSxVQUFVLE9BQU87QUFDN0Isa0JBQVUsUUFBUTtBQUNsQiwwQkFBa0IsaUJBQWlCLFVBQVUsTUFBTSxPQUFPO0FBQUEsTUFDM0Q7QUFFRCxvQkFBZTtBQUFBLElBQ2hCO0FBRUQsYUFBUyxPQUFRO0FBQ2YsVUFBSSxVQUFVLFVBQVUsTUFBTTtBQUM1QixrQkFBVSxRQUFRO0FBQ2xCLG1CQUFXLFFBQVE7QUFDbkIsMEJBQWtCLG9CQUFvQixVQUFVLE1BQU0sT0FBTztBQUM3RCxZQUFJLFNBQVMsVUFBVSxLQUFLLFdBQVcsUUFBUTtBQUM3QyxlQUFLLE9BQVE7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFRCxhQUFTLHFCQUFzQjtBQUM3QixVQUFJLHFCQUFxQixVQUFVLFVBQVUsTUFBTTtBQUNqRCwwQkFBa0Isb0JBQW9CLFVBQVUsTUFBTSxPQUFPO0FBQUEsTUFDOUQ7QUFFRCwwQkFBb0IsZ0JBQWdCLFFBQVEsT0FBTyxNQUFNLFlBQVk7QUFFckUsVUFBSSxVQUFVLFVBQVUsTUFBTTtBQUM1QiwwQkFBa0IsaUJBQWlCLFVBQVUsTUFBTSxPQUFPO0FBRTFELFlBQUksTUFBTSxZQUFZLE1BQU07QUFDMUIsZ0JBQ0UsZUFBZSxnQkFBZ0IsaUJBQWlCLEdBQ2hELGtCQUFrQixPQUFPLGlCQUFpQjtBQUU1QyxvQ0FBMEIsbUJBQW1CLGVBQWUsZUFBZTtBQUFBLFFBQzVFO0FBRUQsc0JBQWU7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFFRCxhQUFTLFNBQVUsVUFBVTtBQUMzQixjQUFRO0FBQUEsSUFDVDtBQUVELGFBQVMsWUFBYSxLQUFLO0FBQ3pCLFlBQU0sU0FBUyxLQUFLLEVBQUU7QUFFdEIsWUFBTSxVQUFVO0FBRWhCLGFBQU8sT0FBTyxJQUNWLGdCQUNBLFNBQVMsZUFBZSxNQUFNLEdBQUcsTUFBTSxPQUFPLE1BQU0sR0FBRztBQUUzRCxVQUFJLHFCQUFxQixVQUFVLFVBQVUsTUFBTTtBQUNqRCxZQUFJLFlBQVksUUFBUTtBQUN0Qiw0QkFBa0Isb0JBQW9CLFVBQVUsU0FBUyxPQUFPO0FBQUEsUUFDakU7QUFFRCwwQkFBa0IsaUJBQWlCLFVBQVUsTUFBTSxPQUFPO0FBQUEsTUFDM0Q7QUFBQSxJQUNGO0FBRUQsVUFBTSxNQUFNLE1BQU0sU0FBUyxTQUFPO0FBQ2hDLFVBQUksUUFBUSxNQUFNO0FBQUU7TUFBUSxPQUN2QjtBQUFFLGVBQU07QUFBQSxNQUFJO0FBQUEsSUFDdkIsQ0FBSztBQUVELFVBQU0sTUFBTSxNQUFNLFNBQVMsU0FBTztBQUNoQyxVQUFJLFdBQVcsVUFBVSxTQUFTLFVBQVUsVUFBVSxNQUFNO0FBQzFELHNCQUFlO0FBQUEsTUFDaEI7QUFBQSxJQUNQLENBQUs7QUFFRCxVQUFNLE1BQU0sTUFBTSxjQUFjLGtCQUFrQjtBQUNsRCxVQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVc7QUFFdkMsUUFBSSxZQUFZO0FBRWhCLGdCQUFZLE1BQU07QUFDaEIsVUFBSSxjQUFjLFNBQVMsbUJBQW1CO0FBQzVDLGtDQUEwQixtQkFBbUIsU0FBUztBQUFBLE1BQ3ZEO0FBQUEsSUFDUCxDQUFLO0FBRUQsa0JBQWMsTUFBTTtBQUNsQixrQkFBWSxvQkFDUiwwQkFBMEIsaUJBQWlCLElBQzNDO0FBQUEsSUFDVixDQUFLO0FBRUQsb0JBQWdCLE1BQU07QUFDcEIsVUFBSSxVQUFVLFVBQVUsTUFBTTtBQUM1QiwwQkFBa0Isb0JBQW9CLFVBQVUsTUFBTSxPQUFPO0FBQUEsTUFDOUQ7QUFBQSxJQUNQLENBQUs7QUFFRCxjQUFVLE1BQU07QUFDZCxrQkFBWSxNQUFNLFFBQVE7QUFFMUIseUJBQW9CO0FBQUEsSUFDMUIsQ0FBSztBQUdELFVBQU0sS0FBSyxtQkFBb0I7QUFDL0IsV0FBTyxPQUFPLEdBQUcsT0FBTztBQUFBLE1BQ3RCLE1BQU0sTUFBTTtBQUFFLGlCQUFTLFVBQVUsS0FBSTtBQUFBLE1BQUk7QUFBQSxNQUN6QztBQUFBLE1BQVM7QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxJQUNwQyxDQUFLO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxRQUFRLFlBQVksTUFBTSxTQUFTLENBQUEsQ0FBRTtBQUUzQyxVQUFJLE1BQU0sWUFBWSxRQUFRLFVBQVUsVUFBVSxNQUFNO0FBQ3RELGNBQU8sTUFBTSxZQUFZLFFBQVEsU0FBUztBQUFBLFVBQ3hDLEVBQUUsT0FBTyxFQUFFLE9BQU8sUUFBUSxNQUFLLEdBQUksTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLFFBQ3hEO0FBQUEsTUFDRjtBQUVELGFBQU8sRUFBRSxPQUFPO0FBQUEsUUFDZCxPQUFPO0FBQUEsUUFDUCxLQUFLO0FBQUEsTUFDTixHQUFFLEtBQUs7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNILENBQUM7OyJ9
