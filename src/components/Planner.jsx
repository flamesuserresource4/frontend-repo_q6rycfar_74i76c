import { useState } from 'react';

function Planner() {
  const [form, setForm] = useState({ destination: 'Kerala', days: 5, travelers: 2, budget: 'mid', notes: '' });
  const [itinerary, setItinerary] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const generateItinerary = (e) => {
    e.preventDefault();
    const { destination, days } = form;
    const plan = Array.from({ length: Number(days) }, (_, i) => ({
      day: i + 1,
      title: `Day ${i + 1} in ${destination}`,
      desc: `Curated experiences, local cuisine, and scenic spots in ${destination}.`
    }));
    setItinerary(plan);
  };

  return (
    <section id="planner" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_100%,rgba(16,185,129,0.1),transparent),radial-gradient(600px_200px_at_80%_100%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Plan your trip</h2>
          <p className="mt-2 text-white/70">Tell us a bit and we’ll sketch a personalized itinerary instantly.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={generateItinerary} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Destination</label>
                <select name="destination" value={form.destination} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                  <option>Kerala</option>
                  <option>Rajasthan</option>
                  <option>Himachal</option>
                  <option>Andaman</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Days</label>
                <input name="days" type="number" min="2" max="14" value={form.days} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Travelers</label>
                <input name="travelers" type="number" min="1" max="10" value={form.travelers} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Budget</label>
                <select name="budget" value={form.budget} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-white">
                  <option value="economy">Economy</option>
                  <option value="mid">Mid</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80 mb-1">Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-white" placeholder="Any preferences?" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-3 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
              Generate Itinerary
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            {!itinerary ? (
              <div className="text-white/70">Your itinerary will appear here. Choose Kerala to explore the serene backwaters, tea estates, and Ayurvedic wellness retreats.</div>
            ) : (
              <ul className="space-y-3">
                {itinerary.map((d) => (
                  <li key={d.day} className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                    <div className="text-white font-semibold">{d.title}</div>
                    <div className="text-white/70 text-sm">{d.desc}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planner;
