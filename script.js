function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function toggleMenu() {
  const menuMobile = document.getElementById("menu-mobile")

  if (menuMobile.className === "menu-mobile-active") {
    menuMobile.className = "menu-mobile"
  } else {
    menuMobile.className = "menu-mobile-active"
  }
}

// PopUp Hobbies
const buttonHobbies = document.querySelector("#hobbies")
const modalHobbies = document.querySelector("#dialog_hobbies")
const buttonHobbiesClose = document.querySelector("#close_dialog_hobbies")

buttonHobbies.onclick = function () {
  modalHobbies.showModal()
}

buttonHobbiesClose.onclick = function () {
  modalHobbies.close()
}

// PopUp Habilidades

const buttonHabilidades = document.querySelector("#habilidades")
const modalHabilidades = document.querySelector("#dialog_habilidades")
const buttonHabilidadesClose = document.querySelector("#close_dialog_habilidades")

buttonHabilidades.onclick = function () {
  modalHabilidades.showModal()
}

buttonHabilidadesClose.onclick = function () {
  modalHabilidades.close()
}

// PopUp Include

const buttonInclude = document.querySelector("#include")
const modalInclude = document.querySelector("#dialog_include")
const buttonIncludeClose = document.querySelector("#close_dialog_include")

buttonInclude.onclick = function () {
  modalInclude.showModal()
}

buttonIncludeClose.onclick = function () {
  modalInclude.close()
}

//Mobile

const buttonHobbiesM = document.querySelector("#hobbiesm")
const modalHobbiesM = document.querySelector("#dialog_hobbiesm")
const buttonHobbiesMClose = document.querySelector("#close_dialog_hobbiesm")

buttonHobbiesM.onclick = function () {
  modalHobbiesM.showModal()
}

buttonHobbiesMClose.onclick = function () {
  modalHobbiesM.close()
}

// PopUp Habilidades

const buttonHabilidadesM = document.querySelector("#habilidadesm")
const modalHabilidadesM = document.querySelector("#dialog_habilidadesm")
const buttonHabilidadesMClose = document.querySelector("#close_dialog_habilidadesm")

buttonHabilidadesM.onclick = function () {
  modalHabilidadesM.showModal()
}

buttonHabilidadesMClose.onclick = function () {
  modalHabilidadesM.close()
}

// PopUp Include

const buttonIncludeM = document.querySelector("#includem")
const modalIncludeM = document.querySelector("#dialog_includem")
const buttonIncludeMClose = document.querySelector("#close_dialog_includem")

buttonIncludeM.onclick = function () {
  modalIncludeM.showModal()
}

buttonIncludeMClose.onclick = function () {
  modalIncludeM.close()
}