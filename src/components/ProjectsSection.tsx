import { ExternalLink, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const heading = useScrollAnimation();
  const card = useScrollAnimation(0.1);

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground mb-14">
            Academic and professional projects demonstrating analytical and technical capabilities
          </p>
        </div>

        <div ref={card.ref} className={`max-w-3xl mx-auto scroll-hidden-scale ${card.isVisible ? "scroll-visible-scale" : ""}`}>
          <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 md:p-8 hover-lift group">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                <Code2 className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
                  Hostel Management System
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["SQL", "Python", "Database Design"].map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Designed a relational database structure for managing student accommodation records with SQL schema design and table relationships.
            </p>

            <div className="border-t border-border/50 pt-5">
              <h4 className="text-sm font-semibold text-foreground mb-3">Key Implementation Details</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Relational database with SQL schema design and table relationships for hostel administration",
                  "Role-based student information update logic using Python scripting",
                  "Structured occupancy and fee-status tracking datasets integrating Python with SQL queries",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary shrink-0 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
