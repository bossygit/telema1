"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  { name: "Partner 1", logo: "/images/6.png" },
  { name: "Partner 2", logo: "/images/5.jpg" },
  { name: "Partner 3", logo: "/images/3.jpg" },
  { name: "Partner 4", logo: "/images/7.png" },
  { name: "Partner 5", logo: "/images/39.png" },
]

export function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="partenaires"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span
            data-animate
            className="text-primary font-bold text-xs uppercase tracking-[0.4em] block mb-4"
          >
            Ecosystème
          </span>
          <h2
            data-animate
            className="text-4xl font-black text-black uppercase tracking-tight"
          >
            Ils nous font confiance
          </h2>
        </div>

        {/* Partner slider container */}
        <div className="relative mt-12 w-full overflow-hidden">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="animate-scroll flex gap-24 py-8 items-center">
            {/* Double the array for seamless infinite scroll (translateX -50% trick) */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="relative h-32 w-[350px] flex-shrink-0 transition-all duration-500 opacity-100 flex items-center justify-center translate-z-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
