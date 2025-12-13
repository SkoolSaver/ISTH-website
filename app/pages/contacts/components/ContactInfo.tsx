export default function ContactInfo() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      content: 'info@isth.com',
      description: 'Send us an email anytime!',
      link: 'mailto:info@isth.com',
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Visit Us',
      content: '123 Main Street, City, State 12345',
      description: 'Come say hello at our office',
      link: '#',
    },
  ]

  return (
    <div className="h-full">
      {/* Contact Methods */}
      <div className="p-lg md:p-xl bg-slate-50 rounded-xl shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-lg text-accent">
          Contact Information
        </h2>
        <div className="space-y-md">
          {contactMethods.map((method: any, index: any) => (
            <div
              key={index}
              className="p-sm rounded-lg transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-sm ">
                <div className="text-3xl">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-xs text-primary">
                    {method.title}
                  </h3>
                  <a
                    href={method.link}
                    className="text-base font-semibold block mb-xs transition-colors hover:underline text-accent"
                  >
                    {method.content}
                  </a>
                  <p className="text-sm text-text-secondary">
                    {method.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Business Hours */}
       <div className="p-lg md:p-xl rounded-xl shadow-lg bg-slate-50 mt-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-xl text-primary">
          Business Hours
        </h2>
        <div className="space-y-md">  
          <div className="flex justify-between items-center p-md rounded-lg">
            <span className="font-semibold text-primary">
              Monday - Friday
            </span>
            <span className="text-text-secondary">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-md rounded-lg">
            <span className="font-semibold text-primary">
              Saturday
            </span>
            <span className="text-text-secondary">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-md rounded-lg">
            <span className="font-semibold text-primary">
              Sunday
            </span>
            <span className="text-text-secondary">Closed</span>
          </div>
        </div>
      </div>

    </div>
  )
}



