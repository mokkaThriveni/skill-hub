export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-xl h-3 overflow-hidden">
      <div
        className="h-full rounded-xl bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
