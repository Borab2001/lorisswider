import Link from "next/link";

export default function Button({ children, href }: { 
    children: React.ReactNode;
    href: string 
}) {
    return (
        <Link
            href={href}
            className="inline-block min-w-45 bg-accent text-background font-medium font-sans tracking-tight px-8 py-3 text-base md:text-lg hover:bg-accent/90 transition-colors"
        >
            {children}
        </Link>
    )
}