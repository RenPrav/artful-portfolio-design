import { motion } from "framer-motion";

interface OrbitRingProps {
  size?: number;
  className?: string;
}

const OrbitRing = ({ size = 400, className = "" }: OrbitRingProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
      </motion.div>
      {/* Inner ring */}
      <motion.div
        className="absolute rounded-full border border-accent/15"
        style={{ inset: size * 0.15 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
      </motion.div>
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary/50" />
      </div>
    </div>
  );
};

export default OrbitRing;
