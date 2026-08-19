import Button from '@/components/ui/button';
import Image from 'next/image';

const prestations = [
    {
        numeral: 'I',
        icon: '/illustrations/path1.svg',
        alt: 'Illustration de piano d\'ambiance',
        title: "Piano d'ambiance haut de gamme",
        description: "Atmosphère élégante, chaleureuse et immersive avec une présence musicale discrète et soignée.",
    },
    {
        numeral: 'II',
        icon: '/illustrations/path2.svg',
        alt: 'Illustration de pianos sous spotlights',
        title: "Performances événementielles",
        description: "Prestations marquantes pour les temps forts : accueil, ouverture, transition, final. Créations sur mesure et medleys originaux.",
    },
    {
        numeral: 'III',
        icon: '/illustrations/path3.svg',
        alt: 'Illustration de piano fleuri',
        title: "Mariages & Événements privés",
        description: "Répertoire sur mesure, du plus intimiste au plus festif. Chaque prestation pensée pour s'intégrer à l'émotion du moment.",
    },
]

export default function Services() {
    return (
        <section id="prestations" className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-16">
                    Prestations
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {prestations.map((item, index) => (
                        <div 
                            key={item.numeral} 
                            className={`card-border relative ${
                                index === 2
                                    ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)] lg:w-full lg:col-span-1 lg:mx-0 lg:max-w-none'
                                    : ''
                            }`}
                        >
                            <span className="absolute top-6 left-6 text-accent text-lg md:text-2xl leading-none italic font-serif">
                                {item.numeral}
                            </span>

                            <div className="relative w-full h-auto aspect-4/3 flex items-center object-center">
                                <Image 
                                    src={item.icon}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={100}
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-4 md:p-6 flex flex-col gap-3">
                                <h3 className="font-serif italic text-lg sm:text-xl lg:text-2xl text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button href="#contact">Contact</Button>
                </div>
            </div>
        </section>
    );  
}