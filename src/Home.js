import About from "./components/About";
import Carousel from "./components/Carousel";
import Community from "./components/Community";
import Hero from "./components/Hero";
import Team from "./components/Team";

const Home = () => {

    return (
        <div className="home">
            <Hero />
            <About />
            <Carousel />
            <Team />
            <Community />
            
        </div>
    )

}

export default Home;