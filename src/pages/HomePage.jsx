import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";
import Background from "../components/Background";
import MainContent from "../components/MainContent";

export default function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const socket = useSocket();

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      socket?.emit("player/name", { name });
      localStorage.setItem("name", name)
      setName("");
    }
    navigate("/play");
  };

  useEffect(() => {
    socket?.on("players/update", (updatedNames) => {
      setNames(updatedNames);
    });

    return () => {
      socket?.off("players/update");
    };
  }, [socket]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden flex items-center justify-center">
      <Background />
      <MainContent
        name={name}
        setName={setName}
        submitHandler={submitHandler}
      />
    </div>
  );
}
