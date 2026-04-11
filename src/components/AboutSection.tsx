import { BarChart3, Database, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: BarChart3, title: "Operational Analytics", desc: "Trend identification and process improvement across 1,200+ daily datasets" },
  { icon: Database, title: "Data Analysis", desc: "SQL-based data retrieval and structured dataset analysis" },
  { icon: TrendingUp, title: "Process Improvement", desc: "Improved queue prioritisation efficiency by 12%" },
  { icon: Shield, title: "Compliance & QA", desc: "Maintained moderation accuracy above 98%" },
];

const stats = [
  { value: "1,200+", label: "Daily Records Analyzed" },
  { value: "12%", label: "Efficiency Improvement" },
  { value: "98%+", label: "Accuracy Rate" },
];

const AboutSection = () => {
  const heading = useScrollAnimation();
  const cards = useScrollAnimation(0.1);
  const statsAnim = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Driving insights through data analytics
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-14">
            I combine analytical rigor with business acumen to transform raw data into strategic decisions. Currently pursuing an MBA in Systems with Business Analytics at Osmania University.
          </p>
        </div>

        <div ref={cards.ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 stagger-children ${cards.isVisible ? "stagger-visible" : ""}`}>
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 md:p-6 hover-lift group">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <h.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm md:text-base">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div ref={statsAnim.ref} className={`flex flex-wrap justify-center gap-8 md:gap-16 scroll-hidden-scale ${statsAnim.isVisible ? "scroll-visible-scale" : ""}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
