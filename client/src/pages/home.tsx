import { AnimatedSection } from "@/components/ui/animated-section";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Shield, Clock, Users, Award, CheckCircle, Star, TrendingUp, HelpCircle, PlayCircle, BookOpen, Sparkles } from "lucide-react";
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
          {/* Subtle urgency banner */}
          <AnimatedSection className="mb-8">
            <div className="bg-amber-50 border border-amber-200 text-amber-800 py-2 px-4 rounded-lg text-center" data-testid="urgency-banner">
              <p className="text-sm font-medium">
                ⚡ Promoção especial: últimas vagas disponíveis
              </p>
            </div>
          </AnimatedSection>

          {/* Hero Image - Mobile Only */}
          <div className="lg:hidden mb-8">
            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Curso de Cutilagem Russa - Manicure profissional"
                className="rounded-xl shadow-lg w-full max-w-sm h-auto"
                data-testid="hero-image-mobile"
                loading="eager"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedSection>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                  <span className="text-primary">Cutilagem Russa:</span> A Técnica que 
                  <span className="block">Multiplica sua Renda</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="hero-subtitle">
                  Aprenda o método que faz suas clientes pagarem <strong className="text-primary">até 3x mais</strong> pelos seus serviços
                </h2>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-lg" data-testid="social-proof">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">Mais de 23.000 manicures certificadas</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">Faturamento médio: R$ 2.500/mês a mais</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">Certificado profissional reconhecido</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-md">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">R$ 297</span>
                      <span className="text-4xl font-bold text-primary">R$ 19,90</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">93% OFF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Curso completo + 11 bônus exclusivos
                    </p>
                  </div>
                  
                  <a
                    href={checkoutUrl}
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg text-lg text-center transition-all duration-200 shadow-lg hover:shadow-xl"
                    data-testid="main-cta"
                  >
                    Quero Aprender Agora por R$ 19,90
                  </a>
                  
                  <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>Compra Segura</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Acesso Imediato</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Hero Image - Desktop Only */}
            <div className="hidden lg:block">
              <img
                src={heroImage}
                alt="Curso de Cutilagem Russa - Manicure profissional"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE HIGHLIGHTS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              O que você leva neste investimento:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-primary mb-3">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Curso Completo</h4>
                <p className="text-sm text-gray-600">Técnica de Cutilagem Russa do básico ao avançado</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-primary mb-3">
                  <Award className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">11 Bônus Exclusivos</h4>
                <p className="text-sm text-gray-600">Cursos extras que sozinhos valem mais que o investimento</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-primary mb-3">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Certificado Profissional</h4>
                <p className="text-sm text-gray-600">Reconhecido no mercado de trabalho</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INSTRUCTOR AUTHORITY */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">Quem vai te Ensinar</h3>
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold mb-2">Especialista em Cutilagem Russa</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ <strong>8+ anos</strong> de experiência no mercado</p>
                      <p>✓ <strong>23.000+ alunas</strong> certificadas com sucesso</p>
                      <p>✓ <strong>Referência nacional</strong> em técnicas avançadas</p>
                      <p>✓ <strong>Certificada internacionalmente</strong> em Cutilagem Russa</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-primary/20">
                  <p className="text-center text-sm italic text-gray-700">
                    "Minha missão é democratizar o conhecimento da Cutilagem Russa e 
                    ajudar cada manicure a conquistar sua independência financeira."
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BONUS VALUE STACK */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Valor Total do Pacote Completo</h3>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Curso Principal:</h4>
                    <p className="text-gray-600 mb-2">• Cutilagem Russa Completa</p>
                    <p className="text-gray-600 mb-2">• Certificado Profissional</p>
                    <p className="text-gray-600 mb-2">• Suporte Vitalício</p>
                    <p className="text-right font-bold text-primary">R$ 297,00</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">11 Bônus Exclusivos:</h4>
                    <p className="text-gray-600 mb-2">• 6 Cursos Populares e Atualizados</p>
                    <p className="text-gray-600 mb-2">• 5 Cursos Profissionais Extras</p>
                    <p className="text-gray-600 mb-2">• Todos com Certificado</p>
                    <p className="text-right font-bold text-primary">R$ 1.247,00</p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Valor Total:</span>
                    <span className="text-2xl font-bold text-gray-500 line-through">R$ 1.544,00</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-primary">Você paga hoje:</span>
                    <span className="text-4xl font-bold text-primary">R$ 19,90</span>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-center text-red-700 font-semibold">
                      🔥 Economia de R$ 1.524,10 (98,7% de desconto!)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY RUSSIAN MANICURE */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Por que a Cutilagem Russa é tão Valorizada?</h3>
              <p className="text-lg text-gray-600">Descubra por que suas clientes vão preferir você</p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resultado Superior</h4>
                    <p className="text-gray-600">Cutículas perfeitas que duram até 3 semanas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Menos Dor para a Cliente</h4>
                    <p className="text-gray-600">Técnica mais delicada e menos invasiva</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Você Pode Cobrar Mais</h4>
                    <p className="text-gray-600">Clientes pagam 50% a 100% a mais pelo serviço</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-center">Matemática Simples:</h4>
                <div className="space-y-3 text-center">
                  <p className="text-gray-700">
                    <span className="font-semibold">Manicure tradicional:</span> R$ 25
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Cutilagem Russa:</span> R$ 45-60
                  </p>
                  <div className="border-t pt-3 mt-3">
                    <p className="text-primary font-bold text-lg">
                      +R$ 20-35 por cliente
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Com apenas 10 clientes/semana:<br/>
                    <span className="font-semibold text-primary">+R$ 800 a R$ 1.400/mês</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
                  <Award className="w-8 h-8 text-primary mb-3 mx-auto" />
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
                    <Award className="w-4 h-4 mr-2" />
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
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
                <Shield className="w-16 h-16 text-green-500 mb-4 mx-auto" />
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
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">100% Seguro e Confiável</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL MESSAGE SECTION */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Transforme sua Carreira Hoje Mesmo
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mais de <span className="font-semibold text-primary">23.000 manicures</span> já descobriram como 
                aumentar sua renda com a Cutilagem Russa. 
                <span className="block mt-2 font-semibold">
                  Não deixe essa oportunidade passar!
                </span>
              </p>
              
              <div className="bg-white border border-primary/30 rounded-lg p-6 max-w-sm mx-auto">
                <p className="text-sm text-gray-600 mb-2">Investimento hoje:</p>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-lg text-gray-400 line-through">R$ 297</span>
                  <span className="text-3xl font-bold text-primary">R$ 19,90</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ⬆️ Role para cima e garanta sua vaga
                </p>
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
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  Por quanto tempo terei acesso ao curso?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Você terá acesso vitalício ao curso! Poderá assistir quantas vezes quiser, no seu próprio ritmo, sem pressa.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-2">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  Vou receber certificado?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Sim! Você receberá 6 certificados: Cutilagem Russa + 5 cursos bônus completos. Todos os certificados são válidos e reconhecidos.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-3">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  Preciso ter experiência prévia?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Não! O curso é completo e foi desenvolvido tanto para iniciantes quanto para profissionais que querem aperfeiçoar a técnica.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-4">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  Quais materiais preciso ter?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  O curso inclui uma lista completa de materiais e onde comprá-los. Além disso, você ganha 30% de desconto na compra dos materiais!
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-5">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  Como funciona o acesso?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Após a compra, você receberá o acesso imediatamente no seu e-mail. O curso fica disponível 24h por dia na nossa plataforma.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-6">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  São vídeo aulas?
                </summary>
                <div className="mt-4 text-muted-foreground">
                  Sim! Todas as aulas e bônus são em vídeo aulas. Conteúdo 100% em vídeo para você aprender de forma prática e visual.
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection>
              <details className="bg-card rounded-lg p-6 shadow-md" data-testid="faq-item-7">
                <summary className="font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
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
                ⬆️ Role para cima e garanta sua vaga por R$ 19,90
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
