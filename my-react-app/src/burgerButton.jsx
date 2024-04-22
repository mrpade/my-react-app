function BurgerButton() {

  const dropMenu = () => {
    let dropdown = document.querySelector('.dropdown');
    dropdown.style.display == 'block' 
    ? dropdown.style.display = 'none' 
    : dropdown.style.display = 'block';
}

  return (
    <div className="burger" onClick={dropMenu}>
      <div></div>
      <div id="burgerLine2"></div>
      <div></div>
    </div>
  );
}

export default BurgerButton