import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const steps = ['Account', 'Profile', 'Confirm']

export default function RegisterPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ email:'', password:'', name:'', interest:'React' })
  const { login } = useAuth()
  const nav = useNavigate()

  const validateStep = () => {
    if (step === 0) {
      return form.email.trim() !== '' && form.password.trim() !== ''
    }
    if (step === 1) {
      return form.name.trim() !== ''
    }
    return true
  }

  const next = () => {
    if (validateStep()) {
      setStep(s => Math.min(s + 1, steps.length - 1))
    }
  }

  const prev = () => setStep(s => Math.max(s - 1, 0))

  const submit = (e) => {
    e.preventDefault()
    
    login({ name: form.name || 'Student', email: form.email })
    
    nav('/payment')
  }

  return (
    <div className="container py-8">
      <div className="card p-6 max-w-xl mx-auto">
        
        <div className="flex gap-2 mb-6">
          {steps.map((s, i) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full ${
                i <= step ? 'bg-pink-500' : 'bg-slate-200 dark:bg-slate-800'
              }`}
            />
          ))}
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          {step === 0 && (
            <>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl px-3 py-2 border 
                           bg-white text-slate-900 placeholder-slate-400
                           dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full rounded-xl px-3 py-2 border 
                           bg-white text-slate-900 placeholder-slate-400
                           dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </>
          )}

          {step === 1 && (
            <>
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl px-3 py-2 border 
                           bg-white text-slate-900 placeholder-slate-400
                           dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <select
                className="w-full rounded-xl px-3 py-2 border 
                           bg-white text-slate-900
                           dark:bg-slate-800 dark:text-white"
                value={form.interest}
                onChange={e => setForm({ ...form, interest: e.target.value })}
              >
                <option>React</option>
                <option>UI/UX</option>
                <option>Data Science</option>
                <option>Web Development</option>
                <option>Python Programming</option>
                <option>Machine Learning</option>
                <option>Cyber Security</option>
              </select>
            </>
          )}

          {step === 2 && (
            <div className="text-sm text-slate-600 dark:text-slate-300">
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Name:</strong> {form.name || '—'}</p>
              <p><strong>Interest:</strong> {form.interest}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={prev}
              disabled={step === 0}
              className="px-4 py-2 rounded-xl border dark:border-slate-700"
            >
              Back
            </button>
            {step < 2 ? (
              <button
                type="button"
                onClick={next}
                disabled={!validateStep()}
                className={`px-4 py-2 rounded-xl transition ${
                  validateStep()
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white transition"
              >
                Create account
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
