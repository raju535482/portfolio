export function Card({ children }) {
  return <div className="rounded-2xl border shadow-md bg-gray-800">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}