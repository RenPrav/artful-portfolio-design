import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-sm text-primary tracking-widest mb-4">
              01 — ABOUT
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Turning data into
              <br />
              <span className="text-gradient">intelligent systems</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Motivated AI and software enthusiast focused on building practical
              solutions to real-world challenges. Currently pursuing B.E. in CSE
              (AI & ML) at K.S.Rangasamy College of Technology with a{" "}
              <span className="text-primary font-semibold">CGPA of 9.18</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Eager to contribute, adapt, and develop through hands-on experience
              and meaningful collaboration in innovative tech environments.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CGPA", value: "9.18", color: "primary" },
                { label: "Certifications", value: "6+", color: "accent" },
                { label: "Projects", value: "3+", color: "warm" },
                { label: "HSC Score", value: "100%", color: "primary" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <p className={`text-3xl font-bold text-${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1 font-mono">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
