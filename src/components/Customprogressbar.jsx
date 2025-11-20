import { motion } from "framer-motion";

export default function CustomProgressBar({ value = 70, height = 12, bg = "#e5e7eb", color ="#fc8210" }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: bg,
        borderRadius: height,
        overflow: "hidden",
        height,
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          height: "100%",
          backgroundColor: color,
          borderRadius: height,
        }}
      />
    </div>
  );
}
