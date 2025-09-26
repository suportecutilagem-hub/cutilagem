import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

const studentResults = [
  {
    id: 1,
    image: "https://i.postimg.cc/qv3YWvYw/IMG_9086.jpg",
    description: "Resultado incrível da técnica de cutilagem russa"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/NfVSNHNL/IMG_9085.jpg",
    description: "Trabalho profissional de uma de nossas alunas"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/CKC2L6wf/IMG_9089.jpg",
    description: "Técnica perfeita aplicada por nossa aluna"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/9XGsmxbH/1-FBEE8-BC-1-ED5-4-F6-C-A233-60-DCF0-CF5866.jpg",
    description: "Resultado profissional da cutilagem russa"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/MTWFcbG3/IMG_9090.jpg",
    description: "Excelência no acabamento e técnica"
  },
  {
    id: 6,
    image: "https://i.postimg.cc/hGj1dyBY/IMG-9091.jpg",
    description: "Trabalho de qualidade de nossa estudante"
  },
  {
    id: 7,
    image: "https://i.postimg.cc/nLPYY4Vh/IMG-9092.jpg",
    description: "Resultado impecável da técnica aprendida"
  },
  {
    id: 8,
    image: "https://i.postimg.cc/XqMftnCM/IMG-9095.jpg",
    description: "Perfeição na aplicação da cutilagem russa"
  },
  {
    id: 9,
    image: "https://i.postimg.cc/YCt3p2yM/IMG-9093.jpg",
    description: "Trabalho profissional de alta qualidade"
  },
  {
    id: 10,
    image: "https://i.postimg.cc/Z5jL0k13/IMG-9096.jpg",
    description: "Resultado excepcional de nossa aluna"
  },
  {
    id: 11,
    image: "https://i.postimg.cc/ZRvPfW0F/IMG-9094.jpg",
    description: "Técnica avançada aplicada com maestria"
  },
  {
    id: 12,
    image: "https://i.postimg.cc/9fHS2jHh/IMG_9088.jpg",
    description: "Excelência no resultado final"
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
    }, 3000);

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
                <div className="relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={result.image}
                      alt={result.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold">
                    <i className="fas fa-star mr-1"></i>
                    Resultado Real
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
