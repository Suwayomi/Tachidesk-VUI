import { r as ref, P as Plugin } from "./index.75e4774b.js";
import { s as storeSet } from "./usefull.5da5779b.js";
const unread = ref(Plugin.getItem("lbUnread"));
const downloaded = ref(Plugin.getItem("lbDownloaded"));
const leftToRead = ref(Plugin.getItem("lbLeftToRead"));
const alphabetical = ref(Plugin.getItem("lbAlphabetical"));
const ByID = ref(Plugin.getItem("lbByid"));
const Display = ref(Plugin.getItem("lbDisplay"));
function useInBar() {
  const setUnread = (data) => {
    storeSet("lbUnread", data);
    unread.value = data;
  };
  const setDownloaded = (data) => {
    storeSet("lbDownloaded", data);
    downloaded.value = data;
  };
  const setDisplay = (data) => {
    storeSet("lbDisplay", data);
    Display.value = data;
  };
  const setLeftToRead = (data) => {
    if (data != null) {
      storeSet("lbLeftToRead", data);
      storeSet("lbAlphabetical", null);
      storeSet("lbByid", null);
    }
    leftToRead.value = data;
  };
  const setAlphabetical = (data) => {
    if (data != null) {
      storeSet("lbLeftToRead", null);
      storeSet("lbAlphabetical", data);
      storeSet("lbByid", null);
    }
    alphabetical.value = data;
  };
  const setByID = (data) => {
    if (data != null) {
      storeSet("lbLeftToRead", null);
      storeSet("lbAlphabetical", null);
      storeSet("lbByid", data);
    }
    ByID.value = data;
  };
  return {
    setUnread,
    setDownloaded,
    setLeftToRead,
    setAlphabetical,
    setByID,
    setDisplay,
    unread,
    downloaded,
    leftToRead,
    alphabetical,
    ByID,
    Display
  };
}
export { useInBar as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVycy5lOTQwMDAzZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbGlicmFyeS9GaWx0ZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBzdG9yZVNldCB9IGZyb20gJy4uL2dsb2JhbC91c2VmdWxsJztcblxuY29uc3QgdW5yZWFkID0gcmVmKDxCb29uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYlVucmVhZCcpKTtcbmNvbnN0IGRvd25sb2FkZWQgPSByZWYoPEJvb24+TG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xiRG93bmxvYWRlZCcpKTtcbmNvbnN0IGxlZnRUb1JlYWQgPSByZWYoPEJvb24+TG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xiTGVmdFRvUmVhZCcpKTtcbmNvbnN0IGFscGhhYmV0aWNhbCA9IHJlZig8Qm9vbj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGJBbHBoYWJldGljYWwnKSk7XG5jb25zdCBCeUlEID0gcmVmKDxCb29uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYkJ5aWQnKSk7XG5jb25zdCBEaXNwbGF5ID0gcmVmKDxCb29uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYkRpc3BsYXknKSk7XG5cbnR5cGUgQm9vbiA9IGJvb2xlYW4gfCBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VJbkJhcigpIHtcbiAgY29uc3Qgc2V0VW5yZWFkID0gKGRhdGE6IEJvb24pID0+IHtcbiAgICBzdG9yZVNldCgnbGJVbnJlYWQnLCBkYXRhKTtcbiAgICB1bnJlYWQudmFsdWUgPSBkYXRhO1xuICB9O1xuICBjb25zdCBzZXREb3dubG9hZGVkID0gKGRhdGE6IEJvb24pOiB2b2lkID0+IHtcbiAgICBzdG9yZVNldCgnbGJEb3dubG9hZGVkJywgZGF0YSk7XG4gICAgZG93bmxvYWRlZC52YWx1ZSA9IGRhdGE7XG4gIH07XG4gIGNvbnN0IHNldERpc3BsYXkgPSAoZGF0YTogQm9vbikgPT4ge1xuICAgIHN0b3JlU2V0KCdsYkRpc3BsYXknLCBkYXRhKTtcbiAgICBEaXNwbGF5LnZhbHVlID0gZGF0YTtcbiAgfTtcblxuICBjb25zdCBzZXRMZWZ0VG9SZWFkID0gKGRhdGE6IEJvb24pID0+IHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICBzdG9yZVNldCgnbGJMZWZ0VG9SZWFkJywgZGF0YSk7XG4gICAgICBzdG9yZVNldCgnbGJBbHBoYWJldGljYWwnLCBudWxsKTtcbiAgICAgIHN0b3JlU2V0KCdsYkJ5aWQnLCBudWxsKTtcbiAgICB9XG4gICAgbGVmdFRvUmVhZC52YWx1ZSA9IGRhdGE7XG4gIH07XG4gIGNvbnN0IHNldEFscGhhYmV0aWNhbCA9IChkYXRhOiBCb29uIHwgbnVsbCkgPT4ge1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHN0b3JlU2V0KCdsYkxlZnRUb1JlYWQnLCBudWxsKTtcbiAgICAgIHN0b3JlU2V0KCdsYkFscGhhYmV0aWNhbCcsIGRhdGEpO1xuICAgICAgc3RvcmVTZXQoJ2xiQnlpZCcsIG51bGwpO1xuICAgIH1cbiAgICBhbHBoYWJldGljYWwudmFsdWUgPSBkYXRhO1xuICB9O1xuICBjb25zdCBzZXRCeUlEID0gKGRhdGE6IEJvb24gfCBudWxsKSA9PiB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgc3RvcmVTZXQoJ2xiTGVmdFRvUmVhZCcsIG51bGwpO1xuICAgICAgc3RvcmVTZXQoJ2xiQWxwaGFiZXRpY2FsJywgbnVsbCk7XG4gICAgICBzdG9yZVNldCgnbGJCeWlkJywgZGF0YSk7XG4gICAgfVxuICAgIEJ5SUQudmFsdWUgPSBkYXRhO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VW5yZWFkLFxuICAgIHNldERvd25sb2FkZWQsXG4gICAgc2V0TGVmdFRvUmVhZCxcbiAgICBzZXRBbHBoYWJldGljYWwsXG4gICAgc2V0QnlJRCxcbiAgICBzZXREaXNwbGF5LFxuICAgIHVucmVhZCxcbiAgICBkb3dubG9hZGVkLFxuICAgIGxlZnRUb1JlYWQsXG4gICAgYWxwaGFiZXRpY2FsLFxuICAgIEJ5SUQsXG4gICAgRGlzcGxheVxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxvY2FsU3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7QUFVQSxNQUFNLFNBQVMsSUFBVUEsT0FBYSxRQUFRLFVBQVUsQ0FBQztBQUN6RCxNQUFNLGFBQWEsSUFBVUEsT0FBYSxRQUFRLGNBQWMsQ0FBQztBQUNqRSxNQUFNLGFBQWEsSUFBVUEsT0FBYSxRQUFRLGNBQWMsQ0FBQztBQUNqRSxNQUFNLGVBQWUsSUFBVUEsT0FBYSxRQUFRLGdCQUFnQixDQUFDO0FBQ3JFLE1BQU0sT0FBTyxJQUFVQSxPQUFhLFFBQVEsUUFBUSxDQUFDO0FBQ3JELE1BQU0sVUFBVSxJQUFVQSxPQUFhLFFBQVEsV0FBVyxDQUFDO0FBSTNELFNBQXdCLFdBQVc7QUFDM0IsUUFBQSxZQUFZLENBQUMsU0FBZTtBQUNoQyxhQUFTLFlBQVksSUFBSTtBQUN6QixXQUFPLFFBQVE7QUFBQSxFQUFBO0FBRVgsUUFBQSxnQkFBZ0IsQ0FBQyxTQUFxQjtBQUMxQyxhQUFTLGdCQUFnQixJQUFJO0FBQzdCLGVBQVcsUUFBUTtBQUFBLEVBQUE7QUFFZixRQUFBLGFBQWEsQ0FBQyxTQUFlO0FBQ2pDLGFBQVMsYUFBYSxJQUFJO0FBQzFCLFlBQVEsUUFBUTtBQUFBLEVBQUE7QUFHWixRQUFBLGdCQUFnQixDQUFDLFNBQWU7QUFDcEMsUUFBSSxRQUFRLE1BQU07QUFDaEIsZUFBUyxnQkFBZ0IsSUFBSTtBQUM3QixlQUFTLGtCQUFrQixJQUFJO0FBQy9CLGVBQVMsVUFBVSxJQUFJO0FBQUEsSUFDekI7QUFDQSxlQUFXLFFBQVE7QUFBQSxFQUFBO0FBRWYsUUFBQSxrQkFBa0IsQ0FBQyxTQUFzQjtBQUM3QyxRQUFJLFFBQVEsTUFBTTtBQUNoQixlQUFTLGdCQUFnQixJQUFJO0FBQzdCLGVBQVMsa0JBQWtCLElBQUk7QUFDL0IsZUFBUyxVQUFVLElBQUk7QUFBQSxJQUN6QjtBQUNBLGlCQUFhLFFBQVE7QUFBQSxFQUFBO0FBRWpCLFFBQUEsVUFBVSxDQUFDLFNBQXNCO0FBQ3JDLFFBQUksUUFBUSxNQUFNO0FBQ2hCLGVBQVMsZ0JBQWdCLElBQUk7QUFDN0IsZUFBUyxrQkFBa0IsSUFBSTtBQUMvQixlQUFTLFVBQVUsSUFBSTtBQUFBLElBQ3pCO0FBQ0EsU0FBSyxRQUFRO0FBQUEsRUFBQTtBQUdSLFNBQUE7QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUFBO0FBRUo7OyJ9
