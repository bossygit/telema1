"use client"

import { useEffect, useRef, useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div
          data-animate
          className="opacity-0 relative bg-destructive rounded-3xl p-10 lg:p-16 overflow-hidden"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif leading-tight text-balance">
                Restez informe de nos activites
              </h2>
              <p className="mt-4 text-primary-foreground/70 text-lg leading-relaxed text-pretty">
                Evenements, actualites, appels a projets - ne manquez plus rien
                en rejoignant notre newsletter.
              </p>
            </div>

            <div className="lg:w-[420px]">
              {submitted ? (
                <div className="bg-[#FFFFFF]/10 rounded-2xl p-6 flex items-center gap-4 border border-[#FFFFFF]/20">
                  <CheckCircle2 className="h-8 w-8 text-[#FDB813] shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold">
                      Inscription reussie !
                    </p>
                    <p className="text-primary-foreground/70 text-sm">
                      Vous recevrez bientot nos actualites.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 rounded-xl px-5 py-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#FDB813]/50 focus:border-[#FDB813]/50 text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#FDB813] text-[#1A1A1A] px-6 py-4 rounded-xl font-bold text-sm hover:bg-[#FDB813]/90 transition-colors flex items-center gap-2 shrink-0 shadow-lg shadow-[#FDB813]/20"
                    >
                      <Send className="h-4 w-4" />
                      <span className="hidden sm:inline">{"S'inscrire"}</span>
                    </button>
                  </div>
                  <p className="text-primary-foreground/50 text-xs">
                    En vous inscrivant, vous acceptez de recevoir nos
                    communications. Desabonnement possible a tout moment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
