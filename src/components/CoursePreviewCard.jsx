import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <div className="card p-4 flex flex-col hover:shadow-xl transition">
      
      <img 
        src={course.banner} 
        alt={course.title} 
        className="rounded-xl h-40 w-full object-cover" 
      />

      
      <h3 className="mt-3 font-semibold text-lg text-slate-900 dark:text-white">
        {course.title}
      </h3>

    
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
        {course.description}
      </p>

      
      <div className="mt-3 flex items-center justify-between">
        <span className="text-pink-600 dark:text-pink-400 font-bold">
          ₹{course.price}
        </span>
        <Link
          to={`/courses/${course.id}`}
          className="px-3 py-1 rounded-lg bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition"
        >
          View
        </Link>
      </div>
    </div>
  )
}
