
const body = document.querySelector('body')

const menuBtn = document.querySelector('#icon-menu')
const mobileMenu = document.querySelector(".mobile-menu")
const closeMenuBtn = document.querySelector('#icon-close-menu')
const arrowIcons = document.querySelectorAll('img#arrow-icon')
const dropDownLink = document.querySelectorAll(".drop-down-link")
const dropDownMenu = document.querySelectorAll(".drop-down-menu")

const navFeatureLink = document.querySelector(".nav-list a.feature")
const navCompanyLink = document.querySelector(".nav-list a.company")

const companyMenu = document.querySelector(".company-menu")
const featureMenu = document.querySelector(".feature-menu")

dropDownLink.forEach(item => {
  item.addEventListener("click", (e) => {
    console.log(e)
    dropDownMenu.forEach(link => {
      link.classList.toggle("hidden");
      link.classList.toggle("flex");
      arrowIcons.forEach(icon => {
        if(link.classList.contains("flex")) {
          icon.src = "./assets/images/icon-arrow-up.svg";
        } else {
          icon.src = "./assets/images/icon-arrow-down.svg";
        }
      })
    })
  })
})

// dropDownLink[0].addEventListener("click", () => {
//   dropDownMenu[0].classList.toggle('hidden')
//   dropDownMenu[0].classList.toggle("flex")
//   if(dropDownMenu[0].classList.contains("flex")) {
//     arrowIcons[0].src = "./assets/images/icon-arrow-up.svg";
//   } else {
//     arrowIcons[0].src = "./assets/images/icon-arrow-down.svg";
//   }
// })

// function dropMenu() {
//   for(i = 0; i <= dropDownMenu.length; i++) {
//     dropDownMenu[i].classList.toggle("hidden");
//     dropDownMenu[i].classList.add("flex")
//   }
// }


menuBtn.addEventListener("click", (e) => {
  mobileMenu.classList.remove("hidden")
})

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden")
})
