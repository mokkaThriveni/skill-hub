import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './DarkModeToggle'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)

  
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-xl transition-colors duration-200 
     ${isActive 
        ? "bg-pink-600 text-white" 
        : "text-slate-700 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-pink-800 hover:text-pink-600"
     }`

  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container flex items-center justify-between h-16">
        
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src="/skill-hub.png" alt="logo" className="h-16" />
          <span>Skill Hub</span>
        </Link>

        
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" end className={linkClasses}>Home</NavLink>
          <NavLink to="/courses" className={linkClasses}>Courses</NavLink>
          <NavLink to="/register" className={linkClasses}>Register</NavLink>
          <NavLink to="/dashboard" className={linkClasses}>Dashboard</NavLink>
          <ThemeToggle />
          {user && (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
            >
              Logout
            </button>
          )}
        </nav>

        
        <button
          className="md:hidden p-2 rounded-xl border"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <nav className="flex flex-col items-start gap-4 p-4">
            <NavLink to="/" end onClick={() => setOpen(false)} className={linkClasses}>Home</NavLink>
            <NavLink to="/courses" onClick={() => setOpen(false)} className={linkClasses}>Courses</NavLink>
            <NavLink to="/register" onClick={() => setOpen(false)} className={linkClasses}>Register</NavLink>
            <NavLink to="/dashboard" onClick={() => setOpen(false)} className={linkClasses}>Dashboard</NavLink>
            <ThemeToggle />
            {user && (
              <button
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
