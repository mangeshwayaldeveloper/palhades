import AboutUs from "../components/AboutUs";
import { Contact } from "../components/Contact";
import ContactsBar from "../components/ContactsBar";
import FeaturesSection from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ServicesSection from "../components/ServicesSection";
import { Testimonial } from "../components/Testimonial";

function Home() {
  return (
    <>
      <ContactsBar />
      <NavBar />
      <div className="bg-hero-pattern bg-no-repeat bg-cover mb-8">
        <HeroSection />
      </div>
      <FeaturesSection />
      <AboutUs />
      <div className="bg-service-pattern overlay bg-no-repeat bg-cover bg-bottom">
        <ServicesSection />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
