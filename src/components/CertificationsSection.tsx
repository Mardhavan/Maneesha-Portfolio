import { Award } from "lucide-react";

const certs = [
  { name: "Python and MySQL for Data Processing", org: "Techyz Innovative Trainings Pvt. Ltd." },
  { name: "Employability Skill Programme", org: "Mahindra Pride Classroom" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Certifications</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">Professional Certifications</h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {certs.map((c) => (
          <div key={c.name} className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-card">
            <Award className="text-primary shrink-0 mt-0.5" size={22} />
            <div>
              <p className="font-medium text-foreground">{c.name}</p>
              <p className="text-sm text-muted-foreground">{c.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
