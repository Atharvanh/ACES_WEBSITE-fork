export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center">
      {/* Visual Page Boundary Helper */}
      <div className="w-full max-w-6xl border-2 border-dashed border-[#b22b2f]/30 rounded-xl p-12 text-center bg-[#1a1a1a]/50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b22b2f] text-white text-xs uppercase font-mono tracking-widest px-4 py-1 rounded">
          Home Page
        </div>
        
        <div className="space-y-6 py-20">
          <h1 className="font-display text-4xl font-extrabold text-[#d1a550] uppercase tracking-wide">
            Home Page Content Area
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto font-mono">
            Edit this page at: <br />
            <span className="text-white">src/pages/home/Home.jsx</span>
          </p>
          <div className="pt-4 flex justify-center gap-2">
            <span className="h-1.5 w-16 bg-[#b22b2f] rounded"></span>
            <span className="h-1.5 w-4 bg-[#d1a550] rounded"></span>
            <span className="h-1.5 w-4 bg-gray-600 rounded"></span>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-gray-500 font-mono border-t border-dashed border-gray-800 pt-2">
          <span>Boundary Left</span>
          <span>100% Width Container</span>
          <span>Boundary Right</span>
        </div>
      </div>
    </div>
  );
}
