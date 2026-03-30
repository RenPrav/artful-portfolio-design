import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "SQL"],
    color: "primary",
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Computer Vision", "Generative AI", "Azure AI"],
    color: "accent",
  },
  {
    title: "Frameworks",
    skills: ["FastAPI", "SQLAlchemy", "Scikit-learn", "Pandas", "NumPy"],
    color: "warm",
  },
  {
    title: "Tools & Platforms",
    skills: ["Azure", "Git & GitHub", "Power BI", "ComfyUI", "Postman", "PyTest"],
    color: "primary",
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
    color: "accent",
  },
];

const colorClasses: Record<string, { pill: string; bar: string }> = {
  primary: {
    pill: "bg-primary/10 text-primary border-primary/20",
    bar: "bg-primary",
  },
  accent: {
    pill: "bg-accent/10 text-accent border-accent/20",
    bar: "bg-accent",
  },
  warm: {
    pill: "bg-warm/10 text-warm border-warm/20",
    bar: "bg-warm",
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono text-sm text-primary tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          04 — SKILLS
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech stack
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => {
            const c = colorClasses[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-0.5 ${c.bar} rounded-full`} />
                  <h3 className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${c.pill} cursor-default`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
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

export default SkillsSection;
