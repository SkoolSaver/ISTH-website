'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    reason: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      // TODO: Send email to Admin or store in DB
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you soon.')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        reason: '',
        message: '',
      })
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="h-full">
      <div className="p-lg md:p-xl rounded-xl shadow-lg bg-slate-50">
        <h2 className="text-xl md:text-2xl font-bold mb-md text-primary">
          Get in Touch
        </h2>
        <p className="mb-lg text-sm text-text-secondary">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-md">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-xs text-primary">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent"
            required
          />
        </div>

        {/* Phone and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-xs text-primary">
              Phone Number <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-xs text-primary">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent"
              required
            />
          </div>
        </div>

        {/* Location Row - Country and City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div>
            <label htmlFor="country" className="block text-sm font-semibold mb-xs text-primary">
              Country <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-semibold mb-xs text-primary">
              City <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent"
              required
            />
          </div>
        </div>

        {/* Reason Dropdown */}
        <div>
          <label htmlFor="reason" className="block text-sm font-semibold mb-xs text-primary">
            Topic <span className="text-accent">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary bg-background transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent"
            required
          >
            <option value="">Select a topic</option>
            <option value="course-inquiry">Course Inquiry</option>
            <option value="event-registration">Event Registration Issue</option>
            <option value="partnership">Partnership / Sponsor</option>
            <option value="general">General Information</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-xs text-primary">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full px-md py-sm text-sm rounded-lg border-2 border-border text-primary transition-all focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-xl py-sm text-base font-semibold rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white ${
            isSubmitting ? 'bg-secondary' : 'bg-accent hover:bg-accent-dark'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
      </div>
    </div>
  )
}

