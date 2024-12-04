// client/App
import { useContext, useEffect, useState } from "react";
import "../pages/TestChat.css";
import { SocketContext } from "../contexts/socket/socket-init.context";

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socket = useContext(SocketContext);

  //handle submit
  const handleOnSendMessage = (e) => {
    e.preventDefault();

    //1. emit message
    console.log("This is the message", { message });
    socket?.emit("chats/create", {
      message,
      name: localStorage.getItem("name"),
    });
    setMessage("");
  };

  //refresh chats
  useEffect(() => {
    socket?.on("chats/response", (chats) => {
      setMessages(chats);
    });
  }, [socket]);

  return (
    <>
      <ul id="messages">
        {/* render messages */}
        {messages.map((msg, i) => (
          <li
            key={i}
            style={{
              textAlign:
                localStorage.getItem("name") === msg.name ? "right" : "left",
            }}
          >
            {msg.message}
          </li>
        ))}
      </ul>
      <form id="form" onSubmit={handleOnSendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="input"
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
