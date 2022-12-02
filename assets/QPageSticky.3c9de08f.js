import { h as hSlot, c as createComponent } from "./QSpinner.0d412098.js";
import { i as inject, e as emptyRenderFn, c as computed, l as layoutKey, h, g as getCurrentInstance } from "./index.0b61810d.js";
const usePageStickyProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  expand: Boolean
};
function usePageSticky() {
  const { props, proxy: { $q } } = getCurrentInstance();
  const $layout = inject(layoutKey, emptyRenderFn);
  if ($layout === emptyRenderFn) {
    console.error("QPageSticky needs to be child of QLayout");
    return emptyRenderFn;
  }
  const attach = computed(() => {
    const pos = props.position;
    return {
      top: pos.indexOf("top") > -1,
      right: pos.indexOf("right") > -1,
      bottom: pos.indexOf("bottom") > -1,
      left: pos.indexOf("left") > -1,
      vertical: pos === "top" || pos === "bottom",
      horizontal: pos === "left" || pos === "right"
    };
  });
  const top = computed(() => $layout.header.offset);
  const right = computed(() => $layout.right.offset);
  const bottom = computed(() => $layout.footer.offset);
  const left = computed(() => $layout.left.offset);
  const style = computed(() => {
    let posX = 0, posY = 0;
    const side = attach.value;
    const dir = $q.lang.rtl === true ? -1 : 1;
    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`;
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`;
    }
    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`;
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`;
    }
    const css = { transform: `translate(${posX}, ${posY})` };
    if (props.offset) {
      css.margin = `${props.offset[1]}px ${props.offset[0]}px`;
    }
    if (side.vertical === true) {
      if (left.value !== 0) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${left.value}px`;
      }
      if (right.value !== 0) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${right.value}px`;
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css.top = `${top.value}px`;
      }
      if (bottom.value !== 0) {
        css.bottom = `${bottom.value}px`;
      }
    }
    return css;
  });
  const classes = computed(
    () => `q-page-sticky row flex-center fixed-${props.position} q-page-sticky--${props.expand === true ? "expand" : "shrink"}`
  );
  function getStickyContent(slots) {
    const content = hSlot(slots.default);
    return h(
      "div",
      {
        class: classes.value,
        style: style.value
      },
      props.expand === true ? content : [h("div", content)]
    );
  }
  return {
    $layout,
    getStickyContent
  };
}
var QPageSticky = createComponent({
  name: "QPageSticky",
  props: usePageStickyProps,
  setup(_, { slots }) {
    const { getStickyContent } = usePageSticky();
    return () => getStickyContent(slots);
  }
});
export { QPageSticky as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBhZ2VTdGlja3kuM2M5ZGUwOGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS1zdGlja3kvdXNlLXBhZ2Utc3RpY2t5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlLXN0aWNreS9RUGFnZVN0aWNreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU3RpY2t5UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdib3R0b20tcmlnaHQnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbXG4gICAgICAndG9wLXJpZ2h0JywgJ3RvcC1sZWZ0JyxcbiAgICAgICdib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnLFxuICAgICAgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICBdLmluY2x1ZGVzKHYpXG4gIH0sXG4gIG9mZnNldDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIHZhbGlkYXRvcjogdiA9PiB2Lmxlbmd0aCA9PT0gMlxuICB9LFxuICBleHBhbmQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlU3RpY2t5IG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gIH1cblxuICBjb25zdCBhdHRhY2ggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcG9zID0gcHJvcHMucG9zaXRpb25cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHBvcy5pbmRleE9mKCd0b3AnKSA+IC0xLFxuICAgICAgcmlnaHQ6IHBvcy5pbmRleE9mKCdyaWdodCcpID4gLTEsXG4gICAgICBib3R0b206IHBvcy5pbmRleE9mKCdib3R0b20nKSA+IC0xLFxuICAgICAgbGVmdDogcG9zLmluZGV4T2YoJ2xlZnQnKSA+IC0xLFxuICAgICAgdmVydGljYWw6IHBvcyA9PT0gJ3RvcCcgfHwgcG9zID09PSAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWw6IHBvcyA9PT0gJ2xlZnQnIHx8IHBvcyA9PT0gJ3JpZ2h0J1xuICAgIH1cbiAgfSlcblxuICBjb25zdCB0b3AgPSBjb21wdXRlZCgoKSA9PiAkbGF5b3V0LmhlYWRlci5vZmZzZXQpXG4gIGNvbnN0IHJpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gJGxheW91dC5yaWdodC5vZmZzZXQpXG4gIGNvbnN0IGJvdHRvbSA9IGNvbXB1dGVkKCgpID0+ICRsYXlvdXQuZm9vdGVyLm9mZnNldClcbiAgY29uc3QgbGVmdCA9IGNvbXB1dGVkKCgpID0+ICRsYXlvdXQubGVmdC5vZmZzZXQpXG5cbiAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgbGV0IHBvc1ggPSAwLCBwb3NZID0gMFxuXG4gICAgY29uc3Qgc2lkZSA9IGF0dGFjaC52YWx1ZVxuICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxXG5cbiAgICBpZiAoc2lkZS50b3AgPT09IHRydWUgJiYgdG9wLnZhbHVlICE9PSAwKSB7XG4gICAgICBwb3NZID0gYCR7IHRvcC52YWx1ZSB9cHhgXG4gICAgfVxuICAgIGVsc2UgaWYgKHNpZGUuYm90dG9tID09PSB0cnVlICYmIGJvdHRvbS52YWx1ZSAhPT0gMCkge1xuICAgICAgcG9zWSA9IGAkeyAtYm90dG9tLnZhbHVlIH1weGBcbiAgICB9XG5cbiAgICBpZiAoc2lkZS5sZWZ0ID09PSB0cnVlICYmIGxlZnQudmFsdWUgIT09IDApIHtcbiAgICAgIHBvc1ggPSBgJHsgZGlyICogbGVmdC52YWx1ZSB9cHhgXG4gICAgfVxuICAgIGVsc2UgaWYgKHNpZGUucmlnaHQgPT09IHRydWUgJiYgcmlnaHQudmFsdWUgIT09IDApIHtcbiAgICAgIHBvc1ggPSBgJHsgLWRpciAqIHJpZ2h0LnZhbHVlIH1weGBcbiAgICB9XG5cbiAgICBjb25zdCBjc3MgPSB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgkeyBwb3NYIH0sICR7IHBvc1kgfSlgIH1cblxuICAgIGlmIChwcm9wcy5vZmZzZXQpIHtcbiAgICAgIGNzcy5tYXJnaW4gPSBgJHsgcHJvcHMub2Zmc2V0WyAxIF0gfXB4ICR7IHByb3BzLm9mZnNldFsgMCBdIH1weGBcbiAgICB9XG5cbiAgICBpZiAoc2lkZS52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGxlZnQudmFsdWUgIT09IDApIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyBsZWZ0LnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodC52YWx1ZSAhPT0gMCkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7IHJpZ2h0LnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2lkZS5ob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBpZiAodG9wLnZhbHVlICE9PSAwKSB7XG4gICAgICAgIGNzcy50b3AgPSBgJHsgdG9wLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b20udmFsdWUgIT09IDApIHtcbiAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyBib3R0b20udmFsdWUgfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1wYWdlLXN0aWNreSByb3cgZmxleC1jZW50ZXIgZml4ZWQtJHsgcHJvcHMucG9zaXRpb24gfWBcbiAgICArIGAgcS1wYWdlLXN0aWNreS0tJHsgcHJvcHMuZXhwYW5kID09PSB0cnVlID8gJ2V4cGFuZCcgOiAnc2hyaW5rJyB9YFxuICApXG5cbiAgZnVuY3Rpb24gZ2V0U3RpY2t5Q29udGVudCAoc2xvdHMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcblxuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZVxuICAgIH0sXG4gICAgcHJvcHMuZXhwYW5kID09PSB0cnVlXG4gICAgICA/IGNvbnRlbnRcbiAgICAgIDogWyBoKCdkaXYnLCBjb250ZW50KSBdXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkbGF5b3V0LFxuICAgIGdldFN0aWNreUNvbnRlbnRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlUGFnZVN0aWNreSwgeyB1c2VQYWdlU3RpY2t5UHJvcHMgfSBmcm9tICcuL3VzZS1wYWdlLXN0aWNreSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlU3RpY2t5JyxcblxuICBwcm9wczogdXNlUGFnZVN0aWNreVByb3BzLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IGdldFN0aWNreUNvbnRlbnQgfSA9IHVzZVBhZ2VTdGlja3koKVxuICAgIHJldHVybiAoKSA9PiBnZXRTdGlja3lDb250ZW50KHNsb3RzKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS08sTUFBTSxxQkFBcUI7QUFBQSxFQUNoQyxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxXQUFXLE9BQUs7QUFBQSxNQUNkO0FBQUEsTUFBYTtBQUFBLE1BQ2I7QUFBQSxNQUFnQjtBQUFBLE1BQ2hCO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsSUFDaEMsRUFBTSxTQUFTLENBQUM7QUFBQSxFQUNiO0FBQUEsRUFDRCxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixXQUFXLE9BQUssRUFBRSxXQUFXO0FBQUEsRUFDOUI7QUFBQSxFQUNELFFBQVE7QUFDVjtBQUVlLFNBQUEsZ0JBQVk7QUFDekIsUUFBTSxFQUFFLE9BQU8sT0FBTyxFQUFFLEdBQUksRUFBQSxJQUFLLG1CQUFvQjtBQUVyRCxRQUFNLFVBQVUsT0FBTyxXQUFXLGFBQWE7QUFDL0MsTUFBSSxZQUFZLGVBQWU7QUFDN0IsWUFBUSxNQUFNLDBDQUEwQztBQUN4RCxXQUFPO0FBQUEsRUFDUjtBQUVELFFBQU0sU0FBUyxTQUFTLE1BQU07QUFDNUIsVUFBTSxNQUFNLE1BQU07QUFFbEIsV0FBTztBQUFBLE1BQ0wsS0FBSyxJQUFJLFFBQVEsS0FBSyxJQUFJO0FBQUEsTUFDMUIsT0FBTyxJQUFJLFFBQVEsT0FBTyxJQUFJO0FBQUEsTUFDOUIsUUFBUSxJQUFJLFFBQVEsUUFBUSxJQUFJO0FBQUEsTUFDaEMsTUFBTSxJQUFJLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDNUIsVUFBVSxRQUFRLFNBQVMsUUFBUTtBQUFBLE1BQ25DLFlBQVksUUFBUSxVQUFVLFFBQVE7QUFBQSxJQUN2QztBQUFBLEVBQ0wsQ0FBRztBQUVE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
