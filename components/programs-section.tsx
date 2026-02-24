"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import {
  ArrowRight,
  FileText,
  Users,
  Award,
  Handshake,
  Cpu,
  ShoppingBag,
  Sprout,
  Beef,
  Hammer,
  TreePine,
  Briefcase,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Appel à projets",
    description:
      "Soumettez votre candidature via notre formulaire en ligne. Les dossiers sont examinés par un comité d'experts.",
    color: "bg-primary",
  },
  {
    number: "02",
    icon: Users,
    title: "Incubation",
    description:
      "Les candidats retenus bénéficient d'une formation intensive en management, leadership et business plan.",
    color: "bg-[#2D8B5E]",
  },
  {
    number: "03",
    icon: Award,
    title: "Financement",
    description:
      "Les projets sélectionnés reçoivent une subvention et un accompagnement financier pour démarrer.",
    color: "bg-accent",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Suivi & Mentorat",
    description:
      "Un accompagnement continu est assuré pour garantir la pérennité et la croissance des projets.",
    color: "bg-primary",
  },
]

const sectors = [
  { name: "TIC", icon: Cpu, delay: "0.1s" },
  { name: "Services", icon: Briefcase, delay: "0.2s" },
  { name: "Agropastoral", icon: Beef, delay: "0.3s" },
  { name: "Agroalimentaire", icon: Sprout, delay: "0.4s" },
  { name: "Commerce", icon: ShoppingBag, delay: "0.5s" },
  { name: "Économie verte", icon: TreePine, delay: "0.6s" },
  { name: "Artisanat", icon: Hammer, delay: "0.7s" },
]

const departments = [
  { id: "likouala", name: "LIKOUALA", active: false, x: "82%", y: "15%" },
  { id: "sangha", name: "SANGHA", active: true, x: "60%", y: "25%" },
  { id: "cuvette-ouest", name: "CUVETTE OUEST", active: false, x: "48%", y: "41%" },
  { id: "cuvette", name: "CUVETTE", active: true, x: "65%", y: "48%" },
  { id: "plateaux", name: "PLATEAUX", active: false, x: "58%", y: "65%" },
  { id: "pool", name: "POOL", active: true, x: "53%", y: "82%" },
  { id: "bouenza", name: "BOUENZA", active: true, x: "32%", y: "88%" },
  { id: "lekoumou", name: "LÉKOUMOU", active: true, x: "34%", y: "77%" },
  { id: "niari", name: "NIARI", active: true, x: "18%", y: "76%" },
  { id: "kouilou", name: "KOUILOU", active: true, x: "12%", y: "90%" },
]

function CongoMap() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[3/4] lg:aspect-square group bg-white/50 backdrop-blur-sm rounded-3xl p-4 border border-border/30">
      <div className="relative w-full h-full">
        {/* Animated Scan Effect Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-40 w-full animate-scan-pulse opacity-50" />
        </div>

        {/* Existing Carte Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/carte.png"
            alt="Carte du Congo"
            className="w-full h-full object-contain filter grayscale brightness-110 contrast-125 opacity-80"
          />
        </div>

        {/* Pulsing Markers */}
        {departments.filter(d => d.active).map((dept) => (
          <div
            key={dept.id}
            className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: dept.x, top: dept.y }}
          >
            <div className="relative h-6 w-6">
              <div className="absolute inset-0 bg-accent rounded-full animate-marker-ping" />
              <div className="relative h-6 w-6 bg-accent rounded-full border-2 border-white shadow-xl shadow-accent/40 flex items-center justify-center">
                <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
              </div>
              
              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {dept.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export function ProgramsSection() {
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
    <section id="programmes" ref={sectionRef} className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        {/* Process Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            data-animate
            className="opacity-0 text-black font-semibold text-sm uppercase tracking-widest"
            style={{ animationDelay: "0.1s" }}
          >
            Notre processus
          </span>
          <h2
            data-animate
            className="opacity-0 mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Comment fonctionne notre programme
          </h2>
          <p
            data-animate
            className="opacity-0 mt-4 text-black/60 text-lg leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            De l'idée au financement, nous accompagnons chaque étape de votre parcours entrepreneurial.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                data-animate
                className="opacity-0 group relative"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="bg-white rounded-3xl p-8 h-full border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <span className="text-6xl font-black text-border/40 absolute top-6 right-8">
                    {step.number}
                  </span>
                  <div className={`h-16 w-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-black/5`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-black text-black text-xl mb-3 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <ArrowRight className="h-5 w-5 text-accent" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* New Sectors & Regional Impact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Sectors */}
          <div className="space-y-12">
            <div data-animate className="opacity-0">
              <span className="text-black font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
                Opportunités
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-black uppercase mb-6">
                Secteurs éligibles
              </h3>
              <p className="text-black/60 text-lg leading-relaxed max-w-xl">
                Nos programmes ciblent des secteurs stratégiques à fort potentiel d'emploi et de croissance pour la jeunesse congolaise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <div
                    key={sector.name}
                    data-animate
                    className="opacity-0 group p-6 rounded-2xl bg-white border border-border/50 hover:border-accent hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: sector.delay }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-muted group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="h-6 w-6 text-black group-hover:text-accent" />
                    </div>
                    <h4 className="font-bold text-black uppercase text-sm tracking-wide">
                      {sector.name}
                    </h4>
                  </div>
                )
              })}
              <div
                data-animate
                className="opacity-0 flex items-center justify-center p-6 rounded-2xl bg-primary/5 border border-dashed border-primary/30"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="text-primary font-bold text-sm uppercase">Et bien plus...</span>
              </div>
            </div>
          </div>

          {/* Right: Map & Regions */}
          <div className="space-y-12">
            <div data-animate className="opacity-0" style={{ animationDelay: "0.4s" }}>
              <span className="text-black font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
                Présence Nationale
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-black uppercase mb-6">
                Toutes les régions
              </h3>
              <p className="text-black/60 text-lg leading-relaxed mb-10">
                Nous sommes présents partout au Congo pour dénicher et soutenir les talents de chaque département.
              </p>
              <CongoMap />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 opacity-0" data-animate style={{ animationDelay: "0.6s" }}>
              {[
                { label: "Projets actifs", value: "35+" },
                { label: "Régions couvertes", value: "12" },
                { label: "Points d'appui", value: "05" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-white rounded-2xl border border-border/50">
                  <p className="text-3xl font-black text-primary mb-1 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
