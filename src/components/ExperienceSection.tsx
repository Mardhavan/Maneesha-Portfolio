import { Briefcase, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const heading = useScrollAnimation();
  const timeline = useScrollAnimation(0.1);

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center max-w-2xl mx-auto scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mb-14">
            A track record of delivering data-driven insights and operational improvements
          </p>
        </div>

        <div ref={timeline.ref} className={`relative max-w-3xl mx-auto scroll-hidden-left ${timeline.isVisible ? "scroll-visible-left" : ""}`}>
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="relative pl-12 md:pl-16">
            {/* Dot */}
            <div className="absolute left-1.5 md:left-3.5 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-glow">
              <Briefcase size={12} className="text-primary-foreground" />
            </div>

            <div className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-5 md:p-7 hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">Accenture Solutions Pvt. Ltd.</h3>
                  <p className="text-primary font-medium text-sm mt-0.5">Trust & Safety Associate – Business Analytics & Operations Support</p>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 shrink-0 w-fit">
                  <Calendar size={12} className="text-primary" />
                  <p className="text-xs text-primary font-medium">Apr 2025 – Present</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wide">Client: Google</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Analyzed high-volume user-generated datasets using Excel (Pivot Tables, filtering, sorting) to support compliance data analysis and maintain moderation accuracy above 98%.",
                  "Executed SQL-based data retrieval and structured dataset analysis to identify violation trends, improving queue prioritization efficiency by 12%.",
                  "Performed data classification and validation across text, image, and video content streams, reducing repeat review cycles by 10%.",
                  "Monitored dataset patterns through trend identification to enhance moderation throughput efficiency by approximately 15%.",
                  "Validated structured moderation records using data cleaning and interpretation techniques across 1,200+ daily records.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-0.5 shrink-0 font-bold">›</span>
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

export default ExperienceSection;
