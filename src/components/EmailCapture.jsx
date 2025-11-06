import React, { useState } from 'react'

const EmailCapture = ({ compact = false }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <form onSubmit={onSubmit} className={`flex w-full items-center gap-2 ${compact ? 'flex-col' : 'flex-row'}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status !== 'idle') setStatus('idle')
        }}
        placeholder="Enter your email"
        className={`w-full ${compact ? 'py-2 px-3' : 'py-3 px-4'} bg-white/80 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 placeholder-neutral-400 text-neutral-800`}
        aria-label="Email address"
      />
      <button
        type="submit"
        className={`${compact ? 'w-full py-2' : 'px-5 py-3'} whitespace-nowrap rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition`}
      >
        Notify Me
      </button>
      {status === 'success' && (
        <span className="text-green-700 text-sm ml-1">Thanks! Well keep you posted.</span>
      )}
      {status === 'error' && (
        <span className="text-red-600 text-sm ml-1">Please enter a valid email.</span>
      )}
    </form>
  )
}

export default EmailCapture
