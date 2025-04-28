'use client'

import { useState } from 'react'
import Link from 'next/link'

// Sample website data for demonstration
const sampleWebsites = [
  {
    id: 'web1',
    name: 'TechGadgetReviews',
    url: 'https://techgadgetreviews.example.com',
    createdAt: '2025-03-15',
    status: 'active',
    traffic: 1250,
    clicks: 87,
    revenue: 142.50,
    category: 'Technology'
  },
  {
    id: 'web2',
    name: 'HealthyLivingTips',
    url: 'https://healthylivingtips.example.com',
    createdAt: '2025-04-02',
    status: 'active',
    traffic: 980,
    clicks: 63,
    revenue: 95.20,
    category: 'Health & Wellness'
  },
  {
    id: 'web3',
    name: 'HomeDecorIdeas',
    url: 'https://homedecor.example.com',
    createdAt: '2025-04-10',
    status: 'building',
    traffic: 0,
    clicks: 0,
    revenue: 0,
    category: 'Home & Garden'
  }
]

export default function MyWebsitesPage() {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('desc')
  
  // Filter websites based on status
  const filteredWebsites = sampleWebsites.filter(website => {
    if (filter === 'all') return true
    return website.status === filter
  })
  
  // Sort websites based on selected criteria
  const sortedWebsites = [...filteredWebsites].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1
    }
  })
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Websites</h1>
        <Link
          href="/dashboard/create-website"
          className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white px-4 py-2 rounded-md transition-colors"
        >
          Create New Website
        </Link>
      </div>
      
      {/* Filters and sorting */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Filter:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[rgba(45,26,61,0.7)] border border-[rgba(255,255,255,0.1)] rounded-md px-3 py-1 text-sm"
          >
            <option value="all">All Websites</option>
            <option value="active">Active</option>
            <option value="building">Building</option>
            <option value="paused">Paused</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[rgba(45,26,61,0.7)] border border-[rgba(255,255,255,0.1)] rounded-md px-3 py-1 text-sm"
          >
            <option value="createdAt">Date Created</option>
            <option value="name">Name</option>
            <option value="traffic">Traffic</option>
            <option value="clicks">Clicks</option>
            <option value="revenue">Revenue</option>
          </select>
          
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-1 rounded-md hover:bg-[rgba(255,255,255,0.1)]"
          >
            {sortOrder === 'asc' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Websites list */}
      {sortedWebsites.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {sortedWebsites.map((website) => (
            <div key={website.id} className="bg-[rgba(45,26,61,0.7)] rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{website.name}</h2>
                    <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-[var(--button-primary)] hover:underline text-sm">
                      {website.url}
                    </a>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      Created on {new Date(website.createdAt).toLocaleDateString()} • {website.category}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      website.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      website.status === 'building' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {website.status.charAt(0).toUpperCase() + website.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[rgba(0,0,0,0.2)] p-4 rounded-md">
                    <p className="text-[var(--text-secondary)] text-sm">Traffic (30 days)</p>
                    <p className="text-2xl font-bold">{website.traffic.toLocaleString()}</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.2)] p-4 rounded-md">
                    <p className="text-[var(--text-secondary)] text-sm">Affiliate Clicks</p>
                    <p className="text-2xl font-bold">{website.clicks.toLocaleString()}</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.2)] p-4 rounded-md">
                    <p className="text-[var(--text-secondary)] text-sm">Estimated Revenue</p>
                    <p className="text-2xl font-bold">${website.revenue.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <Link
                    href={`/dashboard/website/${website.id}`}
                    className="text-[var(--button-primary)] hover:text-[var(--button-primary-hover)] text-sm font-medium"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/dashboard/website/${website.id}/edit`}
                    className="text-[var(--button-primary)] hover:text-[var(--button-primary-hover)] text-sm font-medium"
                  >
                    Edit Website
                  </Link>
                  <button
                    className="text-red-400 hover:text-red-300 text-sm font-medium"
                    onClick={() => {
                      // In a real app, this would open a confirmation dialog
                      console.log(`Delete website ${website.id}`)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-[rgba(45,26,61,0.7)] rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium">No websites found</h3>
          <p className="mt-2 text-[var(--text-secondary)]">
            {filter !== 'all' 
              ? `You don't have any ${filter} websites yet.` 
              : "You haven't created any websites yet."}
          </p>
          <Link
            href="/dashboard/create-website"
            className="mt-6 inline-block bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white px-4 py-2 rounded-md transition-colors"
          >
            Create Your First Website
          </Link>
        </div>
      )}
    </div>
  )
}
