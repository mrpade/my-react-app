function Switcher() {
    
    const theme = () => {
        const root = document.querySelector(':root');
        const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color');
        const thirdColor = getComputedStyle(root).getPropertyValue('--third-color');
        const brand = document.querySelector('.brand');
        const switcher = document.querySelector('.switchButton');

        if (switcher.style.transform == ''){
            switcher.style.transform = 'translateX(100%)'
        } else if (switcher.style.transform == 'translateX(100%)'){
            switcher.style.transform = 'translateX(0)'
        } else {
            switcher.style.transform = 'translateX(100%)'
        }

        brand.src == '/src/assets/MON LOGOwhite.svg'
        ? brand.setAttribute('src', "/src/assets/MON LOGO_1.svg")
        : brand.setAttribute('src', "/src/assets/MON LOGOwhite.svg")
        /*brand.setAttribute('src', '/src/assets/MON LOGO_1.svg')*/

        primaryColor == '#2c2e48'
        ? document.documentElement.style.setProperty('--primary-color', '#fafafa')
        : document.documentElement.style.setProperty('--primary-color', '#2c2e48');

        thirdColor == '#fafafa'
        ? document.documentElement.style.setProperty('--third-color', '#2c2e48')
        : document.documentElement.style.setProperty('--third-color', '#fafafa');

        /*document.documentElement.style.setProperty('--third-color', '#2c2e48');
        document.documentElement.style.setProperty('--primary-color', '#fafafa');*/
    }
    return(
        <div className="switcher" onClick={theme}>
            <div className="switchButton"></div>
        </div>
    )
}

export default Switcher