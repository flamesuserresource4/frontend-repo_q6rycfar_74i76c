import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 ring-1 ring-white/20 shadow-inner" />
            <div className="leading-tight">
              <div className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent font-display">
                Maximillian
              </div>
              <div className="-mt-1 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/70">
                Holidays
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/90">
            <a href="#destinations" className="hover:text-white transition-colors">Top Destinations</a>
            <a href="#planner" className="hover:text-white transition-colors">Plan Trip</a>
            <a href="#about" className="hover:text-white transition-colors">Why Us</a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/90">
            <Menu size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
