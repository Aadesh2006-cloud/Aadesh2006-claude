import { unskilledServices, skilledServices } from '@/data';
import { ArrowRight } from 'lucide-react';

type Props = {
  onBook: (category: 'unskilled' | 'skilled') => void;
};

export default function Categories({ onBook }: Props) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Two categories, endless help
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-950 tracking-tight">
            Pick the kind of help you need
          </h2>
          <p className="mt-4 text-lg text-brand-950/60 leading-relaxed">
            Whether it is everyday household chores or a job that needs a
            specialist, we have a verified professional ready for you.
          </p>
        </div>

        {/* Unskilled */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide">
                Category 1
              </span>
              <h3 className="mt-3 font-display font-bold text-2xl text-brand-950">
                Household Helpers
              </h3>
              <p className="mt-1 text-brand-950/60">
                Book by the hour for cleaning, errands, elder care and more.
              </p>
            </div>
            <div className="hidden sm:block text-right shrink-0">
              <p className="font-display font-extrabold text-3xl text-brand-700">
                ₹150<span className="text-lg text-brand-950/40 font-semibold">/hr</span>
              </p>
              <p className="text-sm text-brand-950/50">Flat rate, no surprises</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {unskilledServices.map((s) => (
              <button
                key={s.id}
                onClick={() => onBook('unskilled')}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-brand-50/60 border border-brand-100 hover:border-brand-300 hover:bg-white hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1 transition-all"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-white text-brand-700 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <s.icon className="w-6 h-6" />
                </span>
                <span className="text-sm font-semibold text-brand-950 text-center leading-tight">
                  {s.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skilled */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-bold uppercase tracking-wide">
                Category 2
              </span>
              <h3 className="mt-3 font-display font-bold text-2xl text-brand-950">
                Skilled Professionals
              </h3>
              <p className="mt-1 text-brand-950/60">
                Plumbers, electricians, car mechanics and repair specialists.
              </p>
            </div>
            <button
              onClick={() => onBook('skilled')}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Book a pro
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skilledServices.map((s) => (
              <button
                key={s.id}
                onClick={() => onBook('skilled')}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white to-brand-50/40 border border-brand-100 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-600/10 hover:-translate-y-1 transition-all text-left"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-900 text-white shrink-0 group-hover:bg-accent-500 transition-colors">
                  <s.icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-semibold text-brand-950 leading-tight">{s.name}</p>
                  <p className="text-xs text-brand-950/50 mt-0.5">On-demand</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
