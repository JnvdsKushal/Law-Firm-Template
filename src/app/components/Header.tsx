import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Attorneys', path: '/attorneys' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Scale className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <div>
              <div className="text-xl font-serif font-semibold text-foreground">
                Sterling & Associates
              </div>
              <div className="text-xs text-muted-foreground tracking-wider">
                ATTORNEYS AT LAW
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-px bg-primary transition-transform origin-left ${
                    location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:block px-6 py-2.5 bg-primary text-primary-foreground font-medium tracking-wide transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-6 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-base ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-center font-medium"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
