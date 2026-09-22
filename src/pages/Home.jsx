import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyUs from "../components/WhyUs";
import AboutPreview from "../components/AboutPreview";
import CTA from "../components/CTA";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <AboutPreview />
      <CTA />
    </main>
  );
}

export default Home;