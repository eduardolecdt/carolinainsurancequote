(function (){

  // Variables

  const nav = document.querySelector('nav')
  const buttonMenu = nav.querySelector('button[name="openMenu"]')
  const optionsNav = nav.querySelector('div[name="options"]')
  const buttonProductsNav = nav.querySelector('button[name="clickProducts"]')
  const productsNav = nav.querySelector('div[name="productsNav"]')

  // Functions

  function clickOptionsMobile () {
    buttonMenu.addEventListener('click', () => {

      const menuOpened = optionsNav.classList.contains('show')
      if (menuOpened) optionsNav.classList.remove('show')
      else optionsNav.classList.add('show')

      const buttonMenuClicked = optionsNav.classList.contains('show')
      if (buttonMenuClicked) buttonMenu.classList.add('opened')
      else buttonMenu.classList.remove('opened')

    })
  }

  function clickProductsNav () {
    buttonProductsNav.addEventListener('click', () => {

      const productsOpened = productsNav.classList.contains('show')
      if (productsOpened) productsNav.classList.remove('show')
      else productsNav.classList.add('show')

    })
  }

  // Start
  clickOptionsMobile()
  clickProductsNav()

}())

