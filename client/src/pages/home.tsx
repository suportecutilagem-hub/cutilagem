import { AnimatedSection } from "@/components/ui/animated-section";
import { Shield, Clock, Users, Award, CheckCircle, Star, TrendingUp, HelpCircle, PlayCircle, BookOpen, Sparkles, Gift, Instagram, Paintbrush, Palette, Percent, ChevronDown } from "lucide-react";
import heroImage from "@assets/image_1758982671326.png";
import testimonial1 from "@assets/image_1759354704201.png";
import testimonial2 from "@assets/image_1759354751319.png";
import testimonial3 from "@assets/image_1759354734804.png";
import testimonial4 from "@assets/image_1759354779659.png";

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
  { title: "Curso Manicure Agenda Cheia", icon: Gift },
  { title: "Divulgação no Instagram Oficial", icon: Instagram },
  { title: "Aula Exclusiva de Esmaltação em Gel", icon: Paintbrush },
  { title: "Modelos de Unhas Decoradas", icon: Palette },
  { title: "30% de desconto em materiais", icon: Percent },
  { title: "Curso Instagram de Sucesso", icon: Instagram },
];

const additionalBonuses = [
  { title: "SPA DOS PÉS" },
  { title: "MANICURE E PEDICURE" },
  { title: "ALONGAMENTO NO MOLDE F1" },
  { title: "ALONGAMENTO DE UNHAS DE FIBRA DE VIDRO" },
  { title: "UNHAS DECORADAS" },
];

