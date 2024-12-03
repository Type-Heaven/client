import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import "../css/SocketTestPage.css";

export default function SocketTestPage() {
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState([]);
  const socket = useSocket();

  const submitHandler = (e) => {
    e.preventDefault();
    socket?.emit("player/answer", { answer });
    setAnswer("");
  };
  useEffect(() => {
    socket?.on("player/points", (args) => {
      // console.log(args.players[0].point);
      setPoints(args.players);
    });
  }, [socket]);

  return (
    <>
      <ul id="messages">
        {points?.map((point) => (
          <li key={point.name}>
            name: {point.name} with {point.point}
          </li>
        ))}
      </ul>
      <form id="form" onSubmit={submitHandler}>
        <input
          id="input"
          autoComplete="off"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}
