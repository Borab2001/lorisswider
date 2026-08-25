import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Video from "@/components/sections/video";
import Services from "@/components/sections/services";
import Discography from "@/components/sections/discography";
import Spotlight from "@/components/sections/spotlight";
import Gallery from "@/components/sections/gallery";
import Footer from "@/components/layout/footer";
import Contact from "@/components/sections/contact";

export default function Home() {
    return (
		<>
			<Header />
			<Hero />
			<About />
			<Video />
			<Services />
			<Discography />
			<Spotlight />
			<Gallery />
			<Contact />
			<Footer />
		</>
    )
}