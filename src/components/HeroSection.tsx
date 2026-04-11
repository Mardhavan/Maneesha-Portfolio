import { ArrowDown, Download, Linkedin, Mail, Github } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] animate-float" />
      <div className="absolute bottom-10 -right-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fade-up text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Open to Opportunities
            </p>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-gradient">Maneesha</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium">
            Business & Data Analyst
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
            MBA candidate specializing in Business Analytics with hands-on experience analyzing 1,200+ daily datasets at Accenture (Google operations). Turning complex data into actionable insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              View Projects <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              Download CV <Download size={16} />
            </a>
          </div>

          <div className="mt-8 flex gap-3 justify-center md:justify-start">
            {[
              { icon: Mail, href: "mailto:elpurmaneesha@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/maneesha-elpur", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/60 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-3 shadow-card animate-pulse-glow">
              <img
                src={profileImg}
                alt="Maneesha Elpur – Business & Data Analyst"
                width={512}
                height={512}
                className="rounded-xl object-cover w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
              />
              <div className="text-center mt-3 pb-1">
                <p className="font-heading font-bold text-foreground text-sm">Maneesha Elpur</p>
                <p className="text-xs text-muted-foreground">Business & Data Analyst</p>
              </div>
            </div>
            <div className="absolute -inset-3 rounded-3xl border border-primary/10 -z-10" />
            <div className="absolute -inset-6 rounded-3xl border border-primary/5 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
