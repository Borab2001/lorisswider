import Image from 'next/image'
import Link from 'next/link'

import Spotify from '@/components/icons/spotify-icon'
import Deezer from '@/components/icons/deezer-icon'
import Youtube from '@/components/icons/youtube-icon'
import LockIcon from '@/components/icons/lock-icon'

type DiscographyItem =
    |   {
            image: string
            alt: string
            links: { spotify: string; deezer: string; youtube: string }
        }
    | null

const discography: DiscographyItem[] = [
    {
        image: '/images/about.webp',
        alt: '/',
        links: {
            spotify: 'https://open.spotify.com/track/xxxxx',
            deezer: 'https://www.deezer.com/track/xxxxx',
            youtube: 'https://www.youtube.com/watch?v=xxxxx',
        },
    },
    null,
    null,
    null,
]

export default function Discography() {
    return (
        <section id="musique" className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-16">
                    Discographie
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {discography.map((item, i) =>
                        item ? (
                        <div
                            key={i}
                            tabIndex={0}
                            className="group relative aspect-square overflow-hidden outline-none"
                        >
                            <Image 
                                src={item.image} 
                                alt={item.alt}
                                fill
                                loading="lazy"
                                className="object-cover" 
                            />

                            <div
                            className="absolute inset-0 flex items-center justify-center gap-5 bg-card/30 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300
                                group-hover:opacity-100 group-hover:pointer-events-auto
                                group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                            >
                                <Link href={item.links.spotify} target="_blank" rel="noopener noreferrer" aria-label="Écouter sur Spotify">
                                    <div className="w-10 h-auto">
                                        <Spotify/>
                                    </div>
                                </Link>
                                <Link href={item.links.deezer} target="_blank" rel="noopener noreferrer" aria-label="Écouter sur Deezer">
                                    <div className="w-10 h-auto">
                                        <Deezer />
                                    </div>
                                </Link>
                                <Link href={item.links.youtube} target="_blank" rel="noopener noreferrer" aria-label="Voir sur YouTube">
                                    <div className="w-10 h-auto">
                                        <Youtube />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        ) : (
                        <div
                            key={i}
                            className="relative aspect-square p-4 md:p-6 flex flex-col items-center justify-center gap-3 card-border bg-card"
                        >
                            <div className="w-8 h-8 text-foreground">
                                <LockIcon />
                            </div>
                            <span className="text-xs font-sans font-medium tracking-wider text-muted">
                                Bientôt disponible
                            </span>
                        </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}