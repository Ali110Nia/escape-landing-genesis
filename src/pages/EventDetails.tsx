import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/ui/structured-data';

const EventDetails = () => {
  const { eventId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '' });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Event data lookup
  const events = {
    'cafe-conversations': {
      title: "Café Conversations",
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "March 15, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Downtown Café",
      price: "Free for Members",
      description: "Join us for an evening of casual English conversation in a relaxed café setting. This event is perfect for learners of all levels who want to practice their speaking skills with native speakers and fellow language enthusiasts.",
      agenda: [
        "Welcome and introductions (15 minutes)",
        "Icebreaker activities to get everyone talking",
        "Small group conversations on various topics",
        "Vocabulary building exercises",
        "Closing circle and feedback session"
      ]
    },
    'business-english-workshop': {
      title: "Business English Workshop",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "March 22, 2024",
      time: "6:30 PM - 8:30 PM",
      location: "Business Center",
      price: "$25",
      description: "Master professional communication skills through interactive role-playing and real business scenarios. This workshop is designed for professionals who want to improve their English for workplace situations.",
      agenda: [
        "Professional email writing workshop",
        "Phone call and video conference practice",
        "Presentation skills development",
        "Networking conversation practice",
        "Q&A and professional development tips"
      ]
    },
    'cultural-exchange-night': {
      title: "Cultural Exchange Night",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "March 29, 2024",
      time: "7:30 PM - 9:30 PM",
      location: "Community Hall",
      price: "$10",
      description: "Share stories, traditions, and language tips with people from around the world. This multicultural event celebrates diversity while providing excellent opportunities for English practice.",
      agenda: [
        "Cultural presentation sharing",
        "Traditional story telling",
        "Language exchange sessions",
        "Cultural food tasting",
        "Group discussions on global topics"
      ]
    }
  };

  const event = events[eventId as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground">The event you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phoneNumber) {
      setIsRegistered(true);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": event.date,
    "location": {
      "@type": "Place",
      "name": event.location
    },
    "organizer": {
      "@type": "Organization",
      "name": "The Escape Group"
    },
    "offers": {
      "@type": "Offer",
      "price": event.price,
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={structuredData} />
      <Navigation />
      <main className="pt-20">
        {/* Hero Image */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isVisible ? 'scale-100' : 'scale-110'
            }`}
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <h1 className={`text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}>
                {event.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Event Information */}
              <div className="lg:col-span-2">
                <div className={`transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">About This Event</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {event.description}
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-4">What You'll Do</h3>
                  <ul className="space-y-3 mb-8">
                    {event.agenda.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Event Details Box */}
                <Card className={`bg-card border-border mb-8 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Event Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{event.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Registration Form */}
                <Card className={`bg-card border-border transition-all duration-700 delay-600 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                  <CardContent className="p-6">
                    {!isRegistered ? (
                      <>
                        <h3 className="text-lg font-semibold text-foreground mb-6">Reserve Your Spot</h3>
                        <form onSubmit={handleRegistration} className="space-y-4">
                          <div>
                            <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                            <Input
                              id="fullName"
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phoneNumber" className="text-foreground">Phone Number *</Label>
                            <Input
                              id="phoneNumber"
                              type="tel"
                              required
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              className="mt-1"
                            />
                          </div>
                          <Button 
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Complete Registration
                          </Button>
                          <Button 
                            type="button"
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            Proceed to Payment
                          </Button>
                        </form>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Thank you!</h3>
                        <p className="text-muted-foreground">Your spot is reserved. We will contact you shortly.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;