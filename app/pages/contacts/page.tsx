import BusinessHours from './components/BusinessHours';
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import Footer from '@/components/common/layout/Footer'

export default function Contacts() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="px-md">
        {/* Header Section */}
        <div className="mb-md md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-sm mt-md text-accent">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-text-secondary">
            Get in touch with us. We&apos;d love to hear from you and help answer any questions you
            may have.
          </p>
        </div>
        </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 items-start">
          <div className="order-1 md:order-2">
            <ContactForm />
          </div>
          <div className="order-2 md:order-1">
            <ContactInfo />
          </div>
          
        </div>
        <div className="order-3 md:order-3 mt-lg">
            <BusinessHours />
          </div>
      </div>

        <div className="mt-xl">
        <Footer />
      </div>
  </div>
);
}
