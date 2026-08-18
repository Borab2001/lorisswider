import Link from "next/link"

export default function Header() {
    const navItems = [
        { label: 'À propos', href: '#a_propos' },
        { label: 'Prestations', href: '#prestations' },
        { label: 'Musique', href: '#musique' },
        // { label: 'Boutique', href: '#boutique' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 md:px-16 py-5.5">
            <Link href="/" className="font-serif text-xl uppercase italic text-foreground">
                Loris
            </Link>
            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="font-sans text-sm font-medium uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}