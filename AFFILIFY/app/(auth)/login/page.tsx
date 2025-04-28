
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // Corrected import

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Simulate API call for login
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Basic validation (replace with actual API call)
      if (email === 'demo@affilify.eu' && password === 'password123') {
        // Simulate successful login
        console.log('Login successful')
        // In a real app, you'd store a token/session here
        router.push('/dashboard') // Redirect to dashboard
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[rgba(45,26,61,0.7)] p-10 rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
            Or{' '}
            <Link href="/signup" className="font-medium text-[var(--button-primary)] hover:text-[var(--button-primary-hover)]">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-[var(--button-primary)] focus:border-[var(--button-primary)] focus:z-10 sm:text-sm rounded-t-md"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-[var(--button-primary)] focus:border-[var(--button-primary)] focus:z-10 sm:text-sm rounded-b-md"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-[var(--button-primary)] hover:text-[var(--button-primary-hover)]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--button-primary)] transition duration-300"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

