const weatherDetails = document.getElementsByClassName("details_tr");
let values = {};

values = JSON.parse(localStorage.getItem("data"));

console.log(values);
console.log(weatherDetails);
weatherDetails[0].textContent = values.name;
weatherDetails[1].textContent = values.weather[0].main;
weatherDetails[2].textContent = values.weather[0].descrgitiption;
weatherDetails[3].textContent = values.main.temp;
weatherDetails[4].textContent = values.main.feels_like;
weatherDetails[5].textContent = values.main.pressure;
weatherDetails[6].textContent = values.main.humidity;
weatherDetails[7].textContent = values.wind.speed;
weatherDetails[8].textContent = values.wind.deg;
