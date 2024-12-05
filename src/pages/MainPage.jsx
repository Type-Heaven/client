import { useContext, useEffect, useState } from "react";
import ArenaGames from "../components/ArenaGames";
import Background from "../components/Background";
import ChatModal from "../components/ChatModal";
import HeaderInfo from "../components/HeaderInfo";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../contexts/socket/socket-init.context";

export default function MainPage() {
  const [players, setPlayers] = useState([]);
  const [countdown, setCountdown] = useState(5); // Menyimpan countdown waktu
  // const [word, setWord] = useState(""); // Menyimpan kata yang sedang dimainkan
  const [gameStarted, setGameStarted] = useState(false); // Status apakah game sudah dimulai
  const socket = useContext(SocketContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    socket?.emit("logout");
    setPlayers([]);
    localStorage.removeItem("name");
    navigate("/");
  };

  useEffect(() => {
    // Mendapatkan daftar pemain
    socket?.on("player", (args) => {
      setPlayers(args.players);
    });

    // Mendapatkan countdown dari server
    socket?.on("countdown", (newCountdown) => {
      setCountdown(newCountdown);
    });

    // Mendapatkan soal saat game dimulai
    socket?.on("gameStarted", () => {
      setGameStarted(true);
      // setWord(gameData.word); // Menyimpan kata yang sedang dimainkan
    });

    return () => {
      socket?.off("player");
      socket?.off("countdown");
      socket?.off("gameStarted");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative h-screen">
      <Background />
      <HeaderInfo players={players} />

      {/* Menampilkan countdown jika game belum dimulai */}
      {!gameStarted ? (
        <div className="text-4xl text-white absolute top-16">
          <p>Game Starts in: {countdown} seconds</p>
        </div>
      ) : (
        <>
          {/* Jika game sudah dimulai, menampilkan soal dan ArenaGames */}
          {/* <div className="text-4xl text-white absolute top-16">
            <p>Current Word: {word}</p>
          </div> */}
          <ArenaGames
            player={
              players.find((p) => p.name === localStorage.getItem("name")) || {
                name: "",
                point: 0,
              }
            }
          />
        </>
      )}

      <InputBox setPlayers={setPlayers} />
      <ChatModal />

      {/* Tombol Exit */}
      <button
        onClick={handleLogout}
        className="fixed bottom-6 right-6 bg-white text-white p-3 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-4 focus:ring-red-300 transition"
        id="exitButton"
      >
        <span className="text-2xl">😈</span>
      </button>
    </div>
  );
}
