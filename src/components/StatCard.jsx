export default function StatCard({value, label}){
  return (
    <div className="glass rounded-2xl p-6 text-center shadow-md tilt-hover">
      <div className="text-3xl font-extrabold text-indigo-400">{value}</div>
      <div className="text-sm text-gray-300 mt-1">{label}</div>
    </div>
  )
}
