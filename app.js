const headerInput = document.getElementById("header-input");
const displayLength = document.getElementById("footer-display-length");
const displayVolume = document.getElementById("footer-display-volume");
const displayMass = document.getElementById("footer-display-mass");
const convertBtn = document.getElementById("header-btn");

let value = 20;
headerInput.addEventListener("keyup", (el) => {
  value = headerInput.value;
  headerInput.style.width =
    (Math.max((value.length + 1) * 40, 120)) + 'px';
})

const render = () => {
  if (!isNaN(value)) {
    console.log('yo');
    value = Number(value)
    displayLength.textContent = getLength(value);
    displayVolume.textContent = getVolume(value);
    displayMass.textContent = getMass(value);
  }
  else;
}

convertBtn.addEventListener('click', render)

const getLength = value => {
  const lengthInFeet = Number(value * 3.281).toFixed(3);
  const lengthInMeters = Number((1/3.281)*value).toFixed(3);
  return `${value} meters = ${lengthInFeet} feet | ${value} feet = ${lengthInMeters} meters`
}

const getVolume = value => {
  const volumeInGallons = Number(value * 0.264).toFixed(3);
  const volumneInLiters = Number((1 / 0.264) * value).toFixed(3);
  return `${value} liters = ${volumeInGallons} gallons | ${value} gallons = ${volumneInLiters} liters`
}

const getMass = value => {
  const massInPounds = Number(value * 2.204).toFixed(3);
  const massInKillograms = Number((1 / 2.204) * value).toFixed(3);
  return `${value} kilograms = ${massInPounds} pounds | ${value} pounds = ${massInKillograms} killograms`
}

// to get initial state
render()

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/