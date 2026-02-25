"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, User } from "lucide-react"

const articles = [
  {
    category: "Entrepreneuriat",
    title: "Le guide complet pour lancer son projet au Congo en 2026",
    excerpt: "Découvrez les étapes essentielles et les ressources disponibles pour les jeunes entrepreneurs congolais.",
    date: "24 Fév 2026",
    author: "Equipe Téléma",
    image: "/images/12.webp",
    delay: "0.1s"
  },
  {
    category: "Formation",
    title: "Comment l'agro-industrie transforme l'économie locale",
    excerpt: "Retour sur l'impact des nouveaux programmes de formation en transformation alimentaire.",
    date: "20 Fév 2026",
    author: "Jean Mukendi",
    image: "/images/16.jpg",
    delay: "0.2s"
  },
  {
    category: "Impact",
    title: "Success Story : De l'idée à une entreprise florissante",
    excerpt: "Témoignage de l'un de nos bénéficiaires qui a réussi à lever des fonds pour sa startup TIC.",
    date: "15 Fév 2026",
    author: "Marie Samba",
    image: "/images/18.jpg",
    delay: "0.3s"
  }
]

export function ArticlesSection() {
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
    <section id="articles" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-primary/3 rounded-full blur-[120px] animate-float" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div data-animate className="max-w-2xl">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Actualités</span>
            <h2 className="text-4xl lg:text-5xl font-black text-black uppercase leading-tight">
              Nos derniers <br /> articles & conseils
            </h2>
          </div>
          <button data-animate style={{ animationDelay: "0.2s" }} className="group flex items-center gap-3 text-black font-black uppercase text-sm tracking-widest hover:text-primary transition-colors">
            Voir tout le blog
            <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
              <ArrowRight className="h-5 w-5" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <article
              key={article.title}
              data-animate
              style={{ animationDelay: article.delay }}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] w-full rounded-[2rem] overflow-hidden mb-6 shadow-xl border border-white/50">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-black font-bold text-[10px] uppercase tracking-widest shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center gap-4 text-black/40 text-[11px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {article.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-black uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-black/60 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  Lire la suite
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
