import { ArrowDown, Download, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-primary" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Business & Data Analyst
            </p>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Maneesha{" "}
            <span className="text-gradient">Elpur</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            Business and Data Analyst with experience analysing 1,200+ daily operational datasets at Accenture (Google operations support). MBA candidate in Systems with Business Analytics.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm hover:shadow-glow transition-all duration-300"
            >
              View Projects <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground hover:shadow-card transition-all duration-300"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="mailto:elpurmaneesha@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/maneesha-elpur" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="relative animate-float">
            <div className="rounded-2xl glass-card p-4 shadow-card animate-pulse-glow">
              <img
                src={profileImg}
                alt="Maneesha Elpur"
                width={400}
                height={400}
                className="rounded-xl object-cover w-72 h-72 md:w-80 md:h-80"
              />
              <div className="text-center mt-3">
                <p className="font-heading font-bold text-foreground">Maneesha Elpur</p>
                <p className="text-sm text-muted-foreground">Business & Data Analyst</p>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-3xl border border-primary/10 -z-10" />
            <div className="absolute -inset-6 rounded-3xl border border-primary/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
