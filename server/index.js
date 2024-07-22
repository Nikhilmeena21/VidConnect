import { Server } from "socket.io";

const io = new Server(8000, {
    cors: true,
  });  

io.on("connection", (socket) => {
socket.emit("hello", "world");

socket.on("howdy", (arg) => {
console.log(arg); 
});
});