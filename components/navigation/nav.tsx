import NavLink from '@/components/navigation/nav-link';

export default function Nav() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex gap-10 justify-end">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/portfolio" label="Portfolio" />
        <NavLink href="/contact" label="Contact" />
      </ul>
    </nav>
  );
}
