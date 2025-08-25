import ProgressBar from '../components/LearningProgressBar'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem('progress') || '{}')
    setProgress(p)
  }, [])

  const update = (id, val) => {
    const next = { ...progress, [id]: val }
    setProgress(next)
    localStorage.setItem('progress', JSON.stringify(next))
  }

  const courses = [
    { id: 1, title: 'React Essentials' },
    { id: 2, title: 'UI/UX Foundations' },
    { id: 3, title: 'Data Science 101' },
    { id: 4, title: 'JavaScript Mastery' },
    { id: 5, title: 'Python for Beginners' },
    { id: 6, title: 'Advanced CSS & Tailwind' }
  ]

  const totalCourses = courses.length
  const completedCourses = Object.values(progress).filter(v => v === 100).length
  const inProgressCourses = Object.values(progress).filter(v => v > 0 && v < 100).length
  const averageProgress =
    totalCourses > 0
      ? Math.round(Object.values(progress).reduce((a, b) => a + b, 0) / totalCourses)
      : 0
  const nextCourse = courses.find(c => (progress[c.id] || 0) < 100)?.title || 'All done!'

  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Student'} 👋</h1>

      
      <div className="grid md:grid-cols-5 gap-6">
        <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-2xl text-center shadow">
          <h3 className="font-medium text-slate-600 dark:text-slate-300">Total Courses</h3>
          <p className="text-2xl font-bold">{totalCourses}</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-2xl text-center shadow">
          <h3 className="font-medium text-slate-600 dark:text-slate-300">Completed</h3>
          <p className="text-2xl font-bold">{completedCourses}</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-2xl text-center shadow">
          <h3 className="font-medium text-slate-600 dark:text-slate-300">In Progress</h3>
          <p className="text-2xl font-bold">{inProgressCourses}</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-2xl text-center shadow">
          <h3 className="font-medium text-slate-600 dark:text-slate-300">Avg Progress</h3>
          <p className="text-2xl font-bold">{averageProgress}%</p>
        </div>
        <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-2xl text-center shadow">
          <h3 className="font-medium text-slate-600 dark:text-slate-300">Next Course</h3>
          <p className="text-lg font-semibold">{nextCourse}</p>
        </div>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(c => (
          <div
            key={c.id}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-3">{c.title}</h3>
            <ProgressBar value={progress[c.id] || 0} />
            <div className="flex flex-wrap gap-2 mt-4">
              {[0, 25, 50, 75, 100].map(v => (
                <button
                  key={v}
                  onClick={() => update(c.id, v)}
                  className="px-3 py-1 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"
                >
                  {v}%
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
