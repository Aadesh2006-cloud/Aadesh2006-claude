import { Search, CalendarCheck, Wrench, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose a service',
    text: 'Browse household helpers or skilled pros and pick what you need.',
  },
  {
    icon: CalendarCheck,
    title: 'Pick a time slot',
    text: 'Tell us when you want the job done. Same-day slots available.',
  },
  {
    icon: Wrench,
    title: 'We do the work',
    text: 'A verified professional arrives at your doorstep, ready to go.',
  },
  {
    icon: BadgeCheck,
    title: 'Pay & rate',
    text: 'Transparent pricing shown upfront. Pay after the job is done.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Simple as 1-2-3-4
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-950 tracking-tight">
            How Serve Ease works
          </h2>
          <p className="mt-4 text-lg text-brand-950/60">
            From booking to a finished job in four easy steps.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative bg-white rounded-2xl p-6 border border-brand-100 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1 transition-all"
            >
              <span className="absolute -top-3 -left-3 grid place-items-center w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold shadow-lg">
                {i + 1}
              </span>
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-100 text-brand-700">
                <s.icon className="w-7 h-7" />
              </span>
              <h3 className="mt-5 font-display font-bold text-lg text-brand-950">
                {s.title}
              </h3>
              <p className="mt-2 text-brand-950/60 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
