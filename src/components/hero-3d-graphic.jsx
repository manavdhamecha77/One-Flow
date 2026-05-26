import React from 'react'

export function Hero3DGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a9e8f', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#0e5a52', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a8ddd8', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: '#1a9e8f', stopOpacity: 0.9 }} />
        </linearGradient>
        <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0e5a52', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#121a18', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Back face */}
      <polygon
        points="100,150 300,150 280,270 120,270"
        fill="url(#grad3)"
        opacity="0.3"
      />

      {/* Top face */}
      <polygon
        points="100,150 120,100 320,100 300,150"
        fill="url(#grad1)"
      />

      {/* Right face */}
      <polygon
        points="300,150 320,100 320,220 300,270"
        fill="url(#grad2)"
      />

      {/* Left face */}
      <polygon
        points="100,150 120,100 120,220 100,270"
        fill="url(#grad2)"
        opacity="0.7"
      />

      {/* Front face - main */}
      <polygon
        points="100,150 300,150 300,270 100,270"
        fill="url(#grad1)"
      />

      {/* Decorative floating elements */}
      <circle cx="150" cy="80" r="8" fill="#1a9e8f" opacity="0.6" />
      <circle cx="250" cy="85" r="6" fill="#0e5a52" opacity="0.5" />
      <circle cx="320" cy="150" r="7" fill="#a8ddd8" opacity="0.4" />

      {/* Connecting lines showing flow */}
      <line x1="115" y1="200" x2="285" y2="200" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
      <line x1="200" y1="115" x2="200" y2="285" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
    </svg>
  )
}
