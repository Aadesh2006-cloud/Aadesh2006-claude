import { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, CalendarCheck, Sparkles } from 'lucide-react';
import { unskilledServices, skilledServices } from '@/data';

type Category = 'unskilled' | 'skilled' | 'society';

type Props = {
  open: boolean;
  initialCategory: Category;
  onClose: () => void;
};

const slots = [
  '08:00 – 09:00 AM',
  '09:00 – 10:00 AM',
  '11:00 AM – 12:00 PM',
  '02:00 – 03:00 PM',
  '04:00 – 05:00 PM',
  '06:00 – 07:00 PM',
];

const categoryLabel: Record<Category, string> = {
  unskilled: 'Household Helper',
  skilled: 'Skilled Professional',
  society: 'Society Plan',
};

export default function BookingModal({ open, initialCategory, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<Category>(initialCategory);
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setCategory(initialCategory);
      setService('');
      setDate('');
      setSlot('');
      setName('');
      setPhone('');
      setDone(false);
    }
  }, [open, initialCategory]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const services = category === 'skilled' ? skilledServices : unskilledServices;

  const canNext = () => {
    if (step === 0) return !!category;
    if (step === 1) return !!service;
    if (step === 2) return !!date && !!slot;
    if (step === 3) return name.trim().length > 1 && phone.trim().length >= 10;
    return false;
  };

  const submit = () => {
    setDone(true);
  };

  const steps = ['Category', 'Service', 'Schedule', 'Details'];

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto no-scrollbar animate-fade-up">
        {/* header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur px-6 pt-5 pb-4 border-b border-brand-100 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand-600 text-white">
                <CalendarCheck className="w-4.5 h-4.5" />
              </span>
              <h3 className="font-display font-bold text-lg text-brand-950">
                {done ? 'Booking confirmed' : 'Book a service'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="grid place-items-center w-9 h-9 rounded-lg text-brand-950/50 hover:bg-brand-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!done && (
            <div className="mt-4 flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s} className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-brand-100">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        i <= step ? 'bg-brand-600' : 'bg-transparent'
                      }`}
                      style={{ width: i <= step ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* body */}
        <div className="px-6 py-6">
          {done ? (
            <div className="text-center py-6">
              <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-brand-100 text-brand-600">
                <Check className="w-9 h-9" />
              </div>
              <h4 className="mt-5 font-display font-bold text-xl text-brand-950">
                Thank you, {name.split(' ')[0]}!
              </h4>
              <p className="mt-2 text-brand-950/60 leading-relaxed">
                Your <span className="font-semibold text-brand-800">{categoryLabel[category]}</span> for{' '}
                <span className="font-semibold text-brand-800">{service}</span> is booked for{' '}
                <span className="font-semibold text-brand-800">{date}</span> at{' '}
                <span className="font-semibold text-brand-800">{slot}</span>.
              </p>
              <p className="mt-1 text-sm text-brand-950/50">
                We will call you on {phone} to confirm shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-7 px-7 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Step 0: category */}
              {step === 0 && (
                <div className="space-y-3 animate-fade-in">
                  <p className="text-sm font-semibold text-brand-950/70 mb-2">
                    What kind of help do you need?
                  </p>
                  {([
                    { key: 'unskilled', title: 'Household Helper', desc: 'Cleaning, errands, elder care — ₹150/hr', icon: Sparkles },
                    { key: 'skilled', title: 'Skilled Professional', desc: 'Plumber, electrician, car repair & more', icon: CalendarCheck },
                    { key: 'society', title: 'Society Plan', desc: 'Bulk booking for an entire housing society', icon: CalendarCheck },
                  ] as const).map((c) => (
                    <button
                      key={c.key}
                      onClick={() => {
                        setCategory(c.key);
                        setService('');
                      }}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                        category === c.key
                          ? 'border-brand-600 bg-brand-50'
                          : 'border-brand-100 hover:border-brand-300'
                      }`}
                    >
                      <span
                        className={`grid place-items-center w-11 h-11 rounded-xl shrink-0 ${
                          category === c.key ? 'bg-brand-600 text-white' : 'bg-brand-100 text-brand-700'
                        }`}
                      >
                        <c.icon className="w-6 h-6" />
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-brand-950">{c.title}</p>
                        <p className="text-sm text-brand-950/50 mt-0.5">{c.desc}</p>
                      </div>
                      {category === c.key && (
                        <Check className="w-5 h-5 text-brand-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 1: service */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <p className="text-sm font-semibold text-brand-950/70 mb-3">
                    Pick a service
                  </p>
                  {category === 'society' ? (
                    <div className="space-y-3">
                      <p className="text-brand-950/60 text-sm leading-relaxed">
                        Tell us which service your society needs in bulk. Our team
                        will prepare a custom discounted quote for your entire
                        housing society.
                      </p>
                      {['AC Servicing', 'Deep Cleaning', 'Plumbing Check-up', 'Electrical Audit'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setService(s)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                            service === s
                              ? 'border-brand-600 bg-brand-50'
                              : 'border-brand-100 hover:border-brand-300'
                          }`}
                        >
                          <span className="font-medium text-brand-950">{s}</span>
                          {service === s && <Check className="w-5 h-5 text-brand-600" />}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setService(s.name)}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                            service === s.name
                              ? 'border-brand-600 bg-brand-50'
                              : 'border-brand-100 hover:border-brand-300'
                          }`}
                        >
                          <s.icon
                            className={`w-7 h-7 ${
                              service === s.name ? 'text-brand-600' : 'text-brand-700'
                            }`}
                          />
                          <span className="text-sm font-semibold text-brand-950 text-center leading-tight">
                            {s.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: schedule */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="text-sm font-semibold text-brand-950/70">
                      Pick a date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-brand-100 focus:border-brand-500 focus:outline-none text-brand-950"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-brand-950/70">
                      Pick a time slot
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-2.5">
                      {slots.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSlot(s)}
                          className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                            slot === s
                              ? 'border-brand-600 bg-brand-50 text-brand-700'
                              : 'border-brand-100 text-brand-950/70 hover:border-brand-300'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: details */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="text-sm font-semibold text-brand-950/70">
                      Your name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-brand-100 focus:border-brand-500 focus:outline-none text-brand-950"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-brand-950/70">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-brand-100 focus:border-brand-500 focus:outline-none text-brand-950"
                    />
                  </div>

                  {/* summary */}
                  <div className="mt-2 p-4 rounded-xl bg-brand-50 border border-brand-100 space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-950/50">Category</span>
                      <span className="font-semibold text-brand-950">{categoryLabel[category]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-950/50">Service</span>
                      <span className="font-semibold text-brand-950">{service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-950/50">When</span>
                      <span className="font-semibold text-brand-950">{date} · {slot}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* nav */}
              <div className="mt-7 flex items-center justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-950/60 hover:bg-brand-50 disabled:opacity-0 disabled:pointer-events-none transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                {step < 3 ? (
                  <button
                    onClick={() => canNext() && setStep((s) => s + 1)}
                    disabled={!canNext()}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={!canNext()}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    Confirm booking
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
