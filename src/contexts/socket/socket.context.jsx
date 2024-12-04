import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SocketContext } from "./socket-init.context";

//create context provider
export default function SocketContextProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:3000/"));
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

import PropTypes from "prop-types";
SocketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
