import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.svg';

export type SitePage = 'home' | 'para-voce' | 'para-empresa';

interface InternalPageNavbarProps {
  currentPage: SitePage;
  onNavigate: (page: SitePage) => void;
}

export default function InternalPageNavbar({ currentPage, onNavigate }: InternalPageNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links: Array<{ key: SitePage; label: string }> = [
    { key: 'home', label: 'Inicio' },
    { key: 'para-voce', label: 'Para Voce' },
    { key: 'para-empresa', label: 'Para Empresa' }
  ];

  return (
    <>
      <nav className="navbar-spa scrolled">
        <button className="flex items-center justify-center" onClick={() => onNavigate('home')}>
          <img src={logo} alt="SPA Automotiva Logo" className="w-20 h-20 transition-all duration-300" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => onNavigate(link.key)}
              className={`text-base font-mono uppercase tracking-widest transition-colors ${
                currentPage === link.key ? 'text-[#be1e2d]' : 'text-[#6b7280] hover:text-[#1f2937]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => {
                  onNavigate(link.key);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium ${currentPage === link.key ? 'text-[#be1e2d]' : 'text-[#1f2937]'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
