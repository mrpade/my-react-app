import ListItem from "./listItem"

function Dropdown(){

    return(
        <div className="dropdown">
            <ul className="dropdownMenu">
                <ListItem className="dropdownItem" content='About'></ListItem>
                <ListItem className="dropdownItem" content='Services'></ListItem>
                <ListItem className="dropdownItem" content='Contacts'></ListItem>
            </ul>
        </div>
    )
}

export default Dropdown