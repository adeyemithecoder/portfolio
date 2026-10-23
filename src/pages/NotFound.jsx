import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-32 text-center"
    >
      <p className="text-[var(--color-primary)] font-medium">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-[var(--color-white)]">Page not found</h1>
      <p className="mt-3 text-[var(--color-light)]">The page you're looking for doesn't exist or has moved.</p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to Home</Button>
      </div>
    </motion.div>
  );
}
