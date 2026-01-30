'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { CourseService } from '@/lib/services/CourseServices'
import { ICourse } from '@/lib/models/CourseModel'
import { appPalette } from '@/theme/palette'
import { coursesFetcher } from '@/lib/swr/fetchers'
import AdminCoursesFormModal from './AdminCoursesFormModal'

export default function AdminCourses() {
  const { data: courses = [], isLoading, mutate } = useSWR('courses', coursesFetcher)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null)

  const handleRowClick = (course: ICourse) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const handleAddNew = () => {
    setSelectedCourse(null)
    setIsModalOpen(true)
  }

  const handleSave = async (courseData: Partial<ICourse>) => {
    try {
      if (selectedCourse) {
        // Update existing course
        if (selectedCourse._id) {
          const response = await CourseService.update(String(selectedCourse._id), courseData)
          if (response.success) {
            mutate()
          } else {
            console.error('Failed to update course:', response.error)
            alert('Failed to update course')
          }
        }
      } else {
        // Create new course
        const response = await CourseService.create(courseData)
        if (response.success) {
          mutate()
        } else {
          console.error('Failed to create course:', response.error)
          alert('Failed to create course')
        }
      }
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error saving course:', error)
      alert('An error occurred while saving the course')
    }
  }

  const handleDelete = async (courseId: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await CourseService.delete(courseId)
        if (response.success) {
          mutate()
          setIsModalOpen(false)
        } else {
          console.error('Failed to delete course:', response.error)
          alert('Failed to delete course')
        }
      } catch (error) {
        console.error('Error deleting course:', error)
        alert('An error occurred while deleting the course')
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: appPalette.text.main }}>Courses Management</h2>
        <button
          onClick={handleAddNew}
          className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
          style={{ backgroundColor: appPalette.active.accent }}
        >
          Add New Course
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
        {isLoading ? (
          <p>Loading courses...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr 
                  key={String(course._id)} 
                  onClick={() => handleRowClick(course)}
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.level}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <AdminCoursesFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  )
}
