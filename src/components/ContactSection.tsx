import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Get In Touch</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
        Ready to connect?
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
            <input className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Email Address</label>
            <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Your Message</label>
            <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Write your message..." />
          </div>
          <button type="submit" className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-warm hover:opacity-90 transition">
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="text-primary shrink-0 mt-1" size={20} />
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">+91 905 936 6033</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-primary shrink-0 mt-1" size={20} />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">elpurmaneesha@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-primary shrink-0 mt-1" size={20} />
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-sm text-muted-foreground">Hyderabad, India</p>
            </div>
          </div>
          <p className="text-sm text-primary font-medium mt-4">Available for opportunities</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
