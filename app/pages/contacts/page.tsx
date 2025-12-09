import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default function Contacts() {
  return (
    <main className="min-h-screen p-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-lg">Contact Us</h1>
        <p className="text-text-secondary mb-xl">
          Get in touch with us. We&apos;d love to hear from you.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
