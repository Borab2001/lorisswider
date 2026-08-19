import GalleryItem from '@/components/ui/gallery-item'

const mosaic = [
    { image: '/images/hero.webp', date: '01 / 2026', title: 'Medley lors du concert Maestro' },
    { image: '/images/spotlight.webp', date: '01 / 2026', title: 'Concert avec la troupe Maestro' },
]

const gridItems = [
    { image: '/images/sncf1.webp', date: '11 / 2025', title: 'Concert SNCF' },
    { image: '/images/sncf2.webp', date: '11 / 2025', title: 'Shooting affiche Concert SNCF' },
    // { image: '/images/about.webp', date: 'XX / 202X', title: 'Collaboration Optical Factory x Rayban Meta' },
    // { image: '/images/about.webp', date: 'XX / 202X', title: 'Prestation lors d\'un mariage' },
]

export default function Gallery() {
    return (
        <section className="px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-4 mb-4">
                    {mosaic.map((item) => (
                        <GalleryItem key={item.image} {...item} aspect="aspect-4/3" />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gridItems.map((item) => (
                        <GalleryItem key={item.image} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}