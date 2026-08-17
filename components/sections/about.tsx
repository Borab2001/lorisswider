import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative w-full max-w-xl lg:max-w-lg mx-auto lg:mx-0">
                    <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent" />
                    <div className="relative w-full aspect-3/4">
                        <Image
                            src="/images/about.webp"
                            alt="Loris Swider"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-6">
                        Un univers élégant & moderne
                    </h2>
                    <p className="text-muted leading-relaxed">
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