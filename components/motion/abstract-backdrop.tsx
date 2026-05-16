import clsx from "clsx";

/**
 * Abstract backdrop in the style of docs.perscom.io:
 * - dark navy base (#090b0f)
 * - soft top radial glow in brand sky-600
 * - subtle grid pattern faded by a radial mask
 *
 * The component is absolutely positioned to fill its parent; the parent
 * must be `relative` and the backdrop should sit behind content (-z-10).
 */
export function AbstractBackdrop({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "inverse" | "subtle";
}) {
  if (variant === "subtle") {
    return (
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 bg-grid-dark mask-radial opacity-50" />
        <div className="absolute inset-x-0 top-0 h-[60%] bg-radial-brand" />
      </div>
    );
  }

  if (variant === "inverse") {
    return (
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 bg-grid-dark opacity-40 mask-radial" />
        <div className="absolute inset-x-0 top-0 h-[70%] bg-radial-brand" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Soft brand radial glow — top-leaning, like docs hero */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-radial-brand" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
      {/* Subtle second glow lower-left to add depth */}
      <div
        className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0) 70%)",
        }}
      />
    </div>
  );
}
