import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const heading = useScrollAnimation();
  const timeline = useScrollAnimation(0.1);

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heading.ref} className={`scroll-hidden ${heading.isVisible ? "scroll-visible" : ""}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Work Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A track record of delivering data-driven insights and operational improvements
          </p>
        </div>

        <div ref={timeline.ref} className={`relative border-l-2 border-primary/20 pl-8 ml-4 space-y-10 scroll-hidden-left ${timeline.isVisible ? "scroll-visible-left" : ""}`}>
          <div className="relative">
            <div className="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse-glow">
              <Briefcase size={16} />
            </div>
            <div className="rounded-xl glass-card p-6 hover-lift">
              <h3 className="font-heading text-xl font-bold text-foreground">Accenture Solutions Pvt. Ltd.</h3>
              <p className="text-primary font-medium text-sm">Trust & Safety Associate (Business Analytics & Operations Support)</p>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-0.5 mt-2 mb-4">
                <p className="text-xs text-primary font-medium">Apr 2025 – Present · Client: Google</p>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary mt-0.5 shrink-0">▸</span>Analyzed high-volume user-generated datasets using Excel (Pivot Tables, filtering, sorting) to support compliance data analysis and maintain moderation accuracy above 98%.</li>
                <li className="flex gap-2"><span className="text-primary mt-0.5 shrink-0">▸</span>Executed SQL-based data retrieval and structured dataset analysis to identify violation trends, improving queue prioritization efficiency by 12%.</li>
                <li className="flex gap-2"><span className="text-primary mt-0.5 shrink-0">▸</span>Performed data classification and validation across text, image, and video content streams, reducing repeat review cycles by 10%.</li>
                <li className="flex gap-2"><span className="text-primary mt-0.5 shrink-0">▸</span>Monitored dataset patterns through trend identification to enhance moderation throughput efficiency by approximately 15%.</li>
                <li className="flex gap-2"><span className="text-primary mt-0.5 shrink-0">▸</span>Validated structured moderation records using data cleaning and interpretation techniques across 1,200+ daily records.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
