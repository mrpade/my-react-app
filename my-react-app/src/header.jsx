import Switcher from "./switcher.jsx"
import BurgerButton from "./burgerButton.jsx"
import ListItem from "./listItem.jsx"
import Dropdown from "./dropdown.jsx"

function Header(){

    return(
        <header>
        <div className="navbar">
            <img src="/src/assets/MON LOGOwhite.svg" alt="LOGO" className="brand"></img>
            <nav>
                <ul>
                    <ListItem className="menuItem menuItemActive" content='Home'></ListItem>
                    <ListItem className="menuItem" content='About'></ListItem>
                    <ListItem className="menuItem" content='Services'></ListItem>
                    <ListItem className="menuItem" content='Contacts'></ListItem>
                </ul>
            </nav>
            <Switcher/>
            <BurgerButton/>
        </div>
        <Dropdown/>
        </header>
    )
}
export default Header