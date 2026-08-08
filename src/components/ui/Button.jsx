import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-[var(--color-primary)] text-[var(--color-bg)] hover:opacity-90",
  outline:
    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]",
  ghost: "text-[var(--color-light)] hover:text-[var(--color-white)]",
};

/**
 * Polymorphic button: renders a React Router <Link> for internal routes,
 * a plain <a> for external URLs, or a <button> when no `to`/`href` is given.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
