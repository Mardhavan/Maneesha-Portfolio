import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Business & Data Analyst
          </p>
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
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm hover:opacity-90 transition"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="mailto:elpurmaneesha@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/maneesha-elpur" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in">
          <div className="relative rounded-2xl bg-card p-4 shadow-card">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
