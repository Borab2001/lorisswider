import Image from 'next/image'

export default function Spotlight() {
    return (
        <section className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div 
                    tabIndex={0}
                    className="group relative w-full aspect-4/3 lg:aspect-video mb-8 overflow-hidden outline-none"
                >
                    <Image
                        src="/images/spotlight.webp"
                        alt="Projet Désert"
                        fill
                        sizes="100vw"
                        quality={100}
                        loading="lazy"
                        className="object-cover"
                    />
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300
                            group-hover:opacity-100 group-hover:pointer-events-auto
                            group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                    >
                        <span className="text-base font-sans text-foreground font-normal tracking-wide">
                            XX / 202X
                        </span>
                        <span className="font-serif italic text-lg md:text-xl text-foreground text-center px-4">
                            Projet Désert Maestro
                        </span>
                        {/* Lien Vlog */}
                    </div>
                </div>

                <p className="max-w-2xl mx-auto text-left md:text-center text-pretty text-foreground leading-relaxed">
                    À travers ses performances et la création de contenus visuels
                    soignés, Loris Swider développe une image artistique cohérente et
                    élégante, renforcée par une forte présence sur les réseaux sociaux.
                </p>
            </div>
        </section>
    )
}