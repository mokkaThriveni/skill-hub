import { useEffect, useMemo, useState } from 'react'
import CourseCard from '../components/CoursePreviewCard'
import localCourses from '../data/courses.json'

export default function Courses() {
  const [q, setQ] = useState('')
  const [level, setLevel] = useState('all')
  const [courses, setCourses] = useState(localCourses) 

  useEffect(() => {
    fetch('http://localhost:5186/courses')
      .then(r => r.json())
      .then(setCourses)
      .catch(() => {
        
      })
  }, [])

  const filtered = useMemo(() => {
    return courses.filter(c => {
      const okQ = (c.title + ' ' + c.description).toLowerCase().includes(q.toLowerCase())
      const okLevel = level === 'all' || c.level === level
      return okQ && okLevel
    })
  }, [courses, q, level])

  
  const beginnerCourses = courses.filter(c => c.level === 'beginner').length
  const advancedCourses = courses.filter(c => c.level === 'advanced').length

  return (
    <div className="container py-8 space-y-6">
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="card p-4 text-center border-pink-200 dark:border-pink-800">
          <h3 className="font-semibold mb-2 text-pink-600">Total Courses</h3>
          <p className="text-xl font-bold text-pink-700 dark:text-pink-400">{courses.length}</p>
        </div>
        <div className="card p-4 text-center border-pink-200 dark:border-pink-800">
          <h3 className="font-semibold mb-2 text-pink-600">Filtered Courses</h3>
          <p className="text-xl font-bold text-pink-700 dark:text-pink-400">{filtered.length}</p>
        </div>
        <div className="card p-4 text-center border-pink-200 dark:border-pink-800">
          <h3 className="font-semibold mb-2 text-pink-600">Beginner Courses</h3>
          <p className="text-xl font-bold text-pink-700 dark:text-pink-400">{beginnerCourses}</p>
        </div>
        <div className="card p-4 text-center border-pink-200 dark:border-pink-800">
          <h3 className="font-semibold mb-2 text-pink-600">Advanced Courses</h3>
          <p className="text-xl font-bold text-pink-700 dark:text-pink-400">{advancedCourses}</p>
        </div>
      </div>

      
      <div className="flex flex-wrap gap-3 items-center">
        <input
          className="rounded-xl px-3 py-2 border border-pink-400 focus:ring-2 focus:ring-pink-500 
                     bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
          placeholder="Search courses"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <select
          className="rounded-xl px-3 py-2 border border-pink-400 focus:ring-2 focus:ring-pink-500
                     bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
          value={level}
          onChange={e => setLevel(e.target.value)}
        >
          <option value="all">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <span className="text-sm text-pink-600 dark:text-pink-400">
          {filtered.length} results
        </span>
      </div>

      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
