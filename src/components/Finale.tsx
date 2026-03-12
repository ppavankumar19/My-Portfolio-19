import {
  Github,
  Linkedin,
  Mail,
  Heart,
} from 'lucide-react';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.044.028.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const Finale = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ppavankumar19', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/pavankumar19',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:pavankumar.prrp@gmail.com',
      label: 'Gmail',
    },
    {
      icon: DiscordIcon,
      href: 'https://discord.com/users/1432222984692695122',
      label: 'Discord',
    },
  ];

  const marqueeTags = [
    'Pavan Kumar Ponnuri 🚀',
    'Backend Architect | Full Stack | GenAI | LLM Integrations',
    'Building backend systems & AI-native products that ship 🔖',
    'Available for Full-Time Roles & Freelance',
  ];

  return (
    <section className="relative w-full bg-white border-t-8 border-black pt-20 overflow-hidden">
      {/* ... marquee ... */}
      <div className="absolute top-0 left-0 w-full py-4 bg-black overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center shrink-0">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeTags.map((tag) => (
                <span
                  key={tag}
                  className="text-white font-mono text-xs uppercase tracking-[0.3em] mx-10"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        {/* ... content ... */}
        <div className="relative mb-20 text-center">
          <h2 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter text-black/5 absolute -top-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            THANK YOU
          </h2>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tight italic z-10 relative">
            Let's build something{' '}
            <span className="text-white bg-black px-4 py-1 not-italic rounded-lg tracking-normal">
              unforgettable
            </span>{' '}
            together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-24">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 border-2 border-black bg-white hover:bg-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded-2xl"
            >
              <link.icon className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
              <span className="mt-4 font-mono text-xs uppercase tracking-widest font-black group-hover:text-white">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border-2 border-green-600 rounded-full">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-800">
              Available for Freelance Projects
            </span>
          </div>
          <p className="text-xs font-mono text-black/70 uppercase tracking-widest leading-loose max-w-sm">
            Driving Digital Innovation & Building Scalable Tech Products 🌍
          </p>
        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="w-full bg-white pt-10 pb-24 md:pb-10 px-6 mt-auto border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 opacity-70">
          <p className="text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-left">
            © {currentYear} Pavan Kumar Ponnuri
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-right font-medium">
            <span className="whitespace-nowrap">Designed & Engineered</span>
            <span className="flex items-center gap-2">
              <span>with</span>
              <Heart className="w-3.5 h-3.5 text-black fill-black animate-heartbeat inline-block" />
              <span>by Pavan</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finale;
