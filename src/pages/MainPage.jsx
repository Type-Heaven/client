import Background from "../components/Background";
import ChatModal from "../components/ChatModal";
import HeaderInfo from "../components/HeaderInfo";
import InputBox from "../components/InputBox";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative h-screen">
      <Background />
      <HeaderInfo />
      <InputBox />
      <ChatModal />

      {/* Tombol Exit */}
      <button
        className="fixed bottom-6 right-6 bg-white text-white p-3 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-4 focus:ring-red-300 transition"
        id="exitButton"
      >
        <span className="text-2xl">😈</span>
      </button>
    </div>
  );
}
