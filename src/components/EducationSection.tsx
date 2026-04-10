import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const heading = useScrollAnimation();
  const cards = useScrollAnimation(0.1);

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heading.ref} className={`scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Education</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">Academic Background</h2>
        </div>

        <div ref={cards.ref} className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children ${cards.isVisible ? "stagger-visible" : ""}`}>
          <div className="rounded-xl glass-card p-6 hover-lift">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">MBA in Systems with Business Analytics</h3>
            <p className="text-primary text-sm font-medium">Osmania University</p>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-0.5 mt-2">
              <p className="text-xs text-primary font-medium">Oct 2024 – Jun 2026</p>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Specializing in business analytics, systems management, and data-driven decision making.</p>
          </div>

          <div className="rounded-xl glass-card p-6 hover-lift">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">B.Sc. in MPCs</h3>
            <p className="text-primary text-sm font-medium">Pratibha Degree & PG College, Osmania University</p>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-0.5 mt-2">
              <p className="text-xs text-primary font-medium">Sep 2020 – Aug 2024 · CGPA: 8.15 / 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
