export function ExternalArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.5 8.5 3.5M8.5 3.5 3.5 3.5M8.5 3.5 8.5 8.5" />
    </svg>
  )
}
