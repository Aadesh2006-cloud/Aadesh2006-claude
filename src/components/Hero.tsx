import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { heroImages } from '@/data';

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-accent-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Trusted by 12,000+ households
          </span>

          <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-brand-950">
            Any service,
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              at your doorstep.
            </span>
          </h1>

          <p className="mt-6 text-lg text-brand-950/60 leading-relaxed max-w-xl">
            From a one-hour home cleaning to a skilled electrician, Serve Ease
            connects you with verified professionals. Book in seconds, pay a
            fair price, and relax.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBook}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-xl shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all"
            >
              Book a Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-brand-200 text-brand-800 font-semibold hover:bg-brand-50 transition-colors"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-brand-950/70">
              <Clock className="w-4 h-4 text-brand-600" />
              Starting at <span className="font-bold text-brand-800">₹150/hr</span>
            </div>
            <div className="flex items-center gap-2 text-brand-950/70">
              <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="font-bold text-brand-800">4.9/5</span> average rating
            </div>
            <div className="flex items-center gap-2 text-brand-950/70">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              Background-verified pros
            </div>
          </div>
        </div>

        {/* right — image collage */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] animate-fade-in">
          <div className="absolute top-0 right-0 w-[62%] h-[60%] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src={heroImages.cleaning}
              alt="Professional home cleaning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[58%] h-[55%] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 animate-float">
            <img
              src={heroImages.repair}
              alt="Skilled repair worker"
              className="w-full h-full object-cover"
            />
          </div>
          {/* floating price card */}
          <div className="absolute bottom-8 right-2 sm:right-6 bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-4 w-44 animate-float" style={{ animationDelay: '1.5s' }}>
            <p className="text-xs font-medium text-brand-950/50">Hourly helper</p>
            <p className="font-display font-extrabold text-3xl text-brand-800 mt-0.5">
              ₹150<span className="text-base font-semibold text-brand-950/40">/hr</span>
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-brand-950/60">Available now</span>
            </div>
          </div>
          {/* rating badge */}
          <div className="absolute top-4 left-0 bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 px-4 py-3 flex items-center gap-2.5">
            <div className="grid place-items-center w-9 h-9 rounded-xl bg-accent-100">
              <Star className="w-5 h-5 text-accent-600 fill-accent-500" />
            </div>
            <div>
              <p className="font-display font-bold text-brand-950 leading-none">4.9</p>
              <p className="text-[11px] text-brand-950/50 mt-0.5">8,400 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
