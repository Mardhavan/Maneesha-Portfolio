import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Education</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">Academic Background</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-xl bg-card p-6 shadow-card">
          <GraduationCap className="text-primary mb-3" size={28} />
          <h3 className="font-heading text-lg font-bold text-foreground">MBA in Systems with Business Analytics</h3>
          <p className="text-primary text-sm font-medium">Osmania University</p>
          <p className="text-sm text-muted-foreground mt-1">Oct 2024 – Jun 2026</p>
          <p className="text-sm text-muted-foreground mt-3">Specializing in business analytics, systems management, and data-driven decision making.</p>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-card">
          <GraduationCap className="text-primary mb-3" size={28} />
          <h3 className="font-heading text-lg font-bold text-foreground">B.Sc. in MPCs</h3>
          <p className="text-primary text-sm font-medium">Pratibha Degree & PG College, Osmania University</p>
          <p className="text-sm text-muted-foreground mt-1">Sep 2020 – Aug 2024 · CGPA: 8.15 / 10</p>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
