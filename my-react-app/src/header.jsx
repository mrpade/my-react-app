import Switcher from "./switcher.jsx"
import BurgerButton from "./burgerButton.jsx"

function Header(){
    return(
        <header>
            <img src="/src/assets/MON LOGOwhite.svg" alt="LOGO"></img>
            <nav>
                <ul>
                    <li className="menuItem menuItemActive">Home</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Services</li>
                    <li className="menuItem">Contacts</li>
                </ul>
            </nav>
            <Switcher/>
            <BurgerButton/>
        </header>
    )
}
export default Header