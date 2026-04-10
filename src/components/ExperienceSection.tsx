import SectionBlock from './SectionBlock';

const experiences = [
  {
    role: 'AI Systems Developer — OpenClaw',
    company: 'Self-Directed',
    period: 'Feb 2026 – Present · Currently Building',
    isCurrent: true,
    description:
      'Designing and building OpenClaw — a production-grade multi-agent AI automation system that acts as a virtual social media intern. The system uses a multi-agent architecture where each platform (Instagram, Twitter/X, LinkedIn, Facebook, YouTube, Email) has its own dedicated agent with platform-specific content types, generation logic, and publishing adapters. Accepts input as images, videos, URLs, or text prompts via Telegram; routes each request to the correct platform agent using a two-level intent detector; generates content using a cascading LLM pipeline (Cerebras Qwen-3 235B → Groq LLaMA 70B → NVIDIA Nemotron 120B) with the fastest available model auto-selected at runtime; renders a live preview screenshot via Playwright before publishing; holds content in a draft store and waits for human approval, rejection, rescheduling, or tone changes; auto-publishes approved posts via Playwright browser automation; runs a morning content batch at 8 AM and an evening report at 8 PM; and handles bulk HR offer letter generation from Excel → A4 PDF → SMTP email dispatch.',
    tags: ['Python', 'Multi-Agent AI', 'LLM Integration', 'Playwright', 'Telegram Bot', 'APScheduler', 'Cerebras', 'Groq', 'NVIDIA NIM', 'Async Python'],
  },
  {
    role: 'Data Analytics Intern',
    company: 'GrrowUp',
    period: 'Jun 2024 – Aug 2024 · Remote · 8 Weeks',
    isCurrent: false,
    description:
      'Intensive 8-week Data Analytics internship gaining hands-on exposure to the full analytics workflow — from raw data ingestion to storytelling dashboards presented to stakeholders. Performed end-to-end EDA on real-world datasets, built data cleaning pipelines, created interactive dashboards in Tableau and Google Sheets, wrote complex SQL queries, and developed web scraping scripts. Capstone: data storytelling from raw CSV to executive summary.',
    tags: [],
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-full bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-full bg-black"></div>

            {exp.isCurrent && (
              <span className="inline-block mb-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest border border-green-500 text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400 dark:border-green-700 rounded-sm">
                ● Currently Working
              </span>
            )}
            <h4 className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-base md:text-lg">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-base font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-lg font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm">{exp.description}</p>
            {exp.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono border border-black/20 dark:border-white/20 rounded-sm text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;
