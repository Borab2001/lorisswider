import Link from "next/link"
import MobileMenu from "@/components/layout/mobile-menu"
import ReleaseBar from "@/components/layout/release-bar"

export default function Header() {
    const navItems = [
        { label: 'À Propos', href: '#a_propos' },
        { label: 'Prestations', href: '#prestations' },
        { label: 'Musique', href: '#musique' },
        { label: 'Billetterie', href: 'https://my.weezevent.com/loris-swider-asteria-release-party', external: true },
        { label: 'Boutique', href: 'https://shop.lorisswider.com', external: true },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-20">
            <ReleaseBar />

            <header className="flex items-center justify-between px-4 sm:px-8 md:px-16 py-5.5 bg-linear-to-b from-background to-transparent">
                <Link 
                    href="/"
                    className="relative font-serif text-xl uppercase italic text-foreground after:absolute after:bg-foreground after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 pointer-events-none">
                    Loris
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            className="relative text-sm font-medium uppercase tracking-widest text-foreground after:absolute after:bg-foreground after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <MobileMenu items={navItems} />
            </header>
        </div>
    )
}