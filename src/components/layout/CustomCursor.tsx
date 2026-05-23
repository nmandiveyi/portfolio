import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.mx = e.clientX
      positionRef.current.my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const animateRing = () => {
      const { mx, my, rx, ry } = positionRef.current
      positionRef.current.rx += (mx - rx) * 0.12
      positionRef.current.ry += (my - ry) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = `${positionRef.current.rx}px`
        ringRef.current.style.top = `${positionRef.current.ry}px`
      }

      requestAnimationFrame(animateRing)
    }

    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px'
        ringRef.current.style.height = '48px'
        ringRef.current.style.borderColor = 'rgba(232,213,163,0.7)'
      }
    }

    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px'
        ringRef.current.style.height = '32px'
        ringRef.current.style.borderColor = 'rgba(232,213,163,0.4)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    const animationId = requestAnimationFrame(animateRing)

    const bindInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .interactive')
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
      return interactiveElements
    }

    const interactiveElements = bindInteractiveElements()
    const observer = new MutationObserver(bindInteractiveElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      observer.disconnect()
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference lg:block"
        style={{ background: 'var(--accent)' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 lg:block"
        style={{ border: '1px solid rgba(232,213,163,0.4)' }}
      />
    </>
  )
}
