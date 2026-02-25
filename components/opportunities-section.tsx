"use client"

import { useEffect, useRef } from "react"
import { Cpu, Briefcase, Beef, Sprout, ShoppingBag, TreePine, Hammer, ArrowRight } from "lucide-react"
import Image from "next/image"

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

export function OpportunitiesSection() {
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
    <section id="opportunites" ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 animate-float-slow" />
      
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Image Side */}
          <div className="lg:w-5/12 w-full space-y-8" data-animate>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700 -z-10" />
              <div className="relative h-[500px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden border border-white/50 shadow-2xl">
                <Image
                  src="/images/18.jpg"
                  alt="Opportunités"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-secondary font-black text-sm uppercase tracking-[0.3em] mb-4 block">Opportunités</span>
                  <h2 className="text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                    Secteurs <br /> éligibles
                  </h2>
                </div>
              </div>
            </div>
            
            <p className="text-black/60 text-lg leading-relaxed max-w-lg">
              Nos programmes ciblent des secteurs stratégiques à fort potentiel d'emploi et de croissance pour la jeunesse congolaise. Découvrez les domaines dans lesquels nous pouvons vous accompagner.
            </p>
          </div>

          {/* Right: Content Side (Compact 2x2 Grid) */}
          <div className="lg:w-7/12 w-full grid sm:grid-cols-2 gap-4">
            {sectors.map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.name}
                  data-animate
                  className="group relative p-6 rounded-[2rem] bg-white/40 hover:bg-white border border-white/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{ animationDelay: sector.delay }}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-12 -mt-12 blur-2xl`} />
                  
                  <div className="relative z-10">
                    <div className={`h-12 w-12 rounded-xl bg-white shadow-sm group-hover:shadow-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`h-6 w-6 ${sector.iconColor}`} />
                    </div>
                    
                    <h4 className="font-black text-black uppercase text-xs tracking-widest mb-2 group-hover:text-primary transition-colors">
                      {sector.name}
                    </h4>
                    <p className="text-black/50 text-[11px] leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {sector.description}
                    </p>
                  </div>
                </div>
              )
            })}
            
            <div
              data-animate
              className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-primary/5 border border-dashed border-primary/20 hover:bg-primary/10 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-primary font-bold">+</span>
              </div>
              <span className="text-black/60 font-bold text-[10px] uppercase tracking-widest text-center">Voir plus de domaines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
