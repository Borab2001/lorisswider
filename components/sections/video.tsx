import VideoPlayer from '@/components/ui/video-player'

export default function Video() {
    return (
        <section className="px-4 sm:px-8 md:px-16 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <VideoPlayer youtubeId="f6WZM7n3-IM" title="Loris Swider au piano" />
            </div>
        </section>
    )
}