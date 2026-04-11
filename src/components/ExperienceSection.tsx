import { Briefcase, Calendar, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bullets = [
  "Analyzed high-volume user-generated datasets using Excel (Pivot Tables, filtering, sorting) to support compliance data analysis and maintain moderation accuracy above 98%.",
  "Executed SQL-based data retrieval and structured dataset analysis to identify violation trends, improving queue prioritization efficiency by 12%.",
  "Performed data classification and validation across text, image, and video content streams, reducing repeat review cycles by 10%.",
  "Monitored dataset patterns through trend identification to enhance moderation throughput efficiency by approximately 15%.",
  "Validated structured moderation records using data cleaning and interpretation techniques across 1,200+ daily records.",
];

const ExperienceSection = () => {
  const heading = useScrollAnimation();
  const timeline = useScrollAnimation(0.1);

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Experience</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground mb-14">
            Delivering data-driven insights and operational improvements
          </p>
        </div>

        <div ref={timeline.ref} className={`max-w-3xl mx-auto scroll-hidden-left ${timeline.isVisible ? "scroll-visible-left" : ""}`}>
          <div className="relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden hover-lift">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            
            <div className="p-6 md:p-8 pl-8 md:pl-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0 mt-0.5">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">Accenture Solutions Pvt. Ltd.</h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">Trust & Safety Associate</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Business Analytics & Operations Support</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 shrink-0">
                    <Calendar size={11} className="text-primary" />
                    <span className="text-xs text-primary font-medium">Apr 2025 – Present</span>
                  </span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1">
                    <span className="text-xs text-primary font-bold">Google</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {bullets.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground group">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
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

export default ExperienceSection;
