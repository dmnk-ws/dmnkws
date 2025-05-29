import Nav from '@/components/navigation/nav';
import { ActiveSectionProvider } from '@/context/ActiveSectionProvider';

export default function Home() {
  return (
    <ActiveSectionProvider>
      <header>
        <Nav />
      </header>
      <main className="mt-19 md:mt-25">
        <section id="home" className="min-h-screen bg-red-100 p-8">
          <h1 className="text-4xl mb-4">Home</h1>
          <p>This is the Home section.</p>
        </section>
        <section id="about" className="min-h-screen bg-blue-100 p-8">
          <h1 className="text-4xl mb-4">About</h1>
          <p>This is the About section.</p>
        </section>
        <section id="portfolio" className="min-h-screen bg-green-100 p-8">
          <h1 className="text-4xl mb-4">Portfolio</h1>
          <p>This is the Portfolio section.</p>
        </section>
        <section id="contact" className="min-h-screen bg-yellow-100 p-8">
          <h1 className="text-4xl mb-4">Contact</h1>
          <p>This is the Contact section.</p>
        </section>
      </main>
      <footer>Footer</footer>
    </ActiveSectionProvider>
  );
}
