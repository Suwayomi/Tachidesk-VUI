import { u as useFieldProps, a as useFieldEmits, b as useFieldState, c as useField, f as fieldValueIsFilled, d as useKeyComposition } from "./use-key-composition.5ad075e2.js";
import { r as ref, w as watch, A as nextTick, ab as shouldIgnoreKey, c as computed, o as onBeforeUnmount, z as onMounted, h, g as getCurrentInstance, O as stop } from "./index.c15e704f.js";
import { u as useFormProps, b as useFormInputNameAttr } from "./use-form.2fa626ca.js";
import { c as createComponent } from "./QSpinner.dc7e097a.js";
import { b as addFocusFn } from "./focus-manager.32f8d49a.js";
const NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
const TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
const KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
const MARKER = String.fromCharCode(1);
const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function useMask(props, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props.type);
  }
  watch(() => props.type + props.autogrow, updateMaskInternals);
  watch(() => props.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props.fillMask + props.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props.modelValue));
      return props.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props.modelValue;
  }
  function getPaddedMaskMarked(size) {
    if (size < maskMarked.length) {
      return maskMarked.slice(-size);
    }
    let pad = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos > -1) {
      for (let i = size - localMaskMarked.length; i > 0; i--) {
        pad += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props.mask !== void 0 && props.mask.length > 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length > 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[token];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp(
      "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
    ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp(
          "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*")
        );
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(val);
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[i].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length > 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
        const cursor = end - 1;
        moveCursor.right(inp, cursor, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) > -1) {
        const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor, cursor);
        }
      }
    });
    const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
    String(props.modelValue) !== val && emitValue(val, true);
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, start, end, selection) {
      const noMarkBefore = maskMarked.slice(start - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, start - 1);
      for (; i >= 0; i--) {
        if (maskMarked[i] === MARKER) {
          start = i;
          noMarkBefore === true && start++;
          break;
        }
      }
      if (i < 0 && maskMarked[start] !== void 0 && maskMarked[start] !== MARKER) {
        return moveCursor.right(inp, 0, 0);
      }
      start >= 0 && inp.setSelectionRange(
        start,
        selection === true ? end : start,
        "backward"
      );
    },
    right(inp, start, end, selection) {
      const limit = inp.value.length;
      let i = Math.min(limit, end + 1);
      for (; i <= limit; i++) {
        if (maskMarked[i] === MARKER) {
          end = i;
          break;
        } else if (maskMarked[i - 1] === MARKER) {
          end = i;
        }
      }
      if (i > limit && maskMarked[end - 1] !== void 0 && maskMarked[end - 1] !== MARKER) {
        return moveCursor.left(inp, limit, limit);
      }
      inp.setSelectionRange(selection ? start : end, end, "forward");
    },
    leftReverse(inp, start, end, selection) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, start - 1);
      for (; i >= 0; i--) {
        if (localMaskMarked[i - 1] === MARKER) {
          start = i;
          break;
        } else if (localMaskMarked[i] === MARKER) {
          start = i;
          if (i === 0) {
            break;
          }
        }
      }
      if (i < 0 && localMaskMarked[start] !== void 0 && localMaskMarked[start] !== MARKER) {
        return moveCursor.rightReverse(inp, 0, 0);
      }
      start >= 0 && inp.setSelectionRange(
        start,
        selection === true ? end : start,
        "backward"
      );
    },
    rightReverse(inp, start, end, selection) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, end + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, end + 1);
      for (; i <= limit; i++) {
        if (localMaskMarked[i - 1] === MARKER) {
          end = i;
          end > 0 && noMarkBefore === true && end--;
          break;
        }
      }
      if (i > limit && localMaskMarked[end - 1] !== void 0 && localMaskMarked[end - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit, limit);
      }
      inp.setSelectionRange(selection === true ? start : end, end, "forward");
    }
  };
  function onMaskedKeydown(e) {
    if (shouldIgnoreKey(e) === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (e.keyCode === 37 || e.keyCode === 39) {
      const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
      e.preventDefault();
      fn(inp, start, end, e.shiftKey);
    } else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start, end, true);
    } else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, start, end, true);
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex > -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props.reverseFillMask === true && val.length > 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown
  };
}
function useFileFormDomProps(props, typeGuard) {
  function getFormDomProps() {
    const model = props.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e) {
      return {
        files: void 0
      };
    }
  }
  return typeGuard === true ? computed(() => {
    if (props.type !== "file") {
      return;
    }
    return getFormDomProps();
  }) : computed(getFormDomProps);
}
var QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    modelValue: { required: false },
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    "paste",
    "change"
  ],
  setup(props, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown
    } = useMask(props, emit, emitValue, inputRef);
    const formDomProps = useFileFormDomProps(props, true);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = useKeyComposition(onInput);
    const state = useFieldState();
    const isTextarea = computed(
      () => props.type === "textarea" || props.autogrow === true
    );
    const isTypeText = computed(
      () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props.type)
    );
    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
      }
      if (props.autogrow === true) {
        evt.onAnimationend = adjustHeight;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = {
        tabindex: 0,
        "data-autofocus": props.autofocus === true || void 0,
        rows: props.type === "textarea" ? 6 : void 0,
        "aria-label": props.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props.maxlength,
        disabled: props.disable === true,
        readonly: props.readonly === true
      };
      if (isTextarea.value === false) {
        attrs2.type = props.type;
      }
      if (props.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props.modelValue;
      }
    });
    watch(() => props.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          if (String(v) === emitCachedValue) {
            return;
          }
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props.dense, () => {
      props.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e) {
      if (hasMask.value === true && props.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e);
    }
    function onInput(e) {
      if (!e || !e.target) {
        return;
      }
      if (props.type === "file") {
        emit("update:modelValue", e.target.files);
        return;
      }
      const val = e.target.value;
      if (e.target.qComposing === true) {
        temp.value = val;
        return;
      }
      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props.autogrow === true && adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        if (props.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props.debounce !== void 0) {
        clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          const { overflow } = inp.style;
          $q.platform.is.firefox !== true && (inp.style.overflow = "hidden");
          inp.style.height = "1px";
          parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
          inp.style.height = inp.scrollHeight + "px";
          inp.style.overflow = overflow;
          parentStyle.marginBottom = "";
        }
      });
    }
    function onChange(e) {
      onComposition(e);
      clearTimeout(emitTimer);
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e.target.value);
    }
    function onFinishEditing(e) {
      e !== void 0 && stop(e);
      clearTimeout(emitTimer);
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: computed(
        () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length > 0
      ),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(
        () => hasValue.value === true || fieldValueIsFilled(props.displayValue)
      ),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", {
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props.inputClass
          ],
          style: props.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
        });
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props.shadowText)
        ]);
      }
    });
    const renderFn = useField(state);
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
    });
    return renderFn;
  }
});
export { QInput as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUlucHV0LjMxMGU3MmQzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2lucHV0L3VzZS1tYXNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmlsZS1kb20tcHJvcHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2lucHV0L1FJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWYsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc2hvdWxkSWdub3JlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbi8vIGxlYXZlIE5BTUVEX01BU0tTIGF0IHRvcCBvZiBmaWxlIChjb2RlIHJlZmVyZW5jZWQgZnJvbSBkb2NzKVxuY29uc3QgTkFNRURfTUFTS1MgPSB7XG4gIGRhdGU6ICcjIyMjLyMjLyMjJyxcbiAgZGF0ZXRpbWU6ICcjIyMjLyMjLyMjICMjOiMjJyxcbiAgdGltZTogJyMjOiMjJyxcbiAgZnVsbHRpbWU6ICcjIzojIzojIycsXG4gIHBob25lOiAnKCMjIykgIyMjIC0gIyMjIycsXG4gIGNhcmQ6ICcjIyMjICMjIyMgIyMjIyAjIyMjJ1xufVxuXG5jb25zdCBUT0tFTlMgPSB7XG4gICcjJzogeyBwYXR0ZXJuOiAnW1xcXFxkXScsIG5lZ2F0ZTogJ1teXFxcXGRdJyB9LFxuXG4gIFM6IHsgcGF0dGVybjogJ1thLXpBLVpdJywgbmVnYXRlOiAnW15hLXpBLVpdJyB9LFxuICBOOiB7IHBhdHRlcm46ICdbMC05YS16QS1aXScsIG5lZ2F0ZTogJ1teMC05YS16QS1aXScgfSxcblxuICBBOiB7IHBhdHRlcm46ICdbYS16QS1aXScsIG5lZ2F0ZTogJ1teYS16QS1aXScsIHRyYW5zZm9ybTogdiA9PiB2LnRvTG9jYWxlVXBwZXJDYXNlKCkgfSxcbiAgYTogeyBwYXR0ZXJuOiAnW2EtekEtWl0nLCBuZWdhdGU6ICdbXmEtekEtWl0nLCB0cmFuc2Zvcm06IHYgPT4gdi50b0xvY2FsZUxvd2VyQ2FzZSgpIH0sXG5cbiAgWDogeyBwYXR0ZXJuOiAnWzAtOWEtekEtWl0nLCBuZWdhdGU6ICdbXjAtOWEtekEtWl0nLCB0cmFuc2Zvcm06IHYgPT4gdi50b0xvY2FsZVVwcGVyQ2FzZSgpIH0sXG4gIHg6IHsgcGF0dGVybjogJ1swLTlhLXpBLVpdJywgbmVnYXRlOiAnW14wLTlhLXpBLVpdJywgdHJhbnNmb3JtOiB2ID0+IHYudG9Mb2NhbGVMb3dlckNhc2UoKSB9XG59XG5cbmNvbnN0IEtFWVMgPSBPYmplY3Qua2V5cyhUT0tFTlMpXG5LRVlTLmZvckVhY2goa2V5ID0+IHtcbiAgVE9LRU5TWyBrZXkgXS5yZWdleCA9IG5ldyBSZWdFeHAoVE9LRU5TWyBrZXkgXS5wYXR0ZXJuKVxufSlcblxuY29uc3RcbiAgdG9rZW5SZWdleE1hc2sgPSBuZXcgUmVnRXhwKCdcXFxcXFxcXChbXi4qKz9eJHt9KCl8KFtcXFxcXV0pfChbLiorP14ke30oKXxbXFxcXF1dKXwoWycgKyBLRVlTLmpvaW4oJycpICsgJ10pfCguKScsICdnJyksXG4gIGVzY1JlZ2V4ID0gL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nXG5cbmNvbnN0IE1BUktFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMSlcblxuZXhwb3J0IGNvbnN0IHVzZU1hc2tQcm9wcyA9IHtcbiAgbWFzazogU3RyaW5nLFxuICByZXZlcnNlRmlsbE1hc2s6IEJvb2xlYW4sXG4gIGZpbGxNYXNrOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICB1bm1hc2tlZFZhbHVlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgZW1pdCwgZW1pdFZhbHVlLCBpbnB1dFJlZikge1xuICBsZXQgbWFza01hcmtlZCwgbWFza1JlcGxhY2VkLCBjb21wdXRlZE1hc2ssIGNvbXB1dGVkVW5tYXNrXG5cbiAgY29uc3QgaGFzTWFzayA9IHJlZihudWxsKVxuICBjb25zdCBpbm5lclZhbHVlID0gcmVmKGdldEluaXRpYWxNYXNrZWRWYWx1ZSgpKVxuXG4gIGZ1bmN0aW9uIGdldElzVHlwZVRleHQgKCkge1xuICAgIHJldHVybiBwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZVxuICAgICAgfHwgWyAndGV4dGFyZWEnLCAndGV4dCcsICdzZWFyY2gnLCAndXJsJywgJ3RlbCcsICdwYXNzd29yZCcgXS5pbmNsdWRlcyhwcm9wcy50eXBlKVxuICB9XG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMudHlwZSArIHByb3BzLmF1dG9ncm93LCB1cGRhdGVNYXNrSW50ZXJuYWxzKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm1hc2ssIHYgPT4ge1xuICAgIGlmICh2ICE9PSB2b2lkIDApIHtcbiAgICAgIHVwZGF0ZU1hc2tWYWx1ZShpbm5lclZhbHVlLnZhbHVlLCB0cnVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IHVubWFza1ZhbHVlKGlubmVyVmFsdWUudmFsdWUpXG4gICAgICB1cGRhdGVNYXNrSW50ZXJuYWxzKClcbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHZhbCAmJiBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuZmlsbE1hc2sgKyBwcm9wcy5yZXZlcnNlRmlsbE1hc2ssICgpID0+IHtcbiAgICBoYXNNYXNrLnZhbHVlID09PSB0cnVlICYmIHVwZGF0ZU1hc2tWYWx1ZShpbm5lclZhbHVlLnZhbHVlLCB0cnVlKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnVubWFza2VkVmFsdWUsICgpID0+IHtcbiAgICBoYXNNYXNrLnZhbHVlID09PSB0cnVlICYmIHVwZGF0ZU1hc2tWYWx1ZShpbm5lclZhbHVlLnZhbHVlKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxNYXNrZWRWYWx1ZSAoKSB7XG4gICAgdXBkYXRlTWFza0ludGVybmFscygpXG5cbiAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgbWFza2VkID0gbWFza1ZhbHVlKHVubWFza1ZhbHVlKHByb3BzLm1vZGVsVmFsdWUpKVxuXG4gICAgICByZXR1cm4gcHJvcHMuZmlsbE1hc2sgIT09IGZhbHNlXG4gICAgICAgID8gZmlsbFdpdGhNYXNrKG1hc2tlZClcbiAgICAgICAgOiBtYXNrZWRcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMubW9kZWxWYWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFkZGVkTWFza01hcmtlZCAoc2l6ZSkge1xuICAgIGlmIChzaXplIDwgbWFza01hcmtlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBtYXNrTWFya2VkLnNsaWNlKC1zaXplKVxuICAgIH1cblxuICAgIGxldCBwYWQgPSAnJywgbG9jYWxNYXNrTWFya2VkID0gbWFza01hcmtlZFxuICAgIGNvbnN0IHBhZFBvcyA9IGxvY2FsTWFza01hcmtlZC5pbmRleE9mKE1BUktFUilcblxuICAgIGlmIChwYWRQb3MgPiAtMSkge1xuICAgICAgZm9yIChsZXQgaSA9IHNpemUgLSBsb2NhbE1hc2tNYXJrZWQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHBhZCArPSBNQVJLRVJcbiAgICAgIH1cblxuICAgICAgbG9jYWxNYXNrTWFya2VkID0gbG9jYWxNYXNrTWFya2VkLnNsaWNlKDAsIHBhZFBvcykgKyBwYWQgKyBsb2NhbE1hc2tNYXJrZWQuc2xpY2UocGFkUG9zKVxuICAgIH1cblxuICAgIHJldHVybiBsb2NhbE1hc2tNYXJrZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hc2tJbnRlcm5hbHMgKCkge1xuICAgIGhhc01hc2sudmFsdWUgPSBwcm9wcy5tYXNrICE9PSB2b2lkIDBcbiAgICAgICYmIHByb3BzLm1hc2subGVuZ3RoID4gMFxuICAgICAgJiYgZ2V0SXNUeXBlVGV4dCgpXG5cbiAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbXB1dGVkVW5tYXNrID0gdm9pZCAwXG4gICAgICBtYXNrTWFya2VkID0gJydcbiAgICAgIG1hc2tSZXBsYWNlZCA9ICcnXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdFxuICAgICAgbG9jYWxDb21wdXRlZE1hc2sgPSBOQU1FRF9NQVNLU1sgcHJvcHMubWFzayBdID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5tYXNrXG4gICAgICAgIDogTkFNRURfTUFTS1NbIHByb3BzLm1hc2sgXSxcbiAgICAgIGZpbGxDaGFyID0gdHlwZW9mIHByb3BzLmZpbGxNYXNrID09PSAnc3RyaW5nJyAmJiBwcm9wcy5maWxsTWFzay5sZW5ndGggPiAwXG4gICAgICAgID8gcHJvcHMuZmlsbE1hc2suc2xpY2UoMCwgMSlcbiAgICAgICAgOiAnXycsXG4gICAgICBmaWxsQ2hhckVzY2FwZWQgPSBmaWxsQ2hhci5yZXBsYWNlKGVzY1JlZ2V4LCAnXFxcXCQmJyksXG4gICAgICB1bm1hc2sgPSBbXSxcbiAgICAgIGV4dHJhY3QgPSBbXSxcbiAgICAgIG1hc2sgPSBbXVxuXG4gICAgbGV0XG4gICAgICBmaXJzdE1hdGNoID0gcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlLFxuICAgICAgdW5tYXNrQ2hhciA9ICcnLFxuICAgICAgbmVnYXRlQ2hhciA9ICcnXG5cbiAgICBsb2NhbENvbXB1dGVkTWFzay5yZXBsYWNlKHRva2VuUmVnZXhNYXNrLCAoXywgY2hhcjEsIGVzYywgdG9rZW4sIGNoYXIyKSA9PiB7XG4gICAgICBpZiAodG9rZW4gIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBjID0gVE9LRU5TWyB0b2tlbiBdXG4gICAgICAgIG1hc2sucHVzaChjKVxuICAgICAgICBuZWdhdGVDaGFyID0gYy5uZWdhdGVcbiAgICAgICAgaWYgKGZpcnN0TWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICBleHRyYWN0LnB1c2goJyg/OicgKyBuZWdhdGVDaGFyICsgJyspPygnICsgYy5wYXR0ZXJuICsgJyspPyg/OicgKyBuZWdhdGVDaGFyICsgJyspPygnICsgYy5wYXR0ZXJuICsgJyspPycpXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFjdC5wdXNoKCcoPzonICsgbmVnYXRlQ2hhciArICcrKT8oJyArIGMucGF0dGVybiArICcpPycpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlc2MgIT09IHZvaWQgMCkge1xuICAgICAgICB1bm1hc2tDaGFyID0gJ1xcXFwnICsgKGVzYyA9PT0gJ1xcXFwnID8gJycgOiBlc2MpXG4gICAgICAgIG1hc2sucHVzaChlc2MpXG4gICAgICAgIHVubWFzay5wdXNoKCcoW14nICsgdW5tYXNrQ2hhciArICddKyk/JyArIHVubWFza0NoYXIgKyAnPycpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgYyA9IGNoYXIxICE9PSB2b2lkIDAgPyBjaGFyMSA6IGNoYXIyXG4gICAgICAgIHVubWFza0NoYXIgPSBjID09PSAnXFxcXCcgPyAnXFxcXFxcXFxcXFxcXFxcXCcgOiBjLnJlcGxhY2UoZXNjUmVnZXgsICdcXFxcXFxcXCQmJylcbiAgICAgICAgbWFzay5wdXNoKGMpXG4gICAgICAgIHVubWFzay5wdXNoKCcoW14nICsgdW5tYXNrQ2hhciArICddKyk/JyArIHVubWFza0NoYXIgKyAnPycpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0XG4gICAgICB1bm1hc2tNYXRjaGVyID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14nXG4gICAgICAgICsgdW5tYXNrLmpvaW4oJycpXG4gICAgICAgICsgJygnICsgKHVubWFza0NoYXIgPT09ICcnID8gJy4nIDogJ1teJyArIHVubWFza0NoYXIgKyAnXScpICsgJyspPydcbiAgICAgICAgKyAodW5tYXNrQ2hhciA9PT0gJycgPyAnJyA6ICdbJyArIHVubWFza0NoYXIgKyAnXSonKSArICckJ1xuICAgICAgKSxcbiAgICAgIGV4dHJhY3RMYXN0ID0gZXh0cmFjdC5sZW5ndGggLSAxLFxuICAgICAgZXh0cmFjdE1hdGNoZXIgPSBleHRyYWN0Lm1hcCgocmUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBmaWxsQ2hhckVzY2FwZWQgKyAnKicgKyByZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gZXh0cmFjdExhc3QpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeJyArIHJlXG4gICAgICAgICAgICArICcoJyArIChuZWdhdGVDaGFyID09PSAnJyA/ICcuJyA6IG5lZ2F0ZUNoYXIpICsgJyspPydcbiAgICAgICAgICAgICsgKHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSA/ICckJyA6IGZpbGxDaGFyRXNjYXBlZCArICcqJylcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyByZSlcbiAgICAgIH0pXG5cbiAgICBjb21wdXRlZE1hc2sgPSBtYXNrXG4gICAgY29tcHV0ZWRVbm1hc2sgPSB2YWwgPT4ge1xuICAgICAgY29uc3QgdW5tYXNrTWF0Y2ggPSB1bm1hc2tNYXRjaGVyLmV4ZWModmFsKVxuICAgICAgaWYgKHVubWFza01hdGNoICE9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHVubWFza01hdGNoLnNsaWNlKDEpLmpvaW4oJycpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGV4dHJhY3RNYXRjaCA9IFtdLFxuICAgICAgICBleHRyYWN0TWF0Y2hlckxlbmd0aCA9IGV4dHJhY3RNYXRjaGVyLmxlbmd0aFxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgc3RyID0gdmFsOyBpIDwgZXh0cmFjdE1hdGNoZXJMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtID0gZXh0cmFjdE1hdGNoZXJbIGkgXS5leGVjKHN0cilcblxuICAgICAgICBpZiAobSA9PT0gbnVsbCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBzdHIuc2xpY2UobS5zaGlmdCgpLmxlbmd0aClcbiAgICAgICAgZXh0cmFjdE1hdGNoLnB1c2goLi4ubSlcbiAgICAgIH1cbiAgICAgIGlmIChleHRyYWN0TWF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZXh0cmFjdE1hdGNoLmpvaW4oJycpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG4gICAgbWFza01hcmtlZCA9IG1hc2subWFwKHYgPT4gKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBNQVJLRVIpKS5qb2luKCcnKVxuICAgIG1hc2tSZXBsYWNlZCA9IG1hc2tNYXJrZWQuc3BsaXQoTUFSS0VSKS5qb2luKGZpbGxDaGFyKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTWFza1ZhbHVlIChyYXdWYWwsIHVwZGF0ZU1hc2tJbnRlcm5hbHNGbGFnLCBpbnB1dFR5cGUpIHtcbiAgICBjb25zdFxuICAgICAgaW5wID0gaW5wdXRSZWYudmFsdWUsXG4gICAgICBlbmQgPSBpbnAuc2VsZWN0aW9uRW5kLFxuICAgICAgZW5kUmV2ZXJzZSA9IGlucC52YWx1ZS5sZW5ndGggLSBlbmQsXG4gICAgICB1bm1hc2tlZCA9IHVubWFza1ZhbHVlKHJhd1ZhbClcblxuICAgIC8vIFVwZGF0ZSBoZXJlIHNvIHVubWFzayB1c2VzIHRoZSBvcmlnaW5hbCBmaWxsQ2hhclxuICAgIHVwZGF0ZU1hc2tJbnRlcm5hbHNGbGFnID09PSB0cnVlICYmIHVwZGF0ZU1hc2tJbnRlcm5hbHMoKVxuXG4gICAgY29uc3RcbiAgICAgIHByZU1hc2tlZCA9IG1hc2tWYWx1ZSh1bm1hc2tlZCksXG4gICAgICBtYXNrZWQgPSBwcm9wcy5maWxsTWFzayAhPT0gZmFsc2VcbiAgICAgICAgPyBmaWxsV2l0aE1hc2socHJlTWFza2VkKVxuICAgICAgICA6IHByZU1hc2tlZCxcbiAgICAgIGNoYW5nZWQgPSBpbm5lclZhbHVlLnZhbHVlICE9PSBtYXNrZWRcblxuICAgIC8vIFdlIHdhbnQgdG8gYXZvaWQgXCJmbGlja2VyaW5nXCIgc28gd2Ugc2V0IHZhbHVlIGltbWVkaWF0ZWx5XG4gICAgaW5wLnZhbHVlICE9PSBtYXNrZWQgJiYgKGlucC52YWx1ZSA9IG1hc2tlZClcblxuICAgIGNoYW5nZWQgPT09IHRydWUgJiYgKGlubmVyVmFsdWUudmFsdWUgPSBtYXNrZWQpXG5cbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnAgJiYgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgaWYgKG1hc2tlZCA9PT0gbWFza1JlcGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSA/IG1hc2tSZXBsYWNlZC5sZW5ndGggOiAwXG4gICAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2ZvcndhcmQnKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXRUeXBlID09PSAnaW5zZXJ0RnJvbVBhc3RlJyAmJiBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gZW5kIC0gMVxuICAgICAgICBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgY3Vyc29yLCBjdXJzb3IpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChbICdkZWxldGVDb250ZW50QmFja3dhcmQnLCAnZGVsZXRlQ29udGVudEZvcndhcmQnIF0uaW5kZXhPZihpbnB1dFR5cGUpID4gLTEpIHtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIGVuZCA9PT0gMFxuICAgICAgICAgICAgICAgID8gKG1hc2tlZC5sZW5ndGggPiBwcmVNYXNrZWQubGVuZ3RoID8gMSA6IDApXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heCgwLCBtYXNrZWQubGVuZ3RoIC0gKG1hc2tlZCA9PT0gbWFza1JlcGxhY2VkID8gMCA6IE1hdGgubWluKHByZU1hc2tlZC5sZW5ndGgsIGVuZFJldmVyc2UpICsgMSkpICsgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZW5kXG5cbiAgICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnZm9yd2FyZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgY3Vyc29yID0gTWF0aC5tYXgoMCwgbWFza2VkLmxlbmd0aCAtIChtYXNrZWQgPT09IG1hc2tSZXBsYWNlZCA/IDAgOiBNYXRoLm1pbihwcmVNYXNrZWQubGVuZ3RoLCBlbmRSZXZlcnNlICsgMSkpKVxuXG4gICAgICAgICAgaWYgKGN1cnNvciA9PT0gMSAmJiBlbmQgPT09IDEpIHtcbiAgICAgICAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2ZvcndhcmQnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vdmVDdXJzb3IucmlnaHRSZXZlcnNlKGlucCwgY3Vyc29yLCBjdXJzb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IG1hc2tlZC5sZW5ndGggLSBlbmRSZXZlcnNlXG4gICAgICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnYmFja3dhcmQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBjdXJzb3IgPSBNYXRoLm1heCgwLCBtYXNrTWFya2VkLmluZGV4T2YoTUFSS0VSKSwgTWF0aC5taW4ocHJlTWFza2VkLmxlbmd0aCwgZW5kKSAtIDEpXG4gICAgICAgICAgbW92ZUN1cnNvci5yaWdodChpbnAsIGN1cnNvciwgY3Vyc29yKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGVuZCAtIDFcbiAgICAgICAgICBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgY3Vyc29yLCBjdXJzb3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgdmFsID0gcHJvcHMudW5tYXNrZWRWYWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyB1bm1hc2tWYWx1ZShtYXNrZWQpXG4gICAgICA6IG1hc2tlZFxuXG4gICAgU3RyaW5nKHByb3BzLm1vZGVsVmFsdWUpICE9PSB2YWwgJiYgZW1pdFZhbHVlKHZhbCwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVDdXJzb3JGb3JQYXN0ZSAoaW5wLCBzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgcHJlTWFza2VkID0gbWFza1ZhbHVlKHVubWFza1ZhbHVlKGlucC52YWx1ZSkpXG5cbiAgICBzdGFydCA9IE1hdGgubWF4KDAsIG1hc2tNYXJrZWQuaW5kZXhPZihNQVJLRVIpLCBNYXRoLm1pbihwcmVNYXNrZWQubGVuZ3RoLCBzdGFydCkpXG5cbiAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgJ2ZvcndhcmQnKVxuICB9XG5cbiAgY29uc3QgbW92ZUN1cnNvciA9IHtcbiAgICBsZWZ0IChpbnAsIHN0YXJ0LCBlbmQsIHNlbGVjdGlvbikge1xuICAgICAgY29uc3Qgbm9NYXJrQmVmb3JlID0gbWFza01hcmtlZC5zbGljZShzdGFydCAtIDEpLmluZGV4T2YoTUFSS0VSKSA9PT0gLTFcbiAgICAgIGxldCBpID0gTWF0aC5tYXgoMCwgc3RhcnQgLSAxKVxuXG4gICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKG1hc2tNYXJrZWRbIGkgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgc3RhcnQgPSBpXG4gICAgICAgICAgbm9NYXJrQmVmb3JlID09PSB0cnVlICYmIHN0YXJ0KytcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgaSA8IDBcbiAgICAgICAgJiYgbWFza01hcmtlZFsgc3RhcnQgXSAhPT0gdm9pZCAwXG4gICAgICAgICYmIG1hc2tNYXJrZWRbIHN0YXJ0IF0gIT09IE1BUktFUlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgMCwgMClcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPj0gMCAmJiBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzZWxlY3Rpb24gPT09IHRydWUgPyBlbmQgOiBzdGFydCwgJ2JhY2t3YXJkJ1xuICAgICAgKVxuICAgIH0sXG5cbiAgICByaWdodCAoaW5wLCBzdGFydCwgZW5kLCBzZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IGxpbWl0ID0gaW5wLnZhbHVlLmxlbmd0aFxuICAgICAgbGV0IGkgPSBNYXRoLm1pbihsaW1pdCwgZW5kICsgMSlcblxuICAgICAgZm9yICg7IGkgPD0gbGltaXQ7IGkrKykge1xuICAgICAgICBpZiAobWFza01hcmtlZFsgaSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBlbmQgPSBpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXNrTWFya2VkWyBpIC0gMSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBlbmQgPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpID4gbGltaXRcbiAgICAgICAgJiYgbWFza01hcmtlZFsgZW5kIC0gMSBdICE9PSB2b2lkIDBcbiAgICAgICAgJiYgbWFza01hcmtlZFsgZW5kIC0gMSBdICE9PSBNQVJLRVJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbW92ZUN1cnNvci5sZWZ0KGlucCwgbGltaXQsIGxpbWl0KVxuICAgICAgfVxuXG4gICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uID8gc3RhcnQgOiBlbmQsIGVuZCwgJ2ZvcndhcmQnKVxuICAgIH0sXG5cbiAgICBsZWZ0UmV2ZXJzZSAoaW5wLCBzdGFydCwgZW5kLCBzZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGxvY2FsTWFza01hcmtlZCA9IGdldFBhZGRlZE1hc2tNYXJrZWQoaW5wLnZhbHVlLmxlbmd0aClcbiAgICAgIGxldCBpID0gTWF0aC5tYXgoMCwgc3RhcnQgLSAxKVxuXG4gICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGxvY2FsTWFza01hcmtlZFsgaSAtIDEgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgc3RhcnQgPSBpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsb2NhbE1hc2tNYXJrZWRbIGkgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgc3RhcnQgPSBpXG4gICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgaSA8IDBcbiAgICAgICAgJiYgbG9jYWxNYXNrTWFya2VkWyBzdGFydCBdICE9PSB2b2lkIDBcbiAgICAgICAgJiYgbG9jYWxNYXNrTWFya2VkWyBzdGFydCBdICE9PSBNQVJLRVJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbW92ZUN1cnNvci5yaWdodFJldmVyc2UoaW5wLCAwLCAwKVxuICAgICAgfVxuXG4gICAgICBzdGFydCA+PSAwICYmIGlucC5zZXRTZWxlY3Rpb25SYW5nZShcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHNlbGVjdGlvbiA9PT0gdHJ1ZSA/IGVuZCA6IHN0YXJ0LCAnYmFja3dhcmQnXG4gICAgICApXG4gICAgfSxcblxuICAgIHJpZ2h0UmV2ZXJzZSAoaW5wLCBzdGFydCwgZW5kLCBzZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGxpbWl0ID0gaW5wLnZhbHVlLmxlbmd0aCxcbiAgICAgICAgbG9jYWxNYXNrTWFya2VkID0gZ2V0UGFkZGVkTWFza01hcmtlZChsaW1pdCksXG4gICAgICAgIG5vTWFya0JlZm9yZSA9IGxvY2FsTWFza01hcmtlZC5zbGljZSgwLCBlbmQgKyAxKS5pbmRleE9mKE1BUktFUikgPT09IC0xXG4gICAgICBsZXQgaSA9IE1hdGgubWluKGxpbWl0LCBlbmQgKyAxKVxuXG4gICAgICBmb3IgKDsgaSA8PSBsaW1pdDsgaSsrKSB7XG4gICAgICAgIGlmIChsb2NhbE1hc2tNYXJrZWRbIGkgLSAxIF0gPT09IE1BUktFUikge1xuICAgICAgICAgIGVuZCA9IGlcbiAgICAgICAgICBlbmQgPiAwICYmIG5vTWFya0JlZm9yZSA9PT0gdHJ1ZSAmJiBlbmQtLVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpID4gbGltaXRcbiAgICAgICAgJiYgbG9jYWxNYXNrTWFya2VkWyBlbmQgLSAxIF0gIT09IHZvaWQgMFxuICAgICAgICAmJiBsb2NhbE1hc2tNYXJrZWRbIGVuZCAtIDEgXSAhPT0gTUFSS0VSXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG1vdmVDdXJzb3IubGVmdFJldmVyc2UoaW5wLCBsaW1pdCwgbGltaXQpXG4gICAgICB9XG5cbiAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb24gPT09IHRydWUgPyBzdGFydCA6IGVuZCwgZW5kLCAnZm9yd2FyZCcpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25NYXNrZWRLZXlkb3duIChlKSB7XG4gICAgaWYgKHNob3VsZElnbm9yZUtleShlKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3RcbiAgICAgIGlucCA9IGlucHV0UmVmLnZhbHVlLFxuICAgICAgc3RhcnQgPSBpbnAuc2VsZWN0aW9uU3RhcnQsXG4gICAgICBlbmQgPSBpbnAuc2VsZWN0aW9uRW5kXG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM5KSB7IC8vIExlZnQgLyBSaWdodFxuICAgICAgY29uc3QgZm4gPSBtb3ZlQ3Vyc29yWyAoZS5rZXlDb2RlID09PSAzOSA/ICdyaWdodCcgOiAnbGVmdCcpICsgKHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSA/ICdSZXZlcnNlJyA6ICcnKSBdXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZm4oaW5wLCBzdGFydCwgZW5kLCBlLnNoaWZ0S2V5KVxuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIGUua2V5Q29kZSA9PT0gOCAvLyBCYWNrc3BhY2VcbiAgICAgICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayAhPT0gdHJ1ZVxuICAgICAgJiYgc3RhcnQgPT09IGVuZFxuICAgICkge1xuICAgICAgbW92ZUN1cnNvci5sZWZ0KGlucCwgc3RhcnQsIGVuZCwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBlLmtleUNvZGUgPT09IDQ2IC8vIERlbGV0ZVxuICAgICAgJiYgcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlXG4gICAgICAmJiBzdGFydCA9PT0gZW5kXG4gICAgKSB7XG4gICAgICBtb3ZlQ3Vyc29yLnJpZ2h0UmV2ZXJzZShpbnAsIHN0YXJ0LCBlbmQsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFza1ZhbHVlICh2YWwpIHtcbiAgICBpZiAodmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHsgcmV0dXJuICcnIH1cblxuICAgIGlmIChwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBtYXNrVmFsdWVSZXZlcnNlKHZhbClcbiAgICB9XG5cbiAgICBjb25zdCBtYXNrID0gY29tcHV0ZWRNYXNrXG5cbiAgICBsZXQgdmFsSW5kZXggPSAwLCBvdXRwdXQgPSAnJ1xuXG4gICAgZm9yIChsZXQgbWFza0luZGV4ID0gMDsgbWFza0luZGV4IDwgbWFzay5sZW5ndGg7IG1hc2tJbmRleCsrKSB7XG4gICAgICBjb25zdFxuICAgICAgICB2YWxDaGFyID0gdmFsWyB2YWxJbmRleCBdLFxuICAgICAgICBtYXNrRGVmID0gbWFza1sgbWFza0luZGV4IF1cblxuICAgICAgaWYgKHR5cGVvZiBtYXNrRGVmID09PSAnc3RyaW5nJykge1xuICAgICAgICBvdXRwdXQgKz0gbWFza0RlZlxuICAgICAgICB2YWxDaGFyID09PSBtYXNrRGVmICYmIHZhbEluZGV4KytcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbENoYXIgIT09IHZvaWQgMCAmJiBtYXNrRGVmLnJlZ2V4LnRlc3QodmFsQ2hhcikpIHtcbiAgICAgICAgb3V0cHV0ICs9IG1hc2tEZWYudHJhbnNmb3JtICE9PSB2b2lkIDBcbiAgICAgICAgICA/IG1hc2tEZWYudHJhbnNmb3JtKHZhbENoYXIpXG4gICAgICAgICAgOiB2YWxDaGFyXG4gICAgICAgIHZhbEluZGV4KytcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZnVuY3Rpb24gbWFza1ZhbHVlUmV2ZXJzZSAodmFsKSB7XG4gICAgY29uc3RcbiAgICAgIG1hc2sgPSBjb21wdXRlZE1hc2ssXG4gICAgICBmaXJzdFRva2VuSW5kZXggPSBtYXNrTWFya2VkLmluZGV4T2YoTUFSS0VSKVxuXG4gICAgbGV0IHZhbEluZGV4ID0gdmFsLmxlbmd0aCAtIDEsIG91dHB1dCA9ICcnXG5cbiAgICBmb3IgKGxldCBtYXNrSW5kZXggPSBtYXNrLmxlbmd0aCAtIDE7IG1hc2tJbmRleCA+PSAwICYmIHZhbEluZGV4ID4gLTE7IG1hc2tJbmRleC0tKSB7XG4gICAgICBjb25zdCBtYXNrRGVmID0gbWFza1sgbWFza0luZGV4IF1cblxuICAgICAgbGV0IHZhbENoYXIgPSB2YWxbIHZhbEluZGV4IF1cblxuICAgICAgaWYgKHR5cGVvZiBtYXNrRGVmID09PSAnc3RyaW5nJykge1xuICAgICAgICBvdXRwdXQgPSBtYXNrRGVmICsgb3V0cHV0XG4gICAgICAgIHZhbENoYXIgPT09IG1hc2tEZWYgJiYgdmFsSW5kZXgtLVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsQ2hhciAhPT0gdm9pZCAwICYmIG1hc2tEZWYucmVnZXgudGVzdCh2YWxDaGFyKSkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgb3V0cHV0ID0gKG1hc2tEZWYudHJhbnNmb3JtICE9PSB2b2lkIDAgPyBtYXNrRGVmLnRyYW5zZm9ybSh2YWxDaGFyKSA6IHZhbENoYXIpICsgb3V0cHV0XG4gICAgICAgICAgdmFsSW5kZXgtLVxuICAgICAgICAgIHZhbENoYXIgPSB2YWxbIHZhbEluZGV4IF1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVubW9kaWZpZWQtbG9vcC1jb25kaXRpb25cbiAgICAgICAgfSB3aGlsZSAoZmlyc3RUb2tlbkluZGV4ID09PSBtYXNrSW5kZXggJiYgdmFsQ2hhciAhPT0gdm9pZCAwICYmIG1hc2tEZWYucmVnZXgudGVzdCh2YWxDaGFyKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZnVuY3Rpb24gdW5tYXNrVmFsdWUgKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyB8fCBjb21wdXRlZFVubWFzayA9PT0gdm9pZCAwXG4gICAgICA/ICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGNvbXB1dGVkVW5tYXNrKCcnICsgdmFsKSA6IHZhbClcbiAgICAgIDogY29tcHV0ZWRVbm1hc2sodmFsKVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsbFdpdGhNYXNrICh2YWwpIHtcbiAgICBpZiAobWFza1JlcGxhY2VkLmxlbmd0aCAtIHZhbC5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUgJiYgdmFsLmxlbmd0aCA+IDBcbiAgICAgID8gbWFza1JlcGxhY2VkLnNsaWNlKDAsIC12YWwubGVuZ3RoKSArIHZhbFxuICAgICAgOiB2YWwgKyBtYXNrUmVwbGFjZWQuc2xpY2UodmFsLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJWYWx1ZSxcbiAgICBoYXNNYXNrLFxuICAgIG1vdmVDdXJzb3JGb3JQYXN0ZSxcbiAgICB1cGRhdGVNYXNrVmFsdWUsXG4gICAgb25NYXNrZWRLZXlkb3duXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIHR5cGVHdWFyZCkge1xuICBmdW5jdGlvbiBnZXRGb3JtRG9tUHJvcHMgKCkge1xuICAgIGNvbnN0IG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGR0ID0gJ0RhdGFUcmFuc2ZlcicgaW4gd2luZG93XG4gICAgICAgID8gbmV3IERhdGFUcmFuc2ZlcigpXG4gICAgICAgIDogKCdDbGlwYm9hcmRFdmVudCcgaW4gd2luZG93XG4gICAgICAgICAgICA/IG5ldyBDbGlwYm9hcmRFdmVudCgnJykuY2xpcGJvYXJkRGF0YVxuICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG5cbiAgICAgIGlmIChPYmplY3QobW9kZWwpID09PSBtb2RlbCkge1xuICAgICAgICAoJ2xlbmd0aCcgaW4gbW9kZWxcbiAgICAgICAgICA/IEFycmF5LmZyb20obW9kZWwpXG4gICAgICAgICAgOiBbIG1vZGVsIF1cbiAgICAgICAgKS5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgIGR0Lml0ZW1zLmFkZChmaWxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlczogZHQuZmlsZXNcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbGVzOiB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZUd1YXJkID09PSB0cnVlXG4gICAgPyBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0Rm9ybURvbVByb3BzKClcbiAgICB9KVxuICAgIDogY29tcHV0ZWQoZ2V0Rm9ybURvbVByb3BzKVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRmllbGQsIHsgdXNlRmllbGRTdGF0ZSwgdXNlRmllbGRQcm9wcywgdXNlRmllbGRFbWl0cywgZmllbGRWYWx1ZUlzRmlsbGVkIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmllbGQuanMnXG5pbXBvcnQgdXNlTWFzaywgeyB1c2VNYXNrUHJvcHMgfSBmcm9tICcuL3VzZS1tYXNrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5wdXROYW1lQXR0ciB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5pbXBvcnQgdXNlRmlsZUZvcm1Eb21Qcm9wcyBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWxlLWRvbS1wcm9wcy5qcydcbmltcG9ydCB1c2VLZXlDb21wb3NpdGlvbiBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1rZXktY29tcG9zaXRpb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJbnB1dCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUZpZWxkUHJvcHMsXG4gICAgLi4udXNlTWFza1Byb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cbiAgICBzaGFkb3dUZXh0OiBTdHJpbmcsXG5cbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICB9LFxuXG4gICAgZGVib3VuY2U6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIGF1dG9ncm93OiBCb29sZWFuLCAvLyBtYWtlcyBhIHRleHRhcmVhXG5cbiAgICBpbnB1dENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGlucHV0U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF1cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZUZpZWxkRW1pdHMsXG4gICAgJ3Bhc3RlJywgJ2NoYW5nZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IHRlbXAgPSB7fVxuICAgIGxldCBlbWl0Q2FjaGVkVmFsdWUgPSBOYU4sIHR5cGVkTnVtYmVyLCBzdG9wVmFsdWVXYXRjaGVyLCBlbWl0VGltZXIsIGVtaXRWYWx1ZUZuXG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IG5hbWVQcm9wID0gdXNlRm9ybUlucHV0TmFtZUF0dHIocHJvcHMpXG5cbiAgICBjb25zdCB7XG4gICAgICBpbm5lclZhbHVlLFxuICAgICAgaGFzTWFzayxcbiAgICAgIG1vdmVDdXJzb3JGb3JQYXN0ZSxcbiAgICAgIHVwZGF0ZU1hc2tWYWx1ZSxcbiAgICAgIG9uTWFza2VkS2V5ZG93blxuICAgIH0gPSB1c2VNYXNrKHByb3BzLCBlbWl0LCBlbWl0VmFsdWUsIGlucHV0UmVmKVxuXG4gICAgY29uc3QgZm9ybURvbVByb3BzID0gdXNlRmlsZUZvcm1Eb21Qcm9wcyhwcm9wcywgLyogdHlwZSBndWFyZCAqLyB0cnVlKVxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3Qgb25Db21wb3NpdGlvbiA9IHVzZUtleUNvbXBvc2l0aW9uKG9uSW5wdXQpXG5cbiAgICBjb25zdCBzdGF0ZSA9IHVzZUZpZWxkU3RhdGUoKVxuXG4gICAgY29uc3QgaXNUZXh0YXJlYSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy50eXBlID09PSAndGV4dGFyZWEnIHx8IHByb3BzLmF1dG9ncm93ID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaXNUeXBlVGV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBpc1RleHRhcmVhLnZhbHVlID09PSB0cnVlXG4gICAgICB8fCBbICd0ZXh0JywgJ3NlYXJjaCcsICd1cmwnLCAndGVsJywgJ3Bhc3N3b3JkJyBdLmluY2x1ZGVzKHByb3BzLnR5cGUpXG4gICAgKVxuXG4gICAgY29uc3Qgb25FdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBldnQgPSB7XG4gICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMubGlzdGVuZXJzLnZhbHVlLFxuICAgICAgICBvbklucHV0LFxuICAgICAgICBvblBhc3RlLFxuICAgICAgICAvLyBTYWZhcmkgPCAxMC4yICYgVUlXZWJWaWV3IGRvZXNuJ3QgZmlyZSBjb21wb3NpdGlvbmVuZCB3aGVuXG4gICAgICAgIC8vIHN3aXRjaGluZyBmb2N1cyBiZWZvcmUgY29uZmlybWluZyBjb21wb3NpdGlvbiBjaG9pY2VcbiAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxuICAgICAgICAvLyBmaXJlcyBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiIG9uIGF1dG9jb21wbGV0ZS5cbiAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgIG9uQmx1cjogb25GaW5pc2hFZGl0aW5nLFxuICAgICAgICBvbkZvY3VzOiBzdG9wXG4gICAgICB9XG5cbiAgICAgIGV2dC5vbkNvbXBvc2l0aW9uc3RhcnQgPSBldnQub25Db21wb3NpdGlvbnVwZGF0ZSA9IGV2dC5vbkNvbXBvc2l0aW9uZW5kID0gb25Db21wb3NpdGlvblxuXG4gICAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBldnQub25LZXlkb3duID0gb25NYXNrZWRLZXlkb3duXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBldnQub25BbmltYXRpb25lbmQgPSBhZGp1c3RIZWlnaHRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2dFxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dEF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgIHRhYmluZGV4OiAwLFxuICAgICAgICAnZGF0YS1hdXRvZm9jdXMnOiBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgfHwgdm9pZCAwLFxuICAgICAgICByb3dzOiBwcm9wcy50eXBlID09PSAndGV4dGFyZWEnID8gNiA6IHZvaWQgMCxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5sYWJlbCxcbiAgICAgICAgbmFtZTogbmFtZVByb3AudmFsdWUsXG4gICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgaWQ6IHN0YXRlLnRhcmdldFVpZC52YWx1ZSxcbiAgICAgICAgbWF4bGVuZ3RoOiBwcm9wcy5tYXhsZW5ndGgsXG4gICAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlLFxuICAgICAgICByZWFkb25seTogcHJvcHMucmVhZG9ubHkgPT09IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVGV4dGFyZWEudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGF0dHJzLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBhdHRycy5yb3dzID0gMVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cnNcbiAgICB9KVxuXG4gICAgLy8gc29tZSBicm93c2VycyBsb3NlIHRoZSBuYXRpdmUgaW5wdXQgdmFsdWVcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHJlYXR0YWNoIGl0IGR5bmFtaWNhbGx5XG4gICAgLy8gKGxpa2UgdHlwZT1cInBhc3N3b3JkXCIgPC0+IHR5cGU9XCJ0ZXh0XCI7IHNlZSAjMTIwNzgpXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMudHlwZSwgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0UmVmLnZhbHVlKSB7XG4gICAgICAgIGlucHV0UmVmLnZhbHVlLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2ID0+IHtcbiAgICAgIGlmIChoYXNNYXNrLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChzdG9wVmFsdWVXYXRjaGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgc3RvcFZhbHVlV2F0Y2hlciA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoU3RyaW5nKHYpID09PSBlbWl0Q2FjaGVkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZU1hc2tWYWx1ZSh2KVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaW5uZXJWYWx1ZS52YWx1ZSAhPT0gdikge1xuICAgICAgICBpbm5lclZhbHVlLnZhbHVlID0gdlxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wcy50eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICYmIHRlbXAuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHR5cGVkTnVtYmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0eXBlZE51bWJlciA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRlbXAudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdGV4dGFyZWEgb25seVxuICAgICAgcHJvcHMuYXV0b2dyb3cgPT09IHRydWUgJiYgbmV4dFRpY2soYWRqdXN0SGVpZ2h0KVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5hdXRvZ3JvdywgdmFsID0+IHtcbiAgICAgIC8vIHRleHRhcmVhIG9ubHlcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgbmV4dFRpY2soYWRqdXN0SGVpZ2h0KVxuICAgICAgfVxuICAgICAgLy8gaWYgaXQgaGFzIGEgbnVtYmVyIG9mIHJvd3Mgc2V0IHJlc3BlY3QgaXRcbiAgICAgIGVsc2UgaWYgKGlucHV0UmVmLnZhbHVlICE9PSBudWxsICYmIGF0dHJzLnJvd3MgPiAwKSB7XG4gICAgICAgIGlucHV0UmVmLnZhbHVlLnN0eWxlLmhlaWdodCA9ICdhdXRvJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5kZW5zZSwgKCkgPT4ge1xuICAgICAgcHJvcHMuYXV0b2dyb3cgPT09IHRydWUgJiYgbmV4dFRpY2soYWRqdXN0SGVpZ2h0KVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoKSB7XG4gICAgICBhZGRGb2N1c0ZuKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbnB1dFJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICYmIGlucHV0UmVmLnZhbHVlICE9PSBlbFxuICAgICAgICAgICYmIChlbCA9PT0gbnVsbCB8fCBlbC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlKVxuICAgICAgICApIHtcbiAgICAgICAgICBpbnB1dFJlZi52YWx1ZS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3QgKCkge1xuICAgICAgaW5wdXRSZWYudmFsdWUgIT09IG51bGwgJiYgaW5wdXRSZWYudmFsdWUuc2VsZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhc3RlIChlKSB7XG4gICAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5wID0gZS50YXJnZXRcbiAgICAgICAgbW92ZUN1cnNvckZvclBhc3RlKGlucCwgaW5wLnNlbGVjdGlvblN0YXJ0LCBpbnAuc2VsZWN0aW9uRW5kKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdwYXN0ZScsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25JbnB1dCAoZSkge1xuICAgICAgaWYgKCFlIHx8ICFlLnRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGUudGFyZ2V0LmZpbGVzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcblxuICAgICAgaWYgKGUudGFyZ2V0LnFDb21wb3NpbmcgPT09IHRydWUpIHtcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbFxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVNYXNrVmFsdWUodmFsLCBmYWxzZSwgZS5pbnB1dFR5cGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZW1pdFZhbHVlKHZhbClcblxuICAgICAgICBpZiAoaXNUeXBlVGV4dC52YWx1ZSA9PT0gdHJ1ZSAmJiBlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZS50YXJnZXRcblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25TdGFydCAhPT0gdm9pZCAwICYmIHNlbGVjdGlvbkVuZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiB2YWwuaW5kZXhPZihlLnRhcmdldC52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHRyaWdnZXIgaXQgaW1tZWRpYXRlbHkgdG9vLFxuICAgICAgLy8gdG8gYXZvaWQgXCJmbGlja2VyaW5nXCJcbiAgICAgIHByb3BzLmF1dG9ncm93ID09PSB0cnVlICYmIGFkanVzdEhlaWdodCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFZhbHVlICh2YWwsIHN0b3BXYXRjaGVyKSB7XG4gICAgICBlbWl0VmFsdWVGbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzLnR5cGUgIT09ICdudW1iZXInXG4gICAgICAgICAgJiYgdGVtcC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBkZWxldGUgdGVtcC52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHZhbCAmJiBlbWl0Q2FjaGVkVmFsdWUgIT09IHZhbCkge1xuICAgICAgICAgIGVtaXRDYWNoZWRWYWx1ZSA9IHZhbFxuXG4gICAgICAgICAgc3RvcFdhdGNoZXIgPT09IHRydWUgJiYgKHN0b3BWYWx1ZVdhdGNoZXIgPSB0cnVlKVxuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsKVxuXG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgZW1pdENhY2hlZFZhbHVlID09PSB2YWwgJiYgKGVtaXRDYWNoZWRWYWx1ZSA9IE5hTilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdFZhbHVlRm4gPSB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHR5cGVkTnVtYmVyID0gdHJ1ZVxuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5kZWJvdW5jZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChlbWl0VGltZXIpXG4gICAgICAgIHRlbXAudmFsdWUgPSB2YWxcbiAgICAgICAgZW1pdFRpbWVyID0gc2V0VGltZW91dChlbWl0VmFsdWVGbiwgcHJvcHMuZGVib3VuY2UpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZW1pdFZhbHVlRm4oKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRleHRhcmVhIG9ubHlcbiAgICBmdW5jdGlvbiBhZGp1c3RIZWlnaHQgKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wID0gaW5wdXRSZWYudmFsdWVcbiAgICAgICAgaWYgKGlucCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFN0eWxlID0gaW5wLnBhcmVudE5vZGUuc3R5bGVcbiAgICAgICAgICBjb25zdCB7IG92ZXJmbG93IH0gPSBpbnAuc3R5bGVcblxuICAgICAgICAgIC8vIHJlc2V0IGhlaWdodCBvZiB0ZXh0YXJlYSB0byBhIHNtYWxsIHNpemUgdG8gZGV0ZWN0IHRoZSByZWFsIGhlaWdodFxuICAgICAgICAgIC8vIGJ1dCBrZWVwIHRoZSB0b3RhbCBjb250cm9sIHNpemUgdGhlIHNhbWVcbiAgICAgICAgICAvLyBGaXJlZm94IHJ1bGV6ICMxNDI2MywgIzE0MzQ0XG4gICAgICAgICAgJHEucGxhdGZvcm0uaXMuZmlyZWZveCAhPT0gdHJ1ZSAmJiAoaW5wLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbicpXG4gICAgICAgICAgaW5wLnN0eWxlLmhlaWdodCA9ICcxcHgnXG4gICAgICAgICAgcGFyZW50U3R5bGUubWFyZ2luQm90dG9tID0gKGlucC5zY3JvbGxIZWlnaHQgLSAxKSArICdweCdcblxuICAgICAgICAgIGlucC5zdHlsZS5oZWlnaHQgPSBpbnAuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIGlucC5zdHlsZS5vdmVyZmxvdyA9IG92ZXJmbG93XG4gICAgICAgICAgcGFyZW50U3R5bGUubWFyZ2luQm90dG9tID0gJydcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZSAoZSkge1xuICAgICAgb25Db21wb3NpdGlvbihlKVxuXG4gICAgICBjbGVhclRpbWVvdXQoZW1pdFRpbWVyKVxuICAgICAgZW1pdFZhbHVlRm4gIT09IHZvaWQgMCAmJiBlbWl0VmFsdWVGbigpXG5cbiAgICAgIGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRmluaXNoRWRpdGluZyAoZSkge1xuICAgICAgZSAhPT0gdm9pZCAwICYmIHN0b3AoZSlcblxuICAgICAgY2xlYXJUaW1lb3V0KGVtaXRUaW1lcilcbiAgICAgIGVtaXRWYWx1ZUZuICE9PSB2b2lkIDAgJiYgZW1pdFZhbHVlRm4oKVxuXG4gICAgICB0eXBlZE51bWJlciA9IGZhbHNlXG4gICAgICBzdG9wVmFsdWVXYXRjaGVyID0gZmFsc2VcbiAgICAgIGRlbGV0ZSB0ZW1wLnZhbHVlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gdXNlIHNldFRpbWVvdXQgaW5zdGVhZCBvZiB0aGlzLiRuZXh0VGlja1xuICAgICAgLy8gdG8gYXZvaWQgYSBidWcgd2hlcmUgZm9jdXNvdXQgaXMgbm90IGVtaXR0ZWQgZm9yIHR5cGUgZGF0ZS90aW1lL3dlZWsvLi4uXG4gICAgICBwcm9wcy50eXBlICE9PSAnZmlsZScgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlucHV0UmVmLnZhbHVlLnZhbHVlID0gaW5uZXJWYWx1ZS52YWx1ZSAhPT0gdm9pZCAwID8gaW5uZXJWYWx1ZS52YWx1ZSA6ICcnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VyVmFsdWUgKCkge1xuICAgICAgcmV0dXJuIHRlbXAuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPT09IHRydWVcbiAgICAgICAgPyB0ZW1wLnZhbHVlXG4gICAgICAgIDogKGlubmVyVmFsdWUudmFsdWUgIT09IHZvaWQgMCA/IGlubmVyVmFsdWUudmFsdWUgOiAnJylcbiAgICB9XG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgb25GaW5pc2hFZGl0aW5nKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIC8vIHRleHRhcmVhIG9ubHlcbiAgICAgIHByb3BzLmF1dG9ncm93ID09PSB0cnVlICYmIGFkanVzdEhlaWdodCgpXG4gICAgfSlcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgIGlubmVyVmFsdWUsXG5cbiAgICAgIGZpZWxkQ2xhc3M6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIGBxLSR7IGlzVGV4dGFyZWEudmFsdWUgPT09IHRydWUgPyAndGV4dGFyZWEnIDogJ2lucHV0JyB9YFxuICAgICAgICArIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSA/ICcgcS10ZXh0YXJlYS0tYXV0b2dyb3cnIDogJycpXG4gICAgICApLFxuXG4gICAgICBoYXNTaGFkb3c6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIHByb3BzLnR5cGUgIT09ICdmaWxlJ1xuICAgICAgICAmJiB0eXBlb2YgcHJvcHMuc2hhZG93VGV4dCA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvcHMuc2hhZG93VGV4dC5sZW5ndGggPiAwXG4gICAgICApLFxuXG4gICAgICBpbnB1dFJlZixcblxuICAgICAgZW1pdFZhbHVlLFxuXG4gICAgICBoYXNWYWx1ZSxcblxuICAgICAgZmxvYXRpbmdMYWJlbDogY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgaGFzVmFsdWUudmFsdWUgPT09IHRydWVcbiAgICAgICAgfHwgZmllbGRWYWx1ZUlzRmlsbGVkKHByb3BzLmRpc3BsYXlWYWx1ZSlcbiAgICAgICksXG5cbiAgICAgIGdldENvbnRyb2w6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoaXNUZXh0YXJlYS52YWx1ZSA9PT0gdHJ1ZSA/ICd0ZXh0YXJlYScgOiAnaW5wdXQnLCB7XG4gICAgICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgJ3EtZmllbGRfX25hdGl2ZSBxLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgIHByb3BzLmlucHV0Q2xhc3NcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5pbnB1dFN0eWxlLFxuICAgICAgICAgIC4uLmlucHV0QXR0cnMudmFsdWUsXG4gICAgICAgICAgLi4ub25FdmVudHMudmFsdWUsXG4gICAgICAgICAgLi4uKFxuICAgICAgICAgICAgcHJvcHMudHlwZSAhPT0gJ2ZpbGUnXG4gICAgICAgICAgICAgID8geyB2YWx1ZTogZ2V0Q3VyVmFsdWUoKSB9XG4gICAgICAgICAgICAgIDogZm9ybURvbVByb3BzLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgZ2V0U2hhZG93Q29udHJvbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1maWVsZF9fbmF0aXZlIHEtZmllbGRfX3NoYWRvdyBhYnNvbHV0ZS1ib3R0b20gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgICAgICArIChpc1RleHRhcmVhLnZhbHVlID09PSB0cnVlID8gJycgOiAnIHRleHQtbm8td3JhcCcpXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ2ludmlzaWJsZScgfSwgZ2V0Q3VyVmFsdWUoKSksXG4gICAgICAgICAgaCgnc3BhbicsIHByb3BzLnNoYWRvd1RleHQpXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHJlbmRlckZuID0gdXNlRmllbGQoc3RhdGUpXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBmb2N1cyxcbiAgICAgIHNlbGVjdCxcbiAgICAgIGdldE5hdGl2ZUVsZW1lbnQ6ICgpID0+IGlucHV0UmVmLnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiByZW5kZXJGblxuICB9XG59KVxuIl0sIm5hbWVzIjpbImF0dHJzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBLE1BQU0sY0FBYztBQUFBLEVBQ2xCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUjtBQUVBLE1BQU0sU0FBUztBQUFBLEVBQ2IsS0FBSyxFQUFFLFNBQVMsU0FBUyxRQUFRLFNBQVU7QUFBQSxFQUUzQyxHQUFHLEVBQUUsU0FBUyxZQUFZLFFBQVEsWUFBYTtBQUFBLEVBQy9DLEdBQUcsRUFBRSxTQUFTLGVBQWUsUUFBUSxlQUFnQjtBQUFBLEVBRXJELEdBQUcsRUFBRSxTQUFTLFlBQVksUUFBUSxhQUFhLFdBQVcsT0FBSyxFQUFFLG9CQUFxQjtBQUFBLEVBQ3RGLEdBQUcsRUFBRSxTQUFTLFlBQVksUUFBUSxhQUFhLFdBQVcsT0FBSyxFQUFFLG9CQUFxQjtBQUFBLEVBRXRGLEdBQUcsRUFBRSxTQUFTLGVBQWUsUUFBUSxnQkFBZ0IsV0FBVyxPQUFLLEVBQUUsb0JBQXFCO0FBQUEsRUFDNUYsR0FBRyxFQUFFLFNBQVMsZUFBZSxRQUFRLGdCQUFnQixXQUFXLE9BQUssRUFBRSxvQkFBcUI7QUFDOUY7QUFFQSxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFDL0IsS0FBSyxRQUFR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
