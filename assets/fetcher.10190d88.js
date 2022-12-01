import { b as boot } from "./index.c15e704f.js";
import { storeGet } from "./StoreStuff.9c9e2ee5.js";
let base = storeGet("baseUrl", location.origin);
function authOptions(options = void 0) {
  const update = { ...options };
  const auth = storeGet("auth");
  if (auth != null) {
    update.headers = {
      ...update.headers,
      Authorization: `Basic ${btoa(auth.username + ":" + auth.password)}`
    };
  }
  return update;
}
function resetBase() {
  base = storeGet("baseUrl", location.origin);
}
function fetcher(url, options = void 0) {
  const tmp = base + url;
  return fetch(tmp, authOptions(options));
}
async function fetchJSON(url, options = void 0) {
  const tmp = await fetcher(url, options);
  return tmp.json();
}
var fetcher$1 = boot(({ app }) => {
  app.config.globalProperties["$fetch"] = fetcher;
  app.config.globalProperties["$fetchJSON"] = fetchJSON;
  app.provide("fetch", fetcher);
  app.provide("fetchJSON", fetchJSON);
});
export { authOptions, fetcher$1 as default, fetchJSON, fetcher, resetBase };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hlci4xMDE5MGQ4OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jvb3QvZmV0Y2hlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSBDb250cmlidXRvcnMgdG8gdGhlIFN1d2F5b21pIHByb2plY3RcbiAqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbmltcG9ydCB7IGJvb3QgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuaW1wb3J0IHsgc3RvcmVHZXQgfSBmcm9tICcuL1N0b3JlU3R1ZmYnO1xuXG5sZXQgYmFzZSA9IHN0b3JlR2V0KCdiYXNlVXJsJywgbG9jYXRpb24ub3JpZ2luKSBhcyBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoT3B0aW9ucyhvcHRpb25zOiBSZXF1ZXN0SW5pdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCkge1xuICBjb25zdCB1cGRhdGUgPSB7IC4uLm9wdGlvbnMgfTtcbiAgY29uc3QgYXV0aCA9IDx7IHVzZXJuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSB8IG51bGw+c3RvcmVHZXQoJ2F1dGgnKTtcbiAgaWYgKGF1dGggIT0gbnVsbCkge1xuICAgIHVwZGF0ZS5oZWFkZXJzID0ge1xuICAgICAgLi4udXBkYXRlLmhlYWRlcnMsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtidG9hKGF1dGgudXNlcm5hbWUgKyAnOicgKyBhdXRoLnBhc3N3b3JkKX1gXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdXBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRCYXNlKCkge1xuICBiYXNlID0gc3RvcmVHZXQoJ2Jhc2VVcmwnLCBsb2NhdGlvbi5vcmlnaW4pIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoZXIoXG4gIHVybDogUmVxdWVzdEluZm8gfCBVUkwsXG4gIG9wdGlvbnM6IFJlcXVlc3RJbml0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXG4pIHtcbiAgY29uc3QgdG1wID0gYmFzZSArIHVybDtcbiAgcmV0dXJuIGZldGNoKHRtcCwgYXV0aE9wdGlvbnMob3B0aW9ucykpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hKU09OKFxuICB1cmw6IFJlcXVlc3RJbmZvIHwgVVJMLFxuICBvcHRpb25zOiBSZXF1ZXN0SW5pdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuKSB7XG4gIGNvbnN0IHRtcCA9IGF3YWl0IGZldGNoZXIodXJsLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRtcC5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvb3QoKHsgYXBwIH0pID0+IHtcbiAgLy8gZm9yIE9wdGlvbnMgQVBJXG4gIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllc1snJGZldGNoJ10gPSBmZXRjaGVyO1xuICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXNbJyRmZXRjaEpTT04nXSA9IGZldGNoSlNPTjtcblxuICAvLyBmb3IgQ29tcG9zaXRpb24gQVBJXG4gIGFwcC5wcm92aWRlKCdmZXRjaCcsIGZldGNoZXIpO1xuICBhcHAucHJvdmlkZSgnZmV0Y2hKU09OJywgZmV0Y2hKU09OKTtcbn0pO1xuXG5kZWNsYXJlIG1vZHVsZSAnQHZ1ZS9ydW50aW1lLWNvcmUnIHtcbiAgaW50ZXJmYWNlIENvbXBvbmVudEN1c3RvbVByb3BlcnRpZXMge1xuICAgICRmZXRjaDogdHlwZW9mIGZldGNoZXI7XG4gICAgJGZldGNoSlNPTjogdHlwZW9mIGZldGNoSlNPTjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsSUFBSSxPQUFPLFNBQVMsV0FBVyxTQUFTLE1BQU07QUFFOUIsU0FBQSxZQUFZLFVBQW1DLFFBQVc7QUFDbEUsUUFBQSxTQUFTLEVBQUUsR0FBRztBQUNkLFFBQUEsT0FBc0QsU0FBUyxNQUFNO0FBQzNFLE1BQUksUUFBUSxNQUFNO0FBQ2hCLFdBQU8sVUFBVTtBQUFBLE1BQ2YsR0FBRyxPQUFPO0FBQUEsTUFDVixlQUFlLFNBQVMsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFFBQVE7QUFBQSxJQUFBO0FBQUEsRUFFcEU7QUFDTyxTQUFBO0FBQ1Q7QUFFTyxTQUFTLFlBQVk7QUFDbkIsU0FBQSxTQUFTLFdBQVcsU0FBUyxNQUFNO0FBQzVDO0FBRWdCLFNBQUEsUUFDZCxLQUNBLFVBQW1DLFFBQ25DO0FBQ0EsUUFBTSxNQUFNLE9BQU87QUFDbkIsU0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLENBQUM7QUFDeEM7QUFFc0IsZUFBQSxVQUNwQixLQUNBLFVBQW1DLFFBQ25DO0FBQ0EsUUFBTSxNQUFNLE1BQU0sUUFBUSxLQUFLLE9BQU87QUFDdEMsU0FBTyxJQUFJO0FBQ2I7QUFFQSxJQUFBLFlBQWUsS0FBSyxDQUFDLEVBQUUsVUFBVTtBQUUzQixNQUFBLE9BQU8saUJBQWlCLFlBQVk7QUFDcEMsTUFBQSxPQUFPLGlCQUFpQixnQkFBZ0I7QUFHeEMsTUFBQSxRQUFRLFNBQVMsT0FBTztBQUN4QixNQUFBLFFBQVEsYUFBYSxTQUFTO0FBQ3BDLENBQUM7OyJ9
