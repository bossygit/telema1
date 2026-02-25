"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"

const navLinks = [
  {
    label: "La Fondation",
    href: "#",
    submenu: [
      { label: "Présentation", href: "#mission" },
      { label: "L’équipe", href: "#mission" },
      { label: "Nos espaces", href: "#programmes" },
      { label: "Documentation", href: "#" },
    ],
  },
  { label: "L’Incubateur", href: "#programmes" },
  { label: "Nos Bénéficiaires", href: "#temoignages" },
  { label: "Appel à Projets", href: "#contact" },
  {
    label: "Nous Rejoindre",
    href: "#",
    submenu: [
      { label: "Recrutement", href: "#contact" },
      { label: "Contribuer en tant qu’expert", href: "#contact" },
      { label: "Devenir partenaire", href: "#partenaires" },
      { label: "Faire un don", href: "#contact" },
    ],
  },
  { label: "Actualités", href: "#articles" },
]

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+24206710414"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">(+242) 06 710 14 14</span>
          </a>
          <a
            href="mailto:contact@fondationtelema.cg"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">contact@fondationtelema.cg</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Facebook"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-card"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="h-10 lg:h-12 w-auto">
              <img 
                src="/images/logo.png" 
                alt="Fondation Téléma" 
                className="h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-[11px] lg:text-sm tracking-[0.25em] uppercase leading-none mb-1.5 transition-colors">
                Fondation
              </span>
              <span className="text-black font-black text-2xl lg:text-3xl tracking-tighter uppercase leading-none drop-shadow-sm">
                Telema
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.label}
                className="relative group py-8"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.submenu ? (
                  <button className="flex items-center gap-1 text-black font-bold text-[11px] xl:text-[12px] uppercase tracking-wider transition-colors hover:text-primary whitespace-nowrap">
                    {link.label}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-black font-bold text-[11px] xl:text-[12px] uppercase tracking-wider transition-colors hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {link.submenu && activeDropdown === link.label && (
                  <div className="absolute top-full left-[-20px] w-64 bg-white shadow-2xl rounded-2xl p-4 border border-border/50 animate-fade-in-up origin-top">
                    <div className="flex flex-col gap-1">
                      {link.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="px-4 py-3 text-[12px] font-bold text-black/60 uppercase tracking-widest hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-bold text-[12px] uppercase tracking-widest hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 shadow-sm whitespace-nowrap"
            >
              Postuler
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-border/50 last:border-0 pb-2 mb-2">
                {link.submenu ? (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-black font-bold text-sm uppercase tracking-widest">
                        {link.label}
                      </span>
                    </div>
                    <div className="pl-4 flex flex-col gap-2 mt-1 border-l-2 border-primary/20">
                      {link.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="text-black/60 hover:text-primary font-bold text-xs uppercase tracking-widest py-2 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-black hover:text-primary font-bold text-sm uppercase tracking-widest block py-3 transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-sm text-center uppercase tracking-widest hover:bg-primary/90 transition-colors mt-4"
            >
              Postuler
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
