'use client'

import React, { useState } from 'react'
import { appPalette } from '@/theme/palette'
import { ContactService, ContactFormData } from '@/lib/services/ContactServices'

const countryCodes = [
  { code: '+1', label: 'USA' },
  { code: '+91', label: 'India' },
  { code: '+44', label: 'UK' },
  { code: '+966', label: 'Saudi' },
  { code: '+971', label: 'UAE' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
  { code: '+65', label: 'Singapore' },
  { code: '+353', label: 'Ireland' },
  { code: '+61', label: 'Australia' },
]

const CoursesHero = () => {
  const [selectedCode, setSelectedCode] = useState('+91')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    phone: '',
    consent: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload: ContactFormData = {
      fullName: formData.name,
      email: formData.email,
      phone: {
        countryCode: selectedCode,
        number: formData.phone,
      },
      formType: 'REGISTER_INTEREST',
      topic: formData.program || 'General Inquiry',
      message: 'Lead captured from Courses Hero section',
      country: undefined,
      city: undefined,
      consent: {
        sms: formData.consent,
        whatsapp: formData.consent,
        email: formData.consent,
      },
    }

    try {
      await ContactService.submitContactForm(payload)
      alert('Thank you for your interest! We will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        program: '',
        phone: '',
        consent: true,
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="pt-10 pb-10 overflow-x-hidden w-full bg-gray-100 mb-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 w-full">
        {/* Left Content Column */}
        <div className="lg:w-1/2 w-full min-w-0">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl font-extrabold mb-md sm:mb-lg leading-tight"
            style={{ color: appPalette.text.main }}
          >
            <span style={{ color: appPalette.active.accent }}>
              International Student Talent Hub
            </span>
          </h2>

          <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-md sm:text-lg md:text-xl lg:text-xl">
            <li className="flex items-start" style={{ color: appPalette.text.main }}>
              <span
                className="mr-2 sm:mr-3 text-2xl sm:text-3xl"
                style={{ color: appPalette.active.accent }}
              >
                &bull;
              </span>
              <div>
                <strong className="font-bold">Interactive Learning:</strong> Master fundamentals
                hands-on.
              </div>
            </li>
            <li className="flex items-start" style={{ color: appPalette.text.main }}>
              <span
                className="mr-2 sm:mr-3 text-2xl sm:text-3xl"
                style={{ color: appPalette.active.accent }}
              >
                &bull;
              </span>
              <div>
                <strong className="font-bold">Real Projects:</strong> Build and learn by doing.
              </div>
            </li>
            <li className="flex items-start" style={{ color: appPalette.text.main }}>
              <span
                className="mr-2 sm:mr-3 text-2xl sm:text-3xl"
                style={{ color: appPalette.active.accent }}
              >
                &bull;
              </span>
              <div>
                <strong className="font-bold">Expert Mentorship:</strong> Get guided by industry
                leaders.
              </div>
            </li>
          </ul>
        </div>

        {/* Right Form Column */}
        <div className="lg:w-1/2 w-full min-w-0">
          <div
            className="p-5 sm:p-6 md:p-8 rounded-xl shadow-lg w-full"
            style={{ backgroundColor: appPalette.background.main }}
          >
            <style>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover, 
              input:-webkit-autofill:focus, 
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px inset !important;
                -webkit-text-fill-color: ${appPalette.text.main} !important;
                transition: background-color 5000s ease-in-out 0s;
              }
            `}</style>
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {/* Name Input */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input w-full placeholder:text-gray-400 border border-gray-500 rounded-md px-sm"
                placeholder="Name"
                style={{
                  backgroundColor: appPalette.background.main,
                  color: appPalette.text.main,
                }}
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input w-full placeholder:text-gray-400 border border-gray-500 rounded-md px-sm"
                placeholder="Email"
                style={{
                  backgroundColor: appPalette.background.main,
                  color: appPalette.text.main,
                }}
              />

              {/* Program Interested Input */}
              <input
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="input w-full placeholder:text-gray-400 border border-gray-500 rounded-md px-sm"
                placeholder="Program interested"
                style={{
                  backgroundColor: appPalette.background.main,
                  color: appPalette.text.main,
                }}
              />

              {/* Phone Input */}
              <div className="join w-full">
                <select
                  className="select border border-gray-500 rounded-md px-sm"
                  value={selectedCode}
                  onChange={e => setSelectedCode(e.target.value)}
                  style={{
                    backgroundColor: appPalette.background.main,
                    color: appPalette.text.main,
                  }}
                >
                  {countryCodes.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.label} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input w-full placeholder:text-gray-400 border border-gray-500 rounded-md px-sm"
                  placeholder="Phone"
                  style={{
                    backgroundColor: appPalette.background.main,
                    color: appPalette.text.main,
                  }}
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start pt-2">
                <label className="label cursor-pointer justify-start gap-2 p-0">
                  <input
                    type="checkbox"
                    id="sms_consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="checkbox checkbox-sm border border-gray-500 rounded-md"
                    style={
                      {
                        '--chkbg': appPalette.active.accent,
                        '--chkfg': appPalette.active.light,
                      } as React.CSSProperties
                    }
                  />
                  <span
                    className="label-text text-xs sm:text-sm text-left"
                    style={{ color: appPalette.text.secondary }}
                  >
                    Receive SMS & Whatsapp communications on this number.
                  </span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn px-lg text-base sm:text-lg font-semibold shadow-md border-none hover:opacity-90 rounded-md"
                style={{
                  backgroundColor: appPalette.active.accent,
                  color: appPalette.active.light,
                }}
              >
                {isSubmitting ? <span className="loading loading-spinner"></span> : 'Sign Up ❯'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesHero
