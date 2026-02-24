"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

const videos = [
  {
    title: "Atelier de Vision Stratégique",
    description: "La plateforme nationale pour l'insertion professionnelle au Congo.",
    thumbnail: "/images/14.webp",
  },
  {
    title: "Focus sur l'Agro-industrie",
    description: "Accompagnement des jeunes dans la transformation locale.",
    thumbnail: "/images/16.jpg",
  },
  {
    title: "Conférence des Partenaires",
    description: "Renforcement des capacités entrepreneuriales avec nos partenaires.",
    thumbnail: "/images/15.webp",
  },
]

export function VideosSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span
            data-animate
            className="opacity-0 text-black font-semibold text-sm uppercase tracking-widest"
            style={{ animationDelay: "0.1s" }}
          >
            A suivre
          </span>
          <h2
            data-animate
            className="opacity-0 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif leading-tight text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Nos videos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.title}
              data-animate
              className="opacity-0 group cursor-pointer"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-5">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/30 group-hover:bg-[#1A1A1A]/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-[#FFFFFF]/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="h-7 w-7 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-foreground text-lg font-serif group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
