let hotelsDateStart = document.getElementById("hotelStartDate");

let carsDateStart = document.getElementById("carsStartDate");

let flieghtsDateStart = document.getElementById("flieghtsStartDate");

let hotelsDateEnd = document.getElementById("hotelsEndDate");

let carsDateEnd = document.getElementById("carsEndDate");

let flieghtsDateEnd = document.getElementById("flieghtsEndDate");

let buttons = document.getElementsByTagName("button");

let city = document.getElementsByClassName("city");

let country = document.getElementsByClassName("country");

let formFlieghts = document.getElementsByClassName("form_flieghts");

let formHotels = document.getElementsByClassName("form_hotels");

let formCars = document.getElementsByClassName("form_cars");

let from = document.getElementById("from");


let to = document.getElementById("to");
console.log(to)
let date = new Date();

let navHotels = document.getElementById("navhotels");

let navFlieghts = document.getElementById("navFlieghts");

let navCars = document.getElementById("navCars");

let array;

let buttonClear = document.getElementsByClassName("clear");

let forms = document.getElementsByTagName("form");

hotelsDateStart.addEventListener("keydown", (event) => {

  if (event.key == "Enter") {
    let inputValue = hotelsDateStart.value;

    splitString(inputValue, "-");

    validDate(array);
  }
})

hotelsDateEnd.addEventListener("keydown", (event) => {

  if (event.key == "Enter") {

    let inputValue = hotelsDateEnd.value;

    splitString(inputValue, "-");
    validDate(array);
    lessThenStartDate(splitString(hotelsDateStart.value, "-"), splitString(hotelsDateEnd.value, "-"));
  }
})
let count = 0;
carsDateStart.addEventListener("keydown", (event) => {

  if (event.key == "Enter") {
    let inputValue = carsDateStart.value;
    count++;
    splitString(inputValue, "-");
    console.log(count)
    validDate(array);
    localStorage.setItem(count, carsDateStart.value);
    showMessege()

  }
})

carsDateEnd.addEventListener("keydown", (event) => {

  if (event.key == "Enter") {
    let inputValue = carsDateEnd.value;

    splitString(inputValue, "-");

    validDate(array);

    lessThenStartDate(splitString(carsDateStart.value, "-"), splitString(carsDateEnd.value, "-"));
  }
})

flieghtsDateStart.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let inputValue = flieghtsDateStart.value;

    console.log(inputValue);

    splitString(inputValue, "-");

    if (validDate(array)) {
      disabled();
    }
  }
})

flieghtsDateEnd.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let inputValue = flieghtsDateEnd.value;

    splitString(inputValue, "-");

    validDate(array);

    lessThenStartDate(splitString(flieghtsDateStart.value, "-"), splitString(flieghtsDateEnd.value, "-"));
  }
})

function splitString(string, separator) {
  array = string.split(separator);

  return array
}
function validDate(array) {
  if ((date.getFullYear() > array[0]) ||
    (date.getFullYear() >= array[0] && date.getMonth() + 1 > array[1])
    || (date.getFullYear() >= array[0] && date.getMonth() + 1 >= array[1] && date.getDate() > array[2])) {
    alert("Input correct date");

    return false;
  } else {

    return true;
  }
}

function lessThenStartDate(arrayStart, arrayEnd) {
  if ((arrayStart[0] > arrayEnd[0]) ||
    (arrayStart[0] >= arrayEnd[0] && arrayStart[1] > arrayEnd[1])
    || (arrayStart[0] >= arrayEnd[0] && arrayStart[1] >= arrayEnd[1] && arrayStart[2] > arrayEnd[2])) {

    alert("Input correct date. Start date less then end date");
  }
}

navCars.addEventListener("click", () => {
  formCars[0].style.display = "block";

  formFlieghts[0].style.display = "none";

  formHotels[0].style.display = "none"
})

navHotels.addEventListener("click", () => {
  formCars[0].style.display = "none";

  formFlieghts[0].style.display = "none";

  formHotels[0].style.display = "block"
})

navFlieghts.addEventListener("click", () => {
  formCars[0].style.display = "none";

  formFlieghts[0].style.display = "block";

  formHotels[0].style.display = "none";
})

function disabled() {
  if (flieghtsDateStart.value !== '') {

    buttons[0].disabled = false;
  }
}

fetch('https://namaztimes.kz/ru/api/country?type=json')
  .then(response => response.json())
  .then(dataCountry => {
    for (key in dataCountry) {
      createCountry(dataCountry[key])
    }
  })

fetch("https://namaztimes.kz/ru/api/states?id=99")
  .then(response => response.json())
  .then(dataCity => {
    for (key in dataCity) {
      createCity(dataCity[key])
    }
  })

function createCity(data) {
  city[0].addEventListener("click", () => {
    let listCity = document.createElement("option");

    listCity.innerHTML = data;

    city[0].append(listCity)
  })

  city[1].addEventListener("click", () => {
    let listCity = document.createElement("option");

    listCity.innerHTML = data;

    city[1].append(listCity)
  })
}

function createCountry(data) {

  country[0].addEventListener("click", () => {
    let listCountry = document.createElement("option");

    listCountry.innerHTML = data;

    country[0].append(listCountry);

    disabledSelect();
  })

  country[1].addEventListener("click", () => {
    let listCountry = document.createElement("option");

    listCountry.innerHTML = data;

    country[1].append(listCountry);

    disabledSelect();
  })

}

function disabledSelect() {
  if (country[0].value !== '') {

    city[0].disabled = false;
  }

  if (country[1].value !== '') {
    city[1].disabled = false;
  }
}

buttonClear[2].addEventListener('click', () => {

  country[1].value = " ";

  city[1].disabled = true;
})

buttonClear[1].addEventListener('click', () => {
  country[0].value = " ";

  city[0].disabled = true;
})

buttonClear[0].addEventListener('click', () => {
  from.value = " ";
  to.value = " ";
})

let ulStorage = document.getElementById("local-storage");
console.log(ulStorage)

function showMessege() {
  let lengthStorage = localStorage.length;
  console.log(lengthStorage)
  if (lengthStorage > 0) {
    for (let i = 0; i < lengthStorage; i++) {
      alert(localStorage.getItem(i))
    }
  }
}


// forms[0].addEventListener("submit", () => {
//   hotelsDateStart.value;
//   hotelsDateStart.value;
//   from.value;
//   to.value;
// })
