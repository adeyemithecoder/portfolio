import { motion } from "framer-motion";
import Badge from "./ui/Badge";

export default function SkillCategory({ category, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
    >
      <h3 className="text-base font-semibold text-[var(--color-white)] mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
