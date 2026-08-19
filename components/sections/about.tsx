import Image from 'next/image'

export default function About() {
    return (
        <section id="a_propos" className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative w-full max-w-xl lg:max-w-lg mx-auto lg:mx-0">
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-full h-full border border-accent" />
                    <div className="relative w-full aspect-3/4">
                        <Image
                            src="/images/about.webp"
                            alt="Loris Swider"
                            fill
                            sizes="(min-width: 1024px) 512px, (min-width: 768px) 576px, 100vw"
                            quality={100}
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mx-auto">
                    <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-6">
                        Un univers élégant & moderne
                    </h2>
                    <p className="text-sm sm:text-base max-w-2xl lg:max-w-none text-muted leading-relaxed">
                        Loris Swider est pianiste prestataire et créateur de contenu, formé
                        au conservatoire dès l&apos;enfance. Il développe un univers mêlant
                        piano classique, jazz, pop et improvisation, avec pour signature
                        des medleys originaux fusionnant les styles. Membre du collectif
                        MAESTRO, il renouvelle les codes du concert de piano à travers des
                        performances réunissant plusieurs pianistes sur scène.
                    </p>
                </div>
            </div>
        </section>
    )
}