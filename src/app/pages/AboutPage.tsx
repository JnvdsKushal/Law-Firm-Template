import { Award, Target, Users, Shield } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our legal practices and client relationships.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Our commitment to superior legal service drives us to exceed client expectations consistently.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focus',
      description: 'Every strategy is tailored to serve our clients\' unique needs and achieve their specific goals.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Results',
      description: 'We are dedicated to delivering favorable outcomes through strategic legal advocacy.',
    },
  ];

  const timeline = [
    { year: '1985', event: 'Sterling & Associates founded in New York City' },
    { year: '1992', event: 'Expanded practice to include corporate law division' },
    { year: '2001', event: 'Opened second office in Manhattan' },
    { year: '2010', event: 'Recognized as Top 50 Law Firms in New York' },
    { year: '2018', event: 'Celebrated 30+ years of legal excellence' },
    { year: '2025', event: 'Continues to serve clients with dedication and expertise' },
  ];

  const certifications = [
    { title: 'AV Preeminent Rating', org: 'Martindale-Hubbell' },
    { title: 'Best Law Firms', org: 'U.S. News & World Report' },
    { title: 'Super Lawyers Recognition', org: 'Thomson Reuters' },
    { title: 'Top Rated Lawyers', org: 'American Lawyer Media' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground mb-6">
              About Our Firm
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Building lasting relationships through exceptional legal representation and unwavering dedication to justice
            </p>
          </div>
        </div>
      </section>

      {/* Firm Introduction */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1619771678310-9f1e06085d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcwNDIwMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Law library"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Excellence Through Experience
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Founded in 1985, Sterling & Associates has grown from a small practice into one of New York's
                  most respected law firms. Our success is built on a foundation of legal excellence, ethical
                  practice, and an unwavering commitment to our clients.
                </p>
                <p>
                  With over 35 years of combined experience, our team of skilled attorneys brings deep expertise
                  across multiple practice areas. We understand that every legal matter is unique, and we pride
                  ourselves on delivering personalized strategies tailored to each client's specific needs.
                </p>
                <p>
                  Our firm has successfully represented individuals, families, and businesses in complex legal matters,
                  earning a reputation for thorough preparation, strategic thinking, and aggressive advocacy when
                  necessary.
                </p>
                <p>
                  At Sterling & Associates, we don't just practice law—we build lasting relationships with our clients
                  based on trust, transparency, and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We are guided by core principles that define how we serve our clients and practice law
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 text-center transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-foreground/70">
              Four decades of legal excellence and growth
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-start group"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-serif font-semibold text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 pt-2">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 transition-all group-hover:ring-8" />
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-8 -ml-[9px]">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-foreground/70">
              Recognized for excellence in legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 text-center transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.org}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our commitment to excellence has been recognized by leading legal organizations and publications.
              These accolades reflect our dedication to providing superior legal representation and maintaining
              the highest professional standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
