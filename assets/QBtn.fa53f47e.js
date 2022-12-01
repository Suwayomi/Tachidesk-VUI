import { c as computed, g as getCurrentInstance, r as ref, o as onBeforeUnmount, h, T as Transition, B as withDirectives, L as stopAndPrevent, M as isKeyCode, N as prevent, O as stop, Q as listenOpts } from "./index.c15e704f.js";
import { Q as QIcon } from "./QIcon.25655771.js";
import { u as useSizeProps, b as useSize, c as createComponent, a as hMergeSlot, Q as QSpinner } from "./QSpinner.dc7e097a.js";
import { R as Ripple } from "./Ripple.a0364732.js";
const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props) {
  return computed(() => {
    const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
    return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
function getParentProxy(proxy) {
  if (Object(proxy.$parent) === proxy.$parent) {
    return proxy.$parent;
  }
  let { parent } = proxy.$;
  while (Object(parent) === parent) {
    if (Object(parent.proxy) === parent.proxy) {
      return parent.proxy;
    }
    parent = parent.parent;
  }
}
function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm) {
  return vm.isUnmounted === true || vm.isDeactivated === true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key], outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) {
        return false;
      }
    } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) {
      return false;
    }
  }
  return true;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
}
const useRouterLinkProps = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  },
  href: String,
  target: String,
  disable: Boolean
};
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
  const vm = getCurrentInstance();
  const { props, proxy, emit } = vm;
  const hasRouter = vmHasRouter(vm);
  const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);
  const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(
    () => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  ) : computed(
    () => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  );
  const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
  const hasRouterLink = computed(() => resolvedLink.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
  const linkTag = computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
  const linkAttrs = computed(() => hasHrefLink.value === true ? {
    href: props.href,
    target: props.target
  } : hasRouterLink.value === true ? {
    href: resolvedLink.value.href,
    target: props.target
  } : {});
  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return -1;
    }
    const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
    if (routeMatched === void 0) {
      return -1;
    }
    const currentMatched = proxy.$route.matched;
    if (currentMatched.length === 0) {
      return -1;
    }
    const index = currentMatched.findIndex(
      isSameRouteRecord.bind(null, routeMatched)
    );
    if (index > -1) {
      return index;
    }
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
      isSameRouteRecord.bind(null, matched[length - 2])
    ) : index;
  });
  const linkIsActive = computed(
    () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkIsExactActive = computed(
    () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
  function getLink(to) {
    try {
      return proxy.$router.resolve(to);
    } catch (_) {
    }
    return null;
  }
  function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
    if (props.disable === true) {
      e.preventDefault();
      return Promise.resolve(false);
    }
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") {
      return Promise.resolve(false);
    }
    e.preventDefault();
    const promise = proxy.$router[replace === true ? "replace" : "push"](to);
    return returnRouterError === true ? promise : promise.then(() => {
    }).catch(() => {
    });
  }
  function navigateOnClick(e) {
    if (hasRouterLink.value === true) {
      const go = (opts) => navigateToRouterLink(e, opts);
      emit("click", e, go);
      e.defaultPrevented !== true && go();
    } else {
      emit("click", e);
    }
  }
  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,
    linkTag,
    resolvedLink,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkAttrs,
    getLink,
    navigateToRouterLink,
    navigateOnClick
  };
}
const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const formTypes = ["button", "submit", "reset"];
const mediaTypeRE = /[^\s]\/[^\s]/;
const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
const getBtnDesign = (props, defaultValue) => {
  if (props.flat === true)
    return "flat";
  if (props.outline === true)
    return "outline";
  if (props.push === true)
    return "push";
  if (props.unelevated === true)
    return "unelevated";
  return defaultValue;
};
const useBtnProps = {
  ...useSizeProps,
  ...useRouterLinkProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...btnDesignOptions.reduce(
    (acc, val) => (acc[val] = Boolean) && acc,
    {}
  ),
  square: Boolean,
  round: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function useBtn(props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: "button"
  });
  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
    return props.padding !== void 0 ? Object.assign({}, obj, {
      padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(
    () => props.rounded === true || props.fab === true || props.fabMini === true
  );
  const isActionable = computed(
    () => props.disable !== true && props.loading !== true
  );
  const tabIndex = computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
  const design = computed(() => getBtnDesign(props, "standard"));
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    } else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }
    if (linkTag.value === "a") {
      if (props.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    } else if (props.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${props.textColor || props.color}`;
      } else {
        colors = `bg-${props.color} text-${props.textColor || "white"}`;
      }
    } else if (props.textColor) {
      colors = `text-${props.textColor}`;
    }
    const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
  });
  const innerClasses = computed(
    () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  };
}
const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
var QBtn = createComponent({
  name: "QBtn",
  props: {
    ...useBtnProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = useBtn(props);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer;
    const hasLabel = computed(
      () => props.label !== void 0 && props.label !== null && props.label !== ""
    );
    const ripple = computed(() => props.disable === true || props.ripple === false ? false : {
      keyCodes: hasLink.value === true ? [13, 32] : [13],
      ...props.ripple === true ? {} : props.ripple
    });
    const rippleProps = computed(() => ({ center: props.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };
        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0 ? "" : "Passive";
          acc[`onTouchstart${suffix}`] = onTouchstart;
        }
        return acc;
      }
      return {
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      if (rootRef.value === null) {
        return;
      }
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      navigateOnClick(e);
    }
    function onKeydown(e) {
      if (rootRef.value === null) {
        return;
      }
      emit("keydown", e);
      if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();
        if (e.defaultPrevented !== true) {
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
        stopAndPrevent(e);
      }
    }
    function onTouchstart(e) {
      if (rootRef.value === null) {
        return;
      }
      emit("touchstart", e);
      if (e.defaultPrevented === true) {
        return;
      }
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        avoidMouseRipple = false;
      }, 200);
    }
    function onMousedown(e) {
      if (rootRef.value === null) {
        return;
      }
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
    }
    function onPressEnd(e) {
      if (rootRef.value === null) {
        return;
      }
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, { click: onClick });
    return () => {
      let inner = [];
      props.icon !== void 0 && inner.push(
        h(QIcon, {
          name: props.icon,
          left: props.stack === false && hasLabel.value === true,
          role: "img",
          "aria-hidden": "true"
        })
      );
      hasLabel.value === true && inner.push(
        h("span", { class: "block" }, [props.label])
      );
      inner = hMergeSlot(slots.default, inner);
      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(QIcon, {
            name: props.iconRight,
            right: props.stack === false && hasLabel.value === true,
            role: "img",
            "aria-hidden": "true"
          })
        );
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h("span", {
            class: "q-btn__progress absolute-full overflow-hidden" + (props.darkPercentage === true ? " q-btn__progress--dark" : "")
          }, [
            h("span", {
              class: "q-btn__progress-indicator fit block",
              style: percentageStyle.value
            })
          ])
        );
      }
      child.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
        }, inner)
      );
      props.loading !== null && child.push(
        h(Transition, {
          name: "q-transition--fade"
        }, () => props.loading === true ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner)])
        ] : null)
      );
      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [[
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ]]
      );
    };
  }
});
export { QBtn as Q, useRouterLink as a, vmIsDestroyed as b, useAlignProps as c, useAlign as d, getParentProxy as g, useRouterLinkProps as u, vmHasRouter as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0bi5mYTUzZjQ3ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYWxpZ24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3ZtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi91c2UtYnRuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4vUUJ0bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IGFsaWduTWFwID0ge1xuICBsZWZ0OiAnc3RhcnQnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxuICByaWdodDogJ2VuZCcsXG4gIGJldHdlZW46ICdiZXR3ZWVuJyxcbiAgYXJvdW5kOiAnYXJvdW5kJyxcbiAgZXZlbmx5OiAnZXZlbmx5JyxcbiAgc3RyZXRjaDogJ3N0cmV0Y2gnXG59XG5cbmV4cG9ydCBjb25zdCBhbGlnblZhbHVlcyA9IE9iamVjdC5rZXlzKGFsaWduTWFwKVxuXG5leHBvcnQgY29uc3QgdXNlQWxpZ25Qcm9wcyA9IHtcbiAgYWxpZ246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIC8vIHJldHVybiBhbGlnbkNsYXNzXG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWxpZ24gPSBwcm9wcy5hbGlnbiA9PT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3N0cmV0Y2gnIDogJ2xlZnQnXG4gICAgICA6IHByb3BzLmFsaWduXG5cbiAgICByZXR1cm4gYCR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2l0ZW1zJyA6ICdqdXN0aWZ5JyB9LSR7IGFsaWduTWFwWyBhbGlnbiBdIH1gXG4gIH0pXG59XG4iLCJcbi8vIGNvcGllZCB0byBkb2NzIHRvb1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFByb3h5IChwcm94eSkge1xuICBpZiAoT2JqZWN0KHByb3h5LiRwYXJlbnQpID09PSBwcm94eS4kcGFyZW50KSB7XG4gICAgcmV0dXJuIHByb3h5LiRwYXJlbnRcbiAgfVxuXG4gIGxldCB7IHBhcmVudCB9ID0gcHJveHkuJFxuXG4gIHdoaWxlIChPYmplY3QocGFyZW50KSA9PT0gcGFyZW50KSB7XG4gICAgaWYgKE9iamVjdChwYXJlbnQucHJveHkpID09PSBwYXJlbnQucHJveHkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQucHJveHlcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbE5vcm1hbGl6ZWRWTm9kZXMgKGNoaWxkcmVuLCB2bm9kZSkge1xuICBpZiAodHlwZW9mIHZub2RlLnR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUuY2hpbGRyZW4pID09PSB0cnVlKSB7XG4gICAgICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZmlsbE5vcm1hbGl6ZWRWTm9kZXMoY2hpbGRyZW4sIGNoaWxkKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY2hpbGRyZW4uYWRkKHZub2RlKVxuICB9XG59XG5cbi8vIHZub2RlcyBmcm9tIHJlbmRlcmVkIGluIGFkdmFuY2VkIHNsb3RzXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFZOb2RlcyAodm5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gbmV3IFNldCgpXG5cbiAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4ge1xuICAgIGZpbGxOb3JtYWxpemVkVk5vZGVzKGNoaWxkcmVuLCB2bm9kZSlcbiAgfSlcblxuICByZXR1cm4gQXJyYXkuZnJvbShjaGlsZHJlbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZtSGFzUm91dGVyICh2bSkge1xuICByZXR1cm4gdm0uYXBwQ29udGV4dC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kcm91dGVyICE9PSB2b2lkIDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZtSXNEZXN0cm95ZWQgKHZtKSB7XG4gIHJldHVybiB2bS5pc1VubW91bnRlZCA9PT0gdHJ1ZSB8fCB2bS5pc0RlYWN0aXZhdGVkID09PSB0cnVlXG59XG4iLCIvKlxuICogSW5zcGlyZWQgYnkgUm91dGVyTGluayBmcm9tIFZ1ZSBSb3V0ZXJcbiAqICAtLT4gQVBJIHNob3VsZCBtYXRjaCFcbiAqL1xuXG5pbXBvcnQgeyBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbi8vIEdldCB0aGUgb3JpZ2luYWwgcGF0aCB2YWx1ZSBvZiBhIHJlY29yZCBieSBmb2xsb3dpbmcgaXRzIGFsaWFzT2ZcbmZ1bmN0aW9uIGdldE9yaWdpbmFsUGF0aCAocmVjb3JkKSB7XG4gIHJldHVybiByZWNvcmRcbiAgICA/IChcbiAgICAgICAgcmVjb3JkLmFsaWFzT2ZcbiAgICAgICAgICA/IHJlY29yZC5hbGlhc09mLnBhdGhcbiAgICAgICAgICA6IHJlY29yZC5wYXRoXG4gICAgICApIDogJydcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGVSZWNvcmQgKGEsIGIpIHtcbiAgLy8gc2luY2UgdGhlIG9yaWdpbmFsIHJlY29yZCBoYXMgYW4gdW5kZWZpbmVkIHZhbHVlIGZvciBhbGlhc09mXG4gIC8vIGJ1dCBhbGwgYWxpYXNlcyBwb2ludCB0byB0aGUgb3JpZ2luYWwgcmVjb3JkLCB0aGlzIHdpbGwgYWx3YXlzIGNvbXBhcmVcbiAgLy8gdGhlIG9yaWdpbmFsIHJlY29yZFxuICByZXR1cm4gKGEuYWxpYXNPZiB8fCBhKSA9PT0gKGIuYWxpYXNPZiB8fCBiKVxufVxuXG5mdW5jdGlvbiBpbmNsdWRlc1BhcmFtcyAob3V0ZXIsIGlubmVyKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgIGlubmVyVmFsdWUgPSBpbm5lclsga2V5IF0sXG4gICAgICBvdXRlclZhbHVlID0gb3V0ZXJbIGtleSBdXG5cbiAgICBpZiAodHlwZW9mIGlubmVyVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaW5uZXJWYWx1ZSAhPT0gb3V0ZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KG91dGVyVmFsdWUpID09PSBmYWxzZVxuICAgICAgfHwgb3V0ZXJWYWx1ZS5sZW5ndGggIT09IGlubmVyVmFsdWUubGVuZ3RoXG4gICAgICB8fCBpbm5lclZhbHVlLnNvbWUoKHZhbHVlLCBpKSA9PiB2YWx1ZSAhPT0gb3V0ZXJWYWx1ZVsgaSBdKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaXNFcXVpdmFsZW50QXJyYXkgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgPT09IHRydWVcbiAgICA/IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KCh2YWx1ZSwgaSkgPT4gdmFsdWUgPT09IGJbIGkgXSlcbiAgICA6IGEubGVuZ3RoID09PSAxICYmIGFbIDAgXSA9PT0gYlxufVxuXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zVmFsdWUgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPT09IHRydWVcbiAgICA/IGlzRXF1aXZhbGVudEFycmF5KGEsIGIpXG4gICAgOiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoYikgPT09IHRydWVcbiAgICAgICAgICA/IGlzRXF1aXZhbGVudEFycmF5KGIsIGEpXG4gICAgICAgICAgOiBhID09PSBiXG4gICAgICApXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXMgKGEsIGIpIHtcbiAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBhKSB7XG4gICAgaWYgKGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXNWYWx1ZShhWyBrZXkgXSwgYlsga2V5IF0pID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVJvdXRlckxpbmtQcm9wcyA9IHtcbiAgLy8gcm91dGVyLWxpbmtcbiAgdG86IFsgU3RyaW5nLCBPYmplY3QgXSxcbiAgcmVwbGFjZTogQm9vbGVhbixcbiAgZXhhY3Q6IEJvb2xlYW4sXG4gIGFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdxLXJvdXRlci1saW5rLS1hY3RpdmUnXG4gIH0sXG4gIGV4YWN0QWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ3Etcm91dGVyLWxpbmstLWV4YWN0LWFjdGl2ZSdcbiAgfSxcblxuICAvLyByZWd1bGFyIDxhPiBsaW5rXG4gIGhyZWY6IFN0cmluZyxcbiAgdGFyZ2V0OiBTdHJpbmcsXG5cbiAgLy8gc3RhdGVcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG4vLyBleHRlcm5hbCBwcm9wczogdHlwZSwgdGFnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IGZhbGxiYWNrVGFnLCB1c2VEaXNhYmxlRm9yUm91dGVyTGlua1Byb3BzID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBwcm94eSwgZW1pdCB9ID0gdm1cblxuICBjb25zdCBoYXNSb3V0ZXIgPSB2bUhhc1JvdXRlcih2bSlcbiAgY29uc3QgaGFzSHJlZkxpbmsgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLmhyZWYgIT09IHZvaWQgMClcblxuICAvLyBmb3IgcGVyZiByZWFzb25zLCB3ZSB1c2UgbWluaW11bSBhbW91bnQgb2YgcnVudGltZSB3b3JrXG4gIGNvbnN0IGhhc1JvdXRlckxpbmtQcm9wcyA9IHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHMgPT09IHRydWVcbiAgICA/IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNSb3V0ZXIgPT09IHRydWVcbiAgICAgICYmIHByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICAgICYmIGhhc0hyZWZMaW5rLnZhbHVlICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJ1xuICAgIClcbiAgICA6IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNSb3V0ZXIgPT09IHRydWVcbiAgICAgICYmIGhhc0hyZWZMaW5rLnZhbHVlICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJ1xuICAgIClcblxuICBjb25zdCByZXNvbHZlZExpbmsgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaGFzUm91dGVyTGlua1Byb3BzLnZhbHVlID09PSB0cnVlXG4gICAgICA/IGdldExpbmsocHJvcHMudG8pXG4gICAgICA6IG51bGxcbiAgKSlcblxuICBjb25zdCBoYXNSb3V0ZXJMaW5rID0gY29tcHV0ZWQoKCkgPT4gcmVzb2x2ZWRMaW5rLnZhbHVlICE9PSBudWxsKVxuICBjb25zdCBoYXNMaW5rID0gY29tcHV0ZWQoKCkgPT4gaGFzSHJlZkxpbmsudmFsdWUgPT09IHRydWUgfHwgaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSlcblxuICBjb25zdCBsaW5rVGFnID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnR5cGUgPT09ICdhJyB8fCBoYXNMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICA/ICdhJ1xuICAgICAgOiAocHJvcHMudGFnIHx8IGZhbGxiYWNrVGFnIHx8ICdkaXYnKVxuICApKVxuXG4gIGNvbnN0IGxpbmtBdHRycyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBoYXNIcmVmTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyB7XG4gICAgICAgICAgaHJlZjogcHJvcHMuaHJlZixcbiAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgICAgICB9XG4gICAgICA6IChcbiAgICAgICAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBocmVmOiByZXNvbHZlZExpbmsudmFsdWUuaHJlZixcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9XG4gICAgICAgIClcbiAgKSlcblxuICBjb25zdCBsaW5rQWN0aXZlSW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGhhc1JvdXRlckxpbmsudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBjb25zdFxuICAgICAgeyBtYXRjaGVkIH0gPSByZXNvbHZlZExpbmsudmFsdWUsXG4gICAgICB7IGxlbmd0aCB9ID0gbWF0Y2hlZCxcbiAgICAgIHJvdXRlTWF0Y2hlZCA9IG1hdGNoZWRbIGxlbmd0aCAtIDEgXVxuXG4gICAgaWYgKHJvdXRlTWF0Y2hlZCA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TWF0Y2hlZCA9IHByb3h5LiRyb3V0ZS5tYXRjaGVkXG5cbiAgICBpZiAoY3VycmVudE1hdGNoZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRNYXRjaGVkLmZpbmRJbmRleChcbiAgICAgIGlzU2FtZVJvdXRlUmVjb3JkLmJpbmQobnVsbCwgcm91dGVNYXRjaGVkKVxuICAgIClcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICAvLyBwb3NzaWJsZSBwYXJlbnQgcmVjb3JkXG4gICAgY29uc3QgcGFyZW50UmVjb3JkUGF0aCA9IGdldE9yaWdpbmFsUGF0aChtYXRjaGVkWyBsZW5ndGggLSAyIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gd2UgYXJlIGRlYWxpbmcgd2l0aCBuZXN0ZWQgcm91dGVzXG4gICAgICBsZW5ndGggPiAxXG4gICAgICAvLyBpZiB0aGUgcGFyZW50IGFuZCBtYXRjaGVkIHJvdXRlIGhhdmUgdGhlIHNhbWUgcGF0aCwgdGhpcyBsaW5rIGlzXG4gICAgICAvLyByZWZlcnJpbmcgdG8gdGhlIGVtcHR5IGNoaWxkLiBPciB3ZSBjdXJyZW50bHkgYXJlIG9uIGEgZGlmZmVyZW50XG4gICAgICAvLyBjaGlsZCBvZiB0aGUgc2FtZSBwYXJlbnRcbiAgICAgICYmIGdldE9yaWdpbmFsUGF0aChyb3V0ZU1hdGNoZWQpID09PSBwYXJlbnRSZWNvcmRQYXRoXG4gICAgICAvLyBhdm9pZCBjb21wYXJpbmcgdGhlIGNoaWxkIHdpdGggaXRzIHBhcmVudFxuICAgICAgJiYgY3VycmVudE1hdGNoZWRbIGN1cnJlbnRNYXRjaGVkLmxlbmd0aCAtIDEgXS5wYXRoICE9PSBwYXJlbnRSZWNvcmRQYXRoXG4gICAgICAgID8gY3VycmVudE1hdGNoZWQuZmluZEluZGV4KFxuICAgICAgICAgIGlzU2FtZVJvdXRlUmVjb3JkLmJpbmQobnVsbCwgbWF0Y2hlZFsgbGVuZ3RoIC0gMiBdKVxuICAgICAgICApXG4gICAgICAgIDogaW5kZXhcbiAgICApXG4gIH0pXG5cbiAgY29uc3QgbGlua0lzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT5cbiAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgJiYgbGlua0FjdGl2ZUluZGV4LnZhbHVlICE9PSAtMVxuICAgICYmIGluY2x1ZGVzUGFyYW1zKHByb3h5LiRyb3V0ZS5wYXJhbXMsIHJlc29sdmVkTGluay52YWx1ZS5wYXJhbXMpXG4gIClcblxuICBjb25zdCBsaW5rSXNFeGFjdEFjdGl2ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgbGlua0lzQWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBsaW5rQWN0aXZlSW5kZXgudmFsdWUgPT09IHByb3h5LiRyb3V0ZS5tYXRjaGVkLmxlbmd0aCAtIDFcbiAgICAgICYmIGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXMocHJveHkuJHJvdXRlLnBhcmFtcywgcmVzb2x2ZWRMaW5rLnZhbHVlLnBhcmFtcylcbiAgKVxuXG4gIGNvbnN0IGxpbmtDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChcbiAgICAgICAgICBsaW5rSXNFeGFjdEFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBgICR7IHByb3BzLmV4YWN0QWN0aXZlQ2xhc3MgfSAkeyBwcm9wcy5hY3RpdmVDbGFzcyB9YFxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgcHJvcHMuZXhhY3QgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgIDogKGxpbmtJc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGAgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWAgOiAnJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICA6ICcnXG4gICkpXG5cbiAgZnVuY3Rpb24gZ2V0TGluayAodG8pIHtcbiAgICB0cnkgeyByZXR1cm4gcHJveHkuJHJvdXRlci5yZXNvbHZlKHRvKSB9XG4gICAgY2F0Y2ggKF8pIHt9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFByb21pc2U8Um91dGVyRXJyb3IgfCBmYWxzZSB8IHVuZGVmaW5lZD5cbiAgICovXG4gIGZ1bmN0aW9uIG5hdmlnYXRlVG9Sb3V0ZXJMaW5rIChcbiAgICBlLFxuICAgIHsgcmV0dXJuUm91dGVyRXJyb3IsIHRvID0gcHJvcHMudG8sIHJlcGxhY2UgPSBwcm9wcy5yZXBsYWNlIH0gPSB7fVxuICApIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gZW5zdXJlIG5hdGl2ZSBuYXZpZ2F0aW9uIGlzIHByZXZlbnRlZCBpbiBhbGwgY2FzZXMsXG4gICAgICAvLyBsaWtlIHdoZW4gdXNlRGlzYWJsZUZvclJvdXRlckxpbmtQcm9wcyA9PT0gZmFsc2UgKFFSb3V0ZVRhYilcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5cztcbiAgICAgIC8vIHNob3VsZCBtYXRjaCBSb3V0ZXJMaW5rIGZyb20gVnVlIFJvdXRlclxuICAgICAgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5XG5cbiAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICB8fCAoZS5idXR0b24gIT09IHZvaWQgMCAmJiBlLmJ1dHRvbiAhPT0gMClcblxuICAgICAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgaXQgc2hvdWxkIG9wZW4gaW4gYSBuZXcgd2luZG93XG4gICAgICB8fCBwcm9wcy50YXJnZXQgPT09ICdfYmxhbmsnXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICAgIH1cblxuICAgIC8vIGhpbmRlciB0aGUgbmF0aXZlIG5hdmlnYXRpb25cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIHRoZW4oKSBjYW4gYWxzbyByZXR1cm4gYSBcInNvZnRcIiByb3V0ZXIgZXJyb3IgKFZ1ZSBSb3V0ZXIgYmVoYXZpb3IpXG4gICAgY29uc3QgcHJvbWlzZSA9IHByb3h5LiRyb3V0ZXJbIHJlcGxhY2UgPT09IHRydWUgPyAncmVwbGFjZScgOiAncHVzaCcgXSh0bylcblxuICAgIHJldHVybiByZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZVxuICAgICAgPyBwcm9taXNlXG4gICAgICAvLyBlbHNlIGNhdGNoaW5nIGhhcmQgZXJyb3JzIGFuZCBhbHNvIFwic29mdFwiIG9uZXMgLSB0aGVuKGVyciA9PiAuLi4pXG4gICAgICA6IHByb21pc2UudGhlbigoKSA9PiB7fSkuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICAvLyB3YXJuaW5nISBlbnN1cmUgdGhhdCB0aGUgY29tcG9uZW50IHVzaW5nIGl0IGhhcyAnY2xpY2snIGluY2x1ZGVkIGluIGl0cyAnZW1pdHMnIGRlZmluaXRpb24gcHJvcFxuICBmdW5jdGlvbiBuYXZpZ2F0ZU9uQ2xpY2sgKGUpIHtcbiAgICBpZiAoaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ28gPSBvcHRzID0+IG5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUsIG9wdHMpXG5cbiAgICAgIGVtaXQoJ2NsaWNrJywgZSwgZ28pXG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUgJiYgZ28oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc1JvdXRlckxpbmssXG4gICAgaGFzSHJlZkxpbmssXG4gICAgaGFzTGluayxcblxuICAgIGxpbmtUYWcsXG4gICAgcmVzb2x2ZWRMaW5rLFxuICAgIGxpbmtJc0FjdGl2ZSxcbiAgICBsaW5rSXNFeGFjdEFjdGl2ZSxcbiAgICBsaW5rQ2xhc3MsXG4gICAgbGlua0F0dHJzLFxuXG4gICAgZ2V0TGluayxcbiAgICBuYXZpZ2F0ZVRvUm91dGVyTGluayxcbiAgICBuYXZpZ2F0ZU9uQ2xpY2tcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VBbGlnbiwgeyB1c2VBbGlnblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYWxpZ24uanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuaW1wb3J0IHVzZVJvdXRlckxpbmssIHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMnXG5cbmV4cG9ydCBjb25zdCBidG5QYWRkaW5nID0ge1xuICBub25lOiAwLFxuICB4czogNCxcbiAgc206IDgsXG4gIG1kOiAxNixcbiAgbGc6IDI0LFxuICB4bDogMzJcbn1cblxuY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogOCxcbiAgc206IDEwLFxuICBtZDogMTQsXG4gIGxnOiAyMCxcbiAgeGw6IDI0XG59XG5cbmNvbnN0IGZvcm1UeXBlcyA9IFsgJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnIF1cbmNvbnN0IG1lZGlhVHlwZVJFID0gL1teXFxzXVxcL1teXFxzXS9cblxuZXhwb3J0IGNvbnN0IGJ0bkRlc2lnbk9wdGlvbnMgPSBbICdmbGF0JywgJ291dGxpbmUnLCAncHVzaCcsICd1bmVsZXZhdGVkJyBdXG5leHBvcnQgY29uc3QgZ2V0QnRuRGVzaWduID0gKHByb3BzLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgaWYgKHByb3BzLmZsYXQgPT09IHRydWUpIHJldHVybiAnZmxhdCdcbiAgaWYgKHByb3BzLm91dGxpbmUgPT09IHRydWUpIHJldHVybiAnb3V0bGluZSdcbiAgaWYgKHByb3BzLnB1c2ggPT09IHRydWUpIHJldHVybiAncHVzaCdcbiAgaWYgKHByb3BzLnVuZWxldmF0ZWQgPT09IHRydWUpIHJldHVybiAndW5lbGV2YXRlZCdcbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufVxuZXhwb3J0IGNvbnN0IGdldEJ0bkRlc2lnbkF0dHIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGRlc2lnbiA9IGdldEJ0bkRlc2lnbihwcm9wcylcbiAgcmV0dXJuIGRlc2lnbiAhPT0gdm9pZCAwXG4gICAgPyB7IFsgZGVzaWduIF06IHRydWUgfVxuICAgIDoge31cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUJ0blByb3BzID0ge1xuICAuLi51c2VTaXplUHJvcHMsXG4gIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcblxuICB0eXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdidXR0b24nXG4gIH0sXG5cbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgaWNvbjogU3RyaW5nLFxuICBpY29uUmlnaHQ6IFN0cmluZyxcblxuICAuLi5idG5EZXNpZ25PcHRpb25zLnJlZHVjZShcbiAgICAoYWNjLCB2YWwpID0+IChhY2NbIHZhbCBdID0gQm9vbGVhbikgJiYgYWNjLFxuICAgIHt9XG4gICksXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICByb3VuZDogQm9vbGVhbixcbiAgcm91bmRlZDogQm9vbGVhbixcbiAgZ2xvc3N5OiBCb29sZWFuLFxuXG4gIHNpemU6IFN0cmluZyxcbiAgZmFiOiBCb29sZWFuLFxuICBmYWJNaW5pOiBCb29sZWFuLFxuICBwYWRkaW5nOiBTdHJpbmcsXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgdGV4dENvbG9yOiBTdHJpbmcsXG4gIG5vQ2FwczogQm9vbGVhbixcbiAgbm9XcmFwOiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gIHJpcHBsZToge1xuICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuXG4gIGFsaWduOiB7XG4gICAgLi4udXNlQWxpZ25Qcm9wcy5hbGlnbixcbiAgICBkZWZhdWx0OiAnY2VudGVyJ1xuICB9LFxuICBzdGFjazogQm9vbGVhbixcbiAgc3RyZXRjaDogQm9vbGVhbixcbiAgbG9hZGluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuICBkaXNhYmxlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG4gIGNvbnN0IGFsaWduQ2xhc3MgPSB1c2VBbGlnbihwcm9wcylcbiAgY29uc3QgeyBoYXNSb3V0ZXJMaW5rLCBoYXNMaW5rLCBsaW5rVGFnLCBsaW5rQXR0cnMsIG5hdmlnYXRlT25DbGljayB9ID0gdXNlUm91dGVyTGluayh7XG4gICAgZmFsbGJhY2tUYWc6ICdidXR0b24nXG4gIH0pXG5cbiAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgb2JqID0gcHJvcHMuZmFiID09PSBmYWxzZSAmJiBwcm9wcy5mYWJNaW5pID09PSBmYWxzZVxuICAgICAgPyBzaXplU3R5bGUudmFsdWVcbiAgICAgIDoge31cblxuICAgIHJldHVybiBwcm9wcy5wYWRkaW5nICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb2JqLCB7XG4gICAgICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmdcbiAgICAgICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgICAgIC5tYXAodiA9PiAodiBpbiBidG5QYWRkaW5nID8gYnRuUGFkZGluZ1sgdiBdICsgJ3B4JyA6IHYpKVxuICAgICAgICAgIC5qb2luKCcgJyksXG4gICAgICAgIG1pbldpZHRoOiAnMCcsXG4gICAgICAgIG1pbkhlaWdodDogJzAnXG4gICAgICB9KVxuICAgICAgOiBvYmpcbiAgfSlcblxuICBjb25zdCBpc1JvdW5kZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnJvdW5kZWQgPT09IHRydWUgfHwgcHJvcHMuZmFiID09PSB0cnVlIHx8IHByb3BzLmZhYk1pbmkgPT09IHRydWVcbiAgKVxuXG4gIGNvbnN0IGlzQWN0aW9uYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5sb2FkaW5nICE9PSB0cnVlXG4gIClcblxuICBjb25zdCB0YWJJbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTFcbiAgKSlcblxuICBjb25zdCBkZXNpZ24gPSBjb21wdXRlZCgoKSA9PiBnZXRCdG5EZXNpZ24ocHJvcHMsICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUgfVxuXG4gICAgaWYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCBsaW5rQXR0cnMudmFsdWUpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1UeXBlcy5pbmNsdWRlcyhwcm9wcy50eXBlKSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgfVxuXG4gICAgaWYgKGxpbmtUYWcudmFsdWUgPT09ICdhJykge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYWNjLmhyZWYgPT09IHZvaWQgMCkge1xuICAgICAgICBhY2Mucm9sZSA9ICdidXR0b24nXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNSb3V0ZXJMaW5rLnZhbHVlICE9PSB0cnVlICYmIG1lZGlhVHlwZVJFLnRlc3QocHJvcHMudHlwZSkgPT09IHRydWUpIHtcbiAgICAgICAgYWNjLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjYy5kaXNhYmxlZCA9ICcnXG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgcHJvcHMucGVyY2VudGFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMTAwLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLnBlcmNlbnRhZ2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgbGV0IGNvbG9yc1xuXG4gICAgaWYgKHByb3BzLmNvbG9yICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChwcm9wcy5mbGF0ID09PSB0cnVlIHx8IHByb3BzLm91dGxpbmUgPT09IHRydWUpIHtcbiAgICAgICAgY29sb3JzID0gYHRleHQtJHsgcHJvcHMudGV4dENvbG9yIHx8IHByb3BzLmNvbG9yIH1gXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sb3JzID0gYGJnLSR7IHByb3BzLmNvbG9yIH0gdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfHwgJ3doaXRlJyB9YFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50ZXh0Q29sb3IpIHtcbiAgICAgIGNvbG9ycyA9IGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YFxuICAgIH1cblxuICAgIGNvbnN0IHNoYXBlID0gcHJvcHMucm91bmQgPT09IHRydWVcbiAgICAgID8gJ3JvdW5kJ1xuICAgICAgOiBgcmVjdGFuZ2xlJHsgaXNSb3VuZGVkLnZhbHVlID09PSB0cnVlID8gJyBxLWJ0bi0tcm91bmRlZCcgOiAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWJ0bi0tc3F1YXJlJyA6ICcnKSB9YFxuXG4gICAgcmV0dXJuIGBxLWJ0bi0tJHsgZGVzaWduLnZhbHVlIH0gcS1idG4tLSR7IHNoYXBlIH1gXG4gICAgICArIChjb2xvcnMgIT09IHZvaWQgMCA/ICcgJyArIGNvbG9ycyA6ICcnKVxuICAgICAgKyAoaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLWJ0bi0tYWN0aW9uYWJsZSBxLWZvY3VzYWJsZSBxLWhvdmVyYWJsZScgOiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpKVxuICAgICAgKyAocHJvcHMuZmFiID09PSB0cnVlID8gJyBxLWJ0bi0tZmFiJyA6IChwcm9wcy5mYWJNaW5pID09PSB0cnVlID8gJyBxLWJ0bi0tZmFiLW1pbmknIDogJycpKVxuICAgICAgKyAocHJvcHMubm9DYXBzID09PSB0cnVlID8gJyBxLWJ0bi0tbm8tdXBwZXJjYXNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtYnRuLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLnN0cmV0Y2ggPT09IHRydWUgPyAnIG5vLWJvcmRlci1yYWRpdXMgc2VsZi1zdHJldGNoJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZ2xvc3N5ID09PSB0cnVlID8gJyBnbG9zc3knIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPyAnIHEtYnRuLS1zcXVhcmUnIDogJycpXG4gIH0pXG5cbiAgY29uc3QgaW5uZXJDbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGlnbkNsYXNzLnZhbHVlICsgKHByb3BzLnN0YWNrID09PSB0cnVlID8gJyBjb2x1bW4nIDogJyByb3cnKVxuICAgICsgKHByb3BzLm5vV3JhcCA9PT0gdHJ1ZSA/ICcgbm8td3JhcCB0ZXh0LW5vLXdyYXAnIDogJycpXG4gICAgKyAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/ICcgcS1idG5fX2NvbnRlbnQtLWhpZGRlbicgOiAnJylcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NlcyxcbiAgICBzdHlsZSxcbiAgICBpbm5lckNsYXNzZXMsXG4gICAgYXR0cmlidXRlcyxcbiAgICBoYXNMaW5rLFxuICAgIGxpbmtUYWcsXG4gICAgbmF2aWdhdGVPbkNsaWNrLFxuICAgIGlzQWN0aW9uYWJsZVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBUcmFuc2l0aW9uLCBvbkJlZm9yZVVubW91bnQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9SaXBwbGUuanMnXG5cbmltcG9ydCB1c2VCdG4sIHsgdXNlQnRuUHJvcHMgfSBmcm9tICcuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgc3RvcCwgcHJldmVudCwgc3RvcEFuZFByZXZlbnQsIGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5jb25zdCB7IHBhc3NpdmVDYXB0dXJlIH0gPSBsaXN0ZW5PcHRzXG5cbmxldFxuICB0b3VjaFRhcmdldCA9IG51bGwsXG4gIGtleWJvYXJkVGFyZ2V0ID0gbnVsbCxcbiAgbW91c2VUYXJnZXQgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUJ0blByb3BzLFxuXG4gICAgcGVyY2VudGFnZTogTnVtYmVyLFxuICAgIGRhcmtQZXJjZW50YWdlOiBCb29sZWFuLFxuXG4gICAgb25Ub3VjaHN0YXJ0OiBbIEZ1bmN0aW9uLCBBcnJheSBdXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJywgJ2tleWRvd24nLCAnbW91c2Vkb3duJywgJ2tleXVwJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsIHN0eWxlLCBpbm5lckNsYXNzZXMsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgaGFzTGluaywgbGlua1RhZywgbmF2aWdhdGVPbkNsaWNrLFxuICAgICAgaXNBY3Rpb25hYmxlXG4gICAgfSA9IHVzZUJ0bihwcm9wcylcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgbG9jYWxUb3VjaFRhcmdldEVsID0gbnVsbCwgYXZvaWRNb3VzZVJpcHBsZSwgbW91c2VUaW1lclxuXG4gICAgY29uc3QgaGFzTGFiZWwgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubGFiZWwgIT09IHZvaWQgMCAmJiBwcm9wcy5sYWJlbCAhPT0gbnVsbCAmJiBwcm9wcy5sYWJlbCAhPT0gJydcbiAgICApXG5cbiAgICBjb25zdCByaXBwbGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLnJpcHBsZSA9PT0gZmFsc2VcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGtleUNvZGVzOiBoYXNMaW5rLnZhbHVlID09PSB0cnVlID8gWyAxMywgMzIgXSA6IFsgMTMgXSxcbiAgICAgICAgICAgIC4uLihwcm9wcy5yaXBwbGUgPT09IHRydWUgPyB7fSA6IHByb3BzLnJpcHBsZSlcbiAgICAgICAgICB9XG4gICAgKSlcblxuICAgIGNvbnN0IHJpcHBsZVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHsgY2VudGVyOiBwcm9wcy5yb3VuZCB9KSlcblxuICAgIGNvbnN0IHBlcmNlbnRhZ2VTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgcHJvcHMucGVyY2VudGFnZSkpXG4gICAgICByZXR1cm4gdmFsID4gMFxuICAgICAgICA/IHsgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjZzJywgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyB2YWwgLSAxMDAgfSUpYCB9XG4gICAgICAgIDoge31cbiAgICB9KVxuXG4gICAgY29uc3Qgb25FdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9uTW91c2Vkb3duOiBvbkxvYWRpbmdFdnQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0OiBvbkxvYWRpbmdFdnQsXG4gICAgICAgICAgb25DbGljazogb25Mb2FkaW5nRXZ0LFxuICAgICAgICAgIG9uS2V5ZG93bjogb25Mb2FkaW5nRXZ0LFxuICAgICAgICAgIG9uS2V5dXA6IG9uTG9hZGluZ0V2dFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICAgIG9uQ2xpY2ssXG4gICAgICAgICAgb25LZXlkb3duLFxuICAgICAgICAgIG9uTW91c2Vkb3duXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJveHkuJHEucGxhdGZvcm0uaGFzLnRvdWNoID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3Qgc3VmZml4ID0gcHJvcHMub25Ub3VjaHN0YXJ0ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgIDogJ1Bhc3NpdmUnXG5cbiAgICAgICAgICBhY2NbIGBvblRvdWNoc3RhcnQkeyBzdWZmaXggfWAgXSA9IG9uVG91Y2hzdGFydFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBuZWVkZWQ7IGVzcGVjaWFsbHkgZm9yIGRpc2FibGVkIDxhPiB0YWdzXG4gICAgICAgIG9uQ2xpY2s6IHN0b3BBbmRQcmV2ZW50XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG5vZGVQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBjbGFzczogJ3EtYnRuIHEtYnRuLWl0ZW0gbm9uLXNlbGVjdGFibGUgbm8tb3V0bGluZSAnICsgY2xhc3Nlcy52YWx1ZSxcbiAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAuLi5vbkV2ZW50cy52YWx1ZVxuICAgIH0pKVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBpZiAoZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgICAvLyBmb2N1cyBidXR0b24gaWYgaXQgY2FtZSBmcm9tIEVOVEVSIG9uIGZvcm1cbiAgICAgICAgLy8gcHJldmVudCB0aGUgbmV3IHN1Ym1pdCAoYWxyZWFkeSBkb25lKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHMudHlwZSA9PT0gJ3N1Ym1pdCdcbiAgICAgICAgICAmJiBlbCAhPT0gZG9jdW1lbnQuYm9keVxuICAgICAgICAgICYmIHJvb3RSZWYudmFsdWUuY29udGFpbnMoZWwpID09PSBmYWxzZVxuICAgICAgICAgIC8vIHJlcXVpcmVkIGZvciBpT1MgYW5kIGRlc2t0b3AgU2FmYXJpXG4gICAgICAgICAgJiYgZWwuY29udGFpbnMocm9vdFJlZi52YWx1ZSkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgICAgY29uc3Qgb25DbGlja0NsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcEFuZFByZXZlbnQsIHRydWUpXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgICAgIHJvb3RSZWYudmFsdWUgIT09IG51bGwgJiYgcm9vdFJlZi52YWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgb25DbGlja0NsZWFudXAsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdG9wQW5kUHJldmVudCwgdHJ1ZSlcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgICByb290UmVmLnZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmF2aWdhdGVPbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuXG4gICAgICBpZiAoaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pID09PSB0cnVlICYmIGtleWJvYXJkVGFyZ2V0ICE9PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIGtleWJvYXJkVGFyZ2V0ICE9PSBudWxsICYmIGNsZWFudXAoKVxuXG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAvLyBmb2N1cyBleHRlcm5hbCBidXR0b24gaWYgdGhlIGZvY3VzIGhlbHBlciB3YXMgZm9jdXNlZCBiZWZvcmVcbiAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcblxuICAgICAgICAgIGtleWJvYXJkVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuY2xhc3NMaXN0LmFkZCgncS1idG4tLWFjdGl2ZScpXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvblByZXNzRW5kLCB0cnVlKVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRvdWNoc3RhcnQgKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgZW1pdCgndG91Y2hzdGFydCcsIGUpXG5cbiAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgICAgaWYgKHRvdWNoVGFyZ2V0ICE9PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIHRvdWNoVGFyZ2V0ICE9PSBudWxsICYmIGNsZWFudXAoKVxuICAgICAgICB0b3VjaFRhcmdldCA9IHJvb3RSZWYudmFsdWVcblxuICAgICAgICBsb2NhbFRvdWNoVGFyZ2V0RWwgPSBlLnRhcmdldFxuICAgICAgICBsb2NhbFRvdWNoVGFyZ2V0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIGR1cGxpY2F0ZWQgbW91c2Vkb3duIGV2ZW50XG4gICAgICAvLyB0cmlnZ2VyaW5nIGFub3RoZXIgZWFybHkgcmlwcGxlXG4gICAgICBhdm9pZE1vdXNlUmlwcGxlID0gdHJ1ZVxuICAgICAgY2xlYXJUaW1lb3V0KG1vdXNlVGltZXIpXG4gICAgICBtb3VzZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF2b2lkTW91c2VSaXBwbGUgPSBmYWxzZVxuICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2Vkb3duIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGUucVNraXBSaXBwbGUgPSBhdm9pZE1vdXNlUmlwcGxlID09PSB0cnVlXG4gICAgICBlbWl0KCdtb3VzZWRvd24nLCBlKVxuXG4gICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlICYmIG1vdXNlVGFyZ2V0ICE9PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIG1vdXNlVGFyZ2V0ICE9PSBudWxsICYmIGNsZWFudXAoKVxuICAgICAgICBtb3VzZVRhcmdldCA9IHJvb3RSZWYudmFsdWVcbiAgICAgICAgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QuYWRkKCdxLWJ0bi0tYWN0aXZlJylcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJlc3NFbmQgKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgLy8gbmVlZGVkIGZvciBJRSAoYmVjYXVzZSBpdCBlbWl0cyBibHVyIHdoZW4gZm9jdXNpbmcgYnV0dG9uIGZyb20gZm9jdXMgaGVscGVyKVxuICAgICAgaWYgKGUgIT09IHZvaWQgMCAmJiBlLnR5cGUgPT09ICdibHVyJyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZSAhPT0gdm9pZCAwICYmIGUudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBpZiAoa2V5Ym9hcmRUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUgJiYgaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgICBjb25zdCBldnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCBlKVxuICAgICAgICAgIGV2dC5xS2V5RXZlbnQgPSB0cnVlXG4gICAgICAgICAgZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlICYmIHByZXZlbnQoZXZ0KVxuICAgICAgICAgIGUuY2FuY2VsQnViYmxlID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZGlzcGF0Y2hFdmVudChldnQpXG5cbiAgICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgICAgLy8gZm9yIHJpcHBsZVxuICAgICAgICAgIGUucUtleUV2ZW50ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwIChkZXN0cm95aW5nKSB7XG4gICAgICBjb25zdCBibHVyVGFyZ2V0ID0gYmx1clRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIGRlc3Ryb3lpbmcgIT09IHRydWVcbiAgICAgICAgJiYgKHRvdWNoVGFyZ2V0ID09PSByb290UmVmLnZhbHVlIHx8IG1vdXNlVGFyZ2V0ID09PSByb290UmVmLnZhbHVlKVxuICAgICAgICAmJiBibHVyVGFyZ2V0ICE9PSBudWxsXG4gICAgICAgICYmIGJsdXJUYXJnZXQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICkge1xuICAgICAgICBibHVyVGFyZ2V0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSlcbiAgICAgICAgYmx1clRhcmdldC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICh0b3VjaFRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBpZiAobG9jYWxUb3VjaFRhcmdldEVsICE9PSBudWxsKSB7XG4gICAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hUYXJnZXQgPSBsb2NhbFRvdWNoVGFyZ2V0RWwgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChtb3VzZVRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIG1vdXNlVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5Ym9hcmRUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvblByZXNzRW5kLCB0cnVlKVxuICAgICAgICByb290UmVmLnZhbHVlICE9PSBudWxsICYmIHJvb3RSZWYudmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICBrZXlib2FyZFRhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbCAmJiByb290UmVmLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ3EtYnRuLS1hY3RpdmUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9hZGluZ0V2dCAoZXZ0KSB7XG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICBldnQucVNraXBSaXBwbGUgPSB0cnVlXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGNsZWFudXAodHJ1ZSlcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBjbGljazogb25DbGljayB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpbm5lciA9IFtdXG5cbiAgICAgIHByb3BzLmljb24gIT09IHZvaWQgMCAmJiBpbm5lci5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgbmFtZTogcHJvcHMuaWNvbixcbiAgICAgICAgICBsZWZ0OiBwcm9wcy5zdGFjayA9PT0gZmFsc2UgJiYgaGFzTGFiZWwudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgcm9sZTogJ2ltZycsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlICYmIGlubmVyLnB1c2goXG4gICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAnYmxvY2snIH0sIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgIClcblxuICAgICAgaW5uZXIgPSBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGlubmVyKVxuXG4gICAgICBpZiAocHJvcHMuaWNvblJpZ2h0ICE9PSB2b2lkIDAgJiYgcHJvcHMucm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlubmVyLnB1c2goXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMuaWNvblJpZ2h0LFxuICAgICAgICAgICAgcmlnaHQ6IHByb3BzLnN0YWNrID09PSBmYWxzZSAmJiBoYXNMYWJlbC52YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIHJvbGU6ICdpbWcnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZm9jdXMtaGVscGVyJyxcbiAgICAgICAgICByZWY6IGJsdXJUYXJnZXRSZWZcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgcHJvcHMucGVyY2VudGFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1idG5fX3Byb2dyZXNzIGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJyArIChwcm9wcy5kYXJrUGVyY2VudGFnZSA9PT0gdHJ1ZSA/ICcgcS1idG5fX3Byb2dyZXNzLS1kYXJrJyA6ICcnKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1idG5fX3Byb2dyZXNzLWluZGljYXRvciBmaXQgYmxvY2snLFxuICAgICAgICAgICAgICBzdHlsZTogcGVyY2VudGFnZVN0eWxlLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuX19jb250ZW50IHRleHQtY2VudGVyIGNvbCBpdGVtcy1jZW50ZXIgcS1hbmNob3ItLXNraXAgJyArIGlubmVyQ2xhc3Nlcy52YWx1ZVxuICAgICAgICB9LCBpbm5lcilcbiAgICAgIClcblxuICAgICAgcHJvcHMubG9hZGluZyAhPT0gbnVsbCAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICB9LCAoKSA9PiAoXG4gICAgICAgICAgcHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSwgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwID8gc2xvdHMubG9hZGluZygpIDogWyBoKFFTcGlubmVyKSBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgKSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKFxuICAgICAgICAgIGxpbmtUYWcudmFsdWUsXG4gICAgICAgICAgbm9kZVByb3BzLnZhbHVlLFxuICAgICAgICAgIGNoaWxkXG4gICAgICAgICksXG4gICAgICAgIFsgW1xuICAgICAgICAgIFJpcHBsZSxcbiAgICAgICAgICByaXBwbGUudmFsdWUsXG4gICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgIHJpcHBsZVByb3BzLnZhbHVlXG4gICAgICAgIF0gXVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTSxXQUFXO0FBQUEsRUFDdEIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUNYO0FBRU8sTUFBTSxjQUFjLE9BQU8sS0FBSyxRQUFRO0FBRW5DLE1BQUMsZ0JBQWdCO0FBQUEsRUFDM0IsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sV0FBVyxPQUFLLFlBQVksU0FBUyxDQUFDO0FBQUEsRUFDdkM7QUFDSDtBQUVlLFNBQVEsU0FBRSxPQUFPO0FBRTlC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
