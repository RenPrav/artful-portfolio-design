import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  "Microsoft Certified: Azure AI Engineer Associate",
  "Claude Certified Architect – Foundations",
  "Oracle Cloud Infrastructure Generative AI Professional",
  "Advanced Diploma in Python Programming",
  "Oracle Cloud Infrastructure AI Foundations Associate",
  "Infosys Springboard – Java Programming",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          className="font-mono text-sm text-primary tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          05 — CERTIFICATIONS
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Credentials
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              className="glass rounded-xl p-5 flex items-start gap-4 group hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ scale: 1.02 }}
            >
              <Award className="text-primary shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" size={20} />
              <p className="text-sm font-medium leading-relaxed">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
