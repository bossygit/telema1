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
  TrendingUp,
  Target,
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
  {
    name: "TIC",
    icon: Cpu,
    delay: "0.1s",
    description: "Développement logiciel, services numériques et innovation technologique.",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-600",
  },
  {
    name: "Services",
    icon: Briefcase,
    delay: "0.2s",
    description: "Conseil, logistique, transport et services aux entreprises.",
    color: "from-indigo-500/10 to-indigo-500/5",
    iconColor: "text-indigo-600",
  },
  {
    name: "Agropastoral",
    icon: Beef,
    delay: "0.3s",
    description: "Élevage et agriculture vivrière pour la sécurité alimentaire.",
    color: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-600",
  },
  {
    name: "Agroalimentaire",
    icon: Sprout,
    delay: "0.4s",
    description: "Transformation locale des produits agricoles et distribution.",
    color: "from-green-500/10 to-green-500/5",
    iconColor: "text-green-600",
  },
  {
    name: "Commerce",
    icon: ShoppingBag,
    delay: "0.5s",
    description: "Commerce de détail, gros et plateformes de vente en ligne.",
    color: "from-yellow-500/10 to-yellow-500/5",
    iconColor: "text-yellow-600",
  },
  {
    name: "Économie verte",
    icon: TreePine,
    delay: "0.6s",
    description: "Énergies renouvelables, gestion des déchets et protection.",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-600",
  },
  {
    name: "Artisanat",
    icon: Hammer,
    delay: "0.7s",
    description: "Production manufacturière locale et métiers d'art.",
    color: "from-red-500/10 to-red-500/5",
    iconColor: "text-red-600",
  },
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
    <section id="programmes" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/14.webp"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4">
        {/* Process Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            data-animate
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Notre processus
          </span>
          <h2
            data-animate
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Comment fonctionne notre programme
          </h2>
          <p
            data-animate
            className="mt-6 text-white/70 text-lg leading-relaxed"
          >
            De l'idée au financement, nous accompagnons chaque étape de votre parcours entrepreneurial.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                data-animate
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 h-full border border-white/10 hover:border-accent/30 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-7xl font-black text-white/[0.03] absolute top-8 right-10 group-hover:text-accent/5 transition-colors">
                    {step.number}
                  </span>
                  <div className={`h-16 w-16 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-2xl shadow-black/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-black text-white text-xl mb-4 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-5 z-10 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-accent/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
