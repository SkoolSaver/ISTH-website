'use client'

import { useState, useEffect } from 'react'
import { IEvent } from '@/lib/models/EventsModel'
import { appPalette } from '@/theme/palette'

interface AdminEventsFormModalProps {
  isOpen: boolean
  onClose: () => void
  event: IEvent | null
  onSave: (eventData: Partial<IEvent>) => Promise<void>
  onDelete: (eventId: string) => Promise<void>
}

export default function AdminEventsFormModal({ isOpen, onClose, event, onSave, onDelete }: AdminEventsFormModalProps) {
  const [formData, setFormData] = useState<Partial<IEvent>>({})

  useEffect(() => {
    if (event) {
      // Format date for input field (YYYY-MM-DD)
      const formattedEvent = { ...event }
      if (event.eventDate) {
        // Use UTC date string directly
        formattedEvent.eventDate = new Date(event.eventDate).toISOString().split('T')[0] as any
      }
      setFormData(formattedEvent)
    } else {
      setFormData({ isActive: true })
    }
  }, [event])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSave(formData)
    onClose()
  }

  if (!isOpen) return null

  const inputClasses = "w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-y-auto py-10">
      <div className="bg-[#1f2937] rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto text-white">
        <div className="flex justify-between items-center p-6 border-b border-gray-700 sticky top-0 bg-[#1f2937] z-10">
          <h2 className="text-xl font-bold text-white">
            {event ? 'Edit Event' : 'Add New Event'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="col-span-2">
              <label className={labelClasses}>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Event Title"
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate ? String(formData.eventDate) : ''}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. Webinar, Workshop"
                required
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Description</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                rows={4}
                className={inputClasses}
                placeholder="Event description"
                required
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="https://..."
                required
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Nasio URL (Registration Link)</label>
              <input
                type="text"
                name="nasioUrl"
                value={formData.nasioUrl || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="https://..."
                required
              />
            </div>

            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                name="isActive"
                id="isActive"
                checked={formData.isActive !== false}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
                Is Active
              </label>
            </div>

          </div>

          <div className="flex justify-between gap-4 pt-6 border-t border-gray-700 mt-6">
            <div>
              {event && event._id && (
                <button
                  type="button"
                  onClick={() => onDelete(String(event._id))}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete Event
                </button>
              )}
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-md hover:opacity-90"
                style={{ backgroundColor: appPalette.active.accent }}
              >
                Save Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