const testimonials = [
  {
    name: "Juliana Santos",
    location: "São Paulo, SP",
    text: "Sempre trabalhei com manicure tradicional, mas depois do curso de Cutilagem Russa minha agenda lotou! Minhas clientes adoraram o resultado e agora cobro 3x mais pelo serviço. Melhor investimento que já fiz!",
    rating: 5,
    image: testimonial1
  },
  {
    name: "Paloma Vidal",
    location: "Rio de Janeiro, RJ",
    text: "Eu tinha medo de usar a técnica russa, mas o curso explica tudo tão bem que me senti segura. Hoje faço cutilagem em todas as minhas clientes e elas sempre voltam. Meu faturamento aumentou muito!",
    rating: 5,
    image: testimonial2
  },
  {
    name: "Aisha Silva",
    location: "Belo Horizonte, MG",
    text: "Com anos de profissão, achei que já sabia tudo. Mas a Cutilagem Russa renovou minha carreira! Aprendi uma técnica incrível e agora atendo clientes VIP que pagam o dobro.",
    rating: 5,
    image: testimonial3
  },
  {
    name: "Helena Costa",
    location: "Brasília, DF",
    text: "Comecei do zero e em apenas 3 semanas já estava atendendo minhas primeiras clientes com a técnica russa. O curso ensina tudo de forma clara e prática. Hoje tenho minha própria clientela fiel!",
    rating: 5,
    image: testimonial4
  }
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
                  Aprenda passo a passo a técnica que já <strong className="text-primary">mudou a vida de milhares de manicures</strong> e pode ser o diferencial que vai <strong className="text-primary">transformar sua carreira.</strong>
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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl text-muted-foreground line-through">R$ 297</span>
                        <span className="text-3xl sm:text-4xl font-bold text-primary">R$ 19,90</span>
                      </div>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">93% OFF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Curso completo + 11 bônus exclusivos
                    </p>
                  </div>
                  
                  <a
                    href={checkoutUrl}
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 px-6 rounded-lg text-xl text-center transition-all duration-200 cta-pulse"
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
                    <p className="text-gray-600 mb-2">• 5 Cursos Populares e Atualizados</p>
                    <p className="text-gray-600 mb-2">• Todos com Certificado</p>
                    <p className="text-gray-600 mb-2">• + 6 Bônus exclusivos</p>
                    <p className="text-right font-bold text-primary">R$ 1.247,00</p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Valor Total:</span>
                    <span className="text-2xl font-bold text-gray-500 line-through">R$ 1.544,00</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="text-2xl font-bold text-primary">Você paga hoje:</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-primary">R$</span>
                      <span className="text-4xl font-bold text-primary ml-1">19,90</span>
                    </div>
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
                    <h4 className="font-semibold mb-2">Zero Dor ou Risco para as Clientes</h4>
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

          {/* CTA após mostrar o valor */}
          <AnimatedSection>
            <div className="text-center mt-12">
              <a
                href={checkoutUrl}
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 cta-pulse"
                data-testid="cta-after-value"
              >
                Sim, Quero Aumentar Minha Renda Agora!
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
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <AnimatedSection
                  key={`bonus-${index}`}
                >
                  <div
                    className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    data-testid={`bonus-card-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary" strokeWidth={2.5} />
                      </div>
                      <h4 className="font-bold text-lg flex-1 pt-2">{bonus.title}</h4>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* CTA após bônus */}
          <AnimatedSection>
            <div className="text-center mt-12">
              <a
                href={checkoutUrl}
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 cta-pulse"
                data-testid="cta-after-bonuses"
              >
                Garantir Curso + 11 Bônus por R$ 19,90
              </a>
            </div>
          </AnimatedSection>
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
                  className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/30"
                  data-testid={`additional-bonus-card-${index}`}
                >
                  <h4 className="font-bold text-xl mb-4">{bonus.title}</h4>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary font-semibold">CERTIFICADO</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={`testimonial-${index}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col" data-testid={`testimonial-card-${index}`}>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      data-testid={`testimonial-image-${index}`}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`testimonial-location-${index}`}>{testimonial.location}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <p className="text-gray-700 text-sm leading-relaxed" data-testid={`testimonial-text-${index}`}>
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center" data-testid="guarantee-section">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-8 text-gray-800" data-testid="guarantee-title">
                Garantia Completa
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Acesso Vitalício</h4>
                  <p className="text-sm text-gray-600">Assista quando e quantas vezes quiser</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Suporte Especializado</h4>
                  <p className="text-sm text-gray-600">Tire todas as suas dúvidas</p>
                </div>
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
                <a
                  href={checkoutUrl}
                  className="inline-block w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 px-6 rounded-lg text-xl text-center transition-all duration-200 cta-pulse mt-3"
                  data-testid="final-message-cta"
                >
                  Garantir Minha Vaga Agora
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ FOOTER SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" data-testid="faq-title">
                Perguntas Frequentes
              </h3>
              <p className="text-muted-foreground" data-testid="faq-subtitle">
                Tire suas dúvidas sobre o curso
              </p>
            </div>

            <div className="space-y-3">
              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-1">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Por quanto tempo terei acesso ao curso?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  Você terá acesso vitalício ao curso! Poderá assistir quantas vezes quiser, no seu próprio ritmo, sem pressa.
                </div>
              </details>

              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-2">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Vou receber certificado?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  Sim! Você receberá 6 certificados: Cutilagem Russa + 5 cursos bônus completos. Todos os certificados são válidos e reconhecidos.
                </div>
              </details>

              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-3">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Preciso ter experiência prévia?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  Não! O curso é completo e foi desenvolvido tanto para iniciantes quanto para profissionais que querem aperfeiçoar a técnica.
                </div>
              </details>

              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-4">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Quais materiais preciso ter?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  O curso inclui uma lista completa de materiais e onde comprá-los. Além disso, você ganha 30% de desconto na compra dos materiais!
                </div>
              </details>

              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-5">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Como funciona o acesso?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  Após a compra, você receberá o acesso imediatamente no seu e-mail. O curso fica disponível 24h por dia na nossa plataforma.
                </div>
              </details>

              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-6">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>São vídeo aulas?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  Sim! Todas as aulas e bônus são em vídeo aulas. Conteúdo 100% em vídeo para você aprender de forma prática e visual.
                </div>
              </details>

              <details className="bg-white rounded-lg p-5 shadow-sm border border-gray-200" data-testid="faq-item-7">
                <summary className="font-semibold text-base cursor-pointer hover:text-primary transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Posso assistir pelo celular?</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 faq-arrow" />
                </summary>
                <div className="mt-3 text-sm text-gray-600 pl-5">
                  Claro! O curso pode ser acessado de qualquer dispositivo: celular, tablet ou computador. Estude onde e quando quiser!
                </div>
              </details>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                Pronta para transformar sua carreira?
              </p>
              <a
                href={checkoutUrl}
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-5 px-6 rounded-lg text-xl text-center transition-all duration-200 cta-pulse"
                data-testid="faq-cta-button"
              >
                Garantir Minha Vaga por R$ 19,90
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
