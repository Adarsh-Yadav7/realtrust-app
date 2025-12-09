// src/pages/LandingPage.jsx
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import AboutUs from "../components/AboutUs.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import NewsletterSection from "../components/NewsletterSection.jsx";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <AboutUs />
      <ProjectsSection />
      <ClientsSection />
      <NewsletterSection />
    </div>
  );
};

export default LandingPage;
