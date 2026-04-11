import { GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const heading = useScrollAnimation();
  const cards = useScrollAnimation(0.1);

  return (
    <section id="education" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Education</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-14">
            Academic Background
          </h2>
        </div>

        <div ref={cards.ref} className={`grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto stagger-children ${cards.isVisible ? "stagger-visible" : ""}`}>
          {[
            {
              degree: "MBA in Systems with Business Analytics",
              school: "Osmania University",
              date: "Oct 2024 – Jun 2026",
              desc: "Specializing in business analytics, systems management, and data-driven decision making.",
            },
            {
              degree: "B.Sc. in MPCs",
              school: "Pratibha Degree & PG College, Osmania University",
              date: "Sep 2020 – Aug 2024",
              desc: "CGPA: 8.15 / 10",
            },
          ].map((edu) => (
            <div key={edu.degree} className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 md:p-6 hover-lift">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{edu.degree}</h3>
              <p className="text-primary text-sm font-medium mt-1">{edu.school}</p>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 mt-3">
                <Calendar size={11} className="text-primary" />
                <p className="text-xs text-primary font-medium">{edu.date}</p>
              </div>
              {edu.desc && (
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{edu.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
