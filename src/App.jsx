import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopDestinations from './components/TopDestinations';
import Planner from './components/Planner';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <TopDestinations />
        <Planner />
        <WhyUs />
        <footer className="border-t border-white/10 py-10 text-center text-white/60">
          © {new Date().getFullYear()} Maximillian Holidays — Crafted with love and wanderlust.
        </footer>
      </main>
    </div>
  );
}

export default App;
