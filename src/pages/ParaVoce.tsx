import { CheckCircle, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InternalPageNavbar, { type SitePage } from '@/components/internal-page-navbar';

interface ParaVoceProps {
  onNavigate: (page: SitePage) => void;
  currentPage: SitePage;
}

export default function ParaVoce({ onNavigate, currentPage }: ParaVoceProps) {
  const diferenciaisDestaque = [
    {
      icon: <Shield className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Super Garantia',
      description: 'Serviços padronizados com garantia completa'
    },
    {
      icon: <Award className="w-8 h-8 text-[#be1e2d]" />,
      title: '20+ Anos',
      description: 'Tradição em reparação automotiva desde 2006'
    },
    {
      icon: <Users className="w-8 h-8 text-[#be1e2d]" />,
      title: 'Profissionais Treinados',
      description: 'Equipe especializada e qualificada'
    }
  ];

  const servicosPrincipais = [
    'Manutenção e recarga de gás do ar condicionado',
    'Higienização ar condicionados',
    'Revisão Preventiva',
    'Alinhamento de direção',
    'Balanceamento das rodas',
    'Pneus',
    'Amortecedores',
    'Molas',
    'Injeção Eletrônica',
    'Limpeza de bicos injetores',
    'Iluminação',
    'Lubrificantes',
    'Retífica de Motor',
    'Revisão e Regulagem de Motor',
    'Sistema de Arrefecimento',
    'Embreagem',
    'Câmbio / Transmissão Automática',
    'Freios',
    'Suspensão e Direção',
    'Direção Hidráulica',
    'Escapamentos',
    'Catalisador'
  ];

  const compromissos = [
    'Serviços padronizados com Super Garantia',
    'Revisões conforme padrão concessionária',
    'Profissionais treinados',
    'Tradição em reparação automotiva',
    'Comprometimento absoluto com o cliente'
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <InternalPageNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Header */}
      <div className="bg-[#be1e2d] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Para Você</h1>
          <p className="text-xl opacity-90">Seu carro em boas mãos, com serviços executados para facilitar sua compreensão e manutenção.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Diferenciais */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">O que nos diferencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciaisDestaque.map((item, index) => (
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

        {/* Compromissos */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-[#e5e7eb]">
          <h2 className="text-2xl font-bold mb-8 text-[#1f2937]">Nosso Compromisso com você</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compromissos.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#be1e2d] flex-shrink-0 mt-1" />
                <span className="text-[#1f2937]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços Completos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-[#1f2937]">Serviços Completos</h2>
          <p className="text-lg text-[#6b7280] mb-8">
            Mecânica completa com garantia e elevada qualidade
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicosPrincipais.map((servico, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e5e7eb] hover:border-[#be1e2d] transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[#be1e2d] flex-shrink-0" />
                <span className="text-[#1f2937]">{servico}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6b7280] mt-8 italic">
            * Alguns serviços são realizados fora da empresa com garantia SPA
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#be1e2d] to-[#8f1320] text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para cuidar do seu carro?</h3>
          <p className="text-xl mb-8 opacity-90">Entre em contato conosco e agende seu serviço</p>
          <Button 
            onClick={() => window.open('https://wa.me/5551981833205?text=' + encodeURIComponent('Olá! Gostaria de agendar um serviço para meu veículo na SPA Automotiva.'), '_blank')}
            className="bg-white text-[#be1e2d] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Agendar Serviço
          </Button>
        </div>
      </div>
    </div>
  );
}
