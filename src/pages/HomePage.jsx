import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState([]);

  const socket = io("http://localhost:3000/");
  const submitHandler = (e) => {
    e.preventDefault();
    socket.emit("player/answer", message);
    setMessage("");
  };
  useEffect(() => {
    socket.on("player/points", (args) => {
      setPoints(args);
      return () => {
        socket.disconnect();
      };
    });
  }, []);

  return (
    <>
      <ul id="messages">
        {points.map((point) => (
          <li key={point.name}>
            name: {point.name} with {point.point}
          </li>
        ))}
      </ul>
      <form id="form" onSubmit={submitHandler}>
        <input
          id="input"
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}
