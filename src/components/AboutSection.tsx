import { BarChart3, Database, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: BarChart3, title: "Operational Analytics", desc: "Trend identification and process improvement across 1,200+ daily datasets" },
  { icon: Database, title: "Data Analysis", desc: "SQL-based data retrieval and structured dataset analysis" },
  { icon: TrendingUp, title: "Process Improvement", desc: "Improved queue prioritisation efficiency by 12%" },
  { icon: Shield, title: "Compliance & QA", desc: "Maintained moderation accuracy above 98%" },
];

const stats = [
  { value: "1,200+", label: "Daily Records" },
  { value: "12%", label: "Efficiency Gain" },
  { value: "98%+", label: "Accuracy Rate" },
];

const AboutSection = () => {
  const heading = useScrollAnimation();
  const cards = useScrollAnimation(0.1);
  const statsAnim = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heading.ref} className={`scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Driving insights through data analytics
          </h2>
        </div>

        <div ref={cards.ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger-children ${cards.isVisible ? "stagger-visible" : ""}`}>
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl glass-card p-6 hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <h.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div ref={statsAnim.ref} className={`flex flex-wrap justify-center gap-12 scroll-hidden-scale ${statsAnim.isVisible ? "scroll-visible-scale" : ""}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-heading font-bold text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
