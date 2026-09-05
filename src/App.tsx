import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Categories from '@/components/Categories';
import HowItWorks from '@/components/HowItWorks';
import SocietyPlans from '@/components/SocietyPlans';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

type Category = 'unskilled' | 'skilled' | 'society';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState<Category>('unskilled');

  const openModal = useCallback((cat: Category = 'unskilled') => {
    setInitialCategory(cat);
    setModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-950 antialiased">
      <Navbar onBook={() => openModal('unskilled')} />
      <main>
        <Hero onBook={() => openModal('unskilled')} />
        <Stats />
        <Categories onBook={(cat) => openModal(cat)} />
        <HowItWorks />
        <SocietyPlans onBook={() => openModal('society')} />
        <Pricing onBook={(cat) => openModal(cat)} />
        <Testimonials />
      </main>
      <Footer />
      <BookingModal
        open={modalOpen}
        initialCategory={initialCategory}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
