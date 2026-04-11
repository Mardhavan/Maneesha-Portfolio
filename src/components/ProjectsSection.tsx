import { Code2, Database, Terminal } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const heading = useScrollAnimation();
  const card = useScrollAnimation(0.1);

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Projects</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground mb-14">
            Projects demonstrating analytical and technical capabilities
          </p>
        </div>

        <div ref={card.ref} className={`max-w-3xl mx-auto scroll-hidden-scale ${card.isVisible ? "scroll-visible-scale" : ""}`}>
          <div className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden hover-lift">
            {/* Header gradient */}
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 shrink-0">
                  <Code2 className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    Hostel Management System
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      { label: "SQL", icon: Database },
                      { label: "Python", icon: Terminal },
                      { label: "DB Design", icon: Code2 },
                    ].map((t) => (
                      <span key={t.label} className="inline-flex items-center gap-1 rounded-lg bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-semibold text-primary">
                        <t.icon size={10} />
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Designed a relational database structure for managing student accommodation records with SQL schema design and table relationships.
              </p>

              <div className="rounded-xl border border-border/50 bg-background/40 p-5">
                <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  Key Implementation Details
                </h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Relational database with SQL schema design and table relationships for hostel administration",
                    "Role-based student information update logic using Python scripting",
                    "Structured occupancy and fee-status tracking datasets integrating Python with SQL queries",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/10 text-primary text-[10px] font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
