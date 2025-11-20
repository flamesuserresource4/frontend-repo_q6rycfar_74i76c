function DestinationCard({ title, location, price, img, ribbon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
      {ribbon && (
        <div className="absolute top-3 left-3 z-10 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-slate-900">
          {ribbon}
        </div>
      )}
      <img src={img} alt={title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-white/70 text-sm">{location}</p>
          </div>
          <div className="text-emerald-300 font-bold">₹{price}</div>
        </div>
        <button className="mt-4 w-full rounded-xl bg-white/10 px-4 py-2 text-white/90 hover:bg-white/20 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

function TopDestinations() {
  const cards = [
    {
      title: 'Backwaters Bliss',
      location: 'Kerala, India',
      price: '24,999',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
      ribbon: 'Most Loved',
    },
    {
      title: 'Golden Desert Escape',
      location: 'Jaisalmer, Rajasthan',
      price: '19,499',
      img: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1600&auto=format&fit=crop',
      ribbon: 'New',
    },
    {
      title: 'Himalayan Serenity',
      location: 'Manali, Himachal',
      price: '22,999',
      img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Tropical Paradise',
      location: 'Andaman Islands',
      price: '29,999',
      img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="destinations" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Top Destinations</h2>
          <p className="mt-2 text-white/70">Handpicked experiences crafted for unforgettable memories. Kerala is featured in our signature packages.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <DestinationCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopDestinations;
