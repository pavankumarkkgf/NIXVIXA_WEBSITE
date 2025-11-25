import Navbar from './components/Navbar';
import Hero from './home/page'
import Services from './services/page';
import Projects from './projects/page';
import WhyChooseUs from './whychooseus/page';
import Faqs from './components/Faqs';
import Contact from './contact/page';
import Footer from './components/Footer';
import Testimonials from './testimonials/page';

export default function Home() {  
  return (
   <>
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <Testimonials />
    <WhyChooseUs />
    <Faqs />
    <Contact />
    <Footer />
   </>
  );
}