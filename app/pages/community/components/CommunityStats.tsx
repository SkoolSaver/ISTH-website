export default function CommunityStats() {
  const stats = [
    { label: 'Total Members', value: '1,234', icon: '👥' },
    { label: 'Active Users', value: '856', icon: '✨' },
    { label: 'Posts This Month', value: '342', icon: '📝' },
    { label: 'Events', value: '12', icon: '🎉' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-background-secondary p-lg rounded-lg border border-border text-center"
        >
          <div className="text-3xl mb-sm">{stat.icon}</div>
          <div className="text-2xl font-bold text-primary mb-xs">{stat.value}</div>
          <div className="text-sm text-text-secondary">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

