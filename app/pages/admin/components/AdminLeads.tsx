'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { LeadsService } from '@/lib/services/LeadsServices'
import { ILead } from '@/types/lead'
import { appPalette } from '@/theme/palette'
import { leadsFetcher } from '@/lib/swr/fetchers'
import AdminLeadsDetailModal from './AdminLeadsDetailModal'
import Button from '@/components/common/ui/Button'

export default function AdminLeads() {
  const { data: leads = [], isLoading, mutate } = useSWR('leads', leadsFetcher)
  const [selectedLead, setSelectedLead] = useState<ILead | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  // Pagination logic
  const indexOfLastLead = currentPage * itemsPerPage
  const indexOfFirstLead = indexOfLastLead - itemsPerPage
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead)
  const totalPages = Math.ceil(leads.length / itemsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleDelete = async (e: React.MouseEvent, leadId: string) => {
    e.stopPropagation() // Prevent row click event
    if (confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
      try {
        const response = await LeadsService.delete(leadId)
        if (response.success) {
          mutate()
        } else {
          alert('Failed to delete lead')
        }
      } catch (error) {
        console.error('Error deleting lead:', error)
        alert('An error occurred while deleting the lead')
      }
    }
  }

  const handleRowClick = async (lead: ILead) => {
    setSelectedLead(lead)
    setIsModalOpen(true)

    if (lead.status === 'new' && lead._id) {
      try {
        await LeadsService.update(String(lead._id), { status: 'read' })
        mutate()
      } catch (error) {
        console.error('Failed to mark lead as read:', error)
        mutate()
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-baseline gap-4">
          <h2 className="text-2xl font-bold" style={{ color: appPalette.text.main }}>Leads Management</h2>
          <span className="text-gray-500 font-medium">Total: {leads.length}</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
        {isLoading ? (
          <p>Loading leads...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentLeads.map((lead) => (
                <tr 
                  key={String(lead._id)} 
                  onClick={() => handleRowClick(lead)}
                  className={`cursor-pointer transition-colors ${
                    lead.status === 'new' ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.topic || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      lead.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                      lead.status === 'read' ? 'bg-purple-100 text-purple-800' :
                      lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                      lead.status === 'converted' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={(e) => handleDelete(e, String(lead._id))}
                      className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {!isLoading && leads.length > 0 && (
        <div className="flex justify-between items-center mt-4 px-2">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstLead + 1}</span> to <span className="font-medium">{Math.min(indexOfLastLead, leads.length)}</span> of <span className="font-medium">{leads.length}</span> results
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            <div className="flex items-center px-2">
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      <AdminLeadsDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lead={selectedLead}
      />
    </div>
  )
}
