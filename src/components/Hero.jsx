import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
            Travel that feels like magic.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80">
            Maximillian Holidays crafts immersive journeys with curated stays, seamless planning, and stunning experiences across India and beyond.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#planner" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
              Start Planning
            </a>
            <a href="#destinations" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-colors">
              Explore Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
