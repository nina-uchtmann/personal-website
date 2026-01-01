import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="max-6xl mx-auto p-10 flex justify-between">
        <span className="font-display text-2xl tracking-wider">NINA UCHTMANN</span>
        <ul className="flex gap-30 tracking-wider">
            <li><a href="#about">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">About Me</a></li>
          </ul>
    </nav>
  );
}