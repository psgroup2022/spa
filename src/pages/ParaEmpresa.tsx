import { CheckCircle, Users, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InternalPageNavbar, { type SitePage } from '@/components/internal-page-navbar';

interface ParaEmpresaProps {
  onNavigate: (page: SitePage) => void;
  currentPage: SitePage;
}

export default function ParaEmpresa({ onNavigate, currentPage }: ParaEmpresaProps) {
  const diferenciais = [
    {
      icon: <Users className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Equipe Especializada',
      description: 'Técnicos treinados para manutenção de todas as montadoras'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Sistema de Gestão Avançado',
      description: 'Plataforma Zeta Informática para controle total da frota'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#be1e4d]" />,
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
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <InternalPageNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Header */}
      <div className="bg-[#be1e2d] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Para sua Empresa</h1>
          <p className="text-xl opacity-90">Equipe especializada para manutenção e suporte de frotas</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introdução */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-[#e5e7eb]">
          <p className="text-lg text-[#1f2937] leading-relaxed mb-6">
            Possuímos uma equipe de <span className="font-semibold text-[#be1e2d]">técnicos especializados e treinados</span> direcionada para o atendimento e manutenção de frotas de todas as montadoras.
          </p>
          <p className="text-lg text-[#1f2937] leading-relaxed">
            Serviços de <span className="font-semibold">manutenção e reparação</span> seguindo parâmetros técnicos de fábrica, com cobertura completa em mecânica geral do veículo.
          </p>
        </div>

        {/* Diferenciais */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">Por que nos escolher</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((item, index) => (
              <Card key={index} className="card-spa hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">{item.title}</h3>
                  <p className="text-[#6b7280]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sistema de Gestão */}
        <div className="mb-16 bg-gradient-to-r from-[#be1e2d]/10 to-[#8f1320]/10 rounded-2xl p-8 border border-[#be1e2d]/20">
          <h2 className="text-2xl font-bold mb-4 text-[#1f2937]">Sistema de Gestão Integrado</h2>
          <p className="text-[#6b7280] mb-8">
            Com um sistema de gestão criado pela <span className="font-semibold text-[#be1e2d]">Zeta Informática</span>, conseguimos de forma organizada, realizar todos os serviços de forma ágil trazendo maior conforto para a gestão da sua frota.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sistemasGestao.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <Zap className="w-5 h-5 text-[#be1e2d] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[#6b7280]">{item.empresa}</p>
                    <p className="font-semibold text-[#1f2937]">{item.servico}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços Oferecidos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">O que oferecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-lg border border-[#e5e7eb] hover:border-[#be1e2d] hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-[#be1e2d] flex-shrink-0" />
                <span className="text-[#1f2937] font-medium">{servico}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6b7280] mt-8 italic">
            * Todos os serviços com agendamento prévio para sua maior comodidade
          </p>
        </div>

        {/* Compromisso */}
        <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#1f2937]">Nosso Compromisso</h2>
          <p className="text-lg text-[#1f2937] leading-relaxed">
            Flexibilizamos a forma de pagamento procurando sempre atender as necessidades do frotista. 
            <span className="block mt-4 text-[#be1e2d] font-semibold">
              Sempre visando um serviço de qualidade e a satisfação total do cliente.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#be1e2d] to-[#8f1320] text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para gerenciar sua frota?</h3>
          <p className="text-xl mb-8 opacity-90">Entre em contato e conheça nossas soluções</p>
          <Button className="bg-white text-[#be1e2d] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </div>
  );
}
