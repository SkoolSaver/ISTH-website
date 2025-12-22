import ContactsHero from './components/ContactsHero'
import BusinessHours from './components/BusinessHours'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <ContactsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-10 py-lg">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-start">
          <div>
            {/* <ContactInfo /> */}
            
          </div>
          <div>
            {/* <ContactForm /> */}
          </div>
        </div>
        <div className="mt-lg lg:mt-xl">
          <BusinessHours />
        </div>
      </div>
    </div>
  )
}
