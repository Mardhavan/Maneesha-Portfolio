import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Work Journey</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Professional Experience
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        A track record of delivering data-driven insights and operational improvements
      </p>

      <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-10">
        <div className="relative">
          <div className="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Briefcase size={16} />
          </div>
          <div className="rounded-xl bg-card p-6 shadow-card">
            <h3 className="font-heading text-xl font-bold text-foreground">Accenture Solutions Pvt. Ltd.</h3>
            <p className="text-primary font-medium text-sm">Trust & Safety Associate (Business Analytics & Operations Support)</p>
            <p className="text-sm text-muted-foreground mt-1 mb-4">Apr 2025 – Present · Client: Google</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary mt-1">•</span>Analyzed high-volume user-generated datasets using Excel (Pivot Tables, filtering, sorting) to support compliance data analysis and maintain moderation accuracy above 98%.</li>
              <li className="flex gap-2"><span className="text-primary mt-1">•</span>Executed SQL-based data retrieval and structured dataset analysis to identify violation trends, improving queue prioritization efficiency by 12%.</li>
              <li className="flex gap-2"><span className="text-primary mt-1">•</span>Performed data classification and validation across text, image, and video content streams, reducing repeat review cycles by 10%.</li>
              <li className="flex gap-2"><span className="text-primary mt-1">•</span>Monitored dataset patterns through trend identification to enhance moderation throughput efficiency by approximately 15%.</li>
              <li className="flex gap-2"><span className="text-primary mt-1">•</span>Validated structured moderation records using data cleaning and interpretation techniques across 1,200+ daily records.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
