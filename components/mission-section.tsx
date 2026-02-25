"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Target, Lightbulb, HandHeart, GraduationCap } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Identifier",
    description:
      "Reperer les jeunes porteurs de projets innovants et createurs d'emplois dans tout le Congo.",
  },
  {
    icon: GraduationCap,
    title: "Former",
    description:
      "Offrir une incubation gratuite avec formations en management, leadership et business plan.",
  },
  {
    icon: HandHeart,
    title: "Financer",
    description:
      "Garantir le financement de projets bancables pour faciliter l'acces au marche.",
  },
  {
    icon: Target,
    title: "Accompagner",
    description:
      "Fournir un suivi technique et un mentorat continu pour assurer la perennite des projets.",
  },
]

export function MissionSection() {
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
      id="mission"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span
              data-animate
              className="opacity-0 text-black font-semibold text-sm uppercase tracking-widest"
              style={{ animationDelay: "0.1s" }}
            >
              Notre Mission
            </span>
            <h2
              data-animate
              className="opacity-0 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif leading-tight text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Miser sur la jeunesse congolaise
            </h2>
            <p
              data-animate
              className="opacity-0 mt-4 text-muted-foreground text-lg leading-relaxed text-pretty"
              style={{ animationDelay: "0.3s" }}
            >
              Le programme {"d'appui"} pour {"l'entrepreneuriat"} des jeunes de
              la Fondation TELEMA a pour finalite de faciliter {"l'acces"} des
              jeunes congolais aux services techniques et financiers ainsi que de
              garantir le financement de leurs projets bancables.
            </p>
          </div>
          <a
            data-animate
            href="#programmes"
            className="opacity-0 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm shrink-0"
            style={{ animationDelay: "0.4s" }}
          >
            En savoir plus
            <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            data-animate
            className="opacity-0 relative"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl">
              <Image
                src="/images/1.webp"
                alt="Accompagnement des entrepreneurs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 border border-border/40 max-w-[260px] animate-bounce-subtle">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/30">
                  <span className="text-foreground font-black text-2xl">
                    5
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-foreground text-sm uppercase tracking-tight">
                    Éditions <br /> Terminées
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    d'appels à projets
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent/20 -z-10" />
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  data-animate
                  className="opacity-0 group p-6 rounded-3xl glass-card hover:bg-white transition-all duration-500 border border-white/50 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-1"
                  style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:rotate-12 flex items-center justify-center mb-6 transition-all duration-500">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
