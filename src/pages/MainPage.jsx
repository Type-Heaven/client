import { useContext, useEffect, useState } from "react";
import ArenaGames from "../components/ArenaGames";
import Background from "../components/Background";
import ChatModal from "../components/ChatModal";
import HeaderInfo from "../components/HeaderInfo";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";
// import { useSocket } from "../hooks/useSocket";
import { SocketContext } from "../contexts/socket/socket-init.context";

export default function MainPage() {
  const [players, setPlayers] = useState([]);
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    socket?.emit("logout");
    setPlayers([]);
    localStorage.removeItem("name");
    navigate("/");
  };

  useEffect(() => {
    socket?.on("player", (args) => {
      setPlayers(args.players);
    });
    console.log("Main");
    return () => {
      socket?.off("player");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative h-screen">
      <Background />
      <HeaderInfo players={players} />
      <ArenaGames
        player={
          players.find((p) => p.name === localStorage.getItem("name")) || {
            name: "",
            point: 0,
          }
        }
      />
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
