import Button from '@/components/ui/button';
import Image from 'next/image';

const prestations = [
    {
        numeral: 'I',
        icon: '/illustrations/path1.svg',
        title: "Piano d'ambiance haut de gamme",
        description: "Atmosphère élégante, chaleureuse et immersive avec une présence musicale discrète et soignée.",
    },
    {
        numeral: 'II',
        icon: '/illustrations/path2.svg',
        title: "Performances événementielles",
        description: "Prestations marquantes pour les temps forts : accueil, ouverture, transition, final. Créations sur mesure et medleys originaux.",
    },
    {
        numeral: 'III',
        icon: '/illustrations/path3.svg',
        title: "Mariages & Événements privés",
        description: "Répertoire sur mesure, du plus intimiste au plus festif. Chaque prestation pensée pour s'intégrer à l'émotion du moment.",
    },
]

export default function Services() {
    return (
        <section id="prestations" className="px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-16">
                    Prestations
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prestations.map((item) => (
                        <div key={item.numeral} className="card-border relative">
                            <span className="absolute top-6 left-6 text-accent text-lg md:text-2xl leading-none italic font-serif">
                                {item.numeral}
                            </span>

                            <div className="relative w-full h-auto aspect-4/3 flex items-center object-center">
                                <Image src={item.icon} alt="" fill />
                            </div>

                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="font-serif italic text-2xl text-foreground">
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