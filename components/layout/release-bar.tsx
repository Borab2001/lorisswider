'use client'

import { useSyncExternalStore } from 'react'
import { EVENT_ISO, OPEN_RELEASE_POPUP_EVENT } from '@/components/layout/release-popup'

const EVENT_SECONDS = Math.floor(new Date(EVENT_ISO).getTime() / 1000)

function subscribe(onTick: () => void) {
    const id = setInterval(onTick, 1000)
    return () => clearInterval(id)
}

const getNow = () => Math.floor(Date.now() / 1000)
// null côté serveur : évite d'afficher une valeur figée au moment du build
const getServerNow = () => null

const pad = (n: number) => String(n).padStart(2, '0')

export default function ReleaseBar() {
    const now = useSyncExternalStore<number | null>(subscribe, getNow, getServerNow)
    const diff = now === null ? null : EVENT_SECONDS - now

    if (diff !== null && diff <= 0) return null

    const total = diff ?? 0
    const days = Math.floor(total / 86400)
    const hours = Math.floor((total % 86400) / 3600)
    const minutes = Math.floor((total % 3600) / 60)
    const seconds = total % 60

    return (
        <button
            type="button"
            aria-haspopup="dialog"
            aria-label="Release Party le 28 novembre à Montpellier, voir les détails"
            onClick={() => window.dispatchEvent(new Event(OPEN_RELEASE_POPUP_EVENT))}
            className="group flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap bg-album px-4 text-xs font-medium text-white sm:text-sm cursor-pointer"
        >
            <span>Release Party :</span>
            <span
                className={`w-27.5 sm:w-32 tabular-nums transition-opacity duration-500 ${
                    now === null ? 'opacity-0' : 'opacity-100'
                }`}
            >
                {days}j {pad(hours)}h {pad(minutes)}min {pad(seconds)}s
            </span>
            <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            >
                <path d="M18.5 12L4.99997 12" />
                <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
            </svg>
        </button>
    )
}