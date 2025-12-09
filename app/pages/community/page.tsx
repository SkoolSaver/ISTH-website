import CommunityStats from './components/CommunityStats'
import CommunityMembers from './components/CommunityMembers'
import CommunityPosts from './components/CommunityPosts'

export default function Community() {
  return (
    <main className="min-h-screen p-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-lg">
          Community
        </h1>
        <p className="text-text-secondary mb-xl">
          Connect with fellow members and share your experiences.
        </p>
        <CommunityStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mt-xl">
          <div className="lg:col-span-2">
            <CommunityPosts />
          </div>
          <div>
            <CommunityMembers />
          </div>
        </div>
      </div>
    </main>
  )
}

