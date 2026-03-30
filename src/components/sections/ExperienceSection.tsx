import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = {
  title: "Data Scientist Intern",
  company: "Infosys Springboard",
  period: "December 2025 – January 2026",
  highlights: [
    "Developed EnviroScan, an AI-powered air quality monitoring system achieving 92.26% accuracy",
    "Built and optimized XGBoost models using real-time data from OpenAQ, OpenStreetMap, and Open-Meteo APIs",
    "Created an interactive Streamlit dashboard with maps, charts, and automated email alerts",
    "Implemented end-to-end ML pipelines from data collection to deployment",
  ],
  tech: ["Python", "XGBoost", "Streamlit", "Pandas", "NumPy"],
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono text-sm text-primary tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          02 — EXPERIENCE
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Where I've worked
        </motion.h2>

        <motion.div
          className="glass rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="text-primary font-medium text-lg">
                  {experience.company}
                </p>
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                {experience.period}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {experience.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
