import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import DocumentTypesSection from '../components/DocumentTypesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TechPreviewSection from '../components/TechPreviewSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DocumentTypesSection />
      <HowItWorksSection />
      <TechPreviewSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
};

export default Index;
