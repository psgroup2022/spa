import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InternalPageNavbar, { type SitePage } from '@/components/internal-page-navbar';

interface ParaVoceProps {
  onNavigate: (page: SitePage) => void;
  currentPage: SitePage;
}

export default function ParaVoce({ onNavigate, currentPage }: ParaVoceProps) {
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
    <div className="min-h-screen bg-spa-paper">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <InternalPageNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Cabeçalho */}
      <header className="pt-36 pb-14 border-b border-spa-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-spa-red" />
            <span className="label-spec">Carro particular</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display tracking-tight text-spa-ink leading-[1.02] mb-6">
            Para Você
          </h1>
          <p className="text-lg text-spa-body max-w-[58ch] leading-relaxed">
            Revisão e manutenção do carro de uso diário, com o defeito explicado
            antes do orçamento.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Compromissos como lista corrida. Antes eram três cartões iguais
            com ícone por cima do título, mais um cartão aninhado com a lista
            dentro: dois padrões de template de uma vez. */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8">
          <h2 className="lg:col-span-4 text-3xl font-display tracking-tight text-spa-ink leading-[1.05]">
            O compromisso,<br />item por item.
          </h2>
          <ul className="lg:col-span-8 border-t border-spa-line">
            {compromissos.map((item, index) => (
              <li
                key={index}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 items-baseline py-5 border-b border-spa-line"
              >
                <span className="label-spec tnum">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-spa-ink font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços Completos */}
        <div className="mb-16">
          <h2 className="text-3xl font-display tracking-tight mb-4 text-spa-ink">Serviços Completos</h2>
          <p className="text-spa-body mb-10 max-w-[58ch] leading-relaxed">
            Vinte e dois procedimentos executados na oficina, do ar condicionado
            ao catalisador.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicosPrincipais.map((servico, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-spa-surface rounded-lg border border-spa-line hover:border-spa-red transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-spa-red flex-shrink-0" />
                <span className="text-spa-ink">{servico}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-spa-body mt-8 italic">
            * Alguns serviços são realizados fora da empresa com garantia SPA
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-spa-red to-spa-red-deep text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para cuidar do seu carro?</h3>
          <p className="text-xl mb-8 opacity-90">Entre em contato conosco e agende seu serviço</p>
          <Button 
            onClick={() => window.open('https://wa.me/5551981833205?text=' + encodeURIComponent('Olá! Gostaria de agendar um serviço para meu veículo na SPA Automotiva.'), '_blank')}
            className="bg-spa-surface text-spa-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Agendar Serviço
          </Button>
        </div>
      </div>
    </div>
  );
}
