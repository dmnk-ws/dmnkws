import Nav from '@/components/navigation/nav';
import { ActiveSectionProvider } from '@/context/ActiveSectionProvider';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <ActiveSectionProvider>
      <header>
        <Nav />
      </header>
      <main className="mt-18 md:mt-24 xl:mt-25">
        <section
          id="home"
          className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] bg-red-100 p-8"
        >
          <h1 className="text-4xl mb-4">Home</h1>
          <p>This is the Home section.</p>
        </section>
        <section
          id="about"
          className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] bg-blue-100 p-8"
        >
          <h1 className="text-4xl mb-4">About</h1>
          <p>This is the About section.</p>
        </section>
        <section
          id="portfolio"
          className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] bg-green-100 p-8"
        >
          <h1 className="text-4xl mb-4">Portfolio</h1>
          <p>This is the Portfolio section.</p>
        </section>
        <section
          id="contact"
          className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)] xl:min-h-[calc(100vh-100px)] bg-yellow-100 p-8"
        >
          <h1 className="text-4xl mb-4">Contact</h1>
          <p>This is the Contact section.</p>
        </section>
      </main>
      <Footer />
    </ActiveSectionProvider>
  );
}
