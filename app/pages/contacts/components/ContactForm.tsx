'use client'

import { useState } from 'react'
import { Button } from '@/components/common/ui'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-background-secondary p-lg rounded-lg border border-border">
      <h2 className="text-xl font-semibold text-primary mb-md">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-xs">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-md py-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-xs">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-md py-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-xs">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-md py-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </form>
    </div>
  )
}

