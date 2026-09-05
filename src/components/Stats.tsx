import { Clock, Users, ShieldCheck, BadgeIndianRupee } from 'lucide-react';

const stats = [
  { icon: Users, value: '12,000+', label: 'Households served' },
  { icon: Clock, value: '25 min', label: 'Average arrival time' },
  { icon: ShieldCheck, value: '100%', label: 'Background verified' },
  { icon: BadgeIndianRupee, value: '₹150', label: 'Starting hourly rate' },
];

export default function Stats() {
  return (
    <section className="bg-brand-600 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left"
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/15 text-white shrink-0">
              <s.icon className="w-6 h-6" />
            </span>
            <div className="mt-2 sm:mt-0">
              <p className="font-display font-extrabold text-2xl text-white leading-none">
                {s.value}
              </p>
              <p className="text-sm text-brand-100/80 mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
