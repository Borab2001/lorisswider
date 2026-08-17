import Image from 'next/image'
import Link from 'next/link'

const discography = [
    {
        image: '/images/about.webp',
        links: {
            spotify: 'https://open.spotify.com/...',
            deezer: 'https://www.deezer.com/...',
            youtube: 'https://www.youtube.com/...',
        },
    },
    {
        image: '/images/about.webp',
        links: {
            spotify: 'https://open.spotify.com/...',
            deezer: 'https://www.deezer.com/...',
            youtube: 'https://www.youtube.com/...',
        },
    },
    {
        image: '/images/discography-3.webp',
        links: {
            spotify: 'https://open.spotify.com/...',
            deezer: 'https://www.deezer.com/...',
            youtube: 'https://www.youtube.com/...',
        },
    },
    {
        image: '/images/discography-4.webp',
        links: {
            spotify: 'https://open.spotify.com/...',
            deezer: 'https://www.deezer.com/...',
            youtube: 'https://www.youtube.com/...',
        },
    },
]

export default function Discography() {
    return (
        <section id="musique" className="px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-16">
                    Discographie
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {discography.map((item, i) => (
                        <div key={i} className="group relative aspect-square overflow-hidden">
                            <Image
                                src={item.image}
                                alt=""
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center gap-5 bg-background/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link href={item.links.spotify} target="_blank" rel="noopener noreferrer">
                                    <Image src="/icons/spotify.svg" alt="Spotify" width={24} height={0} style={{ height: 'auto' }} />
                                </Link>
                                <Link href={item.links.deezer} target="_blank" rel="noopener noreferrer">
                                    <Image src="/icons/deezer.svg" alt="Deezer" width={24} height={0} style={{ height: 'auto' }} />
                                </Link>
                                <Link href={item.links.youtube} target="_blank" rel="noopener noreferrer">
                                    <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={0} style={{ height: 'auto' }} />
                                </Link>
                            </div>
                        </div>
                    ))}
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