'use client'

import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const EVENT_ISO = '2026-11-28T20:00:00+01:00'
export const OPEN_RELEASE_POPUP_EVENT = 'release-popup:open'
const EVENT_SECONDS = Math.floor(new Date(EVENT_ISO).getTime() / 1000)
const EVENT_LABEL = '28 Novembre 2026'
const TICKET_URL = 'https://my.weezevent.com/loris-swider-asteria-release-party'
const STORAGE_KEY = 'release-popup-seen'

function subscribe(onTick: () => void) {
    const id = setInterval(onTick, 1000)
    return () => clearInterval(id)
}

const getNow = () => Math.floor(Date.now() / 1000)
const pad = (n: number) => String(n).padStart(2, '0')

function Countdown() {
    const now = useSyncExternalStore(subscribe, getNow, getNow)
    const diff = Math.max(0, EVENT_SECONDS - now)

    const units = [
        { label: 'Jours', value: Math.floor(diff / 86400) },
        { label: 'Heures', value: Math.floor((diff % 86400) / 3600) },
        { label: 'Minutes', value: Math.floor((diff % 3600) / 60) },
        { label: 'Secondes', value: diff % 60 },
    ]

    return (
        <div
            role="timer"
            aria-label="Temps restant avant la release party"
            className="flex items-center justify-center gap-4.5"
        >
            {units.map((unit, i) => (
                <Fragment key={unit.label}>
                    {i > 0 && <span aria-hidden className="h-11 w-px bg-album" />}
                    <div className="flex flex-col items-center gap-1">
                        <span className="px-1.5 font-serif italic text-[2.6rem] leading-none tracking-tight tabular-nums text-foreground">
                            {pad(unit.value)}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wide text-muted">
                            {unit.label}
                        </span>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default function ReleasePopup() {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [eligible, setEligible] = useState(false)
    const [closing, setClosing] = useState(false)

    useEffect(() => {
        if (Date.now() >= EVENT_SECONDS * 1000) return
        try {
            if (sessionStorage.getItem(STORAGE_KEY)) return
        } catch {
            /* stockage indisponible */
        }

        const id = setTimeout(() => setEligible(true), 1000)
        return () => clearTimeout(id)
    }, [])

    useEffect(() => {
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const openPopup = useCallback(() => {
        const dialog = dialogRef.current
        if (!dialog || dialog.open) return
        dialog.showModal()
        dialog.focus()
        document.body.style.overflow = 'hidden'
    }, [])

    useEffect(() => {
        const onOpenRequest = () => {
            if (dialogRef.current) openPopup()
            else setEligible(true)
        }
        window.addEventListener(OPEN_RELEASE_POPUP_EVENT, onOpenRequest)
        return () => window.removeEventListener(OPEN_RELEASE_POPUP_EVENT, onOpenRequest)
    }, [openPopup])

    function requestClose() {
        if (closing) return
        setClosing(true)
        setTimeout(() => dialogRef.current?.close(), 250)
    }

    function handleClosed() {
        document.body.style.overflow = ''
        setClosing(false)
        try {
            sessionStorage.setItem(STORAGE_KEY, '1')
        } catch {
            /* stockage indisponible */
        }
    }

    if (!eligible) return null

    return (
        <dialog
            ref={dialogRef}
            tabIndex={-1}
            aria-labelledby="release-popup-title"
            data-lenis-prevent
            onCancel={(e) => {
                e.preventDefault()
                requestClose()
            }}
            onClose={handleClosed}
            onClick={(e) => {
                if (e.target === e.currentTarget) requestClose()
            }}
            className={`m-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-120 overflow-y-auto bg-background p-0 text-foreground outline-none backdrop:bg-background/50 backdrop:backdrop-blur-lg ${
                closing
                    ? 'animate-popup-out backdrop:animate-fade-out'
                    : 'open:animate-popup-in backdrop:animate-fade-in'
            }`}
        >
            <div className="relative aspect-square">
                <Image
                    src="/images/asteria.webp"
                    alt="Loris Swider penché sur une partition, éclairé à contre-jour"
                    fill
                    sizes="(max-width: 448px) 100vw, 416px"
                    quality={100}
                    loading="eager"
                    onLoad={openPopup}
                    className="object-cover object-[0%_30%]"
                />
                <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background to-transparent"
                />
                <div className="absolute inset-x-0 bottom-5">
                    <Countdown />
                </div>

                <button
                    type="button"
                    onClick={requestClose}
                    aria-label="Fermer"
                    className="absolute right-2 top-2 z-10 size-10 p-2 rounded-lg cursor-pointer text-foreground hover:bg-[#f0ebe013]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"></path>
                    </svg>
                </button>
            </div>

            <div className="px-4.5 pb-5 text-center">
                <div className="flex items-center justify-center gap-3">
                    <span aria-hidden className="h-px w-14 bg-linear-to-r from-[#131631] to-album rounded-full" />
                    <time dateTime={EVENT_ISO} className="text-base font-medium text-album">
                        {EVENT_LABEL}
                    </time>
                    <span aria-hidden className="h-px w-14 bg-linear-to-l from-[#131631] to-album rounded-full" />
                </div>

                <h2
                    id="release-popup-title"
                    className="mt-3 font-serif italic text-5xl tracking-tight text-foreground"
                >
                    Release Party
                </h2>

                <Link
                    href={TICKET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block bg-album py-2.5 text-base font-medium text-foreground transition-colors hover:bg-album/80"
                >
                    Billetterie
                </Link>

                <p className="mt-3 text-sm text-muted">Places limitées</p>
            </div>
        </dialog>
    )
}