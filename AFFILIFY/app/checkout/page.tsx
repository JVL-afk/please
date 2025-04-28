
'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation' // Corrected import
import PayPalIntegration from '@/components/paypal-integration' // Assuming this path is correct

// Separate component to read search params, needs to be wrapped in Suspense
function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'Pro' // Default to Pro if no plan specified
  const price = searchParams.get('price') || '10' // Default price

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <div className="bg-[rgba(45,26,61,0.7)] p-8 rounded-lg shadow-xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Selected Plan: {plan}</h2>
          <p className="text-2xl font-bold">${price}/month</p>
          {/* Add more details about the selected plan if needed */}
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] pt-6">
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          {/* Placeholder for other payment methods if needed */}
          <PayPalIntegration plan={plan} price={price} />
        </div>

        <div className="text-xs text-[var(--text-secondary)] text-center mt-4">
          By completing your purchase, you agree to our{' '}
          <a href="/terms" className="underline hover:text-[var(--button-primary)]">Terms of Service</a> and{' '}
          <a href="/privacy" className="underline hover:text-[var(--button-primary)]">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}

// Main page component that uses Suspense
export default function CheckoutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-center text-lg">Loading checkout details...</div>}>
        <CheckoutContent />
      </Suspense>
    </main>
  )
}

