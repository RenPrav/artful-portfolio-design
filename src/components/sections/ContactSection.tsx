import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="font-mono text-sm text-primary tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          06 — CONTACT
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's connect
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Open to opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:saravananpraveen1157@gmail.com"
            className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors group"
          >
            <Mail className="text-primary" size={20} />
            <span className="text-sm">saravananpraveen1157@gmail.com</span>
          </a>
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3">
            <Phone className="text-accent" size={20} />
            <span className="text-sm">+91 63694 93352</span>
          </div>
          <div className="glass rounded-xl px-6 py-4 flex items-center gap-3">
            <MapPin className="text-warm" size={20} />
            <span className="text-sm">Erode, Tamil Nadu</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/PRAVEEN1000-7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-colors group"
          >
            <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-colors group"
          >
            <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
