import { CheckCircle, Users, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InternalPageNavbar, { type SitePage } from '@/components/internal-page-navbar';

interface ParaEmpresaProps {
  onNavigate: (page: SitePage) => void;
  currentPage: SitePage;
}

export default function ParaEmpresa({ onNavigate, currentPage }: ParaEmpresaProps) {
  const diferenciais = [
    {
      icon: <Users className="w-8 h-8 text-spa-red" />,
      title: 'Equipe Especializada',
      description: 'Técnicos treinados para manutenção de todas as montadoras'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-spa-red" />,
      title: 'Sistema de Gestão Avançado',
      description: 'Plataforma Zeta Informática para controle total da frota'
    },
    {
      icon: <Shield className="w-8 h-8 text-spa-red" />,
      title: 'Padrões de Fábrica',
      description: 'Todos os serviços seguem especificações técnicas originais'
    }
  ];

  const servicos = [
    'Manutenção preventiva e corretiva',
    'Check up gratuito em todos os veículos',
    'Revisão de todas as marcas e modelos',
    'Controle de revisão preventiva',
    'Levantamento das condições dos veículos',
    'Mão de obra com valores justos',
    'Peças de qualidade com garantia',
    'Formas de pagamento flexibilizadas',
    'Agendamento prévio para comodidade'
  ];

  const sistemasGestao = [
    {
      empresa: 'Zeta Informática',
      servico: 'SPA Automotiva Personal Car'
    },
    {
      empresa: 'Frota',
      servico: 'SPA Automotiva Good Card'
    },
    {
      empresa: 'Eco Frotas',
      servico: 'SPA Automotiva'
    }
  ];

  return (
    <div className="min-h-screen bg-spa-paper">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <InternalPageNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Cabeçalho */}
      <header className="pt-36 pb-14 border-b border-spa-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-spa-red" />
            <span className="label-spec">Frota</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display tracking-tight text-spa-ink leading-[1.02] mb-6">
            Para sua Empresa
          </h1>
          <p className="text-lg text-spa-body max-w-[58ch] leading-relaxed">
            Manutenção de frota de todas as montadoras, com controle por veículo
            e agendamento prévio.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introdução */}
        <div className="mb-20 max-w-[62ch]">
          <p className="text-xl text-spa-ink leading-relaxed mb-5">
            Equipe direcionada ao atendimento de frota, de todas as montadoras.
          </p>
          <p className="text-spa-body leading-relaxed">
            Manutenção e reparação seguindo parâmetros técnicos de fábrica, com
            cobertura completa em mecânica geral do veículo.
          </p>
        </div>

        {/* Ficha no lugar de três cartões iguais com ícone por cima. */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8">
          <h2 className="lg:col-span-4 text-3xl font-display tracking-tight text-spa-ink leading-[1.05]">
            O que a frota<br />recebe aqui.
          </h2>
          <dl className="lg:col-span-8 border-t border-spa-line">
            {diferenciais.map((item, index) => (
              <div key={index} className="py-6 border-b border-spa-line">
                <dt className="text-xl font-display text-spa-ink tracking-tight mb-2">
                  {item.title}
                </dt>
                <dd className="text-spa-body leading-relaxed max-w-[58ch]">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Sistema de Gestão */}
        <div className="mb-20 bg-spa-surface rounded-2xl p-8 md:p-10 border border-spa-line">
          <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-4 text-spa-ink">Sistema de Gestão Integrado</h2>
          <p className="text-spa-body mb-8">
            Com um sistema de gestão criado pela <span className="font-semibold text-spa-red">Zeta Informática</span>, conseguimos de forma organizada, realizar todos os serviços de forma ágil trazendo maior conforto para a gestão da sua frota.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sistemasGestao.map((item, index) => (
              <div key={index} className="bg-spa-surface rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <Zap className="w-5 h-5 text-spa-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-spa-body">{item.empresa}</p>
                    <p className="font-semibold text-spa-ink">{item.servico}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços Oferecidos */}
        <div className="mb-16">
          <h2 className="text-3xl font-display tracking-tight mb-10 text-spa-ink">O que oferecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-spa-surface rounded-lg border border-spa-line hover:border-spa-red hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-spa-red flex-shrink-0" />
                <span className="text-spa-ink font-medium">{servico}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-spa-body mt-8 italic">
            * Todos os serviços com agendamento prévio para sua maior comodidade
          </p>
        </div>

        {/* Compromisso */}
        <div className="bg-spa-surface rounded-2xl p-8 border border-spa-line mb-16">
          <h2 className="text-2xl font-bold mb-6 text-spa-ink">Nosso Compromisso</h2>
          <p className="text-lg text-spa-ink leading-relaxed">
            Flexibilizamos a forma de pagamento procurando sempre atender as necessidades do frotista. 
            <span className="block mt-4 text-spa-red font-semibold">
              Sempre visando um serviço de qualidade e a satisfação total do cliente.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-spa-red to-spa-red-deep text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para gerenciar sua frota?</h3>
          <p className="text-xl mb-8 opacity-90">Entre em contato e conheça nossas soluções</p>
          <Button 
            onClick={() => window.open('https://wa.me/5551981833205?text=' + encodeURIComponent('Olá! Gostaria de agendar uma consulta para gestão de frotas na SPA Automotiva.'), '_blank')}
            className="bg-spa-surface text-spa-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </div>
  );
}
