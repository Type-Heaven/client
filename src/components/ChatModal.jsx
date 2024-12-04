import React, { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket"; // assuming the custom hook is already available

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Socket connection
  const socket = useSocket();

  // Open and close modal
  const openModal = () => {
    console.log("Modal dibuka");
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  // Handle sending message
  const handleOnSendMessage = (e) => {
    e.preventDefault();
    console.log("Ini adalah messagenya", { message });

    // Emit message to server
    socket?.emit("chats/create", {
      message,
      name: localStorage.getItem("name"),
    });

    setMessage(""); // Clear input after sending
  };

  // Listen for incoming messages
  useEffect(() => {
    socket?.on("chats/response", (chats) => {
      setMessages(chats); // Update messages when new messages are received
    });

    return () => {
      socket?.off("chats/response"); // Cleanup on unmount
    };
  }, [socket]);

  return (
    <>
      {/* Button to Open Chat Modal */}
      <div
        className="absolute top-8 right-8 bg-cyan-400 p-3 rounded-full shadow-lg cursor-pointer hover:bg-cyan-500 transition duration-200"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.5 8.5 0 1 0-8.5 8.5A8.5 8.5 0 0 0 21 11.5zM12 9v3l2 2l2-2V9" />
        </svg>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed top-16 right-8 flex justify-center items-start bg-black bg-opacity-50">
          <div className="bg-gray-800 w-full max-w-md h-96 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-600">
              <h3 className="text-white text-lg">Chat Room</h3>
              <button
                onClick={closeModal}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-64 p-3 overflow-y-auto text-gray-300">
              <div className="space-y-3">
                {messages.map((msg, i) => {
                  const isCurrentUser =
                    localStorage.getItem("name") === msg.name;
                  return (
                    <div
                      key={i}
                      className={`flex items-start ${
                        isCurrentUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs p-2 rounded-lg ${
                          isCurrentUser
                            ? "bg-cyan-400 text-gray-900"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {/* Sender's name */}
                        {!isCurrentUser && (
                          <div
                            className={`text-xs font-semibold mb-1 text-cyan-400 ${
                              isCurrentUser ? "text-right" : "text-left"
                            }`}
                          >
                            {msg.name}
                          </div>
                        )}
                        {/* Message content */}
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-3 border-t border-gray-600">
              <form onSubmit={handleOnSendMessage}>
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                  />
                  <button
                    type="submit"
                    className="py-2 px-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-400 text-sm"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
