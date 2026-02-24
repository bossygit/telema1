"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    badge: "5e Appel à Projets - Ouvert",
    title: (
      <>
        Investir dans la <br />
        <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">
          jeunesse
        </span>{" "}
        congolaise
      </>
    ),
    subtitle:
      "La Fondation TELEMA accompagne les jeunes entrepreneurs à travers l'incubation, le financement et le mentorat pour bâtir le Congo de demain.",
    image: "/images/2.jpg",
    cta1: "Découvrir nos programmes",
    cta2: "Success Stories",
  },
  {
    badge: "Accompagnement Stratégique",
    title: (
      <>
        Bâtir des <br />
        <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">
          entreprises
        </span>{" "}
        durables
      </>
    ),
    subtitle:
      "Nous offrons une plateforme nationale pour l'insertion professionnelle et le renforcement des capacités entrepreneuriales.",
    image: "/images/14.webp",
    cta1: "Nos réalisations",
    cta2: "Voir les ateliers",
  },
  {
    badge: "Synergie & Partenariat",
    title: (
      <>
        Ensemble pour <br />
        <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">
          l'émergence
        </span>{" "}
        du Congo
      </>
    ),
    subtitle:
      "Nous collaborons avec un écosystème de partenaires pour multiplier l'impact de nos actions sur tout le territoire.",
    image: "/images/15.webp",
    cta1: "Devenir partenaire",
    cta2: "Nos partenaires",
  },
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="accueil" className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center mx-auto max-w-7xl px-4 py-24">
                <div className="max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up [animation-delay:200ms]">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-6 text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium animate-fade-in-up [animation-delay:400ms]">
                    {slide.subtitle}
                  </p>

                  {/* CTA */}
                  <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in-up [animation-delay:600ms]">
                    <a
                      href="#programmes"
                      className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                    >
                      {slide.cta1}
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#temoignages"
                      className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border-2 border-white/30 backdrop-blur-sm"
                    >
                      <span className="h-10 w-10 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                        <Play className="h-4 w-4 fill-foreground text-foreground" />
                      </span>
                      {slide.cta2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 mx-auto max-w-7xl px-4 flex items-center justify-between pointer-events-none">
        {/* Dots */}
        <div className="flex gap-3 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "w-10 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={scrollPrev}
            className="h-12 w-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="h-12 w-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
