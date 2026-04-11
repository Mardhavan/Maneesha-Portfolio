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
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:elpurmaneesha@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    toast.success("Opening your email client...");
    setTimeout(() => { setSent(false); setName(""); setEmail(""); setMessage(""); }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-14">
            Interested in working together? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div ref={form.ref} className={`scroll-hidden-left ${form.isVisible ? "scroll-visible-left" : ""}`}>
            <form className="space-y-4 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 md:p-8" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary/50 resize-none transition-all"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="group w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                {sent ? (
                  <><CheckCircle size={16} /> Message Sent!</>
                ) : (
                  <>Send Message <Send size={16} className="group-hover:translate-x-0.5 transition-transform" /></>
                )}
              </button>
            </form>
          </div>

          <div ref={info.ref} className={`space-y-4 scroll-hidden-right ${info.isVisible ? "scroll-visible-right" : ""}`}>
            {[
              { icon: Phone, label: "Phone", value: "+91 905 936 6033" },
              { icon: Mail, label: "Email", value: "elpurmaneesha@gmail.com" },
              { icon: MapPin, label: "Location", value: "Hyderabad, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 hover-lift">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="font-medium text-foreground text-sm">{value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm text-primary font-semibold">Available for Opportunities</p>
              </div>
              <p className="text-xs text-muted-foreground">Open to full-time roles in Business & Data Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
