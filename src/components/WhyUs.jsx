function WhyUs() {
  const perks = [
    { title: 'Curated stays', desc: 'Handpicked boutique hotels and eco-resorts.' },
    { title: 'Seamless logistics', desc: 'Flights, transfers, guides—handled end-to-end.' },
    { title: 'Local experiences', desc: 'Authentic food walks, craft tours, and nature trails.' },
    { title: '24/7 support', desc: 'Real humans on chat and call whenever you need.' },
  ];
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why travel with us</h2>
          <p className="mt-2 text-white/70">We blend design, comfort, and local flavor to craft your perfect getaway.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-white font-semibold">{p.title}</div>
              <div className="text-white/70 text-sm mt-1">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
