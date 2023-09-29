function toggleMode () {
  const html = document.documentElement

  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
  img.setAttribute("src", "./assets/avatar.png")
  }
}

function toggleMenu() {
  const menuMobile = document.getElementById("menu-mobile")

  if(menuMobile.className === "menu-mobile-active"){
    menuMobile.className = "menu-mobile"
  }
  else {
    menuMobile.className = "menu-mobile-active"
  }
}
