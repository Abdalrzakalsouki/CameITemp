const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
let messages = document.getElementsByClassName("messages");
let weatherIcon = document.getElementById("weatherIcons");
let errorNotifcation = document.getElementById("errorNotifcation");
let detailsButton = document.getElementById("details");
if (weatherForm) {
  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;
    messages[0].textContent = "Loading...";
    messages[1].textContent = "";
    messages[2].textContent = "";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9fea2949fefcb44526952250f6fa858&units=metric`
    ).then((result) => {
      result.json().then((data) => {
        if (data.name === undefined) {
          weatherIcon.src = "./img/error.png";
          weatherIcon.style.display = "block";
          errorNotifcation.textContent =
            "City name is not valied, Please try again";
          messages[0].textContent = "";
          detailsButton.style.display = "none";
        } else {
          errorNotifcation.textContent = "";
          messages[0].textContent = "City name:" + data.name;
          messages[1].textContent = "Tempreautre:" + data.main.temp;
          messages[2].textContent = "State: " + data.weather[0].main;
          search.value = "";
          localStorage.setItem("data", JSON.stringify(data));
          switch (data.weather[0].main) {
            case "Clear": {
              weatherIcon.src = "./img/sun.png";
              weatherIcon.style.display = "block";
              break;
            }
            case "Clouds": {
              weatherIcon.src = "./img/cloud.png";
              weatherIcon.style.display = "block";
              break;
            }
            case "Smoke": {
              weatherIcon.src = "./img/smoke.png";
              weatherIcon.style.display = "block";
              break;
            }
            case "Rain": {
              weatherIcon.src = "./img/rain.png";
              weatherIcon.style.display = "block";
              break;
            }
          }
          detailsButton.style.display = "block";
        }
      });
    });
  });
}
