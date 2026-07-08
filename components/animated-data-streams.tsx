'use client'

import { useEffect, useRef } from 'react'

export function AnimatedDataStreams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Particle class for data streams
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      targetAlpha: number
      label: string
      connected: Particle[]
    }

    const particles: Particle[] = []
    const labels = [
      '[Brokerage Feed]',
      '[Bank Stream]',
      '[Savings Ledger]',
      '[Market Data]',
      '[AI Engine]',
      '[Portfolio Compiler]',
    ]

    // Create particles
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
        targetAlpha: Math.random() * 0.3 + 0.1,
        label: labels[i],
        connected: [],
      })
    }

    let animationFrameId: number

    const animate = () => {
      // Clear canvas with semi-transparent background for trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particles.forEach((particle, index) => {
        // Movement with slight acceleration toward center
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const dx = centerX - particle.x
        const dy = centerY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 200) {
          particle.vx += dx * 0.0001
          particle.vy += dy * 0.0001
        }

        // Add slight randomness
        particle.vx += (Math.random() - 0.5) * 0.02
        particle.vy += (Math.random() - 0.5) * 0.02

        // Damping
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0) {
          particle.x = 0
          particle.vx *= -1
        }
        if (particle.x > canvas.width) {
          particle.x = canvas.width
          particle.vx *= -1
        }
        if (particle.y < 0) {
          particle.y = 0
          particle.vy *= -1
        }
        if (particle.y > canvas.height) {
          particle.y = canvas.height
          particle.vy *= -1
        }

        // Pulse alpha
        particle.targetAlpha = Math.sin(Date.now() * 0.002 + index) * 0.2 + 0.15
        particle.alpha += (particle.targetAlpha - particle.alpha) * 0.1
      })

      // Draw connections between nearby particles
      const connectionDistance = 150
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.2 * particles[i].alpha
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(34, 197, 94, ${particle.alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-50"
    />
  )
}
