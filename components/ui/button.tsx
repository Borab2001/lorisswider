import Link from "next/link"

type BaseProps = {
    children: React.ReactNode
    className?: string
}

type LinkButtonProps = BaseProps & {
    href: string
    type?: never
    disabled?: never
}

type SubmitButtonProps = BaseProps & {
    href?: never
    type: 'button' | 'submit'
    disabled?: boolean
}

type ButtonProps = LinkButtonProps | SubmitButtonProps

const baseStyles =
    "inline-block min-w-45 bg-accent text-background font-medium font-sans tracking-tight px-8 py-3 text-base md:text-lg hover:bg-accent/90 transition-colors"

export default function Button(props: ButtonProps) {
    if ('href' in props && props.href) {
        return (
            <Link href={props.href} className={`${baseStyles} ${props.className ?? ''}`}>
                {props.children}
            </Link>
        )
    }

    const { type = 'button', disabled, children, className } = props as SubmitButtonProps

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${baseStyles} ${className ?? ''} disabled:grayscale`}
        >
            {children}
        </button>
    )
}