export default function CommunityMembers() {
  const members = [
    { id: 1, name: 'John Doe', role: 'Developer', avatar: '👤' },
    { id: 2, name: 'Jane Smith', role: 'Designer', avatar: '👤' },
    { id: 3, name: 'Mike Johnson', role: 'Developer', avatar: '👤' },
    { id: 4, name: 'Sarah Williams', role: 'Product Manager', avatar: '👤' },
    { id: 5, name: 'David Brown', role: 'Developer', avatar: '👤' },
  ]

  return (
    <div className="bg-background-secondary p-lg rounded-lg border border-border">
      <h2 className="text-xl font-semibold text-primary mb-md">Active Members</h2>
      <div className="space-y-sm">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-md p-sm rounded-md hover:bg-background transition-colors"
          >
            <div className="text-2xl">{member.avatar}</div>
            <div className="flex-1">
              <div className="font-medium text-text">{member.name}</div>
              <div className="text-sm text-text-secondary">{member.role}</div>
            </div>
            <button className="text-primary text-sm hover:underline">
              Follow
            </button>
          </div>
        ))}
      </div>
      <button className="w-full mt-md py-sm text-sm text-primary hover:underline">
        View All Members →
      </button>
    </div>
  )
}

