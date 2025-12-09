export default function CommunityPosts() {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      avatar: '👤',
      title: 'Getting Started with Next.js 14',
      content: 'I just started learning Next.js 14 and wanted to share some tips...',
      likes: 24,
      comments: 8,
      time: '2 hours ago',
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: '👤',
      title: 'Best Practices for TypeScript',
      content: 'Here are some TypeScript patterns I found really helpful...',
      likes: 18,
      comments: 5,
      time: '5 hours ago',
    },
    {
      id: 3,
      author: 'Mike Johnson',
      avatar: '👤',
      title: 'Tailwind CSS Tips and Tricks',
      content: 'Sharing some advanced Tailwind techniques that saved me time...',
      likes: 31,
      comments: 12,
      time: '1 day ago',
    },
  ]

  return (
    <div className="space-y-md">
      <div className="flex items-center justify-between mb-md">
        <h2 className="text-xl font-semibold text-primary">Recent Posts</h2>
        <button className="px-md py-sm bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm">
          Create Post
        </button>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-background-secondary p-lg rounded-lg border border-border hover:shadow-md transition-shadow"
        >
          <div className="flex gap-md mb-sm">
            <div className="text-2xl">{post.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-sm mb-xs">
                <span className="font-medium text-text">{post.author}</span>
                <span className="text-text-muted text-sm">· {post.time}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-xs">
                {post.title}
              </h3>
              <p className="text-text-secondary text-sm mb-md">{post.content}</p>
              <div className="flex items-center gap-lg text-sm text-text-secondary">
                <button className="flex items-center gap-xs hover:text-primary transition-colors">
                  👍 {post.likes}
                </button>
                <button className="flex items-center gap-xs hover:text-primary transition-colors">
                  💬 {post.comments}
                </button>
                <button className="hover:text-primary transition-colors">Share</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

