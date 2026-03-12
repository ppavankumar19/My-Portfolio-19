import { Github, ExternalLink } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'VaakAI — Communication Analyzer',
    isCurrent: true,
    description:
      'AI-powered web app that analyzes video recordings of interviews, presentations, and demos to improve spoken communication. Features verbatim transcripts with Indian language support, filler word detection, vocabulary scoring, radar charts, and RAG-based Q&A on sessions.',
    tags: ['Python', 'FastAPI', 'Groq', 'Sarvam.ai', 'ChromaDB', 'PostgreSQL'],
    githubUrl: 'https://github.com/ppavankumar19/VaakAI',
    liveUrl: 'https://github.com/ppavankumar19/VaakAI',
    comingSoon: true,
  },
  {
    title: 'Atlas — AI Travel Planner',
    isNew: true,
    description:
      'Full-stack AI travel planner powered by Groq Llama 3.3 70B. Generates day-by-day itineraries with live Airbnb listings, interactive Leaflet.js maps, 150+ currency conversion, and PDF/calendar export.',
    tags: ['Python', 'Flask', 'Groq', 'Agno', 'Leaflet.js', 'Vercel'],
    githubUrl: 'https://github.com/ppavankumar19/atlas-travel-planner',
    liveUrl: 'https://atlas.19062002.xyz',
  },
  {
    title: 'LinuxDojo — Linux Learning Platform',
    description:
      'Interactive web platform to master Linux/Ubuntu commands through structured exercises and progress tracking. Features terminal demo videos via Asciinema, GitHub OAuth, admin dashboard, and mobile-first responsive design.',
    tags: ['Node.js', 'Express', 'Supabase', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ppavankumar19/Linuxdojo',
    liveUrl: 'https://github.com/ppavankumar19/Linuxdojo',
  },
  {
    title: 'High-Demand Crops Analysis',
    isFinalYear: true,
    description:
      'Identifies high-demand crops where India lags globally and visualises data to highlight agricultural growth and investment opportunities. Focused on EDA and data storytelling.',
    tags: ['Python', 'Pandas', 'Power BI', 'Google Colab'],
    githubUrl: 'https://github.com/ppavankumar19/high-demand-crops',
    liveUrl: 'https://github.com/ppavankumar19/high-demand-crops',
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 overflow-x-auto md:overflow-x-visible pt-6 pb-12 md:py-0 snap-x snap-mandatory scrollbar-hide">
      {projects.map((project) => (
        <div
          key={project.title}
          onMouseEnter={playHover}
          className="group relative border-4 border-black p-8 flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white min-w-[300px] w-full md:w-auto snap-start rounded-2xl"
        >
          {'isCurrent' in project && project.isCurrent && (
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter border-4 border-black z-10 rotate-12 group-hover:rotate-6 transition-transform rounded-lg">
              CURRENTLY WORKING
            </div>
          )}
          {'isNew' in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter border-4 border-black z-10 rotate-12 group-hover:rotate-6 transition-transform rounded-lg">
              LATEST WORK
            </div>
          )}
          {'isFinalYear' in project && project.isFinalYear && (
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter border-4 border-black z-10 rotate-12 group-hover:rotate-6 transition-transform rounded-lg">
              FINAL YEAR PROJECT
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white rounded-xl"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            {'comingSoon' in project && project.comingSoon ? (
              <span className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-black/40 bg-white text-[10px] font-black uppercase tracking-wider text-black/40 cursor-not-allowed rounded-xl">
                <ExternalLink className="w-3.5 h-3.5" />
                Coming Soon
              </span>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white rounded-xl"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 flex justify-center md:justify-start">
      <a
        href="https://github.com/ppavankumar19"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:gap-4 transition-all"
      >
        <Github className="w-4 h-4" />
        View All Projects
      </a>
    </div>
  </SectionBlock>
);

export default ProjectsSection;
