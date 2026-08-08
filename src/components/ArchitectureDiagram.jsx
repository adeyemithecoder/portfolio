import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi2";

/**
 * Renders a vertical flow diagram from an ordered array of step labels.
 * Only render this where a project's real architecture is known —
 * skip it entirely for simple projects rather than inventing a stack.
 */
export default function ArchitectureDiagram({ steps }) {
  if (!steps?.length) return null;

  return (
    <div className="flex flex-col items-center gap-1">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3.5 text-center">
            <p className="text-sm font-medium text-[var(--color-white)]">{step}</p>
          </div>
          {i < steps.length - 1 && (
            <HiArrowDown className="my-1.5 text-[var(--color-primary)]" aria-hidden="true" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
