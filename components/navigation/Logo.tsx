interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <a className={`text-white font-bold text-xl py-1 ${className}`} href="#home">
      dmnkws.dev
    </a>
  );
}
