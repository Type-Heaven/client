// client/App
import { useEffect, useState } from "react";
import "../pages/TestChat.css";
import { io } from "socket.io-client";
import { useSocket } from "../hooks/useSocket";

// 1. socket sebagai helpers
// const socket = io("http://localhost:3000", {
//   auth: {
//     token: localStorage.getItem("access_token"),
//   },
// });

// 3. socket sebagai global service
// bisa pake react context

function App() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    // 2. socket sebagai service
    const socket = useSocket();
    // const [socket, setSocket] = useState(null);

    // useEffect(() => {
    //   setSocket(
    //     io("http://localhost:3000", {
    //       auth: {
    //         token: localStorage.getItem("access_token"),
    //       },
    //     })
    //   );
    // }, []);

    const handleOnSendMessage = (e) => {
        e.preventDefault();

        // I 1. emit sebuah events
        console.log("Ini adalah messagenya", { message });
        socket?.emit("chats/create", {
            message,
            name: localStorage.getItem("name"),
        });
        setMessage("");
    };

    // I 4. di client bikin listener
    useEffect(() => {
        socket?.on("chats/response", (chats) => {
            setMessages(chats);
        });
    }, [socket]);

    return (
        <>
            {/* kita render chat nya disini */}
            <ul id="messages">
                {/* I 5. render messages */}
                {messages.map((msg, i) => (
                    <li
                        key={i}
                        style={{
                            textAlign:
                                localStorage.getItem("name") === msg.name
                                    ? "right"
                                    : "left",
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
