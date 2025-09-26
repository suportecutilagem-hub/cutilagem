import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

// Imagens reais das alunas - referências autênticas em Full HD
import instagramProfile from "@assets/1-FBEE8-BC-1-ED5-4-F6-C-A233-60-DCF0-CF5866_1758921978541.jpg";
import testimonial1 from "@assets/IMG_9085_1758921978544.jpg";
import testimonial2 from "@assets/IMG_9086_1758921978547.jpg";
import testimonial3 from "@assets/IMG_9088_1758921978549.jpg";
import testimonial4 from "@assets/IMG_9089_1758921978550.jpg";
import testimonial5 from "@assets/IMG_9090_1758921978552.jpg";
import testimonial6 from "@assets/IMG-9091_1758921978553.jpg";
import testimonial7 from "@assets/IMG-9092_1758921978554.jpg";
import testimonial8 from "@assets/IMG-9093_1758921978556.jpg";
import testimonial9 from "@assets/IMG-9094_1758921978558.jpg";
import testimonial10 from "@assets/IMG-9095_1758921978561.jpg";
import testimonial11 from "@assets/IMG-9096_1758921978568.jpg";

const studentResults = [
  {
    id: 1,
    image: instagramProfile,
    description: "Nosso perfil oficial com mais de 23.000 alunas transformadas"
  },
  {
    id: 2,
    image: testimonial1,
    description: "Feedback: 'Estudar nunca é demais' - Aluna aproveitando o curso"
  },
  {
    id: 3,
    image: testimonial2,
    description: "Trabalho refinado demonstrando domínio da técnica ensinada"
  },
  {
    id: 4,
    image: testimonial3,
    description: "Aplicação das brocas diamantadas com técnica correta"
  },
  {
    id: 5,
    image: testimonial4,
    description: "Aluna compartilhando conhecimento: 'Buscando conhecimento'"
  },
  {
    id: 6,
    image: testimonial5,
    description: "Remoção de esmalte em gel + Cutilagem Russa - Aula completa"
  },
  {
    id: 7,
    image: testimonial6,
    description: "Feedback positivo da aluna Cinthya Lima sobre o curso"
  },
  {
    id: 8,
    image: testimonial7,
    description: "Aluna praticando: 'Aprendo depois coloco em prática'"
  },
  {
    id: 9,
    image: testimonial8,
    description: "Depoimento: 'Ok, muito obrigada. Estou amando o curso'"
  },
  {
    id: 10,
    image: testimonial9,
    description: "Feedback da @ccarolpimenta sobre a qualidade do curso"
  },
  {
    id: 11,
    image: testimonial10,
    description: "Aluna ansiosa para começar: 'Teremos grandes novidades!'"
  },
  {
    id: 12,
    image: testimonial11,
    description: "Comentário positivo: 'Eu simplesmente amei o curso, super recomendo'"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 768) {
        setVisibleImages(1);
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2);
      } else {
        setVisibleImages(4);
      }
    };

    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + visibleImages) >= studentResults.length ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', updateVisibleImages);
    };
  }, [visibleImages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + visibleImages) >= studentResults.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, studentResults.length - visibleImages) : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Carrossel Principal */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
        >
          {studentResults.map((result) => (
            <div 
              key={result.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleImages}%` }}
            >
              <AnimatedSection className="group">
                <div className="relative bg-card rounded-xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-300 md:transform md:hover:scale-105">
                  <div className="flex justify-center items-center overflow-hidden bg-gray-50 min-h-[250px]">
                    <img
                      src={result.image}
                      alt={result.description}
                      className="max-w-full max-h-full h-auto object-contain transition-transform duration-300 md:group-hover:scale-105"
                      style={{ 
                        imageRendering: 'auto',
                        width: 'auto',
                        height: 'auto'
                      }}
                      loading="lazy"
                      data-testid={`result-image-${result.id}`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium" data-testid={`result-description-${result.id}`}>
                        {result.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    <i className="fas fa-certificate mr-1"></i>
                    Referências
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        data-testid="carousel-prev-button"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        data-testid="carousel-next-button"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(studentResults.length / visibleImages) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / visibleImages) === index
                ? 'bg-primary scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            data-testid={`carousel-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
