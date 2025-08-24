import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/ui/structured-data';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const events = [
    {
      id: 'cafe-conversations',
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Café Conversations",
      date: "March 15, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Downtown Café",
      description: "Practice everyday English in a relaxed café setting with native speakers and fellow learners."
    },
    {
      id: 'business-english-workshop',
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Business English Workshop",
      date: "March 22, 2024", 
      time: "6:30 PM - 8:30 PM",
      location: "Business Center",
      description: "Master professional communication skills through role-playing and real business scenarios."
    },
    {
      id: 'cultural-exchange-night',
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cultural Exchange Night",
      date: "March 29, 2024",
      time: "7:30 PM - 9:30 PM", 
      location: "Community Hall",
      description: "Share stories, traditions, and language tips with people from around the world."
    },
    {
      id: 'pronunciation-bootcamp',
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pronunciation Bootcamp",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Language Center",
      description: "Intensive session focused on improving pronunciation, intonation, and speaking clarity."
    },
    {
      id: 'movie-discussion-night',
      image: "https://images.unsplash.com/photo-1489599511086-c57bd0174c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Movie Discussion Night",
      date: "April 12, 2024",
      time: "7:00 PM - 9:30 PM",
      location: "Community Theater",
      description: "Watch an English film together and engage in thoughtful discussions about themes and language."
    },
    {
      id: 'storytelling-circle',
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Storytelling Circle",
      date: "April 19, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Library Conference Room",
      description: "Share personal stories and experiences while practicing narrative skills and active listening."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "The Escape Group Events",
    "description": "Interactive English learning events and workshops",
    "organizer": {
      "@type": "Organization",
      "name": "The Escape Group"
    },
    "location": {
      "@type": "Place",
      "name": "Various Locations"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={structuredData} />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community for immersive English learning experiences. 
              Each event is designed to help you practice real-world conversation skills in a supportive environment.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card 
                  key={event.id}
                  className={`bg-card border-border overflow-hidden hover-glow transition-all duration-700 ${
                    isVisible 
                      ? `fade-in-up opacity-100 ${index === 1 ? 'fade-in-up-delay-1' : index === 2 ? 'fade-in-up-delay-2' : ''}` 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => navigate(`/events/${event.id}`)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;