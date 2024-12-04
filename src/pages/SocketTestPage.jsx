import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import "../css/SocketTestPage.css";

export default function SocketTestPage() {
  const [question, setQuestion] = useState("");
  const [word, setWord] = useState({});
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState([]);
  const socket = useSocket();
  let questionParagraph = "";

  const submitHandler = (e) => {
    e.preventDefault();
    socket?.emit("player/answer", { answer });
    setAnswer("");
  };
  useEffect(() => {
    socket?.on("player", (args) => {
      // console.log(args.players[0].point);
      setPoints(args.players);
    });
    socket?.on("question", (args) => {
      // console.log(args);
      setQuestion(args.question);
      // console.log(args.question, "ini question");
    });
    socket?.on("wordQuestion", (args) => {
      console.log(args);
      setWord({ word: args.word, offset: args.offset });
      // console.log(args.question, "ini question");
    });
  }, [socket]);
  // console.log("ini question", question);
  return (
    <>
      <ul id="messages">
        {points?.map((point) => (
          <li key={point.name}>
            name: {point.name} with {point.point}
          </li>
        ))}
      </ul>
      <div>
        <h1>{question}</h1>
      </div>
      <div>
        <h3>{word.word}</h3>
      </div>
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
