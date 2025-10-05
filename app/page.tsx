import Nav from '@/components/navigation/Nav';
import Footer from '@/components/footer/Footer';
import Home from '@/components/section/Home';
import About from '@/components/section/About';
import Portfolio from '@/components/section/Portfolio';
import Contact from '@/components/section/Contact';
import { ActiveSectionProvider } from '@/context/ActiveSectionProvider';

export default function Main() {
  return (
    <ActiveSectionProvider>
      <header>
        <Nav />
      </header>
      <main className="mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl mt-18 md:mt-24 xl:mt-25">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </ActiveSectionProvider>
  );
}
