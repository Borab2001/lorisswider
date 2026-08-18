import Image from "next/image"
import Link from "next/link"

const socials = [
  { label: 'YouTube', href: 'https://youtube.com/...' },
  { label: 'Instagram', href: 'https://instagram.com/...' },
  { label: 'Spotify', href: 'https://open.spotify.com/...' },
  { label: 'TikTok', href: 'https://tiktok.com/...' },
  { label: 'Deezer', href: 'https://deezer.com/...' },
  { label: 'Facebook', href: 'https://facebook.com/...' },
]

export default function Footer() {
    return (
        <footer className="px-8 md:px-16 py-12">
            <div className="max-w-7xl mx-auto border-t border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 my-10">
                    <Image
                        src="/illustrations/sign.svg"
                        alt="Loris Swider signature"
                        width={200}
                        height={100}
                        loading="lazy"
                        className="object-contain"
                    />

                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                        {socials.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-sans font-medium capitalize text-foreground hover:text-accent transition-colors"
                            >
                                {social.label}
                            </Link>
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