import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EnviroScan.AI",
    description:
      "AI-powered air quality monitoring system achieving 92.26% accuracy with real-time data integration and interactive dashboards.",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas"],
    link: "https://github.com/PRAVEEN1000-7/EnviroScan.ai",
    color: "primary" as const,
  },
  {
    title: "Motion Recognition System",
    description:
      "Real-time human pose tracking using MediaPipe and OpenCV integrated with Unity 3D avatar for interactive visualization. Built for IITM-PARVARTAK.",
    tech: ["Python", "MediaPipe", "OpenCV", "Unity"],
    link: null,
    color: "accent" as const,
  },
  {
    title: "Virtual Try-On System",
    description:
      "AI-based virtual outfit try-on system using ComfyUI and image processing pipelines for realistic clothing previews.",
    tech: ["Python", "ComfyUI", "Image Processing"],
    link: null,
    color: "warm" as const,
  },
];

const colorMap = {
  primary: {
    border: "hover:border-primary/50",
    bg: "bg-primary/10",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]",
  },
  accent: {
    border: "hover:border-accent/50",
    bg: "bg-accent/10",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--accent)/0.3)]",
  },
  warm: {
    border: "hover:border-warm/50",
    bg: "bg-warm/10",
    text: "text-warm",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--warm)/0.3)]",
  },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono text-sm text-primary tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          03 — PROJECTS
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured work
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                className={`group glass rounded-2xl p-8 transition-all duration-500 ${colors.border} ${colors.glow} flex flex-col`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Project number */}
                <p className={`font-mono text-sm ${colors.text} mb-4`}>
                  0{i + 1}
                </p>

                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-1 rounded-md ${colors.bg} ${colors.text} text-xs font-mono`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
