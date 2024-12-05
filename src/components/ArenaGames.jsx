export default function ArenaGames({ players }) {
  // const maxPoints = 100; // Adjust to the maximum point threshold
  // const progressPercentage = Math.min(player.point / maxPoints, 1) * 100;
  return (
    <div className="relative w-full max-w-lg h-80 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-48 ">
      {/* Garis Penanda */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-0.5 bg-dashed border-t border-yellow-500"
          ></div>
        ))}
      </div>
      <div className="flex w-3/4 mx-auto justify-between">
        {players.map((player, index) => {
          const maxPoints = 100; // Adjust to the maximum point threshold
          const progressPercentage =
            Math.min(player.point / maxPoints, 1) * 100;
          return (
            <div div key={index}>
              {/* Roket */}
              <div
                className="absolute transform -translate-x-1/2 bottom-2 transition-transform"
                style={{
                  bottom: `${progressPercentage}%`, // Dynamically position the rocket
                }}
              >
                {/* Roket Player */}
                <div className="flex flex-col items-center space-y-1 ">
                  <span className="text-cyan-400 font-semibold text-sm">
                    {player?.name}
                  </span>
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    🚀
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Roket Kompetitor */}
    </div>
  );
}
