'use client'

import { useActionState, useState } from 'react'
import { sendContactMessage } from '@/app/actions/contact'
import Button from '@/components/ui/button'
import ChevronDownIcon from '@/components/icons/chevron-down-icon'

const initialState = { success: false, error: null }

export default function Contact() {
    const [state, formAction, isPending] = useActionState(sendContactMessage, initialState)
    const [isValid, setIsValid] = useState(false)
    const [subject, setSubject] = useState('')

    function handleFormChange(e: React.FormEvent<HTMLFormElement>) {
        setIsValid(e.currentTarget.checkValidity())
    }

    return (
        <section id="contact" className="scroll-mt-24 px-4 sm:px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-serif italic text-[32px] sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-12">
                    Contactez Loris
                </h2>

                <form action={formAction} onChange={handleFormChange} className="flex flex-col gap-12 text-left">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Nom"
                            required
                            className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-foreground"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Prénom"
                            required
                            className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-foreground"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-foreground"
                    />
                    <div className="relative">
                        <select
                            name="subject"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            aria-label="Objet"
                            className={`w-full appearance-none bg-transparent border-b border-border py-4 pr-8 cursor-pointer focus:outline-none focus:border-foreground ${
                                subject ? 'text-foreground' : 'text-muted'
                            }`}
                        >
                            <option value="" disabled className="bg-background text-muted">
                                Objet
                            </option>
                            <option value="Piano d'ambiance" className="bg-background text-foreground">Piano d&apos;ambiance</option>
                            <option value="Événementiel" className="bg-background text-foreground">Événementiel</option>
                            <option value="Mariage" className="bg-background text-foreground">Mariage</option>
                            <option value="Autre" className="bg-background text-foreground">Autre</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted">
                            <ChevronDownIcon />
                        </div>
                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={4}
                        className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-foreground resize-none"
                    />

                    <Button type="submit" disabled={!isValid || isPending} className="mt-4 mx-auto">
                        {isPending ? 'Envoi...' : 'Envoyer'}
                    </Button>

                    {state.error && (
                        <p className="text-center text-sm text-red-400">{state.error}</p>
                    )}
                    {state.success && (
                        <p className="text-center text-sm text-accent">
                            Message envoyé, merci !
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}