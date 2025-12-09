export default function ContactInfo() {
  return (
    <div className="space-y-lg">
      <div className="bg-background-secondary p-lg rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-primary mb-md">Contact Information</h2>
        <div className="space-y-md">
          <div>
            <h3 className="font-medium text-text mb-xs">Email</h3>
            <p className="text-text-secondary">info@isth.com</p>
          </div>
          <div>
            <h3 className="font-medium text-text mb-xs">Phone</h3>
            <p className="text-text-secondary">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-medium text-text mb-xs">Address</h3>
            <p className="text-text-secondary">
              123 Main Street<br />
              City, State 12345<br />
              Country
            </p>
          </div>
        </div>
      </div>
      <div className="bg-background-secondary p-lg rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-primary mb-md">Business Hours</h2>
        <div className="space-y-xs text-text-secondary">
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  )
}

