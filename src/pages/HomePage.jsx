import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import MainContent from "../components/MainContent";
import { SocketContext } from "../contexts/socket/socket-init.context";
import Swal from "sweetalert2";

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
      navigate("/play");
    } else {
      console.log("please insert name");
      Swal.fire({
        title: "<span style='color:#ff7043;'>Oops!</span>",
        html: "<p style='color:#ffccbc;'>You forgot to enter your name!</p>",
        icon: "error",
        background: "#1e293b",
        color: "#ffccbc",
        confirmButtonText: "<span style='color:#1e293b;'>Try Again</span>",
        confirmButtonColor: "#ff7043",
        customClass: {
          popup: "rounded-lg shadow-lg",
        },
      });
    }
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
