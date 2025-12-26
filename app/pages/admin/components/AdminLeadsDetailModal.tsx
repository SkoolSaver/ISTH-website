'use client'

import { ILead } from '@/types/lead'
import { appPalette } from '@/theme/palette'

interface AdminLeadsDetailModalProps {
  isOpen: boolean
  onClose: () => void
  lead: ILead | null
}

export default function AdminLeadsDetailModal({ isOpen, onClose, lead }: AdminLeadsDetailModalProps) {
  if (!isOpen || !lead) return null

  const labelClasses = "block text-sm font-medium text-gray-400 mb-1"
  const valueClasses = "text-white text-base break-words"

  const DetailItem = ({ label, value }: { label: string, value: React.ReactNode }) => (
    <div className="mb-4">
      <label className={labelClasses}>{label}</label>
      <div className={valueClasses}>{value || '-'}</div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-y-auto py-10">
      <div className="bg-[#1f2937] rounded-lg shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto text-white">
        <div className="flex justify-between items-center p-6 border-b border-gray-700 sticky top-0 bg-[#1f2937] z-10">
          <h2 className="text-xl font-bold text-white">Lead Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 text-white">Contact Information</h3>
            </div>

            <DetailItem label="Full Name" value={lead.fullName} />
            <DetailItem label="Email" value={lead.email} />
            <DetailItem 
              label="Phone" 
              value={lead.phone ? `+${lead.phone.countryCode} ${lead.phone.number}` : '-'} 
            />
            <DetailItem label="Location" value={lead.city && lead.country ? `${lead.city}, ${lead.country}` : (lead.city || lead.country || '-')} />

            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 mt-4 text-white">Inquiry Details</h3>
            </div>

            <DetailItem label="Form Type" value={lead.formType} />
            <DetailItem label="Topic" value={lead.topic} />
            <DetailItem label="Status" value={
              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                lead.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                lead.status === 'read' ? 'bg-purple-100 text-purple-800' :
                lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                lead.status === 'converted' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {lead.status.toUpperCase()}
              </span>
            } />
            <DetailItem label="Created At" value={new Date(lead.createdAt).toLocaleString()} />

            <div className="col-span-2">
              <label className={labelClasses}>Message</label>
              <div className="bg-gray-800 p-4 rounded-md text-gray-300 whitespace-pre-wrap">
                {lead.message || 'No message provided.'}
              </div>
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 mt-4 text-white">Consent & Meta</h3>
            </div>

            <DetailItem label="Consent" value={
              <div className="flex gap-4">
                <span className={lead.consent?.sms ? "text-green-400" : "text-gray-500"}>SMS: {lead.consent?.sms ? 'Yes' : 'No'}</span>
                <span className={lead.consent?.whatsapp ? "text-green-400" : "text-gray-500"}>WhatsApp: {lead.consent?.whatsapp ? 'Yes' : 'No'}</span>
                <span className={lead.consent?.email ? "text-green-400" : "text-gray-500"}>Email: {lead.consent?.email ? 'Yes' : 'No'}</span>
              </div>
            } />
            <DetailItem label="Lead ID" value={String(lead._id)} />
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            style={{ backgroundColor: appPalette.active.accent }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
