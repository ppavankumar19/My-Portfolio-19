import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm an <strong>AI-Native Software Engineer</strong> building backend-heavy systems,
          full-stack platforms, and GenAI-powered products. B.Tech CSE graduate from
          GITAM University (2025) with an 8.03 CGPA.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I specialise in <strong>backend architecture</strong>, <strong>full-stack development</strong>,
          and <strong>Generative AI integrations</strong> — building everything from REST APIs
          and e-commerce platforms to LLM-powered travel planners.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          Through internships in <strong>Data Analytics</strong> and <strong>Data Science</strong>,
          I've worked with real-world datasets — performing EDA, building dashboards, and
          implementing ML models. Based in Hyderabad, India. Open to full-time roles,
          freelance work, and collaborations.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
