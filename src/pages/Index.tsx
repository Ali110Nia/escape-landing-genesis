import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MethodSection from '@/components/MethodSection';
import EventsSection from '@/components/EventsSection';
import TestimonialSection from '@/components/TestimonialSection';
import StructuredData from '@/components/ui/structured-data';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Escape Group",
    "description": "Interactive English learning community focused on real-world conversation practice through events, simulations, and workshops.",
    "url": "https://theescape.group",
    "logo": "https://theescape.group/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://linkedin.com/company/the-escape-group",
      "https://t.me/theescapegroup",
      "https://instagram.com/theescapegroup"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={structuredData} />
      <Navigation />
      <main>
        <HeroSection />
        <MethodSection />
        <EventsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
