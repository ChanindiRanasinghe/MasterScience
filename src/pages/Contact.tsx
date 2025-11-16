import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MessageSquare, HelpCircle } from 'lucide-react';

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Contact & Support</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <Mail className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">info@brightpath.com</p>
                <p className="text-sm text-gray-500">We reply within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Phone className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">011 - 245 0933</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <MessageSquare className="w-12 h-12 text-[#020C35] mb-4 mx-auto" />
                <h3 className="mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-2">Available 24/7</p>
                <Button variant="link" className="text-[#020C35] p-0">Start Chat</Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="userType">I am a:</Label>
                    <select id="userType" className="w-full border rounded-md p-2">
                      <option>Prospective Student</option>
                      <option>Current Student</option>
                      <option>Parent/Guardian</option>
                      <option>Prospective Tutor</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <Button className="w-full bg-[#020C35] hover:bg-[#020C35]/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* FAQ Link */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-8 h-8 text-[#020C35] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl mb-2">Frequently Asked Questions</h3>
                      <p className="text-gray-600 mb-4">
                        Find quick answers to common questions about our platform, tutoring, and pricing.
                      </p>
                      <Button variant="outline">View FAQ</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Categories */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-4">Quick Support Links</h3>
                  <div className="space-y-2">
                    <Button variant="link" className="p-0 h-auto text-[#020C35] justify-start">
                      → Technical Support
                    </Button>
                    <br />
                    <Button variant="link" className="p-0 h-auto text-[#020C35] justify-start">
                      → Billing Questions
                    </Button>
                    <br />
                    <Button variant="link" className="p-0 h-auto text-[#020C35] justify-start">
                      → Tutor Applications
                    </Button>
                    <br />
                    <Button variant="link" className="p-0 h-auto text-[#020C35] justify-start">
                      → Partnership Inquiries
                    </Button>
                    <br />
                    <Button variant="link" className="p-0 h-auto text-[#020C35] justify-start">
                      → Media & Press
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-4">Follow Us</h3>
                  <p className="text-gray-600 mb-4">
                    Stay connected and get the latest updates, tips, and resources.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}