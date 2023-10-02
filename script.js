//Change the page theme

const img = document.querySelector("#profile img")

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  localStorage.setItem(
    "theme",
    html.classList.contains("light") ? "light" : "dark"
  )

  img.setAttribute(
    "src",
    html.classList.contains("light")
      ? "./assets/avatar-light.png"
      : "./assets/avatar.png"
  )
}

// Maintain theme between pages

const savedTheme = localStorage.getItem("theme")

if (savedTheme === "light") {
  document.documentElement.classList.add("light")
  if (img) {
    img.setAttribute("src", "./assets/avatar-light.png")
  }
} else {
  if (img) {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// Activate Mobile Menu

function toggleMenu() {
  const menuMobile = document.getElementById("menu-mobile")

  if (menuMobile.className === "menu-mobile-active") {
    menuMobile.className = "menu-mobile"
  } else {
    menuMobile.className = "menu-mobile-active"
  }
}

//Open Button

const popupButtons = document.querySelectorAll(".popup-button")

popupButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const modalId = button.getAttribute("data-modal-target")
    const modal = document.getElementById(modalId)

    if (modal) {
      modal.showModal()
    }
  })
})

const popupCloseButtons = document.querySelectorAll(".popupClose")

popupCloseButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const modal = closeButton.closest("dialog")
    if (modal) {
      modal.close()
    }
  })
})

//Open Button mobile

const popupmobileButtons = document.querySelectorAll(".popup-button-mobile")

popupmobileButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const modalIdmobile = button.getAttribute("data-modal-target")
    const modalmobile = document.getElementById(modalIdmobile)

    if (modalmobile) {
      modalmobile.showModal()
    }
  })
})

const popupmobileCloseButtons = document.querySelectorAll(".popupClose")

popupmobileCloseButtons.forEach(function (closeButton) {
  closemobileButton.addEventListener("click", function () {
    const modalmobile = closemobileButton.closest("dialog")
    if (modal) {
      modalmobile.close()
    }
  })
})
