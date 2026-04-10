import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const ContactSection = () => {
  const heading = useScrollAnimation();
  const form = useScrollAnimation(0.1);
  const info = useScrollAnimation(0.1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    // Open mailto as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:elpurmaneesha@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    toast.success("Opening your email client...");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heading.ref} className={`scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Ready to connect?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div ref={form.ref} className={`scroll-hidden-left ${form.isVisible ? "scroll-visible-left" : ""}`}>
            <form className="space-y-5 rounded-2xl glass-card p-8" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Your Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="group w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-warm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div ref={info.ref} className={`space-y-6 scroll-hidden-right ${info.isVisible ? "scroll-visible-right" : ""}`}>
            {[
              { icon: Phone, label: "Phone", value: "+91 905 936 6033" },
              { icon: Mail, label: "Email", value: "elpurmaneesha@gmail.com" },
              { icon: MapPin, label: "Location", value: "Hyderabad, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-xl glass-card p-5 hover-lift">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl bg-primary/10 p-4 text-center">
              <p className="text-sm text-primary font-semibold">✨ Available for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
