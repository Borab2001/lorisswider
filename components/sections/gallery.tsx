import GalleryItem from '@/components/ui/gallery-item'

const mosaic = [
    { image: '/images/hero1.webp', date: '01 / 2026', title: 'Medley lors du concert Maestro' },
    { image: '/images/hero2.webp', date: '01 / 2026', title: 'Concert avec la troupe Maestro' },
]

const gridItems = [
    { image: '/images/about1.webp', date: '01 / 2026', title: 'Concert SNCF' },
    { image: '/images/about2.webp', date: '01 / 2026', title: 'Shooting affiche Concert SNCF' },
    { image: '/images/about3.webp', date: '01 / 2026', title: 'Collaboration Optical Factory x Rayban Meta' },
    { image: '/images/about4.webp', date: '01 / 2026', title: 'Prestation lors d\'un mariage' },
]

export default function Gallery() {
    return (
        <section className="px-8 md:px-16 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {mosaic.map((item) => (
                        <GalleryItem key={item.image} {...item} aspect="aspect-4/3" />
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {gridItems.map((item) => (
                        <GalleryItem key={item.image} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}