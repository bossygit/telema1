import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  fondation: [
    { label: "Présentation", href: "#mission" },
    { label: "L’équipe", href: "#mission" },
    { label: "Nos espaces", href: "#programmes" },
    { label: "Documentation", href: "#" },
  ],
  rejoindre: [
    { label: "Recrutement", href: "#contact" },
    { label: "Contribuer en tant qu’expert", href: "#contact" },
    { label: "Devenir partenaire", href: "#partenaires" },
    { label: "Faire un don", href: "#contact" },
  ],
  opportunites: [
    { label: "L’Incubateur", href: "#programmes" },
    { label: "Nos Bénéficiaires", href: "#temoignages" },
    { label: "Appel à Projets", href: "#contact" },
    { label: "Actualités", href: "#articles" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Fondation TELEMA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight uppercase">
                  Fondation
                </span>
                <span className="text-accent font-bold text-lg leading-tight tracking-tight uppercase">
                  Telema
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Faciliter {"l'acces"} des jeunes congolais aux services techniques
              et financiers pour favoriser {"l'entrepreneuriat"} en Republique du
              Congo.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {["Facebook", "LinkedIn", "Instagram", "YouTube"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-black transition-all duration-300"
                    aria-label={platform}
                  >
                    <span className="text-xs font-bold">
                      {platform.charAt(0)}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Foundation links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              La Fondation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.fondation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunités links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Nos Actions
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.opportunites.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Nous rejoindre
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.rejoindre.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+24206710414"
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-medium">
                    +242 06 710 14 14
                    <br />
                    +242 04 411 57 36
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@fondationtelema.cg"
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-medium">contact@fondationtelema.cg</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="font-medium">
                  Boulevard Denis Sassou N'Guesso,
                  <br />
                  Immeuble CAP INFO, Brazzaville
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            {"\u00A9"} {new Date().getFullYear()} Fondation TELEMA. Tous droits
            reserves.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white/60 text-sm transition-colors"
            >
              Mentions legales
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/60 text-sm transition-colors"
            >
              Politique de confidentialite
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
