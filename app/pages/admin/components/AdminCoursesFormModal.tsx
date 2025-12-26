'use client'

import { useState, useEffect } from 'react'
import { ICourse } from '@/lib/models/CourseModel'
import { appPalette } from '@/theme/palette'

interface AdminCoursesFormModalProps {
  isOpen: boolean
  onClose: () => void
  course: ICourse | null
  onSave: (courseData: Partial<ICourse>) => Promise<void>
  onDelete: (courseId: string) => Promise<void>
}

export default function AdminCoursesFormModal({ isOpen, onClose, course, onSave, onDelete }: AdminCoursesFormModalProps) {
  const [formData, setFormData] = useState<Partial<ICourse>>({})
  const [tagsInput, setTagsInput] = useState('')

  useEffect(() => {
    if (course) {
      setFormData(course)
      setTagsInput(course.tags ? course.tags.join(', ') : '')
    } else {
      setFormData({})
      setTagsInput('')
    }
  }, [course])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: parseFloat(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value)
    const tagsArray = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    setFormData(prev => ({ ...prev, tags: tagsArray }))
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
            {course ? 'Edit Course' : 'Add New Course'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Info */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 text-white">Basic Information</h3>
            </div>

            <div>
              <label className={labelClasses}>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Course Title"
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="course-slug"
                required
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Short Description</label>
              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Brief summary of the course"
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
                placeholder="Detailed course description"
                required
              />
            </div>

            {/* Categorization */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 mt-4 text-white">Categorization</h3>
            </div>

            <div>
              <label className={labelClasses}>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. Development"
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Level</label>
              <input
                type="text"
                name="level"
                value={formData.level || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. Beginner, Intermediate"
                required
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Tags (comma separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={handleTagsChange}
                placeholder="React, TypeScript, Frontend"
                className={inputClasses}
              />
            </div>

            {/* Details */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 mt-4 text-white">Course Details</h3>
            </div>

            <div>
              <label className={labelClasses}>Status</label>
              <select
                name="status"
                value={formData.status || 'active'}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. 10 hours"
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Language</label>
              <input
                type="text"
                name="language"
                value={formData.language || 'English'}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. English"
              />
            </div>

            <div>
              <label className={labelClasses}>Rating</label>
              <input
                type="number"
                name="rating"
                value={formData.rating || 0}
                onChange={handleChange}
                step="0.1"
                min="0"
                max="5"
                className={inputClasses}
                placeholder="0-5"
              />
            </div>

            {/* Pricing */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 mt-4 text-white">Pricing</h3>
            </div>

            <div>
              <label className={labelClasses}>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price || 0}
                onChange={handleChange}
                className={inputClasses}
                placeholder="0.00"
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Discount (%)</label>
              <input
                type="number"
                name="discount"
                value={formData.discount || 0}
                onChange={handleChange}
                className={inputClasses}
                placeholder="0"
              />
            </div>

            <div>
              <label className={labelClasses}>Currency</label>
              <input
                type="text"
                name="currency"
                value={formData.currency || 'INR'}
                onChange={handleChange}
                className={inputClasses}
                placeholder="INR"
              />
            </div>

            {/* URLs */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 mt-4 text-white">Resources & Links</h3>
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Thumbnail URL</label>
              <input
                type="text"
                name="thumbnailUrl"
                value={formData.thumbnailUrl || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="https://..."
                required
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Curriculum PDF URL</label>
              <input
                type="text"
                name="curriculumPdfUrl"
                value={formData.curriculumPdfUrl || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="https://..."
              />
            </div>

            <div className="col-span-2">
              <label className={labelClasses}>Enroll URL</label>
              <input
                type="text"
                name="enrollUrl"
                value={formData.enrollUrl || ''}
                onChange={handleChange}
                className={inputClasses}
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex justify-between gap-4 pt-6 border-t border-gray-700 mt-6">
            <div>
              {course && course._id && (
                <button
                  type="button"
                  onClick={() => onDelete(String(course._id))}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete Course
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
                Save Course
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
