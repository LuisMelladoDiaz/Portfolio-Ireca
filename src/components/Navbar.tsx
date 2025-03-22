'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Statement', path: '/statement' },
    { name: 'Selected Works', path: '/selected-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-card border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold text-primary hover:text-accent transition-colors">
            Ireca
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-text hover:text-accent transition-colors ${
                    pathname === link.path ? 'font-bold text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;