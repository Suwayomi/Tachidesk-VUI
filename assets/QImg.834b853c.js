import { c as computed, r as ref, w as watch, o as onBeforeUnmount, h, T as Transition } from "./index.75e4774b.js";
import { c as createComponent, h as hSlot, Q as QSpinner } from "./QSpinner.6511ee07.js";
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
const defaultRatio = 16 / 9;
var QImg = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    let loadTimer;
    const images = [
      ref(null),
      ref(props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null)
    ];
    const position = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition`
    );
    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));
    watch(() => getCurrentSrc(), addImage);
    function getCurrentSrc() {
      return props.src || props.srcset || props.sizes ? {
        src: props.src,
        srcset: props.srcset,
        sizes: props.sizes
      } : null;
    }
    function addImage(imgProps) {
      clearTimeout(loadTimer);
      hasError.value = false;
      if (imgProps === null) {
        isLoading.value = false;
        images[0].value = null;
        images[1].value = null;
        return;
      }
      isLoading.value = true;
      images[position.value].value = imgProps;
    }
    function onLoad({ target }) {
      if (loadTimer === null) {
        return;
      }
      clearTimeout(loadTimer);
      naturalRatio.value = target.naturalHeight === 0 ? 0.5 : target.naturalWidth / target.naturalHeight;
      waitForCompleteness(target, 1);
    }
    function waitForCompleteness(target, count) {
      if (loadTimer === null || count === 1e3) {
        return;
      }
      if (target.complete === true) {
        onReady(target);
      } else {
        loadTimer = setTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }
    function onReady(img) {
      if (loadTimer === null) {
        return;
      }
      position.value = position.value === 1 ? 0 : 1;
      images[position.value].value = null;
      isLoading.value = false;
      hasError.value = false;
      emit("load", img.currentSrc || img.src);
    }
    function onError(err) {
      clearTimeout(loadTimer);
      isLoading.value = false;
      hasError.value = true;
      images[0].value = null;
      images[1].value = null;
      emit("error", err);
    }
    function getContainer(key, child) {
      return h(
        "div",
        { class: "q-img__container absolute-full", key },
        child
      );
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        "aria-hidden": "true",
        draggable: props.draggable,
        ...img
      };
      if (position.value === index) {
        data.class += " q-img__image--waiting";
        Object.assign(data, { onLoad, onError });
      } else {
        data.class += " q-img__image--loaded";
      }
      return getContainer("img" + index, h("img", data));
    }
    function getContent() {
      if (isLoading.value !== true) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
        h(QSpinner, {
          color: props.spinnerColor,
          size: props.spinnerSize
        })
      ]);
    }
    {
      {
        addImage(getCurrentSrc());
      }
      onBeforeUnmount(() => {
        clearTimeout(loadTimer);
        loadTimer = null;
      });
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (hasError.value !== true) {
        if (images[0].value !== null) {
          content.push(getImage(0));
        }
        if (images[1].value !== null) {
          content.push(getImage(1));
        }
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        class: classes.value,
        style: style.value,
        role: "img",
        "aria-label": props.alt
      }, content);
    };
  }
});
export { QImg as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUltZy44MzRiODUzYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcmF0aW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2ltZy9RSW1nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlUmF0aW9Qcm9wcyA9IHtcbiAgcmF0aW86IFsgU3RyaW5nLCBOdW1iZXIgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIG5hdHVyYWxSYXRpbykge1xuICAvLyByZXR1cm4gcmF0aW9TdHlsZVxuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHJhdGlvID0gTnVtYmVyKFxuICAgICAgcHJvcHMucmF0aW8gfHwgKG5hdHVyYWxSYXRpbyAhPT0gdm9pZCAwID8gbmF0dXJhbFJhdGlvLnZhbHVlIDogdm9pZCAwKVxuICAgIClcblxuICAgIHJldHVybiBpc05hTihyYXRpbykgIT09IHRydWUgJiYgcmF0aW8gPiAwXG4gICAgICA/IHsgcGFkZGluZ0JvdHRvbTogYCR7IDEwMCAvIHJhdGlvIH0lYCB9XG4gICAgICA6IG51bGxcbiAgfSlcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgVHJhbnNpdGlvbiB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCB1c2VSYXRpbywgeyB1c2VSYXRpb1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcmF0aW8uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmNvbnN0IGRlZmF1bHRSYXRpbyA9IDE2IC8gOVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUltZycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSYXRpb1Byb3BzLFxuXG4gICAgc3JjOiBTdHJpbmcsXG4gICAgc3Jjc2V0OiBTdHJpbmcsXG4gICAgc2l6ZXM6IFN0cmluZyxcblxuICAgIGFsdDogU3RyaW5nLFxuICAgIGNyb3Nzb3JpZ2luOiBTdHJpbmcsXG4gICAgZGVjb2Rpbmc6IFN0cmluZyxcbiAgICByZWZlcnJlcnBvbGljeTogU3RyaW5nLFxuXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuXG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xhenknXG4gICAgfSxcbiAgICBmZXRjaHByaW9yaXR5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYXV0bydcbiAgICB9LFxuICAgIHdpZHRoOiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmcsXG4gICAgaW5pdGlhbFJhdGlvOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiBkZWZhdWx0UmF0aW9cbiAgICB9LFxuXG4gICAgcGxhY2Vob2xkZXJTcmM6IFN0cmluZyxcblxuICAgIGZpdDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2NvdmVyJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICc1MCUgNTAlJ1xuICAgIH0sXG5cbiAgICBpbWdDbGFzczogU3RyaW5nLFxuICAgIGltZ1N0eWxlOiBPYmplY3QsXG5cbiAgICBub1NwaW5uZXI6IEJvb2xlYW4sXG4gICAgbm9OYXRpdmVNZW51OiBCb29sZWFuLFxuICAgIG5vVHJhbnNpdGlvbjogQm9vbGVhbixcblxuICAgIHNwaW5uZXJDb2xvcjogU3RyaW5nLFxuICAgIHNwaW5uZXJTaXplOiBTdHJpbmdcbiAgfSxcblxuICBlbWl0czogWyAnbG9hZCcsICdlcnJvcicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IG5hdHVyYWxSYXRpbyA9IHJlZihwcm9wcy5pbml0aWFsUmF0aW8pXG4gICAgY29uc3QgcmF0aW9TdHlsZSA9IHVzZVJhdGlvKHByb3BzLCBuYXR1cmFsUmF0aW8pXG5cbiAgICBsZXQgbG9hZFRpbWVyXG5cbiAgICBjb25zdCBpbWFnZXMgPSBbXG4gICAgICByZWYobnVsbCksXG4gICAgICByZWYocHJvcHMucGxhY2Vob2xkZXJTcmMgIT09IHZvaWQgMCA/IHsgc3JjOiBwcm9wcy5wbGFjZWhvbGRlclNyYyB9IDogbnVsbClcbiAgICBdXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHJlZigwKVxuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGhhc0Vycm9yID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1pbWcgcS1pbWctLSR7IHByb3BzLm5vTmF0aXZlTWVudSA9PT0gdHJ1ZSA/ICduby0nIDogJycgfW1lbnVgXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHRcbiAgICB9KSlcblxuICAgIGNvbnN0IGltZ0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWltZ19faW1hZ2UgJHsgcHJvcHMuaW1nQ2xhc3MgIT09IHZvaWQgMCA/IHByb3BzLmltZ0NsYXNzICsgJyAnIDogJycgfWBcbiAgICAgICsgYHEtaW1nX19pbWFnZS0td2l0aCR7IHByb3BzLm5vVHJhbnNpdGlvbiA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYFxuICAgIClcblxuICAgIGNvbnN0IGltZ1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLmltZ1N0eWxlLFxuICAgICAgb2JqZWN0Rml0OiBwcm9wcy5maXQsXG4gICAgICBvYmplY3RQb3NpdGlvbjogcHJvcHMucG9zaXRpb25cbiAgICB9KSlcblxuICAgIHdhdGNoKCgpID0+IGdldEN1cnJlbnRTcmMoKSwgYWRkSW1hZ2UpXG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3JjICgpIHtcbiAgICAgIHJldHVybiBwcm9wcy5zcmMgfHwgcHJvcHMuc3Jjc2V0IHx8IHByb3BzLnNpemVzXG4gICAgICAgID8ge1xuICAgICAgICAgICAgc3JjOiBwcm9wcy5zcmMsXG4gICAgICAgICAgICBzcmNzZXQ6IHByb3BzLnNyY3NldCxcbiAgICAgICAgICAgIHNpemVzOiBwcm9wcy5zaXplc1xuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW1hZ2UgKGltZ1Byb3BzKSB7XG4gICAgICBjbGVhclRpbWVvdXQobG9hZFRpbWVyKVxuICAgICAgaGFzRXJyb3IudmFsdWUgPSBmYWxzZVxuXG4gICAgICBpZiAoaW1nUHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgaW1hZ2VzWyAwIF0udmFsdWUgPSBudWxsXG4gICAgICAgIGltYWdlc1sgMSBdLnZhbHVlID0gbnVsbFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgaW1hZ2VzWyBwb3NpdGlvbi52YWx1ZSBdLnZhbHVlID0gaW1nUHJvcHNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKHsgdGFyZ2V0IH0pIHtcbiAgICAgIC8vIGlmIGNvbXBvbmVudCBoYXMgYmVlbiBhbHJlYWR5IGRlc3Ryb3llZFxuICAgICAgaWYgKGxvYWRUaW1lciA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBjbGVhclRpbWVvdXQobG9hZFRpbWVyKVxuXG4gICAgICBuYXR1cmFsUmF0aW8udmFsdWUgPSB0YXJnZXQubmF0dXJhbEhlaWdodCA9PT0gMFxuICAgICAgICA/IDAuNVxuICAgICAgICA6IHRhcmdldC5uYXR1cmFsV2lkdGggLyB0YXJnZXQubmF0dXJhbEhlaWdodFxuXG4gICAgICB3YWl0Rm9yQ29tcGxldGVuZXNzKHRhcmdldCwgMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWl0Rm9yQ29tcGxldGVuZXNzICh0YXJnZXQsIGNvdW50KSB7XG4gICAgICAvLyBwcm90ZWN0IGFnYWluc3QgcnVubmluZyBmb3JldmVyXG4gICAgICBpZiAobG9hZFRpbWVyID09PSBudWxsIHx8IGNvdW50ID09PSAxMDAwKSB7IHJldHVybiB9XG5cbiAgICAgIGlmICh0YXJnZXQuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgb25SZWFkeSh0YXJnZXQpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbG9hZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2FpdEZvckNvbXBsZXRlbmVzcyh0YXJnZXQsIGNvdW50ICsgMSlcbiAgICAgICAgfSwgNTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWFkeSAoaW1nKSB7XG4gICAgICAvLyBpZiBjb21wb25lbnQgaGFzIGJlZW4gYWxyZWFkeSBkZXN0cm95ZWRcbiAgICAgIGlmIChsb2FkVGltZXIgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgcG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi52YWx1ZSA9PT0gMSA/IDAgOiAxXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF0udmFsdWUgPSBudWxsXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgaGFzRXJyb3IudmFsdWUgPSBmYWxzZVxuICAgICAgZW1pdCgnbG9hZCcsIGltZy5jdXJyZW50U3JjIHx8IGltZy5zcmMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FcnJvciAoZXJyKSB7XG4gICAgICBjbGVhclRpbWVvdXQobG9hZFRpbWVyKVxuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIGhhc0Vycm9yLnZhbHVlID0gdHJ1ZVxuICAgICAgaW1hZ2VzWyAwIF0udmFsdWUgPSBudWxsXG4gICAgICBpbWFnZXNbIDEgXS52YWx1ZSA9IG51bGxcbiAgICAgIGVtaXQoJ2Vycm9yJywgZXJyKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRhaW5lciAoa2V5LCBjaGlsZCkge1xuICAgICAgcmV0dXJuIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiAncS1pbWdfX2NvbnRhaW5lciBhYnNvbHV0ZS1mdWxsJywga2V5IH0sXG4gICAgICAgIGNoaWxkXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2UgKGluZGV4KSB7XG4gICAgICBjb25zdCBpbWcgPSBpbWFnZXNbIGluZGV4IF0udmFsdWVcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5OiAnaW1nXycgKyBpbmRleCxcbiAgICAgICAgY2xhc3M6IGltZ0NsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUudmFsdWUsXG4gICAgICAgIGNyb3Nzb3JpZ2luOiBwcm9wcy5jcm9zc29yaWdpbixcbiAgICAgICAgZGVjb2Rpbmc6IHByb3BzLmRlY29kaW5nLFxuICAgICAgICByZWZlcnJlcnBvbGljeTogcHJvcHMucmVmZXJyZXJwb2xpY3ksXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGxvYWRpbmc6IHByb3BzLmxvYWRpbmcsXG4gICAgICAgIGZldGNocHJpb3JpdHk6IHByb3BzLmZldGNocHJpb3JpdHksXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgZHJhZ2dhYmxlOiBwcm9wcy5kcmFnZ2FibGUsXG4gICAgICAgIC4uLmltZ1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24udmFsdWUgPT09IGluZGV4KSB7XG4gICAgICAgIGRhdGEuY2xhc3MgKz0gJyBxLWltZ19faW1hZ2UtLXdhaXRpbmcnXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgeyBvbkxvYWQsIG9uRXJyb3IgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkYXRhLmNsYXNzICs9ICcgcS1pbWdfX2ltYWdlLS1sb2FkZWQnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRDb250YWluZXIoJ2ltZycgKyBpbmRleCwgaCgnaW1nJywgZGF0YSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBpZiAoaXNMb2FkaW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnY29udGVudCcsXG4gICAgICAgICAgY2xhc3M6ICdxLWltZ19fY29udGVudCBhYnNvbHV0ZS1mdWxsIHEtYW5jaG9yLS1za2lwJ1xuICAgICAgICB9LCBoU2xvdChzbG90c1sgaGFzRXJyb3IudmFsdWUgPT09IHRydWUgPyAnZXJyb3InIDogJ2RlZmF1bHQnIF0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdsb2FkaW5nJyxcbiAgICAgICAgY2xhc3M6ICdxLWltZ19fbG9hZGluZyBhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXInXG4gICAgICB9LCAoXG4gICAgICAgIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdHMubG9hZGluZygpXG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIHByb3BzLm5vU3Bpbm5lciA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIGgoUVNwaW5uZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuc3Bpbm5lckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHByb3BzLnNwaW5uZXJTaXplXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICApKVxuICAgIH1cblxuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUpIHtcbiAgICAgIGlmIChfX1FVQVNBUl9TU1JfQ0xJRU5UX18gJiYgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAgICAgYWRkSW1hZ2UoZ2V0Q3VycmVudFNyYygpKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFkZEltYWdlKGdldEN1cnJlbnRTcmMoKSlcbiAgICAgIH1cblxuICAgICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGxvYWRUaW1lcilcbiAgICAgICAgbG9hZFRpbWVyID0gbnVsbFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IFtdXG5cbiAgICAgIGlmIChyYXRpb1N0eWxlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGtleTogJ2ZpbGxlcicsIHN0eWxlOiByYXRpb1N0eWxlLnZhbHVlIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0Vycm9yLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChpbWFnZXNbIDAgXS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChnZXRJbWFnZSgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZXNbIDEgXS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChnZXRJbWFnZSgxKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250ZW50LnB1c2goXG4gICAgICAgIGgoVHJhbnNpdGlvbiwgeyBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyB9LCBnZXRDb250ZW50KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAnaW1nJyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5hbHRcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRU8sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixPQUFPLENBQUUsUUFBUSxNQUFRO0FBQzNCO0FBRWUsU0FBQSxTQUFVLE9BQU8sY0FBYztBQUU1QyxTQUFPLFNBQVMsTUFBTTtBQUNwQixVQUFNLFFBQVE7QUFBQSxNQUNaLE1BQU0sVUFBVSxpQkFBaUIsU0FBUyxhQUFhLFFBQVE7QUFBQSxJQUNoRTtBQUVELFdBQU8sTUFBTSxLQUFLLE1BQU0sUUFBUSxRQUFRLElBQ3BDLEVBQUUsZUFBZSxHQUFJLE1BQU0sU0FBVyxJQUN0QztBQUFBLEVBQ1IsQ0FBRztBQUNIO0FDUEEsTUFBTSxlQUFlLEtBQUs7QUFFMUIsSUFBQSxPQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9B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
