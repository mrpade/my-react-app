import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
//import { FaCopyright } from "react-icons/fa6";

function Footer(){

    return(
        <div id="footer">
            <div id="footer-icons-container">
                <a href="https://www.linkedin.com/in/patrick-ade-aa3bb6229/" target="_blank"><FaLinkedin className="footer-icons"/></a>
                <a href="https://github.com/mrpade?tab=repositories" target="_blank"><FaGithubAlt className="footer-icons"/></a>
                <a target="_blank"><FaBehance className="footer-icons"/></a>
                <a href="https://discord.gg/pyqGBjhP" target="_blank"><FaDiscord className="footer-icons"/></a>
            </div>
        </div>
    )

}

export default Footer

/*<div id="copyright-container">
<FaCopyright className="footer-icons copyright"/>
<p id="copyright-title">mrpade</p>
</div>*/