import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Loved by customers
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-950 tracking-tight">
            What people say about us
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl p-6 border border-brand-100 shadow-sm hover:shadow-xl hover:shadow-brand-600/10 hover:-translate-y-1 transition-all"
            >
              <Quote className="w-8 h-8 text-brand-200" />
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? 'text-accent-500 fill-accent-500'
                        : 'text-brand-200'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-brand-950/70 leading-relaxed text-sm">
                "{t.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-brand-100">
                <p className="font-display font-bold text-brand-950">{t.name}</p>
                <p className="text-xs text-brand-950/50 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
