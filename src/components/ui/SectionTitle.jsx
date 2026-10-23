import { motion } from "framer-motion";

/**
 * `eyebrow` is a short label above the heading (e.g. "Selected Work").
 * Only pass it when it encodes something real about the section —
 * not as decoration.
 */
export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-2xl mb-12 ${alignment}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-white)]">{title}</h2>
      {description && <p className="mt-4 text-[var(--color-light)]">{description}</p>}
    </motion.div>
  );
}
