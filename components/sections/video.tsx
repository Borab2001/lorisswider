// import VideoPlayer from '@/components/ui/video-player'

export default function Video() {
    return (
        <section className="px-4 sm:px-8 md:px-16 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full aspect-video">
                    <iframe
                        src={`https://www.youtube.com/embed/f6WZM7n3-IM?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                        title="Loris Swider au piano"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}