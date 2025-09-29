import { AnimatedSection } from "@/components/ui/animated-section";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import heroImage from "@assets/image_1758982671326.png";

const checkoutUrl = "https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880";

const courseModules = [
  "Lista de materiais completa",
  "Onde comprar os materiais",
  "Posicionamento com a tesoura",
  "Não machucar a cliente",
  "Remoção de esmalte em gel + Cutilagem Russa",
  "Blindagem e Esterilização",
  "Cutilagem russa com tesoura e brocas",
  "Técnica em 8 minutos",
  "Como usar brocas corretamente",
  "Como precificar seus serviços",
  "Certificado final",
];

const bonuses = [
  { title: "Curso Manicure Agenda Cheia", icon: "fas fa-gift" },
  { title: "Divulgação no Instagram Oficial", icon: "fab fa-instagram" },
  { title: "Aula Exclusiva de Esmaltação em Gel", icon: "fas fa-paint-brush" },
  { title: "Modelos de Unhas Decoradas", icon: "fas fa-palette" },
  { title: "30% de desconto em materiais", icon: "fas fa-percentage" },
  { title: "Curso Instagram de Sucesso", icon: "fab fa-instagram" },
];

const additionalBonuses = [
  { title: "SPA DOS PÉS", icon: "fas fa-spa" },
  { title: "MANICURE E PEDICURE", icon: "fas fa-hands" },
  { title: "ALONGAMENTO NO MOLDE F1", icon: "fas fa-magic" },
  { title: "ALONGAMENTO DE UNHAS DE FIBRA DE VIDRO", icon: "fas fa-gem" },
  { title: "UNHAS DECORADAS", icon: "fas fa-star" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative bg-background py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Scarcity Banner */}
          <AnimatedSection className="mb-8">
            <div className="bg-primary text-primary-foreground py-3 px-6 rounded-lg text-center animate-blink" data-testid="scarcity-banner">
              <p className="font-bold text-sm md:text-base">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Oferta válida por pouco tempo – apenas 8 vagas disponíveis!
                <i className="fas fa-exclamation-triangle ml-2"></i>
              </p>
            </div>
          </AnimatedSection>

          {/* Hero Image - Mobile Only (between banner and title) */}
          <div className="lg:hidden mb-8">
            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Cutilagem Russa profissional"
                className="rounded-xl shadow-2xl w-full max-w-sm h-auto"
                data-testid="hero-image-mobile"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedSection>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                  Domine a <span className="text-primary">Cutilagem Russa</span> e
                  <span className="block mt-2">Transforme sua Carreira</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="hero-subtitle">
                  A técnica mais valorizada pelas clientes VIP que já transformou
                  <span className="text-primary font-bold"> mais de 23.000 profissionais</span>
                </h2>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="bg-card border-l-4 border-primary p-6 rounded-lg shadow-sm" data-testid="hero-value-proposition">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-lg">Método profissional com resultados em <strong>8 minutos</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-lg">Certificado reconhecido + <strong>11 bônus exclusivos</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-lg">Acesso vitalício + suporte especializado</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="pt-6 space-y-4">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                    <p className="text-sm text-primary font-semibold mb-1">Oferta especial por tempo limitado</p>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-lg text-muted-foreground line-through">R$ 297,00</span>
                      <span className="text-3xl md:text-4xl font-bold text-primary">R$ 35,00</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Apenas 8 vagas restantes</p>
                  </div>
                  
                  <a
                    href={checkoutUrl}
                    className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg md:text-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    data-testid="hero-cta-button"
                  >
                    Garantir Minha Vaga Agora
                  </a>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    <i className="fas fa-shield-alt mr-1"></i>
                    Compra 100% segura • Acesso imediato
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Hero Image - Desktop Only */}
            <div className="hidden lg:block">
              <div>
                <img
                  src={heroImage}
                  alt="Cutilagem Russa profissional"
                  className="rounded-xl shadow-2xl w-full h-auto"
                  data-testid="hero-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="py-2 md:py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="flex flex-col gap-4 max-w-lg mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border-2 border-white/20 whitespace-nowrap">
                <i className="fas fa-infinity text-xl"></i>
                <span>Acesso Vitalício</span>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border-2 border-white/20 whitespace-nowrap">
                <i className="fas fa-gift text-xl"></i>
                <span>11 Bônus Exclusivos</span>
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border-2 border-white/20 whitespace-nowrap">
                <i className="fas fa-certificate text-xl"></i>
                <span>6 Certificados Inclusos</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <AnimatedSection>
            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12" data-testid="value-section">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">23.000+</div>
                  <p className="text-sm text-muted-foreground">Profissionais certificadas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">R$ 2.000+</div>
                  <p className="text-sm text-muted-foreground">Faturamento médio mensal</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8 min</div>
                  <p className="text-sm text-muted-foreground">Técnica completa</p>
                </div>
              </div>
              
              <div className="border-t pt-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="pricing-title">
                  Investimento para sua Transformação
                </h3>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center space-x-4 mb-3">
                    <span className="text-2xl text-muted-foreground line-through" data-testid="original-price">
                      R$ 297,00
                    </span>
                    <span className="text-4xl md:text-5xl font-bold text-primary" data-testid="promotional-price">
                      R$ 35,00
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium" data-testid="pricing-description">
                    Promoção especial • Apenas 8 vagas restantes
                  </p>
                </div>

                <a
                  href={checkoutUrl}
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-12 rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-testid="pricing-cta-button"
                >
                  Começar Agora
                </a>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Acesso imediato • Garantia de satisfação
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COURSE CONTENT SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="course-content-title">
                O que você vai aprender
              </h3>
              <p className="text-lg text-muted-foreground" data-testid="course-content-subtitle">
                Conteúdo completo e atualizado para sua transformação profissional
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <AnimatedSection
                key={index}
                animationType="slide-in"

              >
                <div className="flex items-start space-x-3" data-testid={`course-module-${index}`}>
                  <i className="fas fa-check-circle text-primary text-xl mt-1"></i>
                  <span className="text-lg">{module}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="bonus-title">
                Você recebe 11 bônus incríveis
              </h3>
              <p className="text-xl text-primary font-semibold" data-testid="bonus-subtitle">
                sem pagar nada a mais!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <AnimatedSection
                key={`bonus-${index}`}

              >
                <div
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  data-testid={`bonus-card-${index}`}
                >
                  <i className={`${bonus.icon} text-primary text-2xl mb-3`}></i>
                  <h4 className="font-bold text-lg mb-2">{bonus.title}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL BONUS SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="additional-bonus-title">
                Bônus Adicionais: Cursos Exclusivos Completos com Certificado
              </h3>
              <p className="text-xl text-primary font-semibold" data-testid="additional-bonus-subtitle">
                5 cursos profissionais completos inclusos!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBonuses.map((bonus, index) => (
              <AnimatedSection
                key={`additional-bonus-${index}`}
              >
                <div
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/30"
                  data-testid={`additional-bonus-card-${index}`}
                >
                  <h4 className="font-bold text-xl mb-3">{bonus.title}</h4>
                  <div className="text-sm text-primary font-semibold mt-3 bg-primary/10 px-3 py-2 rounded-full">
                    <i className="fas fa-certificate mr-2"></i>
                    CURSO COMPLETO + CERTIFICADO
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="testimonials-title">
                O que Dizem Nossas Profissionais
              </h3>
              <div className="flex justify-center items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative">
                      <i className="fas fa-star text-yellow-400 text-xl"></i>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">4.9/5.0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado em <span className="font-semibold text-primary">+23.000 avaliações reais</span> de profissionais certificadas
              </p>
            </div>
          </AnimatedSection>

          <TestimonialCarousel />
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg" data-testid="guarantee-section">
              <div className="mb-6">
                <i className="fas fa-shield-alt text-green-500 text-6xl mb-4"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="guarantee-title">
                Nossa Garantia para Você
              </h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="guarantee-description">
                ✅ Acesso vitalício ao conteúdo<br/>
                ✅ Certificado profissional reconhecido<br/>
                ✅ Suporte especializado incluso<br/>
                ✅ Atualizações gratuitas
              </p>
              <div className="flex justify-center items-center space-x-4 text-green-500">
                <i className="fas fa-check-circle text-2xl"></i>
                <span className="text-lg font-semibold">100% Seguro e Confiável</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <div className="space-y-8" data-testid="final-cta-section">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 py-8 px-8 rounded-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid="final-title">
                  Sua Nova Carreira Começa Agora
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-6" data-testid="final-description">
                  Junte-se às <span className="text-primary font-semibold">23.000+ profissionais</span> que já transformaram suas vidas.
                  <br className="hidden md:block" />
                  Restam apenas <span className="text-primary font-semibold">8 vagas</span> para esta turma especial.
                </p>
                
                <div className="bg-card border border-primary/30 rounded-lg p-4 mb-6 inline-block">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg text-muted-foreground line-through">R$ 297</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary">R$ 35</span>
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">88% OFF</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={checkoutUrl}
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 px-12 rounded-lg text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  data-testid="final-cta-button"
                >
                  Garantir Minha Vaga
                  <div className="text-sm mt-1 opacity-90">Acesso imediato</div>
                </a>
              </div>

              <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <i className="fas fa-shield-alt text-green-500"></i>
                  <span>Compra segura</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="fas fa-certificate text-blue-500"></i>
                  <span>Certificado incluído</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="fas fa-infinity text-purple-500"></i>
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ FOOTER SECTION */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="faq-title">
                Perguntas Frequentes
              </h3>
              <p className="text-lg text-muted-foreground" data-testid="faq-subtitle">
                Tire suas dúvidas sobre o curso
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-1">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  Por quanto tempo terei acesso ao curso?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Você terá acesso vitalício ao curso! Poderá assistir quantas vezes quiser, no seu próprio ritmo, sem pressa.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-2">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  Vou receber certificado?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Sim! Você receberá 6 certificados: Cutilagem Russa + 5 cursos bônus completos. Todos os certificados são válidos e reconhecidos.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-3">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  Preciso ter experiência prévia?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Não! O curso é completo e foi desenvolvido tanto para iniciantes quanto para profissionais que querem aperfeiçoar a técnica.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-4">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  Quais materiais preciso ter?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  O curso inclui uma lista completa de materiais e onde comprá-los. Além disso, você ganha 30% de desconto na compra dos materiais!
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-5">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  Como funciona o acesso?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Após a compra, você receberá o acesso imediatamente no seu e-mail. O curso fica disponível 24h por dia na nossa plataforma.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-6">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  São vídeo aulas?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Sim! Todas as aulas e bônus são em vídeo aulas. Conteúdo 100% em vídeo para você aprender de forma prática e visual.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-7">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors">
                  <i className="fas fa-question-circle text-primary mr-2"></i>
                  Posso assistir pelo celular?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Claro! O curso pode ser acessado de qualquer dispositivo: celular, tablet ou computador. Estude onde e quando quiser!
                </div>
              </details>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                Pronta para transformar sua carreira?
              </p>
              <p className="text-sm text-muted-foreground">
                Role para cima e garante sua vaga especial por R$ 35,00
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
