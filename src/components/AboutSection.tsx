import { BarChart3, Database, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: BarChart3, title: "Operational Analytics", desc: "Trend identification across 1,200+ daily datasets", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Database, title: "Data Analysis", desc: "SQL-based retrieval and structured dataset analysis", color: "from-purple-500/20 to-purple-600/10" },
  { icon: TrendingUp, title: "Process Improvement", desc: "Improved queue prioritisation efficiency by 12%", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: Shield, title: "Compliance & QA", desc: "Maintained moderation accuracy above 98%", color: "from-amber-500/20 to-amber-600/10" },
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
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Me</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Driving Insights Through{" "}
            <span className="text-gradient">Data Analytics</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-14">
            I combine analytical rigor with business acumen to transform raw data into strategic decisions. Currently pursuing an MBA in Systems with Business Analytics at Osmania University.
          </p>
        </div>

        <div ref={cards.ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 stagger-children ${cards.isVisible ? "stagger-visible" : ""}`}>
          {highlights.map((h) => (
            <div key={h.title} className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 hover-lift overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <h.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={statsAnim.ref} className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto scroll-hidden-scale ${statsAnim.isVisible ? "scroll-visible-scale" : ""}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-5">
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">{s.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
