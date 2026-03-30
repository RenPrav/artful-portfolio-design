import { motion } from "framer-motion";
import FloatingShapes from "../art/FloatingShapes";
import ParticleField from "../art/ParticleField";
import OrbitRing from "../art/OrbitRing";

const HeroSection = () => {
  const nameLetters = "PRAVEEN S".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />
      <ParticleField count={30} />

      {/* Orbit ring decoration */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 opacity-30 hidden lg:block">
        <OrbitRing size={500} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p
          className="font-mono text-sm tracking-[0.3em] text-primary mb-8 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI / ML Developer
        </motion.p>

        {/* Name */}
        <div className="flex justify-center gap-1 sm:gap-3 mb-8 flex-wrap">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight"
              style={{
                color: letter === " " ? "transparent" : undefined,
                width: letter === " " ? "0.5em" : undefined,
              }}
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                color: "hsl(var(--primary))",
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Building intelligent solutions at the intersection of{" "}
          <span className="text-primary font-medium">Machine Learning</span>,{" "}
          <span className="text-accent font-medium">Computer Vision</span>, and{" "}
          <span className="text-warm font-medium">Generative AI</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass text-foreground font-medium hover:border-primary/50 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
