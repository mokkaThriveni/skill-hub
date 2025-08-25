import { useNavigate } from 'react-router-dom'

export default function Payment() {
  const nav = useNavigate()

  const handlePayment = () => {
    
    setTimeout(() => {
      alert('Payment Successful ✅')
      nav('/dashboard')
    }, 1000)
  }

  return (
    <div className="container py-12 flex flex-col items-center">
      <div className="card p-8 max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Complete Your Payment</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Pay securely to unlock your dashboard and start learning 🚀
        </p>
        <button
          onClick={handlePayment}
          className="px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  )
}
