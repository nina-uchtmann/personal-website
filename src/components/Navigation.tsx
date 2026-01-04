import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="max-6xl mx-auto p-10 flex justify-between">
        <span className="font-display text-4xl tracking-wider">NINA UCHTMANN</span>
        <ul className="flex gap-30 tracking-wider text-2xl">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About Me</Link></li>
        </ul>
    </nav>
  );
}