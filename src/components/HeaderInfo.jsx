import React from "react";

export default function HeaderInfo() {
  return (
    <div className="absolute top-8 left-8 text-white text-sm bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-md border border-gray-700">
      <p className="font-semibold">
        Name: <span className="text-cyan-400">Guest</span>
      </p>
      <p>
        Points: <span className="text-yellow-400 font-bold">120</span>
      </p>
    </div>
  );
}
