import { Q as QIcon } from "./QIcon.00211d75.js";
import { Q as QItemSection, a as QItemLabel } from "./QItemLabel.751b389a.js";
import { Q as QItem } from "./QItem.e5504d24.js";
import { Q as QToggle } from "./QToggle.519c6e7f.js";
import { Q as QCardSection } from "./QCardSection.6cd72ed9.js";
import { Q as QInput } from "./QInput.a2e72a2b.js";
import { u as useFormProps, a as useFormInject, c as useFormAttrs } from "./use-form.a300a275.js";
import { T as TouchPan } from "./TouchPan.4378eff7.js";
import { a as useDark, u as useDarkProps } from "./use-dark.7f6486f4.js";
import { b as between, h as humanStorageSize } from "./format.2a3572e1.js";
import { r as ref, c as computed, o as onBeforeUnmount, W as position, ao as isNumber, ap as isObject, h, g as getCurrentInstance, w as watch, L as stopAndPrevent, O as stop, Z as client, C as provide, aq as isRef, ag as injectProp, ar as injectMultipleProps, as as uploaderKey, _ as _export_sfc, d as defineComponent, f as openBlock, j as createBlock, k as withCtx, m as createVNode, p as createTextVNode, B as withDirectives, t as toDisplayString, u as createBaseVNode } from "./index.ba4ecd3b.js";
import { e as hDir, c as createComponent, u as useSizeProps, b as useSize, j as hMergeSlotSafely, Q as QSpinner } from "./QSpinner.ce362078.js";
import { b as vmIsDestroyed, Q as QBtn } from "./QBtn.2456f78f.js";
import { Q as QCardActions } from "./QCardActions.d176eb8e.js";
import { Q as QCard } from "./QCard.19e48865.js";
import { Q as QDialog } from "./QDialog.75edb166.js";
import { Q as QSeparator } from "./QSeparator.22c5d3c5.js";
import { Q as QSelect } from "./QSelect.5b441b0d.js";
import { Q as QExpansionItem } from "./QExpansionItem.57e138fd.js";
import { Q as QList } from "./QList.10571ef1.js";
import { R as Ripple } from "./Ripple.d48b6bf8.js";
import { C as ClosePopup } from "./ClosePopup.5400fc3f.js";
import { u as useQuasar } from "./use-quasar.d6d97ee1.js";
import { resetBase } from "./fetcher.0bda8d6d.js";
import { storeGet } from "./StoreStuff.b98d7f9e.js";
import "./use-checkbox.edaab605.js";
import "./option-sizes.ff92785a.js";
import "./use-key-composition.4fc2cfcf.js";
import "./uid.42677368.js";
import "./focus-manager.32f8d49a.js";
import "./selection.c4ca48d8.js";
import "./use-timeout.fb745483.js";
import "./scroll.3ccd02db.js";
import "./dom.9c14e7bf.js";
import "./use-transition.322af72f.js";
import "./QMenu.5ba06e13.js";
import "./position-engine.1cc73c92.js";
import "./use-virtual-scroll.24900e81.js";
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
      this.$storeSet(
        "baseUrl",
        val.endsWith("/") ? val.slice(0, -1) : val,
        location.origin
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
      this.$q.localStorage.set("vue_Paths", this.SReadPath);
      this.$q.localStorage.set("vue_WT", this.SreadMargins);
      this.$q.localStorage.set("vue_Scale", this.SreadScale);
    }
  },
  watch: {
    "$q.dark.isActive": function() {
      this.darkmode = this.$q.dark.isActive;
    },
    darkmode: function(val) {
      this.$q.dark.set(val);
      this.$storeSet("dark", val, true);
    },
    useCache: function(val) {
      this.$storeSet("useCache", val, true);
    }
  },
  setup(_props, { emit }) {
    emit("setTitle", "Settings");
    const $q = useQuasar();
    const darkmode = ref($q.dark.isActive);
    const MitemW = ref(storeGet("MitemW", 300));
    const useCache = ref(storeGet("useCache", true));
    const serverAddr = ref(storeGet("baseUrl", location.origin));
    const auth = $q.localStorage.getItem("auth");
    const SReadModel = ref(
      $q.localStorage.getItem("vue_RM") || "RTL"
    );
    const SReadPath = ref(
      $q.localStorage.getItem("vue_Paths") || "L"
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
      SReadPath,
      PathOptions: ["L", "RAL", "Kindle", "Edge"],
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
    dark: _ctx.$q.dark.isActive,
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
                  createTextVNode(toDisplayString(_ctx.serverAddr), 1)
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
        onClick: _cache[29] || (_cache[29] = ($event) => _ctx.SRead = true)
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
            "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => _ctx.SRead = $event)
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
                      createVNode(QSeparator, { class: "q-my-xs" }),
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
                      createVNode(QSeparator, { class: "q-my-xs" }),
                      createVNode(QSelect, {
                        standout: "",
                        label: "Reader Mode",
                        modelValue: _ctx.SReadModel,
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => _ctx.SReadModel = $event),
                        options: _ctx.SReadoptions
                      }, null, 8, ["modelValue", "options"]),
                      createVNode(QSeparator, { class: "q-my-xs" }),
                      createVNode(QSelect, {
                        standout: "",
                        label: "Navigation layout",
                        modelValue: _ctx.SReadPath,
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => _ctx.SReadPath = $event),
                        options: _ctx.PathOptions
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NQYWdlLmNlMjFjYjdmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci91c2Utc2xpZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvUVNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvY2lyY3VsYXItcHJvZ3Jlc3MvdXNlLWNpcmN1bGFyLXByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaXJjdWxhci1wcm9ncmVzcy9RQ2lyY3VsYXJQcm9ncmVzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZpbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3VwbG9hZGVyL3VwbG9hZGVyLWNvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2dldC1lbWl0cy1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jcmVhdGUtdXBsb2FkZXItY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy91cGxvYWRlci94aHItdXBsb2FkZXItcGx1Z2luLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy91cGxvYWRlci9RVXBsb2FkZXIuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc2V0dGluZ3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbmplY3QgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBtYXJrZXJQcmVmaXhDbGFzcyA9ICdxLXNsaWRlcl9fbWFya2VyLWxhYmVscydcbmNvbnN0IGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4gPSB2ID0+ICh7IHZhbHVlOiB2IH0pXG5jb25zdCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGbiA9ICh7IG1hcmtlciB9KSA9PiBoKCdkaXYnLCB7XG4gIGtleTogbWFya2VyLnZhbHVlLFxuICBzdHlsZTogbWFya2VyLnN0eWxlLFxuICBjbGFzczogbWFya2VyLmNsYXNzZXNcbn0sIG1hcmtlci5sYWJlbClcblxuLy8gUEdET1dOLCBMRUZULCBET1dOLCBQR1VQLCBSSUdIVCwgVVBcbmV4cG9ydCBjb25zdCBrZXlDb2RlcyA9IFsgMzQsIDM3LCA0MCwgMzMsIDM5LCAzOCBdXG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuICBpbm5lck1pbjogTnVtYmVyLFxuICBpbm5lck1heDogTnVtYmVyLFxuXG4gIHN0ZXA6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwXG4gIH0sXG5cbiAgc25hcDogQm9vbGVhbixcblxuICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBoaWRlU2VsZWN0aW9uOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIG1hcmtlckxhYmVsc0NsYXNzOiBTdHJpbmcsXG5cbiAgbGFiZWw6IEJvb2xlYW4sXG4gIGxhYmVsQ29sb3I6IFN0cmluZyxcbiAgbGFiZWxUZXh0Q29sb3I6IFN0cmluZyxcbiAgbGFiZWxBbHdheXM6IEJvb2xlYW4sXG4gIHN3aXRjaExhYmVsU2lkZTogQm9vbGVhbixcblxuICBtYXJrZXJzOiBbIEJvb2xlYW4sIE51bWJlciBdLFxuICBtYXJrZXJMYWJlbHM6IFsgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRnVuY3Rpb24gXSxcbiAgc3dpdGNoTWFya2VyTGFiZWxzU2lkZTogQm9vbGVhbixcblxuICB0cmFja0ltZzogU3RyaW5nLFxuICB0cmFja0NvbG9yOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tJbWc6IFN0cmluZyxcbiAgaW5uZXJUcmFja0NvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkNvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkltZzogU3RyaW5nLFxuXG4gIHRodW1iU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnMjBweCdcbiAgfSxcbiAgdHJhY2tTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICc0cHgnXG4gIH0sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgdGh1bWJDb2xvcjogU3RyaW5nLFxuICB0aHVtYlBhdGg6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ00gNCwgMTAgYSA2LDYgMCAxLDAgMTIsMCBhIDYsNiAwIDEsMCAtMTIsMCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyRW1pdHMgPSBbICdwYW4nLCAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2hhbmdlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsIGZvcm1BdHRycyB9KSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHNsb3RzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICBjb25zdCBhY3RpdmUgPSByZWYoZmFsc2UpXG4gIGNvbnN0IHByZXZlbnRGb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGRyYWdnaW5nID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGF4aXMgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnLS12JyA6ICctLWgnKSlcbiAgY29uc3QgbGFiZWxTaWRlID0gY29tcHV0ZWQoKCkgPT4gJy0nICsgKHByb3BzLnN3aXRjaExhYmVsU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnKSlcblxuICBjb25zdCBpc1JldmVyc2VkID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IHByb3BzLnJldmVyc2UgPT09IHRydWVcbiAgICAgIDogcHJvcHMucmV2ZXJzZSAhPT0gKCRxLmxhbmcucnRsID09PSB0cnVlKVxuICApKVxuXG4gIGNvbnN0IGlubmVyTWluID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWluKSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1pbiA8IHByb3BzLm1pblxuICAgICAgPyBwcm9wcy5taW5cbiAgICAgIDogcHJvcHMuaW5uZXJNaW5cbiAgKSlcbiAgY29uc3QgaW5uZXJNYXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNYXgpID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWF4ID4gcHJvcHMubWF4XG4gICAgICA/IHByb3BzLm1heFxuICAgICAgOiBwcm9wcy5pbm5lck1heFxuICApKVxuXG4gIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWVcbiAgICAmJiBpbm5lck1pbi52YWx1ZSA8IGlubmVyTWF4LnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZGVjaW1hbHMgPSBjb21wdXRlZCgoKSA9PiAoU3RyaW5nKHByb3BzLnN0ZXApLnRyaW0oKS5zcGxpdCgnLicpWyAxIF0gfHwgJycpLmxlbmd0aClcbiAgY29uc3Qgc3RlcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5zdGVwID09PSAwID8gMSA6IHByb3BzLnN0ZXApKVxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IHx8IDAgOiAtMSkpXG5cbiAgY29uc3QgdHJhY2tMZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gIGNvbnN0IGlubmVyQmFyTGVuID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJNYXgudmFsdWUgLSBpbm5lck1pbi52YWx1ZSlcblxuICBjb25zdCBpbm5lck1pblJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1pbi52YWx1ZSkpXG4gIGNvbnN0IGlubmVyTWF4UmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWF4LnZhbHVlKSlcblxuICBjb25zdCBwb3NpdGlvblByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAnYm90dG9tJyA6ICd0b3AnKVxuICAgICAgOiAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICkpXG5cbiAgY29uc3Qgc2l6ZVByb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaGVpZ2h0JyA6ICd3aWR0aCcpKVxuICBjb25zdCB0aGlja25lc3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnKSlcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIHJvbGU6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpbm5lck1pbi52YWx1ZSxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogaW5uZXJNYXgudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlLFxuICAgICAgJ2RhdGEtc3RlcCc6IHByb3BzLnN0ZXBcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1yZWFkb25seScgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1zbGlkZXIgcS1zbGlkZXIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXItLSR7IGFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlIGlubGluZSBuby13cmFwIGBcbiAgICArIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdyb3cnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLXNsaWRlci0tZW5hYmxlZCcgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1lZGl0YWJsZScgOiAnJykpXG4gICAgKyAoZm9jdXMudmFsdWUgPT09ICdib3RoJyA/ICcgcS1zbGlkZXItLWZvY3VzJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbC1hbHdheXMnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRlbnNlIHEtc2xpZGVyLS1kZW5zZScgKyBheGlzLnZhbHVlIDogJycpXG4gIClcblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0keyBsYWJlbFNpZGUudmFsdWUgfWBcbiAgfVxuICBmdW5jdGlvbiBnZXRBeGlzQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfWBcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbkJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc2VsZWN0aW9uQ29sb3IgfHwgcHJvcHMuY29sb3JcbiAgICByZXR1cm4gJ3Etc2xpZGVyX19zZWxlY3Rpb24gYWJzb2x1dGUnXG4gICAgICArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpXG4gIH0pXG4gIGNvbnN0IG1hcmtlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCdtYXJrZXJzJykgKyAnIGFic29sdXRlIG92ZXJmbG93LWhpZGRlbicpXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ3RyYWNrLWNvbnRhaW5lcicpKVxuICBjb25zdCBwaW5DbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3BpbicpKVxuICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygnbGFiZWwnKSlcbiAgY29uc3QgdGV4dENvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygndGV4dC1jb250YWluZXInKSlcbiAgY29uc3QgbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgIGdldFBvc2l0aW9uQ2xhc3MoJ21hcmtlci1sYWJlbHMtY29udGFpbmVyJylcbiAgICArIChwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX190cmFjayByZWxhdGl2ZS1wb3NpdGlvbiBuby1vdXRsaW5lJ1xuICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyBbIHRoaWNrbmVzc1Byb3AudmFsdWUgXTogcHJvcHMudHJhY2tTaXplIH1cbiAgICBpZiAocHJvcHMudHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMudHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGlubmVyQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9faW5uZXIgYWJzb2x1dGUnXG4gICAgKyAocHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmlubmVyVHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IGlubmVyQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIGlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgWyBzaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKGlubmVyTWF4UmF0aW8udmFsdWUgLSBpbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICB9XG4gICAgaWYgKHByb3BzLmlubmVyVHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuaW5uZXJUcmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gY29udmVydFJhdGlvVG9Nb2RlbCAocmF0aW8pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSBwcm9wc1xuICAgIGxldCBtb2RlbCA9IG1pbiArIHJhdGlvICogKG1heCAtIG1pbilcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgY29uc3QgbW9kdWxvID0gKG1vZGVsIC0gbWluKSAlIHN0ZXBcbiAgICAgIG1vZGVsICs9IChNYXRoLmFicyhtb2R1bG8pID49IHN0ZXAgLyAyID8gKG1vZHVsbyA8IDAgPyAtMSA6IDEpICogc3RlcCA6IDApIC0gbW9kdWxvXG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxzLnZhbHVlID4gMCkge1xuICAgICAgbW9kZWwgPSBwYXJzZUZsb2F0KG1vZGVsLnRvRml4ZWQoZGVjaW1hbHMudmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiBiZXR3ZWVuKG1vZGVsLCBpbm5lck1pbi52YWx1ZSwgaW5uZXJNYXgudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TW9kZWxUb1JhdGlvIChtb2RlbCkge1xuICAgIHJldHVybiB0cmFja0xlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChtb2RlbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmdSYXRpbyAoZXZ0LCBkcmFnZ2luZykge1xuICAgIGNvbnN0XG4gICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgdmFsID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBiZXR3ZWVuKChwb3MudG9wIC0gZHJhZ2dpbmcudG9wKSAvIGRyYWdnaW5nLmhlaWdodCwgMCwgMSlcbiAgICAgICAgOiBiZXR3ZWVuKChwb3MubGVmdCAtIGRyYWdnaW5nLmxlZnQpIC8gZHJhZ2dpbmcud2lkdGgsIDAsIDEpXG5cbiAgICByZXR1cm4gYmV0d2VlbihcbiAgICAgIGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAxLjAgLSB2YWwgOiB2YWwsXG4gICAgICBpbm5lck1pblJhdGlvLnZhbHVlLFxuICAgICAgaW5uZXJNYXhSYXRpby52YWx1ZVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclN0ZXAgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOdW1iZXIocHJvcHMubWFya2VycykgPT09IHRydWUgPyBwcm9wcy5tYXJrZXJzIDogc3RlcC52YWx1ZSlcbiAgKVxuXG4gIGNvbnN0IG1hcmtlclRpY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IFtdXG4gICAgY29uc3Qgc3RlcCA9IG1hcmtlclN0ZXAudmFsdWVcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLm1pblxuICAgIGRvIHtcbiAgICAgIGFjYy5wdXNoKHZhbHVlKVxuICAgICAgdmFsdWUgKz0gc3RlcFxuICAgIH0gd2hpbGUgKHZhbHVlIDwgbWF4KVxuXG4gICAgYWNjLnB1c2gobWF4KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IGAgJHsgbWFya2VyUHJlZml4Q2xhc3MgfSR7IGF4aXMudmFsdWUgfS1gXG4gICAgcmV0dXJuIG1hcmtlclByZWZpeENsYXNzXG4gICAgICArIGAkeyBwcmVmaXggfSR7IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgKyBgJHsgcHJlZml4IH0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YFxuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc0xpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgcmV0dXJuIGdldE1hcmtlckxpc3QocHJvcHMubWFya2VyTGFiZWxzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKHtcbiAgICAgIGluZGV4LFxuICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlLFxuICAgICAgbGFiZWw6IGVudHJ5LmxhYmVsIHx8IGVudHJ5LnZhbHVlLFxuICAgICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZVxuICAgICAgICArIChlbnRyeS5jbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBlbnRyeS5jbGFzc2VzIDogJycpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uZ2V0TWFya2VyTGFiZWxTdHlsZShlbnRyeS52YWx1ZSksXG4gICAgICAgIC4uLihlbnRyeS5zdHlsZSB8fCB7fSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfSlcblxuICBjb25zdCBtYXJrZXJTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgbWFya2VyTGlzdDogbWFya2VyTGFiZWxzTGlzdC52YWx1ZSxcbiAgICBtYXJrZXJNYXA6IG1hcmtlckxhYmVsc01hcC52YWx1ZSxcbiAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlLCAvLyBUT0RPIHRzIGRlZmluaXRpb25cbiAgICBnZXRTdHlsZTogZ2V0TWFya2VyTGFiZWxTdHlsZVxuICB9KSlcblxuICBjb25zdCBtYXJrZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAoaW5uZXJCYXJMZW4udmFsdWUgIT09IDApIHtcbiAgICAgIGNvbnN0IHNpemUgPSAxMDAgKiBtYXJrZXJTdGVwLnZhbHVlIC8gaW5uZXJCYXJMZW4udmFsdWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5uZXJCYXJTdHlsZS52YWx1ZSxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgMnB4ICR7IHNpemUgfSVgXG4gICAgICAgICAgOiBgJHsgc2l6ZSB9JSAycHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMaXN0IChkZWYpIHtcbiAgICBpZiAoZGVmID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBpZiAoZGVmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGVmKHZhbHVlKVxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZuID0gKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gcHJvcHMubWluICYmIHZhbHVlIDw9IHByb3BzLm1heFxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRlZlxuICAgICAgICAubWFwKGl0ZW0gPT4gKGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8gaXRlbSA6IHsgdmFsdWU6IGl0ZW0gfSkpXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZikubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZGVmWyBrZXkgXVxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoa2V5KVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgIH0pLmZpbHRlcihmaWx0ZXJGbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsU3R5bGUgKHZhbCkge1xuICAgIHJldHVybiB7IFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAodmFsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlIH0lYCB9XG4gIH1cblxuICBjb25zdCBtYXJrZXJMYWJlbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgYWNjID0ge31cbiAgICBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgYWNjWyBlbnRyeS52YWx1ZSBdID0gZW50cnlcbiAgICB9KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbHNDb250ZW50ICgpIHtcbiAgICBpZiAoc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0gIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdKG1hcmtlclNjb3BlLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gc2xvdHNbICdtYXJrZXItbGFiZWwnIF0gfHwgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm5cbiAgICByZXR1cm4gbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5tYXAobWFya2VyID0+IGZuKHtcbiAgICAgIG1hcmtlcixcbiAgICAgIC4uLm1hcmtlclNjb3BlLnZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBwYW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIG9uUGFuLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBbIG9yaWVudGF0aW9uLnZhbHVlIF06IHRydWUsXG4gICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgIHN0b3A6IHRydWUsXG4gICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uUGFuIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICAgIC8vIG9ubHkgaWYgdG91Y2gsIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIG1vdXNlZG93bi91cDpcbiAgICAgICAgZXZlbnQudG91Y2ggPT09IHRydWUgJiYgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICAgICAgZHJhZ2dpbmcudmFsdWUgPSB2b2lkIDBcbiAgICAgICAgZW1pdCgncGFuJywgJ2VuZCcpXG4gICAgICB9XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuICAgICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICBkcmFnZ2luZy52YWx1ZSA9IGdldERyYWdnaW5nKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3BhbicsICdzdGFydCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKClcblxuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IHRydWVcbiAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EZWFjdGl2YXRlICgpIHtcbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIG9uQmx1cigpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2JpbGVDbGljayAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgICBpZiAoa2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRleHRDb250YWluZXJTdHlsZSAocmF0aW8pIHtcbiAgICBpZiAocHJvcHMudmVydGljYWwgPT09IHRydWUpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgcCA9ICRxLmxhbmcucnRsICE9PSBwcm9wcy5yZXZlcnNlID8gMSAtIHJhdGlvIDogcmF0aW9cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKCR7IDIgKiBwIC0gMSB9ICogJHsgcHJvcHMudGh1bWJTaXplIH0gLyAyICsgJHsgNTAgLSAxMDAgKiBwIH0lKSlgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGh1bWJSZW5kZXJGbiAodGh1bWIpIHtcbiAgICBjb25zdCBmb2N1c0NsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJldmVudEZvY3VzLnZhbHVlID09PSBmYWxzZSAmJiAoZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgfHwgZm9jdXMudmFsdWUgPT09ICdib3RoJylcbiAgICAgICAgPyAnIHEtc2xpZGVyLS1mb2N1cydcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNsaWRlcl9fdGh1bWIgcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfS0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9IGFic29sdXRlIG5vbi1zZWxlY3RhYmxlYFxuICAgICAgKyBmb2N1c0NsYXNzLnZhbHVlXG4gICAgICArICh0aHVtYi50aHVtYkNvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIudGh1bWJDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBoZWlnaHQ6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiB0aHVtYi5yYXRpby52YWx1ZSB9JWAsXG4gICAgICB6SW5kZXg6IGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlID8gMiA6IHZvaWQgMFxuICAgIH0pKVxuXG4gICAgY29uc3QgcGluQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0aHVtYi5sYWJlbENvbG9yLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxDb2xvci52YWx1ZSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHRleHRDb250YWluZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IGdldFRleHRDb250YWluZXJTdHlsZSh0aHVtYi5yYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zbGlkZXJfX3RleHQnXG4gICAgICArICh0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYkNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc2xpZGVyX190aHVtYi1zaGFwZSBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3BhdGgnLCB7IGQ6IHByb3BzLnRodW1iUGF0aCB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zbGlkZXJfX2ZvY3VzLXJpbmcgZml0JyB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgPT09IHRydWUgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUpIHtcbiAgICAgICAgdGh1bWJDb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHBpbkNsYXNzLnZhbHVlICsgJyBhYnNvbHV0ZSBmaXQgbm8tcG9pbnRlci1ldmVudHMnICsgcGluQ29sb3IudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogcHJvcHMudGh1bWJTaXplIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRleHRDb250YWluZXJTdHlsZS52YWx1ZVxuICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6IHRleHRDbGFzcy52YWx1ZSB9LCB0aHVtYi5sYWJlbC52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGluamVjdEZvcm1JbnB1dCh0aHVtYkNvbnRlbnQsICdwdXNoJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICAuLi50aHVtYi5nZXROb2RlRGF0YSgpXG4gICAgICB9LCB0aHVtYkNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoc2VsZWN0aW9uQmFyU3R5bGUsIHRyYWNrQ29udGFpbmVyVGFiaW5kZXgsIHRyYWNrQ29udGFpbmVyRXZlbnRzLCBpbmplY3RUaHVtYikge1xuICAgIGNvbnN0IHRyYWNrQ29udGVudCA9IFtdXG5cbiAgICBwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2lubmVyJyxcbiAgICAgICAgY2xhc3M6IGlubmVyQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbm5lckJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLnNlbGVjdGlvbkNvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxuICAgICAgICBjbGFzczogc2VsZWN0aW9uQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzZWxlY3Rpb25CYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5tYXJrZXJzICE9PSBmYWxzZSAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbWFya2VyJyxcbiAgICAgICAgY2xhc3M6IG1hcmtlckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogbWFya2VyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaW5qZWN0VGh1bWIodHJhY2tDb250ZW50KVxuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHJhY2tDJyxcbiAgICAgICAgICBjbGFzczogdHJhY2tDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogdHJhY2tDb250YWluZXJUYWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAuLi50cmFja0NvbnRhaW5lckV2ZW50cy52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIHRyYWNrQ29udGVudClcbiAgICAgICAgXSxcbiAgICAgICAgJ3NsaWRlJyxcbiAgICAgICAgZWRpdGFibGUudmFsdWUsICgpID0+IHBhbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgKVxuICAgIF1cblxuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlXG4gICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgIDogJ3B1c2gnXG5cbiAgICAgIGNvbnRlbnRbIGFjdGlvbiBdKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnbWFya2VyTCcsXG4gICAgICAgICAgY2xhc3M6IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzLnZhbHVlXG4gICAgICAgIH0sIGdldE1hcmtlckxhYmVsc0NvbnRlbnQoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGZvY3VzLFxuICAgICAgcHJldmVudEZvY3VzLFxuICAgICAgZHJhZ2dpbmcsXG5cbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRhYmluZGV4LFxuICAgICAgYXR0cmlidXRlcyxcblxuICAgICAgc3RlcCxcbiAgICAgIGRlY2ltYWxzLFxuICAgICAgdHJhY2tMZW4sXG4gICAgICBpbm5lck1pbixcbiAgICAgIGlubmVyTWluUmF0aW8sXG4gICAgICBpbm5lck1heCxcbiAgICAgIGlubmVyTWF4UmF0aW8sXG4gICAgICBwb3NpdGlvblByb3AsXG4gICAgICBzaXplUHJvcCxcbiAgICAgIGlzUmV2ZXJzZWRcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25BY3RpdmF0ZSxcbiAgICAgIG9uTW9iaWxlQ2xpY2ssXG4gICAgICBvbkJsdXIsXG4gICAgICBvbktleXVwLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFRodW1iUmVuZGVyRm4sXG4gICAgICBjb252ZXJ0UmF0aW9Ub01vZGVsLFxuICAgICAgY29udmVydE1vZGVsVG9SYXRpbyxcbiAgICAgIGdldERyYWdnaW5nUmF0aW9cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZUZvcm1BdHRycyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB1c2VTbGlkZXIsIHtcbiAgdXNlU2xpZGVyUHJvcHMsXG4gIHVzZVNsaWRlckVtaXRzLFxuICBrZXlDb2Rlc1xufSBmcm9tICcuL3VzZS1zbGlkZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IGdldE5vZGVEYXRhID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTbGlkZXJQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgdiA9PT0gbnVsbFxuICAgIH0sXG5cbiAgICBsYWJlbFZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogdXNlU2xpZGVyRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IHVzZVNsaWRlcih7XG4gICAgICB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLFxuICAgICAgZm9ybUF0dHJzOiB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgfSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjdXJSYXRpbyA9IHJlZigwKVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKDApXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVNb2RlbCAoKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBzdGF0ZS5pbm5lck1pbi52YWx1ZVxuICAgICAgICA6IGJldHdlZW4ocHJvcHMubW9kZWxWYWx1ZSwgc3RhdGUuaW5uZXJNaW4udmFsdWUsIHN0YXRlLmlubmVyTWF4LnZhbHVlKVxuICAgIH1cblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gYCR7IHByb3BzLm1vZGVsVmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1pbi52YWx1ZSB9fCR7IHN0YXRlLmlubmVyTWF4LnZhbHVlIH1gLFxuICAgICAgbm9ybWFsaXplTW9kZWxcbiAgICApXG5cbiAgICBub3JtYWxpemVNb2RlbCgpXG5cbiAgICBjb25zdCBtb2RlbFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKSlcbiAgICBjb25zdCByYXRpbyA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5hY3RpdmUudmFsdWUgPT09IHRydWUgPyBjdXJSYXRpby52YWx1ZSA6IG1vZGVsUmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIFsgc3RhdGUucG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgICAgWyBzdGF0ZS5zaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHJhdGlvLnZhbHVlIC0gc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuc2VsZWN0aW9uSW1nICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuc2VsZWN0aW9uSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFRodW1iID0gbWV0aG9kcy5nZXRUaHVtYlJlbmRlckZuKHtcbiAgICAgIGZvY3VzVmFsdWU6IHRydWUsXG4gICAgICBnZXROb2RlRGF0YSxcbiAgICAgIHJhdGlvLFxuICAgICAgbGFiZWw6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgcHJvcHMubGFiZWxWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFZhbHVlXG4gICAgICAgICAgOiBtb2RlbC52YWx1ZVxuICAgICAgKSksXG4gICAgICB0aHVtYkNvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy50aHVtYkNvbG9yIHx8IHByb3BzLmNvbG9yKSxcbiAgICAgIGxhYmVsQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsQ29sb3IpLFxuICAgICAgbGFiZWxUZXh0Q29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsVGV4dENvbG9yKVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFja0NvbnRhaW5lckV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogbWV0aG9kcy5vbk1vYmlsZUNsaWNrIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBvbk1vdXNlZG93bjogbWV0aG9kcy5vbkFjdGl2YXRlLFxuICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogbWV0aG9kcy5vbkJsdXIsXG4gICAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgICBvbktleXVwOiBtZXRob2RzLm9uS2V5dXBcbiAgICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChjaGFuZ2UpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSAhPT0gcHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsLnZhbHVlKVxuICAgICAgfVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERyYWdnaW5nICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKGV2ZW50LCBkcmFnZ2luZyA9IHN0YXRlLmRyYWdnaW5nLnZhbHVlKSB7XG4gICAgICBjb25zdCByYXRpbyA9IG1ldGhvZHMuZ2V0RHJhZ2dpbmdSYXRpbyhldmVudCwgZHJhZ2dpbmcpXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gbWV0aG9kcy5jb252ZXJ0UmF0aW9Ub01vZGVsKHJhdGlvKVxuXG4gICAgICBjdXJSYXRpby52YWx1ZSA9IHByb3BzLnNuYXAgIT09IHRydWUgfHwgcHJvcHMuc3RlcCA9PT0gMFxuICAgICAgICA/IHJhdGlvXG4gICAgICAgIDogbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXMgKCkge1xuICAgICAgc3RhdGUuZm9jdXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChldnQpIHtcbiAgICAgIGlmICgha2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHN0ZXBWYWwgPSAoWyAzNCwgMzMgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAxMCA6IDEpICogc3RhdGUuc3RlcC52YWx1ZSxcbiAgICAgICAgb2Zmc2V0ID0gKFxuICAgICAgICAgIChbIDM0LCAzNywgNDAgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAtMSA6IDEpXG4gICAgICAgICAgKiAoc3RhdGUuaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgICAqIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBzdGVwVmFsXG4gICAgICAgIClcblxuICAgICAgbW9kZWwudmFsdWUgPSBiZXR3ZWVuKFxuICAgICAgICBwYXJzZUZsb2F0KChtb2RlbC52YWx1ZSArIG9mZnNldCkudG9GaXhlZChzdGF0ZS5kZWNpbWFscy52YWx1ZSkpLFxuICAgICAgICBzdGF0ZS5pbm5lck1pbi52YWx1ZSxcbiAgICAgICAgc3RhdGUuaW5uZXJNYXgudmFsdWVcbiAgICAgIClcblxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWV0aG9kcy5nZXRDb250ZW50KFxuICAgICAgICBzZWxlY3Rpb25CYXJTdHlsZSxcbiAgICAgICAgc3RhdGUudGFiaW5kZXgsXG4gICAgICAgIHRyYWNrQ29udGFpbmVyRXZlbnRzLFxuICAgICAgICBub2RlID0+IHsgbm9kZS5wdXNoKGdldFRodW1iKCkpIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogc3RhdGUuY2xhc3Nlcy52YWx1ZSArIChwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsID8gJyBxLXNsaWRlci0tbm8tdmFsdWUnIDogJycpLFxuICAgICAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcblxuLy8gYWxzbyB1c2VkIGJ5IFFLbm9iXG5leHBvcnQgY29uc3QgdXNlQ2lyY3VsYXJDb21tb25Qcm9wcyA9IHtcbiAgLi4udXNlU2l6ZVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcblxuICBjb2xvcjogU3RyaW5nLFxuICBjZW50ZXJDb2xvcjogU3RyaW5nLFxuICB0cmFja0NvbG9yOiBTdHJpbmcsXG5cbiAgZm9udFNpemU6IFN0cmluZyxcbiAgcm91bmRlZDogQm9vbGVhbixcblxuICAvLyByYXRpb1xuICB0aGlja25lc3M6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMC4yLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID49IDAgJiYgdiA8PSAxXG4gIH0sXG5cbiAgYW5nbGU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuXG4gIHNob3dWYWx1ZTogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBpbnN0YW50RmVlZGJhY2s6IEJvb2xlYW5cbn1cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTaXplIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5pbXBvcnQgeyB1c2VDaXJjdWxhckNvbW1vblByb3BzIH0gZnJvbSAnLi91c2UtY2lyY3VsYXItcHJvZ3Jlc3MuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdFNhZmVseSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcblxuY29uc3RcbiAgcmFkaXVzID0gNTAsXG4gIGRpYW1ldGVyID0gMiAqIHJhZGl1cyxcbiAgY2lyY3VtZmVyZW5jZSA9IGRpYW1ldGVyICogTWF0aC5QSSxcbiAgc3Ryb2tlRGFzaEFycmF5ID0gTWF0aC5yb3VuZChjaXJjdW1mZXJlbmNlICogMTAwMCkgLyAxMDAwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ2lyY3VsYXJQcm9ncmVzcycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VDaXJjdWxhckNvbW1vblByb3BzLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uU3BlZWQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDYwMFxuICAgIH0sXG5cbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcylcblxuICAgIGNvbnN0IHN2Z1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogcHJvcHMuYW5nbGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICAgICAgICAgPyBgc2NhbGUzZCgtMSwgMSwgMSkgcm90YXRlM2QoMCwgMCwgMSwgJHsgLTkwIC0gYW5nbGUgfWRlZylgXG4gICAgICAgICAgOiBgcm90YXRlM2QoMCwgMCwgMSwgJHsgYW5nbGUgLSA5MCB9ZGVnKWBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2lyY2xlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pbnN0YW50RmVlZGJhY2sgIT09IHRydWUgJiYgcHJvcHMuaW5kZXRlcm1pbmF0ZSAhPT0gdHJ1ZVxuICAgICAgICA/IHsgdHJhbnNpdGlvbjogYHN0cm9rZS1kYXNob2Zmc2V0ICR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tcyBlYXNlIDBzLCBzdHJva2UgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zIGVhc2VgIH1cbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCB2aWV3Qm94ID0gY29tcHV0ZWQoKCkgPT4gZGlhbWV0ZXIgLyAoMSAtIHByb3BzLnRoaWNrbmVzcyAvIDIpKVxuXG4gICAgY29uc3Qgdmlld0JveEF0dHIgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYCR7IHZpZXdCb3gudmFsdWUgLyAyIH0gJHsgdmlld0JveC52YWx1ZSAvIDIgfSAkeyB2aWV3Qm94LnZhbHVlIH0gJHsgdmlld0JveC52YWx1ZSB9YFxuICAgIClcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBjb21wdXRlZCgoKSA9PiBiZXR3ZWVuKHByb3BzLnZhbHVlLCBwcm9wcy5taW4sIHByb3BzLm1heCkpXG5cbiAgICBjb25zdCBzdHJva2VEYXNoT2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4gY2lyY3VtZmVyZW5jZSAqIChcbiAgICAgIDEgLSAobm9ybWFsaXplZC52YWx1ZSAtIHByb3BzLm1pbikgLyAocHJvcHMubWF4IC0gcHJvcHMubWluKVxuICAgICkpXG5cbiAgICBjb25zdCBzdHJva2VXaWR0aCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnRoaWNrbmVzcyAvIDIgKiB2aWV3Qm94LnZhbHVlKVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2lyY2xlICh7IHRoaWNrbmVzcywgb2Zmc2V0LCBjb2xvciwgY2xzLCByb3VuZGVkIH0pIHtcbiAgICAgIHJldHVybiBoKCdjaXJjbGUnLCB7XG4gICAgICAgIGNsYXNzOiAncS1jaXJjdWxhci1wcm9ncmVzc19fJyArIGNscyArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpLFxuICAgICAgICBzdHlsZTogY2lyY2xlU3R5bGUudmFsdWUsXG4gICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiB0aGlja25lc3MsXG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5Jzogc3Ryb2tlRGFzaEFycmF5LFxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICdzdHJva2UtbGluZWNhcCc6IHJvdW5kZWQsXG4gICAgICAgIGN4OiB2aWV3Qm94LnZhbHVlLFxuICAgICAgICBjeTogdmlld0JveC52YWx1ZSxcbiAgICAgICAgcjogcmFkaXVzXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBzdmdDaGlsZCA9IFtdXG5cbiAgICAgIHByb3BzLmNlbnRlckNvbG9yICE9PSB2b2lkIDAgJiYgcHJvcHMuY2VudGVyQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgc3ZnQ2hpbGQucHVzaChcbiAgICAgICAgaCgnY2lyY2xlJywge1xuICAgICAgICAgIGNsYXNzOiBgcS1jaXJjdWxhci1wcm9ncmVzc19fY2VudGVyIHRleHQtJHsgcHJvcHMuY2VudGVyQ29sb3IgfWAsXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgcjogcmFkaXVzIC0gc3Ryb2tlV2lkdGgudmFsdWUgLyAyLFxuICAgICAgICAgIGN4OiB2aWV3Qm94LnZhbHVlLFxuICAgICAgICAgIGN5OiB2aWV3Qm94LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCAmJiBwcm9wcy50cmFja0NvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHN2Z0NoaWxkLnB1c2goXG4gICAgICAgIGdldENpcmNsZSh7XG4gICAgICAgICAgY2xzOiAndHJhY2snLFxuICAgICAgICAgIHRoaWNrbmVzczogc3Ryb2tlV2lkdGgudmFsdWUsXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy50cmFja0NvbG9yXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHN2Z0NoaWxkLnB1c2goXG4gICAgICAgIGdldENpcmNsZSh7XG4gICAgICAgICAgY2xzOiAnY2lyY2xlJyxcbiAgICAgICAgICB0aGlja25lc3M6IHN0cm9rZVdpZHRoLnZhbHVlLFxuICAgICAgICAgIG9mZnNldDogc3Ryb2tlRGFzaE9mZnNldC52YWx1ZSxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICdyb3VuZCcgOiB2b2lkIDBcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2lyY3VsYXItcHJvZ3Jlc3NfX3N2ZycsXG4gICAgICAgICAgc3R5bGU6IHN2Z1N0eWxlLnZhbHVlLFxuICAgICAgICAgIHZpZXdCb3g6IHZpZXdCb3hBdHRyLnZhbHVlLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBzdmdDaGlsZClcbiAgICAgIF1cblxuICAgICAgcHJvcHMuc2hvd1ZhbHVlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2lyY3VsYXItcHJvZ3Jlc3NfX3RleHQgYWJzb2x1dGUtZnVsbCByb3cgZmxleC1jZW50ZXIgY29udGVudC1jZW50ZXInLFxuICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiBwcm9wcy5mb250U2l6ZSB9XG4gICAgICAgIH0sIHNsb3RzLmRlZmF1bHQgIT09IHZvaWQgMCA/IHNsb3RzLmRlZmF1bHQoKSA6IFsgaCgnZGl2Jywgbm9ybWFsaXplZC52YWx1ZSkgXSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGBxLWNpcmN1bGFyLXByb2dyZXNzIHEtY2lyY3VsYXItcHJvZ3Jlc3MtLSR7IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYCxcbiAgICAgICAgc3R5bGU6IHNpemVTdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBwcm9wcy5taW4sXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogcHJvcHMubWF4LFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWUgPyB2b2lkIDAgOiBub3JtYWxpemVkLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90U2FmZWx5KHNsb3RzLmludGVybmFsLCBjaGlsZCkpIC8vIFwiaW50ZXJuYWxcIiBpcyB1c2VkIGJ5IFFLbm9iXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgc3RvcCwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuZnVuY3Rpb24gZmlsdGVyRmlsZXMgKGZpbGVzLCByZWplY3RlZEZpbGVzLCBmYWlsZWRQcm9wVmFsaWRhdGlvbiwgZmlsdGVyRm4pIHtcbiAgY29uc3QgYWNjZXB0ZWRGaWxlcyA9IFtdXG5cbiAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICBpZiAoZmlsdGVyRm4oZmlsZSkgPT09IHRydWUpIHtcbiAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlamVjdGVkRmlsZXMucHVzaCh7IGZhaWxlZFByb3BWYWxpZGF0aW9uLCBmaWxlIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBhY2NlcHRlZEZpbGVzXG59XG5cbmZ1bmN0aW9uIHN0b3BBbmRQcmV2ZW50RHJhZyAoZSkge1xuICBlICYmIGUuZGF0YVRyYW5zZmVyICYmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknKVxuICBzdG9wQW5kUHJldmVudChlKVxufVxuXG5leHBvcnQgY29uc3QgdXNlRmlsZVByb3BzID0ge1xuICBtdWx0aXBsZTogQm9vbGVhbixcbiAgYWNjZXB0OiBTdHJpbmcsXG4gIGNhcHR1cmU6IFN0cmluZyxcbiAgbWF4RmlsZVNpemU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgbWF4VG90YWxTaXplOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gIG1heEZpbGVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gIGZpbHRlcjogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZpbGVFbWl0cyA9IFsgJ3JlamVjdGVkJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7XG4gIGVkaXRhYmxlLFxuICBkbmQsXG4gIGdldEZpbGVJbnB1dCxcbiAgYWRkRmlsZXNUb1F1ZXVlXG59KSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGRuZFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IGV4dGVuc2lvbnMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuYWNjZXB0ICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMuYWNjZXB0LnNwbGl0KCcsJykubWFwKGV4dCA9PiB7XG4gICAgICAgIGV4dCA9IGV4dC50cmltKClcbiAgICAgICAgaWYgKGV4dCA9PT0gJyonKSB7IC8vIHN1cHBvcnQgXCIqXCJcbiAgICAgICAgICByZXR1cm4gJyovJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV4dC5lbmRzV2l0aCgnLyonKSkgeyAvLyBzdXBwb3J0IFwiaW1hZ2UvKlwiIG9yIFwiKi8qXCJcbiAgICAgICAgICBleHQgPSBleHQuc2xpY2UoMCwgZXh0Lmxlbmd0aCAtIDEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dC50b1VwcGVyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG4gICkpXG5cbiAgY29uc3QgbWF4RmlsZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXhGaWxlcywgMTApKVxuICBjb25zdCBtYXhUb3RhbFNpemVOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXhUb3RhbFNpemUsIDEwKSlcblxuICBmdW5jdGlvbiBwaWNrRmlsZXMgKGUpIHtcbiAgICBpZiAoZWRpdGFibGUudmFsdWUpIHtcbiAgICAgIGlmIChlICE9PSBPYmplY3QoZSkpIHtcbiAgICAgICAgZSA9IHsgdGFyZ2V0OiBudWxsIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBudWxsICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykgPT09IHRydWUpIHtcbiAgICAgICAgLy8gc3RvcCBwcm9wYWdhdGlvbiBpZiBpdCdzIG5vdCBhIHJlYWwgcG9pbnRlciBldmVudFxuICAgICAgICBlLmNsaWVudFggPT09IDAgJiYgZS5jbGllbnRZID09PSAwICYmIHN0b3AoZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGdldEZpbGVJbnB1dCgpXG4gICAgICAgIGlucHV0ICYmIGlucHV0ICE9PSBlLnRhcmdldCAmJiBpbnB1dC5jbGljayhlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEZpbGVzIChmaWxlcykge1xuICAgIGlmIChlZGl0YWJsZS52YWx1ZSAmJiBmaWxlcykge1xuICAgICAgYWRkRmlsZXNUb1F1ZXVlKG51bGwsIGZpbGVzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWxlcyAoZSwgZmlsZXNUb1Byb2Nlc3MsIGN1cnJlbnRGaWxlTGlzdCwgYXBwZW5kKSB7XG4gICAgbGV0IGZpbGVzID0gQXJyYXkuZnJvbShmaWxlc1RvUHJvY2VzcyB8fCBlLnRhcmdldC5maWxlcylcbiAgICBjb25zdCByZWplY3RlZEZpbGVzID0gW11cblxuICAgIGNvbnN0IGRvbmUgPSAoKSA9PiB7XG4gICAgICBpZiAocmVqZWN0ZWRGaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVtaXQoJ3JlamVjdGVkJywgcmVqZWN0ZWRGaWxlcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgZmlsZSB0eXBlc1xuICAgIGlmIChwcm9wcy5hY2NlcHQgIT09IHZvaWQgMCAmJiBleHRlbnNpb25zLnZhbHVlLmluZGV4T2YoJyovJykgPT09IC0xKSB7XG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnYWNjZXB0JywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBleHRlbnNpb25zLnZhbHVlLnNvbWUoZXh0ID0+IChcbiAgICAgICAgICBmaWxlLnR5cGUudG9VcHBlckNhc2UoKS5zdGFydHNXaXRoKGV4dClcbiAgICAgICAgICB8fCBmaWxlLm5hbWUudG9VcHBlckNhc2UoKS5lbmRzV2l0aChleHQpXG4gICAgICAgICkpXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGZpbHRlciBtYXggZmlsZSBzaXplXG4gICAgaWYgKHByb3BzLm1heEZpbGVTaXplICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IG1heEZpbGVTaXplID0gcGFyc2VJbnQocHJvcHMubWF4RmlsZVNpemUsIDEwKVxuICAgICAgZmlsZXMgPSBmaWx0ZXJGaWxlcyhmaWxlcywgcmVqZWN0ZWRGaWxlcywgJ21heC1maWxlLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbGUuc2l6ZSA8PSBtYXhGaWxlU2l6ZVxuICAgICAgfSlcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cbiAgICB9XG5cbiAgICAvLyBDb3Jkb3ZhL2lPUyBhbGxvd3Mgc2VsZWN0aW5nIG11bHRpcGxlIGZpbGVzIGV2ZW4gd2hlbiB0aGVcbiAgICAvLyBtdWx0aXBsZSBhdHRyaWJ1dGUgaXMgbm90IHNwZWNpZmllZC4gV2UgYWxzbyBub3JtYWxpemUgZHJhZyduJ2Ryb3BwZWRcbiAgICAvLyBmaWxlcyBoZXJlOlxuICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaWxlcyA9IFsgZmlsZXNbIDAgXSBdXG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBrZXkgdG8gdXNlIGZvciBlYWNoIGZpbGVcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS5fX2tleSA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoICsgZmlsZS5sYXN0TW9kaWZpZWQgKyBmaWxlLm5hbWUgKyBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgaWYgKGFwcGVuZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZpbGVzXG4gICAgICBjb25zdCBmaWxlbmFtZU1hcCA9IGN1cnJlbnRGaWxlTGlzdC5tYXAoZW50cnkgPT4gZW50cnkuX19rZXkpXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnZHVwbGljYXRlJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZU1hcC5pbmNsdWRlcyhmaWxlLl9fa2V5KSA9PT0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cblxuICAgIGlmIChwcm9wcy5tYXhUb3RhbFNpemUgIT09IHZvaWQgMCkge1xuICAgICAgbGV0IHNpemUgPSBhcHBlbmQgPT09IHRydWVcbiAgICAgICAgPyBjdXJyZW50RmlsZUxpc3QucmVkdWNlKCh0b3RhbCwgZmlsZSkgPT4gdG90YWwgKyBmaWxlLnNpemUsIDApXG4gICAgICAgIDogMFxuXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnbWF4LXRvdGFsLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgcmV0dXJuIHNpemUgPD0gbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgY3VzdG9tIGZpbHRlciBmdW5jdGlvbj9cbiAgICBpZiAodHlwZW9mIHByb3BzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb3BzLmZpbHRlcihmaWxlcylcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdmaWx0ZXInLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRmlsZXMuaW5jbHVkZXMoZmlsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1heEZpbGVzICE9PSB2b2lkIDApIHtcbiAgICAgIGxldCBmaWxlc051bWJlciA9IGFwcGVuZCA9PT0gdHJ1ZVxuICAgICAgICA/IGN1cnJlbnRGaWxlTGlzdC5sZW5ndGhcbiAgICAgICAgOiAwXG5cbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZXMnLCAoKSA9PiB7XG4gICAgICAgIGZpbGVzTnVtYmVyKytcbiAgICAgICAgcmV0dXJuIGZpbGVzTnVtYmVyIDw9IG1heEZpbGVzTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIGRvbmUoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmaWxlc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ292ZXIgKGUpIHtcbiAgICBzdG9wQW5kUHJldmVudERyYWcoZSlcbiAgICBkbmQudmFsdWUgIT09IHRydWUgJiYgKGRuZC52YWx1ZSA9IHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdsZWF2ZSAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50KGUpXG5cbiAgICAvLyBTYWZhcmkgYnVnOiByZWxhdGVkVGFyZ2V0IGlzIG51bGwgZm9yIG92ZXIgMTAgeWVhcnNcbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjY1NDdcbiAgICBjb25zdCBnb25lID0gZS5yZWxhdGVkVGFyZ2V0ICE9PSBudWxsIHx8IGNsaWVudC5pcy5zYWZhcmkgIT09IHRydWVcbiAgICAgID8gZS5yZWxhdGVkVGFyZ2V0ICE9PSBkbmRSZWYudmFsdWVcbiAgICAgIDogZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpLmluY2x1ZGVzKGRuZFJlZi52YWx1ZSkgPT09IGZhbHNlXG5cbiAgICBnb25lID09PSB0cnVlICYmIChkbmQudmFsdWUgPSBmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcCAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50RHJhZyhlKVxuICAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNcblxuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBhZGRGaWxlc1RvUXVldWUobnVsbCwgZmlsZXMpXG4gICAgfVxuXG4gICAgZG5kLnZhbHVlID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERuZE5vZGUgKHR5cGUpIHtcbiAgICBpZiAoZG5kLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IGRuZFJlZixcbiAgICAgICAgY2xhc3M6IGBxLSR7IHR5cGUgfV9fZG5kIGFic29sdXRlLWZ1bGxgLFxuICAgICAgICBvbkRyYWdlbnRlcjogc3RvcEFuZFByZXZlbnREcmFnLFxuICAgICAgICBvbkRyYWdvdmVyOiBzdG9wQW5kUHJldmVudERyYWcsXG4gICAgICAgIG9uRHJhZ2xlYXZlLFxuICAgICAgICBvbkRyb3BcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgcGlja0ZpbGVzLCBhZGRGaWxlcyB9KVxuXG4gIHJldHVybiB7XG4gICAgcGlja0ZpbGVzLFxuICAgIGFkZEZpbGVzLFxuICAgIG9uRHJhZ292ZXIsXG4gICAgb25EcmFnbGVhdmUsXG4gICAgcHJvY2Vzc0ZpbGVzLFxuICAgIGdldERuZE5vZGUsXG5cbiAgICBtYXhGaWxlc051bWJlcixcbiAgICBtYXhUb3RhbFNpemVOdW1iZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBpc1JlZiwgY29tcHV0ZWQsIHdhdGNoLCBwcm92aWRlLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuaW1wb3J0IFFDaXJjdWxhclByb2dyZXNzIGZyb20gJy4uL2NpcmN1bGFyLXByb2dyZXNzL1FDaXJjdWxhclByb2dyZXNzLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZUZpbGUsIHsgdXNlRmlsZVByb3BzLCB1c2VGaWxlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWxlLmpzJ1xuXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBodW1hblN0b3JhZ2VTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgdXBsb2FkZXJLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyB2bUlzRGVzdHJveWVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NMYWJlbCAocCkge1xuICByZXR1cm4gKHAgKiAxMDApLnRvRml4ZWQoMikgKyAnJSdcbn1cblxuZXhwb3J0IGNvbnN0IGNvcmVQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGaWxlUHJvcHMsXG5cbiAgbGFiZWw6IFN0cmluZyxcblxuICBjb2xvcjogU3RyaW5nLFxuICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICBzcXVhcmU6IEJvb2xlYW4sXG4gIGZsYXQ6IEJvb2xlYW4sXG4gIGJvcmRlcmVkOiBCb29sZWFuLFxuXG4gIG5vVGh1bWJuYWlsczogQm9vbGVhbixcbiAgYXV0b1VwbG9hZDogQm9vbGVhbixcbiAgaGlkZVVwbG9hZEJ0bjogQm9vbGVhbixcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgY29yZUVtaXRzID0gW1xuICAuLi51c2VGaWxlRW1pdHMsXG4gICdzdGFydCcsICdmaW5pc2gnLCAnYWRkZWQnLCAncmVtb3ZlZCdcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlcmVyIChnZXRQbHVnaW4pIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBzbG90cywgZW1pdCwgcHJveHkgfSA9IHZtXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgZnVuY3Rpb24gdXBkYXRlRmlsZVN0YXR1cyAoZmlsZSwgc3RhdHVzLCB1cGxvYWRlZFNpemUpIHtcbiAgICBmaWxlLl9fc3RhdHVzID0gc3RhdHVzXG5cbiAgICBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgIGZpbGUuX191cGxvYWRlZCA9IDBcbiAgICAgIGZpbGUuX19wcm9ncmVzcyA9IDBcbiAgICAgIGZpbGUuX19zaXplTGFiZWwgPSBodW1hblN0b3JhZ2VTaXplKGZpbGUuc2l6ZSlcbiAgICAgIGZpbGUuX19wcm9ncmVzc0xhYmVsID0gJzAuMDAlJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09ICdmYWlsZWQnKSB7XG4gICAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZmlsZS5fX3VwbG9hZGVkID0gc3RhdHVzID09PSAndXBsb2FkZWQnXG4gICAgICA/IGZpbGUuc2l6ZVxuICAgICAgOiB1cGxvYWRlZFNpemVcblxuICAgIGZpbGUuX19wcm9ncmVzcyA9IHN0YXR1cyA9PT0gJ3VwbG9hZGVkJ1xuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWluKDAuOTk5OSwgZmlsZS5fX3VwbG9hZGVkIC8gZmlsZS5zaXplKVxuXG4gICAgZmlsZS5fX3Byb2dyZXNzTGFiZWwgPSBnZXRQcm9ncmVzc0xhYmVsKGZpbGUuX19wcm9ncmVzcylcbiAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICB9XG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlKVxuICBjb25zdCBkbmQgPSByZWYoZmFsc2UpXG5cbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCBpbnB1dFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIGZpbGVzOiByZWYoW10pLFxuICAgIHF1ZXVlZEZpbGVzOiByZWYoW10pLFxuICAgIHVwbG9hZGVkRmlsZXM6IHJlZihbXSksXG4gICAgdXBsb2FkZWRTaXplOiByZWYoMCksXG5cbiAgICB1cGRhdGVGaWxlU3RhdHVzLFxuICAgIGlzQWxpdmU6ICgpID0+IHZtSXNEZXN0cm95ZWQodm0pID09PSBmYWxzZVxuICB9XG5cbiAgY29uc3Qge1xuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcbiAgICBvbkRyYWdvdmVyLFxuICAgIG9uRHJhZ2xlYXZlLFxuICAgIHByb2Nlc3NGaWxlcyxcbiAgICBnZXREbmROb2RlLFxuICAgIG1heEZpbGVzTnVtYmVyLFxuICAgIG1heFRvdGFsU2l6ZU51bWJlclxuICB9ID0gdXNlRmlsZSh7IGVkaXRhYmxlLCBkbmQsIGdldEZpbGVJbnB1dCwgYWRkRmlsZXNUb1F1ZXVlIH0pXG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgZ2V0UGx1Z2luKHsgcHJvcHMsIHNsb3RzLCBlbWl0LCBoZWxwZXJzOiBzdGF0ZSB9KSlcblxuICBpZiAoc3RhdGUuaXNCdXN5ID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZS5pc0J1c3kgPSByZWYoZmFsc2UpXG4gIH1cblxuICBjb25zdCB1cGxvYWRTaXplID0gcmVmKDApXG4gIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHVwbG9hZFNpemUudmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiBzdGF0ZS51cGxvYWRlZFNpemUudmFsdWUgLyB1cGxvYWRTaXplLnZhbHVlXG4gICkpXG4gIGNvbnN0IHVwbG9hZFByb2dyZXNzTGFiZWwgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9ncmVzc0xhYmVsKHVwbG9hZFByb2dyZXNzLnZhbHVlKSlcbiAgY29uc3QgdXBsb2FkU2l6ZUxhYmVsID0gY29tcHV0ZWQoKCkgPT4gaHVtYW5TdG9yYWdlU2l6ZSh1cGxvYWRTaXplLnZhbHVlKSlcblxuICBjb25zdCBjYW5BZGRGaWxlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICAmJiBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSAhPT0gdHJ1ZVxuICAgIC8vIGlmIHNpbmdsZSBzZWxlY3Rpb24gYW5kIG5vIGZpbGVzIGFyZSBxdWV1ZWQ6XG4gICAgJiYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlIHx8IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAvLyBpZiBtYXgtZmlsZXMgaXMgc2V0IGFuZCBjdXJyZW50IG51bWJlciBvZiBmaWxlcyBkb2VzIG5vdCBleGNlZWRzIGl0OlxuICAgICYmIChwcm9wcy5tYXhGaWxlcyA9PT0gdm9pZCAwIHx8IHN0YXRlLmZpbGVzLnZhbHVlLmxlbmd0aCA8IG1heEZpbGVzTnVtYmVyLnZhbHVlKVxuICAgIC8vIGlmIG1heC10b3RhbC1zaXplIGlzIHNldCBhbmQgY3VycmVudCB1cGxvYWQgc2l6ZSBkb2VzIG5vdCBleGNlZWRzIGl0OlxuICAgICYmIChwcm9wcy5tYXhUb3RhbFNpemUgPT09IHZvaWQgMCB8fCB1cGxvYWRTaXplLnZhbHVlIDwgbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlKVxuICApXG5cbiAgY29uc3QgY2FuVXBsb2FkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzQnVzeS52YWx1ZSAhPT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgc3RhdGUucXVldWVkRmlsZXMudmFsdWUubGVuZ3RoID4gMFxuICApXG5cbiAgcHJvdmlkZSh1cGxvYWRlcktleSwgcmVuZGVySW5wdXQpXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdXBsb2FkZXIgY29sdW1uIG5vLXdyYXAnXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tYm9yZGVyZWQnIDogJycpXG4gICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1zcXVhcmUgbm8tYm9yZGVyLXJhZGl1cycgOiAnJylcbiAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1mbGF0IG5vLXNoYWRvdycgOiAnJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCBxLXVwbG9hZGVyLS1kaXNhYmxlJyA6ICcnKVxuICAgICsgKGRuZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tZG5kJyA6ICcnKVxuICApXG5cbiAgY29uc3QgY29sb3JDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdXBsb2FkZXJfX2hlYWRlcidcbiAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICsgKHByb3BzLnRleHRDb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YCA6ICcnKVxuICApXG5cbiAgd2F0Y2goc3RhdGUuaXNVcGxvYWRpbmcsIChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgIGlmIChvbGRWYWwgPT09IGZhbHNlICYmIG5ld1ZhbCA9PT0gdHJ1ZSkge1xuICAgICAgZW1pdCgnc3RhcnQnKVxuICAgIH1cbiAgICBlbHNlIGlmIChvbGRWYWwgPT09IHRydWUgJiYgbmV3VmFsID09PSBmYWxzZSkge1xuICAgICAgZW1pdCgnZmluaXNoJylcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSBmYWxzZSkge1xuICAgICAgc3RhdGUuYWJvcnQoKVxuICAgICAgc3RhdGUudXBsb2FkZWRTaXplLnZhbHVlID0gMFxuICAgICAgdXBsb2FkU2l6ZS52YWx1ZSA9IDBcbiAgICAgIHJldm9rZUltZ1VSTHMoKVxuICAgICAgc3RhdGUuZmlsZXMudmFsdWUgPSBbXVxuICAgICAgc3RhdGUucXVldWVkRmlsZXMudmFsdWUgPSBbXVxuICAgICAgc3RhdGUudXBsb2FkZWRGaWxlcy52YWx1ZSA9IFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVXBsb2FkZWRGaWxlcyAoKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IGZhbHNlKSB7XG4gICAgICBiYXRjaFJlbW92ZUZpbGVzKFsgJ3VwbG9hZGVkJyBdLCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBbXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVRdWV1ZWRGaWxlcyAoKSB7XG4gICAgYmF0Y2hSZW1vdmVGaWxlcyhbICdpZGxlJywgJ2ZhaWxlZCcgXSwgKHsgc2l6ZSB9KSA9PiB7XG4gICAgICB1cGxvYWRTaXplLnZhbHVlIC09IHNpemVcbiAgICAgIHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlID0gW11cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYmF0Y2hSZW1vdmVGaWxlcyAoc3RhdHVzTGlzdCwgY2IpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlZCA9IHtcbiAgICAgIGZpbGVzOiBbXSxcbiAgICAgIHNpemU6IDBcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbEZpbGVzID0gc3RhdGUuZmlsZXMudmFsdWUuZmlsdGVyKGYgPT4ge1xuICAgICAgaWYgKHN0YXR1c0xpc3QuaW5kZXhPZihmLl9fc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlZC5zaXplICs9IGYuc2l6ZVxuICAgICAgcmVtb3ZlZC5maWxlcy5wdXNoKGYpXG5cbiAgICAgIGYuX19pbWcgIT09IHZvaWQgMCAmJiB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChmLl9faW1nLnNyYylcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmIChyZW1vdmVkLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXRlLmZpbGVzLnZhbHVlID0gbG9jYWxGaWxlc1xuICAgICAgY2IocmVtb3ZlZClcbiAgICAgIGVtaXQoJ3JlbW92ZWQnLCByZW1vdmVkLmZpbGVzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZpbGUgKGZpbGUpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSkgeyByZXR1cm4gfVxuXG4gICAgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcpIHtcbiAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgICBmaWxlLl9fYWJvcnQoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgLT0gZmlsZS5zaXplXG4gICAgfVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5maWx0ZXIoZiA9PiB7XG4gICAgICBpZiAoZi5fX2tleSAhPT0gZmlsZS5fX2tleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBmLl9faW1nICE9PSB2b2lkIDAgJiYgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZi5fX2ltZy5zcmMpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgZW1pdCgncmVtb3ZlZCcsIFsgZmlsZSBdKVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2b2tlSW1nVVJMcyAoKSB7XG4gICAgc3RhdGUuZmlsZXMudmFsdWUuZm9yRWFjaChmID0+IHtcbiAgICAgIGYuX19pbWcgIT09IHZvaWQgMCAmJiB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChmLl9faW1nLnNyYylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmlsZUlucHV0ICgpIHtcbiAgICByZXR1cm4gaW5wdXRSZWYudmFsdWVcbiAgICAgIHx8IHJvb3RSZWYudmFsdWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncS11cGxvYWRlcl9faW5wdXQnKVsgMCBdXG4gIH1cblxuICBmdW5jdGlvbiBhZGRGaWxlc1RvUXVldWUgKGUsIGZpbGVMaXN0KSB7XG4gICAgY29uc3QgbG9jYWxGaWxlcyA9IHByb2Nlc3NGaWxlcyhlLCBmaWxlTGlzdCwgc3RhdGUuZmlsZXMudmFsdWUsIHRydWUpXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZ2V0RmlsZUlucHV0KClcblxuICAgIGlmIChmaWxlSW5wdXQgIT09IHZvaWQgMCAmJiBmaWxlSW5wdXQgIT09IG51bGwpIHtcbiAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgaWYgKGxvY2FsRmlsZXMgPT09IHZvaWQgMCkgeyByZXR1cm4gfVxuXG4gICAgbG9jYWxGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgc3RhdGUudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAnaWRsZScpXG4gICAgICB1cGxvYWRTaXplLnZhbHVlICs9IGZpbGUuc2l6ZVxuXG4gICAgICBpZiAocHJvcHMubm9UaHVtYm5haWxzICE9PSB0cnVlICYmIGZpbGUudHlwZS50b1VwcGVyQ2FzZSgpLnN0YXJ0c1dpdGgoJ0lNQUdFJykpIHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgIGZpbGUuX19pbWcgPSBpbWdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5jb25jYXQobG9jYWxGaWxlcylcbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmNvbmNhdChsb2NhbEZpbGVzKVxuICAgIGVtaXQoJ2FkZGVkJywgbG9jYWxGaWxlcylcbiAgICBwcm9wcy5hdXRvVXBsb2FkID09PSB0cnVlICYmIHN0YXRlLnVwbG9hZCgpXG4gIH1cblxuICBmdW5jdGlvbiB1cGxvYWQgKCkge1xuICAgIGNhblVwbG9hZC52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS51cGxvYWQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QnRuIChzaG93LCBpY29uLCBmbikge1xuICAgIGlmIChzaG93ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0eXBlOiAnYScsXG4gICAgICAgIGtleTogaWNvbixcbiAgICAgICAgaWNvbjogJHEuaWNvblNldC51cGxvYWRlclsgaWNvbiBdLFxuICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICBkZW5zZTogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGQgPSB2b2lkIDBcblxuICAgICAgaWYgKGljb24gPT09ICdhZGQnKSB7XG4gICAgICAgIGRhdGEub25DbGljayA9IHBpY2tGaWxlc1xuICAgICAgICBjaGlsZCA9IHJlbmRlcklucHV0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gZm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySW5wdXQgKCkge1xuICAgIHJldHVybiBoKCdpbnB1dCcsIHtcbiAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2lucHV0IG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIHRpdGxlOiAnJywgLy8gdHJ5IHRvIHJlbW92ZSBkZWZhdWx0IHRvb2x0aXBcbiAgICAgIGFjY2VwdDogcHJvcHMuYWNjZXB0LFxuICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ211bHRpcGxlJyA6IHZvaWQgMCxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBvbk1vdXNlZG93bjogc3RvcCwgLy8gbmVlZCB0byBzdG9wIHJlZm9jdXMgZnJvbSBRQnRuXG4gICAgICBvbkNsaWNrOiBwaWNrRmlsZXMsXG4gICAgICBvbkNoYW5nZTogYWRkRmlsZXNUb1F1ZXVlXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgaWYgKHNsb3RzLmhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHMuaGVhZGVyKHB1YmxpY0FwaSlcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2hlYWRlci1jb250ZW50IGNvbHVtbidcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAnZmxleCBmbGV4LWNlbnRlciBuby13cmFwIHEtZ3V0dGVyLXhzJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmxlbmd0aCA+IDAsICdyZW1vdmVRdWV1ZScsIHJlbW92ZVF1ZXVlZEZpbGVzKSxcbiAgICAgICAgICBnZXRCdG4oc3RhdGUudXBsb2FkZWRGaWxlcy52YWx1ZS5sZW5ndGggPiAwLCAncmVtb3ZlVXBsb2FkZWQnLCByZW1vdmVVcGxvYWRlZEZpbGVzKSxcblxuICAgICAgICAgIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUVNwaW5uZXIsIHsgY2xhc3M6ICdxLXVwbG9hZGVyX19zcGlubmVyJyB9KVxuICAgICAgICAgICAgOiBudWxsLFxuXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2NvbCBjb2x1bW4ganVzdGlmeS1jZW50ZXInIH0sIFtcbiAgICAgICAgICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fdGl0bGUnIH0sIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgICAgICAgICAgOiBudWxsLFxuXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fc3VidGl0bGUnIH0sIFtcbiAgICAgICAgICAgICAgdXBsb2FkU2l6ZUxhYmVsLnZhbHVlICsgJyAvICcgKyB1cGxvYWRQcm9ncmVzc0xhYmVsLnZhbHVlXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgZ2V0QnRuKGNhbkFkZEZpbGVzLnZhbHVlLCAnYWRkJyksXG4gICAgICAgICAgZ2V0QnRuKHByb3BzLmhpZGVVcGxvYWRCdG4gPT09IGZhbHNlICYmIGNhblVwbG9hZC52YWx1ZSA9PT0gdHJ1ZSwgJ3VwbG9hZCcsIHN0YXRlLnVwbG9hZCksXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlLCAnY2xlYXInLCBzdGF0ZS5hYm9ydClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgaWYgKHNsb3RzLmxpc3QgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzLmxpc3QocHVibGljQXBpKVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZS5maWxlcy52YWx1ZS5tYXAoZmlsZSA9PiBoKCdkaXYnLCB7XG4gICAgICBrZXk6IGZpbGUuX19rZXksXG4gICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2ZpbGUgcmVsYXRpdmUtcG9zaXRpb24nXG4gICAgICAgICsgKHByb3BzLm5vVGh1bWJuYWlscyAhPT0gdHJ1ZSAmJiBmaWxlLl9faW1nICE9PSB2b2lkIDAgPyAnIHEtdXBsb2FkZXJfX2ZpbGUtLWltZycgOiAnJylcbiAgICAgICAgKyAoXG4gICAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICAgID8gJyBxLXVwbG9hZGVyX19maWxlLS1mYWlsZWQnXG4gICAgICAgICAgICA6IChmaWxlLl9fc3RhdHVzID09PSAndXBsb2FkZWQnID8gJyBxLXVwbG9hZGVyX19maWxlLS11cGxvYWRlZCcgOiAnJylcbiAgICAgICAgKSxcbiAgICAgIHN0eWxlOiBwcm9wcy5ub1RodW1ibmFpbHMgIT09IHRydWUgJiYgZmlsZS5fX2ltZyAhPT0gdm9pZCAwXG4gICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgZmlsZS5fX2ltZy5zcmMgKyAnXCIpJyB9XG4gICAgICAgIDogbnVsbFxuICAgIH0sIFtcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXVwbG9hZGVyX19maWxlLWhlYWRlciByb3cgZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgIH0sIFtcbiAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1zdGF0dXMnLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50eXBlLm5lZ2F0aXZlLFxuICAgICAgICAgICAgY29sb3I6ICduZWdhdGl2ZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogbnVsbCxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1oZWFkZXItY29udGVudCBjb2wnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fdGl0bGUnIH0sIFsgZmlsZS5uYW1lIF0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fc3VidGl0bGUgcm93IGl0ZW1zLWNlbnRlciBuby13cmFwJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGZpbGUuX19zaXplTGFiZWwgKyAnIC8gJyArIGZpbGUuX19wcm9ncmVzc0xhYmVsXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ3VwbG9hZGluZydcbiAgICAgICAgICA/IGgoUUNpcmN1bGFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICAgIHZhbHVlOiBmaWxlLl9fcHJvZ3Jlc3MsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiBmaWxlLl9fcHJvZ3Jlc3MgPT09IDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogaChRQnRuLCB7XG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQudXBsb2FkZXJbIGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcgPyAnZG9uZScgOiAnY2xlYXInIF0sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHJlbW92ZUZpbGUoZmlsZSkgfVxuICAgICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pKVxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5hYm9ydCgpXG4gICAgc3RhdGUuZmlsZXMudmFsdWUubGVuZ3RoID4gMCAmJiByZXZva2VJbWdVUkxzKClcbiAgfSlcblxuICBjb25zdCBwdWJsaWNBcGkgPSB7fVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKGlzUmVmKHN0YXRlWyBrZXkgXSkgPT09IHRydWUpIHtcbiAgICAgIGluamVjdFByb3AocHVibGljQXBpLCBrZXksICgpID0+IHN0YXRlWyBrZXkgXS52YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7IC8vIG1ldGhvZCBvciBub24tY29tcHV0ZWQgcHJvcFxuICAgICAgcHVibGljQXBpWyBrZXkgXSA9IHN0YXRlWyBrZXkgXVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24ocHVibGljQXBpLCB7XG4gICAgdXBsb2FkLFxuICAgIHJlc2V0LFxuICAgIHJlbW92ZVVwbG9hZGVkRmlsZXMsXG4gICAgcmVtb3ZlUXVldWVkRmlsZXMsXG4gICAgcmVtb3ZlRmlsZSxcblxuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlc1xuICB9KVxuXG4gIGluamVjdE11bHRpcGxlUHJvcHMocHVibGljQXBpLCB7XG4gICAgY2FuQWRkRmlsZXM6ICgpID0+IGNhbkFkZEZpbGVzLnZhbHVlLFxuICAgIGNhblVwbG9hZDogKCkgPT4gY2FuVXBsb2FkLnZhbHVlLFxuICAgIHVwbG9hZFNpemVMYWJlbDogKCkgPT4gdXBsb2FkU2l6ZUxhYmVsLnZhbHVlLFxuICAgIHVwbG9hZFByb2dyZXNzTGFiZWw6ICgpID0+IHVwbG9hZFByb2dyZXNzTGFiZWwudmFsdWVcbiAgfSlcblxuICAvLyBleHBvc2UgcHVibGljIGFwaSAobWV0aG9kcyAmIGNvbXB1dGVkIHByb3BzKVxuICBPYmplY3QuYXNzaWduKHByb3h5LCBwdWJsaWNBcGkpXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGNvbG9yQ2xhc3MudmFsdWUgfSwgZ2V0SGVhZGVyKCkpLFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX2xpc3Qgc2Nyb2xsJyB9LCBnZXRMaXN0KCkpLFxuICAgICAgZ2V0RG5kTm9kZSgndXBsb2FkZXInKVxuICAgIF1cblxuICAgIHN0YXRlLmlzQnVzeS52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZHJlbi5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX292ZXJsYXkgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgfSwgWyBoKFFTcGlubmVyKSBdKVxuICAgIClcblxuICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNsYXNzZXMudmFsdWUgfVxuXG4gICAgaWYgKGNhbkFkZEZpbGVzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHsgb25EcmFnb3Zlciwgb25EcmFnbGVhdmUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn1cbiIsImNvbnN0IHRydWVGbiA9ICgpID0+IHRydWVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVtaXRzQXJyYXkpIHtcbiAgY29uc3QgZW1pdHNPYmplY3QgPSB7fVxuXG4gIGVtaXRzQXJyYXkuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGVtaXRzT2JqZWN0WyB2YWwgXSA9IHRydWVGblxuICB9KVxuXG4gIHJldHVybiBlbWl0c09iamVjdFxufVxuIiwiaW1wb3J0IHsgY29yZVByb3BzLCBjb3JlRW1pdHMsIGdldFJlbmRlcmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGxvYWRlci91cGxvYWRlci1jb3JlLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IGdldEVtaXRzT2JqZWN0IGZyb20gJy4vcHJpdmF0ZS9nZXQtZW1pdHMtb2JqZWN0LmpzJ1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2lzLmpzJ1xuXG5jb25zdCBjb3JlRW1pdHNPYmplY3QgPSBnZXRFbWl0c09iamVjdChjb3JlRW1pdHMpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IG5hbWUsIHByb3BzLCBlbWl0cywgaW5qZWN0UGx1Z2luIH0pID0+IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWUsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5jb3JlUHJvcHMsXG4gICAgLi4ucHJvcHNcbiAgfSxcblxuICBlbWl0czogaXNPYmplY3QoZW1pdHMpID09PSB0cnVlXG4gICAgPyB7IC4uLmNvcmVFbWl0c09iamVjdCwgLi4uZW1pdHMgfVxuICAgIDogWyAuLi5jb3JlRW1pdHMsIC4uLmVtaXRzIF0sXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiBnZXRSZW5kZXJlcihpbmplY3RQbHVnaW4pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRGbiAocHJvcCkge1xuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbidcbiAgICA/IHByb3BcbiAgICA6ICgpID0+IHByb3Bcbn1cblxuY29uc3QgcHJvcHMgPSB7XG4gIHVybDogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gIG1ldGhvZDoge1xuICAgIHR5cGU6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6ICdQT1NUJ1xuICB9LFxuICBmaWVsZE5hbWU6IHtcbiAgICB0eXBlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZSA9PiBmaWxlLm5hbWVcbiAgICB9XG4gIH0sXG4gIGhlYWRlcnM6IFsgRnVuY3Rpb24sIEFycmF5IF0sXG4gIGZvcm1GaWVsZHM6IFsgRnVuY3Rpb24sIEFycmF5IF0sXG4gIHdpdGhDcmVkZW50aWFsczogWyBGdW5jdGlvbiwgQm9vbGVhbiBdLFxuICBzZW5kUmF3OiBbIEZ1bmN0aW9uLCBCb29sZWFuIF0sXG5cbiAgYmF0Y2g6IFsgRnVuY3Rpb24sIEJvb2xlYW4gXSxcbiAgZmFjdG9yeTogRnVuY3Rpb25cbn1cblxuY29uc3QgZW1pdHMgPSBbICdmYWN0b3J5LWZhaWxlZCcsICd1cGxvYWRlZCcsICdmYWlsZWQnLCAndXBsb2FkaW5nJyBdXG5cbmZ1bmN0aW9uIGluamVjdFBsdWdpbiAoeyBwcm9wcywgZW1pdCwgaGVscGVycyB9KSB7XG4gIGNvbnN0IHhocnMgPSByZWYoW10pXG4gIGNvbnN0IHByb21pc2VzID0gcmVmKFtdKVxuICBjb25zdCB3b3JraW5nVGhyZWFkcyA9IHJlZigwKVxuXG4gIGNvbnN0IHhoclByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICB1cmw6IGdldEZuKHByb3BzLnVybCksXG4gICAgbWV0aG9kOiBnZXRGbihwcm9wcy5tZXRob2QpLFxuICAgIGhlYWRlcnM6IGdldEZuKHByb3BzLmhlYWRlcnMpLFxuICAgIGZvcm1GaWVsZHM6IGdldEZuKHByb3BzLmZvcm1GaWVsZHMpLFxuICAgIGZpZWxkTmFtZTogZ2V0Rm4ocHJvcHMuZmllbGROYW1lKSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGdldEZuKHByb3BzLndpdGhDcmVkZW50aWFscyksXG4gICAgc2VuZFJhdzogZ2V0Rm4ocHJvcHMuc2VuZFJhdyksXG4gICAgYmF0Y2g6IGdldEZuKHByb3BzLmJhdGNoKVxuICB9KSlcblxuICBjb25zdCBpc1VwbG9hZGluZyA9IGNvbXB1dGVkKCgpID0+IHdvcmtpbmdUaHJlYWRzLnZhbHVlID4gMClcbiAgY29uc3QgaXNCdXN5ID0gY29tcHV0ZWQoKCkgPT4gcHJvbWlzZXMudmFsdWUubGVuZ3RoID4gMClcblxuICBsZXQgYWJvcnRQcm9taXNlc1xuXG4gIGZ1bmN0aW9uIGFib3J0ICgpIHtcbiAgICB4aHJzLnZhbHVlLmZvckVhY2goeCA9PiB7IHguYWJvcnQoKSB9KVxuXG4gICAgaWYgKHByb21pc2VzLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGFib3J0UHJvbWlzZXMgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBsb2FkICgpIHtcbiAgICBjb25zdCBxdWV1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuc2xpY2UoMClcbiAgICBoZWxwZXJzLnF1ZXVlZEZpbGVzLnZhbHVlID0gW11cblxuICAgIGlmICh4aHJQcm9wcy52YWx1ZS5iYXRjaChxdWV1ZSkpIHtcbiAgICAgIHJ1bkZhY3RvcnkocXVldWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcXVldWUuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgcnVuRmFjdG9yeShbIGZpbGUgXSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcnVuRmFjdG9yeSAoZmlsZXMpIHtcbiAgICB3b3JraW5nVGhyZWFkcy52YWx1ZSsrXG5cbiAgICBpZiAodHlwZW9mIHByb3BzLmZhY3RvcnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBlcmZvcm1VcGxvYWQoZmlsZXMsIHt9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gcHJvcHMuZmFjdG9yeShmaWxlcylcblxuICAgIGlmICghcmVzKSB7XG4gICAgICBlbWl0KFxuICAgICAgICAnZmFjdG9yeS1mYWlsZWQnLFxuICAgICAgICBuZXcgRXJyb3IoJ1FVcGxvYWRlcjogZmFjdG9yeSgpIGRvZXMgbm90IHJldHVybiBwcm9wZXJseScpLFxuICAgICAgICBmaWxlc1xuICAgICAgKVxuICAgICAgd29ya2luZ1RocmVhZHMudmFsdWUtLVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzLmNhdGNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvbWlzZXMudmFsdWUucHVzaChyZXMpXG5cbiAgICAgIGNvbnN0IGZhaWxlZCA9IGVyciA9PiB7XG4gICAgICAgIGlmIChoZWxwZXJzLmlzQWxpdmUoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHByb21pc2VzLnZhbHVlID0gcHJvbWlzZXMudmFsdWUuZmlsdGVyKHAgPT4gcCAhPT0gcmVzKVxuXG4gICAgICAgICAgaWYgKHByb21pc2VzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWJvcnRQcm9taXNlcyA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuY29uY2F0KGZpbGVzKVxuICAgICAgICAgIGZpbGVzLmZvckVhY2goZiA9PiB7IGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmLCAnZmFpbGVkJykgfSlcblxuICAgICAgICAgIGVtaXQoJ2ZhY3RvcnktZmFpbGVkJywgZXJyLCBmaWxlcylcbiAgICAgICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzLnRoZW4oZmFjdG9yeSA9PiB7XG4gICAgICAgIGlmIChhYm9ydFByb21pc2VzID09PSB0cnVlKSB7XG4gICAgICAgICAgZmFpbGVkKG5ldyBFcnJvcignQWJvcnRlZCcpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlbHBlcnMuaXNBbGl2ZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgcHJvbWlzZXMudmFsdWUgPSBwcm9taXNlcy52YWx1ZS5maWx0ZXIocCA9PiBwICE9PSByZXMpXG4gICAgICAgICAgcGVyZm9ybVVwbG9hZChmaWxlcywgZmFjdG9yeSlcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZmFpbGVkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBlcmZvcm1VcGxvYWQoZmlsZXMsIHJlcyB8fCB7fSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtVXBsb2FkIChmaWxlcywgZmFjdG9yeSkge1xuICAgIGNvbnN0XG4gICAgICBmb3JtID0gbmV3IEZvcm1EYXRhKCksXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgY29uc3QgZ2V0UHJvcCA9IChuYW1lLCBhcmcpID0+IHtcbiAgICAgIHJldHVybiBmYWN0b3J5WyBuYW1lIF0gIT09IHZvaWQgMFxuICAgICAgICA/IGdldEZuKGZhY3RvcnlbIG5hbWUgXSkoYXJnKVxuICAgICAgICA6IHhoclByb3BzLnZhbHVlWyBuYW1lIF0oYXJnKVxuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGdldFByb3AoJ3VybCcsIGZpbGVzKVxuXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3EtdXBsb2FkZXI6IGludmFsaWQgb3Igbm8gVVJMIHNwZWNpZmllZCcpXG4gICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSBnZXRQcm9wKCdmb3JtRmllbGRzJywgZmlsZXMpXG4gICAgZmllbGRzICE9PSB2b2lkIDAgJiYgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgZm9ybS5hcHBlbmQoZmllbGQubmFtZSwgZmllbGQudmFsdWUpXG4gICAgfSlcblxuICAgIGxldFxuICAgICAgdXBsb2FkSW5kZXggPSAwLFxuICAgICAgdXBsb2FkSW5kZXhTaXplID0gMCxcbiAgICAgIGxvY2FsVXBsb2FkZWRTaXplID0gMCxcbiAgICAgIG1heFVwbG9hZFNpemUgPSAwLFxuICAgICAgYWJvcnRlZFxuXG4gICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgaWYgKGFib3J0ZWQgPT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgbG9hZGVkID0gTWF0aC5taW4obWF4VXBsb2FkU2l6ZSwgZS5sb2FkZWQpXG5cbiAgICAgIGhlbHBlcnMudXBsb2FkZWRTaXplLnZhbHVlICs9IGxvYWRlZCAtIGxvY2FsVXBsb2FkZWRTaXplXG4gICAgICBsb2NhbFVwbG9hZGVkU2l6ZSA9IGxvYWRlZFxuXG4gICAgICBsZXQgc2l6ZSA9IGxvY2FsVXBsb2FkZWRTaXplIC0gdXBsb2FkSW5kZXhTaXplXG4gICAgICBmb3IgKGxldCBpID0gdXBsb2FkSW5kZXg7IHNpemUgPiAwICYmIGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGZpbGUgPSBmaWxlc1sgaSBdLFxuICAgICAgICAgIHVwbG9hZGVkID0gc2l6ZSA+IGZpbGUuc2l6ZVxuXG4gICAgICAgIGlmICh1cGxvYWRlZCkge1xuICAgICAgICAgIHNpemUgLT0gZmlsZS5zaXplXG4gICAgICAgICAgdXBsb2FkSW5kZXgrK1xuICAgICAgICAgIHVwbG9hZEluZGV4U2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgICBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZmlsZSwgJ3VwbG9hZGluZycsIGZpbGUuc2l6ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZmlsZSwgJ3VwbG9hZGluZycsIHNpemUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBmYWxzZSlcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPCA0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoeGhyLnN0YXR1cyAmJiB4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgIGhlbHBlcnMudXBsb2FkZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMudXBsb2FkZWRGaWxlcy52YWx1ZS5jb25jYXQoZmlsZXMpXG4gICAgICAgIGZpbGVzLmZvckVhY2goZiA9PiB7IGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmLCAndXBsb2FkZWQnKSB9KVxuICAgICAgICBlbWl0KCd1cGxvYWRlZCcsIHsgZmlsZXMsIHhociB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFib3J0ZWQgPSB0cnVlXG4gICAgICAgIGhlbHBlcnMudXBsb2FkZWRTaXplLnZhbHVlIC09IGxvY2FsVXBsb2FkZWRTaXplXG4gICAgICAgIGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUgPSBoZWxwZXJzLnF1ZXVlZEZpbGVzLnZhbHVlLmNvbmNhdChmaWxlcylcbiAgICAgICAgZmlsZXMuZm9yRWFjaChmID0+IHsgaGVscGVycy51cGRhdGVGaWxlU3RhdHVzKGYsICdmYWlsZWQnKSB9KVxuICAgICAgICBlbWl0KCdmYWlsZWQnLCB7IGZpbGVzLCB4aHIgfSlcbiAgICAgIH1cblxuICAgICAgd29ya2luZ1RocmVhZHMudmFsdWUtLVxuICAgICAgeGhycy52YWx1ZSA9IHhocnMudmFsdWUuZmlsdGVyKHggPT4geCAhPT0geGhyKVxuICAgIH1cblxuICAgIHhoci5vcGVuKFxuICAgICAgZ2V0UHJvcCgnbWV0aG9kJywgZmlsZXMpLFxuICAgICAgdXJsXG4gICAgKVxuXG4gICAgaWYgKGdldFByb3AoJ3dpdGhDcmVkZW50aWFscycsIGZpbGVzKSA9PT0gdHJ1ZSkge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0UHJvcCgnaGVhZGVycycsIGZpbGVzKVxuICAgIGhlYWRlcnMgIT09IHZvaWQgMCAmJiBoZWFkZXJzLmZvckVhY2goaGVhZCA9PiB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkLm5hbWUsIGhlYWQudmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IHNlbmRSYXcgPSBnZXRQcm9wKCdzZW5kUmF3JywgZmlsZXMpXG5cbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgaGVscGVycy51cGRhdGVGaWxlU3RhdHVzKGZpbGUsICd1cGxvYWRpbmcnLCAwKVxuICAgICAgaWYgKHNlbmRSYXcgIT09IHRydWUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoZ2V0UHJvcCgnZmllbGROYW1lJywgZmlsZSksIGZpbGUsIGZpbGUubmFtZSlcbiAgICAgIH1cbiAgICAgIGZpbGUueGhyID0geGhyXG4gICAgICBmaWxlLl9fYWJvcnQgPSAoKSA9PiB7IHhoci5hYm9ydCgpIH1cbiAgICAgIG1heFVwbG9hZFNpemUgKz0gZmlsZS5zaXplXG4gICAgfSlcblxuICAgIGVtaXQoJ3VwbG9hZGluZycsIHsgZmlsZXMsIHhociB9KVxuICAgIHhocnMudmFsdWUucHVzaCh4aHIpXG5cbiAgICBpZiAoc2VuZFJhdyA9PT0gdHJ1ZSkge1xuICAgICAgeGhyLnNlbmQobmV3IEJsb2IoZmlsZXMpKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHhoci5zZW5kKGZvcm0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1VwbG9hZGluZyxcbiAgICBpc0J1c3ksXG5cbiAgICBhYm9ydCxcbiAgICB1cGxvYWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdRVXBsb2FkZXInLFxuICBwcm9wcyxcbiAgZW1pdHMsXG4gIGluamVjdFBsdWdpblxufVxuIiwiaW1wb3J0IGNyZWF0ZVVwbG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZS11cGxvYWRlci1jb21wb25lbnQuanMnXG5pbXBvcnQgeGhyVXBsb2FkZXJQbHVnaW4gZnJvbSAnLi94aHItdXBsb2FkZXItcGx1Z2luLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVcGxvYWRlckNvbXBvbmVudCh4aHJVcGxvYWRlclBsdWdpbilcbiIsIjwhLS0gLypcbiAqIENvcHlyaWdodCAoQykgQ29udHJpYnV0b3JzIHRvIHRoZSBTdXdheW9taSBwcm9qZWN0XG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1saXN0IHNlcGFyYXRvciA6ZGFyaz1cIiRxLmRhcmsuaXNBY3RpdmVcIiA6c3R5bGUtZm49XCJteVR3ZWFrXCI+XG4gICAgPCEtLSBjYXRlZ29yaWVzIC0tPlxuICAgIDxxLWl0ZW0gdG89XCIvc2V0dGluZ3MvY2F0ZWdvcmllc1wiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiY2F0ZWdvcnlcIiAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5DYXRlZ29yaWVzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gZGFyayBtb2RlIC0tPlxuICAgIDxxLWl0ZW1cbiAgICAgIGNsaWNrYWJsZVxuICAgICAgdi1yaXBwbGVcbiAgICAgIEBjbGljaz1cImRhcmttb2RlID0gIWRhcmttb2RlXCJcbiAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiXG4gICAgPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiYnJpZ2h0bmVzc182XCIgLz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+RGFyayBtb2RlPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtdG9nZ2xlIGNvbG9yPVwiYmx1ZVwiIHYtbW9kZWw9XCJkYXJrbW9kZVwiIHZhbD1cImJhdHRlcnlcIiAvPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gdXNlIGNhY2hlIC0tPlxuICAgIDxxLWl0ZW1cbiAgICAgIGNsaWNrYWJsZVxuICAgICAgdi1yaXBwbGVcbiAgICAgIEBjbGljaz1cInVzZUNhY2hlID0gIXVzZUNhY2hlXCJcbiAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlblwiXG4gICAgPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwiY2FjaGVkXCIgLz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+VXNlIGltYW5nYSBjYWNoZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidXNlQ2FjaGVcIiB2YWw9XCJiYXR0ZXJ5XCIgLz5cbiAgICA8L3EtaXRlbT5cbiAgICA8IS0tIG1hbmdhIGdyaWQgd2lkdGggLS0+XG4gICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgQGNsaWNrPVwiTWl0ZW0gPSB0cnVlXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJ2aWV3X21vZHVsZVwiIC8+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLWxhYmVsPk1hbmdhIEl0ZW0gd2lkdGg8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IE1pdGVtVyB9fXB4PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJNaXRlbVwiPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwicS1wYS1sZ1wiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHgtbm9uZSBxLXB0LW5vbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+TWFuZ2EgSXRlbSB3aWR0aDo8L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtcHQtbm9uZSBxLXB4LW5vbmVcIj5cbiAgICAgICAgICAgIHRoZSB0YXJnZXQgd2lkdGggZm9yIG1hbmdhIGl0ZW1zIGluIGdyaWRzIGxpa2UgdGhlIGxpYnJhcnkgYW5kXG4gICAgICAgICAgICBzY291cmNlIHZpZXdzXG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgc3RhbmRvdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdi1tb2RlbD1cIk1pdGVtV1wiXG4gICAgICAgICAgICBzdWZmaXg9XCJweFwiXG4gICAgICAgICAgPjwvcS1pbnB1dD5cbiAgICAgICAgICA8cS1zbGlkZXIgOnN0ZXA9XCI1MFwiIHNuYXAgdi1tb2RlbD1cIk1pdGVtV1wiIDptaW49XCIxMDBcIiA6bWF4PVwiMTAwMFwiIC8+XG5cbiAgICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiIGNsYXNzPVwicS1wYi1ub25lXCI+XG4gICAgICAgICAgICA8cS1idG4gZmxhdCBsYWJlbD1cIkRlZmF1bHRcIiBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJNaXRlbVcgPSAzMDBcIiAvPlxuICAgICAgICAgICAgPHEtYnRuIGZsYXQgbGFiZWw9XCJDYW5jZWxcIiBjb2xvcj1cInByaW1hcnlcIiB2LWNsb3NlLXBvcHVwIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldE1pdGVtVyhNaXRlbVcpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3EtZGlhbG9nPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gc2VydmVyIGFkZHJlc3MgLS0+XG4gICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgQGNsaWNrPVwiU2FkZHIgPSB0cnVlXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICA8cS1pY29uIG5hbWU9XCJkbnNcIiAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5TZXJ2ZXIgQWRkcmVzczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgc2VydmVyQWRkciB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwiU2FkZHJcIj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cInEtcHgtbWRcIj5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkVudGVyIFNlcnZlciBBZGRyZXNzPC9kaXY+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1pbnB1dCBzdGFuZG91dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzZXJ2ZXJBZGRyXCI+PC9xLWlucHV0PlxuXG4gICAgICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInNlcnZlckFkZHIgPSAnaHR0cDovL2xvY2FsaG9zdCdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLWJ0biBmbGF0IGxhYmVsPVwiQ2FuY2VsXCIgY29sb3I9XCJwcmltYXJ5XCIgdi1jbG9zZS1wb3B1cCAvPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJTYXZlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICBAY2xpY2s9XCJzZXRzZXJ2ZXJBZGRyKHNlcnZlckFkZHIpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3EtZGlhbG9nPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gYmFzaWMgYXV0aCAtLT5cbiAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSBAY2xpY2s9XCJiYXV0ID0gdHJ1ZVwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiA6bmFtZT1cImJwc3cgJiYgYnVzciA/ICdvX2xvY2tfb3BlbicgOiAnbG9jaydcIiAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5CYXNpYyBBdXRoPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJiYXV0XCI+XG4gICAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLXB4LW1kXCI+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5FbnRlciBVc2VybmFtZSBhbmQgUGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICBzdGFuZG91dFxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiYnVzclwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLW15LXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICBzdGFuZG91dFxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICA6dHlwZT1cIiFpc1B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImJwc3dcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLW15LXNtXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICA6bmFtZT1cImlzUHdkID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiaXNQd2QgPSAhaXNQd2RcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3EtaW5wdXQ+XG5cbiAgICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJDbGVhciBBdXRoXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICBAY2xpY2s9XCJzZXRzZXJ2ZXJBdXRoKClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLWJ0biBmbGF0IGxhYmVsPVwiQ2FuY2VsXCIgY29sb3I9XCJwcmltYXJ5XCIgdi1jbG9zZS1wb3B1cCAvPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJTYXZlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICBAY2xpY2s9XCJzZXRzZXJ2ZXJBdXRoKGJ1c3IsIGJwc3cpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3EtZGlhbG9nPlxuICAgIDwvcS1pdGVtPlxuICAgIDwhLS0gUmVhZGVyIERlZmF1bHRzIC0tPlxuICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIEBjbGljaz1cIlNSZWFkID0gdHJ1ZVwiPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvbiBuYW1lPVwibWVudV9ib29rXCIgLz5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+RGVmYXVsdCBSZWFkZXIgU2V0dGluZ3M8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwiU1JlYWRcIj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cInEtcHgtc21cIj5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkRlZmF1bHQgUmVhZGVyIFNldHRpbmdzPC9kaXY+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBuby13cmFwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgICAgICAgQGNsaWNrPVwiU3JlYWRNYXJnaW5zID0gIVNyZWFkTWFyZ2luc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+UGFnZSBNYXJnaW5zPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwiU3JlYWRNYXJnaW5zXCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS14c1wiPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktYmV0d2VlbiBuby13cmFwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgICAgICAgQGNsaWNrPVwiU3JlYWRTY2FsZSA9ICFTcmVhZFNjYWxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5QYWdlIFNjYWxlPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwiU3JlYWRTY2FsZVwiIC8+XG4gICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbXkteHNcIj48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgIHN0YW5kb3V0XG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVhZGVyIE1vZGVcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiU1JlYWRNb2RlbFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwiU1JlYWRvcHRpb25zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW15LXhzXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgICBzdGFuZG91dFxuICAgICAgICAgICAgICBsYWJlbD1cIk5hdmlnYXRpb24gbGF5b3V0XCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIlNSZWFkUGF0aFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwiUGF0aE9wdGlvbnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgIEBjbGljaz1cInNldFJlYWRlck9wdGlvbnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLWl0ZW0+XG4gICAgPCEtLSBiYWNrdXBzIC0tPlxuICAgIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgICBleHBhbmQtc2VwYXJhdG9yXG4gICAgICBpY29uPVwiYmFja3VwXCJcbiAgICAgIGxhYmVsPVwiQmFja3VwXCJcbiAgICAgIGRlZmF1bHQtY2xvc2VkXG4gICAgPlxuICAgICAgPHEtaXRlbVxuICAgICAgICBjbGlja2FibGVcbiAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgY2xhc3M9XCJxLXBsLXhsXCJcbiAgICAgICAgOmhyZWY9XCJzZXJ2ZXJBZGRyICsgYC9hcGkvdjEvYmFja3VwL2V4cG9ydC9maWxlYFwiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPkNyZWF0ZSBCYWNrdXA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb25cbiAgICAgICAgICAgID5CYWNrdXAgbGlicmFyeSBhcyBhIFRhY2hpeW9taSBiYWNrdXA8L3EtaXRlbS1sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgY2xhc3M9XCJxLXBsLXhsXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS11cGxvYWRlclxuICAgICAgICAgICAgOnVybD1cInNlcnZlckFkZHIgKyBgL2FwaS92MS9iYWNrdXAvaW1wb3J0L2ZpbGVgXCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1tYS1ub25lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkIEJhY2t1cFwiXG4gICAgICAgICAgICBhY2NlcHQ9XCIucHJvdG8uZ3pcIlxuICAgICAgICAgICAgZmllbGQtbmFtZT1cImJhY2t1cC5wcm90by5nelwiXG4gICAgICAgICAgICA6aGVhZGVycz1cIltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdBdXRob3JpemF0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0Jhc2ljJyArIGJ0b2EoYnVzciArICc6JyArIGJwc3cpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgYXV0by11cGxvYWRcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG4gIDwvcS1saXN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyByZXNldEJhc2UgfSBmcm9tICdzcmMvYm9vdC9mZXRjaGVyJztcbmltcG9ydCB7IHN0b3JlR2V0IH0gZnJvbSAnc3JjL2Jvb3QvU3RvcmVTdHVmZic7XG5pbXBvcnQgeyBwYXRocyB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2dsb2JhbC9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnc2V0dGluZ3NQYWdlJyxcbiAgbWV0aG9kczoge1xuICAgIG15VHdlYWsob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogb2Zmc2V0ID8gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgIDogJzEwMHZoJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNldE1pdGVtVyh2YWw6IG51bWJlcikge1xuICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCdNaXRlbVcnLCB2YWwpO1xuICAgIH0sXG4gICAgc2V0c2VydmVyQWRkcjogZnVuY3Rpb24gKHZhbDogc3RyaW5nKSB7XG4gICAgICB0aGlzLiRzdG9yZVNldChcbiAgICAgICAgJ2Jhc2VVcmwnLFxuICAgICAgICB2YWwuZW5kc1dpdGgoJy8nKSA/IHZhbC5zbGljZSgwLCAtMSkgOiB2YWwsXG4gICAgICAgIGxvY2F0aW9uLm9yaWdpblxuICAgICAgKTtcbiAgICAgIHRoaXMucmVzZXRCYXNlKCk7XG4gICAgfSxcbiAgICBzZXRzZXJ2ZXJBdXRoKHVzZXJuYW1lID0gJycsIHBhc3N3b3JkID0gJycpIHtcbiAgICAgIGlmICh1c2VybmFtZSA9PSAnJyB8fCBwYXNzd29yZCA9PSAnJykge1xuICAgICAgICB0aGlzLiRxLmxvY2FsU3RvcmFnZS5yZW1vdmUoJ2F1dGgnKTtcbiAgICAgICAgdGhpcy5idXNyID0gJyc7XG4gICAgICAgIHRoaXMuYnBzdyA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCdhdXRoJywgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBidG9hKHZhbDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gYnRvYSh2YWwpO1xuICAgIH0sXG4gICAgc2V0UmVhZGVyT3B0aW9ucygpIHtcbiAgICAgIHRoaXMuJHEubG9jYWxTdG9yYWdlLnNldCgndnVlX1JNJywgdGhpcy5TUmVhZE1vZGVsKTtcbiAgICAgIHRoaXMuJHEubG9jYWxTdG9yYWdlLnNldCgndnVlX1BhdGhzJywgdGhpcy5TUmVhZFBhdGgpO1xuICAgICAgdGhpcy4kcS5sb2NhbFN0b3JhZ2Uuc2V0KCd2dWVfV1QnLCB0aGlzLlNyZWFkTWFyZ2lucyk7XG4gICAgICB0aGlzLiRxLmxvY2FsU3RvcmFnZS5zZXQoJ3Z1ZV9TY2FsZScsIHRoaXMuU3JlYWRTY2FsZSk7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgICckcS5kYXJrLmlzQWN0aXZlJzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kYXJrbW9kZSA9IHRoaXMuJHEuZGFyay5pc0FjdGl2ZTtcbiAgICB9LFxuICAgIGRhcmttb2RlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB0aGlzLiRxLmRhcmsuc2V0KHZhbCk7XG4gICAgICB0aGlzLiRzdG9yZVNldCgnZGFyaycsIHZhbCwgdHJ1ZSk7XG4gICAgfSxcbiAgICB1c2VDYWNoZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgdGhpcy4kc3RvcmVTZXQoJ3VzZUNhY2hlJywgdmFsLCB0cnVlKTtcbiAgICB9XG4gIH0sXG4gIHNldHVwKF9wcm9wcywgeyBlbWl0IH0pIHtcbiAgICBlbWl0KCdzZXRUaXRsZScsICdTZXR0aW5ncycpO1xuICAgIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gICAgY29uc3QgZGFya21vZGUgPSByZWYoJHEuZGFyay5pc0FjdGl2ZSk7XG4gICAgY29uc3QgTWl0ZW1XID0gcmVmKHN0b3JlR2V0KCdNaXRlbVcnLCAzMDApIGFzIG51bWJlcik7XG4gICAgY29uc3QgdXNlQ2FjaGUgPSByZWYoc3RvcmVHZXQoJ3VzZUNhY2hlJywgdHJ1ZSkgYXMgYm9vbGVhbik7XG4gICAgY29uc3Qgc2VydmVyQWRkciA9IHJlZihzdG9yZUdldCgnYmFzZVVybCcsIGxvY2F0aW9uLm9yaWdpbikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBhdXRoID0gJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSBhcyB7XG4gICAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICB9IHwgbnVsbDtcbiAgICBjb25zdCBTUmVhZE1vZGVsID0gcmVmKFxuICAgICAgKCRxLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2dWVfUk0nKSB8fCAnUlRMJykgYXMgc3RyaW5nXG4gICAgKTtcbiAgICBjb25zdCBTUmVhZFBhdGggPSByZWYoXG4gICAgICAoJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Z1ZV9QYXRocycpIHx8ICdMJykgYXMga2V5b2YgcGF0aHNcbiAgICApO1xuICAgIGNvbnN0IFNyZWFkTWFyZ2lucyA9IHJlZihcbiAgICAgICgkcS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndnVlX1dUJykgfHwgZmFsc2UpIGFzIGJvb2xlYW5cbiAgICApO1xuICAgIGNvbnN0IFNyZWFkU2NhbGUgPSByZWYoXG4gICAgICAoJHEubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Z1ZV9TY2FsZScpIHx8IGZhbHNlKSBhcyBib29sZWFuXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXJrbW9kZSxcbiAgICAgIE1pdGVtOiByZWYoZmFsc2UpLFxuICAgICAgTWl0ZW1XLFxuICAgICAgdXNlQ2FjaGUsXG4gICAgICBTYWRkcjogcmVmKGZhbHNlKSxcbiAgICAgIFNSZWFkOiByZWYoZmFsc2UpLFxuICAgICAgU1JlYWRNb2RlbCxcbiAgICAgIFNSZWFkUGF0aCxcbiAgICAgIFBhdGhPcHRpb25zOiBbJ0wnLCAnUkFMJywgJ0tpbmRsZScsICdFZGdlJ10sXG4gICAgICBTUmVhZG9wdGlvbnM6IFsnUlRMJywgJ0xUUicsICdTaW5nbGVQYWdlJywgJ1ZlcnRpY2FsJ10sXG4gICAgICBTcmVhZE1hcmdpbnMsXG4gICAgICBTcmVhZFNjYWxlLFxuICAgICAgc2VydmVyQWRkcixcbiAgICAgIGJhdXQ6IHJlZihmYWxzZSksXG4gICAgICBidXNyOiByZWYoYXV0aCAhPSBudWxsID8gYXV0aC51c2VybmFtZSA6ICcnKSxcbiAgICAgIGJwc3c6IHJlZihhdXRoICE9IG51bGwgPyBhdXRoLnBhc3N3b3JkIDogJycpLFxuICAgICAgcmVzZXRCYXNlLFxuICAgICAgaXNQd2Q6IHJlZihmYWxzZSlcbiAgICB9O1xuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbInByb3BzIiwic3RlcCIsImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIiwiZW1pdHMiLCJpbmplY3RQbHVnaW4iLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoRGlyZWN0aXZlcyIsIl9vcGVuQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU0sb0JBQW9CO0FBQzFCLE1BQU0seUJBQXlCLFFBQU0sRUFBRSxPQUFPLEVBQUM7QUFDL0MsTUFBTSw2QkFBNkIsQ0FBQyxF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
