import {
  Sparkles,
  ShoppingBag,
  HeartPulse,
  PartyPopper,
  Wind,
  Wrench,
  Car,
  Zap,
  Droplets,
  Hammer,
  AirVent,
  PaintRoller,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export const unskilledServices: Service[] = [
  { id: 'cleaning', name: 'Home Cleaning', icon: Sparkles },
  { id: 'market', name: 'Market Errands', icon: ShoppingBag },
  { id: 'elder-care', name: 'Elderly Care', icon: HeartPulse },
  { id: 'event-help', name: 'Event Help', icon: PartyPopper },
  { id: 'dusting', name: 'Dusting & Tidying', icon: Wind },
  { id: 'organize', name: 'Organising', icon: PartyPopper },
];

export const skilledServices: Service[] = [
  { id: 'plumber', name: 'Plumber', icon: Droplets },
  { id: 'electrician', name: 'Electrician', icon: Zap },
  { id: 'car-service', name: 'Car Breakdown', icon: Car },
  { id: 'carpenter', name: 'Carpenter', icon: Hammer },
  { id: 'ac-service', name: 'AC Service', icon: AirVent },
  { id: 'painter', name: 'Painter', icon: PaintRoller },
  { id: 'appliance', name: 'Appliance Repair', icon: Wrench },
];

export const heroImages = {
  cleaning:
    'https://images.pexels.com/photos/6195949/pexels-photo-6195949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  repair:
    'https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  family:
    'https://images.pexels.com/photos/14769676/pexels-photo-14769676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  elderCare:
    'https://images.pexels.com/photos/7446775/pexels-photo-7446775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  car:
    'https://images.pexels.com/photos/6078/road-man-broken-car-6078.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
  pipes:
    'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Working mother, Pune',
    text: 'I booked a helper for one hour and got my entire kitchen cleaned. The person was polite, on time, and the price was completely transparent. No haggling!',
    rating: 5,
  },
  {
    name: 'Rajesh Mehta',
    role: 'Society Secretary, Mumbai',
    text: 'Our 48-flat society signed up for the bulk AC servicing plan. We got a fantastic discount and every single unit was serviced on the same weekend.',
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    role: 'Software engineer, Bangalore',
    text: 'My car broke down on the way to office. I used Serve Ease and a mechanic reached me in 25 minutes. Genuinely a lifesaver.',
    rating: 5,
  },
  {
    name: 'Mohammed Irfan',
    role: 'Restaurant owner, Hyderabad',
    text: 'We use the hourly helpers for pre-event setup every weekend. Booking takes 30 seconds and the staff are always reliable.',
    rating: 4,
  },
];
