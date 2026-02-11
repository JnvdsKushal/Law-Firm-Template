import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <Scale className="w-7 h-7 text-primary" />
              <div>
                <div className="text-lg font-serif font-semibold text-foreground">Sterling & Associates</div>
                <div className="text-xs text-muted-foreground tracking-wider">ATTORNEYS AT LAW</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing exceptional legal representation with integrity and dedication since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-serif font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-base font-serif font-semibold mb-4 text-foreground">Practice Areas</h3>
            <ul className="space-y-2">
              {['Corporate Law', 'Criminal Defense', 'Family Law', 'Real Estate'].map((item) => (
                <li key={item}>
                  <Link
                    to="/practice-areas"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-serif font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  350 Fifth Avenue, Suite 3000<br />New York, NY 10118
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+12125551234" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@sterlinglaw.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@sterlinglaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sterling & Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
