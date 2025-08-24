import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80"
          alt="Modern cozy cafe interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 ${
            isVisible ? 'fade-in-up opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          Where English Conversation 
          <span className="bg-gradient-primary bg-clip-text text-transparent"> Comes Alive</span>
        </h1>
        
        <p 
          className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'fade-in-up opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          Join our community for real-world English practice through interactive events, 
          simulations, and workshops in a relaxed, supportive setting.
        </p>
        
        <div 
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'fade-in-up opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-lg pulse-button hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/events')}
          >
            See Upcoming Events
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;