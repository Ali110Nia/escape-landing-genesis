import { useEffect, useState } from 'react';
import { MessageSquare, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MethodSection = () => {
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

    const section = document.getElementById('method-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const methods = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Interactive Scenarios",
      description: "Step into real-world simulations, from ordering coffee to pitching a business idea."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Guided Conversation",
      description: "Our sessions are structured to maximize your speaking time and build practical vocabulary."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Focused",
      description: "Learn and grow with a supportive community of fellow language learners."
    }
  ];

  return (
    <section id="method-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Method
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in learning through doing. Our approach combines structured guidance 
            with real-world practice to accelerate your English fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <Card 
              key={index}
              className={`bg-card border-border hover-glow transition-all duration-700 ${
                isVisible 
                  ? `fade-in-up opacity-100 ${index === 1 ? 'fade-in-up-delay-1' : index === 2 ? 'fade-in-up-delay-2' : ''}` 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {method.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;