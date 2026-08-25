import { useEffect, useRef, useState } from 'react';
import { 
  Car,
  Calendar, 
  Star, 
  CheckCircle, 
  Menu, 
  X,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  MessageCircle,
  Gauge,
  Target,
  Fuel,
  Timer
} from 'lucide-react';
import logo from '@/assets/logo.svg';
import videoBg from '@/assets/video_bg.mp4';
import geometria3d from '@/assets/geometria-3d.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ParaVoce from '@/pages/ParaVoce';
import ParaEmpresa from '@/pages/ParaEmpresa';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'para-voce' | 'para-empresa'>('home');
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
    const url = `https://wa.me/5551981833205?text=${encodeURIComponent(message)}`;
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

  const navigateToPage = (page: 'home' | 'para-voce' | 'para-empresa') => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services: Array<{
    title: string;
    description: string;
    page?: 'para-voce' | 'para-empresa';
    anchor: string;
    highlight?: boolean;
  }> = [
    {
      title: 'Para Você',
      description:
        'Revisão, manutenção corretiva e preventiva do carro de uso diário. O defeito é nomeado antes de qualquer peça ser trocada.',
      page: 'para-voce',
      anchor: 'contato'
    },
    {
      title: 'Para Empresa',
      description:
        'Atendimento de frota de todas as montadoras, com controle de manutenção por veículo e previsibilidade de custo.',
      page: 'para-empresa',
      anchor: 'contato'
    },
    {
      title: 'Mecânica Geral',
      description:
        'Motor, injeção eletrônica, suspensão, direção, freio, câmbio e embreagem.',
      anchor: 'catalogo'
    },
    {
      title: 'Geometria 3D e Balanceamento',
      description:
        'Alinhamento computadorizado por câmeras. Cambagem, cáster e convergência das quatro rodas medidas e corrigidas.',
      anchor: 'geometria-3d',
      highlight: true
    }
  ];

  const serviceCatalog = [
    {
      title: 'Mecânica e Reparos',
      items: ['Motor', 'Injeção Eletrônica', 'Suspensão', 'Direção', 'Freio', 'Câmbio', 'Embreagem', 'Geometria 3D e Balanceamento']
    },
    {
      title: 'Manutenção e Peças',
      items: ['Ar Condicionado', 'Óleos', 'Filtros', 'Pneus', 'Baterias', 'Alternador', 'Motor de Partida']
    },
    {
      title: 'Serviços Especiais',
      items: [
        'Higienização do sistema de ar condicionado',
        'Oxi-sanitização',
        'Troca de óleo de câmbio automático',
        'Limpeza do sistema de arrefecimento',
        'Descarbonização do sistema de injeção'
      ]
    }
  ];

  const geometryBenefits = [
    {
      icon: <Target className="w-4 h-4" />,
      title: 'Precisão 3D',
      description: 'Medição das 4 rodas por câmeras'
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      title: 'Direção estável',
      description: 'Volante centralizado, sem puxar'
    },
    {
      icon: <Fuel className="w-4 h-4" />,
      title: 'Menos consumo',
      description: 'Rodas alinhadas gastam menos'
    },
    {
      icon: <Timer className="w-4 h-4" />,
      title: 'Pneus duram mais',
      description: 'Desgaste uniforme na banda'
    }
  ];

  /* Escopo da oficina. Endereço, horário e telefone ficam só na seção
     Contato: repetir os três aqui era a mesma ficha duas vezes. */
  const workshopFacts = [
    { term: 'Em operação desde', value: '2006' },
    { term: 'Atende', value: 'Carro particular e frota' },
    { term: 'Montadoras', value: 'Todas' },
    { term: 'Especialidades', value: 'Mecânica geral, ar condicionado e geometria 3D' }
  ];

  const testimonials = [
    {
      name: 'Gustavo Novelletto Neto',
      role: 'Local Guide · 66 avaliações',
      date: 'há 7 meses',
      content: 'Cresci ouvindo que oficinas mecânicas praticam orçamentos desonestos, agora vejo que a maioria paga "esta conta" por uma minoria, bem parecido com o quadro atual do Brasil. A SPA Automotiva é o porto seguro dos 4 carros da família. Honestidade, competência fazem desta um orgulho para a categoria de oficinas mecânicas. Além disso uma sala de espera confortável com um bom café, internet, TV. Ultra recomendo.',
      rating: 5
    },
    {
      name: 'Diego Magainn',
      role: 'Local Guide · 30 avaliações',
      date: 'há 1 ano',
      content: 'Equipe top! Sempre prontos para resolver qualquer problema! Já precisei de assistência 21:00 da noite e me deram todas as orientações e suporte necessário.',
      rating: 5
    },
    {
      name: 'Luis Vieira',
      role: 'Local Guide · 31 avaliações',
      date: 'há 2 anos',
      content: 'Ótimo atendimento, realmente é deixar o carro em boas mãos, meu carro foi todo revisado lá e agora está pronto para curtir as férias com a família.',
      rating: 5
    },
    {
      name: 'Fabricio Kaufmann',
      role: 'Local Guide · 45 avaliações',
      date: 'há 4 anos',
      content: 'Excelente atendimento e serviço de ótima qualidade. Profissionais competentes e 100% confiáveis.',
      rating: 5
    }
  ];

  if (currentPage === 'para-voce') {
    return <ParaVoce currentPage={currentPage} onNavigate={navigateToPage} />;
  }

  if (currentPage === 'para-empresa') {
    return <ParaEmpresa currentPage={currentPage} onNavigate={navigateToPage} />;
  }


  return (
    <div className="min-h-screen bg-spa-paper">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className={`navbar-spa ${isScrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center justify-center lg:justify-start">
          <img src={logo} alt="SPA Automotiva Logo" className="w-20 h-20 transition-all duration-300" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('servicos')} className="nav-link text-[15px] font-medium tracking-tight transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection('sobre')} className="nav-link text-[15px] font-medium tracking-tight transition-colors">
            Quem Somos
          </button>
          <button onClick={() => scrollToSection('depoimentos')} className="nav-link text-[15px] font-medium tracking-tight transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection('contato')} className="nav-link text-[15px] font-medium tracking-tight transition-colors">
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
                  <label className="label-spec text-spa-body mb-2 block">Nome</label>
                  <Input 
                    placeholder="Seu nome" 
                    value={dialogNome}
                    onChange={(e) => setDialogNome(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label-spec text-spa-body mb-2 block">Telefone</label>
                  <Input 
                    placeholder="(51) 99999-9999" 
                    value={dialogTelefone}
                    onChange={(e) => setDialogTelefone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label-spec text-spa-body mb-2 block">Serviço</label>
                  <select 
                    className="w-full h-10 px-3 rounded-md border border-spa-line bg-spa-surface text-sm"
                    value={dialogServico}
                    onChange={(e) => setDialogServico(e.target.value)}
                  >
                    <option>Selecione um serviço</option>
                    <option>Motor</option>
                    <option>Injeção Eletrônica</option>
                    <option>Suspensão</option>
                    <option>Direção</option>
                    <option>Freio</option>
                    <option>Câmbio / Embreagem</option>
                    <option>Geometria 3D e Balanceamento</option>
                    <option>Ar Condicionado</option>
                    <option>Troca de Óleo e Filtros</option>
                    <option>Pneus</option>
                    <option>Bateria / Alternador / Motor de Partida</option>
                    <option>Higienização do Ar Condicionado</option>
                    <option>Oxi-sanitização</option>
                    <option>Troca de Óleo de Câmbio Automático</option>
                    <option>Limpeza do Sistema de Arrefecimento</option>
                    <option>Descarbonização do Sistema de Injeção</option>
                    <option>Outro</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-spa-red hover:bg-spa-red-deep text-white rounded-full">
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
        <div className="fixed inset-0 z-50 bg-spa-surface pt-20 px-6 md:hidden">
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
              className="w-full bg-spa-red hover:bg-spa-red-deep text-white rounded-full mt-4"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Serviço
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* Fundo em vídeo. O ink por baixo garante que, com
            prefers-reduced-motion, o hero continue escuro e o texto branco
            legível mesmo sem o vídeo. */}
        <div className="absolute inset-0 z-0 bg-spa-ink">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[68%_58%] lg:object-center"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          {/* Máscara em duas camadas: uma base uniforme mais um gradiente
              que escurece o lado do texto. O vídeo tem trechos claros, e sem
              isso o título vermelho não fecha 3:1 sobre eles. */}
          <div className="absolute inset-0 bg-spa-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-spa-ink via-spa-ink/75 to-spa-ink/45 lg:bg-gradient-to-r lg:from-spa-ink lg:via-spa-ink/80 lg:to-spa-ink/35" />
        </div>
        
        {/* Background Grid (subtle over video) */}
        <div className="absolute inset-0 bg-grid opacity-20 z-[1]" />
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 z-[3]">
              {/* Título. O nome do bairro e o ano fazem o trabalho que
                  "excelência" e "referência" não fazem: são verificáveis. */}
              <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95]" id="hero-title">
                <span className="text-reveal-wrapper block">
                  <span className="text-reveal-content text-white">Diagnóstico</span>
                </span>
                <span className="text-reveal-wrapper block">
                  <span className="text-reveal-content delay-100 text-white">antes do</span>
                </span>
                <span className="text-reveal-wrapper block">
                  <span className="text-reveal-content delay-200 text-spa-red-bright">orçamento.</span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/75 max-w-[38ch] leading-relaxed reveal delay-300">
                Motor, injeção, suspensão, freio, câmbio, ar condicionado e
                geometria 3D. Para o carro de família e para a frota da empresa.
              </p>

              <div className="flex flex-wrap gap-4 reveal delay-400">
                <button
                  onClick={() => sendWhatsApp('Olá! Gostaria de agendar um serviço na SPA Automotiva.')}
                  className="btn-primary"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+555130123360"
                  className="px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  (51) 3012-3360
                </a>
              </div>

              {/* Só o que dá para conferir: endereço, horário e o ano de abertura. */}
              <dl className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-white/20 reveal delay-500">
                <div>
                  <dt className="label-spec text-white/70">Desde</dt>
                  <dd className="text-2xl font-display text-white tnum mt-1">2006</dd>
                </div>
                <div>
                  <dt className="label-spec text-white/70">Endereço</dt>
                  <dd className="text-2xl font-display text-white mt-1">Alcides Maia, 199</dd>
                </div>
                <div>
                  <dt className="label-spec text-white/70">Seg a Sex</dt>
                  <dd className="text-2xl font-display text-white tnum mt-1">8h–18h</dd>
                </div>
              </dl>
            </div>

            {/* Foto sem moldura de vidro e sem selo flutuante por cima:
                os dois eram enfeite de template e não afirmavam nada. */}
            <figure className="relative reveal delay-200 z-[3]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1000&q=80"
                  alt="Mecânico trabalhando sob o capô de um veículo em uma oficina"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="relative scroll-mt-24 py-24 bg-spa-surface border-b border-spa-line">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
            {/* Esquerda: título */}
            <div className="lg:col-span-4 reveal lg:sticky lg:top-32 lg:self-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-spa-red" />
                <span className="label-spec">Serviços</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-6 text-spa-ink leading-[1.02]">
                Do carro de família<br />à frota inteira.
              </h2>
              <p className="text-spa-body leading-relaxed max-w-[46ch]">
                Quatro frentes de atendimento. A lista completa do que a oficina
                executa vem logo abaixo, item por item, sem letra miúda.
              </p>
            </div>

            {/* Direita: índice numerado.
                Antes era uma grade de quatro cartões iguais com ícone em
                quadradinho arredondado, que é assinatura de template. Virou
                índice de manual: separado por fio, numerado, e cada linha é
                um <button> de verdade, alcançável pelo teclado. */}
            <ul className="lg:col-span-8 border-b border-spa-line">
              {services.map((service, index) => (
                <li key={service.title} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                  <button
                    type="button"
                    onClick={() => {
                      if (service.page) {
                        navigateToPage(service.page);
                      } else {
                        scrollToSection(service.anchor);
                      }
                    }}
                    className="group w-full text-left grid grid-cols-[2.5rem_1fr_auto] gap-x-5 items-start py-8 border-t border-spa-line transition-colors hover:bg-spa-paper focus-visible:bg-spa-paper"
                  >
                    <span
                      className={`label-spec tnum pt-2 transition-colors ${
                        service.highlight ? 'text-spa-red' : 'group-hover:text-spa-red'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                        <h3 className="text-2xl md:text-3xl font-display text-spa-ink tracking-tight">
                          {service.title}
                        </h3>
                        {service.highlight && (
                          <span className="label-spec text-spa-red border border-spa-red/40 rounded-full px-2.5 py-0.5">
                            Novo
                          </span>
                        )}
                      </span>
                      <span className="block text-spa-body leading-relaxed mt-3 max-w-[62ch]">
                        {service.description}
                      </span>
                    </span>

                    <ArrowUpRight className="w-6 h-6 text-spa-line-strong shrink-0 mt-2 transition-all duration-300 group-hover:text-spa-red group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Catálogo completo de serviços */}
          <div id="catalogo" className="mt-24 scroll-mt-28">
            <div className="max-w-[54ch] mb-12 reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-spa-red" />
                <span className="label-spec">Lista completa</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display tracking-tight text-spa-ink leading-[1.05]">
                Tudo que entra na oficina.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCatalog.map((group, index) => (
                <div
                  key={group.title}
                  className="group relative overflow-hidden bg-spa-surface border-2 border-spa-line rounded-2xl p-8 pt-10 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.08)] hover:border-spa-red hover:shadow-[0_28px_60px_-20px_rgba(190,30,45,0.28)] hover:-translate-y-2 transition-all duration-500 reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Barra de destaque no topo */}
                  <span className="absolute top-0 inset-x-0 h-1.5 bg-spa-red/30 group-hover:bg-spa-red transition-colors duration-500" />

                  {/* O número substitui o ícone em quadradinho arredondado,
                      mesmo padrão de template que saiu do resto da página, e
                      amarra estes cartões ao índice numerado lá em cima. */}
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-4xl font-display text-spa-red tnum leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-xl font-display text-spa-ink leading-tight">{group.title}</h4>
                      <span className="label-spec">{group.items.length} serviços</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-spa-ink font-medium">
                        <CheckCircle className="w-[18px] h-[18px] text-spa-red shrink-0 mt-[3px]" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Destaque: Geometria 3D e Balanceamento */}
          <div id="geometria-3d" className="mt-24 scroll-mt-28 reveal">
            <div className="relative overflow-hidden rounded-3xl bg-spa-ink shadow-[0_40px_80px_-30px_rgba(31,41,55,0.5)]">
              <div className="absolute inset-0 bg-grid-dark opacity-20" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                {/* Imagem */}
                <div className="relative min-h-[300px] lg:min-h-full order-1 lg:order-2">
                  <img
                    src={geometria3d}
                    alt="Veículo em alinhamento de geometria 3D na SPA Automotiva"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-ink via-spa-ink/15 to-transparent lg:bg-gradient-to-r lg:from-spa-ink lg:via-spa-ink/20 lg:to-transparent" />
                </div>

                {/* Conteúdo */}
                <div className="relative p-8 md:p-14 order-2 lg:order-1 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 self-start px-4 py-2 mb-6 rounded-full bg-spa-red text-white label-spec">
                    <span className="w-2 h-2 rounded-full bg-spa-surface animate-pulse" />
                    Novo serviço
                  </span>

                  <h3 className="text-3xl md:text-5xl font-display tracking-tight text-white leading-[1.05] mb-5">
                    Geometria 3D e<br />
                    <span className="text-spa-red-bright">Balanceamento</span>
                  </h3>

                  <p className="text-spa-on-dark leading-relaxed mb-8 max-w-lg">
                    Alinhamento computadorizado com tecnologia 3D: câmeras de alta precisão medem
                    cambagem, cáster e convergência das quatro rodas em minutos. O resultado é um
                    carro estável, com direção centralizada e pneus que duram muito mais.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {geometryBenefits.map((benefit) => (
                      <div key={benefit.title} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-spa-red-bright shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{benefit.title}</div>
                          <div className="text-xs text-spa-on-dark leading-snug">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => sendWhatsApp('Olá! Gostaria de agendar Geometria 3D e Balanceamento na SPA Automotiva.')}
                      className="btn-primary"
                    >
                      <span>Agendar Geometria 3D</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scrollToSection('contato')}
                      className="px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/25 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-all"
                    >
                      Pedir orçamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative scroll-mt-24 py-24 bg-spa-paper border-b border-spa-line">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-spa-red/20 to-transparent" />
              </div>
              
            </div>

            {/* Right: Content */}
            <div className="reveal delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-spa-red" />
                <span className="label-spec">Quem Somos</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-8 text-spa-ink leading-[1.02]">
                Vinte anos no<br />mesmo endereço.
              </h2>

              <p className="text-spa-body leading-relaxed mb-6 max-w-[62ch]">
                A oficina abriu em 2006 e nunca mudou de lugar, com a mesma
                equipe que os clientes reconhecem pelo nome.
              </p>

              <p className="text-spa-body leading-relaxed mb-10 max-w-[62ch]">
                O que os clientes escrevem no Google se repete: orçamento sem
                surpresa e explicação do defeito antes do serviço. As avaliações
                estão logo abaixo, com nome e data, do jeito que foram publicadas.
              </p>

              {/* Ficha da oficina. Substituiu quatro cartõezinhos com "100%
                  Satisfação" e "10 mil clientes", números que ninguém consegue
                  conferir. Aqui só entra dado verificável. */}
              <dl className="border-t border-spa-line">
                {workshopFacts.map((fact) => (
                  <div
                    key={fact.term}
                    className="grid grid-cols-[9rem_1fr] gap-4 py-4 border-b border-spa-line"
                  >
                    <dt className="label-spec pt-1">{fact.term}</dt>
                    <dd className="text-spa-ink font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="relative scroll-mt-24 py-24 bg-spa-surface border-b border-spa-line">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 reveal">
            <div className="w-10 h-px bg-spa-red" />
            <h2 className="label-spec">Depoimentos</h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-spa reveal h-full" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Nota e origem. Precisa de flex-wrap: em telas estreitas
                      a data encostava nas estrelas e as duas se sobrepunham. */}
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-5">
                    <div className="flex gap-1 shrink-0" aria-label={`${testimonial.rating} de 5 estrelas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-[18px] h-[18px] fill-spa-red text-spa-red" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="label-spec shrink-0">
                      Google · {testimonial.date}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-spa-body leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-spa-line">
                    <div className="w-10 h-10 rounded-full bg-spa-red/10 flex items-center justify-center text-spa-red font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-spa-ink">{testimonial.name}</div>
                      <div className="text-xs text-spa-body">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Link para o Google */}
          <div className="mt-10 text-center reveal">
            <a
              href="https://www.google.com/maps/search/?api=1&query=SPA+Automotiva+Av.+Alcides+Maia+199+Porto+Alegre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-spa-red hover:text-spa-ink transition-colors"
            >
              Ver todas as avaliações no Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative scroll-mt-24 py-24 bg-spa-paper border-b border-spa-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-spa-red" />
                <span className="label-spec">Contato</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-6">
                Traga o carro,<br />ou mande o sintoma.
              </h2>

              <p className="text-spa-body leading-relaxed mb-8">
                Descreva o sintoma pelo WhatsApp ou ligue. Se preferir, use o
                formulário: ele abre a conversa no WhatsApp com os dados já preenchidos.
              </p>

              {/* Dados de contato como ficha, e não como quatro cartões
                  iguais com ícone em quadradinho: o mesmo padrão de template
                  que saiu da seção de serviços. Telefone e endereço são
                  links de verdade, tocáveis com o polegar. */}
              <dl className="border-t border-spa-line mb-10">
                <div className="grid grid-cols-[8.5rem_1fr] gap-4 items-baseline py-5 border-b border-spa-line">
                  <dt className="label-spec">WhatsApp</dt>
                  <dd>
                    <a
                      href="https://wa.me/5551981833205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-display text-spa-ink hover:text-spa-red transition-colors tnum"
                    >
                      (51) 98183-3205
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-[8.5rem_1fr] gap-4 items-baseline py-5 border-b border-spa-line">
                  <dt className="label-spec">Central</dt>
                  <dd>
                    <a
                      href="tel:+555130123360"
                      className="text-xl font-display text-spa-ink hover:text-spa-red transition-colors tnum"
                    >
                      (51) 3012-3360
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-[8.5rem_1fr] gap-4 items-baseline py-5 border-b border-spa-line">
                  <dt className="label-spec">Endereço</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Alcides+Maia+199+Porto+Alegre+RS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-spa-ink font-medium hover:text-spa-red transition-colors"
                    >
                      Av. Alcides Maia, 199 · Porto Alegre / RS
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-[8.5rem_1fr] gap-4 items-baseline py-5 border-b border-spa-line">
                  <dt className="label-spec">Atendimento</dt>
                  <dd className="text-spa-ink font-medium">
                    Segunda a sexta, 8h às 12h e 13h30 às 18h
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right: Contact Form */}
            <div className="reveal delay-200">
              <div className="bg-spa-surface p-8 rounded-2xl border border-spa-line shadow-lg">
                <h3 className="text-xl font-bold text-spa-ink mb-6">Agende seu Serviço</h3>
                
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="label-spec text-spa-body mb-2 block">Nome</label>
                    <Input 
                      placeholder="Seu nome completo" 
                      className="h-12" 
                      value={contactNome}
                      onChange={(e) => setContactNome(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label-spec text-spa-body mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="h-12" 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="label-spec text-spa-body mb-2 block">Telefone</label>
                      <Input 
                        placeholder="(51) 99999-9999" 
                        className="h-12" 
                        value={contactTelefone}
                        onChange={(e) => setContactTelefone(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="label-spec text-spa-body mb-2 block">Serviço</label>
                    <select 
                      className="w-full h-12 px-3 rounded-md border border-spa-line bg-spa-surface text-sm"
                      value={contactServico}
                      onChange={(e) => setContactServico(e.target.value)}
                    >
                      <option>Selecione um serviço</option>
                      <option>Motor</option>
                      <option>Injeção Eletrônica</option>
                      <option>Suspensão</option>
                      <option>Direção</option>
                      <option>Freio</option>
                      <option>Câmbio / Embreagem</option>
                      <option>Geometria 3D e Balanceamento</option>
                      <option>Ar Condicionado</option>
                      <option>Troca de Óleo e Filtros</option>
                      <option>Pneus</option>
                      <option>Bateria / Alternador / Motor de Partida</option>
                      <option>Higienização do Ar Condicionado</option>
                      <option>Oxi-sanitização</option>
                      <option>Troca de Óleo de Câmbio Automático</option>
                      <option>Limpeza do Sistema de Arrefecimento</option>
                      <option>Descarbonização do Sistema de Injeção</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="label-spec text-spa-body mb-2 block">Mensagem</label>
                    <Textarea 
                      placeholder="Descreva o que você precisa..." 
                      className="min-h-[100px]" 
                      value={contactMensagem}
                      onChange={(e) => setContactMensagem(e.target.value)}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 bg-spa-red hover:bg-spa-red-deep text-white rounded-full font-semibold">
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
      <footer className="relative py-16 bg-spa-ink text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-spa-red text-white rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <span className="font-display text-lg tracking-tight">
                  SPA<span className="text-spa-red-bright">.</span>AUTOMOTIVA
                </span>
              </div>
              <p className="text-spa-on-dark leading-relaxed max-w-md mb-6">
                Oficina mecânica em Porto Alegre desde 2006.
                Carro particular e frota.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/spaautomotiva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da SPA Automotiva"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-spa-on-dark hover:text-white hover:border-spa-red transition-colors"
                >
                  <Instagram className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://wa.me/5551981833205"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da SPA Automotiva"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-spa-on-dark hover:text-white hover:border-spa-red transition-colors"
                >
                  <MessageCircle className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('servicos')} className="text-spa-on-dark hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-spa-on-dark hover:text-white transition-colors">Quem Somos</button></li>
                <li><button onClick={() => scrollToSection('depoimentos')} className="text-spa-on-dark hover:text-white transition-colors">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-spa-on-dark hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><span className="text-spa-on-dark">Motor e Injeção Eletrônica</span></li>
                <li><span className="text-spa-on-dark">Suspensão e Direção</span></li>
                <li><span className="text-spa-on-dark">Geometria 3D e Balanceamento</span></li>
                <li><span className="text-spa-on-dark">Freio, Câmbio e Embreagem</span></li>
                <li><span className="text-spa-on-dark">Ar Condicionado</span></li>
                <li><span className="text-spa-on-dark">Óleos, Filtros e Pneus</span></li>
                <li><span className="text-spa-on-dark">Baterias e Alternador</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="label-spec text-spa-on-dark/70">
              © 2026 SPA Automotiva. Todos os direitos reservados.
            </div>
            <div className="text-xs text-spa-on-dark/70">
              Av. Alcides Maia, 199 - Porto Alegre/RS | CEP: 91120440
            </div>
          </div>
        </div>
      </footer>

      {/* Botão fixo do WhatsApp. Era um emoji dentro de um círculo verde
          genérico; virou ícone com rótulo, na cor da marca, com alvo de
          toque de 56px. */}
      <a
        href="https://wa.me/5551981833205"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a SPA Automotiva no WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 pl-4 pr-5 bg-spa-red hover:bg-spa-red-deep rounded-full flex items-center gap-3 text-white shadow-lg transition-colors"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
