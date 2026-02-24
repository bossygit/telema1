"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  { name: "Bioforce", initials: "BF" },
  { name: "BCH", initials: "BCH" },
  { name: "JCECB", initials: "JC" },
  { name: "ESSOR", initials: "ES" },
  { name: "ACPCE", initials: "AC" },
  { name: "FIGA", initials: "FI", logo: "/images/5.jpg" },
  { name: "CAPPED", initials: "CP", logo: "/images/3.jpg" },
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
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span
            data-animate
            className="opacity-0 text-accent font-semibold text-sm uppercase tracking-widest"
            style={{ animationDelay: "0.1s" }}
          >
            Ecosysteme
          </span>
          <h2
            data-animate
            className="opacity-0 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif leading-tight text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Nos partenaires
          </h2>
          <p
            data-animate
            className="opacity-0 mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty"
            style={{ animationDelay: "0.3s" }}
          >
            Ensemble, nous construisons un ecosysteme favorable a
            {"l'entrepreneuriat"} des jeunes au Congo.
          </p>
        </div>

        {/* Partner logos */}
        <div
          data-animate
          className="opacity-0 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6"
          style={{ animationDelay: "0.4s" }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-20 w-full flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 rounded-xl transition-colors overflow-hidden">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <span className="text-primary font-bold text-xl font-serif">
                    {partner.initials}
                  </span>
                )}
              </div>
              <span className="text-foreground font-semibold text-xs text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
