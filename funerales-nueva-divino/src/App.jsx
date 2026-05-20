import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MobileCatalog from './components/MobileCatalog';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MobileCatalog />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}