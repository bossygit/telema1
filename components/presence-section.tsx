"use client"

import { useEffect, useRef } from "react"
import { TrendingUp, Target, Users } from "lucide-react"

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
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-40 w-full animate-scan-pulse opacity-50" />
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/carte.png"
            alt="Carte du Congo"
            className="w-full h-full object-contain"
          />
        </div>
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

export function PresenceSection() {
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
    <section id="presence" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div data-animate>
              <span className="text-black font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
                Présence Nationale
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-black uppercase leading-tight">
                Impact sur tout <br /> le territoire
              </h2>
            </div>
            <p data-animate className="text-black/60 text-lg leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Nous sommes présents partout au Congo pour dénicher et soutenir les talents de chaque département. Notre objectif est de garantir une couverture nationale pour une émergence économique inclusive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-animate style={{ animationDelay: "0.4s" }}>
              {[
                { 
                  label: "Projets actifs", 
                  value: "35+", 
                  icon: TrendingUp,
                  description: "Entreprises en croissance" 
                },
                { 
                  label: "Régions couvertes", 
                  value: "12", 
                  icon: Target,
                  description: "Présence nationale totale" 
                },
                { 
                  label: "Points d'appui", 
                  value: "05", 
                  icon: Users,
                  description: "Centres de proximité" 
                },
              ].map((stat) => (
                <div key={stat.label} className="group p-6 bg-white rounded-3xl border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <p className="text-4xl font-black text-primary mb-1 tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</p>
                  <p className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-[8px] font-medium text-black/30 uppercase">{stat.description}</p>
                </div>
              ))}
            </div>

            <div data-animate className="space-y-4" style={{ animationDelay: "0.6s" }}>
              <h4 className="text-xs font-black text-black/40 uppercase tracking-[0.2em]">Départements actifs</h4>
              <div className="flex flex-wrap gap-2">
                {departments.filter(d => d.active).map((dept, i) => (
                  <div 
                    key={dept.id} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/60 hover:bg-white hover:scale-105 transition-all duration-300 group/item"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[10px] font-bold text-black/70 uppercase tracking-wider">{dept.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full" data-animate style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/50 backdrop-blur-xl rounded-[3rem] p-4 lg:p-12 border border-white shadow-2xl relative overflow-hidden">
               <CongoMap />
               <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                 <p className="text-[10px] font-black text-black/40 uppercase tracking-widest">République du Congo</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
