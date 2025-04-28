
export const metadata = {
  title: 'AFFILIFY Features',
  description: 'Explore the powerful features of AFFILIFY for AI-driven affiliate marketing.',
}

// Example feature data (replace with actual feature details)
const features = [
  {
    title: 'AI Website Analysis',
    description: 'Deep dive into any website to uncover product details, affiliate potential, SEO insights, and target audience keywords. Our AI provides actionable data to inform your strategy.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'AI Website Generation',
    description: 'Automatically create fully functional, SEO-optimized affiliate websites in minutes. Based on your analysis or a source URL, AFFILIFY builds sites with integrated content and affiliate links.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Integrated Affiliate Links',
    description: 'Seamlessly connect your affiliate network accounts (Amazon Associates, CJ, ShareASale, etc.). AFFILIFY automatically embeds your unique tracking links into the generated content.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: 'Dashboard & Analytics',
    description: 'Manage all your generated websites from a central dashboard. Track key metrics like traffic, clicks, conversions, and estimated revenue to optimize performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Customization Options',
    description: 'Choose from various themes and layouts (coming soon) to match your niche and brand. Fine-tune content and settings before publishing your website.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Developer API',
    description: 'Integrate AFFILIFY\'s core analysis and generation capabilities into your own tools and workflows with our robust API (coming soon).',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-[var(--button-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586" />
      </svg>
    ),
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AFFILIFY Features</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Leverage the power of AI to streamline your affiliate marketing workflow, from research and analysis to website creation and management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[rgba(45,26,61,0.7)] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/signup"
            className="inline-block bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg"
          >
            Get Started with AFFILIFY Today
          </a>
        </div>
      </div>
    </main>
  )
}

