import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";
import MissionVision from "../components/MissionVision";
import Approach from "../components/Approach";
import Values from "../components/Values";
import CTA from "../components/CTA";

function About() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <Approach />
      <Values />
      <CTA />
    </main>
  );
}

export default About;