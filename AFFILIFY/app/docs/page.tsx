
export const metadata = {
  title: 'AFFILIFY Documentation',
  description: 'Learn how to use AFFILIFY to create and manage affiliate websites.',
}

export default function DocsPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">AFFILIFY Documentation</h1>

        {/* Getting Started Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-[rgba(255,255,255,0.1)] pb-2">Getting Started</h2>
          <p className="mb-4 text-[var(--text-secondary)]">
            Welcome to AFFILIFY! This guide will help you get started with creating your first AI-powered affiliate marketing website.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[var(--text-secondary)]">
            <li>Sign up for an AFFILIFY account.</li>
            <li>Navigate to the Dashboard.</li>
            <li>Click "Analyze a Website" to analyze a source website for products.</li>
            <li>Review the analysis results.</li>
            <li>Click "Create a New Website" and select the analysis you want to use.</li>
            <li>Customize your website settings (domain, theme, etc.).</li>
            <li>Let AFFILIFY generate your website!</li>
            <li>Review and publish your new affiliate site.</li>
          </ol>
        </section>

        {/* API Documentation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-[rgba(255,255,255,0.1)] pb-2">API Documentation</h2>
          <p className="mb-4 text-[var(--text-secondary)]">
            Integrate AFFILIFY's powerful features into your own applications using our API. (Full API documentation coming soon!)
          </p>
          <div className="bg-[rgba(45,26,61,0.7)] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Endpoints (Preview)</h3>
            <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
              <li><code>POST /api/analyze</code> - Analyze a website URL.</li>
              <li><code>POST /api/create</code> - Create a new affiliate website based on analysis.</li>
              <li><code>GET /api/websites</code> - List user's created websites.</li>
              <li><code>GET /api/websites/:id</code> - Get details for a specific website.</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              Authentication is required via API key. Request your key from your account settings.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-[rgba(255,255,255,0.1)] pb-2">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">How does AFFILIFY analyze websites?</h3>
              <p className="text-[var(--text-secondary)]">
                AFFILIFY uses advanced AI algorithms to scrape website content, identify products, extract relevant information (descriptions, images, prices), and analyze potential audience and SEO factors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">How are affiliate links integrated?</h3>
              <p className="text-[var(--text-secondary)]">
                During website creation, you can provide your affiliate network details and IDs. AFFILIFY automatically integrates your affiliate links into the generated product listings and content.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Can I customize the generated websites?</h3>
              <p className="text-[var(--text-secondary)]">
                Yes! While AFFILIFY provides a complete website, you will have options to customize the theme, layout, and content before publishing. Advanced users can also export the code.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">What affiliate networks are supported?</h3>
              <p className="text-[var(--text-secondary)]">
                We aim to support major affiliate networks like Amazon Associates, Commission Junction, ShareASale, and more. Support for specific networks may vary based on your plan.
              </p>
            </div>
          </div>
        </section>

        {/* Contact/Support Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-[rgba(255,255,255,0.1)] pb-2">Support</h2>
          <p className="text-[var(--text-secondary)]">
            Need further assistance? Contact our support team at <a href="mailto:support@affilify.eu" className="text-[var(--button-primary)] hover:underline">support@affilify.eu</a> or visit our community forums.
          </p>
        </section>
      </div>
    </main>
  )
}

