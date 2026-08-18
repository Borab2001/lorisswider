import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from 'next/font/google';
import "./globals.css";
import SmoothScrollProvider from '@/components/providers/smooth-scroll-provider';


const instrumentSerif = Instrument_Serif({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-serif',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: "Loris Swider",
	description:
		"Loris Swider est un jeune pianiste français connu par ses performances en gare et sur les réseaux. Membre de la troupe Maestro, il mélange les genres musicaux et se produit sur scène.",
	openGraph: {
		title: "Loris Swider",
		description:
			"Loris Swider est un jeune pianiste français connu par ses performances en gare et sur les réseaux. Membre de la troupe Maestro, il mélange les genres musicaux et se produit sur scène.",
		url: "https://lorisswider.vercel.app/",
		siteName: "Loris Swider",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Loris Swider",
		description:
			"Loris Swider est un jeune pianiste français connu par ses performances en gare et sur les réseaux. Membre de la troupe Maestro, il mélange les genres musicaux et se produit sur scène.",
		images: ["/og-image.jpg"],
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="fr"
			className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</body>
		</html>
	);
}