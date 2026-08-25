'use client'

import { useState } from 'react'
import Image from 'next/image'
import PlayIcon from '@/components/icons/play-icon'

type VideoPlayerProps = {
    youtubeId: string
    title: string
}

export default function VideoPlayer({ youtubeId, title }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)

    if (isPlaying) {
        return (
            <div className="relative w-full aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        )
    }

    return (
        <button
            onClick={() => setIsPlaying(true)}
            aria-label={`Lire la vidéo : ${title}`}
            className="group relative w-full aspect-video overflow-hidden outline-none"
        >
            <Image
                // src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/40 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center text-background group-hover:scale-105 transition-transform">
                    <div className="w-6 h-6 md:w-7 md:h-7 translate-x-0.5">
                        <PlayIcon />
                    </div>
                </div>
            </div>
        </button>
    )
}