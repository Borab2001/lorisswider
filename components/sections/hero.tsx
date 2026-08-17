import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Image
                src="/images/hero.webp"
                alt="Loris Swider au piano"
                fill
                priority
                className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />

            <div className="absolute bottom-16 left-8 md:left-16 z-10">
                <h1 className="font-serif uppercase italic text-5xl md:text-7xl text-foreground">
                    Loris Swider
                </h1>
                <p className="mt-3 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted">
                    Pianiste · Compositeur · Prestataire
                </p>
            </div>
        </section>
    )
}