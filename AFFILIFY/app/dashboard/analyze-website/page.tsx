
'use client'

import { useState } from 'react'
import DashboardSidebar from '@/components/dashboard/sidebar'

export default function AnalyzeWebsitePage() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [error, setError] = useState('')

  const handleAnalyze = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setAnalysisResult(null)

    try {
      // Basic URL validation
      if (!url || !url.startsWith('http')) {
        throw new Error('Please enter a valid URL starting with http or https')
      }

      // Simulate API call for analysis
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock analysis result
      setAnalysisResult({
        url: url,
        title: 'Example Product Page',
        productCount: 5,
        potentialRevenue: '$1,234.56',
        seoScore: 78,
        audienceKeywords: ['gadgets', 'tech reviews', 'electronics'],
      })

    } catch (err) {
      setError(err.message || 'Failed to analyze website')
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
          <h1 className="text-3xl font-bold mb-2">Analyze a Website</h1>
          <p className="text-[var(--text-secondary)]">
            Enter a website URL to analyze its affiliate marketing potential
          </p>
        </div>

        <div className="bg-[rgba(45,26,61,0.7)] p-8 rounded-lg mb-8">
          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-2">
                Website URL
              </label>
              <input
                id="url"
                name="url"
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                placeholder="https://example.com/product-page"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                'Analyze Website'
              )}
            </button>
          </form>
          {error && (
            <div className="mt-4 bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
        </div>

        {isLoading && (
          <div className="text-center py-8">
            <p>Analyzing website, please wait...</p>
            {/* Optional: Add a more visual loader */}
          </div>
        )}

        {analysisResult && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Analysis Results for: {analysisResult.url}</h2>
            <div className="bg-[rgba(45,26,61,0.7)] p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Page Title</h3>
                <p>{analysisResult.title}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Products Found</h3>
                <p>{analysisResult.productCount}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Potential Monthly Revenue</h3>
                <p>{analysisResult.potentialRevenue}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">SEO Score</h3>
                <p>{analysisResult.seoScore} / 100</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-1">Target Audience Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResult.audienceKeywords.map((keyword, index) => (
                    <span key={index} className="bg-[rgba(0,0,0,0.3)] px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

