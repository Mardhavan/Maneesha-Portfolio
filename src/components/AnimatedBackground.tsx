const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      {/* Slow rotating conic mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-conic-mesh rounded-full blur-3xl opacity-40 animate-spin-slow" />

      {/* Drifting color blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-accent/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[-15%] left-[30%] w-[600px] h-[600px] rounded-full bg-primary/15 blur-[130px] animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      {/* Slow gradient shimmer overlay */}
      <div
        className="absolute inset-0 opacity-30 animate-gradient"
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, hsl(var(--primary) / 0.08) 25%, transparent 50%, hsl(var(--accent) / 0.08) 75%, transparent 100%)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Soft top/bottom vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
};

export default AnimatedBackground;
