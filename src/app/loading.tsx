export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-surface-0)]"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          aria-hidden
          className="h-12 w-12 animate-spin rounded-full border-2 border-[var(--color-surface-3)] border-t-[var(--color-accent-400)]"
        />
        <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
          Loading
        </p>
      </div>
    </div>
  );
}
