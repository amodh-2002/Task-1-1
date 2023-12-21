let button = document.querySelector("#continue")
let icon = document.querySelector("#icon-sun")
let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".list-right ul")

function validateForm() {
    let inputField = document.querySelector('input').value;
    console.log(inputField)
    if(inputField !== '') {
      window.location.href = './nextPage.html';
    } else {
      alert('Please fill in the input field before proceeding.');
    }
  }

button.addEventListener("click",validateForm)

icon.addEventListener("click",()=>{
  document.body.classList.toggle("white-theme")
  if(document.body.classList.contains("white-theme")){
    icon.src = "./moon.png"
  }else{
    icon.src = "./sun.png"
  }
})

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".list-right ul li").forEach((n)=> {
  n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})