import { Sparkles, Shield, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InternalPageNavbar, { type SitePage } from '@/components/internal-page-navbar';

interface SpaCareProp {
  onNavigate: (page: SitePage) => void;
  currentPage: SitePage;
}

export default function SpaCare({ onNavigate, currentPage }: SpaCareProp) {
  const servicos = [
    {
      icon: <Droplet className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Lavagem Completa',
      description: 'Limpeza profunda e minuciosa do seu veículo'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Polimento de Pintura',
      description: 'Restauro e proteção da pintura original'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Espelhamento e Micro Pintura',
      description: 'Acabamento premium e proteção UV'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Película Solar',
      description: 'Proteção solar e privacidade para seu veículo'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Conserto de Rodas',
      description: 'Recuperação e restauro de rodas danificadas'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Suspensão Esportiva',
      description: 'Upgrade de suspensão para melhor performance'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Projetos Especiais (DUB)',
      description: 'Customizações únicas e personalizadas'
    }
  ];

  const beneficios = [
    'Aumenta a vida útil do seu veículo',
    'Mantém o valor de mercado',
    'Proteção contra intempéries',
    'Acabamento profissional',
    'Produtos de qualidade',
    'Equipe especializada',
    'Atendimento personalizado',
    'Garantia de qualidade'
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <InternalPageNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#be1e2d] via-[#8f1320] to-[#be1e2d] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">SPA Care</h1>
          <p className="text-xl opacity-90">Procedimentos especializados para aumentar a vida útil do seu veículo</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introdução */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-[#e5e7eb]">
          <h2 className="text-2xl font-bold mb-4 text-[#1f2937]">Cuidado Premium para seu Veículo</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Na SPA Care, desenvolvemos procedimentos especializados voltados para cuidar do seu veículo e aumentar sua vida útil. 
            Com técnicos experientes e produtos de qualidade, garantimos que seu carro terá o melhor cuidado possível.
          </p>
        </div>

        {/* Serviços */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="card-spa hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4">{servico.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">{servico.title}</h3>
                  <p className="text-[#6b7280]">{servico.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16 bg-gradient-to-r from-[#be1e2d]/10 to-[#8f1320]/10 rounded-2xl p-8 border border-[#be1e2d]/20">
          <h2 className="text-3xl font-bold mb-8 text-[#1f2937]">Por que escolher SPA Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4"
              >
                <Shield className="w-6 h-6 text-[#be1e2d] flex-shrink-0" />
                <span className="text-[#1f2937] font-medium">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Destaque */}
        <div className="mb-16 bg-white rounded-2xl p-12 border-2 border-[#be1e2d]">
          <h3 className="text-2xl font-bold mb-6 text-[#1f2937]">Mantenha seu Veículo Sempre Impecável</h3>
          <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
            Invista no cuidado do seu veículo. Com os procedimentos especializados da SPA Care, 
            você não apenas mantém o aspecto visual perfeito, mas também aumenta a vida útil e o valor de revenda do seu carro.
          </p>
          <p className="text-[#be1e2d] font-bold">
            Qualidade, cuidado e profissionalismo em cada serviço.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#be1e2d] to-[#8f1320] text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Seu veículo merece o melhor</h3>
          <p className="text-xl mb-8 opacity-90">Agende um atendimento com a SPA Care</p>
          <Button className="bg-white text-[#be1e2d] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Entre em Contato
          </Button>
        </div>
      </div>
    </div>
  );
}
