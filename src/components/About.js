import { NavLink } from "react-router-dom";
import mi from "../img/various.mp4"

const About = () => {

    return (
        <section className="section">

        
            <div className="about">
                <div className="about-description">
                    <h2 className="about-title">8,888 unique Mekas <br /> <span className="tag">who need Drivers.</span></h2>
                    <p>The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universe.</p>
                    <p>Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity</p>
                </div>
                <div className="about-right">
                    <video src={mi} className="about-img" autoPlay muted loop>
                        <source src={mi} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )

}

export default About