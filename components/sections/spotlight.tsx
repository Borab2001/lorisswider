import Image from 'next/image'

export default function Spotlight() {
    return (
        <section className="px-8 md:px-16 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full aspect-video mb-8">
                    <Image
                        src="/images/hero.webp"
                        alt="Projet Désert"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <p className="max-w-2xl mx-auto text-center text-foreground/80 leading-relaxed">
                    À travers ses performances et la création de contenus visuels
                    soignés, Loris Swider développe une image artistique cohérente et
                    élégante, renforcée par une forte présence sur les réseaux sociaux.
                </p>
            </div>
        </section>
    )
}