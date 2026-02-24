"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Briefcase, Rocket, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 2990,
    suffix: "",
    label: "Candidatures reçues",
    description: "Jeunes entrepreneurs motivés",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Rocket,
    value: 105,
    suffix: "",
    label: "Entrepreneurs incubés",
    description: "Formés et accompagnés",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Briefcase,
    value: 35,
    suffix: "",
    label: "Projets financés",
    description: "Initiatives soutenues",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    value: 175,
    suffix: "",
    label: "Emplois créés",
    description: "Impact économique réel",
    color: "bg-destructive/10 text-destructive",
  },
]

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number
  suffix: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 2500
            const steps = 60
            const increment = target / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                setCount(target)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative -mt-24 z-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50 p-10 lg:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center gap-5 transition-all duration-500 hover:scale-105`}
                >
                  <div className={`h-16 w-16 rounded-2xl ${stat.color} flex items-center justify-center mb-2 shadow-inner`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter block">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </span>
                    <p className="font-bold text-foreground/80 text-base uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-muted-foreground text-sm font-medium">
                      {stat.description}
                    </p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
