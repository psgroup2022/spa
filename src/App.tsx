import { useEffect, useRef, useState } from 'react';
import { 
  Car,
  Shield, 
  Phone, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Star, 
  CheckCircle, 
  Menu, 
  X,
  ArrowRight,
  Clock,
  Award,
  Users,
  Zap,
  MessageCircle
} from 'lucide-react';
import logo from '@/assets/logo.svg';
import videoBg from '@/assets/video_bg.mp4';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ParaVoce from '@/pages/ParaVoce';
import ParaEmpresa from '@/pages/ParaEmpresa';
import SpaRacing from '@/pages/SpaRacing';
import SpaCare from '@/pages/SpaCare';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'para-voce' | 'para-empresa' | 'spa-racing' | 'spa-care'>('home');
  const heroRef = useRef<HTMLDivElement>(null);

  // States for Dialog Agendamento
  const [dialogNome, setDialogNome] = useState('');
  const [dialogTelefone, setDialogTelefone] = useState('');
  const [dialogServico, setDialogServico] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // States for Contact Form Agendamento
  const [contactNome, setContactNome] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactTelefone, setContactTelefone] = useState('');
  const [contactServico, setContactServico] = useState('');
  const [contactMensagem, setContactMensagem] = useState('');

  const sendWhatsApp = (message: string) => {
    const url = `https://wa.me/5551996851101?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = 'Olá! Gostaria de agendar um serviço na SPA Automotiva.';
    if (dialogNome) msg += `\n*Nome:* ${dialogNome}`;
    if (dialogTelefone) msg += `\n*Telefone:* ${dialogTelefone}`;
    if (dialogServico && dialogServico !== 'Selecione um serviço') msg += `\n*Serviço:* ${dialogServico}`;
    sendWhatsApp(msg);
    setIsDialogOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = 'Olá! Gostaria de agendar um serviço na SPA Automotiva.';
    if (contactNome) msg += `\n*Nome:* ${contactNome}`;
    if (contactEmail) msg += `\n*Email:* ${contactEmail}`;
    if (contactTelefone) msg += `\n*Telefone:* ${contactTelefone}`;
    if (contactServico && contactServico !== 'Selecione um serviço') msg += `\n*Serviço:* ${contactServico}`;
    if (contactMensagem) msg += `\n*Mensagem:* ${contactMensagem}`;
    sendWhatsApp(msg);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    // Hero title animation
    setTimeout(() => {
      const heroTitle = document.getElementById('hero-title');
      if (heroTitle) heroTitle.classList.add('reveal-active');
    }, 300);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigateToPage = (page: 'home' | 'para-voce' | 'para-empresa' | 'spa-racing' | 'spa-care') => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Para Você',
      description: 'Seu carro em boas mãos, com serviços executados para facilitar sua compreensão e manutenção.',
      link: '#contato'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Para Empresa',
      description: 'Equipe especializada para atendimento e manutenção de frotas de todas as montadoras.',
      link: '#contato'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'SPA Racing',
      description: 'Distribuição de produtos e execução de serviços voltados para performance automotiva.',
      link: '#contato'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'SPA Care',
      description: 'Procedimentos desenvolvidos para cuidar do seu veículo e aumentar sua vida útil.',
      link: '#contato'
    }
  ];

  const differentials = [
    { icon: <Award className="w-6 h-6" />, title: '20+ Anos', description: 'De experiência no mercado' },
    { icon: <Users className="w-6 h-6" />, title: '10k+', description: 'Clientes atendidos' },
    { icon: <CheckCircle className="w-6 h-6" />, title: '100%', description: 'Satisfação' },
    { icon: <Clock className="w-6 h-6" />, title: 'Agilidade', description: 'Atendimento rápido' }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Cliente desde 2018',
      content: 'A SPA Automotiva é referência em Porto Alegre. Atendimento impecável e equipe altamente qualificada.',
      rating: 5
    },
    {
      name: 'Maria Silva',
      role: 'Cliente desde 2020',
      content: 'Sempre levo meu carro aqui. Profissionais competentes e preços justos. Recomendo!',
      rating: 5
    },
    {
      name: 'João Pedro',
      role: 'Cliente desde 2019',
      content: 'Serviço de primeira qualidade. Minha frota empresarial só confia na SPA.',
      rating: 5
    }
  ];

  if (currentPage === 'para-voce') {
    return <ParaVoce currentPage={currentPage} onNavigate={navigateToPage} />;
  }

  if (currentPage === 'para-empresa') {
    return <ParaEmpresa currentPage={currentPage} onNavigate={navigateToPage} />;
  }

  if (currentPage === 'spa-racing') {
    return <SpaRacing currentPage={currentPage} onNavigate={navigateToPage} />;
  }

  if (currentPage === 'spa-care') {
    return <SpaCare currentPage={currentPage} onNavigate={navigateToPage} />;
  }


  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className={`navbar-spa ${isScrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center justify-center lg:justify-start">
          <img src={logo} alt="SPA Automotiva Logo" className="w-20 h-20 transition-all duration-300" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('servicos')} className="text-base font-mono uppercase tracking-widest text-[#6b7280] hover:text-[#1f2937] transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-base font-mono uppercase tracking-widest text-[#6b7280] hover:text-[#1f2937] transition-colors">
            Quem Somos
          </button>
          <button onClick={() => scrollToSection('depoimentos')} className="text-base font-mono uppercase tracking-widest text-[#6b7280] hover:text-[#1f2937] transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection('contato')} className="text-base font-mono uppercase tracking-widest text-[#6b7280] hover:text-[#1f2937] transition-colors">
            Contato
          </button>
        </div>

        <div className="hidden md:block">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="btn-beam">
                <span className="btn-beam-border" />
                <span className="btn-beam-inner text-base uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  Agendar
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Agendar Serviço</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleDialogSubmit} className="space-y-4 pt-4">
                <div>
                  <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Nome</label>
                  <Input 
                    placeholder="Seu nome" 
                    value={dialogNome}
                    onChange={(e) => setDialogNome(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Telefone</label>
                  <Input 
                    placeholder="(51) 99999-9999" 
                    value={dialogTelefone}
                    onChange={(e) => setDialogTelefone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Serviço</label>
                  <select 
                    className="w-full h-10 px-3 rounded-md border border-[#e5e7eb] bg-white text-sm"
                    value={dialogServico}
                    onChange={(e) => setDialogServico(e.target.value)}
                  >
                    <option>Selecione um serviço</option>
                    <option>Revisão</option>
                    <option>Troca de Óleo</option>
                    <option>Freios</option>
                    <option>Suspensão</option>
                    <option>Outro</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-[#be1e2d] hover:bg-[#8f1320] text-white rounded-full">
                  Solicitar Agendamento
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <button onClick={() => scrollToSection('servicos')} className="text-lg font-medium text-left">Serviços</button>
            <button onClick={() => scrollToSection('sobre')} className="text-lg font-medium text-left">Quem Somos</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-lg font-medium text-left">Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className="text-lg font-medium text-left">Contato</button>
            <Button 
              onClick={() => {
                sendWhatsApp('Olá! Gostaria de agendar um serviço na SPA Automotiva.');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#be1e2d] hover:bg-[#8f1320] text-white rounded-full mt-4"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Serviço
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        {/* Background Grid (subtle over video) */}
        <div className="absolute inset-0 bg-grid opacity-20 z-[1]" />
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-32 right-20 w-20 h-20 border border-white/20 rounded-full animate-spin-slow hidden lg:block z-[2]" />
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-white/10 rounded-full animate-spin-slow hidden lg:block z-[2]" style={{ animationDuration: '12s' }} />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 z-[3]">
              {/* Badge */}
              <div className="reveal">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-white/80 shadow-sm">
                  <span className="w-2 h-2 bg-[#be1e2d] rounded-full animate-pulse" />
                  Desde 2006
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-none" id="hero-title">
                <span className="text-reveal-wrapper block">
                  <span className="text-reveal-content text-white">Cuidamos </span>
                </span>
                <span className="text-reveal-wrapper block">
                  <span className="text-reveal-content delay-100" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>do seu </span>
                </span>
                <span className="text-reveal-wrapper block">
                  <span className="text-reveal-content delay-200 text-[#be1e2d]">carro</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed reveal delay-300">
                Há mais de 20 anos oferecendo serviços automotivos de excelência em Porto Alegre.
                <span className="text-white font-medium"> Sua segurança é nossa prioridade.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 reveal delay-400">
                <button onClick={() => scrollToSection('contato')} className="btn-primary">
                  <span>Agendar Serviço</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollToSection('servicos')} className="px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-all">
                  <span>Conhecer Serviços</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-white/20 reveal delay-500">
                <div>
                  <div className="text-3xl font-display font-bold text-white">20+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Anos</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">10k+</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Clientes</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-[#be1e2d]">100%</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/60 mt-1">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="relative perspective-1000 reveal delay-200 z-[3]">
              <div className="relative">
                {/* Main Feature Card */}
                <div 
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" 
                      alt="Mecânico trabalhando"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#be1e2d] rounded-full flex items-center justify-center text-white">
                            <CheckCircle className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-bold text-white">Serviço Certificado</div>
                            <div className="text-xs text-white/70">Garantia em todos os serviços</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#be1e2d] rounded-lg flex items-center justify-center text-white">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">4.9/5</div>
                      <div className="text-xs text-white/70">Avaliação média</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-6 bg-[#1f2937] overflow-hidden border-y border-[#1f2937]">
        <div className="marquee-container">
          <div className="marquee-content items-center">
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-white">Revisão Completa</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-[#6b7280]">Troca de Óleo</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-white">Freios</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-[#6b7280]">Suspensão</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-white">Injeção Eletrônica</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-[#6b7280]">Ar Condicionado</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
          </div>
          <div className="marquee-content items-center">
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-white">Revisão Completa</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-[#6b7280]">Troca de Óleo</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-white">Freios</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-[#6b7280]">Suspensão</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-white">Injeção Eletrônica</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
            <span className="text-xl font-display font-bold uppercase tracking-tighter mx-8 text-[#6b7280]">Ar Condicionado</span>
            <Star className="text-[#be1e2d] w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="relative py-24 bg-white border-b border-[#e5e7eb]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16 reveal">
            <div className="w-12 h-[2px] bg-[#be1e2d]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#6b7280]">Nossos Serviços</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Title */}
            <div className="lg:col-span-4 reveal">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Serviços <span className="text-[#be1e2d]">Especializados</span>
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-8">
                Oferecemos uma ampla gama de serviços automotivos, desde manutenções preventivas 
                até reparos complexos, sempre com a qualidade que você merece.
              </p>
              <button onClick={() => scrollToSection('contato')} className="btn-primary">
                <span>Agendar Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Service Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="flashlight-card p-6 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => {
                      if (service.title === 'Para Você') {
                        navigateToPage('para-voce');
                      } else if (service.title === 'Para Empresa') {
                        navigateToPage('para-empresa');
                      } else if (service.title === 'SPA Racing') {
                        navigateToPage('spa-racing');
                      } else if (service.title === 'SPA Care') {
                        navigateToPage('spa-care');
                      } else {
                        scrollToSection('contato');
                      }
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#be1e2d]/10 flex items-center justify-center text-[#be1e2d] mb-4 group-hover:bg-[#be1e2d] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1f2937] mb-2">{service.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-[#be1e2d] text-sm font-medium">
                      <span>Saiba mais</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative py-24 bg-[#f4f5f7] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative reveal">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" 
                  alt="Oficina SPA Automotiva"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#be1e2d]/20 to-transparent" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#be1e2d] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-display font-bold">20+</div>
                <div className="text-sm opacity-90">Anos de<br/>Experiência</div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="reveal delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#be1e2d]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#6b7280]">Quem Somos</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Tradição e <span className="text-[#be1e2d]">Excelência</span>
              </h2>

              <p className="text-[#6b7280] leading-relaxed mb-6">
                A SPA Automotiva foi fundada em 1999 com o compromisso de oferecer serviços automotivos 
                de alta qualidade. Ao longo de mais de duas décadas, nos consolidamos como referência 
                em Porto Alegre, atendendo clientes particulares e frotas empresariais.
              </p>

              <p className="text-[#6b7280] leading-relaxed mb-8">
                Nossa equipe é formada por profissionais certificados e em constante atualização, 
                utilizando equipamentos de última geração para garantir o melhor resultado em cada serviço.
              </p>

              {/* Differentials */}
              <div className="grid grid-cols-2 gap-4">
                {differentials.map((diff) => (
                  <div key={diff.title} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e5e7eb]">
                    <div className="w-10 h-10 rounded-lg bg-[#be1e2d]/10 flex items-center justify-center text-[#be1e2d]">
                      {diff.icon}
                    </div>
                    <div>
                      <div className="font-bold text-[#1f2937]">{diff.title}</div>
                      <div className="text-xs text-[#6b7280]">{diff.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="relative py-24 bg-white border-b border-[#e5e7eb]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#be1e2d]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#6b7280]">Depoimentos</span>
              <div className="w-12 h-[2px] bg-[#be1e2d]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              O que nossos <span className="text-[#be1e2d]">clientes</span> dizem
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-spa reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#be1e2d] text-[#be1e2d]" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-[#6b7280] leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#e5e7eb]">
                    <div className="w-10 h-10 rounded-full bg-[#be1e2d]/10 flex items-center justify-center text-[#be1e2d] font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1f2937]">{testimonial.name}</div>
                      <div className="text-xs text-[#6b7280]">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative py-24 bg-[#f4f5f7] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#be1e2d]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#6b7280]">Contato</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Entre em <span className="text-[#be1e2d]">Contato</span>
              </h2>

              <p className="text-[#6b7280] leading-relaxed mb-8">
                Estamos prontos para atender você. Entre em contato conosco para agendar um serviço 
                ou tirar suas dúvidas.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#e5e7eb]">
                  <div className="w-12 h-12 rounded-lg bg-[#be1e2d]/10 flex items-center justify-center text-[#be1e2d]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#6b7280]">Telefone</div>
                    <div className="font-bold text-[#1f2937]">(51) 3012-3360</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#e5e7eb]">
                  <div className="w-12 h-12 rounded-lg bg-[#be1e2d]/10 flex items-center justify-center text-[#be1e2d]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#6b7280]">Endereço</div>
                    <div className="font-bold text-[#1f2937]">Av. Alcides Maia, 199 - Porto Alegre/RS</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#e5e7eb]">
                  <div className="w-12 h-12 rounded-lg bg-[#be1e2d]/10 flex items-center justify-center text-[#be1e2d]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#6b7280]">Horário</div>
                    <div className="font-bold text-[#1f2937]">Seg-Sex: 8h às 18h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="reveal delay-200">
              <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] shadow-lg">
                <h3 className="text-xl font-bold text-[#1f2937] mb-6">Agende seu Serviço</h3>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Nome</label>
                    <Input placeholder="Seu nome completo" className="h-12" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Email</label>
                      <Input type="email" placeholder="seu@email.com" className="h-12" />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Telefone</label>
                      <Input placeholder="(51) 99999-9999" className="h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Serviço</label>
                    <select className="w-full h-12 px-3 rounded-md border border-[#e5e7eb] bg-white text-sm">
                      <option>Selecione um serviço</option>
                      <option>Revisão Completa</option>
                      <option>Troca de Óleo</option>
                      <option>Freios</option>
                      <option>Suspensão</option>
                      <option>Injeção Eletrônica</option>
                      <option>Ar Condicionado</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono uppercase text-[#6b7280] mb-2 block">Mensagem</label>
                    <Textarea placeholder="Descreva o que você precisa..." className="min-h-[100px]" />
                  </div>
                  
                  <Button className="w-full h-12 bg-[#be1e2d] hover:bg-[#8f1320] text-white rounded-full font-semibold">
                    <Calendar className="w-4 h-4 mr-2" />
                    Solicitar Agendamento
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-[#1f2937] text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#be1e2d] text-white rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <span className="font-display text-lg tracking-tight">
                  SPA<span className="text-[#be1e2d]">.</span>AUTOMOTIVA
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Há mais de 20 anos (desde 2006) oferecendo serviços automotivos de excelência em Porto Alegre.
                Sua segurança é nossa prioridade.
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/spaautomotiva/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#be1e2d] transition-colors">
                  <span className="text-lg">📸</span>
                </a>
                <a href="https://wa.me/5551981833205" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#be1e2d] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-400 hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-white transition-colors">Quem Somos</button></li>
                <li><button onClick={() => scrollToSection('depoimentos')} className="text-gray-400 hover:text-white transition-colors">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Revisão Completa</span></li>
                <li><span className="text-gray-400">Troca de Óleo</span></li>
                <li><span className="text-gray-400">Freios</span></li>
                <li><span className="text-gray-400">Suspensão</span></li>
                <li><span className="text-gray-400">Injeção Eletrônica</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-gray-500">
              © 2026 SPA Automotiva. Todos os direitos reservados.
            </div>
            <div className="text-xs text-gray-500">
              Av. Alcides Maia, 199 - Porto Alegre/RS | CEP: 91120440
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5551981833205"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Envie uma mensagem para nós no WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
}

export default App;
