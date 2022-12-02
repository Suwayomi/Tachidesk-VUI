import { r as ref, c as computed, w as watch, o as onBeforeUnmount, V as cleanEvt, U as addEvt, h, T as Transition, g as getCurrentInstance, L as stopAndPrevent } from "./index.5cc93081.js";
import { u as useAnchorProps, v as validatePosition, a as validateOffset, b as useScrollTarget, c as useAnchor, r as removeClickOutside, s as setPosition, p as parsePosition, d as addClickOutside } from "./position-engine.4089f253.js";
import { u as useModelToggleProps, a as useModelToggleEmits, b as useTimeout, c as useModelToggle } from "./use-timeout.fccbe84a.js";
import { u as useTick, a as usePortal } from "./QDialog.e6d65e20.js";
import { u as useTransitionProps, a as useTransition } from "./use-transition.651acf9e.js";
import { c as createComponent, h as hSlot } from "./QSpinner.7d14a7f2.js";
import { c as getScrollTarget } from "./scroll.b1151d01.js";
import { c as clearSelection } from "./selection.4336ddbe.js";
var QTooltip = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      default: "jump-down"
    },
    transitionHide: {
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    }
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transition, transitionStyle } = useTransition(props, showing);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent);
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e) {
          hide(e);
          if (e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => props.modelValue === null && props.persistent !== true && showing.value === true
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      const el = innerRef.value;
      if (anchorEl.value === null || !el) {
        return;
      }
      setPosition({
        el,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === null) {
        return;
      }
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, {
        name: transition.value,
        appear: true
      }, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm.proxy, { updatePosition });
    return renderPortal;
  }
});
export { QTooltip as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRvb2x0aXAuNmJkNTdlYjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbHRpcC9RVG9vbHRpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBUcmFuc2l0aW9uLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VBbmNob3IsIHsgdXNlQW5jaG9yUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1hbmNob3IuanMnXG5pbXBvcnQgdXNlU2Nyb2xsVGFyZ2V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNjcm9sbC10YXJnZXQuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQb3J0YWwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcG9ydGFsLmpzJ1xuaW1wb3J0IHVzZVRyYW5zaXRpb24sIHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcydcbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpY2suanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aW1lb3V0LmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50LCBhZGRFdnQsIGNsZWFuRXZ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGFkZENsaWNrT3V0c2lkZSwgcmVtb3ZlQ2xpY2tPdXRzaWRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jbGljay1vdXRzaWRlLmpzJ1xuaW1wb3J0IHtcbiAgdmFsaWRhdGVQb3NpdGlvbiwgdmFsaWRhdGVPZmZzZXQsIHNldFBvc2l0aW9uLCBwYXJzZVBvc2l0aW9uXG59IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9zaXRpb24tZW5naW5lLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2x0aXAnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbmNob3JQcm9wcyxcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZVRyYW5zaXRpb25Qcm9wcyxcblxuICAgIG1heEhlaWdodDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgbWF4V2lkdGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgdHJhbnNpdGlvblNob3c6IHtcbiAgICAgIGRlZmF1bHQ6ICdqdW1wLWRvd24nXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uSGlkZToge1xuICAgICAgZGVmYXVsdDogJ2p1bXAtdXAnXG4gICAgfSxcblxuICAgIGFuY2hvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbSBtaWRkbGUnLFxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0ZVBvc2l0aW9uXG4gICAgfSxcbiAgICBzZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG9wIG1pZGRsZScsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUG9zaXRpb25cbiAgICB9LFxuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbIDE0LCAxNCBdLFxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0ZU9mZnNldFxuICAgIH0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH0sXG5cbiAgICBkZWxheToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG5cbiAgICBoaWRlRGVsYXk6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgbGV0IHVud2F0Y2hQb3NpdGlvbiwgb2JzZXJ2ZXJcblxuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpbm5lclJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBhbmNob3JPcmlnaW4gPSBjb21wdXRlZCgoKSA9PiBwYXJzZVBvc2l0aW9uKHByb3BzLmFuY2hvciwgJHEubGFuZy5ydGwpKVxuICAgIGNvbnN0IHNlbGZPcmlnaW4gPSBjb21wdXRlZCgoKSA9PiBwYXJzZVBvc2l0aW9uKHByb3BzLnNlbGYsICRxLmxhbmcucnRsKSlcbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWUpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljaywgcmVtb3ZlVGljayB9ID0gdXNlVGljaygpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgdHJhbnNpdGlvbiwgdHJhbnNpdGlvblN0eWxlIH0gPSB1c2VUcmFuc2l0aW9uKHByb3BzLCBzaG93aW5nKVxuICAgIGNvbnN0IHsgbG9jYWxTY3JvbGxUYXJnZXQsIGNoYW5nZVNjcm9sbEV2ZW50LCB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCB9ID0gdXNlU2Nyb2xsVGFyZ2V0KHByb3BzLCBjb25maWd1cmVTY3JvbGxUYXJnZXQpXG5cbiAgICBjb25zdCB7IGFuY2hvckVsLCBjYW5TaG93LCBhbmNob3JFdmVudHMgfSA9IHVzZUFuY2hvcih7IHNob3dpbmcsIGNvbmZpZ3VyZUFuY2hvckVsIH0pXG5cbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsIGNhblNob3csIGhhbmRsZVNob3csIGhhbmRsZUhpZGUsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIHByb2Nlc3NPbk1vdW50OiB0cnVlXG4gICAgfSlcblxuICAgIE9iamVjdC5hc3NpZ24oYW5jaG9yRXZlbnRzLCB7IGRlbGF5U2hvdywgZGVsYXlIaWRlIH0pXG5cbiAgICBjb25zdCB7IHNob3dQb3J0YWwsIGhpZGVQb3J0YWwsIHJlbmRlclBvcnRhbCB9ID0gdXNlUG9ydGFsKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudClcblxuICAgIC8vIGlmIHdlJ3JlIG9uIG1vYmlsZSwgbGV0J3MgaW1wcm92ZSB0aGUgZXhwZXJpZW5jZVxuICAgIC8vIGJ5IGNsb3NpbmcgaXQgd2hlbiB1c2VyIHRhcHMgb3V0c2lkZSBvZiBpdFxuICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNsaWNrT3V0c2lkZVByb3BzID0ge1xuICAgICAgICBhbmNob3JFbCxcbiAgICAgICAgaW5uZXJSZWYsXG4gICAgICAgIG9uQ2xpY2tPdXRzaWRlIChlKSB7XG4gICAgICAgICAgaGlkZShlKVxuXG4gICAgICAgICAgLy8gcHJldmVudCBjbGljayBpZiBpdCdzIG9uIGEgZGlhbG9nIGJhY2tkcm9wXG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncS1kaWFsb2dfX2JhY2tkcm9wJykpIHtcbiAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYXNDbGlja091dHNpZGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgICAvLyBpdCBkb2Vzbid0IGhhcyBleHRlcm5hbCBtb2RlbFxuICAgICAgICAvLyAobnVsbCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSlcbiAgICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICAvLyBhbmQgaXQncyBub3QgcGVyc2lzdGVudFxuICAgICAgICAmJiBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgIClcblxuICAgICAgd2F0Y2goaGFzQ2xpY2tPdXRzaWRlLCB2YWwgPT4ge1xuICAgICAgICBjb25zdCBmbiA9IHZhbCA9PT0gdHJ1ZSA/IGFkZENsaWNrT3V0c2lkZSA6IHJlbW92ZUNsaWNrT3V0c2lkZVxuICAgICAgICBmbihjbGlja091dHNpZGVQcm9wcylcbiAgICAgIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNsaWNrT3V0c2lkZShjbGlja091dHNpZGVQcm9wcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0KSB7XG4gICAgICBzaG93UG9ydGFsKClcblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpY2soKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaWNrKCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB1cGRhdGVQb3NpdGlvbigpKVxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGlubmVyUmVmLnZhbHVlLCB7IGF0dHJpYnV0ZXM6IGZhbHNlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oKVxuICAgICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgfSlcblxuICAgICAgaWYgKHVud2F0Y2hQb3NpdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVud2F0Y2hQb3NpdGlvbiA9IHdhdGNoKFxuICAgICAgICAgICgpID0+ICRxLnNjcmVlbi53aWR0aCArICd8JyArICRxLnNjcmVlbi5oZWlnaHQgKyAnfCcgKyBwcm9wcy5zZWxmICsgJ3wnICsgcHJvcHMuYW5jaG9yICsgJ3wnICsgJHEubGFuZy5ydGwsXG4gICAgICAgICAgdXBkYXRlUG9zaXRpb25cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93UG9ydGFsKHRydWUpIC8vIGRvbmUgc2hvd2luZyBwb3J0YWxcbiAgICAgICAgZW1pdCgnc2hvdycsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIaWRlIChldnQpIHtcbiAgICAgIHJlbW92ZVRpY2soKVxuICAgICAgaGlkZVBvcnRhbCgpXG5cbiAgICAgIGFuY2hvckNsZWFudXAoKVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoaWRlUG9ydGFsKHRydWUpIC8vIGRvbmUgaGlkaW5nLCBub3cgZGVzdHJveVxuICAgICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuY2hvckNsZWFudXAgKCkge1xuICAgICAgaWYgKG9ic2VydmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgIG9ic2VydmVyID0gdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGlmICh1bndhdGNoUG9zaXRpb24gIT09IHZvaWQgMCkge1xuICAgICAgICB1bndhdGNoUG9zaXRpb24oKVxuICAgICAgICB1bndhdGNoUG9zaXRpb24gPSB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY2xlYW5FdnQoYW5jaG9yRXZlbnRzLCAndG9vbHRpcFRlbXAnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uICgpIHtcbiAgICAgIGNvbnN0IGVsID0gaW5uZXJSZWYudmFsdWVcblxuICAgICAgaWYgKGFuY2hvckVsLnZhbHVlID09PSBudWxsIHx8ICFlbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0UG9zaXRpb24oe1xuICAgICAgICBlbCxcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5vZmZzZXQsXG4gICAgICAgIGFuY2hvckVsOiBhbmNob3JFbC52YWx1ZSxcbiAgICAgICAgYW5jaG9yT3JpZ2luOiBhbmNob3JPcmlnaW4udmFsdWUsXG4gICAgICAgIHNlbGZPcmlnaW46IHNlbGZPcmlnaW4udmFsdWUsXG4gICAgICAgIG1heEhlaWdodDogcHJvcHMubWF4SGVpZ2h0LFxuICAgICAgICBtYXhXaWR0aDogcHJvcHMubWF4V2lkdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsYXlTaG93IChldnQpIHtcbiAgICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBhbmNob3JFbC52YWx1ZVxuICAgICAgICBjb25zdCBldnRzID0gWyAndG91Y2htb3ZlJywgJ3RvdWNoY2FuY2VsJywgJ3RvdWNoZW5kJywgJ2NsaWNrJyBdXG4gICAgICAgICAgLm1hcChlID0+IChbIHRhcmdldCwgZSwgJ2RlbGF5SGlkZScsICdwYXNzaXZlQ2FwdHVyZScgXSkpXG5cbiAgICAgICAgYWRkRXZ0KGFuY2hvckV2ZW50cywgJ3Rvb2x0aXBUZW1wJywgZXZ0cylcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHsgc2hvdyhldnQpIH0sIHByb3BzLmRlbGF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGF5SGlkZSAoZXZ0KSB7XG4gICAgICBpZiAoJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFuRXZ0KGFuY2hvckV2ZW50cywgJ3Rvb2x0aXBUZW1wJylcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAvLyBkZWxheSBuZWVkZWQgb3RoZXJ3aXNlIHNlbGVjdGlvbiBzdGlsbCBvY2N1cnNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgIH0sIDEwKVxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4geyBoaWRlKGV2dCkgfSwgcHJvcHMuaGlkZURlbGF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZUFuY2hvckVsICgpIHtcbiAgICAgIGlmIChwcm9wcy5ub1BhcmVudEV2ZW50ID09PSB0cnVlIHx8IGFuY2hvckVsLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IGV2dHMgPSAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWVcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAndG91Y2hzdGFydCcsICdkZWxheVNob3cnLCAncGFzc2l2ZScgXVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnbW91c2VlbnRlcicsICdkZWxheVNob3cnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdtb3VzZWxlYXZlJywgJ2RlbGF5SGlkZScsICdwYXNzaXZlJyBdXG4gICAgICAgICAgXVxuXG4gICAgICBhZGRFdnQoYW5jaG9yRXZlbnRzLCAnYW5jaG9yJywgZXZ0cylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsIHx8IHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlID0gZ2V0U2Nyb2xsVGFyZ2V0KGFuY2hvckVsLnZhbHVlLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICAgIGNvbnN0IGZuID0gcHJvcHMubm9QYXJlbnRFdmVudCA9PT0gdHJ1ZVxuICAgICAgICAgID8gdXBkYXRlUG9zaXRpb25cbiAgICAgICAgICA6IGhpZGVcblxuICAgICAgICBjaGFuZ2VTY3JvbGxFdmVudChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSwgZm4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9vbHRpcENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBoKCdkaXYnLCB7XG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgJ3EtdG9vbHRpcCBxLXRvb2x0aXAtLXN0eWxlIHEtcG9zaXRpb24tZW5naW5lIG5vLXBvaW50ZXItZXZlbnRzJyxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgYXR0cnMuc3R5bGUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uU3R5bGUudmFsdWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJvbGU6ICd0b29sdGlwJ1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUG9ydGFsQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gaChUcmFuc2l0aW9uLCB7XG4gICAgICAgIG5hbWU6IHRyYW5zaXRpb24udmFsdWUsXG4gICAgICAgIGFwcGVhcjogdHJ1ZVxuICAgICAgfSwgZ2V0VG9vbHRpcENvbnRlbnQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGFuY2hvckNsZWFudXApXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7IHVwZGF0ZVBvc2l0aW9uIH0pXG5cbiAgICByZXR1cm4gcmVuZGVyUG9ydGFsXG4gIH1cbn0pXG4iXSwibmFt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
