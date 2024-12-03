import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState([]);
  const socket = useSocket();

  const submitHandler = (e) => {
    e.preventDefault();
    socket?.emit("player/answer", { message });
    setMessage("");
  };
  useEffect(() => {
    socket?.on("player/points", (points) => {
      setPoints(points);
    });
  }, [socket]);

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
