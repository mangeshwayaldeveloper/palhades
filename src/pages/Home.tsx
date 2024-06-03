import AboutUs from "../components/AboutUs";
import ContactsBar from "../components/ContactsBar";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ServicesSection from "../components/ServicesSection";

function Home() {
  return (
    <>
      <ContactsBar />
      <NavBar />
      <div className="bg-hero-pattern bg-no-repeat bg-cover">
        <HeroSection />
      </div>
      <FeaturesSection />
      <AboutUs />
      <div className="bg-service-pattern overlay bg-no-repeat bg-cover bg-bottom">
        <ServicesSection />
      </div>
    </>
  );
}

export default Home;
