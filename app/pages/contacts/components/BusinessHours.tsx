export default function BusinessHours() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      {/* Business Hours */}
      <div className="p-md sm:p-xl md:p-2xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-lg sm:mb-xl text-accent-dark">
          Business Hours
        </h2>
        <div className="space-y-md">
          <div className="flex justify-between items-center p-md rounded-lg bg-gray-50">
            <span className="font-semibold text-sm sm:text-base">
              Monday - Friday
            </span>
            <span className="text-sm sm:text-base text-text-secondary">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-md rounded-lg bg-gray-50">
            <span className="font-semibold text-sm sm:text-base">
              Saturday
            </span>
            <span className="text-sm sm:text-base text-text-secondary">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-md rounded-lg bg-gray-50">
            <span className="font-semibold text-sm sm:text-base">
              Sunday
            </span>
            <span className="text-sm sm:text-base text-text-secondary">Closed</span>
          </div>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="p-lg sm:p-xl md:p-2xl lg:p-2xl">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-sm sm:mb-md text-accent-dark">
          We&apos;re Here to Help
        </h2>
        <p className="text-sm sm:text-base md:text-base lg:text-lg text-text-secondary">
          Whether you have questions about our courses, need help with event registration, or want
          to explore partnership opportunities, our team is ready to assist you. Reach out through
          any of the channels above, and we&apos;ll get back to you promptly.
        </p>
      </div>
    </div>
  )
}
