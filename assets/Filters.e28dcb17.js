import { r as ref, P as Plugin } from "./index.c15e704f.js";
import { storeSet } from "./StoreStuff.9c9e2ee5.js";
const unread = ref(Plugin.getItem("lbUnread"));
const downloaded = ref(Plugin.getItem("lbDownloaded"));
const leftToRead = ref(Plugin.getItem("lbLeftToRead"));
const alphabetical = ref(Plugin.getItem("lbAlphabetical"));
const tmp = Plugin.getItem("lbByid");
const ByID = ref(
  leftToRead.value === null && alphabetical.value === null && tmp === null ? true : Plugin.getItem("lbByid")
);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVycy5lMjhkY2IxNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbGlicmFyeS9GaWx0ZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBzdG9yZVNldCB9IGZyb20gJ3NyYy9ib290L1N0b3JlU3R1ZmYnO1xuXG5jb25zdCB1bnJlYWQgPSByZWYoPEJvb24+TG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xiVW5yZWFkJykpO1xuY29uc3QgZG93bmxvYWRlZCA9IHJlZig8Qm9vbj5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGJEb3dubG9hZGVkJykpO1xuXG5jb25zdCBsZWZ0VG9SZWFkID0gcmVmKDxCb29uPkxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYkxlZnRUb1JlYWQnKSk7XG5jb25zdCBhbHBoYWJldGljYWwgPSByZWYoPEJvb24+TG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xiQWxwaGFiZXRpY2FsJykpO1xuY29uc3QgdG1wID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xiQnlpZCcpO1xuY29uc3QgQnlJRCA9IHJlZihcbiAgPEJvb24+bGVmdFRvUmVhZC52YWx1ZSA9PT0gbnVsbCAmJiBhbHBoYWJldGljYWwudmFsdWUgPT09IG51bGwgJiYgdG1wID09PSBudWxsXG4gICAgPyB0cnVlXG4gICAgOiBMb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGJCeWlkJylcbik7XG5cbmNvbnN0IERpc3BsYXkgPSByZWYoPEJvb24+TG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xiRGlzcGxheScpKTtcblxudHlwZSBCb29uID0gYm9vbGVhbiB8IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUluQmFyKCkge1xuICBjb25zdCBzZXRVbnJlYWQgPSAoZGF0YTogQm9vbikgPT4ge1xuICAgIHN0b3JlU2V0KCdsYlVucmVhZCcsIGRhdGEpO1xuICAgIHVucmVhZC52YWx1ZSA9IGRhdGE7XG4gIH07XG4gIGNvbnN0IHNldERvd25sb2FkZWQgPSAoZGF0YTogQm9vbik6IHZvaWQgPT4ge1xuICAgIHN0b3JlU2V0KCdsYkRvd25sb2FkZWQnLCBkYXRhKTtcbiAgICBkb3dubG9hZGVkLnZhbHVlID0gZGF0YTtcbiAgfTtcbiAgY29uc3Qgc2V0RGlzcGxheSA9IChkYXRhOiBCb29uKSA9PiB7XG4gICAgc3RvcmVTZXQoJ2xiRGlzcGxheScsIGRhdGEpO1xuICAgIERpc3BsYXkudmFsdWUgPSBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IHNldExlZnRUb1JlYWQgPSAoZGF0YTogQm9vbikgPT4ge1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHN0b3JlU2V0KCdsYkxlZnRUb1JlYWQnLCBkYXRhKTtcbiAgICAgIHN0b3JlU2V0KCdsYkFscGhhYmV0aWNhbCcsIG51bGwpO1xuICAgICAgc3RvcmVTZXQoJ2xiQnlpZCcsIG51bGwpO1xuICAgIH1cbiAgICBsZWZ0VG9SZWFkLnZhbHVlID0gZGF0YTtcbiAgfTtcbiAgY29uc3Qgc2V0QWxwaGFiZXRpY2FsID0gKGRhdGE6IEJvb24gfCBudWxsKSA9PiB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgc3RvcmVTZXQoJ2xiTGVmdFRvUmVhZCcsIG51bGwpO1xuICAgICAgc3RvcmVTZXQoJ2xiQWxwaGFiZXRpY2FsJywgZGF0YSk7XG4gICAgICBzdG9yZVNldCgnbGJCeWlkJywgbnVsbCk7XG4gICAgfVxuICAgIGFscGhhYmV0aWNhbC52YWx1ZSA9IGRhdGE7XG4gIH07XG4gIGNvbnN0IHNldEJ5SUQgPSAoZGF0YTogQm9vbiB8IG51bGwpID0+IHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICBzdG9yZVNldCgnbGJMZWZ0VG9SZWFkJywgbnVsbCk7XG4gICAgICBzdG9yZVNldCgnbGJBbHBoYWJldGljYWwnLCBudWxsKTtcbiAgICAgIHN0b3JlU2V0KCdsYkJ5aWQnLCBkYXRhKTtcbiAgICB9XG4gICAgQnlJRC52YWx1ZSA9IGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRVbnJlYWQsXG4gICAgc2V0RG93bmxvYWRlZCxcbiAgICBzZXRMZWZ0VG9SZWFkLFxuICAgIHNldEFscGhhYmV0aWNhbCxcbiAgICBzZXRCeUlELFxuICAgIHNldERpc3BsYXksXG4gICAgdW5yZWFkLFxuICAgIGRvd25sb2FkZWQsXG4gICAgbGVmdFRvUmVhZCxcbiAgICBhbHBoYWJldGljYWwsXG4gICAgQnlJRCxcbiAgICBEaXNwbGF5XG4gIH07XG59XG4iXSwibmFtZXMiOlsiTG9jYWxTdG9yYWdlIl0sIm1hcHBpbmdzIjoiOztBQVVBLE1BQU0sU0FBUyxJQUFVQSxPQUFhLFFBQVEsVUFBVSxDQUFDO0FBQ3pELE1BQU0sYUFBYSxJQUFVQSxPQUFhLFFBQVEsY0FBYyxDQUFDO0FBRWpFLE1BQU0sYUFBYSxJQUFVQSxPQUFhLFFBQVEsY0FBYyxDQUFDO0FBQ2pFLE1BQU0sZUFBZSxJQUFVQSxPQUFhLFFBQVEsZ0JBQWdCLENBQUM7QUFDckUsTUFBTSxNQUFNQSxPQUFhLFFBQVEsUUFBUTtBQUN6QyxNQUFNLE9BQU87QUFBQSxFQUNMLFdBQVcsVUFBVSxRQUFRLGFBQWEsVUFBVSxRQUFRLFFBQVEsT0FDdEUsT0FDQUEsT0FBYSxRQUFRLFFBQVE7QUFDbkM7QUFFQSxNQUFNLFVBQVUsSUFBVUEsT0FBYSxRQUFRLFdBQVcsQ0FBQztBQUkzRCxTQUF3QixXQUFXO0FBQzNCLFFBQUEsWUFBWSxDQUFDLFNBQWU7QUFDaEMsYUFBUyxZQUFZLElBQUk7QUFDekIsV0FBTyxRQUFRO0FBQUEsRUFBQTtBQUVYLFFBQUEsZ0JBQWdCLENBQUMsU0FBcUI7QUFDMUMsYUFBUyxnQkFBZ0IsSUFBSTtBQUM3QixlQUFXLFFBQVE7QUFBQSxFQUFBO0FBRWYsUUFBQSxhQUFhLENBQUMsU0FBZTtBQUNqQyxhQUFTLGFBQWEsSUFBSTtBQUMxQixZQUFRLFFBQVE7QUFBQSxFQUFBO0FBR1osUUFBQSxnQkFBZ0IsQ0FBQyxTQUFlO0FBQ3BDLFFBQUksUUFBUSxNQUFNO0FBQ2hCLGVBQVMsZ0JBQWdCLElBQUk7QUFDN0IsZUFBUyxrQkFBa0IsSUFBSTtBQUMvQixlQUFTLFVBQVUsSUFBSTtBQUFBLElBQ3pCO0FBQ0EsZUFBVyxRQUFRO0FBQUEsRUFBQTtBQUVmLFFBQUEsa0JBQWtCLENBQUMsU0FBc0I7QUFDN0MsUUFBSSxRQUFRLE1BQU07QUFDaEIsZUFBUyxnQkFBZ0IsSUFBSTtBQUM3QixlQUFTLGtCQUFrQixJQUFJO0FBQy9CLGVBQVMsVUFBVSxJQUFJO0FBQUEsSUFDekI7QUFDQSxpQkFBYSxRQUFRO0FBQUEsRUFBQTtBQUVqQixRQUFBLFVBQVUsQ0FBQyxTQUFzQjtBQUNyQyxRQUFJLFFBQVEsTUFBTTtBQUNoQixlQUFTLGdCQUFnQixJQUFJO0FBQzdCLGVBQVMsa0JBQWtCLElBQUk7QUFDL0IsZUFBUyxVQUFVLElBQUk7QUFBQSxJQUN6QjtBQUNBLFNBQUssUUFBUTtBQUFBLEVBQUE7QUFHUixTQUFBO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFBQTtBQUVKOzsifQ==
