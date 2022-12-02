import { o as onBeforeUnmount, Y as History, w as watch, z as onMounted, g as getCurrentInstance, A as nextTick, Z as client, Q as listenOpts, L as stopAndPrevent, $ as getEventPath, J as onDeactivated } from "./index.5cc93081.js";
import { v as vmHasRouter, b as vmIsDestroyed } from "./QBtn.11461724.js";
import { a as getHorizontalScrollPosition, b as getVerticalScrollPosition, h as hasScrollbar } from "./scroll.b1151d01.js";
function useHistory(showing, hide, hideOnRouteChange) {
  let historyEntry;
  function removeFromHistory() {
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
  }
  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });
  return {
    removeFromHistory,
    addToHistory() {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };
      History.add(historyEntry);
    }
  };
}
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
const useModelToggleEmits = [
  "before-show",
  "show",
  "before-hide",
  "hide"
];
function useModelToggle({
  showing,
  canShow,
  hideOnRouteChange,
  handleShow,
  handleHide,
  processOnMount
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    if (showing.value === true) {
      return;
    }
    showing.value = true;
    emit("before-show", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props.disable === true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", false);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processHide(evt);
    }
  }
  function processHide(evt) {
    if (showing.value === false) {
      return;
    }
    showing.value = false;
    emit("before-hide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
  }
  function processModelChange(val) {
    if (props.disable === true && val === true) {
      if (props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }
  watch(() => props.modelValue, processModelChange);
  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) {
        hide();
      }
    });
  }
  processOnMount === true && onMounted(() => {
    processModelChange(props.modelValue);
  });
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);
  return publicMethods;
}
let registered = 0, scrollPositionX, scrollPositionY, maxScrollTop, vpPendingUpdate = false, bodyLeft, bodyTop, closeTimer;
function onWheel(e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e);
  }
}
function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) {
    return true;
  }
  const path = getEventPath(e), shift = e.shiftKey && !e.deltaX, scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY), delta = shift || scrollY ? e.deltaY : e.deltaX;
  for (let index = 0; index < path.length; index++) {
    const el = path[index];
    if (hasScrollbar(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }
  return true;
}
function onAppleScroll(e) {
  if (e.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function onAppleResize(evt) {
  if (vpPendingUpdate === true) {
    return;
  }
  vpPendingUpdate = true;
  requestAnimationFrame(() => {
    vpPendingUpdate = false;
    const { height } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
    if (maxScrollTop === void 0 || height !== window.innerHeight) {
      maxScrollTop = clientHeight - height;
      document.scrollingElement.scrollTop = scrollTop;
    }
    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}
function apply(action) {
  const body = document.body, hasViewport = window.visualViewport !== void 0;
  if (action === "add") {
    const { overflowY, overflowX } = window.getComputedStyle(body);
    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;
    body.style.left = `-${scrollPositionX}px`;
    body.style.top = `-${scrollPositionY}px`;
    if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) {
      body.classList.add("q-body--force-scrollbar-x");
    }
    if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) {
      body.classList.add("q-body--force-scrollbar-y");
    }
    body.classList.add("q-body--prevent-scroll");
    document.qScrollPrevented = true;
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }
  if (client.is.desktop === true && client.is.mac === true) {
    window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
  }
  if (action === "remove") {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
      } else {
        window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
    body.classList.remove("q-body--prevent-scroll");
    body.classList.remove("q-body--force-scrollbar-x");
    body.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    body.style.left = bodyLeft;
    body.style.top = bodyTop;
    window.scrollTo(scrollPositionX, scrollPositionY);
    maxScrollTop = void 0;
  }
}
function preventScroll(state) {
  let action = "add";
  if (state === true) {
    registered++;
    if (closeTimer !== void 0) {
      clearTimeout(closeTimer);
      closeTimer = void 0;
      return;
    }
    if (registered > 1) {
      return;
    }
  } else {
    if (registered === 0) {
      return;
    }
    registered--;
    if (registered > 0) {
      return;
    }
    action = "remove";
    if (client.is.ios === true && client.is.nativeMobile === true) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = void 0;
      }, 100);
      return;
    }
  }
  apply(action);
}
function usePreventScroll() {
  let currentState;
  return {
    preventBodyScroll(state) {
      if (state !== currentState && (currentState !== void 0 || state === true)) {
        currentState = state;
        preventScroll(state);
      }
    }
  };
}
function useTimeout() {
  let timer;
  const vm = getCurrentInstance();
  function removeTimeout() {
    clearTimeout(timer);
  }
  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      clearTimeout(timer);
      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(fn, delay);
      }
    }
  };
}
export { useModelToggleEmits as a, useTimeout as b, useModelToggle as c, useHistory as d, usePreventScroll as e, useModelToggleProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXRpbWVvdXQuZmNjYmU4NGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcmV2ZW50LXNjcm9sbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGltZW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkJlZm9yZVVubW91bnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL2hpc3RvcnkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzaG93aW5nLCBoaWRlLCBoaWRlT25Sb3V0ZUNoYW5nZSkge1xuICBsZXQgaGlzdG9yeUVudHJ5XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUhpc3RvcnkgKCkge1xuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHJlbW92ZUZyb21IaXN0b3J5KClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHJlbW92ZUZyb21IaXN0b3J5LFxuXG4gICAgYWRkVG9IaXN0b3J5ICgpIHtcbiAgICAgIGhpc3RvcnlFbnRyeSA9IHtcbiAgICAgICAgY29uZGl0aW9uOiAoKSA9PiBoaWRlT25Sb3V0ZUNoYW5nZS52YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgaGFuZGxlcjogaGlkZVxuICAgICAgfVxuXG4gICAgICBIaXN0b3J5LmFkZChoaXN0b3J5RW50cnkpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB3YXRjaCwgbmV4dFRpY2ssIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbmV4cG9ydCBjb25zdCB1c2VNb2RlbFRvZ2dsZVByb3BzID0ge1xuICBtb2RlbFZhbHVlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG5cbiAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VNb2RlbFRvZ2dsZUVtaXRzID0gW1xuICAnYmVmb3JlLXNob3cnLCAnc2hvdycsICdiZWZvcmUtaGlkZScsICdoaWRlJ1xuXVxuXG4vLyBoYW5kbGVTaG93L2hhbmRsZUhpZGUgLT4gcmVtb3ZlVGljaygpLCBzZWxmICgmIGVtaXQgc2hvdylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtcbiAgc2hvd2luZyxcbiAgY2FuU2hvdywgLy8gb3B0aW9uYWxcbiAgaGlkZU9uUm91dGVDaGFuZ2UsIC8vIG9wdGlvbmFsXG4gIGhhbmRsZVNob3csIC8vIG9wdGlvbmFsXG4gIGhhbmRsZUhpZGUsIC8vIG9wdGlvbmFsXG4gIHByb2Nlc3NPbk1vdW50IC8vIG9wdGlvbmFsXG59KSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IHZtXG5cbiAgbGV0IHBheWxvYWRcblxuICBmdW5jdGlvbiB0b2dnbGUgKGV2dCkge1xuICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBoaWRlKGV2dClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzaG93KGV2dClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93IChldnQpIHtcbiAgICBpZiAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICB8fCAoZXZ0ICE9PSB2b2lkIDAgJiYgZXZ0LnFBbmNob3JIYW5kbGVkID09PSB0cnVlKVxuICAgICAgfHwgKGNhblNob3cgIT09IHZvaWQgMCAmJiBjYW5TaG93KGV2dCkgIT09IHRydWUpXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lciA9IHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG5cbiAgICBpZiAobGlzdGVuZXIgPT09IHRydWUgJiYgX19RVUFTQVJfU1NSX1NFUlZFUl9fICE9PSB0cnVlKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgICBwYXlsb2FkID0gZXZ0XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmIChwYXlsb2FkID09PSBldnQpIHtcbiAgICAgICAgICBwYXlsb2FkID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGwgfHwgbGlzdGVuZXIgPT09IGZhbHNlIHx8IF9fUVVBU0FSX1NTUl9TRVJWRVJfXykge1xuICAgICAgcHJvY2Vzc1Nob3coZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTaG93IChldnQpIHtcbiAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2hvd2luZy52YWx1ZSA9IHRydWVcblxuICAgIGVtaXQoJ2JlZm9yZS1zaG93JywgZXZ0KVxuXG4gICAgaWYgKGhhbmRsZVNob3cgIT09IHZvaWQgMCkge1xuICAgICAgaGFuZGxlU2hvdyhldnQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW1pdCgnc2hvdycsIGV2dClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlIChldnQpIHtcbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fIHx8IHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVyID0gcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDBcblxuICAgIGlmIChsaXN0ZW5lciA9PT0gdHJ1ZSAmJiBfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZmFsc2UpXG4gICAgICBwYXlsb2FkID0gZXZ0XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmIChwYXlsb2FkID09PSBldnQpIHtcbiAgICAgICAgICBwYXlsb2FkID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGwgfHwgbGlzdGVuZXIgPT09IGZhbHNlIHx8IF9fUVVBU0FSX1NTUl9TRVJWRVJfXykge1xuICAgICAgcHJvY2Vzc0hpZGUoZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIaWRlIChldnQpIHtcbiAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuXG4gICAgZW1pdCgnYmVmb3JlLWhpZGUnLCBldnQpXG5cbiAgICBpZiAoaGFuZGxlSGlkZSAhPT0gdm9pZCAwKSB7XG4gICAgICBoYW5kbGVIaWRlKGV2dClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNb2RlbENoYW5nZSAodmFsKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUgJiYgdmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAocHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoKHZhbCA9PT0gdHJ1ZSkgIT09IHNob3dpbmcudmFsdWUpIHtcbiAgICAgIGNvbnN0IGZuID0gdmFsID09PSB0cnVlID8gcHJvY2Vzc1Nob3cgOiBwcm9jZXNzSGlkZVxuICAgICAgZm4ocGF5bG9hZClcbiAgICB9XG4gIH1cblxuICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCBwcm9jZXNzTW9kZWxDaGFuZ2UpXG5cbiAgaWYgKGhpZGVPblJvdXRlQ2hhbmdlICE9PSB2b2lkIDAgJiYgdm1IYXNSb3V0ZXIodm0pID09PSB0cnVlKSB7XG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgICBpZiAoaGlkZU9uUm91dGVDaGFuZ2UudmFsdWUgPT09IHRydWUgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBoaWRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJvY2Vzc09uTW91bnQgPT09IHRydWUgJiYgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwcm9jZXNzTW9kZWxDaGFuZ2UocHJvcHMubW9kZWxWYWx1ZSlcbiAgfSlcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgY29uc3QgcHVibGljTWV0aG9kcyA9IHsgc2hvdywgaGlkZSwgdG9nZ2xlIH1cbiAgT2JqZWN0LmFzc2lnbihwcm94eSwgcHVibGljTWV0aG9kcylcblxuICByZXR1cm4gcHVibGljTWV0aG9kc1xufVxuIiwiaW1wb3J0IHsgZ2V0RXZlbnRQYXRoLCBsaXN0ZW5PcHRzLCBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaGFzU2Nyb2xsYmFyLCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5sZXRcbiAgcmVnaXN0ZXJlZCA9IDAsXG4gIHNjcm9sbFBvc2l0aW9uWCxcbiAgc2Nyb2xsUG9zaXRpb25ZLFxuICBtYXhTY3JvbGxUb3AsXG4gIHZwUGVuZGluZ1VwZGF0ZSA9IGZhbHNlLFxuICBib2R5TGVmdCxcbiAgYm9keVRvcCxcbiAgY2xvc2VUaW1lclxuXG5mdW5jdGlvbiBvbldoZWVsIChlKSB7XG4gIGlmIChzaG91bGRQcmV2ZW50U2Nyb2xsKGUpKSB7XG4gICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRQcmV2ZW50U2Nyb2xsIChlKSB7XG4gIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtbGF5b3V0X19iYWNrZHJvcCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0XG4gICAgcGF0aCA9IGdldEV2ZW50UGF0aChlKSxcbiAgICBzaGlmdCA9IGUuc2hpZnRLZXkgJiYgIWUuZGVsdGFYLFxuICAgIHNjcm9sbFkgPSAhc2hpZnQgJiYgTWF0aC5hYnMoZS5kZWx0YVgpIDw9IE1hdGguYWJzKGUuZGVsdGFZKSxcbiAgICBkZWx0YSA9IHNoaWZ0IHx8IHNjcm9sbFkgPyBlLmRlbHRhWSA6IGUuZGVsdGFYXG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGgubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWwgPSBwYXRoWyBpbmRleCBdXG5cbiAgICBpZiAoaGFzU2Nyb2xsYmFyKGVsLCBzY3JvbGxZKSkge1xuICAgICAgcmV0dXJuIHNjcm9sbFlcbiAgICAgICAgPyAoXG4gICAgICAgICAgICBkZWx0YSA8IDAgJiYgZWwuc2Nyb2xsVG9wID09PSAwXG4gICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICA6IGRlbHRhID4gMCAmJiBlbC5zY3JvbGxUb3AgKyBlbC5jbGllbnRIZWlnaHQgPT09IGVsLnNjcm9sbEhlaWdodFxuICAgICAgICAgIClcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBkZWx0YSA8IDAgJiYgZWwuc2Nyb2xsTGVmdCA9PT0gMFxuICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgOiBkZWx0YSA+IDAgJiYgZWwuc2Nyb2xsTGVmdCArIGVsLmNsaWVudFdpZHRoID09PSBlbC5zY3JvbGxXaWR0aFxuICAgICAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBvbkFwcGxlU2Nyb2xsIChlKSB7XG4gIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQpIHtcbiAgICAvLyByZXF1aXJlZCwgb3RoZXJ3aXNlIGlPUyBibG9ja3MgZnVydGhlciBzY3JvbGxpbmdcbiAgICAvLyB1bnRpbCB0aGUgbW9iaWxlIHNjcm9sbGJhciBkaXNzYXBwZWFyc1xuICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uQXBwbGVSZXNpemUgKGV2dCkge1xuICBpZiAodnBQZW5kaW5nVXBkYXRlID09PSB0cnVlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2cFBlbmRpbmdVcGRhdGUgPSB0cnVlXG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICB2cFBlbmRpbmdVcGRhdGUgPSBmYWxzZVxuXG4gICAgY29uc3RcbiAgICAgIHsgaGVpZ2h0IH0gPSBldnQudGFyZ2V0LFxuICAgICAgeyBjbGllbnRIZWlnaHQsIHNjcm9sbFRvcCB9ID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudFxuXG4gICAgaWYgKG1heFNjcm9sbFRvcCA9PT0gdm9pZCAwIHx8IGhlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICBtYXhTY3JvbGxUb3AgPSBjbGllbnRIZWlnaHQgLSBoZWlnaHRcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+IG1heFNjcm9sbFRvcCkge1xuICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgLT0gTWF0aC5jZWlsKChzY3JvbGxUb3AgLSBtYXhTY3JvbGxUb3ApIC8gOClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFwcGx5IChhY3Rpb24pIHtcbiAgY29uc3RcbiAgICBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICBoYXNWaWV3cG9ydCA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydCAhPT0gdm9pZCAwXG5cbiAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICBjb25zdCB7IG92ZXJmbG93WSwgb3ZlcmZsb3dYIH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KVxuXG4gICAgc2Nyb2xsUG9zaXRpb25YID0gZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKHdpbmRvdylcbiAgICBzY3JvbGxQb3NpdGlvblkgPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKHdpbmRvdylcbiAgICBib2R5TGVmdCA9IGJvZHkuc3R5bGUubGVmdFxuICAgIGJvZHlUb3AgPSBib2R5LnN0eWxlLnRvcFxuXG4gICAgYm9keS5zdHlsZS5sZWZ0ID0gYC0keyBzY3JvbGxQb3NpdGlvblggfXB4YFxuICAgIGJvZHkuc3R5bGUudG9wID0gYC0keyBzY3JvbGxQb3NpdGlvblkgfXB4YFxuXG4gICAgaWYgKG92ZXJmbG93WCAhPT0gJ2hpZGRlbicgJiYgKG92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgYm9keS5zY3JvbGxXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSkge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZvcmNlLXNjcm9sbGJhci14JylcbiAgICB9XG4gICAgaWYgKG92ZXJmbG93WSAhPT0gJ2hpZGRlbicgJiYgKG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZm9yY2Utc2Nyb2xsYmFyLXknKVxuICAgIH1cblxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1wcmV2ZW50LXNjcm9sbCcpXG4gICAgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCA9IHRydWVcbiAgICBpZiAoY2xpZW50LmlzLmlvcyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGhhc1ZpZXdwb3J0ID09PSB0cnVlKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB3aW5kb3cudmlzdWFsVmlld3BvcnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25BcHBsZVJlc2l6ZSwgbGlzdGVuT3B0cy5wYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgd2luZG93LnZpc3VhbFZpZXdwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQXBwbGVSZXNpemUsIGxpc3Rlbk9wdHMucGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkFwcGxlU2Nyb2xsLCBsaXN0ZW5PcHRzLnBhc3NpdmVDYXB0dXJlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjbGllbnQuaXMuZGVza3RvcCA9PT0gdHJ1ZSAmJiBjbGllbnQuaXMubWFjID09PSB0cnVlKSB7XG4gICAgLy8gcmVmLiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE3LzAxL3Njcm9sbGluZy1pbnRlcnZlbnRpb25cbiAgICB3aW5kb3dbIGAkeyBhY3Rpb24gfUV2ZW50TGlzdGVuZXJgIF0oJ3doZWVsJywgb25XaGVlbCwgbGlzdGVuT3B0cy5ub3RQYXNzaXZlKVxuICB9XG5cbiAgaWYgKGFjdGlvbiA9PT0gJ3JlbW92ZScpIHtcbiAgICBpZiAoY2xpZW50LmlzLmlvcyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGhhc1ZpZXdwb3J0ID09PSB0cnVlKSB7XG4gICAgICAgIHdpbmRvdy52aXN1YWxWaWV3cG9ydC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkFwcGxlUmVzaXplLCBsaXN0ZW5PcHRzLnBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB3aW5kb3cudmlzdWFsVmlld3BvcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25BcHBsZVJlc2l6ZSwgbGlzdGVuT3B0cy5wYXNzaXZlQ2FwdHVyZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25BcHBsZVNjcm9sbCwgbGlzdGVuT3B0cy5wYXNzaXZlQ2FwdHVyZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3EtYm9keS0tcHJldmVudC1zY3JvbGwnKVxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1mb3JjZS1zY3JvbGxiYXIteCcpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZvcmNlLXNjcm9sbGJhci15JylcblxuICAgIGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgPSBmYWxzZVxuXG4gICAgYm9keS5zdHlsZS5sZWZ0ID0gYm9keUxlZnRcbiAgICBib2R5LnN0eWxlLnRvcCA9IGJvZHlUb3BcblxuICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxQb3NpdGlvblgsIHNjcm9sbFBvc2l0aW9uWSlcbiAgICBtYXhTY3JvbGxUb3AgPSB2b2lkIDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IGFjdGlvbiA9ICdhZGQnXG5cbiAgaWYgKHN0YXRlID09PSB0cnVlKSB7XG4gICAgcmVnaXN0ZXJlZCsrXG5cbiAgICBpZiAoY2xvc2VUaW1lciAhPT0gdm9pZCAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lcilcbiAgICAgIGNsb3NlVGltZXIgPSB2b2lkIDBcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyZWdpc3RlcmVkID4gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGlmIChyZWdpc3RlcmVkID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZWdpc3RlcmVkLS1cblxuICAgIGlmIChyZWdpc3RlcmVkID4gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYWN0aW9uID0gJ3JlbW92ZSdcblxuICAgIGlmIChjbGllbnQuaXMuaW9zID09PSB0cnVlICYmIGNsaWVudC5pcy5uYXRpdmVNb2JpbGUgPT09IHRydWUpIHtcbiAgICAgIGNsZWFyVGltZW91dChjbG9zZVRpbWVyKVxuXG4gICAgICBjbG9zZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFwcGx5KGFjdGlvbilcbiAgICAgICAgY2xvc2VUaW1lciA9IHZvaWQgMFxuICAgICAgfSwgMTAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgYXBwbHkoYWN0aW9uKVxufVxuIiwiaW1wb3J0IHByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vdXRpbHMvcHJldmVudC1zY3JvbGwuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGN1cnJlbnRTdGF0ZVxuXG4gIHJldHVybiB7XG4gICAgcHJldmVudEJvZHlTY3JvbGwgKHN0YXRlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHN0YXRlICE9PSBjdXJyZW50U3RhdGVcbiAgICAgICAgJiYgKGN1cnJlbnRTdGF0ZSAhPT0gdm9pZCAwIHx8IHN0YXRlID09PSB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IHN0YXRlXG4gICAgICAgIHByZXZlbnRTY3JvbGwoc3RhdGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0nXG5cbi8qXG4gKiBVc2FnZTpcbiAqICAgIHJlZ2lzdGVyVGltZW91dChmblssIGRlbGF5XSlcbiAqICAgIHJlbW92ZVRpbWVvdXQoKVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRpbWVyXG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBmdW5jdGlvbiByZW1vdmVUaW1lb3V0ICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gIH1cblxuICBvbkRlYWN0aXZhdGVkKHJlbW92ZVRpbWVvdXQpXG4gIG9uQmVmb3JlVW5tb3VudChyZW1vdmVUaW1lb3V0KVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlVGltZW91dCxcblxuICAgIHJlZ2lzdGVyVGltZW91dCAoZm4sIGRlbGF5KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG5cbiAgICAgIGlmICh2bUlzRGVzdHJveWVkKHZtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZuLCBkZWxheSlcbiAgICAgIH1c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
