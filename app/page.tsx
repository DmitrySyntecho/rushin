import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesCarousel from '@/components/ServicesCarousel';
import Notarization from '@/components/Notarization';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import {
  TrustMetrics,
  HowItWorks,
  UrgentSameDay,
  International,
  Immigration,
  Offices,
  Team,
  Reviews,
  FinalCta,
} from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <ServicesCarousel />
        <HowItWorks />
        <UrgentSameDay />
        <Notarization />
        <International />
        <Immigration />
        <Offices />
        <Team />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
