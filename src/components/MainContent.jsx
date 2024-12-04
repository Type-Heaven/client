export default function MainContent({ name, setName, submitHandler }) {
    return (
      <div className="bg-gray-800 bg-opacity-80 text-center rounded-lg shadow-xl p-8 w-full max-w-md border border-gray-700 backdrop-blur-sm z-20 relative">
        <h1 className="text-5xl font-extrabold text-white uppercase mb-8 tracking-widest glow pt-2">
          Type Heaven
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Ready to hit the galaxy? Enter your name to begin!
        </p>
        <form className="space-y-6" onSubmit={submitHandler}>
          {/* Input Nama */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-3 text-lg bg-black bg-opacity-60 text-white border border-cyan-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-all shadow-inner"
          />
          {/* Tombol Start */}
          <button
            type="submit"
            className="w-full py-3 text-xl font-bold bg-cyan-400 text-gray-900 rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-transform transform hover:scale-105"
          >
            Start Racing
          </button>
        </form>
      </div>
    );
  }
  