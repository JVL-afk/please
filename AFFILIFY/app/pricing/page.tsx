'use client'

import { useState } from 'react'
import Link from 'next/link'

// Pricing data
const pricingPlans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Basic features for individuals just getting started with affiliate marketing',
    features: [
      '3 website analyses per month',
      '1 website generation per month',
      'Basic analytics dashboard',
      'Standard templates',
      'Email support'
    ],
    cta: 'Get Started',
    href: '/signup?plan=free',
    highlighted: false
  },
  {
    name: 'Pro',
    price: { monthly: 10, yearly: 99 },
    description: 'Advanced features for growing affiliate marketers',
    features: [
      'Unlimited website analyses',
      '10 website generations per month',
      'Advanced analytics dashboard',
      'Premium templates',
      'Priority email support',
      'Custom domain integration',
      'SEO optimization tools'
    ],
    cta: 'Subscribe Now',
    href: '/checkout?plan=pro&price=10',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 50, yearly: 499 },
    description: 'Complete solution for professional affiliate marketers',
    features: [
      'Everything in Pro plan',
      'Unlimited website generations',
      'API access',
      'White-label options',
      'Dedicated account manager',
      'Phone support',
      'Custom integrations',
      'Advanced SEO tools'
    ],
    cta: 'Contact Sales',
    href: '/checkout?plan=enterprise&price=50',
    highlighted: false
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Choose the plan that's right for your affiliate marketing needs. All plans include core AFFILIFY features.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex items-center p-1 bg-[rgba(45,26,61,0.7)] rounded-full">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-[var(--button-primary)] text-white' 
                    : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingCycle === 'yearly' 
                    ? 'bg-[var(--button-primary)] text-white' 
                    : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-semibold bg-green-500 text-white rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`
                bg-[rgba(45,26,61,0.7)] rounded-lg shadow-xl overflow-hidden
                ${plan.highlighted ? 'ring-2 ring-[var(--button-primary)] transform md:-translate-y-4' : ''}
              `}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    {plan.price.monthly > 0 ? `/${billingCycle === 'monthly' ? 'month' : 'year'}` : ''}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-6">
                  {plan.description}
                </p>
                <Link
                  href={plan.href + (billingCycle === 'yearly' ? '&billing=yearly' : '')}
                  className={`
                    block w-full py-2 px-4 rounded-md text-center font-medium transition-colors
                    ${plan.highlighted 
                      ? 'bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white' 
                      : 'bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] text-white'}
                  `}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="px-8 pb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">What's included</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto text-left grid gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-[var(--text-secondary)]">Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-[var(--text-secondary)]">We offer a free plan with limited features so you can try AFFILIFY before committing to a paid plan.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-[var(--text-secondary)]">We accept all major credit cards and PayPal.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
