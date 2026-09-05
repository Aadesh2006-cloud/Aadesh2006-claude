import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Hourly Helper',
    tagline: 'For everyday household chores',
    price: '₹150',
    unit: '/ hour',
    highlight: false,
    features: [
      'Cleaning, dusting & tidying',
      'Market errands',
      'Elderly companionship',
      'Event setup help',
      'Background-verified helper',
      'Same-day availability',
    ],
    cta: 'Book a helper',
  },
  {
    name: 'Skilled Pro',
    tagline: 'For jobs that need a specialist',
    price: 'From ₹299',
    unit: '/ visit',
    highlight: true,
    features: [
      'Plumber, electrician, carpenter',
      'AC & appliance repair',
      'Car breakdown assistance',
      'Painter & home repair',
      'Transparent upfront pricing',
      '30-day service warranty',
    ],
    cta: 'Book a pro',
  },
  {
    name: 'Society Plan',
    tagline: 'Bulk bookings for entire housing societies',
    price: 'Custom',
    unit: '',
    highlight: false,
    features: [
      'AC servicing for 50+ homes',
      'Exclusive bulk discount',
      'Dedicated coordinator',
      'Annual maintenance contract',
      'Priority same-day slots',
      'Single consolidated billing',
    ],
    cta: 'Enquire now',
  },
];

type Props = {
  onBook: (category: 'unskilled' | 'skilled' | 'society') => void;
};

export default function Pricing({ onBook }: Props) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Transparent pricing
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-950 tracking-tight">
            Fair prices, no haggling
          </h2>
          <p className="mt-4 text-lg text-brand-950/60">
            You see the price before you book. What you see is what you pay.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? 'bg-brand-900 text-white shadow-2xl shadow-brand-900/30 ring-1 ring-brand-700'
                  : 'bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:shadow-brand-600/10'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-500 text-brand-950 text-xs font-bold uppercase tracking-wide">
                  Most popular
                </span>
              )}
              <h3 className={`font-display font-bold text-xl ${p.highlight ? 'text-white' : 'text-brand-950'}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.highlight ? 'text-brand-200' : 'text-brand-950/50'}`}>
                {p.tagline}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className={`font-display font-extrabold text-4xl ${p.highlight ? 'text-white' : 'text-brand-800'}`}>
                  {p.price}
                </span>
                <span className={`text-sm mb-1.5 ${p.highlight ? 'text-brand-200' : 'text-brand-950/40'}`}>
                  {p.unit}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`grid place-items-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${
                        p.highlight ? 'bg-accent-500 text-brand-950' : 'bg-brand-100 text-brand-700'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className={`text-sm leading-relaxed ${p.highlight ? 'text-brand-100' : 'text-brand-950/70'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  onBook(p.name === 'Hourly Helper' ? 'unskilled' : p.name === 'Society Plan' ? 'society' : 'skilled')
                }
                className={`mt-7 w-full px-5 py-3 rounded-xl font-semibold transition-all ${
                  p.highlight
                    ? 'bg-accent-500 hover:bg-accent-400 text-brand-950'
                    : 'bg-brand-600 hover:bg-brand-700 text-white'
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
