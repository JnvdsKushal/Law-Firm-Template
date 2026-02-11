import { Link } from 'react-router-dom';
import {
  Briefcase,
  Scale,
  Users,
  Home,
  Building2,
  Gavel,
  FileText,
  TrendingUp,
  Shield,
  Heart,
  Handshake,
  Globe,
  ArrowRight,
} from 'lucide-react';

export function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Corporate Law',
      description:
        'Comprehensive legal counsel for business formation, mergers and acquisitions, corporate governance, and compliance matters. We guide companies through complex transactions and regulatory requirements.',
    },
    {
      icon: <Gavel className="w-10 h-10" />,
      title: 'Criminal Defense',
      description:
        'Aggressive defense representation for individuals facing criminal charges, from misdemeanors to serious felonies. We protect your rights and fight for the best possible outcome.',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Family Law',
      description:
        'Compassionate guidance through divorce, child custody, adoption, prenuptial agreements, and other family-related legal matters. We handle sensitive issues with care and professionalism.',
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: 'Real Estate Law',
      description:
        'Expert representation for residential and commercial property transactions, title disputes, zoning issues, and landlord-tenant matters. We ensure smooth property transactions.',
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Commercial Litigation',
      description:
        'Strategic litigation services for business disputes, contract breaches, partnership disagreements, and intellectual property conflicts. We fight to protect your business interests.',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Estate Planning',
      description:
        'Comprehensive estate planning services including wills, trusts, probate administration, and asset protection strategies. We help you secure your legacy for future generations.',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Tax Law',
      description:
        'Strategic tax planning and representation before the IRS. We handle tax controversies, audits, and develop tax-efficient strategies for individuals and businesses.',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Personal Injury',
      description:
        'Dedicated representation for victims of accidents, medical malpractice, and wrongful death. We fight to secure fair compensation for your injuries and losses.',
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: 'Employment Law',
      description:
        'Comprehensive employment law services for both employers and employees, including discrimination claims, wrongful termination, and employment contract negotiations.',
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: 'Contract Law',
      description:
        'Drafting, reviewing, and negotiating contracts to protect your interests. We handle all types of agreements from simple contracts to complex commercial arrangements.',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Immigration Law',
      description:
        'Assistance with visa applications, green cards, citizenship, deportation defense, and family-based immigration matters. We help navigate the complex immigration system.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Bankruptcy',
      description:
        'Guidance through Chapter 7 and Chapter 13 bankruptcy proceedings, debt restructuring, and creditor negotiations. We help you find the best path to financial recovery.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground mb-6">
              Practice Areas
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Comprehensive legal services across multiple practice areas, delivered with expertise and dedication
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-card border border-border p-8 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="text-primary mb-6 transition-transform group-hover:scale-110">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {area.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Our experienced attorneys are ready to provide the legal guidance you need. Contact us today for a
              confidential consultation and let us help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/attorneys"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Meet Our Attorneys
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
