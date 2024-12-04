import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import MainContent from "../components/MainContent";
import { SocketContext } from "../contexts/socket-init.context";

export default function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  //get socket from context
  const socket = useContext(SocketContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      socket?.emit("player/name", { name });
      localStorage.setItem("name", name);
      setName("");
    }
    navigate("/play");
  };

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
