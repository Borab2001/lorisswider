import Image from "next/image"
import Link from "next/link"

const socials = [
    { label: 'YouTube', href: 'https://www.youtube.com/@lorisotto_officiel' },
    { label: 'Instagram', href: 'https://www.instagram.com/lorisotto_officiel/' },
    { label: 'Spotify', href: 'https://open.spotify.com/intl-fr/artist/64PwZ51lWZ9JT0lNDgQ4qj' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@lorisotto_officiel' },
    { label: 'Deezer', href: 'https://www.deezer.com/fr/artist/282043541' },
    // { label: 'Facebook', href: '#' },
    { label: 'Email', href: 'mailto:contact.lorisswider@gmail.com' },
    
]

export default function Footer() {
    return (
        <footer className="px-4 sm:px-8 md:px-16 py-12">
            <div className="max-w-7xl mx-auto border-t border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 my-10">
                    <Image
                        src="/illustrations/sign.svg"
                        alt="Loris Swider signature"
                        width={200}
                        height={113}
                        loading="lazy"
                        className="object-contain h-auto"
                    />

                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                        {socials.map((social) => (
                            <div
                                key={social.label}
                                className="flex"
                            >
                                <Link
                                    
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // className="text-sm font-sans font-medium capitalize text-foreground hover:text-accent transition-colors"
                                    className="relative text-sm font-sans font-medium capitalize text-foreground after:absolute after:bg-foreground after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                                >
                                    {social.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-sm text-foreground text-center">
                    Copyright © {new Date().getFullYear()} Loris Swider
                </p>
            </div>
        </footer>
    )
}