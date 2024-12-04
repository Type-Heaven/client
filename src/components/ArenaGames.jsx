export default function ArenaGames() {
    return (
      <div className="relative w-full max-w-lg h-80 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mt-8 mb-8">
        {/* Garis Penanda */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-0.5 bg-dashed border-t border-yellow-500"
            ></div>
          ))}
        </div>
  
        {/* Roket */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2">
          {/* Roket Player */}
          <div className="flex flex-col items-center space-y-1">
            <span className="text-cyan-400 font-semibold text-sm">Guest (you)</span>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              🚀
            </div>
          </div>
        </div>
  
        {/* Roket Kompetitor */}
      </div>
    );
  }