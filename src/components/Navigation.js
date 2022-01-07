import { NavLink } from "react-router-dom";
import mi from "../img/mi.png"

const Navigation = () => {

    return (

        <header className="navigation">
            <NavLink exact to="/">
                <img src={mi} className="header-logo" alt="logo Mi" />
            </NavLink>
            <div className="header-right">
                <div className="link">
                    <a href="" className="header-twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="link">
                    <a href="" className="header-discord">
                        <i class="fab fa-discord"></i>
                    </a>
                </div>
                <div className="link-wallet">
                    <a href="" className="header-wallet">
                        Connect Wallet
                    </a>
                </div>
                
            </div>

        </header>
    )

}

export default Navigation