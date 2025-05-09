"use client"

import { useEffect, useRef } from "react"

export function MapHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Map styling parameters
    const gridSize = 40
    const lineWidth = 0.5
    const primaryColor = "#10b981" // Emerald-500
    const secondaryColor = "#065f46" // Emerald-800
    const accentColor = "#ffffff"

    // Animation variables
    let frame = 0
    const speed = 0.5

    // Draw animated map background
    const drawMap = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background
      ctx.fillStyle = "#0f172a" // Slate-900
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = primaryColor
      ctx.lineWidth = lineWidth
      ctx.globalAlpha = 0.2

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw animated contour lines
      ctx.globalAlpha = 0.6
      ctx.lineWidth = 1.5

      for (let i = 0; i < 5; i++) {
        const offset = (frame / 100) % 1
        const y = canvas.height * (0.3 + i * 0.1 + Math.sin(frame / 200 + i) * 0.05)

        ctx.beginPath()
        ctx.strokeStyle = i % 2 === 0 ? primaryColor : secondaryColor

        for (let x = 0; x < canvas.width; x += 5) {
          const heightOffset = Math.sin((x / canvas.width) * Math.PI * 4 + frame / 100) * 20
          ctx.lineTo(x, y + heightOffset)
        }

        ctx.stroke()
      }

      // Draw some points of interest
      ctx.globalAlpha = 1
      for (let i = 0; i < 20; i++) {
        const x = Math.sin(i * 0.5 + frame / 200) * canvas.width * 0.4 + canvas.width * 0.5
        const y = Math.cos(i * 0.5 + frame / 200) * canvas.height * 0.3 + canvas.height * 0.5

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = accentColor
        ctx.fill()

        // Connect some points
        if (i > 0) {
          const prevX = Math.sin((i - 1) * 0.5 + frame / 200) * canvas.width * 0.4 + canvas.width * 0.5
          const prevY = Math.cos((i - 1) * 0.5 + frame / 200) * canvas.height * 0.3 + canvas.height * 0.5

          ctx.beginPath()
          ctx.moveTo(prevX, prevY)
          ctx.lineTo(x, y)
          ctx.strokeStyle = accentColor
          ctx.globalAlpha = 0.3
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }

      // Animate
      frame += speed
      requestAnimationFrame(drawMap)
    }

    drawMap()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
