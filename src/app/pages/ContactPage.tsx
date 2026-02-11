import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Schedule a confidential consultation with our experienced legal team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-input-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 bg-input-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 bg-input-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="caseType">Case Type *</Label>
                    <select
                      id="caseType"
                      name="caseType"
                      required
                      value={formData.caseType}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    >
                      <option value="">Select a practice area</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="family">Family Law</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="commercial">Commercial Litigation</option>
                      <option value="estate">Estate Planning</option>
                      <option value="tax">Tax Law</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="employment">Employment Law</option>
                      <option value="contract">Contract Law</option>
                      <option value="immigration">Immigration</option>
                      <option value="bankruptcy">Bankruptcy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-2 bg-input-background border-border focus:border-primary resize-none"
                      placeholder="Please provide details about your legal matter..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Submit Inquiry
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Required fields. All information provided is strictly confidential and protected by
                    attorney-client privilege.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Address */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Office Address
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Sterling & Associates<br />
                      350 Fifth Avenue, Suite 3000<br />
                      New York, NY 10118<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+12125551234"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      (212) 555-1234
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Main Office Line
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@sterlinglaw.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      info@sterlinglaw.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      General Inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-foreground/70">
                      <div className="flex justify-between gap-4">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Emergency consultations available by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-secondary border border-border h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="text-foreground/50 text-lg">Interactive Map</p>
              <p className="text-muted-foreground text-sm mt-2">
                350 Fifth Avenue, Suite 3000, New York, NY 10118
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
            We're Here to Help
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            At Sterling & Associates, we understand that legal matters can be complex and stressful. Our team
            is committed to providing clear guidance and effective representation. Whether you're facing a
            legal challenge or need preventive counsel, we're here to help you navigate the legal system with
            confidence.
          </p>
          <p className="text-foreground/70">
            All consultations are confidential and protected by attorney-client privilege.
          </p>
        </div>
      </section>
    </div>
  );
}
