const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Drifting color blobs (GPU-friendly transforms only) */}
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[-15%] left-[30%] w-[520px] h-[520px] rounded-full bg-primary/15 blur-[130px] animate-float" style={{ animationDelay: "4s" }} />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
    </div>
  );
};

export default AnimatedBackground;
