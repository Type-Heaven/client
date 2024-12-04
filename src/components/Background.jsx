export default function Background() {
  return (
    <>
      {/* Efek Dekoratif */}
      <div className="absolute inset-0 flex justify-center items-end space-x-4 pointer-events-none z-0">
        <div className="w-1/6 h-2 bg-cyan-400 animate-pulse" />
        <div className="w-1/6 h-2 bg-cyan-400 animate-pulse delay-150" />
        <div className="w-1/6 h-2 bg-cyan-400 animate-pulse delay-300" />
        <div className="w-1/6 h-2 bg-cyan-400 animate-pulse delay-450" />
        <div className="w-1/6 h-2 bg-cyan-400 animate-pulse delay-600" />
      </div>
      {/* Efek Partikel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-cyan-500 blur-sm animate-float" />
        <div className="absolute top-40 right-16 h-3 w-3 rounded-full bg-pink-500 blur-sm animate-float delay-200" />
        <div className="absolute bottom-32 left-24 h-2 w-2 rounded-full bg-yellow-500 blur-sm animate-float delay-400" />
        <div className="absolute bottom-10 right-12 h-4 w-4 rounded-full bg-purple-500 blur-sm animate-float delay-600" />
      </div>
    </>
  );
}
