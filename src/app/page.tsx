import News from "@/components/Home/News";
import About from "@/components/Home/About";
import Title from "@/components/Home/Title";
import University from "@/components/Home/University";
import Search from "@/components/Home/Search";
import AboutUs from "@/components/Home/AboutUs";

export default function Home() {

    return (
        <>
            <Title />
            <About />
            <Search />
            <University />
            {/* <AboutUs /> */}
            <News />
        </>
    )
}
