import { YouTubeEmbed } from '@next/third-parties/google'

export default function Video() {
    return (
        <section className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                 <div className="youtube-full-width">
                    <YouTubeEmbed
                        videoid="f6WZM7n3-IM"
                        params="controls=1&rel=0"
                    />
                </div>
            </div>
        </section>
    )
}