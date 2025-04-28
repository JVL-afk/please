export const metadata = {
  title: 'AFFILIFY Terms of Service',
  description: 'Read the terms and conditions for using AFFILIFY.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[rgba(45,26,61,0.7)] p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="space-y-4 text-[var(--text-secondary)]">
          <p>Last updated: April 28, 2025</p>
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AFFILIFY website (the "Service") operated by AFFILIFY ("us", "we", or "our").</p>
          <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
          <h2 className="text-xl font-semibold pt-4">Accounts</h2>
          <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
          <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
          <h2 className="text-xl font-semibold pt-4">Intellectual Property</h2>
          <p>The Service and its original content, features and functionality are and will remain the exclusive property of AFFILIFY and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries.</p>
          <h2 className="text-xl font-semibold pt-4">Termination</h2>
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          {/* Add more sections as needed: Governing Law, Changes, Contact Us */}
          <h2 className="text-xl font-semibold pt-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@affilify.eu" className="text-[var(--button-primary)] hover:underline">legal@affilify.eu</a>.</p>
        </div>
      </div>
    </main>
  )
}

