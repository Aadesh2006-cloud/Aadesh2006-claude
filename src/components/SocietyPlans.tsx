import { Building2, Users, Percent, Handshake } from 'lucide-react';
import { heroImages } from '@/data';

const perks = [
  {
    icon: Percent,
    title: 'Bulk discount',
    text: 'When an entire society books a service — like AC servicing for 50 homes — everyone gets an exclusive discounted rate.',
  },
  {
    icon: Handshake,
    title: 'Long-term tie-up',
    text: 'Sign an annual maintenance contract with us and your society gets a dedicated relationship manager and priority slots.',
  },
  {
    icon: Users,
    title: 'One coordinator',
    text: 'No more chasing individual vendors. A single point of contact handles scheduling, billing and quality for every home.',
  },
];

export default function SocietyPlans({ onBook }: { onBook: () => void }) {
  return (
    <section id="society" className="py-20 sm:py-28 bg-brand-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-700/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-accent-700/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={heroImages.family}
                alt="Happy society residents"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl shadow-2xl p-5 w-56">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-100 text-accent-700">
                  <Building2 className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-display font-extrabold text-2xl text-brand-950 leading-none">
                    50+ homes
                  </p>
                  <p className="text-xs text-brand-950/50 mt-1">served in one booking</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-800 text-brand-200 text-sm font-semibold">
              <Building2 className="w-4 h-4" />
              For housing societies
            </span>
            <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              The corporate angle for your whole society
            </h2>
            <p className="mt-5 text-lg text-brand-200/80 leading-relaxed">
              When a society books a service together — say AC servicing for 50
              homes — we bring the team, the discount, and the coordination. One
              contract, one coordinator, everyone wins.
            </p>

            <div className="mt-8 space-y-4">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-800 text-accent-300 shrink-0">
                    <p.icon className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-white">{p.title}</h3>
                    <p className="text-brand-200/70 mt-1 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onBook}
              className="mt-9 px-7 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-400 text-brand-950 font-bold shadow-xl shadow-accent-500/25 hover:-translate-y-0.5 transition-all"
            >
              Enquire about society plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
