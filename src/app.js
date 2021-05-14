function displayTemperature(repsonse) {
  let temperatureElement = document.querySelector("#temperautre");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "7a59bc18278b7a3ad9416769fac5647c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=7a59bc18278b7a3ad9416769fac5647c
&units=metric`;

axios.get(apiUrl).then(displayTemperature);
