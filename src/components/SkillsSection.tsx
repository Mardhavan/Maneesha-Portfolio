const skillCategories = [
  { title: "Analytics & Process", skills: ["Trend Identification", "Process Improvement", "Operational Reporting", "Compliance Analysis"] },
  { title: "Data & Querying", skills: ["SQL", "Data Retrieval", "Structured Data", "Dataset Analysis"] },
  { title: "Programming", skills: ["Python", "Data Processing", "Scripting"] },
  { title: "Spreadsheet & Reporting", skills: ["Microsoft Excel", "Pivot Tables", "VLOOKUP", "Data Filtering"] },
  { title: "Data Handling", skills: ["Data Cleaning", "Data Validation", "Data Classification", "Data Interpretation"] },
  { title: "Productivity Tools", skills: ["Word", "Excel", "PowerPoint"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Technical Skills</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
        Tools & Technologies
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="rounded-xl bg-card p-6 shadow-card">
            <h3 className="font-heading font-semibold text-foreground mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
