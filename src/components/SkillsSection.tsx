import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  { title: "Analytics & Process", skills: ["Trend Identification", "Process Improvement", "Operational Reporting", "Compliance Analysis"] },
  { title: "Data & Querying", skills: ["SQL", "Data Retrieval", "Structured Data", "Dataset Analysis"] },
  { title: "Programming", skills: ["Python", "Data Processing", "Scripting", "Automation"] },
  { title: "Spreadsheet & Reporting", skills: ["Microsoft Excel", "Pivot Tables", "VLOOKUP", "Data Filtering"] },
  { title: "Data Handling", skills: ["Data Cleaning", "Data Validation", "Data Classification", "Data Interpretation"] },
  { title: "Productivity Tools", skills: ["Word", "Excel", "PowerPoint", "Google Sheets"] },
];

const SkillsSection = () => {
  const heading = useScrollAnimation();
  const grid = useScrollAnimation(0.1);

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-14">
            Tools & Technologies
          </h2>
        </div>

        <div ref={grid.ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children ${grid.isVisible ? "stagger-visible" : ""}`}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 md:p-6 hover-lift group">
              <h3 className="font-heading font-semibold text-foreground mb-4 text-sm">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-primary/8 border border-primary/15 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default"
                  >
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
};

export default SkillsSection;
