let userForm = document.querySelector(".form")
let userInput = document.querySelector(".Input")
let userBtn = document.querySelector(".Btn")



userForm.addEventListener("submit", (evt) =>{
    evt.preventDefault()
    let userVAlue = userInput.value
    let newtext = document.createElement("h1")
    newtext.textContent = userVAlue
    userForm.appendChild(newtext)
    userInput.value = "",
    newtext.style.backgroundColor = "red"
    newtext

}
)