import SectionBlock from './SectionBlock';

const experiences = [
  {
    role: 'AI-Native Intern',
    company: 'AI Karyashala — Research & Development',
    period: 'Feb 2026 – Jul 2026 · Visakhapatnam, India',
    isCurrent: false,
    description:
      'Learned the internal working mechanisms of LLMs and explored open-source models via Ollama and Hugging Face. Built full-stack applications and static pages, and explored RAG and MCP integrations hands-on. Dived into agentic development using frameworks including n8n, Hermes Agent, and OpenClaw — building OpenClaw, a multi-agent social media automation system with platform-specific agents (Instagram, Twitter/X, LinkedIn, YouTube, Email), Telegram-based input, a cascading LLM pipeline (Cerebras Qwen-3 235B → Groq LLaMA 70B → NVIDIA NIM), Playwright-based publishing with live preview, and a human-in-the-loop approval flow.',
    tags: ['Python', 'LLMs', 'Ollama', 'Hugging Face', 'Multi-Agent AI', 'n8n', 'Playwright', 'Telegram Bot', 'Cerebras', 'Groq', 'NVIDIA NIM', 'MCP', 'RAG', 'Prompt Engineering'],
  },
  {
    role: 'AI Native Development Trainee',
    company: 'AI Karyashala — Rohini Kumar Barla',
    period: 'Aug 2025 – Jan 2026 · Visakhapatnam, India',
    isCurrent: false,
    description:
      'Completed a 6-month intensive training programme under Rohini Kumar Barla. Covered systems programming in C (compilation pipeline, LLDB debugging, call stacks, memory segments), Python internals (bytecode, PDB step-debugging), frontend development with HTML, CSS, and JavaScript, backend development with Flask and FastAPI, databases (SQLite3, MySQL, PL/SQL), networking and HTTP fundamentals, SSH tunnelling and port forwarding, Linux shell scripting, DOM manipulation, cryptography basics, and GenAI-assisted learning workflows. Developed the ability to reason across code, OS, and network layers from first principles.',
    tags: ['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'FastAPI', 'SQLite3', 'MySQL', 'PL/SQL', 'Linux', 'Networking', 'SSH', 'Git', 'LLDB', 'PDB'],
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
