import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('events-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Café Conversations",
      date: "March 15, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Downtown Café",
      description: "Practice everyday English in a relaxed café setting with native speakers and fellow learners."
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Business English Workshop",
      date: "March 22, 2024", 
      time: "6:30 PM - 8:30 PM",
      location: "Business Center",
      description: "Master professional communication skills through role-playing and real business scenarios."
    },
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cultural Exchange Night",
      date: "March 29, 2024",
      time: "7:30 PM - 9:30 PM", 
      location: "Community Hall",
      description: "Share stories, traditions, and language tips with people from around the world."
    }
  ];

  return (
    <section id="events" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join Our Next Escape
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your English to the next level? Check out our upcoming events 
            and choose the perfect opportunity to practice and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index}
              className={`bg-background border-border overflow-hidden hover-glow transition-all duration-700 ${
                isVisible 
                  ? `fade-in-up opacity-100 ${index === 1 ? 'fade-in-up-delay-1' : index === 2 ? 'fade-in-up-delay-2' : ''}` 
                  : 'opacity-0 transform translate-y-8'
              }`}
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
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;