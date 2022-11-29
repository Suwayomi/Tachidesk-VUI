import { Q as QIcon } from "./QIcon.aa032244.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.bf6e2c41.js";
import { Q as QItem } from "./QItem.3d6dda7f.js";
import { Q as QToggle } from "./QToggle.41c58e33.js";
import { Q as QCardSection } from "./QCardSection.0b1eee72.js";
import { Q as QInput } from "./QInput.6b71ca31.js";
import { u as useFormProps, a as useFormInject, c as useFormAttrs } from "./use-form.b3df9ff5.js";
import { T as TouchPan } from "./TouchPan.86a57c6f.js";
import { a as useDark, u as useDarkProps } from "./use-dark.63b90c22.js";
import { b as between, h as humanStorageSize } from "./format.2a3572e1.js";
import { r as ref, c as computed, o as onBeforeUnmount, Y as position, ap as isNumber, aq as isObject, h, g as getCurrentInstance, w as watch, N as stopAndPrevent, R as stop, a0 as client, E as provide, ar as isRef, ah as injectProp, as as injectMultipleProps, at as uploaderKey, _ as _export_sfc, f as defineComponent, j as openBlock, k as createBlock, m as withCtx, n as createVNode, q as createTextVNode, D as withDirectives, t as toDisplayString, v as createBaseVNode } from "./index.75e4774b.js";
import { e as hDir, c as createComponent, u as useSizeProps, b as useSize, j as hMergeSlotSafely, Q as QSpinner } from "./QSpinner.6511ee07.js";
import { b as vmIsDestroyed, Q as QBtn } from "./QBtn.9abbfb4b.js";
import { Q as QCardActions } from "./QCardActions.6f813fe5.js";
import { Q as QCard } from "./QCard.c4935ec0.js";
import { Q as QDialog } from "./QDialog.2ec363bc.js";
import { Q as QSeparator } from "./QSeparator.3fdd6d84.js";
import { Q as QSelect } from "./QSelect.fbe52429.js";
import { Q as QExpansionItem } from "./QExpansionItem.f468b7fc.js";
import { Q as QList } from "./QList.e87441cd.js";
import { R as Ripple } from "./Ripple.bedf8a1c.js";
import { C as ClosePopup } from "./ClosePopup.117febde.js";
import { u as useQuasar } from "./use-quasar.ac6e6735.js";
import { resetBase } from "./fetcher.d026f468.js";
import "./use-checkbox.4b6eeeb4.js";
import "./option-sizes.8951cf75.js";
import "./use-key-composition.689d3f4d.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./selection.3a23570e.js";
import "./use-timeout.4d745afd.js";
import "./scroll.51a1aea4.js";
import "./dom.3bfc77a6.js";
import "./use-transition.34947ede.js";
import "./QMenu.fd3c1db0.js";
import "./position-engine.09a868e3.js";
import "./use-virtual-scroll.d842f9a0.js";
import "./rtl.b51694b1.js";
const markerPrefixClass = "q-slider__marker-labels";
const defaultMarkerConvertFn = (v) => ({ value: v });
const defaultMarkerLabelRenderFn = ({ marker }) => h("div", {
  key: marker.value,
  style: marker.style,
  class: marker.classes
}, marker.label);
const keyCodes = [34, 37, 40, 33, 39, 38];
const useSliderProps = {
  ...useDarkProps,
  ...useFormProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (v) => v >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  hideSelection: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
};
const useSliderEmits = ["pan", "update:modelValue", "change"];
function useSlider({ updateValue, updatePosition, getDragging, formAttrs }) {
  const { props: props2, emit, slots, proxy: { $q } } = getCurrentInstance();
  const isDark = useDark(props2, $q);
  const injectFormInput = useFormInject(formAttrs);
  const active = ref(false);
  const preventFocus = ref(false);
  const focus = ref(false);
  const dragging = ref(false);
  const axis = computed(() => props2.vertical === true ? "--v" : "--h");
  const labelSide = computed(() => "-" + (props2.switchLabelSide === true ? "switched" : "standard"));
  const isReversed = computed(() => props2.vertical === true ? props2.reverse === true : props2.reverse !== ($q.lang.rtl === true));
  const innerMin = computed(() => isNaN(props2.innerMin) === true || props2.innerMin < props2.min ? props2.min : props2.innerMin);
  const innerMax = computed(() => isNaN(props2.innerMax) === true || props2.innerMax > props2.max ? props2.max : props2.innerMax);
  const editable = computed(() => props2.disable !== true && props2.readonly !== true && innerMin.value < innerMax.value);
  const decimals = computed(() => (String(props2.step).trim().split(".")[1] || "").length);
  const step = computed(() => props2.step === 0 ? 1 : props2.step);
  const tabindex = computed(() => editable.value === true ? props2.tabindex || 0 : -1);
  const trackLen = computed(() => props2.max - props2.min);
  const innerBarLen = computed(() => innerMax.value - innerMin.value);
  const innerMinRatio = computed(() => convertModelToRatio(innerMin.value));
  const innerMaxRatio = computed(() => convertModelToRatio(innerMax.value));
  const positionProp = computed(() => props2.vertical === true ? isReversed.value === true ? "bottom" : "top" : isReversed.value === true ? "right" : "left");
  const sizeProp = computed(() => props2.vertical === true ? "height" : "width");
  const thicknessProp = computed(() => props2.vertical === true ? "width" : "height");
  const orientation = computed(() => props2.vertical === true ? "vertical" : "horizontal");
  const attributes = computed(() => {
    const acc = {
      role: "slider",
      "aria-valuemin": innerMin.value,
      "aria-valuemax": innerMax.value,
      "aria-orientation": orientation.value,
      "data-step": props2.step
    };
    if (props2.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props2.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  const classes = computed(
    () => `q-slider q-slider${axis.value} q-slider--${active.value === true ? "" : "in"}active inline no-wrap ` + (props2.vertical === true ? "row" : "column") + (props2.disable === true ? " disabled" : " q-slider--enabled" + (editable.value === true ? " q-slider--editable" : "")) + (focus.value === "both" ? " q-slider--focus" : "") + (props2.label || props2.labelAlways === true ? " q-slider--label" : "") + (props2.labelAlways === true ? " q-slider--label-always" : "") + (isDark.value === true ? " q-slider--dark" : "") + (props2.dense === true ? " q-slider--dense q-slider--dense" + axis.value : "")
  );
  function getPositionClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value} ${cls}${axis.value}${labelSide.value}`;
  }
  function getAxisClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value}`;
  }
  const selectionBarClass = computed(() => {
    const color = props2.selectionColor || props2.color;
    return "q-slider__selection absolute" + (color !== void 0 ? ` text-${color}` : "");
  });
  const markerClass = computed(() => getAxisClass("markers") + " absolute overflow-hidden");
  const trackContainerClass = computed(() => getAxisClass("track-container"));
  const pinClass = computed(() => getPositionClass("pin"));
  const labelClass = computed(() => getPositionClass("label"));
  const textContainerClass = computed(() => getPositionClass("text-container"));
  const markerLabelsContainerClass = computed(
    () => getPositionClass("marker-labels-container") + (props2.markerLabelsClass !== void 0 ? ` ${props2.markerLabelsClass}` : "")
  );
  const trackClass = computed(
    () => "q-slider__track relative-position no-outline" + (props2.trackColor !== void 0 ? ` bg-${props2.trackColor}` : "")
  );
  const trackStyle = computed(() => {
    const acc = { [thicknessProp.value]: props2.trackSize };
    if (props2.trackImg !== void 0) {
      acc.backgroundImage = `url(${props2.trackImg}) !important`;
    }
    return acc;
  });
  const innerBarClass = computed(
    () => "q-slider__inner absolute" + (props2.innerTrackColor !== void 0 ? ` bg-${props2.innerTrackColor}` : "")
  );
  const innerBarStyle = computed(() => {
    const acc = {
      [positionProp.value]: `${100 * innerMinRatio.value}%`,
      [sizeProp.value]: `${100 * (innerMaxRatio.value - innerMinRatio.value)}%`
    };
    if (props2.innerTrackImg !== void 0) {
      acc.backgroundImage = `url(${props2.innerTrackImg}) !important`;
    }
    return acc;
  });
  function convertRatioToModel(ratio) {
    const { min, max, step: step2 } = props2;
    let model = min + ratio * (max - min);
    if (step2 > 0) {
      const modulo = (model - min) % step2;
      model += (Math.abs(modulo) >= step2 / 2 ? (modulo < 0 ? -1 : 1) * step2 : 0) - modulo;
    }
    if (decimals.value > 0) {
      model = parseFloat(model.toFixed(decimals.value));
    }
    return between(model, innerMin.value, innerMax.value);
  }
  function convertModelToRatio(model) {
    return trackLen.value === 0 ? 0 : (model - props2.min) / trackLen.value;
  }
  function getDraggingRatio(evt, dragging2) {
    const pos = position(evt), val = props2.vertical === true ? between((pos.top - dragging2.top) / dragging2.height, 0, 1) : between((pos.left - dragging2.left) / dragging2.width, 0, 1);
    return between(
      isReversed.value === true ? 1 - val : val,
      innerMinRatio.value,
      innerMaxRatio.value
    );
  }
  const markerStep = computed(
    () => isNumber(props2.markers) === true ? props2.markers : step.value
  );
  const markerTicks = computed(() => {
    const acc = [];
    const step2 = markerStep.value;
    const max = props2.max;
    let value = props2.min;
    do {
      acc.push(value);
      value += step2;
    } while (value < max);
    acc.push(max);
    return acc;
  });
  const markerLabelClass = computed(() => {
    const prefix = ` ${markerPrefixClass}${axis.value}-`;
    return markerPrefixClass + `${prefix}${props2.switchMarkerLabelsSide === true ? "switched" : "standard"}${prefix}${isReversed.value === true ? "rtl" : "ltr"}`;
  });
  const markerLabelsList = computed(() => {
    if (props2.markerLabels === false) {
      return null;
    }
    return getMarkerList(props2.markerLabels).map((entry, index) => ({
      index,
      value: entry.value,
      label: entry.label || entry.value,
      classes: markerLabelClass.value + (entry.classes !== void 0 ? " " + entry.classes : ""),
      style: {
        ...getMarkerLabelStyle(entry.value),
        ...entry.style || {}
      }
    }));
  });
  const markerScope = computed(() => ({
    markerList: markerLabelsList.value,
    markerMap: markerLabelsMap.value,
    classes: markerLabelClass.value,
    getStyle: getMarkerLabelStyle
  }));
  const markerStyle = computed(() => {
    if (innerBarLen.value !== 0) {
      const size = 100 * markerStep.value / innerBarLen.value;
      return {
        ...innerBarStyle.value,
        backgroundSize: props2.vertical === true ? `2px ${size}%` : `${size}% 2px`
      };
    }
    return null;
  });
  function getMarkerList(def) {
    if (def === false) {
      return null;
    }
    if (def === true) {
      return markerTicks.value.map(defaultMarkerConvertFn);
    }
    if (typeof def === "function") {
      return markerTicks.value.map((value) => {
        const item = def(value);
        return isObject(item) === true ? { ...item, value } : { value, label: item };
      });
    }
    const filterFn = ({ value }) => value >= props2.min && value <= props2.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value = Number(key);
      return isObject(item) === true ? { ...item, value } : { value, label: item };
    }).filter(filterFn);
  }
  function getMarkerLabelStyle(val) {
    return { [positionProp.value]: `${100 * (val - props2.min) / trackLen.value}%` };
  }
  const markerLabelsMap = computed(() => {
    if (props2.markerLabels === false) {
      return null;
    }
    const acc = {};
    markerLabelsList.value.forEach((entry) => {
      acc[entry.value] = entry;
    });
    return acc;
  });
  function getMarkerLabelsContent() {
    if (slots["marker-label-group"] !== void 0) {
      return slots["marker-label-group"](markerScope.value);
    }
    const fn = slots["marker-label"] || defaultMarkerLabelRenderFn;
    return markerLabelsList.value.map((marker) => fn({
      marker,
      ...markerScope.value
    }));
  }
  const panDirective = computed(() => {
    return [[
      TouchPan,
      onPan,
      void 0,
      {
        [orientation.value]: true,
        prevent: true,
        stop: true,
        mouse: true,
        mouseAllDir: true
      }
    ]];
  });
  function onPan(event) {
    if (event.isFinal === true) {
      if (dragging.value !== void 0) {
        updatePosition(event.evt);
        event.touch === true && updateValue(true);
        dragging.value = void 0;
        emit("pan", "end");
      }
      active.value = false;
      focus.value = false;
    } else if (event.isFirst === true) {
      dragging.value = getDragging(event.evt);
      updatePosition(event.evt);
      updateValue();
      active.value = true;
      emit("pan", "start");
    } else {
      updatePosition(event.evt);
      updateValue();
    }
  }
  function onBlur() {
    focus.value = false;
  }
  function onActivate(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue();
    preventFocus.value = true;
    active.value = true;
    document.addEventListener("mouseup", onDeactivate, true);
  }
  function onDeactivate() {
    preventFocus.value = false;
    active.value = false;
    updateValue(true);
    onBlur();
    document.removeEventListener("mouseup", onDeactivate, true);
  }
  function onMobileClick(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue(true);
  }
  function onKeyup(evt) {
    if (keyCodes.includes(evt.keyCode)) {
      updateValue(true);
    }
  }
  function getTextContainerStyle(ratio) {
    if (props2.vertical === true) {
      return null;
    }
    const p = $q.lang.rtl !== props2.reverse ? 1 - ratio : ratio;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${props2.thumbSize} / 2 + ${50 - 100 * p}%))`
    };
  }
  function getThumbRenderFn(thumb) {
    const focusClass = computed(() => preventFocus.value === false && (focus.value === thumb.focusValue || focus.value === "both") ? " q-slider--focus" : "");
    const classes2 = computed(
      () => `q-slider__thumb q-slider__thumb${axis.value} q-slider__thumb${axis.value}-${isReversed.value === true ? "rtl" : "ltr"} absolute non-selectable` + focusClass.value + (thumb.thumbColor.value !== void 0 ? ` text-${thumb.thumbColor.value}` : "")
    );
    const style = computed(() => ({
      width: props2.thumbSize,
      height: props2.thumbSize,
      [positionProp.value]: `${100 * thumb.ratio.value}%`,
      zIndex: focus.value === thumb.focusValue ? 2 : void 0
    }));
    const pinColor = computed(() => thumb.labelColor.value !== void 0 ? ` text-${thumb.labelColor.value}` : "");
    const textContainerStyle = computed(() => getTextContainerStyle(thumb.ratio.value));
    const textClass = computed(() => "q-slider__text" + (thumb.labelTextColor.value !== void 0 ? ` text-${thumb.labelTextColor.value}` : ""));
    return () => {
      const thumbContent = [
        h("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          h("path", { d: props2.thumbPath })
        ]),
        h("div", { class: "q-slider__focus-ring fit" })
      ];
      if (props2.label === true || props2.labelAlways === true) {
        thumbContent.push(
          h("div", {
            class: pinClass.value + " absolute fit no-pointer-events" + pinColor.value
          }, [
            h("div", {
              class: labelClass.value,
              style: { minWidth: props2.thumbSize }
            }, [
              h("div", {
                class: textContainerClass.value,
                style: textContainerStyle.value
              }, [
                h("span", { class: textClass.value }, thumb.label.value)
              ])
            ])
          ])
        );
        if (props2.name !== void 0 && props2.disable !== true) {
          injectFormInput(thumbContent, "push");
        }
      }
      return h("div", {
        class: classes2.value,
        style: style.value,
        ...thumb.getNodeData()
      }, thumbContent);
    };
  }
  function getContent(selectionBarStyle, trackContainerTabindex, trackContainerEvents, injectThumb) {
    const trackContent = [];
    props2.innerTrackColor !== "transparent" && trackContent.push(
      h("div", {
        key: "inner",
        class: innerBarClass.value,
        style: innerBarStyle.value
      })
    );
    props2.selectionColor !== "transparent" && trackContent.push(
      h("div", {
        key: "selection",
        class: selectionBarClass.value,
        style: selectionBarStyle.value
      })
    );
    props2.markers !== false && trackContent.push(
      h("div", {
        key: "marker",
        class: markerClass.value,
        style: markerStyle.value
      })
    );
    injectThumb(trackContent);
    const content = [
      hDir(
        "div",
        {
          key: "trackC",
          class: trackContainerClass.value,
          tabindex: trackContainerTabindex.value,
          ...trackContainerEvents.value
        },
        [
          h("div", {
            class: trackClass.value,
            style: trackStyle.value
          }, trackContent)
        ],
        "slide",
        editable.value,
        () => panDirective.value
      )
    ];
    if (props2.markerLabels !== false) {
      const action = props2.switchMarkerLabelsSide === true ? "unshift" : "push";
      content[action](
        h("div", {
          key: "markerL",
          class: markerLabelsContainerClass.value
        }, getMarkerLabelsContent())
      );
    }
    return content;
  }
  onBeforeUnmount(() => {
    document.removeEventListener("mouseup", onDeactivate, true);
  });
  return {
    state: {
      active,
      focus,
      preventFocus,
      dragging,
      editable,
      classes,
      tabindex,
      attributes,
      step,
      decimals,
      trackLen,
      innerMin,
      innerMinRatio,
      innerMax,
      innerMaxRatio,
      positionProp,
      sizeProp,
      isReversed
    },
    methods: {
      onActivate,
      onMobileClick,
      onBlur,
      onKeyup,
      getContent,
      getThumbRenderFn,
      convertRatioToModel,
      convertModelToRatio,
      getDraggingRatio
    }
  };
}
const getNodeData = () => ({});
var QSlider = createComponent({
  name: "QSlider",
  props: {
    ...useSliderProps,
    modelValue: {
      required: true,
      default: null,
      validator: (v) => typeof v === "number" || v === null
    },
    labelValue: [String, Number]
  },
  emits: useSliderEmits,
  setup(props2, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = useSlider({
      updateValue,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props2)
    });
    const rootRef = ref(null);
    const curRatio = ref(0);
    const model = ref(0);
    function normalizeModel() {
      model.value = props2.modelValue === null ? state.innerMin.value : between(props2.modelValue, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props2.modelValue}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelRatio = computed(() => methods.convertModelToRatio(model.value));
    const ratio = computed(() => state.active.value === true ? curRatio.value : modelRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      };
      if (props2.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props2.selectionImg}) !important`;
      }
      return acc;
    });
    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => props2.labelValue !== void 0 ? props2.labelValue : model.value),
      thumbColor: computed(() => props2.thumbColor || props2.color),
      labelColor: computed(() => props2.labelColor),
      labelTextColor: computed(() => props2.labelTextColor)
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      return $q.platform.is.mobile === true ? { onClick: methods.onMobileClick } : {
        onMousedown: methods.onActivate,
        onFocus,
        onBlur: methods.onBlur,
        onKeydown,
        onKeyup: methods.onKeyup
      };
    });
    function updateValue(change) {
      if (model.value !== props2.modelValue) {
        emit("update:modelValue", model.value);
      }
      change === true && emit("change", model.value);
    }
    function getDragging() {
      return rootRef.value.getBoundingClientRect();
    }
    function updatePosition(event, dragging = state.dragging.value) {
      const ratio2 = methods.getDraggingRatio(event, dragging);
      model.value = methods.convertRatioToModel(ratio2);
      curRatio.value = props2.snap !== true || props2.step === 0 ? ratio2 : methods.convertModelToRatio(model.value);
    }
    function onFocus() {
      state.focus.value = true;
    }
    function onKeydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.step.value, offset = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props2.vertical === true ? -1 : 1) * stepVal;
      model.value = between(
        parseFloat((model.value + offset).toFixed(state.decimals.value)),
        state.innerMin.value,
        state.innerMax.value
      );
      updateValue();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        state.tabindex,
        trackContainerEvents,
        (node) => {
          node.push(getThumb());
        }
      );
      return h("div", {
        ref: rootRef,
        class: state.classes.value + (props2.modelValue === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props2.modelValue
      }, content);
    };
  }
});
const useCircularCommonProps = {
  ...useSizeProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  rounded: Boolean,
  thickness: {
    type: Number,
    default: 0.2,
    validator: (v) => v >= 0 && v <= 1
  },
  angle: {
    type: Number,
    default: 0
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean
};
const radius = 50, diameter = 2 * radius, circumference = diameter * Math.PI, strokeDashArray = Math.round(circumference * 1e3) / 1e3;
var QCircularProgress = createComponent({
  name: "QCircularProgress",
  props: {
    ...useCircularCommonProps,
    value: {
      type: Number,
      default: 0
    },
    animationSpeed: {
      type: [String, Number],
      default: 600
    },
    indeterminate: Boolean
  },
  setup(props2, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props2);
    const svgStyle = computed(() => {
      const angle = ($q.lang.rtl === true ? -1 : 1) * props2.angle;
      return {
        transform: props2.reverse !== ($q.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - angle}deg)` : `rotate3d(0, 0, 1, ${angle - 90}deg)`
      };
    });
    const circleStyle = computed(() => props2.instantFeedback !== true && props2.indeterminate !== true ? { transition: `stroke-dashoffset ${props2.animationSpeed}ms ease 0s, stroke ${props2.animationSpeed}ms ease` } : "");
    const viewBox = computed(() => diameter / (1 - props2.thickness / 2));
    const viewBoxAttr = computed(
      () => `${viewBox.value / 2} ${viewBox.value / 2} ${viewBox.value} ${viewBox.value}`
    );
    const normalized = computed(() => between(props2.value, props2.min, props2.max));
    const strokeDashOffset = computed(() => circumference * (1 - (normalized.value - props2.min) / (props2.max - props2.min)));
    const strokeWidth = computed(() => props2.thickness / 2 * viewBox.value);
    function getCircle({ thickness, offset, color, cls, rounded }) {
      return h("circle", {
        class: "q-circular-progress__" + cls + (color !== void 0 ? ` text-${color}` : ""),
        style: circleStyle.value,
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": thickness,
        "stroke-dasharray": strokeDashArray,
        "stroke-dashoffset": offset,
        "stroke-linecap": rounded,
        cx: viewBox.value,
        cy: viewBox.value,
        r: radius
      });
    }
    return () => {
      const svgChild = [];
      props2.centerColor !== void 0 && props2.centerColor !== "transparent" && svgChild.push(
        h("circle", {
          class: `q-circular-progress__center text-${props2.centerColor}`,
          fill: "currentColor",
          r: radius - strokeWidth.value / 2,
          cx: viewBox.value,
          cy: viewBox.value
        })
      );
      props2.trackColor !== void 0 && props2.trackColor !== "transparent" && svgChild.push(
        getCircle({
          cls: "track",
          thickness: strokeWidth.value,
          offset: 0,
          color: props2.trackColor
        })
      );
      svgChild.push(
        getCircle({
          cls: "circle",
          thickness: strokeWidth.value,
          offset: strokeDashOffset.value,
          color: props2.color,
          rounded: props2.rounded === true ? "round" : void 0
        })
      );
      const child = [
        h("svg", {
          class: "q-circular-progress__svg",
          style: svgStyle.value,
          viewBox: viewBoxAttr.value,
          "aria-hidden": "true"
        }, svgChild)
      ];
      props2.showValue === true && child.push(
        h("div", {
          class: "q-circular-progress__text absolute-full row flex-center content-center",
          style: { fontSize: props2.fontSize }
        }, slots.default !== void 0 ? slots.default() : [h("div", normalized.value)])
      );
      return h("div", {
        class: `q-circular-progress q-circular-progress--${props2.indeterminate === true ? "in" : ""}determinate`,
        style: sizeStyle.value,
        role: "progressbar",
        "aria-valuemin": props2.min,
        "aria-valuemax": props2.max,
        "aria-valuenow": props2.indeterminate === true ? void 0 : normalized.value
      }, hMergeSlotSafely(slots.internal, child));
    };
  }
});
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props: props2, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props2.accept !== void 0 ? props2.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props2.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props2.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length > 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props2.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props2.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.multiple !== true && files.length > 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props2.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props2.filter === "function") {
      const filteredFiles = props2.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props2.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length > 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
function getProgressLabel(p) {
  return (p * 100).toFixed(2) + "%";
}
const coreProps = {
  ...useDarkProps,
  ...useFileProps,
  label: String,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  noThumbnails: Boolean,
  autoUpload: Boolean,
  hideUploadBtn: Boolean,
  disable: Boolean,
  readonly: Boolean
};
const coreEmits = [
  ...useFileEmits,
  "start",
  "finish",
  "added",
  "removed"
];
function getRenderer(getPlugin) {
  const vm = getCurrentInstance();
  const { props: props2, slots, emit, proxy } = vm;
  const { $q } = proxy;
  const isDark = useDark(props2, $q);
  function updateFileStatus(file, status, uploadedSize) {
    file.__status = status;
    if (status === "idle") {
      file.__uploaded = 0;
      file.__progress = 0;
      file.__sizeLabel = humanStorageSize(file.size);
      file.__progressLabel = "0.00%";
      return;
    }
    if (status === "failed") {
      proxy.$forceUpdate();
      return;
    }
    file.__uploaded = status === "uploaded" ? file.size : uploadedSize;
    file.__progress = status === "uploaded" ? 1 : Math.min(0.9999, file.__uploaded / file.size);
    file.__progressLabel = getProgressLabel(file.__progress);
    proxy.$forceUpdate();
  }
  const editable = computed(() => props2.disable !== true && props2.readonly !== true);
  const dnd = ref(false);
  const rootRef = ref(null);
  const inputRef = ref(null);
  const state = {
    files: ref([]),
    queuedFiles: ref([]),
    uploadedFiles: ref([]),
    uploadedSize: ref(0),
    updateFileStatus,
    isAlive: () => vmIsDestroyed(vm) === false
  };
  const {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  } = useFile({ editable, dnd, getFileInput, addFilesToQueue });
  Object.assign(state, getPlugin({ props: props2, slots, emit, helpers: state }));
  if (state.isBusy === void 0) {
    state.isBusy = ref(false);
  }
  const uploadSize = ref(0);
  const uploadProgress = computed(() => uploadSize.value === 0 ? 0 : state.uploadedSize.value / uploadSize.value);
  const uploadProgressLabel = computed(() => getProgressLabel(uploadProgress.value));
  const uploadSizeLabel = computed(() => humanStorageSize(uploadSize.value));
  const canAddFiles = computed(
    () => editable.value === true && state.isUploading.value !== true && (props2.multiple === true || state.queuedFiles.value.length === 0) && (props2.maxFiles === void 0 || state.files.value.length < maxFilesNumber.value) && (props2.maxTotalSize === void 0 || uploadSize.value < maxTotalSizeNumber.value)
  );
  const canUpload = computed(
    () => editable.value === true && state.isBusy.value !== true && state.isUploading.value !== true && state.queuedFiles.value.length > 0
  );
  provide(uploaderKey, renderInput);
  const classes = computed(
    () => "q-uploader column no-wrap" + (isDark.value === true ? " q-uploader--dark q-dark" : "") + (props2.bordered === true ? " q-uploader--bordered" : "") + (props2.square === true ? " q-uploader--square no-border-radius" : "") + (props2.flat === true ? " q-uploader--flat no-shadow" : "") + (props2.disable === true ? " disabled q-uploader--disable" : "") + (dnd.value === true ? " q-uploader--dnd" : "")
  );
  const colorClass = computed(
    () => "q-uploader__header" + (props2.color !== void 0 ? ` bg-${props2.color}` : "") + (props2.textColor !== void 0 ? ` text-${props2.textColor}` : "")
  );
  watch(state.isUploading, (newVal, oldVal) => {
    if (oldVal === false && newVal === true) {
      emit("start");
    } else if (oldVal === true && newVal === false) {
      emit("finish");
    }
  });
  function reset() {
    if (props2.disable === false) {
      state.abort();
      state.uploadedSize.value = 0;
      uploadSize.value = 0;
      revokeImgURLs();
      state.files.value = [];
      state.queuedFiles.value = [];
      state.uploadedFiles.value = [];
    }
  }
  function removeUploadedFiles() {
    if (props2.disable === false) {
      batchRemoveFiles(["uploaded"], () => {
        state.uploadedFiles.value = [];
      });
    }
  }
  function removeQueuedFiles() {
    batchRemoveFiles(["idle", "failed"], ({ size }) => {
      uploadSize.value -= size;
      state.queuedFiles.value = [];
    });
  }
  function batchRemoveFiles(statusList, cb) {
    if (props2.disable === true) {
      return;
    }
    const removed = {
      files: [],
      size: 0
    };
    const localFiles = state.files.value.filter((f) => {
      if (statusList.indexOf(f.__status) === -1) {
        return true;
      }
      removed.size += f.size;
      removed.files.push(f);
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    if (removed.files.length > 0) {
      state.files.value = localFiles;
      cb(removed);
      emit("removed", removed.files);
    }
  }
  function removeFile(file) {
    if (props2.disable) {
      return;
    }
    if (file.__status === "uploaded") {
      state.uploadedFiles.value = state.uploadedFiles.value.filter((f) => f.__key !== file.__key);
    } else if (file.__status === "uploading") {
      file.__abort();
    } else {
      uploadSize.value -= file.size;
    }
    state.files.value = state.files.value.filter((f) => {
      if (f.__key !== file.__key) {
        return true;
      }
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    state.queuedFiles.value = state.queuedFiles.value.filter((f) => f.__key !== file.__key);
    emit("removed", [file]);
  }
  function revokeImgURLs() {
    state.files.value.forEach((f) => {
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
    });
  }
  function getFileInput() {
    return inputRef.value || rootRef.value.getElementsByClassName("q-uploader__input")[0];
  }
  function addFilesToQueue(e, fileList) {
    const localFiles = processFiles(e, fileList, state.files.value, true);
    const fileInput = getFileInput();
    if (fileInput !== void 0 && fileInput !== null) {
      fileInput.value = "";
    }
    if (localFiles === void 0) {
      return;
    }
    localFiles.forEach((file) => {
      state.updateFileStatus(file, "idle");
      uploadSize.value += file.size;
      if (props2.noThumbnails !== true && file.type.toUpperCase().startsWith("IMAGE")) {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        file.__img = img;
      }
    });
    state.files.value = state.files.value.concat(localFiles);
    state.queuedFiles.value = state.queuedFiles.value.concat(localFiles);
    emit("added", localFiles);
    props2.autoUpload === true && state.upload();
  }
  function upload() {
    canUpload.value === true && state.upload();
  }
  function getBtn(show, icon, fn) {
    if (show === true) {
      const data = {
        type: "a",
        key: icon,
        icon: $q.iconSet.uploader[icon],
        flat: true,
        dense: true
      };
      let child = void 0;
      if (icon === "add") {
        data.onClick = pickFiles;
        child = renderInput;
      } else {
        data.onClick = fn;
      }
      return h(QBtn, data, child);
    }
  }
  function renderInput() {
    return h("input", {
      ref: inputRef,
      class: "q-uploader__input overflow-hidden absolute-full",
      tabindex: -1,
      type: "file",
      title: "",
      accept: props2.accept,
      multiple: props2.multiple === true ? "multiple" : void 0,
      capture: props2.capture,
      onMousedown: stop,
      onClick: pickFiles,
      onChange: addFilesToQueue
    });
  }
  function getHeader() {
    if (slots.header !== void 0) {
      return slots.header(publicApi);
    }
    return [
      h("div", {
        class: "q-uploader__header-content column"
      }, [
        h("div", {
          class: "flex flex-center no-wrap q-gutter-xs"
        }, [
          getBtn(state.queuedFiles.value.length > 0, "removeQueue", removeQueuedFiles),
          getBtn(state.uploadedFiles.value.length > 0, "removeUploaded", removeUploadedFiles),
          state.isUploading.value === true ? h(QSpinner, { class: "q-uploader__spinner" }) : null,
          h("div", { class: "col column justify-center" }, [
            props2.label !== void 0 ? h("div", { class: "q-uploader__title" }, [props2.label]) : null,
            h("div", { class: "q-uploader__subtitle" }, [
              uploadSizeLabel.value + " / " + uploadProgressLabel.value
            ])
          ]),
          getBtn(canAddFiles.value, "add"),
          getBtn(props2.hideUploadBtn === false && canUpload.value === true, "upload", state.upload),
          getBtn(state.isUploading.value, "clear", state.abort)
        ])
      ])
    ];
  }
  function getList() {
    if (slots.list !== void 0) {
      return slots.list(publicApi);
    }
    return state.files.value.map((file) => h("div", {
      key: file.__key,
      class: "q-uploader__file relative-position" + (props2.noThumbnails !== true && file.__img !== void 0 ? " q-uploader__file--img" : "") + (file.__status === "failed" ? " q-uploader__file--failed" : file.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
      style: props2.noThumbnails !== true && file.__img !== void 0 ? { backgroundImage: 'url("' + file.__img.src + '")' } : null
    }, [
      h("div", {
        class: "q-uploader__file-header row flex-center no-wrap"
      }, [
        file.__status === "failed" ? h(QIcon, {
          class: "q-uploader__file-status",
          name: $q.iconSet.type.negative,
          color: "negative"
        }) : null,
        h("div", { class: "q-uploader__file-header-content col" }, [
          h("div", { class: "q-uploader__title" }, [file.name]),
          h("div", {
            class: "q-uploader__subtitle row items-center no-wrap"
          }, [
            file.__sizeLabel + " / " + file.__progressLabel
          ])
        ]),
        file.__status === "uploading" ? h(QCircularProgress, {
          value: file.__progress,
          min: 0,
          max: 1,
          indeterminate: file.__progress === 0
        }) : h(QBtn, {
          round: true,
          dense: true,
          flat: true,
          icon: $q.iconSet.uploader[file.__status === "uploaded" ? "done" : "clear"],
          onClick: () => {
            removeFile(file);
          }
        })
      ])
    ]));
  }
  onBeforeUnmount(() => {
    state.isUploading.value === true && state.abort();
    state.files.value.length > 0 && revokeImgURLs();
  });
  const publicApi = {};
  for (const key in state) {
    if (isRef(state[key]) === true) {
      injectProp(publicApi, key, () => state[key].value);
    } else {
      publicApi[key] = state[key];
    }
  }
  Object.assign(publicApi, {
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles
  });
  injectMultipleProps(publicApi, {
    canAddFiles: () => canAddFiles.value,
    canUpload: () => canUpload.value,
    uploadSizeLabel: () => uploadSizeLabel.value,
    uploadProgressLabel: () => uploadProgressLabel.value
  });
  Object.assign(proxy, publicApi);
  return () => {
    const children = [
      h("div", { class: colorClass.value }, getHeader()),
      h("div", { class: "q-uploader__list scroll" }, getList()),
      getDndNode("uploader")
    ];
    state.isBusy.value === true && children.push(
      h("div", {
        class: "q-uploader__overlay absolute-full flex flex-center"
      }, [h(QSpinner)])
    );
    const data = { ref: rootRef, class: classes.value };
    if (canAddFiles.value === true) {
      Object.assign(data, { onDragover, onDragleave });
    }
    return h("div", data, children);
  };
}
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
const coreEmitsObject = getEmitsObject(coreEmits);
var createUploaderComponent = ({ name, props: props2, emits: emits2, injectPlugin: injectPlugin2 }) => createComponent({
  name,
  props: {
    ...coreProps,
    ...props2
  },
  emits: isObject(emits2) === true ? { ...coreEmitsObject, ...emits2 } : [...coreEmits, ...emits2],
  setup() {
    return getRenderer(injectPlugin2);
  }
});
function getFn(prop) {
  return typeof prop === "function" ? prop : () => prop;
}
const props = {
  url: [Function, String],
  method: {
    type: [Function, String],
    default: "POST"
  },
  fieldName: {
    type: [Function, String],
    default: () => {
      return (file) => file.name;
    }
  },
  headers: [Function, Array],
  formFields: [Function, Array],
  withCredentials: [Function, Boolean],
  sendRaw: [Function, Boolean],
  batch: [Function, Boolean],
  factory: Function
};
const emits = ["factory-failed", "uploaded", "failed", "uploading"];
function injectPlugin({ props: props2, emit, helpers }) {
  const xhrs = ref([]);
  const promises = ref([]);
  const workingThreads = ref(0);
  const xhrProps = computed(() => ({
    url: getFn(props2.url),
    method: getFn(props2.method),
    headers: getFn(props2.headers),
    formFields: getFn(props2.formFields),
    fieldName: getFn(props2.fieldName),
    withCredentials: getFn(props2.withCredentials),
    sendRaw: getFn(props2.sendRaw),
    batch: getFn(props2.batch)
  }));
  const isUploading = computed(() => workingThreads.value > 0);
  const isBusy = computed(() => promises.value.length > 0);
  let abortPromises;
  function abort() {
    xhrs.value.forEach((x) => {
      x.abort();
    });
    if (promises.value.length > 0) {
      abortPromises = true;
    }
  }
  function upload() {
    const queue = helpers.queuedFiles.value.slice(0);
    helpers.queuedFiles.value = [];
    if (xhrProps.value.batch(queue)) {
      runFactory(queue);
    } else {
      queue.forEach((file) => {
        runFactory([file]);
      });
    }
  }
  function runFactory(files) {
    workingThreads.value++;
    if (typeof props2.factory !== "function") {
      performUpload(files, {});
      return;
    }
    const res = props2.factory(files);
    if (!res) {
      emit(
        "factory-failed",
        new Error("QUploader: factory() does not return properly"),
        files
      );
      workingThreads.value--;
    } else if (typeof res.catch === "function" && typeof res.then === "function") {
      promises.value.push(res);
      const failed = (err) => {
        if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          if (promises.value.length === 0) {
            abortPromises = false;
          }
          helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
          files.forEach((f) => {
            helpers.updateFileStatus(f, "failed");
          });
          emit("factory-failed", err, files);
          workingThreads.value--;
        }
      };
      res.then((factory) => {
        if (abortPromises === true) {
          failed(new Error("Aborted"));
        } else if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          performUpload(files, factory);
        }
      }).catch(failed);
    } else {
      performUpload(files, res || {});
    }
  }
  function performUpload(files, factory) {
    const form = new FormData(), xhr = new XMLHttpRequest();
    const getProp = (name, arg) => {
      return factory[name] !== void 0 ? getFn(factory[name])(arg) : xhrProps.value[name](arg);
    };
    const url = getProp("url", files);
    if (!url) {
      console.error("q-uploader: invalid or no URL specified");
      workingThreads.value--;
      return;
    }
    const fields = getProp("formFields", files);
    fields !== void 0 && fields.forEach((field) => {
      form.append(field.name, field.value);
    });
    let uploadIndex = 0, uploadIndexSize = 0, localUploadedSize = 0, maxUploadSize = 0, aborted;
    xhr.upload.addEventListener("progress", (e) => {
      if (aborted === true) {
        return;
      }
      const loaded = Math.min(maxUploadSize, e.loaded);
      helpers.uploadedSize.value += loaded - localUploadedSize;
      localUploadedSize = loaded;
      let size = localUploadedSize - uploadIndexSize;
      for (let i = uploadIndex; size > 0 && i < files.length; i++) {
        const file = files[i], uploaded = size > file.size;
        if (uploaded) {
          size -= file.size;
          uploadIndex++;
          uploadIndexSize += file.size;
          helpers.updateFileStatus(file, "uploading", file.size);
        } else {
          helpers.updateFileStatus(file, "uploading", size);
          return;
        }
      }
    }, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState < 4) {
        return;
      }
      if (xhr.status && xhr.status < 400) {
        helpers.uploadedFiles.value = helpers.uploadedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "uploaded");
        });
        emit("uploaded", { files, xhr });
      } else {
        aborted = true;
        helpers.uploadedSize.value -= localUploadedSize;
        helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "failed");
        });
        emit("failed", { files, xhr });
      }
      workingThreads.value--;
      xhrs.value = xhrs.value.filter((x) => x !== xhr);
    };
    xhr.open(
      getProp("method", files),
      url
    );
    if (getProp("withCredentials", files) === true) {
      xhr.withCredentials = true;
    }
    const headers = getProp("headers", files);
    headers !== void 0 && headers.forEach((head) => {
      xhr.setRequestHeader(head.name, head.value);
    });
    const sendRaw = getProp("sendRaw", files);
    files.forEach((file) => {
      helpers.updateFileStatus(file, "uploading", 0);
      if (sendRaw !== true) {
        form.append(getProp("fieldName", file), file, file.name);
      }
      file.xhr = xhr;
      file.__abort = () => {
        xhr.abort();
      };
      maxUploadSize += file.size;
    });
    emit("uploading", { files, xhr });
    xhrs.value.push(xhr);
    if (sendRaw === true) {
      xhr.send(new Blob(files));
    } else {
      xhr.send(form);
    }
  }
  return {
    isUploading,
    isBusy,
    abort,
    upload
  };
}
var xhrUploaderPlugin = {
  name: "QUploader",
  props,
  emits,
  injectPlugin
};
var QUploader = createUploaderComponent(xhrUploaderPlugin);
const _sfc_main = defineComponent({
  name: "settingsPage",
  methods: {
    myTweak(offset) {
      return {
        height: offset ? `calc(100vh - ${offset}px)` : "100vh"
      };
    },
    setMitemW(val) {
      this.$q.localStorage.set("MitemW", val);
    },
    setserverAddr: function(val) {
      this.$q.localStorage.set(
        "baseUrl",
        val.endsWith("/") ? val.slice(0, -1) : val
      );
      this.resetBase();
    },
    setserverAuth(username = "", password = "") {
      if (username == "" || password == "") {
        this.$q.localStorage.remove("auth");
        this.busr = "";
        this.bpsw = "";
      } else {
        this.$q.localStorage.set("auth", { username, password });
      }
    },
    btoa(val) {
      return btoa(val);
    },
    setReaderOptions() {
      this.$q.localStorage.set("vue_RM", this.SReadModel);
      this.$q.localStorage.set("vue_WT", this.SreadMargins);
      this.$q.localStorage.set("vue_Scale", this.SreadScale);
    }
  },
  watch: {
    darkmode: function(val) {
      this.$q.dark.set(val);
      this.$q.localStorage.set("dark", val);
    },
    useCache: function(val) {
      this.$q.localStorage.set("useCache", val);
    }
  },
  setup(_props, { emit }) {
    emit("setTitle", "Settings");
    const $q = useQuasar();
    const darkmode = ref($q.dark.isActive);
    const MitemW = ref($q.localStorage.getItem("MitemW"));
    const useCache = ref($q.localStorage.getItem("useCache"));
    const serverAddr = ref($q.localStorage.getItem("baseUrl"));
    const auth = $q.localStorage.getItem("auth");
    const SReadModel = ref(
      $q.localStorage.getItem("vue_RM") || "RTL"
    );
    const SreadMargins = ref(
      $q.localStorage.getItem("vue_WT") || false
    );
    const SreadScale = ref(
      $q.localStorage.getItem("vue_Scale") || false
    );
    return {
      darkmode,
      Mitem: ref(false),
      MitemW,
      useCache,
      Saddr: ref(false),
      SRead: ref(false),
      SReadModel,
      SReadoptions: ["RTL", "LTR", "SinglePage", "Vertical"],
      SreadMargins,
      SreadScale,
      serverAddr,
      baut: ref(false),
      busr: ref(auth != null ? auth.username : ""),
      bpsw: ref(auth != null ? auth.password : ""),
      resetBase,
      isPwd: ref(false)
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Manga Item width:", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Enter Server Address", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Enter Username and Password", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Default Reader Settings", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QList, {
    separator: "",
    dark: _ctx.$q.dark.isActive ? true : false,
    "style-fn": _ctx.myTweak
  }, {
    default: withCtx(() => [
      createVNode(QItem, { to: "/settings/categories" }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "category" })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Categories")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.darkmode = !_ctx.darkmode),
        class: "row justify-between"
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "brightness_6" })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Dark mode")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QToggle, {
            color: "blue",
            modelValue: _ctx.darkmode,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.darkmode = $event),
            val: "battery"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })), [
        [Ripple]
      ]),
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.useCache = !_ctx.useCache),
        class: "row justify-between"
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "cached" })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Use imanga cache")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QToggle, {
            color: "blue",
            modelValue: _ctx.useCache,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.useCache = $event),
            val: "battery"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })), [
        [Ripple]
      ]),
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[9] || (_cache[9] = ($event) => _ctx.Mitem = true)
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "view_module" })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Manga Item width")
                ]),
                _: 1
              }),
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.MitemW) + "px", 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: _ctx.Mitem,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.Mitem = $event)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "q-pa-lg" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "q-px-none q-pt-none" }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, { class: "q-pt-none q-px-none" }, {
                    default: withCtx(() => [
                      createTextVNode(" the target width for manga items in grids like the library and scource views ")
                    ]),
                    _: 1
                  }),
                  createVNode(QInput, {
                    standout: "",
                    type: "number",
                    modelValue: _ctx.MitemW,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.MitemW = $event),
                    suffix: "px"
                  }, null, 8, ["modelValue"]),
                  createVNode(QSlider, {
                    step: 50,
                    snap: "",
                    modelValue: _ctx.MitemW,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.MitemW = $event),
                    min: 100,
                    max: 1e3
                  }, null, 8, ["modelValue"]),
                  createVNode(QCardActions, {
                    align: "right",
                    class: "q-pb-none"
                  }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        flat: "",
                        label: "Default",
                        color: "primary",
                        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.MitemW = 300)
                      }),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancel",
                        color: "primary"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Save",
                        color: "primary",
                        onClick: _cache[7] || (_cache[7] = ($event) => _ctx.setMitemW(_ctx.MitemW))
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })), [
        [Ripple]
      ]),
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[14] || (_cache[14] = ($event) => _ctx.Saddr = true)
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "dns" })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Server Address")
                ]),
                _: 1
              }),
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$q.localStorage.getItem("baseUrl")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: _ctx.Saddr,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.Saddr = $event)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "q-px-md" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_2
                    ]),
                    _: 1
                  }),
                  createVNode(QInput, {
                    standout: "",
                    type: "text",
                    modelValue: _ctx.serverAddr,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.serverAddr = $event)
                  }, null, 8, ["modelValue"]),
                  createVNode(QCardActions, { align: "right" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        flat: "",
                        label: "Default",
                        color: "primary",
                        onClick: _cache[11] || (_cache[11] = ($event) => _ctx.serverAddr = "http://localhost")
                      }),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancel",
                        color: "primary"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Save",
                        color: "primary",
                        onClick: _cache[12] || (_cache[12] = ($event) => _ctx.setserverAddr(_ctx.serverAddr))
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })), [
        [Ripple]
      ]),
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[21] || (_cache[21] = ($event) => _ctx.baut = true)
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, {
                name: _ctx.bpsw && _ctx.busr ? "o_lock_open" : "lock"
              }, null, 8, ["name"])
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Basic Auth")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: _ctx.baut,
            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => _ctx.baut = $event)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "q-px-md" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_3
                    ]),
                    _: 1
                  }),
                  createVNode(QInput, {
                    standout: "",
                    label: "Username",
                    type: "text",
                    modelValue: _ctx.busr,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.busr = $event),
                    name: "username",
                    class: "q-my-sm"
                  }, null, 8, ["modelValue"]),
                  createVNode(QInput, {
                    standout: "",
                    label: "Password",
                    type: !_ctx.isPwd ? "password" : "text",
                    modelValue: _ctx.bpsw,
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.bpsw = $event),
                    class: "q-my-sm",
                    name: "password"
                  }, {
                    append: withCtx(() => [
                      createVNode(QIcon, {
                        name: _ctx.isPwd ? "visibility_off" : "visibility",
                        class: "cursor-pointer",
                        onClick: _cache[16] || (_cache[16] = ($event) => _ctx.isPwd = !_ctx.isPwd)
                      }, null, 8, ["name"])
                    ]),
                    _: 1
                  }, 8, ["type", "modelValue"]),
                  createVNode(QCardActions, { align: "right" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Clear Auth",
                        color: "primary",
                        onClick: _cache[18] || (_cache[18] = ($event) => _ctx.setserverAuth())
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancel",
                        color: "primary"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Save",
                        color: "primary",
                        onClick: _cache[19] || (_cache[19] = ($event) => _ctx.setserverAuth(_ctx.busr, _ctx.bpsw))
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })), [
        [Ripple]
      ]),
      withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: _cache[28] || (_cache[28] = ($event) => _ctx.SRead = true)
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "menu_book" })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Default Reader Settings")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: _ctx.SRead,
            "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => _ctx.SRead = $event)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "q-px-sm" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_4
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock(QItem, {
                        class: "row justify-between no-wrap items-center rounded-borders",
                        clickable: "",
                        onClick: _cache[23] || (_cache[23] = ($event) => _ctx.SreadMargins = !_ctx.SreadMargins)
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Page Margins")
                            ]),
                            _: 1
                          }),
                          createVNode(QToggle, {
                            color: "blue",
                            modelValue: _ctx.SreadMargins,
                            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => _ctx.SreadMargins = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })), [
                        [Ripple]
                      ]),
                      createVNode(QSeparator),
                      withDirectives((openBlock(), createBlock(QItem, {
                        class: "row justify-between no-wrap items-center rounded-borders",
                        clickable: "",
                        onClick: _cache[25] || (_cache[25] = ($event) => _ctx.SreadScale = !_ctx.SreadScale)
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Page Scale")
                            ]),
                            _: 1
                          }),
                          createVNode(QToggle, {
                            color: "blue",
                            modelValue: _ctx.SreadScale,
                            "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => _ctx.SreadScale = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })), [
                        [Ripple]
                      ]),
                      createVNode(QSeparator),
                      createVNode(QSelect, {
                        standout: "",
                        label: "Reader Mode",
                        modelValue: _ctx.SReadModel,
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => _ctx.SReadModel = $event),
                        options: _ctx.SReadoptions
                      }, null, 8, ["modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(QCardActions, { align: "right" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Save",
                        color: "primary",
                        onClick: _ctx.setReaderOptions
                      }, null, 8, ["onClick"]), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })), [
        [Ripple]
      ]),
      createVNode(QExpansionItem, {
        "expand-separator": "",
        icon: "backup",
        label: "Backup",
        "default-closed": ""
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createBlock(QItem, {
            clickable: "",
            class: "q-pl-xl",
            href: _ctx.serverAddr + `/api/v1/backup/export/file`
          }, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Create Backup")
                    ]),
                    _: 1
                  }),
                  createVNode(QItemLabel, { caption: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Backup library as a Tachiyomi backup")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["href"])), [
            [Ripple]
          ]),
          withDirectives((openBlock(), createBlock(QItem, {
            clickable: "",
            class: "q-pl-xl"
          }, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QUploader, {
                    url: _ctx.serverAddr + `/api/v1/backup/import/file`,
                    class: "q-ma-none",
                    label: "Upload Backup",
                    accept: ".proto.gz",
                    "field-name": "backup.proto.gz",
                    headers: [
                      {
                        name: "Authorization",
                        value: "Basic" + _ctx.btoa(_ctx.busr + ":" + _ctx.bpsw)
                      }
                    ],
                    "auto-upload": "",
                    style: { "width": "100%" }
                  }, null, 8, ["url", "headers"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })), [
            [Ripple]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["dark", "style-fn"]);
}
var settingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "settingsPage.vue"]]);
export { settingsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NQYWdlLjgwMjc1N2Q3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci91c2Utc2xpZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvUVNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvY2lyY3VsYXItcHJvZ3Jlc3MvdXNlLWNpcmN1bGFyLXByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaXJjdWxhci1wcm9ncmVzcy9RQ2lyY3VsYXJQcm9ncmVzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZpbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3VwbG9hZGVyL3VwbG9hZGVyLWNvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2dldC1lbWl0cy1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jcmVhdGUtdXBsb2FkZXItY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy91cGxvYWRlci94aHItdXBsb2FkZXItcGx1Z2luLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy91cGxvYWRlci9RVXBsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc2V0dGluZ3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbmplY3QgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBtYXJrZXJQcmVmaXhDbGFzcyA9ICdxLXNsaWRlcl9fbWFya2VyLWxhYmVscydcbmNvbnN0IGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4gPSB2ID0+ICh7IHZhbHVlOiB2IH0pXG5jb25zdCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGbiA9ICh7IG1hcmtlciB9KSA9PiBoKCdkaXYnLCB7XG4gIGtleTogbWFya2VyLnZhbHVlLFxuICBzdHlsZTogbWFya2VyLnN0eWxlLFxuICBjbGFzczogbWFya2VyLmNsYXNzZXNcbn0sIG1hcmtlci5sYWJlbClcblxuLy8gUEdET1dOLCBMRUZULCBET1dOLCBQR1VQLCBSSUdIVCwgVVBcbmV4cG9ydCBjb25zdCBrZXlDb2RlcyA9IFsgMzQsIDM3LCA0MCwgMzMsIDM5LCAzOCBdXG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuICBpbm5lck1pbjogTnVtYmVyLFxuICBpbm5lck1heDogTnVtYmVyLFxuXG4gIHN0ZXA6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwXG4gIH0sXG5cbiAgc25hcDogQm9vbGVhbixcblxuICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBoaWRlU2VsZWN0aW9uOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIG1hcmtlckxhYmVsc0NsYXNzOiBTdHJpbmcsXG5cbiAgbGFiZWw6IEJvb2xlYW4sXG4gIGxhYmVsQ29sb3I6IFN0cmluZyxcbiAgbGFiZWxUZXh0Q29sb3I6IFN0cmluZyxcbiAgbGFiZWxBbHdheXM6IEJvb2xlYW4sXG4gIHN3aXRjaExhYmVsU2lkZTogQm9vbGVhbixcblxuICBtYXJrZXJzOiBbIEJvb2xlYW4sIE51bWJlciBdLFxuICBtYXJrZXJMYWJlbHM6IFsgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRnVuY3Rpb24gXSxcbiAgc3dpdGNoTWFya2VyTGFiZWxzU2lkZTogQm9vbGVhbixcblxuICB0cmFja0ltZzogU3RyaW5nLFxuICB0cmFja0NvbG9yOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tJbWc6IFN0cmluZyxcbiAgaW5uZXJUcmFja0NvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkNvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkltZzogU3RyaW5nLFxuXG4gIHRodW1iU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnMjBweCdcbiAgfSxcbiAgdHJhY2tTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICc0cHgnXG4gIH0sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgdGh1bWJDb2xvcjogU3RyaW5nLFxuICB0aHVtYlBhdGg6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ00gNCwgMTAgYSA2LDYgMCAxLDAgMTIsMCBhIDYsNiAwIDEsMCAtMTIsMCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyRW1pdHMgPSBbICdwYW4nLCAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2hhbmdlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsIGZvcm1BdHRycyB9KSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHNsb3RzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICBjb25zdCBhY3RpdmUgPSByZWYoZmFsc2UpXG4gIGNvbnN0IHByZXZlbnRGb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGRyYWdnaW5nID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGF4aXMgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnLS12JyA6ICctLWgnKSlcbiAgY29uc3QgbGFiZWxTaWRlID0gY29tcHV0ZWQoKCkgPT4gJy0nICsgKHByb3BzLnN3aXRjaExhYmVsU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnKSlcblxuICBjb25zdCBpc1JldmVyc2VkID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IHByb3BzLnJldmVyc2UgPT09IHRydWVcbiAgICAgIDogcHJvcHMucmV2ZXJzZSAhPT0gKCRxLmxhbmcucnRsID09PSB0cnVlKVxuICApKVxuXG4gIGNvbnN0IGlubmVyTWluID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWluKSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1pbiA8IHByb3BzLm1pblxuICAgICAgPyBwcm9wcy5taW5cbiAgICAgIDogcHJvcHMuaW5uZXJNaW5cbiAgKSlcbiAgY29uc3QgaW5uZXJNYXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNYXgpID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWF4ID4gcHJvcHMubWF4XG4gICAgICA/IHByb3BzLm1heFxuICAgICAgOiBwcm9wcy5pbm5lck1heFxuICApKVxuXG4gIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWVcbiAgICAmJiBpbm5lck1pbi52YWx1ZSA8IGlubmVyTWF4LnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZGVjaW1hbHMgPSBjb21wdXRlZCgoKSA9PiAoU3RyaW5nKHByb3BzLnN0ZXApLnRyaW0oKS5zcGxpdCgnLicpWyAxIF0gfHwgJycpLmxlbmd0aClcbiAgY29uc3Qgc3RlcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5zdGVwID09PSAwID8gMSA6IHByb3BzLnN0ZXApKVxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IHx8IDAgOiAtMSkpXG5cbiAgY29uc3QgdHJhY2tMZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gIGNvbnN0IGlubmVyQmFyTGVuID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJNYXgudmFsdWUgLSBpbm5lck1pbi52YWx1ZSlcblxuICBjb25zdCBpbm5lck1pblJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1pbi52YWx1ZSkpXG4gIGNvbnN0IGlubmVyTWF4UmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWF4LnZhbHVlKSlcblxuICBjb25zdCBwb3NpdGlvblByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAnYm90dG9tJyA6ICd0b3AnKVxuICAgICAgOiAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICkpXG5cbiAgY29uc3Qgc2l6ZVByb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaGVpZ2h0JyA6ICd3aWR0aCcpKVxuICBjb25zdCB0aGlja25lc3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnKSlcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIHJvbGU6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpbm5lck1pbi52YWx1ZSxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogaW5uZXJNYXgudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlLFxuICAgICAgJ2RhdGEtc3RlcCc6IHByb3BzLnN0ZXBcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1yZWFkb25seScgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1zbGlkZXIgcS1zbGlkZXIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXItLSR7IGFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlIGlubGluZSBuby13cmFwIGBcbiAgICArIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdyb3cnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLXNsaWRlci0tZW5hYmxlZCcgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1lZGl0YWJsZScgOiAnJykpXG4gICAgKyAoZm9jdXMudmFsdWUgPT09ICdib3RoJyA/ICcgcS1zbGlkZXItLWZvY3VzJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbC1hbHdheXMnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRlbnNlIHEtc2xpZGVyLS1kZW5zZScgKyBheGlzLnZhbHVlIDogJycpXG4gIClcblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0keyBsYWJlbFNpZGUudmFsdWUgfWBcbiAgfVxuICBmdW5jdGlvbiBnZXRBeGlzQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfWBcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbkJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc2VsZWN0aW9uQ29sb3IgfHwgcHJvcHMuY29sb3JcbiAgICByZXR1cm4gJ3Etc2xpZGVyX19zZWxlY3Rpb24gYWJzb2x1dGUnXG4gICAgICArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpXG4gIH0pXG4gIGNvbnN0IG1hcmtlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCdtYXJrZXJzJykgKyAnIGFic29sdXRlIG92ZXJmbG93LWhpZGRlbicpXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ3RyYWNrLWNvbnRhaW5lcicpKVxuICBjb25zdCBwaW5DbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3BpbicpKVxuICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygnbGFiZWwnKSlcbiAgY29uc3QgdGV4dENvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygndGV4dC1jb250YWluZXInKSlcbiAgY29uc3QgbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgIGdldFBvc2l0aW9uQ2xhc3MoJ21hcmtlci1sYWJlbHMtY29udGFpbmVyJylcbiAgICArIChwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX190cmFjayByZWxhdGl2ZS1wb3NpdGlvbiBuby1vdXRsaW5lJ1xuICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyBbIHRoaWNrbmVzc1Byb3AudmFsdWUgXTogcHJvcHMudHJhY2tTaXplIH1cbiAgICBpZiAocHJvcHMudHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMudHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGlubmVyQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9faW5uZXIgYWJzb2x1dGUnXG4gICAgKyAocHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmlubmVyVHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IGlubmVyQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIGlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgWyBzaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKGlubmVyTWF4UmF0aW8udmFsdWUgLSBpbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICB9XG4gICAgaWYgKHByb3BzLmlubmVyVHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuaW5uZXJUcmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gY29udmVydFJhdGlvVG9Nb2RlbCAocmF0aW8pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSBwcm9wc1xuICAgIGxldCBtb2RlbCA9IG1pbiArIHJhdGlvICogKG1heCAtIG1pbilcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgY29uc3QgbW9kdWxvID0gKG1vZGVsIC0gbWluKSAlIHN0ZXBcbiAgICAgIG1vZGVsICs9IChNYXRoLmFicyhtb2R1bG8pID49IHN0ZXAgLyAyID8gKG1vZHVsbyA8IDAgPyAtMSA6IDEpICogc3RlcCA6IDApIC0gbW9kdWxvXG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxzLnZhbHVlID4gMCkge1xuICAgICAgbW9kZWwgPSBwYXJzZUZsb2F0KG1vZGVsLnRvRml4ZWQoZGVjaW1hbHMudmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiBiZXR3ZWVuKG1vZGVsLCBpbm5lck1pbi52YWx1ZSwgaW5uZXJNYXgudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TW9kZWxUb1JhdGlvIChtb2RlbCkge1xuICAgIHJldHVybiB0cmFja0xlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChtb2RlbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmdSYXRpbyAoZXZ0LCBkcmFnZ2luZykge1xuICAgIGNvbnN0XG4gICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgdmFsID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBiZXR3ZWVuKChwb3MudG9wIC0gZHJhZ2dpbmcudG9wKSAvIGRyYWdnaW5nLmhlaWdodCwgMCwgMSlcbiAgICAgICAgOiBiZXR3ZWVuKChwb3MubGVmdCAtIGRyYWdnaW5nLmxlZnQpIC8gZHJhZ2dpbmcud2lkdGgsIDAsIDEpXG5cbiAgICByZXR1cm4gYmV0d2VlbihcbiAgICAgIGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAxLjAgLSB2YWwgOiB2YWwsXG4gICAgICBpbm5lck1pblJhdGlvLnZhbHVlLFxuICAgICAgaW5uZXJNYXhSYXRpby52YWx1ZVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclN0ZXAgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOdW1iZXIocHJvcHMubWFya2VycykgPT09IHRydWUgPyBwcm9wcy5tYXJrZXJzIDogc3RlcC52YWx1ZSlcbiAgKVxuXG4gIGNvbnN0IG1hcmtlclRpY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IFtdXG4gICAgY29uc3Qgc3RlcCA9IG1hcmtlclN0ZXAudmFsdWVcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLm1pblxuICAgIGRvIHtcbiAgICAgIGFjYy5wdXNoKHZhbHVlKVxuICAgICAgdmFsdWUgKz0gc3RlcFxuICAgIH0gd2hpbGUgKHZhbHVlIDwgbWF4KVxuXG4gICAgYWNjLnB1c2gobWF4KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IGAgJHsgbWFya2VyUHJlZml4Q2xhc3MgfSR7IGF4aXMudmFsdWUgfS1gXG4gICAgcmV0dXJuIG1hcmtlclByZWZpeENsYXNzXG4gICAgICArIGAkeyBwcmVmaXggfSR7IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgKyBgJHsgcHJlZml4IH0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YFxuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc0xpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgcmV0dXJuIGdldE1hcmtlckxpc3QocHJvcHMubWFya2VyTGFiZWxzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKHtcbiAgICAgIGluZGV4LFxuICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlLFxuICAgICAgbGFiZWw6IGVudHJ5LmxhYmVsIHx8IGVudHJ5LnZhbHVlLFxuICAgICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZVxuICAgICAgICArIChlbnRyeS5jbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBlbnRyeS5jbGFzc2VzIDogJycpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uZ2V0TWFya2VyTGFiZWxTdHlsZShlbnRyeS52YWx1ZSksXG4gICAgICAgIC4uLihlbnRyeS5zdHlsZSB8fCB7fSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfSlcblxuICBjb25zdCBtYXJrZXJTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgbWFya2VyTGlzdDogbWFya2VyTGFiZWxzTGlzdC52YWx1ZSxcbiAgICBtYXJrZXJNYXA6IG1hcmtlckxhYmVsc01hcC52YWx1ZSxcbiAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlLCAvLyBUT0RPIHRzIGRlZmluaXRpb25cbiAgICBnZXRTdHlsZTogZ2V0TWFya2VyTGFiZWxTdHlsZVxuICB9KSlcblxuICBjb25zdCBtYXJrZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAoaW5uZXJCYXJMZW4udmFsdWUgIT09IDApIHtcbiAgICAgIGNvbnN0IHNpemUgPSAxMDAgKiBtYXJrZXJTdGVwLnZhbHVlIC8gaW5uZXJCYXJMZW4udmFsdWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5uZXJCYXJTdHlsZS52YWx1ZSxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgMnB4ICR7IHNpemUgfSVgXG4gICAgICAgICAgOiBgJHsgc2l6ZSB9JSAycHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMaXN0IChkZWYpIHtcbiAgICBpZiAoZGVmID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBpZiAoZGVmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGVmKHZhbHVlKVxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZuID0gKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gcHJvcHMubWluICYmIHZhbHVlIDw9IHByb3BzLm1heFxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRlZlxuICAgICAgICAubWFwKGl0ZW0gPT4gKGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8gaXRlbSA6IHsgdmFsdWU6IGl0ZW0gfSkpXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZikubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZGVmWyBrZXkgXVxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoa2V5KVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgIH0pLmZpbHRlcihmaWx0ZXJGbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsU3R5bGUgKHZhbCkge1xuICAgIHJldHVybiB7IFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAodmFsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlIH0lYCB9XG4gIH1cblxuICBjb25zdCBtYXJrZXJMYWJlbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgYWNjID0ge31cbiAgICBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgYWNjWyBlbnRyeS52YWx1ZSBdID0gZW50cnlcbiAgICB9KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbHNDb250ZW50ICgpIHtcbiAgICBpZiAoc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0gIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdKG1hcmtlclNjb3BlLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gc2xvdHNbICdtYXJrZXItbGFiZWwnIF0gfHwgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm5cbiAgICByZXR1cm4gbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5tYXAobWFya2VyID0+IGZuKHtcbiAgICAgIG1hcmtlcixcbiAgICAgIC4uLm1hcmtlclNjb3BlLnZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBwYW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIG9uUGFuLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBbIG9yaWVudGF0aW9uLnZhbHVlIF06IHRydWUsXG4gICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgIHN0b3A6IHRydWUsXG4gICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uUGFuIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICAgIC8vIG9ubHkgaWYgdG91Y2gsIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIG1vdXNlZG93bi91cDpcbiAgICAgICAgZXZlbnQudG91Y2ggPT09IHRydWUgJiYgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICAgICAgZHJhZ2dpbmcudmFsdWUgPSB2b2lkIDBcbiAgICAgICAgZW1pdCgncGFuJywgJ2VuZCcpXG4gICAgICB9XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuICAgICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICBkcmFnZ2luZy52YWx1ZSA9IGdldERyYWdnaW5nKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3BhbicsICdzdGFydCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKClcblxuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IHRydWVcbiAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EZWFjdGl2YXRlICgpIHtcbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIG9uQmx1cigpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2JpbGVDbGljayAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgICBpZiAoa2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRleHRDb250YWluZXJTdHlsZSAocmF0aW8pIHtcbiAgICBpZiAocHJvcHMudmVydGljYWwgPT09IHRydWUpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgcCA9ICRxLmxhbmcucnRsICE9PSBwcm9wcy5yZXZlcnNlID8gMSAtIHJhdGlvIDogcmF0aW9cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKCR7IDIgKiBwIC0gMSB9ICogJHsgcHJvcHMudGh1bWJTaXplIH0gLyAyICsgJHsgNTAgLSAxMDAgKiBwIH0lKSlgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGh1bWJSZW5kZXJGbiAodGh1bWIpIHtcbiAgICBjb25zdCBmb2N1c0NsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJldmVudEZvY3VzLnZhbHVlID09PSBmYWxzZSAmJiAoZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgfHwgZm9jdXMudmFsdWUgPT09ICdib3RoJylcbiAgICAgICAgPyAnIHEtc2xpZGVyLS1mb2N1cydcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNsaWRlcl9fdGh1bWIgcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfS0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9IGFic29sdXRlIG5vbi1zZWxlY3RhYmxlYFxuICAgICAgKyBmb2N1c0NsYXNzLnZhbHVlXG4gICAgICArICh0aHVtYi50aHVtYkNvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIudGh1bWJDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBoZWlnaHQ6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiB0aHVtYi5yYXRpby52YWx1ZSB9JWAsXG4gICAgICB6SW5kZXg6IGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlID8gMiA6IHZvaWQgMFxuICAgIH0pKVxuXG4gICAgY29uc3QgcGluQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0aHVtYi5sYWJlbENvbG9yLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxDb2xvci52YWx1ZSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHRleHRDb250YWluZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IGdldFRleHRDb250YWluZXJTdHlsZSh0aHVtYi5yYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zbGlkZXJfX3RleHQnXG4gICAgICArICh0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYkNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc2xpZGVyX190aHVtYi1zaGFwZSBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3BhdGgnLCB7IGQ6IHByb3BzLnRodW1iUGF0aCB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zbGlkZXJfX2ZvY3VzLXJpbmcgZml0JyB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgPT09IHRydWUgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUpIHtcbiAgICAgICAgdGh1bWJDb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHBpbkNsYXNzLnZhbHVlICsgJyBhYnNvbHV0ZSBmaXQgbm8tcG9pbnRlci1ldmVudHMnICsgcGluQ29sb3IudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogcHJvcHMudGh1bWJTaXplIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRleHRDb250YWluZXJTdHlsZS52YWx1ZVxuICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6IHRleHRDbGFzcy52YWx1ZSB9LCB0aHVtYi5sYWJlbC52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGluamVjdEZvcm1JbnB1dCh0aHVtYkNvbnRlbnQsICdwdXNoJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICAuLi50aHVtYi5nZXROb2RlRGF0YSgpXG4gICAgICB9LCB0aHVtYkNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoc2VsZWN0aW9uQmFyU3R5bGUsIHRyYWNrQ29udGFpbmVyVGFiaW5kZXgsIHRyYWNrQ29udGFpbmVyRXZlbnRzLCBpbmplY3RUaHVtYikge1xuICAgIGNvbnN0IHRyYWNrQ29udGVudCA9IFtdXG5cbiAgICBwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2lubmVyJyxcbiAgICAgICAgY2xhc3M6IGlubmVyQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbm5lckJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLnNlbGVjdGlvbkNvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxuICAgICAgICBjbGFzczogc2VsZWN0aW9uQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzZWxlY3Rpb25CYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5tYXJrZXJzICE9PSBmYWxzZSAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbWFya2VyJyxcbiAgICAgICAgY2xhc3M6IG1hcmtlckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogbWFya2VyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaW5qZWN0VGh1bWIodHJhY2tDb250ZW50KVxuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHJhY2tDJyxcbiAgICAgICAgICBjbGFzczogdHJhY2tDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogdHJhY2tDb250YWluZXJUYWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAuLi50cmFja0NvbnRhaW5lckV2ZW50cy52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIHRyYWNrQ29udGVudClcbiAgICAgICAgXSxcbiAgICAgICAgJ3NsaWRlJyxcbiAgICAgICAgZWRpdGFibGUudmFsdWUsICgpID0+IHBhbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgKVxuICAgIF1cblxuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlXG4gICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgIDogJ3B1c2gnXG5cbiAgICAgIGNvbnRlbnRbIGFjdGlvbiBdKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnbWFya2VyTCcsXG4gICAgICAgICAgY2xhc3M6IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzLnZhbHVlXG4gICAgICAgIH0sIGdldE1hcmtlckxhYmVsc0NvbnRlbnQoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGZvY3VzLFxuICAgICAgcHJldmVudEZvY3VzLFxuICAgICAgZHJhZ2dpbmcsXG5cbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRhYmluZGV4LFxuICAgICAgYXR0cmlidXRlcyxcblxuICAgICAgc3RlcCxcbiAgICAgIGRlY2ltYWxzLFxuICAgICAgdHJhY2tMZW4sXG4gICAgICBpbm5lck1pbixcbiAgICAgIGlubmVyTWluUmF0aW8sXG4gICAgICBpbm5lck1heCxcbiAgICAgIGlubmVyTWF4UmF0aW8sXG4gICAgICBwb3NpdGlvblByb3AsXG4gICAgICBzaXplUHJvcCxcbiAgICAgIGlzUmV2ZXJzZWRcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25BY3RpdmF0ZSxcbiAgICAgIG9uTW9iaWxlQ2xpY2ssXG4gICAgICBvbkJsdXIsXG4gICAgICBvbktleXVwLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFRodW1iUmVuZGVyRm4sXG4gICAgICBjb252ZXJ0UmF0aW9Ub01vZGVsLFxuICAgICAgY29udmVydE1vZGVsVG9SYXRpbyxcbiAgICAgIGdldERyYWdnaW5nUmF0aW9cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZUZvcm1BdHRycyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB1c2VTbGlkZXIsIHtcbiAgdXNlU2xpZGVyUHJvcHMsXG4gIHVzZVNsaWRlckVtaXRzLFxuICBrZXlDb2Rlc1xufSBmcm9tICcuL3VzZS1zbGlkZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IGdldE5vZGVEYXRhID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTbGlkZXJQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgdiA9PT0gbnVsbFxuICAgIH0sXG5cbiAgICBsYWJlbFZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogdXNlU2xpZGVyRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IHVzZVNsaWRlcih7XG4gICAgICB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLFxuICAgICAgZm9ybUF0dHJzOiB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgfSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjdXJSYXRpbyA9IHJlZigwKVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKDApXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVNb2RlbCAoKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBzdGF0ZS5pbm5lck1pbi52YWx1ZVxuICAgICAgICA6IGJldHdlZW4ocHJvcHMubW9kZWxWYWx1ZSwgc3RhdGUuaW5uZXJNaW4udmFsdWUsIHN0YXRlLmlubmVyTWF4LnZhbHVlKVxuICAgIH1cblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gYCR7IHByb3BzLm1vZGVsVmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1pbi52YWx1ZSB9fCR7IHN0YXRlLmlubmVyTWF4LnZhbHVlIH1gLFxuICAgICAgbm9ybWFsaXplTW9kZWxcbiAgICApXG5cbiAgICBub3JtYWxpemVNb2RlbCgpXG5cbiAgICBjb25zdCBtb2RlbFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKSlcbiAgICBjb25zdCByYXRpbyA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5hY3RpdmUudmFsdWUgPT09IHRydWUgPyBjdXJSYXRpby52YWx1ZSA6IG1vZGVsUmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIFsgc3RhdGUucG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgICAgWyBzdGF0ZS5zaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHJhdGlvLnZhbHVlIC0gc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuc2VsZWN0aW9uSW1nICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuc2VsZWN0aW9uSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFRodW1iID0gbWV0aG9kcy5nZXRUaHVtYlJlbmRlckZuKHtcbiAgICAgIGZvY3VzVmFsdWU6IHRydWUsXG4gICAgICBnZXROb2RlRGF0YSxcbiAgICAgIHJhdGlvLFxuICAgICAgbGFiZWw6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgcHJvcHMubGFiZWxWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFZhbHVlXG4gICAgICAgICAgOiBtb2RlbC52YWx1ZVxuICAgICAgKSksXG4gICAgICB0aHVtYkNvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy50aHVtYkNvbG9yIHx8IHByb3BzLmNvbG9yKSxcbiAgICAgIGxhYmVsQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsQ29sb3IpLFxuICAgICAgbGFiZWxUZXh0Q29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsVGV4dENvbG9yKVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFja0NvbnRhaW5lckV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogbWV0aG9kcy5vbk1vYmlsZUNsaWNrIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBvbk1vdXNlZG93bjogbWV0aG9kcy5vbkFjdGl2YXRlLFxuICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogbWV0aG9kcy5vbkJsdXIsXG4gICAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgICBvbktleXVwOiBtZXRob2RzLm9uS2V5dXBcbiAgICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChjaGFuZ2UpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSAhPT0gcHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsLnZhbHVlKVxuICAgICAgfVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERyYWdnaW5nICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKGV2ZW50LCBkcmFnZ2luZyA9IHN0YXRlLmRyYWdnaW5nLnZhbHVlKSB7XG4gICAgICBjb25zdCByYXRpbyA9IG1ldGhvZHMuZ2V0RHJhZ2dpbmdSYXRpbyhldmVudCwgZHJhZ2dpbmcpXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gbWV0aG9kcy5jb252ZXJ0UmF0aW9Ub01vZGVsKHJhdGlvKVxuXG4gICAgICBjdXJSYXRpby52YWx1ZSA9IHByb3BzLnNuYXAgIT09IHRydWUgfHwgcHJvcHMuc3RlcCA9PT0gMFxuICAgICAgICA/IHJhdGlvXG4gICAgICAgIDogbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXMgKCkge1xuICAgICAgc3RhdGUuZm9jdXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChldnQpIHtcbiAgICAgIGlmICgha2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHN0ZXBWYWwgPSAoWyAzNCwgMzMgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAxMCA6IDEpICogc3RhdGUuc3RlcC52YWx1ZSxcbiAgICAgICAgb2Zmc2V0ID0gKFxuICAgICAgICAgIChbIDM0LCAzNywgNDAgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAtMSA6IDEpXG4gICAgICAgICAgKiAoc3RhdGUuaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgICAqIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBzdGVwVmFsXG4gICAgICAgIClcblxuICAgICAgbW9kZWwudmFsdWUgPSBiZXR3ZWVuKFxuICAgICAgICBwYXJzZUZsb2F0KChtb2RlbC52YWx1ZSArIG9mZnNldCkudG9GaXhlZChzdGF0ZS5kZWNpbWFscy52YWx1ZSkpLFxuICAgICAgICBzdGF0ZS5pbm5lck1pbi52YWx1ZSxcbiAgICAgICAgc3RhdGUuaW5uZXJNYXgudmFsdWVcbiAgICAgIClcblxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWV0aG9kcy5nZXRDb250ZW50KFxuICAgICAgICBzZWxlY3Rpb25CYXJTdHlsZSxcbiAgICAgICAgc3RhdGUudGFiaW5kZXgsXG4gICAgICAgIHRyYWNrQ29udGFpbmVyRXZlbnRzLFxuICAgICAgICBub2RlID0+IHsgbm9kZS5wdXNoKGdldFRodW1iKCkpIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogc3RhdGUuY2xhc3Nlcy52YWx1ZSArIChwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsID8gJyBxLXNsaWRlci0tbm8tdmFsdWUnIDogJycpLFxuICAgICAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcblxuLy8gYWxzbyB1c2VkIGJ5IFFLbm9iXG5leHBvcnQgY29uc3QgdXNlQ2lyY3VsYXJDb21tb25Qcm9wcyA9IHtcbiAgLi4udXNlU2l6ZVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcblxuICBjb2xvcjogU3RyaW5nLFxuICBjZW50ZXJDb2xvcjogU3RyaW5nLFxuICB0cmFja0NvbG9yOiBTdHJpbmcsXG5cbiAgZm9udFNpemU6IFN0cmluZyxcbiAgcm91bmRlZDogQm9vbGVhbixcblxuICAvLyByYXRpb1xuICB0aGlja25lc3M6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMC4yLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID49IDAgJiYgdiA8PSAxXG4gIH0sXG5cbiAgYW5nbGU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuXG4gIHNob3dWYWx1ZTogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBpbnN0YW50RmVlZGJhY2s6IEJvb2xlYW5cbn1cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTaXplIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5pbXBvcnQgeyB1c2VDaXJjdWxhckNvbW1vblByb3BzIH0gZnJvbSAnLi91c2UtY2lyY3VsYXItcHJvZ3Jlc3MuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdFNhZmVseSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcblxuY29uc3RcbiAgcmFkaXVzID0gNTAsXG4gIGRpYW1ldGVyID0gMiAqIHJhZGl1cyxcbiAgY2lyY3VtZmVyZW5jZSA9IGRpYW1ldGVyICogTWF0aC5QSSxcbiAgc3Ryb2tlRGFzaEFycmF5ID0gTWF0aC5yb3VuZChjaXJjdW1mZXJlbmNlICogMTAwMCkgLyAxMDAwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ2lyY3VsYXJQcm9ncmVzcycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VDaXJjdWxhckNvbW1vblByb3BzLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uU3BlZWQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDYwMFxuICAgIH0sXG5cbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcylcblxuICAgIGNvbnN0IHN2Z1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogcHJvcHMuYW5nbGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICAgICAgICAgPyBgc2NhbGUzZCgtMSwgMSwgMSkgcm90YXRlM2QoMCwgMCwgMSwgJHsgLTkwIC0gYW5nbGUgfWRlZylgXG4gICAgICAgICAgOiBgcm90YXRlM2QoMCwgMCwgMSwgJHsgYW5nbGUgLSA5MCB9ZGVnKWBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2lyY2xlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pbnN0YW50RmVlZGJhY2sgIT09IHRydWUgJiYgcHJvcHMuaW5kZXRlcm1pbmF0ZSAhPT0gdHJ1ZVxuICAgICAgICA/IHsgdHJhbnNpdGlvbjogYHN0cm9rZS1kYXNob2Zmc2V0ICR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tcyBlYXNlIDBzLCBzdHJva2UgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zIGVhc2VgIH1cbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCB2aWV3Qm94ID0gY29tcHV0ZWQoKCkgPT4gZGlhbWV0ZXIgLyAoMSAtIHByb3BzLnRoaWNrbmVzcyAvIDIpKVxuXG4gICAgY29uc3Qgdmlld0JveEF0dHIgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYCR7IHZpZXdCb3gudmFsdWUgLyAyIH0gJHsgdmlld0JveC52YWx1ZSAvIDIgfSAkeyB2aWV3Qm94LnZhbHVlIH0gJHsgdmlld0JveC52YWx1ZSB9YFxuICAgIClcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBjb21wdXRlZCgoKSA9PiBiZXR3ZWVuKHByb3BzLnZhbHVlLCBwcm9wcy5taW4sIHByb3BzLm1heCkpXG5cbiAgICBjb25zdCBzdHJva2VEYXNoT2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4gY2lyY3VtZmVyZW5jZSAqIChcbiAgICAgIDEgLSAobm9ybWFsaXplZC52YWx1ZSAtIHByb3BzLm1pbikgLyAocHJvcHMubWF4IC0gcHJvcHMubWluKVxuICAgICkpXG5cbiAgICBjb25zdCBzdHJva2VXaWR0aCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRoaWNrbmVzcyAvIDIgKiB2aWV3Qm94LnZhbHVlKVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2lyY2xlICh7IHRoaWNrbmVzcywgb2Zmc2V0LCBjb2xvciwgY2xzLCByb3VuZGVkIH0pIHtcbiAgICAgIHJldHVybiBoKCdjaXJjbGUnLCB7XG4gICAgICAgIGNsYXNzOiAncS1jaXJjdWxhci1wcm9ncmVzc19fJyArIGNscyArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpLFxuICAgICAgICBzdHlsZTogY2lyY2xlU3R5bGUudmFsdWUsXG4gICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiB0aGlja25lc3MsXG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5Jzogc3Ryb2tlRGFzaEFycmF5LFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICdzdHJva2UtbGluZWNhcCc6IHJvdW5kZWQsXG4gICAgICAgIGN4OiB2aWV3Qm94LnZhbHVlLFxuICAgICAgICBjeTogdmlld0JveC52YWx1ZSxcbiAgICAgICAgcjogcmFkaXVzXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBzdmdDaGlsZCA9IFtdXG5cbiAgICAgIHByb3BzLmNlbnRlckNvbG9yICE9PSB2b2lkIDAgJiYgcHJvcHMuY2VudGVyQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgc3ZnQ2hpbGQucHVzaChcbiAgICAgICAgaCgnY2lyY2xlJywge1xuICAgICAgICAgIGNsYXNzOiBgcS1jaXJjdWxhci1wcm9ncmVzc19fY2VudGVyIHRleHQtJHsgcHJvcHMuY2VudGVyQ29sb3IgfWAsXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgcjogcmFkaXVzIC0gc3Ryb2tlV2lkdGgudmFsdWUgLyAyLFxuICAgICAgICAgIGN4OiB2aWV3Qm94LnZhbHVlLFxuICAgICAgICAgIGN5OiB2aWV3Qm94LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCAmJiBwcm9wcy50cmFja0NvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHN2Z0NoaWxkLnB1c2goXG4gICAgICAgIGdldENpcmNsZSh7XG4gICAgICAgICAgY2xzOiAndHJhY2snLFxuICAgICAgICAgIHRoaWNrbmVzczogc3Ryb2tlV2lkdGgudmFsdWUsXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy50cmFja0NvbG9yXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHN2Z0NoaWxkLnB1c2goXG4gICAgICAgIGdldENpcmNsZSh7XG4gICAgICAgICAgY2xzOiAnY2lyY2xlJyxcbiAgICAgICAgICB0aGlja25lc3M6IHN0cm9rZVdpZHRoLnZhbHVlLFxuICAgICAgICAgIG9mZnNldDogc3Ryb2tlRGFzaE9mZnNldC52YWx1ZSxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICdyb3VuZCcgOiB2b2lkIDBcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2lyY3VsYXItcHJvZ3Jlc3NfX3N2ZycsXG4gICAgICAgICAgc3R5bGU6IHN2Z1N0eWxlLnZhbHVlLFxuICAgICAgICAgIHZpZXdCb3g6IHZpZXdCb3hBdHRyLnZhbHVlLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBzdmdDaGlsZClcbiAgICAgIF1cblxuICAgICAgcHJvcHMuc2hvd1ZhbHVlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2lyY3VsYXItcHJvZ3Jlc3NfX3RleHQgYWJzb2x1dGUtZnVsbCByb3cgZmxleC1jZW50ZXIgY29udGVudC1jZW50ZXInLFxuICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiBwcm9wcy5mb250U2l6ZSB9XG4gICAgICAgIH0sIHNsb3RzLmRlZmF1bHQgIT09IHZvaWQgMCA/IHNsb3RzLmRlZmF1bHQoKSA6IFsgaCgnZGl2Jywgbm9ybWFsaXplZC52YWx1ZSkgXSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGBxLWNpcmN1bGFyLXByb2dyZXNzIHEtY2lyY3VsYXItcHJvZ3Jlc3MtLSR7IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYCxcbiAgICAgICAgc3R5bGU6IHNpemVTdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBwcm9wcy5taW4sXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogcHJvcHMubWF4LFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWUgPyB2b2lkIDAgOiBub3JtYWxpemVkLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90U2FmZWx5KHNsb3RzLmludGVybmFsLCBjaGlsZCkpIC8vIFwiaW50ZXJuYWxcIiBpcyB1c2VkIGJ5IFFLbm9iXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgc3RvcCwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuZnVuY3Rpb24gZmlsdGVyRmlsZXMgKGZpbGVzLCByZWplY3RlZEZpbGVzLCBmYWlsZWRQcm9wVmFsaWRhdGlvbiwgZmlsdGVyRm4pIHtcbiAgY29uc3QgYWNjZXB0ZWRGaWxlcyA9IFtdXG5cbiAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICBpZiAoZmlsdGVyRm4oZmlsZSkgPT09IHRydWUpIHtcbiAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlamVjdGVkRmlsZXMucHVzaCh7IGZhaWxlZFByb3BWYWxpZGF0aW9uLCBmaWxlIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBhY2NlcHRlZEZpbGVzXG59XG5cbmZ1bmN0aW9uIHN0b3BBbmRQcmV2ZW50RHJhZyAoZSkge1xuICBlICYmIGUuZGF0YVRyYW5zZmVyICYmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknKVxuICBzdG9wQW5kUHJldmVudChlKVxufVxuXG5leHBvcnQgY29uc3QgdXNlRmlsZVByb3BzID0ge1xuICBtdWx0aXBsZTogQm9vbGVhbixcbiAgYWNjZXB0OiBTdHJpbmcsXG4gIGNhcHR1cmU6IFN0cmluZyxcbiAgbWF4RmlsZVNpemU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgbWF4VG90YWxTaXplOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gIG1heEZpbGVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gIGZpbHRlcjogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZpbGVFbWl0cyA9IFsgJ3JlamVjdGVkJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7XG4gIGVkaXRhYmxlLFxuICBkbmQsXG4gIGdldEZpbGVJbnB1dCxcbiAgYWRkRmlsZXNUb1F1ZXVlXG59KSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGRuZFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IGV4dGVuc2lvbnMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuYWNjZXB0ICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMuYWNjZXB0LnNwbGl0KCcsJykubWFwKGV4dCA9PiB7XG4gICAgICAgIGV4dCA9IGV4dC50cmltKClcbiAgICAgICAgaWYgKGV4dCA9PT0gJyonKSB7IC8vIHN1cHBvcnQgXCIqXCJcbiAgICAgICAgICByZXR1cm4gJyovJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV4dC5lbmRzV2l0aCgnLyonKSkgeyAvLyBzdXBwb3J0IFwiaW1hZ2UvKlwiIG9yIFwiKi8qXCJcbiAgICAgICAgICBleHQgPSBleHQuc2xpY2UoMCwgZXh0Lmxlbmd0aCAtIDEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dC50b1VwcGVyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG4gICkpXG5cbiAgY29uc3QgbWF4RmlsZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXhGaWxlcywgMTApKVxuICBjb25zdCBtYXhUb3RhbFNpemVOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXhUb3RhbFNpemUsIDEwKSlcblxuICBmdW5jdGlvbiBwaWNrRmlsZXMgKGUpIHtcbiAgICBpZiAoZWRpdGFibGUudmFsdWUpIHtcbiAgICAgIGlmIChlICE9PSBPYmplY3QoZSkpIHtcbiAgICAgICAgZSA9IHsgdGFyZ2V0OiBudWxsIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBudWxsICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykgPT09IHRydWUpIHtcbiAgICAgICAgLy8gc3RvcCBwcm9wYWdhdGlvbiBpZiBpdCdzIG5vdCBhIHJlYWwgcG9pbnRlciBldmVudFxuICAgICAgICBlLmNsaWVudFggPT09IDAgJiYgZS5jbGllbnRZID09PSAwICYmIHN0b3AoZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGdldEZpbGVJbnB1dCgpXG4gICAgICAgIGlucHV0ICYmIGlucHV0ICE9PSBlLnRhcmdldCAmJiBpbnB1dC5jbGljayhlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEZpbGVzIChmaWxlcykge1xuICAgIGlmIChlZGl0YWJsZS52YWx1ZSAmJiBmaWxlcykge1xuICAgICAgYWRkRmlsZXNUb1F1ZXVlKG51bGwsIGZpbGVzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWxlcyAoZSwgZmlsZXNUb1Byb2Nlc3MsIGN1cnJlbnRGaWxlTGlzdCwgYXBwZW5kKSB7XG4gICAgbGV0IGZpbGVzID0gQXJyYXkuZnJvbShmaWxlc1RvUHJvY2VzcyB8fCBlLnRhcmdldC5maWxlcylcbiAgICBjb25zdCByZWplY3RlZEZpbGVzID0gW11cblxuICAgIGNvbnN0IGRvbmUgPSAoKSA9PiB7XG4gICAgICBpZiAocmVqZWN0ZWRGaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVtaXQoJ3JlamVjdGVkJywgcmVqZWN0ZWRGaWxlcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgZmlsZSB0eXBlc1xuICAgIGlmIChwcm9wcy5hY2NlcHQgIT09IHZvaWQgMCAmJiBleHRlbnNpb25zLnZhbHVlLmluZGV4T2YoJyovJykgPT09IC0xKSB7XG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnYWNjZXB0JywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBleHRlbnNpb25zLnZhbHVlLnNvbWUoZXh0ID0+IChcbiAgICAgICAgICBmaWxlLnR5cGUudG9VcHBlckNhc2UoKS5zdGFydHNXaXRoKGV4dClcbiAgICAgICAgICB8fCBmaWxlLm5hbWUudG9VcHBlckNhc2UoKS5lbmRzV2l0aChleHQpXG4gICAgICAgICkpXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGZpbHRlciBtYXggZmlsZSBzaXplXG4gICAgaWYgKHByb3BzLm1heEZpbGVTaXplICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IG1heEZpbGVTaXplID0gcGFyc2VJbnQocHJvcHMubWF4RmlsZVNpemUsIDEwKVxuICAgICAgZmlsZXMgPSBmaWx0ZXJGaWxlcyhmaWxlcywgcmVqZWN0ZWRGaWxlcywgJ21heC1maWxlLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbGUuc2l6ZSA8PSBtYXhGaWxlU2l6ZVxuICAgICAgfSlcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cbiAgICB9XG5cbiAgICAvLyBDb3Jkb3ZhL2lPUyBhbGxvd3Mgc2VsZWN0aW5nIG11bHRpcGxlIGZpbGVzIGV2ZW4gd2hlbiB0aGVcbiAgICAvLyBtdWx0aXBsZSBhdHRyaWJ1dGUgaXMgbm90IHNwZWNpZmllZC4gV2UgYWxzbyBub3JtYWxpemUgZHJhZyduJ2Ryb3BwZWRcbiAgICAvLyBmaWxlcyBoZXJlOlxuICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaWxlcyA9IFsgZmlsZXNbIDAgXSBdXG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBrZXkgdG8gdXNlIGZvciBlYWNoIGZpbGVcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS5fX2tleSA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoICsgZmlsZS5sYXN0TW9kaWZpZWQgKyBmaWxlLm5hbWUgKyBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgaWYgKGFwcGVuZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZpbGVzXG4gICAgICBjb25zdCBmaWxlbmFtZU1hcCA9IGN1cnJlbnRGaWxlTGlzdC5tYXAoZW50cnkgPT4gZW50cnkuX19rZXkpXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnZHVwbGljYXRlJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZU1hcC5pbmNsdWRlcyhmaWxlLl9fa2V5KSA9PT0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cblxuICAgIGlmIChwcm9wcy5tYXhUb3RhbFNpemUgIT09IHZvaWQgMCkge1xuICAgICAgbGV0IHNpemUgPSBhcHBlbmQgPT09IHRydWVcbiAgICAgICAgPyBjdXJyZW50RmlsZUxpc3QucmVkdWNlKCh0b3RhbCwgZmlsZSkgPT4gdG90YWwgKyBmaWxlLnNpemUsIDApXG4gICAgICAgIDogMFxuXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnbWF4LXRvdGFsLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgcmV0dXJuIHNpemUgPD0gbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgY3VzdG9tIGZpbHRlciBmdW5jdGlvbj9cbiAgICBpZiAodHlwZW9mIHByb3BzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb3BzLmZpbHRlcihmaWxlcylcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdmaWx0ZXInLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRmlsZXMuaW5jbHVkZXMoZmlsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1heEZpbGVzICE9PSB2b2lkIDApIHtcbiAgICAgIGxldCBmaWxlc051bWJlciA9IGFwcGVuZCA9PT0gdHJ1ZVxuICAgICAgICA/IGN1cnJlbnRGaWxlTGlzdC5sZW5ndGhcbiAgICAgICAgOiAwXG5cbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZXMnLCAoKSA9PiB7XG4gICAgICAgIGZpbGVzTnVtYmVyKytcbiAgICAgICAgcmV0dXJuIGZpbGVzTnVtYmVyIDw9IG1heEZpbGVzTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIGRvbmUoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmaWxlc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ292ZXIgKGUpIHtcbiAgICBzdG9wQW5kUHJldmVudERyYWcoZSlcbiAgICBkbmQudmFsdWUgIT09IHRydWUgJiYgKGRuZC52YWx1ZSA9IHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdsZWF2ZSAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50KGUpXG5cbiAgICAvLyBTYWZhcmkgYnVnOiByZWxhdGVkVGFyZ2V0IGlzIG51bGwgZm9yIG92ZXIgMTAgeWVhcnNcbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjY1NDdcbiAgICBjb25zdCBnb25lID0gZS5yZWxhdGVkVGFyZ2V0ICE9PSBudWxsIHx8IGNsaWVudC5pcy5zYWZhcmkgIT09IHRydWVcbiAgICAgID8gZS5yZWxhdGVkVGFyZ2V0ICE9PSBkbmRSZWYudmFsdWVcbiAgICAgIDogZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpLmluY2x1ZGVzKGRuZFJlZi52YWx1ZSkgPT09IGZhbHNlXG5cbiAgICBnb25lID09PSB0cnVlICYmIChkbmQudmFsdWUgPSBmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcCAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50RHJhZyhlKVxuICAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNcblxuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBhZGRGaWxlc1RvUXVldWUobnVsbCwgZmlsZXMpXG4gICAgfVxuXG4gICAgZG5kLnZhbHVlID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERuZE5vZGUgKHR5cGUpIHtcbiAgICBpZiAoZG5kLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IGRuZFJlZixcbiAgICAgICAgY2xhc3M6IGBxLSR7IHR5cGUgfV9fZG5kIGFic29sdXRlLWZ1bGxgLFxuICAgICAgICBvbkRyYWdlbnRlcjogc3RvcEFuZFByZXZlbnREcmFnLFxuICAgICAgICBvbkRyYWdvdmVyOiBzdG9wQW5kUHJldmVudERyYWcsXG4gICAgICAgIG9uRHJhZ2xlYXZlLFxuICAgICAgICBvbkRyb3BcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgcGlja0ZpbGVzLCBhZGRGaWxlcyB9KVxuXG4gIHJldHVybiB7XG4gICAgcGlja0ZpbGVzLFxuICAgIGFkZEZpbGVzLFxuICAgIG9uRHJhZ292ZXIsXG4gICAgb25EcmFnbGVhdmUsXG4gICAgcHJvY2Vzc0ZpbGVzLFxuICAgIGdldERuZE5vZGUsXG5cbiAgICBtYXhGaWxlc051bWJlcixcbiAgICBtYXhUb3RhbFNpemVOdW1iZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBpc1JlZiwgY29tcHV0ZWQsIHdhdGNoLCBwcm92aWRlLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuaW1wb3J0IFFDaXJjdWxhclByb2dyZXNzIGZyb20gJy4uL2NpcmN1bGFyLXByb2dyZXNzL1FDaXJjdWxhclByb2dyZXNzLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZUZpbGUsIHsgdXNlRmlsZVByb3BzLCB1c2VGaWxlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWxlLmpzJ1xuXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBodW1hblN0b3JhZ2VTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgdXBsb2FkZXJLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyB2bUlzRGVzdHJveWVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NMYWJlbCAocCkge1xuICByZXR1cm4gKHAgKiAxMDApLnRvRml4ZWQoMikgKyAnJSdcbn1cblxuZXhwb3J0IGNvbnN0IGNvcmVQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGaWxlUHJvcHMsXG5cbiAgbGFiZWw6IFN0cmluZyxcblxuICBjb2xvcjogU3RyaW5nLFxuICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICBzcXVhcmU6IEJvb2xlYW4sXG4gIGZsYXQ6IEJvb2xlYW4sXG4gIGJvcmRlcmVkOiBCb29sZWFuLFxuXG4gIG5vVGh1bWJuYWlsczogQm9vbGVhbixcbiAgYXV0b1VwbG9hZDogQm9vbGVhbixcbiAgaGlkZVVwbG9hZEJ0bjogQm9vbGVhbixcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgY29yZUVtaXRzID0gW1xuICAuLi51c2VGaWxlRW1pdHMsXG4gICdzdGFydCcsICdmaW5pc2gnLCAnYWRkZWQnLCAncmVtb3ZlZCdcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlcmVyIChnZXRQbHVnaW4pIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBzbG90cywgZW1pdCwgcHJveHkgfSA9IHZtXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgZnVuY3Rpb24gdXBkYXRlRmlsZVN0YXR1cyAoZmlsZSwgc3RhdHVzLCB1cGxvYWRlZFNpemUpIHtcbiAgICBmaWxlLl9fc3RhdHVzID0gc3RhdHVzXG5cbiAgICBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgIGZpbGUuX191cGxvYWRlZCA9IDBcbiAgICAgIGZpbGUuX19wcm9ncmVzcyA9IDBcbiAgICAgIGZpbGUuX19zaXplTGFiZWwgPSBodW1hblN0b3JhZ2VTaXplKGZpbGUuc2l6ZSlcbiAgICAgIGZpbGUuX19wcm9ncmVzc0xhYmVsID0gJzAuMDAlJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09ICdmYWlsZWQnKSB7XG4gICAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZmlsZS5fX3VwbG9hZGVkID0gc3RhdHVzID09PSAndXBsb2FkZWQnXG4gICAgICA/IGZpbGUuc2l6ZVxuICAgICAgOiB1cGxvYWRlZFNpemVcblxuICAgIGZpbGUuX19wcm9ncmVzcyA9IHN0YXR1cyA9PT0gJ3VwbG9hZGVkJ1xuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWluKDAuOTk5OSwgZmlsZS5fX3VwbG9hZGVkIC8gZmlsZS5zaXplKVxuXG4gICAgZmlsZS5fX3Byb2dyZXNzTGFiZWwgPSBnZXRQcm9ncmVzc0xhYmVsKGZpbGUuX19wcm9ncmVzcylcbiAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICB9XG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlKVxuICBjb25zdCBkbmQgPSByZWYoZmFsc2UpXG5cbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCBpbnB1dFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIGZpbGVzOiByZWYoW10pLFxuICAgIHF1ZXVlZEZpbGVzOiByZWYoW10pLFxuICAgIHVwbG9hZGVkRmlsZXM6IHJlZihbXSksXG4gICAgdXBsb2FkZWRTaXplOiByZWYoMCksXG5cbiAgICB1cGRhdGVGaWxlU3RhdHVzLFxuICAgIGlzQWxpdmU6ICgpID0+IHZtSXNEZXN0cm95ZWQodm0pID09PSBmYWxzZVxuICB9XG5cbiAgY29uc3Qge1xuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcbiAgICBvbkRyYWdvdmVyLFxuICAgIG9uRHJhZ2xlYXZlLFxuICAgIHByb2Nlc3NGaWxlcyxcbiAgICBnZXREbmROb2RlLFxuICAgIG1heEZpbGVzTnVtYmVyLFxuICAgIG1heFRvdGFsU2l6ZU51bWJlclxuICB9ID0gdXNlRmlsZSh7IGVkaXRhYmxlLCBkbmQsIGdldEZpbGVJbnB1dCwgYWRkRmlsZXNUb1F1ZXVlIH0pXG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgZ2V0UGx1Z2luKHsgcHJvcHMsIHNsb3RzLCBlbWl0LCBoZWxwZXJzOiBzdGF0ZSB9KSlcblxuICBpZiAoc3RhdGUuaXNCdXN5ID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZS5pc0J1c3kgPSByZWYoZmFsc2UpXG4gIH1cblxuICBjb25zdCB1cGxvYWRTaXplID0gcmVmKDApXG4gIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHVwbG9hZFNpemUudmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiBzdGF0ZS51cGxvYWRlZFNpemUudmFsdWUgLyB1cGxvYWRTaXplLnZhbHVlXG4gICkpXG4gIGNvbnN0IHVwbG9hZFByb2dyZXNzTGFiZWwgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9ncmVzc0xhYmVsKHVwbG9hZFByb2dyZXNzLnZhbHVlKSlcbiAgY29uc3QgdXBsb2FkU2l6ZUxhYmVsID0gY29tcHV0ZWQoKCkgPT4gaHVtYW5TdG9yYWdlU2l6ZSh1cGxvYWRTaXplLnZhbHVlKSlcblxuICBjb25zdCBjYW5BZGRGaWxlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICAmJiBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSAhPT0gdHJ1ZVxuICAgIC8vIGlmIHNpbmdsZSBzZWxlY3Rpb24gYW5kIG5vIGZpbGVzIGFyZSBxdWV1ZWQ6XG4gICAgJiYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlIHx8IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAvLyBpZiBtYXgtZmlsZXMgaXMgc2V0IGFuZCBjdXJyZW50IG51bWJlciBvZiBmaWxlcyBkb2VzIG5vdCBleGNlZWRzIGl0OlxuICAgICYmIChwcm9wcy5tYXhGaWxlcyA9PT0gdm9pZCAwIHx8IHN0YXRlLmZpbGVzLnZhbHVlLmxlbmd0aCA8IG1heEZpbGVzTnVtYmVyLnZhbHVlKVxuICAgIC8vIGlmIG1heC10b3RhbC1zaXplIGlzIHNldCBhbmQgY3VycmVudCB1cGxvYWQgc2l6ZSBkb2VzIG5vdCBleGNlZWRzIGl0OlxuICAgICYmIChwcm9wcy5tYXhUb3RhbFNpemUgPT09IHZvaWQgMCB8fCB1cGxvYWRTaXplLnZhbHVlIDwgbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlKVxuICApXG5cbiAgY29uc3QgY2FuVXBsb2FkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzQnVzeS52YWx1ZSAhPT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgc3RhdGUucXVldWVkRmlsZXMudmFsdWUubGVuZ3RoID4gMFxuICApXG5cbiAgcHJvdmlkZSh1cGxvYWRlcktleSwgcmVuZGVySW5wdXQpXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdXBsb2FkZXIgY29sdW1uIG5vLXdyYXAnXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tYm9yZGVyZWQnIDogJycpXG4gICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1zcXVhcmUgbm8tYm9yZGVyLXJhZGl1cycgOiAnJylcbiAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1mbGF0IG5vLXNoYWRvdycgOiAnJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCBxLXVwbG9hZGVyLS1kaXNhYmxlJyA6ICcnKVxuICAgICsgKGRuZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tZG5kJyA6ICcnKVxuICApXG5cbiAgY29uc3QgY29sb3JDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdXBsb2FkZXJfX2hlYWRlcidcbiAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICsgKHByb3BzLnRleHRDb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YCA6ICcnKVxuICApXG5cbiAgd2F0Y2goc3RhdGUuaXNVcGxvYWRpbmcsIChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgIGlmIChvbGRWYWwgPT09IGZhbHNlICYmIG5ld1ZhbCA9PT0gdHJ1ZSkge1xuICAgICAgZW1pdCgnc3RhcnQnKVxuICAgIH1cbiAgICBlbHNlIGlmIChvbGRWYWwgPT09IHRydWUgJiYgbmV3VmFsID09PSBmYWxzZSkge1xuICAgICAgZW1pdCgnZmluaXNoJylcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSBmYWxzZSkge1xuICAgICAgc3RhdGUuYWJvcnQoKVxuICAgICAgc3RhdGUudXBsb2FkZWRTaXplLnZhbHVlID0gMFxuICAgICAgdXBsb2FkU2l6ZS52YWx1ZSA9IDBcbiAgICAgIHJldm9rZUltZ1VSTHMoKVxuICAgICAgc3RhdGUuZmlsZXMudmFsdWUgPSBbXVxuICAgICAgc3RhdGUucXVldWVkRmlsZXMudmFsdWUgPSBbXVxuICAgICAgc3RhdGUudXBsb2FkZWRGaWxlcy52YWx1ZSA9IFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVXBsb2FkZWRGaWxlcyAoKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IGZhbHNlKSB7XG4gICAgICBiYXRjaFJlbW92ZUZpbGVzKFsgJ3VwbG9hZGVkJyBdLCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBbXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVRdWV1ZWRGaWxlcyAoKSB7XG4gICAgYmF0Y2hSZW1vdmVGaWxlcyhbICdpZGxlJywgJ2ZhaWxlZCcgXSwgKHsgc2l6ZSB9KSA9PiB7XG4gICAgICB1cGxvYWRTaXplLnZhbHVlIC09IHNpemVcbiAgICAgIHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlID0gW11cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYmF0Y2hSZW1vdmVGaWxlcyAoc3RhdHVzTGlzdCwgY2IpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlZCA9IHtcbiAgICAgIGZpbGVzOiBbXSxcbiAgICAgIHNpemU6IDBcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbEZpbGVzID0gc3RhdGUuZmlsZXMudmFsdWUuZmlsdGVyKGYgPT4ge1xuICAgICAgaWYgKHN0YXR1c0xpc3QuaW5kZXhPZihmLl9fc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlZC5zaXplICs9IGYuc2l6ZVxuICAgICAgcmVtb3ZlZC5maWxlcy5wdXNoKGYpXG5cbiAgICAgIGYuX19pbWcgIT09IHZvaWQgMCAmJiB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChmLl9faW1nLnNyYylcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmIChyZW1vdmVkLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXRlLmZpbGVzLnZhbHVlID0gbG9jYWxGaWxlc1xuICAgICAgY2IocmVtb3ZlZClcbiAgICAgIGVtaXQoJ3JlbW92ZWQnLCByZW1vdmVkLmZpbGVzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZpbGUgKGZpbGUpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSkgeyByZXR1cm4gfVxuXG4gICAgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcpIHtcbiAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgICBmaWxlLl9fYWJvcnQoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgLT0gZmlsZS5zaXplXG4gICAgfVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5maWx0ZXIoZiA9PiB7XG4gICAgICBpZiAoZi5fX2tleSAhPT0gZmlsZS5fX2tleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBmLl9faW1nICE9PSB2b2lkIDAgJiYgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZi5fX2ltZy5zcmMpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgZW1pdCgncmVtb3ZlZCcsIFsgZmlsZSBdKVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2b2tlSW1nVVJMcyAoKSB7XG4gICAgc3RhdGUuZmlsZXMudmFsdWUuZm9yRWFjaChmID0+IHtcbiAgICAgIGYuX19pbWcgIT09IHZvaWQgMCAmJiB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChmLl9faW1nLnNyYylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmlsZUlucHV0ICgpIHtcbiAgICByZXR1cm4gaW5wdXRSZWYudmFsdWVcbiAgICAgIHx8IHJvb3RSZWYudmFsdWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncS11cGxvYWRlcl9faW5wdXQnKVsgMCBdXG4gIH1cblxuICBmdW5jdGlvbiBhZGRGaWxlc1RvUXVldWUgKGUsIGZpbGVMaXN0KSB7XG4gICAgY29uc3QgbG9jYWxGaWxlcyA9IHByb2Nlc3NGaWxlcyhlLCBmaWxlTGlzdCwgc3RhdGUuZmlsZXMudmFsdWUsIHRydWUpXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZ2V0RmlsZUlucHV0KClcblxuICAgIGlmIChmaWxlSW5wdXQgIT09IHZvaWQgMCAmJiBmaWxlSW5wdXQgIT09IG51bGwpIHtcbiAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgaWYgKGxvY2FsRmlsZXMgPT09IHZvaWQgMCkgeyByZXR1cm4gfVxuXG4gICAgbG9jYWxGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgc3RhdGUudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAnaWRsZScpXG4gICAgICB1cGxvYWRTaXplLnZhbHVlICs9IGZpbGUuc2l6ZVxuXG4gICAgICBpZiAocHJvcHMubm9UaHVtYm5haWxzICE9PSB0cnVlICYmIGZpbGUudHlwZS50b1VwcGVyQ2FzZSgpLnN0YXJ0c1dpdGgoJ0lNQUdFJykpIHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgIGZpbGUuX19pbWcgPSBpbWdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5jb25jYXQobG9jYWxGaWxlcylcbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmNvbmNhdChsb2NhbEZpbGVzKVxuICAgIGVtaXQoJ2FkZGVkJywgbG9jYWxGaWxlcylcbiAgICBwcm9wcy5hdXRvVXBsb2FkID09PSB0cnVlICYmIHN0YXRlLnVwbG9hZCgpXG4gIH1cblxuICBmdW5jdGlvbiB1cGxvYWQgKCkge1xuICAgIGNhblVwbG9hZC52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS51cGxvYWQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QnRuIChzaG93LCBpY29uLCBmbikge1xuICAgIGlmIChzaG93ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0eXBlOiAnYScsXG4gICAgICAgIGtleTogaWNvbixcbiAgICAgICAgaWNvbjogJHEuaWNvblNldC51cGxvYWRlclsgaWNvbiBdLFxuICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICBkZW5zZTogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGQgPSB2b2lkIDBcblxuICAgICAgaWYgKGljb24gPT09ICdhZGQnKSB7XG4gICAgICAgIGRhdGEub25DbGljayA9IHBpY2tGaWxlc1xuICAgICAgICBjaGlsZCA9IHJlbmRlcklucHV0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gZm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySW5wdXQgKCkge1xuICAgIHJldHVybiBoKCdpbnB1dCcsIHtcbiAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2lucHV0IG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIHRpdGxlOiAnJywgLy8gdHJ5IHRvIHJlbW92ZSBkZWZhdWx0IHRvb2x0aXBcbiAgICAgIGFjY2VwdDogcHJvcHMuYWNjZXB0LFxuICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ211bHRpcGxlJyA6IHZvaWQgMCxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBvbk1vdXNlZG93bjogc3RvcCwgLy8gbmVlZCB0byBzdG9wIHJlZm9jdXMgZnJvbSBRQnRuXG4gICAgICBvbkNsaWNrOiBwaWNrRmlsZXMsXG4gICAgICBvbkNoYW5nZTogYWRkRmlsZXNUb1F1ZXVlXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgaWYgKHNsb3RzLmhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHMuaGVhZGVyKHB1YmxpY0FwaSlcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2hlYWRlci1jb250ZW50IGNvbHVtbidcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAnZmxleCBmbGV4LWNlbnRlciBuby13cmFwIHEtZ3V0dGVyLXhzJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmxlbmd0aCA+IDAsICdyZW1vdmVRdWV1ZScsIHJlbW92ZVF1ZXVlZEZpbGVzKSxcbiAgICAgICAgICBnZXRCdG4oc3RhdGUudXBsb2FkZWRGaWxlcy52YWx1ZS5sZW5ndGggPiAwLCAncmVtb3ZlVXBsb2FkZWQnLCByZW1vdmVVcGxvYWRlZEZpbGVzKSxcblxuICAgICAgICAgIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUVNwaW5uZXIsIHsgY2xhc3M6ICdxLXVwbG9hZGVyX19zcGlubmVyJyB9KVxuICAgICAgICAgICAgOiBudWxsLFxuXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2NvbCBjb2x1bW4ganVzdGlmeS1jZW50ZXInIH0sIFtcbiAgICAgICAgICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fdGl0bGUnIH0sIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgICAgICAgICAgOiBudWxsLFxuXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fc3VidGl0bGUnIH0sIFtcbiAgICAgICAgICAgICAgdXBsb2FkU2l6ZUxhYmVsLnZhbHVlICsgJyAvICcgKyB1cGxvYWRQcm9ncmVzc0xhYmVsLnZhbHVlXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgZ2V0QnRuKGNhbkFkZEZpbGVzLnZhbHVlLCAnYWRkJyksXG4gICAgICAgICAgZ2V0QnRuKHByb3BzLmhpZGVVcGxvYWRCdG4gPT09IGZhbHNlICYmIGNhblVwbG9hZC52YWx1ZSA9PT0gdHJ1ZSwgJ3VwbG9hZCcsIHN0YXRlLnVwbG9hZCksXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlLCAnY2xlYXInLCBzdGF0ZS5hYm9ydClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgaWYgKHNsb3RzLmxpc3QgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzLmxpc3QocHVibGljQXBpKVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZS5maWxlcy52YWx1ZS5tYXAoZmlsZSA9PiBoKCdkaXYnLCB7XG4gICAgICBrZXk6IGZpbGUuX19rZXksXG4gICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2ZpbGUgcmVsYXRpdmUtcG9zaXRpb24nXG4gICAgICAgICsgKHByb3BzLm5vVGh1bWJuYWlscyAhPT0gdHJ1ZSAmJiBmaWxlLl9faW1nICE9PSB2b2lkIDAgPyAnIHEtdXBsb2FkZXJfX2ZpbGUtLWltZycgOiAnJylcbiAgICAgICAgKyAoXG4gICAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICAgID8gJyBxLXVwbG9hZGVyX19maWxlLS1mYWlsZWQnXG4gICAgICAgICAgICA6IChmaWxlLl9fc3RhdHVzID09PSAndXBsb2FkZWQnID8gJyBxLXVwbG9hZGVyX19maWxlLS11cGxvYWRlZCcgOiAnJylcbiAgICAgICAgKSxcbiAgICAgIHN0eWxlOiBwcm9wcy5ub1RodW1ibmFpbHMgIT09IHRydWUgJiYgZmlsZS5fX2ltZyAhPT0gdm9pZCAwXG4gICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgZmlsZS5fX2ltZy5zcmMgKyAnXCIpJyB9XG4gICAgICAgIDogbnVsbFxuICAgIH0sIFtcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXVwbG9hZGVyX19maWxlLWhlYWRlciByb3cgZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgIH0sIFtcbiAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1zdGF0dXMnLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50eXBlLm5lZ2F0aXZlLFxuICAgICAgICAgICAgY29sb3I6ICduZWdhdGl2ZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogbnVsbCxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1oZWFkZXItY29udGVudCBjb2wnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fdGl0bGUnIH0sIFsgZmlsZS5uYW1lIF0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fc3VidGl0bGUgcm93IGl0ZW1zLWNlbnRlciBuby13cmFwJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGZpbGUuX19zaXplTGFiZWwgKyAnIC8gJyArIGZpbGUuX19wcm9ncmVzc0xhYmVsXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ3VwbG9hZGluZydcbiAgICAgICAgICA/IGgoUUNpcmN1bGFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICAgIHZhbHVlOiBmaWxlLl9fcHJvZ3Jlc3MsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiBmaWxlLl9fcHJvZ3Jlc3MgPT09IDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogaChRQnRuLCB7XG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQudXBsb2FkZXJbIGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcgPyAnZG9uZScgOiAnY2xlYXInIF0sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHJlbW92ZUZpbGUoZmlsZSkgfVxuICAgICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pKVxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5hYm9ydCgpXG4gICAgc3RhdGUuZmlsZXMudmFsdWUubGVuZ3RoID4gMCAmJiByZXZva2VJbWdVUkxzKClcbiAgfSlcblxuICBjb25zdCBwdWJsaWNBcGkgPSB7fVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKGlzUmVmKHN0YXRlWyBrZXkgXSkgPT09IHRydWUpIHtcbiAgICAgIGluamVjdFByb3AocHVibGljQXBpLCBrZXksICgpID0+IHN0YXRlWyBrZXkgXS52YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7IC8vIG1ldGhvZCBvciBub24tY29tcHV0ZWQgcHJvcFxuICAgICAgcHVibGljQXBpWyBrZXkgXSA9IHN0YXRlWyBrZXkgXVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24ocHVibGljQXBpLCB7XG4gICAgdXBsb2FkLFxuICAgIHJlc2V0LFxuICAgIHJlbW92ZVVwbG9hZGVkRmlsZXMsXG4gICAgcmVtb3ZlUXVldWVkRmlsZXMsXG4gICAgcmVtb3ZlRmlsZSxcblxuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlc1xuICB9KVxuXG4gIGluamVjdE11bHRpcGxlUHJvcHMocHVibGljQXBpLCB7XG4gICAgY2FuQWRkRmlsZXM6ICgpID0+IGNhbkFkZEZpbGVzLnZhbHVlLFxuICAgIGNhblVwbG9hZDogKCkgPT4gY2FuVXBsb2FkLnZhbHVlLFxuICAgIHVwbG9hZFNpemVMYWJlbDogKCkgPT4gdXBsb2FkU2l6ZUxhYmVsLnZhbHVlLFxuICAgIHVwbG9hZFByb2dyZXNzTGFiZWw6ICgpID0+IHVwbG9hZFByb2dyZXNzTGFiZWwudmFsdWVcbiAgfSlcblxuICAvLyBleHBvc2UgcHVibGljIGFwaSAobWV0aG9kcyAmIGNvbXB1dGVkIHByb3BzKVxuICBPYmplY3QuYXNzaWduKHByb3h5LCBwdWJsaWNBcGkpXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGNvbG9yQ2xhc3MudmFsdWUgfSwgZ2V0SGVhZGVyKCkpLFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX2xpc3Qgc2Nyb2xsJyB9LCBnZXRMaXN0KCkpLFxuICAgICAgZ2V0RG5kTm9kZSgndXBsb2FkZXInKVxuICAgIF1cblxuICAgIHN0YXRlLmlzQnVzeS52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZHJlbi5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX292ZXJsYXkgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgfSwgWyBoKFFTcGlubmVyKSBdKVxuICAgIClcblxuICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNsYXNzZXMudmFsdWUgfVxuXG4gICAgaWYgKGNhbkFkZEZpbGVzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHsgb25EcmFnb3Zlciwgb25EcmFnbGVhdmUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn1cbiIsImNvbnN0IHRydWVGbiA9ICgpID0+IHRydWVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVtaXRzQXJyYXkpIHtcbiAgY29uc3QgZW1pdHNPYmplY3QgPSB7fVxuXG4gIGVtaXRzQXJyYXkuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGVtaXRzT2JqZWN0WyB2YWwgXSA9IHRydWVGblxuICB9KVxuXG4gIHJldHVybiBlbWl0c09iamVjdFxufVxuIiwiaW1wb3J0IHsgY29yZVByb3BzLCBjb3JlRW1pdHMsIGdldFJlbmRlcmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGxvYWRlci91cGxvYWRlci1jb3JlLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IGdldEVtaXRzT2JqZWN0IGZyb20gJy4vcHJpdmF0ZS9nZXQtZW1pdHMtb2JqZWN0LmpzJ1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2lzLmpzJ1xuXG5jb25zdCBjb3JlRW1pdHNPYmplY3QgPSBnZXRFbWl0c09iamVjdChjb3JlRW1pdHMpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IG5hbWUsIHByb3BzLCBlbWl0cywgaW5qZWN0UGx1Z2luIH0pID0+IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWUsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5jb3JlUHJvcHMsXG4gICAgLi4ucHJvcHNcbiAgfSxcblxuICBlbWl0czogaXNPYmplY3QoZW1pdHMpID09PSB0cnVlXG4gICAgPyB7IC4uLmNvcmVFbWl0c09iamVjdCwgLi4uZW1pdHMgfVxuICAgIDogWyAuLi5jb3JlRW1pdHMsIC4uLmVtaXRzIF0sXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiBnZXRSZW5kZXJlcihpbmplY3RQbHVnaW4pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRGbiAocHJvcCkge1xuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbidcbiAgICA/IHByb3BcbiAgICA6ICgpID0+IHByb3Bcbn1cblxuY29uc3QgcHJvcHMgPSB7XG4gIHVybDogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gIG1ldGhvZDoge1xuICAgIHR5cGU6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6ICdQT1NUJ1xuICB9LFxuICBmaWVsZE5hbWU6IHtcbiAgICB0eXBlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZSA9PiBmaWxlLm5hbWVcbiAgICB9XG4gIH0sXG4gIGhlYWRlcnM6IFsgRnVuY3Rpb24sIEFycmF5IF0sXG4gIGZvcm1GaWVsZHM6IFsgRnVuY3Rpb24sIEFycmF5IF0sXG4gIHdpdGhDcmVkZW50aWFsczogWyBGdW5jdGlvbiwgQm9vbGVhbiBdLFxuICBzZW5kUmF3OiBbIEZ1bmN0aW9uLCBCb29sZWFuIF0sXG5cbiAgYmF0Y2g6IFsgRnVuY3Rpb24sIEJvb2xlYW4gXSxcbiAgZmFjdG9yeTogRnVuY3Rpb25cbn1cblxuY29uc3QgZW1pdHMgPSBbICdmYWN0b3J5LWZhaWxlZCcsICd1cGxvYWRlZCcsICdmYWlsZWQnLCAndXBsb2FkaW5nJyBdXG5cbmZ1bmN0aW9uIGluamVjdFBsdWdpbiAoeyBwcm9wcywgZW1pdCwgaGVscGVycyB9KSB7XG4gIGNvbnN0IHhocnMgPSByZWYoW10pXG4gIGNvbnN0IHByb21pc2VzID0gcmVmKFtdKVxuICBjb25zdCB3b3JraW5nVGhyZWFkcyA9IHJlZigwKVxuXG4gIGNvbnN0IHhoclByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICB1cmw6IGdldEZuKHByb3BzLnVybCksXG4gICAgbWV0aG9kOiBnZXRGbihwcm9wcy5tZXRob2QpLFxuICAgIGhlYWRlcnM6IGdldEZuKHByb3BzLmhlYWRlcnMpLFxuICAgIGZvcm1GaWVsZHM6IGdldEZuKHByb3BzLmZvcm1GaWVsZHMpLFxuICAgIGZpZWxkTmFtZTogZ2V0Rm4ocHJvcHMuZmllbGROYW1lKSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGdldEZuKHByb3BzLndpdGhDcmVkZW50aWFscyksXG4gICAgc2VuZFJhdzogZ2V0Rm4ocHJvcHMuc2VuZFJhdyksXG4gICAgYmF0Y2g6IGdldEZuKHByb3BzLmJhdGNoKVxuICB9KSlcblxuICBjb25zdCBpc1VwbG9hZGluZyA9IGNvbXB1dGVkKCgpID0+IHdvcmtpbmdUaHJlYWRzLnZhbHVlID4gMClcbiAgY29uc3QgaXNCdXN5ID0gY29tcHV0ZWQoKCkgPT4gcHJvbWlzZXMudmFsdWUubGVuZ3RoID4gMClcblxuICBsZXQgYWJvcnRQcm9taXNlc1xuXG4gIGZ1bmN0aW9uIGFib3J0ICgpIHtcbiAgICB4aHJzLnZhbHVlLmZvckVhY2goeCA9PiB7IHguYWJvcnQoKSB9KVxuXG4gICAgaWYgKHByb21pc2VzLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGFib3J0UHJvbWlzZXMgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBsb2FkICgpIHtcbiAgICBjb25zdCBxdWV1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuc2xpY2UoMClcbiAgICBoZWxwZXJzLnF1ZXVlZEZpbGVzLnZhbHVlID0gW11cblxuICAgIGlmICh4aHJQcm9wcy52YWx1ZS5iYXRjaChxdWV1ZSkpIHtcbiAgICAgIHJ1bkZhY3RvcnkocXVldWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcXVldWUuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgcnVuRmFjdG9yeShbIGZpbGUgXSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcnVuRmFjdG9yeSAoZmlsZXMpIHtcbiAgICB3b3JraW5nVGhyZWFkcy52YWx1ZSsrXG5cbiAgICBpZiAodHlwZW9mIHByb3BzLmZhY3RvcnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBlcmZvcm1VcGxvYWQoZmlsZXMsIHt9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gcHJvcHMuZmFjdG9yeShmaWxlcylcblxuICAgIGlmICghcmVzKSB7XG4gICAgICBlbWl0KFxuICAgICAgICAnZmFjdG9yeS1mYWlsZWQnLFxuICAgICAgICBuZXcgRXJyb3IoJ1FVcGxvYWRlcjogZmFjdG9yeSgpIGRvZXMgbm90IHJldHVybiBwcm9wZXJseScpLFxuICAgICAgICBmaWxlc1xuICAgICAgKVxuICAgICAgd29ya2luZ1RocmVhZHMudmFsdWUtLVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzLmNhdGNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvbWlzZXMudmFsdWUucHVzaChyZXMpXG5cbiAgICAgIGNvbnN0IGZhaWxlZCA9IGVyciA9PiB7XG4gICAgICAgIGlmIChoZWxwZXJzLmlzQWxpdmUoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHByb21pc2VzLnZhbHVlID0gcHJvbWlzZXMudmFsdWUuZmlsdGVyKHAgPT4gcCAhPT0gcmVzKVxuXG4gICAgICAgICAgaWYgKHByb21pc2VzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWJvcnRQcm9taXNlcyA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuY29uY2F0KGZpbGVzKVxuICAgICAgICAgIGZpbGVzLmZvckVhY2goZiA9PiB7IGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmLCAnZmFpbGVkJykgfSlcblxuICAgICAgICAgIGVtaXQoJ2ZhY3RvcnktZmFpbGVkJywgZXJyLCBmaWxlcylcbiAgICAgICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzLnRoZW4oZmFjdG9yeSA9PiB7XG4gICAgICAgIGlmIChhYm9ydFByb21pc2VzID09PSB0cnVlKSB7XG4gICAgICAgICAgZmFpbGVkKG5ldyBFcnJvcignQWJvcnRlZCcpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlbHBlcnMuaXNBbGl2ZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgcHJvbWlzZXMudmFsdWUgPSBwcm9taXNlcy52YWx1ZS5maWx0ZXIocCA9PiBwICE9PSByZXMpXG4gICAgICAgICAgcGVyZm9ybVVwbG9hZChmaWxlcywgZmFjdG9yeSlcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZmFpbGVkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBlcmZvcm1VcGxvYWQoZmlsZXMsIHJlcyB8fCB7fSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtVXBsb2FkIChmaWxlcywgZmFjdG9yeSkge1xuICAgIGNvbnN0XG4gICAgICBmb3JtID0gbmV3IEZvcm1EYXRhKCksXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgY29uc3QgZ2V0UHJvcCA9IChuYW1lLCBhcmcpID0+IHtcbiAgICAgIHJldHVybiBmYWN0b3J5WyBuYW1lIF0gIT09IHZvaWQgMFxuICAgICAgICA/IGdldEZuKGZhY3RvcnlbIG5hbWUgXSkoYXJnKVxuICAgICAgICA6IHhoclByb3BzLnZhbHVlWyBuYW1lIF0oYXJnKVxuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGdldFByb3AoJ3VybCcsIGZpbGVzKVxuXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3EtdXBsb2FkZXI6IGludmFsaWQgb3Igbm8gVVJMIHNwZWNpZmllZCcpXG4gICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSBnZXRQcm9wKCdmb3JtRmllbGRzJywgZmlsZXMpXG4gICAgZmllbGRzICE9PSB2b2lkIDAgJiYgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgZm9ybS5hcHBlbmQoZmllbGQubmFtZSwgZmllbGQudmFsdWUpXG4gICAgfSlcblxuICAgIGxldFxuICAgICAgdXBsb2FkSW5kZXggPSAwLFxuICAgICAgdXBsb2FkSW5kZXhTaXplID0gMCxcbiAgICAgIGxvY2FsVXBsb2FkZWRTaXplID0gMCxcbiAgICAgIG1heFVwbG9hZFNpemUgPSAwLFxuICAgICAgYWJvcnRlZFxuXG4gICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgaWYgKGFib3J0ZWQgPT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgbG9hZGVkID0gTWF0aC5taW4obWF4VXBsb2FkU2l6ZSwgZS5sb2FkZWQpXG5cbiAgICAgIGhlbHBlcnMudXBsb2FkZWRTaXplLnZhbHVlICs9IGxvYWRlZCAtIGxvY2FsVXBsb2FkZWRTaXplXG4gICAgICBsb2NhbFVwbG9hZGVkU2l6ZSA9IGxvYWRlZFxuXG4gICAgICBsZXQgc2l6ZSA9IGxvY2FsVXBsb2FkZWRTaXplIC0gdXBsb2FkSW5kZXhTaXplXG4gICAgICBmb3IgKGxldCBpID0gdXBsb2FkSW5kZXg7IHNpemUgPiAwICYmIGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGZpbGUgPSBmaWxlc1sgaSBdLFxuICAgICAgICAgIHVwbG9hZGVkID0gc2l6ZSA+IGZpbGUuc2l6ZVxuXG4gICAgICAgIGlmICh1cGxvYWRlZCkge1xuICAgICAgICAgIHNpemUgLT0gZmlsZS5zaXplXG4gICAgICAgICAgdXBsb2FkSW5kZXgrK1xuICAgICAgICAgIHVwbG9hZEluZGV4U2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgICBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZmlsZSwgJ3VwbG9hZGluZycsIGZpbGUuc2l6ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZmlsZSwgJ3VwbG9hZGluZycsIHNpemUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBmYWxzZSlcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPCA0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoeGhyLnN0YXR1cyAmJiB4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgIGhlbHBlcnMudXBsb2FkZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMudXBsb2FkZWRGaWxlcy52YWx1ZS5jb25jYXQoZmlsZXMpXG4gICAgICAgIGZpbGVzLmZvckVhY2goZiA9PiB7IGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmLCAndXBsb2FkZWQnKSB9KVxuICAgICAgICBlbWl0KCd1cGxvYWRlZCcsIHsgZmlsZXMsIHhociB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFib3J0ZWQgPSB0cnVlXG4gICAgICAgIGhlbHBlcnMudXBsb2FkZWRTaXplLnZhbHVlIC09IGxvY2FsVXBsb2FkZWRTaXplXG4gICAgICAgIGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUgPSBoZWxwZXJzLnF1ZXVlZEZpbGVzLnZhbHVlLmNvbmNhdChmaWxlcylcbiAgICAgICAgZmlsZXMuZm9yRWFjaChmID0+IHsgaGVscGVycy51cGRhdGVGaWxlU3RhdHVzKGYsICdmYWlsZWQnKSB9KVxuICAgICAgICBlbWl0KCdmYWlsZWQnLCB7IGZpbGVzLCB4aHIgfSlcbiAgICAgIH1cblxuICAgICAgd29ya2luZ1RocmVhZHMudmFsdWUtLVxuICAgICAgeGhycy52YWx1ZSA9IHhocnMudmFsdWUuZmlsdGVyKHggPT4geCAhPT0geGhyKVxuICAgIH1cblxuICAgIHhoci5vcGVuKFxuICAgICAgZ2V0UHJvcCgnbWV0aG9kJywgZmlsZXMpLFxuICAgICAgdXJsXG4gICAgKVxuXG4gICAgaWYgKGdldFByb3AoJ3dpdGhDcmVkZW50aWFscycsIGZpbGVzKSA9PT0gdHJ1ZSkge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0UHJvcCgnaGVhZGVycycsIGZpbGVzKVxuICAgIGhlYWRlcnMgIT09IHZvaWQgMCAmJiBoZWFkZXJzLmZvckVhY2goaGVhZCA9PiB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkLm5hbWUsIGhlYWQudmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IHNlbmRSYXcgPSBnZXRQcm9wKCdzZW5kUmF3JywgZmlsZXMpXG5cbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgaGVscGVycy51cGRhdGVGaWxlU3RhdHVzKGZpbGUsICd1cGxvYWRpbmcnLCAwKVxuICAgICAgaWYgKHNlbmRSYXcgIT09IHRydWUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoZ2V0UHJvcCgnZmllbGROYW1lJywgZmlsZSksIGZpbGUsIGZpbGUubmFtZSlcbiAgICAgIH1cbiAgICAgIGZpbGUueGhyID0geGhyXG4gICAgICBmaWxlLl9fYWJvcnQgPSAoKSA9PiB7IHhoci5hYm9ydCgpIH1cbiAgICAgIG1heFVwbG9hZFNpemUgKz0gZmlsZS5zaXplXG4gICAgfSlcblxuICAgIGVtaXQoJ3VwbG9hZGluZycsIHsgZmlsZXMsIHhociB9KVxuICAgIHhocnMudmFsdWUucHVzaCh4aHIpXG5cbiAgICBpZiAoc2VuZFJhdyA9PT0gdHJ1ZSkge1xuICAgICAgeGhyLnNlbmQobmV3IEJsb2IoZmlsZXMpKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHhoci5zZW5kKGZvcm0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1VwbG9hZGluZyxcbiAgICBpc0J1c3ksXG5cbiAgICBhYm9ydCxcbiAgICB1cGxvYWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdRVXBsb2FkZXInLFxuICBwcm9wcyxcbiAgZW1pdHMsXG4gIGluamVjdFBsdWdpblxufVxuIiwiaW1wb3J0IGNyZWF0ZVVwbG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZS11cGxvYWRlci1jb21wb25lbnQuanMnXG5pbXBvcnQgeGhyVXBsb2FkZXJQbHVnaW4gZnJvbSAnLi94aHItdXBsb2FkZXItcGx1Z2luLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVcGxvYWRlckNvbXBvbmVudCh4aHJVcGxvYWRlclBsdWdpbilcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1saXN0IHNlcGFyYXRvciA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmUgPyB0cnVlIDogZmFsc2VcIiA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPCEtLSBjYXRlZ29yaWVzIC0tPlxuICAgIDxxLWl0ZW0gdG89XCIvc2V0dGluZ3MvY2F0ZWdvcmllc1wiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiY2F0ZWdvcnlcIiAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5DYXRlZ29yaWVzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gZGFyayBtb2RlIC0tPlxuICAgIDxxLWl0ZW1cbiAgICAgIGNsaWNrYWJsZVxuICAgICAgdi1yaXBwbGVcbiAgICAgIEBjbGljaz1cImRhcmttb2RlID0gIWRhcmttb2RlXCJcbiAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiXG4gICAgPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiYnJpZ2h0bmVzc182XCIgLz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+RGFyayBtb2RlPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJkYXJrbW9kZVwiIHZhbD1cImJhdHRlcnlcIiAvPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gdXNlIGNhY2hlIC0tPlxuICAgIDxxLWl0ZW1cbiAgICAgIGNsaWNrYWJsZVxuICAgICAgdi1yaXBwbGVcbiAgICAgIEBjbGljaz1cInVzZUNhY2hlID0gIXVzZUNhY2hlXCJcbiAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiXG4gICAgPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiY2FjaGVkXCIgLz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+VXNlIGltYW5nYSBjYWNoZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidXNlQ2FjaGVcIiB2YWw9XCJiYXR0ZXJ5XCIgLz5cbiAgICA8L3EtaXRlbT5cbiAgICA8IS0tIG1hbmdhIGdyaWQgd2lkdGggLS0+XG4gICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgQGNsaWNrPVwiTWl0ZW0gPSB0cnVlXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJ2aWV3X21vZHVsZVwiIC8+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLWxhYmVsPk1hbmdhIEl0ZW0gd2lkdGg8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IE1pdGVtVyB9fXB4PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJNaXRlbVwiPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1sZ1wiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbm9uZSBxLXB0LW5vbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+TWFuZ2EgSXRlbSB3aWR0aDo8L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHQtbm9uZSBxLXB4LW5vbmVcIj5cbiAgICAgICAgICAgIHRoZSB0YXJnZXQgd2lkdGggZm9yIG1hbmdhIGl0ZW1zIGluIGdyaWRzIGxpa2UgdGhlIGxpYnJhcnkgYW5kXG4gICAgICAgICAgICBzY291cmNlIHZpZXdzXG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgc3RhbmRvdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdi1tb2RlbD1cIk1pdGVtV1wiXG4gICAgICAgICAgICBzdWZmaXg9XCJweFwiXG4gICAgICAgICAgPjwvcS1pbnB1dD5cbiAgICAgICAgICA8cS1zbGlkZXIgOnN0ZXA9XCI1MFwiIHNuYXAgdi1tb2RlbD1cIk1pdGVtV1wiIDptaW49XCIxMDBcIiA6bWF4PVwiMTAwMFwiIC8+XG5cbiAgICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiIGNsYXNzPVwicS1wYi1ub25lXCI+XG4gICAgICAgICAgICA8cS1idG4gZmxhdCBsYWJlbD1cIkRlZmF1bHRcIiBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJNaXRlbVcgPSAzMDBcIiAvPlxuICAgICAgICAgICAgPHEtYnRuIGZsYXQgbGFiZWw9XCJDYW5jZWxcIiBjb2xvcj1cInByaW1hcnlcIiB2LWNsb3NlLXBvcHVwIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldE1pdGVtVyhNaXRlbVcpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3EtZGlhbG9nPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gc2VydmVyIGFkZHJlc3MgLS0+XG4gICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgQGNsaWNrPVwiU2FkZHIgPSB0cnVlXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJkbnNcIiAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5TZXJ2ZXIgQWRkcmVzczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3tcbiAgICAgICAgICAkcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmFzZVVybCcpXG4gICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJTYWRkclwiPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwicS1weC1tZFwiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+RW50ZXIgU2VydmVyIEFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWlucHV0IHN0YW5kb3V0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNlcnZlckFkZHJcIj48L3EtaW5wdXQ+XG5cbiAgICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZWZhdWx0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwic2VydmVyQWRkciA9ICdodHRwOi8vbG9jYWxob3N0J1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHEtYnRuIGZsYXQgbGFiZWw9XCJDYW5jZWxcIiBjb2xvcj1cInByaW1hcnlcIiB2LWNsb3NlLXBvcHVwIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldHNlcnZlckFkZHIoc2VydmVyQWRkcilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLWl0ZW0+XG4gICAgPCEtLSBiYXNpYyBhdXRoIC0tPlxuICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIEBjbGljaz1cImJhdXQgPSB0cnVlXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICA8cS1pY29uIDpuYW1lPVwiYnBzdyAmJiBidXNyID8gJ29fbG9ja19vcGVuJyA6ICdsb2NrJ1wiIC8+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLWxhYmVsPkJhc2ljIEF1dGg8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1kaWFsb2cgdi1tb2RlbD1cImJhdXRcIj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cInEtcHgtbWRcIj5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkVudGVyIFVzZXJuYW1lIGFuZCBQYXNzd29yZDwvZGl2PlxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHN0YW5kb3V0XG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJidXNyXCJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBjbGFzcz1cInEtbXktc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3EtaW5wdXQ+XG4gICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHN0YW5kb3V0XG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIDp0eXBlPVwiIWlzUHdkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiYnBzd1wiXG4gICAgICAgICAgICBjbGFzcz1cInEtbXktc21cIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgIDpuYW1lPVwiaXNQd2QgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJpc1B3ZCA9ICFpc1B3ZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIkNsZWFyIEF1dGhcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldHNlcnZlckF1dGgoKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHEtYnRuIGZsYXQgbGFiZWw9XCJDYW5jZWxcIiBjb2xvcj1cInByaW1hcnlcIiB2LWNsb3NlLXBvcHVwIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldHNlcnZlckF1dGgoYnVzciwgYnBzdylcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLWl0ZW0+XG4gICAgPCEtLSBSZWFkZXIgRGVmYXVsdHMgLS0+XG4gICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgQGNsaWNrPVwiU1JlYWQgPSB0cnVlXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJtZW51X2Jvb2tcIiAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5EZWZhdWx0IFJlYWRlciBTZXR0aW5nczwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJTUmVhZFwiPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwicS1weC1zbVwiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+RGVmYXVsdCBSZWFkZXIgU2V0dGluZ3M8L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgICAgICBAY2xpY2s9XCJTcmVhZE1hcmdpbnMgPSAhU3JlYWRNYXJnaW5zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5QYWdlIE1hcmdpbnM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJTcmVhZE1hcmdpbnNcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1iZXR3ZWVuIG5vLXdyYXAgaXRlbXMtY2VudGVyIHJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgICAgICBAY2xpY2s9XCJTcmVhZFNjYWxlID0gIVNyZWFkU2NhbGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlBhZ2UgU2NhbGU8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJTcmVhZFNjYWxlXCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgc3RhbmRvdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZWFkZXIgTW9kZVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJTUmVhZE1vZGVsXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJTUmVhZG9wdGlvbnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldFJlYWRlck9wdGlvbnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLWl0ZW0+XG4gICAgPCEtLSBiYWNrdXBzIC0tPlxuICAgIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgICBleHBhbmQtc2VwYXJhdG9yXG4gICAgICBpY29uPVwiYmFja3VwXCJcbiAgICAgIGxhYmVsPVwiQmFja3VwXCJcbiAgICAgIGRlZmF1bHQtY2xvc2VkXG4gICAgPlxuICAgICAgPHEtaXRlbVxuICAgICAgICBjbGlja2FibGVcbiAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgY2xhc3M9XCJxLXBsLXhsXCJcbiAgICAgICAgOmhyZWY9XCJzZXJ2ZXJBZGRyICsgYC9hcGkvdjEvYmFja3VwL2V4cG9ydC9maWxlYFwiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPkNyZWF0ZSBCYWNrdXA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb25cbiAgICAgICAgICAgID5CYWNrdXAgbGlicmFyeSBhcyBhIFRhY2hpeW9taSBiYWNrdXA8L3EtaXRlbS1sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgY2xhc3M9XCJxLXBsLXhsXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS11cGxvYWRlclxuICAgICAgICAgICAgOnVybD1cInNlcnZlckFkZHIgKyBgL2FwaS92MS9iYWNrdXAvaW1wb3J0L2ZpbGVgXCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1tYS1ub25lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkIEJhY2t1cFwiXG4gICAgICAgICAgICBhY2NlcHQ9XCIucHJvdG8uZ3pcIlxuICAgICAgICAgICAgZmllbGQtbmFtZT1cImJhY2t1cC5wcm90by5nelwiXG4gICAgICAgICAgICA6aGVhZGVycz1cIltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdBdXRob3JpemF0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0Jhc2ljJyArIGJ0b2EoYnVzciArICc6JyArIGJwc3cpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgYXV0by11cGxvYWRcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG4gIDwvcS1saXN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyByZXNldEJhc2UgfSBmcm9tICdzcmMvYm9vdC9mZXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NldHRpbmdzUGFnZScsXG4gIG1ldGhvZHM6IHtcbiAgICBteVR3ZWFrKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IG9mZnNldCA/IGBjYWxjKDEwMHZoIC0gJHtvZmZzZXR9cHgpYCA6ICcxMDB2aCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXRNaXRlbVcodmFsOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuJHEubG9jYWxTdG9yYWdlLnNldCgnTWl0ZW1XJywgdmFsKTtcbiAgICB9LFxuICAgIHNldHNlcnZlckFkZHI6IGZ1bmN0aW9uICh2YWw6IHN0cmluZykge1xuICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAnYmFzZVVybCcsXG4gICAgICAgIHZhbC5lbmRzV2l0aCgnLycpID8gdmFsLnNsaWNlKDAsIC0xKSA6IHZhbFxuICAgICAgKTtcbiAgICAgIHRoaXMucmVzZXRCYXNlKCk7XG4gICAgfSxcbiAgICBzZXRzZXJ2ZXJBdXRoKHVzZXJuYW1lID0gJycsIHBhc3N3b3JkID0gJycpIHtcbiAgICAgIGlmICh1c2VybmFtZSA9PSAnJyB8fCBwYXNzd29yZCA9PSAnJykge1xuICAgICAgICB0aGlzLiRxLmxvY2FsU3RvcmFnZS5yZW1vdmUoJ2F1dGgnKTtcbiAgICAgICAgdGhpcy5idXNyID0gJyc7XG4gICAgICAgIHRoaXMuYnBzdyA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCdhdXRoJywgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBidG9hKHZhbDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gYnRvYSh2YWwpO1xuICAgIH0sXG4gICAgc2V0UmVhZGVyT3B0aW9ucygpIHtcbiAgICAgIHRoaXMuJHEubG9jYWxTdG9yYWdlLnNldCgndnVlX1JNJywgdGhpcy5TUmVhZE1vZGVsKTtcbiAgICAgIHRoaXMuJHEubG9jYWxTdG9yYWdlLnNldCgndnVlX1dUJywgdGhpcy5TcmVhZE1hcmdpbnMpO1xuICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCd2dWVfU2NhbGUnLCB0aGlzLlNyZWFkU2NhbGUpO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkYXJrbW9kZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgdGhpcy4kcS5kYXJrLnNldCh2YWwpO1xuICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCdkYXJrJywgdmFsKTtcbiAgICB9LFxuICAgIHVzZUNhY2hlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB0aGlzLiRxLmxvY2FsU3RvcmFnZS5zZXQoJ3VzZUNhY2hlJywgdmFsKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKF9wcm9wcywgeyBlbWl0IH0pIHtcbiAgICBlbWl0KCdzZXRUaXRsZScsICdTZXR0aW5ncycpO1xuICAgIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gICAgY29uc3QgZGFya21vZGUgPSByZWYoJHEuZGFyay5pc0FjdGl2ZSk7XG4gICAgY29uc3QgTWl0ZW1XID0gcmVmKCRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNaXRlbVcnKSBhcyBudW1iZXIpO1xuICAgIGNvbnN0IHVzZUNhY2hlID0gcmVmKCRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VDYWNoZScpIGFzIGJvb2xlYW4pO1xuICAgIGNvbnN0IHNlcnZlckFkZHIgPSByZWYoJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jhc2VVcmwnKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGF1dGggPSAkcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpIGFzIHtcbiAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0gfCBudWxsO1xuICAgIGNvbnN0IFNSZWFkTW9kZWwgPSByZWYoXG4gICAgICAoJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Z1ZV9STScpIHx8ICdSVEwnKSBhcyBzdHJpbmdcbiAgICApO1xuICAgIGNvbnN0IFNyZWFkTWFyZ2lucyA9IHJlZihcbiAgICAgICgkcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndnVlX1dUJykgfHwgZmFsc2UpIGFzIGJvb2xlYW5cbiAgICApO1xuICAgIGNvbnN0IFNyZWFkU2NhbGUgPSByZWYoXG4gICAgICAoJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Z1ZV9TY2FsZScpIHx8IGZhbHNlKSBhcyBib29sZWFuXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXJrbW9kZSxcbiAgICAgIE1pdGVtOiByZWYoZmFsc2UpLFxuICAgICAgTWl0ZW1XLFxuICAgICAgdXNlQ2FjaGUsXG4gICAgICBTYWRkcjogcmVmKGZhbHNlKSxcbiAgICAgIFNSZWFkOiByZWYoZmFsc2UpLFxuICAgICAgU1JlYWRNb2RlbCxcbiAgICAgIFNSZWFkb3B0aW9uczogWydSVEwnLCAnTFRSJywgJ1NpbmdsZVBhZ2UnLCAnVmVydGljYWwnXSxcbiAgICAgIFNyZWFkTWFyZ2lucyxcbiAgICAgIFNyZWFkU2NhbGUsXG4gICAgICBzZXJ2ZXJBZGRyLFxuICAgICAgYmF1dDogcmVmKGZhbHNlKSxcbiAgICAgIGJ1c3I6IHJlZihhdXRoICE9IG51bGwgPyBhdXRoLnVzZXJuYW1lIDogJycpLFxuICAgICAgYnBzdzogcmVmKGF1dGggIT0gbnVsbCA/IGF1dGgucGFzc3dvcmQgOiAnJyksXG4gICAgICByZXNldEJhc2UsXG4gICAgICBpc1B3ZDogcmVmKGZhbHNlKVxuICAgIH07XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsicHJvcHMiLCJzdGVwIiwiZHJhZ2dpbmciLCJjbGFzc2VzIiwicmF0aW8iLCJlbWl0cyIsImluamVjdFBsdWdpbiIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX3dpdGhEaXJlY3RpdmVzIiwiX29wZW5CbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLG9CQUFvQjtBQUMxQixNQUFNLHlCQUF5QixRQUFNLEVBQUUsT0FBTyxFQUFDO0FBQy9DLE1BQU0sNkJBQTZCLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTztBQUFBLEVBQzFELEtBQUssT0FBTztBQUFBLEVBQ1osT0FBTyxPQUFPO0FBQUEsRUFDZCxPQUFPLE9BQU87QUFDaEIsR0FBRyxPQUFPLEtBQUs7QUFHUixNQUFNLFdBQVcsQ0FBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBSTtBQUUzQyxNQUFNLGlCQUFpQjtBQUFBLEVBQzVCLEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUVILEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFDRCxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDVjtBQUFBLEVBQ0QsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBRVYsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsV0FBVyxPQUFLLEtBQUs7QUFBQSxFQUN0QjtBQUFBLEVBRUQsTUFBTTtBQUFBLEVBRU4sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBRVQsZUFBZTtBQUFBLEVBRWYsT0FBTztBQUFBLEVBQ1AsbUJBQW1CO0FBQUEsRUFFbkIsT0FBTztBQUFBLEVBQ1AsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFFakIsU0FBUyxDQUFFLFNBQVMsTUFBUTtBQUFBLEVBQzVCLGNBQWMsQ0FBRSxTQUFTLE9BQU8sUUFBUSxRQUFVO0FB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
