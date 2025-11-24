import Navbar from './components/Navbar';
import Hero from './components/Herosection'
import Services from './components/Services';
import Projects from './projects/page';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/Whychooseus';
import Faqs from './components/Faqs';
import Contact from './contact/page';
import Footer from './components/Footer';

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