import { useEffect, useState } from 'react';
import { Play, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/ui/structured-data';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-scale');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const testimonials = [
    {
      type: 'text',
      content: "The Escape Group completely changed how I approach learning English. Instead of memorizing grammar rules, I'm actually using the language in real situations. The confidence I've gained from these sessions has helped me both personally and professionally.",
      author: "Maria Rodriguez",
      role: "Marketing Professional, Spain",
      image: "https://images.unsplash.com/photo-1494790108755-2616b95b3fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      type: 'video',
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "James Chen",
      role: "Software Engineer, Taiwan"
    },
    {
      type: 'text',
      content: "I was so nervous about speaking English before joining The Escape Group. Now I look forward to every session! The community is so supportive and the activities make learning fun.",
      author: "Priya Patel",
      role: "University Student, India",
      image: "https://images.unsplash.com/photo-1544005313-63c4e0d1e127?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      type: 'text',
      content: "After just three months with The Escape Group, I got promoted at work because of my improved English communication skills. The business workshops were incredibly practical.",
      author: "Ahmed Hassan",
      role: "Finance Manager, Egypt",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      type: 'video',
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Sophie Laurent",
      role: "Graphic Designer, France"
    },
    {
      type: 'text',
      content: "The cultural exchange nights are my favorite! I've learned so much about different cultures while practicing English. It's like traveling the world without leaving the city.",
      author: "Carlos Silva",
      role: "Chef, Brazil",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      type: 'text',
      content: "What sets The Escape Group apart is the real-world focus. Every activity prepares you for actual conversations you'll have in daily life. It's practical English learning at its best.",
      author: "Elena Volkov",
      role: "Research Scientist, Russia",
      image: "https://images.unsplash.com/photo-1544005313-63c4e0d1e127?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      type: 'video',
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "David Kim",
      role: "Medical Student, South Korea"
    },
    {
      type: 'text',
      content: "I used to be afraid of making mistakes when speaking English. The Escape Group taught me that mistakes are part of learning. Now I speak with confidence!",
      author: "Fatima Al-Zahra",
      role: "Teacher, Morocco",
      image: "https://images.unsplash.com/photo-1494790108755-2616b95b3fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Escape Group",
    "review": testimonials.filter(t => t.type === 'text').map(testimonial => ({
      "@type": "Review",
      "reviewBody": testimonial.content,
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={structuredData} />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              What Our Members Say
            </h1>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              Real stories from real people who have transformed their English skills through our community. 
              Their success is our greatest achievement.
            </p>
          </div>
        </section>

        {/* Testimonials Masonry Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="testimonial-card break-inside-avoid opacity-0 bg-card border-border overflow-hidden hover-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    {testimonial.type === 'text' ? (
                      <>
                        <div className="flex justify-start mb-4">
                          <Quote className="h-6 w-6 text-primary" />
                        </div>
                        <blockquote className="text-foreground leading-relaxed mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <cite className="text-foreground font-semibold not-italic">
                              {testimonial.author}
                            </cite>
                            <p className="text-muted-foreground text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative group cursor-pointer">
                          <img
                            src={testimonial.thumbnail}
                            alt={`Video testimonial from ${testimonial.author}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/50 transition-colors">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-foreground font-semibold">
                            {testimonial.author}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </>
                    )}
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

export default Testimonials;