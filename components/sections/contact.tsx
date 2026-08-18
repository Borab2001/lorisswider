'use client'

import { useActionState, useState } from 'react'
import { sendContactMessage } from '@/app/actions/contact'
import Button from '@/components/ui/button'

const initialState = { success: false, error: null }

export default function Contact() {
    const [state, formAction, isPending] = useActionState(sendContactMessage, initialState)
    const [isValid, setIsValid] = useState(false)

    function handleFormChange(e: React.FormEvent<HTMLFormElement>) {
        setIsValid(e.currentTarget.checkValidity())
    }

    return (
        <section id="contact" className="scroll-mt-24 px-8 md:px-16 py-24 md:py-32">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-serif italic text-4xl md:text-5xl text-foreground mb-12">
                Contactez Loris
                </h2>

                <form action={formAction} onChange={handleFormChange} className="flex flex-col gap-12 text-left">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Nom"
                            required
                            className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Prénom"
                            required
                            className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
                    />
                    <select
                        name="subject"
                        required
                        defaultValue=""
                        aria-label="Objet"
                        className="bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent"
                    >
                        <option value="" disabled className="bg-background">
                            Objet
                        </option>
                        <option value="Piano d'ambiance" className="bg-background">Piano d&apos;ambiance</option>
                        <option value="Événementiel" className="bg-background">Événementiel</option>
                        <option value="Mariage" className="bg-background">Mariage</option>
                        <option value="Autre" className="bg-background">Autre</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={4}
                        className="bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted focus:outline-none focus:border-accent resize-none"
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