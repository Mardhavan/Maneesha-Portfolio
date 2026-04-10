import { BarChart3, Database, TrendingUp, Shield } from "lucide-react";

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

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">About Me</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
        Driving insights through data analytics
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-xl bg-card p-6 shadow-card hover:shadow-warm transition-shadow">
            <h.icon className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-12">
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

export default AboutSection;
