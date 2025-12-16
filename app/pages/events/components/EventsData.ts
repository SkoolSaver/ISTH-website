export interface EventItem {
  title: string
  date: Date
  category: string
  description: string
}

export const EventsData: EventItem[] = [
  // November events
  {
    title: 'Intro to TypeScript',
    date: new Date(Date.UTC(2025, 10, 5)),
    category: 'Course',
    description: 'Learn the basics of TypeScript and how to add strong typing to your JavaScript projects.',
  },
  {
    title: 'UI/UX Design Fundamentals',
    date: new Date(Date.UTC(2025, 10, 12)),
    category: 'Workshop',
    description: 'Hands-on workshop covering layout, typography, and accessibility best practices.',
  },
  {
    title: 'Backend with Node.js',
    date: new Date(Date.UTC(2025, 10, 20)),
    category: 'Bootcamp',
    description: 'Build and deploy REST APIs using Node.js, Express, and modern tooling.',
  },

  // December events
  {
    title: 'Holiday Hackathon',
    date: new Date(Date.UTC(2025, 11, 3)),
    category: 'Hackathon',
    description: 'A full-day hackathon to prototype ideas and collaborate with other developers.',
  },
  {
    title: 'Advanced React Patterns',
    date: new Date(Date.UTC(2025, 11, 10)),
    category: 'Course',
    description: 'Deep dive into React performance, context, and composition patterns.',
  },
  {
    title: 'Year-End Tech Meetup',
    date: new Date(Date.UTC(2025, 11, 18)),
    category: 'Meetup',
    description: 'Community meetup to share wins, lessons, and plans for the next year.',
  },

  // January events
  {
    title: 'React Workshop',
    date: new Date(Date.UTC(2026, 0, 5)),
    category: 'Workshop',
    description: 'Build your first production-ready React application in a guided workshop.',
  },
  {
    title: 'JavaScript Basics',
    date: new Date(Date.UTC(2026, 0, 12)),
    category: 'Course',
    description: 'Foundational JavaScript course covering syntax, DOM, and async programming.',
  },
  {
    title: 'Advanced CSS',
    date: new Date(Date.UTC(2026, 0, 15)),
    category: 'Course',
    description: 'Master modern CSS, including Grid, Flexbox, and responsive design techniques.',
  },
  {
    title: 'Web Dev Bootcamp',
    date: new Date(Date.UTC(2026, 0, 20)),
    category: 'Bootcamp',
    description: 'Intensive bootcamp covering full-stack web development from frontend to backend.',
  },
  {
    title: 'Next.js Conference',
    date: new Date(Date.UTC(2026, 0, 28)),
    category: 'Conference',
    description: 'A conference focused on the Next.js ecosystem, case studies, and best practices.',
  },
]