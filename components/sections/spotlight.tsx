import Image from 'next/image'

export default function Spotlight() {
    return (
        <section className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full aspect-4/3 lg:aspect-video mb-8">
                    <Image
                        src="/images/spotlight.webp"
                        alt="Projet Désert"
                        fill
                        sizes="100vw"
                        quality={100}
                        loading="lazy"
                        className="object-cover"
                    />
                </div>

                <p className="max-w-2xl mx-auto text-center text-foreground leading-relaxed">
                    À travers ses performances et la création de contenus visuels
                    soignés, Loris Swider développe une image artistique cohérente et
                    élégante, renforcée par une forte présence sur les réseaux sociaux.
                </p>
            </div>
        </section>
    )
}