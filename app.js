const headerInput = document.getElementById("header-input");
const displayArr = document.getElementsByClassName("footer-display-div");

const resizeInput = () => {
  headerInput.style.width =
    (Math.max((headerInput.value.length + 1) * 40, 120)) + 'px';
}

for(div of displayArr){
  div.textContent = "20 meters = 65.616 feet | 20 feet = 6.096 meters";
}