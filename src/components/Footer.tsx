import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/50 py-8 bg-card/30 backdrop-blur-sm">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Maneesha Elpur. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a href="mailto:elpurmaneesha@gmail.com" className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href="https://www.linkedin.com/in/maneesha-elpur" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
