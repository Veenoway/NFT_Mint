

import img from "../img/meka.jpg";
import img2 from "../img/meka4.jpg";
import niho from "../img/niho.jfif"
import niho2 from "../img/niho2.jfif";

const Team = () => {

    return (
        <section className="team">
            <div className="intro-team">
                <div className="team-title">
                    <div className="question">Who are we ?</div>
                    <div className="reply">Creative teams</div>
                </div>
                <div className="team-presentation">
                    <p>Hi ! Niho & Mi are two awesome designer focusing on 2D & Manga direction. We have been working hard to stablish our own style, and we're continualously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more !</p>
                </div>
            </div>
            <div className="member row">
                <div className="who column">
                    <div className="top row">
                        <div className="col-lg-6">
                            <h2>NihoAme</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="social row">
                                <div className="link">
                                        <a href="" className="social-link"><i class="fab fa-twitter"></i></a>
                                </div>
                                <div className="link">
                                        <a href="" className="social-link"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={img2} alt="" />
                    <div className="spacer"></div>
                </div>
                
                <div className="works column">
                    <div className="top row">
                       <div className="col-lg-6">
                           <h2>Art Works</h2>
                        </div> 
                        <div className="col-lg-6">
                            
                        </div>
                    </div>
                    <section className="carousel-img">
                        <img src={niho} className="" />
                        <img src={niho2} className="" />

                    </section>
                </div>
            </div>
            <div className="member row">
                <div className="who column">
                    <div className="top row">
                        <div className="col-lg-6">
                            <h2>Mi</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="social row">
                                <div className="link">
                                        <a href="" className="social-link"><i class="fab fa-twitter"></i></a>
                                </div>
                                <div className="link">
                                        <a href="" className="social-link"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={img} alt="" />
                    <div className="spacer"></div>
                </div>
                
                <div className="works column">
                    <div className="top row">
                       <div className="col-lg-6">
                           <h2>Art Works</h2>
                        </div> 
                        <div className="col-lg-6">
                            
                        </div>
                    </div>
                    <section className="carousel-img">
                        <img src={niho} className="" />
                        <img src={niho2} className="" />

                    </section>
                </div>
            </div>
        </section>
    )

}

export default Team;