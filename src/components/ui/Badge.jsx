export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-[var(--color-light)]">
      {children}
    </span>
  );
}
