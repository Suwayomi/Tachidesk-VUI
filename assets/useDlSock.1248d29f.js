import { r as ref, P as Plugin } from "./index.75e4774b.js";
const eventsFromServer = ref("");
const isConnected = ref(false);
let base = Plugin.getItem("baseUrl");
base = base == "" ? document.location.origin + document.location.pathname : base;
const url = new URL(base);
url.protocol = url.protocol == "https:" ? "wss:" : "ws:";
let socket;
const socketMessageListener = (event) => {
  eventsFromServer.value = event.data;
};
const socketOpenListener = () => {
  console.log("Connected");
  isConnected.value = true;
  socket.addEventListener("message", socketMessageListener);
  socket.addEventListener("close", socketCloseListener);
};
const socketCloseListener = () => {
  isConnected.value = false;
  if (socket) {
    console.error("Disconnected.");
    socket.removeEventListener("message", socketMessageListener);
    socket.removeEventListener("open", socketOpenListener);
    socket.removeEventListener("close", socketCloseListener);
  }
  socket = new WebSocket(`${url.href.slice(0, -1)}/api/v1/downloads`);
  socket.addEventListener("open", socketOpenListener);
};
socketCloseListener();
function useDlSock() {
  const sendMsg = (data) => {
    socket.send(data);
  };
  return {
    eventsFromServer,
    isConnected,
    sendMsg
  };
}
export { useDlSock as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGxTb2NrLjEyNDhkMjlmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kb3dubG9hZHMvdXNlRGxTb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIENvbnRyaWJ1dG9ycyB0byB0aGUgU3V3YXlvbWkgcHJvamVjdFxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ3F1YXNhcic7XG5cbmNvbnN0IGV2ZW50c0Zyb21TZXJ2ZXIgPSByZWYoJycpO1xuY29uc3QgaXNDb25uZWN0ZWQgPSByZWYoZmFsc2UpO1xubGV0IGJhc2UgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmFzZVVybCcpIGFzIHN0cmluZztcbmJhc2UgPVxuICBiYXNlID09ICcnID8gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luICsgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgOiBiYXNlO1xuY29uc3QgdXJsID0gbmV3IFVSTChiYXNlKTtcbnVybC5wcm90b2NvbCA9IHVybC5wcm90b2NvbCA9PSAnaHR0cHM6JyA/ICd3c3M6JyA6ICd3czonO1xubGV0IHNvY2tldDogV2ViU29ja2V0O1xuXG5jb25zdCBzb2NrZXRNZXNzYWdlTGlzdGVuZXIgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICBldmVudHNGcm9tU2VydmVyLnZhbHVlID0gZXZlbnQuZGF0YTtcbn07XG5cbmNvbnN0IHNvY2tldE9wZW5MaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCcpO1xuICBpc0Nvbm5lY3RlZC52YWx1ZSA9IHRydWU7XG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgc29ja2V0TWVzc2FnZUxpc3RlbmVyKTtcbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgc29ja2V0Q2xvc2VMaXN0ZW5lcik7XG59O1xuXG5jb25zdCBzb2NrZXRDbG9zZUxpc3RlbmVyID0gKCkgPT4ge1xuICBpc0Nvbm5lY3RlZC52YWx1ZSA9IGZhbHNlO1xuICBpZiAoc29ja2V0KSB7XG4gICAgY29uc29sZS5lcnJvcignRGlzY29ubmVjdGVkLicpO1xuICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgc29ja2V0TWVzc2FnZUxpc3RlbmVyKTtcbiAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHNvY2tldE9wZW5MaXN0ZW5lcik7XG4gICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgc29ja2V0Q2xvc2VMaXN0ZW5lcik7XG4gIH1cbiAgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgJHt1cmwuaHJlZi5zbGljZSgwLCAtMSl9L2FwaS92MS9kb3dubG9hZHNgKTtcbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCBzb2NrZXRPcGVuTGlzdGVuZXIpO1xufTtcbnNvY2tldENsb3NlTGlzdGVuZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGxTb2NrKCkge1xuICBjb25zdCBzZW5kTXNnID0gKGRhdGE6IHN0cmluZykgPT4ge1xuICAgIHNvY2tldC5zZW5kKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRzRnJvbVNlcnZlcixcbiAgICBpc0Nvbm5lY3RlZCxcbiAgICBzZW5kTXNnXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTG9jYWxTdG9yYWdlIl0sIm1hcHBpbmdzIjoiO0FBU0EsTUFBTSxtQkFBbUIsSUFBSSxFQUFFO0FBQy9CLE1BQU0sY0FBYyxJQUFJLEtBQUs7QUFDN0IsSUFBSSxPQUFPQSxPQUFhLFFBQVEsU0FBUztBQUN6QyxPQUNFLFFBQVEsS0FBSyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsV0FBVztBQUN2RSxNQUFNLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFDeEIsSUFBSSxXQUFXLElBQUksWUFBWSxXQUFXLFNBQVM7QUFDbkQsSUFBSTtBQUVKLE1BQU0sd0JBQXdCLENBQUMsVUFBd0I7QUFDckQsbUJBQWlCLFFBQVEsTUFBTTtBQUNqQztBQUVBLE1BQU0scUJBQXFCLE1BQU07QUFDL0IsVUFBUSxJQUFJLFdBQVc7QUFDdkIsY0FBWSxRQUFRO0FBQ2IsU0FBQSxpQkFBaUIsV0FBVyxxQkFBcUI7QUFDakQsU0FBQSxpQkFBaUIsU0FBUyxtQkFBbUI7QUFDdEQ7QUFFQSxNQUFNLHNCQUFzQixNQUFNO0FBQ2hDLGNBQVksUUFBUTtBQUNwQixNQUFJLFFBQVE7QUFDVixZQUFRLE1BQU0sZUFBZTtBQUN0QixXQUFBLG9CQUFvQixXQUFXLHFCQUFxQjtBQUNwRCxXQUFBLG9CQUFvQixRQUFRLGtCQUFrQjtBQUM5QyxXQUFBLG9CQUFvQixTQUFTLG1CQUFtQjtBQUFBLEVBQ3pEO0FBQ1MsV0FBQSxJQUFJLFVBQVUsR0FBRyxJQUFJLEtBQUssTUFBTSxHQUFHLEVBQUUsb0JBQW9CO0FBQzNELFNBQUEsaUJBQWlCLFFBQVEsa0JBQWtCO0FBQ3BEO0FBQ0E7QUFFQSxTQUF3QixZQUFZO0FBQzVCLFFBQUEsVUFBVSxDQUFDLFNBQWlCO0FBQ2hDLFdBQU8sS0FBSyxJQUFJO0FBQUEsRUFBQTtBQUdYLFNBQUE7QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUFBO0FBRUo7OyJ9
