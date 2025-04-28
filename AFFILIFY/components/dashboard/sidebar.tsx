
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarNavItems = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'My Websites', href: '/dashboard/my-websites' },
  { title: 'My Analyses', href: '/dashboard/my-analyses' },
  { title: 'Analyze Website', href: '/dashboard/analyze-website' },
  { title: 'Create Website', href: '/dashboard/create-website' },
  // Add other dashboard links like Settings, Billing, etc. later
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-[rgba(30,15,45,0.9)] p-6 flex flex-col sticky top-0 h-screen">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-white">
          AFFILIFY
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${pathname === item.href
                ? 'bg-[var(--button-primary)] text-white'
                : 'text-gray-300 hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
              }
            `}
          >
            {/* Add icons here later if desired */}
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        {/* User profile/logout section */}
        <div className="flex items-center p-2 rounded-md hover:bg-[rgba(255,255,255,0.1)] cursor-pointer">
          {/* Placeholder for user avatar */}
          <div className="w-8 h-8 bg-gray-500 rounded-full mr-3"></div>
          <div>
            <p className="text-sm font-medium text-white">Demo User</p>
            <button
              onClick={() => {
                // Simulate logout
                console.log('Logout clicked')
                // In real app: clear token/session, redirect to login
                window.location.href = '/login'; // Simple redirect for demo
              }}
              className="text-xs text-gray-400 hover:text-[var(--button-primary)]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

