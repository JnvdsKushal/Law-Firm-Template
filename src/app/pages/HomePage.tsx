import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Briefcase, Users, Award, Quote } from 'lucide-react';

export function HomePage() {
  const practiceAreas = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses of all sizes, from startups to Fortune 500 companies.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Criminal Defense',
      description: 'Aggressive representation and strategic defense for individuals facing criminal charges.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Family Law',
      description: 'Compassionate guidance through divorce, custody, and other sensitive family matters.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Real Estate',
      description: 'Expert counsel for residential and commercial property transactions and disputes.',
    },
  ];

  const testimonials = [
    {
      quote: 'Sterling & Associates provided exceptional representation during a complex corporate merger. Their expertise and professionalism were invaluable.',
      author: 'Michael Chen',
      position: 'CEO, TechVentures Inc.',
    },
    {
      quote: 'The team\'s dedication and attention to detail helped us navigate a difficult family situation with dignity and compassion.',
      author: 'Sarah Martinez',
      position: 'Private Client',
    },
    {
      quote: 'Outstanding criminal defense work. They fought tirelessly for my case and achieved the best possible outcome.',
      author: 'David Thompson',
      position: 'Private Client',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1662516201865-8633915e668a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwY29sdW1ucyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA0NzQ1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-6 tracking-tight">
            Excellence in
            <span className="block text-primary mt-2">Legal Advocacy</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            With over 35 years of experience, Sterling & Associates delivers sophisticated legal solutions
            tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/practice-areas"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Trusted Legal Counsel Since 1985
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Sterling & Associates has built a reputation for excellence through unwavering commitment to our clients
                and exceptional results in the courtroom.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our team of experienced attorneys brings together decades of legal expertise across multiple practice areas,
                ensuring comprehensive representation for every client.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Our Firm
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzcwMzkyOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Law office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Our Practice Areas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We provide expert legal representation across a wide range of practice areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-card border border-border p-8 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="text-primary mb-4 transition-transform group-hover:scale-110">
                  {area.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide transition-all hover:bg-primary hover:text-primary-foreground"
            >
              View All Practice Areas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-foreground/70">
              What our clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Schedule a confidential consultation with one of our experienced attorneys today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
