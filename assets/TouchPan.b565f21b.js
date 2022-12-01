import { Z as client, X as noop, a0 as leftClick, U as addEvt, a1 as preventDraggable, N as prevent, O as stop, W as position, V as cleanEvt, L as stopAndPrevent } from "./index.c15e704f.js";
import { f as createDirective } from "./QSpinner.dc7e097a.js";
import { c as clearSelection } from "./selection.a711d5f1.js";
const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true
};
const directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod) {
  const dir = {};
  for (const direction of directionList) {
    if (mod[direction] === true) {
      dir[direction] = true;
    }
  }
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  } else if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  } else if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && evt.target.nodeName.toUpperCase() !== "INPUT" && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
function getChanges(evt, ctx, isFinal) {
  const pos = position(evt);
  let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
  const direction = ctx.direction;
  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? "left" : "right";
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? "up" : "down";
  } else if (direction.up === true && distY < 0) {
    dir = "up";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = "down";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = "left";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = "right";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  }
  let synthetic = false;
  if (dir === void 0 && isFinal === false) {
    if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) {
      return {};
    }
    dir = ctx.event.lastDir;
    synthetic = true;
    if (dir === "left" || dir === "right") {
      pos.left -= distX;
      absX = 0;
      distX = 0;
    } else {
      pos.top -= distY;
      absY = 0;
      distY = 0;
    }
  }
  return {
    synthetic,
    payload: {
      evt,
      touch: ctx.event.mouse !== true,
      mouse: ctx.event.mouse === true,
      position: pos,
      direction: dir,
      isFirst: ctx.event.isFirst,
      isFinal: isFinal === true,
      duration: Date.now() - ctx.event.time,
      distance: {
        x: absX,
        y: absY
      },
      offset: {
        x: distX,
        y: distY
      },
      delta: {
        x: pos.left - ctx.event.lastX,
        y: pos.top - ctx.event.lastY
      }
    }
  };
}
let uid = 0;
var TouchPan = createDirective(
  {
    name: "touch-pan",
    beforeMount(el, { value: value2, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      function handleEvent(evt, mouseEvent) {
        if (modifiers.mouse === true && mouseEvent === true) {
          stopAndPrevent(evt);
        } else {
          modifiers.stop === true && stop(evt);
          modifiers.prevent === true && prevent(evt);
        }
      }
      const ctx = {
        uid: "qvtp_" + uid++,
        handler: value2,
        modifiers,
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "notPassiveCapture"],
              [document, "mouseup", "end", "passiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "passiveCapture"],
              [target, "touchend", "end", "passiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          ctx.lastEvt = evt;
          if (mouseEvent === true || modifiers.stop === true) {
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
              const clone = evt.type.indexOf("mouse") > -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
              evt.defaultPrevented === true && prevent(clone);
              evt.cancelBubble === true && stop(clone);
              Object.assign(clone, {
                qKeyEvent: evt.qKeyEvent,
                qClickOutside: evt.qClickOutside,
                qAnchorHandled: evt.qAnchorHandled,
                qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
              });
              ctx.initialEvent = {
                target: evt.target,
                event: clone
              };
            }
            stop(evt);
          }
          const { left, top } = position(evt);
          ctx.event = {
            x: left,
            y: top,
            time: Date.now(),
            mouse: mouseEvent === true,
            detected: false,
            isFirst: true,
            isFinal: false,
            lastX: left,
            lastY: top
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
          if (distX === 0 && distY === 0) {
            return;
          }
          ctx.lastEvt = evt;
          const isMouseEvt = ctx.event.mouse === true;
          const start = () => {
            handleEvent(evt, isMouseEvt);
            let cursor;
            if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
              cursor = document.documentElement.style.cursor || "";
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (cursor !== void 0) {
                document.documentElement.style.cursor = cursor;
              }
              document.body.classList.remove("non-selectable");
              if (isMouseEvt === true) {
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelayedFn !== void 0) {
                  setTimeout(() => {
                    remove();
                    withDelayedFn();
                  }, 50);
                } else {
                  remove();
                }
              } else if (withDelayedFn !== void 0) {
                withDelayedFn();
              }
            };
          };
          if (ctx.event.detected === true) {
            ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
            const { payload, synthetic } = getChanges(evt, ctx, false);
            if (payload !== void 0) {
              if (ctx.handler(payload) === false) {
                ctx.end(evt);
              } else {
                if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) {
                  start();
                }
                ctx.event.lastX = payload.position.left;
                ctx.event.lastY = payload.position.top;
                ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
                ctx.event.isFirst = false;
              }
            }
            return;
          }
          if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
            start();
            ctx.event.detected = true;
            ctx.move(evt);
            return;
          }
          const absX = Math.abs(distX), absY = Math.abs(distY);
          if (absX !== absY) {
            if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
              ctx.event.detected = true;
              ctx.move(evt);
            } else {
              ctx.end(evt, true);
            }
          }
        },
        end(evt, abort) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          if (abort === true) {
            ctx.styleCleanup !== void 0 && ctx.styleCleanup();
            if (ctx.event.detected !== true && ctx.initialEvent !== void 0) {
              ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
            }
          } else if (ctx.event.detected === true) {
            ctx.event.isFirst === true && ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
            const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
            const fn = () => {
              ctx.handler(payload);
            };
            if (ctx.styleCleanup !== void 0) {
              ctx.styleCleanup(fn);
            } else {
              fn();
            }
          }
          ctx.event = void 0;
          ctx.initialEvent = void 0;
          ctx.lastEvt = void 0;
        }
      };
      el.__qtouchpan = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        ctx.event !== void 0 && ctx.end();
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchpan;
      }
    }
  }
);
export { TouchPan as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG91Y2hQYW4uYjU2NWYyMWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvdG91Y2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGlmaWVyc0FsbCA9IHtcbiAgbGVmdDogdHJ1ZSxcbiAgcmlnaHQ6IHRydWUsXG4gIHVwOiB0cnVlLFxuICBkb3duOiB0cnVlLFxuICBob3Jpem9udGFsOiB0cnVlLFxuICB2ZXJ0aWNhbDogdHJ1ZVxufVxuXG5jb25zdCBkaXJlY3Rpb25MaXN0ID0gT2JqZWN0LmtleXMobW9kaWZpZXJzQWxsKVxuXG5tb2RpZmllcnNBbGwuYWxsID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zIChtb2QpIHtcbiAgY29uc3QgZGlyID0ge31cblxuICBmb3IgKGNvbnN0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25MaXN0KSB7XG4gICAgaWYgKG1vZFsgZGlyZWN0aW9uIF0gPT09IHRydWUpIHtcbiAgICAgIGRpclsgZGlyZWN0aW9uIF0gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGRpcikubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyc0FsbFxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgZGlyLmxlZnQgPSBkaXIucmlnaHQgPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLmxlZnQgPT09IHRydWUgJiYgZGlyLnJpZ2h0ID09PSB0cnVlKSB7XG4gICAgZGlyLmhvcml6b250YWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLnVwID0gZGlyLmRvd24gPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLnVwID09PSB0cnVlICYmIGRpci5kb3duID09PSB0cnVlKSB7XG4gICAgZGlyLnZlcnRpY2FsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5hbGwgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gZGlyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTdGFydCAoZXZ0LCBjdHgpIHtcbiAgcmV0dXJuIGN0eC5ldmVudCA9PT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldCAhPT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldC5kcmFnZ2FibGUgIT09IHRydWVcbiAgICAmJiB0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbidcbiAgICAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdJTlBVVCdcbiAgICAmJiAoZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwIHx8IGV2dC5xQ2xvbmVkQnkuaW5kZXhPZihjdHgudWlkKSA9PT0gLTEpXG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldE1vZGlmaWVyRGlyZWN0aW9ucywgc2hvdWxkU3RhcnQgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3RvdWNoLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgcHJldmVudCwgc3RvcCwgc3RvcEFuZFByZXZlbnQsIHByZXZlbnREcmFnZ2FibGUsIG5vb3AgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5mdW5jdGlvbiBnZXRDaGFuZ2VzIChldnQsIGN0eCwgaXNGaW5hbCkge1xuICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG4gIGxldFxuICAgIGRpcixcbiAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnksXG4gICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgY29uc3QgZGlyZWN0aW9uID0gY3R4LmRpcmVjdGlvblxuXG4gIGlmIChkaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBkaXJlY3Rpb24udmVydGljYWwgIT09IHRydWUpIHtcbiAgICBkaXIgPSBkaXN0WCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmhvcml6b250YWwgIT09IHRydWUgJiYgZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyID0gZGlzdFkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICBkaXIgPSAndXAnXG4gICAgaWYgKGFic1ggPiBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgICAgIGRpciA9ICdsZWZ0J1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgICAgICBkaXIgPSAncmlnaHQnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgIGRpciA9ICdkb3duJ1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgICAgICBkaXIgPSAnbGVmdCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICAgICAgZGlyID0gJ3JpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICBkaXIgPSAnbGVmdCdcbiAgICBpZiAoYWJzWCA8IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgICAgIGRpciA9ICd1cCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgICAgICBkaXIgPSAnZG93bidcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgIGRpciA9ICdyaWdodCdcbiAgICBpZiAoYWJzWCA8IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgICAgIGRpciA9ICd1cCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgICAgICBkaXIgPSAnZG93bidcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgc3ludGhldGljID0gZmFsc2VcblxuICBpZiAoZGlyID09PSB2b2lkIDAgJiYgaXNGaW5hbCA9PT0gZmFsc2UpIHtcbiAgICBpZiAoY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUgfHwgY3R4LmV2ZW50Lmxhc3REaXIgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgZGlyID0gY3R4LmV2ZW50Lmxhc3REaXJcbiAgICBzeW50aGV0aWMgPSB0cnVlXG5cbiAgICBpZiAoZGlyID09PSAnbGVmdCcgfHwgZGlyID09PSAncmlnaHQnKSB7XG4gICAgICBwb3MubGVmdCAtPSBkaXN0WFxuICAgICAgYWJzWCA9IDBcbiAgICAgIGRpc3RYID0gMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBvcy50b3AgLT0gZGlzdFlcbiAgICAgIGFic1kgPSAwXG4gICAgICBkaXN0WSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN5bnRoZXRpYyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBldnQsXG4gICAgICB0b3VjaDogY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlLFxuICAgICAgbW91c2U6IGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgIGlzRmlyc3Q6IGN0eC5ldmVudC5pc0ZpcnN0LFxuICAgICAgaXNGaW5hbDogaXNGaW5hbCA9PT0gdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBEYXRlLm5vdygpIC0gY3R4LmV2ZW50LnRpbWUsXG4gICAgICBkaXN0YW5jZToge1xuICAgICAgICB4OiBhYnNYLFxuICAgICAgICB5OiBhYnNZXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHg6IGRpc3RYLFxuICAgICAgICB5OiBkaXN0WVxuICAgICAgfSxcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHg6IHBvcy5sZWZ0IC0gY3R4LmV2ZW50Lmxhc3RYLFxuICAgICAgICB5OiBwb3MudG9wIC0gY3R4LmV2ZW50Lmxhc3RZXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCB1aWQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1wYW4nLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3RvdWNoLXBhbicsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgIT09IHRydWUgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUgJiYgbW91c2VFdmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5zdG9wID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuICAgICAgICAgICAgbW9kaWZpZXJzLnByZXZlbnQgPT09IHRydWUgJiYgcHJldmVudChldnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIHVpZDogJ3F2dHBfJyArICh1aWQrKyksXG4gICAgICAgICAgaGFuZGxlcjogdmFsdWUsXG4gICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgIGRpcmVjdGlvbjogZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKG1vZGlmaWVycyksXG5cbiAgICAgICAgICBub29wLFxuXG4gICAgICAgICAgbW91c2VTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpICYmIGxlZnRDbGljayhldnQpKSB7XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2V1cCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB0b3VjaFN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuXG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCB0cnVlKVxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSBldnRcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBzbyBwb3NzaWJsZSB1cHBlciB2LXRvdWNoLXBhbiBkb24ndCBjYXRjaCB0aGlzIGFzIHdlbGw7XG4gICAgICAgICAgICAqIElmIHdlJ3JlIG5vdCB0aGUgdGFyZ2V0IChiYXNlZCBvbiBtb2RpZmllcnMpLCB3ZSdsbCByZS1lbWl0IHRoZSBldmVudCBsYXRlclxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChtb3VzZUV2ZW50ID09PSB0cnVlIHx8IG1vZGlmaWVycy5zdG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICogYXJlIHdlIGRpcmVjdGx5IHN3aXRjaGluZyB0byBkZXRlY3RlZCBzdGF0ZT9cbiAgICAgICAgICAgICAgKiBjbG9uZSBldmVudCBvbmx5IG90aGVyd2lzZVxuICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgIT09IHRydWVcbiAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgICAgICAgICYmIChtb3VzZUV2ZW50ICE9PSB0cnVlIHx8IChjdHgubW9kaWZpZXJzLm1vdXNlQWxsRGlyICE9PSB0cnVlICYmIGN0eC5tb2RpZmllcnMubW91c2VhbGxkaXIgIT09IHRydWUpKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZSA9IGV2dC50eXBlLmluZGV4T2YoJ21vdXNlJykgPiAtMVxuICAgICAgICAgICAgICAgICAgPyBuZXcgTW91c2VFdmVudChldnQudHlwZSwgZXZ0KVxuICAgICAgICAgICAgICAgICAgOiBuZXcgVG91Y2hFdmVudChldnQudHlwZSwgZXZ0KVxuXG4gICAgICAgICAgICAgICAgZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUgJiYgcHJldmVudChjbG9uZSlcbiAgICAgICAgICAgICAgICBldnQuY2FuY2VsQnViYmxlID09PSB0cnVlICYmIHN0b3AoY2xvbmUpXG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNsb25lLCB7XG4gICAgICAgICAgICAgICAgICBxS2V5RXZlbnQ6IGV2dC5xS2V5RXZlbnQsXG4gICAgICAgICAgICAgICAgICBxQ2xpY2tPdXRzaWRlOiBldnQucUNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgICAgIHFBbmNob3JIYW5kbGVkOiBldnQucUFuY2hvckhhbmRsZWQsXG4gICAgICAgICAgICAgICAgICBxQ2xvbmVkQnk6IGV2dC5xQ2xvbmVkQnkgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICA/IFsgY3R4LnVpZCBdXG4gICAgICAgICAgICAgICAgICAgIDogZXZ0LnFDbG9uZWRCeS5jb25jYXQoY3R4LnVpZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZXZ0LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiBjbG9uZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN0b3AoZXZ0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgIHk6IHRvcCxcbiAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgbW91c2U6IG1vdXNlRXZlbnQgPT09IHRydWUsXG4gICAgICAgICAgICAgIGRldGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGxhc3RYOiBsZWZ0LFxuICAgICAgICAgICAgICBsYXN0WTogdG9wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1vdmUgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgICAgICAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgICAgICAgICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgYnVnZ3kgYnJvd3NlciBiZWhhdmlvciAobGlrZSBCbGluay1iYXNlZCBlbmdpbmUgb25lcyBvbiBXaW5kb3dzKVxuICAgICAgICAgICAgLy8gd2hlcmUgdGhlIG1vdXNlbW92ZSBldmVudCBvY2N1cnMgZXZlbiBpZiB0aGVyZSdzIG5vIG1vdmVtZW50IGFmdGVyIG1vdXNlZG93blxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTYxNDY0XG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03MjEzNDFcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9xdWFzYXJmcmFtZXdvcmsvcXVhc2FyL2lzc3Vlcy8xMDcyMVxuICAgICAgICAgICAgaWYgKGRpc3RYID09PSAwICYmIGRpc3RZID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IGV2dFxuXG4gICAgICAgICAgICBjb25zdCBpc01vdXNlRXZ0ID0gY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlRXZlbnQoZXZ0LCBpc01vdXNlRXZ0KVxuXG4gICAgICAgICAgICAgIGxldCBjdXJzb3JcbiAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmVzZXJ2ZUN1cnNvciAhPT0gdHJ1ZSAmJiBtb2RpZmllcnMucHJlc2VydmVjdXJzb3IgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yIHx8ICcnXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiYmluZydcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlzTW91c2VFdnQgPT09IHRydWUgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXllZEZuID0+IHtcbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gdm9pZCAwXG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBjdXJzb3JcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICAgICAgICAgIGlmIChpc01vdXNlRXZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhEZWxheWVkRm4oKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgeyByZW1vdmUoKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgIT09IHRydWUgJiYgaGFuZGxlRXZlbnQoZXZ0LCBjdHguZXZlbnQubW91c2UpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkLCBzeW50aGV0aWMgfSA9IGdldENoYW5nZXMoZXZ0LCBjdHgsIGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChwYXlsb2FkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmhhbmRsZXIocGF5bG9hZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCA9PT0gdm9pZCAwICYmIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3RYID0gcGF5bG9hZC5wb3NpdGlvbi5sZWZ0XG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFkgPSBwYXlsb2FkLnBvc2l0aW9uLnRvcFxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3REaXIgPSBzeW50aGV0aWMgPT09IHRydWUgPyB2b2lkIDAgOiBwYXlsb2FkLmRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsID09PSB0cnVlXG4gICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgICAgIHx8IChpc01vdXNlRXZ0ID09PSB0cnVlICYmIChjdHgubW9kaWZpZXJzLm1vdXNlQWxsRGlyID09PSB0cnVlIHx8IGN0eC5tb2RpZmllcnMubW91c2VhbGxkaXIgPT09IHRydWUpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICBjdHgubW92ZShldnQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgICAgICAgICAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgICAgICAgICAgIGlmIChhYnNYICE9PSBhYnNZKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoY3R4LmRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlICYmIGFic1ggPiBhYnNZKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlICYmIGFic1ggPCBhYnNZKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGFic1ggPCBhYnNZICYmIGRpc3RZIDwgMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGFic1ggPCBhYnNZICYmIGRpc3RZID4gMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYIDwgMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSAmJiBkaXN0WCA+IDApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGN0eC5ldmVudC5kZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBjdHgubW92ZShldnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LmVuZChldnQsIHRydWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQsIGFib3J0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChhYm9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cCgpXG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCAhPT0gdHJ1ZSAmJiBjdHguaW5pdGlhbEV2ZW50ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KGN0eC5pbml0aWFsRXZlbnQuZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSAmJiBjdHguaGFuZGxlcihnZXRDaGFuZ2VzKGV2dCA9PT0gdm9pZCAwID8gY3R4Lmxhc3RFdnQgOiBldnQsIGN0eCkucGF5bG9hZClcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGdldENoYW5nZXMoZXZ0ID09PSB2b2lkIDAgPyBjdHgubGFzdEV2dCA6IGV2dCwgY3R4LCB0cnVlKVxuICAgICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHsgY3R4LmhhbmRsZXIocGF5bG9hZCkgfVxuXG4gICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwKGZuKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZuKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB2b2lkIDBcbiAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQgPSB2b2lkIDBcbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWwuX19xdG91Y2hwYW4gPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0gLy8gY2Fubm90IGJlIHBhc3NpdmUgKGV4OiBpT1Mgc2Nyb2xsKVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNocGFuXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKGJpbmRpbmdzLm9sZFZhbHVlICE9PSBiaW5kaW5ncy52YWx1ZSkge1xuICAgICAgICAgICAgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIGN0eC5lbmQoKVxuICAgICAgICAgICAgY3R4LmhhbmRsZXIgPSBiaW5kaW5ncy52YWx1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN0eC5kaXJlY3Rpb24gPSBnZXRNb2RpZmllckRpcmVjdGlvbnMoYmluZGluZ3MubW9kaWZpZXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHBhblxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIGVtaXQgdGhlIGVuZCBldmVudCB3aGVuIHRoZSBkaXJlY3RpdmUgaXMgZGVzdHJveWVkIHdoaWxlIGFjdGl2ZVxuICAgICAgICAgIC8vIHRoaXMgaXMgb25seSBuZWVkZWQgaW4gVG91Y2hQYW4gYmVjYXVzZSB0aGUgcmVzdCBvZiB0aGUgdG91Y2ggZGlyZWN0aXZlcyBkbyBub3QgZW1pdCBhbiBlbmQgZXZlbnRcbiAgICAgICAgICAvLyB0aGUgY29uZGl0aW9uIGlzIGFsc28gY2hlY2tlZCBpbiB0aGUgc3RhcnQgb2YgZnVuY3Rpb24gYnV0IHdlIGF2b2lkIHRoZSBjYWxsXG4gICAgICAgICAgY3R4LmV2ZW50ICE9PSB2b2lkIDAgJiYgY3R4LmVuZCgpXG5cbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcblxuICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaHBhblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIl0sIm5hbWVzIjpbInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLGVBQWU7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQ1o7QUFFQSxNQUFNLGdCQUFnQixPQUFPLEtBQUssWUFBWTtBQUU5QyxhQUFhLE1BQU07QUFFWixTQUFTLHNCQUF1QixLQUFLO0FBQzFDLFFBQU0sTUFBTSxDQUFFO0FBRWQsYUFBVyxhQUFhLGVBQWU7QUFDckMsUUFBSSxJQUFLLGVBQWdCLE1BQU07QUFDN0IsVUFBSyxhQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBRUQsTUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFLFdBQVcsR0FBRztBQUNqQyxXQUFPO0FBQUEsRUFDUjtBQUVELE1BQUksSUFBSSxlQUFlLE1BQU07QUFDM0IsUUFBSSxPQUFPLElBQUksUUFBUTtBQUFBLEVBQ3hCLFdBQ1EsSUFBSSxTQUFTLFFBQVEsSUFBSSxVQUFVLE1BQU07QUFDaEQsUUFBSSxhQUFhO0FBQUEsRUFDbEI7QUFFRCxNQUFJLElBQUksYUFBYSxNQUFNO0FBQ3pCLFFBQUksS0FBSyxJQUFJLE9BQU87QUFBQSxFQUNyQixXQUNRLElBQUksT0FBTyxRQUFRLElBQUksU0FBUyxNQUFNO0FBQzdDLFFBQUksV0FBVztBQUFBLEVBQ2hCO0FBRUQsTUFBSSxJQUFJLGVBQWUsUUFBUSxJQUFJLGFBQWEsTUFBTTtBQUNwRCxRQUFJLE1BQU07QUFBQSxFQUNYO0FBRUQsU0FBTztBQUNUO0FBRU8sU0FBUyxZQUFhLEtBQUssS0FBSztBQUNyQyxTQUFPLElBQUksVUFBVSxVQUNoQixJQUFJLFdBQVcsVUFDZixJQUFJLE9BQU8sY0FBYyxRQUN6QixPQUFPLElBQUksWUFBWSxjQUN2QixJQUFJLE9BQU8sU0FBUyxZQUFhLE1B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
