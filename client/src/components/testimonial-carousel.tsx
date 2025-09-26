import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

const studentResults = [
  {
    id: 1,
    image: "https://i.postimg.cc/qv3YWvYw/IMG_9086.jpg",
    description: "Cutilagem russa com acabamento profissional e precisão técnica"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/NfVSNHNL/IMG_9085.jpg",
    description: "Trabalho refinado demonstrando domínio da técnica ensinada"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/CKC2L6wf/IMG_9089.jpg",
    description: "Aplicação impecável dos fundamentos aprendidos no curso"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/9XGsmxbH/1-FBEE8-BC-1-ED5-4-F6-C-A233-60-DCF0-CF5866.jpg",
    description: "Excelência técnica com resultado de padrão profissional"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/MTWFcbG3/IMG_9090.jpg",
    description: "Cutícula perfeita utilizando a metodologia russa ensinada"
  },
  {
    id: 6,
    image: "https://i.postimg.cc/hGj1dyBY/IMG-9091.jpg",
    description: "Demonstração da técnica avançada com precisão e cuidado"
  },
  {
    id: 7,
    image: "https://i.postimg.cc/nLPYY4Vh/IMG-9092.jpg",
    description: "Trabalho profissional evidenciando o aprendizado completo"
  },
  {
    id: 8,
    image: "https://i.postimg.cc/XqMftnCM/IMG-9095.jpg",
    description: "Aplicação magistral da cutilagem russa com acabamento superior"
  },
  {
    id: 9,
    image: "https://i.postimg.cc/YCt3p2yM/IMG-9093.jpg",
    description: "Referência de qualidade técnica e profissionalismo"
  },
  {
    id: 10,
    image: "https://i.postimg.cc/Z5jL0k13/IMG-9096.jpg",
    description: "Trabalho exemplar mostrando domínio completo da técnica"
  },
  {
    id: 11,
    image: "https://i.postimg.cc/ZRvPfW0F/IMG-9094.jpg",
    description: "Execução perfeita com atenção aos detalhes profissionais"
  },
  {
    id: 12,
    image: "https://i.postimg.cc/9fHS2jHh/IMG_9088.jpg",
    description: "Resultado de excelência técnica e padrão internacional"
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
                  <div className="overflow-hidden">
                    <img
                      src={result.image}
                      alt={result.description}
                      className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
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
                    Portfólio Certificado
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
