function ListItem(props){
    const activeState = () => {
        const navItem = document.querySelectorAll('.navItem');
        navItem.forEach(item => {
            item.addEventListener('click', () => {
                navItem.forEach(item => {
                    item.classList.remove('navItemActive')
                })
            item.classList.add('navItemActive')
            })
        })
        
    }
    return(
        <li className="navItem" onClick={activeState}>{props.content}</li>
    )
}
export default ListItem