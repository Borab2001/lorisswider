'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type NavItem = {
    label: string
    href: string
    external?: boolean
}

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

export default function MobileMenu({ items }: { items: NavItem[] }) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) return

        document.body.style.overflow = 'hidden'

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
        }
        const mq = window.matchMedia('(min-width: 768px)')
        const onBreakpoint = (e: MediaQueryListEvent) => {
            if (e.matches) setOpen(false)
        }

        window.addEventListener('keydown', onKeyDown)
        mq.addEventListener('change', onBreakpoint)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
            mq.removeEventListener('change', onBreakpoint)
        }
    }, [open])

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="relative z-50 -mr-1 h-8 w-8"
            >
                <span
                    className={`absolute left-1 right-1 rounded-full h-px -translate-y-1/2 bg-foreground transition-all duration-500 ease-curtain ${
                        open ? 'top-1/2 rotate-45' : 'top-[38%]'
                    }`}
                />
                <span
                    className={`absolute left-1 right-1 rounded-full h-px -translate-y-1/2 bg-foreground transition-all duration-500 ease-curtain ${
                        open ? 'top-1/2 -rotate-45' : 'top-[62%]'
                    }`}
                />
            </button>

            <div
                id="mobile-menu"
                inert={!open}
                data-lenis-prevent
                className={`fixed inset-0 z-40 bg-background px-4 sm:px-8 pt-28 pb-10 transition-[clip-path] duration-700 ease-curtain ${
                    open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]'
                }`}
            >
                <nav>
                    <ul>
                        {items.map((item, i) => (
                            <li key={item.label} className="relative overflow-hidden">
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                    className={`flex items-baseline gap-5 py-5 transition-transform duration-700 ease-curtain ${
                                        open ? 'translate-y-0' : 'translate-y-full'
                                    }`}
                                    style={{ transitionDelay: open ? `${250 + i * 150}ms` : '0ms' }}
                                >
                                    <span className="w-20 shrink-0 font-serif italic text-3xl text-accent">
                                        {numerals[i]} -
                                    </span>
                                    <span className="font-serif italic text-5xl sm:text-6xl tracking-tight text-foreground">
                                        {item.label}
                                    </span>
                                </Link>

                                <span
                                    aria-hidden
                                    className={`absolute bottom-0 left-0 h-px w-full origin-left bg-border/30 transition-transform duration-1000 ease-curtain ${
                                        open ? 'scale-x-100' : 'scale-x-0'
                                    }`}
                                    style={{ transitionDelay: open ? `${450 + i * 150}ms` : '0ms' }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}