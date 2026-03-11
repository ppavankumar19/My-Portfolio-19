import { useState } from 'react';
import { playClick, playHover } from '@/hooks/useSoundEffects';
import SoundToggle from './SoundToggle';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Technical Skills', href: '#skills' },
  { label: 'Blog', href: 'https://durgavaraprasad.hashnode.dev/' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between md:justify-center relative">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-0">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <a
                href={link.href}
                className="nav-link px-4 py-1 active:opacity-50 transition-opacity"
                onClick={playClick}
                onMouseEnter={playHover}
                onTouchStart={playClick}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {link.label}
              </a>
              {i < links.length - 1 && (
                <span className="text-foreground/20 text-xs">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Desktop Sound Toggle (Absolute Right) */}
        <div className="hidden md:block absolute right-6">
          <SoundToggle />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex justify-between w-full items-center">
          <div className="w-10" /> {/* Spacer to center menu */}
          <button
            onClick={() => {
              playClick();
              setOpen(!open);
            }}
            onMouseEnter={playHover}
            onTouchStart={playClick}
            className="nav-link active:scale-95 transition-transform"
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <div className="scale-75">
            <SoundToggle />
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-base active:scale-95 transition-transform"
                onClick={() => {
                  playClick();
                  setOpen(false);
                }}
                onMouseEnter={playHover}
                onTouchStart={playClick}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
