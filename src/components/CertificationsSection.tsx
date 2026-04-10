import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certs = [
  { name: "Python and MySQL for Data Processing", org: "Techyz Innovative Trainings Pvt. Ltd." },
  { name: "Employability Skill Programme", org: "Mahindra Pride Classroom" },
];

const CertificationsSection = () => {
  const heading = useScrollAnimation();
  const list = useScrollAnimation(0.1);

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heading.ref} className={`scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Certifications</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">Professional Certifications</h2>
        </div>

        <div ref={list.ref} className={`max-w-2xl mx-auto space-y-4 stagger-children ${list.isVisible ? "stagger-visible" : ""}`}>
          {certs.map((c) => (
            <div key={c.name} className="flex items-start gap-4 rounded-xl glass-card p-5 hover-lift">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <Award className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
