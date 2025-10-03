export function Card({ children }) {
  return <div className="rounded-2xl border shadow-md bg-white">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}