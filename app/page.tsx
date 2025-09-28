import Nav from '@/components/navigation/Nav';
import Footer from '@/components/footer/Footer';
import Main from '@/components/section/Main';
import About from '@/components/section/About';
import Contact from '@/components/section/Contact';
import { ActiveSectionProvider } from '@/context/ActiveSectionProvider';

export default function Home() {
  return (
    <ActiveSectionProvider>
      <header>
        <Nav />
      </header>
      <main className="mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl mt-18 md:mt-24 xl:mt-25">
        <Main />
        <About />
        <section
          id="portfolio"
          className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] border border-gray-300"
        >
          <h1 className="text-4xl mb-4">Portfolio</h1>
          <p>This is the Portfolio section.</p>
        </section>
        <Contact />
      </main>
      <Footer />
    </ActiveSectionProvider>
  );
}
