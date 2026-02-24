"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Grace a la subvention de la Fondation TELEMA, j'ai pu acquerir le materiel pour commencer mon business.",
    name: "Franck Ackoy Nsinsba",
    role: "Beneficiaire et Promoteur du projet Oeuf pour tous",
    initials: "FA",
  },
  {
    quote:
      "Nous avons postule car nous avons vu une occasion de beneficier d'une aide non pas seulement financiere mais egalement, un accompagnement en termes de formation et d'informations. Nous sommes heureux d'avoir recu la visite de la Fondation TELEMA.",
    name: "Reddy PAKA",
    role: "Promoteur du projet Nerogiilios",
    initials: "RP",
  },
  {
    quote:
      "Je remercie le President et la Vice-Presidente ainsi que tous les membres de la Fondation pour la formation recue et les fonds decaisses, pour nous, les entrepreneurs.",
    name: "Monick BAHOUNA",
    role: "Beneficiaire et promoteur du projet Bahou Agro Production",
    initials: "MB",
  },
  {
    quote:
      "Fondation Telema, une belle initiative a soutenir par ceux qui croient aux futures generations. Merci pour tout et avec mes encouragements.",
    name: "Dr Pierre M'pele",
    role: "Ancien Representant de l'OMS au Benin",
    initials: "PM",
  },
  {
    quote:
      "Un grand merci et surtout bravo pour cette magnifique entreprise. Ce systeme d'incubation est essentiel pour favoriser l'entree des jeunes sur le marche du travail, et constitue un capital infiniment precieux.",
    name: "Nathalie DELAPALME",
    role: "Directrice Executive de la Fondation Mo Ibrahim",
    initials: "ND",
  },
  {
    quote:
      "La BCH est fiere de participer a cette belle initiative qui permet aux jeunes entrepreneurs Congolais de pouvoir exprimer leurs talents a travers l'entrepreneuriat.",
    name: "Oscar NGOLE",
    role: "Directeur General de la BCH",
    initials: "ON",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3)
      else if (window.innerWidth >= 640) setVisibleCount(2)
      else setVisibleCount(1)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const next = () => setCurrent((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0))

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
      id="temoignages"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span
              data-animate
              className="opacity-0 text-accent font-semibold text-sm uppercase tracking-widest"
              style={{ animationDelay: "0.1s" }}
            >
              Temoignages
            </span>
            <h2
              data-animate
              className="opacity-0 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif leading-tight text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Ils nous font confiance
            </h2>
          </div>
          <div
            data-animate
            className="opacity-0 flex items-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={prev}
              disabled={current === 0}
              className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Temoignage precedent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Temoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{ width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)` }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <Quote className="h-8 w-8 text-accent/40 mb-6" />
                  <blockquote className="text-foreground leading-relaxed flex-1 text-base">
                    {`"${testimonial.quote}"`}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/50">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Aller au temoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
