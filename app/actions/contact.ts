'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactState = {
    success: boolean
    error: string | null
}

export async function sendContactMessage(
    _prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const surname = formData.get('surname') as string
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!surname || !name || !email || !subject || !message) {
        return { success: false, error: 'Merci de remplir tous les champs.' }
    }

    try {
        await resend.emails.send({
            from: 'Contact site <onboarding@resend.dev>',
            to: 'contact.lorisswider@gmail.com',
            replyTo: email,
            subject: `Nouvelle demande : ${subject}`,
            text: `De : ${surname.toUpperCase()} ${name} (${email})\nObjet : Demande ${subject}\n\n${message}`,
        })

        return { success: true, error: null }
    } catch (err) {
        console.error(err)
        return { success: false, error: "L'envoi a échoué, réessayez plus tard." }
    }
}