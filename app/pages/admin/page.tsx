'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { appPalette } from '@/theme/palette'
import AdminCourses from './components/AdminCourses'
import AdminEvents from './components/AdminEvents'
import AdminLeads from './components/AdminLeads'

export default function AdminDashboard() {
  const { isLoggedIn, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'courses' | 'events' | 'leads'>('courses')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      if (!isLoggedIn && !localStorage.getItem("isth_admin_logged_in")) {
        router.push("/pages/login");
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, [isLoggedIn, router])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return <AdminCourses />
      case 'events':
        return <AdminEvents />
      case 'leads':
        return <AdminLeads />
      default:
        return null
    }
  }

  const NavItem = ({ id, label }: { id: 'courses' | 'events' | 'leads', label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full text-left px-6 py-3 transition-colors ${
        activeTab === id 
          ? 'bg-gray-100 border-r-4' 
          : 'hover:bg-gray-50'
      }`}
      style={{ 
        borderColor: activeTab === id ? appPalette.active.accent : 'transparent',
        color: activeTab === id ? appPalette.active.accent : appPalette.text.secondary,
        fontWeight: activeTab === id ? 600 : 400
      }}
    >
      {label}
    </button>
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col sticky top-20 h-[calc(100vh-5rem)] z-10">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold" style={{ color: appPalette.text.main }}>Admin Panel</h1>
        </div>
        
        <nav className="flex-1 py-6 flex flex-col gap-1 overflow-y-auto">
          <NavItem id="courses" label="Courses" />
          <NavItem id="events" label="Events" />
          <NavItem id="leads" label="Leads" />
        </nav>

        <div className="p-6 border-t">
          <button
            onClick={logout}
            className="w-full px-4 py-2 text-sm font-medium rounded-md text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#dc2626' }} // Red color for logout
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-x-hidden">
        {renderContent()}
      </div>
    </div>
  )
}
