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
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedSection>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                  <span className="text-primary">CUTILAGEM RUSSA PROFISSIONAL:</span><br/>
                  <span className="text-black">Transforme sua Carreira em 8 Minutos!</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection>
                <h2 className="text-xl md:text-2xl text-foreground font-bold" data-testid="hero-subtitle">
                  🎯 <span className="text-primary">FATURE R$ 2.000+ POR MÊS</span> dominando a técnica mais procurada por clientes VIP
                </h2>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-4 rounded-lg" data-testid="hero-value-proposition">
                  <p className="text-lg md:text-xl text-green-800 font-semibold">
                    ✅ <strong>Método comprovado</strong> que já transformou <span className="text-primary font-bold">23.000+ manicures</span><br/>
                    ✅ <strong>Aprenda em casa</strong> com certificado profissional reconhecido<br/>
                    ✅ <strong>Suporte vitalício</strong> + 11 bônus exclusivos inclusos
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="pt-6">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl border-4 border-yellow-400 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-sm font-bold mb-2 text-yellow-300">
                        🔥 PROMOÇÃO RELÂMPAGO - ÚLTIMAS 8 VAGAS! 🔥
                      </div>
                      <div className="text-4xl md:text-5xl font-black mb-2">
                        <span className="line-through text-gray-300 text-2xl">R$ 297</span>
                        <span className="text-yellow-300 ml-2">R$ 35</span>
                      </div>
                      <div className="text-sm mb-4 text-red-100">
                        Economia de R$ 262,00 • Desconto de 88%
                      </div>
                      <a
                        href={checkoutUrl}
                        className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 animate-pulse shadow-lg border-2 border-white transform hover:scale-110"
                        data-testid="hero-cta-button"
                      >
                        <i className="fas fa-rocket mr-2"></i>
                        QUERO GARANTIR MINHA VAGA AGORA!
                        <div className="text-sm font-normal mt-1">💳 Acesso Imediato • 100% Seguro</div>
                      </a>
                    </div>
                  </div>
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
                  fetchPriority="high"
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

      {/* PRICING SECTION */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12" data-testid="pricing-section">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="pricing-title">
                Oferta Especial por Tempo Limitado
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-3xl md:text-4xl text-muted-foreground line-through" data-testid="original-price">
                  De R$ 297,00
                </p>
                <p className="text-5xl md:text-7xl font-bold text-primary" data-testid="promotional-price">
                  R$ 35,00
                </p>
                <p className="text-lg text-muted-foreground" data-testid="pricing-description">
                  Oferta especial válida por pouco tempo – últimas 8 vagas disponíveis.
                </p>
              </div>

              <a
                href={checkoutUrl}
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 pulse-border transform hover:scale-105"
                data-testid="pricing-cta-button"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Aproveitar Esta Oferta Agora
              </a>
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
                Referências das Nossas Alunas
              </h3>
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative">
                    <i className="fas fa-star text-yellow-400 text-xl"></i>
                  </div>
                ))}
              </div>
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
                Garantia Total
              </h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="guarantee-description">
                Você estuda no seu ritmo, recebe certificado e conta com suporte exclusivo.{" "}
                <span className="font-bold text-primary">Risco zero para você!</span>
              </p>
              <div className="flex justify-center items-center space-x-4 text-green-500">
                <i className="fas fa-check-circle text-2xl"></i>
                <span className="text-lg font-semibold">100% Seguro e Confiável</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL URGENCY SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <div className="space-y-8" data-testid="final-urgency-section">
              <div className="bg-primary text-primary-foreground py-6 px-8 rounded-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid="final-urgency-title">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  Últimas 8 Vagas Disponíveis!
                </h3>
                <p className="text-lg md:text-xl" data-testid="final-urgency-description">
                  Restam apenas 8 vagas e o valor promocional de R$ 35,00 é por tempo limitado!<br />
                  <span className="font-bold">
                    Mais de 23.000 alunas já transformaram suas carreiras. E você, vai ficar de fora?
                  </span>
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={checkoutUrl}
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 px-12 rounded-lg text-xl md:text-2xl transition-all duration-300 pulse-border transform hover:scale-105"
                  data-testid="final-cta-button"
                >
                  <i className="fas fa-rocket mr-3"></i>
                  QUERO GARANTIR MINHA VAGA AGORA!
                  <div className="text-sm mt-2 opacity-90">Por apenas R$ 35,00</div>
                </a>
              </div>

              <p className="text-sm text-muted-foreground" data-testid="security-note">
                Processamento 100% seguro • Acesso imediato após a compra
              </p>
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
            <div className="text-center mt-12">
              <a
                href={checkoutUrl}
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 pulse-border transform hover:scale-105"
                data-testid="faq-footer-cta-button"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Garantir Minha Vaga Agora por R$ 35,00
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Últimas 8 vagas disponíveis • Oferta por tempo limitado
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
