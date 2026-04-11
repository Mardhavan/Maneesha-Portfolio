import { ArrowDown, Download, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile-cartoon.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-primary/8 blur-[80px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fade-up text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm px-4 py-2 mb-6 animate-pulse-glow">
            <Sparkles size={14} className="text-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Open to Opportunities
            </p>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-gradient relative">
              Maneesha
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5Q50 1 100 5.5T199 5.5" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="animate-draw" />
              </svg>
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-foreground/80 font-medium">
            Business & Data Analyst
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 text-sm md:text-base">
            MBA candidate specializing in Business Analytics with hands-on experience analyzing <span className="text-primary font-semibold">1,200+ daily datasets</span> at Accenture (Google operations). Turning complex data into actionable insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent animate-gradient rounded-xl" />
              <span className="relative">View Projects</span>
              <ArrowDown size={16} className="relative group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card/60 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
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
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-border bg-card/60 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-glow transition-all duration-300 hover:scale-105"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Cartoon Avatar */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <div className="relative">
            {/* Glowing ring behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl scale-110 animate-pulse-glow" />
            
            <div className="relative">
              <img
                src={profileImg}
                alt="Maneesha Elpur – Business & Data Analyst"
                width={512}
                height={512}
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl animate-float"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 md:top-2 md:right-0 rounded-xl border border-border bg-card/90 backdrop-blur-sm px-3 py-2 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-xs font-bold text-primary">📊 SQL Expert</p>
            </div>
            <div className="absolute -bottom-2 -left-2 md:bottom-4 md:left-0 rounded-xl border border-border bg-card/90 backdrop-blur-sm px-3 py-2 shadow-card animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-xs font-bold text-primary">🐍 Python</p>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-8 rounded-xl border border-border bg-card/90 backdrop-blur-sm px-3 py-2 shadow-card animate-float" style={{ animationDelay: "3s" }}>
              <p className="text-xs font-bold text-primary">📈 Analytics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-primary/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
