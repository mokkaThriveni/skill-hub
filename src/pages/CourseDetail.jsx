import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Accordion from '../components/CourseAccordion'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const url = `http://localhost:5175/courses/${id}`
    fetch(url)
      .then(r => r.json())
      .then(setCourse)
      .catch(async () => {
        const mod = await import('../data/courses.json')
        setCourse(mod.default.find(c => String(c.id) === String(id)))
      })
  }, [id])

  if (!course) return <div className="container py-8">Loading...</div>

  const syllabus = (course.syllabus || []).map((title, i) => ({
    title,
    content: 'Lesson details and resources will appear here.'
  }))

  
  const reviews = [
    { stars: 5, percent: 70 },
    { stars: 4, percent: 20 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
  ]

  return (
    <div className="container py-10 grid lg:grid-cols-3 gap-10">
      
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
        {course.banner ? (
          <img
            src={course.banner}
            alt={course.title}
            className="rounded-xl w-full h-72 object-cover"
          />
        ) : (
          <div className="rounded-xl w-full h-72 bg-pink-500 flex items-center justify-center text-white text-lg font-semibold">
            No Image
          </div>
        )}

        <h1 className="text-3xl font-bold mt-6">{course.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg leading-relaxed">
          {course.description}
        </p>

        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Ratings & Reviews</h2>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold">4.8</span>
            <div className="flex text-yellow-400 text-xl">
              ★★★★☆
            </div>
            <span className="text-slate-500">1,250 reviews</span>
          </div>

          
          <div className="mt-4 space-y-2">
            {reviews.map(r => (
              <div key={r.stars} className="flex items-center gap-2">
                <span className="w-8 text-sm">{r.stars}★</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-pink-500 h-full"
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
                <span className="w-12 text-right text-sm">{r.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        
        <h2 className="mt-10 mb-3 text-xl font-semibold">Course Syllabus</h2>
        <Accordion items={syllabus} />
      </div>

      
      <aside className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 h-fit sticky top-24">
        <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
          ₹{course.price}
        </div>
        <div className="text-sm text-slate-500 mb-6">
          {course.level} • {course.duration} hrs
        </div>

        <Link
          to="/register"
          className="w-full block text-center px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg transition"
        >
          Enroll Now
        </Link>

        <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li>✔ Lifetime access</li>
          <li>✔ Certificate of completion</li>
          <li>✔ Expert mentor support</li>
          <li>✔ Hands-on projects</li>
        </ul>
      </aside>
    </div>
  )
}
