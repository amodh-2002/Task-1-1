let button = document.querySelector("#continue")

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