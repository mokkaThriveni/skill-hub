export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 mt-10">
      <div className="container text-sm text-slate-500">
        © {new Date().getFullYear()} Skill Hub. All rights reserved.
      </div>
    </footer>
  )
}
