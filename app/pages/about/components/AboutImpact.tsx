'use client'

import { useEffect, useState } from 'react'

export default function AboutImpact() {
  const metrics = [
    { label: 'Events Hosted', value: 50, suffix: '+' },
    { label: 'Students Placed', value: 200, suffix: '+' },
    { label: 'Members', value: 1000, suffix: '+' },
  ]

  const [counts, setCounts] = useState([0, 0, 0])

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    const timers = metrics.map((metric, index) => {
      const increment = metric.value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= metric.value) {
          current = metric.value
          clearInterval(timer)
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, interval)

      return timer
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [])

  return (
    <section className="mb-3xl py-3xl bg-gray-50 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mb-xl text-center text-accent">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-lg px-md sm:px-lg md:px-lg lg:px-md">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-lg sm:p-lg md:p-lg lg:p-2xl rounded-lg bg-background border-2 border-slate-300"
            >
              <div className="text-3xl md:text-4xl font-bold mb-sm text-accent">
                {counts[index]}
                {metric.suffix}
              </div>
              <div className="text-xl font-semibold text-text-secondary">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


