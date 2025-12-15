import BusinessHours from './components/BusinessHours';
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import Footer from '@/components/common/layout/Footer'

export default function Contacts() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="px-md">
        {/* Header Section */}
        <div className="mb-md px-1 sm:px-1 md:px-1 lg:px-7">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-sm mt-md text-accent">
            Contact Us
          </h1>
          <p className="text-md sm:text-md md:text-lg lg:text-lg max-w-3xl text-text-secondary">
            Get in touch with us. We&apos;d love to hear from you and help answer any questions you
            may have.
          </p>
        </div>
        </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-5 md:gap-5 lg:gap-10 items-start">
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
