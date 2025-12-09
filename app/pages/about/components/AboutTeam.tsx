export default function AboutTeam() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Passionate about technology and innovation.',
      avatar: '👤',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Expert in modern web technologies.',
      avatar: '👤',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Building amazing user experiences.',
      avatar: '👤',
    },
    {
      name: 'Sarah Williams',
      role: 'Design Director',
      bio: 'Creating beautiful and functional designs.',
      avatar: '👤',
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-xl text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-background-secondary p-lg rounded-lg border border-border text-center"
          >
            <div className="text-5xl mb-md">{member.avatar}</div>
            <h3 className="text-lg font-semibold text-primary mb-xs">{member.name}</h3>
            <p className="text-sm text-accent mb-sm">{member.role}</p>
            <p className="text-text-secondary text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

