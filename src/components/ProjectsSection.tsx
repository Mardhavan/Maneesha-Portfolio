import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const heading = useScrollAnimation();
  const card = useScrollAnimation(0.1);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heading.ref} className={`scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Featured Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Showcasing data-driven solutions
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Academic and professional projects demonstrating analytical and technical capabilities
          </p>
        </div>

        <div ref={card.ref} className={`max-w-3xl mx-auto scroll-hidden-scale ${card.isVisible ? "scroll-visible-scale" : ""}`}>
          <div className="rounded-2xl glass-card p-8 hover-lift group">
            <div className="flex flex-wrap gap-2 mb-4">
              {["SQL", "Python", "Database Design"].map((t) => (
                <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">Hostel Management System</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Designed a relational database structure for managing student accommodation records with SQL schema design and table relationships.
            </p>
            <h4 className="text-sm font-semibold text-foreground mb-3">Core Implementation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary shrink-0">▸</span>Relational database with SQL schema design and table relationships for hostel administration</li>
              <li className="flex gap-2"><span className="text-primary shrink-0">▸</span>Role-based student information update logic using Python scripting</li>
              <li className="flex gap-2"><span className="text-primary shrink-0">▸</span>Structured occupancy and fee-status tracking datasets integrating Python with SQL queries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
