import { Mail, Linkedin } from 'lucide-react';

export function AttorneysPage() {
  const attorneys = [
    {
      name: 'Jonathan Sterling',
      role: 'Managing Partner',
      specialization: 'Corporate Law & Mergers',
      experience: '25 years',
      education: 'Harvard Law School, J.D.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'j.sterling@sterlinglaw.com',
    },
    {
      name: 'Rebecca Martinez',
      role: 'Senior Partner',
      specialization: 'Criminal Defense',
      experience: '20 years',
      education: 'Yale Law School, J.D.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'r.martinez@sterlinglaw.com',
    },
    {
      name: 'David Chen',
      role: 'Partner',
      specialization: 'Family Law & Mediation',
      experience: '18 years',
      education: 'Columbia Law School, J.D.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'd.chen@sterlinglaw.com',
    },
    {
      name: 'Sarah Thompson',
      role: 'Partner',
      specialization: 'Real Estate & Property Law',
      experience: '15 years',
      education: 'NYU School of Law, J.D.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 's.thompson@sterlinglaw.com',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Associate',
      specialization: 'Commercial Litigation',
      experience: '12 years',
      education: 'Georgetown Law, J.D.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'm.rodriguez@sterlinglaw.com',
    },
    {
      name: 'Emily Watson',
      role: 'Senior Associate',
      specialization: 'Estate Planning & Probate',
      experience: '10 years',
      education: 'Boston University Law, J.D.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQ3MDk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'e.watson@sterlinglaw.com',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground mb-6">
              Our Attorneys
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Meet our team of experienced legal professionals dedicated to achieving exceptional results for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {attorneys.map((attorney, index) => (
              <div
                key={index}
                className="group bg-card border border-border overflow-hidden transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{attorney.role}</p>
                  <div className="space-y-2 text-sm mb-6">
                    <p className="text-foreground/70">
                      <span className="font-medium text-foreground">Specialization:</span>{' '}
                      {attorney.specialization}
                    </p>
                    <p className="text-foreground/70">
                      <span className="font-medium text-foreground">Experience:</span>{' '}
                      {attorney.experience}
                    </p>
                    <p className="text-foreground/70">
                      <span className="font-medium text-foreground">Education:</span>{' '}
                      {attorney.education}
                    </p>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={`mailto:${attorney.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Profile Example Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative h-[600px]">
              <img
                src={attorneys[0].image}
                alt={attorneys[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                {attorneys[0].name}
              </h2>
              <p className="text-xl text-primary font-medium mb-6">{attorneys[0].role}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Specialization</h3>
                  <p className="text-foreground/70">{attorneys[0].specialization}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-foreground/70">{attorneys[0].experience} of practice</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-foreground/70">{attorneys[0].education}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    Jonathan Sterling is the founding partner of Sterling & Associates, bringing over two decades
                    of experience in corporate law and complex business transactions. His expertise spans mergers
                    and acquisitions, corporate governance, and securities law.
                  </p>
                  <p>
                    Throughout his distinguished career, Jonathan has represented Fortune 500 companies, emerging
                    startups, and private equity firms in transactions valued at over $5 billion. His strategic
                    approach and deep understanding of corporate law have made him a trusted advisor to C-suite
                    executives and board members.
                  </p>
                  <p>
                    He is regularly recognized by leading legal publications and has been featured as a thought
                    leader in corporate law matters. Jonathan is also committed to mentoring young attorneys and
                    frequently speaks at legal conferences nationwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={`mailto:${attorneys[0].email}`}
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  Contact Attorney
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border-2 border-border text-foreground font-semibold transition-all hover:border-primary"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team of experienced attorneys is here to help you navigate your legal challenges
              and achieve the best possible outcome.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
