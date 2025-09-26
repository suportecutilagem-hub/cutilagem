import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    id: 1,
    name: "Juliana Santos",
    location: "Rio de Janeiro - RJ",
    message: "Nunca imaginei que aprenderia tão rápido e com tanta confiança!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    location: "São Paulo - SP",
    message: "O curso mudou minha vida, hoje atendo várias clientes e conquistei minha independência!",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 3,
    name: "Ana Carolina",
    location: "Belo Horizonte - MG",
    message: "Técnica incrível! Meus clientes ficaram impressionados com o resultado. Recomendo demais!",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <AnimatedSection
          key={testimonial.id}
          className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          data-testid={`testimonial-card-${testimonial.id}`}
        >
          <img
            src={testimonial.image}
            alt={`${testimonial.name} - Cliente satisfeita`}
            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            data-testid={`testimonial-image-${testimonial.id}`}
          />
          <p className="text-lg italic mb-4" data-testid={`testimonial-message-${testimonial.id}`}>
            "{testimonial.message}"
          </p>
          <div className="text-primary font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
            {testimonial.name}
          </div>
          <div className="text-muted-foreground text-sm" data-testid={`testimonial-location-${testimonial.id}`}>
            {testimonial.location}
          </div>
          <div className="flex justify-center mt-2" data-testid={`testimonial-rating-${testimonial.id}`}>
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-yellow-400" />
            ))}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
