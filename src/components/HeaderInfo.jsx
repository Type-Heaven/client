export default function HeaderInfo({ players, host }) {
  return (
    <div className="absolute top-8 left-8 text-white text-sm bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-md border border-gray-700">
      {players.map((player, index) => (
        <div key={index} className="mb-2">
          <p className="font-semibold">
            Name:{" "}
            <span
              className={`text-cyan-400 ${
                player.name === host ? "font-bold underline" : ""
              }`}
            >
              {player.name} {player.name === host && "(Host)"}
            </span>
          </p>
          <p>
            Points:{" "}
            <span className="text-yellow-400 font-bold">{player.point}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
