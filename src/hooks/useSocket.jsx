import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    //set socket
    setSocket(io("http://localhost:3000/"));
    //cleanup
    return () => {
      socket?.disconnected();
    };
  }, []);
  return socket;
};
