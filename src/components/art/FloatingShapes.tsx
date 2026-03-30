import { motion } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "20%", color: "var(--primary)", delay: 0 },
  { size: 200, x: "70%", y: "10%", color: "var(--accent)", delay: 1 },
  { size: 150, x: "80%", y: "60%", color: "var(--warm)", delay: 2 },
  { size: 250, x: "20%", y: "70%", color: "var(--primary)", delay: 0.5 },
  { size: 180, x: "50%", y: "40%", color: "var(--accent)", delay: 1.5 },
];

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full animate-morph"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, hsl(${shape.color} / 0.08), transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
