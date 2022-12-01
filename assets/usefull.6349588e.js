import { c as computed, r as ref, w as watch, o as onBeforeUnmount, h, T as Transition } from "./index.c15e704f.js";
import { c as createComponent, h as hSlot, Q as QSpinner } from "./QSpinner.dc7e097a.js";
import { fetcher } from "./fetcher.10190d88.js";
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
async function getImgBlob(imgUrl) {
  const resp = await fetcher(imgUrl);
  if (resp.status == 200) {
    const blob = await resp.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return await new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  } else {
    return new Promise((resolve) => {
      resolve("");
    });
  }
}
export { QImg as Q, getImgBlob as g };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlZnVsbC42MzQ5NTg4ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcmF0aW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2ltZy9RSW1nLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL3VzZWZ1bGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VSYXRpb1Byb3BzID0ge1xuICByYXRpbzogWyBTdHJpbmcsIE51bWJlciBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgbmF0dXJhbFJhdGlvKSB7XG4gIC8vIHJldHVybiByYXRpb1N0eWxlXG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcmF0aW8gPSBOdW1iZXIoXG4gICAgICBwcm9wcy5yYXRpbyB8fCAobmF0dXJhbFJhdGlvICE9PSB2b2lkIDAgPyBuYXR1cmFsUmF0aW8udmFsdWUgOiB2b2lkIDApXG4gICAgKVxuXG4gICAgcmV0dXJuIGlzTmFOKHJhdGlvKSAhPT0gdHJ1ZSAmJiByYXRpbyA+IDBcbiAgICAgID8geyBwYWRkaW5nQm90dG9tOiBgJHsgMTAwIC8gcmF0aW8gfSVgIH1cbiAgICAgIDogbnVsbFxuICB9KVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBUcmFuc2l0aW9uIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVNwaW5uZXIgZnJvbSAnLi4vc3Bpbm5lci9RU3Bpbm5lci5qcydcblxuaW1wb3J0IHVzZVJhdGlvLCB7IHVzZVJhdGlvUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yYXRpby5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuY29uc3QgZGVmYXVsdFJhdGlvID0gMTYgLyA5XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSW1nJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVJhdGlvUHJvcHMsXG5cbiAgICBzcmM6IFN0cmluZyxcbiAgICBzcmNzZXQ6IFN0cmluZyxcbiAgICBzaXplczogU3RyaW5nLFxuXG4gICAgYWx0OiBTdHJpbmcsXG4gICAgY3Jvc3NvcmlnaW46IFN0cmluZyxcbiAgICBkZWNvZGluZzogU3RyaW5nLFxuICAgIHJlZmVycmVycG9saWN5OiBTdHJpbmcsXG5cbiAgICBkcmFnZ2FibGU6IEJvb2xlYW4sXG5cbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGF6eSdcbiAgICB9LFxuICAgIGZldGNocHJpb3JpdHk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJ1xuICAgIH0sXG4gICAgd2lkdGg6IFN0cmluZyxcbiAgICBoZWlnaHQ6IFN0cmluZyxcbiAgICBpbml0aWFsUmF0aW86IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRSYXRpb1xuICAgIH0sXG5cbiAgICBwbGFjZWhvbGRlclNyYzogU3RyaW5nLFxuXG4gICAgZml0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnY292ZXInXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzUwJSA1MCUnXG4gICAgfSxcblxuICAgIGltZ0NsYXNzOiBTdHJpbmcsXG4gICAgaW1nU3R5bGU6IE9iamVjdCxcblxuICAgIG5vU3Bpbm5lcjogQm9vbGVhbixcbiAgICBub05hdGl2ZU1lbnU6IEJvb2xlYW4sXG4gICAgbm9UcmFuc2l0aW9uOiBCb29sZWFuLFxuXG4gICAgc3Bpbm5lckNvbG9yOiBTdHJpbmcsXG4gICAgc3Bpbm5lclNpemU6IFN0cmluZ1xuICB9LFxuXG4gIGVtaXRzOiBbICdsb2FkJywgJ2Vycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgbmF0dXJhbFJhdGlvID0gcmVmKHByb3BzLmluaXRpYWxSYXRpbylcbiAgICBjb25zdCByYXRpb1N0eWxlID0gdXNlUmF0aW8ocHJvcHMsIG5hdHVyYWxSYXRpbylcblxuICAgIGxldCBsb2FkVGltZXJcblxuICAgIGNvbnN0IGltYWdlcyA9IFtcbiAgICAgIHJlZihudWxsKSxcbiAgICAgIHJlZihwcm9wcy5wbGFjZWhvbGRlclNyYyAhPT0gdm9pZCAwID8geyBzcmM6IHByb3BzLnBsYWNlaG9sZGVyU3JjIH0gOiBudWxsKVxuICAgIF1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gcmVmKDApXG5cbiAgICBjb25zdCBpc0xvYWRpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaGFzRXJyb3IgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWltZyBxLWltZy0tJHsgcHJvcHMubm9OYXRpdmVNZW51ID09PSB0cnVlID8gJ25vLScgOiAnJyB9bWVudWBcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodFxuICAgIH0pKVxuXG4gICAgY29uc3QgaW1nQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtaW1nX19pbWFnZSAkeyBwcm9wcy5pbWdDbGFzcyAhPT0gdm9pZCAwID8gcHJvcHMuaW1nQ2xhc3MgKyAnICcgOiAnJyB9YFxuICAgICAgKyBgcS1pbWdfX2ltYWdlLS13aXRoJHsgcHJvcHMubm9UcmFuc2l0aW9uID09PSB0cnVlID8gJ291dCcgOiAnJyB9LXRyYW5zaXRpb25gXG4gICAgKVxuXG4gICAgY29uc3QgaW1nU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgLi4ucHJvcHMuaW1nU3R5bGUsXG4gICAgICBvYmplY3RGaXQ6IHByb3BzLmZpdCxcbiAgICAgIG9iamVjdFBvc2l0aW9uOiBwcm9wcy5wb3NpdGlvblxuICAgIH0pKVxuXG4gICAgd2F0Y2goKCkgPT4gZ2V0Q3VycmVudFNyYygpLCBhZGRJbWFnZSlcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTcmMgKCkge1xuICAgICAgcmV0dXJuIHByb3BzLnNyYyB8fCBwcm9wcy5zcmNzZXQgfHwgcHJvcHMuc2l6ZXNcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBzcmM6IHByb3BzLnNyYyxcbiAgICAgICAgICAgIHNyY3NldDogcHJvcHMuc3Jjc2V0LFxuICAgICAgICAgICAgc2l6ZXM6IHByb3BzLnNpemVzXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbWFnZSAoaW1nUHJvcHMpIHtcbiAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZXIpXG4gICAgICBoYXNFcnJvci52YWx1ZSA9IGZhbHNlXG5cbiAgICAgIGlmIChpbWdQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBpbWFnZXNbIDAgXS52YWx1ZSA9IG51bGxcbiAgICAgICAgaW1hZ2VzWyAxIF0udmFsdWUgPSBudWxsXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF0udmFsdWUgPSBpbWdQcm9wc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoeyB0YXJnZXQgfSkge1xuICAgICAgLy8gaWYgY29tcG9uZW50IGhhcyBiZWVuIGFscmVhZHkgZGVzdHJveWVkXG4gICAgICBpZiAobG9hZFRpbWVyID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZXIpXG5cbiAgICAgIG5hdHVyYWxSYXRpby52YWx1ZSA9IHRhcmdldC5uYXR1cmFsSGVpZ2h0ID09PSAwXG4gICAgICAgID8gMC41XG4gICAgICAgIDogdGFyZ2V0Lm5hdHVyYWxXaWR0aCAvIHRhcmdldC5uYXR1cmFsSGVpZ2h0XG5cbiAgICAgIHdhaXRGb3JDb21wbGV0ZW5lc3ModGFyZ2V0LCAxKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhaXRGb3JDb21wbGV0ZW5lc3MgKHRhcmdldCwgY291bnQpIHtcbiAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBydW5uaW5nIGZvcmV2ZXJcbiAgICAgIGlmIChsb2FkVGltZXIgPT09IG51bGwgfHwgY291bnQgPT09IDEwMDApIHsgcmV0dXJuIH1cblxuICAgICAgaWYgKHRhcmdldC5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBvblJlYWR5KHRhcmdldClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsb2FkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3YWl0Rm9yQ29tcGxldGVuZXNzKHRhcmdldCwgY291bnQgKyAxKVxuICAgICAgICB9LCA1MClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlYWR5IChpbWcpIHtcbiAgICAgIC8vIGlmIGNvbXBvbmVudCBoYXMgYmVlbiBhbHJlYWR5IGRlc3Ryb3llZFxuICAgICAgaWYgKGxvYWRUaW1lciA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBwb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLnZhbHVlID09PSAxID8gMCA6IDFcbiAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXS52YWx1ZSA9IG51bGxcbiAgICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICBoYXNFcnJvci52YWx1ZSA9IGZhbHNlXG4gICAgICBlbWl0KCdsb2FkJywgaW1nLmN1cnJlbnRTcmMgfHwgaW1nLnNyYylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVycm9yIChlcnIpIHtcbiAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZXIpXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgaGFzRXJyb3IudmFsdWUgPSB0cnVlXG4gICAgICBpbWFnZXNbIDAgXS52YWx1ZSA9IG51bGxcbiAgICAgIGltYWdlc1sgMSBdLnZhbHVlID0gbnVsbFxuICAgICAgZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGFpbmVyIChrZXksIGNoaWxkKSB7XG4gICAgICByZXR1cm4gaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3M6ICdxLWltZ19fY29udGFpbmVyIGFic29sdXRlLWZ1bGwnLCBrZXkgfSxcbiAgICAgICAgY2hpbGRcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbWFnZSAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IGltZyA9IGltYWdlc1sgaW5kZXggXS52YWx1ZVxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBrZXk6ICdpbWdfJyArIGluZGV4LFxuICAgICAgICBjbGFzczogaW1nQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZS52YWx1ZSxcbiAgICAgICAgY3Jvc3NvcmlnaW46IHByb3BzLmNyb3Nzb3JpZ2luLFxuICAgICAgICBkZWNvZGluZzogcHJvcHMuZGVjb2RpbmcsXG4gICAgICAgIHJlZmVycmVycG9saWN5OiBwcm9wcy5yZWZlcnJlcnBvbGljeSxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgbG9hZGluZzogcHJvcHMubG9hZGluZyxcbiAgICAgICAgZmV0Y2hwcmlvcml0eTogcHJvcHMuZmV0Y2hwcmlvcml0eSxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICBkcmFnZ2FibGU6IHByb3BzLmRyYWdnYWJsZSxcbiAgICAgICAgLi4uaW1nXG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbi52YWx1ZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgZGF0YS5jbGFzcyArPSAnIHEtaW1nX19pbWFnZS0td2FpdGluZydcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IG9uTG9hZCwgb25FcnJvciB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRhdGEuY2xhc3MgKz0gJyBxLWltZ19faW1hZ2UtLWxvYWRlZCdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldENvbnRhaW5lcignaW1nJyArIGluZGV4LCBoKCdpbWcnLCBkYXRhKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGlmIChpc0xvYWRpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdjb250ZW50JyxcbiAgICAgICAgICBjbGFzczogJ3EtaW1nX19jb250ZW50IGFic29sdXRlLWZ1bGwgcS1hbmNob3ItLXNraXAnXG4gICAgICAgIH0sIGhTbG90KHNsb3RzWyBoYXNFcnJvci52YWx1ZSA9PT0gdHJ1ZSA/ICdlcnJvcicgOiAnZGVmYXVsdCcgXSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2xvYWRpbmcnLFxuICAgICAgICBjbGFzczogJ3EtaW1nX19sb2FkaW5nIGFic29sdXRlLWZ1bGwgZmxleCBmbGV4LWNlbnRlcidcbiAgICAgIH0sIChcbiAgICAgICAgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90cy5sb2FkaW5nKClcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgcHJvcHMubm9TcGlubmVyID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgaChRU3Bpbm5lciwge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5zcGlubmVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogcHJvcHMuc3Bpbm5lclNpemVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICkpXG4gICAgfVxuXG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKF9fUVVBU0FSX1NTUl9DTElFTlRfXyAmJiBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgICBhZGRJbWFnZShnZXRDdXJyZW50U3JjKCkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYWRkSW1hZ2UoZ2V0Q3VycmVudFNyYygpKVxuICAgICAgfVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQobG9hZFRpbWVyKVxuICAgICAgICBsb2FkVGltZXIgPSBudWxsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gW11cblxuICAgICAgaWYgKHJhdGlvU3R5bGUudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsga2V5OiAnZmlsbGVyJywgc3R5bGU6IHJhdGlvU3R5bGUudmFsdWUgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzRXJyb3IudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGltYWdlc1sgMCBdLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudC5wdXNoKGdldEltYWdlKDApKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlc1sgMSBdLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudC5wdXNoKGdldEltYWdlKDEpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgaChUcmFuc2l0aW9uLCB7IG5hbWU6ICdxLXRyYW5zaXRpb24tLWZhZGUnIH0sIGdldENvbnRlbnQpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdpbWcnLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmFsdFxuICAgICAgfSwgY29udGVudClcbiAgICB9XG4gIH1cbn0pXG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICdzcmMvYm9vdC9mZXRjaGVyJztcblxuLyoqXG4gKiBJdCBmZXRjaGVzIGFuIGltYWdlIGZyb20gYSBVUkwsIGNvbnZlcnRzIGl0IHRvIGEgYmxvYiwgY29udmVydHMgdGhlIGJsb2IgdG8gYSBkYXRhIFVSTCwgYW5kIHJldHVybnNcbiAqIHRoZSBkYXRhIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IGltZ1VybCAtIFRoZSBVUkwgb2YgdGhlIGltYWdlIHlvdSB3YW50IHRvIGdldCB0aGUgYmxvYiBvZi5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgc3RyaW5nLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW1nQmxvYihpbWdVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaGVyKGltZ1VybCk7XG4gIGlmIChyZXNwLnN0YXR1cyA9PSAyMDApIHtcbiAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcC5ibG9iKCk7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUoJycpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixPQUFPLENBQUUsUUFBUSxNQUFRO0FBQzNCO0FBRWUsU0FBQSxTQUFVLE9BQU8sY0FBYztBQUU1QyxTQUFPLFNBQVMsTUFBTTtBQUNwQixVQUFNLFFBQVE7QUFBQSxNQUNaLE1B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
