import { Zap, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import tabelaImg from '@/assets/tabela.jpg';
import InternalPageNavbar, { type SitePage } from '@/components/internal-page-navbar';

interface SpaRacingProps {
  onNavigate: (page: SitePage) => void;
  currentPage: SitePage;
}

export default function SpaRacing({ onNavigate, currentPage }: SpaRacingProps) {
  const diferenciais = [
    {
      icon: <Zap className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Performance Premium',
      description: 'Injeção e ignição programável de alta performance'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Segurança e Confiabilidade',
      description: 'Produtos tecnicamente elaborados com garantia'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Suporte Técnico Personalizado',
      description: 'Profissionais capacitados para desenvolvimento e suporte'
    }
  ];

  const beneficios = [
    'Distribuição de produtos de performance automotiva',
    'Parceria estratégica com Injepro',
    'Gerenciadores de injeção programáveis',
    'Sistemas de ignição avançados',
    'Atendimento personalizado',
    'Know-how tecnológico de ponta',
    'Produtos para veículos de passeio e pista',
    'Inovação contínua e desenvolvimento'
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <InternalPageNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#be1e2d] to-[#8f1320] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">SPA Racing</h1>
          <p className="text-xl opacity-90">Distribuição e execução de serviços voltados para performance automotiva</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introdução */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-[#e5e7eb]">
          <p className="text-lg text-[#1f2937] leading-relaxed mb-6">
            A SPA Automotiva atua na <span className="font-semibold text-[#be1e2d]">distribuição de produtos e execução de serviços</span> ligados a Performance Automotiva. 
          </p>
          <p className="text-lg text-[#1f2937] leading-relaxed mb-6">
            Com a parceria <span className="font-semibold">SPA - INJEPRO</span> conseguimos atingir clientes exigentes que buscam o melhor e o mais seguro para o seu veículo de passeio e de pista.
          </p>
          <p className="text-lg text-[#1f2937] leading-relaxed font-semibold text-[#be1e2d]">
            Nosso maior diferencial é a qualidade de nossos produtos e serviços, visando sempre a satisfação total do nosso cliente.
          </p>
        </div>

        {/* Diferenciais */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">Por que confiar em nós</h2>
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

        {/* Injepro Gerenciadores */}
        <div className="mb-16 bg-gradient-to-r from-[#be1e2d]/10 to-[#8f1320]/10 rounded-2xl p-8 border border-[#be1e2d]/20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-[#1f2937]">Gerenciadores Injepro</h2>
            <p className="text-lg text-[#1f2937] leading-relaxed mb-6">
              Para satisfazer nossos clientes e suprir as necessidades do mercado nacional no ramo automotivo, a <span className="font-semibold text-[#be1e2d]">Injepro</span> lança seus novos gerenciadores com:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#be1e2d]">
              <h3 className="text-xl font-bold mb-3 text-[#1f2937]">Sistema Completo</h3>
              <p className="text-[#6b7280]">Sistema de injeção e ignição programável para máximo rendimento</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#8f1320]">
              <h3 className="text-xl font-bold mb-3 text-[#1f2937]">Apenas Ignição</h3>
              <p className="text-[#6b7280]">Sistema de ignição programável para personalização otimizada</p>
            </div>
          </div>

          <p className="text-[#1f2937] leading-relaxed mb-6">
            Trabalhamos <span className="font-semibold">intensamente no desenvolvimento</span> de produtos tecnicamente elaborados para proporcionar segurança e confiabilidade aos nossos clientes.
          </p>

          <p className="text-[#1f2937] leading-relaxed">
            Nossos <span className="font-semibold text-[#be1e2d]">profissionais estão capacitados</span> para desenvolver, aperfeiçoar e oferecer todo o suporte técnico com a garantia de um atendimento personalizado.
          </p>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">O que oferecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-lg border border-[#e5e7eb] hover:border-[#be1e2d] hover:shadow-md transition-all"
              >
                <Zap className="w-6 h-6 text-[#be1e2d] flex-shrink-0" />
                <span className="text-[#1f2937] font-medium">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabela de Especificações */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#1f2937]">Especificações Técnicas</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg">
            <img src={tabelaImg} alt="Tabela de especificações técnicas" className="w-full h-auto" />
          </div>
        </div>

        {/* Mensagem Injepro */}
        <div className="bg-gradient-to-r from-[#be1e2d] to-[#8f1320] text-white rounded-2xl p-12 text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">
            Esta é a potência que nos move
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Buscar <span className="font-bold">qualidade, know-how e inovação</span>
          </p>
          <p className="text-2xl font-bold">
            Bem vindo ao mundo <span className="text-yellow-300">INJEPRO</span>
          </p>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-12 border-2 border-[#be1e2d] text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#1f2937]">Transforme seu veículo em pista</h3>
          <p className="text-xl text-[#6b7280] mb-8">Conheça nossas soluções de performance</p>
          <Button 
            onClick={() => window.open('https://wa.me/5551981833205?text=' + encodeURIComponent('Olá! Gostaria de solicitar um orçamento para SPA Racing.'), '_blank')}
            className="bg-[#be1e2d] hover:bg-[#8f1320] px-8 py-3 text-lg font-semibold text-white"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </div>
  );
}
