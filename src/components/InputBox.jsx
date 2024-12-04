import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export default function InputBox({ setPlayers }) {
  const [question, setQuestion] = useState("");
  // const [word, setWord] = useState({});
  const [words, setWords] = useState([]);
  const [visibleWords, setVisibleWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const socket = useSocket();

  const submitHandler = (e) => {
    e.preventDefault();
    if (answer.trim() === words[currentIndex]) {
      setCurrentIndex((prev) => prev + 1);
      setAnswer(""); // Reset input
    }
    socket?.emit("player/answer", { answer });
    // setAnswer("");
  };

  useEffect(() => {
    socket?.on("question", (args) => {
      // console.log(args);
      setQuestion(args.question);
      const splitWords = args.question.split(" ");
      setWords(splitWords);
      setVisibleWords([]); // Reset kata yang terlihat
      setCurrentIndex(0);
      // console.log(args.question, "ini question");
      splitWords.forEach((word, index) => {
        
          setVisibleWords((prev) => [...prev, word]);
      });
    });

    socket?.on("wordQuestion", (args) => {
      console.log(args);
      setWord({ word: args.word, offset: args.offset });
      // console.log(args.question, "ini question");
    });

    socket?.on("player", (args) => {
      // console.log(args.players[0].point);
      setPlayers(args.players);
      console.log(players);
    });
  }, [socket]);

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-700 bg-opacity-80 px-6 py-4 shadow-inner border border-gray-600 rounded-xl w-[95%] max-w-lg">
      {/* Teks Utama */}
      <div className="text-gray-300 text-sm leading-relaxed mb-3">
        <p
          className="text-center font-semibold text-base tracking-wide"
          style={{
            maxWidth: "100%",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {visibleWords.map((word, index) => (
            <span
              key={index}
              className={`mx-1 transition-opacity duration-500 ${
                index < currentIndex
                  ? "text-green-400"
                  : index === currentIndex
                  ? "text-yellow-400 underline"
                  : "text-gray-300 opacity-100"
              }`}
              style={{
                opacity: visibleWords.includes(word) ? 1 : 0,
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
      {/* Form Input Teks dan Tombol */}
      <form onSubmit={submitHandler} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200 text-sm"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-cyan-400 text-gray-900 font-semibold rounded-md shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-transform transform hover:scale-105 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}
