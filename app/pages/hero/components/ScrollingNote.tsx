import React from 'react'

const ScrollingNote = () => {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-scroll-left inline-block min-w-full">
        <span className="font-bold text-lg px-4">
          Your early access starts now. Join the community today and if you’re among the first 10,000, your membership is 100% free. This is just the beginning, exciting features and exclusive reveals are on the way.
        </span>
      </div>
    </div>
  )
}

export default ScrollingNote
