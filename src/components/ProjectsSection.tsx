const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Featured Projects</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Showcasing data-driven solutions
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Academic and professional projects demonstrating analytical and technical capabilities
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl bg-card p-8 shadow-card hover:shadow-warm transition-shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            {["SQL", "Python", "Database Design"].map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Hostel Management System</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Designed a relational database structure for managing student accommodation records with SQL schema design and table relationships.
          </p>
          <h4 className="text-sm font-semibold text-foreground mb-3">Core Implementation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary">•</span>Relational database with SQL schema design and table relationships for hostel administration</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Role-based student information update logic using Python scripting</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Structured occupancy and fee-status tracking datasets integrating Python with SQL queries</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
