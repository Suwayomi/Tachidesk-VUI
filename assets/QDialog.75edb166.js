import { J as onDeactivated, o as onBeforeUnmount, A as nextTick, g as getCurrentInstance, a8 as globalConfig, r as ref, G as onUnmounted, h, a9 as Teleport, Z as client, M as isKeyCode, c as computed, w as watch, T as Transition } from "./index.ba4ecd3b.js";
import { u as useModelToggleProps, a as useModelToggleEmits, b as useTimeout, c as useModelToggle, d as useHistory, e as usePreventScroll } from "./use-timeout.fb745483.js";
import { b as vmIsDestroyed, g as getParentProxy } from "./QBtn.2456f78f.js";
import { u as useTransitionProps } from "./use-transition.322af72f.js";
import { r as removeFocusWaitFlag, a as addFocusWaitFlag, b as addFocusFn } from "./focus-manager.32f8d49a.js";
import { c as createComponent, h as hSlot } from "./QSpinner.ce362078.js";
import { a as childHasFocus } from "./dom.9c14e7bf.js";
function useTick() {
  let tickFn;
  const vm = getCurrentInstance();
  function removeTick() {
    tickFn = void 0;
  }
  onDeactivated(removeTick);
  onBeforeUnmount(removeTick);
  return {
    removeTick,
    registerTick(fn) {
      tickFn = fn;
      nextTick(() => {
        if (tickFn === fn) {
          vmIsDestroyed(vm) === false && tickFn();
          tickFn = void 0;
        }
      });
    }
  };
}
let target = document.body;
function createGlobalNode(id) {
  const el = document.createElement("div");
  if (id !== void 0) {
    el.id = id;
  }
  if (globalConfig.globalNodes !== void 0) {
    const cls = globalConfig.globalNodes.class;
    if (cls !== void 0) {
      el.className = cls;
    }
  }
  target.appendChild(el);
  return el;
}
function removeGlobalNode(el) {
  el.remove();
}
const portalProxyList = [];
function getPortalProxy(el) {
  return portalProxyList.find(
    (proxy) => proxy.__qPortalInnerRef.value !== null && proxy.__qPortalInnerRef.value.contains(el)
  );
}
function closePortalMenus(proxy, evt) {
  do {
    if (proxy.$options.name === "QMenu") {
      proxy.hide(evt);
      if (proxy.$props.separateClosePopup === true) {
        return getParentProxy(proxy);
      }
    } else if (proxy.__qPortalInnerRef !== void 0) {
      const parent = getParentProxy(proxy);
      if (parent !== void 0 && parent.$options.name === "QPopupProxy") {
        proxy.hide(evt);
        return parent;
      } else {
        return proxy;
      }
    }
    proxy = getParentProxy(proxy);
  } while (proxy !== void 0 && proxy !== null);
}
function closePortals(proxy, evt, depth) {
  while (depth !== 0 && proxy !== void 0 && proxy !== null) {
    if (proxy.__qPortalInnerRef !== void 0) {
      depth--;
      if (proxy.$options.name === "QMenu") {
        proxy = closePortalMenus(proxy, evt);
        continue;
      }
      proxy.hide(evt);
    }
    proxy = getParentProxy(proxy);
  }
}
function isOnGlobalDialog(vm) {
  vm = vm.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.type.name === "QGlobalDialog") {
      return true;
    }
    if (vm.type.name === "QDialog" || vm.type.name === "QMenu") {
      return false;
    }
    vm = vm.parent;
  }
  return false;
}
function usePortal(vm, innerRef, renderPortalContent, checkGlobalDialog) {
  const portalIsActive = ref(false);
  const portalIsAccessible = ref(false);
  let portalEl = null;
  const focusObj = {};
  const onGlobalDialog = checkGlobalDialog === true && isOnGlobalDialog(vm);
  function showPortal(isReady) {
    if (isReady === true) {
      removeFocusWaitFlag(focusObj);
      portalIsAccessible.value = true;
      return;
    }
    portalIsAccessible.value = false;
    if (portalIsActive.value === false) {
      if (onGlobalDialog === false && portalEl === null) {
        portalEl = createGlobalNode();
      }
      portalIsActive.value = true;
      portalProxyList.push(vm.proxy);
      addFocusWaitFlag(focusObj);
    }
  }
  function hidePortal(isReady) {
    portalIsAccessible.value = false;
    if (isReady !== true) {
      return;
    }
    removeFocusWaitFlag(focusObj);
    portalIsActive.value = false;
    const index = portalProxyList.indexOf(vm.proxy);
    if (index !== -1) {
      portalProxyList.splice(index, 1);
    }
    if (portalEl !== null) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(() => {
    hidePortal(true);
  });
  vm.proxy.__qPortalInnerRef = innerRef;
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    portalIsAccessible,
    renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, renderPortalContent())] : void 0
  };
}
const handlers$1 = [];
let escDown;
function onKeydown(evt) {
  escDown = evt.keyCode === 27;
}
function onBlur() {
  if (escDown === true) {
    escDown = false;
  }
}
function onKeyup(evt) {
  if (escDown === true) {
    escDown = false;
    if (isKeyCode(evt, 27) === true) {
      handlers$1[handlers$1.length - 1](evt);
    }
  }
}
function update(action) {
  window[action]("keydown", onKeydown);
  window[action]("blur", onBlur);
  window[action]("keyup", onKeyup);
  escDown = false;
}
function addEscapeKey(fn) {
  if (client.is.desktop === true) {
    handlers$1.push(fn);
    if (handlers$1.length === 1) {
      update("addEventListener");
    }
  }
}
function removeEscapeKey(fn) {
  const index = handlers$1.indexOf(fn);
  if (index > -1) {
    handlers$1.splice(index, 1);
    if (handlers$1.length === 0) {
      update("removeEventListener");
    }
  }
}
const handlers = [];
function trigger(e) {
  handlers[handlers.length - 1](e);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers.indexOf(fn);
  if (index > -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
let maximizedModals = 0;
const positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
const transitions = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
};
var QDialog = createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useTransitionProps,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
    }
  },
  emits: [
    ...useModelToggleEmits,
    "shake",
    "click",
    "escape-key"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const transitionState = ref(false);
    const animating = ref(false);
    let shakeTimeout, refocusTarget = null, isMaximized, avoidAutoClose;
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
    );
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout } = useTimeout();
    const { registerTick, removeTick } = useTick();
    const { showPortal, hidePortal, portalIsAccessible, renderPortal } = usePortal(
      vm,
      innerRef,
      renderPortalContent,
      true
    );
    const { hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide,
      processOnMount: true
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const classes = computed(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "")
    );
    const transitionShow = computed(
      () => "q-transition--" + (props.transitionShow === void 0 ? transitions[props.position][0] : props.transitionShow)
    );
    const transitionHide = computed(
      () => "q-transition--" + (props.transitionHide === void 0 ? transitions[props.position][1] : props.transitionHide)
    );
    const transition = computed(() => transitionState.value === true ? transitionHide.value : transitionShow.value);
    const transitionStyle = computed(
      () => `--q-transition-duration: ${props.transitionDuration}ms`
    );
    const useBackdrop = computed(() => showing.value === true && props.seamless !== true);
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const rootClasses = computed(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    watch(showing, (val) => {
      nextTick(() => {
        transitionState.value = val;
      });
    });
    watch(() => props.maximized, (state) => {
      showing.value === true && updateMaximized(state);
    });
    watch(useBackdrop, (val) => {
      preventBodyScroll(val);
      if (val === true) {
        addFocusout(onFocusChange);
        addEscapeKey(onEscapeKey);
      } else {
        removeFocusout(onFocusChange);
        removeEscapeKey(onEscapeKey);
      }
    });
    function handleShow(evt) {
      addToHistory();
      refocusTarget = props.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
      updateMaximized(props.maximized);
      showPortal();
      animating.value = true;
      if (props.noFocus !== true) {
        document.activeElement !== null && document.activeElement.blur();
        registerTick(focus);
      } else {
        removeTick();
      }
      registerTimeout(() => {
        if (vm.proxy.$q.platform.is.ios === true) {
          if (props.seamless !== true && document.activeElement) {
            const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
            if (top > 0 && bottom > height / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - height,
                bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2)
              );
            }
            document.activeElement.scrollIntoView();
          }
          avoidAutoClose = true;
          innerRef.value.click();
          avoidAutoClose = false;
        }
        showPortal(true);
        animating.value = false;
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      removeFromHistory();
      cleanup(true);
      animating.value = true;
      hidePortal();
      if (refocusTarget !== null) {
        refocusTarget.focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        animating.value = false;
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function focus(selector) {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node === null || node.contains(document.activeElement) === true) {
          return;
        }
        node = node.querySelector(selector || "[autofocus], [data-autofocus]") || node;
        node.focus({ preventScroll: true });
      });
    }
    function shake() {
      focus();
      emit("shake");
      const node = innerRef.value;
      if (node !== null) {
        node.classList.remove("q-animate--scale");
        node.classList.add("q-animate--scale");
        clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
          if (innerRef.value !== null) {
            node.classList.remove("q-animate--scale");
            focus();
          }
        }, 170);
      }
    }
    function onEscapeKey() {
      if (props.seamless !== true) {
        if (props.persistent === true || props.noEscDismiss === true) {
          props.maximized !== true && props.noShake !== true && shake();
        } else {
          emit("escape-key");
          hide();
        }
      }
    }
    function cleanup(hiding) {
      clearTimeout(shakeTimeout);
      if (hiding === true || showing.value === true) {
        updateMaximized(false);
        if (props.seamless !== true) {
          preventBodyScroll(false);
          removeFocusout(onFocusChange);
          removeEscapeKey(onEscapeKey);
        }
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function updateMaximized(active) {
      if (active === true) {
        if (isMaximized !== true) {
          maximizedModals < 1 && document.body.classList.add("q-body--dialog");
          maximizedModals++;
          isMaximized = true;
        }
      } else if (isMaximized === true) {
        if (maximizedModals < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        maximizedModals--;
        isMaximized = false;
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        hide(e);
        emit("click", e);
      }
    }
    function onBackdropClick(e) {
      if (props.persistent !== true && props.noBackdropDismiss !== true) {
        hide(e);
      } else if (props.noShake !== true) {
        shake();
      }
    }
    function onFocusChange(evt) {
      if (props.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(vm.proxy, {
      focus,
      shake,
      __updateRefocusTarget(target2) {
        refocusTarget = target2 || null;
      }
    });
    onBeforeUnmount(cleanup);
    function renderPortalContent() {
      return h("div", {
        role: "dialog",
        "aria-modal": useBackdrop.value === true ? "true" : "false",
        ...attrs,
        class: rootClasses.value
      }, [
        h(Transition, {
          name: "q-transition--fade",
          appear: true
        }, () => useBackdrop.value === true ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: transitionStyle.value,
          "aria-hidden": "true",
          onMousedown: onBackdropClick
        }) : null),
        h(
          Transition,
          { name: transition.value, appear: true },
          () => showing.value === true ? h("div", {
            ref: innerRef,
            class: classes.value,
            style: transitionStyle.value,
            tabindex: -1,
            ...onEvents.value
          }, hSlot(slots.default)) : null
        )
      ]);
    }
    return renderPortal;
  }
});
export { QDialog as Q, usePortal as a, addFocusout as b, closePortals as c, removeEscapeKey as d, addEscapeKey as e, closePortalMenus as f, getPortalProxy as g, portalProxyList as p, removeFocusout as r, useTick as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUURpYWxvZy43NWVkYjE2Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGljay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvZ2xvYmFsLW5vZGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wb3J0YWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2VzY2FwZS1rZXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2ZvY3Vzb3V0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9kaWFsb2cvUURpYWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXh0VGljaywgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHZtSXNEZXN0cm95ZWQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtJ1xuXG4vKlxuICogVXNhZ2U6XG4gKiAgICByZWdpc3RlclRpY2soZm4pXG4gKiAgICByZW1vdmVUaWNrKClcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCB0aWNrRm5cbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRpY2sgKCkge1xuICAgIHRpY2tGbiA9IHZvaWQgMFxuICB9XG5cbiAgb25EZWFjdGl2YXRlZChyZW1vdmVUaWNrKVxuICBvbkJlZm9yZVVubW91bnQocmVtb3ZlVGljaylcblxuICByZXR1cm4ge1xuICAgIHJlbW92ZVRpY2ssXG5cbiAgICByZWdpc3RlclRpY2sgKGZuKSB7XG4gICAgICB0aWNrRm4gPSBmblxuXG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmICh0aWNrRm4gPT09IGZuKSB7XG4gICAgICAgICAgLy8gd2UgYWxzbyBjaGVjayBpZiBWTSBpcyBkZXN0cm95ZWQsIHNpbmNlIGlmIGl0XG4gICAgICAgICAgLy8gZ290IHRvIHRyaWdnZXIgb25lIG5leHRUaWNrKCkgd2UgY2Fubm90IHN0b3AgaXRcbiAgICAgICAgICB2bUlzRGVzdHJveWVkKHZtKSA9PT0gZmFsc2UgJiYgdGlja0ZuKClcbiAgICAgICAgICB0aWNrRm4gPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGdsb2JhbENvbmZpZyB9IGZyb20gJy4vZ2xvYmFsLWNvbmZpZy5qcydcblxuY29uc3QgZ2xvYmFsTm9kZXMgPSBbXVxubGV0IHRhcmdldCA9IF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHZvaWQgMFxuICA6IGRvY3VtZW50LmJvZHlcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdsb2JhbE5vZGUgKGlkKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBpZiAoaWQgIT09IHZvaWQgMCkge1xuICAgIGVsLmlkID0gaWRcbiAgfVxuXG4gIGlmIChnbG9iYWxDb25maWcuZ2xvYmFsTm9kZXMgIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGNscyA9IGdsb2JhbENvbmZpZy5nbG9iYWxOb2Rlcy5jbGFzc1xuICAgIGlmIChjbHMgIT09IHZvaWQgMCkge1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xzXG4gICAgfVxuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsKVxuICBnbG9iYWxOb2Rlcy5wdXNoKGVsKVxuXG4gIHJldHVybiBlbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlR2xvYmFsTm9kZSAoZWwpIHtcbiAgZ2xvYmFsTm9kZXMuc3BsaWNlKGdsb2JhbE5vZGVzLmluZGV4T2YoZWwpLCAxKVxuICBlbC5yZW1vdmUoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlR2xvYmFsTm9kZXNUYXJnZXQgKGVsKSB7XG4gIGlmIChlbCAhPT0gdGFyZ2V0KSB7XG4gICAgdGFyZ2V0ID0gZWxcblxuICAgIGdsb2JhbE5vZGVzLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsLmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRQYXJlbnRQcm94eSB9IGZyb20gJy4vdm0uanMnXG5cbmV4cG9ydCBjb25zdCBwb3J0YWxQcm94eUxpc3QgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9ydGFsUHJveHkgKGVsKSB7XG4gIHJldHVybiBwb3J0YWxQcm94eUxpc3QuZmluZChwcm94eSA9PlxuICAgIHByb3h5Ll9fcVBvcnRhbElubmVyUmVmLnZhbHVlICE9PSBudWxsXG4gICAgJiYgcHJveHkuX19xUG9ydGFsSW5uZXJSZWYudmFsdWUuY29udGFpbnMoZWwpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9ydGFsTWVudXMgKHByb3h5LCBldnQpIHtcbiAgZG8ge1xuICAgIGlmIChwcm94eS4kb3B0aW9ucy5uYW1lID09PSAnUU1lbnUnKSB7XG4gICAgICBwcm94eS5oaWRlKGV2dClcblxuICAgICAgLy8gaXMgdGhpcyBhIHBvaW50IG9mIHNlcGFyYXRpb24/XG4gICAgICBpZiAocHJveHkuJHByb3BzLnNlcGFyYXRlQ2xvc2VQb3B1cCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50UHJveHkocHJveHkpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3h5Ll9fcVBvcnRhbElubmVyUmVmICE9PSB2b2lkIDApIHtcbiAgICAgIC8vIHRyZWF0IGl0IGFzIHBvaW50IG9mIHNlcGFyYXRpb24gaWYgcGFyZW50IGlzIFFQb3B1cFByb3h5XG4gICAgICAvLyAoc28gbW9iaWxlIG1hdGNoZXMgZGVza3RvcCBiZWhhdmlvcilcbiAgICAgIC8vIGFuZCBoaWRlIGl0IHRvb1xuICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50UHJveHkocHJveHkpXG5cbiAgICAgIGlmIChwYXJlbnQgIT09IHZvaWQgMCAmJiBwYXJlbnQuJG9wdGlvbnMubmFtZSA9PT0gJ1FQb3B1cFByb3h5Jykge1xuICAgICAgICBwcm94eS5oaWRlKGV2dClcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm94eVxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3h5ID0gZ2V0UGFyZW50UHJveHkocHJveHkpXG4gIH0gd2hpbGUgKHByb3h5ICE9PSB2b2lkIDAgJiYgcHJveHkgIT09IG51bGwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcnRhbHMgKHByb3h5LCBldnQsIGRlcHRoKSB7XG4gIHdoaWxlIChkZXB0aCAhPT0gMCAmJiBwcm94eSAhPT0gdm9pZCAwICYmIHByb3h5ICE9PSBudWxsKSB7XG4gICAgaWYgKHByb3h5Ll9fcVBvcnRhbElubmVyUmVmICE9PSB2b2lkIDApIHtcbiAgICAgIGRlcHRoLS1cblxuICAgICAgaWYgKHByb3h5LiRvcHRpb25zLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgICAgcHJveHkgPSBjbG9zZVBvcnRhbE1lbnVzKHByb3h5LCBldnQpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHByb3h5LmhpZGUoZXZ0KVxuICAgIH1cblxuICAgIHByb3h5ID0gZ2V0UGFyZW50UHJveHkocHJveHkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgb25Vbm1vdW50ZWQsIFRlbGVwb3J0IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c1dhaXRGbGFnLCByZW1vdmVGb2N1c1dhaXRGbGFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsTm9kZSwgcmVtb3ZlR2xvYmFsTm9kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZ2xvYmFsLW5vZGVzLmpzJ1xuaW1wb3J0IHsgcG9ydGFsUHJveHlMaXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMnXG5cbmZ1bmN0aW9uIGlzT25HbG9iYWxEaWFsb2cgKHZtKSB7XG4gIHZtID0gdm0ucGFyZW50XG5cbiAgd2hpbGUgKHZtICE9PSB2b2lkIDAgJiYgdm0gIT09IG51bGwpIHtcbiAgICBpZiAodm0udHlwZS5uYW1lID09PSAnUUdsb2JhbERpYWxvZycpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICh2bS50eXBlLm5hbWUgPT09ICdRRGlhbG9nJyB8fCB2bS50eXBlLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHZtID0gdm0ucGFyZW50XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gV2FybmluZyFcbi8vIFlvdSBNVVNUIHNwZWNpZnkgXCJpbmhlcml0QXR0cnM6IGZhbHNlXCIgaW4geW91ciBjb21wb25lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudCwgY2hlY2tHbG9iYWxEaWFsb2cpIHtcbiAgLy8gc2hvd2luZywgaW5jbHVkaW5nIHdoaWxlIGluIHNob3cvaGlkZSB0cmFuc2l0aW9uXG4gIGNvbnN0IHBvcnRhbElzQWN0aXZlID0gcmVmKGZhbHNlKVxuXG4gIC8vIHNob3dpbmcgJiBub3QgaW4gYW55IHNob3cvaGlkZSB0cmFuc2l0aW9uXG4gIGNvbnN0IHBvcnRhbElzQWNjZXNzaWJsZSA9IHJlZihmYWxzZSlcblxuICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvcnRhbElzQWN0aXZlLFxuICAgICAgcG9ydGFsSXNBY2Nlc3NpYmxlLFxuXG4gICAgICBzaG93UG9ydGFsOiBub29wLFxuICAgICAgaGlkZVBvcnRhbDogbm9vcCxcbiAgICAgIHJlbmRlclBvcnRhbDogbm9vcFxuICAgIH1cbiAgfVxuXG4gIGxldCBwb3J0YWxFbCA9IG51bGxcbiAgY29uc3QgZm9jdXNPYmogPSB7fVxuICBjb25zdCBvbkdsb2JhbERpYWxvZyA9IGNoZWNrR2xvYmFsRGlhbG9nID09PSB0cnVlICYmIGlzT25HbG9iYWxEaWFsb2codm0pXG5cbiAgZnVuY3Rpb24gc2hvd1BvcnRhbCAoaXNSZWFkeSkge1xuICAgIGlmIChpc1JlYWR5ID09PSB0cnVlKSB7XG4gICAgICByZW1vdmVGb2N1c1dhaXRGbGFnKGZvY3VzT2JqKVxuICAgICAgcG9ydGFsSXNBY2Nlc3NpYmxlLnZhbHVlID0gdHJ1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcG9ydGFsSXNBY2Nlc3NpYmxlLnZhbHVlID0gZmFsc2VcblxuICAgIGlmIChwb3J0YWxJc0FjdGl2ZS52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChvbkdsb2JhbERpYWxvZyA9PT0gZmFsc2UgJiYgcG9ydGFsRWwgPT09IG51bGwpIHtcbiAgICAgICAgcG9ydGFsRWwgPSBjcmVhdGVHbG9iYWxOb2RlKClcbiAgICAgIH1cblxuICAgICAgcG9ydGFsSXNBY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICAgIC8vIHJlZ2lzdGVyIHBvcnRhbFxuICAgICAgcG9ydGFsUHJveHlMaXN0LnB1c2godm0ucHJveHkpXG5cbiAgICAgIGFkZEZvY3VzV2FpdEZsYWcoZm9jdXNPYmopXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVBvcnRhbCAoaXNSZWFkeSkge1xuICAgIHBvcnRhbElzQWNjZXNzaWJsZS52YWx1ZSA9IGZhbHNlXG5cbiAgICBpZiAoaXNSZWFkeSAhPT0gdHJ1ZSkgeyByZXR1cm4gfVxuXG4gICAgcmVtb3ZlRm9jdXNXYWl0RmxhZyhmb2N1c09iailcbiAgICBwb3J0YWxJc0FjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICAvLyB1bnJlZ2lzdGVyIHBvcnRhbFxuICAgIGNvbnN0IGluZGV4ID0gcG9ydGFsUHJveHlMaXN0LmluZGV4T2Yodm0ucHJveHkpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcG9ydGFsUHJveHlMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICBpZiAocG9ydGFsRWwgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZUdsb2JhbE5vZGUocG9ydGFsRWwpXG4gICAgICBwb3J0YWxFbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBvblVubW91bnRlZCgoKSA9PiB7IGhpZGVQb3J0YWwodHJ1ZSkgfSlcblxuICAvLyBuZWVkZWQgZm9yIHBvcnRhbCB2bSBkZXRlY3Rpb25cbiAgdm0ucHJveHkuX19xUG9ydGFsSW5uZXJSZWYgPSBpbm5lclJlZlxuXG4gIHJldHVybiB7XG4gICAgc2hvd1BvcnRhbCxcbiAgICBoaWRlUG9ydGFsLFxuXG4gICAgcG9ydGFsSXNBY3RpdmUsXG4gICAgcG9ydGFsSXNBY2Nlc3NpYmxlLFxuXG4gICAgcmVuZGVyUG9ydGFsOiAoKSA9PiAoXG4gICAgICBvbkdsb2JhbERpYWxvZyA9PT0gdHJ1ZVxuICAgICAgICA/IHJlbmRlclBvcnRhbENvbnRlbnQoKVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHBvcnRhbElzQWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gWyBoKFRlbGVwb3J0LCB7IHRvOiBwb3J0YWxFbCB9LCByZW5kZXJQb3J0YWxDb250ZW50KCkpIF1cbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi9rZXktY29tcG9zaXRpb24uanMnXG5cbmNvbnN0IGhhbmRsZXJzID0gW11cbmxldCBlc2NEb3duXG5cbmZ1bmN0aW9uIG9uS2V5ZG93biAoZXZ0KSB7XG4gIGVzY0Rvd24gPSBldnQua2V5Q29kZSA9PT0gMjdcbn1cblxuZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgaWYgKGVzY0Rvd24gPT09IHRydWUpIHtcbiAgICBlc2NEb3duID0gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgaWYgKGVzY0Rvd24gPT09IHRydWUpIHtcbiAgICBlc2NEb3duID0gZmFsc2VcblxuICAgIGlmIChpc0tleUNvZGUoZXZ0LCAyNykgPT09IHRydWUpIHtcbiAgICAgIGhhbmRsZXJzWyBoYW5kbGVycy5sZW5ndGggLSAxIF0oZXZ0KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUgKGFjdGlvbikge1xuICB3aW5kb3dbIGFjdGlvbiBdKCdrZXlkb3duJywgb25LZXlkb3duKVxuICB3aW5kb3dbIGFjdGlvbiBdKCdibHVyJywgb25CbHVyKVxuICB3aW5kb3dbIGFjdGlvbiBdKCdrZXl1cCcsIG9uS2V5dXApXG4gIGVzY0Rvd24gPSBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXNjYXBlS2V5IChmbikge1xuICBpZiAoY2xpZW50LmlzLmRlc2t0b3AgPT09IHRydWUpIHtcbiAgICBoYW5kbGVycy5wdXNoKGZuKVxuXG4gICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdXBkYXRlKCdhZGRFdmVudExpc3RlbmVyJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVzY2FwZUtleSAoZm4pIHtcbiAgY29uc3QgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGZuKVxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVwZGF0ZSgncmVtb3ZlRXZlbnRMaXN0ZW5lcicpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5jb25zdCBoYW5kbGVycyA9IFtdXG5cbmZ1bmN0aW9uIHRyaWdnZXIgKGUpIHtcbiAgaGFuZGxlcnNbIGhhbmRsZXJzLmxlbmd0aCAtIDEgXShlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9jdXNvdXQgKGZuKSB7XG4gIGlmIChjbGllbnQuaXMuZGVza3RvcCA9PT0gdHJ1ZSkge1xuICAgIGhhbmRsZXJzLnB1c2goZm4pXG5cbiAgICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0cmlnZ2VyKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9jdXNvdXQgKGZuKSB7XG4gIGNvbnN0IGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihmbilcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0cmlnZ2VyKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIFRyYW5zaXRpb24sIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtaGlzdG9yeS5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpbWVvdXQuanMnXG5pbXBvcnQgdXNlVGljayBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aWNrLmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10cmFuc2l0aW9uLmpzJ1xuaW1wb3J0IHVzZVBvcnRhbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wb3J0YWwuanMnXG5pbXBvcnQgdXNlUHJldmVudFNjcm9sbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wcmV2ZW50LXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBjaGlsZEhhc0ZvY3VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGFkZEVzY2FwZUtleSwgcmVtb3ZlRXNjYXBlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9lc2NhcGUta2V5LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNvdXQsIHJlbW92ZUZvY3Vzb3V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1c291dC5qcydcbmltcG9ydCB7IGFkZEZvY3VzRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3VzLW1hbmFnZXIuanMnXG5cbmxldCBtYXhpbWl6ZWRNb2RhbHMgPSAwXG5cbmNvbnN0IHBvc2l0aW9uQ2xhc3MgPSB7XG4gIHN0YW5kYXJkOiAnZml4ZWQtZnVsbCBmbGV4LWNlbnRlcicsXG4gIHRvcDogJ2ZpeGVkLXRvcCBqdXN0aWZ5LWNlbnRlcicsXG4gIGJvdHRvbTogJ2ZpeGVkLWJvdHRvbSBqdXN0aWZ5LWNlbnRlcicsXG4gIHJpZ2h0OiAnZml4ZWQtcmlnaHQgaXRlbXMtY2VudGVyJyxcbiAgbGVmdDogJ2ZpeGVkLWxlZnQgaXRlbXMtY2VudGVyJ1xufVxuXG5jb25zdCB0cmFuc2l0aW9ucyA9IHtcbiAgc3RhbmRhcmQ6IFsgJ3NjYWxlJywgJ3NjYWxlJyBdLFxuICB0b3A6IFsgJ3NsaWRlLWRvd24nLCAnc2xpZGUtdXAnIF0sXG4gIGJvdHRvbTogWyAnc2xpZGUtdXAnLCAnc2xpZGUtZG93bicgXSxcbiAgcmlnaHQ6IFsgJ3NsaWRlLWxlZnQnLCAnc2xpZGUtcmlnaHQnIF0sXG4gIGxlZnQ6IFsgJ3NsaWRlLXJpZ2h0JywgJ3NsaWRlLWxlZnQnIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FEaWFsb2cnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZVRyYW5zaXRpb25Qcm9wcyxcblxuICAgIHRyYW5zaXRpb25TaG93OiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbkhpZGU6IFN0cmluZyxcblxuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgYXV0b0Nsb3NlOiBCb29sZWFuLFxuICAgIGFsbG93Rm9jdXNPdXRzaWRlOiBCb29sZWFuLFxuXG4gICAgbm9Fc2NEaXNtaXNzOiBCb29sZWFuLFxuICAgIG5vQmFja2Ryb3BEaXNtaXNzOiBCb29sZWFuLFxuICAgIG5vUm91dGVEaXNtaXNzOiBCb29sZWFuLFxuICAgIG5vUmVmb2N1czogQm9vbGVhbixcbiAgICBub0ZvY3VzOiBCb29sZWFuLFxuICAgIG5vU2hha2U6IEJvb2xlYW4sXG5cbiAgICBzZWFtbGVzczogQm9vbGVhbixcblxuICAgIG1heGltaXplZDogQm9vbGVhbixcbiAgICBmdWxsV2lkdGg6IEJvb2xlYW4sXG4gICAgZnVsbEhlaWdodDogQm9vbGVhbixcblxuICAgIHNxdWFyZTogQm9vbGVhbixcblxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc3RhbmRhcmQnLFxuICAgICAgdmFsaWRhdG9yOiB2YWwgPT4gdmFsID09PSAnc3RhbmRhcmQnXG4gICAgICAgIHx8IFsgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcgXS5pbmNsdWRlcyh2YWwpXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnc2hha2UnLCAnY2xpY2snLCAnZXNjYXBlLWtleSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpbm5lclJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgdHJhbnNpdGlvblN0YXRlID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGFuaW1hdGluZyA9IHJlZihmYWxzZSlcblxuICAgIGxldCBzaGFrZVRpbWVvdXQsIHJlZm9jdXNUYXJnZXQgPSBudWxsLCBpc01heGltaXplZCwgYXZvaWRBdXRvQ2xvc2VcblxuICAgIGNvbnN0IGhpZGVPblJvdXRlQ2hhbmdlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICAgICYmIHByb3BzLm5vUm91dGVEaXNtaXNzICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5zZWFtbGVzcyAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IHsgcHJldmVudEJvZHlTY3JvbGwgfSA9IHVzZVByZXZlbnRTY3JvbGwoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljaywgcmVtb3ZlVGljayB9ID0gdXNlVGljaygpXG5cbiAgICBjb25zdCB7IHNob3dQb3J0YWwsIGhpZGVQb3J0YWwsIHBvcnRhbElzQWNjZXNzaWJsZSwgcmVuZGVyUG9ydGFsIH0gPSB1c2VQb3J0YWwoXG4gICAgICB2bSwgaW5uZXJSZWYsIHJlbmRlclBvcnRhbENvbnRlbnQsIC8qIHBscyBkbyBjaGVjayBpZiBvbiBhIGdsb2JhbCBkaWFsb2cgKi8gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IHsgaGlkZSB9ID0gdXNlTW9kZWxUb2dnbGUoe1xuICAgICAgc2hvd2luZyxcbiAgICAgIGhpZGVPblJvdXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU2hvdyxcbiAgICAgIGhhbmRsZUhpZGUsXG4gICAgICBwcm9jZXNzT25Nb3VudDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IGFkZFRvSGlzdG9yeSwgcmVtb3ZlRnJvbUhpc3RvcnkgfSA9IHVzZUhpc3Rvcnkoc2hvd2luZywgaGlkZSwgaGlkZU9uUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWRpYWxvZ19faW5uZXIgZmxleCBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICsgYCBxLWRpYWxvZ19faW5uZXItLSR7IHByb3BzLm1heGltaXplZCA9PT0gdHJ1ZSA/ICdtYXhpbWl6ZWQnIDogJ21pbmltaXplZCcgfWBcbiAgICAgICsgYCBxLWRpYWxvZ19faW5uZXItLSR7IHByb3BzLnBvc2l0aW9uIH0gJHsgcG9zaXRpb25DbGFzc1sgcHJvcHMucG9zaXRpb24gXSB9YFxuICAgICAgKyAoYW5pbWF0aW5nLnZhbHVlID09PSB0cnVlID8gJyBxLWRpYWxvZ19faW5uZXItLWFuaW1hdGluZycgOiAnJylcbiAgICAgICsgKHByb3BzLmZ1bGxXaWR0aCA9PT0gdHJ1ZSA/ICcgcS1kaWFsb2dfX2lubmVyLS1mdWxsd2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5mdWxsSGVpZ2h0ID09PSB0cnVlID8gJyBxLWRpYWxvZ19faW5uZXItLWZ1bGxoZWlnaHQnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtZGlhbG9nX19pbm5lci0tc3F1YXJlJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHRyYW5zaXRpb25TaG93ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRyYW5zaXRpb24tLSdcbiAgICAgICsgKHByb3BzLnRyYW5zaXRpb25TaG93ID09PSB2b2lkIDAgPyB0cmFuc2l0aW9uc1sgcHJvcHMucG9zaXRpb24gXVsgMCBdIDogcHJvcHMudHJhbnNpdGlvblNob3cpXG4gICAgKVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkhpZGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdHJhbnNpdGlvbi0tJ1xuICAgICAgKyAocHJvcHMudHJhbnNpdGlvbkhpZGUgPT09IHZvaWQgMCA/IHRyYW5zaXRpb25zWyBwcm9wcy5wb3NpdGlvbiBdWyAxIF0gOiBwcm9wcy50cmFuc2l0aW9uSGlkZSlcbiAgICApXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHJhbnNpdGlvblN0YXRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gdHJhbnNpdGlvbkhpZGUudmFsdWVcbiAgICAgICAgOiB0cmFuc2l0aW9uU2hvdy52YWx1ZVxuICAgICkpXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uU3R5bGUgPSBjb21wdXRlZChcbiAgICAgICgpID0+IGAtLXEtdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIH1tc2BcbiAgICApXG5cbiAgICBjb25zdCB1c2VCYWNrZHJvcCA9IGNvbXB1dGVkKCgpID0+IHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMuc2VhbWxlc3MgIT09IHRydWUpXG5cbiAgICBjb25zdCBvbkV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmF1dG9DbG9zZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogb25BdXRvQ2xvc2UgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIGNvbnN0IHJvb3RDbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4gW1xuICAgICAgJ3EtZGlhbG9nIGZ1bGxzY3JlZW4gbm8tcG9pbnRlci1ldmVudHMgJ1xuICAgICAgICArIGBxLWRpYWxvZy0tJHsgdXNlQmFja2Ryb3AudmFsdWUgPT09IHRydWUgPyAnbW9kYWwnIDogJ3NlYW1sZXNzJyB9YCxcbiAgICAgIGF0dHJzLmNsYXNzXG4gICAgXSlcblxuICAgIHdhdGNoKHNob3dpbmcsIHZhbCA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRyYW5zaXRpb25TdGF0ZS52YWx1ZSA9IHZhbFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWF4aW1pemVkLCBzdGF0ZSA9PiB7XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHVwZGF0ZU1heGltaXplZChzdGF0ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2godXNlQmFja2Ryb3AsIHZhbCA9PiB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbCh2YWwpXG5cbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkRm9jdXNvdXQob25Gb2N1c0NoYW5nZSlcbiAgICAgICAgYWRkRXNjYXBlS2V5KG9uRXNjYXBlS2V5KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZUZvY3Vzb3V0KG9uRm9jdXNDaGFuZ2UpXG4gICAgICAgIHJlbW92ZUVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0KSB7XG4gICAgICBhZGRUb0hpc3RvcnkoKVxuXG4gICAgICByZWZvY3VzVGFyZ2V0ID0gcHJvcHMubm9SZWZvY3VzID09PSBmYWxzZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBudWxsXG4gICAgICAgID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgICA6IG51bGxcblxuICAgICAgdXBkYXRlTWF4aW1pemVkKHByb3BzLm1heGltaXplZClcbiAgICAgIHNob3dQb3J0YWwoKVxuICAgICAgYW5pbWF0aW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgICBpZiAocHJvcHMubm9Gb2N1cyAhPT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBudWxsICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAgIHJlZ2lzdGVyVGljayhmb2N1cylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUaWNrKClcbiAgICAgIH1cblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpbWVvdXQoKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHZtLnByb3h5LiRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChwcm9wcy5zZWFtbGVzcyAhPT0gdHJ1ZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICB7IHRvcCwgYm90dG9tIH0gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3csXG4gICAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQuaGVpZ2h0XG4gICAgICAgICAgICAgICAgOiBpbm5lckhlaWdodFxuXG4gICAgICAgICAgICBpZiAodG9wID4gMCAmJiBib3R0b20gPiBoZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxIZWlnaHQgLSBoZWlnaHQsXG4gICAgICAgICAgICAgICAgYm90dG9tID49IGlubmVySGVpZ2h0XG4gICAgICAgICAgICAgICAgICA/IEluZmluaXR5XG4gICAgICAgICAgICAgICAgICA6IE1hdGguY2VpbChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCArIGJvdHRvbSAtIGhlaWdodCAvIDIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmVxdWlyZWQgaW4gb3JkZXIgdG8gYXZvaWQgdGhlIFwiZG91YmxlLXRhcCBuZWVkZWRcIiBpc3N1ZVxuICAgICAgICAgIGF2b2lkQXV0b0Nsb3NlID0gdHJ1ZVxuICAgICAgICAgIGlubmVyUmVmLnZhbHVlLmNsaWNrKClcbiAgICAgICAgICBhdm9pZEF1dG9DbG9zZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBzaG93UG9ydGFsKHRydWUpIC8vIGRvbmUgc2hvd2luZyBwb3J0YWxcbiAgICAgICAgYW5pbWF0aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgZW1pdCgnc2hvdycsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIaWRlIChldnQpIHtcbiAgICAgIHJlbW92ZVRpY2soKVxuICAgICAgcmVtb3ZlRnJvbUhpc3RvcnkoKVxuICAgICAgY2xlYW51cCh0cnVlKVxuICAgICAgYW5pbWF0aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgaGlkZVBvcnRhbCgpXG5cbiAgICAgIGlmIChyZWZvY3VzVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZm9jdXNUYXJnZXQuZm9jdXMoKVxuICAgICAgICByZWZvY3VzVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoaWRlUG9ydGFsKHRydWUpIC8vIGRvbmUgaGlkaW5nLCBub3cgZGVzdHJveVxuICAgICAgICBhbmltYXRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzIChzZWxlY3Rvcikge1xuICAgICAgYWRkRm9jdXNGbigoKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gaW5uZXJSZWYudmFsdWVcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yIHx8ICdbYXV0b2ZvY3VzXSwgW2RhdGEtYXV0b2ZvY3VzXScpIHx8IG5vZGVcbiAgICAgICAgbm9kZS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hha2UgKCkge1xuICAgICAgZm9jdXMoKVxuICAgICAgZW1pdCgnc2hha2UnKVxuXG4gICAgICBjb25zdCBub2RlID0gaW5uZXJSZWYudmFsdWVcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdxLWFuaW1hdGUtLXNjYWxlJylcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdxLWFuaW1hdGUtLXNjYWxlJylcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNoYWtlVGltZW91dClcbiAgICAgICAgc2hha2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGlubmVyUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3EtYW5pbWF0ZS0tc2NhbGUnKVxuICAgICAgICAgICAgLy8gc29tZSBwbGF0Zm9ybXMgKGxpa2UgZGVza3RvcCBDaHJvbWUpXG4gICAgICAgICAgICAvLyByZXF1aXJlIGNhbGxpbmcgZm9jdXMoKSBhZ2FpblxuICAgICAgICAgICAgZm9jdXMoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTcwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRXNjYXBlS2V5ICgpIHtcbiAgICAgIGlmIChwcm9wcy5zZWFtbGVzcyAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMucGVyc2lzdGVudCA9PT0gdHJ1ZSB8fCBwcm9wcy5ub0VzY0Rpc21pc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBwcm9wcy5tYXhpbWl6ZWQgIT09IHRydWUgJiYgcHJvcHMubm9TaGFrZSAhPT0gdHJ1ZSAmJiBzaGFrZSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZW1pdCgnZXNjYXBlLWtleScpXG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwIChoaWRpbmcpIHtcbiAgICAgIGNsZWFyVGltZW91dChzaGFrZVRpbWVvdXQpXG5cbiAgICAgIGlmIChoaWRpbmcgPT09IHRydWUgfHwgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVNYXhpbWl6ZWQoZmFsc2UpXG5cbiAgICAgICAgaWYgKHByb3BzLnNlYW1sZXNzICE9PSB0cnVlKSB7XG4gICAgICAgICAgcHJldmVudEJvZHlTY3JvbGwoZmFsc2UpXG4gICAgICAgICAgcmVtb3ZlRm9jdXNvdXQob25Gb2N1c0NoYW5nZSlcbiAgICAgICAgICByZW1vdmVFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGhpZGluZyAhPT0gdHJ1ZSkge1xuICAgICAgICByZWZvY3VzVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1heGltaXplZCAoYWN0aXZlKSB7XG4gICAgICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChpc01heGltaXplZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIG1heGltaXplZE1vZGFscyA8IDEgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWRpYWxvZycpXG4gICAgICAgICAgbWF4aW1pemVkTW9kYWxzKytcblxuICAgICAgICAgIGlzTWF4aW1pemVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc01heGltaXplZCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAobWF4aW1pemVkTW9kYWxzIDwgMikge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1kaWFsb2cnKVxuICAgICAgICB9XG5cbiAgICAgICAgbWF4aW1pemVkTW9kYWxzLS1cbiAgICAgICAgaXNNYXhpbWl6ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQXV0b0Nsb3NlIChlKSB7XG4gICAgICBpZiAoYXZvaWRBdXRvQ2xvc2UgIT09IHRydWUpIHtcbiAgICAgICAgaGlkZShlKVxuICAgICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CYWNrZHJvcENsaWNrIChlKSB7XG4gICAgICBpZiAocHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZSAmJiBwcm9wcy5ub0JhY2tkcm9wRGlzbWlzcyAhPT0gdHJ1ZSkge1xuICAgICAgICBoaWRlKGUpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwcm9wcy5ub1NoYWtlICE9PSB0cnVlKSB7XG4gICAgICAgIHNoYWtlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzQ2hhbmdlIChldnQpIHtcbiAgICAgIC8vIHRoZSBmb2N1cyBpcyBub3QgaW4gYSB2dWUgY2hpbGQgY29tcG9uZW50XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmFsbG93Rm9jdXNPdXRzaWRlICE9PSB0cnVlXG4gICAgICAgICYmIHBvcnRhbElzQWNjZXNzaWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAmJiBjaGlsZEhhc0ZvY3VzKGlubmVyUmVmLnZhbHVlLCBldnQudGFyZ2V0KSAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGZvY3VzKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKVxuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgICAgZm9jdXMsIHNoYWtlLFxuXG4gICAgICAvLyBwcml2YXRlIGJ1dCBuZWVkZWQgYnkgUVNlbGVjdFxuICAgICAgX191cGRhdGVSZWZvY3VzVGFyZ2V0ICh0YXJnZXQpIHtcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IHRhcmdldCB8fCBudWxsXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUG9ydGFsQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAgICAgJ2FyaWEtbW9kYWwnOiB1c2VCYWNrZHJvcC52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBjbGFzczogcm9vdENsYXNzZXMudmFsdWVcbiAgICAgIH0sIFtcbiAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tZmFkZScsXG4gICAgICAgICAgYXBwZWFyOiB0cnVlXG4gICAgICAgIH0sICgpID0+IChcbiAgICAgICAgICB1c2VCYWNrZHJvcC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1kaWFsb2dfX2JhY2tkcm9wIGZpeGVkLWZ1bGwnLFxuICAgICAgICAgICAgICBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAgIG9uTW91c2Vkb3duOiBvbkJhY2tkcm9wQ2xpY2tcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgKSksXG5cbiAgICAgICAgaChcbiAgICAgICAgICBUcmFuc2l0aW9uLFxuICAgICAgICAgIHsgbmFtZTogdHJhbnNpdGlvbi52YWx1ZSwgYXBwZWFyOiB0cnVlIH0sXG4gICAgICAgICAgKCkgPT4gKFxuICAgICAgICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIC4uLm9uRXZlbnRzLnZhbHVlXG4gICAgICAgICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclBvcnRhbFxuICB9XG59KVxuIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBVWUsU0FBQSxVQUFZO0FBQ3pCLE1BQUk7QUFDSixRQUFNLEtBQUssbUJBQW9CO0FBRS9CLFdBQVMsYUFBYztBQUNyQixhQUFTO0FBQUEsRUFDVjtBQUVELGdCQUFjLFVBQVU7QUFDeEIsa0JBQWdCLFVBQVU7QUFFMUIsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUVBLGFBQWMsSUFBSTtBQUNoQixlQUFTO0FBRVQsZUFBUyxNQUFNO0FBQ2IsWUFBSSxXQUFXLElBQUk7QUFHakIsd0JBQWMsRUFBRSxNQUFNLFNBQVMsT0FBUTtBQUN2QyxtQkFBUztBQUFBLFFBQ1Y7QUFBQSxNQUNULENBQU87QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNIO0FDbENBLElBQUksU0FFQSxTQUFTO0FBRU4sU0FBUyxpQkFBa0IsSUFBSTtBQUNwQyxRQUFNLEtBQUssU0FBUyxjQUFjLEtBQUs7QUFFdkMsTUFBSSxPQUFPLFFBQVE7QUFDakIsT0FBRyxLQUFLO0FBQUEsRUFDVDtBQUVELE1BQUksYUFBYSxnQkFBZ0IsUUFBUTtBQUN2QyxVQUFNLE1BQU0sYUFBYSxZQUFZO0FBQ3JDLFFBQUksUUFBUSxRQUFRO0FBQ2xCLFNBQUcsWUFBWTtBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUVELFNBQU8sWUFBWSxFQUFFO0FBR3JCLFNBQU87QUFDVDtBQUVPLFNBQVMsaUJBQWtCLElBQUk7QUFFcEMsS0FBRyxPQUFRO0FBQ2I7QUM1QlksTUFBQyxrQkFBa0IsQ0FBRTtBQUUxQixTQUFTLGVBQWdCLElB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
