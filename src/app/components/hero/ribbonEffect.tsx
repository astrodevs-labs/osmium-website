'use client'

import { useEffect, useRef } from 'react'

export default function RibbonEffect() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    let frame = 0
    const animate = () => {
      frame += 0.5
      const paths = svg.querySelectorAll('path')
      paths.forEach((path, index) => {
        const progress = index / (paths.length - 1)
        const offset = Math.sin(frame / 20 + index * 0.5) * 5
        const twist = Math.sin(frame / 30 + index * 0.2) * 20

        // Create an inclined path from bottom-left to top-right
        const startY = 100 - progress * 100 + offset
        const endY = progress * 100 + offset
        const controlY1 = 50 + twist
        const controlY2 = 50 - twist

        path.setAttribute(
          'd',
          `M0,${startY} C66,${controlY1} 133,${controlY2} 200,${endY}`,
        )

        // Calculate color based on index (position in the ribbon)
        const brightness = Math.floor(progress * 255)
        path.setAttribute(
          'stroke',
          `rgb(${brightness},${brightness},${brightness})`,
        )
      })
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        {[...Array(30)].map((_, i) => (
          <path
            key={i}
            d="M0,100 C66,50 133,50 200,0"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  )
}
