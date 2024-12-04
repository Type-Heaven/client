import { useEffect, useState } from "react";
import ArenaGames from "../components/ArenaGames";
import Background from "../components/Background";
import ChatModal from "../components/ChatModal";
import HeaderInfo from "../components/HeaderInfo";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";

export default function MainPage() {
  const [players, setPlayers] = useState([]);
  const socket = useSocket();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    setPlayers([]);
    localStorage.removeItem("access_token"); 

    navigate("/");
  };

  
  useEffect(() => {
    socket?.on("player", (args) => {
      // console.log(args.players[0].point);
      setPlayers(args.players);
      console.log(players);
      
    });

    return () => {
      socket?.off("player");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative h-screen">
      <Background />
      <HeaderInfo players={players}/>
      <ArenaGames />
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
