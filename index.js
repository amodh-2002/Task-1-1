let button = document.querySelector("#continue")
let icon = document.querySelector("#icon-sun")

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