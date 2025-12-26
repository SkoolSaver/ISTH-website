'use client'

import { useEffect, useState } from 'react'
import { EventsService } from '@/lib/services/EventsServices'
import { IEvent } from '@/lib/models/EventsModel'
import { appPalette } from '@/theme/palette'
import AdminEventsFormModal from './AdminEventsFormModal'

export default function AdminEvents() {
  const [events, setEvents] = useState<IEvent[]>([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const response = await EventsService.getAll()
      if (response.success && response.data) {
        setEvents(response.data)
      }
    } catch (error) {
      console.error('Failed to fetch events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRowClick = (event: IEvent) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleAddNew = () => {
    setSelectedEvent(null)
    setIsModalOpen(true)
  }

  const handleSave = async (eventData: Partial<IEvent>) => {
    try {
      if (selectedEvent) {
        // Update existing event
        if (selectedEvent._id) {
          const response = await EventsService.update(String(selectedEvent._id), eventData)
          if (response.success) {
            fetchEvents()
          } else {
            console.error('Failed to update event:', response.error)
            alert('Failed to update event')
          }
        }
      } else {
        // Create new event
        const response = await EventsService.create(eventData)
        if (response.success) {
          fetchEvents()
        } else {
          console.error('Failed to create event:', response.error)
          alert('Failed to create event')
        }
      }
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error saving event:', error)
      alert('An error occurred while saving the event')
    }
  }

  const handleDelete = async (eventId: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await EventsService.delete(eventId)
        if (response.success) {
          fetchEvents()
          setIsModalOpen(false)
        } else {
          console.error('Failed to delete event:', response.error)
          alert('Failed to delete event')
        }
      } catch (error) {
        console.error('Error deleting event:', error)
        alert('An error occurred while deleting the event')
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: appPalette.text.main }}>Events Management</h2>
        <button
          onClick={handleAddNew}
          className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
          style={{ backgroundColor: appPalette.active.accent }}
        >
          Add New Event
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
        {loading ? (
          <p>Loading events...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event) => (
                <tr 
                  key={String(event._id)} 
                  onClick={() => handleRowClick(event)}
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(event.eventDate).toLocaleDateString('en-US', { timeZone: 'UTC' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      event.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {event.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(event.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <AdminEventsFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  )
}
