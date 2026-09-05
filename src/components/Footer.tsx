import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Ready to get your work done?
            </h3>
            <p className="mt-2 text-brand-200/70">
              Book a service in under a minute. Help is just a tap away.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href="tel:+911800000000"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-950 font-semibold hover:bg-brand-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              1800-000-0000
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-700 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Wrench className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-xl text-white">
              Serve<span className="text-brand-400">Ease</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-brand-200/60 leading-relaxed max-w-xs">
            Verified household helpers and skilled professionals, delivered to
            your doorstep across India.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['Home Cleaning', 'Elderly Care', 'Plumber', 'Electrician', 'Car Breakdown', 'AC Service'].map((s) => (
              <li key={s}>
                <a href="#services" className="text-brand-200/60 hover:text-white transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['About Us', 'Society Plans', 'Become a Partner', 'Careers', 'Privacy Policy', 'Terms of Service'].map((s) => (
              <li key={s}>
                <a href="#" className="text-brand-200/60 hover:text-white transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span className="text-brand-200/60">1800-000-0000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span className="text-brand-200/60">hello@serveease.in</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
              <span className="text-brand-200/60">Available across 20+ Indian cities</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-200/50">
          <p>© 2026 Serve Ease. All rights reserved.</p>
          <p>Made with care for households across India.</p>
        </div>
      </div>
    </footer>
  );
}
