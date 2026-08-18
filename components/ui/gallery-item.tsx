import Image from 'next/image'

type GalleryItemProps = {
    image: string
    date: string
    title: string
    aspect?: string
    grayscale?: boolean
}

export default function GalleryItem({
    image,
    date,
    title,
    aspect = 'aspect-square',
    grayscale = true,
}: GalleryItemProps) {
    return (
        <div tabIndex={0} className={`group relative ${aspect} overflow-hidden outline-none`}>
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className={`object-cover ${grayscale ? 'grayscale' : ''}`}
            />

            <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300
                group-hover:opacity-100 group-hover:pointer-events-auto
                group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
            >
                <span className="text-base font-sans text-foreground text-semibold tracking-wide">{date}</span>
                <span className="font-serif italic text-lg md:text-xl text-foreground text-center px-4">
                    {title}
                </span>
            </div>
        </div>
    )
}