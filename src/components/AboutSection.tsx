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
          At <strong>AI Karyashala</strong>, I completed 6 months of intensive systems training under
          Rohini Kumar Barla — covering C, Python internals, networking, Linux, SQL, SSH, and
          cryptography — followed by a 6-month AI-native internship building LLM-powered applications,
          AI agents, and working with MCP, RAG, and agentic frameworks. Based in Visakhapatnam,
          Andhra Pradesh, India. Open to full-time roles.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
