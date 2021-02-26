import io from "socket.io-client";

const socketService = () => {

  const ENDPOINT = "http://localhost:8080";
  const socketIO = io(ENDPOINT);

  const connection = () => {
    socketIO.on('connection', socket => {
      console.log('a user connected')
    })
  };

  const message = (callback) => {
    socketIO.on('message', socket => {
      callback(socket);
    });
  };

  const getSocket = () => socketIO;

  return {
    connection,
    message,
    getSocket
  }

}

export default socketService();