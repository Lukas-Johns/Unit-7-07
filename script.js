let first = 0
let second = 0
let total = 0
document.getElementById('press').addEventListener('click', myInput)
function myInput () {
  first = document.getElementById('enter-one').value
  first = parseInt(first)
  second = document.getElementById('enter-two').value
  second = parseInt(second)
  for (first; first > 0; first--) {
    total = total + second
  }
  alert(total)
}
