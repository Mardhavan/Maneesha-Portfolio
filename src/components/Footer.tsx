const Footer = () => (
  <footer className="relative border-t border-border/50 py-8">
    <div className="absolute inset-0 glass opacity-50" />
    <div className="container mx-auto px-4 text-center text-sm text-muted-foreground relative z-10">
      <p>© {new Date().getFullYear()} Maneesha Elpur. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
