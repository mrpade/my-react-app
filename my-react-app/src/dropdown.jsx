import ListItem from "./listItem"
import Switcher2 from "./switcher2"

function Dropdown(){

    return(
        <div className="dropdown">
            <Switcher2/>
            <ul className="menu dropdownMenu">
                <ListItem className="dropdownItem" content='About' data-id='About'></ListItem>
                <ListItem className="dropdownItem" content='Services' data-id='Services'></ListItem>
                <ListItem className="dropdownItem" content='Contacts' data-id='Contacts'></ListItem>
            </ul>
        </div>
    )
}

export default Dropdown