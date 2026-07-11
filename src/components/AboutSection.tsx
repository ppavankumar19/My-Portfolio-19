import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm an <strong>AI Native Software Developer</strong> building backend-heavy systems,
          full-stack platforms, and GenAI-powered products. B.Tech CSE graduate from
          GITAM University (2025).
        </p>
        <p className="body-text max-w-2xl mt-6">
          I specialise in <strong>backend architecture</strong>, <strong>full-stack development</strong>,
          and <strong>Generative AI integrations</strong> — building everything from REST APIs
          and e-commerce platforms to LLM-powered travel planners.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          Through an internship at <strong>AI Karyashala R&amp;D</strong>, I gained hands-on
          experience with LLMs, open-source agentic frameworks, prompt engineering, MCP, and RAG —
          building and testing AI agents locally while collaborating with mentors on real-world
          engineering practices. Based in Visakhapatnam, Andhra Pradesh, India. Open to full-time roles.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
