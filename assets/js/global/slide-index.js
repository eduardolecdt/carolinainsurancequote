(function (){

  // Global

  const section = document.querySelector('section[name="products"]')

  // Slide

  const slide = section.querySelector('div[name="items"]')
  const buttonArrowLeft = section.querySelector('button[name="arrowLeft"]')
  const buttonArrowRight = section.querySelector('button[name="arrowRight"]')
  const sizeItem = 310
  let __indice = 1

  function moveRightSlide () {
    buttonArrowRight.addEventListener('click', () => {
      const numeroLinks = slide.children.length
      if (__indice === numeroLinks) return

      __indice = __indice + 1
      scrollSlide(__indice)
    })
  }

  function moveLeftSlide () {
    buttonArrowLeft.addEventListener('click', () => {
      if (__indice === 1) return

      __indice = __indice - 1
      scrollSlide(__indice)
    })
  }

  function scrollSlide (indice) {
    const move = sizeItem * (indice - 1)
    slide.style.transform = `translateX(-${move}px)`
  }

  moveRightSlide()
  moveLeftSlide()

}())
