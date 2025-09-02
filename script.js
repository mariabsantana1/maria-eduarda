const button = document.querySelector("#switch button")

button.addEventListener("click", toggleMode)

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}
