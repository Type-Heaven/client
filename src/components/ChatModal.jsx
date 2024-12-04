import React, { useState } from "react";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    console.log("Modal dibuka");
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Tombol Open Chat Modal */}
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

      {/* Modal Chat */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-800 w-full max-w-md h-96 rounded-lg shadow-lg overflow-hidden">
            {/* Header Modal */}
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

            {/* Konten Chat */}
            <div className="h-64 p-3 overflow-y-auto text-gray-300">
              <div className="space-y-3">
                {/* Pesan 1 */}
                <div className="flex items-center">
                  <div className="bg-gray-700 p-2 rounded-lg max-w-xs">
                    <p>Hello, how are you?</p>
                  </div>
                </div>
                {/* Pesan 2 */}
                <div className="flex items-center justify-end">
                  <div className="bg-cyan-400 p-2 rounded-lg max-w-xs text-gray-900">
                    <p>I'm good, thanks!</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Input Pesan */}
            <div className="p-3 border-t border-gray-600">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
                <button className="py-2 px-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-400 text-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
