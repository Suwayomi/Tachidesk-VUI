import { b as boot, P as Plugin } from "./index.c15e704f.js";
function storeSet(key, data, setDefault = null) {
  if (data == setDefault)
    Plugin.remove(key);
  else
    Plugin.set(key, data);
}
function storeGet(key, getDefault = null) {
  const tmp = Plugin.getItem(key);
  return tmp === null ? getDefault : tmp;
}
var StoreStuff = boot(({ app }) => {
  app.config.globalProperties["$storeSet"] = storeSet;
  app.config.globalProperties["$storeGet"] = storeGet;
  app.provide("storeSet", storeSet);
  app.provide("storeGet", storeGet);
});
export { StoreStuff as default, storeGet, storeSet };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmVTdHVmZi45YzllMmVlNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jvb3QvU3RvcmVTdHVmZi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbmltcG9ydCB7IGJvb3QgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAncXVhc2FyJztcblxuLyoqXG4gKiBJZiB0aGUgZGF0YSBpcyB0aGUgc2FtZSBhcyB0aGUgZGVmYXVsdCwgcmVtb3ZlIHRoZSBrZXkgZnJvbSBsb2NhbCBzdG9yYWdlLCBvdGhlcndpc2Ugc2V0IHRoZSBrZXkgdG9cbiAqIHRoZSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gc3RvcmUgdGhlIGRhdGEgdW5kZXIuXG4gKiBAcGFyYW0ge251bGwgfCB1bmtub3dufSBkYXRhIC0gVGhlIGRhdGEgdG8gc3RvcmUuXG4gKiBAcGFyYW0ge3Vua25vd259IFtzZXREZWZhdWx0PW51bGxdIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gc2V0IGlmIHRoZSBkYXRhIGlzIG51bGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVNldChcbiAga2V5OiBzdHJpbmcsXG4gIGRhdGE6IG51bGwgfCB1bmtub3duLFxuICBzZXREZWZhdWx0OiB1bmtub3duID0gbnVsbFxuKTogdm9pZCB7XG4gIGlmIChkYXRhID09IHNldERlZmF1bHQpIExvY2FsU3RvcmFnZS5yZW1vdmUoa2V5KTtcbiAgZWxzZSBMb2NhbFN0b3JhZ2Uuc2V0KGtleSwgZGF0YSk7XG59XG5cbi8qKlxuICogSWYgdGhlIGtleSBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZSwgcmV0dXJuIHRoZSB2YWx1ZSwgb3RoZXJ3aXNlIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHN0b3JlIHRoZSB2YWx1ZSB1bmRlci5cbiAqIEBwYXJhbSB7dW5rbm93bn0gZ2V0RGVmYXVsdCAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHJldHVybiBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3QuXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIGtleSBpbiBsb2NhbCBzdG9yYWdlLCBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlR2V0KGtleTogc3RyaW5nLCBnZXREZWZhdWx0OiB1bmtub3duID0gbnVsbCk6IHVua25vd24ge1xuICBjb25zdCB0bXAgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICByZXR1cm4gdG1wID09PSBudWxsID8gZ2V0RGVmYXVsdCA6IHRtcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9vdCgoeyBhcHAgfSkgPT4ge1xuICAvLyBmb3IgT3B0aW9ucyBBUElcbiAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzWyckc3RvcmVTZXQnXSA9IHN0b3JlU2V0O1xuICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXNbJyRzdG9yZUdldCddID0gc3RvcmVHZXQ7XG5cbiAgLy8gZm9yIENvbXBvc2l0aW9uIEFQSVxuICBhcHAucHJvdmlkZSgnc3RvcmVTZXQnLCBzdG9yZVNldCk7XG4gIGFwcC5wcm92aWRlKCdzdG9yZUdldCcsIHN0b3JlR2V0KTtcbn0pO1xuXG5kZWNsYXJlIG1vZHVsZSAnQHZ1ZS9ydW50aW1lLWNvcmUnIHtcbiAgaW50ZXJmYWNlIENvbXBvbmVudEN1c3RvbVByb3BlcnRpZXMge1xuICAgICRzdG9yZVNldDogdHlwZW9mIHN0b3JlU2V0O1xuICAgICRzdG9yZUdldDogdHlwZW9mIHN0b3JlR2V0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTG9jYWxTdG9yYWdlIl0sIm1hcHBpbmdzIjoiO0FBZ0JPLFNBQVMsU0FDZCxLQUNBLE1BQ0EsYUFBc0IsTUFDaEI7QUFDTixNQUFJLFFBQVE7QUFBWUEsV0FBYSxPQUFPLEdBQUc7QUFBQTtBQUM3QkEsV0FBQSxJQUFJLEtBQUssSUFBSTtBQUNqQztBQVFnQixTQUFBLFNBQVMsS0FBYSxhQUFzQixNQUFlO0FBQ25FLFFBQUEsTUFBTUEsT0FBYSxRQUFRLEdBQUc7QUFDN0IsU0FBQSxRQUFRLE9BQU8sYUFBYTtBQUNyQztBQUVBLElBQUEsYUFBZSxLQUFLLENBQUMsRUFBRSxVQUFVO0FBRTNCLE1BQUEsT0FBTyxpQkFBaUIsZUFBZTtBQUN2QyxNQUFBLE9BQU8saUJBQWlCLGVBQWU7QUFHdkMsTUFBQSxRQUFRLFlBQVksUUFBUTtBQUM1QixNQUFBLFFBQVEsWUFBWSxRQUFRO0FBQ2xDLENBQUM7OyJ9
