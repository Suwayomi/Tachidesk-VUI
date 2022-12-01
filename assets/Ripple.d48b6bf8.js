import { f as createDirective } from "./QSpinner.ce362078.js";
import { c as css } from "./dom.9c14e7bf.js";
import { M as isKeyCode, U as addEvt, V as cleanEvt, O as stop, W as position } from "./index.ba4ecd3b.js";
function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width * width + height * height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter}px`,
    width: `${diameter}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer);
  };
  ctx.abort.push(abort);
  let timer = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value, arg }) {
  const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
var Ripple = createDirective(
  {
    name: "ripple",
    beforeMount(el, binding) {
      const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
      if (cfg.ripple === false) {
        return;
      }
      const ctx = {
        cfg,
        enabled: binding.value !== false,
        modifiers: {},
        abort: [],
        start(evt) {
          if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
            showRipple(evt, el, ctx, evt.qKeyEvent === true);
          }
        },
        keystart: throttle((evt) => {
          if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
            showRipple(evt, el, ctx, true);
          }
        }, 300)
      };
      updateModifiers(ctx, binding);
      el.__qripple = ctx;
      addEvt(ctx, "main", [
        [el, "pointerdown", "start", "passive"],
        [el, "click", "start", "passive"],
        [el, "keydown", "keystart", "passive"],
        [el, "keyup", "keystart", "passive"]
      ]);
    },
    updated(el, binding) {
      if (binding.oldValue !== binding.value) {
        const ctx = el.__qripple;
        if (ctx !== void 0) {
          ctx.enabled = binding.value !== false;
          if (ctx.enabled === true && Object(binding.value) === binding.value) {
            updateModifiers(ctx, binding);
          }
        }
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qripple;
      if (ctx !== void 0) {
        ctx.abort.forEach((fn) => {
          fn();
        });
        cleanEvt(ctx, "main");
        delete el._qripple;
      }
    }
  }
);
export { Ripple as R };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlwcGxlLmQ0OGI2YmY4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvUmlwcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmbiwgbGltaXQgPSAyNTApIHtcbiAgbGV0IHdhaXQgPSBmYWxzZSwgcmVzdWx0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgaWYgKHdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB3YWl0ID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHdhaXQgPSBmYWxzZSB9LCBsaW1pdClcbiAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnLi4vdXRpbHMvZG9tLmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24sIHN0b3AsIGFkZEV2dCwgY2xlYW5FdnQgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3V0aWxzL3Rocm90dGxlLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gc2hvd1JpcHBsZSAoZXZ0LCBlbCwgY3R4LCBmb3JjZUNlbnRlcikge1xuICBjdHgubW9kaWZpZXJzLnN0b3AgPT09IHRydWUgJiYgc3RvcChldnQpXG5cbiAgY29uc3QgY29sb3IgPSBjdHgubW9kaWZpZXJzLmNvbG9yXG4gIGxldCBjZW50ZXIgPSBjdHgubW9kaWZpZXJzLmNlbnRlclxuICBjZW50ZXIgPSBjZW50ZXIgPT09IHRydWUgfHwgZm9yY2VDZW50ZXIgPT09IHRydWVcblxuICBjb25zdFxuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgaW5uZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIGRpYW1ldGVyID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpLFxuICAgIHJhZGl1cyA9IGRpYW1ldGVyIC8gMixcbiAgICBjZW50ZXJYID0gYCR7ICh3aWR0aCAtIGRpYW1ldGVyKSAvIDIgfXB4YCxcbiAgICB4ID0gY2VudGVyID8gY2VudGVyWCA6IGAkeyBwb3MubGVmdCAtIGxlZnQgLSByYWRpdXMgfXB4YCxcbiAgICBjZW50ZXJZID0gYCR7IChoZWlnaHQgLSBkaWFtZXRlcikgLyAyIH1weGAsXG4gICAgeSA9IGNlbnRlciA/IGNlbnRlclkgOiBgJHsgcG9zLnRvcCAtIHRvcCAtIHJhZGl1cyB9cHhgXG5cbiAgaW5uZXJOb2RlLmNsYXNzTmFtZSA9ICdxLXJpcHBsZV9faW5uZXInXG4gIGNzcyhpbm5lck5vZGUsIHtcbiAgICBoZWlnaHQ6IGAkeyBkaWFtZXRlciB9cHhgLFxuICAgIHdpZHRoOiBgJHsgZGlhbWV0ZXIgfXB4YCxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgkeyB4IH0sJHsgeSB9LDApIHNjYWxlM2QoLjIsLjIsMSlgLFxuICAgIG9wYWNpdHk6IDBcbiAgfSlcblxuICBub2RlLmNsYXNzTmFtZSA9IGBxLXJpcHBsZSR7IGNvbG9yID8gJyB0ZXh0LScgKyBjb2xvciA6ICcnIH1gXG4gIG5vZGUuc2V0QXR0cmlidXRlKCdkaXInLCAnbHRyJylcbiAgbm9kZS5hcHBlbmRDaGlsZChpbm5lck5vZGUpXG4gIGVsLmFwcGVuZENoaWxkKG5vZGUpXG5cbiAgY29uc3QgYWJvcnQgPSAoKSA9PiB7XG4gICAgbm9kZS5yZW1vdmUoKVxuICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgfVxuICBjdHguYWJvcnQucHVzaChhYm9ydClcblxuICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpbm5lck5vZGUuY2xhc3NMaXN0LmFkZCgncS1yaXBwbGVfX2lubmVyLS1lbnRlcicpXG4gICAgaW5uZXJOb2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkeyBjZW50ZXJYIH0sJHsgY2VudGVyWSB9LDApIHNjYWxlM2QoMSwxLDEpYFxuICAgIGlubmVyTm9kZS5zdHlsZS5vcGFjaXR5ID0gMC4yXG5cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5uZXJOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3EtcmlwcGxlX19pbm5lci0tZW50ZXInKVxuICAgICAgaW5uZXJOb2RlLmNsYXNzTGlzdC5hZGQoJ3EtcmlwcGxlX19pbm5lci0tbGVhdmUnKVxuICAgICAgaW5uZXJOb2RlLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlKClcbiAgICAgICAgY3R4LmFib3J0LnNwbGljZShjdHguYWJvcnQuaW5kZXhPZihhYm9ydCksIDEpXG4gICAgICB9LCAyNzUpXG4gICAgfSwgMjUwKVxuICB9LCA1MClcbn1cblxuZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJzIChjdHgsIHsgbW9kaWZpZXJzLCB2YWx1ZSwgYXJnIH0pIHtcbiAgY29uc3QgY2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgY3R4LmNmZy5yaXBwbGUsIG1vZGlmaWVycywgdmFsdWUpXG4gIGN0eC5tb2RpZmllcnMgPSB7XG4gICAgZWFybHk6IGNmZy5lYXJseSA9PT0gdHJ1ZSxcbiAgICBzdG9wOiBjZmcuc3RvcCA9PT0gdHJ1ZSxcbiAgICBjZW50ZXI6IGNmZy5jZW50ZXIgPT09IHRydWUsXG4gICAgY29sb3I6IGNmZy5jb2xvciB8fCBhcmcsXG4gICAga2V5Q29kZXM6IFtdLmNvbmNhdChjZmcua2V5Q29kZXMgfHwgMTMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3JpcHBsZScsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAncmlwcGxlJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIGNvbnN0IGNmZyA9IGJpbmRpbmcuaW5zdGFuY2UuJC5hcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRxLmNvbmZpZyB8fCB7fVxuXG4gICAgICAgIGlmIChjZmcucmlwcGxlID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGNmZyxcbiAgICAgICAgICBlbmFibGVkOiBiaW5kaW5nLnZhbHVlICE9PSBmYWxzZSxcbiAgICAgICAgICBtb2RpZmllcnM6IHt9LFxuICAgICAgICAgIGFib3J0OiBbXSxcblxuICAgICAgICAgIHN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmVuYWJsZWQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgZXZ0LnFTa2lwUmlwcGxlICE9PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC50eXBlID09PSAoY3R4Lm1vZGlmaWVycy5lYXJseSA9PT0gdHJ1ZSA/ICdwb2ludGVyZG93bicgOiAnY2xpY2snKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNob3dSaXBwbGUoZXZ0LCBlbCwgY3R4LCBldnQucUtleUV2ZW50ID09PSB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBrZXlzdGFydDogdGhyb3R0bGUoZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmVuYWJsZWQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgZXZ0LnFTa2lwUmlwcGxlICE9PSB0cnVlXG4gICAgICAgICAgICAgICYmIGlzS2V5Q29kZShldnQsIGN0eC5tb2RpZmllcnMua2V5Q29kZXMpID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC50eXBlID09PSBga2V5JHsgY3R4Lm1vZGlmaWVycy5lYXJseSA9PT0gdHJ1ZSA/ICdkb3duJyA6ICd1cCcgfWBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzaG93UmlwcGxlKGV2dCwgZWwsIGN0eCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAzMDApXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVNb2RpZmllcnMoY3R4LCBiaW5kaW5nKVxuXG4gICAgICAgIGVsLl9fcXJpcHBsZSA9IGN0eFxuXG4gICAgICAgIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICdwb2ludGVyZG93bicsICdzdGFydCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgZWwsICdjbGljaycsICdzdGFydCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgZWwsICdrZXlkb3duJywgJ2tleXN0YXJ0JywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBlbCwgJ2tleXVwJywgJ2tleXN0YXJ0JywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIGlmIChiaW5kaW5nLm9sZFZhbHVlICE9PSBiaW5kaW5nLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xcmlwcGxlXG4gICAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjdHguZW5hYmxlZCA9IGJpbmRpbmcudmFsdWUgIT09IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChjdHguZW5hYmxlZCA9PT0gdHJ1ZSAmJiBPYmplY3QoYmluZGluZy52YWx1ZSkgPT09IGJpbmRpbmcudmFsdWUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlTW9kaWZpZXJzKGN0eCwgYmluZGluZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXJpcHBsZVxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjdHguYWJvcnQuZm9yRWFjaChmbiA9PiB7IGZuKCkgfSlcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBkZWxldGUgZWwuX3FyaXBwbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBZSxTQUFBLFNBQVUsSUFBSSxRQUFRLEtBQUs7QUFDeEMsTUFBSSxPQUFPLE9BQU87QUFFbEIsU0FBTyxXQUF5QjtBQUM5QixRQUFJLFNBQVMsT0FBTztBQUNsQixhQUFPO0FBQ1AsaUJBQVcsTUFBTTtBQUFFLGVBQU87QUFBQSxNQUFLLEdBQUksS0FBSztBQUN4QyxlQUFTLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUNsQztBQUVELFdBQU87QUFBQSxFQUNSO0FBQ0g7QUNMQSxTQUFTLFdBQVksS0FBSyxJQUFJLEtBQUssYUFBYTtBQUM5QyxNQUFJLFVBQVUsU0FBUyxRQUFRLEtBQUssR0FBRztBQUV2QyxRQUFNLFFBQVEsSUFBSSxVQUFVO0FBQzVCLE1BQUksU0FBUyxJQUFJLFVBQVU7QUFDM0IsV0FBUyxXQUFXLFFBQVEsZ0JBQWdCO0FBRTVDLFFBQ0UsT0FBTyxTQUFTLGNBQWMsTUFBTSxHQUNwQyxZQUFZLFNBQVMsY0FBYyxNQUFNLEdBQ3pDLE1BQU0sU0FBUyxHQUFHLEdBQ2xCLEVBQUUsTUFBTSxLQUFLLE9BQU8sT0FBUSxJQUFHLEdBQUcsc0JBQXVCLEdBQ3pELFdBQVcsS0FBSyxLQUFLLFFBQVEsUUFBUSxTQUFTLE1BQU0sR0FDcEQsU0FBUyxXQUFXLEdBQ3BCLFVBQVUsSUFBSyxRQUFRLFlBQVksT0FDbkMsSUFBSSxTQUFTLFVBQVUsR0FBSSxJQUFJLE9BQU8sT0FBTyxZQUM3QyxVQUFVLElBQUssU0FBUyxZQUFZLE9BQ3BDLElBQUksU0FBUyxVQUFVLEdBQUksSUFBSSxNQUFNLE1BQU07QUFFN0MsWUFBVSxZQUFZO0FBQ3RCLE1BQUksV0FBVztBQUFBLElBQ2IsUUFBUSxHQUFJO0FBQUEsSUFDWixPQUFPLEdBQUk7QUFBQSxJQUNYLFdBQVcsZUFBZ0IsS0FBTztBQUFBLElBQ2xDLFNBQVM7QUFBQSxFQUNiLENBQUc7QUFFRCxPQUFLLFlBQVksV0FBWSxRQUFRLFdBQVcsUUFBUTtBQUN4RCxPQUFLLGFBQWEsT0FBTyxLQUFLO0FBQzlCLE9BQUssWUFBWSxTQUFTO0FBQzFCLEtBQUcsWUFBWSxJQUFJO0FBRW5CLFFBQU0sUUFBUSxNQUFNO0FBQ2xCLFNBQUssT0FBUTtBQUNiLGlCQUFhLEtBQUs7QUFBQSxFQUNuQjtBQUNELE1BQUksTUFBTSxLQUFLLEtBQUs7QUFFcEIsTUFBSSxRQUFRLFdBQVcsTUFBTTtBQUMzQixjQUFVLFVBQVUsSUFBSSx3QkFBd0I7QUFDaEQsY0FBVSxNQUFNLFlBQVksZUFBZ0IsV0FBYTtBQUN6RCxjQUFVLE1BQU0sVUFBVTtBQUUxQixZQUFRLFdBQVcsTUFBTTtBQUN2QixnQkFBVSxVQUFVLE9BQU8sd0JBQXdCO0FBQ25ELGdCQUFVLFVBQVUsSUFBSSx3QkFBd0I7QUFDaEQsZ0JBQVUsTUFBTSxVQUFVO0FBRTFCLGNBQVEsV0FBVyxNQUFNO0FBQ3ZCLGFBQUssT0FBUTtBQUNiLFlBQUksTUFBTSxPQUFPLElBQUksTUFBTSxRQUFRLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFDN0MsR0FBRSxHQUFHO0FBQUEsSUFDUCxHQUFFLEdBQUc7QUFBQSxFQUNQLEdBQUUsRUFBRTtBQUNQO0FBRUEsU0FBUyxnQkFBaUIsS0FBSyxFQUFFLFdBQVcsT0FBTyxJQUFHLEdBQUk7QUFDeEQsUUFBTSxNQUFNLE9BQU8sT0FBTyxDQUFFLEdBQUUsSUFBSSxJQUFJLFFBQVEsV0FBVyxLQUFLO0FBQzlELE1BQUksWUFBWTtBQUFBLElBQ2QsT0FBTyxJQUFJLFVBQVU7QUFBQSxJQUNyQixNQUFNLElBQUksU0FBUztBQUFBLElBQ25CLFFBQVEsSUFBSSxXQUFXO0FBQUEsSUFDdkIsT0FBTyxJQUFJLFNBQVM7QUFBQSxJQUNwQixVQUFVLENBQUEsRUFBRyxPQUFPLElBQUksWUFBWSxFQUFFO0FBQUEsRUFDdkM7QUFDSDtBQUVBLElBQUEsU0FBZTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUVOLFlBQWEsSUFBSSxTQUFTO0FBQ3hCLFlBQU0sTUFBTSxRQUFRLFNBQVMsRUFBRSxXQUFXLE9BQU8saUJBQWlCLEdBQUcsVUFBVSxDQUFFO0FBRWpGLFVBQUksSUFBSSxXQUFXLE9BQU87QUFDeEI7QUFBQSxNQUNEO0FBRUQsWUFBTSxNQUFNO0FBQUEsUUFDVjtBQUFBLFFBQ0EsU0FBUyxRQUFRLFVBQVU7QUFBQSxRQUMzQixXQUFXLENBQUU7QUFBQSxRQUNiLE9BQU8sQ0FBRTtBQUFBLFFBRVQsTUFBTyxLQUFLO0FBQ1YsY0FDRSxJQUFJLFlBQVksUUFDYixJQUFJLGdCQUFnQixRQUNwQixJQUFJLFVBQVUsSUFBSSxVQUFVLFVBQVUsT0FBTyxnQkFBZ0IsVUFDaEU7QUFDQSx1QkFBVyxLQUFLLElBQUksS0FBSyxJQUFJLGNBQWMsSUFBSTtBQUFBLFVBQ2hEO0FBQUEsUUFDRjtBQUFBLFFBRUQsVUFBVSxTQUFTLFNBQU87QUFDeEIsY0FDRSxJQUFJLFlBQVksUUFDYixJQUFJLGdCQUFnQixRQUNwQixVQUFVLEtBQUssSUFBSSxVQUFVLFFBQVEsTUFBTSxRQUMzQyxJQUFJLFNBQVMsTUFBTyxJQUFJLFVBQVUsVUFBVSxPQUFPLFNBQVMsUUFDL0Q7QUFDQSx1QkFBVyxLQUFLLElBQUksS0FBSyxJQUFJO0FBQUEsVUFDOUI7QUFBQSxRQUNGLEdBQUUsR0FBRztBQUFBLE1BQ1A7QUFFRCxzQkFBZ0IsS0FBSyxPQUFPO0FBRTVCLFNBQUcsWUFBWTtBQUVmLGFBQU8sS0FBSyxRQUFRO0FBQUEsUUFDbEIsQ0FBRSxJQUFJLGVBQWUsU0FBUyxTQUFXO0FBQUEsUUFDekMsQ0FBRSxJQUFJLFNBQVMsU0FBUyxTQUFXO0FBQUEsUUFDbkMsQ0FBRSxJQUFJLFdBQVcsWUFBWSxTQUFXO0FBQUEsUUFDeEMsQ0FBRSxJQUFJLFNBQVMsWUFBWSxTQUFXO0FBQUEsTUFDaEQsQ0FBUztBQUFBLElBQ0Y7QUFBQSxJQUVELFFBQVMsSUFBSSxTQUFTO0FBQ3BCLFVBQUksUUFBUSxhQUFhLFFBQVEsT0FBTztBQUN0QyxjQUFNLE1BQU0sR0FBRztBQUNmLFlBQUksUUFBUSxRQUFRO0FBQ2xCLGNBQUksVUFBVSxRQUFRLFVBQVU7QUFFaEMsY0FBSSxJQUFJLFlBQVksUUFBUSxPQUFPLFFBQVEsS0FBSyxNQUFNLFFBQVEsT0FBTztBQUNuRSw0QkFBZ0IsS0FBSyxPQUFPO0FBQUEsVUFDN0I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVELGNBQWUsSUFBSTtBQUNqQixZQUFNLE1BQU0sR0FBRztBQUNmLFVBQUksUUFBUSxRQUFRO0FBQ2xCLFlBQUksTUFBTSxRQUFRLFFBQU07QUFBRSxhQUFJO0FBQUEsUUFBQSxDQUFFO0FBQ2hDLGlCQUFTLEtBQUssTUFBTTtBQUNwQixlQUFPLEdBQUc7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDTDs7In0=
