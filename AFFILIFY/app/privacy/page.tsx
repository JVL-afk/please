export const metadata = {
  title: 'AFFILIFY Privacy Policy',
  description: 'Learn how AFFILIFY handles your data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[rgba(45,26,61,0.7)] p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-[var(--text-secondary)]">
          <p>Last updated: April 28, 2025</p>
          <p>AFFILIFY ("us", "we", or "our") operates the AFFILIFY website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          
          <h2 className="text-xl font-semibold pt-4">Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          <p>Types of Data Collected:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.</li>
            <li>Usage Data: We may also collect information how the Service is accessed and used ("Usage Data").</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4">Use of Data</h2>
          <p>AFFILIFY uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside pl-4">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4">Data Security</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

          {/* Add more sections as needed: Service Providers, Links To Other Sites, Children's Privacy, Changes To This Privacy Policy, Contact Us */}
          <h2 className="text-xl font-semibold pt-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@affilify.eu" className="text-[var(--button-primary)] hover:underline">privacy@affilify.eu</a>.</p>
        </div>
      </div>
    </main>
  )
}

