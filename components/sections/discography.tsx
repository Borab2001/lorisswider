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

                            <div className="absolute inset-0 flex items-center justify-center gap-5 bg-background/25 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link href={item.links.spotify} target="_blank" rel="noopener noreferrer">
                                    {/* <Image src="/icons/spotify.svg" alt="Spotify" width={24} height={0} style={{ height: 'auto' }} /> */}
                                    <div className="w-10 h-auto">
                                        <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                            <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"/>
                                        </svg>
                                    </div>
                                </Link>
                                <Link href={item.links.deezer} target="_blank" rel="noopener noreferrer">
                                    <div className="w-10 h-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.384185791015625e-7 0.5 115 115">
                                            <g fill="#a238ff">
                                                <path d="m100.804 7.99168c-1.7301.00606-3.2894 3.88512-4.3536 10.05142-1.7235-10.63022-4.5283-17.5431-7.6826-17.5431-3.756 0-7.0079 9.7742-8.5445 23.9668-1.5121-10.3285-3.7966-16.91534-6.3493-16.91534-3.5853 0-6.634 12.95354-7.764 31.01834-2.1219-9.2607-5.195-15.0731-8.6013-15.0731-3.4064 0-6.4795 5.8124-8.6014 15.0731-1.13-18.0648-4.1787-31.01834-7.7639-31.01834-2.5609 0-4.8454 6.58684-6.3494 16.91534-1.5447-14.1926-4.7966-23.9668-8.5526-23.9668-3.1625 0-5.9591 6.91288-7.6827 17.5431-1.0731-6.1629-2.6259-10.05143-4.3575-10.05143-3.2276 0-5.84536 13.45893-5.84536 30.06453s2.61776 30.0645 5.84536 30.0645c1.3251 0 2.5527-2.2744 3.5283-6.114 1.5528 14.0214 4.7803 23.657 8.5119 23.657 2.8942 0 5.4795-5.7879 7.2193-14.9181 1.1951 17.3637 4.1787 29.6814 7.6745 29.6814 2.2032 0 4.2031-4.8831 5.6746-12.8312 1.7723 16.4102 5.8941 27.9042 10.6907 27.9042s8.9103-11.494 10.6907-27.9042c1.4796 7.9481 3.4796 12.8312 5.6746 12.8312 3.4958 0 6.4876-12.3177 7.6746-29.6814 1.7397 9.1302 4.3332 14.9181 7.2192 14.9181 3.7316 0 6.9591-9.6356 8.5119-23.657.9837 3.8314 2.2032 6.114 3.5285 6.114 3.227 0 5.845-13.4589 5.845-30.0645 0-16.5986-2.615-30.05323-5.841-30.06452z"></path>
                                                <path d="m100.804 7.99168-.004-.00001h.008z"></path>
                                                <path d="m3.31727 48.5447c1.83207 0 3.31726-6.018 3.31726-13.4415 0-7.4236-1.48519-13.4416-3.31726-13.4416-1.83208 0-3.31727 6.018-3.31727 13.4416 0 7.4235 1.48519 13.4415 3.31727 13.4415z"></path>
                                                <path d="m115 35.1032c0 7.4235-1.485 13.4415-3.317 13.4415s-3.318-6.018-3.318-13.4415c0-7.4236 1.486-13.4416 3.318-13.4416s3.317 6.018 3.317 13.4416z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                                <Link href={item.links.youtube} target="_blank" rel="noopener noreferrer">
                                    {/* <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={0} style={{ height: 'auto' }} /> */}
                                    <div className="w-10 h-auto">
                                        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 180">
                                            <path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"/>
                                            <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"/>
                                        </svg>
                                    </div>
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