'use client'

import { useState } from 'react'
import { ContactService, ContactFormData } from '@/lib/services/ContactServices'
import { appPalette } from '@/theme/palette'

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
    
    const payload: ContactFormData = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      formType: 'CONTACT_US',
      topic: formData.reason,
      message: formData.message,
      country: formData.country,
      city: formData.city,
      consent: {
        sms: false,
        whatsapp: false,
        email: false
      }
    }

    try {
      await ContactService.submitContactForm(payload)
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
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
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
      <div className="p-lg md:p-xl lg:p-xl rounded-xl shadow-lg bg-gray-100 border-2 border-gray-100">
        <style>{`
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px ${appPalette.background.main} inset !important;
            -webkit-text-fill-color: ${appPalette.text.main} !important;
            transition: background-color 5000s ease-in-out 0s;
          }
        `}</style>
        <h2 className="text-xl md:text-2xl font-bold mb-sm text-accent-dark">
          Get in Touch
        </h2>
        <p className="mb-md text-sm text-text-secondary">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-md">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-xs text-text-secondary">
            Full Name <span className="text-accent-dark">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input input-bordered w-full bg-white text-sm focus:outline-none px-md"
            style={{ 
              borderColor: appPalette.border.main,
              color: appPalette.text.main 
            }}
            required
          />
        </div>

        {/* Phone and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-xs text-text-secondary">
              Phone Number <span className="text-accent-dark">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="input input-bordered w-full bg-white text-sm focus:outline-none px-md"
              style={{ 
                borderColor: appPalette.border.main,
                color: appPalette.text.main 
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-xs text-text-secondary">
              Email Address <span className="text-accent-dark">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="input input-bordered w-full bg-white text-sm focus:outline-none px-md"
              style={{ 
                borderColor: appPalette.border.main,
                color: appPalette.text.main 
              }}
              required
            />
          </div>
        </div>

        {/* Location Row - Country and City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div>
            <label htmlFor="country" className="block text-sm font-semibold mb-xs text-text-secondary">
              Country <span className="text-accent-dark">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              className="input input-bordered w-full bg-white text-sm focus:outline-none px-md"
              style={{ 
                borderColor: appPalette.border.main,
                color: appPalette.text.main 
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-semibold mb-xs text-text-secondary">
              City <span className="text-accent-dark">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="input input-bordered w-full bg-white text-sm focus:outline-none px-md"
              style={{ 
                borderColor: appPalette.border.main,
                color: appPalette.text.main 
              }}
              required
            />
          </div>
        </div>

        {/* Reason Dropdown */}
        <div>
          <label htmlFor="reason" className="block text-sm font-semibold mb-xs text-text-secondary">
            Topic <span className="text-accent-dark">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="select select-bordered w-full bg-white text-sm focus:outline-none px-md"
            style={{ 
              borderColor: appPalette.border.main,
              color: appPalette.text.main 
            }}
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
          <label htmlFor="message" className="block text-sm font-semibold mb-xs text-text-secondary">
            Message <span className="text-accent-dark">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us how we can help..."
            className="textarea textarea-bordered w-full bg-white text-sm focus:outline-none p-sm"
            style={{ 
              borderColor: appPalette.border.main,
              color: appPalette.text.main 
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn px-md text-base font-semibold border-none hover:opacity-90 ${
            isSubmitting ? 'bg-secondary' : 'bg-accent-dark hover:bg-accent-dark'
          }`}
          style={{ color: 'white' }}
        >
          {isSubmitting ? <span className="loading loading-spinner"></span> : 'Send message'}
        </button>
      </form>
      </div>
    </div>
  )
}

