import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Discography from "@/components/sections/discography";
import Gallery from "@/components/sections/gallery";

export default function Home() {
    return (
		<>
			<Header />
			<Hero />
			<About />
			<Services />
			<Discography />
			<Gallery />
		</>
    )
}