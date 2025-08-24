import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialSection = () => {
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

    const section = document.getElementById('testimonial-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div id="testimonial-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our community members who have 
            transformed their English skills through our interactive approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`bg-card border-border transition-all duration-700 ${
            isVisible ? 'fade-in-up opacity-100' : 'opacity-0'
          }`}>
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Photo */}
                <div className={`flex-shrink-0 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
                }`}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b95b3fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Maria Rodriguez"
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                {/* Quote Content */}
                <div className={`flex-1 text-center lg:text-left transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
                }`}>
                  <div className="flex justify-center lg:justify-start mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                    "The Escape Group completely changed how I approach learning English. Instead of 
                    memorizing grammar rules, I'm actually using the language in real situations. 
                    The confidence I've gained from these sessions has helped me both personally and 
                    professionally. I finally feel comfortable having conversations with native speakers!"
                  </blockquote>
                  
                  <div>
                    <cite className="text-foreground font-semibold text-lg">
                      Maria Rodriguez
                    </cite>
                    <p className="text-muted-foreground text-sm mt-1">
                      Marketing Professional, Spain
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className={`text-center mt-12 transition-all duration-700 delay-600 ${
            isVisible ? 'fade-in-up opacity-100' : 'opacity-0 transform translate-y-8'
          }`}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Read More Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;