import BusinessHours from './components/BusinessHours'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default function Contacts() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="px-md">
        {/* Header Section */}
        <div className="mb-md px-1 sm:px-1 md:px-1 lg:px-7">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-sm mt-md text-accent-dark">
            Contact Us
          </h1>
          <p className="text-base sm:text-base md:text-lg lg:text-lg max-w-3xl text-text-secondary">
            Get in touch with us. We&apos;d love to hear from you and help answer any questions you
            may have.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-start">
          <div>
            <ContactInfo />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="mt-lg lg:mt-xl">
          <BusinessHours />
        </div>
      </div>
    </div>
  )
}
