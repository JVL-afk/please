'use client'

import { useState } from 'react'
import DashboardSidebar from '@/components/dashboard/sidebar'
import ApiKeyGenerator from '@/components/dashboard/apiKeyGenerator'

export default function CreateWebsitePage() {
  const [sourceUrl, setSourceUrl] = useState('')
  const [analysisId, setAnalysisId] = useState('')
  const [websiteName, setWebsiteName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleCreate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccessMessage('')

    try {
      // Validate input
      if (!websiteName) {
        throw new Error('Please enter a name for your website')
      }
      if (!sourceUrl && !analysisId) {
        throw new Error('Please provide either a source URL or a previous Analysis ID')
      }

      // Simulate API call for website creation
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Mock success
      setSuccessMessage(`Website "${websiteName}" creation initiated! It will be available shortly at ${websiteName.toLowerCase().replace(/\s+/g, '-')}.affilify.eu`)
      setSourceUrl('')
      setAnalysisId('')
      setWebsiteName('')

    } catch (err) {
      setError(err.message || 'Failed to create website')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create a New Website</h1>
          <p className="text-[var(--text-secondary)]">
            Generate an affiliate website based on a source URL or a previous analysis.
          </p>
        </div>

        <div className="bg-[rgba(45,26,61,0.7)] p-8 rounded-lg">
          {error && (
            <div className="mb-4 bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-md">
              {successMessage}
            </div>
          )}
          
          <form onSubmit={handleCreate} className="space-y-6">
            <div>
              <label htmlFor="websiteName" className="block text-sm font-medium mb-2">
                Website Name
              </label>
              <input
                id="websiteName"
                name="websiteName"
                type="text"
                required
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                placeholder="e.g., Best Tech Gadgets"
              />
            </div>

            <div>
              <label htmlFor="sourceUrl" className="block text-sm font-medium mb-2">
                Source Website URL (Optional)
              </label>
              <input
                id="sourceUrl"
                name="sourceUrl"
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                placeholder="https://example.com/product-category (If not using Analysis ID)"
              />
            </div>

            <div className="text-center text-sm text-[var(--text-secondary)]">OR</div>

            <div>
              <label htmlFor="analysisId" className="block text-sm font-medium mb-2">
                Use Previous Analysis ID (Optional)
              </label>
              <input
                id="analysisId"
                name="analysisId"
                type="text"
                value={analysisId}
                onChange={(e) => setAnalysisId(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                placeholder="Enter ID from 'My Analyses' page"
              />
            </div>

            {/* Add more customization options here later (Theme, Domain, etc.) */}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Website...
                </>
              ) : (
                'Create Website'
              )}
            </button>
          </form>
          
          {/* API Key Generator for Enterprise users */}
          <div className="mt-8 border-t border-[rgba(255,255,255,0.1)] pt-6">
            <ApiKeyGenerator />
          </div>
        </div>
      </main>
    </div>
  )
}
