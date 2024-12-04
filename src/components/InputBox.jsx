import React from "react";

export default function InputBox() {
  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-700 bg-opacity-80 px-6 py-4 shadow-inner border border-gray-600 rounded-xl w-[95%] max-w-lg">
      {/* Teks Utama */}
      <div className="text-gray-300 text-sm leading-relaxed mb-3">
        <p className="text-center font-semibold text-base tracking-wide">
          Indah semua cerita. Yang t'lah terlewati dalam satu cinta kita yang
          pernah bermimpi. Jalani semua, hanya ada kita.
        </p>
      </div>
      {/* Input Teks dan Tombol */}
      <div className="flex items-center space-x-2">
        {/* Input Teks */}
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200 text-sm"
        />
        {/* Tombol Kirim */}
        <button className="py-2 px-4 bg-cyan-400 text-gray-900 font-semibold rounded-md shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-transform transform hover:scale-105 text-sm">
          Send
        </button>
      </div>
    </div>
  );
}
